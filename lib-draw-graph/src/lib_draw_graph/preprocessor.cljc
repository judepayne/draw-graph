(ns ^{:doc "Processing functions for Loom graphs."
      :author "Jude Payne"}
  lib-draw-graph.preprocessor
  (:require [loom.graph                     :as loom.graph]
            [loom.alg-generic               :as loom.gen]
            [loom.attr                      :as loom.attr]
            [lib-draw-graph.clustered       :as clstr]))


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
  [g info clstr1 clstr2]
  (let [edges (loom.graph/edges g)
        clstr1s (clstr/cluster-descendants g clstr1)
        clstr2s (clstr/cluster-descendants g clstr2)
        clstr1s-mins (mapcat #(:items (max-ranked-nodes info %)) clstr1s)
        clstr2s-maxs  (mapcat #(:items (min-ranked-nodes info %)) clstr2s)]
    (for [x clstr1s-mins
          y clstr2s-maxs
          :when (not (.contains edges [x y]))]
      [x y])))


(def get-rank-info
  (memoize
   (fn [g cluster-on]
     (-> g ranks (rank-info cluster-on)))))


(defn add-stack
  "Adds a stack of clusters to the graph"
  [g cluster-on stack]
  (let [ri    (get-rank-info g cluster-on)
        edges (mapcat #(apply edges-between g ri %) (partition 2 1 stack))]
    (-> (apply loom.graph/add-edges g edges)
        (loom.attr/add-attr-to-edges :style "invis" edges))))


(defn same-ranks
  [info]
  "Filters down to just the ranks that need to be fixed."
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
       (clstr/add-attr-to-cluster acc k :fix-ranks v ))
     g
     same)))

