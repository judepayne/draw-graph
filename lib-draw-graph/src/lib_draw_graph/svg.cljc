(ns ^{:doc "Svg processing."
      :author "Jude Payne"}
    lib-draw-graph.svg
  (:require [clojure.zip           :as zip]
            [clojure.data.zip.xml  :refer [xml-> xml1-> attr attr= text= tag=]]
            [clojure.data.xml      :as xml]
            #?(:clj [instaparse.core :as insta :refer [defparser]]
               :cljs [instaparse.core :as insta :refer-macros [defparser]])))


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
    (let [x-sum (+ x #?(:clj (.x that) :cljs (.-x that)))
          y-sum (+ y #?(:clj (.y that) :cljs (.-y that)))]
      (xy. x-sum y-sum))))


(defn xs
  "Returns the x components of the xys"
  [& xys]
  #?(:clj (map #(.x %) xys)
     :cljs (map #(.-x %) xys)))


(defn ys
  "Returns the y components of the xys"
  [& xys]
  #?(:clj (map #(.y %) xys)
     :cljs (map #(.-y %) xys)))


(defn str-pair->xy [pair]
  #?(:clj (xy. (read-string (first pair))
               (read-string (second pair)))
     :cljs (xy. (cljs.reader/read-string (first pair))
                (cljs.reader/read-string (second pair)))))


;; -----------------
;; READING SVG

(def regex-number "#'-?[0-9]\\d*(\\.\\d+)?'")


(def whitespace
  (insta/parser
    "whitespace = #'\\s+'"))


(defparser path-parser
  (str
   "S = M? C?
    M = <'M'>P
    C = <'C'>Ns+
    <Ns> = P P P
    <P> = N Comma N
    <Comma> = <','>
    <N> = " regex-number)
  :auto-whitespace whitespace)


(defn parse-path [s]
  (insta/transform
   {:M (fn [& args] {:M (str-pair->xy args)})
    :C (fn [& args] 
         (->> args
              (partition 2)
              (mapv str-pair->xy)
              (partition 3)
              (map (fn [c] {:C c}))))
    :S (fn [& args] (flatten args))}
   (path-parser s)))


(defparser points-parser
  (str
   "S = P+
    <P> = N Comma N
    <Comma> = <','>
    <N> = " regex-number)
  :auto-whitespace whitespace)


(defn parse-polygon [s]
  (insta/transform
   {:S (fn [& args]
         (->> args
              (partition 2)
              (mapv str-pair->xy)))}
   (points-parser s)))


(defn polygon->bounding-box
  "Returns the bounding box of the points.
  pts should be a collection of xy's"
  [pts]
  (let [xs  (apply xs pts)
        ys  (apply ys pts)
        min-x (apply min xs)
        min-y (apply min ys)
        max-x (apply max xs)
        max-y (apply max ys)]
    {:left min-x :bottom max-y :right max-x :top min-y}))


(defn path->bounding-box [path]
    (letfn [(points [collected item]
              (cond
                (map? item)          (map #(points collected %) (vals item))
                (instance? xy item)  (conj collected item)
                (sequential? item)   (map #(points collected %) item)))
            (abs [n] (max n (- n)))]
      (let [pts (flatten (points [] path))
            xs (apply xs pts)
            ys (apply ys pts)
            bdg (polygon->bounding-box pts)
            radius (abs (- (:left bdg)
                           #?(:clj (.x (first pts))
                              :cljs (.-x (first pts)))))]
        (assoc bdg :radius radius))))


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
(def ellipse :xmlns.http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg/ellipse)

(def circle :xmlns.http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg/circle)


(defmulti bounding-box
  "Takes in a chunk of svg and returns a map specifying the bounding rectangle."
  (fn [svg] (:tag svg)))


(defmethod bounding-box polygon [svg]
  (-> svg
      :attrs
      :points
      parse-polygon
      polygon->bounding-box))


(defmethod bounding-box path [svg]
  (-> svg
      :attrs
      :d
      parse-path
      path->bounding-box))


(defmethod bounding-box ellipse [svg]
  (let [attrs (-> svg :attrs)
        flo (fn [s] #?(:clj (Float/parseFloat s) :cljs (js/parseFloat s)))
        cx (flo (:cx attrs))
        cy (flo (:cy attrs))
        rx (flo (:rx attrs))
        ry (flo (:ry attrs))]
    {:left (- cx rx)
     :right (+ cx rx)
     :top (- cy ry)
     :bottom (+ cy ry)}))


(defmethod bounding-box circle [svg]
  (let [attrs (-> svg :attrs)
        flo (fn [s] #?(:clj (Float/parseFloat s) :cljs (js/parseFloat s)))
        cx (flo (:cx attrs))
        cy (flo (:cy attrs))
        r (flo (:r attrs))]
    {:left (- cx r)
     :right (+ cx r)
     :top (- cy r)
     :bottom (+ cy r)}))


(defn box->rect
  "Converts a bounding box map produced into :x :y :w :h form."
  [m]
  (-> m
      (dissoc :bottom :top :right :left)
      (assoc :x (int (:left m)))
      (assoc :y (int (:top m)))
      (assoc :w (int (- (:right m) (:left m))))
      (assoc :h (int (- (:bottom m) (:top m))))))


(defn all-clusters [loc]
  (= "cluster" (:class (:attrs (zip/node loc)))))


(defn cluster [cluster loc]
  (let [content (:content (zip/node loc))]
    (= content (list cluster))))


(defn all-nodes [loc]
  (= "node" (:class (:attrs (zip/node loc)))))


(defn jump 
  "For moving to prev for next locations in a zipper. num-locs
   should be positive for next and negative for previous."
  [^Integer num-locs loc]
  (cond
    (> num-locs 0) (nth (iterate zip/next loc) num-locs)
    (< num-locs 0) (nth (iterate zip/prev loc) (- num-locs))
    0 loc))


(defn node
  "Matches the text of a node, including accomodating text split
   with the special '+' characters."
  [node loc]
  (let [parts (clojure.string/split node #"\+")
        raw-node (clojure.string/replace node #"\+" "")
        num-parts (count parts)
        jumps (take (dec num-parts) (iterate (partial + 3) 3))
        get-part (fn [loc] (first (:content (zip/node loc))))
        first-part (get-part loc)
        contents (clojure.string/join
                  (cons first-part
                        (for [x jumps
                              :let [y (get-part (jump x loc))]]
                          y)))]
    (= raw-node contents)))


;; Zippers for parsing the main svg tree.

(defn parse-svg [svg]
  (-> svg
      xml/parse-str))


(defn ->zipper [xml]
  (zip/xml-zip xml))


(def wrong-xlink #"xmlns:ns\d+=\"http://www.w3.org/1999/xlink\" ns\d+")


(defn ->xml [parsed]
  #?(:clj (xml/emit-str parsed)
     :cljs (let [raw (xml/emit-str parsed)
                 fixed (clojure.string/replace raw wrong-xlink "xlink")]
             fixed)))


(defn tree-find
  "Returns a vector of all matching nodes in the zipper.
   match-pred is a predicate used to match each node. jump is
   a function that takes a loc and returns another loc in the zipper.
   i.e. a certain 'jump' away from each of the matched nodes.

   Example usage:
     (tree-find z (partial cluster \"pandas\") -2)
   will return all nodes in the zipper z which are two locs previous
   to the nodes matched by the function (partial cluster \"pandas\")"
  ([zipper match-pred]
   (tree-find zipper match-pred identity))
  ([zipper match-pred shift]
   (loop [loc zipper nodes []]
     (if (zip/end? loc)
       nodes
       (if-let [matcher-result (match-pred loc)]
         (recur (zip/next loc) (conj nodes (zip/node (jump shift loc))))
         (recur (zip/next loc) nodes))))))


(defn cluster->rect [zipper clstr]
  (-> (tree-find zipper (partial cluster clstr) -2)
      first
      bounding-box
      (assoc :name clstr)
      box->rect))


(defn node->rect [zipper nd]
  (-> (tree-find zipper (partial node nd) -2)
      first
      bounding-box
      (assoc :name nd)
      box->rect))


;; -----------------
;; WRITING SVG

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


(defn rect-poly
  "Generate the svg points string for a rectangular polygon.
  start is an xy (point) at the bottom left of the rectangle."
  [start width height]
  (let [-height (* -1 height)]
    (apply str
           (interpose " "
                      [start
                       (add start (xy. 0 height))
                       (add start (xy. width height))
                       (add start (xy. width 0))
                       start]))))

(defn rect->poly [r]
  (rect-poly (xy. (:x r) (:y r)) (:w r) (:h r)))


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
                      ["M" (add start (xy. radius height))
                       (l w 0)
                       (c radius :up)
                       (l 0 -h)
                       (c radius :left)
                       (l -w 0)
                       (c radius :down)
                       (l 0 h)
                       (c radius :right)]))))


(defmulti rect->svg (fn [r] (some? (:radius r))))


(defmethod rect->svg false [r]
  (let [points (rect-poly (xy. (:x r) (:y r)) (:w r) (:h r))]
    [:points points]))


(defmethod rect->svg true [r]
  (let [points (rounded-rect (xy. (:x r) (:y r)) (:w r) (:h r) (:radius r))]
    [:d points]))


(defn tree-edit
  "Take a zipper, a function that matches a pattern in the tree,
   and a function that edits the current location in the tree.  Examine the tree
   nodes in depth-first order, determine whether the matcher matches, and if so
   apply the editor.
   k-shift is the jump (from match) to get to the loc where get-k is applied to
   extract the key.
   d-shift is the jump (from match) to get to the loc where the data to be edited sits."
  ([zipper matcher editor]
   (tree-edit zipper matcher 0 identity 0 editor))
  ([zipper matcher k-shift get-k d-shift editor]
   (loop [loc zipper]
     (if (zip/end? loc)
       (zip/root loc)
       (if (matcher loc)
         (let [k (get-k (zip/node (jump k-shift loc)))
               new-loc  (zip/edit (jump d-shift loc) (partial editor k))]
           (recur (zip/next (jump (- d-shift) new-loc))))
         (recur (zip/next loc)))))))

;; notes  jumps are 7 to content then -2 to get attr then (obviously -5)


(defn ->root
  "zips all the way up and returns the root node, reflecting any
 changes."
  {:added "1.0"}
  [loc]
    (if (zip/end? loc)
      loc
      (let [p (zip/up loc)]
        (if p
          (recur p)
          loc))))


(defn ->node
  [loc]
  (zip/node loc))

