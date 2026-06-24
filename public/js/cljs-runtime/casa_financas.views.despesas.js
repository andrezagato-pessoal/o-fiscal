goog.provide('casa_financas.views.despesas');
casa_financas.views.despesas.item_despesa_credito = (function casa_financas$views$despesas$item_despesa_credito(despesa,fatura){
var total_pago = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"valor_pago","valor_pago",586246073).cljs$core$IFn$_invoke$arity$1(fatura);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})();
var total = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"valor_total","valor_total",1765765977).cljs$core$IFn$_invoke$arity$1(fatura);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})();
var status = (((((total > (0))) && ((total_pago >= total))))?new cljs.core.Keyword(null,"pago","pago",27952415):(((total_pago > (0)))?new cljs.core.Keyword(null,"parcial","parcial",488083582):new cljs.core.Keyword(null,"pendente","pendente",311658061)
));
var categorias = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"categorias","categorias",-181626523)], null)));
var cat = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__25857_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__25857_SHARP_),new cljs.core.Keyword(null,"categoria_id","categoria_id",-705480723).cljs$core$IFn$_invoke$arity$1(despesa));
}),categorias));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center gap-2.5 px-3 py-2 border-b border-rule-soft last:border-0 hover:bg-panel-2 cursor-pointer",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"abrir-modal","abrir-modal",514595978),new cljs.core.Keyword(null,"editar-despesa","editar-despesa",-7409021),despesa], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"num text-[10px] text-ink-3 font-bold w-12 flex-shrink-0"], null),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5142__auto__ = new cljs.core.Keyword(null,"mes_compra","mes_compra",431314692).cljs$core$IFn$_invoke$arity$1(despesa);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"mes","mes",-890288111).cljs$core$IFn$_invoke$arity$1(despesa);
}
})())+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dia_do_mes","dia_do_mes",-485165205).cljs$core$IFn$_invoke$arity$1(despesa)))], null),(cljs.core.truth_(cat)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xs"], null),new cljs.core.Keyword(null,"emoji","emoji",1031230144).cljs$core$IFn$_invoke$arity$1(cat)], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(""+"flex-1 min-w-0 text-[13px] truncate "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(status,new cljs.core.Keyword(null,"pago","pago",27952415)))?"line-through text-ink-3":"text-ink-2")))], null),new cljs.core.Keyword(null,"descricao","descricao",861900814).cljs$core$IFn$_invoke$arity$1(despesa)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"num text-xs font-bold text-ink"], null),casa_financas.utils.formatar_valor_br(new cljs.core.Keyword(null,"valor","valor",-957162173).cljs$core$IFn$_invoke$arity$1(despesa))], null)], null);
});
casa_financas.views.despesas.card_fatura = (function casa_financas$views$despesas$card_fatura(fatura,total_credito,despesas_credito){
var valor_pago = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"valor_pago","valor_pago",586246073).cljs$core$IFn$_invoke$arity$1(fatura);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})();
var status = (((((total_credito > (0))) && ((valor_pago >= total_credito))))?new cljs.core.Keyword(null,"pago","pago",27952415):(((valor_pago > (0)))?new cljs.core.Keyword(null,"parcial","parcial",488083582):new cljs.core.Keyword(null,"pendente","pendente",311658061)
));
var expandido_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"rounded-panel border overflow-hidden mb-2.5",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),"#FFF7EE",new cljs.core.Keyword(null,"border-color","border-color",-2059162761),"#F5DDC2"], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center gap-2.5 px-3 py-3"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold flex-shrink-0",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),"#FFE6CB",new cljs.core.Keyword(null,"color","color",1011675173),"#E97A3F"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(expandido_QMARK_,cljs.core.not);
})], null),(cljs.core.truth_(cljs.core.deref(expandido_QMARK_))?"\u25B4":"\u25BE")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-9 h-9 rounded-xl flex items-center justify-center text-base flex-shrink-0",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),"#FFE6CB",new cljs.core.Keyword(null,"color","color",1011675173),"#E97A3F"], null)], null),"\uD83D\uDCB3"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex-1 min-w-0 cursor-pointer",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"abrir-modal","abrir-modal",514595978),new cljs.core.Keyword(null,"pagamento-fatura","pagamento-fatura",-1469032114),fatura], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-[13px] font-bold",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#3F2A0E"], null)], null),"Fatura cart\u00E3o"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-[10.5px] font-semibold mt-0.5",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#9A6B3A"], null)], null),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(despesas_credito))+" compras \u00B7 "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__25859 = status;
var G__25859__$1 = (((G__25859 instanceof cljs.core.Keyword))?G__25859.fqn:null);
switch (G__25859__$1) {
case "pago":
return "paga";

break;
case "parcial":
return "parcial";

break;
default:
return "pendente";

}
})()))], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-right cursor-pointer",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"abrir-modal","abrir-modal",514595978),new cljs.core.Keyword(null,"pagamento-fatura","pagamento-fatura",-1469032114),fatura], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"display num text-[15px]",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#7A4F1F"], null)], null),casa_financas.utils.formatar_valor_br(total_credito)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"num text-[10px] text-ink-3 font-semibold"], null),(""+"pago "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(casa_financas.utils.formatar_valor_br(valor_pago)))], null)], null)], null),(cljs.core.truth_(cljs.core.deref(expandido_QMARK_))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"border-t border-[#F5DDC2]"], null),(function (){var iter__5628__auto__ = (function casa_financas$views$despesas$card_fatura_$_iter__25860(s__25861){
return (new cljs.core.LazySeq(null,(function (){
var s__25861__$1 = s__25861;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__25861__$1);
if(temp__5823__auto__){
var s__25861__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__25861__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__25861__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__25863 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__25862 = (0);
while(true){
if((i__25862 < size__5627__auto__)){
var d = cljs.core._nth(c__5626__auto__,i__25862);
cljs.core.chunk_append(b__25863,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.despesas.item_despesa_credito,d,fatura], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(d)], null)));

var G__25893 = (i__25862 + (1));
i__25862 = G__25893;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25863),casa_financas$views$despesas$card_fatura_$_iter__25860(cljs.core.chunk_rest(s__25861__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25863),null);
}
} else {
var d = cljs.core.first(s__25861__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.despesas.item_despesa_credito,d,fatura], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(d)], null)),casa_financas$views$despesas$card_fatura_$_iter__25860(cljs.core.rest(s__25861__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (d){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"ano_compra","ano_compra",2049635973).cljs$core$IFn$_invoke$arity$1(d);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"ano","ano",109602792).cljs$core$IFn$_invoke$arity$1(d);
}
})(),(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"mes_compra","mes_compra",431314692).cljs$core$IFn$_invoke$arity$1(d);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"mes","mes",-890288111).cljs$core$IFn$_invoke$arity$1(d);
}
})(),new cljs.core.Keyword(null,"dia_do_mes","dia_do_mes",-485165205).cljs$core$IFn$_invoke$arity$1(d)], null);
}),despesas_credito));
})()], null):null)], null);
});
});
casa_financas.views.despesas.item_despesa = (function casa_financas$views$despesas$item_despesa(despesa){
var estado = casa_financas.utils.despesa_status(despesa);
var st_design = (function (){var G__25865 = estado;
var G__25865__$1 = (((G__25865 instanceof cljs.core.Keyword))?G__25865.fqn:null);
switch (G__25865__$1) {
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
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25865__$1))));

}
})();
var cor_status = (function (){var G__25866 = st_design;
var G__25866__$1 = (((G__25866 instanceof cljs.core.Keyword))?G__25866.fqn:null);
switch (G__25866__$1) {
case "pago":
return "#2E8254";

break;
case "vencida":
return "#C04545";

break;
case "a-vencer":
return "#D08A2A";

break;
default:
return "#A99A82";

}
})();
var categorias = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"categorias","categorias",-181626523)], null)));
var cat = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__25864_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__25864_SHARP_),new cljs.core.Keyword(null,"categoria_id","categoria_id",-705480723).cljs$core$IFn$_invoke$arity$1(despesa));
}),categorias));
var cor_border = (function (){var G__25867 = st_design;
var G__25867__$1 = (((G__25867 instanceof cljs.core.Keyword))?G__25867.fqn:null);
switch (G__25867__$1) {
case "pago":
return "border-l-ok";

break;
case "vencida":
return "border-l-bad";

break;
case "a-vencer":
return "border-l-warn";

break;
default:
return "border-l-ink-3";

}
})();
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(""+"bg-panel rounded-panel border border-rule border-l-[3px] "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cor_border)+" "+"p-3 mb-1.5 flex items-center gap-2.5 shadow-soft "+"cursor-pointer active:bg-panel-2 transition-colors"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"abrir-modal","abrir-modal",514595978),new cljs.core.Keyword(null,"editar-despesa","editar-despesa",-7409021),despesa], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-9 h-9 rounded-xl bg-panel-2 flex items-center justify-center text-base flex-shrink-0"], null),(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"emoji","emoji",1031230144).cljs$core$IFn$_invoke$arity$1(cat);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "\uD83D\uDCB8";
}
})()], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex-1 min-w-0"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(""+"text-[13.5px] font-bold leading-tight truncate "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(st_design,new cljs.core.Keyword(null,"pago","pago",27952415)))?"text-ink-3 line-through":"text-ink")))], null),new cljs.core.Keyword(null,"descricao","descricao",861900814).cljs$core$IFn$_invoke$arity$1(despesa)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center gap-1.5 mt-0.5"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"num text-[10.5px] text-ink-3 font-semibold"], null),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((new cljs.core.Keyword(null,"dia_do_mes","dia_do_mes",-485165205).cljs$core$IFn$_invoke$arity$1(despesa) < (10)))?"0":null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dia_do_mes","dia_do_mes",-485165205).cljs$core$IFn$_invoke$arity$1(despesa))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((new cljs.core.Keyword(null,"mes","mes",-890288111).cljs$core$IFn$_invoke$arity$1(despesa) < (10)))?"0":null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mes","mes",-890288111).cljs$core$IFn$_invoke$arity$1(despesa))+" \u00B7 "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"forma_pagamento","forma_pagamento",205169437).cljs$core$IFn$_invoke$arity$1(despesa),"credito"))?"cart\u00E3o":"pix")))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-[10.5px] font-bold",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),cor_status], null)], null),(""+"\u00B7 "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__25869 = st_design;
var G__25869__$1 = (((G__25869 instanceof cljs.core.Keyword))?G__25869.fqn:null);
switch (G__25869__$1) {
case "pago":
return "pago";

break;
case "vencida":
return "vencida";

break;
case "a-vencer":
return "a vencer";

break;
default:
return "pendente";

}
})()))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex gap-1 mt-1.5"], null),(function (){var iter__5628__auto__ = (function casa_financas$views$despesas$item_despesa_$_iter__25870(s__25871){
return (new cljs.core.LazySeq(null,(function (){
var s__25871__$1 = s__25871;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__25871__$1);
if(temp__5823__auto__){
var s__25871__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__25871__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__25871__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__25873 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__25872 = (0);
while(true){
if((i__25872 < size__5627__auto__)){
var pid = cljs.core._nth(c__5626__auto__,i__25872);
cljs.core.chunk_append(b__25873,(function (){var cor = casa_financas.utils.pessoa_cor(pid);
var ini = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pid,"conjunta"))?"C":casa_financas.utils.pessoa_inicial(pid));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-4 h-4 rounded-full flex items-center justify-center text-[8px] font-bold text-white",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),cor], null)], null),ini], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),pid], null));
})());

var G__25899 = (i__25872 + (1));
i__25872 = G__25899;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25873),casa_financas$views$despesas$item_despesa_$_iter__25870(cljs.core.chunk_rest(s__25871__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25873),null);
}
} else {
var pid = cljs.core.first(s__25871__$2);
return cljs.core.cons((function (){var cor = casa_financas.utils.pessoa_cor(pid);
var ini = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pid,"conjunta"))?"C":casa_financas.utils.pessoa_inicial(pid));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-4 h-4 rounded-full flex items-center justify-center text-[8px] font-bold text-white",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),cor], null)], null),ini], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),pid], null));
})(),casa_financas$views$despesas$item_despesa_$_iter__25870(cljs.core.rest(s__25871__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(cljs.core.take.cljs$core$IFn$_invoke$arity$2((4),new cljs.core.Keyword(null,"pagadores","pagadores",-269867482).cljs$core$IFn$_invoke$arity$1(despesa)));
})()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(""+"display num text-sm flex-shrink-0 "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(st_design,new cljs.core.Keyword(null,"pago","pago",27952415)))?"text-ink-2":"text-ink")))], null),casa_financas.utils.formatar_valor_br(new cljs.core.Keyword(null,"valor","valor",-957162173).cljs$core$IFn$_invoke$arity$1(despesa))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(""+"w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors flex-shrink-0 "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(new cljs.core.Keyword(null,"pago","pago",27952415).cljs$core$IFn$_invoke$arity$1(despesa))?"bg-ok border-ok text-white":"border-rule text-transparent"))),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
e.stopPropagation();

