// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('loom.alg');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('loom.alg_generic');
goog.require('loom.flow');
goog.require('loom.graph');
goog.require('tailrecursion.priority_map');
goog.require('clojure.set');
loom.alg.traverse_all = (function loom$alg$traverse_all(nodes,traverse){
return cljs.core.persistent_BANG_(cljs.core.second(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__42717,n){
var vec__42718 = p__42717;
var seen = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42718,(0),null);
var trav = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42718,(1),null);
if(cljs.core.truth_((seen.cljs$core$IFn$_invoke$arity$1 ? seen.cljs$core$IFn$_invoke$arity$1(n) : seen.call(null,n)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [seen,trav], null);
} else {
var ctrav = (function (){var G__42721 = n;
var G__42722 = cljs.core.cst$kw$seen;
var G__42723 = seen;
return (traverse.cljs$core$IFn$_invoke$arity$3 ? traverse.cljs$core$IFn$_invoke$arity$3(G__42721,G__42722,G__42723) : traverse.call(null,G__42721,G__42722,G__42723));
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(seen,ctrav),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,trav,ctrav)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashSet.EMPTY,cljs.core.transient$(cljs.core.PersistentVector.EMPTY)], null),nodes)));
});
/**
 * Traverses graph g depth-first from start. Returns a lazy seq of nodes.
 *   When no starting node is provided, traverses the entire graph, connected
 *   or not.
 */
loom.alg.pre_traverse = (function loom$alg$pre_traverse(var_args){
var G__42725 = arguments.length;
switch (G__42725) {
case 1:
return loom.alg.pre_traverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return loom.alg.pre_traverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

loom.alg.pre_traverse.cljs$core$IFn$_invoke$arity$1 = (function (g){
return loom.alg.traverse_all(loom.graph.nodes(g),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(loom.alg_generic.pre_traverse,loom.graph.successors.cljs$core$IFn$_invoke$arity$1(g)));
});

loom.alg.pre_traverse.cljs$core$IFn$_invoke$arity$2 = (function (g,start){
return loom.alg_generic.pre_traverse(loom.graph.successors.cljs$core$IFn$_invoke$arity$1(g),start);
});

loom.alg.pre_traverse.cljs$lang$maxFixedArity = 2;

/**
 * Returns a depth-first spanning tree of the form {node [successors]}
 */
loom.alg.pre_span = (function loom$alg$pre_span(var_args){
var G__42728 = arguments.length;
switch (G__42728) {
case 1:
return loom.alg.pre_span.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return loom.alg.pre_span.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

loom.alg.pre_span.cljs$core$IFn$_invoke$arity$1 = (function (g){
return cljs.core.second(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__42729,n){
var vec__42730 = p__42729;
var seen = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42730,(0),null);
var span = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42730,(1),null);
if(cljs.core.truth_((seen.cljs$core$IFn$_invoke$arity$1 ? seen.cljs$core$IFn$_invoke$arity$1(n) : seen.call(null,n)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [seen,span], null);
} else {
var vec__42733 = loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic(loom.graph.successors.cljs$core$IFn$_invoke$arity$1(g),n,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$seen,seen,cljs.core.cst$kw$return_DASH_seen,true], 0));
var cspan = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42733,(0),null);
var seen__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42733,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [seen__$1,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([span,cljs.core.PersistentArrayMap.createAsIfByAssoc([n,cljs.core.PersistentVector.EMPTY]),cspan], 0))], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentArrayMap.EMPTY], null),loom.graph.nodes(g)));
});

loom.alg.pre_span.cljs$core$IFn$_invoke$arity$2 = (function (g,start){
return loom.alg_generic.pre_span(loom.graph.successors.cljs$core$IFn$_invoke$arity$1(g),start);
});

loom.alg.pre_span.cljs$lang$maxFixedArity = 2;

/**
 * Traverses graph g depth-first, post-order from start. Returns a
 *   vector of the nodes.
 */
loom.alg.post_traverse = (function loom$alg$post_traverse(var_args){
var G__42741 = arguments.length;
switch (G__42741) {
case 1:
return loom.alg.post_traverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___42743 = arguments.length;
var i__4731__auto___42744 = (0);
while(true){
if((i__4731__auto___42744 < len__4730__auto___42743)){
args_arr__4751__auto__.push((arguments[i__4731__auto___42744]));

var G__42745 = (i__4731__auto___42744 + (1));
i__4731__auto___42744 = G__42745;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((2)),(0),null));
return loom.alg.post_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4752__auto__);

}
});

loom.alg.post_traverse.cljs$core$IFn$_invoke$arity$1 = (function (g){
return loom.alg.traverse_all(loom.graph.nodes(g),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(loom.alg_generic.post_traverse,loom.graph.successors.cljs$core$IFn$_invoke$arity$1(g)));
});

loom.alg.post_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (g,start,opts){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(loom.alg_generic.post_traverse,loom.graph.successors.cljs$core$IFn$_invoke$arity$1(g),start,opts);
});

/** @this {Function} */
loom.alg.post_traverse.cljs$lang$applyTo = (function (seq42738){
var G__42739 = cljs.core.first(seq42738);
var seq42738__$1 = cljs.core.next(seq42738);
var G__42740 = cljs.core.first(seq42738__$1);
var seq42738__$2 = cljs.core.next(seq42738__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42739,G__42740,seq42738__$2);
});

loom.alg.post_traverse.cljs$lang$maxFixedArity = (2);

/**
 * Topological sort of a directed acyclic graph (DAG). Returns nil if
 *   g contains any cycles.
 */
loom.alg.topsort = (function loom$alg$topsort(var_args){
var G__42747 = arguments.length;
switch (G__42747) {
case 1:
return loom.alg.topsort.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return loom.alg.topsort.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

loom.alg.topsort.cljs$core$IFn$_invoke$arity$1 = (function (g){
var seen = cljs.core.PersistentHashSet.EMPTY;
var result = cljs.core.List.EMPTY;
var G__42751 = cljs.core.seq(loom.graph.nodes(g));
var vec__42752 = G__42751;
var seq__42753 = cljs.core.seq(vec__42752);
var first__42754 = cljs.core.first(seq__42753);
var seq__42753__$1 = cljs.core.next(seq__42753);
var n = first__42754;
var ns = seq__42753__$1;
var seen__$1 = seen;
var result__$1 = result;
var G__42751__$1 = G__42751;
while(true){
var seen__$2 = seen__$1;
var result__$2 = result__$1;
var vec__42758 = G__42751__$1;
var seq__42759 = cljs.core.seq(vec__42758);
var first__42760 = cljs.core.first(seq__42759);
var seq__42759__$1 = cljs.core.next(seq__42759);
var n__$1 = first__42760;
var ns__$1 = seq__42759__$1;
if(cljs.core.not(n__$1)){
return result__$2;
} else {
if(cljs.core.truth_((seen__$2.cljs$core$IFn$_invoke$arity$1 ? seen__$2.cljs$core$IFn$_invoke$arity$1(n__$1) : seen__$2.call(null,n__$1)))){
var G__42762 = seen__$2;
var G__42763 = result__$2;
var G__42764 = ns__$1;
seen__$1 = G__42762;
result__$1 = G__42763;
G__42751__$1 = G__42764;
continue;
} else {
var temp__5720__auto__ = loom.alg_generic.topsort_component.cljs$core$IFn$_invoke$arity$4(loom.graph.successors.cljs$core$IFn$_invoke$arity$1(g),n__$1,seen__$2,seen__$2);
if(cljs.core.truth_(temp__5720__auto__)){
var cresult = temp__5720__auto__;
var G__42765 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(seen__$2,cresult);
var G__42766 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cresult,result__$2);
var G__42767 = ns__$1;
seen__$1 = G__42765;
result__$1 = G__42766;
G__42751__$1 = G__42767;
continue;
} else {
return null;
}
}
}
break;
}
});

loom.alg.topsort.cljs$core$IFn$_invoke$arity$2 = (function (g,start){
return loom.alg_generic.topsort_component.cljs$core$IFn$_invoke$arity$2(loom.graph.successors.cljs$core$IFn$_invoke$arity$1(g),start);
});

loom.alg.topsort.cljs$lang$maxFixedArity = 2;

/**
 * Traverses graph g breadth-first from start. When option :f is provided,
 *   returns a lazy seq of (f node predecessor-map depth) for each node traversed.
 *   Otherwise, returns a lazy seq of the nodes. When option :when is provided,
 *   filters successors with (f neighbor predecessor depth).
 */
loom.alg.bf_traverse = (function loom$alg$bf_traverse(var_args){
var G__42772 = arguments.length;
switch (G__42772) {
case 1:
return loom.alg.bf_traverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return loom.alg.bf_traverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___42786 = arguments.length;
var i__4731__auto___42787 = (0);
while(true){
if((i__4731__auto___42787 < len__4730__auto___42786)){
args_arr__4751__auto__.push((arguments[i__4731__auto___42787]));

var G__42788 = (i__4731__auto___42787 + (1));
i__4731__auto___42787 = G__42788;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((2)),(0),null));
return loom.alg.bf_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4752__auto__);

}
});

loom.alg.bf_traverse.cljs$core$IFn$_invoke$arity$1 = (function (g){
return cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__42773,n){
var vec__42774 = p__42773;
var cc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42774,(0),null);
var predmap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42774,(1),null);
if(cljs.core.contains_QMARK_(predmap,n)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cc,predmap], null);
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__42774,cc,predmap){
return (function (p__42777,p__42778){
var vec__42779 = p__42777;
var cc__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42779,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42779,(1),null);
var vec__42782 = p__42778;
var n__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42782,(0),null);
var pm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42782,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42782,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cc__$1,n__$1),pm], null);
});})(vec__42774,cc,predmap))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cc,predmap], null),loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic(loom.graph.successors.cljs$core$IFn$_invoke$arity$1(g),n,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$f,cljs.core.vector,cljs.core.cst$kw$seen,predmap], 0)));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY], null),loom.graph.nodes(g)));
});

