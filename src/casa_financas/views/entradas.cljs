(ns casa-financas.views.entradas
  (:require [re-frame.core :as rf]
            [clojure.string :as str]
            [casa-financas.utils :as u]
            [casa-financas.components.comum :as c]))

(def pessoas-ids ["andre" "bianca" "fernanda" "bruna"])

(defn formatar-data-curta [data-str]
  (when (and data-str (not= data-str ""))
    (let [[_ mes dia] (str/split data-str #"-")]
      (str dia "/" mes))))

(defn auto? [entrada]
  (or (:auto entrada)
      (and (:descricao entrada)
           (str/starts-with? (or (:descricao entrada) "") "Pgto:"))))

(defn item-entrada [entrada]
  (let [pid     (:pessoa_id entrada)
        nome    (u/pessoa-nome pid)
        auto-e? (auto? entrada)]
    [:div {:class    (str "px-3 py-2.5 mb-1.5 bg-panel rounded-panel flex items-center gap-2.5 cursor-pointer active:bg-panel-2 transition-colors "
                          (if auto-e? "border border-dashed border-rule" "border border-rule-soft"))
           :on-click #(rf/dispatch [:abrir-modal :editar-entrada entrada])}
     [c/avatar pid {:size "md"}]
     [:div {:class "flex-1 min-w-0"}
      [:div {:class "flex items-center gap-1.5"}
       [:span {:class "text-[13px] font-bold text-ink"} nome]
       (when auto-e?
         [:span {:class "text-[9.5px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-pill bg-panel-2 text-ink-3"}
          "auto"])]
      [:p {:class "num text-[10.5px] text-ink-3 font-semibold mt-0.5 truncate"}
       (str (or (:descricao entrada) "—") " · " (formatar-data-curta (:data entrada)))]]
     [:p {:class "display num text-sm text-ok flex-shrink-0"}
      (str "+" (u/formatar-valor-br (:valor entrada)))]]))

(defn entradas []
  (let [entradas-mes @(rf/subscribe [:entradas-do-mes])
        total        @(rf/subscribe [:total-entradas-mes])
        mes-atual    @(rf/subscribe [:mes-atual])
        por-pessoa   (reduce (fn [acc e]
                               (update acc (:pessoa_id e) #(+ (or % 0) (:valor e))))
                             {} entradas-mes)]
    [:div {:class "flex flex-col pb-28"}
     [c/seletor-mes]
     [:div {:class "px-4 mt-1"}
      ;; Card total
      [:div {:class "bg-panel rounded-panel border border-rule p-4 shadow-soft"}
       [c/label (str "Total de entradas em " (clojure.string/lower-case (u/mes-nome (:mes mes-atual))))]
       [:p {:class "display num text-[32px] text-ok leading-[1.05] mt-1"}
        (u/formatar-valor-br total)]
       ;; Barra proporcional
       [:div {:class "flex h-2 rounded-pill overflow-hidden mt-3.5 bg-panel-2"}
        (for [pid pessoas-ids
              :let [v   (or (get por-pessoa pid) 0)
                    pct (if (> total 0) (* 100 (/ v total)) 0)]
              :when (> pct 0)]
          ^{:key pid}
          [:div {:style {:width (str pct "%") :background-color (u/pessoa-cor pid)}}])]
       ;; Chips por pessoa
       [:div {:class "flex flex-wrap gap-1.5 mt-3"}
        (for [pid pessoas-ids
              :let [v (or (get por-pessoa pid) 0)]
              :when (> v 0)]
          ^{:key pid}
          [:span {:class "inline-flex items-center gap-1.5 pl-0.5 pr-2 py-0.5 rounded-pill bg-panel-2 text-[11px] font-bold text-ink"}
           [:span {:class "w-3.5 h-3.5 rounded-full flex items-center justify-center text-[7.5px] font-bold text-white"
                   :style {:background-color (u/pessoa-cor pid)}}
            (u/pessoa-inicial pid)]
           (u/formatar-valor-br v)])]]
      ;; Lista
      [:div {:class "mt-5 mb-2 px-1"}
       [c/label "Lançamentos"]]
      (if (empty? entradas-mes)
        [:div {:class "flex flex-col items-center justify-center py-12 text-ink-3"}
         [:span {:class "text-4xl mb-3 opacity-50"} "💰"]
         [:p {:class "text-sm font-semibold"} "Nenhuma entrada"]
         [:p {:class "text-xs mt-1"} "Toque no + pra adicionar"]]
        (for [e (sort-by :data entradas-mes)]
          ^{:key (:id e)}
          [item-entrada e]))]]))
