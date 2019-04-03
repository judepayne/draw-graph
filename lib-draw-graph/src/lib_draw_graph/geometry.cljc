(ns ^{:doc "Facilities for working with geometric shapes."
      :author "Jude Payne"}
    lib-draw-graph.geometry)

;; All code here is performance optimised by minimising reflection.


(defn ex
  "Creates an exception object with error-string."
  [error-string]
  #?(:clj (Exception. ^String error-string)
     :cljs (js/Error. error-string)))


;; accessing members of deftype and defrecord
;; https://dev.clojure.org/jira/browse/CLJ-1774
;; don't treat a record as a map for speed!
(defrecord Rect [^long x ^long y ^long w ^long h])


(defprotocol Rectangular
  "Geometric checks between rectangular shapes."
  (inside? [this that sep] "is this (+ sep-arator) inside that?")
  (overlaps? [this that sep] "is this (+ sep) overlapping that?")
  (bigger? [this that] "is this bigger than that?")
  (area [this] "returns the area."))


(defprotocol Random
  "Randomly alter a shape."
  (rand-shift [this max-shift] [this max-shift dimension]
    "Randomly shift the left, top, right or bottom edge. When a dimension
     is passed, can only be either :x (for randomly shifting left or right)
     or :y (for randomly shifting top or bottom)."))


(defprotocol Svg
  "Convert to and from svg representations."
  (->poly-coordinates [this])
  (->hiccup [this])
  (from-svg [s]))


;; helper constructs

(def rect-keys [:x :y :w :h])


(defn- rand-chg [^long max-shift]
  (- (rand-int (* 2 max-shift)) max-shift))


;; Implementations of protocols

(extend-type Rect

  Rectangular
  (inside? [this ^long sep that]
    (and (> (:x this) (+ (:x that) sep))
         (> (:y this) (+ (:y that) sep))
         (< (+ (:x this) (:w this)) (+ (:x that) (:w that) (* -1 sep)))
         (< (+ (:y this) (:h this)) (+ (:y that) (:h that) (* -1 sep)))))

  (overlaps? [this sep that]
    (and (< (:x this) (+ (:x that) (:w that) sep))
         (> (+ (:x this) (:w this) sep) (:x that))
         (< (:y this) (+ (:y that) (:h that) sep))
         (> (+ (:y this) (:h this) sep) (:y that))))

  (bigger? [this that]
    (or (< (:x this) (:x that))
        (< (:y this) (:y that))
        (> (:w this) (:w that))
        (> (:h this) (:h that))))

  (area [^Rect this]
    (* (:w this) (:h this)))


  Random
  (rand-shift
    ([^Rect this ^long max-shift]
     (let [dim (get rect-keys (rand-int 4))
           delta (rand-chg max-shift)
           -delta (* -1 delta)]
       (case dim
         :x (Rect. (+ (:x this) delta) (:y this)
                   (+ (:w this) -delta) (:h this))          
         :y (Rect. (:x this) (+ (:y this) delta) 
                   (:w this) (+ (:h this) -delta))
         :w (Rect. (:x this) (:y this) (+ (:w this) delta) (:h this))
         :h (Rect. (:x this) (:y this) (:w this) (+ (:h this) delta)))))

    ([^Rect this ^long max-shift ^clojure.lang.Keyword dimension]
     (let [delta (rand-chg max-shift)
           -delta (* -1 delta)]
       (case dimension
         :x (let [dim (get [:x :w] (rand-int 2))]
              (case dim
                :x (Rect. (+ (:x this) delta) (:y this)
                          (+ (:w this) -delta) (:h this))
                :w (Rect. (:x this) (:y this) (+ (:w this) delta) (:h this))))
         :y (let [dim (get [:y :h] (rand-int 2))]
              (case dim
                :y (Rect. (:x this) (+ (:y this) delta) 
                          (:w this) (+ (:h this) -delta))
                :h (Rect. (:x this) (:y this) (:w this) (+ (:h this) delta))))
         (throw (ex "Possible dimensions to vary are :x and :y"))))))

  
  Svg
  ;; We will implement the svg methods later
  )


