(ns ^{:doc "Processing functions for Loom graphs."
      :author "Jude Payne"}
  lib-draw-graph.preprocessor
  (:require [loom.graph                     :as loom.graph]
            [loom.alg-generic               :as loom.gen]
            [loom.alg                       :as loom.alg]
            [loom.attr                      :as loom.attr]
            [lib-draw-graph.clustered       :as clstr]
            [lib-draw-graph.graph           :as graph]
            [clojure.set                    :as set]))


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


(defn leaves
  "Returns the leaves in the graph."
  [g]
  (filter #(graph/leaf? g %) (loom.graph/nodes g)))


(defn parents-of
  "Returns the nodes that are parents of nodes."
  [g nodes]
  (letfn [(visible-parents [g n]
            (let [prnts (loom.graph/predecessors* g n)]
              (filter #(not (graph/edge-invisible? g % n)) prnts)))]
    (dedupe (mapcat #(visible-parents g %) nodes))))


(defn remove-levels
  "Removes the n lowest levels from the graph."
  [g n]
  (let [clustered? (clstr/clustered? g)]
    (loop [grph g
           nds (leaves g)
           lvls n]
      (if (zero? lvls)
        grph
        (let [next-gen (parents-of grph nds)
              grph* (if clustered?
                      (:graph (clstr/remove-nodes grph nds))
                      (loom.graph/remove-nodes* grph nds))]
          (recur grph* next-gen (dec lvls)))))))



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


(defn edges-between
  "Returns a set of edges between all of the min ranked nodes of clstr1
   and one of the max ranked nodes in clstr2. edges already in the graph
   are returned marked with :constraint"
  [g info clstr1 clstr2]
  (let [edges (loom.graph/edges g)
        clstr1s (clstr/cluster-descendants g clstr1)
        clstr2s (clstr/cluster-descendants g clstr2)
        clstr1s-mins (mapcat #(:items (max-ranked-nodes info %)) clstr1s)
        clstr2s-maxs  (mapcat #(:items (min-ranked-nodes info %)) clstr2s)]
    (for [x clstr1s-mins
          y clstr2s-maxs]
      [x y (if (some #{[x y]} edges) :constraint)])))


(def get-rank-info
  (memoize
   (fn [g cluster-on]
     (-> g ranks (rank-info cluster-on)))))


(defn add-stack
  "Adds a stack of clusters to the graph"
  [g cluster-on stack]
  (let [ri    (get-rank-info g cluster-on)
        edges (mapcat #(apply edges-between g ri %) (partition 2 1 stack))
        ;;separate edges marked with :constraint from those that are not.
        edges' (group-by #(= :constraint (nth % 2)) edges)
        edges'-f (get edges' false)
        edges'-t (get edges' true)]
    (-> (apply loom.graph/add-edges g edges'-f) ;; don't add :constraint edges
        (loom.attr/add-attr-to-edges :style "invis" edges'-f)
        ;; for edges marked with :constraint, set the :constraint in the attrs
        (loom.attr/add-attr-to-edges :constraint true edges'-f))))


(defn add-invisible-cluster-edges
  [g edges]
  (let [g' (reduce (fn [acc [c1 c2]]
                     (-> acc
                         (add-stack (clstr/cluster-key g) [c1 c2])))
                   g
                   edges)]
    g'))


(defn sort-clusters-by-rank
  "Takes the ranks from an old graph and a subset of clusters and returns
   the clusters in rank order."
  [ranks clusters]
  (let [r' (into [] (vals (reduce (fn [acc [k vs]]
                                    (assoc acc k (into #{} (map first vs))))
                                  {}
                                  (group-by val ranks))))]
   (loop [old-ranks r'
           acc []
           clstrs clusters]
      (if (empty? old-ranks)
        acc
        (let [items-at (first old-ranks)
              matched (set/intersection clstrs items-at)
              unmatched (set/difference clstrs items-at)]
          (if (empty? matched)
            (recur (rest old-ranks) acc clstrs)
            (recur (rest old-ranks) (conj acc matched) unmatched)))))))


(defn rankseq->edges
  [rankseq]
  (mapcat
   (fn [[srcs dests]] (for [x srcs y dests] [x y]))
   (partition 2 1 rankseq)))


(defn remove-invisible-edges
  [g]
  (let [edges (filter (fn [[s d]] (= "invis" (loom.attr/attr g s d :style)))
                      (loom.graph/edges g))]
    (apply loom.graph/remove-edges g edges)))



(defn remove-nodes-and-rerank
  "A wrapper function to ensure that invisible cluster edges are always
   added back in when appropriate."
  [g nds]
  (let [{:keys [graph clusters]} (clstr/remove-nodes g nds)
        edges (when (-> g :clusters :edge-graph)
                (rankseq->edges
                 (sort-clusters-by-rank
                  (ranks (-> g :clusters :edge-graph))
                  clusters)))]
    (if edges
      (-> graph
          remove-invisible-edges
          (add-invisible-cluster-edges edges))
      graph)))


(defn filter-graph
  "Returns a filtered graph where nodes where is not a submap are filtered out."
  [g subs]
  (let [sub (first subs)
        filtered-nodes (filter #(not (reduce
                                      (fn [acc term] (or acc (submap? term %)))
                                      false subs))
                               (loom.graph/nodes g))]
    (remove-nodes-and-rerank g filtered-nodes)))


(defn paths
  "Returns a graph with only nodes on paths between start filtering term and the end."
  [g start-subs end-subs]
  (let [start-nodes (loom.graph/nodes (filter-graph g start-subs))
        end-nodes (loom.graph/nodes (filter-graph g end-subs))
        combins (for [s start-nodes
                      e end-nodes]
                  [s e])
        paths (map
               #(apply loom.gen/bf-path (partial graph/successors g) %)
               combins)
        nds (remove nil? (into #{} (flatten paths)))
        nds-compl (set/difference (loom.graph/nodes g) nds)]
    (remove-nodes-and-rerank g nds-compl)))


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

