(ns draw-graph.home
  (:require
   [reagent.core             :refer [atom cursor]]
   [reagent.ratom            :refer [reaction make-reaction]]
   [reagent-forms.core       :refer [bind-fields make-form]]
   [cljs.core.async          :refer [put! chan <! >!]]
   [accountant.core          :as accountant]
   [kvlt.core                :as kvlt]
   [promesa.core             :as p]
   [promesa.async-cljs :refer-macros [async]]
   [clojure.string           :as string]
   [draw-graph.utils         :as utils]
   [draw-graph.examples      :as examples]
   [lib-draw-graph.processor :as processor]
   [lib-draw-graph.parser    :as parser]
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
                        :warn ""
                        :svg default-svg-text
                        :data ""}))
;; various cursors over the atom
(def options (cursor local-state [:options]))
(def svg (cursor local-state [:svg]))
(def processing (cursor local-state [:processing]))
(def error (cursor local-state [:error]))
(def warn (cursor local-state [:warn]))


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


(defn put-warn [message]
  (reset! processing false)
  (reset! warn message))


(defn put-result [result]  
  (when (:svg result) (reset! svg (:svg result)))
  (when (:error result) (reset! error (:error result)))
  (when (:warn result) (reset! warn (:warn result)))
  (reset! processing false))


(defn convert-dot->svg [dot]
  (->>
   (->svg (clj->json (dot->svg dot)))
   (p/map json->clj)
   (p/map :svg)))


(defn process-remotely []
  (do
    (reset! processing true)
    (reset! error "")
    (reset! warn "")
    (->> 
     (->svg (clj->json (->csv1)))
     (p/map json->clj)
     (p/map put-result)
     (p/error (fn [error] (put-error (.-message error)))))))


(defn process-locally []
  (do
    (reset! processing true)
    (reset! error "")
    (reset! warn "")
    (let [in (->csv1)
          g (try
              (processor/csv->g in)
              (catch js/Error e
                (do
                  (reset! svg "")
                  (put-error (str  e)))))
          warn (processor/check-graph g)
          dot (processor/g->dot in g)]
      (if (not= warn "") (put-warn warn))
      (->> (->svg (clj->json (dot->svg dot)))
           (p/map json->clj)
           (p/map :svg)
           (p/map (partial processor/postprocess-svg g (-> in :display-options)))
           (p/map put-svg)
           (p/error (fn [error] (put-error (.-message error))))))))


(defn get-svg []
  (if *produce-dot-locally*
    (process-locally)
    (process-remotely)))


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
   [:option {:value "draw-graph.examples/example5"} "Circular tree"]
   [:option {:value "draw-graph.examples/example6"} "cluster layout"]
   [:option {:value "draw-graph.examples/example7"} "complex cluster layout"]]) 


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
               :rows 18
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


;; Left Display options

(defn hide-leaves []
  [:input {:type :checkbox :id :hide-leaves?
           :checked (:hide-leaves? @options)
           :on-change #(swap! local-state update-in [:options :hide-leaves?] not)}])


(defn show-roots []
  [:input {:type :checkbox :id :show-roots?
           :checked (:show-roots? @options)
           :on-change #(swap! local-state update-in [:options :show-roots?] not)}])


(defn node-label [] (text-input [:options :label] local-state))


(defn tooltip [] (text-input [:options :tooltip] local-state))


(defn shape [] (fixed-select [:options :shape] local-state
                             "ellipse" "box" "circle" "egg" "diamond" "octagon" "square"
                             "folder" "cylinder" "plaintext"))


(defn layout [] (fixed-select [:options :layout] local-state
                              "dot" "neato" "fdp" "circo" "twopi"))


(defn rankdir [] (fixed-select [:options :rankdir] local-state "LR" "TB" "RL" "BT"))


(defn elide-levels [] (fixed-select [:options :elide] local-state "0" "1" "2" "3" "4") )

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
           (rest (for [x @headers] [:option {:key x} x]))))])


(defn color-on []
  [:select.form-control
   {:field :list :id :color-on
    :value (:color-on @options)
    :on-change #(swap! local-state update-in [:options :color-on]
                       (fn [e] (-> % .-target .-value)))}
   (if (= "" (first @headers))
     [:option {:key "none" :value ""} "-"]
     (cons [:option {:key "none" :value ""} "-"]
           (rest (for [x @headers] [:option {:key x} x]))))])


(defn url []
  [:select.form-control
   {:field :list :id :url
    :value (:url @options)
    :on-change #(swap! local-state update-in [:options :url]
                       (fn [e] (-> % .-target .-value)))}
   (if (= "" (first @headers))
     [:option {:key "none" :value ""} "-"]
     (cons [:option {:key "none" :value ""} "-"]
           (rest (for [x @headers] [:option {:key x} x]))))])


