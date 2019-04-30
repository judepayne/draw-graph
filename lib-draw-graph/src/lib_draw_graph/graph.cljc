(ns ^{:doc "Defines functions for creating and Loom digraph from a csv file of edges,
           displaying a digraph with flexible options and for providing a set of
           analytics about a digraph. Note that the definition of structure-opts
           needs to be updated when new graphviz options are added."
      :author "Jude Payne"}
    lib-draw-graph.graph
    (:require [rhizome.dot                :as rhidot]
              [loom.graph                      :as loom.graph]
              [loom.attr                       :as loom.attr]
              [clojure.string                  :as str]
              [lib-draw-graph.clustered        :as clstr]
              #?@(:cljs [[goog.string :as gstring]])
              #?@(:cljs [[goog.string.format]])))


;; ---------------------
;; Utility graph functions

(defn ^:private color-channels
  "Returns a map of rgb values from a 24-bit number."
  [rgb]
  {:r (bit-shift-right (bit-and rgb 0xFF0000) 16)
   :g (bit-shift-right (bit-and rgb 0x00FF00) 8)
   :b (bit-and rgb 0x0000FF)})


(defn ^:private hex
  "Convert an unsigned integer to a hex string representation."
  [n]
  #?(:clj (format "%x" n)
     :cljs (.toString n 16)))


(defn ^:private str->rgb
  "Converts a string to an rgb color value, blending with blend-with."
  [s & {:keys [blend-with] :or {blend-with 0xBBFFBB}}]
  (let [h (bit-shift-right (hash s) 8) ;;shift to 24-bit
        rgb (color-channels h)
        rgb-blend (color-channels blend-with)
        red   (bit-shift-right (+ (:r rgb) (:r rgb-blend)) 1)
        green (bit-shift-right (+ (:g rgb) (:g rgb-blend)) 1)
        blue  (bit-shift-right (+ (:b rgb) (:b rgb-blend)) 1)]
    (str "#" (hex red) (hex green) (hex blue))))


(defn ^:private leaf? [g n] (empty? (loom.graph/successors* g n)))


(defn root? [g n] (empty? (loom.graph/predecessors* g n)))


(defn ^:private fff [nested] (first (ffirst nested)))


(defn deep-merge
  "Like merge, but merges maps recursively."
  [& maps]
  (if (every? map? maps)
    (apply merge-with deep-merge maps)
    (last maps)))


(defn group-map
  "Groups m by the first in each of grps, selects the rest keys into
  the new submap and continues through the rest of the groups.
  e.g. (group-map {:graph-a 1 :graph-b 2 :node-c 4 :edge-a 5}
                   [:graph :graph-a :graph-b] [:node :node-c])
  => {:graph {:graph-a 1, :graph-b 2}, :node {:edge-a 5}}"
  [m & grps]
  (reduce 
   (fn [acc cur]
     (assoc acc (first cur) (select-keys m (rest cur))))
   {}
   grps))


;; ---------------------
;; Config for graph display, using Rhizome library


(def default-options
  {:graph
   {:dpi 72
    :layout "dot"
    :splines "lines"
    :overlap "prism"
    :pad 0.2
    :rankdir "LR"
    }
   :node
   {:style "filled"
    :fontsize 10
    :fixedsize "true"
    :shape "ellipse"
    :margin "0.1"}
   :env
   {:hide-leaves? false
    :show-roots?  false
   }})

;; node functions

(defn shape
  "Returns the shape of node n in g given options"
  [g opts n]
  (cond
    (and (root? g n) (-> opts :env :show-roots?)) "star"
    (and (leaf? g n) (-> opts :env :hide-leaves?)) "point"
    :else (-> opts :node :shape)))


(defn fillcolor
  "Return the fillcolor for node n in g given an options"
  [g opts n]
  ;; if cluster-on, use that key to generate node colours
  ;; otherwise grab any node and use the first key in it
  (let [color-key (if-let [ck (-> opts :env :color-on)]
                    ck
                    (if-let [cl (clstr/cluster-key g)] 
                      cl
                      (fff (loom.graph/nodes g))))]
    (str->rgb ((keyword color-key) n))))


(defn first-label
  "Gets the first valid label for the node."
  [lbls n]
  (let [lbls (str/split lbls #"/")
        lbl (some #(let [v ((keyword %) n)]
                     (if (= "" v) false v)) lbls)]
    (if (nil? lbl) "" lbl)))


(defn node-label
  "Returns the label for the node n in g given options."
  [g opts n]
  (cond
    (and (leaf? g n) (-> opts :env :hide-leaves?)) ""
    :else (if-let [lbls (-> opts :node :label)]
            (str/replace (first-label lbls n) #"\+" "\n")
            "")))


(defn node-tooltip
  "Returns the tooltip for the node n in g given options."
  [g opts n]
  (when-let [tt (-> opts :node :tooltip)]
    (let [ks (map keyword (str/split tt #"/"))]
      (apply str (interpose
                  "\n"
                  (reduce
                   (fn [a c]
                     (conj a (str (name c) ": "(get n c))))
                   []
                   ks))))))


(defn node-url
  "Returns the url for the node n in g given options."
  [g opts n]
  (when-let [url (-> opts :node :url)]
    (get n (keyword url))))


(defn ^:private node-descriptor
  "Returns map of attributes for the node from *display-conf*."
  [g opts n]
  (merge
   (:node opts) ;;static attrs
   ;; attrs result from functions..
   (-> {}
       (assoc :shape (shape g opts n))
       (assoc :label (node-label g opts n))
       (assoc :fillcolor (fillcolor g opts n))
       (assoc :tooltip  (node-tooltip g opts n))
       (assoc :URL (node-url g opts n) :target "_blank"))
   ;;per node attrs supplied by user
   (loom.attr/attrs g n)))


;; NEEDS TO CHANGE WHEN NEW OPTS ADDED
(defn structure-opts
  "structures the incoming opts map the same as default-options"
  [opts]
  (group-map opts
             [:graph :dpi :layout :pad :splines :sep :ranksep
              :scale :overlap :nodesep :rankdir :concentrate]
             [:node :shape :label :fontsize :style :fixedsize :tooltip :url]
             [:env :hide-leaves? :show-roots? :color-on]))


(defn- cluster-args
  [g]
  {
   :node->clusters
   (fn [n] ((partial clstr/node->clusters g (clstr/cluster-key g)) n))

   :cluster->descriptor
   (fn [n] (merge {:label n}
                  (:style (clstr/cluster-attr g n))))

   :cluster->ranks
   (fn [n]
     (:fix-ranks (clstr/cluster-attr g n)))

   :cluster->parent
   (partial clstr/cluster-parent g)   
   })


(defn ^:private get-rhizome-args
  "Returns the rhizome config (options) for a graph."
  [g opts]
  (let [opts* (deep-merge default-options (structure-opts opts))]
    (merge
     {
      :options (:graph opts*) 

      :node->descriptor (partial node-descriptor g opts*)

      :edge->descriptor (partial loom.attr/attrs g)}

     ;; merge in cluster argument when g is clustered
     (when (clstr/cluster-key g)
       (cluster-args g)))))


;; -------------------------------------------------------------
;; ****** Functions to convert Loom graphs using Rhizome  ******

(defn graph->dot
  "Returns an dot representation of a graph."
  [ks succs-fn rhi-args]
  (-> (apply
       rhidot/graph->dot ks succs-fn
       (apply concat rhi-args))))


(defn ^:private loomgraph->dot
  "converts loom graph to dot using rhizome"
  [g rhi-args]
  (let [ks       (loom.graph/nodes g)
        succs-fn #(loom.graph/successors* g %)]
    (graph->dot ks succs-fn rhi-args)))


;;--------------------
;; public functions for producing dot

(defn process-graph
  "Converts (Loom) graph to either a graph or an svg"
  [g opts]
  (loomgraph->dot g (get-rhizome-args g opts)))

