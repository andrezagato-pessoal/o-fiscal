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
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"despesas-do-mes","despesas-do-mes",2018938320),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"despesas","despesas",786163068)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mes-atual","mes-atual",1459588153)], null),(function (p__6719,_){
var vec__6720 = p__6719;
var despesas = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6720,(0),null);
var mes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6720,(1),null);
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (d){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ano","ano",109602792).cljs$core$IFn$_invoke$arity$1(d),new cljs.core.Keyword(null,"ano","ano",109602792).cljs$core$IFn$_invoke$arity$1(mes))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mes","mes",-890288111).cljs$core$IFn$_invoke$arity$1(d),new cljs.core.Keyword(null,"mes","mes",-890288111).cljs$core$IFn$_invoke$arity$1(mes))));
}),despesas);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"entradas-do-mes","entradas-do-mes",956329241),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entradas","entradas",-1856269220)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mes-atual","mes-atual",1459588153)], null),(function (p__6727,_){
var vec__6728 = p__6727;
var entradas = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6728,(0),null);
var mes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6728,(1),null);
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
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"saldo-acumulado-anterior","saldo-acumulado-anterior",1945889983),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"despesas-historico","despesas-historico",-1529211160)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entradas-historico","entradas-historico",-736138754)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"faturas-historico","faturas-historico",-231586393)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mes-atual","mes-atual",1459588153)], null),(function (p__6743,_){
var vec__6747 = p__6743;
var despesas = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6747,(0),null);
var entradas = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6747,(1),null);
var faturas = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6747,(2),null);
var mes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6747,(3),null);
var desp_ant = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6737_SHARP_){
return casa_financas.subs.mes_estritamente_anterior_QMARK_(new cljs.core.Keyword(null,"ano","ano",109602792).cljs$core$IFn$_invoke$arity$1(p1__6737_SHARP_),new cljs.core.Keyword(null,"mes","mes",-890288111).cljs$core$IFn$_invoke$arity$1(p1__6737_SHARP_),new cljs.core.Keyword(null,"ano","ano",109602792).cljs$core$IFn$_invoke$arity$1(mes),new cljs.core.Keyword(null,"mes","mes",-890288111).cljs$core$IFn$_invoke$arity$1(mes));
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
var faturas_ant = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6738_SHARP_){
return casa_financas.subs.mes_estritamente_anterior_QMARK_(new cljs.core.Keyword(null,"ano","ano",109602792).cljs$core$IFn$_invoke$arity$1(p1__6738_SHARP_),new cljs.core.Keyword(null,"mes","mes",-890288111).cljs$core$IFn$_invoke$arity$1(p1__6738_SHARP_),new cljs.core.Keyword(null,"ano","ano",109602792).cljs$core$IFn$_invoke$arity$1(mes),new cljs.core.Keyword(null,"mes","mes",-890288111).cljs$core$IFn$_invoke$arity$1(mes));
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
var non_credit_pago = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"valor","valor",-957162173),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6739_SHARP_){
var and__5140__auto__ = new cljs.core.Keyword(null,"pago","pago",27952415).cljs$core$IFn$_invoke$arity$1(p1__6739_SHARP_);
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"forma_pagamento","forma_pagamento",205169437).cljs$core$IFn$_invoke$arity$1(p1__6739_SHARP_),"credito");
} else {
return and__5140__auto__;
}
}),desp_ant)));
var credit_by_month = cljs.core.group_by((function (d){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ano","ano",109602792).cljs$core$IFn$_invoke$arity$1(d),new cljs.core.Keyword(null,"mes","mes",-890288111).cljs$core$IFn$_invoke$arity$1(d)], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6740_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"forma_pagamento","forma_pagamento",205169437).cljs$core$IFn$_invoke$arity$1(p1__6740_SHARP_),"credito");
}),desp_ant));
var total_credit = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__6771){
var vec__6772 = p__6771;
var month_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6772,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6772,(1),null);
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(fatura_map,month_key,(0));
}),credit_by_month));
return (total_entr - (non_credit_pago + total_credit));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"saldo-acumulado-anterior-pessoa","saldo-acumulado-anterior-pessoa",930608122),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__6782){
var vec__6783 = p__6782;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6783,(0),null);
var pessoa_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6783,(1),null);
var mes = new cljs.core.Keyword(null,"mes-atual","mes-atual",1459588153).cljs$core$IFn$_invoke$arity$1(db);
var despesas = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6777_SHARP_){
return casa_financas.subs.mes_estritamente_anterior_QMARK_(new cljs.core.Keyword(null,"ano","ano",109602792).cljs$core$IFn$_invoke$arity$1(p1__6777_SHARP_),new cljs.core.Keyword(null,"mes","mes",-890288111).cljs$core$IFn$_invoke$arity$1(p1__6777_SHARP_),new cljs.core.Keyword(null,"ano","ano",109602792).cljs$core$IFn$_invoke$arity$1(mes),new cljs.core.Keyword(null,"mes","mes",-890288111).cljs$core$IFn$_invoke$arity$1(mes));
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
var faturas_ant = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6778_SHARP_){
return casa_financas.subs.mes_estritamente_anterior_QMARK_(new cljs.core.Keyword(null,"ano","ano",109602792).cljs$core$IFn$_invoke$arity$1(p1__6778_SHARP_),new cljs.core.Keyword(null,"mes","mes",-890288111).cljs$core$IFn$_invoke$arity$1(p1__6778_SHARP_),new cljs.core.Keyword(null,"ano","ano",109602792).cljs$core$IFn$_invoke$arity$1(mes),new cljs.core.Keyword(null,"mes","mes",-890288111).cljs$core$IFn$_invoke$arity$1(mes));
}),new cljs.core.Keyword(null,"faturas-historico","faturas-historico",-231586393).cljs$core$IFn$_invoke$arity$1(db));
var fatura_map = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,f){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ano","ano",109602792).cljs$core$IFn$_invoke$arity$1(f),new cljs.core.Keyword(null,"mes","mes",-890288111).cljs$core$IFn$_invoke$arity$1(f)], null),f);
}),cljs.core.PersistentArrayMap.EMPTY,faturas_ant);
var div_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((""+"divisao_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(pessoa_id)));
var total_entr = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"valor","valor",-957162173),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6779_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pessoa_id","pessoa_id",-1264984672).cljs$core$IFn$_invoke$arity$1(p1__6779_SHARP_),pessoa_id);
}),entradas)));
var non_credit_debitos = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (d){
var pct = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"divisao","divisao",1361721447).cljs$core$IFn$_invoke$arity$1(d),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(pessoa_id),(0));
return (new cljs.core.Keyword(null,"valor","valor",-957162173).cljs$core$IFn$_invoke$arity$1(d) * (pct / (100)));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6780_SHARP_){
var and__5140__auto__ = new cljs.core.Keyword(null,"pago","pago",27952415).cljs$core$IFn$_invoke$arity$1(p1__6780_SHARP_);
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"forma_pagamento","forma_pagamento",205169437).cljs$core$IFn$_invoke$arity$1(p1__6780_SHARP_),"credito");
} else {
return and__5140__auto__;
}
}),despesas)));
var credit_by_month = cljs.core.group_by((function (d){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ano","ano",109602792).cljs$core$IFn$_invoke$arity$1(d),new cljs.core.Keyword(null,"mes","mes",-890288111).cljs$core$IFn$_invoke$arity$1(d)], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6781_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"forma_pagamento","forma_pagamento",205169437).cljs$core$IFn$_invoke$arity$1(p1__6781_SHARP_),"credito");
}),despesas));
var credit_debitos = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__6794){
var vec__6795 = p__6794;
var month_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6795,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6795,(1),null);
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
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"cor-pessoa","cor-pessoa",-1425578316),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"configuracoes","configuracoes",800955038)], null),(function (configs,p__6802){
var vec__6803 = p__6802;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6803,(0),null);
var pessoa_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6803,(1),null);
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(configs,(""+"cor_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(pessoa_id)),(function (){var G__6806 = pessoa_id;
switch (G__6806) {
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
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"posicao-pessoa-total","posicao-pessoa-total",-323518376),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resumo-mes-atual","resumo-mes-atual",1425807400)], null),(function (dados,p__6820){
var vec__6821 = p__6820;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6821,(0),null);
var pessoa_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6821,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(dados,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pessoa_id,new cljs.core.Keyword(null,"acumulado","acumulado",-2083289601)], null),(0));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"resumo-mensal-pessoas","resumo-mensal-pessoas",-1804393678),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"despesas-historico","despesas-historico",-1529211160)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entradas-historico","entradas-historico",-736138754)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mes-atual","mes-atual",1459588153)], null),(function (p__6831,_){
var vec__6832 = p__6831;
var despesas = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6832,(0),null);
var entradas = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6832,(1),null);
var mes_atual = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6832,(2),null);
var pessoas = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["andre","bianca","fernanda","bruna"], null);
var lim = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ano","ano",109602792).cljs$core$IFn$_invoke$arity$1(mes_atual),new cljs.core.Keyword(null,"mes","mes",-890288111).cljs$core$IFn$_invoke$arity$1(mes_atual)], null);
var meses = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6826_SHARP_){
return (cljs.core.compare(p1__6826_SHARP_,lim) <= (0));
}),cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (d){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ano","ano",109602792).cljs$core$IFn$_invoke$arity$1(d),new cljs.core.Keyword(null,"mes","mes",-890288111).cljs$core$IFn$_invoke$arity$1(d)], null);
}),despesas),cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__6825_SHARP_){
return casa_financas.subs.mes_da_data(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(p1__6825_SHARP_));
}),entradas)))));
return cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__6845,p__6846){
var vec__6847 = p__6845;
var linhas = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6847,(0),null);
var acc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6847,(1),null);
var vec__6850 = p__6846;
var ano = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6850,(0),null);
var mes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6850,(1),null);
var desp_m = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6827_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ano","ano",109602792).cljs$core$IFn$_invoke$arity$1(p1__6827_SHARP_),ano)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mes","mes",-890288111).cljs$core$IFn$_invoke$arity$1(p1__6827_SHARP_),mes)));
}),despesas);
var ent_m = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6828_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(casa_financas.subs.mes_da_data(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(p1__6828_SHARP_)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ano,mes], null));
}),entradas);
var vec__6853 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__6863,pid){
var vec__6865 = p__6863;
var lm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6865,(0),null);
var am = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6865,(1),null);
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
var aporte = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"valor","valor",-957162173),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6829_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pessoa_id","pessoa_id",-1264984672).cljs$core$IFn$_invoke$arity$1(p1__6829_SHARP_),pid);
}),ent_m)));
var saldo = (aporte - cota);
var novo = (cljs.core.get.cljs$core$IFn$_invoke$arity$2(am,pid) + saldo);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(lm,pid,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"aporte","aporte",-623613565),aporte,new cljs.core.Keyword(null,"cota","cota",355260977),cota,new cljs.core.Keyword(null,"saldo","saldo",-306276818),saldo,new cljs.core.Keyword(null,"acumulado","acumulado",-2083289601),novo], null)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(am,pid,novo)], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,acc], null),pessoas);
var linha = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6853,(0),null);
var acc2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6853,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(linhas,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ano","ano",109602792),ano,new cljs.core.Keyword(null,"mes","mes",-890288111),mes,new cljs.core.Keyword(null,"pessoas","pessoas",-1747895801),linha], null)),acc2], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 4, ["andre",(0),"bianca",(0),"fernanda",(0),"bruna",(0)], null)], null),meses));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"resumo-mes-atual","resumo-mes-atual",1425807400),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resumo-mensal-pessoas","resumo-mensal-pessoas",-1804393678)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mes-atual","mes-atual",1459588153)], null),(function (p__6880,_){
var vec__6881 = p__6880;
var resumo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6881,(0),null);
var mes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6881,(1),null);
var or__5142__auto__ = cljs.core.some((function (p1__6879_SHARP_){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ano","ano",109602792).cljs$core$IFn$_invoke$arity$1(p1__6879_SHARP_),new cljs.core.Keyword(null,"ano","ano",109602792).cljs$core$IFn$_invoke$arity$1(mes))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mes","mes",-890288111).cljs$core$IFn$_invoke$arity$1(p1__6879_SHARP_),new cljs.core.Keyword(null,"mes","mes",-890288111).cljs$core$IFn$_invoke$arity$1(mes))))){
return new cljs.core.Keyword(null,"pessoas","pessoas",-1747895801).cljs$core$IFn$_invoke$arity$1(p1__6879_SHARP_);
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
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"posicao-pessoa-ano","posicao-pessoa-ano",-52716376),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"despesas-historico","despesas-historico",-1529211160)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entradas-historico","entradas-historico",-736138754)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mes-atual","mes-atual",1459588153)], null),(function (p__6897,p__6898){
var vec__6899 = p__6897;
var despesas = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6899,(0),null);
var entradas = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6899,(1),null);
var mes_atual = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6899,(2),null);
var vec__6902 = p__6898;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6902,(0),null);
var pessoa_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6902,(1),null);
var ano = new cljs.core.Keyword(null,"ano","ano",109602792).cljs$core$IFn$_invoke$arity$1(mes_atual);
var div_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(pessoa_id);
var desp_ano = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6893_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ano","ano",109602792).cljs$core$IFn$_invoke$arity$1(p1__6893_SHARP_),ano);
}),despesas);
var ent_ano = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6894_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(casa_financas.subs.ano_da_data(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(p1__6894_SHARP_)),ano);
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
var aporte = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"valor","valor",-957162173),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6895_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pessoa_id","pessoa_id",-1264984672).cljs$core$IFn$_invoke$arity$1(p1__6895_SHARP_),pessoa_id);
}),ent_ano)));
return (aporte - obrigacao);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"rabo-cartao-ano","rabo-cartao-ano",580721986),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"despesas-historico","despesas-historico",-1529211160)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"faturas-historico","faturas-historico",-231586393)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mes-atual","mes-atual",1459588153)], null),(function (p__6924,_){
var vec__6925 = p__6924;
var despesas = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6925,(0),null);
var faturas = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6925,(1),null);
var mes_atual = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6925,(2),null);
var ano = new cljs.core.Keyword(null,"ano","ano",109602792).cljs$core$IFn$_invoke$arity$1(mes_atual);
var credito_por_mes = cljs.core.group_by(new cljs.core.Keyword(null,"mes","mes",-890288111),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6916_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ano","ano",109602792).cljs$core$IFn$_invoke$arity$1(p1__6916_SHARP_),ano)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"forma_pagamento","forma_pagamento",205169437).cljs$core$IFn$_invoke$arity$1(p1__6916_SHARP_),"credito")));
}),despesas));
var fatura_map = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (f){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mes","mes",-890288111).cljs$core$IFn$_invoke$arity$1(f),f], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6919_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ano","ano",109602792).cljs$core$IFn$_invoke$arity$1(p1__6919_SHARP_),ano);
}),faturas)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__6940){
var vec__6941 = p__6940;
var mes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6941,(0),null);
var compras = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6941,(1),null);
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
return cljs.core.vec(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"total","total",1916810418),cljs.core._GT_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__6951){
var vec__6954 = p__6951;
var cat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6954,(0),null);
var ds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6954,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"categoria","categoria",1019034182),cat,new cljs.core.Keyword(null,"total","total",1916810418),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"valor","valor",-957162173),ds)),new cljs.core.Keyword(null,"count","count",2139924085),cljs.core.count(ds)], null);
}),cljs.core.group_by((function (p1__6949_SHARP_){
var or__5142__auto__ = new cljs.core.Keyword(null,"categoria_nome","categoria_nome",843741669).cljs$core$IFn$_invoke$arity$1(p1__6949_SHARP_);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "Sem categoria";
}
}),despesas))));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"evolucao-mensal","evolucao-mensal",-676229682),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"despesas-historico","despesas-historico",-1529211160)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entradas-historico","entradas-historico",-736138754)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"faturas-historico","faturas-historico",-231586393)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mes-atual","mes-atual",1459588153)], null),(function (p__6974,_){
var vec__6975 = p__6974;
var despesas = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6975,(0),null);
var entradas = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6975,(1),null);
var faturas = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6975,(2),null);
var mes_atual = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6975,(3),null);
var ano = new cljs.core.Keyword(null,"ano","ano",109602792).cljs$core$IFn$_invoke$arity$1(mes_atual);
var desp_ano = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6963_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ano","ano",109602792).cljs$core$IFn$_invoke$arity$1(p1__6963_SHARP_),ano);
}),despesas);
var ent_ano = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6964_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(casa_financas.subs.ano_da_data(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(p1__6964_SHARP_)),ano);
}),entradas);
var fat_map = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (f){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mes","mes",-890288111).cljs$core$IFn$_invoke$arity$1(f),f], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6965_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ano","ano",109602792).cljs$core$IFn$_invoke$arity$1(p1__6965_SHARP_),ano);
}),faturas)));
var despesas_credito_por_mes = cljs.core.group_by(new cljs.core.Keyword(null,"mes","mes",-890288111),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6966_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"forma_pagamento","forma_pagamento",205169437).cljs$core$IFn$_invoke$arity$1(p1__6966_SHARP_),"credito");
}),desp_ano));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (m){
var desp_m = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6967_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mes","mes",-890288111).cljs$core$IFn$_invoke$arity$1(p1__6967_SHARP_),m);
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
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"obrigacao-pessoa-mes","obrigacao-pessoa-mes",1475880371),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"despesas-do-mes","despesas-do-mes",2018938320)], null),(function (despesas,p__6989){
var vec__6995 = p__6989;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6995,(0),null);
var pessoa_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6995,(1),null);
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"valor","valor",-957162173),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__7003_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"forma_pagamento","forma_pagamento",205169437).cljs$core$IFn$_invoke$arity$1(p1__7003_SHARP_),"credito");
}),despesas)));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"total-pago-mes","total-pago-mes",-1297613936),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"despesas-do-mes","despesas-do-mes",2018938320)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fatura","fatura",18781370)], null),(function (p__7005,_){
var vec__7006 = p__7005;
var despesas = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7006,(0),null);
var fatura = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7006,(1),null);
var pago_pix = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"valor","valor",-957162173),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__7004_SHARP_){
var and__5140__auto__ = new cljs.core.Keyword(null,"pago","pago",27952415).cljs$core$IFn$_invoke$arity$1(p1__7004_SHARP_);
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"forma_pagamento","forma_pagamento",205169437).cljs$core$IFn$_invoke$arity$1(p1__7004_SHARP_),"credito");
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
casa_financas.subs.n_val = (function casa_financas$subs$n_val(x){
var v = parseFloat(x);
if(cljs.core.truth_(isNaN(v))){
return (0);
} else {
return v;
}
});
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"saldo-conta-calculado","saldo-conta-calculado",-1244913234),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"configuracoes","configuracoes",800955038)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entradas-historico","entradas-historico",-736138754)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"despesas-historico","despesas-historico",-1529211160)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"faturas-historico","faturas-historico",-231586393)], null),(function (p__7029,_){
var vec__7030 = p__7029;
var cfg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7030,(0),null);
var entradas = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7030,(1),null);
var despesas = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7030,(2),null);
var faturas = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7030,(3),null);
var base = casa_financas.subs.n_val(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cfg,"saldo_base"));
var ent = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__7022_SHARP_){
return casa_financas.subs.n_val(new cljs.core.Keyword(null,"valor","valor",-957162173).cljs$core$IFn$_invoke$arity$1(p1__7022_SHARP_));
}),entradas));
var dir = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__7026_SHARP_){
return casa_financas.subs.n_val(new cljs.core.Keyword(null,"valor","valor",-957162173).cljs$core$IFn$_invoke$arity$1(p1__7026_SHARP_));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__7027_SHARP_){
var and__5140__auto__ = new cljs.core.Keyword(null,"pago","pago",27952415).cljs$core$IFn$_invoke$arity$1(p1__7027_SHARP_);
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"forma_pagamento","forma_pagamento",205169437).cljs$core$IFn$_invoke$arity$1(p1__7027_SHARP_),"credito");
} else {
return and__5140__auto__;
}
}),despesas)));
var fat = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__7028_SHARP_){
return casa_financas.subs.n_val(new cljs.core.Keyword(null,"valor_pago","valor_pago",586246073).cljs$core$IFn$_invoke$arity$1(p1__7028_SHARP_));
}),faturas));
return (base + ((ent - dir) - fat));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"fatura-pago-mes","fatura-pago-mes",-1418703116),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fatura","fatura",18781370)], null),(function (fatura,_){
var or__5142__auto__ = new cljs.core.Keyword(null,"valor_pago","valor_pago",586246073).cljs$core$IFn$_invoke$arity$1(fatura);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"fatura-status-mes","fatura-status-mes",-1029197540),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"total-credito-mes","total-credito-mes",-1293171558)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fatura","fatura",18781370)], null),(function (p__7037,_){
var vec__7038 = p__7037;
var total = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7038,(0),null);
var fatura = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7038,(1),null);
var pago = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"valor_pago","valor_pago",586246073).cljs$core$IFn$_invoke$arity$1(fatura);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})();
if((((total > (0))) && ((pago >= total)))){
return new cljs.core.Keyword(null,"paga","paga",-490375672);
} else {
if((pago > (0))){
return new cljs.core.Keyword(null,"parcial","parcial",488083582);
} else {
return new cljs.core.Keyword(null,"pendente","pendente",311658061);

}
}
})], 0));

//# sourceMappingURL=casa_financas.subs.js.map
