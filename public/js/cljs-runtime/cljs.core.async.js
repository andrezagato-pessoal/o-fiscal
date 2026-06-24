goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15292 = (function (f,blockable,meta15293){
this.f = f;
this.blockable = blockable;
this.meta15293 = meta15293;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15292.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15294,meta15293__$1){
var self__ = this;
var _15294__$1 = this;
return (new cljs.core.async.t_cljs$core$async15292(self__.f,self__.blockable,meta15293__$1));
}));

(cljs.core.async.t_cljs$core$async15292.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15294){
var self__ = this;
var _15294__$1 = this;
return self__.meta15293;
}));

(cljs.core.async.t_cljs$core$async15292.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15292.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15292.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async15292.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async15292.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta15293","meta15293",-1298881470,null)], null);
}));

(cljs.core.async.t_cljs$core$async15292.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15292.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15292");

(cljs.core.async.t_cljs$core$async15292.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async15292");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15292.
 */
cljs.core.async.__GT_t_cljs$core$async15292 = (function cljs$core$async$__GT_t_cljs$core$async15292(f,blockable,meta15293){
return (new cljs.core.async.t_cljs$core$async15292(f,blockable,meta15293));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__15289 = arguments.length;
switch (G__15289) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async15292(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__15343 = arguments.length;
switch (G__15343) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error((""+"Assert failed: "+"buffer must be supplied when transducer is"+"\n"+"buf-or-n")));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed, then return the value (or nil) forever. See chan for the
 *   semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__15375 = arguments.length;
switch (G__15375) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__15435 = arguments.length;
switch (G__15435) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_19836 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_19836) : fn1.call(null,val_19836));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_19836) : fn1.call(null,val_19836));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__15486 = arguments.length;
switch (G__15486) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5821__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5821__auto__)){
var ret = temp__5821__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5821__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5821__auto__)){
var retb = temp__5821__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5741__auto___19840 = n;
var x_19841 = (0);
while(true){
if((x_19841 < n__5741__auto___19840)){
(a[x_19841] = x_19841);

var G__19843 = (x_19841 + (1));
x_19841 = G__19843;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15527 = (function (flag,meta15528){
this.flag = flag;
this.meta15528 = meta15528;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15527.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15529,meta15528__$1){
var self__ = this;
var _15529__$1 = this;
return (new cljs.core.async.t_cljs$core$async15527(self__.flag,meta15528__$1));
}));

(cljs.core.async.t_cljs$core$async15527.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15529){
var self__ = this;
var _15529__$1 = this;
return self__.meta15528;
}));

(cljs.core.async.t_cljs$core$async15527.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15527.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async15527.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15527.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async15527.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta15528","meta15528",-860013120,null)], null);
}));

(cljs.core.async.t_cljs$core$async15527.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15527.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15527");

(cljs.core.async.t_cljs$core$async15527.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async15527");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15527.
 */
cljs.core.async.__GT_t_cljs$core$async15527 = (function cljs$core$async$__GT_t_cljs$core$async15527(flag,meta15528){
return (new cljs.core.async.t_cljs$core$async15527(flag,meta15528));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async15527(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15567 = (function (flag,cb,meta15568){
this.flag = flag;
this.cb = cb;
this.meta15568 = meta15568;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15567.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15569,meta15568__$1){
var self__ = this;
var _15569__$1 = this;
return (new cljs.core.async.t_cljs$core$async15567(self__.flag,self__.cb,meta15568__$1));
}));

(cljs.core.async.t_cljs$core$async15567.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15569){
var self__ = this;
var _15569__$1 = this;
return self__.meta15568;
}));

(cljs.core.async.t_cljs$core$async15567.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15567.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async15567.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15567.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async15567.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta15568","meta15568",-2006246141,null)], null);
}));

