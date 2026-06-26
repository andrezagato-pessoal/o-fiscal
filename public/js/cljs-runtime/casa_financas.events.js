goog.provide('casa_financas.events');
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),casa_financas.db.default_db,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"verificar-sessao","verificar-sessao",485814708)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"verificar-sessao","verificar-sessao",485814708),(function (p__6696,_){
var map__6697 = p__6696;
var map__6697__$1 = cljs.core.__destructure_map(map__6697);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6697__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),db,new cljs.core.Keyword("supabase","sessao","supabase/sessao",441049988),null], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"login","login",55217519),(function (p__6698,p__6699){
var map__6700 = p__6698;
var map__6700__$1 = cljs.core.__destructure_map(map__6700);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6700__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__6701 = p__6699;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6701,(0),null);
var email = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6701,(1),null);
var senha = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6701,(2),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"loading","loading",-737050189),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"erro","erro",-650947642),null], 0)),new cljs.core.Keyword("supabase","login","supabase/login",-1486428597),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"email","email",1415816706),email,new cljs.core.Keyword(null,"senha","senha",1788313207),senha], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"logout","logout",1418564329),(function (p__6704,_){
var map__6705 = p__6704;
var map__6705__$1 = cljs.core.__destructure_map(map__6705);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6705__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"loading","loading",-737050189),true),new cljs.core.Keyword("supabase","logout","supabase/logout",-929994715),null], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"usuario-logado","usuario-logado",-1131283605),(function (p__6707,p__6708){
var map__6710 = p__6707;
var map__6710__$1 = cljs.core.__destructure_map(map__6710);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6710__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__6711 = p__6708;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6711,(0),null);
var usuario = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6711,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"usuario-atual","usuario-atual",1299457439),usuario,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"loading","loading",-737050189),false], 0)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"carregar-dados","carregar-dados",-158741555)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"usuario-deslogado","usuario-deslogado",920247661),(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"usuario-atual","usuario-atual",1299457439),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"loading","loading",-737050189),false], 0));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"carregar-dados","carregar-dados",-158741555),(function (p__6717,_){
var map__6718 = p__6717;
var map__6718__$1 = cljs.core.__destructure_map(map__6718);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6718__$1,new cljs.core.Keyword(null,"db","db",993250759));
var mes = new cljs.core.Keyword(null,"mes-atual","mes-atual",1459588153).cljs$core$IFn$_invoke$arity$1(db);
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"loading","loading",-737050189),true),new cljs.core.Keyword("supabase","buscar-despesas","supabase/buscar-despesas",-1489815466),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ano","ano",109602792),new cljs.core.Keyword(null,"ano","ano",109602792).cljs$core$IFn$_invoke$arity$1(mes),new cljs.core.Keyword(null,"mes","mes",-890288111),new cljs.core.Keyword(null,"mes","mes",-890288111).cljs$core$IFn$_invoke$arity$1(mes)], null),new cljs.core.Keyword("supabase","buscar-entradas","supabase/buscar-entradas",-980669740),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ano","ano",109602792),new cljs.core.Keyword(null,"ano","ano",109602792).cljs$core$IFn$_invoke$arity$1(mes),new cljs.core.Keyword(null,"mes","mes",-890288111),new cljs.core.Keyword(null,"mes","mes",-890288111).cljs$core$IFn$_invoke$arity$1(mes)], null),new cljs.core.Keyword("supabase","buscar-templates","supabase/buscar-templates",253613684),null,new cljs.core.Keyword("supabase","buscar-historico","supabase/buscar-historico",-228455530),null,new cljs.core.Keyword("supabase","buscar-configuracoes","supabase/buscar-configuracoes",-33208108),null,new cljs.core.Keyword("supabase","buscar-categorias","supabase/buscar-categorias",1265109901),null,new cljs.core.Keyword("supabase","buscar-fatura","supabase/buscar-fatura",-1459715508),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ano","ano",109602792),new cljs.core.Keyword(null,"ano","ano",109602792).cljs$core$IFn$_invoke$arity$1(mes),new cljs.core.Keyword(null,"mes","mes",-890288111),new cljs.core.Keyword(null,"mes","mes",-890288111).cljs$core$IFn$_invoke$arity$1(mes)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-aba","set-aba",-1080478173),(function (db,p__6723){
var vec__6724 = p__6723;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6724,(0),null);
var aba = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6724,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"aba-ativa","aba-ativa",1507807669),aba);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mes-anterior","mes-anterior",679127544),(function (p__6731,_){
var map__6732 = p__6731;
var map__6732__$1 = cljs.core.__destructure_map(map__6732);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6732__$1,new cljs.core.Keyword(null,"db","db",993250759));
var map__6733 = new cljs.core.Keyword(null,"mes-atual","mes-atual",1459588153).cljs$core$IFn$_invoke$arity$1(db);
var map__6733__$1 = cljs.core.__destructure_map(map__6733);
var ano = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6733__$1,new cljs.core.Keyword(null,"ano","ano",109602792));
var mes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6733__$1,new cljs.core.Keyword(null,"mes","mes",-890288111));
var novo_mes = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mes,(1)))?(12):(mes - (1)));
var novo_ano = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mes,(1)))?(ano - (1)):ano);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"mes-atual","mes-atual",1459588153),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ano","ano",109602792),novo_ano,new cljs.core.Keyword(null,"mes","mes",-890288111),novo_mes], null)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"carregar-dados","carregar-dados",-158741555)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mes-proximo","mes-proximo",-618952688),(function (p__6734,_){
var map__6735 = p__6734;
var map__6735__$1 = cljs.core.__destructure_map(map__6735);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6735__$1,new cljs.core.Keyword(null,"db","db",993250759));
var map__6736 = new cljs.core.Keyword(null,"mes-atual","mes-atual",1459588153).cljs$core$IFn$_invoke$arity$1(db);
var map__6736__$1 = cljs.core.__destructure_map(map__6736);
var ano = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6736__$1,new cljs.core.Keyword(null,"ano","ano",109602792));
var mes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6736__$1,new cljs.core.Keyword(null,"mes","mes",-890288111));
var novo_mes = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mes,(12)))?(1):(mes + (1)));
var novo_ano = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mes,(12)))?(ano + (1)):ano);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"mes-atual","mes-atual",1459588153),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ano","ano",109602792),novo_ano,new cljs.core.Keyword(null,"mes","mes",-890288111),novo_mes], null)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"carregar-dados","carregar-dados",-158741555)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"abrir-modal","abrir-modal",514595978),(function (db,p__6742){
var vec__6744 = p__6742;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6744,(0),null);
var tipo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6744,(1),null);
var dados = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6744,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"modal","modal",-1031880850),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tipo","tipo",837631118),tipo,new cljs.core.Keyword(null,"dados","dados",1114219967),dados], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fechar-modal","fechar-modal",-361209308),(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"modal","modal",-1031880850),null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-despesas","set-despesas",904594768),(function (db,p__6750){
var vec__6751 = p__6750;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6751,(0),null);
var despesas = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6751,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"despesas","despesas",786163068),despesas,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"loading","loading",-737050189),false], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-entradas","set-entradas",1331158514),(function (db,p__6754){
var vec__6755 = p__6754;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6755,(0),null);
var entradas = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6755,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"entradas","entradas",-1856269220),entradas);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-templates","set-templates",-528281172),(function (db,p__6758){
var vec__6759 = p__6758;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6759,(0),null);
var templates = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6759,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"templates","templates",-1237401733),templates);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-historico","set-historico",-2033938345),(function (db,p__6762){
var vec__6763 = p__6762;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6763,(0),null);
var despesas = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6763,(1),null);
var entradas = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6763,(2),null);
var faturas = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6763,(3),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"despesas-historico","despesas-historico",-1529211160),despesas,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"entradas-historico","entradas-historico",-736138754),entradas,new cljs.core.Keyword(null,"faturas-historico","faturas-historico",-231586393),(function (){var or__5142__auto__ = faturas;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})()], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-erro","set-erro",1203080151),(function (db,p__6766){
var vec__6767 = p__6766;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6767,(0),null);
var erro = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6767,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"erro","erro",-650947642),erro);
}));
casa_financas.events.gerar_entradas_bolso = (function casa_financas$events$gerar_entradas_bolso(despesa,mes){
var pagadores = new cljs.core.Keyword(null,"pagadores","pagadores",-269867482).cljs$core$IFn$_invoke$arity$1(despesa);
var eh_bolso_QMARK_ = ((cljs.core.seq(pagadores)) && (cljs.core.not(cljs.core.some((function (p1__6776_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__6776_SHARP_,"conjunta");
}),pagadores))));
if(eh_bolso_QMARK_){
var valor_por_pagador = (new cljs.core.Keyword(null,"valor","valor",-957162173).cljs$core$IFn$_invoke$arity$1(despesa) / cljs.core.count(pagadores));
var data_str = (function (){var m = new cljs.core.Keyword(null,"mes","mes",-890288111).cljs$core$IFn$_invoke$arity$1(mes);
var a = new cljs.core.Keyword(null,"ano","ano",109602792).cljs$core$IFn$_invoke$arity$1(mes);
var d = new cljs.core.Keyword(null,"dia_do_mes","dia_do_mes",-485165205).cljs$core$IFn$_invoke$arity$1(despesa);
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((m < (10)))?"0":null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((d < (10)))?"0":null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(d));
})();
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (pid){
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid())),new cljs.core.Keyword(null,"pessoa_id","pessoa_id",-1264984672),pid,new cljs.core.Keyword(null,"valor","valor",-957162173),valor_por_pagador,new cljs.core.Keyword(null,"data","data",-232669377),data_str,new cljs.core.Keyword(null,"descricao","descricao",861900814),(""+"Pgto: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"descricao","descricao",861900814).cljs$core$IFn$_invoke$arity$1(despesa))),new cljs.core.Keyword(null,"auto","auto",-566279492),true,new cljs.core.Keyword(null,"despesa_ref","despesa_ref",-602134006),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(despesa)], null);
}),pagadores);
} else {
return null;
}
});
casa_financas.events.remover_entradas_auto = (function casa_financas$events$remover_entradas_auto(db,despesa_id){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"entradas","entradas",-1856269220),(function (es){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__6786_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"despesa_ref","despesa_ref",-602134006).cljs$core$IFn$_invoke$arity$1(p1__6786_SHARP_),despesa_id);
}),es));
}));
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"marcar-pago","marcar-pago",446617930),(function (p__6788,p__6789){
var map__6790 = p__6788;
var map__6790__$1 = cljs.core.__destructure_map(map__6790);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6790__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__6791 = p__6789;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6791,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6791,(1),null);
var despesa = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6787_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__6787_SHARP_),id);
}),new cljs.core.Keyword(null,"despesas","despesas",786163068).cljs$core$IFn$_invoke$arity$1(db)));
var mes = new cljs.core.Keyword(null,"mes-atual","mes-atual",1459588153).cljs$core$IFn$_invoke$arity$1(db);
var entradas_auto = (cljs.core.truth_(despesa)?casa_financas.events.gerar_entradas_bolso(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(despesa,new cljs.core.Keyword(null,"pago","pago",27952415),true),mes):null);
var novo_db = cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"despesas","despesas",786163068),(function (ds){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (d){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(d),id)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(d,new cljs.core.Keyword(null,"pago","pago",27952415),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data_pagamento","data_pagamento",987849358),(new Date()).toISOString()], 0));
} else {
return d;
}
}),ds);
}));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),novo_db,new cljs.core.Keyword("supabase","marcar-pago","supabase/marcar-pago",1985144366),id], null),((cljs.core.seq(entradas_auto))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (e){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"salvar-entrada","salvar-entrada",486272064),e], null);
}),entradas_auto)], null):null)], 0));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"desmarcar-pago","desmarcar-pago",-5576968),(function (p__6807,p__6808){
var map__6809 = p__6807;
var map__6809__$1 = cljs.core.__destructure_map(map__6809);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6809__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__6810 = p__6808;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6810,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6810,(1),null);
var novo_db = casa_financas.events.remover_entradas_auto(cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"despesas","despesas",786163068),(function (ds){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (d){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(d),id)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(d,new cljs.core.Keyword(null,"pago","pago",27952415),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data_pagamento","data_pagamento",987849358),null], 0));
} else {
return d;
}
}),ds);
})),id);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),novo_db,new cljs.core.Keyword("supabase","desmarcar-pago","supabase/desmarcar-pago",598668748),id,new cljs.core.Keyword("supabase","deletar-entradas-auto","supabase/deletar-entradas-auto",-469958718),id], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"salvar-despesa","salvar-despesa",1552836062),(function (p__6814,p__6815){
var map__6816 = p__6814;
var map__6816__$1 = cljs.core.__destructure_map(map__6816);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6816__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__6817 = p__6815;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6817,(0),null);
var despesa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6817,(1),null);
var despesa_ajustada = (cljs.core.truth_((function (){var and__5140__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"forma_pagamento","forma_pagamento",205169437).cljs$core$IFn$_invoke$arity$1(despesa),"credito");
if(and__5140__auto__){
return new cljs.core.Keyword(null,"data_input","data_input",131000147).cljs$core$IFn$_invoke$arity$1(despesa);
} else {
return and__5140__auto__;
}
})())?(function (){var data_parts = clojure.string.split.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"data_input","data_input",131000147).cljs$core$IFn$_invoke$arity$1(despesa),/-/);
var ano_c = (cljs.core.first(data_parts) | 0);
var mes_c = (cljs.core.second(data_parts) | 0);
var dia = new cljs.core.Keyword(null,"dia_do_mes","dia_do_mes",-485165205).cljs$core$IFn$_invoke$arity$1(despesa);
var periodo = casa_financas.utils.mes_fatura(dia,mes_c,ano_c);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([despesa,periodo], 0));
})():despesa);
var existe_QMARK_ = cljs.core.some((function (p1__6813_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__6813_SHARP_),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(despesa_ajustada));
}),new cljs.core.Keyword(null,"despesas","despesas",786163068).cljs$core$IFn$_invoke$arity$1(db));
var novo_db = cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"despesas","despesas",786163068),(function (ds){
if(cljs.core.truth_(existe_QMARK_)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (d){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(d),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(despesa_ajustada))){
return despesa_ajustada;
} else {
return d;
}
}),ds);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(ds),despesa_ajustada);
}
}));
var mes = new cljs.core.Keyword(null,"mes-atual","mes-atual",1459588153).cljs$core$IFn$_invoke$arity$1(db);
var entradas_auto = (cljs.core.truth_(new cljs.core.Keyword(null,"pago","pago",27952415).cljs$core$IFn$_invoke$arity$1(despesa_ajustada))?casa_financas.events.gerar_entradas_bolso(despesa_ajustada,mes):null);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(novo_db,new cljs.core.Keyword(null,"modal","modal",-1031880850),null),new cljs.core.Keyword("supabase","salvar-despesa","supabase/salvar-despesa",1888655042),despesa_ajustada], null),((cljs.core.seq(entradas_auto))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (e){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"salvar-entrada","salvar-entrada",486272064),e], null);
}),entradas_auto)], null):null)], 0));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"atualizar-despesa-inline","atualizar-despesa-inline",1128999415),(function (p__6839,p__6840){
var map__6841 = p__6839;
var map__6841__$1 = cljs.core.__destructure_map(map__6841);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6841__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__6842 = p__6840;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6842,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6842,(1),null);
var campo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6842,(2),null);
var valor = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6842,(3),null);
var atual = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6837_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__6837_SHARP_),id);
}),new cljs.core.Keyword(null,"despesas","despesas",786163068).cljs$core$IFn$_invoke$arity$1(db)));
var nova = (cljs.core.truth_(atual)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(atual,campo,valor):null);
if(cljs.core.truth_(nova)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"despesas","despesas",786163068),(function (ds){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__6838_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__6838_SHARP_),id)){
return nova;
} else {
return p1__6838_SHARP_;
}
}),ds);
})),new cljs.core.Keyword("supabase","salvar-despesa","supabase/salvar-despesa",1888655042),nova], null);
} else {
return null;
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"atualizar-entrada-inline","atualizar-entrada-inline",157348294),(function (p__6872,p__6873){
var map__6874 = p__6872;
var map__6874__$1 = cljs.core.__destructure_map(map__6874);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6874__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__6875 = p__6873;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6875,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6875,(1),null);
var campo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6875,(2),null);
var valor = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6875,(3),null);
var atual = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6861_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__6861_SHARP_),id);
}),new cljs.core.Keyword(null,"entradas","entradas",-1856269220).cljs$core$IFn$_invoke$arity$1(db)));
var nova = (cljs.core.truth_(atual)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(atual,campo,valor):null);
if(cljs.core.truth_(nova)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"entradas","entradas",-1856269220),(function (es){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__6862_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__6862_SHARP_),id)){
return nova;
} else {
return p1__6862_SHARP_;
}
}),es);
})),new cljs.core.Keyword("supabase","salvar-entrada","supabase/salvar-entrada",553645972),nova], null);
} else {
return null;
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"deletar-despesa","deletar-despesa",1441694847),(function (p__6886,p__6887){
var map__6888 = p__6886;
var map__6888__$1 = cljs.core.__destructure_map(map__6888);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6888__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__6889 = p__6887;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6889,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6889,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),casa_financas.events.remover_entradas_auto(cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"despesas","despesas",786163068),(function (ds){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__6884_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__6884_SHARP_),id);
}),ds));
})),id),new cljs.core.Keyword("supabase","deletar-despesa","supabase/deletar-despesa",1910682843),id,new cljs.core.Keyword("supabase","deletar-entradas-auto","supabase/deletar-entradas-auto",-469958718),id], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"salvar-entrada","salvar-entrada",486272064),(function (p__6905,p__6906){
var map__6907 = p__6905;
var map__6907__$1 = cljs.core.__destructure_map(map__6907);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6907__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__6908 = p__6906;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6908,(0),null);
var entrada = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6908,(1),null);
var existe_QMARK_ = cljs.core.some((function (p1__6896_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__6896_SHARP_),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(entrada));
}),new cljs.core.Keyword(null,"entradas","entradas",-1856269220).cljs$core$IFn$_invoke$arity$1(db));
var novo_db = cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"entradas","entradas",-1856269220),(function (es){
if(cljs.core.truth_(existe_QMARK_)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(e),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(entrada))){
return entrada;
} else {
return e;
}
}),es);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(es),entrada);
}
}));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(novo_db,new cljs.core.Keyword(null,"modal","modal",-1031880850),null),new cljs.core.Keyword("supabase","salvar-entrada","supabase/salvar-entrada",553645972),entrada], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"deletar-entrada","deletar-entrada",-333068260),(function (p__6917,p__6918){
var map__6920 = p__6917;
var map__6920__$1 = cljs.core.__destructure_map(map__6920);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6920__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__6921 = p__6918;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6921,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6921,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"entradas","entradas",-1856269220),(function (es){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__6912_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__6912_SHARP_),id);
}),es));
})),new cljs.core.Keyword("supabase","deletar-entrada","supabase/deletar-entrada",-803604216),id], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"salvar-template","salvar-template",-861853926),(function (p__6934,p__6935){
var map__6936 = p__6934;
var map__6936__$1 = cljs.core.__destructure_map(map__6936);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6936__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__6937 = p__6935;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6937,(0),null);
var template = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6937,(1),null);
var existe_QMARK_ = cljs.core.some((function (p1__6933_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__6933_SHARP_),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(template));
}),new cljs.core.Keyword(null,"templates","templates",-1237401733).cljs$core$IFn$_invoke$arity$1(db));
var novo_db = cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"templates","templates",-1237401733),(function (ts){
if(cljs.core.truth_(existe_QMARK_)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (t){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(template))){
return template;
} else {
return t;
}
}),ts);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(ts),template);
}
}));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(novo_db,new cljs.core.Keyword(null,"modal","modal",-1031880850),null),new cljs.core.Keyword("supabase","salvar-template","supabase/salvar-template",1353044998),template], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"deletar-template","deletar-template",-1473171528),(function (p__6952,p__6953){
var map__6957 = p__6952;
var map__6957__$1 = cljs.core.__destructure_map(map__6957);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6957__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__6958 = p__6953;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6958,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6958,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"templates","templates",-1237401733),(function (ts){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__6950_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__6950_SHARP_),id);
}),ts));
})),new cljs.core.Keyword("supabase","deletar-template","supabase/deletar-template",1262289036),id], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"toggle-template","toggle-template",1422016592),(function (p__6968,p__6969){
var map__6970 = p__6968;
var map__6970__$1 = cljs.core.__destructure_map(map__6970);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6970__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__6971 = p__6969;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6971,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6971,(1),null);
var novo_db = cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"templates","templates",-1237401733),(function (ts){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (t){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(t),id)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(t,new cljs.core.Keyword(null,"ativo","ativo",-757128626),cljs.core.not);
} else {
return t;
}
}),ts);
}));
var template = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6962_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__6962_SHARP_),id);
}),new cljs.core.Keyword(null,"templates","templates",-1237401733).cljs$core$IFn$_invoke$arity$1(novo_db)));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),novo_db,new cljs.core.Keyword("supabase","toggle-template","supabase/toggle-template",-919711820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ativo","ativo",-757128626),new cljs.core.Keyword(null,"ativo","ativo",-757128626).cljs$core$IFn$_invoke$arity$1(template)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"importar-templates","importar-templates",1481404056),(function (p__6978,_){
var map__6979 = p__6978;
var map__6979__$1 = cljs.core.__destructure_map(map__6979);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6979__$1,new cljs.core.Keyword(null,"db","db",993250759));
var templates_ativos = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ativo","ativo",-757128626),new cljs.core.Keyword(null,"templates","templates",-1237401733).cljs$core$IFn$_invoke$arity$1(db));
var mes = new cljs.core.Keyword(null,"mes-atual","mes-atual",1459588153).cljs$core$IFn$_invoke$arity$1(db);
var ids_existentes = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"origem_template_id","origem_template_id",1805058498),new cljs.core.Keyword(null,"despesas","despesas",786163068).cljs$core$IFn$_invoke$arity$1(db)));
var novas_despesas = cljs.core.vec((function (){var iter__5628__auto__ = (function casa_financas$events$iter__6981(s__6982){
return (new cljs.core.LazySeq(null,(function (){
var s__6982__$1 = s__6982;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__6982__$1);
if(temp__5823__auto__){
var s__6982__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__6982__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__6982__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__6984 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__6983 = (0);
while(true){
if((i__6983 < size__5627__auto__)){
var t = cljs.core._nth(c__5626__auto__,i__6983);
if((!(cljs.core.contains_QMARK_(ids_existentes,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(t))))){
cljs.core.chunk_append(b__6984,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"origem_template_id","origem_template_id",1805058498),new cljs.core.Keyword(null,"valor","valor",-957162173),new cljs.core.Keyword(null,"pagadores","pagadores",-269867482),new cljs.core.Keyword(null,"divisao","divisao",1361721447),new cljs.core.Keyword(null,"ano","ano",109602792),new cljs.core.Keyword(null,"dia_do_mes","dia_do_mes",-485165205),new cljs.core.Keyword(null,"descricao","descricao",861900814),new cljs.core.Keyword(null,"mes","mes",-890288111),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"forma_pagamento","forma_pagamento",205169437),new cljs.core.Keyword(null,"pago","pago",27952415)],[new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"valor_padrao","valor_padrao",1497405509).cljs$core$IFn$_invoke$arity$1(t),(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"pagador_padrao","pagador_padrao",-110996695).cljs$core$IFn$_invoke$arity$1(t);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["conjunta"], null);
}
})(),new cljs.core.Keyword(null,"divisao","divisao",1361721447).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"ano","ano",109602792).cljs$core$IFn$_invoke$arity$1(mes),(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"dia_padrao","dia_padrao",-2107424274).cljs$core$IFn$_invoke$arity$1(t);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (1);
}
})(),new cljs.core.Keyword(null,"descricao","descricao",861900814).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"mes","mes",-890288111).cljs$core$IFn$_invoke$arity$1(mes),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid())),new cljs.core.Keyword(null,"forma_pagamento_padrao","forma_pagamento_padrao",-266633711).cljs$core$IFn$_invoke$arity$1(t),false]));

