goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__30736 = arguments.length;
switch (G__30736) {
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

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30738 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30738 = (function (f,blockable,meta30739){
this.f = f;
this.blockable = blockable;
this.meta30739 = meta30739;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30738.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30740,meta30739__$1){
var self__ = this;
var _30740__$1 = this;
return (new cljs.core.async.t_cljs$core$async30738(self__.f,self__.blockable,meta30739__$1));
});

cljs.core.async.t_cljs$core$async30738.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30740){
var self__ = this;
var _30740__$1 = this;
return self__.meta30739;
});

cljs.core.async.t_cljs$core$async30738.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30738.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30738.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async30738.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async30738.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30739","meta30739",129696520,null)], null);
});

cljs.core.async.t_cljs$core$async30738.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30738.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30738";

cljs.core.async.t_cljs$core$async30738.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async30738");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30738.
 */
cljs.core.async.__GT_t_cljs$core$async30738 = (function cljs$core$async$__GT_t_cljs$core$async30738(f__$1,blockable__$1,meta30739){
return (new cljs.core.async.t_cljs$core$async30738(f__$1,blockable__$1,meta30739));
});

}

return (new cljs.core.async.t_cljs$core$async30738(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

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
var G__30756 = arguments.length;
switch (G__30756) {
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

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__30760 = arguments.length;
switch (G__30760) {
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

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

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
var G__30772 = arguments.length;
switch (G__30772) {
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

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_33145 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33145) : fn1.call(null,val_33145));
} else {
cljs.core.async.impl.dispatch.run(((function (val_33145,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33145) : fn1.call(null,val_33145));
});})(val_33145,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

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
var G__30791 = arguments.length;
switch (G__30791) {
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

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5718__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5718__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___33159 = n;
var x_33160 = (0);
while(true){
if((x_33160 < n__4607__auto___33159)){
(a[x_33160] = (0));

var G__33162 = (x_33160 + (1));
x_33160 = G__33162;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__33164 = (i + (1));
i = G__33164;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30815 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30815 = (function (flag,meta30816){
this.flag = flag;
this.meta30816 = meta30816;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30815.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_30817,meta30816__$1){
var self__ = this;
var _30817__$1 = this;
return (new cljs.core.async.t_cljs$core$async30815(self__.flag,meta30816__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async30815.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_30817){
var self__ = this;
var _30817__$1 = this;
return self__.meta30816;
});})(flag))
;

cljs.core.async.t_cljs$core$async30815.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30815.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async30815.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30815.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30815.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30816","meta30816",-564720328,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async30815.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30815.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30815";

cljs.core.async.t_cljs$core$async30815.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async30815");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30815.
 */
cljs.core.async.__GT_t_cljs$core$async30815 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30815(flag__$1,meta30816){
return (new cljs.core.async.t_cljs$core$async30815(flag__$1,meta30816));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async30815(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30824 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30824 = (function (flag,cb,meta30825){
this.flag = flag;
this.cb = cb;
this.meta30825 = meta30825;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30824.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30826,meta30825__$1){
var self__ = this;
var _30826__$1 = this;
return (new cljs.core.async.t_cljs$core$async30824(self__.flag,self__.cb,meta30825__$1));
});

cljs.core.async.t_cljs$core$async30824.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30826){
var self__ = this;
var _30826__$1 = this;
return self__.meta30825;
});

cljs.core.async.t_cljs$core$async30824.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30824.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async30824.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30824.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async30824.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30825","meta30825",-434612067,null)], null);
});

cljs.core.async.t_cljs$core$async30824.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30824.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30824";

cljs.core.async.t_cljs$core$async30824.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async30824");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30824.
 */
cljs.core.async.__GT_t_cljs$core$async30824 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30824(flag__$1,cb__$1,meta30825){
return (new cljs.core.async.t_cljs$core$async30824(flag__$1,cb__$1,meta30825));
});

}

