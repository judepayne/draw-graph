(defproject lambda-draw-graph "0.1.0"
  :description "AWS Lambda to convert various graph input formats to Graphviz dot or Graphviz generated svg"
  :dependencies [[org.clojure/clojure "1.9.0"]
                 [com.amazonaws/aws-lambda-java-core "1.1.0"]
                 [org.clojure/data.json "0.2.6"]
                 [lib-draw-graph "0.1.4"]]
  :aot :all)
