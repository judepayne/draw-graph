(ns ^{:doc "Facilities for working with geometric shapes."
      :author "Jude Payne"}
    lib-draw-graph.geometry)


(defn overlaps?
  "Returns true if m1 and m2 are in collision with each other.
   sep is the separation that should be preserved."
  [sep m1 m2]
  (and (< (:x m1) (+ (:x m2) (:w m2) sep))
       (> (+ (:x m1) (:w m1) sep) (:x m2))
       (< (:y m1) (+ (:y m2) (:h m2) sep))
       (> (+ (:y m1) (:h m1) sep) (:y m2))))


(defn inside?
  "Returns true if m is completely inside m1."
  [sep m1 m]
  (let [-sep (* -1 sep)]
    (and (> (:x m) (+ (:x m1) sep))
         (> (:y m) (+ (:y m1) sep))
         (< (+ (:x m) (:w m)) (+ (:x m1) (:w m1) -sep))
         (< (+ (:y m) (:h m)) (+ (:y m1) (:h m1) -sep)))))


(defn bigger?
  "Returns true if m2 has grown from m1"
  [m1 m2]
  (or (< (:x m2) (:x m1))
      (< (:y m2) (:y m1))
      (> (:w m2) (:w m1))
      (> (:h m2) (:h m1))))


(def area (fn [m] (* (:w m) (:h m))))



;; Random generation of rectangles for anneal demo

(defn rand-rect [boundary sep]
  {(gensym)
   {:x (+ (:x boundary) (+ sep (rand-int (- (:w boundary) (* 2 sep)))))
    :y (+ (:y boundary) (+ sep (rand-int (- (:h boundary) (* 2 sep)))))
    :w (rand-int (int (/ (:w boundary) 5)))
    :h (rand-int (int (/ (:h boundary) 5)))}})


(defn- rand-rects*
  [boundary sep]
  (lazy-seq (cons (rand-rect boundary sep) (rand-rects* boundary sep))))


(defn rand-rects
  [n boundary sep]
  (reduce
   (fn [a c]
     (if (= (count a) n)
       (reduced a)
       (if (and
            (not-any? #((partial overlaps? sep (first (vals c)))  %) (vals a))
            (inside? sep boundary (first (vals c))))
         (merge a c)
         a)))
   {}
   (take (+ n 30) (rand-rects* boundary sep))))
