// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('lib_draw_graph.util');
goog.require('cljs.core');
goog.require('cljs.core.constants');
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
var len__4730__auto___11147 = arguments.length;
var i__4731__auto___11148 = (0);
while(true){
if((i__4731__auto___11148 < len__4730__auto___11147)){
args__4736__auto__.push((arguments[i__4731__auto___11148]));

var G__11149 = (i__4731__auto___11148 + (1));
i__4731__auto___11148 = G__11149;
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
lib_draw_graph.util.deep_merge.cljs$lang$applyTo = (function (seq11146){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq11146));
});
