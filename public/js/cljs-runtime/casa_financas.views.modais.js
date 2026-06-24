goog.provide('casa_financas.views.modais');
casa_financas.views.modais.pessoas_ids = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["andre","bianca","fernanda","bruna","conjunta"], null);
casa_financas.views.modais.pessoas_ids_sem_conjunta = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["andre","bianca","fernanda","bruna"], null);
casa_financas.views.modais.presets_divisao = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"25\u00B725\u00B725\u00B725",new cljs.core.Keyword(null,"divisao","divisao",1361721447),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"andre","andre",936361062),(25),new cljs.core.Keyword(null,"bianca","bianca",820619526),(25),new cljs.core.Keyword(null,"fernanda","fernanda",1421441127),(25),new cljs.core.Keyword(null,"bruna","bruna",1508842390),(25)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"30\u00B730\u00B720\u00B720",new cljs.core.Keyword(null,"divisao","divisao",1361721447),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"andre","andre",936361062),(30),new cljs.core.Keyword(null,"bianca","bianca",820619526),(30),new cljs.core.Keyword(null,"fernanda","fernanda",1421441127),(20),new cljs.core.Keyword(null,"bruna","bruna",1508842390),(20)], null)], null)], null);
casa_financas.views.modais.seletor_divisao = (function casa_financas$views$modais$seletor_divisao(divisao,on_change){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"space-y-2"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex gap-2"], null),(function (){var iter__5628__auto__ = (function casa_financas$views$modais$seletor_divisao_$_iter__31477(s__31478){
return (new cljs.core.LazySeq(null,(function (){
var s__31478__$1 = s__31478;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__31478__$1);
if(temp__5823__auto__){
var s__31478__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31478__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__31478__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__31480 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__31479 = (0);
while(true){
if((i__31479 < size__5627__auto__)){
var p = cljs.core._nth(c__5626__auto__,i__31479);
cljs.core.chunk_append(b__31480,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(""+"flex-1 py-2 rounded-panel text-xs font-medium border-2 transition-colors "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"divisao","divisao",1361721447).cljs$core$IFn$_invoke$arity$1(p),divisao))?"bg-ink text-cream border-ink":"text-ink-2 border-rule"))),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__31479,p,c__5626__auto__,size__5627__auto__,b__31480,s__31478__$2,temp__5823__auto__){
return (function (){
var G__31481 = new cljs.core.Keyword(null,"divisao","divisao",1361721447).cljs$core$IFn$_invoke$arity$1(p);
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__31481) : on_change.call(null,G__31481));
});})(i__31479,p,c__5626__auto__,size__5627__auto__,b__31480,s__31478__$2,temp__5823__auto__))
], null),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(p)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(p)], null)));

var G__31522 = (i__31479 + (1));
i__31479 = G__31522;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31480),casa_financas$views$modais$seletor_divisao_$_iter__31477(cljs.core.chunk_rest(s__31478__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31480),null);
}
} else {
var p = cljs.core.first(s__31478__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(""+"flex-1 py-2 rounded-panel text-xs font-medium border-2 transition-colors "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"divisao","divisao",1361721447).cljs$core$IFn$_invoke$arity$1(p),divisao))?"bg-ink text-cream border-ink":"text-ink-2 border-rule"))),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (p,s__31478__$2,temp__5823__auto__){
return (function (){
var G__31482 = new cljs.core.Keyword(null,"divisao","divisao",1361721447).cljs$core$IFn$_invoke$arity$1(p);
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__31482) : on_change.call(null,G__31482));
});})(p,s__31478__$2,temp__5823__auto__))
], null),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(p)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(p)], null)),casa_financas$views$modais$seletor_divisao_$_iter__31477(cljs.core.rest(s__31478__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(casa_financas.views.modais.presets_divisao);
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(""+"flex-1 py-2 rounded-panel text-xs font-medium border-2 transition-colors "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.not(cljs.core.some((function (p1__31475_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"divisao","divisao",1361721447).cljs$core$IFn$_invoke$arity$1(p1__31475_SHARP_),divisao);
}),casa_financas.views.modais.presets_divisao)))?"bg-ink text-cream border-ink":"text-ink-2 border-rule"))),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(divisao) : on_change.call(null,divisao));
})], null),"Manual"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"grid grid-cols-4 gap-1.5"], null),(function (){var iter__5628__auto__ = (function casa_financas$views$modais$seletor_divisao_$_iter__31483(s__31484){
return (new cljs.core.LazySeq(null,(function (){
var s__31484__$1 = s__31484;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__31484__$1);
if(temp__5823__auto__){
var s__31484__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31484__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__31484__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__31486 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__31485 = (0);
while(true){
if((i__31485 < size__5627__auto__)){
var pid = cljs.core._nth(c__5626__auto__,i__31485);
cljs.core.chunk_append(b__31486,(function (){var k = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(pid);
var pct = cljs.core.get.cljs$core$IFn$_invoke$arity$3(divisao,k,(0));
var cor = casa_financas.utils.pessoa_cor(pid);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex flex-col items-center gap-1"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs font-medium",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),cor], null)], null),casa_financas.utils.pessoa_inicial(pid)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"inputMode","inputMode",-1531650881),new cljs.core.Keyword(null,"pattern","pattern",242135423)],[(0),pct,"number",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-color","border-color",-2059162761),cor], null),(100),"w-full border-2 rounded-lg px-1 py-1.5 text-sm text-center focus:outline-none",((function (i__31485,k,pct,cor,pid,c__5626__auto__,size__5627__auto__,b__31486,s__31484__$2,temp__5823__auto__){
return (function (p1__31476_SHARP_){
var G__31487 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(divisao,k,(p1__31476_SHARP_.target.value | 0));
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__31487) : on_change.call(null,G__31487));
});})(i__31485,k,pct,cor,pid,c__5626__auto__,size__5627__auto__,b__31486,s__31484__$2,temp__5823__auto__))
,"numeric","[0-9]*"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs text-ink-3"], null),"%"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),pid], null));
})());

