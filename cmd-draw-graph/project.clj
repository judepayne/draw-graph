(defproject cmd-draw-graph "0.2.0"
  :description "runs draw-graph from the command line"
  :url "https://github.com/judepayne/draw-graph"
  :license {:name "MIT"}
  :dependencies [[org.clojure/clojure "1.10.0"]
                 [lib-draw-graph "0.1.5"]
                 [org.clojure/tools.cli "0.4.2"]]
  :repl-options {:init-ns cmd-draw-graph.core}
  :main cmd-draw-graph.core
  :aot [cmd-draw-graph.core]
  :profiles {:uberjar {:aot :all}
             :dev {:plugins [[lein-binplus "0.6.5"]]}}
  :bin {:name "draw-graph"})