if(cljs.core.truth_(new cljs.core.Keyword(null,"pago","pago",27952415).cljs$core$IFn$_invoke$arity$1(despesa))){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"desmarcar-pago","desmarcar-pago",-5576968),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(despesa)], null));
} else {
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"marcar-pago","marcar-pago",446617930),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(despesa)], null));
}
})], null),"\u2713"], null)], null);
});
casa_financas.views.despesas.despesas = (function casa_financas$views$despesas$despesas(){
var filtro = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"todas","todas",-2073992414));
return (function (){
var despesas_mes = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"despesas-do-mes","despesas-do-mes",2018938320)], null)));
var fatura = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fatura","fatura",18781370)], null)));
var total_credito = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"total-credito-mes","total-credito-mes",-1293171558)], null)));
var templates = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"templates","templates",-1237401733)], null)));
var despesas_credito = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (d){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"ano_compra","ano_compra",2049635973).cljs$core$IFn$_invoke$arity$1(d);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"ano","ano",109602792).cljs$core$IFn$_invoke$arity$1(d);
}
})(),(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"mes_compra","mes_compra",431314692).cljs$core$IFn$_invoke$arity$1(d);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"mes","mes",-890288111).cljs$core$IFn$_invoke$arity$1(d);
}
})(),new cljs.core.Keyword(null,"dia_do_mes","dia_do_mes",-485165205).cljs$core$IFn$_invoke$arity$1(d)], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__25874_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"forma_pagamento","forma_pagamento",205169437).cljs$core$IFn$_invoke$arity$1(p1__25874_SHARP_),"credito");
}),despesas_mes));
var despesas_debito = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__25875_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"forma_pagamento","forma_pagamento",205169437).cljs$core$IFn$_invoke$arity$1(p1__25875_SHARP_),"credito");
}),despesas_mes);
var despesas_filtradas = (function (){var G__25877 = cljs.core.deref(filtro);
var G__25877__$1 = (((G__25877 instanceof cljs.core.Keyword))?G__25877.fqn:null);
switch (G__25877__$1) {
case "todas":
return despesas_debito;

break;
case "pendentes":
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__25876_SHARP_){
return cljs.core.not(new cljs.core.Keyword(null,"pago","pago",27952415).cljs$core$IFn$_invoke$arity$1(p1__25876_SHARP_));
}),despesas_debito);

