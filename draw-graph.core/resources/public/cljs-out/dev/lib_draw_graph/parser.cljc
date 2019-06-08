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

;(def ^:dynamic *part-sep-meta* #"(?<!\\):(?!//)")  ;; lookbehind no-worky in js
(def ^:dynamic *part-sep-meta* #":(?!//)")  ;; exception for links

(def exp #"[^\\\\]:")

(defn split-parts [s] (str/split s *part-sep* -1)) ;; -1 to catch trailing empties
(defn split-parts-meta [s] (str/split s *part-sep-meta* -1))


(def regex-number "#'-?[0-9]\\d*(\\.\\d+)?'")


(def whitespace
  (insta/parser
    "whitespace = #'\\s+'"))


(def regex-text "#'[\\+\\w\\d\\s\\n\\.\\(\\)@&<>\\'#=/-]+'")

 ;; no support for escaping
(def regex-kvs "#'[\\+\\w\\d\\s\\n\\.\\(\\)@&:<>\\'#=/-]+'")

;; support for escaped , \n : and  |
;; escaped | doesn't work
(def regex-kvs-esc
  "#'([/\\+\\w\\d\\s\\n\\.\\(\\)@&:<>\\'#=/-]|(\\\\,)|(\\\\n))*'")


(def regex-all "#'(.*)'")


(def unescapes
  {"\\," ","
   "\\:" ":"})


(def csv-grammar
  (str
   "S = <';'>  Cmt |
        <'h,'> H   |
        <'e,'> E   |
        <'ce,'> Ce |
        <'cp,'> Cp |
        <'cs,'> Cs 
    <KVs-esc> = " regex-kvs-esc "
    <KVs> = " regex-kvs  "  
    E = Node <','> Node (<','> Edge-meta? <'|'>Edge-style)?
    Edge-style = KVs
    Edge-meta = KVs-esc
    Node = KVs-esc (<'|'> Node-style)?
    Node-style = KVs
    H = " regex-kvs "
    Ce = KVs
    Cp = KVs
    Cs = " regex-text "<'|'>" regex-kvs "
    Cmt = " regex-all))


(defparser csv-line-parser
  csv-grammar
  :auto-whitespace whitespace)


(defn parse-header [state s]
  {:header
   (insta/transform
    {:H (fn [args] (map keyword (split-parts args)))
     :S (fn [arg] arg)}
    s)})


(defn attribute-map [s & {:keys [meta?] :or {meta? false}}]
  (let [args (if meta? (split-parts-meta s) (split-parts s))
        n (count args)]
    (cond
      (= "" (first args)) nil
      (even? n) (reduce
                 (fn [acc [k v]]
                   ;; make comma separated list if key exists already
                   (let [k' (keyword k)]
                     (if-let [old (k' acc)]
                       (assoc acc k' (str old "," v))
                       (assoc acc k' v))))
                 {}
                 (partition 2 args))
      :else (throw (util/err (str "Error parsing: " s " > Must be an even number of parts"))))))


(defn pairs [s]
  (let [args (split-parts s)]
    (if (even? (count args))
      (partition 2 args)
      (throw (util/err (str "Error parsing: " s " > Must be an even number of parts"))))))


(defn conjcat [coll1 coll2]
  (if (empty? coll1) coll1
      (concat coll1 coll2)))


(defn extract [k coll]
  (reduce (fn [acc cur]
            (if (get cur k) (get cur k) acc))
          nil
          coll))


(defn map-vals [m f]
  (into {} (for [[k v] m] [k (f v)])))


(defn unescape [smap s]
  (reduce
   (fn [acc [k v]]
     (str/replace acc k v))
   s
   smap))

(def unesc (partial unescape unescapes))


(defn unescape-edge [e]
  (reduce
   (fn [acc cur]
     (if (nil? cur) nil
         (update-in acc [:edges cur] map-vals (partial unescape unescapes))))
   e
   [:src :dst :meta]))


(defn parse-edge [state s]
  (let [nk (keyword (gensym "node"))
        sk (keyword (gensym "style"))
        edge (insta/transform
              {:Node-style attribute-map
               :Node (fn [& args]
                       {nk (zipmap (:header state) (split-parts-meta (unesc (first args))))
                        sk (if (some? (second args)) (second args))})
               :Edge-meta (fn [& args]
                            {:edge-meta (attribute-map (first args) :meta? true)})
               :Edge-style (fn [& args]
                             {:edge-style (attribute-map (first args) :meta? true)})
               :E (fn [& args] args)}
              s)
        edge' edge
        edge {:edges
              {:src (nk (first edge'))
               :dst (nk (second edge'))
               :meta (extract :edge-meta (drop 2 edge'))
               :style (extract :edge-style (drop 2 edge'))}}
      ;  edge (unescape-edge edge)
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


(defn parse-comments [state s]
  (merge-with conjcat state {:commented-out s}))



(defn parse-lines [lines]
  (let [line-num (atom 0)]
    (reduce
     (fn [acc cur]
       (swap! line-num inc)
       (let [p (csv-line-parser cur)]
         (if (insta/failure? p)
           (throw (util/err (str "Parsing error with line number " @line-num " >> " cur)))
           (let [line (second p)]
             (case (first line)
               :H  (parse-header acc line)
               :E  (parse-edge acc line)
               :Cs (parse-cluster-style acc line)
               :Cp (parse-cluster-parent acc line)
               :Ce (parse-cluster-edge acc line)
               :Cmt (parse-comments acc line)
               (throw (util/err (str "No parser for line " @line-num " >> " cur))))))))
     {}
     lines)))
