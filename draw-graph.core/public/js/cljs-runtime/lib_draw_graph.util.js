goog.provide('lib_draw_graph.util');
goog.require('cljs.core');
/**
 * Creates an exception object with error-string.
 */
lib_draw_graph.util.err = (function lib_draw_graph$util$err(error_string){
return (new Error(error_string));
});
/**
 * Like merge, but merges maps recursively.
 */
lib_draw_graph.util.deep_merge = (function lib_draw_graph$util$deep_merge(var_args){
var args__4736__auto__ = [];
var len__4730__auto___34284 = arguments.length;
var i__4731__auto___34287 = (0);
while(true){
if((i__4731__auto___34287 < len__4730__auto___34284)){
args__4736__auto__.push((arguments[i__4731__auto___34287]));

var G__34290 = (i__4731__auto___34287 + (1));
i__4731__auto___34287 = G__34290;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return lib_draw_graph.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

lib_draw_graph.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
if(cljs.core.every_QMARK_(cljs.core.map_QMARK_,maps)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,lib_draw_graph.util.deep_merge,maps);
} else {
return cljs.core.last(maps);
}
});

lib_draw_graph.util.deep_merge.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
lib_draw_graph.util.deep_merge.cljs$lang$applyTo = (function (seq34185){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34185));
});

/**
 * Updates the keys immediately below the level specified in ks.
 */
lib_draw_graph.util.update_keys_below = (function lib_draw_graph$util$update_keys_below(var_args){
var args__4736__auto__ = [];
var len__4730__auto___34294 = arguments.length;
var i__4731__auto___34295 = (0);
while(true){
if((i__4731__auto___34295 < len__4730__auto___34294)){
args__4736__auto__.push((arguments[i__4731__auto___34295]));

var G__34296 = (i__4731__auto___34295 + (1));
i__4731__auto___34295 = G__34296;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return lib_draw_graph.util.update_keys_below.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

lib_draw_graph.util.update_keys_below.cljs$core$IFn$_invoke$arity$variadic = (function (m,ks,f,args){
var alter = (function (m1,f__$1,args__$1){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m0,p__34233){
var vec__34234 = p__34233;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34234,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34234,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m0,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f__$1,k,args__$1),v);
}),cljs.core.PersistentArrayMap.EMPTY,m1);
});
var up = ((function (alter){
return (function lib_draw_graph$util$up(m__$1,ks__$1,f__$1,args__$1){
var vec__34243 = ks__$1;
var seq__34244 = cljs.core.seq(vec__34243);
var first__34245 = cljs.core.first(seq__34244);
var seq__34244__$1 = cljs.core.next(seq__34244);
var k = first__34245;
var ks__$2 = seq__34244__$1;
if(ks__$2){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k,lib_draw_graph$util$up(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m__$1,k),ks__$2,f__$1,args__$1));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k,alter(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m__$1,k),f__$1,args__$1));
}
});})(alter))
;
return up(m,ks,f,args);
});

lib_draw_graph.util.update_keys_below.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
lib_draw_graph.util.update_keys_below.cljs$lang$applyTo = (function (seq34211){
var G__34212 = cljs.core.first(seq34211);
var seq34211__$1 = cljs.core.next(seq34211);
var G__34213 = cljs.core.first(seq34211__$1);
var seq34211__$2 = cljs.core.next(seq34211__$1);
var G__34214 = cljs.core.first(seq34211__$2);
var seq34211__$3 = cljs.core.next(seq34211__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34212,G__34213,G__34214,seq34211__$3);
});


//# sourceMappingURL=lib_draw_graph.util.js.map
