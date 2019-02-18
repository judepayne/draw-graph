(ns draw-graph.prod
  (:require
    [draw-graph.core :as core]))

;;ignore println statements in prod
(set! *print-fn* (fn [& _]))

(core/init!)
