(ns ^{:doc "Post process the svg."
      :author "Jude Payne"}
  lib-draw-graph.postprocessor
  (:require [lib-draw-graph.svg :as svg]
            [lib-draw-graph.anneal :as anneal]
            [lib-draw-graph.clustered :as clstr]
            [lib-draw-graph.geometry :as g]
            [clojure.set :as s]))


(defn free-clusters
  "Returns clusters that (a) contain clusters (b) contain no nodes directly."
  ;; TODO: remove the (b) restriction by parsing all svg nodes and adding
  ;; 'obstacles' into the annealing routine.
  [g]
  (let [clstrs (clstr/clusters g)
        ;with-nodes (into #{} (keys (nodes-by-cluster g)))
        has-chdn (filter #(some? (clstr/cluster-children g %)) clstrs)]
    ;(s/difference clstrs with-nodes)
    (into #{} has-chdn)))


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
  [g]
  (filter (free-clusters g) (kahn-sort (clstr/cluster-graph g))))


(defn with-chdn
  "Returns a vec of clusters with their children."
  [g clstrs]
  (mapv #(vector % (clstr/cluster-children g %)) clstrs))


(defn free-clusters-with-children
  "Provides the targets for annealing in the graph."
  [g]
  (->> (sorted-free-clusters g)
       (with-chdn g)))

;; Now we need to set up the annealing jobs by reading in the svg
;; Since graphviz labels clusters at the top, we'll use the top
;; of the uppermost sibling as the top boundary (taking into account
;; the SEP) otherwise the bounding box of the containing cluster.
;; we'll calculate SEP for each annealing job by finding the minimum
;; distance between a children cluster's bounding box (LRB) and the boundary.


(defn svg->zipper [svg]
  (svg/->zipper (svg/parse-svg svg)))


(defn clusters->boxes
  "Get the bounding boxes for the clusters from the zipper over the svg."
  [z clstrs]
  (reduce 
   (fn [a c] (assoc a c (svg/cluster->rect z c)))
   {}
   clstrs))


(defn nodes->boxes
  "Get the bounding boxes for all nodes from the zipper over the svg."
  [z]
  )


(defn tasks->clusters 
  "Converts anneal-tasks to a set of clusters"
  [tasks]
  (reduce (fn [a c]
            (-> a
                (conj (first c))
                (clojure.set/union (second c))))
          #{}
          tasks))


(defn sep
  "Returns the separation map between the bounding"
  [bounding & rects]
  {:l (- (apply min (map :x rects)) (:x bounding))
   :t (- (apply min (map :y rects)) (:y bounding))
   :r (- (+ (:x bounding) (:w bounding))
         (apply max (map (fn [o] (+ (:x o) (:w o))) rects)))
   :b (- (+ (:y bounding) (:h bounding))
         (apply max (map (fn [o] (+ (:y o) (:h o))) rects)))})


(def collision-sep 8)


(defn adjust-sep
  "takes a sep, preserves the top but adjusts other seps to minimum."
  [sep]
  (let [min-lrb (min (:l sep) (:r sep) (:b sep))]
    (assoc sep :l min-lrb :r min-lrb :b min-lrb)))


(defn env
  "Constructs a nested map which parameters required for annealing
   from a zipper, a graph and the key clustered on in the graph."
  [z g node-label-fn]
  (let [tasks (free-clusters-with-children g)
        clstrs (tasks->clusters tasks)
        rects (clusters->boxes z clstrs)]
    ;(println rects)
    (reduce
     (fn [a [prnt chdn]]
       (let [p-rect (get rects prnt)
             c-rects (map #(get rects %) chdn)
             sep (adjust-sep (apply sep p-rect c-rects))
             state (into {} (map #(vector % (get rects %)) chdn))
             constr {:boundary (g/inner-rect sep p-rect)
                     :grow true
                     :collision collision-sep
                     :obstacles (reduce
                                 (fn [acc cur]
                                   (assoc acc
                                          (node-label-fn cur)
                                          (svg/node->rect z (node-label-fn cur))))
                                 {}
                                 (clstr/cluster->nodes g prnt))}]
         (-> a
             (assoc-in [prnt :constraints] constr)
             (assoc-in [prnt :state] state)
             (assoc-in [prnt :boundary-sep] sep)
             (assoc-in [prnt :rect] p-rect))))
     {}
     tasks)))


(defn env->map
  "Flattens an environment back rectangles"
  [env]
  (reduce
   (fn [a [k v]]
     (-> a
         (assoc k (-> v :rect))
         (merge (-> v :state))))
   {}
   env))


(defn do-annealing
  [z g dims label-fn]
  (let [env (env z g label-fn)]
    (reduce (fn [a [k v]]
              (let [new-st (anneal/annealing (-> v :state)
                                      10000
                                      0
                                      (-> (get a k) :constraints)
                                      anneal/neighbor-fn
                                      anneal/cost-fn
                                      anneal/p-fn
                                      anneal/temp-fn
                                      :terminate-early? true
                                      :dims dims)
                    adj-env (reduce
                             (fn [acc [k' v']]
                               (if (some?  (get acc k'))
                                 (-> acc
                                     (assoc-in [k' :rect] v')
                                     (assoc-in [k' :constraints :boundary]
                                               (g/inner-rect
                                                (-> (get acc k') :boundary-sep)
                                                v')))
                                 acc))
                             a
                             new-st)]
                (-> adj-env
                    (assoc-in [k :state] new-st))))
            env
            env)))


(defn editor-rects [env clstr node]
  (if-let [edited (get env clstr)]
    (let [ps (svg/rect->svg edited)]
      (assoc-in node [:attrs (first ps)] (second ps)))
    node))


(defn edit-cluster-rects [z env]
  (svg/tree-edit z
                 svg/all-clusters
                 7
                 (fn [n] (first (:content n)))
                 5
                 (partial editor-rects env)))


;; Section on moving text around (cluster labels)

(def y-label-spacer 18) ;; y dist below bounding rect's top


(defn editor-label-posn [env clstr node]
  ;; recentres cluster label
  (if-let [edited (get env clstr)]
    (-> node
        (assoc-in [:attrs :x] (+ (:x edited) (/ (:w edited) 2)))
        (assoc-in [:attrs :y] (+ (:y edited) y-label-spacer)))
    node))


(defn edit-cluster-labels [z env]
  (svg/tree-edit z
                 svg/all-clusters
                 7
                 (fn [n] (first (:content n)))
                 7
                 (partial editor-label-posn env)))


(defn optimize-clusters
  "Anneals free clusters in z & g.
   z is a zipper over the svg and g the underlying graph.
   Returns svg."
  [svg g label-fn
   & {:keys [dims]
       :or {dims [:x :y :w :h]}}]
  (let [z (svg->zipper svg)
        env-out (env->map (do-annealing z g dims label-fn))]
    (-> (edit-cluster-rects z env-out)
        svg/->zipper
        (edit-cluster-labels env-out)
        svg/->xml)))

