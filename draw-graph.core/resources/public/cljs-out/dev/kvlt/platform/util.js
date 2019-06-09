// Compiled by ClojureScript 1.10.520 {}
goog.provide('kvlt.platform.util');
goog.require('cljs.core');
goog.require('clojure.walk');
kvlt.platform.util.exception__GT_map = (function kvlt$platform$util$exception__GT_map(var_args){
var args__4736__auto__ = [];
var len__4730__auto___27094 = arguments.length;
var i__4731__auto___27095 = (0);
while(true){
if((i__4731__auto___27095 < len__4730__auto___27094)){
args__4736__auto__.push((arguments[i__4731__auto___27095]));

var G__27096 = (i__4731__auto___27095 + (1));
i__4731__auto___27095 = G__27096;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return kvlt.platform.util.exception__GT_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

kvlt.platform.util.exception__GT_map.cljs$core$IFn$_invoke$arity$variadic = (function (e,p__27090){
var vec__27091 = p__27090;
var hints = cljs.core.nth.call(null,vec__27091,(0),null);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"message","message",-406056002),e.message,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"http-error","http-error",-1040049553)], null),hints);
});

kvlt.platform.util.exception__GT_map.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
kvlt.platform.util.exception__GT_map.cljs$lang$applyTo = (function (seq27088){
var G__27089 = cljs.core.first.call(null,seq27088);
var seq27088__$1 = cljs.core.next.call(null,seq27088);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27089,seq27088__$1);
});

kvlt.platform.util.gunzip = (function kvlt$platform$util$gunzip(s){
return s;
});
kvlt.platform.util.inflate = (function kvlt$platform$util$inflate(s){
return s;
});
kvlt.platform.util.byte_array_QMARK_ = (function kvlt$platform$util$byte_array_QMARK_(x){
return (((((typeof ArrayBuffer !== 'undefined')) && (cljs.core._EQ_.call(null,cljs.core.type.call(null,x),ArrayBuffer)))) || ((((typeof Buffer !== 'undefined')) && (cljs.core._EQ_.call(null,cljs.core.type.call(null,x),Buffer)))));
});
kvlt.platform.util.byte_array__GT_str = (function kvlt$platform$util$byte_array__GT_str(ba,encoding){
if((((typeof Buffer !== 'undefined')) && (cljs.core._EQ_.call(null,cljs.core.type.call(null,ba),Buffer)))){
return ba.toString(encoding);
} else {
return ba;
}
});
kvlt.platform.util.parse_json = (function kvlt$platform$util$parse_json(s){
return clojure.walk.keywordize_keys.call(null,cljs.core.js__GT_clj.call(null,JSON.parse(s)));
});
kvlt.platform.util.encode_json = (function kvlt$platform$util$encode_json(x){
return JSON.stringify(cljs.core.clj__GT_js.call(null,x));
});

//# sourceMappingURL=util.js.map
