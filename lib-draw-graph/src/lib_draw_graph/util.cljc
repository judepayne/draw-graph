(ns ^{:doc "Common utilities."
      :author "Jude Payne"}
  lib-draw-graph.util
  (:require
        [loom.graph           :as loom.graph]))


(defn err
  "Creates an exception object with error-string."
  [error-string]
  #?(:clj (Exception. ^String error-string)
     :cljs (js/Error. error-string)))


(defn deep-merge
  "Like merge, but merges maps recursively."
  [& maps]
  (if (every? map? maps)
    (apply merge-with deep-merge maps)
    (last maps)))


(defn update-keys
  "Walks a nested map m recursively updating all keys with the supplied
   key-fn where the supplied predicate update? fn for the key is true.
   key-fn should have one parameter; the key.
   update? should accept two parameters; the key and the parent key."
  [m update? key-fn]
  (let [down (fn f [x p]
               (cond
                 (map-entry? x)   (let [[k v] x]
                                    (if (nil? v) nil   ;;prunes where v is nil
                                        (first {(f k p)
                                                (if (coll? v)
                                                  (f v k)
                                                  v)})))
                 
                 (seq? x)         (map #(f % p) x)

                 (coll? x)        (into (empty x) (map #(f % p) x))

                 :else            (if (update? x p) (key-fn x) x)))]
     (down m nil)))



(defn parse-int [s]
  (try
    (let [n #?(:clj (Integer/parseInt s)
               :cljs (cljs.reader/read-string s))]
      (if (integer? n) n (throw (err (str s " should be an integer.")))))
    #? (:clj (catch Exception e (throw (err (str s " should be an integer."))))
        :cljs (catch js/Error e (throw (err (str s " should be an integer.")))))))


(defn parse-float [s]
  (try
    (let [n #?(:clj (Float/parseFloat s)
               :cljs (cljs.reader/read-string s))]
      (if (float? n) n (throw (err (str s " should be a floating point number.")))))
    #? (:clj (catch Exception e (throw (err (str s " should be a floating point number."))))
        :cljs (catch js/Error e (throw (err (str s " should be a floating point number.")))))))


;; -----------------------------
;; Loom.graph section


(defn predecessors-not-self
  "Returns predecessors not including self"
  [g n]
  (let [predec (loom.graph/predecessors* g n)]
    (filter #(not (= n %)) predec)))


(defn successors-not-self
  "Returns successors not including self"
  [g n]
  (let [succs (loom.graph/successors* g n)]
    (filter #(not (= n %)) succs)))


(defn root?
  "Predicate for whether the node in the graph is a root."
  [g n]
  (empty? (predecessors-not-self g n)))


(defn roots
  "Returns the roots from the graph."
  [g]
  (filter #(root? g %) (loom.graph/nodes g)))



