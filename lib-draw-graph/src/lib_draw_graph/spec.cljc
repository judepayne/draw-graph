(ns lib-draw-graph.spec
  (:require [clojure.string :as s]))

;; -------------------------
;; Check input format

(defn count-keys
  [header]
  (count (s/split header #":")))

(defn edge-parts
  [line]
  (s/split line #","))

(defn count-parts [data]
  (count (s/split data #":" -1))) ; -1 catches trailing empties

(defn node?
  [nd num-parts]
  (let [splits (s/split nd #"#")
        splits-c (count splits)]
    (cond
      (= 1 splits-c) (= num-parts (count-parts (first splits)))
      (= 2 splits-c) (and
                      (= num-parts (count-parts (first splits)))
                      (even? (count-parts (second splits))))
      :else false))) 

(defn opts?
  [opts]
  (even? (count-parts opts)))

(defn edge?
  [nds c]
  (let [nds-c (count nds)]
    (let [[n1 n2 n3] nds]
      (if (nil? n3)
        (and (node? n1 c) (node? n2 c))
        (and (node? n1 c) (node? n2 c) (opts? n3))))))

(defn cluster?
  [cluster]
  (let [splits (s/split cluster #"#")]
    (if (and (= 2 (count splits))
             (even? (count-parts (second splits))))
      true false)))

(defn check-csv1
  "Does string s conform to the csv1 spec?"
  [s]
  (let [lines (s/split-lines s)
        c (count-keys (first lines))]
    (reduce
     (fn [acc cur]
       (if (let [nds (s/split cur #"," 3)
                 nds-c (count nds)]
             (cond
               (= 1 nds-c) (cluster? cur)
               :else  (edge? nds c)))
           :ok (reduced cur)))
     :ok
     (rest lines))))

