(ns ^{:doc "Parsers for input data."
      :author "Jude Payne"}
  lib-draw-graph.parser
  (:require [clojure.string          :as str]
            [lib-draw-graph.util     :as util]
            #?(:clj [clojure.data.json        :as json])
            #?(:clj [instaparse.core :as insta :refer [defparser]]
               :cljs [instaparse.core :as insta :refer-macros [defparser]])))


;; ----------------------
;; CSV format parsser


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
  "#'([/\\+\\?\\w\\d\\s\\n\\.\\(\\)!@&:\\[\\]\\(\\)<>\\'#=/-]|(\\\\,)|(\\\\n))*'")


(def regex-all "#'(.*)'")


(def unescapes
  {"\\," ","
   "\\:" ":"})


(def csv-grammar
  (str
   "S = <';'>  Cmt |
        <'h,'> H   |
        <'n,'> N   |
        <'e,'> E   |
        <'ce,'> Ce |
        <'cp,'> Cp |
        <'cs,'> Cs 
    <KVs-esc> = " regex-kvs-esc "
    <KVs> = " regex-kvs  "  
    E = Node <','> Node (<','> Edge-meta? (<'|'> Edge-style)?)?
    Edge-style = KVs
    Edge-meta = KVs-esc
    N = (Synonym <','>)? KVs-esc (<'|'> Node-style)?
    Synonym = #'node[_0-9a-zA-Z]*'
    Node = Synonym | KVs-esc (<'|'> Node-style)?
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
  (let [s' (str/trim s)
        args (if meta? (split-parts-meta s') (split-parts s'))
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


(defn synonym?
  [s]
  (if
      (and
       (string? s)
       (re-matches #"node[_0-9a-zA-Z]*" s))
    true
    false))


(defn parse-node [state s]
  (let [nd (insta/transform
            {:Node-style attribute-map
             :Synonym (fn [arg] arg)
             :N (fn [& args]
                  (cond
                    (and (= 2 (count args)) (synonym? (first args)))
                    (let [node (zipmap (:header state) (split-parts-meta (unesc (second args))))]
                      {:synonyms {(first args) node}})                    
                    (= 2 (count args))
                    {:nodes {:node (zipmap (:header state) (split-parts-meta (unesc (first args))))
                             :style (second args)}}
                    (= 3 (count args))
                    (let [node (zipmap (:header state) (split-parts-meta (unesc (second args))))]
                      {:synonyms {(first args) node}
                       :nodes {node (nth args 2)}})
                    ))}
            s)]
    (util/deep-merge state nd)))


(defn parse-edge [state s]
  (let [nk (keyword (gensym "node"))
        sk (keyword (gensym "style"))
        edge (insta/transform
              {:Node-style attribute-map
               :Node (fn [& args]
                       (if (synonym? (first args))
                         {nk (first args)
                          sk (if (some? (second args)) (second args))}
                         {nk (zipmap (:header state) (split-parts-meta (unesc (first args))))
                          sk (if (some? (second args)) (second args))}))
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
        with-styles (let [styles 
                          (reduce (fn [a c]
                                    (if (sk c)
                                      (assoc a (nk c) (sk c)) a))
                                  nil edge')]
                      (if styles (merge edge {:nodes styles}) edge))]
    (if (nil? (:edges state))
      (let [s1 (assoc-in state [:edges] (list (:edges with-styles)))]
        (if (:nodes with-styles)
          (merge-with merge s1 (dissoc with-styles :edges))
          s1))
      (let [s1 (merge-with conj state {:edges (:edges edge)})]
        (if (:nodes with-styles)
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
  (let [line-num (atom 0)
        m (reduce
           (fn [acc cur]
             (swap! line-num inc)
             (let [p (csv-line-parser cur)]
               (if (insta/failure? p)
                 (throw (util/err (str "Parsing error with line number " @line-num " >> " cur)))
                 (let [line (second p)]
                   (case (first line)
                     :H  (parse-header acc line)
                     :N  (parse-node acc line)
                     :E  (parse-edge acc line)
                     :Cs (parse-cluster-style acc line)
                     :Cp (parse-cluster-parent acc line)
                     :Ce (parse-cluster-edge acc line)
                     :Cmt (parse-comments acc line)
                     (throw (util/err (str "No parser for line " @line-num " >> " cur))))))))
           {}
           lines)]
    m))


(defn parse-csv
  "Parses a csv format string"
  [s]
  (parse-lines (str/split-lines s)))


;; ----------------------
;; JSON format parser

(defn- nodes->seq
  "Update the :nodes section as json doesn't allow maps as keys"
  [parsed]
  (let [new-nodes 
        (reduce
         (fn [m [k v]]
           (conj m {:node k :style v}))
         []
         (:nodes parsed))]
    (assoc parsed :nodes new-nodes)))


(defn- nodes-from-seq
  "Update the :nodes section as json doesn't allow maps as keys"
  [js]
  (let [new-nodes 
        (reduce
         (fn [m cur]
           (assoc m (get cur :node) (get cur :style)))
         {}
         (get js :nodes))]
    (assoc js :nodes new-nodes)))


(defn- stringify-keys
  "Converts the keys in the parse map to string, ready to be 
   transformed into json."
  [m]
  (util/update-keys m (fn [k p] true) name))


(defn- keywordize-keys
  "Converts json into a parse map"
  [js]
  (util/update-keys
   js
   (fn [k p]
     (cond
       (= p "cluster-styles")             false
       (= p "synonyms")                   false
       (= p "cluster-parents")            false
       (= p "cluster-edges")              false
       :else true))
   keyword))


(defn- json->clj
  "converts a json string into a clojure map"
  [s]
  #?(:clj (json/read-str s)
     :cljs (js->clj (.parse js/JSON s))))


(defn- clj->json
  "converts a clojure map to json"
  [m]
  #?(:clj (json/write-str m)
     :cljs (.stringify js/JSON (clj->js m))))


(defn parsed->json
  "takes a parse map and converts properly to a json string"
  [parsed]
  (-> parsed
      nodes->seq
      stringify-keys
      clj->json))


(defn json->parsed
  "takes in json and outputs a parse map as produced by parse-lines."
  [js]
  (-> js
      json->clj
      keywordize-keys
      nodes-from-seq))

;; ----------------------
;; Main api

(defn- replace-synonyms-edges
  "Replaces nodes synonyms in edges."
  [parsed]
  (let [synonyms (:synonyms parsed)
        syn->node (fn [syn]
                    (if-let [node (get synonyms syn)]
                      node
                      (throw (util/err (str "synonym " syn " in edge can't be found.") ))))]
    (update-in parsed [:edges]
               (fn [edges]
                 (map
                  #(let [edge %
                         edge'  (let [src (:src edge)]
                                  (if (synonym? src)
                                    (assoc edge :src (syn->node src))
                                    edge))
                         edge'' (let [dst (:dst edge')]
                                  (if (synonym? dst)
                                    (assoc edge' :dst (syn->node dst))
                                    edge'))]
                     edge'')
                  edges)))))


(defn- replace-synonyms-nodes
  [parsed]
  (let [synonyms (:synonyms parsed)
        syn->node (fn [syn]
                    (if-let [node (get synonyms syn)]
                      node
                      (throw (util/err (str "synonym " syn " in edge can't be found.") ))))]
    (update-in parsed [:nodes]
               (fn [nodes]
                 (reduce
                  (fn [m [k v]]
                    (if (synonym? k)
                      (merge-with merge
                                  (dissoc m k)
                                  {(syn->node k) v})
                      m))
                  nodes
                  nodes)))))


(defn parse-csv-or-json
  [s fmt]
  (let [parsed0
        (case fmt
          :json (json->parsed s)
          :csv  (parse-csv s)
          (throw (util/err "format should be either :json or :csv")))
        parsed1 (replace-synonyms-edges parsed0)                   
        parsed (dissoc (replace-synonyms-nodes parsed1) :synonyms)]
    (spit "../cmd-draw-graph/resources/example1.json" (parsed->json parsed0))
    parsed))


