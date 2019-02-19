(ns lib-draw-graph.core-test
  (:require [clojure.test :refer :all]
            [clojure.string                       :as str]
            [clojure.java.shell                   :as sh]
            [lib-draw-graph.processor             :as processor]))


(def standard-options
  [:hide-leaves? false
   :show-roots? false
   :cluster-on "asset_class"
   :layout "dot"
   ;; :dpi 72  <- dpi should be 72!
   :label "name"
   :shape "rect"
   ;:nodesep 2
   ;:ranksep 2
   :sep 1 
   :splines "ortho"
   :rankdir "LR"
   :fixedsize "false"
   :ranksep "3 equally"
;   :scale 2
   :overlap false
   :concentrate false
   :elide "0"
   :filter-graph "asset_class:Credit Derivatives"
;   :subgraph "asset_class:Credit Derivatives"
])

(defn s->csv1 [s]
  {:data s
   :display-options (apply hash-map standard-options)
   :format-in "csv"
   :format-out "svg"})


(defn csv->csv1 [filename]
  (s->csv1 (slurp filename)))


(defn csv->preprocessed [filename]
  (let [in (csv->csv1 filename)
        g (processor/loom-graph (:data in))]
    (-> g
        (processor/preprocess-graph (:display-options in)))))


(defn csv->dot [filename]
  (-> (csv->csv1 filename)
      processor/process))

(def path-to-dot "/usr/local/bin/dot")


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
  (dot->svg (csv->dot filename)))
