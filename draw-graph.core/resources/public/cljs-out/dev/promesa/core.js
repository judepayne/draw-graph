// Compiled by ClojureScript 1.10.520 {}
goog.provide('promesa.core');
goog.require('cljs.core');
goog.require('promesa.impl.promise');
goog.require('promesa.impl.proto');
goog.require('promesa.impl.scheduler');
promesa.core.Promise = promesa.impl.promise.Promise;
/**
 * Schedule a callable to be executed after the `ms` delay
 *   is reached.
 * 
 *   In JVM it uses a scheduled executor service and in JS
 *   it uses the `setTimeout` function.
 */
promesa.core.schedule = (function promesa$core$schedule(ms,func){
return promesa.impl.scheduler.schedule.call(null,ms,func);
});
/**
 * Return a resolved promise with provided value.
 */
promesa.core.resolved = (function promesa$core$resolved(v){
return promesa.impl.promise.resolved.call(null,v);
});
/**
 * Return a rejected promise with provided reason.
 */
promesa.core.rejected = (function promesa$core$rejected(v){
return promesa.impl.promise.rejected.call(null,v);
});
/**
 * The promise constructor.
 */
promesa.core.promise = (function promesa$core$promise(v){
return promesa.impl.proto._promise.call(null,v);
});
/**
 * Return true if `v` is a promise instance.
 */
promesa.core.promise_QMARK_ = (function promesa$core$promise_QMARK_(v){
return (v instanceof promesa.core.Promise);
});
/**
 * Returns true if promise `p` is already fulfilled.
 */
promesa.core.resolved_QMARK_ = (function promesa$core$resolved_QMARK_(p){
return promesa.impl.proto._resolved_QMARK_.call(null,p);
});
/**
 * Returns true if promise `p` is already rejected.
 */
promesa.core.rejected_QMARK_ = (function promesa$core$rejected_QMARK_(p){
return promesa.impl.proto._rejected_QMARK_.call(null,p);
});
/**
 * Returns true if promise `p` is stil pending.
 */
promesa.core.pending_QMARK_ = (function promesa$core$pending_QMARK_(p){
return promesa.impl.proto._pending_QMARK_.call(null,p);
});
/**
 * Returns the current promise value.
 */
promesa.core.extract = (function promesa$core$extract(p){
return promesa.impl.proto._extract.call(null,p);
});
/**
 * Returns true if promise `p` is already done.
 */
promesa.core.done_QMARK_ = cljs.core.complement.call(null,promesa.core.pending_QMARK_);
/**
 * Apply a function to the promise value and
 *   return a new promise with the result.
 */
promesa.core.map = (function promesa$core$map(f,p){
return promesa.impl.proto._map.call(null,p,f);
});
/**
 * Same as `map` but removes one level of
 *   promise neesting. Useful when the map function
 *   returns a promise instead of value.
 * 
 *   In JS environment this function is analogous
 *   to `map` because the promise abstraction overloads
 *   the `map` operator.
 */
promesa.core.mapcat = (function promesa$core$mapcat(f,p){
return promesa.impl.proto._bind.call(null,p,f);
});
/**
 * A chain helper for promises.
 */
promesa.core.bind = (function promesa$core$bind(p,f){
return promesa.impl.proto._bind.call(null,p,f);
});
/**
 * Same as `map` but with parameters inverted
 *   for convenience and for familiarity with
 *   javascript's promises `.then` operator.
 */
promesa.core.then = (function promesa$core$then(p,f){
return promesa.impl.proto._map.call(null,p,f);
});
/**
 * Like then but accepts multiple parameters.
 */
