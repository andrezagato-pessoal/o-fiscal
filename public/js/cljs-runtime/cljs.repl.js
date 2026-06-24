goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__17974){
var map__17975 = p__17974;
var map__17975__$1 = cljs.core.__destructure_map(map__17975);
var m = map__17975__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17975__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17975__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5823__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5823__auto__)){
var ns = temp__5823__auto__;
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)+"/");
} else {
return null;
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m)));
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18006_18602 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18007_18603 = null;
var count__18008_18604 = (0);
var i__18009_18605 = (0);
while(true){
if((i__18009_18605 < count__18008_18604)){
var f_18610 = chunk__18007_18603.cljs$core$IIndexed$_nth$arity$2(null,i__18009_18605);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_18610], 0));


var G__18622 = seq__18006_18602;
var G__18623 = chunk__18007_18603;
var G__18624 = count__18008_18604;
var G__18625 = (i__18009_18605 + (1));
seq__18006_18602 = G__18622;
chunk__18007_18603 = G__18623;
count__18008_18604 = G__18624;
i__18009_18605 = G__18625;
continue;
} else {
var temp__5823__auto___18629 = cljs.core.seq(seq__18006_18602);
if(temp__5823__auto___18629){
var seq__18006_18630__$1 = temp__5823__auto___18629;
if(cljs.core.chunked_seq_QMARK_(seq__18006_18630__$1)){
var c__5673__auto___18632 = cljs.core.chunk_first(seq__18006_18630__$1);
var G__18636 = cljs.core.chunk_rest(seq__18006_18630__$1);
var G__18637 = c__5673__auto___18632;
var G__18638 = cljs.core.count(c__5673__auto___18632);
var G__18639 = (0);
seq__18006_18602 = G__18636;
chunk__18007_18603 = G__18637;
count__18008_18604 = G__18638;
i__18009_18605 = G__18639;
continue;
} else {
var f_18640 = cljs.core.first(seq__18006_18630__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_18640], 0));


var G__18645 = cljs.core.next(seq__18006_18630__$1);
var G__18646 = null;
var G__18647 = (0);
var G__18648 = (0);
seq__18006_18602 = G__18645;
chunk__18007_18603 = G__18646;
count__18008_18604 = G__18647;
i__18009_18605 = G__18648;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_18649 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5142__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_18649], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_18649)))?cljs.core.second(arglists_18649):arglists_18649)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"\n  Please see http://clojure.org/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m)))], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"\n  Please see http://clojure.org/special_forms#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m)))], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18070_18658 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18071_18659 = null;
var count__18072_18660 = (0);
var i__18073_18661 = (0);
while(true){
if((i__18073_18661 < count__18072_18660)){
var vec__18123_18664 = chunk__18071_18659.cljs$core$IIndexed$_nth$arity$2(null,i__18073_18661);
var name_18665 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18123_18664,(0),null);
var map__18126_18666 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18123_18664,(1),null);
var map__18126_18667__$1 = cljs.core.__destructure_map(map__18126_18666);
var doc_18668 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18126_18667__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_18669 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18126_18667__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_18665], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_18669], 0));

if(cljs.core.truth_(doc_18668)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_18668], 0));
} else {
}


var G__18671 = seq__18070_18658;
var G__18672 = chunk__18071_18659;
var G__18673 = count__18072_18660;
var G__18674 = (i__18073_18661 + (1));
seq__18070_18658 = G__18671;
chunk__18071_18659 = G__18672;
count__18072_18660 = G__18673;
i__18073_18661 = G__18674;
continue;
} else {
var temp__5823__auto___18676 = cljs.core.seq(seq__18070_18658);
if(temp__5823__auto___18676){
var seq__18070_18677__$1 = temp__5823__auto___18676;
if(cljs.core.chunked_seq_QMARK_(seq__18070_18677__$1)){
var c__5673__auto___18679 = cljs.core.chunk_first(seq__18070_18677__$1);
var G__18680 = cljs.core.chunk_rest(seq__18070_18677__$1);
var G__18681 = c__5673__auto___18679;
var G__18682 = cljs.core.count(c__5673__auto___18679);
var G__18683 = (0);
seq__18070_18658 = G__18680;
chunk__18071_18659 = G__18681;
count__18072_18660 = G__18682;
i__18073_18661 = G__18683;
continue;
} else {
var vec__18197_18684 = cljs.core.first(seq__18070_18677__$1);
var name_18685 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18197_18684,(0),null);
var map__18200_18686 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18197_18684,(1),null);
var map__18200_18687__$1 = cljs.core.__destructure_map(map__18200_18686);
var doc_18688 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18200_18687__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_18689 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18200_18687__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_18685], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_18689], 0));

