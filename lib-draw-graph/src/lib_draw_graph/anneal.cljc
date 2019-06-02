(ns ^{:doc "Simulated annealing for cluster layout."
      :author "Jude Payne"}
  lib-draw-graph.anneal
  (:require [lib-draw-graph.geometry :refer [overlaps? inside? bigger? area]]
            [lib-draw-graph.util     :as util]))


#?(:clj (import [java.lang Math]))


;; Annealing constants

(def ^:const max-move-default 14)         ;; default move amount +/- dim can be changed by
(def ^:const PEN 1000000)                ;; Penalty cost amount


;; From Clojure data analysis cookbook
(defn annealing

  ([initial          ;; the initial state of the system
    max-iter         ;; maximum numbers of iterations
    min-cost         ;; the target minimum cost of the system
    constraints      ;; constraints that a new state must satisfy
    neighbor-fn      ;; the 'next-step' function
    cost-fn          ;; the cost function
    p-fn             ;; the probability of a move function
    temp-fn          ;; the temperature of the system
    & {:keys [dims terminate-early? x-retard y-retard max-move]
       :or {dims [:x :y :w :h] terminate-early? false
            x-retard nil y-retard nil
            max-move max-move-default}}]
   (let [cost (cost-fn constraints initial)
         last-cost (atom cost)]
     (loop [state initial
            cost cost
            k 1]
       ;; check every 500 reps that cost has changed more than 0.01%
       (if (and (= 0 (rem k 500))
                terminate-early?
                (> 0.0001 (let [lc @last-cost
                              del-cost (/ (- lc cost) cost)]
                            (reset! last-cost cost)
                            del-cost)))
         state

         ;; if it hasn't, loop the annealing function
         (if (and (< k max-iter)
                  (> cost min-cost))
           (let [t (temp-fn (/ k max-iter))
                 next-state (neighbor-fn state dims x-retard y-retard max-move)
                 next-cost (cost-fn constraints state
                                    (second next-state) (first next-state))]
             (if (> (p-fn cost next-cost t) (rand))
               (recur (second next-state) next-cost (inc k))
               (recur state cost (inc k))))
           state))))))


(defn random-move
  [max-move]
  "Returns a random +/- amount less than max-move. Every so often, we
   throw in small amounts to help fine tuning at the end of annealing."
  (let [small-move-prob 3      ;; i.e. 1 in n chance
        small-move 5
        mm (if (> (inc (rand-int small-move-prob)) (dec small-move-prob))
             small-move
             max-move)]
    (- (rand-int (* 2 mm)) mm)))


(defn- vary-rect
  "When a rectangle/ polygon is defined with a point, width and height
  (as opposed to two points), when varying the x or y of the point, it
  is necessary to adjust the width or height as well to be consistent
  with a rectangle/ polygon specified as two x,y points."
  [rect dims x-retard y-retard max-move]
  (let [dim (rand-nth dims)
        delta (random-move max-move)]
    (case dim
      :x (if (and x-retard (not (zero? x-retard)))
           (-> rect
               (assoc :x (+ (:x rect) (quot delta x-retard))) 
               (assoc :w (- (:w rect) (quot delta x-retard))))
           (-> rect
               (assoc :x (+ (:x rect) delta)) 
               (assoc :w (- (:w rect) delta))))
      :y (if (and y-retard (not (zero? y-retard)))
           (-> rect
               (assoc :y (+ (:y rect) (quot delta y-retard)))
               (assoc :h (- (:h rect) (quot delta y-retard))))
           (-> rect
               (assoc :y (+ (:y rect) delta))
               (assoc :h (- (:h rect) delta))))
      :w (if (and x-retard (not (zero? x-retard)))
           (-> rect
               (assoc :w (+ (:w rect) (quot delta x-retard))))
           (-> rect
               (assoc :w (+ (:w rect) delta))))
      (if (and y-retard (not (zero? y-retard)))
        (-> rect (assoc :h (+ (:h rect) (quot delta y-retard))))
        (-> rect (assoc :h (+ (:h rect) delta)))))))


(defn neighbor-fn
  "Varies a random item from state and returns the new state
  after checking that the new state passes constraints."
  [state dims x-retard y-retard max-move]
  (let [k (rand-nth (keys state))
        next (vary-rect (get state k) dims x-retard y-retard max-move)]
    [k (assoc state k next)]))


(defn- passes-constraints?
  "Checks that the new (proposed) state item satisfies constraints."
  [constraints state next-state varied]
  (let [prev-item (get state varied)
        item (get next-state varied)
        others (vals (dissoc next-state varied))
        sep (:collision constraints)]
    (reduce
     (fn [a [k v]]
       (and a
            (case k
              :grow      (if v (bigger? prev-item item) true)
              :boundary  (inside? v item)
              :collision (if sep (not-any? #(overlaps? sep item %) others) true)
              :obstacles (if (and v sep) (not-any? #(overlaps? sep item %) (vals v)) true))))
     true
     constraints)))




(defn cost-fn
  "Calculates cost, which is total bounded area minus sum of current areas.
  For the initial call to calculate the system's cost, requires only constraints and state.
  Subsequent calls require the state, next-state and k, the key of the entry that has
  changed between them."
  ([constraints state]
   (let [boundary (:boundary constraints)]
     (if (empty? boundary)
       (throw (util/err "no boundary condition!"))
       (let [bounded-area (area boundary)]
         (- bounded-area (reduce (fn [a c] (+ a (area c))) 0 (vals state)))))))

  ([constraints state next-state k]
   (let [bounded-area (area (:boundary constraints))
         cost (- bounded-area (reduce (fn [a c] (+ a (area c))) 0 (vals next-state)))
         penalty (if (passes-constraints? constraints state next-state k) 0 PEN)]
     (+ cost penalty))))


(defn temp-fn
  "the temperature. r should be between 0 and 1"
  [r]
  (- 1.0 (float r)))


(defn p-fn  "the probability of a move function, using Boltzmann"
  [c0 c1 t]
  (let [diff (- c1 c0)]
    (if (< c1 c0)
      1
      (Math/exp (* -1 (/ diff t))))))
