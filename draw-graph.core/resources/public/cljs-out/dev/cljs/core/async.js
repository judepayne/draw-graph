// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__27708 = arguments.length;
switch (G__27708) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27709 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27709 = (function (f,blockable,meta27710){
this.f = f;
this.blockable = blockable;
this.meta27710 = meta27710;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27709.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27711,meta27710__$1){
var self__ = this;
var _27711__$1 = this;
return (new cljs.core.async.t_cljs$core$async27709(self__.f,self__.blockable,meta27710__$1));
});

cljs.core.async.t_cljs$core$async27709.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27711){
var self__ = this;
var _27711__$1 = this;
return self__.meta27710;
});

cljs.core.async.t_cljs$core$async27709.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27709.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27709.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async27709.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async27709.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta27710], null);
});

cljs.core.async.t_cljs$core$async27709.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27709.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27709";

cljs.core.async.t_cljs$core$async27709.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async27709");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27709.
 */
cljs.core.async.__GT_t_cljs$core$async27709 = (function cljs$core$async$__GT_t_cljs$core$async27709(f__$1,blockable__$1,meta27710){
return (new cljs.core.async.t_cljs$core$async27709(f__$1,blockable__$1,meta27710));
});

}

return (new cljs.core.async.t_cljs$core$async27709(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__27715 = arguments.length;
switch (G__27715) {
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
var G__27718 = arguments.length;
switch (G__27718) {
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
var G__27721 = arguments.length;
switch (G__27721) {
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
var val_27723 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_27723) : fn1.call(null,val_27723));
} else {
cljs.core.async.impl.dispatch.run(((function (val_27723,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_27723) : fn1.call(null,val_27723));
});})(val_27723,ret))
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
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__27725 = arguments.length;
switch (G__27725) {
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
var n__4607__auto___27727 = n;
var x_27728 = (0);
while(true){
if((x_27728 < n__4607__auto___27727)){
(a[x_27728] = (0));

var G__27729 = (x_27728 + (1));
x_27728 = G__27729;
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

var G__27730 = (i + (1));
i = G__27730;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27731 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27731 = (function (flag,meta27732){
this.flag = flag;
this.meta27732 = meta27732;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27731.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27733,meta27732__$1){
var self__ = this;
var _27733__$1 = this;
return (new cljs.core.async.t_cljs$core$async27731(self__.flag,meta27732__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async27731.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27733){
var self__ = this;
var _27733__$1 = this;
return self__.meta27732;
});})(flag))
;

cljs.core.async.t_cljs$core$async27731.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27731.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async27731.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27731.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27731.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta27732], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async27731.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27731.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27731";

cljs.core.async.t_cljs$core$async27731.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async27731");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27731.
 */
cljs.core.async.__GT_t_cljs$core$async27731 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27731(flag__$1,meta27732){
return (new cljs.core.async.t_cljs$core$async27731(flag__$1,meta27732));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async27731(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27734 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27734 = (function (flag,cb,meta27735){
this.flag = flag;
this.cb = cb;
this.meta27735 = meta27735;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27734.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27736,meta27735__$1){
var self__ = this;
var _27736__$1 = this;
return (new cljs.core.async.t_cljs$core$async27734(self__.flag,self__.cb,meta27735__$1));
});

cljs.core.async.t_cljs$core$async27734.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27736){
var self__ = this;
var _27736__$1 = this;
return self__.meta27735;
});

cljs.core.async.t_cljs$core$async27734.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27734.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async27734.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27734.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async27734.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta27735], null);
});

cljs.core.async.t_cljs$core$async27734.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27734.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27734";

cljs.core.async.t_cljs$core$async27734.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async27734");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27734.
 */
cljs.core.async.__GT_t_cljs$core$async27734 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27734(flag__$1,cb__$1,meta27735){
return (new cljs.core.async.t_cljs$core$async27734(flag__$1,cb__$1,meta27735));
});

}

