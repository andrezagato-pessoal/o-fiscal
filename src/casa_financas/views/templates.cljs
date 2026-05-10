(ns casa-financas.views.templates
  (:require [re-frame.core :as rf]
            [clojure.string :as str]
            [casa-financas.utils :as u]
            [casa-financas.components.comum :as c]))

(defn item-template [template]
  (let [categorias @(rf/subscribe [:categorias])
        cat        (first (filter #(= (:id %) (:categoria_id template)) categorias))
        ativo?     (:ativo template)]
    [:div {:class    (str "px-3 py-3 mb-1.5 bg-panel rounded-panel border border-rule-soft "
                          "flex items-center gap-2.5 cursor-pointer active:bg-panel-2 transition-colors "
                          (when-not ativo? "opacity-55"))
           :on-click #(rf/dispatch [:abrir-modal :editar-template template])}
     [:div {:class "w-9 h-9 rounded-xl bg-panel-2 flex items-center justify-center text-base flex-shrink-0"}
      (or (:emoji cat) "📋")]
     [:div {:class "flex-1 min-w-0"}
      [:p {:class "text-[13.5px] font-bold text-ink truncate"}
       (:descricao template)]
      [:p {:class "num text-[10.5px] text-ink-3 font-semibold mt-0.5"}
       (str (if (= (:forma_pagamento_padrao template) "credito") "cartão" "pix")
            " · todo mês"
            (when (:dia_padrao template) (str " · dia " (:dia_padrao template))))]]
     [:span {:class "display num text-[13px] text-ink mr-1"}
      (u/formatar-valor-br (:valor_padrao template))]
     ;; Toggle Cash style
     [:div {:class    (str "w-10 h-6 rounded-pill p-0.5 flex items-center transition-all flex-shrink-0 "
                           (if ativo? "bg-ink justify-end" "bg-rule justify-start"))
            :on-click (fn [e]
                        (.stopPropagation e)
                        (rf/dispatch [:toggle-template (:id template)]))}
      [:div {:class "w-5 h-5 rounded-full bg-white"}]]]))

(defn templates []
  (let [templates    @(rf/subscribe [:templates])
        ativos       (filter :ativo templates)
        total-ativos (reduce + 0 (map :valor_padrao ativos))
        mes-atual    @(rf/subscribe [:mes-atual])]
    [:div {:class "flex flex-col pb-28"}
     ;; Header
     [:div {:class "px-5 pt-4 pb-3 flex items-center justify-between"}
      [:h1 {:class "display text-2xl"} "Recorrentes"]
      [:button {:class    "px-3.5 py-1.5 rounded-pill bg-panel border border-rule text-xs font-bold text-ink hover:bg-panel-2"
                :on-click #(rf/dispatch [:abrir-modal :novo-template {}])}
       "+ novo"]]
     [:div {:class "px-4"}
      ;; Banner importar
      (when (seq ativos)
        [:div {:class "rounded-panel border border-rule p-4 shadow-soft"
               :style {:background "linear-gradient(135deg, #FFFFFF 0%, #FFF1E5 100%)"}}
         [c/label (str "Se importar agora pra " (str/lower-case (u/mes-nome (:mes mes-atual))))]
         [:div {:class "flex items-baseline gap-2 mt-1"}
          [:span {:class "display num text-[26px]"} (u/formatar-valor-br total-ativos)]
          [:span {:class "text-[11px] text-ink-3 font-semibold"}
           (str (count ativos) " despesas serão criadas")]]
         [:button {:class    "mt-3 w-full py-3 rounded-pill bg-ink text-cream text-[13px] font-bold hover:bg-ink-2"
                   :on-click #(rf/dispatch [:importar-templates])}
          "Importar templates"]])
      ;; Lista
      [:div {:class "mt-5 mb-2 px-1"}
       [c/label "Lista"]]
      (if (empty? templates)
        [:div {:class "flex flex-col items-center justify-center py-12 text-ink-3"}
         [:span {:class "text-4xl mb-3 opacity-50"} "📋"]
         [:p {:class "text-sm font-semibold"} "Nenhum template"]
         [:p {:class "text-xs mt-1"} "Toque em + novo pra criar"]]
        (for [t (sort-by #(or (:dia_padrao %) 1) templates)]
          ^{:key (:id t)}
          [item-template t]))]]))
