(ns ^{:doc "Defines functions for creating and Loom digraph from a csv file of edges,
           displaying a digraph with flexible options and for providing a set of
           analytics about a digraph. Note that the definition of structure-opts
           needs to be updated when new graphviz options are added."
      :author "Jude Payne"}
    lib-draw-graph.graph
    (:require [rhizome.dot                     :as rhidot]
              [loom.graph                      :as loom.graph]
              [extra-loom.multigraph           :as extra-loom]
              [loom.attr                       :as loom.attr]
              [clojure.string                  :as str]
              [lib-draw-graph.clustered        :as clstr]
              [lib-draw-graph.util             :as util]
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


(defn edge-invisible?
  [g n1 n2]
  (let [style (:style (loom.attr/attrs g n1 n2))]
    (and style (some #(= "invis" %) (str/split style #",")))))


(defn leaf? [g n]
  (let [succs (loom.graph/successors* g n)
        visible-succs (filter #(not (edge-invisible? g n %)) succs)]
    (empty? visible-succs)))


(defn root? [g opts n]
  (and
   (-> opts :env :show-roots?)
   (empty? (loom.graph/predecessors* g n))))


(defn successors
  "Takes into account invisible edges"
  [g n]
  (let [succs (loom.graph/successors* g n)]
    (filter #(not (edge-invisible? g n %)) succs)))


(defn ^:private fff [nested] (first (ffirst nested)))


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
   ; :size "4,4!"
   ; :ratio "1.0"
    }
   :node
   {:style "filled"
    :fontsize 10
    :fixedsize "true"
    :shape "ellipse"
    :margin "0.1"}
   :env
   {:show-roots?  false
   }})

;; node functions

(defn shape
  "Returns the shape of node n in g given options"
  [g opts n]
  (cond
    (root? g opts n) "tripleoctagon"
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


(defn html-like-label?
  "True is label is or starts with an html like label."
  [s]
  (when (and s (> (count s) 1))
    (= "<<" (subs s 0 2))))


(defn first-label
  "Gets the first valid label from the metadata, which can be a node or edge metadata."
  [lbls metadata]
  (let [lbls (str/split lbls #"/")
        lbl (some #(let [v ((keyword %) metadata)]
                     (if (= "" v) false v)) lbls)]
    (if (nil? lbl) "" lbl)))


(defn composite-label
  "Gets the composite label from the metadata, which can be a node or edge metadata."
  [lbls metadata]
  (let [lbls (str/split lbls #"&")
        flbl (get metadata (keyword (first lbls)))
        lbl (if (html-like-label? flbl)
              flbl
              (apply str flbl "\n"
                     (interpose "\n"
                                (map
                                 (fn [x] 
                                   (let [l (get metadata (keyword x))]
                                     (if (html-like-label? l)
                                       ""  ;; filter out subsequent html-like labels
                                       l)))
                                 (rest lbls)))))]
    (if (nil? lbl) "" lbl)))


(defn node-label
  "Returns the label for the node n in g given options."
  [g opts n]
  (cond
    (and (leaf? g n) (-> opts :env :hide-leaves?)) ""
    :else (if-let [lbls (-> opts :node :label)]
            (if (str/includes? lbls "/")
              (first-label lbls n)
              (composite-label lbls n))
            "")))


(defn node-tooltip
  "Returns the tooltip for the node n in g given options."
  [g opts n]
  (when-let [tt (-> opts :node :tooltip)]
    (let [ks (map keyword (str/split tt #"&"))
          tt (apply str (interpose
                  "\n"
                  (reduce
                   (fn [a c]
                     (conj a (str (name c) ": "(get n c))))
                   []
                   ks)))]
      tt)))


(defn node-url
  "Returns the url for the node n in g given options."
  [g opts n]
  (when-let [url (-> opts :node :url)]
    (get n (keyword url))))


;; cljs requires \n to be supplied as \\n otherwise will split line
;; whereas clj does not & will not. Use cljs fomrat but last minute
;; replace for when run from clojure
(defn doub-slash-n
  [s]
  (if (nil? s) nil
      (str/replace s #"\\\\n" "\n")))


(defn ^:private node-descriptor
  "Returns map of attributes for the node from *display-conf*."
  [g opts n]
  (merge
   (:node opts) ;;static attrs
   ;; attrs result from functions..
   (-> {}
       (assoc :shape (shape g opts n))
       (assoc :label (doub-slash-n (node-label g opts n)))
       (assoc :fillcolor (fillcolor g opts n))
       (assoc :tooltip  (node-tooltip g opts n))
       (assoc :URL (node-url g opts n) :target "_blank"))
   ;;per node attrs supplied by user
   (if (and (root? g opts n) (map? (loom.attr/attrs g n)))
     (dissoc (loom.attr/attrs g n) :shape)
     (loom.attr/attrs g n))))


(defn ^:private maybe-show-constraint [opts edge-attr-map]
  (let [show (-> opts :env :show-constraints?)]
    (when (and show (:constraint edge-attr-map))
      {:style "" :color "deeppink3" :penwidth 4})))


(defn edge-label
  "Returns the label for the edge n1 n2 in g given options."
  [opts metadata]
  (when-let [lbls (-> opts :edge :edge-label)]
    (if (str/includes? lbls "/")
      (first-label lbls metadata)
      (composite-label lbls metadata))))


(defn constraints
  [opts]
  (if (-> opts :env :constraint)
    {:constraint true}
    {:constraint false}))


(defn ^:private edge-descriptor
  "Return map of attributes for the edge from *display-conf*"
  [g opts n1 n2]
  (let [description (fn [attr-map]
                      (let [metadata (:meta attr-map)]
                        (merge
                         (if (-> opts :edge :edge-label)
                           {:xlabel (doub-slash-n (edge-label opts metadata)) :forcelabels true}
                           nil)
                         (constraints opts)
                         ;; per edge attrs supplied by user
                         (dissoc attr-map :meta)
                         (maybe-show-constraint opts attr-map))))
        desc (if (extra-loom/extra-loom-graph? g)
               (let [edges (extra-loom/edges-between g n1 n2)
                     attr-fn (fn [es]
                               (reduce (fn [acc cur]
                                         (conj acc (description (loom.attr/attrs g cur))))
                                       []
                                       es))]
                 (attr-fn edges))
               (description (loom.attr/attrs g n1 n2)))]
    desc))


;; NEEDS TO CHANGE WHEN NEW OPTS ADDED
(defn structure-opts
  "structures the incoming opts map the same as default-options"
  [opts]
  (group-map opts
             [:graph :dpi :layout :pad :splines :sep :ranksep
              :scale :overlap :nodesep :rankdir :concentrate :ratio]
             [:node :shape :label :fontsize :style :fixedsize :tooltip :url :area]
             [:env :hide-leaves? :show-roots? :color-on :constraint :show-constraints?]
             [:edge :edge-label]))


(defn- cluster-args
  [g]
  {
   :node->clusters
   (fn [n] ((partial clstr/node->clusters g (clstr/cluster-key g)) n))

   :cluster->descriptor
   (fn [n] (merge {:label n}
                  (let [x (clstr/merged-cluster-attr g n :style)
                        y (if (nil? x) {} x)]
                    y)))

   :cluster->ranks
   (fn [n]
     (clstr/first-cluster-attr g n :fix-ranks))

   :cluster->parent
   (partial clstr/cluster-parent g)})


(defn ^:private get-rhizome-args
  "Returns the rhizome config (options) for a graph."
  [g opts]
  (let [opts* (util/deep-merge default-options (structure-opts opts))]
    (merge
     {
      :options (:graph opts*) 

      :node->descriptor (partial node-descriptor g opts*)

      :edge->descriptor (partial edge-descriptor g opts*)}

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

