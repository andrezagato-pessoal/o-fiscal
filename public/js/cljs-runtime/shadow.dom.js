goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_15607 = (function (this$){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5499__auto__.call(null,this$));
} else {
var m__5497__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5497__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_15607(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_15623 = (function (this$){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5499__auto__.call(null,this$));
} else {
var m__5497__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5497__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_15623(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__13869 = coll;
var G__13870 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__13869,G__13870) : shadow.dom.lazy_native_coll_seq.call(null,G__13869,G__13870));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5142__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(el)));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__13940 = arguments.length;
switch (G__13940) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__13954 = arguments.length;
switch (G__13954) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__13967 = arguments.length;
switch (G__13967) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__13983 = arguments.length;
switch (G__13983) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__14000 = arguments.length;
switch (G__14000) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__14044 = arguments.length;
switch (G__14044) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5142__auto__ = (!((typeof document !== 'undefined')));
if(or__5142__auto__){
return or__5142__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent((""+"on"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e14068){if((e14068 instanceof Object)){
var e = e14068;
return console.log("didnt support attachEvent",el,e);
} else {
throw e14068;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5142__auto__ = (!((typeof document !== 'undefined')));
if(or__5142__auto__){
return or__5142__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent((""+"on"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__14084 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__14085 = null;
var count__14086 = (0);
var i__14087 = (0);
while(true){
if((i__14087 < count__14086)){
var el = chunk__14085.cljs$core$IIndexed$_nth$arity$2(null,i__14087);
var handler_15673__$1 = ((function (seq__14084,chunk__14085,count__14086,i__14087,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__14084,chunk__14085,count__14086,i__14087,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_15673__$1);


var G__15674 = seq__14084;
var G__15675 = chunk__14085;
var G__15676 = count__14086;
var G__15677 = (i__14087 + (1));
seq__14084 = G__15674;
chunk__14085 = G__15675;
count__14086 = G__15676;
i__14087 = G__15677;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__14084);
if(temp__5823__auto__){
var seq__14084__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14084__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__14084__$1);
var G__15678 = cljs.core.chunk_rest(seq__14084__$1);
var G__15679 = c__5673__auto__;
var G__15680 = cljs.core.count(c__5673__auto__);
var G__15681 = (0);
seq__14084 = G__15678;
chunk__14085 = G__15679;
count__14086 = G__15680;
i__14087 = G__15681;
continue;
} else {
var el = cljs.core.first(seq__14084__$1);
var handler_15682__$1 = ((function (seq__14084,chunk__14085,count__14086,i__14087,el,seq__14084__$1,temp__5823__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__14084,chunk__14085,count__14086,i__14087,el,seq__14084__$1,temp__5823__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_15682__$1);


var G__15683 = cljs.core.next(seq__14084__$1);
var G__15684 = null;
var G__15685 = (0);
var G__15686 = (0);
seq__14084 = G__15683;
chunk__14085 = G__15684;
count__14086 = G__15685;
i__14087 = G__15686;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__14127 = arguments.length;
switch (G__14127) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__14162 = cljs.core.seq(events);
var chunk__14163 = null;
var count__14164 = (0);
var i__14165 = (0);
while(true){
if((i__14165 < count__14164)){
var vec__14198 = chunk__14163.cljs$core$IIndexed$_nth$arity$2(null,i__14165);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14198,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14198,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__15689 = seq__14162;
var G__15690 = chunk__14163;
var G__15691 = count__14164;
var G__15692 = (i__14165 + (1));
seq__14162 = G__15689;
chunk__14163 = G__15690;
count__14164 = G__15691;
i__14165 = G__15692;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__14162);
if(temp__5823__auto__){
var seq__14162__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14162__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__14162__$1);
var G__15694 = cljs.core.chunk_rest(seq__14162__$1);
var G__15695 = c__5673__auto__;
var G__15696 = cljs.core.count(c__5673__auto__);
var G__15697 = (0);
seq__14162 = G__15694;
chunk__14163 = G__15695;
count__14164 = G__15696;
i__14165 = G__15697;
continue;
} else {
var vec__14210 = cljs.core.first(seq__14162__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14210,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14210,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__15698 = cljs.core.next(seq__14162__$1);
var G__15699 = null;
var G__15700 = (0);
var G__15701 = (0);
seq__14162 = G__15698;
chunk__14163 = G__15699;
count__14164 = G__15700;
i__14165 = G__15701;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__14224 = cljs.core.seq(styles);
var chunk__14225 = null;
var count__14226 = (0);
var i__14227 = (0);
while(true){
if((i__14227 < count__14226)){
var vec__14278 = chunk__14225.cljs$core$IIndexed$_nth$arity$2(null,i__14227);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14278,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14278,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__15703 = seq__14224;
var G__15704 = chunk__14225;
var G__15705 = count__14226;
var G__15706 = (i__14227 + (1));
seq__14224 = G__15703;
chunk__14225 = G__15704;
count__14226 = G__15705;
i__14227 = G__15706;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__14224);
if(temp__5823__auto__){
var seq__14224__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14224__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__14224__$1);
var G__15710 = cljs.core.chunk_rest(seq__14224__$1);
var G__15711 = c__5673__auto__;
var G__15712 = cljs.core.count(c__5673__auto__);
var G__15713 = (0);
seq__14224 = G__15710;
chunk__14225 = G__15711;
count__14226 = G__15712;
i__14227 = G__15713;
continue;
} else {
var vec__14303 = cljs.core.first(seq__14224__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14303,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14303,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__15715 = cljs.core.next(seq__14224__$1);
var G__15716 = null;
var G__15717 = (0);
var G__15718 = (0);
seq__14224 = G__15715;
chunk__14225 = G__15716;
count__14226 = G__15717;
i__14227 = G__15718;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__14320_15719 = key;
var G__14320_15720__$1 = (((G__14320_15719 instanceof cljs.core.Keyword))?G__14320_15719.fqn:null);
switch (G__14320_15720__$1) {
case "id":
(el.id = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)));

break;
case "class":
(el.className = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_15738 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5142__auto__ = goog.string.startsWith(ks_15738,"data-");
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return goog.string.startsWith(ks_15738,"aria-");
}
})())){
el.setAttribute(ks_15738,value);
} else {
(el[ks_15738] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class));
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw (""+"cant have id after class?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec__$1));
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__14416){
var map__14419 = p__14416;
var map__14419__$1 = cljs.core.__destructure_map(map__14419);
var props = map__14419__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14419__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__14429 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14429,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14429,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14429,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__14433 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__14433,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__14433;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__14444 = arguments.length;
switch (G__14444) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5823__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5823__auto__)){
var n = temp__5823__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5823__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5823__auto__)){
var n = temp__5823__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__14471){
var vec__14479 = p__14471;
var seq__14480 = cljs.core.seq(vec__14479);
var first__14481 = cljs.core.first(seq__14480);
var seq__14480__$1 = cljs.core.next(seq__14480);
var nn = first__14481;
var first__14481__$1 = cljs.core.first(seq__14480__$1);
var seq__14480__$2 = cljs.core.next(seq__14480__$1);
var np = first__14481__$1;
var nc = seq__14480__$2;
var node = vec__14479;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__14485 = nn;
var G__14486 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__14485,G__14486) : create_fn.call(null,G__14485,G__14486));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__14490 = nn;
var G__14491 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__14490,G__14491) : create_fn.call(null,G__14490,G__14491));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__14504 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14504,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14504,(1),null);
var seq__14508_15777 = cljs.core.seq(node_children);
var chunk__14509_15778 = null;
var count__14510_15779 = (0);
var i__14511_15780 = (0);
while(true){
if((i__14511_15780 < count__14510_15779)){
var child_struct_15781 = chunk__14509_15778.cljs$core$IIndexed$_nth$arity$2(null,i__14511_15780);
var children_15783 = shadow.dom.dom_node(child_struct_15781);
if(cljs.core.seq_QMARK_(children_15783)){
var seq__14558_15784 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_15783));
var chunk__14560_15785 = null;
var count__14561_15786 = (0);
var i__14562_15787 = (0);
while(true){
if((i__14562_15787 < count__14561_15786)){
var child_15789 = chunk__14560_15785.cljs$core$IIndexed$_nth$arity$2(null,i__14562_15787);
if(cljs.core.truth_(child_15789)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_15789);


var G__15790 = seq__14558_15784;
var G__15791 = chunk__14560_15785;
var G__15792 = count__14561_15786;
var G__15793 = (i__14562_15787 + (1));
seq__14558_15784 = G__15790;
chunk__14560_15785 = G__15791;
count__14561_15786 = G__15792;
i__14562_15787 = G__15793;
continue;
} else {
var G__15795 = seq__14558_15784;
var G__15796 = chunk__14560_15785;
var G__15797 = count__14561_15786;
var G__15798 = (i__14562_15787 + (1));
seq__14558_15784 = G__15795;
chunk__14560_15785 = G__15796;
count__14561_15786 = G__15797;
i__14562_15787 = G__15798;
continue;
}
} else {
var temp__5823__auto___15800 = cljs.core.seq(seq__14558_15784);
if(temp__5823__auto___15800){
var seq__14558_15801__$1 = temp__5823__auto___15800;
if(cljs.core.chunked_seq_QMARK_(seq__14558_15801__$1)){
var c__5673__auto___15805 = cljs.core.chunk_first(seq__14558_15801__$1);
var G__15806 = cljs.core.chunk_rest(seq__14558_15801__$1);
var G__15807 = c__5673__auto___15805;
var G__15808 = cljs.core.count(c__5673__auto___15805);
var G__15809 = (0);
seq__14558_15784 = G__15806;
chunk__14560_15785 = G__15807;
count__14561_15786 = G__15808;
i__14562_15787 = G__15809;
continue;
} else {
var child_15810 = cljs.core.first(seq__14558_15801__$1);
if(cljs.core.truth_(child_15810)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_15810);


var G__15813 = cljs.core.next(seq__14558_15801__$1);
var G__15814 = null;
var G__15815 = (0);
var G__15816 = (0);
seq__14558_15784 = G__15813;
chunk__14560_15785 = G__15814;
count__14561_15786 = G__15815;
i__14562_15787 = G__15816;
continue;
} else {
var G__15817 = cljs.core.next(seq__14558_15801__$1);
var G__15818 = null;
var G__15819 = (0);
var G__15820 = (0);
seq__14558_15784 = G__15817;
chunk__14560_15785 = G__15818;
count__14561_15786 = G__15819;
i__14562_15787 = G__15820;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_15783);
}


var G__15823 = seq__14508_15777;
var G__15824 = chunk__14509_15778;
var G__15826 = count__14510_15779;
var G__15827 = (i__14511_15780 + (1));
seq__14508_15777 = G__15823;
chunk__14509_15778 = G__15824;
count__14510_15779 = G__15826;
i__14511_15780 = G__15827;
continue;
} else {
var temp__5823__auto___15828 = cljs.core.seq(seq__14508_15777);
if(temp__5823__auto___15828){
var seq__14508_15830__$1 = temp__5823__auto___15828;
if(cljs.core.chunked_seq_QMARK_(seq__14508_15830__$1)){
var c__5673__auto___15834 = cljs.core.chunk_first(seq__14508_15830__$1);
var G__15835 = cljs.core.chunk_rest(seq__14508_15830__$1);
var G__15836 = c__5673__auto___15834;
var G__15837 = cljs.core.count(c__5673__auto___15834);
var G__15838 = (0);
seq__14508_15777 = G__15835;
chunk__14509_15778 = G__15836;
count__14510_15779 = G__15837;
i__14511_15780 = G__15838;
continue;
} else {
var child_struct_15840 = cljs.core.first(seq__14508_15830__$1);
var children_15841 = shadow.dom.dom_node(child_struct_15840);
if(cljs.core.seq_QMARK_(children_15841)){
var seq__14581_15843 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_15841));
var chunk__14583_15844 = null;
var count__14584_15845 = (0);
var i__14585_15846 = (0);
while(true){
if((i__14585_15846 < count__14584_15845)){
var child_15847 = chunk__14583_15844.cljs$core$IIndexed$_nth$arity$2(null,i__14585_15846);
if(cljs.core.truth_(child_15847)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_15847);


var G__15848 = seq__14581_15843;
var G__15849 = chunk__14583_15844;
var G__15850 = count__14584_15845;
var G__15851 = (i__14585_15846 + (1));
seq__14581_15843 = G__15848;
chunk__14583_15844 = G__15849;
count__14584_15845 = G__15850;
i__14585_15846 = G__15851;
continue;
} else {
var G__15852 = seq__14581_15843;
var G__15853 = chunk__14583_15844;
var G__15854 = count__14584_15845;
var G__15855 = (i__14585_15846 + (1));
seq__14581_15843 = G__15852;
chunk__14583_15844 = G__15853;
count__14584_15845 = G__15854;
i__14585_15846 = G__15855;
continue;
}
} else {
var temp__5823__auto___15856__$1 = cljs.core.seq(seq__14581_15843);
if(temp__5823__auto___15856__$1){
var seq__14581_15858__$1 = temp__5823__auto___15856__$1;
if(cljs.core.chunked_seq_QMARK_(seq__14581_15858__$1)){
var c__5673__auto___15860 = cljs.core.chunk_first(seq__14581_15858__$1);
var G__15861 = cljs.core.chunk_rest(seq__14581_15858__$1);
var G__15862 = c__5673__auto___15860;
var G__15863 = cljs.core.count(c__5673__auto___15860);
var G__15864 = (0);
seq__14581_15843 = G__15861;
chunk__14583_15844 = G__15862;
count__14584_15845 = G__15863;
i__14585_15846 = G__15864;
continue;
} else {
var child_15865 = cljs.core.first(seq__14581_15858__$1);
if(cljs.core.truth_(child_15865)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_15865);


var G__15866 = cljs.core.next(seq__14581_15858__$1);
var G__15867 = null;
var G__15868 = (0);
var G__15869 = (0);
seq__14581_15843 = G__15866;
chunk__14583_15844 = G__15867;
count__14584_15845 = G__15868;
i__14585_15846 = G__15869;
continue;
} else {
var G__15870 = cljs.core.next(seq__14581_15858__$1);
var G__15871 = null;
var G__15872 = (0);
var G__15873 = (0);
seq__14581_15843 = G__15870;
chunk__14583_15844 = G__15871;
count__14584_15845 = G__15872;
i__14585_15846 = G__15873;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_15841);
}


var G__15876 = cljs.core.next(seq__14508_15830__$1);
var G__15877 = null;
var G__15878 = (0);
var G__15879 = (0);
seq__14508_15777 = G__15876;
chunk__14509_15778 = G__15877;
count__14510_15779 = G__15878;
i__14511_15780 = G__15879;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__14613 = cljs.core.seq(node);
var chunk__14614 = null;
var count__14615 = (0);
var i__14616 = (0);
while(true){
if((i__14616 < count__14615)){
var n = chunk__14614.cljs$core$IIndexed$_nth$arity$2(null,i__14616);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__15887 = seq__14613;
var G__15888 = chunk__14614;
var G__15889 = count__14615;
var G__15890 = (i__14616 + (1));
seq__14613 = G__15887;
chunk__14614 = G__15888;
count__14615 = G__15889;
i__14616 = G__15890;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__14613);
if(temp__5823__auto__){
var seq__14613__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14613__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__14613__$1);
var G__15893 = cljs.core.chunk_rest(seq__14613__$1);
var G__15894 = c__5673__auto__;
var G__15895 = cljs.core.count(c__5673__auto__);
var G__15896 = (0);
seq__14613 = G__15893;
chunk__14614 = G__15894;
count__14615 = G__15895;
i__14616 = G__15896;
continue;
} else {
var n = cljs.core.first(seq__14613__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__15897 = cljs.core.next(seq__14613__$1);
var G__15898 = null;
var G__15899 = (0);
var G__15900 = (0);
seq__14613 = G__15897;
chunk__14614 = G__15898;
count__14615 = G__15899;
i__14616 = G__15900;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__14649 = arguments.length;
switch (G__14649) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__14661 = arguments.length;
switch (G__14661) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__14667 = arguments.length;
switch (G__14667) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5142__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute((""+"data-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute((""+"data-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5882__auto__ = [];
var len__5876__auto___15918 = arguments.length;
var i__5877__auto___15919 = (0);
while(true){
if((i__5877__auto___15919 < len__5876__auto___15918)){
args__5882__auto__.push((arguments[i__5877__auto___15919]));

var G__15920 = (i__5877__auto___15919 + (1));
i__5877__auto___15919 = G__15920;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__14707_15924 = cljs.core.seq(nodes);
var chunk__14708_15925 = null;
var count__14709_15926 = (0);
var i__14710_15927 = (0);
while(true){
if((i__14710_15927 < count__14709_15926)){
var node_15930 = chunk__14708_15925.cljs$core$IIndexed$_nth$arity$2(null,i__14710_15927);
fragment.appendChild(shadow.dom._to_dom(node_15930));


var G__15933 = seq__14707_15924;
var G__15934 = chunk__14708_15925;
var G__15935 = count__14709_15926;
var G__15936 = (i__14710_15927 + (1));
seq__14707_15924 = G__15933;
chunk__14708_15925 = G__15934;
count__14709_15926 = G__15935;
i__14710_15927 = G__15936;
continue;
} else {
var temp__5823__auto___15938 = cljs.core.seq(seq__14707_15924);
if(temp__5823__auto___15938){
var seq__14707_15939__$1 = temp__5823__auto___15938;
if(cljs.core.chunked_seq_QMARK_(seq__14707_15939__$1)){
var c__5673__auto___15940 = cljs.core.chunk_first(seq__14707_15939__$1);
var G__15941 = cljs.core.chunk_rest(seq__14707_15939__$1);
var G__15942 = c__5673__auto___15940;
var G__15943 = cljs.core.count(c__5673__auto___15940);
var G__15944 = (0);
seq__14707_15924 = G__15941;
chunk__14708_15925 = G__15942;
count__14709_15926 = G__15943;
i__14710_15927 = G__15944;
continue;
} else {
var node_15945 = cljs.core.first(seq__14707_15939__$1);
fragment.appendChild(shadow.dom._to_dom(node_15945));


var G__15946 = cljs.core.next(seq__14707_15939__$1);
var G__15947 = null;
var G__15948 = (0);
var G__15949 = (0);
seq__14707_15924 = G__15946;
chunk__14708_15925 = G__15947;
count__14709_15926 = G__15948;
i__14710_15927 = G__15949;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq14696){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14696));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__14762_15954 = cljs.core.seq(scripts);
var chunk__14763_15955 = null;
var count__14764_15956 = (0);
var i__14765_15957 = (0);
while(true){
if((i__14765_15957 < count__14764_15956)){
var vec__14788_15958 = chunk__14763_15955.cljs$core$IIndexed$_nth$arity$2(null,i__14765_15957);
var script_tag_15959 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14788_15958,(0),null);
var script_body_15960 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14788_15958,(1),null);
eval(script_body_15960);


var G__15961 = seq__14762_15954;
var G__15962 = chunk__14763_15955;
var G__15963 = count__14764_15956;
var G__15964 = (i__14765_15957 + (1));
seq__14762_15954 = G__15961;
chunk__14763_15955 = G__15962;
count__14764_15956 = G__15963;
i__14765_15957 = G__15964;
continue;
} else {
var temp__5823__auto___15965 = cljs.core.seq(seq__14762_15954);
if(temp__5823__auto___15965){
var seq__14762_15966__$1 = temp__5823__auto___15965;
if(cljs.core.chunked_seq_QMARK_(seq__14762_15966__$1)){
var c__5673__auto___15969 = cljs.core.chunk_first(seq__14762_15966__$1);
var G__15970 = cljs.core.chunk_rest(seq__14762_15966__$1);
var G__15971 = c__5673__auto___15969;
var G__15972 = cljs.core.count(c__5673__auto___15969);
var G__15973 = (0);
seq__14762_15954 = G__15970;
chunk__14763_15955 = G__15971;
count__14764_15956 = G__15972;
i__14765_15957 = G__15973;
continue;
} else {
var vec__14800_15974 = cljs.core.first(seq__14762_15966__$1);
var script_tag_15975 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14800_15974,(0),null);
var script_body_15976 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14800_15974,(1),null);
eval(script_body_15976);


var G__15977 = cljs.core.next(seq__14762_15966__$1);
var G__15978 = null;
var G__15979 = (0);
var G__15980 = (0);
seq__14762_15954 = G__15977;
chunk__14763_15955 = G__15978;
count__14764_15956 = G__15979;
i__14765_15957 = G__15980;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__14812){
var vec__14814 = p__14812;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14814,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14814,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__14859 = arguments.length;
switch (G__14859) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | 0))+"px");
});
shadow.dom.pct = (function shadow$dom$pct(value){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)+"%");
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__14931 = cljs.core.seq(style_keys);
var chunk__14932 = null;
var count__14933 = (0);
var i__14934 = (0);
while(true){
if((i__14934 < count__14933)){
var it = chunk__14932.cljs$core$IIndexed$_nth$arity$2(null,i__14934);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__16016 = seq__14931;
var G__16017 = chunk__14932;
var G__16018 = count__14933;
var G__16019 = (i__14934 + (1));
seq__14931 = G__16016;
chunk__14932 = G__16017;
count__14933 = G__16018;
i__14934 = G__16019;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__14931);
if(temp__5823__auto__){
var seq__14931__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14931__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__14931__$1);
var G__16022 = cljs.core.chunk_rest(seq__14931__$1);
var G__16023 = c__5673__auto__;
var G__16024 = cljs.core.count(c__5673__auto__);
var G__16025 = (0);
seq__14931 = G__16022;
chunk__14932 = G__16023;
count__14933 = G__16024;
i__14934 = G__16025;
continue;
} else {
var it = cljs.core.first(seq__14931__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__16027 = cljs.core.next(seq__14931__$1);
var G__16028 = null;
var G__16029 = (0);
var G__16030 = (0);
seq__14931 = G__16027;
chunk__14932 = G__16028;
count__14933 = G__16029;
i__14934 = G__16030;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5448__auto__,k__5449__auto__){
var self__ = this;
var this__5448__auto____$1 = this;
return this__5448__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5449__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5450__auto__,k14952,else__5451__auto__){
var self__ = this;
var this__5450__auto____$1 = this;
var G__14983 = k14952;
var G__14983__$1 = (((G__14983 instanceof cljs.core.Keyword))?G__14983.fqn:null);
switch (G__14983__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14952,else__5451__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5468__auto__,f__5469__auto__,init__5470__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5471__auto__,p__14994){
var vec__14995 = p__14994;
var k__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14995,(0),null);
var v__5473__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14995,(1),null);
return (f__5469__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5469__auto__.cljs$core$IFn$_invoke$arity$3(ret__5471__auto__,k__5472__auto__,v__5473__auto__) : f__5469__auto__.call(null,ret__5471__auto__,k__5472__auto__,v__5473__auto__));
}),init__5470__auto__,this__5468__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5463__auto__,writer__5464__auto__,opts__5465__auto__){
var self__ = this;
var this__5463__auto____$1 = this;
var pr_pair__5466__auto__ = (function (keyval__5467__auto__){
return cljs.core.pr_sequential_writer(writer__5464__auto__,cljs.core.pr_writer,""," ","",opts__5465__auto__,keyval__5467__auto__);
});
return cljs.core.pr_sequential_writer(writer__5464__auto__,pr_pair__5466__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5465__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14951){
var self__ = this;
var G__14951__$1 = this;
return (new cljs.core.RecordIter((0),G__14951__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5446__auto__){
var self__ = this;
var this__5446__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5443__auto__){
var self__ = this;
var this__5443__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5452__auto__){
var self__ = this;
var this__5452__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5444__auto__){
var self__ = this;
var this__5444__auto____$1 = this;
var h__5251__auto__ = self__.__hash;
if((!((h__5251__auto__ == null)))){
return h__5251__auto__;
} else {
var h__5251__auto____$1 = (function (coll__5445__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5445__auto__));
})(this__5444__auto____$1);
(self__.__hash = h__5251__auto____$1);

return h__5251__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this14953,other14954){
var self__ = this;
var this14953__$1 = this;
return (((!((other14954 == null)))) && ((((this14953__$1.constructor === other14954.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14953__$1.x,other14954.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14953__$1.y,other14954.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14953__$1.__extmap,other14954.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5458__auto__,k__5459__auto__){
var self__ = this;
var this__5458__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5459__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5458__auto____$1),self__.__meta),k__5459__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5459__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5455__auto__,k14952){
var self__ = this;
var this__5455__auto____$1 = this;
var G__15039 = k14952;
var G__15039__$1 = (((G__15039 instanceof cljs.core.Keyword))?G__15039.fqn:null);
switch (G__15039__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k14952);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5456__auto__,k__5457__auto__,G__14951){
var self__ = this;
var this__5456__auto____$1 = this;
var pred__15046 = cljs.core.keyword_identical_QMARK_;
var expr__15047 = k__5457__auto__;
if(cljs.core.truth_((pred__15046.cljs$core$IFn$_invoke$arity$2 ? pred__15046.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__15047) : pred__15046.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__15047)))){
return (new shadow.dom.Coordinate(G__14951,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__15046.cljs$core$IFn$_invoke$arity$2 ? pred__15046.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__15047) : pred__15046.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__15047)))){
return (new shadow.dom.Coordinate(self__.x,G__14951,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5457__auto__,G__14951),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5461__auto__){
var self__ = this;
var this__5461__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5447__auto__,G__14951){
var self__ = this;
var this__5447__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__14951,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5453__auto__,entry__5454__auto__){
var self__ = this;
var this__5453__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5454__auto__)){
return this__5453__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5454__auto__,(0)),cljs.core._nth(entry__5454__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5453__auto____$1,entry__5454__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5494__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5494__auto__,writer__5495__auto__){
return cljs.core._write(writer__5495__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__14968){
var extmap__5490__auto__ = (function (){var G__15064 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__14968,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__14968)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__15064);
} else {
return G__15064;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__14968),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__14968),null,cljs.core.not_empty(extmap__5490__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5448__auto__,k__5449__auto__){
var self__ = this;
var this__5448__auto____$1 = this;
return this__5448__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5449__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5450__auto__,k15083,else__5451__auto__){
var self__ = this;
var this__5450__auto____$1 = this;
var G__15105 = k15083;
var G__15105__$1 = (((G__15105 instanceof cljs.core.Keyword))?G__15105.fqn:null);
switch (G__15105__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k15083,else__5451__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5468__auto__,f__5469__auto__,init__5470__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5471__auto__,p__15107){
var vec__15112 = p__15107;
var k__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15112,(0),null);
var v__5473__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15112,(1),null);
return (f__5469__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5469__auto__.cljs$core$IFn$_invoke$arity$3(ret__5471__auto__,k__5472__auto__,v__5473__auto__) : f__5469__auto__.call(null,ret__5471__auto__,k__5472__auto__,v__5473__auto__));
}),init__5470__auto__,this__5468__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5463__auto__,writer__5464__auto__,opts__5465__auto__){
var self__ = this;
var this__5463__auto____$1 = this;
var pr_pair__5466__auto__ = (function (keyval__5467__auto__){
return cljs.core.pr_sequential_writer(writer__5464__auto__,cljs.core.pr_writer,""," ","",opts__5465__auto__,keyval__5467__auto__);
});
return cljs.core.pr_sequential_writer(writer__5464__auto__,pr_pair__5466__auto__,"#shadow.dom.Size{",", ","}",opts__5465__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15082){
var self__ = this;
var G__15082__$1 = this;
return (new cljs.core.RecordIter((0),G__15082__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5446__auto__){
var self__ = this;
var this__5446__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5443__auto__){
var self__ = this;
var this__5443__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5452__auto__){
var self__ = this;
var this__5452__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5444__auto__){
var self__ = this;
var this__5444__auto____$1 = this;
var h__5251__auto__ = self__.__hash;
if((!((h__5251__auto__ == null)))){
return h__5251__auto__;
} else {
var h__5251__auto____$1 = (function (coll__5445__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5445__auto__));
})(this__5444__auto____$1);
(self__.__hash = h__5251__auto____$1);

return h__5251__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this15084,other15085){
var self__ = this;
var this15084__$1 = this;
return (((!((other15085 == null)))) && ((((this15084__$1.constructor === other15085.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15084__$1.w,other15085.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15084__$1.h,other15085.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15084__$1.__extmap,other15085.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5458__auto__,k__5459__auto__){
var self__ = this;
var this__5458__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5459__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5458__auto____$1),self__.__meta),k__5459__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5459__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5455__auto__,k15083){
var self__ = this;
var this__5455__auto____$1 = this;
var G__15150 = k15083;
var G__15150__$1 = (((G__15150 instanceof cljs.core.Keyword))?G__15150.fqn:null);
switch (G__15150__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k15083);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5456__auto__,k__5457__auto__,G__15082){
var self__ = this;
var this__5456__auto____$1 = this;
var pred__15155 = cljs.core.keyword_identical_QMARK_;
var expr__15156 = k__5457__auto__;
if(cljs.core.truth_((pred__15155.cljs$core$IFn$_invoke$arity$2 ? pred__15155.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__15156) : pred__15155.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__15156)))){
return (new shadow.dom.Size(G__15082,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__15155.cljs$core$IFn$_invoke$arity$2 ? pred__15155.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__15156) : pred__15155.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__15156)))){
return (new shadow.dom.Size(self__.w,G__15082,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5457__auto__,G__15082),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5461__auto__){
var self__ = this;
var this__5461__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5447__auto__,G__15082){
var self__ = this;
var this__5447__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__15082,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5453__auto__,entry__5454__auto__){
var self__ = this;
var this__5453__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5454__auto__)){
return this__5453__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5454__auto__,(0)),cljs.core._nth(entry__5454__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5453__auto____$1,entry__5454__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5494__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5494__auto__,writer__5495__auto__){
return cljs.core._write(writer__5495__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__15092){
var extmap__5490__auto__ = (function (){var G__15173 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__15092,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__15092)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__15173);
} else {
return G__15173;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__15092),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__15092),null,cljs.core.not_empty(extmap__5490__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5738__auto__ = opts;
var l__5739__auto__ = a__5738__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5739__auto__)){
var G__16180 = (i + (1));
var G__16181 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__16180;
ret = G__16181;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__15243){
var vec__15244 = p__15243;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15244,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15244,(1),null);
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))));
}),query_params))));
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__15251 = arguments.length;
switch (G__15251) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5821__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5821__auto__)){
var child = temp__5821__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__16207 = ps;
var G__16208 = (i + (1));
el__$1 = G__16207;
i = G__16208;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__15310 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15310,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15310,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15310,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__15319_16229 = cljs.core.seq(props);
var chunk__15320_16230 = null;
var count__15321_16231 = (0);
var i__15322_16232 = (0);
while(true){
if((i__15322_16232 < count__15321_16231)){
var vec__15344_16235 = chunk__15320_16230.cljs$core$IIndexed$_nth$arity$2(null,i__15322_16232);
var k_16236 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15344_16235,(0),null);
var v_16237 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15344_16235,(1),null);
el.setAttributeNS((function (){var temp__5823__auto__ = cljs.core.namespace(k_16236);
if(cljs.core.truth_(temp__5823__auto__)){
var ns = temp__5823__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_16236),v_16237);


var G__16241 = seq__15319_16229;
var G__16242 = chunk__15320_16230;
var G__16243 = count__15321_16231;
var G__16244 = (i__15322_16232 + (1));
seq__15319_16229 = G__16241;
chunk__15320_16230 = G__16242;
count__15321_16231 = G__16243;
i__15322_16232 = G__16244;
continue;
} else {
var temp__5823__auto___16245 = cljs.core.seq(seq__15319_16229);
if(temp__5823__auto___16245){
var seq__15319_16246__$1 = temp__5823__auto___16245;
if(cljs.core.chunked_seq_QMARK_(seq__15319_16246__$1)){
var c__5673__auto___16248 = cljs.core.chunk_first(seq__15319_16246__$1);
var G__16249 = cljs.core.chunk_rest(seq__15319_16246__$1);
var G__16250 = c__5673__auto___16248;
var G__16251 = cljs.core.count(c__5673__auto___16248);
var G__16252 = (0);
seq__15319_16229 = G__16249;
chunk__15320_16230 = G__16250;
count__15321_16231 = G__16251;
i__15322_16232 = G__16252;
continue;
} else {
var vec__15356_16253 = cljs.core.first(seq__15319_16246__$1);
var k_16254 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15356_16253,(0),null);
var v_16255 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15356_16253,(1),null);
el.setAttributeNS((function (){var temp__5823__auto____$1 = cljs.core.namespace(k_16254);
if(cljs.core.truth_(temp__5823__auto____$1)){
var ns = temp__5823__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_16254),v_16255);


var G__16259 = cljs.core.next(seq__15319_16246__$1);
var G__16260 = null;
var G__16261 = (0);
var G__16262 = (0);
seq__15319_16229 = G__16259;
chunk__15320_16230 = G__16260;
count__15321_16231 = G__16261;
i__15322_16232 = G__16262;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__15377 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15377,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15377,(1),null);
var seq__15383_16266 = cljs.core.seq(node_children);
var chunk__15385_16267 = null;
var count__15386_16268 = (0);
var i__15387_16269 = (0);
while(true){
if((i__15387_16269 < count__15386_16268)){
var child_struct_16270 = chunk__15385_16267.cljs$core$IIndexed$_nth$arity$2(null,i__15387_16269);
if((!((child_struct_16270 == null)))){
if(typeof child_struct_16270 === 'string'){
var text_16272 = (node["textContent"]);
(node["textContent"] = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_16272)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_16270)));
} else {
var children_16274 = shadow.dom.svg_node(child_struct_16270);
if(cljs.core.seq_QMARK_(children_16274)){
var seq__15498_16275 = cljs.core.seq(children_16274);
var chunk__15500_16276 = null;
var count__15501_16277 = (0);
var i__15502_16278 = (0);
while(true){
if((i__15502_16278 < count__15501_16277)){
var child_16280 = chunk__15500_16276.cljs$core$IIndexed$_nth$arity$2(null,i__15502_16278);
if(cljs.core.truth_(child_16280)){
node.appendChild(child_16280);


var G__16281 = seq__15498_16275;
var G__16282 = chunk__15500_16276;
var G__16283 = count__15501_16277;
var G__16284 = (i__15502_16278 + (1));
seq__15498_16275 = G__16281;
chunk__15500_16276 = G__16282;
count__15501_16277 = G__16283;
i__15502_16278 = G__16284;
continue;
} else {
var G__16285 = seq__15498_16275;
var G__16286 = chunk__15500_16276;
var G__16287 = count__15501_16277;
var G__16288 = (i__15502_16278 + (1));
seq__15498_16275 = G__16285;
chunk__15500_16276 = G__16286;
count__15501_16277 = G__16287;
i__15502_16278 = G__16288;
continue;
}
} else {
var temp__5823__auto___16289 = cljs.core.seq(seq__15498_16275);
if(temp__5823__auto___16289){
var seq__15498_16290__$1 = temp__5823__auto___16289;
if(cljs.core.chunked_seq_QMARK_(seq__15498_16290__$1)){
var c__5673__auto___16292 = cljs.core.chunk_first(seq__15498_16290__$1);
var G__16293 = cljs.core.chunk_rest(seq__15498_16290__$1);
var G__16294 = c__5673__auto___16292;
var G__16295 = cljs.core.count(c__5673__auto___16292);
var G__16296 = (0);
seq__15498_16275 = G__16293;
chunk__15500_16276 = G__16294;
count__15501_16277 = G__16295;
i__15502_16278 = G__16296;
continue;
} else {
var child_16299 = cljs.core.first(seq__15498_16290__$1);
if(cljs.core.truth_(child_16299)){
node.appendChild(child_16299);


var G__16301 = cljs.core.next(seq__15498_16290__$1);
var G__16302 = null;
var G__16303 = (0);
var G__16304 = (0);
seq__15498_16275 = G__16301;
chunk__15500_16276 = G__16302;
count__15501_16277 = G__16303;
i__15502_16278 = G__16304;
continue;
} else {
var G__16307 = cljs.core.next(seq__15498_16290__$1);
var G__16308 = null;
var G__16309 = (0);
var G__16310 = (0);
seq__15498_16275 = G__16307;
chunk__15500_16276 = G__16308;
count__15501_16277 = G__16309;
i__15502_16278 = G__16310;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_16274);
}
}


var G__16312 = seq__15383_16266;
var G__16313 = chunk__15385_16267;
var G__16314 = count__15386_16268;
var G__16315 = (i__15387_16269 + (1));
seq__15383_16266 = G__16312;
chunk__15385_16267 = G__16313;
count__15386_16268 = G__16314;
i__15387_16269 = G__16315;
continue;
} else {
var G__16317 = seq__15383_16266;
var G__16318 = chunk__15385_16267;
var G__16319 = count__15386_16268;
var G__16320 = (i__15387_16269 + (1));
seq__15383_16266 = G__16317;
chunk__15385_16267 = G__16318;
count__15386_16268 = G__16319;
i__15387_16269 = G__16320;
continue;
}
} else {
var temp__5823__auto___16325 = cljs.core.seq(seq__15383_16266);
if(temp__5823__auto___16325){
var seq__15383_16326__$1 = temp__5823__auto___16325;
if(cljs.core.chunked_seq_QMARK_(seq__15383_16326__$1)){
var c__5673__auto___16329 = cljs.core.chunk_first(seq__15383_16326__$1);
var G__16330 = cljs.core.chunk_rest(seq__15383_16326__$1);
var G__16331 = c__5673__auto___16329;
var G__16332 = cljs.core.count(c__5673__auto___16329);
var G__16333 = (0);
seq__15383_16266 = G__16330;
chunk__15385_16267 = G__16331;
count__15386_16268 = G__16332;
i__15387_16269 = G__16333;
continue;
} else {
var child_struct_16335 = cljs.core.first(seq__15383_16326__$1);
if((!((child_struct_16335 == null)))){
if(typeof child_struct_16335 === 'string'){
var text_16338 = (node["textContent"]);
(node["textContent"] = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_16338)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_16335)));
} else {
var children_16339 = shadow.dom.svg_node(child_struct_16335);
if(cljs.core.seq_QMARK_(children_16339)){
var seq__15541_16342 = cljs.core.seq(children_16339);
var chunk__15543_16343 = null;
var count__15544_16344 = (0);
var i__15545_16345 = (0);
while(true){
if((i__15545_16345 < count__15544_16344)){
var child_16347 = chunk__15543_16343.cljs$core$IIndexed$_nth$arity$2(null,i__15545_16345);
if(cljs.core.truth_(child_16347)){
node.appendChild(child_16347);


var G__16353 = seq__15541_16342;
var G__16354 = chunk__15543_16343;
var G__16355 = count__15544_16344;
var G__16356 = (i__15545_16345 + (1));
seq__15541_16342 = G__16353;
chunk__15543_16343 = G__16354;
count__15544_16344 = G__16355;
i__15545_16345 = G__16356;
continue;
} else {
var G__16358 = seq__15541_16342;
var G__16359 = chunk__15543_16343;
var G__16360 = count__15544_16344;
var G__16361 = (i__15545_16345 + (1));
seq__15541_16342 = G__16358;
chunk__15543_16343 = G__16359;
count__15544_16344 = G__16360;
i__15545_16345 = G__16361;
continue;
}
} else {
var temp__5823__auto___16363__$1 = cljs.core.seq(seq__15541_16342);
if(temp__5823__auto___16363__$1){
var seq__15541_16367__$1 = temp__5823__auto___16363__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15541_16367__$1)){
var c__5673__auto___16372 = cljs.core.chunk_first(seq__15541_16367__$1);
var G__16376 = cljs.core.chunk_rest(seq__15541_16367__$1);
var G__16377 = c__5673__auto___16372;
var G__16378 = cljs.core.count(c__5673__auto___16372);
var G__16379 = (0);
seq__15541_16342 = G__16376;
chunk__15543_16343 = G__16377;
count__15544_16344 = G__16378;
i__15545_16345 = G__16379;
continue;
} else {
var child_16383 = cljs.core.first(seq__15541_16367__$1);
if(cljs.core.truth_(child_16383)){
node.appendChild(child_16383);


var G__16391 = cljs.core.next(seq__15541_16367__$1);
var G__16392 = null;
var G__16393 = (0);
var G__16394 = (0);
seq__15541_16342 = G__16391;
chunk__15543_16343 = G__16392;
count__15544_16344 = G__16393;
i__15545_16345 = G__16394;
continue;
} else {
var G__16395 = cljs.core.next(seq__15541_16367__$1);
var G__16396 = null;
var G__16397 = (0);
var G__16398 = (0);
seq__15541_16342 = G__16395;
chunk__15543_16343 = G__16396;
count__15544_16344 = G__16397;
i__15545_16345 = G__16398;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_16339);
}
}


var G__16399 = cljs.core.next(seq__15383_16326__$1);
var G__16400 = null;
var G__16401 = (0);
var G__16402 = (0);
seq__15383_16266 = G__16399;
chunk__15385_16267 = G__16400;
count__15386_16268 = G__16401;
i__15387_16269 = G__16402;
continue;
} else {
var G__16403 = cljs.core.next(seq__15383_16326__$1);
var G__16404 = null;
var G__16405 = (0);
var G__16406 = (0);
seq__15383_16266 = G__16403;
chunk__15385_16267 = G__16404;
count__15386_16268 = G__16405;
i__15387_16269 = G__16406;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5882__auto__ = [];
var len__5876__auto___16413 = arguments.length;
var i__5877__auto___16415 = (0);
while(true){
if((i__5877__auto___16415 < len__5876__auto___16413)){
args__5882__auto__.push((arguments[i__5877__auto___16415]));

var G__16416 = (i__5877__auto___16415 + (1));
i__5877__auto___16415 = G__16416;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq15585){
var G__15586 = cljs.core.first(seq15585);
var seq15585__$1 = cljs.core.next(seq15585);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15586,seq15585__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