(defn splines [] (fixed-select [:options :splines] local-state
                               "line" "spline" "none" "polyline" "ortho"))


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


(defn pp? []
  [:input {:type :checkbox :id :pp?
           :checked (-> @options :post-process?)
           :on-change #(swap! local-state update-in
                              [:options :post-process?] not)}])


(defn pp-font [] (text-input [:options :pp-font] local-state))


(defn pp-clusters []
  [:div
   [:a.lbl (str \u2191)]
   [:input {:type :checkbox :id :pp-clusters-top?
            :checked (-> @options :pp-clusters :y)
            :on-change #(swap! local-state update-in
                               [:options :pp-clusters :y] not)}]
   [:a.lbl (str \u00A0 \u00A0 \u00A0 \u00A0 \u2193)]
   [:input {:type :checkbox :id :pp-clusters-bottom?
            :checked (-> @options :pp-clusters :h)
            :on-change #(swap! local-state update-in
                               [:options :pp-clusters :h] not)}]
   [:a.lbl (str \u00A0 \u00A0 \u2190)]
   [:input {:type :checkbox :id :pp-clusters-left?
            :checked (-> @options :pp-clusters :x)
            :on-change #(swap! local-state update-in
                               [:options :pp-clusters :x] not)}]
   [:a.lbl (str \u00A0 \u00A0 \u2192)]
   [:input {:type :checkbox :id :pp-clusters-right?
            :checked (-> @options :pp-clusters :w)
            :on-change #(swap! local-state update-in
                               [:options :pp-clusters :w] not)}]])


(defn pp-cluster-sep [] (text-input [:options :pp-cluster-sep] local-state))


;; ---- Options layout

(defn row [label ctrl]
  [:div [:div.lbl label]
        [:div ctrl]])


(defn label-row [label]
  [:div [:a.lbl.row-sep label]])


(defn empty-row []
  [:div [:a.lbl.row-label (str \u00A0)]])  ;; \00A0 = &nbsp


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


(defn left-disp-opts1 [state]
  (fn []
    [:div.controls1l {:class (:local-class @state)}
     (label-row "draw-graph")
     (row "node labels" [node-label])
     (row "node tooltips" [tooltip])
     (row "elide lower levels" [elide-levels])
     (row "post process" [pp?])
     (row "font" [pp-font])    
]))


(defn middle-disp-opts1 [state]
  (fn []
    [:div.controls1m {:class (:local-class @state)} 
     (empty-row)
     (row "cluster on" [cluster-on])
     (row "node URL" [url])
     (row "hide leaves" [hide-leaves])
     (row "expand clusters" [pp-clusters])
     (empty-row) (empty-row)
]))


(defn right-disp-opts1 [state]
  (fn []
    [:div.controls1r {:class (:local-class @state)} 
     (empty-row)
     (row "color on" [color-on])
     (row "filter graph" [filtergraph])
     (row "highlight roots" [show-roots])
     (row "cluster separation" [pp-cluster-sep])
     (empty-row) (empty-row)
]))

(defn left-disp-opts2 [state]
  (fn []
    [:div.controls2l {:class (:local-class @state)} 
     (label-row "graphviz")     
     (row "layout" [layout])
     (row "(node) fixedsize" [fixedsize])
     (row "nodesep" [nodesep])     
     (row "overlap" [overlap])
     
]))

(defn middle-disp-opts2 [state]
  (fn []
    [:div.controls2m {:class (:local-class @state)} 
     (empty-row)
     (row "rankdir" [rankdir])
     (row "splines" [splines])
     (row "ranksep" [ranksep])
     (row "scale" [scale])   
     
]))

(defn right-disp-opts2 [state]
  (fn []
    [:div.controls2r {:class (:local-class @state)} 
     (empty-row)
     (row "node shape" [shape])
     (empty-row) (empty-row)
     (row "concentrate (edges)" [concentrate])
     (empty-row) (empty-row)

]))




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
     [left-disp-opts1 state]
     [middle-disp-opts1 state]
     [right-disp-opts1 state]
     [left-disp-opts2 state]
     [middle-disp-opts2 state]
     [right-disp-opts2 state]
     [:div.item9 [process-button]]
     [:div.item10 [save-button]]
     [:div.item11 {:dangerouslySetInnerHTML {:__html @svg}}]]))

;; -------------------------
;; Page

(defn home-page []
  [:div
   [:link {:href "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" :rel "stylesheet"}]
   [:div.site-banner "draw-graph"]
   [:p {:font-size "0.9em;"} "Network diagrams from csv files"]
   [controls disp-opts-state]
   ;(:options @local-state)
   [:div.warn @warn]
   [:div.error @error]])
