(ns ^{:doc "Parsers for input data."
      :author "Jude Payne"}
  lib-draw-graph.parser
  (:require [clojure.string    :as str]
            #?(:clj [instaparse.core :as insta :refer [defparser]]
               :cljs [instaparse.core :as insta :ref-macros [defparser]])))


(defn- third
  "Returns third element of coll, or nil."
  [coll]
  (try (nth coll 2)
       #?(:clj (catch Exception e nil)
          :cljs (catch js/Object e nil))))


(def ^:dynamic *part-sep* #":")   ;; separator for keys/ values in CSV


(defn split-parts [s] (str/split s *part-sep* -1)) ;; -1 to catch trailing empties


(def regex-number "#'-?[0-9]\\d*(\\.\\d+)?'")


(def whitespace
  (insta/parser
    "whitespace = #'\\s+'"))


(def regex-text "#'[\\w\\d\\s\\.]+'")
(def regex-kv "#'[a-zA-Z0-9\\s]+:[a-zA-Z0-9\\s]+'")
(def regex-kvs "#'[\\w\\d\\s\\.:]+'")

(def csv-grammar
  (str
   "S = <'h:'> H   |
        <'e:'> E   |
        <'ce:'> Ce |
        <'cp:'> Cp |
        <'cs:'> Cs 
    <KV> = " regex-text "<':'>" regex-text "
    <KVs> = KV (<':'> KV)+?"

   "E = Node <','> Node (<',#'> Edge-style)?
    Edge-style = KVs
    Node = KVs ('#' KVs)?
    H = " regex-text " (<':'>" regex-text  ")*?
    Ce = KVs
    Cp = KVs
    Cs = " regex-text  "<'#'> KVs"))

(def csv-grammar2
  (str
   "S = <'h:'> H   |
        <'e:'> E   |
        <'ce:'> Ce |
        <'cp:'> Cp |
        <'cs:'> Cs 
    <KVs> = " regex-kvs "  
    E = Node <','> Node (<',#'> Edge-style)?
    Edge-style = KVs
    Node = KVs (<'#'> Node-style)?
    Node-style = KVs
    H = " regex-kvs "
    Ce = KVs
    Cp = KVs
    Cs = " regex-text "<'#'>" regex-kvs))


(defparser csv-line-parser
  csv-grammar2
  :auto-whitespace whitespace)


(defn parse-header [state s]
  {:header
   (insta/transform
    {:H (fn [& args] (map keyword args))
     :S (fn [arg] arg)}
    s)})

(defn parse-header [state s]
  {:header
   (insta/transform
    {:H (fn [args] (map keyword (split-parts args)))
     :S (fn [arg] arg)}
    s)})


(defn attribute-map [& args]
  (reduce
   (fn [acc [k v]] (assoc acc (keyword k) v))
   {}
   (partition 2 args)))

(defn attribute-map [s]
  (let [args (split-parts s)]
    (if (even? (count args))
      (reduce
       (fn [acc [k v]] (assoc acc (keyword k) v))
       {}
       (partition 2 args))
      (throw (Exception. (str "Error parsing: " s " > Must be an even number of parts"))))))


(defn pairs [& args]
  (partition 2 args))

(defn pairs [s]
  (let [args (split-parts s)]
    (if (even? (count args))
      (partition 2 args)
      (throw (Exception. (str "Error parsing: " s " > Must be an even number of parts"))))))


(defn conjcat [coll1 coll2]
  (if (empty? coll1) coll1
      (concat coll1 coll2)))


(defn parse-edge [state s]
  (let [edge (insta/transform
              {:Node (fn [& args] (zipmap (:header state) args))
               :Edge-style attribute-map
               :E (fn [& args] args)}
              s)]
    (if (nil? (:edges state))
      (assoc-in state [:edges] (list edge))
      (merge-with conj state {:edges edge}))))

(defn parse-edge [state s]
  (let [edge (insta/transform
              {:Node-style attribute-map
               :Node (fn [& args]
                       {:node (zipmap (:header state) (split-parts (first args)))
                        :style (if (some? (second args)) (second args))})
               :Edge-style attribute-map
               :E (fn [& args] args)}
              s)
        state'
        (if (nil? (:edges state))
          (assoc-in state [:edges] (list edge))
          (merge-with conj state {:edges edge}))]
    ))

(defn parse-edge [state s]
  (let [nk (keyword (gensym "node"))
        sk (keyword (gensym "style"))
        edge (insta/transform
              {:Node-style attribute-map
               :Node (fn [& args]
                       {nk (zipmap (:header state) (split-parts (first args)))
                        sk (if (some? (second args)) (second args))})
               :Edge-style attribute-map
               :E (fn [& args] args)}
              s)
        edge' edge
        edge {:edges (map (fn [n] (if (nk n) (nk n) n)) edge')}
        with-styles (let [styles 
                          (reduce (fn [a c]
                                    (if (sk c)
                                      (assoc a (nk c) (sk c)) a))
                                  nil edge')]
                      (if styles (merge edge {:node-styles styles}) edge))]
    (if (nil? (:edges state))
      (let [s (assoc-in state [:edges] (list (:edges with-styles)))]
        (if (:node-styles with-styles)
          (merge-with merge s (dissoc with-styles :edges))
          s))
      (let [s (merge-with conj state {:edges (:edges edge)})]
        (if (:node-styles with-styles)
          (merge-with merge s (dissoc with-styles :edges))
          s)))))


(defn parse-cluster-style [state s]
  (let [cluster (insta/transform
                 {:Cs (fn [& args]
                        {(first args)
                         (apply attribute-map (rest args))})}
                 s)]
    (merge-with merge state {:cluster-styles cluster})))

(defn parse-cluster-style [state s]
  (let [cluster (insta/transform
                 {:Cs (fn [& args]
                        {(first args)
                         (attribute-map (second args))})}
                 s)]
    (merge-with merge state {:cluster-styles cluster})))


(defn parse-cluster-parent [state s]
  (let [relns (insta/transform
               {:Cp pairs}
               s)]
    (merge-with conjcat state {:cluster-parents relns})))

(defn parse-cluster-parent [state s]
  (let [relns (insta/transform
               {:Cp pairs}
               s)]
    (merge-with conjcat state {:cluster-parents relns})))


(defn parse-cluster-edge [state s]
  (let [relns (insta/transform
               {:Ce pairs}
               s)]
    (merge-with conjcat state {:cluster-edges relns})))


(defn parse-lines [lines]
  (reduce
   (fn [acc cur]
     (let [p (csv-line-parser cur)]
       (if (insta/failure? p)
         (throw (Exception. (str "Parsing error with line: " cur)))
         (let [line (second p)]
           (case (first line)
             :H  (parse-header acc line)
             :E  (parse-edge acc line)
             :Cs (parse-cluster-style acc line)
             :Cp (parse-cluster-parent acc line)
             :Ce (parse-cluster-edge acc line)
             (throw (Exception. (str "No parser for this line: " cur))))))))
   {}
   lines))
