(ns casa-financas.views.admin
  (:require [re-frame.core :as rf]
            [reagent.core :as r]
            [casa-financas.utils :as u]
            [casa-financas.components.comum :as c]
            [casa-financas.views.modais :as modais]))

(def pessoas-ids ["andre" "bianca" "fernanda" "bruna"])

(declare cell-number)

;; =========================================================================
;; Header
;; =========================================================================

(defn header []
  (let [mes-atual @(rf/subscribe [:mes-atual])]
    [:div {:class "px-9 py-5 flex items-center justify-between"}
     [:div {:class "flex items-center gap-2.5"}
      [:div {:class "w-7 h-7 rounded-lg bg-ink flex items-center justify-center text-cream text-sm font-bold"}
       "F"]
      [:span {:class "display text-lg"} "O Fiscal"]
      [:span {:class "ml-1 text-[10px] font-bold uppercase tracking-[0.5px] text-ink-3 px-2 py-0.5 rounded-pill bg-panel-2"}
       "dashboard"]]
     [:div {:class "flex items-center bg-panel border border-rule rounded-pill px-1 py-1"}
      [:button {:class    "w-7 h-7 rounded-full text-ink-2 hover:bg-panel-2 text-sm leading-none transition-colors"
                :on-click #(rf/dispatch [:mes-anterior])} "‹"]
      [:span {:class "num text-xs font-bold px-3 lowercase"}
       (str (u/mes-nome (:mes mes-atual)) " · " (:ano mes-atual))]
      [:button {:class    "w-7 h-7 rounded-full text-ink-2 hover:bg-panel-2 text-sm leading-none transition-colors"
                :on-click #(rf/dispatch [:mes-proximo])} "›"]]]))

;; =========================================================================
;; Hero (estilo Cash)
;; =========================================================================

(defn hero []
  (let [mes-atual    @(rf/subscribe [:mes-atual])
        despesas-mes @(rf/subscribe [:despesas-do-mes])
        total-prev   @(rf/subscribe [:total-previsto-mes])
        total-pago   @(rf/subscribe [:total-pago-mes])
        rabo         @(rf/subscribe [:rabo-cartao-ano])
        posicoes     (mapv (fn [pid] [pid @(rf/subscribe [:posicao-pessoa-ano pid])])
                           pessoas-ids)
        devedores    (filter (fn [[_ pos]] (< pos 0)) posicoes)
        deficit-tot  (reduce + 0 (map second devedores))
        pct          (if (> total-prev 0) (min 100 (* 100 (/ total-pago total-prev))) 0)
        n-pagas      (count (filter :pago despesas-mes))
        n-vencidas   (count (filter #(= (u/despesa-status %) :vencida) despesas-mes))
        n-pendentes  (count (filter #(= (u/despesa-status %) :pendente) despesas-mes))
        saldo-conta  @(rf/subscribe [:saldo-conta])]
    [:section {:class "px-9 pb-6"}
     [:div {:class "grid grid-cols-12 gap-4"}
      ;; Hero principal (col-span-7)
      [:div {:class "col-span-12 lg:col-span-7 relative overflow-hidden bg-panel rounded-panel border border-rule p-7 shadow-soft"
             :style {:background "linear-gradient(135deg, #FFFFFF 0%, #FFFFFF 60%, #FFF1E5 100%)"}}
       [:div {:class "absolute -top-10 -right-10 w-52 h-52 rounded-full"
              :style {:background "#E97A3F" :opacity 0.06}}]
       [c/label (str (u/mes-nome (:mes mes-atual)) " em andamento")]
       [:div {:class "flex items-baseline gap-3 mt-2.5"}
        [:span {:class "display num text-[64px] leading-none"}
         (u/formatar-valor-br total-pago)]
        [:span {:class "num text-lg text-ink-2 font-semibold"}
         (str "de " (u/formatar-valor-br total-prev))]]
       [:p {:class "text-[11px] text-ink-3 font-semibold mt-1.5"}
        (str "pago até hoje · " (Math/round pct) "% das despesas previstas")]
       ;; Progresso
       [:div {:class "mt-6"}
        [:div {:class "h-2.5 bg-panel-2 rounded-pill overflow-hidden"}
         [:div {:class "h-full rounded-pill"
                :style {:width      (str pct "%")
                        :background "linear-gradient(90deg, #231C12 0%, #E97A3F 100%)"}}]]
        [:div {:class "flex justify-between mt-2 num text-[11.5px] text-ink-3 font-semibold"}
         [:span (str "pago " (u/formatar-valor-br total-pago))]
         [:span (str "a pagar " (u/formatar-valor-br (- total-prev total-pago)))]]]
       ;; Status pills
       [:div {:class "flex gap-2 mt-5 flex-wrap"}
        (when (> n-vencidas 0)
          [:span {:class "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-pill text-[11.5px] font-bold text-bad"
                  :style {:background "#FBEEEE"}}
           "● " n-vencidas " vencida" (when (> n-vencidas 1) "s")])
        (when (> n-pendentes 0)
          [:span {:class "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-pill text-[11.5px] font-bold text-warn"
                  :style {:background "#FDF6E7"}}
           "● " n-pendentes " a vencer"])
        (when (> n-pagas 0)
          [:span {:class "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-pill text-[11.5px] font-bold text-ok"
                  :style {:background "#EBF5EF"}}
           "● " n-pagas " paga" (when (> n-pagas 1) "s")])]]
      ;; Cards à direita (col-span-5)
      [:div {:class "col-span-12 lg:col-span-5 grid grid-cols-1 gap-4"}
       ;; Saldo conta conjunta
       [:div {:class "rounded-panel p-5 bg-panel border border-rule shadow-soft"}
        [:div {:class "flex items-center gap-2 mb-2"}
         [:span {:class "w-2.5 h-2.5 rounded-full bg-ok"}]
         [c/label "Saldo conta conjunta"]]
        [:div {:class (str "display num text-4xl "
                           (cond
                             (nil? saldo-conta)     "text-ink-3"
                             (>= saldo-conta 0)     "text-ok"
                             :else                  "text-bad"))}
         [cell-number (or saldo-conta 0)
          #(rf/dispatch [:salvar-saldo-conta %])
          {:formatter u/formatar-valor-br}]]
        [:p {:class "text-[11px] text-ink-3 font-semibold mt-1"}
         "atualizado manualmente · clique para editar"]]
       ;; Cartão em aberto (warm)
       [:div {:class "rounded-panel p-5"
              :style {:background "#FFF1E5" :border "1.5px solid #F5DDC2"}}
        [:div {:class "flex items-center gap-2 mb-2"}
         [:span {:class "w-2.5 h-2.5 rounded-full" :style {:background "#E97A3F"}}]
         [:span {:class "text-[10.5px] font-bold uppercase tracking-[0.5px]" :style {:color "#7A4F1F"}}
          "Cartão em aberto"]]
        [:div {:class "display num text-4xl" :style {:color "#7A4F1F"}}
         (u/formatar-valor-br rabo)]
        [:p {:class "text-[11px] font-semibold mt-1" :style {:color "#9A6B3A"}}
         "rabo acumulado de meses anteriores"]]
       ;; Em déficit
       (when (seq devedores)
         [:div {:class "rounded-panel border border-rule bg-panel p-5 shadow-soft"}
          [:div {:class "flex items-center gap-2 mb-2"}
           [:span {:class "w-2.5 h-2.5 rounded-full bg-bad"}]
           [c/label "Em déficit"]
           [:span {:class "ml-auto inline-flex items-center px-2 py-0.5 rounded-pill text-[10.5px] font-bold text-bad"
                   :style {:background "#FBEEEE"}}
            (str (count devedores) " pessoa" (when (> (count devedores) 1) "s"))]]
          [:div {:class "display num text-4xl text-bad"}
           (u/formatar-valor-br deficit-tot)]
          [:p {:class "text-[11px] text-ink-3 font-semibold mt-1"}
           "aporte abaixo da cota justa"]])]]]))

;; =========================================================================
;; Posição acumulada
;; =========================================================================

(defn card-posicao [pessoa-id]
  (let [pos       @(rf/subscribe [:posicao-pessoa-ano pessoa-id])
        cor       (u/pessoa-cor pessoa-id)
        positivo? (>= pos 0)]
    [:div {:class "bg-panel rounded-panel border border-rule p-5 shadow-soft"}
     [:div {:class "flex items-center gap-3 mb-3"}
      [:div {:class "w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-base"
             :style {:background-color cor}}
       (u/pessoa-inicial pessoa-id)]
      [:div
       [:p {:class "text-[14px] font-bold text-ink"} (u/pessoa-nome pessoa-id)]
       [:span {:class (str "inline-flex items-center px-2 py-0.5 rounded-pill text-[10.5px] font-bold mt-0.5 "
                           (if positivo? "text-ok" "text-bad"))
               :style {:background (if positivo? "#EBF5EF" "#FBEEEE")}}
        (if positivo? "✓ credor" "⚠ devedor")]]]
     [:p {:class (str "display num text-3xl leading-[1.05] " (if positivo? "text-ok" "text-bad"))}
      (str (when positivo? "+") (u/formatar-valor-br pos))]
     [:p {:class "text-[11px] text-ink-3 font-semibold mt-1.5"}
      (if positivo? "cobre dos outros" "deve aos outros")]]))

(defn painel-posicao []
  [:section {:class "px-9 pb-6"}
   [:div {:class "flex items-baseline justify-between mb-3"}
    [:div
     [:h2 {:class "display text-[22px]"} "Quem está em paz, quem está em débito"]
     [:p {:class "text-[11px] text-ink-3 font-semibold mt-0.5"}
      "Posição acumulada do ano"]]]
   [:div {:class "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"}
    (for [pid pessoas-ids]
      ^{:key pid}
      [card-posicao pid])]])

;; =========================================================================
;; Cells editáveis
;; =========================================================================

(defn cell-text
  [valor on-save & [{:keys [class placeholder]}]]
  (let [editing? (r/atom false)
        novo     (r/atom (or valor ""))]
    (fn [valor on-save & [{:keys [class placeholder]}]]
      (if @editing?
        [:input {:type        "text"
                 :class       (str "cell-editable w-full text-[13px] focus:outline-none " class)
                 :data-editing true
                 :auto-focus  true
                 :value       @novo
                 :on-change   #(reset! novo (.. % -target -value))
                 :on-blur     (fn []
                                (when (not= @novo (or valor ""))
                                  (on-save @novo))
                                (reset! editing? false))
                 :on-key-down (fn [e]
                                (case (.-key e)
                                  "Enter"  (do (when (not= @novo (or valor "")) (on-save @novo))
                                               (reset! editing? false))
                                  "Escape" (do (reset! novo (or valor ""))
                                               (reset! editing? false))
                                  nil))}]
        [:div {:class    (str "cell-editable text-[13px] " class)
               :on-click (fn [] (reset! novo (or valor "")) (reset! editing? true))}
         (if (seq (or valor "")) valor [:span {:class "text-ink-3 italic"} (or placeholder "—")])]))))

(defn cell-number
  [valor on-save & [{:keys [class step formatter]}]]
  (let [editing? (r/atom false)
        novo     (r/atom (str (or valor "")))]
    (fn [valor on-save & [{:keys [class step formatter]}]]
      (if @editing?
        [:input {:type        "number"
                 :step        (or step "0.01")
                 :class       (str "cell-editable w-full num text-[13px] text-right focus:outline-none " class)
                 :data-editing true
                 :auto-focus  true
                 :value       @novo
                 :on-change   #(reset! novo (.. % -target -value))
                 :on-blur     (fn []
                                (let [v (js/parseFloat @novo)]
                                  (when (and (not (js/isNaN v)) (not= v valor))
                                    (on-save v)))
                                (reset! editing? false))
                 :on-key-down (fn [e]
                                (case (.-key e)
                                  "Enter"  (do (let [v (js/parseFloat @novo)]
                                                 (when (and (not (js/isNaN v)) (not= v valor))
                                                   (on-save v)))
                                               (reset! editing? false))
                                  "Escape" (do (reset! novo (str (or valor "")))
                                               (reset! editing? false))
                                  nil))}]
        [:div {:class    (str "cell-editable num text-[13px] text-right " class)
               :on-click (fn [] (reset! novo (str (or valor ""))) (reset! editing? true))}
         (if formatter (formatter valor) (str valor))]))))

(defn cell-select
  [valor opcoes on-save & [{:keys [class display-fn]}]]
  (let [editing? (r/atom false)]
    (fn [valor opcoes on-save & [{:keys [class display-fn]}]]
      (let [label-fn (or display-fn
                         (fn [v] (or (second (first (filter #(= (first %) v) opcoes))) v)))]
        (if @editing?
          [:select {:class       (str "cell-editable text-[13px] focus:outline-none " class)
                    :data-editing true
                    :auto-focus  true
                    :value       (or valor "")
                    :on-change   (fn [e]
                                   (let [v (.. e -target -value)]
                                     (when (not= v valor) (on-save v))
                                     (reset! editing? false)))
                    :on-blur     #(reset! editing? false)}
           (for [[v l] opcoes]
             ^{:key v}
             [:option {:value v} l])]
          [:div {:class    (str "cell-editable text-[13px] " class)
                 :on-click #(reset! editing? true)}
           (label-fn valor)])))))

(defn cell-toggle [valor on-toggle]
  [:button {:class    (str "w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors "
                           (if valor
                             "bg-ok border-ok text-white"
                             "border-rule text-transparent hover:border-ink-3"))
            :on-click on-toggle}
   "✓"])

;; =========================================================================
;; Helpers visuais
;; =========================================================================

(defn divisao-resumida [d]
  (let [div (:divisao d)]
    [:div {:class "flex items-center gap-1.5"}
     [:span {:class "num text-[11.5px] text-ink-2 font-semibold"}
      (str (or (:andre div) 0) "/"
           (or (:bianca div) 0) "/"
           (or (:fernanda div) 0) "/"
           (or (:bruna div) 0))]
     [c/barra-divisao div]]))

(defn pagadores-display [d]
  [:div {:class "flex items-center gap-1"}
   (for [pid (take 4 (:pagadores d))]
     ^{:key pid}
     [c/chip-pessoa-mini pid])])

(defn status-dot-d [d]
  (let [estado    (u/despesa-status d)
        st-design (case estado :paga :pago :vencida :vencida :pendente :a-vencer)]
    [c/status-dot st-design]))

;; =========================================================================
;; Tabela de despesas
;; =========================================================================

(defn linha-despesa [d]
  [:tr {:class "border-t border-rule-soft hover:bg-panel-2 transition-colors"}
   [:td {:class "px-4 py-3 num font-semibold text-ink-2 w-14"}
    [cell-number (:dia_do_mes d)
     #(rf/dispatch [:atualizar-despesa-inline (:id d) :dia_do_mes (int %)])
     {:step "1"}]]
   [:td {:class "px-4 py-3"}
    [cell-text (:descricao d)
     #(rf/dispatch [:atualizar-despesa-inline (:id d) :descricao %])]]
   [:td {:class "px-4 py-3"}
    [cell-number (:valor d)
     #(rf/dispatch [:atualizar-despesa-inline (:id d) :valor %])
     {:formatter u/formatar-valor-br}]]
   [:td {:class "px-4 py-3 w-24"}
    [cell-select (:forma_pagamento d)
     [["pix" "pix"] ["credito" "cartão"]]
     #(rf/dispatch [:atualizar-despesa-inline (:id d) :forma_pagamento %])]]
   [:td {:class    "px-4 py-3 cursor-pointer"
         :on-click #(rf/dispatch [:abrir-modal :editar-despesa d])}
    [pagadores-display d]]
   [:td {:class    "px-4 py-3 cursor-pointer w-32"
         :on-click #(rf/dispatch [:abrir-modal :editar-despesa d])}
    [divisao-resumida d]]
   [:td {:class "px-4 py-3 w-24"}
    [status-dot-d d]]
   [:td {:class "px-4 py-3 text-center w-12"}
    [cell-toggle (:pago d)
     #(if (:pago d)
        (rf/dispatch [:desmarcar-pago (:id d)])
        (rf/dispatch [:marcar-pago (:id d)]))]]
   [:td {:class "px-4 py-3 w-8 text-center"}
    [:button {:class    "text-ink-3 hover:text-bad transition-colors text-sm"
              :title    "Deletar"
              :on-click #(when (js/confirm (str "Deletar \"" (:descricao d) "\"?"))
                           (rf/dispatch [:deletar-despesa (:id d)]))}
     "✕"]]])

(defn fatura-row []
  (let [fatura @(rf/subscribe [:fatura])
        total  @(rf/subscribe [:total-credito-mes])
        pago   (or (:valor_pago fatura) 0)
        status (cond
                 (and (> total 0) (>= pago total)) :paga
                 (> pago 0)                        :parcial
                 :else                              :pendente)]
    [:tr {:class "border-t-2 border-rule"
          :style {:background "#FFF7EE"}}
     [:td {:class "px-4 py-3 text-center"} "💳"]
     [:td {:class "px-4 py-3 font-bold" :style {:color "#3F2A0E"}}
      "Fatura cartão"]
     [:td {:class "px-4 py-3 num font-bold" :style {:color "#7A4F1F"}}
      (str (u/formatar-valor-br pago) " / " (u/formatar-valor-br total))]
     [:td {:class "px-4 py-3" :col-span 4}
      [:span {:class "inline-flex items-center gap-1.5 text-[11.5px] font-bold"
              :style {:color (case status :paga "#2E8254" :parcial "#D08A2A" "#A99A82")}}
       [:span {:class "w-1.5 h-1.5 rounded-full"
               :style {:background-color (case status :paga "#2E8254" :parcial "#D08A2A" "#A99A82")}}]
       (case status :paga "Paga" :parcial "Parcial" "Pendente")]]
     [:td {:class "px-4 py-3 text-center"}
      [:button {:class    "px-3 py-1 bg-ink text-cream text-xs rounded-pill font-bold hover:bg-ink-2"
                :on-click #(rf/dispatch [:abrir-modal :pagamento-fatura fatura])}
       "Pagar"]]
     [:td]]))

(defn tabela-despesas []
  (let [despesas @(rf/subscribe [:despesas-do-mes])
        ordenadas (sort-by (fn [d] [(:forma_pagamento d) (:dia_do_mes d)]) despesas)]
    [:section {:class "px-9 pb-6"}
     [:div {:class "flex items-center justify-between mb-3"}
      [:h2 {:class "display text-[22px]"} "Despesas do mês"]
      [:button {:class    "px-4 py-2 bg-ink text-cream rounded-pill text-[13px] font-bold hover:bg-ink-2 transition-colors"
                :on-click #(rf/dispatch [:abrir-modal :nova-despesa {}])}
       "+ Nova despesa"]]
     [:div {:class "bg-panel rounded-panel border border-rule overflow-hidden shadow-soft"}
      [:table {:class "w-full"}
       [:thead
        [:tr {:class "bg-cream"}
         [:th {:class "px-4 py-3 text-left text-[11px] font-bold text-ink-2 uppercase tracking-[0.4px] w-14"} "Dia"]
         [:th {:class "px-4 py-3 text-left text-[11px] font-bold text-ink-2 uppercase tracking-[0.4px]"} "Descrição"]
         [:th {:class "px-4 py-3 text-right text-[11px] font-bold text-ink-2 uppercase tracking-[0.4px] w-32"} "Valor"]
         [:th {:class "px-4 py-3 text-left text-[11px] font-bold text-ink-2 uppercase tracking-[0.4px] w-24"} "Forma"]
         [:th {:class "px-4 py-3 text-left text-[11px] font-bold text-ink-2 uppercase tracking-[0.4px] w-32"} "Pagador"]
         [:th {:class "px-4 py-3 text-left text-[11px] font-bold text-ink-2 uppercase tracking-[0.4px] w-32"} "Divisão"]
         [:th {:class "px-4 py-3 text-left text-[11px] font-bold text-ink-2 uppercase tracking-[0.4px] w-24"} "Status"]
         [:th {:class "px-4 py-3 text-center text-[11px] font-bold text-ink-2 uppercase tracking-[0.4px] w-12"} "Pago"]
         [:th {:class "w-8"}]]]
       [:tbody
        [fatura-row]
        (for [d ordenadas]
          ^{:key (:id d)}
          [linha-despesa d])
        (when (empty? ordenadas)
          [:tr [:td {:col-span 9 :class "px-4 py-8 text-center text-ink-3 text-sm font-semibold"}
                "Nenhuma despesa neste mês"]])]]]]))

;; =========================================================================
;; Tabela de entradas
;; =========================================================================

(defn linha-entrada [e]
  [:tr {:class "border-t border-rule-soft hover:bg-panel-2 transition-colors"}
   [:td {:class "px-4 py-3 w-32"}
    [cell-text (:data e)
     #(rf/dispatch [:atualizar-entrada-inline (:id e) :data %])]]
   [:td {:class "px-4 py-3 w-32"}
    [cell-select (:pessoa_id e)
     [["andre" "André"] ["bianca" "Bianca"] ["fernanda" "Fernanda"] ["bruna" "Bruna"]]
     #(rf/dispatch [:atualizar-entrada-inline (:id e) :pessoa_id %])]]
   [:td {:class "px-4 py-3 w-32 text-ok num font-bold"}
    [cell-number (:valor e)
     #(rf/dispatch [:atualizar-entrada-inline (:id e) :valor %])
     {:formatter u/formatar-valor-br}]]
   [:td {:class "px-4 py-3"}
    [cell-text (:descricao e)
     #(rf/dispatch [:atualizar-entrada-inline (:id e) :descricao %])
     {:placeholder "(sem descrição)"}]]
   [:td {:class "px-4 py-3 w-8 text-center"}
    [:button {:class    "text-ink-3 hover:text-bad text-sm transition-colors"
              :title    "Deletar"
              :on-click #(when (js/confirm "Deletar entrada?")
                           (rf/dispatch [:deletar-entrada (:id e)]))}
     "✕"]]])

(defn tabela-entradas []
  (let [entradas @(rf/subscribe [:entradas-do-mes])
        ordenadas (sort-by :data entradas)]
    [:section {:class "px-9 pb-6"}
     [:div {:class "flex items-center justify-between mb-3"}
      [:h2 {:class "display text-[22px]"} "Entradas do mês"]
      [:button {:class    "px-4 py-2 bg-ink text-cream rounded-pill text-[13px] font-bold hover:bg-ink-2 transition-colors"
                :on-click #(rf/dispatch [:abrir-modal :nova-entrada {}])}
       "+ Nova entrada"]]
     [:div {:class "bg-panel rounded-panel border border-rule overflow-hidden shadow-soft"}
      [:table {:class "w-full"}
       [:thead
        [:tr {:class "bg-cream"}
         [:th {:class "px-4 py-3 text-left text-[11px] font-bold text-ink-2 uppercase tracking-[0.4px] w-32"} "Data"]
         [:th {:class "px-4 py-3 text-left text-[11px] font-bold text-ink-2 uppercase tracking-[0.4px] w-32"} "Pessoa"]
         [:th {:class "px-4 py-3 text-right text-[11px] font-bold text-ink-2 uppercase tracking-[0.4px] w-32"} "Valor"]
         [:th {:class "px-4 py-3 text-left text-[11px] font-bold text-ink-2 uppercase tracking-[0.4px]"} "Descrição"]
         [:th {:class "w-8"}]]]
       [:tbody
        (for [e ordenadas]
          ^{:key (:id e)}
          [linha-entrada e])
        (when (empty? ordenadas)
          [:tr [:td {:col-span 5 :class "px-4 py-8 text-center text-ink-3 text-sm font-semibold"}
                "Nenhuma entrada neste mês"]])]]]]))

;; =========================================================================
;; Análise
;; =========================================================================

(defn barra-horizontal [pct cor]
  [:div {:class "h-2 bg-panel-2 rounded-pill overflow-hidden"}
   [:div {:class "h-full rounded-pill"
          :style {:width            (str (max 0 (min 100 pct)) "%")
                  :background-color cor}}]])

(defn card-top-categorias []
  (let [cats  @(rf/subscribe [:top-categorias-mes])
        max-v (or (:total (first cats)) 1)]
    [:div {:class "bg-panel rounded-panel border border-rule p-5 shadow-soft"}
     [:h3 {:class "display text-base mb-3"} "Top categorias do mês"]
     (if (empty? cats)
       [:p {:class "text-sm text-ink-3 py-4 text-center font-semibold"} "Sem despesas neste mês"]
       [:div {:class "space-y-3"}
        (for [{:keys [categoria total count]} (take 8 cats)]
          ^{:key categoria}
          [:div
           [:div {:class "flex items-center justify-between mb-1"}
            [:div
             [:span {:class "text-[13px] font-bold text-ink"} categoria]
             [:span {:class "text-[10.5px] text-ink-3 font-semibold ml-1"} (str "(" count ")")]]
            [:span {:class "num text-[13px] font-bold"} (u/formatar-valor-br total)]]
           [barra-horizontal (* 100 (/ total max-v)) "#231C12"]])])]))

(defn card-pessoa-mes []
  (let [tot-mes  @(rf/subscribe [:total-previsto-mes])
        max-v    (max tot-mes 1)]
    [:div {:class "bg-panel rounded-panel border border-rule p-5 shadow-soft"}
     [:h3 {:class "display text-base mb-3"} "Cota vs aporte (este mês)"]
     [:div {:class "space-y-3"}
      (for [pid pessoas-ids]
        (let [obrig    @(rf/subscribe [:obrigacao-pessoa-mes pid])
              entradas @(rf/subscribe [:entradas-do-mes])
              aporte   (reduce + 0 (map :valor (filter #(= (:pessoa_id %) pid) entradas)))
              diff     (- aporte obrig)
              cor      (u/pessoa-cor pid)
              positivo? (>= diff 0)]
          ^{:key pid}
          [:div
           [:div {:class "flex items-center justify-between mb-1"}
            [:div {:class "flex items-center gap-2"}
             [c/avatar pid {:size "sm"}]
             [:span {:class "text-[13px] font-bold text-ink"} (u/pessoa-nome pid)]]
            [:span {:class (str "num text-[13px] font-bold " (if positivo? "text-ok" "text-bad"))}
             (str (when positivo? "+") (u/formatar-valor-br diff))]]
           [:div {:class "flex gap-1.5 num text-[10.5px] text-ink-3 font-semibold mb-1"}
            [:span "cota " (u/formatar-valor-br obrig)]
            [:span "·"]
            [:span "aporte " (u/formatar-valor-br aporte)]]
           [barra-horizontal (* 100 (/ obrig max-v)) cor]]))]]))

(defn card-evolucao-mensal []
  (let [evolucao @(rf/subscribe [:evolucao-mensal])]
    [:div {:class "bg-panel rounded-panel border border-rule p-5 shadow-soft"}
     [:h3 {:class "display text-base mb-3"} "Evolução mensal"]
     [:div {:class "overflow-x-auto"}
      [:table {:class "w-full"}
       [:thead
        [:tr {:class "border-b border-rule"}
         [:th {:class "px-3 py-2 text-left text-[10.5px] font-bold text-ink-2 uppercase tracking-[0.4px]"} "Mês"]
         [:th {:class "px-3 py-2 text-right text-[10.5px] font-bold text-ink-2 uppercase tracking-[0.4px]"} "Entradas"]
         [:th {:class "px-3 py-2 text-right text-[10.5px] font-bold text-ink-2 uppercase tracking-[0.4px]"} "Saídas"]
         [:th {:class "px-3 py-2 text-right text-[10.5px] font-bold text-ink-2 uppercase tracking-[0.4px]"} "Saldo"]
         [:th {:class "px-3 py-2 text-right text-[10.5px] font-bold text-ink-2 uppercase tracking-[0.4px]"} "Rabo"]]]
       [:tbody
        (for [{:keys [mes entradas saidas rabo]} evolucao]
          (let [saldo (- entradas saidas)]
            ^{:key mes}
            [:tr {:class "border-t border-rule-soft"}
             [:td {:class "px-3 py-2 text-[13px] font-semibold text-ink"} (u/mes-nome mes)]
             [:td {:class "px-3 py-2 text-right num text-[13px] text-ok font-semibold"} (u/formatar-valor-br entradas)]
             [:td {:class "px-3 py-2 text-right num text-[13px] text-ink-2 font-semibold"} (u/formatar-valor-br saidas)]
             [:td {:class (str "px-3 py-2 text-right num text-[13px] font-bold "
                               (if (>= saldo 0) "text-ok" "text-bad"))}
              (str (when (>= saldo 0) "+") (u/formatar-valor-br saldo))]
             [:td {:class "px-3 py-2 text-right num text-[13px] font-semibold"
                   :style {:color (if (zero? rabo) "#A99A82" "#E97A3F")}}
              (if (zero? rabo) "—" (u/formatar-valor-br rabo))]]))]]]]))

(defn card-resumo []
  (let [tot-ent  @(rf/subscribe [:total-entradas-mes])
        tot-prev @(rf/subscribe [:total-previsto-mes])
        tot-pago @(rf/subscribe [:total-pago-mes])
        rabo     @(rf/subscribe [:rabo-cartao-ano])]
    [:div {:class "bg-panel rounded-panel border border-rule p-5 shadow-soft"}
     [:h3 {:class "display text-base mb-3"} "Resumo do mês"]
     [:div {:class "grid grid-cols-2 gap-3"}
      [:div {:class "p-3 rounded-panel" :style {:background "#EBF5EF"}}
       [c/label "Entradas"]
       [:p {:class "display num text-lg text-ok mt-1"} (u/formatar-valor-br tot-ent)]]
      [:div {:class "p-3 rounded-panel bg-panel-2"}
       [c/label "Despesas previstas"]
       [:p {:class "display num text-lg text-ink mt-1"} (u/formatar-valor-br tot-prev)]]
      [:div {:class "p-3 rounded-panel bg-panel-2"}
       [c/label "Pago"]
       [:p {:class "display num text-lg text-ink-2 mt-1"} (u/formatar-valor-br tot-pago)]]
      [:div {:class "p-3 rounded-panel" :style {:background "#FFF1E5"}}
       [c/label "Rabo cartão (ano)"]
       [:p {:class "display num text-lg mt-1" :style {:color "#7A4F1F"}}
        (u/formatar-valor-br rabo)]]]]))

(defn painel-analise []
  [:section {:class "px-9 pb-6"}
   [:h2 {:class "display text-[22px] mb-3"} "Análise"]
   [:div {:class "grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4"}
    [card-resumo]
    [card-pessoa-mes]
    [card-top-categorias]]
   [card-evolucao-mensal]])

;; =========================================================================
;; Saldos por pessoa (todo o historico): pagou / custo / saldo mes / acumulado
;; =========================================================================

(defn painel-saldos []
  (let [resumo @(rf/subscribe [:resumo-mensal-pessoas])]
    [:section {:class "px-9 pb-6"}
     [:div {:class "mb-3"}
      [:h2 {:class "display text-[22px]"} "Saldos por pessoa"]
      [:p {:class "text-[11px] text-ink-3 font-semibold mt-0.5"}
       "Pagou (aporte) · custo (cota) · saldo do mês · acumulado — todo o histórico"]]
     ;; cards de acumulado TOTAL
     [:div {:class "grid grid-cols-2 lg:grid-cols-4 gap-4 mb-5"}
      (for [pid pessoas-ids]
        (let [tot  @(rf/subscribe [:posicao-pessoa-total pid])
              pos? (>= tot 0)]
          ^{:key pid}
          [:div {:class "bg-panel rounded-panel border border-rule p-5 shadow-soft"}
           [:div {:class "flex items-center gap-2 mb-2"}
            [c/avatar pid {:size "sm"}]
            [:span {:class "text-[13px] font-bold text-ink"} (u/pessoa-nome pid)]]
           [:p {:class (str "display num text-3xl leading-[1.05] " (if pos? "text-ok" "text-bad"))}
            (str (when pos? "+") (u/formatar-valor-br tot))]
           [:p {:class "text-[11px] text-ink-3 font-semibold mt-1"}
            (if pos? "credor (acumulado total)" "devedor (acumulado total)")]]))]
     ;; tabela mensal por pessoa
     [:div {:class "grid grid-cols-1 lg:grid-cols-2 gap-4"}
      (for [pid pessoas-ids]
        ^{:key pid}
        [:div {:class "bg-panel rounded-panel border border-rule p-5 shadow-soft"}
         [:div {:class "flex items-center gap-2 mb-3"}
          [c/avatar pid {:size "sm"}]
          [:span {:class "text-[14px] font-bold text-ink"} (u/pessoa-nome pid)]]
         [:div {:class "overflow-x-auto"}
          [:table {:class "w-full"}
           [:thead
            [:tr {:class "border-b border-rule"}
             [:th {:class "px-2 py-1.5 text-left text-[10.5px] font-bold text-ink-2 uppercase tracking-[0.4px]"} "Mês"]
             [:th {:class "px-2 py-1.5 text-right text-[10.5px] font-bold text-ink-2 uppercase tracking-[0.4px]"} "Pagou"]
             [:th {:class "px-2 py-1.5 text-right text-[10.5px] font-bold text-ink-2 uppercase tracking-[0.4px]"} "Custo"]
             [:th {:class "px-2 py-1.5 text-right text-[10.5px] font-bold text-ink-2 uppercase tracking-[0.4px]"} "Saldo mês"]
             [:th {:class "px-2 py-1.5 text-right text-[10.5px] font-bold text-ink-2 uppercase tracking-[0.4px]"} "Acumulado"]]]
           [:tbody
            (for [{:keys [ano mes pessoas]} resumo]
              (let [d (get pessoas pid)]
                ^{:key (str ano "-" mes)}
                [:tr {:class "border-t border-rule-soft"}
                 [:td {:class "px-2 py-1.5 text-[12px] font-semibold text-ink"}
                  (str (u/mes-nome mes) "/" (- ano 2000))]
                 [:td {:class "px-2 py-1.5 text-right num text-[12px] text-ok font-semibold"}
                  (u/formatar-valor-br (:aporte d))]
                 [:td {:class "px-2 py-1.5 text-right num text-[12px] text-ink-2"}
                  (u/formatar-valor-br (:cota d))]
                 [:td {:class (str "px-2 py-1.5 text-right num text-[12px] font-semibold "
                                   (if (>= (:saldo d) 0) "text-ok" "text-bad"))}
                  (str (when (>= (:saldo d) 0) "+") (u/formatar-valor-br (:saldo d)))]
                 [:td {:class (str "px-2 py-1.5 text-right num text-[12px] font-bold "
                                   (if (>= (:acumulado d) 0) "text-ok" "text-bad"))}
                  (str (when (>= (:acumulado d) 0) "+") (u/formatar-valor-br (:acumulado d)))]]))]]]])]]))

;; =========================================================================
;; View principal
;; =========================================================================

(defn admin []
  [:div {:class "min-h-screen bg-cream font-sans text-ink"}
   [header]
   [hero]
   [painel-posicao]
   [painel-saldos]
   [tabela-despesas]
   [tabela-entradas]
   [painel-analise]
   [modais/modais]
   [:div {:class "h-12"}]])
