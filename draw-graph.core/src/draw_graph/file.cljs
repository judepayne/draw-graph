(ns draw-graph.file
  (:require
   [cljs.core.async :refer [put! chan <! >!]])
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]))


(def log (.-log js/console))

;; -------------------------
;; File reader

;; thanks: https://gist.github.com/paultopia/6fc396884c223b619f2e2ef199866fdd

(def ^:private first-file
  (map (fn [e]
         (let [target (.-currentTarget e)
               file (-> target .-files (aget 0))]
           (set! (.-value target) "")
           file))))


(def ^:private extract-result
  (map (fn [n]
         (let [contents (:data n)]
           (assoc n :data (-> contents .-target .-result js->clj))))))


(def ^:private upload-reqs (chan 1 first-file))
(def ^:private file-reads (chan 1 extract-result))


;; Public interface to file reader

(defn file-reader-put [e]
  (put! upload-reqs e))


(defn file-reader-listen [callback]

  (go-loop []
    (let [reader (js/FileReader.)
          file (<! upload-reqs)]
      (set! (.-onload reader) #(put! file-reads {:data % :data-filename (.-name file)}))
      (.readAsText reader file)
      (recur)))

  (go-loop []
    (callback (<! file-reads))
    (recur)))


;; -------------------------
;; SVG File writer 


(defn ^:private save-file [filename t s]
  (if js/Blob
    (let [b (js/Blob. #js [s] #js {:type t})]
      (if js/window.navigator.msSaveBlob
        (js/window.navigator.msSaveBlob b filename)
        (let [link (js/document.createElement  "a")]
          (aset link "download" filename)
          (if js/window.webkitURL
            (aset link "href" (js/window.webkitURL.createObjectURL b))
            (do
              (aset link "href" (js/window.URL.createObjectURL b))
              (aset link "onclick" (fn destroy-clicked [e]
                                     (.removeChild (.-body js/document) (.-target e))))
              (aset link "style" "display" "none")
              (.appendChild (.-body js/document) link)))
          (.click link))))
    (log "Browser does not support Blob")))


(defn ^:private part-filename [& prefixes]
  (reduce
   (fn [acc cur]
     (if (= "" cur)
       acc
       (if (= acc "")
         cur
         (str acc "-" cur))))
   ""
   prefixes))

(defn ^:private svg-filename [filename & prefixes]
  (if (or (nil? filename) (= "" filename))
    (str (apply part-filename prefixes) "-" (subs (str (random-uuid)) 0 4))
    (let [l (.-length filename)]
      (str (apply part-filename prefixes) "-" (subs filename 0 (- l 4))))))


(defn save-svg [contents filename & prefixes]
  (let [fs (apply svg-filename filename prefixes)]
    (save-file fs "image/svg+xml" @contents)))
