// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('promesa.impl.scheduler');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('promesa.impl.proto');
promesa.impl.scheduler.scheduled_task = (function promesa$impl$scheduler$scheduled_task(cur,done_QMARK_){
var cancelled = cljs.core.volatile_BANG_(false);
if((typeof promesa !== 'undefined') && (typeof promesa.impl !== 'undefined') && (typeof promesa.impl.scheduler !== 'undefined') && (typeof promesa.impl.scheduler.t_promesa$impl$scheduler24219 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {promesa.impl.proto.ICancellable}
 * @implements {cljs.core.IPending}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
promesa.impl.scheduler.t_promesa$impl$scheduler24219 = (function (cur,done_QMARK_,cancelled,meta24220){
this.cur = cur;
this.done_QMARK_ = done_QMARK_;
this.cancelled = cancelled;
this.meta24220 = meta24220;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 1;
});
promesa.impl.scheduler.t_promesa$impl$scheduler24219.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cancelled){
return (function (_24221,meta24220__$1){
var self__ = this;
var _24221__$1 = this;
return (new promesa.impl.scheduler.t_promesa$impl$scheduler24219(self__.cur,self__.done_QMARK_,self__.cancelled,meta24220__$1));
});})(cancelled))
;

promesa.impl.scheduler.t_promesa$impl$scheduler24219.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cancelled){
return (function (_24221){
var self__ = this;
var _24221__$1 = this;
return self__.meta24220;
});})(cancelled))
;

promesa.impl.scheduler.t_promesa$impl$scheduler24219.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = ((function (cancelled){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.done_QMARK_);
});})(cancelled))
;

promesa.impl.scheduler.t_promesa$impl$scheduler24219.prototype.promesa$impl$proto$ICancellable$ = cljs.core.PROTOCOL_SENTINEL;

promesa.impl.scheduler.t_promesa$impl$scheduler24219.prototype.promesa$impl$proto$ICancellable$_cancelled_QMARK_$arity$1 = ((function (cancelled){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.cancelled);
});})(cancelled))
;

promesa.impl.scheduler.t_promesa$impl$scheduler24219.prototype.promesa$impl$proto$ICancellable$_cancel$arity$1 = ((function (cancelled){
return (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(cljs.core.deref(self__.cancelled))){
return null;
} else {
cljs.core.vreset_BANG_(self__.cancelled,true);

return clearTimeout(self__.cur);
}
});})(cancelled))
;

promesa.impl.scheduler.t_promesa$impl$scheduler24219.getBasis = ((function (cancelled){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$cur,cljs.core.cst$sym$done_QMARK_,cljs.core.cst$sym$cancelled,cljs.core.cst$sym$meta24220], null);
});})(cancelled))
;

promesa.impl.scheduler.t_promesa$impl$scheduler24219.cljs$lang$type = true;

promesa.impl.scheduler.t_promesa$impl$scheduler24219.cljs$lang$ctorStr = "promesa.impl.scheduler/t_promesa$impl$scheduler24219";

promesa.impl.scheduler.t_promesa$impl$scheduler24219.cljs$lang$ctorPrWriter = ((function (cancelled){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"promesa.impl.scheduler/t_promesa$impl$scheduler24219");
});})(cancelled))
;

/**
 * Positional factory function for promesa.impl.scheduler/t_promesa$impl$scheduler24219.
 */
promesa.impl.scheduler.__GT_t_promesa$impl$scheduler24219 = ((function (cancelled){
return (function promesa$impl$scheduler$scheduled_task_$___GT_t_promesa$impl$scheduler24219(cur__$1,done_QMARK___$1,cancelled__$1,meta24220){
return (new promesa.impl.scheduler.t_promesa$impl$scheduler24219(cur__$1,done_QMARK___$1,cancelled__$1,meta24220));
});})(cancelled))
;

}

return (new promesa.impl.scheduler.t_promesa$impl$scheduler24219(cur,done_QMARK_,cancelled,cljs.core.PersistentArrayMap.EMPTY));
});
promesa.impl.scheduler.scheduler = (function promesa$impl$scheduler$scheduler(){
if((typeof promesa !== 'undefined') && (typeof promesa.impl !== 'undefined') && (typeof promesa.impl.scheduler !== 'undefined') && (typeof promesa.impl.scheduler.t_promesa$impl$scheduler24222 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {promesa.impl.proto.IScheduler}
 * @implements {cljs.core.IWithMeta}
*/
promesa.impl.scheduler.t_promesa$impl$scheduler24222 = (function (meta24223){
this.meta24223 = meta24223;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
promesa.impl.scheduler.t_promesa$impl$scheduler24222.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24224,meta24223__$1){
var self__ = this;
var _24224__$1 = this;
return (new promesa.impl.scheduler.t_promesa$impl$scheduler24222(meta24223__$1));
});

promesa.impl.scheduler.t_promesa$impl$scheduler24222.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24224){
var self__ = this;
var _24224__$1 = this;
return self__.meta24223;
});

promesa.impl.scheduler.t_promesa$impl$scheduler24222.prototype.promesa$impl$proto$IScheduler$ = cljs.core.PROTOCOL_SENTINEL;

promesa.impl.scheduler.t_promesa$impl$scheduler24222.prototype.promesa$impl$proto$IScheduler$_schedule$arity$3 = (function (_,ms,func){
var self__ = this;
var ___$1 = this;
var done_QMARK_ = cljs.core.volatile_BANG_(false);
var task = ((function (done_QMARK_,___$1){
return (function (){
try{return (func.cljs$core$IFn$_invoke$arity$0 ? func.cljs$core$IFn$_invoke$arity$0() : func.call(null));
}finally {cljs.core.vreset_BANG_(done_QMARK_,true);
}});})(done_QMARK_,___$1))
;
var cur = setTimeout(task,ms);
return promesa.impl.scheduler.scheduled_task(cur,done_QMARK_);
});

promesa.impl.scheduler.t_promesa$impl$scheduler24222.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta24223], null);
});

promesa.impl.scheduler.t_promesa$impl$scheduler24222.cljs$lang$type = true;

promesa.impl.scheduler.t_promesa$impl$scheduler24222.cljs$lang$ctorStr = "promesa.impl.scheduler/t_promesa$impl$scheduler24222";

promesa.impl.scheduler.t_promesa$impl$scheduler24222.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"promesa.impl.scheduler/t_promesa$impl$scheduler24222");
});

/**
 * Positional factory function for promesa.impl.scheduler/t_promesa$impl$scheduler24222.
 */
promesa.impl.scheduler.__GT_t_promesa$impl$scheduler24222 = (function promesa$impl$scheduler$scheduler_$___GT_t_promesa$impl$scheduler24222(meta24223){
return (new promesa.impl.scheduler.t_promesa$impl$scheduler24222(meta24223));
});

}

return (new promesa.impl.scheduler.t_promesa$impl$scheduler24222(cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * A default lazy scheduler instance.
 */
promesa.impl.scheduler._PLUS_scheduler_PLUS_ = (new cljs.core.Delay((function (){
return promesa.impl.scheduler.scheduler();
}),null));
promesa.impl.scheduler.schedule = (function promesa$impl$scheduler$schedule(ms,func){
return promesa.impl.proto._schedule(cljs.core.deref(promesa.impl.scheduler._PLUS_scheduler_PLUS_),ms,func);
});