if(cljs.core.truth_(doc_18688)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_18688], 0));
} else {
}


var G__18696 = cljs.core.next(seq__18070_18677__$1);
var G__18697 = null;
var G__18698 = (0);
var G__18699 = (0);
seq__18070_18658 = G__18696;
chunk__18071_18659 = G__18697;
count__18072_18660 = G__18698;
i__18073_18661 = G__18699;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5823__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n))),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5823__auto__)){
var fnspec = temp__5823__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__18258 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__18260 = null;
var count__18261 = (0);
var i__18262 = (0);
while(true){
if((i__18262 < count__18261)){
var role = chunk__18260.cljs$core$IIndexed$_nth$arity$2(null,i__18262);
var temp__5823__auto___18712__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5823__auto___18712__$1)){
var spec_18717 = temp__5823__auto___18712__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"\n "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role))+":"),cljs.spec.alpha.describe(spec_18717)], 0));
} else {
}


var G__18724 = seq__18258;
var G__18725 = chunk__18260;
var G__18726 = count__18261;
var G__18727 = (i__18262 + (1));
seq__18258 = G__18724;
chunk__18260 = G__18725;
count__18261 = G__18726;
i__18262 = G__18727;
continue;
} else {
var temp__5823__auto____$1 = cljs.core.seq(seq__18258);
if(temp__5823__auto____$1){
var seq__18258__$1 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__18258__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__18258__$1);
var G__18744 = cljs.core.chunk_rest(seq__18258__$1);
var G__18745 = c__5673__auto__;
var G__18746 = cljs.core.count(c__5673__auto__);
var G__18747 = (0);
seq__18258 = G__18744;
chunk__18260 = G__18745;
count__18261 = G__18746;
i__18262 = G__18747;
continue;
} else {
var role = cljs.core.first(seq__18258__$1);
var temp__5823__auto___18749__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5823__auto___18749__$2)){
var spec_18750 = temp__5823__auto___18749__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"\n "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role))+":"),cljs.spec.alpha.describe(spec_18750)], 0));
} else {
}


