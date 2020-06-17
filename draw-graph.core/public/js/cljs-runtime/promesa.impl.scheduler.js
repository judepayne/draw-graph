goog.provide('promesa.impl.scheduler');
goog.require('cljs.core');
goog.require('promesa.impl.proto');
promesa.impl.scheduler.scheduled_task = (function promesa$impl$scheduler$scheduled_task(cur,done_QMARK_){
var cancelled = cljs.core.volatile_BANG_(false);
if((typeof promesa !== 'undefined') && (typeof promesa.impl !== 'undefined') && (typeof promesa.impl.scheduler !== 'undefined') && (typeof promesa.impl.scheduler.t_promesa$impl$scheduler43588 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {promesa.impl.proto.ICancellable}
 * @implements {cljs.core.IPending}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
promesa.impl.scheduler.t_promesa$impl$scheduler43588 = (function (cur,done_QMARK_,cancelled,meta43589){
this.cur = cur;
this.done_QMARK_ = done_QMARK_;
this.cancelled = cancelled;
this.meta43589 = meta43589;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 1;
});
(promesa.impl.scheduler.t_promesa$impl$scheduler43588.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43590,meta43589__$1){
var self__ = this;
var _43590__$1 = this;
return (new promesa.impl.scheduler.t_promesa$impl$scheduler43588(self__.cur,self__.done_QMARK_,self__.cancelled,meta43589__$1));
}));

(promesa.impl.scheduler.t_promesa$impl$scheduler43588.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43590){
var self__ = this;
var _43590__$1 = this;
return self__.meta43589;
}));

(promesa.impl.scheduler.t_promesa$impl$scheduler43588.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.done_QMARK_);
}));

(promesa.impl.scheduler.t_promesa$impl$scheduler43588.prototype.promesa$impl$proto$ICancellable$ = cljs.core.PROTOCOL_SENTINEL);

(promesa.impl.scheduler.t_promesa$impl$scheduler43588.prototype.promesa$impl$proto$ICancellable$_cancelled_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.cancelled);
}));

(promesa.impl.scheduler.t_promesa$impl$scheduler43588.prototype.promesa$impl$proto$ICancellable$_cancel$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(cljs.core.deref(self__.cancelled))){
return null;
} else {
cljs.core.vreset_BANG_(self__.cancelled,true);

return clearTimeout(self__.cur);
}
}));

(promesa.impl.scheduler.t_promesa$impl$scheduler43588.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cur","cur",-1501245170,null),new cljs.core.Symbol(null,"done?","done?",-206470191,null),new cljs.core.Symbol(null,"cancelled","cancelled",2129257751,null),new cljs.core.Symbol(null,"meta43589","meta43589",-1193377262,null)], null);
}));

(promesa.impl.scheduler.t_promesa$impl$scheduler43588.cljs$lang$type = true);

(promesa.impl.scheduler.t_promesa$impl$scheduler43588.cljs$lang$ctorStr = "promesa.impl.scheduler/t_promesa$impl$scheduler43588");

(promesa.impl.scheduler.t_promesa$impl$scheduler43588.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"promesa.impl.scheduler/t_promesa$impl$scheduler43588");
}));

/**
 * Positional factory function for promesa.impl.scheduler/t_promesa$impl$scheduler43588.
 */
promesa.impl.scheduler.__GT_t_promesa$impl$scheduler43588 = (function promesa$impl$scheduler$scheduled_task_$___GT_t_promesa$impl$scheduler43588(cur__$1,done_QMARK___$1,cancelled__$1,meta43589){
return (new promesa.impl.scheduler.t_promesa$impl$scheduler43588(cur__$1,done_QMARK___$1,cancelled__$1,meta43589));
});

}

return (new promesa.impl.scheduler.t_promesa$impl$scheduler43588(cur,done_QMARK_,cancelled,cljs.core.PersistentArrayMap.EMPTY));
});
promesa.impl.scheduler.scheduler = (function promesa$impl$scheduler$scheduler(){
if((typeof promesa !== 'undefined') && (typeof promesa.impl !== 'undefined') && (typeof promesa.impl.scheduler !== 'undefined') && (typeof promesa.impl.scheduler.t_promesa$impl$scheduler43592 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {promesa.impl.proto.IScheduler}
 * @implements {cljs.core.IWithMeta}
*/
promesa.impl.scheduler.t_promesa$impl$scheduler43592 = (function (meta43593){
this.meta43593 = meta43593;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(promesa.impl.scheduler.t_promesa$impl$scheduler43592.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43594,meta43593__$1){
var self__ = this;
var _43594__$1 = this;
return (new promesa.impl.scheduler.t_promesa$impl$scheduler43592(meta43593__$1));
}));

(promesa.impl.scheduler.t_promesa$impl$scheduler43592.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43594){
var self__ = this;
var _43594__$1 = this;
return self__.meta43593;
}));

(promesa.impl.scheduler.t_promesa$impl$scheduler43592.prototype.promesa$impl$proto$IScheduler$ = cljs.core.PROTOCOL_SENTINEL);

(promesa.impl.scheduler.t_promesa$impl$scheduler43592.prototype.promesa$impl$proto$IScheduler$_schedule$arity$3 = (function (_,ms,func){
var self__ = this;
var ___$1 = this;
var done_QMARK_ = cljs.core.volatile_BANG_(false);
var task = (function (){
try{return (func.cljs$core$IFn$_invoke$arity$0 ? func.cljs$core$IFn$_invoke$arity$0() : func.call(null));
}finally {cljs.core.vreset_BANG_(done_QMARK_,true);
}});
var cur = setTimeout(task,ms);
return promesa.impl.scheduler.scheduled_task(cur,done_QMARK_);
}));

(promesa.impl.scheduler.t_promesa$impl$scheduler43592.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta43593","meta43593",1774016846,null)], null);
}));

(promesa.impl.scheduler.t_promesa$impl$scheduler43592.cljs$lang$type = true);

(promesa.impl.scheduler.t_promesa$impl$scheduler43592.cljs$lang$ctorStr = "promesa.impl.scheduler/t_promesa$impl$scheduler43592");

(promesa.impl.scheduler.t_promesa$impl$scheduler43592.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"promesa.impl.scheduler/t_promesa$impl$scheduler43592");
}));

/**
 * Positional factory function for promesa.impl.scheduler/t_promesa$impl$scheduler43592.
 */
promesa.impl.scheduler.__GT_t_promesa$impl$scheduler43592 = (function promesa$impl$scheduler$scheduler_$___GT_t_promesa$impl$scheduler43592(meta43593){
return (new promesa.impl.scheduler.t_promesa$impl$scheduler43592(meta43593));
});

}

return (new promesa.impl.scheduler.t_promesa$impl$scheduler43592(cljs.core.PersistentArrayMap.EMPTY));
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

//# sourceMappingURL=promesa.impl.scheduler.js.map
