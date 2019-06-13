(ns draw-graph.ip
  (:require
   [kvlt.core                :as kvlt]
   [promesa.core             :as p]
   [promesa.async-cljs :refer-macros [async]]
   [draw-graph.utils         :as utils]))


(defn rest-get [url]
  (p/alet [{:keys [status body]}
           (p/await (p/catch (kvlt/request! {:url url})
                        (fn [e] ((ex-data e) :type))))]
          body))


(def ip-api-url "http://ip-api.com/json/")


(defn extract-region [s]
  (first (clojure.string/split s #"/")))


(defn region [handler error-fn]
  (->> (rest-get ip-api-url)
       (p/map utils/json->clj)
       (p/map :timezone)
       (p/map extract-region)
       (p/map handler)
       (p/error error-fn)))

