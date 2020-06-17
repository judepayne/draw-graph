(ns draw-graph.home
  (:require
   [reagent.core             :refer [atom cursor create-class dom-node force-update]]
   [reagent.ratom            :refer [reaction make-reaction]]
   [cljs.core.async          :refer [put! chan <! >!]]
   [accountant.core          :as accountant]
   [kvlt.core                :as kvlt]
   [promesa.core             :as p]
   [promesa.async-cljs       :refer-macros [async]]
   [clojure.string           :as string]
   [draw-graph.utils         :as utils]
   [draw-graph.examples      :as examples]
   [lib-draw-graph.processor :as processor]
   [lib-draw-graph.parser    :as parser]
   [lib-draw-graph.clustered :as clstr]
   [draw-graph.file          :as file]
   [clojure.data.xml         :as xml]
   [lib-draw-graph.svg       :as svg]
   [draw-graph.ip            :as ip]
   [goog.dom                 :as dom]
   ;["./codemirror/lib/codemirror" :as codemirror :refer (CodeMirror)]
   [codemirror]
   )
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]))



(def log (.-log js/console))

;; -------------------------
;; State

(def default-svg-text "<div/>")   ;; html to inject when svg is empty

;; atom to store the page's state
(def local-state (atom {:options examples/default-options
                        :processing false
                        :local-dot true
                        :error ""
                        :warn ""
                        :svg default-svg-text
                        :data ""
                        :region nil}))
;; various cursors over the atom
(def options (cursor local-state [:options]))
(def svg (cursor local-state [:svg]))
(def processing (cursor local-state [:processing]))
(def error (cursor local-state [:error]))
(def warn (cursor local-state [:warn]))
(def local-dot (cursor local-state [:local-dot]))
(def region (cursor local-state [:region]))
(def data (cursor local-state [:data]))

;; -------------------------
;; Initialise the file reader

(declare update-ace)
(def pan-zoom (atom nil))

(file/file-reader-listen (fn [e] (swap! local-state merge e)))


;; -------------------------
;; Processing

;; determines whether dot is produced locally or in the lambda
(def ^:dynamic *produce-dot-locally* true)


(defn find-region []
  (when (nil? @region)
    (ip/region (fn [x] (reset! region x))
               (fn [err] (js/console.log err)))))


(def url-Europe "https://0j6kjsk388.execute-api.eu-west-2.amazonaws.com/beta")
(def url-US "https://u4jlt3tmhe.execute-api.us-east-1.amazonaws.com/beta")


(defn lambda-url []
  (case @region
    "Europe"  url-Europe
    url-US))