loom.alg.bf_traverse.cljs$core$IFn$_invoke$arity$2 = (function (g,start){
return loom.alg_generic.bf_traverse(loom.graph.successors.cljs$core$IFn$_invoke$arity$1(g),start);
});

loom.alg.bf_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (g,start,opts){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(loom.alg_generic.bf_traverse,loom.graph.successors.cljs$core$IFn$_invoke$arity$1(g),start,opts);
});

/** @this {Function} */
loom.alg.bf_traverse.cljs$lang$applyTo = (function (seq42769){
var G__42770 = cljs.core.first(seq42769);
var seq42769__$1 = cljs.core.next(seq42769);
var G__42771 = cljs.core.first(seq42769__$1);
var seq42769__$2 = cljs.core.next(seq42769__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42770,G__42771,seq42769__$2);
});

loom.alg.bf_traverse.cljs$lang$maxFixedArity = (2);

/**
 * Returns a breadth-first spanning tree of the form {node [successors]}
 */
loom.alg.bf_span = (function loom$alg$bf_span(var_args){
var G__42790 = arguments.length;
switch (G__42790) {
case 1:
return loom.alg.bf_span.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return loom.alg.bf_span.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

loom.alg.bf_span.cljs$core$IFn$_invoke$arity$1 = (function (g){
return loom.alg_generic.preds__GT_span(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (predmap,n){
if(cljs.core.contains_QMARK_(predmap,n)){
return predmap;
} else {
return cljs.core.last(loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic(loom.graph.successors.cljs$core$IFn$_invoke$arity$1(g),n,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$f,(function (_,pm,___$1){
return pm;
}),cljs.core.cst$kw$seen,predmap], 0)));
}
}),cljs.core.PersistentArrayMap.EMPTY,loom.graph.nodes(g)));
});

loom.alg.bf_span.cljs$core$IFn$_invoke$arity$2 = (function (g,start){
return loom.alg_generic.bf_span(loom.graph.successors.cljs$core$IFn$_invoke$arity$1(g),start);
});

loom.alg.bf_span.cljs$lang$maxFixedArity = 2;

/**
 * Returns a path from start to end with the fewest hops (i.e. irrespective
 *   of edge weights)
 */
loom.alg.bf_path = (function loom$alg$bf_path(var_args){
var args__4736__auto__ = [];
var len__4730__auto___42796 = arguments.length;
var i__4731__auto___42797 = (0);
while(true){
if((i__4731__auto___42797 < len__4730__auto___42796)){
args__4736__auto__.push((arguments[i__4731__auto___42797]));

var G__42798 = (i__4731__auto___42797 + (1));
i__4731__auto___42797 = G__42798;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return loom.alg.bf_path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

loom.alg.bf_path.cljs$core$IFn$_invoke$arity$variadic = (function (g,start,end,opts){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(loom.alg_generic.bf_path,loom.graph.successors.cljs$core$IFn$_invoke$arity$1(g),start,end,opts);
});

loom.alg.bf_path.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
loom.alg.bf_path.cljs$lang$applyTo = (function (seq42792){
var G__42793 = cljs.core.first(seq42792);
var seq42792__$1 = cljs.core.next(seq42792);
var G__42794 = cljs.core.first(seq42792__$1);
var seq42792__$2 = cljs.core.next(seq42792__$1);
var G__42795 = cljs.core.first(seq42792__$2);
var seq42792__$3 = cljs.core.next(seq42792__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42793,G__42794,G__42795,seq42792__$3);
});

/**
 * Using a bidirectional breadth-first search, finds a path from start to
 *   end with the fewest hops (i.e. irrespective of edge weights). Can be much
 *   faster than a unidirectional search on certain types of graphs
 */
loom.alg.bf_path_bi = (function loom$alg$bf_path_bi(g,start,end){
if(loom.graph.directed_QMARK_(g)){
return loom.alg_generic.bf_path_bi(loom.graph.successors.cljs$core$IFn$_invoke$arity$1(g),loom.graph.predecessors.cljs$core$IFn$_invoke$arity$1(g),start,end);
} else {
return loom.alg_generic.bf_path_bi(loom.graph.successors.cljs$core$IFn$_invoke$arity$1(g),loom.graph.successors.cljs$core$IFn$_invoke$arity$1(g),start,end);
}
});
/**
 * Returns a lazy-seq of [current-node state] where state is a map in
 *   the format {node [distance predecessor]}. When f is provided,
 *   returns a lazy-seq of (f node state) for each node
 */
loom.alg.dijkstra_traverse = (function loom$alg$dijkstra_traverse(var_args){
var G__42800 = arguments.length;
switch (G__42800) {
case 1:
return loom.alg.dijkstra_traverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return loom.alg.dijkstra_traverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return loom.alg.dijkstra_traverse.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

loom.alg.dijkstra_traverse.cljs$core$IFn$_invoke$arity$1 = (function (g){
return loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$3(loom.graph.successors.cljs$core$IFn$_invoke$arity$1(g),loom.graph.weight.cljs$core$IFn$_invoke$arity$1(g),cljs.core.first(loom.graph.nodes(g)));
});

loom.alg.dijkstra_traverse.cljs$core$IFn$_invoke$arity$2 = (function (g,start){
return loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$4(loom.graph.successors.cljs$core$IFn$_invoke$arity$1(g),loom.graph.weight.cljs$core$IFn$_invoke$arity$1(g),start,cljs.core.vector);
});

loom.alg.dijkstra_traverse.cljs$core$IFn$_invoke$arity$3 = (function (g,start,f){
return loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$4(loom.graph.successors.cljs$core$IFn$_invoke$arity$1(g),loom.graph.weight.cljs$core$IFn$_invoke$arity$1(g),start,f);
});

loom.alg.dijkstra_traverse.cljs$lang$maxFixedArity = 3;

/**
 * Finds all shortest distances from start. Returns a map in the
 *   format {node {successor distance}}
 */
loom.alg.dijkstra_span = (function loom$alg$dijkstra_span(var_args){
var G__42803 = arguments.length;
switch (G__42803) {
case 1:
return loom.alg.dijkstra_span.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return loom.alg.dijkstra_span.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

loom.alg.dijkstra_span.cljs$core$IFn$_invoke$arity$1 = (function (g){
return loom.alg_generic.dijkstra_span(loom.graph.successors.cljs$core$IFn$_invoke$arity$1(g),loom.graph.weight.cljs$core$IFn$_invoke$arity$1(g),cljs.core.first(loom.graph.nodes(g)));
});

loom.alg.dijkstra_span.cljs$core$IFn$_invoke$arity$2 = (function (g,start){
return loom.alg_generic.dijkstra_span(loom.graph.successors.cljs$core$IFn$_invoke$arity$1(g),loom.graph.weight.cljs$core$IFn$_invoke$arity$1(g),start);
});

loom.alg.dijkstra_span.cljs$lang$maxFixedArity = 2;

/**
 * Finds the shortest path from start to end. Returns a vector:
 *   [path distance]
 */
loom.alg.dijkstra_path_dist = (function loom$alg$dijkstra_path_dist(g,start,end){
return loom.alg_generic.dijkstra_path_dist(loom.graph.successors.cljs$core$IFn$_invoke$arity$1(g),loom.graph.weight.cljs$core$IFn$_invoke$arity$1(g),start,end);
});
/**
 * Finds the shortest path from start to end
 */
loom.alg.dijkstra_path = (function loom$alg$dijkstra_path(g,start,end){
return cljs.core.first(loom.alg.dijkstra_path_dist(g,start,end));
});
/**
 * Tests for whether we can improve the shortest path to v found so far
 * by going through u.
 */
loom.alg.can_relax_edge_QMARK_ = (function loom$alg$can_relax_edge_QMARK_(p__42805,weight,costs){
var vec__42806 = p__42805;
var u = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42806,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42806,(1),null);
var edge = vec__42806;
var vd = cljs.core.get.cljs$core$IFn$_invoke$arity$2(costs,v);
var ud = cljs.core.get.cljs$core$IFn$_invoke$arity$2(costs,u);
var sum = (ud + weight);
return (vd > sum);
});
/**
 * If there's a shorter path from s to v via u,
 *  update our map of estimated path costs and
 * map of paths from source to vertex v
 */
loom.alg.relax_edge = (function loom$alg$relax_edge(p__42809,weight,p__42810){
var vec__42811 = p__42809;
var u = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42811,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42811,(1),null);
var edge = vec__42811;
var vec__42814 = p__42810;
var costs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42814,(0),null);
var paths = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42814,(1),null);
var estimates = vec__42814;
var ud = cljs.core.get.cljs$core$IFn$_invoke$arity$2(costs,u);
var sum = (ud + weight);
if(loom.alg.can_relax_edge_QMARK_(edge,weight,costs)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(costs,v,sum),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(paths,v,u)], null);
} else {
return estimates;
}
});
/**
 * Performs edge relaxation on all edges in weighted directed graph
 */
loom.alg.relax_edges = (function loom$alg$relax_edges(g,start,estimates){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (estimates__$1,p__42817){
var vec__42818 = p__42817;
var u = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42818,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42818,(1),null);
var edge = vec__42818;
return loom.alg.relax_edge(edge,loom.graph.weight.cljs$core$IFn$_invoke$arity$3(g,u,v),estimates__$1);
}),estimates,loom.graph.edges(g));
});
/**
 * Initializes path cost estimates and paths from source to all vertices,
 * for Bellman-Ford algorithm
 */
loom.alg.init_estimates = (function loom$alg$init_estimates(graph,start){
var nodes = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(loom.graph.nodes(graph),start);
var path_costs = cljs.core.PersistentArrayMap.createAsIfByAssoc([start,(0)]);
var paths = cljs.core.PersistentArrayMap.createAsIfByAssoc([start,null]);
var infinities = cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(Infinity);
var nils = cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
var init_costs = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(nodes,infinities);
var init_paths = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(nodes,nils);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc,path_costs,init_costs),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc,paths,init_paths)], null);
});
/**
 * Given a weighted, directed graph G = (V, E) with source start,
 * the Bellman-Ford algorithm produces map of single source shortest
 * paths and their costs if no negative-weight cycle that is reachable
 * from the source exists, and false otherwise, indicating that no
 * solution exists.
 */
