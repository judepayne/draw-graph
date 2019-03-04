(ns ^{:doc "Post process the svg."
      :author "Jude Payne"}
  lib-draw-graph.postprocessor
  (:require [clojure.zip           :as zip]
            [clojure.data.zip.xml  :refer [xml-> xml1-> attr attr= text= tag=]]
            [clojure.data.xml      :as xml]
            #?(:clj [instaparse.core :as insta :refer [defparser]]
               :cljs [instaparse.core :as insta :ref-macros [defparser]])))

;; Post processsing the svg.
;; Note - seems like there's no equivalent of clojure xml
;; so will need a solution to that to make this library transferrable.
;; Not sure this is true!

;; Remove this!
(def test-svg (slurp "test.svg"))


;; -----------------
;; Simple type to express either an x,y point or translation
(defprotocol Geom
  (add [this that]))


(deftype xy [^Long x ^Long y]
  Object
  (toString [this]
    (str x "," y))
  Geom
  (add [this that]
    (let [x-sum (+ x (.x that))
          y-sum (+ y (.y that))]
      (xy. x-sum y-sum))))


(defn xs
  "Returns the x components of the xys"
  [& xys]
  (map #(.x %) xys))


(defn ys
  "Returns the y components of the xys"
  [& xys]
  (map #(.y %) xys))


(defn str-pair->xy [pair]
  (xy. (read-string (first pair))
       (read-string (second pair))))


;; -----------------
;; Instaparse for parsing svg forms


(def regex-number "#'-?[0-9]\\d*(\\.\\d+)?'")


(def whitespace
  (insta/parser
    "whitespace = #'\\s+'"))


(defparser points-parser
  (str
   "<S> = P+
    <P> = N C N
    <C> = <','>
    <N> = " regex-number)
  :auto-whitespace whitespace)


(defn parse-points [s]
  {:type :polygon
   :data (map str-pair->xy
              (partition 2 (points-parser s)))})


(defparser path-parser
  (str
   "S = M? C?
    M = <'M'>P
    C = <'C'>P+
    <P> = N Comma N
    <Comma> = <','>
    <N> = " regex-number)
  :auto-whitespace whitespace)


(defn parse-path [s]
  {:type :path
   :data
   (insta/transform
    {:M (fn [& args] {:M (str-pair->xy args)})
     :C (fn [& args] 
          (->> args
               (partition 2)
               (mapv str-pair->xy)
               (partition 3)
               (map (fn [c] {:C c}))))
     :S (fn [& args] (flatten args))}
    (path-parser s))})


(defn bounding [pts]
  (let [xs  (apply xs pts)
        ys  (apply ys pts)
        min-x (apply min xs)
        min-y (apply min ys)
        max-x (apply max xs)
        max-y (apply max ys)]
    {:left min-x :bottom min-y :right max-x :top max-y}))


(defmulti characterise
  "Takes in the parse tree of an svg entity and returns a map
  containing the key geometry of the entity."
  (fn [parse-tree] (:type parse-tree)))


(defmethod characterise :polygon [poly]
  (let [pts (:data poly)]
    (bounding pts)))


(defmethod characterise :path [path]
  (letfn [(points [collected item]
            (cond
              (map? item)          (map #(points collected %) (vals item))
              (instance? xy item)  (conj collected item)
              (sequential? item)   (map #(points collected %) item)))
          (abs [n] (max n (- n)))]
    (let [pts (flatten (points [] (:data path)))
          xs (apply xs pts)
          ys (apply ys pts)
          bdg (bounding pts)
          radius (abs (- (:left bdg) (.x (first pts))))]
     (assoc bdg :radius radius))))


;; -----------------
;; Generate various svg strings for shapes - to be used in replacing
;; parts of the svg tree below

;; Note - I've chosen to use svg relative commands, c & l (not C&L) as easier to
;; handle but the trade-off is that rounded-rect won't be identically
;; specified in svg to the way Graphviz does it, meaning no double passes.
;; Better get it right first time then!

(defn c
  "Generates a bezier. assumes we are moving anti-clockwise.
   This replicates the way Grpahviz generate a 90 deg bezier."
  [radius turn]
  (let [-radius (* -1 radius)
        half-r  (/ radius 2)
        -half-r (* -1 half-r)
        curve
        (case turn
          :down  [-half-r 0 -radius half-r -radius radius]
          :left  [0 -half-r -half-r -radius -radius -radius]
          :up    [half-r 0 radius -half-r radius -radius]
          :right [0 half-r half-r radius radius radius])]
    (apply str "c "
           (->> curve
                (interpose " ")))))


(defn l [x y]
  (str "l " (xy. x y)))


(defn rect
  "Generate the svg points string for a rectangular polygon.
  start is an xy (point) at the bottom left of the rectangle."
  [start width height]
  (let [-height (* -1 height)]
    (apply str
           (interpose " "
                      [start
                       (add start (xy. 0 -height))
                       (add start (xy. width -height))
                       (add start (xy. width 0))
                       start]))))


(defn rounded-rect
  "Start point is bottom left (right of the curve). We move anti-
  clockwise around the polygon."
  [start width height radius]
  (let [h (- height (* 2 radius))
        w (- width (* 2 radius))
        -h (* -1 h)
        -w (* -1 w)]
    (apply str
           (interpose " "
                      ["M" (add start (xy. radius 0))
                       (l w 0)
                       (c radius :up)
                       (l 0 -h)
                       (c radius :left)
                       (l -w 0)
                       (c radius :down)
                       (l 0 h)
                       (c radius :right)]))))


;; -----------------
;; Zippers for parsing the main svg tree.
;; instaparse to be used on selected (string) elements within.

(defn parse-svg [svg]
  (-> svg
      java.io.StringReader.
      xml/parse))


(defn ->zipper [xml]
  (zip/xml-zip xml))


(def z (->zipper (parse-svg test-svg)))


;; 11 nexts between two subsequent cluster g's
(def g :xmlns.http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg/g)
;; 2 previous
(def title :xmlns.http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg/title)
;; 3 previous
(def polygon :xmlns.http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg/polygon)
;; *or*
(def path :xmlns.http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg/path)
;; 2 previous
(def text :xmlns.http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg/text) ;<- where we find
; content ("squirrels") or whatever


(defn tree-find
  ([zipper matcher]
   (tree-find zipper matcher identity))
  ([zipper matcher shift]
   (loop [loc zipper nodes []]
     (if (zip/end? loc)
       nodes
       (if-let [matcher-result (matcher loc)]
         (recur (zip/next loc) (conj nodes (zip/node (shift loc))))
         (recur (zip/next loc) nodes))))))


(defn tree-edit
  "Take a zipper, a function that matches a pattern in the tree,
   and a function that edits the current location in the tree.  Examine the tree
   nodes in depth-first order, determine whether the matcher matches, and if so
   apply the editor."
  ([zipper matcher editor]
   (tree-edit zipper matcher identity identity editor))
  ([zipper matcher shift reshift editor]
   (loop [loc zipper]
     (if (zip/end? loc)
       (zip/root loc)
       (if-let [matcher-result (matcher loc)]
         (let [new-loc (zip/edit (shift loc) editor)]
           (recur (zip/next (reshift new-loc))))
         (recur (zip/next loc)))))))


(defn all-clusters [loc]
  (= "cluster" (:class (:attrs (zip/node loc)))))


(defn cluster [cluster loc]
  (let [content (:content (zip/node loc))]
    (= content (list cluster))))


(defn all-nodes [loc]
  (= "node" (:class (:attrs (zip/node loc)))))


(def match-pandas? (partial cluster "pandas"))


(defn jump [^Integer jump loc]
  (if (> jump 0)
    (nth (iterate zip/next loc) jump)
    (nth (iterate zip/prev loc) (* -1 jump))))


(defn editor [node]
  (println  ">>Here is a your thing: " node)
  node)


