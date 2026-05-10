(ns casa-financas.views.settings
  (:require [re-frame.core :as rf]
            [reagent.core :as r]
            [casa-financas.utils :as u]
            [casa-financas.components.comum :as c]))

(def pessoas-ids ["andre" "bianca" "fernanda" "bruna"])

(def paleta-cores
  ["#2563EB" "#7C3AED" "#DB2777" "#DC2626" "#EA580C"
   "#D97706" "#65A30D" "#966305" "#0891B2" "#eed428"
   "#221e6e" "#380f5f" "#C026D3" "#0F766E" "#15803D"])

;; -- Lista de quem mora aqui (read-only com bolinha de cor) ---------------
(defn secao-perfis [aberto-atom]
  [:div
   [:div {:class "px-1 mb-2"} [c/label "Quem mora aqui"]]
   [:div {:class "bg-panel rounded-panel border border-rule p-1"}
    (doall
     (map-indexed
      (fn [i pid]
        (let [cor    @(rf/subscribe [:cor-pessoa pid])
              ult?   (= i 3)]
          ^{:key pid}
          [:button {:class    (str "w-full flex items-center gap-3 px-3.5 py-3 transition-colors "
                                   "hover:bg-panel-2 active:bg-rule-soft "
                                   (when-not ult? "border-b border-rule-soft "))
                    :on-click #(reset! aberto-atom (if (= @aberto-atom pid) nil pid))}
           [c/avatar pid {:size "md"}]
           [:span {:class "flex-1 text-left text-[14px] font-bold text-ink"}
            (u/pessoa-nome pid)]
           [:div {:class "rounded-full"
                  :style {:width            "22px"
                          :height           "22px"
                          :background-color cor
                          :border           "2px solid #FFFFFF"
                          :box-shadow       "0 0 0 1.5px var(--rule)"}}]]))
      pessoas-ids))]])

;; -- Seletor de cor pra pessoa selecionada --------------------------------
(defn secao-cores-pessoa [aberto-atom]
  (when-let [pid @aberto-atom]
    (let [cor-atual @(rf/subscribe [:cor-pessoa pid])]
      [:div {:class "mt-5"}
       [:div {:class "px-1 mb-2"}
        [c/label (str "Cor de " (u/pessoa-nome pid))]]
       [:div {:class "bg-panel rounded-panel border border-rule p-4"}
        [:p {:class "text-[11px] text-ink-3 font-semibold mb-3"}
         "15 opções pra renovar a paleta sem mudar a personalidade."]
        [:div {:class "grid grid-cols-5 gap-2.5"}
         (for [cor paleta-cores]
           ^{:key cor}
           [:button {:class    "aspect-square rounded-full transition-all"
                     :style    {:background-color cor
                                :box-shadow       (if (= cor cor-atual)
                                                    "inset 0 0 0 3px #fff, 0 0 0 2px var(--ink)"
                                                    "inset 0 0 0 2px #fff")}
                     :on-click (fn []
                                 (rf/dispatch [:salvar-cor-pessoa pid cor])
                                 (reset! aberto-atom nil))}])]]])))

;; -- Seção conta ----------------------------------------------------------
(defn secao-conta []
  [:div {:class "mt-5"}
   [:div {:class "px-1 mb-2"} [c/label "Conta"]]
   [:div {:class "bg-panel rounded-panel border border-rule p-1"}
    [:button {:class    "w-full flex items-center gap-3 px-3.5 py-3.5 border-b border-rule-soft hover:bg-panel-2 transition-colors"
              :on-click #(rf/dispatch [:set-aba :importar])}
     [:span {:class "text-base"} "⬆"]
     [:span {:class "flex-1 text-left text-[14px] font-bold text-ink"} "Importar CSV"]
     [:span {:class "text-ink-3"} "›"]]
    [:button {:class    "w-full flex items-center gap-3 px-3.5 py-3.5 hover:bg-panel-2 transition-colors"
              :on-click #(rf/dispatch [:logout])}
     [:span {:class "text-base"} "↩"]
     [:span {:class "flex-1 text-left text-[14px] font-bold text-bad"} "Sair da conta"]]]])

;; -- View principal --------------------------------------------------------
(defn settings []
  (let [aberto (r/atom nil)]
    (fn []
      [:div {:class "flex flex-col pb-28"}
       [:div {:class "px-5 pt-4 pb-3"}
        [:h1 {:class "display text-2xl"} "Configurações"]]
       [:div {:class "px-4"}
        [secao-perfis aberto]
        [secao-cores-pessoa aberto]
        [secao-conta]
        [:p {:class "text-center mt-6 text-[10.5px] text-ink-3 font-semibold"}
         "O Fiscal · v3"]]])))