loom.alg.bellman_ford = (function loom$alg$bellman_ford(g,start){
var initial_estimates = loom.alg.init_estimates(g,start);
var vec__42822 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (initial_estimates){
return (function (estimates,_){
return loom.alg.relax_edges(g,start,estimates);
});})(initial_estimates))
,initial_estimates,cljs.core.range.cljs$core$IFn$_invoke$arity$1((cljs.core.count(loom.graph.nodes(g)) - (1))));
var costs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42822,(0),null);
var paths = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42822,(1),null);
var edges = loom.graph.edges(g);
if(cljs.core.truth_(cljs.core.some(((function (initial_estimates,vec__42822,costs,paths,edges){
return (function (p__42825){
var vec__42826 = p__42825;
var u = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42826,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42826,(1),null);
var edge = vec__42826;
return loom.alg.can_relax_edge_QMARK_(edge,loom.graph.weight.cljs$core$IFn$_invoke$arity$3(g,u,v),costs);
});})(initial_estimates,vec__42822,costs,paths,edges))
,edges))){
return false;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [costs,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (initial_estimates,vec__42822,costs,paths,edges){
return (function (final_paths,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(final_paths,v,(function (){var node = v;
var path = cljs.core.List.EMPTY;
while(true){
if(cljs.core.truth_(node)){
var G__42829 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(paths,node);
var G__42830 = cljs.core.cons(node,path);
node = G__42829;
path = G__42830;
continue;
} else {
return path;
}
break;
}
})());
});})(initial_estimates,vec__42822,costs,paths,edges))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (initial_estimates,vec__42822,costs,paths,edges){
return (function (p1__42821_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(Infinity,cljs.core.get.cljs$core$IFn$_invoke$arity$2(costs,p1__42821_SHARP_));
});})(initial_estimates,vec__42822,costs,paths,edges))
,cljs.core.keys(paths)))], null);
}
});
/**
 * Returns true if g is a directed acyclic graph
 */
loom.alg.dag_QMARK_ = (function loom$alg$dag_QMARK_(g){
return cljs.core.boolean$(loom.alg.topsort.cljs$core$IFn$_invoke$arity$1(g));
});
/**
 * Finds the shortest path from start to end in graph g, using Dijkstra's
 *   algorithm if the graph is weighted, breadth-first search otherwise.
 */
loom.alg.shortest_path = (function loom$alg$shortest_path(g,start,end){
if(loom.graph.weighted_QMARK_(g)){
return loom.alg.dijkstra_path(g,start,end);
} else {
return loom.alg.bf_path(g,start,end);
}
});
/**
 * Finds the longest shortest path beginning at start, using Dijkstra's
 *   algorithm if the graph is weighted, breadth-first search otherwise.
 */
loom.alg.longest_shortest_path = (function loom$alg$longest_shortest_path(g,start){
return cljs.core.reverse(((loom.graph.weighted_QMARK_(g))?cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (path1,p__42831){
var vec__42832 = p__42831;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42832,(0),null);
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42832,(1),null);
var path2 = loom.alg_generic.trace_path(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.second,state),n);
if((cljs.core.count(path1) < cljs.core.count(path2))){
return path2;
} else {
return path1;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null),loom.alg.dijkstra_traverse.cljs$core$IFn$_invoke$arity$3(g,start,cljs.core.vector)):cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (path1,p__42835){
var vec__42836 = p__42835;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42836,(0),null);
var predmap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42836,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42836,(2),null);
var path2 = loom.alg_generic.trace_path(predmap,n);
if((cljs.core.count(path1) < cljs.core.count(path2))){
return path2;
} else {
return path1;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null),loom.alg.bf_traverse.cljs$core$IFn$_invoke$arity$variadic(g,start,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$f,cljs.core.vector], 0)))));
});
/**
 * Helper function for Johnson's algorithm. Uses Bellman-Ford to remove negative weights.
 */
