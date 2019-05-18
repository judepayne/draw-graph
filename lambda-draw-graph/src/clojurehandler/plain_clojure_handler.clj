(ns clojurehandler.plain_clojure_handler
  (:require [clojure.java.shell       :as sh]
            [clojure.string           :as str]
            [clojure.java.io          :as io]
            [clojure.data.json        :as json]
            [lib-draw-graph.processor :as processor]))


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


; (processor/process-to-svg in dot->svg)


(defn ->svg
  "Converts csv1 format to svg format. input is json"
  [js]
  ;(println "IN json>> " js)
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
                (throw (IllegalArgumentException.
                        "Error: only 'csv' or 'dot' are allowed input formats.")))
          ;; put in the svg post processing here
          ;; need a function with process to make the graph.. or maybe it's returned.
          ]

      (case (*format-out* in)
        "svg" (json/write-str {:svg svg})
        (json/write-str {:error "Error: only 'svg' format can be specified as an output."})))
    (catch Exception e
      (println (str "Error!: " (.getMessage e)))
      (json/write-str {:error (str "Lambda function error: " (.getMessage e))}))))

;; gen-class and how to use it

;; 1. Compiling
;; lein-clean will remove the target/ directory

;; a) cider-jack-in will compile eveything
;; (probably if :aot :all is set in defproject)
;;
;; b) from REPL, call (compile 'this-is.my-namespace)
;; but ensure that the target/classes/ dir exists already
;;
;; c) lein compile will also do it, if :aot :all is set
;;

;; 2. Importing
;; Now you have the classes but they're not yet in your namespace
;; They have to be imported!
;;
;; Ususally the best way is to quit emacs, do a lein clean & lein compile
;; (with :aot :all set) and then in a new emacs/ fresh repl
;; (import clojurehandler.hello)
;; then it will be possible to do: (with the example code below)
;; (def a (hello.))
;; (.toString a) => "I'm a B!"
;; (.showMessage "Jude") => "Jude"
;;
;; TODO look for ways to do this without restarting emacs
;;
;;
;; 3. Generating (using gen-class)
;;
;; Overridden methods (e.g. toString) can just be defined, but custom
;; methods must be declared and then defined as shown below.
;; 
;;
;; 4. Inspecting/ debugging
;; in the repl:
;; (use 'clojure.reflect 'clojure.pprint)
;; (pprint (reflect clojurehandler.hello))
;; You should see your classes there - or something has gone wrong!

(import com.amazonaws.services.lambda.runtime.Context)

(gen-class
 :name clojurehandler.Handler
 :prefix pch-
 :implements [com.amazonaws.services.lambda.runtime.RequestStreamHandler])


(defn pch-handleRequest [this input output ctx]
  (let [out (-> (slurp input)
                 ->svg)]
    (with-open [o (io/writer output)]
      (.write o out))))

