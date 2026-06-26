goog.provide('casa_financas.views.admin');
casa_financas.views.admin.pessoas_ids = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["andre","bianca","fernanda","bruna"], null);
casa_financas.views.admin.header = (function casa_financas$views$admin$header(){
var mes_atual = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mes-atual","mes-atual",1459588153)], null)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"px-9 py-5 flex items-center justify-between"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center gap-2.5"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-7 h-7 rounded-lg bg-ink flex items-center justify-center text-cream text-sm font-bold"], null),"F"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"display text-lg"], null),"O Fiscal"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"ml-1 text-[10px] font-bold uppercase tracking-[0.5px] text-ink-3 px-2 py-0.5 rounded-pill bg-panel-2"], null),"dashboard"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center bg-panel border border-rule rounded-pill px-1 py-1"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-7 h-7 rounded-full text-ink-2 hover:bg-panel-2 text-sm leading-none transition-colors",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mes-anterior","mes-anterior",679127544)], null));
})], null),"\u2039"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"num text-xs font-bold px-3 lowercase"], null),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(casa_financas.utils.mes_nome(new cljs.core.Keyword(null,"mes","mes",-890288111).cljs$core$IFn$_invoke$arity$1(mes_atual)))+" \u00B7 "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ano","ano",109602792).cljs$core$IFn$_invoke$arity$1(mes_atual)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-7 h-7 rounded-full text-ink-2 hover:bg-panel-2 text-sm leading-none transition-colors",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mes-proximo","mes-proximo",-618952688)], null));
})], null),"\u203A"], null)], null)], null);
});
casa_financas.views.admin.hero = (function casa_financas$views$admin$hero(){
var mes_atual = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mes-atual","mes-atual",1459588153)], null)));
var despesas_mes = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"despesas-do-mes","despesas-do-mes",2018938320)], null)));
var diretas = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__6696_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"forma_pagamento","forma_pagamento",205169437).cljs$core$IFn$_invoke$arity$1(p1__6696_SHARP_),"credito");
}),despesas_mes);
var total_prev = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"valor","valor",-957162173),diretas));
var total_pago = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"valor","valor",-957162173),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pago","pago",27952415),diretas)));
var pct = (((total_prev > (0)))?cljs.core.min.cljs$core$IFn$_invoke$arity$2((100),((100) * (total_pago / total_prev))):(0));
var n_pagas = cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pago","pago",27952415),diretas));
var n_vencidas = cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6697_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(casa_financas.utils.despesa_status(p1__6697_SHARP_),new cljs.core.Keyword(null,"vencida","vencida",-1537883219));
}),diretas));
var n_pendentes = cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6698_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(casa_financas.utils.despesa_status(p1__6698_SHARP_),new cljs.core.Keyword(null,"pendente","pendente",311658061));
}),diretas));
var saldo_conta = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"saldo-conta","saldo-conta",2075345920)], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"px-9 pb-6"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"grid grid-cols-12 gap-4"], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-span-12 lg:col-span-7 relative overflow-hidden bg-panel rounded-panel border border-rule p-7 shadow-soft",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),"linear-gradient(135deg, #FFFFFF 0%, #FFFFFF 60%, #FFF1E5 100%)"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"absolute -top-10 -right-10 w-52 h-52 rounded-full",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),"#E97A3F",new cljs.core.Keyword(null,"opacity","opacity",397153780),0.06], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.components.comum.label,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(casa_financas.utils.mes_nome(new cljs.core.Keyword(null,"mes","mes",-890288111).cljs$core$IFn$_invoke$arity$1(mes_atual)))+" em andamento")], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-baseline gap-3 mt-2.5"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"display num text-[64px] leading-none"], null),casa_financas.utils.formatar_valor_br(total_prev)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"num text-lg text-ink-2 font-semibold"], null),"previsto"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-[11px] text-ink-3 font-semibold mt-1.5"], null),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.round(pct))+"% j\u00E1 pago neste m\u00EAs")], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mt-6"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-2.5 bg-panel-2 rounded-pill overflow-hidden"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-full rounded-pill",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(pct)+"%"),new cljs.core.Keyword(null,"background","background",-863952629),"linear-gradient(90deg, #231C12 0%, #E97A3F 100%)"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex justify-between mt-2 num text-[13px] text-ink-2 font-bold"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(""+"pago "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(casa_financas.utils.formatar_valor_br(total_pago)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),(""+"a pagar "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(casa_financas.utils.formatar_valor_br((total_prev - total_pago))))], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex gap-2 mt-5 flex-wrap"], null),(((n_vencidas > (0)))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"inline-flex items-center gap-1.5 px-2.5 py-1 rounded-pill text-[11.5px] font-bold text-bad",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),"#FBEEEE"], null)], null),"\u25CF ",n_vencidas," vencida",(((n_vencidas > (1)))?"s":null)], null):null),(((n_pendentes > (0)))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"inline-flex items-center gap-1.5 px-2.5 py-1 rounded-pill text-[11.5px] font-bold text-warn",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),"#FDF6E7"], null)], null),"\u25CF ",n_pendentes," a vencer"], null):null),(((n_pagas > (0)))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"inline-flex items-center gap-1.5 px-2.5 py-1 rounded-pill text-[11.5px] font-bold text-ok",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),"#EBF5EF"], null)], null),"\u25CF ",n_pagas," paga",(((n_pagas > (1)))?"s":null)], null):null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-span-12 lg:col-span-5 grid grid-cols-1 gap-4"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"rounded-panel p-5 bg-panel border border-rule shadow-soft"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center gap-2 mb-2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-2.5 h-2.5 rounded-full bg-ok"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.components.comum.label,"Saldo conta conjunta"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(""+"display num text-4xl "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((saldo_conta == null))?"text-ink-3":(((saldo_conta >= (0)))?"text-ok":"text-bad"
))))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.admin.cell_number,(function (){var or__5142__auto__ = saldo_conta;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})(),(function (p1__6699_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"salvar-saldo-conta","salvar-saldo-conta",-1133925709),p1__6699_SHARP_], null));
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"formatter","formatter",-483008823),casa_financas.utils.formatar_valor_br,new cljs.core.Keyword(null,"class","class",-2030961996),"text-4xl"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-[11px] text-ink-3 font-semibold mt-1"], null),"atualizado manualmente \u00B7 clique para editar"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"rounded-panel p-5",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),"#FFF1E5",new cljs.core.Keyword(null,"border","border",1444987323),"1.5px solid #F5DDC2"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center gap-2 mb-2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-2.5 h-2.5 rounded-full",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),"#E97A3F"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-[10.5px] font-bold uppercase tracking-[0.5px]",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#7A4F1F"], null)], null),"Compras no cart\u00E3o"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"display num text-4xl",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#7A4F1F"], null)], null),casa_financas.utils.formatar_valor_br(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"total-credito-mes","total-credito-mes",-1293171558)], null))))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-[11px] font-semibold mt-1",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#9A6B3A"], null)], null),"gasto no cart\u00E3o neste m\u00EAs (n\u00E3o \u00E9 conta a pagar)"], null)], null)], null)], null)], null);
});
casa_financas.views.admin.card_posicao = (function casa_financas$views$admin$card_posicao(pessoa_id,dados){
var cor = casa_financas.utils.pessoa_cor(pessoa_id);
var aporte = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"aporte","aporte",-623613565).cljs$core$IFn$_invoke$arity$1(dados);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})();
var cota = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"cota","cota",355260977).cljs$core$IFn$_invoke$arity$1(dados);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})();
var saldo_mes = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"saldo","saldo",-306276818).cljs$core$IFn$_invoke$arity$1(dados);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})();
var acum = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"acumulado","acumulado",-2083289601).cljs$core$IFn$_invoke$arity$1(dados);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})();
var positivo_QMARK_ = (acum >= (0));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"bg-panel rounded-panel border border-rule p-5 shadow-soft"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center gap-3 mb-3"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-base",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),cor], null)], null),casa_financas.utils.pessoa_inicial(pessoa_id)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-[14px] font-bold text-ink"], null),casa_financas.utils.pessoa_nome(pessoa_id)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(""+"inline-flex items-center px-2 py-0.5 rounded-pill text-[10.5px] font-bold mt-0.5 "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((positivo_QMARK_)?"text-ok":"text-bad"))),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),((positivo_QMARK_)?"#EBF5EF":"#FBEEEE")], null)], null),((positivo_QMARK_)?"\u2713 credor":"\u26A0 devedor")], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(""+"display num text-3xl leading-[1.05] "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((positivo_QMARK_)?"text-ok":"text-bad")))], null),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((positivo_QMARK_)?"+":null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(casa_financas.utils.formatar_valor_br(acum)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-[11px] text-ink-3 font-semibold mt-1.5"], null),"saldo acumulado (com hist\u00F3rico)"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mt-3 pt-3 border-t border-rule-soft space-y-1"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex justify-between text-[11.5px]"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-ink-3 font-semibold"], null),"entrou no m\u00EAs"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"num font-bold text-ok"], null),casa_financas.utils.formatar_valor_br(aporte)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex justify-between text-[11.5px]"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-ink-3 font-semibold"], null),"custo no m\u00EAs"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"num font-bold text-ink-2"], null),casa_financas.utils.formatar_valor_br(cota)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex justify-between text-[11.5px]"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-ink-3 font-semibold"], null),"saldo do m\u00EAs"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(""+"num font-bold "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((saldo_mes >= (0)))?"text-ok":"text-bad")))], null),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((saldo_mes >= (0)))?"+":null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(casa_financas.utils.formatar_valor_br(saldo_mes)))], null)], null)], null)], null);
});
casa_financas.views.admin.painel_posicao = (function casa_financas$views$admin$painel_posicao(){
var mes = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mes-atual","mes-atual",1459588153)], null)));
var dados = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resumo-mes-atual","resumo-mes-atual",1425807400)], null)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"px-9 pb-6"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-baseline justify-between mb-3"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"display text-[22px]"], null),"Quem est\u00E1 em paz, quem est\u00E1 em d\u00E9bito"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-[11px] text-ink-3 font-semibold mt-0.5"], null),(""+"Acumulado at\u00E9 "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(casa_financas.utils.mes_nome(new cljs.core.Keyword(null,"mes","mes",-890288111).cljs$core$IFn$_invoke$arity$1(mes)))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new cljs.core.Keyword(null,"ano","ano",109602792).cljs$core$IFn$_invoke$arity$1(mes) - (2000)))+" \u00B7 carrega o hist\u00F3rico")], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"], null),(function (){var iter__5628__auto__ = (function casa_financas$views$admin$painel_posicao_$_iter__6700(s__6701){
return (new cljs.core.LazySeq(null,(function (){
var s__6701__$1 = s__6701;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__6701__$1);
if(temp__5823__auto__){
var s__6701__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__6701__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__6701__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__6703 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__6702 = (0);
while(true){
if((i__6702 < size__5627__auto__)){
var pid = cljs.core._nth(c__5626__auto__,i__6702);
cljs.core.chunk_append(b__6703,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.admin.card_posicao,pid,cljs.core.get.cljs$core$IFn$_invoke$arity$2(dados,pid)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),pid], null)));

var G__6839 = (i__6702 + (1));
i__6702 = G__6839;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__6703),casa_financas$views$admin$painel_posicao_$_iter__6700(cljs.core.chunk_rest(s__6701__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__6703),null);
}
} else {
var pid = cljs.core.first(s__6701__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.admin.card_posicao,pid,cljs.core.get.cljs$core$IFn$_invoke$arity$2(dados,pid)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),pid], null)),casa_financas$views$admin$painel_posicao_$_iter__6700(cljs.core.rest(s__6701__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(casa_financas.views.admin.pessoas_ids);
})()], null)], null);
});
casa_financas.views.admin.cell_text = (function casa_financas$views$admin$cell_text(var_args){
var args__5882__auto__ = [];
var len__5876__auto___6840 = arguments.length;
var i__5877__auto___6841 = (0);
while(true){
if((i__5877__auto___6841 < len__5876__auto___6840)){
args__5882__auto__.push((arguments[i__5877__auto___6841]));

var G__6842 = (i__5877__auto___6841 + (1));
i__5877__auto___6841 = G__6842;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((2) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((2)),(0),null)):null);
return casa_financas.views.admin.cell_text.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5883__auto__);
});