break;
case "pagas":
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pago","pago",27952415),despesas_debito);

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25877__$1))));

}
})();
var despesas_ordenadas = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dia_do_mes","dia_do_mes",-485165205),despesas_filtradas);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex flex-col pb-28"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.components.comum.seletor_mes], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"px-4 mb-2.5"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center bg-panel rounded-pill border border-rule p-0.5"], null),(function (){var iter__5628__auto__ = (function casa_financas$views$despesas$despesas_$_iter__25878(s__25879){
return (new cljs.core.LazySeq(null,(function (){
var s__25879__$1 = s__25879;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__25879__$1);
if(temp__5823__auto__){
var s__25879__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__25879__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__25879__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__25881 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__25880 = (0);
while(true){
if((i__25880 < size__5627__auto__)){
var vec__25882 = cljs.core._nth(c__5626__auto__,i__25880);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25882,(0),null);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25882,(1),null);
cljs.core.chunk_append(b__25881,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(""+"flex-1 py-1.5 rounded-pill text-xs font-bold transition-colors "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(filtro),k))?"bg-ink text-cream":"text-ink-2 hover:text-ink"))),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__25880,vec__25882,k,label,c__5626__auto__,size__5627__auto__,b__25881,s__25879__$2,temp__5823__auto__,despesas_mes,fatura,total_credito,templates,despesas_credito,despesas_debito,despesas_filtradas,despesas_ordenadas,filtro){
return (function (){
return cljs.core.reset_BANG_(filtro,k);
});})(i__25880,vec__25882,k,label,c__5626__auto__,size__5627__auto__,b__25881,s__25879__$2,temp__5823__auto__,despesas_mes,fatura,total_credito,templates,despesas_credito,despesas_debito,despesas_filtradas,despesas_ordenadas,filtro))
], null),label], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)));

