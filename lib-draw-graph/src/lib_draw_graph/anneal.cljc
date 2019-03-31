(ns ^{:doc "Simulated annealing for cluster layout."
      :author "Jude Payne"}
  lib-draw-graph.anneal
  (:require [clojure.math.combinatorics :as combo]
            #?(:cljs [cljs.core.async :refer [<! timeout]]))
  #?(:cljs (:require-macros [cljs.core.async.macros :refer [go]])))


#?(:clj (import [java.lang Math]))


(defn ex
  "Creates an exception object with error-string."
  [error-string]
  #?(:clj (java.lang.Exception. error-string)
     :cljs (js/Error. error-string)))


(defn wait [ms f & args]
  #?(:clj (do (Thread/sleep ms) (apply f args))
     :cljs (js/setTimeout (fn [] (apply f args)) ms)))



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
    ]
   (let [cost (cost-fn constraints initial)]
     (loop [state initial
            cost cost
            k 1]
       (if (and (< k max-iter)
                (or (nil? min-cost)
                    (> cost min-cost)))
         (let [t (temp-fn (/ k max-iter))
               next-state (neighbor-fn state)
               next-cost (cost-fn constraints state (second next-state) (first next-state))]
           (if (> (p-fn cost next-cost t) (rand))
             (recur (second next-state) next-cost (inc k))
             (recur state cost (inc k))))
         state)))))


;; Note: svg coordinates are x across and y DOWN.

(def test-state
  {1023 {:x 10
         :y -190
         :w 50
         :h 50}
   1024 {:x 70
         :y -180
         :w 20
         :h 25}
   1025 {:x 20
         :y -100
         :w 40
         :h 40}})


(def test-constraints
  {:boundary {:x 0
              :y -200
              :w 200
              :h 200}
   :collision true
   :grow true})



(def possible-dims [:x :y :w :h])                 ;; possible dimensions (to vary)
(defn rand-dim [] (rand-nth possible-dims))       ;; random dimension selected
(def max-move 10)                                 ;; move amount +/- dim can be changed by
(def PEN 10000)                                  ;; Penalty cost amount
(def SEP 5)                                       ;; the Separation in points
(defn change [] (- (rand-int (* 2 max-move)) max-move)) ;; generate a change
(defn apply-change [old delta] (+ old delta))        ;; apply a change to old value


(defn vary-rect
  "When a rectangle/ polygon is defined with a point, width and height
  (as opposed to two points), when varying the x or y of the point, it
  is necessary to adjust the width or height as well to be consistent
  with a rectangle/ polygon specified as two x,y points."
  [rect]
  (let [dim (rand-dim)
        delta (change)
        -delta (* -1 delta)]
    (case dim
      :x (-> rect
             (update-in [:x] apply-change delta)
             (update-in [:w] apply-change -delta))
      :y (-> rect
             (update-in [:y] apply-change delta)
             (update-in [:h] apply-change -delta))
      (update-in rect [dim] apply-change delta))))


(defn collision?
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
  (and (> (:x m) (+ (:x m1) sep))
       (> (:y m) (+ (:y m1) sep))
       (< (+ (:x m) (:w m)) (+ (:x m1) (:w m1) (* -1 sep)))
       (< (+ (:y m) (:h m)) (+ (:y m1) (:h m1) (* -1 sep)))))


(defn has-grown?
  "Returns true if m2 has grown from m1"
  [m1 m2]
  (or (< (:x m2) (:x m1))
      (< (:y m2) (:y m1))
      (> (:w m2) (:w m1))
      (> (:h m2) (:h m1))))


(def area (fn [m] (* (:w m) (:h m))))


(defn passes-constraints?
  "Checks that the new (proposed) state item satisfies constraints."
  [constraints state next-state varied-key]
  (reduce (fn [a [k v]]
            (and a
                 (case k
                   :boundary  (every? (partial inside? SEP v) (vals next-state))
                   :collision (if v (not-any?
                                     #((partial collision? SEP (get next-state varied-key)) %)
                                              (vals (dissoc next-state varied-key))) 
                                  false)
                   :grow      (if v (has-grown? (get state varied-key)
                                                (get next-state varied-key))))))
          true
          constraints))

(defn rand-key [m] (rand-nth (keys m)))


(defn neighbor-fn
  "Varies a random item from state and returns the new state
  after checking that the new state passes constraints."
  [state]
  (let [k (rand-key state)
        next (vary-rect (get state k))]
    [k (assoc state k next)]))


(defn cost-fn
  "Calculates cost, which is total bounded area minus sum of current areas.
  For the initial call to calculate the system's cost, requires only constraints and state.
  Subsequent calls require the state, next-state and k, the key of the entry that has
  changed between them."

  ([constraints state]
   (let [boundary (:boundary constraints)]
     (if (empty? boundary)
       (throw (ex "no boundary condition!"))
       (let [bounded-area (area boundary)]
         (- bounded-area (reduce (fn [a c] (+ a (area c))) 0 (vals state)))))))

  ([constraints state next-state k]
   (let [bounded-area (area (:boundary constraints))
         cost (- bounded-area (reduce (fn [a c] (+ a (area c))) 0 (vals next-state)))
         penalty (if (passes-constraints? constraints state next-state k) 0 PEN)]
     (+ cost penalty))))


(defn temp
  "the temperature. r should be between 0 and 1"
  [r]
  (- 1.0 (float r)))


(defn move-prob
  "the probability of a move function, using Boltzmann"
  [c0 c1 t]
  (let [diff (- c1 c0)]
    (if (< c1 c0)
      1
      (Math/exp (* -1 (/ diff t))))))


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
            (not-any? #((partial collision? sep (first (vals c)))  %) (vals a))
            (inside? sep boundary (first (vals c))))
         (merge a c)
         a)))
   {}
   (take (+ n 30) (rand-rects* boundary sep))))


(def boundary [3 3 580 360])

(defn gen-rects []
  (rand-rects (+ 3 (rand-int 7))
                            (zipmap [:x :y :w :h] boundary)
                            5))

(def constraints
  {:boundary (zipmap [:x :y :w :h] boundary)
   :collision true
   :grow true})