(casa_financas.views.admin.cell_text.cljs$core$IFn$_invoke$arity$variadic = (function (valor,on_save,p__6708){
var vec__6709 = p__6708;
var map__6712 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6709,(0),null);
var map__6712__$1 = cljs.core.__destructure_map(map__6712);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6712__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6712__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var editing_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var novo = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((function (){var or__5142__auto__ = valor;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})());
return (function() { 
var G__6843__delegate = function (valor__$1,on_save__$1,p__6713){
var vec__6714 = p__6713;
var map__6717 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6714,(0),null);
var map__6717__$1 = cljs.core.__destructure_map(map__6717);
var class$__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6717__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var placeholder__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6717__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
if(cljs.core.truth_(cljs.core.deref(editing_QMARK_))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"class","class",-2030961996),(""+"cell-editable w-full text-[13px] focus:outline-none "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$__$1)),new cljs.core.Keyword(null,"data-editing","data-editing",-862106338),true,new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(novo),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__6704_SHARP_){
return cljs.core.reset_BANG_(novo,p1__6704_SHARP_.target.value);
}),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),(function (){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(novo),(function (){var or__5142__auto__ = valor__$1;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})())){
var G__6718_6844 = cljs.core.deref(novo);
(on_save__$1.cljs$core$IFn$_invoke$arity$1 ? on_save__$1.cljs$core$IFn$_invoke$arity$1(G__6718_6844) : on_save__$1.call(null,G__6718_6844));
} else {
}

return cljs.core.reset_BANG_(editing_QMARK_,false);
}),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (e){
var G__6719 = e.key;
switch (G__6719) {
case "Enter":
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(novo),(function (){var or__5142__auto__ = valor__$1;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})())){
var G__6720_6846 = cljs.core.deref(novo);
(on_save__$1.cljs$core$IFn$_invoke$arity$1 ? on_save__$1.cljs$core$IFn$_invoke$arity$1(G__6720_6846) : on_save__$1.call(null,G__6720_6846));
} else {
}

return cljs.core.reset_BANG_(editing_QMARK_,false);

break;
case "Escape":
cljs.core.reset_BANG_(novo,(function (){var or__5142__auto__ = valor__$1;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})());

return cljs.core.reset_BANG_(editing_QMARK_,false);

break;
default:
return null;

}
})], null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(""+"cell-editable text-[13px] "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$__$1)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.reset_BANG_(novo,(function (){var or__5142__auto__ = valor__$1;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})());

return cljs.core.reset_BANG_(editing_QMARK_,true);
})], null),((cljs.core.seq((function (){var or__5142__auto__ = valor__$1;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})()))?valor__$1:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-ink-3 italic"], null),(function (){var or__5142__auto__ = placeholder__$1;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "\u2014";
}
})()], null))], null);
}
};
var G__6843 = function (valor__$1,on_save__$1,var_args){
var p__6713 = null;
if (arguments.length > 2) {
var G__6847__i = 0, G__6847__a = new Array(arguments.length -  2);
while (G__6847__i < G__6847__a.length) {G__6847__a[G__6847__i] = arguments[G__6847__i + 2]; ++G__6847__i;}
  p__6713 = new cljs.core.IndexedSeq(G__6847__a,0,null);
} 
return G__6843__delegate.call(this,valor__$1,on_save__$1,p__6713);};
G__6843.cljs$lang$maxFixedArity = 2;
G__6843.cljs$lang$applyTo = (function (arglist__6848){
var valor__$1 = cljs.core.first(arglist__6848);
arglist__6848 = cljs.core.next(arglist__6848);
var on_save__$1 = cljs.core.first(arglist__6848);
var p__6713 = cljs.core.rest(arglist__6848);
return G__6843__delegate(valor__$1,on_save__$1,p__6713);
});
G__6843.cljs$core$IFn$_invoke$arity$variadic = G__6843__delegate;
return G__6843;
})()
;
}));

(casa_financas.views.admin.cell_text.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(casa_financas.views.admin.cell_text.cljs$lang$applyTo = (function (seq6705){
var G__6706 = cljs.core.first(seq6705);
var seq6705__$1 = cljs.core.next(seq6705);
var G__6707 = cljs.core.first(seq6705__$1);
var seq6705__$2 = cljs.core.next(seq6705__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6706,G__6707,seq6705__$2);
}));

casa_financas.views.admin.cell_number = (function casa_financas$views$admin$cell_number(var_args){
var args__5882__auto__ = [];
var len__5876__auto___6849 = arguments.length;
var i__5877__auto___6850 = (0);
while(true){
if((i__5877__auto___6850 < len__5876__auto___6849)){
args__5882__auto__.push((arguments[i__5877__auto___6850]));

var G__6851 = (i__5877__auto___6850 + (1));
i__5877__auto___6850 = G__6851;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((2) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((2)),(0),null)):null);
return casa_financas.views.admin.cell_number.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5883__auto__);
});

(casa_financas.views.admin.cell_number.cljs$core$IFn$_invoke$arity$variadic = (function (valor,on_save,p__6725){
var vec__6726 = p__6725;
var map__6729 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6726,(0),null);
var map__6729__$1 = cljs.core.__destructure_map(map__6729);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6729__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var step = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6729__$1,new cljs.core.Keyword(null,"step","step",1288888124));
var formatter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6729__$1,new cljs.core.Keyword(null,"formatter","formatter",-483008823));
var editing_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var novo = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5142__auto__ = valor;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})())));
return (function() { 
var G__6852__delegate = function (valor__$1,on_save__$1,p__6730){
var vec__6731 = p__6730;
var map__6734 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6731,(0),null);
var map__6734__$1 = cljs.core.__destructure_map(map__6734);
var class$__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6734__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var step__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6734__$1,new cljs.core.Keyword(null,"step","step",1288888124));
var formatter__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6734__$1,new cljs.core.Keyword(null,"formatter","formatter",-483008823));
if(cljs.core.truth_(cljs.core.deref(editing_QMARK_))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),new cljs.core.Keyword(null,"step","step",1288888124),new cljs.core.Keyword(null,"data-editing","data-editing",-862106338)],[cljs.core.deref(novo),(function (){
var v_6853 = parseFloat(cljs.core.deref(novo));
if(((cljs.core.not(isNaN(v_6853))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(v_6853,valor__$1)))){
(on_save__$1.cljs$core$IFn$_invoke$arity$1 ? on_save__$1.cljs$core$IFn$_invoke$arity$1(v_6853) : on_save__$1.call(null,v_6853));
} else {
}

return cljs.core.reset_BANG_(editing_QMARK_,false);
}),"number",(""+"cell-editable w-full num focus:outline-none "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5142__auto__ = class$__$1;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "text-[13px] text-right";
}
})())),true,(function (p1__6721_SHARP_){
return cljs.core.reset_BANG_(novo,p1__6721_SHARP_.target.value);
}),(function (e){
var G__6735 = e.key;
switch (G__6735) {
case "Enter":
var v_6855 = parseFloat(cljs.core.deref(novo));
if(((cljs.core.not(isNaN(v_6855))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(v_6855,valor__$1)))){
(on_save__$1.cljs$core$IFn$_invoke$arity$1 ? on_save__$1.cljs$core$IFn$_invoke$arity$1(v_6855) : on_save__$1.call(null,v_6855));
} else {
}

return cljs.core.reset_BANG_(editing_QMARK_,false);

break;
case "Escape":
cljs.core.reset_BANG_(novo,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5142__auto__ = valor__$1;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})())));

