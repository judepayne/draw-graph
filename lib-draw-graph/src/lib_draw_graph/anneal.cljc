(ns ^{:doc "Simulated annealing for cluster layout."
      :author "Jude Payne"}
  lib-draw-graph.anneal
  (:require [lib-draw-graph.geometry :refer [overlaps? inside? bigger? area]]))


#?(:clj (import [java.lang Math]))


(defn ex
  "Creates an exception object with error-string."
  [error-string]
  #?(:clj (Exception. ^String error-string)
     :cljs (js/Error. error-string)))


(def debug (atom {}))


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
    & {:keys [dims terminate-early?]
       :or {dims [:x :y :w :h] terminate-early? false}}]
   (reset! debug {:count 0 :success 0 :failure 0})
   ;(println "new job:")
   ;(println "state>>> " initial)
   ;(println "constraints>>> " constraints)
   (let [cost (cost-fn constraints initial)
         last-cost (atom cost)]
     (loop [state initial
            cost cost
            k 1]
       ;; check every 500 reps that cost has changed more than 0.001%
       (if (and (= 0 (rem k 500))
                terminate-early?
                (> 0.00001 (let [lc @last-cost
                              del-cost (/ (- lc cost) cost)]
                            (reset! last-cost cost)
                            del-cost)))

          (do 
            ;(println "initial>>>" initial)
            ;(println "final>>> " state)
            ;(println "diff>>> " (take 2 (diff initial state)))
                                        ;(println @debug)
            ;(println "") 
            state)

         ;; if it hasn't, loop the annealing function
         (if (and (< k max-iter)
                  (> cost min-cost))
           (let [t (temp-fn (/ k max-iter))
                 next-state (neighbor-fn state dims)
                 next-cost (cost-fn constraints state
                                    (second next-state) (first next-state))]
             (if (> (p-fn cost next-cost t) (rand))
               (recur (second next-state) next-cost (inc k))
               (recur state cost (inc k))))
           state))))))


;; Annealing constants

(def ^:const max-move 10)         ;; move amount +/- dim can be changed by
(def ^:const PEN 10000)           ;; Penalty cost amount


(defn- vary-rect
  "When a rectangle/ polygon is defined with a point, width and height
  (as opposed to two points), when varying the x or y of the point, it
  is necessary to adjust the width or height as well to be consistent
  with a rectangle/ polygon specified as two x,y points."
  [rect dims]
  (let [dim (rand-nth dims)
        delta (- (rand-int (* 2 max-move)) max-move)]
    (case dim
      :x (-> rect
             (assoc :x (+ (:x rect) delta)) 
             (assoc :w (- (:w rect) delta)))
      :y (-> rect
             (assoc :y (+ (:y rect) delta))
             (assoc :h (- (:h rect) delta)))
      :w (-> rect
             (assoc :w (+ (:w rect) delta)))
      (-> rect (assoc :h (+ (:h rect) delta))))))


(defn neighbor-fn
  "Varies a random item from state and returns the new state
  after checking that the new state passes constraints."
  [state dims]
  (let [k (rand-nth (keys state))
        next (vary-rect (get state k) dims)]
    [k (assoc state k next)]))


(defn- passes-constraints?
  "Checks that the new (proposed) state item satisfies constraints."
  [constraints state next-state varied]
  (let [prev-item (get state varied)
        item (get next-state varied)
        others (vals (dissoc next-state varied))
        sep (:collision constraints)]

(comment (do (swap! debug update-in [:count] inc)
                 (if 
                     (and
                      (bigger? prev-item item)
                      (inside? (:boundary constraints) item) ;;boundary spec'd exactly - without a SEP
                      (not-any? #(overlaps? (:collision constraints) item %) others))
                   (swap! debug update-in [:success] inc)
                   (swap! debug update-in [:failure] inc))))
    
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
       (throw (ex "no boundary condition!"))
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


;; test data
;; 20000 runs 180ms => down to 136. 25% saving

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
   :collision 8   ;; this number is the separation to be taken into account in deciding whether objects are in collision.
   :obstacles nil ;{1 {:x 180 :y -50 :w 10 :h 10}}
   :grow true})

(def test-state2
  {"carnivores"
   {:radius 12, :name "carnivores", :x 182, :y -812, :w 469, :h 662},
   "rodents"
   {:name "rodents", :x 493, :y -142, :w 118, :h 126}})


(def test-constraints2
  {:boundary {:x 174, :y -842, :w 485, :h 834}
   :collision 8
   :obstacles []
   :grow true})


(def test-state3
  {"squirrels"
   {:radius 12, :name "squirrels", :x 298, :y -112, :w 102, :h 88}})


(def test-constraints3
  {:boundary {:name "rodents", :x 190, :y -112, :w 453, :h 88},
   :grow true,
   :collision 8})
