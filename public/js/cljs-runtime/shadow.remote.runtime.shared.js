goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__11746){
var map__11747 = p__11746;
var map__11747__$1 = cljs.core.__destructure_map(map__11747);
var runtime = map__11747__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11747__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5142__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_11941 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_11941)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__11753 = runtime;
var G__11754 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_11941);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__11753,G__11754) : shadow.remote.runtime.shared.process.call(null,G__11753,G__11754));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__11756,res){
var map__11760 = p__11756;
var map__11760__$1 = cljs.core.__destructure_map(map__11760);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11760__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11760__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__11762 = res;
var G__11762__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__11762,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__11762);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__11762__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__11762__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__11773 = arguments.length;
switch (G__11773) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__11777,msg,handlers,timeout_after_ms){
var map__11778 = p__11777;
var map__11778__$1 = cljs.core.__destructure_map(map__11778);
var runtime = map__11778__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11778__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___11983 = arguments.length;
var i__5877__auto___11984 = (0);
while(true){
if((i__5877__auto___11984 < len__5876__auto___11983)){
args__5882__auto__.push((arguments[i__5877__auto___11984]));

var G__11988 = (i__5877__auto___11984 + (1));
i__5877__auto___11984 = G__11988;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((2) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5883__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__11794,ev,args){
var map__11796 = p__11794;
var map__11796__$1 = cljs.core.__destructure_map(map__11796);
var runtime = map__11796__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11796__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__11798 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__11801 = null;
var count__11802 = (0);
var i__11803 = (0);
while(true){
if((i__11803 < count__11802)){
var ext = chunk__11801.cljs$core$IIndexed$_nth$arity$2(null,i__11803);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__12010 = seq__11798;
var G__12011 = chunk__11801;
var G__12012 = count__11802;
var G__12013 = (i__11803 + (1));
seq__11798 = G__12010;
chunk__11801 = G__12011;
count__11802 = G__12012;
i__11803 = G__12013;
continue;
} else {
var G__12015 = seq__11798;
var G__12016 = chunk__11801;
var G__12017 = count__11802;
var G__12018 = (i__11803 + (1));
seq__11798 = G__12015;
chunk__11801 = G__12016;
count__11802 = G__12017;
i__11803 = G__12018;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__11798);
if(temp__5823__auto__){
var seq__11798__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11798__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__11798__$1);
var G__12024 = cljs.core.chunk_rest(seq__11798__$1);
var G__12025 = c__5673__auto__;
var G__12026 = cljs.core.count(c__5673__auto__);
var G__12027 = (0);
seq__11798 = G__12024;
chunk__11801 = G__12025;
count__11802 = G__12026;
i__11803 = G__12027;
continue;
} else {
var ext = cljs.core.first(seq__11798__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__12033 = cljs.core.next(seq__11798__$1);
var G__12034 = null;
var G__12035 = (0);
var G__12036 = (0);
seq__11798 = G__12033;
chunk__11801 = G__12034;
count__11802 = G__12035;
i__11803 = G__12036;
continue;
} else {
var G__12037 = cljs.core.next(seq__11798__$1);
var G__12038 = null;
var G__12039 = (0);
var G__12040 = (0);
seq__11798 = G__12037;
chunk__11801 = G__12038;
count__11802 = G__12039;
i__11803 = G__12040;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq11784){
var G__11785 = cljs.core.first(seq11784);
var seq11784__$1 = cljs.core.next(seq11784);
var G__11786 = cljs.core.first(seq11784__$1);
var seq11784__$2 = cljs.core.next(seq11784__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11785,G__11786,seq11784__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__11820,p__11821){
var map__11825 = p__11820;
var map__11825__$1 = cljs.core.__destructure_map(map__11825);
var runtime = map__11825__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11825__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__11826 = p__11821;
var map__11826__$1 = cljs.core.__destructure_map(map__11826);
var msg = map__11826__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11826__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__11828 = cljs.core.deref(state_ref);
var map__11828__$1 = cljs.core.__destructure_map(map__11828);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11828__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11828__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__11836,msg){
var map__11837 = p__11836;
var map__11837__$1 = cljs.core.__destructure_map(map__11837);
var runtime = map__11837__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11837__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__11842,key,p__11843){
var map__11844 = p__11842;
var map__11844__$1 = cljs.core.__destructure_map(map__11844);
var state = map__11844__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11844__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__11845 = p__11843;
var map__11845__$1 = cljs.core.__destructure_map(map__11845);
var spec = map__11845__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11845__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11845__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__11850,key,spec){
var map__11851 = p__11850;
var map__11851__$1 = cljs.core.__destructure_map(map__11851);
var runtime = map__11851__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11851__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5827__auto___12115 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5827__auto___12115 == null)){
} else {
var on_welcome_12118 = temp__5827__auto___12115;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_12118.cljs$core$IFn$_invoke$arity$0 ? on_welcome_12118.cljs$core$IFn$_invoke$arity$0() : on_welcome_12118.call(null));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__11856_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__11856_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__11857_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__11857_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__11858_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__11858_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__11859_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__11859_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__11860_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__11860_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__11867,key){
var map__11868 = p__11867;
var map__11868__$1 = cljs.core.__destructure_map(map__11868);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11868__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__11870,msg){
var map__11871 = p__11870;
var map__11871__$1 = cljs.core.__destructure_map(map__11871);
var runtime = map__11871__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11871__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__11880,p__11881){
var map__11883 = p__11880;
var map__11883__$1 = cljs.core.__destructure_map(map__11883);
var runtime = map__11883__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11883__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__11884 = p__11881;
var map__11884__$1 = cljs.core.__destructure_map(map__11884);
var msg = map__11884__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11884__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11884__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__11894 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__11896 = null;
var count__11897 = (0);
var i__11898 = (0);
while(true){
if((i__11898 < count__11897)){
var map__11916 = chunk__11896.cljs$core$IIndexed$_nth$arity$2(null,i__11898);
var map__11916__$1 = cljs.core.__destructure_map(map__11916);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11916__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__12197 = seq__11894;
var G__12198 = chunk__11896;
var G__12199 = count__11897;
var G__12200 = (i__11898 + (1));
seq__11894 = G__12197;
chunk__11896 = G__12198;
count__11897 = G__12199;
i__11898 = G__12200;
continue;
} else {
var G__12201 = seq__11894;
var G__12202 = chunk__11896;
var G__12203 = count__11897;
var G__12204 = (i__11898 + (1));
seq__11894 = G__12201;
chunk__11896 = G__12202;
count__11897 = G__12203;
i__11898 = G__12204;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__11894);
if(temp__5823__auto__){
var seq__11894__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11894__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__11894__$1);
var G__12208 = cljs.core.chunk_rest(seq__11894__$1);
var G__12209 = c__5673__auto__;
var G__12210 = cljs.core.count(c__5673__auto__);
var G__12211 = (0);
seq__11894 = G__12208;
chunk__11896 = G__12209;
count__11897 = G__12210;
i__11898 = G__12211;
continue;
} else {
var map__11919 = cljs.core.first(seq__11894__$1);
var map__11919__$1 = cljs.core.__destructure_map(map__11919);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11919__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__12214 = cljs.core.next(seq__11894__$1);
var G__12215 = null;
var G__12216 = (0);
var G__12217 = (0);
seq__11894 = G__12214;
chunk__11896 = G__12215;
count__11897 = G__12216;
i__11898 = G__12217;
continue;
} else {
var G__12218 = cljs.core.next(seq__11894__$1);
var G__12219 = null;
var G__12220 = (0);
var G__12221 = (0);
seq__11894 = G__12218;
chunk__11896 = G__12219;
count__11897 = G__12220;
i__11898 = G__12221;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
