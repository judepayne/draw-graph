goog.provide('kvlt.platform.util');
goog.require('cljs.core');
goog.require('clojure.walk');
kvlt.platform.util.exception__GT_map = (function kvlt$platform$util$exception__GT_map(var_args){
var args__4795__auto__ = [];
var len__4789__auto___43610 = arguments.length;
var i__4790__auto___43611 = (0);
while(true){
if((i__4790__auto___43611 < len__4789__auto___43610)){
args__4795__auto__.push((arguments[i__4790__auto___43611]));

var G__43612 = (i__4790__auto___43611 + (1));
i__4790__auto___43611 = G__43612;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return kvlt.platform.util.exception__GT_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(kvlt.platform.util.exception__GT_map.cljs$core$IFn$_invoke$arity$variadic = (function (e,p__43599){
var vec__43600 = p__43599;
var hints = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43600,(0),null);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"message","message",-406056002),e.message,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"http-error","http-error",-1040049553)], null),hints], 0));
}));

(kvlt.platform.util.exception__GT_map.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(kvlt.platform.util.exception__GT_map.cljs$lang$applyTo = (function (seq43597){
var G__43598 = cljs.core.first(seq43597);
var seq43597__$1 = cljs.core.next(seq43597);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43598,seq43597__$1);
}));

kvlt.platform.util.gunzip = (function kvlt$platform$util$gunzip(s){
return s;
});
kvlt.platform.util.inflate = (function kvlt$platform$util$inflate(s){
return s;
});
kvlt.platform.util.byte_array_QMARK_ = (function kvlt$platform$util$byte_array_QMARK_(x){
return (((((typeof ArrayBuffer !== 'undefined')) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(x),ArrayBuffer)))) || ((((typeof Buffer !== 'undefined')) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(x),Buffer)))));
});
kvlt.platform.util.byte_array__GT_str = (function kvlt$platform$util$byte_array__GT_str(ba,encoding){
if((((typeof Buffer !== 'undefined')) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(ba),Buffer)))){
return ba.toString(encoding);
} else {
return ba;
}
});
kvlt.platform.util.parse_json = (function kvlt$platform$util$parse_json(s){
return clojure.walk.keywordize_keys(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(JSON.parse(s)));
});
kvlt.platform.util.encode_json = (function kvlt$platform$util$encode_json(x){
return JSON.stringify(cljs.core.clj__GT_js(x));
});

//# sourceMappingURL=kvlt.platform.util.js.map
