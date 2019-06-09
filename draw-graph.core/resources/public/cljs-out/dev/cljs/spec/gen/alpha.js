// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('goog.Uri');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((!((self__.cached == null)))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.spec.gen.alpha/LazyVar");
});

/**
 * Positional factory function for cljs.spec.gen.alpha/LazyVar.
 */
cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))," never required"].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__4736__auto__ = [];
var len__4730__auto___13829 = arguments.length;
var i__4731__auto___13830 = (0);
while(true){
if((i__4731__auto___13830 < len__4730__auto___13829)){
args__4736__auto__.push((arguments[i__4731__auto___13830]));

var G__13831 = (i__4731__auto___13830 + (1));
i__4731__auto___13830 = G__13831;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq13828){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13828));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))," never required"].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___13833 = arguments.length;
var i__4731__auto___13834 = (0);
while(true){
if((i__4731__auto___13834 < len__4730__auto___13833)){
args__4736__auto__.push((arguments[i__4731__auto___13834]));

var G__13835 = (i__4731__auto___13834 + (1));
i__4731__auto___13834 = G__13835;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq13832){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13832));
});

var g_QMARK__13836 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," never required"].join('')));
}
}),null));
var g_13837 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__13836){
return (function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," never required"].join('')));
}
});})(g_QMARK__13836))
,null));
var mkg_13838 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__13836,g_13837){
return (function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," never required"].join('')));
}
});})(g_QMARK__13836,g_13837))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__13836,g_13837,mkg_13838){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__13836).call(null,x);
});})(g_QMARK__13836,g_13837,mkg_13838))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__13836,g_13837,mkg_13838){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_13838).call(null,gfn);
});})(g_QMARK__13836,g_13837,mkg_13838))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__13836,g_13837,mkg_13838){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_13837).call(null,generator);
});})(g_QMARK__13836,g_13837,mkg_13838))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__8721__auto___13859 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__8721__auto___13859){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__4736__auto__ = [];
var len__4730__auto___13860 = arguments.length;
var i__4731__auto___13861 = (0);
while(true){
if((i__4731__auto___13861 < len__4730__auto___13860)){
args__4736__auto__.push((arguments[i__4731__auto___13861]));

var G__13862 = (i__4731__auto___13861 + (1));
i__4731__auto___13861 = G__13862;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__8721__auto___13859))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8721__auto___13859){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8721__auto___13859),args);
});})(g__8721__auto___13859))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__8721__auto___13859){
return (function (seq13839){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13839));
});})(g__8721__auto___13859))
;


var g__8721__auto___13863 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__8721__auto___13863){
return (function cljs$spec$gen$alpha$list(var_args){
var args__4736__auto__ = [];
var len__4730__auto___13864 = arguments.length;
var i__4731__auto___13865 = (0);
while(true){
if((i__4731__auto___13865 < len__4730__auto___13864)){
args__4736__auto__.push((arguments[i__4731__auto___13865]));

var G__13866 = (i__4731__auto___13865 + (1));
i__4731__auto___13865 = G__13866;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__8721__auto___13863))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8721__auto___13863){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8721__auto___13863),args);
});})(g__8721__auto___13863))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__8721__auto___13863){
return (function (seq13840){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13840));
});})(g__8721__auto___13863))
;


var g__8721__auto___13867 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__8721__auto___13867){
return (function cljs$spec$gen$alpha$map(var_args){
var args__4736__auto__ = [];
var len__4730__auto___13868 = arguments.length;
var i__4731__auto___13869 = (0);
while(true){
if((i__4731__auto___13869 < len__4730__auto___13868)){
args__4736__auto__.push((arguments[i__4731__auto___13869]));

var G__13870 = (i__4731__auto___13869 + (1));
i__4731__auto___13869 = G__13870;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__8721__auto___13867))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8721__auto___13867){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8721__auto___13867),args);
});})(g__8721__auto___13867))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__8721__auto___13867){
return (function (seq13841){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13841));
});})(g__8721__auto___13867))
;


