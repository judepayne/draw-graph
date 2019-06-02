(ns lib-draw-graph.core-test
  (:require [clojure.test :refer :all]
            [clojure.string                       :as str]
            [clojure.java.shell                   :as sh]
            [clojure.data.json                    :as json]
            [loom.graph                           :as loom]
            [loom.alg-generic                     :as loom.gen]
            [loom.alg                             :as loom.alg]
            [loom.attr                            :as attr]
            [lib-draw-graph.graph                 :as g]
            [lib-draw-graph.clustered             :refer :all]
            [lib-draw-graph.svg                   :refer :all]
            [lib-draw-graph.anneal                :refer :all]
            [lib-draw-graph.preprocessor          :refer :all]
            [lib-draw-graph.postprocessor         :refer :all]
            [lib-draw-graph.processor             :refer :all]))


(def standard-options
  [:show-roots? false
   :cluster-on "function"
   ;:color-on "id"
   :layout "dot"
   ;; :dpi 72  <- dpi should be 72!
   :label "application&owner"
   :edge-label "format"
   :shape "rect"
   :nodesep 0.4
   ;:ranksep 0
   ;:sep 1 
   :splines "ortho"
   :rankdir "TB"
   :fixedsize false
   :tooltip "application&id"
   :url "link"
   ;:scale 2
   :overlap "false"
   :concentrate false
   ;; possible values for num-cluster-edges: 1 2 3 4 6 9 12 16
   :num-cluster-edges "5"
 ;  :elide "0"
   :constraint true
   :show-constraints? false
   :fix-ranks? true
 ;  :filter-graph "application=sysTicket or function=Reporting"
 ;  :filter-graph "type=[trades/clients/books/products/instruments/employees]"
 ; :filter-graph "function=Capture"
 ;  :filter-graph "level<ted"
 ;  :filter-graph "format=legacy"
 ;  :filter-graph "volume>100"
 ;  :filter-graph "animal=pandas"
 ;  :filter-graph "owner=Ruth"
 ;  :filter-graph "id<30"
 ;  :paths "owner:Ruth|owner:Paul"
 ;  :paths "function:Capture or function:Lifecycle|function:Reporting"
   :post-process? true
   :pp-clusters {:y true :h true :x true :w true}
;   :pp-clusters {:y false :h false :x false :w false}
   :pp-anneal-bias "5"
   :pp-cluster-sep "0"
   :pp-font "sans-serif"
])

(defn options [] (apply hash-map standard-options))

(defn s->csv1 [s opts]
  {:data s
   :display-options opts
   :format-in "csv"
   :format-out "svg"})


(defn csv->csv1 [filename opts]
  (s->csv1 (slurp filename) opts))


(defn csv->graph [filename
                  & {:keys [opts] :or {opts (apply hash-map standard-options)}}]
  (let [in (csv->csv1 filename opts)
        g (loom-graph (:data in) (:cluster-on opts))]
    (-> g
        (preprocess-graph (options)))))


(defn graph->dot [g
                  & {:keys [opts] :or {opts (apply hash-map standard-options)}}]
  (g/process-graph g opts))