loom.alg.bellman_ford_transform = (function loom$alg$bellman_ford_transform(wg){
var q = cljs.core.first(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(loom.graph.has_node_QMARK_,wg),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym)));
var es = (function (){var iter__4523__auto__ = ((function (q){
return (function loom$alg$bellman_ford_transform_$_iter__42839(s__42840){
return (new cljs.core.LazySeq(null,((function (q){
return (function (){
var s__42840__$1 = s__42840;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__42840__$1);
if(temp__5720__auto__){
var s__42840__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42840__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__42840__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__42842 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__42841 = (0);
while(true){
if((i__42841 < size__4522__auto__)){
var v = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__42841);
cljs.core.chunk_append(b__42842,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [q,v,(0)], null));

var G__42850 = (i__42841 + (1));
i__42841 = G__42850;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42842),loom$alg$bellman_ford_transform_$_iter__42839(cljs.core.chunk_rest(s__42840__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42842),null);
}
} else {
var v = cljs.core.first(s__42840__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [q,v,(0)], null),loom$alg$bellman_ford_transform_$_iter__42839(cljs.core.rest(s__42840__$2)));
}
} else {
return null;
}
break;
}
});})(q))
,null,null));
});})(q))
;
return iter__4523__auto__(loom.graph.nodes(wg));
})();
var bf_results = loom.alg.bellman_ford(loom.graph.add_edges_STAR_(wg,es),q);
if(cljs.core.truth_(bf_results)){
var vec__42843 = bf_results;
var dist_q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42843,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42843,(1),null);
var new_es = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(cljs.core.first,cljs.core.second,((function (vec__42843,dist_q,_,q,es,bf_results){
return (function (p__42846){
var vec__42847 = p__42846;
var u = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42847,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42847,(1),null);
return (loom.graph.weight.cljs$core$IFn$_invoke$arity$3(wg,u,v) + ((dist_q.cljs$core$IFn$_invoke$arity$1 ? dist_q.cljs$core$IFn$_invoke$arity$1(u) : dist_q.call(null,u)) - (dist_q.cljs$core$IFn$_invoke$arity$1 ? dist_q.cljs$core$IFn$_invoke$arity$1(v) : dist_q.call(null,v))));
});})(vec__42843,dist_q,_,q,es,bf_results))
),loom.graph.edges(wg));
return loom.graph.add_edges_STAR_(wg,new_es);
} else {
return false;
}
});
/**
 * Finds all-pairs shortest paths using Bellman-Ford to remove any negative edges before
 *   using Dijkstra's algorithm to find the shortest paths from each vertex to every other.
 *   This algorithm is efficient for sparse graphs.
 * 
 *   If the graph is unweighted, a default weight of 1 will be used. Note that it is more efficient
 *   to use breadth-first spans for a graph with a uniform edge weight rather than Dijkstra's algorithm.
 *   Most callers should use shortest-paths and allow the most efficient implementation be selected
 *   for the graph.
 */
loom.alg.johnson = (function loom$alg$johnson(g){
var g__$1 = (cljs.core.truth_((function (){var and__4120__auto__ = loom.graph.weighted_QMARK_(g);
if(and__4120__auto__){
return cljs.core.some(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._GT_,(0)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(loom.graph.weight.cljs$core$IFn$_invoke$arity$1(g),loom.graph.edges(g)));
} else {
return and__4120__auto__;
}
})())?loom.alg.bellman_ford_transform(g):g);
if(g__$1 === false){
return false;
} else {
var dist = ((loom.graph.weighted_QMARK_(g__$1))?loom.graph.weight.cljs$core$IFn$_invoke$arity$1(g__$1):((function (g__$1){
return (function (u,v){
if(cljs.core.truth_(loom.graph.has_edge_QMARK_(g__$1,u,v))){
return (1);
} else {
return null;
}
});})(g__$1))
);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (dist,g__$1){
return (function (acc,node){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,node,loom.alg_generic.dijkstra_span(loom.graph.successors.cljs$core$IFn$_invoke$arity$1(g__$1),dist,node));
});})(dist,g__$1))
,cljs.core.PersistentArrayMap.EMPTY,loom.graph.nodes(g__$1));
}
});
/**
 * Uses bf-span on each node in the graph.
 */
loom.alg.bf_all_pairs_shortest_paths = (function loom$alg$bf_all_pairs_shortest_paths(g){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (spans,node){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(spans,node,loom.alg.bf_span.cljs$core$IFn$_invoke$arity$2(g,node));
}),cljs.core.PersistentArrayMap.EMPTY,loom.graph.nodes(g));
});
/**
 * Finds all-pairs shortest paths in a graph. Uses Johnson's algorithm for weighted graphs
 *   which is efficient for sparse graphs. Breadth-first spans are used for unweighted graphs.
 */
loom.alg.all_pairs_shortest_paths = (function loom$alg$all_pairs_shortest_paths(g){
if(loom.graph.weighted_QMARK_(g)){
return loom.alg.johnson(g);
} else {
return loom.alg.bf_all_pairs_shortest_paths(g);
}
});
/**
 * Returns the connected components of graph g as a vector of vectors. If g
 *   is directed, returns the weakly-connected components.
 */
loom.alg.connected_components = (function loom$alg$connected_components(g){
var nb = (((!(loom.graph.directed_QMARK_(g))))?loom.graph.successors.cljs$core$IFn$_invoke$arity$1(g):(function (p1__42851_SHARP_){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g,p1__42851_SHARP_),loom.graph.predecessors.cljs$core$IFn$_invoke$arity$2(g,p1__42851_SHARP_));
}));
return cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (nb){
return (function (p__42852,n){
var vec__42853 = p__42852;
var cc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42853,(0),null);
var predmap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42853,(1),null);
if(cljs.core.contains_QMARK_(predmap,n)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cc,predmap], null);
} else {
var vec__42856 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__42853,cc,predmap,nb){
return (function (p__42859,p__42860){
var vec__42861 = p__42859;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42861,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42861,(1),null);
var vec__42864 = p__42860;
var n__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42864,(0),null);
var pm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42864,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42864,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(c,n__$1),pm], null);
});})(vec__42853,cc,predmap,nb))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,null], null),loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic(nb,n,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$f,cljs.core.vector,cljs.core.cst$kw$seen,predmap], 0)));
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42856,(0),null);
var pm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42856,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cc,c),pm], null);
}
});})(nb))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY], null),loom.graph.nodes(g)));
});
/**
 * Returns true if g is connected
 */
loom.alg.connected_QMARK_ = (function loom$alg$connected_QMARK_(g){
return (cljs.core.count(cljs.core.first(loom.alg.connected_components(g))) === cljs.core.count(loom.graph.nodes(g)));
});
/**
 * Returns the strongly-connected components of directed graph g as a vector of
 *   vectors. Uses Kosaraju's algorithm.
 */
loom.alg.scc = (function loom$alg$scc(g){
var gt = loom.graph.transpose(g);
var stack = cljs.core.reverse(loom.alg.post_traverse.cljs$core$IFn$_invoke$arity$1(g));
var seen = cljs.core.PersistentHashSet.EMPTY;
var cc = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
while(true){
if(cljs.core.empty_QMARK_(stack)){
return cljs.core.persistent_BANG_(cc);
} else {
if(cljs.core.truth_((function (){var G__42871 = cljs.core.first(stack);
return (seen.cljs$core$IFn$_invoke$arity$1 ? seen.cljs$core$IFn$_invoke$arity$1(G__42871) : seen.call(null,G__42871));
})())){
var G__42875 = cljs.core.rest(stack);
var G__42876 = seen;
var G__42877 = cc;
stack = G__42875;
seen = G__42876;
cc = G__42877;
continue;
} else {
var vec__42872 = loom.alg.post_traverse.cljs$core$IFn$_invoke$arity$variadic(gt,cljs.core.first(stack),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$seen,seen,cljs.core.cst$kw$return_DASH_seen,true], 0));
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42872,(0),null);
var seen__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42872,(1),null);
var G__42878 = cljs.core.rest(stack);
var G__42879 = seen__$1;
var G__42880 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(cc,c);
stack = G__42878;
seen = G__42879;
cc = G__42880;
continue;
}
}
break;
}
});
loom.alg.strongly_connected_QMARK_ = (function loom$alg$strongly_connected_QMARK_(g){
return (cljs.core.count(cljs.core.first(loom.alg.scc(g))) === cljs.core.count(loom.graph.nodes(g)));
});
/**
 * Returns graph g with all connected components connected to each other
 */
loom.alg.connect = (function loom$alg$connect(g){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(loom.graph.add_edges,g,cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,loom.alg.connected_components(g))));
});
/**
 * Return the density of graph g
 */