var g__8721__auto___13871 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__8721__auto___13871){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__4736__auto__ = [];
var len__4730__auto___13872 = arguments.length;
var i__4731__auto___13873 = (0);
while(true){
if((i__4731__auto___13873 < len__4730__auto___13872)){
args__4736__auto__.push((arguments[i__4731__auto___13873]));

var G__13874 = (i__4731__auto___13873 + (1));
i__4731__auto___13873 = G__13874;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__8721__auto___13871))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8721__auto___13871){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8721__auto___13871),args);
});})(g__8721__auto___13871))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__8721__auto___13871){
return (function (seq13842){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13842));
});})(g__8721__auto___13871))
;


var g__8721__auto___13875 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__8721__auto___13875){
return (function cljs$spec$gen$alpha$set(var_args){
var args__4736__auto__ = [];
var len__4730__auto___13876 = arguments.length;
var i__4731__auto___13877 = (0);
while(true){
if((i__4731__auto___13877 < len__4730__auto___13876)){
args__4736__auto__.push((arguments[i__4731__auto___13877]));

var G__13878 = (i__4731__auto___13877 + (1));
i__4731__auto___13877 = G__13878;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__8721__auto___13875))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8721__auto___13875){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8721__auto___13875),args);
});})(g__8721__auto___13875))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__8721__auto___13875){
return (function (seq13843){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13843));
});})(g__8721__auto___13875))
;


var g__8721__auto___13879 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__8721__auto___13879){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__4736__auto__ = [];
var len__4730__auto___13880 = arguments.length;
var i__4731__auto___13881 = (0);
while(true){
if((i__4731__auto___13881 < len__4730__auto___13880)){
args__4736__auto__.push((arguments[i__4731__auto___13881]));

var G__13882 = (i__4731__auto___13881 + (1));
i__4731__auto___13881 = G__13882;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__8721__auto___13879))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8721__auto___13879){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8721__auto___13879),args);
});})(g__8721__auto___13879))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__8721__auto___13879){
return (function (seq13844){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13844));
});})(g__8721__auto___13879))
;


var g__8721__auto___13883 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__8721__auto___13883){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__4736__auto__ = [];
var len__4730__auto___13884 = arguments.length;
var i__4731__auto___13885 = (0);
while(true){
if((i__4731__auto___13885 < len__4730__auto___13884)){
args__4736__auto__.push((arguments[i__4731__auto___13885]));

var G__13886 = (i__4731__auto___13885 + (1));
i__4731__auto___13885 = G__13886;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__8721__auto___13883))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8721__auto___13883){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8721__auto___13883),args);
});})(g__8721__auto___13883))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__8721__auto___13883){
return (function (seq13845){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13845));
});})(g__8721__auto___13883))
;


var g__8721__auto___13887 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__8721__auto___13887){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__4736__auto__ = [];
var len__4730__auto___13888 = arguments.length;
var i__4731__auto___13889 = (0);
while(true){
if((i__4731__auto___13889 < len__4730__auto___13888)){
args__4736__auto__.push((arguments[i__4731__auto___13889]));

var G__13890 = (i__4731__auto___13889 + (1));
i__4731__auto___13889 = G__13890;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__8721__auto___13887))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8721__auto___13887){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8721__auto___13887),args);
});})(g__8721__auto___13887))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__8721__auto___13887){
return (function (seq13846){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13846));
});})(g__8721__auto___13887))
;


var g__8721__auto___13891 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__8721__auto___13891){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__4736__auto__ = [];
var len__4730__auto___13892 = arguments.length;
var i__4731__auto___13893 = (0);
while(true){
if((i__4731__auto___13893 < len__4730__auto___13892)){
args__4736__auto__.push((arguments[i__4731__auto___13893]));

var G__13894 = (i__4731__auto___13893 + (1));
i__4731__auto___13893 = G__13894;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__8721__auto___13891))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8721__auto___13891){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8721__auto___13891),args);
});})(g__8721__auto___13891))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__8721__auto___13891){
return (function (seq13847){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13847));
});})(g__8721__auto___13891))
;