var G__31523 = (i__31485 + (1));
i__31485 = G__31523;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31486),casa_financas$views$modais$seletor_divisao_$_iter__31483(cljs.core.chunk_rest(s__31484__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31486),null);
}
} else {
var pid = cljs.core.first(s__31484__$2);
return cljs.core.cons((function (){var k = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(pid);
var pct = cljs.core.get.cljs$core$IFn$_invoke$arity$3(divisao,k,(0));
var cor = casa_financas.utils.pessoa_cor(pid);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex flex-col items-center gap-1"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs font-medium",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),cor], null)], null),casa_financas.utils.pessoa_inicial(pid)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"inputMode","inputMode",-1531650881),new cljs.core.Keyword(null,"pattern","pattern",242135423)],[(0),pct,"number",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-color","border-color",-2059162761),cor], null),(100),"w-full border-2 rounded-lg px-1 py-1.5 text-sm text-center focus:outline-none",((function (k,pct,cor,pid,s__31484__$2,temp__5823__auto__){
return (function (p1__31476_SHARP_){
var G__31488 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(divisao,k,(p1__31476_SHARP_.target.value | 0));
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__31488) : on_change.call(null,G__31488));
});})(k,pct,cor,pid,s__31484__$2,temp__5823__auto__))
,"numeric","[0-9]*"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs text-ink-3"], null),"%"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),pid], null));
})(),casa_financas$views$modais$seletor_divisao_$_iter__31483(cljs.core.rest(s__31484__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(casa_financas.views.modais.pessoas_ids_sem_conjunta);
})()], null),(function (){var soma = casa_financas.utils.soma_divisao(divisao);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(soma,(100))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs text-bad font-medium text-center"], null),(""+"\u26A0 Soma: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(soma)+"% (precisa ser 100%)")], null);
} else {
return null;
}
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.components.comum.barra_divisao,divisao], null)], null);
});
casa_financas.views.modais.seletor_data = (function casa_financas$views$modais$seletor_data(valor,on_change){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"date",new cljs.core.Keyword(null,"class","class",-2030961996),"w-full border border-rule rounded-panel px-3 py-2.5 text-sm focus:outline-none focus:border-ink bg-panel",new cljs.core.Keyword(null,"value","value",305978217),valor,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__31489_SHARP_){
var G__31490 = p1__31489_SHARP_.target.value;
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__31490) : on_change.call(null,G__31490));
})], null)], null);
});
casa_financas.views.modais.dia_para_date = (function casa_financas$views$modais$dia_para_date(dia,mes,ano){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ano)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((mes < (10)))?"0":null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(mes)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((dia < (10)))?"0":null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dia));
});
casa_financas.views.modais.date_para_dia = (function casa_financas$views$modais$date_para_dia(date_str){
if(cljs.core.truth_((function (){var and__5140__auto__ = date_str;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(date_str,"");
} else {
return and__5140__auto__;
}
})())){
return (cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(date_str,/-/)) | 0);
} else {
return null;
}
});
casa_financas.views.modais.modal_nova_acao = (function casa_financas$views$modais$modal_nova_acao(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"fixed inset-0 z-50",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__31491_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__31491_SHARP_.target,p1__31491_SHARP_.currentTarget)){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fechar-modal","fechar-modal",-361209308)], null));
} else {
return null;
}
})], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"absolute bottom-24 right-4 flex flex-col gap-2 items-end"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center gap-2 bg-panel shadow-lg rounded-panel px-4 py-3 text-sm font-semibold text-ink active:bg-panel-2 border border-rule-soft",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"abrir-modal","abrir-modal",514595978),new cljs.core.Keyword(null,"nova-despesa","nova-despesa",-1962536346),cljs.core.PersistentArrayMap.EMPTY], null));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"\uD83D\uDCB8"], null),"Nova Despesa"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center gap-2 bg-panel shadow-lg rounded-panel px-4 py-3 text-sm font-semibold text-ink active:bg-panel-2 border border-rule-soft",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"abrir-modal","abrir-modal",514595978),new cljs.core.Keyword(null,"nova-entrada","nova-entrada",-912141489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"\uD83D\uDCB0"], null),"Nova Entrada"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center gap-2 bg-panel shadow-lg rounded-panel px-4 py-3 text-sm font-semibold text-ink active:bg-panel-2 border border-rule-soft",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"abrir-modal","abrir-modal",514595978),new cljs.core.Keyword(null,"novo-template","novo-template",-809713410),cljs.core.PersistentArrayMap.EMPTY], null));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"\uD83D\uDCCB"], null),"Novo Template"], null)], null)], null);
});
casa_financas.views.modais.seletor_pagadores = (function casa_financas$views$modais$seletor_pagadores(pagadores,on_change){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex gap-1.5 flex-wrap"], null),(function (){var iter__5628__auto__ = (function casa_financas$views$modais$seletor_pagadores_$_iter__31493(s__31494){
return (new cljs.core.LazySeq(null,(function (){
var s__31494__$1 = s__31494;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__31494__$1);
if(temp__5823__auto__){
var s__31494__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31494__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__31494__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__31496 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__31495 = (0);
while(true){
if((i__31495 < size__5627__auto__)){
var pid = cljs.core._nth(c__5626__auto__,i__31495);
cljs.core.chunk_append(b__31496,(function (){var selecionado = cljs.core.some(((function (i__31495,pid,c__5626__auto__,size__5627__auto__,b__31496,s__31494__$2,temp__5823__auto__){
return (function (p1__31492_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__31492_SHARP_,pid);
});})(i__31495,pid,c__5626__auto__,size__5627__auto__,b__31496,s__31494__$2,temp__5823__auto__))
,pagadores);
var cor = casa_financas.utils.pessoa_cor(pid);
var label = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pid,"conjunta"))?"Casa":casa_financas.utils.pessoa_inicial(pid));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-9 h-9 rounded-full text-xs font-bold border-2 transition-colors flex items-center justify-center",new cljs.core.Keyword(null,"style","style",-496642736),(cljs.core.truth_(selecionado)?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",570434026),cor,new cljs.core.Keyword(null,"border-color","border-color",-2059162761),cor,new cljs.core.Keyword(null,"color","color",1011675173),"white"], null):new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border-color","border-color",-2059162761),"#E5E7EB",new cljs.core.Keyword(null,"color","color",1011675173),"#9CA3AF"], null)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__31495,selecionado,cor,label,pid,c__5626__auto__,size__5627__auto__,b__31496,s__31494__$2,temp__5823__auto__){
return (function (){
var G__31497 = (function (){var ps = cljs.core.vec(pagadores);
if(cljs.core.truth_(selecionado)){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (i__31495,ps,selecionado,cor,label,pid,c__5626__auto__,size__5627__auto__,b__31496,s__31494__$2,temp__5823__auto__){
return (function (p){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p,pid);
});})(i__31495,ps,selecionado,cor,label,pid,c__5626__auto__,size__5627__auto__,b__31496,s__31494__$2,temp__5823__auto__))
,ps));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ps,pid);
}
})();
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__31497) : on_change.call(null,G__31497));
});})(i__31495,selecionado,cor,label,pid,c__5626__auto__,size__5627__auto__,b__31496,s__31494__$2,temp__5823__auto__))
], null),label], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),pid], null));
})());