return cljs.core.reset_BANG_(editing_QMARK_,false);

break;
default:
return null;

}
}),(function (){var or__5142__auto__ = step__$1;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "0.01";
}
})(),true])], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(""+"cell-editable num "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5142__auto__ = class$__$1;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "text-[13px] text-right";
}
})())),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.reset_BANG_(novo,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5142__auto__ = valor__$1;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})())));

return cljs.core.reset_BANG_(editing_QMARK_,true);
})], null),(cljs.core.truth_(formatter__$1)?(formatter__$1.cljs$core$IFn$_invoke$arity$1 ? formatter__$1.cljs$core$IFn$_invoke$arity$1(valor__$1) : formatter__$1.call(null,valor__$1)):(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(valor__$1)))], null);
}
};
var G__6852 = function (valor__$1,on_save__$1,var_args){
var p__6730 = null;
if (arguments.length > 2) {
var G__6856__i = 0, G__6856__a = new Array(arguments.length -  2);
while (G__6856__i < G__6856__a.length) {G__6856__a[G__6856__i] = arguments[G__6856__i + 2]; ++G__6856__i;}
  p__6730 = new cljs.core.IndexedSeq(G__6856__a,0,null);
} 
return G__6852__delegate.call(this,valor__$1,on_save__$1,p__6730);};
G__6852.cljs$lang$maxFixedArity = 2;
G__6852.cljs$lang$applyTo = (function (arglist__6857){
var valor__$1 = cljs.core.first(arglist__6857);
arglist__6857 = cljs.core.next(arglist__6857);
var on_save__$1 = cljs.core.first(arglist__6857);
var p__6730 = cljs.core.rest(arglist__6857);
return G__6852__delegate(valor__$1,on_save__$1,p__6730);
});
G__6852.cljs$core$IFn$_invoke$arity$variadic = G__6852__delegate;
return G__6852;
})()
;
}));

(casa_financas.views.admin.cell_number.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(casa_financas.views.admin.cell_number.cljs$lang$applyTo = (function (seq6722){
var G__6723 = cljs.core.first(seq6722);
var seq6722__$1 = cljs.core.next(seq6722);
var G__6724 = cljs.core.first(seq6722__$1);
var seq6722__$2 = cljs.core.next(seq6722__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6723,G__6724,seq6722__$2);
}));

casa_financas.views.admin.cell_select = (function casa_financas$views$admin$cell_select(var_args){
var args__5882__auto__ = [];
var len__5876__auto___6858 = arguments.length;
var i__5877__auto___6859 = (0);
while(true){
if((i__5877__auto___6859 < len__5876__auto___6858)){
args__5882__auto__.push((arguments[i__5877__auto___6859]));

var G__6860 = (i__5877__auto___6859 + (1));
i__5877__auto___6859 = G__6860;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((3) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((3)),(0),null)):null);
return casa_financas.views.admin.cell_select.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5883__auto__);
});

(casa_financas.views.admin.cell_select.cljs$core$IFn$_invoke$arity$variadic = (function (valor,opcoes,on_save,p__6741){
var vec__6742 = p__6741;
var map__6745 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6742,(0),null);
var map__6745__$1 = cljs.core.__destructure_map(map__6745);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6745__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var display_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6745__$1,new cljs.core.Keyword(null,"display-fn","display-fn",1333857036));
var editing_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return (function() { 
var G__6861__delegate = function (valor__$1,opcoes__$1,on_save__$1,p__6746){
var vec__6747 = p__6746;
var map__6750 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6747,(0),null);
var map__6750__$1 = cljs.core.__destructure_map(map__6750);
var class$__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6750__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var display_fn__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6750__$1,new cljs.core.Keyword(null,"display-fn","display-fn",1333857036));
var label_fn = (function (){var or__5142__auto__ = display_fn__$1;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (function (v){
var or__5142__auto____$1 = cljs.core.second(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6736_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(p1__6736_SHARP_),v);
}),opcoes__$1)));
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return v;
}
});
}
})();
if(cljs.core.truth_(cljs.core.deref(editing_QMARK_))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"class","class",-2030961996),(""+"cell-editable text-[13px] focus:outline-none "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$__$1)),new cljs.core.Keyword(null,"data-editing","data-editing",-862106338),true,new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),true,new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__5142__auto__ = valor__$1;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var v = e.target.value;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(v,valor__$1)){
(on_save__$1.cljs$core$IFn$_invoke$arity$1 ? on_save__$1.cljs$core$IFn$_invoke$arity$1(v) : on_save__$1.call(null,v));
} else {
}

return cljs.core.reset_BANG_(editing_QMARK_,false);
}),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),(function (){
return cljs.core.reset_BANG_(editing_QMARK_,false);
})], null),(function (){var iter__5628__auto__ = (function casa_financas$views$admin$iter__6751(s__6752){
return (new cljs.core.LazySeq(null,(function (){
var s__6752__$1 = s__6752;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__6752__$1);
if(temp__5823__auto__){
var s__6752__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__6752__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__6752__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__6754 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__6753 = (0);
while(true){
if((i__6753 < size__5627__auto__)){
var vec__6755 = cljs.core._nth(c__5626__auto__,i__6753);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6755,(0),null);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6755,(1),null);
cljs.core.chunk_append(b__6754,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),v], null),l], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)));

var G__6862 = (i__6753 + (1));
i__6753 = G__6862;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__6754),casa_financas$views$admin$iter__6751(cljs.core.chunk_rest(s__6752__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__6754),null);
}
} else {
var vec__6758 = cljs.core.first(s__6752__$2);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6758,(0),null);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6758,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),v], null),l], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),v], null)),casa_financas$views$admin$iter__6751(cljs.core.rest(s__6752__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(opcoes__$1);
})()], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(""+"cell-editable text-[13px] "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$__$1)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(editing_QMARK_,true);
})], null),(label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(valor__$1) : label_fn.call(null,valor__$1))], null);
}
};
var G__6861 = function (valor__$1,opcoes__$1,on_save__$1,var_args){
var p__6746 = null;
if (arguments.length > 3) {
var G__6863__i = 0, G__6863__a = new Array(arguments.length -  3);
while (G__6863__i < G__6863__a.length) {G__6863__a[G__6863__i] = arguments[G__6863__i + 3]; ++G__6863__i;}
  p__6746 = new cljs.core.IndexedSeq(G__6863__a,0,null);
} 
return G__6861__delegate.call(this,valor__$1,opcoes__$1,on_save__$1,p__6746);};
G__6861.cljs$lang$maxFixedArity = 3;
G__6861.cljs$lang$applyTo = (function (arglist__6864){
var valor__$1 = cljs.core.first(arglist__6864);
arglist__6864 = cljs.core.next(arglist__6864);
var opcoes__$1 = cljs.core.first(arglist__6864);
arglist__6864 = cljs.core.next(arglist__6864);
var on_save__$1 = cljs.core.first(arglist__6864);
var p__6746 = cljs.core.rest(arglist__6864);
return G__6861__delegate(valor__$1,opcoes__$1,on_save__$1,p__6746);
});
G__6861.cljs$core$IFn$_invoke$arity$variadic = G__6861__delegate;
return G__6861;
})()
;
}));

(casa_financas.views.admin.cell_select.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(casa_financas.views.admin.cell_select.cljs$lang$applyTo = (function (seq6737){
var G__6738 = cljs.core.first(seq6737);
var seq6737__$1 = cljs.core.next(seq6737);
var G__6739 = cljs.core.first(seq6737__$1);
var seq6737__$2 = cljs.core.next(seq6737__$1);
var G__6740 = cljs.core.first(seq6737__$2);
var seq6737__$3 = cljs.core.next(seq6737__$2);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6738,G__6739,G__6740,seq6737__$3);
}));