var g__8721__auto___13895 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__8721__auto___13895){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__4736__auto__ = [];
var len__4730__auto___13896 = arguments.length;
var i__4731__auto___13897 = (0);
while(true){
if((i__4731__auto___13897 < len__4730__auto___13896)){
args__4736__auto__.push((arguments[i__4731__auto___13897]));

var G__13898 = (i__4731__auto___13897 + (1));
i__4731__auto___13897 = G__13898;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__8721__auto___13895))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8721__auto___13895){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8721__auto___13895),args);
});})(g__8721__auto___13895))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__8721__auto___13895){
return (function (seq13848){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13848));
});})(g__8721__auto___13895))
;


var g__8721__auto___13899 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__8721__auto___13899){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__4736__auto__ = [];
var len__4730__auto___13900 = arguments.length;
var i__4731__auto___13901 = (0);
while(true){
if((i__4731__auto___13901 < len__4730__auto___13900)){
args__4736__auto__.push((arguments[i__4731__auto___13901]));

var G__13902 = (i__4731__auto___13901 + (1));
i__4731__auto___13901 = G__13902;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__8721__auto___13899))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8721__auto___13899){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8721__auto___13899),args);
});})(g__8721__auto___13899))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__8721__auto___13899){
return (function (seq13849){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13849));
});})(g__8721__auto___13899))
;


var g__8721__auto___13903 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__8721__auto___13903){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__4736__auto__ = [];
var len__4730__auto___13904 = arguments.length;
var i__4731__auto___13905 = (0);
while(true){
if((i__4731__auto___13905 < len__4730__auto___13904)){
args__4736__auto__.push((arguments[i__4731__auto___13905]));

var G__13906 = (i__4731__auto___13905 + (1));
i__4731__auto___13905 = G__13906;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__8721__auto___13903))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8721__auto___13903){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8721__auto___13903),args);
});})(g__8721__auto___13903))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__8721__auto___13903){
return (function (seq13850){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13850));
});})(g__8721__auto___13903))
;


var g__8721__auto___13907 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__8721__auto___13907){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__4736__auto__ = [];
var len__4730__auto___13908 = arguments.length;
var i__4731__auto___13909 = (0);
while(true){
if((i__4731__auto___13909 < len__4730__auto___13908)){
args__4736__auto__.push((arguments[i__4731__auto___13909]));

var G__13910 = (i__4731__auto___13909 + (1));
i__4731__auto___13909 = G__13910;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__8721__auto___13907))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8721__auto___13907){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8721__auto___13907),args);
});})(g__8721__auto___13907))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__8721__auto___13907){
return (function (seq13851){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13851));
});})(g__8721__auto___13907))
;


var g__8721__auto___13911 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__8721__auto___13911){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__4736__auto__ = [];
var len__4730__auto___13912 = arguments.length;
var i__4731__auto___13913 = (0);
while(true){
if((i__4731__auto___13913 < len__4730__auto___13912)){
args__4736__auto__.push((arguments[i__4731__auto___13913]));

var G__13914 = (i__4731__auto___13913 + (1));
i__4731__auto___13913 = G__13914;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__8721__auto___13911))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8721__auto___13911){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8721__auto___13911),args);
});})(g__8721__auto___13911))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__8721__auto___13911){
return (function (seq13852){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13852));
});})(g__8721__auto___13911))
;


var g__8721__auto___13915 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__8721__auto___13915){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__4736__auto__ = [];
var len__4730__auto___13916 = arguments.length;
var i__4731__auto___13917 = (0);
while(true){
if((i__4731__auto___13917 < len__4730__auto___13916)){
args__4736__auto__.push((arguments[i__4731__auto___13917]));

var G__13918 = (i__4731__auto___13917 + (1));
i__4731__auto___13917 = G__13918;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__8721__auto___13915))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8721__auto___13915){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8721__auto___13915),args);
});})(g__8721__auto___13915))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__8721__auto___13915){
return (function (seq13853){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13853));
});})(g__8721__auto___13915))
;