var G__25905 = (i__25880 + (1));
i__25880 = G__25905;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25881),casa_financas$views$despesas$despesas_$_iter__25878(cljs.core.chunk_rest(s__25879__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25881),null);
}
} else {
var vec__25885 = cljs.core.first(s__25879__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25885,(0),null);
var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25885,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(""+"flex-1 py-1.5 rounded-pill text-xs font-bold transition-colors "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(filtro),k))?"bg-ink text-cream":"text-ink-2 hover:text-ink"))),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__25885,k,label,s__25879__$2,temp__5823__auto__,despesas_mes,fatura,total_credito,templates,despesas_credito,despesas_debito,despesas_filtradas,despesas_ordenadas,filtro){
return (function (){
return cljs.core.reset_BANG_(filtro,k);
});})(vec__25885,k,label,s__25879__$2,temp__5823__auto__,despesas_mes,fatura,total_credito,templates,despesas_credito,despesas_debito,despesas_filtradas,despesas_ordenadas,filtro))
], null),label], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)),casa_financas$views$despesas$despesas_$_iter__25878(cljs.core.rest(s__25879__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"todas","todas",-2073992414),"Todas"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pendentes","pendentes",-832225647),"Pendentes"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pagas","pagas",1483387154),"Pagas"], null)], null));
})()], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"px-4"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.despesas.card_fatura,fatura,total_credito,despesas_credito], null),((cljs.core.empty_QMARK_(despesas_ordenadas))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex flex-col items-center justify-center py-12 text-ink-3"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-4xl mb-3 opacity-50"], null),"\uD83D\uDCB8"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-sm font-semibold"], null),"Nenhuma despesa"], null),((cljs.core.seq(templates))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"mt-4 px-5 py-2.5 bg-ink text-cream rounded-pill text-sm font-bold",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"importar-templates","importar-templates",1481404056)], null));
})], null),"Importar Templates"], null):null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__5628__auto__ = (function casa_financas$views$despesas$despesas_$_iter__25888(s__25889){
return (new cljs.core.LazySeq(null,(function (){
var s__25889__$1 = s__25889;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__25889__$1);
if(temp__5823__auto__){
var s__25889__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__25889__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__25889__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__25891 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__25890 = (0);
while(true){
if((i__25890 < size__5627__auto__)){
var d = cljs.core._nth(c__5626__auto__,i__25890);
cljs.core.chunk_append(b__25891,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.despesas.item_despesa,d], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(d)], null)));

var G__25919 = (i__25890 + (1));
i__25890 = G__25919;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25891),casa_financas$views$despesas$despesas_$_iter__25888(cljs.core.chunk_rest(s__25889__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25891),null);
}
} else {
var d = cljs.core.first(s__25889__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [casa_financas.views.despesas.item_despesa,d], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(d)], null)),casa_financas$views$despesas$despesas_$_iter__25888(cljs.core.rest(s__25889__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(despesas_ordenadas);
})(),((cljs.core.seq(templates))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-full mt-3 py-2.5 rounded-pill text-sm font-bold text-ink bg-panel border border-rule hover:bg-panel-2",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"importar-templates","importar-templates",1481404056)], null));
})], null),"Importar Templates do M\u00EAs"], null):null)], null))], null)], null);
});
});

//# sourceMappingURL=casa_financas.views.despesas.js.map
