(ns ^{:doc "Extending Loom to handle clusters."
      :author "Jude Payne"}
  lib-draw-graph.clustered
  (:require [loom.graph            :as loom.graph]
            [loom.attr             :as loom.attr]
            [loom.alg-generic      :as loom.gen]))


;; Loom Digraph is a Clojure record
;; I have gone with the option of assoc'ing into it
;; rather than extending the type and defining new protocols, for now.


(defn add-cluster-key
  [g cluster-on]
  (assoc-in g [:clusters :key] cluster-on))


(defn cluster-key
  [g]
  (get-in g [:clusters :key]))


(defn add-attr-to-cluster
  [g cluster attr-k attr-v]
  (assoc-in g [:clusters :attr cluster attr-k] attr-v))


(defn cluster-attr
  [g cluster]
  (get (-> g :clusters :attr) cluster))


(defn add-inter-cluster-edge
  [g edge]
  (if-let [cg (-> g :clusters :graph)]
    (assoc-in g [:clusters :graph]
              (loom.graph/add-edges cg edge))
    (assoc-in g [:clusters :graph]
              (loom.graph/digraph edge))))


(defn cluster-graph
  [g]
  (-> g :clusters :graph))


(defn add-cluster-parent
  [g cluster parent]
  (-> g
      (assoc-in [:clusters :hierarchy :->parent cluster] parent)
      (update-in [:clusters :hierarchy :->children parent]
                 (fn [old]
                   (if (some? old) (conj old cluster) (conj #{} cluster))))))


(defn cluster-parent
  [g cluster]
  (get-in g [:clusters :hierarchy :->parent cluster]))


(defn cluster-children
  [g cluster]
  (get-in g [:clusters :hierarchy :->children cluster]))


(defn cluster-descendants
  [g cluster]
  (letfn [(descend [clstr acc]
            (let [children (cluster-children g clstr)]
              (if (nil? children)
                (conj acc clstr)
                (map #(descend % (conj acc clstr)) children))))]
    (flatten (descend cluster []))))


(defn cluster->nodes
  "Returns all nodes in a cluster, given the :cluster-on key"
  [g cluster-on cluster]
  (letfn [(children [clstr acc]
            (let [chds (get-in g [:clusters :hierarchy :->children clstr])]
              (if (some? chds)
                (map #(children % acc) chds)
                (filter #(= (:animal %) clstr)  (loom.graph/nodes g)))))]
    (let [res (flatten (children cluster []))]
      (if (empty? res)
        nil
        res))))


(defn node->clusters
  "Returns the set of clusters that the node is in."
  [g cluster-on n]
  (letfn [(ancestor [acc]
            (if-let [new-ancestor
                     (get-in g
                             [:clusters :hierarchy :->parent (first acc)])]
              (ancestor (cons new-ancestor acc))
              acc))]
    (into #{} (ancestor [((keyword cluster-on) n)]))))