promesa.core.chain = (function promesa$core$chain(var_args){
var args__4736__auto__ = [];
var len__4730__auto___20688 = arguments.length;
var i__4731__auto___20689 = (0);
while(true){
if((i__4731__auto___20689 < len__4730__auto___20688)){
args__4736__auto__.push((arguments[i__4731__auto___20689]));

var G__20690 = (i__4731__auto___20689 + (1));
i__4731__auto___20689 = G__20690;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return promesa.core.chain.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

promesa.core.chain.cljs$core$IFn$_invoke$arity$variadic = (function (p,funcs){
return cljs.core.reduce.call(null,(function (p1__20684_SHARP_,p2__20685_SHARP_){
return promesa.core.then.call(null,p1__20684_SHARP_,p2__20685_SHARP_);
}),p,funcs);
});

promesa.core.chain.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
promesa.core.chain.cljs$lang$applyTo = (function (seq20686){
var G__20687 = cljs.core.first.call(null,seq20686);
var seq20686__$1 = cljs.core.next.call(null,seq20686);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20687,seq20686__$1);
});

promesa.core.branch = (function promesa$core$branch(p,success,failure){
return promesa.impl.proto._catch.call(null,promesa.impl.proto._map.call(null,p,success),failure);
});
/**
 * Catch all promise chain helper.
 */
promesa.core.catch$ = (function promesa$core$catch(var_args){
var G__20693 = arguments.length;
switch (G__20693) {
case 2:
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core.catch$.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

promesa.core.catch$.cljs$core$IFn$_invoke$arity$2 = (function (p,f){
return promesa.impl.proto._catch.call(null,p,f);
});

promesa.core.catch$.cljs$core$IFn$_invoke$arity$3 = (function (p,pred_or_type,f){
var accept_QMARK_ = ((cljs.core.ifn_QMARK_.call(null,pred_or_type))?pred_or_type:(function (p1__20691_SHARP_){
return (p1__20691_SHARP_ instanceof pred_or_type);
}));
return promesa.impl.proto._catch.call(null,p,((function (accept_QMARK_){
return (function (e){
if(cljs.core.truth_(accept_QMARK_.call(null,e))){
return f.call(null,e);
} else {
return promesa.impl.promise.rejected.call(null,e);
}
});})(accept_QMARK_))
);
});

promesa.core.catch$.cljs$lang$maxFixedArity = 3;

/**
 * Same as `catch` but with parameters inverted.
 */
promesa.core.error = (function promesa$core$error(var_args){
var G__20696 = arguments.length;
switch (G__20696) {
case 2:
return promesa.core.error.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core.error.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

promesa.core.error.cljs$core$IFn$_invoke$arity$2 = (function (f,p){
return promesa.core.catch$.call(null,p,f);
});

promesa.core.error.cljs$core$IFn$_invoke$arity$3 = (function (f,type,p){
return promesa.core.catch$.call(null,p,type,f);
});

promesa.core.error.cljs$lang$maxFixedArity = 3;

/**
 * A short alias for `error` function.
 */
promesa.core.err = promesa.core.error;
/**
 * Attach handler to promise that will be
 *   executed independently if promise is
 *   resolved or rejected.
 */
promesa.core.finally$ = (function promesa$core$finally(p,callback){
return p.finally(callback);
});
/**
 * Given an array of promises, return a promise
 *   that is fulfilled  when all the items in the
 *   array are fulfilled.
 */
promesa.core.all = (function promesa$core$all(promises){
return promesa.core.then.call(null,promesa.core.Promise.all(cljs.core.into_array.call(null,promises)),cljs.core.vec);
});
/**
 * Given an array of promises, return a promise
 *   that is fulfilled when first one item in the
 *   array is fulfilled.
 */
promesa.core.any = (function promesa$core$any(promises){
return promesa.core.Promise.any(cljs.core.into_array.call(null,promises));
});
/**
 * Cancel the promise.
 */
promesa.core.cancel_BANG_ = (function promesa$core$cancel_BANG_(p){
promesa.impl.proto._cancel.call(null,p);

return p;
});
/**
 * Return true if `v` is a cancelled promise.
 */
promesa.core.cancelled_QMARK_ = (function promesa$core$cancelled_QMARK_(v){
return promesa.impl.proto._cancelled_QMARK_.call(null,v);
});
/**
 * Given a function that accepts a callback as the last argument return other
 *   function that returns a promise. Callback is expected to take single
 *   parameter (result of a computation).
 */
promesa.core.promisify = (function promesa$core$promisify(callable){
return (function() { 
var G__20699__delegate = function (args){
return promesa.core.promise.call(null,(function (resolve,reject){
var args__$1 = cljs.core.conj.call(null,cljs.core.vec.call(null,args),resolve);
try{return cljs.core.apply.call(null,callable,args__$1);
}catch (e20698){if((e20698 instanceof Error)){
var e = e20698;
return reject.call(null,e);
} else {
throw e20698;

}
}}));
};
var G__20699 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20700__i = 0, G__20700__a = new Array(arguments.length -  0);
while (G__20700__i < G__20700__a.length) {G__20700__a[G__20700__i] = arguments[G__20700__i + 0]; ++G__20700__i;}
  args = new cljs.core.IndexedSeq(G__20700__a,0,null);
} 
return G__20699__delegate.call(this,args);};
G__20699.cljs$lang$maxFixedArity = 0;
G__20699.cljs$lang$applyTo = (function (arglist__20701){
var args = cljs.core.seq(arglist__20701);
return G__20699__delegate(args);
});
G__20699.cljs$core$IFn$_invoke$arity$variadic = G__20699__delegate;
return G__20699;
})()
;
});
/**
 * Returns a cancellable promise that will be fulfilled
 *   with this promise's fulfillment value or rejection reason.
 *   However, if this promise is not fulfilled or rejected
 *   within `ms` milliseconds, the returned promise is cancelled
 *   with a TimeoutError
 */
promesa.core.timeout = (function promesa$core$timeout(var_args){
var G__20703 = arguments.length;
switch (G__20703) {
case 2:
return promesa.core.timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return promesa.core.timeout.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

promesa.core.timeout.cljs$core$IFn$_invoke$arity$2 = (function (p,t){
return p.timeout(t);
});

promesa.core.timeout.cljs$core$IFn$_invoke$arity$3 = (function (p,t,v){
return p.timeout(t,v);
});

promesa.core.timeout.cljs$lang$maxFixedArity = 3;

/**
 * Given a timeout in miliseconds and optional
 *   value, returns a promise that will fulfilled
 *   with provided value (or nil) after the
 *   time is reached.
 */
promesa.core.delay = (function promesa$core$delay(var_args){
var G__20706 = arguments.length;
switch (G__20706) {
case 1:
return promesa.core.delay.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return promesa.core.delay.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

promesa.core.delay.cljs$core$IFn$_invoke$arity$1 = (function (t){
return promesa.core.delay.call(null,t,null);
});

promesa.core.delay.cljs$core$IFn$_invoke$arity$2 = (function (t,v){
return promesa.core.Promise.delay(t).then(cljs.core.constantly.call(null,v));
});

promesa.core.delay.cljs$lang$maxFixedArity = 2;

/**
 * A helper for start promise chain without worry about
 *   synchronous or asynchronous exceptions. Returns a promise
 *   resolved with the return value of the callback.
 */
promesa.core.attempt = (function promesa$core$attempt(callback){
return promesa.core.promise.call(null,(function (resolve){
return resolve.call(null,callback.call(null));
}));
});
promesa.core.await$ = (function promesa$core$await(var_args){
var args__4736__auto__ = [];
var len__4730__auto___20709 = arguments.length;
var i__4731__auto___20710 = (0);
while(true){
if((i__4731__auto___20710 < len__4730__auto___20709)){
args__4736__auto__.push((arguments[i__4731__auto___20710]));

var G__20711 = (i__4731__auto___20710 + (1));
i__4731__auto___20710 = G__20711;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return promesa.core.await$.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

promesa.core.await$.cljs$core$IFn$_invoke$arity$variadic = (function (args){
throw cljs.core.ex_info.call(null,"Should be only used in alet macro.",cljs.core.PersistentArrayMap.EMPTY);
});

promesa.core.await$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
promesa.core.await$.cljs$lang$applyTo = (function (seq20708){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20708));
});


//# sourceMappingURL=core.js.map
