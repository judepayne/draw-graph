goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__34008 = arguments.length;
switch (G__34008) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34010 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34010 = (function (f,blockable,meta34011){
this.f = f;
this.blockable = blockable;
this.meta34011 = meta34011;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34010.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34012,meta34011__$1){
var self__ = this;
var _34012__$1 = this;
return (new cljs.core.async.t_cljs$core$async34010(self__.f,self__.blockable,meta34011__$1));
}));

(cljs.core.async.t_cljs$core$async34010.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34012){
var self__ = this;
var _34012__$1 = this;
return self__.meta34011;
}));

(cljs.core.async.t_cljs$core$async34010.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34010.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34010.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async34010.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async34010.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta34011","meta34011",-1857009685,null)], null);
}));

(cljs.core.async.t_cljs$core$async34010.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34010.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34010");

(cljs.core.async.t_cljs$core$async34010.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async34010");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34010.
 */
cljs.core.async.__GT_t_cljs$core$async34010 = (function cljs$core$async$__GT_t_cljs$core$async34010(f__$1,blockable__$1,meta34011){
return (new cljs.core.async.t_cljs$core$async34010(f__$1,blockable__$1,meta34011));
});

}

return (new cljs.core.async.t_cljs$core$async34010(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__34042 = arguments.length;
switch (G__34042) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
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
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__34053 = arguments.length;
switch (G__34053) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__34068 = arguments.length;
switch (G__34068) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_36379 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36379) : fn1.call(null,val_36379));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36379) : fn1.call(null,val_36379));
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
var G__34088 = arguments.length;
switch (G__34088) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
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
var n__4666__auto___36393 = n;
var x_36394 = (0);
while(true){
if((x_36394 < n__4666__auto___36393)){
(a[x_36394] = x_36394);

var G__36397 = (x_36394 + (1));
x_36394 = G__36397;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34100 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34100 = (function (flag,meta34101){
this.flag = flag;
this.meta34101 = meta34101;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34100.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34102,meta34101__$1){
var self__ = this;
var _34102__$1 = this;
return (new cljs.core.async.t_cljs$core$async34100(self__.flag,meta34101__$1));
}));

(cljs.core.async.t_cljs$core$async34100.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34102){
var self__ = this;
var _34102__$1 = this;
return self__.meta34101;
}));

(cljs.core.async.t_cljs$core$async34100.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34100.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async34100.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34100.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async34100.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta34101","meta34101",-1906191025,null)], null);
}));

(cljs.core.async.t_cljs$core$async34100.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34100.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34100");

(cljs.core.async.t_cljs$core$async34100.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async34100");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34100.
 */
cljs.core.async.__GT_t_cljs$core$async34100 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async34100(flag__$1,meta34101){
return (new cljs.core.async.t_cljs$core$async34100(flag__$1,meta34101));
});

}

return (new cljs.core.async.t_cljs$core$async34100(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34125 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34125 = (function (flag,cb,meta34126){
this.flag = flag;
this.cb = cb;
this.meta34126 = meta34126;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34125.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34127,meta34126__$1){
var self__ = this;
var _34127__$1 = this;
return (new cljs.core.async.t_cljs$core$async34125(self__.flag,self__.cb,meta34126__$1));
}));

(cljs.core.async.t_cljs$core$async34125.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34127){
var self__ = this;
var _34127__$1 = this;
return self__.meta34126;
}));

(cljs.core.async.t_cljs$core$async34125.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34125.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async34125.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34125.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async34125.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta34126","meta34126",-419475767,null)], null);
}));

(cljs.core.async.t_cljs$core$async34125.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34125.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34125");

(cljs.core.async.t_cljs$core$async34125.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async34125");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34125.
 */
cljs.core.async.__GT_t_cljs$core$async34125 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async34125(flag__$1,cb__$1,meta34126){
return (new cljs.core.async.t_cljs$core$async34125(flag__$1,cb__$1,meta34126));
});

}

