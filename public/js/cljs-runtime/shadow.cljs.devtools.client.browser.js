goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5882__auto__ = [];
var len__5876__auto___23613 = arguments.length;
var i__5877__auto___23614 = (0);
while(true){
if((i__5877__auto___23614 < len__5876__auto___23613)){
args__5882__auto__.push((arguments[i__5877__auto___23614]));

var G__23615 = (i__5877__auto___23614 + (1));
i__5877__auto___23614 = G__23615;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(""+"%cshadow-cljs: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(""+"shadow-cljs: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg))], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq23284){
var G__23285 = cljs.core.first(seq23284);
var seq23284__$1 = cljs.core.next(seq23284);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23285,seq23284__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__23289 = cljs.core.seq(sources);
var chunk__23290 = null;
var count__23291 = (0);
var i__23292 = (0);
while(true){
if((i__23292 < count__23291)){
var map__23339 = chunk__23290.cljs$core$IIndexed$_nth$arity$2(null,i__23292);
var map__23339__$1 = cljs.core.__destructure_map(map__23339);
var src = map__23339__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23339__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23339__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23339__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23339__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js)+"\n//# sourceURL="+cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)));
}catch (e23340){var e_23616 = e23340;
if(shadow.cljs.devtools.client.env.log){
console.error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)),e_23616);
} else {
}

throw (new Error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_23616.message))));
}

var G__23617 = seq__23289;
var G__23618 = chunk__23290;
var G__23619 = count__23291;
var G__23620 = (i__23292 + (1));
seq__23289 = G__23617;
chunk__23290 = G__23618;
count__23291 = G__23619;
i__23292 = G__23620;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__23289);
if(temp__5823__auto__){
var seq__23289__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23289__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__23289__$1);
var G__23621 = cljs.core.chunk_rest(seq__23289__$1);
var G__23622 = c__5673__auto__;
var G__23623 = cljs.core.count(c__5673__auto__);
var G__23624 = (0);
seq__23289 = G__23621;
chunk__23290 = G__23622;
count__23291 = G__23623;
i__23292 = G__23624;
continue;
} else {
var map__23341 = cljs.core.first(seq__23289__$1);
var map__23341__$1 = cljs.core.__destructure_map(map__23341);
var src = map__23341__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23341__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23341__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23341__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23341__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js)+"\n//# sourceURL="+cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)));
}catch (e23342){var e_23625 = e23342;
if(shadow.cljs.devtools.client.env.log){
console.error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)),e_23625);
} else {
}

throw (new Error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_23625.message))));
}

