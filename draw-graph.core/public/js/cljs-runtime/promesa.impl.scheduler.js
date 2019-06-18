goog.provide('promesa.impl.scheduler');
goog.require('cljs.core');
goog.require('promesa.impl.proto');
promesa.impl.scheduler.scheduled_task = (function promesa$impl$scheduler$scheduled_task(cur,done_QMARK_){
var cancelled = cljs.core.volatile_BANG_(false);
if((typeof promesa !== 'undefined') && (typeof promesa.impl !== 'undefined') && (typeof promesa.impl.scheduler !== 'undefined') && (typeof promesa.impl.scheduler.t_promesa$impl$scheduler38858 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {promesa.impl.proto.ICancellable}
 * @implements {cljs.core.IPending}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
promesa.impl.scheduler.t_promesa$impl$scheduler38858 = (function (cur,done_QMARK_,cancelled,meta38859){
this.cur = cur;
this.done_QMARK_ = done_QMARK_;
this.cancelled = cancelled;
this.meta38859 = meta38859;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 1;
});
promesa.impl.scheduler.t_promesa$impl$scheduler38858.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cancelled){
return (function (_38860,meta38859__$1){
var self__ = this;
var _38860__$1 = this;
return (new promesa.impl.scheduler.t_promesa$impl$scheduler38858(self__.cur,self__.done_QMARK_,self__.cancelled,meta38859__$1));
});})(cancelled))
;

promesa.impl.scheduler.t_promesa$impl$scheduler38858.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cancelled){
return (function (_38860){
var self__ = this;
var _38860__$1 = this;
return self__.meta38859;
});})(cancelled))
;

promesa.impl.scheduler.t_promesa$impl$scheduler38858.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = ((function (cancelled){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.done_QMARK_);
});})(cancelled))
;

promesa.impl.scheduler.t_promesa$impl$scheduler38858.prototype.promesa$impl$proto$ICancellable$ = cljs.core.PROTOCOL_SENTINEL;

promesa.impl.scheduler.t_promesa$impl$scheduler38858.prototype.promesa$impl$proto$ICancellable$_cancelled_QMARK_$arity$1 = ((function (cancelled){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.cancelled);
});})(cancelled))
;

promesa.impl.scheduler.t_promesa$impl$scheduler38858.prototype.promesa$impl$proto$ICancellable$_cancel$arity$1 = ((function (cancelled){
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

promesa.impl.scheduler.t_promesa$impl$scheduler38858.getBasis = ((function (cancelled){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cur","cur",-1501245170,null),new cljs.core.Symbol(null,"done?","done?",-206470191,null),new cljs.core.Symbol(null,"cancelled","cancelled",2129257751,null),new cljs.core.Symbol(null,"meta38859","meta38859",1070221621,null)], null);
});})(cancelled))
;

promesa.impl.scheduler.t_promesa$impl$scheduler38858.cljs$lang$type = true;

promesa.impl.scheduler.t_promesa$impl$scheduler38858.cljs$lang$ctorStr = "promesa.impl.scheduler/t_promesa$impl$scheduler38858";

promesa.impl.scheduler.t_promesa$impl$scheduler38858.cljs$lang$ctorPrWriter = ((function (cancelled){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"promesa.impl.scheduler/t_promesa$impl$scheduler38858");
});})(cancelled))
;

/**
 * Positional factory function for promesa.impl.scheduler/t_promesa$impl$scheduler38858.
 */
promesa.impl.scheduler.__GT_t_promesa$impl$scheduler38858 = ((function (cancelled){
return (function promesa$impl$scheduler$scheduled_task_$___GT_t_promesa$impl$scheduler38858(cur__$1,done_QMARK___$1,cancelled__$1,meta38859){
return (new promesa.impl.scheduler.t_promesa$impl$scheduler38858(cur__$1,done_QMARK___$1,cancelled__$1,meta38859));
});})(cancelled))
;

}

return (new promesa.impl.scheduler.t_promesa$impl$scheduler38858(cur,done_QMARK_,cancelled,cljs.core.PersistentArrayMap.EMPTY));
});
promesa.impl.scheduler.scheduler = (function promesa$impl$scheduler$scheduler(){
if((typeof promesa !== 'undefined') && (typeof promesa.impl !== 'undefined') && (typeof promesa.impl.scheduler !== 'undefined') && (typeof promesa.impl.scheduler.t_promesa$impl$scheduler38878 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {promesa.impl.proto.IScheduler}
 * @implements {cljs.core.IWithMeta}
*/
promesa.impl.scheduler.t_promesa$impl$scheduler38878 = (function (meta38879){
this.meta38879 = meta38879;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
promesa.impl.scheduler.t_promesa$impl$scheduler38878.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38880,meta38879__$1){
var self__ = this;
var _38880__$1 = this;
return (new promesa.impl.scheduler.t_promesa$impl$scheduler38878(meta38879__$1));
});

promesa.impl.scheduler.t_promesa$impl$scheduler38878.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38880){
var self__ = this;
var _38880__$1 = this;
return self__.meta38879;
});

promesa.impl.scheduler.t_promesa$impl$scheduler38878.prototype.promesa$impl$proto$IScheduler$ = cljs.core.PROTOCOL_SENTINEL;

promesa.impl.scheduler.t_promesa$impl$scheduler38878.prototype.promesa$impl$proto$IScheduler$_schedule$arity$3 = (function (_,ms,func){
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

promesa.impl.scheduler.t_promesa$impl$scheduler38878.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta38879","meta38879",-1890943772,null)], null);
});

promesa.impl.scheduler.t_promesa$impl$scheduler38878.cljs$lang$type = true;

promesa.impl.scheduler.t_promesa$impl$scheduler38878.cljs$lang$ctorStr = "promesa.impl.scheduler/t_promesa$impl$scheduler38878";

promesa.impl.scheduler.t_promesa$impl$scheduler38878.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"promesa.impl.scheduler/t_promesa$impl$scheduler38878");
});

/**
 * Positional factory function for promesa.impl.scheduler/t_promesa$impl$scheduler38878.
 */
promesa.impl.scheduler.__GT_t_promesa$impl$scheduler38878 = (function promesa$impl$scheduler$scheduler_$___GT_t_promesa$impl$scheduler38878(meta38879){
return (new promesa.impl.scheduler.t_promesa$impl$scheduler38878(meta38879));
});

}

return (new promesa.impl.scheduler.t_promesa$impl$scheduler38878(cljs.core.PersistentArrayMap.EMPTY));
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
