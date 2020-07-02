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
            [lib-draw-graph.geometry              :as geom]
            [lib-draw-graph.clustered             :refer :all]
            [lib-draw-graph.svg                   :refer :all]
            [lib-draw-graph.anneal                :refer :all]
            [lib-draw-graph.preprocessor          :refer :all]
            [lib-draw-graph.postprocessor         :refer :all]
            [lib-draw-graph.processor             :refer :all]
            [lib-draw-graph.util                  :refer :all]))


(def standard-options
  [:show-roots? false
   :cluster-on ""
   ;:color-on "application"
   :layout "dot"
   ;; :dpi 72  <- dpi should be 72!
   :label "name"
   :edge-label "relationship"
   :shape "ellipse"
   :nodesep 0.5
   :ranksep 0.8
   ;:sep 1 
;   :fontsize 9
   :splines "ortho"
   :rankdir "TB"
   :fixedsize false
   :tooltip ""
   :url ""
   :scale 2
   :overlap "false"
   :concentrate false
   ;; possible values for num-cluster-edges: 1 2 3 4 6 9 12 16
   :num-cluster-edges "9"
 ;  :elide "0"
   :constraint true
   :show-constraints? false
   :fix-ranks? false
 ;  :filter-graph "application = sysTicket or function = Reporting"
 ;  :filter-graph "function not in (Risk)"
 ;  :filter-graph "level<ted"
 ;  :filter-graph "format = legacy"
 ;  :filter-graph "volume not in (30, 25) and format in (legacy)"
   :filter-graph "relationship=friend"
 ;   :filter-graph "owner = Ruth"
 ;  :filter-graph "id<30"
 ;  :paths "owner = Ruth|owner = Paul"
 ;  :paths "function:Capture or function:Lifecycle|function:Reporting"
   :post-process? false
   :pp-clusters {:y true :h true :x true :w true}
   :pp-anneal-bias "3"
   :pp-cluster-sep "0"
   :pp-font "sans-serif"
])

(defn options [] (apply hash-map standard-options))

(defn s->in [s opts]
  {:data s
   :display-options opts
   :format-in (name (detect-format s))
   :format-out "svg"})


(defn file->in [filename opts]
  (s->in (slurp filename) opts))


(defn file->graph [filename
                  & {:keys [opts] :or {opts (apply hash-map standard-options)}}]
  (let [in (file->in filename opts)]
    (in->g in)))


(defn graph->dot [g
                  & {:keys [opts] :or {opts (apply hash-map standard-options)}}]
  (g/process-graph g opts))


(defn csv->dot [filename
                & {:keys [opts] :or {opts (apply hash-map standard-options)}}]
  (-> (file->in filename opts)
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
     (throw (IllegalArgumentException. ^String err)))))


(defn file->svg [filename
                & {:keys [opts] :or {opts (apply hash-map standard-options)}}]
  (process-to-svg (file->in filename opts) dot->svg))


(defn js->svg [js]
  (dot->svg (js->dot js)))


;; Generating standard outs for browsing

