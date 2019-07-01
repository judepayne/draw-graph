(ns ^{:doc "Common utilities."
      :author "Jude Payne"}
  lib-draw-graph.util
  (:require
        #?(:clj [clojure.data.json        :as json])))


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


(defn update-keys-below
  "Updates the keys immediately below the level specified in ks."
  ([m ks f & args]
     (let [alter (fn [m1 f args]
                   (reduce
                    (fn [m0 [k v]]
                      (assoc m0 (apply f k args) v))
                    {}
                    m1))
           up (fn up [m ks f args]
                (let [[k & ks] ks]
                  (if ks
                    (assoc m k (up (get m k) ks f args))
                    (assoc m k (alter (get m k) f args)))))]
       (up m ks f args))))
