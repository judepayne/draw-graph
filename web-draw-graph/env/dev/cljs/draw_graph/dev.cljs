(ns ^:figwheel-no-load draw-graph.dev
  (:require
    [draw-graph.core :as core]
    [devtools.core :as devtools]))


(enable-console-print!)

(devtools/install!)

(core/init!)