var G__31526 = (i__31495 + (1));
i__31495 = G__31526;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31496),casa_financas$views$modais$seletor_pagadores_$_iter__31493(cljs.core.chunk_rest(s__31494__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31496),null);
}
} else {
var pid = cljs.core.first(s__31494__$2);
return cljs.core.cons((function (){var selecionado = cljs.core.some(((function (pid,s__31494__$2,temp__5823__auto__){
return (function (p1__31492_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__31492_SHARP_,pid);
});})(pid,s__31494__$2,temp__5823__auto__))
,pagadores);
var cor = casa_financas.utils.pessoa_cor(pid);
var label = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pid,"conjunta"))?"Casa":casa_financas.utils.pessoa_inicial(pid));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-9 h-9 rounded-full text-xs font-bold border-2 transition-colors flex items-center justify-center",new cljs.core.Keyword(null,"style","style",-496642736),(cljs.core.truth_(selecionado)?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",570434026),cor,new cljs.core.Keyword(null,"border-color","border-color",-2059162761),cor,new cljs.core.Keyword(null,"color","color",1011675173),"white"], null):new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border-color","border-color",-2059162761),"#E5E7EB",new cljs.core.Keyword(null,"color","color",1011675173),"#9CA3AF"], null)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (selecionado,cor,label,pid,s__31494__$2,temp__5823__auto__){
return (function (){
var G__31498 = (function (){var ps = cljs.core.vec(pagadores);
if(cljs.core.truth_(selecionado)){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p,pid);
}),ps));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ps,pid);
}
})();
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__31498) : on_change.call(null,G__31498));
});})(selecionado,cor,label,pid,s__31494__$2,temp__5823__auto__))
], null),label], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),pid], null));
})(),casa_financas$views$modais$seletor_pagadores_$_iter__31493(cljs.core.rest(s__31494__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(casa_financas.views.modais.pessoas_ids);
})()], null);
});
casa_financas.views.modais.modal_despesa = (function casa_financas$views$modais$modal_despesa(dados){
var mes_atual = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mes-atual","mes-atual",1459588153)], null)));
var aberto_cat_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var data_default = casa_financas.views.modais.dia_para_date(casa_financas.utils.dia_hoje(),new cljs.core.Keyword(null,"mes","mes",-890288111).cljs$core$IFn$_invoke$arity$1(mes_atual),new cljs.core.Keyword(null,"ano","ano",109602792).cljs$core$IFn$_invoke$arity$1(mes_atual));
var form = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"valor","valor",-957162173),new cljs.core.Keyword(null,"categoria_nome","categoria_nome",843741669),new cljs.core.Keyword(null,"pagadores","pagadores",-269867482),new cljs.core.Keyword(null,"divisao","divisao",1361721447),new cljs.core.Keyword(null,"dia_do_mes","dia_do_mes",-485165205),new cljs.core.Keyword(null,"categoria_id","categoria_id",-705480723),new cljs.core.Keyword(null,"descricao","descricao",861900814),new cljs.core.Keyword(null,"data_input","data_input",131000147),new cljs.core.Keyword(null,"forma_pagamento","forma_pagamento",205169437),new cljs.core.Keyword(null,"pago","pago",27952415)],["",null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["conjunta"], null),casa_financas.utils.divisao_padrao(),casa_financas.utils.dia_hoje(),null,"",data_default,"pix",false]),(cljs.core.truth_(new cljs.core.Keyword(null,"dia_do_mes","dia_do_mes",-485165205).cljs$core$IFn$_invoke$arity$1(dados))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data_input","data_input",131000147),casa_financas.views.modais.dia_para_date(new cljs.core.Keyword(null,"dia_do_mes","dia_do_mes",-485165205).cljs$core$IFn$_invoke$arity$1(dados),(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"mes_compra","mes_compra",431314692).cljs$core$IFn$_invoke$arity$1(dados);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"mes","mes",-890288111).cljs$core$IFn$_invoke$arity$1(mes_atual);
}
})(),(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"ano_compra","ano_compra",2049635973).cljs$core$IFn$_invoke$arity$1(dados);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"ano","ano",109602792).cljs$core$IFn$_invoke$arity$1(mes_atual);
}
})())], null):null),dados], 0)));
return (function (){
var soma_ok_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(casa_financas.utils.soma_divisao(new cljs.core.Keyword(null,"divisao","divisao",1361721447).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form))),(100));
var categorias = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"categorias","categorias",-181626523)], null)));
var cat_atual = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__31499_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__31499_SHARP_),new cljs.core.Keyword(null,"categoria_id","categoria_id",-705480723).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form)));
}),categorias));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.components.comum.modal_wrapper,(cljs.core.truth_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form)))?"Editar Despesa":"Nova Despesa"),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"space-y-3"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex gap-2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"class","class",-2030961996),"flex-1 border border-rule rounded-panel px-3 py-2.5 text-sm focus:outline-none focus:border-ink",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Descri\u00E7\u00E3o (ex: Mercado, Aluguel...)",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"descricao","descricao",861900814).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__31500_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(form,cljs.core.assoc,new cljs.core.Keyword(null,"descricao","descricao",861900814),p1__31500_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"relative flex-shrink-0"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-full px-3 border border-rule rounded-panel text-sm transition-colors bg-panel",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(aberto_cat_QMARK_,cljs.core.not);
})], null),(cljs.core.truth_(cat_atual)?new cljs.core.Keyword(null,"emoji","emoji",1031230144).cljs$core$IFn$_invoke$arity$1(cat_atual):"\uD83D\uDCC2")], null),(cljs.core.truth_(cljs.core.deref(aberto_cat_QMARK_))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"absolute right-0 top-12 bg-panel rounded-panel shadow-lg border border-rule-soft p-2 z-50 w-52"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-full text-left px-3 py-2 rounded-panel text-xs text-ink-2",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(form,cljs.core.assoc,new cljs.core.Keyword(null,"categoria_id","categoria_id",-705480723),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"categoria_nome","categoria_nome",843741669),null], 0));

return cljs.core.reset_BANG_(aberto_cat_QMARK_,false);
})], null),"\u2014 Sem categoria"], null),(function (){var iter__5628__auto__ = (function casa_financas$views$modais$modal_despesa_$_iter__31502(s__31503){
return (new cljs.core.LazySeq(null,(function (){
var s__31503__$1 = s__31503;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__31503__$1);
if(temp__5823__auto__){
var s__31503__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31503__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__31503__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__31505 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__31504 = (0);
while(true){
if((i__31504 < size__5627__auto__)){
var cat = cljs.core._nth(c__5626__auto__,i__31504);
cljs.core.chunk_append(b__31505,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(""+"w-full text-left px-3 py-2 rounded-panel text-xs "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cat),new cljs.core.Keyword(null,"categoria_id","categoria_id",-705480723).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form))))?"bg-panel-2 text-ink font-medium":"text-ink"))),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__31504,cat,c__5626__auto__,size__5627__auto__,b__31505,s__31503__$2,temp__5823__auto__,soma_ok_QMARK_,categorias,cat_atual,mes_atual,aberto_cat_QMARK_,data_default,form){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(form,cljs.core.assoc,new cljs.core.Keyword(null,"categoria_id","categoria_id",-705480723),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cat),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"categoria_nome","categoria_nome",843741669),new cljs.core.Keyword(null,"nome","nome",1100401122).cljs$core$IFn$_invoke$arity$1(cat)], 0));