var g__8721__auto___13919 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__8721__auto___13919){
return (function cljs$spec$gen$alpha$return(var_args){
var args__4736__auto__ = [];
var len__4730__auto___13920 = arguments.length;
var i__4731__auto___13921 = (0);
while(true){
if((i__4731__auto___13921 < len__4730__auto___13920)){
args__4736__auto__.push((arguments[i__4731__auto___13921]));

var G__13922 = (i__4731__auto___13921 + (1));
i__4731__auto___13921 = G__13922;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__8721__auto___13919))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8721__auto___13919){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8721__auto___13919),args);
});})(g__8721__auto___13919))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__8721__auto___13919){
return (function (seq13854){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13854));
});})(g__8721__auto___13919))
;


var g__8721__auto___13923 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__8721__auto___13923){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___13924 = arguments.length;
var i__4731__auto___13925 = (0);
while(true){
if((i__4731__auto___13925 < len__4730__auto___13924)){
args__4736__auto__.push((arguments[i__4731__auto___13925]));

var G__13926 = (i__4731__auto___13925 + (1));
i__4731__auto___13925 = G__13926;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__8721__auto___13923))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8721__auto___13923){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8721__auto___13923),args);
});})(g__8721__auto___13923))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__8721__auto___13923){
return (function (seq13855){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13855));
});})(g__8721__auto___13923))
;


var g__8721__auto___13927 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__8721__auto___13927){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___13928 = arguments.length;
var i__4731__auto___13929 = (0);
while(true){
if((i__4731__auto___13929 < len__4730__auto___13928)){
args__4736__auto__.push((arguments[i__4731__auto___13929]));

var G__13930 = (i__4731__auto___13929 + (1));
i__4731__auto___13929 = G__13930;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__8721__auto___13927))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8721__auto___13927){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8721__auto___13927),args);
});})(g__8721__auto___13927))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__8721__auto___13927){
return (function (seq13856){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13856));
});})(g__8721__auto___13927))
;


var g__8721__auto___13931 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__8721__auto___13931){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__4736__auto__ = [];
var len__4730__auto___13932 = arguments.length;
var i__4731__auto___13933 = (0);
while(true){
if((i__4731__auto___13933 < len__4730__auto___13932)){
args__4736__auto__.push((arguments[i__4731__auto___13933]));

var G__13934 = (i__4731__auto___13933 + (1));
i__4731__auto___13933 = G__13934;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__8721__auto___13931))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8721__auto___13931){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8721__auto___13931),args);
});})(g__8721__auto___13931))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__8721__auto___13931){
return (function (seq13857){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13857));
});})(g__8721__auto___13931))
;


var g__8721__auto___13935 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.shuffle !== 'undefined')){
return clojure.test.check.generators.shuffle;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","shuffle","clojure.test.check.generators/shuffle",1032401055,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","shuffle","clojure.test.check.generators/shuffle",1032401055,null))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/shuffle
 */
cljs.spec.gen.alpha.shuffle = ((function (g__8721__auto___13935){
return (function cljs$spec$gen$alpha$shuffle(var_args){
var args__4736__auto__ = [];
var len__4730__auto___13936 = arguments.length;
var i__4731__auto___13937 = (0);
while(true){
if((i__4731__auto___13937 < len__4730__auto___13936)){
args__4736__auto__.push((arguments[i__4731__auto___13937]));

var G__13938 = (i__4731__auto___13937 + (1));
i__4731__auto___13937 = G__13938;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.shuffle.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__8721__auto___13935))
;

cljs.spec.gen.alpha.shuffle.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8721__auto___13935){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__8721__auto___13935),args);
});})(g__8721__auto___13935))
;

cljs.spec.gen.alpha.shuffle.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.shuffle.cljs$lang$applyTo = ((function (g__8721__auto___13935){
return (function (seq13858){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13858));
});})(g__8721__auto___13935))
;

