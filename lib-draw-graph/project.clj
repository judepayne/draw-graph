(defproject lib-draw-graph "0.1.9"
  :description "Library of cross-platform utilities for draw-graph"
  :url "http://example.com/FIXME"
  :license {:name "EPL-2.0 OR GPL-2.0-or-later WITH Classpath-exception-2.0"
            :url "https://www.eclipse.org/legal/epl-2.0/"}
  :dependencies [[org.clojure/clojure "1.10.0"]
                 [rhizome-cljc "0.1.2"]
                 ;[rhizome "0.2.9"]
                 [aysylu/loom "1.0.2"]
                 [org.clojure/data.xml "0.2.0-alpha6"]
                 [org.clojure/data.zip "0.1.2"]
                 [instaparse "1.4.9"]
                 [criterium "0.4.4"]
                 [org.clojure/math.combinatorics "0.1.4"]
                 [clj-sql-pred "0.1.9"]
                 [extra-loom "0.1.6"]]
  :repl-options {:init-ns lib-draw-graph.core})
