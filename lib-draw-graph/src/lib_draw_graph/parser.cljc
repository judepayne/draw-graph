(ns ^{:doc "Parsers for input data."
      :author "Jude Payne"}
  lib-draw-graph.parser
  (:require [clojure.string          :as str]
            [lib-draw-graph.util     :as util]
            #?(:clj [instaparse.core :as insta :refer [defparser]]
               :cljs [instaparse.core :as insta :refer-macros [defparser]])))

(defn- third
  "Returns third element of coll, or nil."
  [coll]
  (try (nth coll 2)
       #?(:clj (catch Exception e nil)
          :cljs (catch js/Error e nil))))


(def ^:dynamic *part-sep* #":")   ;; separator for keys/ values in CSV
(def ^:dynamic *part-sep-data* #":(?!//)")  ;; exception for links

(defn split-parts [s] (str/split s *part-sep* -1)) ;; -1 to catch trailing empties
(defn split-parts-data [s] (str/split s *part-sep-data* -1))

(def regex-number "#'-?[0-9]\\d*(\\.\\d+)?'")


(def whitespace
  (insta/parser
    "whitespace = #'\\s+'"))


(def regex-text "#'[\\+\\w\\d\\s\\n\\.\\(\\)@&<>\\'#=/-]+'")

(def regex-kvs  "#'[/\\+\\w\\d\\s\\n\\.\\(\\)@&:<>\\'#=/-]+'")


(def csv-grammar
  (str
   "S = <'h:'> H   |
        <'e:'> E   |
        <'ce:'> Ce |
        <'cp:'> Cp |
        <'cs:'> Cs 
    <KVs> = " regex-kvs "  
    E = Node <','> Node (<',|'> Edge-style)?
    Edge-style = KVs
    Node = KVs (<'|'> Node-style)?
    Node-style = KVs
    H = " regex-kvs "
    Ce = KVs
    Cp = KVs
    Cs = " regex-text "<'|'>" regex-kvs))


(defparser csv-line-parser
  csv-grammar
  :auto-whitespace whitespace)


(defn parse-header [state s]
  {:header
   (insta/transform
    {:H (fn [args] (map keyword (split-parts args)))
     :S (fn [arg] arg)}
    s)})


(defn attribute-map [s]
  (let [args (split-parts s)]
    (if (even? (count args))
      (reduce
       (fn [acc [k v]]
         ;; make comma separated list if key exists already
         (let [k' (keyword k)]
           (if-let [old (k' acc)]
             (assoc acc k' (str old "," v))
             (assoc acc k' v))))
       {}
       (partition 2 args))
      (throw (util/err (str "Error parsing: " s " > Must be an even number of parts"))))))


(defn pairs [s]
  (let [args (split-parts s)]
    (if (even? (count args))
      (partition 2 args)
      (throw (util/err (str "Error parsing: " s " > Must be an even number of parts"))))))


(defn form-pairs [s]
  (let [args (split-parts s)]
    (partition 2 1 args)))


(defn conjcat [coll1 coll2]
  (if (empty? coll1) coll1
      (concat coll1 coll2)))


(defn parse-edge [state s]
  (let [nk (keyword (gensym "node"))
        sk (keyword (gensym "style"))
        edge (insta/transform
              {:Node-style attribute-map
               :Node (fn [& args]
                       {nk (zipmap (:header state) (split-parts-data (first args)))
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
      (let [s1 (assoc-in state [:edges] (list (:edges with-styles)))]
        (if (:node-styles with-styles)
          (merge-with merge s1 (dissoc with-styles :edges))
          s1))
      (let [s1 (merge-with conj state {:edges (:edges edge)})]
        (if (:node-styles with-styles)
          (util/deep-merge s1 (dissoc with-styles :edges))
          s1)))))


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
         (throw (util/err (str "Parsing error with line: " cur)))
         (let [line (second p)]
           (case (first line)
             :H  (parse-header acc line)
             :E  (parse-edge acc line)
             :Cs (parse-cluster-style acc line)
             :Cp (parse-cluster-parent acc line)
             :Ce (parse-cluster-edge acc line)
             (throw (util/err (str "No parser for this line: " cur))))))))
   {}
   lines))
