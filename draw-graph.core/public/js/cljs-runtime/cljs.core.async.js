goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__30449 = arguments.length;
switch (G__30449) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30451 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30451 = (function (f,blockable,meta30452){
this.f = f;
this.blockable = blockable;
this.meta30452 = meta30452;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30451.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30453,meta30452__$1){
var self__ = this;
var _30453__$1 = this;
return (new cljs.core.async.t_cljs$core$async30451(self__.f,self__.blockable,meta30452__$1));
});

cljs.core.async.t_cljs$core$async30451.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30453){
var self__ = this;
var _30453__$1 = this;
return self__.meta30452;
});

cljs.core.async.t_cljs$core$async30451.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30451.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30451.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async30451.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async30451.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30452","meta30452",-1770994791,null)], null);
});

cljs.core.async.t_cljs$core$async30451.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30451.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30451";

cljs.core.async.t_cljs$core$async30451.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async30451");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30451.
 */
cljs.core.async.__GT_t_cljs$core$async30451 = (function cljs$core$async$__GT_t_cljs$core$async30451(f__$1,blockable__$1,meta30452){
return (new cljs.core.async.t_cljs$core$async30451(f__$1,blockable__$1,meta30452));
});

}

return (new cljs.core.async.t_cljs$core$async30451(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__30472 = arguments.length;
switch (G__30472) {
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
var G__30492 = arguments.length;
switch (G__30492) {
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
var G__30503 = arguments.length;
switch (G__30503) {
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
var val_32999 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32999) : fn1.call(null,val_32999));
} else {
cljs.core.async.impl.dispatch.run(((function (val_32999,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32999) : fn1.call(null,val_32999));
});})(val_32999,ret))
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
var G__30527 = arguments.length;
switch (G__30527) {
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
var n__4607__auto___33009 = n;
var x_33010 = (0);
while(true){
if((x_33010 < n__4607__auto___33009)){
(a[x_33010] = (0));

var G__33015 = (x_33010 + (1));
x_33010 = G__33015;
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

var G__33023 = (i + (1));
i = G__33023;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30560 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30560 = (function (flag,meta30561){
this.flag = flag;
this.meta30561 = meta30561;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30560.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_30562,meta30561__$1){
var self__ = this;
var _30562__$1 = this;
return (new cljs.core.async.t_cljs$core$async30560(self__.flag,meta30561__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async30560.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_30562){
var self__ = this;
var _30562__$1 = this;
return self__.meta30561;
});})(flag))
;

cljs.core.async.t_cljs$core$async30560.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30560.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async30560.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30560.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30560.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30561","meta30561",1335308542,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async30560.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30560.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30560";

cljs.core.async.t_cljs$core$async30560.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async30560");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30560.
 */
cljs.core.async.__GT_t_cljs$core$async30560 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30560(flag__$1,meta30561){
return (new cljs.core.async.t_cljs$core$async30560(flag__$1,meta30561));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async30560(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30589 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30589 = (function (flag,cb,meta30590){
this.flag = flag;
this.cb = cb;
this.meta30590 = meta30590;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30589.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30591,meta30590__$1){
var self__ = this;
var _30591__$1 = this;
return (new cljs.core.async.t_cljs$core$async30589(self__.flag,self__.cb,meta30590__$1));
});

cljs.core.async.t_cljs$core$async30589.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30591){
var self__ = this;
var _30591__$1 = this;
return self__.meta30590;
});

cljs.core.async.t_cljs$core$async30589.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30589.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async30589.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30589.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async30589.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30590","meta30590",2046694572,null)], null);
});

cljs.core.async.t_cljs$core$async30589.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30589.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30589";

cljs.core.async.t_cljs$core$async30589.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async30589");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30589.
 */
cljs.core.async.__GT_t_cljs$core$async30589 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30589(flag__$1,cb__$1,meta30590){
return (new cljs.core.async.t_cljs$core$async30589(flag__$1,cb__$1,meta30590));
});

}