(cljs.core.async.t_cljs$core$async15567.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15567.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15567");

(cljs.core.async.t_cljs$core$async15567.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async15567");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15567.
 */
cljs.core.async.__GT_t_cljs$core$async15567 = (function cljs$core$async$__GT_t_cljs$core$async15567(flag,cb,meta15568){
return (new cljs.core.async.t_cljs$core$async15567(flag,cb,meta15568));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async15567(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error((""+"Assert failed: "+"alts must have at least one channel operation"+"\n"+"(pos? (count ports))")));
}

var flag = cljs.core.async.alt_flag();
var ports__$1 = cljs.core.vec(ports);
var n = cljs.core.count(ports__$1);
var _ = (function (){var i = (0);
while(true){
if((i < n)){
var port_19862 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,i);
if(cljs.core.vector_QMARK_(port_19862)){
if((!(((port_19862.cljs$core$IFn$_invoke$arity$1 ? port_19862.cljs$core$IFn$_invoke$arity$1((1)) : port_19862.call(null,(1))) == null)))){
} else {
throw (new Error((""+"Assert failed: "+"can't put nil on channel"+"\n"+"(some? (port 1))")));
}
} else {
}

var G__19863 = (i + (1));
i = G__19863;
continue;
} else {
return null;
}
break;
}
})();
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__15594_SHARP_){
var G__15608 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15594_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15608) : fret.call(null,G__15608));
});})(i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__15595_SHARP_){
var G__15617 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15595_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15617) : fret.call(null,G__15617));
});})(i,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5142__auto__ = wport;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return port;
}
})()], null));
} else {
var G__19871 = (i + (1));
i = G__19871;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5142__auto__ = ret;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5823__auto__ = (function (){var and__5140__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5140__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var got = temp__5823__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___19872 = arguments.length;
var i__5877__auto___19873 = (0);
while(true){
if((i__5877__auto___19873 < len__5876__auto___19872)){
args__5882__auto__.push((arguments[i__5877__auto___19873]));

var G__19875 = (i__5877__auto___19873 + (1));
i__5877__auto___19873 = G__19875;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__15638){
var map__15641 = p__15638;
var map__15641__$1 = cljs.core.__destructure_map(map__15641);
var opts = map__15641__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq15632){
var G__15633 = cljs.core.first(seq15632);
var seq15632__$1 = cljs.core.next(seq15632);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15633,seq15632__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__15664 = arguments.length;
switch (G__15664) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__15167__auto___19885 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15168__auto__ = (function (){var switch__13794__auto__ = (function (state_15766){
var state_val_15767 = (state_15766[(1)]);
if((state_val_15767 === (7))){
var inst_15754 = (state_15766[(2)]);
var state_15766__$1 = state_15766;
var statearr_15788_19887 = state_15766__$1;
(statearr_15788_19887[(2)] = inst_15754);

(statearr_15788_19887[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15767 === (1))){
var state_15766__$1 = state_15766;
var statearr_15799_19888 = state_15766__$1;
(statearr_15799_19888[(2)] = null);

(statearr_15799_19888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15767 === (4))){
var inst_15723 = (state_15766[(7)]);
var inst_15723__$1 = (state_15766[(2)]);
var inst_15729 = (inst_15723__$1 == null);
var state_15766__$1 = (function (){var statearr_15829 = state_15766;
(statearr_15829[(7)] = inst_15723__$1);

return statearr_15829;
})();
if(cljs.core.truth_(inst_15729)){
var statearr_15839_19890 = state_15766__$1;
(statearr_15839_19890[(1)] = (5));

} else {
var statearr_15842_19891 = state_15766__$1;
(statearr_15842_19891[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15767 === (13))){
var state_15766__$1 = state_15766;
var statearr_15857_19893 = state_15766__$1;
(statearr_15857_19893[(2)] = null);

(statearr_15857_19893[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15767 === (6))){
var inst_15723 = (state_15766[(7)]);
var state_15766__$1 = state_15766;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15766__$1,(11),to,inst_15723);
} else {
if((state_val_15767 === (3))){
var inst_15759 = (state_15766[(2)]);
var state_15766__$1 = state_15766;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15766__$1,inst_15759);
} else {
if((state_val_15767 === (12))){
var state_15766__$1 = state_15766;
var statearr_15882_19894 = state_15766__$1;
(statearr_15882_19894[(2)] = null);

(statearr_15882_19894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15767 === (2))){
var state_15766__$1 = state_15766;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15766__$1,(4),from);
} else {
if((state_val_15767 === (11))){
var inst_15742 = (state_15766[(2)]);
var state_15766__$1 = state_15766;
if(cljs.core.truth_(inst_15742)){
var statearr_15892_19895 = state_15766__$1;
(statearr_15892_19895[(1)] = (12));

} else {
var statearr_15901_19897 = state_15766__$1;
(statearr_15901_19897[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15767 === (9))){
var state_15766__$1 = state_15766;
var statearr_15903_19898 = state_15766__$1;
(statearr_15903_19898[(2)] = null);

(statearr_15903_19898[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15767 === (5))){
var state_15766__$1 = state_15766;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15907_19899 = state_15766__$1;
(statearr_15907_19899[(1)] = (8));

} else {
var statearr_15909_19900 = state_15766__$1;
(statearr_15909_19900[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15767 === (14))){
var inst_15752 = (state_15766[(2)]);
var state_15766__$1 = state_15766;
var statearr_15912_19909 = state_15766__$1;
(statearr_15912_19909[(2)] = inst_15752);

(statearr_15912_19909[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15767 === (10))){
var inst_15739 = (state_15766[(2)]);
var state_15766__$1 = state_15766;
var statearr_15915_19911 = state_15766__$1;
(statearr_15915_19911[(2)] = inst_15739);

(statearr_15915_19911[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15767 === (8))){
var inst_15735 = cljs.core.async.close_BANG_(to);
var state_15766__$1 = state_15766;
var statearr_15916_19912 = state_15766__$1;
(statearr_15916_19912[(2)] = inst_15735);

(statearr_15916_19912[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13795__auto__ = null;
var cljs$core$async$state_machine__13795__auto____0 = (function (){
var statearr_15921 = [null,null,null,null,null,null,null,null];
(statearr_15921[(0)] = cljs$core$async$state_machine__13795__auto__);

(statearr_15921[(1)] = (1));

return statearr_15921;
});
var cljs$core$async$state_machine__13795__auto____1 = (function (state_15766){
while(true){
var ret_value__13796__auto__ = (function (){try{while(true){
var result__13797__auto__ = switch__13794__auto__(state_15766);
if(cljs.core.keyword_identical_QMARK_(result__13797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13797__auto__;
}
break;
}
}catch (e15928){var ex__13799__auto__ = e15928;
var statearr_15929_19914 = state_15766;
(statearr_15929_19914[(2)] = ex__13799__auto__);


if(cljs.core.seq((state_15766[(4)]))){
var statearr_15937_19915 = state_15766;
(statearr_15937_19915[(1)] = cljs.core.first((state_15766[(4)])));

} else {
throw ex__13799__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19917 = state_15766;
state_15766 = G__19917;
continue;
} else {
return ret_value__13796__auto__;
}
break;
}
});
cljs$core$async$state_machine__13795__auto__ = function(state_15766){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13795__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13795__auto____1.call(this,state_15766);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13795__auto____0;
cljs$core$async$state_machine__13795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13795__auto____1;
return cljs$core$async$state_machine__13795__auto__;
})()
})();
var state__15169__auto__ = (function (){var statearr_15950 = f__15168__auto__();
(statearr_15950[(6)] = c__15167__auto___19885);

return statearr_15950;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15169__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__15982){
var vec__15983 = p__15982;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15983,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15983,(1),null);
var job = vec__15983;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__15167__auto___19918 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15168__auto__ = (function (){var switch__13794__auto__ = (function (state_15996){
var state_val_15997 = (state_15996[(1)]);
if((state_val_15997 === (1))){
var state_15996__$1 = state_15996;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15996__$1,(2),res,v);
} else {
if((state_val_15997 === (2))){
var inst_15991 = (state_15996[(2)]);
var inst_15994 = cljs.core.async.close_BANG_(res);
var state_15996__$1 = (function (){var statearr_16002 = state_15996;
(statearr_16002[(7)] = inst_15991);

return statearr_16002;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15996__$1,inst_15994);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13795__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13795__auto____0 = (function (){
var statearr_16010 = [null,null,null,null,null,null,null,null];
(statearr_16010[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13795__auto__);

(statearr_16010[(1)] = (1));

return statearr_16010;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13795__auto____1 = (function (state_15996){
while(true){
var ret_value__13796__auto__ = (function (){try{while(true){
var result__13797__auto__ = switch__13794__auto__(state_15996);
if(cljs.core.keyword_identical_QMARK_(result__13797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13797__auto__;
}
break;
}
}catch (e16013){var ex__13799__auto__ = e16013;
var statearr_16014_19919 = state_15996;
(statearr_16014_19919[(2)] = ex__13799__auto__);


if(cljs.core.seq((state_15996[(4)]))){
var statearr_16015_19920 = state_15996;
(statearr_16015_19920[(1)] = cljs.core.first((state_15996[(4)])));

} else {
throw ex__13799__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19921 = state_15996;
state_15996 = G__19921;
continue;
} else {
return ret_value__13796__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13795__auto__ = function(state_15996){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13795__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13795__auto____1.call(this,state_15996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13795__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13795__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13795__auto__;
})()
})();
var state__15169__auto__ = (function (){var statearr_16021 = f__15168__auto__();
(statearr_16021[(6)] = c__15167__auto___19918);

return statearr_16021;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15169__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__16033){
var vec__16034 = p__16033;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16034,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16034,(1),null);
var job = vec__16034;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5741__auto___19929 = n;
var __19930 = (0);
while(true){
if((__19930 < n__5741__auto___19929)){
var G__16039_19931 = type;
var G__16039_19932__$1 = (((G__16039_19931 instanceof cljs.core.Keyword))?G__16039_19931.fqn:null);
switch (G__16039_19932__$1) {
case "compute":
var c__15167__auto___19934 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__19930,c__15167__auto___19934,G__16039_19931,G__16039_19932__$1,n__5741__auto___19929,jobs,results,process__$1,async){
return (function (){
var f__15168__auto__ = (function (){var switch__13794__auto__ = ((function (__19930,c__15167__auto___19934,G__16039_19931,G__16039_19932__$1,n__5741__auto___19929,jobs,results,process__$1,async){
return (function (state_16057){
var state_val_16058 = (state_16057[(1)]);
if((state_val_16058 === (1))){
var state_16057__$1 = state_16057;
var statearr_16065_19935 = state_16057__$1;
(statearr_16065_19935[(2)] = null);

(statearr_16065_19935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16058 === (2))){
var state_16057__$1 = state_16057;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16057__$1,(4),jobs);
} else {
if((state_val_16058 === (3))){
var inst_16055 = (state_16057[(2)]);
var state_16057__$1 = state_16057;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16057__$1,inst_16055);
} else {
if((state_val_16058 === (4))){
var inst_16046 = (state_16057[(2)]);
var inst_16048 = process__$1(inst_16046);
var state_16057__$1 = state_16057;
if(cljs.core.truth_(inst_16048)){
var statearr_16066_19937 = state_16057__$1;
(statearr_16066_19937[(1)] = (5));

} else {
var statearr_16067_19938 = state_16057__$1;
(statearr_16067_19938[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16058 === (5))){
var state_16057__$1 = state_16057;
var statearr_16068_19939 = state_16057__$1;
(statearr_16068_19939[(2)] = null);

(statearr_16068_19939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16058 === (6))){
var state_16057__$1 = state_16057;
var statearr_16069_19940 = state_16057__$1;
(statearr_16069_19940[(2)] = null);

(statearr_16069_19940[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16058 === (7))){
var inst_16053 = (state_16057[(2)]);
var state_16057__$1 = state_16057;
var statearr_16070_19941 = state_16057__$1;
(statearr_16070_19941[(2)] = inst_16053);

(statearr_16070_19941[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__19930,c__15167__auto___19934,G__16039_19931,G__16039_19932__$1,n__5741__auto___19929,jobs,results,process__$1,async))
;
return ((function (__19930,switch__13794__auto__,c__15167__auto___19934,G__16039_19931,G__16039_19932__$1,n__5741__auto___19929,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13795__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13795__auto____0 = (function (){
var statearr_16072 = [null,null,null,null,null,null,null];
(statearr_16072[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13795__auto__);

(statearr_16072[(1)] = (1));

return statearr_16072;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13795__auto____1 = (function (state_16057){
while(true){
var ret_value__13796__auto__ = (function (){try{while(true){
var result__13797__auto__ = switch__13794__auto__(state_16057);
if(cljs.core.keyword_identical_QMARK_(result__13797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13797__auto__;
}
break;
}
}catch (e16073){var ex__13799__auto__ = e16073;
var statearr_16074_19951 = state_16057;
(statearr_16074_19951[(2)] = ex__13799__auto__);


if(cljs.core.seq((state_16057[(4)]))){
var statearr_16075_19952 = state_16057;
(statearr_16075_19952[(1)] = cljs.core.first((state_16057[(4)])));

} else {
throw ex__13799__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19953 = state_16057;
state_16057 = G__19953;
continue;
} else {
return ret_value__13796__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13795__auto__ = function(state_16057){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13795__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13795__auto____1.call(this,state_16057);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13795__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13795__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13795__auto__;
})()
;})(__19930,switch__13794__auto__,c__15167__auto___19934,G__16039_19931,G__16039_19932__$1,n__5741__auto___19929,jobs,results,process__$1,async))
})();
var state__15169__auto__ = (function (){var statearr_16080 = f__15168__auto__();
(statearr_16080[(6)] = c__15167__auto___19934);

return statearr_16080;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15169__auto__);
});})(__19930,c__15167__auto___19934,G__16039_19931,G__16039_19932__$1,n__5741__auto___19929,jobs,results,process__$1,async))
);


break;
case "async":
var c__15167__auto___19954 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__19930,c__15167__auto___19954,G__16039_19931,G__16039_19932__$1,n__5741__auto___19929,jobs,results,process__$1,async){
return (function (){
var f__15168__auto__ = (function (){var switch__13794__auto__ = ((function (__19930,c__15167__auto___19954,G__16039_19931,G__16039_19932__$1,n__5741__auto___19929,jobs,results,process__$1,async){
return (function (state_16095){
var state_val_16096 = (state_16095[(1)]);
if((state_val_16096 === (1))){
var state_16095__$1 = state_16095;
var statearr_16103_19955 = state_16095__$1;
(statearr_16103_19955[(2)] = null);

(statearr_16103_19955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16096 === (2))){
var state_16095__$1 = state_16095;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16095__$1,(4),jobs);
} else {
if((state_val_16096 === (3))){
var inst_16093 = (state_16095[(2)]);
var state_16095__$1 = state_16095;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16095__$1,inst_16093);
} else {
if((state_val_16096 === (4))){
var inst_16085 = (state_16095[(2)]);
var inst_16086 = async(inst_16085);
var state_16095__$1 = state_16095;
if(cljs.core.truth_(inst_16086)){
var statearr_16115_19960 = state_16095__$1;
(statearr_16115_19960[(1)] = (5));

} else {
var statearr_16116_19961 = state_16095__$1;
(statearr_16116_19961[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16096 === (5))){
var state_16095__$1 = state_16095;
var statearr_16117_19962 = state_16095__$1;
(statearr_16117_19962[(2)] = null);

(statearr_16117_19962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16096 === (6))){
var state_16095__$1 = state_16095;
var statearr_16120_19963 = state_16095__$1;
(statearr_16120_19963[(2)] = null);

(statearr_16120_19963[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16096 === (7))){
var inst_16091 = (state_16095[(2)]);
var state_16095__$1 = state_16095;
var statearr_16122_19965 = state_16095__$1;
(statearr_16122_19965[(2)] = inst_16091);

(statearr_16122_19965[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__19930,c__15167__auto___19954,G__16039_19931,G__16039_19932__$1,n__5741__auto___19929,jobs,results,process__$1,async))
;
return ((function (__19930,switch__13794__auto__,c__15167__auto___19954,G__16039_19931,G__16039_19932__$1,n__5741__auto___19929,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13795__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13795__auto____0 = (function (){
var statearr_16123 = [null,null,null,null,null,null,null];
(statearr_16123[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13795__auto__);

(statearr_16123[(1)] = (1));

return statearr_16123;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13795__auto____1 = (function (state_16095){
while(true){
var ret_value__13796__auto__ = (function (){try{while(true){
var result__13797__auto__ = switch__13794__auto__(state_16095);
if(cljs.core.keyword_identical_QMARK_(result__13797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13797__auto__;
}
break;
}
}catch (e16127){var ex__13799__auto__ = e16127;
var statearr_16129_19971 = state_16095;
(statearr_16129_19971[(2)] = ex__13799__auto__);


if(cljs.core.seq((state_16095[(4)]))){
var statearr_16131_19973 = state_16095;
(statearr_16131_19973[(1)] = cljs.core.first((state_16095[(4)])));

} else {
throw ex__13799__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19974 = state_16095;
state_16095 = G__19974;
continue;
} else {
return ret_value__13796__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13795__auto__ = function(state_16095){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13795__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13795__auto____1.call(this,state_16095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13795__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13795__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13795__auto__;
})()
;})(__19930,switch__13794__auto__,c__15167__auto___19954,G__16039_19931,G__16039_19932__$1,n__5741__auto___19929,jobs,results,process__$1,async))
})();
var state__15169__auto__ = (function (){var statearr_16133 = f__15168__auto__();
(statearr_16133[(6)] = c__15167__auto___19954);

return statearr_16133;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15169__auto__);
});})(__19930,c__15167__auto___19954,G__16039_19931,G__16039_19932__$1,n__5741__auto___19929,jobs,results,process__$1,async))
);


break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16039_19932__$1))));

}

var G__19977 = (__19930 + (1));
__19930 = G__19977;
continue;
} else {
}
break;
}

var c__15167__auto___19978 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15168__auto__ = (function (){var switch__13794__auto__ = (function (state_16172){
var state_val_16173 = (state_16172[(1)]);
if((state_val_16173 === (7))){
var inst_16158 = (state_16172[(2)]);
var state_16172__$1 = state_16172;
var statearr_16189_19980 = state_16172__$1;
(statearr_16189_19980[(2)] = inst_16158);

(statearr_16189_19980[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16173 === (1))){
var state_16172__$1 = state_16172;
var statearr_16194_19981 = state_16172__$1;
(statearr_16194_19981[(2)] = null);

(statearr_16194_19981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16173 === (4))){
var inst_16139 = (state_16172[(7)]);
var inst_16139__$1 = (state_16172[(2)]);
var inst_16141 = (inst_16139__$1 == null);
var state_16172__$1 = (function (){var statearr_16196 = state_16172;
(statearr_16196[(7)] = inst_16139__$1);

return statearr_16196;
})();
if(cljs.core.truth_(inst_16141)){
var statearr_16197_19982 = state_16172__$1;
(statearr_16197_19982[(1)] = (5));

} else {
var statearr_16206_19983 = state_16172__$1;
(statearr_16206_19983[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16173 === (6))){
var inst_16139 = (state_16172[(7)]);
var inst_16145 = (state_16172[(8)]);
var inst_16145__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_16146 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16148 = [inst_16139,inst_16145__$1];
var inst_16149 = (new cljs.core.PersistentVector(null,2,(5),inst_16146,inst_16148,null));
var state_16172__$1 = (function (){var statearr_16215 = state_16172;
(statearr_16215[(8)] = inst_16145__$1);

return statearr_16215;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16172__$1,(8),jobs,inst_16149);
} else {
if((state_val_16173 === (3))){
var inst_16160 = (state_16172[(2)]);
var state_16172__$1 = state_16172;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16172__$1,inst_16160);
} else {
if((state_val_16173 === (2))){
var state_16172__$1 = state_16172;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16172__$1,(4),from);
} else {
if((state_val_16173 === (9))){
var inst_16155 = (state_16172[(2)]);
var state_16172__$1 = (function (){var statearr_16228 = state_16172;
(statearr_16228[(9)] = inst_16155);

return statearr_16228;
})();
var statearr_16234_19984 = state_16172__$1;
(statearr_16234_19984[(2)] = null);

(statearr_16234_19984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16173 === (5))){
var inst_16143 = cljs.core.async.close_BANG_(jobs);
var state_16172__$1 = state_16172;
var statearr_16240_19985 = state_16172__$1;
(statearr_16240_19985[(2)] = inst_16143);

(statearr_16240_19985[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16173 === (8))){
var inst_16145 = (state_16172[(8)]);
var inst_16153 = (state_16172[(2)]);
var state_16172__$1 = (function (){var statearr_16247 = state_16172;
(statearr_16247[(10)] = inst_16153);

return statearr_16247;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16172__$1,(9),results,inst_16145);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13795__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13795__auto____0 = (function (){
var statearr_16258 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16258[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13795__auto__);

(statearr_16258[(1)] = (1));

return statearr_16258;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13795__auto____1 = (function (state_16172){
while(true){
var ret_value__13796__auto__ = (function (){try{while(true){
var result__13797__auto__ = switch__13794__auto__(state_16172);
if(cljs.core.keyword_identical_QMARK_(result__13797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13797__auto__;
}
break;
}
}catch (e16263){var ex__13799__auto__ = e16263;
var statearr_16264_19986 = state_16172;
(statearr_16264_19986[(2)] = ex__13799__auto__);


if(cljs.core.seq((state_16172[(4)]))){
var statearr_16265_19987 = state_16172;
(statearr_16265_19987[(1)] = cljs.core.first((state_16172[(4)])));

} else {
throw ex__13799__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19988 = state_16172;
state_16172 = G__19988;
continue;
} else {
return ret_value__13796__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13795__auto__ = function(state_16172){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13795__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13795__auto____1.call(this,state_16172);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13795__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13795__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13795__auto__;
})()
})();
var state__15169__auto__ = (function (){var statearr_16279 = f__15168__auto__();
(statearr_16279[(6)] = c__15167__auto___19978);

return statearr_16279;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15169__auto__);
}));


var c__15167__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15168__auto__ = (function (){var switch__13794__auto__ = (function (state_16387){
var state_val_16390 = (state_16387[(1)]);
if((state_val_16390 === (7))){
var inst_16375 = (state_16387[(2)]);
var state_16387__$1 = state_16387;
var statearr_16407_19994 = state_16387__$1;
(statearr_16407_19994[(2)] = inst_16375);

(statearr_16407_19994[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16390 === (20))){
var state_16387__$1 = state_16387;
var statearr_16409_19995 = state_16387__$1;
(statearr_16409_19995[(2)] = null);

(statearr_16409_19995[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16390 === (1))){
var state_16387__$1 = state_16387;
var statearr_16414_19996 = state_16387__$1;
(statearr_16414_19996[(2)] = null);

(statearr_16414_19996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16390 === (4))){
var inst_16300 = (state_16387[(7)]);
var inst_16300__$1 = (state_16387[(2)]);
var inst_16305 = (inst_16300__$1 == null);
var state_16387__$1 = (function (){var statearr_16417 = state_16387;
(statearr_16417[(7)] = inst_16300__$1);

return statearr_16417;
})();
if(cljs.core.truth_(inst_16305)){
var statearr_16418_19998 = state_16387__$1;
(statearr_16418_19998[(1)] = (5));

} else {
var statearr_16419_19999 = state_16387__$1;
(statearr_16419_19999[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16390 === (15))){
var inst_16337 = (state_16387[(8)]);
var state_16387__$1 = state_16387;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16387__$1,(18),to,inst_16337);
} else {
if((state_val_16390 === (21))){
var inst_16366 = (state_16387[(2)]);
var state_16387__$1 = state_16387;
var statearr_16421_20006 = state_16387__$1;
(statearr_16421_20006[(2)] = inst_16366);

(statearr_16421_20006[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16390 === (13))){
var inst_16369 = (state_16387[(2)]);
var state_16387__$1 = (function (){var statearr_16423 = state_16387;
(statearr_16423[(9)] = inst_16369);

return statearr_16423;
})();
var statearr_16424_20007 = state_16387__$1;
(statearr_16424_20007[(2)] = null);

(statearr_16424_20007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16390 === (6))){
var inst_16300 = (state_16387[(7)]);
var state_16387__$1 = state_16387;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16387__$1,(11),inst_16300);
} else {
if((state_val_16390 === (17))){
var inst_16352 = (state_16387[(2)]);
var state_16387__$1 = state_16387;
if(cljs.core.truth_(inst_16352)){
var statearr_16427_20009 = state_16387__$1;
(statearr_16427_20009[(1)] = (19));

} else {
var statearr_16428_20010 = state_16387__$1;
(statearr_16428_20010[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16390 === (3))){
var inst_16381 = (state_16387[(2)]);
var state_16387__$1 = state_16387;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16387__$1,inst_16381);
} else {
if((state_val_16390 === (12))){
var inst_16328 = (state_16387[(10)]);
var state_16387__$1 = state_16387;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16387__$1,(14),inst_16328);
} else {
if((state_val_16390 === (2))){
var state_16387__$1 = state_16387;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16387__$1,(4),results);
} else {
if((state_val_16390 === (19))){
var state_16387__$1 = state_16387;
var statearr_16433_20012 = state_16387__$1;
(statearr_16433_20012[(2)] = null);

(statearr_16433_20012[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16390 === (11))){
var inst_16328 = (state_16387[(2)]);
var state_16387__$1 = (function (){var statearr_16436 = state_16387;
(statearr_16436[(10)] = inst_16328);

return statearr_16436;
})();
var statearr_16437_20013 = state_16387__$1;
(statearr_16437_20013[(2)] = null);

(statearr_16437_20013[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16390 === (9))){
var state_16387__$1 = state_16387;
var statearr_16442_20014 = state_16387__$1;
(statearr_16442_20014[(2)] = null);

(statearr_16442_20014[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16390 === (5))){
var state_16387__$1 = state_16387;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16448_20016 = state_16387__$1;
(statearr_16448_20016[(1)] = (8));

} else {
var statearr_16450_20017 = state_16387__$1;
(statearr_16450_20017[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16390 === (14))){
var inst_16337 = (state_16387[(8)]);
var inst_16341 = (state_16387[(11)]);
var inst_16337__$1 = (state_16387[(2)]);
var inst_16340 = (inst_16337__$1 == null);
var inst_16341__$1 = cljs.core.not(inst_16340);
var state_16387__$1 = (function (){var statearr_16452 = state_16387;
(statearr_16452[(8)] = inst_16337__$1);

(statearr_16452[(11)] = inst_16341__$1);

return statearr_16452;
})();
if(inst_16341__$1){
var statearr_16453_20018 = state_16387__$1;
(statearr_16453_20018[(1)] = (15));

} else {
var statearr_16454_20019 = state_16387__$1;
(statearr_16454_20019[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16390 === (16))){
var inst_16341 = (state_16387[(11)]);
var state_16387__$1 = state_16387;
var statearr_16455_20020 = state_16387__$1;
(statearr_16455_20020[(2)] = inst_16341);

(statearr_16455_20020[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16390 === (10))){
var inst_16323 = (state_16387[(2)]);
var state_16387__$1 = state_16387;
var statearr_16457_20021 = state_16387__$1;
(statearr_16457_20021[(2)] = inst_16323);

(statearr_16457_20021[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16390 === (18))){
var inst_16349 = (state_16387[(2)]);
var state_16387__$1 = state_16387;
var statearr_16458_20022 = state_16387__$1;
(statearr_16458_20022[(2)] = inst_16349);

(statearr_16458_20022[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16390 === (8))){
var inst_16316 = cljs.core.async.close_BANG_(to);
var state_16387__$1 = state_16387;
var statearr_16461_20024 = state_16387__$1;
(statearr_16461_20024[(2)] = inst_16316);

(statearr_16461_20024[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13795__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13795__auto____0 = (function (){
var statearr_16466 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16466[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13795__auto__);

(statearr_16466[(1)] = (1));

return statearr_16466;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13795__auto____1 = (function (state_16387){
while(true){
var ret_value__13796__auto__ = (function (){try{while(true){
var result__13797__auto__ = switch__13794__auto__(state_16387);
if(cljs.core.keyword_identical_QMARK_(result__13797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13797__auto__;
}
break;
}
}catch (e16470){var ex__13799__auto__ = e16470;
var statearr_16471_20025 = state_16387;
(statearr_16471_20025[(2)] = ex__13799__auto__);


if(cljs.core.seq((state_16387[(4)]))){
var statearr_16472_20026 = state_16387;
(statearr_16472_20026[(1)] = cljs.core.first((state_16387[(4)])));

} else {
throw ex__13799__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20027 = state_16387;
state_16387 = G__20027;
continue;
} else {
return ret_value__13796__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13795__auto__ = function(state_16387){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13795__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13795__auto____1.call(this,state_16387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13795__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13795__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13795__auto__;
})()
})();
var state__15169__auto__ = (function (){var statearr_16474 = f__15168__auto__();
(statearr_16474[(6)] = c__15167__auto__);

return statearr_16474;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15169__auto__);
}));

return c__15167__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__16485 = arguments.length;
switch (G__16485) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__16499 = arguments.length;
switch (G__16499) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__16508 = arguments.length;
switch (G__16508) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__15167__auto___20043 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15168__auto__ = (function (){var switch__13794__auto__ = (function (state_16568){
var state_val_16569 = (state_16568[(1)]);
if((state_val_16569 === (7))){
var inst_16564 = (state_16568[(2)]);
var state_16568__$1 = state_16568;
var statearr_16575_20044 = state_16568__$1;
(statearr_16575_20044[(2)] = inst_16564);

(statearr_16575_20044[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16569 === (1))){
var state_16568__$1 = state_16568;
var statearr_16578_20045 = state_16568__$1;
(statearr_16578_20045[(2)] = null);

(statearr_16578_20045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16569 === (4))){
var inst_16539 = (state_16568[(7)]);
var inst_16539__$1 = (state_16568[(2)]);
var inst_16541 = (inst_16539__$1 == null);
var state_16568__$1 = (function (){var statearr_16581 = state_16568;
(statearr_16581[(7)] = inst_16539__$1);

return statearr_16581;
})();
if(cljs.core.truth_(inst_16541)){
var statearr_16582_20047 = state_16568__$1;
(statearr_16582_20047[(1)] = (5));

} else {
var statearr_16584_20049 = state_16568__$1;
(statearr_16584_20049[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16569 === (13))){
var state_16568__$1 = state_16568;
var statearr_16585_20050 = state_16568__$1;
(statearr_16585_20050[(2)] = null);

(statearr_16585_20050[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16569 === (6))){
var inst_16539 = (state_16568[(7)]);
var inst_16547 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16539) : p.call(null,inst_16539));
var state_16568__$1 = state_16568;
if(cljs.core.truth_(inst_16547)){
var statearr_16590_20053 = state_16568__$1;
(statearr_16590_20053[(1)] = (9));

} else {
var statearr_16592_20054 = state_16568__$1;
(statearr_16592_20054[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16569 === (3))){
var inst_16566 = (state_16568[(2)]);
var state_16568__$1 = state_16568;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16568__$1,inst_16566);
} else {
if((state_val_16569 === (12))){
var state_16568__$1 = state_16568;
var statearr_16597_20057 = state_16568__$1;
(statearr_16597_20057[(2)] = null);

(statearr_16597_20057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16569 === (2))){
var state_16568__$1 = state_16568;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16568__$1,(4),ch);
} else {
if((state_val_16569 === (11))){
var inst_16539 = (state_16568[(7)]);
var inst_16555 = (state_16568[(2)]);
var state_16568__$1 = state_16568;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16568__$1,(8),inst_16555,inst_16539);
} else {
if((state_val_16569 === (9))){
var state_16568__$1 = state_16568;
var statearr_16602_20062 = state_16568__$1;
(statearr_16602_20062[(2)] = tc);

(statearr_16602_20062[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16569 === (5))){
var inst_16543 = cljs.core.async.close_BANG_(tc);
var inst_16544 = cljs.core.async.close_BANG_(fc);
var state_16568__$1 = (function (){var statearr_16605 = state_16568;
(statearr_16605[(8)] = inst_16543);

return statearr_16605;
})();
var statearr_16608_20063 = state_16568__$1;
(statearr_16608_20063[(2)] = inst_16544);

(statearr_16608_20063[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16569 === (14))){
var inst_16562 = (state_16568[(2)]);
var state_16568__$1 = state_16568;
var statearr_16611_20064 = state_16568__$1;
(statearr_16611_20064[(2)] = inst_16562);

(statearr_16611_20064[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16569 === (10))){
var state_16568__$1 = state_16568;
var statearr_16614_20065 = state_16568__$1;
(statearr_16614_20065[(2)] = fc);

(statearr_16614_20065[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16569 === (8))){
var inst_16557 = (state_16568[(2)]);
var state_16568__$1 = state_16568;
if(cljs.core.truth_(inst_16557)){
var statearr_16615_20066 = state_16568__$1;
(statearr_16615_20066[(1)] = (12));

} else {
var statearr_16616_20067 = state_16568__$1;
(statearr_16616_20067[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13795__auto__ = null;
var cljs$core$async$state_machine__13795__auto____0 = (function (){
var statearr_16617 = [null,null,null,null,null,null,null,null,null];
(statearr_16617[(0)] = cljs$core$async$state_machine__13795__auto__);

(statearr_16617[(1)] = (1));

return statearr_16617;
});
var cljs$core$async$state_machine__13795__auto____1 = (function (state_16568){
while(true){
var ret_value__13796__auto__ = (function (){try{while(true){
var result__13797__auto__ = switch__13794__auto__(state_16568);
if(cljs.core.keyword_identical_QMARK_(result__13797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13797__auto__;
}
break;
}
}catch (e16618){var ex__13799__auto__ = e16618;
var statearr_16619_20075 = state_16568;
(statearr_16619_20075[(2)] = ex__13799__auto__);


if(cljs.core.seq((state_16568[(4)]))){
var statearr_16620_20076 = state_16568;
(statearr_16620_20076[(1)] = cljs.core.first((state_16568[(4)])));

} else {
throw ex__13799__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20077 = state_16568;
state_16568 = G__20077;
continue;
} else {
return ret_value__13796__auto__;
}
break;
}
});
cljs$core$async$state_machine__13795__auto__ = function(state_16568){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13795__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13795__auto____1.call(this,state_16568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13795__auto____0;
cljs$core$async$state_machine__13795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13795__auto____1;
return cljs$core$async$state_machine__13795__auto__;
})()
})();
var state__15169__auto__ = (function (){var statearr_16621 = f__15168__auto__();
(statearr_16621[(6)] = c__15167__auto___20043);

return statearr_16621;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15169__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__15167__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15168__auto__ = (function (){var switch__13794__auto__ = (function (state_16655){
var state_val_16656 = (state_16655[(1)]);
if((state_val_16656 === (7))){
var inst_16648 = (state_16655[(2)]);
var state_16655__$1 = state_16655;
var statearr_16664_20080 = state_16655__$1;
(statearr_16664_20080[(2)] = inst_16648);

(statearr_16664_20080[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16656 === (1))){
var inst_16626 = init;
var inst_16629 = inst_16626;
var state_16655__$1 = (function (){var statearr_16672 = state_16655;
(statearr_16672[(7)] = inst_16629);

return statearr_16672;
})();
var statearr_16673_20081 = state_16655__$1;
(statearr_16673_20081[(2)] = null);

(statearr_16673_20081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16656 === (4))){
var inst_16632 = (state_16655[(8)]);
var inst_16632__$1 = (state_16655[(2)]);
var inst_16633 = (inst_16632__$1 == null);
var state_16655__$1 = (function (){var statearr_16677 = state_16655;
(statearr_16677[(8)] = inst_16632__$1);

return statearr_16677;
})();
if(cljs.core.truth_(inst_16633)){
var statearr_16678_20084 = state_16655__$1;
(statearr_16678_20084[(1)] = (5));

} else {
var statearr_16681_20085 = state_16655__$1;
(statearr_16681_20085[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16656 === (6))){
var inst_16629 = (state_16655[(7)]);
var inst_16632 = (state_16655[(8)]);
var inst_16639 = (state_16655[(9)]);
var inst_16639__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_16629,inst_16632) : f.call(null,inst_16629,inst_16632));
var inst_16640 = cljs.core.reduced_QMARK_(inst_16639__$1);
var state_16655__$1 = (function (){var statearr_16684 = state_16655;
(statearr_16684[(9)] = inst_16639__$1);

return statearr_16684;
})();
if(inst_16640){
var statearr_16685_20086 = state_16655__$1;
(statearr_16685_20086[(1)] = (8));

} else {
var statearr_16686_20087 = state_16655__$1;
(statearr_16686_20087[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16656 === (3))){
var inst_16650 = (state_16655[(2)]);
var state_16655__$1 = state_16655;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16655__$1,inst_16650);
} else {
if((state_val_16656 === (2))){
var state_16655__$1 = state_16655;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16655__$1,(4),ch);
} else {
if((state_val_16656 === (9))){
var inst_16639 = (state_16655[(9)]);
var inst_16629 = inst_16639;
var state_16655__$1 = (function (){var statearr_16703 = state_16655;
(statearr_16703[(7)] = inst_16629);

return statearr_16703;
})();
var statearr_16705_20088 = state_16655__$1;
(statearr_16705_20088[(2)] = null);

(statearr_16705_20088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16656 === (5))){
var inst_16629 = (state_16655[(7)]);
var state_16655__$1 = state_16655;
var statearr_16706_20089 = state_16655__$1;
(statearr_16706_20089[(2)] = inst_16629);

(statearr_16706_20089[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16656 === (10))){
var inst_16646 = (state_16655[(2)]);
var state_16655__$1 = state_16655;
var statearr_16707_20095 = state_16655__$1;
(statearr_16707_20095[(2)] = inst_16646);

(statearr_16707_20095[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16656 === (8))){
var inst_16639 = (state_16655[(9)]);
var inst_16642 = cljs.core.deref(inst_16639);
var state_16655__$1 = state_16655;
var statearr_16708_20096 = state_16655__$1;
(statearr_16708_20096[(2)] = inst_16642);

(statearr_16708_20096[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__13795__auto__ = null;
var cljs$core$async$reduce_$_state_machine__13795__auto____0 = (function (){
var statearr_16719 = [null,null,null,null,null,null,null,null,null,null];
(statearr_16719[(0)] = cljs$core$async$reduce_$_state_machine__13795__auto__);

(statearr_16719[(1)] = (1));

return statearr_16719;
});
var cljs$core$async$reduce_$_state_machine__13795__auto____1 = (function (state_16655){
while(true){
var ret_value__13796__auto__ = (function (){try{while(true){
var result__13797__auto__ = switch__13794__auto__(state_16655);
if(cljs.core.keyword_identical_QMARK_(result__13797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13797__auto__;
}
break;
}
}catch (e16724){var ex__13799__auto__ = e16724;
var statearr_16725_20099 = state_16655;
(statearr_16725_20099[(2)] = ex__13799__auto__);


if(cljs.core.seq((state_16655[(4)]))){
var statearr_16726_20100 = state_16655;
(statearr_16726_20100[(1)] = cljs.core.first((state_16655[(4)])));

} else {
throw ex__13799__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20104 = state_16655;
state_16655 = G__20104;
continue;
} else {
return ret_value__13796__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__13795__auto__ = function(state_16655){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__13795__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__13795__auto____1.call(this,state_16655);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__13795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__13795__auto____0;
cljs$core$async$reduce_$_state_machine__13795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__13795__auto____1;
return cljs$core$async$reduce_$_state_machine__13795__auto__;
})()
})();
var state__15169__auto__ = (function (){var statearr_16732 = f__15168__auto__();
(statearr_16732[(6)] = c__15167__auto__);

return statearr_16732;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15169__auto__);
}));

return c__15167__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__15167__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15168__auto__ = (function (){var switch__13794__auto__ = (function (state_16747){
var state_val_16748 = (state_16747[(1)]);
if((state_val_16748 === (1))){
var inst_16742 = cljs.core.async.reduce(f__$1,init,ch);
var state_16747__$1 = state_16747;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16747__$1,(2),inst_16742);
} else {
if((state_val_16748 === (2))){
var inst_16744 = (state_16747[(2)]);
var inst_16745 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_16744) : f__$1.call(null,inst_16744));
var state_16747__$1 = state_16747;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16747__$1,inst_16745);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__13795__auto__ = null;
var cljs$core$async$transduce_$_state_machine__13795__auto____0 = (function (){
var statearr_16752 = [null,null,null,null,null,null,null];
(statearr_16752[(0)] = cljs$core$async$transduce_$_state_machine__13795__auto__);

(statearr_16752[(1)] = (1));

return statearr_16752;
});
var cljs$core$async$transduce_$_state_machine__13795__auto____1 = (function (state_16747){
while(true){
var ret_value__13796__auto__ = (function (){try{while(true){
var result__13797__auto__ = switch__13794__auto__(state_16747);
if(cljs.core.keyword_identical_QMARK_(result__13797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13797__auto__;
}
break;
}
}catch (e16754){var ex__13799__auto__ = e16754;
var statearr_16755_20113 = state_16747;
(statearr_16755_20113[(2)] = ex__13799__auto__);


if(cljs.core.seq((state_16747[(4)]))){
var statearr_16756_20114 = state_16747;
(statearr_16756_20114[(1)] = cljs.core.first((state_16747[(4)])));

} else {
throw ex__13799__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20115 = state_16747;
state_16747 = G__20115;
continue;
} else {
return ret_value__13796__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__13795__auto__ = function(state_16747){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__13795__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__13795__auto____1.call(this,state_16747);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__13795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__13795__auto____0;
cljs$core$async$transduce_$_state_machine__13795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__13795__auto____1;
return cljs$core$async$transduce_$_state_machine__13795__auto__;
})()
})();
var state__15169__auto__ = (function (){var statearr_16757 = f__15168__auto__();
(statearr_16757[(6)] = c__15167__auto__);

return statearr_16757;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15169__auto__);
}));

return c__15167__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__16761 = arguments.length;
switch (G__16761) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__15167__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15168__auto__ = (function (){var switch__13794__auto__ = (function (state_16795){
var state_val_16796 = (state_16795[(1)]);
if((state_val_16796 === (7))){
var inst_16773 = (state_16795[(2)]);
var state_16795__$1 = state_16795;
var statearr_16797_20119 = state_16795__$1;
(statearr_16797_20119[(2)] = inst_16773);

(statearr_16797_20119[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16796 === (1))){
var inst_16765 = cljs.core.seq(coll);
var inst_16766 = inst_16765;
var state_16795__$1 = (function (){var statearr_16798 = state_16795;
(statearr_16798[(7)] = inst_16766);

return statearr_16798;
})();
var statearr_16799_20122 = state_16795__$1;
(statearr_16799_20122[(2)] = null);

(statearr_16799_20122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16796 === (4))){
var inst_16766 = (state_16795[(7)]);
var inst_16770 = cljs.core.first(inst_16766);
var state_16795__$1 = state_16795;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16795__$1,(7),ch,inst_16770);
} else {
if((state_val_16796 === (13))){
var inst_16785 = (state_16795[(2)]);
var state_16795__$1 = state_16795;
var statearr_16800_20124 = state_16795__$1;
(statearr_16800_20124[(2)] = inst_16785);

(statearr_16800_20124[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16796 === (6))){
var inst_16776 = (state_16795[(2)]);
var state_16795__$1 = state_16795;
if(cljs.core.truth_(inst_16776)){
var statearr_16801_20126 = state_16795__$1;
(statearr_16801_20126[(1)] = (8));

} else {
var statearr_16802_20127 = state_16795__$1;
(statearr_16802_20127[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16796 === (3))){
var inst_16789 = (state_16795[(2)]);
var state_16795__$1 = state_16795;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16795__$1,inst_16789);
} else {
if((state_val_16796 === (12))){
var state_16795__$1 = state_16795;
var statearr_16806_20130 = state_16795__$1;
(statearr_16806_20130[(2)] = null);

(statearr_16806_20130[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16796 === (2))){
var inst_16766 = (state_16795[(7)]);
var state_16795__$1 = state_16795;
if(cljs.core.truth_(inst_16766)){
var statearr_16807_20131 = state_16795__$1;
(statearr_16807_20131[(1)] = (4));

} else {
var statearr_16808_20132 = state_16795__$1;
(statearr_16808_20132[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16796 === (11))){
var inst_16782 = cljs.core.async.close_BANG_(ch);
var state_16795__$1 = state_16795;
var statearr_16810_20134 = state_16795__$1;
(statearr_16810_20134[(2)] = inst_16782);

(statearr_16810_20134[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16796 === (9))){
var state_16795__$1 = state_16795;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16811_20135 = state_16795__$1;
(statearr_16811_20135[(1)] = (11));

} else {
var statearr_16812_20136 = state_16795__$1;
(statearr_16812_20136[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16796 === (5))){
var inst_16766 = (state_16795[(7)]);
var state_16795__$1 = state_16795;
var statearr_16814_20139 = state_16795__$1;
(statearr_16814_20139[(2)] = inst_16766);

(statearr_16814_20139[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16796 === (10))){
var inst_16787 = (state_16795[(2)]);
var state_16795__$1 = state_16795;
var statearr_16825_20140 = state_16795__$1;
(statearr_16825_20140[(2)] = inst_16787);

(statearr_16825_20140[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16796 === (8))){
var inst_16766 = (state_16795[(7)]);
var inst_16778 = cljs.core.next(inst_16766);
var inst_16766__$1 = inst_16778;
var state_16795__$1 = (function (){var statearr_16829 = state_16795;
(statearr_16829[(7)] = inst_16766__$1);

return statearr_16829;
})();
var statearr_16830_20143 = state_16795__$1;
(statearr_16830_20143[(2)] = null);

(statearr_16830_20143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13795__auto__ = null;
var cljs$core$async$state_machine__13795__auto____0 = (function (){
var statearr_16832 = [null,null,null,null,null,null,null,null];
(statearr_16832[(0)] = cljs$core$async$state_machine__13795__auto__);

(statearr_16832[(1)] = (1));

return statearr_16832;
});
var cljs$core$async$state_machine__13795__auto____1 = (function (state_16795){
while(true){
var ret_value__13796__auto__ = (function (){try{while(true){
var result__13797__auto__ = switch__13794__auto__(state_16795);
if(cljs.core.keyword_identical_QMARK_(result__13797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13797__auto__;
}
break;
}
}catch (e16833){var ex__13799__auto__ = e16833;
var statearr_16835_20148 = state_16795;
(statearr_16835_20148[(2)] = ex__13799__auto__);


if(cljs.core.seq((state_16795[(4)]))){
var statearr_16836_20149 = state_16795;
(statearr_16836_20149[(1)] = cljs.core.first((state_16795[(4)])));

} else {
throw ex__13799__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20150 = state_16795;
state_16795 = G__20150;
continue;
} else {
return ret_value__13796__auto__;
}
break;
}
});
cljs$core$async$state_machine__13795__auto__ = function(state_16795){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13795__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13795__auto____1.call(this,state_16795);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13795__auto____0;
cljs$core$async$state_machine__13795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13795__auto____1;
return cljs$core$async$state_machine__13795__auto__;
})()
})();
var state__15169__auto__ = (function (){var statearr_16843 = f__15168__auto__();
(statearr_16843[(6)] = c__15167__auto__);

return statearr_16843;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15169__auto__);
}));

return c__15167__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__16850 = arguments.length;
switch (G__16850) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_20156 = (function (_){
var x__5498__auto__ = (((_ == null))?null:_);
var m__5499__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5499__auto__.call(null,_));
} else {
var m__5497__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5497__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_20156(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_20157 = (function (m,ch,close_QMARK_){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5499__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5497__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5497__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_20157(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_20159 = (function (m,ch){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5499__auto__.call(null,m,ch));
} else {
var m__5497__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5497__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_20159(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_20160 = (function (m){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5499__auto__.call(null,m));
} else {
var m__5497__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5497__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_20160(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16897 = (function (ch,cs,meta16898){
this.ch = ch;
this.cs = cs;
this.meta16898 = meta16898;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16897.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16899,meta16898__$1){
var self__ = this;
var _16899__$1 = this;
return (new cljs.core.async.t_cljs$core$async16897(self__.ch,self__.cs,meta16898__$1));
}));

(cljs.core.async.t_cljs$core$async16897.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16899){
var self__ = this;
var _16899__$1 = this;
return self__.meta16898;
}));

(cljs.core.async.t_cljs$core$async16897.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16897.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16897.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16897.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async16897.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async16897.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async16897.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta16898","meta16898",268349135,null)], null);
}));

(cljs.core.async.t_cljs$core$async16897.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16897.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16897");

(cljs.core.async.t_cljs$core$async16897.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async16897");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16897.
 */
cljs.core.async.__GT_t_cljs$core$async16897 = (function cljs$core$async$__GT_t_cljs$core$async16897(ch,cs,meta16898){
return (new cljs.core.async.t_cljs$core$async16897(ch,cs,meta16898));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async16897(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__15167__auto___20169 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15168__auto__ = (function (){var switch__13794__auto__ = (function (state_17149){
var state_val_17153 = (state_17149[(1)]);
if((state_val_17153 === (7))){
var inst_17139 = (state_17149[(2)]);
var state_17149__$1 = state_17149;
var statearr_17160_20172 = state_17149__$1;
(statearr_17160_20172[(2)] = inst_17139);

(statearr_17160_20172[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17153 === (20))){
var inst_16973 = (state_17149[(7)]);
var inst_16998 = cljs.core.first(inst_16973);
var inst_16999 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16998,(0),null);
var inst_17000 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16998,(1),null);
var state_17149__$1 = (function (){var statearr_17161 = state_17149;
(statearr_17161[(8)] = inst_16999);

return statearr_17161;
})();
if(cljs.core.truth_(inst_17000)){
var statearr_17162_20174 = state_17149__$1;
(statearr_17162_20174[(1)] = (22));

} else {
var statearr_17163_20175 = state_17149__$1;
(statearr_17163_20175[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17153 === (27))){
var inst_17042 = (state_17149[(9)]);
var inst_17044 = (state_17149[(10)]);
var inst_17052 = (state_17149[(11)]);
var inst_16917 = (state_17149[(12)]);
var inst_17052__$1 = cljs.core._nth(inst_17042,inst_17044);
var inst_17053 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_17052__$1,inst_16917,done);
var state_17149__$1 = (function (){var statearr_17170 = state_17149;
(statearr_17170[(11)] = inst_17052__$1);

return statearr_17170;
})();
if(cljs.core.truth_(inst_17053)){
var statearr_17171_20178 = state_17149__$1;
(statearr_17171_20178[(1)] = (30));

} else {
var statearr_17173_20179 = state_17149__$1;
(statearr_17173_20179[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17153 === (1))){
var state_17149__$1 = state_17149;
var statearr_17178_20182 = state_17149__$1;
(statearr_17178_20182[(2)] = null);

(statearr_17178_20182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17153 === (24))){
var inst_16973 = (state_17149[(7)]);
var inst_17006 = (state_17149[(2)]);
var inst_17007 = cljs.core.next(inst_16973);
var inst_16927 = inst_17007;
var inst_16928 = null;
var inst_16929 = (0);
var inst_16930 = (0);
var state_17149__$1 = (function (){var statearr_17180 = state_17149;
(statearr_17180[(13)] = inst_17006);

(statearr_17180[(14)] = inst_16927);

(statearr_17180[(15)] = inst_16928);

(statearr_17180[(16)] = inst_16929);

(statearr_17180[(17)] = inst_16930);

return statearr_17180;
})();
var statearr_17184_20189 = state_17149__$1;
(statearr_17184_20189[(2)] = null);

(statearr_17184_20189[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17153 === (39))){
var state_17149__$1 = state_17149;
var statearr_17194_20190 = state_17149__$1;
(statearr_17194_20190[(2)] = null);

(statearr_17194_20190[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17153 === (4))){
var inst_16917 = (state_17149[(12)]);
var inst_16917__$1 = (state_17149[(2)]);
var inst_16919 = (inst_16917__$1 == null);
var state_17149__$1 = (function (){var statearr_17198 = state_17149;
(statearr_17198[(12)] = inst_16917__$1);

return statearr_17198;
})();
if(cljs.core.truth_(inst_16919)){
var statearr_17199_20195 = state_17149__$1;
(statearr_17199_20195[(1)] = (5));

} else {
var statearr_17200_20196 = state_17149__$1;
(statearr_17200_20196[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17153 === (15))){
var inst_16930 = (state_17149[(17)]);
var inst_16927 = (state_17149[(14)]);
var inst_16928 = (state_17149[(15)]);
var inst_16929 = (state_17149[(16)]);
var inst_16963 = (state_17149[(2)]);
var inst_16969 = (inst_16930 + (1));
var tmp17189 = inst_16928;
var tmp17190 = inst_16927;
var tmp17191 = inst_16929;
var inst_16927__$1 = tmp17190;
var inst_16928__$1 = tmp17189;
var inst_16929__$1 = tmp17191;
var inst_16930__$1 = inst_16969;
var state_17149__$1 = (function (){var statearr_17202 = state_17149;
(statearr_17202[(18)] = inst_16963);

(statearr_17202[(14)] = inst_16927__$1);

(statearr_17202[(15)] = inst_16928__$1);

(statearr_17202[(16)] = inst_16929__$1);

(statearr_17202[(17)] = inst_16930__$1);

return statearr_17202;
})();
var statearr_17203_20203 = state_17149__$1;
(statearr_17203_20203[(2)] = null);

(statearr_17203_20203[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17153 === (21))){
var inst_17010 = (state_17149[(2)]);
var state_17149__$1 = state_17149;
var statearr_17208_20205 = state_17149__$1;
(statearr_17208_20205[(2)] = inst_17010);

(statearr_17208_20205[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17153 === (31))){
var inst_17052 = (state_17149[(11)]);
var inst_17057 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_17052);
var state_17149__$1 = state_17149;
var statearr_17209_20212 = state_17149__$1;
(statearr_17209_20212[(2)] = inst_17057);

(statearr_17209_20212[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17153 === (32))){
var inst_17044 = (state_17149[(10)]);
var inst_17041 = (state_17149[(19)]);
var inst_17042 = (state_17149[(9)]);
var inst_17043 = (state_17149[(20)]);
var inst_17059 = (state_17149[(2)]);
var inst_17060 = (inst_17044 + (1));
var tmp17205 = inst_17042;
var tmp17206 = inst_17041;
var tmp17207 = inst_17043;
var inst_17041__$1 = tmp17206;
var inst_17042__$1 = tmp17205;
var inst_17043__$1 = tmp17207;
var inst_17044__$1 = inst_17060;
var state_17149__$1 = (function (){var statearr_17212 = state_17149;
(statearr_17212[(21)] = inst_17059);

(statearr_17212[(19)] = inst_17041__$1);

(statearr_17212[(9)] = inst_17042__$1);

(statearr_17212[(20)] = inst_17043__$1);

(statearr_17212[(10)] = inst_17044__$1);

return statearr_17212;
})();
var statearr_17216_20214 = state_17149__$1;
(statearr_17216_20214[(2)] = null);

(statearr_17216_20214[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17153 === (40))){
var inst_17077 = (state_17149[(22)]);
var inst_17081 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_17077);
var state_17149__$1 = state_17149;
var statearr_17219_20224 = state_17149__$1;
(statearr_17219_20224[(2)] = inst_17081);

(statearr_17219_20224[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17153 === (33))){
var inst_17063 = (state_17149[(23)]);
var inst_17066 = cljs.core.chunked_seq_QMARK_(inst_17063);
var state_17149__$1 = state_17149;
if(inst_17066){
var statearr_17226_20226 = state_17149__$1;
(statearr_17226_20226[(1)] = (36));

} else {
var statearr_17228_20231 = state_17149__$1;
(statearr_17228_20231[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17153 === (13))){
var inst_16950 = (state_17149[(24)]);
var inst_16960 = cljs.core.async.close_BANG_(inst_16950);
var state_17149__$1 = state_17149;
var statearr_17231_20232 = state_17149__$1;
(statearr_17231_20232[(2)] = inst_16960);

(statearr_17231_20232[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17153 === (22))){
var inst_16999 = (state_17149[(8)]);
var inst_17003 = cljs.core.async.close_BANG_(inst_16999);
var state_17149__$1 = state_17149;
var statearr_17234_20233 = state_17149__$1;
(statearr_17234_20233[(2)] = inst_17003);

(statearr_17234_20233[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17153 === (36))){
var inst_17063 = (state_17149[(23)]);
var inst_17068 = cljs.core.chunk_first(inst_17063);
var inst_17069 = cljs.core.chunk_rest(inst_17063);
var inst_17070 = cljs.core.count(inst_17068);
var inst_17041 = inst_17069;
var inst_17042 = inst_17068;
var inst_17043 = inst_17070;
var inst_17044 = (0);
var state_17149__$1 = (function (){var statearr_17236 = state_17149;
(statearr_17236[(19)] = inst_17041);

(statearr_17236[(9)] = inst_17042);

(statearr_17236[(20)] = inst_17043);

(statearr_17236[(10)] = inst_17044);

return statearr_17236;
})();
var statearr_17238_20234 = state_17149__$1;
(statearr_17238_20234[(2)] = null);

(statearr_17238_20234[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17153 === (41))){
var inst_17063 = (state_17149[(23)]);
var inst_17084 = (state_17149[(2)]);
var inst_17098 = cljs.core.next(inst_17063);
var inst_17041 = inst_17098;
var inst_17042 = null;
var inst_17043 = (0);
var inst_17044 = (0);
var state_17149__$1 = (function (){var statearr_17240 = state_17149;
(statearr_17240[(25)] = inst_17084);

(statearr_17240[(19)] = inst_17041);

(statearr_17240[(9)] = inst_17042);

(statearr_17240[(20)] = inst_17043);

(statearr_17240[(10)] = inst_17044);

return statearr_17240;
})();
var statearr_17243_20235 = state_17149__$1;
(statearr_17243_20235[(2)] = null);

(statearr_17243_20235[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17153 === (43))){
var state_17149__$1 = state_17149;
var statearr_17246_20239 = state_17149__$1;
(statearr_17246_20239[(2)] = null);

(statearr_17246_20239[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17153 === (29))){
var inst_17119 = (state_17149[(2)]);
var state_17149__$1 = state_17149;
var statearr_17249_20240 = state_17149__$1;
(statearr_17249_20240[(2)] = inst_17119);

(statearr_17249_20240[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17153 === (44))){
var inst_17136 = (state_17149[(2)]);
var state_17149__$1 = (function (){var statearr_17252 = state_17149;
(statearr_17252[(26)] = inst_17136);

return statearr_17252;
})();
var statearr_17253_20242 = state_17149__$1;
(statearr_17253_20242[(2)] = null);

(statearr_17253_20242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17153 === (6))){
var inst_17027 = (state_17149[(27)]);
var inst_17026 = cljs.core.deref(cs);
var inst_17027__$1 = cljs.core.keys(inst_17026);
var inst_17034 = cljs.core.count(inst_17027__$1);
var inst_17035 = cljs.core.reset_BANG_(dctr,inst_17034);
var inst_17040 = cljs.core.seq(inst_17027__$1);
var inst_17041 = inst_17040;
var inst_17042 = null;
var inst_17043 = (0);
var inst_17044 = (0);
var state_17149__$1 = (function (){var statearr_17254 = state_17149;
(statearr_17254[(27)] = inst_17027__$1);

(statearr_17254[(28)] = inst_17035);

(statearr_17254[(19)] = inst_17041);

(statearr_17254[(9)] = inst_17042);

(statearr_17254[(20)] = inst_17043);

(statearr_17254[(10)] = inst_17044);

return statearr_17254;
})();
var statearr_17255_20243 = state_17149__$1;
(statearr_17255_20243[(2)] = null);

(statearr_17255_20243[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17153 === (28))){
var inst_17041 = (state_17149[(19)]);
var inst_17063 = (state_17149[(23)]);
var inst_17063__$1 = cljs.core.seq(inst_17041);
var state_17149__$1 = (function (){var statearr_17258 = state_17149;
(statearr_17258[(23)] = inst_17063__$1);

return statearr_17258;
})();
if(inst_17063__$1){
var statearr_17259_20247 = state_17149__$1;
(statearr_17259_20247[(1)] = (33));

} else {
var statearr_17260_20249 = state_17149__$1;
(statearr_17260_20249[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17153 === (25))){
var inst_17044 = (state_17149[(10)]);
var inst_17043 = (state_17149[(20)]);
var inst_17049 = (inst_17044 < inst_17043);
var inst_17050 = inst_17049;
var state_17149__$1 = state_17149;
if(cljs.core.truth_(inst_17050)){
var statearr_17263_20250 = state_17149__$1;
(statearr_17263_20250[(1)] = (27));

} else {
var statearr_17264_20251 = state_17149__$1;
(statearr_17264_20251[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17153 === (34))){
var state_17149__$1 = state_17149;
var statearr_17265_20254 = state_17149__$1;
(statearr_17265_20254[(2)] = null);

(statearr_17265_20254[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17153 === (17))){
var state_17149__$1 = state_17149;
var statearr_17266_20256 = state_17149__$1;
(statearr_17266_20256[(2)] = null);

(statearr_17266_20256[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17153 === (3))){
var inst_17141 = (state_17149[(2)]);
var state_17149__$1 = state_17149;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17149__$1,inst_17141);
} else {
if((state_val_17153 === (12))){
var inst_17015 = (state_17149[(2)]);
var state_17149__$1 = state_17149;
var statearr_17267_20258 = state_17149__$1;
(statearr_17267_20258[(2)] = inst_17015);

(statearr_17267_20258[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17153 === (2))){
var state_17149__$1 = state_17149;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17149__$1,(4),ch);
} else {
if((state_val_17153 === (23))){
var state_17149__$1 = state_17149;
var statearr_17269_20261 = state_17149__$1;
(statearr_17269_20261[(2)] = null);

(statearr_17269_20261[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17153 === (35))){
var inst_17104 = (state_17149[(2)]);
var state_17149__$1 = state_17149;
var statearr_17271_20263 = state_17149__$1;
(statearr_17271_20263[(2)] = inst_17104);

(statearr_17271_20263[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17153 === (19))){
var inst_16973 = (state_17149[(7)]);
var inst_16986 = cljs.core.chunk_first(inst_16973);
var inst_16987 = cljs.core.chunk_rest(inst_16973);
var inst_16988 = cljs.core.count(inst_16986);
var inst_16927 = inst_16987;
var inst_16928 = inst_16986;
var inst_16929 = inst_16988;
var inst_16930 = (0);
var state_17149__$1 = (function (){var statearr_17272 = state_17149;
(statearr_17272[(14)] = inst_16927);

(statearr_17272[(15)] = inst_16928);

(statearr_17272[(16)] = inst_16929);

(statearr_17272[(17)] = inst_16930);

return statearr_17272;
})();
var statearr_17273_20266 = state_17149__$1;
(statearr_17273_20266[(2)] = null);

(statearr_17273_20266[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17153 === (11))){
var inst_16927 = (state_17149[(14)]);
var inst_16973 = (state_17149[(7)]);
var inst_16973__$1 = cljs.core.seq(inst_16927);
var state_17149__$1 = (function (){var statearr_17278 = state_17149;
(statearr_17278[(7)] = inst_16973__$1);

return statearr_17278;
})();
if(inst_16973__$1){
var statearr_17279_20268 = state_17149__$1;
(statearr_17279_20268[(1)] = (16));

} else {
var statearr_17280_20269 = state_17149__$1;
(statearr_17280_20269[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17153 === (9))){
var inst_17017 = (state_17149[(2)]);
var state_17149__$1 = state_17149;
var statearr_17284_20270 = state_17149__$1;
(statearr_17284_20270[(2)] = inst_17017);

(statearr_17284_20270[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17153 === (5))){
var inst_16925 = cljs.core.deref(cs);
var inst_16926 = cljs.core.seq(inst_16925);
var inst_16927 = inst_16926;
var inst_16928 = null;
var inst_16929 = (0);
var inst_16930 = (0);
var state_17149__$1 = (function (){var statearr_17285 = state_17149;
(statearr_17285[(14)] = inst_16927);

(statearr_17285[(15)] = inst_16928);

(statearr_17285[(16)] = inst_16929);

(statearr_17285[(17)] = inst_16930);

return statearr_17285;
})();
var statearr_17286_20272 = state_17149__$1;
(statearr_17286_20272[(2)] = null);

(statearr_17286_20272[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17153 === (14))){
var state_17149__$1 = state_17149;
var statearr_17296_20273 = state_17149__$1;
(statearr_17296_20273[(2)] = null);

(statearr_17296_20273[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17153 === (45))){
var inst_17132 = (state_17149[(2)]);
var state_17149__$1 = state_17149;
var statearr_17300_20274 = state_17149__$1;
(statearr_17300_20274[(2)] = inst_17132);

(statearr_17300_20274[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17153 === (26))){
var inst_17027 = (state_17149[(27)]);
var inst_17121 = (state_17149[(2)]);
var inst_17128 = cljs.core.seq(inst_17027);
var state_17149__$1 = (function (){var statearr_17301 = state_17149;
(statearr_17301[(29)] = inst_17121);

return statearr_17301;
})();
if(inst_17128){
var statearr_17302_20277 = state_17149__$1;
(statearr_17302_20277[(1)] = (42));

} else {
var statearr_17304_20278 = state_17149__$1;
(statearr_17304_20278[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17153 === (16))){
var inst_16973 = (state_17149[(7)]);
var inst_16980 = cljs.core.chunked_seq_QMARK_(inst_16973);
var state_17149__$1 = state_17149;
if(inst_16980){
var statearr_17308_20279 = state_17149__$1;
(statearr_17308_20279[(1)] = (19));

} else {
var statearr_17309_20282 = state_17149__$1;
(statearr_17309_20282[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17153 === (38))){
var inst_17101 = (state_17149[(2)]);
var state_17149__$1 = state_17149;
var statearr_17317_20283 = state_17149__$1;
(statearr_17317_20283[(2)] = inst_17101);

(statearr_17317_20283[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17153 === (30))){
var state_17149__$1 = state_17149;
var statearr_17323_20284 = state_17149__$1;
(statearr_17323_20284[(2)] = null);

(statearr_17323_20284[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17153 === (10))){
var inst_16928 = (state_17149[(15)]);
var inst_16930 = (state_17149[(17)]);
var inst_16944 = cljs.core._nth(inst_16928,inst_16930);
var inst_16950 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16944,(0),null);
var inst_16952 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16944,(1),null);
var state_17149__$1 = (function (){var statearr_17328 = state_17149;
(statearr_17328[(24)] = inst_16950);

return statearr_17328;
})();
if(cljs.core.truth_(inst_16952)){
var statearr_17329_20285 = state_17149__$1;
(statearr_17329_20285[(1)] = (13));

} else {
var statearr_17330_20286 = state_17149__$1;
(statearr_17330_20286[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17153 === (18))){
var inst_17013 = (state_17149[(2)]);
var state_17149__$1 = state_17149;
var statearr_17339_20289 = state_17149__$1;
(statearr_17339_20289[(2)] = inst_17013);

(statearr_17339_20289[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17153 === (42))){
var state_17149__$1 = state_17149;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17149__$1,(45),dchan);
} else {
if((state_val_17153 === (37))){
var inst_17063 = (state_17149[(23)]);
var inst_17077 = (state_17149[(22)]);
var inst_16917 = (state_17149[(12)]);
var inst_17077__$1 = cljs.core.first(inst_17063);
var inst_17078 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_17077__$1,inst_16917,done);
var state_17149__$1 = (function (){var statearr_17347 = state_17149;
(statearr_17347[(22)] = inst_17077__$1);

return statearr_17347;
})();
if(cljs.core.truth_(inst_17078)){
var statearr_17348_20294 = state_17149__$1;
(statearr_17348_20294[(1)] = (39));

} else {
var statearr_17350_20295 = state_17149__$1;
(statearr_17350_20295[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17153 === (8))){
var inst_16930 = (state_17149[(17)]);
var inst_16929 = (state_17149[(16)]);
var inst_16933 = (inst_16930 < inst_16929);
var inst_16934 = inst_16933;
var state_17149__$1 = state_17149;
if(cljs.core.truth_(inst_16934)){
var statearr_17351_20296 = state_17149__$1;
(statearr_17351_20296[(1)] = (10));

} else {
var statearr_17352_20298 = state_17149__$1;
(statearr_17352_20298[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__13795__auto__ = null;
var cljs$core$async$mult_$_state_machine__13795__auto____0 = (function (){
var statearr_17358 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17358[(0)] = cljs$core$async$mult_$_state_machine__13795__auto__);

(statearr_17358[(1)] = (1));

return statearr_17358;
});
var cljs$core$async$mult_$_state_machine__13795__auto____1 = (function (state_17149){
while(true){
var ret_value__13796__auto__ = (function (){try{while(true){
var result__13797__auto__ = switch__13794__auto__(state_17149);
if(cljs.core.keyword_identical_QMARK_(result__13797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13797__auto__;
}
break;
}
}catch (e17360){var ex__13799__auto__ = e17360;
var statearr_17361_20303 = state_17149;
(statearr_17361_20303[(2)] = ex__13799__auto__);


if(cljs.core.seq((state_17149[(4)]))){
var statearr_17362_20304 = state_17149;
(statearr_17362_20304[(1)] = cljs.core.first((state_17149[(4)])));

} else {
throw ex__13799__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20305 = state_17149;
state_17149 = G__20305;
continue;
} else {
return ret_value__13796__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__13795__auto__ = function(state_17149){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__13795__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__13795__auto____1.call(this,state_17149);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__13795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__13795__auto____0;
cljs$core$async$mult_$_state_machine__13795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__13795__auto____1;
return cljs$core$async$mult_$_state_machine__13795__auto__;
})()
})();
var state__15169__auto__ = (function (){var statearr_17366 = f__15168__auto__();
(statearr_17366[(6)] = c__15167__auto___20169);

return statearr_17366;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15169__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__17382 = arguments.length;
switch (G__17382) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_20310 = (function (m,ch){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5499__auto__.call(null,m,ch));
} else {
var m__5497__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5497__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_20310(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_20313 = (function (m,ch){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5499__auto__.call(null,m,ch));
} else {
var m__5497__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5497__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_20313(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_20319 = (function (m){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5499__auto__.call(null,m));
} else {
var m__5497__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5497__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_20319(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_20323 = (function (m,state_map){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5499__auto__.call(null,m,state_map));
} else {
var m__5497__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5497__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_20323(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_20327 = (function (m,mode){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5499__auto__.call(null,m,mode));
} else {
var m__5497__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5497__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_20327(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___20332 = arguments.length;
var i__5877__auto___20335 = (0);
while(true){
if((i__5877__auto___20335 < len__5876__auto___20332)){
args__5882__auto__.push((arguments[i__5877__auto___20335]));

var G__20336 = (i__5877__auto___20335 + (1));
i__5877__auto___20335 = G__20336;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((3) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5883__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__17479){
var map__17482 = p__17479;
var map__17482__$1 = cljs.core.__destructure_map(map__17482);
var opts = map__17482__$1;
var statearr_17487_20344 = state;
(statearr_17487_20344[(1)] = cont_block);


var temp__5823__auto__ = cljs.core.async.do_alts((function (val){
var statearr_17488_20345 = state;
(statearr_17488_20345[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5823__auto__)){
var cb = temp__5823__auto__;
var statearr_17489_20346 = state;
(statearr_17489_20346[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq17460){
var G__17461 = cljs.core.first(seq17460);
var seq17460__$1 = cljs.core.next(seq17460);
var G__17462 = cljs.core.first(seq17460__$1);
var seq17460__$2 = cljs.core.next(seq17460__$1);
var G__17463 = cljs.core.first(seq17460__$2);
var seq17460__$3 = cljs.core.next(seq17460__$2);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17461,G__17462,G__17463,seq17460__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17506 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta17507){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta17507 = meta17507;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17506.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17508,meta17507__$1){
var self__ = this;
var _17508__$1 = this;
return (new cljs.core.async.t_cljs$core$async17506(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta17507__$1));
}));

(cljs.core.async.t_cljs$core$async17506.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17508){
var self__ = this;
var _17508__$1 = this;
return self__.meta17507;
}));

(cljs.core.async.t_cljs$core$async17506.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17506.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async17506.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17506.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async17506.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async17506.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async17506.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async17506.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+"(solo-modes mode)")));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async17506.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta17507","meta17507",1694017443,null)], null);
}));

(cljs.core.async.t_cljs$core$async17506.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17506.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17506");

(cljs.core.async.t_cljs$core$async17506.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async17506");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17506.
 */
cljs.core.async.__GT_t_cljs$core$async17506 = (function cljs$core$async$__GT_t_cljs$core$async17506(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta17507){
return (new cljs.core.async.t_cljs$core$async17506(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta17507));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (cljs.core.seq(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async17506(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__15167__auto___20372 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15168__auto__ = (function (){var switch__13794__auto__ = (function (state_17609){
var state_val_17610 = (state_17609[(1)]);
if((state_val_17610 === (7))){
var inst_17561 = (state_17609[(2)]);
var state_17609__$1 = state_17609;
if(cljs.core.truth_(inst_17561)){
var statearr_17611_20376 = state_17609__$1;
(statearr_17611_20376[(1)] = (8));

} else {
var statearr_17612_20377 = state_17609__$1;
(statearr_17612_20377[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17610 === (20))){
var inst_17554 = (state_17609[(7)]);
var state_17609__$1 = state_17609;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17609__$1,(23),out,inst_17554);
} else {
if((state_val_17610 === (1))){
var inst_17531 = calc_state();
var inst_17532 = cljs.core.__destructure_map(inst_17531);
var inst_17533 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17532,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_17537 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17532,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_17538 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17532,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_17542 = inst_17531;
var state_17609__$1 = (function (){var statearr_17614 = state_17609;
(statearr_17614[(8)] = inst_17533);

(statearr_17614[(9)] = inst_17537);

(statearr_17614[(10)] = inst_17538);

(statearr_17614[(11)] = inst_17542);

return statearr_17614;
})();
var statearr_17616_20380 = state_17609__$1;
(statearr_17616_20380[(2)] = null);

(statearr_17616_20380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17610 === (24))){
var inst_17545 = (state_17609[(12)]);
var inst_17542 = inst_17545;
var state_17609__$1 = (function (){var statearr_17618 = state_17609;
(statearr_17618[(11)] = inst_17542);

return statearr_17618;
})();
var statearr_17619_20381 = state_17609__$1;
(statearr_17619_20381[(2)] = null);

(statearr_17619_20381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17610 === (4))){
var inst_17554 = (state_17609[(7)]);
var inst_17556 = (state_17609[(13)]);
var inst_17553 = (state_17609[(2)]);
var inst_17554__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17553,(0),null);
var inst_17555 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17553,(1),null);
var inst_17556__$1 = (inst_17554__$1 == null);
var state_17609__$1 = (function (){var statearr_17620 = state_17609;
(statearr_17620[(7)] = inst_17554__$1);

(statearr_17620[(14)] = inst_17555);

(statearr_17620[(13)] = inst_17556__$1);

return statearr_17620;
})();
if(cljs.core.truth_(inst_17556__$1)){
var statearr_17621_20383 = state_17609__$1;
(statearr_17621_20383[(1)] = (5));

} else {
var statearr_17622_20386 = state_17609__$1;
(statearr_17622_20386[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17610 === (15))){
var inst_17546 = (state_17609[(15)]);
var inst_17576 = (state_17609[(16)]);
var inst_17576__$1 = cljs.core.empty_QMARK_(inst_17546);
var state_17609__$1 = (function (){var statearr_17624 = state_17609;
(statearr_17624[(16)] = inst_17576__$1);

return statearr_17624;
})();
if(inst_17576__$1){
var statearr_17641_20390 = state_17609__$1;
(statearr_17641_20390[(1)] = (17));

} else {
var statearr_17642_20391 = state_17609__$1;
(statearr_17642_20391[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17610 === (21))){
var inst_17545 = (state_17609[(12)]);
var inst_17542 = inst_17545;
var state_17609__$1 = (function (){var statearr_17643 = state_17609;
(statearr_17643[(11)] = inst_17542);

return statearr_17643;
})();
var statearr_17644_20394 = state_17609__$1;
(statearr_17644_20394[(2)] = null);

(statearr_17644_20394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17610 === (13))){
var inst_17568 = (state_17609[(2)]);
var inst_17569 = calc_state();
var inst_17542 = inst_17569;
var state_17609__$1 = (function (){var statearr_17649 = state_17609;
(statearr_17649[(17)] = inst_17568);

(statearr_17649[(11)] = inst_17542);

return statearr_17649;
})();
var statearr_17651_20395 = state_17609__$1;
(statearr_17651_20395[(2)] = null);

(statearr_17651_20395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17610 === (22))){
var inst_17599 = (state_17609[(2)]);
var state_17609__$1 = state_17609;
var statearr_17652_20396 = state_17609__$1;
(statearr_17652_20396[(2)] = inst_17599);

(statearr_17652_20396[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17610 === (6))){
var inst_17555 = (state_17609[(14)]);
var inst_17559 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17555,change);
var state_17609__$1 = state_17609;
var statearr_17653_20398 = state_17609__$1;
(statearr_17653_20398[(2)] = inst_17559);

(statearr_17653_20398[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17610 === (25))){
var state_17609__$1 = state_17609;
var statearr_17654_20399 = state_17609__$1;
(statearr_17654_20399[(2)] = null);

(statearr_17654_20399[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17610 === (17))){
var inst_17547 = (state_17609[(18)]);
var inst_17555 = (state_17609[(14)]);
var inst_17578 = (inst_17547.cljs$core$IFn$_invoke$arity$1 ? inst_17547.cljs$core$IFn$_invoke$arity$1(inst_17555) : inst_17547.call(null,inst_17555));
var inst_17579 = cljs.core.not(inst_17578);
var state_17609__$1 = state_17609;
var statearr_17657_20405 = state_17609__$1;
(statearr_17657_20405[(2)] = inst_17579);

(statearr_17657_20405[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17610 === (3))){
var inst_17603 = (state_17609[(2)]);
var state_17609__$1 = state_17609;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17609__$1,inst_17603);
} else {
if((state_val_17610 === (12))){
var state_17609__$1 = state_17609;
var statearr_17658_20408 = state_17609__$1;
(statearr_17658_20408[(2)] = null);

(statearr_17658_20408[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17610 === (2))){
var inst_17542 = (state_17609[(11)]);
var inst_17545 = (state_17609[(12)]);
var inst_17545__$1 = cljs.core.__destructure_map(inst_17542);
var inst_17546 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17545__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_17547 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17545__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_17548 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17545__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_17609__$1 = (function (){var statearr_17661 = state_17609;
(statearr_17661[(12)] = inst_17545__$1);

(statearr_17661[(15)] = inst_17546);

(statearr_17661[(18)] = inst_17547);

return statearr_17661;
})();
return cljs.core.async.ioc_alts_BANG_(state_17609__$1,(4),inst_17548);
} else {
if((state_val_17610 === (23))){
var inst_17590 = (state_17609[(2)]);
var state_17609__$1 = state_17609;
if(cljs.core.truth_(inst_17590)){
var statearr_17664_20411 = state_17609__$1;
(statearr_17664_20411[(1)] = (24));

} else {
var statearr_17665_20412 = state_17609__$1;
(statearr_17665_20412[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17610 === (19))){
var inst_17582 = (state_17609[(2)]);
var state_17609__$1 = state_17609;
var statearr_17666_20415 = state_17609__$1;
(statearr_17666_20415[(2)] = inst_17582);

(statearr_17666_20415[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17610 === (11))){
var inst_17555 = (state_17609[(14)]);
var inst_17565 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_17555);
var state_17609__$1 = state_17609;
var statearr_17667_20418 = state_17609__$1;
(statearr_17667_20418[(2)] = inst_17565);

(statearr_17667_20418[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17610 === (9))){
var inst_17546 = (state_17609[(15)]);
var inst_17555 = (state_17609[(14)]);
var inst_17572 = (state_17609[(19)]);
var inst_17572__$1 = (inst_17546.cljs$core$IFn$_invoke$arity$1 ? inst_17546.cljs$core$IFn$_invoke$arity$1(inst_17555) : inst_17546.call(null,inst_17555));
var state_17609__$1 = (function (){var statearr_17671 = state_17609;
(statearr_17671[(19)] = inst_17572__$1);

return statearr_17671;
})();
if(cljs.core.truth_(inst_17572__$1)){
var statearr_17672_20419 = state_17609__$1;
(statearr_17672_20419[(1)] = (14));

} else {
var statearr_17673_20420 = state_17609__$1;
(statearr_17673_20420[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17610 === (5))){
var inst_17556 = (state_17609[(13)]);
var state_17609__$1 = state_17609;
var statearr_17679_20421 = state_17609__$1;
(statearr_17679_20421[(2)] = inst_17556);

(statearr_17679_20421[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17610 === (14))){
var inst_17572 = (state_17609[(19)]);
var state_17609__$1 = state_17609;
var statearr_17686_20422 = state_17609__$1;
(statearr_17686_20422[(2)] = inst_17572);

(statearr_17686_20422[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17610 === (26))){
var inst_17595 = (state_17609[(2)]);
var state_17609__$1 = state_17609;
var statearr_17692_20425 = state_17609__$1;
(statearr_17692_20425[(2)] = inst_17595);

(statearr_17692_20425[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17610 === (16))){
var inst_17584 = (state_17609[(2)]);
var state_17609__$1 = state_17609;
if(cljs.core.truth_(inst_17584)){
var statearr_17697_20426 = state_17609__$1;
(statearr_17697_20426[(1)] = (20));

} else {
var statearr_17698_20427 = state_17609__$1;
(statearr_17698_20427[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17610 === (10))){
var inst_17601 = (state_17609[(2)]);
var state_17609__$1 = state_17609;
var statearr_17700_20429 = state_17609__$1;
(statearr_17700_20429[(2)] = inst_17601);

(statearr_17700_20429[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17610 === (18))){
var inst_17576 = (state_17609[(16)]);
var state_17609__$1 = state_17609;
var statearr_17701_20431 = state_17609__$1;
(statearr_17701_20431[(2)] = inst_17576);

(statearr_17701_20431[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17610 === (8))){
var inst_17554 = (state_17609[(7)]);
var inst_17563 = (inst_17554 == null);
var state_17609__$1 = state_17609;
if(cljs.core.truth_(inst_17563)){
var statearr_17702_20432 = state_17609__$1;
(statearr_17702_20432[(1)] = (11));

} else {
var statearr_17703_20433 = state_17609__$1;
(statearr_17703_20433[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__13795__auto__ = null;
var cljs$core$async$mix_$_state_machine__13795__auto____0 = (function (){
var statearr_17704 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17704[(0)] = cljs$core$async$mix_$_state_machine__13795__auto__);

(statearr_17704[(1)] = (1));

return statearr_17704;
});
var cljs$core$async$mix_$_state_machine__13795__auto____1 = (function (state_17609){
while(true){
var ret_value__13796__auto__ = (function (){try{while(true){
var result__13797__auto__ = switch__13794__auto__(state_17609);
if(cljs.core.keyword_identical_QMARK_(result__13797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13797__auto__;
}
break;
}
}catch (e17705){var ex__13799__auto__ = e17705;
var statearr_17707_20434 = state_17609;
(statearr_17707_20434[(2)] = ex__13799__auto__);


if(cljs.core.seq((state_17609[(4)]))){
var statearr_17708_20437 = state_17609;
(statearr_17708_20437[(1)] = cljs.core.first((state_17609[(4)])));

} else {
throw ex__13799__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20438 = state_17609;
state_17609 = G__20438;
continue;
} else {
return ret_value__13796__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__13795__auto__ = function(state_17609){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__13795__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__13795__auto____1.call(this,state_17609);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__13795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__13795__auto____0;
cljs$core$async$mix_$_state_machine__13795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__13795__auto____1;
return cljs$core$async$mix_$_state_machine__13795__auto__;
})()
})();
var state__15169__auto__ = (function (){var statearr_17711 = f__15168__auto__();
(statearr_17711[(6)] = c__15167__auto___20372);

return statearr_17711;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15169__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_20441 = (function (p,v,ch,close_QMARK_){
var x__5498__auto__ = (((p == null))?null:p);
var m__5499__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5499__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5497__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5497__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_20441(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_20442 = (function (p,v,ch){
var x__5498__auto__ = (((p == null))?null:p);
var m__5499__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5499__auto__.call(null,p,v,ch));
} else {
var m__5497__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5497__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_20442(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_20444 = (function() {
var G__20445 = null;
var G__20445__1 = (function (p){
var x__5498__auto__ = (((p == null))?null:p);
var m__5499__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5499__auto__.call(null,p));
} else {
var m__5497__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5497__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__20445__2 = (function (p,v){
var x__5498__auto__ = (((p == null))?null:p);
var m__5499__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5499__auto__.call(null,p,v));
} else {
var m__5497__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5497__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__20445 = function(p,v){
switch(arguments.length){
case 1:
return G__20445__1.call(this,p);
case 2:
return G__20445__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20445.cljs$core$IFn$_invoke$arity$1 = G__20445__1;
G__20445.cljs$core$IFn$_invoke$arity$2 = G__20445__2;
return G__20445;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__17758 = arguments.length;
switch (G__17758) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_20444(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_20444(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17781 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta17782){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta17782 = meta17782;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17781.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17783,meta17782__$1){
var self__ = this;
var _17783__$1 = this;
return (new cljs.core.async.t_cljs$core$async17781(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta17782__$1));
}));

(cljs.core.async.t_cljs$core$async17781.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17783){
var self__ = this;
var _17783__$1 = this;
return self__.meta17782;
}));

(cljs.core.async.t_cljs$core$async17781.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17781.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async17781.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17781.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async17781.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5823__auto__)){
var m = temp__5823__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async17781.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async17781.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async17781.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta17782","meta17782",-1691088130,null)], null);
}));

(cljs.core.async.t_cljs$core$async17781.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17781.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17781");

(cljs.core.async.t_cljs$core$async17781.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async17781");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17781.
 */
cljs.core.async.__GT_t_cljs$core$async17781 = (function cljs$core$async$__GT_t_cljs$core$async17781(ch,topic_fn,buf_fn,mults,ensure_mult,meta17782){
return (new cljs.core.async.t_cljs$core$async17781(ch,topic_fn,buf_fn,mults,ensure_mult,meta17782));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__17773 = arguments.length;
switch (G__17773) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5142__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__17770_SHARP_){
if(cljs.core.truth_((p1__17770_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__17770_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__17770_SHARP_.call(null,topic)))){
return p1__17770_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__17770_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async17781(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__15167__auto___20462 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15168__auto__ = (function (){var switch__13794__auto__ = (function (state_17882){
var state_val_17883 = (state_17882[(1)]);
if((state_val_17883 === (7))){
var inst_17878 = (state_17882[(2)]);
var state_17882__$1 = state_17882;
var statearr_17884_20466 = state_17882__$1;
(statearr_17884_20466[(2)] = inst_17878);

(statearr_17884_20466[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17883 === (20))){
var state_17882__$1 = state_17882;
var statearr_17885_20469 = state_17882__$1;
(statearr_17885_20469[(2)] = null);

(statearr_17885_20469[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17883 === (1))){
var state_17882__$1 = state_17882;
var statearr_17886_20471 = state_17882__$1;
(statearr_17886_20471[(2)] = null);

(statearr_17886_20471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17883 === (24))){
var inst_17855 = (state_17882[(7)]);
var inst_17870 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_17855);
var state_17882__$1 = state_17882;
var statearr_17887_20475 = state_17882__$1;
(statearr_17887_20475[(2)] = inst_17870);

(statearr_17887_20475[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17883 === (4))){
var inst_17801 = (state_17882[(8)]);
var inst_17801__$1 = (state_17882[(2)]);
var inst_17802 = (inst_17801__$1 == null);
var state_17882__$1 = (function (){var statearr_17889 = state_17882;
(statearr_17889[(8)] = inst_17801__$1);

return statearr_17889;
})();
if(cljs.core.truth_(inst_17802)){
var statearr_17890_20481 = state_17882__$1;
(statearr_17890_20481[(1)] = (5));

} else {
var statearr_17891_20482 = state_17882__$1;
(statearr_17891_20482[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17883 === (15))){
var inst_17848 = (state_17882[(2)]);
var state_17882__$1 = state_17882;
var statearr_17892_20486 = state_17882__$1;
(statearr_17892_20486[(2)] = inst_17848);

(statearr_17892_20486[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17883 === (21))){
var inst_17875 = (state_17882[(2)]);
var state_17882__$1 = (function (){var statearr_17898 = state_17882;
(statearr_17898[(9)] = inst_17875);

return statearr_17898;
})();
var statearr_17899_20489 = state_17882__$1;
(statearr_17899_20489[(2)] = null);

(statearr_17899_20489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17883 === (13))){
var inst_17828 = (state_17882[(10)]);
var inst_17831 = cljs.core.chunked_seq_QMARK_(inst_17828);
var state_17882__$1 = state_17882;
if(inst_17831){
var statearr_17905_20491 = state_17882__$1;
(statearr_17905_20491[(1)] = (16));

} else {
var statearr_17906_20493 = state_17882__$1;
(statearr_17906_20493[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17883 === (22))){
var inst_17867 = (state_17882[(2)]);
var state_17882__$1 = state_17882;
if(cljs.core.truth_(inst_17867)){
var statearr_17907_20494 = state_17882__$1;
(statearr_17907_20494[(1)] = (23));

} else {
var statearr_17908_20495 = state_17882__$1;
(statearr_17908_20495[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17883 === (6))){
var inst_17801 = (state_17882[(8)]);
var inst_17855 = (state_17882[(7)]);
var inst_17863 = (state_17882[(11)]);
var inst_17855__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_17801) : topic_fn.call(null,inst_17801));
var inst_17862 = cljs.core.deref(mults);
var inst_17863__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17862,inst_17855__$1);
var state_17882__$1 = (function (){var statearr_17916 = state_17882;
(statearr_17916[(7)] = inst_17855__$1);

(statearr_17916[(11)] = inst_17863__$1);

return statearr_17916;
})();
if(cljs.core.truth_(inst_17863__$1)){
var statearr_17917_20499 = state_17882__$1;
(statearr_17917_20499[(1)] = (19));

} else {
var statearr_17918_20502 = state_17882__$1;
(statearr_17918_20502[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17883 === (25))){
var inst_17872 = (state_17882[(2)]);
var state_17882__$1 = state_17882;
var statearr_17922_20507 = state_17882__$1;
(statearr_17922_20507[(2)] = inst_17872);

(statearr_17922_20507[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17883 === (17))){
var inst_17828 = (state_17882[(10)]);
var inst_17839 = cljs.core.first(inst_17828);
var inst_17840 = cljs.core.async.muxch_STAR_(inst_17839);
var inst_17841 = cljs.core.async.close_BANG_(inst_17840);
var inst_17842 = cljs.core.next(inst_17828);
var inst_17814 = inst_17842;
var inst_17815 = null;
var inst_17816 = (0);
var inst_17817 = (0);
var state_17882__$1 = (function (){var statearr_17923 = state_17882;
(statearr_17923[(12)] = inst_17841);

(statearr_17923[(13)] = inst_17814);

(statearr_17923[(14)] = inst_17815);

(statearr_17923[(15)] = inst_17816);

(statearr_17923[(16)] = inst_17817);

return statearr_17923;
})();
var statearr_17924_20510 = state_17882__$1;
(statearr_17924_20510[(2)] = null);

(statearr_17924_20510[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17883 === (3))){
var inst_17880 = (state_17882[(2)]);
var state_17882__$1 = state_17882;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17882__$1,inst_17880);
} else {
if((state_val_17883 === (12))){
var inst_17850 = (state_17882[(2)]);
var state_17882__$1 = state_17882;
var statearr_17926_20512 = state_17882__$1;
(statearr_17926_20512[(2)] = inst_17850);

(statearr_17926_20512[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17883 === (2))){
var state_17882__$1 = state_17882;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17882__$1,(4),ch);
} else {
if((state_val_17883 === (23))){
var state_17882__$1 = state_17882;
var statearr_17927_20513 = state_17882__$1;
(statearr_17927_20513[(2)] = null);

(statearr_17927_20513[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17883 === (19))){
var inst_17863 = (state_17882[(11)]);
var inst_17801 = (state_17882[(8)]);
var inst_17865 = cljs.core.async.muxch_STAR_(inst_17863);
var state_17882__$1 = state_17882;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17882__$1,(22),inst_17865,inst_17801);
} else {
if((state_val_17883 === (11))){
var inst_17814 = (state_17882[(13)]);
var inst_17828 = (state_17882[(10)]);
var inst_17828__$1 = cljs.core.seq(inst_17814);
var state_17882__$1 = (function (){var statearr_17931 = state_17882;
(statearr_17931[(10)] = inst_17828__$1);

return statearr_17931;
})();
if(inst_17828__$1){
var statearr_17933_20515 = state_17882__$1;
(statearr_17933_20515[(1)] = (13));

} else {
var statearr_17935_20516 = state_17882__$1;
(statearr_17935_20516[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17883 === (9))){
var inst_17852 = (state_17882[(2)]);
var state_17882__$1 = state_17882;
var statearr_17939_20517 = state_17882__$1;
(statearr_17939_20517[(2)] = inst_17852);

(statearr_17939_20517[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17883 === (5))){
var inst_17811 = cljs.core.deref(mults);
var inst_17812 = cljs.core.vals(inst_17811);
var inst_17813 = cljs.core.seq(inst_17812);
var inst_17814 = inst_17813;
var inst_17815 = null;
var inst_17816 = (0);
var inst_17817 = (0);
var state_17882__$1 = (function (){var statearr_17943 = state_17882;
(statearr_17943[(13)] = inst_17814);

(statearr_17943[(14)] = inst_17815);

(statearr_17943[(15)] = inst_17816);

(statearr_17943[(16)] = inst_17817);

return statearr_17943;
})();
var statearr_17946_20520 = state_17882__$1;
(statearr_17946_20520[(2)] = null);

(statearr_17946_20520[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17883 === (14))){
var state_17882__$1 = state_17882;
var statearr_17950_20521 = state_17882__$1;
(statearr_17950_20521[(2)] = null);

(statearr_17950_20521[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17883 === (16))){
var inst_17828 = (state_17882[(10)]);
var inst_17834 = cljs.core.chunk_first(inst_17828);
var inst_17835 = cljs.core.chunk_rest(inst_17828);
var inst_17836 = cljs.core.count(inst_17834);
var inst_17814 = inst_17835;
var inst_17815 = inst_17834;
var inst_17816 = inst_17836;
var inst_17817 = (0);
var state_17882__$1 = (function (){var statearr_17954 = state_17882;
(statearr_17954[(13)] = inst_17814);

(statearr_17954[(14)] = inst_17815);

(statearr_17954[(15)] = inst_17816);

(statearr_17954[(16)] = inst_17817);

return statearr_17954;
})();
var statearr_17955_20525 = state_17882__$1;
(statearr_17955_20525[(2)] = null);

(statearr_17955_20525[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17883 === (10))){
var inst_17815 = (state_17882[(14)]);
var inst_17817 = (state_17882[(16)]);
var inst_17814 = (state_17882[(13)]);
var inst_17816 = (state_17882[(15)]);
var inst_17822 = cljs.core._nth(inst_17815,inst_17817);
var inst_17823 = cljs.core.async.muxch_STAR_(inst_17822);
var inst_17824 = cljs.core.async.close_BANG_(inst_17823);
var inst_17825 = (inst_17817 + (1));
var tmp17947 = inst_17814;
var tmp17948 = inst_17815;
var tmp17949 = inst_17816;
var inst_17814__$1 = tmp17947;
var inst_17815__$1 = tmp17948;
var inst_17816__$1 = tmp17949;
var inst_17817__$1 = inst_17825;
var state_17882__$1 = (function (){var statearr_17959 = state_17882;
(statearr_17959[(17)] = inst_17824);

(statearr_17959[(13)] = inst_17814__$1);

(statearr_17959[(14)] = inst_17815__$1);

(statearr_17959[(15)] = inst_17816__$1);

(statearr_17959[(16)] = inst_17817__$1);

return statearr_17959;
})();
var statearr_17964_20528 = state_17882__$1;
(statearr_17964_20528[(2)] = null);

(statearr_17964_20528[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17883 === (18))){
var inst_17845 = (state_17882[(2)]);
var state_17882__$1 = state_17882;
var statearr_17966_20532 = state_17882__$1;
(statearr_17966_20532[(2)] = inst_17845);

(statearr_17966_20532[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17883 === (8))){
var inst_17817 = (state_17882[(16)]);
var inst_17816 = (state_17882[(15)]);
var inst_17819 = (inst_17817 < inst_17816);
var inst_17820 = inst_17819;
var state_17882__$1 = state_17882;
if(cljs.core.truth_(inst_17820)){
var statearr_17972_20534 = state_17882__$1;
(statearr_17972_20534[(1)] = (10));

} else {
var statearr_17973_20536 = state_17882__$1;
(statearr_17973_20536[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13795__auto__ = null;
var cljs$core$async$state_machine__13795__auto____0 = (function (){
var statearr_17980 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17980[(0)] = cljs$core$async$state_machine__13795__auto__);

(statearr_17980[(1)] = (1));

return statearr_17980;
});
var cljs$core$async$state_machine__13795__auto____1 = (function (state_17882){
while(true){
var ret_value__13796__auto__ = (function (){try{while(true){
var result__13797__auto__ = switch__13794__auto__(state_17882);
if(cljs.core.keyword_identical_QMARK_(result__13797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13797__auto__;
}
break;
}
}catch (e17987){var ex__13799__auto__ = e17987;
var statearr_17988_20541 = state_17882;
(statearr_17988_20541[(2)] = ex__13799__auto__);


if(cljs.core.seq((state_17882[(4)]))){
var statearr_17991_20542 = state_17882;
(statearr_17991_20542[(1)] = cljs.core.first((state_17882[(4)])));

} else {
throw ex__13799__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20543 = state_17882;
state_17882 = G__20543;
continue;
} else {
return ret_value__13796__auto__;
}
break;
}
});
cljs$core$async$state_machine__13795__auto__ = function(state_17882){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13795__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13795__auto____1.call(this,state_17882);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13795__auto____0;
cljs$core$async$state_machine__13795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13795__auto____1;
return cljs$core$async$state_machine__13795__auto__;
})()
})();
var state__15169__auto__ = (function (){var statearr_17995 = f__15168__auto__();
(statearr_17995[(6)] = c__15167__auto___20462);

return statearr_17995;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15169__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__18022 = arguments.length;
switch (G__18022) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__18048 = arguments.length;
switch (G__18048) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__18074 = arguments.length;
switch (G__18074) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__15167__auto___20555 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15168__auto__ = (function (){var switch__13794__auto__ = (function (state_18215){
var state_val_18216 = (state_18215[(1)]);
if((state_val_18216 === (7))){
var state_18215__$1 = state_18215;
var statearr_18247_20556 = state_18215__$1;
(statearr_18247_20556[(2)] = null);

(statearr_18247_20556[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18216 === (1))){
var state_18215__$1 = state_18215;
var statearr_18248_20557 = state_18215__$1;
(statearr_18248_20557[(2)] = null);

(statearr_18248_20557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18216 === (4))){
var inst_18119 = (state_18215[(7)]);
var inst_18118 = (state_18215[(8)]);
var inst_18121 = (inst_18119 < inst_18118);
var state_18215__$1 = state_18215;
if(cljs.core.truth_(inst_18121)){
var statearr_18280_20558 = state_18215__$1;
(statearr_18280_20558[(1)] = (6));

} else {
var statearr_18281_20559 = state_18215__$1;
(statearr_18281_20559[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18216 === (15))){
var inst_18181 = (state_18215[(9)]);
var inst_18193 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_18181);
var state_18215__$1 = state_18215;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18215__$1,(17),out,inst_18193);
} else {
if((state_val_18216 === (13))){
var inst_18181 = (state_18215[(9)]);
var inst_18181__$1 = (state_18215[(2)]);
var inst_18182 = cljs.core.some(cljs.core.nil_QMARK_,inst_18181__$1);
var state_18215__$1 = (function (){var statearr_18290 = state_18215;
(statearr_18290[(9)] = inst_18181__$1);

return statearr_18290;
})();
if(cljs.core.truth_(inst_18182)){
var statearr_18292_20561 = state_18215__$1;
(statearr_18292_20561[(1)] = (14));

} else {
var statearr_18293_20562 = state_18215__$1;
(statearr_18293_20562[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18216 === (6))){
var state_18215__$1 = state_18215;
var statearr_18305_20563 = state_18215__$1;
(statearr_18305_20563[(2)] = null);

(statearr_18305_20563[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18216 === (17))){
var inst_18195 = (state_18215[(2)]);
var state_18215__$1 = (function (){var statearr_18328 = state_18215;
(statearr_18328[(10)] = inst_18195);

return statearr_18328;
})();
var statearr_18333_20566 = state_18215__$1;
(statearr_18333_20566[(2)] = null);

(statearr_18333_20566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18216 === (3))){
var inst_18207 = (state_18215[(2)]);
var state_18215__$1 = state_18215;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18215__$1,inst_18207);
} else {
if((state_val_18216 === (12))){
var _ = (function (){var statearr_18335 = state_18215;
(statearr_18335[(4)] = cljs.core.rest((state_18215[(4)])));

return statearr_18335;
})();
var state_18215__$1 = state_18215;
var ex18326 = (state_18215__$1[(2)]);
var statearr_18336_20567 = state_18215__$1;
(statearr_18336_20567[(5)] = ex18326);


if((ex18326 instanceof Object)){
var statearr_18338_20568 = state_18215__$1;
(statearr_18338_20568[(1)] = (11));

(statearr_18338_20568[(5)] = null);

} else {
throw ex18326;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18216 === (2))){
var inst_18117 = cljs.core.reset_BANG_(dctr,cnt);
var inst_18118 = cnt;
var inst_18119 = (0);
var state_18215__$1 = (function (){var statearr_18344 = state_18215;
(statearr_18344[(11)] = inst_18117);

(statearr_18344[(8)] = inst_18118);

(statearr_18344[(7)] = inst_18119);

return statearr_18344;
})();
var statearr_18346_20569 = state_18215__$1;
(statearr_18346_20569[(2)] = null);

(statearr_18346_20569[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18216 === (11))){
var inst_18148 = (state_18215[(2)]);
var inst_18149 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_18215__$1 = (function (){var statearr_18352 = state_18215;
(statearr_18352[(12)] = inst_18148);

return statearr_18352;
})();
var statearr_18353_20570 = state_18215__$1;
(statearr_18353_20570[(2)] = inst_18149);

(statearr_18353_20570[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18216 === (9))){
var inst_18119 = (state_18215[(7)]);
var _ = (function (){var statearr_18358 = state_18215;
(statearr_18358[(4)] = cljs.core.cons((12),(state_18215[(4)])));

return statearr_18358;
})();
var inst_18157 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_18119) : chs__$1.call(null,inst_18119));
var inst_18158 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_18119) : done.call(null,inst_18119));
var inst_18159 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_18157,inst_18158);
var ___$1 = (function (){var statearr_18362 = state_18215;
(statearr_18362[(4)] = cljs.core.rest((state_18215[(4)])));

return statearr_18362;
})();
var state_18215__$1 = state_18215;
var statearr_18363_20572 = state_18215__$1;
(statearr_18363_20572[(2)] = inst_18159);

(statearr_18363_20572[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18216 === (5))){
var inst_18169 = (state_18215[(2)]);
var state_18215__$1 = (function (){var statearr_18365 = state_18215;
(statearr_18365[(13)] = inst_18169);

return statearr_18365;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18215__$1,(13),dchan);
} else {
if((state_val_18216 === (14))){
var inst_18185 = cljs.core.async.close_BANG_(out);
var state_18215__$1 = state_18215;
var statearr_18371_20573 = state_18215__$1;
(statearr_18371_20573[(2)] = inst_18185);

(statearr_18371_20573[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18216 === (16))){
var inst_18205 = (state_18215[(2)]);
var state_18215__$1 = state_18215;
var statearr_18373_20574 = state_18215__$1;
(statearr_18373_20574[(2)] = inst_18205);

(statearr_18373_20574[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18216 === (10))){
var inst_18119 = (state_18215[(7)]);
var inst_18162 = (state_18215[(2)]);
var inst_18163 = (inst_18119 + (1));
var inst_18119__$1 = inst_18163;
var state_18215__$1 = (function (){var statearr_18375 = state_18215;
(statearr_18375[(14)] = inst_18162);

(statearr_18375[(7)] = inst_18119__$1);

return statearr_18375;
})();
var statearr_18380_20575 = state_18215__$1;
(statearr_18380_20575[(2)] = null);

(statearr_18380_20575[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18216 === (8))){
var inst_18167 = (state_18215[(2)]);
var state_18215__$1 = state_18215;
var statearr_18387_20576 = state_18215__$1;
(statearr_18387_20576[(2)] = inst_18167);

(statearr_18387_20576[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13795__auto__ = null;
var cljs$core$async$state_machine__13795__auto____0 = (function (){
var statearr_18396 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18396[(0)] = cljs$core$async$state_machine__13795__auto__);

(statearr_18396[(1)] = (1));

return statearr_18396;
});
var cljs$core$async$state_machine__13795__auto____1 = (function (state_18215){
while(true){
var ret_value__13796__auto__ = (function (){try{while(true){
var result__13797__auto__ = switch__13794__auto__(state_18215);
if(cljs.core.keyword_identical_QMARK_(result__13797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13797__auto__;
}
break;
}
}catch (e18397){var ex__13799__auto__ = e18397;
var statearr_18398_20578 = state_18215;
(statearr_18398_20578[(2)] = ex__13799__auto__);


if(cljs.core.seq((state_18215[(4)]))){
var statearr_18399_20579 = state_18215;
(statearr_18399_20579[(1)] = cljs.core.first((state_18215[(4)])));

} else {
throw ex__13799__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20581 = state_18215;
state_18215 = G__20581;
continue;
} else {
return ret_value__13796__auto__;
}
break;
}
});
cljs$core$async$state_machine__13795__auto__ = function(state_18215){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13795__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13795__auto____1.call(this,state_18215);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13795__auto____0;
cljs$core$async$state_machine__13795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13795__auto____1;
return cljs$core$async$state_machine__13795__auto__;
})()
})();
var state__15169__auto__ = (function (){var statearr_18404 = f__15168__auto__();
(statearr_18404[(6)] = c__15167__auto___20555);

return statearr_18404;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15169__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__18414 = arguments.length;
switch (G__18414) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15167__auto___20583 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15168__auto__ = (function (){var switch__13794__auto__ = (function (state_18472){
var state_val_18473 = (state_18472[(1)]);
if((state_val_18473 === (7))){
var inst_18447 = (state_18472[(7)]);
var inst_18448 = (state_18472[(8)]);
var inst_18447__$1 = (state_18472[(2)]);
var inst_18448__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18447__$1,(0),null);
var inst_18449 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18447__$1,(1),null);
var inst_18450 = (inst_18448__$1 == null);
var state_18472__$1 = (function (){var statearr_18475 = state_18472;
(statearr_18475[(7)] = inst_18447__$1);

(statearr_18475[(8)] = inst_18448__$1);

(statearr_18475[(9)] = inst_18449);

return statearr_18475;
})();
if(cljs.core.truth_(inst_18450)){
var statearr_18477_20586 = state_18472__$1;
(statearr_18477_20586[(1)] = (8));

} else {
var statearr_18478_20587 = state_18472__$1;
(statearr_18478_20587[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18473 === (1))){
var inst_18435 = cljs.core.vec(chs);
var inst_18436 = inst_18435;
var state_18472__$1 = (function (){var statearr_18480 = state_18472;
(statearr_18480[(10)] = inst_18436);

return statearr_18480;
})();
var statearr_18482_20588 = state_18472__$1;
(statearr_18482_20588[(2)] = null);

(statearr_18482_20588[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18473 === (4))){
var inst_18436 = (state_18472[(10)]);
var state_18472__$1 = state_18472;
return cljs.core.async.ioc_alts_BANG_(state_18472__$1,(7),inst_18436);
} else {
if((state_val_18473 === (6))){
var inst_18468 = (state_18472[(2)]);
var state_18472__$1 = state_18472;
var statearr_18500_20591 = state_18472__$1;
(statearr_18500_20591[(2)] = inst_18468);

(statearr_18500_20591[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18473 === (3))){
var inst_18470 = (state_18472[(2)]);
var state_18472__$1 = state_18472;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18472__$1,inst_18470);
} else {
if((state_val_18473 === (2))){
var inst_18436 = (state_18472[(10)]);
var inst_18439 = cljs.core.count(inst_18436);
var inst_18440 = (inst_18439 > (0));
var state_18472__$1 = state_18472;
if(cljs.core.truth_(inst_18440)){
var statearr_18502_20592 = state_18472__$1;
(statearr_18502_20592[(1)] = (4));

} else {
var statearr_18503_20593 = state_18472__$1;
(statearr_18503_20593[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18473 === (11))){
var inst_18436 = (state_18472[(10)]);
var inst_18461 = (state_18472[(2)]);
var tmp18501 = inst_18436;
var inst_18436__$1 = tmp18501;
var state_18472__$1 = (function (){var statearr_18505 = state_18472;
(statearr_18505[(11)] = inst_18461);

(statearr_18505[(10)] = inst_18436__$1);

return statearr_18505;
})();
var statearr_18508_20594 = state_18472__$1;
(statearr_18508_20594[(2)] = null);

(statearr_18508_20594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18473 === (9))){
var inst_18448 = (state_18472[(8)]);
var state_18472__$1 = state_18472;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18472__$1,(11),out,inst_18448);
} else {
if((state_val_18473 === (5))){
var inst_18466 = cljs.core.async.close_BANG_(out);
var state_18472__$1 = state_18472;
var statearr_18519_20595 = state_18472__$1;
(statearr_18519_20595[(2)] = inst_18466);

(statearr_18519_20595[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18473 === (10))){
var inst_18464 = (state_18472[(2)]);
var state_18472__$1 = state_18472;
var statearr_18524_20596 = state_18472__$1;
(statearr_18524_20596[(2)] = inst_18464);

(statearr_18524_20596[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18473 === (8))){
var inst_18436 = (state_18472[(10)]);
var inst_18447 = (state_18472[(7)]);
var inst_18448 = (state_18472[(8)]);
var inst_18449 = (state_18472[(9)]);
var inst_18452 = (function (){var cs = inst_18436;
var vec__18443 = inst_18447;
var v = inst_18448;
var c = inst_18449;
return (function (p1__18410_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__18410_SHARP_);
});
})();
var inst_18453 = cljs.core.filterv(inst_18452,inst_18436);
var inst_18436__$1 = inst_18453;
var state_18472__$1 = (function (){var statearr_18532 = state_18472;
(statearr_18532[(10)] = inst_18436__$1);

return statearr_18532;
})();
var statearr_18538_20597 = state_18472__$1;
(statearr_18538_20597[(2)] = null);

(statearr_18538_20597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13795__auto__ = null;
var cljs$core$async$state_machine__13795__auto____0 = (function (){
var statearr_18550 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18550[(0)] = cljs$core$async$state_machine__13795__auto__);

(statearr_18550[(1)] = (1));

return statearr_18550;
});
var cljs$core$async$state_machine__13795__auto____1 = (function (state_18472){
while(true){
var ret_value__13796__auto__ = (function (){try{while(true){
var result__13797__auto__ = switch__13794__auto__(state_18472);
if(cljs.core.keyword_identical_QMARK_(result__13797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13797__auto__;
}
break;
}
}catch (e18557){var ex__13799__auto__ = e18557;
var statearr_18559_20598 = state_18472;
(statearr_18559_20598[(2)] = ex__13799__auto__);


if(cljs.core.seq((state_18472[(4)]))){
var statearr_18563_20600 = state_18472;
(statearr_18563_20600[(1)] = cljs.core.first((state_18472[(4)])));

} else {
throw ex__13799__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20602 = state_18472;
state_18472 = G__20602;
continue;
} else {
return ret_value__13796__auto__;
}
break;
}
});
cljs$core$async$state_machine__13795__auto__ = function(state_18472){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13795__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13795__auto____1.call(this,state_18472);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13795__auto____0;
cljs$core$async$state_machine__13795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13795__auto____1;
return cljs$core$async$state_machine__13795__auto__;
})()
})();
var state__15169__auto__ = (function (){var statearr_18567 = f__15168__auto__();
(statearr_18567[(6)] = c__15167__auto___20583);

return statearr_18567;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15169__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__18583 = arguments.length;
switch (G__18583) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15167__auto___20605 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15168__auto__ = (function (){var switch__13794__auto__ = (function (state_18631){
var state_val_18635 = (state_18631[(1)]);
if((state_val_18635 === (7))){
var inst_18598 = (state_18631[(7)]);
var inst_18598__$1 = (state_18631[(2)]);
var inst_18599 = (inst_18598__$1 == null);
var inst_18600 = cljs.core.not(inst_18599);
var state_18631__$1 = (function (){var statearr_18656 = state_18631;
(statearr_18656[(7)] = inst_18598__$1);

return statearr_18656;
})();
if(inst_18600){
var statearr_18663_20607 = state_18631__$1;
(statearr_18663_20607[(1)] = (8));

} else {
var statearr_18670_20608 = state_18631__$1;
(statearr_18670_20608[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18635 === (1))){
var inst_18588 = (0);
var state_18631__$1 = (function (){var statearr_18675 = state_18631;
(statearr_18675[(8)] = inst_18588);

return statearr_18675;
})();
var statearr_18678_20609 = state_18631__$1;
(statearr_18678_20609[(2)] = null);

(statearr_18678_20609[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18635 === (4))){
var state_18631__$1 = state_18631;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18631__$1,(7),ch);
} else {
if((state_val_18635 === (6))){
var inst_18618 = (state_18631[(2)]);
var state_18631__$1 = state_18631;
var statearr_18695_20611 = state_18631__$1;
(statearr_18695_20611[(2)] = inst_18618);

(statearr_18695_20611[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18635 === (3))){
var inst_18621 = (state_18631[(2)]);
var inst_18627 = cljs.core.async.close_BANG_(out);
var state_18631__$1 = (function (){var statearr_18701 = state_18631;
(statearr_18701[(9)] = inst_18621);

return statearr_18701;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18631__$1,inst_18627);
} else {
if((state_val_18635 === (2))){
var inst_18588 = (state_18631[(8)]);
var inst_18592 = (inst_18588 < n);
var state_18631__$1 = state_18631;
if(cljs.core.truth_(inst_18592)){
var statearr_18708_20613 = state_18631__$1;
(statearr_18708_20613[(1)] = (4));

} else {
var statearr_18713_20614 = state_18631__$1;
(statearr_18713_20614[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18635 === (11))){
var inst_18588 = (state_18631[(8)]);
var inst_18607 = (state_18631[(2)]);
var inst_18611 = (inst_18588 + (1));
var inst_18588__$1 = inst_18611;
var state_18631__$1 = (function (){var statearr_18736 = state_18631;
(statearr_18736[(10)] = inst_18607);

(statearr_18736[(8)] = inst_18588__$1);

return statearr_18736;
})();
var statearr_18748_20615 = state_18631__$1;
(statearr_18748_20615[(2)] = null);

(statearr_18748_20615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18635 === (9))){
var state_18631__$1 = state_18631;
var statearr_18752_20616 = state_18631__$1;
(statearr_18752_20616[(2)] = null);

(statearr_18752_20616[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18635 === (5))){
var state_18631__$1 = state_18631;
var statearr_18758_20617 = state_18631__$1;
(statearr_18758_20617[(2)] = null);

(statearr_18758_20617[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18635 === (10))){
var inst_18615 = (state_18631[(2)]);
var state_18631__$1 = state_18631;
var statearr_18765_20618 = state_18631__$1;
(statearr_18765_20618[(2)] = inst_18615);

(statearr_18765_20618[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18635 === (8))){
var inst_18598 = (state_18631[(7)]);
var state_18631__$1 = state_18631;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18631__$1,(11),out,inst_18598);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13795__auto__ = null;
var cljs$core$async$state_machine__13795__auto____0 = (function (){
var statearr_18774 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18774[(0)] = cljs$core$async$state_machine__13795__auto__);

(statearr_18774[(1)] = (1));

return statearr_18774;
});
var cljs$core$async$state_machine__13795__auto____1 = (function (state_18631){
while(true){
var ret_value__13796__auto__ = (function (){try{while(true){
var result__13797__auto__ = switch__13794__auto__(state_18631);
if(cljs.core.keyword_identical_QMARK_(result__13797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13797__auto__;
}
break;
}
}catch (e18775){var ex__13799__auto__ = e18775;
var statearr_18776_20620 = state_18631;
(statearr_18776_20620[(2)] = ex__13799__auto__);


if(cljs.core.seq((state_18631[(4)]))){
var statearr_18778_20621 = state_18631;
(statearr_18778_20621[(1)] = cljs.core.first((state_18631[(4)])));

} else {
throw ex__13799__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20622 = state_18631;
state_18631 = G__20622;
continue;
} else {
return ret_value__13796__auto__;
}
break;
}
});
cljs$core$async$state_machine__13795__auto__ = function(state_18631){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13795__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13795__auto____1.call(this,state_18631);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13795__auto____0;
cljs$core$async$state_machine__13795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13795__auto____1;
return cljs$core$async$state_machine__13795__auto__;
})()
})();
var state__15169__auto__ = (function (){var statearr_18783 = f__15168__auto__();
(statearr_18783[(6)] = c__15167__auto___20605);

return statearr_18783;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15169__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18799 = (function (f,ch,meta18789,_,fn1,meta18800){
this.f = f;
this.ch = ch;
this.meta18789 = meta18789;
this._ = _;
this.fn1 = fn1;
this.meta18800 = meta18800;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18799.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18801,meta18800__$1){
var self__ = this;
var _18801__$1 = this;
return (new cljs.core.async.t_cljs$core$async18799(self__.f,self__.ch,self__.meta18789,self__._,self__.fn1,meta18800__$1));
}));

(cljs.core.async.t_cljs$core$async18799.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18801){
var self__ = this;
var _18801__$1 = this;
return self__.meta18800;
}));

(cljs.core.async.t_cljs$core$async18799.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18799.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async18799.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18799.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__18784_SHARP_){
var G__18812 = (((p1__18784_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__18784_SHARP_) : self__.f.call(null,p1__18784_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__18812) : f1.call(null,G__18812));
});
}));

(cljs.core.async.t_cljs$core$async18799.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18789","meta18789",251004400,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async18788","cljs.core.async/t_cljs$core$async18788",-453278675,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta18800","meta18800",-195924389,null)], null);
}));

(cljs.core.async.t_cljs$core$async18799.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18799.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18799");

(cljs.core.async.t_cljs$core$async18799.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async18799");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18799.
 */
cljs.core.async.__GT_t_cljs$core$async18799 = (function cljs$core$async$__GT_t_cljs$core$async18799(f,ch,meta18789,_,fn1,meta18800){
return (new cljs.core.async.t_cljs$core$async18799(f,ch,meta18789,_,fn1,meta18800));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18788 = (function (f,ch,meta18789){
this.f = f;
this.ch = ch;
this.meta18789 = meta18789;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18788.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18790,meta18789__$1){
var self__ = this;
var _18790__$1 = this;
return (new cljs.core.async.t_cljs$core$async18788(self__.f,self__.ch,meta18789__$1));
}));

(cljs.core.async.t_cljs$core$async18788.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18790){
var self__ = this;
var _18790__$1 = this;
return self__.meta18789;
}));

(cljs.core.async.t_cljs$core$async18788.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18788.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18788.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18788.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18788.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async18799(self__.f,self__.ch,self__.meta18789,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5140__auto__ = ret;
if(cljs.core.truth_(and__5140__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5140__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__18818 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__18818) : self__.f.call(null,G__18818));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async18788.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18788.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async18788.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18789","meta18789",251004400,null)], null);
}));

(cljs.core.async.t_cljs$core$async18788.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18788.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18788");

(cljs.core.async.t_cljs$core$async18788.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async18788");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18788.
 */
cljs.core.async.__GT_t_cljs$core$async18788 = (function cljs$core$async$__GT_t_cljs$core$async18788(f,ch,meta18789){
return (new cljs.core.async.t_cljs$core$async18788(f,ch,meta18789));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async18788(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18826 = (function (f,ch,meta18827){
this.f = f;
this.ch = ch;
this.meta18827 = meta18827;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18826.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18828,meta18827__$1){
var self__ = this;
var _18828__$1 = this;
return (new cljs.core.async.t_cljs$core$async18826(self__.f,self__.ch,meta18827__$1));
}));

(cljs.core.async.t_cljs$core$async18826.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18828){
var self__ = this;
var _18828__$1 = this;
return self__.meta18827;
}));

(cljs.core.async.t_cljs$core$async18826.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18826.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18826.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18826.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async18826.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18826.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async18826.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18827","meta18827",2135631514,null)], null);
}));

(cljs.core.async.t_cljs$core$async18826.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18826.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18826");

(cljs.core.async.t_cljs$core$async18826.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async18826");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18826.
 */
cljs.core.async.__GT_t_cljs$core$async18826 = (function cljs$core$async$__GT_t_cljs$core$async18826(f,ch,meta18827){
return (new cljs.core.async.t_cljs$core$async18826(f,ch,meta18827));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async18826(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18841 = (function (p,ch,meta18842){
this.p = p;
this.ch = ch;
this.meta18842 = meta18842;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18841.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18843,meta18842__$1){
var self__ = this;
var _18843__$1 = this;
return (new cljs.core.async.t_cljs$core$async18841(self__.p,self__.ch,meta18842__$1));
}));

(cljs.core.async.t_cljs$core$async18841.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18843){
var self__ = this;
var _18843__$1 = this;
return self__.meta18842;
}));

(cljs.core.async.t_cljs$core$async18841.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18841.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18841.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18841.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18841.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async18841.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18841.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async18841.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18842","meta18842",426521762,null)], null);
}));

(cljs.core.async.t_cljs$core$async18841.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18841.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18841");

(cljs.core.async.t_cljs$core$async18841.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async18841");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18841.
 */
cljs.core.async.__GT_t_cljs$core$async18841 = (function cljs$core$async$__GT_t_cljs$core$async18841(p,ch,meta18842){
return (new cljs.core.async.t_cljs$core$async18841(p,ch,meta18842));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async18841(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__18868 = arguments.length;
switch (G__18868) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15167__auto___20638 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15168__auto__ = (function (){var switch__13794__auto__ = (function (state_18896){
var state_val_18897 = (state_18896[(1)]);
if((state_val_18897 === (7))){
var inst_18892 = (state_18896[(2)]);
var state_18896__$1 = state_18896;
var statearr_18904_20641 = state_18896__$1;
(statearr_18904_20641[(2)] = inst_18892);

(statearr_18904_20641[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18897 === (1))){
var state_18896__$1 = state_18896;
var statearr_18907_20643 = state_18896__$1;
(statearr_18907_20643[(2)] = null);

(statearr_18907_20643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18897 === (4))){
var inst_18874 = (state_18896[(7)]);
var inst_18874__$1 = (state_18896[(2)]);
var inst_18877 = (inst_18874__$1 == null);
var state_18896__$1 = (function (){var statearr_18916 = state_18896;
(statearr_18916[(7)] = inst_18874__$1);

return statearr_18916;
})();
if(cljs.core.truth_(inst_18877)){
var statearr_18918_20644 = state_18896__$1;
(statearr_18918_20644[(1)] = (5));

} else {
var statearr_18919_20645 = state_18896__$1;
(statearr_18919_20645[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18897 === (6))){
var inst_18874 = (state_18896[(7)]);
var inst_18882 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_18874) : p.call(null,inst_18874));
var state_18896__$1 = state_18896;
if(cljs.core.truth_(inst_18882)){
var statearr_18923_20648 = state_18896__$1;
(statearr_18923_20648[(1)] = (8));

} else {
var statearr_18924_20649 = state_18896__$1;
(statearr_18924_20649[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18897 === (3))){
var inst_18894 = (state_18896[(2)]);
var state_18896__$1 = state_18896;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18896__$1,inst_18894);
} else {
if((state_val_18897 === (2))){
var state_18896__$1 = state_18896;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18896__$1,(4),ch);
} else {
if((state_val_18897 === (11))){
var inst_18886 = (state_18896[(2)]);
var state_18896__$1 = state_18896;
var statearr_18930_20650 = state_18896__$1;
(statearr_18930_20650[(2)] = inst_18886);

(statearr_18930_20650[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18897 === (9))){
var state_18896__$1 = state_18896;
var statearr_18932_20652 = state_18896__$1;
(statearr_18932_20652[(2)] = null);

(statearr_18932_20652[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18897 === (5))){
var inst_18880 = cljs.core.async.close_BANG_(out);
var state_18896__$1 = state_18896;
var statearr_18936_20653 = state_18896__$1;
(statearr_18936_20653[(2)] = inst_18880);

(statearr_18936_20653[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18897 === (10))){
var inst_18889 = (state_18896[(2)]);
var state_18896__$1 = (function (){var statearr_18940 = state_18896;
(statearr_18940[(8)] = inst_18889);

return statearr_18940;
})();
var statearr_18941_20654 = state_18896__$1;
(statearr_18941_20654[(2)] = null);

(statearr_18941_20654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18897 === (8))){
var inst_18874 = (state_18896[(7)]);
var state_18896__$1 = state_18896;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18896__$1,(11),out,inst_18874);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13795__auto__ = null;
var cljs$core$async$state_machine__13795__auto____0 = (function (){
var statearr_18948 = [null,null,null,null,null,null,null,null,null];
(statearr_18948[(0)] = cljs$core$async$state_machine__13795__auto__);

(statearr_18948[(1)] = (1));

return statearr_18948;
});
var cljs$core$async$state_machine__13795__auto____1 = (function (state_18896){
while(true){
var ret_value__13796__auto__ = (function (){try{while(true){
var result__13797__auto__ = switch__13794__auto__(state_18896);
if(cljs.core.keyword_identical_QMARK_(result__13797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13797__auto__;
}
break;
}
}catch (e18954){var ex__13799__auto__ = e18954;
var statearr_18956_20659 = state_18896;
(statearr_18956_20659[(2)] = ex__13799__auto__);


if(cljs.core.seq((state_18896[(4)]))){
var statearr_18961_20660 = state_18896;
(statearr_18961_20660[(1)] = cljs.core.first((state_18896[(4)])));

} else {
throw ex__13799__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20661 = state_18896;
state_18896 = G__20661;
continue;
} else {
return ret_value__13796__auto__;
}
break;
}
});
cljs$core$async$state_machine__13795__auto__ = function(state_18896){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13795__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13795__auto____1.call(this,state_18896);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13795__auto____0;
cljs$core$async$state_machine__13795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13795__auto____1;
return cljs$core$async$state_machine__13795__auto__;
})()
})();
var state__15169__auto__ = (function (){var statearr_18970 = f__15168__auto__();
(statearr_18970[(6)] = c__15167__auto___20638);

return statearr_18970;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15169__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__18982 = arguments.length;
switch (G__18982) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__15167__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15168__auto__ = (function (){var switch__13794__auto__ = (function (state_19085){
var state_val_19089 = (state_19085[(1)]);
if((state_val_19089 === (7))){
var inst_19077 = (state_19085[(2)]);
var state_19085__$1 = state_19085;
var statearr_19102_20672 = state_19085__$1;
(statearr_19102_20672[(2)] = inst_19077);

(statearr_19102_20672[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19089 === (20))){
var inst_19034 = (state_19085[(7)]);
var inst_19052 = (state_19085[(2)]);
var inst_19055 = cljs.core.next(inst_19034);
var inst_19015 = inst_19055;
var inst_19016 = null;
var inst_19017 = (0);
var inst_19018 = (0);
var state_19085__$1 = (function (){var statearr_19107 = state_19085;
(statearr_19107[(8)] = inst_19052);

(statearr_19107[(9)] = inst_19015);

(statearr_19107[(10)] = inst_19016);

(statearr_19107[(11)] = inst_19017);

(statearr_19107[(12)] = inst_19018);

return statearr_19107;
})();
var statearr_19108_20677 = state_19085__$1;
(statearr_19108_20677[(2)] = null);

(statearr_19108_20677[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19089 === (1))){
var state_19085__$1 = state_19085;
var statearr_19109_20678 = state_19085__$1;
(statearr_19109_20678[(2)] = null);

(statearr_19109_20678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19089 === (4))){
var inst_19001 = (state_19085[(13)]);
var inst_19001__$1 = (state_19085[(2)]);
var inst_19004 = (inst_19001__$1 == null);
var state_19085__$1 = (function (){var statearr_19111 = state_19085;
(statearr_19111[(13)] = inst_19001__$1);

return statearr_19111;
})();
if(cljs.core.truth_(inst_19004)){
var statearr_19112_20679 = state_19085__$1;
(statearr_19112_20679[(1)] = (5));

} else {
var statearr_19113_20683 = state_19085__$1;
(statearr_19113_20683[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19089 === (15))){
var state_19085__$1 = state_19085;
var statearr_19117_20685 = state_19085__$1;
(statearr_19117_20685[(2)] = null);

(statearr_19117_20685[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19089 === (21))){
var state_19085__$1 = state_19085;
var statearr_19118_20689 = state_19085__$1;
(statearr_19118_20689[(2)] = null);

(statearr_19118_20689[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19089 === (13))){
var inst_19018 = (state_19085[(12)]);
var inst_19015 = (state_19085[(9)]);
var inst_19016 = (state_19085[(10)]);
var inst_19017 = (state_19085[(11)]);
var inst_19026 = (state_19085[(2)]);
var inst_19027 = (inst_19018 + (1));
var tmp19114 = inst_19017;
var tmp19115 = inst_19016;
var tmp19116 = inst_19015;
var inst_19015__$1 = tmp19116;
var inst_19016__$1 = tmp19115;
var inst_19017__$1 = tmp19114;
var inst_19018__$1 = inst_19027;
var state_19085__$1 = (function (){var statearr_19123 = state_19085;
(statearr_19123[(14)] = inst_19026);

(statearr_19123[(9)] = inst_19015__$1);

(statearr_19123[(10)] = inst_19016__$1);

(statearr_19123[(11)] = inst_19017__$1);

(statearr_19123[(12)] = inst_19018__$1);

return statearr_19123;
})();
var statearr_19126_20690 = state_19085__$1;
(statearr_19126_20690[(2)] = null);

(statearr_19126_20690[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19089 === (22))){
var state_19085__$1 = state_19085;
var statearr_19133_20692 = state_19085__$1;
(statearr_19133_20692[(2)] = null);

(statearr_19133_20692[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19089 === (6))){
var inst_19001 = (state_19085[(13)]);
var inst_19013 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19001) : f.call(null,inst_19001));
var inst_19014 = cljs.core.seq(inst_19013);
var inst_19015 = inst_19014;
var inst_19016 = null;
var inst_19017 = (0);
var inst_19018 = (0);
var state_19085__$1 = (function (){var statearr_19135 = state_19085;
(statearr_19135[(9)] = inst_19015);

(statearr_19135[(10)] = inst_19016);

(statearr_19135[(11)] = inst_19017);

(statearr_19135[(12)] = inst_19018);

return statearr_19135;
})();
var statearr_19137_20695 = state_19085__$1;
(statearr_19137_20695[(2)] = null);

(statearr_19137_20695[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19089 === (17))){
var inst_19034 = (state_19085[(7)]);
var inst_19042 = cljs.core.chunk_first(inst_19034);
var inst_19043 = cljs.core.chunk_rest(inst_19034);
var inst_19044 = cljs.core.count(inst_19042);
var inst_19015 = inst_19043;
var inst_19016 = inst_19042;
var inst_19017 = inst_19044;
var inst_19018 = (0);
var state_19085__$1 = (function (){var statearr_19143 = state_19085;
(statearr_19143[(9)] = inst_19015);

(statearr_19143[(10)] = inst_19016);

(statearr_19143[(11)] = inst_19017);

(statearr_19143[(12)] = inst_19018);

return statearr_19143;
})();
var statearr_19146_20697 = state_19085__$1;
(statearr_19146_20697[(2)] = null);

(statearr_19146_20697[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19089 === (3))){
var inst_19079 = (state_19085[(2)]);
var state_19085__$1 = state_19085;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19085__$1,inst_19079);
} else {
if((state_val_19089 === (12))){
var inst_19067 = (state_19085[(2)]);
var state_19085__$1 = state_19085;
var statearr_19150_20699 = state_19085__$1;
(statearr_19150_20699[(2)] = inst_19067);

(statearr_19150_20699[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19089 === (2))){
var state_19085__$1 = state_19085;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19085__$1,(4),in$);
} else {
if((state_val_19089 === (23))){
var inst_19075 = (state_19085[(2)]);
var state_19085__$1 = state_19085;
var statearr_19155_20700 = state_19085__$1;
(statearr_19155_20700[(2)] = inst_19075);

(statearr_19155_20700[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19089 === (19))){
var inst_19059 = (state_19085[(2)]);
var state_19085__$1 = state_19085;
var statearr_19157_20703 = state_19085__$1;
(statearr_19157_20703[(2)] = inst_19059);

(statearr_19157_20703[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19089 === (11))){
var inst_19015 = (state_19085[(9)]);
var inst_19034 = (state_19085[(7)]);
var inst_19034__$1 = cljs.core.seq(inst_19015);
var state_19085__$1 = (function (){var statearr_19162 = state_19085;
(statearr_19162[(7)] = inst_19034__$1);

return statearr_19162;
})();
if(inst_19034__$1){
var statearr_19163_20706 = state_19085__$1;
(statearr_19163_20706[(1)] = (14));

} else {
var statearr_19165_20707 = state_19085__$1;
(statearr_19165_20707[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19089 === (9))){
var inst_19069 = (state_19085[(2)]);
var inst_19070 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_19085__$1 = (function (){var statearr_19167 = state_19085;
(statearr_19167[(15)] = inst_19069);

return statearr_19167;
})();
if(cljs.core.truth_(inst_19070)){
var statearr_19175_20708 = state_19085__$1;
(statearr_19175_20708[(1)] = (21));

} else {
var statearr_19176_20709 = state_19085__$1;
(statearr_19176_20709[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19089 === (5))){
var inst_19006 = cljs.core.async.close_BANG_(out);
var state_19085__$1 = state_19085;
var statearr_19177_20711 = state_19085__$1;
(statearr_19177_20711[(2)] = inst_19006);

(statearr_19177_20711[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19089 === (14))){
var inst_19034 = (state_19085[(7)]);
var inst_19036 = cljs.core.chunked_seq_QMARK_(inst_19034);
var state_19085__$1 = state_19085;
if(inst_19036){
var statearr_19184_20714 = state_19085__$1;
(statearr_19184_20714[(1)] = (17));

} else {
var statearr_19185_20715 = state_19085__$1;
(statearr_19185_20715[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19089 === (16))){
var inst_19063 = (state_19085[(2)]);
var state_19085__$1 = state_19085;
var statearr_19187_20717 = state_19085__$1;
(statearr_19187_20717[(2)] = inst_19063);

(statearr_19187_20717[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19089 === (10))){
var inst_19016 = (state_19085[(10)]);
var inst_19018 = (state_19085[(12)]);
var inst_19024 = cljs.core._nth(inst_19016,inst_19018);
var state_19085__$1 = state_19085;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19085__$1,(13),out,inst_19024);
} else {
if((state_val_19089 === (18))){
var inst_19034 = (state_19085[(7)]);
var inst_19050 = cljs.core.first(inst_19034);
var state_19085__$1 = state_19085;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19085__$1,(20),out,inst_19050);
} else {
if((state_val_19089 === (8))){
var inst_19018 = (state_19085[(12)]);
var inst_19017 = (state_19085[(11)]);
var inst_19020 = (inst_19018 < inst_19017);
var inst_19021 = inst_19020;
var state_19085__$1 = state_19085;
if(cljs.core.truth_(inst_19021)){
var statearr_19191_20718 = state_19085__$1;
(statearr_19191_20718[(1)] = (10));

} else {
var statearr_19192_20719 = state_19085__$1;
(statearr_19192_20719[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__13795__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__13795__auto____0 = (function (){
var statearr_19212 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19212[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__13795__auto__);

(statearr_19212[(1)] = (1));

return statearr_19212;
});
var cljs$core$async$mapcat_STAR__$_state_machine__13795__auto____1 = (function (state_19085){
while(true){
var ret_value__13796__auto__ = (function (){try{while(true){
var result__13797__auto__ = switch__13794__auto__(state_19085);
if(cljs.core.keyword_identical_QMARK_(result__13797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13797__auto__;
}
break;
}
}catch (e19217){var ex__13799__auto__ = e19217;
var statearr_19218_20721 = state_19085;
(statearr_19218_20721[(2)] = ex__13799__auto__);


if(cljs.core.seq((state_19085[(4)]))){
var statearr_19222_20723 = state_19085;
(statearr_19222_20723[(1)] = cljs.core.first((state_19085[(4)])));

} else {
throw ex__13799__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20724 = state_19085;
state_19085 = G__20724;
continue;
} else {
return ret_value__13796__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__13795__auto__ = function(state_19085){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__13795__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__13795__auto____1.call(this,state_19085);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__13795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__13795__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__13795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__13795__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__13795__auto__;
})()
})();
var state__15169__auto__ = (function (){var statearr_19228 = f__15168__auto__();
(statearr_19228[(6)] = c__15167__auto__);

return statearr_19228;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15169__auto__);
}));

return c__15167__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__19238 = arguments.length;
switch (G__19238) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__19253 = arguments.length;
switch (G__19253) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__19277 = arguments.length;
switch (G__19277) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15167__auto___20732 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15168__auto__ = (function (){var switch__13794__auto__ = (function (state_19316){
var state_val_19317 = (state_19316[(1)]);
if((state_val_19317 === (7))){
var inst_19310 = (state_19316[(2)]);
var state_19316__$1 = state_19316;
var statearr_19323_20733 = state_19316__$1;
(statearr_19323_20733[(2)] = inst_19310);

(statearr_19323_20733[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19317 === (1))){
var inst_19289 = null;
var state_19316__$1 = (function (){var statearr_19331 = state_19316;
(statearr_19331[(7)] = inst_19289);

return statearr_19331;
})();
var statearr_19332_20738 = state_19316__$1;
(statearr_19332_20738[(2)] = null);

(statearr_19332_20738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19317 === (4))){
var inst_19293 = (state_19316[(8)]);
var inst_19293__$1 = (state_19316[(2)]);
var inst_19295 = (inst_19293__$1 == null);
var inst_19296 = cljs.core.not(inst_19295);
var state_19316__$1 = (function (){var statearr_19335 = state_19316;
(statearr_19335[(8)] = inst_19293__$1);

return statearr_19335;
})();
if(inst_19296){
var statearr_19337_20739 = state_19316__$1;
(statearr_19337_20739[(1)] = (5));

} else {
var statearr_19338_20740 = state_19316__$1;
(statearr_19338_20740[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19317 === (6))){
var state_19316__$1 = state_19316;
var statearr_19340_20741 = state_19316__$1;
(statearr_19340_20741[(2)] = null);

(statearr_19340_20741[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19317 === (3))){
var inst_19312 = (state_19316[(2)]);
var inst_19313 = cljs.core.async.close_BANG_(out);
var state_19316__$1 = (function (){var statearr_19344 = state_19316;
(statearr_19344[(9)] = inst_19312);

return statearr_19344;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19316__$1,inst_19313);
} else {
if((state_val_19317 === (2))){
var state_19316__$1 = state_19316;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19316__$1,(4),ch);
} else {
if((state_val_19317 === (11))){
var inst_19293 = (state_19316[(8)]);
var inst_19304 = (state_19316[(2)]);
var inst_19289 = inst_19293;
var state_19316__$1 = (function (){var statearr_19346 = state_19316;
(statearr_19346[(10)] = inst_19304);

(statearr_19346[(7)] = inst_19289);

return statearr_19346;
})();
var statearr_19348_20743 = state_19316__$1;
(statearr_19348_20743[(2)] = null);

(statearr_19348_20743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19317 === (9))){
var inst_19293 = (state_19316[(8)]);
var state_19316__$1 = state_19316;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19316__$1,(11),out,inst_19293);
} else {
if((state_val_19317 === (5))){
var inst_19293 = (state_19316[(8)]);
var inst_19289 = (state_19316[(7)]);
var inst_19299 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19293,inst_19289);
var state_19316__$1 = state_19316;
if(inst_19299){
var statearr_19353_20745 = state_19316__$1;
(statearr_19353_20745[(1)] = (8));

} else {
var statearr_19355_20746 = state_19316__$1;
(statearr_19355_20746[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19317 === (10))){
var inst_19307 = (state_19316[(2)]);
var state_19316__$1 = state_19316;
var statearr_19360_20747 = state_19316__$1;
(statearr_19360_20747[(2)] = inst_19307);

(statearr_19360_20747[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19317 === (8))){
var inst_19289 = (state_19316[(7)]);
var tmp19351 = inst_19289;
var inst_19289__$1 = tmp19351;
var state_19316__$1 = (function (){var statearr_19363 = state_19316;
(statearr_19363[(7)] = inst_19289__$1);

return statearr_19363;
})();
var statearr_19368_20749 = state_19316__$1;
(statearr_19368_20749[(2)] = null);

(statearr_19368_20749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13795__auto__ = null;
var cljs$core$async$state_machine__13795__auto____0 = (function (){
var statearr_19375 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19375[(0)] = cljs$core$async$state_machine__13795__auto__);

(statearr_19375[(1)] = (1));

return statearr_19375;
});
var cljs$core$async$state_machine__13795__auto____1 = (function (state_19316){
while(true){
var ret_value__13796__auto__ = (function (){try{while(true){
var result__13797__auto__ = switch__13794__auto__(state_19316);
if(cljs.core.keyword_identical_QMARK_(result__13797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13797__auto__;
}
break;
}
}catch (e19377){var ex__13799__auto__ = e19377;
var statearr_19378_20751 = state_19316;
(statearr_19378_20751[(2)] = ex__13799__auto__);


if(cljs.core.seq((state_19316[(4)]))){
var statearr_19380_20752 = state_19316;
(statearr_19380_20752[(1)] = cljs.core.first((state_19316[(4)])));

} else {
throw ex__13799__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20754 = state_19316;
state_19316 = G__20754;
continue;
} else {
return ret_value__13796__auto__;
}
break;
}
});
cljs$core$async$state_machine__13795__auto__ = function(state_19316){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13795__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13795__auto____1.call(this,state_19316);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13795__auto____0;
cljs$core$async$state_machine__13795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13795__auto____1;
return cljs$core$async$state_machine__13795__auto__;
})()
})();
var state__15169__auto__ = (function (){var statearr_19382 = f__15168__auto__();
(statearr_19382[(6)] = c__15167__auto___20732);

return statearr_19382;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15169__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__19387 = arguments.length;
switch (G__19387) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15167__auto___20759 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15168__auto__ = (function (){var switch__13794__auto__ = (function (state_19434){
var state_val_19436 = (state_19434[(1)]);
if((state_val_19436 === (7))){
var inst_19430 = (state_19434[(2)]);
var state_19434__$1 = state_19434;
var statearr_19440_20760 = state_19434__$1;
(statearr_19440_20760[(2)] = inst_19430);

(statearr_19440_20760[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19436 === (1))){
var inst_19394 = (new Array(n));
var inst_19395 = inst_19394;
var inst_19396 = (0);
var state_19434__$1 = (function (){var statearr_19442 = state_19434;
(statearr_19442[(7)] = inst_19395);

(statearr_19442[(8)] = inst_19396);

return statearr_19442;
})();
var statearr_19443_20761 = state_19434__$1;
(statearr_19443_20761[(2)] = null);

(statearr_19443_20761[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19436 === (4))){
var inst_19400 = (state_19434[(9)]);
var inst_19400__$1 = (state_19434[(2)]);
var inst_19401 = (inst_19400__$1 == null);
var inst_19402 = cljs.core.not(inst_19401);
var state_19434__$1 = (function (){var statearr_19452 = state_19434;
(statearr_19452[(9)] = inst_19400__$1);

return statearr_19452;
})();
if(inst_19402){
var statearr_19453_20763 = state_19434__$1;
(statearr_19453_20763[(1)] = (5));

} else {
var statearr_19454_20764 = state_19434__$1;
(statearr_19454_20764[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19436 === (15))){
var inst_19424 = (state_19434[(2)]);
var state_19434__$1 = state_19434;
var statearr_19455_20765 = state_19434__$1;
(statearr_19455_20765[(2)] = inst_19424);

(statearr_19455_20765[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19436 === (13))){
var state_19434__$1 = state_19434;
var statearr_19456_20771 = state_19434__$1;
(statearr_19456_20771[(2)] = null);

(statearr_19456_20771[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19436 === (6))){
var inst_19396 = (state_19434[(8)]);
var inst_19420 = (inst_19396 > (0));
var state_19434__$1 = state_19434;
if(cljs.core.truth_(inst_19420)){
var statearr_19457_20772 = state_19434__$1;
(statearr_19457_20772[(1)] = (12));

} else {
var statearr_19458_20773 = state_19434__$1;
(statearr_19458_20773[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19436 === (3))){
var inst_19432 = (state_19434[(2)]);
var state_19434__$1 = state_19434;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19434__$1,inst_19432);
} else {
if((state_val_19436 === (12))){
var inst_19395 = (state_19434[(7)]);
var inst_19422 = cljs.core.vec(inst_19395);
var state_19434__$1 = state_19434;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19434__$1,(15),out,inst_19422);
} else {
if((state_val_19436 === (2))){
var state_19434__$1 = state_19434;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19434__$1,(4),ch);
} else {
if((state_val_19436 === (11))){
var inst_19414 = (state_19434[(2)]);
var inst_19415 = (new Array(n));
var inst_19395 = inst_19415;
var inst_19396 = (0);
var state_19434__$1 = (function (){var statearr_19470 = state_19434;
(statearr_19470[(10)] = inst_19414);

(statearr_19470[(7)] = inst_19395);

(statearr_19470[(8)] = inst_19396);

return statearr_19470;
})();
var statearr_19472_20780 = state_19434__$1;
(statearr_19472_20780[(2)] = null);

(statearr_19472_20780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19436 === (9))){
var inst_19395 = (state_19434[(7)]);
var inst_19412 = cljs.core.vec(inst_19395);
var state_19434__$1 = state_19434;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19434__$1,(11),out,inst_19412);
} else {
if((state_val_19436 === (5))){
var inst_19395 = (state_19434[(7)]);
var inst_19396 = (state_19434[(8)]);
var inst_19400 = (state_19434[(9)]);
var inst_19407 = (state_19434[(11)]);
var inst_19406 = (inst_19395[inst_19396] = inst_19400);
var inst_19407__$1 = (inst_19396 + (1));
var inst_19408 = (inst_19407__$1 < n);
var state_19434__$1 = (function (){var statearr_19480 = state_19434;
(statearr_19480[(12)] = inst_19406);

(statearr_19480[(11)] = inst_19407__$1);

return statearr_19480;
})();
if(cljs.core.truth_(inst_19408)){
var statearr_19481_20787 = state_19434__$1;
(statearr_19481_20787[(1)] = (8));

} else {
var statearr_19483_20788 = state_19434__$1;
(statearr_19483_20788[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19436 === (14))){
var inst_19427 = (state_19434[(2)]);
var inst_19428 = cljs.core.async.close_BANG_(out);
var state_19434__$1 = (function (){var statearr_19485 = state_19434;
(statearr_19485[(13)] = inst_19427);

return statearr_19485;
})();
var statearr_19486_20791 = state_19434__$1;
(statearr_19486_20791[(2)] = inst_19428);

(statearr_19486_20791[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19436 === (10))){
var inst_19418 = (state_19434[(2)]);
var state_19434__$1 = state_19434;
var statearr_19487_20792 = state_19434__$1;
(statearr_19487_20792[(2)] = inst_19418);

(statearr_19487_20792[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19436 === (8))){
var inst_19395 = (state_19434[(7)]);
var inst_19407 = (state_19434[(11)]);
var tmp19484 = inst_19395;
var inst_19395__$1 = tmp19484;
var inst_19396 = inst_19407;
var state_19434__$1 = (function (){var statearr_19488 = state_19434;
(statearr_19488[(7)] = inst_19395__$1);

(statearr_19488[(8)] = inst_19396);

return statearr_19488;
})();
var statearr_19489_20793 = state_19434__$1;
(statearr_19489_20793[(2)] = null);

(statearr_19489_20793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13795__auto__ = null;
var cljs$core$async$state_machine__13795__auto____0 = (function (){
var statearr_19491 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19491[(0)] = cljs$core$async$state_machine__13795__auto__);

(statearr_19491[(1)] = (1));

return statearr_19491;
});
var cljs$core$async$state_machine__13795__auto____1 = (function (state_19434){
while(true){
var ret_value__13796__auto__ = (function (){try{while(true){
var result__13797__auto__ = switch__13794__auto__(state_19434);
if(cljs.core.keyword_identical_QMARK_(result__13797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13797__auto__;
}
break;
}
}catch (e19493){var ex__13799__auto__ = e19493;
var statearr_19495_20794 = state_19434;
(statearr_19495_20794[(2)] = ex__13799__auto__);


if(cljs.core.seq((state_19434[(4)]))){
var statearr_19496_20796 = state_19434;
(statearr_19496_20796[(1)] = cljs.core.first((state_19434[(4)])));

} else {
throw ex__13799__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20797 = state_19434;
state_19434 = G__20797;
continue;
} else {
return ret_value__13796__auto__;
}
break;
}
});
cljs$core$async$state_machine__13795__auto__ = function(state_19434){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13795__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13795__auto____1.call(this,state_19434);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13795__auto____0;
cljs$core$async$state_machine__13795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13795__auto____1;
return cljs$core$async$state_machine__13795__auto__;
})()
})();
var state__15169__auto__ = (function (){var statearr_19501 = f__15168__auto__();
(statearr_19501[(6)] = c__15167__auto___20759);

return statearr_19501;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15169__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__19509 = arguments.length;
switch (G__19509) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15167__auto___20803 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__15168__auto__ = (function (){var switch__13794__auto__ = (function (state_19568){
var state_val_19569 = (state_19568[(1)]);
if((state_val_19569 === (7))){
var inst_19564 = (state_19568[(2)]);
var state_19568__$1 = state_19568;
var statearr_19571_20804 = state_19568__$1;
(statearr_19571_20804[(2)] = inst_19564);

(statearr_19571_20804[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19569 === (1))){
var inst_19518 = [];
var inst_19519 = inst_19518;
var inst_19520 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_19568__$1 = (function (){var statearr_19572 = state_19568;
(statearr_19572[(7)] = inst_19519);

(statearr_19572[(8)] = inst_19520);

return statearr_19572;
})();
var statearr_19575_20805 = state_19568__$1;
(statearr_19575_20805[(2)] = null);

(statearr_19575_20805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19569 === (4))){
var inst_19526 = (state_19568[(9)]);
var inst_19526__$1 = (state_19568[(2)]);
var inst_19527 = (inst_19526__$1 == null);
var inst_19528 = cljs.core.not(inst_19527);
var state_19568__$1 = (function (){var statearr_19582 = state_19568;
(statearr_19582[(9)] = inst_19526__$1);

return statearr_19582;
})();
if(inst_19528){
var statearr_19586_20806 = state_19568__$1;
(statearr_19586_20806[(1)] = (5));

} else {
var statearr_19589_20808 = state_19568__$1;
(statearr_19589_20808[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19569 === (15))){
var inst_19519 = (state_19568[(7)]);
var inst_19556 = cljs.core.vec(inst_19519);
var state_19568__$1 = state_19568;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19568__$1,(18),out,inst_19556);
} else {
if((state_val_19569 === (13))){
var inst_19551 = (state_19568[(2)]);
var state_19568__$1 = state_19568;
var statearr_19593_20809 = state_19568__$1;
(statearr_19593_20809[(2)] = inst_19551);

(statearr_19593_20809[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19569 === (6))){
var inst_19519 = (state_19568[(7)]);
var inst_19553 = inst_19519.length;
var inst_19554 = (inst_19553 > (0));
var state_19568__$1 = state_19568;
if(cljs.core.truth_(inst_19554)){
var statearr_19600_20810 = state_19568__$1;
(statearr_19600_20810[(1)] = (15));

} else {
var statearr_19602_20811 = state_19568__$1;
(statearr_19602_20811[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19569 === (17))){
var inst_19561 = (state_19568[(2)]);
var inst_19562 = cljs.core.async.close_BANG_(out);
var state_19568__$1 = (function (){var statearr_19603 = state_19568;
(statearr_19603[(10)] = inst_19561);

return statearr_19603;
})();
var statearr_19605_20812 = state_19568__$1;
(statearr_19605_20812[(2)] = inst_19562);

(statearr_19605_20812[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19569 === (3))){
var inst_19566 = (state_19568[(2)]);
var state_19568__$1 = state_19568;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19568__$1,inst_19566);
} else {
if((state_val_19569 === (12))){
var inst_19519 = (state_19568[(7)]);
var inst_19541 = cljs.core.vec(inst_19519);
var state_19568__$1 = state_19568;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19568__$1,(14),out,inst_19541);
} else {
if((state_val_19569 === (2))){
var state_19568__$1 = state_19568;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19568__$1,(4),ch);
} else {
if((state_val_19569 === (11))){
var inst_19519 = (state_19568[(7)]);
var inst_19526 = (state_19568[(9)]);
var inst_19530 = (state_19568[(11)]);
var inst_19538 = inst_19519.push(inst_19526);
var tmp19606 = inst_19519;
var inst_19519__$1 = tmp19606;
var inst_19520 = inst_19530;
var state_19568__$1 = (function (){var statearr_19611 = state_19568;
(statearr_19611[(12)] = inst_19538);

(statearr_19611[(7)] = inst_19519__$1);

(statearr_19611[(8)] = inst_19520);

return statearr_19611;
})();
var statearr_19612_20817 = state_19568__$1;
(statearr_19612_20817[(2)] = null);

(statearr_19612_20817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19569 === (9))){
var inst_19520 = (state_19568[(8)]);
var inst_19534 = cljs.core.keyword_identical_QMARK_(inst_19520,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_19568__$1 = state_19568;
var statearr_19617_20820 = state_19568__$1;
(statearr_19617_20820[(2)] = inst_19534);

(statearr_19617_20820[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19569 === (5))){
var inst_19526 = (state_19568[(9)]);
var inst_19530 = (state_19568[(11)]);
var inst_19520 = (state_19568[(8)]);
var inst_19531 = (state_19568[(13)]);
var inst_19530__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19526) : f.call(null,inst_19526));
var inst_19531__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19530__$1,inst_19520);
var state_19568__$1 = (function (){var statearr_19618 = state_19568;
(statearr_19618[(11)] = inst_19530__$1);

(statearr_19618[(13)] = inst_19531__$1);

return statearr_19618;
})();
if(inst_19531__$1){
var statearr_19619_20821 = state_19568__$1;
(statearr_19619_20821[(1)] = (8));

} else {
var statearr_19628_20823 = state_19568__$1;
(statearr_19628_20823[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19569 === (14))){
var inst_19526 = (state_19568[(9)]);
var inst_19530 = (state_19568[(11)]);
var inst_19543 = (state_19568[(2)]);
var inst_19546 = [];
var inst_19547 = inst_19546.push(inst_19526);
var inst_19519 = inst_19546;
var inst_19520 = inst_19530;
var state_19568__$1 = (function (){var statearr_19641 = state_19568;
(statearr_19641[(14)] = inst_19543);

(statearr_19641[(15)] = inst_19547);

(statearr_19641[(7)] = inst_19519);

(statearr_19641[(8)] = inst_19520);

return statearr_19641;
})();
var statearr_19649_20824 = state_19568__$1;
(statearr_19649_20824[(2)] = null);

(statearr_19649_20824[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19569 === (16))){
var state_19568__$1 = state_19568;
var statearr_19655_20825 = state_19568__$1;
(statearr_19655_20825[(2)] = null);

(statearr_19655_20825[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19569 === (10))){
var inst_19536 = (state_19568[(2)]);
var state_19568__$1 = state_19568;
if(cljs.core.truth_(inst_19536)){
var statearr_19667_20826 = state_19568__$1;
(statearr_19667_20826[(1)] = (11));

} else {
var statearr_19670_20827 = state_19568__$1;
(statearr_19670_20827[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19569 === (18))){
var inst_19558 = (state_19568[(2)]);
var state_19568__$1 = state_19568;
var statearr_19683_20828 = state_19568__$1;
(statearr_19683_20828[(2)] = inst_19558);

(statearr_19683_20828[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19569 === (8))){
var inst_19531 = (state_19568[(13)]);
var state_19568__$1 = state_19568;
var statearr_19685_20830 = state_19568__$1;
(statearr_19685_20830[(2)] = inst_19531);

(statearr_19685_20830[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13795__auto__ = null;
var cljs$core$async$state_machine__13795__auto____0 = (function (){
var statearr_19701 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19701[(0)] = cljs$core$async$state_machine__13795__auto__);

(statearr_19701[(1)] = (1));

return statearr_19701;
});
var cljs$core$async$state_machine__13795__auto____1 = (function (state_19568){
while(true){
var ret_value__13796__auto__ = (function (){try{while(true){
var result__13797__auto__ = switch__13794__auto__(state_19568);
if(cljs.core.keyword_identical_QMARK_(result__13797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13797__auto__;
}
break;
}
}catch (e19709){var ex__13799__auto__ = e19709;
var statearr_19711_20837 = state_19568;
(statearr_19711_20837[(2)] = ex__13799__auto__);


if(cljs.core.seq((state_19568[(4)]))){
var statearr_19713_20839 = state_19568;
(statearr_19713_20839[(1)] = cljs.core.first((state_19568[(4)])));

} else {
throw ex__13799__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20840 = state_19568;
state_19568 = G__20840;
continue;
} else {
return ret_value__13796__auto__;
}
break;
}
});
cljs$core$async$state_machine__13795__auto__ = function(state_19568){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13795__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13795__auto____1.call(this,state_19568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13795__auto____0;
cljs$core$async$state_machine__13795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13795__auto____1;
return cljs$core$async$state_machine__13795__auto__;
})()
})();
var state__15169__auto__ = (function (){var statearr_19728 = f__15168__auto__();
(statearr_19728[(6)] = c__15167__auto___20803);

return statearr_19728;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15169__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
