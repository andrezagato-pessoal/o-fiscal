(ns casa-financas.components.comum
  (:require [re-frame.core :as rf]
            [casa-financas.utils :as u]))

;; -- Avatar (cor cheia + branco, mantido) ---------------------------------
(defn avatar [pessoa-id & [{:keys [size] :or {size "md"}}]]
  (let [cor     (u/pessoa-cor pessoa-id)
        inicial (u/pessoa-inicial pessoa-id)
        sz      (case size
                  "sm" "w-6 h-6 text-[10px]"
                  "lg" "w-11 h-11 text-base"
                  "w-8 h-8 text-xs")]
    [:div {:class (str "rounded-full flex items-center justify-center font-bold text-white flex-shrink-0 " sz)
           :style {:background-color cor}}
     inicial]))

;; -- Chip de pessoa: bg panel-2 + avatar pequeno interno na cor -----------
(defn chip-pessoa [pessoa-id]
  (let [cor   (u/pessoa-cor pessoa-id)
        nome  (u/pessoa-nome pessoa-id)
        ini   (u/pessoa-inicial pessoa-id)]
    [:span {:class "inline-flex items-center gap-1.5 pl-0.5 pr-2 py-0.5 rounded-pill bg-panel-2 text-xs font-bold text-ink"}
     [:span {:class "w-4 h-4 rounded-full flex items-center justify-center text-[8.5px] font-bold text-white"
             :style {:background-color cor}}
      ini]
     nome]))

;; Versão compacta — só inicial, usada em listas densas
(defn chip-pessoa-mini [pessoa-id]
  (let [cor (u/pessoa-cor pessoa-id)
        ini (u/pessoa-inicial pessoa-id)]
    [:span {:class "inline-flex items-center gap-1 px-1 py-0.5 rounded-pill bg-panel-2 text-[10px] font-bold text-ink"}
     [:span {:class "w-3.5 h-3.5 rounded-full flex items-center justify-center text-[7.5px] font-bold text-white"
             :style {:background-color cor}}
      ini]]))

;; -- Status dot: ponto + label (sem bg) -----------------------------------
(defn status-dot
  "Status visual minimalista. status: :pago | :vencida | :a-vencer | :pendente | :parcial"
  [status]
  (let [[cor label] (case status
                      :pago     ["#2E8254" "Pago"]
                      :vencida  ["#C04545" "Vencida"]
                      :a-vencer ["#D08A2A" "A vencer"]
                      :parcial  ["#D08A2A" "Parcial"]
                      ["#A99A82" "Pendente"])]
    [:span {:class "inline-flex items-center gap-1.5 text-[11px] font-bold"
            :style {:color cor}}
     [:span {:class "w-1.5 h-1.5 rounded-full"
             :style {:background-color cor}}]
     label]))

;; -- Status row: wrapper de linha com borda esquerda colorida -------------
(defn status-row
  "Container de linha de despesa. status: :pago | :vencida | :a-vencer | :pendente"
  [{:keys [status on-click class]} conteudo]
  (let [cor-border (case status
                     :pago     "border-l-ok"
                     :vencida  "border-l-bad"
                     :a-vencer "border-l-warn"
                     :parcial  "border-l-warn"
                     "border-l-ink-3")]
    [:div {:class    (str "bg-panel rounded-panel border border-rule "
                          "border-l-[3px] " cor-border " "
                          "p-3 flex items-center gap-2.5 "
                          (when on-click "cursor-pointer hover:border-rule-soft active:bg-panel-2 ")
                          (or class ""))
           :on-click on-click}
     conteudo]))

;; -- Card padrão (panel) ---------------------------------------------------
(defn card [conteudo & [{:keys [class on-click]}]]
  [:div {:class    (str "bg-panel rounded-panel border border-rule p-4 shadow-soft "
                        (when on-click "cursor-pointer ")
                        (or class ""))
         :on-click on-click}
   conteudo])

