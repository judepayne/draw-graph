(ns lib-draw-graph.core-test
  (:require [clojure.test :refer :all]
            [clojure.string                       :as str]
            [clojure.java.shell                   :as sh]
            [loom.alg-generic                     :as loom.gen]
            [loom.alg                             :as loom.alg]
            [lib-draw-graph.processor :refer :all]
            [lib-draw-graph.clustered-graph       :as clstr]
            [lib-draw-graph.graph                 :as g]))


(def standard-options
  [:hide-leaves? false
   :show-roots? false
   :cluster-on "animal"
   :layout "dot"
   ;; :dpi 72  <- dpi should be 72!
   :label "name"
   :shape "ellipse"
   :nodesep 1
   ;:ranksep 2
   ;:sep 1 
   :splines "lines"
   :rankdir "TB"
   :fixedsize "true"
   ;:ranksep "3 equally"
   ;:scale 2
   :overlap false
   :concentrate true
   :elide "0"
   :fix-ranks? true
   ;:filter-graph "animal:pandas"
   :stacks "pandas:brownbears:squirrels"
   ;:subgraph "asset_class:Credit Derivatives"
])

(defn options [] (apply hash-map standard-options))

(defn s->csv1 [s]
  {:data s
   :display-options (apply hash-map standard-options)
   :format-in "csv"
   :format-out "svg"})


(defn csv->csv1 [filename]
  (s->csv1 (slurp filename)))


(defn csv->g [filename]
  (let [in (csv->csv1 filename)
        g (loom-graph (:data in))]
    (-> g
        (preprocess-graph (options)))))

(defn g->dot [g]
  (g/process-graph g (options)))

(defn csv->dot [filename]
  (-> (csv->csv1 filename)
      process))

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
