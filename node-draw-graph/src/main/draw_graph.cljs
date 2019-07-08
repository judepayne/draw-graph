(ns draw-graph
  (:require [clojure.string           :as str]
  ;         [viz.core                 :as viz]
            [lib-draw-graph.processor :as processor]
            [clojure.tools.cli        :refer [cli]]
            [goog.string :as gstring]
            [goog.string.format]
            ["Viz" :as viz]))


(def ^:dynamic *format-in* :format-in)  ;; where data format is specified
(def ^:dynamic *format-out* :format-out)  ;; desired out format svg/url/both


(defn- format-error [s err]
  (apply str
    err "\n"
    (interleave
      (map
        (fn [idx s]
          (gstring/format "%3d: %s" idx s))
        (range)
        (str/split-lines s))
      (repeat "\n"))))


(defn dot->svg
  "js version of the above. requires no local install of graphviz"
  [s]
  (viz/image s))


(defn- read-input
  [js]
  (js->clj (.parse js/JSON js) :keywordize-keys true))


(defn ->svg
  "Converts csv1 format to svg format. input is json"
  [js dot-path]
  (try
    (let [in (read-input js)
          svg (case (*format-in* in)
                "csv" (let [g (processor/csv->g in)
                            opts (:display-options in)
                            g' (processor/preprocess-graph g opts)
                            ;; warning goes here
                            dot (processor/g->dot in g')
                            svg (dot->svg dot)]
                        (processor/postprocess-svg g' (-> in :display-options) svg))
                "dot" (dot->svg (:data in))
                (throw (js/Error.
                        "Error: only 'csv' or 'dot' are allowed input formats.")))]
      (case (*format-out* in)
        "svg" (println svg)
        (println "Error: only 'svg' format can be specified as an output.")))
    (catch js/Error e
      (println (str "Error!: " e)))))


(def required-opts #{:path :input})


(defn missing-required?
  "Returns true if opts is missing any of the required-opts"
  [opts]
  (not-every? opts required-opts))


(defn main [& args]
  (let [[opts args banner] (cli args
                                ["-h" "--help" "Print this help"
                                 :default false :flag true]
                                ["-i" "--input" "The input string in json format."
                                 :default false :flag false :parse-fn identity])]
    (cond
      (or (:help opts) (missing-required? opts)) (println banner)
      :else (do (->svg (:input opts) (:path opts))))))