var G__23626 = cljs.core.next(seq__23289__$1);
var G__23627 = null;
var G__23628 = (0);
var G__23629 = (0);
seq__23289 = G__23626;
chunk__23290 = G__23627;
count__23291 = G__23628;
i__23292 = G__23629;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg((""+"call async "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)));
})], 0)),(function (next){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (next.cljs$core$IFn$_invoke$arity$0 ? next.cljs$core$IFn$_invoke$arity$0() : next.call(null));
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__23343 = cljs.core.seq(js_requires);
var chunk__23344 = null;
var count__23345 = (0);
var i__23346 = (0);
while(true){
if((i__23346 < count__23345)){
var js_ns = chunk__23344.cljs$core$IIndexed$_nth$arity$2(null,i__23346);
var require_str_23630 = (""+"var "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+" = shadow.js.require(\""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+"\");");
shadow.cljs.devtools.client.browser.script_eval(require_str_23630);


var G__23631 = seq__23343;
var G__23632 = chunk__23344;
var G__23633 = count__23345;
var G__23634 = (i__23346 + (1));
seq__23343 = G__23631;
chunk__23344 = G__23632;
count__23345 = G__23633;
i__23346 = G__23634;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__23343);
if(temp__5823__auto__){
var seq__23343__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23343__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__23343__$1);
var G__23635 = cljs.core.chunk_rest(seq__23343__$1);
var G__23636 = c__5673__auto__;
var G__23637 = cljs.core.count(c__5673__auto__);
var G__23638 = (0);
seq__23343 = G__23635;
chunk__23344 = G__23636;
count__23345 = G__23637;
i__23346 = G__23638;
continue;
} else {
var js_ns = cljs.core.first(seq__23343__$1);
var require_str_23639 = (""+"var "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+" = shadow.js.require(\""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+"\");");
shadow.cljs.devtools.client.browser.script_eval(require_str_23639);


var G__23640 = cljs.core.next(seq__23343__$1);
var G__23641 = null;
var G__23642 = (0);
var G__23643 = (0);
seq__23343 = G__23640;
chunk__23344 = G__23641;
count__23345 = G__23642;
i__23346 = G__23643;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__23348){
var map__23349 = p__23348;
var map__23349__$1 = cljs.core.__destructure_map(map__23349);
var msg = map__23349__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23349__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23349__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5628__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__23350(s__23351){
return (new cljs.core.LazySeq(null,(function (){
var s__23351__$1 = s__23351;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__23351__$1);
if(temp__5823__auto__){
var xs__6383__auto__ = temp__5823__auto__;
var map__23356 = cljs.core.first(xs__6383__auto__);
var map__23356__$1 = cljs.core.__destructure_map(map__23356);
var src = map__23356__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23356__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23356__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5624__auto__ = ((function (s__23351__$1,map__23356,map__23356__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__23349,map__23349__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__23350_$_iter__23352(s__23353){
return (new cljs.core.LazySeq(null,((function (s__23351__$1,map__23356,map__23356__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__23349,map__23349__$1,msg,info,reload_info){
return (function (){
var s__23353__$1 = s__23353;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__23353__$1);
if(temp__5823__auto____$1){
var s__23353__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__23353__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__23353__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__23355 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__23354 = (0);
while(true){
if((i__23354 < size__5627__auto__)){
var warning = cljs.core._nth(c__5626__auto__,i__23354);
cljs.core.chunk_append(b__23355,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__23644 = (i__23354 + (1));
i__23354 = G__23644;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23355),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__23350_$_iter__23352(cljs.core.chunk_rest(s__23353__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23355),null);
}
} else {
var warning = cljs.core.first(s__23353__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__23350_$_iter__23352(cljs.core.rest(s__23353__$2)));
}
} else {
return null;
}
break;
}
});})(s__23351__$1,map__23356,map__23356__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__23349,map__23349__$1,msg,info,reload_info))
,null,null));
});})(s__23351__$1,map__23356,map__23356__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__23349,map__23349__$1,msg,info,reload_info))
;
var fs__5625__auto__ = cljs.core.seq(iterys__5624__auto__(warnings));
if(fs__5625__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5625__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__23350(cljs.core.rest(s__23351__$1)));
} else {
var G__23645 = cljs.core.rest(s__23351__$1);
s__23351__$1 = G__23645;
continue;
}
} else {
var G__23646 = cljs.core.rest(s__23351__$1);
s__23351__$1 = G__23646;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__23357_23647 = cljs.core.seq(warnings);
var chunk__23358_23648 = null;
var count__23359_23649 = (0);
var i__23360_23650 = (0);
while(true){
if((i__23360_23650 < count__23359_23649)){
var map__23363_23651 = chunk__23358_23648.cljs$core$IIndexed$_nth$arity$2(null,i__23360_23650);
var map__23363_23652__$1 = cljs.core.__destructure_map(map__23363_23651);
var w_23653 = map__23363_23652__$1;
var msg_23654__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23363_23652__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_23655 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23363_23652__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_23656 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23363_23652__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_23657 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23363_23652__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn((""+"BUILD-WARNING in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_23657)+" at ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_23655)+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_23656)+"]\n\t"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_23654__$1)));


var G__23658 = seq__23357_23647;
var G__23659 = chunk__23358_23648;
var G__23660 = count__23359_23649;
var G__23661 = (i__23360_23650 + (1));
seq__23357_23647 = G__23658;
chunk__23358_23648 = G__23659;
count__23359_23649 = G__23660;
i__23360_23650 = G__23661;
continue;
} else {
var temp__5823__auto___23662 = cljs.core.seq(seq__23357_23647);
if(temp__5823__auto___23662){
var seq__23357_23663__$1 = temp__5823__auto___23662;
if(cljs.core.chunked_seq_QMARK_(seq__23357_23663__$1)){
var c__5673__auto___23664 = cljs.core.chunk_first(seq__23357_23663__$1);
var G__23665 = cljs.core.chunk_rest(seq__23357_23663__$1);
var G__23666 = c__5673__auto___23664;
var G__23667 = cljs.core.count(c__5673__auto___23664);
var G__23668 = (0);
seq__23357_23647 = G__23665;
chunk__23358_23648 = G__23666;
count__23359_23649 = G__23667;
i__23360_23650 = G__23668;
continue;
} else {
var map__23364_23669 = cljs.core.first(seq__23357_23663__$1);
var map__23364_23670__$1 = cljs.core.__destructure_map(map__23364_23669);
var w_23671 = map__23364_23670__$1;
var msg_23672__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23364_23670__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_23673 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23364_23670__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_23674 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23364_23670__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_23675 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23364_23670__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn((""+"BUILD-WARNING in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_23675)+" at ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_23673)+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_23674)+"]\n\t"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_23672__$1)));


var G__23676 = cljs.core.next(seq__23357_23663__$1);
var G__23677 = null;
var G__23678 = (0);
var G__23679 = (0);
seq__23357_23647 = G__23676;
chunk__23358_23648 = G__23677;
count__23359_23649 = G__23678;
i__23360_23650 = G__23679;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__23347_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__23347_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(rel_new)+"?"))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5140__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5140__auto__){
var and__5140__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5140__auto____$1){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__23366 = node_uri;
G__23366.setQuery(null);

G__23366.setPath(new$);

return G__23366;
})()));
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__23367){
var map__23368 = p__23367;
var map__23368__$1 = cljs.core.__destructure_map(map__23368);
var msg = map__23368__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23368__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23368__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__23369 = cljs.core.seq(updates);
var chunk__23371 = null;
var count__23372 = (0);
var i__23373 = (0);
while(true){
if((i__23373 < count__23372)){
var path = chunk__23371.cljs$core$IIndexed$_nth$arity$2(null,i__23373);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__23483_23680 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__23487_23681 = null;
var count__23488_23682 = (0);
var i__23489_23683 = (0);
while(true){
if((i__23489_23683 < count__23488_23682)){
var node_23684 = chunk__23487_23681.cljs$core$IIndexed$_nth$arity$2(null,i__23489_23683);
if(cljs.core.not(node_23684.shadow$old)){
var path_match_23685 = shadow.cljs.devtools.client.browser.match_paths(node_23684.getAttribute("href"),path);
if(cljs.core.truth_(path_match_23685)){
var new_link_23686 = (function (){var G__23515 = node_23684.cloneNode(true);
G__23515.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_23685)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__23515;
})();
(node_23684.shadow$old = true);

(new_link_23686.onload = ((function (seq__23483_23680,chunk__23487_23681,count__23488_23682,i__23489_23683,seq__23369,chunk__23371,count__23372,i__23373,new_link_23686,path_match_23685,node_23684,path,map__23368,map__23368__$1,msg,updates,reload_info){
return (function (e){
var seq__23516_23687 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__23518_23688 = null;
var count__23519_23689 = (0);
var i__23520_23690 = (0);
while(true){
if((i__23520_23690 < count__23519_23689)){
var map__23524_23691 = chunk__23518_23688.cljs$core$IIndexed$_nth$arity$2(null,i__23520_23690);
var map__23524_23692__$1 = cljs.core.__destructure_map(map__23524_23691);
var task_23693 = map__23524_23692__$1;
var fn_str_23694 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23524_23692__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23695 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23524_23692__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23696 = goog.getObjectByName(fn_str_23694,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23695)));

(fn_obj_23696.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23696.cljs$core$IFn$_invoke$arity$2(path,new_link_23686) : fn_obj_23696.call(null,path,new_link_23686));


var G__23697 = seq__23516_23687;
var G__23698 = chunk__23518_23688;
var G__23699 = count__23519_23689;
var G__23700 = (i__23520_23690 + (1));
seq__23516_23687 = G__23697;
chunk__23518_23688 = G__23698;
count__23519_23689 = G__23699;
i__23520_23690 = G__23700;
continue;
} else {
var temp__5823__auto___23701 = cljs.core.seq(seq__23516_23687);
if(temp__5823__auto___23701){
var seq__23516_23702__$1 = temp__5823__auto___23701;
if(cljs.core.chunked_seq_QMARK_(seq__23516_23702__$1)){
var c__5673__auto___23703 = cljs.core.chunk_first(seq__23516_23702__$1);
var G__23704 = cljs.core.chunk_rest(seq__23516_23702__$1);
var G__23705 = c__5673__auto___23703;
var G__23706 = cljs.core.count(c__5673__auto___23703);
var G__23707 = (0);
seq__23516_23687 = G__23704;
chunk__23518_23688 = G__23705;
count__23519_23689 = G__23706;
i__23520_23690 = G__23707;
continue;
} else {
var map__23525_23708 = cljs.core.first(seq__23516_23702__$1);
var map__23525_23709__$1 = cljs.core.__destructure_map(map__23525_23708);
var task_23710 = map__23525_23709__$1;
var fn_str_23711 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23525_23709__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23712 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23525_23709__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23713 = goog.getObjectByName(fn_str_23711,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23712)));

(fn_obj_23713.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23713.cljs$core$IFn$_invoke$arity$2(path,new_link_23686) : fn_obj_23713.call(null,path,new_link_23686));


var G__23714 = cljs.core.next(seq__23516_23702__$1);
var G__23715 = null;
var G__23716 = (0);
var G__23717 = (0);
seq__23516_23687 = G__23714;
chunk__23518_23688 = G__23715;
count__23519_23689 = G__23716;
i__23520_23690 = G__23717;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_23684);
});})(seq__23483_23680,chunk__23487_23681,count__23488_23682,i__23489_23683,seq__23369,chunk__23371,count__23372,i__23373,new_link_23686,path_match_23685,node_23684,path,map__23368,map__23368__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_23685], 0));

goog.dom.insertSiblingAfter(new_link_23686,node_23684);


var G__23718 = seq__23483_23680;
var G__23719 = chunk__23487_23681;
var G__23720 = count__23488_23682;
var G__23721 = (i__23489_23683 + (1));
seq__23483_23680 = G__23718;
chunk__23487_23681 = G__23719;
count__23488_23682 = G__23720;
i__23489_23683 = G__23721;
continue;
} else {
var G__23722 = seq__23483_23680;
var G__23723 = chunk__23487_23681;
var G__23724 = count__23488_23682;
var G__23725 = (i__23489_23683 + (1));
seq__23483_23680 = G__23722;
chunk__23487_23681 = G__23723;
count__23488_23682 = G__23724;
i__23489_23683 = G__23725;
continue;
}
} else {
var G__23726 = seq__23483_23680;
var G__23727 = chunk__23487_23681;
var G__23728 = count__23488_23682;
var G__23729 = (i__23489_23683 + (1));
seq__23483_23680 = G__23726;
chunk__23487_23681 = G__23727;
count__23488_23682 = G__23728;
i__23489_23683 = G__23729;
continue;
}
} else {
var temp__5823__auto___23730 = cljs.core.seq(seq__23483_23680);
if(temp__5823__auto___23730){
var seq__23483_23731__$1 = temp__5823__auto___23730;
if(cljs.core.chunked_seq_QMARK_(seq__23483_23731__$1)){
var c__5673__auto___23732 = cljs.core.chunk_first(seq__23483_23731__$1);
var G__23733 = cljs.core.chunk_rest(seq__23483_23731__$1);
var G__23734 = c__5673__auto___23732;
var G__23735 = cljs.core.count(c__5673__auto___23732);
var G__23736 = (0);
seq__23483_23680 = G__23733;
chunk__23487_23681 = G__23734;
count__23488_23682 = G__23735;
i__23489_23683 = G__23736;
continue;
} else {
var node_23737 = cljs.core.first(seq__23483_23731__$1);
if(cljs.core.not(node_23737.shadow$old)){
var path_match_23738 = shadow.cljs.devtools.client.browser.match_paths(node_23737.getAttribute("href"),path);
if(cljs.core.truth_(path_match_23738)){
var new_link_23739 = (function (){var G__23526 = node_23737.cloneNode(true);
G__23526.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_23738)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__23526;
})();
(node_23737.shadow$old = true);

(new_link_23739.onload = ((function (seq__23483_23680,chunk__23487_23681,count__23488_23682,i__23489_23683,seq__23369,chunk__23371,count__23372,i__23373,new_link_23739,path_match_23738,node_23737,seq__23483_23731__$1,temp__5823__auto___23730,path,map__23368,map__23368__$1,msg,updates,reload_info){
return (function (e){
var seq__23527_23740 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__23529_23741 = null;
var count__23530_23742 = (0);
var i__23531_23743 = (0);
while(true){
if((i__23531_23743 < count__23530_23742)){
var map__23535_23744 = chunk__23529_23741.cljs$core$IIndexed$_nth$arity$2(null,i__23531_23743);
var map__23535_23745__$1 = cljs.core.__destructure_map(map__23535_23744);
var task_23746 = map__23535_23745__$1;
var fn_str_23747 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23535_23745__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23748 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23535_23745__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23749 = goog.getObjectByName(fn_str_23747,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23748)));

(fn_obj_23749.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23749.cljs$core$IFn$_invoke$arity$2(path,new_link_23739) : fn_obj_23749.call(null,path,new_link_23739));


var G__23750 = seq__23527_23740;
var G__23751 = chunk__23529_23741;
var G__23752 = count__23530_23742;
var G__23753 = (i__23531_23743 + (1));
seq__23527_23740 = G__23750;
chunk__23529_23741 = G__23751;
count__23530_23742 = G__23752;
i__23531_23743 = G__23753;
continue;
} else {
var temp__5823__auto___23754__$1 = cljs.core.seq(seq__23527_23740);
if(temp__5823__auto___23754__$1){
var seq__23527_23755__$1 = temp__5823__auto___23754__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23527_23755__$1)){
var c__5673__auto___23756 = cljs.core.chunk_first(seq__23527_23755__$1);
var G__23757 = cljs.core.chunk_rest(seq__23527_23755__$1);
var G__23758 = c__5673__auto___23756;
var G__23759 = cljs.core.count(c__5673__auto___23756);
var G__23760 = (0);
seq__23527_23740 = G__23757;
chunk__23529_23741 = G__23758;
count__23530_23742 = G__23759;
i__23531_23743 = G__23760;
continue;
} else {
var map__23536_23761 = cljs.core.first(seq__23527_23755__$1);
var map__23536_23762__$1 = cljs.core.__destructure_map(map__23536_23761);
var task_23763 = map__23536_23762__$1;
var fn_str_23764 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23536_23762__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23765 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23536_23762__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23766 = goog.getObjectByName(fn_str_23764,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23765)));

(fn_obj_23766.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23766.cljs$core$IFn$_invoke$arity$2(path,new_link_23739) : fn_obj_23766.call(null,path,new_link_23739));


var G__23767 = cljs.core.next(seq__23527_23755__$1);
var G__23768 = null;
var G__23769 = (0);
var G__23770 = (0);
seq__23527_23740 = G__23767;
chunk__23529_23741 = G__23768;
count__23530_23742 = G__23769;
i__23531_23743 = G__23770;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_23737);
});})(seq__23483_23680,chunk__23487_23681,count__23488_23682,i__23489_23683,seq__23369,chunk__23371,count__23372,i__23373,new_link_23739,path_match_23738,node_23737,seq__23483_23731__$1,temp__5823__auto___23730,path,map__23368,map__23368__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_23738], 0));

goog.dom.insertSiblingAfter(new_link_23739,node_23737);


var G__23771 = cljs.core.next(seq__23483_23731__$1);
var G__23772 = null;
var G__23773 = (0);
var G__23774 = (0);
seq__23483_23680 = G__23771;
chunk__23487_23681 = G__23772;
count__23488_23682 = G__23773;
i__23489_23683 = G__23774;
continue;
} else {
var G__23775 = cljs.core.next(seq__23483_23731__$1);
var G__23776 = null;
var G__23777 = (0);
var G__23778 = (0);
seq__23483_23680 = G__23775;
chunk__23487_23681 = G__23776;
count__23488_23682 = G__23777;
i__23489_23683 = G__23778;
continue;
}
} else {
var G__23779 = cljs.core.next(seq__23483_23731__$1);
var G__23780 = null;
var G__23781 = (0);
var G__23782 = (0);
seq__23483_23680 = G__23779;
chunk__23487_23681 = G__23780;
count__23488_23682 = G__23781;
i__23489_23683 = G__23782;
continue;
}
}
} else {
}
}
break;
}


