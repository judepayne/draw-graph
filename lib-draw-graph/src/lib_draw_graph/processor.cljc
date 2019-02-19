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
(def ^:dynamic *edge-sep* #",")   ;; separator to split an edge into pieces
(def ^:dynamic *definition-marker* #"#") ;; marker for node/ cluster info

(defn- split-parts [s] (str/split s *part-sep* -1)) ;; -1 to catch trailing empties
(defn- split-edge [e] (str/split e *edge-sep* 3))
(defn- split-def [s] (str/split s *definition-marker* -1))


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
       (map #(split-edge %))
       (filter #(> (count %) 1))
       (map #(make-edge headers %))))


(defn rich-edges [edges]
  (filter #(= 3 (count %)) edges))


(defn make-cluster [cluster]
  (let [parts (split-def cluster)]
    {(first parts) (attr-map (second parts))}))


(defn clusters [lines]
  (->> lines
       (map #(take 2 (split-edge %)))
       (filter #(= 1 (count %)))
       (mapcat identity)
       (map #(make-cluster %))
       (reduce merge)))


(defn make-node [headers [nd attrs]]
  {(zipmap headers (split-parts nd)) (attr-map attrs)})


(defn nodes [headers lines]
  (->> lines
       (mapcat #(take 2 (split-edge %)))
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
                          (clstr.graph/add-cluster acc (first cur) (second cur)))
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

;; -----------
;; Public interface functions

(defn ->submap [s]
  (->> (split-parts s)
       (partition 2)
       (map (fn [i] [(keyword (first i)) (second i)]))
       (into {})))


(defn preprocess-graph [g opts]
  (let [g* (if  (some? (:filter-graph opts))
             (filter-graph g (->submap (:filter-graph opts)))
             g)]
    (if (nil? (:elide opts)) g*
        (remove-levels g*
                       #?(:clj (Integer/parseInt (:elide opts))
                          :cljs (js/parseInt (:elide opts)))))))


(defn process [in]
  (let [g (loom-graph (:data in))]
    (-> g
        (preprocess-graph (:display-options in))
        (g/process-graph (:display-options in)))))

