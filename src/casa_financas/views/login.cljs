(ns casa-financas.views.login
  (:require [re-frame.core :as rf]
            [reagent.core :as r]
            [casa-financas.utils :as u]))

(def pessoas-ids ["andre" "bianca" "fernanda" "bruna"])

(defn login []
  (let [form (r/atom {:email "" :senha ""})]
    (fn []
      (let [erro    @(rf/subscribe [:erro])
            loading @(rf/subscribe [:loading])]
        [:div {:class "min-h-screen bg-cream font-sans text-ink relative overflow-hidden flex flex-col"}
         ;; Orbs decorativos
         [:div {:class "absolute pointer-events-none"
                :style {:top    "-100px"
                        :right  "-80px"
                        :width  "280px"
                        :height "280px"
                        :border-radius "9999px"
                        :background "radial-gradient(circle, rgba(233,122,63,0.18) 0%, transparent 70%)"}}]
         [:div {:class "absolute pointer-events-none"
                :style {:bottom "100px"
                        :left   "-80px"
                        :width  "220px"
                        :height "220px"
                        :border-radius "9999px"
                        :background "radial-gradient(circle, rgba(208,138,42,0.15) 0%, transparent 70%)"}}]
         ;; Conteúdo
         [:div {:class "flex-1 flex flex-col justify-center px-7 relative z-10 max-w-md mx-auto w-full"}
          ;; Logo + título
          [:div {:class "mb-9"}
           [:div {:class "w-14 h-14 rounded-2xl bg-ink flex items-center justify-center text-cream text-2xl font-bold mb-4"}
            "F"]
           [:h1 {:class "display text-[34px] leading-[1.05]"} "O Fiscal"]
           [:p {:class "text-[15px] text-ink-2 font-medium mt-1.5"} "O caixa lá de casa."]]
          ;; Erro
          (when erro
            [:div {:class "mb-3 px-4 py-3 rounded-panel border"
                   :style {:background "#FBEEEE" :border-color "#F2D5D5"}}
             [:p {:class "text-bad text-sm font-semibold"} erro]])
          ;; Form
          [:div {:class "flex flex-col gap-3"}
           [:div
            [:p {:class "text-[10.5px] font-bold uppercase tracking-[0.5px] text-ink-2 mb-1.5"} "e-mail"]
            [:input {:type        "email"
                     :class       "w-full bg-panel rounded-panel px-4 py-3.5 text-[15px] focus:outline-none transition-colors"
                     :style       {:border "1.5px solid var(--rule)"}
                     :placeholder "voce@email.com"
                     :value       (:email @form)
                     :on-change   #(swap! form assoc :email (.. % -target -value))}]]
           [:div
            [:p {:class "text-[10.5px] font-bold uppercase tracking-[0.5px] text-ink-2 mb-1.5"} "senha"]
            [:input {:type        "password"
                     :class       "w-full bg-panel rounded-panel px-4 py-3.5 text-[15px] focus:outline-none focus:border-ink transition-colors"
                     :style       {:border "1.5px solid var(--rule)"
                                   :letter-spacing "4px"}
                     :placeholder "••••••••"
                     :value       (:senha @form)
                     :on-change   #(swap! form assoc :senha (.. % -target -value))
                     :on-key-down #(when (= (.-key %) "Enter")
                                     (rf/dispatch [:login (:email @form) (:senha @form)]))}]]
           [:button {:class    (str "mt-2 py-3.5 rounded-panel bg-ink text-cream text-[15px] font-bold tracking-wide "
                                    "hover:bg-ink-2 active:bg-ink transition-colors disabled:opacity-50")
                     :disabled loading
                     :on-click #(rf/dispatch [:login (:email @form) (:senha @form)])}
            (if loading "Entrando..." "Entrar")]]
          ;; Família footer
          [:div {:class "mt-12 flex justify-center gap-2.5"}
           (for [pid pessoas-ids]
             ^{:key pid}
             [:div {:class "flex flex-col items-center gap-1"}
              [:div {:class "w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white"
                     :style {:background-color (u/pessoa-cor pid)
                             :box-shadow       (str "inset 0 0 0 2px var(--cream), 0 0 0 1px " (u/pessoa-cor pid) "40")}}
               (u/pessoa-inicial pid)]
              [:span {:class "text-[9.5px] text-ink-3 font-semibold"}
               (u/pessoa-nome pid)]])]]]))))
