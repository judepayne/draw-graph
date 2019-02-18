(ns aws-lambda.core-test
  (:require [clojure.test :refer :all]
            [clojurehandler.plain_clojure_handler :as ldg]
            [clojure.data.json                    :as json]
            [clojure.java.shell                   :as sh]
            [clojure.string                       :as str]
            [lib-draw-graph.processor             :as processor]))


(def standard-options
  [:hide-leaves? false
   :show-roots? true
   :cluster-on "hierarchy"
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
;   :ranksep 16
   :scale 2
   :overlap false
   :concentrate false
   :elide "0"
   :subgraph "id:3"
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


(def path-to-dot "/usr/local/bin/dot")


(defn dot->svg [s]
  (ldg/dot->svg s :path path-to-dot))


(defn csv->svg [filename]
  (dot->svg (csv->dot filename)))


;; -------------------
;; Generate dummy data

(defn second-last [coll]
  (last (butlast coll)))


(defn gen-edge [n m]
  [(inc (rand-int n)) (inc (rand-int m))])


(def alphabet (map char (range 97 123)))


(defn nodes-nodes [name reverse n nds layer-n layer-m]
  (apply str
         (interpose "\n"
                    (for [x [n]
                          y nds]
                      (if reverse
                        (str name ":" layer-m ":" y "," name ":" layer-n ":" x ",dir:back")
                        (str name ":" layer-n ":" x "," name ":" layer-m ":" y))))))


(defn gen-tree-layer [tree reverse n m layer-n layer-m]
  (let [ratio (quot m n)]
    (loop [l (range 1 (inc n))
           r (range 1 (inc m))
           acc ""]
      (if (empty? l)
        acc
        (let [splits (split-at ratio r)]
          (recur (rest l)
                 (second splits)
                 (str
                  acc
                  (nodes-nodes tree reverse (first l) (first splits) layer-n layer-m)
                  "\n")))))))


(defn make-tree [tree reverse & layers]
  (loop [lyrs layers
         tr ""
         lns alphabet]
    (if (= 1 (count lyrs))
      tr
      (recur (rest lyrs)
             (str
              tr
              (gen-tree-layer tree reverse (first lyrs) (second lyrs) (first lns) (second lns)))
             (rest lns)))))


(defn inter-trees [name1 name2 n m nA nB num minlen]
  (apply str
         (interpose "\n"
                    (take num (repeatedly
                               #(let [e (gen-edge n m)]
                                  (str name1 ":" nA (first e) "," name2 ":" nB (second e)
                                       ",minlen:" minlen ":style:dotted")))))))


(defn two-trees
  [tree1 tree2 layers1 layers2 num-connects
   & {:keys [reverse minlen] :or {reverse true minlen 5}}]
  (str
   "tree:id\n"
   (apply make-tree tree1 false layers1)
   (apply make-tree tree2 reverse layers2)
   (inter-trees
    tree1 tree2
    (* (second-last layers1) (quot (last layers1) (second-last layers1)))
    (* (second-last layers2) (quot (last layers2) (second-last layers2)))
    (str (nth alphabet (dec (count layers1))))
    (str (nth alphabet (dec (count layers2))))
    num-connects
    minlen)))