var G__7157 = (i__6983 + (1));
i__6983 = G__7157;
continue;
} else {
var G__7158 = (i__6983 + (1));
i__6983 = G__7158;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__6984),casa_financas$events$iter__6981(cljs.core.chunk_rest(s__6982__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__6984),null);
}
} else {
var t = cljs.core.first(s__6982__$2);
if((!(cljs.core.contains_QMARK_(ids_existentes,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(t))))){
return cljs.core.cons(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"origem_template_id","origem_template_id",1805058498),new cljs.core.Keyword(null,"valor","valor",-957162173),new cljs.core.Keyword(null,"pagadores","pagadores",-269867482),new cljs.core.Keyword(null,"divisao","divisao",1361721447),new cljs.core.Keyword(null,"ano","ano",109602792),new cljs.core.Keyword(null,"dia_do_mes","dia_do_mes",-485165205),new cljs.core.Keyword(null,"descricao","descricao",861900814),new cljs.core.Keyword(null,"mes","mes",-890288111),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"forma_pagamento","forma_pagamento",205169437),new cljs.core.Keyword(null,"pago","pago",27952415)],[new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"valor_padrao","valor_padrao",1497405509).cljs$core$IFn$_invoke$arity$1(t),(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"pagador_padrao","pagador_padrao",-110996695).cljs$core$IFn$_invoke$arity$1(t);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["conjunta"], null);
}
})(),new cljs.core.Keyword(null,"divisao","divisao",1361721447).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"ano","ano",109602792).cljs$core$IFn$_invoke$arity$1(mes),(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"dia_padrao","dia_padrao",-2107424274).cljs$core$IFn$_invoke$arity$1(t);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (1);
}
})(),new cljs.core.Keyword(null,"descricao","descricao",861900814).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"mes","mes",-890288111).cljs$core$IFn$_invoke$arity$1(mes),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid())),new cljs.core.Keyword(null,"forma_pagamento_padrao","forma_pagamento_padrao",-266633711).cljs$core$IFn$_invoke$arity$1(t),false]),casa_financas$events$iter__6981(cljs.core.rest(s__6982__$2)));
} else {
var G__7160 = cljs.core.rest(s__6982__$2);
s__6982__$1 = G__7160;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(templates_ativos);
})());
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update.cljs$core$IFn$_invoke$arity$4(db,new cljs.core.Keyword(null,"despesas","despesas",786163068),cljs.core.into,novas_despesas),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (d){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"salvar-despesa-silencioso","salvar-despesa-silencioso",410347697),d], null);
}),novas_despesas)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"salvar-despesa-silencioso","salvar-despesa-silencioso",410347697),(function (_,p__7009){
var vec__7010 = p__7009;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7010,(0),null);
var despesa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7010,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("supabase","salvar-despesa","supabase/salvar-despesa",1888655042),despesa], null);
}));
re_frame.core.reg_fx(new cljs.core.Keyword("supabase","sessao","supabase/sessao",441049988),(function (_){
return casa_financas.supabase.sessao_atual((function (res){
var temp__5821__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(res,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"user","user",1532431356)], null));
if(cljs.core.truth_(temp__5821__auto__)){
var usuario = temp__5821__auto__;
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"usuario-logado","usuario-logado",-1131283605),usuario], null));
} else {
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"usuario-deslogado","usuario-deslogado",920247661)], null));
}
}));
}));
re_frame.core.reg_fx(new cljs.core.Keyword("supabase","login","supabase/login",-1486428597),(function (p__7020){
var map__7021 = p__7020;
var map__7021__$1 = cljs.core.__destructure_map(map__7021);
var email = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7021__$1,new cljs.core.Keyword(null,"email","email",1415816706));
var senha = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7021__$1,new cljs.core.Keyword(null,"senha","senha",1788313207));
return casa_financas.supabase.login_BANG_(email,senha,(function (res){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(res))){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-erro","set-erro",1203080151),"Email ou senha incorretos"], null));
} else {
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"usuario-logado","usuario-logado",-1131283605),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(res,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"user","user",1532431356)], null))], null));
}
}));
}));
re_frame.core.reg_fx(new cljs.core.Keyword("supabase","logout","supabase/logout",-929994715),(function (_){
return casa_financas.supabase.logout_BANG_((function (___$1){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"usuario-deslogado","usuario-deslogado",920247661)], null));
}));
}));
re_frame.core.reg_fx(new cljs.core.Keyword("supabase","buscar-despesas","supabase/buscar-despesas",-1489815466),(function (p__7033){
var map__7034 = p__7033;
var map__7034__$1 = cljs.core.__destructure_map(map__7034);
var ano = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7034__$1,new cljs.core.Keyword(null,"ano","ano",109602792));
var mes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7034__$1,new cljs.core.Keyword(null,"mes","mes",-890288111));
return casa_financas.supabase.buscar_despesas_BANG_(ano,mes,(function (despesas){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-despesas","set-despesas",904594768),despesas], null));
}));
}));
re_frame.core.reg_fx(new cljs.core.Keyword("supabase","buscar-entradas","supabase/buscar-entradas",-980669740),(function (p__7035){
var map__7036 = p__7035;
var map__7036__$1 = cljs.core.__destructure_map(map__7036);
var ano = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7036__$1,new cljs.core.Keyword(null,"ano","ano",109602792));
var mes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7036__$1,new cljs.core.Keyword(null,"mes","mes",-890288111));
return casa_financas.supabase.buscar_entradas_BANG_(ano,mes,(function (entradas){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-entradas","set-entradas",1331158514),entradas], null));
}));
}));
re_frame.core.reg_fx(new cljs.core.Keyword("supabase","buscar-templates","supabase/buscar-templates",253613684),(function (_){
return casa_financas.supabase.buscar_templates_BANG_((function (templates){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-templates","set-templates",-528281172),templates], null));
}));
}));
re_frame.core.reg_fx(new cljs.core.Keyword("supabase","salvar-despesa","supabase/salvar-despesa",1888655042),(function (despesa){
return casa_financas.supabase.salvar_despesa_BANG_(despesa,(function (err){
if(cljs.core.truth_(err)){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-erro","set-erro",1203080151),"Erro ao salvar despesa"], null));
} else {
return null;
}
}));
}));
re_frame.core.reg_fx(new cljs.core.Keyword("supabase","marcar-pago","supabase/marcar-pago",1985144366),(function (id){
return casa_financas.supabase.marcar_pago_BANG_(id,(function (err){
if(cljs.core.truth_(err)){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-erro","set-erro",1203080151),"Erro ao marcar como pago"], null));
} else {
return null;
}
}));
}));
re_frame.core.reg_fx(new cljs.core.Keyword("supabase","desmarcar-pago","supabase/desmarcar-pago",598668748),(function (id){
return casa_financas.supabase.desmarcar_pago_BANG_(id,(function (err){
if(cljs.core.truth_(err)){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-erro","set-erro",1203080151),"Erro ao desmarcar pagamento"], null));
} else {
return null;
}
}));
}));
re_frame.core.reg_fx(new cljs.core.Keyword("supabase","salvar-entrada","supabase/salvar-entrada",553645972),(function (entrada){
return casa_financas.supabase.salvar_entrada_BANG_(entrada,(function (err){
if(cljs.core.truth_(err)){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-erro","set-erro",1203080151),"Erro ao salvar entrada"], null));
} else {
return null;
}
}));
}));
re_frame.core.reg_fx(new cljs.core.Keyword("supabase","deletar-entrada","supabase/deletar-entrada",-803604216),(function (id){
return casa_financas.supabase.deletar_BANG_("entradas",id);
}));
re_frame.core.reg_fx(new cljs.core.Keyword("supabase","deletar-entradas-auto","supabase/deletar-entradas-auto",-469958718),(function (despesa_id){
return casa_financas.supabase.deletar_entradas_auto_BANG_(despesa_id);
}));
re_frame.core.reg_fx(new cljs.core.Keyword("supabase","salvar-template","supabase/salvar-template",1353044998),(function (template){
return casa_financas.supabase.salvar_template_BANG_(template,(function (err){
if(cljs.core.truth_(err)){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-erro","set-erro",1203080151),"Erro ao salvar template"], null));
} else {
return null;
}
}));
}));
re_frame.core.reg_fx(new cljs.core.Keyword("supabase","toggle-template","supabase/toggle-template",-919711820),(function (p__7045){
var map__7046 = p__7045;
var map__7046__$1 = cljs.core.__destructure_map(map__7046);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7046__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ativo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7046__$1,new cljs.core.Keyword(null,"ativo","ativo",-757128626));
return casa_financas.supabase.toggle_template_BANG_(id,ativo,(function (err){
if(cljs.core.truth_(err)){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-erro","set-erro",1203080151),"Erro ao atualizar template"], null));
} else {
return null;
}
}));
}));
re_frame.core.reg_fx(new cljs.core.Keyword("supabase","deletar-despesa","supabase/deletar-despesa",1910682843),(function (id){
return casa_financas.supabase.deletar_BANG_("despesa_mensal",id);
}));
re_frame.core.reg_fx(new cljs.core.Keyword("supabase","deletar-template","supabase/deletar-template",1262289036),(function (id){
return casa_financas.supabase.deletar_BANG_("template_despesa",id);
}));
re_frame.core.reg_fx(new cljs.core.Keyword("supabase","buscar-historico","supabase/buscar-historico",-228455530),(function (_){
return casa_financas.supabase.buscar_todas_despesas_BANG_((function (despesas){
return casa_financas.supabase.buscar_todas_entradas_BANG_((function (entradas){
return casa_financas.supabase.buscar_todas_faturas_BANG_((function (faturas){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-historico","set-historico",-2033938345),despesas,entradas,faturas], null));
}));
}));
}));
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (events){
var seq__7052 = cljs.core.seq(events);
var chunk__7053 = null;
var count__7054 = (0);
var i__7055 = (0);
while(true){
if((i__7055 < count__7054)){
var e = chunk__7053.cljs$core$IIndexed$_nth$arity$2(null,i__7055);
re_frame.core.dispatch(e);


var G__7161 = seq__7052;
var G__7162 = chunk__7053;
var G__7163 = count__7054;
var G__7164 = (i__7055 + (1));
seq__7052 = G__7161;
chunk__7053 = G__7162;
count__7054 = G__7163;
i__7055 = G__7164;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__7052);
if(temp__5823__auto__){
var seq__7052__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__7052__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__7052__$1);
var G__7165 = cljs.core.chunk_rest(seq__7052__$1);
var G__7166 = c__5673__auto__;
var G__7167 = cljs.core.count(c__5673__auto__);
var G__7168 = (0);
seq__7052 = G__7165;
chunk__7053 = G__7166;
count__7054 = G__7167;
i__7055 = G__7168;
continue;
} else {
var e = cljs.core.first(seq__7052__$1);
re_frame.core.dispatch(e);


var G__7169 = cljs.core.next(seq__7052__$1);
var G__7170 = null;
var G__7171 = (0);
var G__7172 = (0);
seq__7052 = G__7169;
chunk__7053 = G__7170;
count__7054 = G__7171;
i__7055 = G__7172;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.core.reg_fx(new cljs.core.Keyword("supabase","buscar-configuracoes","supabase/buscar-configuracoes",-33208108),(function (_){
return casa_financas.supabase.buscar_configuracoes_BANG_((function (configs){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-configuracoes","set-configuracoes",-1581975206),configs], null));
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-configuracoes","set-configuracoes",-1581975206),(function (db,p__7058){
var vec__7059 = p__7058;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7059,(0),null);
var configs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7059,(1),null);
casa_financas.utils.reset_cores_BANG_(configs);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"configuracoes","configuracoes",800955038),configs);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"salvar-cor-pessoa","salvar-cor-pessoa",-1731590300),(function (p__7062,p__7063){
var map__7064 = p__7062;
var map__7064__$1 = cljs.core.__destructure_map(map__7064);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7064__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__7065 = p__7063;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7065,(0),null);
var pessoa_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7065,(1),null);
var cor = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7065,(2),null);
var chave = (""+"cor_"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(pessoa_id));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(casa_financas.utils.cores_pessoas,cljs.core.assoc,chave,cor);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"configuracoes","configuracoes",800955038),chave], null),cor),new cljs.core.Keyword("supabase","salvar-configuracao","supabase/salvar-configuracao",-476194239),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"chave","chave",519748335),chave,new cljs.core.Keyword(null,"valor","valor",-957162173),cor], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"salvar-saldo-conta","salvar-saldo-conta",-1133925709),(function (p__7076,p__7077){
var map__7078 = p__7076;
var map__7078__$1 = cljs.core.__destructure_map(map__7078);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7078__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__7079 = p__7077;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7079,(0),null);
var valor = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7079,(1),null);
var nv = (function (x){
var v = parseFloat(x);
if(cljs.core.truth_(isNaN(v))){
return (0);
} else {
return v;
}
});
var ents = new cljs.core.Keyword(null,"entradas-historico","entradas-historico",-736138754).cljs$core$IFn$_invoke$arity$1(db);
var desp = new cljs.core.Keyword(null,"despesas-historico","despesas-historico",-1529211160).cljs$core$IFn$_invoke$arity$1(db);
var fats = new cljs.core.Keyword(null,"faturas-historico","faturas-historico",-231586393).cljs$core$IFn$_invoke$arity$1(db);
var fluxo = ((cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__7072_SHARP_){
return nv(new cljs.core.Keyword(null,"valor","valor",-957162173).cljs$core$IFn$_invoke$arity$1(p1__7072_SHARP_));
}),ents)) - cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__7073_SHARP_){
return nv(new cljs.core.Keyword(null,"valor","valor",-957162173).cljs$core$IFn$_invoke$arity$1(p1__7073_SHARP_));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__7074_SHARP_){
var and__5140__auto__ = new cljs.core.Keyword(null,"pago","pago",27952415).cljs$core$IFn$_invoke$arity$1(p1__7074_SHARP_);
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"forma_pagamento","forma_pagamento",205169437).cljs$core$IFn$_invoke$arity$1(p1__7074_SHARP_),"credito");
} else {
return and__5140__auto__;
}
}),desp)))) - cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__7075_SHARP_){
return nv(new cljs.core.Keyword(null,"valor_pago","valor_pago",586246073).cljs$core$IFn$_invoke$arity$1(p1__7075_SHARP_));
}),fats)));
var base = (nv(valor) - fluxo);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"configuracoes","configuracoes",800955038),"saldo_base"], null),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(base))),new cljs.core.Keyword("supabase","salvar-configuracao","supabase/salvar-configuracao",-476194239),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"chave","chave",519748335),"saldo_base",new cljs.core.Keyword(null,"valor","valor",-957162173),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(base))], null)], null);
}));
re_frame.core.reg_fx(new cljs.core.Keyword("supabase","salvar-configuracao","supabase/salvar-configuracao",-476194239),(function (p__7086){
var map__7087 = p__7086;
var map__7087__$1 = cljs.core.__destructure_map(map__7087);
var chave = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7087__$1,new cljs.core.Keyword(null,"chave","chave",519748335));
var valor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7087__$1,new cljs.core.Keyword(null,"valor","valor",-957162173));
return casa_financas.supabase.salvar_configuracao_BANG_(chave,valor,(function (){
return console.log("Configura\u00E7\u00E3o salva");
}));
}));
re_frame.core.reg_fx(new cljs.core.Keyword("supabase","buscar-categorias","supabase/buscar-categorias",1265109901),(function (_){
return casa_financas.supabase.buscar_categorias_BANG_((function (cats){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-categorias","set-categorias",1440200875),cats], null));
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-categorias","set-categorias",1440200875),(function (db,p__7088){
var vec__7089 = p__7088;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7089,(0),null);
var cats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7089,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"categorias","categorias",-181626523),cats);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"salvar-categoria","salvar-categoria",357732616),(function (p__7092,p__7093){
var map__7095 = p__7092;
var map__7095__$1 = cljs.core.__destructure_map(map__7095);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7095__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__7096 = p__7093;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7096,(0),null);
var categoria = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7096,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("supabase","salvar-categoria","supabase/salvar-categoria",-1454465060),categoria], null);
}));
re_frame.core.reg_fx(new cljs.core.Keyword("supabase","salvar-categoria","supabase/salvar-categoria",-1454465060),(function (categoria){
return casa_financas.supabase.salvar_categoria_BANG_(categoria,(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"carregar-dados","carregar-dados",-158741555)], null));
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-fatura","set-fatura",-177665949),(function (db,p__7102){
var vec__7103 = p__7102;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7103,(0),null);
var fatura = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7103,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"fatura","fatura",18781370),fatura);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"salvar-pagamento-fatura","salvar-pagamento-fatura",1301159182),(function (p__7107,p__7108){
var map__7109 = p__7107;
var map__7109__$1 = cljs.core.__destructure_map(map__7109);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7109__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__7110 = p__7108;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7110,(0),null);
var valor_pago = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7110,(1),null);
var mes = new cljs.core.Keyword(null,"mes-atual","mes-atual",1459588153).cljs$core$IFn$_invoke$arity$1(db);
var fatura = new cljs.core.Keyword(null,"fatura","fatura",18781370).cljs$core$IFn$_invoke$arity$1(db);
var despesas = new cljs.core.Keyword(null,"despesas","despesas",786163068).cljs$core$IFn$_invoke$arity$1(db);
var creditos = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__7106_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"forma_pagamento","forma_pagamento",205169437).cljs$core$IFn$_invoke$arity$1(p1__7106_SHARP_),"credito");
}),despesas);
var total = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"valor","valor",-957162173),creditos));
var pago_total_QMARK_ = (valor_pago >= total);
var soma_div = (function (pessoa_key){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (d){
return (new cljs.core.Keyword(null,"valor","valor",-957162173).cljs$core$IFn$_invoke$arity$1(d) * (cljs.core.get.cljs$core$IFn$_invoke$arity$3(d,pessoa_key,(0)) / (100)));
}),creditos));
});
var div_andre = (((total > (0)))?((100) * (soma_div(new cljs.core.Keyword(null,"divisao_andre","divisao_andre",-1837479647)) / total)):(25));
var div_bianca = (((total > (0)))?((100) * (soma_div(new cljs.core.Keyword(null,"divisao_bianca","divisao_bianca",-601970961)) / total)):(25));
var div_fernanda = (((total > (0)))?((100) * (soma_div(new cljs.core.Keyword(null,"divisao_fernanda","divisao_fernanda",360832815)) / total)):(25));
var div_bruna = (((total > (0)))?((100) * (soma_div(new cljs.core.Keyword(null,"divisao_bruna","divisao_bruna",1669406733)) / total)):(25));
var nova_fatura = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"divisao_andre","divisao_andre",-1837479647),new cljs.core.Keyword(null,"ano","ano",109602792),new cljs.core.Keyword(null,"divisao_bruna","divisao_bruna",1669406733),new cljs.core.Keyword(null,"divisao_bianca","divisao_bianca",-601970961),new cljs.core.Keyword(null,"divisao_fernanda","divisao_fernanda",360832815),new cljs.core.Keyword(null,"mes","mes",-890288111),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"valor_total","valor_total",1765765977),new cljs.core.Keyword(null,"valor_pago","valor_pago",586246073)],[div_andre,new cljs.core.Keyword(null,"ano","ano",109602792).cljs$core$IFn$_invoke$arity$1(mes),div_bruna,div_bianca,div_fernanda,new cljs.core.Keyword(null,"mes","mes",-890288111).cljs$core$IFn$_invoke$arity$1(mes),(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(fatura);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()));
}
})(),total,valor_pago]);
var novo_db = (function (){var G__7117 = db;
var G__7117__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__7117,new cljs.core.Keyword(null,"fatura","fatura",18781370),nova_fatura,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"modal","modal",-1031880850),null], 0))
;
if(pago_total_QMARK_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__7117__$1,new cljs.core.Keyword(null,"despesas","despesas",786163068),(function (ds){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (d){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"forma_pagamento","forma_pagamento",205169437).cljs$core$IFn$_invoke$arity$1(d),"credito")){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,new cljs.core.Keyword(null,"pago","pago",27952415),true);
} else {
return d;
}
}),ds);
}));
} else {
return G__7117__$1;
}
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),novo_db,new cljs.core.Keyword("supabase","salvar-fatura","supabase/salvar-fatura",1793352485),nova_fatura], null);
}));
re_frame.core.reg_fx(new cljs.core.Keyword("supabase","buscar-fatura","supabase/buscar-fatura",-1459715508),(function (p__7118){
var map__7119 = p__7118;
var map__7119__$1 = cljs.core.__destructure_map(map__7119);
var ano = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7119__$1,new cljs.core.Keyword(null,"ano","ano",109602792));
var mes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7119__$1,new cljs.core.Keyword(null,"mes","mes",-890288111));
return casa_financas.supabase.buscar_fatura_BANG_(ano,mes,(function (fatura){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-fatura","set-fatura",-177665949),fatura], null));
}));
}));
re_frame.core.reg_fx(new cljs.core.Keyword("supabase","salvar-fatura","supabase/salvar-fatura",1793352485),(function (fatura){
return casa_financas.supabase.salvar_fatura_BANG_(fatura,(function (err){
if(cljs.core.truth_(err)){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-erro","set-erro",1203080151),"Erro ao salvar fatura"], null));
} else {
return null;
}
}));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"desmarcar-fatura","desmarcar-fatura",-2096898598),(function (p__7124,_){
var map__7125 = p__7124;
var map__7125__$1 = cljs.core.__destructure_map(map__7125);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7125__$1,new cljs.core.Keyword(null,"db","db",993250759));
var mes = new cljs.core.Keyword(null,"mes-atual","mes-atual",1459588153).cljs$core$IFn$_invoke$arity$1(db);
var fatura = new cljs.core.Keyword(null,"fatura","fatura",18781370).cljs$core$IFn$_invoke$arity$1(db);
var nova_fatura = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fatura,new cljs.core.Keyword(null,"valor_pago","valor_pago",586246073),(0));
var novo_db = cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"fatura","fatura",18781370),nova_fatura),new cljs.core.Keyword(null,"despesas","despesas",786163068),(function (ds){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (d){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"forma_pagamento","forma_pagamento",205169437).cljs$core$IFn$_invoke$arity$1(d),"credito")){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,new cljs.core.Keyword(null,"pago","pago",27952415),false);
} else {
return d;
}
}),ds);
}));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),novo_db,new cljs.core.Keyword("supabase","salvar-fatura","supabase/salvar-fatura",1793352485),nova_fatura,new cljs.core.Keyword("supabase","desmarcar-creditos","supabase/desmarcar-creditos",1242110984),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ano","ano",109602792),new cljs.core.Keyword(null,"ano","ano",109602792).cljs$core$IFn$_invoke$arity$1(mes),new cljs.core.Keyword(null,"mes","mes",-890288111),new cljs.core.Keyword(null,"mes","mes",-890288111).cljs$core$IFn$_invoke$arity$1(mes)], null)], null);
}));
re_frame.core.reg_fx(new cljs.core.Keyword("supabase","desmarcar-creditos","supabase/desmarcar-creditos",1242110984),(function (p__7127){
var map__7129 = p__7127;
var map__7129__$1 = cljs.core.__destructure_map(map__7129);
var ano = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7129__$1,new cljs.core.Keyword(null,"ano","ano",109602792));
var mes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7129__$1,new cljs.core.Keyword(null,"mes","mes",-890288111));
return casa_financas.supabase.desmarcar_creditos_BANG_(ano,mes,(function (err){
if(cljs.core.truth_(err)){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-erro","set-erro",1203080151),"Erro ao desmarcar cr\u00E9ditos"], null));
} else {
return null;
}
}));
}));

//# sourceMappingURL=casa_financas.events.js.map
