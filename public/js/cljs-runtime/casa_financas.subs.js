goog.provide('casa_financas.subs');
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"aba-ativa","aba-ativa",1507807669),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return new cljs.core.Keyword(null,"aba-ativa","aba-ativa",1507807669).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"mes-atual","mes-atual",1459588153),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return new cljs.core.Keyword(null,"mes-atual","mes-atual",1459588153).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"usuario-atual","usuario-atual",1299457439),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return new cljs.core.Keyword(null,"usuario-atual","usuario-atual",1299457439).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"pessoa-ativa","pessoa-ativa",1367348091),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return new cljs.core.Keyword(null,"pessoa-ativa","pessoa-ativa",1367348091).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"modal","modal",-1031880850),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return new cljs.core.Keyword(null,"modal","modal",-1031880850).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"loading","loading",-737050189),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return new cljs.core.Keyword(null,"loading","loading",-737050189).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"erro","erro",-650947642),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return new cljs.core.Keyword(null,"erro","erro",-650947642).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"despesas","despesas",786163068),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return new cljs.core.Keyword(null,"despesas","despesas",786163068).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"entradas","entradas",-1856269220),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return new cljs.core.Keyword(null,"entradas","entradas",-1856269220).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"templates","templates",-1237401733),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return new cljs.core.Keyword(null,"templates","templates",-1237401733).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"categorias","categorias",-181626523),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return new cljs.core.Keyword(null,"categorias","categorias",-181626523).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"despesas-historico","despesas-historico",-1529211160),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return new cljs.core.Keyword(null,"despesas-historico","despesas-historico",-1529211160).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"entradas-historico","entradas-historico",-736138754),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return new cljs.core.Keyword(null,"entradas-historico","entradas-historico",-736138754).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"faturas-historico","faturas-historico",-231586393),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return new cljs.core.Keyword(null,"faturas-historico","faturas-historico",-231586393).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
casa_financas.subs.mes_estritamente_anterior_QMARK_ = (function casa_financas$subs$mes_estritamente_anterior_QMARK_(ano,mes,ano_ref,mes_ref){
return (((ano < ano_ref)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ano,ano_ref)) && ((mes < mes_ref)))));
});
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"despesas-do-mes","despesas-do-mes",2018938320),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"despesas","despesas",786163068)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mes-atual","mes-atual",1459588153)], null),(function (p__6699,_){
var vec__6700 = p__6699;
var despesas = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6700,(0),null);
var mes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6700,(1),null);
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (d){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ano","ano",109602792).cljs$core$IFn$_invoke$arity$1(d),new cljs.core.Keyword(null,"ano","ano",109602792).cljs$core$IFn$_invoke$arity$1(mes))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mes","mes",-890288111).cljs$core$IFn$_invoke$arity$1(d),new cljs.core.Keyword(null,"mes","mes",-890288111).cljs$core$IFn$_invoke$arity$1(mes))));
}),despesas);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"entradas-do-mes","entradas-do-mes",956329241),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entradas","entradas",-1856269220)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mes-atual","mes-atual",1459588153)], null),(function (p__6707,_){
var vec__6708 = p__6707;
var entradas = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6708,(0),null);
var mes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6708,(1),null);
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (e){
if(cljs.core.truth_(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(e))){
var parts = clojure.string.split.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(e),/-/);
var ano = (cljs.core.first(parts) | 0);
var m = (cljs.core.second(parts) | 0);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ano,new cljs.core.Keyword(null,"ano","ano",109602792).cljs$core$IFn$_invoke$arity$1(mes))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword(null,"mes","mes",-890288111).cljs$core$IFn$_invoke$arity$1(mes))));
} else {
return null;
}
}),entradas);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"total-previsto-mes","total-previsto-mes",14134203),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"despesas-do-mes","despesas-do-mes",2018938320)], null),(function (despesas,_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"valor","valor",-957162173),despesas));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"total-entradas-mes","total-entradas-mes",-1304566331),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entradas-do-mes","entradas-do-mes",956329241)], null),(function (entradas,_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"valor","valor",-957162173),entradas));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"saldo-acumulado-anterior","saldo-acumulado-anterior",1945889983),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"despesas-historico","despesas-historico",-1529211160)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entradas-historico","entradas-historico",-736138754)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"faturas-historico","faturas-historico",-231586393)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mes-atual","mes-atual",1459588153)], null),(function (p__6715,_){
var vec__6716 = p__6715;
var despesas = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6716,(0),null);
var entradas = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6716,(1),null);
var faturas = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6716,(2),null);
var mes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6716,(3),null);
var desp_ant = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6711_SHARP_){
return casa_financas.subs.mes_estritamente_anterior_QMARK_(new cljs.core.Keyword(null,"ano","ano",109602792).cljs$core$IFn$_invoke$arity$1(p1__6711_SHARP_),new cljs.core.Keyword(null,"mes","mes",-890288111).cljs$core$IFn$_invoke$arity$1(p1__6711_SHARP_),new cljs.core.Keyword(null,"ano","ano",109602792).cljs$core$IFn$_invoke$arity$1(mes),new cljs.core.Keyword(null,"mes","mes",-890288111).cljs$core$IFn$_invoke$arity$1(mes));
}),despesas);
var entr_ant = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (e){
if(cljs.core.truth_(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(e))){
var parts = clojure.string.split.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(e),/-/);
var ano = (cljs.core.first(parts) | 0);
var m = (cljs.core.second(parts) | 0);
return casa_financas.subs.mes_estritamente_anterior_QMARK_(ano,m,new cljs.core.Keyword(null,"ano","ano",109602792).cljs$core$IFn$_invoke$arity$1(mes),new cljs.core.Keyword(null,"mes","mes",-890288111).cljs$core$IFn$_invoke$arity$1(mes));
} else {
return null;
}
}),entradas);
var faturas_ant = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6712_SHARP_){
return casa_financas.subs.mes_estritamente_anterior_QMARK_(new cljs.core.Keyword(null,"ano","ano",109602792).cljs$core$IFn$_invoke$arity$1(p1__6712_SHARP_),new cljs.core.Keyword(null,"mes","mes",-890288111).cljs$core$IFn$_invoke$arity$1(p1__6712_SHARP_),new cljs.core.Keyword(null,"ano","ano",109602792).cljs$core$IFn$_invoke$arity$1(mes),new cljs.core.Keyword(null,"mes","mes",-890288111).cljs$core$IFn$_invoke$arity$1(mes));
}),faturas);
var fatura_map = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,f){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ano","ano",109602792).cljs$core$IFn$_invoke$arity$1(f),new cljs.core.Keyword(null,"mes","mes",-890288111).cljs$core$IFn$_invoke$arity$1(f)], null),(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"valor_pago","valor_pago",586246073).cljs$core$IFn$_invoke$arity$1(f);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})());
}),cljs.core.PersistentArrayMap.EMPTY,faturas_ant);
var total_entr = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"valor","valor",-957162173),entr_ant));
var non_credit_pago = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"valor","valor",-957162173),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6713_SHARP_){
var and__5140__auto__ = new cljs.core.Keyword(null,"pago","pago",27952415).cljs$core$IFn$_invoke$arity$1(p1__6713_SHARP_);
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"forma_pagamento","forma_pagamento",205169437).cljs$core$IFn$_invoke$arity$1(p1__6713_SHARP_),"credito");
} else {
return and__5140__auto__;
}
}),desp_ant)));
var credit_by_month = cljs.core.group_by((function (d){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ano","ano",109602792).cljs$core$IFn$_invoke$arity$1(d),new cljs.core.Keyword(null,"mes","mes",-890288111).cljs$core$IFn$_invoke$arity$1(d)], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6714_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"forma_pagamento","forma_pagamento",205169437).cljs$core$IFn$_invoke$arity$1(p1__6714_SHARP_),"credito");
}),desp_ant));
var total_credit = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__6719){
var vec__6720 = p__6719;
var month_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6720,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6720,(1),null);
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(fatura_map,month_key,(0));
}),credit_by_month));
return (total_entr - (non_credit_pago + total_credit));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"saldo-acumulado-anterior-pessoa","saldo-acumulado-anterior-pessoa",930608122),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__6728){
var vec__6729 = p__6728;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6729,(0),null);
var pessoa_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6729,(1),null);
var mes = new cljs.core.Keyword(null,"mes-atual","mes-atual",1459588153).cljs$core$IFn$_invoke$arity$1(db);
var despesas = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6723_SHARP_){
return casa_financas.subs.mes_estritamente_anterior_QMARK_(new cljs.core.Keyword(null,"ano","ano",109602792).cljs$core$IFn$_invoke$arity$1(p1__6723_SHARP_),new cljs.core.Keyword(null,"mes","mes",-890288111).cljs$core$IFn$_invoke$arity$1(p1__6723_SHARP_),new cljs.core.Keyword(null,"ano","ano",109602792).cljs$core$IFn$_invoke$arity$1(mes),new cljs.core.Keyword(null,"mes","mes",-890288111).cljs$core$IFn$_invoke$arity$1(mes));
}),new cljs.core.Keyword(null,"despesas-historico","despesas-historico",-1529211160).cljs$core$IFn$_invoke$arity$1(db));
var entradas = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (e){
if(cljs.core.truth_(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(e))){
var parts = clojure.string.split.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(e),/-/);
var ano = (cljs.core.first(parts) | 0);
var m = (cljs.core.second(parts) | 0);
return casa_financas.subs.mes_estritamente_anterior_QMARK_(ano,m,new cljs.core.Keyword(null,"ano","ano",109602792).cljs$core$IFn$_invoke$arity$1(mes),new cljs.core.Keyword(null,"mes","mes",-890288111).cljs$core$IFn$_invoke$arity$1(mes));
} else {
return null;
}
}),new cljs.core.Keyword(null,"entradas-historico","entradas-historico",-736138754).cljs$core$IFn$_invoke$arity$1(db));
var faturas_ant = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6724_SHARP_){
return casa_financas.subs.mes_estritamente_anterior_QMARK_(new cljs.core.Keyword(null,"ano","ano",109602792).cljs$core$IFn$_invoke$arity$1(p1__6724_SHARP_),new cljs.core.Keyword(null,"mes","mes",-890288111).cljs$core$IFn$_invoke$arity$1(p1__6724_SHARP_),new cljs.core.Keyword(null,"ano","ano",109602792).cljs$core$IFn$_invoke$arity$1(mes),new cljs.core.Keyword(null,"mes","mes",-890288111).cljs$core$IFn$_invoke$arity$1(mes));
}),new cljs.core.Keyword(null,"faturas-historico","faturas-historico",-231586393).cljs$core$IFn$_invoke$arity$1(db));
var fatura_map = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,f){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ano","ano",109602792).cljs$core$IFn$_invoke$arity$1(f),new cljs.core.Keyword(null,"mes","mes",-890288111).cljs$core$IFn$_invoke$arity$1(f)], null),f);
}),cljs.core.PersistentArrayMap.EMPTY,faturas_ant);
var div_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((""+"divisao_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(pessoa_id)));
var total_entr = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"valor","valor",-957162173),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6725_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pessoa_id","pessoa_id",-1264984672).cljs$core$IFn$_invoke$arity$1(p1__6725_SHARP_),pessoa_id);
}),entradas)));
var non_credit_debitos = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (d){
var pct = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"divisao","divisao",1361721447).cljs$core$IFn$_invoke$arity$1(d),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(pessoa_id),(0));
return (new cljs.core.Keyword(null,"valor","valor",-957162173).cljs$core$IFn$_invoke$arity$1(d) * (pct / (100)));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6726_SHARP_){
var and__5140__auto__ = new cljs.core.Keyword(null,"pago","pago",27952415).cljs$core$IFn$_invoke$arity$1(p1__6726_SHARP_);
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"forma_pagamento","forma_pagamento",205169437).cljs$core$IFn$_invoke$arity$1(p1__6726_SHARP_),"credito");
} else {
return and__5140__auto__;
}
}),despesas)));
var credit_by_month = cljs.core.group_by((function (d){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ano","ano",109602792).cljs$core$IFn$_invoke$arity$1(d),new cljs.core.Keyword(null,"mes","mes",-890288111).cljs$core$IFn$_invoke$arity$1(d)], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6727_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"forma_pagamento","forma_pagamento",205169437).cljs$core$IFn$_invoke$arity$1(p1__6727_SHARP_),"credito");
}),despesas));
var credit_debitos = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__6736){
var vec__6737 = p__6736;
var month_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6737,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6737,(1),null);
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fatura_map,month_key);
var pct = cljs.core.get.cljs$core$IFn$_invoke$arity$3(f,div_key,(0));
if(cljs.core.truth_(f)){
return (new cljs.core.Keyword(null,"valor_pago","valor_pago",586246073).cljs$core$IFn$_invoke$arity$1(f) * (pct / (100)));
} else {
return (0);
}
}),credit_by_month));
return (total_entr - (non_credit_debitos + credit_debitos));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"configuracoes","configuracoes",800955038),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return new cljs.core.Keyword(null,"configuracoes","configuracoes",800955038).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"cor-pessoa","cor-pessoa",-1425578316),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"configuracoes","configuracoes",800955038)], null),(function (configs,p__6740){
var vec__6741 = p__6740;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6741,(0),null);
var pessoa_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6741,(1),null);
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(configs,(""+"cor_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(pessoa_id)),(function (){var G__6744 = pessoa_id;
switch (G__6744) {
case "andre":
return "#3B82F6";

break;
case "bianca":
return "#EC4899";

break;
case "fernanda":
return "#14B8A6";

break;
case "bruna":
return "#F97316";

break;
default:
return "#9CA3AF";

}
})());
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"fatura","fatura",18781370),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return new cljs.core.Keyword(null,"fatura","fatura",18781370).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
casa_financas.subs.ano_da_data = (function casa_financas$subs$ano_da_data(data_str){
if(cljs.core.truth_((function (){var and__5140__auto__ = data_str;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(data_str,"");
} else {
return and__5140__auto__;
}
})())){
return (cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(data_str,/-/)) | 0);
} else {
return null;
}
});
casa_financas.subs.mes_da_data = (function casa_financas$subs$mes_da_data(data_str){
if(cljs.core.truth_((function (){var and__5140__auto__ = data_str;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(data_str,"");
} else {
return and__5140__auto__;
}
})())){
var p = clojure.string.split.cljs$core$IFn$_invoke$arity$2(data_str,/-/);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.first(p) | 0),(cljs.core.second(p) | 0)], null);
} else {
return null;
}
});
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"posicao-pessoa-total","posicao-pessoa-total",-323518376),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resumo-mes-atual","resumo-mes-atual",1425807400)], null),(function (dados,p__6749){
var vec__6750 = p__6749;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6750,(0),null);
var pessoa_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6750,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(dados,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pessoa_id,new cljs.core.Keyword(null,"acumulado","acumulado",-2083289601)], null),(0));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"resumo-mensal-pessoas","resumo-mensal-pessoas",-1804393678),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"despesas-historico","despesas-historico",-1529211160)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entradas-historico","entradas-historico",-736138754)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mes-atual","mes-atual",1459588153)], null),(function (p__6763,_){
var vec__6764 = p__6763;
var despesas = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6764,(0),null);
var entradas = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6764,(1),null);
var mes_atual = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6764,(2),null);
var pessoas = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["andre","bianca","fernanda","bruna"], null);
var lim = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ano","ano",109602792).cljs$core$IFn$_invoke$arity$1(mes_atual),new cljs.core.Keyword(null,"mes","mes",-890288111).cljs$core$IFn$_invoke$arity$1(mes_atual)], null);
var meses = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6754_SHARP_){
return (cljs.core.compare(p1__6754_SHARP_,lim) <= (0));
}),cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (d){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ano","ano",109602792).cljs$core$IFn$_invoke$arity$1(d),new cljs.core.Keyword(null,"mes","mes",-890288111).cljs$core$IFn$_invoke$arity$1(d)], null);
}),despesas),cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__6753_SHARP_){
return casa_financas.subs.mes_da_data(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(p1__6753_SHARP_));
}),entradas)))));
return cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__6767,p__6768){
var vec__6773 = p__6767;
var linhas = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6773,(0),null);
var acc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6773,(1),null);
var vec__6777 = p__6768;
var ano = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6777,(0),null);
var mes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6777,(1),null);
var desp_m = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6755_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ano","ano",109602792).cljs$core$IFn$_invoke$arity$1(p1__6755_SHARP_),ano)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mes","mes",-890288111).cljs$core$IFn$_invoke$arity$1(p1__6755_SHARP_),mes)));
}),despesas);
var ent_m = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6756_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(casa_financas.subs.mes_da_data(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(p1__6756_SHARP_)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ano,mes], null));
}),entradas);
var vec__6780 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__6783,pid){
var vec__6784 = p__6783;
var lm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6784,(0),null);
var am = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6784,(1),null);
var dk = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(pid);
var cota = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (d){
return (new cljs.core.Keyword(null,"valor","valor",-957162173).cljs$core$IFn$_invoke$arity$1(d) * ((function (){var or__5142__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"divisao","divisao",1361721447).cljs$core$IFn$_invoke$arity$1(d),dk);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})() / 100.0));
}),desp_m));
var aporte = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"valor","valor",-957162173),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6757_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pessoa_id","pessoa_id",-1264984672).cljs$core$IFn$_invoke$arity$1(p1__6757_SHARP_),pid);
}),ent_m)));
var saldo = (aporte - cota);
var novo = (cljs.core.get.cljs$core$IFn$_invoke$arity$2(am,pid) + saldo);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(lm,pid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"aporte","aporte",-623613565),aporte,new cljs.core.Keyword(null,"cota","cota",355260977),cota,new cljs.core.Keyword(null,"saldo","saldo",-306276818),saldo,new cljs.core.Keyword(null,"acumulado","acumulado",-2083289601),novo], null)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(am,pid,novo)], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,acc], null),pessoas);
var linha = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6780,(0),null);
var acc2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6780,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(linhas,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ano","ano",109602792),ano,new cljs.core.Keyword(null,"mes","mes",-890288111),mes,new cljs.core.Keyword(null,"pessoas","pessoas",-1747895801),linha], null)),acc2], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 4, ["andre",(0),"bianca",(0),"fernanda",(0),"bruna",(0)], null)], null),meses));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"resumo-mes-atual","resumo-mes-atual",1425807400),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resumo-mensal-pessoas","resumo-mensal-pessoas",-1804393678)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mes-atual","mes-atual",1459588153)], null),(function (p__6792,_){
var vec__6793 = p__6792;
var resumo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6793,(0),null);
var mes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6793,(1),null);
var or__5142__auto__ = cljs.core.some((function (p1__6790_SHARP_){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ano","ano",109602792).cljs$core$IFn$_invoke$arity$1(p1__6790_SHARP_),new cljs.core.Keyword(null,"ano","ano",109602792).cljs$core$IFn$_invoke$arity$1(mes))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mes","mes",-890288111).cljs$core$IFn$_invoke$arity$1(p1__6790_SHARP_),new cljs.core.Keyword(null,"mes","mes",-890288111).cljs$core$IFn$_invoke$arity$1(mes))))){
return new cljs.core.Keyword(null,"pessoas","pessoas",-1747895801).cljs$core$IFn$_invoke$arity$1(p1__6790_SHARP_);
} else {
return null;
}
}),resumo);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 4, ["andre",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"aporte","aporte",-623613565),(0),new cljs.core.Keyword(null,"cota","cota",355260977),(0),new cljs.core.Keyword(null,"saldo","saldo",-306276818),(0),new cljs.core.Keyword(null,"acumulado","acumulado",-2083289601),(0)], null),"bianca",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"aporte","aporte",-623613565),(0),new cljs.core.Keyword(null,"cota","cota",355260977),(0),new cljs.core.Keyword(null,"saldo","saldo",-306276818),(0),new cljs.core.Keyword(null,"acumulado","acumulado",-2083289601),(0)], null),"fernanda",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"aporte","aporte",-623613565),(0),new cljs.core.Keyword(null,"cota","cota",355260977),(0),new cljs.core.Keyword(null,"saldo","saldo",-306276818),(0),new cljs.core.Keyword(null,"acumulado","acumulado",-2083289601),(0)], null),"bruna",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"aporte","aporte",-623613565),(0),new cljs.core.Keyword(null,"cota","cota",355260977),(0),new cljs.core.Keyword(null,"saldo","saldo",-306276818),(0),new cljs.core.Keyword(null,"acumulado","acumulado",-2083289601),(0)], null)], null);
}
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"posicao-pessoa-ano","posicao-pessoa-ano",-52716376),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"despesas-historico","despesas-historico",-1529211160)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entradas-historico","entradas-historico",-736138754)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mes-atual","mes-atual",1459588153)], null),(function (p__6802,p__6803){
var vec__6804 = p__6802;
var despesas = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6804,(0),null);
var entradas = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6804,(1),null);
var mes_atual = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6804,(2),null);
var vec__6807 = p__6803;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6807,(0),null);
var pessoa_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6807,(1),null);
var ano = new cljs.core.Keyword(null,"ano","ano",109602792).cljs$core$IFn$_invoke$arity$1(mes_atual);
var div_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(pessoa_id);
var desp_ano = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6799_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ano","ano",109602792).cljs$core$IFn$_invoke$arity$1(p1__6799_SHARP_),ano);
}),despesas);
var ent_ano = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6800_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(casa_financas.subs.ano_da_data(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(p1__6800_SHARP_)),ano);
}),entradas);
var obrigacao = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (d){
return (new cljs.core.Keyword(null,"valor","valor",-957162173).cljs$core$IFn$_invoke$arity$1(d) * ((function (){var or__5142__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"divisao","divisao",1361721447).cljs$core$IFn$_invoke$arity$1(d),div_key);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})() / 100.0));
}),desp_ano));
var aporte = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"valor","valor",-957162173),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6801_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pessoa_id","pessoa_id",-1264984672).cljs$core$IFn$_invoke$arity$1(p1__6801_SHARP_),pessoa_id);
}),ent_ano)));
return (aporte - obrigacao);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"rabo-cartao-ano","rabo-cartao-ano",580721986),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"despesas-historico","despesas-historico",-1529211160)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"faturas-historico","faturas-historico",-231586393)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mes-atual","mes-atual",1459588153)], null),(function (p__6822,_){
var vec__6823 = p__6822;
var despesas = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6823,(0),null);
var faturas = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6823,(1),null);
var mes_atual = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6823,(2),null);
var ano = new cljs.core.Keyword(null,"ano","ano",109602792).cljs$core$IFn$_invoke$arity$1(mes_atual);
var credito_por_mes = cljs.core.group_by(new cljs.core.Keyword(null,"mes","mes",-890288111),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6820_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ano","ano",109602792).cljs$core$IFn$_invoke$arity$1(p1__6820_SHARP_),ano)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"forma_pagamento","forma_pagamento",205169437).cljs$core$IFn$_invoke$arity$1(p1__6820_SHARP_),"credito")));
}),despesas));
var fatura_map = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (f){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mes","mes",-890288111).cljs$core$IFn$_invoke$arity$1(f),f], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6821_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ano","ano",109602792).cljs$core$IFn$_invoke$arity$1(p1__6821_SHARP_),ano);
}),faturas)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__6827){
var vec__6828 = p__6827;
var mes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6828,(0),null);
var compras = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6828,(1),null);
var total = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"valor","valor",-957162173),compras));
var pago = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"valor_pago","valor_pago",586246073).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(fatura_map,mes));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})();
return cljs.core.max.cljs$core$IFn$_invoke$arity$2((0),(total - pago));
}),credito_por_mes));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"top-categorias-mes","top-categorias-mes",4093728),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"despesas-do-mes","despesas-do-mes",2018938320)], null),(function (despesas,_){
return cljs.core.vec(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"total","total",1916810418),cljs.core._GT_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__6832){
var vec__6833 = p__6832;
var cat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6833,(0),null);
var ds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6833,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"categoria","categoria",1019034182),cat,new cljs.core.Keyword(null,"total","total",1916810418),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"valor","valor",-957162173),ds)),new cljs.core.Keyword(null,"count","count",2139924085),cljs.core.count(ds)], null);
}),cljs.core.group_by((function (p1__6831_SHARP_){
var or__5142__auto__ = new cljs.core.Keyword(null,"categoria_nome","categoria_nome",843741669).cljs$core$IFn$_invoke$arity$1(p1__6831_SHARP_);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "Sem categoria";
}
}),despesas))));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"evolucao-mensal","evolucao-mensal",-676229682),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"despesas-historico","despesas-historico",-1529211160)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entradas-historico","entradas-historico",-736138754)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"faturas-historico","faturas-historico",-231586393)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mes-atual","mes-atual",1459588153)], null),(function (p__6846,_){
var vec__6847 = p__6846;
var despesas = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6847,(0),null);
var entradas = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6847,(1),null);
var faturas = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6847,(2),null);
var mes_atual = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6847,(3),null);
var ano = new cljs.core.Keyword(null,"ano","ano",109602792).cljs$core$IFn$_invoke$arity$1(mes_atual);
var desp_ano = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6841_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ano","ano",109602792).cljs$core$IFn$_invoke$arity$1(p1__6841_SHARP_),ano);
}),despesas);
var ent_ano = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6842_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(casa_financas.subs.ano_da_data(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(p1__6842_SHARP_)),ano);
}),entradas);
var fat_map = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (f){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mes","mes",-890288111).cljs$core$IFn$_invoke$arity$1(f),f], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6843_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ano","ano",109602792).cljs$core$IFn$_invoke$arity$1(p1__6843_SHARP_),ano);
}),faturas)));
var despesas_credito_por_mes = cljs.core.group_by(new cljs.core.Keyword(null,"mes","mes",-890288111),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6844_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"forma_pagamento","forma_pagamento",205169437).cljs$core$IFn$_invoke$arity$1(p1__6844_SHARP_),"credito");
}),desp_ano));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (m){
var desp_m = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6845_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mes","mes",-890288111).cljs$core$IFn$_invoke$arity$1(p1__6845_SHARP_),m);
}),desp_ano);
var ent_m = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (e){
var temp__5823__auto__ = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(e);
if(cljs.core.truth_(temp__5823__auto__)){
var d = temp__5823__auto__;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.second(clojure.string.split.cljs$core$IFn$_invoke$arity$2(d,/-/)) | 0),m);
} else {
return null;
}
}),ent_ano);
var compras_cred = cljs.core.get.cljs$core$IFn$_invoke$arity$3(despesas_credito_por_mes,m,cljs.core.PersistentVector.EMPTY);
var total_cred = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"valor","valor",-957162173),compras_cred));
var pago_cred = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"valor_pago","valor_pago",586246073).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(fat_map,m));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})();
var rabo = cljs.core.max.cljs$core$IFn$_invoke$arity$2((0),(total_cred - pago_cred));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mes","mes",-890288111),m,new cljs.core.Keyword(null,"entradas","entradas",-1856269220),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"valor","valor",-957162173),ent_m)),new cljs.core.Keyword(null,"saidas","saidas",-1664827529),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"valor","valor",-957162173),desp_m)),new cljs.core.Keyword(null,"rabo","rabo",1438047001),rabo], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(13)));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"obrigacao-pessoa-mes","obrigacao-pessoa-mes",1475880371),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"despesas-do-mes","despesas-do-mes",2018938320)], null),(function (despesas,p__6864){
var vec__6865 = p__6864;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6865,(0),null);
var pessoa_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6865,(1),null);
var div_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(pessoa_id);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (d){
return (new cljs.core.Keyword(null,"valor","valor",-957162173).cljs$core$IFn$_invoke$arity$1(d) * ((function (){var or__5142__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"divisao","divisao",1361721447).cljs$core$IFn$_invoke$arity$1(d),div_key);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})() / 100.0));
}),despesas));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"total-credito-mes","total-credito-mes",-1293171558),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"despesas-do-mes","despesas-do-mes",2018938320)], null),(function (despesas,_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"valor","valor",-957162173),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6871_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"forma_pagamento","forma_pagamento",205169437).cljs$core$IFn$_invoke$arity$1(p1__6871_SHARP_),"credito");
}),despesas)));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"total-pago-mes","total-pago-mes",-1297613936),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"despesas-do-mes","despesas-do-mes",2018938320)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fatura","fatura",18781370)], null),(function (p__6876,_){
var vec__6877 = p__6876;
var despesas = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6877,(0),null);
var fatura = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6877,(1),null);
var pago_pix = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"valor","valor",-957162173),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6875_SHARP_){
var and__5140__auto__ = new cljs.core.Keyword(null,"pago","pago",27952415).cljs$core$IFn$_invoke$arity$1(p1__6875_SHARP_);
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"forma_pagamento","forma_pagamento",205169437).cljs$core$IFn$_invoke$arity$1(p1__6875_SHARP_),"credito");
} else {
return and__5140__auto__;
}
}),despesas)));
var pago_fatura = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"valor_pago","valor_pago",586246073).cljs$core$IFn$_invoke$arity$1(fatura);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})();
return (pago_pix + pago_fatura);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"saldo-conta","saldo-conta",2075345920),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"configuracoes","configuracoes",800955038)], null),(function (configs,_){
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(configs,"saldo_conta");
if(cljs.core.truth_(temp__5823__auto__)){
var v = temp__5823__auto__;
return parseFloat(v);
} else {
return null;
}
})], 0));

//# sourceMappingURL=casa_financas.subs.js.map
