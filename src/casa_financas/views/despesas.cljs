(ns casa-financas.views.despesas
  (:require [re-frame.core :as rf]
            [reagent.core :as r]
            [casa-financas.utils :as u]
            [casa-financas.components.comum :as c]))

;; -- Sub-item de despesa de crédito (dentro da fatura expandida) ----------
(defn item-despesa-credito [despesa fatura]
  (let [total-pago (or (:valor_pago fatura) 0)
        total      (or (:valor_total fatura) 0)
        status     (cond
                     (and (> total 0) (>= total-pago total)) :pago
                     (> total-pago 0)                        :parcial
                     :else                                    :pendente)
        categorias @(rf/subscribe [:categorias])
        cat        (first (filter #(= (:id %) (:categoria_id despesa)) categorias))]
    [:div {:class    "flex items-center gap-2.5 px-3 py-2 border-b border-rule-soft last:border-0 hover:bg-panel-2 cursor-pointer"
           :on-click #(rf/dispatch [:abrir-modal :editar-despesa despesa])}
     [:span {:class "num text-[10px] text-ink-3 font-bold w-12 flex-shrink-0"}
      (str (or (:mes_compra despesa) (:mes despesa)) "/" (:dia_do_mes despesa))]
     (when cat [:span {:class "text-xs"} (:emoji cat)])
     [:span {:class (str "flex-1 min-w-0 text-[13px] truncate "
                         (if (= status :pago) "line-through text-ink-3" "text-ink-2"))}
      (:descricao despesa)]
     [:span {:class "num text-xs font-bold text-ink"}
      (u/formatar-valor-br (:valor despesa))]]))

;; -- Card da fatura cartão (warm tone) ------------------------------------
(defn card-fatura [fatura total-credito despesas-credito]
  (let [valor-pago  (or (:valor_pago fatura) 0)
        status      (cond
                      (and (> total-credito 0) (>= valor-pago total-credito)) :pago
                      (> valor-pago 0)                                         :parcial
                      :else                                                    :pendente)
        expandido?  (r/atom false)]
    (fn []
      [:div {:class "rounded-panel border overflow-hidden mb-2.5"
             :style {:background "#FFF7EE" :border-color "#F5DDC2"}}
       [:div {:class "flex items-center gap-2.5 px-3 py-3"}
        [:button {:class    "w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold flex-shrink-0"
                  :style    {:background "#FFE6CB" :color "#E97A3F"}
                  :on-click #(swap! expandido? not)}
         (if @expandido? "▴" "▾")]
        [:div {:class "w-9 h-9 rounded-xl flex items-center justify-center text-base flex-shrink-0"
               :style {:background "#FFE6CB" :color "#E97A3F"}}
         "💳"]
        [:div {:class    "flex-1 min-w-0 cursor-pointer"
               :on-click #(rf/dispatch [:abrir-modal :pagamento-fatura fatura])}
         [:p {:class "text-[13px] font-bold" :style {:color "#3F2A0E"}} "Fatura cartão"]
         [:p {:class "text-[10.5px] font-semibold mt-0.5" :style {:color "#9A6B3A"}}
          (str (count despesas-credito) " compras · "
               (case status :pago "paga" :parcial "parcial" "pendente"))]]
        [:div {:class    "text-right cursor-pointer"
               :on-click #(rf/dispatch [:abrir-modal :pagamento-fatura fatura])}
         [:p {:class "display num text-[15px]" :style {:color "#7A4F1F"}}
          (u/formatar-valor-br total-credito)]
         [:p {:class "num text-[10px] text-ink-3 font-semibold"}
          (str "pago " (u/formatar-valor-br valor-pago))]]]
       (when @expandido?
         [:div {:class "border-t border-[#F5DDC2]"}
          (for [d (sort-by (fn [d] [(or (:ano_compra d) (:ano d))
                                    (or (:mes_compra d) (:mes d))
                                    (:dia_do_mes d)])
                           despesas-credito)]
            ^{:key (:id d)}
            [item-despesa-credito d fatura])])])))

;; -- Item de despesa pix/débito (Cash row) --------------------------------
(defn item-despesa [despesa]
  (let [estado     (u/despesa-status despesa)
        ;; mapeia pra status do design
        st-design  (case estado :paga :pago :vencida :vencida :pendente :a-vencer)
        cor-status (case st-design
                     :pago     "#2E8254"
                     :vencida  "#C04545"
                     :a-vencer "#D08A2A"
                     "#A99A82")
        categorias @(rf/subscribe [:categorias])
        cat        (first (filter #(= (:id %) (:categoria_id despesa)) categorias))
        cor-border (case st-design
                     :pago     "border-l-ok"
                     :vencida  "border-l-bad"
                     :a-vencer "border-l-warn"
                     "border-l-ink-3")]
    [:div {:class    (str "bg-panel rounded-panel border border-rule border-l-[3px] " cor-border " "
                          "p-3 mb-1.5 flex items-center gap-2.5 shadow-soft "
                          "cursor-pointer active:bg-panel-2 transition-colors")
           :on-click #(rf/dispatch [:abrir-modal :editar-despesa despesa])}
     ;; Categoria icon
     [:div {:class "w-9 h-9 rounded-xl bg-panel-2 flex items-center justify-center text-base flex-shrink-0"}
      (or (:emoji cat) "💸")]
     ;; Conteudo principal
     [:div {:class "flex-1 min-w-0"}
      [:p {:class (str "text-[13.5px] font-bold leading-tight truncate "
                       (if (= st-design :pago) "text-ink-3 line-through" "text-ink"))}
       (:descricao despesa)]
      [:div {:class "flex items-center gap-1.5 mt-0.5"}
       [:span {:class "num text-[10.5px] text-ink-3 font-semibold"}
        (str (when (< (:dia_do_mes despesa) 10) "0") (:dia_do_mes despesa)
             "/" (when (< (:mes despesa) 10) "0") (:mes despesa)
             " · " (if (= (:forma_pagamento despesa) "credito") "cartão" "pix"))]
       [:span {:class "text-[10.5px] font-bold"
               :style {:color cor-status}}
        (str "· " (case st-design
                    :pago "pago"
                    :vencida "vencida"
                    :a-vencer "a vencer"
                    "pendente"))]]
      ;; Pagadores avatar mini
      [:div {:class "flex gap-1 mt-1.5"}
       (for [pid (take 4 (:pagadores despesa))]
         (let [cor (u/pessoa-cor pid)
               ini (if (= pid "conjunta") "C" (u/pessoa-inicial pid))]
           ^{:key pid}
           [:span {:class "w-4 h-4 rounded-full flex items-center justify-center text-[8px] font-bold text-white"
                   :style {:background-color cor}}
            ini]))]]
     ;; Valor
     [:div {:class (str "display num text-sm flex-shrink-0 "
                        (if (= st-design :pago) "text-ink-2" "text-ink"))}
      (u/formatar-valor-br (:valor despesa))]
     ;; Toggle pago
     [:button {:class    (str "w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors flex-shrink-0 "
                              (if (:pago despesa)
                                "bg-ok border-ok text-white"
                                "border-rule text-transparent"))
               :on-click (fn [e]
                           (.stopPropagation e)
                           (if (:pago despesa)
                             (rf/dispatch [:desmarcar-pago (:id despesa)])
                             (rf/dispatch [:marcar-pago (:id despesa)])))}
      "✓"]]))

;; -- View principal --------------------------------------------------------
(defn despesas []
  (let [filtro (r/atom :todas)]
    (fn []
      (let [despesas-mes       @(rf/subscribe [:despesas-do-mes])
            fatura             @(rf/subscribe [:fatura])
            total-credito      @(rf/subscribe [:total-credito-mes])
            templates          @(rf/subscribe [:templates])
            despesas-credito   (sort-by (fn [d] [(or (:ano_compra d) (:ano d))
                                                 (or (:mes_compra d) (:mes d))
                                                 (:dia_do_mes d)])
                                        (filter #(= (:forma_pagamento %) "credito") despesas-mes))
            despesas-debito    (filter #(not= (:forma_pagamento %) "credito") despesas-mes)
            despesas-filtradas (case @filtro
                                 :todas     despesas-debito
                                 :pendentes (filter #(not (:pago %)) despesas-debito)
                                 :pagas     (filter :pago despesas-debito))
            despesas-ordenadas (sort-by :dia_do_mes despesas-filtradas)]
        [:div {:class "flex flex-col pb-28"}
         [c/seletor-mes]
         ;; Filter pills
         [:div {:class "px-4 mb-2.5"}
          [:div {:class "flex items-center bg-panel rounded-pill border border-rule p-0.5"}
           (for [[k label] [[:todas "Todas"] [:pendentes "Pendentes"] [:pagas "Pagas"]]]
             ^{:key k}
             [:button {:class    (str "flex-1 py-1.5 rounded-pill text-xs font-bold transition-colors "
                                      (if (= @filtro k)
                                        "bg-ink text-cream"
                                        "text-ink-2 hover:text-ink"))
                       :on-click #(reset! filtro k)}
              label])]]
         ;; Conteúdo
         [:div {:class "px-4"}
          [card-fatura fatura total-credito despesas-credito]
          (if (empty? despesas-ordenadas)
            [:div {:class "flex flex-col items-center justify-center py-12 text-ink-3"}
             [:span {:class "text-4xl mb-3 opacity-50"} "💸"]
             [:p {:class "text-sm font-semibold"} "Nenhuma despesa"]
             (when (seq templates)
               [:button {:class    "mt-4 px-5 py-2.5 bg-ink text-cream rounded-pill text-sm font-bold"
                         :on-click #(rf/dispatch [:importar-templates])}
                "Importar Templates"])]
            [:div
             (for [d despesas-ordenadas]
               ^{:key (:id d)}
               [item-despesa d])
             (when (seq templates)
               [:button {:class    "w-full mt-3 py-2.5 rounded-pill text-sm font-bold text-ink bg-panel border border-rule hover:bg-panel-2"
                         :on-click #(rf/dispatch [:importar-templates])}
                "Importar Templates do Mês"])])]]))))
