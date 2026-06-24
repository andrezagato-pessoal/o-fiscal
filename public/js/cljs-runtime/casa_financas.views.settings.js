goog.provide('casa_financas.views.settings');
casa_financas.views.settings.pessoas_ids = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["andre","bianca","fernanda","bruna"], null);
casa_financas.views.settings.paleta_cores = new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, ["#2563EB","#7C3AED","#DB2777","#DC2626","#EA580C","#D97706","#65A30D","#966305","#0891B2","#eed428","#221e6e","#380f5f","#C026D3","#0F766E","#15803D"], null);
casa_financas.views.settings.secao_perfis = (function casa_financas$views$settings$secao_perfis(aberto_atom){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"px-1 mb-2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.components.comum.label,"Quem mora aqui"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"bg-panel rounded-panel border border-rule p-1"], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,pid){
var cor = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cor-pessoa","cor-pessoa",-1425578316),pid], null)));
var ult_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(3));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(""+"w-full flex items-center gap-3 px-3.5 py-3 transition-colors "+"hover:bg-panel-2 active:bg-rule-soft "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((ult_QMARK_)?null:"border-b border-rule-soft "))),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(aberto_atom,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(aberto_atom),pid))?null:pid));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.components.comum.avatar,pid,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),"md"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex-1 text-left text-[14px] font-bold text-ink"], null),casa_financas.utils.pessoa_nome(pid)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"rounded-full",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),"22px",new cljs.core.Keyword(null,"height","height",1025178622),"22px",new cljs.core.Keyword(null,"background-color","background-color",570434026),cor,new cljs.core.Keyword(null,"border","border",1444987323),"2px solid #FFFFFF",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"0 0 0 1.5px var(--rule)"], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),pid], null));
}),casa_financas.views.settings.pessoas_ids))], null)], null);
});
casa_financas.views.settings.secao_cores_pessoa = (function casa_financas$views$settings$secao_cores_pessoa(aberto_atom){
var temp__5823__auto__ = cljs.core.deref(aberto_atom);
if(cljs.core.truth_(temp__5823__auto__)){
var pid = temp__5823__auto__;
var cor_atual = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cor-pessoa","cor-pessoa",-1425578316),pid], null)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mt-5"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"px-1 mb-2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.components.comum.label,(""+"Cor de "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(casa_financas.utils.pessoa_nome(pid)))], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"bg-panel rounded-panel border border-rule p-4"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-[11px] text-ink-3 font-semibold mb-3"], null),"15 op\u00E7\u00F5es pra renovar a paleta sem mudar a personalidade."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"grid grid-cols-5 gap-2.5"], null),(function (){var iter__5628__auto__ = (function casa_financas$views$settings$secao_cores_pessoa_$_iter__31874(s__31875){
return (new cljs.core.LazySeq(null,(function (){
var s__31875__$1 = s__31875;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__31875__$1);
if(temp__5823__auto____$1){
var s__31875__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__31875__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__31875__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__31877 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__31876 = (0);
while(true){
if((i__31876 < size__5627__auto__)){
var cor = cljs.core._nth(c__5626__auto__,i__31876);
cljs.core.chunk_append(b__31877,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"aspect-square rounded-full transition-all",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),cor,new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cor,cor_atual))?"inset 0 0 0 3px #fff, 0 0 0 2px var(--ink)":"inset 0 0 0 2px #fff")], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__31876,cor,c__5626__auto__,size__5627__auto__,b__31877,s__31875__$2,temp__5823__auto____$1,cor_atual,pid,temp__5823__auto__){
return (function (){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"salvar-cor-pessoa","salvar-cor-pessoa",-1731590300),pid,cor], null));

return cljs.core.reset_BANG_(aberto_atom,null);
});})(i__31876,cor,c__5626__auto__,size__5627__auto__,b__31877,s__31875__$2,temp__5823__auto____$1,cor_atual,pid,temp__5823__auto__))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cor], null)));

var G__31878 = (i__31876 + (1));
i__31876 = G__31878;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31877),casa_financas$views$settings$secao_cores_pessoa_$_iter__31874(cljs.core.chunk_rest(s__31875__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31877),null);
}
} else {
var cor = cljs.core.first(s__31875__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"aspect-square rounded-full transition-all",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),cor,new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cor,cor_atual))?"inset 0 0 0 3px #fff, 0 0 0 2px var(--ink)":"inset 0 0 0 2px #fff")], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (cor,s__31875__$2,temp__5823__auto____$1,cor_atual,pid,temp__5823__auto__){
return (function (){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"salvar-cor-pessoa","salvar-cor-pessoa",-1731590300),pid,cor], null));

return cljs.core.reset_BANG_(aberto_atom,null);
});})(cor,s__31875__$2,temp__5823__auto____$1,cor_atual,pid,temp__5823__auto__))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cor], null)),casa_financas$views$settings$secao_cores_pessoa_$_iter__31874(cljs.core.rest(s__31875__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(casa_financas.views.settings.paleta_cores);
})()], null)], null)], null);
} else {
return null;
}
});
casa_financas.views.settings.secao_conta = (function casa_financas$views$settings$secao_conta(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mt-5"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"px-1 mb-2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.components.comum.label,"Conta"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"bg-panel rounded-panel border border-rule p-1"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-full flex items-center gap-3 px-3.5 py-3.5 border-b border-rule-soft hover:bg-panel-2 transition-colors",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-aba","set-aba",-1080478173),new cljs.core.Keyword(null,"importar","importar",893653638)], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-base"], null),"\u2B06"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex-1 text-left text-[14px] font-bold text-ink"], null),"Importar CSV"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-ink-3"], null),"\u203A"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-full flex items-center gap-3 px-3.5 py-3.5 hover:bg-panel-2 transition-colors",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"logout","logout",1418564329)], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-base"], null),"\u21A9"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex-1 text-left text-[14px] font-bold text-bad"], null),"Sair da conta"], null)], null)], null)], null);
});
casa_financas.views.settings.settings = (function casa_financas$views$settings$settings(){
var aberto = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex flex-col pb-28"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"px-5 pt-4 pb-3"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"display text-2xl"], null),"Configura\u00E7\u00F5es"], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"px-4"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.settings.secao_perfis,aberto], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.settings.secao_cores_pessoa,aberto], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.settings.secao_conta], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-center mt-6 text-[10.5px] text-ink-3 font-semibold"], null),"O Fiscal \u00B7 v3"], null)], null)], null);
});
});

//# sourceMappingURL=casa_financas.views.settings.js.map