return (new cljs.core.async.t_cljs$core$async30589(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__30615_SHARP_){
var G__30623 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30615_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30623) : fret.call(null,G__30623));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30616_SHARP_){
var G__30627 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30616_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30627) : fret.call(null,G__30627));
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
var G__33075 = (i + (1));
i = G__33075;
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
var len__4730__auto___33084 = arguments.length;
var i__4731__auto___33085 = (0);
while(true){
if((i__4731__auto___33085 < len__4730__auto___33084)){
args__4736__auto__.push((arguments[i__4731__auto___33085]));

var G__33088 = (i__4731__auto___33085 + (1));
i__4731__auto___33085 = G__33088;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30650){
var map__30651 = p__30650;
var map__30651__$1 = (((((!((map__30651 == null))))?(((((map__30651.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30651.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30651):map__30651);
var opts = map__30651__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30648){
var G__30649 = cljs.core.first(seq30648);
var seq30648__$1 = cljs.core.next(seq30648);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30649,seq30648__$1);
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
var G__30684 = arguments.length;
switch (G__30684) {
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
var c__30361__auto___33109 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30361__auto___33109){
return (function (){
var f__30362__auto__ = (function (){var switch__30100__auto__ = ((function (c__30361__auto___33109){
return (function (state_30730){
var state_val_30731 = (state_30730[(1)]);
if((state_val_30731 === (7))){
var inst_30723 = (state_30730[(2)]);
var state_30730__$1 = state_30730;
var statearr_30742_33114 = state_30730__$1;
(statearr_30742_33114[(2)] = inst_30723);

(statearr_30742_33114[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30731 === (1))){
var state_30730__$1 = state_30730;
var statearr_30745_33119 = state_30730__$1;
(statearr_30745_33119[(2)] = null);

(statearr_30745_33119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30731 === (4))){
var inst_30704 = (state_30730[(7)]);
var inst_30704__$1 = (state_30730[(2)]);
var inst_30707 = (inst_30704__$1 == null);
var state_30730__$1 = (function (){var statearr_30748 = state_30730;
(statearr_30748[(7)] = inst_30704__$1);

return statearr_30748;
})();
if(cljs.core.truth_(inst_30707)){
var statearr_30749_33126 = state_30730__$1;
(statearr_30749_33126[(1)] = (5));

} else {
var statearr_30750_33127 = state_30730__$1;
(statearr_30750_33127[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30731 === (13))){
var state_30730__$1 = state_30730;
var statearr_30751_33130 = state_30730__$1;
(statearr_30751_33130[(2)] = null);

(statearr_30751_33130[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30731 === (6))){
var inst_30704 = (state_30730[(7)]);
var state_30730__$1 = state_30730;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30730__$1,(11),to,inst_30704);
} else {
if((state_val_30731 === (3))){
var inst_30727 = (state_30730[(2)]);
var state_30730__$1 = state_30730;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30730__$1,inst_30727);
} else {
if((state_val_30731 === (12))){
var state_30730__$1 = state_30730;
var statearr_30763_33135 = state_30730__$1;
(statearr_30763_33135[(2)] = null);

(statearr_30763_33135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30731 === (2))){
var state_30730__$1 = state_30730;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30730__$1,(4),from);
} else {
if((state_val_30731 === (11))){
var inst_30716 = (state_30730[(2)]);
var state_30730__$1 = state_30730;
if(cljs.core.truth_(inst_30716)){
var statearr_30768_33136 = state_30730__$1;
(statearr_30768_33136[(1)] = (12));

} else {
var statearr_30769_33137 = state_30730__$1;
(statearr_30769_33137[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30731 === (9))){
var state_30730__$1 = state_30730;
var statearr_30771_33142 = state_30730__$1;
(statearr_30771_33142[(2)] = null);

(statearr_30771_33142[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30731 === (5))){
var state_30730__$1 = state_30730;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30773_33146 = state_30730__$1;
(statearr_30773_33146[(1)] = (8));

} else {
var statearr_30774_33147 = state_30730__$1;
(statearr_30774_33147[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30731 === (14))){
var inst_30721 = (state_30730[(2)]);
var state_30730__$1 = state_30730;
var statearr_30775_33149 = state_30730__$1;
(statearr_30775_33149[(2)] = inst_30721);

(statearr_30775_33149[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30731 === (10))){
var inst_30713 = (state_30730[(2)]);
var state_30730__$1 = state_30730;
var statearr_30776_33150 = state_30730__$1;
(statearr_30776_33150[(2)] = inst_30713);

(statearr_30776_33150[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30731 === (8))){
var inst_30710 = cljs.core.async.close_BANG_(to);
var state_30730__$1 = state_30730;
var statearr_30780_33151 = state_30730__$1;
(statearr_30780_33151[(2)] = inst_30710);

(statearr_30780_33151[(1)] = (10));


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
});})(c__30361__auto___33109))
;
return ((function (switch__30100__auto__,c__30361__auto___33109){
return (function() {
var cljs$core$async$state_machine__30101__auto__ = null;
var cljs$core$async$state_machine__30101__auto____0 = (function (){
var statearr_30781 = [null,null,null,null,null,null,null,null];
(statearr_30781[(0)] = cljs$core$async$state_machine__30101__auto__);

(statearr_30781[(1)] = (1));

return statearr_30781;
});
var cljs$core$async$state_machine__30101__auto____1 = (function (state_30730){
while(true){
var ret_value__30102__auto__ = (function (){try{while(true){
var result__30103__auto__ = switch__30100__auto__(state_30730);
if(cljs.core.keyword_identical_QMARK_(result__30103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30103__auto__;
}
break;
}
}catch (e30782){if((e30782 instanceof Object)){
var ex__30104__auto__ = e30782;
var statearr_30783_33154 = state_30730;
(statearr_30783_33154[(5)] = ex__30104__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30730);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30782;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33156 = state_30730;
state_30730 = G__33156;
continue;
} else {
return ret_value__30102__auto__;
}
break;
}
});
cljs$core$async$state_machine__30101__auto__ = function(state_30730){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30101__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30101__auto____1.call(this,state_30730);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30101__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30101__auto____0;
cljs$core$async$state_machine__30101__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30101__auto____1;
return cljs$core$async$state_machine__30101__auto__;
})()
;})(switch__30100__auto__,c__30361__auto___33109))
})();
var state__30363__auto__ = (function (){var statearr_30785 = (f__30362__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30362__auto__.cljs$core$IFn$_invoke$arity$0() : f__30362__auto__.call(null));
(statearr_30785[(6)] = c__30361__auto___33109);

return statearr_30785;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30363__auto__);
});})(c__30361__auto___33109))
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
return (function (p__30798){
var vec__30799 = p__30798;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30799,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30799,(1),null);
var job = vec__30799;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__30361__auto___33182 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30361__auto___33182,res,vec__30799,v,p,job,jobs,results){
return (function (){
var f__30362__auto__ = (function (){var switch__30100__auto__ = ((function (c__30361__auto___33182,res,vec__30799,v,p,job,jobs,results){
return (function (state_30807){
var state_val_30808 = (state_30807[(1)]);
if((state_val_30808 === (1))){
var state_30807__$1 = state_30807;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30807__$1,(2),res,v);
} else {
if((state_val_30808 === (2))){
var inst_30803 = (state_30807[(2)]);
var inst_30804 = cljs.core.async.close_BANG_(res);
var state_30807__$1 = (function (){var statearr_30813 = state_30807;
(statearr_30813[(7)] = inst_30803);

return statearr_30813;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30807__$1,inst_30804);
} else {
return null;
}
}
});})(c__30361__auto___33182,res,vec__30799,v,p,job,jobs,results))
;
return ((function (switch__30100__auto__,c__30361__auto___33182,res,vec__30799,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30101__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30101__auto____0 = (function (){
var statearr_30818 = [null,null,null,null,null,null,null,null];
(statearr_30818[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30101__auto__);

(statearr_30818[(1)] = (1));

return statearr_30818;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30101__auto____1 = (function (state_30807){
while(true){
var ret_value__30102__auto__ = (function (){try{while(true){
var result__30103__auto__ = switch__30100__auto__(state_30807);
if(cljs.core.keyword_identical_QMARK_(result__30103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30103__auto__;
}
break;
}
}catch (e30819){if((e30819 instanceof Object)){
var ex__30104__auto__ = e30819;
var statearr_30820_33185 = state_30807;
(statearr_30820_33185[(5)] = ex__30104__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30807);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30819;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33189 = state_30807;
state_30807 = G__33189;
continue;
} else {
return ret_value__30102__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30101__auto__ = function(state_30807){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30101__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30101__auto____1.call(this,state_30807);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30101__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30101__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30101__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30101__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30101__auto__;
})()
;})(switch__30100__auto__,c__30361__auto___33182,res,vec__30799,v,p,job,jobs,results))
})();
var state__30363__auto__ = (function (){var statearr_30825 = (f__30362__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30362__auto__.cljs$core$IFn$_invoke$arity$0() : f__30362__auto__.call(null));
(statearr_30825[(6)] = c__30361__auto___33182);

return statearr_30825;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30363__auto__);
});})(c__30361__auto___33182,res,vec__30799,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__30829){
var vec__30831 = p__30829;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30831,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30831,(1),null);
var job = vec__30831;
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
var n__4607__auto___33200 = n;
var __33201 = (0);
while(true){
if((__33201 < n__4607__auto___33200)){
var G__30834_33202 = type;
var G__30834_33203__$1 = (((G__30834_33202 instanceof cljs.core.Keyword))?G__30834_33202.fqn:null);
switch (G__30834_33203__$1) {
case "compute":
var c__30361__auto___33205 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33201,c__30361__auto___33205,G__30834_33202,G__30834_33203__$1,n__4607__auto___33200,jobs,results,process,async){
return (function (){
var f__30362__auto__ = (function (){var switch__30100__auto__ = ((function (__33201,c__30361__auto___33205,G__30834_33202,G__30834_33203__$1,n__4607__auto___33200,jobs,results,process,async){
return (function (state_30851){
var state_val_30852 = (state_30851[(1)]);
if((state_val_30852 === (1))){
var state_30851__$1 = state_30851;
var statearr_30853_33206 = state_30851__$1;
(statearr_30853_33206[(2)] = null);

(statearr_30853_33206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30852 === (2))){
var state_30851__$1 = state_30851;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30851__$1,(4),jobs);
} else {
if((state_val_30852 === (3))){
var inst_30849 = (state_30851[(2)]);
var state_30851__$1 = state_30851;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30851__$1,inst_30849);
} else {
if((state_val_30852 === (4))){
var inst_30841 = (state_30851[(2)]);
var inst_30842 = process(inst_30841);
var state_30851__$1 = state_30851;
if(cljs.core.truth_(inst_30842)){
var statearr_30854_33212 = state_30851__$1;
(statearr_30854_33212[(1)] = (5));

} else {
var statearr_30855_33213 = state_30851__$1;
(statearr_30855_33213[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30852 === (5))){
var state_30851__$1 = state_30851;
var statearr_30856_33214 = state_30851__$1;
(statearr_30856_33214[(2)] = null);

(statearr_30856_33214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30852 === (6))){
var state_30851__$1 = state_30851;
var statearr_30857_33215 = state_30851__$1;
(statearr_30857_33215[(2)] = null);

(statearr_30857_33215[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30852 === (7))){
var inst_30847 = (state_30851[(2)]);
var state_30851__$1 = state_30851;
var statearr_30858_33217 = state_30851__$1;
(statearr_30858_33217[(2)] = inst_30847);

(statearr_30858_33217[(1)] = (3));


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
});})(__33201,c__30361__auto___33205,G__30834_33202,G__30834_33203__$1,n__4607__auto___33200,jobs,results,process,async))
;
return ((function (__33201,switch__30100__auto__,c__30361__auto___33205,G__30834_33202,G__30834_33203__$1,n__4607__auto___33200,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30101__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30101__auto____0 = (function (){
var statearr_30863 = [null,null,null,null,null,null,null];
(statearr_30863[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30101__auto__);

(statearr_30863[(1)] = (1));

return statearr_30863;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30101__auto____1 = (function (state_30851){
while(true){
var ret_value__30102__auto__ = (function (){try{while(true){
var result__30103__auto__ = switch__30100__auto__(state_30851);
if(cljs.core.keyword_identical_QMARK_(result__30103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30103__auto__;
}
break;
}
}catch (e30864){if((e30864 instanceof Object)){
var ex__30104__auto__ = e30864;
var statearr_30865_33220 = state_30851;
(statearr_30865_33220[(5)] = ex__30104__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30851);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30864;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33221 = state_30851;
state_30851 = G__33221;
continue;
} else {
return ret_value__30102__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30101__auto__ = function(state_30851){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30101__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30101__auto____1.call(this,state_30851);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30101__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30101__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30101__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30101__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30101__auto__;
})()
;})(__33201,switch__30100__auto__,c__30361__auto___33205,G__30834_33202,G__30834_33203__$1,n__4607__auto___33200,jobs,results,process,async))
})();
var state__30363__auto__ = (function (){var statearr_30872 = (f__30362__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30362__auto__.cljs$core$IFn$_invoke$arity$0() : f__30362__auto__.call(null));
(statearr_30872[(6)] = c__30361__auto___33205);

return statearr_30872;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30363__auto__);
});})(__33201,c__30361__auto___33205,G__30834_33202,G__30834_33203__$1,n__4607__auto___33200,jobs,results,process,async))
);


break;
case "async":
var c__30361__auto___33222 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33201,c__30361__auto___33222,G__30834_33202,G__30834_33203__$1,n__4607__auto___33200,jobs,results,process,async){
return (function (){
var f__30362__auto__ = (function (){var switch__30100__auto__ = ((function (__33201,c__30361__auto___33222,G__30834_33202,G__30834_33203__$1,n__4607__auto___33200,jobs,results,process,async){
return (function (state_30885){
var state_val_30886 = (state_30885[(1)]);
if((state_val_30886 === (1))){
var state_30885__$1 = state_30885;
var statearr_30887_33223 = state_30885__$1;
(statearr_30887_33223[(2)] = null);

(statearr_30887_33223[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30886 === (2))){
var state_30885__$1 = state_30885;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30885__$1,(4),jobs);
} else {
if((state_val_30886 === (3))){
var inst_30883 = (state_30885[(2)]);
var state_30885__$1 = state_30885;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30885__$1,inst_30883);
} else {
if((state_val_30886 === (4))){
var inst_30875 = (state_30885[(2)]);
var inst_30876 = async(inst_30875);
var state_30885__$1 = state_30885;
if(cljs.core.truth_(inst_30876)){
var statearr_30891_33237 = state_30885__$1;
(statearr_30891_33237[(1)] = (5));

} else {
var statearr_30893_33238 = state_30885__$1;
(statearr_30893_33238[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30886 === (5))){
var state_30885__$1 = state_30885;
var statearr_30895_33239 = state_30885__$1;
(statearr_30895_33239[(2)] = null);

(statearr_30895_33239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30886 === (6))){
var state_30885__$1 = state_30885;
var statearr_30897_33240 = state_30885__$1;
(statearr_30897_33240[(2)] = null);

(statearr_30897_33240[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30886 === (7))){
var inst_30881 = (state_30885[(2)]);
var state_30885__$1 = state_30885;
var statearr_30898_33242 = state_30885__$1;
(statearr_30898_33242[(2)] = inst_30881);

(statearr_30898_33242[(1)] = (3));


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
});})(__33201,c__30361__auto___33222,G__30834_33202,G__30834_33203__$1,n__4607__auto___33200,jobs,results,process,async))
;
return ((function (__33201,switch__30100__auto__,c__30361__auto___33222,G__30834_33202,G__30834_33203__$1,n__4607__auto___33200,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30101__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30101__auto____0 = (function (){
var statearr_30899 = [null,null,null,null,null,null,null];
(statearr_30899[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30101__auto__);

(statearr_30899[(1)] = (1));

return statearr_30899;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30101__auto____1 = (function (state_30885){
while(true){
var ret_value__30102__auto__ = (function (){try{while(true){
var result__30103__auto__ = switch__30100__auto__(state_30885);
if(cljs.core.keyword_identical_QMARK_(result__30103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30103__auto__;
}
break;
}
}catch (e30902){if((e30902 instanceof Object)){
var ex__30104__auto__ = e30902;
var statearr_30905_33245 = state_30885;
(statearr_30905_33245[(5)] = ex__30104__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30885);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30902;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33248 = state_30885;
state_30885 = G__33248;
continue;
} else {
return ret_value__30102__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30101__auto__ = function(state_30885){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30101__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30101__auto____1.call(this,state_30885);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30101__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30101__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30101__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30101__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30101__auto__;
})()
;})(__33201,switch__30100__auto__,c__30361__auto___33222,G__30834_33202,G__30834_33203__$1,n__4607__auto___33200,jobs,results,process,async))
})();
var state__30363__auto__ = (function (){var statearr_30906 = (f__30362__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30362__auto__.cljs$core$IFn$_invoke$arity$0() : f__30362__auto__.call(null));
(statearr_30906[(6)] = c__30361__auto___33222);

return statearr_30906;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30363__auto__);
});})(__33201,c__30361__auto___33222,G__30834_33202,G__30834_33203__$1,n__4607__auto___33200,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30834_33203__$1)].join('')));

}

var G__33253 = (__33201 + (1));
__33201 = G__33253;
continue;
} else {
}
break;
}

var c__30361__auto___33254 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30361__auto___33254,jobs,results,process,async){
return (function (){
var f__30362__auto__ = (function (){var switch__30100__auto__ = ((function (c__30361__auto___33254,jobs,results,process,async){
return (function (state_30928){
var state_val_30929 = (state_30928[(1)]);
if((state_val_30929 === (7))){
var inst_30924 = (state_30928[(2)]);
var state_30928__$1 = state_30928;
var statearr_30931_33259 = state_30928__$1;
(statearr_30931_33259[(2)] = inst_30924);

(statearr_30931_33259[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30929 === (1))){
var state_30928__$1 = state_30928;
var statearr_30932_33260 = state_30928__$1;
(statearr_30932_33260[(2)] = null);

(statearr_30932_33260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30929 === (4))){
var inst_30909 = (state_30928[(7)]);
var inst_30909__$1 = (state_30928[(2)]);
var inst_30910 = (inst_30909__$1 == null);
var state_30928__$1 = (function (){var statearr_30933 = state_30928;
(statearr_30933[(7)] = inst_30909__$1);

return statearr_30933;
})();
if(cljs.core.truth_(inst_30910)){
var statearr_30934_33263 = state_30928__$1;
(statearr_30934_33263[(1)] = (5));

} else {
var statearr_30935_33264 = state_30928__$1;
(statearr_30935_33264[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30929 === (6))){
var inst_30914 = (state_30928[(8)]);
var inst_30909 = (state_30928[(7)]);
var inst_30914__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_30915 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30916 = [inst_30909,inst_30914__$1];
var inst_30917 = (new cljs.core.PersistentVector(null,2,(5),inst_30915,inst_30916,null));
var state_30928__$1 = (function (){var statearr_30937 = state_30928;
(statearr_30937[(8)] = inst_30914__$1);

return statearr_30937;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30928__$1,(8),jobs,inst_30917);
} else {
if((state_val_30929 === (3))){
var inst_30926 = (state_30928[(2)]);
var state_30928__$1 = state_30928;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30928__$1,inst_30926);
} else {
if((state_val_30929 === (2))){
var state_30928__$1 = state_30928;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30928__$1,(4),from);
} else {
if((state_val_30929 === (9))){
var inst_30921 = (state_30928[(2)]);
var state_30928__$1 = (function (){var statearr_30947 = state_30928;
(statearr_30947[(9)] = inst_30921);

return statearr_30947;
})();
var statearr_30952_33269 = state_30928__$1;
(statearr_30952_33269[(2)] = null);

(statearr_30952_33269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30929 === (5))){
var inst_30912 = cljs.core.async.close_BANG_(jobs);
var state_30928__$1 = state_30928;
var statearr_30953_33283 = state_30928__$1;
(statearr_30953_33283[(2)] = inst_30912);

(statearr_30953_33283[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30929 === (8))){
var inst_30914 = (state_30928[(8)]);
var inst_30919 = (state_30928[(2)]);
var state_30928__$1 = (function (){var statearr_30954 = state_30928;
(statearr_30954[(10)] = inst_30919);

return statearr_30954;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30928__$1,(9),results,inst_30914);
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
});})(c__30361__auto___33254,jobs,results,process,async))
;
return ((function (switch__30100__auto__,c__30361__auto___33254,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30101__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30101__auto____0 = (function (){
var statearr_30956 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30956[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30101__auto__);

(statearr_30956[(1)] = (1));

return statearr_30956;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30101__auto____1 = (function (state_30928){
while(true){
var ret_value__30102__auto__ = (function (){try{while(true){
var result__30103__auto__ = switch__30100__auto__(state_30928);
if(cljs.core.keyword_identical_QMARK_(result__30103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30103__auto__;
}
break;
}
}catch (e30966){if((e30966 instanceof Object)){
var ex__30104__auto__ = e30966;
var statearr_30967_33291 = state_30928;
(statearr_30967_33291[(5)] = ex__30104__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30928);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30966;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33292 = state_30928;
state_30928 = G__33292;
continue;
} else {
return ret_value__30102__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30101__auto__ = function(state_30928){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30101__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30101__auto____1.call(this,state_30928);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30101__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30101__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30101__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30101__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30101__auto__;
})()
;})(switch__30100__auto__,c__30361__auto___33254,jobs,results,process,async))
})();
var state__30363__auto__ = (function (){var statearr_30973 = (f__30362__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30362__auto__.cljs$core$IFn$_invoke$arity$0() : f__30362__auto__.call(null));
(statearr_30973[(6)] = c__30361__auto___33254);

return statearr_30973;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30363__auto__);
});})(c__30361__auto___33254,jobs,results,process,async))
);


var c__30361__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30361__auto__,jobs,results,process,async){
return (function (){
var f__30362__auto__ = (function (){var switch__30100__auto__ = ((function (c__30361__auto__,jobs,results,process,async){
return (function (state_31011){
var state_val_31012 = (state_31011[(1)]);
if((state_val_31012 === (7))){
var inst_31007 = (state_31011[(2)]);
var state_31011__$1 = state_31011;
var statearr_31013_33299 = state_31011__$1;
(statearr_31013_33299[(2)] = inst_31007);

(statearr_31013_33299[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31012 === (20))){
var state_31011__$1 = state_31011;
var statearr_31014_33300 = state_31011__$1;
(statearr_31014_33300[(2)] = null);

(statearr_31014_33300[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31012 === (1))){
var state_31011__$1 = state_31011;
var statearr_31015_33301 = state_31011__$1;
(statearr_31015_33301[(2)] = null);

(statearr_31015_33301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31012 === (4))){
var inst_30976 = (state_31011[(7)]);
var inst_30976__$1 = (state_31011[(2)]);
var inst_30977 = (inst_30976__$1 == null);
var state_31011__$1 = (function (){var statearr_31016 = state_31011;
(statearr_31016[(7)] = inst_30976__$1);

return statearr_31016;
})();
if(cljs.core.truth_(inst_30977)){
var statearr_31017_33305 = state_31011__$1;
(statearr_31017_33305[(1)] = (5));

} else {
var statearr_31018_33306 = state_31011__$1;
(statearr_31018_33306[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31012 === (15))){
var inst_30989 = (state_31011[(8)]);
var state_31011__$1 = state_31011;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31011__$1,(18),to,inst_30989);
} else {
if((state_val_31012 === (21))){
var inst_31002 = (state_31011[(2)]);
var state_31011__$1 = state_31011;
var statearr_31019_33309 = state_31011__$1;
(statearr_31019_33309[(2)] = inst_31002);

(statearr_31019_33309[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31012 === (13))){
var inst_31004 = (state_31011[(2)]);
var state_31011__$1 = (function (){var statearr_31020 = state_31011;
(statearr_31020[(9)] = inst_31004);

return statearr_31020;
})();
var statearr_31021_33310 = state_31011__$1;
(statearr_31021_33310[(2)] = null);

(statearr_31021_33310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31012 === (6))){
var inst_30976 = (state_31011[(7)]);
var state_31011__$1 = state_31011;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31011__$1,(11),inst_30976);
} else {
if((state_val_31012 === (17))){
var inst_30997 = (state_31011[(2)]);
var state_31011__$1 = state_31011;
if(cljs.core.truth_(inst_30997)){
var statearr_31022_33314 = state_31011__$1;
(statearr_31022_33314[(1)] = (19));

} else {
var statearr_31023_33315 = state_31011__$1;
(statearr_31023_33315[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31012 === (3))){
var inst_31009 = (state_31011[(2)]);
var state_31011__$1 = state_31011;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31011__$1,inst_31009);
} else {
if((state_val_31012 === (12))){
var inst_30986 = (state_31011[(10)]);
var state_31011__$1 = state_31011;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31011__$1,(14),inst_30986);
} else {
if((state_val_31012 === (2))){
var state_31011__$1 = state_31011;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31011__$1,(4),results);
} else {
if((state_val_31012 === (19))){
var state_31011__$1 = state_31011;
var statearr_31024_33319 = state_31011__$1;
(statearr_31024_33319[(2)] = null);

(statearr_31024_33319[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31012 === (11))){
var inst_30986 = (state_31011[(2)]);
var state_31011__$1 = (function (){var statearr_31025 = state_31011;
(statearr_31025[(10)] = inst_30986);

return statearr_31025;
})();
var statearr_31026_33324 = state_31011__$1;
(statearr_31026_33324[(2)] = null);

(statearr_31026_33324[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31012 === (9))){
var state_31011__$1 = state_31011;
var statearr_31027_33328 = state_31011__$1;
(statearr_31027_33328[(2)] = null);

(statearr_31027_33328[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31012 === (5))){
var state_31011__$1 = state_31011;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31028_33329 = state_31011__$1;
(statearr_31028_33329[(1)] = (8));

} else {
var statearr_31029_33330 = state_31011__$1;
(statearr_31029_33330[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31012 === (14))){
var inst_30989 = (state_31011[(8)]);
var inst_30991 = (state_31011[(11)]);
var inst_30989__$1 = (state_31011[(2)]);
var inst_30990 = (inst_30989__$1 == null);
var inst_30991__$1 = cljs.core.not(inst_30990);
var state_31011__$1 = (function (){var statearr_31030 = state_31011;
(statearr_31030[(8)] = inst_30989__$1);

(statearr_31030[(11)] = inst_30991__$1);

return statearr_31030;
})();
if(inst_30991__$1){
var statearr_31031_33334 = state_31011__$1;
(statearr_31031_33334[(1)] = (15));

} else {
var statearr_31032_33335 = state_31011__$1;
(statearr_31032_33335[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31012 === (16))){
var inst_30991 = (state_31011[(11)]);
var state_31011__$1 = state_31011;
var statearr_31033_33339 = state_31011__$1;
(statearr_31033_33339[(2)] = inst_30991);

(statearr_31033_33339[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31012 === (10))){
var inst_30983 = (state_31011[(2)]);
var state_31011__$1 = state_31011;
var statearr_31034_33340 = state_31011__$1;
(statearr_31034_33340[(2)] = inst_30983);

(statearr_31034_33340[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31012 === (18))){
var inst_30994 = (state_31011[(2)]);
var state_31011__$1 = state_31011;
var statearr_31035_33341 = state_31011__$1;
(statearr_31035_33341[(2)] = inst_30994);

(statearr_31035_33341[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31012 === (8))){
var inst_30980 = cljs.core.async.close_BANG_(to);
var state_31011__$1 = state_31011;
var statearr_31036_33345 = state_31011__$1;
(statearr_31036_33345[(2)] = inst_30980);

(statearr_31036_33345[(1)] = (10));


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
});})(c__30361__auto__,jobs,results,process,async))
;
return ((function (switch__30100__auto__,c__30361__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30101__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30101__auto____0 = (function (){
var statearr_31038 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31038[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30101__auto__);

(statearr_31038[(1)] = (1));

return statearr_31038;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30101__auto____1 = (function (state_31011){
while(true){
var ret_value__30102__auto__ = (function (){try{while(true){
var result__30103__auto__ = switch__30100__auto__(state_31011);
if(cljs.core.keyword_identical_QMARK_(result__30103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30103__auto__;
}
break;
}
}catch (e31040){if((e31040 instanceof Object)){
var ex__30104__auto__ = e31040;
var statearr_31041_33353 = state_31011;
(statearr_31041_33353[(5)] = ex__30104__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31011);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31040;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33357 = state_31011;
state_31011 = G__33357;
continue;
} else {
return ret_value__30102__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30101__auto__ = function(state_31011){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30101__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30101__auto____1.call(this,state_31011);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30101__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30101__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30101__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30101__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30101__auto__;
})()
;})(switch__30100__auto__,c__30361__auto__,jobs,results,process,async))
})();
var state__30363__auto__ = (function (){var statearr_31042 = (f__30362__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30362__auto__.cljs$core$IFn$_invoke$arity$0() : f__30362__auto__.call(null));
(statearr_31042[(6)] = c__30361__auto__);

return statearr_31042;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30363__auto__);
});})(c__30361__auto__,jobs,results,process,async))
);

return c__30361__auto__;
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
var G__31044 = arguments.length;
switch (G__31044) {
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
var G__31048 = arguments.length;
switch (G__31048) {
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
var G__31050 = arguments.length;
switch (G__31050) {
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
var c__30361__auto___33380 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30361__auto___33380,tc,fc){
return (function (){
var f__30362__auto__ = (function (){var switch__30100__auto__ = ((function (c__30361__auto___33380,tc,fc){
return (function (state_31076){
var state_val_31077 = (state_31076[(1)]);
if((state_val_31077 === (7))){
var inst_31072 = (state_31076[(2)]);
var state_31076__$1 = state_31076;
var statearr_31078_33381 = state_31076__$1;
(statearr_31078_33381[(2)] = inst_31072);

(statearr_31078_33381[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31077 === (1))){
var state_31076__$1 = state_31076;
var statearr_31082_33382 = state_31076__$1;
(statearr_31082_33382[(2)] = null);

(statearr_31082_33382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31077 === (4))){
var inst_31053 = (state_31076[(7)]);
var inst_31053__$1 = (state_31076[(2)]);
var inst_31054 = (inst_31053__$1 == null);
var state_31076__$1 = (function (){var statearr_31083 = state_31076;
(statearr_31083[(7)] = inst_31053__$1);

return statearr_31083;
})();
if(cljs.core.truth_(inst_31054)){
var statearr_31085_33383 = state_31076__$1;
(statearr_31085_33383[(1)] = (5));

} else {
var statearr_31086_33384 = state_31076__$1;
(statearr_31086_33384[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31077 === (13))){
var state_31076__$1 = state_31076;
var statearr_31087_33385 = state_31076__$1;
(statearr_31087_33385[(2)] = null);

(statearr_31087_33385[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31077 === (6))){
var inst_31053 = (state_31076[(7)]);
var inst_31059 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31053) : p.call(null,inst_31053));
var state_31076__$1 = state_31076;
if(cljs.core.truth_(inst_31059)){
var statearr_31088_33386 = state_31076__$1;
(statearr_31088_33386[(1)] = (9));

} else {
var statearr_31089_33387 = state_31076__$1;
(statearr_31089_33387[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31077 === (3))){
var inst_31074 = (state_31076[(2)]);
var state_31076__$1 = state_31076;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31076__$1,inst_31074);
} else {
if((state_val_31077 === (12))){
var state_31076__$1 = state_31076;
var statearr_31090_33388 = state_31076__$1;
(statearr_31090_33388[(2)] = null);

(statearr_31090_33388[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31077 === (2))){
var state_31076__$1 = state_31076;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31076__$1,(4),ch);
} else {
if((state_val_31077 === (11))){
var inst_31053 = (state_31076[(7)]);
var inst_31063 = (state_31076[(2)]);
var state_31076__$1 = state_31076;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31076__$1,(8),inst_31063,inst_31053);
} else {
if((state_val_31077 === (9))){
var state_31076__$1 = state_31076;
var statearr_31093_33389 = state_31076__$1;
(statearr_31093_33389[(2)] = tc);

(statearr_31093_33389[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31077 === (5))){
var inst_31056 = cljs.core.async.close_BANG_(tc);
var inst_31057 = cljs.core.async.close_BANG_(fc);
var state_31076__$1 = (function (){var statearr_31095 = state_31076;
(statearr_31095[(8)] = inst_31056);

return statearr_31095;
})();
var statearr_31096_33392 = state_31076__$1;
(statearr_31096_33392[(2)] = inst_31057);

(statearr_31096_33392[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31077 === (14))){
var inst_31070 = (state_31076[(2)]);
var state_31076__$1 = state_31076;
var statearr_31098_33393 = state_31076__$1;
(statearr_31098_33393[(2)] = inst_31070);

(statearr_31098_33393[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31077 === (10))){
var state_31076__$1 = state_31076;
var statearr_31099_33394 = state_31076__$1;
(statearr_31099_33394[(2)] = fc);

(statearr_31099_33394[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31077 === (8))){
var inst_31065 = (state_31076[(2)]);
var state_31076__$1 = state_31076;
if(cljs.core.truth_(inst_31065)){
var statearr_31100_33395 = state_31076__$1;
(statearr_31100_33395[(1)] = (12));

} else {
var statearr_31101_33396 = state_31076__$1;
(statearr_31101_33396[(1)] = (13));

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
});})(c__30361__auto___33380,tc,fc))
;
return ((function (switch__30100__auto__,c__30361__auto___33380,tc,fc){
return (function() {
var cljs$core$async$state_machine__30101__auto__ = null;
var cljs$core$async$state_machine__30101__auto____0 = (function (){
var statearr_31102 = [null,null,null,null,null,null,null,null,null];
(statearr_31102[(0)] = cljs$core$async$state_machine__30101__auto__);

(statearr_31102[(1)] = (1));

return statearr_31102;
});
var cljs$core$async$state_machine__30101__auto____1 = (function (state_31076){
while(true){
var ret_value__30102__auto__ = (function (){try{while(true){
var result__30103__auto__ = switch__30100__auto__(state_31076);
if(cljs.core.keyword_identical_QMARK_(result__30103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30103__auto__;
}
break;
}
}catch (e31103){if((e31103 instanceof Object)){
var ex__30104__auto__ = e31103;
var statearr_31104_33397 = state_31076;
(statearr_31104_33397[(5)] = ex__30104__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31076);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31103;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33398 = state_31076;
state_31076 = G__33398;
continue;
} else {
return ret_value__30102__auto__;
}
break;
}
});
cljs$core$async$state_machine__30101__auto__ = function(state_31076){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30101__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30101__auto____1.call(this,state_31076);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30101__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30101__auto____0;
cljs$core$async$state_machine__30101__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30101__auto____1;
return cljs$core$async$state_machine__30101__auto__;
})()
;})(switch__30100__auto__,c__30361__auto___33380,tc,fc))
})();
var state__30363__auto__ = (function (){var statearr_31105 = (f__30362__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30362__auto__.cljs$core$IFn$_invoke$arity$0() : f__30362__auto__.call(null));
(statearr_31105[(6)] = c__30361__auto___33380);

return statearr_31105;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30363__auto__);
});})(c__30361__auto___33380,tc,fc))
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
var c__30361__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30361__auto__){
return (function (){
var f__30362__auto__ = (function (){var switch__30100__auto__ = ((function (c__30361__auto__){
return (function (state_31127){
var state_val_31128 = (state_31127[(1)]);
if((state_val_31128 === (7))){
var inst_31123 = (state_31127[(2)]);
var state_31127__$1 = state_31127;
var statearr_31129_33402 = state_31127__$1;
(statearr_31129_33402[(2)] = inst_31123);

(statearr_31129_33402[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31128 === (1))){
var inst_31107 = init;
var state_31127__$1 = (function (){var statearr_31130 = state_31127;
(statearr_31130[(7)] = inst_31107);

return statearr_31130;
})();
var statearr_31134_33403 = state_31127__$1;
(statearr_31134_33403[(2)] = null);

(statearr_31134_33403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31128 === (4))){
var inst_31110 = (state_31127[(8)]);
var inst_31110__$1 = (state_31127[(2)]);
var inst_31111 = (inst_31110__$1 == null);
var state_31127__$1 = (function (){var statearr_31136 = state_31127;
(statearr_31136[(8)] = inst_31110__$1);

return statearr_31136;
})();
if(cljs.core.truth_(inst_31111)){
var statearr_31137_33407 = state_31127__$1;
(statearr_31137_33407[(1)] = (5));

} else {
var statearr_31138_33408 = state_31127__$1;
(statearr_31138_33408[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31128 === (6))){
var inst_31107 = (state_31127[(7)]);
var inst_31114 = (state_31127[(9)]);
var inst_31110 = (state_31127[(8)]);
var inst_31114__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_31107,inst_31110) : f.call(null,inst_31107,inst_31110));
var inst_31115 = cljs.core.reduced_QMARK_(inst_31114__$1);
var state_31127__$1 = (function (){var statearr_31139 = state_31127;
(statearr_31139[(9)] = inst_31114__$1);

return statearr_31139;
})();
if(inst_31115){
var statearr_31140_33410 = state_31127__$1;
(statearr_31140_33410[(1)] = (8));

} else {
var statearr_31143_33411 = state_31127__$1;
(statearr_31143_33411[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31128 === (3))){
var inst_31125 = (state_31127[(2)]);
var state_31127__$1 = state_31127;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31127__$1,inst_31125);
} else {
if((state_val_31128 === (2))){
var state_31127__$1 = state_31127;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31127__$1,(4),ch);
} else {
if((state_val_31128 === (9))){
var inst_31114 = (state_31127[(9)]);
var inst_31107 = inst_31114;
var state_31127__$1 = (function (){var statearr_31144 = state_31127;
(statearr_31144[(7)] = inst_31107);

return statearr_31144;
})();
var statearr_31145_33414 = state_31127__$1;
(statearr_31145_33414[(2)] = null);

(statearr_31145_33414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31128 === (5))){
var inst_31107 = (state_31127[(7)]);
var state_31127__$1 = state_31127;
var statearr_31146_33415 = state_31127__$1;
(statearr_31146_33415[(2)] = inst_31107);

(statearr_31146_33415[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31128 === (10))){
var inst_31121 = (state_31127[(2)]);
var state_31127__$1 = state_31127;
var statearr_31147_33416 = state_31127__$1;
(statearr_31147_33416[(2)] = inst_31121);

(statearr_31147_33416[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31128 === (8))){
var inst_31114 = (state_31127[(9)]);
var inst_31117 = cljs.core.deref(inst_31114);
var state_31127__$1 = state_31127;
var statearr_31148_33417 = state_31127__$1;
(statearr_31148_33417[(2)] = inst_31117);

(statearr_31148_33417[(1)] = (10));


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
});})(c__30361__auto__))
;
return ((function (switch__30100__auto__,c__30361__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__30101__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30101__auto____0 = (function (){
var statearr_31149 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31149[(0)] = cljs$core$async$reduce_$_state_machine__30101__auto__);

(statearr_31149[(1)] = (1));

return statearr_31149;
});
var cljs$core$async$reduce_$_state_machine__30101__auto____1 = (function (state_31127){
while(true){
var ret_value__30102__auto__ = (function (){try{while(true){
var result__30103__auto__ = switch__30100__auto__(state_31127);
if(cljs.core.keyword_identical_QMARK_(result__30103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30103__auto__;
}
break;
}
}catch (e31150){if((e31150 instanceof Object)){
var ex__30104__auto__ = e31150;
var statearr_31151_33418 = state_31127;
(statearr_31151_33418[(5)] = ex__30104__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31127);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31150;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33419 = state_31127;
state_31127 = G__33419;
continue;
} else {
return ret_value__30102__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30101__auto__ = function(state_31127){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30101__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30101__auto____1.call(this,state_31127);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__30101__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30101__auto____0;
cljs$core$async$reduce_$_state_machine__30101__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30101__auto____1;
return cljs$core$async$reduce_$_state_machine__30101__auto__;
})()
;})(switch__30100__auto__,c__30361__auto__))
})();
var state__30363__auto__ = (function (){var statearr_31152 = (f__30362__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30362__auto__.cljs$core$IFn$_invoke$arity$0() : f__30362__auto__.call(null));
(statearr_31152[(6)] = c__30361__auto__);

return statearr_31152;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30363__auto__);
});})(c__30361__auto__))
);

return c__30361__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__30361__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30361__auto__,f__$1){
return (function (){
var f__30362__auto__ = (function (){var switch__30100__auto__ = ((function (c__30361__auto__,f__$1){
return (function (state_31158){
var state_val_31159 = (state_31158[(1)]);
if((state_val_31159 === (1))){
var inst_31153 = cljs.core.async.reduce(f__$1,init,ch);
var state_31158__$1 = state_31158;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31158__$1,(2),inst_31153);
} else {
if((state_val_31159 === (2))){
var inst_31155 = (state_31158[(2)]);
var inst_31156 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_31155) : f__$1.call(null,inst_31155));
var state_31158__$1 = state_31158;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31158__$1,inst_31156);
} else {
return null;
}
}
});})(c__30361__auto__,f__$1))
;
return ((function (switch__30100__auto__,c__30361__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__30101__auto__ = null;
var cljs$core$async$transduce_$_state_machine__30101__auto____0 = (function (){
var statearr_31164 = [null,null,null,null,null,null,null];
(statearr_31164[(0)] = cljs$core$async$transduce_$_state_machine__30101__auto__);

(statearr_31164[(1)] = (1));

return statearr_31164;
});
var cljs$core$async$transduce_$_state_machine__30101__auto____1 = (function (state_31158){
while(true){
var ret_value__30102__auto__ = (function (){try{while(true){
var result__30103__auto__ = switch__30100__auto__(state_31158);
if(cljs.core.keyword_identical_QMARK_(result__30103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30103__auto__;
}
break;
}
}catch (e31169){if((e31169 instanceof Object)){
var ex__30104__auto__ = e31169;
var statearr_31170_33428 = state_31158;
(statearr_31170_33428[(5)] = ex__30104__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31158);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31169;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33429 = state_31158;
state_31158 = G__33429;
continue;
} else {
return ret_value__30102__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__30101__auto__ = function(state_31158){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__30101__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__30101__auto____1.call(this,state_31158);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__30101__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__30101__auto____0;
cljs$core$async$transduce_$_state_machine__30101__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__30101__auto____1;
return cljs$core$async$transduce_$_state_machine__30101__auto__;
})()
;})(switch__30100__auto__,c__30361__auto__,f__$1))
})();
var state__30363__auto__ = (function (){var statearr_31175 = (f__30362__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30362__auto__.cljs$core$IFn$_invoke$arity$0() : f__30362__auto__.call(null));
(statearr_31175[(6)] = c__30361__auto__);

return statearr_31175;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30363__auto__);
});})(c__30361__auto__,f__$1))
);

return c__30361__auto__;
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
var G__31177 = arguments.length;
switch (G__31177) {
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
var c__30361__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30361__auto__){
return (function (){
var f__30362__auto__ = (function (){var switch__30100__auto__ = ((function (c__30361__auto__){
return (function (state_31202){
var state_val_31203 = (state_31202[(1)]);
if((state_val_31203 === (7))){
var inst_31184 = (state_31202[(2)]);
var state_31202__$1 = state_31202;
var statearr_31205_33444 = state_31202__$1;
(statearr_31205_33444[(2)] = inst_31184);

(statearr_31205_33444[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31203 === (1))){
var inst_31178 = cljs.core.seq(coll);
var inst_31179 = inst_31178;
var state_31202__$1 = (function (){var statearr_31206 = state_31202;
(statearr_31206[(7)] = inst_31179);

return statearr_31206;
})();
var statearr_31207_33445 = state_31202__$1;
(statearr_31207_33445[(2)] = null);

(statearr_31207_33445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31203 === (4))){
var inst_31179 = (state_31202[(7)]);
var inst_31182 = cljs.core.first(inst_31179);
var state_31202__$1 = state_31202;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31202__$1,(7),ch,inst_31182);
} else {
if((state_val_31203 === (13))){
var inst_31196 = (state_31202[(2)]);
var state_31202__$1 = state_31202;
var statearr_31208_33446 = state_31202__$1;
(statearr_31208_33446[(2)] = inst_31196);

(statearr_31208_33446[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31203 === (6))){
var inst_31187 = (state_31202[(2)]);
var state_31202__$1 = state_31202;
if(cljs.core.truth_(inst_31187)){
var statearr_31209_33447 = state_31202__$1;
(statearr_31209_33447[(1)] = (8));

} else {
var statearr_31210_33448 = state_31202__$1;
(statearr_31210_33448[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31203 === (3))){
var inst_31200 = (state_31202[(2)]);
var state_31202__$1 = state_31202;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31202__$1,inst_31200);
} else {
if((state_val_31203 === (12))){
var state_31202__$1 = state_31202;
var statearr_31211_33449 = state_31202__$1;
(statearr_31211_33449[(2)] = null);

(statearr_31211_33449[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31203 === (2))){
var inst_31179 = (state_31202[(7)]);
var state_31202__$1 = state_31202;
if(cljs.core.truth_(inst_31179)){
var statearr_31214_33450 = state_31202__$1;
(statearr_31214_33450[(1)] = (4));

} else {
var statearr_31216_33451 = state_31202__$1;
(statearr_31216_33451[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31203 === (11))){
var inst_31193 = cljs.core.async.close_BANG_(ch);
var state_31202__$1 = state_31202;
var statearr_31217_33452 = state_31202__$1;
(statearr_31217_33452[(2)] = inst_31193);

(statearr_31217_33452[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31203 === (9))){
var state_31202__$1 = state_31202;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31218_33459 = state_31202__$1;
(statearr_31218_33459[(1)] = (11));

} else {
var statearr_31219_33460 = state_31202__$1;
(statearr_31219_33460[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31203 === (5))){
var inst_31179 = (state_31202[(7)]);
var state_31202__$1 = state_31202;
var statearr_31220_33461 = state_31202__$1;
(statearr_31220_33461[(2)] = inst_31179);

(statearr_31220_33461[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31203 === (10))){
var inst_31198 = (state_31202[(2)]);
var state_31202__$1 = state_31202;
var statearr_31221_33462 = state_31202__$1;
(statearr_31221_33462[(2)] = inst_31198);

(statearr_31221_33462[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31203 === (8))){
var inst_31179 = (state_31202[(7)]);
var inst_31189 = cljs.core.next(inst_31179);
var inst_31179__$1 = inst_31189;
var state_31202__$1 = (function (){var statearr_31222 = state_31202;
(statearr_31222[(7)] = inst_31179__$1);

return statearr_31222;
})();
var statearr_31223_33463 = state_31202__$1;
(statearr_31223_33463[(2)] = null);

(statearr_31223_33463[(1)] = (2));


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
});})(c__30361__auto__))
;
return ((function (switch__30100__auto__,c__30361__auto__){
return (function() {
var cljs$core$async$state_machine__30101__auto__ = null;
var cljs$core$async$state_machine__30101__auto____0 = (function (){
var statearr_31224 = [null,null,null,null,null,null,null,null];
(statearr_31224[(0)] = cljs$core$async$state_machine__30101__auto__);

(statearr_31224[(1)] = (1));

return statearr_31224;
});
var cljs$core$async$state_machine__30101__auto____1 = (function (state_31202){
while(true){
var ret_value__30102__auto__ = (function (){try{while(true){
var result__30103__auto__ = switch__30100__auto__(state_31202);
if(cljs.core.keyword_identical_QMARK_(result__30103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30103__auto__;
}
break;
}
}catch (e31225){if((e31225 instanceof Object)){
var ex__30104__auto__ = e31225;
var statearr_31226_33464 = state_31202;
(statearr_31226_33464[(5)] = ex__30104__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31202);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31225;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33465 = state_31202;
state_31202 = G__33465;
continue;
} else {
return ret_value__30102__auto__;
}
break;
}
});
cljs$core$async$state_machine__30101__auto__ = function(state_31202){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30101__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30101__auto____1.call(this,state_31202);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30101__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30101__auto____0;
cljs$core$async$state_machine__30101__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30101__auto____1;
return cljs$core$async$state_machine__30101__auto__;
})()
;})(switch__30100__auto__,c__30361__auto__))
})();
var state__30363__auto__ = (function (){var statearr_31229 = (f__30362__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30362__auto__.cljs$core$IFn$_invoke$arity$0() : f__30362__auto__.call(null));
(statearr_31229[(6)] = c__30361__auto__);

return statearr_31229;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30363__auto__);
});})(c__30361__auto__))
);

return c__30361__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31241 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31241 = (function (ch,cs,meta31242){
this.ch = ch;
this.cs = cs;
this.meta31242 = meta31242;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31241.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_31243,meta31242__$1){
var self__ = this;
var _31243__$1 = this;
return (new cljs.core.async.t_cljs$core$async31241(self__.ch,self__.cs,meta31242__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async31241.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_31243){
var self__ = this;
var _31243__$1 = this;
return self__.meta31242;
});})(cs))
;

cljs.core.async.t_cljs$core$async31241.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31241.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async31241.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31241.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31241.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31241.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31241.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31242","meta31242",-357277053,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async31241.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31241.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31241";

cljs.core.async.t_cljs$core$async31241.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async31241");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31241.
 */
cljs.core.async.__GT_t_cljs$core$async31241 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async31241(ch__$1,cs__$1,meta31242){
return (new cljs.core.async.t_cljs$core$async31241(ch__$1,cs__$1,meta31242));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async31241(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__30361__auto___33478 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30361__auto___33478,cs,m,dchan,dctr,done){
return (function (){
var f__30362__auto__ = (function (){var switch__30100__auto__ = ((function (c__30361__auto___33478,cs,m,dchan,dctr,done){
return (function (state_31385){
var state_val_31386 = (state_31385[(1)]);
if((state_val_31386 === (7))){
var inst_31381 = (state_31385[(2)]);
var state_31385__$1 = state_31385;
var statearr_31387_33479 = state_31385__$1;
(statearr_31387_33479[(2)] = inst_31381);

(statearr_31387_33479[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31386 === (20))){
var inst_31281 = (state_31385[(7)]);
var inst_31293 = cljs.core.first(inst_31281);
var inst_31294 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31293,(0),null);
var inst_31295 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31293,(1),null);
var state_31385__$1 = (function (){var statearr_31388 = state_31385;
(statearr_31388[(8)] = inst_31294);

return statearr_31388;
})();
if(cljs.core.truth_(inst_31295)){
var statearr_31389_33481 = state_31385__$1;
(statearr_31389_33481[(1)] = (22));

} else {
var statearr_31390_33482 = state_31385__$1;
(statearr_31390_33482[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31386 === (27))){
var inst_31323 = (state_31385[(9)]);
var inst_31325 = (state_31385[(10)]);
var inst_31333 = (state_31385[(11)]);
var inst_31250 = (state_31385[(12)]);
var inst_31333__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_31323,inst_31325);
var inst_31334 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31333__$1,inst_31250,done);
var state_31385__$1 = (function (){var statearr_31392 = state_31385;
(statearr_31392[(11)] = inst_31333__$1);

return statearr_31392;
})();
if(cljs.core.truth_(inst_31334)){
var statearr_31394_33484 = state_31385__$1;
(statearr_31394_33484[(1)] = (30));

} else {
var statearr_31395_33486 = state_31385__$1;
(statearr_31395_33486[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31386 === (1))){
var state_31385__$1 = state_31385;
var statearr_31396_33490 = state_31385__$1;
(statearr_31396_33490[(2)] = null);

(statearr_31396_33490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31386 === (24))){
var inst_31281 = (state_31385[(7)]);
var inst_31300 = (state_31385[(2)]);
var inst_31301 = cljs.core.next(inst_31281);
var inst_31259 = inst_31301;
var inst_31260 = null;
var inst_31261 = (0);
var inst_31262 = (0);
var state_31385__$1 = (function (){var statearr_31398 = state_31385;
(statearr_31398[(13)] = inst_31259);

(statearr_31398[(14)] = inst_31262);

(statearr_31398[(15)] = inst_31260);

(statearr_31398[(16)] = inst_31300);

(statearr_31398[(17)] = inst_31261);

return statearr_31398;
})();
var statearr_31399_33491 = state_31385__$1;
(statearr_31399_33491[(2)] = null);

(statearr_31399_33491[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31386 === (39))){
var state_31385__$1 = state_31385;
var statearr_31403_33493 = state_31385__$1;
(statearr_31403_33493[(2)] = null);

(statearr_31403_33493[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31386 === (4))){
var inst_31250 = (state_31385[(12)]);
var inst_31250__$1 = (state_31385[(2)]);
var inst_31251 = (inst_31250__$1 == null);
var state_31385__$1 = (function (){var statearr_31404 = state_31385;
(statearr_31404[(12)] = inst_31250__$1);

return statearr_31404;
})();
if(cljs.core.truth_(inst_31251)){
var statearr_31405_33494 = state_31385__$1;
(statearr_31405_33494[(1)] = (5));

} else {
var statearr_31406_33495 = state_31385__$1;
(statearr_31406_33495[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31386 === (15))){
var inst_31259 = (state_31385[(13)]);
var inst_31262 = (state_31385[(14)]);
var inst_31260 = (state_31385[(15)]);
var inst_31261 = (state_31385[(17)]);
var inst_31277 = (state_31385[(2)]);
var inst_31278 = (inst_31262 + (1));
var tmp31400 = inst_31259;
var tmp31401 = inst_31260;
var tmp31402 = inst_31261;
var inst_31259__$1 = tmp31400;
var inst_31260__$1 = tmp31401;
var inst_31261__$1 = tmp31402;
var inst_31262__$1 = inst_31278;
var state_31385__$1 = (function (){var statearr_31412 = state_31385;
(statearr_31412[(18)] = inst_31277);

(statearr_31412[(13)] = inst_31259__$1);

(statearr_31412[(14)] = inst_31262__$1);

(statearr_31412[(15)] = inst_31260__$1);

(statearr_31412[(17)] = inst_31261__$1);

return statearr_31412;
})();
var statearr_31413_33500 = state_31385__$1;
(statearr_31413_33500[(2)] = null);

(statearr_31413_33500[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31386 === (21))){
var inst_31304 = (state_31385[(2)]);
var state_31385__$1 = state_31385;
var statearr_31417_33501 = state_31385__$1;
(statearr_31417_33501[(2)] = inst_31304);

(statearr_31417_33501[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31386 === (31))){
var inst_31333 = (state_31385[(11)]);
var inst_31337 = done(null);
var inst_31338 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31333);
var state_31385__$1 = (function (){var statearr_31418 = state_31385;
(statearr_31418[(19)] = inst_31337);

return statearr_31418;
})();
var statearr_31419_33503 = state_31385__$1;
(statearr_31419_33503[(2)] = inst_31338);

(statearr_31419_33503[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31386 === (32))){
var inst_31322 = (state_31385[(20)]);
var inst_31323 = (state_31385[(9)]);
var inst_31325 = (state_31385[(10)]);
var inst_31324 = (state_31385[(21)]);
var inst_31340 = (state_31385[(2)]);
var inst_31341 = (inst_31325 + (1));
var tmp31414 = inst_31322;
var tmp31415 = inst_31323;
var tmp31416 = inst_31324;
var inst_31322__$1 = tmp31414;
var inst_31323__$1 = tmp31415;
var inst_31324__$1 = tmp31416;
var inst_31325__$1 = inst_31341;
var state_31385__$1 = (function (){var statearr_31420 = state_31385;
(statearr_31420[(20)] = inst_31322__$1);

(statearr_31420[(9)] = inst_31323__$1);

(statearr_31420[(22)] = inst_31340);

(statearr_31420[(10)] = inst_31325__$1);

(statearr_31420[(21)] = inst_31324__$1);

return statearr_31420;
})();
var statearr_31421_33506 = state_31385__$1;
(statearr_31421_33506[(2)] = null);

(statearr_31421_33506[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31386 === (40))){
var inst_31353 = (state_31385[(23)]);
var inst_31357 = done(null);
var inst_31358 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31353);
var state_31385__$1 = (function (){var statearr_31425 = state_31385;
(statearr_31425[(24)] = inst_31357);

return statearr_31425;
})();
var statearr_31426_33507 = state_31385__$1;
(statearr_31426_33507[(2)] = inst_31358);

(statearr_31426_33507[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31386 === (33))){
var inst_31344 = (state_31385[(25)]);
var inst_31346 = cljs.core.chunked_seq_QMARK_(inst_31344);
var state_31385__$1 = state_31385;
if(inst_31346){
var statearr_31427_33508 = state_31385__$1;
(statearr_31427_33508[(1)] = (36));

} else {
var statearr_31428_33509 = state_31385__$1;
(statearr_31428_33509[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31386 === (13))){
var inst_31271 = (state_31385[(26)]);
var inst_31274 = cljs.core.async.close_BANG_(inst_31271);
var state_31385__$1 = state_31385;
var statearr_31429_33510 = state_31385__$1;
(statearr_31429_33510[(2)] = inst_31274);

(statearr_31429_33510[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31386 === (22))){
var inst_31294 = (state_31385[(8)]);
var inst_31297 = cljs.core.async.close_BANG_(inst_31294);
var state_31385__$1 = state_31385;
var statearr_31430_33511 = state_31385__$1;
(statearr_31430_33511[(2)] = inst_31297);

(statearr_31430_33511[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31386 === (36))){
var inst_31344 = (state_31385[(25)]);
var inst_31348 = cljs.core.chunk_first(inst_31344);
var inst_31349 = cljs.core.chunk_rest(inst_31344);
var inst_31350 = cljs.core.count(inst_31348);
var inst_31322 = inst_31349;
var inst_31323 = inst_31348;
var inst_31324 = inst_31350;
var inst_31325 = (0);
var state_31385__$1 = (function (){var statearr_31431 = state_31385;
(statearr_31431[(20)] = inst_31322);

(statearr_31431[(9)] = inst_31323);

(statearr_31431[(10)] = inst_31325);

(statearr_31431[(21)] = inst_31324);

return statearr_31431;
})();
var statearr_31432_33514 = state_31385__$1;
(statearr_31432_33514[(2)] = null);

(statearr_31432_33514[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31386 === (41))){
var inst_31344 = (state_31385[(25)]);
var inst_31360 = (state_31385[(2)]);
var inst_31361 = cljs.core.next(inst_31344);
var inst_31322 = inst_31361;
var inst_31323 = null;
var inst_31324 = (0);
var inst_31325 = (0);
var state_31385__$1 = (function (){var statearr_31433 = state_31385;
(statearr_31433[(20)] = inst_31322);

(statearr_31433[(9)] = inst_31323);

(statearr_31433[(27)] = inst_31360);

(statearr_31433[(10)] = inst_31325);

(statearr_31433[(21)] = inst_31324);

return statearr_31433;
})();
var statearr_31434_33520 = state_31385__$1;
(statearr_31434_33520[(2)] = null);

(statearr_31434_33520[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31386 === (43))){
var state_31385__$1 = state_31385;
var statearr_31435_33522 = state_31385__$1;
(statearr_31435_33522[(2)] = null);

(statearr_31435_33522[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31386 === (29))){
var inst_31369 = (state_31385[(2)]);
var state_31385__$1 = state_31385;
var statearr_31438_33523 = state_31385__$1;
(statearr_31438_33523[(2)] = inst_31369);

(statearr_31438_33523[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31386 === (44))){
var inst_31378 = (state_31385[(2)]);
var state_31385__$1 = (function (){var statearr_31439 = state_31385;
(statearr_31439[(28)] = inst_31378);

return statearr_31439;
})();
var statearr_31440_33524 = state_31385__$1;
(statearr_31440_33524[(2)] = null);

(statearr_31440_33524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31386 === (6))){
var inst_31314 = (state_31385[(29)]);
var inst_31313 = cljs.core.deref(cs);
var inst_31314__$1 = cljs.core.keys(inst_31313);
var inst_31315 = cljs.core.count(inst_31314__$1);
var inst_31316 = cljs.core.reset_BANG_(dctr,inst_31315);
var inst_31321 = cljs.core.seq(inst_31314__$1);
var inst_31322 = inst_31321;
var inst_31323 = null;
var inst_31324 = (0);
var inst_31325 = (0);
var state_31385__$1 = (function (){var statearr_31444 = state_31385;
(statearr_31444[(20)] = inst_31322);

(statearr_31444[(9)] = inst_31323);

(statearr_31444[(30)] = inst_31316);

(statearr_31444[(10)] = inst_31325);

(statearr_31444[(21)] = inst_31324);

(statearr_31444[(29)] = inst_31314__$1);

return statearr_31444;
})();
var statearr_31445_33527 = state_31385__$1;
(statearr_31445_33527[(2)] = null);

(statearr_31445_33527[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31386 === (28))){
var inst_31322 = (state_31385[(20)]);
var inst_31344 = (state_31385[(25)]);
var inst_31344__$1 = cljs.core.seq(inst_31322);
var state_31385__$1 = (function (){var statearr_31447 = state_31385;
(statearr_31447[(25)] = inst_31344__$1);

return statearr_31447;
})();
if(inst_31344__$1){
var statearr_31452_33528 = state_31385__$1;
(statearr_31452_33528[(1)] = (33));

} else {
var statearr_31453_33529 = state_31385__$1;
(statearr_31453_33529[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31386 === (25))){
var inst_31325 = (state_31385[(10)]);
var inst_31324 = (state_31385[(21)]);
var inst_31330 = (inst_31325 < inst_31324);
var inst_31331 = inst_31330;
var state_31385__$1 = state_31385;
if(cljs.core.truth_(inst_31331)){
var statearr_31458_33530 = state_31385__$1;
(statearr_31458_33530[(1)] = (27));

} else {
var statearr_31459_33531 = state_31385__$1;
(statearr_31459_33531[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31386 === (34))){
var state_31385__$1 = state_31385;
var statearr_31460_33532 = state_31385__$1;
(statearr_31460_33532[(2)] = null);

(statearr_31460_33532[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31386 === (17))){
var state_31385__$1 = state_31385;
var statearr_31461_33538 = state_31385__$1;
(statearr_31461_33538[(2)] = null);

(statearr_31461_33538[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31386 === (3))){
var inst_31383 = (state_31385[(2)]);
var state_31385__$1 = state_31385;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31385__$1,inst_31383);
} else {
if((state_val_31386 === (12))){
var inst_31309 = (state_31385[(2)]);
var state_31385__$1 = state_31385;
var statearr_31464_33539 = state_31385__$1;
(statearr_31464_33539[(2)] = inst_31309);

(statearr_31464_33539[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31386 === (2))){
var state_31385__$1 = state_31385;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31385__$1,(4),ch);
} else {
if((state_val_31386 === (23))){
var state_31385__$1 = state_31385;
var statearr_31469_33540 = state_31385__$1;
(statearr_31469_33540[(2)] = null);

(statearr_31469_33540[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31386 === (35))){
var inst_31367 = (state_31385[(2)]);
var state_31385__$1 = state_31385;
var statearr_31474_33545 = state_31385__$1;
(statearr_31474_33545[(2)] = inst_31367);

(statearr_31474_33545[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31386 === (19))){
var inst_31281 = (state_31385[(7)]);
var inst_31285 = cljs.core.chunk_first(inst_31281);
var inst_31286 = cljs.core.chunk_rest(inst_31281);
var inst_31287 = cljs.core.count(inst_31285);
var inst_31259 = inst_31286;
var inst_31260 = inst_31285;
var inst_31261 = inst_31287;
var inst_31262 = (0);
var state_31385__$1 = (function (){var statearr_31477 = state_31385;
(statearr_31477[(13)] = inst_31259);

(statearr_31477[(14)] = inst_31262);

(statearr_31477[(15)] = inst_31260);

(statearr_31477[(17)] = inst_31261);

return statearr_31477;
})();
var statearr_31478_33557 = state_31385__$1;
(statearr_31478_33557[(2)] = null);

(statearr_31478_33557[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31386 === (11))){
var inst_31281 = (state_31385[(7)]);
var inst_31259 = (state_31385[(13)]);
var inst_31281__$1 = cljs.core.seq(inst_31259);
var state_31385__$1 = (function (){var statearr_31479 = state_31385;
(statearr_31479[(7)] = inst_31281__$1);

return statearr_31479;
})();
if(inst_31281__$1){
var statearr_31480_33566 = state_31385__$1;
(statearr_31480_33566[(1)] = (16));

} else {
var statearr_31481_33567 = state_31385__$1;
(statearr_31481_33567[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31386 === (9))){
var inst_31311 = (state_31385[(2)]);
var state_31385__$1 = state_31385;
var statearr_31482_33573 = state_31385__$1;
(statearr_31482_33573[(2)] = inst_31311);

(statearr_31482_33573[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31386 === (5))){
var inst_31257 = cljs.core.deref(cs);
var inst_31258 = cljs.core.seq(inst_31257);
var inst_31259 = inst_31258;
var inst_31260 = null;
var inst_31261 = (0);
var inst_31262 = (0);
var state_31385__$1 = (function (){var statearr_31484 = state_31385;
(statearr_31484[(13)] = inst_31259);

(statearr_31484[(14)] = inst_31262);

(statearr_31484[(15)] = inst_31260);

(statearr_31484[(17)] = inst_31261);

return statearr_31484;
})();
var statearr_31485_33574 = state_31385__$1;
(statearr_31485_33574[(2)] = null);

(statearr_31485_33574[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31386 === (14))){
var state_31385__$1 = state_31385;
var statearr_31486_33575 = state_31385__$1;
(statearr_31486_33575[(2)] = null);

(statearr_31486_33575[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31386 === (45))){
var inst_31375 = (state_31385[(2)]);
var state_31385__$1 = state_31385;
var statearr_31487_33576 = state_31385__$1;
(statearr_31487_33576[(2)] = inst_31375);

(statearr_31487_33576[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31386 === (26))){
var inst_31314 = (state_31385[(29)]);
var inst_31371 = (state_31385[(2)]);
var inst_31372 = cljs.core.seq(inst_31314);
var state_31385__$1 = (function (){var statearr_31488 = state_31385;
(statearr_31488[(31)] = inst_31371);

return statearr_31488;
})();
if(inst_31372){
var statearr_31489_33577 = state_31385__$1;
(statearr_31489_33577[(1)] = (42));

} else {
var statearr_31490_33578 = state_31385__$1;
(statearr_31490_33578[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31386 === (16))){
var inst_31281 = (state_31385[(7)]);
var inst_31283 = cljs.core.chunked_seq_QMARK_(inst_31281);
var state_31385__$1 = state_31385;
if(inst_31283){
var statearr_31491_33579 = state_31385__$1;
(statearr_31491_33579[(1)] = (19));

} else {
var statearr_31492_33580 = state_31385__$1;
(statearr_31492_33580[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31386 === (38))){
var inst_31364 = (state_31385[(2)]);
var state_31385__$1 = state_31385;
var statearr_31493_33581 = state_31385__$1;
(statearr_31493_33581[(2)] = inst_31364);

(statearr_31493_33581[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31386 === (30))){
var state_31385__$1 = state_31385;
var statearr_31494_33582 = state_31385__$1;
(statearr_31494_33582[(2)] = null);

(statearr_31494_33582[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31386 === (10))){
var inst_31262 = (state_31385[(14)]);
var inst_31260 = (state_31385[(15)]);
var inst_31270 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_31260,inst_31262);
var inst_31271 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31270,(0),null);
var inst_31272 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31270,(1),null);
var state_31385__$1 = (function (){var statearr_31496 = state_31385;
(statearr_31496[(26)] = inst_31271);

return statearr_31496;
})();
if(cljs.core.truth_(inst_31272)){
var statearr_31497_33592 = state_31385__$1;
(statearr_31497_33592[(1)] = (13));

} else {
var statearr_31498_33593 = state_31385__$1;
(statearr_31498_33593[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31386 === (18))){
var inst_31307 = (state_31385[(2)]);
var state_31385__$1 = state_31385;
var statearr_31500_33594 = state_31385__$1;
(statearr_31500_33594[(2)] = inst_31307);

(statearr_31500_33594[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31386 === (42))){
var state_31385__$1 = state_31385;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31385__$1,(45),dchan);
} else {
if((state_val_31386 === (37))){
var inst_31353 = (state_31385[(23)]);
var inst_31344 = (state_31385[(25)]);
var inst_31250 = (state_31385[(12)]);
var inst_31353__$1 = cljs.core.first(inst_31344);
var inst_31354 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31353__$1,inst_31250,done);
var state_31385__$1 = (function (){var statearr_31501 = state_31385;
(statearr_31501[(23)] = inst_31353__$1);

return statearr_31501;
})();
if(cljs.core.truth_(inst_31354)){
var statearr_31502_33602 = state_31385__$1;
(statearr_31502_33602[(1)] = (39));

} else {
var statearr_31503_33603 = state_31385__$1;
(statearr_31503_33603[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31386 === (8))){
var inst_31262 = (state_31385[(14)]);
var inst_31261 = (state_31385[(17)]);
var inst_31264 = (inst_31262 < inst_31261);
var inst_31265 = inst_31264;
var state_31385__$1 = state_31385;
if(cljs.core.truth_(inst_31265)){
var statearr_31504_33604 = state_31385__$1;
(statearr_31504_33604[(1)] = (10));

} else {
var statearr_31505_33605 = state_31385__$1;
(statearr_31505_33605[(1)] = (11));

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
});})(c__30361__auto___33478,cs,m,dchan,dctr,done))
;
return ((function (switch__30100__auto__,c__30361__auto___33478,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__30101__auto__ = null;
var cljs$core$async$mult_$_state_machine__30101__auto____0 = (function (){
var statearr_31506 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31506[(0)] = cljs$core$async$mult_$_state_machine__30101__auto__);

(statearr_31506[(1)] = (1));

return statearr_31506;
});
var cljs$core$async$mult_$_state_machine__30101__auto____1 = (function (state_31385){
while(true){
var ret_value__30102__auto__ = (function (){try{while(true){
var result__30103__auto__ = switch__30100__auto__(state_31385);
if(cljs.core.keyword_identical_QMARK_(result__30103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30103__auto__;
}
break;
}
}catch (e31507){if((e31507 instanceof Object)){
var ex__30104__auto__ = e31507;
var statearr_31508_33613 = state_31385;
(statearr_31508_33613[(5)] = ex__30104__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31385);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31507;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33614 = state_31385;
state_31385 = G__33614;
continue;
} else {
return ret_value__30102__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30101__auto__ = function(state_31385){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30101__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30101__auto____1.call(this,state_31385);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__30101__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30101__auto____0;
cljs$core$async$mult_$_state_machine__30101__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30101__auto____1;
return cljs$core$async$mult_$_state_machine__30101__auto__;
})()
;})(switch__30100__auto__,c__30361__auto___33478,cs,m,dchan,dctr,done))
})();
var state__30363__auto__ = (function (){var statearr_31509 = (f__30362__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30362__auto__.cljs$core$IFn$_invoke$arity$0() : f__30362__auto__.call(null));
(statearr_31509[(6)] = c__30361__auto___33478);

return statearr_31509;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30363__auto__);
});})(c__30361__auto___33478,cs,m,dchan,dctr,done))
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
var G__31513 = arguments.length;
switch (G__31513) {
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
var len__4730__auto___33629 = arguments.length;
var i__4731__auto___33630 = (0);
while(true){
if((i__4731__auto___33630 < len__4730__auto___33629)){
args__4736__auto__.push((arguments[i__4731__auto___33630]));

var G__33631 = (i__4731__auto___33630 + (1));
i__4731__auto___33630 = G__33631;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31544){
var map__31545 = p__31544;
var map__31545__$1 = (((((!((map__31545 == null))))?(((((map__31545.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31545.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31545):map__31545);
var opts = map__31545__$1;
var statearr_31547_33632 = state;
(statearr_31547_33632[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts(((function (map__31545,map__31545__$1,opts){
return (function (val){
var statearr_31552_33633 = state;
(statearr_31552_33633[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__31545,map__31545__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_31560_33634 = state;
(statearr_31560_33634[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31540){
var G__31541 = cljs.core.first(seq31540);
var seq31540__$1 = cljs.core.next(seq31540);
var G__31542 = cljs.core.first(seq31540__$1);
var seq31540__$2 = cljs.core.next(seq31540__$1);
var G__31543 = cljs.core.first(seq31540__$2);
var seq31540__$3 = cljs.core.next(seq31540__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31541,G__31542,G__31543,seq31540__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31572 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31572 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31573){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31573 = meta31573;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31572.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31574,meta31573__$1){
var self__ = this;
var _31574__$1 = this;
return (new cljs.core.async.t_cljs$core$async31572(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31573__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31572.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31574){
var self__ = this;
var _31574__$1 = this;
return self__.meta31573;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31572.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31572.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31572.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31572.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31572.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31572.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31572.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31572.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async31572.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31573","meta31573",-1084720878,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31572.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31572.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31572";

cljs.core.async.t_cljs$core$async31572.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async31572");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31572.
 */
cljs.core.async.__GT_t_cljs$core$async31572 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async31572(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31573){
return (new cljs.core.async.t_cljs$core$async31572(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31573));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async31572(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30361__auto___33649 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30361__auto___33649,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__30362__auto__ = (function (){var switch__30100__auto__ = ((function (c__30361__auto___33649,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_31708){
var state_val_31711 = (state_31708[(1)]);
if((state_val_31711 === (7))){
var inst_31605 = (state_31708[(2)]);
var state_31708__$1 = state_31708;
var statearr_31719_33651 = state_31708__$1;
(statearr_31719_33651[(2)] = inst_31605);

(statearr_31719_33651[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31711 === (20))){
var inst_31617 = (state_31708[(7)]);
var state_31708__$1 = state_31708;
var statearr_31721_33652 = state_31708__$1;
(statearr_31721_33652[(2)] = inst_31617);

(statearr_31721_33652[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31711 === (27))){
var state_31708__$1 = state_31708;
var statearr_31723_33653 = state_31708__$1;
(statearr_31723_33653[(2)] = null);

(statearr_31723_33653[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31711 === (1))){
var inst_31592 = (state_31708[(8)]);
var inst_31592__$1 = calc_state();
var inst_31594 = (inst_31592__$1 == null);
var inst_31595 = cljs.core.not(inst_31594);
var state_31708__$1 = (function (){var statearr_31725 = state_31708;
(statearr_31725[(8)] = inst_31592__$1);

return statearr_31725;
})();
if(inst_31595){
var statearr_31726_33654 = state_31708__$1;
(statearr_31726_33654[(1)] = (2));

} else {
var statearr_31727_33655 = state_31708__$1;
(statearr_31727_33655[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31711 === (24))){
var inst_31644 = (state_31708[(9)]);
var inst_31655 = (state_31708[(10)]);
var inst_31676 = (state_31708[(11)]);
var inst_31676__$1 = (inst_31644.cljs$core$IFn$_invoke$arity$1 ? inst_31644.cljs$core$IFn$_invoke$arity$1(inst_31655) : inst_31644.call(null,inst_31655));
var state_31708__$1 = (function (){var statearr_31733 = state_31708;
(statearr_31733[(11)] = inst_31676__$1);

return statearr_31733;
})();
if(cljs.core.truth_(inst_31676__$1)){
var statearr_31734_33656 = state_31708__$1;
(statearr_31734_33656[(1)] = (29));

} else {
var statearr_31737_33657 = state_31708__$1;
(statearr_31737_33657[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31711 === (4))){
var inst_31608 = (state_31708[(2)]);
var state_31708__$1 = state_31708;
if(cljs.core.truth_(inst_31608)){
var statearr_31739_33665 = state_31708__$1;
(statearr_31739_33665[(1)] = (8));

} else {
var statearr_31740_33666 = state_31708__$1;
(statearr_31740_33666[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31711 === (15))){
var inst_31638 = (state_31708[(2)]);
var state_31708__$1 = state_31708;
if(cljs.core.truth_(inst_31638)){
var statearr_31743_33667 = state_31708__$1;
(statearr_31743_33667[(1)] = (19));

} else {
var statearr_31744_33668 = state_31708__$1;
(statearr_31744_33668[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31711 === (21))){
var inst_31643 = (state_31708[(12)]);
var inst_31643__$1 = (state_31708[(2)]);
var inst_31644 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31643__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31645 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31643__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31646 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31643__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31708__$1 = (function (){var statearr_31746 = state_31708;
(statearr_31746[(13)] = inst_31645);

(statearr_31746[(9)] = inst_31644);

(statearr_31746[(12)] = inst_31643__$1);

return statearr_31746;
})();
return cljs.core.async.ioc_alts_BANG_(state_31708__$1,(22),inst_31646);
} else {
if((state_val_31711 === (31))){
var inst_31686 = (state_31708[(2)]);
var state_31708__$1 = state_31708;
if(cljs.core.truth_(inst_31686)){
var statearr_31748_33669 = state_31708__$1;
(statearr_31748_33669[(1)] = (32));

} else {
var statearr_31749_33670 = state_31708__$1;
(statearr_31749_33670[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31711 === (32))){
var inst_31654 = (state_31708[(14)]);
var state_31708__$1 = state_31708;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31708__$1,(35),out,inst_31654);
} else {
if((state_val_31711 === (33))){
var inst_31643 = (state_31708[(12)]);
var inst_31617 = inst_31643;
var state_31708__$1 = (function (){var statearr_31751 = state_31708;
(statearr_31751[(7)] = inst_31617);

return statearr_31751;
})();
var statearr_31752_33672 = state_31708__$1;
(statearr_31752_33672[(2)] = null);

(statearr_31752_33672[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31711 === (13))){
var inst_31617 = (state_31708[(7)]);
var inst_31627 = inst_31617.cljs$lang$protocol_mask$partition0$;
var inst_31628 = (inst_31627 & (64));
var inst_31629 = inst_31617.cljs$core$ISeq$;
var inst_31630 = (cljs.core.PROTOCOL_SENTINEL === inst_31629);
var inst_31631 = ((inst_31628) || (inst_31630));
var state_31708__$1 = state_31708;
if(cljs.core.truth_(inst_31631)){
var statearr_31753_33674 = state_31708__$1;
(statearr_31753_33674[(1)] = (16));

} else {
var statearr_31754_33675 = state_31708__$1;
(statearr_31754_33675[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31711 === (22))){
var inst_31654 = (state_31708[(14)]);
var inst_31655 = (state_31708[(10)]);
var inst_31653 = (state_31708[(2)]);
var inst_31654__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31653,(0),null);
var inst_31655__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31653,(1),null);
var inst_31659 = (inst_31654__$1 == null);
var inst_31660 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31655__$1,change);
var inst_31661 = ((inst_31659) || (inst_31660));
var state_31708__$1 = (function (){var statearr_31755 = state_31708;
(statearr_31755[(14)] = inst_31654__$1);

(statearr_31755[(10)] = inst_31655__$1);

return statearr_31755;
})();
if(cljs.core.truth_(inst_31661)){
var statearr_31756_33677 = state_31708__$1;
(statearr_31756_33677[(1)] = (23));

} else {
var statearr_31757_33678 = state_31708__$1;
(statearr_31757_33678[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31711 === (36))){
var inst_31643 = (state_31708[(12)]);
var inst_31617 = inst_31643;
var state_31708__$1 = (function (){var statearr_31758 = state_31708;
(statearr_31758[(7)] = inst_31617);

return statearr_31758;
})();
var statearr_31759_33680 = state_31708__$1;
(statearr_31759_33680[(2)] = null);

(statearr_31759_33680[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31711 === (29))){
var inst_31676 = (state_31708[(11)]);
var state_31708__$1 = state_31708;
var statearr_31760_33685 = state_31708__$1;
(statearr_31760_33685[(2)] = inst_31676);

(statearr_31760_33685[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31711 === (6))){
var state_31708__$1 = state_31708;
var statearr_31761_33687 = state_31708__$1;
(statearr_31761_33687[(2)] = false);

(statearr_31761_33687[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31711 === (28))){
var inst_31670 = (state_31708[(2)]);
var inst_31671 = calc_state();
var inst_31617 = inst_31671;
var state_31708__$1 = (function (){var statearr_31762 = state_31708;
(statearr_31762[(15)] = inst_31670);

(statearr_31762[(7)] = inst_31617);

return statearr_31762;
})();
var statearr_31763_33688 = state_31708__$1;
(statearr_31763_33688[(2)] = null);

(statearr_31763_33688[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31711 === (25))){
var inst_31700 = (state_31708[(2)]);
var state_31708__$1 = state_31708;
var statearr_31767_33689 = state_31708__$1;
(statearr_31767_33689[(2)] = inst_31700);

(statearr_31767_33689[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31711 === (34))){
var inst_31698 = (state_31708[(2)]);
var state_31708__$1 = state_31708;
var statearr_31768_33690 = state_31708__$1;
(statearr_31768_33690[(2)] = inst_31698);

(statearr_31768_33690[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31711 === (17))){
var state_31708__$1 = state_31708;
var statearr_31769_33691 = state_31708__$1;
(statearr_31769_33691[(2)] = false);

(statearr_31769_33691[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31711 === (3))){
var state_31708__$1 = state_31708;
var statearr_31771_33692 = state_31708__$1;
(statearr_31771_33692[(2)] = false);

(statearr_31771_33692[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31711 === (12))){
var inst_31703 = (state_31708[(2)]);
var state_31708__$1 = state_31708;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31708__$1,inst_31703);
} else {
if((state_val_31711 === (2))){
var inst_31592 = (state_31708[(8)]);
var inst_31597 = inst_31592.cljs$lang$protocol_mask$partition0$;
var inst_31598 = (inst_31597 & (64));
var inst_31599 = inst_31592.cljs$core$ISeq$;
var inst_31600 = (cljs.core.PROTOCOL_SENTINEL === inst_31599);
var inst_31601 = ((inst_31598) || (inst_31600));
var state_31708__$1 = state_31708;
if(cljs.core.truth_(inst_31601)){
var statearr_31773_33694 = state_31708__$1;
(statearr_31773_33694[(1)] = (5));

} else {
var statearr_31774_33695 = state_31708__$1;
(statearr_31774_33695[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31711 === (23))){
var inst_31654 = (state_31708[(14)]);
var inst_31665 = (inst_31654 == null);
var state_31708__$1 = state_31708;
if(cljs.core.truth_(inst_31665)){
var statearr_31775_33700 = state_31708__$1;
(statearr_31775_33700[(1)] = (26));

} else {
var statearr_31776_33701 = state_31708__$1;
(statearr_31776_33701[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31711 === (35))){
var inst_31689 = (state_31708[(2)]);
var state_31708__$1 = state_31708;
if(cljs.core.truth_(inst_31689)){
var statearr_31777_33702 = state_31708__$1;
(statearr_31777_33702[(1)] = (36));

} else {
var statearr_31778_33703 = state_31708__$1;
(statearr_31778_33703[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31711 === (19))){
var inst_31617 = (state_31708[(7)]);
var inst_31640 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31617);
var state_31708__$1 = state_31708;
var statearr_31779_33704 = state_31708__$1;
(statearr_31779_33704[(2)] = inst_31640);

(statearr_31779_33704[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31711 === (11))){
var inst_31617 = (state_31708[(7)]);
var inst_31621 = (inst_31617 == null);
var inst_31622 = cljs.core.not(inst_31621);
var state_31708__$1 = state_31708;
if(inst_31622){
var statearr_31780_33705 = state_31708__$1;
(statearr_31780_33705[(1)] = (13));

} else {
var statearr_31781_33706 = state_31708__$1;
(statearr_31781_33706[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31711 === (9))){
var inst_31592 = (state_31708[(8)]);
var state_31708__$1 = state_31708;
var statearr_31782_33707 = state_31708__$1;
(statearr_31782_33707[(2)] = inst_31592);

(statearr_31782_33707[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31711 === (5))){
var state_31708__$1 = state_31708;
var statearr_31783_33708 = state_31708__$1;
(statearr_31783_33708[(2)] = true);

(statearr_31783_33708[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31711 === (14))){
var state_31708__$1 = state_31708;
var statearr_31784_33709 = state_31708__$1;
(statearr_31784_33709[(2)] = false);

(statearr_31784_33709[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31711 === (26))){
var inst_31655 = (state_31708[(10)]);
var inst_31667 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_31655);
var state_31708__$1 = state_31708;
var statearr_31785_33710 = state_31708__$1;
(statearr_31785_33710[(2)] = inst_31667);

(statearr_31785_33710[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31711 === (16))){
var state_31708__$1 = state_31708;
var statearr_31786_33711 = state_31708__$1;
(statearr_31786_33711[(2)] = true);

(statearr_31786_33711[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31711 === (38))){
var inst_31694 = (state_31708[(2)]);
var state_31708__$1 = state_31708;
var statearr_31787_33712 = state_31708__$1;
(statearr_31787_33712[(2)] = inst_31694);

(statearr_31787_33712[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31711 === (30))){
var inst_31645 = (state_31708[(13)]);
var inst_31644 = (state_31708[(9)]);
var inst_31655 = (state_31708[(10)]);
var inst_31681 = cljs.core.empty_QMARK_(inst_31644);
var inst_31682 = (inst_31645.cljs$core$IFn$_invoke$arity$1 ? inst_31645.cljs$core$IFn$_invoke$arity$1(inst_31655) : inst_31645.call(null,inst_31655));
var inst_31683 = cljs.core.not(inst_31682);
var inst_31684 = ((inst_31681) && (inst_31683));
var state_31708__$1 = state_31708;
var statearr_31791_33714 = state_31708__$1;
(statearr_31791_33714[(2)] = inst_31684);

(statearr_31791_33714[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31711 === (10))){
var inst_31592 = (state_31708[(8)]);
var inst_31613 = (state_31708[(2)]);
var inst_31614 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31613,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31615 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31613,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31616 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31613,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31617 = inst_31592;
var state_31708__$1 = (function (){var statearr_31793 = state_31708;
(statearr_31793[(16)] = inst_31614);

(statearr_31793[(17)] = inst_31615);

(statearr_31793[(18)] = inst_31616);

(statearr_31793[(7)] = inst_31617);

return statearr_31793;
})();
var statearr_31796_33715 = state_31708__$1;
(statearr_31796_33715[(2)] = null);

(statearr_31796_33715[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31711 === (18))){
var inst_31635 = (state_31708[(2)]);
var state_31708__$1 = state_31708;
var statearr_31798_33716 = state_31708__$1;
(statearr_31798_33716[(2)] = inst_31635);

(statearr_31798_33716[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31711 === (37))){
var state_31708__$1 = state_31708;
var statearr_31799_33717 = state_31708__$1;
(statearr_31799_33717[(2)] = null);

(statearr_31799_33717[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31711 === (8))){
var inst_31592 = (state_31708[(8)]);
var inst_31610 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31592);
var state_31708__$1 = state_31708;
var statearr_31800_33718 = state_31708__$1;
(statearr_31800_33718[(2)] = inst_31610);

(statearr_31800_33718[(1)] = (10));


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
});})(c__30361__auto___33649,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__30100__auto__,c__30361__auto___33649,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__30101__auto__ = null;
var cljs$core$async$mix_$_state_machine__30101__auto____0 = (function (){
var statearr_31804 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31804[(0)] = cljs$core$async$mix_$_state_machine__30101__auto__);

(statearr_31804[(1)] = (1));

return statearr_31804;
});
var cljs$core$async$mix_$_state_machine__30101__auto____1 = (function (state_31708){
while(true){
var ret_value__30102__auto__ = (function (){try{while(true){
var result__30103__auto__ = switch__30100__auto__(state_31708);
if(cljs.core.keyword_identical_QMARK_(result__30103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30103__auto__;
}
break;
}
}catch (e31805){if((e31805 instanceof Object)){
var ex__30104__auto__ = e31805;
var statearr_31806_33726 = state_31708;
(statearr_31806_33726[(5)] = ex__30104__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31708);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31805;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33727 = state_31708;
state_31708 = G__33727;
continue;
} else {
return ret_value__30102__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30101__auto__ = function(state_31708){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30101__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30101__auto____1.call(this,state_31708);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__30101__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30101__auto____0;
cljs$core$async$mix_$_state_machine__30101__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30101__auto____1;
return cljs$core$async$mix_$_state_machine__30101__auto__;
})()
;})(switch__30100__auto__,c__30361__auto___33649,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__30363__auto__ = (function (){var statearr_31807 = (f__30362__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30362__auto__.cljs$core$IFn$_invoke$arity$0() : f__30362__auto__.call(null));
(statearr_31807[(6)] = c__30361__auto___33649);

return statearr_31807;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30363__auto__);
});})(c__30361__auto___33649,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__31831 = arguments.length;
switch (G__31831) {
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
var G__31847 = arguments.length;
switch (G__31847) {
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
return (function (p1__31845_SHARP_){
if(cljs.core.truth_((p1__31845_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__31845_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__31845_SHARP_.call(null,topic)))){
return p1__31845_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__31845_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31856 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31856 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31857){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31857 = meta31857;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31856.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_31858,meta31857__$1){
var self__ = this;
var _31858__$1 = this;
return (new cljs.core.async.t_cljs$core$async31856(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31857__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31856.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_31858){
var self__ = this;
var _31858__$1 = this;
return self__.meta31857;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31856.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31856.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31856.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31856.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31856.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async31856.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31856.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31856.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31857","meta31857",2046314544,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31856.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31856.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31856";

cljs.core.async.t_cljs$core$async31856.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async31856");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31856.
 */
cljs.core.async.__GT_t_cljs$core$async31856 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async31856(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31857){
return (new cljs.core.async.t_cljs$core$async31856(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31857));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async31856(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30361__auto___33742 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30361__auto___33742,mults,ensure_mult,p){
return (function (){
var f__30362__auto__ = (function (){var switch__30100__auto__ = ((function (c__30361__auto___33742,mults,ensure_mult,p){
return (function (state_31956){
var state_val_31958 = (state_31956[(1)]);
if((state_val_31958 === (7))){
var inst_31952 = (state_31956[(2)]);
var state_31956__$1 = state_31956;
var statearr_31972_33743 = state_31956__$1;
(statearr_31972_33743[(2)] = inst_31952);

(statearr_31972_33743[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (20))){
var state_31956__$1 = state_31956;
var statearr_31973_33744 = state_31956__$1;
(statearr_31973_33744[(2)] = null);

(statearr_31973_33744[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (1))){
var state_31956__$1 = state_31956;
var statearr_31976_33747 = state_31956__$1;
(statearr_31976_33747[(2)] = null);

(statearr_31976_33747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (24))){
var inst_31935 = (state_31956[(7)]);
var inst_31944 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_31935);
var state_31956__$1 = state_31956;
var statearr_31978_33748 = state_31956__$1;
(statearr_31978_33748[(2)] = inst_31944);

(statearr_31978_33748[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (4))){
var inst_31879 = (state_31956[(8)]);
var inst_31879__$1 = (state_31956[(2)]);
var inst_31880 = (inst_31879__$1 == null);
var state_31956__$1 = (function (){var statearr_31979 = state_31956;
(statearr_31979[(8)] = inst_31879__$1);

return statearr_31979;
})();
if(cljs.core.truth_(inst_31880)){
var statearr_31981_33751 = state_31956__$1;
(statearr_31981_33751[(1)] = (5));

} else {
var statearr_31983_33752 = state_31956__$1;
(statearr_31983_33752[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (15))){
var inst_31929 = (state_31956[(2)]);
var state_31956__$1 = state_31956;
var statearr_31987_33753 = state_31956__$1;
(statearr_31987_33753[(2)] = inst_31929);

(statearr_31987_33753[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (21))){
var inst_31949 = (state_31956[(2)]);
var state_31956__$1 = (function (){var statearr_31988 = state_31956;
(statearr_31988[(9)] = inst_31949);

return statearr_31988;
})();
var statearr_31989_33754 = state_31956__$1;
(statearr_31989_33754[(2)] = null);

(statearr_31989_33754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (13))){
var inst_31909 = (state_31956[(10)]);
var inst_31911 = cljs.core.chunked_seq_QMARK_(inst_31909);
var state_31956__$1 = state_31956;
if(inst_31911){
var statearr_31991_33755 = state_31956__$1;
(statearr_31991_33755[(1)] = (16));

} else {
var statearr_31992_33756 = state_31956__$1;
(statearr_31992_33756[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (22))){
var inst_31941 = (state_31956[(2)]);
var state_31956__$1 = state_31956;
if(cljs.core.truth_(inst_31941)){
var statearr_31993_33757 = state_31956__$1;
(statearr_31993_33757[(1)] = (23));

} else {
var statearr_31994_33758 = state_31956__$1;
(statearr_31994_33758[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (6))){
var inst_31937 = (state_31956[(11)]);
var inst_31879 = (state_31956[(8)]);
var inst_31935 = (state_31956[(7)]);
var inst_31935__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_31879) : topic_fn.call(null,inst_31879));
var inst_31936 = cljs.core.deref(mults);
var inst_31937__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31936,inst_31935__$1);
var state_31956__$1 = (function (){var statearr_31995 = state_31956;
(statearr_31995[(11)] = inst_31937__$1);

(statearr_31995[(7)] = inst_31935__$1);

return statearr_31995;
})();
if(cljs.core.truth_(inst_31937__$1)){
var statearr_31997_33760 = state_31956__$1;
(statearr_31997_33760[(1)] = (19));

} else {
var statearr_31998_33761 = state_31956__$1;
(statearr_31998_33761[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (25))){
var inst_31946 = (state_31956[(2)]);
var state_31956__$1 = state_31956;
var statearr_32000_33762 = state_31956__$1;
(statearr_32000_33762[(2)] = inst_31946);

(statearr_32000_33762[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (17))){
var inst_31909 = (state_31956[(10)]);
var inst_31918 = cljs.core.first(inst_31909);
var inst_31919 = cljs.core.async.muxch_STAR_(inst_31918);
var inst_31920 = cljs.core.async.close_BANG_(inst_31919);
var inst_31921 = cljs.core.next(inst_31909);
var inst_31889 = inst_31921;
var inst_31890 = null;
var inst_31891 = (0);
var inst_31892 = (0);
var state_31956__$1 = (function (){var statearr_32001 = state_31956;
(statearr_32001[(12)] = inst_31889);

(statearr_32001[(13)] = inst_31891);

(statearr_32001[(14)] = inst_31920);

(statearr_32001[(15)] = inst_31892);

(statearr_32001[(16)] = inst_31890);

return statearr_32001;
})();
var statearr_32002_33763 = state_31956__$1;
(statearr_32002_33763[(2)] = null);

(statearr_32002_33763[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (3))){
var inst_31954 = (state_31956[(2)]);
var state_31956__$1 = state_31956;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31956__$1,inst_31954);
} else {
if((state_val_31958 === (12))){
var inst_31931 = (state_31956[(2)]);
var state_31956__$1 = state_31956;
var statearr_32005_33765 = state_31956__$1;
(statearr_32005_33765[(2)] = inst_31931);

(statearr_32005_33765[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (2))){
var state_31956__$1 = state_31956;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31956__$1,(4),ch);
} else {
if((state_val_31958 === (23))){
var state_31956__$1 = state_31956;
var statearr_32009_33770 = state_31956__$1;
(statearr_32009_33770[(2)] = null);

(statearr_32009_33770[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (19))){
var inst_31937 = (state_31956[(11)]);
var inst_31879 = (state_31956[(8)]);
var inst_31939 = cljs.core.async.muxch_STAR_(inst_31937);
var state_31956__$1 = state_31956;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31956__$1,(22),inst_31939,inst_31879);
} else {
if((state_val_31958 === (11))){
var inst_31889 = (state_31956[(12)]);
var inst_31909 = (state_31956[(10)]);
var inst_31909__$1 = cljs.core.seq(inst_31889);
var state_31956__$1 = (function (){var statearr_32010 = state_31956;
(statearr_32010[(10)] = inst_31909__$1);

return statearr_32010;
})();
if(inst_31909__$1){
var statearr_32014_33778 = state_31956__$1;
(statearr_32014_33778[(1)] = (13));

} else {
var statearr_32015_33779 = state_31956__$1;
(statearr_32015_33779[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (9))){
var inst_31933 = (state_31956[(2)]);
var state_31956__$1 = state_31956;
var statearr_32017_33780 = state_31956__$1;
(statearr_32017_33780[(2)] = inst_31933);

(statearr_32017_33780[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (5))){
var inst_31886 = cljs.core.deref(mults);
var inst_31887 = cljs.core.vals(inst_31886);
var inst_31888 = cljs.core.seq(inst_31887);
var inst_31889 = inst_31888;
var inst_31890 = null;
var inst_31891 = (0);
var inst_31892 = (0);
var state_31956__$1 = (function (){var statearr_32021 = state_31956;
(statearr_32021[(12)] = inst_31889);

(statearr_32021[(13)] = inst_31891);

(statearr_32021[(15)] = inst_31892);

(statearr_32021[(16)] = inst_31890);

return statearr_32021;
})();
var statearr_32022_33784 = state_31956__$1;
(statearr_32022_33784[(2)] = null);

(statearr_32022_33784[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (14))){
var state_31956__$1 = state_31956;
var statearr_32026_33785 = state_31956__$1;
(statearr_32026_33785[(2)] = null);

(statearr_32026_33785[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (16))){
var inst_31909 = (state_31956[(10)]);
var inst_31913 = cljs.core.chunk_first(inst_31909);
var inst_31914 = cljs.core.chunk_rest(inst_31909);
var inst_31915 = cljs.core.count(inst_31913);
var inst_31889 = inst_31914;
var inst_31890 = inst_31913;
var inst_31891 = inst_31915;
var inst_31892 = (0);
var state_31956__$1 = (function (){var statearr_32027 = state_31956;
(statearr_32027[(12)] = inst_31889);

(statearr_32027[(13)] = inst_31891);

(statearr_32027[(15)] = inst_31892);

(statearr_32027[(16)] = inst_31890);

return statearr_32027;
})();
var statearr_32028_33789 = state_31956__$1;
(statearr_32028_33789[(2)] = null);

(statearr_32028_33789[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (10))){
var inst_31889 = (state_31956[(12)]);
var inst_31891 = (state_31956[(13)]);
var inst_31892 = (state_31956[(15)]);
var inst_31890 = (state_31956[(16)]);
var inst_31897 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_31890,inst_31892);
var inst_31901 = cljs.core.async.muxch_STAR_(inst_31897);
var inst_31902 = cljs.core.async.close_BANG_(inst_31901);
var inst_31903 = (inst_31892 + (1));
var tmp32023 = inst_31889;
var tmp32024 = inst_31891;
var tmp32025 = inst_31890;
var inst_31889__$1 = tmp32023;
var inst_31890__$1 = tmp32025;
var inst_31891__$1 = tmp32024;
var inst_31892__$1 = inst_31903;
var state_31956__$1 = (function (){var statearr_32033 = state_31956;
(statearr_32033[(12)] = inst_31889__$1);

(statearr_32033[(17)] = inst_31902);

(statearr_32033[(13)] = inst_31891__$1);

(statearr_32033[(15)] = inst_31892__$1);

(statearr_32033[(16)] = inst_31890__$1);

return statearr_32033;
})();
var statearr_32034_33793 = state_31956__$1;
(statearr_32034_33793[(2)] = null);

(statearr_32034_33793[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (18))){
var inst_31924 = (state_31956[(2)]);
var state_31956__$1 = state_31956;
var statearr_32035_33794 = state_31956__$1;
(statearr_32035_33794[(2)] = inst_31924);

(statearr_32035_33794[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31958 === (8))){
var inst_31891 = (state_31956[(13)]);
var inst_31892 = (state_31956[(15)]);
var inst_31894 = (inst_31892 < inst_31891);
var inst_31895 = inst_31894;
var state_31956__$1 = state_31956;
if(cljs.core.truth_(inst_31895)){
var statearr_32036_33796 = state_31956__$1;
(statearr_32036_33796[(1)] = (10));

} else {
var statearr_32037_33797 = state_31956__$1;
(statearr_32037_33797[(1)] = (11));

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
});})(c__30361__auto___33742,mults,ensure_mult,p))
;
return ((function (switch__30100__auto__,c__30361__auto___33742,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__30101__auto__ = null;
var cljs$core$async$state_machine__30101__auto____0 = (function (){
var statearr_32038 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32038[(0)] = cljs$core$async$state_machine__30101__auto__);

(statearr_32038[(1)] = (1));

return statearr_32038;
});
var cljs$core$async$state_machine__30101__auto____1 = (function (state_31956){
while(true){
var ret_value__30102__auto__ = (function (){try{while(true){
var result__30103__auto__ = switch__30100__auto__(state_31956);
if(cljs.core.keyword_identical_QMARK_(result__30103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30103__auto__;
}
break;
}
}catch (e32039){if((e32039 instanceof Object)){
var ex__30104__auto__ = e32039;
var statearr_32041_33807 = state_31956;
(statearr_32041_33807[(5)] = ex__30104__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31956);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32039;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33808 = state_31956;
state_31956 = G__33808;
continue;
} else {
return ret_value__30102__auto__;
}
break;
}
});
cljs$core$async$state_machine__30101__auto__ = function(state_31956){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30101__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30101__auto____1.call(this,state_31956);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30101__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30101__auto____0;
cljs$core$async$state_machine__30101__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30101__auto____1;
return cljs$core$async$state_machine__30101__auto__;
})()
;})(switch__30100__auto__,c__30361__auto___33742,mults,ensure_mult,p))
})();
var state__30363__auto__ = (function (){var statearr_32043 = (f__30362__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30362__auto__.cljs$core$IFn$_invoke$arity$0() : f__30362__auto__.call(null));
(statearr_32043[(6)] = c__30361__auto___33742);

return statearr_32043;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30363__auto__);
});})(c__30361__auto___33742,mults,ensure_mult,p))
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
var G__32050 = arguments.length;
switch (G__32050) {
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
var G__32082 = arguments.length;
switch (G__32082) {
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
var G__32085 = arguments.length;
switch (G__32085) {
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
var c__30361__auto___33824 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30361__auto___33824,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__30362__auto__ = (function (){var switch__30100__auto__ = ((function (c__30361__auto___33824,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_32131){
var state_val_32132 = (state_32131[(1)]);
if((state_val_32132 === (7))){
var state_32131__$1 = state_32131;
var statearr_32134_33825 = state_32131__$1;
(statearr_32134_33825[(2)] = null);

(statearr_32134_33825[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32132 === (1))){
var state_32131__$1 = state_32131;
var statearr_32136_33826 = state_32131__$1;
(statearr_32136_33826[(2)] = null);

(statearr_32136_33826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32132 === (4))){
var inst_32095 = (state_32131[(7)]);
var inst_32097 = (inst_32095 < cnt);
var state_32131__$1 = state_32131;
if(cljs.core.truth_(inst_32097)){
var statearr_32137_33827 = state_32131__$1;
(statearr_32137_33827[(1)] = (6));

} else {
var statearr_32138_33828 = state_32131__$1;
(statearr_32138_33828[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32132 === (15))){
var inst_32127 = (state_32131[(2)]);
var state_32131__$1 = state_32131;
var statearr_32139_33829 = state_32131__$1;
(statearr_32139_33829[(2)] = inst_32127);

(statearr_32139_33829[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32132 === (13))){
var inst_32120 = cljs.core.async.close_BANG_(out);
var state_32131__$1 = state_32131;
var statearr_32140_33836 = state_32131__$1;
(statearr_32140_33836[(2)] = inst_32120);

(statearr_32140_33836[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32132 === (6))){
var state_32131__$1 = state_32131;
var statearr_32141_33837 = state_32131__$1;
(statearr_32141_33837[(2)] = null);

(statearr_32141_33837[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32132 === (3))){
var inst_32129 = (state_32131[(2)]);
var state_32131__$1 = state_32131;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32131__$1,inst_32129);
} else {
if((state_val_32132 === (12))){
var inst_32117 = (state_32131[(8)]);
var inst_32117__$1 = (state_32131[(2)]);
var inst_32118 = cljs.core.some(cljs.core.nil_QMARK_,inst_32117__$1);
var state_32131__$1 = (function (){var statearr_32142 = state_32131;
(statearr_32142[(8)] = inst_32117__$1);

return statearr_32142;
})();
if(cljs.core.truth_(inst_32118)){
var statearr_32143_33838 = state_32131__$1;
(statearr_32143_33838[(1)] = (13));

} else {
var statearr_32144_33839 = state_32131__$1;
(statearr_32144_33839[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32132 === (2))){
var inst_32094 = cljs.core.reset_BANG_(dctr,cnt);
var inst_32095 = (0);
var state_32131__$1 = (function (){var statearr_32147 = state_32131;
(statearr_32147[(9)] = inst_32094);

(statearr_32147[(7)] = inst_32095);

return statearr_32147;
})();
var statearr_32148_33840 = state_32131__$1;
(statearr_32148_33840[(2)] = null);

(statearr_32148_33840[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32132 === (11))){
var inst_32095 = (state_32131[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_32131,(10),Object,null,(9));
var inst_32104 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_32095) : chs__$1.call(null,inst_32095));
var inst_32105 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_32095) : done.call(null,inst_32095));
var inst_32106 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_32104,inst_32105);
var state_32131__$1 = state_32131;
var statearr_32152_33841 = state_32131__$1;
(statearr_32152_33841[(2)] = inst_32106);


cljs.core.async.impl.ioc_helpers.process_exception(state_32131__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32132 === (9))){
var inst_32095 = (state_32131[(7)]);
var inst_32108 = (state_32131[(2)]);
var inst_32109 = (inst_32095 + (1));
var inst_32095__$1 = inst_32109;
var state_32131__$1 = (function (){var statearr_32153 = state_32131;
(statearr_32153[(10)] = inst_32108);

(statearr_32153[(7)] = inst_32095__$1);

return statearr_32153;
})();
var statearr_32154_33842 = state_32131__$1;
(statearr_32154_33842[(2)] = null);

(statearr_32154_33842[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32132 === (5))){
var inst_32115 = (state_32131[(2)]);
var state_32131__$1 = (function (){var statearr_32155 = state_32131;
(statearr_32155[(11)] = inst_32115);

return statearr_32155;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32131__$1,(12),dchan);
} else {
if((state_val_32132 === (14))){
var inst_32117 = (state_32131[(8)]);
var inst_32122 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_32117);
var state_32131__$1 = state_32131;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32131__$1,(16),out,inst_32122);
} else {
if((state_val_32132 === (16))){
var inst_32124 = (state_32131[(2)]);
var state_32131__$1 = (function (){var statearr_32160 = state_32131;
(statearr_32160[(12)] = inst_32124);

return statearr_32160;
})();
var statearr_32161_33849 = state_32131__$1;
(statearr_32161_33849[(2)] = null);

(statearr_32161_33849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32132 === (10))){
var inst_32099 = (state_32131[(2)]);
var inst_32100 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_32131__$1 = (function (){var statearr_32162 = state_32131;
(statearr_32162[(13)] = inst_32099);

return statearr_32162;
})();
var statearr_32163_33850 = state_32131__$1;
(statearr_32163_33850[(2)] = inst_32100);


cljs.core.async.impl.ioc_helpers.process_exception(state_32131__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32132 === (8))){
var inst_32113 = (state_32131[(2)]);
var state_32131__$1 = state_32131;
var statearr_32166_33851 = state_32131__$1;
(statearr_32166_33851[(2)] = inst_32113);

(statearr_32166_33851[(1)] = (5));


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
});})(c__30361__auto___33824,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__30100__auto__,c__30361__auto___33824,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__30101__auto__ = null;
var cljs$core$async$state_machine__30101__auto____0 = (function (){
var statearr_32167 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32167[(0)] = cljs$core$async$state_machine__30101__auto__);

(statearr_32167[(1)] = (1));

return statearr_32167;
});
var cljs$core$async$state_machine__30101__auto____1 = (function (state_32131){
while(true){
var ret_value__30102__auto__ = (function (){try{while(true){
var result__30103__auto__ = switch__30100__auto__(state_32131);
if(cljs.core.keyword_identical_QMARK_(result__30103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30103__auto__;
}
break;
}
}catch (e32168){if((e32168 instanceof Object)){
var ex__30104__auto__ = e32168;
var statearr_32169_33855 = state_32131;
(statearr_32169_33855[(5)] = ex__30104__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32131);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32168;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33856 = state_32131;
state_32131 = G__33856;
continue;
} else {
return ret_value__30102__auto__;
}
break;
}
});
cljs$core$async$state_machine__30101__auto__ = function(state_32131){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30101__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30101__auto____1.call(this,state_32131);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30101__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30101__auto____0;
cljs$core$async$state_machine__30101__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30101__auto____1;
return cljs$core$async$state_machine__30101__auto__;
})()
;})(switch__30100__auto__,c__30361__auto___33824,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__30363__auto__ = (function (){var statearr_32171 = (f__30362__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30362__auto__.cljs$core$IFn$_invoke$arity$0() : f__30362__auto__.call(null));
(statearr_32171[(6)] = c__30361__auto___33824);

return statearr_32171;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30363__auto__);
});})(c__30361__auto___33824,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__32178 = arguments.length;
switch (G__32178) {
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
var c__30361__auto___33862 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30361__auto___33862,out){
return (function (){
var f__30362__auto__ = (function (){var switch__30100__auto__ = ((function (c__30361__auto___33862,out){
return (function (state_32214){
var state_val_32215 = (state_32214[(1)]);
if((state_val_32215 === (7))){
var inst_32193 = (state_32214[(7)]);
var inst_32194 = (state_32214[(8)]);
var inst_32193__$1 = (state_32214[(2)]);
var inst_32194__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32193__$1,(0),null);
var inst_32195 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32193__$1,(1),null);
var inst_32196 = (inst_32194__$1 == null);
var state_32214__$1 = (function (){var statearr_32219 = state_32214;
(statearr_32219[(9)] = inst_32195);

(statearr_32219[(7)] = inst_32193__$1);

(statearr_32219[(8)] = inst_32194__$1);

return statearr_32219;
})();
if(cljs.core.truth_(inst_32196)){
var statearr_32220_33864 = state_32214__$1;
(statearr_32220_33864[(1)] = (8));

} else {
var statearr_32221_33865 = state_32214__$1;
(statearr_32221_33865[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32215 === (1))){
var inst_32182 = cljs.core.vec(chs);
var inst_32183 = inst_32182;
var state_32214__$1 = (function (){var statearr_32223 = state_32214;
(statearr_32223[(10)] = inst_32183);

return statearr_32223;
})();
var statearr_32224_33866 = state_32214__$1;
(statearr_32224_33866[(2)] = null);

(statearr_32224_33866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32215 === (4))){
var inst_32183 = (state_32214[(10)]);
var state_32214__$1 = state_32214;
return cljs.core.async.ioc_alts_BANG_(state_32214__$1,(7),inst_32183);
} else {
if((state_val_32215 === (6))){
var inst_32210 = (state_32214[(2)]);
var state_32214__$1 = state_32214;
var statearr_32225_33867 = state_32214__$1;
(statearr_32225_33867[(2)] = inst_32210);

(statearr_32225_33867[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32215 === (3))){
var inst_32212 = (state_32214[(2)]);
var state_32214__$1 = state_32214;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32214__$1,inst_32212);
} else {
if((state_val_32215 === (2))){
var inst_32183 = (state_32214[(10)]);
var inst_32186 = cljs.core.count(inst_32183);
var inst_32187 = (inst_32186 > (0));
var state_32214__$1 = state_32214;
if(cljs.core.truth_(inst_32187)){
var statearr_32228_33869 = state_32214__$1;
(statearr_32228_33869[(1)] = (4));

} else {
var statearr_32229_33871 = state_32214__$1;
(statearr_32229_33871[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32215 === (11))){
var inst_32183 = (state_32214[(10)]);
var inst_32203 = (state_32214[(2)]);
var tmp32226 = inst_32183;
var inst_32183__$1 = tmp32226;
var state_32214__$1 = (function (){var statearr_32233 = state_32214;
(statearr_32233[(11)] = inst_32203);

(statearr_32233[(10)] = inst_32183__$1);

return statearr_32233;
})();
var statearr_32234_33872 = state_32214__$1;
(statearr_32234_33872[(2)] = null);

(statearr_32234_33872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32215 === (9))){
var inst_32194 = (state_32214[(8)]);
var state_32214__$1 = state_32214;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32214__$1,(11),out,inst_32194);
} else {
if((state_val_32215 === (5))){
var inst_32208 = cljs.core.async.close_BANG_(out);
var state_32214__$1 = state_32214;
var statearr_32247_33873 = state_32214__$1;
(statearr_32247_33873[(2)] = inst_32208);

(statearr_32247_33873[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32215 === (10))){
var inst_32206 = (state_32214[(2)]);
var state_32214__$1 = state_32214;
var statearr_32249_33874 = state_32214__$1;
(statearr_32249_33874[(2)] = inst_32206);

(statearr_32249_33874[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32215 === (8))){
var inst_32195 = (state_32214[(9)]);
var inst_32193 = (state_32214[(7)]);
var inst_32194 = (state_32214[(8)]);
var inst_32183 = (state_32214[(10)]);
var inst_32198 = (function (){var cs = inst_32183;
var vec__32189 = inst_32193;
var v = inst_32194;
var c = inst_32195;
return ((function (cs,vec__32189,v,c,inst_32195,inst_32193,inst_32194,inst_32183,state_val_32215,c__30361__auto___33862,out){
return (function (p1__32176_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__32176_SHARP_);
});
;})(cs,vec__32189,v,c,inst_32195,inst_32193,inst_32194,inst_32183,state_val_32215,c__30361__auto___33862,out))
})();
var inst_32199 = cljs.core.filterv(inst_32198,inst_32183);
var inst_32183__$1 = inst_32199;
var state_32214__$1 = (function (){var statearr_32252 = state_32214;
(statearr_32252[(10)] = inst_32183__$1);

return statearr_32252;
})();
var statearr_32253_33878 = state_32214__$1;
(statearr_32253_33878[(2)] = null);

(statearr_32253_33878[(1)] = (2));


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
});})(c__30361__auto___33862,out))
;
return ((function (switch__30100__auto__,c__30361__auto___33862,out){
return (function() {
var cljs$core$async$state_machine__30101__auto__ = null;
var cljs$core$async$state_machine__30101__auto____0 = (function (){
var statearr_32255 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32255[(0)] = cljs$core$async$state_machine__30101__auto__);

(statearr_32255[(1)] = (1));

return statearr_32255;
});
var cljs$core$async$state_machine__30101__auto____1 = (function (state_32214){
while(true){
var ret_value__30102__auto__ = (function (){try{while(true){
var result__30103__auto__ = switch__30100__auto__(state_32214);
if(cljs.core.keyword_identical_QMARK_(result__30103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30103__auto__;
}
break;
}
}catch (e32258){if((e32258 instanceof Object)){
var ex__30104__auto__ = e32258;
var statearr_32259_33885 = state_32214;
(statearr_32259_33885[(5)] = ex__30104__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32214);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32258;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33886 = state_32214;
state_32214 = G__33886;
continue;
} else {
return ret_value__30102__auto__;
}
break;
}
});
cljs$core$async$state_machine__30101__auto__ = function(state_32214){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30101__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30101__auto____1.call(this,state_32214);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30101__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30101__auto____0;
cljs$core$async$state_machine__30101__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30101__auto____1;
return cljs$core$async$state_machine__30101__auto__;
})()
;})(switch__30100__auto__,c__30361__auto___33862,out))
})();
var state__30363__auto__ = (function (){var statearr_32263 = (f__30362__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30362__auto__.cljs$core$IFn$_invoke$arity$0() : f__30362__auto__.call(null));
(statearr_32263[(6)] = c__30361__auto___33862);

return statearr_32263;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30363__auto__);
});})(c__30361__auto___33862,out))
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
var G__32268 = arguments.length;
switch (G__32268) {
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
var c__30361__auto___33892 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30361__auto___33892,out){
return (function (){
var f__30362__auto__ = (function (){var switch__30100__auto__ = ((function (c__30361__auto___33892,out){
return (function (state_32296){
var state_val_32297 = (state_32296[(1)]);
if((state_val_32297 === (7))){
var inst_32277 = (state_32296[(7)]);
var inst_32277__$1 = (state_32296[(2)]);
var inst_32278 = (inst_32277__$1 == null);
var inst_32279 = cljs.core.not(inst_32278);
var state_32296__$1 = (function (){var statearr_32302 = state_32296;
(statearr_32302[(7)] = inst_32277__$1);

return statearr_32302;
})();
if(inst_32279){
var statearr_32303_33894 = state_32296__$1;
(statearr_32303_33894[(1)] = (8));

} else {
var statearr_32304_33895 = state_32296__$1;
(statearr_32304_33895[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32297 === (1))){
var inst_32272 = (0);
var state_32296__$1 = (function (){var statearr_32305 = state_32296;
(statearr_32305[(8)] = inst_32272);

return statearr_32305;
})();
var statearr_32306_33896 = state_32296__$1;
(statearr_32306_33896[(2)] = null);

(statearr_32306_33896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32297 === (4))){
var state_32296__$1 = state_32296;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32296__$1,(7),ch);
} else {
if((state_val_32297 === (6))){
var inst_32290 = (state_32296[(2)]);
var state_32296__$1 = state_32296;
var statearr_32308_33897 = state_32296__$1;
(statearr_32308_33897[(2)] = inst_32290);

(statearr_32308_33897[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32297 === (3))){
var inst_32292 = (state_32296[(2)]);
var inst_32293 = cljs.core.async.close_BANG_(out);
var state_32296__$1 = (function (){var statearr_32312 = state_32296;
(statearr_32312[(9)] = inst_32292);

return statearr_32312;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32296__$1,inst_32293);
} else {
if((state_val_32297 === (2))){
var inst_32272 = (state_32296[(8)]);
var inst_32274 = (inst_32272 < n);
var state_32296__$1 = state_32296;
if(cljs.core.truth_(inst_32274)){
var statearr_32314_33898 = state_32296__$1;
(statearr_32314_33898[(1)] = (4));

} else {
var statearr_32315_33899 = state_32296__$1;
(statearr_32315_33899[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32297 === (11))){
var inst_32272 = (state_32296[(8)]);
var inst_32282 = (state_32296[(2)]);
var inst_32283 = (inst_32272 + (1));
var inst_32272__$1 = inst_32283;
var state_32296__$1 = (function (){var statearr_32316 = state_32296;
(statearr_32316[(8)] = inst_32272__$1);

(statearr_32316[(10)] = inst_32282);

return statearr_32316;
})();
var statearr_32317_33901 = state_32296__$1;
(statearr_32317_33901[(2)] = null);

(statearr_32317_33901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32297 === (9))){
var state_32296__$1 = state_32296;
var statearr_32318_33902 = state_32296__$1;
(statearr_32318_33902[(2)] = null);

(statearr_32318_33902[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32297 === (5))){
var state_32296__$1 = state_32296;
var statearr_32319_33904 = state_32296__$1;
(statearr_32319_33904[(2)] = null);

(statearr_32319_33904[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32297 === (10))){
var inst_32287 = (state_32296[(2)]);
var state_32296__$1 = state_32296;
var statearr_32320_33906 = state_32296__$1;
(statearr_32320_33906[(2)] = inst_32287);

(statearr_32320_33906[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32297 === (8))){
var inst_32277 = (state_32296[(7)]);
var state_32296__$1 = state_32296;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32296__$1,(11),out,inst_32277);
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
});})(c__30361__auto___33892,out))
;
return ((function (switch__30100__auto__,c__30361__auto___33892,out){
return (function() {
var cljs$core$async$state_machine__30101__auto__ = null;
var cljs$core$async$state_machine__30101__auto____0 = (function (){
var statearr_32321 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32321[(0)] = cljs$core$async$state_machine__30101__auto__);

(statearr_32321[(1)] = (1));

return statearr_32321;
});
var cljs$core$async$state_machine__30101__auto____1 = (function (state_32296){
while(true){
var ret_value__30102__auto__ = (function (){try{while(true){
var result__30103__auto__ = switch__30100__auto__(state_32296);
if(cljs.core.keyword_identical_QMARK_(result__30103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30103__auto__;
}
break;
}
}catch (e32322){if((e32322 instanceof Object)){
var ex__30104__auto__ = e32322;
var statearr_32327_33908 = state_32296;
(statearr_32327_33908[(5)] = ex__30104__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32296);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32322;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33909 = state_32296;
state_32296 = G__33909;
continue;
} else {
return ret_value__30102__auto__;
}
break;
}
});
cljs$core$async$state_machine__30101__auto__ = function(state_32296){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30101__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30101__auto____1.call(this,state_32296);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30101__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30101__auto____0;
cljs$core$async$state_machine__30101__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30101__auto____1;
return cljs$core$async$state_machine__30101__auto__;
})()
;})(switch__30100__auto__,c__30361__auto___33892,out))
})();
var state__30363__auto__ = (function (){var statearr_32328 = (f__30362__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30362__auto__.cljs$core$IFn$_invoke$arity$0() : f__30362__auto__.call(null));
(statearr_32328[(6)] = c__30361__auto___33892);

return statearr_32328;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30363__auto__);
});})(c__30361__auto___33892,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32338 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32338 = (function (f,ch,meta32339){
this.f = f;
this.ch = ch;
this.meta32339 = meta32339;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32338.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32340,meta32339__$1){
var self__ = this;
var _32340__$1 = this;
return (new cljs.core.async.t_cljs$core$async32338(self__.f,self__.ch,meta32339__$1));
});

cljs.core.async.t_cljs$core$async32338.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32340){
var self__ = this;
var _32340__$1 = this;
return self__.meta32339;
});

cljs.core.async.t_cljs$core$async32338.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32338.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async32338.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async32338.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32338.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32355 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32355 = (function (f,ch,meta32339,_,fn1,meta32356){
this.f = f;
this.ch = ch;
this.meta32339 = meta32339;
this._ = _;
this.fn1 = fn1;
this.meta32356 = meta32356;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32355.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_32357,meta32356__$1){
var self__ = this;
var _32357__$1 = this;
return (new cljs.core.async.t_cljs$core$async32355(self__.f,self__.ch,self__.meta32339,self__._,self__.fn1,meta32356__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async32355.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_32357){
var self__ = this;
var _32357__$1 = this;
return self__.meta32356;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32355.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32355.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32355.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32355.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__32334_SHARP_){
var G__32370 = (((p1__32334_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__32334_SHARP_) : self__.f.call(null,p1__32334_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__32370) : f1.call(null,G__32370));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async32355.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32339","meta32339",360571425,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32338","cljs.core.async/t_cljs$core$async32338",19244198,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32356","meta32356",-161291984,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32355.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32355.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32355";

cljs.core.async.t_cljs$core$async32355.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async32355");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32355.
 */
cljs.core.async.__GT_t_cljs$core$async32355 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32355(f__$1,ch__$1,meta32339__$1,___$2,fn1__$1,meta32356){
return (new cljs.core.async.t_cljs$core$async32355(f__$1,ch__$1,meta32339__$1,___$2,fn1__$1,meta32356));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async32355(self__.f,self__.ch,self__.meta32339,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__32374 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__32374) : self__.f.call(null,G__32374));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async32338.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32338.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async32338.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32339","meta32339",360571425,null)], null);
});

cljs.core.async.t_cljs$core$async32338.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32338.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32338";

cljs.core.async.t_cljs$core$async32338.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async32338");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32338.
 */
cljs.core.async.__GT_t_cljs$core$async32338 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32338(f__$1,ch__$1,meta32339){
return (new cljs.core.async.t_cljs$core$async32338(f__$1,ch__$1,meta32339));
});

}

return (new cljs.core.async.t_cljs$core$async32338(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32376 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32376 = (function (f,ch,meta32377){
this.f = f;
this.ch = ch;
this.meta32377 = meta32377;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32376.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32378,meta32377__$1){
var self__ = this;
var _32378__$1 = this;
return (new cljs.core.async.t_cljs$core$async32376(self__.f,self__.ch,meta32377__$1));
});

cljs.core.async.t_cljs$core$async32376.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32378){
var self__ = this;
var _32378__$1 = this;
return self__.meta32377;
});

cljs.core.async.t_cljs$core$async32376.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32376.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async32376.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32376.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32376.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32376.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async32376.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32377","meta32377",167321428,null)], null);
});

cljs.core.async.t_cljs$core$async32376.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32376.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32376";

cljs.core.async.t_cljs$core$async32376.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async32376");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32376.
 */
cljs.core.async.__GT_t_cljs$core$async32376 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32376(f__$1,ch__$1,meta32377){
return (new cljs.core.async.t_cljs$core$async32376(f__$1,ch__$1,meta32377));
});

}

return (new cljs.core.async.t_cljs$core$async32376(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32391 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32391 = (function (p,ch,meta32392){
this.p = p;
this.ch = ch;
this.meta32392 = meta32392;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32391.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32393,meta32392__$1){
var self__ = this;
var _32393__$1 = this;
return (new cljs.core.async.t_cljs$core$async32391(self__.p,self__.ch,meta32392__$1));
});

cljs.core.async.t_cljs$core$async32391.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32393){
var self__ = this;
var _32393__$1 = this;
return self__.meta32392;
});

cljs.core.async.t_cljs$core$async32391.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32391.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async32391.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async32391.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32391.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32391.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32391.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async32391.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32392","meta32392",955555011,null)], null);
});

cljs.core.async.t_cljs$core$async32391.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32391.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32391";

cljs.core.async.t_cljs$core$async32391.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async32391");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32391.
 */
cljs.core.async.__GT_t_cljs$core$async32391 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32391(p__$1,ch__$1,meta32392){
return (new cljs.core.async.t_cljs$core$async32391(p__$1,ch__$1,meta32392));
});

}

return (new cljs.core.async.t_cljs$core$async32391(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__32420 = arguments.length;
switch (G__32420) {
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
var c__30361__auto___33970 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30361__auto___33970,out){
return (function (){
var f__30362__auto__ = (function (){var switch__30100__auto__ = ((function (c__30361__auto___33970,out){
return (function (state_32444){
var state_val_32445 = (state_32444[(1)]);
if((state_val_32445 === (7))){
var inst_32440 = (state_32444[(2)]);
var state_32444__$1 = state_32444;
var statearr_32447_33980 = state_32444__$1;
(statearr_32447_33980[(2)] = inst_32440);

(statearr_32447_33980[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32445 === (1))){
var state_32444__$1 = state_32444;
var statearr_32448_33982 = state_32444__$1;
(statearr_32448_33982[(2)] = null);

(statearr_32448_33982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32445 === (4))){
var inst_32426 = (state_32444[(7)]);
var inst_32426__$1 = (state_32444[(2)]);
var inst_32427 = (inst_32426__$1 == null);
var state_32444__$1 = (function (){var statearr_32449 = state_32444;
(statearr_32449[(7)] = inst_32426__$1);

return statearr_32449;
})();
if(cljs.core.truth_(inst_32427)){
var statearr_32450_33984 = state_32444__$1;
(statearr_32450_33984[(1)] = (5));

} else {
var statearr_32451_33986 = state_32444__$1;
(statearr_32451_33986[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32445 === (6))){
var inst_32426 = (state_32444[(7)]);
var inst_32431 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32426) : p.call(null,inst_32426));
var state_32444__$1 = state_32444;
if(cljs.core.truth_(inst_32431)){
var statearr_32452_33988 = state_32444__$1;
(statearr_32452_33988[(1)] = (8));

} else {
var statearr_32453_33989 = state_32444__$1;
(statearr_32453_33989[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32445 === (3))){
var inst_32442 = (state_32444[(2)]);
var state_32444__$1 = state_32444;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32444__$1,inst_32442);
} else {
if((state_val_32445 === (2))){
var state_32444__$1 = state_32444;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32444__$1,(4),ch);
} else {
if((state_val_32445 === (11))){
var inst_32434 = (state_32444[(2)]);
var state_32444__$1 = state_32444;
var statearr_32454_33991 = state_32444__$1;
(statearr_32454_33991[(2)] = inst_32434);

(statearr_32454_33991[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32445 === (9))){
var state_32444__$1 = state_32444;
var statearr_32455_33992 = state_32444__$1;
(statearr_32455_33992[(2)] = null);

(statearr_32455_33992[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32445 === (5))){
var inst_32429 = cljs.core.async.close_BANG_(out);
var state_32444__$1 = state_32444;
var statearr_32458_33993 = state_32444__$1;
(statearr_32458_33993[(2)] = inst_32429);

(statearr_32458_33993[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32445 === (10))){
var inst_32437 = (state_32444[(2)]);
var state_32444__$1 = (function (){var statearr_32459 = state_32444;
(statearr_32459[(8)] = inst_32437);

return statearr_32459;
})();
var statearr_32460_33994 = state_32444__$1;
(statearr_32460_33994[(2)] = null);

(statearr_32460_33994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32445 === (8))){
var inst_32426 = (state_32444[(7)]);
var state_32444__$1 = state_32444;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32444__$1,(11),out,inst_32426);
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
});})(c__30361__auto___33970,out))
;
return ((function (switch__30100__auto__,c__30361__auto___33970,out){
return (function() {
var cljs$core$async$state_machine__30101__auto__ = null;
var cljs$core$async$state_machine__30101__auto____0 = (function (){
var statearr_32464 = [null,null,null,null,null,null,null,null,null];
(statearr_32464[(0)] = cljs$core$async$state_machine__30101__auto__);

(statearr_32464[(1)] = (1));

return statearr_32464;
});
var cljs$core$async$state_machine__30101__auto____1 = (function (state_32444){
while(true){
var ret_value__30102__auto__ = (function (){try{while(true){
var result__30103__auto__ = switch__30100__auto__(state_32444);
if(cljs.core.keyword_identical_QMARK_(result__30103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30103__auto__;
}
break;
}
}catch (e32465){if((e32465 instanceof Object)){
var ex__30104__auto__ = e32465;
var statearr_32466_33998 = state_32444;
(statearr_32466_33998[(5)] = ex__30104__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32444);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32465;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33999 = state_32444;
state_32444 = G__33999;
continue;
} else {
return ret_value__30102__auto__;
}
break;
}
});
cljs$core$async$state_machine__30101__auto__ = function(state_32444){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30101__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30101__auto____1.call(this,state_32444);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30101__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30101__auto____0;
cljs$core$async$state_machine__30101__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30101__auto____1;
return cljs$core$async$state_machine__30101__auto__;
})()
;})(switch__30100__auto__,c__30361__auto___33970,out))
})();
var state__30363__auto__ = (function (){var statearr_32467 = (f__30362__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30362__auto__.cljs$core$IFn$_invoke$arity$0() : f__30362__auto__.call(null));
(statearr_32467[(6)] = c__30361__auto___33970);

return statearr_32467;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30363__auto__);
});})(c__30361__auto___33970,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32469 = arguments.length;
switch (G__32469) {
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
var c__30361__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30361__auto__){
return (function (){
var f__30362__auto__ = (function (){var switch__30100__auto__ = ((function (c__30361__auto__){
return (function (state_32540){
var state_val_32541 = (state_32540[(1)]);
if((state_val_32541 === (7))){
var inst_32536 = (state_32540[(2)]);
var state_32540__$1 = state_32540;
var statearr_32542_34020 = state_32540__$1;
(statearr_32542_34020[(2)] = inst_32536);

(statearr_32542_34020[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32541 === (20))){
var inst_32506 = (state_32540[(7)]);
var inst_32517 = (state_32540[(2)]);
var inst_32518 = cljs.core.next(inst_32506);
var inst_32492 = inst_32518;
var inst_32493 = null;
var inst_32494 = (0);
var inst_32495 = (0);
var state_32540__$1 = (function (){var statearr_32543 = state_32540;
(statearr_32543[(8)] = inst_32517);

(statearr_32543[(9)] = inst_32494);

(statearr_32543[(10)] = inst_32492);

(statearr_32543[(11)] = inst_32493);

(statearr_32543[(12)] = inst_32495);

return statearr_32543;
})();
var statearr_32544_34031 = state_32540__$1;
(statearr_32544_34031[(2)] = null);

(statearr_32544_34031[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32541 === (1))){
var state_32540__$1 = state_32540;
var statearr_32545_34038 = state_32540__$1;
(statearr_32545_34038[(2)] = null);

(statearr_32545_34038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32541 === (4))){
var inst_32481 = (state_32540[(13)]);
var inst_32481__$1 = (state_32540[(2)]);
var inst_32482 = (inst_32481__$1 == null);
var state_32540__$1 = (function (){var statearr_32546 = state_32540;
(statearr_32546[(13)] = inst_32481__$1);

return statearr_32546;
})();
if(cljs.core.truth_(inst_32482)){
var statearr_32547_34051 = state_32540__$1;
(statearr_32547_34051[(1)] = (5));

} else {
var statearr_32548_34052 = state_32540__$1;
(statearr_32548_34052[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32541 === (15))){
var state_32540__$1 = state_32540;
var statearr_32552_34057 = state_32540__$1;
(statearr_32552_34057[(2)] = null);

(statearr_32552_34057[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32541 === (21))){
var state_32540__$1 = state_32540;
var statearr_32553_34061 = state_32540__$1;
(statearr_32553_34061[(2)] = null);

(statearr_32553_34061[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32541 === (13))){
var inst_32494 = (state_32540[(9)]);
var inst_32492 = (state_32540[(10)]);
var inst_32493 = (state_32540[(11)]);
var inst_32495 = (state_32540[(12)]);
var inst_32502 = (state_32540[(2)]);
var inst_32503 = (inst_32495 + (1));
var tmp32549 = inst_32494;
var tmp32550 = inst_32492;
var tmp32551 = inst_32493;
var inst_32492__$1 = tmp32550;
var inst_32493__$1 = tmp32551;
var inst_32494__$1 = tmp32549;
var inst_32495__$1 = inst_32503;
var state_32540__$1 = (function (){var statearr_32554 = state_32540;
(statearr_32554[(9)] = inst_32494__$1);

(statearr_32554[(10)] = inst_32492__$1);

(statearr_32554[(14)] = inst_32502);

(statearr_32554[(11)] = inst_32493__$1);

(statearr_32554[(12)] = inst_32495__$1);

return statearr_32554;
})();
var statearr_32555_34081 = state_32540__$1;
(statearr_32555_34081[(2)] = null);

(statearr_32555_34081[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32541 === (22))){
var state_32540__$1 = state_32540;
var statearr_32556_34083 = state_32540__$1;
(statearr_32556_34083[(2)] = null);

(statearr_32556_34083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32541 === (6))){
var inst_32481 = (state_32540[(13)]);
var inst_32490 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32481) : f.call(null,inst_32481));
var inst_32491 = cljs.core.seq(inst_32490);
var inst_32492 = inst_32491;
var inst_32493 = null;
var inst_32494 = (0);
var inst_32495 = (0);
var state_32540__$1 = (function (){var statearr_32557 = state_32540;
(statearr_32557[(9)] = inst_32494);

(statearr_32557[(10)] = inst_32492);

(statearr_32557[(11)] = inst_32493);

(statearr_32557[(12)] = inst_32495);

return statearr_32557;
})();
var statearr_32558_34102 = state_32540__$1;
(statearr_32558_34102[(2)] = null);

(statearr_32558_34102[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32541 === (17))){
var inst_32506 = (state_32540[(7)]);
var inst_32510 = cljs.core.chunk_first(inst_32506);
var inst_32511 = cljs.core.chunk_rest(inst_32506);
var inst_32512 = cljs.core.count(inst_32510);
var inst_32492 = inst_32511;
var inst_32493 = inst_32510;
var inst_32494 = inst_32512;
var inst_32495 = (0);
var state_32540__$1 = (function (){var statearr_32559 = state_32540;
(statearr_32559[(9)] = inst_32494);

(statearr_32559[(10)] = inst_32492);

(statearr_32559[(11)] = inst_32493);

(statearr_32559[(12)] = inst_32495);

return statearr_32559;
})();
var statearr_32560_34107 = state_32540__$1;
(statearr_32560_34107[(2)] = null);

(statearr_32560_34107[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32541 === (3))){
var inst_32538 = (state_32540[(2)]);
var state_32540__$1 = state_32540;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32540__$1,inst_32538);
} else {
if((state_val_32541 === (12))){
var inst_32526 = (state_32540[(2)]);
var state_32540__$1 = state_32540;
var statearr_32561_34111 = state_32540__$1;
(statearr_32561_34111[(2)] = inst_32526);

(statearr_32561_34111[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32541 === (2))){
var state_32540__$1 = state_32540;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32540__$1,(4),in$);
} else {
if((state_val_32541 === (23))){
var inst_32534 = (state_32540[(2)]);
var state_32540__$1 = state_32540;
var statearr_32563_34112 = state_32540__$1;
(statearr_32563_34112[(2)] = inst_32534);

(statearr_32563_34112[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32541 === (19))){
var inst_32521 = (state_32540[(2)]);
var state_32540__$1 = state_32540;
var statearr_32564_34113 = state_32540__$1;
(statearr_32564_34113[(2)] = inst_32521);

(statearr_32564_34113[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32541 === (11))){
var inst_32492 = (state_32540[(10)]);
var inst_32506 = (state_32540[(7)]);
var inst_32506__$1 = cljs.core.seq(inst_32492);
var state_32540__$1 = (function (){var statearr_32565 = state_32540;
(statearr_32565[(7)] = inst_32506__$1);

return statearr_32565;
})();
if(inst_32506__$1){
var statearr_32566_34118 = state_32540__$1;
(statearr_32566_34118[(1)] = (14));

} else {
var statearr_32567_34119 = state_32540__$1;
(statearr_32567_34119[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32541 === (9))){
var inst_32528 = (state_32540[(2)]);
var inst_32529 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_32540__$1 = (function (){var statearr_32568 = state_32540;
(statearr_32568[(15)] = inst_32528);

return statearr_32568;
})();
if(cljs.core.truth_(inst_32529)){
var statearr_32569_34124 = state_32540__$1;
(statearr_32569_34124[(1)] = (21));

} else {
var statearr_32570_34125 = state_32540__$1;
(statearr_32570_34125[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32541 === (5))){
var inst_32484 = cljs.core.async.close_BANG_(out);
var state_32540__$1 = state_32540;
var statearr_32571_34130 = state_32540__$1;
(statearr_32571_34130[(2)] = inst_32484);

(statearr_32571_34130[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32541 === (14))){
var inst_32506 = (state_32540[(7)]);
var inst_32508 = cljs.core.chunked_seq_QMARK_(inst_32506);
var state_32540__$1 = state_32540;
if(inst_32508){
var statearr_32572_34131 = state_32540__$1;
(statearr_32572_34131[(1)] = (17));

} else {
var statearr_32573_34132 = state_32540__$1;
(statearr_32573_34132[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32541 === (16))){
var inst_32524 = (state_32540[(2)]);
var state_32540__$1 = state_32540;
var statearr_32574_34133 = state_32540__$1;
(statearr_32574_34133[(2)] = inst_32524);

(statearr_32574_34133[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32541 === (10))){
var inst_32493 = (state_32540[(11)]);
var inst_32495 = (state_32540[(12)]);
var inst_32500 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_32493,inst_32495);
var state_32540__$1 = state_32540;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32540__$1,(13),out,inst_32500);
} else {
if((state_val_32541 === (18))){
var inst_32506 = (state_32540[(7)]);
var inst_32515 = cljs.core.first(inst_32506);
var state_32540__$1 = state_32540;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32540__$1,(20),out,inst_32515);
} else {
if((state_val_32541 === (8))){
var inst_32494 = (state_32540[(9)]);
var inst_32495 = (state_32540[(12)]);
var inst_32497 = (inst_32495 < inst_32494);
var inst_32498 = inst_32497;
var state_32540__$1 = state_32540;
if(cljs.core.truth_(inst_32498)){
var statearr_32575_34138 = state_32540__$1;
(statearr_32575_34138[(1)] = (10));

} else {
var statearr_32576_34139 = state_32540__$1;
(statearr_32576_34139[(1)] = (11));

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
});})(c__30361__auto__))
;
return ((function (switch__30100__auto__,c__30361__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__30101__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30101__auto____0 = (function (){
var statearr_32577 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32577[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30101__auto__);

(statearr_32577[(1)] = (1));

return statearr_32577;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30101__auto____1 = (function (state_32540){
while(true){
var ret_value__30102__auto__ = (function (){try{while(true){
var result__30103__auto__ = switch__30100__auto__(state_32540);
if(cljs.core.keyword_identical_QMARK_(result__30103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30103__auto__;
}
break;
}
}catch (e32578){if((e32578 instanceof Object)){
var ex__30104__auto__ = e32578;
var statearr_32579_34147 = state_32540;
(statearr_32579_34147[(5)] = ex__30104__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32540);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32578;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34148 = state_32540;
state_32540 = G__34148;
continue;
} else {
return ret_value__30102__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30101__auto__ = function(state_32540){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30101__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30101__auto____1.call(this,state_32540);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__30101__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30101__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30101__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30101__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30101__auto__;
})()
;})(switch__30100__auto__,c__30361__auto__))
})();
var state__30363__auto__ = (function (){var statearr_32580 = (f__30362__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30362__auto__.cljs$core$IFn$_invoke$arity$0() : f__30362__auto__.call(null));
(statearr_32580[(6)] = c__30361__auto__);

return statearr_32580;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30363__auto__);
});})(c__30361__auto__))
);

return c__30361__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32582 = arguments.length;
switch (G__32582) {
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
var G__32584 = arguments.length;
switch (G__32584) {
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
var G__32586 = arguments.length;
switch (G__32586) {
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
var c__30361__auto___34173 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30361__auto___34173,out){
return (function (){
var f__30362__auto__ = (function (){var switch__30100__auto__ = ((function (c__30361__auto___34173,out){
return (function (state_32613){
var state_val_32614 = (state_32613[(1)]);
if((state_val_32614 === (7))){
var inst_32608 = (state_32613[(2)]);
var state_32613__$1 = state_32613;
var statearr_32615_34186 = state_32613__$1;
(statearr_32615_34186[(2)] = inst_32608);

(statearr_32615_34186[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32614 === (1))){
var inst_32587 = null;
var state_32613__$1 = (function (){var statearr_32616 = state_32613;
(statearr_32616[(7)] = inst_32587);

return statearr_32616;
})();
var statearr_32619_34187 = state_32613__$1;
(statearr_32619_34187[(2)] = null);

(statearr_32619_34187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32614 === (4))){
var inst_32590 = (state_32613[(8)]);
var inst_32590__$1 = (state_32613[(2)]);
var inst_32593 = (inst_32590__$1 == null);
var inst_32594 = cljs.core.not(inst_32593);
var state_32613__$1 = (function (){var statearr_32621 = state_32613;
(statearr_32621[(8)] = inst_32590__$1);

return statearr_32621;
})();
if(inst_32594){
var statearr_32622_34216 = state_32613__$1;
(statearr_32622_34216[(1)] = (5));

} else {
var statearr_32623_34217 = state_32613__$1;
(statearr_32623_34217[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32614 === (6))){
var state_32613__$1 = state_32613;
var statearr_32624_34218 = state_32613__$1;
(statearr_32624_34218[(2)] = null);

(statearr_32624_34218[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32614 === (3))){
var inst_32610 = (state_32613[(2)]);
var inst_32611 = cljs.core.async.close_BANG_(out);
var state_32613__$1 = (function (){var statearr_32625 = state_32613;
(statearr_32625[(9)] = inst_32610);

return statearr_32625;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32613__$1,inst_32611);
} else {
if((state_val_32614 === (2))){
var state_32613__$1 = state_32613;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32613__$1,(4),ch);
} else {
if((state_val_32614 === (11))){
var inst_32590 = (state_32613[(8)]);
var inst_32602 = (state_32613[(2)]);
var inst_32587 = inst_32590;
var state_32613__$1 = (function (){var statearr_32626 = state_32613;
(statearr_32626[(10)] = inst_32602);

(statearr_32626[(7)] = inst_32587);

return statearr_32626;
})();
var statearr_32627_34223 = state_32613__$1;
(statearr_32627_34223[(2)] = null);

(statearr_32627_34223[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32614 === (9))){
var inst_32590 = (state_32613[(8)]);
var state_32613__$1 = state_32613;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32613__$1,(11),out,inst_32590);
} else {
if((state_val_32614 === (5))){
var inst_32587 = (state_32613[(7)]);
var inst_32590 = (state_32613[(8)]);
var inst_32596 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32590,inst_32587);
var state_32613__$1 = state_32613;
if(inst_32596){
var statearr_32629_34224 = state_32613__$1;
(statearr_32629_34224[(1)] = (8));

} else {
var statearr_32630_34225 = state_32613__$1;
(statearr_32630_34225[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32614 === (10))){
var inst_32605 = (state_32613[(2)]);
var state_32613__$1 = state_32613;
var statearr_32631_34226 = state_32613__$1;
(statearr_32631_34226[(2)] = inst_32605);

(statearr_32631_34226[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32614 === (8))){
var inst_32587 = (state_32613[(7)]);
var tmp32628 = inst_32587;
var inst_32587__$1 = tmp32628;
var state_32613__$1 = (function (){var statearr_32633 = state_32613;
(statearr_32633[(7)] = inst_32587__$1);

return statearr_32633;
})();
var statearr_32634_34227 = state_32613__$1;
(statearr_32634_34227[(2)] = null);

(statearr_32634_34227[(1)] = (2));


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
});})(c__30361__auto___34173,out))
;
return ((function (switch__30100__auto__,c__30361__auto___34173,out){
return (function() {
var cljs$core$async$state_machine__30101__auto__ = null;
var cljs$core$async$state_machine__30101__auto____0 = (function (){
var statearr_32635 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32635[(0)] = cljs$core$async$state_machine__30101__auto__);

(statearr_32635[(1)] = (1));

return statearr_32635;
});
var cljs$core$async$state_machine__30101__auto____1 = (function (state_32613){
while(true){
var ret_value__30102__auto__ = (function (){try{while(true){
var result__30103__auto__ = switch__30100__auto__(state_32613);
if(cljs.core.keyword_identical_QMARK_(result__30103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30103__auto__;
}
break;
}
}catch (e32640){if((e32640 instanceof Object)){
var ex__30104__auto__ = e32640;
var statearr_32643_34228 = state_32613;
(statearr_32643_34228[(5)] = ex__30104__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32613);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32640;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34229 = state_32613;
state_32613 = G__34229;
continue;
} else {
return ret_value__30102__auto__;
}
break;
}
});
cljs$core$async$state_machine__30101__auto__ = function(state_32613){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30101__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30101__auto____1.call(this,state_32613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30101__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30101__auto____0;
cljs$core$async$state_machine__30101__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30101__auto____1;
return cljs$core$async$state_machine__30101__auto__;
})()
;})(switch__30100__auto__,c__30361__auto___34173,out))
})();
var state__30363__auto__ = (function (){var statearr_32647 = (f__30362__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30362__auto__.cljs$core$IFn$_invoke$arity$0() : f__30362__auto__.call(null));
(statearr_32647[(6)] = c__30361__auto___34173);

return statearr_32647;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30363__auto__);
});})(c__30361__auto___34173,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__32654 = arguments.length;
switch (G__32654) {
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
var c__30361__auto___34239 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30361__auto___34239,out){
return (function (){
var f__30362__auto__ = (function (){var switch__30100__auto__ = ((function (c__30361__auto___34239,out){
return (function (state_32701){
var state_val_32702 = (state_32701[(1)]);
if((state_val_32702 === (7))){
var inst_32697 = (state_32701[(2)]);
var state_32701__$1 = state_32701;
var statearr_32710_34248 = state_32701__$1;
(statearr_32710_34248[(2)] = inst_32697);

(statearr_32710_34248[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32702 === (1))){
var inst_32661 = (new Array(n));
var inst_32663 = inst_32661;
var inst_32664 = (0);
var state_32701__$1 = (function (){var statearr_32716 = state_32701;
(statearr_32716[(7)] = inst_32663);

(statearr_32716[(8)] = inst_32664);

return statearr_32716;
})();
var statearr_32717_34249 = state_32701__$1;
(statearr_32717_34249[(2)] = null);

(statearr_32717_34249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32702 === (4))){
var inst_32668 = (state_32701[(9)]);
var inst_32668__$1 = (state_32701[(2)]);
var inst_32669 = (inst_32668__$1 == null);
var inst_32670 = cljs.core.not(inst_32669);
var state_32701__$1 = (function (){var statearr_32721 = state_32701;
(statearr_32721[(9)] = inst_32668__$1);

return statearr_32721;
})();
if(inst_32670){
var statearr_32722_34251 = state_32701__$1;
(statearr_32722_34251[(1)] = (5));

} else {
var statearr_32723_34252 = state_32701__$1;
(statearr_32723_34252[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32702 === (15))){
var inst_32691 = (state_32701[(2)]);
var state_32701__$1 = state_32701;
var statearr_32724_34255 = state_32701__$1;
(statearr_32724_34255[(2)] = inst_32691);

(statearr_32724_34255[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32702 === (13))){
var state_32701__$1 = state_32701;
var statearr_32726_34261 = state_32701__$1;
(statearr_32726_34261[(2)] = null);

(statearr_32726_34261[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32702 === (6))){
var inst_32664 = (state_32701[(8)]);
var inst_32687 = (inst_32664 > (0));
var state_32701__$1 = state_32701;
if(cljs.core.truth_(inst_32687)){
var statearr_32729_34263 = state_32701__$1;
(statearr_32729_34263[(1)] = (12));

} else {
var statearr_32730_34264 = state_32701__$1;
(statearr_32730_34264[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32702 === (3))){
var inst_32699 = (state_32701[(2)]);
var state_32701__$1 = state_32701;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32701__$1,inst_32699);
} else {
if((state_val_32702 === (12))){
var inst_32663 = (state_32701[(7)]);
var inst_32689 = cljs.core.vec(inst_32663);
var state_32701__$1 = state_32701;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32701__$1,(15),out,inst_32689);
} else {
if((state_val_32702 === (2))){
var state_32701__$1 = state_32701;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32701__$1,(4),ch);
} else {
if((state_val_32702 === (11))){
var inst_32681 = (state_32701[(2)]);
var inst_32682 = (new Array(n));
var inst_32663 = inst_32682;
var inst_32664 = (0);
var state_32701__$1 = (function (){var statearr_32741 = state_32701;
(statearr_32741[(7)] = inst_32663);

(statearr_32741[(10)] = inst_32681);

(statearr_32741[(8)] = inst_32664);

return statearr_32741;
})();
var statearr_32742_34266 = state_32701__$1;
(statearr_32742_34266[(2)] = null);

(statearr_32742_34266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32702 === (9))){
var inst_32663 = (state_32701[(7)]);
var inst_32679 = cljs.core.vec(inst_32663);
var state_32701__$1 = state_32701;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32701__$1,(11),out,inst_32679);
} else {
if((state_val_32702 === (5))){
var inst_32668 = (state_32701[(9)]);
var inst_32674 = (state_32701[(11)]);
var inst_32663 = (state_32701[(7)]);
var inst_32664 = (state_32701[(8)]);
var inst_32672 = (inst_32663[inst_32664] = inst_32668);
var inst_32674__$1 = (inst_32664 + (1));
var inst_32675 = (inst_32674__$1 < n);
var state_32701__$1 = (function (){var statearr_32743 = state_32701;
(statearr_32743[(11)] = inst_32674__$1);

(statearr_32743[(12)] = inst_32672);

return statearr_32743;
})();
if(cljs.core.truth_(inst_32675)){
var statearr_32745_34271 = state_32701__$1;
(statearr_32745_34271[(1)] = (8));

} else {
var statearr_32746_34272 = state_32701__$1;
(statearr_32746_34272[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32702 === (14))){
var inst_32694 = (state_32701[(2)]);
var inst_32695 = cljs.core.async.close_BANG_(out);
var state_32701__$1 = (function (){var statearr_32750 = state_32701;
(statearr_32750[(13)] = inst_32694);

return statearr_32750;
})();
var statearr_32751_34273 = state_32701__$1;
(statearr_32751_34273[(2)] = inst_32695);

(statearr_32751_34273[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32702 === (10))){
var inst_32685 = (state_32701[(2)]);
var state_32701__$1 = state_32701;
var statearr_32752_34274 = state_32701__$1;
(statearr_32752_34274[(2)] = inst_32685);

(statearr_32752_34274[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32702 === (8))){
var inst_32674 = (state_32701[(11)]);
var inst_32663 = (state_32701[(7)]);
var tmp32748 = inst_32663;
var inst_32663__$1 = tmp32748;
var inst_32664 = inst_32674;
var state_32701__$1 = (function (){var statearr_32753 = state_32701;
(statearr_32753[(7)] = inst_32663__$1);

(statearr_32753[(8)] = inst_32664);

return statearr_32753;
})();
var statearr_32755_34275 = state_32701__$1;
(statearr_32755_34275[(2)] = null);

(statearr_32755_34275[(1)] = (2));


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
});})(c__30361__auto___34239,out))
;
return ((function (switch__30100__auto__,c__30361__auto___34239,out){
return (function() {
var cljs$core$async$state_machine__30101__auto__ = null;
var cljs$core$async$state_machine__30101__auto____0 = (function (){
var statearr_32756 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32756[(0)] = cljs$core$async$state_machine__30101__auto__);

(statearr_32756[(1)] = (1));

return statearr_32756;
});
var cljs$core$async$state_machine__30101__auto____1 = (function (state_32701){
while(true){
var ret_value__30102__auto__ = (function (){try{while(true){
var result__30103__auto__ = switch__30100__auto__(state_32701);
if(cljs.core.keyword_identical_QMARK_(result__30103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30103__auto__;
}
break;
}
}catch (e32757){if((e32757 instanceof Object)){
var ex__30104__auto__ = e32757;
var statearr_32758_34276 = state_32701;
(statearr_32758_34276[(5)] = ex__30104__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32701);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32757;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34277 = state_32701;
state_32701 = G__34277;
continue;
} else {
return ret_value__30102__auto__;
}
break;
}
});
cljs$core$async$state_machine__30101__auto__ = function(state_32701){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30101__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30101__auto____1.call(this,state_32701);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30101__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30101__auto____0;
cljs$core$async$state_machine__30101__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30101__auto____1;
return cljs$core$async$state_machine__30101__auto__;
})()
;})(switch__30100__auto__,c__30361__auto___34239,out))
})();
var state__30363__auto__ = (function (){var statearr_32762 = (f__30362__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30362__auto__.cljs$core$IFn$_invoke$arity$0() : f__30362__auto__.call(null));
(statearr_32762[(6)] = c__30361__auto___34239);

return statearr_32762;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30363__auto__);
});})(c__30361__auto___34239,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__32779 = arguments.length;
switch (G__32779) {
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
var c__30361__auto___34280 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30361__auto___34280,out){
return (function (){
var f__30362__auto__ = (function (){var switch__30100__auto__ = ((function (c__30361__auto___34280,out){
return (function (state_32875){
var state_val_32876 = (state_32875[(1)]);
if((state_val_32876 === (7))){
var inst_32871 = (state_32875[(2)]);
var state_32875__$1 = state_32875;
var statearr_32885_34281 = state_32875__$1;
(statearr_32885_34281[(2)] = inst_32871);

(statearr_32885_34281[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32876 === (1))){
var inst_32810 = [];
var inst_32811 = inst_32810;
var inst_32812 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32875__$1 = (function (){var statearr_32886 = state_32875;
(statearr_32886[(7)] = inst_32812);

(statearr_32886[(8)] = inst_32811);

return statearr_32886;
})();
var statearr_32888_34282 = state_32875__$1;
(statearr_32888_34282[(2)] = null);

(statearr_32888_34282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32876 === (4))){
var inst_32816 = (state_32875[(9)]);
var inst_32816__$1 = (state_32875[(2)]);
var inst_32818 = (inst_32816__$1 == null);
var inst_32819 = cljs.core.not(inst_32818);
var state_32875__$1 = (function (){var statearr_32890 = state_32875;
(statearr_32890[(9)] = inst_32816__$1);

return statearr_32890;
})();
if(inst_32819){
var statearr_32894_34290 = state_32875__$1;
(statearr_32894_34290[(1)] = (5));

} else {
var statearr_32895_34292 = state_32875__$1;
(statearr_32895_34292[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32876 === (15))){
var inst_32865 = (state_32875[(2)]);
var state_32875__$1 = state_32875;
var statearr_32899_34293 = state_32875__$1;
(statearr_32899_34293[(2)] = inst_32865);

(statearr_32899_34293[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32876 === (13))){
var state_32875__$1 = state_32875;
var statearr_32901_34294 = state_32875__$1;
(statearr_32901_34294[(2)] = null);

(statearr_32901_34294[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32876 === (6))){
var inst_32811 = (state_32875[(8)]);
var inst_32856 = inst_32811.length;
var inst_32857 = (inst_32856 > (0));
var state_32875__$1 = state_32875;
if(cljs.core.truth_(inst_32857)){
var statearr_32902_34295 = state_32875__$1;
(statearr_32902_34295[(1)] = (12));

} else {
var statearr_32904_34296 = state_32875__$1;
(statearr_32904_34296[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32876 === (3))){
var inst_32873 = (state_32875[(2)]);
var state_32875__$1 = state_32875;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32875__$1,inst_32873);
} else {
if((state_val_32876 === (12))){
var inst_32811 = (state_32875[(8)]);
var inst_32863 = cljs.core.vec(inst_32811);
var state_32875__$1 = state_32875;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32875__$1,(15),out,inst_32863);
} else {
if((state_val_32876 === (2))){
var state_32875__$1 = state_32875;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32875__$1,(4),ch);
} else {
if((state_val_32876 === (11))){
var inst_32825 = (state_32875[(10)]);
var inst_32816 = (state_32875[(9)]);
var inst_32841 = (state_32875[(2)]);
var inst_32845 = [];
var inst_32847 = inst_32845.push(inst_32816);
var inst_32811 = inst_32845;
var inst_32812 = inst_32825;
var state_32875__$1 = (function (){var statearr_32908 = state_32875;
(statearr_32908[(7)] = inst_32812);

(statearr_32908[(8)] = inst_32811);

(statearr_32908[(11)] = inst_32841);

(statearr_32908[(12)] = inst_32847);

return statearr_32908;
})();
var statearr_32911_34297 = state_32875__$1;
(statearr_32911_34297[(2)] = null);

(statearr_32911_34297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32876 === (9))){
var inst_32811 = (state_32875[(8)]);
var inst_32838 = cljs.core.vec(inst_32811);
var state_32875__$1 = state_32875;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32875__$1,(11),out,inst_32838);
} else {
if((state_val_32876 === (5))){
var inst_32812 = (state_32875[(7)]);
var inst_32825 = (state_32875[(10)]);
var inst_32816 = (state_32875[(9)]);
var inst_32825__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32816) : f.call(null,inst_32816));
var inst_32830 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32825__$1,inst_32812);
var inst_32831 = cljs.core.keyword_identical_QMARK_(inst_32812,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32832 = ((inst_32830) || (inst_32831));
var state_32875__$1 = (function (){var statearr_32914 = state_32875;
(statearr_32914[(10)] = inst_32825__$1);

return statearr_32914;
})();
if(cljs.core.truth_(inst_32832)){
var statearr_32915_34299 = state_32875__$1;
(statearr_32915_34299[(1)] = (8));

} else {
var statearr_32918_34300 = state_32875__$1;
(statearr_32918_34300[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32876 === (14))){
var inst_32868 = (state_32875[(2)]);
var inst_32869 = cljs.core.async.close_BANG_(out);
var state_32875__$1 = (function (){var statearr_32922 = state_32875;
(statearr_32922[(13)] = inst_32868);

return statearr_32922;
})();
var statearr_32923_34302 = state_32875__$1;
(statearr_32923_34302[(2)] = inst_32869);

(statearr_32923_34302[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32876 === (10))){
var inst_32851 = (state_32875[(2)]);
var state_32875__$1 = state_32875;
var statearr_32927_34303 = state_32875__$1;
(statearr_32927_34303[(2)] = inst_32851);

(statearr_32927_34303[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32876 === (8))){
var inst_32811 = (state_32875[(8)]);
var inst_32825 = (state_32875[(10)]);
var inst_32816 = (state_32875[(9)]);
var inst_32835 = inst_32811.push(inst_32816);
var tmp32920 = inst_32811;
var inst_32811__$1 = tmp32920;
var inst_32812 = inst_32825;
var state_32875__$1 = (function (){var statearr_32934 = state_32875;
(statearr_32934[(14)] = inst_32835);

(statearr_32934[(7)] = inst_32812);

(statearr_32934[(8)] = inst_32811__$1);

return statearr_32934;
})();
var statearr_32936_34304 = state_32875__$1;
(statearr_32936_34304[(2)] = null);

(statearr_32936_34304[(1)] = (2));


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
});})(c__30361__auto___34280,out))
;
return ((function (switch__30100__auto__,c__30361__auto___34280,out){
return (function() {
var cljs$core$async$state_machine__30101__auto__ = null;
var cljs$core$async$state_machine__30101__auto____0 = (function (){
var statearr_32938 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32938[(0)] = cljs$core$async$state_machine__30101__auto__);

(statearr_32938[(1)] = (1));

return statearr_32938;
});
var cljs$core$async$state_machine__30101__auto____1 = (function (state_32875){
while(true){
var ret_value__30102__auto__ = (function (){try{while(true){
var result__30103__auto__ = switch__30100__auto__(state_32875);
if(cljs.core.keyword_identical_QMARK_(result__30103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30103__auto__;
}
break;
}
}catch (e32939){if((e32939 instanceof Object)){
var ex__30104__auto__ = e32939;
var statearr_32940_34305 = state_32875;
(statearr_32940_34305[(5)] = ex__30104__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32875);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32939;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34306 = state_32875;
state_32875 = G__34306;
continue;
} else {
return ret_value__30102__auto__;
}
break;
}
});
cljs$core$async$state_machine__30101__auto__ = function(state_32875){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30101__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30101__auto____1.call(this,state_32875);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30101__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30101__auto____0;
cljs$core$async$state_machine__30101__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30101__auto____1;
return cljs$core$async$state_machine__30101__auto__;
})()
;})(switch__30100__auto__,c__30361__auto___34280,out))
})();
var state__30363__auto__ = (function (){var statearr_32946 = (f__30362__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30362__auto__.cljs$core$IFn$_invoke$arity$0() : f__30362__auto__.call(null));
(statearr_32946[(6)] = c__30361__auto___34280);

return statearr_32946;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30363__auto__);
});})(c__30361__auto___34280,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=cljs.core.async.js.map
