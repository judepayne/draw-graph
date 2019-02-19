(ns draw-graph.check
  (:require [clojure.string :as s]))




(comment "DEPRECATED: instaparse unfortunately too slow"
  (def component "[a-zA-Z0-9-._+/\\s]+")

  (def header
    (insta/parser
     (str "S = (A B)+ A;A = #'" component "';B = ':'")))

  (defn number-keys [header-row]
    (let [parse-result (header header-row)]
      (if (map? parse-result)
        (throw (js/Error "Header row did not conform to format"))
        (/ (count parse-result) 2))))

  (defn node [n]
    (str
     (apply str (repeat (dec n) "A B "))
     "A"))

  (defn row [n]
    (insta/parser
     (str
      "S = " (node n) " C " (node n) " (C D)?;"
      "A = #'" component "';"
      "B = ':';"
      "C = ',';"
      "D = (A B A)+ (B A B A)?;"
      ))))