var G__18753 = cljs.core.next(seq__18258__$1);
var G__18754 = null;
var G__18755 = (0);
var G__18756 = (0);
seq__18258 = G__18753;
chunk__18260 = G__18754;
count__18261 = G__18755;
i__18262 = G__18756;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__18354 = datafied_throwable;
var map__18354__$1 = cljs.core.__destructure_map(map__18354);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18354__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18354__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18354__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__18355 = cljs.core.last(via);
var map__18355__$1 = cljs.core.__destructure_map(map__18355);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18355__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18355__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18355__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__18356 = data;
var map__18356__$1 = cljs.core.__destructure_map(map__18356);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18356__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18356__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18356__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__18357 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__18357__$1 = cljs.core.__destructure_map(map__18357);
var top_data = map__18357__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18357__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__18366 = phase;
var G__18366__$1 = (((G__18366 instanceof cljs.core.Keyword))?G__18366.fqn:null);
switch (G__18366__$1) {
case "read-source":
var map__18370 = data;
var map__18370__$1 = cljs.core.__destructure_map(map__18370);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18370__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18370__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__18372 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__18372__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18372,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__18372);
var G__18372__$2 = (cljs.core.truth_((function (){var fexpr__18374 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__18374.cljs$core$IFn$_invoke$arity$1 ? fexpr__18374.cljs$core$IFn$_invoke$arity$1(source) : fexpr__18374.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__18372__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__18372__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18372__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__18372__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__18386 = top_data;
var G__18386__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18386,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__18386);
var G__18386__$2 = (cljs.core.truth_((function (){var fexpr__18392 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__18392.cljs$core$IFn$_invoke$arity$1 ? fexpr__18392.cljs$core$IFn$_invoke$arity$1(source) : fexpr__18392.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__18386__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__18386__$1);
var G__18386__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18386__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__18386__$2);
var G__18386__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18386__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__18386__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18386__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__18386__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__18400 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18400,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18400,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18400,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18400,(3),null);
var G__18403 = top_data;
var G__18403__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18403,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__18403);
var G__18403__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18403__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__18403__$1);
var G__18403__$3 = (cljs.core.truth_((function (){var and__5140__auto__ = source__$1;
if(cljs.core.truth_(and__5140__auto__)){
return method;
} else {
return and__5140__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18403__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__18403__$2);
var G__18403__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18403__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__18403__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18403__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__18403__$4;
}

break;
case "execution":
var vec__18416 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18416,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18416,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18416,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18416,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__18347_SHARP_){
var or__5142__auto__ = (p1__18347_SHARP_ == null);
if(or__5142__auto__){
return or__5142__auto__;
} else {
var fexpr__18431 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__18431.cljs$core$IFn$_invoke$arity$1 ? fexpr__18431.cljs$core$IFn$_invoke$arity$1(p1__18347_SHARP_) : fexpr__18431.call(null,p1__18347_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return line;
}
})();
var G__18442 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__18442__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18442,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__18442);
var G__18442__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18442__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__18442__$1);
var G__18442__$3 = (cljs.core.truth_((function (){var or__5142__auto__ = fn;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var and__5140__auto__ = source__$1;
if(cljs.core.truth_(and__5140__auto__)){
return method;
} else {
return and__5140__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18442__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5142__auto__ = fn;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__18442__$2);
var G__18442__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18442__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__18442__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18442__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__18442__$4;
}

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18366__$1))));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__18479){
var map__18481 = p__18479;
var map__18481__$1 = cljs.core.__destructure_map(map__18481);
var triage_data = map__18481__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18481__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18481__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18481__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18481__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18481__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18481__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18481__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18481__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5142__auto__ = source;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "<cljs repl>";
}
})())+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5142__auto__ = line;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (1);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(column)?(""+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)):"")));
var class_name = cljs.core.name((function (){var or__5142__auto__ = class$;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":(""+" ("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(simple_class)+")"));
var format = goog.string.format;
var G__18504 = phase;
var G__18504__$1 = (((G__18504 instanceof cljs.core.Keyword))?G__18504.fqn:null);
switch (G__18504__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__18509 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__18510 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__18511 = loc;
var G__18512 = (cljs.core.truth_(spec)?(function (){var sb__5795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__18513_18807 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18514_18808 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18515_18809 = true;
var _STAR_print_fn_STAR__temp_val__18516_18810 = (function (x__5796__auto__){
return sb__5795__auto__.append(x__5796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18515_18809);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18516_18810);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18474_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__18474_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18514_18808);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18513_18807);
}
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5795__auto__));
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__18509,G__18510,G__18511,G__18512) : format.call(null,G__18509,G__18510,G__18511,G__18512));

break;
case "macroexpansion":
var G__18527 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__18528 = cause_type;
var G__18529 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__18530 = loc;
var G__18531 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__18527,G__18528,G__18529,G__18530,G__18531) : format.call(null,G__18527,G__18528,G__18529,G__18530,G__18531));

break;
case "compile-syntax-check":
var G__18533 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__18534 = cause_type;
var G__18535 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__18536 = loc;
var G__18537 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__18533,G__18534,G__18535,G__18536,G__18537) : format.call(null,G__18533,G__18534,G__18535,G__18536,G__18537));

break;
case "compilation":
var G__18539 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__18540 = cause_type;
var G__18541 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__18542 = loc;
var G__18543 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__18539,G__18540,G__18541,G__18542,G__18543) : format.call(null,G__18539,G__18540,G__18541,G__18542,G__18543));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__18546 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__18547 = symbol;
var G__18548 = loc;
var G__18549 = (function (){var sb__5795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__18553_18814 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18554_18815 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18555_18816 = true;
var _STAR_print_fn_STAR__temp_val__18556_18817 = (function (x__5796__auto__){
return sb__5795__auto__.append(x__5796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18555_18816);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18556_18817);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18476_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__18476_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18554_18815);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18553_18814);
}
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5795__auto__));
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__18546,G__18547,G__18548,G__18549) : format.call(null,G__18546,G__18547,G__18548,G__18549));
} else {
var G__18570 = "Execution error%s at %s(%s).\n%s\n";
var G__18571 = cause_type;
var G__18572 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__18573 = loc;
var G__18575 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__18570,G__18571,G__18572,G__18573,G__18575) : format.call(null,G__18570,G__18571,G__18572,G__18573,G__18575));
}

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18504__$1))));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
