(ns ^{:doc "Post process the svg."
      :author "Jude Payne"}
  lib-draw-graph.postprocessor
  (:require [lib-draw-graph.svg :refer :all]
            [lib-draw-graph.anneal :refer :all]
            [lib-draw-graph.clustered :refer :all]
            [clojure.set :as s]))


(defn free-clusters
  "Returns clusters that (a) contain clusters (b) contain no nodes directly."
  ;; TODO: remove the (b) restriction by parsing all svg nodes and adding
  ;; 'obstacles' into the annealing routine.
  [g cluster-on]
  (let [clstrs (clusters g cluster-on)
        with-nodes (into #{} (keys (nodes-by-cluster g cluster-on)))]
    (s/difference clstrs with-nodes)))


;;Kahn sort - topological sort of a graph
;; https://github.com/cloverage/cloverage/blob/HEAD/cloverage/src/cloverage/kahn.clj#L30
(defn without
  "Returns set s with x removed."
  [s x] (s/difference s #{x}))


(defn take-1
  "Returns the pair [element, s'] where s' is set s with element removed."
  [s] {:pre [(not (empty? s))]}
  (let [item (first s)]
    [item (without s item)]))


(defn no-incoming
  "Returns the set of nodes in graph g for which there are no incoming
  edges, where g is a map of nodes to sets of nodes."
  [g]
  (let [nodes (set (keys g))
        have-incoming (apply s/union (vals g))]
    (s/difference nodes have-incoming)))


(defn normalize
  "Returns g with empty outgoing edges added for nodes with incoming
  edges only.  Example: {:a #{:b}} => {:a #{:b}, :b #{}}"
  [g]
  (let [have-incoming (apply s/union (vals g))]
    (reduce #(if (get % %2) % (assoc % %2 #{})) g have-incoming)))


(defn kahn-sort
  "Proposes a topological sort for directed graph g using Kahn's
  algorithm, where g is a map of nodes to sets of nodes. If g is
  cyclic, returns nil."
  ([g]
   (kahn-sort (normalize g) [] (no-incoming g)))
  ([g l s]
   (if (empty? s)
     (when (every? empty? (vals g)) l)
     (let [[n s'] (take-1 s)
           m (g n)
           g' (reduce #(update-in % [n] without %2) g m)]
       (recur g' (conj l n) (s/union s' (s/intersection (no-incoming g') m)))))))


(defn sorted-free-clusters
  "Kahn sorted free clusters"
  [g cluster-on]
  (filter (free-clusters g cluster-on) (kahn-sort (cluster-graph g))))


(defn with-chdn
  "Returns a vec of clusters with their children."
  [g clstrs]
  (mapv #(vector % (cluster-children g %)) clstrs))


(defn free-clusters-with-children
  "Provides the targets for annealing in the graph."
  [g cluster-on]
  (->> (sorted-free-clusters g cluster-on)
       (with-chdn g)))

;; Now we need to set up the annealing jobs by reading in the svg
;; Since graphviz labels clusters at the top, we'll use the top
;; of the uppermost sibling as the top boundary (taking into account
;; the SEP) otherwise the bounding box of the containing cluster.
;; we'll calculate SEP for each annealing job by finding the minimum
;; distance between a children cluster's bounding box (LRB) and the boundary.


(defn svg->zipper [svg]
  (->zipper (parse-svg svg)))


(defn clusters->boxes
  "Get the bounding boxes for the clusters from the zipper holding the svg."
  [z clstrs]
  (reduce 
   (fn [a c] (assoc a c (cluster->rect z c)))
   {}
   clstrs))


