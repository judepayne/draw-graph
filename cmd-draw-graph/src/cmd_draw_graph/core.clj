(ns cmd-draw-graph.core
  (:require [lib-draw-graph.processor :as processor]
            [clojure.java.shell       :as sh]
            [clojure.string           :as str]
            [clojure.java.io          :as io]
            [clojure.data.json        :as json]
            [clojure.tools.cli        :refer [cli]])
  (:gen-class))


(def ^:dynamic *format-in* :format-in)  ;; where data format is specified
(def ^:dynamic *format-out* :format-out)  ;; desired out format svg/url/both


(defn- format-error [s err]
  (apply str
    err "\n"
    (interleave
      (map
        (fn [idx s]
          (format "%3d: %s" idx s))
        (range)
        (str/split-lines s))
      (repeat "\n"))))


(def path-to-dot "/opt/bin/dot_static")


(defn dot->svg
  "Takes a string containing a GraphViz dot file, and returns a string containing SVG."
  [s & {:keys [path] :or {path path-to-dot}}]
  (let [s' (str/replace s "\\\\n" "\n")     ;; for multi-line labels
        {:keys [out err]} (sh/sh path "-Tsvg" :in s')]
    (or
      out
      (throw (IllegalArgumentException. ^String (str "Graphviz!: "(format-error s' err)))))))


(defn- read-input
  [js]
  (json/read-str js :key-fn keyword))



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
                            svg (dot->svg dot :path dot-path)]
                        (processor/postprocess-svg g' (-> in :display-options) svg))
                "dot" (dot->svg (:data in))
                (throw (IllegalArgumentException.
                        "Error: only 'csv' or 'dot' are allowed input formats.")))]
      (case (*format-out* in)
        "svg" (println svg)
        (println "Error: only 'svg' format can be specified as an output.")))
    (catch Exception e
      (println (str "Error!: " (.getMessage e))))))


(def required-opts #{:path :input})


(defn missing-required?
  "Returns true if opts is missing any of the required-opts"
  [opts]
  (not-every? opts required-opts))


(defmacro proj-version []
  (some->> (slurp "project.clj") clojure.edn/read-string (drop 1) (take 2) (str/join " ")))


(defn -main [& args]
  (let [[opts args banner] (cli args
                                ["-h" "--help" "Print this help"
                                 :default false :flag true]
                                ["-p" "--path" "Fully qualified path to graphviz executable."
                                 :default path-to-dot :flag false :parse-fn identity]
                                ["-i" "--input" "The input string in json format."
                                 :default false :flag false :parse-fn identity]
                                ["-v" "--version" "The version of this tool."
                                 :default false :flag true])]
    (cond
      (:version opts) (proj-version)
      (or (:help opts) (missing-required? opts)) (println banner)
      :else (do (->svg (:input opts) (:path opts))
                (System/exit 0)))))

