(ns ^{:doc "Process csv format to dot."
      :author "Jude Payne"}
  lib-draw-graph.processor
  (:require [lib-draw-graph.graph           :as g]
            [lib-draw-graph.parser          :as parser]
            [loom.graph                     :as loom.graph]
            [loom.attr                      :as loom.attr]
            [extra-loom.multigraph          :as multigraph]
            [clojure.string                 :as str]
            [lib-draw-graph.clustered       :as clstr]
            [lib-draw-graph.preprocessor    :as preprocessor]
            [lib-draw-graph.postprocessor   :as postprocessor]
            [lib-draw-graph.util            :as util])
  (:refer-clojure :exclude [pop peek]))


;; Keys used in all JSON messages

(def ^:dynamic *data* :data)  ;; json key where graph data is kept
(def ^:dynamic *options* :display-options)   ;; where options are kept


(def ^:dynamic *list-sep* #",")   ;; separator to split a list (e.g. edge) into pieces
(def ^:dynamic *definition-marker* #"#") ;; marker for node/ cluster info


(defn split-list [e] (str/split e *list-sep* 3))
(defn split-def [s] (str/split s *definition-marker* -1))


(defn- third
  "Returns third element of coll, or nil."
  [coll]
  (try (nth coll 2)
       #?(:clj (catch Exception e nil)
          :cljs (catch js/Object e nil))))


(defn some-dims?
  "Returns true if some of the map entries are true"
  [m]
  (not (empty? (select-keys m (for [[k v] m :when v] k)))))


;; ------------
;; pre-processing functions

(defn maybe-paths [g opts]
  (if (and (some? (:paths opts)) (string? (:paths opts)))
    (let [subs (str/split (:paths opts) #"\|")]
      (if (= 2 (count subs))
        (let [start-sub (first subs)
              end-sub (second subs)]
          (preprocessor/paths g start-sub end-sub))
        (throw (util/err "Error: Paths input cannot be parsed."))))
    g))


(defn maybe-filter [g opts]
  (if  (some? (:filter-graph opts))
    (let [g' (preprocessor/filter-graph g (:filter-graph opts))]
      g')
    g))


(defn maybe-fix-ranks [g opts]
  (if (and (some? (:cluster-on opts))
           (= (:layout opts) "dot")
           (:fix-ranks? opts))
    (preprocessor/fix-ranks g (keyword (:cluster-on opts)))
    g))


(defn maybe-elide [g opts]
  (if (some? (:elide opts))
    (preprocessor/remove-levels g
                                #?(:clj (Integer/parseInt (:elide opts))
                                   :cljs (js/parseInt (:elide opts))))
    g))

;; -----------
;; Construction of the graph

(defn- add-attr-map
  [g node-or-edge m]
  (reduce
   (fn [acc cur] (apply loom.attr/add-attr acc node-or-edge cur))
   g (vec m)))


(defn- add-meta-map-to-edge
  [g src dst m]
  (loom.attr/add-attr-to-edges g :meta m [[src dst]]))


;; For edges, I don't know which edge (its id) from parsed
;; so I'll need to create a map of stacks of form
;; { [src cur] <stack of edges> ... }
;; then, when processing in loom-graph below, I find the edges at [src cur] in the map &
;; pop the first edge, apply style and meta to it, rinse and repeat
;; the stack will have to live inside an atom to preserve state and remove the 
;; need to pass around inside a reduction.

(defprotocol MultiStack
  (pop [this k] "Pops the first item in the stack under key k.")
  (peek [this k] "Peek at the first item in the stack under key k.")
  (push [this k item] "Push the item onto the stack under key k."))


(extend-type #?(:clj clojure.lang.Atom
                :cljs Atom)
  MultiStack
  (pop [this k]
    (let [item (first (get @this k))]
      (swap! this update-in [k] rest)
      item))
  (peek [this k]
    (first (get @this k)))
  (push [this k item]
    (swap! this update-in [k] (fn [r] (cons item r)))))


(defn edge-attr-map
  "Makes an attr map from a parsed edge"
  [pe]
  (merge (:style pe) (when (:meta pe) {:meta (:meta pe)})))


(defn loom-graph
  ([parsed] (loom-graph parsed nil))
  ([parsed cluster-on]
   (let [;; construct the initial graph
         gr0 (apply multigraph/multidigraph (map #(vector (:src %) (:dst %) (edge-attr-map %))
                                                 (:edges parsed)))
         ;; add node attributes
         gr1 (reduce (fn [acc [nd attrs]]
                       (add-attr-map acc nd attrs))
                     gr0 (:nodes parsed))]
     (if (and cluster-on
              (some #{(keyword cluster-on)} (:header parsed))) ;; check to prevent stack-overflow
       (let [;; add cluster styles
             gr2 (reduce (fn [acc cur]
                           (clstr/add-attr-to-cluster acc (first cur) :style (second cur)))
                         gr1
                         (:cluster-styles parsed))
             
             ;; add cluster parents
             gr3 (reduce (fn [acc [c p]]
                           (clstr/add-cluster-parent acc c p))
                         gr2 (:cluster-parents parsed))
             ;; add cluster edges
             gr4 (reduce (fn [acc [c1 c2]]
                           (-> acc
                               (clstr/add-cluster-edge c1 c2)
                               ;(preprocessor/add-stack (keyword cluster-on) [c1 c2])
                               ;we'll add te invisible edges later, post filtering
                               ))
                         gr3
                         (:cluster-edges parsed))]

         (clstr/add-cluster-key gr4 cluster-on))
       gr1))))


(defn apply-filtering-operations
  ;; a single place to apply all filtering and filter to the correct
  ;; edge graph and add cluster edges at the end.
  [g opts]
  (let [g' (-> g
               (maybe-paths opts)
               (maybe-filter opts))]
    (if (clstr/edge-graph g')
      (let [g'' (if (or (-> opts :filter-graph) (-> opts :path))
                  ;; the graph has been filtered. Need to rebuild the edge-graph
                  (preprocessor/filter-edge-graph g' (clstr/clusters g'))
                  g')]
        (if (clstr/edge-graph g'')
          (preprocessor/add-invisible-cluster-edges
           g''
           opts
           (loom.graph/edges (clstr/edge-graph g'')))
          g'' ;; doesn't have an edge-graph - just return it
          ))
      ;; doesn't have an edge-graph - just return it
      g')))



;; -----------
;; public interface functions

(defn check-graph
  "Runs various tests over a clustered graph and outputs a warning message."
  [g]
  (reduce
   (fn [acc cur]
     (str acc (cur g)))
   ""
   []))


(defn- not-blank [s]
  (if (or (= "" s) nil)
    nil
    s))


(defn detect-format
  "detects the format of the data string."
  [s]
  (try
    (cond
      (= (subs s 0 1) "{")       :json
      (= (subs s 0 2) "h,")      :csv
      (= (subs s 0 5) "graph")   :dot
      (= (subs s 0 7) "digraph") :dot
      :else                      nil)
    #?(:clj (catch Exception e nil)
       :cljs (catch js/Error e nil))))


(defn preprocess-graph [graph opts]
  (-> graph
      (apply-filtering-operations opts)
      (maybe-elide opts)
      (maybe-fix-ranks opts)))


(defn postprocess-svg [graph opts svg]
  (if (-> opts :post-process?)
    (let [svg' (if (and (not-blank (-> opts :cluster-on))
                        (some-dims? (-> opts :pp-clusters))
                        (or  (= "dot" (-> opts :layout))))
                 ;; do cluster optimization
                 (postprocessor/optimize-clusters
                  svg
                  graph
                  (partial g/first-label (-> opts :label))
                  opts)
                 ;; not a clustered graph. just return the svg
                 svg)
          svg'' (let [font (-> opts :pp-font)]
                  (if (and (not= font "") (not (nil? font)))
                    (clojure.string/replace (if (nil? svg') svg svg') "Monospace" font)
                    svg'))]
      svg'')
    ;; just return the svg as post processing not required
    svg))


(defn process-to-dot [in]
  (let [cluster-on (not-blank (-> in :display-options :cluster-on))
        g (if cluster-on
            (loom-graph (:data in) cluster-on)
            (loom-graph (:data in)))]
    (-> g
        (preprocess-graph (:display-options in))
        (g/process-graph (:display-options in)))))


(defn in->g [in]
  (let [cluster-on (not-blank (-> in :display-options :cluster-on))
        parsed (parser/parse-csv-or-json
                (:data in)
                (keyword (:format-in in)))]
   ; (println parsed)
    (if cluster-on
      (loom-graph parsed cluster-on)
      (loom-graph parsed))))


(defn g->dot [in g]
  (-> g
      (g/process-graph (:display-options in))))


(defn process-to-svg [in dot->svg]
  (case (:format-in in)

    "dot" (dot->svg (:data in)) ;; we can't do any post-processing

    ("csv" "json") (let [g (in->g in)
                         opts (:display-options in)
                         preproc-g (preprocess-graph g opts)
                         dot (g/process-graph preproc-g opts)
                         svg (dot->svg dot)]
                     (postprocess-svg preproc-g opts svg))

    (throw (util/err "Error: only 'csv' or 'dot' are allowed input formats."))))


