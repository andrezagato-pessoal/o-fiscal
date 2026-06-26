(ns casa-financas.subs
  (:require [re-frame.core :as rf]))

(rf/reg-sub :aba-ativa     (fn [db _] (:aba-ativa db)))
(rf/reg-sub :mes-atual     (fn [db _] (:mes-atual db)))
(rf/reg-sub :usuario-atual (fn [db _] (:usuario-atual db)))
(rf/reg-sub :pessoa-ativa  (fn [db _] (:pessoa-ativa db)))
(rf/reg-sub :modal         (fn [db _] (:modal db)))
(rf/reg-sub :loading       (fn [db _] (:loading db)))
(rf/reg-sub :erro          (fn [db _] (:erro db)))
(rf/reg-sub :despesas      (fn [db _] (:despesas db)))
(rf/reg-sub :entradas      (fn [db _] (:entradas db)))
(rf/reg-sub :templates     (fn [db _] (:templates db)))
(rf/reg-sub :categorias    (fn [db _] (:categorias db)))
(rf/reg-sub :despesas-historico (fn [db _] (:despesas-historico db)))
(rf/reg-sub :entradas-historico (fn [db _] (:entradas-historico db)))
(rf/reg-sub :faturas-historico  (fn [db _] (:faturas-historico db)))

(defn mes-estritamente-anterior? [ano mes ano-ref mes-ref]
  (or (< ano ano-ref)
      (and (= ano ano-ref) (< mes mes-ref))))

(rf/reg-sub
 :despesas-do-mes
 :<- [:despesas]
 :<- [:mes-atual]
 (fn [[despesas mes] _]
   (filter (fn [d]
             (and (= (:ano d) (:ano mes))
                  (= (:mes d) (:mes mes))))
           despesas)))