casa_financas.views.admin.cell_toggle = (function casa_financas$views$admin$cell_toggle(valor,on_toggle){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(""+"w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(valor)?"bg-ok border-ok text-white":"border-rule text-transparent hover:border-ink-3"))),new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_toggle], null),"\u2713"], null);
});
casa_financas.views.admin.divisao_resumida = (function casa_financas$views$admin$divisao_resumida(d){
var div = new cljs.core.Keyword(null,"divisao","divisao",1361721447).cljs$core$IFn$_invoke$arity$1(d);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center gap-1.5"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"num text-[11.5px] text-ink-2 font-semibold"], null),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5142__auto__ = new cljs.core.Keyword(null,"andre","andre",936361062).cljs$core$IFn$_invoke$arity$1(div);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})())+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5142__auto__ = new cljs.core.Keyword(null,"bianca","bianca",820619526).cljs$core$IFn$_invoke$arity$1(div);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})())+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5142__auto__ = new cljs.core.Keyword(null,"fernanda","fernanda",1421441127).cljs$core$IFn$_invoke$arity$1(div);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})())+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5142__auto__ = new cljs.core.Keyword(null,"bruna","bruna",1508842390).cljs$core$IFn$_invoke$arity$1(div);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})()))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.components.comum.barra_divisao,div], null)], null);
});
casa_financas.views.admin.pagadores_display = (function casa_financas$views$admin$pagadores_display(d){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center gap-1"], null),(function (){var iter__5628__auto__ = (function casa_financas$views$admin$pagadores_display_$_iter__6761(s__6762){
return (new cljs.core.LazySeq(null,(function (){
var s__6762__$1 = s__6762;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__6762__$1);
if(temp__5823__auto__){
var s__6762__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__6762__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__6762__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__6764 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__6763 = (0);
while(true){
if((i__6763 < size__5627__auto__)){
var pid = cljs.core._nth(c__5626__auto__,i__6763);
cljs.core.chunk_append(b__6764,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.components.comum.chip_pessoa_mini,pid], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),pid], null)));

var G__6865 = (i__6763 + (1));
i__6763 = G__6865;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__6764),casa_financas$views$admin$pagadores_display_$_iter__6761(cljs.core.chunk_rest(s__6762__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__6764),null);
}
} else {
var pid = cljs.core.first(s__6762__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.components.comum.chip_pessoa_mini,pid], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),pid], null)),casa_financas$views$admin$pagadores_display_$_iter__6761(cljs.core.rest(s__6762__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(cljs.core.take.cljs$core$IFn$_invoke$arity$2((4),new cljs.core.Keyword(null,"pagadores","pagadores",-269867482).cljs$core$IFn$_invoke$arity$1(d)));
})()], null);
});
casa_financas.views.admin.status_dot_d = (function casa_financas$views$admin$status_dot_d(d){
var estado = casa_financas.utils.despesa_status(d);
var st_design = (function (){var G__6765 = estado;
var G__6765__$1 = (((G__6765 instanceof cljs.core.Keyword))?G__6765.fqn:null);
switch (G__6765__$1) {
case "paga":
return new cljs.core.Keyword(null,"pago","pago",27952415);

break;
case "vencida":
return new cljs.core.Keyword(null,"vencida","vencida",-1537883219);

break;
case "pendente":
return new cljs.core.Keyword(null,"a-vencer","a-vencer",-1692928739);

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__6765__$1))));

}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.components.comum.status_dot,st_design], null);
});
casa_financas.views.admin.linha_despesa = (function casa_financas$views$admin$linha_despesa(d,cartao_QMARK_){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"border-t border-rule-soft hover:bg-panel-2 transition-colors",new cljs.core.Keyword(null,"style","style",-496642736),(cljs.core.truth_(cartao_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),"#FFFBF4"], null):null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"px-4 py-3 num font-semibold text-ink-2 w-14"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.admin.cell_number,new cljs.core.Keyword(null,"dia_do_mes","dia_do_mes",-485165205).cljs$core$IFn$_invoke$arity$1(d),(function (p1__6766_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"atualizar-despesa-inline","atualizar-despesa-inline",1128999415),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(d),new cljs.core.Keyword(null,"dia_do_mes","dia_do_mes",-485165205),(p1__6766_SHARP_ | 0)], null));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"step","step",1288888124),"1"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"px-4 py-3"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.admin.cell_text,new cljs.core.Keyword(null,"descricao","descricao",861900814).cljs$core$IFn$_invoke$arity$1(d),(function (p1__6767_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"atualizar-despesa-inline","atualizar-despesa-inline",1128999415),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(d),new cljs.core.Keyword(null,"descricao","descricao",861900814),p1__6767_SHARP_], null));
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"px-4 py-3"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.admin.cell_number,new cljs.core.Keyword(null,"valor","valor",-957162173).cljs$core$IFn$_invoke$arity$1(d),(function (p1__6768_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"atualizar-despesa-inline","atualizar-despesa-inline",1128999415),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(d),new cljs.core.Keyword(null,"valor","valor",-957162173),p1__6768_SHARP_], null));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"formatter","formatter",-483008823),casa_financas.utils.formatar_valor_br], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"px-4 py-3 w-24"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.admin.cell_select,new cljs.core.Keyword(null,"forma_pagamento","forma_pagamento",205169437).cljs$core$IFn$_invoke$arity$1(d),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pix","pix"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["credito","cart\u00E3o"], null)], null),(function (p1__6769_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"atualizar-despesa-inline","atualizar-despesa-inline",1128999415),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(d),new cljs.core.Keyword(null,"forma_pagamento","forma_pagamento",205169437),p1__6769_SHARP_], null));
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"px-4 py-3 cursor-pointer",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"abrir-modal","abrir-modal",514595978),new cljs.core.Keyword(null,"editar-despesa","editar-despesa",-7409021),d], null));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.admin.pagadores_display,d], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"px-4 py-3 cursor-pointer w-32",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"abrir-modal","abrir-modal",514595978),new cljs.core.Keyword(null,"editar-despesa","editar-despesa",-7409021),d], null));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.admin.divisao_resumida,d], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"px-4 py-3 w-24"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.admin.status_dot_d,d], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"px-4 py-3 text-center w-12"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.admin.cell_toggle,new cljs.core.Keyword(null,"pago","pago",27952415).cljs$core$IFn$_invoke$arity$1(d),(function (){
if(cljs.core.truth_(new cljs.core.Keyword(null,"pago","pago",27952415).cljs$core$IFn$_invoke$arity$1(d))){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"desmarcar-pago","desmarcar-pago",-5576968),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(d)], null));
} else {
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"marcar-pago","marcar-pago",446617930),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(d)], null));
}
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"px-4 py-3 w-8 text-center"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-ink-3 hover:text-bad transition-colors text-sm",new cljs.core.Keyword(null,"title","title",636505583),"Deletar",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(cljs.core.truth_(confirm((""+"Deletar \""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"descricao","descricao",861900814).cljs$core$IFn$_invoke$arity$1(d))+"\"?")))){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"deletar-despesa","deletar-despesa",1441694847),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(d)], null));
} else {
return null;
}
})], null),"\u2715"], null)], null)], null);
});
casa_financas.views.admin.fatura_row = (function casa_financas$views$admin$fatura_row(){
var total = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"total-credito-mes","total-credito-mes",-1293171558)], null)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"border-t-2 border-rule",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),"#FFF7EE"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"px-4 py-2 text-center"], null),"\uD83D\uDCB3"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"col-span","col-span",-232603210),(8),new cljs.core.Keyword(null,"class","class",-2030961996),"px-4 py-2 text-[11px] font-bold uppercase tracking-[0.5px]",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#7A4F1F"], null)], null),(""+"Cart\u00E3o de cr\u00E9dito \u00B7 "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(casa_financas.utils.formatar_valor_br(total))+" no m\u00EAs")], null)], null);
});
casa_financas.views.admin.tabela_despesas = (function casa_financas$views$admin$tabela_despesas(){
var despesas = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"despesas-do-mes","despesas-do-mes",2018938320)], null)));
var credito = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dia_do_mes","dia_do_mes",-485165205),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__6770_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"forma_pagamento","forma_pagamento",205169437).cljs$core$IFn$_invoke$arity$1(p1__6770_SHARP_),"credito");
}),despesas));
var debito = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dia_do_mes","dia_do_mes",-485165205),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__6771_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"forma_pagamento","forma_pagamento",205169437).cljs$core$IFn$_invoke$arity$1(p1__6771_SHARP_),"credito");
}),despesas));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"px-9 pb-6"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center justify-between mb-3"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"display text-[22px]"], null),"Despesas do m\u00EAs"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"px-4 py-2 bg-ink text-cream rounded-pill text-[13px] font-bold hover:bg-ink-2 transition-colors",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"abrir-modal","abrir-modal",514595978),new cljs.core.Keyword(null,"nova-despesa","nova-despesa",-1962536346),cljs.core.PersistentArrayMap.EMPTY], null));
})], null),"+ Nova despesa"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"bg-panel rounded-panel border border-rule overflow-hidden shadow-soft"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-full"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"bg-cream"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"px-4 py-3 text-left text-[11px] font-bold text-ink-2 uppercase tracking-[0.4px] w-14"], null),"Dia"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"px-4 py-3 text-left text-[11px] font-bold text-ink-2 uppercase tracking-[0.4px]"], null),"Descri\u00E7\u00E3o"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"px-4 py-3 text-right text-[11px] font-bold text-ink-2 uppercase tracking-[0.4px] w-32"], null),"Valor"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"px-4 py-3 text-left text-[11px] font-bold text-ink-2 uppercase tracking-[0.4px] w-24"], null),"Forma"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"px-4 py-3 text-left text-[11px] font-bold text-ink-2 uppercase tracking-[0.4px] w-32"], null),"Pagador"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"px-4 py-3 text-left text-[11px] font-bold text-ink-2 uppercase tracking-[0.4px] w-32"], null),"Divis\u00E3o"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"px-4 py-3 text-left text-[11px] font-bold text-ink-2 uppercase tracking-[0.4px] w-24"], null),"Status"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"px-4 py-3 text-center text-[11px] font-bold text-ink-2 uppercase tracking-[0.4px] w-12"], null),"Pago"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-8"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.admin.fatura_row], null),(function (){var iter__5628__auto__ = (function casa_financas$views$admin$tabela_despesas_$_iter__6772(s__6773){
return (new cljs.core.LazySeq(null,(function (){
var s__6773__$1 = s__6773;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__6773__$1);
if(temp__5823__auto__){
var s__6773__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__6773__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__6773__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__6775 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__6774 = (0);
while(true){
if((i__6774 < size__5627__auto__)){
var d = cljs.core._nth(c__5626__auto__,i__6774);
cljs.core.chunk_append(b__6775,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.admin.linha_despesa,d,true], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(d)], null)));

var G__6867 = (i__6774 + (1));
i__6774 = G__6867;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__6775),casa_financas$views$admin$tabela_despesas_$_iter__6772(cljs.core.chunk_rest(s__6773__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__6775),null);
}
} else {
var d = cljs.core.first(s__6773__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.admin.linha_despesa,d,true], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(d)], null)),casa_financas$views$admin$tabela_despesas_$_iter__6772(cljs.core.rest(s__6773__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(credito);
})(),((cljs.core.seq(debito))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"border-t-2 border-rule",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),"#F3EFE6"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"col-span","col-span",-232603210),(9),new cljs.core.Keyword(null,"class","class",-2030961996),"px-4 py-2 text-[11px] font-bold uppercase tracking-[0.5px] text-ink-2"], null),"Pix & d\u00E9bito"], null)], null):null),(function (){var iter__5628__auto__ = (function casa_financas$views$admin$tabela_despesas_$_iter__6776(s__6777){
return (new cljs.core.LazySeq(null,(function (){
var s__6777__$1 = s__6777;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__6777__$1);
if(temp__5823__auto__){
var s__6777__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__6777__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__6777__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__6779 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__6778 = (0);
while(true){
if((i__6778 < size__5627__auto__)){
var d = cljs.core._nth(c__5626__auto__,i__6778);
cljs.core.chunk_append(b__6779,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.admin.linha_despesa,d,false], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(d)], null)));

var G__6868 = (i__6778 + (1));
i__6778 = G__6868;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__6779),casa_financas$views$admin$tabela_despesas_$_iter__6776(cljs.core.chunk_rest(s__6777__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__6779),null);
}
} else {
var d = cljs.core.first(s__6777__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.admin.linha_despesa,d,false], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(d)], null)),casa_financas$views$admin$tabela_despesas_$_iter__6776(cljs.core.rest(s__6777__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(debito);
})(),((((cljs.core.empty_QMARK_(credito)) && (cljs.core.empty_QMARK_(debito))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"col-span","col-span",-232603210),(9),new cljs.core.Keyword(null,"class","class",-2030961996),"px-4 py-8 text-center text-ink-3 text-sm font-semibold"], null),"Nenhuma despesa neste m\u00EAs"], null)], null):null)], null)], null)], null)], null);
});
casa_financas.views.admin.linha_entrada = (function casa_financas$views$admin$linha_entrada(e){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"border-t border-rule-soft hover:bg-panel-2 transition-colors"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"px-4 py-3 w-32"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.admin.cell_text,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(e),(function (p1__6780_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"atualizar-entrada-inline","atualizar-entrada-inline",157348294),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(e),new cljs.core.Keyword(null,"data","data",-232669377),p1__6780_SHARP_], null));
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"px-4 py-3 w-32"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.admin.cell_select,new cljs.core.Keyword(null,"pessoa_id","pessoa_id",-1264984672).cljs$core$IFn$_invoke$arity$1(e),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["andre","Andr\u00E9"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bianca","Bianca"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["fernanda","Fernanda"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bruna","Bruna"], null)], null),(function (p1__6781_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"atualizar-entrada-inline","atualizar-entrada-inline",157348294),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(e),new cljs.core.Keyword(null,"pessoa_id","pessoa_id",-1264984672),p1__6781_SHARP_], null));
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"px-4 py-3 w-32 text-ok num font-bold"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.admin.cell_number,new cljs.core.Keyword(null,"valor","valor",-957162173).cljs$core$IFn$_invoke$arity$1(e),(function (p1__6782_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"atualizar-entrada-inline","atualizar-entrada-inline",157348294),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(e),new cljs.core.Keyword(null,"valor","valor",-957162173),p1__6782_SHARP_], null));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"formatter","formatter",-483008823),casa_financas.utils.formatar_valor_br], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"px-4 py-3"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.admin.cell_text,new cljs.core.Keyword(null,"descricao","descricao",861900814).cljs$core$IFn$_invoke$arity$1(e),(function (p1__6783_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"atualizar-entrada-inline","atualizar-entrada-inline",157348294),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(e),new cljs.core.Keyword(null,"descricao","descricao",861900814),p1__6783_SHARP_], null));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"(sem descri\u00E7\u00E3o)"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"px-4 py-3 w-8 text-center"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-ink-3 hover:text-bad text-sm transition-colors",new cljs.core.Keyword(null,"title","title",636505583),"Deletar",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(cljs.core.truth_(confirm("Deletar entrada?"))){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"deletar-entrada","deletar-entrada",-333068260),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(e)], null));
} else {
return null;
}
})], null),"\u2715"], null)], null)], null);
});
casa_financas.views.admin.tabela_entradas = (function casa_financas$views$admin$tabela_entradas(){
var entradas = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entradas-do-mes","entradas-do-mes",956329241)], null)));
var ordenadas = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"data","data",-232669377),entradas);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"px-9 pb-6"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center justify-between mb-3"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"display text-[22px]"], null),"Entradas do m\u00EAs"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"px-4 py-2 bg-ink text-cream rounded-pill text-[13px] font-bold hover:bg-ink-2 transition-colors",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"abrir-modal","abrir-modal",514595978),new cljs.core.Keyword(null,"nova-entrada","nova-entrada",-912141489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null),"+ Nova entrada"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"bg-panel rounded-panel border border-rule overflow-hidden shadow-soft"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-full"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"bg-cream"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"px-4 py-3 text-left text-[11px] font-bold text-ink-2 uppercase tracking-[0.4px] w-32"], null),"Data"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"px-4 py-3 text-left text-[11px] font-bold text-ink-2 uppercase tracking-[0.4px] w-32"], null),"Pessoa"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"px-4 py-3 text-right text-[11px] font-bold text-ink-2 uppercase tracking-[0.4px] w-32"], null),"Valor"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"px-4 py-3 text-left text-[11px] font-bold text-ink-2 uppercase tracking-[0.4px]"], null),"Descri\u00E7\u00E3o"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-8"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__5628__auto__ = (function casa_financas$views$admin$tabela_entradas_$_iter__6784(s__6785){
return (new cljs.core.LazySeq(null,(function (){
var s__6785__$1 = s__6785;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__6785__$1);
if(temp__5823__auto__){
var s__6785__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__6785__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__6785__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__6787 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__6786 = (0);
while(true){
if((i__6786 < size__5627__auto__)){
var e = cljs.core._nth(c__5626__auto__,i__6786);
cljs.core.chunk_append(b__6787,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.admin.linha_entrada,e], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(e)], null)));

var G__6869 = (i__6786 + (1));
i__6786 = G__6869;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__6787),casa_financas$views$admin$tabela_entradas_$_iter__6784(cljs.core.chunk_rest(s__6785__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__6787),null);
}
} else {
var e = cljs.core.first(s__6785__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.admin.linha_entrada,e], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(e)], null)),casa_financas$views$admin$tabela_entradas_$_iter__6784(cljs.core.rest(s__6785__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(ordenadas);
})(),((cljs.core.empty_QMARK_(ordenadas))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"col-span","col-span",-232603210),(5),new cljs.core.Keyword(null,"class","class",-2030961996),"px-4 py-8 text-center text-ink-3 text-sm font-semibold"], null),"Nenhuma entrada neste m\u00EAs"], null)], null):null)], null)], null)], null)], null);
});
casa_financas.views.admin.barra_horizontal = (function casa_financas$views$admin$barra_horizontal(pct,cor){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-2 bg-panel-2 rounded-pill overflow-hidden"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-full rounded-pill",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.max.cljs$core$IFn$_invoke$arity$2((0),cljs.core.min.cljs$core$IFn$_invoke$arity$2((100),pct)))+"%"),new cljs.core.Keyword(null,"background-color","background-color",570434026),cor], null)], null)], null)], null);
});
casa_financas.views.admin.card_top_categorias = (function casa_financas$views$admin$card_top_categorias(){
var cats = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"top-categorias-mes","top-categorias-mes",4093728)], null)));
var max_v = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cats));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (1);
}
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"bg-panel rounded-panel border border-rule p-5 shadow-soft"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"display text-base mb-3"], null),"Top categorias do m\u00EAs"], null),((cljs.core.empty_QMARK_(cats))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-sm text-ink-3 py-4 text-center font-semibold"], null),"Sem despesas neste m\u00EAs"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"space-y-3"], null),(function (){var iter__5628__auto__ = (function casa_financas$views$admin$card_top_categorias_$_iter__6788(s__6789){
return (new cljs.core.LazySeq(null,(function (){
var s__6789__$1 = s__6789;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__6789__$1);
if(temp__5823__auto__){
var s__6789__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__6789__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__6789__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__6791 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__6790 = (0);
while(true){
if((i__6790 < size__5627__auto__)){
var map__6792 = cljs.core._nth(c__5626__auto__,i__6790);
var map__6792__$1 = cljs.core.__destructure_map(map__6792);
var categoria = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6792__$1,new cljs.core.Keyword(null,"categoria","categoria",1019034182));
var total = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6792__$1,new cljs.core.Keyword(null,"total","total",1916810418));
var count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6792__$1,new cljs.core.Keyword(null,"count","count",2139924085));
cljs.core.chunk_append(b__6791,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center justify-between mb-1"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-[13px] font-bold text-ink"], null),categoria], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-[10.5px] text-ink-3 font-semibold ml-1"], null),(""+"("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(count)+")")], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"num text-[13px] font-bold"], null),casa_financas.utils.formatar_valor_br(total)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.admin.barra_horizontal,((100) * (total / max_v)),"#231C12"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),categoria], null)));

var G__6870 = (i__6790 + (1));
i__6790 = G__6870;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__6791),casa_financas$views$admin$card_top_categorias_$_iter__6788(cljs.core.chunk_rest(s__6789__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__6791),null);
}
} else {
var map__6793 = cljs.core.first(s__6789__$2);
var map__6793__$1 = cljs.core.__destructure_map(map__6793);
var categoria = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6793__$1,new cljs.core.Keyword(null,"categoria","categoria",1019034182));
var total = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6793__$1,new cljs.core.Keyword(null,"total","total",1916810418));
var count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6793__$1,new cljs.core.Keyword(null,"count","count",2139924085));
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center justify-between mb-1"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-[13px] font-bold text-ink"], null),categoria], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-[10.5px] text-ink-3 font-semibold ml-1"], null),(""+"("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(count)+")")], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"num text-[13px] font-bold"], null),casa_financas.utils.formatar_valor_br(total)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.admin.barra_horizontal,((100) * (total / max_v)),"#231C12"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),categoria], null)),casa_financas$views$admin$card_top_categorias_$_iter__6788(cljs.core.rest(s__6789__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(cljs.core.take.cljs$core$IFn$_invoke$arity$2((8),cats));
})()], null))], null);
});
casa_financas.views.admin.card_pessoa_mes = (function casa_financas$views$admin$card_pessoa_mes(){
var tot_mes = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"total-previsto-mes","total-previsto-mes",14134203)], null)));
var max_v = cljs.core.max.cljs$core$IFn$_invoke$arity$2(tot_mes,(1));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"bg-panel rounded-panel border border-rule p-5 shadow-soft"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"display text-base mb-3"], null),"Cota vs aporte (este m\u00EAs)"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"space-y-3"], null),(function (){var iter__5628__auto__ = (function casa_financas$views$admin$card_pessoa_mes_$_iter__6795(s__6796){
return (new cljs.core.LazySeq(null,(function (){
var s__6796__$1 = s__6796;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__6796__$1);
if(temp__5823__auto__){
var s__6796__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__6796__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__6796__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__6798 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__6797 = (0);
while(true){
if((i__6797 < size__5627__auto__)){
var pid = cljs.core._nth(c__5626__auto__,i__6797);
cljs.core.chunk_append(b__6798,(function (){var obrig = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obrigacao-pessoa-mes","obrigacao-pessoa-mes",1475880371),pid], null)));
var entradas = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entradas-do-mes","entradas-do-mes",956329241)], null)));
var aporte = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"valor","valor",-957162173),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (i__6797,obrig,entradas,pid,c__5626__auto__,size__5627__auto__,b__6798,s__6796__$2,temp__5823__auto__,tot_mes,max_v){
return (function (p1__6794_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pessoa_id","pessoa_id",-1264984672).cljs$core$IFn$_invoke$arity$1(p1__6794_SHARP_),pid);
});})(i__6797,obrig,entradas,pid,c__5626__auto__,size__5627__auto__,b__6798,s__6796__$2,temp__5823__auto__,tot_mes,max_v))
,entradas)));
var diff = (aporte - obrig);
var cor = casa_financas.utils.pessoa_cor(pid);
var positivo_QMARK_ = (diff >= (0));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center justify-between mb-1"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center gap-2"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.components.comum.avatar,pid,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),"sm"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-[13px] font-bold text-ink"], null),casa_financas.utils.pessoa_nome(pid)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(""+"num text-[13px] font-bold "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((positivo_QMARK_)?"text-ok":"text-bad")))], null),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((positivo_QMARK_)?"+":null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(casa_financas.utils.formatar_valor_br(diff)))], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex gap-1.5 num text-[10.5px] text-ink-3 font-semibold mb-1"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"cota ",casa_financas.utils.formatar_valor_br(obrig)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"\u00B7"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"aporte ",casa_financas.utils.formatar_valor_br(aporte)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.admin.barra_horizontal,((100) * (obrig / max_v)),cor], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),pid], null));
})());