loom.alg.density = (function loom$alg$density(var_args){
var args__4736__auto__ = [];
var len__4730__auto___42886 = arguments.length;
var i__4731__auto___42887 = (0);
while(true){
if((i__4731__auto___42887 < len__4730__auto___42886)){
args__4736__auto__.push((arguments[i__4731__auto___42887]));

var G__42888 = (i__4731__auto___42887 + (1));
i__4731__auto___42887 = G__42888;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return loom.alg.density.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

loom.alg.density.cljs$core$IFn$_invoke$arity$variadic = (function (g,p__42883){
var map__42884 = p__42883;
var map__42884__$1 = (((((!((map__42884 == null))))?(((((map__42884.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42884.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42884):map__42884);
var loops = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42884__$1,cljs.core.cst$kw$loops,false);
var order = cljs.core.count(loom.graph.nodes(g));
return (cljs.core.count(loom.graph.edges(g)) / (order * (cljs.core.truth_(loops)?order:(order - (1)))));
});

loom.alg.density.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
loom.alg.density.cljs$lang$applyTo = (function (seq42881){
var G__42882 = cljs.core.first(seq42881);
var seq42881__$1 = cljs.core.next(seq42881);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42882,seq42881__$1);
});

/**
 * Returns nodes with no connections to other nodes (i.e., isolated nodes)
 */
loom.alg.loners = (function loom$alg$loners(g){
var degree_total = ((loom.graph.directed_QMARK_(g))?(function (p1__42889_SHARP_){
return (loom.graph.in_degree(g,p1__42889_SHARP_) + loom.graph.out_degree(g,p1__42889_SHARP_));
}):(function (p1__42890_SHARP_){
return loom.graph.out_degree(g,p1__42890_SHARP_);
}));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.zero_QMARK_,degree_total),loom.graph.nodes(g));
});
/**
 * Returns the distinct edges of g. Only useful for undirected graphs
 */
loom.alg.distinct_edges = (function loom$alg$distinct_edges(g){
if(loom.graph.directed_QMARK_(g)){
return loom.graph.edges(g);
} else {
return cljs.core.second(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__42891,e){
var vec__42892 = p__42891;
var seen = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42892,(0),null);
var es = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42892,(1),null);
var eset = cljs.core.set(cljs.core.take.cljs$core$IFn$_invoke$arity$2((2),e));
if(cljs.core.truth_((seen.cljs$core$IFn$_invoke$arity$1 ? seen.cljs$core$IFn$_invoke$arity$1(eset) : seen.call(null,eset)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [seen,es], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,eset),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(es,e)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentVector.EMPTY], null),loom.graph.edges(g)));
}
});
/**
 * Attempts a two-coloring of graph g. When successful, returns a map of
 *   nodes to colors (1 or 0). Otherwise, returns nil.
 */
loom.alg.bipartite_color = (function loom$alg$bipartite_color(g){
var color_component = (function loom$alg$bipartite_color_$_color_component(coloring,start){
var coloring__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(coloring,start,(1));
var queue = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentQueue.EMPTY,start);
while(true){
if(cljs.core.empty_QMARK_(queue)){
return coloring__$1;
} else {
var v = cljs.core.peek(queue);
var color = ((1) - (coloring__$1.cljs$core$IFn$_invoke$arity$1 ? coloring__$1.cljs$core$IFn$_invoke$arity$1(v) : coloring__$1.call(null,v)));
var nbrs = loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g,v);
if(cljs.core.truth_(cljs.core.some(((function (coloring__$1,queue,v,color,nbrs){
return (function (p1__42895_SHARP_){
var and__4120__auto__ = (coloring__$1.cljs$core$IFn$_invoke$arity$1 ? coloring__$1.cljs$core$IFn$_invoke$arity$1(p1__42895_SHARP_) : coloring__$1.call(null,p1__42895_SHARP_));
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((coloring__$1.cljs$core$IFn$_invoke$arity$1 ? coloring__$1.cljs$core$IFn$_invoke$arity$1(v) : coloring__$1.call(null,v)),(coloring__$1.cljs$core$IFn$_invoke$arity$1 ? coloring__$1.cljs$core$IFn$_invoke$arity$1(p1__42895_SHARP_) : coloring__$1.call(null,p1__42895_SHARP_)));
} else {
return and__4120__auto__;
}
});})(coloring__$1,queue,v,color,nbrs))
,nbrs))){
return null;
} else {
var nbrs__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(coloring__$1,nbrs);
var G__42925 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(coloring__$1,(function (){var iter__4523__auto__ = ((function (coloring__$1,queue,nbrs__$1,v,color,nbrs){
return (function loom$alg$bipartite_color_$_color_component_$_iter__42908(s__42909){
return (new cljs.core.LazySeq(null,((function (coloring__$1,queue,nbrs__$1,v,color,nbrs){
return (function (){
var s__42909__$1 = s__42909;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__42909__$1);
if(temp__5720__auto__){
var s__42909__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42909__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__42909__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__42911 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__42910 = (0);
while(true){
if((i__42910 < size__4522__auto__)){
var nbr = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__42910);
cljs.core.chunk_append(b__42911,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,color], null));

var G__42927 = (i__42910 + (1));
i__42910 = G__42927;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42911),loom$alg$bipartite_color_$_color_component_$_iter__42908(cljs.core.chunk_rest(s__42909__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42911),null);
}
} else {
var nbr = cljs.core.first(s__42909__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,color], null),loom$alg$bipartite_color_$_color_component_$_iter__42908(cljs.core.rest(s__42909__$2)));
}
} else {
return null;
}
break;
}
});})(coloring__$1,queue,nbrs__$1,v,color,nbrs))
,null,null));
});})(coloring__$1,queue,nbrs__$1,v,color,nbrs))
;
return iter__4523__auto__(nbrs__$1);
})());
var G__42926 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(queue),nbrs__$1);
coloring__$1 = G__42925;
queue = G__42926;
continue;
}
}
break;
}
});
var G__42915 = cljs.core.seq(loom.graph.nodes(g));
var vec__42916 = G__42915;
var seq__42917 = cljs.core.seq(vec__42916);
var first__42918 = cljs.core.first(seq__42917);
var seq__42917__$1 = cljs.core.next(seq__42917);
var node = first__42918;
var nodes = seq__42917__$1;
var coloring = cljs.core.PersistentArrayMap.EMPTY;
var G__42915__$1 = G__42915;
var coloring__$1 = coloring;
while(true){
var vec__42922 = G__42915__$1;
var seq__42923 = cljs.core.seq(vec__42922);
var first__42924 = cljs.core.first(seq__42923);
var seq__42923__$1 = cljs.core.next(seq__42923);
var node__$1 = first__42924;
var nodes__$1 = seq__42923__$1;
var coloring__$2 = coloring__$1;
if(cljs.core.truth_(coloring__$2)){
if((node__$1 == null)){
return coloring__$2;
} else {
if(cljs.core.truth_((coloring__$2.cljs$core$IFn$_invoke$arity$1 ? coloring__$2.cljs$core$IFn$_invoke$arity$1(node__$1) : coloring__$2.call(null,node__$1)))){
var G__42928 = nodes__$1;
var G__42929 = coloring__$2;
G__42915__$1 = G__42928;
coloring__$1 = G__42929;
continue;
} else {
var G__42930 = nodes__$1;
var G__42931 = color_component(coloring__$2,node__$1);
G__42915__$1 = G__42930;
coloring__$1 = G__42931;
continue;
}
}
} else {
return null;
}
break;
}
});
/**
 * Returns true if g is bipartite
 */
loom.alg.bipartite_QMARK_ = (function loom$alg$bipartite_QMARK_(g){
return cljs.core.boolean$(loom.alg.bipartite_color(g));
});
/**
 * Returns two sets of nodes, one for each color of the bipartite coloring,
 *   or nil if g is not bipartite
 */
loom.alg.bipartite_sets = (function loom$alg$bipartite_sets(g){
var temp__5720__auto__ = loom.alg.bipartite_color(g);
if(cljs.core.truth_(temp__5720__auto__)){
var coloring = temp__5720__auto__;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (coloring,temp__5720__auto__){
return (function (p__42932,p__42933){
var vec__42934 = p__42932;
var s1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42934,(0),null);
var s2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42934,(1),null);
var vec__42937 = p__42933;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42937,(0),null);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42937,(1),null);
if((color === (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(s1,node),s2], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s1,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(s2,node)], null);
}
});})(coloring,temp__5720__auto__))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentHashSet.EMPTY], null),coloring);
} else {
return null;
}
});
/**
 * Given a putative coloring of a graph, returns the colors of all the
 *   neighbors of a given node.
 */
