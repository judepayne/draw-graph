(ns ^{:doc "Facilities for working with geometric shapes."
      :author "Jude Payne"}
    lib-draw-graph.geometry)


(defn overlaps?
  "Returns true if m1 and m2 are in collision with each other.
   sep is a single distance to be taken into consideration."
  [sep m1 m2]
  (and (< (:x m1) (+ (:x m2) (:w m2) sep))
       (> (+ (:x m1) (:w m1) sep) (:x m2))
       (< (:y m1) (+ (:y m2) (:h m2) sep))
       (> (+ (:y m1) (:h m1) sep) (:y m2))))


(defn inside?
  "Returns true if m is completely inside m1."
  [m1 m]
  (and (>= (:x m) (+ (:x m1)))
       (>= (:y m) (+ (:y m1)))
       (<= (+ (:x m) (:w m)) (+ (:x m1) (:w m1)))
       (<= (+ (:y m) (:h m)) (+ (:y m1) (:h m1)))))


(def outside?
  ^{:doc "Return true is m is completely outside m1"}
  (complement inside?))


(defn inner-rect
  "Returns rect where the boundary is shifted inwards by the sep (separation).
   sep is either a single integer or is a map of individual :l :r :t :b
   (left right top bottom) separation distances that should used in the shift."
  [sep rect]
  (if (number? sep) (inner-rect {:l sep :r sep :t sep :b sep} rect)
      (assoc rect
             :x (+ (:x rect) (:l sep))
             :y (+ (:y rect) (:t sep))
             :w (- (:w rect) (:r sep) (:l sep))
             :h (- (:h rect) (:b sep) (:t sep)))))


(defn outer-rect
  "Returns rect where the boundary is shifted outwards by the sep (separation).
   sep is either a single integer or is a map of individual :l :r :t :b
   (left right top bottom) separation distances that should used in the shift."
  [sep rect]
  (if (number? sep) (outer-rect {:l sep :r sep :t sep :b sep} rect)
      (assoc rect
             :x (- (:x rect) (:l sep))
             :y (- (:y rect) (:t sep))
             :w (+ (:w rect) (:r sep) (:l sep))
             :h (+ (:h rect) (:b sep) (:t sep)))))


(defn bigger?
  "Returns true if m2 has grown from m1"
  [m1 m2]
  (or (< (:x m2) (:x m1))
      (< (:y m2) (:y m1))
      (> (:w m2) (:w m1))
      (> (:h m2) (:h m1))))


(def area (fn [m] (* (:w m) (:h m))))