var G__6871 = (i__6797 + (1));
i__6797 = G__6871;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__6798),casa_financas$views$admin$card_pessoa_mes_$_iter__6795(cljs.core.chunk_rest(s__6796__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__6798),null);
}
} else {
var pid = cljs.core.first(s__6796__$2);
return cljs.core.cons((function (){var obrig = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obrigacao-pessoa-mes","obrigacao-pessoa-mes",1475880371),pid], null)));
var entradas = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entradas-do-mes","entradas-do-mes",956329241)], null)));
var aporte = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"valor","valor",-957162173),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (obrig,entradas,pid,s__6796__$2,temp__5823__auto__,tot_mes,max_v){
return (function (p1__6794_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pessoa_id","pessoa_id",-1264984672).cljs$core$IFn$_invoke$arity$1(p1__6794_SHARP_),pid);
});})(obrig,entradas,pid,s__6796__$2,temp__5823__auto__,tot_mes,max_v))
,entradas)));
var diff = (aporte - obrig);
var cor = casa_financas.utils.pessoa_cor(pid);
var positivo_QMARK_ = (diff >= (0));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center justify-between mb-1"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center gap-2"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.components.comum.avatar,pid,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),"sm"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-[13px] font-bold text-ink"], null),casa_financas.utils.pessoa_nome(pid)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(""+"num text-[13px] font-bold "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((positivo_QMARK_)?"text-ok":"text-bad")))], null),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((positivo_QMARK_)?"+":null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(casa_financas.utils.formatar_valor_br(diff)))], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex gap-1.5 num text-[10.5px] text-ink-3 font-semibold mb-1"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"cota ",casa_financas.utils.formatar_valor_br(obrig)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"\u00B7"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"aporte ",casa_financas.utils.formatar_valor_br(aporte)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.admin.barra_horizontal,((100) * (obrig / max_v)),cor], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),pid], null));
})(),casa_financas$views$admin$card_pessoa_mes_$_iter__6795(cljs.core.rest(s__6796__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(casa_financas.views.admin.pessoas_ids);
})()], null)], null);
});
casa_financas.views.admin.card_evolucao_mensal = (function casa_financas$views$admin$card_evolucao_mensal(){
var evolucao = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"evolucao-mensal","evolucao-mensal",-676229682)], null)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"bg-panel rounded-panel border border-rule p-5 shadow-soft"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"display text-base mb-3"], null),"Evolu\u00E7\u00E3o mensal"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"overflow-x-auto"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-full"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"border-b border-rule"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"px-3 py-2 text-left text-[10.5px] font-bold text-ink-2 uppercase tracking-[0.4px]"], null),"M\u00EAs"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"px-3 py-2 text-right text-[10.5px] font-bold text-ink-2 uppercase tracking-[0.4px]"], null),"Entradas"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"px-3 py-2 text-right text-[10.5px] font-bold text-ink-2 uppercase tracking-[0.4px]"], null),"Sa\u00EDdas"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"px-3 py-2 text-right text-[10.5px] font-bold text-ink-2 uppercase tracking-[0.4px]"], null),"Saldo"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"px-3 py-2 text-right text-[10.5px] font-bold text-ink-2 uppercase tracking-[0.4px]"], null),"Rabo"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__5628__auto__ = (function casa_financas$views$admin$card_evolucao_mensal_$_iter__6799(s__6800){
return (new cljs.core.LazySeq(null,(function (){
var s__6800__$1 = s__6800;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__6800__$1);
if(temp__5823__auto__){
var s__6800__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__6800__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__6800__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__6802 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__6801 = (0);
while(true){
if((i__6801 < size__5627__auto__)){
var map__6803 = cljs.core._nth(c__5626__auto__,i__6801);
var map__6803__$1 = cljs.core.__destructure_map(map__6803);
var mes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6803__$1,new cljs.core.Keyword(null,"mes","mes",-890288111));
var entradas = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6803__$1,new cljs.core.Keyword(null,"entradas","entradas",-1856269220));
var saidas = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6803__$1,new cljs.core.Keyword(null,"saidas","saidas",-1664827529));
var rabo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6803__$1,new cljs.core.Keyword(null,"rabo","rabo",1438047001));
cljs.core.chunk_append(b__6802,(function (){var saldo = (entradas - saidas);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"border-t border-rule-soft"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"px-3 py-2 text-[13px] font-semibold text-ink"], null),casa_financas.utils.mes_nome(mes)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"px-3 py-2 text-right num text-[13px] text-ok font-semibold"], null),casa_financas.utils.formatar_valor_br(entradas)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"px-3 py-2 text-right num text-[13px] text-ink-2 font-semibold"], null),casa_financas.utils.formatar_valor_br(saidas)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(""+"px-3 py-2 text-right num text-[13px] font-bold "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((saldo >= (0)))?"text-ok":"text-bad")))], null),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((saldo >= (0)))?"+":null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(casa_financas.utils.formatar_valor_br(saldo)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"px-3 py-2 text-right num text-[13px] font-semibold",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),(((rabo === (0)))?"#A99A82":"#E97A3F")], null)], null),(((rabo === (0)))?"\u2014":casa_financas.utils.formatar_valor_br(rabo))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),mes], null));
})());