loom.alg.neighbor_colors = (function loom$alg$neighbor_colors(g,node,coloring){
var successors = loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g,node);
var neighbors = (((!(loom.graph.directed_QMARK_(g))))?successors:cljs.core.concat.cljs$core$IFn$_invoke$arity$2(successors,loom.graph.predecessors.cljs$core$IFn$_invoke$arity$2(g,node)));
return cljs.core.set(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (successors,neighbors){
return (function (p1__42940_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(coloring,p1__42940_SHARP_);
});})(successors,neighbors))
,neighbors)));
});
/**
 * Returns true if a map of nodes to colors is a proper coloring of a graph.
 */
loom.alg.coloring_QMARK_ = (function loom$alg$coloring_QMARK_(g,coloring){
var different_colors_QMARK_ = (function loom$alg$coloring_QMARK__$_different_colors_QMARK_(node){
return (!(cljs.core.contains_QMARK_(loom.alg.neighbor_colors(g,node,coloring),(coloring.cljs$core$IFn$_invoke$arity$1 ? coloring.cljs$core$IFn$_invoke$arity$1(node) : coloring.call(null,node)))));
});
return ((cljs.core.every_QMARK_(different_colors_QMARK_,loom.graph.nodes(g))) && (cljs.core.every_QMARK_(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__42941_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(coloring,p1__42941_SHARP_);
}),loom.graph.nodes(g)))));
});
/**
 * Greedily color the vertices of a graph using the first-fit heuristic.
 *   Returns a map of nodes to colors (0, 1, ...).
 */
loom.alg.greedy_coloring = (function loom$alg$greedy_coloring(g){
var node_seq = loom.alg.bf_traverse.cljs$core$IFn$_invoke$arity$1(g);
var coloring = cljs.core.PersistentArrayMap.EMPTY;
var colors = cljs.core.PersistentHashSet.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(node_seq)){
return coloring;
} else {
var node = cljs.core.first(node_seq);
var possible_colors = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(colors,loom.alg.neighbor_colors(g,node,coloring));
var node_color = ((cljs.core.empty_QMARK_(possible_colors))?cljs.core.count(colors):cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,possible_colors));
var G__42942 = cljs.core.rest(node_seq);
var G__42943 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(coloring,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,node_color], null));
var G__42944 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(colors,node_color);
node_seq = G__42942;
coloring = G__42943;
colors = G__42944;
continue;
}
break;
}
});
/**
 * Returns [flow-map flow-value], where flow-map is a weighted adjacency map
 * representing the maximum flow.  The argument should be a weighted digraph,
 * where the edge weights are flow capacities.  Source and sink are the vertices
 * representing the flow source and sink vertices.  Optionally, pass in
 *   :method :algorithm to use.  Currently, the only option is :edmonds-karp .
 */
loom.alg.max_flow = (function loom$alg$max_flow(var_args){
var args__4736__auto__ = [];
var len__4730__auto___42956 = arguments.length;
var i__4731__auto___42957 = (0);
while(true){
if((i__4731__auto___42957 < len__4730__auto___42956)){
args__4736__auto__.push((arguments[i__4731__auto___42957]));

var G__42958 = (i__4731__auto___42957 + (1));
i__4731__auto___42957 = G__42958;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return loom.alg.max_flow.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

loom.alg.max_flow.cljs$core$IFn$_invoke$arity$variadic = (function (g,source,sink,p__42949){
var map__42950 = p__42949;
var map__42950__$1 = (((((!((map__42950 == null))))?(((((map__42950.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42950.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42950):map__42950);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42950__$1,cljs.core.cst$kw$method,cljs.core.cst$kw$edmonds_DASH_karp);
var method_set = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$edmonds_DASH_karp,null], null), null);
var n = loom.graph.successors.cljs$core$IFn$_invoke$arity$1(g);
var i = loom.graph.predecessors.cljs$core$IFn$_invoke$arity$1(g);
var c = loom.graph.weight.cljs$core$IFn$_invoke$arity$1(g);
var s = source;
var t = sink;
var vec__42952 = (function (){var G__42955 = method;
var G__42955__$1 = (((G__42955 instanceof cljs.core.Keyword))?G__42955.fqn:null);
switch (G__42955__$1) {
case "edmonds-karp":
return loom.flow.edmonds_karp.cljs$core$IFn$_invoke$arity$5(n,i,c,s,t);

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Method not found.  Choose from: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_set)].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$method_DASH_set,method_set], null));

}
})();
var flow_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42952,(0),null);
var flow_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42952,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [flow_map,flow_value], null);
});

loom.alg.max_flow.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
loom.alg.max_flow.cljs$lang$applyTo = (function (seq42945){
var G__42946 = cljs.core.first(seq42945);
var seq42945__$1 = cljs.core.next(seq42945);
var G__42947 = cljs.core.first(seq42945__$1);
var seq42945__$2 = cljs.core.next(seq42945__$1);
var G__42948 = cljs.core.first(seq42945__$2);
var seq42945__$3 = cljs.core.next(seq42945__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42946,G__42947,G__42948,seq42945__$3);
});

/**
 * Wrapper function to return edges along with weights for a given graph.
 * For un-weighted graphs a default value of one is produced. The function
 * returns values of the form [[[u v] 10] [[x y] 20] ...]
 */
loom.alg.edge_weights = (function loom$alg$edge_weights(wg,v){
var edge_weight = (function (u,v__$1){
if(loom.graph.weighted_QMARK_(wg)){
return loom.graph.weight.cljs$core$IFn$_invoke$arity$3(wg,u,v__$1);
} else {
return (1);
}
});
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (edge_weight){
return (function (p1__42960_SHARP_){
return cljs.core.vec(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__42960_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,edge_weight(v,p1__42960_SHARP_)], null)], null));
});})(edge_weight))
,loom.graph.successors.cljs$core$IFn$_invoke$arity$2(wg,v));
});
/**
 * An edge-list of an minimum spanning tree along with weights that
 *   represents an MST of the given graph. Returns the MST edge-list
 *   for un-weighted graphs.
 */
loom.alg.prim_mst_edges = (function loom$alg$prim_mst_edges(var_args){
var G__42964 = arguments.length;
switch (G__42964) {
case 1:
return loom.alg.prim_mst_edges.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 5:
return loom.alg.prim_mst_edges.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

loom.alg.prim_mst_edges.cljs$core$IFn$_invoke$arity$1 = (function (wg){
if(loom.graph.directed_QMARK_(wg)){
throw Error("Spanning tree only defined for undirected graphs");
} else {
var mst = loom.alg.prim_mst_edges.cljs$core$IFn$_invoke$arity$5(wg,loom.graph.nodes(wg),null,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentVector.EMPTY);
if(loom.graph.weighted_QMARK_(wg)){
return mst;
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (mst){
return (function (p1__42961_SHARP_){
return cljs.core.vec(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(p1__42961_SHARP_),cljs.core.second(p1__42961_SHARP_)], null));
});})(mst))
,mst);
}

}
});

