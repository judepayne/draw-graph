(ns ^{:doc "Process csv format to dot."
      :author "Jude Payne"}
  lib-draw-graph.processor
  (:require [lib-draw-graph.graph           :as g]
            [loom.graph                     :as loom.graph]
            [loom.attr                      :as loom.attr]
            [clojure.string                 :as str]
            [lib-draw-graph.spec            :as spec]
            [lib-draw-graph.clustered       :as clstr]
            [lib-draw-graph.preprocessor    :as preprocessor]))

;; Keys used in all JSON messages

(def ^:dynamic *data* :data)  ;; json key where graph data is kept
(def ^:dynamic *options* :display-options)   ;; where options are kept

(def ^:dynamic *part-sep* #":")   ;; separator for keys/ values in CSV1
(def ^:dynamic *list-sep* #",")   ;; separator to split a list (e.g. edge) into pieces
(def ^:dynamic *definition-marker* #"#") ;; marker for node/ cluster info


(defn split-parts [s] (str/split s *part-sep* -1)) ;; -1 to catch trailing empties
(defn split-list [e] (str/split e *list-sep* 3))
(defn split-def [s] (str/split s *definition-marker* -1))


(defn- third
  "Returns third element of coll, or nil."
  [coll]
  (try (nth coll 2)
       #?(:clj (catch Exception e nil)
          :cljs (catch js/Object e nil))))


;; For loom graph attrs
(defn- attr-map [s]
  (reduce
   (fn [a c]
     (let [k (keyword (first c))
           v (second c)]
       (update-in a [k] (fn [old] (if (nil? old) v (str old "," v))))))
   {}
   (partition 2 (split-parts s))))


(defn- add-attr-map
  [g node-or-edge m]
  (reduce
   (fn [acc cur] (apply loom.attr/add-attr acc node-or-edge cur))
   g (vec m)))


(defn lines [s] (str/split-lines s))


(defn headers [lines] (map keyword (split-parts (first lines))))


(defn make-edge [headers edge]
  (let [strip (fn [nd] (first (split-def nd)))
        es (mapv (comp #(zipmap headers %) split-parts strip) (take 2 edge))]
    (if (third edge) (conj es (attr-map (third edge))) es)))


(defn edges [headers lines]
  (->> lines
       (map #(split-list %))
       (filter #(> (count %) 1))
       (map #(make-edge headers %))))


(defn rich-edges [edges]
  (filter #(= 3 (count %)) edges))


(defn make-cluster [cluster]
  (let [parts (split-def cluster)]
    {(first parts) (attr-map (second parts))}))


(defn clusters [lines]
  (->> lines
       (map #(take 2 (split-list %)))
       (filter #(= 1 (count %)))
       (mapcat identity)
       (map #(make-cluster %))
       (reduce merge)))


(defn make-node [headers [nd attrs]]
  {(zipmap headers (split-parts nd)) (attr-map attrs)})


(defn nodes [headers lines]
  (->> lines
       (mapcat #(take 2 (split-list %)))
       (map split-def)
       (filter #(= 2 (count %)))
       (map #(make-node headers %))
       (reduce merge)))


(defn loom-graph [s]
  (let [lines    (lines s)
        headers  (headers lines)
        edges    (edges headers (rest lines))
        clusters (clusters (rest lines))
        graph    (apply loom.graph/digraph (map #(take 2 %) edges))
        ;; add edge attrs
        graph*   (reduce (fn [acc cur]
                         (add-attr-map acc [(first cur) (second cur)] (third cur)))
                       graph (rich-edges edges))
        ;; add clusters
        graph**  (reduce (fn [acc cur]
                          (clstr/add-attr-to-cluster acc (first cur) :style (second cur)))
                         graph* clusters)]
    ;; add node attrs
    (reduce (fn [acc [nd attrs]]
                         (add-attr-map acc nd attrs))
                          graph** (nodes headers lines))))


;; ------------
;; pre-processing functions


(defn cluster-graph->loom
  "Construct loom graph from cluster-graph string specification"
  [cg]
  (let [data (->> cg
                  split-list
                  (map split-parts)
                  (map #(interleave (repeat (first %)) (rest %)))
                  flatten
                  (partition 2))]
    (apply loom.graph/digraph data)))


(defn cluster-graph->loom [cg]
  (let [cg* (split-list cg)]))


(defn ->submap [s]
  (->> (split-parts s)
       (partition 2)
       (map (fn [i] [(keyword (first i)) (second i)]))
       (into {})))


(defn maybe-filter [g opts]
  (if  (some? (:filter-graph opts))
    (preprocessor/filter-graph g (->submap (:filter-graph opts)))
    g))


(defn maybe-fix-ranks [g opts]
  (if (and (some? (:cluster-on opts))
           (= (:layout opts) "dot")
           (:fix-ranks? opts))
    (preprocessor/fix-ranks g (keyword (:cluster-on opts)))
    g))


(defn maybe-add-stacks [g opts]
  (if (and (some? (:stacks opts)) (some? (:cluster-on opts)))
    (let [stacks (split-list (:stacks opts))]
      (reduce (fn [acc cur]
                (preprocessor/add-stack acc
                                        (keyword (:cluster-on opts))
                                        (split-parts cur)))
              g
              stacks))
    g))


(defn maybe-add-hierarchies [g opts]
  (if (and (some? (:cluster-parent opts))
           (some? (:cluster-on opts))
           (= (:layout opts) "dot"))
    (reduce (fn [acc cur]
              (clstr/add-cluster-parent acc (first cur) (second cur)))
            g
            (partition 2 (str/split (:cluster-parent opts) #",")))
    g))


(defn maybe-elide [g opts]
  (if (some? (:elide opts))
    (preprocessor/remove-levels g
                                #?(:clj (Integer/parseInt (:elide opts))
                                   :cljs (js/parseInt (:elide opts))))
    g))


;; -----------
;; public interface functions


(defn preprocess-graph [graph opts]
  (-> graph
      (maybe-filter opts)
      (maybe-elide opts)
      (maybe-fix-ranks opts)
      (maybe-add-hierarchies opts)
      (maybe-add-stacks opts)
      ))


(defn process [in]
  (let [g (loom-graph (:data in))]
    (-> g
        (preprocess-graph (:display-options in))
        (g/process-graph (:display-options in)))))
