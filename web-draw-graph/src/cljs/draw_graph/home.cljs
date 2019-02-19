(ns draw-graph.home
  (:require
   [reagent.core             :refer [atom cursor]]
   [reagent.ratom            :refer [reaction make-reaction]]
   [reagent-forms.core       :refer [bind-fields make-form]]
   [cljs.core.async          :refer [put! chan <! >!]]
   [accountant.core          :as accountant]
   [kvlt.core                :as kvlt]
   [promesa.core             :as p]
   [clojure.string           :as string]
   [draw-graph.utils         :as utils]
   [draw-graph.examples      :as examples]
   [lib-draw-graph.spec      :as spec]
   [lib-draw-graph.processor :as processor]
   [draw-graph.file          :as file])
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]))



(def log (.-log js/console))

;; -------------------------
;; State

(def default-svg-text "<div/>")   ;; html to inject when svg is empty

;; atom to store the page's state
(def local-state (atom {:options examples/default-options
                        :processing false
                        :error ""
                        :svg default-svg-text
                        :data ""}))
;; various cursors over the atom
(def options (cursor local-state [:options]))
(def svg (cursor local-state [:svg]))
(def processing (cursor local-state [:processing]))
(def error (cursor local-state [:error]))


;; -------------------------
;; Initialise the file reader

(file/file-reader-listen (fn [e] (swap! local-state merge e)))


;; -------------------------
;; Processing

;; determines whether dot is produced locally or in the lambda
(def ^:dynamic *produce-dot-locally* true)


(defn clj->json
  [ds]
  (.stringify js/JSON (clj->js ds)))


(defn json->clj
  [ds]
  (js->clj (.parse js/JSON ds) :keywordize-keys true))


(def url-lambda-draw-graph "https://0j6kjsk388.execute-api.eu-west-2.amazonaws.com/beta")