(rf/reg-sub
 :entradas-do-mes
 :<- [:entradas]
 :<- [:mes-atual]
 (fn [[entradas mes] _]
   (filter (fn [e]
             (when (:data e)
               (let [parts (clojure.string/split (:data e) #"-")
                     ano   (int (first parts))
                     m     (int (second parts))]
                 (and (= ano (:ano mes))
                      (= m (:mes mes))))))
           entradas)))

(rf/reg-sub
 :total-previsto-mes
 :<- [:despesas-do-mes]
 (fn [despesas _]
   (reduce + 0 (map :valor despesas))))

(rf/reg-sub
 :total-entradas-mes
 :<- [:entradas-do-mes]
 (fn [entradas _]
   (reduce + 0 (map :valor entradas))))

(rf/reg-sub
 :saldo-acumulado-anterior
 :<- [:despesas-historico]
 :<- [:entradas-historico]
 :<- [:faturas-historico]
 :<- [:mes-atual]
 (fn [[despesas entradas faturas mes] _]
   (let [desp-ant (filter #(mes-estritamente-anterior?
                             (:ano %) (:mes %)
                             (:ano mes) (:mes mes))
                          despesas)
         entr-ant (filter (fn [e]
                            (when (:data e)
                              (let [parts (clojure.string/split (:data e) #"-")
                                    ano   (int (first parts))
                                    m     (int (second parts))]
                                (mes-estritamente-anterior?
                                  ano m (:ano mes) (:mes mes)))))
                          entradas)
         faturas-ant (filter #(mes-estritamente-anterior?
                                (:ano %) (:mes %)
                                (:ano mes) (:mes mes))
                             faturas)
         fatura-map  (reduce (fn [m f]
                               (assoc m [(:ano f) (:mes f)] (or (:valor_pago f) 0)))
                             {}
                             faturas-ant)
         total-entr       (reduce + 0 (map :valor entr-ant))
         non-credit-pago  (reduce + 0 (map :valor (filter #(and (:pago %)
                                                                 (not= (:forma_pagamento %) "credito"))
                                                          desp-ant)))
         credit-by-month  (group-by (fn [d] [(:ano d) (:mes d)])
                                    (filter #(= (:forma_pagamento %) "credito") desp-ant))
         total-credit     (reduce + 0
                                  (map (fn [[month-key _]]
                                         (get fatura-map month-key 0))
                                       credit-by-month))]
     (- total-entr (+ non-credit-pago total-credit)))))

(rf/reg-sub
 :saldo-acumulado-anterior-pessoa
 (fn [db [_ pessoa-id]]
   (let [mes         (:mes-atual db)
         despesas    (filter #(mes-estritamente-anterior?
                               (:ano %) (:mes %)
                               (:ano mes) (:mes mes))
                             (:despesas-historico db))
         entradas    (filter (fn [e]
                               (when (:data e)
                                 (let [parts (clojure.string/split (:data e) #"-")
                                       ano   (int (first parts))
                                       m     (int (second parts))]
                                   (mes-estritamente-anterior?
                                    ano m (:ano mes) (:mes mes)))))
                             (:entradas-historico db))
         faturas-ant (filter #(mes-estritamente-anterior?
                               (:ano %) (:mes %)
                               (:ano mes) (:mes mes))
                             (:faturas-historico db))
         fatura-map  (reduce (fn [m f]
                               (assoc m [(:ano f) (:mes f)] f))
                             {}
                             faturas-ant)
         div-key     (keyword (str "divisao_" pessoa-id))
         total-entr  (reduce + 0
                             (map :valor
                                  (filter #(= (:pessoa_id %) pessoa-id) entradas)))
         non-credit-debitos (reduce + 0
                                    (map (fn [d]
                                           (let [pct (get (:divisao d) (keyword pessoa-id) 0)]
                                             (* (:valor d) (/ pct 100))))
                                         (filter #(and (:pago %)
                                                       (not= (:forma_pagamento %) "credito"))
                                                 despesas)))
         credit-by-month (group-by (fn [d] [(:ano d) (:mes d)])
                                   (filter #(= (:forma_pagamento %) "credito") despesas))
         credit-debitos  (reduce + 0
                                 (map (fn [[month-key _]]
                                        (let [f   (get fatura-map month-key)
                                              pct (get f div-key 0)]
                                          (if f (* (:valor_pago f) (/ pct 100)) 0)))
                                      credit-by-month))]
     (- total-entr (+ non-credit-debitos credit-debitos)))))

(rf/reg-sub
 :configuracoes
 (fn [db _]
   (:configuracoes db)))

(rf/reg-sub
 :cor-pessoa
 :<- [:configuracoes]
 (fn [configs [_ pessoa-id]]
   (get configs (str "cor_" pessoa-id)
        (case pessoa-id
          "andre"    "#3B82F6"
          "bianca"   "#EC4899"
          "fernanda" "#14B8A6"
          "bruna"    "#F97316"
          "#9CA3AF"))))

(rf/reg-sub :fatura (fn [db _] (:fatura db)))

;; -- Subs do dashboard --

(defn ano-da-data [data-str]
  (when (and data-str (not= data-str ""))
    (int (first (clojure.string/split data-str #"-")))))

(defn mes-da-data [data-str]
  (when (and data-str (not= data-str ""))
    (let [p (clojure.string/split data-str #"-")]
      [(int (first p)) (int (second p))])))

;; Acumulado carregando todo o historico passado ATE o mes selecionado
;; (NAO inclui meses futuros). Deriva do resumo do mes atual.
(rf/reg-sub
 :posicao-pessoa-total
 :<- [:resumo-mes-atual]
 (fn [dados [_ pessoa-id]]
   (get-in dados [pessoa-id :acumulado] 0)))

;; Tabela por pessoa x mes: aporte (pagou), cota (custo), saldo do mes e
;; acumulado corrido, para todo o historico.
(rf/reg-sub
 :resumo-mensal-pessoas
 :<- [:despesas-historico]
 :<- [:entradas-historico]
 :<- [:mes-atual]
 (fn [[despesas entradas mes-atual] _]
   (let [pessoas ["andre" "bianca" "fernanda" "bruna"]
         lim     [(:ano mes-atual) (:mes mes-atual)]
         meses   (->> (concat (map (fn [d] [(:ano d) (:mes d)]) despesas)
                              (keep #(mes-da-data (:data %)) entradas))
                      distinct sort
                      (filter #(<= (compare % lim) 0)))]
     (first
      (reduce
       (fn [[linhas acc] [ano mes]]
         (let [desp-m (filter #(and (= (:ano %) ano) (= (:mes %) mes)) despesas)
               ent-m  (filter #(= (mes-da-data (:data %)) [ano mes]) entradas)
               [linha acc2]
               (reduce
                (fn [[lm am] pid]
                  (let [dk     (keyword pid)
                        cota   (reduce + 0 (map (fn [d] (* (:valor d) (/ (or (get (:divisao d) dk) 0) 100.0))) desp-m))
                        aporte (reduce + 0 (map :valor (filter #(= (:pessoa_id %) pid) ent-m)))
                        saldo  (- aporte cota)
                        novo   (+ (get am pid) saldo)]
                    [(assoc lm pid {:aporte aporte :cota cota :saldo saldo :acumulado novo})
                     (assoc am pid novo)]))
                [{} acc] pessoas)]
           [(conj linhas {:ano ano :mes mes :pessoas linha}) acc2]))
       [[] {"andre" 0 "bianca" 0 "fernanda" 0 "bruna" 0}]
       meses)))))

;; Dados por pessoa do MES selecionado (com acumulado ja carregando historico):
;; {pid {:aporte :cota :saldo :acumulado}}. Quando o mes muda, evolui.
(rf/reg-sub
 :resumo-mes-atual
 :<- [:resumo-mensal-pessoas]
 :<- [:mes-atual]
 (fn [[resumo mes] _]
   (or (some #(when (and (= (:ano %) (:ano mes)) (= (:mes %) (:mes mes)))
                (:pessoas %))
             resumo)
       {"andre"    {:aporte 0 :cota 0 :saldo 0 :acumulado 0}
        "bianca"   {:aporte 0 :cota 0 :saldo 0 :acumulado 0}
        "fernanda" {:aporte 0 :cota 0 :saldo 0 :acumulado 0}
        "bruna"    {:aporte 0 :cota 0 :saldo 0 :acumulado 0}})))

(rf/reg-sub
 :posicao-pessoa-ano
 :<- [:despesas-historico]
 :<- [:entradas-historico]
 :<- [:mes-atual]
 (fn [[despesas entradas mes-atual] [_ pessoa-id]]
   (let [ano       (:ano mes-atual)
         div-key   (keyword pessoa-id)
         desp-ano  (filter #(= (:ano %) ano) despesas)
         ent-ano   (filter #(= (ano-da-data (:data %)) ano) entradas)
         obrigacao (reduce + 0
                           (map (fn [d]
                                  (* (:valor d)
                                     (/ (or (get (:divisao d) div-key) 0) 100.0)))
                                desp-ano))
         aporte    (reduce + 0
                           (map :valor
                                (filter #(= (:pessoa_id %) pessoa-id) ent-ano)))]
     (- aporte obrigacao))))

(rf/reg-sub
 :rabo-cartao-ano
 :<- [:despesas-historico]
 :<- [:faturas-historico]
 :<- [:mes-atual]
 (fn [[despesas faturas mes-atual] _]
   (let [ano             (:ano mes-atual)
         credito-por-mes (group-by :mes
                                   (filter #(and (= (:ano %) ano)
                                                 (= (:forma_pagamento %) "credito"))
                                           despesas))
         fatura-map      (into {} (map (fn [f] [(:mes f) f])
                                       (filter #(= (:ano %) ano) faturas)))]
     (reduce + 0
             (map (fn [[mes compras]]
                    (let [total (reduce + 0 (map :valor compras))
                          pago  (or (:valor_pago (get fatura-map mes)) 0)]
                      (max 0 (- total pago))))
                  credito-por-mes)))))

;; -- Analise --

(rf/reg-sub
 :top-categorias-mes
 :<- [:despesas-do-mes]
 (fn [despesas _]
   (->> despesas
        (group-by #(or (:categoria_nome %) "Sem categoria"))
        (map (fn [[cat ds]]
               {:categoria cat
                :total     (reduce + 0 (map :valor ds))
                :count     (count ds)}))
        (sort-by :total >)
        vec)))

(rf/reg-sub
 :evolucao-mensal
 :<- [:despesas-historico]
 :<- [:entradas-historico]
 :<- [:faturas-historico]
 :<- [:mes-atual]
 (fn [[despesas entradas faturas mes-atual] _]
   (let [ano        (:ano mes-atual)
         desp-ano   (filter #(= (:ano %) ano) despesas)
         ent-ano    (filter #(= (ano-da-data (:data %)) ano) entradas)
         fat-map    (into {} (map (fn [f] [(:mes f) f])
                                  (filter #(= (:ano %) ano) faturas)))
         despesas-credito-por-mes (group-by :mes
                                            (filter #(= (:forma_pagamento %) "credito") desp-ano))]
     (mapv (fn [m]
             (let [desp-m (filter #(= (:mes %) m) desp-ano)
                   ent-m  (filter (fn [e]
                                    (when-let [d (:data e)]
                                      (= (int (second (clojure.string/split d #"-"))) m)))
                                  ent-ano)
                   compras-cred (get despesas-credito-por-mes m [])
                   total-cred   (reduce + 0 (map :valor compras-cred))
                   pago-cred    (or (:valor_pago (get fat-map m)) 0)
                   rabo         (max 0 (- total-cred pago-cred))]
               {:mes      m
                :entradas (reduce + 0 (map :valor ent-m))
                :saidas   (reduce + 0 (map :valor desp-m))
                :rabo     rabo}))
           (range 1 13)))))

(rf/reg-sub
 :obrigacao-pessoa-mes
 :<- [:despesas-do-mes]
 (fn [despesas [_ pessoa-id]]
   (let [div-key (keyword pessoa-id)]
     (reduce + 0
             (map (fn [d]
                    (* (:valor d)
                       (/ (or (get (:divisao d) div-key) 0) 100.0)))
                  despesas)))))

(rf/reg-sub
 :total-credito-mes
 :<- [:despesas-do-mes]
 (fn [despesas _]
   (reduce + 0 (map :valor (filter #(= (:forma_pagamento %) "credito") despesas)))))

(rf/reg-sub
 :total-pago-mes
 :<- [:despesas-do-mes]
 :<- [:fatura]
 (fn [[despesas fatura] _]
   (let [pago-pix (reduce + 0 (map :valor (filter #(and (:pago %) (not= (:forma_pagamento %) "credito")) despesas)))
         pago-fatura (or (:valor_pago fatura) 0)]
     (+ pago-pix pago-fatura))))

(rf/reg-sub
 :saldo-conta
 :<- [:configuracoes]
 (fn [configs _]
   (when-let [v (get configs "saldo_conta")]
     (js/parseFloat v))))

(defn- n-val [x] (let [v (js/parseFloat x)] (if (js/isNaN v) 0 v)))

;; Saldo da conta CALCULADO (bussola): ancora + entradas - contas diretas pagas
;; - pagamentos de fatura. Bate com o banco quando os lancamentos estao completos.
(rf/reg-sub
 :saldo-conta-calculado
 :<- [:configuracoes]
 :<- [:entradas-historico]
 :<- [:despesas-historico]
 :<- [:faturas-historico]
 (fn [[cfg entradas despesas faturas] _]
   (let [base (n-val (get cfg "saldo_base"))
         ent  (reduce + 0 (map #(n-val (:valor %)) entradas))
         dir  (reduce + 0 (map #(n-val (:valor %))
                               (filter #(and (:pago %) (not= (:forma_pagamento %) "credito")) despesas)))
         fat  (reduce + 0 (map #(n-val (:valor_pago %)) faturas))]
     (+ base (- ent dir fat)))))

(rf/reg-sub
 :fatura-pago-mes
 :<- [:fatura]
 (fn [fatura _] (or (:valor_pago fatura) 0)))

(rf/reg-sub
 :fatura-status-mes
 :<- [:total-credito-mes]
 :<- [:fatura]
 (fn [[total fatura] _]
   (let [pago (or (:valor_pago fatura) 0)]
     (cond
       (and (> total 0) (>= pago total)) :paga
       (> pago 0)                        :parcial
       :else                             :pendente))))