(ns draw-graph.core
  (:require
    [draw-graph.about :refer [about-page]]
    [draw-graph.home :refer [home-page]]
    [draw-graph.help :refer [help-page]]
    [reagent.core :as r]
    [secretary.core :as secretary :include-macros true]
    [accountant.core :as accountant]
    [goog.events :as events]
    [goog.history.EventType :as HistoryEventType])
  (:import goog.History))


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

(def selected-page (r/atom home-page))

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

;; -------------------------
;; History
;; must be called after routes have been defined

(defn hook-browser-navigation! []
  (doto (History.)
        (events/listen
         HistoryEventType/NAVIGATE
         (fn [event]
           (println "TOKEN EVENT  " (.token event))
           (secretary/dispatch! (.-token event))))
        (.setEnabled true)))

;; -------------------------
;; Initialize app

(defn mount-root []
  (r/render [current-page] (.getElementById js/document "app")))

(defn init! []
  (accountant/configure-navigation!
   {:nav-handler
    (fn [path]
      (secretary/dispatch! path))
    :path-exists?
    (fn [path]
      (secretary/locate-route path))})
  (accountant/dispatch-current!)
  (mount-root))