var g__8734__auto___13960 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__8734__auto___13960){
return (function cljs$spec$gen$alpha$any(var_args){
var args__4736__auto__ = [];
var len__4730__auto___13961 = arguments.length;
var i__4731__auto___13962 = (0);
while(true){
if((i__4731__auto___13962 < len__4730__auto___13961)){
args__4736__auto__.push((arguments[i__4731__auto___13962]));

var G__13963 = (i__4731__auto___13962 + (1));
i__4731__auto___13962 = G__13963;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__8734__auto___13960))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8734__auto___13960){
return (function (args){
return cljs.core.deref.call(null,g__8734__auto___13960);
});})(g__8734__auto___13960))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__8734__auto___13960){
return (function (seq13939){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13939));
});})(g__8734__auto___13960))
;


var g__8734__auto___13964 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__8734__auto___13964){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__4736__auto__ = [];
var len__4730__auto___13965 = arguments.length;
var i__4731__auto___13966 = (0);
while(true){
if((i__4731__auto___13966 < len__4730__auto___13965)){
args__4736__auto__.push((arguments[i__4731__auto___13966]));

var G__13967 = (i__4731__auto___13966 + (1));
i__4731__auto___13966 = G__13967;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__8734__auto___13964))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8734__auto___13964){
return (function (args){
return cljs.core.deref.call(null,g__8734__auto___13964);
});})(g__8734__auto___13964))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__8734__auto___13964){
return (function (seq13940){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13940));
});})(g__8734__auto___13964))
;


var g__8734__auto___13968 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__8734__auto___13968){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__4736__auto__ = [];
var len__4730__auto___13969 = arguments.length;
var i__4731__auto___13970 = (0);
while(true){
if((i__4731__auto___13970 < len__4730__auto___13969)){
args__4736__auto__.push((arguments[i__4731__auto___13970]));

var G__13971 = (i__4731__auto___13970 + (1));
i__4731__auto___13970 = G__13971;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__8734__auto___13968))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8734__auto___13968){
return (function (args){
return cljs.core.deref.call(null,g__8734__auto___13968);
});})(g__8734__auto___13968))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__8734__auto___13968){
return (function (seq13941){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13941));
});})(g__8734__auto___13968))
;


var g__8734__auto___13972 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__8734__auto___13972){
return (function cljs$spec$gen$alpha$char(var_args){
var args__4736__auto__ = [];
var len__4730__auto___13973 = arguments.length;
var i__4731__auto___13974 = (0);
while(true){
if((i__4731__auto___13974 < len__4730__auto___13973)){
args__4736__auto__.push((arguments[i__4731__auto___13974]));

var G__13975 = (i__4731__auto___13974 + (1));
i__4731__auto___13974 = G__13975;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__8734__auto___13972))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8734__auto___13972){
return (function (args){
return cljs.core.deref.call(null,g__8734__auto___13972);
});})(g__8734__auto___13972))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__8734__auto___13972){
return (function (seq13942){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13942));
});})(g__8734__auto___13972))
;


var g__8734__auto___13976 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__8734__auto___13976){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__4736__auto__ = [];
var len__4730__auto___13977 = arguments.length;
var i__4731__auto___13978 = (0);
while(true){
if((i__4731__auto___13978 < len__4730__auto___13977)){
args__4736__auto__.push((arguments[i__4731__auto___13978]));

var G__13979 = (i__4731__auto___13978 + (1));
i__4731__auto___13978 = G__13979;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__8734__auto___13976))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8734__auto___13976){
return (function (args){
return cljs.core.deref.call(null,g__8734__auto___13976);
});})(g__8734__auto___13976))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__8734__auto___13976){
return (function (seq13943){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13943));
});})(g__8734__auto___13976))
;


var g__8734__auto___13980 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__8734__auto___13980){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__4736__auto__ = [];
var len__4730__auto___13981 = arguments.length;
var i__4731__auto___13982 = (0);
while(true){
if((i__4731__auto___13982 < len__4730__auto___13981)){
args__4736__auto__.push((arguments[i__4731__auto___13982]));

var G__13983 = (i__4731__auto___13982 + (1));
i__4731__auto___13982 = G__13983;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__8734__auto___13980))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8734__auto___13980){
return (function (args){
return cljs.core.deref.call(null,g__8734__auto___13980);
});})(g__8734__auto___13980))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__8734__auto___13980){
return (function (seq13944){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13944));
});})(g__8734__auto___13980))
;