return (new cljs.core.async.t_cljs$core$async30824(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
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
return (function (p1__30828_SHARP_){
var G__30837 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30828_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30837) : fret.call(null,G__30837));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30829_SHARP_){
var G__30841 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30829_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30841) : fret.call(null,G__30841));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__33188 = (i + (1));
i = G__33188;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5720__auto__ = (function (){var and__4120__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4120__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
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
var args__4736__auto__ = [];
var len__4730__auto___33191 = arguments.length;
var i__4731__auto___33194 = (0);
while(true){
if((i__4731__auto___33194 < len__4730__auto___33191)){
args__4736__auto__.push((arguments[i__4731__auto___33194]));

var G__33195 = (i__4731__auto___33194 + (1));
i__4731__auto___33194 = G__33195;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30861){
var map__30862 = p__30861;
var map__30862__$1 = (((((!((map__30862 == null))))?(((((map__30862.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30862.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30862):map__30862);
var opts = map__30862__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30854){
var G__30855 = cljs.core.first(seq30854);
var seq30854__$1 = cljs.core.next(seq30854);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30855,seq30854__$1);
});

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
var G__30889 = arguments.length;
switch (G__30889) {
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

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__30662__auto___33205 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30662__auto___33205){
return (function (){
var f__30663__auto__ = (function (){var switch__30351__auto__ = ((function (c__30662__auto___33205){
return (function (state_30922){
var state_val_30923 = (state_30922[(1)]);
if((state_val_30923 === (7))){
var inst_30913 = (state_30922[(2)]);
var state_30922__$1 = state_30922;
var statearr_30927_33206 = state_30922__$1;
(statearr_30927_33206[(2)] = inst_30913);

(statearr_30927_33206[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (1))){
var state_30922__$1 = state_30922;
var statearr_30928_33209 = state_30922__$1;
(statearr_30928_33209[(2)] = null);

(statearr_30928_33209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (4))){
var inst_30893 = (state_30922[(7)]);
var inst_30893__$1 = (state_30922[(2)]);
var inst_30894 = (inst_30893__$1 == null);
var state_30922__$1 = (function (){var statearr_30929 = state_30922;
(statearr_30929[(7)] = inst_30893__$1);

return statearr_30929;
})();
if(cljs.core.truth_(inst_30894)){
var statearr_30930_33214 = state_30922__$1;
(statearr_30930_33214[(1)] = (5));

} else {
var statearr_30932_33216 = state_30922__$1;
(statearr_30932_33216[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (13))){
var state_30922__$1 = state_30922;
var statearr_30934_33217 = state_30922__$1;
(statearr_30934_33217[(2)] = null);

(statearr_30934_33217[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (6))){
var inst_30893 = (state_30922[(7)]);
var state_30922__$1 = state_30922;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30922__$1,(11),to,inst_30893);
} else {
if((state_val_30923 === (3))){
var inst_30915 = (state_30922[(2)]);
var state_30922__$1 = state_30922;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30922__$1,inst_30915);
} else {
if((state_val_30923 === (12))){
var state_30922__$1 = state_30922;
var statearr_30937_33219 = state_30922__$1;
(statearr_30937_33219[(2)] = null);

(statearr_30937_33219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (2))){
var state_30922__$1 = state_30922;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30922__$1,(4),from);
} else {
if((state_val_30923 === (11))){
var inst_30906 = (state_30922[(2)]);
var state_30922__$1 = state_30922;
if(cljs.core.truth_(inst_30906)){
var statearr_30939_33221 = state_30922__$1;
(statearr_30939_33221[(1)] = (12));

} else {
var statearr_30940_33223 = state_30922__$1;
(statearr_30940_33223[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (9))){
var state_30922__$1 = state_30922;
var statearr_30945_33225 = state_30922__$1;
(statearr_30945_33225[(2)] = null);

(statearr_30945_33225[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (5))){
var state_30922__$1 = state_30922;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30946_33227 = state_30922__$1;
(statearr_30946_33227[(1)] = (8));

} else {
var statearr_30947_33228 = state_30922__$1;
(statearr_30947_33228[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (14))){
var inst_30911 = (state_30922[(2)]);
var state_30922__$1 = state_30922;
var statearr_30952_33229 = state_30922__$1;
(statearr_30952_33229[(2)] = inst_30911);

(statearr_30952_33229[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (10))){
var inst_30903 = (state_30922[(2)]);
var state_30922__$1 = state_30922;
var statearr_30958_33230 = state_30922__$1;
(statearr_30958_33230[(2)] = inst_30903);

(statearr_30958_33230[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30923 === (8))){
var inst_30900 = cljs.core.async.close_BANG_(to);
var state_30922__$1 = state_30922;
var statearr_30960_33231 = state_30922__$1;
(statearr_30960_33231[(2)] = inst_30900);

(statearr_30960_33231[(1)] = (10));


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
});})(c__30662__auto___33205))
;
return ((function (switch__30351__auto__,c__30662__auto___33205){
return (function() {
var cljs$core$async$state_machine__30352__auto__ = null;
var cljs$core$async$state_machine__30352__auto____0 = (function (){
var statearr_30970 = [null,null,null,null,null,null,null,null];
(statearr_30970[(0)] = cljs$core$async$state_machine__30352__auto__);

(statearr_30970[(1)] = (1));

return statearr_30970;
});
var cljs$core$async$state_machine__30352__auto____1 = (function (state_30922){
while(true){
var ret_value__30353__auto__ = (function (){try{while(true){
var result__30354__auto__ = switch__30351__auto__(state_30922);
if(cljs.core.keyword_identical_QMARK_(result__30354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30354__auto__;
}
break;
}
}catch (e30975){if((e30975 instanceof Object)){
var ex__30355__auto__ = e30975;
var statearr_30976_33243 = state_30922;
(statearr_30976_33243[(5)] = ex__30355__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30922);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30975;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33247 = state_30922;
state_30922 = G__33247;
continue;
} else {
return ret_value__30353__auto__;
}
break;
}
});
cljs$core$async$state_machine__30352__auto__ = function(state_30922){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30352__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30352__auto____1.call(this,state_30922);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30352__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30352__auto____0;
cljs$core$async$state_machine__30352__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30352__auto____1;
return cljs$core$async$state_machine__30352__auto__;
})()
;})(switch__30351__auto__,c__30662__auto___33205))
})();
var state__30664__auto__ = (function (){var statearr_30977 = (f__30663__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30663__auto__.cljs$core$IFn$_invoke$arity$0() : f__30663__auto__.call(null));
(statearr_30977[(6)] = c__30662__auto___33205);

return statearr_30977;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30664__auto__);
});})(c__30662__auto___33205))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__30980){
var vec__30981 = p__30980;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30981,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30981,(1),null);
var job = vec__30981;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__30662__auto___33252 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30662__auto___33252,res,vec__30981,v,p,job,jobs,results){
return (function (){
var f__30663__auto__ = (function (){var switch__30351__auto__ = ((function (c__30662__auto___33252,res,vec__30981,v,p,job,jobs,results){
return (function (state_30988){
var state_val_30989 = (state_30988[(1)]);
if((state_val_30989 === (1))){
var state_30988__$1 = state_30988;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30988__$1,(2),res,v);
} else {
if((state_val_30989 === (2))){
var inst_30985 = (state_30988[(2)]);
var inst_30986 = cljs.core.async.close_BANG_(res);
var state_30988__$1 = (function (){var statearr_30992 = state_30988;
(statearr_30992[(7)] = inst_30985);

return statearr_30992;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30988__$1,inst_30986);
} else {
return null;
}
}
});})(c__30662__auto___33252,res,vec__30981,v,p,job,jobs,results))
;
return ((function (switch__30351__auto__,c__30662__auto___33252,res,vec__30981,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30352__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30352__auto____0 = (function (){
var statearr_30994 = [null,null,null,null,null,null,null,null];
(statearr_30994[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30352__auto__);

(statearr_30994[(1)] = (1));

return statearr_30994;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30352__auto____1 = (function (state_30988){
while(true){
var ret_value__30353__auto__ = (function (){try{while(true){
var result__30354__auto__ = switch__30351__auto__(state_30988);
if(cljs.core.keyword_identical_QMARK_(result__30354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30354__auto__;
}
break;
}
}catch (e30995){if((e30995 instanceof Object)){
var ex__30355__auto__ = e30995;
var statearr_30996_33253 = state_30988;
(statearr_30996_33253[(5)] = ex__30355__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30988);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30995;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33254 = state_30988;
state_30988 = G__33254;
continue;
} else {
return ret_value__30353__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30352__auto__ = function(state_30988){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30352__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30352__auto____1.call(this,state_30988);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30352__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30352__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30352__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30352__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30352__auto__;
})()
;})(switch__30351__auto__,c__30662__auto___33252,res,vec__30981,v,p,job,jobs,results))
})();
var state__30664__auto__ = (function (){var statearr_30998 = (f__30663__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30663__auto__.cljs$core$IFn$_invoke$arity$0() : f__30663__auto__.call(null));
(statearr_30998[(6)] = c__30662__auto___33252);

return statearr_30998;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30664__auto__);
});})(c__30662__auto___33252,res,vec__30981,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__30999){
var vec__31000 = p__30999;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31000,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31000,(1),null);
var job = vec__31000;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___33255 = n;
var __33256 = (0);
while(true){
if((__33256 < n__4607__auto___33255)){
var G__31004_33257 = type;
var G__31004_33258__$1 = (((G__31004_33257 instanceof cljs.core.Keyword))?G__31004_33257.fqn:null);
switch (G__31004_33258__$1) {
case "compute":
var c__30662__auto___33260 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33256,c__30662__auto___33260,G__31004_33257,G__31004_33258__$1,n__4607__auto___33255,jobs,results,process,async){
return (function (){
var f__30663__auto__ = (function (){var switch__30351__auto__ = ((function (__33256,c__30662__auto___33260,G__31004_33257,G__31004_33258__$1,n__4607__auto___33255,jobs,results,process,async){
return (function (state_31017){
var state_val_31018 = (state_31017[(1)]);
if((state_val_31018 === (1))){
var state_31017__$1 = state_31017;
var statearr_31027_33261 = state_31017__$1;
(statearr_31027_33261[(2)] = null);

(statearr_31027_33261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31018 === (2))){
var state_31017__$1 = state_31017;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31017__$1,(4),jobs);
} else {
if((state_val_31018 === (3))){
var inst_31015 = (state_31017[(2)]);
var state_31017__$1 = state_31017;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31017__$1,inst_31015);
} else {
if((state_val_31018 === (4))){
var inst_31007 = (state_31017[(2)]);
var inst_31008 = process(inst_31007);
var state_31017__$1 = state_31017;
if(cljs.core.truth_(inst_31008)){
var statearr_31028_33264 = state_31017__$1;
(statearr_31028_33264[(1)] = (5));

} else {
var statearr_31030_33265 = state_31017__$1;
(statearr_31030_33265[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31018 === (5))){
var state_31017__$1 = state_31017;
var statearr_31034_33266 = state_31017__$1;
(statearr_31034_33266[(2)] = null);

(statearr_31034_33266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31018 === (6))){
var state_31017__$1 = state_31017;
var statearr_31035_33267 = state_31017__$1;
(statearr_31035_33267[(2)] = null);

(statearr_31035_33267[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31018 === (7))){
var inst_31013 = (state_31017[(2)]);
var state_31017__$1 = state_31017;
var statearr_31039_33272 = state_31017__$1;
(statearr_31039_33272[(2)] = inst_31013);

(statearr_31039_33272[(1)] = (3));


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
});})(__33256,c__30662__auto___33260,G__31004_33257,G__31004_33258__$1,n__4607__auto___33255,jobs,results,process,async))
;
return ((function (__33256,switch__30351__auto__,c__30662__auto___33260,G__31004_33257,G__31004_33258__$1,n__4607__auto___33255,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30352__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30352__auto____0 = (function (){
var statearr_31040 = [null,null,null,null,null,null,null];
(statearr_31040[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30352__auto__);

(statearr_31040[(1)] = (1));

return statearr_31040;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30352__auto____1 = (function (state_31017){
while(true){
var ret_value__30353__auto__ = (function (){try{while(true){
var result__30354__auto__ = switch__30351__auto__(state_31017);
if(cljs.core.keyword_identical_QMARK_(result__30354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30354__auto__;
}
break;
}
}catch (e31041){if((e31041 instanceof Object)){
var ex__30355__auto__ = e31041;
var statearr_31042_33274 = state_31017;
(statearr_31042_33274[(5)] = ex__30355__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31017);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31041;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33275 = state_31017;
state_31017 = G__33275;
continue;
} else {
return ret_value__30353__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30352__auto__ = function(state_31017){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30352__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30352__auto____1.call(this,state_31017);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30352__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30352__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30352__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30352__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30352__auto__;
})()
;})(__33256,switch__30351__auto__,c__30662__auto___33260,G__31004_33257,G__31004_33258__$1,n__4607__auto___33255,jobs,results,process,async))
})();
var state__30664__auto__ = (function (){var statearr_31045 = (f__30663__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30663__auto__.cljs$core$IFn$_invoke$arity$0() : f__30663__auto__.call(null));
(statearr_31045[(6)] = c__30662__auto___33260);

return statearr_31045;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30664__auto__);
});})(__33256,c__30662__auto___33260,G__31004_33257,G__31004_33258__$1,n__4607__auto___33255,jobs,results,process,async))
);


break;
case "async":
var c__30662__auto___33277 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33256,c__30662__auto___33277,G__31004_33257,G__31004_33258__$1,n__4607__auto___33255,jobs,results,process,async){
return (function (){
var f__30663__auto__ = (function (){var switch__30351__auto__ = ((function (__33256,c__30662__auto___33277,G__31004_33257,G__31004_33258__$1,n__4607__auto___33255,jobs,results,process,async){
return (function (state_31063){
var state_val_31064 = (state_31063[(1)]);
if((state_val_31064 === (1))){
var state_31063__$1 = state_31063;
var statearr_31072_33279 = state_31063__$1;
(statearr_31072_33279[(2)] = null);

(statearr_31072_33279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31064 === (2))){
var state_31063__$1 = state_31063;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31063__$1,(4),jobs);
} else {
if((state_val_31064 === (3))){
var inst_31061 = (state_31063[(2)]);
var state_31063__$1 = state_31063;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31063__$1,inst_31061);
} else {
if((state_val_31064 === (4))){
var inst_31053 = (state_31063[(2)]);
var inst_31054 = async(inst_31053);
var state_31063__$1 = state_31063;
if(cljs.core.truth_(inst_31054)){
var statearr_31088_33280 = state_31063__$1;
(statearr_31088_33280[(1)] = (5));

} else {
var statearr_31091_33282 = state_31063__$1;
(statearr_31091_33282[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31064 === (5))){
var state_31063__$1 = state_31063;
var statearr_31092_33285 = state_31063__$1;
(statearr_31092_33285[(2)] = null);

(statearr_31092_33285[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31064 === (6))){
var state_31063__$1 = state_31063;
var statearr_31093_33287 = state_31063__$1;
(statearr_31093_33287[(2)] = null);

(statearr_31093_33287[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31064 === (7))){
var inst_31059 = (state_31063[(2)]);
var state_31063__$1 = state_31063;
var statearr_31098_33288 = state_31063__$1;
(statearr_31098_33288[(2)] = inst_31059);

(statearr_31098_33288[(1)] = (3));


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
});})(__33256,c__30662__auto___33277,G__31004_33257,G__31004_33258__$1,n__4607__auto___33255,jobs,results,process,async))
;
return ((function (__33256,switch__30351__auto__,c__30662__auto___33277,G__31004_33257,G__31004_33258__$1,n__4607__auto___33255,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30352__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30352__auto____0 = (function (){
var statearr_31099 = [null,null,null,null,null,null,null];
(statearr_31099[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30352__auto__);

(statearr_31099[(1)] = (1));

return statearr_31099;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30352__auto____1 = (function (state_31063){
while(true){
var ret_value__30353__auto__ = (function (){try{while(true){
var result__30354__auto__ = switch__30351__auto__(state_31063);
if(cljs.core.keyword_identical_QMARK_(result__30354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30354__auto__;
}
break;
}
}catch (e31100){if((e31100 instanceof Object)){
var ex__30355__auto__ = e31100;
var statearr_31101_33297 = state_31063;
(statearr_31101_33297[(5)] = ex__30355__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31063);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31100;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33298 = state_31063;
state_31063 = G__33298;
continue;
} else {
return ret_value__30353__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30352__auto__ = function(state_31063){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30352__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30352__auto____1.call(this,state_31063);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30352__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30352__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30352__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30352__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30352__auto__;
})()
;})(__33256,switch__30351__auto__,c__30662__auto___33277,G__31004_33257,G__31004_33258__$1,n__4607__auto___33255,jobs,results,process,async))
})();
var state__30664__auto__ = (function (){var statearr_31105 = (f__30663__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30663__auto__.cljs$core$IFn$_invoke$arity$0() : f__30663__auto__.call(null));
(statearr_31105[(6)] = c__30662__auto___33277);

return statearr_31105;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30664__auto__);
});})(__33256,c__30662__auto___33277,G__31004_33257,G__31004_33258__$1,n__4607__auto___33255,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31004_33258__$1)].join('')));

}

var G__33299 = (__33256 + (1));
__33256 = G__33299;
continue;
} else {
}
break;
}

var c__30662__auto___33300 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30662__auto___33300,jobs,results,process,async){
return (function (){
var f__30663__auto__ = (function (){var switch__30351__auto__ = ((function (c__30662__auto___33300,jobs,results,process,async){
return (function (state_31135){
var state_val_31136 = (state_31135[(1)]);
if((state_val_31136 === (7))){
var inst_31130 = (state_31135[(2)]);
var state_31135__$1 = state_31135;
var statearr_31138_33303 = state_31135__$1;
(statearr_31138_33303[(2)] = inst_31130);

(statearr_31138_33303[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31136 === (1))){
var state_31135__$1 = state_31135;
var statearr_31139_33304 = state_31135__$1;
(statearr_31139_33304[(2)] = null);

(statearr_31139_33304[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31136 === (4))){
var inst_31113 = (state_31135[(7)]);
var inst_31113__$1 = (state_31135[(2)]);
var inst_31114 = (inst_31113__$1 == null);
var state_31135__$1 = (function (){var statearr_31140 = state_31135;
(statearr_31140[(7)] = inst_31113__$1);

return statearr_31140;
})();
if(cljs.core.truth_(inst_31114)){
var statearr_31141_33305 = state_31135__$1;
(statearr_31141_33305[(1)] = (5));

} else {
var statearr_31142_33306 = state_31135__$1;
(statearr_31142_33306[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31136 === (6))){
var inst_31118 = (state_31135[(8)]);
var inst_31113 = (state_31135[(7)]);
var inst_31118__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_31121 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31122 = [inst_31113,inst_31118__$1];
var inst_31123 = (new cljs.core.PersistentVector(null,2,(5),inst_31121,inst_31122,null));
var state_31135__$1 = (function (){var statearr_31143 = state_31135;
(statearr_31143[(8)] = inst_31118__$1);

return statearr_31143;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31135__$1,(8),jobs,inst_31123);
} else {
if((state_val_31136 === (3))){
var inst_31132 = (state_31135[(2)]);
var state_31135__$1 = state_31135;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31135__$1,inst_31132);
} else {
if((state_val_31136 === (2))){
var state_31135__$1 = state_31135;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31135__$1,(4),from);
} else {
if((state_val_31136 === (9))){
var inst_31127 = (state_31135[(2)]);
var state_31135__$1 = (function (){var statearr_31144 = state_31135;
(statearr_31144[(9)] = inst_31127);

return statearr_31144;
})();
var statearr_31145_33309 = state_31135__$1;
(statearr_31145_33309[(2)] = null);

(statearr_31145_33309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31136 === (5))){
var inst_31116 = cljs.core.async.close_BANG_(jobs);
var state_31135__$1 = state_31135;
var statearr_31148_33310 = state_31135__$1;
(statearr_31148_33310[(2)] = inst_31116);

(statearr_31148_33310[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31136 === (8))){
var inst_31118 = (state_31135[(8)]);
var inst_31125 = (state_31135[(2)]);
var state_31135__$1 = (function (){var statearr_31153 = state_31135;
(statearr_31153[(10)] = inst_31125);

return statearr_31153;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31135__$1,(9),results,inst_31118);
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
});})(c__30662__auto___33300,jobs,results,process,async))
;
return ((function (switch__30351__auto__,c__30662__auto___33300,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30352__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30352__auto____0 = (function (){
var statearr_31154 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31154[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30352__auto__);

(statearr_31154[(1)] = (1));

return statearr_31154;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30352__auto____1 = (function (state_31135){
while(true){
var ret_value__30353__auto__ = (function (){try{while(true){
var result__30354__auto__ = switch__30351__auto__(state_31135);
if(cljs.core.keyword_identical_QMARK_(result__30354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30354__auto__;
}
break;
}
}catch (e31156){if((e31156 instanceof Object)){
var ex__30355__auto__ = e31156;
var statearr_31158_33313 = state_31135;
(statearr_31158_33313[(5)] = ex__30355__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31135);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31156;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33314 = state_31135;
state_31135 = G__33314;
continue;
} else {
return ret_value__30353__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30352__auto__ = function(state_31135){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30352__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30352__auto____1.call(this,state_31135);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30352__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30352__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30352__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30352__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30352__auto__;
})()
;})(switch__30351__auto__,c__30662__auto___33300,jobs,results,process,async))
})();
var state__30664__auto__ = (function (){var statearr_31164 = (f__30663__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30663__auto__.cljs$core$IFn$_invoke$arity$0() : f__30663__auto__.call(null));
(statearr_31164[(6)] = c__30662__auto___33300);

return statearr_31164;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30664__auto__);
});})(c__30662__auto___33300,jobs,results,process,async))
);


var c__30662__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30662__auto__,jobs,results,process,async){
return (function (){
var f__30663__auto__ = (function (){var switch__30351__auto__ = ((function (c__30662__auto__,jobs,results,process,async){
return (function (state_31202){
var state_val_31203 = (state_31202[(1)]);
if((state_val_31203 === (7))){
var inst_31198 = (state_31202[(2)]);
var state_31202__$1 = state_31202;
var statearr_31204_33319 = state_31202__$1;
(statearr_31204_33319[(2)] = inst_31198);

(statearr_31204_33319[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31203 === (20))){
var state_31202__$1 = state_31202;
var statearr_31205_33322 = state_31202__$1;
(statearr_31205_33322[(2)] = null);

(statearr_31205_33322[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31203 === (1))){
var state_31202__$1 = state_31202;
var statearr_31206_33323 = state_31202__$1;
(statearr_31206_33323[(2)] = null);

(statearr_31206_33323[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31203 === (4))){
var inst_31167 = (state_31202[(7)]);
var inst_31167__$1 = (state_31202[(2)]);
var inst_31168 = (inst_31167__$1 == null);
var state_31202__$1 = (function (){var statearr_31210 = state_31202;
(statearr_31210[(7)] = inst_31167__$1);

return statearr_31210;
})();
if(cljs.core.truth_(inst_31168)){
var statearr_31211_33326 = state_31202__$1;
(statearr_31211_33326[(1)] = (5));

} else {
var statearr_31212_33327 = state_31202__$1;
(statearr_31212_33327[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31203 === (15))){
var inst_31180 = (state_31202[(8)]);
var state_31202__$1 = state_31202;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31202__$1,(18),to,inst_31180);
} else {
if((state_val_31203 === (21))){
var inst_31193 = (state_31202[(2)]);
var state_31202__$1 = state_31202;
var statearr_31216_33329 = state_31202__$1;
(statearr_31216_33329[(2)] = inst_31193);

(statearr_31216_33329[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31203 === (13))){
var inst_31195 = (state_31202[(2)]);
var state_31202__$1 = (function (){var statearr_31217 = state_31202;
(statearr_31217[(9)] = inst_31195);

return statearr_31217;
})();
var statearr_31218_33331 = state_31202__$1;
(statearr_31218_33331[(2)] = null);

(statearr_31218_33331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31203 === (6))){
var inst_31167 = (state_31202[(7)]);
var state_31202__$1 = state_31202;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31202__$1,(11),inst_31167);
} else {
if((state_val_31203 === (17))){
var inst_31188 = (state_31202[(2)]);
var state_31202__$1 = state_31202;
if(cljs.core.truth_(inst_31188)){
var statearr_31223_33332 = state_31202__$1;
(statearr_31223_33332[(1)] = (19));

} else {
var statearr_31225_33335 = state_31202__$1;
(statearr_31225_33335[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31203 === (3))){
var inst_31200 = (state_31202[(2)]);
var state_31202__$1 = state_31202;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31202__$1,inst_31200);
} else {
if((state_val_31203 === (12))){
var inst_31177 = (state_31202[(10)]);
var state_31202__$1 = state_31202;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31202__$1,(14),inst_31177);
} else {
if((state_val_31203 === (2))){
var state_31202__$1 = state_31202;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31202__$1,(4),results);
} else {
if((state_val_31203 === (19))){
var state_31202__$1 = state_31202;
var statearr_31227_33336 = state_31202__$1;
(statearr_31227_33336[(2)] = null);

(statearr_31227_33336[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31203 === (11))){
var inst_31177 = (state_31202[(2)]);
var state_31202__$1 = (function (){var statearr_31228 = state_31202;
(statearr_31228[(10)] = inst_31177);

return statearr_31228;
})();
var statearr_31229_33337 = state_31202__$1;
(statearr_31229_33337[(2)] = null);

(statearr_31229_33337[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31203 === (9))){
var state_31202__$1 = state_31202;
var statearr_31232_33338 = state_31202__$1;
(statearr_31232_33338[(2)] = null);

(statearr_31232_33338[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31203 === (5))){
var state_31202__$1 = state_31202;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31233_33339 = state_31202__$1;
(statearr_31233_33339[(1)] = (8));

} else {
var statearr_31234_33341 = state_31202__$1;
(statearr_31234_33341[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31203 === (14))){
var inst_31182 = (state_31202[(11)]);
var inst_31180 = (state_31202[(8)]);
var inst_31180__$1 = (state_31202[(2)]);
var inst_31181 = (inst_31180__$1 == null);
var inst_31182__$1 = cljs.core.not(inst_31181);
var state_31202__$1 = (function (){var statearr_31235 = state_31202;
(statearr_31235[(11)] = inst_31182__$1);

(statearr_31235[(8)] = inst_31180__$1);

return statearr_31235;
})();
if(inst_31182__$1){
var statearr_31236_33342 = state_31202__$1;
(statearr_31236_33342[(1)] = (15));

} else {
var statearr_31237_33343 = state_31202__$1;
(statearr_31237_33343[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31203 === (16))){
var inst_31182 = (state_31202[(11)]);
var state_31202__$1 = state_31202;
var statearr_31242_33344 = state_31202__$1;
(statearr_31242_33344[(2)] = inst_31182);

(statearr_31242_33344[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31203 === (10))){
var inst_31174 = (state_31202[(2)]);
var state_31202__$1 = state_31202;
var statearr_31245_33345 = state_31202__$1;
(statearr_31245_33345[(2)] = inst_31174);

(statearr_31245_33345[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31203 === (18))){
var inst_31185 = (state_31202[(2)]);
var state_31202__$1 = state_31202;
var statearr_31246_33359 = state_31202__$1;
(statearr_31246_33359[(2)] = inst_31185);

(statearr_31246_33359[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31203 === (8))){
var inst_31171 = cljs.core.async.close_BANG_(to);
var state_31202__$1 = state_31202;
var statearr_31247_33363 = state_31202__$1;
(statearr_31247_33363[(2)] = inst_31171);

(statearr_31247_33363[(1)] = (10));


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
});})(c__30662__auto__,jobs,results,process,async))
;
return ((function (switch__30351__auto__,c__30662__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30352__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30352__auto____0 = (function (){
var statearr_31249 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31249[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30352__auto__);

(statearr_31249[(1)] = (1));

return statearr_31249;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30352__auto____1 = (function (state_31202){
while(true){
var ret_value__30353__auto__ = (function (){try{while(true){
var result__30354__auto__ = switch__30351__auto__(state_31202);
if(cljs.core.keyword_identical_QMARK_(result__30354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30354__auto__;
}
break;
}
}catch (e31254){if((e31254 instanceof Object)){
var ex__30355__auto__ = e31254;
var statearr_31259_33366 = state_31202;
(statearr_31259_33366[(5)] = ex__30355__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31202);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31254;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33367 = state_31202;
state_31202 = G__33367;
continue;
} else {
return ret_value__30353__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30352__auto__ = function(state_31202){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30352__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30352__auto____1.call(this,state_31202);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30352__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30352__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30352__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30352__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30352__auto__;
})()
;})(switch__30351__auto__,c__30662__auto__,jobs,results,process,async))
})();
var state__30664__auto__ = (function (){var statearr_31266 = (f__30663__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30663__auto__.cljs$core$IFn$_invoke$arity$0() : f__30663__auto__.call(null));
(statearr_31266[(6)] = c__30662__auto__);

return statearr_31266;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30664__auto__);
});})(c__30662__auto__,jobs,results,process,async))
);

return c__30662__auto__;
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
var G__31268 = arguments.length;
switch (G__31268) {
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

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

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
var G__31273 = arguments.length;
switch (G__31273) {
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

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

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
var G__31277 = arguments.length;
switch (G__31277) {
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

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__30662__auto___33384 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30662__auto___33384,tc,fc){
return (function (){
var f__30663__auto__ = (function (){var switch__30351__auto__ = ((function (c__30662__auto___33384,tc,fc){
return (function (state_31310){
var state_val_31311 = (state_31310[(1)]);
if((state_val_31311 === (7))){
var inst_31306 = (state_31310[(2)]);
var state_31310__$1 = state_31310;
var statearr_31318_33385 = state_31310__$1;
(statearr_31318_33385[(2)] = inst_31306);

(statearr_31318_33385[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31311 === (1))){
var state_31310__$1 = state_31310;
var statearr_31319_33389 = state_31310__$1;
(statearr_31319_33389[(2)] = null);

(statearr_31319_33389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31311 === (4))){
var inst_31284 = (state_31310[(7)]);
var inst_31284__$1 = (state_31310[(2)]);
var inst_31287 = (inst_31284__$1 == null);
var state_31310__$1 = (function (){var statearr_31320 = state_31310;
(statearr_31320[(7)] = inst_31284__$1);

return statearr_31320;
})();
if(cljs.core.truth_(inst_31287)){
var statearr_31321_33393 = state_31310__$1;
(statearr_31321_33393[(1)] = (5));

} else {
var statearr_31322_33394 = state_31310__$1;
(statearr_31322_33394[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31311 === (13))){
var state_31310__$1 = state_31310;
var statearr_31324_33395 = state_31310__$1;
(statearr_31324_33395[(2)] = null);

(statearr_31324_33395[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31311 === (6))){
var inst_31284 = (state_31310[(7)]);
var inst_31292 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31284) : p.call(null,inst_31284));
var state_31310__$1 = state_31310;
if(cljs.core.truth_(inst_31292)){
var statearr_31325_33399 = state_31310__$1;
(statearr_31325_33399[(1)] = (9));

} else {
var statearr_31326_33400 = state_31310__$1;
(statearr_31326_33400[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31311 === (3))){
var inst_31308 = (state_31310[(2)]);
var state_31310__$1 = state_31310;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31310__$1,inst_31308);
} else {
if((state_val_31311 === (12))){
var state_31310__$1 = state_31310;
var statearr_31327_33401 = state_31310__$1;
(statearr_31327_33401[(2)] = null);

(statearr_31327_33401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31311 === (2))){
var state_31310__$1 = state_31310;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31310__$1,(4),ch);
} else {
if((state_val_31311 === (11))){
var inst_31284 = (state_31310[(7)]);
var inst_31296 = (state_31310[(2)]);
var state_31310__$1 = state_31310;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31310__$1,(8),inst_31296,inst_31284);
} else {
if((state_val_31311 === (9))){
var state_31310__$1 = state_31310;
var statearr_31328_33406 = state_31310__$1;
(statearr_31328_33406[(2)] = tc);

(statearr_31328_33406[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31311 === (5))){
var inst_31289 = cljs.core.async.close_BANG_(tc);
var inst_31290 = cljs.core.async.close_BANG_(fc);
var state_31310__$1 = (function (){var statearr_31329 = state_31310;
(statearr_31329[(8)] = inst_31289);

return statearr_31329;
})();
var statearr_31330_33413 = state_31310__$1;
(statearr_31330_33413[(2)] = inst_31290);

(statearr_31330_33413[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31311 === (14))){
var inst_31304 = (state_31310[(2)]);
var state_31310__$1 = state_31310;
var statearr_31331_33414 = state_31310__$1;
(statearr_31331_33414[(2)] = inst_31304);

(statearr_31331_33414[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31311 === (10))){
var state_31310__$1 = state_31310;
var statearr_31332_33415 = state_31310__$1;
(statearr_31332_33415[(2)] = fc);

(statearr_31332_33415[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31311 === (8))){
var inst_31298 = (state_31310[(2)]);
var state_31310__$1 = state_31310;
if(cljs.core.truth_(inst_31298)){
var statearr_31333_33419 = state_31310__$1;
(statearr_31333_33419[(1)] = (12));

} else {
var statearr_31334_33420 = state_31310__$1;
(statearr_31334_33420[(1)] = (13));

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
});})(c__30662__auto___33384,tc,fc))
;
return ((function (switch__30351__auto__,c__30662__auto___33384,tc,fc){
return (function() {
var cljs$core$async$state_machine__30352__auto__ = null;
var cljs$core$async$state_machine__30352__auto____0 = (function (){
var statearr_31335 = [null,null,null,null,null,null,null,null,null];
(statearr_31335[(0)] = cljs$core$async$state_machine__30352__auto__);

(statearr_31335[(1)] = (1));

return statearr_31335;
});
var cljs$core$async$state_machine__30352__auto____1 = (function (state_31310){
while(true){
var ret_value__30353__auto__ = (function (){try{while(true){
var result__30354__auto__ = switch__30351__auto__(state_31310);
if(cljs.core.keyword_identical_QMARK_(result__30354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30354__auto__;
}
break;
}
}catch (e31336){if((e31336 instanceof Object)){
var ex__30355__auto__ = e31336;
var statearr_31337_33427 = state_31310;
(statearr_31337_33427[(5)] = ex__30355__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31310);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31336;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33431 = state_31310;
state_31310 = G__33431;
continue;
} else {
return ret_value__30353__auto__;
}
break;
}
});
cljs$core$async$state_machine__30352__auto__ = function(state_31310){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30352__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30352__auto____1.call(this,state_31310);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30352__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30352__auto____0;
cljs$core$async$state_machine__30352__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30352__auto____1;
return cljs$core$async$state_machine__30352__auto__;
})()
;})(switch__30351__auto__,c__30662__auto___33384,tc,fc))
})();
var state__30664__auto__ = (function (){var statearr_31346 = (f__30663__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30663__auto__.cljs$core$IFn$_invoke$arity$0() : f__30663__auto__.call(null));
(statearr_31346[(6)] = c__30662__auto___33384);

return statearr_31346;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30664__auto__);
});})(c__30662__auto___33384,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__30662__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30662__auto__){
return (function (){
var f__30663__auto__ = (function (){var switch__30351__auto__ = ((function (c__30662__auto__){
return (function (state_31372){
var state_val_31373 = (state_31372[(1)]);
if((state_val_31373 === (7))){
var inst_31368 = (state_31372[(2)]);
var state_31372__$1 = state_31372;
var statearr_31374_33438 = state_31372__$1;
(statearr_31374_33438[(2)] = inst_31368);

(statearr_31374_33438[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31373 === (1))){
var inst_31352 = init;
var state_31372__$1 = (function (){var statearr_31375 = state_31372;
(statearr_31375[(7)] = inst_31352);

return statearr_31375;
})();
var statearr_31376_33439 = state_31372__$1;
(statearr_31376_33439[(2)] = null);

(statearr_31376_33439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31373 === (4))){
var inst_31355 = (state_31372[(8)]);
var inst_31355__$1 = (state_31372[(2)]);
var inst_31356 = (inst_31355__$1 == null);
var state_31372__$1 = (function (){var statearr_31377 = state_31372;
(statearr_31377[(8)] = inst_31355__$1);

return statearr_31377;
})();
if(cljs.core.truth_(inst_31356)){
var statearr_31378_33440 = state_31372__$1;
(statearr_31378_33440[(1)] = (5));

} else {
var statearr_31379_33441 = state_31372__$1;
(statearr_31379_33441[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31373 === (6))){
var inst_31352 = (state_31372[(7)]);
var inst_31355 = (state_31372[(8)]);
var inst_31359 = (state_31372[(9)]);
var inst_31359__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_31352,inst_31355) : f.call(null,inst_31352,inst_31355));
var inst_31360 = cljs.core.reduced_QMARK_(inst_31359__$1);
var state_31372__$1 = (function (){var statearr_31381 = state_31372;
(statearr_31381[(9)] = inst_31359__$1);

return statearr_31381;
})();
if(inst_31360){
var statearr_31382_33443 = state_31372__$1;
(statearr_31382_33443[(1)] = (8));

} else {
var statearr_31383_33444 = state_31372__$1;
(statearr_31383_33444[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31373 === (3))){
var inst_31370 = (state_31372[(2)]);
var state_31372__$1 = state_31372;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31372__$1,inst_31370);
} else {
if((state_val_31373 === (2))){
var state_31372__$1 = state_31372;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31372__$1,(4),ch);
} else {
if((state_val_31373 === (9))){
var inst_31359 = (state_31372[(9)]);
var inst_31352 = inst_31359;
var state_31372__$1 = (function (){var statearr_31384 = state_31372;
(statearr_31384[(7)] = inst_31352);

return statearr_31384;
})();
var statearr_31385_33445 = state_31372__$1;
(statearr_31385_33445[(2)] = null);

(statearr_31385_33445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31373 === (5))){
var inst_31352 = (state_31372[(7)]);
var state_31372__$1 = state_31372;
var statearr_31386_33446 = state_31372__$1;
(statearr_31386_33446[(2)] = inst_31352);

(statearr_31386_33446[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31373 === (10))){
var inst_31366 = (state_31372[(2)]);
var state_31372__$1 = state_31372;
var statearr_31390_33447 = state_31372__$1;
(statearr_31390_33447[(2)] = inst_31366);

(statearr_31390_33447[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31373 === (8))){
var inst_31359 = (state_31372[(9)]);
var inst_31362 = cljs.core.deref(inst_31359);
var state_31372__$1 = state_31372;
var statearr_31391_33448 = state_31372__$1;
(statearr_31391_33448[(2)] = inst_31362);

(statearr_31391_33448[(1)] = (10));


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
});})(c__30662__auto__))
;
return ((function (switch__30351__auto__,c__30662__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__30352__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30352__auto____0 = (function (){
var statearr_31394 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31394[(0)] = cljs$core$async$reduce_$_state_machine__30352__auto__);

(statearr_31394[(1)] = (1));

return statearr_31394;
});
var cljs$core$async$reduce_$_state_machine__30352__auto____1 = (function (state_31372){
while(true){
var ret_value__30353__auto__ = (function (){try{while(true){
var result__30354__auto__ = switch__30351__auto__(state_31372);
if(cljs.core.keyword_identical_QMARK_(result__30354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30354__auto__;
}
break;
}
}catch (e31395){if((e31395 instanceof Object)){
var ex__30355__auto__ = e31395;
var statearr_31396_33449 = state_31372;
(statearr_31396_33449[(5)] = ex__30355__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31372);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31395;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33450 = state_31372;
state_31372 = G__33450;
continue;
} else {
return ret_value__30353__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30352__auto__ = function(state_31372){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30352__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30352__auto____1.call(this,state_31372);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__30352__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30352__auto____0;
cljs$core$async$reduce_$_state_machine__30352__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30352__auto____1;
return cljs$core$async$reduce_$_state_machine__30352__auto__;
})()
;})(switch__30351__auto__,c__30662__auto__))
})();
var state__30664__auto__ = (function (){var statearr_31401 = (f__30663__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30663__auto__.cljs$core$IFn$_invoke$arity$0() : f__30663__auto__.call(null));
(statearr_31401[(6)] = c__30662__auto__);

return statearr_31401;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30664__auto__);
});})(c__30662__auto__))
);

return c__30662__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__30662__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30662__auto__,f__$1){
return (function (){
var f__30663__auto__ = (function (){var switch__30351__auto__ = ((function (c__30662__auto__,f__$1){
return (function (state_31412){
var state_val_31413 = (state_31412[(1)]);
if((state_val_31413 === (1))){
var inst_31407 = cljs.core.async.reduce(f__$1,init,ch);
var state_31412__$1 = state_31412;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31412__$1,(2),inst_31407);
} else {
if((state_val_31413 === (2))){
var inst_31409 = (state_31412[(2)]);
var inst_31410 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_31409) : f__$1.call(null,inst_31409));
var state_31412__$1 = state_31412;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31412__$1,inst_31410);
} else {
return null;
}
}
});})(c__30662__auto__,f__$1))
;
return ((function (switch__30351__auto__,c__30662__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__30352__auto__ = null;
var cljs$core$async$transduce_$_state_machine__30352__auto____0 = (function (){
var statearr_31416 = [null,null,null,null,null,null,null];
(statearr_31416[(0)] = cljs$core$async$transduce_$_state_machine__30352__auto__);

(statearr_31416[(1)] = (1));

return statearr_31416;
});
var cljs$core$async$transduce_$_state_machine__30352__auto____1 = (function (state_31412){
while(true){
var ret_value__30353__auto__ = (function (){try{while(true){
var result__30354__auto__ = switch__30351__auto__(state_31412);
if(cljs.core.keyword_identical_QMARK_(result__30354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30354__auto__;
}
break;
}
}catch (e31418){if((e31418 instanceof Object)){
var ex__30355__auto__ = e31418;
var statearr_31419_33453 = state_31412;
(statearr_31419_33453[(5)] = ex__30355__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31412);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31418;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33454 = state_31412;
state_31412 = G__33454;
continue;
} else {
return ret_value__30353__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__30352__auto__ = function(state_31412){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__30352__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__30352__auto____1.call(this,state_31412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__30352__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__30352__auto____0;
cljs$core$async$transduce_$_state_machine__30352__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__30352__auto____1;
return cljs$core$async$transduce_$_state_machine__30352__auto__;
})()
;})(switch__30351__auto__,c__30662__auto__,f__$1))
})();
var state__30664__auto__ = (function (){var statearr_31420 = (f__30663__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30663__auto__.cljs$core$IFn$_invoke$arity$0() : f__30663__auto__.call(null));
(statearr_31420[(6)] = c__30662__auto__);

return statearr_31420;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30664__auto__);
});})(c__30662__auto__,f__$1))
);

return c__30662__auto__;
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
var G__31423 = arguments.length;
switch (G__31423) {
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

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__30662__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30662__auto__){
return (function (){
var f__30663__auto__ = (function (){var switch__30351__auto__ = ((function (c__30662__auto__){
return (function (state_31448){
var state_val_31449 = (state_31448[(1)]);
if((state_val_31449 === (7))){
var inst_31430 = (state_31448[(2)]);
var state_31448__$1 = state_31448;
var statearr_31452_33459 = state_31448__$1;
(statearr_31452_33459[(2)] = inst_31430);

(statearr_31452_33459[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31449 === (1))){
var inst_31424 = cljs.core.seq(coll);
var inst_31425 = inst_31424;
var state_31448__$1 = (function (){var statearr_31453 = state_31448;
(statearr_31453[(7)] = inst_31425);

return statearr_31453;
})();
var statearr_31454_33460 = state_31448__$1;
(statearr_31454_33460[(2)] = null);

(statearr_31454_33460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31449 === (4))){
var inst_31425 = (state_31448[(7)]);
var inst_31428 = cljs.core.first(inst_31425);
var state_31448__$1 = state_31448;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31448__$1,(7),ch,inst_31428);
} else {
if((state_val_31449 === (13))){
var inst_31442 = (state_31448[(2)]);
var state_31448__$1 = state_31448;
var statearr_31455_33464 = state_31448__$1;
(statearr_31455_33464[(2)] = inst_31442);

(statearr_31455_33464[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31449 === (6))){
var inst_31433 = (state_31448[(2)]);
var state_31448__$1 = state_31448;
if(cljs.core.truth_(inst_31433)){
var statearr_31456_33466 = state_31448__$1;
(statearr_31456_33466[(1)] = (8));

} else {
var statearr_31457_33467 = state_31448__$1;
(statearr_31457_33467[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31449 === (3))){
var inst_31446 = (state_31448[(2)]);
var state_31448__$1 = state_31448;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31448__$1,inst_31446);
} else {
if((state_val_31449 === (12))){
var state_31448__$1 = state_31448;
var statearr_31462_33468 = state_31448__$1;
(statearr_31462_33468[(2)] = null);

(statearr_31462_33468[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31449 === (2))){
var inst_31425 = (state_31448[(7)]);
var state_31448__$1 = state_31448;
if(cljs.core.truth_(inst_31425)){
var statearr_31463_33469 = state_31448__$1;
(statearr_31463_33469[(1)] = (4));

} else {
var statearr_31464_33471 = state_31448__$1;
(statearr_31464_33471[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31449 === (11))){
var inst_31439 = cljs.core.async.close_BANG_(ch);
var state_31448__$1 = state_31448;
var statearr_31468_33473 = state_31448__$1;
(statearr_31468_33473[(2)] = inst_31439);

(statearr_31468_33473[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31449 === (9))){
var state_31448__$1 = state_31448;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31476_33474 = state_31448__$1;
(statearr_31476_33474[(1)] = (11));

} else {
var statearr_31478_33475 = state_31448__$1;
(statearr_31478_33475[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31449 === (5))){
var inst_31425 = (state_31448[(7)]);
var state_31448__$1 = state_31448;
var statearr_31481_33476 = state_31448__$1;
(statearr_31481_33476[(2)] = inst_31425);

(statearr_31481_33476[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31449 === (10))){
var inst_31444 = (state_31448[(2)]);
var state_31448__$1 = state_31448;
var statearr_31482_33477 = state_31448__$1;
(statearr_31482_33477[(2)] = inst_31444);

(statearr_31482_33477[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31449 === (8))){
var inst_31425 = (state_31448[(7)]);
var inst_31435 = cljs.core.next(inst_31425);
var inst_31425__$1 = inst_31435;
var state_31448__$1 = (function (){var statearr_31483 = state_31448;
(statearr_31483[(7)] = inst_31425__$1);

return statearr_31483;
})();
var statearr_31484_33478 = state_31448__$1;
(statearr_31484_33478[(2)] = null);

(statearr_31484_33478[(1)] = (2));


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
});})(c__30662__auto__))
;
return ((function (switch__30351__auto__,c__30662__auto__){
return (function() {
var cljs$core$async$state_machine__30352__auto__ = null;
var cljs$core$async$state_machine__30352__auto____0 = (function (){
var statearr_31485 = [null,null,null,null,null,null,null,null];
(statearr_31485[(0)] = cljs$core$async$state_machine__30352__auto__);

(statearr_31485[(1)] = (1));

return statearr_31485;
});
var cljs$core$async$state_machine__30352__auto____1 = (function (state_31448){
while(true){
var ret_value__30353__auto__ = (function (){try{while(true){
var result__30354__auto__ = switch__30351__auto__(state_31448);
if(cljs.core.keyword_identical_QMARK_(result__30354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30354__auto__;
}
break;
}
}catch (e31486){if((e31486 instanceof Object)){
var ex__30355__auto__ = e31486;
var statearr_31487_33479 = state_31448;
(statearr_31487_33479[(5)] = ex__30355__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31448);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31486;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33480 = state_31448;
state_31448 = G__33480;
continue;
} else {
return ret_value__30353__auto__;
}
break;
}
});
cljs$core$async$state_machine__30352__auto__ = function(state_31448){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30352__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30352__auto____1.call(this,state_31448);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30352__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30352__auto____0;
cljs$core$async$state_machine__30352__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30352__auto____1;
return cljs$core$async$state_machine__30352__auto__;
})()
;})(switch__30351__auto__,c__30662__auto__))
})();
var state__30664__auto__ = (function (){var statearr_31489 = (f__30663__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30663__auto__.cljs$core$IFn$_invoke$arity$0() : f__30663__auto__.call(null));
(statearr_31489[(6)] = c__30662__auto__);

return statearr_31489;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30664__auto__);
});})(c__30662__auto__))
);

return c__30662__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

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
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
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
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4434__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4431__auto__.call(null,m,ch,close_QMARK_));
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
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
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
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31503 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31503 = (function (ch,cs,meta31504){
this.ch = ch;
this.cs = cs;
this.meta31504 = meta31504;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31503.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_31505,meta31504__$1){
var self__ = this;
var _31505__$1 = this;
return (new cljs.core.async.t_cljs$core$async31503(self__.ch,self__.cs,meta31504__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async31503.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_31505){
var self__ = this;
var _31505__$1 = this;
return self__.meta31504;
});})(cs))
;

cljs.core.async.t_cljs$core$async31503.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31503.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async31503.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31503.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31503.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31503.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31503.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31504","meta31504",307888486,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async31503.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31503.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31503";

cljs.core.async.t_cljs$core$async31503.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async31503");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31503.
 */
cljs.core.async.__GT_t_cljs$core$async31503 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async31503(ch__$1,cs__$1,meta31504){
return (new cljs.core.async.t_cljs$core$async31503(ch__$1,cs__$1,meta31504));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async31503(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__30662__auto___33508 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30662__auto___33508,cs,m,dchan,dctr,done){
return (function (){
var f__30663__auto__ = (function (){var switch__30351__auto__ = ((function (c__30662__auto___33508,cs,m,dchan,dctr,done){
return (function (state_31662){
var state_val_31663 = (state_31662[(1)]);
if((state_val_31663 === (7))){
var inst_31658 = (state_31662[(2)]);
var state_31662__$1 = state_31662;
var statearr_31664_33509 = state_31662__$1;
(statearr_31664_33509[(2)] = inst_31658);

(statearr_31664_33509[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31663 === (20))){
var inst_31559 = (state_31662[(7)]);
var inst_31571 = cljs.core.first(inst_31559);
var inst_31572 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31571,(0),null);
var inst_31573 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31571,(1),null);
var state_31662__$1 = (function (){var statearr_31665 = state_31662;
(statearr_31665[(8)] = inst_31572);

return statearr_31665;
})();
if(cljs.core.truth_(inst_31573)){
var statearr_31666_33510 = state_31662__$1;
(statearr_31666_33510[(1)] = (22));

} else {
var statearr_31667_33511 = state_31662__$1;
(statearr_31667_33511[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31663 === (27))){
var inst_31601 = (state_31662[(9)]);
var inst_31519 = (state_31662[(10)]);
var inst_31603 = (state_31662[(11)]);
var inst_31608 = (state_31662[(12)]);
var inst_31608__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_31601,inst_31603);
var inst_31609 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31608__$1,inst_31519,done);
var state_31662__$1 = (function (){var statearr_31669 = state_31662;
(statearr_31669[(12)] = inst_31608__$1);

return statearr_31669;
})();
if(cljs.core.truth_(inst_31609)){
var statearr_31670_33512 = state_31662__$1;
(statearr_31670_33512[(1)] = (30));

} else {
var statearr_31672_33513 = state_31662__$1;
(statearr_31672_33513[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31663 === (1))){
var state_31662__$1 = state_31662;
var statearr_31673_33514 = state_31662__$1;
(statearr_31673_33514[(2)] = null);

(statearr_31673_33514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31663 === (24))){
var inst_31559 = (state_31662[(7)]);
var inst_31578 = (state_31662[(2)]);
var inst_31579 = cljs.core.next(inst_31559);
var inst_31532 = inst_31579;
var inst_31533 = null;
var inst_31534 = (0);
var inst_31535 = (0);
var state_31662__$1 = (function (){var statearr_31674 = state_31662;
(statearr_31674[(13)] = inst_31533);

(statearr_31674[(14)] = inst_31535);

(statearr_31674[(15)] = inst_31578);

(statearr_31674[(16)] = inst_31532);

(statearr_31674[(17)] = inst_31534);

return statearr_31674;
})();
var statearr_31675_33521 = state_31662__$1;
(statearr_31675_33521[(2)] = null);

(statearr_31675_33521[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31663 === (39))){
var state_31662__$1 = state_31662;
var statearr_31680_33522 = state_31662__$1;
(statearr_31680_33522[(2)] = null);

(statearr_31680_33522[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31663 === (4))){
var inst_31519 = (state_31662[(10)]);
var inst_31519__$1 = (state_31662[(2)]);
var inst_31520 = (inst_31519__$1 == null);
var state_31662__$1 = (function (){var statearr_31681 = state_31662;
(statearr_31681[(10)] = inst_31519__$1);

return statearr_31681;
})();
if(cljs.core.truth_(inst_31520)){
var statearr_31682_33523 = state_31662__$1;
(statearr_31682_33523[(1)] = (5));

} else {
var statearr_31683_33524 = state_31662__$1;
(statearr_31683_33524[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31663 === (15))){
var inst_31533 = (state_31662[(13)]);
var inst_31535 = (state_31662[(14)]);
var inst_31532 = (state_31662[(16)]);
var inst_31534 = (state_31662[(17)]);
var inst_31554 = (state_31662[(2)]);
var inst_31556 = (inst_31535 + (1));
var tmp31677 = inst_31533;
var tmp31678 = inst_31532;
var tmp31679 = inst_31534;
var inst_31532__$1 = tmp31678;
var inst_31533__$1 = tmp31677;
var inst_31534__$1 = tmp31679;
var inst_31535__$1 = inst_31556;
var state_31662__$1 = (function (){var statearr_31684 = state_31662;
(statearr_31684[(13)] = inst_31533__$1);

(statearr_31684[(18)] = inst_31554);

(statearr_31684[(14)] = inst_31535__$1);

(statearr_31684[(16)] = inst_31532__$1);

(statearr_31684[(17)] = inst_31534__$1);

return statearr_31684;
})();
var statearr_31685_33525 = state_31662__$1;
(statearr_31685_33525[(2)] = null);

(statearr_31685_33525[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31663 === (21))){
var inst_31582 = (state_31662[(2)]);
var state_31662__$1 = state_31662;
var statearr_31689_33526 = state_31662__$1;
(statearr_31689_33526[(2)] = inst_31582);

(statearr_31689_33526[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31663 === (31))){
var inst_31608 = (state_31662[(12)]);
var inst_31612 = done(null);
var inst_31613 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31608);
var state_31662__$1 = (function (){var statearr_31690 = state_31662;
(statearr_31690[(19)] = inst_31612);

return statearr_31690;
})();
var statearr_31691_33527 = state_31662__$1;
(statearr_31691_33527[(2)] = inst_31613);

(statearr_31691_33527[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31663 === (32))){
var inst_31601 = (state_31662[(9)]);
var inst_31602 = (state_31662[(20)]);
var inst_31600 = (state_31662[(21)]);
var inst_31603 = (state_31662[(11)]);
var inst_31615 = (state_31662[(2)]);
var inst_31616 = (inst_31603 + (1));
var tmp31686 = inst_31601;
var tmp31687 = inst_31602;
var tmp31688 = inst_31600;
var inst_31600__$1 = tmp31688;
var inst_31601__$1 = tmp31686;
var inst_31602__$1 = tmp31687;
var inst_31603__$1 = inst_31616;
var state_31662__$1 = (function (){var statearr_31692 = state_31662;
(statearr_31692[(9)] = inst_31601__$1);

(statearr_31692[(22)] = inst_31615);

(statearr_31692[(20)] = inst_31602__$1);

(statearr_31692[(21)] = inst_31600__$1);

(statearr_31692[(11)] = inst_31603__$1);

return statearr_31692;
})();
var statearr_31693_33534 = state_31662__$1;
(statearr_31693_33534[(2)] = null);

(statearr_31693_33534[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31663 === (40))){
var inst_31630 = (state_31662[(23)]);
var inst_31634 = done(null);
var inst_31635 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31630);
var state_31662__$1 = (function (){var statearr_31694 = state_31662;
(statearr_31694[(24)] = inst_31634);

return statearr_31694;
})();
var statearr_31695_33535 = state_31662__$1;
(statearr_31695_33535[(2)] = inst_31635);

(statearr_31695_33535[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31663 === (33))){
var inst_31619 = (state_31662[(25)]);
var inst_31621 = cljs.core.chunked_seq_QMARK_(inst_31619);
var state_31662__$1 = state_31662;
if(inst_31621){
var statearr_31698_33536 = state_31662__$1;
(statearr_31698_33536[(1)] = (36));

} else {
var statearr_31699_33537 = state_31662__$1;
(statearr_31699_33537[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31663 === (13))){
var inst_31548 = (state_31662[(26)]);
var inst_31551 = cljs.core.async.close_BANG_(inst_31548);
var state_31662__$1 = state_31662;
var statearr_31700_33538 = state_31662__$1;
(statearr_31700_33538[(2)] = inst_31551);

(statearr_31700_33538[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31663 === (22))){
var inst_31572 = (state_31662[(8)]);
var inst_31575 = cljs.core.async.close_BANG_(inst_31572);
var state_31662__$1 = state_31662;
var statearr_31701_33539 = state_31662__$1;
(statearr_31701_33539[(2)] = inst_31575);

(statearr_31701_33539[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31663 === (36))){
var inst_31619 = (state_31662[(25)]);
var inst_31623 = cljs.core.chunk_first(inst_31619);
var inst_31624 = cljs.core.chunk_rest(inst_31619);
var inst_31625 = cljs.core.count(inst_31623);
var inst_31600 = inst_31624;
var inst_31601 = inst_31623;
var inst_31602 = inst_31625;
var inst_31603 = (0);
var state_31662__$1 = (function (){var statearr_31702 = state_31662;
(statearr_31702[(9)] = inst_31601);

(statearr_31702[(20)] = inst_31602);

(statearr_31702[(21)] = inst_31600);

(statearr_31702[(11)] = inst_31603);

return statearr_31702;
})();
var statearr_31706_33540 = state_31662__$1;
(statearr_31706_33540[(2)] = null);

(statearr_31706_33540[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31663 === (41))){
var inst_31619 = (state_31662[(25)]);
var inst_31637 = (state_31662[(2)]);
var inst_31638 = cljs.core.next(inst_31619);
var inst_31600 = inst_31638;
var inst_31601 = null;
var inst_31602 = (0);
var inst_31603 = (0);
var state_31662__$1 = (function (){var statearr_31708 = state_31662;
(statearr_31708[(9)] = inst_31601);

(statearr_31708[(20)] = inst_31602);

(statearr_31708[(21)] = inst_31600);

(statearr_31708[(27)] = inst_31637);

(statearr_31708[(11)] = inst_31603);

return statearr_31708;
})();
var statearr_31709_33541 = state_31662__$1;
(statearr_31709_33541[(2)] = null);

(statearr_31709_33541[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31663 === (43))){
var state_31662__$1 = state_31662;
var statearr_31710_33542 = state_31662__$1;
(statearr_31710_33542[(2)] = null);

(statearr_31710_33542[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31663 === (29))){
var inst_31646 = (state_31662[(2)]);
var state_31662__$1 = state_31662;
var statearr_31711_33543 = state_31662__$1;
(statearr_31711_33543[(2)] = inst_31646);

(statearr_31711_33543[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31663 === (44))){
var inst_31655 = (state_31662[(2)]);
var state_31662__$1 = (function (){var statearr_31713 = state_31662;
(statearr_31713[(28)] = inst_31655);

return statearr_31713;
})();
var statearr_31715_33544 = state_31662__$1;
(statearr_31715_33544[(2)] = null);

(statearr_31715_33544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31663 === (6))){
var inst_31592 = (state_31662[(29)]);
var inst_31591 = cljs.core.deref(cs);
var inst_31592__$1 = cljs.core.keys(inst_31591);
var inst_31593 = cljs.core.count(inst_31592__$1);
var inst_31594 = cljs.core.reset_BANG_(dctr,inst_31593);
var inst_31599 = cljs.core.seq(inst_31592__$1);
var inst_31600 = inst_31599;
var inst_31601 = null;
var inst_31602 = (0);
var inst_31603 = (0);
var state_31662__$1 = (function (){var statearr_31716 = state_31662;
(statearr_31716[(9)] = inst_31601);

(statearr_31716[(30)] = inst_31594);

(statearr_31716[(20)] = inst_31602);

(statearr_31716[(21)] = inst_31600);

(statearr_31716[(11)] = inst_31603);

(statearr_31716[(29)] = inst_31592__$1);

return statearr_31716;
})();
var statearr_31717_33545 = state_31662__$1;
(statearr_31717_33545[(2)] = null);

(statearr_31717_33545[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31663 === (28))){
var inst_31619 = (state_31662[(25)]);
var inst_31600 = (state_31662[(21)]);
var inst_31619__$1 = cljs.core.seq(inst_31600);
var state_31662__$1 = (function (){var statearr_31723 = state_31662;
(statearr_31723[(25)] = inst_31619__$1);

return statearr_31723;
})();
if(inst_31619__$1){
var statearr_31724_33547 = state_31662__$1;
(statearr_31724_33547[(1)] = (33));

} else {
var statearr_31725_33548 = state_31662__$1;
(statearr_31725_33548[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31663 === (25))){
var inst_31602 = (state_31662[(20)]);
var inst_31603 = (state_31662[(11)]);
var inst_31605 = (inst_31603 < inst_31602);
var inst_31606 = inst_31605;
var state_31662__$1 = state_31662;
if(cljs.core.truth_(inst_31606)){
var statearr_31726_33550 = state_31662__$1;
(statearr_31726_33550[(1)] = (27));

} else {
var statearr_31727_33551 = state_31662__$1;
(statearr_31727_33551[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31663 === (34))){
var state_31662__$1 = state_31662;
var statearr_31729_33552 = state_31662__$1;
(statearr_31729_33552[(2)] = null);

(statearr_31729_33552[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31663 === (17))){
var state_31662__$1 = state_31662;
var statearr_31731_33557 = state_31662__$1;
(statearr_31731_33557[(2)] = null);

(statearr_31731_33557[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31663 === (3))){
var inst_31660 = (state_31662[(2)]);
var state_31662__$1 = state_31662;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31662__$1,inst_31660);
} else {
if((state_val_31663 === (12))){
var inst_31587 = (state_31662[(2)]);
var state_31662__$1 = state_31662;
var statearr_31732_33558 = state_31662__$1;
(statearr_31732_33558[(2)] = inst_31587);

(statearr_31732_33558[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31663 === (2))){
var state_31662__$1 = state_31662;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31662__$1,(4),ch);
} else {
if((state_val_31663 === (23))){
var state_31662__$1 = state_31662;
var statearr_31737_33559 = state_31662__$1;
(statearr_31737_33559[(2)] = null);

(statearr_31737_33559[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31663 === (35))){
var inst_31644 = (state_31662[(2)]);
var state_31662__$1 = state_31662;
var statearr_31747_33560 = state_31662__$1;
(statearr_31747_33560[(2)] = inst_31644);

(statearr_31747_33560[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31663 === (19))){
var inst_31559 = (state_31662[(7)]);
var inst_31563 = cljs.core.chunk_first(inst_31559);
var inst_31564 = cljs.core.chunk_rest(inst_31559);
var inst_31565 = cljs.core.count(inst_31563);
var inst_31532 = inst_31564;
var inst_31533 = inst_31563;
var inst_31534 = inst_31565;
var inst_31535 = (0);
var state_31662__$1 = (function (){var statearr_31763 = state_31662;
(statearr_31763[(13)] = inst_31533);

(statearr_31763[(14)] = inst_31535);

(statearr_31763[(16)] = inst_31532);

(statearr_31763[(17)] = inst_31534);

return statearr_31763;
})();
var statearr_31764_33561 = state_31662__$1;
(statearr_31764_33561[(2)] = null);

(statearr_31764_33561[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31663 === (11))){
var inst_31532 = (state_31662[(16)]);
var inst_31559 = (state_31662[(7)]);
var inst_31559__$1 = cljs.core.seq(inst_31532);
var state_31662__$1 = (function (){var statearr_31765 = state_31662;
(statearr_31765[(7)] = inst_31559__$1);

return statearr_31765;
})();
if(inst_31559__$1){
var statearr_31766_33562 = state_31662__$1;
(statearr_31766_33562[(1)] = (16));

} else {
var statearr_31767_33563 = state_31662__$1;
(statearr_31767_33563[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31663 === (9))){
var inst_31589 = (state_31662[(2)]);
var state_31662__$1 = state_31662;
var statearr_31768_33564 = state_31662__$1;
(statearr_31768_33564[(2)] = inst_31589);

(statearr_31768_33564[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31663 === (5))){
var inst_31530 = cljs.core.deref(cs);
var inst_31531 = cljs.core.seq(inst_31530);
var inst_31532 = inst_31531;
var inst_31533 = null;
var inst_31534 = (0);
var inst_31535 = (0);
var state_31662__$1 = (function (){var statearr_31770 = state_31662;
(statearr_31770[(13)] = inst_31533);

(statearr_31770[(14)] = inst_31535);

(statearr_31770[(16)] = inst_31532);

(statearr_31770[(17)] = inst_31534);

return statearr_31770;
})();
var statearr_31771_33567 = state_31662__$1;
(statearr_31771_33567[(2)] = null);

(statearr_31771_33567[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31663 === (14))){
var state_31662__$1 = state_31662;
var statearr_31777_33569 = state_31662__$1;
(statearr_31777_33569[(2)] = null);

(statearr_31777_33569[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31663 === (45))){
var inst_31652 = (state_31662[(2)]);
var state_31662__$1 = state_31662;
var statearr_31778_33571 = state_31662__$1;
(statearr_31778_33571[(2)] = inst_31652);

(statearr_31778_33571[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31663 === (26))){
var inst_31592 = (state_31662[(29)]);
var inst_31648 = (state_31662[(2)]);
var inst_31649 = cljs.core.seq(inst_31592);
var state_31662__$1 = (function (){var statearr_31779 = state_31662;
(statearr_31779[(31)] = inst_31648);

return statearr_31779;
})();
if(inst_31649){
var statearr_31780_33572 = state_31662__$1;
(statearr_31780_33572[(1)] = (42));

} else {
var statearr_31781_33573 = state_31662__$1;
(statearr_31781_33573[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31663 === (16))){
var inst_31559 = (state_31662[(7)]);
var inst_31561 = cljs.core.chunked_seq_QMARK_(inst_31559);
var state_31662__$1 = state_31662;
if(inst_31561){
var statearr_31783_33574 = state_31662__$1;
(statearr_31783_33574[(1)] = (19));

} else {
var statearr_31784_33575 = state_31662__$1;
(statearr_31784_33575[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31663 === (38))){
var inst_31641 = (state_31662[(2)]);
var state_31662__$1 = state_31662;
var statearr_31787_33576 = state_31662__$1;
(statearr_31787_33576[(2)] = inst_31641);

(statearr_31787_33576[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31663 === (30))){
var state_31662__$1 = state_31662;
var statearr_31789_33578 = state_31662__$1;
(statearr_31789_33578[(2)] = null);

(statearr_31789_33578[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31663 === (10))){
var inst_31533 = (state_31662[(13)]);
var inst_31535 = (state_31662[(14)]);
var inst_31547 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_31533,inst_31535);
var inst_31548 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31547,(0),null);
var inst_31549 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31547,(1),null);
var state_31662__$1 = (function (){var statearr_31792 = state_31662;
(statearr_31792[(26)] = inst_31548);

return statearr_31792;
})();
if(cljs.core.truth_(inst_31549)){
var statearr_31793_33580 = state_31662__$1;
(statearr_31793_33580[(1)] = (13));

} else {
var statearr_31794_33581 = state_31662__$1;
(statearr_31794_33581[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31663 === (18))){
var inst_31585 = (state_31662[(2)]);
var state_31662__$1 = state_31662;
var statearr_31795_33582 = state_31662__$1;
(statearr_31795_33582[(2)] = inst_31585);

(statearr_31795_33582[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31663 === (42))){
var state_31662__$1 = state_31662;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31662__$1,(45),dchan);
} else {
if((state_val_31663 === (37))){
var inst_31619 = (state_31662[(25)]);
var inst_31519 = (state_31662[(10)]);
var inst_31630 = (state_31662[(23)]);
var inst_31630__$1 = cljs.core.first(inst_31619);
var inst_31631 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31630__$1,inst_31519,done);
var state_31662__$1 = (function (){var statearr_31797 = state_31662;
(statearr_31797[(23)] = inst_31630__$1);

return statearr_31797;
})();
if(cljs.core.truth_(inst_31631)){
var statearr_31799_33583 = state_31662__$1;
(statearr_31799_33583[(1)] = (39));

} else {
var statearr_31801_33584 = state_31662__$1;
(statearr_31801_33584[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31663 === (8))){
var inst_31535 = (state_31662[(14)]);
var inst_31534 = (state_31662[(17)]);
var inst_31537 = (inst_31535 < inst_31534);
var inst_31538 = inst_31537;
var state_31662__$1 = state_31662;
if(cljs.core.truth_(inst_31538)){
var statearr_31803_33585 = state_31662__$1;
(statearr_31803_33585[(1)] = (10));

} else {
var statearr_31805_33586 = state_31662__$1;
(statearr_31805_33586[(1)] = (11));

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
});})(c__30662__auto___33508,cs,m,dchan,dctr,done))
;
return ((function (switch__30351__auto__,c__30662__auto___33508,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__30352__auto__ = null;
var cljs$core$async$mult_$_state_machine__30352__auto____0 = (function (){
var statearr_31807 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31807[(0)] = cljs$core$async$mult_$_state_machine__30352__auto__);

(statearr_31807[(1)] = (1));

return statearr_31807;
});
var cljs$core$async$mult_$_state_machine__30352__auto____1 = (function (state_31662){
while(true){
var ret_value__30353__auto__ = (function (){try{while(true){
var result__30354__auto__ = switch__30351__auto__(state_31662);
if(cljs.core.keyword_identical_QMARK_(result__30354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30354__auto__;
}
break;
}
}catch (e31808){if((e31808 instanceof Object)){
var ex__30355__auto__ = e31808;
var statearr_31809_33588 = state_31662;
(statearr_31809_33588[(5)] = ex__30355__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31662);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31808;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33590 = state_31662;
state_31662 = G__33590;
continue;
} else {
return ret_value__30353__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30352__auto__ = function(state_31662){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30352__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30352__auto____1.call(this,state_31662);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__30352__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30352__auto____0;
cljs$core$async$mult_$_state_machine__30352__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30352__auto____1;
return cljs$core$async$mult_$_state_machine__30352__auto__;
})()
;})(switch__30351__auto__,c__30662__auto___33508,cs,m,dchan,dctr,done))
})();
var state__30664__auto__ = (function (){var statearr_31811 = (f__30663__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30663__auto__.cljs$core$IFn$_invoke$arity$0() : f__30663__auto__.call(null));
(statearr_31811[(6)] = c__30662__auto___33508);

return statearr_31811;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30664__auto__);
});})(c__30662__auto___33508,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__31818 = arguments.length;
switch (G__31818) {
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

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

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
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
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
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
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
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
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
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4434__auto__.call(null,m,state_map));
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4431__auto__.call(null,m,state_map));
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
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4434__auto__.call(null,m,mode));
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4431__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___33597 = arguments.length;
var i__4731__auto___33598 = (0);
while(true){
if((i__4731__auto___33598 < len__4730__auto___33597)){
args__4736__auto__.push((arguments[i__4731__auto___33598]));

var G__33599 = (i__4731__auto___33598 + (1));
i__4731__auto___33598 = G__33599;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31849){
var map__31850 = p__31849;
var map__31850__$1 = (((((!((map__31850 == null))))?(((((map__31850.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31850.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31850):map__31850);
var opts = map__31850__$1;
var statearr_31855_33600 = state;
(statearr_31855_33600[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts(((function (map__31850,map__31850__$1,opts){
return (function (val){
var statearr_31856_33601 = state;
(statearr_31856_33601[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__31850,map__31850__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_31857_33602 = state;
(statearr_31857_33602[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31839){
var G__31840 = cljs.core.first(seq31839);
var seq31839__$1 = cljs.core.next(seq31839);
var G__31841 = cljs.core.first(seq31839__$1);
var seq31839__$2 = cljs.core.next(seq31839__$1);
var G__31842 = cljs.core.first(seq31839__$2);
var seq31839__$3 = cljs.core.next(seq31839__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31840,G__31841,G__31842,seq31839__$3);
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
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31861 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31861 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31862){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31862 = meta31862;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31861.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31863,meta31862__$1){
var self__ = this;
var _31863__$1 = this;
return (new cljs.core.async.t_cljs$core$async31861(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31862__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31861.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31863){
var self__ = this;
var _31863__$1 = this;
return self__.meta31862;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31861.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31861.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31861.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31861.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31861.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31861.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31861.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31861.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31861.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31862","meta31862",-1571100628,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31861.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31861.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31861";

cljs.core.async.t_cljs$core$async31861.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async31861");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31861.
 */
cljs.core.async.__GT_t_cljs$core$async31861 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async31861(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31862){
return (new cljs.core.async.t_cljs$core$async31861(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31862));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async31861(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30662__auto___33633 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30662__auto___33633,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__30663__auto__ = (function (){var switch__30351__auto__ = ((function (c__30662__auto___33633,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_31998){
var state_val_31999 = (state_31998[(1)]);
if((state_val_31999 === (7))){
var inst_31910 = (state_31998[(2)]);
var state_31998__$1 = state_31998;
var statearr_32000_33636 = state_31998__$1;
(statearr_32000_33636[(2)] = inst_31910);

(statearr_32000_33636[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31999 === (20))){
var inst_31922 = (state_31998[(7)]);
var state_31998__$1 = state_31998;
var statearr_32001_33637 = state_31998__$1;
(statearr_32001_33637[(2)] = inst_31922);

(statearr_32001_33637[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31999 === (27))){
var state_31998__$1 = state_31998;
var statearr_32002_33638 = state_31998__$1;
(statearr_32002_33638[(2)] = null);

(statearr_32002_33638[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31999 === (1))){
var inst_31893 = (state_31998[(8)]);
var inst_31893__$1 = calc_state();
var inst_31895 = (inst_31893__$1 == null);
var inst_31896 = cljs.core.not(inst_31895);
var state_31998__$1 = (function (){var statearr_32003 = state_31998;
(statearr_32003[(8)] = inst_31893__$1);

return statearr_32003;
})();
if(inst_31896){
var statearr_32004_33639 = state_31998__$1;
(statearr_32004_33639[(1)] = (2));

} else {
var statearr_32005_33640 = state_31998__$1;
(statearr_32005_33640[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31999 === (24))){
var inst_31955 = (state_31998[(9)]);
var inst_31969 = (state_31998[(10)]);
var inst_31946 = (state_31998[(11)]);
var inst_31969__$1 = (inst_31946.cljs$core$IFn$_invoke$arity$1 ? inst_31946.cljs$core$IFn$_invoke$arity$1(inst_31955) : inst_31946.call(null,inst_31955));
var state_31998__$1 = (function (){var statearr_32007 = state_31998;
(statearr_32007[(10)] = inst_31969__$1);

return statearr_32007;
})();
if(cljs.core.truth_(inst_31969__$1)){
var statearr_32008_33641 = state_31998__$1;
(statearr_32008_33641[(1)] = (29));

} else {
var statearr_32009_33642 = state_31998__$1;
(statearr_32009_33642[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31999 === (4))){
var inst_31913 = (state_31998[(2)]);
var state_31998__$1 = state_31998;
if(cljs.core.truth_(inst_31913)){
var statearr_32010_33643 = state_31998__$1;
(statearr_32010_33643[(1)] = (8));

} else {
var statearr_32011_33644 = state_31998__$1;
(statearr_32011_33644[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31999 === (15))){
var inst_31940 = (state_31998[(2)]);
var state_31998__$1 = state_31998;
if(cljs.core.truth_(inst_31940)){
var statearr_32012_33645 = state_31998__$1;
(statearr_32012_33645[(1)] = (19));

} else {
var statearr_32013_33646 = state_31998__$1;
(statearr_32013_33646[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31999 === (21))){
var inst_31945 = (state_31998[(12)]);
var inst_31945__$1 = (state_31998[(2)]);
var inst_31946 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31945__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31947 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31945__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31948 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31945__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31998__$1 = (function (){var statearr_32014 = state_31998;
(statearr_32014[(12)] = inst_31945__$1);

(statearr_32014[(13)] = inst_31947);

(statearr_32014[(11)] = inst_31946);

return statearr_32014;
})();
return cljs.core.async.ioc_alts_BANG_(state_31998__$1,(22),inst_31948);
} else {
if((state_val_31999 === (31))){
var inst_31977 = (state_31998[(2)]);
var state_31998__$1 = state_31998;
if(cljs.core.truth_(inst_31977)){
var statearr_32015_33651 = state_31998__$1;
(statearr_32015_33651[(1)] = (32));

} else {
var statearr_32016_33652 = state_31998__$1;
(statearr_32016_33652[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31999 === (32))){
var inst_31954 = (state_31998[(14)]);
var state_31998__$1 = state_31998;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31998__$1,(35),out,inst_31954);
} else {
if((state_val_31999 === (33))){
var inst_31945 = (state_31998[(12)]);
var inst_31922 = inst_31945;
var state_31998__$1 = (function (){var statearr_32021 = state_31998;
(statearr_32021[(7)] = inst_31922);

return statearr_32021;
})();
var statearr_32026_33653 = state_31998__$1;
(statearr_32026_33653[(2)] = null);

(statearr_32026_33653[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31999 === (13))){
var inst_31922 = (state_31998[(7)]);
var inst_31929 = inst_31922.cljs$lang$protocol_mask$partition0$;
var inst_31930 = (inst_31929 & (64));
var inst_31931 = inst_31922.cljs$core$ISeq$;
var inst_31932 = (cljs.core.PROTOCOL_SENTINEL === inst_31931);
var inst_31933 = ((inst_31930) || (inst_31932));
var state_31998__$1 = state_31998;
if(cljs.core.truth_(inst_31933)){
var statearr_32031_33654 = state_31998__$1;
(statearr_32031_33654[(1)] = (16));

} else {
var statearr_32032_33655 = state_31998__$1;
(statearr_32032_33655[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31999 === (22))){
var inst_31954 = (state_31998[(14)]);
var inst_31955 = (state_31998[(9)]);
var inst_31953 = (state_31998[(2)]);
var inst_31954__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31953,(0),null);
var inst_31955__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31953,(1),null);
var inst_31956 = (inst_31954__$1 == null);
var inst_31957 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31955__$1,change);
var inst_31958 = ((inst_31956) || (inst_31957));
var state_31998__$1 = (function (){var statearr_32038 = state_31998;
(statearr_32038[(14)] = inst_31954__$1);

(statearr_32038[(9)] = inst_31955__$1);

return statearr_32038;
})();
if(cljs.core.truth_(inst_31958)){
var statearr_32039_33661 = state_31998__$1;
(statearr_32039_33661[(1)] = (23));

} else {
var statearr_32040_33662 = state_31998__$1;
(statearr_32040_33662[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31999 === (36))){
var inst_31945 = (state_31998[(12)]);
var inst_31922 = inst_31945;
var state_31998__$1 = (function (){var statearr_32046 = state_31998;
(statearr_32046[(7)] = inst_31922);

return statearr_32046;
})();
var statearr_32049_33663 = state_31998__$1;
(statearr_32049_33663[(2)] = null);

(statearr_32049_33663[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31999 === (29))){
var inst_31969 = (state_31998[(10)]);
var state_31998__$1 = state_31998;
var statearr_32051_33664 = state_31998__$1;
(statearr_32051_33664[(2)] = inst_31969);

(statearr_32051_33664[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31999 === (6))){
var state_31998__$1 = state_31998;
var statearr_32052_33665 = state_31998__$1;
(statearr_32052_33665[(2)] = false);

(statearr_32052_33665[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31999 === (28))){
var inst_31965 = (state_31998[(2)]);
var inst_31966 = calc_state();
var inst_31922 = inst_31966;
var state_31998__$1 = (function (){var statearr_32055 = state_31998;
(statearr_32055[(15)] = inst_31965);

(statearr_32055[(7)] = inst_31922);

return statearr_32055;
})();
var statearr_32057_33667 = state_31998__$1;
(statearr_32057_33667[(2)] = null);

(statearr_32057_33667[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31999 === (25))){
var inst_31994 = (state_31998[(2)]);
var state_31998__$1 = state_31998;
var statearr_32062_33668 = state_31998__$1;
(statearr_32062_33668[(2)] = inst_31994);

(statearr_32062_33668[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31999 === (34))){
var inst_31992 = (state_31998[(2)]);
var state_31998__$1 = state_31998;
var statearr_32063_33669 = state_31998__$1;
(statearr_32063_33669[(2)] = inst_31992);

(statearr_32063_33669[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31999 === (17))){
var state_31998__$1 = state_31998;
var statearr_32064_33670 = state_31998__$1;
(statearr_32064_33670[(2)] = false);

(statearr_32064_33670[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31999 === (3))){
var state_31998__$1 = state_31998;
var statearr_32067_33672 = state_31998__$1;
(statearr_32067_33672[(2)] = false);

(statearr_32067_33672[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31999 === (12))){
var inst_31996 = (state_31998[(2)]);
var state_31998__$1 = state_31998;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31998__$1,inst_31996);
} else {
if((state_val_31999 === (2))){
var inst_31893 = (state_31998[(8)]);
var inst_31902 = inst_31893.cljs$lang$protocol_mask$partition0$;
var inst_31903 = (inst_31902 & (64));
var inst_31904 = inst_31893.cljs$core$ISeq$;
var inst_31905 = (cljs.core.PROTOCOL_SENTINEL === inst_31904);
var inst_31906 = ((inst_31903) || (inst_31905));
var state_31998__$1 = state_31998;
if(cljs.core.truth_(inst_31906)){
var statearr_32069_33676 = state_31998__$1;
(statearr_32069_33676[(1)] = (5));

} else {
var statearr_32070_33677 = state_31998__$1;
(statearr_32070_33677[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31999 === (23))){
var inst_31954 = (state_31998[(14)]);
var inst_31960 = (inst_31954 == null);
var state_31998__$1 = state_31998;
if(cljs.core.truth_(inst_31960)){
var statearr_32071_33678 = state_31998__$1;
(statearr_32071_33678[(1)] = (26));

} else {
var statearr_32074_33679 = state_31998__$1;
(statearr_32074_33679[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31999 === (35))){
var inst_31983 = (state_31998[(2)]);
var state_31998__$1 = state_31998;
if(cljs.core.truth_(inst_31983)){
var statearr_32078_33680 = state_31998__$1;
(statearr_32078_33680[(1)] = (36));

} else {
var statearr_32079_33681 = state_31998__$1;
(statearr_32079_33681[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31999 === (19))){
var inst_31922 = (state_31998[(7)]);
var inst_31942 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31922);
var state_31998__$1 = state_31998;
var statearr_32080_33682 = state_31998__$1;
(statearr_32080_33682[(2)] = inst_31942);

(statearr_32080_33682[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31999 === (11))){
var inst_31922 = (state_31998[(7)]);
var inst_31926 = (inst_31922 == null);
var inst_31927 = cljs.core.not(inst_31926);
var state_31998__$1 = state_31998;
if(inst_31927){
var statearr_32083_33683 = state_31998__$1;
(statearr_32083_33683[(1)] = (13));

} else {
var statearr_32085_33684 = state_31998__$1;
(statearr_32085_33684[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31999 === (9))){
var inst_31893 = (state_31998[(8)]);
var state_31998__$1 = state_31998;
var statearr_32086_33685 = state_31998__$1;
(statearr_32086_33685[(2)] = inst_31893);

(statearr_32086_33685[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31999 === (5))){
var state_31998__$1 = state_31998;
var statearr_32087_33686 = state_31998__$1;
(statearr_32087_33686[(2)] = true);

(statearr_32087_33686[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31999 === (14))){
var state_31998__$1 = state_31998;
var statearr_32088_33688 = state_31998__$1;
(statearr_32088_33688[(2)] = false);

(statearr_32088_33688[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31999 === (26))){
var inst_31955 = (state_31998[(9)]);
var inst_31962 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_31955);
var state_31998__$1 = state_31998;
var statearr_32092_33689 = state_31998__$1;
(statearr_32092_33689[(2)] = inst_31962);

(statearr_32092_33689[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31999 === (16))){
var state_31998__$1 = state_31998;
var statearr_32093_33690 = state_31998__$1;
(statearr_32093_33690[(2)] = true);

(statearr_32093_33690[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31999 === (38))){
var inst_31988 = (state_31998[(2)]);
var state_31998__$1 = state_31998;
var statearr_32097_33691 = state_31998__$1;
(statearr_32097_33691[(2)] = inst_31988);

(statearr_32097_33691[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31999 === (30))){
var inst_31955 = (state_31998[(9)]);
var inst_31947 = (state_31998[(13)]);
var inst_31946 = (state_31998[(11)]);
var inst_31972 = cljs.core.empty_QMARK_(inst_31946);
var inst_31973 = (inst_31947.cljs$core$IFn$_invoke$arity$1 ? inst_31947.cljs$core$IFn$_invoke$arity$1(inst_31955) : inst_31947.call(null,inst_31955));
var inst_31974 = cljs.core.not(inst_31973);
var inst_31975 = ((inst_31972) && (inst_31974));
var state_31998__$1 = state_31998;
var statearr_32098_33692 = state_31998__$1;
(statearr_32098_33692[(2)] = inst_31975);

(statearr_32098_33692[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31999 === (10))){
var inst_31893 = (state_31998[(8)]);
var inst_31918 = (state_31998[(2)]);
var inst_31919 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31918,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31920 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31918,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31921 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31918,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31922 = inst_31893;
var state_31998__$1 = (function (){var statearr_32099 = state_31998;
(statearr_32099[(16)] = inst_31921);

(statearr_32099[(7)] = inst_31922);

(statearr_32099[(17)] = inst_31920);

(statearr_32099[(18)] = inst_31919);

return statearr_32099;
})();
var statearr_32100_33696 = state_31998__$1;
(statearr_32100_33696[(2)] = null);

(statearr_32100_33696[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31999 === (18))){
var inst_31937 = (state_31998[(2)]);
var state_31998__$1 = state_31998;
var statearr_32101_33699 = state_31998__$1;
(statearr_32101_33699[(2)] = inst_31937);

(statearr_32101_33699[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31999 === (37))){
var state_31998__$1 = state_31998;
var statearr_32102_33702 = state_31998__$1;
(statearr_32102_33702[(2)] = null);

(statearr_32102_33702[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31999 === (8))){
var inst_31893 = (state_31998[(8)]);
var inst_31915 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31893);
var state_31998__$1 = state_31998;
var statearr_32103_33703 = state_31998__$1;
(statearr_32103_33703[(2)] = inst_31915);

(statearr_32103_33703[(1)] = (10));


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
});})(c__30662__auto___33633,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__30351__auto__,c__30662__auto___33633,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__30352__auto__ = null;
var cljs$core$async$mix_$_state_machine__30352__auto____0 = (function (){
var statearr_32104 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32104[(0)] = cljs$core$async$mix_$_state_machine__30352__auto__);

(statearr_32104[(1)] = (1));

return statearr_32104;
});
var cljs$core$async$mix_$_state_machine__30352__auto____1 = (function (state_31998){
while(true){
var ret_value__30353__auto__ = (function (){try{while(true){
var result__30354__auto__ = switch__30351__auto__(state_31998);
if(cljs.core.keyword_identical_QMARK_(result__30354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30354__auto__;
}
break;
}
}catch (e32108){if((e32108 instanceof Object)){
var ex__30355__auto__ = e32108;
var statearr_32109_33704 = state_31998;
(statearr_32109_33704[(5)] = ex__30355__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31998);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32108;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33705 = state_31998;
state_31998 = G__33705;
continue;
} else {
return ret_value__30353__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30352__auto__ = function(state_31998){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30352__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30352__auto____1.call(this,state_31998);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__30352__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30352__auto____0;
cljs$core$async$mix_$_state_machine__30352__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30352__auto____1;
return cljs$core$async$mix_$_state_machine__30352__auto__;
})()
;})(switch__30351__auto__,c__30662__auto___33633,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__30664__auto__ = (function (){var statearr_32113 = (f__30663__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30663__auto__.cljs$core$IFn$_invoke$arity$0() : f__30663__auto__.call(null));
(statearr_32113[(6)] = c__30662__auto___33633);

return statearr_32113;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30664__auto__);
});})(c__30662__auto___33633,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


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
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4434__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4431__auto__.call(null,p,v,ch,close_QMARK_));
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
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4434__auto__.call(null,p,v,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4431__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__32122 = arguments.length;
switch (G__32122) {
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

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4434__auto__.call(null,p));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4431__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4434__auto__.call(null,p,v));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4431__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


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
var G__32131 = arguments.length;
switch (G__32131) {
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

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__4131__auto__,mults){
return (function (p1__32129_SHARP_){
if(cljs.core.truth_((p1__32129_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__32129_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__32129_SHARP_.call(null,topic)))){
return p1__32129_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__32129_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32132 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32132 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32133){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32133 = meta32133;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32132.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_32134,meta32133__$1){
var self__ = this;
var _32134__$1 = this;
return (new cljs.core.async.t_cljs$core$async32132(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32133__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32132.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_32134){
var self__ = this;
var _32134__$1 = this;
return self__.meta32133;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32132.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32132.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32132.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32132.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32132.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32132.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32132.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32132.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32133","meta32133",-1822451578,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32132.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32132.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32132";

cljs.core.async.t_cljs$core$async32132.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async32132");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32132.
 */
cljs.core.async.__GT_t_cljs$core$async32132 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async32132(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32133){
return (new cljs.core.async.t_cljs$core$async32132(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32133));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async32132(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30662__auto___33730 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30662__auto___33730,mults,ensure_mult,p){
return (function (){
var f__30663__auto__ = (function (){var switch__30351__auto__ = ((function (c__30662__auto___33730,mults,ensure_mult,p){
return (function (state_32206){
var state_val_32207 = (state_32206[(1)]);
if((state_val_32207 === (7))){
var inst_32202 = (state_32206[(2)]);
var state_32206__$1 = state_32206;
var statearr_32211_33731 = state_32206__$1;
(statearr_32211_33731[(2)] = inst_32202);

(statearr_32211_33731[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32207 === (20))){
var state_32206__$1 = state_32206;
var statearr_32212_33732 = state_32206__$1;
(statearr_32212_33732[(2)] = null);

(statearr_32212_33732[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32207 === (1))){
var state_32206__$1 = state_32206;
var statearr_32213_33733 = state_32206__$1;
(statearr_32213_33733[(2)] = null);

(statearr_32213_33733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32207 === (24))){
var inst_32185 = (state_32206[(7)]);
var inst_32194 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_32185);
var state_32206__$1 = state_32206;
var statearr_32214_33734 = state_32206__$1;
(statearr_32214_33734[(2)] = inst_32194);

(statearr_32214_33734[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32207 === (4))){
var inst_32137 = (state_32206[(8)]);
var inst_32137__$1 = (state_32206[(2)]);
var inst_32138 = (inst_32137__$1 == null);
var state_32206__$1 = (function (){var statearr_32216 = state_32206;
(statearr_32216[(8)] = inst_32137__$1);

return statearr_32216;
})();
if(cljs.core.truth_(inst_32138)){
var statearr_32217_33735 = state_32206__$1;
(statearr_32217_33735[(1)] = (5));

} else {
var statearr_32218_33736 = state_32206__$1;
(statearr_32218_33736[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32207 === (15))){
var inst_32179 = (state_32206[(2)]);
var state_32206__$1 = state_32206;
var statearr_32219_33737 = state_32206__$1;
(statearr_32219_33737[(2)] = inst_32179);

(statearr_32219_33737[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32207 === (21))){
var inst_32199 = (state_32206[(2)]);
var state_32206__$1 = (function (){var statearr_32220 = state_32206;
(statearr_32220[(9)] = inst_32199);

return statearr_32220;
})();
var statearr_32221_33738 = state_32206__$1;
(statearr_32221_33738[(2)] = null);

(statearr_32221_33738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32207 === (13))){
var inst_32161 = (state_32206[(10)]);
var inst_32163 = cljs.core.chunked_seq_QMARK_(inst_32161);
var state_32206__$1 = state_32206;
if(inst_32163){
var statearr_32222_33739 = state_32206__$1;
(statearr_32222_33739[(1)] = (16));

} else {
var statearr_32223_33740 = state_32206__$1;
(statearr_32223_33740[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32207 === (22))){
var inst_32191 = (state_32206[(2)]);
var state_32206__$1 = state_32206;
if(cljs.core.truth_(inst_32191)){
var statearr_32224_33742 = state_32206__$1;
(statearr_32224_33742[(1)] = (23));

} else {
var statearr_32225_33743 = state_32206__$1;
(statearr_32225_33743[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32207 === (6))){
var inst_32137 = (state_32206[(8)]);
var inst_32187 = (state_32206[(11)]);
var inst_32185 = (state_32206[(7)]);
var inst_32185__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_32137) : topic_fn.call(null,inst_32137));
var inst_32186 = cljs.core.deref(mults);
var inst_32187__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32186,inst_32185__$1);
var state_32206__$1 = (function (){var statearr_32227 = state_32206;
(statearr_32227[(11)] = inst_32187__$1);

(statearr_32227[(7)] = inst_32185__$1);

return statearr_32227;
})();
if(cljs.core.truth_(inst_32187__$1)){
var statearr_32228_33744 = state_32206__$1;
(statearr_32228_33744[(1)] = (19));

} else {
var statearr_32229_33745 = state_32206__$1;
(statearr_32229_33745[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32207 === (25))){
var inst_32196 = (state_32206[(2)]);
var state_32206__$1 = state_32206;
var statearr_32231_33746 = state_32206__$1;
(statearr_32231_33746[(2)] = inst_32196);

(statearr_32231_33746[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32207 === (17))){
var inst_32161 = (state_32206[(10)]);
var inst_32170 = cljs.core.first(inst_32161);
var inst_32171 = cljs.core.async.muxch_STAR_(inst_32170);
var inst_32172 = cljs.core.async.close_BANG_(inst_32171);
var inst_32173 = cljs.core.next(inst_32161);
var inst_32147 = inst_32173;
var inst_32148 = null;
var inst_32149 = (0);
var inst_32150 = (0);
var state_32206__$1 = (function (){var statearr_32232 = state_32206;
(statearr_32232[(12)] = inst_32149);

(statearr_32232[(13)] = inst_32147);

(statearr_32232[(14)] = inst_32148);

(statearr_32232[(15)] = inst_32150);

(statearr_32232[(16)] = inst_32172);

return statearr_32232;
})();
var statearr_32234_33748 = state_32206__$1;
(statearr_32234_33748[(2)] = null);

(statearr_32234_33748[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32207 === (3))){
var inst_32204 = (state_32206[(2)]);
var state_32206__$1 = state_32206;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32206__$1,inst_32204);
} else {
if((state_val_32207 === (12))){
var inst_32181 = (state_32206[(2)]);
var state_32206__$1 = state_32206;
var statearr_32235_33749 = state_32206__$1;
(statearr_32235_33749[(2)] = inst_32181);

(statearr_32235_33749[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32207 === (2))){
var state_32206__$1 = state_32206;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32206__$1,(4),ch);
} else {
if((state_val_32207 === (23))){
var state_32206__$1 = state_32206;
var statearr_32236_33750 = state_32206__$1;
(statearr_32236_33750[(2)] = null);

(statearr_32236_33750[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32207 === (19))){
var inst_32137 = (state_32206[(8)]);
var inst_32187 = (state_32206[(11)]);
var inst_32189 = cljs.core.async.muxch_STAR_(inst_32187);
var state_32206__$1 = state_32206;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32206__$1,(22),inst_32189,inst_32137);
} else {
if((state_val_32207 === (11))){
var inst_32161 = (state_32206[(10)]);
var inst_32147 = (state_32206[(13)]);
var inst_32161__$1 = cljs.core.seq(inst_32147);
var state_32206__$1 = (function (){var statearr_32237 = state_32206;
(statearr_32237[(10)] = inst_32161__$1);

return statearr_32237;
})();
if(inst_32161__$1){
var statearr_32238_33751 = state_32206__$1;
(statearr_32238_33751[(1)] = (13));

} else {
var statearr_32239_33752 = state_32206__$1;
(statearr_32239_33752[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32207 === (9))){
var inst_32183 = (state_32206[(2)]);
var state_32206__$1 = state_32206;
var statearr_32241_33753 = state_32206__$1;
(statearr_32241_33753[(2)] = inst_32183);

(statearr_32241_33753[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32207 === (5))){
var inst_32144 = cljs.core.deref(mults);
var inst_32145 = cljs.core.vals(inst_32144);
var inst_32146 = cljs.core.seq(inst_32145);
var inst_32147 = inst_32146;
var inst_32148 = null;
var inst_32149 = (0);
var inst_32150 = (0);
var state_32206__$1 = (function (){var statearr_32243 = state_32206;
(statearr_32243[(12)] = inst_32149);

(statearr_32243[(13)] = inst_32147);

(statearr_32243[(14)] = inst_32148);

(statearr_32243[(15)] = inst_32150);

return statearr_32243;
})();
var statearr_32244_33754 = state_32206__$1;
(statearr_32244_33754[(2)] = null);

(statearr_32244_33754[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32207 === (14))){
var state_32206__$1 = state_32206;
var statearr_32249_33756 = state_32206__$1;
(statearr_32249_33756[(2)] = null);

(statearr_32249_33756[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32207 === (16))){
var inst_32161 = (state_32206[(10)]);
var inst_32165 = cljs.core.chunk_first(inst_32161);
var inst_32166 = cljs.core.chunk_rest(inst_32161);
var inst_32167 = cljs.core.count(inst_32165);
var inst_32147 = inst_32166;
var inst_32148 = inst_32165;
var inst_32149 = inst_32167;
var inst_32150 = (0);
var state_32206__$1 = (function (){var statearr_32250 = state_32206;
(statearr_32250[(12)] = inst_32149);

(statearr_32250[(13)] = inst_32147);

(statearr_32250[(14)] = inst_32148);

(statearr_32250[(15)] = inst_32150);

return statearr_32250;
})();
var statearr_32252_33761 = state_32206__$1;
(statearr_32252_33761[(2)] = null);

(statearr_32252_33761[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32207 === (10))){
var inst_32149 = (state_32206[(12)]);
var inst_32147 = (state_32206[(13)]);
var inst_32148 = (state_32206[(14)]);
var inst_32150 = (state_32206[(15)]);
var inst_32155 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_32148,inst_32150);
var inst_32156 = cljs.core.async.muxch_STAR_(inst_32155);
var inst_32157 = cljs.core.async.close_BANG_(inst_32156);
var inst_32158 = (inst_32150 + (1));
var tmp32245 = inst_32149;
var tmp32246 = inst_32147;
var tmp32247 = inst_32148;
var inst_32147__$1 = tmp32246;
var inst_32148__$1 = tmp32247;
var inst_32149__$1 = tmp32245;
var inst_32150__$1 = inst_32158;
var state_32206__$1 = (function (){var statearr_32254 = state_32206;
(statearr_32254[(12)] = inst_32149__$1);

(statearr_32254[(17)] = inst_32157);

(statearr_32254[(13)] = inst_32147__$1);

(statearr_32254[(14)] = inst_32148__$1);

(statearr_32254[(15)] = inst_32150__$1);

return statearr_32254;
})();
var statearr_32255_33767 = state_32206__$1;
(statearr_32255_33767[(2)] = null);

(statearr_32255_33767[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32207 === (18))){
var inst_32176 = (state_32206[(2)]);
var state_32206__$1 = state_32206;
var statearr_32256_33768 = state_32206__$1;
(statearr_32256_33768[(2)] = inst_32176);

(statearr_32256_33768[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32207 === (8))){
var inst_32149 = (state_32206[(12)]);
var inst_32150 = (state_32206[(15)]);
var inst_32152 = (inst_32150 < inst_32149);
var inst_32153 = inst_32152;
var state_32206__$1 = state_32206;
if(cljs.core.truth_(inst_32153)){
var statearr_32257_33769 = state_32206__$1;
(statearr_32257_33769[(1)] = (10));

} else {
var statearr_32261_33770 = state_32206__$1;
(statearr_32261_33770[(1)] = (11));

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
});})(c__30662__auto___33730,mults,ensure_mult,p))
;
return ((function (switch__30351__auto__,c__30662__auto___33730,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__30352__auto__ = null;
var cljs$core$async$state_machine__30352__auto____0 = (function (){
var statearr_32265 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32265[(0)] = cljs$core$async$state_machine__30352__auto__);

(statearr_32265[(1)] = (1));

return statearr_32265;
});
var cljs$core$async$state_machine__30352__auto____1 = (function (state_32206){
while(true){
var ret_value__30353__auto__ = (function (){try{while(true){
var result__30354__auto__ = switch__30351__auto__(state_32206);
if(cljs.core.keyword_identical_QMARK_(result__30354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30354__auto__;
}
break;
}
}catch (e32266){if((e32266 instanceof Object)){
var ex__30355__auto__ = e32266;
var statearr_32267_33771 = state_32206;
(statearr_32267_33771[(5)] = ex__30355__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32206);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32266;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33772 = state_32206;
state_32206 = G__33772;
continue;
} else {
return ret_value__30353__auto__;
}
break;
}
});
cljs$core$async$state_machine__30352__auto__ = function(state_32206){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30352__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30352__auto____1.call(this,state_32206);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30352__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30352__auto____0;
cljs$core$async$state_machine__30352__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30352__auto____1;
return cljs$core$async$state_machine__30352__auto__;
})()
;})(switch__30351__auto__,c__30662__auto___33730,mults,ensure_mult,p))
})();
var state__30664__auto__ = (function (){var statearr_32269 = (f__30663__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30663__auto__.cljs$core$IFn$_invoke$arity$0() : f__30663__auto__.call(null));
(statearr_32269[(6)] = c__30662__auto___33730);

return statearr_32269;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30664__auto__);
});})(c__30662__auto___33730,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__32271 = arguments.length;
switch (G__32271) {
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

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

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
var G__32274 = arguments.length;
switch (G__32274) {
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

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

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
var G__32279 = arguments.length;
switch (G__32279) {
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

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__30662__auto___33781 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30662__auto___33781,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__30663__auto__ = (function (){var switch__30351__auto__ = ((function (c__30662__auto___33781,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_32354){
var state_val_32359 = (state_32354[(1)]);
if((state_val_32359 === (7))){
var state_32354__$1 = state_32354;
var statearr_32368_33782 = state_32354__$1;
(statearr_32368_33782[(2)] = null);

(statearr_32368_33782[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32359 === (1))){
var state_32354__$1 = state_32354;
var statearr_32373_33783 = state_32354__$1;
(statearr_32373_33783[(2)] = null);

(statearr_32373_33783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32359 === (4))){
var inst_32292 = (state_32354[(7)]);
var inst_32298 = (inst_32292 < cnt);
var state_32354__$1 = state_32354;
if(cljs.core.truth_(inst_32298)){
var statearr_32374_33785 = state_32354__$1;
(statearr_32374_33785[(1)] = (6));

} else {
var statearr_32375_33786 = state_32354__$1;
(statearr_32375_33786[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32359 === (15))){
var inst_32349 = (state_32354[(2)]);
var state_32354__$1 = state_32354;
var statearr_32376_33787 = state_32354__$1;
(statearr_32376_33787[(2)] = inst_32349);

(statearr_32376_33787[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32359 === (13))){
var inst_32342 = cljs.core.async.close_BANG_(out);
var state_32354__$1 = state_32354;
var statearr_32377_33789 = state_32354__$1;
(statearr_32377_33789[(2)] = inst_32342);

(statearr_32377_33789[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32359 === (6))){
var state_32354__$1 = state_32354;
var statearr_32381_33790 = state_32354__$1;
(statearr_32381_33790[(2)] = null);

(statearr_32381_33790[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32359 === (3))){
var inst_32351 = (state_32354[(2)]);
var state_32354__$1 = state_32354;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32354__$1,inst_32351);
} else {
if((state_val_32359 === (12))){
var inst_32339 = (state_32354[(8)]);
var inst_32339__$1 = (state_32354[(2)]);
var inst_32340 = cljs.core.some(cljs.core.nil_QMARK_,inst_32339__$1);
var state_32354__$1 = (function (){var statearr_32383 = state_32354;
(statearr_32383[(8)] = inst_32339__$1);

return statearr_32383;
})();
if(cljs.core.truth_(inst_32340)){
var statearr_32384_33794 = state_32354__$1;
(statearr_32384_33794[(1)] = (13));

} else {
var statearr_32385_33799 = state_32354__$1;
(statearr_32385_33799[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32359 === (2))){
var inst_32291 = cljs.core.reset_BANG_(dctr,cnt);
var inst_32292 = (0);
var state_32354__$1 = (function (){var statearr_32386 = state_32354;
(statearr_32386[(9)] = inst_32291);

(statearr_32386[(7)] = inst_32292);

return statearr_32386;
})();
var statearr_32387_33803 = state_32354__$1;
(statearr_32387_33803[(2)] = null);

(statearr_32387_33803[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32359 === (11))){
var inst_32292 = (state_32354[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_32354,(10),Object,null,(9));
var inst_32322 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_32292) : chs__$1.call(null,inst_32292));
var inst_32323 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_32292) : done.call(null,inst_32292));
var inst_32324 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_32322,inst_32323);
var state_32354__$1 = state_32354;
var statearr_32388_33804 = state_32354__$1;
(statearr_32388_33804[(2)] = inst_32324);


cljs.core.async.impl.ioc_helpers.process_exception(state_32354__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32359 === (9))){
var inst_32292 = (state_32354[(7)]);
var inst_32326 = (state_32354[(2)]);
var inst_32327 = (inst_32292 + (1));
var inst_32292__$1 = inst_32327;
var state_32354__$1 = (function (){var statearr_32389 = state_32354;
(statearr_32389[(10)] = inst_32326);

(statearr_32389[(7)] = inst_32292__$1);

return statearr_32389;
})();
var statearr_32390_33808 = state_32354__$1;
(statearr_32390_33808[(2)] = null);

(statearr_32390_33808[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32359 === (5))){
var inst_32337 = (state_32354[(2)]);
var state_32354__$1 = (function (){var statearr_32391 = state_32354;
(statearr_32391[(11)] = inst_32337);

return statearr_32391;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32354__$1,(12),dchan);
} else {
if((state_val_32359 === (14))){
var inst_32339 = (state_32354[(8)]);
var inst_32344 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_32339);
var state_32354__$1 = state_32354;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32354__$1,(16),out,inst_32344);
} else {
if((state_val_32359 === (16))){
var inst_32346 = (state_32354[(2)]);
var state_32354__$1 = (function (){var statearr_32392 = state_32354;
(statearr_32392[(12)] = inst_32346);

return statearr_32392;
})();
var statearr_32395_33812 = state_32354__$1;
(statearr_32395_33812[(2)] = null);

(statearr_32395_33812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32359 === (10))){
var inst_32307 = (state_32354[(2)]);
var inst_32311 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_32354__$1 = (function (){var statearr_32398 = state_32354;
(statearr_32398[(13)] = inst_32307);

return statearr_32398;
})();
var statearr_32400_33816 = state_32354__$1;
(statearr_32400_33816[(2)] = inst_32311);


cljs.core.async.impl.ioc_helpers.process_exception(state_32354__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32359 === (8))){
var inst_32331 = (state_32354[(2)]);
var state_32354__$1 = state_32354;
var statearr_32404_33817 = state_32354__$1;
(statearr_32404_33817[(2)] = inst_32331);

(statearr_32404_33817[(1)] = (5));


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
});})(c__30662__auto___33781,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__30351__auto__,c__30662__auto___33781,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__30352__auto__ = null;
var cljs$core$async$state_machine__30352__auto____0 = (function (){
var statearr_32407 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32407[(0)] = cljs$core$async$state_machine__30352__auto__);

(statearr_32407[(1)] = (1));

return statearr_32407;
});
var cljs$core$async$state_machine__30352__auto____1 = (function (state_32354){
while(true){
var ret_value__30353__auto__ = (function (){try{while(true){
var result__30354__auto__ = switch__30351__auto__(state_32354);
if(cljs.core.keyword_identical_QMARK_(result__30354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30354__auto__;
}
break;
}
}catch (e32408){if((e32408 instanceof Object)){
var ex__30355__auto__ = e32408;
var statearr_32410_33819 = state_32354;
(statearr_32410_33819[(5)] = ex__30355__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32354);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32408;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33820 = state_32354;
state_32354 = G__33820;
continue;
} else {
return ret_value__30353__auto__;
}
break;
}
});
cljs$core$async$state_machine__30352__auto__ = function(state_32354){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30352__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30352__auto____1.call(this,state_32354);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30352__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30352__auto____0;
cljs$core$async$state_machine__30352__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30352__auto____1;
return cljs$core$async$state_machine__30352__auto__;
})()
;})(switch__30351__auto__,c__30662__auto___33781,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__30664__auto__ = (function (){var statearr_32411 = (f__30663__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30663__auto__.cljs$core$IFn$_invoke$arity$0() : f__30663__auto__.call(null));
(statearr_32411[(6)] = c__30662__auto___33781);

return statearr_32411;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30664__auto__);
});})(c__30662__auto___33781,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__32414 = arguments.length;
switch (G__32414) {
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

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30662__auto___33837 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30662__auto___33837,out){
return (function (){
var f__30663__auto__ = (function (){var switch__30351__auto__ = ((function (c__30662__auto___33837,out){
return (function (state_32466){
var state_val_32467 = (state_32466[(1)]);
if((state_val_32467 === (7))){
var inst_32436 = (state_32466[(7)]);
var inst_32438 = (state_32466[(8)]);
var inst_32436__$1 = (state_32466[(2)]);
var inst_32438__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32436__$1,(0),null);
var inst_32443 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32436__$1,(1),null);
var inst_32444 = (inst_32438__$1 == null);
var state_32466__$1 = (function (){var statearr_32474 = state_32466;
(statearr_32474[(7)] = inst_32436__$1);

(statearr_32474[(9)] = inst_32443);

(statearr_32474[(8)] = inst_32438__$1);

return statearr_32474;
})();
if(cljs.core.truth_(inst_32444)){
var statearr_32475_33838 = state_32466__$1;
(statearr_32475_33838[(1)] = (8));

} else {
var statearr_32476_33839 = state_32466__$1;
(statearr_32476_33839[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32467 === (1))){
var inst_32426 = cljs.core.vec(chs);
var inst_32427 = inst_32426;
var state_32466__$1 = (function (){var statearr_32477 = state_32466;
(statearr_32477[(10)] = inst_32427);

return statearr_32477;
})();
var statearr_32478_33840 = state_32466__$1;
(statearr_32478_33840[(2)] = null);

(statearr_32478_33840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32467 === (4))){
var inst_32427 = (state_32466[(10)]);
var state_32466__$1 = state_32466;
return cljs.core.async.ioc_alts_BANG_(state_32466__$1,(7),inst_32427);
} else {
if((state_val_32467 === (6))){
var inst_32462 = (state_32466[(2)]);
var state_32466__$1 = state_32466;
var statearr_32480_33841 = state_32466__$1;
(statearr_32480_33841[(2)] = inst_32462);

(statearr_32480_33841[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32467 === (3))){
var inst_32464 = (state_32466[(2)]);
var state_32466__$1 = state_32466;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32466__$1,inst_32464);
} else {
if((state_val_32467 === (2))){
var inst_32427 = (state_32466[(10)]);
var inst_32429 = cljs.core.count(inst_32427);
var inst_32430 = (inst_32429 > (0));
var state_32466__$1 = state_32466;
if(cljs.core.truth_(inst_32430)){
var statearr_32488_33842 = state_32466__$1;
(statearr_32488_33842[(1)] = (4));

} else {
var statearr_32489_33843 = state_32466__$1;
(statearr_32489_33843[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32467 === (11))){
var inst_32427 = (state_32466[(10)]);
var inst_32453 = (state_32466[(2)]);
var tmp32485 = inst_32427;
var inst_32427__$1 = tmp32485;
var state_32466__$1 = (function (){var statearr_32495 = state_32466;
(statearr_32495[(11)] = inst_32453);

(statearr_32495[(10)] = inst_32427__$1);

return statearr_32495;
})();
var statearr_32496_33850 = state_32466__$1;
(statearr_32496_33850[(2)] = null);

(statearr_32496_33850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32467 === (9))){
var inst_32438 = (state_32466[(8)]);
var state_32466__$1 = state_32466;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32466__$1,(11),out,inst_32438);
} else {
if((state_val_32467 === (5))){
var inst_32460 = cljs.core.async.close_BANG_(out);
var state_32466__$1 = state_32466;
var statearr_32500_33851 = state_32466__$1;
(statearr_32500_33851[(2)] = inst_32460);

(statearr_32500_33851[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32467 === (10))){
var inst_32456 = (state_32466[(2)]);
var state_32466__$1 = state_32466;
var statearr_32501_33852 = state_32466__$1;
(statearr_32501_33852[(2)] = inst_32456);

(statearr_32501_33852[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32467 === (8))){
var inst_32436 = (state_32466[(7)]);
var inst_32443 = (state_32466[(9)]);
var inst_32427 = (state_32466[(10)]);
var inst_32438 = (state_32466[(8)]);
var inst_32448 = (function (){var cs = inst_32427;
var vec__32432 = inst_32436;
var v = inst_32438;
var c = inst_32443;
return ((function (cs,vec__32432,v,c,inst_32436,inst_32443,inst_32427,inst_32438,state_val_32467,c__30662__auto___33837,out){
return (function (p1__32412_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__32412_SHARP_);
});
;})(cs,vec__32432,v,c,inst_32436,inst_32443,inst_32427,inst_32438,state_val_32467,c__30662__auto___33837,out))
})();
var inst_32449 = cljs.core.filterv(inst_32448,inst_32427);
var inst_32427__$1 = inst_32449;
var state_32466__$1 = (function (){var statearr_32505 = state_32466;
(statearr_32505[(10)] = inst_32427__$1);

return statearr_32505;
})();
var statearr_32506_33853 = state_32466__$1;
(statearr_32506_33853[(2)] = null);

(statearr_32506_33853[(1)] = (2));


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
});})(c__30662__auto___33837,out))
;
return ((function (switch__30351__auto__,c__30662__auto___33837,out){
return (function() {
var cljs$core$async$state_machine__30352__auto__ = null;
var cljs$core$async$state_machine__30352__auto____0 = (function (){
var statearr_32507 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32507[(0)] = cljs$core$async$state_machine__30352__auto__);

(statearr_32507[(1)] = (1));

return statearr_32507;
});
var cljs$core$async$state_machine__30352__auto____1 = (function (state_32466){
while(true){
var ret_value__30353__auto__ = (function (){try{while(true){
var result__30354__auto__ = switch__30351__auto__(state_32466);
if(cljs.core.keyword_identical_QMARK_(result__30354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30354__auto__;
}
break;
}
}catch (e32508){if((e32508 instanceof Object)){
var ex__30355__auto__ = e32508;
var statearr_32513_33860 = state_32466;
(statearr_32513_33860[(5)] = ex__30355__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32466);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32508;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33861 = state_32466;
state_32466 = G__33861;
continue;
} else {
return ret_value__30353__auto__;
}
break;
}
});
cljs$core$async$state_machine__30352__auto__ = function(state_32466){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30352__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30352__auto____1.call(this,state_32466);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30352__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30352__auto____0;
cljs$core$async$state_machine__30352__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30352__auto____1;
return cljs$core$async$state_machine__30352__auto__;
})()
;})(switch__30351__auto__,c__30662__auto___33837,out))
})();
var state__30664__auto__ = (function (){var statearr_32514 = (f__30663__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30663__auto__.cljs$core$IFn$_invoke$arity$0() : f__30663__auto__.call(null));
(statearr_32514[(6)] = c__30662__auto___33837);

return statearr_32514;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30664__auto__);
});})(c__30662__auto___33837,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

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
var G__32517 = arguments.length;
switch (G__32517) {
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

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30662__auto___33863 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30662__auto___33863,out){
return (function (){
var f__30663__auto__ = (function (){var switch__30351__auto__ = ((function (c__30662__auto___33863,out){
return (function (state_32544){
var state_val_32545 = (state_32544[(1)]);
if((state_val_32545 === (7))){
var inst_32526 = (state_32544[(7)]);
var inst_32526__$1 = (state_32544[(2)]);
var inst_32527 = (inst_32526__$1 == null);
var inst_32528 = cljs.core.not(inst_32527);
var state_32544__$1 = (function (){var statearr_32548 = state_32544;
(statearr_32548[(7)] = inst_32526__$1);

return statearr_32548;
})();
if(inst_32528){
var statearr_32549_33864 = state_32544__$1;
(statearr_32549_33864[(1)] = (8));

} else {
var statearr_32550_33865 = state_32544__$1;
(statearr_32550_33865[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32545 === (1))){
var inst_32521 = (0);
var state_32544__$1 = (function (){var statearr_32555 = state_32544;
(statearr_32555[(8)] = inst_32521);

return statearr_32555;
})();
var statearr_32556_33872 = state_32544__$1;
(statearr_32556_33872[(2)] = null);

(statearr_32556_33872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32545 === (4))){
var state_32544__$1 = state_32544;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32544__$1,(7),ch);
} else {
if((state_val_32545 === (6))){
var inst_32539 = (state_32544[(2)]);
var state_32544__$1 = state_32544;
var statearr_32558_33873 = state_32544__$1;
(statearr_32558_33873[(2)] = inst_32539);

(statearr_32558_33873[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32545 === (3))){
var inst_32541 = (state_32544[(2)]);
var inst_32542 = cljs.core.async.close_BANG_(out);
var state_32544__$1 = (function (){var statearr_32560 = state_32544;
(statearr_32560[(9)] = inst_32541);

return statearr_32560;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32544__$1,inst_32542);
} else {
if((state_val_32545 === (2))){
var inst_32521 = (state_32544[(8)]);
var inst_32523 = (inst_32521 < n);
var state_32544__$1 = state_32544;
if(cljs.core.truth_(inst_32523)){
var statearr_32563_33874 = state_32544__$1;
(statearr_32563_33874[(1)] = (4));

} else {
var statearr_32564_33875 = state_32544__$1;
(statearr_32564_33875[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32545 === (11))){
var inst_32521 = (state_32544[(8)]);
var inst_32531 = (state_32544[(2)]);
var inst_32532 = (inst_32521 + (1));
var inst_32521__$1 = inst_32532;
var state_32544__$1 = (function (){var statearr_32567 = state_32544;
(statearr_32567[(8)] = inst_32521__$1);

(statearr_32567[(10)] = inst_32531);

return statearr_32567;
})();
var statearr_32568_33876 = state_32544__$1;
(statearr_32568_33876[(2)] = null);

(statearr_32568_33876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32545 === (9))){
var state_32544__$1 = state_32544;
var statearr_32571_33877 = state_32544__$1;
(statearr_32571_33877[(2)] = null);

(statearr_32571_33877[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32545 === (5))){
var state_32544__$1 = state_32544;
var statearr_32574_33878 = state_32544__$1;
(statearr_32574_33878[(2)] = null);

(statearr_32574_33878[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32545 === (10))){
var inst_32536 = (state_32544[(2)]);
var state_32544__$1 = state_32544;
var statearr_32578_33882 = state_32544__$1;
(statearr_32578_33882[(2)] = inst_32536);

(statearr_32578_33882[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32545 === (8))){
var inst_32526 = (state_32544[(7)]);
var state_32544__$1 = state_32544;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32544__$1,(11),out,inst_32526);
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
});})(c__30662__auto___33863,out))
;
return ((function (switch__30351__auto__,c__30662__auto___33863,out){
return (function() {
var cljs$core$async$state_machine__30352__auto__ = null;
var cljs$core$async$state_machine__30352__auto____0 = (function (){
var statearr_32583 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32583[(0)] = cljs$core$async$state_machine__30352__auto__);

(statearr_32583[(1)] = (1));

return statearr_32583;
});
var cljs$core$async$state_machine__30352__auto____1 = (function (state_32544){
while(true){
var ret_value__30353__auto__ = (function (){try{while(true){
var result__30354__auto__ = switch__30351__auto__(state_32544);
if(cljs.core.keyword_identical_QMARK_(result__30354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30354__auto__;
}
break;
}
}catch (e32589){if((e32589 instanceof Object)){
var ex__30355__auto__ = e32589;
var statearr_32590_33888 = state_32544;
(statearr_32590_33888[(5)] = ex__30355__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32544);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32589;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33890 = state_32544;
state_32544 = G__33890;
continue;
} else {
return ret_value__30353__auto__;
}
break;
}
});
cljs$core$async$state_machine__30352__auto__ = function(state_32544){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30352__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30352__auto____1.call(this,state_32544);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30352__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30352__auto____0;
cljs$core$async$state_machine__30352__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30352__auto____1;
return cljs$core$async$state_machine__30352__auto__;
})()
;})(switch__30351__auto__,c__30662__auto___33863,out))
})();
var state__30664__auto__ = (function (){var statearr_32594 = (f__30663__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30663__auto__.cljs$core$IFn$_invoke$arity$0() : f__30663__auto__.call(null));
(statearr_32594[(6)] = c__30662__auto___33863);

return statearr_32594;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30664__auto__);
});})(c__30662__auto___33863,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32600 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32600 = (function (f,ch,meta32601){
this.f = f;
this.ch = ch;
this.meta32601 = meta32601;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32600.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32602,meta32601__$1){
var self__ = this;
var _32602__$1 = this;
return (new cljs.core.async.t_cljs$core$async32600(self__.f,self__.ch,meta32601__$1));
});

cljs.core.async.t_cljs$core$async32600.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32602){
var self__ = this;
var _32602__$1 = this;
return self__.meta32601;
});

cljs.core.async.t_cljs$core$async32600.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32600.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async32600.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async32600.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32600.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32608 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32608 = (function (f,ch,meta32601,_,fn1,meta32609){
this.f = f;
this.ch = ch;
this.meta32601 = meta32601;
this._ = _;
this.fn1 = fn1;
this.meta32609 = meta32609;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32608.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_32610,meta32609__$1){
var self__ = this;
var _32610__$1 = this;
return (new cljs.core.async.t_cljs$core$async32608(self__.f,self__.ch,self__.meta32601,self__._,self__.fn1,meta32609__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async32608.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_32610){
var self__ = this;
var _32610__$1 = this;
return self__.meta32609;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32608.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32608.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32608.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32608.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__32596_SHARP_){
var G__32618 = (((p1__32596_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__32596_SHARP_) : self__.f.call(null,p1__32596_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__32618) : f1.call(null,G__32618));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async32608.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32601","meta32601",499192017,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32600","cljs.core.async/t_cljs$core$async32600",529710546,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32609","meta32609",-1062011663,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32608.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32608.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32608";

cljs.core.async.t_cljs$core$async32608.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async32608");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32608.
 */
cljs.core.async.__GT_t_cljs$core$async32608 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32608(f__$1,ch__$1,meta32601__$1,___$2,fn1__$1,meta32609){
return (new cljs.core.async.t_cljs$core$async32608(f__$1,ch__$1,meta32601__$1,___$2,fn1__$1,meta32609));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async32608(self__.f,self__.ch,self__.meta32601,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__32620 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__32620) : self__.f.call(null,G__32620));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async32600.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32600.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async32600.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32601","meta32601",499192017,null)], null);
});

cljs.core.async.t_cljs$core$async32600.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32600.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32600";

cljs.core.async.t_cljs$core$async32600.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async32600");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32600.
 */
cljs.core.async.__GT_t_cljs$core$async32600 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32600(f__$1,ch__$1,meta32601){
return (new cljs.core.async.t_cljs$core$async32600(f__$1,ch__$1,meta32601));
});

}

return (new cljs.core.async.t_cljs$core$async32600(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32630 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32630 = (function (f,ch,meta32631){
this.f = f;
this.ch = ch;
this.meta32631 = meta32631;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32630.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32632,meta32631__$1){
var self__ = this;
var _32632__$1 = this;
return (new cljs.core.async.t_cljs$core$async32630(self__.f,self__.ch,meta32631__$1));
});

cljs.core.async.t_cljs$core$async32630.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32632){
var self__ = this;
var _32632__$1 = this;
return self__.meta32631;
});

cljs.core.async.t_cljs$core$async32630.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32630.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async32630.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32630.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32630.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32630.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async32630.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32631","meta32631",1542743918,null)], null);
});

cljs.core.async.t_cljs$core$async32630.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32630.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32630";

cljs.core.async.t_cljs$core$async32630.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async32630");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32630.
 */
cljs.core.async.__GT_t_cljs$core$async32630 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32630(f__$1,ch__$1,meta32631){
return (new cljs.core.async.t_cljs$core$async32630(f__$1,ch__$1,meta32631));
});

}

return (new cljs.core.async.t_cljs$core$async32630(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32646 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32646 = (function (p,ch,meta32647){
this.p = p;
this.ch = ch;
this.meta32647 = meta32647;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32646.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32648,meta32647__$1){
var self__ = this;
var _32648__$1 = this;
return (new cljs.core.async.t_cljs$core$async32646(self__.p,self__.ch,meta32647__$1));
});

cljs.core.async.t_cljs$core$async32646.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32648){
var self__ = this;
var _32648__$1 = this;
return self__.meta32647;
});

cljs.core.async.t_cljs$core$async32646.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32646.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async32646.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async32646.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32646.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32646.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32646.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async32646.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32647","meta32647",1371879281,null)], null);
});

cljs.core.async.t_cljs$core$async32646.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32646.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32646";

cljs.core.async.t_cljs$core$async32646.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async32646");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32646.
 */
cljs.core.async.__GT_t_cljs$core$async32646 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32646(p__$1,ch__$1,meta32647){
return (new cljs.core.async.t_cljs$core$async32646(p__$1,ch__$1,meta32647));
});

}

return (new cljs.core.async.t_cljs$core$async32646(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__32667 = arguments.length;
switch (G__32667) {
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

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30662__auto___33911 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30662__auto___33911,out){
return (function (){
var f__30663__auto__ = (function (){var switch__30351__auto__ = ((function (c__30662__auto___33911,out){
return (function (state_32697){
var state_val_32698 = (state_32697[(1)]);
if((state_val_32698 === (7))){
var inst_32693 = (state_32697[(2)]);
var state_32697__$1 = state_32697;
var statearr_32703_33912 = state_32697__$1;
(statearr_32703_33912[(2)] = inst_32693);

(statearr_32703_33912[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32698 === (1))){
var state_32697__$1 = state_32697;
var statearr_32705_33914 = state_32697__$1;
(statearr_32705_33914[(2)] = null);

(statearr_32705_33914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32698 === (4))){
var inst_32678 = (state_32697[(7)]);
var inst_32678__$1 = (state_32697[(2)]);
var inst_32679 = (inst_32678__$1 == null);
var state_32697__$1 = (function (){var statearr_32708 = state_32697;
(statearr_32708[(7)] = inst_32678__$1);

return statearr_32708;
})();
if(cljs.core.truth_(inst_32679)){
var statearr_32709_33915 = state_32697__$1;
(statearr_32709_33915[(1)] = (5));

} else {
var statearr_32710_33916 = state_32697__$1;
(statearr_32710_33916[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32698 === (6))){
var inst_32678 = (state_32697[(7)]);
var inst_32684 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32678) : p.call(null,inst_32678));
var state_32697__$1 = state_32697;
if(cljs.core.truth_(inst_32684)){
var statearr_32712_33917 = state_32697__$1;
(statearr_32712_33917[(1)] = (8));

} else {
var statearr_32716_33918 = state_32697__$1;
(statearr_32716_33918[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32698 === (3))){
var inst_32695 = (state_32697[(2)]);
var state_32697__$1 = state_32697;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32697__$1,inst_32695);
} else {
if((state_val_32698 === (2))){
var state_32697__$1 = state_32697;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32697__$1,(4),ch);
} else {
if((state_val_32698 === (11))){
var inst_32687 = (state_32697[(2)]);
var state_32697__$1 = state_32697;
var statearr_32723_33920 = state_32697__$1;
(statearr_32723_33920[(2)] = inst_32687);

(statearr_32723_33920[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32698 === (9))){
var state_32697__$1 = state_32697;
var statearr_32724_33921 = state_32697__$1;
(statearr_32724_33921[(2)] = null);

(statearr_32724_33921[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32698 === (5))){
var inst_32682 = cljs.core.async.close_BANG_(out);
var state_32697__$1 = state_32697;
var statearr_32727_33922 = state_32697__$1;
(statearr_32727_33922[(2)] = inst_32682);

(statearr_32727_33922[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32698 === (10))){
var inst_32690 = (state_32697[(2)]);
var state_32697__$1 = (function (){var statearr_32728 = state_32697;
(statearr_32728[(8)] = inst_32690);

return statearr_32728;
})();
var statearr_32729_33923 = state_32697__$1;
(statearr_32729_33923[(2)] = null);

(statearr_32729_33923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32698 === (8))){
var inst_32678 = (state_32697[(7)]);
var state_32697__$1 = state_32697;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32697__$1,(11),out,inst_32678);
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
});})(c__30662__auto___33911,out))
;
return ((function (switch__30351__auto__,c__30662__auto___33911,out){
return (function() {
var cljs$core$async$state_machine__30352__auto__ = null;
var cljs$core$async$state_machine__30352__auto____0 = (function (){
var statearr_32735 = [null,null,null,null,null,null,null,null,null];
(statearr_32735[(0)] = cljs$core$async$state_machine__30352__auto__);

(statearr_32735[(1)] = (1));

return statearr_32735;
});
var cljs$core$async$state_machine__30352__auto____1 = (function (state_32697){
while(true){
var ret_value__30353__auto__ = (function (){try{while(true){
var result__30354__auto__ = switch__30351__auto__(state_32697);
if(cljs.core.keyword_identical_QMARK_(result__30354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30354__auto__;
}
break;
}
}catch (e32737){if((e32737 instanceof Object)){
var ex__30355__auto__ = e32737;
var statearr_32739_33932 = state_32697;
(statearr_32739_33932[(5)] = ex__30355__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32697);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32737;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33937 = state_32697;
state_32697 = G__33937;
continue;
} else {
return ret_value__30353__auto__;
}
break;
}
});
cljs$core$async$state_machine__30352__auto__ = function(state_32697){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30352__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30352__auto____1.call(this,state_32697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30352__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30352__auto____0;
cljs$core$async$state_machine__30352__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30352__auto____1;
return cljs$core$async$state_machine__30352__auto__;
})()
;})(switch__30351__auto__,c__30662__auto___33911,out))
})();
var state__30664__auto__ = (function (){var statearr_32743 = (f__30663__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30663__auto__.cljs$core$IFn$_invoke$arity$0() : f__30663__auto__.call(null));
(statearr_32743[(6)] = c__30662__auto___33911);

return statearr_32743;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30664__auto__);
});})(c__30662__auto___33911,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32748 = arguments.length;
switch (G__32748) {
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

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__30662__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30662__auto__){
return (function (){
var f__30663__auto__ = (function (){var switch__30351__auto__ = ((function (c__30662__auto__){
return (function (state_32825){
var state_val_32826 = (state_32825[(1)]);
if((state_val_32826 === (7))){
var inst_32821 = (state_32825[(2)]);
var state_32825__$1 = state_32825;
var statearr_32840_33991 = state_32825__$1;
(statearr_32840_33991[(2)] = inst_32821);

(statearr_32840_33991[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32826 === (20))){
var inst_32789 = (state_32825[(7)]);
var inst_32800 = (state_32825[(2)]);
var inst_32803 = cljs.core.next(inst_32789);
var inst_32775 = inst_32803;
var inst_32776 = null;
var inst_32777 = (0);
var inst_32778 = (0);
var state_32825__$1 = (function (){var statearr_32843 = state_32825;
(statearr_32843[(8)] = inst_32777);

(statearr_32843[(9)] = inst_32778);

(statearr_32843[(10)] = inst_32776);

(statearr_32843[(11)] = inst_32775);

(statearr_32843[(12)] = inst_32800);

return statearr_32843;
})();
var statearr_32844_33997 = state_32825__$1;
(statearr_32844_33997[(2)] = null);

(statearr_32844_33997[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32826 === (1))){
var state_32825__$1 = state_32825;
var statearr_32845_33999 = state_32825__$1;
(statearr_32845_33999[(2)] = null);

(statearr_32845_33999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32826 === (4))){
var inst_32764 = (state_32825[(13)]);
var inst_32764__$1 = (state_32825[(2)]);
var inst_32765 = (inst_32764__$1 == null);
var state_32825__$1 = (function (){var statearr_32846 = state_32825;
(statearr_32846[(13)] = inst_32764__$1);

return statearr_32846;
})();
if(cljs.core.truth_(inst_32765)){
var statearr_32847_34000 = state_32825__$1;
(statearr_32847_34000[(1)] = (5));

} else {
var statearr_32848_34001 = state_32825__$1;
(statearr_32848_34001[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32826 === (15))){
var state_32825__$1 = state_32825;
var statearr_32853_34002 = state_32825__$1;
(statearr_32853_34002[(2)] = null);

(statearr_32853_34002[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32826 === (21))){
var state_32825__$1 = state_32825;
var statearr_32856_34003 = state_32825__$1;
(statearr_32856_34003[(2)] = null);

(statearr_32856_34003[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32826 === (13))){
var inst_32777 = (state_32825[(8)]);
var inst_32778 = (state_32825[(9)]);
var inst_32776 = (state_32825[(10)]);
var inst_32775 = (state_32825[(11)]);
var inst_32785 = (state_32825[(2)]);
var inst_32786 = (inst_32778 + (1));
var tmp32849 = inst_32777;
var tmp32850 = inst_32776;
var tmp32851 = inst_32775;
var inst_32775__$1 = tmp32851;
var inst_32776__$1 = tmp32850;
var inst_32777__$1 = tmp32849;
var inst_32778__$1 = inst_32786;
var state_32825__$1 = (function (){var statearr_32861 = state_32825;
(statearr_32861[(8)] = inst_32777__$1);

(statearr_32861[(9)] = inst_32778__$1);

(statearr_32861[(14)] = inst_32785);

(statearr_32861[(10)] = inst_32776__$1);

(statearr_32861[(11)] = inst_32775__$1);

return statearr_32861;
})();
var statearr_32864_34012 = state_32825__$1;
(statearr_32864_34012[(2)] = null);

(statearr_32864_34012[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32826 === (22))){
var state_32825__$1 = state_32825;
var statearr_32867_34013 = state_32825__$1;
(statearr_32867_34013[(2)] = null);

(statearr_32867_34013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32826 === (6))){
var inst_32764 = (state_32825[(13)]);
var inst_32773 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32764) : f.call(null,inst_32764));
var inst_32774 = cljs.core.seq(inst_32773);
var inst_32775 = inst_32774;
var inst_32776 = null;
var inst_32777 = (0);
var inst_32778 = (0);
var state_32825__$1 = (function (){var statearr_32868 = state_32825;
(statearr_32868[(8)] = inst_32777);

(statearr_32868[(9)] = inst_32778);

(statearr_32868[(10)] = inst_32776);

(statearr_32868[(11)] = inst_32775);

return statearr_32868;
})();
var statearr_32869_34014 = state_32825__$1;
(statearr_32869_34014[(2)] = null);

(statearr_32869_34014[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32826 === (17))){
var inst_32789 = (state_32825[(7)]);
var inst_32793 = cljs.core.chunk_first(inst_32789);
var inst_32794 = cljs.core.chunk_rest(inst_32789);
var inst_32795 = cljs.core.count(inst_32793);
var inst_32775 = inst_32794;
var inst_32776 = inst_32793;
var inst_32777 = inst_32795;
var inst_32778 = (0);
var state_32825__$1 = (function (){var statearr_32871 = state_32825;
(statearr_32871[(8)] = inst_32777);

(statearr_32871[(9)] = inst_32778);

(statearr_32871[(10)] = inst_32776);

(statearr_32871[(11)] = inst_32775);

return statearr_32871;
})();
var statearr_32872_34020 = state_32825__$1;
(statearr_32872_34020[(2)] = null);

(statearr_32872_34020[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32826 === (3))){
var inst_32823 = (state_32825[(2)]);
var state_32825__$1 = state_32825;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32825__$1,inst_32823);
} else {
if((state_val_32826 === (12))){
var inst_32811 = (state_32825[(2)]);
var state_32825__$1 = state_32825;
var statearr_32873_34021 = state_32825__$1;
(statearr_32873_34021[(2)] = inst_32811);

(statearr_32873_34021[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32826 === (2))){
var state_32825__$1 = state_32825;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32825__$1,(4),in$);
} else {
if((state_val_32826 === (23))){
var inst_32819 = (state_32825[(2)]);
var state_32825__$1 = state_32825;
var statearr_32874_34022 = state_32825__$1;
(statearr_32874_34022[(2)] = inst_32819);

(statearr_32874_34022[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32826 === (19))){
var inst_32806 = (state_32825[(2)]);
var state_32825__$1 = state_32825;
var statearr_32875_34023 = state_32825__$1;
(statearr_32875_34023[(2)] = inst_32806);

(statearr_32875_34023[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32826 === (11))){
var inst_32775 = (state_32825[(11)]);
var inst_32789 = (state_32825[(7)]);
var inst_32789__$1 = cljs.core.seq(inst_32775);
var state_32825__$1 = (function (){var statearr_32876 = state_32825;
(statearr_32876[(7)] = inst_32789__$1);

return statearr_32876;
})();
if(inst_32789__$1){
var statearr_32877_34027 = state_32825__$1;
(statearr_32877_34027[(1)] = (14));

} else {
var statearr_32878_34028 = state_32825__$1;
(statearr_32878_34028[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32826 === (9))){
var inst_32813 = (state_32825[(2)]);
var inst_32814 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_32825__$1 = (function (){var statearr_32879 = state_32825;
(statearr_32879[(15)] = inst_32813);

return statearr_32879;
})();
if(cljs.core.truth_(inst_32814)){
var statearr_32880_34029 = state_32825__$1;
(statearr_32880_34029[(1)] = (21));

} else {
var statearr_32881_34030 = state_32825__$1;
(statearr_32881_34030[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32826 === (5))){
var inst_32767 = cljs.core.async.close_BANG_(out);
var state_32825__$1 = state_32825;
var statearr_32882_34031 = state_32825__$1;
(statearr_32882_34031[(2)] = inst_32767);

(statearr_32882_34031[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32826 === (14))){
var inst_32789 = (state_32825[(7)]);
var inst_32791 = cljs.core.chunked_seq_QMARK_(inst_32789);
var state_32825__$1 = state_32825;
if(inst_32791){
var statearr_32883_34032 = state_32825__$1;
(statearr_32883_34032[(1)] = (17));

} else {
var statearr_32884_34033 = state_32825__$1;
(statearr_32884_34033[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32826 === (16))){
var inst_32809 = (state_32825[(2)]);
var state_32825__$1 = state_32825;
var statearr_32885_34034 = state_32825__$1;
(statearr_32885_34034[(2)] = inst_32809);

(statearr_32885_34034[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32826 === (10))){
var inst_32778 = (state_32825[(9)]);
var inst_32776 = (state_32825[(10)]);
var inst_32783 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_32776,inst_32778);
var state_32825__$1 = state_32825;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32825__$1,(13),out,inst_32783);
} else {
if((state_val_32826 === (18))){
var inst_32789 = (state_32825[(7)]);
var inst_32798 = cljs.core.first(inst_32789);
var state_32825__$1 = state_32825;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32825__$1,(20),out,inst_32798);
} else {
if((state_val_32826 === (8))){
var inst_32777 = (state_32825[(8)]);
var inst_32778 = (state_32825[(9)]);
var inst_32780 = (inst_32778 < inst_32777);
var inst_32781 = inst_32780;
var state_32825__$1 = state_32825;
if(cljs.core.truth_(inst_32781)){
var statearr_32886_34038 = state_32825__$1;
(statearr_32886_34038[(1)] = (10));

} else {
var statearr_32887_34039 = state_32825__$1;
(statearr_32887_34039[(1)] = (11));

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
});})(c__30662__auto__))
;
return ((function (switch__30351__auto__,c__30662__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__30352__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30352__auto____0 = (function (){
var statearr_32888 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32888[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30352__auto__);

(statearr_32888[(1)] = (1));

return statearr_32888;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30352__auto____1 = (function (state_32825){
while(true){
var ret_value__30353__auto__ = (function (){try{while(true){
var result__30354__auto__ = switch__30351__auto__(state_32825);
if(cljs.core.keyword_identical_QMARK_(result__30354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30354__auto__;
}
break;
}
}catch (e32889){if((e32889 instanceof Object)){
var ex__30355__auto__ = e32889;
var statearr_32890_34044 = state_32825;
(statearr_32890_34044[(5)] = ex__30355__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32825);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32889;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34047 = state_32825;
state_32825 = G__34047;
continue;
} else {
return ret_value__30353__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30352__auto__ = function(state_32825){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30352__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30352__auto____1.call(this,state_32825);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__30352__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30352__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30352__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30352__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30352__auto__;
})()
;})(switch__30351__auto__,c__30662__auto__))
})();
var state__30664__auto__ = (function (){var statearr_32892 = (f__30663__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30663__auto__.cljs$core$IFn$_invoke$arity$0() : f__30663__auto__.call(null));
(statearr_32892[(6)] = c__30662__auto__);

return statearr_32892;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30664__auto__);
});})(c__30662__auto__))
);

return c__30662__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32894 = arguments.length;
switch (G__32894) {
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

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__32897 = arguments.length;
switch (G__32897) {
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

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__32911 = arguments.length;
switch (G__32911) {
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

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30662__auto___34069 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30662__auto___34069,out){
return (function (){
var f__30663__auto__ = (function (){var switch__30351__auto__ = ((function (c__30662__auto___34069,out){
return (function (state_32935){
var state_val_32936 = (state_32935[(1)]);
if((state_val_32936 === (7))){
var inst_32930 = (state_32935[(2)]);
var state_32935__$1 = state_32935;
var statearr_32937_34070 = state_32935__$1;
(statearr_32937_34070[(2)] = inst_32930);

(statearr_32937_34070[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32936 === (1))){
var inst_32912 = null;
var state_32935__$1 = (function (){var statearr_32938 = state_32935;
(statearr_32938[(7)] = inst_32912);

return statearr_32938;
})();
var statearr_32939_34076 = state_32935__$1;
(statearr_32939_34076[(2)] = null);

(statearr_32939_34076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32936 === (4))){
var inst_32915 = (state_32935[(8)]);
var inst_32915__$1 = (state_32935[(2)]);
var inst_32916 = (inst_32915__$1 == null);
var inst_32917 = cljs.core.not(inst_32916);
var state_32935__$1 = (function (){var statearr_32940 = state_32935;
(statearr_32940[(8)] = inst_32915__$1);

return statearr_32940;
})();
if(inst_32917){
var statearr_32941_34124 = state_32935__$1;
(statearr_32941_34124[(1)] = (5));

} else {
var statearr_32942_34125 = state_32935__$1;
(statearr_32942_34125[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32936 === (6))){
var state_32935__$1 = state_32935;
var statearr_32943_34134 = state_32935__$1;
(statearr_32943_34134[(2)] = null);

(statearr_32943_34134[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32936 === (3))){
var inst_32932 = (state_32935[(2)]);
var inst_32933 = cljs.core.async.close_BANG_(out);
var state_32935__$1 = (function (){var statearr_32944 = state_32935;
(statearr_32944[(9)] = inst_32932);

return statearr_32944;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32935__$1,inst_32933);
} else {
if((state_val_32936 === (2))){
var state_32935__$1 = state_32935;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32935__$1,(4),ch);
} else {
if((state_val_32936 === (11))){
var inst_32915 = (state_32935[(8)]);
var inst_32924 = (state_32935[(2)]);
var inst_32912 = inst_32915;
var state_32935__$1 = (function (){var statearr_32945 = state_32935;
(statearr_32945[(10)] = inst_32924);

(statearr_32945[(7)] = inst_32912);

return statearr_32945;
})();
var statearr_32946_34146 = state_32935__$1;
(statearr_32946_34146[(2)] = null);

(statearr_32946_34146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32936 === (9))){
var inst_32915 = (state_32935[(8)]);
var state_32935__$1 = state_32935;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32935__$1,(11),out,inst_32915);
} else {
if((state_val_32936 === (5))){
var inst_32915 = (state_32935[(8)]);
var inst_32912 = (state_32935[(7)]);
var inst_32919 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32915,inst_32912);
var state_32935__$1 = state_32935;
if(inst_32919){
var statearr_32948_34147 = state_32935__$1;
(statearr_32948_34147[(1)] = (8));

} else {
var statearr_32949_34152 = state_32935__$1;
(statearr_32949_34152[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32936 === (10))){
var inst_32927 = (state_32935[(2)]);
var state_32935__$1 = state_32935;
var statearr_32950_34156 = state_32935__$1;
(statearr_32950_34156[(2)] = inst_32927);

(statearr_32950_34156[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32936 === (8))){
var inst_32912 = (state_32935[(7)]);
var tmp32947 = inst_32912;
var inst_32912__$1 = tmp32947;
var state_32935__$1 = (function (){var statearr_32951 = state_32935;
(statearr_32951[(7)] = inst_32912__$1);

return statearr_32951;
})();
var statearr_32952_34157 = state_32935__$1;
(statearr_32952_34157[(2)] = null);

(statearr_32952_34157[(1)] = (2));


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
});})(c__30662__auto___34069,out))
;
return ((function (switch__30351__auto__,c__30662__auto___34069,out){
return (function() {
var cljs$core$async$state_machine__30352__auto__ = null;
var cljs$core$async$state_machine__30352__auto____0 = (function (){
var statearr_32953 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32953[(0)] = cljs$core$async$state_machine__30352__auto__);

(statearr_32953[(1)] = (1));

return statearr_32953;
});
var cljs$core$async$state_machine__30352__auto____1 = (function (state_32935){
while(true){
var ret_value__30353__auto__ = (function (){try{while(true){
var result__30354__auto__ = switch__30351__auto__(state_32935);
if(cljs.core.keyword_identical_QMARK_(result__30354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30354__auto__;
}
break;
}
}catch (e32954){if((e32954 instanceof Object)){
var ex__30355__auto__ = e32954;
var statearr_32955_34158 = state_32935;
(statearr_32955_34158[(5)] = ex__30355__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32935);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32954;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34162 = state_32935;
state_32935 = G__34162;
continue;
} else {
return ret_value__30353__auto__;
}
break;
}
});
cljs$core$async$state_machine__30352__auto__ = function(state_32935){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30352__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30352__auto____1.call(this,state_32935);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30352__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30352__auto____0;
cljs$core$async$state_machine__30352__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30352__auto____1;
return cljs$core$async$state_machine__30352__auto__;
})()
;})(switch__30351__auto__,c__30662__auto___34069,out))
})();
var state__30664__auto__ = (function (){var statearr_32956 = (f__30663__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30663__auto__.cljs$core$IFn$_invoke$arity$0() : f__30663__auto__.call(null));
(statearr_32956[(6)] = c__30662__auto___34069);

return statearr_32956;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30664__auto__);
});})(c__30662__auto___34069,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__32958 = arguments.length;
switch (G__32958) {
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

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30662__auto___34184 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30662__auto___34184,out){
return (function (){
var f__30663__auto__ = (function (){var switch__30351__auto__ = ((function (c__30662__auto___34184,out){
return (function (state_32996){
var state_val_32997 = (state_32996[(1)]);
if((state_val_32997 === (7))){
var inst_32992 = (state_32996[(2)]);
var state_32996__$1 = state_32996;
var statearr_32998_34186 = state_32996__$1;
(statearr_32998_34186[(2)] = inst_32992);

(statearr_32998_34186[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (1))){
var inst_32959 = (new Array(n));
var inst_32960 = inst_32959;
var inst_32961 = (0);
var state_32996__$1 = (function (){var statearr_32999 = state_32996;
(statearr_32999[(7)] = inst_32961);

(statearr_32999[(8)] = inst_32960);

return statearr_32999;
})();
var statearr_33000_34195 = state_32996__$1;
(statearr_33000_34195[(2)] = null);

(statearr_33000_34195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (4))){
var inst_32964 = (state_32996[(9)]);
var inst_32964__$1 = (state_32996[(2)]);
var inst_32965 = (inst_32964__$1 == null);
var inst_32966 = cljs.core.not(inst_32965);
var state_32996__$1 = (function (){var statearr_33001 = state_32996;
(statearr_33001[(9)] = inst_32964__$1);

return statearr_33001;
})();
if(inst_32966){
var statearr_33002_34207 = state_32996__$1;
(statearr_33002_34207[(1)] = (5));

} else {
var statearr_33003_34208 = state_32996__$1;
(statearr_33003_34208[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (15))){
var inst_32986 = (state_32996[(2)]);
var state_32996__$1 = state_32996;
var statearr_33004_34214 = state_32996__$1;
(statearr_33004_34214[(2)] = inst_32986);

(statearr_33004_34214[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (13))){
var state_32996__$1 = state_32996;
var statearr_33005_34215 = state_32996__$1;
(statearr_33005_34215[(2)] = null);

(statearr_33005_34215[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (6))){
var inst_32961 = (state_32996[(7)]);
var inst_32982 = (inst_32961 > (0));
var state_32996__$1 = state_32996;
if(cljs.core.truth_(inst_32982)){
var statearr_33006_34220 = state_32996__$1;
(statearr_33006_34220[(1)] = (12));

} else {
var statearr_33007_34221 = state_32996__$1;
(statearr_33007_34221[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (3))){
var inst_32994 = (state_32996[(2)]);
var state_32996__$1 = state_32996;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32996__$1,inst_32994);
} else {
if((state_val_32997 === (12))){
var inst_32960 = (state_32996[(8)]);
var inst_32984 = cljs.core.vec(inst_32960);
var state_32996__$1 = state_32996;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32996__$1,(15),out,inst_32984);
} else {
if((state_val_32997 === (2))){
var state_32996__$1 = state_32996;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32996__$1,(4),ch);
} else {
if((state_val_32997 === (11))){
var inst_32976 = (state_32996[(2)]);
var inst_32977 = (new Array(n));
var inst_32960 = inst_32977;
var inst_32961 = (0);
var state_32996__$1 = (function (){var statearr_33009 = state_32996;
(statearr_33009[(10)] = inst_32976);

(statearr_33009[(7)] = inst_32961);

(statearr_33009[(8)] = inst_32960);

return statearr_33009;
})();
var statearr_33010_34241 = state_32996__$1;
(statearr_33010_34241[(2)] = null);

(statearr_33010_34241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (9))){
var inst_32960 = (state_32996[(8)]);
var inst_32974 = cljs.core.vec(inst_32960);
var state_32996__$1 = state_32996;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32996__$1,(11),out,inst_32974);
} else {
if((state_val_32997 === (5))){
var inst_32964 = (state_32996[(9)]);
var inst_32969 = (state_32996[(11)]);
var inst_32961 = (state_32996[(7)]);
var inst_32960 = (state_32996[(8)]);
var inst_32968 = (inst_32960[inst_32961] = inst_32964);
var inst_32969__$1 = (inst_32961 + (1));
var inst_32970 = (inst_32969__$1 < n);
var state_32996__$1 = (function (){var statearr_33011 = state_32996;
(statearr_33011[(11)] = inst_32969__$1);

(statearr_33011[(12)] = inst_32968);

return statearr_33011;
})();
if(cljs.core.truth_(inst_32970)){
var statearr_33012_34246 = state_32996__$1;
(statearr_33012_34246[(1)] = (8));

} else {
var statearr_33013_34247 = state_32996__$1;
(statearr_33013_34247[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (14))){
var inst_32989 = (state_32996[(2)]);
var inst_32990 = cljs.core.async.close_BANG_(out);
var state_32996__$1 = (function (){var statearr_33015 = state_32996;
(statearr_33015[(13)] = inst_32989);

return statearr_33015;
})();
var statearr_33016_34249 = state_32996__$1;
(statearr_33016_34249[(2)] = inst_32990);

(statearr_33016_34249[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (10))){
var inst_32980 = (state_32996[(2)]);
var state_32996__$1 = state_32996;
var statearr_33017_34250 = state_32996__$1;
(statearr_33017_34250[(2)] = inst_32980);

(statearr_33017_34250[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32997 === (8))){
var inst_32969 = (state_32996[(11)]);
var inst_32960 = (state_32996[(8)]);
var tmp33014 = inst_32960;
var inst_32960__$1 = tmp33014;
var inst_32961 = inst_32969;
var state_32996__$1 = (function (){var statearr_33018 = state_32996;
(statearr_33018[(7)] = inst_32961);

(statearr_33018[(8)] = inst_32960__$1);

return statearr_33018;
})();
var statearr_33019_34255 = state_32996__$1;
(statearr_33019_34255[(2)] = null);

(statearr_33019_34255[(1)] = (2));


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
});})(c__30662__auto___34184,out))
;
return ((function (switch__30351__auto__,c__30662__auto___34184,out){
return (function() {
var cljs$core$async$state_machine__30352__auto__ = null;
var cljs$core$async$state_machine__30352__auto____0 = (function (){
var statearr_33020 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33020[(0)] = cljs$core$async$state_machine__30352__auto__);

(statearr_33020[(1)] = (1));

return statearr_33020;
});
var cljs$core$async$state_machine__30352__auto____1 = (function (state_32996){
while(true){
var ret_value__30353__auto__ = (function (){try{while(true){
var result__30354__auto__ = switch__30351__auto__(state_32996);
if(cljs.core.keyword_identical_QMARK_(result__30354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30354__auto__;
}
break;
}
}catch (e33022){if((e33022 instanceof Object)){
var ex__30355__auto__ = e33022;
var statearr_33023_34257 = state_32996;
(statearr_33023_34257[(5)] = ex__30355__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32996);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33022;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34259 = state_32996;
state_32996 = G__34259;
continue;
} else {
return ret_value__30353__auto__;
}
break;
}
});
cljs$core$async$state_machine__30352__auto__ = function(state_32996){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30352__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30352__auto____1.call(this,state_32996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30352__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30352__auto____0;
cljs$core$async$state_machine__30352__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30352__auto____1;
return cljs$core$async$state_machine__30352__auto__;
})()
;})(switch__30351__auto__,c__30662__auto___34184,out))
})();
var state__30664__auto__ = (function (){var statearr_33024 = (f__30663__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30663__auto__.cljs$core$IFn$_invoke$arity$0() : f__30663__auto__.call(null));
(statearr_33024[(6)] = c__30662__auto___34184);

return statearr_33024;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30664__auto__);
});})(c__30662__auto___34184,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__33026 = arguments.length;
switch (G__33026) {
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

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30662__auto___34266 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30662__auto___34266,out){
return (function (){
var f__30663__auto__ = (function (){var switch__30351__auto__ = ((function (c__30662__auto___34266,out){
return (function (state_33074){
var state_val_33075 = (state_33074[(1)]);
if((state_val_33075 === (7))){
var inst_33070 = (state_33074[(2)]);
var state_33074__$1 = state_33074;
var statearr_33076_34267 = state_33074__$1;
(statearr_33076_34267[(2)] = inst_33070);

(statearr_33076_34267[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33075 === (1))){
var inst_33027 = [];
var inst_33028 = inst_33027;
var inst_33029 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33074__$1 = (function (){var statearr_33079 = state_33074;
(statearr_33079[(7)] = inst_33028);

(statearr_33079[(8)] = inst_33029);

return statearr_33079;
})();
var statearr_33080_34268 = state_33074__$1;
(statearr_33080_34268[(2)] = null);

(statearr_33080_34268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33075 === (4))){
var inst_33032 = (state_33074[(9)]);
var inst_33032__$1 = (state_33074[(2)]);
var inst_33035 = (inst_33032__$1 == null);
var inst_33036 = cljs.core.not(inst_33035);
var state_33074__$1 = (function (){var statearr_33081 = state_33074;
(statearr_33081[(9)] = inst_33032__$1);

return statearr_33081;
})();
if(inst_33036){
var statearr_33082_34277 = state_33074__$1;
(statearr_33082_34277[(1)] = (5));

} else {
var statearr_33083_34278 = state_33074__$1;
(statearr_33083_34278[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33075 === (15))){
var inst_33064 = (state_33074[(2)]);
var state_33074__$1 = state_33074;
var statearr_33084_34283 = state_33074__$1;
(statearr_33084_34283[(2)] = inst_33064);

(statearr_33084_34283[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33075 === (13))){
var state_33074__$1 = state_33074;
var statearr_33085_34284 = state_33074__$1;
(statearr_33085_34284[(2)] = null);

(statearr_33085_34284[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33075 === (6))){
var inst_33028 = (state_33074[(7)]);
var inst_33058 = inst_33028.length;
var inst_33059 = (inst_33058 > (0));
var state_33074__$1 = state_33074;
if(cljs.core.truth_(inst_33059)){
var statearr_33086_34286 = state_33074__$1;
(statearr_33086_34286[(1)] = (12));

} else {
var statearr_33092_34287 = state_33074__$1;
(statearr_33092_34287[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33075 === (3))){
var inst_33072 = (state_33074[(2)]);
var state_33074__$1 = state_33074;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33074__$1,inst_33072);
} else {
if((state_val_33075 === (12))){
var inst_33028 = (state_33074[(7)]);
var inst_33062 = cljs.core.vec(inst_33028);
var state_33074__$1 = state_33074;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33074__$1,(15),out,inst_33062);
} else {
if((state_val_33075 === (2))){
var state_33074__$1 = state_33074;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33074__$1,(4),ch);
} else {
if((state_val_33075 === (11))){
var inst_33032 = (state_33074[(9)]);
var inst_33038 = (state_33074[(10)]);
var inst_33049 = (state_33074[(2)]);
var inst_33052 = [];
var inst_33053 = inst_33052.push(inst_33032);
var inst_33028 = inst_33052;
var inst_33029 = inst_33038;
var state_33074__$1 = (function (){var statearr_33102 = state_33074;
(statearr_33102[(7)] = inst_33028);

(statearr_33102[(11)] = inst_33049);

(statearr_33102[(8)] = inst_33029);

(statearr_33102[(12)] = inst_33053);

return statearr_33102;
})();
var statearr_33103_34289 = state_33074__$1;
(statearr_33103_34289[(2)] = null);

(statearr_33103_34289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33075 === (9))){
var inst_33028 = (state_33074[(7)]);
var inst_33047 = cljs.core.vec(inst_33028);
var state_33074__$1 = state_33074;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33074__$1,(11),out,inst_33047);
} else {
if((state_val_33075 === (5))){
var inst_33032 = (state_33074[(9)]);
var inst_33038 = (state_33074[(10)]);
var inst_33029 = (state_33074[(8)]);
var inst_33038__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33032) : f.call(null,inst_33032));
var inst_33039 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33038__$1,inst_33029);
var inst_33040 = cljs.core.keyword_identical_QMARK_(inst_33029,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_33041 = ((inst_33039) || (inst_33040));
var state_33074__$1 = (function (){var statearr_33109 = state_33074;
(statearr_33109[(10)] = inst_33038__$1);

return statearr_33109;
})();
if(cljs.core.truth_(inst_33041)){
var statearr_33114_34293 = state_33074__$1;
(statearr_33114_34293[(1)] = (8));

} else {
var statearr_33115_34296 = state_33074__$1;
(statearr_33115_34296[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33075 === (14))){
var inst_33067 = (state_33074[(2)]);
var inst_33068 = cljs.core.async.close_BANG_(out);
var state_33074__$1 = (function (){var statearr_33117 = state_33074;
(statearr_33117[(13)] = inst_33067);

return statearr_33117;
})();
var statearr_33123_34299 = state_33074__$1;
(statearr_33123_34299[(2)] = inst_33068);

(statearr_33123_34299[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33075 === (10))){
var inst_33056 = (state_33074[(2)]);
var state_33074__$1 = state_33074;
var statearr_33124_34300 = state_33074__$1;
(statearr_33124_34300[(2)] = inst_33056);

(statearr_33124_34300[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33075 === (8))){
var inst_33032 = (state_33074[(9)]);
var inst_33028 = (state_33074[(7)]);
var inst_33038 = (state_33074[(10)]);
var inst_33043 = inst_33028.push(inst_33032);
var tmp33116 = inst_33028;
var inst_33028__$1 = tmp33116;
var inst_33029 = inst_33038;
var state_33074__$1 = (function (){var statearr_33125 = state_33074;
(statearr_33125[(7)] = inst_33028__$1);

(statearr_33125[(8)] = inst_33029);

(statearr_33125[(14)] = inst_33043);

return statearr_33125;
})();
var statearr_33126_34301 = state_33074__$1;
(statearr_33126_34301[(2)] = null);

(statearr_33126_34301[(1)] = (2));


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
});})(c__30662__auto___34266,out))
;
return ((function (switch__30351__auto__,c__30662__auto___34266,out){
return (function() {
var cljs$core$async$state_machine__30352__auto__ = null;
var cljs$core$async$state_machine__30352__auto____0 = (function (){
var statearr_33127 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33127[(0)] = cljs$core$async$state_machine__30352__auto__);

(statearr_33127[(1)] = (1));

return statearr_33127;
});
var cljs$core$async$state_machine__30352__auto____1 = (function (state_33074){
while(true){
var ret_value__30353__auto__ = (function (){try{while(true){
var result__30354__auto__ = switch__30351__auto__(state_33074);
if(cljs.core.keyword_identical_QMARK_(result__30354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30354__auto__;
}
break;
}
}catch (e33128){if((e33128 instanceof Object)){
var ex__30355__auto__ = e33128;
var statearr_33129_34302 = state_33074;
(statearr_33129_34302[(5)] = ex__30355__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33074);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33128;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34303 = state_33074;
state_33074 = G__34303;
continue;
} else {
return ret_value__30353__auto__;
}
break;
}
});
cljs$core$async$state_machine__30352__auto__ = function(state_33074){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30352__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30352__auto____1.call(this,state_33074);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30352__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30352__auto____0;
cljs$core$async$state_machine__30352__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30352__auto____1;
return cljs$core$async$state_machine__30352__auto__;
})()
;})(switch__30351__auto__,c__30662__auto___34266,out))
})();
var state__30664__auto__ = (function (){var statearr_33130 = (f__30663__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30663__auto__.cljs$core$IFn$_invoke$arity$0() : f__30663__auto__.call(null));
(statearr_33130[(6)] = c__30662__auto___34266);

return statearr_33130;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30664__auto__);
});})(c__30662__auto___34266,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=cljs.core.async.js.map