return cljs.core.reset_BANG_(aberto_cat_QMARK_,false);
});})(i__31504,cat,c__5626__auto__,size__5627__auto__,b__31505,s__31503__$2,temp__5823__auto__,soma_ok_QMARK_,categorias,cat_atual,mes_atual,aberto_cat_QMARK_,data_default,form))
], null),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"emoji","emoji",1031230144).cljs$core$IFn$_invoke$arity$1(cat))+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"nome","nome",1100401122).cljs$core$IFn$_invoke$arity$1(cat)))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cat)], null)));

var G__31531 = (i__31504 + (1));
i__31504 = G__31531;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31505),casa_financas$views$modais$modal_despesa_$_iter__31502(cljs.core.chunk_rest(s__31503__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31505),null);
}
} else {
var cat = cljs.core.first(s__31503__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(""+"w-full text-left px-3 py-2 rounded-panel text-xs "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cat),new cljs.core.Keyword(null,"categoria_id","categoria_id",-705480723).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form))))?"bg-panel-2 text-ink font-medium":"text-ink"))),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (cat,s__31503__$2,temp__5823__auto__,soma_ok_QMARK_,categorias,cat_atual,mes_atual,aberto_cat_QMARK_,data_default,form){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(form,cljs.core.assoc,new cljs.core.Keyword(null,"categoria_id","categoria_id",-705480723),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cat),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"categoria_nome","categoria_nome",843741669),new cljs.core.Keyword(null,"nome","nome",1100401122).cljs$core$IFn$_invoke$arity$1(cat)], 0));

