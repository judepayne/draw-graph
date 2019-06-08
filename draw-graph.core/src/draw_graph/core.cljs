(ns ^:figwheel-hooks draw-graph.core
  (:require
   [goog.dom :as gdom]
   [reagent.core :as reagent :refer [atom]]
   [draw-graph.about :refer [about-page]]
   [draw-graph.home :refer [home-page]]
   [draw-graph.help :refer [help-page]]
   [secretary.core :as secretary :include-macros true]
   [accountant.core :as accountant]))


;; -------------------------
;; Current page

(declare page)

(defn current-page []
  [:div
       [:header
        [:p [:a {:on-click #(accountant/navigate! "/")} "Home"] " | "
         [:a {:on-click #(accountant/navigate! "/help")} "help"] " | "
         [:a {:on-click #(accountant/navigate! "/about")} "about"]]]
       [page]
       [:footer
        [:p
         [:span.site "draw-graph"] " is a free utility by "
         [:a {:href "https://github.com/judepayne" :tabIndex "0"}
          "Jude Payne"] "."]]])

(def selected-page (atom home-page))

(defn page []
  [@selected-page])

;; -------------------------
;; Routes

(secretary/defroute "/" []
  (reset! selected-page home-page))

(secretary/defroute "/about" []
  (reset! selected-page about-page))

(secretary/defroute "/help" []
  (reset! selected-page help-page))


(defn get-app-element []
  (gdom/getElement "app"))


(defn mount [el]
  (reagent/render-component [current-page] el))

(defn mount-app-element []
  (when-let [el (get-app-element)]
    (mount el)))

;; conditionally start your application based on the presence of an "app" element
;; this is particularly helpful for testing this ns without launching the app
(defn init! []
    (accountant/configure-navigation!
     {:nav-handler
      (fn [path]
        (secretary/dispatch! path))
      :path-exists?
      (fn [path]
        (secretary/locate-route path))})
    (accountant/dispatch-current!)
    (mount-app-element))


(init!)


;; specify reload hook with ^;after-load metadata
(defn ^:after-load on-reload []
  (mount-app-element)
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
