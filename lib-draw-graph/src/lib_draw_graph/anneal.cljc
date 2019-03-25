(ns ^{:doc "Simulated annealing for cluster layout."
      :author "Jude Payne"}
  lib-draw-graph.anneal)

#?(:clj (import [java.lang Math]))


;; From Clojure data analysis cookbook
(defn annealing
  "The simulated annealing function."
  [initial          ;; the initial state of the system
   max-iter         ;; maximum numbers of iterations
   min-cost         ;; the target minimum cost of the system
   constraints      ;; constraints that a new state must satisfy
   neighbor-fn      ;; the 'next-step' function
   cost-fn          ;; the cost function
   p-fn             ;; the probability of a move function
   temp-fn]         ;; the temperature of the system
  (let [cost (cost-fn constraints initial)]
    (loop [state initial
           cost cost
           k 1]
      (if (= 1 (rem k 50000)) (println '>>> ' 'sa k \$ cost))
      (if (and (< k max-iter)
               (or (nil? min-cost)
                   (> cost min-cost)))
        (let [t (temp-fn (/ k max-iter))
              next-state (neighbor-fn constraints state)
              next-cost (cost-fn constraints next-state)]
          (if (> (p-fn cost next-cost t) (rand))
            (recur next-state next-cost (inc k))
            (recur state cost (inc k))))
        state))))


(def test-state
  [{:id 1023
    :x 10
    :y 10
    :w 50
    :h 50}
   {:id 1024
    :x 70
    :y 20
    :w 20
    :h 25}])


(def test-constraints
  [{:type :boundary
    :x 0
    :y 0
    :w 200
    :h 200}
   {:type :collision}
   {:type :growth-only}])


(def possible-dims [:x :y :w :h])                 ;; possible dimensions (to vary)
(defn rand-dim [] (rand-nth possible-dims))       ;; random dimension selected
(def max-move 10)                                 ;; move amount +/- dim can be changed by
(defn change-amount [old] (+ old (- (rand-int (* 2 max-move)) max-move)))
(defn vary [m] (update-in m [(rand-dim)] change-amount))   ;; update object in state randomly


(defn collision?
  "Returns true if m1 and m2 are in collision with each other."
  [m1 m2]
  (and (< (:x m1) (+ (:x m2) (:w m2)))
       (> (+ (:x m1) (:w m1)) (:x m2))
       (< (:y m1) (+ (:y m2) (:h m2)))
       (> (+ (:y m1) (:h m1)) (:y m2))))


(defn any-collisions?
  "Returns true if m is in collision with any of ms."
  [m ms]
  (reduce (fn [a c] (or a (collision? m c))) false ms))


(defn inside?
  "Retturns true if m1 is completely inside m2."
  [m1 m2]
  (and (> (:x m1) (:x m2))
       (> (:y m1) (:y m2))
       (< (+ (:x m1) (:w m1)) (+ (:x m2) (:w m2)))
       (< (+ (:y m1) (:h m1)) (+ (:y m2) (:h m2)))))


(defn has-grown?
  "Returns true if m1 has grown from m1"
  [m1 m2]
  (or (< (:x m1) (:x m2))
      (< (:y m1) (:y m2))
      (> (:w m1) (:w m2))
      (> (:h m1) (:h m2))))



;; Efficient way to do this: finger trees
(defn remove-at
  "Removes item at idx from vector."
  [v idx]
  (concat (subvec v 0 idx) (subvec v (inc idx))))

(defn update-at
  "Update item in vector at idx."
  [v idx item]
  (concat (subvec v 0 idx) [item] (subvec v (inc idx))))


(defn passes-constraints?
  "Checks that the new (proposed) state item satisfies constraints."
  [cur-item next-item constraints other-items]
  (reduce (fn [a c]
            (and a
                 (case (:type c)
                   :boundary  (inside? next-item c)
                   :collision (not (any-collisions? next-item other-items))
                   :growth-only (has-grown? next-item cur-item))))
          true
          constraints))


(defn vary-til-passes
  "Varies state member at idx until it passes constraints.

  !Note this function will run forever if state doesn't pass
  constraints and vary is incapable of moving it to pass."
  [state idx constraints]
  (let [item (get state idx)
        others    (remove-at state idx)]
    (loop [cur-item item]
      (let [next-item (vary cur-item)]
        (if (passes-constraints? cur-item next-item constraints others)
          next-item
          (recur cur-item))))))


;; Rewrite this - the random selection and updating - an array

(defn neighbor-fn
  "Varies a random item from state and returns the new state
  after checking that the new state passes constraints."
  [constraints state]
  (let [n   (count state)
        s   (into [] state)
        i   (rand-int n)
        ns  (vary-til-passes s i constraints)]
    (update-at s i ns)))


(defn cost-fn
  "Calculates cost, which is total bounded area minus sum of current areas."
  [constraints state]
  (let [boundary (filter (fn [n] (= :boundary (:type n))) constraints)]
    (if (empty? boundary)
      (throw (Exception. "no boundary condition!"))
      (let [b (first boundary)
            area (fn [m] (* (:w m) (:h m)))
            bounded-area (area b)]
        (- bounded-area (reduce (fn [a c] (+ a (area c))) 0 state))))))


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