var G__6872 = (i__6801 + (1));
i__6801 = G__6872;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__6802),casa_financas$views$admin$card_evolucao_mensal_$_iter__6799(cljs.core.chunk_rest(s__6800__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__6802),null);
}
} else {
var map__6804 = cljs.core.first(s__6800__$2);
var map__6804__$1 = cljs.core.__destructure_map(map__6804);
var mes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6804__$1,new cljs.core.Keyword(null,"mes","mes",-890288111));
var entradas = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6804__$1,new cljs.core.Keyword(null,"entradas","entradas",-1856269220));
var saidas = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6804__$1,new cljs.core.Keyword(null,"saidas","saidas",-1664827529));
var rabo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6804__$1,new cljs.core.Keyword(null,"rabo","rabo",1438047001));
return cljs.core.cons((function (){var saldo = (entradas - saidas);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"border-t border-rule-soft"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"px-3 py-2 text-[13px] font-semibold text-ink"], null),casa_financas.utils.mes_nome(mes)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"px-3 py-2 text-right num text-[13px] text-ok font-semibold"], null),casa_financas.utils.formatar_valor_br(entradas)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"px-3 py-2 text-right num text-[13px] text-ink-2 font-semibold"], null),casa_financas.utils.formatar_valor_br(saidas)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(""+"px-3 py-2 text-right num text-[13px] font-bold "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((saldo >= (0)))?"text-ok":"text-bad")))], null),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((saldo >= (0)))?"+":null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(casa_financas.utils.formatar_valor_br(saldo)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"px-3 py-2 text-right num text-[13px] font-semibold",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),(((rabo === (0)))?"#A99A82":"#E97A3F")], null)], null),(((rabo === (0)))?"\u2014":casa_financas.utils.formatar_valor_br(rabo))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),mes], null));
})(),casa_financas$views$admin$card_evolucao_mensal_$_iter__6799(cljs.core.rest(s__6800__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(evolucao);
})()], null)], null)], null)], null);
});
casa_financas.views.admin.card_resumo = (function casa_financas$views$admin$card_resumo(){
var tot_ent = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"total-entradas-mes","total-entradas-mes",-1304566331)], null)));
var tot_prev = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"total-previsto-mes","total-previsto-mes",14134203)], null)));
var tot_pago = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"total-pago-mes","total-pago-mes",-1297613936)], null)));
var rabo = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rabo-cartao-ano","rabo-cartao-ano",580721986)], null)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"bg-panel rounded-panel border border-rule p-5 shadow-soft"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"display text-base mb-3"], null),"Resumo do m\u00EAs"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"grid grid-cols-2 gap-3"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"p-3 rounded-panel",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),"#EBF5EF"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.components.comum.label,"Entradas"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"display num text-lg text-ok mt-1"], null),casa_financas.utils.formatar_valor_br(tot_ent)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"p-3 rounded-panel bg-panel-2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.components.comum.label,"Despesas previstas"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"display num text-lg text-ink mt-1"], null),casa_financas.utils.formatar_valor_br(tot_prev)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"p-3 rounded-panel bg-panel-2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.components.comum.label,"Pago"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"display num text-lg text-ink-2 mt-1"], null),casa_financas.utils.formatar_valor_br(tot_pago)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"p-3 rounded-panel",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),"#FFF1E5"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.components.comum.label,"Rabo cart\u00E3o (ano)"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"display num text-lg mt-1",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#7A4F1F"], null)], null),casa_financas.utils.formatar_valor_br(rabo)], null)], null)], null)], null);
});
casa_financas.views.admin.painel_analise = (function casa_financas$views$admin$painel_analise(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"px-9 pb-6"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"display text-[22px] mb-3"], null),"An\u00E1lise"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.admin.card_resumo], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.admin.card_top_categorias], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.admin.card_evolucao_mensal], null)], null);
});
casa_financas.views.admin.grafico_saldo = (function casa_financas$views$admin$grafico_saldo(serie,M,cor){
var W = (260);
var H = (150);
var n = cljs.core.count(serie);
var M__$1 = cljs.core.max.cljs$core$IFn$_invoke$arity$2((1),M);
var xf = (function (i){
if((n <= (1))){
return (W / (2));
} else {
return ((i / (n - (1))) * W);
}
});
var yf = (function (v){
return ((H / (2)) - ((v / M__$1) * (H / (2))));
});
var pts = clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,v){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(xf(i))+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(yf(v)));
}),serie));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),(""+"0 0 "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(W)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(H)),new cljs.core.Keyword(null,"class","class",-2030961996),"w-full",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"150px"], null),new cljs.core.Keyword(null,"preserveAspectRatio","preserveAspectRatio",1832131817),"none"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(0),new cljs.core.Keyword(null,"y1","y1",589123466),(H / (2)),new cljs.core.Keyword(null,"x2","x2",-1362513475),W,new cljs.core.Keyword(null,"y2","y2",-718691301),(H / (2)),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#E5DECF",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(1),new cljs.core.Keyword(null,"stroke-dasharray","stroke-dasharray",-942933855),"4 4"], null)], null),(((n >= (1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polygon","polygon",837053759),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"points","points",-1486596883),(""+"0,"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((H / (2)))+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(pts)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(W)+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1((H / (2)))),new cljs.core.Keyword(null,"fill","fill",883462889),cor,new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),0.12], null)], null):null),(((n >= (2)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polyline","polyline",-1731551044),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"points","points",-1486596883),pts,new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke","stroke",1741823555),cor,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),2.5,new cljs.core.Keyword(null,"vector-effect","vector-effect",-616736349),"non-scaling-stroke"], null)], null):null)], null);
});
casa_financas.views.admin.painel_saldos = (function casa_financas$views$admin$painel_saldos(){
var ativo = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("andre");
return (function (){
var resumo = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"resumo-mensal-pessoas","resumo-mensal-pessoas",-1804393678)], null)));
var todos = (function (){var iter__5628__auto__ = (function casa_financas$views$admin$painel_saldos_$_iter__6805(s__6806){
return (new cljs.core.LazySeq(null,(function (){
var s__6806__$1 = s__6806;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__6806__$1);
if(temp__5823__auto__){
var xs__6383__auto__ = temp__5823__auto__;
var l = cljs.core.first(xs__6383__auto__);
var iterys__5624__auto__ = ((function (s__6806__$1,l,xs__6383__auto__,temp__5823__auto__,resumo,ativo){
return (function casa_financas$views$admin$painel_saldos_$_iter__6805_$_iter__6807(s__6808){
return (new cljs.core.LazySeq(null,((function (s__6806__$1,l,xs__6383__auto__,temp__5823__auto__,resumo,ativo){
return (function (){
var s__6808__$1 = s__6808;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__6808__$1);
if(temp__5823__auto____$1){
var s__6808__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__6808__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__6808__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__6810 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__6809 = (0);
while(true){
if((i__6809 < size__5627__auto__)){
var p = cljs.core._nth(c__5626__auto__,i__6809);
cljs.core.chunk_append(b__6810,(function (){var or__5142__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(l,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pessoas","pessoas",-1747895801),p,new cljs.core.Keyword(null,"acumulado","acumulado",-2083289601)], null));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})());

var G__6873 = (i__6809 + (1));
i__6809 = G__6873;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__6810),casa_financas$views$admin$painel_saldos_$_iter__6805_$_iter__6807(cljs.core.chunk_rest(s__6808__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__6810),null);
}
} else {
var p = cljs.core.first(s__6808__$2);
return cljs.core.cons((function (){var or__5142__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(l,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pessoas","pessoas",-1747895801),p,new cljs.core.Keyword(null,"acumulado","acumulado",-2083289601)], null));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})(),casa_financas$views$admin$painel_saldos_$_iter__6805_$_iter__6807(cljs.core.rest(s__6808__$2)));
}
} else {
return null;
}
break;
}
});})(s__6806__$1,l,xs__6383__auto__,temp__5823__auto__,resumo,ativo))
,null,null));
});})(s__6806__$1,l,xs__6383__auto__,temp__5823__auto__,resumo,ativo))
;
var fs__5625__auto__ = cljs.core.seq(iterys__5624__auto__(casa_financas.views.admin.pessoas_ids));
if(fs__5625__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5625__auto__,casa_financas$views$admin$painel_saldos_$_iter__6805(cljs.core.rest(s__6806__$1)));
} else {
var G__6874 = cljs.core.rest(s__6806__$1);
s__6806__$1 = G__6874;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(resumo);
})();
var M = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,v){
return cljs.core.max.cljs$core$IFn$_invoke$arity$2(m,Math.abs(v));
}),(1),todos);
var pid = cljs.core.deref(ativo);
var serie = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (l){
var or__5142__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(l,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pessoas","pessoas",-1747895801),pid,new cljs.core.Keyword(null,"acumulado","acumulado",-2083289601)], null));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
}),resumo);
var cor = casa_financas.utils.pessoa_cor(pid);
var last_v = ((cljs.core.seq(serie))?cljs.core.last(serie):(0));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"px-9 pb-6"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mb-3"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"display text-[22px]"], null),"Saldos por pessoa"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-[11px] text-ink-3 font-semibold mt-0.5"], null),"Pagou \u00B7 custo \u00B7 saldo do m\u00EAs \u00B7 acumulado (hist\u00F3rico at\u00E9 o m\u00EAs selecionado)"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex gap-2 mb-4 flex-wrap"], null),(function (){var iter__5628__auto__ = (function casa_financas$views$admin$painel_saldos_$_iter__6811(s__6812){
return (new cljs.core.LazySeq(null,(function (){
var s__6812__$1 = s__6812;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__6812__$1);
if(temp__5823__auto__){
var s__6812__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__6812__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__6812__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__6814 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__6813 = (0);
while(true){
if((i__6813 < size__5627__auto__)){
var p = cljs.core._nth(c__5626__auto__,i__6813);
cljs.core.chunk_append(b__6814,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),(""+"px-3.5 py-1.5 rounded-pill text-[13px] font-bold transition-colors "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p,pid))?"text-white":"text-ink-2 bg-panel-2 hover:bg-panel"))),new cljs.core.Keyword(null,"style","style",-496642736),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p,pid))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),casa_financas.utils.pessoa_cor(p)], null):null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__6813,p,c__5626__auto__,size__5627__auto__,b__6814,s__6812__$2,temp__5823__auto__,resumo,todos,M,pid,serie,cor,last_v,ativo){
return (function (){
return cljs.core.reset_BANG_(ativo,p);
});})(i__6813,p,c__5626__auto__,size__5627__auto__,b__6814,s__6812__$2,temp__5823__auto__,resumo,todos,M,pid,serie,cor,last_v,ativo))
], null),casa_financas.utils.pessoa_nome(p)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),p], null)));

