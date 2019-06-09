// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__24105 = arguments.length;
switch (G__24105) {
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
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24106 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24106 = (function (f,blockable,meta24107){
this.f = f;
this.blockable = blockable;
this.meta24107 = meta24107;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24106.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24108,meta24107__$1){
var self__ = this;
var _24108__$1 = this;
return (new cljs.core.async.t_cljs$core$async24106(self__.f,self__.blockable,meta24107__$1));
});

cljs.core.async.t_cljs$core$async24106.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24108){
var self__ = this;
var _24108__$1 = this;
return self__.meta24107;
});

cljs.core.async.t_cljs$core$async24106.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24106.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24106.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async24106.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async24106.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta24107","meta24107",-653995411,null)], null);
});

cljs.core.async.t_cljs$core$async24106.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24106.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24106";

cljs.core.async.t_cljs$core$async24106.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24106");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24106.
 */
cljs.core.async.__GT_t_cljs$core$async24106 = (function cljs$core$async$__GT_t_cljs$core$async24106(f__$1,blockable__$1,meta24107){
return (new cljs.core.async.t_cljs$core$async24106(f__$1,blockable__$1,meta24107));
});

}

return (new cljs.core.async.t_cljs$core$async24106(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
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
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__24112 = arguments.length;
switch (G__24112) {
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
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
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
var G__24115 = arguments.length;
switch (G__24115) {
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
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
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
var G__24118 = arguments.length;
switch (G__24118) {
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
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_24120 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_24120);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_24120,ret){
return (function (){
return fn1.call(null,val_24120);
});})(val_24120,ret))
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
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
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
var G__24122 = arguments.length;
switch (G__24122) {
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
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5718__auto__){
return (function (){
return fn1.call(null,ret);
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
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___24124 = n;
var x_24125 = (0);
while(true){
if((x_24125 < n__4607__auto___24124)){
(a[x_24125] = (0));

var G__24126 = (x_24125 + (1));
x_24125 = G__24126;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__24127 = (i + (1));
i = G__24127;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24128 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24128 = (function (flag,meta24129){
this.flag = flag;
this.meta24129 = meta24129;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24128.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24130,meta24129__$1){
var self__ = this;
var _24130__$1 = this;
return (new cljs.core.async.t_cljs$core$async24128(self__.flag,meta24129__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async24128.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24130){
var self__ = this;
var _24130__$1 = this;
return self__.meta24129;
});})(flag))
;

cljs.core.async.t_cljs$core$async24128.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24128.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async24128.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24128.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async24128.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta24129","meta24129",1460325584,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async24128.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24128.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24128";

cljs.core.async.t_cljs$core$async24128.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24128");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24128.
 */
cljs.core.async.__GT_t_cljs$core$async24128 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async24128(flag__$1,meta24129){
return (new cljs.core.async.t_cljs$core$async24128(flag__$1,meta24129));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async24128(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24131 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24131 = (function (flag,cb,meta24132){
this.flag = flag;
this.cb = cb;
this.meta24132 = meta24132;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24131.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24133,meta24132__$1){
var self__ = this;
var _24133__$1 = this;
return (new cljs.core.async.t_cljs$core$async24131(self__.flag,self__.cb,meta24132__$1));
});

cljs.core.async.t_cljs$core$async24131.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24133){
var self__ = this;
var _24133__$1 = this;
return self__.meta24132;
});

cljs.core.async.t_cljs$core$async24131.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24131.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async24131.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async24131.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async24131.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta24132","meta24132",1915448860,null)], null);
});

cljs.core.async.t_cljs$core$async24131.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24131.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24131";

cljs.core.async.t_cljs$core$async24131.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24131");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24131.
 */
cljs.core.async.__GT_t_cljs$core$async24131 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async24131(flag__$1,cb__$1,meta24132){
return (new cljs.core.async.t_cljs$core$async24131(flag__$1,cb__$1,meta24132));
});

}

return (new cljs.core.async.t_cljs$core$async24131(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24134_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24134_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24135_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24135_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__24136 = (i + (1));
i = G__24136;
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
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5720__auto__ = (function (){var and__4120__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var len__4730__auto___24142 = arguments.length;
var i__4731__auto___24143 = (0);
while(true){
if((i__4731__auto___24143 < len__4730__auto___24142)){
args__4736__auto__.push((arguments[i__4731__auto___24143]));

var G__24144 = (i__4731__auto___24143 + (1));
i__4731__auto___24143 = G__24144;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__24139){
var map__24140 = p__24139;
var map__24140__$1 = (((((!((map__24140 == null))))?(((((map__24140.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24140.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24140):map__24140);
var opts = map__24140__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq24137){
var G__24138 = cljs.core.first.call(null,seq24137);
var seq24137__$1 = cljs.core.next.call(null,seq24137);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24138,seq24137__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
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
var G__24146 = arguments.length;
switch (G__24146) {
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
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__22181__auto___24192 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22181__auto___24192){
return (function (){
var f__22182__auto__ = (function (){var switch__22014__auto__ = ((function (c__22181__auto___24192){
return (function (state_24170){
var state_val_24171 = (state_24170[(1)]);
if((state_val_24171 === (7))){
var inst_24166 = (state_24170[(2)]);
var state_24170__$1 = state_24170;
var statearr_24172_24193 = state_24170__$1;
(statearr_24172_24193[(2)] = inst_24166);

(statearr_24172_24193[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24171 === (1))){
var state_24170__$1 = state_24170;
var statearr_24173_24194 = state_24170__$1;
(statearr_24173_24194[(2)] = null);

(statearr_24173_24194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24171 === (4))){
var inst_24149 = (state_24170[(7)]);
var inst_24149__$1 = (state_24170[(2)]);
var inst_24150 = (inst_24149__$1 == null);
var state_24170__$1 = (function (){var statearr_24174 = state_24170;
(statearr_24174[(7)] = inst_24149__$1);

return statearr_24174;
})();
if(cljs.core.truth_(inst_24150)){
var statearr_24175_24195 = state_24170__$1;
(statearr_24175_24195[(1)] = (5));

} else {
var statearr_24176_24196 = state_24170__$1;
(statearr_24176_24196[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24171 === (13))){
var state_24170__$1 = state_24170;
var statearr_24177_24197 = state_24170__$1;
(statearr_24177_24197[(2)] = null);

(statearr_24177_24197[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24171 === (6))){
var inst_24149 = (state_24170[(7)]);
var state_24170__$1 = state_24170;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24170__$1,(11),to,inst_24149);
} else {
if((state_val_24171 === (3))){
var inst_24168 = (state_24170[(2)]);
var state_24170__$1 = state_24170;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24170__$1,inst_24168);
} else {
if((state_val_24171 === (12))){
var state_24170__$1 = state_24170;
var statearr_24178_24198 = state_24170__$1;
(statearr_24178_24198[(2)] = null);

(statearr_24178_24198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24171 === (2))){
var state_24170__$1 = state_24170;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24170__$1,(4),from);
} else {
if((state_val_24171 === (11))){
var inst_24159 = (state_24170[(2)]);
var state_24170__$1 = state_24170;
if(cljs.core.truth_(inst_24159)){
var statearr_24179_24199 = state_24170__$1;
(statearr_24179_24199[(1)] = (12));

} else {
var statearr_24180_24200 = state_24170__$1;
(statearr_24180_24200[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24171 === (9))){
var state_24170__$1 = state_24170;
var statearr_24181_24201 = state_24170__$1;
(statearr_24181_24201[(2)] = null);

(statearr_24181_24201[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24171 === (5))){
var state_24170__$1 = state_24170;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24182_24202 = state_24170__$1;
(statearr_24182_24202[(1)] = (8));

} else {
var statearr_24183_24203 = state_24170__$1;
(statearr_24183_24203[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24171 === (14))){
var inst_24164 = (state_24170[(2)]);
var state_24170__$1 = state_24170;
var statearr_24184_24204 = state_24170__$1;
(statearr_24184_24204[(2)] = inst_24164);

(statearr_24184_24204[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24171 === (10))){
var inst_24156 = (state_24170[(2)]);
var state_24170__$1 = state_24170;
var statearr_24185_24205 = state_24170__$1;
(statearr_24185_24205[(2)] = inst_24156);

(statearr_24185_24205[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24171 === (8))){
var inst_24153 = cljs.core.async.close_BANG_.call(null,to);
var state_24170__$1 = state_24170;
var statearr_24186_24206 = state_24170__$1;
(statearr_24186_24206[(2)] = inst_24153);

(statearr_24186_24206[(1)] = (10));


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
});})(c__22181__auto___24192))
;
return ((function (switch__22014__auto__,c__22181__auto___24192){
return (function() {
var cljs$core$async$state_machine__22015__auto__ = null;
var cljs$core$async$state_machine__22015__auto____0 = (function (){
var statearr_24187 = [null,null,null,null,null,null,null,null];
(statearr_24187[(0)] = cljs$core$async$state_machine__22015__auto__);

(statearr_24187[(1)] = (1));

return statearr_24187;
});
var cljs$core$async$state_machine__22015__auto____1 = (function (state_24170){
while(true){
var ret_value__22016__auto__ = (function (){try{while(true){
var result__22017__auto__ = switch__22014__auto__.call(null,state_24170);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22017__auto__;
}
break;
}
}catch (e24188){if((e24188 instanceof Object)){
var ex__22018__auto__ = e24188;
var statearr_24189_24207 = state_24170;
(statearr_24189_24207[(5)] = ex__22018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24170);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24188;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24208 = state_24170;
state_24170 = G__24208;
continue;
} else {
return ret_value__22016__auto__;
}
break;
}
});
cljs$core$async$state_machine__22015__auto__ = function(state_24170){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22015__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22015__auto____1.call(this,state_24170);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22015__auto____0;
cljs$core$async$state_machine__22015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22015__auto____1;
return cljs$core$async$state_machine__22015__auto__;
})()
;})(switch__22014__auto__,c__22181__auto___24192))
})();
var state__22183__auto__ = (function (){var statearr_24190 = f__22182__auto__.call(null);
(statearr_24190[(6)] = c__22181__auto___24192);

return statearr_24190;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22183__auto__);
});})(c__22181__auto___24192))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__24209){
var vec__24210 = p__24209;
var v = cljs.core.nth.call(null,vec__24210,(0),null);
var p = cljs.core.nth.call(null,vec__24210,(1),null);
var job = vec__24210;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__22181__auto___24381 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22181__auto___24381,res,vec__24210,v,p,job,jobs,results){
return (function (){
var f__22182__auto__ = (function (){var switch__22014__auto__ = ((function (c__22181__auto___24381,res,vec__24210,v,p,job,jobs,results){
return (function (state_24217){
var state_val_24218 = (state_24217[(1)]);
if((state_val_24218 === (1))){
var state_24217__$1 = state_24217;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24217__$1,(2),res,v);
} else {
if((state_val_24218 === (2))){
var inst_24214 = (state_24217[(2)]);
var inst_24215 = cljs.core.async.close_BANG_.call(null,res);
var state_24217__$1 = (function (){var statearr_24219 = state_24217;
(statearr_24219[(7)] = inst_24214);

return statearr_24219;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24217__$1,inst_24215);
} else {
return null;
}
}
});})(c__22181__auto___24381,res,vec__24210,v,p,job,jobs,results))
;
return ((function (switch__22014__auto__,c__22181__auto___24381,res,vec__24210,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22015__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22015__auto____0 = (function (){
var statearr_24220 = [null,null,null,null,null,null,null,null];
(statearr_24220[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22015__auto__);

(statearr_24220[(1)] = (1));

return statearr_24220;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22015__auto____1 = (function (state_24217){
while(true){
var ret_value__22016__auto__ = (function (){try{while(true){
var result__22017__auto__ = switch__22014__auto__.call(null,state_24217);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22017__auto__;
}
break;
}
}catch (e24221){if((e24221 instanceof Object)){
var ex__22018__auto__ = e24221;
var statearr_24222_24382 = state_24217;
(statearr_24222_24382[(5)] = ex__22018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24217);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24221;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24383 = state_24217;
state_24217 = G__24383;
continue;
} else {
return ret_value__22016__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22015__auto__ = function(state_24217){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22015__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22015__auto____1.call(this,state_24217);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22015__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22015__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22015__auto__;
})()
;})(switch__22014__auto__,c__22181__auto___24381,res,vec__24210,v,p,job,jobs,results))
})();
var state__22183__auto__ = (function (){var statearr_24223 = f__22182__auto__.call(null);
(statearr_24223[(6)] = c__22181__auto___24381);

return statearr_24223;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22183__auto__);
});})(c__22181__auto___24381,res,vec__24210,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__24224){
var vec__24225 = p__24224;
var v = cljs.core.nth.call(null,vec__24225,(0),null);
var p = cljs.core.nth.call(null,vec__24225,(1),null);
var job = vec__24225;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___24384 = n;
var __24385 = (0);
while(true){
if((__24385 < n__4607__auto___24384)){
var G__24228_24386 = type;
var G__24228_24387__$1 = (((G__24228_24386 instanceof cljs.core.Keyword))?G__24228_24386.fqn:null);
switch (G__24228_24387__$1) {
case "compute":
var c__22181__auto___24389 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24385,c__22181__auto___24389,G__24228_24386,G__24228_24387__$1,n__4607__auto___24384,jobs,results,process,async){
return (function (){
var f__22182__auto__ = (function (){var switch__22014__auto__ = ((function (__24385,c__22181__auto___24389,G__24228_24386,G__24228_24387__$1,n__4607__auto___24384,jobs,results,process,async){
return (function (state_24241){
var state_val_24242 = (state_24241[(1)]);
if((state_val_24242 === (1))){
var state_24241__$1 = state_24241;
var statearr_24243_24390 = state_24241__$1;
(statearr_24243_24390[(2)] = null);

(statearr_24243_24390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24242 === (2))){
var state_24241__$1 = state_24241;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24241__$1,(4),jobs);
} else {
if((state_val_24242 === (3))){
var inst_24239 = (state_24241[(2)]);
var state_24241__$1 = state_24241;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24241__$1,inst_24239);
} else {
if((state_val_24242 === (4))){
var inst_24231 = (state_24241[(2)]);
var inst_24232 = process.call(null,inst_24231);
var state_24241__$1 = state_24241;
if(cljs.core.truth_(inst_24232)){
var statearr_24244_24391 = state_24241__$1;
(statearr_24244_24391[(1)] = (5));

} else {
var statearr_24245_24392 = state_24241__$1;
(statearr_24245_24392[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24242 === (5))){
var state_24241__$1 = state_24241;
var statearr_24246_24393 = state_24241__$1;
(statearr_24246_24393[(2)] = null);

(statearr_24246_24393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24242 === (6))){
var state_24241__$1 = state_24241;
var statearr_24247_24394 = state_24241__$1;
(statearr_24247_24394[(2)] = null);

(statearr_24247_24394[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24242 === (7))){
var inst_24237 = (state_24241[(2)]);
var state_24241__$1 = state_24241;
var statearr_24248_24395 = state_24241__$1;
(statearr_24248_24395[(2)] = inst_24237);

(statearr_24248_24395[(1)] = (3));


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
});})(__24385,c__22181__auto___24389,G__24228_24386,G__24228_24387__$1,n__4607__auto___24384,jobs,results,process,async))
;
return ((function (__24385,switch__22014__auto__,c__22181__auto___24389,G__24228_24386,G__24228_24387__$1,n__4607__auto___24384,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22015__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22015__auto____0 = (function (){
var statearr_24249 = [null,null,null,null,null,null,null];
(statearr_24249[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22015__auto__);

(statearr_24249[(1)] = (1));

return statearr_24249;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22015__auto____1 = (function (state_24241){
while(true){
var ret_value__22016__auto__ = (function (){try{while(true){
var result__22017__auto__ = switch__22014__auto__.call(null,state_24241);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22017__auto__;
}
break;
}
}catch (e24250){if((e24250 instanceof Object)){
var ex__22018__auto__ = e24250;
var statearr_24251_24396 = state_24241;
(statearr_24251_24396[(5)] = ex__22018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24241);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24250;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24397 = state_24241;
state_24241 = G__24397;
continue;
} else {
return ret_value__22016__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22015__auto__ = function(state_24241){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22015__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22015__auto____1.call(this,state_24241);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22015__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22015__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22015__auto__;
})()
;})(__24385,switch__22014__auto__,c__22181__auto___24389,G__24228_24386,G__24228_24387__$1,n__4607__auto___24384,jobs,results,process,async))
})();
var state__22183__auto__ = (function (){var statearr_24252 = f__22182__auto__.call(null);
(statearr_24252[(6)] = c__22181__auto___24389);

return statearr_24252;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22183__auto__);
});})(__24385,c__22181__auto___24389,G__24228_24386,G__24228_24387__$1,n__4607__auto___24384,jobs,results,process,async))
);


break;
case "async":
var c__22181__auto___24398 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24385,c__22181__auto___24398,G__24228_24386,G__24228_24387__$1,n__4607__auto___24384,jobs,results,process,async){
return (function (){
var f__22182__auto__ = (function (){var switch__22014__auto__ = ((function (__24385,c__22181__auto___24398,G__24228_24386,G__24228_24387__$1,n__4607__auto___24384,jobs,results,process,async){
return (function (state_24265){
var state_val_24266 = (state_24265[(1)]);
if((state_val_24266 === (1))){
var state_24265__$1 = state_24265;
var statearr_24267_24399 = state_24265__$1;
(statearr_24267_24399[(2)] = null);

(statearr_24267_24399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24266 === (2))){
var state_24265__$1 = state_24265;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24265__$1,(4),jobs);
} else {
if((state_val_24266 === (3))){
var inst_24263 = (state_24265[(2)]);
var state_24265__$1 = state_24265;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24265__$1,inst_24263);
} else {
if((state_val_24266 === (4))){
var inst_24255 = (state_24265[(2)]);
var inst_24256 = async.call(null,inst_24255);
var state_24265__$1 = state_24265;
if(cljs.core.truth_(inst_24256)){
var statearr_24268_24400 = state_24265__$1;
(statearr_24268_24400[(1)] = (5));

} else {
var statearr_24269_24401 = state_24265__$1;
(statearr_24269_24401[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24266 === (5))){
var state_24265__$1 = state_24265;
var statearr_24270_24402 = state_24265__$1;
(statearr_24270_24402[(2)] = null);

(statearr_24270_24402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24266 === (6))){
var state_24265__$1 = state_24265;
var statearr_24271_24403 = state_24265__$1;
(statearr_24271_24403[(2)] = null);

(statearr_24271_24403[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24266 === (7))){
var inst_24261 = (state_24265[(2)]);
var state_24265__$1 = state_24265;
var statearr_24272_24404 = state_24265__$1;
(statearr_24272_24404[(2)] = inst_24261);

(statearr_24272_24404[(1)] = (3));


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
});})(__24385,c__22181__auto___24398,G__24228_24386,G__24228_24387__$1,n__4607__auto___24384,jobs,results,process,async))
;
return ((function (__24385,switch__22014__auto__,c__22181__auto___24398,G__24228_24386,G__24228_24387__$1,n__4607__auto___24384,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22015__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22015__auto____0 = (function (){
var statearr_24273 = [null,null,null,null,null,null,null];
(statearr_24273[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22015__auto__);

(statearr_24273[(1)] = (1));

return statearr_24273;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22015__auto____1 = (function (state_24265){
while(true){
var ret_value__22016__auto__ = (function (){try{while(true){
var result__22017__auto__ = switch__22014__auto__.call(null,state_24265);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22017__auto__;
}
break;
}
}catch (e24274){if((e24274 instanceof Object)){
var ex__22018__auto__ = e24274;
var statearr_24275_24405 = state_24265;
(statearr_24275_24405[(5)] = ex__22018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24265);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24274;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24406 = state_24265;
state_24265 = G__24406;
continue;
} else {
return ret_value__22016__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22015__auto__ = function(state_24265){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22015__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22015__auto____1.call(this,state_24265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22015__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22015__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22015__auto__;
})()
;})(__24385,switch__22014__auto__,c__22181__auto___24398,G__24228_24386,G__24228_24387__$1,n__4607__auto___24384,jobs,results,process,async))
})();
var state__22183__auto__ = (function (){var statearr_24276 = f__22182__auto__.call(null);
(statearr_24276[(6)] = c__22181__auto___24398);

return statearr_24276;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22183__auto__);
});})(__24385,c__22181__auto___24398,G__24228_24386,G__24228_24387__$1,n__4607__auto___24384,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24228_24387__$1)].join('')));

}

var G__24407 = (__24385 + (1));
__24385 = G__24407;
continue;
} else {
}
break;
}

var c__22181__auto___24408 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22181__auto___24408,jobs,results,process,async){
return (function (){
var f__22182__auto__ = (function (){var switch__22014__auto__ = ((function (c__22181__auto___24408,jobs,results,process,async){
return (function (state_24298){
var state_val_24299 = (state_24298[(1)]);
if((state_val_24299 === (7))){
var inst_24294 = (state_24298[(2)]);
var state_24298__$1 = state_24298;
var statearr_24300_24409 = state_24298__$1;
(statearr_24300_24409[(2)] = inst_24294);

(statearr_24300_24409[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24299 === (1))){
var state_24298__$1 = state_24298;
var statearr_24301_24410 = state_24298__$1;
(statearr_24301_24410[(2)] = null);

(statearr_24301_24410[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24299 === (4))){
var inst_24279 = (state_24298[(7)]);
var inst_24279__$1 = (state_24298[(2)]);
var inst_24280 = (inst_24279__$1 == null);
var state_24298__$1 = (function (){var statearr_24302 = state_24298;
(statearr_24302[(7)] = inst_24279__$1);

return statearr_24302;
})();
if(cljs.core.truth_(inst_24280)){
var statearr_24303_24411 = state_24298__$1;
(statearr_24303_24411[(1)] = (5));

} else {
var statearr_24304_24412 = state_24298__$1;
(statearr_24304_24412[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24299 === (6))){
var inst_24284 = (state_24298[(8)]);
var inst_24279 = (state_24298[(7)]);
var inst_24284__$1 = cljs.core.async.chan.call(null,(1));
var inst_24285 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24286 = [inst_24279,inst_24284__$1];
var inst_24287 = (new cljs.core.PersistentVector(null,2,(5),inst_24285,inst_24286,null));
var state_24298__$1 = (function (){var statearr_24305 = state_24298;
(statearr_24305[(8)] = inst_24284__$1);

return statearr_24305;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24298__$1,(8),jobs,inst_24287);
} else {
if((state_val_24299 === (3))){
var inst_24296 = (state_24298[(2)]);
var state_24298__$1 = state_24298;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24298__$1,inst_24296);
} else {
if((state_val_24299 === (2))){
var state_24298__$1 = state_24298;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24298__$1,(4),from);
} else {
if((state_val_24299 === (9))){
var inst_24291 = (state_24298[(2)]);
var state_24298__$1 = (function (){var statearr_24306 = state_24298;
(statearr_24306[(9)] = inst_24291);

return statearr_24306;
})();
var statearr_24307_24413 = state_24298__$1;
(statearr_24307_24413[(2)] = null);

(statearr_24307_24413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24299 === (5))){
var inst_24282 = cljs.core.async.close_BANG_.call(null,jobs);
var state_24298__$1 = state_24298;
var statearr_24308_24414 = state_24298__$1;
(statearr_24308_24414[(2)] = inst_24282);

(statearr_24308_24414[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24299 === (8))){
var inst_24284 = (state_24298[(8)]);
var inst_24289 = (state_24298[(2)]);
var state_24298__$1 = (function (){var statearr_24309 = state_24298;
(statearr_24309[(10)] = inst_24289);

return statearr_24309;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24298__$1,(9),results,inst_24284);
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
});})(c__22181__auto___24408,jobs,results,process,async))
;
return ((function (switch__22014__auto__,c__22181__auto___24408,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22015__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22015__auto____0 = (function (){
var statearr_24310 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24310[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22015__auto__);

(statearr_24310[(1)] = (1));

return statearr_24310;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22015__auto____1 = (function (state_24298){
while(true){
var ret_value__22016__auto__ = (function (){try{while(true){
var result__22017__auto__ = switch__22014__auto__.call(null,state_24298);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22017__auto__;
}
break;
}
}catch (e24311){if((e24311 instanceof Object)){
var ex__22018__auto__ = e24311;
var statearr_24312_24415 = state_24298;
(statearr_24312_24415[(5)] = ex__22018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24298);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24311;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24416 = state_24298;
state_24298 = G__24416;
continue;
} else {
return ret_value__22016__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22015__auto__ = function(state_24298){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22015__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22015__auto____1.call(this,state_24298);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22015__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22015__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22015__auto__;
})()
;})(switch__22014__auto__,c__22181__auto___24408,jobs,results,process,async))
})();
var state__22183__auto__ = (function (){var statearr_24313 = f__22182__auto__.call(null);
(statearr_24313[(6)] = c__22181__auto___24408);

return statearr_24313;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22183__auto__);
});})(c__22181__auto___24408,jobs,results,process,async))
);


var c__22181__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22181__auto__,jobs,results,process,async){
return (function (){
var f__22182__auto__ = (function (){var switch__22014__auto__ = ((function (c__22181__auto__,jobs,results,process,async){
return (function (state_24351){
var state_val_24352 = (state_24351[(1)]);
if((state_val_24352 === (7))){
var inst_24347 = (state_24351[(2)]);
var state_24351__$1 = state_24351;
var statearr_24353_24417 = state_24351__$1;
(statearr_24353_24417[(2)] = inst_24347);

(statearr_24353_24417[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24352 === (20))){
var state_24351__$1 = state_24351;
var statearr_24354_24418 = state_24351__$1;
(statearr_24354_24418[(2)] = null);

(statearr_24354_24418[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24352 === (1))){
var state_24351__$1 = state_24351;
var statearr_24355_24419 = state_24351__$1;
(statearr_24355_24419[(2)] = null);

(statearr_24355_24419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24352 === (4))){
var inst_24316 = (state_24351[(7)]);
var inst_24316__$1 = (state_24351[(2)]);
var inst_24317 = (inst_24316__$1 == null);
var state_24351__$1 = (function (){var statearr_24356 = state_24351;
(statearr_24356[(7)] = inst_24316__$1);

return statearr_24356;
})();
if(cljs.core.truth_(inst_24317)){
var statearr_24357_24420 = state_24351__$1;
(statearr_24357_24420[(1)] = (5));

} else {
var statearr_24358_24421 = state_24351__$1;
(statearr_24358_24421[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24352 === (15))){
var inst_24329 = (state_24351[(8)]);
var state_24351__$1 = state_24351;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24351__$1,(18),to,inst_24329);
} else {
if((state_val_24352 === (21))){
var inst_24342 = (state_24351[(2)]);
var state_24351__$1 = state_24351;
var statearr_24359_24422 = state_24351__$1;
(statearr_24359_24422[(2)] = inst_24342);

(statearr_24359_24422[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24352 === (13))){
var inst_24344 = (state_24351[(2)]);
var state_24351__$1 = (function (){var statearr_24360 = state_24351;
(statearr_24360[(9)] = inst_24344);

return statearr_24360;
})();
var statearr_24361_24423 = state_24351__$1;
(statearr_24361_24423[(2)] = null);

(statearr_24361_24423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24352 === (6))){
var inst_24316 = (state_24351[(7)]);
var state_24351__$1 = state_24351;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24351__$1,(11),inst_24316);
} else {
if((state_val_24352 === (17))){
var inst_24337 = (state_24351[(2)]);
var state_24351__$1 = state_24351;
if(cljs.core.truth_(inst_24337)){
var statearr_24362_24424 = state_24351__$1;
(statearr_24362_24424[(1)] = (19));

} else {
var statearr_24363_24425 = state_24351__$1;
(statearr_24363_24425[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24352 === (3))){
var inst_24349 = (state_24351[(2)]);
var state_24351__$1 = state_24351;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24351__$1,inst_24349);
} else {
if((state_val_24352 === (12))){
var inst_24326 = (state_24351[(10)]);
var state_24351__$1 = state_24351;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24351__$1,(14),inst_24326);
} else {
if((state_val_24352 === (2))){
var state_24351__$1 = state_24351;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24351__$1,(4),results);
} else {
if((state_val_24352 === (19))){
var state_24351__$1 = state_24351;
var statearr_24364_24426 = state_24351__$1;
(statearr_24364_24426[(2)] = null);

(statearr_24364_24426[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24352 === (11))){
var inst_24326 = (state_24351[(2)]);
var state_24351__$1 = (function (){var statearr_24365 = state_24351;
(statearr_24365[(10)] = inst_24326);

return statearr_24365;
})();
var statearr_24366_24427 = state_24351__$1;
(statearr_24366_24427[(2)] = null);

(statearr_24366_24427[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24352 === (9))){
var state_24351__$1 = state_24351;
var statearr_24367_24428 = state_24351__$1;
(statearr_24367_24428[(2)] = null);

(statearr_24367_24428[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24352 === (5))){
var state_24351__$1 = state_24351;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24368_24429 = state_24351__$1;
(statearr_24368_24429[(1)] = (8));

} else {
var statearr_24369_24430 = state_24351__$1;
(statearr_24369_24430[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24352 === (14))){
var inst_24331 = (state_24351[(11)]);
var inst_24329 = (state_24351[(8)]);
var inst_24329__$1 = (state_24351[(2)]);
var inst_24330 = (inst_24329__$1 == null);
var inst_24331__$1 = cljs.core.not.call(null,inst_24330);
var state_24351__$1 = (function (){var statearr_24370 = state_24351;
(statearr_24370[(11)] = inst_24331__$1);

(statearr_24370[(8)] = inst_24329__$1);

return statearr_24370;
})();
if(inst_24331__$1){
var statearr_24371_24431 = state_24351__$1;
(statearr_24371_24431[(1)] = (15));

} else {
var statearr_24372_24432 = state_24351__$1;
(statearr_24372_24432[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24352 === (16))){
var inst_24331 = (state_24351[(11)]);
var state_24351__$1 = state_24351;
var statearr_24373_24433 = state_24351__$1;
(statearr_24373_24433[(2)] = inst_24331);

(statearr_24373_24433[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24352 === (10))){
var inst_24323 = (state_24351[(2)]);
var state_24351__$1 = state_24351;
var statearr_24374_24434 = state_24351__$1;
(statearr_24374_24434[(2)] = inst_24323);

(statearr_24374_24434[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24352 === (18))){
var inst_24334 = (state_24351[(2)]);
var state_24351__$1 = state_24351;
var statearr_24375_24435 = state_24351__$1;
(statearr_24375_24435[(2)] = inst_24334);

(statearr_24375_24435[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24352 === (8))){
var inst_24320 = cljs.core.async.close_BANG_.call(null,to);
var state_24351__$1 = state_24351;
var statearr_24376_24436 = state_24351__$1;
(statearr_24376_24436[(2)] = inst_24320);

(statearr_24376_24436[(1)] = (10));


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
});})(c__22181__auto__,jobs,results,process,async))
;
return ((function (switch__22014__auto__,c__22181__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22015__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22015__auto____0 = (function (){
var statearr_24377 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24377[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22015__auto__);

(statearr_24377[(1)] = (1));

return statearr_24377;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22015__auto____1 = (function (state_24351){
while(true){
var ret_value__22016__auto__ = (function (){try{while(true){
var result__22017__auto__ = switch__22014__auto__.call(null,state_24351);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22017__auto__;
}
break;
}
}catch (e24378){if((e24378 instanceof Object)){
var ex__22018__auto__ = e24378;
var statearr_24379_24437 = state_24351;
(statearr_24379_24437[(5)] = ex__22018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24351);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24378;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24438 = state_24351;
state_24351 = G__24438;
continue;
} else {
return ret_value__22016__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22015__auto__ = function(state_24351){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22015__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22015__auto____1.call(this,state_24351);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22015__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22015__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22015__auto__;
})()
;})(switch__22014__auto__,c__22181__auto__,jobs,results,process,async))
})();
var state__22183__auto__ = (function (){var statearr_24380 = f__22182__auto__.call(null);
(statearr_24380[(6)] = c__22181__auto__);

return statearr_24380;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22183__auto__);
});})(c__22181__auto__,jobs,results,process,async))
);

return c__22181__auto__;
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
var G__24440 = arguments.length;
switch (G__24440) {
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
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
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
var G__24443 = arguments.length;
switch (G__24443) {
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
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
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
var G__24446 = arguments.length;
switch (G__24446) {
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
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__22181__auto___24495 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22181__auto___24495,tc,fc){
return (function (){
var f__22182__auto__ = (function (){var switch__22014__auto__ = ((function (c__22181__auto___24495,tc,fc){
return (function (state_24472){
var state_val_24473 = (state_24472[(1)]);
if((state_val_24473 === (7))){
var inst_24468 = (state_24472[(2)]);
var state_24472__$1 = state_24472;
var statearr_24474_24496 = state_24472__$1;
(statearr_24474_24496[(2)] = inst_24468);

(statearr_24474_24496[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24473 === (1))){
var state_24472__$1 = state_24472;
var statearr_24475_24497 = state_24472__$1;
(statearr_24475_24497[(2)] = null);

(statearr_24475_24497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24473 === (4))){
var inst_24449 = (state_24472[(7)]);
var inst_24449__$1 = (state_24472[(2)]);
var inst_24450 = (inst_24449__$1 == null);
var state_24472__$1 = (function (){var statearr_24476 = state_24472;
(statearr_24476[(7)] = inst_24449__$1);

return statearr_24476;
})();
if(cljs.core.truth_(inst_24450)){
var statearr_24477_24498 = state_24472__$1;
(statearr_24477_24498[(1)] = (5));

} else {
var statearr_24478_24499 = state_24472__$1;
(statearr_24478_24499[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24473 === (13))){
var state_24472__$1 = state_24472;
var statearr_24479_24500 = state_24472__$1;
(statearr_24479_24500[(2)] = null);

(statearr_24479_24500[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24473 === (6))){
var inst_24449 = (state_24472[(7)]);
var inst_24455 = p.call(null,inst_24449);
var state_24472__$1 = state_24472;
if(cljs.core.truth_(inst_24455)){
var statearr_24480_24501 = state_24472__$1;
(statearr_24480_24501[(1)] = (9));

} else {
var statearr_24481_24502 = state_24472__$1;
(statearr_24481_24502[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24473 === (3))){
var inst_24470 = (state_24472[(2)]);
var state_24472__$1 = state_24472;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24472__$1,inst_24470);
} else {
if((state_val_24473 === (12))){
var state_24472__$1 = state_24472;
var statearr_24482_24503 = state_24472__$1;
(statearr_24482_24503[(2)] = null);

(statearr_24482_24503[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24473 === (2))){
var state_24472__$1 = state_24472;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24472__$1,(4),ch);
} else {
if((state_val_24473 === (11))){
var inst_24449 = (state_24472[(7)]);
var inst_24459 = (state_24472[(2)]);
var state_24472__$1 = state_24472;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24472__$1,(8),inst_24459,inst_24449);
} else {
if((state_val_24473 === (9))){
var state_24472__$1 = state_24472;
var statearr_24483_24504 = state_24472__$1;
(statearr_24483_24504[(2)] = tc);

(statearr_24483_24504[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24473 === (5))){
var inst_24452 = cljs.core.async.close_BANG_.call(null,tc);
var inst_24453 = cljs.core.async.close_BANG_.call(null,fc);
var state_24472__$1 = (function (){var statearr_24484 = state_24472;
(statearr_24484[(8)] = inst_24452);

return statearr_24484;
})();
var statearr_24485_24505 = state_24472__$1;
(statearr_24485_24505[(2)] = inst_24453);

(statearr_24485_24505[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24473 === (14))){
var inst_24466 = (state_24472[(2)]);
var state_24472__$1 = state_24472;
var statearr_24486_24506 = state_24472__$1;
(statearr_24486_24506[(2)] = inst_24466);

(statearr_24486_24506[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24473 === (10))){
var state_24472__$1 = state_24472;
var statearr_24487_24507 = state_24472__$1;
(statearr_24487_24507[(2)] = fc);

(statearr_24487_24507[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24473 === (8))){
var inst_24461 = (state_24472[(2)]);
var state_24472__$1 = state_24472;
if(cljs.core.truth_(inst_24461)){
var statearr_24488_24508 = state_24472__$1;
(statearr_24488_24508[(1)] = (12));

} else {
var statearr_24489_24509 = state_24472__$1;
(statearr_24489_24509[(1)] = (13));

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
});})(c__22181__auto___24495,tc,fc))
;
return ((function (switch__22014__auto__,c__22181__auto___24495,tc,fc){
return (function() {
var cljs$core$async$state_machine__22015__auto__ = null;
var cljs$core$async$state_machine__22015__auto____0 = (function (){
var statearr_24490 = [null,null,null,null,null,null,null,null,null];
(statearr_24490[(0)] = cljs$core$async$state_machine__22015__auto__);

(statearr_24490[(1)] = (1));

return statearr_24490;
});
var cljs$core$async$state_machine__22015__auto____1 = (function (state_24472){
while(true){
var ret_value__22016__auto__ = (function (){try{while(true){
var result__22017__auto__ = switch__22014__auto__.call(null,state_24472);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22017__auto__;
}
break;
}
}catch (e24491){if((e24491 instanceof Object)){
var ex__22018__auto__ = e24491;
var statearr_24492_24510 = state_24472;
(statearr_24492_24510[(5)] = ex__22018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24472);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24491;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24511 = state_24472;
state_24472 = G__24511;
continue;
} else {
return ret_value__22016__auto__;
}
break;
}
});
cljs$core$async$state_machine__22015__auto__ = function(state_24472){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22015__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22015__auto____1.call(this,state_24472);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22015__auto____0;
cljs$core$async$state_machine__22015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22015__auto____1;
return cljs$core$async$state_machine__22015__auto__;
})()
;})(switch__22014__auto__,c__22181__auto___24495,tc,fc))
})();
var state__22183__auto__ = (function (){var statearr_24493 = f__22182__auto__.call(null);
(statearr_24493[(6)] = c__22181__auto___24495);

return statearr_24493;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22183__auto__);
});})(c__22181__auto___24495,tc,fc))
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
var c__22181__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22181__auto__){
return (function (){
var f__22182__auto__ = (function (){var switch__22014__auto__ = ((function (c__22181__auto__){
return (function (state_24532){
var state_val_24533 = (state_24532[(1)]);
if((state_val_24533 === (7))){
var inst_24528 = (state_24532[(2)]);
var state_24532__$1 = state_24532;
var statearr_24534_24552 = state_24532__$1;
(statearr_24534_24552[(2)] = inst_24528);

(statearr_24534_24552[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24533 === (1))){
var inst_24512 = init;
var state_24532__$1 = (function (){var statearr_24535 = state_24532;
(statearr_24535[(7)] = inst_24512);

return statearr_24535;
})();
var statearr_24536_24553 = state_24532__$1;
(statearr_24536_24553[(2)] = null);

(statearr_24536_24553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24533 === (4))){
var inst_24515 = (state_24532[(8)]);
var inst_24515__$1 = (state_24532[(2)]);
var inst_24516 = (inst_24515__$1 == null);
var state_24532__$1 = (function (){var statearr_24537 = state_24532;
(statearr_24537[(8)] = inst_24515__$1);

return statearr_24537;
})();
if(cljs.core.truth_(inst_24516)){
var statearr_24538_24554 = state_24532__$1;
(statearr_24538_24554[(1)] = (5));

} else {
var statearr_24539_24555 = state_24532__$1;
(statearr_24539_24555[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24533 === (6))){
var inst_24512 = (state_24532[(7)]);
var inst_24515 = (state_24532[(8)]);
var inst_24519 = (state_24532[(9)]);
var inst_24519__$1 = f.call(null,inst_24512,inst_24515);
var inst_24520 = cljs.core.reduced_QMARK_.call(null,inst_24519__$1);
var state_24532__$1 = (function (){var statearr_24540 = state_24532;
(statearr_24540[(9)] = inst_24519__$1);

return statearr_24540;
})();
if(inst_24520){
var statearr_24541_24556 = state_24532__$1;
(statearr_24541_24556[(1)] = (8));

} else {
var statearr_24542_24557 = state_24532__$1;
(statearr_24542_24557[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24533 === (3))){
var inst_24530 = (state_24532[(2)]);
var state_24532__$1 = state_24532;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24532__$1,inst_24530);
} else {
if((state_val_24533 === (2))){
var state_24532__$1 = state_24532;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24532__$1,(4),ch);
} else {
if((state_val_24533 === (9))){
var inst_24519 = (state_24532[(9)]);
var inst_24512 = inst_24519;
var state_24532__$1 = (function (){var statearr_24543 = state_24532;
(statearr_24543[(7)] = inst_24512);

return statearr_24543;
})();
var statearr_24544_24558 = state_24532__$1;
(statearr_24544_24558[(2)] = null);

(statearr_24544_24558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24533 === (5))){
var inst_24512 = (state_24532[(7)]);
var state_24532__$1 = state_24532;
var statearr_24545_24559 = state_24532__$1;
(statearr_24545_24559[(2)] = inst_24512);

(statearr_24545_24559[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24533 === (10))){
var inst_24526 = (state_24532[(2)]);
var state_24532__$1 = state_24532;
var statearr_24546_24560 = state_24532__$1;
(statearr_24546_24560[(2)] = inst_24526);

(statearr_24546_24560[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24533 === (8))){
var inst_24519 = (state_24532[(9)]);
var inst_24522 = cljs.core.deref.call(null,inst_24519);
var state_24532__$1 = state_24532;
var statearr_24547_24561 = state_24532__$1;
(statearr_24547_24561[(2)] = inst_24522);

(statearr_24547_24561[(1)] = (10));


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
});})(c__22181__auto__))
;
return ((function (switch__22014__auto__,c__22181__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__22015__auto__ = null;
var cljs$core$async$reduce_$_state_machine__22015__auto____0 = (function (){
var statearr_24548 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24548[(0)] = cljs$core$async$reduce_$_state_machine__22015__auto__);

(statearr_24548[(1)] = (1));

return statearr_24548;
});
var cljs$core$async$reduce_$_state_machine__22015__auto____1 = (function (state_24532){
while(true){
var ret_value__22016__auto__ = (function (){try{while(true){
var result__22017__auto__ = switch__22014__auto__.call(null,state_24532);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22017__auto__;
}
break;
}
}catch (e24549){if((e24549 instanceof Object)){
var ex__22018__auto__ = e24549;
var statearr_24550_24562 = state_24532;
(statearr_24550_24562[(5)] = ex__22018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24532);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24549;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24563 = state_24532;
state_24532 = G__24563;
continue;
} else {
return ret_value__22016__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__22015__auto__ = function(state_24532){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__22015__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__22015__auto____1.call(this,state_24532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__22015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__22015__auto____0;
cljs$core$async$reduce_$_state_machine__22015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__22015__auto____1;
return cljs$core$async$reduce_$_state_machine__22015__auto__;
})()
;})(switch__22014__auto__,c__22181__auto__))
})();
var state__22183__auto__ = (function (){var statearr_24551 = f__22182__auto__.call(null);
(statearr_24551[(6)] = c__22181__auto__);

return statearr_24551;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22183__auto__);
});})(c__22181__auto__))
);

return c__22181__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__22181__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22181__auto__,f__$1){
return (function (){
var f__22182__auto__ = (function (){var switch__22014__auto__ = ((function (c__22181__auto__,f__$1){
return (function (state_24569){
var state_val_24570 = (state_24569[(1)]);
if((state_val_24570 === (1))){
var inst_24564 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_24569__$1 = state_24569;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24569__$1,(2),inst_24564);
} else {
if((state_val_24570 === (2))){
var inst_24566 = (state_24569[(2)]);
var inst_24567 = f__$1.call(null,inst_24566);
var state_24569__$1 = state_24569;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24569__$1,inst_24567);
} else {
return null;
}
}
});})(c__22181__auto__,f__$1))
;
return ((function (switch__22014__auto__,c__22181__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__22015__auto__ = null;
var cljs$core$async$transduce_$_state_machine__22015__auto____0 = (function (){
var statearr_24571 = [null,null,null,null,null,null,null];
(statearr_24571[(0)] = cljs$core$async$transduce_$_state_machine__22015__auto__);

(statearr_24571[(1)] = (1));

return statearr_24571;
});
var cljs$core$async$transduce_$_state_machine__22015__auto____1 = (function (state_24569){
while(true){
var ret_value__22016__auto__ = (function (){try{while(true){
var result__22017__auto__ = switch__22014__auto__.call(null,state_24569);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22017__auto__;
}
break;
}
}catch (e24572){if((e24572 instanceof Object)){
var ex__22018__auto__ = e24572;
var statearr_24573_24575 = state_24569;
(statearr_24573_24575[(5)] = ex__22018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24569);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24572;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24576 = state_24569;
state_24569 = G__24576;
continue;
} else {
return ret_value__22016__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__22015__auto__ = function(state_24569){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__22015__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__22015__auto____1.call(this,state_24569);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__22015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__22015__auto____0;
cljs$core$async$transduce_$_state_machine__22015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__22015__auto____1;
return cljs$core$async$transduce_$_state_machine__22015__auto__;
})()
;})(switch__22014__auto__,c__22181__auto__,f__$1))
})();
var state__22183__auto__ = (function (){var statearr_24574 = f__22182__auto__.call(null);
(statearr_24574[(6)] = c__22181__auto__);

return statearr_24574;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22183__auto__);
});})(c__22181__auto__,f__$1))
);

return c__22181__auto__;
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
var G__24578 = arguments.length;
switch (G__24578) {
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
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__22181__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22181__auto__){
return (function (){
var f__22182__auto__ = (function (){var switch__22014__auto__ = ((function (c__22181__auto__){
return (function (state_24603){
var state_val_24604 = (state_24603[(1)]);
if((state_val_24604 === (7))){
var inst_24585 = (state_24603[(2)]);
var state_24603__$1 = state_24603;
var statearr_24605_24626 = state_24603__$1;
(statearr_24605_24626[(2)] = inst_24585);

(statearr_24605_24626[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24604 === (1))){
var inst_24579 = cljs.core.seq.call(null,coll);
var inst_24580 = inst_24579;
var state_24603__$1 = (function (){var statearr_24606 = state_24603;
(statearr_24606[(7)] = inst_24580);

return statearr_24606;
})();
var statearr_24607_24627 = state_24603__$1;
(statearr_24607_24627[(2)] = null);

(statearr_24607_24627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24604 === (4))){
var inst_24580 = (state_24603[(7)]);
var inst_24583 = cljs.core.first.call(null,inst_24580);
var state_24603__$1 = state_24603;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24603__$1,(7),ch,inst_24583);
} else {
if((state_val_24604 === (13))){
var inst_24597 = (state_24603[(2)]);
var state_24603__$1 = state_24603;
var statearr_24608_24628 = state_24603__$1;
(statearr_24608_24628[(2)] = inst_24597);

(statearr_24608_24628[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24604 === (6))){
var inst_24588 = (state_24603[(2)]);
var state_24603__$1 = state_24603;
if(cljs.core.truth_(inst_24588)){
var statearr_24609_24629 = state_24603__$1;
(statearr_24609_24629[(1)] = (8));

} else {
var statearr_24610_24630 = state_24603__$1;
(statearr_24610_24630[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24604 === (3))){
var inst_24601 = (state_24603[(2)]);
var state_24603__$1 = state_24603;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24603__$1,inst_24601);
} else {
if((state_val_24604 === (12))){
var state_24603__$1 = state_24603;
var statearr_24611_24631 = state_24603__$1;
(statearr_24611_24631[(2)] = null);

(statearr_24611_24631[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24604 === (2))){
var inst_24580 = (state_24603[(7)]);
var state_24603__$1 = state_24603;
if(cljs.core.truth_(inst_24580)){
var statearr_24612_24632 = state_24603__$1;
(statearr_24612_24632[(1)] = (4));

} else {
var statearr_24613_24633 = state_24603__$1;
(statearr_24613_24633[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24604 === (11))){
var inst_24594 = cljs.core.async.close_BANG_.call(null,ch);
var state_24603__$1 = state_24603;
var statearr_24614_24634 = state_24603__$1;
(statearr_24614_24634[(2)] = inst_24594);

(statearr_24614_24634[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24604 === (9))){
var state_24603__$1 = state_24603;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24615_24635 = state_24603__$1;
(statearr_24615_24635[(1)] = (11));

} else {
var statearr_24616_24636 = state_24603__$1;
(statearr_24616_24636[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24604 === (5))){
var inst_24580 = (state_24603[(7)]);
var state_24603__$1 = state_24603;
var statearr_24617_24637 = state_24603__$1;
(statearr_24617_24637[(2)] = inst_24580);

(statearr_24617_24637[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24604 === (10))){
var inst_24599 = (state_24603[(2)]);
var state_24603__$1 = state_24603;
var statearr_24618_24638 = state_24603__$1;
(statearr_24618_24638[(2)] = inst_24599);

(statearr_24618_24638[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24604 === (8))){
var inst_24580 = (state_24603[(7)]);
var inst_24590 = cljs.core.next.call(null,inst_24580);
var inst_24580__$1 = inst_24590;
var state_24603__$1 = (function (){var statearr_24619 = state_24603;
(statearr_24619[(7)] = inst_24580__$1);

return statearr_24619;
})();
var statearr_24620_24639 = state_24603__$1;
(statearr_24620_24639[(2)] = null);

(statearr_24620_24639[(1)] = (2));


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
});})(c__22181__auto__))
;
return ((function (switch__22014__auto__,c__22181__auto__){
return (function() {
var cljs$core$async$state_machine__22015__auto__ = null;
var cljs$core$async$state_machine__22015__auto____0 = (function (){
var statearr_24621 = [null,null,null,null,null,null,null,null];
(statearr_24621[(0)] = cljs$core$async$state_machine__22015__auto__);

(statearr_24621[(1)] = (1));

return statearr_24621;
});
var cljs$core$async$state_machine__22015__auto____1 = (function (state_24603){
while(true){
var ret_value__22016__auto__ = (function (){try{while(true){
var result__22017__auto__ = switch__22014__auto__.call(null,state_24603);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22017__auto__;
}
break;
}
}catch (e24622){if((e24622 instanceof Object)){
var ex__22018__auto__ = e24622;
var statearr_24623_24640 = state_24603;
(statearr_24623_24640[(5)] = ex__22018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24603);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24622;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24641 = state_24603;
state_24603 = G__24641;
continue;
} else {
return ret_value__22016__auto__;
}
break;
}
});
cljs$core$async$state_machine__22015__auto__ = function(state_24603){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22015__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22015__auto____1.call(this,state_24603);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22015__auto____0;
cljs$core$async$state_machine__22015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22015__auto____1;
return cljs$core$async$state_machine__22015__auto__;
})()
;})(switch__22014__auto__,c__22181__auto__))
})();
var state__22183__auto__ = (function (){var statearr_24624 = f__22182__auto__.call(null);
(statearr_24624[(6)] = c__22181__auto__);

return statearr_24624;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22183__auto__);
});})(c__22181__auto__))
);

return c__22181__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

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
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
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
return m__4434__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
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
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
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
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24642 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24642 = (function (ch,cs,meta24643){
this.ch = ch;
this.cs = cs;
this.meta24643 = meta24643;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24642.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24644,meta24643__$1){
var self__ = this;
var _24644__$1 = this;
return (new cljs.core.async.t_cljs$core$async24642(self__.ch,self__.cs,meta24643__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async24642.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24644){
var self__ = this;
var _24644__$1 = this;
return self__.meta24643;
});})(cs))
;

cljs.core.async.t_cljs$core$async24642.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24642.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async24642.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24642.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24642.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24642.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24642.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta24643","meta24643",1762285693,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async24642.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24642.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24642";

cljs.core.async.t_cljs$core$async24642.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24642");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24642.
 */
cljs.core.async.__GT_t_cljs$core$async24642 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async24642(ch__$1,cs__$1,meta24643){
return (new cljs.core.async.t_cljs$core$async24642(ch__$1,cs__$1,meta24643));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async24642(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__22181__auto___24864 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22181__auto___24864,cs,m,dchan,dctr,done){
return (function (){
var f__22182__auto__ = (function (){var switch__22014__auto__ = ((function (c__22181__auto___24864,cs,m,dchan,dctr,done){
return (function (state_24779){
var state_val_24780 = (state_24779[(1)]);
if((state_val_24780 === (7))){
var inst_24775 = (state_24779[(2)]);
var state_24779__$1 = state_24779;
var statearr_24781_24865 = state_24779__$1;
(statearr_24781_24865[(2)] = inst_24775);

(statearr_24781_24865[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24780 === (20))){
var inst_24678 = (state_24779[(7)]);
var inst_24690 = cljs.core.first.call(null,inst_24678);
var inst_24691 = cljs.core.nth.call(null,inst_24690,(0),null);
var inst_24692 = cljs.core.nth.call(null,inst_24690,(1),null);
var state_24779__$1 = (function (){var statearr_24782 = state_24779;
(statearr_24782[(8)] = inst_24691);

return statearr_24782;
})();
if(cljs.core.truth_(inst_24692)){
var statearr_24783_24866 = state_24779__$1;
(statearr_24783_24866[(1)] = (22));

} else {
var statearr_24784_24867 = state_24779__$1;
(statearr_24784_24867[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24780 === (27))){
var inst_24722 = (state_24779[(9)]);
var inst_24720 = (state_24779[(10)]);
var inst_24647 = (state_24779[(11)]);
var inst_24727 = (state_24779[(12)]);
var inst_24727__$1 = cljs.core._nth.call(null,inst_24720,inst_24722);
var inst_24728 = cljs.core.async.put_BANG_.call(null,inst_24727__$1,inst_24647,done);
var state_24779__$1 = (function (){var statearr_24785 = state_24779;
(statearr_24785[(12)] = inst_24727__$1);

return statearr_24785;
})();
if(cljs.core.truth_(inst_24728)){
var statearr_24786_24868 = state_24779__$1;
(statearr_24786_24868[(1)] = (30));

} else {
var statearr_24787_24869 = state_24779__$1;
(statearr_24787_24869[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24780 === (1))){
var state_24779__$1 = state_24779;
var statearr_24788_24870 = state_24779__$1;
(statearr_24788_24870[(2)] = null);

(statearr_24788_24870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24780 === (24))){
var inst_24678 = (state_24779[(7)]);
var inst_24697 = (state_24779[(2)]);
var inst_24698 = cljs.core.next.call(null,inst_24678);
var inst_24656 = inst_24698;
var inst_24657 = null;
var inst_24658 = (0);
var inst_24659 = (0);
var state_24779__$1 = (function (){var statearr_24789 = state_24779;
(statearr_24789[(13)] = inst_24656);

(statearr_24789[(14)] = inst_24657);

(statearr_24789[(15)] = inst_24659);

(statearr_24789[(16)] = inst_24697);

(statearr_24789[(17)] = inst_24658);

return statearr_24789;
})();
var statearr_24790_24871 = state_24779__$1;
(statearr_24790_24871[(2)] = null);

(statearr_24790_24871[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24780 === (39))){
var state_24779__$1 = state_24779;
var statearr_24794_24872 = state_24779__$1;
(statearr_24794_24872[(2)] = null);

(statearr_24794_24872[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24780 === (4))){
var inst_24647 = (state_24779[(11)]);
var inst_24647__$1 = (state_24779[(2)]);
var inst_24648 = (inst_24647__$1 == null);
var state_24779__$1 = (function (){var statearr_24795 = state_24779;
(statearr_24795[(11)] = inst_24647__$1);

return statearr_24795;
})();
if(cljs.core.truth_(inst_24648)){
var statearr_24796_24873 = state_24779__$1;
(statearr_24796_24873[(1)] = (5));

} else {
var statearr_24797_24874 = state_24779__$1;
(statearr_24797_24874[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24780 === (15))){
var inst_24656 = (state_24779[(13)]);
var inst_24657 = (state_24779[(14)]);
var inst_24659 = (state_24779[(15)]);
var inst_24658 = (state_24779[(17)]);
var inst_24674 = (state_24779[(2)]);
var inst_24675 = (inst_24659 + (1));
var tmp24791 = inst_24656;
var tmp24792 = inst_24657;
var tmp24793 = inst_24658;
var inst_24656__$1 = tmp24791;
var inst_24657__$1 = tmp24792;
var inst_24658__$1 = tmp24793;
var inst_24659__$1 = inst_24675;
var state_24779__$1 = (function (){var statearr_24798 = state_24779;
(statearr_24798[(13)] = inst_24656__$1);

(statearr_24798[(14)] = inst_24657__$1);

(statearr_24798[(15)] = inst_24659__$1);

(statearr_24798[(18)] = inst_24674);

(statearr_24798[(17)] = inst_24658__$1);

return statearr_24798;
})();
var statearr_24799_24875 = state_24779__$1;
(statearr_24799_24875[(2)] = null);

(statearr_24799_24875[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24780 === (21))){
var inst_24701 = (state_24779[(2)]);
var state_24779__$1 = state_24779;
var statearr_24803_24876 = state_24779__$1;
(statearr_24803_24876[(2)] = inst_24701);

(statearr_24803_24876[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24780 === (31))){
var inst_24727 = (state_24779[(12)]);
var inst_24731 = done.call(null,null);
var inst_24732 = cljs.core.async.untap_STAR_.call(null,m,inst_24727);
var state_24779__$1 = (function (){var statearr_24804 = state_24779;
(statearr_24804[(19)] = inst_24731);

return statearr_24804;
})();
var statearr_24805_24877 = state_24779__$1;
(statearr_24805_24877[(2)] = inst_24732);

(statearr_24805_24877[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24780 === (32))){
var inst_24722 = (state_24779[(9)]);
var inst_24720 = (state_24779[(10)]);
var inst_24721 = (state_24779[(20)]);
var inst_24719 = (state_24779[(21)]);
var inst_24734 = (state_24779[(2)]);
var inst_24735 = (inst_24722 + (1));
var tmp24800 = inst_24720;
var tmp24801 = inst_24721;
var tmp24802 = inst_24719;
var inst_24719__$1 = tmp24802;
var inst_24720__$1 = tmp24800;
var inst_24721__$1 = tmp24801;
var inst_24722__$1 = inst_24735;
var state_24779__$1 = (function (){var statearr_24806 = state_24779;
(statearr_24806[(9)] = inst_24722__$1);

(statearr_24806[(10)] = inst_24720__$1);

(statearr_24806[(22)] = inst_24734);

(statearr_24806[(20)] = inst_24721__$1);

(statearr_24806[(21)] = inst_24719__$1);

return statearr_24806;
})();
var statearr_24807_24878 = state_24779__$1;
(statearr_24807_24878[(2)] = null);

(statearr_24807_24878[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24780 === (40))){
var inst_24747 = (state_24779[(23)]);
var inst_24751 = done.call(null,null);
var inst_24752 = cljs.core.async.untap_STAR_.call(null,m,inst_24747);
var state_24779__$1 = (function (){var statearr_24808 = state_24779;
(statearr_24808[(24)] = inst_24751);

return statearr_24808;
})();
var statearr_24809_24879 = state_24779__$1;
(statearr_24809_24879[(2)] = inst_24752);

(statearr_24809_24879[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24780 === (33))){
var inst_24738 = (state_24779[(25)]);
var inst_24740 = cljs.core.chunked_seq_QMARK_.call(null,inst_24738);
var state_24779__$1 = state_24779;
if(inst_24740){
var statearr_24810_24880 = state_24779__$1;
(statearr_24810_24880[(1)] = (36));

} else {
var statearr_24811_24881 = state_24779__$1;
(statearr_24811_24881[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24780 === (13))){
var inst_24668 = (state_24779[(26)]);
var inst_24671 = cljs.core.async.close_BANG_.call(null,inst_24668);
var state_24779__$1 = state_24779;
var statearr_24812_24882 = state_24779__$1;
(statearr_24812_24882[(2)] = inst_24671);

(statearr_24812_24882[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24780 === (22))){
var inst_24691 = (state_24779[(8)]);
var inst_24694 = cljs.core.async.close_BANG_.call(null,inst_24691);
var state_24779__$1 = state_24779;
var statearr_24813_24883 = state_24779__$1;
(statearr_24813_24883[(2)] = inst_24694);

(statearr_24813_24883[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24780 === (36))){
var inst_24738 = (state_24779[(25)]);
var inst_24742 = cljs.core.chunk_first.call(null,inst_24738);
var inst_24743 = cljs.core.chunk_rest.call(null,inst_24738);
var inst_24744 = cljs.core.count.call(null,inst_24742);
var inst_24719 = inst_24743;
var inst_24720 = inst_24742;
var inst_24721 = inst_24744;
var inst_24722 = (0);
var state_24779__$1 = (function (){var statearr_24814 = state_24779;
(statearr_24814[(9)] = inst_24722);

(statearr_24814[(10)] = inst_24720);

(statearr_24814[(20)] = inst_24721);

(statearr_24814[(21)] = inst_24719);

return statearr_24814;
})();
var statearr_24815_24884 = state_24779__$1;
(statearr_24815_24884[(2)] = null);

(statearr_24815_24884[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24780 === (41))){
var inst_24738 = (state_24779[(25)]);
var inst_24754 = (state_24779[(2)]);
var inst_24755 = cljs.core.next.call(null,inst_24738);
var inst_24719 = inst_24755;
var inst_24720 = null;
var inst_24721 = (0);
var inst_24722 = (0);
var state_24779__$1 = (function (){var statearr_24816 = state_24779;
(statearr_24816[(9)] = inst_24722);

(statearr_24816[(10)] = inst_24720);

(statearr_24816[(27)] = inst_24754);

(statearr_24816[(20)] = inst_24721);

(statearr_24816[(21)] = inst_24719);

return statearr_24816;
})();
var statearr_24817_24885 = state_24779__$1;
(statearr_24817_24885[(2)] = null);

(statearr_24817_24885[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24780 === (43))){
var state_24779__$1 = state_24779;
var statearr_24818_24886 = state_24779__$1;
(statearr_24818_24886[(2)] = null);

(statearr_24818_24886[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24780 === (29))){
var inst_24763 = (state_24779[(2)]);
var state_24779__$1 = state_24779;
var statearr_24819_24887 = state_24779__$1;
(statearr_24819_24887[(2)] = inst_24763);

(statearr_24819_24887[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24780 === (44))){
var inst_24772 = (state_24779[(2)]);
var state_24779__$1 = (function (){var statearr_24820 = state_24779;
(statearr_24820[(28)] = inst_24772);

return statearr_24820;
})();
var statearr_24821_24888 = state_24779__$1;
(statearr_24821_24888[(2)] = null);

(statearr_24821_24888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24780 === (6))){
var inst_24711 = (state_24779[(29)]);
var inst_24710 = cljs.core.deref.call(null,cs);
var inst_24711__$1 = cljs.core.keys.call(null,inst_24710);
var inst_24712 = cljs.core.count.call(null,inst_24711__$1);
var inst_24713 = cljs.core.reset_BANG_.call(null,dctr,inst_24712);
var inst_24718 = cljs.core.seq.call(null,inst_24711__$1);
var inst_24719 = inst_24718;
var inst_24720 = null;
var inst_24721 = (0);
var inst_24722 = (0);
var state_24779__$1 = (function (){var statearr_24822 = state_24779;
(statearr_24822[(9)] = inst_24722);

(statearr_24822[(10)] = inst_24720);

(statearr_24822[(29)] = inst_24711__$1);

(statearr_24822[(30)] = inst_24713);

(statearr_24822[(20)] = inst_24721);

(statearr_24822[(21)] = inst_24719);

return statearr_24822;
})();
var statearr_24823_24889 = state_24779__$1;
(statearr_24823_24889[(2)] = null);

(statearr_24823_24889[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24780 === (28))){
var inst_24738 = (state_24779[(25)]);
var inst_24719 = (state_24779[(21)]);
var inst_24738__$1 = cljs.core.seq.call(null,inst_24719);
var state_24779__$1 = (function (){var statearr_24824 = state_24779;
(statearr_24824[(25)] = inst_24738__$1);

return statearr_24824;
})();
if(inst_24738__$1){
var statearr_24825_24890 = state_24779__$1;
(statearr_24825_24890[(1)] = (33));

} else {
var statearr_24826_24891 = state_24779__$1;
(statearr_24826_24891[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24780 === (25))){
var inst_24722 = (state_24779[(9)]);
var inst_24721 = (state_24779[(20)]);
var inst_24724 = (inst_24722 < inst_24721);
var inst_24725 = inst_24724;
var state_24779__$1 = state_24779;
if(cljs.core.truth_(inst_24725)){
var statearr_24827_24892 = state_24779__$1;
(statearr_24827_24892[(1)] = (27));

} else {
var statearr_24828_24893 = state_24779__$1;
(statearr_24828_24893[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24780 === (34))){
var state_24779__$1 = state_24779;
var statearr_24829_24894 = state_24779__$1;
(statearr_24829_24894[(2)] = null);

(statearr_24829_24894[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24780 === (17))){
var state_24779__$1 = state_24779;
var statearr_24830_24895 = state_24779__$1;
(statearr_24830_24895[(2)] = null);

(statearr_24830_24895[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24780 === (3))){
var inst_24777 = (state_24779[(2)]);
var state_24779__$1 = state_24779;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24779__$1,inst_24777);
} else {
if((state_val_24780 === (12))){
var inst_24706 = (state_24779[(2)]);
var state_24779__$1 = state_24779;
var statearr_24831_24896 = state_24779__$1;
(statearr_24831_24896[(2)] = inst_24706);

(statearr_24831_24896[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24780 === (2))){
var state_24779__$1 = state_24779;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24779__$1,(4),ch);
} else {
if((state_val_24780 === (23))){
var state_24779__$1 = state_24779;
var statearr_24832_24897 = state_24779__$1;
(statearr_24832_24897[(2)] = null);

(statearr_24832_24897[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24780 === (35))){
var inst_24761 = (state_24779[(2)]);
var state_24779__$1 = state_24779;
var statearr_24833_24898 = state_24779__$1;
(statearr_24833_24898[(2)] = inst_24761);

(statearr_24833_24898[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24780 === (19))){
var inst_24678 = (state_24779[(7)]);
var inst_24682 = cljs.core.chunk_first.call(null,inst_24678);
var inst_24683 = cljs.core.chunk_rest.call(null,inst_24678);
var inst_24684 = cljs.core.count.call(null,inst_24682);
var inst_24656 = inst_24683;
var inst_24657 = inst_24682;
var inst_24658 = inst_24684;
var inst_24659 = (0);
var state_24779__$1 = (function (){var statearr_24834 = state_24779;
(statearr_24834[(13)] = inst_24656);

(statearr_24834[(14)] = inst_24657);

(statearr_24834[(15)] = inst_24659);

(statearr_24834[(17)] = inst_24658);

return statearr_24834;
})();
var statearr_24835_24899 = state_24779__$1;
(statearr_24835_24899[(2)] = null);

(statearr_24835_24899[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24780 === (11))){
var inst_24656 = (state_24779[(13)]);
var inst_24678 = (state_24779[(7)]);
var inst_24678__$1 = cljs.core.seq.call(null,inst_24656);
var state_24779__$1 = (function (){var statearr_24836 = state_24779;
(statearr_24836[(7)] = inst_24678__$1);

return statearr_24836;
})();
if(inst_24678__$1){
var statearr_24837_24900 = state_24779__$1;
(statearr_24837_24900[(1)] = (16));

} else {
var statearr_24838_24901 = state_24779__$1;
(statearr_24838_24901[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24780 === (9))){
var inst_24708 = (state_24779[(2)]);
var state_24779__$1 = state_24779;
var statearr_24839_24902 = state_24779__$1;
(statearr_24839_24902[(2)] = inst_24708);

(statearr_24839_24902[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24780 === (5))){
var inst_24654 = cljs.core.deref.call(null,cs);
var inst_24655 = cljs.core.seq.call(null,inst_24654);
var inst_24656 = inst_24655;
var inst_24657 = null;
var inst_24658 = (0);
var inst_24659 = (0);
var state_24779__$1 = (function (){var statearr_24840 = state_24779;
(statearr_24840[(13)] = inst_24656);

(statearr_24840[(14)] = inst_24657);

(statearr_24840[(15)] = inst_24659);

(statearr_24840[(17)] = inst_24658);

return statearr_24840;
})();
var statearr_24841_24903 = state_24779__$1;
(statearr_24841_24903[(2)] = null);

(statearr_24841_24903[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24780 === (14))){
var state_24779__$1 = state_24779;
var statearr_24842_24904 = state_24779__$1;
(statearr_24842_24904[(2)] = null);

(statearr_24842_24904[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24780 === (45))){
var inst_24769 = (state_24779[(2)]);
var state_24779__$1 = state_24779;
var statearr_24843_24905 = state_24779__$1;
(statearr_24843_24905[(2)] = inst_24769);

(statearr_24843_24905[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24780 === (26))){
var inst_24711 = (state_24779[(29)]);
var inst_24765 = (state_24779[(2)]);
var inst_24766 = cljs.core.seq.call(null,inst_24711);
var state_24779__$1 = (function (){var statearr_24844 = state_24779;
(statearr_24844[(31)] = inst_24765);

return statearr_24844;
})();
if(inst_24766){
var statearr_24845_24906 = state_24779__$1;
(statearr_24845_24906[(1)] = (42));

} else {
var statearr_24846_24907 = state_24779__$1;
(statearr_24846_24907[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24780 === (16))){
var inst_24678 = (state_24779[(7)]);
var inst_24680 = cljs.core.chunked_seq_QMARK_.call(null,inst_24678);
var state_24779__$1 = state_24779;
if(inst_24680){
var statearr_24847_24908 = state_24779__$1;
(statearr_24847_24908[(1)] = (19));

} else {
var statearr_24848_24909 = state_24779__$1;
(statearr_24848_24909[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24780 === (38))){
var inst_24758 = (state_24779[(2)]);
var state_24779__$1 = state_24779;
var statearr_24849_24910 = state_24779__$1;
(statearr_24849_24910[(2)] = inst_24758);

(statearr_24849_24910[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24780 === (30))){
var state_24779__$1 = state_24779;
var statearr_24850_24911 = state_24779__$1;
(statearr_24850_24911[(2)] = null);

(statearr_24850_24911[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24780 === (10))){
var inst_24657 = (state_24779[(14)]);
var inst_24659 = (state_24779[(15)]);
var inst_24667 = cljs.core._nth.call(null,inst_24657,inst_24659);
var inst_24668 = cljs.core.nth.call(null,inst_24667,(0),null);
var inst_24669 = cljs.core.nth.call(null,inst_24667,(1),null);
var state_24779__$1 = (function (){var statearr_24851 = state_24779;
(statearr_24851[(26)] = inst_24668);

return statearr_24851;
})();
if(cljs.core.truth_(inst_24669)){
var statearr_24852_24912 = state_24779__$1;
(statearr_24852_24912[(1)] = (13));

} else {
var statearr_24853_24913 = state_24779__$1;
(statearr_24853_24913[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24780 === (18))){
var inst_24704 = (state_24779[(2)]);
var state_24779__$1 = state_24779;
var statearr_24854_24914 = state_24779__$1;
(statearr_24854_24914[(2)] = inst_24704);

(statearr_24854_24914[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24780 === (42))){
var state_24779__$1 = state_24779;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24779__$1,(45),dchan);
} else {
if((state_val_24780 === (37))){
var inst_24747 = (state_24779[(23)]);
var inst_24738 = (state_24779[(25)]);
var inst_24647 = (state_24779[(11)]);
var inst_24747__$1 = cljs.core.first.call(null,inst_24738);
var inst_24748 = cljs.core.async.put_BANG_.call(null,inst_24747__$1,inst_24647,done);
var state_24779__$1 = (function (){var statearr_24855 = state_24779;
(statearr_24855[(23)] = inst_24747__$1);

return statearr_24855;
})();
if(cljs.core.truth_(inst_24748)){
var statearr_24856_24915 = state_24779__$1;
(statearr_24856_24915[(1)] = (39));

} else {
var statearr_24857_24916 = state_24779__$1;
(statearr_24857_24916[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24780 === (8))){
var inst_24659 = (state_24779[(15)]);
var inst_24658 = (state_24779[(17)]);
var inst_24661 = (inst_24659 < inst_24658);
var inst_24662 = inst_24661;
var state_24779__$1 = state_24779;
if(cljs.core.truth_(inst_24662)){
var statearr_24858_24917 = state_24779__$1;
(statearr_24858_24917[(1)] = (10));

} else {
var statearr_24859_24918 = state_24779__$1;
(statearr_24859_24918[(1)] = (11));

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
});})(c__22181__auto___24864,cs,m,dchan,dctr,done))
;
return ((function (switch__22014__auto__,c__22181__auto___24864,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__22015__auto__ = null;
var cljs$core$async$mult_$_state_machine__22015__auto____0 = (function (){
var statearr_24860 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24860[(0)] = cljs$core$async$mult_$_state_machine__22015__auto__);

(statearr_24860[(1)] = (1));

return statearr_24860;
});
var cljs$core$async$mult_$_state_machine__22015__auto____1 = (function (state_24779){
while(true){
var ret_value__22016__auto__ = (function (){try{while(true){
var result__22017__auto__ = switch__22014__auto__.call(null,state_24779);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22017__auto__;
}
break;
}
}catch (e24861){if((e24861 instanceof Object)){
var ex__22018__auto__ = e24861;
var statearr_24862_24919 = state_24779;
(statearr_24862_24919[(5)] = ex__22018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24779);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24861;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24920 = state_24779;
state_24779 = G__24920;
continue;
} else {
return ret_value__22016__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__22015__auto__ = function(state_24779){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__22015__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__22015__auto____1.call(this,state_24779);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__22015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__22015__auto____0;
cljs$core$async$mult_$_state_machine__22015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__22015__auto____1;
return cljs$core$async$mult_$_state_machine__22015__auto__;
})()
;})(switch__22014__auto__,c__22181__auto___24864,cs,m,dchan,dctr,done))
})();
var state__22183__auto__ = (function (){var statearr_24863 = f__22182__auto__.call(null);
(statearr_24863[(6)] = c__22181__auto___24864);

return statearr_24863;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22183__auto__);
});})(c__22181__auto___24864,cs,m,dchan,dctr,done))
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
var G__24922 = arguments.length;
switch (G__24922) {
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
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
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
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
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
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
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
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
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
return m__4434__auto__.call(null,m,state_map);
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
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
return m__4434__auto__.call(null,m,mode);
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___24934 = arguments.length;
var i__4731__auto___24935 = (0);
while(true){
if((i__4731__auto___24935 < len__4730__auto___24934)){
args__4736__auto__.push((arguments[i__4731__auto___24935]));

var G__24936 = (i__4731__auto___24935 + (1));
i__4731__auto___24935 = G__24936;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__24928){
var map__24929 = p__24928;
var map__24929__$1 = (((((!((map__24929 == null))))?(((((map__24929.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24929.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24929):map__24929);
var opts = map__24929__$1;
var statearr_24931_24937 = state;
(statearr_24931_24937[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,((function (map__24929,map__24929__$1,opts){
return (function (val){
var statearr_24932_24938 = state;
(statearr_24932_24938[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__24929,map__24929__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_24933_24939 = state;
(statearr_24933_24939[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq24924){
var G__24925 = cljs.core.first.call(null,seq24924);
var seq24924__$1 = cljs.core.next.call(null,seq24924);
var G__24926 = cljs.core.first.call(null,seq24924__$1);
var seq24924__$2 = cljs.core.next.call(null,seq24924__$1);
var G__24927 = cljs.core.first.call(null,seq24924__$2);
var seq24924__$3 = cljs.core.next.call(null,seq24924__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24925,G__24926,G__24927,seq24924__$3);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24940 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24940 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta24941){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta24941 = meta24941;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24940.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24942,meta24941__$1){
var self__ = this;
var _24942__$1 = this;
return (new cljs.core.async.t_cljs$core$async24940(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta24941__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24940.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24942){
var self__ = this;
var _24942__$1 = this;
return self__.meta24941;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24940.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24940.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24940.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24940.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24940.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24940.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24940.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24940.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24940.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta24941","meta24941",196853681,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24940.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24940.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24940";

cljs.core.async.t_cljs$core$async24940.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24940");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24940.
 */
cljs.core.async.__GT_t_cljs$core$async24940 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async24940(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24941){
return (new cljs.core.async.t_cljs$core$async24940(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24941));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async24940(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22181__auto___25104 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22181__auto___25104,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__22182__auto__ = (function (){var switch__22014__auto__ = ((function (c__22181__auto___25104,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25044){
var state_val_25045 = (state_25044[(1)]);
if((state_val_25045 === (7))){
var inst_24959 = (state_25044[(2)]);
var state_25044__$1 = state_25044;
var statearr_25046_25105 = state_25044__$1;
(statearr_25046_25105[(2)] = inst_24959);

(statearr_25046_25105[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25045 === (20))){
var inst_24971 = (state_25044[(7)]);
var state_25044__$1 = state_25044;
var statearr_25047_25106 = state_25044__$1;
(statearr_25047_25106[(2)] = inst_24971);

(statearr_25047_25106[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25045 === (27))){
var state_25044__$1 = state_25044;
var statearr_25048_25107 = state_25044__$1;
(statearr_25048_25107[(2)] = null);

(statearr_25048_25107[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25045 === (1))){
var inst_24946 = (state_25044[(8)]);
var inst_24946__$1 = calc_state.call(null);
var inst_24948 = (inst_24946__$1 == null);
var inst_24949 = cljs.core.not.call(null,inst_24948);
var state_25044__$1 = (function (){var statearr_25049 = state_25044;
(statearr_25049[(8)] = inst_24946__$1);

return statearr_25049;
})();
if(inst_24949){
var statearr_25050_25108 = state_25044__$1;
(statearr_25050_25108[(1)] = (2));

} else {
var statearr_25051_25109 = state_25044__$1;
(statearr_25051_25109[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25045 === (24))){
var inst_25018 = (state_25044[(9)]);
var inst_24995 = (state_25044[(10)]);
var inst_25004 = (state_25044[(11)]);
var inst_25018__$1 = inst_24995.call(null,inst_25004);
var state_25044__$1 = (function (){var statearr_25052 = state_25044;
(statearr_25052[(9)] = inst_25018__$1);

return statearr_25052;
})();
if(cljs.core.truth_(inst_25018__$1)){
var statearr_25053_25110 = state_25044__$1;
(statearr_25053_25110[(1)] = (29));

} else {
var statearr_25054_25111 = state_25044__$1;
(statearr_25054_25111[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25045 === (4))){
var inst_24962 = (state_25044[(2)]);
var state_25044__$1 = state_25044;
if(cljs.core.truth_(inst_24962)){
var statearr_25055_25112 = state_25044__$1;
(statearr_25055_25112[(1)] = (8));

} else {
var statearr_25056_25113 = state_25044__$1;
(statearr_25056_25113[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25045 === (15))){
var inst_24989 = (state_25044[(2)]);
var state_25044__$1 = state_25044;
if(cljs.core.truth_(inst_24989)){
var statearr_25057_25114 = state_25044__$1;
(statearr_25057_25114[(1)] = (19));

} else {
var statearr_25058_25115 = state_25044__$1;
(statearr_25058_25115[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25045 === (21))){
var inst_24994 = (state_25044[(12)]);
var inst_24994__$1 = (state_25044[(2)]);
var inst_24995 = cljs.core.get.call(null,inst_24994__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24996 = cljs.core.get.call(null,inst_24994__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24997 = cljs.core.get.call(null,inst_24994__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_25044__$1 = (function (){var statearr_25059 = state_25044;
(statearr_25059[(10)] = inst_24995);

(statearr_25059[(12)] = inst_24994__$1);

(statearr_25059[(13)] = inst_24996);

return statearr_25059;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_25044__$1,(22),inst_24997);
} else {
if((state_val_25045 === (31))){
var inst_25026 = (state_25044[(2)]);
var state_25044__$1 = state_25044;
if(cljs.core.truth_(inst_25026)){
var statearr_25060_25116 = state_25044__$1;
(statearr_25060_25116[(1)] = (32));

} else {
var statearr_25061_25117 = state_25044__$1;
(statearr_25061_25117[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25045 === (32))){
var inst_25003 = (state_25044[(14)]);
var state_25044__$1 = state_25044;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25044__$1,(35),out,inst_25003);
} else {
if((state_val_25045 === (33))){
var inst_24994 = (state_25044[(12)]);
var inst_24971 = inst_24994;
var state_25044__$1 = (function (){var statearr_25062 = state_25044;
(statearr_25062[(7)] = inst_24971);

return statearr_25062;
})();
var statearr_25063_25118 = state_25044__$1;
(statearr_25063_25118[(2)] = null);

(statearr_25063_25118[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25045 === (13))){
var inst_24971 = (state_25044[(7)]);
var inst_24978 = inst_24971.cljs$lang$protocol_mask$partition0$;
var inst_24979 = (inst_24978 & (64));
var inst_24980 = inst_24971.cljs$core$ISeq$;
var inst_24981 = (cljs.core.PROTOCOL_SENTINEL === inst_24980);
var inst_24982 = ((inst_24979) || (inst_24981));
var state_25044__$1 = state_25044;
if(cljs.core.truth_(inst_24982)){
var statearr_25064_25119 = state_25044__$1;
(statearr_25064_25119[(1)] = (16));

} else {
var statearr_25065_25120 = state_25044__$1;
(statearr_25065_25120[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25045 === (22))){
var inst_25004 = (state_25044[(11)]);
var inst_25003 = (state_25044[(14)]);
var inst_25002 = (state_25044[(2)]);
var inst_25003__$1 = cljs.core.nth.call(null,inst_25002,(0),null);
var inst_25004__$1 = cljs.core.nth.call(null,inst_25002,(1),null);
var inst_25005 = (inst_25003__$1 == null);
var inst_25006 = cljs.core._EQ_.call(null,inst_25004__$1,change);
var inst_25007 = ((inst_25005) || (inst_25006));
var state_25044__$1 = (function (){var statearr_25066 = state_25044;
(statearr_25066[(11)] = inst_25004__$1);

(statearr_25066[(14)] = inst_25003__$1);

return statearr_25066;
})();
if(cljs.core.truth_(inst_25007)){
var statearr_25067_25121 = state_25044__$1;
(statearr_25067_25121[(1)] = (23));

} else {
var statearr_25068_25122 = state_25044__$1;
(statearr_25068_25122[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25045 === (36))){
var inst_24994 = (state_25044[(12)]);
var inst_24971 = inst_24994;
var state_25044__$1 = (function (){var statearr_25069 = state_25044;
(statearr_25069[(7)] = inst_24971);

return statearr_25069;
})();
var statearr_25070_25123 = state_25044__$1;
(statearr_25070_25123[(2)] = null);

(statearr_25070_25123[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25045 === (29))){
var inst_25018 = (state_25044[(9)]);
var state_25044__$1 = state_25044;
var statearr_25071_25124 = state_25044__$1;
(statearr_25071_25124[(2)] = inst_25018);

(statearr_25071_25124[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25045 === (6))){
var state_25044__$1 = state_25044;
var statearr_25072_25125 = state_25044__$1;
(statearr_25072_25125[(2)] = false);

(statearr_25072_25125[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25045 === (28))){
var inst_25014 = (state_25044[(2)]);
var inst_25015 = calc_state.call(null);
var inst_24971 = inst_25015;
var state_25044__$1 = (function (){var statearr_25073 = state_25044;
(statearr_25073[(15)] = inst_25014);

(statearr_25073[(7)] = inst_24971);

return statearr_25073;
})();
var statearr_25074_25126 = state_25044__$1;
(statearr_25074_25126[(2)] = null);

(statearr_25074_25126[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25045 === (25))){
var inst_25040 = (state_25044[(2)]);
var state_25044__$1 = state_25044;
var statearr_25075_25127 = state_25044__$1;
(statearr_25075_25127[(2)] = inst_25040);

(statearr_25075_25127[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25045 === (34))){
var inst_25038 = (state_25044[(2)]);
var state_25044__$1 = state_25044;
var statearr_25076_25128 = state_25044__$1;
(statearr_25076_25128[(2)] = inst_25038);

(statearr_25076_25128[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25045 === (17))){
var state_25044__$1 = state_25044;
var statearr_25077_25129 = state_25044__$1;
(statearr_25077_25129[(2)] = false);

(statearr_25077_25129[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25045 === (3))){
var state_25044__$1 = state_25044;
var statearr_25078_25130 = state_25044__$1;
(statearr_25078_25130[(2)] = false);

(statearr_25078_25130[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25045 === (12))){
var inst_25042 = (state_25044[(2)]);
var state_25044__$1 = state_25044;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25044__$1,inst_25042);
} else {
if((state_val_25045 === (2))){
var inst_24946 = (state_25044[(8)]);
var inst_24951 = inst_24946.cljs$lang$protocol_mask$partition0$;
var inst_24952 = (inst_24951 & (64));
var inst_24953 = inst_24946.cljs$core$ISeq$;
var inst_24954 = (cljs.core.PROTOCOL_SENTINEL === inst_24953);
var inst_24955 = ((inst_24952) || (inst_24954));
var state_25044__$1 = state_25044;
if(cljs.core.truth_(inst_24955)){
var statearr_25079_25131 = state_25044__$1;
(statearr_25079_25131[(1)] = (5));

} else {
var statearr_25080_25132 = state_25044__$1;
(statearr_25080_25132[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25045 === (23))){
var inst_25003 = (state_25044[(14)]);
var inst_25009 = (inst_25003 == null);
var state_25044__$1 = state_25044;
if(cljs.core.truth_(inst_25009)){
var statearr_25081_25133 = state_25044__$1;
(statearr_25081_25133[(1)] = (26));

} else {
var statearr_25082_25134 = state_25044__$1;
(statearr_25082_25134[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25045 === (35))){
var inst_25029 = (state_25044[(2)]);
var state_25044__$1 = state_25044;
if(cljs.core.truth_(inst_25029)){
var statearr_25083_25135 = state_25044__$1;
(statearr_25083_25135[(1)] = (36));

} else {
var statearr_25084_25136 = state_25044__$1;
(statearr_25084_25136[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25045 === (19))){
var inst_24971 = (state_25044[(7)]);
var inst_24991 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24971);
var state_25044__$1 = state_25044;
var statearr_25085_25137 = state_25044__$1;
(statearr_25085_25137[(2)] = inst_24991);

(statearr_25085_25137[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25045 === (11))){
var inst_24971 = (state_25044[(7)]);
var inst_24975 = (inst_24971 == null);
var inst_24976 = cljs.core.not.call(null,inst_24975);
var state_25044__$1 = state_25044;
if(inst_24976){
var statearr_25086_25138 = state_25044__$1;
(statearr_25086_25138[(1)] = (13));

} else {
var statearr_25087_25139 = state_25044__$1;
(statearr_25087_25139[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25045 === (9))){
var inst_24946 = (state_25044[(8)]);
var state_25044__$1 = state_25044;
var statearr_25088_25140 = state_25044__$1;
(statearr_25088_25140[(2)] = inst_24946);

(statearr_25088_25140[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25045 === (5))){
var state_25044__$1 = state_25044;
var statearr_25089_25141 = state_25044__$1;
(statearr_25089_25141[(2)] = true);

(statearr_25089_25141[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25045 === (14))){
var state_25044__$1 = state_25044;
var statearr_25090_25142 = state_25044__$1;
(statearr_25090_25142[(2)] = false);

(statearr_25090_25142[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25045 === (26))){
var inst_25004 = (state_25044[(11)]);
var inst_25011 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_25004);
var state_25044__$1 = state_25044;
var statearr_25091_25143 = state_25044__$1;
(statearr_25091_25143[(2)] = inst_25011);

(statearr_25091_25143[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25045 === (16))){
var state_25044__$1 = state_25044;
var statearr_25092_25144 = state_25044__$1;
(statearr_25092_25144[(2)] = true);

(statearr_25092_25144[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25045 === (38))){
var inst_25034 = (state_25044[(2)]);
var state_25044__$1 = state_25044;
var statearr_25093_25145 = state_25044__$1;
(statearr_25093_25145[(2)] = inst_25034);

(statearr_25093_25145[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25045 === (30))){
var inst_24995 = (state_25044[(10)]);
var inst_25004 = (state_25044[(11)]);
var inst_24996 = (state_25044[(13)]);
var inst_25021 = cljs.core.empty_QMARK_.call(null,inst_24995);
var inst_25022 = inst_24996.call(null,inst_25004);
var inst_25023 = cljs.core.not.call(null,inst_25022);
var inst_25024 = ((inst_25021) && (inst_25023));
var state_25044__$1 = state_25044;
var statearr_25094_25146 = state_25044__$1;
(statearr_25094_25146[(2)] = inst_25024);

(statearr_25094_25146[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25045 === (10))){
var inst_24946 = (state_25044[(8)]);
var inst_24967 = (state_25044[(2)]);
var inst_24968 = cljs.core.get.call(null,inst_24967,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24969 = cljs.core.get.call(null,inst_24967,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24970 = cljs.core.get.call(null,inst_24967,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_24971 = inst_24946;
var state_25044__$1 = (function (){var statearr_25095 = state_25044;
(statearr_25095[(16)] = inst_24969);

(statearr_25095[(17)] = inst_24968);

(statearr_25095[(18)] = inst_24970);

(statearr_25095[(7)] = inst_24971);

return statearr_25095;
})();
var statearr_25096_25147 = state_25044__$1;
(statearr_25096_25147[(2)] = null);

(statearr_25096_25147[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25045 === (18))){
var inst_24986 = (state_25044[(2)]);
var state_25044__$1 = state_25044;
var statearr_25097_25148 = state_25044__$1;
(statearr_25097_25148[(2)] = inst_24986);

(statearr_25097_25148[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25045 === (37))){
var state_25044__$1 = state_25044;
var statearr_25098_25149 = state_25044__$1;
(statearr_25098_25149[(2)] = null);

(statearr_25098_25149[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25045 === (8))){
var inst_24946 = (state_25044[(8)]);
var inst_24964 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24946);
var state_25044__$1 = state_25044;
var statearr_25099_25150 = state_25044__$1;
(statearr_25099_25150[(2)] = inst_24964);

(statearr_25099_25150[(1)] = (10));


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
});})(c__22181__auto___25104,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__22014__auto__,c__22181__auto___25104,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__22015__auto__ = null;
var cljs$core$async$mix_$_state_machine__22015__auto____0 = (function (){
var statearr_25100 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25100[(0)] = cljs$core$async$mix_$_state_machine__22015__auto__);

(statearr_25100[(1)] = (1));

return statearr_25100;
});
var cljs$core$async$mix_$_state_machine__22015__auto____1 = (function (state_25044){
while(true){
var ret_value__22016__auto__ = (function (){try{while(true){
var result__22017__auto__ = switch__22014__auto__.call(null,state_25044);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22017__auto__;
}
break;
}
}catch (e25101){if((e25101 instanceof Object)){
var ex__22018__auto__ = e25101;
var statearr_25102_25151 = state_25044;
(statearr_25102_25151[(5)] = ex__22018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25044);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25101;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25152 = state_25044;
state_25044 = G__25152;
continue;
} else {
return ret_value__22016__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__22015__auto__ = function(state_25044){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__22015__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__22015__auto____1.call(this,state_25044);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__22015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__22015__auto____0;
cljs$core$async$mix_$_state_machine__22015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__22015__auto____1;
return cljs$core$async$mix_$_state_machine__22015__auto__;
})()
;})(switch__22014__auto__,c__22181__auto___25104,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__22183__auto__ = (function (){var statearr_25103 = f__22182__auto__.call(null);
(statearr_25103[(6)] = c__22181__auto___25104);

return statearr_25103;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22183__auto__);
});})(c__22181__auto___25104,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
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
return m__4434__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
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
return m__4434__auto__.call(null,p,v,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__25154 = arguments.length;
switch (G__25154) {
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
return m__4434__auto__.call(null,p);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
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
return m__4434__auto__.call(null,p,v);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
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
var G__25158 = arguments.length;
switch (G__25158) {
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
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4131__auto__,mults){
return (function (p1__25156_SHARP_){
if(cljs.core.truth_(p1__25156_SHARP_.call(null,topic))){
return p1__25156_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__25156_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25159 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25159 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta25160){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta25160 = meta25160;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25159.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25161,meta25160__$1){
var self__ = this;
var _25161__$1 = this;
return (new cljs.core.async.t_cljs$core$async25159(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta25160__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25159.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25161){
var self__ = this;
var _25161__$1 = this;
return self__.meta25160;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25159.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25159.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25159.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25159.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25159.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25159.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25159.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25159.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta25160","meta25160",975621149,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25159.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25159.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25159";

cljs.core.async.t_cljs$core$async25159.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25159");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25159.
 */
cljs.core.async.__GT_t_cljs$core$async25159 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async25159(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25160){
return (new cljs.core.async.t_cljs$core$async25159(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25160));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async25159(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22181__auto___25279 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22181__auto___25279,mults,ensure_mult,p){
return (function (){
var f__22182__auto__ = (function (){var switch__22014__auto__ = ((function (c__22181__auto___25279,mults,ensure_mult,p){
return (function (state_25233){
var state_val_25234 = (state_25233[(1)]);
if((state_val_25234 === (7))){
var inst_25229 = (state_25233[(2)]);
var state_25233__$1 = state_25233;
var statearr_25235_25280 = state_25233__$1;
(statearr_25235_25280[(2)] = inst_25229);

(statearr_25235_25280[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25234 === (20))){
var state_25233__$1 = state_25233;
var statearr_25236_25281 = state_25233__$1;
(statearr_25236_25281[(2)] = null);

(statearr_25236_25281[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25234 === (1))){
var state_25233__$1 = state_25233;
var statearr_25237_25282 = state_25233__$1;
(statearr_25237_25282[(2)] = null);

(statearr_25237_25282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25234 === (24))){
var inst_25212 = (state_25233[(7)]);
var inst_25221 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_25212);
var state_25233__$1 = state_25233;
var statearr_25238_25283 = state_25233__$1;
(statearr_25238_25283[(2)] = inst_25221);

(statearr_25238_25283[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25234 === (4))){
var inst_25164 = (state_25233[(8)]);
var inst_25164__$1 = (state_25233[(2)]);
var inst_25165 = (inst_25164__$1 == null);
var state_25233__$1 = (function (){var statearr_25239 = state_25233;
(statearr_25239[(8)] = inst_25164__$1);

return statearr_25239;
})();
if(cljs.core.truth_(inst_25165)){
var statearr_25240_25284 = state_25233__$1;
(statearr_25240_25284[(1)] = (5));

} else {
var statearr_25241_25285 = state_25233__$1;
(statearr_25241_25285[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25234 === (15))){
var inst_25206 = (state_25233[(2)]);
var state_25233__$1 = state_25233;
var statearr_25242_25286 = state_25233__$1;
(statearr_25242_25286[(2)] = inst_25206);

(statearr_25242_25286[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25234 === (21))){
var inst_25226 = (state_25233[(2)]);
var state_25233__$1 = (function (){var statearr_25243 = state_25233;
(statearr_25243[(9)] = inst_25226);

return statearr_25243;
})();
var statearr_25244_25287 = state_25233__$1;
(statearr_25244_25287[(2)] = null);

(statearr_25244_25287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25234 === (13))){
var inst_25188 = (state_25233[(10)]);
var inst_25190 = cljs.core.chunked_seq_QMARK_.call(null,inst_25188);
var state_25233__$1 = state_25233;
if(inst_25190){
var statearr_25245_25288 = state_25233__$1;
(statearr_25245_25288[(1)] = (16));

} else {
var statearr_25246_25289 = state_25233__$1;
(statearr_25246_25289[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25234 === (22))){
var inst_25218 = (state_25233[(2)]);
var state_25233__$1 = state_25233;
if(cljs.core.truth_(inst_25218)){
var statearr_25247_25290 = state_25233__$1;
(statearr_25247_25290[(1)] = (23));

} else {
var statearr_25248_25291 = state_25233__$1;
(statearr_25248_25291[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25234 === (6))){
var inst_25214 = (state_25233[(11)]);
var inst_25164 = (state_25233[(8)]);
var inst_25212 = (state_25233[(7)]);
var inst_25212__$1 = topic_fn.call(null,inst_25164);
var inst_25213 = cljs.core.deref.call(null,mults);
var inst_25214__$1 = cljs.core.get.call(null,inst_25213,inst_25212__$1);
var state_25233__$1 = (function (){var statearr_25249 = state_25233;
(statearr_25249[(11)] = inst_25214__$1);

(statearr_25249[(7)] = inst_25212__$1);

return statearr_25249;
})();
if(cljs.core.truth_(inst_25214__$1)){
var statearr_25250_25292 = state_25233__$1;
(statearr_25250_25292[(1)] = (19));

} else {
var statearr_25251_25293 = state_25233__$1;
(statearr_25251_25293[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25234 === (25))){
var inst_25223 = (state_25233[(2)]);
var state_25233__$1 = state_25233;
var statearr_25252_25294 = state_25233__$1;
(statearr_25252_25294[(2)] = inst_25223);

(statearr_25252_25294[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25234 === (17))){
var inst_25188 = (state_25233[(10)]);
var inst_25197 = cljs.core.first.call(null,inst_25188);
var inst_25198 = cljs.core.async.muxch_STAR_.call(null,inst_25197);
var inst_25199 = cljs.core.async.close_BANG_.call(null,inst_25198);
var inst_25200 = cljs.core.next.call(null,inst_25188);
var inst_25174 = inst_25200;
var inst_25175 = null;
var inst_25176 = (0);
var inst_25177 = (0);
var state_25233__$1 = (function (){var statearr_25253 = state_25233;
(statearr_25253[(12)] = inst_25199);

(statearr_25253[(13)] = inst_25175);

(statearr_25253[(14)] = inst_25177);

(statearr_25253[(15)] = inst_25174);

(statearr_25253[(16)] = inst_25176);

return statearr_25253;
})();
var statearr_25254_25295 = state_25233__$1;
(statearr_25254_25295[(2)] = null);

(statearr_25254_25295[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25234 === (3))){
var inst_25231 = (state_25233[(2)]);
var state_25233__$1 = state_25233;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25233__$1,inst_25231);
} else {
if((state_val_25234 === (12))){
var inst_25208 = (state_25233[(2)]);
var state_25233__$1 = state_25233;
var statearr_25255_25296 = state_25233__$1;
(statearr_25255_25296[(2)] = inst_25208);

(statearr_25255_25296[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25234 === (2))){
var state_25233__$1 = state_25233;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25233__$1,(4),ch);
} else {
if((state_val_25234 === (23))){
var state_25233__$1 = state_25233;
var statearr_25256_25297 = state_25233__$1;
(statearr_25256_25297[(2)] = null);

(statearr_25256_25297[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25234 === (19))){
var inst_25214 = (state_25233[(11)]);
var inst_25164 = (state_25233[(8)]);
var inst_25216 = cljs.core.async.muxch_STAR_.call(null,inst_25214);
var state_25233__$1 = state_25233;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25233__$1,(22),inst_25216,inst_25164);
} else {
if((state_val_25234 === (11))){
var inst_25188 = (state_25233[(10)]);
var inst_25174 = (state_25233[(15)]);
var inst_25188__$1 = cljs.core.seq.call(null,inst_25174);
var state_25233__$1 = (function (){var statearr_25257 = state_25233;
(statearr_25257[(10)] = inst_25188__$1);

return statearr_25257;
})();
if(inst_25188__$1){
var statearr_25258_25298 = state_25233__$1;
(statearr_25258_25298[(1)] = (13));

} else {
var statearr_25259_25299 = state_25233__$1;
(statearr_25259_25299[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25234 === (9))){
var inst_25210 = (state_25233[(2)]);
var state_25233__$1 = state_25233;
var statearr_25260_25300 = state_25233__$1;
(statearr_25260_25300[(2)] = inst_25210);

(statearr_25260_25300[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25234 === (5))){
var inst_25171 = cljs.core.deref.call(null,mults);
var inst_25172 = cljs.core.vals.call(null,inst_25171);
var inst_25173 = cljs.core.seq.call(null,inst_25172);
var inst_25174 = inst_25173;
var inst_25175 = null;
var inst_25176 = (0);
var inst_25177 = (0);
var state_25233__$1 = (function (){var statearr_25261 = state_25233;
(statearr_25261[(13)] = inst_25175);

(statearr_25261[(14)] = inst_25177);

(statearr_25261[(15)] = inst_25174);

(statearr_25261[(16)] = inst_25176);

return statearr_25261;
})();
var statearr_25262_25301 = state_25233__$1;
(statearr_25262_25301[(2)] = null);

(statearr_25262_25301[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25234 === (14))){
var state_25233__$1 = state_25233;
var statearr_25266_25302 = state_25233__$1;
(statearr_25266_25302[(2)] = null);

(statearr_25266_25302[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25234 === (16))){
var inst_25188 = (state_25233[(10)]);
var inst_25192 = cljs.core.chunk_first.call(null,inst_25188);
var inst_25193 = cljs.core.chunk_rest.call(null,inst_25188);
var inst_25194 = cljs.core.count.call(null,inst_25192);
var inst_25174 = inst_25193;
var inst_25175 = inst_25192;
var inst_25176 = inst_25194;
var inst_25177 = (0);
var state_25233__$1 = (function (){var statearr_25267 = state_25233;
(statearr_25267[(13)] = inst_25175);

(statearr_25267[(14)] = inst_25177);

(statearr_25267[(15)] = inst_25174);

(statearr_25267[(16)] = inst_25176);

return statearr_25267;
})();
var statearr_25268_25303 = state_25233__$1;
(statearr_25268_25303[(2)] = null);

(statearr_25268_25303[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25234 === (10))){
var inst_25175 = (state_25233[(13)]);
var inst_25177 = (state_25233[(14)]);
var inst_25174 = (state_25233[(15)]);
var inst_25176 = (state_25233[(16)]);
var inst_25182 = cljs.core._nth.call(null,inst_25175,inst_25177);
var inst_25183 = cljs.core.async.muxch_STAR_.call(null,inst_25182);
var inst_25184 = cljs.core.async.close_BANG_.call(null,inst_25183);
var inst_25185 = (inst_25177 + (1));
var tmp25263 = inst_25175;
var tmp25264 = inst_25174;
var tmp25265 = inst_25176;
var inst_25174__$1 = tmp25264;
var inst_25175__$1 = tmp25263;
var inst_25176__$1 = tmp25265;
var inst_25177__$1 = inst_25185;
var state_25233__$1 = (function (){var statearr_25269 = state_25233;
(statearr_25269[(17)] = inst_25184);

(statearr_25269[(13)] = inst_25175__$1);

(statearr_25269[(14)] = inst_25177__$1);

(statearr_25269[(15)] = inst_25174__$1);

(statearr_25269[(16)] = inst_25176__$1);

return statearr_25269;
})();
var statearr_25270_25304 = state_25233__$1;
(statearr_25270_25304[(2)] = null);

(statearr_25270_25304[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25234 === (18))){
var inst_25203 = (state_25233[(2)]);
var state_25233__$1 = state_25233;
var statearr_25271_25305 = state_25233__$1;
(statearr_25271_25305[(2)] = inst_25203);

(statearr_25271_25305[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25234 === (8))){
var inst_25177 = (state_25233[(14)]);
var inst_25176 = (state_25233[(16)]);
var inst_25179 = (inst_25177 < inst_25176);
var inst_25180 = inst_25179;
var state_25233__$1 = state_25233;
if(cljs.core.truth_(inst_25180)){
var statearr_25272_25306 = state_25233__$1;
(statearr_25272_25306[(1)] = (10));

} else {
var statearr_25273_25307 = state_25233__$1;
(statearr_25273_25307[(1)] = (11));

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
});})(c__22181__auto___25279,mults,ensure_mult,p))
;
return ((function (switch__22014__auto__,c__22181__auto___25279,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__22015__auto__ = null;
var cljs$core$async$state_machine__22015__auto____0 = (function (){
var statearr_25274 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25274[(0)] = cljs$core$async$state_machine__22015__auto__);

(statearr_25274[(1)] = (1));

return statearr_25274;
});
var cljs$core$async$state_machine__22015__auto____1 = (function (state_25233){
while(true){
var ret_value__22016__auto__ = (function (){try{while(true){
var result__22017__auto__ = switch__22014__auto__.call(null,state_25233);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22017__auto__;
}
break;
}
}catch (e25275){if((e25275 instanceof Object)){
var ex__22018__auto__ = e25275;
var statearr_25276_25308 = state_25233;
(statearr_25276_25308[(5)] = ex__22018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25233);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25275;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25309 = state_25233;
state_25233 = G__25309;
continue;
} else {
return ret_value__22016__auto__;
}
break;
}
});
cljs$core$async$state_machine__22015__auto__ = function(state_25233){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22015__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22015__auto____1.call(this,state_25233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22015__auto____0;
cljs$core$async$state_machine__22015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22015__auto____1;
return cljs$core$async$state_machine__22015__auto__;
})()
;})(switch__22014__auto__,c__22181__auto___25279,mults,ensure_mult,p))
})();
var state__22183__auto__ = (function (){var statearr_25277 = f__22182__auto__.call(null);
(statearr_25277[(6)] = c__22181__auto___25279);

return statearr_25277;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22183__auto__);
});})(c__22181__auto___25279,mults,ensure_mult,p))
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
var G__25311 = arguments.length;
switch (G__25311) {
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
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__25314 = arguments.length;
switch (G__25314) {
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
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
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
var G__25317 = arguments.length;
switch (G__25317) {
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
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__22181__auto___25384 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22181__auto___25384,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__22182__auto__ = (function (){var switch__22014__auto__ = ((function (c__22181__auto___25384,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_25356){
var state_val_25357 = (state_25356[(1)]);
if((state_val_25357 === (7))){
var state_25356__$1 = state_25356;
var statearr_25358_25385 = state_25356__$1;
(statearr_25358_25385[(2)] = null);

(statearr_25358_25385[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25357 === (1))){
var state_25356__$1 = state_25356;
var statearr_25359_25386 = state_25356__$1;
(statearr_25359_25386[(2)] = null);

(statearr_25359_25386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25357 === (4))){
var inst_25320 = (state_25356[(7)]);
var inst_25322 = (inst_25320 < cnt);
var state_25356__$1 = state_25356;
if(cljs.core.truth_(inst_25322)){
var statearr_25360_25387 = state_25356__$1;
(statearr_25360_25387[(1)] = (6));

} else {
var statearr_25361_25388 = state_25356__$1;
(statearr_25361_25388[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25357 === (15))){
var inst_25352 = (state_25356[(2)]);
var state_25356__$1 = state_25356;
var statearr_25362_25389 = state_25356__$1;
(statearr_25362_25389[(2)] = inst_25352);

(statearr_25362_25389[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25357 === (13))){
var inst_25345 = cljs.core.async.close_BANG_.call(null,out);
var state_25356__$1 = state_25356;
var statearr_25363_25390 = state_25356__$1;
(statearr_25363_25390[(2)] = inst_25345);

(statearr_25363_25390[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25357 === (6))){
var state_25356__$1 = state_25356;
var statearr_25364_25391 = state_25356__$1;
(statearr_25364_25391[(2)] = null);

(statearr_25364_25391[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25357 === (3))){
var inst_25354 = (state_25356[(2)]);
var state_25356__$1 = state_25356;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25356__$1,inst_25354);
} else {
if((state_val_25357 === (12))){
var inst_25342 = (state_25356[(8)]);
var inst_25342__$1 = (state_25356[(2)]);
var inst_25343 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_25342__$1);
var state_25356__$1 = (function (){var statearr_25365 = state_25356;
(statearr_25365[(8)] = inst_25342__$1);

return statearr_25365;
})();
if(cljs.core.truth_(inst_25343)){
var statearr_25366_25392 = state_25356__$1;
(statearr_25366_25392[(1)] = (13));

} else {
var statearr_25367_25393 = state_25356__$1;
(statearr_25367_25393[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25357 === (2))){
var inst_25319 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_25320 = (0);
var state_25356__$1 = (function (){var statearr_25368 = state_25356;
(statearr_25368[(7)] = inst_25320);

(statearr_25368[(9)] = inst_25319);

return statearr_25368;
})();
var statearr_25369_25394 = state_25356__$1;
(statearr_25369_25394[(2)] = null);

(statearr_25369_25394[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25357 === (11))){
var inst_25320 = (state_25356[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25356,(10),Object,null,(9));
var inst_25329 = chs__$1.call(null,inst_25320);
var inst_25330 = done.call(null,inst_25320);
var inst_25331 = cljs.core.async.take_BANG_.call(null,inst_25329,inst_25330);
var state_25356__$1 = state_25356;
var statearr_25370_25395 = state_25356__$1;
(statearr_25370_25395[(2)] = inst_25331);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25356__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25357 === (9))){
var inst_25320 = (state_25356[(7)]);
var inst_25333 = (state_25356[(2)]);
var inst_25334 = (inst_25320 + (1));
var inst_25320__$1 = inst_25334;
var state_25356__$1 = (function (){var statearr_25371 = state_25356;
(statearr_25371[(10)] = inst_25333);

(statearr_25371[(7)] = inst_25320__$1);

return statearr_25371;
})();
var statearr_25372_25396 = state_25356__$1;
(statearr_25372_25396[(2)] = null);

(statearr_25372_25396[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25357 === (5))){
var inst_25340 = (state_25356[(2)]);
var state_25356__$1 = (function (){var statearr_25373 = state_25356;
(statearr_25373[(11)] = inst_25340);

return statearr_25373;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25356__$1,(12),dchan);
} else {
if((state_val_25357 === (14))){
var inst_25342 = (state_25356[(8)]);
var inst_25347 = cljs.core.apply.call(null,f,inst_25342);
var state_25356__$1 = state_25356;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25356__$1,(16),out,inst_25347);
} else {
if((state_val_25357 === (16))){
var inst_25349 = (state_25356[(2)]);
var state_25356__$1 = (function (){var statearr_25374 = state_25356;
(statearr_25374[(12)] = inst_25349);

return statearr_25374;
})();
var statearr_25375_25397 = state_25356__$1;
(statearr_25375_25397[(2)] = null);

(statearr_25375_25397[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25357 === (10))){
var inst_25324 = (state_25356[(2)]);
var inst_25325 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_25356__$1 = (function (){var statearr_25376 = state_25356;
(statearr_25376[(13)] = inst_25324);

return statearr_25376;
})();
var statearr_25377_25398 = state_25356__$1;
(statearr_25377_25398[(2)] = inst_25325);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25356__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25357 === (8))){
var inst_25338 = (state_25356[(2)]);
var state_25356__$1 = state_25356;
var statearr_25378_25399 = state_25356__$1;
(statearr_25378_25399[(2)] = inst_25338);

(statearr_25378_25399[(1)] = (5));


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
});})(c__22181__auto___25384,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__22014__auto__,c__22181__auto___25384,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__22015__auto__ = null;
var cljs$core$async$state_machine__22015__auto____0 = (function (){
var statearr_25379 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25379[(0)] = cljs$core$async$state_machine__22015__auto__);

(statearr_25379[(1)] = (1));

return statearr_25379;
});
var cljs$core$async$state_machine__22015__auto____1 = (function (state_25356){
while(true){
var ret_value__22016__auto__ = (function (){try{while(true){
var result__22017__auto__ = switch__22014__auto__.call(null,state_25356);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22017__auto__;
}
break;
}
}catch (e25380){if((e25380 instanceof Object)){
var ex__22018__auto__ = e25380;
var statearr_25381_25400 = state_25356;
(statearr_25381_25400[(5)] = ex__22018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25356);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25380;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25401 = state_25356;
state_25356 = G__25401;
continue;
} else {
return ret_value__22016__auto__;
}
break;
}
});
cljs$core$async$state_machine__22015__auto__ = function(state_25356){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22015__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22015__auto____1.call(this,state_25356);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22015__auto____0;
cljs$core$async$state_machine__22015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22015__auto____1;
return cljs$core$async$state_machine__22015__auto__;
})()
;})(switch__22014__auto__,c__22181__auto___25384,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__22183__auto__ = (function (){var statearr_25382 = f__22182__auto__.call(null);
(statearr_25382[(6)] = c__22181__auto___25384);

return statearr_25382;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22183__auto__);
});})(c__22181__auto___25384,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__25404 = arguments.length;
switch (G__25404) {
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
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22181__auto___25458 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22181__auto___25458,out){
return (function (){
var f__22182__auto__ = (function (){var switch__22014__auto__ = ((function (c__22181__auto___25458,out){
return (function (state_25436){
var state_val_25437 = (state_25436[(1)]);
if((state_val_25437 === (7))){
var inst_25415 = (state_25436[(7)]);
var inst_25416 = (state_25436[(8)]);
var inst_25415__$1 = (state_25436[(2)]);
var inst_25416__$1 = cljs.core.nth.call(null,inst_25415__$1,(0),null);
var inst_25417 = cljs.core.nth.call(null,inst_25415__$1,(1),null);
var inst_25418 = (inst_25416__$1 == null);
var state_25436__$1 = (function (){var statearr_25438 = state_25436;
(statearr_25438[(9)] = inst_25417);

(statearr_25438[(7)] = inst_25415__$1);

(statearr_25438[(8)] = inst_25416__$1);

return statearr_25438;
})();
if(cljs.core.truth_(inst_25418)){
var statearr_25439_25459 = state_25436__$1;
(statearr_25439_25459[(1)] = (8));

} else {
var statearr_25440_25460 = state_25436__$1;
(statearr_25440_25460[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25437 === (1))){
var inst_25405 = cljs.core.vec.call(null,chs);
var inst_25406 = inst_25405;
var state_25436__$1 = (function (){var statearr_25441 = state_25436;
(statearr_25441[(10)] = inst_25406);

return statearr_25441;
})();
var statearr_25442_25461 = state_25436__$1;
(statearr_25442_25461[(2)] = null);

(statearr_25442_25461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25437 === (4))){
var inst_25406 = (state_25436[(10)]);
var state_25436__$1 = state_25436;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25436__$1,(7),inst_25406);
} else {
if((state_val_25437 === (6))){
var inst_25432 = (state_25436[(2)]);
var state_25436__$1 = state_25436;
var statearr_25443_25462 = state_25436__$1;
(statearr_25443_25462[(2)] = inst_25432);

(statearr_25443_25462[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25437 === (3))){
var inst_25434 = (state_25436[(2)]);
var state_25436__$1 = state_25436;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25436__$1,inst_25434);
} else {
if((state_val_25437 === (2))){
var inst_25406 = (state_25436[(10)]);
var inst_25408 = cljs.core.count.call(null,inst_25406);
var inst_25409 = (inst_25408 > (0));
var state_25436__$1 = state_25436;
if(cljs.core.truth_(inst_25409)){
var statearr_25445_25463 = state_25436__$1;
(statearr_25445_25463[(1)] = (4));

} else {
var statearr_25446_25464 = state_25436__$1;
(statearr_25446_25464[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25437 === (11))){
var inst_25406 = (state_25436[(10)]);
var inst_25425 = (state_25436[(2)]);
var tmp25444 = inst_25406;
var inst_25406__$1 = tmp25444;
var state_25436__$1 = (function (){var statearr_25447 = state_25436;
(statearr_25447[(11)] = inst_25425);

(statearr_25447[(10)] = inst_25406__$1);

return statearr_25447;
})();
var statearr_25448_25465 = state_25436__$1;
(statearr_25448_25465[(2)] = null);

(statearr_25448_25465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25437 === (9))){
var inst_25416 = (state_25436[(8)]);
var state_25436__$1 = state_25436;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25436__$1,(11),out,inst_25416);
} else {
if((state_val_25437 === (5))){
var inst_25430 = cljs.core.async.close_BANG_.call(null,out);
var state_25436__$1 = state_25436;
var statearr_25449_25466 = state_25436__$1;
(statearr_25449_25466[(2)] = inst_25430);

(statearr_25449_25466[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25437 === (10))){
var inst_25428 = (state_25436[(2)]);
var state_25436__$1 = state_25436;
var statearr_25450_25467 = state_25436__$1;
(statearr_25450_25467[(2)] = inst_25428);

(statearr_25450_25467[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25437 === (8))){
var inst_25406 = (state_25436[(10)]);
var inst_25417 = (state_25436[(9)]);
var inst_25415 = (state_25436[(7)]);
var inst_25416 = (state_25436[(8)]);
var inst_25420 = (function (){var cs = inst_25406;
var vec__25411 = inst_25415;
var v = inst_25416;
var c = inst_25417;
return ((function (cs,vec__25411,v,c,inst_25406,inst_25417,inst_25415,inst_25416,state_val_25437,c__22181__auto___25458,out){
return (function (p1__25402_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__25402_SHARP_);
});
;})(cs,vec__25411,v,c,inst_25406,inst_25417,inst_25415,inst_25416,state_val_25437,c__22181__auto___25458,out))
})();
var inst_25421 = cljs.core.filterv.call(null,inst_25420,inst_25406);
var inst_25406__$1 = inst_25421;
var state_25436__$1 = (function (){var statearr_25451 = state_25436;
(statearr_25451[(10)] = inst_25406__$1);

return statearr_25451;
})();
var statearr_25452_25468 = state_25436__$1;
(statearr_25452_25468[(2)] = null);

(statearr_25452_25468[(1)] = (2));


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
});})(c__22181__auto___25458,out))
;
return ((function (switch__22014__auto__,c__22181__auto___25458,out){
return (function() {
var cljs$core$async$state_machine__22015__auto__ = null;
var cljs$core$async$state_machine__22015__auto____0 = (function (){
var statearr_25453 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25453[(0)] = cljs$core$async$state_machine__22015__auto__);

(statearr_25453[(1)] = (1));

return statearr_25453;
});
var cljs$core$async$state_machine__22015__auto____1 = (function (state_25436){
while(true){
var ret_value__22016__auto__ = (function (){try{while(true){
var result__22017__auto__ = switch__22014__auto__.call(null,state_25436);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22017__auto__;
}
break;
}
}catch (e25454){if((e25454 instanceof Object)){
var ex__22018__auto__ = e25454;
var statearr_25455_25469 = state_25436;
(statearr_25455_25469[(5)] = ex__22018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25436);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25454;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25470 = state_25436;
state_25436 = G__25470;
continue;
} else {
return ret_value__22016__auto__;
}
break;
}
});
cljs$core$async$state_machine__22015__auto__ = function(state_25436){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22015__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22015__auto____1.call(this,state_25436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22015__auto____0;
cljs$core$async$state_machine__22015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22015__auto____1;
return cljs$core$async$state_machine__22015__auto__;
})()
;})(switch__22014__auto__,c__22181__auto___25458,out))
})();
var state__22183__auto__ = (function (){var statearr_25456 = f__22182__auto__.call(null);
(statearr_25456[(6)] = c__22181__auto___25458);

return statearr_25456;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22183__auto__);
});})(c__22181__auto___25458,out))
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
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__25472 = arguments.length;
switch (G__25472) {
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
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22181__auto___25517 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22181__auto___25517,out){
return (function (){
var f__22182__auto__ = (function (){var switch__22014__auto__ = ((function (c__22181__auto___25517,out){
return (function (state_25496){
var state_val_25497 = (state_25496[(1)]);
if((state_val_25497 === (7))){
var inst_25478 = (state_25496[(7)]);
var inst_25478__$1 = (state_25496[(2)]);
var inst_25479 = (inst_25478__$1 == null);
var inst_25480 = cljs.core.not.call(null,inst_25479);
var state_25496__$1 = (function (){var statearr_25498 = state_25496;
(statearr_25498[(7)] = inst_25478__$1);

return statearr_25498;
})();
if(inst_25480){
var statearr_25499_25518 = state_25496__$1;
(statearr_25499_25518[(1)] = (8));

} else {
var statearr_25500_25519 = state_25496__$1;
(statearr_25500_25519[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25497 === (1))){
var inst_25473 = (0);
var state_25496__$1 = (function (){var statearr_25501 = state_25496;
(statearr_25501[(8)] = inst_25473);

return statearr_25501;
})();
var statearr_25502_25520 = state_25496__$1;
(statearr_25502_25520[(2)] = null);

(statearr_25502_25520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25497 === (4))){
var state_25496__$1 = state_25496;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25496__$1,(7),ch);
} else {
if((state_val_25497 === (6))){
var inst_25491 = (state_25496[(2)]);
var state_25496__$1 = state_25496;
var statearr_25503_25521 = state_25496__$1;
(statearr_25503_25521[(2)] = inst_25491);

(statearr_25503_25521[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25497 === (3))){
var inst_25493 = (state_25496[(2)]);
var inst_25494 = cljs.core.async.close_BANG_.call(null,out);
var state_25496__$1 = (function (){var statearr_25504 = state_25496;
(statearr_25504[(9)] = inst_25493);

return statearr_25504;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25496__$1,inst_25494);
} else {
if((state_val_25497 === (2))){
var inst_25473 = (state_25496[(8)]);
var inst_25475 = (inst_25473 < n);
var state_25496__$1 = state_25496;
if(cljs.core.truth_(inst_25475)){
var statearr_25505_25522 = state_25496__$1;
(statearr_25505_25522[(1)] = (4));

} else {
var statearr_25506_25523 = state_25496__$1;
(statearr_25506_25523[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25497 === (11))){
var inst_25473 = (state_25496[(8)]);
var inst_25483 = (state_25496[(2)]);
var inst_25484 = (inst_25473 + (1));
var inst_25473__$1 = inst_25484;
var state_25496__$1 = (function (){var statearr_25507 = state_25496;
(statearr_25507[(10)] = inst_25483);

(statearr_25507[(8)] = inst_25473__$1);

return statearr_25507;
})();
var statearr_25508_25524 = state_25496__$1;
(statearr_25508_25524[(2)] = null);

(statearr_25508_25524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25497 === (9))){
var state_25496__$1 = state_25496;
var statearr_25509_25525 = state_25496__$1;
(statearr_25509_25525[(2)] = null);

(statearr_25509_25525[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25497 === (5))){
var state_25496__$1 = state_25496;
var statearr_25510_25526 = state_25496__$1;
(statearr_25510_25526[(2)] = null);

(statearr_25510_25526[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25497 === (10))){
var inst_25488 = (state_25496[(2)]);
var state_25496__$1 = state_25496;
var statearr_25511_25527 = state_25496__$1;
(statearr_25511_25527[(2)] = inst_25488);

(statearr_25511_25527[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25497 === (8))){
var inst_25478 = (state_25496[(7)]);
var state_25496__$1 = state_25496;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25496__$1,(11),out,inst_25478);
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
});})(c__22181__auto___25517,out))
;
return ((function (switch__22014__auto__,c__22181__auto___25517,out){
return (function() {
var cljs$core$async$state_machine__22015__auto__ = null;
var cljs$core$async$state_machine__22015__auto____0 = (function (){
var statearr_25512 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25512[(0)] = cljs$core$async$state_machine__22015__auto__);

(statearr_25512[(1)] = (1));

return statearr_25512;
});
var cljs$core$async$state_machine__22015__auto____1 = (function (state_25496){
while(true){
var ret_value__22016__auto__ = (function (){try{while(true){
var result__22017__auto__ = switch__22014__auto__.call(null,state_25496);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22017__auto__;
}
break;
}
}catch (e25513){if((e25513 instanceof Object)){
var ex__22018__auto__ = e25513;
var statearr_25514_25528 = state_25496;
(statearr_25514_25528[(5)] = ex__22018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25496);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25513;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25529 = state_25496;
state_25496 = G__25529;
continue;
} else {
return ret_value__22016__auto__;
}
break;
}
});
cljs$core$async$state_machine__22015__auto__ = function(state_25496){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22015__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22015__auto____1.call(this,state_25496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22015__auto____0;
cljs$core$async$state_machine__22015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22015__auto____1;
return cljs$core$async$state_machine__22015__auto__;
})()
;})(switch__22014__auto__,c__22181__auto___25517,out))
})();
var state__22183__auto__ = (function (){var statearr_25515 = f__22182__auto__.call(null);
(statearr_25515[(6)] = c__22181__auto___25517);

return statearr_25515;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22183__auto__);
});})(c__22181__auto___25517,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25531 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25531 = (function (f,ch,meta25532){
this.f = f;
this.ch = ch;
this.meta25532 = meta25532;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25531.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25533,meta25532__$1){
var self__ = this;
var _25533__$1 = this;
return (new cljs.core.async.t_cljs$core$async25531(self__.f,self__.ch,meta25532__$1));
});

cljs.core.async.t_cljs$core$async25531.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25533){
var self__ = this;
var _25533__$1 = this;
return self__.meta25532;
});

cljs.core.async.t_cljs$core$async25531.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25531.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25531.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25531.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25531.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25534 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25534 = (function (f,ch,meta25532,_,fn1,meta25535){
this.f = f;
this.ch = ch;
this.meta25532 = meta25532;
this._ = _;
this.fn1 = fn1;
this.meta25535 = meta25535;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25534.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25536,meta25535__$1){
var self__ = this;
var _25536__$1 = this;
return (new cljs.core.async.t_cljs$core$async25534(self__.f,self__.ch,self__.meta25532,self__._,self__.fn1,meta25535__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async25534.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25536){
var self__ = this;
var _25536__$1 = this;
return self__.meta25535;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25534.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25534.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25534.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25534.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__25530_SHARP_){
return f1.call(null,(((p1__25530_SHARP_ == null))?null:self__.f.call(null,p1__25530_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async25534.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25532","meta25532",-1792122272,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async25531","cljs.core.async/t_cljs$core$async25531",-1061538639,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta25535","meta25535",917254940,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25534.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25534.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25534";

cljs.core.async.t_cljs$core$async25534.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25534");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25534.
 */
cljs.core.async.__GT_t_cljs$core$async25534 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25534(f__$1,ch__$1,meta25532__$1,___$2,fn1__$1,meta25535){
return (new cljs.core.async.t_cljs$core$async25534(f__$1,ch__$1,meta25532__$1,___$2,fn1__$1,meta25535));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async25534(self__.f,self__.ch,self__.meta25532,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async25531.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25531.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async25531.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25532","meta25532",-1792122272,null)], null);
});

cljs.core.async.t_cljs$core$async25531.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25531.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25531";

cljs.core.async.t_cljs$core$async25531.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25531");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25531.
 */
cljs.core.async.__GT_t_cljs$core$async25531 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25531(f__$1,ch__$1,meta25532){
return (new cljs.core.async.t_cljs$core$async25531(f__$1,ch__$1,meta25532));
});

}

return (new cljs.core.async.t_cljs$core$async25531(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25537 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25537 = (function (f,ch,meta25538){
this.f = f;
this.ch = ch;
this.meta25538 = meta25538;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25537.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25539,meta25538__$1){
var self__ = this;
var _25539__$1 = this;
return (new cljs.core.async.t_cljs$core$async25537(self__.f,self__.ch,meta25538__$1));
});

cljs.core.async.t_cljs$core$async25537.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25539){
var self__ = this;
var _25539__$1 = this;
return self__.meta25538;
});

cljs.core.async.t_cljs$core$async25537.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25537.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25537.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25537.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25537.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25537.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async25537.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25538","meta25538",1888087923,null)], null);
});

cljs.core.async.t_cljs$core$async25537.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25537.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25537";

cljs.core.async.t_cljs$core$async25537.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25537");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25537.
 */
cljs.core.async.__GT_t_cljs$core$async25537 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async25537(f__$1,ch__$1,meta25538){
return (new cljs.core.async.t_cljs$core$async25537(f__$1,ch__$1,meta25538));
});

}

return (new cljs.core.async.t_cljs$core$async25537(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25540 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25540 = (function (p,ch,meta25541){
this.p = p;
this.ch = ch;
this.meta25541 = meta25541;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25540.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25542,meta25541__$1){
var self__ = this;
var _25542__$1 = this;
return (new cljs.core.async.t_cljs$core$async25540(self__.p,self__.ch,meta25541__$1));
});

cljs.core.async.t_cljs$core$async25540.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25542){
var self__ = this;
var _25542__$1 = this;
return self__.meta25541;
});

cljs.core.async.t_cljs$core$async25540.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25540.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25540.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25540.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25540.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25540.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25540.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async25540.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25541","meta25541",-854524080,null)], null);
});

cljs.core.async.t_cljs$core$async25540.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25540.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25540";

cljs.core.async.t_cljs$core$async25540.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25540");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25540.
 */
cljs.core.async.__GT_t_cljs$core$async25540 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async25540(p__$1,ch__$1,meta25541){
return (new cljs.core.async.t_cljs$core$async25540(p__$1,ch__$1,meta25541));
});

}

return (new cljs.core.async.t_cljs$core$async25540(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__25544 = arguments.length;
switch (G__25544) {
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
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22181__auto___25584 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22181__auto___25584,out){
return (function (){
var f__22182__auto__ = (function (){var switch__22014__auto__ = ((function (c__22181__auto___25584,out){
return (function (state_25565){
var state_val_25566 = (state_25565[(1)]);
if((state_val_25566 === (7))){
var inst_25561 = (state_25565[(2)]);
var state_25565__$1 = state_25565;
var statearr_25567_25585 = state_25565__$1;
(statearr_25567_25585[(2)] = inst_25561);

(statearr_25567_25585[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25566 === (1))){
var state_25565__$1 = state_25565;
var statearr_25568_25586 = state_25565__$1;
(statearr_25568_25586[(2)] = null);

(statearr_25568_25586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25566 === (4))){
var inst_25547 = (state_25565[(7)]);
var inst_25547__$1 = (state_25565[(2)]);
var inst_25548 = (inst_25547__$1 == null);
var state_25565__$1 = (function (){var statearr_25569 = state_25565;
(statearr_25569[(7)] = inst_25547__$1);

return statearr_25569;
})();
if(cljs.core.truth_(inst_25548)){
var statearr_25570_25587 = state_25565__$1;
(statearr_25570_25587[(1)] = (5));

} else {
var statearr_25571_25588 = state_25565__$1;
(statearr_25571_25588[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25566 === (6))){
var inst_25547 = (state_25565[(7)]);
var inst_25552 = p.call(null,inst_25547);
var state_25565__$1 = state_25565;
if(cljs.core.truth_(inst_25552)){
var statearr_25572_25589 = state_25565__$1;
(statearr_25572_25589[(1)] = (8));

} else {
var statearr_25573_25590 = state_25565__$1;
(statearr_25573_25590[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25566 === (3))){
var inst_25563 = (state_25565[(2)]);
var state_25565__$1 = state_25565;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25565__$1,inst_25563);
} else {
if((state_val_25566 === (2))){
var state_25565__$1 = state_25565;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25565__$1,(4),ch);
} else {
if((state_val_25566 === (11))){
var inst_25555 = (state_25565[(2)]);
var state_25565__$1 = state_25565;
var statearr_25574_25591 = state_25565__$1;
(statearr_25574_25591[(2)] = inst_25555);

(statearr_25574_25591[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25566 === (9))){
var state_25565__$1 = state_25565;
var statearr_25575_25592 = state_25565__$1;
(statearr_25575_25592[(2)] = null);

(statearr_25575_25592[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25566 === (5))){
var inst_25550 = cljs.core.async.close_BANG_.call(null,out);
var state_25565__$1 = state_25565;
var statearr_25576_25593 = state_25565__$1;
(statearr_25576_25593[(2)] = inst_25550);

(statearr_25576_25593[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25566 === (10))){
var inst_25558 = (state_25565[(2)]);
var state_25565__$1 = (function (){var statearr_25577 = state_25565;
(statearr_25577[(8)] = inst_25558);

return statearr_25577;
})();
var statearr_25578_25594 = state_25565__$1;
(statearr_25578_25594[(2)] = null);

(statearr_25578_25594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25566 === (8))){
var inst_25547 = (state_25565[(7)]);
var state_25565__$1 = state_25565;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25565__$1,(11),out,inst_25547);
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
});})(c__22181__auto___25584,out))
;
return ((function (switch__22014__auto__,c__22181__auto___25584,out){
return (function() {
var cljs$core$async$state_machine__22015__auto__ = null;
var cljs$core$async$state_machine__22015__auto____0 = (function (){
var statearr_25579 = [null,null,null,null,null,null,null,null,null];
(statearr_25579[(0)] = cljs$core$async$state_machine__22015__auto__);

(statearr_25579[(1)] = (1));

return statearr_25579;
});
var cljs$core$async$state_machine__22015__auto____1 = (function (state_25565){
while(true){
var ret_value__22016__auto__ = (function (){try{while(true){
var result__22017__auto__ = switch__22014__auto__.call(null,state_25565);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22017__auto__;
}
break;
}
}catch (e25580){if((e25580 instanceof Object)){
var ex__22018__auto__ = e25580;
var statearr_25581_25595 = state_25565;
(statearr_25581_25595[(5)] = ex__22018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25565);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25580;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25596 = state_25565;
state_25565 = G__25596;
continue;
} else {
return ret_value__22016__auto__;
}
break;
}
});
cljs$core$async$state_machine__22015__auto__ = function(state_25565){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22015__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22015__auto____1.call(this,state_25565);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22015__auto____0;
cljs$core$async$state_machine__22015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22015__auto____1;
return cljs$core$async$state_machine__22015__auto__;
})()
;})(switch__22014__auto__,c__22181__auto___25584,out))
})();
var state__22183__auto__ = (function (){var statearr_25582 = f__22182__auto__.call(null);
(statearr_25582[(6)] = c__22181__auto___25584);

return statearr_25582;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22183__auto__);
});})(c__22181__auto___25584,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__25598 = arguments.length;
switch (G__25598) {
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
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__22181__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22181__auto__){
return (function (){
var f__22182__auto__ = (function (){var switch__22014__auto__ = ((function (c__22181__auto__){
return (function (state_25661){
var state_val_25662 = (state_25661[(1)]);
if((state_val_25662 === (7))){
var inst_25657 = (state_25661[(2)]);
var state_25661__$1 = state_25661;
var statearr_25663_25701 = state_25661__$1;
(statearr_25663_25701[(2)] = inst_25657);

(statearr_25663_25701[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25662 === (20))){
var inst_25627 = (state_25661[(7)]);
var inst_25638 = (state_25661[(2)]);
var inst_25639 = cljs.core.next.call(null,inst_25627);
var inst_25613 = inst_25639;
var inst_25614 = null;
var inst_25615 = (0);
var inst_25616 = (0);
var state_25661__$1 = (function (){var statearr_25664 = state_25661;
(statearr_25664[(8)] = inst_25616);

(statearr_25664[(9)] = inst_25613);

(statearr_25664[(10)] = inst_25615);

(statearr_25664[(11)] = inst_25614);

(statearr_25664[(12)] = inst_25638);

return statearr_25664;
})();
var statearr_25665_25702 = state_25661__$1;
(statearr_25665_25702[(2)] = null);

(statearr_25665_25702[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25662 === (1))){
var state_25661__$1 = state_25661;
var statearr_25666_25703 = state_25661__$1;
(statearr_25666_25703[(2)] = null);

(statearr_25666_25703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25662 === (4))){
var inst_25602 = (state_25661[(13)]);
var inst_25602__$1 = (state_25661[(2)]);
var inst_25603 = (inst_25602__$1 == null);
var state_25661__$1 = (function (){var statearr_25667 = state_25661;
(statearr_25667[(13)] = inst_25602__$1);

return statearr_25667;
})();
if(cljs.core.truth_(inst_25603)){
var statearr_25668_25704 = state_25661__$1;
(statearr_25668_25704[(1)] = (5));

} else {
var statearr_25669_25705 = state_25661__$1;
(statearr_25669_25705[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25662 === (15))){
var state_25661__$1 = state_25661;
var statearr_25673_25706 = state_25661__$1;
(statearr_25673_25706[(2)] = null);

(statearr_25673_25706[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25662 === (21))){
var state_25661__$1 = state_25661;
var statearr_25674_25707 = state_25661__$1;
(statearr_25674_25707[(2)] = null);

(statearr_25674_25707[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25662 === (13))){
var inst_25616 = (state_25661[(8)]);
var inst_25613 = (state_25661[(9)]);
var inst_25615 = (state_25661[(10)]);
var inst_25614 = (state_25661[(11)]);
var inst_25623 = (state_25661[(2)]);
var inst_25624 = (inst_25616 + (1));
var tmp25670 = inst_25613;
var tmp25671 = inst_25615;
var tmp25672 = inst_25614;
var inst_25613__$1 = tmp25670;
var inst_25614__$1 = tmp25672;
var inst_25615__$1 = tmp25671;
var inst_25616__$1 = inst_25624;
var state_25661__$1 = (function (){var statearr_25675 = state_25661;
(statearr_25675[(8)] = inst_25616__$1);

(statearr_25675[(9)] = inst_25613__$1);

(statearr_25675[(10)] = inst_25615__$1);

(statearr_25675[(11)] = inst_25614__$1);

(statearr_25675[(14)] = inst_25623);

return statearr_25675;
})();
var statearr_25676_25708 = state_25661__$1;
(statearr_25676_25708[(2)] = null);

(statearr_25676_25708[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25662 === (22))){
var state_25661__$1 = state_25661;
var statearr_25677_25709 = state_25661__$1;
(statearr_25677_25709[(2)] = null);

(statearr_25677_25709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25662 === (6))){
var inst_25602 = (state_25661[(13)]);
var inst_25611 = f.call(null,inst_25602);
var inst_25612 = cljs.core.seq.call(null,inst_25611);
var inst_25613 = inst_25612;
var inst_25614 = null;
var inst_25615 = (0);
var inst_25616 = (0);
var state_25661__$1 = (function (){var statearr_25678 = state_25661;
(statearr_25678[(8)] = inst_25616);

(statearr_25678[(9)] = inst_25613);

(statearr_25678[(10)] = inst_25615);

(statearr_25678[(11)] = inst_25614);

return statearr_25678;
})();
var statearr_25679_25710 = state_25661__$1;
(statearr_25679_25710[(2)] = null);

(statearr_25679_25710[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25662 === (17))){
var inst_25627 = (state_25661[(7)]);
var inst_25631 = cljs.core.chunk_first.call(null,inst_25627);
var inst_25632 = cljs.core.chunk_rest.call(null,inst_25627);
var inst_25633 = cljs.core.count.call(null,inst_25631);
var inst_25613 = inst_25632;
var inst_25614 = inst_25631;
var inst_25615 = inst_25633;
var inst_25616 = (0);
var state_25661__$1 = (function (){var statearr_25680 = state_25661;
(statearr_25680[(8)] = inst_25616);

(statearr_25680[(9)] = inst_25613);

(statearr_25680[(10)] = inst_25615);

(statearr_25680[(11)] = inst_25614);

return statearr_25680;
})();
var statearr_25681_25711 = state_25661__$1;
(statearr_25681_25711[(2)] = null);

(statearr_25681_25711[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25662 === (3))){
var inst_25659 = (state_25661[(2)]);
var state_25661__$1 = state_25661;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25661__$1,inst_25659);
} else {
if((state_val_25662 === (12))){
var inst_25647 = (state_25661[(2)]);
var state_25661__$1 = state_25661;
var statearr_25682_25712 = state_25661__$1;
(statearr_25682_25712[(2)] = inst_25647);

(statearr_25682_25712[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25662 === (2))){
var state_25661__$1 = state_25661;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25661__$1,(4),in$);
} else {
if((state_val_25662 === (23))){
var inst_25655 = (state_25661[(2)]);
var state_25661__$1 = state_25661;
var statearr_25683_25713 = state_25661__$1;
(statearr_25683_25713[(2)] = inst_25655);

(statearr_25683_25713[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25662 === (19))){
var inst_25642 = (state_25661[(2)]);
var state_25661__$1 = state_25661;
var statearr_25684_25714 = state_25661__$1;
(statearr_25684_25714[(2)] = inst_25642);

(statearr_25684_25714[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25662 === (11))){
var inst_25613 = (state_25661[(9)]);
var inst_25627 = (state_25661[(7)]);
var inst_25627__$1 = cljs.core.seq.call(null,inst_25613);
var state_25661__$1 = (function (){var statearr_25685 = state_25661;
(statearr_25685[(7)] = inst_25627__$1);

return statearr_25685;
})();
if(inst_25627__$1){
var statearr_25686_25715 = state_25661__$1;
(statearr_25686_25715[(1)] = (14));

} else {
var statearr_25687_25716 = state_25661__$1;
(statearr_25687_25716[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25662 === (9))){
var inst_25649 = (state_25661[(2)]);
var inst_25650 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_25661__$1 = (function (){var statearr_25688 = state_25661;
(statearr_25688[(15)] = inst_25649);

return statearr_25688;
})();
if(cljs.core.truth_(inst_25650)){
var statearr_25689_25717 = state_25661__$1;
(statearr_25689_25717[(1)] = (21));

} else {
var statearr_25690_25718 = state_25661__$1;
(statearr_25690_25718[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25662 === (5))){
var inst_25605 = cljs.core.async.close_BANG_.call(null,out);
var state_25661__$1 = state_25661;
var statearr_25691_25719 = state_25661__$1;
(statearr_25691_25719[(2)] = inst_25605);

(statearr_25691_25719[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25662 === (14))){
var inst_25627 = (state_25661[(7)]);
var inst_25629 = cljs.core.chunked_seq_QMARK_.call(null,inst_25627);
var state_25661__$1 = state_25661;
if(inst_25629){
var statearr_25692_25720 = state_25661__$1;
(statearr_25692_25720[(1)] = (17));

} else {
var statearr_25693_25721 = state_25661__$1;
(statearr_25693_25721[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25662 === (16))){
var inst_25645 = (state_25661[(2)]);
var state_25661__$1 = state_25661;
var statearr_25694_25722 = state_25661__$1;
(statearr_25694_25722[(2)] = inst_25645);

(statearr_25694_25722[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25662 === (10))){
var inst_25616 = (state_25661[(8)]);
var inst_25614 = (state_25661[(11)]);
var inst_25621 = cljs.core._nth.call(null,inst_25614,inst_25616);
var state_25661__$1 = state_25661;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25661__$1,(13),out,inst_25621);
} else {
if((state_val_25662 === (18))){
var inst_25627 = (state_25661[(7)]);
var inst_25636 = cljs.core.first.call(null,inst_25627);
var state_25661__$1 = state_25661;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25661__$1,(20),out,inst_25636);
} else {
if((state_val_25662 === (8))){
var inst_25616 = (state_25661[(8)]);
var inst_25615 = (state_25661[(10)]);
var inst_25618 = (inst_25616 < inst_25615);
var inst_25619 = inst_25618;
var state_25661__$1 = state_25661;
if(cljs.core.truth_(inst_25619)){
var statearr_25695_25723 = state_25661__$1;
(statearr_25695_25723[(1)] = (10));

} else {
var statearr_25696_25724 = state_25661__$1;
(statearr_25696_25724[(1)] = (11));

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
});})(c__22181__auto__))
;
return ((function (switch__22014__auto__,c__22181__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__22015__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__22015__auto____0 = (function (){
var statearr_25697 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25697[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__22015__auto__);

(statearr_25697[(1)] = (1));

return statearr_25697;
});
var cljs$core$async$mapcat_STAR__$_state_machine__22015__auto____1 = (function (state_25661){
while(true){
var ret_value__22016__auto__ = (function (){try{while(true){
var result__22017__auto__ = switch__22014__auto__.call(null,state_25661);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22017__auto__;
}
break;
}
}catch (e25698){if((e25698 instanceof Object)){
var ex__22018__auto__ = e25698;
var statearr_25699_25725 = state_25661;
(statearr_25699_25725[(5)] = ex__22018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25661);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25698;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25726 = state_25661;
state_25661 = G__25726;
continue;
} else {
return ret_value__22016__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__22015__auto__ = function(state_25661){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__22015__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__22015__auto____1.call(this,state_25661);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__22015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__22015__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__22015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__22015__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__22015__auto__;
})()
;})(switch__22014__auto__,c__22181__auto__))
})();
var state__22183__auto__ = (function (){var statearr_25700 = f__22182__auto__.call(null);
(statearr_25700[(6)] = c__22181__auto__);

return statearr_25700;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22183__auto__);
});})(c__22181__auto__))
);

return c__22181__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__25728 = arguments.length;
switch (G__25728) {
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
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__25731 = arguments.length;
switch (G__25731) {
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
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__25734 = arguments.length;
switch (G__25734) {
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
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22181__auto___25781 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22181__auto___25781,out){
return (function (){
var f__22182__auto__ = (function (){var switch__22014__auto__ = ((function (c__22181__auto___25781,out){
return (function (state_25758){
var state_val_25759 = (state_25758[(1)]);
if((state_val_25759 === (7))){
var inst_25753 = (state_25758[(2)]);
var state_25758__$1 = state_25758;
var statearr_25760_25782 = state_25758__$1;
(statearr_25760_25782[(2)] = inst_25753);

(statearr_25760_25782[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25759 === (1))){
var inst_25735 = null;
var state_25758__$1 = (function (){var statearr_25761 = state_25758;
(statearr_25761[(7)] = inst_25735);

return statearr_25761;
})();
var statearr_25762_25783 = state_25758__$1;
(statearr_25762_25783[(2)] = null);

(statearr_25762_25783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25759 === (4))){
var inst_25738 = (state_25758[(8)]);
var inst_25738__$1 = (state_25758[(2)]);
var inst_25739 = (inst_25738__$1 == null);
var inst_25740 = cljs.core.not.call(null,inst_25739);
var state_25758__$1 = (function (){var statearr_25763 = state_25758;
(statearr_25763[(8)] = inst_25738__$1);

return statearr_25763;
})();
if(inst_25740){
var statearr_25764_25784 = state_25758__$1;
(statearr_25764_25784[(1)] = (5));

} else {
var statearr_25765_25785 = state_25758__$1;
(statearr_25765_25785[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25759 === (6))){
var state_25758__$1 = state_25758;
var statearr_25766_25786 = state_25758__$1;
(statearr_25766_25786[(2)] = null);

(statearr_25766_25786[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25759 === (3))){
var inst_25755 = (state_25758[(2)]);
var inst_25756 = cljs.core.async.close_BANG_.call(null,out);
var state_25758__$1 = (function (){var statearr_25767 = state_25758;
(statearr_25767[(9)] = inst_25755);

return statearr_25767;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25758__$1,inst_25756);
} else {
if((state_val_25759 === (2))){
var state_25758__$1 = state_25758;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25758__$1,(4),ch);
} else {
if((state_val_25759 === (11))){
var inst_25738 = (state_25758[(8)]);
var inst_25747 = (state_25758[(2)]);
var inst_25735 = inst_25738;
var state_25758__$1 = (function (){var statearr_25768 = state_25758;
(statearr_25768[(10)] = inst_25747);

(statearr_25768[(7)] = inst_25735);

return statearr_25768;
})();
var statearr_25769_25787 = state_25758__$1;
(statearr_25769_25787[(2)] = null);

(statearr_25769_25787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25759 === (9))){
var inst_25738 = (state_25758[(8)]);
var state_25758__$1 = state_25758;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25758__$1,(11),out,inst_25738);
} else {
if((state_val_25759 === (5))){
var inst_25735 = (state_25758[(7)]);
var inst_25738 = (state_25758[(8)]);
var inst_25742 = cljs.core._EQ_.call(null,inst_25738,inst_25735);
var state_25758__$1 = state_25758;
if(inst_25742){
var statearr_25771_25788 = state_25758__$1;
(statearr_25771_25788[(1)] = (8));

} else {
var statearr_25772_25789 = state_25758__$1;
(statearr_25772_25789[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25759 === (10))){
var inst_25750 = (state_25758[(2)]);
var state_25758__$1 = state_25758;
var statearr_25773_25790 = state_25758__$1;
(statearr_25773_25790[(2)] = inst_25750);

(statearr_25773_25790[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25759 === (8))){
var inst_25735 = (state_25758[(7)]);
var tmp25770 = inst_25735;
var inst_25735__$1 = tmp25770;
var state_25758__$1 = (function (){var statearr_25774 = state_25758;
(statearr_25774[(7)] = inst_25735__$1);

return statearr_25774;
})();
var statearr_25775_25791 = state_25758__$1;
(statearr_25775_25791[(2)] = null);

(statearr_25775_25791[(1)] = (2));


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
});})(c__22181__auto___25781,out))
;
return ((function (switch__22014__auto__,c__22181__auto___25781,out){
return (function() {
var cljs$core$async$state_machine__22015__auto__ = null;
var cljs$core$async$state_machine__22015__auto____0 = (function (){
var statearr_25776 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25776[(0)] = cljs$core$async$state_machine__22015__auto__);

(statearr_25776[(1)] = (1));

return statearr_25776;
});
var cljs$core$async$state_machine__22015__auto____1 = (function (state_25758){
while(true){
var ret_value__22016__auto__ = (function (){try{while(true){
var result__22017__auto__ = switch__22014__auto__.call(null,state_25758);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22017__auto__;
}
break;
}
}catch (e25777){if((e25777 instanceof Object)){
var ex__22018__auto__ = e25777;
var statearr_25778_25792 = state_25758;
(statearr_25778_25792[(5)] = ex__22018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25758);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25777;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25793 = state_25758;
state_25758 = G__25793;
continue;
} else {
return ret_value__22016__auto__;
}
break;
}
});
cljs$core$async$state_machine__22015__auto__ = function(state_25758){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22015__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22015__auto____1.call(this,state_25758);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22015__auto____0;
cljs$core$async$state_machine__22015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22015__auto____1;
return cljs$core$async$state_machine__22015__auto__;
})()
;})(switch__22014__auto__,c__22181__auto___25781,out))
})();
var state__22183__auto__ = (function (){var statearr_25779 = f__22182__auto__.call(null);
(statearr_25779[(6)] = c__22181__auto___25781);

return statearr_25779;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22183__auto__);
});})(c__22181__auto___25781,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__25795 = arguments.length;
switch (G__25795) {
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
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22181__auto___25861 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22181__auto___25861,out){
return (function (){
var f__22182__auto__ = (function (){var switch__22014__auto__ = ((function (c__22181__auto___25861,out){
return (function (state_25833){
var state_val_25834 = (state_25833[(1)]);
if((state_val_25834 === (7))){
var inst_25829 = (state_25833[(2)]);
var state_25833__$1 = state_25833;
var statearr_25835_25862 = state_25833__$1;
(statearr_25835_25862[(2)] = inst_25829);

(statearr_25835_25862[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25834 === (1))){
var inst_25796 = (new Array(n));
var inst_25797 = inst_25796;
var inst_25798 = (0);
var state_25833__$1 = (function (){var statearr_25836 = state_25833;
(statearr_25836[(7)] = inst_25797);

(statearr_25836[(8)] = inst_25798);

return statearr_25836;
})();
var statearr_25837_25863 = state_25833__$1;
(statearr_25837_25863[(2)] = null);

(statearr_25837_25863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25834 === (4))){
var inst_25801 = (state_25833[(9)]);
var inst_25801__$1 = (state_25833[(2)]);
var inst_25802 = (inst_25801__$1 == null);
var inst_25803 = cljs.core.not.call(null,inst_25802);
var state_25833__$1 = (function (){var statearr_25838 = state_25833;
(statearr_25838[(9)] = inst_25801__$1);

return statearr_25838;
})();
if(inst_25803){
var statearr_25839_25864 = state_25833__$1;
(statearr_25839_25864[(1)] = (5));

} else {
var statearr_25840_25865 = state_25833__$1;
(statearr_25840_25865[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25834 === (15))){
var inst_25823 = (state_25833[(2)]);
var state_25833__$1 = state_25833;
var statearr_25841_25866 = state_25833__$1;
(statearr_25841_25866[(2)] = inst_25823);

(statearr_25841_25866[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25834 === (13))){
var state_25833__$1 = state_25833;
var statearr_25842_25867 = state_25833__$1;
(statearr_25842_25867[(2)] = null);

(statearr_25842_25867[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25834 === (6))){
var inst_25798 = (state_25833[(8)]);
var inst_25819 = (inst_25798 > (0));
var state_25833__$1 = state_25833;
if(cljs.core.truth_(inst_25819)){
var statearr_25843_25868 = state_25833__$1;
(statearr_25843_25868[(1)] = (12));

} else {
var statearr_25844_25869 = state_25833__$1;
(statearr_25844_25869[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25834 === (3))){
var inst_25831 = (state_25833[(2)]);
var state_25833__$1 = state_25833;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25833__$1,inst_25831);
} else {
if((state_val_25834 === (12))){
var inst_25797 = (state_25833[(7)]);
var inst_25821 = cljs.core.vec.call(null,inst_25797);
var state_25833__$1 = state_25833;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25833__$1,(15),out,inst_25821);
} else {
if((state_val_25834 === (2))){
var state_25833__$1 = state_25833;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25833__$1,(4),ch);
} else {
if((state_val_25834 === (11))){
var inst_25813 = (state_25833[(2)]);
var inst_25814 = (new Array(n));
var inst_25797 = inst_25814;
var inst_25798 = (0);
var state_25833__$1 = (function (){var statearr_25845 = state_25833;
(statearr_25845[(7)] = inst_25797);

(statearr_25845[(8)] = inst_25798);

(statearr_25845[(10)] = inst_25813);

return statearr_25845;
})();
var statearr_25846_25870 = state_25833__$1;
(statearr_25846_25870[(2)] = null);

(statearr_25846_25870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25834 === (9))){
var inst_25797 = (state_25833[(7)]);
var inst_25811 = cljs.core.vec.call(null,inst_25797);
var state_25833__$1 = state_25833;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25833__$1,(11),out,inst_25811);
} else {
if((state_val_25834 === (5))){
var inst_25797 = (state_25833[(7)]);
var inst_25801 = (state_25833[(9)]);
var inst_25798 = (state_25833[(8)]);
var inst_25806 = (state_25833[(11)]);
var inst_25805 = (inst_25797[inst_25798] = inst_25801);
var inst_25806__$1 = (inst_25798 + (1));
var inst_25807 = (inst_25806__$1 < n);
var state_25833__$1 = (function (){var statearr_25847 = state_25833;
(statearr_25847[(12)] = inst_25805);

(statearr_25847[(11)] = inst_25806__$1);

return statearr_25847;
})();
if(cljs.core.truth_(inst_25807)){
var statearr_25848_25871 = state_25833__$1;
(statearr_25848_25871[(1)] = (8));

} else {
var statearr_25849_25872 = state_25833__$1;
(statearr_25849_25872[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25834 === (14))){
var inst_25826 = (state_25833[(2)]);
var inst_25827 = cljs.core.async.close_BANG_.call(null,out);
var state_25833__$1 = (function (){var statearr_25851 = state_25833;
(statearr_25851[(13)] = inst_25826);

return statearr_25851;
})();
var statearr_25852_25873 = state_25833__$1;
(statearr_25852_25873[(2)] = inst_25827);

(statearr_25852_25873[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25834 === (10))){
var inst_25817 = (state_25833[(2)]);
var state_25833__$1 = state_25833;
var statearr_25853_25874 = state_25833__$1;
(statearr_25853_25874[(2)] = inst_25817);

(statearr_25853_25874[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25834 === (8))){
var inst_25797 = (state_25833[(7)]);
var inst_25806 = (state_25833[(11)]);
var tmp25850 = inst_25797;
var inst_25797__$1 = tmp25850;
var inst_25798 = inst_25806;
var state_25833__$1 = (function (){var statearr_25854 = state_25833;
(statearr_25854[(7)] = inst_25797__$1);

(statearr_25854[(8)] = inst_25798);

return statearr_25854;
})();
var statearr_25855_25875 = state_25833__$1;
(statearr_25855_25875[(2)] = null);

(statearr_25855_25875[(1)] = (2));


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
});})(c__22181__auto___25861,out))
;
return ((function (switch__22014__auto__,c__22181__auto___25861,out){
return (function() {
var cljs$core$async$state_machine__22015__auto__ = null;
var cljs$core$async$state_machine__22015__auto____0 = (function (){
var statearr_25856 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25856[(0)] = cljs$core$async$state_machine__22015__auto__);

(statearr_25856[(1)] = (1));

return statearr_25856;
});
var cljs$core$async$state_machine__22015__auto____1 = (function (state_25833){
while(true){
var ret_value__22016__auto__ = (function (){try{while(true){
var result__22017__auto__ = switch__22014__auto__.call(null,state_25833);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22017__auto__;
}
break;
}
}catch (e25857){if((e25857 instanceof Object)){
var ex__22018__auto__ = e25857;
var statearr_25858_25876 = state_25833;
(statearr_25858_25876[(5)] = ex__22018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25833);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25857;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25877 = state_25833;
state_25833 = G__25877;
continue;
} else {
return ret_value__22016__auto__;
}
break;
}
});
cljs$core$async$state_machine__22015__auto__ = function(state_25833){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22015__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22015__auto____1.call(this,state_25833);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22015__auto____0;
cljs$core$async$state_machine__22015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22015__auto____1;
return cljs$core$async$state_machine__22015__auto__;
})()
;})(switch__22014__auto__,c__22181__auto___25861,out))
})();
var state__22183__auto__ = (function (){var statearr_25859 = f__22182__auto__.call(null);
(statearr_25859[(6)] = c__22181__auto___25861);

return statearr_25859;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22183__auto__);
});})(c__22181__auto___25861,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__25879 = arguments.length;
switch (G__25879) {
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
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22181__auto___25949 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22181__auto___25949,out){
return (function (){
var f__22182__auto__ = (function (){var switch__22014__auto__ = ((function (c__22181__auto___25949,out){
return (function (state_25921){
var state_val_25922 = (state_25921[(1)]);
if((state_val_25922 === (7))){
var inst_25917 = (state_25921[(2)]);
var state_25921__$1 = state_25921;
var statearr_25923_25950 = state_25921__$1;
(statearr_25923_25950[(2)] = inst_25917);

(statearr_25923_25950[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25922 === (1))){
var inst_25880 = [];
var inst_25881 = inst_25880;
var inst_25882 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_25921__$1 = (function (){var statearr_25924 = state_25921;
(statearr_25924[(7)] = inst_25881);

(statearr_25924[(8)] = inst_25882);

return statearr_25924;
})();
var statearr_25925_25951 = state_25921__$1;
(statearr_25925_25951[(2)] = null);

(statearr_25925_25951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25922 === (4))){
var inst_25885 = (state_25921[(9)]);
var inst_25885__$1 = (state_25921[(2)]);
var inst_25886 = (inst_25885__$1 == null);
var inst_25887 = cljs.core.not.call(null,inst_25886);
var state_25921__$1 = (function (){var statearr_25926 = state_25921;
(statearr_25926[(9)] = inst_25885__$1);

return statearr_25926;
})();
if(inst_25887){
var statearr_25927_25952 = state_25921__$1;
(statearr_25927_25952[(1)] = (5));

} else {
var statearr_25928_25953 = state_25921__$1;
(statearr_25928_25953[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25922 === (15))){
var inst_25911 = (state_25921[(2)]);
var state_25921__$1 = state_25921;
var statearr_25929_25954 = state_25921__$1;
(statearr_25929_25954[(2)] = inst_25911);

(statearr_25929_25954[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25922 === (13))){
var state_25921__$1 = state_25921;
var statearr_25930_25955 = state_25921__$1;
(statearr_25930_25955[(2)] = null);

(statearr_25930_25955[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25922 === (6))){
var inst_25881 = (state_25921[(7)]);
var inst_25906 = inst_25881.length;
var inst_25907 = (inst_25906 > (0));
var state_25921__$1 = state_25921;
if(cljs.core.truth_(inst_25907)){
var statearr_25931_25956 = state_25921__$1;
(statearr_25931_25956[(1)] = (12));

} else {
var statearr_25932_25957 = state_25921__$1;
(statearr_25932_25957[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25922 === (3))){
var inst_25919 = (state_25921[(2)]);
var state_25921__$1 = state_25921;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25921__$1,inst_25919);
} else {
if((state_val_25922 === (12))){
var inst_25881 = (state_25921[(7)]);
var inst_25909 = cljs.core.vec.call(null,inst_25881);
var state_25921__$1 = state_25921;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25921__$1,(15),out,inst_25909);
} else {
if((state_val_25922 === (2))){
var state_25921__$1 = state_25921;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25921__$1,(4),ch);
} else {
if((state_val_25922 === (11))){
var inst_25885 = (state_25921[(9)]);
var inst_25889 = (state_25921[(10)]);
var inst_25899 = (state_25921[(2)]);
var inst_25900 = [];
var inst_25901 = inst_25900.push(inst_25885);
var inst_25881 = inst_25900;
var inst_25882 = inst_25889;
var state_25921__$1 = (function (){var statearr_25933 = state_25921;
(statearr_25933[(7)] = inst_25881);

(statearr_25933[(11)] = inst_25899);

(statearr_25933[(12)] = inst_25901);

(statearr_25933[(8)] = inst_25882);

return statearr_25933;
})();
var statearr_25934_25958 = state_25921__$1;
(statearr_25934_25958[(2)] = null);

(statearr_25934_25958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25922 === (9))){
var inst_25881 = (state_25921[(7)]);
var inst_25897 = cljs.core.vec.call(null,inst_25881);
var state_25921__$1 = state_25921;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25921__$1,(11),out,inst_25897);
} else {
if((state_val_25922 === (5))){
var inst_25885 = (state_25921[(9)]);
var inst_25889 = (state_25921[(10)]);
var inst_25882 = (state_25921[(8)]);
var inst_25889__$1 = f.call(null,inst_25885);
var inst_25890 = cljs.core._EQ_.call(null,inst_25889__$1,inst_25882);
var inst_25891 = cljs.core.keyword_identical_QMARK_.call(null,inst_25882,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_25892 = ((inst_25890) || (inst_25891));
var state_25921__$1 = (function (){var statearr_25935 = state_25921;
(statearr_25935[(10)] = inst_25889__$1);

return statearr_25935;
})();
if(cljs.core.truth_(inst_25892)){
var statearr_25936_25959 = state_25921__$1;
(statearr_25936_25959[(1)] = (8));

} else {
var statearr_25937_25960 = state_25921__$1;
(statearr_25937_25960[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25922 === (14))){
var inst_25914 = (state_25921[(2)]);
var inst_25915 = cljs.core.async.close_BANG_.call(null,out);
var state_25921__$1 = (function (){var statearr_25939 = state_25921;
(statearr_25939[(13)] = inst_25914);

return statearr_25939;
})();
var statearr_25940_25961 = state_25921__$1;
(statearr_25940_25961[(2)] = inst_25915);

(statearr_25940_25961[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25922 === (10))){
var inst_25904 = (state_25921[(2)]);
var state_25921__$1 = state_25921;
var statearr_25941_25962 = state_25921__$1;
(statearr_25941_25962[(2)] = inst_25904);

(statearr_25941_25962[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25922 === (8))){
var inst_25885 = (state_25921[(9)]);
var inst_25881 = (state_25921[(7)]);
var inst_25889 = (state_25921[(10)]);
var inst_25894 = inst_25881.push(inst_25885);
var tmp25938 = inst_25881;
var inst_25881__$1 = tmp25938;
var inst_25882 = inst_25889;
var state_25921__$1 = (function (){var statearr_25942 = state_25921;
(statearr_25942[(7)] = inst_25881__$1);

(statearr_25942[(14)] = inst_25894);

(statearr_25942[(8)] = inst_25882);

return statearr_25942;
})();
var statearr_25943_25963 = state_25921__$1;
(statearr_25943_25963[(2)] = null);

(statearr_25943_25963[(1)] = (2));


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
});})(c__22181__auto___25949,out))
;
return ((function (switch__22014__auto__,c__22181__auto___25949,out){
return (function() {
var cljs$core$async$state_machine__22015__auto__ = null;
var cljs$core$async$state_machine__22015__auto____0 = (function (){
var statearr_25944 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25944[(0)] = cljs$core$async$state_machine__22015__auto__);

(statearr_25944[(1)] = (1));

return statearr_25944;
});
var cljs$core$async$state_machine__22015__auto____1 = (function (state_25921){
while(true){
var ret_value__22016__auto__ = (function (){try{while(true){
var result__22017__auto__ = switch__22014__auto__.call(null,state_25921);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22017__auto__;
}
break;
}
}catch (e25945){if((e25945 instanceof Object)){
var ex__22018__auto__ = e25945;
var statearr_25946_25964 = state_25921;
(statearr_25946_25964[(5)] = ex__22018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25921);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25945;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25965 = state_25921;
state_25921 = G__25965;
continue;
} else {
return ret_value__22016__auto__;
}
break;
}
});
cljs$core$async$state_machine__22015__auto__ = function(state_25921){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22015__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22015__auto____1.call(this,state_25921);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22015__auto____0;
cljs$core$async$state_machine__22015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22015__auto____1;
return cljs$core$async$state_machine__22015__auto__;
})()
;})(switch__22014__auto__,c__22181__auto___25949,out))
})();
var state__22183__auto__ = (function (){var statearr_25947 = f__22182__auto__.call(null);
(statearr_25947[(6)] = c__22181__auto___25949);

return statearr_25947;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22183__auto__);
});})(c__22181__auto___25949,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
