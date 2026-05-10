(ns casa-financas.views.dashboard
  (:require [re-frame.core :as rf]
            [casa-financas.utils :as u]
            [casa-financas.components.comum :as c]))

(def pessoas-ids ["andre" "bianca" "fernanda" "bruna"])

(defn calcular-saldo-pessoa [pessoa-id despesas entradas]
  (let [entradas-pessoa (filter #(= (:pessoa_id %) pessoa-id) entradas)
        total-entradas  (reduce + 0 (map :valor entradas-pessoa))
        debitos         (reduce + 0
                                (map (fn [d]
                                       (let [pct (get (:divisao d) (keyword pessoa-id) 0)]
                                         (* (:valor d) (/ pct 100))))
                                     despesas))]
    (- total-entradas debitos)))

;; -- Card de pessoa (panel sem cor de fundo) -------------------------------
(defn card-pessoa [pessoa-id despesas-mes entradas-mes]
  (let [saldo-mes  (calcular-saldo-pessoa pessoa-id despesas-mes entradas-mes)
        saldo-ant  @(rf/subscribe [:saldo-acumulado-anterior-pessoa pessoa-id])
        saldo-total (+ saldo-mes saldo-ant)
        positivo?   (>= saldo-total 0)]
    [:div {:class "bg-panel rounded-panel border border-rule p-3.5 shadow-soft"}
     [:div {:class "flex items-center gap-2 mb-2"}
      [c/avatar pessoa-id {:size "sm"}]
      [:span {:class "text-[12.5px] font-bold text-ink"} (u/pessoa-nome pessoa-id)]]
     [:p {:class (str "display num text-lg leading-[1.05] " (if positivo? "text-ok" "text-bad"))}
      (str (when (> saldo-total 0) "+") (u/formatar-valor-br saldo-total))]
     [:p {:class "text-[10px] text-ink-3 font-semibold mt-0.5"}
      (if positivo? "cobre dos outros" "deve aos outros")]]))

;; -- Header com logo + seletor de mês --------------------------------------
(defn header []
  (let [mes-atual @(rf/subscribe [:mes-atual])]
    [:div {:class "px-5 pt-4 pb-2 flex items-center justify-between"}
     [:div {:class "flex items-center gap-2"}
      [:div {:class "w-6 h-6 rounded-md bg-ink flex items-center justify-center text-cream text-xs font-bold"}
       "F"]
      [:span {:class "display text-base"} "O Fiscal"]]
     [:div {:class "flex items-center bg-panel border border-rule rounded-pill px-1 py-0.5"}
      [:button {:class    "w-6 h-6 rounded-full text-ink-2 hover:bg-panel-2 transition-colors text-sm leading-none"
                :on-click #(rf/dispatch [:mes-anterior])} "‹"]
      [:span {:class "num text-xs font-bold px-2 lowercase"}
       (str (u/mes-nome (:mes mes-atual)) " · " (:ano mes-atual))]
      [:button {:class    "w-6 h-6 rounded-full text-ink-2 hover:bg-panel-2 transition-colors text-sm leading-none"
                :on-click #(rf/dispatch [:mes-proximo])} "›"]]]))

;; -- Hero: saldo do mês ----------------------------------------------------
(defn hero []
  (let [despesas-mes @(rf/subscribe [:despesas-do-mes])
        total-prev   @(rf/subscribe [:total-previsto-mes])
        total-pago   @(rf/subscribe [:total-pago-mes])
        pct          (if (> total-prev 0) (min 100 (* 100 (/ total-pago total-prev))) 0)
        n-pagas      (count (filter :pago despesas-mes))
        n-vencidas   (count (filter #(= (u/despesa-status %) :vencida) despesas-mes))
        n-pendentes  (count (filter #(= (u/despesa-status %) :pendente) despesas-mes))]
    [:div {:class "relative overflow-hidden bg-panel rounded-panel border border-rule p-5 shadow-soft"
           :style {:background "linear-gradient(135deg, #FFFFFF 0%, #FFF1E5 100%)"}}
     ;; orb decorativo warm
     [:div {:class "absolute -top-8 -right-8 w-36 h-36 rounded-full"
            :style {:background "#E97A3F" :opacity 0.07}}]
     [c/label (str (u/mes-nome (:mes @(rf/subscribe [:mes-atual]))) " em andamento")]
     [:p {:class "display num text-[38px] leading-[1.05] mt-1"} (u/formatar-valor-br total-pago)]
     [:p {:class "num text-xs text-ink-2 font-semibold mt-0.5"}
      (str "de " (u/formatar-valor-br total-prev) " previstos")]
     ;; progress bar
     [:div {:class "h-2 bg-panel-2 rounded-pill mt-3.5 overflow-hidden"}
      [:div {:class "h-full rounded-pill"
             :style {:width      (str pct "%")
                     :background "linear-gradient(90deg, #231C12 0%, #E97A3F 100%)"}}]]
     [:div {:class "flex justify-between num text-[10.5px] text-ink-3 font-semibold mt-1.5"}
      [:span (str (Math/round pct) "% pago")]
      [:span (str (count despesas-mes) " despesas no mês")]]
     ;; pílulas de status
     [:div {:class "flex gap-1.5 mt-3 flex-wrap"}
      (when (> n-vencidas 0)
        [:span {:class "inline-flex items-center gap-1 px-2 py-1 rounded-pill text-[11px] font-bold text-bad"
                :style {:background "#FBEEEE"}}
         "● " n-vencidas " vencida" (when (> n-vencidas 1) "s")])
      (when (> n-pendentes 0)
        [:span {:class "inline-flex items-center gap-1 px-2 py-1 rounded-pill text-[11px] font-bold text-warn"
                :style {:background "#FDF6E7"}}
         "● " n-pendentes " a vencer"])
      (when (> n-pagas 0)
        [:span {:class "inline-flex items-center gap-1 px-2 py-1 rounded-pill text-[11px] font-bold text-ok"
                :style {:background "#EBF5EF"}}
         "● " n-pagas " paga" (when (> n-pagas 1) "s")])]]))

;; -- Card de alerta cartão -------------------------------------------------
(defn card-alerta-cartao []
  (let [rabo @(rf/subscribe [:rabo-cartao-ano])]
    (when (> rabo 0)
      [:div {:class "rounded-panel border p-4 mt-3"
             :style {:background "#FFF1E5" :border-color "#F5DDC2"}}
       [:div {:class "flex items-center gap-2.5"}
        [:div {:class "w-9 h-9 rounded-xl flex items-center justify-center text-lg"
               :style {:background "#FFE6CB" :color "#E97A3F"}}
         "💳"]
        [:div {:class "flex-1 min-w-0"}
         [:p {:class "text-[12.5px] font-bold" :style {:color "#7A4F1F"}} "Cartão em aberto"]
         [:p {:class "text-[10.5px] font-semibold mt-0.5" :style {:color "#9A6B3A"}}
          "rabo de meses anteriores"]]
        [:p {:class "display num text-lg" :style {:color "#7A4F1F"}}
         (u/formatar-valor-br rabo)]]])))

;; -- View principal --------------------------------------------------------
(defn dashboard []
  (let [despesas-mes @(rf/subscribe [:despesas-do-mes])
        entradas-mes @(rf/subscribe [:entradas-do-mes])]
    [:div {:class "flex flex-col pb-28"}
     [header]
     [:div {:class "px-4 mt-1"}
      [hero]
      [:div {:class "mt-5 mb-2 px-1"}
       [c/label "Posição da família"]]
      [:div {:class "grid grid-cols-2 gap-2.5"}
       (for [pid pessoas-ids]
         ^{:key pid}
         [card-pessoa pid despesas-mes entradas-mes])]
      [card-alerta-cartao]]]))