(def default-options
  {:label "name"
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
         (spit "test/ex-out/1-1.svg" (file->svg "test/ex/example1.csv"
                                               :opts opts)))))
  (let [opts (merge default-options
                    {:layout "dot"
                     :cluster-on "animal"
                     :color-on "name"
                     :label "name"
                     :rankdir "TB"})]
    (is (nil?
         (spit "test/ex-out/1-2.svg" (file->svg "test/ex/example1.csv"
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
         (spit "test/ex-out/2-1.svg" (file->svg "test/ex/example2.csv"
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
         (spit "test/ex-out/2-2 cluster-on.svg" (file->svg "test/ex/example2.csv"
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
         (spit "test/ex-out/4-1-filter to 30.svg" (file->svg "test/ex/example4.csv"
                                               :opts opts)))))
  (let [opts (merge default-options
                    {:layout "dot"
                     :label "id"
                     :shape "folder"
                     :splines "polyline"
                     :overlap "false"
                     :filter-graph "id<40"})]
    (is (nil?
         (spit "test/ex-out/4-2 filter to 40 & polyline.svg" (file->svg "test/ex/example4.csv"
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
         (spit "test/ex-out/5-1.svg" (file->svg "test/ex/example5.csv"
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
         (spit "test/ex-out/5-2-elide & color-on.svg" (file->svg "test/ex/example5.csv"
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
         (spit "test/ex-out/6-1.svg" (file->svg "test/ex/example6.csv"
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
         (spit "test/ex-out/6-2 post process.svg" (file->svg "test/ex/example6.csv"
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
         (spit "test/ex-out/7-1.svg" (file->svg "test/ex/example7.csv"
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
         (spit "test/ex-out/7-2 post process cluster sep.svg" (file->svg "test/ex/example7.csv"
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
         (spit "test/ex-out/8-1.svg" (file->svg "test/ex/example8.csv"
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
               (file->svg "test/ex/example8.csv"
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
         (spit "test/ex-out/9-1.svg" (file->svg "test/ex/example9.csv"
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
               (file->svg "test/ex/example9.csv"
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
               (file->svg "test/ex/example9.csv"
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
               (file->svg "test/ex/example9.csv"
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
               (file->svg "test/ex/example9.csv"
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
                     :filter-graph "function=Capture or function=Risk"
                     })]
    (is (nil?
         (spit "test/ex-out/9-6 filter function.svg"
               (file->svg "test/ex/example9.csv"
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
                     :filter-graph "function in (Capture, Lifecycle, Risk)"
                     })]
    (is (nil?
         (spit "test/ex-out/9-7 filter function clause.svg"
               (file->svg "test/ex/example9.csv"
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
                     :paths "function in (Capture, Lifecycle, Risk)|owner=Daniel"
                     })]
    (is (nil?
         (spit "test/ex-out/9-8 paths.svg"
               (file->svg "test/ex/example9.csv"
                         :opts opts))))))


(def test-env
  {"animals"   {:constraints {:boundary true, :grow true, :collision 0, :obstacles {}}
                :state {:state [{:radius 12, :name "carnivores", :x 16, :y -746, :w 658, :h 583}
                                {:name "rodents", :x 536, :y -155, :w 118, :h 126}]
                        :boundary {:name "animals", :x 8, :y -746, :w 773, :h 725}}
                :boundary-sep {:l 0, :t 30, :r 0, :b 0}}
   "plantae"   {:constraints {:boundary true, :grow true, :collision 0, :obstacles {}}
                :state {:objects [{:radius 12, :name "flora", :x 797, :y -661, :w 204, :h 645}]
                        :boundary {:radius 12, :name "plantae", :x 789, :y -661, :w 220, :h 653}}
                :boundary-sep {:l 0, :t 30, :r 0, :b 0}}
   "carnivores" {:constraints {:boundary true, :grow true, :collision 0, :obstacles {}}
                 :state {:objects [{:radius 12, :name "bears", :x 31, :y -709, :w 621, :h 341}
                                   {:radius 12, :name "wolves", :x 314, :y -360, :w 174, :h 182}]
                         :boundary {:radius 12, :name "carnivores", :x 16, :y -709, :w 658, :h 546}}
                 :boundary-sep {:l 0, :t 37, :r 0, :b 0}}
   "bears"      {:constraints {:boundary true, :grow true, :collision 0, :obstacles {}}
                 :state {:objects [{:radius 12, :name "pandas", :x 46, :y -672, :w 482, :h 284}
                                   {:radius 12, :name "brownbears", :x 543, :y -575, :w 94, :h 192}]
                         :boundary {:radius 12, :name "bears", :x 31, :y -672, :w 621, :h 304}}
                 :boundary-sep {:l 0, :t 37, :r 0, :b 0}}
   "rodents"    {:constraints {:boundary true, :grow true, :collision 0, :obstacles {}}
                 :state {:objects [{:radius 12, :name "squirrels", :x 544, :y -125, :w 102, :h 88}]
                         :boundary {:name "rodents", :x 536, :y -125, :w 118, :h 96}}
                 :boundary-sep {:l 0, :t 30, :r 0, :b 0}}})


(def new-st
  ^{:doc "same as test except inners shifted out by 1 in all dimension and outer in by 1."}
  {:objects [{:radius 12, :name "carnivores", :x 15, :y -745, :w 660, :h 585}
             {:name "rodents", :x 535, :y -156, :w 120, :h 128}]
   :boundary {:name "animals", :x 9, :y -747, :w 771, :h 723, :boundary true}})


(defn ^{:doc "updates environment with new state, for each <cluster, new-st> pair
  in new-st updating to the new rect and boundary."}
  test-update-env
  [env k new-st]
  (let [env1 (assoc-in env [k :state] new-st)
        objects (reduce (fn [acc c] (assoc acc (:name c) c)) {} (:objects new-st))]
    (reduce (fn [acc [k v]]
              (assoc-in acc [k :state :boundary] v))
            env1
            objects)))


;(clojure.data/diff test-env (test-update-env test-env "animals" new-st))