return cljs.core.reset_BANG_(aberto_cat_QMARK_,false);
});})(cat,s__31503__$2,temp__5823__auto__,soma_ok_QMARK_,categorias,cat_atual,mes_atual,aberto_cat_QMARK_,data_default,form))
], null),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"emoji","emoji",1031230144).cljs$core$IFn$_invoke$arity$1(cat))+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"nome","nome",1100401122).cljs$core$IFn$_invoke$arity$1(cat)))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cat)], null)),casa_financas$views$modais$modal_despesa_$_iter__31502(cljs.core.rest(s__31503__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(categorias);
})()], null):null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex gap-2"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex-1"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs font-medium text-ink-2 mb-1 block"], null),"Valor (R$)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"inputMode","inputMode",-1531650881),"decimal",new cljs.core.Keyword(null,"pattern","pattern",242135423),"[0-9]*",new cljs.core.Keyword(null,"class","class",-2030961996),"w-full border border-rule rounded-panel px-3 py-2.5 text-sm focus:outline-none focus:border-ink",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"0,00",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"valor","valor",-957162173).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__31501_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(form,cljs.core.assoc,new cljs.core.Keyword(null,"valor","valor",-957162173),p1__31501_SHARP_.target.value);
})], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex-1"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs font-medium text-ink-2 mb-1 block"], null),"Data"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.modais.seletor_data,new cljs.core.Keyword(null,"data_input","data_input",131000147).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form)),(function (v){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(form,cljs.core.assoc,new cljs.core.Keyword(null,"data_input","data_input",131000147),v,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dia_do_mes","dia_do_mes",-485165205),(function (){var or__5142__auto__ = casa_financas.views.modais.date_para_dia(v);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return casa_financas.utils.dia_hoje();
}
})(),new cljs.core.Keyword(null,"mes_compra","mes_compra",431314692),null,new cljs.core.Keyword(null,"ano_compra","ano_compra",2049635973),null], 0));
})], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs font-medium text-ink-2 mb-1.5 block"], null),"Forma de pagamento"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex gap-2"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(""+"flex-1 py-2.5 rounded-panel text-sm font-medium border-2 transition-colors flex items-center justify-center gap-1.5 "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"forma_pagamento","forma_pagamento",205169437).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form)),"pix"))?"bg-ink text-cream border-ink":"text-ink-2 border-rule"))),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(form,cljs.core.assoc,new cljs.core.Keyword(null,"forma_pagamento","forma_pagamento",205169437),"pix");
})], null),"\uD83D\uDCB3 Pix/D\u00E9bito"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(""+"flex-1 py-2.5 rounded-panel text-sm font-medium border-2 transition-colors flex items-center justify-center gap-1.5 "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"forma_pagamento","forma_pagamento",205169437).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form)),"credito"))?"bg-ink text-cream border-ink":"text-ink-2 border-rule"))),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(form,cljs.core.assoc,new cljs.core.Keyword(null,"forma_pagamento","forma_pagamento",205169437),"credito");
})], null),"\uD83D\uDCB3 Cr\u00E9dito"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-end justify-between"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs font-medium text-ink-2 mb-1.5 block"], null),"Quem pagou?"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.modais.seletor_pagadores,new cljs.core.Keyword(null,"pagadores","pagadores",-269867482).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form)),(function (ps){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(form,cljs.core.assoc,new cljs.core.Keyword(null,"pagadores","pagadores",-269867482),ps);
})], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex flex-col items-center gap-1"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs font-medium text-ink-2"], null),"Pago"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(""+"w-10 h-10 rounded-panel border-2 flex items-center justify-center transition-colors "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(new cljs.core.Keyword(null,"pago","pago",27952415).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form)))?"bg-ok border-ok text-white":"border-rule text-ink-3"))),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(form,cljs.core.update,new cljs.core.Keyword(null,"pago","pago",27952415),cljs.core.not);
})], null),"\u2713"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs font-medium text-ink-2 mb-1.5 block"], null),"Divis\u00E3o (%)"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.modais.seletor_divisao,new cljs.core.Keyword(null,"divisao","divisao",1361721447).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form)),(function (nova_div){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(form,cljs.core.assoc,new cljs.core.Keyword(null,"divisao","divisao",1361721447),nova_div);
})], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex gap-2 pt-1"], null),(cljs.core.truth_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"py-2.5 px-3 rounded-panel font-semibold text-bad bg-panel-2 hover:bg-rule-soft transition-colors text-sm",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"deletar-despesa","deletar-despesa",1441694847),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form))], null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fechar-modal","fechar-modal",-361209308)], null));
})], null),"Deletar"], null):null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.components.comum.botao_secundario,"Cancelar",(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fechar-modal","fechar-modal",-361209308)], null));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex-1"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),(""+"flex-1 py-2.5 px-4 rounded-panel font-semibold text-white transition-colors text-sm "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((soma_ok_QMARK_)?"bg-ink hover:bg-ink-2 active:bg-ink":"bg-rule cursor-not-allowed text-ink-3"))),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(!(soma_ok_QMARK_)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(soma_ok_QMARK_){
var mes = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mes-atual","mes-atual",1459588153)], null)));
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"salvar-despesa","salvar-despesa",1552836062),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(form),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return casa_financas.utils.gerar_id();
}
})(),new cljs.core.Keyword(null,"ano","ano",109602792),new cljs.core.Keyword(null,"ano","ano",109602792).cljs$core$IFn$_invoke$arity$1(mes),new cljs.core.Keyword(null,"mes","mes",-890288111),new cljs.core.Keyword(null,"mes","mes",-890288111).cljs$core$IFn$_invoke$arity$1(mes),new cljs.core.Keyword(null,"valor","valor",-957162173),parseFloat(new cljs.core.Keyword(null,"valor","valor",-957162173).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form)))], null)], 0))], null));
} else {
return null;
}
})], null),"Salvar"], null)], null)], null)], null);
});
});
casa_financas.views.modais.modal_entrada = (function casa_financas$views$modais$modal_entrada(dados){
var form = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pessoa_id","pessoa_id",-1264984672),"andre",new cljs.core.Keyword(null,"valor","valor",-957162173),"",new cljs.core.Keyword(null,"data","data",-232669377),(function (){var d = (new Date());
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(d.getFullYear())+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((d.getMonth() + (1)) < (10)))?"0":null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1((d.getMonth() + (1)))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((d.getDate() < (10)))?"0":null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(d.getDate()));
})(),new cljs.core.Keyword(null,"descricao","descricao",861900814),""], null),dados], 0)));
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.components.comum.modal_wrapper,(cljs.core.truth_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form)))?"Editar Entrada":"Nova Entrada"),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"space-y-3"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs font-medium text-ink-2 mb-1.5 block"], null),"Quem recebeu?"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex gap-1.5"], null),(function (){var iter__5628__auto__ = (function casa_financas$views$modais$modal_entrada_$_iter__31509(s__31510){
return (new cljs.core.LazySeq(null,(function (){
var s__31510__$1 = s__31510;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__31510__$1);
if(temp__5823__auto__){
var s__31510__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31510__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__31510__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__31512 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__31511 = (0);
while(true){
if((i__31511 < size__5627__auto__)){
var pid = cljs.core._nth(c__5626__auto__,i__31511);
cljs.core.chunk_append(b__31512,(function (){var selecionado = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pessoa_id","pessoa_id",-1264984672).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form)),pid);
var cor = casa_financas.utils.pessoa_cor(pid);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex-1 py-2 rounded-panel text-sm font-medium border-2 transition-colors",new cljs.core.Keyword(null,"style","style",-496642736),((selecionado)?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",570434026),cor,new cljs.core.Keyword(null,"border-color","border-color",-2059162761),cor,new cljs.core.Keyword(null,"color","color",1011675173),"white"], null):new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border-color","border-color",-2059162761),"#E5E7EB",new cljs.core.Keyword(null,"color","color",1011675173),"#6B7280"], null)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__31511,selecionado,cor,pid,c__5626__auto__,size__5627__auto__,b__31512,s__31510__$2,temp__5823__auto__,form){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(form,cljs.core.assoc,new cljs.core.Keyword(null,"pessoa_id","pessoa_id",-1264984672),pid);
});})(i__31511,selecionado,cor,pid,c__5626__auto__,size__5627__auto__,b__31512,s__31510__$2,temp__5823__auto__,form))
], null),casa_financas.utils.pessoa_nome(pid)], null);
})());