var G__6875 = (i__6813 + (1));
i__6813 = G__6875;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__6814),casa_financas$views$admin$painel_saldos_$_iter__6811(cljs.core.chunk_rest(s__6812__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__6814),null);
}
} else {
var p = cljs.core.first(s__6812__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),(""+"px-3.5 py-1.5 rounded-pill text-[13px] font-bold transition-colors "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p,pid))?"text-white":"text-ink-2 bg-panel-2 hover:bg-panel"))),new cljs.core.Keyword(null,"style","style",-496642736),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p,pid))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),casa_financas.utils.pessoa_cor(p)], null):null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (p,s__6812__$2,temp__5823__auto__,resumo,todos,M,pid,serie,cor,last_v,ativo){
return (function (){
return cljs.core.reset_BANG_(ativo,p);
});})(p,s__6812__$2,temp__5823__auto__,resumo,todos,M,pid,serie,cor,last_v,ativo))
], null),casa_financas.utils.pessoa_nome(p)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),p], null)),casa_financas$views$admin$painel_saldos_$_iter__6811(cljs.core.rest(s__6812__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(casa_financas.views.admin.pessoas_ids);
})()], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex gap-4 flex-wrap items-stretch"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"bg-panel rounded-panel border border-rule p-5 shadow-soft overflow-x-auto",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1 1 60%",new cljs.core.Keyword(null,"min-width","min-width",1926193728),"300px"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-full"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"border-b border-rule"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"px-2 py-1.5 text-left text-[10.5px] font-bold text-ink-2 uppercase tracking-[0.4px]"], null),"M\u00EAs"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"px-2 py-1.5 text-right text-[10.5px] font-bold text-ink-2 uppercase tracking-[0.4px]"], null),"Pagou"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"px-2 py-1.5 text-right text-[10.5px] font-bold text-ink-2 uppercase tracking-[0.4px]"], null),"Custo"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"px-2 py-1.5 text-right text-[10.5px] font-bold text-ink-2 uppercase tracking-[0.4px]"], null),"Saldo m\u00EAs"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"px-2 py-1.5 text-right text-[10.5px] font-bold text-ink-2 uppercase tracking-[0.4px]"], null),"Acumulado"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__5628__auto__ = (function casa_financas$views$admin$painel_saldos_$_iter__6815(s__6816){
return (new cljs.core.LazySeq(null,(function (){
var s__6816__$1 = s__6816;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__6816__$1);
if(temp__5823__auto__){
var s__6816__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__6816__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__6816__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__6818 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__6817 = (0);
while(true){
if((i__6817 < size__5627__auto__)){
var map__6819 = cljs.core._nth(c__5626__auto__,i__6817);
var map__6819__$1 = cljs.core.__destructure_map(map__6819);
var ano = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6819__$1,new cljs.core.Keyword(null,"ano","ano",109602792));
var mes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6819__$1,new cljs.core.Keyword(null,"mes","mes",-890288111));
var pessoas = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6819__$1,new cljs.core.Keyword(null,"pessoas","pessoas",-1747895801));
cljs.core.chunk_append(b__6818,(function (){var d = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pessoas,pid);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"border-t border-rule-soft"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"px-2 py-1.5 text-[12px] font-semibold text-ink"], null),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(casa_financas.utils.mes_nome(mes))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((ano - (2000))))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"px-2 py-1.5 text-right num text-[12px] text-ok font-semibold"], null),casa_financas.utils.formatar_valor_br(new cljs.core.Keyword(null,"aporte","aporte",-623613565).cljs$core$IFn$_invoke$arity$1(d))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"px-2 py-1.5 text-right num text-[12px] text-ink-2"], null),casa_financas.utils.formatar_valor_br(new cljs.core.Keyword(null,"cota","cota",355260977).cljs$core$IFn$_invoke$arity$1(d))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(""+"px-2 py-1.5 text-right num text-[12px] font-semibold "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((new cljs.core.Keyword(null,"saldo","saldo",-306276818).cljs$core$IFn$_invoke$arity$1(d) >= (0)))?"text-ok":"text-bad")))], null),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((new cljs.core.Keyword(null,"saldo","saldo",-306276818).cljs$core$IFn$_invoke$arity$1(d) >= (0)))?"+":null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(casa_financas.utils.formatar_valor_br(new cljs.core.Keyword(null,"saldo","saldo",-306276818).cljs$core$IFn$_invoke$arity$1(d))))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(""+"px-2 py-1.5 text-right num text-[12px] font-bold "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((new cljs.core.Keyword(null,"acumulado","acumulado",-2083289601).cljs$core$IFn$_invoke$arity$1(d) >= (0)))?"text-ok":"text-bad")))], null),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((new cljs.core.Keyword(null,"acumulado","acumulado",-2083289601).cljs$core$IFn$_invoke$arity$1(d) >= (0)))?"+":null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(casa_financas.utils.formatar_valor_br(new cljs.core.Keyword(null,"acumulado","acumulado",-2083289601).cljs$core$IFn$_invoke$arity$1(d))))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ano)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(mes))], null));
})());