(defn remove-empty-strings
  "removes items from map where Value is an empty string"
  [m]
  (into {} (filter (complement (comp #{""} last)) m)))


(defn ->csv1 []
  {:display-options (remove-empty-strings (:options @local-state))
   :data (:data @local-state)
   :format-in (name (processor/detect-format (:data @local-state)))
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
  ((partial post (lambda-url)) json-data))


(defn get-svg-element []
  (let [svg (filter #(= "svg" (.-tagName %)) 
             (-> js/document (.getElementById "svg") (.-childNodes)))]
    (if (> (count svg) 0) (first svg) nil)))


(defn reset-pan-zoom [] 
  (reset! pan-zoom nil)
  (let [svg-element (get-svg-element)]
    (when (not (nil? svg-element))
      (js/svgPanZoom.
       (get-svg-element)
       #js {:controlIconsEnabled true}))))


(defn put-svg [data]
  (let [data* (if (= data "null") default-svg-text data)])
  (reset! processing false)
  (reset! svg data)
  (reset-pan-zoom))


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


(defn process-remotely []
  (->> 
   (->svg (utils/clj->json (->csv1)))
   (p/map utils/json->clj)
   (p/map put-result)
   (p/error (fn [error] (put-error (.-message error))))))


(defn prom-viz [dot]
  (p/alet [result (p/await (p/catch
                              (js/Viz dot)
                               (fn [e] ((ex-data e) :type))))]
    result))


(defn local-dot->svg [g opts dot]
  ;; use viz.js
  (let [dot' (string/replace dot #"\\\\n" "\n")]
    (->>
     (prom-viz dot')
     (p/map (partial processor/postprocess-svg g opts))
     (p/map put-svg)
     (p/error (fn [error] (put-error (.-message error)))))))


(defn lambda-dot->svg [g opts dot]
  ;; use AWS lambda
  (->> (->svg (utils/clj->json (dot->svg dot)))
           (p/map utils/json->clj)
           (p/map :svg)
           (p/map (partial processor/postprocess-svg g opts))
           (p/map put-svg)
           (p/error (fn [error] (put-error (.-message error))))))


(defn process-locally []
  (do
    (reset! processing true)
    (reset! error "")
    (reset! warn "")
    (try
      (let [in (->csv1)
            opts (:display-options in)
            g (processor/in->g in)
            g' (processor/preprocess-graph g opts)
            dot (processor/g->dot in g')]       
        (if @local-dot
          (local-dot->svg g' opts dot)
          (lambda-dot->svg g' opts dot)))
      (catch js/Error e
        (reset! svg default-svg-text)
        (put-error (str e))))))


(defn get-svg []
  (if *produce-dot-locally*
    (process-locally)
    (process-remotely)))


;; -------------------------
;; Controls input

;; ---- Utility functions
;; thanks:
;; https://stackoverflow.com/questions/23345663/call-a-clojurescript-function-by-string-name/30892955#30892955

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


(defn fixed-select [path a tabIndex & options]
  [:select
   {:field :list :id (last path)
    :values (get-in @a path)
    :value (get-in @local-state path)
    :tabIndex tabIndex
    :on-change #(swap! local-state update-in path
                       (fn [e] (-> % .-target .-value)))}
   (for [x options] [:option {:key x} x])])


(defn text-input [path a tabIndex]
 [:input
   {:type :text :id (last path)
    :value (get-in @a path)
    :tabIndex tabIndex
    :on-change #(swap! local-state update-in path
                       (fn [e] (-> % .-target .-value)))}])


(defn wide-text-input [path a tabIndex]
 [:input.wide
   {:type :text :id (last path)
    :value (get-in @a path)
    :tabIndex tabIndex
    :on-change #(swap! local-state update-in path
                       (fn [e] (-> % .-target .-value)))}])


;; ---- Main inputs

(defn code-mirror
  "Create a code-mirror editor. The parameters:
  value-atom (reagent atom)
    when this changes, the editor will update to reflect it.
  options
  :style (reagent style map)
    will be applied to the container element
  :js-cm-opts
    options passed into the CodeMirror constructor
  :on-cm-init (fn [cm] -> nil)
    called with the CodeMirror instance, for whatever extra fiddling you want to do."
  [value-atom {:keys [style
                      js-cm-opts
                      on-cm-init]}]

  (let [cm (atom nil)]
    (create-class
     {:component-did-mount
      (fn [this]
        (let [el (dom-node this)
              inst (js/CodeMirror.
                    el
                    (clj->js
                     (merge
                      {:lineNumbers true
                       :viewportMargin js/Infinity
                       :matchBrackets true
                       :autofocus true
                       :value @value-atom
                       :autoCloseBrackets false
                       :mode "drawgraph"}
                      js-cm-opts)))]

          (reset! cm inst)
          (.on inst "change"
               (fn []
                 (let [value (.getValue inst)]
                   (when-not (= value @value-atom)
                     (reset! value-atom value)))))
          (when on-cm-init
            (on-cm-init inst))))

      :component-did-update
      (fn [this old-argv]
        (when-not (= @value-atom (.getValue @cm))
          (.setValue @cm @value-atom)))

      :reagent-render
      (fn [_ _ _]
        @value-atom
        [:div.item5 {:id "editor" :style style}])})))


;; ---------------
;; loading data

(defn url-encode
  [string]
  (some-> string str (js/encodeURIComponent) (.replace "+" "%20")))


(defn url-decode
  [string]
  (some-> string str (js/decodeURIComponent)))


(defn load-data-from-params [params-str]
  (try
    (let [params (->> (subs params-str 1)
                     url-decode
                     (.parse js/JSON))
          params (js->clj params :keywordize-keys true)]

      (when (:options params) (swap! local-state assoc :options (:options params)))
      (when (:data params) (swap! local-state assoc :data (:data params)))
    ;  (when (:click params) (get-svg))
      )
    (catch js/Error e
      (log "Error: Query string could not be converted to data!"))))


(defn load-example-data [ex-fn]
  (let [example (invoke ex-fn)]
    (swap! local-state assoc :options (:options example))
    (swap! local-state merge {:data (:data example) :data-filename ""})))


(defn example-dropdown []
  [:select {:tabIndex 1
            :on-change #(do (load-example-data (.. % -target -value)))}  
   [:option {:value nil} "-"]  
   [:option {:value "draw-graph.examples/example1"} "Friendship graph"]
   [:option {:value "draw-graph.examples/example1b"} "Friendship graph with synonyms"]
   [:option {:value "draw-graph.examples/example1c"} "Friendship graph with synonyms json"]
   [:option {:value "draw-graph.examples/example2"} "Two facing trees"]
   [:option {:value "draw-graph.examples/example3"} "Two trees"]
   [:option {:value "draw-graph.examples/example4"} "CERN email connections"]
   [:option {:value "draw-graph.examples/example5"} "Circular tree"]
   [:option {:value "draw-graph.examples/example6"} "cluster layout"]
   [:option {:value "draw-graph.examples/example7"} "complex cluster layout"]
   [:option {:value "draw-graph.examples/example8"} "Architecture diagram"]
   [:option {:value "draw-graph.examples/example9"} "Complex architecture diagram"]
   [:option {:value "draw-graph.examples/example9b"} "Complex architecture diagram json"]]) 


(defn get-position []
  (let [geo (.-geolocation js/navigator)]
    (.getCurrentPosition geo identity)))


(defn click-upload-csv-hidden [e]
  ;;click the hidden file input button
  ;; need for the two buttons with input[type="file'] because you
  ;; can't satisfactorily style an input[type="file"] button
  (.click (.getElementById js/document "upload-csv-hidden")))


(defn load-button []
  [:div
   [:button {:id "upload-csv"
             :tabIndex 2
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
               :tabIndex 3
               :rows 20
  ;            :cols 42
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


;; For the dynamic dropdowns

;; -- Cluster-on dropdown needs to be more dynamic--

(defn format
  "detects the format of :data in the state atom."
  [data]
  (try
    (processor/detect-format data)
    (catch js/Error e nil)))


(defn first-line [s]
  (js->clj (.split (subs (aget (.split s "\n") 0) 2) ":")))


(defn get-headers [data]
  (let [fmt (format data)]
    (case fmt
      :json (try ;; we might not be able to parse the json
              (:header (parser/parse-csv-or-json data :json))
              (catch js/Error e nil))
      :csv  (first-line data)
      nil)))


;; a reaction to capture the headers in the data file
(def headers
  (reaction (get-headers (:data @local-state))))


;; ----end----- For the dynamic dropdowns


;; Controls: MUST be laid out in TAB ORDER

(defn node-label [] (text-input [:options :label] local-state 4))


(defn cluster-on []
  [:select.form-control
   {:field :list :id :cluster-on
    :value (:cluster-on @options)
    :tabIndex 5
    :on-change #(swap! local-state update-in [:options :cluster-on]
                       (fn [e] (-> % .-target .-value)))}
   (if (= "" (first @headers))
     [:option {:key "none" :value ""} "-"]
     (cons [:option {:key "none" :value ""} "-"]
           (for [x @headers] [:option {:key x} x])))])


(defn color-on []
  [:select.form-control
   {:field :list :id :color-on
    :value (:color-on @options)
    :tabIndex 6
    :on-change #(swap! local-state update-in [:options :color-on]
                       (fn [e] (-> % .-target .-value)))}
   (if (= "" (first @headers))
     [:option {:key "none" :value ""} "-"]
     (cons [:option {:key "none" :value ""} "-"]
           (for [x @headers] [:option {:key x} x])))])


(defn tooltip [] (text-input [:options :tooltip] local-state 7))


(defn url []
  [:select.form-control
   {:field :list :id :url
    :value (:url @options)
    :tabIndex 8
    :on-change #(swap! local-state update-in [:options :url]
                       (fn [e] (-> % .-target .-value)))}
   (if (= "" (first @headers))
     [:option {:key "none" :value ""} "-"]
     (cons [:option {:key "none" :value ""} "-"]
           (for [x @headers] [:option {:key x} x])))])


(defn edgelabels [] (text-input [:options :edge-label] local-state 9))


(defn filtergraph [] (text-input [:options :filter-graph] local-state 10))


(defn paths [] (wide-text-input [:options :paths] local-state 11))


(defn elide-levels [] (fixed-select [:options :elide] local-state 12 "0" "1" "2" "3" "4") )


(defn show-roots []
  [:input {:type :checkbox :id :show-roots?
           :checked (:show-roots? @options)
           :tabIndex 13
           :on-change #(swap! local-state update-in [:options :show-roots?] not)}])


(defn show-constraints []
  [:input {:type :checkbox :id :show-constraints?
           :checked (:show-constraints? @options)
           :tabIndex 14
           :on-change #(swap! local-state update-in [:options :show-constraints?] not)}])


(defn pp? []
  [:input {:type :checkbox :id :pp?
           :checked (-> @options :post-process?)
           :tabIndex 15
           :on-change #(swap! local-state update-in
                              [:options :post-process?] not)}])


(defn pp-clusters []
  [:div
   [:a.lbl (str \u2191)]
   [:input {:type :checkbox :id :pp-clusters-top?
            :checked (-> @options :pp-clusters :y)
            :tab-index 16
            :on-change #(swap! local-state update-in
                               [:options :pp-clusters :y] not)}]
   [:a.lbl (str \u00A0 \u00A0 \u00A0 \u00A0 \u2193)]
   [:input {:type :checkbox :id :pp-clusters-bottom?
            :checked (-> @options :pp-clusters :h)
            :tabIndex 17
            :on-change #(swap! local-state update-in
                               [:options :pp-clusters :h] not)}]
   [:a.lbl (str \u00A0 \u00A0 \u2190)]
   [:input {:type :checkbox :id :pp-clusters-left?
            :checked (-> @options :pp-clusters :x)
            :tabIndex 18
            :on-change #(swap! local-state update-in
                               [:options :pp-clusters :x] not)}]
   [:a.lbl (str \u00A0 \u00A0 \u2192)]
   [:input {:type :checkbox :id :pp-clusters-right?
            :checked (-> @options :pp-clusters :w)
            :tabIndex 19
            :on-change #(swap! local-state update-in
                               [:options :pp-clusters :w] not)}]])


(defn anneal-bias [] (fixed-select [:options :pp-anneal-bias] local-state 20
                                   "0" "1" "2" "3" "4" "5" "6" "7" "8" "9" "10" "11" "12"))


(defn pp-cluster-sep [] (text-input [:options :pp-cluster-sep] local-state 21))


(defn pp-font [] (text-input [:options :pp-font] local-state 22))


(defn cluster-edges-num []
  (fixed-select [:options :num-cluster-edges] local-state 23
                                   "1" "2" "4" "5" "6" "9" "12" "16"))


(defn layout [] (fixed-select [:options :layout] local-state 24
                              "dot" "neato" "fdp" "circo" "twopi" "patchwork"))

(defn rankdir [] (fixed-select [:options :rankdir] local-state 25 "LR" "TB" "RL" "BT"))


(defn shape [] (fixed-select [:options :shape] local-state 26
                             "ellipse" "rect" "circle" "egg" "diamond" "octagon" "square"
                             "folder" "cylinder" "plaintext"))


(defn fixedsize [] (fixed-select [:options :fixedsize] local-state 27
                                  "true" "false" "shape"))


(defn splines [] (fixed-select [:options :splines] local-state 28
                               "line" "spline" "none" "polyline" "ortho" "curved"))


(defn nodesep [] (text-input [:options :nodesep] local-state 29))


(defn ranksep [] (text-input [:options :ranksep] local-state 30))


(defn concentrate []
  [:input {:type :checkbox :id :concentrate
           :checked (:concentrate @options)
           :tabIndex 31
           :on-change #(swap! local-state update-in [:options :concentrate] not)}])

;(defn concentrate [] (fixed-select [:options :concentrate] local-state 31 "false" "true"))


(defn overlap [] (fixed-select [:options :overlap] local-state 32
                               "true" "false" "scale" "scalexy" "compress" "vpsc"
                               "orthoxy" "ipsep"))


(defn scale [] (text-input [:options :scale] local-state 33))


(defn constraint []
  [:input {:type :checkbox :id :constraint?
           :checked (:constraint @options)
           :tabIndex 34
           :on-change #(swap! local-state update-in [:options :constraint] not)}])
;(defn constraint [] (fixed-select [:options :constraint] local-state 34 "true" "false"))



;; ---- Options layout

(defn row [label ctrl tooltip]
  [:div [:div.lbl label]
        [:div {:class "tooltip"} ctrl
         [:span {:class "tooltiptext"} tooltip]]])


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
     (row "node labels" [node-label] "The header key to use for the node label")
     (row "node tooltips" [tooltip] "The header key to use for tooltips embedded in the final svg")
     (row "filter graph" [filtergraph] "Filters the graph - good for zooming in")
     (row "elide lower levels" [elide-levels] "Hide <n> lowest levels in the graph")
     (row "post process" [pp?] "Post Procees the svg: anneal clusters and font replacement")
     (row "anneal cluster separation" [pp-cluster-sep] "How close clusters are allowed to get in pixels during annealing")]))


(defn middle-disp-opts1 [state]
  (fn []
    [:div.controls1m {:class (:local-class @state)} 
     (empty-row)
     (row "cluster on" [cluster-on] "The header key to cluster the graph on")
     (row "node URL" [url] "The header key to use as an embedded link in the final svg")
     (row "paths" [paths] "Filter the graph by paths through it. see help page.")
     (row "highlight roots" [show-roots] "Highlights the roots of the graph")
     (row "anneal expand clusters" [pp-clusters] "Controls which dimensions of clusters are expanded in post processing")
     (row "font" [pp-font] "The name of the replacement font to use in post processing")    
     (empty-row) (empty-row)]))


(defn right-disp-opts1 [state]
  (fn []
    [:div.controls1r {:class (:local-class @state)} 
     (empty-row)
     (row "color on" [color-on] "The header key to vary node coloration by")
     (row "edges labels" [edgelabels] "Edge meta key to use as an edge label")
     (empty-row) (empty-row)
     (row "highlight constraints" [show-constraints] "Highlights all (rank) constraining edges, including ordinarily invisible generated cluster edges. For debugging layouts")
     (row "anneal bias" [anneal-bias] "Favors left-right cluster expansion by this factor in TB/ BT layouts, ditto for top bottom in LR/ RL layouts")
     (row "cluster edges num" [cluster-edges-num] "number of invisible edges to create between nodes in two clusters that have a cluster edge. See Help page for further information.")]))


(defn left-disp-opts2 [state]
  (fn []
    [:div.controls2l {:class (:local-class @state)} 
     (label-row "graphviz")     
     (row "layout" [layout] "The Graphviz layout algorithm")
     (row "(node) fixedsize" [fixedsize] "Nodes fixed in size or varied according to contents")
     (row "nodesep" [nodesep] "Separation between nodes in inches")     
     (row "overlap" [overlap] "Determines how Graphviz removes overlapping edges")]))


(defn middle-disp-opts2 [state]
  (fn []
    [:div.controls2m {:class (:local-class @state)} 
     (empty-row)
     (row "rankdir" [rankdir] "The layout direction e.g. TB mean Top Bottom etc")
     (row "splines" [splines] "Controls the form of the edges in the graph")
     (row "ranksep" [ranksep] "Separation between ranks in inches")
     (row "scale" [scale] "Scales the graph up by this factor")]))


(defn right-disp-opts2 [state]
  (fn []
    [:div.controls2r {:class (:local-class @state)} 
     (empty-row)
     (row "node shape" [shape] "The shape used for nodes")
     (empty-row) (empty-row)
     (row "concentrate (edges)" [concentrate] "Merge edges with a common end point")
     (row "edge constraints" [constraint] "Sets whether edges influence rank in dot layouts")]))




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



;; atom to hold the dimensions of the svg div
;(def svg-div-rect (atom nil))


(defn svg-div
  ""
  [value-atom]

  (create-class

   {:component-did-mount
    (fn [this]
       )

    :component-did-update
    (fn [this old-argv]
      (let [el (get-svg-element)]
        (when el (.setAttribute el "id" "the-svg"))
        (reset-pan-zoom)))


    :reagent-render
    (fn [_ _ _]
      [:div#svg 
       {:dangerouslySetInnerHTML {:__html @svg}}])}))


;; -------------------------
;; Local remote

(def local-remote-state
  (atom {:lbl "  local"
         :class "local"}))

(defn local-remote [state]
  (fn []
    [:a.local-remote
     {:on-click #(do
                   (toggle state :lbl "  local" "  remote")
                   (toggle state :class "local" "remote")
                   (toggle local-state :local-dot true false))}
     [:span {:class (:class @state)} (:lbl @state)]]))


;; -------------------------
;; Controls

(defn controls [state]
  (fn []
    [:div {:class (:wrapper-class @state)}
     [:div.site-banner.banner1 "draw-graph" [local-remote local-remote-state]]
     [:div.banner2.controls "Examples  " [example-dropdown]]
     [:div.item3
      [:div [load-button]]
      [:div "or enter the data"]]
     [:div.item4 [:label {:id "file-name"} (:data-filename @local-state)]]
     [code-mirror data]
     [disp-opts-hdr state]
     [left-disp-opts1 state]
     [middle-disp-opts1 state]
     [right-disp-opts1 state]
     [left-disp-opts2 state]
     [middle-disp-opts2 state]
     [right-disp-opts2 state]
     [:div.item9 [process-button]]
     [:div.item10 [save-button]]
     [svg-div]
     [:div.warn @warn]
     [:div.error @error]]))

;; -------------------------
;; Page

(defn get-params []
  (let [params (.-search (.-location js/window))]
    (when (not (= "" params))
        (load-data-from-params (.-search (.-location js/window))))))


(defn home-page []
  (find-region)
  (get-params)
  [:div.page
   [:link {:href "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" :rel "stylesheet"}]
;   @local-state
   [:div.main [controls disp-opts-state]]])
