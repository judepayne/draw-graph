(ns draw-graph.about
  (:require
   [markdown-to-hiccup.core :as md]
   [draw-graph.utils :as utils]))

(def page-content
  "There are lots of graph/ networking diagramming tools online. This is one of them.\n\ndraw-graph came about because I’ve found graph diagrams extremely useful in the past, but I’ve found that the fully featured tools like Graphviz are not that accessible to the non-technical user or they make you use a gui to construct a graph visually, node by node, and that's laborious.\n\nThere are lots of Excel experts and a a lot of data lying around in spreadsheets or can be got into spreadsheets though. So draw-graph has a csv input format.\n\nThe backend of draw-graph runs on Amazon AWS Lambda.\n\nEnjoy!\n")


;; -------------------------
;; Page

(defn about-page []
  [:div.block-text
   [:p (utils/md->hiccup page-content)]])