return (new cljs.core.async.t_cljs$core$async27734(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27737_SHARP_){
var G__27739 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27737_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__27739) : fret.call(null,G__27739));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27738_SHARP_){
var G__27740 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27738_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__27740) : fret.call(null,G__27740));
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
var G__27741 = (i + (1));
i = G__27741;
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
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__5720__auto__ = (function (){var and__4120__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4120__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
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
var len__4730__auto___27747 = arguments.length;
var i__4731__auto___27748 = (0);
while(true){
if((i__4731__auto___27748 < len__4730__auto___27747)){
args__4736__auto__.push((arguments[i__4731__auto___27748]));

var G__27749 = (i__4731__auto___27748 + (1));
i__4731__auto___27748 = G__27749;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27744){
var map__27745 = p__27744;
var map__27745__$1 = (((((!((map__27745 == null))))?(((((map__27745.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27745.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27745):map__27745);
var opts = map__27745__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27742){
var G__27743 = cljs.core.first(seq27742);
var seq27742__$1 = cljs.core.next(seq27742);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27743,seq27742__$1);
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
var G__27751 = arguments.length;
switch (G__27751) {
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
var c__25780__auto___27797 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25780__auto___27797){
return (function (){
var f__25781__auto__ = (function (){var switch__25589__auto__ = ((function (c__25780__auto___27797){
return (function (state_27775){
var state_val_27776 = (state_27775[(1)]);
if((state_val_27776 === (7))){
var inst_27771 = (state_27775[(2)]);
var state_27775__$1 = state_27775;
var statearr_27777_27798 = state_27775__$1;
(statearr_27777_27798[(2)] = inst_27771);

(statearr_27777_27798[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27776 === (1))){
var state_27775__$1 = state_27775;
var statearr_27778_27799 = state_27775__$1;
(statearr_27778_27799[(2)] = null);

(statearr_27778_27799[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27776 === (4))){
var inst_27754 = (state_27775[(7)]);
var inst_27754__$1 = (state_27775[(2)]);
var inst_27755 = (inst_27754__$1 == null);
var state_27775__$1 = (function (){var statearr_27779 = state_27775;
(statearr_27779[(7)] = inst_27754__$1);

return statearr_27779;
})();
if(cljs.core.truth_(inst_27755)){
var statearr_27780_27800 = state_27775__$1;
(statearr_27780_27800[(1)] = (5));

} else {
var statearr_27781_27801 = state_27775__$1;
(statearr_27781_27801[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27776 === (13))){
var state_27775__$1 = state_27775;
var statearr_27782_27802 = state_27775__$1;
(statearr_27782_27802[(2)] = null);

(statearr_27782_27802[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27776 === (6))){
var inst_27754 = (state_27775[(7)]);
var state_27775__$1 = state_27775;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27775__$1,(11),to,inst_27754);
} else {
if((state_val_27776 === (3))){
var inst_27773 = (state_27775[(2)]);
var state_27775__$1 = state_27775;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27775__$1,inst_27773);
} else {
if((state_val_27776 === (12))){
var state_27775__$1 = state_27775;
var statearr_27783_27803 = state_27775__$1;
(statearr_27783_27803[(2)] = null);

(statearr_27783_27803[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27776 === (2))){
var state_27775__$1 = state_27775;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27775__$1,(4),from);
} else {
if((state_val_27776 === (11))){
var inst_27764 = (state_27775[(2)]);
var state_27775__$1 = state_27775;
if(cljs.core.truth_(inst_27764)){
var statearr_27784_27804 = state_27775__$1;
(statearr_27784_27804[(1)] = (12));

} else {
var statearr_27785_27805 = state_27775__$1;
(statearr_27785_27805[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27776 === (9))){
var state_27775__$1 = state_27775;
var statearr_27786_27806 = state_27775__$1;
(statearr_27786_27806[(2)] = null);

(statearr_27786_27806[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27776 === (5))){
var state_27775__$1 = state_27775;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27787_27807 = state_27775__$1;
(statearr_27787_27807[(1)] = (8));

} else {
var statearr_27788_27808 = state_27775__$1;
(statearr_27788_27808[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27776 === (14))){
var inst_27769 = (state_27775[(2)]);
var state_27775__$1 = state_27775;
var statearr_27789_27809 = state_27775__$1;
(statearr_27789_27809[(2)] = inst_27769);

(statearr_27789_27809[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27776 === (10))){
var inst_27761 = (state_27775[(2)]);
var state_27775__$1 = state_27775;
var statearr_27790_27810 = state_27775__$1;
(statearr_27790_27810[(2)] = inst_27761);

(statearr_27790_27810[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27776 === (8))){
var inst_27758 = cljs.core.async.close_BANG_(to);
var state_27775__$1 = state_27775;
var statearr_27791_27811 = state_27775__$1;
(statearr_27791_27811[(2)] = inst_27758);

(statearr_27791_27811[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__25780__auto___27797))
;
return ((function (switch__25589__auto__,c__25780__auto___27797){
return (function() {
var cljs$core$async$state_machine__25590__auto__ = null;
var cljs$core$async$state_machine__25590__auto____0 = (function (){
var statearr_27792 = [null,null,null,null,null,null,null,null];
(statearr_27792[(0)] = cljs$core$async$state_machine__25590__auto__);

(statearr_27792[(1)] = (1));

return statearr_27792;
});
var cljs$core$async$state_machine__25590__auto____1 = (function (state_27775){
while(true){
var ret_value__25591__auto__ = (function (){try{while(true){
var result__25592__auto__ = switch__25589__auto__(state_27775);
if(cljs.core.keyword_identical_QMARK_(result__25592__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__25592__auto__;
}
break;
}
}catch (e27793){if((e27793 instanceof Object)){
var ex__25593__auto__ = e27793;
var statearr_27794_27812 = state_27775;
(statearr_27794_27812[(5)] = ex__25593__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27775);

return cljs.core.cst$kw$recur;
} else {
throw e27793;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25591__auto__,cljs.core.cst$kw$recur)){
var G__27813 = state_27775;
state_27775 = G__27813;
continue;
} else {
return ret_value__25591__auto__;
}
break;
}
});
cljs$core$async$state_machine__25590__auto__ = function(state_27775){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25590__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25590__auto____1.call(this,state_27775);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25590__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25590__auto____0;
cljs$core$async$state_machine__25590__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25590__auto____1;
return cljs$core$async$state_machine__25590__auto__;
})()
;})(switch__25589__auto__,c__25780__auto___27797))
})();
var state__25782__auto__ = (function (){var statearr_27795 = (f__25781__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25781__auto__.cljs$core$IFn$_invoke$arity$0() : f__25781__auto__.call(null));
(statearr_27795[(6)] = c__25780__auto___27797);

return statearr_27795;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25782__auto__);
});})(c__25780__auto___27797))
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
return (function (p__27814){
var vec__27815 = p__27814;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27815,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27815,(1),null);
var job = vec__27815;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__25780__auto___27986 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25780__auto___27986,res,vec__27815,v,p,job,jobs,results){
return (function (){
var f__25781__auto__ = (function (){var switch__25589__auto__ = ((function (c__25780__auto___27986,res,vec__27815,v,p,job,jobs,results){
return (function (state_27822){
var state_val_27823 = (state_27822[(1)]);
if((state_val_27823 === (1))){
var state_27822__$1 = state_27822;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27822__$1,(2),res,v);
} else {
if((state_val_27823 === (2))){
var inst_27819 = (state_27822[(2)]);
var inst_27820 = cljs.core.async.close_BANG_(res);
var state_27822__$1 = (function (){var statearr_27824 = state_27822;
(statearr_27824[(7)] = inst_27819);

return statearr_27824;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_27822__$1,inst_27820);
} else {
return null;
}
}
});})(c__25780__auto___27986,res,vec__27815,v,p,job,jobs,results))
;
return ((function (switch__25589__auto__,c__25780__auto___27986,res,vec__27815,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25590__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25590__auto____0 = (function (){
var statearr_27825 = [null,null,null,null,null,null,null,null];
(statearr_27825[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25590__auto__);

(statearr_27825[(1)] = (1));

return statearr_27825;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25590__auto____1 = (function (state_27822){
while(true){
var ret_value__25591__auto__ = (function (){try{while(true){
var result__25592__auto__ = switch__25589__auto__(state_27822);
if(cljs.core.keyword_identical_QMARK_(result__25592__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__25592__auto__;
}
break;
}
}catch (e27826){if((e27826 instanceof Object)){
var ex__25593__auto__ = e27826;
var statearr_27827_27987 = state_27822;
(statearr_27827_27987[(5)] = ex__25593__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27822);

return cljs.core.cst$kw$recur;
} else {
throw e27826;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25591__auto__,cljs.core.cst$kw$recur)){
var G__27988 = state_27822;
state_27822 = G__27988;
continue;
} else {
return ret_value__25591__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25590__auto__ = function(state_27822){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25590__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25590__auto____1.call(this,state_27822);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25590__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25590__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25590__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25590__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25590__auto__;
})()
;})(switch__25589__auto__,c__25780__auto___27986,res,vec__27815,v,p,job,jobs,results))
})();
var state__25782__auto__ = (function (){var statearr_27828 = (f__25781__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25781__auto__.cljs$core$IFn$_invoke$arity$0() : f__25781__auto__.call(null));
(statearr_27828[(6)] = c__25780__auto___27986);

return statearr_27828;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25782__auto__);
});})(c__25780__auto___27986,res,vec__27815,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__27829){
var vec__27830 = p__27829;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27830,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27830,(1),null);
var job = vec__27830;
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
var n__4607__auto___27989 = n;
var __27990 = (0);
while(true){
if((__27990 < n__4607__auto___27989)){
var G__27833_27991 = type;
var G__27833_27992__$1 = (((G__27833_27991 instanceof cljs.core.Keyword))?G__27833_27991.fqn:null);
switch (G__27833_27992__$1) {
case "compute":
var c__25780__auto___27994 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__27990,c__25780__auto___27994,G__27833_27991,G__27833_27992__$1,n__4607__auto___27989,jobs,results,process,async){
return (function (){
var f__25781__auto__ = (function (){var switch__25589__auto__ = ((function (__27990,c__25780__auto___27994,G__27833_27991,G__27833_27992__$1,n__4607__auto___27989,jobs,results,process,async){
return (function (state_27846){
var state_val_27847 = (state_27846[(1)]);
if((state_val_27847 === (1))){
var state_27846__$1 = state_27846;
var statearr_27848_27995 = state_27846__$1;
(statearr_27848_27995[(2)] = null);

(statearr_27848_27995[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27847 === (2))){
var state_27846__$1 = state_27846;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27846__$1,(4),jobs);
} else {
if((state_val_27847 === (3))){
var inst_27844 = (state_27846[(2)]);
var state_27846__$1 = state_27846;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27846__$1,inst_27844);
} else {
if((state_val_27847 === (4))){
var inst_27836 = (state_27846[(2)]);
var inst_27837 = process(inst_27836);
var state_27846__$1 = state_27846;
if(cljs.core.truth_(inst_27837)){
var statearr_27849_27996 = state_27846__$1;
(statearr_27849_27996[(1)] = (5));

} else {
var statearr_27850_27997 = state_27846__$1;
(statearr_27850_27997[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27847 === (5))){
var state_27846__$1 = state_27846;
var statearr_27851_27998 = state_27846__$1;
(statearr_27851_27998[(2)] = null);

(statearr_27851_27998[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27847 === (6))){
var state_27846__$1 = state_27846;
var statearr_27852_27999 = state_27846__$1;
(statearr_27852_27999[(2)] = null);

(statearr_27852_27999[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27847 === (7))){
var inst_27842 = (state_27846[(2)]);
var state_27846__$1 = state_27846;
var statearr_27853_28000 = state_27846__$1;
(statearr_27853_28000[(2)] = inst_27842);

(statearr_27853_28000[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__27990,c__25780__auto___27994,G__27833_27991,G__27833_27992__$1,n__4607__auto___27989,jobs,results,process,async))
;
return ((function (__27990,switch__25589__auto__,c__25780__auto___27994,G__27833_27991,G__27833_27992__$1,n__4607__auto___27989,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25590__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25590__auto____0 = (function (){
var statearr_27854 = [null,null,null,null,null,null,null];
(statearr_27854[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25590__auto__);

(statearr_27854[(1)] = (1));

return statearr_27854;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25590__auto____1 = (function (state_27846){
while(true){
var ret_value__25591__auto__ = (function (){try{while(true){
var result__25592__auto__ = switch__25589__auto__(state_27846);
if(cljs.core.keyword_identical_QMARK_(result__25592__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__25592__auto__;
}
break;
}
}catch (e27855){if((e27855 instanceof Object)){
var ex__25593__auto__ = e27855;
var statearr_27856_28001 = state_27846;
(statearr_27856_28001[(5)] = ex__25593__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27846);

return cljs.core.cst$kw$recur;
} else {
throw e27855;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25591__auto__,cljs.core.cst$kw$recur)){
var G__28002 = state_27846;
state_27846 = G__28002;
continue;
} else {
return ret_value__25591__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25590__auto__ = function(state_27846){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25590__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25590__auto____1.call(this,state_27846);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25590__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25590__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25590__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25590__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25590__auto__;
})()
;})(__27990,switch__25589__auto__,c__25780__auto___27994,G__27833_27991,G__27833_27992__$1,n__4607__auto___27989,jobs,results,process,async))
})();
var state__25782__auto__ = (function (){var statearr_27857 = (f__25781__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25781__auto__.cljs$core$IFn$_invoke$arity$0() : f__25781__auto__.call(null));
(statearr_27857[(6)] = c__25780__auto___27994);

return statearr_27857;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25782__auto__);
});})(__27990,c__25780__auto___27994,G__27833_27991,G__27833_27992__$1,n__4607__auto___27989,jobs,results,process,async))
);


break;
case "async":
var c__25780__auto___28003 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__27990,c__25780__auto___28003,G__27833_27991,G__27833_27992__$1,n__4607__auto___27989,jobs,results,process,async){
return (function (){
var f__25781__auto__ = (function (){var switch__25589__auto__ = ((function (__27990,c__25780__auto___28003,G__27833_27991,G__27833_27992__$1,n__4607__auto___27989,jobs,results,process,async){
return (function (state_27870){
var state_val_27871 = (state_27870[(1)]);
if((state_val_27871 === (1))){
var state_27870__$1 = state_27870;
var statearr_27872_28004 = state_27870__$1;
(statearr_27872_28004[(2)] = null);

(statearr_27872_28004[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27871 === (2))){
var state_27870__$1 = state_27870;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27870__$1,(4),jobs);
} else {
if((state_val_27871 === (3))){
var inst_27868 = (state_27870[(2)]);
var state_27870__$1 = state_27870;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27870__$1,inst_27868);
} else {
if((state_val_27871 === (4))){
var inst_27860 = (state_27870[(2)]);
var inst_27861 = async(inst_27860);
var state_27870__$1 = state_27870;
if(cljs.core.truth_(inst_27861)){
var statearr_27873_28005 = state_27870__$1;
(statearr_27873_28005[(1)] = (5));

} else {
var statearr_27874_28006 = state_27870__$1;
(statearr_27874_28006[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27871 === (5))){
var state_27870__$1 = state_27870;
var statearr_27875_28007 = state_27870__$1;
(statearr_27875_28007[(2)] = null);

(statearr_27875_28007[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27871 === (6))){
var state_27870__$1 = state_27870;
var statearr_27876_28008 = state_27870__$1;
(statearr_27876_28008[(2)] = null);

(statearr_27876_28008[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27871 === (7))){
var inst_27866 = (state_27870[(2)]);
var state_27870__$1 = state_27870;
var statearr_27877_28009 = state_27870__$1;
(statearr_27877_28009[(2)] = inst_27866);

(statearr_27877_28009[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__27990,c__25780__auto___28003,G__27833_27991,G__27833_27992__$1,n__4607__auto___27989,jobs,results,process,async))
;
return ((function (__27990,switch__25589__auto__,c__25780__auto___28003,G__27833_27991,G__27833_27992__$1,n__4607__auto___27989,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25590__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25590__auto____0 = (function (){
var statearr_27878 = [null,null,null,null,null,null,null];
(statearr_27878[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25590__auto__);

(statearr_27878[(1)] = (1));

return statearr_27878;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25590__auto____1 = (function (state_27870){
while(true){
var ret_value__25591__auto__ = (function (){try{while(true){
var result__25592__auto__ = switch__25589__auto__(state_27870);
if(cljs.core.keyword_identical_QMARK_(result__25592__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__25592__auto__;
}
break;
}
}catch (e27879){if((e27879 instanceof Object)){
var ex__25593__auto__ = e27879;
var statearr_27880_28010 = state_27870;
(statearr_27880_28010[(5)] = ex__25593__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27870);

return cljs.core.cst$kw$recur;
} else {
throw e27879;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25591__auto__,cljs.core.cst$kw$recur)){
var G__28011 = state_27870;
state_27870 = G__28011;
continue;
} else {
return ret_value__25591__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25590__auto__ = function(state_27870){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25590__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25590__auto____1.call(this,state_27870);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25590__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25590__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25590__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25590__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25590__auto__;
})()
;})(__27990,switch__25589__auto__,c__25780__auto___28003,G__27833_27991,G__27833_27992__$1,n__4607__auto___27989,jobs,results,process,async))
})();
var state__25782__auto__ = (function (){var statearr_27881 = (f__25781__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25781__auto__.cljs$core$IFn$_invoke$arity$0() : f__25781__auto__.call(null));
(statearr_27881[(6)] = c__25780__auto___28003);

return statearr_27881;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25782__auto__);
});})(__27990,c__25780__auto___28003,G__27833_27991,G__27833_27992__$1,n__4607__auto___27989,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27833_27992__$1)].join('')));

}

var G__28012 = (__27990 + (1));
__27990 = G__28012;
continue;
} else {
}
break;
}

var c__25780__auto___28013 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25780__auto___28013,jobs,results,process,async){
return (function (){
var f__25781__auto__ = (function (){var switch__25589__auto__ = ((function (c__25780__auto___28013,jobs,results,process,async){
return (function (state_27903){
var state_val_27904 = (state_27903[(1)]);
if((state_val_27904 === (7))){
var inst_27899 = (state_27903[(2)]);
var state_27903__$1 = state_27903;
var statearr_27905_28014 = state_27903__$1;
(statearr_27905_28014[(2)] = inst_27899);

(statearr_27905_28014[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27904 === (1))){
var state_27903__$1 = state_27903;
var statearr_27906_28015 = state_27903__$1;
(statearr_27906_28015[(2)] = null);

(statearr_27906_28015[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27904 === (4))){
var inst_27884 = (state_27903[(7)]);
var inst_27884__$1 = (state_27903[(2)]);
var inst_27885 = (inst_27884__$1 == null);
var state_27903__$1 = (function (){var statearr_27907 = state_27903;
(statearr_27907[(7)] = inst_27884__$1);

return statearr_27907;
})();
if(cljs.core.truth_(inst_27885)){
var statearr_27908_28016 = state_27903__$1;
(statearr_27908_28016[(1)] = (5));

} else {
var statearr_27909_28017 = state_27903__$1;
(statearr_27909_28017[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27904 === (6))){
var inst_27889 = (state_27903[(8)]);
var inst_27884 = (state_27903[(7)]);
var inst_27889__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_27890 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27891 = [inst_27884,inst_27889__$1];
var inst_27892 = (new cljs.core.PersistentVector(null,2,(5),inst_27890,inst_27891,null));
var state_27903__$1 = (function (){var statearr_27910 = state_27903;
(statearr_27910[(8)] = inst_27889__$1);

return statearr_27910;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27903__$1,(8),jobs,inst_27892);
} else {
if((state_val_27904 === (3))){
var inst_27901 = (state_27903[(2)]);
var state_27903__$1 = state_27903;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27903__$1,inst_27901);
} else {
if((state_val_27904 === (2))){
var state_27903__$1 = state_27903;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27903__$1,(4),from);
} else {
if((state_val_27904 === (9))){
var inst_27896 = (state_27903[(2)]);
var state_27903__$1 = (function (){var statearr_27911 = state_27903;
(statearr_27911[(9)] = inst_27896);

return statearr_27911;
})();
var statearr_27912_28018 = state_27903__$1;
(statearr_27912_28018[(2)] = null);

(statearr_27912_28018[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27904 === (5))){
var inst_27887 = cljs.core.async.close_BANG_(jobs);
var state_27903__$1 = state_27903;
var statearr_27913_28019 = state_27903__$1;
(statearr_27913_28019[(2)] = inst_27887);

(statearr_27913_28019[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27904 === (8))){
var inst_27889 = (state_27903[(8)]);
var inst_27894 = (state_27903[(2)]);
var state_27903__$1 = (function (){var statearr_27914 = state_27903;
(statearr_27914[(10)] = inst_27894);

return statearr_27914;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27903__$1,(9),results,inst_27889);
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
});})(c__25780__auto___28013,jobs,results,process,async))
;
return ((function (switch__25589__auto__,c__25780__auto___28013,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25590__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25590__auto____0 = (function (){
var statearr_27915 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27915[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25590__auto__);

(statearr_27915[(1)] = (1));

return statearr_27915;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25590__auto____1 = (function (state_27903){
while(true){
var ret_value__25591__auto__ = (function (){try{while(true){
var result__25592__auto__ = switch__25589__auto__(state_27903);
if(cljs.core.keyword_identical_QMARK_(result__25592__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__25592__auto__;
}
break;
}
}catch (e27916){if((e27916 instanceof Object)){
var ex__25593__auto__ = e27916;
var statearr_27917_28020 = state_27903;
(statearr_27917_28020[(5)] = ex__25593__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27903);

return cljs.core.cst$kw$recur;
} else {
throw e27916;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25591__auto__,cljs.core.cst$kw$recur)){
var G__28021 = state_27903;
state_27903 = G__28021;
continue;
} else {
return ret_value__25591__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25590__auto__ = function(state_27903){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25590__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25590__auto____1.call(this,state_27903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25590__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25590__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25590__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25590__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25590__auto__;
})()
;})(switch__25589__auto__,c__25780__auto___28013,jobs,results,process,async))
})();
var state__25782__auto__ = (function (){var statearr_27918 = (f__25781__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25781__auto__.cljs$core$IFn$_invoke$arity$0() : f__25781__auto__.call(null));
(statearr_27918[(6)] = c__25780__auto___28013);

return statearr_27918;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25782__auto__);
});})(c__25780__auto___28013,jobs,results,process,async))
);


var c__25780__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25780__auto__,jobs,results,process,async){
return (function (){
var f__25781__auto__ = (function (){var switch__25589__auto__ = ((function (c__25780__auto__,jobs,results,process,async){
return (function (state_27956){
var state_val_27957 = (state_27956[(1)]);
if((state_val_27957 === (7))){
var inst_27952 = (state_27956[(2)]);
var state_27956__$1 = state_27956;
var statearr_27958_28022 = state_27956__$1;
(statearr_27958_28022[(2)] = inst_27952);

(statearr_27958_28022[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27957 === (20))){
var state_27956__$1 = state_27956;
var statearr_27959_28023 = state_27956__$1;
(statearr_27959_28023[(2)] = null);

(statearr_27959_28023[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27957 === (1))){
var state_27956__$1 = state_27956;
var statearr_27960_28024 = state_27956__$1;
(statearr_27960_28024[(2)] = null);

(statearr_27960_28024[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27957 === (4))){
var inst_27921 = (state_27956[(7)]);
var inst_27921__$1 = (state_27956[(2)]);
var inst_27922 = (inst_27921__$1 == null);
var state_27956__$1 = (function (){var statearr_27961 = state_27956;
(statearr_27961[(7)] = inst_27921__$1);

return statearr_27961;
})();
if(cljs.core.truth_(inst_27922)){
var statearr_27962_28025 = state_27956__$1;
(statearr_27962_28025[(1)] = (5));

} else {
var statearr_27963_28026 = state_27956__$1;
(statearr_27963_28026[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27957 === (15))){
var inst_27934 = (state_27956[(8)]);
var state_27956__$1 = state_27956;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27956__$1,(18),to,inst_27934);
} else {
if((state_val_27957 === (21))){
var inst_27947 = (state_27956[(2)]);
var state_27956__$1 = state_27956;
var statearr_27964_28027 = state_27956__$1;
(statearr_27964_28027[(2)] = inst_27947);

(statearr_27964_28027[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27957 === (13))){
var inst_27949 = (state_27956[(2)]);
var state_27956__$1 = (function (){var statearr_27965 = state_27956;
(statearr_27965[(9)] = inst_27949);

return statearr_27965;
})();
var statearr_27966_28028 = state_27956__$1;
(statearr_27966_28028[(2)] = null);

(statearr_27966_28028[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27957 === (6))){
var inst_27921 = (state_27956[(7)]);
var state_27956__$1 = state_27956;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27956__$1,(11),inst_27921);
} else {
if((state_val_27957 === (17))){
var inst_27942 = (state_27956[(2)]);
var state_27956__$1 = state_27956;
if(cljs.core.truth_(inst_27942)){
var statearr_27967_28029 = state_27956__$1;
(statearr_27967_28029[(1)] = (19));

} else {
var statearr_27968_28030 = state_27956__$1;
(statearr_27968_28030[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27957 === (3))){
var inst_27954 = (state_27956[(2)]);
var state_27956__$1 = state_27956;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27956__$1,inst_27954);
} else {
if((state_val_27957 === (12))){
var inst_27931 = (state_27956[(10)]);
var state_27956__$1 = state_27956;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27956__$1,(14),inst_27931);
} else {
if((state_val_27957 === (2))){
var state_27956__$1 = state_27956;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27956__$1,(4),results);
} else {
if((state_val_27957 === (19))){
var state_27956__$1 = state_27956;
var statearr_27969_28031 = state_27956__$1;
(statearr_27969_28031[(2)] = null);

(statearr_27969_28031[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27957 === (11))){
var inst_27931 = (state_27956[(2)]);
var state_27956__$1 = (function (){var statearr_27970 = state_27956;
(statearr_27970[(10)] = inst_27931);

return statearr_27970;
})();
var statearr_27971_28032 = state_27956__$1;
(statearr_27971_28032[(2)] = null);

(statearr_27971_28032[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27957 === (9))){
var state_27956__$1 = state_27956;
var statearr_27972_28033 = state_27956__$1;
(statearr_27972_28033[(2)] = null);

(statearr_27972_28033[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27957 === (5))){
var state_27956__$1 = state_27956;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27973_28034 = state_27956__$1;
(statearr_27973_28034[(1)] = (8));

} else {
var statearr_27974_28035 = state_27956__$1;
(statearr_27974_28035[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27957 === (14))){
var inst_27934 = (state_27956[(8)]);
var inst_27936 = (state_27956[(11)]);
var inst_27934__$1 = (state_27956[(2)]);
var inst_27935 = (inst_27934__$1 == null);
var inst_27936__$1 = cljs.core.not(inst_27935);
var state_27956__$1 = (function (){var statearr_27975 = state_27956;
(statearr_27975[(8)] = inst_27934__$1);

(statearr_27975[(11)] = inst_27936__$1);

return statearr_27975;
})();
if(inst_27936__$1){
var statearr_27976_28036 = state_27956__$1;
(statearr_27976_28036[(1)] = (15));

} else {
var statearr_27977_28037 = state_27956__$1;
(statearr_27977_28037[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27957 === (16))){
var inst_27936 = (state_27956[(11)]);
var state_27956__$1 = state_27956;
var statearr_27978_28038 = state_27956__$1;
(statearr_27978_28038[(2)] = inst_27936);

(statearr_27978_28038[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27957 === (10))){
var inst_27928 = (state_27956[(2)]);
var state_27956__$1 = state_27956;
var statearr_27979_28039 = state_27956__$1;
(statearr_27979_28039[(2)] = inst_27928);

(statearr_27979_28039[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27957 === (18))){
var inst_27939 = (state_27956[(2)]);
var state_27956__$1 = state_27956;
var statearr_27980_28040 = state_27956__$1;
(statearr_27980_28040[(2)] = inst_27939);

(statearr_27980_28040[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27957 === (8))){
var inst_27925 = cljs.core.async.close_BANG_(to);
var state_27956__$1 = state_27956;
var statearr_27981_28041 = state_27956__$1;
(statearr_27981_28041[(2)] = inst_27925);

(statearr_27981_28041[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__25780__auto__,jobs,results,process,async))
;
return ((function (switch__25589__auto__,c__25780__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25590__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25590__auto____0 = (function (){
var statearr_27982 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27982[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25590__auto__);

(statearr_27982[(1)] = (1));

return statearr_27982;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25590__auto____1 = (function (state_27956){
while(true){
var ret_value__25591__auto__ = (function (){try{while(true){
var result__25592__auto__ = switch__25589__auto__(state_27956);
if(cljs.core.keyword_identical_QMARK_(result__25592__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__25592__auto__;
}
break;
}
}catch (e27983){if((e27983 instanceof Object)){
var ex__25593__auto__ = e27983;
var statearr_27984_28042 = state_27956;
(statearr_27984_28042[(5)] = ex__25593__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27956);

return cljs.core.cst$kw$recur;
} else {
throw e27983;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25591__auto__,cljs.core.cst$kw$recur)){
var G__28043 = state_27956;
state_27956 = G__28043;
continue;
} else {
return ret_value__25591__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25590__auto__ = function(state_27956){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25590__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25590__auto____1.call(this,state_27956);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25590__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25590__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25590__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25590__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25590__auto__;
})()
;})(switch__25589__auto__,c__25780__auto__,jobs,results,process,async))
})();
var state__25782__auto__ = (function (){var statearr_27985 = (f__25781__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25781__auto__.cljs$core$IFn$_invoke$arity$0() : f__25781__auto__.call(null));
(statearr_27985[(6)] = c__25780__auto__);

return statearr_27985;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25782__auto__);
});})(c__25780__auto__,jobs,results,process,async))
);

return c__25780__auto__;
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
var G__28045 = arguments.length;
switch (G__28045) {
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
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
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
var G__28048 = arguments.length;
switch (G__28048) {
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
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
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
var G__28051 = arguments.length;
switch (G__28051) {
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
var c__25780__auto___28100 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25780__auto___28100,tc,fc){
return (function (){
var f__25781__auto__ = (function (){var switch__25589__auto__ = ((function (c__25780__auto___28100,tc,fc){
return (function (state_28077){
var state_val_28078 = (state_28077[(1)]);
if((state_val_28078 === (7))){
var inst_28073 = (state_28077[(2)]);
var state_28077__$1 = state_28077;
var statearr_28079_28101 = state_28077__$1;
(statearr_28079_28101[(2)] = inst_28073);

(statearr_28079_28101[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28078 === (1))){
var state_28077__$1 = state_28077;
var statearr_28080_28102 = state_28077__$1;
(statearr_28080_28102[(2)] = null);

(statearr_28080_28102[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28078 === (4))){
var inst_28054 = (state_28077[(7)]);
var inst_28054__$1 = (state_28077[(2)]);
var inst_28055 = (inst_28054__$1 == null);
var state_28077__$1 = (function (){var statearr_28081 = state_28077;
(statearr_28081[(7)] = inst_28054__$1);

return statearr_28081;
})();
if(cljs.core.truth_(inst_28055)){
var statearr_28082_28103 = state_28077__$1;
(statearr_28082_28103[(1)] = (5));

} else {
var statearr_28083_28104 = state_28077__$1;
(statearr_28083_28104[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28078 === (13))){
var state_28077__$1 = state_28077;
var statearr_28084_28105 = state_28077__$1;
(statearr_28084_28105[(2)] = null);

(statearr_28084_28105[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28078 === (6))){
var inst_28054 = (state_28077[(7)]);
var inst_28060 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_28054) : p.call(null,inst_28054));
var state_28077__$1 = state_28077;
if(cljs.core.truth_(inst_28060)){
var statearr_28085_28106 = state_28077__$1;
(statearr_28085_28106[(1)] = (9));

} else {
var statearr_28086_28107 = state_28077__$1;
(statearr_28086_28107[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28078 === (3))){
var inst_28075 = (state_28077[(2)]);
var state_28077__$1 = state_28077;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28077__$1,inst_28075);
} else {
if((state_val_28078 === (12))){
var state_28077__$1 = state_28077;
var statearr_28087_28108 = state_28077__$1;
(statearr_28087_28108[(2)] = null);

(statearr_28087_28108[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28078 === (2))){
var state_28077__$1 = state_28077;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28077__$1,(4),ch);
} else {
if((state_val_28078 === (11))){
var inst_28054 = (state_28077[(7)]);
var inst_28064 = (state_28077[(2)]);
var state_28077__$1 = state_28077;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28077__$1,(8),inst_28064,inst_28054);
} else {
if((state_val_28078 === (9))){
var state_28077__$1 = state_28077;
var statearr_28088_28109 = state_28077__$1;
(statearr_28088_28109[(2)] = tc);

(statearr_28088_28109[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28078 === (5))){
var inst_28057 = cljs.core.async.close_BANG_(tc);
var inst_28058 = cljs.core.async.close_BANG_(fc);
var state_28077__$1 = (function (){var statearr_28089 = state_28077;
(statearr_28089[(8)] = inst_28057);

return statearr_28089;
})();
var statearr_28090_28110 = state_28077__$1;
(statearr_28090_28110[(2)] = inst_28058);

(statearr_28090_28110[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28078 === (14))){
var inst_28071 = (state_28077[(2)]);
var state_28077__$1 = state_28077;
var statearr_28091_28111 = state_28077__$1;
(statearr_28091_28111[(2)] = inst_28071);

(statearr_28091_28111[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28078 === (10))){
var state_28077__$1 = state_28077;
var statearr_28092_28112 = state_28077__$1;
(statearr_28092_28112[(2)] = fc);

(statearr_28092_28112[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28078 === (8))){
var inst_28066 = (state_28077[(2)]);
var state_28077__$1 = state_28077;
if(cljs.core.truth_(inst_28066)){
var statearr_28093_28113 = state_28077__$1;
(statearr_28093_28113[(1)] = (12));

} else {
var statearr_28094_28114 = state_28077__$1;
(statearr_28094_28114[(1)] = (13));

}

return cljs.core.cst$kw$recur;
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
});})(c__25780__auto___28100,tc,fc))
;
return ((function (switch__25589__auto__,c__25780__auto___28100,tc,fc){
return (function() {
var cljs$core$async$state_machine__25590__auto__ = null;
var cljs$core$async$state_machine__25590__auto____0 = (function (){
var statearr_28095 = [null,null,null,null,null,null,null,null,null];
(statearr_28095[(0)] = cljs$core$async$state_machine__25590__auto__);

(statearr_28095[(1)] = (1));

return statearr_28095;
});
var cljs$core$async$state_machine__25590__auto____1 = (function (state_28077){
while(true){
var ret_value__25591__auto__ = (function (){try{while(true){
var result__25592__auto__ = switch__25589__auto__(state_28077);
if(cljs.core.keyword_identical_QMARK_(result__25592__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__25592__auto__;
}
break;
}
}catch (e28096){if((e28096 instanceof Object)){
var ex__25593__auto__ = e28096;
var statearr_28097_28115 = state_28077;
(statearr_28097_28115[(5)] = ex__25593__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28077);

return cljs.core.cst$kw$recur;
} else {
throw e28096;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25591__auto__,cljs.core.cst$kw$recur)){
var G__28116 = state_28077;
state_28077 = G__28116;
continue;
} else {
return ret_value__25591__auto__;
}
break;
}
});
cljs$core$async$state_machine__25590__auto__ = function(state_28077){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25590__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25590__auto____1.call(this,state_28077);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25590__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25590__auto____0;
cljs$core$async$state_machine__25590__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25590__auto____1;
return cljs$core$async$state_machine__25590__auto__;
})()
;})(switch__25589__auto__,c__25780__auto___28100,tc,fc))
})();
var state__25782__auto__ = (function (){var statearr_28098 = (f__25781__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25781__auto__.cljs$core$IFn$_invoke$arity$0() : f__25781__auto__.call(null));
(statearr_28098[(6)] = c__25780__auto___28100);

return statearr_28098;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25782__auto__);
});})(c__25780__auto___28100,tc,fc))
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
var c__25780__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25780__auto__){
return (function (){
var f__25781__auto__ = (function (){var switch__25589__auto__ = ((function (c__25780__auto__){
return (function (state_28137){
var state_val_28138 = (state_28137[(1)]);
if((state_val_28138 === (7))){
var inst_28133 = (state_28137[(2)]);
var state_28137__$1 = state_28137;
var statearr_28139_28157 = state_28137__$1;
(statearr_28139_28157[(2)] = inst_28133);

(statearr_28139_28157[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28138 === (1))){
var inst_28117 = init;
var state_28137__$1 = (function (){var statearr_28140 = state_28137;
(statearr_28140[(7)] = inst_28117);

return statearr_28140;
})();
var statearr_28141_28158 = state_28137__$1;
(statearr_28141_28158[(2)] = null);

(statearr_28141_28158[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28138 === (4))){
var inst_28120 = (state_28137[(8)]);
var inst_28120__$1 = (state_28137[(2)]);
var inst_28121 = (inst_28120__$1 == null);
var state_28137__$1 = (function (){var statearr_28142 = state_28137;
(statearr_28142[(8)] = inst_28120__$1);

return statearr_28142;
})();
if(cljs.core.truth_(inst_28121)){
var statearr_28143_28159 = state_28137__$1;
(statearr_28143_28159[(1)] = (5));

} else {
var statearr_28144_28160 = state_28137__$1;
(statearr_28144_28160[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28138 === (6))){
var inst_28120 = (state_28137[(8)]);
var inst_28124 = (state_28137[(9)]);
var inst_28117 = (state_28137[(7)]);
var inst_28124__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_28117,inst_28120) : f.call(null,inst_28117,inst_28120));
var inst_28125 = cljs.core.reduced_QMARK_(inst_28124__$1);
var state_28137__$1 = (function (){var statearr_28145 = state_28137;
(statearr_28145[(9)] = inst_28124__$1);

return statearr_28145;
})();
if(inst_28125){
var statearr_28146_28161 = state_28137__$1;
(statearr_28146_28161[(1)] = (8));

} else {
var statearr_28147_28162 = state_28137__$1;
(statearr_28147_28162[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28138 === (3))){
var inst_28135 = (state_28137[(2)]);
var state_28137__$1 = state_28137;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28137__$1,inst_28135);
} else {
if((state_val_28138 === (2))){
var state_28137__$1 = state_28137;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28137__$1,(4),ch);
} else {
if((state_val_28138 === (9))){
var inst_28124 = (state_28137[(9)]);
var inst_28117 = inst_28124;
var state_28137__$1 = (function (){var statearr_28148 = state_28137;
(statearr_28148[(7)] = inst_28117);

return statearr_28148;
})();
var statearr_28149_28163 = state_28137__$1;
(statearr_28149_28163[(2)] = null);

(statearr_28149_28163[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28138 === (5))){
var inst_28117 = (state_28137[(7)]);
var state_28137__$1 = state_28137;
var statearr_28150_28164 = state_28137__$1;
(statearr_28150_28164[(2)] = inst_28117);

(statearr_28150_28164[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28138 === (10))){
var inst_28131 = (state_28137[(2)]);
var state_28137__$1 = state_28137;
var statearr_28151_28165 = state_28137__$1;
(statearr_28151_28165[(2)] = inst_28131);

(statearr_28151_28165[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28138 === (8))){
var inst_28124 = (state_28137[(9)]);
var inst_28127 = cljs.core.deref(inst_28124);
var state_28137__$1 = state_28137;
var statearr_28152_28166 = state_28137__$1;
(statearr_28152_28166[(2)] = inst_28127);

(statearr_28152_28166[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__25780__auto__))
;
return ((function (switch__25589__auto__,c__25780__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__25590__auto__ = null;
var cljs$core$async$reduce_$_state_machine__25590__auto____0 = (function (){
var statearr_28153 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28153[(0)] = cljs$core$async$reduce_$_state_machine__25590__auto__);

(statearr_28153[(1)] = (1));

return statearr_28153;
});
var cljs$core$async$reduce_$_state_machine__25590__auto____1 = (function (state_28137){
while(true){
var ret_value__25591__auto__ = (function (){try{while(true){
var result__25592__auto__ = switch__25589__auto__(state_28137);
if(cljs.core.keyword_identical_QMARK_(result__25592__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__25592__auto__;
}
break;
}
}catch (e28154){if((e28154 instanceof Object)){
var ex__25593__auto__ = e28154;
var statearr_28155_28167 = state_28137;
(statearr_28155_28167[(5)] = ex__25593__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28137);

return cljs.core.cst$kw$recur;
} else {
throw e28154;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25591__auto__,cljs.core.cst$kw$recur)){
var G__28168 = state_28137;
state_28137 = G__28168;
continue;
} else {
return ret_value__25591__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__25590__auto__ = function(state_28137){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__25590__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__25590__auto____1.call(this,state_28137);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__25590__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__25590__auto____0;
cljs$core$async$reduce_$_state_machine__25590__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__25590__auto____1;
return cljs$core$async$reduce_$_state_machine__25590__auto__;
})()
;})(switch__25589__auto__,c__25780__auto__))
})();
var state__25782__auto__ = (function (){var statearr_28156 = (f__25781__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25781__auto__.cljs$core$IFn$_invoke$arity$0() : f__25781__auto__.call(null));
(statearr_28156[(6)] = c__25780__auto__);

return statearr_28156;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25782__auto__);
});})(c__25780__auto__))
);

return c__25780__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__25780__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25780__auto__,f__$1){
return (function (){
var f__25781__auto__ = (function (){var switch__25589__auto__ = ((function (c__25780__auto__,f__$1){
return (function (state_28174){
var state_val_28175 = (state_28174[(1)]);
if((state_val_28175 === (1))){
var inst_28169 = cljs.core.async.reduce(f__$1,init,ch);
var state_28174__$1 = state_28174;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28174__$1,(2),inst_28169);
} else {
if((state_val_28175 === (2))){
var inst_28171 = (state_28174[(2)]);
var inst_28172 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_28171) : f__$1.call(null,inst_28171));
var state_28174__$1 = state_28174;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28174__$1,inst_28172);
} else {
return null;
}
}
});})(c__25780__auto__,f__$1))
;
return ((function (switch__25589__auto__,c__25780__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__25590__auto__ = null;
var cljs$core$async$transduce_$_state_machine__25590__auto____0 = (function (){
var statearr_28176 = [null,null,null,null,null,null,null];
(statearr_28176[(0)] = cljs$core$async$transduce_$_state_machine__25590__auto__);

(statearr_28176[(1)] = (1));

return statearr_28176;
});
var cljs$core$async$transduce_$_state_machine__25590__auto____1 = (function (state_28174){
while(true){
var ret_value__25591__auto__ = (function (){try{while(true){
var result__25592__auto__ = switch__25589__auto__(state_28174);
if(cljs.core.keyword_identical_QMARK_(result__25592__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__25592__auto__;
}
break;
}
}catch (e28177){if((e28177 instanceof Object)){
var ex__25593__auto__ = e28177;
var statearr_28178_28180 = state_28174;
(statearr_28178_28180[(5)] = ex__25593__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28174);

return cljs.core.cst$kw$recur;
} else {
throw e28177;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25591__auto__,cljs.core.cst$kw$recur)){
var G__28181 = state_28174;
state_28174 = G__28181;
continue;
} else {
return ret_value__25591__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__25590__auto__ = function(state_28174){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__25590__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__25590__auto____1.call(this,state_28174);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__25590__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__25590__auto____0;
cljs$core$async$transduce_$_state_machine__25590__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__25590__auto____1;
return cljs$core$async$transduce_$_state_machine__25590__auto__;
})()
;})(switch__25589__auto__,c__25780__auto__,f__$1))
})();
var state__25782__auto__ = (function (){var statearr_28179 = (f__25781__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25781__auto__.cljs$core$IFn$_invoke$arity$0() : f__25781__auto__.call(null));
(statearr_28179[(6)] = c__25780__auto__);

return statearr_28179;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25782__auto__);
});})(c__25780__auto__,f__$1))
);

return c__25780__auto__;
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
var G__28183 = arguments.length;
switch (G__28183) {
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
var c__25780__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25780__auto__){
return (function (){
var f__25781__auto__ = (function (){var switch__25589__auto__ = ((function (c__25780__auto__){
return (function (state_28208){
var state_val_28209 = (state_28208[(1)]);
if((state_val_28209 === (7))){
var inst_28190 = (state_28208[(2)]);
var state_28208__$1 = state_28208;
var statearr_28210_28231 = state_28208__$1;
(statearr_28210_28231[(2)] = inst_28190);

(statearr_28210_28231[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28209 === (1))){
var inst_28184 = cljs.core.seq(coll);
var inst_28185 = inst_28184;
var state_28208__$1 = (function (){var statearr_28211 = state_28208;
(statearr_28211[(7)] = inst_28185);

return statearr_28211;
})();
var statearr_28212_28232 = state_28208__$1;
(statearr_28212_28232[(2)] = null);

(statearr_28212_28232[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28209 === (4))){
var inst_28185 = (state_28208[(7)]);
var inst_28188 = cljs.core.first(inst_28185);
var state_28208__$1 = state_28208;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28208__$1,(7),ch,inst_28188);
} else {
if((state_val_28209 === (13))){
var inst_28202 = (state_28208[(2)]);
var state_28208__$1 = state_28208;
var statearr_28213_28233 = state_28208__$1;
(statearr_28213_28233[(2)] = inst_28202);

(statearr_28213_28233[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28209 === (6))){
var inst_28193 = (state_28208[(2)]);
var state_28208__$1 = state_28208;
if(cljs.core.truth_(inst_28193)){
var statearr_28214_28234 = state_28208__$1;
(statearr_28214_28234[(1)] = (8));

} else {
var statearr_28215_28235 = state_28208__$1;
(statearr_28215_28235[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28209 === (3))){
var inst_28206 = (state_28208[(2)]);
var state_28208__$1 = state_28208;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28208__$1,inst_28206);
} else {
if((state_val_28209 === (12))){
var state_28208__$1 = state_28208;
var statearr_28216_28236 = state_28208__$1;
(statearr_28216_28236[(2)] = null);

(statearr_28216_28236[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28209 === (2))){
var inst_28185 = (state_28208[(7)]);
var state_28208__$1 = state_28208;
if(cljs.core.truth_(inst_28185)){
var statearr_28217_28237 = state_28208__$1;
(statearr_28217_28237[(1)] = (4));

} else {
var statearr_28218_28238 = state_28208__$1;
(statearr_28218_28238[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28209 === (11))){
var inst_28199 = cljs.core.async.close_BANG_(ch);
var state_28208__$1 = state_28208;
var statearr_28219_28239 = state_28208__$1;
(statearr_28219_28239[(2)] = inst_28199);

(statearr_28219_28239[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28209 === (9))){
var state_28208__$1 = state_28208;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28220_28240 = state_28208__$1;
(statearr_28220_28240[(1)] = (11));

} else {
var statearr_28221_28241 = state_28208__$1;
(statearr_28221_28241[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28209 === (5))){
var inst_28185 = (state_28208[(7)]);
var state_28208__$1 = state_28208;
var statearr_28222_28242 = state_28208__$1;
(statearr_28222_28242[(2)] = inst_28185);

(statearr_28222_28242[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28209 === (10))){
var inst_28204 = (state_28208[(2)]);
var state_28208__$1 = state_28208;
var statearr_28223_28243 = state_28208__$1;
(statearr_28223_28243[(2)] = inst_28204);

(statearr_28223_28243[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28209 === (8))){
var inst_28185 = (state_28208[(7)]);
var inst_28195 = cljs.core.next(inst_28185);
var inst_28185__$1 = inst_28195;
var state_28208__$1 = (function (){var statearr_28224 = state_28208;
(statearr_28224[(7)] = inst_28185__$1);

return statearr_28224;
})();
var statearr_28225_28244 = state_28208__$1;
(statearr_28225_28244[(2)] = null);

(statearr_28225_28244[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__25780__auto__))
;
return ((function (switch__25589__auto__,c__25780__auto__){
return (function() {
var cljs$core$async$state_machine__25590__auto__ = null;
var cljs$core$async$state_machine__25590__auto____0 = (function (){
var statearr_28226 = [null,null,null,null,null,null,null,null];
(statearr_28226[(0)] = cljs$core$async$state_machine__25590__auto__);

(statearr_28226[(1)] = (1));

return statearr_28226;
});
var cljs$core$async$state_machine__25590__auto____1 = (function (state_28208){
while(true){
var ret_value__25591__auto__ = (function (){try{while(true){
var result__25592__auto__ = switch__25589__auto__(state_28208);
if(cljs.core.keyword_identical_QMARK_(result__25592__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__25592__auto__;
}
break;
}
}catch (e28227){if((e28227 instanceof Object)){
var ex__25593__auto__ = e28227;
var statearr_28228_28245 = state_28208;
(statearr_28228_28245[(5)] = ex__25593__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28208);

return cljs.core.cst$kw$recur;
} else {
throw e28227;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25591__auto__,cljs.core.cst$kw$recur)){
var G__28246 = state_28208;
state_28208 = G__28246;
continue;
} else {
return ret_value__25591__auto__;
}
break;
}
});
cljs$core$async$state_machine__25590__auto__ = function(state_28208){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25590__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25590__auto____1.call(this,state_28208);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25590__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25590__auto____0;
cljs$core$async$state_machine__25590__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25590__auto____1;
return cljs$core$async$state_machine__25590__auto__;
})()
;})(switch__25589__auto__,c__25780__auto__))
})();
var state__25782__auto__ = (function (){var statearr_28229 = (f__25781__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25781__auto__.cljs$core$IFn$_invoke$arity$0() : f__25781__auto__.call(null));
(statearr_28229[(6)] = c__25780__auto__);

return statearr_28229;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25782__auto__);
});})(c__25780__auto__))
);

return c__25780__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28247 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28247 = (function (ch,cs,meta28248){
this.ch = ch;
this.cs = cs;
this.meta28248 = meta28248;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28247.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28249,meta28248__$1){
var self__ = this;
var _28249__$1 = this;
return (new cljs.core.async.t_cljs$core$async28247(self__.ch,self__.cs,meta28248__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async28247.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28249){
var self__ = this;
var _28249__$1 = this;
return self__.meta28248;
});})(cs))
;

cljs.core.async.t_cljs$core$async28247.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28247.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async28247.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28247.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28247.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28247.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28247.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta28248], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async28247.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28247.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28247";

cljs.core.async.t_cljs$core$async28247.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async28247");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28247.
 */
cljs.core.async.__GT_t_cljs$core$async28247 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async28247(ch__$1,cs__$1,meta28248){
return (new cljs.core.async.t_cljs$core$async28247(ch__$1,cs__$1,meta28248));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async28247(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__25780__auto___28469 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25780__auto___28469,cs,m,dchan,dctr,done){
return (function (){
var f__25781__auto__ = (function (){var switch__25589__auto__ = ((function (c__25780__auto___28469,cs,m,dchan,dctr,done){
return (function (state_28384){
var state_val_28385 = (state_28384[(1)]);
if((state_val_28385 === (7))){
var inst_28380 = (state_28384[(2)]);
var state_28384__$1 = state_28384;
var statearr_28386_28470 = state_28384__$1;
(statearr_28386_28470[(2)] = inst_28380);

(statearr_28386_28470[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28385 === (20))){
var inst_28283 = (state_28384[(7)]);
var inst_28295 = cljs.core.first(inst_28283);
var inst_28296 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28295,(0),null);
var inst_28297 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28295,(1),null);
var state_28384__$1 = (function (){var statearr_28387 = state_28384;
(statearr_28387[(8)] = inst_28296);

return statearr_28387;
})();
if(cljs.core.truth_(inst_28297)){
var statearr_28388_28471 = state_28384__$1;
(statearr_28388_28471[(1)] = (22));

} else {
var statearr_28389_28472 = state_28384__$1;
(statearr_28389_28472[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28385 === (27))){
var inst_28327 = (state_28384[(9)]);
var inst_28252 = (state_28384[(10)]);
var inst_28325 = (state_28384[(11)]);
var inst_28332 = (state_28384[(12)]);
var inst_28332__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_28325,inst_28327);
var inst_28333 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_28332__$1,inst_28252,done);
var state_28384__$1 = (function (){var statearr_28390 = state_28384;
(statearr_28390[(12)] = inst_28332__$1);

return statearr_28390;
})();
if(cljs.core.truth_(inst_28333)){
var statearr_28391_28473 = state_28384__$1;
(statearr_28391_28473[(1)] = (30));

} else {
var statearr_28392_28474 = state_28384__$1;
(statearr_28392_28474[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28385 === (1))){
var state_28384__$1 = state_28384;
var statearr_28393_28475 = state_28384__$1;
(statearr_28393_28475[(2)] = null);

(statearr_28393_28475[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28385 === (24))){
var inst_28283 = (state_28384[(7)]);
var inst_28302 = (state_28384[(2)]);
var inst_28303 = cljs.core.next(inst_28283);
var inst_28261 = inst_28303;
var inst_28262 = null;
var inst_28263 = (0);
var inst_28264 = (0);
var state_28384__$1 = (function (){var statearr_28394 = state_28384;
(statearr_28394[(13)] = inst_28261);

(statearr_28394[(14)] = inst_28302);

(statearr_28394[(15)] = inst_28262);

(statearr_28394[(16)] = inst_28263);

(statearr_28394[(17)] = inst_28264);

return statearr_28394;
})();
var statearr_28395_28476 = state_28384__$1;
(statearr_28395_28476[(2)] = null);

(statearr_28395_28476[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28385 === (39))){
var state_28384__$1 = state_28384;
var statearr_28399_28477 = state_28384__$1;
(statearr_28399_28477[(2)] = null);

(statearr_28399_28477[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28385 === (4))){
var inst_28252 = (state_28384[(10)]);
var inst_28252__$1 = (state_28384[(2)]);
var inst_28253 = (inst_28252__$1 == null);
var state_28384__$1 = (function (){var statearr_28400 = state_28384;
(statearr_28400[(10)] = inst_28252__$1);

return statearr_28400;
})();
if(cljs.core.truth_(inst_28253)){
var statearr_28401_28478 = state_28384__$1;
(statearr_28401_28478[(1)] = (5));

} else {
var statearr_28402_28479 = state_28384__$1;
(statearr_28402_28479[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28385 === (15))){
var inst_28261 = (state_28384[(13)]);
var inst_28262 = (state_28384[(15)]);
var inst_28263 = (state_28384[(16)]);
var inst_28264 = (state_28384[(17)]);
var inst_28279 = (state_28384[(2)]);
var inst_28280 = (inst_28264 + (1));
var tmp28396 = inst_28261;
var tmp28397 = inst_28262;
var tmp28398 = inst_28263;
var inst_28261__$1 = tmp28396;
var inst_28262__$1 = tmp28397;
var inst_28263__$1 = tmp28398;
var inst_28264__$1 = inst_28280;
var state_28384__$1 = (function (){var statearr_28403 = state_28384;
(statearr_28403[(13)] = inst_28261__$1);

(statearr_28403[(18)] = inst_28279);

(statearr_28403[(15)] = inst_28262__$1);

(statearr_28403[(16)] = inst_28263__$1);

(statearr_28403[(17)] = inst_28264__$1);

return statearr_28403;
})();
var statearr_28404_28480 = state_28384__$1;
(statearr_28404_28480[(2)] = null);

(statearr_28404_28480[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28385 === (21))){
var inst_28306 = (state_28384[(2)]);
var state_28384__$1 = state_28384;
var statearr_28408_28481 = state_28384__$1;
(statearr_28408_28481[(2)] = inst_28306);

(statearr_28408_28481[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28385 === (31))){
var inst_28332 = (state_28384[(12)]);
var inst_28336 = done(null);
var inst_28337 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_28332);
var state_28384__$1 = (function (){var statearr_28409 = state_28384;
(statearr_28409[(19)] = inst_28336);

return statearr_28409;
})();
var statearr_28410_28482 = state_28384__$1;
(statearr_28410_28482[(2)] = inst_28337);

(statearr_28410_28482[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28385 === (32))){
var inst_28327 = (state_28384[(9)]);
var inst_28326 = (state_28384[(20)]);
var inst_28325 = (state_28384[(11)]);
var inst_28324 = (state_28384[(21)]);
var inst_28339 = (state_28384[(2)]);
var inst_28340 = (inst_28327 + (1));
var tmp28405 = inst_28326;
var tmp28406 = inst_28325;
var tmp28407 = inst_28324;
var inst_28324__$1 = tmp28407;
var inst_28325__$1 = tmp28406;
var inst_28326__$1 = tmp28405;
var inst_28327__$1 = inst_28340;
var state_28384__$1 = (function (){var statearr_28411 = state_28384;
(statearr_28411[(9)] = inst_28327__$1);

(statearr_28411[(20)] = inst_28326__$1);

(statearr_28411[(22)] = inst_28339);

(statearr_28411[(11)] = inst_28325__$1);

(statearr_28411[(21)] = inst_28324__$1);

return statearr_28411;
})();
var statearr_28412_28483 = state_28384__$1;
(statearr_28412_28483[(2)] = null);

(statearr_28412_28483[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28385 === (40))){
var inst_28352 = (state_28384[(23)]);
var inst_28356 = done(null);
var inst_28357 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_28352);
var state_28384__$1 = (function (){var statearr_28413 = state_28384;
(statearr_28413[(24)] = inst_28356);

return statearr_28413;
})();
var statearr_28414_28484 = state_28384__$1;
(statearr_28414_28484[(2)] = inst_28357);

(statearr_28414_28484[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28385 === (33))){
var inst_28343 = (state_28384[(25)]);
var inst_28345 = cljs.core.chunked_seq_QMARK_(inst_28343);
var state_28384__$1 = state_28384;
if(inst_28345){
var statearr_28415_28485 = state_28384__$1;
(statearr_28415_28485[(1)] = (36));

} else {
var statearr_28416_28486 = state_28384__$1;
(statearr_28416_28486[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28385 === (13))){
var inst_28273 = (state_28384[(26)]);
var inst_28276 = cljs.core.async.close_BANG_(inst_28273);
var state_28384__$1 = state_28384;
var statearr_28417_28487 = state_28384__$1;
(statearr_28417_28487[(2)] = inst_28276);

(statearr_28417_28487[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28385 === (22))){
var inst_28296 = (state_28384[(8)]);
var inst_28299 = cljs.core.async.close_BANG_(inst_28296);
var state_28384__$1 = state_28384;
var statearr_28418_28488 = state_28384__$1;
(statearr_28418_28488[(2)] = inst_28299);

(statearr_28418_28488[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28385 === (36))){
var inst_28343 = (state_28384[(25)]);
var inst_28347 = cljs.core.chunk_first(inst_28343);
var inst_28348 = cljs.core.chunk_rest(inst_28343);
var inst_28349 = cljs.core.count(inst_28347);
var inst_28324 = inst_28348;
var inst_28325 = inst_28347;
var inst_28326 = inst_28349;
var inst_28327 = (0);
var state_28384__$1 = (function (){var statearr_28419 = state_28384;
(statearr_28419[(9)] = inst_28327);

(statearr_28419[(20)] = inst_28326);

(statearr_28419[(11)] = inst_28325);

(statearr_28419[(21)] = inst_28324);

return statearr_28419;
})();
var statearr_28420_28489 = state_28384__$1;
(statearr_28420_28489[(2)] = null);

(statearr_28420_28489[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28385 === (41))){
var inst_28343 = (state_28384[(25)]);
var inst_28359 = (state_28384[(2)]);
var inst_28360 = cljs.core.next(inst_28343);
var inst_28324 = inst_28360;
var inst_28325 = null;
var inst_28326 = (0);
var inst_28327 = (0);
var state_28384__$1 = (function (){var statearr_28421 = state_28384;
(statearr_28421[(9)] = inst_28327);

(statearr_28421[(20)] = inst_28326);

(statearr_28421[(11)] = inst_28325);

(statearr_28421[(21)] = inst_28324);

(statearr_28421[(27)] = inst_28359);

return statearr_28421;
})();
var statearr_28422_28490 = state_28384__$1;
(statearr_28422_28490[(2)] = null);

(statearr_28422_28490[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28385 === (43))){
var state_28384__$1 = state_28384;
var statearr_28423_28491 = state_28384__$1;
(statearr_28423_28491[(2)] = null);

(statearr_28423_28491[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28385 === (29))){
var inst_28368 = (state_28384[(2)]);
var state_28384__$1 = state_28384;
var statearr_28424_28492 = state_28384__$1;
(statearr_28424_28492[(2)] = inst_28368);

(statearr_28424_28492[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28385 === (44))){
var inst_28377 = (state_28384[(2)]);
var state_28384__$1 = (function (){var statearr_28425 = state_28384;
(statearr_28425[(28)] = inst_28377);

return statearr_28425;
})();
var statearr_28426_28493 = state_28384__$1;
(statearr_28426_28493[(2)] = null);

(statearr_28426_28493[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28385 === (6))){
var inst_28316 = (state_28384[(29)]);
var inst_28315 = cljs.core.deref(cs);
var inst_28316__$1 = cljs.core.keys(inst_28315);
var inst_28317 = cljs.core.count(inst_28316__$1);
var inst_28318 = cljs.core.reset_BANG_(dctr,inst_28317);
var inst_28323 = cljs.core.seq(inst_28316__$1);
var inst_28324 = inst_28323;
var inst_28325 = null;
var inst_28326 = (0);
var inst_28327 = (0);
var state_28384__$1 = (function (){var statearr_28427 = state_28384;
(statearr_28427[(9)] = inst_28327);

(statearr_28427[(30)] = inst_28318);

(statearr_28427[(20)] = inst_28326);

(statearr_28427[(29)] = inst_28316__$1);

(statearr_28427[(11)] = inst_28325);

(statearr_28427[(21)] = inst_28324);

return statearr_28427;
})();
var statearr_28428_28494 = state_28384__$1;
(statearr_28428_28494[(2)] = null);

(statearr_28428_28494[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28385 === (28))){
var inst_28324 = (state_28384[(21)]);
var inst_28343 = (state_28384[(25)]);
var inst_28343__$1 = cljs.core.seq(inst_28324);
var state_28384__$1 = (function (){var statearr_28429 = state_28384;
(statearr_28429[(25)] = inst_28343__$1);

return statearr_28429;
})();
if(inst_28343__$1){
var statearr_28430_28495 = state_28384__$1;
(statearr_28430_28495[(1)] = (33));

} else {
var statearr_28431_28496 = state_28384__$1;
(statearr_28431_28496[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28385 === (25))){
var inst_28327 = (state_28384[(9)]);
var inst_28326 = (state_28384[(20)]);
var inst_28329 = (inst_28327 < inst_28326);
var inst_28330 = inst_28329;
var state_28384__$1 = state_28384;
if(cljs.core.truth_(inst_28330)){
var statearr_28432_28497 = state_28384__$1;
(statearr_28432_28497[(1)] = (27));

} else {
var statearr_28433_28498 = state_28384__$1;
(statearr_28433_28498[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28385 === (34))){
var state_28384__$1 = state_28384;
var statearr_28434_28499 = state_28384__$1;
(statearr_28434_28499[(2)] = null);

(statearr_28434_28499[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28385 === (17))){
var state_28384__$1 = state_28384;
var statearr_28435_28500 = state_28384__$1;
(statearr_28435_28500[(2)] = null);

(statearr_28435_28500[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28385 === (3))){
var inst_28382 = (state_28384[(2)]);
var state_28384__$1 = state_28384;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28384__$1,inst_28382);
} else {
if((state_val_28385 === (12))){
var inst_28311 = (state_28384[(2)]);
var state_28384__$1 = state_28384;
var statearr_28436_28501 = state_28384__$1;
(statearr_28436_28501[(2)] = inst_28311);

(statearr_28436_28501[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28385 === (2))){
var state_28384__$1 = state_28384;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28384__$1,(4),ch);
} else {
if((state_val_28385 === (23))){
var state_28384__$1 = state_28384;
var statearr_28437_28502 = state_28384__$1;
(statearr_28437_28502[(2)] = null);

(statearr_28437_28502[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28385 === (35))){
var inst_28366 = (state_28384[(2)]);
var state_28384__$1 = state_28384;
var statearr_28438_28503 = state_28384__$1;
(statearr_28438_28503[(2)] = inst_28366);

(statearr_28438_28503[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28385 === (19))){
var inst_28283 = (state_28384[(7)]);
var inst_28287 = cljs.core.chunk_first(inst_28283);
var inst_28288 = cljs.core.chunk_rest(inst_28283);
var inst_28289 = cljs.core.count(inst_28287);
var inst_28261 = inst_28288;
var inst_28262 = inst_28287;
var inst_28263 = inst_28289;
var inst_28264 = (0);
var state_28384__$1 = (function (){var statearr_28439 = state_28384;
(statearr_28439[(13)] = inst_28261);

(statearr_28439[(15)] = inst_28262);

(statearr_28439[(16)] = inst_28263);

(statearr_28439[(17)] = inst_28264);

return statearr_28439;
})();
var statearr_28440_28504 = state_28384__$1;
(statearr_28440_28504[(2)] = null);

(statearr_28440_28504[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28385 === (11))){
var inst_28261 = (state_28384[(13)]);
var inst_28283 = (state_28384[(7)]);
var inst_28283__$1 = cljs.core.seq(inst_28261);
var state_28384__$1 = (function (){var statearr_28441 = state_28384;
(statearr_28441[(7)] = inst_28283__$1);

return statearr_28441;
})();
if(inst_28283__$1){
var statearr_28442_28505 = state_28384__$1;
(statearr_28442_28505[(1)] = (16));

} else {
var statearr_28443_28506 = state_28384__$1;
(statearr_28443_28506[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28385 === (9))){
var inst_28313 = (state_28384[(2)]);
var state_28384__$1 = state_28384;
var statearr_28444_28507 = state_28384__$1;
(statearr_28444_28507[(2)] = inst_28313);

(statearr_28444_28507[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28385 === (5))){
var inst_28259 = cljs.core.deref(cs);
var inst_28260 = cljs.core.seq(inst_28259);
var inst_28261 = inst_28260;
var inst_28262 = null;
var inst_28263 = (0);
var inst_28264 = (0);
var state_28384__$1 = (function (){var statearr_28445 = state_28384;
(statearr_28445[(13)] = inst_28261);

(statearr_28445[(15)] = inst_28262);

(statearr_28445[(16)] = inst_28263);

(statearr_28445[(17)] = inst_28264);

return statearr_28445;
})();
var statearr_28446_28508 = state_28384__$1;
(statearr_28446_28508[(2)] = null);

(statearr_28446_28508[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28385 === (14))){
var state_28384__$1 = state_28384;
var statearr_28447_28509 = state_28384__$1;
(statearr_28447_28509[(2)] = null);

(statearr_28447_28509[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28385 === (45))){
var inst_28374 = (state_28384[(2)]);
var state_28384__$1 = state_28384;
var statearr_28448_28510 = state_28384__$1;
(statearr_28448_28510[(2)] = inst_28374);

(statearr_28448_28510[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28385 === (26))){
var inst_28316 = (state_28384[(29)]);
var inst_28370 = (state_28384[(2)]);
var inst_28371 = cljs.core.seq(inst_28316);
var state_28384__$1 = (function (){var statearr_28449 = state_28384;
(statearr_28449[(31)] = inst_28370);

return statearr_28449;
})();
if(inst_28371){
var statearr_28450_28511 = state_28384__$1;
(statearr_28450_28511[(1)] = (42));

} else {
var statearr_28451_28512 = state_28384__$1;
(statearr_28451_28512[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28385 === (16))){
var inst_28283 = (state_28384[(7)]);
var inst_28285 = cljs.core.chunked_seq_QMARK_(inst_28283);
var state_28384__$1 = state_28384;
if(inst_28285){
var statearr_28452_28513 = state_28384__$1;
(statearr_28452_28513[(1)] = (19));

} else {
var statearr_28453_28514 = state_28384__$1;
(statearr_28453_28514[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28385 === (38))){
var inst_28363 = (state_28384[(2)]);
var state_28384__$1 = state_28384;
var statearr_28454_28515 = state_28384__$1;
(statearr_28454_28515[(2)] = inst_28363);

(statearr_28454_28515[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28385 === (30))){
var state_28384__$1 = state_28384;
var statearr_28455_28516 = state_28384__$1;
(statearr_28455_28516[(2)] = null);

(statearr_28455_28516[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28385 === (10))){
var inst_28262 = (state_28384[(15)]);
var inst_28264 = (state_28384[(17)]);
var inst_28272 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_28262,inst_28264);
var inst_28273 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28272,(0),null);
var inst_28274 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28272,(1),null);
var state_28384__$1 = (function (){var statearr_28456 = state_28384;
(statearr_28456[(26)] = inst_28273);

return statearr_28456;
})();
if(cljs.core.truth_(inst_28274)){
var statearr_28457_28517 = state_28384__$1;
(statearr_28457_28517[(1)] = (13));

} else {
var statearr_28458_28518 = state_28384__$1;
(statearr_28458_28518[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28385 === (18))){
var inst_28309 = (state_28384[(2)]);
var state_28384__$1 = state_28384;
var statearr_28459_28519 = state_28384__$1;
(statearr_28459_28519[(2)] = inst_28309);

(statearr_28459_28519[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28385 === (42))){
var state_28384__$1 = state_28384;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28384__$1,(45),dchan);
} else {
if((state_val_28385 === (37))){
var inst_28252 = (state_28384[(10)]);
var inst_28352 = (state_28384[(23)]);
var inst_28343 = (state_28384[(25)]);
var inst_28352__$1 = cljs.core.first(inst_28343);
var inst_28353 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_28352__$1,inst_28252,done);
var state_28384__$1 = (function (){var statearr_28460 = state_28384;
(statearr_28460[(23)] = inst_28352__$1);

return statearr_28460;
})();
if(cljs.core.truth_(inst_28353)){
var statearr_28461_28520 = state_28384__$1;
(statearr_28461_28520[(1)] = (39));

} else {
var statearr_28462_28521 = state_28384__$1;
(statearr_28462_28521[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28385 === (8))){
var inst_28263 = (state_28384[(16)]);
var inst_28264 = (state_28384[(17)]);
var inst_28266 = (inst_28264 < inst_28263);
var inst_28267 = inst_28266;
var state_28384__$1 = state_28384;
if(cljs.core.truth_(inst_28267)){
var statearr_28463_28522 = state_28384__$1;
(statearr_28463_28522[(1)] = (10));

} else {
var statearr_28464_28523 = state_28384__$1;
(statearr_28464_28523[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
});})(c__25780__auto___28469,cs,m,dchan,dctr,done))
;
return ((function (switch__25589__auto__,c__25780__auto___28469,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__25590__auto__ = null;
var cljs$core$async$mult_$_state_machine__25590__auto____0 = (function (){
var statearr_28465 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28465[(0)] = cljs$core$async$mult_$_state_machine__25590__auto__);

(statearr_28465[(1)] = (1));

return statearr_28465;
});
var cljs$core$async$mult_$_state_machine__25590__auto____1 = (function (state_28384){
while(true){
var ret_value__25591__auto__ = (function (){try{while(true){
var result__25592__auto__ = switch__25589__auto__(state_28384);
if(cljs.core.keyword_identical_QMARK_(result__25592__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__25592__auto__;
}
break;
}
}catch (e28466){if((e28466 instanceof Object)){
var ex__25593__auto__ = e28466;
var statearr_28467_28524 = state_28384;
(statearr_28467_28524[(5)] = ex__25593__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28384);

return cljs.core.cst$kw$recur;
} else {
throw e28466;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25591__auto__,cljs.core.cst$kw$recur)){
var G__28525 = state_28384;
state_28384 = G__28525;
continue;
} else {
return ret_value__25591__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__25590__auto__ = function(state_28384){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__25590__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__25590__auto____1.call(this,state_28384);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__25590__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__25590__auto____0;
cljs$core$async$mult_$_state_machine__25590__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__25590__auto____1;
return cljs$core$async$mult_$_state_machine__25590__auto__;
})()
;})(switch__25589__auto__,c__25780__auto___28469,cs,m,dchan,dctr,done))
})();
var state__25782__auto__ = (function (){var statearr_28468 = (f__25781__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25781__auto__.cljs$core$IFn$_invoke$arity$0() : f__25781__auto__.call(null));
(statearr_28468[(6)] = c__25780__auto___28469);

return statearr_28468;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25782__auto__);
});})(c__25780__auto___28469,cs,m,dchan,dctr,done))
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
var G__28527 = arguments.length;
switch (G__28527) {
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
var len__4730__auto___28539 = arguments.length;
var i__4731__auto___28540 = (0);
while(true){
if((i__4731__auto___28540 < len__4730__auto___28539)){
args__4736__auto__.push((arguments[i__4731__auto___28540]));

var G__28541 = (i__4731__auto___28540 + (1));
i__4731__auto___28540 = G__28541;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28533){
var map__28534 = p__28533;
var map__28534__$1 = (((((!((map__28534 == null))))?(((((map__28534.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28534.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28534):map__28534);
var opts = map__28534__$1;
var statearr_28536_28542 = state;
(statearr_28536_28542[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts(((function (map__28534,map__28534__$1,opts){
return (function (val){
var statearr_28537_28543 = state;
(statearr_28537_28543[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__28534,map__28534__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_28538_28544 = state;
(statearr_28538_28544[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28529){
var G__28530 = cljs.core.first(seq28529);
var seq28529__$1 = cljs.core.next(seq28529);
var G__28531 = cljs.core.first(seq28529__$1);
var seq28529__$2 = cljs.core.next(seq28529__$1);
var G__28532 = cljs.core.first(seq28529__$2);
var seq28529__$3 = cljs.core.next(seq28529__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28530,G__28531,G__28532,seq28529__$3);
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
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$mute);
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
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28545 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28545 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta28546){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta28546 = meta28546;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28545.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28547,meta28546__$1){
var self__ = this;
var _28547__$1 = this;
return (new cljs.core.async.t_cljs$core$async28545(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta28546__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28545.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28547){
var self__ = this;
var _28547__$1 = this;
return self__.meta28546;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28545.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28545.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28545.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28545.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28545.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28545.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28545.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28545.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async28545.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$change,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$pick,cljs.core.cst$sym$cs,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$out,cljs.core.cst$sym$changed,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$meta28546], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28545.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28545.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28545";

cljs.core.async.t_cljs$core$async28545.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async28545");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28545.
 */
cljs.core.async.__GT_t_cljs$core$async28545 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async28545(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28546){
return (new cljs.core.async.t_cljs$core$async28545(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28546));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async28545(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__25780__auto___28709 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25780__auto___28709,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__25781__auto__ = (function (){var switch__25589__auto__ = ((function (c__25780__auto___28709,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_28649){
var state_val_28650 = (state_28649[(1)]);
if((state_val_28650 === (7))){
var inst_28564 = (state_28649[(2)]);
var state_28649__$1 = state_28649;
var statearr_28651_28710 = state_28649__$1;
(statearr_28651_28710[(2)] = inst_28564);

(statearr_28651_28710[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28650 === (20))){
var inst_28576 = (state_28649[(7)]);
var state_28649__$1 = state_28649;
var statearr_28652_28711 = state_28649__$1;
(statearr_28652_28711[(2)] = inst_28576);

(statearr_28652_28711[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28650 === (27))){
var state_28649__$1 = state_28649;
var statearr_28653_28712 = state_28649__$1;
(statearr_28653_28712[(2)] = null);

(statearr_28653_28712[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28650 === (1))){
var inst_28551 = (state_28649[(8)]);
var inst_28551__$1 = calc_state();
var inst_28553 = (inst_28551__$1 == null);
var inst_28554 = cljs.core.not(inst_28553);
var state_28649__$1 = (function (){var statearr_28654 = state_28649;
(statearr_28654[(8)] = inst_28551__$1);

return statearr_28654;
})();
if(inst_28554){
var statearr_28655_28713 = state_28649__$1;
(statearr_28655_28713[(1)] = (2));

} else {
var statearr_28656_28714 = state_28649__$1;
(statearr_28656_28714[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28650 === (24))){
var inst_28600 = (state_28649[(9)]);
var inst_28609 = (state_28649[(10)]);
var inst_28623 = (state_28649[(11)]);
var inst_28623__$1 = (inst_28600.cljs$core$IFn$_invoke$arity$1 ? inst_28600.cljs$core$IFn$_invoke$arity$1(inst_28609) : inst_28600.call(null,inst_28609));
var state_28649__$1 = (function (){var statearr_28657 = state_28649;
(statearr_28657[(11)] = inst_28623__$1);

return statearr_28657;
})();
if(cljs.core.truth_(inst_28623__$1)){
var statearr_28658_28715 = state_28649__$1;
(statearr_28658_28715[(1)] = (29));

} else {
var statearr_28659_28716 = state_28649__$1;
(statearr_28659_28716[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28650 === (4))){
var inst_28567 = (state_28649[(2)]);
var state_28649__$1 = state_28649;
if(cljs.core.truth_(inst_28567)){
var statearr_28660_28717 = state_28649__$1;
(statearr_28660_28717[(1)] = (8));

} else {
var statearr_28661_28718 = state_28649__$1;
(statearr_28661_28718[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28650 === (15))){
var inst_28594 = (state_28649[(2)]);
var state_28649__$1 = state_28649;
if(cljs.core.truth_(inst_28594)){
var statearr_28662_28719 = state_28649__$1;
(statearr_28662_28719[(1)] = (19));

} else {
var statearr_28663_28720 = state_28649__$1;
(statearr_28663_28720[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28650 === (21))){
var inst_28599 = (state_28649[(12)]);
var inst_28599__$1 = (state_28649[(2)]);
var inst_28600 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28599__$1,cljs.core.cst$kw$solos);
var inst_28601 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28599__$1,cljs.core.cst$kw$mutes);
var inst_28602 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28599__$1,cljs.core.cst$kw$reads);
var state_28649__$1 = (function (){var statearr_28664 = state_28649;
(statearr_28664[(9)] = inst_28600);

(statearr_28664[(13)] = inst_28601);

(statearr_28664[(12)] = inst_28599__$1);

return statearr_28664;
})();
return cljs.core.async.ioc_alts_BANG_(state_28649__$1,(22),inst_28602);
} else {
if((state_val_28650 === (31))){
var inst_28631 = (state_28649[(2)]);
var state_28649__$1 = state_28649;
if(cljs.core.truth_(inst_28631)){
var statearr_28665_28721 = state_28649__$1;
(statearr_28665_28721[(1)] = (32));

} else {
var statearr_28666_28722 = state_28649__$1;
(statearr_28666_28722[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28650 === (32))){
var inst_28608 = (state_28649[(14)]);
var state_28649__$1 = state_28649;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28649__$1,(35),out,inst_28608);
} else {
if((state_val_28650 === (33))){
var inst_28599 = (state_28649[(12)]);
var inst_28576 = inst_28599;
var state_28649__$1 = (function (){var statearr_28667 = state_28649;
(statearr_28667[(7)] = inst_28576);

return statearr_28667;
})();
var statearr_28668_28723 = state_28649__$1;
(statearr_28668_28723[(2)] = null);

(statearr_28668_28723[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28650 === (13))){
var inst_28576 = (state_28649[(7)]);
var inst_28583 = inst_28576.cljs$lang$protocol_mask$partition0$;
var inst_28584 = (inst_28583 & (64));
var inst_28585 = inst_28576.cljs$core$ISeq$;
var inst_28586 = (cljs.core.PROTOCOL_SENTINEL === inst_28585);
var inst_28587 = ((inst_28584) || (inst_28586));
var state_28649__$1 = state_28649;
if(cljs.core.truth_(inst_28587)){
var statearr_28669_28724 = state_28649__$1;
(statearr_28669_28724[(1)] = (16));

} else {
var statearr_28670_28725 = state_28649__$1;
(statearr_28670_28725[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28650 === (22))){
var inst_28608 = (state_28649[(14)]);
var inst_28609 = (state_28649[(10)]);
var inst_28607 = (state_28649[(2)]);
var inst_28608__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28607,(0),null);
var inst_28609__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28607,(1),null);
var inst_28610 = (inst_28608__$1 == null);
var inst_28611 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_28609__$1,change);
var inst_28612 = ((inst_28610) || (inst_28611));
var state_28649__$1 = (function (){var statearr_28671 = state_28649;
(statearr_28671[(14)] = inst_28608__$1);

(statearr_28671[(10)] = inst_28609__$1);

return statearr_28671;
})();
if(cljs.core.truth_(inst_28612)){
var statearr_28672_28726 = state_28649__$1;
(statearr_28672_28726[(1)] = (23));

} else {
var statearr_28673_28727 = state_28649__$1;
(statearr_28673_28727[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28650 === (36))){
var inst_28599 = (state_28649[(12)]);
var inst_28576 = inst_28599;
var state_28649__$1 = (function (){var statearr_28674 = state_28649;
(statearr_28674[(7)] = inst_28576);

return statearr_28674;
})();
var statearr_28675_28728 = state_28649__$1;
(statearr_28675_28728[(2)] = null);

(statearr_28675_28728[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28650 === (29))){
var inst_28623 = (state_28649[(11)]);
var state_28649__$1 = state_28649;
var statearr_28676_28729 = state_28649__$1;
(statearr_28676_28729[(2)] = inst_28623);

(statearr_28676_28729[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28650 === (6))){
var state_28649__$1 = state_28649;
var statearr_28677_28730 = state_28649__$1;
(statearr_28677_28730[(2)] = false);

(statearr_28677_28730[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28650 === (28))){
var inst_28619 = (state_28649[(2)]);
var inst_28620 = calc_state();
var inst_28576 = inst_28620;
var state_28649__$1 = (function (){var statearr_28678 = state_28649;
(statearr_28678[(7)] = inst_28576);

(statearr_28678[(15)] = inst_28619);

return statearr_28678;
})();
var statearr_28679_28731 = state_28649__$1;
(statearr_28679_28731[(2)] = null);

(statearr_28679_28731[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28650 === (25))){
var inst_28645 = (state_28649[(2)]);
var state_28649__$1 = state_28649;
var statearr_28680_28732 = state_28649__$1;
(statearr_28680_28732[(2)] = inst_28645);

(statearr_28680_28732[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28650 === (34))){
var inst_28643 = (state_28649[(2)]);
var state_28649__$1 = state_28649;
var statearr_28681_28733 = state_28649__$1;
(statearr_28681_28733[(2)] = inst_28643);

(statearr_28681_28733[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28650 === (17))){
var state_28649__$1 = state_28649;
var statearr_28682_28734 = state_28649__$1;
(statearr_28682_28734[(2)] = false);

(statearr_28682_28734[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28650 === (3))){
var state_28649__$1 = state_28649;
var statearr_28683_28735 = state_28649__$1;
(statearr_28683_28735[(2)] = false);

(statearr_28683_28735[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28650 === (12))){
var inst_28647 = (state_28649[(2)]);
var state_28649__$1 = state_28649;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28649__$1,inst_28647);
} else {
if((state_val_28650 === (2))){
var inst_28551 = (state_28649[(8)]);
var inst_28556 = inst_28551.cljs$lang$protocol_mask$partition0$;
var inst_28557 = (inst_28556 & (64));
var inst_28558 = inst_28551.cljs$core$ISeq$;
var inst_28559 = (cljs.core.PROTOCOL_SENTINEL === inst_28558);
var inst_28560 = ((inst_28557) || (inst_28559));
var state_28649__$1 = state_28649;
if(cljs.core.truth_(inst_28560)){
var statearr_28684_28736 = state_28649__$1;
(statearr_28684_28736[(1)] = (5));

} else {
var statearr_28685_28737 = state_28649__$1;
(statearr_28685_28737[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28650 === (23))){
var inst_28608 = (state_28649[(14)]);
var inst_28614 = (inst_28608 == null);
var state_28649__$1 = state_28649;
if(cljs.core.truth_(inst_28614)){
var statearr_28686_28738 = state_28649__$1;
(statearr_28686_28738[(1)] = (26));

} else {
var statearr_28687_28739 = state_28649__$1;
(statearr_28687_28739[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28650 === (35))){
var inst_28634 = (state_28649[(2)]);
var state_28649__$1 = state_28649;
if(cljs.core.truth_(inst_28634)){
var statearr_28688_28740 = state_28649__$1;
(statearr_28688_28740[(1)] = (36));

} else {
var statearr_28689_28741 = state_28649__$1;
(statearr_28689_28741[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28650 === (19))){
var inst_28576 = (state_28649[(7)]);
var inst_28596 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_28576);
var state_28649__$1 = state_28649;
var statearr_28690_28742 = state_28649__$1;
(statearr_28690_28742[(2)] = inst_28596);

(statearr_28690_28742[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28650 === (11))){
var inst_28576 = (state_28649[(7)]);
var inst_28580 = (inst_28576 == null);
var inst_28581 = cljs.core.not(inst_28580);
var state_28649__$1 = state_28649;
if(inst_28581){
var statearr_28691_28743 = state_28649__$1;
(statearr_28691_28743[(1)] = (13));

} else {
var statearr_28692_28744 = state_28649__$1;
(statearr_28692_28744[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28650 === (9))){
var inst_28551 = (state_28649[(8)]);
var state_28649__$1 = state_28649;
var statearr_28693_28745 = state_28649__$1;
(statearr_28693_28745[(2)] = inst_28551);

(statearr_28693_28745[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28650 === (5))){
var state_28649__$1 = state_28649;
var statearr_28694_28746 = state_28649__$1;
(statearr_28694_28746[(2)] = true);

(statearr_28694_28746[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28650 === (14))){
var state_28649__$1 = state_28649;
var statearr_28695_28747 = state_28649__$1;
(statearr_28695_28747[(2)] = false);

(statearr_28695_28747[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28650 === (26))){
var inst_28609 = (state_28649[(10)]);
var inst_28616 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_28609);
var state_28649__$1 = state_28649;
var statearr_28696_28748 = state_28649__$1;
(statearr_28696_28748[(2)] = inst_28616);

(statearr_28696_28748[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28650 === (16))){
var state_28649__$1 = state_28649;
var statearr_28697_28749 = state_28649__$1;
(statearr_28697_28749[(2)] = true);

(statearr_28697_28749[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28650 === (38))){
var inst_28639 = (state_28649[(2)]);
var state_28649__$1 = state_28649;
var statearr_28698_28750 = state_28649__$1;
(statearr_28698_28750[(2)] = inst_28639);

(statearr_28698_28750[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28650 === (30))){
var inst_28600 = (state_28649[(9)]);
var inst_28609 = (state_28649[(10)]);
var inst_28601 = (state_28649[(13)]);
var inst_28626 = cljs.core.empty_QMARK_(inst_28600);
var inst_28627 = (inst_28601.cljs$core$IFn$_invoke$arity$1 ? inst_28601.cljs$core$IFn$_invoke$arity$1(inst_28609) : inst_28601.call(null,inst_28609));
var inst_28628 = cljs.core.not(inst_28627);
var inst_28629 = ((inst_28626) && (inst_28628));
var state_28649__$1 = state_28649;
var statearr_28699_28751 = state_28649__$1;
(statearr_28699_28751[(2)] = inst_28629);

(statearr_28699_28751[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28650 === (10))){
var inst_28551 = (state_28649[(8)]);
var inst_28572 = (state_28649[(2)]);
var inst_28573 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28572,cljs.core.cst$kw$solos);
var inst_28574 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28572,cljs.core.cst$kw$mutes);
var inst_28575 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28572,cljs.core.cst$kw$reads);
var inst_28576 = inst_28551;
var state_28649__$1 = (function (){var statearr_28700 = state_28649;
(statearr_28700[(7)] = inst_28576);

(statearr_28700[(16)] = inst_28574);

(statearr_28700[(17)] = inst_28573);

(statearr_28700[(18)] = inst_28575);

return statearr_28700;
})();
var statearr_28701_28752 = state_28649__$1;
(statearr_28701_28752[(2)] = null);

(statearr_28701_28752[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28650 === (18))){
var inst_28591 = (state_28649[(2)]);
var state_28649__$1 = state_28649;
var statearr_28702_28753 = state_28649__$1;
(statearr_28702_28753[(2)] = inst_28591);

(statearr_28702_28753[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28650 === (37))){
var state_28649__$1 = state_28649;
var statearr_28703_28754 = state_28649__$1;
(statearr_28703_28754[(2)] = null);

(statearr_28703_28754[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28650 === (8))){
var inst_28551 = (state_28649[(8)]);
var inst_28569 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_28551);
var state_28649__$1 = state_28649;
var statearr_28704_28755 = state_28649__$1;
(statearr_28704_28755[(2)] = inst_28569);

(statearr_28704_28755[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__25780__auto___28709,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__25589__auto__,c__25780__auto___28709,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__25590__auto__ = null;
var cljs$core$async$mix_$_state_machine__25590__auto____0 = (function (){
var statearr_28705 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28705[(0)] = cljs$core$async$mix_$_state_machine__25590__auto__);

(statearr_28705[(1)] = (1));

return statearr_28705;
});
var cljs$core$async$mix_$_state_machine__25590__auto____1 = (function (state_28649){
while(true){
var ret_value__25591__auto__ = (function (){try{while(true){
var result__25592__auto__ = switch__25589__auto__(state_28649);
if(cljs.core.keyword_identical_QMARK_(result__25592__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__25592__auto__;
}
break;
}
}catch (e28706){if((e28706 instanceof Object)){
var ex__25593__auto__ = e28706;
var statearr_28707_28756 = state_28649;
(statearr_28707_28756[(5)] = ex__25593__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28649);

return cljs.core.cst$kw$recur;
} else {
throw e28706;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25591__auto__,cljs.core.cst$kw$recur)){
var G__28757 = state_28649;
state_28649 = G__28757;
continue;
} else {
return ret_value__25591__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__25590__auto__ = function(state_28649){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__25590__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__25590__auto____1.call(this,state_28649);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__25590__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__25590__auto____0;
cljs$core$async$mix_$_state_machine__25590__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__25590__auto____1;
return cljs$core$async$mix_$_state_machine__25590__auto__;
})()
;})(switch__25589__auto__,c__25780__auto___28709,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__25782__auto__ = (function (){var statearr_28708 = (f__25781__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25781__auto__.cljs$core$IFn$_invoke$arity$0() : f__25781__auto__.call(null));
(statearr_28708[(6)] = c__25780__auto___28709);

return statearr_28708;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25782__auto__);
});})(c__25780__auto___28709,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__28759 = arguments.length;
switch (G__28759) {
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
var G__28763 = arguments.length;
switch (G__28763) {
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
return (function (p1__28761_SHARP_){
if(cljs.core.truth_((p1__28761_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__28761_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__28761_SHARP_.call(null,topic)))){
return p1__28761_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__28761_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28764 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28764 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta28765){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta28765 = meta28765;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28764.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28766,meta28765__$1){
var self__ = this;
var _28766__$1 = this;
return (new cljs.core.async.t_cljs$core$async28764(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta28765__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28764.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28766){
var self__ = this;
var _28766__$1 = this;
return self__.meta28765;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28764.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28764.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28764.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28764.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28764.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async28764.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28764.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28764.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta28765], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28764.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28764.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28764";

cljs.core.async.t_cljs$core$async28764.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async28764");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28764.
 */
cljs.core.async.__GT_t_cljs$core$async28764 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async28764(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28765){
return (new cljs.core.async.t_cljs$core$async28764(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28765));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async28764(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__25780__auto___28884 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25780__auto___28884,mults,ensure_mult,p){
return (function (){
var f__25781__auto__ = (function (){var switch__25589__auto__ = ((function (c__25780__auto___28884,mults,ensure_mult,p){
return (function (state_28838){
var state_val_28839 = (state_28838[(1)]);
if((state_val_28839 === (7))){
var inst_28834 = (state_28838[(2)]);
var state_28838__$1 = state_28838;
var statearr_28840_28885 = state_28838__$1;
(statearr_28840_28885[(2)] = inst_28834);

(statearr_28840_28885[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28839 === (20))){
var state_28838__$1 = state_28838;
var statearr_28841_28886 = state_28838__$1;
(statearr_28841_28886[(2)] = null);

(statearr_28841_28886[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28839 === (1))){
var state_28838__$1 = state_28838;
var statearr_28842_28887 = state_28838__$1;
(statearr_28842_28887[(2)] = null);

(statearr_28842_28887[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28839 === (24))){
var inst_28817 = (state_28838[(7)]);
var inst_28826 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_28817);
var state_28838__$1 = state_28838;
var statearr_28843_28888 = state_28838__$1;
(statearr_28843_28888[(2)] = inst_28826);

(statearr_28843_28888[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28839 === (4))){
var inst_28769 = (state_28838[(8)]);
var inst_28769__$1 = (state_28838[(2)]);
var inst_28770 = (inst_28769__$1 == null);
var state_28838__$1 = (function (){var statearr_28844 = state_28838;
(statearr_28844[(8)] = inst_28769__$1);

return statearr_28844;
})();
if(cljs.core.truth_(inst_28770)){
var statearr_28845_28889 = state_28838__$1;
(statearr_28845_28889[(1)] = (5));

} else {
var statearr_28846_28890 = state_28838__$1;
(statearr_28846_28890[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28839 === (15))){
var inst_28811 = (state_28838[(2)]);
var state_28838__$1 = state_28838;
var statearr_28847_28891 = state_28838__$1;
(statearr_28847_28891[(2)] = inst_28811);

(statearr_28847_28891[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28839 === (21))){
var inst_28831 = (state_28838[(2)]);
var state_28838__$1 = (function (){var statearr_28848 = state_28838;
(statearr_28848[(9)] = inst_28831);

return statearr_28848;
})();
var statearr_28849_28892 = state_28838__$1;
(statearr_28849_28892[(2)] = null);

(statearr_28849_28892[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28839 === (13))){
var inst_28793 = (state_28838[(10)]);
var inst_28795 = cljs.core.chunked_seq_QMARK_(inst_28793);
var state_28838__$1 = state_28838;
if(inst_28795){
var statearr_28850_28893 = state_28838__$1;
(statearr_28850_28893[(1)] = (16));

} else {
var statearr_28851_28894 = state_28838__$1;
(statearr_28851_28894[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28839 === (22))){
var inst_28823 = (state_28838[(2)]);
var state_28838__$1 = state_28838;
if(cljs.core.truth_(inst_28823)){
var statearr_28852_28895 = state_28838__$1;
(statearr_28852_28895[(1)] = (23));

} else {
var statearr_28853_28896 = state_28838__$1;
(statearr_28853_28896[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28839 === (6))){
var inst_28769 = (state_28838[(8)]);
var inst_28817 = (state_28838[(7)]);
var inst_28819 = (state_28838[(11)]);
var inst_28817__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_28769) : topic_fn.call(null,inst_28769));
var inst_28818 = cljs.core.deref(mults);
var inst_28819__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28818,inst_28817__$1);
var state_28838__$1 = (function (){var statearr_28854 = state_28838;
(statearr_28854[(7)] = inst_28817__$1);

(statearr_28854[(11)] = inst_28819__$1);

return statearr_28854;
})();
if(cljs.core.truth_(inst_28819__$1)){
var statearr_28855_28897 = state_28838__$1;
(statearr_28855_28897[(1)] = (19));

} else {
var statearr_28856_28898 = state_28838__$1;
(statearr_28856_28898[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28839 === (25))){
var inst_28828 = (state_28838[(2)]);
var state_28838__$1 = state_28838;
var statearr_28857_28899 = state_28838__$1;
(statearr_28857_28899[(2)] = inst_28828);

(statearr_28857_28899[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28839 === (17))){
var inst_28793 = (state_28838[(10)]);
var inst_28802 = cljs.core.first(inst_28793);
var inst_28803 = cljs.core.async.muxch_STAR_(inst_28802);
var inst_28804 = cljs.core.async.close_BANG_(inst_28803);
var inst_28805 = cljs.core.next(inst_28793);
var inst_28779 = inst_28805;
var inst_28780 = null;
var inst_28781 = (0);
var inst_28782 = (0);
var state_28838__$1 = (function (){var statearr_28858 = state_28838;
(statearr_28858[(12)] = inst_28804);

(statearr_28858[(13)] = inst_28780);

(statearr_28858[(14)] = inst_28782);

(statearr_28858[(15)] = inst_28779);

(statearr_28858[(16)] = inst_28781);

return statearr_28858;
})();
var statearr_28859_28900 = state_28838__$1;
(statearr_28859_28900[(2)] = null);

(statearr_28859_28900[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28839 === (3))){
var inst_28836 = (state_28838[(2)]);
var state_28838__$1 = state_28838;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28838__$1,inst_28836);
} else {
if((state_val_28839 === (12))){
var inst_28813 = (state_28838[(2)]);
var state_28838__$1 = state_28838;
var statearr_28860_28901 = state_28838__$1;
(statearr_28860_28901[(2)] = inst_28813);

(statearr_28860_28901[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28839 === (2))){
var state_28838__$1 = state_28838;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28838__$1,(4),ch);
} else {
if((state_val_28839 === (23))){
var state_28838__$1 = state_28838;
var statearr_28861_28902 = state_28838__$1;
(statearr_28861_28902[(2)] = null);

(statearr_28861_28902[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28839 === (19))){
var inst_28769 = (state_28838[(8)]);
var inst_28819 = (state_28838[(11)]);
var inst_28821 = cljs.core.async.muxch_STAR_(inst_28819);
var state_28838__$1 = state_28838;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28838__$1,(22),inst_28821,inst_28769);
} else {
if((state_val_28839 === (11))){
var inst_28793 = (state_28838[(10)]);
var inst_28779 = (state_28838[(15)]);
var inst_28793__$1 = cljs.core.seq(inst_28779);
var state_28838__$1 = (function (){var statearr_28862 = state_28838;
(statearr_28862[(10)] = inst_28793__$1);

return statearr_28862;
})();
if(inst_28793__$1){
var statearr_28863_28903 = state_28838__$1;
(statearr_28863_28903[(1)] = (13));

} else {
var statearr_28864_28904 = state_28838__$1;
(statearr_28864_28904[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28839 === (9))){
var inst_28815 = (state_28838[(2)]);
var state_28838__$1 = state_28838;
var statearr_28865_28905 = state_28838__$1;
(statearr_28865_28905[(2)] = inst_28815);

(statearr_28865_28905[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28839 === (5))){
var inst_28776 = cljs.core.deref(mults);
var inst_28777 = cljs.core.vals(inst_28776);
var inst_28778 = cljs.core.seq(inst_28777);
var inst_28779 = inst_28778;
var inst_28780 = null;
var inst_28781 = (0);
var inst_28782 = (0);
var state_28838__$1 = (function (){var statearr_28866 = state_28838;
(statearr_28866[(13)] = inst_28780);

(statearr_28866[(14)] = inst_28782);

(statearr_28866[(15)] = inst_28779);

(statearr_28866[(16)] = inst_28781);

return statearr_28866;
})();
var statearr_28867_28906 = state_28838__$1;
(statearr_28867_28906[(2)] = null);

(statearr_28867_28906[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28839 === (14))){
var state_28838__$1 = state_28838;
var statearr_28871_28907 = state_28838__$1;
(statearr_28871_28907[(2)] = null);

(statearr_28871_28907[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28839 === (16))){
var inst_28793 = (state_28838[(10)]);
var inst_28797 = cljs.core.chunk_first(inst_28793);
var inst_28798 = cljs.core.chunk_rest(inst_28793);
var inst_28799 = cljs.core.count(inst_28797);
var inst_28779 = inst_28798;
var inst_28780 = inst_28797;
var inst_28781 = inst_28799;
var inst_28782 = (0);
var state_28838__$1 = (function (){var statearr_28872 = state_28838;
(statearr_28872[(13)] = inst_28780);

(statearr_28872[(14)] = inst_28782);

(statearr_28872[(15)] = inst_28779);

(statearr_28872[(16)] = inst_28781);

return statearr_28872;
})();
var statearr_28873_28908 = state_28838__$1;
(statearr_28873_28908[(2)] = null);

(statearr_28873_28908[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28839 === (10))){
var inst_28780 = (state_28838[(13)]);
var inst_28782 = (state_28838[(14)]);
var inst_28779 = (state_28838[(15)]);
var inst_28781 = (state_28838[(16)]);
var inst_28787 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_28780,inst_28782);
var inst_28788 = cljs.core.async.muxch_STAR_(inst_28787);
var inst_28789 = cljs.core.async.close_BANG_(inst_28788);
var inst_28790 = (inst_28782 + (1));
var tmp28868 = inst_28780;
var tmp28869 = inst_28779;
var tmp28870 = inst_28781;
var inst_28779__$1 = tmp28869;
var inst_28780__$1 = tmp28868;
var inst_28781__$1 = tmp28870;
var inst_28782__$1 = inst_28790;
var state_28838__$1 = (function (){var statearr_28874 = state_28838;
(statearr_28874[(13)] = inst_28780__$1);

(statearr_28874[(14)] = inst_28782__$1);

(statearr_28874[(15)] = inst_28779__$1);

(statearr_28874[(17)] = inst_28789);

(statearr_28874[(16)] = inst_28781__$1);

return statearr_28874;
})();
var statearr_28875_28909 = state_28838__$1;
(statearr_28875_28909[(2)] = null);

(statearr_28875_28909[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28839 === (18))){
var inst_28808 = (state_28838[(2)]);
var state_28838__$1 = state_28838;
var statearr_28876_28910 = state_28838__$1;
(statearr_28876_28910[(2)] = inst_28808);

(statearr_28876_28910[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28839 === (8))){
var inst_28782 = (state_28838[(14)]);
var inst_28781 = (state_28838[(16)]);
var inst_28784 = (inst_28782 < inst_28781);
var inst_28785 = inst_28784;
var state_28838__$1 = state_28838;
if(cljs.core.truth_(inst_28785)){
var statearr_28877_28911 = state_28838__$1;
(statearr_28877_28911[(1)] = (10));

} else {
var statearr_28878_28912 = state_28838__$1;
(statearr_28878_28912[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
});})(c__25780__auto___28884,mults,ensure_mult,p))
;
return ((function (switch__25589__auto__,c__25780__auto___28884,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__25590__auto__ = null;
var cljs$core$async$state_machine__25590__auto____0 = (function (){
var statearr_28879 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28879[(0)] = cljs$core$async$state_machine__25590__auto__);

(statearr_28879[(1)] = (1));

return statearr_28879;
});
var cljs$core$async$state_machine__25590__auto____1 = (function (state_28838){
while(true){
var ret_value__25591__auto__ = (function (){try{while(true){
var result__25592__auto__ = switch__25589__auto__(state_28838);
if(cljs.core.keyword_identical_QMARK_(result__25592__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__25592__auto__;
}
break;
}
}catch (e28880){if((e28880 instanceof Object)){
var ex__25593__auto__ = e28880;
var statearr_28881_28913 = state_28838;
(statearr_28881_28913[(5)] = ex__25593__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28838);

return cljs.core.cst$kw$recur;
} else {
throw e28880;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25591__auto__,cljs.core.cst$kw$recur)){
var G__28914 = state_28838;
state_28838 = G__28914;
continue;
} else {
return ret_value__25591__auto__;
}
break;
}
});
cljs$core$async$state_machine__25590__auto__ = function(state_28838){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25590__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25590__auto____1.call(this,state_28838);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25590__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25590__auto____0;
cljs$core$async$state_machine__25590__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25590__auto____1;
return cljs$core$async$state_machine__25590__auto__;
})()
;})(switch__25589__auto__,c__25780__auto___28884,mults,ensure_mult,p))
})();
var state__25782__auto__ = (function (){var statearr_28882 = (f__25781__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25781__auto__.cljs$core$IFn$_invoke$arity$0() : f__25781__auto__.call(null));
(statearr_28882[(6)] = c__25780__auto___28884);

return statearr_28882;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25782__auto__);
});})(c__25780__auto___28884,mults,ensure_mult,p))
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
var G__28916 = arguments.length;
switch (G__28916) {
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
var G__28919 = arguments.length;
switch (G__28919) {
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
var G__28922 = arguments.length;
switch (G__28922) {
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
var c__25780__auto___28989 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25780__auto___28989,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__25781__auto__ = (function (){var switch__25589__auto__ = ((function (c__25780__auto___28989,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_28961){
var state_val_28962 = (state_28961[(1)]);
if((state_val_28962 === (7))){
var state_28961__$1 = state_28961;
var statearr_28963_28990 = state_28961__$1;
(statearr_28963_28990[(2)] = null);

(statearr_28963_28990[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28962 === (1))){
var state_28961__$1 = state_28961;
var statearr_28964_28991 = state_28961__$1;
(statearr_28964_28991[(2)] = null);

(statearr_28964_28991[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28962 === (4))){
var inst_28925 = (state_28961[(7)]);
var inst_28927 = (inst_28925 < cnt);
var state_28961__$1 = state_28961;
if(cljs.core.truth_(inst_28927)){
var statearr_28965_28992 = state_28961__$1;
(statearr_28965_28992[(1)] = (6));

} else {
var statearr_28966_28993 = state_28961__$1;
(statearr_28966_28993[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28962 === (15))){
var inst_28957 = (state_28961[(2)]);
var state_28961__$1 = state_28961;
var statearr_28967_28994 = state_28961__$1;
(statearr_28967_28994[(2)] = inst_28957);

(statearr_28967_28994[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28962 === (13))){
var inst_28950 = cljs.core.async.close_BANG_(out);
var state_28961__$1 = state_28961;
var statearr_28968_28995 = state_28961__$1;
(statearr_28968_28995[(2)] = inst_28950);

(statearr_28968_28995[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28962 === (6))){
var state_28961__$1 = state_28961;
var statearr_28969_28996 = state_28961__$1;
(statearr_28969_28996[(2)] = null);

(statearr_28969_28996[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28962 === (3))){
var inst_28959 = (state_28961[(2)]);
var state_28961__$1 = state_28961;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28961__$1,inst_28959);
} else {
if((state_val_28962 === (12))){
var inst_28947 = (state_28961[(8)]);
var inst_28947__$1 = (state_28961[(2)]);
var inst_28948 = cljs.core.some(cljs.core.nil_QMARK_,inst_28947__$1);
var state_28961__$1 = (function (){var statearr_28970 = state_28961;
(statearr_28970[(8)] = inst_28947__$1);

return statearr_28970;
})();
if(cljs.core.truth_(inst_28948)){
var statearr_28971_28997 = state_28961__$1;
(statearr_28971_28997[(1)] = (13));

} else {
var statearr_28972_28998 = state_28961__$1;
(statearr_28972_28998[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28962 === (2))){
var inst_28924 = cljs.core.reset_BANG_(dctr,cnt);
var inst_28925 = (0);
var state_28961__$1 = (function (){var statearr_28973 = state_28961;
(statearr_28973[(9)] = inst_28924);

(statearr_28973[(7)] = inst_28925);

return statearr_28973;
})();
var statearr_28974_28999 = state_28961__$1;
(statearr_28974_28999[(2)] = null);

(statearr_28974_28999[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28962 === (11))){
var inst_28925 = (state_28961[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_28961,(10),Object,null,(9));
var inst_28934 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_28925) : chs__$1.call(null,inst_28925));
var inst_28935 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_28925) : done.call(null,inst_28925));
var inst_28936 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_28934,inst_28935);
var state_28961__$1 = state_28961;
var statearr_28975_29000 = state_28961__$1;
(statearr_28975_29000[(2)] = inst_28936);


cljs.core.async.impl.ioc_helpers.process_exception(state_28961__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_28962 === (9))){
var inst_28925 = (state_28961[(7)]);
var inst_28938 = (state_28961[(2)]);
var inst_28939 = (inst_28925 + (1));
var inst_28925__$1 = inst_28939;
var state_28961__$1 = (function (){var statearr_28976 = state_28961;
(statearr_28976[(10)] = inst_28938);

(statearr_28976[(7)] = inst_28925__$1);

return statearr_28976;
})();
var statearr_28977_29001 = state_28961__$1;
(statearr_28977_29001[(2)] = null);

(statearr_28977_29001[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28962 === (5))){
var inst_28945 = (state_28961[(2)]);
var state_28961__$1 = (function (){var statearr_28978 = state_28961;
(statearr_28978[(11)] = inst_28945);

return statearr_28978;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28961__$1,(12),dchan);
} else {
if((state_val_28962 === (14))){
var inst_28947 = (state_28961[(8)]);
var inst_28952 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_28947);
var state_28961__$1 = state_28961;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28961__$1,(16),out,inst_28952);
} else {
if((state_val_28962 === (16))){
var inst_28954 = (state_28961[(2)]);
var state_28961__$1 = (function (){var statearr_28979 = state_28961;
(statearr_28979[(12)] = inst_28954);

return statearr_28979;
})();
var statearr_28980_29002 = state_28961__$1;
(statearr_28980_29002[(2)] = null);

(statearr_28980_29002[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28962 === (10))){
var inst_28929 = (state_28961[(2)]);
var inst_28930 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_28961__$1 = (function (){var statearr_28981 = state_28961;
(statearr_28981[(13)] = inst_28929);

return statearr_28981;
})();
var statearr_28982_29003 = state_28961__$1;
(statearr_28982_29003[(2)] = inst_28930);


cljs.core.async.impl.ioc_helpers.process_exception(state_28961__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_28962 === (8))){
var inst_28943 = (state_28961[(2)]);
var state_28961__$1 = state_28961;
var statearr_28983_29004 = state_28961__$1;
(statearr_28983_29004[(2)] = inst_28943);

(statearr_28983_29004[(1)] = (5));


return cljs.core.cst$kw$recur;
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
});})(c__25780__auto___28989,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__25589__auto__,c__25780__auto___28989,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__25590__auto__ = null;
var cljs$core$async$state_machine__25590__auto____0 = (function (){
var statearr_28984 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28984[(0)] = cljs$core$async$state_machine__25590__auto__);

(statearr_28984[(1)] = (1));

return statearr_28984;
});
var cljs$core$async$state_machine__25590__auto____1 = (function (state_28961){
while(true){
var ret_value__25591__auto__ = (function (){try{while(true){
var result__25592__auto__ = switch__25589__auto__(state_28961);
if(cljs.core.keyword_identical_QMARK_(result__25592__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__25592__auto__;
}
break;
}
}catch (e28985){if((e28985 instanceof Object)){
var ex__25593__auto__ = e28985;
var statearr_28986_29005 = state_28961;
(statearr_28986_29005[(5)] = ex__25593__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28961);

return cljs.core.cst$kw$recur;
} else {
throw e28985;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25591__auto__,cljs.core.cst$kw$recur)){
var G__29006 = state_28961;
state_28961 = G__29006;
continue;
} else {
return ret_value__25591__auto__;
}
break;
}
});
cljs$core$async$state_machine__25590__auto__ = function(state_28961){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25590__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25590__auto____1.call(this,state_28961);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25590__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25590__auto____0;
cljs$core$async$state_machine__25590__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25590__auto____1;
return cljs$core$async$state_machine__25590__auto__;
})()
;})(switch__25589__auto__,c__25780__auto___28989,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__25782__auto__ = (function (){var statearr_28987 = (f__25781__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25781__auto__.cljs$core$IFn$_invoke$arity$0() : f__25781__auto__.call(null));
(statearr_28987[(6)] = c__25780__auto___28989);

return statearr_28987;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25782__auto__);
});})(c__25780__auto___28989,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__29009 = arguments.length;
switch (G__29009) {
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
var c__25780__auto___29063 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25780__auto___29063,out){
return (function (){
var f__25781__auto__ = (function (){var switch__25589__auto__ = ((function (c__25780__auto___29063,out){
return (function (state_29041){
var state_val_29042 = (state_29041[(1)]);
if((state_val_29042 === (7))){
var inst_29021 = (state_29041[(7)]);
var inst_29020 = (state_29041[(8)]);
var inst_29020__$1 = (state_29041[(2)]);
var inst_29021__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29020__$1,(0),null);
var inst_29022 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_29020__$1,(1),null);
var inst_29023 = (inst_29021__$1 == null);
var state_29041__$1 = (function (){var statearr_29043 = state_29041;
(statearr_29043[(7)] = inst_29021__$1);

(statearr_29043[(9)] = inst_29022);

(statearr_29043[(8)] = inst_29020__$1);

return statearr_29043;
})();
if(cljs.core.truth_(inst_29023)){
var statearr_29044_29064 = state_29041__$1;
(statearr_29044_29064[(1)] = (8));

} else {
var statearr_29045_29065 = state_29041__$1;
(statearr_29045_29065[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29042 === (1))){
var inst_29010 = cljs.core.vec(chs);
var inst_29011 = inst_29010;
var state_29041__$1 = (function (){var statearr_29046 = state_29041;
(statearr_29046[(10)] = inst_29011);

return statearr_29046;
})();
var statearr_29047_29066 = state_29041__$1;
(statearr_29047_29066[(2)] = null);

(statearr_29047_29066[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29042 === (4))){
var inst_29011 = (state_29041[(10)]);
var state_29041__$1 = state_29041;
return cljs.core.async.ioc_alts_BANG_(state_29041__$1,(7),inst_29011);
} else {
if((state_val_29042 === (6))){
var inst_29037 = (state_29041[(2)]);
var state_29041__$1 = state_29041;
var statearr_29048_29067 = state_29041__$1;
(statearr_29048_29067[(2)] = inst_29037);

(statearr_29048_29067[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29042 === (3))){
var inst_29039 = (state_29041[(2)]);
var state_29041__$1 = state_29041;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29041__$1,inst_29039);
} else {
if((state_val_29042 === (2))){
var inst_29011 = (state_29041[(10)]);
var inst_29013 = cljs.core.count(inst_29011);
var inst_29014 = (inst_29013 > (0));
var state_29041__$1 = state_29041;
if(cljs.core.truth_(inst_29014)){
var statearr_29050_29068 = state_29041__$1;
(statearr_29050_29068[(1)] = (4));

} else {
var statearr_29051_29069 = state_29041__$1;
(statearr_29051_29069[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29042 === (11))){
var inst_29011 = (state_29041[(10)]);
var inst_29030 = (state_29041[(2)]);
var tmp29049 = inst_29011;
var inst_29011__$1 = tmp29049;
var state_29041__$1 = (function (){var statearr_29052 = state_29041;
(statearr_29052[(11)] = inst_29030);

(statearr_29052[(10)] = inst_29011__$1);

return statearr_29052;
})();
var statearr_29053_29070 = state_29041__$1;
(statearr_29053_29070[(2)] = null);

(statearr_29053_29070[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29042 === (9))){
var inst_29021 = (state_29041[(7)]);
var state_29041__$1 = state_29041;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29041__$1,(11),out,inst_29021);
} else {
if((state_val_29042 === (5))){
var inst_29035 = cljs.core.async.close_BANG_(out);
var state_29041__$1 = state_29041;
var statearr_29054_29071 = state_29041__$1;
(statearr_29054_29071[(2)] = inst_29035);

(statearr_29054_29071[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29042 === (10))){
var inst_29033 = (state_29041[(2)]);
var state_29041__$1 = state_29041;
var statearr_29055_29072 = state_29041__$1;
(statearr_29055_29072[(2)] = inst_29033);

(statearr_29055_29072[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29042 === (8))){
var inst_29021 = (state_29041[(7)]);
var inst_29022 = (state_29041[(9)]);
var inst_29011 = (state_29041[(10)]);
var inst_29020 = (state_29041[(8)]);
var inst_29025 = (function (){var cs = inst_29011;
var vec__29016 = inst_29020;
var v = inst_29021;
var c = inst_29022;
return ((function (cs,vec__29016,v,c,inst_29021,inst_29022,inst_29011,inst_29020,state_val_29042,c__25780__auto___29063,out){
return (function (p1__29007_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__29007_SHARP_);
});
;})(cs,vec__29016,v,c,inst_29021,inst_29022,inst_29011,inst_29020,state_val_29042,c__25780__auto___29063,out))
})();
var inst_29026 = cljs.core.filterv(inst_29025,inst_29011);
var inst_29011__$1 = inst_29026;
var state_29041__$1 = (function (){var statearr_29056 = state_29041;
(statearr_29056[(10)] = inst_29011__$1);

return statearr_29056;
})();
var statearr_29057_29073 = state_29041__$1;
(statearr_29057_29073[(2)] = null);

(statearr_29057_29073[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__25780__auto___29063,out))
;
return ((function (switch__25589__auto__,c__25780__auto___29063,out){
return (function() {
var cljs$core$async$state_machine__25590__auto__ = null;
var cljs$core$async$state_machine__25590__auto____0 = (function (){
var statearr_29058 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29058[(0)] = cljs$core$async$state_machine__25590__auto__);

(statearr_29058[(1)] = (1));

return statearr_29058;
});
var cljs$core$async$state_machine__25590__auto____1 = (function (state_29041){
while(true){
var ret_value__25591__auto__ = (function (){try{while(true){
var result__25592__auto__ = switch__25589__auto__(state_29041);
if(cljs.core.keyword_identical_QMARK_(result__25592__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__25592__auto__;
}
break;
}
}catch (e29059){if((e29059 instanceof Object)){
var ex__25593__auto__ = e29059;
var statearr_29060_29074 = state_29041;
(statearr_29060_29074[(5)] = ex__25593__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29041);

return cljs.core.cst$kw$recur;
} else {
throw e29059;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25591__auto__,cljs.core.cst$kw$recur)){
var G__29075 = state_29041;
state_29041 = G__29075;
continue;
} else {
return ret_value__25591__auto__;
}
break;
}
});
cljs$core$async$state_machine__25590__auto__ = function(state_29041){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25590__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25590__auto____1.call(this,state_29041);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25590__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25590__auto____0;
cljs$core$async$state_machine__25590__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25590__auto____1;
return cljs$core$async$state_machine__25590__auto__;
})()
;})(switch__25589__auto__,c__25780__auto___29063,out))
})();
var state__25782__auto__ = (function (){var statearr_29061 = (f__25781__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25781__auto__.cljs$core$IFn$_invoke$arity$0() : f__25781__auto__.call(null));
(statearr_29061[(6)] = c__25780__auto___29063);

return statearr_29061;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25782__auto__);
});})(c__25780__auto___29063,out))
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
var G__29077 = arguments.length;
switch (G__29077) {
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
var c__25780__auto___29122 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25780__auto___29122,out){
return (function (){
var f__25781__auto__ = (function (){var switch__25589__auto__ = ((function (c__25780__auto___29122,out){
return (function (state_29101){
var state_val_29102 = (state_29101[(1)]);
if((state_val_29102 === (7))){
var inst_29083 = (state_29101[(7)]);
var inst_29083__$1 = (state_29101[(2)]);
var inst_29084 = (inst_29083__$1 == null);
var inst_29085 = cljs.core.not(inst_29084);
var state_29101__$1 = (function (){var statearr_29103 = state_29101;
(statearr_29103[(7)] = inst_29083__$1);

return statearr_29103;
})();
if(inst_29085){
var statearr_29104_29123 = state_29101__$1;
(statearr_29104_29123[(1)] = (8));

} else {
var statearr_29105_29124 = state_29101__$1;
(statearr_29105_29124[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29102 === (1))){
var inst_29078 = (0);
var state_29101__$1 = (function (){var statearr_29106 = state_29101;
(statearr_29106[(8)] = inst_29078);

return statearr_29106;
})();
var statearr_29107_29125 = state_29101__$1;
(statearr_29107_29125[(2)] = null);

(statearr_29107_29125[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29102 === (4))){
var state_29101__$1 = state_29101;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29101__$1,(7),ch);
} else {
if((state_val_29102 === (6))){
var inst_29096 = (state_29101[(2)]);
var state_29101__$1 = state_29101;
var statearr_29108_29126 = state_29101__$1;
(statearr_29108_29126[(2)] = inst_29096);

(statearr_29108_29126[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29102 === (3))){
var inst_29098 = (state_29101[(2)]);
var inst_29099 = cljs.core.async.close_BANG_(out);
var state_29101__$1 = (function (){var statearr_29109 = state_29101;
(statearr_29109[(9)] = inst_29098);

return statearr_29109;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_29101__$1,inst_29099);
} else {
if((state_val_29102 === (2))){
var inst_29078 = (state_29101[(8)]);
var inst_29080 = (inst_29078 < n);
var state_29101__$1 = state_29101;
if(cljs.core.truth_(inst_29080)){
var statearr_29110_29127 = state_29101__$1;
(statearr_29110_29127[(1)] = (4));

} else {
var statearr_29111_29128 = state_29101__$1;
(statearr_29111_29128[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29102 === (11))){
var inst_29078 = (state_29101[(8)]);
var inst_29088 = (state_29101[(2)]);
var inst_29089 = (inst_29078 + (1));
var inst_29078__$1 = inst_29089;
var state_29101__$1 = (function (){var statearr_29112 = state_29101;
(statearr_29112[(8)] = inst_29078__$1);

(statearr_29112[(10)] = inst_29088);

return statearr_29112;
})();
var statearr_29113_29129 = state_29101__$1;
(statearr_29113_29129[(2)] = null);

(statearr_29113_29129[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29102 === (9))){
var state_29101__$1 = state_29101;
var statearr_29114_29130 = state_29101__$1;
(statearr_29114_29130[(2)] = null);

(statearr_29114_29130[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29102 === (5))){
var state_29101__$1 = state_29101;
var statearr_29115_29131 = state_29101__$1;
(statearr_29115_29131[(2)] = null);

(statearr_29115_29131[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29102 === (10))){
var inst_29093 = (state_29101[(2)]);
var state_29101__$1 = state_29101;
var statearr_29116_29132 = state_29101__$1;
(statearr_29116_29132[(2)] = inst_29093);

(statearr_29116_29132[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29102 === (8))){
var inst_29083 = (state_29101[(7)]);
var state_29101__$1 = state_29101;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29101__$1,(11),out,inst_29083);
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
});})(c__25780__auto___29122,out))
;
return ((function (switch__25589__auto__,c__25780__auto___29122,out){
return (function() {
var cljs$core$async$state_machine__25590__auto__ = null;
var cljs$core$async$state_machine__25590__auto____0 = (function (){
var statearr_29117 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29117[(0)] = cljs$core$async$state_machine__25590__auto__);

(statearr_29117[(1)] = (1));

return statearr_29117;
});
var cljs$core$async$state_machine__25590__auto____1 = (function (state_29101){
while(true){
var ret_value__25591__auto__ = (function (){try{while(true){
var result__25592__auto__ = switch__25589__auto__(state_29101);
if(cljs.core.keyword_identical_QMARK_(result__25592__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__25592__auto__;
}
break;
}
}catch (e29118){if((e29118 instanceof Object)){
var ex__25593__auto__ = e29118;
var statearr_29119_29133 = state_29101;
(statearr_29119_29133[(5)] = ex__25593__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29101);

return cljs.core.cst$kw$recur;
} else {
throw e29118;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25591__auto__,cljs.core.cst$kw$recur)){
var G__29134 = state_29101;
state_29101 = G__29134;
continue;
} else {
return ret_value__25591__auto__;
}
break;
}
});
cljs$core$async$state_machine__25590__auto__ = function(state_29101){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25590__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25590__auto____1.call(this,state_29101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25590__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25590__auto____0;
cljs$core$async$state_machine__25590__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25590__auto____1;
return cljs$core$async$state_machine__25590__auto__;
})()
;})(switch__25589__auto__,c__25780__auto___29122,out))
})();
var state__25782__auto__ = (function (){var statearr_29120 = (f__25781__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25781__auto__.cljs$core$IFn$_invoke$arity$0() : f__25781__auto__.call(null));
(statearr_29120[(6)] = c__25780__auto___29122);

return statearr_29120;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25782__auto__);
});})(c__25780__auto___29122,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29136 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29136 = (function (f,ch,meta29137){
this.f = f;
this.ch = ch;
this.meta29137 = meta29137;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29136.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29138,meta29137__$1){
var self__ = this;
var _29138__$1 = this;
return (new cljs.core.async.t_cljs$core$async29136(self__.f,self__.ch,meta29137__$1));
});

cljs.core.async.t_cljs$core$async29136.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29138){
var self__ = this;
var _29138__$1 = this;
return self__.meta29137;
});

cljs.core.async.t_cljs$core$async29136.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29136.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async29136.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async29136.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29136.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29139 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29139 = (function (f,ch,meta29137,_,fn1,meta29140){
this.f = f;
this.ch = ch;
this.meta29137 = meta29137;
this._ = _;
this.fn1 = fn1;
this.meta29140 = meta29140;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29139.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_29141,meta29140__$1){
var self__ = this;
var _29141__$1 = this;
return (new cljs.core.async.t_cljs$core$async29139(self__.f,self__.ch,self__.meta29137,self__._,self__.fn1,meta29140__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async29139.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_29141){
var self__ = this;
var _29141__$1 = this;
return self__.meta29140;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29139.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29139.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29139.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29139.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__29135_SHARP_){
var G__29142 = (((p1__29135_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__29135_SHARP_) : self__.f.call(null,p1__29135_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__29142) : f1.call(null,G__29142));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async29139.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta29137,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async29136], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta29140], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29139.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29139.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29139";

cljs.core.async.t_cljs$core$async29139.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async29139");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29139.
 */
cljs.core.async.__GT_t_cljs$core$async29139 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29139(f__$1,ch__$1,meta29137__$1,___$2,fn1__$1,meta29140){
return (new cljs.core.async.t_cljs$core$async29139(f__$1,ch__$1,meta29137__$1,___$2,fn1__$1,meta29140));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async29139(self__.f,self__.ch,self__.meta29137,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__29143 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__29143) : self__.f.call(null,G__29143));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async29136.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29136.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async29136.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta29137], null);
});

cljs.core.async.t_cljs$core$async29136.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29136.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29136";

cljs.core.async.t_cljs$core$async29136.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async29136");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29136.
 */
cljs.core.async.__GT_t_cljs$core$async29136 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29136(f__$1,ch__$1,meta29137){
return (new cljs.core.async.t_cljs$core$async29136(f__$1,ch__$1,meta29137));
});

}

return (new cljs.core.async.t_cljs$core$async29136(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29144 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29144 = (function (f,ch,meta29145){
this.f = f;
this.ch = ch;
this.meta29145 = meta29145;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29144.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29146,meta29145__$1){
var self__ = this;
var _29146__$1 = this;
return (new cljs.core.async.t_cljs$core$async29144(self__.f,self__.ch,meta29145__$1));
});

cljs.core.async.t_cljs$core$async29144.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29146){
var self__ = this;
var _29146__$1 = this;
return self__.meta29145;
});

cljs.core.async.t_cljs$core$async29144.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29144.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async29144.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29144.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29144.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29144.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async29144.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta29145], null);
});

cljs.core.async.t_cljs$core$async29144.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29144.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29144";

cljs.core.async.t_cljs$core$async29144.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async29144");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29144.
 */
cljs.core.async.__GT_t_cljs$core$async29144 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async29144(f__$1,ch__$1,meta29145){
return (new cljs.core.async.t_cljs$core$async29144(f__$1,ch__$1,meta29145));
});

}

return (new cljs.core.async.t_cljs$core$async29144(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29147 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29147 = (function (p,ch,meta29148){
this.p = p;
this.ch = ch;
this.meta29148 = meta29148;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29147.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29149,meta29148__$1){
var self__ = this;
var _29149__$1 = this;
return (new cljs.core.async.t_cljs$core$async29147(self__.p,self__.ch,meta29148__$1));
});

cljs.core.async.t_cljs$core$async29147.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29149){
var self__ = this;
var _29149__$1 = this;
return self__.meta29148;
});

cljs.core.async.t_cljs$core$async29147.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29147.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async29147.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async29147.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29147.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29147.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29147.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async29147.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta29148], null);
});

cljs.core.async.t_cljs$core$async29147.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29147.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29147";

cljs.core.async.t_cljs$core$async29147.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async29147");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29147.
 */
cljs.core.async.__GT_t_cljs$core$async29147 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async29147(p__$1,ch__$1,meta29148){
return (new cljs.core.async.t_cljs$core$async29147(p__$1,ch__$1,meta29148));
});

}

return (new cljs.core.async.t_cljs$core$async29147(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__29151 = arguments.length;
switch (G__29151) {
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
var c__25780__auto___29191 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25780__auto___29191,out){
return (function (){
var f__25781__auto__ = (function (){var switch__25589__auto__ = ((function (c__25780__auto___29191,out){
return (function (state_29172){
var state_val_29173 = (state_29172[(1)]);
if((state_val_29173 === (7))){
var inst_29168 = (state_29172[(2)]);
var state_29172__$1 = state_29172;
var statearr_29174_29192 = state_29172__$1;
(statearr_29174_29192[(2)] = inst_29168);

(statearr_29174_29192[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29173 === (1))){
var state_29172__$1 = state_29172;
var statearr_29175_29193 = state_29172__$1;
(statearr_29175_29193[(2)] = null);

(statearr_29175_29193[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29173 === (4))){
var inst_29154 = (state_29172[(7)]);
var inst_29154__$1 = (state_29172[(2)]);
var inst_29155 = (inst_29154__$1 == null);
var state_29172__$1 = (function (){var statearr_29176 = state_29172;
(statearr_29176[(7)] = inst_29154__$1);

return statearr_29176;
})();
if(cljs.core.truth_(inst_29155)){
var statearr_29177_29194 = state_29172__$1;
(statearr_29177_29194[(1)] = (5));

} else {
var statearr_29178_29195 = state_29172__$1;
(statearr_29178_29195[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29173 === (6))){
var inst_29154 = (state_29172[(7)]);
var inst_29159 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_29154) : p.call(null,inst_29154));
var state_29172__$1 = state_29172;
if(cljs.core.truth_(inst_29159)){
var statearr_29179_29196 = state_29172__$1;
(statearr_29179_29196[(1)] = (8));

} else {
var statearr_29180_29197 = state_29172__$1;
(statearr_29180_29197[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29173 === (3))){
var inst_29170 = (state_29172[(2)]);
var state_29172__$1 = state_29172;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29172__$1,inst_29170);
} else {
if((state_val_29173 === (2))){
var state_29172__$1 = state_29172;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29172__$1,(4),ch);
} else {
if((state_val_29173 === (11))){
var inst_29162 = (state_29172[(2)]);
var state_29172__$1 = state_29172;
var statearr_29181_29198 = state_29172__$1;
(statearr_29181_29198[(2)] = inst_29162);

(statearr_29181_29198[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29173 === (9))){
var state_29172__$1 = state_29172;
var statearr_29182_29199 = state_29172__$1;
(statearr_29182_29199[(2)] = null);

(statearr_29182_29199[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29173 === (5))){
var inst_29157 = cljs.core.async.close_BANG_(out);
var state_29172__$1 = state_29172;
var statearr_29183_29200 = state_29172__$1;
(statearr_29183_29200[(2)] = inst_29157);

(statearr_29183_29200[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29173 === (10))){
var inst_29165 = (state_29172[(2)]);
var state_29172__$1 = (function (){var statearr_29184 = state_29172;
(statearr_29184[(8)] = inst_29165);

return statearr_29184;
})();
var statearr_29185_29201 = state_29172__$1;
(statearr_29185_29201[(2)] = null);

(statearr_29185_29201[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29173 === (8))){
var inst_29154 = (state_29172[(7)]);
var state_29172__$1 = state_29172;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29172__$1,(11),out,inst_29154);
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
});})(c__25780__auto___29191,out))
;
return ((function (switch__25589__auto__,c__25780__auto___29191,out){
return (function() {
var cljs$core$async$state_machine__25590__auto__ = null;
var cljs$core$async$state_machine__25590__auto____0 = (function (){
var statearr_29186 = [null,null,null,null,null,null,null,null,null];
(statearr_29186[(0)] = cljs$core$async$state_machine__25590__auto__);

(statearr_29186[(1)] = (1));

return statearr_29186;
});
var cljs$core$async$state_machine__25590__auto____1 = (function (state_29172){
while(true){
var ret_value__25591__auto__ = (function (){try{while(true){
var result__25592__auto__ = switch__25589__auto__(state_29172);
if(cljs.core.keyword_identical_QMARK_(result__25592__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__25592__auto__;
}
break;
}
}catch (e29187){if((e29187 instanceof Object)){
var ex__25593__auto__ = e29187;
var statearr_29188_29202 = state_29172;
(statearr_29188_29202[(5)] = ex__25593__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29172);

return cljs.core.cst$kw$recur;
} else {
throw e29187;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25591__auto__,cljs.core.cst$kw$recur)){
var G__29203 = state_29172;
state_29172 = G__29203;
continue;
} else {
return ret_value__25591__auto__;
}
break;
}
});
cljs$core$async$state_machine__25590__auto__ = function(state_29172){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25590__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25590__auto____1.call(this,state_29172);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25590__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25590__auto____0;
cljs$core$async$state_machine__25590__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25590__auto____1;
return cljs$core$async$state_machine__25590__auto__;
})()
;})(switch__25589__auto__,c__25780__auto___29191,out))
})();
var state__25782__auto__ = (function (){var statearr_29189 = (f__25781__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25781__auto__.cljs$core$IFn$_invoke$arity$0() : f__25781__auto__.call(null));
(statearr_29189[(6)] = c__25780__auto___29191);

return statearr_29189;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25782__auto__);
});})(c__25780__auto___29191,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__29205 = arguments.length;
switch (G__29205) {
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
var c__25780__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25780__auto__){
return (function (){
var f__25781__auto__ = (function (){var switch__25589__auto__ = ((function (c__25780__auto__){
return (function (state_29268){
var state_val_29269 = (state_29268[(1)]);
if((state_val_29269 === (7))){
var inst_29264 = (state_29268[(2)]);
var state_29268__$1 = state_29268;
var statearr_29270_29308 = state_29268__$1;
(statearr_29270_29308[(2)] = inst_29264);

(statearr_29270_29308[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29269 === (20))){
var inst_29234 = (state_29268[(7)]);
var inst_29245 = (state_29268[(2)]);
var inst_29246 = cljs.core.next(inst_29234);
var inst_29220 = inst_29246;
var inst_29221 = null;
var inst_29222 = (0);
var inst_29223 = (0);
var state_29268__$1 = (function (){var statearr_29271 = state_29268;
(statearr_29271[(8)] = inst_29223);

(statearr_29271[(9)] = inst_29245);

(statearr_29271[(10)] = inst_29220);

(statearr_29271[(11)] = inst_29222);

(statearr_29271[(12)] = inst_29221);

return statearr_29271;
})();
var statearr_29272_29309 = state_29268__$1;
(statearr_29272_29309[(2)] = null);

(statearr_29272_29309[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29269 === (1))){
var state_29268__$1 = state_29268;
var statearr_29273_29310 = state_29268__$1;
(statearr_29273_29310[(2)] = null);

(statearr_29273_29310[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29269 === (4))){
var inst_29209 = (state_29268[(13)]);
var inst_29209__$1 = (state_29268[(2)]);
var inst_29210 = (inst_29209__$1 == null);
var state_29268__$1 = (function (){var statearr_29274 = state_29268;
(statearr_29274[(13)] = inst_29209__$1);

return statearr_29274;
})();
if(cljs.core.truth_(inst_29210)){
var statearr_29275_29311 = state_29268__$1;
(statearr_29275_29311[(1)] = (5));

} else {
var statearr_29276_29312 = state_29268__$1;
(statearr_29276_29312[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29269 === (15))){
var state_29268__$1 = state_29268;
var statearr_29280_29313 = state_29268__$1;
(statearr_29280_29313[(2)] = null);

(statearr_29280_29313[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29269 === (21))){
var state_29268__$1 = state_29268;
var statearr_29281_29314 = state_29268__$1;
(statearr_29281_29314[(2)] = null);

(statearr_29281_29314[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29269 === (13))){
var inst_29223 = (state_29268[(8)]);
var inst_29220 = (state_29268[(10)]);
var inst_29222 = (state_29268[(11)]);
var inst_29221 = (state_29268[(12)]);
var inst_29230 = (state_29268[(2)]);
var inst_29231 = (inst_29223 + (1));
var tmp29277 = inst_29220;
var tmp29278 = inst_29222;
var tmp29279 = inst_29221;
var inst_29220__$1 = tmp29277;
var inst_29221__$1 = tmp29279;
var inst_29222__$1 = tmp29278;
var inst_29223__$1 = inst_29231;
var state_29268__$1 = (function (){var statearr_29282 = state_29268;
(statearr_29282[(8)] = inst_29223__$1);

(statearr_29282[(10)] = inst_29220__$1);

(statearr_29282[(14)] = inst_29230);

(statearr_29282[(11)] = inst_29222__$1);

(statearr_29282[(12)] = inst_29221__$1);

return statearr_29282;
})();
var statearr_29283_29315 = state_29268__$1;
(statearr_29283_29315[(2)] = null);

(statearr_29283_29315[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29269 === (22))){
var state_29268__$1 = state_29268;
var statearr_29284_29316 = state_29268__$1;
(statearr_29284_29316[(2)] = null);

(statearr_29284_29316[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29269 === (6))){
var inst_29209 = (state_29268[(13)]);
var inst_29218 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_29209) : f.call(null,inst_29209));
var inst_29219 = cljs.core.seq(inst_29218);
var inst_29220 = inst_29219;
var inst_29221 = null;
var inst_29222 = (0);
var inst_29223 = (0);
var state_29268__$1 = (function (){var statearr_29285 = state_29268;
(statearr_29285[(8)] = inst_29223);

(statearr_29285[(10)] = inst_29220);

(statearr_29285[(11)] = inst_29222);

(statearr_29285[(12)] = inst_29221);

return statearr_29285;
})();
var statearr_29286_29317 = state_29268__$1;
(statearr_29286_29317[(2)] = null);

(statearr_29286_29317[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29269 === (17))){
var inst_29234 = (state_29268[(7)]);
var inst_29238 = cljs.core.chunk_first(inst_29234);
var inst_29239 = cljs.core.chunk_rest(inst_29234);
var inst_29240 = cljs.core.count(inst_29238);
var inst_29220 = inst_29239;
var inst_29221 = inst_29238;
var inst_29222 = inst_29240;
var inst_29223 = (0);
var state_29268__$1 = (function (){var statearr_29287 = state_29268;
(statearr_29287[(8)] = inst_29223);

(statearr_29287[(10)] = inst_29220);

(statearr_29287[(11)] = inst_29222);

(statearr_29287[(12)] = inst_29221);

return statearr_29287;
})();
var statearr_29288_29318 = state_29268__$1;
(statearr_29288_29318[(2)] = null);

(statearr_29288_29318[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29269 === (3))){
var inst_29266 = (state_29268[(2)]);
var state_29268__$1 = state_29268;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29268__$1,inst_29266);
} else {
if((state_val_29269 === (12))){
var inst_29254 = (state_29268[(2)]);
var state_29268__$1 = state_29268;
var statearr_29289_29319 = state_29268__$1;
(statearr_29289_29319[(2)] = inst_29254);

(statearr_29289_29319[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29269 === (2))){
var state_29268__$1 = state_29268;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29268__$1,(4),in$);
} else {
if((state_val_29269 === (23))){
var inst_29262 = (state_29268[(2)]);
var state_29268__$1 = state_29268;
var statearr_29290_29320 = state_29268__$1;
(statearr_29290_29320[(2)] = inst_29262);

(statearr_29290_29320[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29269 === (19))){
var inst_29249 = (state_29268[(2)]);
var state_29268__$1 = state_29268;
var statearr_29291_29321 = state_29268__$1;
(statearr_29291_29321[(2)] = inst_29249);

(statearr_29291_29321[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29269 === (11))){
var inst_29220 = (state_29268[(10)]);
var inst_29234 = (state_29268[(7)]);
var inst_29234__$1 = cljs.core.seq(inst_29220);
var state_29268__$1 = (function (){var statearr_29292 = state_29268;
(statearr_29292[(7)] = inst_29234__$1);

return statearr_29292;
})();
if(inst_29234__$1){
var statearr_29293_29322 = state_29268__$1;
(statearr_29293_29322[(1)] = (14));

} else {
var statearr_29294_29323 = state_29268__$1;
(statearr_29294_29323[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29269 === (9))){
var inst_29256 = (state_29268[(2)]);
var inst_29257 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_29268__$1 = (function (){var statearr_29295 = state_29268;
(statearr_29295[(15)] = inst_29256);

return statearr_29295;
})();
if(cljs.core.truth_(inst_29257)){
var statearr_29296_29324 = state_29268__$1;
(statearr_29296_29324[(1)] = (21));

} else {
var statearr_29297_29325 = state_29268__$1;
(statearr_29297_29325[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29269 === (5))){
var inst_29212 = cljs.core.async.close_BANG_(out);
var state_29268__$1 = state_29268;
var statearr_29298_29326 = state_29268__$1;
(statearr_29298_29326[(2)] = inst_29212);

(statearr_29298_29326[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29269 === (14))){
var inst_29234 = (state_29268[(7)]);
var inst_29236 = cljs.core.chunked_seq_QMARK_(inst_29234);
var state_29268__$1 = state_29268;
if(inst_29236){
var statearr_29299_29327 = state_29268__$1;
(statearr_29299_29327[(1)] = (17));

} else {
var statearr_29300_29328 = state_29268__$1;
(statearr_29300_29328[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29269 === (16))){
var inst_29252 = (state_29268[(2)]);
var state_29268__$1 = state_29268;
var statearr_29301_29329 = state_29268__$1;
(statearr_29301_29329[(2)] = inst_29252);

(statearr_29301_29329[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29269 === (10))){
var inst_29223 = (state_29268[(8)]);
var inst_29221 = (state_29268[(12)]);
var inst_29228 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_29221,inst_29223);
var state_29268__$1 = state_29268;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29268__$1,(13),out,inst_29228);
} else {
if((state_val_29269 === (18))){
var inst_29234 = (state_29268[(7)]);
var inst_29243 = cljs.core.first(inst_29234);
var state_29268__$1 = state_29268;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29268__$1,(20),out,inst_29243);
} else {
if((state_val_29269 === (8))){
var inst_29223 = (state_29268[(8)]);
var inst_29222 = (state_29268[(11)]);
var inst_29225 = (inst_29223 < inst_29222);
var inst_29226 = inst_29225;
var state_29268__$1 = state_29268;
if(cljs.core.truth_(inst_29226)){
var statearr_29302_29330 = state_29268__$1;
(statearr_29302_29330[(1)] = (10));

} else {
var statearr_29303_29331 = state_29268__$1;
(statearr_29303_29331[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
});})(c__25780__auto__))
;
return ((function (switch__25589__auto__,c__25780__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__25590__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__25590__auto____0 = (function (){
var statearr_29304 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29304[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__25590__auto__);

(statearr_29304[(1)] = (1));

return statearr_29304;
});
var cljs$core$async$mapcat_STAR__$_state_machine__25590__auto____1 = (function (state_29268){
while(true){
var ret_value__25591__auto__ = (function (){try{while(true){
var result__25592__auto__ = switch__25589__auto__(state_29268);
if(cljs.core.keyword_identical_QMARK_(result__25592__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__25592__auto__;
}
break;
}
}catch (e29305){if((e29305 instanceof Object)){
var ex__25593__auto__ = e29305;
var statearr_29306_29332 = state_29268;
(statearr_29306_29332[(5)] = ex__25593__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29268);

return cljs.core.cst$kw$recur;
} else {
throw e29305;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25591__auto__,cljs.core.cst$kw$recur)){
var G__29333 = state_29268;
state_29268 = G__29333;
continue;
} else {
return ret_value__25591__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__25590__auto__ = function(state_29268){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__25590__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__25590__auto____1.call(this,state_29268);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__25590__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__25590__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__25590__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__25590__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__25590__auto__;
})()
;})(switch__25589__auto__,c__25780__auto__))
})();
var state__25782__auto__ = (function (){var statearr_29307 = (f__25781__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25781__auto__.cljs$core$IFn$_invoke$arity$0() : f__25781__auto__.call(null));
(statearr_29307[(6)] = c__25780__auto__);

return statearr_29307;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25782__auto__);
});})(c__25780__auto__))
);

return c__25780__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__29335 = arguments.length;
switch (G__29335) {
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
var G__29338 = arguments.length;
switch (G__29338) {
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
var G__29341 = arguments.length;
switch (G__29341) {
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
var c__25780__auto___29388 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25780__auto___29388,out){
return (function (){
var f__25781__auto__ = (function (){var switch__25589__auto__ = ((function (c__25780__auto___29388,out){
return (function (state_29365){
var state_val_29366 = (state_29365[(1)]);
if((state_val_29366 === (7))){
var inst_29360 = (state_29365[(2)]);
var state_29365__$1 = state_29365;
var statearr_29367_29389 = state_29365__$1;
(statearr_29367_29389[(2)] = inst_29360);

(statearr_29367_29389[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29366 === (1))){
var inst_29342 = null;
var state_29365__$1 = (function (){var statearr_29368 = state_29365;
(statearr_29368[(7)] = inst_29342);

return statearr_29368;
})();
var statearr_29369_29390 = state_29365__$1;
(statearr_29369_29390[(2)] = null);

(statearr_29369_29390[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29366 === (4))){
var inst_29345 = (state_29365[(8)]);
var inst_29345__$1 = (state_29365[(2)]);
var inst_29346 = (inst_29345__$1 == null);
var inst_29347 = cljs.core.not(inst_29346);
var state_29365__$1 = (function (){var statearr_29370 = state_29365;
(statearr_29370[(8)] = inst_29345__$1);

return statearr_29370;
})();
if(inst_29347){
var statearr_29371_29391 = state_29365__$1;
(statearr_29371_29391[(1)] = (5));

} else {
var statearr_29372_29392 = state_29365__$1;
(statearr_29372_29392[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29366 === (6))){
var state_29365__$1 = state_29365;
var statearr_29373_29393 = state_29365__$1;
(statearr_29373_29393[(2)] = null);

(statearr_29373_29393[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29366 === (3))){
var inst_29362 = (state_29365[(2)]);
var inst_29363 = cljs.core.async.close_BANG_(out);
var state_29365__$1 = (function (){var statearr_29374 = state_29365;
(statearr_29374[(9)] = inst_29362);

return statearr_29374;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_29365__$1,inst_29363);
} else {
if((state_val_29366 === (2))){
var state_29365__$1 = state_29365;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29365__$1,(4),ch);
} else {
if((state_val_29366 === (11))){
var inst_29345 = (state_29365[(8)]);
var inst_29354 = (state_29365[(2)]);
var inst_29342 = inst_29345;
var state_29365__$1 = (function (){var statearr_29375 = state_29365;
(statearr_29375[(10)] = inst_29354);

(statearr_29375[(7)] = inst_29342);

return statearr_29375;
})();
var statearr_29376_29394 = state_29365__$1;
(statearr_29376_29394[(2)] = null);

(statearr_29376_29394[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29366 === (9))){
var inst_29345 = (state_29365[(8)]);
var state_29365__$1 = state_29365;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29365__$1,(11),out,inst_29345);
} else {
if((state_val_29366 === (5))){
var inst_29345 = (state_29365[(8)]);
var inst_29342 = (state_29365[(7)]);
var inst_29349 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_29345,inst_29342);
var state_29365__$1 = state_29365;
if(inst_29349){
var statearr_29378_29395 = state_29365__$1;
(statearr_29378_29395[(1)] = (8));

} else {
var statearr_29379_29396 = state_29365__$1;
(statearr_29379_29396[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29366 === (10))){
var inst_29357 = (state_29365[(2)]);
var state_29365__$1 = state_29365;
var statearr_29380_29397 = state_29365__$1;
(statearr_29380_29397[(2)] = inst_29357);

(statearr_29380_29397[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29366 === (8))){
var inst_29342 = (state_29365[(7)]);
var tmp29377 = inst_29342;
var inst_29342__$1 = tmp29377;
var state_29365__$1 = (function (){var statearr_29381 = state_29365;
(statearr_29381[(7)] = inst_29342__$1);

return statearr_29381;
})();
var statearr_29382_29398 = state_29365__$1;
(statearr_29382_29398[(2)] = null);

(statearr_29382_29398[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__25780__auto___29388,out))
;
return ((function (switch__25589__auto__,c__25780__auto___29388,out){
return (function() {
var cljs$core$async$state_machine__25590__auto__ = null;
var cljs$core$async$state_machine__25590__auto____0 = (function (){
var statearr_29383 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29383[(0)] = cljs$core$async$state_machine__25590__auto__);

(statearr_29383[(1)] = (1));

return statearr_29383;
});
var cljs$core$async$state_machine__25590__auto____1 = (function (state_29365){
while(true){
var ret_value__25591__auto__ = (function (){try{while(true){
var result__25592__auto__ = switch__25589__auto__(state_29365);
if(cljs.core.keyword_identical_QMARK_(result__25592__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__25592__auto__;
}
break;
}
}catch (e29384){if((e29384 instanceof Object)){
var ex__25593__auto__ = e29384;
var statearr_29385_29399 = state_29365;
(statearr_29385_29399[(5)] = ex__25593__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29365);

return cljs.core.cst$kw$recur;
} else {
throw e29384;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25591__auto__,cljs.core.cst$kw$recur)){
var G__29400 = state_29365;
state_29365 = G__29400;
continue;
} else {
return ret_value__25591__auto__;
}
break;
}
});
cljs$core$async$state_machine__25590__auto__ = function(state_29365){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25590__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25590__auto____1.call(this,state_29365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25590__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25590__auto____0;
cljs$core$async$state_machine__25590__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25590__auto____1;
return cljs$core$async$state_machine__25590__auto__;
})()
;})(switch__25589__auto__,c__25780__auto___29388,out))
})();
var state__25782__auto__ = (function (){var statearr_29386 = (f__25781__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25781__auto__.cljs$core$IFn$_invoke$arity$0() : f__25781__auto__.call(null));
(statearr_29386[(6)] = c__25780__auto___29388);

return statearr_29386;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25782__auto__);
});})(c__25780__auto___29388,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__29402 = arguments.length;
switch (G__29402) {
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
var c__25780__auto___29468 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25780__auto___29468,out){
return (function (){
var f__25781__auto__ = (function (){var switch__25589__auto__ = ((function (c__25780__auto___29468,out){
return (function (state_29440){
var state_val_29441 = (state_29440[(1)]);
if((state_val_29441 === (7))){
var inst_29436 = (state_29440[(2)]);
var state_29440__$1 = state_29440;
var statearr_29442_29469 = state_29440__$1;
(statearr_29442_29469[(2)] = inst_29436);

(statearr_29442_29469[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29441 === (1))){
var inst_29403 = (new Array(n));
var inst_29404 = inst_29403;
var inst_29405 = (0);
var state_29440__$1 = (function (){var statearr_29443 = state_29440;
(statearr_29443[(7)] = inst_29404);

(statearr_29443[(8)] = inst_29405);

return statearr_29443;
})();
var statearr_29444_29470 = state_29440__$1;
(statearr_29444_29470[(2)] = null);

(statearr_29444_29470[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29441 === (4))){
var inst_29408 = (state_29440[(9)]);
var inst_29408__$1 = (state_29440[(2)]);
var inst_29409 = (inst_29408__$1 == null);
var inst_29410 = cljs.core.not(inst_29409);
var state_29440__$1 = (function (){var statearr_29445 = state_29440;
(statearr_29445[(9)] = inst_29408__$1);

return statearr_29445;
})();
if(inst_29410){
var statearr_29446_29471 = state_29440__$1;
(statearr_29446_29471[(1)] = (5));

} else {
var statearr_29447_29472 = state_29440__$1;
(statearr_29447_29472[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29441 === (15))){
var inst_29430 = (state_29440[(2)]);
var state_29440__$1 = state_29440;
var statearr_29448_29473 = state_29440__$1;
(statearr_29448_29473[(2)] = inst_29430);

(statearr_29448_29473[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29441 === (13))){
var state_29440__$1 = state_29440;
var statearr_29449_29474 = state_29440__$1;
(statearr_29449_29474[(2)] = null);

(statearr_29449_29474[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29441 === (6))){
var inst_29405 = (state_29440[(8)]);
var inst_29426 = (inst_29405 > (0));
var state_29440__$1 = state_29440;
if(cljs.core.truth_(inst_29426)){
var statearr_29450_29475 = state_29440__$1;
(statearr_29450_29475[(1)] = (12));

} else {
var statearr_29451_29476 = state_29440__$1;
(statearr_29451_29476[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29441 === (3))){
var inst_29438 = (state_29440[(2)]);
var state_29440__$1 = state_29440;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29440__$1,inst_29438);
} else {
if((state_val_29441 === (12))){
var inst_29404 = (state_29440[(7)]);
var inst_29428 = cljs.core.vec(inst_29404);
var state_29440__$1 = state_29440;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29440__$1,(15),out,inst_29428);
} else {
if((state_val_29441 === (2))){
var state_29440__$1 = state_29440;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29440__$1,(4),ch);
} else {
if((state_val_29441 === (11))){
var inst_29420 = (state_29440[(2)]);
var inst_29421 = (new Array(n));
var inst_29404 = inst_29421;
var inst_29405 = (0);
var state_29440__$1 = (function (){var statearr_29452 = state_29440;
(statearr_29452[(7)] = inst_29404);

(statearr_29452[(10)] = inst_29420);

(statearr_29452[(8)] = inst_29405);

return statearr_29452;
})();
var statearr_29453_29477 = state_29440__$1;
(statearr_29453_29477[(2)] = null);

(statearr_29453_29477[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29441 === (9))){
var inst_29404 = (state_29440[(7)]);
var inst_29418 = cljs.core.vec(inst_29404);
var state_29440__$1 = state_29440;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29440__$1,(11),out,inst_29418);
} else {
if((state_val_29441 === (5))){
var inst_29408 = (state_29440[(9)]);
var inst_29404 = (state_29440[(7)]);
var inst_29413 = (state_29440[(11)]);
var inst_29405 = (state_29440[(8)]);
var inst_29412 = (inst_29404[inst_29405] = inst_29408);
var inst_29413__$1 = (inst_29405 + (1));
var inst_29414 = (inst_29413__$1 < n);
var state_29440__$1 = (function (){var statearr_29454 = state_29440;
(statearr_29454[(11)] = inst_29413__$1);

(statearr_29454[(12)] = inst_29412);

return statearr_29454;
})();
if(cljs.core.truth_(inst_29414)){
var statearr_29455_29478 = state_29440__$1;
(statearr_29455_29478[(1)] = (8));

} else {
var statearr_29456_29479 = state_29440__$1;
(statearr_29456_29479[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29441 === (14))){
var inst_29433 = (state_29440[(2)]);
var inst_29434 = cljs.core.async.close_BANG_(out);
var state_29440__$1 = (function (){var statearr_29458 = state_29440;
(statearr_29458[(13)] = inst_29433);

return statearr_29458;
})();
var statearr_29459_29480 = state_29440__$1;
(statearr_29459_29480[(2)] = inst_29434);

(statearr_29459_29480[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29441 === (10))){
var inst_29424 = (state_29440[(2)]);
var state_29440__$1 = state_29440;
var statearr_29460_29481 = state_29440__$1;
(statearr_29460_29481[(2)] = inst_29424);

(statearr_29460_29481[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29441 === (8))){
var inst_29404 = (state_29440[(7)]);
var inst_29413 = (state_29440[(11)]);
var tmp29457 = inst_29404;
var inst_29404__$1 = tmp29457;
var inst_29405 = inst_29413;
var state_29440__$1 = (function (){var statearr_29461 = state_29440;
(statearr_29461[(7)] = inst_29404__$1);

(statearr_29461[(8)] = inst_29405);

return statearr_29461;
})();
var statearr_29462_29482 = state_29440__$1;
(statearr_29462_29482[(2)] = null);

(statearr_29462_29482[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__25780__auto___29468,out))
;
return ((function (switch__25589__auto__,c__25780__auto___29468,out){
return (function() {
var cljs$core$async$state_machine__25590__auto__ = null;
var cljs$core$async$state_machine__25590__auto____0 = (function (){
var statearr_29463 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29463[(0)] = cljs$core$async$state_machine__25590__auto__);

(statearr_29463[(1)] = (1));

return statearr_29463;
});
var cljs$core$async$state_machine__25590__auto____1 = (function (state_29440){
while(true){
var ret_value__25591__auto__ = (function (){try{while(true){
var result__25592__auto__ = switch__25589__auto__(state_29440);
if(cljs.core.keyword_identical_QMARK_(result__25592__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__25592__auto__;
}
break;
}
}catch (e29464){if((e29464 instanceof Object)){
var ex__25593__auto__ = e29464;
var statearr_29465_29483 = state_29440;
(statearr_29465_29483[(5)] = ex__25593__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29440);

return cljs.core.cst$kw$recur;
} else {
throw e29464;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25591__auto__,cljs.core.cst$kw$recur)){
var G__29484 = state_29440;
state_29440 = G__29484;
continue;
} else {
return ret_value__25591__auto__;
}
break;
}
});
cljs$core$async$state_machine__25590__auto__ = function(state_29440){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25590__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25590__auto____1.call(this,state_29440);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25590__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25590__auto____0;
cljs$core$async$state_machine__25590__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25590__auto____1;
return cljs$core$async$state_machine__25590__auto__;
})()
;})(switch__25589__auto__,c__25780__auto___29468,out))
})();
var state__25782__auto__ = (function (){var statearr_29466 = (f__25781__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25781__auto__.cljs$core$IFn$_invoke$arity$0() : f__25781__auto__.call(null));
(statearr_29466[(6)] = c__25780__auto___29468);

return statearr_29466;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25782__auto__);
});})(c__25780__auto___29468,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__29486 = arguments.length;
switch (G__29486) {
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
var c__25780__auto___29556 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25780__auto___29556,out){
return (function (){
var f__25781__auto__ = (function (){var switch__25589__auto__ = ((function (c__25780__auto___29556,out){
return (function (state_29528){
var state_val_29529 = (state_29528[(1)]);
if((state_val_29529 === (7))){
var inst_29524 = (state_29528[(2)]);
var state_29528__$1 = state_29528;
var statearr_29530_29557 = state_29528__$1;
(statearr_29530_29557[(2)] = inst_29524);

(statearr_29530_29557[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29529 === (1))){
var inst_29487 = [];
var inst_29488 = inst_29487;
var inst_29489 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_29528__$1 = (function (){var statearr_29531 = state_29528;
(statearr_29531[(7)] = inst_29488);

(statearr_29531[(8)] = inst_29489);

return statearr_29531;
})();
var statearr_29532_29558 = state_29528__$1;
(statearr_29532_29558[(2)] = null);

(statearr_29532_29558[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29529 === (4))){
var inst_29492 = (state_29528[(9)]);
var inst_29492__$1 = (state_29528[(2)]);
var inst_29493 = (inst_29492__$1 == null);
var inst_29494 = cljs.core.not(inst_29493);
var state_29528__$1 = (function (){var statearr_29533 = state_29528;
(statearr_29533[(9)] = inst_29492__$1);

return statearr_29533;
})();
if(inst_29494){
var statearr_29534_29559 = state_29528__$1;
(statearr_29534_29559[(1)] = (5));

} else {
var statearr_29535_29560 = state_29528__$1;
(statearr_29535_29560[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29529 === (15))){
var inst_29518 = (state_29528[(2)]);
var state_29528__$1 = state_29528;
var statearr_29536_29561 = state_29528__$1;
(statearr_29536_29561[(2)] = inst_29518);

(statearr_29536_29561[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29529 === (13))){
var state_29528__$1 = state_29528;
var statearr_29537_29562 = state_29528__$1;
(statearr_29537_29562[(2)] = null);

(statearr_29537_29562[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29529 === (6))){
var inst_29488 = (state_29528[(7)]);
var inst_29513 = inst_29488.length;
var inst_29514 = (inst_29513 > (0));
var state_29528__$1 = state_29528;
if(cljs.core.truth_(inst_29514)){
var statearr_29538_29563 = state_29528__$1;
(statearr_29538_29563[(1)] = (12));

} else {
var statearr_29539_29564 = state_29528__$1;
(statearr_29539_29564[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29529 === (3))){
var inst_29526 = (state_29528[(2)]);
var state_29528__$1 = state_29528;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29528__$1,inst_29526);
} else {
if((state_val_29529 === (12))){
var inst_29488 = (state_29528[(7)]);
var inst_29516 = cljs.core.vec(inst_29488);
var state_29528__$1 = state_29528;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29528__$1,(15),out,inst_29516);
} else {
if((state_val_29529 === (2))){
var state_29528__$1 = state_29528;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29528__$1,(4),ch);
} else {
if((state_val_29529 === (11))){
var inst_29492 = (state_29528[(9)]);
var inst_29496 = (state_29528[(10)]);
var inst_29506 = (state_29528[(2)]);
var inst_29507 = [];
var inst_29508 = inst_29507.push(inst_29492);
var inst_29488 = inst_29507;
var inst_29489 = inst_29496;
var state_29528__$1 = (function (){var statearr_29540 = state_29528;
(statearr_29540[(7)] = inst_29488);

(statearr_29540[(8)] = inst_29489);

(statearr_29540[(11)] = inst_29508);

(statearr_29540[(12)] = inst_29506);

return statearr_29540;
})();
var statearr_29541_29565 = state_29528__$1;
(statearr_29541_29565[(2)] = null);

(statearr_29541_29565[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29529 === (9))){
var inst_29488 = (state_29528[(7)]);
var inst_29504 = cljs.core.vec(inst_29488);
var state_29528__$1 = state_29528;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29528__$1,(11),out,inst_29504);
} else {
if((state_val_29529 === (5))){
var inst_29489 = (state_29528[(8)]);
var inst_29492 = (state_29528[(9)]);
var inst_29496 = (state_29528[(10)]);
var inst_29496__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_29492) : f.call(null,inst_29492));
var inst_29497 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_29496__$1,inst_29489);
var inst_29498 = cljs.core.keyword_identical_QMARK_(inst_29489,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_29499 = ((inst_29497) || (inst_29498));
var state_29528__$1 = (function (){var statearr_29542 = state_29528;
(statearr_29542[(10)] = inst_29496__$1);

return statearr_29542;
})();
if(cljs.core.truth_(inst_29499)){
var statearr_29543_29566 = state_29528__$1;
(statearr_29543_29566[(1)] = (8));

} else {
var statearr_29544_29567 = state_29528__$1;
(statearr_29544_29567[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29529 === (14))){
var inst_29521 = (state_29528[(2)]);
var inst_29522 = cljs.core.async.close_BANG_(out);
var state_29528__$1 = (function (){var statearr_29546 = state_29528;
(statearr_29546[(13)] = inst_29521);

return statearr_29546;
})();
var statearr_29547_29568 = state_29528__$1;
(statearr_29547_29568[(2)] = inst_29522);

(statearr_29547_29568[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29529 === (10))){
var inst_29511 = (state_29528[(2)]);
var state_29528__$1 = state_29528;
var statearr_29548_29569 = state_29528__$1;
(statearr_29548_29569[(2)] = inst_29511);

(statearr_29548_29569[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29529 === (8))){
var inst_29488 = (state_29528[(7)]);
var inst_29492 = (state_29528[(9)]);
var inst_29496 = (state_29528[(10)]);
var inst_29501 = inst_29488.push(inst_29492);
var tmp29545 = inst_29488;
var inst_29488__$1 = tmp29545;
var inst_29489 = inst_29496;
var state_29528__$1 = (function (){var statearr_29549 = state_29528;
(statearr_29549[(7)] = inst_29488__$1);

(statearr_29549[(8)] = inst_29489);

(statearr_29549[(14)] = inst_29501);

return statearr_29549;
})();
var statearr_29550_29570 = state_29528__$1;
(statearr_29550_29570[(2)] = null);

(statearr_29550_29570[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__25780__auto___29556,out))
;
return ((function (switch__25589__auto__,c__25780__auto___29556,out){
return (function() {
var cljs$core$async$state_machine__25590__auto__ = null;
var cljs$core$async$state_machine__25590__auto____0 = (function (){
var statearr_29551 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29551[(0)] = cljs$core$async$state_machine__25590__auto__);

(statearr_29551[(1)] = (1));

return statearr_29551;
});
var cljs$core$async$state_machine__25590__auto____1 = (function (state_29528){
while(true){
var ret_value__25591__auto__ = (function (){try{while(true){
var result__25592__auto__ = switch__25589__auto__(state_29528);
if(cljs.core.keyword_identical_QMARK_(result__25592__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__25592__auto__;
}
break;
}
}catch (e29552){if((e29552 instanceof Object)){
var ex__25593__auto__ = e29552;
var statearr_29553_29571 = state_29528;
(statearr_29553_29571[(5)] = ex__25593__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29528);

return cljs.core.cst$kw$recur;
} else {
throw e29552;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25591__auto__,cljs.core.cst$kw$recur)){
var G__29572 = state_29528;
state_29528 = G__29572;
continue;
} else {
return ret_value__25591__auto__;
}
break;
}
});
cljs$core$async$state_machine__25590__auto__ = function(state_29528){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25590__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25590__auto____1.call(this,state_29528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25590__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25590__auto____0;
cljs$core$async$state_machine__25590__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25590__auto____1;
return cljs$core$async$state_machine__25590__auto__;
})()
;})(switch__25589__auto__,c__25780__auto___29556,out))
})();
var state__25782__auto__ = (function (){var statearr_29554 = (f__25781__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25781__auto__.cljs$core$IFn$_invoke$arity$0() : f__25781__auto__.call(null));
(statearr_29554[(6)] = c__25780__auto___29556);

return statearr_29554;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25782__auto__);
});})(c__25780__auto___29556,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