var G__23783 = seq__23369;
var G__23784 = chunk__23371;
var G__23785 = count__23372;
var G__23786 = (i__23373 + (1));
seq__23369 = G__23783;
chunk__23371 = G__23784;
count__23372 = G__23785;
i__23373 = G__23786;
continue;
} else {
var G__23787 = seq__23369;
var G__23788 = chunk__23371;
var G__23789 = count__23372;
var G__23790 = (i__23373 + (1));
seq__23369 = G__23787;
chunk__23371 = G__23788;
count__23372 = G__23789;
i__23373 = G__23790;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__23369);
if(temp__5823__auto__){
var seq__23369__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23369__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__23369__$1);
var G__23791 = cljs.core.chunk_rest(seq__23369__$1);
var G__23792 = c__5673__auto__;
var G__23793 = cljs.core.count(c__5673__auto__);
var G__23794 = (0);
seq__23369 = G__23791;
chunk__23371 = G__23792;
count__23372 = G__23793;
i__23373 = G__23794;
continue;
} else {
var path = cljs.core.first(seq__23369__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__23537_23795 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__23541_23796 = null;
var count__23542_23797 = (0);
var i__23543_23798 = (0);
while(true){
if((i__23543_23798 < count__23542_23797)){
var node_23799 = chunk__23541_23796.cljs$core$IIndexed$_nth$arity$2(null,i__23543_23798);
if(cljs.core.not(node_23799.shadow$old)){
var path_match_23800 = shadow.cljs.devtools.client.browser.match_paths(node_23799.getAttribute("href"),path);
if(cljs.core.truth_(path_match_23800)){
var new_link_23801 = (function (){var G__23569 = node_23799.cloneNode(true);
G__23569.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_23800)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__23569;
})();
(node_23799.shadow$old = true);

(new_link_23801.onload = ((function (seq__23537_23795,chunk__23541_23796,count__23542_23797,i__23543_23798,seq__23369,chunk__23371,count__23372,i__23373,new_link_23801,path_match_23800,node_23799,path,seq__23369__$1,temp__5823__auto__,map__23368,map__23368__$1,msg,updates,reload_info){
return (function (e){
var seq__23570_23802 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__23572_23803 = null;
var count__23573_23804 = (0);
var i__23574_23805 = (0);
while(true){
if((i__23574_23805 < count__23573_23804)){
var map__23578_23806 = chunk__23572_23803.cljs$core$IIndexed$_nth$arity$2(null,i__23574_23805);
var map__23578_23807__$1 = cljs.core.__destructure_map(map__23578_23806);
var task_23808 = map__23578_23807__$1;
var fn_str_23809 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23578_23807__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23810 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23578_23807__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23811 = goog.getObjectByName(fn_str_23809,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23810)));

(fn_obj_23811.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23811.cljs$core$IFn$_invoke$arity$2(path,new_link_23801) : fn_obj_23811.call(null,path,new_link_23801));


var G__23812 = seq__23570_23802;
var G__23813 = chunk__23572_23803;
var G__23814 = count__23573_23804;
var G__23815 = (i__23574_23805 + (1));
seq__23570_23802 = G__23812;
chunk__23572_23803 = G__23813;
count__23573_23804 = G__23814;
i__23574_23805 = G__23815;
continue;
} else {
var temp__5823__auto___23816__$1 = cljs.core.seq(seq__23570_23802);
if(temp__5823__auto___23816__$1){
var seq__23570_23817__$1 = temp__5823__auto___23816__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23570_23817__$1)){
var c__5673__auto___23818 = cljs.core.chunk_first(seq__23570_23817__$1);
var G__23819 = cljs.core.chunk_rest(seq__23570_23817__$1);
var G__23820 = c__5673__auto___23818;
var G__23821 = cljs.core.count(c__5673__auto___23818);
var G__23822 = (0);
seq__23570_23802 = G__23819;
chunk__23572_23803 = G__23820;
count__23573_23804 = G__23821;
i__23574_23805 = G__23822;
continue;
} else {
var map__23579_23823 = cljs.core.first(seq__23570_23817__$1);
var map__23579_23824__$1 = cljs.core.__destructure_map(map__23579_23823);
var task_23825 = map__23579_23824__$1;
var fn_str_23826 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23579_23824__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23827 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23579_23824__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23828 = goog.getObjectByName(fn_str_23826,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23827)));

(fn_obj_23828.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23828.cljs$core$IFn$_invoke$arity$2(path,new_link_23801) : fn_obj_23828.call(null,path,new_link_23801));


var G__23829 = cljs.core.next(seq__23570_23817__$1);
var G__23830 = null;
var G__23831 = (0);
var G__23832 = (0);
seq__23570_23802 = G__23829;
chunk__23572_23803 = G__23830;
count__23573_23804 = G__23831;
i__23574_23805 = G__23832;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_23799);
});})(seq__23537_23795,chunk__23541_23796,count__23542_23797,i__23543_23798,seq__23369,chunk__23371,count__23372,i__23373,new_link_23801,path_match_23800,node_23799,path,seq__23369__$1,temp__5823__auto__,map__23368,map__23368__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_23800], 0));

goog.dom.insertSiblingAfter(new_link_23801,node_23799);


var G__23833 = seq__23537_23795;
var G__23834 = chunk__23541_23796;
var G__23835 = count__23542_23797;
var G__23836 = (i__23543_23798 + (1));
seq__23537_23795 = G__23833;
chunk__23541_23796 = G__23834;
count__23542_23797 = G__23835;
i__23543_23798 = G__23836;
continue;
} else {
var G__23837 = seq__23537_23795;
var G__23838 = chunk__23541_23796;
var G__23839 = count__23542_23797;
var G__23840 = (i__23543_23798 + (1));
seq__23537_23795 = G__23837;
chunk__23541_23796 = G__23838;
count__23542_23797 = G__23839;
i__23543_23798 = G__23840;
continue;
}
} else {
var G__23841 = seq__23537_23795;
var G__23842 = chunk__23541_23796;
var G__23843 = count__23542_23797;
var G__23844 = (i__23543_23798 + (1));
seq__23537_23795 = G__23841;
chunk__23541_23796 = G__23842;
count__23542_23797 = G__23843;
i__23543_23798 = G__23844;
continue;
}
} else {
var temp__5823__auto___23845__$1 = cljs.core.seq(seq__23537_23795);
if(temp__5823__auto___23845__$1){
var seq__23537_23846__$1 = temp__5823__auto___23845__$1;
if(cljs.core.chunked_seq_QMARK_(seq__23537_23846__$1)){
var c__5673__auto___23847 = cljs.core.chunk_first(seq__23537_23846__$1);
var G__23848 = cljs.core.chunk_rest(seq__23537_23846__$1);
var G__23849 = c__5673__auto___23847;
var G__23850 = cljs.core.count(c__5673__auto___23847);
var G__23851 = (0);
seq__23537_23795 = G__23848;
chunk__23541_23796 = G__23849;
count__23542_23797 = G__23850;
i__23543_23798 = G__23851;
continue;
} else {
var node_23852 = cljs.core.first(seq__23537_23846__$1);
if(cljs.core.not(node_23852.shadow$old)){
var path_match_23853 = shadow.cljs.devtools.client.browser.match_paths(node_23852.getAttribute("href"),path);
if(cljs.core.truth_(path_match_23853)){
var new_link_23854 = (function (){var G__23580 = node_23852.cloneNode(true);
G__23580.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_23853)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__23580;
})();
(node_23852.shadow$old = true);

(new_link_23854.onload = ((function (seq__23537_23795,chunk__23541_23796,count__23542_23797,i__23543_23798,seq__23369,chunk__23371,count__23372,i__23373,new_link_23854,path_match_23853,node_23852,seq__23537_23846__$1,temp__5823__auto___23845__$1,path,seq__23369__$1,temp__5823__auto__,map__23368,map__23368__$1,msg,updates,reload_info){
return (function (e){
var seq__23581_23855 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__23583_23856 = null;
var count__23584_23857 = (0);
var i__23585_23858 = (0);
while(true){
if((i__23585_23858 < count__23584_23857)){
var map__23589_23859 = chunk__23583_23856.cljs$core$IIndexed$_nth$arity$2(null,i__23585_23858);
var map__23589_23860__$1 = cljs.core.__destructure_map(map__23589_23859);
var task_23861 = map__23589_23860__$1;
var fn_str_23862 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23589_23860__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23863 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23589_23860__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23864 = goog.getObjectByName(fn_str_23862,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23863)));

(fn_obj_23864.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23864.cljs$core$IFn$_invoke$arity$2(path,new_link_23854) : fn_obj_23864.call(null,path,new_link_23854));


var G__23865 = seq__23581_23855;
var G__23866 = chunk__23583_23856;
var G__23867 = count__23584_23857;
var G__23868 = (i__23585_23858 + (1));
seq__23581_23855 = G__23865;
chunk__23583_23856 = G__23866;
count__23584_23857 = G__23867;
i__23585_23858 = G__23868;
continue;
} else {
var temp__5823__auto___23869__$2 = cljs.core.seq(seq__23581_23855);
if(temp__5823__auto___23869__$2){
var seq__23581_23870__$1 = temp__5823__auto___23869__$2;
if(cljs.core.chunked_seq_QMARK_(seq__23581_23870__$1)){
var c__5673__auto___23871 = cljs.core.chunk_first(seq__23581_23870__$1);
var G__23872 = cljs.core.chunk_rest(seq__23581_23870__$1);
var G__23873 = c__5673__auto___23871;
var G__23874 = cljs.core.count(c__5673__auto___23871);
var G__23875 = (0);
seq__23581_23855 = G__23872;
chunk__23583_23856 = G__23873;
count__23584_23857 = G__23874;
i__23585_23858 = G__23875;
continue;
} else {
var map__23590_23876 = cljs.core.first(seq__23581_23870__$1);
var map__23590_23877__$1 = cljs.core.__destructure_map(map__23590_23876);
var task_23878 = map__23590_23877__$1;
var fn_str_23879 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23590_23877__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23880 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23590_23877__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23881 = goog.getObjectByName(fn_str_23879,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23880)));

(fn_obj_23881.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23881.cljs$core$IFn$_invoke$arity$2(path,new_link_23854) : fn_obj_23881.call(null,path,new_link_23854));


var G__23882 = cljs.core.next(seq__23581_23870__$1);
var G__23883 = null;
var G__23884 = (0);
var G__23885 = (0);
seq__23581_23855 = G__23882;
chunk__23583_23856 = G__23883;
count__23584_23857 = G__23884;
i__23585_23858 = G__23885;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_23852);
});})(seq__23537_23795,chunk__23541_23796,count__23542_23797,i__23543_23798,seq__23369,chunk__23371,count__23372,i__23373,new_link_23854,path_match_23853,node_23852,seq__23537_23846__$1,temp__5823__auto___23845__$1,path,seq__23369__$1,temp__5823__auto__,map__23368,map__23368__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_23853], 0));

goog.dom.insertSiblingAfter(new_link_23854,node_23852);


var G__23886 = cljs.core.next(seq__23537_23846__$1);
var G__23887 = null;
var G__23888 = (0);
var G__23889 = (0);
seq__23537_23795 = G__23886;
chunk__23541_23796 = G__23887;
count__23542_23797 = G__23888;
i__23543_23798 = G__23889;
continue;
} else {
var G__23890 = cljs.core.next(seq__23537_23846__$1);
var G__23891 = null;
var G__23892 = (0);
var G__23893 = (0);
seq__23537_23795 = G__23890;
chunk__23541_23796 = G__23891;
count__23542_23797 = G__23892;
i__23543_23798 = G__23893;
continue;
}
} else {
var G__23894 = cljs.core.next(seq__23537_23846__$1);
var G__23895 = null;
var G__23896 = (0);
var G__23897 = (0);
seq__23537_23795 = G__23894;
chunk__23541_23796 = G__23895;
count__23542_23797 = G__23896;
i__23543_23798 = G__23897;
continue;
}
}
} else {
}
}
break;
}


