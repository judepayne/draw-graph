(ns ^{:doc "Extending Loom to handle clusters."
      :author "Jude Payne"}
  lib-draw-graph.clustered-graph
  (:require [loom.graph            :as loom.graph]
            [loom.attr             :as loom.attr]
            [loom.alg-generic      :as loom.gen]))


(defprotocol ClusteredGraph
  (add-cluster [g cluster cluster-meta])
  (update-cluster [g cluster k cluster-meta])
  (clusters [g])
  (get-cluster [g cluster]))


#?(:clj (extend loom.graph.BasicEditableDigraph

          ClusteredGraph

          {:add-cluster
           (fn [g cluster cluster-meta]
             (update-in g [:clusters] assoc cluster cluster-meta))

           :update-cluster
           (fn [g cluster k cluster-meta]
             (assoc-in g [:clusters cluster k] cluster-meta))

           :clusters
           (fn [g]
             (:clusters g))

           :get-cluster
           (fn [g cluster]
             (get (:clusters g) cluster))})

   :cljs (extend-type loom.graph.BasicEditableDigraph

          ClusteredGraph

          (add-cluster [ g cluster cluster-meta]
            (update-in g [:clusters] assoc cluster cluster-meta))

          (update-cluster [g cluster k cluster-meta]
            (assoc-in g [:clusters cluster k] cluster-meta))

          (clusters [g] (:clusters g))

          (get-cluster [g cluster] (get (:clusters g) cluster))))