loom.alg.prim_mst_edges.cljs$core$IFn$_invoke$arity$5 = (function (wg,n,h,visited,acc){
while(true){
if(cljs.core.empty_QMARK_(n)){
return acc;
} else {
if(cljs.core.empty_QMARK_(h)){
var v = cljs.core.first(n);
var h__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(tailrecursion.priority_map.priority_map_keyfn(cljs.core.second),loom.alg.edge_weights(wg,v));
var G__42975 = wg;
var G__42976 = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(n,v);
var G__42977 = h__$1;
var G__42978 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(visited,v);
var G__42979 = acc;
wg = G__42975;
n = G__42976;
h = G__42977;
visited = G__42978;
acc = G__42979;
continue;
} else {
var next_edge = cljs.core.peek(h);
var u = cljs.core.first(cljs.core.second(next_edge));
var v = cljs.core.first(next_edge);
var update_dist = ((function (wg,n,h,visited,acc,next_edge,u,v){
return (function (h__$1,p__42965){
var vec__42966 = p__42965;
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42966,(0),null);
var vec__42969 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42966,(1),null);
var u__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42969,(0),null);
var wt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42969,(1),null);
if((cljs.core.get.cljs$core$IFn$_invoke$arity$2(h__$1,v__$1) == null)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(h__$1,v__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [u__$1,wt], null));
} else {
if((cljs.core.second(cljs.core.get.cljs$core$IFn$_invoke$arity$2(h__$1,v__$1)) > wt)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(h__$1,v__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [u__$1,wt], null));
} else {
return h__$1;

}
}
});})(wg,n,h,visited,acc,next_edge,u,v))
;
var wt = cljs.core.second(cljs.core.second(next_edge));
var visited__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(visited,v);
var h__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(update_dist,cljs.core.pop(h),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (wg,n,h,visited,acc,wt,visited__$1,next_edge,u,v,update_dist){
return (function (p1__42962_SHARP_){
var G__42973 = cljs.core.first(p1__42962_SHARP_);
var fexpr__42972 = cljs.core.complement(visited__$1);
return (fexpr__42972.cljs$core$IFn$_invoke$arity$1 ? fexpr__42972.cljs$core$IFn$_invoke$arity$1(G__42973) : fexpr__42972.call(null,G__42973));
});})(wg,n,h,visited,acc,wt,visited__$1,next_edge,u,v,update_dist))
,loom.alg.edge_weights(wg,v)));
var G__42980 = wg;
var G__42981 = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(n,v);
var G__42982 = h__$1;
var G__42983 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(visited__$1,v);
var G__42984 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u,v,wt], null));
wg = G__42980;
n = G__42981;
h = G__42982;
visited = G__42983;
acc = G__42984;
continue;

}
}
break;
}
});

loom.alg.prim_mst_edges.cljs$lang$maxFixedArity = 5;

/**
 * Minimum spanning tree of given graph. If the graph contains more than one
 * component then returns a spanning forest of minimum spanning trees.
 */
loom.alg.prim_mst = (function loom$alg$prim_mst(wg){
var mst = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(loom.graph.weighted_graph,loom.alg.prim_mst_edges.cljs$core$IFn$_invoke$arity$1(wg));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__42986 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.count,loom.graph.nodes);
return (fexpr__42986.cljs$core$IFn$_invoke$arity$1 ? fexpr__42986.cljs$core$IFn$_invoke$arity$1(wg) : fexpr__42986.call(null,wg));
})(),(function (){var fexpr__42987 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.count,loom.graph.nodes);
return (fexpr__42987.cljs$core$IFn$_invoke$arity$1 ? fexpr__42987.cljs$core$IFn$_invoke$arity$1(mst) : fexpr__42987.call(null,mst));
})())){
return mst;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(loom.graph.add_nodes,mst,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (mst){
return (function (p1__42985_SHARP_){
return (loom.graph.out_degree(wg,p1__42985_SHARP_) === (0));
});})(mst))
,loom.graph.nodes(wg)));

}
});
/**
 * Returns the shortest path using A* algorithm. Returns a map of predecessors.
 */
loom.alg.astar_path = (function loom$alg$astar_path(var_args){
var G__42989 = arguments.length;
switch (G__42989) {
case 4:
return loom.alg.astar_path.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 6:
return loom.alg.astar_path.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

loom.alg.astar_path.cljs$core$IFn$_invoke$arity$4 = (function (g,src,target,heur){
var heur__$1 = (((heur == null))?(function (x,y){
return (0);
}):heur);
var q = tailrecursion.priority_map.priority_map_keyfn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.first,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),null,(0),(0)], null)], 0));
var explored = cljs.core.PersistentHashMap.EMPTY;
return loom.alg.astar_path.cljs$core$IFn$_invoke$arity$6(g,src,target,heur__$1,q,explored);
});

loom.alg.astar_path.cljs$core$IFn$_invoke$arity$6 = (function (g,src,target,heur,q,explored){
while(true){
if(cljs.core.empty_QMARK_(q)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Target not reachable from source",cljs.core.PersistentArrayMap.EMPTY);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.peek(q)),target)){
var u = cljs.core.first(cljs.core.peek(q));
var parent = (function (){var fexpr__42990 = cljs.core.second(cljs.core.peek(q));
return (fexpr__42990.cljs$core$IFn$_invoke$arity$1 ? fexpr__42990.cljs$core$IFn$_invoke$arity$1((1)) : fexpr__42990.call(null,(1)));
})();
var explored__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(explored,target,parent);
var path = (function (){var s = target;
var acc = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if((s == null)){
return acc;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,src)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,s,null);
} else {
var G__42997 = (explored__$1.cljs$core$IFn$_invoke$arity$1 ? explored__$1.cljs$core$IFn$_invoke$arity$1(s) : explored__$1.call(null,s));
var G__42998 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,s,(explored__$1.cljs$core$IFn$_invoke$arity$1 ? explored__$1.cljs$core$IFn$_invoke$arity$1(s) : explored__$1.call(null,s)));
s = G__42997;
acc = G__42998;
continue;

}
}
break;
}
})();
return path;
} else {
var curr_node = cljs.core.first(cljs.core.peek(q));
var curr_dist = (function (){var fexpr__42991 = cljs.core.second(cljs.core.peek(q));
return (fexpr__42991.cljs$core$IFn$_invoke$arity$1 ? fexpr__42991.cljs$core$IFn$_invoke$arity$1((2)) : fexpr__42991.call(null,(2)));
})();
var explored__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(explored,curr_node,(function (){var fexpr__42992 = cljs.core.second(cljs.core.peek(q));
return (fexpr__42992.cljs$core$IFn$_invoke$arity$1 ? fexpr__42992.cljs$core$IFn$_invoke$arity$1((1)) : fexpr__42992.call(null,(1)));
})());
var nbrs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.keys(explored__$1)),loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g,curr_node));
var update_dist = ((function (g,src,target,heur,q,explored,curr_node,curr_dist,explored__$1,nbrs){
return (function (curr_node__$1,curr_dist__$1,q__$1,v){
var act = (curr_dist__$1 + ((loom.graph.weighted_QMARK_(g))?loom.graph.weight.cljs$core$IFn$_invoke$arity$3(g,curr_node__$1,v):(1)));
var est = (((cljs.core.get.cljs$core$IFn$_invoke$arity$2(q__$1,v) == null))?(heur.cljs$core$IFn$_invoke$arity$2 ? heur.cljs$core$IFn$_invoke$arity$2(v,target) : heur.call(null,v,target)):(function (){var fexpr__42993 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(q__$1,v);
return (fexpr__42993.cljs$core$IFn$_invoke$arity$1 ? fexpr__42993.cljs$core$IFn$_invoke$arity$1((3)) : fexpr__42993.call(null,(3)));
})());
if((((cljs.core.get.cljs$core$IFn$_invoke$arity$2(q__$1,v) == null)) || (((function (){var fexpr__42995 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(q__$1,v);
return (fexpr__42995.cljs$core$IFn$_invoke$arity$1 ? fexpr__42995.cljs$core$IFn$_invoke$arity$1((2)) : fexpr__42995.call(null,(2)));
})() > act)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(q__$1,v,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(act + est),curr_node__$1,act,est], null));
} else {
return q__$1;

}
});})(g,src,target,heur,q,explored,curr_node,curr_dist,explored__$1,nbrs))
;
var q__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(update_dist,curr_node,curr_dist),cljs.core.pop(q),nbrs);
var G__42999 = g;
var G__43000 = src;
var G__43001 = target;
var G__43002 = heur;
var G__43003 = q__$1;
var G__43004 = explored__$1;
g = G__42999;
src = G__43000;
target = G__43001;
heur = G__43002;
q = G__43003;
explored = G__43004;
continue;

}
}
break;
}
});

loom.alg.astar_path.cljs$lang$maxFixedArity = 6;

/**
 * Returns the length of the shortest path between src and target using
 *  the A* algorithm
 */
loom.alg.astar_dist = (function loom$alg$astar_dist(g,src,target,heur){
var path = loom.alg.astar_path.cljs$core$IFn$_invoke$arity$4(g,src,target,heur);
var dist = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (path){
return (function (c,p__43005){
var vec__43006 = p__43005;
var u = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43006,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43006,(1),null);
if((v == null)){
return c;
} else {
return (c + ((loom.graph.weighted_QMARK_(g))?loom.graph.weight.cljs$core$IFn$_invoke$arity$3(g,v,u):(1)));
}
});})(path))
,(0),path);
return dist;
});
/**
 * Returns sequence of vertices in degeneracy order.
 */
