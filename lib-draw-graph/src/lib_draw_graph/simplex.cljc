(ns ^{:doc "Simplex method for Linear Programming"
      :author "Jude Payne"}
    lib-draw-graph.simplex)

(defn new-branch
  [p-solution]
  ;; a new branch explores a
  ;; new branch, that is a new
  ;; value for the next variable
  (conj p-solution 0))


(defn next-solution-in-branch
  [p-solution]
  ;; next solution in branch is
  ;; the next value in the same level,
  ;; not adding any new levels
  (conj (pop p-solution)
        (inc (peek p-solution))))


(defn back-in-tree
  [p-solution]
  ;; back in tree gets to
  ;; the upper level node
  ;; which is done by
  ;; getting the node vector
  ;; minus its head
  (pop p-solution))


(defn is-conform-constraint?
  [constraint-direction solution a-constraint]
  ;; Tests if a single constraint is verified
  (let [{:keys [coefs limit]} a-constraint
        solution-val (reduce +
                             (map * coefs solution))]
    (constraint-direction solution-val limit)))


(defn is-realisable-solution?
  ;; Tests if the solution is realisable,
  ;; that is, every constraint is conform
  [solution constraints constraint-direction]
  (->> constraints 
       (map (partial is-conform-constraint?
                     constraint-direction
                     solution
                     ))
       (every? true?)))


(defn valid-constraint-coefs?
  ;; in our problem domain, our coefficients 
  ;; must be positive
  [a-constraint]
  (let [{:keys [coefs limit]} a-constraint]
    (and  (every? (partial < 0) coefs)
          (>  limit 0))))


(defn valid-objective?
  ;; and all the coefficients in the
  ;; objective function as well
  [objective]
  (every? (partial < 0) objective ))


(defn objective-val
  ;; Computes the objective value for a
  ;; particular solution
  [solution objective]
  (reduce +
          (map *
               solution
               objective)))


(defn complete-p-solution-w-zeroes
  [p-solution nvars]
  ;; given a partial solution, and
  ;; the total number of variables nvars
  ;; yields a vector with partial solution
  ;; and remaining vars at 0; this will be used
  ;; to test if the current branch is realisable.
;; If not, we go up in the tree, no point in
  ;; branching in this direction.
  (into p-solution (repeat (- nvars (count p-solution))
                           0)))


(defn branch-n-bound
  [constraints
   constraint-direction
   n-vars
   objective
   bounding-fn
   incumbent-default]
  {:pre [(valid-objective? objective)
         ;(every? valid-constraint-coefs? constraints)
         ]}
  ;; We verify that our problem description is
  ;; consistent
  (loop [solution (new-branch  [])
         incumbent []]
    (let [sol-size (count solution)
      sol-w-zeroes (complete-p-solution-w-zeroes solution n-vars)
          incumbent-val (if (empty? incumbent )
                          incumbent-default 
                          ;; We have not found an incumbent yet,
                          ;; set it at a default value
                          (objective-val incumbent objective))]
      ;; or compute its value
      (if  (< sol-size n-vars )
        ;; this is a partial solution
        (if  (not  (is-realisable-solution? sol-w-zeroes
                                            constraints
                                            constraint-direction))
          ;; This branch is not realisable, we move up in the tree,

          (let [s-parent (back-in-tree solution)]
            (if (not (empty? s-parent))
              ;; if it is not empty, we branch from the upper node
              (recur (next-solution-in-branch s-parent) incumbent)
                        ;; if it is empty, we're done,
                        ;; we return the current incumbent
              incumbent))
          ;; This solution is realisable, we can explore further.
          ;; Let's see if the bound function does better
          ;; than our incumbent,
          (let [solution-bound-val (bounding-fn constraints
                                                n-vars
                                                solution
                                                objective)]
            (if (or (and (not (empty? incumbent))
                         ((complement constraint-direction) solution-bound-val 
                          incumbent-val)) 
                    (empty? incumbent))
              (recur (new-branch solution) incumbent) 
                ;; we are better than the incumbent,
                ;; we continue exploring in this branch
              (recur (next-solution-in-branch solution) incumbent))))
        ;; we are not better than the incumbent,
        ;; we try another node in the same level 
         
    ;; Here we reached a complete solution. If it is realizable,
    ;; and if it is better than incumbent,
    ;; we take it as the new incumbent,
    ;; and recur with the next solution in this branch
        (if (is-realisable-solution? solution constraints constraint-direction)
          (if (or   ((complement constraint-direction)
                     (objective-val solution objective) 
                        incumbent-val) 
                   (empty? incumbent))
            (recur (next-solution-in-branch solution)
                   solution)
          ;; We have a new incumbent
            (recur (next-solution-in-branch solution)
                   incumbent))
          ;; this solution isn't better than the new incumbent,
          ;; we try the next node under the same branch

          ;; It is not realisable, so we try the next
          ;; node starting from the parent node
          (let [s-parent (back-in-tree solution)]
            (recur (next-solution-in-branch s-parent)
                   incumbent)))))))


(defn baker-rem-vars
  [a-constraint
   n-vars
   p-solution]
  ;; this function computes the
  ;; values for non explored vars
  ;; in a partial solution, and determines
  ;; their optimistic possible values
  ;; for a given constraint
  (let [{:keys [coefs limit]} a-constraint
        n-fixed-vars (count p-solution)
        consumed-by-fixed-vars (reduce +
                                       (map *
                                            p-solution
                                            coefs))
        remaining (- limit consumed-by-fixed-vars)
        free-vars (subvec coefs n-fixed-vars)
        free-vars-optimistic-assign (mapv (comp int (partial / remaining ))
                                          free-vars )]
    (into p-solution free-vars-optimistic-assign)))


(defn baker-bounding-fn
  [constraints
   n-vars
   p-solution
   objective]
  ;; Given a set of constraints,
  ;; an objective and a partial solution
  ;; This function computes the bounding function value
  ;; for our bakery problem : the max of the possible values
  ;; that every variable can take from the remaining
  ;; resource at every constraint's level
  (let [completions (mapv  #(baker-rem-vars %
                                           n-vars p-solution)
                           constraints)
        var-values-in-cols (map (fn  [col] (for [line completions]
                                             (get line col)))
                                (range n-vars))
        optimistic-solution (mapv (partial apply max)
                                  var-values-in-cols)]
    (objective-val optimistic-solution objective)))


(def baker-constraints [{:coefs [2 1 3] :constraint <= :limit 40} 
                        {:coefs [4 1 3] :constraint <= :limit 50}])


(def baker-objective [1 2 3])


(def simple-constraints [{:coefs [1 -1] :constraint <= :limit 5}
                         {:coefs [0 1] :constraint <= :limit 120}
                         {:coefs [-1 0] :constraint <= :limit 100}])


(def simple-objective [1 -1])
