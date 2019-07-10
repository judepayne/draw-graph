(ns ^{:doc "Post process the svg."
      :author "Jude Payne"}
  lib-draw-graph.postprocessor
  (:require [lib-draw-graph.svg :as svg]
            [lib-draw-graph.anneal :as anneal]
            [loom.graph            :as loom.graph]
            [lib-draw-graph.clustered :as clstr]
            [lib-draw-graph.geometry :as g]
            [lib-draw-graph.util :as util]
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


(defn tasks->clusters
  "Converts anneal-tasks to a set of clusters"
  [tasks]
  (reduce (fn [a [k v]]
            (-> a
                (conj k)
                (clojure.set/union v)))
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
  ([sep & {:keys [cluster-sep BT?] :or {cluster-sep nil BT? false}}]
   (if (not BT?)
     (if cluster-sep
       (assoc sep :l cluster-sep :r cluster-sep :b cluster-sep)
       (let [min-lrb (min (:l sep) (:r sep) (:b sep))]
         (assoc sep :l min-lrb :r min-lrb :b min-lrb)))
     ;; Bottom Top layout. Need to constraint differently
     (if cluster-sep
       (assoc sep :l cluster-sep :r cluster-sep :t cluster-sep)
       (let [min-lrt (min (:l sep) (:r sep) (:t sep))]
         (assoc sep :l min-lrt :r min-lrt :t min-lrt))))))


(defn parse-int [s]
  #?(:clj (Integer/parseInt s)
     :cljs (js/parseInt s)))


(defn str->int [cs error-msg]
  (if (integer? cs)
    cs
    (try
      (parse-int cs)
      #?(:clj (catch Exception e (throw (util/err error-msg)))
         :cljs (catch js/Error e (throw (util/err error-msg)))))))


(defn env
  "Constructs a nested map which parameters required for annealing
   from a zipper, a graph and the key clustered on in the graph."
  [z g opts node-label-fn]
  (let [cluster-sep (when (-> opts :pp-cluster-sep)
                      (str->int  (-> opts :pp-cluster-sep) "cluster separation should be an integer"))
        BT? (= (-> opts :rankdir) "BT")
        tasks (into {} (free-clusters-with-children g))
        clstrs (tasks->clusters tasks)
        rects (clusters->boxes z clstrs)
        seps (reduce
              (fn [a [k v]]
                (let [s (apply sep (get rects k) (map #(get rects %) v))
                      adj-s (if cluster-sep
                              (adjust-sep s :cluster-sep cluster-sep :BT? BT?)
                              (adjust-sep s :BT? BT?))]
                  (assoc a k adj-s)))
              {} tasks)
        inner-rects (reduce (fn [a [k v]] (assoc a k (g/inner-rect v (get rects k)))) {} seps)
        e (reduce
           (fn [a [prnt chdn]]
             (let [state {;; boundary is the inner-rect
                          :boundary (get inner-rects prnt)
                          ;; but object within the boundary are outers (true rects) not inners
                          :objects (mapv #(get rects %) (get tasks prnt))}
                   constr {:boundary true
                           :grow true
                           :collision (if cluster-sep
                                        cluster-sep
                                        collision-sep)
                           :obstacles (mapv #(svg/node->rect z (node-label-fn %))
                                            (clstr/cluster->nodes g prnt))}]
               (-> a
                   (assoc-in [prnt :constraints] constr)
                   (assoc-in [prnt :state] state)
                   (assoc-in [prnt :boundary-sep] (get seps prnt)))))
           {}
           tasks)]
    e))



(defn env->map
  "Flattens an environment back rectangles"
  [env]
  (reduce
   (fn [a [k v]]
     (let [sep (:boundary-sep v)
           bdry (-> v :state :boundary)
           rect (if sep (g/outer-rect sep bdry) bdry)
           others (reduce (fn [a' c'] (assoc a' (:name c') c')) {} (-> v :state :objects))]
       (-> a
           (assoc k rect)
           (merge others))))
   {}
   env))


(def max-move-factor 50)  ;; max move defined by size of primary annealing dimension / this



(defn update-env
  "updates environment with new state, for each <cluster, new-st> pair
  in new-st updating to the new rect and boundary."
  [env k new-st]
  (let [env1 (assoc-in env [k :state] new-st)
        objects (reduce (fn [acc c] (assoc acc (:name c) c)) {} (:objects new-st))]
    (reduce (fn [acc [k v]]
              (if (some? (get acc k))
                (let [sep (get-in acc [k :boundary-sep])]
                  ;; Annealing is done outside in (for nested cluster hierarchies).
                  ;; after each round of annealing we need to take objects from the previous
                  ;; round and set them - adjusted to inner-rects - for the next round.
                  (assoc-in acc [k :state :boundary] (g/inner-rect sep v)))
                acc))
            env1
            objects)))


(defn do-annealing
  [z g opts label-fn]
  (let [env (env z g opts label-fn)
        ;b (println env)
        ;b (reduce (fn [a [k v]] (println k (-> :state :boundary) (-> v :state :objects))) {} env)
        rankdir (-> opts :rankdir)
        y-retard (if (or (= "TB" rankdir) (= "BT" rankdir))
                   (str->int (-> opts :pp-anneal-bias) "anneal bias should be an integer") nil)
        x-retard (if (or (= "LR" rankdir) (= "RL" rankdir))
                   (str->int (-> opts :pp-anneal-bias) "anneal bias should be an integer") nil)
        dims (if (-> opts :pp-clusters)
               (reduce-kv (fn [m k v] (if v (conj m k) m))
                                        []
                                        (-> opts :pp-clusters))
               [:x :w :y :h])]
    (reduce (fn [a [k v]]
              ;(println "loop " k (get a k))
              (let [cur (get a k)
                    ;z (println cur)
                    new-st (anneal/annealing (:state cur)
                                      25000
                                      0
                                      (:constraints cur)
                                      anneal/neighbor-fn
                                      anneal/cost-fn
                                      anneal/p-fn
                                      anneal/temp-fn
                                      :terminate-early? true
                                      :dims dims
                                      :x-retard x-retard
                                      :y-retard y-retard
                                      :max-move (let [bdry (-> cur :state :boundary)]
                                                  (if (or (= "TB" rankdir) (= "BT" rankdir))
                                                    (quot (:w bdry) max-move-factor)
                                                    (quot (:h bdry) max-move-factor))))]
                (update-env a k new-st)))
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

(def x-label-spacer 10) ;; x dist insider bounding rect
(def y-label-spacer 18) ;; y dist below bounding rect's top
(def y-label-spacer-BT 10)


(defn editor-label-posn [env g opts clstr node]
  ;; repositions cluster label
  (let [BT? (= "BT" (-> opts :rankdir))]
    (if (not BT?)
      (if-let [edited (get env clstr)]
        (case (-> (clstr/merged-cluster-attr g clstr :style) :labeljust)

          "l" (-> node
                  (assoc-in [:attrs :x] (+ (:x edited) x-label-spacer))
                  (assoc-in [:attrs :y] (+ (:y edited) y-label-spacer))
                  (assoc-in [:attrs :text-anchor] "start"))

          "r" (-> node
                  (assoc-in [:attrs :x] (- (+ (:x edited) (:w edited)) x-label-spacer))
                  (assoc-in [:attrs :y] (+ (:y edited) y-label-spacer))
                  (assoc-in [:attrs :text-anchor] "end"))

          (-> node
              (assoc-in [:attrs :x] (+ (:x edited) (/ (:w edited) 2)))
              (assoc-in [:attrs :y] (+ (:y edited) y-label-spacer))))
        node)

      ;; Bottom Top layout. position labels at bottom
      (if-let [edited (get env clstr)]
        (case (-> (clstr/merged-cluster-attr g clstr :style) :labeljust)

          "l" (-> node
                  (assoc-in [:attrs :x] (+ (:x edited) x-label-spacer))
                  (assoc-in [:attrs :y] (- (+ (:y edited) (:h edited)) y-label-spacer-BT))
                  (assoc-in [:attrs :text-anchor] "start"))

          "r" (-> node
                  (assoc-in [:attrs :x] (- (+ (:x edited) (:w edited)) x-label-spacer))
                  (assoc-in [:attrs :y] (- (+ (:y edited) (:h edited)) y-label-spacer-BT))
                  (assoc-in [:attrs :text-anchor] "end"))

          (-> node
              (assoc-in [:attrs :x] (+ (:x edited) (/ (:w edited) 2)))
              (assoc-in [:attrs :y] (- (+ (:y edited) (:h edited)) y-label-spacer-BT))))
        node))))


(defn edit-cluster-labels [z g opts env]
  (svg/tree-edit z
                 svg/all-clusters
                 7
                 (fn [n] (first (:content n)))
                 7
                 (partial editor-label-posn env g opts)))


(defn optimize-clusters
  "Anneals free clusters in z & g.
   z is a zipper over the svg and g the underlying graph.
   Returns svg."
  [svg g label-fn opts]
  (let [z (svg->zipper svg)
        env-out (env->map (do-annealing z g opts label-fn))]
    (-> (edit-cluster-rects z env-out)
        svg/->zipper
        (edit-cluster-labels g opts env-out)
        svg/->xml)))