loom.alg.degeneracy_ordering = (function loom$alg$degeneracy_ordering(g){
var ordered_nodes = cljs.core.PersistentVector.EMPTY;
var node_degs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(tailrecursion.priority_map.priority_map(),cljs.core.zipmap(loom.graph.nodes(g),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(loom.graph.out_degree,g),loom.graph.nodes(g))));
var k = (0);
while(true){
if(cljs.core.empty_QMARK_(node_degs)){
return ordered_nodes;
} else {
var vec__43016 = cljs.core.first(node_degs);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43016,(0),null);
var deg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43016,(1),null);
var updated_degs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.dec,cljs.core.second)),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,node_degs),loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g,n)))));
var G__43023 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ordered_nodes,n);
var G__43024 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (ordered_nodes,node_degs,k,vec__43016,n,deg,updated_degs){
return (function (n_ds,p__43019){
var vec__43020 = p__43019;
var n__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43020,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43020,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(n_ds,n__$1,d);
});})(ordered_nodes,node_degs,k,vec__43016,n,deg,updated_degs))
,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(node_degs,n),updated_degs);
var G__43025 = (function (){var x__4219__auto__ = k;
var y__4220__auto__ = deg;
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})();
ordered_nodes = G__43023;
node_degs = G__43024;
k = G__43025;
continue;
}
break;
}
});
loom.alg.bk_gen = (function loom$alg$bk_gen(g,p__43026,stack){
var vec__43027 = p__43026;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43027,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43027,(1),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43027,(2),null);
var v_pivot = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.max_key,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(loom.graph.out_degree,g)),p);
var v = v_pivot;
var p__$1 = cljs.core.set(p);
var x__$1 = cljs.core.set(x);
var stack__$1 = stack;
while(true){
if((v == null)){
return stack__$1;
} else {
var succ_v = cljs.core.set(loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g,v));
var G__43030 = cljs.core.first(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.disj.cljs$core$IFn$_invoke$arity$2(p__$1,v),cljs.core.set(loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g,v_pivot))));
var G__43031 = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(p__$1,v);
var G__43032 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(x__$1,v);
var G__43033 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r,v),clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(p__$1,succ_v),clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(x__$1,succ_v)], null));
v = G__43030;
p__$1 = G__43031;
x__$1 = G__43032;
stack__$1 = G__43033;
continue;
}
break;
}
});
/**
 * An iterative implementation of Bron-Kerbosch using degeneracy ordering
 *   at the outer loop and max-degree vertex pivoting in the inner loop.
 */
loom.alg.bk = (function loom$alg$bk(g){
var vs = loom.alg.degeneracy_ordering(g);
var max_clqs = cljs.core.seq(cljs.core.PersistentVector.EMPTY);
var p = cljs.core.set(loom.graph.nodes(g));
var x = cljs.core.PersistentHashSet.EMPTY;
var stack = cljs.core.PersistentVector.EMPTY;
while(true){
if(((cljs.core.empty_QMARK_(stack)) && (cljs.core.empty_QMARK_(vs)))){
return max_clqs;
} else {
if(cljs.core.empty_QMARK_(stack)){
var v = cljs.core.first(vs);
var succ_v = cljs.core.set(loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g,v));
var G__43040 = cljs.core.rest(vs);
var G__43041 = max_clqs;
var G__43042 = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(p,v);
var G__43043 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(x,v);
var G__43044 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashSet.createAsIfByAssoc([v]),clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(p,succ_v),clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(x,succ_v)], null)], null);
vs = G__43040;
max_clqs = G__43041;
p = G__43042;
x = G__43043;
stack = G__43044;
continue;
} else {
var vec__43037 = cljs.core.peek(stack);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43037,(0),null);
var s_p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43037,(1),null);
var s_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43037,(2),null);
if(((cljs.core.empty_QMARK_(s_p)) && (cljs.core.empty_QMARK_(s_x)))){
var G__43045 = vs;
var G__43046 = cljs.core.cons(r,max_clqs);
var G__43047 = p;
var G__43048 = x;
var G__43049 = cljs.core.pop(stack);
vs = G__43045;
max_clqs = G__43046;
p = G__43047;
x = G__43048;
stack = G__43049;
continue;
} else {
if(cljs.core.empty_QMARK_(s_p)){
var G__43050 = vs;
var G__43051 = max_clqs;
var G__43052 = p;
var G__43053 = x;
var G__43054 = cljs.core.pop(stack);
vs = G__43050;
max_clqs = G__43051;
p = G__43052;
x = G__43053;
stack = G__43054;
continue;
} else {
var G__43055 = vs;
var G__43056 = max_clqs;
var G__43057 = p;
var G__43058 = x;
var G__43059 = loom.alg.bk_gen(g,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,s_p,s_x], null),cljs.core.pop(stack));
vs = G__43055;
max_clqs = G__43056;
p = G__43057;
x = G__43058;
stack = G__43059;
continue;

}
}

}
}
break;
}
});
/**
 * Enumerate the maximal cliques using Bron-Kerbosch.
 */
loom.alg.maximal_cliques = (function loom$alg$maximal_cliques(g){
return loom.alg.bk(g);
});
/**
 * Returns true iff g1 is a subgraph of g2. An undirected graph is never
 *   considered as a subgraph of a directed graph and vice versa.
 */
loom.alg.subgraph_QMARK_ = (function loom$alg$subgraph_QMARK_(g1,g2){
var and__4120__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(loom.graph.directed_QMARK_(g1),loom.graph.directed_QMARK_(g2));
if(and__4120__auto__){
var edge_test_fn = ((loom.graph.directed_QMARK_(g1))?loom.graph.has_edge_QMARK_:((function (and__4120__auto__){
return (function (g,x,y){
var or__4131__auto__ = loom.graph.has_edge_QMARK_(g,x,y);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return loom.graph.has_edge_QMARK_(g,y,x);
}
});})(and__4120__auto__))
);
return ((cljs.core.every_QMARK_(((function (edge_test_fn,and__4120__auto__){
return (function (p1__43060_SHARP_){
return loom.graph.has_node_QMARK_(g2,p1__43060_SHARP_);
});})(edge_test_fn,and__4120__auto__))
,loom.graph.nodes(g1))) && (cljs.core.every_QMARK_(((function (edge_test_fn,and__4120__auto__){
return (function (p__43073){
var vec__43074 = p__43073;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43074,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43074,(1),null);
return (edge_test_fn.cljs$core$IFn$_invoke$arity$3 ? edge_test_fn.cljs$core$IFn$_invoke$arity$3(g2,x,y) : edge_test_fn.call(null,g2,x,y));
});})(edge_test_fn,and__4120__auto__))
,loom.graph.edges(g1))));
} else {
return and__4120__auto__;
}
});
/**
 * Returns true iff g1 is a subgraph of g2 and g2 is a subgraph of g1
 */
loom.alg.eql_QMARK_ = (function loom$alg$eql_QMARK_(g1,g2){
return ((loom.alg.subgraph_QMARK_(g1,g2)) && (loom.alg.subgraph_QMARK_(g2,g1)));
});
/**
 * Given a mapping phi between the vertices of two graphs, determine
 *   if the mapping is an isomorphism, e.g., {(phi x), (phi y)} connected
 *   in g2 iff {x, y} are connected in g1.
 */
loom.alg.isomorphism_QMARK_ = (function loom$alg$isomorphism_QMARK_(g1,g2,phi){
return loom.alg.eql_QMARK_(g2,loom.graph.add_edges_STAR_(loom.graph.add_nodes_STAR_(((loom.graph.directed_QMARK_(g1))?loom.graph.digraph():loom.graph.graph()),cljs.core.map.cljs$core$IFn$_invoke$arity$2(phi,loom.graph.nodes(g1))),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__43077){
var vec__43078 = p__43077;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43078,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43078,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(phi.cljs$core$IFn$_invoke$arity$1 ? phi.cljs$core$IFn$_invoke$arity$1(x) : phi.call(null,x)),(phi.cljs$core$IFn$_invoke$arity$1 ? phi.cljs$core$IFn$_invoke$arity$1(y) : phi.call(null,y))], null);
}),loom.graph.edges(g1))));
});
