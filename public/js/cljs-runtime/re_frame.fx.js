goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__21750 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__21751 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__21751);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5823__auto___22062 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5823__auto___22062)){
var new_db_22063 = temp__5823__auto___22062;
var fexpr__21762_22064 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__21762_22064.cljs$core$IFn$_invoke$arity$1 ? fexpr__21762_22064.cljs$core$IFn$_invoke$arity$1(new_db_22063) : fexpr__21762_22064.call(null,new_db_22063));
} else {
}

var seq__21764 = cljs.core.seq(effects_without_db);
var chunk__21766 = null;
var count__21767 = (0);
var i__21768 = (0);
while(true){
if((i__21768 < count__21767)){
var vec__21808 = chunk__21766.cljs$core$IIndexed$_nth$arity$2(null,i__21768);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21808,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21808,(1),null);
var temp__5821__auto___22065 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5821__auto___22065)){
var effect_fn_22066 = temp__5821__auto___22065;
(effect_fn_22066.cljs$core$IFn$_invoke$arity$1 ? effect_fn_22066.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_22066.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__22067 = seq__21764;
var G__22068 = chunk__21766;
var G__22069 = count__21767;
var G__22070 = (i__21768 + (1));
seq__21764 = G__22067;
chunk__21766 = G__22068;
count__21767 = G__22069;
i__21768 = G__22070;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__21764);
if(temp__5823__auto__){
var seq__21764__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21764__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__21764__$1);
var G__22071 = cljs.core.chunk_rest(seq__21764__$1);
var G__22072 = c__5673__auto__;
var G__22073 = cljs.core.count(c__5673__auto__);
var G__22074 = (0);
seq__21764 = G__22071;
chunk__21766 = G__22072;
count__21767 = G__22073;
i__21768 = G__22074;
continue;
} else {
var vec__21821 = cljs.core.first(seq__21764__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21821,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21821,(1),null);
var temp__5821__auto___22075 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5821__auto___22075)){
var effect_fn_22076 = temp__5821__auto___22075;
(effect_fn_22076.cljs$core$IFn$_invoke$arity$1 ? effect_fn_22076.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_22076.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__22077 = cljs.core.next(seq__21764__$1);
var G__22078 = null;
var G__22079 = (0);
var G__22080 = (0);
seq__21764 = G__22077;
chunk__21766 = G__22078;
count__21767 = G__22079;
i__21768 = G__22080;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__20799__auto___22081 = re_frame.interop.now();
var duration__20800__auto___22082 = (end__20799__auto___22081 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__20800__auto___22082,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__20799__auto___22081);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__21750);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5823__auto___22083 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5823__auto___22083)){
var new_db_22084 = temp__5823__auto___22083;
var fexpr__21827_22085 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__21827_22085.cljs$core$IFn$_invoke$arity$1 ? fexpr__21827_22085.cljs$core$IFn$_invoke$arity$1(new_db_22084) : fexpr__21827_22085.call(null,new_db_22084));
} else {
}

