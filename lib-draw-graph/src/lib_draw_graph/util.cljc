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
