(ns ^{:doc "Extending Loom to handle clusters."
      :author "Jude Payne"}
  lib-draw-graph.clustered
  (:require [loom.graph            :as loom.graph]
            [loom.alg-generic      :as loom.gen]
            [clojure.set           :as set]))


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


(defn clustered?
  [g]
  (if (cluster-key g)
    true
    false))


(defn add-attr-to-cluster
  [g cluster attr-k attr-v]
  (assoc-in g [:clusters :attr cluster attr-k] attr-v))



;; --- Cluster edge graph functionality ------

(defn add-cluster-edge
  [g src tgt]
  (update-in g [:clusters :edge-graph]
             (fn [old tgt]
               (case old
                 nil (loom.graph/digraph [src tgt])
                 (loom.graph/add-edges old [src tgt])))
             tgt))


(defn remove-clusters-from-edge-graph
  [g clstrs]
  (update-in g [:clusters :edge-graph]
             (fn [old clstrs]
               (apply loom.graph/remove-nodes old clstrs))
             clstrs))


(defn delete-edge-graph
  [g]
  (assoc g
         :clusters
         (dissoc (-> g :clusters) :edge-graph)))


(defn edge-graph
  [g]
  (-> g :clusters :edge-graph))


;; --- Cluster parent graph functionality ------

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


(defn first-cluster-attr
  "Gets sub-key attrs for the cluster, or if none, it's parent's attrs
   and so on."
  [g cluster sub-key]
  (let [attr (sub-key (get (-> g :clusters :attr) cluster))]
    (if attr
      attr
      (if-let [parent (cluster-parent g cluster)]
        (first-cluster-attr g parent sub-key)
        nil))))


(defn merged-cluster-attr
  "Goes to the ultimate parent of the cluster and back down merging attributes
  such that the child's attributes overwrite the parent's."
  [g cluster sub-key]
  (if-let [parent (cluster-parent g cluster)]
    (merge  (merged-cluster-attr g parent sub-key)
            (sub-key (get (-> g :clusters :attr) cluster)))
    (sub-key (get (-> g :clusters :attr) cluster))))


(defn cluster->nodes
  "Returns the nodes in the current cluster but not in children
   of the current cluster."
  ([g cluster] (cluster->nodes g (cluster-key g) cluster))
  ([g cluster-on cluster]
   (filter
    #(= cluster (get % (->keyword cluster-on)))
    (loom.graph/nodes g))))


(defn cluster->all-nodes
  "Returns all nodes in a cluster, given the :cluster-on key"
  ([g cluster] (cluster->all-nodes g (cluster-key g)))
  ([g cluster-on cluster]
   (let [k (->keyword cluster-on)]
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
           res))))))


(defn nodes-by-cluster
  "Returns nodes in the graph grouped by cluster."
  ([g] (nodes-by-cluster g (cluster-key g)))
  ([g cluster-on]
   (group-by (->keyword cluster-on) (loom.graph/nodes g))))


(defn node->clusters
  "Returns the set of clusters that the node is in."
  ([g n] (node->clusters g (cluster-key g) n))
  ([g cluster-on n]
   (letfn [(ancestor [acc]
             ;(when (nil? acc) (println n acc))
             (if-let [new-ancestor (cluster-parent g (first acc))]
               (ancestor (cons new-ancestor acc))
               acc))]
     (into #{} (ancestor [(get n (->keyword cluster-on))])))))


(defn nodes->clusters
  "Returns the set of clusters that the nodes are in."
  [g nds]
  (apply set/union (map #(node->clusters g %) nds)))


;; ------------------------------


(defn clusters
  "Returns the set of all clusters in the graph."
  [g]
  (nodes->clusters g (loom.graph/nodes g)))


(defn ^:private filter->parent
  [m set-to-remove]
  (reduce
   (fn [a [k v]]
     (if (some set-to-remove #{k v})
       a
       (assoc a k v)))
   {}
   m))


(defn ^:private filter->children
  [m set-to-remove]
  (reduce
   (fn [a [k v]]
     (if (some #{k} set-to-remove)
       a
       (let [v' (set/difference v set-to-remove)]
         (if (empty? v')
           a
           (assoc a k v')))))
   {}
   m))


(defn remove-clusters
  "Removes clusters from the graph.
   Doesn't touch cluster edgess, so that those can be filtered down (once)
   after multiple filtering operations."
  [g & clstrs]
  (let [clstrs-set (into #{} clstrs)]
    (-> g
        (update-in [:clusters :attr] #(apply dissoc % clstrs))
        (update-in [:clusters :hierarchy :->parent] filter->parent clstrs-set)
        (update-in [:clusters :hierarchy :->children] filter->children clstrs-set))))


(defn remove-nodes
  "Removes nodes from a clustered graph. Returns a map of {:graph <graph>
   :clusters <the clusters which remain>}"
  [g nodes]
  (let [clstrs (clusters g)
        g' (apply loom.graph/remove-nodes g nodes)
        clstrs-to-remove (set/difference (clusters g) (clusters g'))
        g'' (apply remove-clusters g' clstrs-to-remove)]
    g''))

