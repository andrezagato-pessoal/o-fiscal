goog.provide('casa_financas.views.templates');
casa_financas.views.templates.item_template = (function casa_financas$views$templates$item_template(template){
var categorias = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"categorias","categorias",-181626523)], null)));
var cat = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__26093_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__26093_SHARP_),new cljs.core.Keyword(null,"categoria_id","categoria_id",-705480723).cljs$core$IFn$_invoke$arity$1(template));
}),categorias));
var ativo_QMARK_ = new cljs.core.Keyword(null,"ativo","ativo",-757128626).cljs$core$IFn$_invoke$arity$1(template);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(""+"px-3 py-3 mb-1.5 bg-panel rounded-panel border border-rule-soft "+"flex items-center gap-2.5 cursor-pointer active:bg-panel-2 transition-colors "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(ativo_QMARK_)?null:"opacity-55"))),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"abrir-modal","abrir-modal",514595978),new cljs.core.Keyword(null,"editar-template","editar-template",-1536598193),template], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-9 h-9 rounded-xl bg-panel-2 flex items-center justify-center text-base flex-shrink-0"], null),(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"emoji","emoji",1031230144).cljs$core$IFn$_invoke$arity$1(cat);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "\uD83D\uDCCB";
}
})()], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex-1 min-w-0"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-[13.5px] font-bold text-ink truncate"], null),new cljs.core.Keyword(null,"descricao","descricao",861900814).cljs$core$IFn$_invoke$arity$1(template)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"num text-[10.5px] text-ink-3 font-semibold mt-0.5"], null),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"forma_pagamento_padrao","forma_pagamento_padrao",-266633711).cljs$core$IFn$_invoke$arity$1(template),"credito"))?"cart\u00E3o":"pix"))+" \u00B7 todo m\u00EAs"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(new cljs.core.Keyword(null,"dia_padrao","dia_padrao",-2107424274).cljs$core$IFn$_invoke$arity$1(template))?(""+" \u00B7 dia "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dia_padrao","dia_padrao",-2107424274).cljs$core$IFn$_invoke$arity$1(template))):null)))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"display num text-[13px] text-ink mr-1"], null),casa_financas.utils.formatar_valor_br(new cljs.core.Keyword(null,"valor_padrao","valor_padrao",1497405509).cljs$core$IFn$_invoke$arity$1(template))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(""+"w-10 h-6 rounded-pill p-0.5 flex items-center transition-all flex-shrink-0 "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(ativo_QMARK_)?"bg-ink justify-end":"bg-rule justify-start"))),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
e.stopPropagation();

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-template","toggle-template",1422016592),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(template)], null));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-5 h-5 rounded-full bg-white"], null)], null)], null)], null);
});
casa_financas.views.templates.templates = (function casa_financas$views$templates$templates(){
var templates = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"templates","templates",-1237401733)], null)));
var ativos = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ativo","ativo",-757128626),templates);
var total_ativos = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"valor_padrao","valor_padrao",1497405509),ativos));
var mes_atual = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mes-atual","mes-atual",1459588153)], null)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex flex-col pb-28"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"px-5 pt-4 pb-3 flex items-center justify-between"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"display text-2xl"], null),"Recorrentes"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"px-3.5 py-1.5 rounded-pill bg-panel border border-rule text-xs font-bold text-ink hover:bg-panel-2",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"abrir-modal","abrir-modal",514595978),new cljs.core.Keyword(null,"novo-template","novo-template",-809713410),cljs.core.PersistentArrayMap.EMPTY], null));
})], null),"+ novo"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"px-4"], null),((cljs.core.seq(ativos))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"rounded-panel border border-rule p-4 shadow-soft",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),"linear-gradient(135deg, #FFFFFF 0%, #FFF1E5 100%)"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.components.comum.label,(""+"Se importar agora pra "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case(casa_financas.utils.mes_nome(new cljs.core.Keyword(null,"mes","mes",-890288111).cljs$core$IFn$_invoke$arity$1(mes_atual)))))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-baseline gap-2 mt-1"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"display num text-[26px]"], null),casa_financas.utils.formatar_valor_br(total_ativos)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-[11px] text-ink-3 font-semibold"], null),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(ativos))+" despesas ser\u00E3o criadas")], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"mt-3 w-full py-3 rounded-pill bg-ink text-cream text-[13px] font-bold hover:bg-ink-2",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"importar-templates","importar-templates",1481404056)], null));
})], null),"Importar templates"], null)], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mt-5 mb-2 px-1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.components.comum.label,"Lista"], null)], null),((cljs.core.empty_QMARK_(templates))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex flex-col items-center justify-center py-12 text-ink-3"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-4xl mb-3 opacity-50"], null),"\uD83D\uDCCB"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-sm font-semibold"], null),"Nenhum template"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs mt-1"], null),"Toque em + novo pra criar"], null)], null):(function (){var iter__5628__auto__ = (function casa_financas$views$templates$templates_$_iter__26095(s__26096){
return (new cljs.core.LazySeq(null,(function (){
var s__26096__$1 = s__26096;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__26096__$1);
if(temp__5823__auto__){
var s__26096__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26096__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__26096__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__26098 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__26097 = (0);
while(true){
if((i__26097 < size__5627__auto__)){
var t = cljs.core._nth(c__5626__auto__,i__26097);
cljs.core.chunk_append(b__26098,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.templates.item_template,t], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(t)], null)));

var G__26099 = (i__26097 + (1));
i__26097 = G__26099;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26098),casa_financas$views$templates$templates_$_iter__26095(cljs.core.chunk_rest(s__26096__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26098),null);
}
} else {
var t = cljs.core.first(s__26096__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.templates.item_template,t], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(t)], null)),casa_financas$views$templates$templates_$_iter__26095(cljs.core.rest(s__26096__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__26094_SHARP_){
var or__5142__auto__ = new cljs.core.Keyword(null,"dia_padrao","dia_padrao",-2107424274).cljs$core$IFn$_invoke$arity$1(p1__26094_SHARP_);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (1);
}
}),templates));
})())], null)], null);
});

//# sourceMappingURL=casa_financas.views.templates.js.map
