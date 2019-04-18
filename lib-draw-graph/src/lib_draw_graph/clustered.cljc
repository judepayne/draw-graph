(ns ^{:doc "Extending Loom to handle clusters."
      :author "Jude Payne"}
  lib-draw-graph.clustered
  (:require [loom.graph            :as loom.graph]
            [loom.attr             :as loom.attr]
            [loom.alg-generic      :as loom.gen]))


;; Loom Digraph is a Clojure record
;; I have gone with the option of assoc'ing into it
;; rather than extending the type and defining new protocols, for now.
(defn ->keyword
  "Converts to keyword if needed"
  [k]
  (if (keyword? k) k (keyword k)))


(defn add-cluster-key
  [g cluster-on]
  (assoc-in g [:clusters :key] (->keyword cluster-on)))


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


(defn cluster-graph
  [g]
  (-> g :clusters :hierarchy :->children))


(defn cluster-siblings
  [g cluster]
  (let [parent (cluster-parent g cluster)
        chdrn (cluster-children g parent)]
    (remove #{cluster} chdrn)))


(defn cluster-descendants
  "Returns all clusters inside the cluster recursively."
  [g cluster]
  (letfn [(descend [clstr acc]
            (let [children (cluster-children g clstr)]
              (if (nil? children)
                (conj acc clstr)
                (map #(descend % (conj acc clstr)) children))))]
    (flatten (descend cluster []))))


(defn cluster->nodes
  "Returns the nodes in the current cluster but not in children
   of the current cluster."
  [g cluster]
  (filter
   #(= cluster (get % (cluster-key g)))
   (loom.graph/nodes g)))


(defn cluster->all-nodes
  "Returns all nodes in a cluster, given the :cluster-on key"
  [g cluster]
  (let [k (cluster-key g)]
    (letfn [(children [clstr acc]
              (let [chds (cluster-children g clstr)
                    cur-nodes (cluster->nodes g k clstr)
                    acc (conj acc cur-nodes)]
                (if (some? chds)
                  (map #(children % acc) chds)
                  acc)))]
      (let [res (distinct (flatten (children cluster [])))]
        (if (empty? res)
          nil
          res)))))


(defn nodes-by-cluster
  "Returns nodes in the graph grouped by cluster."
  [g]
  (group-by (cluster-key g) (loom.graph/nodes g)))


(defn clusters
  "Returns the set of all clusters in the graph."
  [g]
  (into #{} (flatten (conj (keys (nodes-by-cluster g))
                           (vals (-> g :clusters :hierarchy :->parent))))))


(defn node->clusters
  "Returns the set of clusters that the node is in."
  [g n]
  (letfn [(ancestor [acc]
            (if-let [new-ancestor (cluster-parent g (first acc))]
              (ancestor (cons new-ancestor acc))
              acc))]
    (into #{} (ancestor [((cluster-key g) n)]))))


