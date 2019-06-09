// Compiled by ClojureScript 1.10.520 {}
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
var len__4730__auto___9293 = arguments.length;
var i__4731__auto___9294 = (0);
while(true){
if((i__4731__auto___9294 < len__4730__auto___9293)){
args__4736__auto__.push((arguments[i__4731__auto___9294]));

var G__9295 = (i__4731__auto___9294 + (1));
i__4731__auto___9294 = G__9295;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return lib_draw_graph.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

lib_draw_graph.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
if(cljs.core.every_QMARK_.call(null,cljs.core.map_QMARK_,maps)){
return cljs.core.apply.call(null,cljs.core.merge_with,lib_draw_graph.util.deep_merge,maps);
} else {
return cljs.core.last.call(null,maps);
}
});

lib_draw_graph.util.deep_merge.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
lib_draw_graph.util.deep_merge.cljs$lang$applyTo = (function (seq9292){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9292));
});


//# sourceMappingURL=util.js.map
