// Compiled by ClojureScript 1.10.520 {}
goog.provide('loom.alg');
goog.require('cljs.core');
goog.require('loom.alg_generic');
goog.require('loom.flow');
goog.require('loom.graph');
goog.require('tailrecursion.priority_map');
goog.require('clojure.set');
loom.alg.traverse_all = (function loom$alg$traverse_all(nodes,traverse){
return cljs.core.persistent_BANG_.call(null,cljs.core.second.call(null,cljs.core.reduce.call(null,(function (p__38902,n){
var vec__38903 = p__38902;
var seen = cljs.core.nth.call(null,vec__38903,(0),null);
var trav = cljs.core.nth.call(null,vec__38903,(1),null);
if(cljs.core.truth_(seen.call(null,n))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [seen,trav], null);
} else {
var ctrav = traverse.call(null,n,new cljs.core.Keyword(null,"seen","seen",-518999789),seen);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,seen,ctrav),cljs.core.reduce.call(null,cljs.core.conj_BANG_,trav,ctrav)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashSet.EMPTY,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY)], null),nodes)));
});
/**
 * Traverses graph g depth-first from start. Returns a lazy seq of nodes.
 *   When no starting node is provided, traverses the entire graph, connected
 *   or not.
 */
loom.alg.pre_traverse = (function loom$alg$pre_traverse(var_args){
var G__38907 = arguments.length;
switch (G__38907) {
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
return loom.alg.traverse_all.call(null,loom.graph.nodes.call(null,g),cljs.core.partial.call(null,loom.alg_generic.pre_traverse,loom.graph.successors.call(null,g)));
});

loom.alg.pre_traverse.cljs$core$IFn$_invoke$arity$2 = (function (g,start){
return loom.alg_generic.pre_traverse.call(null,loom.graph.successors.call(null,g),start);
});

loom.alg.pre_traverse.cljs$lang$maxFixedArity = 2;

/**
 * Returns a depth-first spanning tree of the form {node [successors]}
 */
loom.alg.pre_span = (function loom$alg$pre_span(var_args){
var G__38910 = arguments.length;
switch (G__38910) {
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
return cljs.core.second.call(null,cljs.core.reduce.call(null,(function (p__38911,n){
var vec__38912 = p__38911;
var seen = cljs.core.nth.call(null,vec__38912,(0),null);
var span = cljs.core.nth.call(null,vec__38912,(1),null);
if(cljs.core.truth_(seen.call(null,n))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [seen,span], null);
} else {
var vec__38915 = loom.alg_generic.pre_span.call(null,loom.graph.successors.call(null,g),n,new cljs.core.Keyword(null,"seen","seen",-518999789),seen,new cljs.core.Keyword(null,"return-seen","return-seen",308792727),true);
var cspan = cljs.core.nth.call(null,vec__38915,(0),null);
var seen__$1 = cljs.core.nth.call(null,vec__38915,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [seen__$1,cljs.core.merge.call(null,span,cljs.core.PersistentArrayMap.createAsIfByAssoc([n,cljs.core.PersistentVector.EMPTY]),cspan)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentArrayMap.EMPTY], null),loom.graph.nodes.call(null,g)));
});

loom.alg.pre_span.cljs$core$IFn$_invoke$arity$2 = (function (g,start){
return loom.alg_generic.pre_span.call(null,loom.graph.successors.call(null,g),start);
});

loom.alg.pre_span.cljs$lang$maxFixedArity = 2;

/**
 * Traverses graph g depth-first, post-order from start. Returns a
 *   vector of the nodes.
 */
loom.alg.post_traverse = (function loom$alg$post_traverse(var_args){
var G__38923 = arguments.length;
switch (G__38923) {
case 1:
return loom.alg.post_traverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___38925 = arguments.length;
var i__4731__auto___38926 = (0);
while(true){
if((i__4731__auto___38926 < len__4730__auto___38925)){
args_arr__4751__auto__.push((arguments[i__4731__auto___38926]));

var G__38927 = (i__4731__auto___38926 + (1));
i__4731__auto___38926 = G__38927;
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
return loom.alg.traverse_all.call(null,loom.graph.nodes.call(null,g),cljs.core.partial.call(null,loom.alg_generic.post_traverse,loom.graph.successors.call(null,g)));
});

loom.alg.post_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (g,start,opts){
return cljs.core.apply.call(null,loom.alg_generic.post_traverse,loom.graph.successors.call(null,g),start,opts);
});

/** @this {Function} */
loom.alg.post_traverse.cljs$lang$applyTo = (function (seq38920){
var G__38921 = cljs.core.first.call(null,seq38920);
var seq38920__$1 = cljs.core.next.call(null,seq38920);
var G__38922 = cljs.core.first.call(null,seq38920__$1);
var seq38920__$2 = cljs.core.next.call(null,seq38920__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38921,G__38922,seq38920__$2);
});

loom.alg.post_traverse.cljs$lang$maxFixedArity = (2);

/**
 * Topological sort of a directed acyclic graph (DAG). Returns nil if
 *   g contains any cycles.
 */
loom.alg.topsort = (function loom$alg$topsort(var_args){
var G__38929 = arguments.length;
switch (G__38929) {
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
var G__38933 = cljs.core.seq.call(null,loom.graph.nodes.call(null,g));
var vec__38934 = G__38933;
var seq__38935 = cljs.core.seq.call(null,vec__38934);
var first__38936 = cljs.core.first.call(null,seq__38935);
var seq__38935__$1 = cljs.core.next.call(null,seq__38935);
var n = first__38936;
var ns = seq__38935__$1;
var seen__$1 = seen;
var result__$1 = result;
var G__38933__$1 = G__38933;
while(true){
var seen__$2 = seen__$1;
var result__$2 = result__$1;
var vec__38940 = G__38933__$1;
var seq__38941 = cljs.core.seq.call(null,vec__38940);
var first__38942 = cljs.core.first.call(null,seq__38941);
var seq__38941__$1 = cljs.core.next.call(null,seq__38941);
var n__$1 = first__38942;
var ns__$1 = seq__38941__$1;
if(cljs.core.not.call(null,n__$1)){
return result__$2;
} else {
if(cljs.core.truth_(seen__$2.call(null,n__$1))){
var G__38944 = seen__$2;
var G__38945 = result__$2;
var G__38946 = ns__$1;
seen__$1 = G__38944;
result__$1 = G__38945;
G__38933__$1 = G__38946;
continue;
} else {
var temp__5720__auto__ = loom.alg_generic.topsort_component.call(null,loom.graph.successors.call(null,g),n__$1,seen__$2,seen__$2);
if(cljs.core.truth_(temp__5720__auto__)){
var cresult = temp__5720__auto__;
var G__38947 = cljs.core.into.call(null,seen__$2,cresult);
var G__38948 = cljs.core.concat.call(null,cresult,result__$2);
var G__38949 = ns__$1;
seen__$1 = G__38947;
result__$1 = G__38948;
G__38933__$1 = G__38949;
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
return loom.alg_generic.topsort_component.call(null,loom.graph.successors.call(null,g),start);
});

loom.alg.topsort.cljs$lang$maxFixedArity = 2;

/**
 * Traverses graph g breadth-first from start. When option :f is provided,
 *   returns a lazy seq of (f node predecessor-map depth) for each node traversed.
 *   Otherwise, returns a lazy seq of the nodes. When option :when is provided,
 *   filters successors with (f neighbor predecessor depth).
 */
loom.alg.bf_traverse = (function loom$alg$bf_traverse(var_args){
var G__38954 = arguments.length;
switch (G__38954) {
case 1:
return loom.alg.bf_traverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return loom.alg.bf_traverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___38968 = arguments.length;
var i__4731__auto___38969 = (0);
while(true){
if((i__4731__auto___38969 < len__4730__auto___38968)){
args_arr__4751__auto__.push((arguments[i__4731__auto___38969]));

var G__38970 = (i__4731__auto___38969 + (1));
i__4731__auto___38969 = G__38970;
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
return cljs.core.first.call(null,cljs.core.reduce.call(null,(function (p__38955,n){
var vec__38956 = p__38955;
var cc = cljs.core.nth.call(null,vec__38956,(0),null);
var predmap = cljs.core.nth.call(null,vec__38956,(1),null);
if(cljs.core.contains_QMARK_.call(null,predmap,n)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cc,predmap], null);
} else {
return cljs.core.reduce.call(null,((function (vec__38956,cc,predmap){
return (function (p__38959,p__38960){
var vec__38961 = p__38959;
var cc__$1 = cljs.core.nth.call(null,vec__38961,(0),null);
var _ = cljs.core.nth.call(null,vec__38961,(1),null);
var vec__38964 = p__38960;
var n__$1 = cljs.core.nth.call(null,vec__38964,(0),null);
var pm = cljs.core.nth.call(null,vec__38964,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__38964,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,cc__$1,n__$1),pm], null);
});})(vec__38956,cc,predmap))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cc,predmap], null),loom.alg_generic.bf_traverse.call(null,loom.graph.successors.call(null,g),n,new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.vector,new cljs.core.Keyword(null,"seen","seen",-518999789),predmap));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY], null),loom.graph.nodes.call(null,g)));
});

loom.alg.bf_traverse.cljs$core$IFn$_invoke$arity$2 = (function (g,start){
return loom.alg_generic.bf_traverse.call(null,loom.graph.successors.call(null,g),start);
});

loom.alg.bf_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (g,start,opts){
return cljs.core.apply.call(null,loom.alg_generic.bf_traverse,loom.graph.successors.call(null,g),start,opts);
});

/** @this {Function} */
loom.alg.bf_traverse.cljs$lang$applyTo = (function (seq38951){
var G__38952 = cljs.core.first.call(null,seq38951);
var seq38951__$1 = cljs.core.next.call(null,seq38951);
var G__38953 = cljs.core.first.call(null,seq38951__$1);
var seq38951__$2 = cljs.core.next.call(null,seq38951__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38952,G__38953,seq38951__$2);
});

loom.alg.bf_traverse.cljs$lang$maxFixedArity = (2);

/**
 * Returns a breadth-first spanning tree of the form {node [successors]}
 */
loom.alg.bf_span = (function loom$alg$bf_span(var_args){
var G__38972 = arguments.length;
switch (G__38972) {
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
return loom.alg_generic.preds__GT_span.call(null,cljs.core.reduce.call(null,(function (predmap,n){
if(cljs.core.contains_QMARK_.call(null,predmap,n)){
return predmap;
} else {
return cljs.core.last.call(null,loom.alg_generic.bf_traverse.call(null,loom.graph.successors.call(null,g),n,new cljs.core.Keyword(null,"f","f",-1597136552),(function (_,pm,___$1){
return pm;
}),new cljs.core.Keyword(null,"seen","seen",-518999789),predmap));
}
}),cljs.core.PersistentArrayMap.EMPTY,loom.graph.nodes.call(null,g)));
});

loom.alg.bf_span.cljs$core$IFn$_invoke$arity$2 = (function (g,start){
return loom.alg_generic.bf_span.call(null,loom.graph.successors.call(null,g),start);
});

loom.alg.bf_span.cljs$lang$maxFixedArity = 2;

/**
 * Returns a path from start to end with the fewest hops (i.e. irrespective
 *   of edge weights)
 */
loom.alg.bf_path = (function loom$alg$bf_path(var_args){
var args__4736__auto__ = [];
var len__4730__auto___38978 = arguments.length;
var i__4731__auto___38979 = (0);
while(true){
if((i__4731__auto___38979 < len__4730__auto___38978)){
args__4736__auto__.push((arguments[i__4731__auto___38979]));

var G__38980 = (i__4731__auto___38979 + (1));
i__4731__auto___38979 = G__38980;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return loom.alg.bf_path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

loom.alg.bf_path.cljs$core$IFn$_invoke$arity$variadic = (function (g,start,end,opts){
return cljs.core.apply.call(null,loom.alg_generic.bf_path,loom.graph.successors.call(null,g),start,end,opts);
});

loom.alg.bf_path.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
loom.alg.bf_path.cljs$lang$applyTo = (function (seq38974){
var G__38975 = cljs.core.first.call(null,seq38974);
var seq38974__$1 = cljs.core.next.call(null,seq38974);
var G__38976 = cljs.core.first.call(null,seq38974__$1);
var seq38974__$2 = cljs.core.next.call(null,seq38974__$1);
var G__38977 = cljs.core.first.call(null,seq38974__$2);
var seq38974__$3 = cljs.core.next.call(null,seq38974__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38975,G__38976,G__38977,seq38974__$3);
});

/**
 * Using a bidirectional breadth-first search, finds a path from start to
 *   end with the fewest hops (i.e. irrespective of edge weights). Can be much
 *   faster than a unidirectional search on certain types of graphs
 */
loom.alg.bf_path_bi = (function loom$alg$bf_path_bi(g,start,end){
if(loom.graph.directed_QMARK_.call(null,g)){
return loom.alg_generic.bf_path_bi.call(null,loom.graph.successors.call(null,g),loom.graph.predecessors.call(null,g),start,end);
} else {
return loom.alg_generic.bf_path_bi.call(null,loom.graph.successors.call(null,g),loom.graph.successors.call(null,g),start,end);
}
});
/**
 * Returns a lazy-seq of [current-node state] where state is a map in
 *   the format {node [distance predecessor]}. When f is provided,
 *   returns a lazy-seq of (f node state) for each node
 */
loom.alg.dijkstra_traverse = (function loom$alg$dijkstra_traverse(var_args){
var G__38982 = arguments.length;
switch (G__38982) {
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
return loom.alg_generic.dijkstra_traverse.call(null,loom.graph.successors.call(null,g),loom.graph.weight.call(null,g),cljs.core.first.call(null,loom.graph.nodes.call(null,g)));
});

loom.alg.dijkstra_traverse.cljs$core$IFn$_invoke$arity$2 = (function (g,start){
return loom.alg_generic.dijkstra_traverse.call(null,loom.graph.successors.call(null,g),loom.graph.weight.call(null,g),start,cljs.core.vector);
});

loom.alg.dijkstra_traverse.cljs$core$IFn$_invoke$arity$3 = (function (g,start,f){
return loom.alg_generic.dijkstra_traverse.call(null,loom.graph.successors.call(null,g),loom.graph.weight.call(null,g),start,f);
});

loom.alg.dijkstra_traverse.cljs$lang$maxFixedArity = 3;

/**
 * Finds all shortest distances from start. Returns a map in the
 *   format {node {successor distance}}
 */
loom.alg.dijkstra_span = (function loom$alg$dijkstra_span(var_args){
var G__38985 = arguments.length;
switch (G__38985) {
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
return loom.alg_generic.dijkstra_span.call(null,loom.graph.successors.call(null,g),loom.graph.weight.call(null,g),cljs.core.first.call(null,loom.graph.nodes.call(null,g)));
});

loom.alg.dijkstra_span.cljs$core$IFn$_invoke$arity$2 = (function (g,start){
return loom.alg_generic.dijkstra_span.call(null,loom.graph.successors.call(null,g),loom.graph.weight.call(null,g),start);
});

loom.alg.dijkstra_span.cljs$lang$maxFixedArity = 2;

/**
 * Finds the shortest path from start to end. Returns a vector:
 *   [path distance]
 */
loom.alg.dijkstra_path_dist = (function loom$alg$dijkstra_path_dist(g,start,end){
return loom.alg_generic.dijkstra_path_dist.call(null,loom.graph.successors.call(null,g),loom.graph.weight.call(null,g),start,end);
});
/**
 * Finds the shortest path from start to end
 */
loom.alg.dijkstra_path = (function loom$alg$dijkstra_path(g,start,end){
return cljs.core.first.call(null,loom.alg.dijkstra_path_dist.call(null,g,start,end));
});
/**
 * Tests for whether we can improve the shortest path to v found so far
 * by going through u.
 */
loom.alg.can_relax_edge_QMARK_ = (function loom$alg$can_relax_edge_QMARK_(p__38987,weight,costs){
var vec__38988 = p__38987;
var u = cljs.core.nth.call(null,vec__38988,(0),null);
var v = cljs.core.nth.call(null,vec__38988,(1),null);
var edge = vec__38988;
var vd = cljs.core.get.call(null,costs,v);
var ud = cljs.core.get.call(null,costs,u);
var sum = (ud + weight);
return (vd > sum);
});
/**
 * If there's a shorter path from s to v via u,
 *  update our map of estimated path costs and
 * map of paths from source to vertex v
 */
loom.alg.relax_edge = (function loom$alg$relax_edge(p__38991,weight,p__38992){
var vec__38993 = p__38991;
var u = cljs.core.nth.call(null,vec__38993,(0),null);
var v = cljs.core.nth.call(null,vec__38993,(1),null);
var edge = vec__38993;
var vec__38996 = p__38992;
var costs = cljs.core.nth.call(null,vec__38996,(0),null);
var paths = cljs.core.nth.call(null,vec__38996,(1),null);
var estimates = vec__38996;
var ud = cljs.core.get.call(null,costs,u);
var sum = (ud + weight);
if(loom.alg.can_relax_edge_QMARK_.call(null,edge,weight,costs)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,costs,v,sum),cljs.core.assoc.call(null,paths,v,u)], null);
} else {
return estimates;
}
});
/**
 * Performs edge relaxation on all edges in weighted directed graph
 */
loom.alg.relax_edges = (function loom$alg$relax_edges(g,start,estimates){
return cljs.core.reduce.call(null,(function (estimates__$1,p__38999){
var vec__39000 = p__38999;
var u = cljs.core.nth.call(null,vec__39000,(0),null);
var v = cljs.core.nth.call(null,vec__39000,(1),null);
var edge = vec__39000;
return loom.alg.relax_edge.call(null,edge,loom.graph.weight.call(null,g,u,v),estimates__$1);
}),estimates,loom.graph.edges.call(null,g));
});
/**
 * Initializes path cost estimates and paths from source to all vertices,
 * for Bellman-Ford algorithm
 */
loom.alg.init_estimates = (function loom$alg$init_estimates(graph,start){
var nodes = cljs.core.disj.call(null,loom.graph.nodes.call(null,graph),start);
var path_costs = cljs.core.PersistentArrayMap.createAsIfByAssoc([start,(0)]);
var paths = cljs.core.PersistentArrayMap.createAsIfByAssoc([start,null]);
var infinities = cljs.core.repeat.call(null,Infinity);
var nils = cljs.core.repeat.call(null,null);
var init_costs = cljs.core.interleave.call(null,nodes,infinities);
var init_paths = cljs.core.interleave.call(null,nodes,nils);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.assoc,path_costs,init_costs),cljs.core.apply.call(null,cljs.core.assoc,paths,init_paths)], null);
});
/**
 * Given a weighted, directed graph G = (V, E) with source start,
 * the Bellman-Ford algorithm produces map of single source shortest
 * paths and their costs if no negative-weight cycle that is reachable
 * from the source exists, and false otherwise, indicating that no
 * solution exists.
 */
loom.alg.bellman_ford = (function loom$alg$bellman_ford(g,start){
var initial_estimates = loom.alg.init_estimates.call(null,g,start);
var vec__39004 = cljs.core.reduce.call(null,((function (initial_estimates){
return (function (estimates,_){
return loom.alg.relax_edges.call(null,g,start,estimates);
});})(initial_estimates))
,initial_estimates,cljs.core.range.call(null,(cljs.core.count.call(null,loom.graph.nodes.call(null,g)) - (1))));
var costs = cljs.core.nth.call(null,vec__39004,(0),null);
var paths = cljs.core.nth.call(null,vec__39004,(1),null);
var edges = loom.graph.edges.call(null,g);
if(cljs.core.truth_(cljs.core.some.call(null,((function (initial_estimates,vec__39004,costs,paths,edges){
return (function (p__39007){
var vec__39008 = p__39007;
var u = cljs.core.nth.call(null,vec__39008,(0),null);
var v = cljs.core.nth.call(null,vec__39008,(1),null);
var edge = vec__39008;
return loom.alg.can_relax_edge_QMARK_.call(null,edge,loom.graph.weight.call(null,g,u,v),costs);
});})(initial_estimates,vec__39004,costs,paths,edges))
,edges))){
return false;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [costs,cljs.core.reduce.call(null,((function (initial_estimates,vec__39004,costs,paths,edges){
return (function (final_paths,v){
return cljs.core.assoc.call(null,final_paths,v,(function (){var node = v;
var path = cljs.core.List.EMPTY;
while(true){
if(cljs.core.truth_(node)){
var G__39011 = cljs.core.get.call(null,paths,node);
var G__39012 = cljs.core.cons.call(null,node,path);
node = G__39011;
path = G__39012;
continue;
} else {
return path;
}
break;
}
})());
});})(initial_estimates,vec__39004,costs,paths,edges))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,((function (initial_estimates,vec__39004,costs,paths,edges){
return (function (p1__39003_SHARP_){
return cljs.core._EQ_.call(null,Infinity,cljs.core.get.call(null,costs,p1__39003_SHARP_));
});})(initial_estimates,vec__39004,costs,paths,edges))
,cljs.core.keys.call(null,paths)))], null);
}
});
/**
 * Returns true if g is a directed acyclic graph
 */
loom.alg.dag_QMARK_ = (function loom$alg$dag_QMARK_(g){
return cljs.core.boolean$.call(null,loom.alg.topsort.call(null,g));
});
/**
 * Finds the shortest path from start to end in graph g, using Dijkstra's
 *   algorithm if the graph is weighted, breadth-first search otherwise.
 */
loom.alg.shortest_path = (function loom$alg$shortest_path(g,start,end){
if(loom.graph.weighted_QMARK_.call(null,g)){
return loom.alg.dijkstra_path.call(null,g,start,end);
} else {
return loom.alg.bf_path.call(null,g,start,end);
}
});
/**
 * Finds the longest shortest path beginning at start, using Dijkstra's
 *   algorithm if the graph is weighted, breadth-first search otherwise.
 */
loom.alg.longest_shortest_path = (function loom$alg$longest_shortest_path(g,start){
return cljs.core.reverse.call(null,((loom.graph.weighted_QMARK_.call(null,g))?cljs.core.reduce.call(null,(function (path1,p__39013){
var vec__39014 = p__39013;
var n = cljs.core.nth.call(null,vec__39014,(0),null);
var state = cljs.core.nth.call(null,vec__39014,(1),null);
var path2 = loom.alg_generic.trace_path.call(null,cljs.core.comp.call(null,cljs.core.second,state),n);
if((cljs.core.count.call(null,path1) < cljs.core.count.call(null,path2))){
return path2;
} else {
return path1;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null),loom.alg.dijkstra_traverse.call(null,g,start,cljs.core.vector)):cljs.core.reduce.call(null,(function (path1,p__39017){
var vec__39018 = p__39017;
var n = cljs.core.nth.call(null,vec__39018,(0),null);
var predmap = cljs.core.nth.call(null,vec__39018,(1),null);
var _ = cljs.core.nth.call(null,vec__39018,(2),null);
var path2 = loom.alg_generic.trace_path.call(null,predmap,n);
if((cljs.core.count.call(null,path1) < cljs.core.count.call(null,path2))){
return path2;
} else {
return path1;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null),loom.alg.bf_traverse.call(null,g,start,new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.vector))));
});
/**
 * Helper function for Johnson's algorithm. Uses Bellman-Ford to remove negative weights.
 */
loom.alg.bellman_ford_transform = (function loom$alg$bellman_ford_transform(wg){
var q = cljs.core.first.call(null,cljs.core.drop_while.call(null,cljs.core.partial.call(null,loom.graph.has_node_QMARK_,wg),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var es = (function (){var iter__4523__auto__ = ((function (q){
return (function loom$alg$bellman_ford_transform_$_iter__39021(s__39022){
return (new cljs.core.LazySeq(null,((function (q){
return (function (){
var s__39022__$1 = s__39022;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__39022__$1);
if(temp__5720__auto__){
var s__39022__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__39022__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__39022__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__39024 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__39023 = (0);
while(true){
if((i__39023 < size__4522__auto__)){
var v = cljs.core._nth.call(null,c__4521__auto__,i__39023);
cljs.core.chunk_append.call(null,b__39024,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [q,v,(0)], null));

var G__39032 = (i__39023 + (1));
i__39023 = G__39032;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39024),loom$alg$bellman_ford_transform_$_iter__39021.call(null,cljs.core.chunk_rest.call(null,s__39022__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39024),null);
}
} else {
var v = cljs.core.first.call(null,s__39022__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [q,v,(0)], null),loom$alg$bellman_ford_transform_$_iter__39021.call(null,cljs.core.rest.call(null,s__39022__$2)));
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
return iter__4523__auto__.call(null,loom.graph.nodes.call(null,wg));
})();
var bf_results = loom.alg.bellman_ford.call(null,loom.graph.add_edges_STAR_.call(null,wg,es),q);
if(cljs.core.truth_(bf_results)){
var vec__39025 = bf_results;
var dist_q = cljs.core.nth.call(null,vec__39025,(0),null);
var _ = cljs.core.nth.call(null,vec__39025,(1),null);
var new_es = cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.first,cljs.core.second,((function (vec__39025,dist_q,_,q,es,bf_results){
return (function (p__39028){
var vec__39029 = p__39028;
var u = cljs.core.nth.call(null,vec__39029,(0),null);
var v = cljs.core.nth.call(null,vec__39029,(1),null);
return (loom.graph.weight.call(null,wg,u,v) + (dist_q.call(null,u) - dist_q.call(null,v)));
});})(vec__39025,dist_q,_,q,es,bf_results))
),loom.graph.edges.call(null,wg));
return loom.graph.add_edges_STAR_.call(null,wg,new_es);
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
var g__$1 = (cljs.core.truth_((function (){var and__4120__auto__ = loom.graph.weighted_QMARK_.call(null,g);
if(and__4120__auto__){
return cljs.core.some.call(null,cljs.core.partial.call(null,cljs.core._GT_,(0)),cljs.core.map.call(null,loom.graph.weight.call(null,g),loom.graph.edges.call(null,g)));
} else {
return and__4120__auto__;
}
})())?loom.alg.bellman_ford_transform.call(null,g):g);
if(g__$1 === false){
return false;
} else {
var dist = ((loom.graph.weighted_QMARK_.call(null,g__$1))?loom.graph.weight.call(null,g__$1):((function (g__$1){
return (function (u,v){
if(cljs.core.truth_(loom.graph.has_edge_QMARK_.call(null,g__$1,u,v))){
return (1);
} else {
return null;
}
});})(g__$1))
);
return cljs.core.reduce.call(null,((function (dist,g__$1){
return (function (acc,node){
return cljs.core.assoc.call(null,acc,node,loom.alg_generic.dijkstra_span.call(null,loom.graph.successors.call(null,g__$1),dist,node));
});})(dist,g__$1))
,cljs.core.PersistentArrayMap.EMPTY,loom.graph.nodes.call(null,g__$1));
}
});
/**
 * Uses bf-span on each node in the graph.
 */
loom.alg.bf_all_pairs_shortest_paths = (function loom$alg$bf_all_pairs_shortest_paths(g){
return cljs.core.reduce.call(null,(function (spans,node){
return cljs.core.assoc.call(null,spans,node,loom.alg.bf_span.call(null,g,node));
}),cljs.core.PersistentArrayMap.EMPTY,loom.graph.nodes.call(null,g));
});
/**
 * Finds all-pairs shortest paths in a graph. Uses Johnson's algorithm for weighted graphs
 *   which is efficient for sparse graphs. Breadth-first spans are used for unweighted graphs.
 */
loom.alg.all_pairs_shortest_paths = (function loom$alg$all_pairs_shortest_paths(g){
if(loom.graph.weighted_QMARK_.call(null,g)){
return loom.alg.johnson.call(null,g);
} else {
return loom.alg.bf_all_pairs_shortest_paths.call(null,g);
}
});
/**
 * Returns the connected components of graph g as a vector of vectors. If g
 *   is directed, returns the weakly-connected components.
 */
loom.alg.connected_components = (function loom$alg$connected_components(g){
var nb = (((!(loom.graph.directed_QMARK_.call(null,g))))?loom.graph.successors.call(null,g):(function (p1__39033_SHARP_){
return cljs.core.concat.call(null,loom.graph.successors.call(null,g,p1__39033_SHARP_),loom.graph.predecessors.call(null,g,p1__39033_SHARP_));
}));
return cljs.core.first.call(null,cljs.core.reduce.call(null,((function (nb){
return (function (p__39034,n){
var vec__39035 = p__39034;
var cc = cljs.core.nth.call(null,vec__39035,(0),null);
var predmap = cljs.core.nth.call(null,vec__39035,(1),null);
if(cljs.core.contains_QMARK_.call(null,predmap,n)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cc,predmap], null);
} else {
var vec__39038 = cljs.core.reduce.call(null,((function (vec__39035,cc,predmap,nb){
return (function (p__39041,p__39042){
var vec__39043 = p__39041;
var c = cljs.core.nth.call(null,vec__39043,(0),null);
var _ = cljs.core.nth.call(null,vec__39043,(1),null);
var vec__39046 = p__39042;
var n__$1 = cljs.core.nth.call(null,vec__39046,(0),null);
var pm = cljs.core.nth.call(null,vec__39046,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__39046,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,c,n__$1),pm], null);
});})(vec__39035,cc,predmap,nb))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,null], null),loom.alg_generic.bf_traverse.call(null,nb,n,new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.vector,new cljs.core.Keyword(null,"seen","seen",-518999789),predmap));
var c = cljs.core.nth.call(null,vec__39038,(0),null);
var pm = cljs.core.nth.call(null,vec__39038,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,cc,c),pm], null);
}
});})(nb))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY], null),loom.graph.nodes.call(null,g)));
});
/**
 * Returns true if g is connected
 */
loom.alg.connected_QMARK_ = (function loom$alg$connected_QMARK_(g){
return (cljs.core.count.call(null,cljs.core.first.call(null,loom.alg.connected_components.call(null,g))) === cljs.core.count.call(null,loom.graph.nodes.call(null,g)));
});
/**
 * Returns the strongly-connected components of directed graph g as a vector of
 *   vectors. Uses Kosaraju's algorithm.
 */
loom.alg.scc = (function loom$alg$scc(g){
var gt = loom.graph.transpose.call(null,g);
var stack = cljs.core.reverse.call(null,loom.alg.post_traverse.call(null,g));
var seen = cljs.core.PersistentHashSet.EMPTY;
var cc = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
while(true){
if(cljs.core.empty_QMARK_.call(null,stack)){
return cljs.core.persistent_BANG_.call(null,cc);
} else {
if(cljs.core.truth_(seen.call(null,cljs.core.first.call(null,stack)))){
var G__39055 = cljs.core.rest.call(null,stack);
var G__39056 = seen;
var G__39057 = cc;
stack = G__39055;
seen = G__39056;
cc = G__39057;
continue;
} else {
var vec__39052 = loom.alg.post_traverse.call(null,gt,cljs.core.first.call(null,stack),new cljs.core.Keyword(null,"seen","seen",-518999789),seen,new cljs.core.Keyword(null,"return-seen","return-seen",308792727),true);
var c = cljs.core.nth.call(null,vec__39052,(0),null);
var seen__$1 = cljs.core.nth.call(null,vec__39052,(1),null);
var G__39058 = cljs.core.rest.call(null,stack);
var G__39059 = seen__$1;
var G__39060 = cljs.core.conj_BANG_.call(null,cc,c);
stack = G__39058;
seen = G__39059;
cc = G__39060;
continue;
}
}
break;
}
});
loom.alg.strongly_connected_QMARK_ = (function loom$alg$strongly_connected_QMARK_(g){
return (cljs.core.count.call(null,cljs.core.first.call(null,loom.alg.scc.call(null,g))) === cljs.core.count.call(null,loom.graph.nodes.call(null,g)));
});
/**
 * Returns graph g with all connected components connected to each other
 */
loom.alg.connect = (function loom$alg$connect(g){
return cljs.core.reduce.call(null,loom.graph.add_edges,g,cljs.core.partition.call(null,(2),(1),cljs.core.map.call(null,cljs.core.first,loom.alg.connected_components.call(null,g))));
});
/**
 * Return the density of graph g
 */
loom.alg.density = (function loom$alg$density(var_args){
var args__4736__auto__ = [];
var len__4730__auto___39066 = arguments.length;
var i__4731__auto___39067 = (0);
while(true){
if((i__4731__auto___39067 < len__4730__auto___39066)){
args__4736__auto__.push((arguments[i__4731__auto___39067]));

var G__39068 = (i__4731__auto___39067 + (1));
i__4731__auto___39067 = G__39068;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return loom.alg.density.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

loom.alg.density.cljs$core$IFn$_invoke$arity$variadic = (function (g,p__39063){
var map__39064 = p__39063;
var map__39064__$1 = (((((!((map__39064 == null))))?(((((map__39064.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39064.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39064):map__39064);
var loops = cljs.core.get.call(null,map__39064__$1,new cljs.core.Keyword(null,"loops","loops",-1766681555),false);
var order = cljs.core.count.call(null,loom.graph.nodes.call(null,g));
return (cljs.core.count.call(null,loom.graph.edges.call(null,g)) / (order * (cljs.core.truth_(loops)?order:(order - (1)))));
});

loom.alg.density.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
loom.alg.density.cljs$lang$applyTo = (function (seq39061){
var G__39062 = cljs.core.first.call(null,seq39061);
var seq39061__$1 = cljs.core.next.call(null,seq39061);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39062,seq39061__$1);
});

/**
 * Returns nodes with no connections to other nodes (i.e., isolated nodes)
 */
loom.alg.loners = (function loom$alg$loners(g){
var degree_total = ((loom.graph.directed_QMARK_.call(null,g))?(function (p1__39069_SHARP_){
return (loom.graph.in_degree.call(null,g,p1__39069_SHARP_) + loom.graph.out_degree.call(null,g,p1__39069_SHARP_));
}):(function (p1__39070_SHARP_){
return loom.graph.out_degree.call(null,g,p1__39070_SHARP_);
}));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.zero_QMARK_,degree_total),loom.graph.nodes.call(null,g));
});
/**
 * Returns the distinct edges of g. Only useful for undirected graphs
 */
loom.alg.distinct_edges = (function loom$alg$distinct_edges(g){
if(loom.graph.directed_QMARK_.call(null,g)){
return loom.graph.edges.call(null,g);
} else {
return cljs.core.second.call(null,cljs.core.reduce.call(null,(function (p__39071,e){
var vec__39072 = p__39071;
var seen = cljs.core.nth.call(null,vec__39072,(0),null);
var es = cljs.core.nth.call(null,vec__39072,(1),null);
var eset = cljs.core.set.call(null,cljs.core.take.call(null,(2),e));
if(cljs.core.truth_(seen.call(null,eset))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [seen,es], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,seen,eset),cljs.core.conj.call(null,es,e)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentVector.EMPTY], null),loom.graph.edges.call(null,g)));
}
});
/**
 * Attempts a two-coloring of graph g. When successful, returns a map of
 *   nodes to colors (1 or 0). Otherwise, returns nil.
 */
loom.alg.bipartite_color = (function loom$alg$bipartite_color(g){
var color_component = (function loom$alg$bipartite_color_$_color_component(coloring,start){
var coloring__$1 = cljs.core.assoc.call(null,coloring,start,(1));
var queue = cljs.core.conj.call(null,cljs.core.PersistentQueue.EMPTY,start);
while(true){
if(cljs.core.empty_QMARK_.call(null,queue)){
return coloring__$1;
} else {
var v = cljs.core.peek.call(null,queue);
var color = ((1) - coloring__$1.call(null,v));
var nbrs = loom.graph.successors.call(null,g,v);
if(cljs.core.truth_(cljs.core.some.call(null,((function (coloring__$1,queue,v,color,nbrs){
return (function (p1__39075_SHARP_){
var and__4120__auto__ = coloring__$1.call(null,p1__39075_SHARP_);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.call(null,coloring__$1.call(null,v),coloring__$1.call(null,p1__39075_SHARP_));
} else {
return and__4120__auto__;
}
});})(coloring__$1,queue,v,color,nbrs))
,nbrs))){
return null;
} else {
var nbrs__$1 = cljs.core.remove.call(null,coloring__$1,nbrs);
var G__39105 = cljs.core.into.call(null,coloring__$1,(function (){var iter__4523__auto__ = ((function (coloring__$1,queue,nbrs__$1,v,color,nbrs){
return (function loom$alg$bipartite_color_$_color_component_$_iter__39088(s__39089){
return (new cljs.core.LazySeq(null,((function (coloring__$1,queue,nbrs__$1,v,color,nbrs){
return (function (){
var s__39089__$1 = s__39089;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__39089__$1);
if(temp__5720__auto__){
var s__39089__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__39089__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__39089__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__39091 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__39090 = (0);
while(true){
if((i__39090 < size__4522__auto__)){
var nbr = cljs.core._nth.call(null,c__4521__auto__,i__39090);
cljs.core.chunk_append.call(null,b__39091,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,color], null));

var G__39107 = (i__39090 + (1));
i__39090 = G__39107;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39091),loom$alg$bipartite_color_$_color_component_$_iter__39088.call(null,cljs.core.chunk_rest.call(null,s__39089__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39091),null);
}
} else {
var nbr = cljs.core.first.call(null,s__39089__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,color], null),loom$alg$bipartite_color_$_color_component_$_iter__39088.call(null,cljs.core.rest.call(null,s__39089__$2)));
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
return iter__4523__auto__.call(null,nbrs__$1);
})());
var G__39106 = cljs.core.into.call(null,cljs.core.pop.call(null,queue),nbrs__$1);
coloring__$1 = G__39105;
queue = G__39106;
continue;
}
}
break;
}
});
var G__39095 = cljs.core.seq.call(null,loom.graph.nodes.call(null,g));
var vec__39096 = G__39095;
var seq__39097 = cljs.core.seq.call(null,vec__39096);
var first__39098 = cljs.core.first.call(null,seq__39097);
var seq__39097__$1 = cljs.core.next.call(null,seq__39097);
var node = first__39098;
var nodes = seq__39097__$1;
var coloring = cljs.core.PersistentArrayMap.EMPTY;
var G__39095__$1 = G__39095;
var coloring__$1 = coloring;
while(true){
var vec__39102 = G__39095__$1;
var seq__39103 = cljs.core.seq.call(null,vec__39102);
var first__39104 = cljs.core.first.call(null,seq__39103);
var seq__39103__$1 = cljs.core.next.call(null,seq__39103);
var node__$1 = first__39104;
var nodes__$1 = seq__39103__$1;
var coloring__$2 = coloring__$1;
if(cljs.core.truth_(coloring__$2)){
if((node__$1 == null)){
return coloring__$2;
} else {
if(cljs.core.truth_(coloring__$2.call(null,node__$1))){
var G__39108 = nodes__$1;
var G__39109 = coloring__$2;
G__39095__$1 = G__39108;
coloring__$1 = G__39109;
continue;
} else {
var G__39110 = nodes__$1;
var G__39111 = color_component.call(null,coloring__$2,node__$1);
G__39095__$1 = G__39110;
coloring__$1 = G__39111;
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
return cljs.core.boolean$.call(null,loom.alg.bipartite_color.call(null,g));
});
/**
 * Returns two sets of nodes, one for each color of the bipartite coloring,
 *   or nil if g is not bipartite
 */
loom.alg.bipartite_sets = (function loom$alg$bipartite_sets(g){
var temp__5720__auto__ = loom.alg.bipartite_color.call(null,g);
if(cljs.core.truth_(temp__5720__auto__)){
var coloring = temp__5720__auto__;
return cljs.core.reduce.call(null,((function (coloring,temp__5720__auto__){
return (function (p__39112,p__39113){
var vec__39114 = p__39112;
var s1 = cljs.core.nth.call(null,vec__39114,(0),null);
var s2 = cljs.core.nth.call(null,vec__39114,(1),null);
var vec__39117 = p__39113;
var node = cljs.core.nth.call(null,vec__39117,(0),null);
var color = cljs.core.nth.call(null,vec__39117,(1),null);
if((color === (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,s1,node),s2], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s1,cljs.core.conj.call(null,s2,node)], null);
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
var successors = loom.graph.successors.call(null,g,node);
var neighbors = (((!(loom.graph.directed_QMARK_.call(null,g))))?successors:cljs.core.concat.call(null,successors,loom.graph.predecessors.call(null,g,node)));
return cljs.core.set.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,((function (successors,neighbors){
return (function (p1__39120_SHARP_){
return cljs.core.get.call(null,coloring,p1__39120_SHARP_);
});})(successors,neighbors))
,neighbors)));
});
/**
 * Returns true if a map of nodes to colors is a proper coloring of a graph.
 */
loom.alg.coloring_QMARK_ = (function loom$alg$coloring_QMARK_(g,coloring){
var different_colors_QMARK_ = (function loom$alg$coloring_QMARK__$_different_colors_QMARK_(node){
return (!(cljs.core.contains_QMARK_.call(null,loom.alg.neighbor_colors.call(null,g,node,coloring),coloring.call(null,node))));
});
return ((cljs.core.every_QMARK_.call(null,different_colors_QMARK_,loom.graph.nodes.call(null,g))) && (cljs.core.every_QMARK_.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__39121_SHARP_){
return cljs.core.get.call(null,coloring,p1__39121_SHARP_);
}),loom.graph.nodes.call(null,g)))));
});
/**
 * Greedily color the vertices of a graph using the first-fit heuristic.
 *   Returns a map of nodes to colors (0, 1, ...).
 */
loom.alg.greedy_coloring = (function loom$alg$greedy_coloring(g){
var node_seq = loom.alg.bf_traverse.call(null,g);
var coloring = cljs.core.PersistentArrayMap.EMPTY;
var colors = cljs.core.PersistentHashSet.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,node_seq)){
return coloring;
} else {
var node = cljs.core.first.call(null,node_seq);
var possible_colors = clojure.set.difference.call(null,colors,loom.alg.neighbor_colors.call(null,g,node,coloring));
var node_color = ((cljs.core.empty_QMARK_.call(null,possible_colors))?cljs.core.count.call(null,colors):cljs.core.apply.call(null,cljs.core.min,possible_colors));
var G__39122 = cljs.core.rest.call(null,node_seq);
var G__39123 = cljs.core.conj.call(null,coloring,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,node_color], null));
var G__39124 = cljs.core.conj.call(null,colors,node_color);
node_seq = G__39122;
coloring = G__39123;
colors = G__39124;
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
var len__4730__auto___39136 = arguments.length;
var i__4731__auto___39137 = (0);
while(true){
if((i__4731__auto___39137 < len__4730__auto___39136)){
args__4736__auto__.push((arguments[i__4731__auto___39137]));

var G__39138 = (i__4731__auto___39137 + (1));
i__4731__auto___39137 = G__39138;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return loom.alg.max_flow.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

loom.alg.max_flow.cljs$core$IFn$_invoke$arity$variadic = (function (g,source,sink,p__39129){
var map__39130 = p__39129;
var map__39130__$1 = (((((!((map__39130 == null))))?(((((map__39130.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39130.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39130):map__39130);
var method = cljs.core.get.call(null,map__39130__$1,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"edmonds-karp","edmonds-karp",-1793813821));
var method_set = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"edmonds-karp","edmonds-karp",-1793813821),null], null), null);
var n = loom.graph.successors.call(null,g);
var i = loom.graph.predecessors.call(null,g);
var c = loom.graph.weight.call(null,g);
var s = source;
var t = sink;
var vec__39132 = (function (){var G__39135 = method;
var G__39135__$1 = (((G__39135 instanceof cljs.core.Keyword))?G__39135.fqn:null);
switch (G__39135__$1) {
case "edmonds-karp":
return loom.flow.edmonds_karp.call(null,n,i,c,s,t);

break;
default:
throw cljs.core.ex_info.call(null,["Method not found.  Choose from: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_set)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"method-set","method-set",-2030344221),method_set], null));

}
})();
var flow_map = cljs.core.nth.call(null,vec__39132,(0),null);
var flow_value = cljs.core.nth.call(null,vec__39132,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [flow_map,flow_value], null);
});

loom.alg.max_flow.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
loom.alg.max_flow.cljs$lang$applyTo = (function (seq39125){
var G__39126 = cljs.core.first.call(null,seq39125);
var seq39125__$1 = cljs.core.next.call(null,seq39125);
var G__39127 = cljs.core.first.call(null,seq39125__$1);
var seq39125__$2 = cljs.core.next.call(null,seq39125__$1);
var G__39128 = cljs.core.first.call(null,seq39125__$2);
var seq39125__$3 = cljs.core.next.call(null,seq39125__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39126,G__39127,G__39128,seq39125__$3);
});

/**
 * Wrapper function to return edges along with weights for a given graph.
 * For un-weighted graphs a default value of one is produced. The function
 * returns values of the form [[[u v] 10] [[x y] 20] ...]
 */
loom.alg.edge_weights = (function loom$alg$edge_weights(wg,v){
var edge_weight = (function (u,v__$1){
if(loom.graph.weighted_QMARK_.call(null,wg)){
return loom.graph.weight.call(null,wg,u,v__$1);
} else {
return (1);
}
});
return cljs.core.map.call(null,((function (edge_weight){
return (function (p1__39140_SHARP_){
return cljs.core.vec.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__39140_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,edge_weight.call(null,v,p1__39140_SHARP_)], null)], null));
});})(edge_weight))
,loom.graph.successors.call(null,wg,v));
});
/**
 * An edge-list of an minimum spanning tree along with weights that
 *   represents an MST of the given graph. Returns the MST edge-list
 *   for un-weighted graphs.
 */
loom.alg.prim_mst_edges = (function loom$alg$prim_mst_edges(var_args){
var G__39144 = arguments.length;
switch (G__39144) {
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
if(loom.graph.directed_QMARK_.call(null,wg)){
throw Error("Spanning tree only defined for undirected graphs");
} else {
var mst = loom.alg.prim_mst_edges.call(null,wg,loom.graph.nodes.call(null,wg),null,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentVector.EMPTY);
if(loom.graph.weighted_QMARK_.call(null,wg)){
return mst;
} else {
return cljs.core.map.call(null,((function (mst){
return (function (p1__39141_SHARP_){
return cljs.core.vec.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,p1__39141_SHARP_),cljs.core.second.call(null,p1__39141_SHARP_)], null));
});})(mst))
,mst);
}

}
});

loom.alg.prim_mst_edges.cljs$core$IFn$_invoke$arity$5 = (function (wg,n,h,visited,acc){
while(true){
if(cljs.core.empty_QMARK_.call(null,n)){
return acc;
} else {
if(cljs.core.empty_QMARK_.call(null,h)){
var v = cljs.core.first.call(null,n);
var h__$1 = cljs.core.into.call(null,tailrecursion.priority_map.priority_map_keyfn.call(null,cljs.core.second),loom.alg.edge_weights.call(null,wg,v));
var G__39153 = wg;
var G__39154 = cljs.core.disj.call(null,n,v);
var G__39155 = h__$1;
var G__39156 = cljs.core.conj.call(null,visited,v);
var G__39157 = acc;
wg = G__39153;
n = G__39154;
h = G__39155;
visited = G__39156;
acc = G__39157;
continue;
} else {
var next_edge = cljs.core.peek.call(null,h);
var u = cljs.core.first.call(null,cljs.core.second.call(null,next_edge));
var v = cljs.core.first.call(null,next_edge);
var update_dist = ((function (wg,n,h,visited,acc,next_edge,u,v){
return (function (h__$1,p__39145){
var vec__39146 = p__39145;
var v__$1 = cljs.core.nth.call(null,vec__39146,(0),null);
var vec__39149 = cljs.core.nth.call(null,vec__39146,(1),null);
var u__$1 = cljs.core.nth.call(null,vec__39149,(0),null);
var wt = cljs.core.nth.call(null,vec__39149,(1),null);
if((cljs.core.get.call(null,h__$1,v__$1) == null)){
return cljs.core.assoc.call(null,h__$1,v__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [u__$1,wt], null));
} else {
if((cljs.core.second.call(null,cljs.core.get.call(null,h__$1,v__$1)) > wt)){
return cljs.core.assoc.call(null,h__$1,v__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [u__$1,wt], null));
} else {
return h__$1;

}
}
});})(wg,n,h,visited,acc,next_edge,u,v))
;
var wt = cljs.core.second.call(null,cljs.core.second.call(null,next_edge));
var visited__$1 = cljs.core.conj.call(null,visited,v);
var h__$1 = cljs.core.reduce.call(null,update_dist,cljs.core.pop.call(null,h),cljs.core.filter.call(null,((function (wg,n,h,visited,acc,wt,visited__$1,next_edge,u,v,update_dist){
return (function (p1__39142_SHARP_){
return cljs.core.complement.call(null,visited__$1).call(null,cljs.core.first.call(null,p1__39142_SHARP_));
});})(wg,n,h,visited,acc,wt,visited__$1,next_edge,u,v,update_dist))
,loom.alg.edge_weights.call(null,wg,v)));
var G__39158 = wg;
var G__39159 = cljs.core.disj.call(null,n,v);
var G__39160 = h__$1;
var G__39161 = cljs.core.conj.call(null,visited__$1,v);
var G__39162 = cljs.core.conj.call(null,acc,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [u,v,wt], null));
wg = G__39158;
n = G__39159;
h = G__39160;
visited = G__39161;
acc = G__39162;
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
var mst = cljs.core.apply.call(null,loom.graph.weighted_graph,loom.alg.prim_mst_edges.call(null,wg));
if(cljs.core._EQ_.call(null,cljs.core.comp.call(null,cljs.core.count,loom.graph.nodes).call(null,wg),cljs.core.comp.call(null,cljs.core.count,loom.graph.nodes).call(null,mst))){
return mst;
} else {
return cljs.core.apply.call(null,loom.graph.add_nodes,mst,cljs.core.filter.call(null,((function (mst){
return (function (p1__39163_SHARP_){
return (loom.graph.out_degree.call(null,wg,p1__39163_SHARP_) === (0));
});})(mst))
,loom.graph.nodes.call(null,wg)));

}
});
/**
 * Returns the shortest path using A* algorithm. Returns a map of predecessors.
 */
loom.alg.astar_path = (function loom$alg$astar_path(var_args){
var G__39165 = arguments.length;
switch (G__39165) {
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
var q = tailrecursion.priority_map.priority_map_keyfn.call(null,cljs.core.first,src,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),null,(0),(0)], null));
var explored = cljs.core.PersistentHashMap.EMPTY;
return loom.alg.astar_path.call(null,g,src,target,heur__$1,q,explored);
});

loom.alg.astar_path.cljs$core$IFn$_invoke$arity$6 = (function (g,src,target,heur,q,explored){
while(true){
if(cljs.core.empty_QMARK_.call(null,q)){
throw cljs.core.ex_info.call(null,"Target not reachable from source",cljs.core.PersistentArrayMap.EMPTY);
} else {
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,cljs.core.peek.call(null,q)),target)){
var u = cljs.core.first.call(null,cljs.core.peek.call(null,q));
var parent = cljs.core.second.call(null,cljs.core.peek.call(null,q)).call(null,(1));
var explored__$1 = cljs.core.assoc.call(null,explored,target,parent);
var path = (function (){var s = target;
var acc = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if((s == null)){
return acc;
} else {
if(cljs.core._EQ_.call(null,s,src)){
return cljs.core.assoc.call(null,acc,s,null);
} else {
var G__39167 = explored__$1.call(null,s);
var G__39168 = cljs.core.assoc.call(null,acc,s,explored__$1.call(null,s));
s = G__39167;
acc = G__39168;
continue;

}
}
break;
}
})();
return path;
} else {
var curr_node = cljs.core.first.call(null,cljs.core.peek.call(null,q));
var curr_dist = cljs.core.second.call(null,cljs.core.peek.call(null,q)).call(null,(2));
var explored__$1 = cljs.core.assoc.call(null,explored,curr_node,cljs.core.second.call(null,cljs.core.peek.call(null,q)).call(null,(1)));
var nbrs = cljs.core.remove.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.keys.call(null,explored__$1)),loom.graph.successors.call(null,g,curr_node));
var update_dist = ((function (g,src,target,heur,q,explored,curr_node,curr_dist,explored__$1,nbrs){
return (function (curr_node__$1,curr_dist__$1,q__$1,v){
var act = (curr_dist__$1 + ((loom.graph.weighted_QMARK_.call(null,g))?loom.graph.weight.call(null,g,curr_node__$1,v):(1)));
var est = (((cljs.core.get.call(null,q__$1,v) == null))?heur.call(null,v,target):cljs.core.get.call(null,q__$1,v).call(null,(3)));
if((((cljs.core.get.call(null,q__$1,v) == null)) || ((cljs.core.get.call(null,q__$1,v).call(null,(2)) > act)))){
return cljs.core.assoc.call(null,q__$1,v,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(act + est),curr_node__$1,act,est], null));
} else {
return q__$1;

}
});})(g,src,target,heur,q,explored,curr_node,curr_dist,explored__$1,nbrs))
;
var q__$1 = cljs.core.reduce.call(null,cljs.core.partial.call(null,update_dist,curr_node,curr_dist),cljs.core.pop.call(null,q),nbrs);
var G__39169 = g;
var G__39170 = src;
var G__39171 = target;
var G__39172 = heur;
var G__39173 = q__$1;
var G__39174 = explored__$1;
g = G__39169;
src = G__39170;
target = G__39171;
heur = G__39172;
q = G__39173;
explored = G__39174;
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
var path = loom.alg.astar_path.call(null,g,src,target,heur);
var dist = cljs.core.reduce.call(null,((function (path){
return (function (c,p__39175){
var vec__39176 = p__39175;
var u = cljs.core.nth.call(null,vec__39176,(0),null);
var v = cljs.core.nth.call(null,vec__39176,(1),null);
if((v == null)){
return c;
} else {
return (c + ((loom.graph.weighted_QMARK_.call(null,g))?loom.graph.weight.call(null,g,v,u):(1)));
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
var node_degs = cljs.core.into.call(null,tailrecursion.priority_map.priority_map.call(null),cljs.core.zipmap.call(null,loom.graph.nodes.call(null,g),cljs.core.map.call(null,cljs.core.partial.call(null,loom.graph.out_degree,g),loom.graph.nodes.call(null,g))));
var k = (0);
while(true){
if(cljs.core.empty_QMARK_.call(null,node_degs)){
return ordered_nodes;
} else {
var vec__39186 = cljs.core.first.call(null,node_degs);
var n = cljs.core.nth.call(null,vec__39186,(0),null);
var deg = cljs.core.nth.call(null,vec__39186,(1),null);
var updated_degs = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.first,cljs.core.comp.call(null,cljs.core.dec,cljs.core.second)),cljs.core.filter.call(null,cljs.core.second,cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.identity,node_degs),loom.graph.successors.call(null,g,n)))));
var G__39193 = cljs.core.conj.call(null,ordered_nodes,n);
var G__39194 = cljs.core.reduce.call(null,((function (ordered_nodes,node_degs,k,vec__39186,n,deg,updated_degs){
return (function (n_ds,p__39189){
var vec__39190 = p__39189;
var n__$1 = cljs.core.nth.call(null,vec__39190,(0),null);
var d = cljs.core.nth.call(null,vec__39190,(1),null);
return cljs.core.assoc.call(null,n_ds,n__$1,d);
});})(ordered_nodes,node_degs,k,vec__39186,n,deg,updated_degs))
,cljs.core.dissoc.call(null,node_degs,n),updated_degs);
var G__39195 = (function (){var x__4219__auto__ = k;
var y__4220__auto__ = deg;
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})();
ordered_nodes = G__39193;
node_degs = G__39194;
k = G__39195;
continue;
}
break;
}
});
loom.alg.bk_gen = (function loom$alg$bk_gen(g,p__39196,stack){
var vec__39197 = p__39196;
var r = cljs.core.nth.call(null,vec__39197,(0),null);
var p = cljs.core.nth.call(null,vec__39197,(1),null);
var x = cljs.core.nth.call(null,vec__39197,(2),null);
var v_pivot = cljs.core.reduce.call(null,cljs.core.partial.call(null,cljs.core.max_key,cljs.core.partial.call(null,loom.graph.out_degree,g)),p);
var v = v_pivot;
var p__$1 = cljs.core.set.call(null,p);
var x__$1 = cljs.core.set.call(null,x);
var stack__$1 = stack;
while(true){
if((v == null)){
return stack__$1;
} else {
var succ_v = cljs.core.set.call(null,loom.graph.successors.call(null,g,v));
var G__39200 = cljs.core.first.call(null,clojure.set.difference.call(null,cljs.core.disj.call(null,p__$1,v),cljs.core.set.call(null,loom.graph.successors.call(null,g,v_pivot))));
var G__39201 = cljs.core.disj.call(null,p__$1,v);
var G__39202 = cljs.core.conj.call(null,x__$1,v);
var G__39203 = cljs.core.conj.call(null,stack__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,r,v),clojure.set.intersection.call(null,p__$1,succ_v),clojure.set.intersection.call(null,x__$1,succ_v)], null));
v = G__39200;
p__$1 = G__39201;
x__$1 = G__39202;
stack__$1 = G__39203;
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
var vs = loom.alg.degeneracy_ordering.call(null,g);
var max_clqs = cljs.core.seq.call(null,cljs.core.PersistentVector.EMPTY);
var p = cljs.core.set.call(null,loom.graph.nodes.call(null,g));
var x = cljs.core.PersistentHashSet.EMPTY;
var stack = cljs.core.PersistentVector.EMPTY;
while(true){
if(((cljs.core.empty_QMARK_.call(null,stack)) && (cljs.core.empty_QMARK_.call(null,vs)))){
return max_clqs;
} else {
if(cljs.core.empty_QMARK_.call(null,stack)){
var v = cljs.core.first.call(null,vs);
var succ_v = cljs.core.set.call(null,loom.graph.successors.call(null,g,v));
var G__39210 = cljs.core.rest.call(null,vs);
var G__39211 = max_clqs;
var G__39212 = cljs.core.disj.call(null,p,v);
var G__39213 = cljs.core.conj.call(null,x,v);
var G__39214 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashSet.createAsIfByAssoc([v]),clojure.set.intersection.call(null,p,succ_v),clojure.set.intersection.call(null,x,succ_v)], null)], null);
vs = G__39210;
max_clqs = G__39211;
p = G__39212;
x = G__39213;
stack = G__39214;
continue;
} else {
var vec__39207 = cljs.core.peek.call(null,stack);
var r = cljs.core.nth.call(null,vec__39207,(0),null);
var s_p = cljs.core.nth.call(null,vec__39207,(1),null);
var s_x = cljs.core.nth.call(null,vec__39207,(2),null);
if(((cljs.core.empty_QMARK_.call(null,s_p)) && (cljs.core.empty_QMARK_.call(null,s_x)))){
var G__39215 = vs;
var G__39216 = cljs.core.cons.call(null,r,max_clqs);
var G__39217 = p;
var G__39218 = x;
var G__39219 = cljs.core.pop.call(null,stack);
vs = G__39215;
max_clqs = G__39216;
p = G__39217;
x = G__39218;
stack = G__39219;
continue;
} else {
if(cljs.core.empty_QMARK_.call(null,s_p)){
var G__39220 = vs;
var G__39221 = max_clqs;
var G__39222 = p;
var G__39223 = x;
var G__39224 = cljs.core.pop.call(null,stack);
vs = G__39220;
max_clqs = G__39221;
p = G__39222;
x = G__39223;
stack = G__39224;
continue;
} else {
var G__39225 = vs;
var G__39226 = max_clqs;
var G__39227 = p;
var G__39228 = x;
var G__39229 = loom.alg.bk_gen.call(null,g,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,s_p,s_x], null),cljs.core.pop.call(null,stack));
vs = G__39225;
max_clqs = G__39226;
p = G__39227;
x = G__39228;
stack = G__39229;
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
return loom.alg.bk.call(null,g);
});
/**
 * Returns true iff g1 is a subgraph of g2. An undirected graph is never
 *   considered as a subgraph of a directed graph and vice versa.
 */
loom.alg.subgraph_QMARK_ = (function loom$alg$subgraph_QMARK_(g1,g2){
var and__4120__auto__ = cljs.core._EQ_.call(null,loom.graph.directed_QMARK_.call(null,g1),loom.graph.directed_QMARK_.call(null,g2));
if(and__4120__auto__){
var edge_test_fn = ((loom.graph.directed_QMARK_.call(null,g1))?loom.graph.has_edge_QMARK_:((function (and__4120__auto__){
return (function (g,x,y){
var or__4131__auto__ = loom.graph.has_edge_QMARK_.call(null,g,x,y);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return loom.graph.has_edge_QMARK_.call(null,g,y,x);
}
});})(and__4120__auto__))
);
return ((cljs.core.every_QMARK_.call(null,((function (edge_test_fn,and__4120__auto__){
return (function (p1__39230_SHARP_){
return loom.graph.has_node_QMARK_.call(null,g2,p1__39230_SHARP_);
});})(edge_test_fn,and__4120__auto__))
,loom.graph.nodes.call(null,g1))) && (cljs.core.every_QMARK_.call(null,((function (edge_test_fn,and__4120__auto__){
return (function (p__39243){
var vec__39244 = p__39243;
var x = cljs.core.nth.call(null,vec__39244,(0),null);
var y = cljs.core.nth.call(null,vec__39244,(1),null);
return edge_test_fn.call(null,g2,x,y);
});})(edge_test_fn,and__4120__auto__))
,loom.graph.edges.call(null,g1))));
} else {
return and__4120__auto__;
}
});
/**
 * Returns true iff g1 is a subgraph of g2 and g2 is a subgraph of g1
 */
loom.alg.eql_QMARK_ = (function loom$alg$eql_QMARK_(g1,g2){
return ((loom.alg.subgraph_QMARK_.call(null,g1,g2)) && (loom.alg.subgraph_QMARK_.call(null,g2,g1)));
});
/**
 * Given a mapping phi between the vertices of two graphs, determine
 *   if the mapping is an isomorphism, e.g., {(phi x), (phi y)} connected
 *   in g2 iff {x, y} are connected in g1.
 */
loom.alg.isomorphism_QMARK_ = (function loom$alg$isomorphism_QMARK_(g1,g2,phi){
return loom.alg.eql_QMARK_.call(null,g2,loom.graph.add_edges_STAR_.call(null,loom.graph.add_nodes_STAR_.call(null,((loom.graph.directed_QMARK_.call(null,g1))?loom.graph.digraph.call(null):loom.graph.graph.call(null)),cljs.core.map.call(null,phi,loom.graph.nodes.call(null,g1))),cljs.core.map.call(null,(function (p__39247){
var vec__39248 = p__39247;
var x = cljs.core.nth.call(null,vec__39248,(0),null);
var y = cljs.core.nth.call(null,vec__39248,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [phi.call(null,x),phi.call(null,y)], null);
}),loom.graph.edges.call(null,g1))));
});

//# sourceMappingURL=alg.js.map