var G__31541 = (i__31511 + (1));
i__31511 = G__31541;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31512),casa_financas$views$modais$modal_entrada_$_iter__31509(cljs.core.chunk_rest(s__31510__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31512),null);
}
} else {
var pid = cljs.core.first(s__31510__$2);
return cljs.core.cons((function (){var selecionado = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pessoa_id","pessoa_id",-1264984672).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form)),pid);
var cor = casa_financas.utils.pessoa_cor(pid);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex-1 py-2 rounded-panel text-sm font-medium border-2 transition-colors",new cljs.core.Keyword(null,"style","style",-496642736),((selecionado)?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",570434026),cor,new cljs.core.Keyword(null,"border-color","border-color",-2059162761),cor,new cljs.core.Keyword(null,"color","color",1011675173),"white"], null):new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border-color","border-color",-2059162761),"#E5E7EB",new cljs.core.Keyword(null,"color","color",1011675173),"#6B7280"], null)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (selecionado,cor,pid,s__31510__$2,temp__5823__auto__,form){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(form,cljs.core.assoc,new cljs.core.Keyword(null,"pessoa_id","pessoa_id",-1264984672),pid);
});})(selecionado,cor,pid,s__31510__$2,temp__5823__auto__,form))
], null),casa_financas.utils.pessoa_nome(pid)], null);
})(),casa_financas$views$modais$modal_entrada_$_iter__31509(cljs.core.rest(s__31510__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(casa_financas.views.modais.pessoas_ids_sem_conjunta);
})()], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex gap-2"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex-1"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs font-medium text-ink-2 mb-1 block"], null),"Valor (R$)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"inputMode","inputMode",-1531650881),"decimal",new cljs.core.Keyword(null,"pattern","pattern",242135423),"[0-9]*",new cljs.core.Keyword(null,"class","class",-2030961996),"w-full border border-rule rounded-panel px-3 py-2.5 text-sm focus:outline-none focus:border-ink",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"0,00",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"valor","valor",-957162173).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__31506_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(form,cljs.core.assoc,new cljs.core.Keyword(null,"valor","valor",-957162173),p1__31506_SHARP_.target.value);
})], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex-1"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs font-medium text-ink-2 mb-1 block"], null),"Data"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.modais.seletor_data,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form)),(function (p1__31507_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(form,cljs.core.assoc,new cljs.core.Keyword(null,"data","data",-232669377),p1__31507_SHARP_);
})], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"class","class",-2030961996),"w-full border border-rule rounded-panel px-3 py-2.5 text-sm focus:outline-none focus:border-ink",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Descri\u00E7\u00E3o (ex: Sal\u00E1rio, Freelance...)",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"descricao","descricao",861900814).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__31508_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(form,cljs.core.assoc,new cljs.core.Keyword(null,"descricao","descricao",861900814),p1__31508_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex gap-2 pt-1"], null),(cljs.core.truth_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"py-2.5 px-3 rounded-panel font-semibold text-bad bg-panel-2 hover:bg-rule-soft transition-colors text-sm",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"deletar-entrada","deletar-entrada",-333068260),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form))], null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fechar-modal","fechar-modal",-361209308)], null));
})], null),"Deletar"], null):null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.components.comum.botao_secundario,"Cancelar",(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fechar-modal","fechar-modal",-361209308)], null));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex-1"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.components.comum.botao_primario,"Salvar",(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"salvar-entrada","salvar-entrada",486272064),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(form),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return casa_financas.utils.gerar_id();
}
})(),new cljs.core.Keyword(null,"valor","valor",-957162173),parseFloat(new cljs.core.Keyword(null,"valor","valor",-957162173).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form)))], null)], 0))], null));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex-1"], null)], null)], null)], null)], null);
});
});
casa_financas.views.modais.modal_template = (function casa_financas$views$modais$modal_template(dados){
var mes_atual = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mes-atual","mes-atual",1459588153)], null)));
var aberto_cat_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var form = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"valor_padrao","valor_padrao",1497405509),new cljs.core.Keyword(null,"categoria_nome","categoria_nome",843741669),new cljs.core.Keyword(null,"divisao","divisao",1361721447),new cljs.core.Keyword(null,"pagador_padrao","pagador_padrao",-110996695),new cljs.core.Keyword(null,"categoria_id","categoria_id",-705480723),new cljs.core.Keyword(null,"descricao","descricao",861900814),new cljs.core.Keyword(null,"dia_padrao","dia_padrao",-2107424274),new cljs.core.Keyword(null,"ativo","ativo",-757128626),new cljs.core.Keyword(null,"forma_pagamento_padrao","forma_pagamento_padrao",-266633711),new cljs.core.Keyword(null,"data_input","data_input",131000147)],["",null,casa_financas.utils.divisao_padrao(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["conjunta"], null),null,"",(1),true,"pix",casa_financas.views.modais.dia_para_date((1),new cljs.core.Keyword(null,"mes","mes",-890288111).cljs$core$IFn$_invoke$arity$1(mes_atual),new cljs.core.Keyword(null,"ano","ano",109602792).cljs$core$IFn$_invoke$arity$1(mes_atual))]),dados], 0)));
return (function (){
var soma_ok_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(casa_financas.utils.soma_divisao(new cljs.core.Keyword(null,"divisao","divisao",1361721447).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form))),(100));
var categorias = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"categorias","categorias",-181626523)], null)));
var cat_atual = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__31513_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__31513_SHARP_),new cljs.core.Keyword(null,"categoria_id","categoria_id",-705480723).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form)));
}),categorias));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.components.comum.modal_wrapper,(cljs.core.truth_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form)))?"Editar Template":"Novo Template"),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"space-y-3"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex gap-2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"class","class",-2030961996),"flex-1 border border-rule rounded-panel px-3 py-2.5 text-sm focus:outline-none focus:border-ink",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Descri\u00E7\u00E3o (ex: Aluguel, Internet...)",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"descricao","descricao",861900814).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__31514_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(form,cljs.core.assoc,new cljs.core.Keyword(null,"descricao","descricao",861900814),p1__31514_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"relative flex-shrink-0"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-full px-3 border border-rule rounded-panel text-sm bg-panel",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(aberto_cat_QMARK_,cljs.core.not);
})], null),(cljs.core.truth_(cat_atual)?new cljs.core.Keyword(null,"emoji","emoji",1031230144).cljs$core$IFn$_invoke$arity$1(cat_atual):"\uD83D\uDCC2")], null),(cljs.core.truth_(cljs.core.deref(aberto_cat_QMARK_))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"absolute right-0 top-12 bg-panel rounded-panel shadow-lg border border-rule-soft p-2 z-50 w-52"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-full text-left px-3 py-2 rounded-panel text-xs text-ink-2",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(form,cljs.core.assoc,new cljs.core.Keyword(null,"categoria_id","categoria_id",-705480723),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"categoria_nome","categoria_nome",843741669),null], 0));

return cljs.core.reset_BANG_(aberto_cat_QMARK_,false);
})], null),"\u2014 Sem categoria"], null),(function (){var iter__5628__auto__ = (function casa_financas$views$modais$modal_template_$_iter__31516(s__31517){
return (new cljs.core.LazySeq(null,(function (){
var s__31517__$1 = s__31517;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__31517__$1);
if(temp__5823__auto__){
var s__31517__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31517__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__31517__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__31519 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__31518 = (0);
while(true){
if((i__31518 < size__5627__auto__)){
var cat = cljs.core._nth(c__5626__auto__,i__31518);
cljs.core.chunk_append(b__31519,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(""+"w-full text-left px-3 py-2 rounded-panel text-xs "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cat),new cljs.core.Keyword(null,"categoria_id","categoria_id",-705480723).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form))))?"bg-panel-2 text-ink font-medium":"text-ink"))),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__31518,cat,c__5626__auto__,size__5627__auto__,b__31519,s__31517__$2,temp__5823__auto__,soma_ok_QMARK_,categorias,cat_atual,mes_atual,aberto_cat_QMARK_,form){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(form,cljs.core.assoc,new cljs.core.Keyword(null,"categoria_id","categoria_id",-705480723),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cat),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"categoria_nome","categoria_nome",843741669),new cljs.core.Keyword(null,"nome","nome",1100401122).cljs$core$IFn$_invoke$arity$1(cat)], 0));

