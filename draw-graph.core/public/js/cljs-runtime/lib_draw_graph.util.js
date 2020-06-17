goog.provide('lib_draw_graph.util');
goog.require('cljs.core');
goog.require('loom.graph');
goog.require('extra_loom.multigraph');
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
var args__4795__auto__ = [];
var len__4789__auto___36808 = arguments.length;
var i__4790__auto___36809 = (0);
while(true){
if((i__4790__auto___36809 < len__4789__auto___36808)){
args__4795__auto__.push((arguments[i__4790__auto___36809]));

var G__36810 = (i__4790__auto___36809 + (1));
i__4790__auto___36809 = G__36810;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return lib_draw_graph.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(lib_draw_graph.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
if(cljs.core.every_QMARK_(cljs.core.map_QMARK_,maps)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,lib_draw_graph.util.deep_merge,maps);
} else {
return cljs.core.last(maps);
}
}));

(lib_draw_graph.util.deep_merge.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(lib_draw_graph.util.deep_merge.cljs$lang$applyTo = (function (seq36767){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq36767));
}));

/**
 * Walks a nested map m recursively updating all keys with the supplied
 * key-fn where the supplied predicate update? fn for the key is true.
 * key-fn should have one parameter; the key.
 * update? should accept two parameters; the key and the parent key.
 */
lib_draw_graph.util.update_keys = (function lib_draw_graph$util$update_keys(m,update_QMARK_,key_fn){
var down = (function lib_draw_graph$util$update_keys_$_f(x,p){
if(cljs.core.map_entry_QMARK_(x)){
var vec__36779 = x;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36779,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36779,(1),null);
if((v == null)){
return null;
} else {
return cljs.core.first(cljs.core.PersistentArrayMap.createAsIfByAssoc([lib_draw_graph$util$update_keys_$_f(k,p),((cljs.core.coll_QMARK_(v))?lib_draw_graph$util$update_keys_$_f(v,k):v)]));
}
} else {
if(cljs.core.seq_QMARK_(x)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36776_SHARP_){
return lib_draw_graph$util$update_keys_$_f(p1__36776_SHARP_,p);
}),x);
} else {
if(cljs.core.coll_QMARK_(x)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(x),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36777_SHARP_){
return lib_draw_graph$util$update_keys_$_f(p1__36777_SHARP_,p);
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
lib_draw_graph.util.parse_int = (function lib_draw_graph$util$parse_int(s){
try{var n = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(s);
if(cljs.core.integer_QMARK_(n)){
return n;
} else {
throw lib_draw_graph.util.err([cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)," should be an integer."].join(''));
}
}catch (e36791){if((e36791 instanceof Error)){
var e = e36791;
throw lib_draw_graph.util.err([cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)," should be an integer."].join(''));
} else {
throw e36791;

}
}});
lib_draw_graph.util.parse_float = (function lib_draw_graph$util$parse_float(s){
try{var n = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(s);
if(cljs.core.float_QMARK_(n)){
return n;
} else {
throw lib_draw_graph.util.err([cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)," should be a floating point number."].join(''));
}
}catch (e36792){if((e36792 instanceof Error)){
var e = e36792;
throw lib_draw_graph.util.err([cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)," should be a floating point number."].join(''));
} else {
throw e36792;

}
}});
/**
 * Is the graph an extra-loom graph (which has different edge attrs)?
 */
lib_draw_graph.util.multigraph_QMARK_ = (function lib_draw_graph$util$multigraph_QMARK_(g){
return null;
});
/**
 * Returns predecessors not including self
 */
lib_draw_graph.util.predecessors_not_self = (function lib_draw_graph$util$predecessors_not_self(g,n){
var predec = loom.graph.predecessors_STAR_(g,n);
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__36793_SHARP_){
return (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,p1__36793_SHARP_)));
}),predec);
});
/**
 * Returns successors not including self
 */
lib_draw_graph.util.successors_not_self = (function lib_draw_graph$util$successors_not_self(g,n){
var succs = loom.graph.successors_STAR_(g,n);
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__36800_SHARP_){
return (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,p1__36800_SHARP_)));
}),succs);
});
/**
 * Predicate for whether the node in the graph is a root.
 */
lib_draw_graph.util.root_QMARK_ = (function lib_draw_graph$util$root_QMARK_(g,n){
return cljs.core.empty_QMARK_(lib_draw_graph.util.predecessors_not_self(g,n));
});
/**
 * Returns the roots from the graph.
 */
lib_draw_graph.util.roots = (function lib_draw_graph$util$roots(g){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__36801_SHARP_){
return lib_draw_graph.util.root_QMARK_(g,p1__36801_SHARP_);
}),loom.graph.nodes(g));
});

//# sourceMappingURL=lib_draw_graph.util.js.map
