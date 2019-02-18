(ns draw-graph.about
  (:require
   [markdown-to-hiccup.core :as md]
   [draw-graph.utils :as utils]))

(def page-content
  "There are lots of graph/ networking diagramming tools online. This is one of them.\n\ndraw-graph came about because I’ve found graph diagrams extremely useful in the past, but I’ve found that the fully featured tools like Graphviz are not that accessible to the non-technical user or they put GUI interaction first meaning that it’s laborious to constructs diagrams from data that you have lying around. draw-graph has a csv format which means that any suitable data from Excel can be converted into the input format.\n\nThe backend of draw-graph runs on Amazon AWS Lambda.\n\nEnjoy!")


;; -------------------------
;; Page

(defn about-page []
  [:div.block-text
   [:p (utils/md->hiccup page-content)]])