return cljs.core.reset_BANG_(aberto_cat_QMARK_,false);
});})(i__31518,cat,c__5626__auto__,size__5627__auto__,b__31519,s__31517__$2,temp__5823__auto__,soma_ok_QMARK_,categorias,cat_atual,mes_atual,aberto_cat_QMARK_,form))
], null),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"emoji","emoji",1031230144).cljs$core$IFn$_invoke$arity$1(cat))+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"nome","nome",1100401122).cljs$core$IFn$_invoke$arity$1(cat)))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cat)], null)));

var G__31555 = (i__31518 + (1));
i__31518 = G__31555;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31519),casa_financas$views$modais$modal_template_$_iter__31516(cljs.core.chunk_rest(s__31517__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31519),null);
}
} else {
var cat = cljs.core.first(s__31517__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(""+"w-full text-left px-3 py-2 rounded-panel text-xs "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cat),new cljs.core.Keyword(null,"categoria_id","categoria_id",-705480723).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form))))?"bg-panel-2 text-ink font-medium":"text-ink"))),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (cat,s__31517__$2,temp__5823__auto__,soma_ok_QMARK_,categorias,cat_atual,mes_atual,aberto_cat_QMARK_,form){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(form,cljs.core.assoc,new cljs.core.Keyword(null,"categoria_id","categoria_id",-705480723),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cat),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"categoria_nome","categoria_nome",843741669),new cljs.core.Keyword(null,"nome","nome",1100401122).cljs$core$IFn$_invoke$arity$1(cat)], 0));

