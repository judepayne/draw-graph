(ns draw-graph.utils
  (:require
   [hickory.core :refer [parse parse-fragment as-hiccup]]
   [clojure.string :as s]
   [markdown-to-hiccup.core :as md]
   [cljs.reader :as reader]))

(def log (.-log js/console))

;; -------------------------
;; Convert html string to hiccup

(defn ^:private parse-html->hiccup [val snippet?]
  (if snippet?
    (map as-hiccup (parse-fragment val))
    (as-hiccup (parse val))))

(defn html->hiccup [val]
  (-> val
      (parse-html->hiccup true)
      str
      ;; remove outer parens ()
      (s/replace-first #"^\((.*)\)" "$1")
      ;; remove trailing "\n    "      
      (s/replace  #"\"(\s*\\n\s*(\w)*)*\"" "$2")
      ;; remove in string "\n    "
      (s/replace #"\"(\\n\s*)" "\"")
      (s/replace #"(\\n\s*)\"" "\"")
      ;; start every opening [ on new line
      (s/replace #"\[" "\n[")
      ;; remove empty {}
      (s/replace #" \{\}" "")
      ;; remove trailing whitespace and empty strings
      (s/replace #"([\]\}])(\s*(\"\s*\"\s*)*)[\n]" "$1\n")
      ;; remove initial \n
      (s/replace-first #"^\n" "")
      ;; read into data structure
      reader/read-string))


;; -------------------------
;; Convert markdown string to hiccup

(defn md->hiccup
  "Converts markdown to hiccup"
  [markdown]
  (->> markdown
       (md/md->hiccup)
       (md/component)))