return (new cljs.core.async.t_cljs$core$async34125(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34136_SHARP_){
var G__34138 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34136_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__34138) : fret.call(null,G__34138));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34137_SHARP_){
var G__34139 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34137_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__34139) : fret.call(null,G__34139));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4185__auto__ = wport;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return port;
}
})()], null));
} else {
var G__36463 = (i + (1));
i = G__36463;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4185__auto__ = ret;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4174__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4174__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
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
var args__4795__auto__ = [];
var len__4789__auto___36468 = arguments.length;
var i__4790__auto___36469 = (0);
while(true){
if((i__4790__auto___36469 < len__4789__auto___36468)){
args__4795__auto__.push((arguments[i__4790__auto___36469]));

var G__36474 = (i__4790__auto___36469 + (1));
i__4790__auto___36469 = G__36474;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__34159){
var map__34161 = p__34159;
var map__34161__$1 = (((((!((map__34161 == null))))?(((((map__34161.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34161.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34161):map__34161);
var opts = map__34161__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq34153){
var G__34154 = cljs.core.first(seq34153);
var seq34153__$1 = cljs.core.next(seq34153);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34154,seq34153__$1);
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
var G__34176 = arguments.length;
switch (G__34176) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__33891__auto___36493 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33892__auto__ = (function (){var switch__33701__auto__ = (function (state_34233){
var state_val_34241 = (state_34233[(1)]);
if((state_val_34241 === (7))){
var inst_34224 = (state_34233[(2)]);
var state_34233__$1 = state_34233;
var statearr_34248_36496 = state_34233__$1;
(statearr_34248_36496[(2)] = inst_34224);

(statearr_34248_36496[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34241 === (1))){
var state_34233__$1 = state_34233;
var statearr_34249_36499 = state_34233__$1;
(statearr_34249_36499[(2)] = null);

(statearr_34249_36499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34241 === (4))){
var inst_34197 = (state_34233[(7)]);
var inst_34197__$1 = (state_34233[(2)]);
var inst_34199 = (inst_34197__$1 == null);
var state_34233__$1 = (function (){var statearr_34251 = state_34233;
(statearr_34251[(7)] = inst_34197__$1);

return statearr_34251;
})();
if(cljs.core.truth_(inst_34199)){
var statearr_34252_36504 = state_34233__$1;
(statearr_34252_36504[(1)] = (5));

} else {
var statearr_34255_36505 = state_34233__$1;
(statearr_34255_36505[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34241 === (13))){
var state_34233__$1 = state_34233;
var statearr_34258_36506 = state_34233__$1;
(statearr_34258_36506[(2)] = null);

(statearr_34258_36506[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34241 === (6))){
var inst_34197 = (state_34233[(7)]);
var state_34233__$1 = state_34233;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34233__$1,(11),to,inst_34197);
} else {
if((state_val_34241 === (3))){
var inst_34226 = (state_34233[(2)]);
var state_34233__$1 = state_34233;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34233__$1,inst_34226);
} else {
if((state_val_34241 === (12))){
var state_34233__$1 = state_34233;
var statearr_34266_36508 = state_34233__$1;
(statearr_34266_36508[(2)] = null);

(statearr_34266_36508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34241 === (2))){
var state_34233__$1 = state_34233;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34233__$1,(4),from);
} else {
if((state_val_34241 === (11))){
var inst_34217 = (state_34233[(2)]);
var state_34233__$1 = state_34233;
if(cljs.core.truth_(inst_34217)){
var statearr_34268_36519 = state_34233__$1;
(statearr_34268_36519[(1)] = (12));

} else {
var statearr_34269_36522 = state_34233__$1;
(statearr_34269_36522[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34241 === (9))){
var state_34233__$1 = state_34233;
var statearr_34272_36526 = state_34233__$1;
(statearr_34272_36526[(2)] = null);

(statearr_34272_36526[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34241 === (5))){
var state_34233__$1 = state_34233;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34273_36529 = state_34233__$1;
(statearr_34273_36529[(1)] = (8));

} else {
var statearr_34278_36530 = state_34233__$1;
(statearr_34278_36530[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34241 === (14))){
var inst_34222 = (state_34233[(2)]);
var state_34233__$1 = state_34233;
var statearr_34279_36532 = state_34233__$1;
(statearr_34279_36532[(2)] = inst_34222);

(statearr_34279_36532[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34241 === (10))){
var inst_34214 = (state_34233[(2)]);
var state_34233__$1 = state_34233;
var statearr_34281_36533 = state_34233__$1;
(statearr_34281_36533[(2)] = inst_34214);

(statearr_34281_36533[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34241 === (8))){
var inst_34210 = cljs.core.async.close_BANG_(to);
var state_34233__$1 = state_34233;
var statearr_34284_36535 = state_34233__$1;
(statearr_34284_36535[(2)] = inst_34210);

(statearr_34284_36535[(1)] = (10));


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
var cljs$core$async$state_machine__33702__auto__ = null;
var cljs$core$async$state_machine__33702__auto____0 = (function (){
var statearr_34286 = [null,null,null,null,null,null,null,null];
(statearr_34286[(0)] = cljs$core$async$state_machine__33702__auto__);

(statearr_34286[(1)] = (1));

return statearr_34286;
});
var cljs$core$async$state_machine__33702__auto____1 = (function (state_34233){
while(true){
var ret_value__33703__auto__ = (function (){try{while(true){
var result__33704__auto__ = switch__33701__auto__(state_34233);
if(cljs.core.keyword_identical_QMARK_(result__33704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33704__auto__;
}
break;
}
}catch (e34287){if((e34287 instanceof Object)){
var ex__33705__auto__ = e34287;
var statearr_34288_36542 = state_34233;
(statearr_34288_36542[(5)] = ex__33705__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34233);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34287;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36544 = state_34233;
state_34233 = G__36544;
continue;
} else {
return ret_value__33703__auto__;
}
break;
}
});
cljs$core$async$state_machine__33702__auto__ = function(state_34233){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33702__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33702__auto____1.call(this,state_34233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33702__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33702__auto____0;
cljs$core$async$state_machine__33702__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33702__auto____1;
return cljs$core$async$state_machine__33702__auto__;
})()
})();
var state__33893__auto__ = (function (){var statearr_34289 = f__33892__auto__();
(statearr_34289[(6)] = c__33891__auto___36493);

return statearr_34289;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33893__auto__);
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
var process = (function (p__34299){
var vec__34300 = p__34299;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34300,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34300,(1),null);
var job = vec__34300;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__33891__auto___36559 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33892__auto__ = (function (){var switch__33701__auto__ = (function (state_34307){
var state_val_34308 = (state_34307[(1)]);
if((state_val_34308 === (1))){
var state_34307__$1 = state_34307;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34307__$1,(2),res,v);
} else {
if((state_val_34308 === (2))){
var inst_34304 = (state_34307[(2)]);
var inst_34305 = cljs.core.async.close_BANG_(res);
var state_34307__$1 = (function (){var statearr_34309 = state_34307;
(statearr_34309[(7)] = inst_34304);

return statearr_34309;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34307__$1,inst_34305);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33702__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33702__auto____0 = (function (){
var statearr_34311 = [null,null,null,null,null,null,null,null];
(statearr_34311[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33702__auto__);

(statearr_34311[(1)] = (1));

return statearr_34311;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33702__auto____1 = (function (state_34307){
while(true){
var ret_value__33703__auto__ = (function (){try{while(true){
var result__33704__auto__ = switch__33701__auto__(state_34307);
if(cljs.core.keyword_identical_QMARK_(result__33704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33704__auto__;
}
break;
}
}catch (e34314){if((e34314 instanceof Object)){
var ex__33705__auto__ = e34314;
var statearr_34315_36580 = state_34307;
(statearr_34315_36580[(5)] = ex__33705__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34307);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34314;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36585 = state_34307;
state_34307 = G__36585;
continue;
} else {
return ret_value__33703__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33702__auto__ = function(state_34307){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33702__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33702__auto____1.call(this,state_34307);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33702__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33702__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33702__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33702__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33702__auto__;
})()
})();
var state__33893__auto__ = (function (){var statearr_34318 = f__33892__auto__();
(statearr_34318[(6)] = c__33891__auto___36559);

return statearr_34318;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33893__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__34319){
var vec__34320 = p__34319;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34320,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34320,(1),null);
var job = vec__34320;
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
var n__4666__auto___36597 = n;
var __36598 = (0);
while(true){
if((__36598 < n__4666__auto___36597)){
var G__34324_36599 = type;
var G__34324_36600__$1 = (((G__34324_36599 instanceof cljs.core.Keyword))?G__34324_36599.fqn:null);
switch (G__34324_36600__$1) {
case "compute":
var c__33891__auto___36604 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36598,c__33891__auto___36604,G__34324_36599,G__34324_36600__$1,n__4666__auto___36597,jobs,results,process,async){
return (function (){
var f__33892__auto__ = (function (){var switch__33701__auto__ = ((function (__36598,c__33891__auto___36604,G__34324_36599,G__34324_36600__$1,n__4666__auto___36597,jobs,results,process,async){
return (function (state_34337){
var state_val_34338 = (state_34337[(1)]);
if((state_val_34338 === (1))){
var state_34337__$1 = state_34337;
var statearr_34339_36608 = state_34337__$1;
(statearr_34339_36608[(2)] = null);

(statearr_34339_36608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34338 === (2))){
var state_34337__$1 = state_34337;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34337__$1,(4),jobs);
} else {
if((state_val_34338 === (3))){
var inst_34335 = (state_34337[(2)]);
var state_34337__$1 = state_34337;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34337__$1,inst_34335);
} else {
if((state_val_34338 === (4))){
var inst_34327 = (state_34337[(2)]);
var inst_34328 = process(inst_34327);
var state_34337__$1 = state_34337;
if(cljs.core.truth_(inst_34328)){
var statearr_34341_36621 = state_34337__$1;
(statearr_34341_36621[(1)] = (5));

} else {
var statearr_34342_36622 = state_34337__$1;
(statearr_34342_36622[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34338 === (5))){
var state_34337__$1 = state_34337;
var statearr_34343_36625 = state_34337__$1;
(statearr_34343_36625[(2)] = null);

(statearr_34343_36625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34338 === (6))){
var state_34337__$1 = state_34337;
var statearr_34346_36626 = state_34337__$1;
(statearr_34346_36626[(2)] = null);

(statearr_34346_36626[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34338 === (7))){
var inst_34333 = (state_34337[(2)]);
var state_34337__$1 = state_34337;
var statearr_34349_36628 = state_34337__$1;
(statearr_34349_36628[(2)] = inst_34333);

(statearr_34349_36628[(1)] = (3));


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
});})(__36598,c__33891__auto___36604,G__34324_36599,G__34324_36600__$1,n__4666__auto___36597,jobs,results,process,async))
;
return ((function (__36598,switch__33701__auto__,c__33891__auto___36604,G__34324_36599,G__34324_36600__$1,n__4666__auto___36597,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33702__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33702__auto____0 = (function (){
var statearr_34353 = [null,null,null,null,null,null,null];
(statearr_34353[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33702__auto__);

(statearr_34353[(1)] = (1));

return statearr_34353;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33702__auto____1 = (function (state_34337){
while(true){
var ret_value__33703__auto__ = (function (){try{while(true){
var result__33704__auto__ = switch__33701__auto__(state_34337);
if(cljs.core.keyword_identical_QMARK_(result__33704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33704__auto__;
}
break;
}
}catch (e34355){if((e34355 instanceof Object)){
var ex__33705__auto__ = e34355;
var statearr_34356_36631 = state_34337;
(statearr_34356_36631[(5)] = ex__33705__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34337);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34355;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36632 = state_34337;
state_34337 = G__36632;
continue;
} else {
return ret_value__33703__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33702__auto__ = function(state_34337){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33702__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33702__auto____1.call(this,state_34337);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33702__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33702__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33702__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33702__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33702__auto__;
})()
;})(__36598,switch__33701__auto__,c__33891__auto___36604,G__34324_36599,G__34324_36600__$1,n__4666__auto___36597,jobs,results,process,async))
})();
var state__33893__auto__ = (function (){var statearr_34358 = f__33892__auto__();
(statearr_34358[(6)] = c__33891__auto___36604);

return statearr_34358;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33893__auto__);
});})(__36598,c__33891__auto___36604,G__34324_36599,G__34324_36600__$1,n__4666__auto___36597,jobs,results,process,async))
);


break;
case "async":
var c__33891__auto___36637 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36598,c__33891__auto___36637,G__34324_36599,G__34324_36600__$1,n__4666__auto___36597,jobs,results,process,async){
return (function (){
var f__33892__auto__ = (function (){var switch__33701__auto__ = ((function (__36598,c__33891__auto___36637,G__34324_36599,G__34324_36600__$1,n__4666__auto___36597,jobs,results,process,async){
return (function (state_34372){
var state_val_34373 = (state_34372[(1)]);
if((state_val_34373 === (1))){
var state_34372__$1 = state_34372;
var statearr_34376_36646 = state_34372__$1;
(statearr_34376_36646[(2)] = null);

(statearr_34376_36646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34373 === (2))){
var state_34372__$1 = state_34372;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34372__$1,(4),jobs);
} else {
if((state_val_34373 === (3))){
var inst_34369 = (state_34372[(2)]);
var state_34372__$1 = state_34372;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34372__$1,inst_34369);
} else {
if((state_val_34373 === (4))){
var inst_34361 = (state_34372[(2)]);
var inst_34362 = async(inst_34361);
var state_34372__$1 = state_34372;
if(cljs.core.truth_(inst_34362)){
var statearr_34383_36651 = state_34372__$1;
(statearr_34383_36651[(1)] = (5));

} else {
var statearr_34384_36652 = state_34372__$1;
(statearr_34384_36652[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34373 === (5))){
var state_34372__$1 = state_34372;
var statearr_34385_36655 = state_34372__$1;
(statearr_34385_36655[(2)] = null);

(statearr_34385_36655[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34373 === (6))){
var state_34372__$1 = state_34372;
var statearr_34386_36658 = state_34372__$1;
(statearr_34386_36658[(2)] = null);

(statearr_34386_36658[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34373 === (7))){
var inst_34367 = (state_34372[(2)]);
var state_34372__$1 = state_34372;
var statearr_34387_36659 = state_34372__$1;
(statearr_34387_36659[(2)] = inst_34367);

(statearr_34387_36659[(1)] = (3));


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
});})(__36598,c__33891__auto___36637,G__34324_36599,G__34324_36600__$1,n__4666__auto___36597,jobs,results,process,async))
;
return ((function (__36598,switch__33701__auto__,c__33891__auto___36637,G__34324_36599,G__34324_36600__$1,n__4666__auto___36597,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33702__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33702__auto____0 = (function (){
var statearr_34392 = [null,null,null,null,null,null,null];
(statearr_34392[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33702__auto__);

(statearr_34392[(1)] = (1));

return statearr_34392;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33702__auto____1 = (function (state_34372){
while(true){
var ret_value__33703__auto__ = (function (){try{while(true){
var result__33704__auto__ = switch__33701__auto__(state_34372);
if(cljs.core.keyword_identical_QMARK_(result__33704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33704__auto__;
}
break;
}
}catch (e34395){if((e34395 instanceof Object)){
var ex__33705__auto__ = e34395;
var statearr_34397_36668 = state_34372;
(statearr_34397_36668[(5)] = ex__33705__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34372);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34395;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36673 = state_34372;
state_34372 = G__36673;
continue;
} else {
return ret_value__33703__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33702__auto__ = function(state_34372){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33702__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33702__auto____1.call(this,state_34372);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33702__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33702__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33702__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33702__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33702__auto__;
})()
;})(__36598,switch__33701__auto__,c__33891__auto___36637,G__34324_36599,G__34324_36600__$1,n__4666__auto___36597,jobs,results,process,async))
})();
var state__33893__auto__ = (function (){var statearr_34402 = f__33892__auto__();
(statearr_34402[(6)] = c__33891__auto___36637);

return statearr_34402;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33893__auto__);
});})(__36598,c__33891__auto___36637,G__34324_36599,G__34324_36600__$1,n__4666__auto___36597,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34324_36600__$1)].join('')));

}

var G__36675 = (__36598 + (1));
__36598 = G__36675;
continue;
} else {
}
break;
}

var c__33891__auto___36676 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33892__auto__ = (function (){var switch__33701__auto__ = (function (state_34439){
var state_val_34440 = (state_34439[(1)]);
if((state_val_34440 === (7))){
var inst_34434 = (state_34439[(2)]);
var state_34439__$1 = state_34439;
var statearr_34448_36679 = state_34439__$1;
(statearr_34448_36679[(2)] = inst_34434);

(statearr_34448_36679[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34440 === (1))){
var state_34439__$1 = state_34439;
var statearr_34449_36681 = state_34439__$1;
(statearr_34449_36681[(2)] = null);

(statearr_34449_36681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34440 === (4))){
var inst_34411 = (state_34439[(7)]);
var inst_34411__$1 = (state_34439[(2)]);
var inst_34413 = (inst_34411__$1 == null);
var state_34439__$1 = (function (){var statearr_34450 = state_34439;
(statearr_34450[(7)] = inst_34411__$1);

return statearr_34450;
})();
if(cljs.core.truth_(inst_34413)){
var statearr_34451_36689 = state_34439__$1;
(statearr_34451_36689[(1)] = (5));

} else {
var statearr_34452_36690 = state_34439__$1;
(statearr_34452_36690[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34440 === (6))){
var inst_34411 = (state_34439[(7)]);
var inst_34417 = (state_34439[(8)]);
var inst_34417__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_34420 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34424 = [inst_34411,inst_34417__$1];
var inst_34425 = (new cljs.core.PersistentVector(null,2,(5),inst_34420,inst_34424,null));
var state_34439__$1 = (function (){var statearr_34453 = state_34439;
(statearr_34453[(8)] = inst_34417__$1);

return statearr_34453;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34439__$1,(8),jobs,inst_34425);
} else {
if((state_val_34440 === (3))){
var inst_34436 = (state_34439[(2)]);
var state_34439__$1 = state_34439;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34439__$1,inst_34436);
} else {
if((state_val_34440 === (2))){
var state_34439__$1 = state_34439;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34439__$1,(4),from);
} else {
if((state_val_34440 === (9))){
var inst_34430 = (state_34439[(2)]);
var state_34439__$1 = (function (){var statearr_34455 = state_34439;
(statearr_34455[(9)] = inst_34430);

return statearr_34455;
})();
var statearr_34457_36702 = state_34439__$1;
(statearr_34457_36702[(2)] = null);

(statearr_34457_36702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34440 === (5))){
var inst_34415 = cljs.core.async.close_BANG_(jobs);
var state_34439__$1 = state_34439;
var statearr_34458_36706 = state_34439__$1;
(statearr_34458_36706[(2)] = inst_34415);

(statearr_34458_36706[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34440 === (8))){
var inst_34417 = (state_34439[(8)]);
var inst_34427 = (state_34439[(2)]);
var state_34439__$1 = (function (){var statearr_34459 = state_34439;
(statearr_34459[(10)] = inst_34427);

return statearr_34459;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34439__$1,(9),results,inst_34417);
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
var cljs$core$async$pipeline_STAR__$_state_machine__33702__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33702__auto____0 = (function (){
var statearr_34460 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34460[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33702__auto__);

(statearr_34460[(1)] = (1));

return statearr_34460;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33702__auto____1 = (function (state_34439){
while(true){
var ret_value__33703__auto__ = (function (){try{while(true){
var result__33704__auto__ = switch__33701__auto__(state_34439);
if(cljs.core.keyword_identical_QMARK_(result__33704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33704__auto__;
}
break;
}
}catch (e34461){if((e34461 instanceof Object)){
var ex__33705__auto__ = e34461;
var statearr_34462_36713 = state_34439;
(statearr_34462_36713[(5)] = ex__33705__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34439);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34461;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36716 = state_34439;
state_34439 = G__36716;
continue;
} else {
return ret_value__33703__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33702__auto__ = function(state_34439){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33702__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33702__auto____1.call(this,state_34439);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33702__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33702__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33702__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33702__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33702__auto__;
})()
})();
var state__33893__auto__ = (function (){var statearr_34464 = f__33892__auto__();
(statearr_34464[(6)] = c__33891__auto___36676);

return statearr_34464;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33893__auto__);
}));


var c__33891__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33892__auto__ = (function (){var switch__33701__auto__ = (function (state_34505){
var state_val_34506 = (state_34505[(1)]);
if((state_val_34506 === (7))){
var inst_34501 = (state_34505[(2)]);
var state_34505__$1 = state_34505;
var statearr_34508_36723 = state_34505__$1;
(statearr_34508_36723[(2)] = inst_34501);

(statearr_34508_36723[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34506 === (20))){
var state_34505__$1 = state_34505;
var statearr_34509_36724 = state_34505__$1;
(statearr_34509_36724[(2)] = null);

(statearr_34509_36724[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34506 === (1))){
var state_34505__$1 = state_34505;
var statearr_34512_36725 = state_34505__$1;
(statearr_34512_36725[(2)] = null);

(statearr_34512_36725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34506 === (4))){
var inst_34468 = (state_34505[(7)]);
var inst_34468__$1 = (state_34505[(2)]);
var inst_34469 = (inst_34468__$1 == null);
var state_34505__$1 = (function (){var statearr_34514 = state_34505;
(statearr_34514[(7)] = inst_34468__$1);

return statearr_34514;
})();
if(cljs.core.truth_(inst_34469)){
var statearr_34515_36731 = state_34505__$1;
(statearr_34515_36731[(1)] = (5));

} else {
var statearr_34516_36732 = state_34505__$1;
(statearr_34516_36732[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34506 === (15))){
var inst_34481 = (state_34505[(8)]);
var state_34505__$1 = state_34505;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34505__$1,(18),to,inst_34481);
} else {
if((state_val_34506 === (21))){
var inst_34494 = (state_34505[(2)]);
var state_34505__$1 = state_34505;
var statearr_34518_36739 = state_34505__$1;
(statearr_34518_36739[(2)] = inst_34494);

(statearr_34518_36739[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34506 === (13))){
var inst_34496 = (state_34505[(2)]);
var state_34505__$1 = (function (){var statearr_34519 = state_34505;
(statearr_34519[(9)] = inst_34496);

return statearr_34519;
})();
var statearr_34520_36745 = state_34505__$1;
(statearr_34520_36745[(2)] = null);

(statearr_34520_36745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34506 === (6))){
var inst_34468 = (state_34505[(7)]);
var state_34505__$1 = state_34505;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34505__$1,(11),inst_34468);
} else {
if((state_val_34506 === (17))){
var inst_34489 = (state_34505[(2)]);
var state_34505__$1 = state_34505;
if(cljs.core.truth_(inst_34489)){
var statearr_34523_36749 = state_34505__$1;
(statearr_34523_36749[(1)] = (19));

} else {
var statearr_34524_36754 = state_34505__$1;
(statearr_34524_36754[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34506 === (3))){
var inst_34503 = (state_34505[(2)]);
var state_34505__$1 = state_34505;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34505__$1,inst_34503);
} else {
if((state_val_34506 === (12))){
var inst_34478 = (state_34505[(10)]);
var state_34505__$1 = state_34505;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34505__$1,(14),inst_34478);
} else {
if((state_val_34506 === (2))){
var state_34505__$1 = state_34505;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34505__$1,(4),results);
} else {
if((state_val_34506 === (19))){
var state_34505__$1 = state_34505;
var statearr_34530_36755 = state_34505__$1;
(statearr_34530_36755[(2)] = null);

(statearr_34530_36755[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34506 === (11))){
var inst_34478 = (state_34505[(2)]);
var state_34505__$1 = (function (){var statearr_34531 = state_34505;
(statearr_34531[(10)] = inst_34478);

return statearr_34531;
})();
var statearr_34534_36760 = state_34505__$1;
(statearr_34534_36760[(2)] = null);

(statearr_34534_36760[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34506 === (9))){
var state_34505__$1 = state_34505;
var statearr_34536_36761 = state_34505__$1;
(statearr_34536_36761[(2)] = null);

(statearr_34536_36761[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34506 === (5))){
var state_34505__$1 = state_34505;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34537_36764 = state_34505__$1;
(statearr_34537_36764[(1)] = (8));

} else {
var statearr_34538_36765 = state_34505__$1;
(statearr_34538_36765[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34506 === (14))){
var inst_34481 = (state_34505[(8)]);
var inst_34481__$1 = (state_34505[(2)]);
var inst_34482 = (inst_34481__$1 == null);
var inst_34483 = cljs.core.not(inst_34482);
var state_34505__$1 = (function (){var statearr_34541 = state_34505;
(statearr_34541[(8)] = inst_34481__$1);

return statearr_34541;
})();
if(inst_34483){
var statearr_34542_36766 = state_34505__$1;
(statearr_34542_36766[(1)] = (15));

} else {
var statearr_34543_36768 = state_34505__$1;
(statearr_34543_36768[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34506 === (16))){
var state_34505__$1 = state_34505;
var statearr_34546_36770 = state_34505__$1;
(statearr_34546_36770[(2)] = false);

(statearr_34546_36770[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34506 === (10))){
var inst_34475 = (state_34505[(2)]);
var state_34505__$1 = state_34505;
var statearr_34547_36772 = state_34505__$1;
(statearr_34547_36772[(2)] = inst_34475);

(statearr_34547_36772[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34506 === (18))){
var inst_34486 = (state_34505[(2)]);
var state_34505__$1 = state_34505;
var statearr_34548_36777 = state_34505__$1;
(statearr_34548_36777[(2)] = inst_34486);

(statearr_34548_36777[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34506 === (8))){
var inst_34472 = cljs.core.async.close_BANG_(to);
var state_34505__$1 = state_34505;
var statearr_34549_36778 = state_34505__$1;
(statearr_34549_36778[(2)] = inst_34472);

(statearr_34549_36778[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__33702__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33702__auto____0 = (function (){
var statearr_34553 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34553[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33702__auto__);

(statearr_34553[(1)] = (1));

return statearr_34553;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33702__auto____1 = (function (state_34505){
while(true){
var ret_value__33703__auto__ = (function (){try{while(true){
var result__33704__auto__ = switch__33701__auto__(state_34505);
if(cljs.core.keyword_identical_QMARK_(result__33704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33704__auto__;
}
break;
}
}catch (e34554){if((e34554 instanceof Object)){
var ex__33705__auto__ = e34554;
var statearr_34555_36785 = state_34505;
(statearr_34555_36785[(5)] = ex__33705__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34505);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34554;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36786 = state_34505;
state_34505 = G__36786;
continue;
} else {
return ret_value__33703__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33702__auto__ = function(state_34505){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33702__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33702__auto____1.call(this,state_34505);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33702__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33702__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33702__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33702__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33702__auto__;
})()
})();
var state__33893__auto__ = (function (){var statearr_34559 = f__33892__auto__();
(statearr_34559[(6)] = c__33891__auto__);

return statearr_34559;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33893__auto__);
}));

return c__33891__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__34566 = arguments.length;
switch (G__34566) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__34578 = arguments.length;
switch (G__34578) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__34589 = arguments.length;
switch (G__34589) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__33891__auto___36805 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33892__auto__ = (function (){var switch__33701__auto__ = (function (state_34619){
var state_val_34620 = (state_34619[(1)]);
if((state_val_34620 === (7))){
var inst_34615 = (state_34619[(2)]);
var state_34619__$1 = state_34619;
var statearr_34622_36807 = state_34619__$1;
(statearr_34622_36807[(2)] = inst_34615);

(statearr_34622_36807[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34620 === (1))){
var state_34619__$1 = state_34619;
var statearr_34624_36808 = state_34619__$1;
(statearr_34624_36808[(2)] = null);

(statearr_34624_36808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34620 === (4))){
var inst_34594 = (state_34619[(7)]);
var inst_34594__$1 = (state_34619[(2)]);
var inst_34596 = (inst_34594__$1 == null);
var state_34619__$1 = (function (){var statearr_34625 = state_34619;
(statearr_34625[(7)] = inst_34594__$1);

return statearr_34625;
})();
if(cljs.core.truth_(inst_34596)){
var statearr_34629_36809 = state_34619__$1;
(statearr_34629_36809[(1)] = (5));

} else {
var statearr_34630_36810 = state_34619__$1;
(statearr_34630_36810[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34620 === (13))){
var state_34619__$1 = state_34619;
var statearr_34632_36816 = state_34619__$1;
(statearr_34632_36816[(2)] = null);

(statearr_34632_36816[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34620 === (6))){
var inst_34594 = (state_34619[(7)]);
var inst_34601 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34594) : p.call(null,inst_34594));
var state_34619__$1 = state_34619;
if(cljs.core.truth_(inst_34601)){
var statearr_34636_36817 = state_34619__$1;
(statearr_34636_36817[(1)] = (9));

} else {
var statearr_34637_36818 = state_34619__$1;
(statearr_34637_36818[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34620 === (3))){
var inst_34617 = (state_34619[(2)]);
var state_34619__$1 = state_34619;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34619__$1,inst_34617);
} else {
if((state_val_34620 === (12))){
var state_34619__$1 = state_34619;
var statearr_34645_36819 = state_34619__$1;
(statearr_34645_36819[(2)] = null);

(statearr_34645_36819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34620 === (2))){
var state_34619__$1 = state_34619;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34619__$1,(4),ch);
} else {
if((state_val_34620 === (11))){
var inst_34594 = (state_34619[(7)]);
var inst_34605 = (state_34619[(2)]);
var state_34619__$1 = state_34619;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34619__$1,(8),inst_34605,inst_34594);
} else {
if((state_val_34620 === (9))){
var state_34619__$1 = state_34619;
var statearr_34647_36820 = state_34619__$1;
(statearr_34647_36820[(2)] = tc);

(statearr_34647_36820[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34620 === (5))){
var inst_34598 = cljs.core.async.close_BANG_(tc);
var inst_34599 = cljs.core.async.close_BANG_(fc);
var state_34619__$1 = (function (){var statearr_34649 = state_34619;
(statearr_34649[(8)] = inst_34598);

return statearr_34649;
})();
var statearr_34650_36821 = state_34619__$1;
(statearr_34650_36821[(2)] = inst_34599);

(statearr_34650_36821[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34620 === (14))){
var inst_34613 = (state_34619[(2)]);
var state_34619__$1 = state_34619;
var statearr_34651_36824 = state_34619__$1;
(statearr_34651_36824[(2)] = inst_34613);

(statearr_34651_36824[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34620 === (10))){
var state_34619__$1 = state_34619;
var statearr_34652_36825 = state_34619__$1;
(statearr_34652_36825[(2)] = fc);

(statearr_34652_36825[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34620 === (8))){
var inst_34607 = (state_34619[(2)]);
var state_34619__$1 = state_34619;
if(cljs.core.truth_(inst_34607)){
var statearr_34653_36829 = state_34619__$1;
(statearr_34653_36829[(1)] = (12));

} else {
var statearr_34654_36830 = state_34619__$1;
(statearr_34654_36830[(1)] = (13));

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
var cljs$core$async$state_machine__33702__auto__ = null;
var cljs$core$async$state_machine__33702__auto____0 = (function (){
var statearr_34664 = [null,null,null,null,null,null,null,null,null];
(statearr_34664[(0)] = cljs$core$async$state_machine__33702__auto__);

(statearr_34664[(1)] = (1));

return statearr_34664;
});
var cljs$core$async$state_machine__33702__auto____1 = (function (state_34619){
while(true){
var ret_value__33703__auto__ = (function (){try{while(true){
var result__33704__auto__ = switch__33701__auto__(state_34619);
if(cljs.core.keyword_identical_QMARK_(result__33704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33704__auto__;
}
break;
}
}catch (e34667){if((e34667 instanceof Object)){
var ex__33705__auto__ = e34667;
var statearr_34668_36834 = state_34619;
(statearr_34668_36834[(5)] = ex__33705__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34619);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34667;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36837 = state_34619;
state_34619 = G__36837;
continue;
} else {
return ret_value__33703__auto__;
}
break;
}
});
cljs$core$async$state_machine__33702__auto__ = function(state_34619){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33702__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33702__auto____1.call(this,state_34619);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33702__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33702__auto____0;
cljs$core$async$state_machine__33702__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33702__auto____1;
return cljs$core$async$state_machine__33702__auto__;
})()
})();
var state__33893__auto__ = (function (){var statearr_34671 = f__33892__auto__();
(statearr_34671[(6)] = c__33891__auto___36805);

return statearr_34671;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33893__auto__);
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
var c__33891__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33892__auto__ = (function (){var switch__33701__auto__ = (function (state_34696){
var state_val_34697 = (state_34696[(1)]);
if((state_val_34697 === (7))){
var inst_34691 = (state_34696[(2)]);
var state_34696__$1 = state_34696;
var statearr_34701_36841 = state_34696__$1;
(statearr_34701_36841[(2)] = inst_34691);

(statearr_34701_36841[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34697 === (1))){
var inst_34674 = init;
var state_34696__$1 = (function (){var statearr_34702 = state_34696;
(statearr_34702[(7)] = inst_34674);

return statearr_34702;
})();
var statearr_34703_36842 = state_34696__$1;
(statearr_34703_36842[(2)] = null);

(statearr_34703_36842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34697 === (4))){
var inst_34677 = (state_34696[(8)]);
var inst_34677__$1 = (state_34696[(2)]);
var inst_34679 = (inst_34677__$1 == null);
var state_34696__$1 = (function (){var statearr_34704 = state_34696;
(statearr_34704[(8)] = inst_34677__$1);

return statearr_34704;
})();
if(cljs.core.truth_(inst_34679)){
var statearr_34705_36844 = state_34696__$1;
(statearr_34705_36844[(1)] = (5));

} else {
var statearr_34706_36845 = state_34696__$1;
(statearr_34706_36845[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34697 === (6))){
var inst_34677 = (state_34696[(8)]);
var inst_34674 = (state_34696[(7)]);
var inst_34682 = (state_34696[(9)]);
var inst_34682__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_34674,inst_34677) : f.call(null,inst_34674,inst_34677));
var inst_34683 = cljs.core.reduced_QMARK_(inst_34682__$1);
var state_34696__$1 = (function (){var statearr_34713 = state_34696;
(statearr_34713[(9)] = inst_34682__$1);

return statearr_34713;
})();
if(inst_34683){
var statearr_34716_36847 = state_34696__$1;
(statearr_34716_36847[(1)] = (8));

} else {
var statearr_34717_36848 = state_34696__$1;
(statearr_34717_36848[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34697 === (3))){
var inst_34693 = (state_34696[(2)]);
var state_34696__$1 = state_34696;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34696__$1,inst_34693);
} else {
if((state_val_34697 === (2))){
var state_34696__$1 = state_34696;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34696__$1,(4),ch);
} else {
if((state_val_34697 === (9))){
var inst_34682 = (state_34696[(9)]);
var inst_34674 = inst_34682;
var state_34696__$1 = (function (){var statearr_34724 = state_34696;
(statearr_34724[(7)] = inst_34674);

return statearr_34724;
})();
var statearr_34725_36849 = state_34696__$1;
(statearr_34725_36849[(2)] = null);

(statearr_34725_36849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34697 === (5))){
var inst_34674 = (state_34696[(7)]);
var state_34696__$1 = state_34696;
var statearr_34726_36862 = state_34696__$1;
(statearr_34726_36862[(2)] = inst_34674);

(statearr_34726_36862[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34697 === (10))){
var inst_34689 = (state_34696[(2)]);
var state_34696__$1 = state_34696;
var statearr_34727_36870 = state_34696__$1;
(statearr_34727_36870[(2)] = inst_34689);

(statearr_34727_36870[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34697 === (8))){
var inst_34682 = (state_34696[(9)]);
var inst_34685 = cljs.core.deref(inst_34682);
var state_34696__$1 = state_34696;
var statearr_34730_36871 = state_34696__$1;
(statearr_34730_36871[(2)] = inst_34685);

(statearr_34730_36871[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__33702__auto__ = null;
var cljs$core$async$reduce_$_state_machine__33702__auto____0 = (function (){
var statearr_34732 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34732[(0)] = cljs$core$async$reduce_$_state_machine__33702__auto__);

(statearr_34732[(1)] = (1));

return statearr_34732;
});
var cljs$core$async$reduce_$_state_machine__33702__auto____1 = (function (state_34696){
while(true){
var ret_value__33703__auto__ = (function (){try{while(true){
var result__33704__auto__ = switch__33701__auto__(state_34696);
if(cljs.core.keyword_identical_QMARK_(result__33704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33704__auto__;
}
break;
}
}catch (e34733){if((e34733 instanceof Object)){
var ex__33705__auto__ = e34733;
var statearr_34734_36875 = state_34696;
(statearr_34734_36875[(5)] = ex__33705__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34696);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34733;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36883 = state_34696;
state_34696 = G__36883;
continue;
} else {
return ret_value__33703__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__33702__auto__ = function(state_34696){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__33702__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__33702__auto____1.call(this,state_34696);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__33702__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__33702__auto____0;
cljs$core$async$reduce_$_state_machine__33702__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__33702__auto____1;
return cljs$core$async$reduce_$_state_machine__33702__auto__;
})()
})();
var state__33893__auto__ = (function (){var statearr_34740 = f__33892__auto__();
(statearr_34740[(6)] = c__33891__auto__);

return statearr_34740;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33893__auto__);
}));

return c__33891__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__33891__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33892__auto__ = (function (){var switch__33701__auto__ = (function (state_34755){
var state_val_34756 = (state_34755[(1)]);
if((state_val_34756 === (1))){
var inst_34750 = cljs.core.async.reduce(f__$1,init,ch);
var state_34755__$1 = state_34755;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34755__$1,(2),inst_34750);
} else {
if((state_val_34756 === (2))){
var inst_34752 = (state_34755[(2)]);
var inst_34753 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_34752) : f__$1.call(null,inst_34752));
var state_34755__$1 = state_34755;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34755__$1,inst_34753);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__33702__auto__ = null;
var cljs$core$async$transduce_$_state_machine__33702__auto____0 = (function (){
var statearr_34764 = [null,null,null,null,null,null,null];
(statearr_34764[(0)] = cljs$core$async$transduce_$_state_machine__33702__auto__);

(statearr_34764[(1)] = (1));

return statearr_34764;
});
var cljs$core$async$transduce_$_state_machine__33702__auto____1 = (function (state_34755){
while(true){
var ret_value__33703__auto__ = (function (){try{while(true){
var result__33704__auto__ = switch__33701__auto__(state_34755);
if(cljs.core.keyword_identical_QMARK_(result__33704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33704__auto__;
}
break;
}
}catch (e34766){if((e34766 instanceof Object)){
var ex__33705__auto__ = e34766;
var statearr_34768_36905 = state_34755;
(statearr_34768_36905[(5)] = ex__33705__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34755);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34766;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36906 = state_34755;
state_34755 = G__36906;
continue;
} else {
return ret_value__33703__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__33702__auto__ = function(state_34755){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__33702__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__33702__auto____1.call(this,state_34755);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__33702__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__33702__auto____0;
cljs$core$async$transduce_$_state_machine__33702__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__33702__auto____1;
return cljs$core$async$transduce_$_state_machine__33702__auto__;
})()
})();
var state__33893__auto__ = (function (){var statearr_34772 = f__33892__auto__();
(statearr_34772[(6)] = c__33891__auto__);

return statearr_34772;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33893__auto__);
}));

return c__33891__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__34777 = arguments.length;
switch (G__34777) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__33891__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33892__auto__ = (function (){var switch__33701__auto__ = (function (state_34806){
var state_val_34807 = (state_34806[(1)]);
if((state_val_34807 === (7))){
var inst_34788 = (state_34806[(2)]);
var state_34806__$1 = state_34806;
var statearr_34811_36914 = state_34806__$1;
(statearr_34811_36914[(2)] = inst_34788);

(statearr_34811_36914[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34807 === (1))){
var inst_34778 = cljs.core.seq(coll);
var inst_34779 = inst_34778;
var state_34806__$1 = (function (){var statearr_34812 = state_34806;
(statearr_34812[(7)] = inst_34779);

return statearr_34812;
})();
var statearr_34813_36916 = state_34806__$1;
(statearr_34813_36916[(2)] = null);

(statearr_34813_36916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34807 === (4))){
var inst_34779 = (state_34806[(7)]);
var inst_34785 = cljs.core.first(inst_34779);
var state_34806__$1 = state_34806;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34806__$1,(7),ch,inst_34785);
} else {
if((state_val_34807 === (13))){
var inst_34800 = (state_34806[(2)]);
var state_34806__$1 = state_34806;
var statearr_34816_36918 = state_34806__$1;
(statearr_34816_36918[(2)] = inst_34800);

(statearr_34816_36918[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34807 === (6))){
var inst_34791 = (state_34806[(2)]);
var state_34806__$1 = state_34806;
if(cljs.core.truth_(inst_34791)){
var statearr_34819_36919 = state_34806__$1;
(statearr_34819_36919[(1)] = (8));

} else {
var statearr_34820_36920 = state_34806__$1;
(statearr_34820_36920[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34807 === (3))){
var inst_34804 = (state_34806[(2)]);
var state_34806__$1 = state_34806;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34806__$1,inst_34804);
} else {
if((state_val_34807 === (12))){
var state_34806__$1 = state_34806;
var statearr_34825_36921 = state_34806__$1;
(statearr_34825_36921[(2)] = null);

(statearr_34825_36921[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34807 === (2))){
var inst_34779 = (state_34806[(7)]);
var state_34806__$1 = state_34806;
if(cljs.core.truth_(inst_34779)){
var statearr_34828_36922 = state_34806__$1;
(statearr_34828_36922[(1)] = (4));

} else {
var statearr_34829_36923 = state_34806__$1;
(statearr_34829_36923[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34807 === (11))){
var inst_34797 = cljs.core.async.close_BANG_(ch);
var state_34806__$1 = state_34806;
var statearr_34831_36924 = state_34806__$1;
(statearr_34831_36924[(2)] = inst_34797);

(statearr_34831_36924[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34807 === (9))){
var state_34806__$1 = state_34806;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34833_36927 = state_34806__$1;
(statearr_34833_36927[(1)] = (11));

} else {
var statearr_34835_36928 = state_34806__$1;
(statearr_34835_36928[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34807 === (5))){
var inst_34779 = (state_34806[(7)]);
var state_34806__$1 = state_34806;
var statearr_34838_36929 = state_34806__$1;
(statearr_34838_36929[(2)] = inst_34779);

(statearr_34838_36929[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34807 === (10))){
var inst_34802 = (state_34806[(2)]);
var state_34806__$1 = state_34806;
var statearr_34839_36932 = state_34806__$1;
(statearr_34839_36932[(2)] = inst_34802);

(statearr_34839_36932[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34807 === (8))){
var inst_34779 = (state_34806[(7)]);
var inst_34793 = cljs.core.next(inst_34779);
var inst_34779__$1 = inst_34793;
var state_34806__$1 = (function (){var statearr_34843 = state_34806;
(statearr_34843[(7)] = inst_34779__$1);

return statearr_34843;
})();
var statearr_34845_36933 = state_34806__$1;
(statearr_34845_36933[(2)] = null);

(statearr_34845_36933[(1)] = (2));


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
var cljs$core$async$state_machine__33702__auto__ = null;
var cljs$core$async$state_machine__33702__auto____0 = (function (){
var statearr_34853 = [null,null,null,null,null,null,null,null];
(statearr_34853[(0)] = cljs$core$async$state_machine__33702__auto__);

(statearr_34853[(1)] = (1));

return statearr_34853;
});
var cljs$core$async$state_machine__33702__auto____1 = (function (state_34806){
while(true){
var ret_value__33703__auto__ = (function (){try{while(true){
var result__33704__auto__ = switch__33701__auto__(state_34806);
if(cljs.core.keyword_identical_QMARK_(result__33704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33704__auto__;
}
break;
}
}catch (e34856){if((e34856 instanceof Object)){
var ex__33705__auto__ = e34856;
var statearr_34858_36938 = state_34806;
(statearr_34858_36938[(5)] = ex__33705__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34806);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34856;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36939 = state_34806;
state_34806 = G__36939;
continue;
} else {
return ret_value__33703__auto__;
}
break;
}
});
cljs$core$async$state_machine__33702__auto__ = function(state_34806){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33702__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33702__auto____1.call(this,state_34806);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33702__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33702__auto____0;
cljs$core$async$state_machine__33702__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33702__auto____1;
return cljs$core$async$state_machine__33702__auto__;
})()
})();
var state__33893__auto__ = (function (){var statearr_34861 = f__33892__auto__();
(statearr_34861[(6)] = c__33891__auto__);

return statearr_34861;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33893__auto__);
}));

return c__33891__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4488__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4485__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
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
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34871 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34871 = (function (ch,cs,meta34872){
this.ch = ch;
this.cs = cs;
this.meta34872 = meta34872;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34871.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34873,meta34872__$1){
var self__ = this;
var _34873__$1 = this;
return (new cljs.core.async.t_cljs$core$async34871(self__.ch,self__.cs,meta34872__$1));
}));

(cljs.core.async.t_cljs$core$async34871.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34873){
var self__ = this;
var _34873__$1 = this;
return self__.meta34872;
}));

(cljs.core.async.t_cljs$core$async34871.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34871.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async34871.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34871.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async34871.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async34871.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async34871.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta34872","meta34872",1825908100,null)], null);
}));

(cljs.core.async.t_cljs$core$async34871.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34871.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34871");

(cljs.core.async.t_cljs$core$async34871.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async34871");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34871.
 */
cljs.core.async.__GT_t_cljs$core$async34871 = (function cljs$core$async$mult_$___GT_t_cljs$core$async34871(ch__$1,cs__$1,meta34872){
return (new cljs.core.async.t_cljs$core$async34871(ch__$1,cs__$1,meta34872));
});

}

return (new cljs.core.async.t_cljs$core$async34871(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__33891__auto___36964 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33892__auto__ = (function (){var switch__33701__auto__ = (function (state_35018){
var state_val_35019 = (state_35018[(1)]);
if((state_val_35019 === (7))){
var inst_35013 = (state_35018[(2)]);
var state_35018__$1 = state_35018;
var statearr_35026_36969 = state_35018__$1;
(statearr_35026_36969[(2)] = inst_35013);

(statearr_35026_36969[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35019 === (20))){
var inst_34914 = (state_35018[(7)]);
var inst_34930 = cljs.core.first(inst_34914);
var inst_34931 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34930,(0),null);
var inst_34932 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34930,(1),null);
var state_35018__$1 = (function (){var statearr_35027 = state_35018;
(statearr_35027[(8)] = inst_34931);

return statearr_35027;
})();
if(cljs.core.truth_(inst_34932)){
var statearr_35028_36972 = state_35018__$1;
(statearr_35028_36972[(1)] = (22));

} else {
var statearr_35029_36976 = state_35018__$1;
(statearr_35029_36976[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35019 === (27))){
var inst_34962 = (state_35018[(9)]);
var inst_34960 = (state_35018[(10)]);
var inst_34881 = (state_35018[(11)]);
var inst_34967 = (state_35018[(12)]);
var inst_34967__$1 = cljs.core._nth(inst_34960,inst_34962);
var inst_34968 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34967__$1,inst_34881,done);
var state_35018__$1 = (function (){var statearr_35030 = state_35018;
(statearr_35030[(12)] = inst_34967__$1);

return statearr_35030;
})();
if(cljs.core.truth_(inst_34968)){
var statearr_35034_36990 = state_35018__$1;
(statearr_35034_36990[(1)] = (30));

} else {
var statearr_35035_36991 = state_35018__$1;
(statearr_35035_36991[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35019 === (1))){
var state_35018__$1 = state_35018;
var statearr_35036_36993 = state_35018__$1;
(statearr_35036_36993[(2)] = null);

(statearr_35036_36993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35019 === (24))){
var inst_34914 = (state_35018[(7)]);
var inst_34937 = (state_35018[(2)]);
var inst_34938 = cljs.core.next(inst_34914);
var inst_34892 = inst_34938;
var inst_34893 = null;
var inst_34894 = (0);
var inst_34895 = (0);
var state_35018__$1 = (function (){var statearr_35038 = state_35018;
(statearr_35038[(13)] = inst_34895);

(statearr_35038[(14)] = inst_34892);

(statearr_35038[(15)] = inst_34937);

(statearr_35038[(16)] = inst_34893);

(statearr_35038[(17)] = inst_34894);

return statearr_35038;
})();
var statearr_35040_36995 = state_35018__$1;
(statearr_35040_36995[(2)] = null);

(statearr_35040_36995[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35019 === (39))){
var state_35018__$1 = state_35018;
var statearr_35045_37004 = state_35018__$1;
(statearr_35045_37004[(2)] = null);

(statearr_35045_37004[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35019 === (4))){
var inst_34881 = (state_35018[(11)]);
var inst_34881__$1 = (state_35018[(2)]);
var inst_34882 = (inst_34881__$1 == null);
var state_35018__$1 = (function (){var statearr_35047 = state_35018;
(statearr_35047[(11)] = inst_34881__$1);

return statearr_35047;
})();
if(cljs.core.truth_(inst_34882)){
var statearr_35048_37006 = state_35018__$1;
(statearr_35048_37006[(1)] = (5));

} else {
var statearr_35049_37007 = state_35018__$1;
(statearr_35049_37007[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35019 === (15))){
var inst_34895 = (state_35018[(13)]);
var inst_34892 = (state_35018[(14)]);
var inst_34893 = (state_35018[(16)]);
var inst_34894 = (state_35018[(17)]);
var inst_34910 = (state_35018[(2)]);
var inst_34911 = (inst_34895 + (1));
var tmp35041 = inst_34892;
var tmp35042 = inst_34893;
var tmp35043 = inst_34894;
var inst_34892__$1 = tmp35041;
var inst_34893__$1 = tmp35042;
var inst_34894__$1 = tmp35043;
var inst_34895__$1 = inst_34911;
var state_35018__$1 = (function (){var statearr_35050 = state_35018;
(statearr_35050[(13)] = inst_34895__$1);

(statearr_35050[(14)] = inst_34892__$1);

(statearr_35050[(18)] = inst_34910);

(statearr_35050[(16)] = inst_34893__$1);

(statearr_35050[(17)] = inst_34894__$1);

return statearr_35050;
})();
var statearr_35051_37017 = state_35018__$1;
(statearr_35051_37017[(2)] = null);

(statearr_35051_37017[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35019 === (21))){
var inst_34941 = (state_35018[(2)]);
var state_35018__$1 = state_35018;
var statearr_35059_37018 = state_35018__$1;
(statearr_35059_37018[(2)] = inst_34941);

(statearr_35059_37018[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35019 === (31))){
var inst_34967 = (state_35018[(12)]);
var inst_34971 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34967);
var state_35018__$1 = state_35018;
var statearr_35061_37019 = state_35018__$1;
(statearr_35061_37019[(2)] = inst_34971);

(statearr_35061_37019[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35019 === (32))){
var inst_34962 = (state_35018[(9)]);
var inst_34959 = (state_35018[(19)]);
var inst_34960 = (state_35018[(10)]);
var inst_34961 = (state_35018[(20)]);
var inst_34973 = (state_35018[(2)]);
var inst_34974 = (inst_34962 + (1));
var tmp35054 = inst_34959;
var tmp35055 = inst_34960;
var tmp35056 = inst_34961;
var inst_34959__$1 = tmp35054;
var inst_34960__$1 = tmp35055;
var inst_34961__$1 = tmp35056;
var inst_34962__$1 = inst_34974;
var state_35018__$1 = (function (){var statearr_35062 = state_35018;
(statearr_35062[(9)] = inst_34962__$1);

(statearr_35062[(19)] = inst_34959__$1);

(statearr_35062[(10)] = inst_34960__$1);

(statearr_35062[(21)] = inst_34973);

(statearr_35062[(20)] = inst_34961__$1);

return statearr_35062;
})();
var statearr_35063_37020 = state_35018__$1;
(statearr_35063_37020[(2)] = null);

(statearr_35063_37020[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35019 === (40))){
var inst_34986 = (state_35018[(22)]);
var inst_34990 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34986);
var state_35018__$1 = state_35018;
var statearr_35064_37027 = state_35018__$1;
(statearr_35064_37027[(2)] = inst_34990);

(statearr_35064_37027[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35019 === (33))){
var inst_34977 = (state_35018[(23)]);
var inst_34979 = cljs.core.chunked_seq_QMARK_(inst_34977);
var state_35018__$1 = state_35018;
if(inst_34979){
var statearr_35065_37028 = state_35018__$1;
(statearr_35065_37028[(1)] = (36));

} else {
var statearr_35066_37029 = state_35018__$1;
(statearr_35066_37029[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35019 === (13))){
var inst_34904 = (state_35018[(24)]);
var inst_34907 = cljs.core.async.close_BANG_(inst_34904);
var state_35018__$1 = state_35018;
var statearr_35067_37030 = state_35018__$1;
(statearr_35067_37030[(2)] = inst_34907);

(statearr_35067_37030[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35019 === (22))){
var inst_34931 = (state_35018[(8)]);
var inst_34934 = cljs.core.async.close_BANG_(inst_34931);
var state_35018__$1 = state_35018;
var statearr_35068_37031 = state_35018__$1;
(statearr_35068_37031[(2)] = inst_34934);

(statearr_35068_37031[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35019 === (36))){
var inst_34977 = (state_35018[(23)]);
var inst_34981 = cljs.core.chunk_first(inst_34977);
var inst_34982 = cljs.core.chunk_rest(inst_34977);
var inst_34983 = cljs.core.count(inst_34981);
var inst_34959 = inst_34982;
var inst_34960 = inst_34981;
var inst_34961 = inst_34983;
var inst_34962 = (0);
var state_35018__$1 = (function (){var statearr_35073 = state_35018;
(statearr_35073[(9)] = inst_34962);

(statearr_35073[(19)] = inst_34959);

(statearr_35073[(10)] = inst_34960);

(statearr_35073[(20)] = inst_34961);

return statearr_35073;
})();
var statearr_35078_37034 = state_35018__$1;
(statearr_35078_37034[(2)] = null);

(statearr_35078_37034[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35019 === (41))){
var inst_34977 = (state_35018[(23)]);
var inst_34992 = (state_35018[(2)]);
var inst_34993 = cljs.core.next(inst_34977);
var inst_34959 = inst_34993;
var inst_34960 = null;
var inst_34961 = (0);
var inst_34962 = (0);
var state_35018__$1 = (function (){var statearr_35083 = state_35018;
(statearr_35083[(9)] = inst_34962);

(statearr_35083[(19)] = inst_34959);

(statearr_35083[(10)] = inst_34960);

(statearr_35083[(20)] = inst_34961);

(statearr_35083[(25)] = inst_34992);

return statearr_35083;
})();
var statearr_35085_37035 = state_35018__$1;
(statearr_35085_37035[(2)] = null);

(statearr_35085_37035[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35019 === (43))){
var state_35018__$1 = state_35018;
var statearr_35086_37036 = state_35018__$1;
(statearr_35086_37036[(2)] = null);

(statearr_35086_37036[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35019 === (29))){
var inst_35001 = (state_35018[(2)]);
var state_35018__$1 = state_35018;
var statearr_35092_37037 = state_35018__$1;
(statearr_35092_37037[(2)] = inst_35001);

(statearr_35092_37037[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35019 === (44))){
var inst_35010 = (state_35018[(2)]);
var state_35018__$1 = (function (){var statearr_35097 = state_35018;
(statearr_35097[(26)] = inst_35010);

return statearr_35097;
})();
var statearr_35098_37039 = state_35018__$1;
(statearr_35098_37039[(2)] = null);

(statearr_35098_37039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35019 === (6))){
var inst_34951 = (state_35018[(27)]);
var inst_34950 = cljs.core.deref(cs);
var inst_34951__$1 = cljs.core.keys(inst_34950);
var inst_34952 = cljs.core.count(inst_34951__$1);
var inst_34953 = cljs.core.reset_BANG_(dctr,inst_34952);
var inst_34958 = cljs.core.seq(inst_34951__$1);
var inst_34959 = inst_34958;
var inst_34960 = null;
var inst_34961 = (0);
var inst_34962 = (0);
var state_35018__$1 = (function (){var statearr_35108 = state_35018;
(statearr_35108[(27)] = inst_34951__$1);

(statearr_35108[(9)] = inst_34962);

(statearr_35108[(19)] = inst_34959);

(statearr_35108[(10)] = inst_34960);

(statearr_35108[(28)] = inst_34953);

(statearr_35108[(20)] = inst_34961);

return statearr_35108;
})();
var statearr_35109_37046 = state_35018__$1;
(statearr_35109_37046[(2)] = null);

(statearr_35109_37046[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35019 === (28))){
var inst_34959 = (state_35018[(19)]);
var inst_34977 = (state_35018[(23)]);
var inst_34977__$1 = cljs.core.seq(inst_34959);
var state_35018__$1 = (function (){var statearr_35110 = state_35018;
(statearr_35110[(23)] = inst_34977__$1);

return statearr_35110;
})();
if(inst_34977__$1){
var statearr_35111_37047 = state_35018__$1;
(statearr_35111_37047[(1)] = (33));

} else {
var statearr_35112_37048 = state_35018__$1;
(statearr_35112_37048[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35019 === (25))){
var inst_34962 = (state_35018[(9)]);
var inst_34961 = (state_35018[(20)]);
var inst_34964 = (inst_34962 < inst_34961);
var inst_34965 = inst_34964;
var state_35018__$1 = state_35018;
if(cljs.core.truth_(inst_34965)){
var statearr_35113_37049 = state_35018__$1;
(statearr_35113_37049[(1)] = (27));

} else {
var statearr_35114_37050 = state_35018__$1;
(statearr_35114_37050[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35019 === (34))){
var state_35018__$1 = state_35018;
var statearr_35118_37053 = state_35018__$1;
(statearr_35118_37053[(2)] = null);

(statearr_35118_37053[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35019 === (17))){
var state_35018__$1 = state_35018;
var statearr_35119_37054 = state_35018__$1;
(statearr_35119_37054[(2)] = null);

(statearr_35119_37054[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35019 === (3))){
var inst_35015 = (state_35018[(2)]);
var state_35018__$1 = state_35018;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35018__$1,inst_35015);
} else {
if((state_val_35019 === (12))){
var inst_34946 = (state_35018[(2)]);
var state_35018__$1 = state_35018;
var statearr_35120_37056 = state_35018__$1;
(statearr_35120_37056[(2)] = inst_34946);

(statearr_35120_37056[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35019 === (2))){
var state_35018__$1 = state_35018;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35018__$1,(4),ch);
} else {
if((state_val_35019 === (23))){
var state_35018__$1 = state_35018;
var statearr_35122_37059 = state_35018__$1;
(statearr_35122_37059[(2)] = null);

(statearr_35122_37059[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35019 === (35))){
var inst_34999 = (state_35018[(2)]);
var state_35018__$1 = state_35018;
var statearr_35123_37060 = state_35018__$1;
(statearr_35123_37060[(2)] = inst_34999);

(statearr_35123_37060[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35019 === (19))){
var inst_34914 = (state_35018[(7)]);
var inst_34918 = cljs.core.chunk_first(inst_34914);
var inst_34919 = cljs.core.chunk_rest(inst_34914);
var inst_34920 = cljs.core.count(inst_34918);
var inst_34892 = inst_34919;
var inst_34893 = inst_34918;
var inst_34894 = inst_34920;
var inst_34895 = (0);
var state_35018__$1 = (function (){var statearr_35124 = state_35018;
(statearr_35124[(13)] = inst_34895);

(statearr_35124[(14)] = inst_34892);

(statearr_35124[(16)] = inst_34893);

(statearr_35124[(17)] = inst_34894);

return statearr_35124;
})();
var statearr_35125_37062 = state_35018__$1;
(statearr_35125_37062[(2)] = null);

(statearr_35125_37062[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35019 === (11))){
var inst_34914 = (state_35018[(7)]);
var inst_34892 = (state_35018[(14)]);
var inst_34914__$1 = cljs.core.seq(inst_34892);
var state_35018__$1 = (function (){var statearr_35126 = state_35018;
(statearr_35126[(7)] = inst_34914__$1);

return statearr_35126;
})();
if(inst_34914__$1){
var statearr_35127_37063 = state_35018__$1;
(statearr_35127_37063[(1)] = (16));

} else {
var statearr_35128_37064 = state_35018__$1;
(statearr_35128_37064[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35019 === (9))){
var inst_34948 = (state_35018[(2)]);
var state_35018__$1 = state_35018;
var statearr_35129_37065 = state_35018__$1;
(statearr_35129_37065[(2)] = inst_34948);

(statearr_35129_37065[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35019 === (5))){
var inst_34890 = cljs.core.deref(cs);
var inst_34891 = cljs.core.seq(inst_34890);
var inst_34892 = inst_34891;
var inst_34893 = null;
var inst_34894 = (0);
var inst_34895 = (0);
var state_35018__$1 = (function (){var statearr_35135 = state_35018;
(statearr_35135[(13)] = inst_34895);

(statearr_35135[(14)] = inst_34892);

(statearr_35135[(16)] = inst_34893);

(statearr_35135[(17)] = inst_34894);

return statearr_35135;
})();
var statearr_35140_37068 = state_35018__$1;
(statearr_35140_37068[(2)] = null);

(statearr_35140_37068[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35019 === (14))){
var state_35018__$1 = state_35018;
var statearr_35141_37069 = state_35018__$1;
(statearr_35141_37069[(2)] = null);

(statearr_35141_37069[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35019 === (45))){
var inst_35007 = (state_35018[(2)]);
var state_35018__$1 = state_35018;
var statearr_35142_37070 = state_35018__$1;
(statearr_35142_37070[(2)] = inst_35007);

(statearr_35142_37070[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35019 === (26))){
var inst_34951 = (state_35018[(27)]);
var inst_35003 = (state_35018[(2)]);
var inst_35004 = cljs.core.seq(inst_34951);
var state_35018__$1 = (function (){var statearr_35146 = state_35018;
(statearr_35146[(29)] = inst_35003);

return statearr_35146;
})();
if(inst_35004){
var statearr_35147_37071 = state_35018__$1;
(statearr_35147_37071[(1)] = (42));

} else {
var statearr_35148_37072 = state_35018__$1;
(statearr_35148_37072[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35019 === (16))){
var inst_34914 = (state_35018[(7)]);
var inst_34916 = cljs.core.chunked_seq_QMARK_(inst_34914);
var state_35018__$1 = state_35018;
if(inst_34916){
var statearr_35149_37073 = state_35018__$1;
(statearr_35149_37073[(1)] = (19));

} else {
var statearr_35150_37074 = state_35018__$1;
(statearr_35150_37074[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35019 === (38))){
var inst_34996 = (state_35018[(2)]);
var state_35018__$1 = state_35018;
var statearr_35152_37075 = state_35018__$1;
(statearr_35152_37075[(2)] = inst_34996);

(statearr_35152_37075[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35019 === (30))){
var state_35018__$1 = state_35018;
var statearr_35154_37076 = state_35018__$1;
(statearr_35154_37076[(2)] = null);

(statearr_35154_37076[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35019 === (10))){
var inst_34895 = (state_35018[(13)]);
var inst_34893 = (state_35018[(16)]);
var inst_34903 = cljs.core._nth(inst_34893,inst_34895);
var inst_34904 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34903,(0),null);
var inst_34905 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34903,(1),null);
var state_35018__$1 = (function (){var statearr_35155 = state_35018;
(statearr_35155[(24)] = inst_34904);

return statearr_35155;
})();
if(cljs.core.truth_(inst_34905)){
var statearr_35156_37077 = state_35018__$1;
(statearr_35156_37077[(1)] = (13));

} else {
var statearr_35157_37078 = state_35018__$1;
(statearr_35157_37078[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35019 === (18))){
var inst_34944 = (state_35018[(2)]);
var state_35018__$1 = state_35018;
var statearr_35158_37079 = state_35018__$1;
(statearr_35158_37079[(2)] = inst_34944);

(statearr_35158_37079[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35019 === (42))){
var state_35018__$1 = state_35018;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35018__$1,(45),dchan);
} else {
if((state_val_35019 === (37))){
var inst_34986 = (state_35018[(22)]);
var inst_34977 = (state_35018[(23)]);
var inst_34881 = (state_35018[(11)]);
var inst_34986__$1 = cljs.core.first(inst_34977);
var inst_34987 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34986__$1,inst_34881,done);
var state_35018__$1 = (function (){var statearr_35159 = state_35018;
(statearr_35159[(22)] = inst_34986__$1);

return statearr_35159;
})();
if(cljs.core.truth_(inst_34987)){
var statearr_35160_37081 = state_35018__$1;
(statearr_35160_37081[(1)] = (39));

} else {
var statearr_35161_37082 = state_35018__$1;
(statearr_35161_37082[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35019 === (8))){
var inst_34895 = (state_35018[(13)]);
var inst_34894 = (state_35018[(17)]);
var inst_34897 = (inst_34895 < inst_34894);
var inst_34898 = inst_34897;
var state_35018__$1 = state_35018;
if(cljs.core.truth_(inst_34898)){
var statearr_35162_37084 = state_35018__$1;
(statearr_35162_37084[(1)] = (10));

} else {
var statearr_35163_37085 = state_35018__$1;
(statearr_35163_37085[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__33702__auto__ = null;
var cljs$core$async$mult_$_state_machine__33702__auto____0 = (function (){
var statearr_35164 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35164[(0)] = cljs$core$async$mult_$_state_machine__33702__auto__);

(statearr_35164[(1)] = (1));

return statearr_35164;
});
var cljs$core$async$mult_$_state_machine__33702__auto____1 = (function (state_35018){
while(true){
var ret_value__33703__auto__ = (function (){try{while(true){
var result__33704__auto__ = switch__33701__auto__(state_35018);
if(cljs.core.keyword_identical_QMARK_(result__33704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33704__auto__;
}
break;
}
}catch (e35165){if((e35165 instanceof Object)){
var ex__33705__auto__ = e35165;
var statearr_35166_37091 = state_35018;
(statearr_35166_37091[(5)] = ex__33705__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35018);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35165;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37092 = state_35018;
state_35018 = G__37092;
continue;
} else {
return ret_value__33703__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__33702__auto__ = function(state_35018){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__33702__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__33702__auto____1.call(this,state_35018);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__33702__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__33702__auto____0;
cljs$core$async$mult_$_state_machine__33702__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__33702__auto____1;
return cljs$core$async$mult_$_state_machine__33702__auto__;
})()
})();
var state__33893__auto__ = (function (){var statearr_35167 = f__33892__auto__();
(statearr_35167[(6)] = c__33891__auto___36964);

return statearr_35167;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33893__auto__);
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
var G__35169 = arguments.length;
switch (G__35169) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4488__auto__.call(null,m,state_map));
} else {
var m__4485__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4485__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4488__auto__.call(null,m,mode));
} else {
var m__4485__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4485__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___37118 = arguments.length;
var i__4790__auto___37123 = (0);
while(true){
if((i__4790__auto___37123 < len__4789__auto___37118)){
args__4795__auto__.push((arguments[i__4790__auto___37123]));

var G__37124 = (i__4790__auto___37123 + (1));
i__4790__auto___37123 = G__37124;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35206){
var map__35207 = p__35206;
var map__35207__$1 = (((((!((map__35207 == null))))?(((((map__35207.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35207.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35207):map__35207);
var opts = map__35207__$1;
var statearr_35210_37125 = state;
(statearr_35210_37125[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_35211_37139 = state;
(statearr_35211_37139[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_35212_37141 = state;
(statearr_35212_37141[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35197){
var G__35198 = cljs.core.first(seq35197);
var seq35197__$1 = cljs.core.next(seq35197);
var G__35199 = cljs.core.first(seq35197__$1);
var seq35197__$2 = cljs.core.next(seq35197__$1);
var G__35200 = cljs.core.first(seq35197__$2);
var seq35197__$3 = cljs.core.next(seq35197__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35198,G__35199,G__35200,seq35197__$3);
}));

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
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35221 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35221 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35222){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta35222 = meta35222;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35221.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35223,meta35222__$1){
var self__ = this;
var _35223__$1 = this;
return (new cljs.core.async.t_cljs$core$async35221(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta35222__$1));
}));

(cljs.core.async.t_cljs$core$async35221.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35223){
var self__ = this;
var _35223__$1 = this;
return self__.meta35222;
}));

(cljs.core.async.t_cljs$core$async35221.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35221.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async35221.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35221.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35221.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35221.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35221.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35221.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async35221.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta35222","meta35222",-117550245,null)], null);
}));

(cljs.core.async.t_cljs$core$async35221.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35221.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35221");

(cljs.core.async.t_cljs$core$async35221.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35221");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35221.
 */
cljs.core.async.__GT_t_cljs$core$async35221 = (function cljs$core$async$mix_$___GT_t_cljs$core$async35221(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35222){
return (new cljs.core.async.t_cljs$core$async35221(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35222));
});

}

return (new cljs.core.async.t_cljs$core$async35221(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33891__auto___37148 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33892__auto__ = (function (){var switch__33701__auto__ = (function (state_35351){
var state_val_35352 = (state_35351[(1)]);
if((state_val_35352 === (7))){
var inst_35262 = (state_35351[(2)]);
var state_35351__$1 = state_35351;
var statearr_35353_37149 = state_35351__$1;
(statearr_35353_37149[(2)] = inst_35262);

(statearr_35353_37149[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35352 === (20))){
var inst_35274 = (state_35351[(7)]);
var state_35351__$1 = state_35351;
var statearr_35354_37150 = state_35351__$1;
(statearr_35354_37150[(2)] = inst_35274);

(statearr_35354_37150[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35352 === (27))){
var state_35351__$1 = state_35351;
var statearr_35356_37151 = state_35351__$1;
(statearr_35356_37151[(2)] = null);

(statearr_35356_37151[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35352 === (1))){
var inst_35237 = (state_35351[(8)]);
var inst_35237__$1 = calc_state();
var inst_35243 = (inst_35237__$1 == null);
var inst_35244 = cljs.core.not(inst_35243);
var state_35351__$1 = (function (){var statearr_35357 = state_35351;
(statearr_35357[(8)] = inst_35237__$1);

return statearr_35357;
})();
if(inst_35244){
var statearr_35358_37153 = state_35351__$1;
(statearr_35358_37153[(1)] = (2));

} else {
var statearr_35359_37155 = state_35351__$1;
(statearr_35359_37155[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35352 === (24))){
var inst_35311 = (state_35351[(9)]);
var inst_35325 = (state_35351[(10)]);
var inst_35302 = (state_35351[(11)]);
var inst_35325__$1 = (inst_35302.cljs$core$IFn$_invoke$arity$1 ? inst_35302.cljs$core$IFn$_invoke$arity$1(inst_35311) : inst_35302.call(null,inst_35311));
var state_35351__$1 = (function (){var statearr_35360 = state_35351;
(statearr_35360[(10)] = inst_35325__$1);

return statearr_35360;
})();
if(cljs.core.truth_(inst_35325__$1)){
var statearr_35361_37158 = state_35351__$1;
(statearr_35361_37158[(1)] = (29));

} else {
var statearr_35362_37159 = state_35351__$1;
(statearr_35362_37159[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35352 === (4))){
var inst_35265 = (state_35351[(2)]);
var state_35351__$1 = state_35351;
if(cljs.core.truth_(inst_35265)){
var statearr_35363_37161 = state_35351__$1;
(statearr_35363_37161[(1)] = (8));

} else {
var statearr_35364_37162 = state_35351__$1;
(statearr_35364_37162[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35352 === (15))){
var inst_35296 = (state_35351[(2)]);
var state_35351__$1 = state_35351;
if(cljs.core.truth_(inst_35296)){
var statearr_35365_37163 = state_35351__$1;
(statearr_35365_37163[(1)] = (19));

} else {
var statearr_35366_37164 = state_35351__$1;
(statearr_35366_37164[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35352 === (21))){
var inst_35301 = (state_35351[(12)]);
var inst_35301__$1 = (state_35351[(2)]);
var inst_35302 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35301__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35303 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35301__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35304 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35301__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35351__$1 = (function (){var statearr_35367 = state_35351;
(statearr_35367[(13)] = inst_35303);

(statearr_35367[(12)] = inst_35301__$1);

(statearr_35367[(11)] = inst_35302);

return statearr_35367;
})();
return cljs.core.async.ioc_alts_BANG_(state_35351__$1,(22),inst_35304);
} else {
if((state_val_35352 === (31))){
var inst_35333 = (state_35351[(2)]);
var state_35351__$1 = state_35351;
if(cljs.core.truth_(inst_35333)){
var statearr_35368_37168 = state_35351__$1;
(statearr_35368_37168[(1)] = (32));

} else {
var statearr_35369_37169 = state_35351__$1;
(statearr_35369_37169[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35352 === (32))){
var inst_35310 = (state_35351[(14)]);
var state_35351__$1 = state_35351;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35351__$1,(35),out,inst_35310);
} else {
if((state_val_35352 === (33))){
var inst_35301 = (state_35351[(12)]);
var inst_35274 = inst_35301;
var state_35351__$1 = (function (){var statearr_35372 = state_35351;
(statearr_35372[(7)] = inst_35274);

return statearr_35372;
})();
var statearr_35373_37170 = state_35351__$1;
(statearr_35373_37170[(2)] = null);

(statearr_35373_37170[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35352 === (13))){
var inst_35274 = (state_35351[(7)]);
var inst_35285 = inst_35274.cljs$lang$protocol_mask$partition0$;
var inst_35286 = (inst_35285 & (64));
var inst_35287 = inst_35274.cljs$core$ISeq$;
var inst_35288 = (cljs.core.PROTOCOL_SENTINEL === inst_35287);
var inst_35289 = ((inst_35286) || (inst_35288));
var state_35351__$1 = state_35351;
if(cljs.core.truth_(inst_35289)){
var statearr_35376_37171 = state_35351__$1;
(statearr_35376_37171[(1)] = (16));

} else {
var statearr_35377_37172 = state_35351__$1;
(statearr_35377_37172[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35352 === (22))){
var inst_35311 = (state_35351[(9)]);
var inst_35310 = (state_35351[(14)]);
var inst_35309 = (state_35351[(2)]);
var inst_35310__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35309,(0),null);
var inst_35311__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35309,(1),null);
var inst_35312 = (inst_35310__$1 == null);
var inst_35313 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35311__$1,change);
var inst_35314 = ((inst_35312) || (inst_35313));
var state_35351__$1 = (function (){var statearr_35378 = state_35351;
(statearr_35378[(9)] = inst_35311__$1);

(statearr_35378[(14)] = inst_35310__$1);

return statearr_35378;
})();
if(cljs.core.truth_(inst_35314)){
var statearr_35379_37175 = state_35351__$1;
(statearr_35379_37175[(1)] = (23));

} else {
var statearr_35380_37177 = state_35351__$1;
(statearr_35380_37177[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35352 === (36))){
var inst_35301 = (state_35351[(12)]);
var inst_35274 = inst_35301;
var state_35351__$1 = (function (){var statearr_35383 = state_35351;
(statearr_35383[(7)] = inst_35274);

return statearr_35383;
})();
var statearr_35384_37178 = state_35351__$1;
(statearr_35384_37178[(2)] = null);

(statearr_35384_37178[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35352 === (29))){
var inst_35325 = (state_35351[(10)]);
var state_35351__$1 = state_35351;
var statearr_35387_37179 = state_35351__$1;
(statearr_35387_37179[(2)] = inst_35325);

(statearr_35387_37179[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35352 === (6))){
var state_35351__$1 = state_35351;
var statearr_35388_37180 = state_35351__$1;
(statearr_35388_37180[(2)] = false);

(statearr_35388_37180[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35352 === (28))){
var inst_35321 = (state_35351[(2)]);
var inst_35322 = calc_state();
var inst_35274 = inst_35322;
var state_35351__$1 = (function (){var statearr_35389 = state_35351;
(statearr_35389[(15)] = inst_35321);

(statearr_35389[(7)] = inst_35274);

return statearr_35389;
})();
var statearr_35391_37182 = state_35351__$1;
(statearr_35391_37182[(2)] = null);

(statearr_35391_37182[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35352 === (25))){
var inst_35347 = (state_35351[(2)]);
var state_35351__$1 = state_35351;
var statearr_35392_37183 = state_35351__$1;
(statearr_35392_37183[(2)] = inst_35347);

(statearr_35392_37183[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35352 === (34))){
var inst_35345 = (state_35351[(2)]);
var state_35351__$1 = state_35351;
var statearr_35394_37186 = state_35351__$1;
(statearr_35394_37186[(2)] = inst_35345);

(statearr_35394_37186[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35352 === (17))){
var state_35351__$1 = state_35351;
var statearr_35395_37187 = state_35351__$1;
(statearr_35395_37187[(2)] = false);

(statearr_35395_37187[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35352 === (3))){
var state_35351__$1 = state_35351;
var statearr_35396_37190 = state_35351__$1;
(statearr_35396_37190[(2)] = false);

(statearr_35396_37190[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35352 === (12))){
var inst_35349 = (state_35351[(2)]);
var state_35351__$1 = state_35351;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35351__$1,inst_35349);
} else {
if((state_val_35352 === (2))){
var inst_35237 = (state_35351[(8)]);
var inst_35253 = inst_35237.cljs$lang$protocol_mask$partition0$;
var inst_35254 = (inst_35253 & (64));
var inst_35255 = inst_35237.cljs$core$ISeq$;
var inst_35257 = (cljs.core.PROTOCOL_SENTINEL === inst_35255);
var inst_35258 = ((inst_35254) || (inst_35257));
var state_35351__$1 = state_35351;
if(cljs.core.truth_(inst_35258)){
var statearr_35397_37196 = state_35351__$1;
(statearr_35397_37196[(1)] = (5));

} else {
var statearr_35398_37198 = state_35351__$1;
(statearr_35398_37198[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35352 === (23))){
var inst_35310 = (state_35351[(14)]);
var inst_35316 = (inst_35310 == null);
var state_35351__$1 = state_35351;
if(cljs.core.truth_(inst_35316)){
var statearr_35399_37199 = state_35351__$1;
(statearr_35399_37199[(1)] = (26));

} else {
var statearr_35400_37200 = state_35351__$1;
(statearr_35400_37200[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35352 === (35))){
var inst_35336 = (state_35351[(2)]);
var state_35351__$1 = state_35351;
if(cljs.core.truth_(inst_35336)){
var statearr_35401_37201 = state_35351__$1;
(statearr_35401_37201[(1)] = (36));

} else {
var statearr_35402_37202 = state_35351__$1;
(statearr_35402_37202[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35352 === (19))){
var inst_35274 = (state_35351[(7)]);
var inst_35298 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35274);
var state_35351__$1 = state_35351;
var statearr_35403_37203 = state_35351__$1;
(statearr_35403_37203[(2)] = inst_35298);

(statearr_35403_37203[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35352 === (11))){
var inst_35274 = (state_35351[(7)]);
var inst_35282 = (inst_35274 == null);
var inst_35283 = cljs.core.not(inst_35282);
var state_35351__$1 = state_35351;
if(inst_35283){
var statearr_35404_37205 = state_35351__$1;
(statearr_35404_37205[(1)] = (13));

} else {
var statearr_35405_37206 = state_35351__$1;
(statearr_35405_37206[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35352 === (9))){
var inst_35237 = (state_35351[(8)]);
var state_35351__$1 = state_35351;
var statearr_35408_37207 = state_35351__$1;
(statearr_35408_37207[(2)] = inst_35237);

(statearr_35408_37207[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35352 === (5))){
var state_35351__$1 = state_35351;
var statearr_35410_37208 = state_35351__$1;
(statearr_35410_37208[(2)] = true);

(statearr_35410_37208[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35352 === (14))){
var state_35351__$1 = state_35351;
var statearr_35411_37209 = state_35351__$1;
(statearr_35411_37209[(2)] = false);

(statearr_35411_37209[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35352 === (26))){
var inst_35311 = (state_35351[(9)]);
var inst_35318 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_35311);
var state_35351__$1 = state_35351;
var statearr_35412_37211 = state_35351__$1;
(statearr_35412_37211[(2)] = inst_35318);

(statearr_35412_37211[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35352 === (16))){
var state_35351__$1 = state_35351;
var statearr_35413_37213 = state_35351__$1;
(statearr_35413_37213[(2)] = true);

(statearr_35413_37213[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35352 === (38))){
var inst_35341 = (state_35351[(2)]);
var state_35351__$1 = state_35351;
var statearr_35414_37215 = state_35351__$1;
(statearr_35414_37215[(2)] = inst_35341);

(statearr_35414_37215[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35352 === (30))){
var inst_35311 = (state_35351[(9)]);
var inst_35303 = (state_35351[(13)]);
var inst_35302 = (state_35351[(11)]);
var inst_35328 = cljs.core.empty_QMARK_(inst_35302);
var inst_35329 = (inst_35303.cljs$core$IFn$_invoke$arity$1 ? inst_35303.cljs$core$IFn$_invoke$arity$1(inst_35311) : inst_35303.call(null,inst_35311));
var inst_35330 = cljs.core.not(inst_35329);
var inst_35331 = ((inst_35328) && (inst_35330));
var state_35351__$1 = state_35351;
var statearr_35415_37219 = state_35351__$1;
(statearr_35415_37219[(2)] = inst_35331);

(statearr_35415_37219[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35352 === (10))){
var inst_35237 = (state_35351[(8)]);
var inst_35270 = (state_35351[(2)]);
var inst_35271 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35270,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35272 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35270,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35273 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35270,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35274 = inst_35237;
var state_35351__$1 = (function (){var statearr_35416 = state_35351;
(statearr_35416[(16)] = inst_35273);

(statearr_35416[(17)] = inst_35271);

(statearr_35416[(7)] = inst_35274);

(statearr_35416[(18)] = inst_35272);

return statearr_35416;
})();
var statearr_35417_37224 = state_35351__$1;
(statearr_35417_37224[(2)] = null);

(statearr_35417_37224[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35352 === (18))){
var inst_35293 = (state_35351[(2)]);
var state_35351__$1 = state_35351;
var statearr_35418_37225 = state_35351__$1;
(statearr_35418_37225[(2)] = inst_35293);

(statearr_35418_37225[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35352 === (37))){
var state_35351__$1 = state_35351;
var statearr_35419_37226 = state_35351__$1;
(statearr_35419_37226[(2)] = null);

(statearr_35419_37226[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35352 === (8))){
var inst_35237 = (state_35351[(8)]);
var inst_35267 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35237);
var state_35351__$1 = state_35351;
var statearr_35420_37227 = state_35351__$1;
(statearr_35420_37227[(2)] = inst_35267);

(statearr_35420_37227[(1)] = (10));


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
});
return (function() {
var cljs$core$async$mix_$_state_machine__33702__auto__ = null;
var cljs$core$async$mix_$_state_machine__33702__auto____0 = (function (){
var statearr_35427 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35427[(0)] = cljs$core$async$mix_$_state_machine__33702__auto__);

(statearr_35427[(1)] = (1));

return statearr_35427;
});
var cljs$core$async$mix_$_state_machine__33702__auto____1 = (function (state_35351){
while(true){
var ret_value__33703__auto__ = (function (){try{while(true){
var result__33704__auto__ = switch__33701__auto__(state_35351);
if(cljs.core.keyword_identical_QMARK_(result__33704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33704__auto__;
}
break;
}
}catch (e35429){if((e35429 instanceof Object)){
var ex__33705__auto__ = e35429;
var statearr_35430_37231 = state_35351;
(statearr_35430_37231[(5)] = ex__33705__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35351);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35429;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37234 = state_35351;
state_35351 = G__37234;
continue;
} else {
return ret_value__33703__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__33702__auto__ = function(state_35351){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__33702__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__33702__auto____1.call(this,state_35351);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__33702__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__33702__auto____0;
cljs$core$async$mix_$_state_machine__33702__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__33702__auto____1;
return cljs$core$async$mix_$_state_machine__33702__auto__;
})()
})();
var state__33893__auto__ = (function (){var statearr_35435 = f__33892__auto__();
(statearr_35435[(6)] = c__33891__auto___37148);

return statearr_35435;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33893__auto__);
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

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4488__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4485__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4488__auto__.call(null,p,v,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4485__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__35448 = arguments.length;
switch (G__35448) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4488__auto__.call(null,p));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4485__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4488__auto__.call(null,p,v));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4485__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


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
var G__35451 = arguments.length;
switch (G__35451) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__35449_SHARP_){
if(cljs.core.truth_((p1__35449_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__35449_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__35449_SHARP_.call(null,topic)))){
return p1__35449_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__35449_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35452 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35452 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35453){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35453 = meta35453;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35452.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35454,meta35453__$1){
var self__ = this;
var _35454__$1 = this;
return (new cljs.core.async.t_cljs$core$async35452(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35453__$1));
}));

(cljs.core.async.t_cljs$core$async35452.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35454){
var self__ = this;
var _35454__$1 = this;
return self__.meta35453;
}));

(cljs.core.async.t_cljs$core$async35452.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35452.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async35452.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35452.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async35452.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async35452.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async35452.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async35452.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35453","meta35453",954449201,null)], null);
}));

(cljs.core.async.t_cljs$core$async35452.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35452.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35452");

(cljs.core.async.t_cljs$core$async35452.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35452");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35452.
 */
cljs.core.async.__GT_t_cljs$core$async35452 = (function cljs$core$async$__GT_t_cljs$core$async35452(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35453){
return (new cljs.core.async.t_cljs$core$async35452(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35453));
});

}

return (new cljs.core.async.t_cljs$core$async35452(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33891__auto___37263 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33892__auto__ = (function (){var switch__33701__auto__ = (function (state_35537){
var state_val_35538 = (state_35537[(1)]);
if((state_val_35538 === (7))){
var inst_35533 = (state_35537[(2)]);
var state_35537__$1 = state_35537;
var statearr_35540_37268 = state_35537__$1;
(statearr_35540_37268[(2)] = inst_35533);

(statearr_35540_37268[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35538 === (20))){
var state_35537__$1 = state_35537;
var statearr_35541_37269 = state_35537__$1;
(statearr_35541_37269[(2)] = null);

(statearr_35541_37269[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35538 === (1))){
var state_35537__$1 = state_35537;
var statearr_35542_37270 = state_35537__$1;
(statearr_35542_37270[(2)] = null);

(statearr_35542_37270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35538 === (24))){
var inst_35516 = (state_35537[(7)]);
var inst_35525 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_35516);
var state_35537__$1 = state_35537;
var statearr_35543_37275 = state_35537__$1;
(statearr_35543_37275[(2)] = inst_35525);

(statearr_35543_37275[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35538 === (4))){
var inst_35468 = (state_35537[(8)]);
var inst_35468__$1 = (state_35537[(2)]);
var inst_35469 = (inst_35468__$1 == null);
var state_35537__$1 = (function (){var statearr_35544 = state_35537;
(statearr_35544[(8)] = inst_35468__$1);

return statearr_35544;
})();
if(cljs.core.truth_(inst_35469)){
var statearr_35545_37276 = state_35537__$1;
(statearr_35545_37276[(1)] = (5));

} else {
var statearr_35546_37277 = state_35537__$1;
(statearr_35546_37277[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35538 === (15))){
var inst_35510 = (state_35537[(2)]);
var state_35537__$1 = state_35537;
var statearr_35547_37278 = state_35537__$1;
(statearr_35547_37278[(2)] = inst_35510);

(statearr_35547_37278[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35538 === (21))){
var inst_35530 = (state_35537[(2)]);
var state_35537__$1 = (function (){var statearr_35548 = state_35537;
(statearr_35548[(9)] = inst_35530);

return statearr_35548;
})();
var statearr_35550_37282 = state_35537__$1;
(statearr_35550_37282[(2)] = null);

(statearr_35550_37282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35538 === (13))){
var inst_35492 = (state_35537[(10)]);
var inst_35494 = cljs.core.chunked_seq_QMARK_(inst_35492);
var state_35537__$1 = state_35537;
if(inst_35494){
var statearr_35551_37283 = state_35537__$1;
(statearr_35551_37283[(1)] = (16));

} else {
var statearr_35552_37284 = state_35537__$1;
(statearr_35552_37284[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35538 === (22))){
var inst_35522 = (state_35537[(2)]);
var state_35537__$1 = state_35537;
if(cljs.core.truth_(inst_35522)){
var statearr_35554_37285 = state_35537__$1;
(statearr_35554_37285[(1)] = (23));

} else {
var statearr_35555_37286 = state_35537__$1;
(statearr_35555_37286[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35538 === (6))){
var inst_35468 = (state_35537[(8)]);
var inst_35518 = (state_35537[(11)]);
var inst_35516 = (state_35537[(7)]);
var inst_35516__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_35468) : topic_fn.call(null,inst_35468));
var inst_35517 = cljs.core.deref(mults);
var inst_35518__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35517,inst_35516__$1);
var state_35537__$1 = (function (){var statearr_35556 = state_35537;
(statearr_35556[(11)] = inst_35518__$1);

(statearr_35556[(7)] = inst_35516__$1);

return statearr_35556;
})();
if(cljs.core.truth_(inst_35518__$1)){
var statearr_35557_37291 = state_35537__$1;
(statearr_35557_37291[(1)] = (19));

} else {
var statearr_35558_37292 = state_35537__$1;
(statearr_35558_37292[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35538 === (25))){
var inst_35527 = (state_35537[(2)]);
var state_35537__$1 = state_35537;
var statearr_35559_37293 = state_35537__$1;
(statearr_35559_37293[(2)] = inst_35527);

(statearr_35559_37293[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35538 === (17))){
var inst_35492 = (state_35537[(10)]);
var inst_35501 = cljs.core.first(inst_35492);
var inst_35502 = cljs.core.async.muxch_STAR_(inst_35501);
var inst_35503 = cljs.core.async.close_BANG_(inst_35502);
var inst_35504 = cljs.core.next(inst_35492);
var inst_35478 = inst_35504;
var inst_35479 = null;
var inst_35480 = (0);
var inst_35481 = (0);
var state_35537__$1 = (function (){var statearr_35560 = state_35537;
(statearr_35560[(12)] = inst_35503);

(statearr_35560[(13)] = inst_35480);

(statearr_35560[(14)] = inst_35481);

(statearr_35560[(15)] = inst_35478);

(statearr_35560[(16)] = inst_35479);

return statearr_35560;
})();
var statearr_35561_37299 = state_35537__$1;
(statearr_35561_37299[(2)] = null);

(statearr_35561_37299[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35538 === (3))){
var inst_35535 = (state_35537[(2)]);
var state_35537__$1 = state_35537;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35537__$1,inst_35535);
} else {
if((state_val_35538 === (12))){
var inst_35512 = (state_35537[(2)]);
var state_35537__$1 = state_35537;
var statearr_35562_37300 = state_35537__$1;
(statearr_35562_37300[(2)] = inst_35512);

(statearr_35562_37300[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35538 === (2))){
var state_35537__$1 = state_35537;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35537__$1,(4),ch);
} else {
if((state_val_35538 === (23))){
var state_35537__$1 = state_35537;
var statearr_35563_37303 = state_35537__$1;
(statearr_35563_37303[(2)] = null);

(statearr_35563_37303[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35538 === (19))){
var inst_35468 = (state_35537[(8)]);
var inst_35518 = (state_35537[(11)]);
var inst_35520 = cljs.core.async.muxch_STAR_(inst_35518);
var state_35537__$1 = state_35537;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35537__$1,(22),inst_35520,inst_35468);
} else {
if((state_val_35538 === (11))){
var inst_35492 = (state_35537[(10)]);
var inst_35478 = (state_35537[(15)]);
var inst_35492__$1 = cljs.core.seq(inst_35478);
var state_35537__$1 = (function (){var statearr_35564 = state_35537;
(statearr_35564[(10)] = inst_35492__$1);

return statearr_35564;
})();
if(inst_35492__$1){
var statearr_35565_37304 = state_35537__$1;
(statearr_35565_37304[(1)] = (13));

} else {
var statearr_35566_37305 = state_35537__$1;
(statearr_35566_37305[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35538 === (9))){
var inst_35514 = (state_35537[(2)]);
var state_35537__$1 = state_35537;
var statearr_35567_37310 = state_35537__$1;
(statearr_35567_37310[(2)] = inst_35514);

(statearr_35567_37310[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35538 === (5))){
var inst_35475 = cljs.core.deref(mults);
var inst_35476 = cljs.core.vals(inst_35475);
var inst_35477 = cljs.core.seq(inst_35476);
var inst_35478 = inst_35477;
var inst_35479 = null;
var inst_35480 = (0);
var inst_35481 = (0);
var state_35537__$1 = (function (){var statearr_35568 = state_35537;
(statearr_35568[(13)] = inst_35480);

(statearr_35568[(14)] = inst_35481);

(statearr_35568[(15)] = inst_35478);

(statearr_35568[(16)] = inst_35479);

return statearr_35568;
})();
var statearr_35569_37315 = state_35537__$1;
(statearr_35569_37315[(2)] = null);

(statearr_35569_37315[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35538 === (14))){
var state_35537__$1 = state_35537;
var statearr_35573_37320 = state_35537__$1;
(statearr_35573_37320[(2)] = null);

(statearr_35573_37320[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35538 === (16))){
var inst_35492 = (state_35537[(10)]);
var inst_35496 = cljs.core.chunk_first(inst_35492);
var inst_35497 = cljs.core.chunk_rest(inst_35492);
var inst_35498 = cljs.core.count(inst_35496);
var inst_35478 = inst_35497;
var inst_35479 = inst_35496;
var inst_35480 = inst_35498;
var inst_35481 = (0);
var state_35537__$1 = (function (){var statearr_35574 = state_35537;
(statearr_35574[(13)] = inst_35480);

(statearr_35574[(14)] = inst_35481);

(statearr_35574[(15)] = inst_35478);

(statearr_35574[(16)] = inst_35479);

return statearr_35574;
})();
var statearr_35575_37321 = state_35537__$1;
(statearr_35575_37321[(2)] = null);

(statearr_35575_37321[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35538 === (10))){
var inst_35480 = (state_35537[(13)]);
var inst_35481 = (state_35537[(14)]);
var inst_35478 = (state_35537[(15)]);
var inst_35479 = (state_35537[(16)]);
var inst_35486 = cljs.core._nth(inst_35479,inst_35481);
var inst_35487 = cljs.core.async.muxch_STAR_(inst_35486);
var inst_35488 = cljs.core.async.close_BANG_(inst_35487);
var inst_35489 = (inst_35481 + (1));
var tmp35570 = inst_35480;
var tmp35571 = inst_35478;
var tmp35572 = inst_35479;
var inst_35478__$1 = tmp35571;
var inst_35479__$1 = tmp35572;
var inst_35480__$1 = tmp35570;
var inst_35481__$1 = inst_35489;
var state_35537__$1 = (function (){var statearr_35582 = state_35537;
(statearr_35582[(13)] = inst_35480__$1);

(statearr_35582[(14)] = inst_35481__$1);

(statearr_35582[(17)] = inst_35488);

(statearr_35582[(15)] = inst_35478__$1);

(statearr_35582[(16)] = inst_35479__$1);

return statearr_35582;
})();
var statearr_35583_37325 = state_35537__$1;
(statearr_35583_37325[(2)] = null);

(statearr_35583_37325[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35538 === (18))){
var inst_35507 = (state_35537[(2)]);
var state_35537__$1 = state_35537;
var statearr_35588_37327 = state_35537__$1;
(statearr_35588_37327[(2)] = inst_35507);

(statearr_35588_37327[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35538 === (8))){
var inst_35480 = (state_35537[(13)]);
var inst_35481 = (state_35537[(14)]);
var inst_35483 = (inst_35481 < inst_35480);
var inst_35484 = inst_35483;
var state_35537__$1 = state_35537;
if(cljs.core.truth_(inst_35484)){
var statearr_35593_37328 = state_35537__$1;
(statearr_35593_37328[(1)] = (10));

} else {
var statearr_35598_37329 = state_35537__$1;
(statearr_35598_37329[(1)] = (11));

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
var cljs$core$async$state_machine__33702__auto__ = null;
var cljs$core$async$state_machine__33702__auto____0 = (function (){
var statearr_35599 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35599[(0)] = cljs$core$async$state_machine__33702__auto__);

(statearr_35599[(1)] = (1));

return statearr_35599;
});
var cljs$core$async$state_machine__33702__auto____1 = (function (state_35537){
while(true){
var ret_value__33703__auto__ = (function (){try{while(true){
var result__33704__auto__ = switch__33701__auto__(state_35537);
if(cljs.core.keyword_identical_QMARK_(result__33704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33704__auto__;
}
break;
}
}catch (e35600){if((e35600 instanceof Object)){
var ex__33705__auto__ = e35600;
var statearr_35601_37333 = state_35537;
(statearr_35601_37333[(5)] = ex__33705__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35537);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35600;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37334 = state_35537;
state_35537 = G__37334;
continue;
} else {
return ret_value__33703__auto__;
}
break;
}
});
cljs$core$async$state_machine__33702__auto__ = function(state_35537){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33702__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33702__auto____1.call(this,state_35537);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33702__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33702__auto____0;
cljs$core$async$state_machine__33702__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33702__auto____1;
return cljs$core$async$state_machine__33702__auto__;
})()
})();
var state__33893__auto__ = (function (){var statearr_35604 = f__33892__auto__();
(statearr_35604[(6)] = c__33891__auto___37263);

return statearr_35604;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33893__auto__);
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
var G__35606 = arguments.length;
switch (G__35606) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__35621 = arguments.length;
switch (G__35621) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__35623 = arguments.length;
switch (G__35623) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var c__33891__auto___37352 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33892__auto__ = (function (){var switch__33701__auto__ = (function (state_35684){
var state_val_35685 = (state_35684[(1)]);
if((state_val_35685 === (7))){
var state_35684__$1 = state_35684;
var statearr_35692_37360 = state_35684__$1;
(statearr_35692_37360[(2)] = null);

(statearr_35692_37360[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35685 === (1))){
var state_35684__$1 = state_35684;
var statearr_35693_37363 = state_35684__$1;
(statearr_35693_37363[(2)] = null);

(statearr_35693_37363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35685 === (4))){
var inst_35634 = (state_35684[(7)]);
var inst_35636 = (inst_35634 < cnt);
var state_35684__$1 = state_35684;
if(cljs.core.truth_(inst_35636)){
var statearr_35694_37365 = state_35684__$1;
(statearr_35694_37365[(1)] = (6));

} else {
var statearr_35695_37366 = state_35684__$1;
(statearr_35695_37366[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35685 === (15))){
var inst_35675 = (state_35684[(2)]);
var state_35684__$1 = state_35684;
var statearr_35700_37370 = state_35684__$1;
(statearr_35700_37370[(2)] = inst_35675);

(statearr_35700_37370[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35685 === (13))){
var inst_35665 = cljs.core.async.close_BANG_(out);
var state_35684__$1 = state_35684;
var statearr_35701_37374 = state_35684__$1;
(statearr_35701_37374[(2)] = inst_35665);

(statearr_35701_37374[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35685 === (6))){
var state_35684__$1 = state_35684;
var statearr_35706_37375 = state_35684__$1;
(statearr_35706_37375[(2)] = null);

(statearr_35706_37375[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35685 === (3))){
var inst_35677 = (state_35684[(2)]);
var state_35684__$1 = state_35684;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35684__$1,inst_35677);
} else {
if((state_val_35685 === (12))){
var inst_35661 = (state_35684[(8)]);
var inst_35661__$1 = (state_35684[(2)]);
var inst_35662 = cljs.core.some(cljs.core.nil_QMARK_,inst_35661__$1);
var state_35684__$1 = (function (){var statearr_35711 = state_35684;
(statearr_35711[(8)] = inst_35661__$1);

return statearr_35711;
})();
if(cljs.core.truth_(inst_35662)){
var statearr_35712_37376 = state_35684__$1;
(statearr_35712_37376[(1)] = (13));

} else {
var statearr_35713_37377 = state_35684__$1;
(statearr_35713_37377[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35685 === (2))){
var inst_35633 = cljs.core.reset_BANG_(dctr,cnt);
var inst_35634 = (0);
var state_35684__$1 = (function (){var statearr_35714 = state_35684;
(statearr_35714[(7)] = inst_35634);

(statearr_35714[(9)] = inst_35633);

return statearr_35714;
})();
var statearr_35715_37378 = state_35684__$1;
(statearr_35715_37378[(2)] = null);

(statearr_35715_37378[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35685 === (11))){
var inst_35634 = (state_35684[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_35684,(10),Object,null,(9));
var inst_35648 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_35634) : chs__$1.call(null,inst_35634));
var inst_35649 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_35634) : done.call(null,inst_35634));
var inst_35650 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_35648,inst_35649);
var state_35684__$1 = state_35684;
var statearr_35720_37388 = state_35684__$1;
(statearr_35720_37388[(2)] = inst_35650);


cljs.core.async.impl.ioc_helpers.process_exception(state_35684__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35685 === (9))){
var inst_35634 = (state_35684[(7)]);
var inst_35652 = (state_35684[(2)]);
var inst_35653 = (inst_35634 + (1));
var inst_35634__$1 = inst_35653;
var state_35684__$1 = (function (){var statearr_35721 = state_35684;
(statearr_35721[(7)] = inst_35634__$1);

(statearr_35721[(10)] = inst_35652);

return statearr_35721;
})();
var statearr_35722_37392 = state_35684__$1;
(statearr_35722_37392[(2)] = null);

(statearr_35722_37392[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35685 === (5))){
var inst_35659 = (state_35684[(2)]);
var state_35684__$1 = (function (){var statearr_35723 = state_35684;
(statearr_35723[(11)] = inst_35659);

return statearr_35723;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35684__$1,(12),dchan);
} else {
if((state_val_35685 === (14))){
var inst_35661 = (state_35684[(8)]);
var inst_35667 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_35661);
var state_35684__$1 = state_35684;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35684__$1,(16),out,inst_35667);
} else {
if((state_val_35685 === (16))){
var inst_35670 = (state_35684[(2)]);
var state_35684__$1 = (function (){var statearr_35725 = state_35684;
(statearr_35725[(12)] = inst_35670);

return statearr_35725;
})();
var statearr_35726_37396 = state_35684__$1;
(statearr_35726_37396[(2)] = null);

(statearr_35726_37396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35685 === (10))){
var inst_35642 = (state_35684[(2)]);
var inst_35643 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_35684__$1 = (function (){var statearr_35727 = state_35684;
(statearr_35727[(13)] = inst_35642);

return statearr_35727;
})();
var statearr_35728_37397 = state_35684__$1;
(statearr_35728_37397[(2)] = inst_35643);


cljs.core.async.impl.ioc_helpers.process_exception(state_35684__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35685 === (8))){
var inst_35657 = (state_35684[(2)]);
var state_35684__$1 = state_35684;
var statearr_35729_37398 = state_35684__$1;
(statearr_35729_37398[(2)] = inst_35657);

(statearr_35729_37398[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__33702__auto__ = null;
var cljs$core$async$state_machine__33702__auto____0 = (function (){
var statearr_35730 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35730[(0)] = cljs$core$async$state_machine__33702__auto__);

(statearr_35730[(1)] = (1));

return statearr_35730;
});
var cljs$core$async$state_machine__33702__auto____1 = (function (state_35684){
while(true){
var ret_value__33703__auto__ = (function (){try{while(true){
var result__33704__auto__ = switch__33701__auto__(state_35684);
if(cljs.core.keyword_identical_QMARK_(result__33704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33704__auto__;
}
break;
}
}catch (e35732){if((e35732 instanceof Object)){
var ex__33705__auto__ = e35732;
var statearr_35733_37400 = state_35684;
(statearr_35733_37400[(5)] = ex__33705__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35684);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35732;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37401 = state_35684;
state_35684 = G__37401;
continue;
} else {
return ret_value__33703__auto__;
}
break;
}
});
cljs$core$async$state_machine__33702__auto__ = function(state_35684){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33702__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33702__auto____1.call(this,state_35684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33702__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33702__auto____0;
cljs$core$async$state_machine__33702__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33702__auto____1;
return cljs$core$async$state_machine__33702__auto__;
})()
})();
var state__33893__auto__ = (function (){var statearr_35734 = f__33892__auto__();
(statearr_35734[(6)] = c__33891__auto___37352);

return statearr_35734;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33893__auto__);
}));


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
var G__35740 = arguments.length;
switch (G__35740) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33891__auto___37403 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33892__auto__ = (function (){var switch__33701__auto__ = (function (state_35772){
var state_val_35773 = (state_35772[(1)]);
if((state_val_35773 === (7))){
var inst_35752 = (state_35772[(7)]);
var inst_35751 = (state_35772[(8)]);
var inst_35751__$1 = (state_35772[(2)]);
var inst_35752__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35751__$1,(0),null);
var inst_35753 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35751__$1,(1),null);
var inst_35754 = (inst_35752__$1 == null);
var state_35772__$1 = (function (){var statearr_35774 = state_35772;
(statearr_35774[(9)] = inst_35753);

(statearr_35774[(7)] = inst_35752__$1);

(statearr_35774[(8)] = inst_35751__$1);

return statearr_35774;
})();
if(cljs.core.truth_(inst_35754)){
var statearr_35775_37413 = state_35772__$1;
(statearr_35775_37413[(1)] = (8));

} else {
var statearr_35776_37414 = state_35772__$1;
(statearr_35776_37414[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35773 === (1))){
var inst_35741 = cljs.core.vec(chs);
var inst_35742 = inst_35741;
var state_35772__$1 = (function (){var statearr_35777 = state_35772;
(statearr_35777[(10)] = inst_35742);

return statearr_35777;
})();
var statearr_35778_37421 = state_35772__$1;
(statearr_35778_37421[(2)] = null);

(statearr_35778_37421[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35773 === (4))){
var inst_35742 = (state_35772[(10)]);
var state_35772__$1 = state_35772;
return cljs.core.async.ioc_alts_BANG_(state_35772__$1,(7),inst_35742);
} else {
if((state_val_35773 === (6))){
var inst_35768 = (state_35772[(2)]);
var state_35772__$1 = state_35772;
var statearr_35779_37422 = state_35772__$1;
(statearr_35779_37422[(2)] = inst_35768);

(statearr_35779_37422[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35773 === (3))){
var inst_35770 = (state_35772[(2)]);
var state_35772__$1 = state_35772;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35772__$1,inst_35770);
} else {
if((state_val_35773 === (2))){
var inst_35742 = (state_35772[(10)]);
var inst_35744 = cljs.core.count(inst_35742);
var inst_35745 = (inst_35744 > (0));
var state_35772__$1 = state_35772;
if(cljs.core.truth_(inst_35745)){
var statearr_35781_37423 = state_35772__$1;
(statearr_35781_37423[(1)] = (4));

} else {
var statearr_35782_37424 = state_35772__$1;
(statearr_35782_37424[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35773 === (11))){
var inst_35742 = (state_35772[(10)]);
var inst_35761 = (state_35772[(2)]);
var tmp35780 = inst_35742;
var inst_35742__$1 = tmp35780;
var state_35772__$1 = (function (){var statearr_35783 = state_35772;
(statearr_35783[(10)] = inst_35742__$1);

(statearr_35783[(11)] = inst_35761);

return statearr_35783;
})();
var statearr_35784_37431 = state_35772__$1;
(statearr_35784_37431[(2)] = null);

(statearr_35784_37431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35773 === (9))){
var inst_35752 = (state_35772[(7)]);
var state_35772__$1 = state_35772;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35772__$1,(11),out,inst_35752);
} else {
if((state_val_35773 === (5))){
var inst_35766 = cljs.core.async.close_BANG_(out);
var state_35772__$1 = state_35772;
var statearr_35790_37432 = state_35772__$1;
(statearr_35790_37432[(2)] = inst_35766);

(statearr_35790_37432[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35773 === (10))){
var inst_35764 = (state_35772[(2)]);
var state_35772__$1 = state_35772;
var statearr_35791_37433 = state_35772__$1;
(statearr_35791_37433[(2)] = inst_35764);

(statearr_35791_37433[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35773 === (8))){
var inst_35753 = (state_35772[(9)]);
var inst_35742 = (state_35772[(10)]);
var inst_35752 = (state_35772[(7)]);
var inst_35751 = (state_35772[(8)]);
var inst_35756 = (function (){var cs = inst_35742;
var vec__35747 = inst_35751;
var v = inst_35752;
var c = inst_35753;
return (function (p1__35736_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__35736_SHARP_);
});
})();
var inst_35757 = cljs.core.filterv(inst_35756,inst_35742);
var inst_35742__$1 = inst_35757;
var state_35772__$1 = (function (){var statearr_35824 = state_35772;
(statearr_35824[(10)] = inst_35742__$1);

return statearr_35824;
})();
var statearr_35825_37434 = state_35772__$1;
(statearr_35825_37434[(2)] = null);

(statearr_35825_37434[(1)] = (2));


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
var cljs$core$async$state_machine__33702__auto__ = null;
var cljs$core$async$state_machine__33702__auto____0 = (function (){
var statearr_35828 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35828[(0)] = cljs$core$async$state_machine__33702__auto__);

(statearr_35828[(1)] = (1));

return statearr_35828;
});
var cljs$core$async$state_machine__33702__auto____1 = (function (state_35772){
while(true){
var ret_value__33703__auto__ = (function (){try{while(true){
var result__33704__auto__ = switch__33701__auto__(state_35772);
if(cljs.core.keyword_identical_QMARK_(result__33704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33704__auto__;
}
break;
}
}catch (e35829){if((e35829 instanceof Object)){
var ex__33705__auto__ = e35829;
var statearr_35830_37435 = state_35772;
(statearr_35830_37435[(5)] = ex__33705__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35772);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35829;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37436 = state_35772;
state_35772 = G__37436;
continue;
} else {
return ret_value__33703__auto__;
}
break;
}
});
cljs$core$async$state_machine__33702__auto__ = function(state_35772){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33702__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33702__auto____1.call(this,state_35772);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33702__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33702__auto____0;
cljs$core$async$state_machine__33702__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33702__auto____1;
return cljs$core$async$state_machine__33702__auto__;
})()
})();
var state__33893__auto__ = (function (){var statearr_35831 = f__33892__auto__();
(statearr_35831[(6)] = c__33891__auto___37403);

return statearr_35831;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33893__auto__);
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
var G__35842 = arguments.length;
switch (G__35842) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33891__auto___37444 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33892__auto__ = (function (){var switch__33701__auto__ = (function (state_35869){
var state_val_35870 = (state_35869[(1)]);
if((state_val_35870 === (7))){
var inst_35851 = (state_35869[(7)]);
var inst_35851__$1 = (state_35869[(2)]);
var inst_35852 = (inst_35851__$1 == null);
var inst_35853 = cljs.core.not(inst_35852);
var state_35869__$1 = (function (){var statearr_35871 = state_35869;
(statearr_35871[(7)] = inst_35851__$1);

return statearr_35871;
})();
if(inst_35853){
var statearr_35872_37445 = state_35869__$1;
(statearr_35872_37445[(1)] = (8));

} else {
var statearr_35873_37446 = state_35869__$1;
(statearr_35873_37446[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35870 === (1))){
var inst_35846 = (0);
var state_35869__$1 = (function (){var statearr_35874 = state_35869;
(statearr_35874[(8)] = inst_35846);

return statearr_35874;
})();
var statearr_35875_37447 = state_35869__$1;
(statearr_35875_37447[(2)] = null);

(statearr_35875_37447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35870 === (4))){
var state_35869__$1 = state_35869;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35869__$1,(7),ch);
} else {
if((state_val_35870 === (6))){
var inst_35864 = (state_35869[(2)]);
var state_35869__$1 = state_35869;
var statearr_35876_37448 = state_35869__$1;
(statearr_35876_37448[(2)] = inst_35864);

(statearr_35876_37448[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35870 === (3))){
var inst_35866 = (state_35869[(2)]);
var inst_35867 = cljs.core.async.close_BANG_(out);
var state_35869__$1 = (function (){var statearr_35877 = state_35869;
(statearr_35877[(9)] = inst_35866);

return statearr_35877;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35869__$1,inst_35867);
} else {
if((state_val_35870 === (2))){
var inst_35846 = (state_35869[(8)]);
var inst_35848 = (inst_35846 < n);
var state_35869__$1 = state_35869;
if(cljs.core.truth_(inst_35848)){
var statearr_35878_37449 = state_35869__$1;
(statearr_35878_37449[(1)] = (4));

} else {
var statearr_35879_37450 = state_35869__$1;
(statearr_35879_37450[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35870 === (11))){
var inst_35846 = (state_35869[(8)]);
var inst_35856 = (state_35869[(2)]);
var inst_35857 = (inst_35846 + (1));
var inst_35846__$1 = inst_35857;
var state_35869__$1 = (function (){var statearr_35880 = state_35869;
(statearr_35880[(10)] = inst_35856);

(statearr_35880[(8)] = inst_35846__$1);

return statearr_35880;
})();
var statearr_35881_37451 = state_35869__$1;
(statearr_35881_37451[(2)] = null);

(statearr_35881_37451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35870 === (9))){
var state_35869__$1 = state_35869;
var statearr_35882_37458 = state_35869__$1;
(statearr_35882_37458[(2)] = null);

(statearr_35882_37458[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35870 === (5))){
var state_35869__$1 = state_35869;
var statearr_35883_37459 = state_35869__$1;
(statearr_35883_37459[(2)] = null);

(statearr_35883_37459[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35870 === (10))){
var inst_35861 = (state_35869[(2)]);
var state_35869__$1 = state_35869;
var statearr_35884_37460 = state_35869__$1;
(statearr_35884_37460[(2)] = inst_35861);

(statearr_35884_37460[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35870 === (8))){
var inst_35851 = (state_35869[(7)]);
var state_35869__$1 = state_35869;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35869__$1,(11),out,inst_35851);
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
var cljs$core$async$state_machine__33702__auto__ = null;
var cljs$core$async$state_machine__33702__auto____0 = (function (){
var statearr_35885 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35885[(0)] = cljs$core$async$state_machine__33702__auto__);

(statearr_35885[(1)] = (1));

return statearr_35885;
});
var cljs$core$async$state_machine__33702__auto____1 = (function (state_35869){
while(true){
var ret_value__33703__auto__ = (function (){try{while(true){
var result__33704__auto__ = switch__33701__auto__(state_35869);
if(cljs.core.keyword_identical_QMARK_(result__33704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33704__auto__;
}
break;
}
}catch (e35886){if((e35886 instanceof Object)){
var ex__33705__auto__ = e35886;
var statearr_35890_37461 = state_35869;
(statearr_35890_37461[(5)] = ex__33705__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35869);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35886;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37462 = state_35869;
state_35869 = G__37462;
continue;
} else {
return ret_value__33703__auto__;
}
break;
}
});
cljs$core$async$state_machine__33702__auto__ = function(state_35869){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33702__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33702__auto____1.call(this,state_35869);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33702__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33702__auto____0;
cljs$core$async$state_machine__33702__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33702__auto____1;
return cljs$core$async$state_machine__33702__auto__;
})()
})();
var state__33893__auto__ = (function (){var statearr_35894 = f__33892__auto__();
(statearr_35894[(6)] = c__33891__auto___37444);

return statearr_35894;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33893__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35896 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35896 = (function (f,ch,meta35897){
this.f = f;
this.ch = ch;
this.meta35897 = meta35897;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35896.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35898,meta35897__$1){
var self__ = this;
var _35898__$1 = this;
return (new cljs.core.async.t_cljs$core$async35896(self__.f,self__.ch,meta35897__$1));
}));

(cljs.core.async.t_cljs$core$async35896.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35898){
var self__ = this;
var _35898__$1 = this;
return self__.meta35897;
}));

(cljs.core.async.t_cljs$core$async35896.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35896.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35896.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35896.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35896.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35903 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35903 = (function (f,ch,meta35897,_,fn1,meta35904){
this.f = f;
this.ch = ch;
this.meta35897 = meta35897;
this._ = _;
this.fn1 = fn1;
this.meta35904 = meta35904;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35903.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35905,meta35904__$1){
var self__ = this;
var _35905__$1 = this;
return (new cljs.core.async.t_cljs$core$async35903(self__.f,self__.ch,self__.meta35897,self__._,self__.fn1,meta35904__$1));
}));

(cljs.core.async.t_cljs$core$async35903.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35905){
var self__ = this;
var _35905__$1 = this;
return self__.meta35904;
}));

(cljs.core.async.t_cljs$core$async35903.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35903.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async35903.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async35903.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__35895_SHARP_){
var G__35909 = (((p1__35895_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__35895_SHARP_) : self__.f.call(null,p1__35895_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__35909) : f1.call(null,G__35909));
});
}));

(cljs.core.async.t_cljs$core$async35903.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35897","meta35897",594436028,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async35896","cljs.core.async/t_cljs$core$async35896",-986151656,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta35904","meta35904",-550662739,null)], null);
}));

(cljs.core.async.t_cljs$core$async35903.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35903.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35903");

(cljs.core.async.t_cljs$core$async35903.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35903");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35903.
 */
cljs.core.async.__GT_t_cljs$core$async35903 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35903(f__$1,ch__$1,meta35897__$1,___$2,fn1__$1,meta35904){
return (new cljs.core.async.t_cljs$core$async35903(f__$1,ch__$1,meta35897__$1,___$2,fn1__$1,meta35904));
});

}

return (new cljs.core.async.t_cljs$core$async35903(self__.f,self__.ch,self__.meta35897,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__35912 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__35912) : self__.f.call(null,G__35912));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async35896.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35896.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async35896.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35897","meta35897",594436028,null)], null);
}));

(cljs.core.async.t_cljs$core$async35896.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35896.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35896");

(cljs.core.async.t_cljs$core$async35896.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35896");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35896.
 */
cljs.core.async.__GT_t_cljs$core$async35896 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35896(f__$1,ch__$1,meta35897){
return (new cljs.core.async.t_cljs$core$async35896(f__$1,ch__$1,meta35897));
});

}

return (new cljs.core.async.t_cljs$core$async35896(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35917 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35917 = (function (f,ch,meta35918){
this.f = f;
this.ch = ch;
this.meta35918 = meta35918;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35917.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35919,meta35918__$1){
var self__ = this;
var _35919__$1 = this;
return (new cljs.core.async.t_cljs$core$async35917(self__.f,self__.ch,meta35918__$1));
}));

(cljs.core.async.t_cljs$core$async35917.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35919){
var self__ = this;
var _35919__$1 = this;
return self__.meta35918;
}));

(cljs.core.async.t_cljs$core$async35917.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35917.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35917.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35917.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async35917.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35917.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async35917.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35918","meta35918",-1906266949,null)], null);
}));

(cljs.core.async.t_cljs$core$async35917.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35917.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35917");

(cljs.core.async.t_cljs$core$async35917.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35917");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35917.
 */
cljs.core.async.__GT_t_cljs$core$async35917 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async35917(f__$1,ch__$1,meta35918){
return (new cljs.core.async.t_cljs$core$async35917(f__$1,ch__$1,meta35918));
});

}

return (new cljs.core.async.t_cljs$core$async35917(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35925 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35925 = (function (p,ch,meta35926){
this.p = p;
this.ch = ch;
this.meta35926 = meta35926;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35925.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35927,meta35926__$1){
var self__ = this;
var _35927__$1 = this;
return (new cljs.core.async.t_cljs$core$async35925(self__.p,self__.ch,meta35926__$1));
}));

(cljs.core.async.t_cljs$core$async35925.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35927){
var self__ = this;
var _35927__$1 = this;
return self__.meta35926;
}));

(cljs.core.async.t_cljs$core$async35925.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35925.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35925.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35925.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35925.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async35925.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35925.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async35925.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35926","meta35926",-414464790,null)], null);
}));

(cljs.core.async.t_cljs$core$async35925.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35925.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35925");

(cljs.core.async.t_cljs$core$async35925.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async35925");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35925.
 */
cljs.core.async.__GT_t_cljs$core$async35925 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async35925(p__$1,ch__$1,meta35926){
return (new cljs.core.async.t_cljs$core$async35925(p__$1,ch__$1,meta35926));
});

}

return (new cljs.core.async.t_cljs$core$async35925(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__35938 = arguments.length;
switch (G__35938) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33891__auto___37481 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33892__auto__ = (function (){var switch__33701__auto__ = (function (state_35961){
var state_val_35962 = (state_35961[(1)]);
if((state_val_35962 === (7))){
var inst_35957 = (state_35961[(2)]);
var state_35961__$1 = state_35961;
var statearr_35963_37482 = state_35961__$1;
(statearr_35963_37482[(2)] = inst_35957);

(statearr_35963_37482[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35962 === (1))){
var state_35961__$1 = state_35961;
var statearr_35964_37483 = state_35961__$1;
(statearr_35964_37483[(2)] = null);

(statearr_35964_37483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35962 === (4))){
var inst_35942 = (state_35961[(7)]);
var inst_35942__$1 = (state_35961[(2)]);
var inst_35944 = (inst_35942__$1 == null);
var state_35961__$1 = (function (){var statearr_35965 = state_35961;
(statearr_35965[(7)] = inst_35942__$1);

return statearr_35965;
})();
if(cljs.core.truth_(inst_35944)){
var statearr_35966_37484 = state_35961__$1;
(statearr_35966_37484[(1)] = (5));

} else {
var statearr_35967_37485 = state_35961__$1;
(statearr_35967_37485[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35962 === (6))){
var inst_35942 = (state_35961[(7)]);
var inst_35948 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_35942) : p.call(null,inst_35942));
var state_35961__$1 = state_35961;
if(cljs.core.truth_(inst_35948)){
var statearr_35968_37486 = state_35961__$1;
(statearr_35968_37486[(1)] = (8));

} else {
var statearr_35969_37488 = state_35961__$1;
(statearr_35969_37488[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35962 === (3))){
var inst_35959 = (state_35961[(2)]);
var state_35961__$1 = state_35961;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35961__$1,inst_35959);
} else {
if((state_val_35962 === (2))){
var state_35961__$1 = state_35961;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35961__$1,(4),ch);
} else {
if((state_val_35962 === (11))){
var inst_35951 = (state_35961[(2)]);
var state_35961__$1 = state_35961;
var statearr_35970_37494 = state_35961__$1;
(statearr_35970_37494[(2)] = inst_35951);

(statearr_35970_37494[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35962 === (9))){
var state_35961__$1 = state_35961;
var statearr_35971_37497 = state_35961__$1;
(statearr_35971_37497[(2)] = null);

(statearr_35971_37497[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35962 === (5))){
var inst_35946 = cljs.core.async.close_BANG_(out);
var state_35961__$1 = state_35961;
var statearr_35972_37498 = state_35961__$1;
(statearr_35972_37498[(2)] = inst_35946);

(statearr_35972_37498[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35962 === (10))){
var inst_35954 = (state_35961[(2)]);
var state_35961__$1 = (function (){var statearr_35973 = state_35961;
(statearr_35973[(8)] = inst_35954);

return statearr_35973;
})();
var statearr_35974_37500 = state_35961__$1;
(statearr_35974_37500[(2)] = null);

(statearr_35974_37500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35962 === (8))){
var inst_35942 = (state_35961[(7)]);
var state_35961__$1 = state_35961;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35961__$1,(11),out,inst_35942);
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
var cljs$core$async$state_machine__33702__auto__ = null;
var cljs$core$async$state_machine__33702__auto____0 = (function (){
var statearr_35975 = [null,null,null,null,null,null,null,null,null];
(statearr_35975[(0)] = cljs$core$async$state_machine__33702__auto__);

(statearr_35975[(1)] = (1));

return statearr_35975;
});
var cljs$core$async$state_machine__33702__auto____1 = (function (state_35961){
while(true){
var ret_value__33703__auto__ = (function (){try{while(true){
var result__33704__auto__ = switch__33701__auto__(state_35961);
if(cljs.core.keyword_identical_QMARK_(result__33704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33704__auto__;
}
break;
}
}catch (e35976){if((e35976 instanceof Object)){
var ex__33705__auto__ = e35976;
var statearr_35977_37502 = state_35961;
(statearr_35977_37502[(5)] = ex__33705__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35961);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35976;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37503 = state_35961;
state_35961 = G__37503;
continue;
} else {
return ret_value__33703__auto__;
}
break;
}
});
cljs$core$async$state_machine__33702__auto__ = function(state_35961){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33702__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33702__auto____1.call(this,state_35961);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33702__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33702__auto____0;
cljs$core$async$state_machine__33702__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33702__auto____1;
return cljs$core$async$state_machine__33702__auto__;
})()
})();
var state__33893__auto__ = (function (){var statearr_35979 = f__33892__auto__();
(statearr_35979[(6)] = c__33891__auto___37481);

return statearr_35979;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33893__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__35985 = arguments.length;
switch (G__35985) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var c__33891__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33892__auto__ = (function (){var switch__33701__auto__ = (function (state_36060){
var state_val_36061 = (state_36060[(1)]);
if((state_val_36061 === (7))){
var inst_36056 = (state_36060[(2)]);
var state_36060__$1 = state_36060;
var statearr_36062_37508 = state_36060__$1;
(statearr_36062_37508[(2)] = inst_36056);

(statearr_36062_37508[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36061 === (20))){
var inst_36026 = (state_36060[(7)]);
var inst_36037 = (state_36060[(2)]);
var inst_36038 = cljs.core.next(inst_36026);
var inst_36008 = inst_36038;
var inst_36009 = null;
var inst_36010 = (0);
var inst_36011 = (0);
var state_36060__$1 = (function (){var statearr_36063 = state_36060;
(statearr_36063[(8)] = inst_36037);

(statearr_36063[(9)] = inst_36008);

(statearr_36063[(10)] = inst_36009);

(statearr_36063[(11)] = inst_36010);

(statearr_36063[(12)] = inst_36011);

return statearr_36063;
})();
var statearr_36064_37509 = state_36060__$1;
(statearr_36064_37509[(2)] = null);

(statearr_36064_37509[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36061 === (1))){
var state_36060__$1 = state_36060;
var statearr_36066_37510 = state_36060__$1;
(statearr_36066_37510[(2)] = null);

(statearr_36066_37510[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36061 === (4))){
var inst_35997 = (state_36060[(13)]);
var inst_35997__$1 = (state_36060[(2)]);
var inst_35998 = (inst_35997__$1 == null);
var state_36060__$1 = (function (){var statearr_36067 = state_36060;
(statearr_36067[(13)] = inst_35997__$1);

return statearr_36067;
})();
if(cljs.core.truth_(inst_35998)){
var statearr_36068_37511 = state_36060__$1;
(statearr_36068_37511[(1)] = (5));

} else {
var statearr_36069_37512 = state_36060__$1;
(statearr_36069_37512[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36061 === (15))){
var state_36060__$1 = state_36060;
var statearr_36073_37513 = state_36060__$1;
(statearr_36073_37513[(2)] = null);

(statearr_36073_37513[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36061 === (21))){
var state_36060__$1 = state_36060;
var statearr_36075_37514 = state_36060__$1;
(statearr_36075_37514[(2)] = null);

(statearr_36075_37514[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36061 === (13))){
var inst_36008 = (state_36060[(9)]);
var inst_36009 = (state_36060[(10)]);
var inst_36010 = (state_36060[(11)]);
var inst_36011 = (state_36060[(12)]);
var inst_36018 = (state_36060[(2)]);
var inst_36019 = (inst_36011 + (1));
var tmp36070 = inst_36008;
var tmp36071 = inst_36009;
var tmp36072 = inst_36010;
var inst_36008__$1 = tmp36070;
var inst_36009__$1 = tmp36071;
var inst_36010__$1 = tmp36072;
var inst_36011__$1 = inst_36019;
var state_36060__$1 = (function (){var statearr_36077 = state_36060;
(statearr_36077[(9)] = inst_36008__$1);

(statearr_36077[(14)] = inst_36018);

(statearr_36077[(10)] = inst_36009__$1);

(statearr_36077[(11)] = inst_36010__$1);

(statearr_36077[(12)] = inst_36011__$1);

return statearr_36077;
})();
var statearr_36078_37516 = state_36060__$1;
(statearr_36078_37516[(2)] = null);

(statearr_36078_37516[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36061 === (22))){
var state_36060__$1 = state_36060;
var statearr_36079_37517 = state_36060__$1;
(statearr_36079_37517[(2)] = null);

(statearr_36079_37517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36061 === (6))){
var inst_35997 = (state_36060[(13)]);
var inst_36006 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_35997) : f.call(null,inst_35997));
var inst_36007 = cljs.core.seq(inst_36006);
var inst_36008 = inst_36007;
var inst_36009 = null;
var inst_36010 = (0);
var inst_36011 = (0);
var state_36060__$1 = (function (){var statearr_36080 = state_36060;
(statearr_36080[(9)] = inst_36008);

(statearr_36080[(10)] = inst_36009);

(statearr_36080[(11)] = inst_36010);

(statearr_36080[(12)] = inst_36011);

return statearr_36080;
})();
var statearr_36081_37518 = state_36060__$1;
(statearr_36081_37518[(2)] = null);

(statearr_36081_37518[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36061 === (17))){
var inst_36026 = (state_36060[(7)]);
var inst_36030 = cljs.core.chunk_first(inst_36026);
var inst_36031 = cljs.core.chunk_rest(inst_36026);
var inst_36032 = cljs.core.count(inst_36030);
var inst_36008 = inst_36031;
var inst_36009 = inst_36030;
var inst_36010 = inst_36032;
var inst_36011 = (0);
var state_36060__$1 = (function (){var statearr_36082 = state_36060;
(statearr_36082[(9)] = inst_36008);

(statearr_36082[(10)] = inst_36009);

(statearr_36082[(11)] = inst_36010);

(statearr_36082[(12)] = inst_36011);

return statearr_36082;
})();
var statearr_36083_37522 = state_36060__$1;
(statearr_36083_37522[(2)] = null);

(statearr_36083_37522[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36061 === (3))){
var inst_36058 = (state_36060[(2)]);
var state_36060__$1 = state_36060;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36060__$1,inst_36058);
} else {
if((state_val_36061 === (12))){
var inst_36046 = (state_36060[(2)]);
var state_36060__$1 = state_36060;
var statearr_36084_37523 = state_36060__$1;
(statearr_36084_37523[(2)] = inst_36046);

(statearr_36084_37523[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36061 === (2))){
var state_36060__$1 = state_36060;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36060__$1,(4),in$);
} else {
if((state_val_36061 === (23))){
var inst_36054 = (state_36060[(2)]);
var state_36060__$1 = state_36060;
var statearr_36085_37524 = state_36060__$1;
(statearr_36085_37524[(2)] = inst_36054);

(statearr_36085_37524[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36061 === (19))){
var inst_36041 = (state_36060[(2)]);
var state_36060__$1 = state_36060;
var statearr_36090_37526 = state_36060__$1;
(statearr_36090_37526[(2)] = inst_36041);

(statearr_36090_37526[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36061 === (11))){
var inst_36008 = (state_36060[(9)]);
var inst_36026 = (state_36060[(7)]);
var inst_36026__$1 = cljs.core.seq(inst_36008);
var state_36060__$1 = (function (){var statearr_36095 = state_36060;
(statearr_36095[(7)] = inst_36026__$1);

return statearr_36095;
})();
if(inst_36026__$1){
var statearr_36096_37527 = state_36060__$1;
(statearr_36096_37527[(1)] = (14));

} else {
var statearr_36097_37528 = state_36060__$1;
(statearr_36097_37528[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36061 === (9))){
var inst_36048 = (state_36060[(2)]);
var inst_36049 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_36060__$1 = (function (){var statearr_36102 = state_36060;
(statearr_36102[(15)] = inst_36048);

return statearr_36102;
})();
if(cljs.core.truth_(inst_36049)){
var statearr_36103_37530 = state_36060__$1;
(statearr_36103_37530[(1)] = (21));

} else {
var statearr_36104_37531 = state_36060__$1;
(statearr_36104_37531[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36061 === (5))){
var inst_36000 = cljs.core.async.close_BANG_(out);
var state_36060__$1 = state_36060;
var statearr_36105_37532 = state_36060__$1;
(statearr_36105_37532[(2)] = inst_36000);

(statearr_36105_37532[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36061 === (14))){
var inst_36026 = (state_36060[(7)]);
var inst_36028 = cljs.core.chunked_seq_QMARK_(inst_36026);
var state_36060__$1 = state_36060;
if(inst_36028){
var statearr_36106_37534 = state_36060__$1;
(statearr_36106_37534[(1)] = (17));

} else {
var statearr_36107_37535 = state_36060__$1;
(statearr_36107_37535[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36061 === (16))){
var inst_36044 = (state_36060[(2)]);
var state_36060__$1 = state_36060;
var statearr_36108_37536 = state_36060__$1;
(statearr_36108_37536[(2)] = inst_36044);

(statearr_36108_37536[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36061 === (10))){
var inst_36009 = (state_36060[(10)]);
var inst_36011 = (state_36060[(12)]);
var inst_36016 = cljs.core._nth(inst_36009,inst_36011);
var state_36060__$1 = state_36060;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36060__$1,(13),out,inst_36016);
} else {
if((state_val_36061 === (18))){
var inst_36026 = (state_36060[(7)]);
var inst_36035 = cljs.core.first(inst_36026);
var state_36060__$1 = state_36060;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36060__$1,(20),out,inst_36035);
} else {
if((state_val_36061 === (8))){
var inst_36010 = (state_36060[(11)]);
var inst_36011 = (state_36060[(12)]);
var inst_36013 = (inst_36011 < inst_36010);
var inst_36014 = inst_36013;
var state_36060__$1 = state_36060;
if(cljs.core.truth_(inst_36014)){
var statearr_36109_37538 = state_36060__$1;
(statearr_36109_37538[(1)] = (10));

} else {
var statearr_36110_37539 = state_36060__$1;
(statearr_36110_37539[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__33702__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__33702__auto____0 = (function (){
var statearr_36111 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36111[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__33702__auto__);

(statearr_36111[(1)] = (1));

return statearr_36111;
});
var cljs$core$async$mapcat_STAR__$_state_machine__33702__auto____1 = (function (state_36060){
while(true){
var ret_value__33703__auto__ = (function (){try{while(true){
var result__33704__auto__ = switch__33701__auto__(state_36060);
if(cljs.core.keyword_identical_QMARK_(result__33704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33704__auto__;
}
break;
}
}catch (e36112){if((e36112 instanceof Object)){
var ex__33705__auto__ = e36112;
var statearr_36113_37541 = state_36060;
(statearr_36113_37541[(5)] = ex__33705__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36060);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36112;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37546 = state_36060;
state_36060 = G__37546;
continue;
} else {
return ret_value__33703__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__33702__auto__ = function(state_36060){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__33702__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__33702__auto____1.call(this,state_36060);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__33702__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__33702__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__33702__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__33702__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__33702__auto__;
})()
})();
var state__33893__auto__ = (function (){var statearr_36114 = f__33892__auto__();
(statearr_36114[(6)] = c__33891__auto__);

return statearr_36114;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33893__auto__);
}));

return c__33891__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__36120 = arguments.length;
switch (G__36120) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__36131 = arguments.length;
switch (G__36131) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__36135 = arguments.length;
switch (G__36135) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33891__auto___37559 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33892__auto__ = (function (){var switch__33701__auto__ = (function (state_36165){
var state_val_36166 = (state_36165[(1)]);
if((state_val_36166 === (7))){
var inst_36160 = (state_36165[(2)]);
var state_36165__$1 = state_36165;
var statearr_36167_37566 = state_36165__$1;
(statearr_36167_37566[(2)] = inst_36160);

(statearr_36167_37566[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36166 === (1))){
var inst_36140 = null;
var state_36165__$1 = (function (){var statearr_36168 = state_36165;
(statearr_36168[(7)] = inst_36140);

return statearr_36168;
})();
var statearr_36169_37567 = state_36165__$1;
(statearr_36169_37567[(2)] = null);

(statearr_36169_37567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36166 === (4))){
var inst_36143 = (state_36165[(8)]);
var inst_36143__$1 = (state_36165[(2)]);
var inst_36144 = (inst_36143__$1 == null);
var inst_36145 = cljs.core.not(inst_36144);
var state_36165__$1 = (function (){var statearr_36170 = state_36165;
(statearr_36170[(8)] = inst_36143__$1);

return statearr_36170;
})();
if(inst_36145){
var statearr_36171_37570 = state_36165__$1;
(statearr_36171_37570[(1)] = (5));

} else {
var statearr_36172_37571 = state_36165__$1;
(statearr_36172_37571[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36166 === (6))){
var state_36165__$1 = state_36165;
var statearr_36173_37572 = state_36165__$1;
(statearr_36173_37572[(2)] = null);

(statearr_36173_37572[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36166 === (3))){
var inst_36162 = (state_36165[(2)]);
var inst_36163 = cljs.core.async.close_BANG_(out);
var state_36165__$1 = (function (){var statearr_36174 = state_36165;
(statearr_36174[(9)] = inst_36162);

return statearr_36174;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36165__$1,inst_36163);
} else {
if((state_val_36166 === (2))){
var state_36165__$1 = state_36165;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36165__$1,(4),ch);
} else {
if((state_val_36166 === (11))){
var inst_36143 = (state_36165[(8)]);
var inst_36152 = (state_36165[(2)]);
var inst_36140 = inst_36143;
var state_36165__$1 = (function (){var statearr_36176 = state_36165;
(statearr_36176[(7)] = inst_36140);

(statearr_36176[(10)] = inst_36152);

return statearr_36176;
})();
var statearr_36177_37573 = state_36165__$1;
(statearr_36177_37573[(2)] = null);

(statearr_36177_37573[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36166 === (9))){
var inst_36143 = (state_36165[(8)]);
var state_36165__$1 = state_36165;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36165__$1,(11),out,inst_36143);
} else {
if((state_val_36166 === (5))){
var inst_36140 = (state_36165[(7)]);
var inst_36143 = (state_36165[(8)]);
var inst_36147 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36143,inst_36140);
var state_36165__$1 = state_36165;
if(inst_36147){
var statearr_36179_37574 = state_36165__$1;
(statearr_36179_37574[(1)] = (8));

} else {
var statearr_36180_37578 = state_36165__$1;
(statearr_36180_37578[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36166 === (10))){
var inst_36157 = (state_36165[(2)]);
var state_36165__$1 = state_36165;
var statearr_36181_37579 = state_36165__$1;
(statearr_36181_37579[(2)] = inst_36157);

(statearr_36181_37579[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36166 === (8))){
var inst_36140 = (state_36165[(7)]);
var tmp36178 = inst_36140;
var inst_36140__$1 = tmp36178;
var state_36165__$1 = (function (){var statearr_36182 = state_36165;
(statearr_36182[(7)] = inst_36140__$1);

return statearr_36182;
})();
var statearr_36183_37588 = state_36165__$1;
(statearr_36183_37588[(2)] = null);

(statearr_36183_37588[(1)] = (2));


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
var cljs$core$async$state_machine__33702__auto__ = null;
var cljs$core$async$state_machine__33702__auto____0 = (function (){
var statearr_36186 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36186[(0)] = cljs$core$async$state_machine__33702__auto__);

(statearr_36186[(1)] = (1));

return statearr_36186;
});
var cljs$core$async$state_machine__33702__auto____1 = (function (state_36165){
while(true){
var ret_value__33703__auto__ = (function (){try{while(true){
var result__33704__auto__ = switch__33701__auto__(state_36165);
if(cljs.core.keyword_identical_QMARK_(result__33704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33704__auto__;
}
break;
}
}catch (e36188){if((e36188 instanceof Object)){
var ex__33705__auto__ = e36188;
var statearr_36189_37607 = state_36165;
(statearr_36189_37607[(5)] = ex__33705__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36165);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36188;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37609 = state_36165;
state_36165 = G__37609;
continue;
} else {
return ret_value__33703__auto__;
}
break;
}
});
cljs$core$async$state_machine__33702__auto__ = function(state_36165){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33702__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33702__auto____1.call(this,state_36165);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33702__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33702__auto____0;
cljs$core$async$state_machine__33702__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33702__auto____1;
return cljs$core$async$state_machine__33702__auto__;
})()
})();
var state__33893__auto__ = (function (){var statearr_36191 = f__33892__auto__();
(statearr_36191[(6)] = c__33891__auto___37559);

return statearr_36191;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33893__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__36193 = arguments.length;
switch (G__36193) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33891__auto___37618 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33892__auto__ = (function (){var switch__33701__auto__ = (function (state_36231){
var state_val_36232 = (state_36231[(1)]);
if((state_val_36232 === (7))){
var inst_36227 = (state_36231[(2)]);
var state_36231__$1 = state_36231;
var statearr_36233_37619 = state_36231__$1;
(statearr_36233_37619[(2)] = inst_36227);

(statearr_36233_37619[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36232 === (1))){
var inst_36194 = (new Array(n));
var inst_36195 = inst_36194;
var inst_36196 = (0);
var state_36231__$1 = (function (){var statearr_36234 = state_36231;
(statearr_36234[(7)] = inst_36196);

(statearr_36234[(8)] = inst_36195);

return statearr_36234;
})();
var statearr_36235_37625 = state_36231__$1;
(statearr_36235_37625[(2)] = null);

(statearr_36235_37625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36232 === (4))){
var inst_36199 = (state_36231[(9)]);
var inst_36199__$1 = (state_36231[(2)]);
var inst_36200 = (inst_36199__$1 == null);
var inst_36201 = cljs.core.not(inst_36200);
var state_36231__$1 = (function (){var statearr_36236 = state_36231;
(statearr_36236[(9)] = inst_36199__$1);

return statearr_36236;
})();
if(inst_36201){
var statearr_36237_37631 = state_36231__$1;
(statearr_36237_37631[(1)] = (5));

} else {
var statearr_36238_37632 = state_36231__$1;
(statearr_36238_37632[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36232 === (15))){
var inst_36221 = (state_36231[(2)]);
var state_36231__$1 = state_36231;
var statearr_36239_37633 = state_36231__$1;
(statearr_36239_37633[(2)] = inst_36221);

(statearr_36239_37633[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36232 === (13))){
var state_36231__$1 = state_36231;
var statearr_36240_37635 = state_36231__$1;
(statearr_36240_37635[(2)] = null);

(statearr_36240_37635[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36232 === (6))){
var inst_36196 = (state_36231[(7)]);
var inst_36217 = (inst_36196 > (0));
var state_36231__$1 = state_36231;
if(cljs.core.truth_(inst_36217)){
var statearr_36241_37638 = state_36231__$1;
(statearr_36241_37638[(1)] = (12));

} else {
var statearr_36242_37639 = state_36231__$1;
(statearr_36242_37639[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36232 === (3))){
var inst_36229 = (state_36231[(2)]);
var state_36231__$1 = state_36231;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36231__$1,inst_36229);
} else {
if((state_val_36232 === (12))){
var inst_36195 = (state_36231[(8)]);
var inst_36219 = cljs.core.vec(inst_36195);
var state_36231__$1 = state_36231;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36231__$1,(15),out,inst_36219);
} else {
if((state_val_36232 === (2))){
var state_36231__$1 = state_36231;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36231__$1,(4),ch);
} else {
if((state_val_36232 === (11))){
var inst_36211 = (state_36231[(2)]);
var inst_36212 = (new Array(n));
var inst_36195 = inst_36212;
var inst_36196 = (0);
var state_36231__$1 = (function (){var statearr_36243 = state_36231;
(statearr_36243[(7)] = inst_36196);

(statearr_36243[(10)] = inst_36211);

(statearr_36243[(8)] = inst_36195);

return statearr_36243;
})();
var statearr_36244_37646 = state_36231__$1;
(statearr_36244_37646[(2)] = null);

(statearr_36244_37646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36232 === (9))){
var inst_36195 = (state_36231[(8)]);
var inst_36209 = cljs.core.vec(inst_36195);
var state_36231__$1 = state_36231;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36231__$1,(11),out,inst_36209);
} else {
if((state_val_36232 === (5))){
var inst_36196 = (state_36231[(7)]);
var inst_36199 = (state_36231[(9)]);
var inst_36195 = (state_36231[(8)]);
var inst_36204 = (state_36231[(11)]);
var inst_36203 = (inst_36195[inst_36196] = inst_36199);
var inst_36204__$1 = (inst_36196 + (1));
var inst_36205 = (inst_36204__$1 < n);
var state_36231__$1 = (function (){var statearr_36245 = state_36231;
(statearr_36245[(12)] = inst_36203);

(statearr_36245[(11)] = inst_36204__$1);

return statearr_36245;
})();
if(cljs.core.truth_(inst_36205)){
var statearr_36246_37656 = state_36231__$1;
(statearr_36246_37656[(1)] = (8));

} else {
var statearr_36247_37658 = state_36231__$1;
(statearr_36247_37658[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36232 === (14))){
var inst_36224 = (state_36231[(2)]);
var inst_36225 = cljs.core.async.close_BANG_(out);
var state_36231__$1 = (function (){var statearr_36249 = state_36231;
(statearr_36249[(13)] = inst_36224);

return statearr_36249;
})();
var statearr_36250_37659 = state_36231__$1;
(statearr_36250_37659[(2)] = inst_36225);

(statearr_36250_37659[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36232 === (10))){
var inst_36215 = (state_36231[(2)]);
var state_36231__$1 = state_36231;
var statearr_36251_37660 = state_36231__$1;
(statearr_36251_37660[(2)] = inst_36215);

(statearr_36251_37660[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36232 === (8))){
var inst_36195 = (state_36231[(8)]);
var inst_36204 = (state_36231[(11)]);
var tmp36248 = inst_36195;
var inst_36195__$1 = tmp36248;
var inst_36196 = inst_36204;
var state_36231__$1 = (function (){var statearr_36252 = state_36231;
(statearr_36252[(7)] = inst_36196);

(statearr_36252[(8)] = inst_36195__$1);

return statearr_36252;
})();
var statearr_36254_37670 = state_36231__$1;
(statearr_36254_37670[(2)] = null);

(statearr_36254_37670[(1)] = (2));


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
var cljs$core$async$state_machine__33702__auto__ = null;
var cljs$core$async$state_machine__33702__auto____0 = (function (){
var statearr_36256 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36256[(0)] = cljs$core$async$state_machine__33702__auto__);

(statearr_36256[(1)] = (1));

return statearr_36256;
});
var cljs$core$async$state_machine__33702__auto____1 = (function (state_36231){
while(true){
var ret_value__33703__auto__ = (function (){try{while(true){
var result__33704__auto__ = switch__33701__auto__(state_36231);
if(cljs.core.keyword_identical_QMARK_(result__33704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33704__auto__;
}
break;
}
}catch (e36258){if((e36258 instanceof Object)){
var ex__33705__auto__ = e36258;
var statearr_36259_37675 = state_36231;
(statearr_36259_37675[(5)] = ex__33705__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36231);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36258;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37679 = state_36231;
state_36231 = G__37679;
continue;
} else {
return ret_value__33703__auto__;
}
break;
}
});
cljs$core$async$state_machine__33702__auto__ = function(state_36231){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33702__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33702__auto____1.call(this,state_36231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33702__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33702__auto____0;
cljs$core$async$state_machine__33702__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33702__auto____1;
return cljs$core$async$state_machine__33702__auto__;
})()
})();
var state__33893__auto__ = (function (){var statearr_36261 = f__33892__auto__();
(statearr_36261[(6)] = c__33891__auto___37618);

return statearr_36261;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33893__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__36263 = arguments.length;
switch (G__36263) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33891__auto___37689 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33892__auto__ = (function (){var switch__33701__auto__ = (function (state_36305){
var state_val_36306 = (state_36305[(1)]);
if((state_val_36306 === (7))){
var inst_36301 = (state_36305[(2)]);
var state_36305__$1 = state_36305;
var statearr_36308_37694 = state_36305__$1;
(statearr_36308_37694[(2)] = inst_36301);

(statearr_36308_37694[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36306 === (1))){
var inst_36264 = [];
var inst_36265 = inst_36264;
var inst_36266 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36305__$1 = (function (){var statearr_36309 = state_36305;
(statearr_36309[(7)] = inst_36266);

(statearr_36309[(8)] = inst_36265);

return statearr_36309;
})();
var statearr_36310_37696 = state_36305__$1;
(statearr_36310_37696[(2)] = null);

(statearr_36310_37696[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36306 === (4))){
var inst_36269 = (state_36305[(9)]);
var inst_36269__$1 = (state_36305[(2)]);
var inst_36270 = (inst_36269__$1 == null);
var inst_36271 = cljs.core.not(inst_36270);
var state_36305__$1 = (function (){var statearr_36311 = state_36305;
(statearr_36311[(9)] = inst_36269__$1);

return statearr_36311;
})();
if(inst_36271){
var statearr_36312_37698 = state_36305__$1;
(statearr_36312_37698[(1)] = (5));

} else {
var statearr_36313_37699 = state_36305__$1;
(statearr_36313_37699[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36306 === (15))){
var inst_36295 = (state_36305[(2)]);
var state_36305__$1 = state_36305;
var statearr_36315_37700 = state_36305__$1;
(statearr_36315_37700[(2)] = inst_36295);

(statearr_36315_37700[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36306 === (13))){
var state_36305__$1 = state_36305;
var statearr_36317_37702 = state_36305__$1;
(statearr_36317_37702[(2)] = null);

(statearr_36317_37702[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36306 === (6))){
var inst_36265 = (state_36305[(8)]);
var inst_36290 = inst_36265.length;
var inst_36291 = (inst_36290 > (0));
var state_36305__$1 = state_36305;
if(cljs.core.truth_(inst_36291)){
var statearr_36319_37704 = state_36305__$1;
(statearr_36319_37704[(1)] = (12));

} else {
var statearr_36320_37705 = state_36305__$1;
(statearr_36320_37705[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36306 === (3))){
var inst_36303 = (state_36305[(2)]);
var state_36305__$1 = state_36305;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36305__$1,inst_36303);
} else {
if((state_val_36306 === (12))){
var inst_36265 = (state_36305[(8)]);
var inst_36293 = cljs.core.vec(inst_36265);
var state_36305__$1 = state_36305;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36305__$1,(15),out,inst_36293);
} else {
if((state_val_36306 === (2))){
var state_36305__$1 = state_36305;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36305__$1,(4),ch);
} else {
if((state_val_36306 === (11))){
var inst_36269 = (state_36305[(9)]);
var inst_36273 = (state_36305[(10)]);
var inst_36283 = (state_36305[(2)]);
var inst_36284 = [];
var inst_36285 = inst_36284.push(inst_36269);
var inst_36265 = inst_36284;
var inst_36266 = inst_36273;
var state_36305__$1 = (function (){var statearr_36321 = state_36305;
(statearr_36321[(11)] = inst_36285);

(statearr_36321[(7)] = inst_36266);

(statearr_36321[(8)] = inst_36265);

(statearr_36321[(12)] = inst_36283);

return statearr_36321;
})();
var statearr_36322_37706 = state_36305__$1;
(statearr_36322_37706[(2)] = null);

(statearr_36322_37706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36306 === (9))){
var inst_36265 = (state_36305[(8)]);
var inst_36281 = cljs.core.vec(inst_36265);
var state_36305__$1 = state_36305;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36305__$1,(11),out,inst_36281);
} else {
if((state_val_36306 === (5))){
var inst_36266 = (state_36305[(7)]);
var inst_36269 = (state_36305[(9)]);
var inst_36273 = (state_36305[(10)]);
var inst_36273__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36269) : f.call(null,inst_36269));
var inst_36274 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36273__$1,inst_36266);
var inst_36275 = cljs.core.keyword_identical_QMARK_(inst_36266,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36276 = ((inst_36274) || (inst_36275));
var state_36305__$1 = (function (){var statearr_36323 = state_36305;
(statearr_36323[(10)] = inst_36273__$1);

return statearr_36323;
})();
if(cljs.core.truth_(inst_36276)){
var statearr_36324_37710 = state_36305__$1;
(statearr_36324_37710[(1)] = (8));

} else {
var statearr_36325_37711 = state_36305__$1;
(statearr_36325_37711[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36306 === (14))){
var inst_36298 = (state_36305[(2)]);
var inst_36299 = cljs.core.async.close_BANG_(out);
var state_36305__$1 = (function (){var statearr_36327 = state_36305;
(statearr_36327[(13)] = inst_36298);

return statearr_36327;
})();
var statearr_36328_37712 = state_36305__$1;
(statearr_36328_37712[(2)] = inst_36299);

(statearr_36328_37712[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36306 === (10))){
var inst_36288 = (state_36305[(2)]);
var state_36305__$1 = state_36305;
var statearr_36329_37713 = state_36305__$1;
(statearr_36329_37713[(2)] = inst_36288);

(statearr_36329_37713[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36306 === (8))){
var inst_36269 = (state_36305[(9)]);
var inst_36273 = (state_36305[(10)]);
var inst_36265 = (state_36305[(8)]);
var inst_36278 = inst_36265.push(inst_36269);
var tmp36326 = inst_36265;
var inst_36265__$1 = tmp36326;
var inst_36266 = inst_36273;
var state_36305__$1 = (function (){var statearr_36330 = state_36305;
(statearr_36330[(14)] = inst_36278);

(statearr_36330[(7)] = inst_36266);

(statearr_36330[(8)] = inst_36265__$1);

return statearr_36330;
})();
var statearr_36331_37718 = state_36305__$1;
(statearr_36331_37718[(2)] = null);

(statearr_36331_37718[(1)] = (2));


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
var cljs$core$async$state_machine__33702__auto__ = null;
var cljs$core$async$state_machine__33702__auto____0 = (function (){
var statearr_36334 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36334[(0)] = cljs$core$async$state_machine__33702__auto__);

(statearr_36334[(1)] = (1));

return statearr_36334;
});
var cljs$core$async$state_machine__33702__auto____1 = (function (state_36305){
while(true){
var ret_value__33703__auto__ = (function (){try{while(true){
var result__33704__auto__ = switch__33701__auto__(state_36305);
if(cljs.core.keyword_identical_QMARK_(result__33704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33704__auto__;
}
break;
}
}catch (e36335){if((e36335 instanceof Object)){
var ex__33705__auto__ = e36335;
var statearr_36336_37719 = state_36305;
(statearr_36336_37719[(5)] = ex__33705__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36305);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36335;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37720 = state_36305;
state_36305 = G__37720;
continue;
} else {
return ret_value__33703__auto__;
}
break;
}
});
cljs$core$async$state_machine__33702__auto__ = function(state_36305){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33702__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33702__auto____1.call(this,state_36305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33702__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33702__auto____0;
cljs$core$async$state_machine__33702__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33702__auto____1;
return cljs$core$async$state_machine__33702__auto__;
})()
})();
var state__33893__auto__ = (function (){var statearr_36337 = f__33892__auto__();
(statearr_36337[(6)] = c__33891__auto___37689);

return statearr_36337;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33893__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