return cljs.core.reset_BANG_(aberto_cat_QMARK_,false);
});})(cat,s__31517__$2,temp__5823__auto__,soma_ok_QMARK_,categorias,cat_atual,mes_atual,aberto_cat_QMARK_,form))
], null),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"emoji","emoji",1031230144).cljs$core$IFn$_invoke$arity$1(cat))+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"nome","nome",1100401122).cljs$core$IFn$_invoke$arity$1(cat)))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cat)], null)),casa_financas$views$modais$modal_template_$_iter__31516(cljs.core.rest(s__31517__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(categorias);
})()], null):null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex gap-2"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex-1"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs font-medium text-ink-2 mb-1 block"], null),"Valor (R$)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"inputMode","inputMode",-1531650881),"decimal",new cljs.core.Keyword(null,"pattern","pattern",242135423),"[0-9]*",new cljs.core.Keyword(null,"class","class",-2030961996),"w-full border border-rule rounded-panel px-3 py-2.5 text-sm focus:outline-none focus:border-ink",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"0,00",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"valor_padrao","valor_padrao",1497405509).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__31515_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(form,cljs.core.assoc,new cljs.core.Keyword(null,"valor_padrao","valor_padrao",1497405509),p1__31515_SHARP_.target.value);
})], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex-1"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs font-medium text-ink-2 mb-1 block"], null),"Dia previsto"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.modais.seletor_data,new cljs.core.Keyword(null,"data_input","data_input",131000147).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form)),(function (v){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(form,cljs.core.assoc,new cljs.core.Keyword(null,"data_input","data_input",131000147),v,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dia_padrao","dia_padrao",-2107424274),(function (){var or__5142__auto__ = casa_financas.views.modais.date_para_dia(v);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (1);
}
})()], 0));
})], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs font-medium text-ink-2 mb-1.5 block"], null),"Forma de pagamento"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex gap-2"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(""+"flex-1 py-2.5 rounded-panel text-sm font-medium border-2 transition-colors flex items-center justify-center gap-1.5 "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"forma_pagamento_padrao","forma_pagamento_padrao",-266633711).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form)),"pix"))?"bg-ink text-cream border-ink":"text-ink-2 border-rule"))),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(form,cljs.core.assoc,new cljs.core.Keyword(null,"forma_pagamento_padrao","forma_pagamento_padrao",-266633711),"pix");
})], null),"\uD83D\uDCB3 Pix/D\u00E9bito"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(""+"flex-1 py-2.5 rounded-panel text-sm font-medium border-2 transition-colors flex items-center justify-center gap-1.5 "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"forma_pagamento_padrao","forma_pagamento_padrao",-266633711).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form)),"credito"))?"bg-ink text-cream border-ink":"text-ink-2 border-rule"))),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(form,cljs.core.assoc,new cljs.core.Keyword(null,"forma_pagamento_padrao","forma_pagamento_padrao",-266633711),"credito");
})], null),"\uD83D\uDCB3 Cr\u00E9dito"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-end justify-between"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs font-medium text-ink-2 mb-1.5 block"], null),"Quem paga?"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.modais.seletor_pagadores,new cljs.core.Keyword(null,"pagador_padrao","pagador_padrao",-110996695).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form)),(function (ps){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(form,cljs.core.assoc,new cljs.core.Keyword(null,"pagador_padrao","pagador_padrao",-110996695),ps);
})], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex flex-col items-center gap-1"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs font-medium text-ink-2"], null),"Ativo"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(""+"w-10 h-10 rounded-panel border-2 flex items-center justify-center transition-colors "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(new cljs.core.Keyword(null,"ativo","ativo",-757128626).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form)))?"bg-ok border-ok text-white":"border-rule text-ink-3"))),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(form,cljs.core.update,new cljs.core.Keyword(null,"ativo","ativo",-757128626),cljs.core.not);
})], null),"\u2713"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs font-medium text-ink-2 mb-1.5 block"], null),"Divis\u00E3o (%)"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.modais.seletor_divisao,new cljs.core.Keyword(null,"divisao","divisao",1361721447).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form)),(function (nova_div){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(form,cljs.core.assoc,new cljs.core.Keyword(null,"divisao","divisao",1361721447),nova_div);
})], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex gap-2 pt-1"], null),(cljs.core.truth_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"py-2.5 px-3 rounded-panel font-semibold text-bad bg-panel-2 hover:bg-rule-soft transition-colors text-sm",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"deletar-template","deletar-template",-1473171528),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form))], null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fechar-modal","fechar-modal",-361209308)], null));
})], null),"Deletar"], null):null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.components.comum.botao_secundario,"Cancelar",(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fechar-modal","fechar-modal",-361209308)], null));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex-1"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),(""+"flex-1 py-2.5 px-4 rounded-panel font-semibold text-white transition-colors text-sm "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((soma_ok_QMARK_)?"bg-ink hover:bg-ink-2 active:bg-ink":"bg-rule cursor-not-allowed text-ink-3"))),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(!(soma_ok_QMARK_)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(soma_ok_QMARK_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"salvar-template","salvar-template",-861853926),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(form),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return casa_financas.utils.gerar_id();
}
})(),new cljs.core.Keyword(null,"valor_padrao","valor_padrao",1497405509),parseFloat(new cljs.core.Keyword(null,"valor_padrao","valor_padrao",1497405509).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form)))], null)], 0))], null));
} else {
return null;
}
})], null),"Salvar"], null)], null)], null)], null);
});
});
casa_financas.views.modais.modal_pagamento_fatura = (function casa_financas$views$modais$modal_pagamento_fatura(fatura){
var total_credito = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"total-credito-mes","total-credito-mes",-1293171558)], null)));
var form = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"valor_pago","valor_pago",586246073),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5142__auto__ = new cljs.core.Keyword(null,"valor_pago","valor_pago",586246073).cljs$core$IFn$_invoke$arity$1(fatura);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})()))], null));
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.components.comum.modal_wrapper,"\uD83D\uDCB3 Pagar Fatura",new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"space-y-3"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"bg-panel-2 rounded-panel p-3"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs text-ink-2 mb-1"], null),"Total da fatura"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xl font-bold text-ink"], null),casa_financas.utils.formatar_valor_br(total_credito)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs font-medium text-ink-2 mb-1 block"], null),"Valor pago (R$)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"inputMode","inputMode",-1531650881),"decimal",new cljs.core.Keyword(null,"class","class",-2030961996),"w-full border border-rule rounded-panel px-3 py-2.5 text-sm focus:outline-none focus:border-ink",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"0,00",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"valor_pago","valor_pago",586246073).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__31520_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(form,cljs.core.assoc,new cljs.core.Keyword(null,"valor_pago","valor_pago",586246073),p1__31520_SHARP_.target.value);
})], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex gap-2"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex-1 py-2 rounded-panel text-xs font-medium bg-panel-2 text-ink-2 border border-rule",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(form,cljs.core.assoc,new cljs.core.Keyword(null,"valor_pago","valor_pago",586246073),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(total_credito)));
})], null),"Pagar total"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex-1 py-2 rounded-panel text-xs font-medium bg-panel-2 text-ink-2 border border-rule",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(form,cljs.core.assoc,new cljs.core.Keyword(null,"valor_pago","valor_pago",586246073),"");
})], null),"Limpar"], null)], null),(cljs.core.truth_((function (){var and__5140__auto__ = fatura;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = new cljs.core.Keyword(null,"valor_pago","valor_pago",586246073).cljs$core$IFn$_invoke$arity$1(fatura);
if(cljs.core.truth_(and__5140__auto____$1)){
return (new cljs.core.Keyword(null,"valor_pago","valor_pago",586246073).cljs$core$IFn$_invoke$arity$1(fatura) > (0));
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-full py-2 rounded-panel text-xs font-medium text-bad bg-panel-2 border border-rule-soft",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"desmarcar-fatura","desmarcar-fatura",-2096898598)], null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fechar-modal","fechar-modal",-361209308)], null));
})], null),"Remover pagamento"], null):null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex gap-2 pt-1"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.components.comum.botao_secundario,"Cancelar",(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fechar-modal","fechar-modal",-361209308)], null));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex-1"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.components.comum.botao_primario,"Salvar",(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"salvar-pagamento-fatura","salvar-pagamento-fatura",1301159182),parseFloat(new cljs.core.Keyword(null,"valor_pago","valor_pago",586246073).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form)))], null));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex-1"], null)], null)], null)], null)], null);
});
});
casa_financas.views.modais.modais = (function casa_financas$views$modais$modais(){
var modal = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modal","modal",-1031880850)], null)));
if(cljs.core.truth_(modal)){
var G__31521 = new cljs.core.Keyword(null,"tipo","tipo",837631118).cljs$core$IFn$_invoke$arity$1(modal);
var G__31521__$1 = (((G__31521 instanceof cljs.core.Keyword))?G__31521.fqn:null);
switch (G__31521__$1) {
case "nova-acao":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.modais.modal_nova_acao], null);

break;
case "nova-despesa":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.modais.modal_despesa,new cljs.core.Keyword(null,"dados","dados",1114219967).cljs$core$IFn$_invoke$arity$1(modal)], null);

break;
case "editar-despesa":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.modais.modal_despesa,new cljs.core.Keyword(null,"dados","dados",1114219967).cljs$core$IFn$_invoke$arity$1(modal)], null);

break;
case "nova-entrada":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.modais.modal_entrada,new cljs.core.Keyword(null,"dados","dados",1114219967).cljs$core$IFn$_invoke$arity$1(modal)], null);

break;
case "editar-entrada":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.modais.modal_entrada,new cljs.core.Keyword(null,"dados","dados",1114219967).cljs$core$IFn$_invoke$arity$1(modal)], null);

break;
case "novo-template":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.modais.modal_template,new cljs.core.Keyword(null,"dados","dados",1114219967).cljs$core$IFn$_invoke$arity$1(modal)], null);

break;
case "editar-template":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.modais.modal_template,new cljs.core.Keyword(null,"dados","dados",1114219967).cljs$core$IFn$_invoke$arity$1(modal)], null);

break;
case "pagamento-fatura":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.modais.modal_pagamento_fatura,new cljs.core.Keyword(null,"dados","dados",1114219967).cljs$core$IFn$_invoke$arity$1(modal)], null);

break;
default:
return null;

}
} else {
return null;
}
});

//# sourceMappingURL=casa_financas.views.modais.js.map
