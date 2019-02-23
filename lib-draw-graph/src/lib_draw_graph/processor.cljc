(ns ^{:doc "Process csv format to dot."
      :author "Jude Payne"}
  lib-draw-graph.processor
  (:require [lib-draw-graph.graph           :as g]
            [loom.graph                     :as loom.graph]
            [loom.attr                      :as loom.attr]
            [loom.alg-generic               :as loom.gen]
            [clojure.string                 :as str]
            [lib-draw-graph.spec            :as spec]
            [lib-draw-graph.clustered-graph :as clstr.graph]))

;; Keys used in all JSON messages

(def ^:dynamic *data* :data)  ;; json key where graph data is kept
(def ^:dynamic *options* :display-options)   ;; where options are kept


(def ^:dynamic *part-sep* #":")   ;; separator for keys/ values in CSV1
(def ^:dynamic *list-sep* #",")   ;; separator to split a list (e.g. edge) into pieces
(def ^:dynamic *definition-marker* #"#") ;; marker for node/ cluster info


(defn split-parts [s] (str/split s *part-sep* -1)) ;; -1 to catch trailing empties
(defn split-list [e] (str/split e *list-sep* 3))
(defn split-def [s] (str/split s *definition-marker* -1))


(defn- third
  "Returns third element of coll, or nil."
  [coll]
  (try (nth coll 2)
       #?(:clj (catch Exception e nil)
          :cljs (catch js/Object e nil))))


;; For loom graph attrs
(defn- attr-map [s]
  (reduce
   (fn [a c]
     (let [k (keyword (first c))
           v (second c)]
       (update-in a [k] (fn [old] (if (nil? old) v (str old "," v))))))
   {}
   (partition 2 (split-parts s))))


(defn- add-attr-map
  [g node-or-edge m]
  (reduce
   (fn [acc cur] (apply loom.attr/add-attr acc node-or-edge cur))
   g (vec m)))


(defn lines [s] (str/split-lines s))


(defn headers [lines] (map keyword (split-parts (first lines))))


(defn make-edge [headers edge]
  (let [strip (fn [nd] (first (split-def nd)))
        es (mapv (comp #(zipmap headers %) split-parts strip) (take 2 edge))]
    (if (third edge) (conj es (attr-map (third edge))) es)))


(defn edges [headers lines]
  (->> lines
       (map #(split-list %))
       (filter #(> (count %) 1))
       (map #(make-edge headers %))))


(defn rich-edges [edges]
  (filter #(= 3 (count %)) edges))


(defn make-cluster [cluster]
  (let [parts (split-def cluster)]
    {(first parts) (attr-map (second parts))}))


(defn clusters [lines]
  (->> lines
       (map #(take 2 (split-list %)))
       (filter #(= 1 (count %)))
       (mapcat identity)
       (map #(make-cluster %))
       (reduce merge)))


(defn make-node [headers [nd attrs]]
  {(zipmap headers (split-parts nd)) (attr-map attrs)})


(defn nodes [headers lines]
  (->> lines
       (mapcat #(take 2 (split-list %)))
       (map split-def)
       (filter #(= 2 (count %)))
       (map #(make-node headers %))
       (reduce merge)))


(defn loom-graph [s]
  (let [lines    (lines s)
        headers  (headers lines)
        edges    (edges headers (rest lines))
        clusters (clusters (rest lines))
        graph    (apply loom.graph/digraph (map #(take 2 %) edges))
        ;; add edge attrs
        graph*   (reduce (fn [acc cur]
                         (add-attr-map acc [(first cur) (second cur)] (third cur)))
                       graph (rich-edges edges))
        ;; add clusters
        graph**  (reduce (fn [acc cur]
                          (clstr.graph/update-cluster acc (first cur) :style (second cur)))
                         graph* clusters)]
    ;; add node attrs
    (reduce (fn [acc [nd attrs]]
                         (add-attr-map acc nd attrs))
                          graph** (nodes headers lines))))


;; -----------
;; Functions to manipulate the graph

(defn submap?
  "Checks whether m contains all entries in sub."
  [sub m]
  (= sub (select-keys m (keys sub))))


(defn find-node
  "Checks if part-node is part of one of the nodes in the graph. Both part-node
  and the nodes in the graph must be in map format. e.g. part-node {:id 12} and
  a node in the graph {:id 12 :name ....}. Returns the first node matched or nil."
  [g part-node]
  (reduce
   (fn [acc cur]
     (if (submap? part-node cur)
       (reduced cur)
       nil))
   (loom.graph/nodes g)))


(defn subgraph
  "Returns a sub(di)graph of g going depth first from the first occurrence of
   the (part) node n."
  [g n
   & {:keys [part-node?] :or {part-node? false}}]
  (let [node (if part-node? (find-node g n) n)]
    (apply loom.graph/digraph
           (loom.gen/pre-edge-traverse #(loom.graph/successors* g %) node))))


(defn filter-graph
  "Returns a filtered graph where nodes where is not a submap are filtered out."
  [g sub]
  (let [filtered-nodes (filter #(not (submap? sub %)) (loom.graph/nodes g))]
    (loom.graph/remove-nodes* g filtered-nodes)))


(defn ^:private leaves
  "Returns the leaves in the graph."
  [g]
  (filter #(= 0 (loom.graph/out-degree g %)) (loom.graph/nodes g)))


(defn ^:private parents-of
  "Returns the nodes that are parents of nodes."
  [g nodes]
  (dedupe (mapcat #(loom.graph/predecessors* g %) nodes)))


(defn remove-levels
  "Removes the n lowest levels from the graph."
  [g n]
  (loop [grph g
         nds (leaves g)
         lvls n]
    (if (zero? lvls)
      grph
      (let [next-gen (parents-of grph nds)
            grph* (loom.graph/remove-nodes* grph nds)]
        (recur grph* next-gen (dec lvls))))))


;; Thanks: http://hueypetersen.com/posts/2013/06/25/graph-traversal-with-clojure/
(defn eager-stateful-dfs
  "Eager depth first search that collects state as it goes.
   successors is a function of 1 arg that returns successors of node passed.
   start is the starting node.
   init is a map of initial state.
   f is a function of 3 args: current state (map), current nodes and one of its children."
  [successors start f init]
  (loop [vertices [] explored #{start} frontier [start] state init]
    (if (empty? frontier)
      state
      (let [v (peek frontier)
            neighbours (successors v)]
        (recur
          (conj vertices v)
          (into explored neighbours)
          (into (pop frontier) (remove explored neighbours))
          (reduce (fn [acc cur] (assoc acc cur (f acc v cur))) state neighbours))))))


(defn- update-rank
  "Returns rank for the next (node) given state map."
  [state node next]
  (let [mx (fn [x y] (if (nil? x) y (max x y)))]
    (mx (get state next) (inc (get state node)))))


(defn ranks
  "Returns ranks for each node in g. 0-indexed."
  [g]
  (let [root? #(empty? (loom.graph/predecessors* g %))
        roots (filter root? (loom.graph/nodes g))
        init (zipmap roots (repeat 0))]
    (reduce
     (fn [acc cur]
       (eager-stateful-dfs (partial loom.graph/successors* g)
                           cur
                           update-rank
                           acc))
     init
     roots)))


(defn fmap [f m] (into (empty m) (for [[k v] m] [k (f v)])))


(defn fmap*
  "Applies f to every value in nested map."
  [f m]
  (fmap #(if (map? %)
           (fmap* f %)
           (f %))
        m))


(defn rank-info
  "Organizes ranks by k. k is usually a cluster."
  [ranks k]
  (let [r  (->> ranks
                (group-by (fn [n] (get (first n) k)))
                (into {} (map (fn [[k v]] [k (group-by second v)]))))]
    (fmap* #(map first %) r)))


(defn max-ranked-nodes
  "Returns seq of nodes at the max rank for the k. k is usually a cluster."
  [info k]
  (let [m (get info k)]
    (reduce
     (fn [acc [k v]] (if (> k (:rank acc)) {:rank k :items v} acc))
     {:rank 0 :items nil}
     m)))


(defn min-ranked-nodes
  "Returns seq of nodes at the min rank for the k. k is usually a cluster."
  [info k]
  (let [m (get info k)]
    (reduce
     (fn [acc [k v]] (if (< k (:rank acc)) {:rank k :items v} acc))
     {:rank 1000000 :items nil}
     m)))


(defn widest-rank
  "Returns the count of the max grouping of k"
  [info k]
  (let [m (get info k)
        max-k (key (apply max-key #(count (val %)) m))]
    max-k))

(defn count-at-rank
  "Returns the count of nodes at rank"
  [info k rank]
  (-> info
      (get k)
      (get rank)
      count))


(defn edges-between
  "Returns a set of edges between all of the min ranked nodes of clstr1
   and one of the max ranked nodes in clstr2."
  [info clstr1 clstr2]
  (let [clstr1-mins (:items (max-ranked-nodes info clstr1))
        clstr2-max  (first (:items (min-ranked-nodes info clstr2)))]
    (partition 2 (interleave clstr1-mins (repeat clstr2-max)))))


(def get-rank-info
  (memoize
   (fn [g cluster-on]
     (-> g ranks (rank-info cluster-on)))))


(defn add-stack
  "Adds a stack of clusters to the graph"
  [g cluster-on stack]
  (let [ri    (get-rank-info g cluster-on)
        edges (mapcat #(apply edges-between ri %) (partition 2 1 stack))]
    (-> (apply loom.graph/add-edges g edges)
        (loom.attr/add-attr-to-edges :style "invis" edges))))


(defn same-ranks
  [info]
  (into {}
        (map
         (fn [[k v]]
           (let [[_ inner] (vals v)]
             (when (> (count inner) 1)
               {k (vals v)})))
         info)))


(defn fix-ranks
  [g cluster-on]
  (let [same (same-ranks (get-rank-info g cluster-on))]
    (reduce
     (fn [acc [k v]]
       (clstr.graph/update-cluster acc k :ranks v ))
     g
     same)))

;; ------------
;; pre-processing functions


(defn ->submap [s]
  (->> (split-parts s)
       (partition 2)
       (map (fn [i] [(keyword (first i)) (second i)]))
       (into {})))


(defn filter-the-graph [g opts]
  (if  (some? (:filter-graph opts))
    (filter-graph g (->submap (:filter-graph opts)))
    g))


(defn fix-ranks-in-the-graph [g opts]
  (if (and (some? (:cluster-on opts))
           (= (:layout opts) "dot")
           (:fix-ranks? opts))
    (fix-ranks g (keyword (:cluster-on opts)))
    g))


(defn add-stacks-to-the-graph [g opts]
  (if (and (some? (:stacks opts)) (some? (:cluster-on opts)))
    (let [stacks (split-list (:stacks opts))]
      (reduce (fn [acc cur]
                (add-stack acc
                           (keyword (:cluster-on opts))
                           (split-parts cur)))
              g
              stacks))
    g))


(defn elide-the-graph [g opts]
  (if (some? (:elide opts))
    (remove-levels g
                   #?(:clj (Integer/parseInt (:elide opts))
                      :cljs (js/parseInt (:elide opts))))
    g))



;; -----------
;; public interface functions




(defn preprocess-graph [g opts]
  (-> g
      (filter-the-graph opts)
      (elide-the-graph opts)
      (fix-ranks-in-the-graph opts)
      (add-stacks-to-the-graph opts)))


(defn process [in]
  (let [g (loom-graph (:data in))]
    (-> g
        (preprocess-graph (:display-options in))
        (g/process-graph (:display-options in)))))

