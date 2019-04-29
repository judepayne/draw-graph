(ns ^{:doc "Common utilities."
      :author "Jude Payne"}
  lib-draw-graph.util)


(defn err
  "Creates an exception object with error-string."
  [error-string]
  #?(:clj (Exception. ^String error-string)
     :cljs (js/Error. error-string)))