(defn csv->dot [filename
                & {:keys [opts] :or {opts (apply hash-map standard-options)}}]
  (-> (csv->csv1 filename opts)
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


(defn csv->svg [filename
                & {:keys [opts] :or {opts (apply hash-map standard-options)}}]
  (process-to-svg (csv->csv1 filename opts) dot->svg))


(defn js->svg [js]
  (dot->svg (js->dot js)))


;; Generating standard outs for browsing

(def default-options
  {:label ""
   :show-roots? false
   :shape "ellipse"
   :layout "neato"
   :cluster-on ""
   :rankdir "LR"
   :fixedsize true
   :elide "0"
   :splines "splines"
   :overlap false
   :concentrate false
   :post-process? false
   :pp-clusters {:y true :h true :x true :w true}
   :pp-anneal-bias "3"
   :pp-font "sans-serif"
;   :pp-cluster-sep ""
   :num-cluster-edges "4"
   :tooltip ""
   :constraint true
   :show-constraints? false
   :url ""
   :fix-ranks? false})



(deftest example-1
  (let [opts (merge default-options
                    {:layout "dot"
                     :cluster-on "animal"
                     :label "name"
                     :rankdir "TB"})]
    (is (nil?
         (spit "test/ex-out/1-1.svg" (csv->svg "test/ex/example1.csv"
                                               :opts opts)))))
  (let [opts (merge default-options
                    {:layout "dot"
                     :cluster-on "animal"
                     :color-on "name"
                     :label "name"
                     :rankdir "TB"})]
    (is (nil?
         (spit "test/ex-out/1-2.svg" (csv->svg "test/ex/example1.csv"
                                               :opts opts))))))


(deftest example-2
  (let [opts (merge default-options
                    {:layout "dot"
                     :cluster-on "tree"
                     :label "id"
                     :shape "folder"
                     :splines "ortho"
                     :ranksep 0.5
                     :overlap "false"}
                    )]
    (is (nil?
         (spit "test/ex-out/2-1.svg" (csv->svg "test/ex/example2.csv"
                                               :opts opts)))))
  (let [opts (merge default-options
                    {:layout "dot"
                     :cluster-on "id"
                     :color-on "id"
                     :label "tree"
                     :splines "splines"
                     :ranksep 0.5
                     :overlap "false"}
                    )]
    (is (nil?
         (spit "test/ex-out/2-2 cluster-on.svg" (csv->svg "test/ex/example2.csv"
                                               :opts opts))))))

(deftest example-4
  (let [opts (merge default-options
                    {:layout "dot"
                     :label "id"
                     :shape "box"
                     :splines "spline"
                     :overlap "false"
                     :filter-graph "id<30"})]
    (is (nil?
         (spit "test/ex-out/4-1-filter to 30.svg" (csv->svg "test/ex/example4.csv"
                                               :opts opts)))))
  (let [opts (merge default-options
                    {:layout "dot"
                     :label "id"
                     :shape "folder"
                     :splines "polyline"
                     :overlap "false"
                     :filter-graph "id<40"})]
    (is (nil?
         (spit "test/ex-out/4-2 filter to 40 & polyline.svg" (csv->svg "test/ex/example4.csv"
                                               :opts opts))))))


(deftest example-5
  (let [opts (merge default-options
                    {:layout "neato"
                     :label "layer"
                     :shape "circle"
                     :splines "curved"
                     :overlap "ipsep"
                     :rank-sep "1.7"
                     :scale "1.3"
                     :color-on "id"
                     })]
    (is (nil?
         (spit "test/ex-out/5-1.svg" (csv->svg "test/ex/example5.csv"
                                               :opts opts)))))
  (let [opts (merge default-options
                    {:layout "neato"
                     :label "layer"
                     :shape "egg"
                     :splines "curved"
                     :overlap "ipsep"
                     :rank-sep "1.7"
                     :scale "1.3"
                     :color-on "layer"
                     :elide "1"
                     })]
    (is (nil?
         (spit "test/ex-out/5-2-elide & color-on.svg" (csv->svg "test/ex/example5.csv"
                                               :opts opts))))))


(deftest example-6
  (let [opts (merge default-options
                    {:layout "dot"
                     :label "name"
                     :cluster-on "animal"
                     :rankdir "TB"
                     :splines "ortho"
                     :url "link"
                     })]
    (is (nil?
         (spit "test/ex-out/6-1.svg" (csv->svg "test/ex/example6.csv"
                                               :opts opts)))))
  (let [opts (merge default-options
                    {:layout "dot"
                     :label "name"
                     :cluster-on "animal"
                     :rankdir "TB"
                     :splines "ortho"
                     :url "link"
                     :post-process? "true"
                     })]
    (is (nil?
         (spit "test/ex-out/6-2 post process.svg" (csv->svg "test/ex/example6.csv"
                                               :opts opts))))))

(deftest example-7
  (let [opts (merge default-options
                    {:layout "dot"
                     :label "name"
                     :cluster-on "animal"
                     :rankdir "TB"
                     :splines "ortho"
                     :url "link"
                     })]
    (is (nil?
         (spit "test/ex-out/7-1.svg" (csv->svg "test/ex/example7.csv"
                                               :opts opts)))))
  (let [opts (merge default-options
                    {:layout "dot"
                     :label "name"
                     :cluster-on "animal"
                     :rankdir "TB"
                     :splines "ortho"
                     :url "link"
                     :post-process? "true"
                     :pp-cluster-sep "4"
                     })]
    (is (nil?
         (spit "test/ex-out/7-2 post process cluster sep.svg" (csv->svg "test/ex/example7.csv"
                                               :opts opts))))))


(deftest example-8
  (let [opts (merge default-options
                    {:layout "dot"
                     :label "application"
                     :cluster-on "function"
                     :rankdir "TB"
                     :splines "ortho"
                     :fixedsize "false"
                     :shape "cylinder"
                     })]
    (is (nil?
         (spit "test/ex-out/8-1.svg" (csv->svg "test/ex/example8.csv"
                                               :opts opts)))))
  (let [opts (merge default-options
                    {:layout "dot"
                     :label "application"
                     :cluster-on "function"
                     :rankdir "TB"
                     :splines "ortho"
                     :fixedsize "false"
                     :shape "cylinder"
                     :post-process? "true"
                     :pp-cluster-sep "0"
                     :ranksep "0"
                     })]
    (is (nil?
         (spit "test/ex-out/8-2 post process shape ranksep edge labels.svg"
               (csv->svg "test/ex/example8.csv"
                         :opts opts))))))


(deftest example-9
  (let [opts (merge default-options
                    {:layout "dot"
                     :label "application"
                     :cluster-on "function"
                     :rankdir "TB"
                     :splines "ortho"
                     :fixedsize "false"
                     :shape "cylinder"
                     :constraint "false"
                     })]
    (is (nil?
         (spit "test/ex-out/9-1.svg" (csv->svg "test/ex/example9.csv"
                                               :opts opts)))))
  (let [opts (merge default-options
                    {:layout "dot"
                     :label "application"
                     :cluster-on "function"
                     :rankdir "TB"
                     :splines "ortho"
                     :fixedsize "false"
                     :shape "cylinder"
                     :concentrate "true"
                     :post-process? "true"
                     :pp-cluster-sep "0"
                     :ranksep "0.3"
                     :nodesep "0.7"
                     :constraint "false"
                     })]
    (is (nil?
         (spit "test/ex-out/9-2 post process shape ranksep nodesep.svg"
               (csv->svg "test/ex/example9.csv"
                         :opts opts)))))
  (let [opts (merge default-options
                    {:layout "dot"
                     :label "application"
                     :cluster-on "function"
                     :rankdir "TB"
                     :splines "ortho"
                     :fixedsize "false"
                     :shape "cylinder"
                     :concentrate "true"
                     :post-process? "true"
                     :pp-cluster-sep "0"
                     :ranksep "0.3"
                     :nodesep "0.7"
                     :constraint "false"
                     :edge-label "volume"
                     })]
    (is (nil?
         (spit "test/ex-out/9-3 edge-label volume.svg"
               (csv->svg "test/ex/example9.csv"
                         :opts opts)))))
  (let [opts (merge default-options
                    {:layout "dot"
                     :label "application"
                     :cluster-on "function"
                     :rankdir "TB"
                     :splines "ortho"
                     :fixedsize "false"
                     :shape "cylinder"
                     :concentrate "true"
                     :post-process? "true"
                     :pp-cluster-sep "0"
                     :ranksep "0.3"
                     :nodesep "0.7"
                     :constraint "false"
                     :edge-label "format"
                     })]
    (is (nil?
         (spit "test/ex-out/9-4 edge-label format.svg"
               (csv->svg "test/ex/example9.csv"
                         :opts opts)))))
  (let [opts (merge default-options
                    {:layout "dot"
                     :label "application&owner"
                     :cluster-on "function"
                     :rankdir "TB"
                     :splines "ortho"
                     :fixedsize "false"
                     :shape "cylinder"
                     :concentrate "true"
                     :post-process? "true"
                     :pp-cluster-sep "0"
                     :ranksep "0.3"
                     :nodesep "0.7"
                     :constraint "false"
                     :edge-label "type"
                     :filter-graph "volume>100"
                     })]
    (is (nil?
         (spit "test/ex-out/9-5 node label filter vol>100.svg"
               (csv->svg "test/ex/example9.csv"
                         :opts opts)))))
  (let [opts (merge default-options
                    {:layout "dot"
                     :label "application&owner"
                     :cluster-on "function"
                     :rankdir "TB"
                     :splines "ortho"
                     :fixedsize "false"
                     :shape "cylinder"
                     :concentrate "true"
                     :post-process? "true"
                     :pp-cluster-sep "0"
                     :ranksep "0.3"
                     :nodesep "0.7"
                     :constraint "false"
                     :edge-label "type"
                     :filter-graph "function=Capture or function:Risk"
                     })]
    (is (nil?
         (spit "test/ex-out/9-6 filter function.svg"
               (csv->svg "test/ex/example9.csv"
                         :opts opts)))))
  (let [opts (merge default-options
                    {:layout "dot"
                     :label "application&owner"
                     :cluster-on "function"
                     :rankdir "TB"
                     :splines "ortho"
                     :fixedsize "false"
                     :shape "cylinder"
                     ;:concentrate "true"
                     :post-process? "true"
                     :pp-cluster-sep "0"
                     :ranksep "0.3"
                     :nodesep "1.0"
                     :constraint "false"
                     :edge-label "type"
                     :filter-graph "function=[Capture or Lifecycle or Risk]"
                     })]
    (is (nil?
         (spit "test/ex-out/9-7 filter function clause.svg"
               (csv->svg "test/ex/example9.csv"
                         :opts opts)))))
  (let [opts (merge default-options
                    {:layout "dot"
                     :label "application&owner"
                     :cluster-on "function"
                     :rankdir "TB"
                     :splines "ortho"
                     :fixedsize "false"
                     :shape "cylinder"
                     :concentrate "true"
                     :post-process? "true"
                     :pp-cluster-sep "0"
                     :ranksep "0.3"
                     :nodesep "0.7"
                     :constraint "false"
                     :edge-label "type"
                     :paths "function=[Capture or Lifecycle or Risk]|owner=Daniel"
                     })]
    (is (nil?
         (spit "test/ex-out/9-8 paths.svg"
               (csv->svg "test/ex/example9.csv"
                         :opts opts))))))
