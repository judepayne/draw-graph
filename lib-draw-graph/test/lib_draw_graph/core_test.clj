(ns lib-draw-graph.core-test
  (:require [clojure.test :refer :all]
            [clojure.string                       :as str]
            [clojure.java.shell                   :as sh]
            [clojure.data.json                    :as json]
            [loom.graph                           :as loom]
            [loom.alg-generic                     :as loom.gen]
            [loom.alg                             :as loom.alg]
            [lib-draw-graph.graph                 :as g]
            [lib-draw-graph.clustered             :refer :all]
            [lib-draw-graph.svg                   :refer :all]
            [lib-draw-graph.anneal                :refer :all]
            [lib-draw-graph.preprocessor          :refer :all]
            [lib-draw-graph.postprocessor         :refer :all]
            [lib-draw-graph.processor             :refer :all]))


(def standard-options
  [:show-roots? false
   :cluster-on "animal"
   ;:color-on "id"
   :layout "dot"
   ;; :dpi 72  <- dpi should be 72!
   :label "name"
   :shape "ellipse"
 ;  :nodesep 0.5
 ;  :ranksep 0.01
   ;:sep 1 
   :splines "line"
   :rankdir "TB"
   :fixedsize false
   :tooltip "name/message"
 ;  :url ""
   ;:scale 2
   ;:overlap "ipsep"
   :concentrate false
 ;  :elide "0"
   :constraint true
   :show-constraint false
 ;  :fix-ranks? true
   ;:filter-graph "function:Capture,function:Lifecycle,function:Reporting"
   ;:filter-graph "animal:pandas"
   ;:paths "function:Capture,function:Lifecycle|function:Reporting"
   :post-process? true
   :pp-clusters {:y true :h true :x true :w true}
;   :pp-clusters {:y false :h false :x false :w false}
   :pp-anneal-bias "3"
   :pp-cluster-sep "8"
   :pp-font "sans-serif"
])

(defn options [] (apply hash-map standard-options))

(defn s->csv1 [s]
  {:data s
   :display-options (apply hash-map standard-options)
   :format-in "csv"
   :format-out "svg"})


(defn csv->csv1 [filename]
  (s->csv1 (slurp filename)))


(defn csv->graph [filename]
  (let [in (csv->csv1 filename)
        g (loom-graph (:data in) (:cluster-on (options)))]
    (-> g
        (preprocess-graph (options)))))


(defn graph->dot [g]
  (g/process-graph g (options)))


(defn csv->dot [filename]
  (-> (csv->csv1 filename)
      process-to-dot))


(defn- read-input
  [js]
  (json/read-str js :key-fn keyword))


(defn js->dot [js]
  (let [in (read-input js)]
    (process-to-svg in)))


(def path-to-dot "/usr/local/bin/dot")
;(def path-to-dot "/Users/jude/Dropbox/Projects/aws/draw-graph/lambda-draw-graph/resources/bin/dot_static")

(defn- format-error [s err]
  (apply str
    err "\n"
    (interleave
      (map
        (fn [idx s]
          (format "%3d: %s" idx s))
        (range)
        (str/split-lines s))
      (repeat "\n"))))


(defn dot->svg
  "Takes a string containing a GraphViz dot file, and returns a string containing SVG."
  [s & {:keys [path] :or {path path-to-dot}}]
  (let [s' (str/replace s "\\\\n" "\n")     ;; for multi-line labels
        {:keys [out err]} (sh/sh path "-Tsvg" :in s')]
    (or
      out
     (throw (IllegalArgumentException. ^String (format-error s' err))))))


(defn csv->svg [filename]
  (process-to-svg (csv->csv1 filename) dot->svg))


(defn js->svg [js]
  (dot->svg (js->dot js)))