var seq__21833 = cljs.core.seq(effects_without_db);
var chunk__21834 = null;
var count__21835 = (0);
var i__21836 = (0);
while(true){
if((i__21836 < count__21835)){
var vec__21865 = chunk__21834.cljs$core$IIndexed$_nth$arity$2(null,i__21836);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21865,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21865,(1),null);
var temp__5821__auto___22086 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5821__auto___22086)){
var effect_fn_22088 = temp__5821__auto___22086;
(effect_fn_22088.cljs$core$IFn$_invoke$arity$1 ? effect_fn_22088.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_22088.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__22089 = seq__21833;
var G__22090 = chunk__21834;
var G__22091 = count__21835;
var G__22092 = (i__21836 + (1));
seq__21833 = G__22089;
chunk__21834 = G__22090;
count__21835 = G__22091;
i__21836 = G__22092;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__21833);
if(temp__5823__auto__){
var seq__21833__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21833__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__21833__$1);
var G__22093 = cljs.core.chunk_rest(seq__21833__$1);
var G__22094 = c__5673__auto__;
var G__22095 = cljs.core.count(c__5673__auto__);
var G__22096 = (0);
seq__21833 = G__22093;
chunk__21834 = G__22094;
count__21835 = G__22095;
i__21836 = G__22096;
continue;
} else {
var vec__21878 = cljs.core.first(seq__21833__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21878,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21878,(1),null);
var temp__5821__auto___22098 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5821__auto___22098)){
var effect_fn_22099 = temp__5821__auto___22098;
(effect_fn_22099.cljs$core$IFn$_invoke$arity$1 ? effect_fn_22099.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_22099.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__22100 = cljs.core.next(seq__21833__$1);
var G__22101 = null;
var G__22102 = (0);
var G__22103 = (0);
seq__21833 = G__22100;
chunk__21834 = G__22101;
count__21835 = G__22102;
i__21836 = G__22103;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__21896){
var map__21897 = p__21896;
var map__21897__$1 = cljs.core.__destructure_map(map__21897);
var effect = map__21897__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21897__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21897__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__21913 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__21914 = null;
var count__21915 = (0);
var i__21916 = (0);
while(true){
if((i__21916 < count__21915)){
var effect = chunk__21914.cljs$core$IIndexed$_nth$arity$2(null,i__21916);
re_frame.fx.dispatch_later(effect);


var G__22106 = seq__21913;
var G__22107 = chunk__21914;
var G__22108 = count__21915;
var G__22109 = (i__21916 + (1));
seq__21913 = G__22106;
chunk__21914 = G__22107;
count__21915 = G__22108;
i__21916 = G__22109;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__21913);
if(temp__5823__auto__){
var seq__21913__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21913__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__21913__$1);
var G__22110 = cljs.core.chunk_rest(seq__21913__$1);
var G__22111 = c__5673__auto__;
var G__22112 = cljs.core.count(c__5673__auto__);
var G__22113 = (0);
seq__21913 = G__22110;
chunk__21914 = G__22111;
count__21915 = G__22112;
i__21916 = G__22113;
continue;
} else {
var effect = cljs.core.first(seq__21913__$1);
re_frame.fx.dispatch_later(effect);


var G__22114 = cljs.core.next(seq__21913__$1);
var G__22115 = null;
var G__22116 = (0);
var G__22117 = (0);
seq__21913 = G__22114;
chunk__21914 = G__22115;
count__21915 = G__22116;
i__21916 = G__22117;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__21957 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__21958 = null;
var count__21959 = (0);
var i__21960 = (0);
while(true){
if((i__21960 < count__21959)){
var vec__21978 = chunk__21958.cljs$core$IIndexed$_nth$arity$2(null,i__21960);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21978,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21978,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5821__auto___22119 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5821__auto___22119)){
var effect_fn_22121 = temp__5821__auto___22119;
(effect_fn_22121.cljs$core$IFn$_invoke$arity$1 ? effect_fn_22121.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_22121.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__22123 = seq__21957;
var G__22124 = chunk__21958;
var G__22125 = count__21959;
var G__22126 = (i__21960 + (1));
seq__21957 = G__22123;
chunk__21958 = G__22124;
count__21959 = G__22125;
i__21960 = G__22126;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__21957);
if(temp__5823__auto__){
var seq__21957__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21957__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__21957__$1);
var G__22129 = cljs.core.chunk_rest(seq__21957__$1);
var G__22130 = c__5673__auto__;
var G__22131 = cljs.core.count(c__5673__auto__);
var G__22132 = (0);
seq__21957 = G__22129;
chunk__21958 = G__22130;
count__21959 = G__22131;
i__21960 = G__22132;
continue;
} else {
var vec__21988 = cljs.core.first(seq__21957__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21988,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21988,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5821__auto___22133 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5821__auto___22133)){
var effect_fn_22135 = temp__5821__auto___22133;
(effect_fn_22135.cljs$core$IFn$_invoke$arity$1 ? effect_fn_22135.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_22135.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__22136 = cljs.core.next(seq__21957__$1);
var G__22137 = null;
var G__22138 = (0);
var G__22139 = (0);
seq__21957 = G__22136;
chunk__21958 = G__22137;
count__21959 = G__22138;
i__21960 = G__22139;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__21998 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__21999 = null;
var count__22000 = (0);
var i__22001 = (0);
while(true){
if((i__22001 < count__22000)){
var event = chunk__21999.cljs$core$IIndexed$_nth$arity$2(null,i__22001);
re_frame.router.dispatch(event);


var G__22140 = seq__21998;
var G__22141 = chunk__21999;
var G__22142 = count__22000;
var G__22143 = (i__22001 + (1));
seq__21998 = G__22140;
chunk__21999 = G__22141;
count__22000 = G__22142;
i__22001 = G__22143;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__21998);
if(temp__5823__auto__){
var seq__21998__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21998__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__21998__$1);
var G__22144 = cljs.core.chunk_rest(seq__21998__$1);
var G__22145 = c__5673__auto__;
var G__22146 = cljs.core.count(c__5673__auto__);
var G__22147 = (0);
seq__21998 = G__22144;
chunk__21999 = G__22145;
count__22000 = G__22146;
i__22001 = G__22147;
continue;
} else {
var event = cljs.core.first(seq__21998__$1);
re_frame.router.dispatch(event);


var G__22148 = cljs.core.next(seq__21998__$1);
var G__22149 = null;
var G__22150 = (0);
var G__22151 = (0);
seq__21998 = G__22148;
chunk__21999 = G__22149;
count__22000 = G__22150;
i__22001 = G__22151;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__22031 = cljs.core.seq(value);
var chunk__22032 = null;
var count__22033 = (0);
var i__22034 = (0);
while(true){
if((i__22034 < count__22033)){
var event = chunk__22032.cljs$core$IIndexed$_nth$arity$2(null,i__22034);
clear_event(event);


var G__22152 = seq__22031;
var G__22153 = chunk__22032;
var G__22154 = count__22033;
var G__22155 = (i__22034 + (1));
seq__22031 = G__22152;
chunk__22032 = G__22153;
count__22033 = G__22154;
i__22034 = G__22155;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__22031);
if(temp__5823__auto__){
var seq__22031__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22031__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__22031__$1);
var G__22156 = cljs.core.chunk_rest(seq__22031__$1);
var G__22157 = c__5673__auto__;
var G__22158 = cljs.core.count(c__5673__auto__);
var G__22159 = (0);
seq__22031 = G__22156;
chunk__22032 = G__22157;
count__22033 = G__22158;
i__22034 = G__22159;
continue;
} else {
var event = cljs.core.first(seq__22031__$1);
clear_event(event);


var G__22160 = cljs.core.next(seq__22031__$1);
var G__22161 = null;
var G__22162 = (0);
var G__22163 = (0);
seq__22031 = G__22160;
chunk__22032 = G__22161;
count__22033 = G__22162;
i__22034 = G__22163;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
