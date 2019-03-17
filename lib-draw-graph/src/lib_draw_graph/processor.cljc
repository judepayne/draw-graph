(ns ^{:doc "Process csv format to dot."
      :author "Jude Payne"}
  lib-draw-graph.processor
  (:require [lib-draw-graph.graph           :as g]
            [lib-draw-graph.parser          :as parser]
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


(defn- add-attr-map
  [g node-or-edge m]
  (reduce
   (fn [acc cur] (apply loom.attr/add-attr acc node-or-edge cur))
   g (vec m)))


(defn loom-graph
  ([s] (loom-graph s nil))
  ([s cluster-on]
   (let [parsed (parser/parse-lines (str/split-lines s))
         gr0 (apply loom.graph/digraph (map #(take 2 %) (:edges parsed)))
         ;; add edge attrs
         gr1 (reduce (fn [acc cur]
                       (add-attr-map acc [(first cur) (second cur)] (third cur)))
                     gr0
                     (filter #(= 3 (count %)) (:edges parsed)))
         ;; add node attributes
         gr2 (reduce (fn [acc [nd attrs]]
                       (add-attr-map acc nd attrs))
                     gr1 (:node-styles parsed))]
     (if (and cluster-on
              (some #{(keyword cluster-on)} (:header parsed))) ;; check to prevent stack-overflow
       (let [;; add cluster styles
             gr3 (reduce (fn [acc cur]
                           (clstr/add-attr-to-cluster acc (first cur) :style (second cur)))
                         gr2
                         (:cluster-styles parsed))
             
             ;; add cluster parents
             gr4 (reduce (fn [acc [c p]]
                           (clstr/add-cluster-parent acc c p))
                         gr3 (:cluster-parents parsed))
             ;; add cluster edges
             gr5 (reduce (fn [acc [c1 c2]]
                           (preprocessor/add-stack acc (keyword cluster-on) [c1 c2]))
                         gr4
                         (:cluster-edges parsed))]
         (clstr/add-cluster-key gr5 cluster-on))
       gr2))))



;; ------------
;; pre-processing functions


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
      (maybe-fix-ranks opts)))


(defn- not-blank [s]
  (if (or (= "" s) nil)
    nil
    s))


(defn process [in]
  (let [g (if-let [cluster-on (not-blank (-> in :display-options :cluster-on))]
            (loom-graph (:data in) cluster-on)
            (loom-graph (:data in)))]
    (-> g
        (preprocess-graph (:display-options in))
        (g/process-graph (:display-options in)))))