(defn remove-empty-strings
  "removes items from map where Value is an empty string"
  [m]
  (into {} (filter (complement (comp #{""} last)) m)))

(defn ->csv1 []
  {:display-options (remove-empty-strings (:options @local-state))
   :data (:data @local-state)
   :format-in "csv"
   :format-out "svg"})


(defn ->dot []
  {:display-options (remove-empty-strings (:options @local-state))
   :data (:data @local-state)})

(defn dot->svg [data]
  {:data data
   :format-in "dot"
   :format-out "svg"})



(defn post [url json-data]
  (p/alet [{:keys [status body]}
           (p/await (p/catch (kvlt/request! {:url url
                                             :method :post
                                             :body json-data
                                             :content-type :json
                                             :accept :json})
                        (fn [e] ((ex-data e) :type))))]
          body))


(defn ->svg [json-data]
  ((partial post url-lambda-draw-graph) json-data))


(defn put-svg [data]
  (let [data* (if (= data "null") default-svg-text data)])
  (reset! processing false)
  (reset! svg data))


(defn put-error [message]
  (reset! processing false)
  (reset! svg "")
  (reset! error message))


(defn get-svg []
  (let [chk (spec/check-csv1 (:data @local-state))]
    (if (= :ok chk)
      (do
        (reset! processing true)
        (reset! error "")
        (->> 
         (->svg (clj->json (if *produce-dot-locally*
                             (dot->svg (processor/process (->dot)))
                             (->csv1))))
             (p/map json->clj)
             (p/map :svg)
             ;(p/map utils/html->hiccup)  ;; suppress conversion of svg to hiccup for perf
             (p/map put-svg)
             (p/error (fn [error] (put-error (.-message error))))))
      (do
        (reset! svg "")
        (put-error (str "Format error with line >> " chk))))))


;; -------------------------
;; Controls input


;; ---- Utility functions

;; thanks: https://stackoverflow.com/questions/23345663/call-a-clojurescript-function-by-string-name/30892955#30892955
(defn ->js [var-name]
      (-> var-name
          (string/replace #"/" ".")
          (string/replace #"-" "_")))


(defn invoke [function-name & args]
      (let [fun (js/eval (->js function-name))]
           (apply fun args)))


(defn set-value [id val]
  (if (some? val)
    (set! (-> js/document (.getElementById id) (.-value)) val)))


(defn fixed-select [path a & options]
  [:select
   {:field :list :id (last path)
    :values (get-in @a path)
    :value (get-in @local-state path)
    :on-change #(swap! local-state update-in path
                       (fn [e] (-> % .-target .-value)))}
   (for [x options] [:option {:key x} x])])


(defn text-input [path a]
 [:input
   {:type :text :id (last path)
    :value (get-in @a path)
    :on-change #(swap! local-state update-in path
                       (fn [e] (-> % .-target .-value)))}])


;; ---- Main inputs

(defn load-example-data [ex-fn]
  (let [example (invoke ex-fn)]
    (swap! local-state assoc :options (:options example))
    (swap! local-state merge {:data (:data example) :data-filename ""})))


(defn example-dropdown []
  [:select {:on-change #(load-example-data (.. % -target -value))}  
   [:option {:value nil} "-"]  
   [:option {:value "draw-graph.examples/example1"} "Friendship graph"]
   [:option {:value "draw-graph.examples/example2"} "Two facing trees"]
   [:option {:value "draw-graph.examples/example3"} "Two trees"]
   [:option {:value "draw-graph.examples/example4"} "CERN email connections"]
   [:option {:value "draw-graph.examples/example5"} "Circular tree"]]) 


(defn click-upload-csv-hidden [e]
  ;;click the hidden file input button
  ;; need for the two buttons with input[type="file'] because you
  ;; can't satisfactorily style an input[type="file"] button
  (.click (.getElementById js/document "upload-csv-hidden")))


(defn load-button []
  [:div
   [:button {:id "upload-csv"
             :on-click click-upload-csv-hidden
             :title "Upload a csv in 'csv1' format. see help"}
    "Load csv"]
   [:input {:id "upload-csv-hidden"
            :type "file"
            :accept ".csv"
            :on-change file/file-reader-put}]])


(defn data-input [value]  
  [:div
   [:textarea {
               :id "tweak-box"
               :rows 13
               :cols 40
               :wrap "soft"
               :spellCheck "false"
               :autoComplete "on"
               :autoCapitalize "off"
               :autoCorrect "off"
               :value (:data @value)
               :on-change #(swap! value
                                  assoc
                                  :data
                                  (-> % .-target .-value))}]])


;; ---- Left Display options

(defn hide-leaves []
  [:input {:type :checkbox :id :hide-leaves?
           :checked (:hide-leaves? @options)
           :on-change #(swap! local-state update-in [:options :hide-leaves?] not)}])


(defn show-roots []
  [:input {:type :checkbox :id :show-roots?
           :checked (:show-roots? @options)
           :on-change #(swap! local-state update-in [:options :show-roots?] not)}])


(defn node-label [] (text-input [:options :label] local-state))


(defn shape [] (fixed-select [:options :shape] local-state
                             "ellipse" "box" "circle" "egg" "diamond" "octagon" "square"
                             "underline" "folder"))


(defn layout [] (fixed-select [:options :layout] local-state
                              "dot" "neato" "fdp" "circo" "twopi"))


(defn rankdir [] (fixed-select [:options :rankdir] local-state
                               "LR" "TB" "RL" "BT"))


(defn elide-levels [] (fixed-select [:options :elide] local-state
                                    0 1 2 3 4) )

;; -- Cluster-on dropdown needs to be more dynamic--
(defn first-line [s]
  (js->clj (.split (aget (.split s "\n") 0) ":")))


;; a reaction to capture the headers in the data file
(def headers
  (reaction (first-line (:data @local-state))))


(defn cluster-on []
  [:select.form-control
   {:field :list :id :cluster-on
    :value (:cluster-on @options)
    :on-change #(swap! local-state update-in [:options :cluster-on]
                       (fn [e] (-> % .-target .-value)))}
   (if (= "" (first @headers))
     [:option {:key "none" :value ""} "-"]
     (cons [:option {:key "none" :value ""} "-"]
           (for [x @headers] [:option {:key x} x])))])


;; ---- Right Display options-------

(defn splines [] (fixed-select [:options :splines] local-state
                               "line" "spline" "none" "polyline" "curved" "ortho"))


(defn overlap [] (fixed-select [:options :overlap] local-state
                               "true" "false" "scale" "scalexy" "compress" "vpsc"
                               "orthoxy" "ipsep"))


(defn sep [] (text-input [:options :sep] local-state))

(defn concentrate [] (fixed-select [:options :concentrate] local-state
                                   "false" "true"))

(defn ranksep [] (text-input [:options :ranksep] local-state))


(defn nodesep [] (text-input [:options :nodesep] local-state))

(defn scale [] (text-input [:options :scale] local-state))

(defn fixedsize [] (fixed-select [:options :fixedsize] local-state
                                  "true" "false" "shape"))

(defn filtergraph [] (text-input [:options :filter-graph] local-state))


;; ---- Options layout

(defn row [label ctrl]
  [:div [:div.lbl label]
        [:div ctrl]])


(defn toggle [a k v1 v2]
    (if (= (@a k) v1)
      (swap! a assoc k v2)
      (swap! a assoc k v1)))


(def disp-opts-state
  (atom {:local-class "hidden"
         :wrapper-class "wrapper controls wrapper-collapsed"
         :lbl "show"}))


(defn disp-opts-hdr [state]
  (fn []
    [:div.item6
     [:div.opts-hdr
      {:on-click #(do
                    (toggle state :lbl "show" "hide")
                    (toggle state :local-class "hidden" "visible")
                    (toggle state :wrapper-class "wrapper controls wrapper-collapsed"
                            "wrapper controls"))}
      "Options" [:a.lbl.show-hide (:lbl @state)]]]))


(defn left-disp-opts [state]
  (fn []
    [:div.item7 {:class (:local-class @state)}
     (row "hide leaves" [hide-leaves])
     (row "highlight roots" [show-roots])
     (row "node label" [node-label]) ;;dynamically generated
     (row "node shape" [shape])
     (row "cluster on" [cluster-on])
     (row "layout" [layout])
     (row "rankdir" [rankdir])
     (row "elide lower levels" [elide-levels])]))

(defn right-disp-opts [state]
  (fn []
    [:div.item8 {:class (:local-class @state)} 
     (row "splines" [splines])
     (row "overlap" [overlap])
     (row "concentrate (edges)" [concentrate])
     (row "ranksep" [ranksep])
     (row "nodesep" [nodesep])
     (row "scale" [scale])
     (row "(node) fixedsize" [fixedsize])
     (row "filter graph" [filtergraph])]))


;; ---- Control buttons
;; Define two different go button states
;; For normal state before a request is sent off
(defn go-button []
  [:button {:id "go-button" :on-click get-svg}
   "draw-graph"])

;; and while the request is being processed
(defn go-button-loading []
  [:button {:id "go-button"}
   [:i.fa.fa-circle-o-notch.fa-spin] " processing"])

;; process button flips between the 2 states
(defn process-button []
  (fn []
    (if @processing
        [go-button-loading] [go-button])))

(defn save-button []
  (fn []
    (if (not= @svg default-svg-text)
      [:button {:id "save-button"
                :on-click #(if (not= @svg default-svg-text)
                             (file/save-svg svg (:data-filename @local-state)
                                            (:layout @options)) (:cluster-on @options))}
       "Save image"]
      [:button {:id "save-button-disabled"} "Save image"])))

;; -------------------------
;; Controls

(defn controls [state]
  (fn []
    [:div {:class (:wrapper-class @state)}
     [:div.item1 "Examples"]
     [:div.item2 [example-dropdown]]
     [:div.item3
      [:div [load-button]]
      [:div "or enter the data"]]
     [:div.item4 [:label {:id "file-name"} (:data-filename @local-state)]]
     [:div.item5 [data-input local-state]]
     [disp-opts-hdr state]
     [left-disp-opts state]
     [right-disp-opts state]
     [:div.item9 [process-button]]
     [:div.item10 [save-button]]]))

;; -------------------------
;; Page

(defn home-page []
  [:div
   [:link {:href "https://fonts.googleapis.com/css?family=Roboto+Mono"
           :rel "stylesheet"}]
   [:link {:href "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
           :rel "stylesheet"}]
   [:div.site-banner "draw-graph"]
   [:p {:font-size "0.9em;"} "Network diagrams from csv files"]
   [controls disp-opts-state]
   ;; direct react call to insert svg as (html) text - for better performance
   [:div {:dangerouslySetInnerHTML {:__html @svg}}] 
   [:div.error @error]])