var g__8734__auto___13984 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__8734__auto___13984){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__4736__auto__ = [];
var len__4730__auto___13985 = arguments.length;
var i__4731__auto___13986 = (0);
while(true){
if((i__4731__auto___13986 < len__4730__auto___13985)){
args__4736__auto__.push((arguments[i__4731__auto___13986]));

var G__13987 = (i__4731__auto___13986 + (1));
i__4731__auto___13986 = G__13987;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__8734__auto___13984))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8734__auto___13984){
return (function (args){
return cljs.core.deref.call(null,g__8734__auto___13984);
});})(g__8734__auto___13984))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__8734__auto___13984){
return (function (seq13945){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13945));
});})(g__8734__auto___13984))
;


var g__8734__auto___13988 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__8734__auto___13988){
return (function cljs$spec$gen$alpha$double(var_args){
var args__4736__auto__ = [];
var len__4730__auto___13989 = arguments.length;
var i__4731__auto___13990 = (0);
while(true){
if((i__4731__auto___13990 < len__4730__auto___13989)){
args__4736__auto__.push((arguments[i__4731__auto___13990]));

var G__13991 = (i__4731__auto___13990 + (1));
i__4731__auto___13990 = G__13991;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__8734__auto___13988))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8734__auto___13988){
return (function (args){
return cljs.core.deref.call(null,g__8734__auto___13988);
});})(g__8734__auto___13988))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__8734__auto___13988){
return (function (seq13946){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13946));
});})(g__8734__auto___13988))
;


var g__8734__auto___13992 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__8734__auto___13992){
return (function cljs$spec$gen$alpha$int(var_args){
var args__4736__auto__ = [];
var len__4730__auto___13993 = arguments.length;
var i__4731__auto___13994 = (0);
while(true){
if((i__4731__auto___13994 < len__4730__auto___13993)){
args__4736__auto__.push((arguments[i__4731__auto___13994]));

var G__13995 = (i__4731__auto___13994 + (1));
i__4731__auto___13994 = G__13995;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__8734__auto___13992))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8734__auto___13992){
return (function (args){
return cljs.core.deref.call(null,g__8734__auto___13992);
});})(g__8734__auto___13992))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__8734__auto___13992){
return (function (seq13947){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13947));
});})(g__8734__auto___13992))
;


var g__8734__auto___13996 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__8734__auto___13996){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__4736__auto__ = [];
var len__4730__auto___13997 = arguments.length;
var i__4731__auto___13998 = (0);
while(true){
if((i__4731__auto___13998 < len__4730__auto___13997)){
args__4736__auto__.push((arguments[i__4731__auto___13998]));

var G__13999 = (i__4731__auto___13998 + (1));
i__4731__auto___13998 = G__13999;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__8734__auto___13996))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8734__auto___13996){
return (function (args){
return cljs.core.deref.call(null,g__8734__auto___13996);
});})(g__8734__auto___13996))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__8734__auto___13996){
return (function (seq13948){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13948));
});})(g__8734__auto___13996))
;


var g__8734__auto___14000 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__8734__auto___14000){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__4736__auto__ = [];
var len__4730__auto___14001 = arguments.length;
var i__4731__auto___14002 = (0);
while(true){
if((i__4731__auto___14002 < len__4730__auto___14001)){
args__4736__auto__.push((arguments[i__4731__auto___14002]));

var G__14003 = (i__4731__auto___14002 + (1));
i__4731__auto___14002 = G__14003;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__8734__auto___14000))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8734__auto___14000){
return (function (args){
return cljs.core.deref.call(null,g__8734__auto___14000);
});})(g__8734__auto___14000))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__8734__auto___14000){
return (function (seq13949){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13949));
});})(g__8734__auto___14000))
;


