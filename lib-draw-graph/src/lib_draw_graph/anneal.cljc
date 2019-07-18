(ns ^{:doc "Simulated annealing for cluster layout."
      :author "Jude Payne"}
  lib-draw-graph.anneal
  (:require [lib-draw-graph.geometry :refer [overlaps? inside? bigger? area]]
            [lib-draw-graph.util     :as util]))


#?(:clj (import [java.lang Math]))


;; Annealing constants

(def ^:const max-move-default 14)         ;; default move amount +/- dim can be changed by
(def ^:const PEN 1000000)                ;; Penalty cost amount
(def ^:const shrink-bias-default nil)


(def job-env (atom {}))  ;; a global var for an annealing job


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
    & {:keys [dims terminate-early? x-retard y-retard max-move shrink-bias]
       :or {dims [:x :y :w :h] terminate-early? false
            x-retard nil y-retard nil
            max-move max-move-default
            shrink-bias shrink-bias-default}}]
   (let [cost (cost-fn constraints initial)
         last-cost (atom cost)]
     (reset! job-env {:obj-count (count (:objects initial))
                      :shrink-bias shrink-bias})
     (loop [state initial
            cost cost
            k 1]
       ;; check every 500 reps that cost has changed more than 0.01%
       (if (and (= 0 (rem k 500))
                terminate-early?
                (> 0.00005 (let [lc @last-cost
                              del-cost (/ (- lc cost) cost)]
                            (reset! last-cost cost)
                            del-cost)))
          state

         ;; if it hasn't, loop the annealing function
         (if (and (< k max-iter)
                  (> cost min-cost))
           (let [t (temp-fn (/ k max-iter))
                 next-state (neighbor-fn state dims x-retard y-retard max-move)
                 next-cost (cost-fn constraints state next-state)]
             (if (> (p-fn cost next-cost t) (rand))
               (recur (:next-state next-state) next-cost (inc k))
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


(defn state->boundary [state]
  (first (filter (fn [item] (:boundary item)) state)))


(defn state->objects [state]
  (filter (fn [item] (not (:boundary item))) state))


(defn neighbor-fn
;; this function will change when boundaries can move it
  "Varies a random item from state and returns the new state
  after checking that the new state passes constraints."
  [state dims x-retard y-retard max-move]
  (let [r (let [shrink-bias (:shrink-bias @job-env)]
            (if shrink-bias
              (rand-int shrink-bias)
              nil))
        vary-bdry? (= 0 r)
        item (if vary-bdry? (:boundary state) (rand-nth (:objects state)))
        next (vary-rect item dims x-retard y-retard max-move)
        next-state (if vary-bdry?
                     (assoc state :boundary next)
                     (assoc state :objects (conj (remove #(= item %) (:objects state)) next)))]
    {:path [:next-state (if vary-bdry? :boundary :objects)]
     :name (:name next)
     :next-state next-state}))


(defn find-first
  [pred coll]
  (some #(when (pred %) %) coll))


(defn ->varied
  "returns the varied item when passed a neighbor-fn output map"
  [m path name]
  (let [item-or-items (get-in m path)]
    (if (sequential? item-or-items)
      (find-first (fn [n] (= name (:name n))) item-or-items)
      item-or-items)))


(defn- passes-constraints?
  "Checks that the new (proposed) state item satisfies constraints."
  [constraints state next-state]
  (let [path (:path next-state)
        nm (:name next-state)
        item (->varied next-state path nm)
        prev-item (->varied state (rest path) nm)
        sep (:collision constraints)
        bdry (get-in next-state [:next-state :boundary])
        bdry? (if (= :boundary (second path)) true false)
        objects (get-in next-state [:next-state :objects])
        other-objects (remove #(= (:name %) nm) objects)
        test (reduce
              (fn [a [k v]]
                (and a
                     (case k
                       :grow      (if v (if bdry?
                                          (not (bigger? prev-item item))
                                          (bigger? prev-item item))
                                      true)
                       :boundary  (if v (if bdry?
                                          (every? #(inside? bdry %) objects)
                                          (inside? bdry item))
                                      true)
                       :collision (if (and sep (not bdry?)) (not-any? #(overlaps? sep item %) other-objects) true)
                       :obstacles (if (and v sep) (not-any? #(overlaps? sep item %) v) true))))
              true
              constraints)]
    test))


(defn cost-fn
  "Calculates cost, which is total bounded area minus sum of current areas.
  For the initial call to calculate the system's cost, requires only constraints and state.
  Subsequent calls require the state, next-state and k, the key of the entry that has
  changed between them."
  ([constraints state]
   (let [boundary (:boundary state)]
     (if (empty? boundary)
       (throw (util/err "no boundary condition!"))
       (let [bounded-area (area boundary)]
         (- bounded-area (reduce (fn [a c] (+ a (area c))) 0 (:objects state)))))))

  ([constraints state next-state]
   (let [bounded-area (area (-> next-state :next-state :boundary))
         cost (- bounded-area (reduce (fn [a c] (+ a (area c))) 0 (-> next-state :next-state :objects)))
         valid-move? (passes-constraints? constraints state next-state)
         penalty (if valid-move? 0 PEN)
;         z (println (-> next-state :next-state :boundary :name) (:name next-state) " " valid-move? penalty)
         ]
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
