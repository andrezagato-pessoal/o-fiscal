(ns casa-financas.core
  (:require [reagent.dom :as rdom]
            [re-frame.core :as rf]
            [casa-financas.events]
            [casa-financas.subs]
            [casa-financas.views.login :as login]
            [casa-financas.views.dashboard :as dashboard]
            [casa-financas.views.despesas :as despesas]
            [casa-financas.views.entradas :as entradas]
            [casa-financas.views.templates :as templates]
            [casa-financas.views.modais :as modais]
            [casa-financas.views.settings :as settings]
            [casa-financas.views.importar :as importar]
            [casa-financas.views.admin :as admin]))

(defn modo-admin? []
  (let [search (.. js/window -location -search)]
    (and search (clojure.string/includes? search "view=admin"))))

(defn nav-item [aba emoji label]
  (let [aba-ativa @(rf/subscribe [:aba-ativa])
        ativo?    (= aba-ativa aba)]
    [:button {:class    "flex flex-col items-center justify-center flex-1 py-1 gap-0.5 transition-opacity"
              :on-click #(rf/dispatch [:set-aba aba])}
     [:span {:class (str "text-lg leading-none "
                         (if ativo? "opacity-100" "opacity-50 grayscale"))}
      emoji]
     [:span {:class (str "text-[10px] font-bold tracking-wide "
                         (if ativo? "text-ink" "text-ink-3"))}
      label]]))

(defn nav-bottom []
  [:div {:class "fixed bottom-0 left-0 right-0 bg-panel/95 backdrop-blur-xl border-t border-rule flex items-center z-40"
         :style {:padding-bottom "calc(env(safe-area-inset-bottom) + 12px)"
                 :padding-top    "8px"}}
   [nav-item :dashboard "🏠" "Início"]
   [nav-item :despesas  "💸" "Despesas"]
   [nav-item :entradas  "💰" "Entradas"]
   [nav-item :templates "📋" "Recorr."]
   [nav-item :settings  "⚙"  "Config"]])

(defn botao-flutuante []
  [:button {:class    "fixed bottom-24 right-4 w-14 h-14 bg-ink rounded-full flex items-center justify-center text-cream text-2xl font-light z-40 shadow-fab transition-transform active:scale-95"
            :style    {:box-shadow "0 12px 24px rgba(35,28,18,0.28), 0 0 0 4px rgba(251,246,239,0.7)"}
            :on-click #(rf/dispatch [:abrir-modal :nova-acao {}])}
   "+"])

(defn tela-ativa []
  (let [aba @(rf/subscribe [:aba-ativa])]
    (case aba
      :dashboard [dashboard/dashboard]
      :despesas  [despesas/despesas]
      :entradas  [entradas/entradas]
      :templates [templates/templates]
      :importar  [importar/importar]
      :settings  [settings/settings]
      [dashboard/dashboard])))

(defn app-autenticado []
  (if (modo-admin?)
    [admin/admin]
    [:div {:class "min-h-screen bg-cream max-w-lg mx-auto relative font-sans text-ink"}
     [tela-ativa]
     [nav-bottom]
     [botao-flutuante]
     [modais/modais]]))

(defn app []
  (let [usuario @(rf/subscribe [:usuario-atual])
        loading @(rf/subscribe [:loading])]
    (cond
      loading
      [:div {:class "min-h-screen flex items-center justify-center bg-cream"}
       [:div {:class "flex flex-col items-center gap-4"}
        [:div {:class "w-10 h-10 border-2 border-ink border-t-transparent rounded-full animate-spin"}]
        [:p {:class "text-ink-2 font-bold text-sm"} "Carregando..."]]]

      usuario
      [app-autenticado]

      :else
      [login/login])))

(defn init []
  ;; Limpa qualquer Service Worker antigo registrado em versões anteriores.
  ;; Sem isso, dispositivos com SW preso continuariam servindo cache quebrado.
  (when (.-serviceWorker js/navigator)
    (-> (.getRegistrations (.-serviceWorker js/navigator))
        (.then (fn [regs]
                 (doseq [reg regs]
                   (.unregister reg))))))
  (rf/dispatch-sync [:initialize-db])
  (rdom/render [app] (.getElementById js/document "app")))