;; -- Barra de divisão (panel-2 como bg) -----------------------------------
(defn barra-divisao [divisao]
  (let [{:keys [andre bianca fernanda bruna]} divisao]
    [:div {:class "flex rounded-pill overflow-hidden h-1.5 w-full bg-panel-2"}
     (when (and andre (> andre 0))
       [:div {:class "h-full" :style {:width (str andre "%") :background-color (u/pessoa-cor "andre")}}])
     (when (and bianca (> bianca 0))
       [:div {:class "h-full" :style {:width (str bianca "%") :background-color (u/pessoa-cor "bianca")}}])
     (when (and fernanda (> fernanda 0))
       [:div {:class "h-full" :style {:width (str fernanda "%") :background-color (u/pessoa-cor "fernanda")}}])
     (when (and bruna (> bruna 0))
       [:div {:class "h-full" :style {:width (str bruna "%") :background-color (u/pessoa-cor "bruna")}}])]))

;; -- Seletor de mês (pílula compacta) -------------------------------------
(defn seletor-mes []
  (let [mes-atual @(rf/subscribe [:mes-atual])]
    [:div {:class "flex items-center justify-between mx-3 my-2 px-3 py-1.5 bg-panel rounded-pill border border-rule"}
     [:button {:class    "p-1 rounded-full hover:bg-panel-2 active:bg-rule-soft text-ink-2 transition-colors"
               :on-click #(rf/dispatch [:mes-anterior])}
      [:span {:class "text-lg leading-none"} "‹"]]
     [:span {:class "font-bold text-ink text-sm num"}
      (str (u/mes-nome (:mes mes-atual)) " " (:ano mes-atual))]
     [:button {:class    "p-1 rounded-full hover:bg-panel-2 active:bg-rule-soft text-ink-2 transition-colors"
               :on-click #(rf/dispatch [:mes-proximo])}
      [:span {:class "text-lg leading-none"} "›"]]]))

;; -- Toggle (bg ink quando on) --------------------------------------------
(defn toggle
  "Toggle pílula. valor=true → ink, false → ink-3."
  [valor on-toggle]
  [:button {:class    (str "w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors "
                           (if valor
                             "bg-ink border-ink text-cream"
                             "border-ink-3 text-transparent"))
            :on-click on-toggle}
   "✓"])

;; -- Botões (pílula) -------------------------------------------------------
(defn botao-primario [texto on-click & [{:keys [disabled class]}]]
  [:button {:class    (str "w-full py-2.5 px-5 rounded-pill font-bold text-cream bg-ink "
                           "hover:bg-ink-2 active:bg-ink transition-colors "
                           "disabled:opacity-50 disabled:cursor-not-allowed " class)
            :disabled disabled
            :on-click on-click}
   texto])

(defn botao-secundario [texto on-click & [{:keys [class]}]]
  [:button {:class    (str "w-full py-2.5 px-5 rounded-pill font-bold text-ink bg-panel border border-rule "
                           "hover:bg-panel-2 active:bg-rule-soft transition-colors " class)
            :on-click on-click}
   texto])

(defn botao-perigo [texto on-click & [{:keys [class]}]]
  [:button {:class    (str "w-full py-2.5 px-5 rounded-pill font-bold text-bad bg-panel border border-rule "
                           "hover:bg-panel-2 transition-colors " class)
            :on-click on-click}
   texto])

;; -- Modal wrapper (mobile: slide bottom; mantém visual mais sereno) ------
(defn modal-wrapper [titulo conteudo & [{:keys [on-close]}]]
  [:div {:class    "fixed inset-0 z-50 flex items-end justify-center bg-ink/40"
         :on-click (fn [e]
                     (when (= (.-target e) (.-currentTarget e))
                       (rf/dispatch [:fechar-modal])))}
   [:div {:class "bg-panel rounded-t-modal w-full max-w-lg max-h-[92vh] overflow-y-auto shadow-modal"}
    [:div {:class "flex items-center justify-between px-5 py-4 border-b border-rule sticky top-0 bg-panel"}
     [:h2 {:class "font-bold text-ink display"} titulo]
     [:button {:class    "p-1.5 rounded-full hover:bg-panel-2 text-ink-3 hover:text-ink transition-colors"
               :on-click #(rf/dispatch [:fechar-modal])}
      "✕"]]
    [:div {:class "p-5"}
     conteudo]]])

;; -- Label (UPPERCASE pequeno, padrão Cash) -------------------------------
(defn label [texto]
  [:span {:class "text-[10.5px] font-bold uppercase tracking-[0.5px] text-ink-2"} texto])