var g__8734__auto___14004 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__8734__auto___14004){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__4736__auto__ = [];
var len__4730__auto___14005 = arguments.length;
var i__4731__auto___14006 = (0);
while(true){
if((i__4731__auto___14006 < len__4730__auto___14005)){
args__4736__auto__.push((arguments[i__4731__auto___14006]));

var G__14007 = (i__4731__auto___14006 + (1));
i__4731__auto___14006 = G__14007;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__8734__auto___14004))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8734__auto___14004){
return (function (args){
return cljs.core.deref.call(null,g__8734__auto___14004);
});})(g__8734__auto___14004))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__8734__auto___14004){
return (function (seq13950){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13950));
});})(g__8734__auto___14004))
;


var g__8734__auto___14008 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__8734__auto___14008){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__4736__auto__ = [];
var len__4730__auto___14009 = arguments.length;
var i__4731__auto___14010 = (0);
while(true){
if((i__4731__auto___14010 < len__4730__auto___14009)){
args__4736__auto__.push((arguments[i__4731__auto___14010]));

var G__14011 = (i__4731__auto___14010 + (1));
i__4731__auto___14010 = G__14011;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__8734__auto___14008))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8734__auto___14008){
return (function (args){
return cljs.core.deref.call(null,g__8734__auto___14008);
});})(g__8734__auto___14008))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__8734__auto___14008){
return (function (seq13951){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13951));
});})(g__8734__auto___14008))
;


var g__8734__auto___14012 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__8734__auto___14012){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__4736__auto__ = [];
var len__4730__auto___14013 = arguments.length;
var i__4731__auto___14014 = (0);
while(true){
if((i__4731__auto___14014 < len__4730__auto___14013)){
args__4736__auto__.push((arguments[i__4731__auto___14014]));

var G__14015 = (i__4731__auto___14014 + (1));
i__4731__auto___14014 = G__14015;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__8734__auto___14012))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8734__auto___14012){
return (function (args){
return cljs.core.deref.call(null,g__8734__auto___14012);
});})(g__8734__auto___14012))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__8734__auto___14012){
return (function (seq13952){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13952));
});})(g__8734__auto___14012))
;


var g__8734__auto___14016 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__8734__auto___14016){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__4736__auto__ = [];
var len__4730__auto___14017 = arguments.length;
var i__4731__auto___14018 = (0);
while(true){
if((i__4731__auto___14018 < len__4730__auto___14017)){
args__4736__auto__.push((arguments[i__4731__auto___14018]));

var G__14019 = (i__4731__auto___14018 + (1));
i__4731__auto___14018 = G__14019;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__8734__auto___14016))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8734__auto___14016){
return (function (args){
return cljs.core.deref.call(null,g__8734__auto___14016);
});})(g__8734__auto___14016))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__8734__auto___14016){
return (function (seq13953){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13953));
});})(g__8734__auto___14016))
;


var g__8734__auto___14020 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__8734__auto___14020){
return (function cljs$spec$gen$alpha$string(var_args){
var args__4736__auto__ = [];
var len__4730__auto___14021 = arguments.length;
var i__4731__auto___14022 = (0);
while(true){
if((i__4731__auto___14022 < len__4730__auto___14021)){
args__4736__auto__.push((arguments[i__4731__auto___14022]));

var G__14023 = (i__4731__auto___14022 + (1));
i__4731__auto___14022 = G__14023;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__8734__auto___14020))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8734__auto___14020){
return (function (args){
return cljs.core.deref.call(null,g__8734__auto___14020);
});})(g__8734__auto___14020))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__8734__auto___14020){
return (function (seq13954){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13954));
});})(g__8734__auto___14020))
;


var g__8734__auto___14024 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__8734__auto___14024){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__4736__auto__ = [];
var len__4730__auto___14025 = arguments.length;
var i__4731__auto___14026 = (0);
while(true){
if((i__4731__auto___14026 < len__4730__auto___14025)){
args__4736__auto__.push((arguments[i__4731__auto___14026]));

var G__14027 = (i__4731__auto___14026 + (1));
i__4731__auto___14026 = G__14027;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__8734__auto___14024))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8734__auto___14024){
return (function (args){
return cljs.core.deref.call(null,g__8734__auto___14024);
});})(g__8734__auto___14024))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__8734__auto___14024){
return (function (seq13955){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13955));
});})(g__8734__auto___14024))
;


