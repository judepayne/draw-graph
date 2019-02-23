(ns lib-draw-graph.dot
  #?@(:clj 
      [(:require [clojure.string :as str]
                  ;[lib-draw-graph.dot-macros :refer [with-gensyms]]
                  )]
     :cljs
      [(:require [clojure.string :as str])]))


;; This library is taken from Zac Tellman's Rhizome library
;; and converted to cljc. Thanks Zac!
;; https://github.com/ztellman/rhizome/blob/master/src/rhizome/dot.clj 

(def ^:private escapable-characters "\\|{}\"")

(defn- escape-string
  "Escape characters that are significant for the dot format."
  [s]
  (reduce
    #(str/replace %1 (str %2) (str "\\" %2))
    s
    escapable-characters))

;;;

(def ^:private default-options
  {:dpi 100})

(def ^:private default-node-options
  {})

(def ^:private default-edge-options
  {})

;;;

(def ^:private option-translations
  {:vertical? [:rankdir {true :TP, false :LR}]})

(defn translate-options [m]
  (->> m
    (map
      (fn [[k v]]
        (if-let [[k* f] (option-translations k)]
          (when-not (contains? m k*)
            [k* (f v)])
          [k v])))
    (remove nil?)
    (into {})))

;;;

(defn ->literal [s]
  ^::literal [s])

(defn literal? [x]
  (-> x meta ::literal))

(defn unwrap-literal [x]
  (if (literal? x)
    (first x)
    x))

;;;

(defn- format-options-value [v]
  (cond
    (string? v) (str \" (escape-string v) \")
    (keyword? v) (name v)
    (coll? v) (if (literal? v)
                (str "\"" (unwrap-literal v) "\"")
                (str "\""
                  (->> v
                    (map format-options-value)
                    (interpose ",")
                    (apply str))
                  "\""))
    :else (str v)))

(defn format-label [label]
  (cond
    (sequential? label)
    (->> label
      (map #(str "{ " (-> % format-label unwrap-literal) " }"))
      (interpose " | ")
      (apply str)
      ->literal)

    (string? label)
    label

    (nil? label)
    ""

    :else
    (pr-str label)))

(defn- format-options [m separator]
  (->>
    (update-in m [:label] #(when % (format-label %)))
    (remove (comp nil? second))
    (map
      (fn [[k v]]
        (str (name k) "=" (format-options-value v))))
    (interpose separator)
    (apply str)))

(defn- format-edge [src dst {:keys [directed?] :as options}]
  (let [options (update-in options [:label] #(or % ""))]
    (str src
      (if directed?
        " -> "
        " -- ")
      dst
      "[" (format-options (dissoc options :directed?) ", ") "]")))

(defn- format-node [id {:keys [label shape] :as options}]
  (let [shape (or shape
                (when (sequential? label)
                  :record))
        options (assoc options
                  :label (or label "")
                  :shape shape)]
    (str id "["
      (format-options options ", ")
      "]")))

(defn- format-rank [ids]
  (apply str "{ rank=same; "
         (concat (interpose ", " ids) ["}"])))

;;;

(def ^:dynamic *node->id* nil)
(def ^:dynamic *cluster->id* nil)


(defn- node->id [n]
  (*node->id* n))

(defn- cluster->id [s]
  (*cluster->id* s))


(defn graph->dot
  "Takes a description of a graph, and returns a string describing a GraphViz dot file.

   Requires two fields: `nodes`, which is a list of the nodes in the graph, and `adjacent`, which
   is a function that takes a node and returns a list of adjacent nodes."
  [nodes adjacent
   & {:keys [directed?
             vertical?
             options
             node->descriptor
             edge->descriptor
             cluster->parent
             node->cluster
             cluster->descriptor
             cluster->ranks]
      :or {directed? true
           vertical? true
           node->descriptor (constantly nil)
           edge->descriptor (constantly nil)
           cluster->parent (constantly nil)
           node->cluster (constantly nil)
           cluster->descriptor (constantly nil)
           cluster->ranks (constantly nil)}
      :as graph-descriptor}]

  (binding [*node->id* (or *node->id* (memoize (fn [_] (gensym "node"))))
            *cluster->id* (or *cluster->id* (memoize (fn [_] (gensym "cluster"))))]
    (let [current-cluster (::cluster graph-descriptor)
          subgraph? (boolean current-cluster)
          cluster->nodes (when node->cluster
                           (dissoc (group-by node->cluster nodes) nil))
          cluster? (if cluster->nodes
                     (comp boolean cluster->nodes)
                     (constantly false))
          node? (set nodes)
          ranks (cluster->ranks current-cluster)]

     (apply str
       (if current-cluster
         (str "subgraph " (cluster->id current-cluster))
         (if directed?
           "digraph"
           "graph"))
       " {\n"

       ;; global options
       (let [edge-options (:edge options)
             node-options (:node options)]
         (str
           ;; graph[...]
           "graph["
           (-> (merge default-options options)
             (update-in [:fontname] #(or % (when subgraph? "Monospace")))
             (assoc :vertical? vertical?)
             (dissoc :edge :node)
             translate-options
             (format-options ", "))
           "]\n"

           ;; node[...]
           "node["
           (-> node-options
             (update-in [:fontname] #(or % "Monospace"))
             (translate-options)
             (format-options ", "))
           "]\n"

           ;; edge[...]
           "edge["
           (-> edge-options
             (update-in [:fontname] #(or % "Monospace"))
             (translate-options)
             (format-options ", "))
           "]\n\n"))

       (interpose "\n"
         (concat

           ;; nodes
           (->> nodes
             (remove #(not= current-cluster (node->cluster %)))
             (map
               #(format-node (node->id %)
                  (merge
                    default-node-options
                    (node->descriptor %)))))

           ;; ranks
           (->> ranks
                (map
                 (fn [r]
                   (format-rank
                    (mapv *node->id* r)))))


           ;; clusters
           (->> cluster->nodes
             keys
             (remove #(not= current-cluster (cluster->parent %)))
             (map
               #(apply graph->dot
                  nodes
                  adjacent
                  (apply concat
                    (assoc graph-descriptor
                      ::cluster %
                      :options (cluster->descriptor %))))))

           ;; edges
           (when-not subgraph?

             (->> nodes

               ;; filter out destinations that aren't in `nodes`, and differentiate
               ;; between nodes and clusters
               (mapcat
                 (fn [node]
                   (map vector
                     (repeat node)
                     (->> node
                       adjacent
                       (map
                         #(cond
                            (node? %) [:node %]
                            (cluster? %) [:cluster %]
                            :else nil))
                       (remove nil?)))))

               ;; format the edges
               (map (fn [[a [type b]]]
                      (let [descriptor (edge->descriptor a b)
                            format #(format-edge
                                      (node->id a)
                                      (if (= :node type)
                                        (node->id b)
                                        (cluster->id b))
                                      (merge
                                        default-edge-options
                                        {:directed? directed?}
                                        %))]
                        (if (vector? descriptor)
                          (->> descriptor
                            (map format)
                            (interpose "\n")
                            (apply str))
                          (format descriptor)))))))

           ["}\n"]))))))
