(ns lib-draw-graph.core-test
  (:require [clojure.test :refer :all]
            [clojure.string                       :as str]
            [lib-draw-graph.processor             :as processor]))


(def standard-options
  [:hide-leaves? false
   :show-roots? true
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
;   :subgraph "asset_class:Credit Derivatives:product_family:"
])

(defn s->csv1 [s]
  {:data s
   :display-options (apply hash-map standard-options)
   :format-in "csv"
   :format-out "svg"})


(defn csv->csv1 [filename]
  (s->csv1 (slurp filename)))


(defn csv->dot [filename]
  (-> (csv->csv1 filename)
      processor/process))
