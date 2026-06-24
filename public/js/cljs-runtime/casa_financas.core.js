goog.provide('casa_financas.core');
casa_financas.core.modo_admin_QMARK_ = (function casa_financas$core$modo_admin_QMARK_(){
var search = window.location.search;
var and__5140__auto__ = search;
if(cljs.core.truth_(and__5140__auto__)){
return clojure.string.includes_QMARK_(search,"view=admin");
} else {
return and__5140__auto__;
}
});
casa_financas.core.nav_item = (function casa_financas$core$nav_item(aba,emoji,label){
var aba_ativa = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aba-ativa","aba-ativa",1507807669)], null)));
var ativo_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(aba_ativa,aba);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex flex-col items-center justify-center flex-1 py-1 gap-0.5 transition-opacity",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-aba","set-aba",-1080478173),aba], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(""+"text-lg leading-none "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((ativo_QMARK_)?"opacity-100":"opacity-50 grayscale")))], null),emoji], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(""+"text-[10px] font-bold tracking-wide "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((ativo_QMARK_)?"text-ink":"text-ink-3")))], null),label], null)], null);
});
casa_financas.core.nav_bottom = (function casa_financas$core$nav_bottom(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"fixed bottom-0 left-0 right-0 bg-panel/95 backdrop-blur-xl border-t border-rule flex items-center z-40",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding-bottom","padding-bottom",-1899795591),"calc(env(safe-area-inset-bottom) + 12px)",new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"8px"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.core.nav_item,new cljs.core.Keyword(null,"dashboard","dashboard",-631747508),"\uD83C\uDFE0","In\u00EDcio"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.core.nav_item,new cljs.core.Keyword(null,"despesas","despesas",786163068),"\uD83D\uDCB8","Despesas"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.core.nav_item,new cljs.core.Keyword(null,"entradas","entradas",-1856269220),"\uD83D\uDCB0","Entradas"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.core.nav_item,new cljs.core.Keyword(null,"templates","templates",-1237401733),"\uD83D\uDCCB","Recorr."], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.core.nav_item,new cljs.core.Keyword(null,"settings","settings",1556144875),"\u2699","Config"], null)], null);
});
casa_financas.core.botao_flutuante = (function casa_financas$core$botao_flutuante(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"fixed bottom-24 right-4 w-14 h-14 bg-ink rounded-full flex items-center justify-center text-cream text-2xl font-light z-40 shadow-fab transition-transform active:scale-95",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"0 12px 24px rgba(35,28,18,0.28), 0 0 0 4px rgba(251,246,239,0.7)"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"abrir-modal","abrir-modal",514595978),new cljs.core.Keyword(null,"nova-acao","nova-acao",-174989988),cljs.core.PersistentArrayMap.EMPTY], null));
})], null),"+"], null);
});
casa_financas.core.tela_ativa = (function casa_financas$core$tela_ativa(){
var aba = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aba-ativa","aba-ativa",1507807669)], null)));
var G__6827 = aba;
var G__6827__$1 = (((G__6827 instanceof cljs.core.Keyword))?G__6827.fqn:null);
switch (G__6827__$1) {
case "dashboard":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.dashboard.dashboard], null);

break;
case "despesas":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.despesas.despesas], null);

break;
case "entradas":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.entradas.entradas], null);

break;
case "templates":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.templates.templates], null);

break;
case "importar":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.importar.importar], null);

break;
case "settings":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.settings.settings], null);

break;
default:
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.dashboard.dashboard], null);

}
});
casa_financas.core.app_autenticado = (function casa_financas$core$app_autenticado(){
if(cljs.core.truth_(casa_financas.core.modo_admin_QMARK_())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.admin.admin], null);
} else {
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"min-h-screen bg-cream max-w-lg mx-auto relative font-sans text-ink"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.core.tela_ativa], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.core.nav_bottom], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.core.botao_flutuante], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.modais.modais], null)], null);
}
});
casa_financas.core.app = (function casa_financas$core$app(){
var usuario = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"usuario-atual","usuario-atual",1299457439)], null)));
var loading = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189)], null)));
if(cljs.core.truth_(loading)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"min-h-screen flex items-center justify-center bg-cream"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex flex-col items-center gap-4"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-10 h-10 border-2 border-ink border-t-transparent rounded-full animate-spin"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-ink-2 font-bold text-sm"], null),"Carregando..."], null)], null)], null);
} else {
if(cljs.core.truth_(usuario)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.core.app_autenticado], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.login.login], null);

}
}
});
casa_financas.core.init = (function casa_financas$core$init(){
if(cljs.core.truth_(navigator.serviceWorker)){
navigator.serviceWorker.getRegistrations().then((function (regs){
var seq__6828 = cljs.core.seq(regs);
var chunk__6829 = null;
var count__6830 = (0);
var i__6831 = (0);
while(true){
if((i__6831 < count__6830)){
var reg = chunk__6829.cljs$core$IIndexed$_nth$arity$2(null,i__6831);
reg.unregister();


var G__6833 = seq__6828;
var G__6834 = chunk__6829;
var G__6835 = count__6830;
var G__6836 = (i__6831 + (1));
seq__6828 = G__6833;
chunk__6829 = G__6834;
count__6830 = G__6835;
i__6831 = G__6836;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__6828);
if(temp__5823__auto__){
var seq__6828__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__6828__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__6828__$1);
var G__6837 = cljs.core.chunk_rest(seq__6828__$1);
var G__6838 = c__5673__auto__;
var G__6839 = cljs.core.count(c__5673__auto__);
var G__6840 = (0);
seq__6828 = G__6837;
chunk__6829 = G__6838;
count__6830 = G__6839;
i__6831 = G__6840;
continue;
} else {
var reg = cljs.core.first(seq__6828__$1);
reg.unregister();


var G__6841 = cljs.core.next(seq__6828__$1);
var G__6842 = null;
var G__6843 = (0);
var G__6844 = (0);
seq__6828 = G__6841;
chunk__6829 = G__6842;
count__6830 = G__6843;
i__6831 = G__6844;
continue;
}
} else {
return null;
}
}
break;
}
}));
} else {
}

re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432)], null));

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.core.app], null),document.getElementById("app"));
});

//# sourceMappingURL=casa_financas.core.js.map