var g__8734__auto___14028 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__8734__auto___14028){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__4736__auto__ = [];
var len__4730__auto___14029 = arguments.length;
var i__4731__auto___14030 = (0);
while(true){
if((i__4731__auto___14030 < len__4730__auto___14029)){
args__4736__auto__.push((arguments[i__4731__auto___14030]));

var G__14031 = (i__4731__auto___14030 + (1));
i__4731__auto___14030 = G__14031;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__8734__auto___14028))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8734__auto___14028){
return (function (args){
return cljs.core.deref.call(null,g__8734__auto___14028);
});})(g__8734__auto___14028))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__8734__auto___14028){
return (function (seq13956){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13956));
});})(g__8734__auto___14028))
;


var g__8734__auto___14032 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__8734__auto___14032){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__4736__auto__ = [];
var len__4730__auto___14033 = arguments.length;
var i__4731__auto___14034 = (0);
while(true){
if((i__4731__auto___14034 < len__4730__auto___14033)){
args__4736__auto__.push((arguments[i__4731__auto___14034]));

var G__14035 = (i__4731__auto___14034 + (1));
i__4731__auto___14034 = G__14035;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__8734__auto___14032))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8734__auto___14032){
return (function (args){
return cljs.core.deref.call(null,g__8734__auto___14032);
});})(g__8734__auto___14032))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__8734__auto___14032){
return (function (seq13957){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13957));
});})(g__8734__auto___14032))
;


var g__8734__auto___14036 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__8734__auto___14036){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__4736__auto__ = [];
var len__4730__auto___14037 = arguments.length;
var i__4731__auto___14038 = (0);
while(true){
if((i__4731__auto___14038 < len__4730__auto___14037)){
args__4736__auto__.push((arguments[i__4731__auto___14038]));

var G__14039 = (i__4731__auto___14038 + (1));
i__4731__auto___14038 = G__14039;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__8734__auto___14036))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8734__auto___14036){
return (function (args){
return cljs.core.deref.call(null,g__8734__auto___14036);
});})(g__8734__auto___14036))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__8734__auto___14036){
return (function (seq13958){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13958));
});})(g__8734__auto___14036))
;


var g__8734__auto___14040 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure !== 'undefined') && (typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__8734__auto___14040){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__4736__auto__ = [];
var len__4730__auto___14041 = arguments.length;
var i__4731__auto___14042 = (0);
while(true){
if((i__4731__auto___14042 < len__4730__auto___14041)){
args__4736__auto__.push((arguments[i__4731__auto___14042]));

var G__14043 = (i__4731__auto___14042 + (1));
i__4731__auto___14042 = G__14043;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(g__8734__auto___14040))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8734__auto___14040){
return (function (args){
return cljs.core.deref.call(null,g__8734__auto___14040);
});})(g__8734__auto___14040))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__8734__auto___14040){
return (function (seq13959){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13959));
});})(g__8734__auto___14040))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__4736__auto__ = [];
var len__4730__auto___14046 = arguments.length;
var i__4731__auto___14047 = (0);
while(true){
if((i__4731__auto___14047 < len__4730__auto___14046)){
args__4736__auto__.push((arguments[i__4731__auto___14047]));

var G__14048 = (i__4731__auto___14047 + (1));
i__4731__auto___14047 = G__14048;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__14044_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__14044_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq14045){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14045));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return (!((cljs.core.namespace.call(null,ident) == null)));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.some_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.uri_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.such_that.call(null,cljs.core.some_QMARK_,cljs.spec.gen.alpha.any_printable.call(null)),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__14050_SHARP_){
return (new Date(p1__14050_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__14049_SHARP_){
return (new goog.Uri(["http://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__14049_SHARP_),".com"].join('')));
});})(simple))
,cljs.spec.gen.alpha.uuid.call(null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=alpha.js.map
