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
var len__4730__auto___34222 = arguments.length;
var i__4731__auto___34223 = (0);
while(true){
if((i__4731__auto___34223 < len__4730__auto___34222)){
args__4736__auto__.push((arguments[i__4731__auto___34223]));

var G__34227 = (i__4731__auto___34223 + (1));
i__4731__auto___34223 = G__34227;
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
lib_draw_graph.util.deep_merge.cljs$lang$applyTo = (function (seq34186){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34186));
});

/**
 * Walks a nested map m recursively updating all keys with the supplied
 * key-fn where the supplied predicate update? fn for the key is true.
 * key-fn should have one parameter; the key.
 * update? should accept two parameters; the key and the parent key.
 */
lib_draw_graph.util.update_keys = (function lib_draw_graph$util$update_keys(m,update_QMARK_,key_fn){
var down = (function lib_draw_graph$util$update_keys_$_f(x,p){
if(cljs.core.map_entry_QMARK_(x)){
var vec__34202 = x;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34202,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34202,(1),null);
if((v == null)){
return null;
} else {
return cljs.core.first(cljs.core.PersistentArrayMap.createAsIfByAssoc([lib_draw_graph$util$update_keys_$_f(k,p),((cljs.core.coll_QMARK_(v))?lib_draw_graph$util$update_keys_$_f(v,k):v)]));
}
} else {
if(cljs.core.seq_QMARK_(x)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34200_SHARP_){
return lib_draw_graph$util$update_keys_$_f(p1__34200_SHARP_,p);
}),x);
} else {
if(cljs.core.coll_QMARK_(x)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(x),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34201_SHARP_){
return lib_draw_graph$util$update_keys_$_f(p1__34201_SHARP_,p);
}),x));
} else {
if(cljs.core.truth_((update_QMARK_.cljs$core$IFn$_invoke$arity$2 ? update_QMARK_.cljs$core$IFn$_invoke$arity$2(x,p) : update_QMARK_.call(null,x,p)))){
return (key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(x) : key_fn.call(null,x));
} else {
return x;
}

}
}
}
});
return down(m,null);
});

//# sourceMappingURL=lib_draw_graph.util.js.map
