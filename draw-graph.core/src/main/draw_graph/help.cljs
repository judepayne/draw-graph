(ns draw-graph.help
  (:refer-clojure :exclude [atom flush])
  (:require
     [draw-graph.utils         :as utils]
     [lib-draw-graph.anneal    :as a]
     [lib-draw-graph.geometry  :as g]
     [reagent.core             :as r]
     [reagent.ratom            :as ratom]
     [cljs.core.async :refer [<! chan close!]])
  (:require-macros
   [cljs.core.async.macros :as m :refer [go]]))


;; -------------------------
;; Page

(defn help-page []
  [:iframe {:src "help.html"}])