var G__23898 = cljs.core.next(seq__23369__$1);
var G__23899 = null;
var G__23900 = (0);
var G__23901 = (0);
seq__23369 = G__23898;
chunk__23371 = G__23899;
count__23372 = G__23900;
i__23373 = G__23901;
continue;
} else {
var G__23902 = cljs.core.next(seq__23369__$1);
var G__23903 = null;
var G__23904 = (0);
var G__23905 = (0);
seq__23369 = G__23902;
chunk__23371 = G__23903;
count__23372 = G__23904;
i__23373 = G__23905;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null))))))))+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)+" ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM)+"]"),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$4 = (function (this$,code,success,fail){
var this$__$1 = this;
try{var G__23592 = shadow.cljs.devtools.client.browser.global_eval(code);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__23592) : success.call(null,G__23592));
}catch (e23591){var e = e23591;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$5 = (function (this$,ns,p__23593,success,fail){
var map__23594 = p__23593;
var map__23594__$1 = cljs.core.__destructure_map(map__23594);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23594__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
try{var G__23596 = shadow.cljs.devtools.client.browser.global_eval(js);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__23596) : success.call(null,G__23596));
}catch (e23595){var e = e23595;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__23597,done,error){
var map__23598 = p__23597;
var map__23598__$1 = cljs.core.__destructure_map(map__23598);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23598__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__23599,done,error){
var map__23600 = p__23599;
var map__23600__$1 = cljs.core.__destructure_map(map__23600);
var msg = map__23600__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23600__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23600__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23600__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__23601){
var map__23602 = p__23601;
var map__23602__$1 = cljs.core.__destructure_map(map__23602);
var src = map__23602__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23602__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5140__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5140__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__23603 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__23603) : done.call(null,G__23603));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__23604){
var map__23605 = p__23604;
var map__23605__$1 = cljs.core.__destructure_map(map__23605);
var msg__$1 = map__23605__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23605__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e23606){var ex = e23606;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__23607){
var map__23608 = p__23607;
var map__23608__$1 = cljs.core.__destructure_map(map__23608);
var env = map__23608__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23608__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg((""+"#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))+" ready!"));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error((""+"Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."+" Is the watch for this build running?"));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__23609){
var map__23610 = p__23609;
var map__23610__$1 = cljs.core.__destructure_map(map__23610);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23610__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23610__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__23611){
var map__23612 = p__23611;
var map__23612__$1 = cljs.core.__destructure_map(map__23612);
var svc = map__23612__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23612__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