var G__6876 = (i__6817 + (1));
i__6817 = G__6876;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__6818),casa_financas$views$admin$painel_saldos_$_iter__6815(cljs.core.chunk_rest(s__6816__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__6818),null);
}
} else {
var map__6820 = cljs.core.first(s__6816__$2);
var map__6820__$1 = cljs.core.__destructure_map(map__6820);
var ano = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6820__$1,new cljs.core.Keyword(null,"ano","ano",109602792));
var mes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6820__$1,new cljs.core.Keyword(null,"mes","mes",-890288111));
var pessoas = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6820__$1,new cljs.core.Keyword(null,"pessoas","pessoas",-1747895801));
return cljs.core.cons((function (){var d = cljs.core.get.cljs$core$IFn$_invoke$arity$2(pessoas,pid);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"border-t border-rule-soft"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"px-2 py-1.5 text-[12px] font-semibold text-ink"], null),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(casa_financas.utils.mes_nome(mes))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((ano - (2000))))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"px-2 py-1.5 text-right num text-[12px] text-ok font-semibold"], null),casa_financas.utils.formatar_valor_br(new cljs.core.Keyword(null,"aporte","aporte",-623613565).cljs$core$IFn$_invoke$arity$1(d))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"px-2 py-1.5 text-right num text-[12px] text-ink-2"], null),casa_financas.utils.formatar_valor_br(new cljs.core.Keyword(null,"cota","cota",355260977).cljs$core$IFn$_invoke$arity$1(d))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(""+"px-2 py-1.5 text-right num text-[12px] font-semibold "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((new cljs.core.Keyword(null,"saldo","saldo",-306276818).cljs$core$IFn$_invoke$arity$1(d) >= (0)))?"text-ok":"text-bad")))], null),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((new cljs.core.Keyword(null,"saldo","saldo",-306276818).cljs$core$IFn$_invoke$arity$1(d) >= (0)))?"+":null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(casa_financas.utils.formatar_valor_br(new cljs.core.Keyword(null,"saldo","saldo",-306276818).cljs$core$IFn$_invoke$arity$1(d))))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(""+"px-2 py-1.5 text-right num text-[12px] font-bold "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((new cljs.core.Keyword(null,"acumulado","acumulado",-2083289601).cljs$core$IFn$_invoke$arity$1(d) >= (0)))?"text-ok":"text-bad")))], null),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((new cljs.core.Keyword(null,"acumulado","acumulado",-2083289601).cljs$core$IFn$_invoke$arity$1(d) >= (0)))?"+":null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(casa_financas.utils.formatar_valor_br(new cljs.core.Keyword(null,"acumulado","acumulado",-2083289601).cljs$core$IFn$_invoke$arity$1(d))))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ano)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(mes))], null));
})(),casa_financas$views$admin$painel_saldos_$_iter__6815(cljs.core.rest(s__6816__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(resumo);
})()], null)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"bg-panel rounded-panel border border-rule p-5 shadow-soft flex flex-col justify-center",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1 1 32%",new cljs.core.Keyword(null,"min-width","min-width",1926193728),"200px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-[10.5px] text-ink-3 font-bold uppercase tracking-[0.4px] mb-2"], null),"Saldo acumulado"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.admin.grafico_saldo,serie,M,cor], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(""+"display num text-3xl mt-3 leading-none "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((last_v >= (0)))?"text-ok":"text-bad")))], null),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((last_v >= (0)))?"+":null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(casa_financas.utils.formatar_valor_br(last_v)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-[11px] text-ink-3 font-semibold mt-1"], null),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((last_v >= (0)))?"credor":"devedor"))+" \u00B7 acumulado at\u00E9 o m\u00EAs")], null)], null)], null)], null);
});
});
casa_financas.views.admin.admin = (function casa_financas$views$admin$admin(){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"min-h-screen bg-cream font-sans text-ink"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.admin.header], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.admin.hero], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.admin.painel_posicao], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.admin.painel_saldos], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.admin.tabela_despesas], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.admin.tabela_entradas], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.admin.painel_analise], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.modais.modais], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-12"], null)], null)], null);
});

//# sourceMappingURL=casa_financas.views.admin.js.map
