// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('loom.alg_generic');
goog.require('cljs.core');
goog.require('cljs.core.constants');
/**
 * Using a map of nodes-to-preds, traces a node's family tree back to the
 *   source. Cycles are not accounted for.
 */
loom.alg_generic.trace_path = (function loom$alg_generic$trace_path(preds,node){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.iterate(preds,node));
});
/**
 * Returns a lazy seq of all non-looping path vectors starting with
 *   [<start-node>]
 */
loom.alg_generic.paths = (function loom$alg_generic$paths(preds,path){
var this_node = cljs.core.peek(path);
return cljs.core.cons(path,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (this_node){
return (function (p1__19070_SHARP_){
var G__19071 = preds;
var G__19072 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,p1__19070_SHARP_);
return (loom.alg_generic.paths.cljs$core$IFn$_invoke$arity$2 ? loom.alg_generic.paths.cljs$core$IFn$_invoke$arity$2(G__19071,G__19072) : loom.alg_generic.paths.call(null,G__19071,G__19072));
});})(this_node))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (this_node){
return (function (p1__19069_SHARP_){
return cljs.core.not_any_QMARK_(((function (this_node){
return (function (edge){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(edge,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this_node,p1__19069_SHARP_], null));
});})(this_node))
,cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),path));
});})(this_node))
,(preds.cljs$core$IFn$_invoke$arity$1 ? preds.cljs$core$IFn$_invoke$arity$1(this_node) : preds.call(null,this_node)))], 0)));
});
/**
 * Given a function and a starting node, returns all possible paths
 *   back to source. Cycles are not accounted for.
 */
loom.alg_generic.trace_paths = (function loom$alg_generic$trace_paths(preds,start){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__19073_SHARP_){
var G__19074 = cljs.core.peek(p1__19073_SHARP_);
return (preds.cljs$core$IFn$_invoke$arity$1 ? preds.cljs$core$IFn$_invoke$arity$1(G__19074) : preds.call(null,G__19074));
}),loom.alg_generic.paths(preds,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null)));
});
/**
 * Converts a map of the form {node predecessor} to a spanning tree of the
 *   form {node [successors]}
 */
loom.alg_generic.preds__GT_span = (function loom$alg_generic$preds__GT_span(preds){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (span,p__19075){
var vec__19076 = p__19075;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19076,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19076,(1),null);
if(cljs.core.truth_(p)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(span,p,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var G__19079 = p;
var G__19080 = cljs.core.PersistentVector.EMPTY;
return (span.cljs$core$IFn$_invoke$arity$2 ? span.cljs$core$IFn$_invoke$arity$2(G__19079,G__19080) : span.call(null,G__19079,G__19080));
})(),n));
} else {
return span;
}
}),cljs.core.PersistentArrayMap.EMPTY,preds);
});
/**
 * Traverses a graph depth-first preorder from start, successors being
 *   a function that returns direct successors for the node. Returns a
 *   lazy seq of nodes.
 */
loom.alg_generic.pre_traverse = (function loom$alg_generic$pre_traverse(var_args){
var args__4736__auto__ = [];
var len__4730__auto___19087 = arguments.length;
var i__4731__auto___19088 = (0);
while(true){
if((i__4731__auto___19088 < len__4730__auto___19087)){
args__4736__auto__.push((arguments[i__4731__auto___19088]));

var G__19089 = (i__4731__auto___19088 + (1));
i__4731__auto___19088 = G__19089;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__19084){
var map__19085 = p__19084;
var map__19085__$1 = (((((!((map__19085 == null))))?(((((map__19085.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19085.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19085):map__19085);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19085__$1,cljs.core.cst$kw$seen,cljs.core.PersistentHashSet.EMPTY);
var step = ((function (map__19085,map__19085__$1,seen){
return (function loom$alg_generic$step(stack,seen__$1){
var temp__5720__auto__ = cljs.core.peek(stack);
if(cljs.core.truth_(temp__5720__auto__)){
var node = temp__5720__auto__;
if(cljs.core.contains_QMARK_(seen__$1,node)){
return loom$alg_generic$step(cljs.core.pop(stack),seen__$1);
} else {
var seen__$2 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,node);
var nbrs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(seen__$2,(successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(node) : successors.call(null,node)));
return (new cljs.core.LazySeq(null,((function (seen__$2,nbrs,node,temp__5720__auto__,map__19085,map__19085__$1,seen){
return (function (){
return cljs.core.cons(node,loom$alg_generic$step(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(stack),nbrs),seen__$2));
});})(seen__$2,nbrs,node,temp__5720__auto__,map__19085,map__19085__$1,seen))
,null,null));
}
} else {
return null;
}
});})(map__19085,map__19085__$1,seen))
;
return step(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null),seen);
});

loom.alg_generic.pre_traverse.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.pre_traverse.cljs$lang$applyTo = (function (seq19081){
var G__19082 = cljs.core.first(seq19081);
var seq19081__$1 = cljs.core.next(seq19081);
var G__19083 = cljs.core.first(seq19081__$1);
var seq19081__$2 = cljs.core.next(seq19081__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19082,G__19083,seq19081__$2);
});

/**
 * Traverses a graph depth-first preorder from start, successors being
 *   a function that returns direct successors for the node. Returns a
 *   lazy seq of edges, each edge being a vector [source-node dest-node].
 *   Note that for undirected graphs each edge will be returned twice,
 *   once for each direction.
 */
loom.alg_generic.pre_edge_traverse = (function loom$alg_generic$pre_edge_traverse(var_args){
var args__4736__auto__ = [];
var len__4730__auto___19096 = arguments.length;
var i__4731__auto___19097 = (0);
while(true){
if((i__4731__auto___19097 < len__4730__auto___19096)){
args__4736__auto__.push((arguments[i__4731__auto___19097]));

var G__19098 = (i__4731__auto___19097 + (1));
i__4731__auto___19097 = G__19098;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__19093){
var map__19094 = p__19093;
var map__19094__$1 = (((((!((map__19094 == null))))?(((((map__19094.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19094.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19094):map__19094);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19094__$1,cljs.core.cst$kw$seen,cljs.core.PersistentHashSet.EMPTY);
var step = ((function (map__19094,map__19094__$1,seen){
return (function loom$alg_generic$step(successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1){
while(true){
var temp__5718__auto__ = cljs.core.first(nbrs);
if(cljs.core.truth_(temp__5718__auto__)){
var nbr = temp__5718__auto__;
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null),(new cljs.core.LazySeq(null,((function (successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1,nbr,temp__5718__auto__,map__19094,map__19094__$1,seen){
return (function (){
var seen__$2 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,start__$1);
if(cljs.core.truth_((seen__$2.cljs$core$IFn$_invoke$arity$1 ? seen__$2.cljs$core$IFn$_invoke$arity$1(nbr) : seen__$2.call(null,nbr)))){
return loom$alg_generic$step(successors__$1,start__$1,cljs.core.next(nbrs),stack,nbrstack,seen__$2);
} else {
return loom$alg_generic$step(successors__$1,nbr,(successors__$1.cljs$core$IFn$_invoke$arity$1 ? successors__$1.cljs$core$IFn$_invoke$arity$1(nbr) : successors__$1.call(null,nbr)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,start__$1),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nbrstack,cljs.core.next(nbrs)),seen__$2);
}
});})(successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1,nbr,temp__5718__auto__,map__19094,map__19094__$1,seen))
,null,null)));
} else {
var temp__5720__auto__ = cljs.core.peek(stack);
if(cljs.core.truth_(temp__5720__auto__)){
var parent = temp__5720__auto__;
var G__19099 = successors__$1;
var G__19100 = parent;
var G__19101 = cljs.core.peek(nbrstack);
var G__19102 = cljs.core.pop(stack);
var G__19103 = cljs.core.pop(nbrstack);
var G__19104 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,start__$1);
successors__$1 = G__19099;
start__$1 = G__19100;
nbrs = G__19101;
stack = G__19102;
nbrstack = G__19103;
seen__$1 = G__19104;
continue;
} else {
return null;
}
}
break;
}
});})(map__19094,map__19094__$1,seen))
;
if(cljs.core.truth_((seen.cljs$core$IFn$_invoke$arity$1 ? seen.cljs$core$IFn$_invoke$arity$1(start) : seen.call(null,start)))){
return null;
} else {
return step(successors,start,(successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(start) : successors.call(null,start)),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,start));
}
});

loom.alg_generic.pre_edge_traverse.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.pre_edge_traverse.cljs$lang$applyTo = (function (seq19090){
var G__19091 = cljs.core.first(seq19090);
var seq19090__$1 = cljs.core.next(seq19090);
var G__19092 = cljs.core.first(seq19090__$1);
var seq19090__$2 = cljs.core.next(seq19090__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19091,G__19092,seq19090__$2);
});

/**
 * Returns a depth-first spanning tree of the form {node [successors]}
 */
loom.alg_generic.pre_span = (function loom$alg_generic$pre_span(var_args){
var args__4736__auto__ = [];
var len__4730__auto___19111 = arguments.length;
var i__4731__auto___19112 = (0);
while(true){
if((i__4731__auto___19112 < len__4730__auto___19111)){
args__4736__auto__.push((arguments[i__4731__auto___19112]));

var G__19113 = (i__4731__auto___19112 + (1));
i__4731__auto___19112 = G__19113;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__19108){
var map__19109 = p__19108;
var map__19109__$1 = (((((!((map__19109 == null))))?(((((map__19109.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19109.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19109):map__19109);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19109__$1,cljs.core.cst$kw$seen,cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19109__$1,cljs.core.cst$kw$return_DASH_seen);
var seen__$1 = seen;
var preds = cljs.core.PersistentArrayMap.createAsIfByAssoc([start,null]);
var stack = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null);
while(true){
if(cljs.core.empty_QMARK_(stack)){
if(cljs.core.truth_(return_seen)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [loom.alg_generic.preds__GT_span(preds),seen__$1], null);
} else {
return loom.alg_generic.preds__GT_span(preds);
}
} else {
var v = cljs.core.peek(stack);
var seen__$2 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,v);
var temp__5718__auto__ = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(seen__$2,(successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(v) : successors.call(null,v))));
if(cljs.core.truth_(temp__5718__auto__)){
var u = temp__5718__auto__;
var G__19114 = seen__$2;
var G__19115 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(preds,u,v);
var G__19116 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,u);
seen__$1 = G__19114;
preds = G__19115;
stack = G__19116;
continue;
} else {
var G__19117 = seen__$2;
var G__19118 = preds;
var G__19119 = cljs.core.pop(stack);
seen__$1 = G__19117;
preds = G__19118;
stack = G__19119;
continue;
}
}
break;
}
});

loom.alg_generic.pre_span.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.pre_span.cljs$lang$applyTo = (function (seq19105){
var G__19106 = cljs.core.first(seq19105);
var seq19105__$1 = cljs.core.next(seq19105);
var G__19107 = cljs.core.first(seq19105__$1);
var seq19105__$2 = cljs.core.next(seq19105__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19106,G__19107,seq19105__$2);
});

/**
 * Traverses a graph depth-first postorder from start, successors
 *   being a function that returns adjacent nodes. Returns a vector
 */
loom.alg_generic.post_traverse = (function loom$alg_generic$post_traverse(var_args){
var args__4736__auto__ = [];
var len__4730__auto___19126 = arguments.length;
var i__4731__auto___19127 = (0);
while(true){
if((i__4731__auto___19127 < len__4730__auto___19126)){
args__4736__auto__.push((arguments[i__4731__auto___19127]));

var G__19128 = (i__4731__auto___19127 + (1));
i__4731__auto___19127 = G__19128;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__19123){
var map__19124 = p__19123;
var map__19124__$1 = (((((!((map__19124 == null))))?(((((map__19124.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19124.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19124):map__19124);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19124__$1,cljs.core.cst$kw$seen,cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19124__$1,cljs.core.cst$kw$return_DASH_seen);
var seen__$1 = seen;
var result = cljs.core.PersistentVector.EMPTY;
var stack = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null);
while(true){
if(cljs.core.empty_QMARK_(stack)){
if(cljs.core.truth_(return_seen)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,seen__$1], null);
} else {
return result;
}
} else {
var v = cljs.core.peek(stack);
var seen__$2 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,v);
var nbrs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(seen__$2,(successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(v) : successors.call(null,v)));
if(cljs.core.empty_QMARK_(nbrs)){
var G__19129 = seen__$2;
var G__19130 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,v);
var G__19131 = cljs.core.pop(stack);
seen__$1 = G__19129;
result = G__19130;
stack = G__19131;
continue;
} else {
var G__19132 = seen__$2;
var G__19133 = result;
var G__19134 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,cljs.core.first(nbrs));
seen__$1 = G__19132;
result = G__19133;
stack = G__19134;
continue;
}
}
break;
}
});

loom.alg_generic.post_traverse.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.post_traverse.cljs$lang$applyTo = (function (seq19120){
var G__19121 = cljs.core.first(seq19120);
var seq19120__$1 = cljs.core.next(seq19120);
var G__19122 = cljs.core.first(seq19120__$1);
var seq19120__$2 = cljs.core.next(seq19120__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19121,G__19122,seq19120__$2);
});

/**
 * Traverses a graph depth-first postorder from start, successors being
 *   a function that returns direct successors for the node. Returns a
 *   seq of edges, each edge being a vector [source-node dest-node].
 *   Note that for undirected graphs each edge will be returned twice,
 *   once for each direction.
 */
loom.alg_generic.post_edge_traverse = (function loom$alg_generic$post_edge_traverse(var_args){
var args__4736__auto__ = [];
var len__4730__auto___19141 = arguments.length;
var i__4731__auto___19142 = (0);
while(true){
if((i__4731__auto___19142 < len__4730__auto___19141)){
args__4736__auto__.push((arguments[i__4731__auto___19142]));

var G__19143 = (i__4731__auto___19142 + (1));
i__4731__auto___19142 = G__19143;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__19138){
var map__19139 = p__19138;
var map__19139__$1 = (((((!((map__19139 == null))))?(((((map__19139.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19139.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19139):map__19139);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19139__$1,cljs.core.cst$kw$seen,cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19139__$1,cljs.core.cst$kw$return_DASH_seen);
if(cljs.core.truth_((seen.cljs$core$IFn$_invoke$arity$1 ? seen.cljs$core$IFn$_invoke$arity$1(start) : seen.call(null,start)))){
if(cljs.core.truth_(return_seen)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,seen], null);
} else {
return null;
}
} else {
var start__$1 = start;
var nbrs = (successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(start__$1) : successors.call(null,start__$1));
var stack = cljs.core.PersistentVector.EMPTY;
var nbrstack = cljs.core.PersistentVector.EMPTY;
var seen__$1 = seen;
var edges = cljs.core.List.EMPTY;
while(true){
var seen__$2 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,start__$1);
var temp__5718__auto__ = cljs.core.first(nbrs);
if(cljs.core.truth_(temp__5718__auto__)){
var nbr = temp__5718__auto__;
if(cljs.core.truth_((seen__$2.cljs$core$IFn$_invoke$arity$1 ? seen__$2.cljs$core$IFn$_invoke$arity$1(nbr) : seen__$2.call(null,nbr)))){
var G__19144 = start__$1;
var G__19145 = cljs.core.next(nbrs);
var G__19146 = stack;
var G__19147 = nbrstack;
var G__19148 = seen__$2;
var G__19149 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(edges,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null));
start__$1 = G__19144;
nbrs = G__19145;
stack = G__19146;
nbrstack = G__19147;
seen__$1 = G__19148;
edges = G__19149;
continue;
} else {
var G__19150 = nbr;
var G__19151 = (successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(nbr) : successors.call(null,nbr));
var G__19152 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,start__$1);
var G__19153 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nbrstack,cljs.core.next(nbrs));
var G__19154 = seen__$2;
var G__19155 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(edges,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null));
start__$1 = G__19150;
nbrs = G__19151;
stack = G__19152;
nbrstack = G__19153;
seen__$1 = G__19154;
edges = G__19155;
continue;
}
} else {
var temp__5718__auto____$1 = cljs.core.peek(stack);
if(cljs.core.truth_(temp__5718__auto____$1)){
var parent = temp__5718__auto____$1;
var G__19156 = parent;
var G__19157 = cljs.core.peek(nbrstack);
var G__19158 = cljs.core.pop(stack);
var G__19159 = cljs.core.pop(nbrstack);
var G__19160 = seen__$2;
var G__19161 = edges;
start__$1 = G__19156;
nbrs = G__19157;
stack = G__19158;
nbrstack = G__19159;
seen__$1 = G__19160;
edges = G__19161;
continue;
} else {
if(cljs.core.truth_(return_seen)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [edges,seen__$2], null);
} else {
return edges;
}
}
}
break;
}
}
});

loom.alg_generic.post_edge_traverse.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.post_edge_traverse.cljs$lang$applyTo = (function (seq19135){
var G__19136 = cljs.core.first(seq19135);
var seq19135__$1 = cljs.core.next(seq19135);
var G__19137 = cljs.core.first(seq19135__$1);
var seq19135__$2 = cljs.core.next(seq19135__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19136,G__19137,seq19135__$2);
});

/**
 * Topological sort of a component of a (presumably) directed graph.
 *   Returns nil if the graph contains any cycles. See loom.alg/topsort
 *   for a complete topological sort
 */
loom.alg_generic.topsort_component = (function loom$alg_generic$topsort_component(var_args){
var G__19163 = arguments.length;
switch (G__19163) {
case 2:
return loom.alg_generic.topsort_component.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return loom.alg_generic.topsort_component.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

loom.alg_generic.topsort_component.cljs$core$IFn$_invoke$arity$2 = (function (successors,start){
return loom.alg_generic.topsort_component.cljs$core$IFn$_invoke$arity$4(successors,start,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentHashSet.EMPTY);
});

loom.alg_generic.topsort_component.cljs$core$IFn$_invoke$arity$4 = (function (successors,start,seen,explored){
var seen__$1 = seen;
var explored__$1 = explored;
var result = cljs.core.List.EMPTY;
var stack = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null);
while(true){
if(cljs.core.empty_QMARK_(stack)){
return result;
} else {
var v = cljs.core.peek(stack);
var seen__$2 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,v);
var us = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(explored__$1,(successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(v) : successors.call(null,v)));
if(cljs.core.seq(us)){
if(cljs.core.truth_(cljs.core.some(seen__$2,us))){
return null;
} else {
var G__19165 = seen__$2;
var G__19166 = explored__$1;
var G__19167 = result;
var G__19168 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,cljs.core.first(us));
seen__$1 = G__19165;
explored__$1 = G__19166;
result = G__19167;
stack = G__19168;
continue;
}
} else {
var G__19169 = seen__$2;
var G__19170 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(explored__$1,v);
var G__19171 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,v);
var G__19172 = cljs.core.pop(stack);
seen__$1 = G__19169;
explored__$1 = G__19170;
result = G__19171;
stack = G__19172;
continue;
}
}
break;
}
});

loom.alg_generic.topsort_component.cljs$lang$maxFixedArity = 4;

/**
 * Traverses a graph breadth-first from start, successors being a
 *   function that returns adjacent nodes. When :f is provided, returns a
 *   lazy seq of (f node predecessor-map depth) for each node traversed.
 *   Otherwise, returns a lazy seq of the nodes. When :when is provided,
 *   filters successors with (f neighbor predecessor depth).
 */
loom.alg_generic.bf_traverse = (function loom$alg_generic$bf_traverse(var_args){
var args__4736__auto__ = [];
var len__4730__auto___19207 = arguments.length;
var i__4731__auto___19208 = (0);
while(true){
if((i__4731__auto___19208 < len__4730__auto___19207)){
args__4736__auto__.push((arguments[i__4731__auto___19208]));

var G__19209 = (i__4731__auto___19208 + (1));
i__4731__auto___19208 = G__19209;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__19180){
var map__19181 = p__19180;
var map__19181__$1 = (((((!((map__19181 == null))))?(((((map__19181.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19181.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19181):map__19181);
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19181__$1,cljs.core.cst$kw$f);
var when = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19181__$1,cljs.core.cst$kw$when);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19181__$1,cljs.core.cst$kw$seen);
var f__$1 = (function (){var or__4131__auto__ = f;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return ((function (or__4131__auto__,map__19181,map__19181__$1,f,when,seen){
return (function (n,p,d){
return n;
});
;})(or__4131__auto__,map__19181,map__19181__$1,f,when,seen))
}
})();
var nbr_pred = (function (){var or__4131__auto__ = when;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.constantly(true);
}
})();
var step = ((function (f__$1,nbr_pred,map__19181,map__19181__$1,f,when,seen){
return (function loom$alg_generic$step(queue,preds){
var temp__5720__auto__ = cljs.core.peek(queue);
if(cljs.core.truth_(temp__5720__auto__)){
var vec__19193 = temp__5720__auto__;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19193,(0),null);
var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19193,(1),null);
return cljs.core.cons((f__$1.cljs$core$IFn$_invoke$arity$3 ? f__$1.cljs$core$IFn$_invoke$arity$3(node,preds,depth) : f__$1.call(null,node,preds,depth)),(new cljs.core.LazySeq(null,((function (vec__19193,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__19181,map__19181__$1,f,when,seen){
return (function (){
var nbrs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__19193,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__19181,map__19181__$1,f,when,seen){
return (function (p1__19174_SHARP_){
var G__19196 = p1__19174_SHARP_;
var G__19197 = node;
var G__19198 = (depth + (1));
return (nbr_pred.cljs$core$IFn$_invoke$arity$3 ? nbr_pred.cljs$core$IFn$_invoke$arity$3(G__19196,G__19197,G__19198) : nbr_pred.call(null,G__19196,G__19197,G__19198));
});})(vec__19193,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__19181,map__19181__$1,f,when,seen))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__19193,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__19181,map__19181__$1,f,when,seen){
return (function (p1__19173_SHARP_){
return cljs.core.contains_QMARK_(preds,p1__19173_SHARP_);
});})(vec__19193,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__19181,map__19181__$1,f,when,seen))
,(successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(node) : successors.call(null,node))));
return loom$alg_generic$step(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(queue),(function (){var iter__4523__auto__ = ((function (nbrs,vec__19193,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__19181,map__19181__$1,f,when,seen){
return (function loom$alg_generic$step_$_iter__19199(s__19200){
return (new cljs.core.LazySeq(null,((function (nbrs,vec__19193,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__19181,map__19181__$1,f,when,seen){
return (function (){
var s__19200__$1 = s__19200;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__19200__$1);
if(temp__5720__auto____$1){
var s__19200__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__19200__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__19200__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__19202 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__19201 = (0);
while(true){
if((i__19201 < size__4522__auto__)){
var nbr = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__19201);
cljs.core.chunk_append(b__19202,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,(depth + (1))], null));

var G__19210 = (i__19201 + (1));
i__19201 = G__19210;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19202),loom$alg_generic$step_$_iter__19199(cljs.core.chunk_rest(s__19200__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19202),null);
}
} else {
var nbr = cljs.core.first(s__19200__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,(depth + (1))], null),loom$alg_generic$step_$_iter__19199(cljs.core.rest(s__19200__$2)));
}
} else {
return null;
}
break;
}
});})(nbrs,vec__19193,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__19181,map__19181__$1,f,when,seen))
,null,null));
});})(nbrs,vec__19193,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__19181,map__19181__$1,f,when,seen))
;
return iter__4523__auto__(nbrs);
})()),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (nbrs,vec__19193,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__19181,map__19181__$1,f,when,seen){
return (function (p1__19175_SHARP_,p2__19176_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__19175_SHARP_,p2__19176_SHARP_,node);
});})(nbrs,vec__19193,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__19181,map__19181__$1,f,when,seen))
,preds,nbrs));
});})(vec__19193,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__19181,map__19181__$1,f,when,seen))
,null,null)));
} else {
return null;
}
});})(f__$1,nbr_pred,map__19181,map__19181__$1,f,when,seen))
;
return step(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentQueue.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,(0)], null)),((cljs.core.map_QMARK_(seen))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(seen,start,null):cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.createAsIfByAssoc([start,null]),(function (){var iter__4523__auto__ = ((function (f__$1,nbr_pred,map__19181,map__19181__$1,f,when,seen){
return (function loom$alg_generic$iter__19203(s__19204){
return (new cljs.core.LazySeq(null,((function (f__$1,nbr_pred,map__19181,map__19181__$1,f,when,seen){
return (function (){
var s__19204__$1 = s__19204;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__19204__$1);
if(temp__5720__auto__){
var s__19204__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19204__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__19204__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__19206 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__19205 = (0);
while(true){
if((i__19205 < size__4522__auto__)){
var s = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__19205);
cljs.core.chunk_append(b__19206,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,null], null));

var G__19211 = (i__19205 + (1));
i__19205 = G__19211;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19206),loom$alg_generic$iter__19203(cljs.core.chunk_rest(s__19204__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19206),null);
}
} else {
var s = cljs.core.first(s__19204__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,null], null),loom$alg_generic$iter__19203(cljs.core.rest(s__19204__$2)));
}
} else {
return null;
}
break;
}
});})(f__$1,nbr_pred,map__19181,map__19181__$1,f,when,seen))
,null,null));
});})(f__$1,nbr_pred,map__19181,map__19181__$1,f,when,seen))
;
return iter__4523__auto__(seen);
})())));
});

loom.alg_generic.bf_traverse.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.bf_traverse.cljs$lang$applyTo = (function (seq19177){
var G__19178 = cljs.core.first(seq19177);
var seq19177__$1 = cljs.core.next(seq19177);
var G__19179 = cljs.core.first(seq19177__$1);
var seq19177__$2 = cljs.core.next(seq19177__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19178,G__19179,seq19177__$2);
});

/**
 * Return a breadth-first spanning tree of the form {node
 *   [successors]}
 */
loom.alg_generic.bf_span = (function loom$alg_generic$bf_span(var_args){
var args__4736__auto__ = [];
var len__4730__auto___19218 = arguments.length;
var i__4731__auto___19219 = (0);
while(true){
if((i__4731__auto___19219 < len__4730__auto___19218)){
args__4736__auto__.push((arguments[i__4731__auto___19219]));

var G__19220 = (i__4731__auto___19219 + (1));
i__4731__auto___19219 = G__19220;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__19215){
var map__19216 = p__19215;
var map__19216__$1 = (((((!((map__19216 == null))))?(((((map__19216.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19216.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19216):map__19216);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19216__$1,cljs.core.cst$kw$seen);
return loom.alg_generic.preds__GT_span(cljs.core.last(loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic(successors,start,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$f,((function (map__19216,map__19216__$1,seen){
return (function (_,pm,___$1){
return pm;
});})(map__19216,map__19216__$1,seen))
,cljs.core.cst$kw$seen,seen], 0))));
});

loom.alg_generic.bf_span.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.bf_span.cljs$lang$applyTo = (function (seq19212){
var G__19213 = cljs.core.first(seq19212);
var seq19212__$1 = cljs.core.next(seq19212);
var G__19214 = cljs.core.first(seq19212__$1);
var seq19212__$2 = cljs.core.next(seq19212__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19213,G__19214,seq19212__$2);
});

/**
 * Returns a path from start to end with the fewest hops (i.e. irrespective
 *   of edge weights), successors being a function that returns adjacent nodes
 */
loom.alg_generic.bf_path = (function loom$alg_generic$bf_path(var_args){
var args__4736__auto__ = [];
var len__4730__auto___19232 = arguments.length;
var i__4731__auto___19233 = (0);
while(true){
if((i__4731__auto___19233 < len__4730__auto___19232)){
args__4736__auto__.push((arguments[i__4731__auto___19233]));

var G__19234 = (i__4731__auto___19233 + (1));
i__4731__auto___19233 = G__19234;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,end,p__19225){
var map__19226 = p__19225;
var map__19226__$1 = (((((!((map__19226 == null))))?(((((map__19226.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19226.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19226):map__19226);
var opts = map__19226__$1;
var opts__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$f,cljs.core.vector], null)], 0));
var temp__5720__auto__ = cljs.core.some(((function (opts__$1,map__19226,map__19226__$1,opts){
return (function (p__19228){
var vec__19229 = p__19228;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19229,(0),null);
var pm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19229,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19229,(2),null);
if(cljs.core.truth_((pm.cljs$core$IFn$_invoke$arity$1 ? pm.cljs$core$IFn$_invoke$arity$1(end) : pm.call(null,end)))){
return pm;
} else {
return null;
}
});})(opts__$1,map__19226,map__19226__$1,opts))
,cljs.core.apply.cljs$core$IFn$_invoke$arity$4(loom.alg_generic.bf_traverse,successors,start,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,opts__$1)));
if(cljs.core.truth_(temp__5720__auto__)){
var preds = temp__5720__auto__;
return cljs.core.reverse(loom.alg_generic.trace_path(preds,end));
} else {
return null;
}
});

loom.alg_generic.bf_path.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
loom.alg_generic.bf_path.cljs$lang$applyTo = (function (seq19221){
var G__19222 = cljs.core.first(seq19221);
var seq19221__$1 = cljs.core.next(seq19221);
var G__19223 = cljs.core.first(seq19221__$1);
var seq19221__$2 = cljs.core.next(seq19221__$1);
var G__19224 = cljs.core.first(seq19221__$2);
var seq19221__$3 = cljs.core.next(seq19221__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19222,G__19223,G__19224,seq19221__$3);
});

/**
 * Returns a lazy-seq of the keys that exist in both m1 and m2
 */
loom.alg_generic.shared_keys = (function loom$alg_generic$shared_keys(m1,m2){
while(true){
if((cljs.core.count(m2) < cljs.core.count(m1))){
var G__19235 = m2;
var G__19236 = m1;
m1 = G__19235;
m2 = G__19236;
continue;
} else {
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.contains_QMARK_,m2),cljs.core.keys(m1));
}
break;
}
});
loom.alg_generic.bf_path_bi = (function loom$alg_generic$bf_path_bi(outgoing,predecessors,start,end){
throw (new Error("Unsupported operation `bf-path-bi`"));
});
loom.alg_generic.reverse_edges = (function loom$alg_generic$reverse_edges(successor_fn,nodes,coll){
var iter__4523__auto__ = (function loom$alg_generic$reverse_edges_$_iter__19238(s__19239){
return (new cljs.core.LazySeq(null,(function (){
var s__19239__$1 = s__19239;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__19239__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var node = cljs.core.first(xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__19239__$1,node,xs__6277__auto__,temp__5720__auto__){
return (function loom$alg_generic$reverse_edges_$_iter__19238_$_iter__19240(s__19241){
return (new cljs.core.LazySeq(null,((function (s__19239__$1,node,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__19241__$1 = s__19241;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__19241__$1);
if(temp__5720__auto____$1){
var s__19241__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__19241__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__19241__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__19243 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__19242 = (0);
while(true){
if((i__19242 < size__4522__auto__)){
var nbr = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__19242);
if((!(cljs.core.contains_QMARK_(coll,nbr)))){
cljs.core.chunk_append(b__19243,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,node], null));

var G__19244 = (i__19242 + (1));
i__19242 = G__19244;
continue;
} else {
var G__19245 = (i__19242 + (1));
i__19242 = G__19245;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19243),loom$alg_generic$reverse_edges_$_iter__19238_$_iter__19240(cljs.core.chunk_rest(s__19241__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19243),null);
}
} else {
var nbr = cljs.core.first(s__19241__$2);
if((!(cljs.core.contains_QMARK_(coll,nbr)))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,node], null),loom$alg_generic$reverse_edges_$_iter__19238_$_iter__19240(cljs.core.rest(s__19241__$2)));
} else {
var G__19246 = cljs.core.rest(s__19241__$2);
s__19241__$1 = G__19246;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__19239__$1,node,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__19239__$1,node,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__((successor_fn.cljs$core$IFn$_invoke$arity$1 ? successor_fn.cljs$core$IFn$_invoke$arity$1(node) : successor_fn.call(null,node))));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,loom$alg_generic$reverse_edges_$_iter__19238(cljs.core.rest(s__19239__$1)));
} else {
var G__19247 = cljs.core.rest(s__19239__$1);
s__19239__$1 = G__19247;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(nodes);
});
loom.alg_generic.conj_paths = (function loom$alg_generic$conj_paths(from_map,to_map,matches){
var iter__4523__auto__ = (function loom$alg_generic$conj_paths_$_iter__19248(s__19249){
return (new cljs.core.LazySeq(null,(function (){
var s__19249__$1 = s__19249;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__19249__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var n = cljs.core.first(xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__19249__$1,n,xs__6277__auto__,temp__5720__auto__){
return (function loom$alg_generic$conj_paths_$_iter__19248_$_iter__19250(s__19251){
return (new cljs.core.LazySeq(null,((function (s__19249__$1,n,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__19251__$1 = s__19251;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__19251__$1);
if(temp__5720__auto____$1){
var xs__6277__auto____$1 = temp__5720__auto____$1;
var from = cljs.core.first(xs__6277__auto____$1);
var iterys__4519__auto__ = ((function (s__19251__$1,s__19249__$1,from,xs__6277__auto____$1,temp__5720__auto____$1,n,xs__6277__auto__,temp__5720__auto__){
return (function loom$alg_generic$conj_paths_$_iter__19248_$_iter__19250_$_iter__19252(s__19253){
return (new cljs.core.LazySeq(null,((function (s__19251__$1,s__19249__$1,from,xs__6277__auto____$1,temp__5720__auto____$1,n,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__19253__$1 = s__19253;
while(true){
var temp__5720__auto____$2 = cljs.core.seq(s__19253__$1);
if(temp__5720__auto____$2){
var s__19253__$2 = temp__5720__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__19253__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__19253__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__19255 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__19254 = (0);
while(true){
if((i__19254 < size__4522__auto__)){
var to = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__19254);
cljs.core.chunk_append(b__19255,cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(from,to)));

var G__19256 = (i__19254 + (1));
i__19254 = G__19256;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19255),loom$alg_generic$conj_paths_$_iter__19248_$_iter__19250_$_iter__19252(cljs.core.chunk_rest(s__19253__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19255),null);
}
} else {
var to = cljs.core.first(s__19253__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(from,to)),loom$alg_generic$conj_paths_$_iter__19248_$_iter__19250_$_iter__19252(cljs.core.rest(s__19253__$2)));
}
} else {
return null;
}
break;
}
});})(s__19251__$1,s__19249__$1,from,xs__6277__auto____$1,temp__5720__auto____$1,n,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__19251__$1,s__19249__$1,from,xs__6277__auto____$1,temp__5720__auto____$1,n,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,loom.alg_generic.trace_paths(to_map,n))));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,loom$alg_generic$conj_paths_$_iter__19248_$_iter__19250(cljs.core.rest(s__19251__$1)));
} else {
var G__19257 = cljs.core.rest(s__19251__$1);
s__19251__$1 = G__19257;
continue;
}
} else {
return null;
}
break;
}
});})(s__19249__$1,n,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__19249__$1,n,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.reverse,loom.alg_generic.trace_paths(from_map,n))));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,loom$alg_generic$conj_paths_$_iter__19248(cljs.core.rest(s__19249__$1)));
} else {
var G__19258 = cljs.core.rest(s__19249__$1);
s__19249__$1 = G__19258;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(matches);
});
/**
 * Using a bidirectional breadth-first search, returns all shortest
 *   paths from start to end; predecessors is called on end and each
 *   preceding node, successors is called on start, etc.
 */
loom.alg_generic.bf_paths_bi = (function loom$alg_generic$bf_paths_bi(successors,predecessors,start,end){
var find_succs = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(loom.alg_generic.reverse_edges,successors);
var find_preds = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(loom.alg_generic.reverse_edges,predecessors);
var overlaps = ((function (find_succs,find_preds){
return (function (coll,q){
return cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (find_succs,find_preds){
return (function (p1__19259_SHARP_){
return cljs.core.contains_QMARK_(coll,p1__19259_SHARP_);
});})(find_succs,find_preds))
,q));
});})(find_succs,find_preds))
;
var map_set_pairs = ((function (find_succs,find_preds,overlaps){
return (function (map,pairs){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (find_succs,find_preds,overlaps){
return (function (map__$1,p__19260){
var vec__19261 = p__19260;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19261,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19261,(1),null);
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(map__$1,key,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__$1,key,cljs.core.PersistentHashSet.EMPTY),val));
});})(find_succs,find_preds,overlaps))
,cljs.core.transient$(map),pairs));
});})(find_succs,find_preds,overlaps))
;
var outgoing = cljs.core.PersistentArrayMap.createAsIfByAssoc([start,null]);
var incoming = cljs.core.PersistentArrayMap.createAsIfByAssoc([end,null]);
var q1 = (new cljs.core.List(null,start,null,(1),null));
var q2 = (new cljs.core.List(null,end,null,(1),null));
while(true){
if(((cljs.core.seq(q1)) && (cljs.core.seq(q2)))){
if((cljs.core.count(q1) <= cljs.core.count(q2))){
var pairs = (find_succs.cljs$core$IFn$_invoke$arity$2 ? find_succs.cljs$core$IFn$_invoke$arity$2(q1,outgoing) : find_succs.call(null,q1,outgoing));
var outgoing__$1 = map_set_pairs(outgoing,pairs);
var q1__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pairs);
var temp__5718__auto__ = overlaps(incoming,q1__$1);
if(temp__5718__auto__){
var all = temp__5718__auto__;
return loom.alg_generic.conj_paths(outgoing__$1,incoming,cljs.core.set(all));
} else {
var G__19264 = outgoing__$1;
var G__19265 = incoming;
var G__19266 = q1__$1;
var G__19267 = q2;
outgoing = G__19264;
incoming = G__19265;
q1 = G__19266;
q2 = G__19267;
continue;
}
} else {
var pairs = (find_preds.cljs$core$IFn$_invoke$arity$2 ? find_preds.cljs$core$IFn$_invoke$arity$2(q2,incoming) : find_preds.call(null,q2,incoming));
var incoming__$1 = map_set_pairs(incoming,pairs);
var q2__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pairs);
var temp__5718__auto__ = overlaps(outgoing,q2__$1);
if(temp__5718__auto__){
var all = temp__5718__auto__;
return loom.alg_generic.conj_paths(outgoing,incoming__$1,cljs.core.set(all));
} else {
var G__19268 = outgoing;
var G__19269 = incoming__$1;
var G__19270 = q1;
var G__19271 = q2__$1;
outgoing = G__19268;
incoming = G__19269;
q1 = G__19270;
q2 = G__19271;
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
 * Returns a lazy-seq of [current-node state] where state is a map in the
 *   format {node [distance predecessor]}. When f is provided, returns
 *   a lazy-seq of (f node state) for each node
 */
loom.alg_generic.dijkstra_traverse = (function loom$alg_generic$dijkstra_traverse(var_args){
var G__19275 = arguments.length;
switch (G__19275) {
case 3:
return loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$3 = (function (successors,dist,start){
return loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$4(successors,dist,start,cljs.core.vector);
});

loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$4 = (function (successors,dist,start,f){
var step = (function loom$alg_generic$step(p__19287){
var vec__19288 = p__19287;
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19288,(0),null);
var pq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19288,(1),null);
var temp__5720__auto__ = cljs.core.first(pq);
if(cljs.core.truth_(temp__5720__auto__)){
var vec__19291 = temp__5720__auto__;
var dist_su = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19291,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19291,(1),null);
var u = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19291,(2),null);
var fpq = vec__19291;
return cljs.core.cons((f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(u,state) : f.call(null,u,state)),(new cljs.core.LazySeq(null,((function (vec__19291,dist_su,_,u,fpq,temp__5720__auto__,vec__19288,state,pq){
return (function (){
return loom$alg_generic$step(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__19291,dist_su,_,u,fpq,temp__5720__auto__,vec__19288,state,pq){
return (function (p__19294,v){
var vec__19295 = p__19294;
var state__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19295,(0),null);
var pq__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19295,(1),null);
var dist_suv = (dist_su + (dist.cljs$core$IFn$_invoke$arity$2 ? dist.cljs$core$IFn$_invoke$arity$2(u,v) : dist.call(null,u,v)));
var dist_sv = cljs.core.first((state__$1.cljs$core$IFn$_invoke$arity$1 ? state__$1.cljs$core$IFn$_invoke$arity$1(v) : state__$1.call(null,v)));
if(cljs.core.truth_((function (){var and__4120__auto__ = dist_sv;
if(cljs.core.truth_(and__4120__auto__)){
return (dist_suv >= dist_sv);
} else {
return and__4120__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__$1,pq__$1], null);
} else {
var pq__$2 = (cljs.core.truth_(dist_sv)?cljs.core.disj.cljs$core$IFn$_invoke$arity$2(pq__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dist_sv,cljs.core.hash(v),v], null)):pq__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,v,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dist_suv,u], null)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(pq__$2,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dist_suv,cljs.core.hash(v),v], null))], null);
}
});})(vec__19291,dist_su,_,u,fpq,temp__5720__auto__,vec__19288,state,pq))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(pq,fpq)], null),(successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(u) : successors.call(null,u))));
});})(vec__19291,dist_su,_,u,fpq,temp__5720__auto__,vec__19288,state,pq))
,null,null)));
} else {
return null;
}
});
return step(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([start,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),null], null)]),cljs.core.sorted_set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.hash(start),start], null)], 0))], null));
});

loom.alg_generic.dijkstra_traverse.cljs$lang$maxFixedArity = 4;

/**
 * Finds all shortest distances from start, where successors and dist
 *   are functions called as (successors node) and (dist node1 node2).
 *   Returns a map in the format {node {successor distance}}
 */
loom.alg_generic.dijkstra_span = (function loom$alg_generic$dijkstra_span(successors,dist,start){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (span,p__19299){
var vec__19300 = p__19299;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19300,(0),null);
var vec__19303 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19300,(1),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19303,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19303,(1),null);
if(cljs.core.truth_(p)){
return cljs.core.assoc_in(span,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,n], null),d);
} else {
return span;
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.second(cljs.core.last(loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$3(successors,dist,start))));
});
/**
 * Finds the shortest path from start to end, where successors and dist
 *   are functions called as (successors node) and (dist node1 node2).
 *   Returns a vector: [path distance]
 */
loom.alg_generic.dijkstra_path_dist = (function loom$alg_generic$dijkstra_path_dist(successors,dist,start,end){
var temp__5718__auto__ = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__19306){
var vec__19307 = p__19306;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19307,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19307,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(end,node);
}),loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$3(successors,dist,start)));
if(cljs.core.truth_(temp__5718__auto__)){
var vec__19310 = temp__5718__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19310,(0),null);
var end_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19310,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reverse(loom.alg_generic.trace_path(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.second,end_state),end)),cljs.core.first((end_state.cljs$core$IFn$_invoke$arity$1 ? end_state.cljs$core$IFn$_invoke$arity$1(end) : end_state.call(null,end)))], null);
} else {
return null;
}
});
/**
 * Finds the shortest path from start to end, where successors and dist
 *   are functions called as (successors node) and (dist node1 node2)
 */
loom.alg_generic.dijkstra_path = (function loom$alg_generic$dijkstra_path(successors,dist,start,end){
return cljs.core.first(loom.alg_generic.dijkstra_path_dist(successors,dist,start,end));
});
loom.alg_generic.bits_per_long = cljs.core.long$((32));
/**
 * Returns the number of longs required to store bits count bits in a bitmap.
 */
loom.alg_generic.bm_longs = (function loom$alg_generic$bm_longs(bits){
return cljs.core.long$((function (){var G__19316 = (bits / loom.alg_generic.bits_per_long);
return Math.ceil(G__19316);
})());
});
/**
 * Create new empty bitmap.
 */
loom.alg_generic.bm_new = (function loom$alg_generic$bm_new(){
return cljs.core.long_array.cljs$core$IFn$_invoke$arity$1((1));
});
loom.alg_generic.bm_copy = (function loom$alg_generic$bm_copy(bm,size){
return bm.slice((0),size);
});
/**
 * Set boolean state of bit in 'bitmap at 'idx to true.
 */
loom.alg_generic.bm_set = (function loom$alg_generic$bm_set(bitmap,idx){
var size = (function (){var x__4219__auto__ = cljs.core.count(bitmap);
var y__4220__auto__ = loom.alg_generic.bm_longs((idx + (1)));
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})();
var new_bitmap = loom.alg_generic.bm_copy(bitmap,size);
var chunk = cljs.core.quot(idx,loom.alg_generic.bits_per_long);
var offset = cljs.core.mod(idx,loom.alg_generic.bits_per_long);
var mask = ((0) | (1 << offset));
var value = (new_bitmap[chunk]);
var new_value = (value | mask);
(new_bitmap[chunk] = new_value);

return new_bitmap;
});
/**
 * Get boolean state of bit in 'bitmap at 'idx.
 */
loom.alg_generic.bm_get = (function loom$alg_generic$bm_get(bitmap,idx){
if((loom.alg_generic.bm_longs((idx + (1))) <= cljs.core.count(bitmap))){
var chunk = cljs.core.quot(idx,loom.alg_generic.bits_per_long);
var offset = cljs.core.mod(idx,loom.alg_generic.bits_per_long);
var mask = ((0) | (1 << offset));
var value = (bitmap[chunk]);
var masked_value = (value & mask);
return (!((masked_value === (0))));
} else {
return null;
}
});
/**
 * Logically OR 'bitmaps together.
 */
loom.alg_generic.bm_or = (function loom$alg_generic$bm_or(var_args){
var args__4736__auto__ = [];
var len__4730__auto___19382 = arguments.length;
var i__4731__auto___19383 = (0);
while(true){
if((i__4731__auto___19383 < len__4730__auto___19382)){
args__4736__auto__.push((arguments[i__4731__auto___19383]));

var G__19384 = (i__4731__auto___19383 + (1));
i__4731__auto___19383 = G__19384;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return loom.alg_generic.bm_or.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

loom.alg_generic.bm_or.cljs$core$IFn$_invoke$arity$variadic = (function (bitmaps){
if(cljs.core.empty_QMARK_(bitmaps)){
return loom.alg_generic.bm_new();
} else {
var size = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,bitmaps));
var new_bitmap = loom.alg_generic.bm_copy(cljs.core.first(bitmaps),size);
var seq__19318_19385 = cljs.core.seq(cljs.core.rest(bitmaps));
var chunk__19325_19386 = null;
var count__19326_19387 = (0);
var i__19327_19388 = (0);
while(true){
if((i__19327_19388 < count__19326_19387)){
var bitmap_19389 = chunk__19325_19386.cljs$core$IIndexed$_nth$arity$2(null,i__19327_19388);
var seq__19328_19390 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.list,bitmap_19389));
var chunk__19330_19391 = null;
var count__19331_19392 = (0);
var i__19332_19393 = (0);
while(true){
if((i__19332_19393 < count__19331_19392)){
var vec__19364_19394 = chunk__19330_19391.cljs$core$IIndexed$_nth$arity$2(null,i__19332_19393);
var idx_19395 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19364_19394,(0),null);
var value_19396 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19364_19394,(1),null);
var masked_value_19397 = (value_19396 | (new_bitmap[idx_19395]));
(new_bitmap[idx_19395] = masked_value_19397);


var G__19398 = seq__19328_19390;
var G__19399 = chunk__19330_19391;
var G__19400 = count__19331_19392;
var G__19401 = (i__19332_19393 + (1));
seq__19328_19390 = G__19398;
chunk__19330_19391 = G__19399;
count__19331_19392 = G__19400;
i__19332_19393 = G__19401;
continue;
} else {
var temp__5720__auto___19402 = cljs.core.seq(seq__19328_19390);
if(temp__5720__auto___19402){
var seq__19328_19403__$1 = temp__5720__auto___19402;
if(cljs.core.chunked_seq_QMARK_(seq__19328_19403__$1)){
var c__4550__auto___19404 = cljs.core.chunk_first(seq__19328_19403__$1);
var G__19405 = cljs.core.chunk_rest(seq__19328_19403__$1);
var G__19406 = c__4550__auto___19404;
var G__19407 = cljs.core.count(c__4550__auto___19404);
var G__19408 = (0);
seq__19328_19390 = G__19405;
chunk__19330_19391 = G__19406;
count__19331_19392 = G__19407;
i__19332_19393 = G__19408;
continue;
} else {
var vec__19367_19409 = cljs.core.first(seq__19328_19403__$1);
var idx_19410 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19367_19409,(0),null);
var value_19411 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19367_19409,(1),null);
var masked_value_19412 = (value_19411 | (new_bitmap[idx_19410]));
(new_bitmap[idx_19410] = masked_value_19412);


var G__19413 = cljs.core.next(seq__19328_19403__$1);
var G__19414 = null;
var G__19415 = (0);
var G__19416 = (0);
seq__19328_19390 = G__19413;
chunk__19330_19391 = G__19414;
count__19331_19392 = G__19415;
i__19332_19393 = G__19416;
continue;
}
} else {
}
}
break;
}

var G__19417 = seq__19318_19385;
var G__19418 = chunk__19325_19386;
var G__19419 = count__19326_19387;
var G__19420 = (i__19327_19388 + (1));
seq__19318_19385 = G__19417;
chunk__19325_19386 = G__19418;
count__19326_19387 = G__19419;
i__19327_19388 = G__19420;
continue;
} else {
var temp__5720__auto___19421 = cljs.core.seq(seq__19318_19385);
if(temp__5720__auto___19421){
var seq__19318_19422__$1 = temp__5720__auto___19421;
if(cljs.core.chunked_seq_QMARK_(seq__19318_19422__$1)){
var c__4550__auto___19423 = cljs.core.chunk_first(seq__19318_19422__$1);
var G__19424 = cljs.core.chunk_rest(seq__19318_19422__$1);
var G__19425 = c__4550__auto___19423;
var G__19426 = cljs.core.count(c__4550__auto___19423);
var G__19427 = (0);
seq__19318_19385 = G__19424;
chunk__19325_19386 = G__19425;
count__19326_19387 = G__19426;
i__19327_19388 = G__19427;
continue;
} else {
var bitmap_19428 = cljs.core.first(seq__19318_19422__$1);
var seq__19319_19429 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.list,bitmap_19428));
var chunk__19321_19430 = null;
var count__19322_19431 = (0);
var i__19323_19432 = (0);
while(true){
if((i__19323_19432 < count__19322_19431)){
var vec__19376_19433 = chunk__19321_19430.cljs$core$IIndexed$_nth$arity$2(null,i__19323_19432);
var idx_19434 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19376_19433,(0),null);
var value_19435 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19376_19433,(1),null);
var masked_value_19436 = (value_19435 | (new_bitmap[idx_19434]));
(new_bitmap[idx_19434] = masked_value_19436);


var G__19437 = seq__19319_19429;
var G__19438 = chunk__19321_19430;
var G__19439 = count__19322_19431;
var G__19440 = (i__19323_19432 + (1));
seq__19319_19429 = G__19437;
chunk__19321_19430 = G__19438;
count__19322_19431 = G__19439;
i__19323_19432 = G__19440;
continue;
} else {
var temp__5720__auto___19441__$1 = cljs.core.seq(seq__19319_19429);
if(temp__5720__auto___19441__$1){
var seq__19319_19442__$1 = temp__5720__auto___19441__$1;
if(cljs.core.chunked_seq_QMARK_(seq__19319_19442__$1)){
var c__4550__auto___19443 = cljs.core.chunk_first(seq__19319_19442__$1);
var G__19444 = cljs.core.chunk_rest(seq__19319_19442__$1);
var G__19445 = c__4550__auto___19443;
var G__19446 = cljs.core.count(c__4550__auto___19443);
var G__19447 = (0);
seq__19319_19429 = G__19444;
chunk__19321_19430 = G__19445;
count__19322_19431 = G__19446;
i__19323_19432 = G__19447;
continue;
} else {
var vec__19379_19448 = cljs.core.first(seq__19319_19442__$1);
var idx_19449 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19379_19448,(0),null);
var value_19450 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19379_19448,(1),null);
var masked_value_19451 = (value_19450 | (new_bitmap[idx_19449]));
(new_bitmap[idx_19449] = masked_value_19451);


var G__19452 = cljs.core.next(seq__19319_19442__$1);
var G__19453 = null;
var G__19454 = (0);
var G__19455 = (0);
seq__19319_19429 = G__19452;
chunk__19321_19430 = G__19453;
count__19322_19431 = G__19454;
i__19323_19432 = G__19455;
continue;
}
} else {
}
}
break;
}

var G__19456 = cljs.core.next(seq__19318_19422__$1);
var G__19457 = null;
var G__19458 = (0);
var G__19459 = (0);
seq__19318_19385 = G__19456;
chunk__19325_19386 = G__19457;
count__19326_19387 = G__19458;
i__19327_19388 = G__19459;
continue;
}
} else {
}
}
break;
}

return new_bitmap;
}
});

loom.alg_generic.bm_or.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
loom.alg_generic.bm_or.cljs$lang$applyTo = (function (seq19317){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19317));
});

/**
 * Get the indicies of set bits in 'bitmap.
 */
loom.alg_generic.bm_get_indicies = (function loom$alg_generic$bm_get_indicies(bitmap){
var iter__4523__auto__ = (function loom$alg_generic$bm_get_indicies_$_iter__19460(s__19461){
return (new cljs.core.LazySeq(null,(function (){
var s__19461__$1 = s__19461;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__19461__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var chunk = cljs.core.first(xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__19461__$1,chunk,xs__6277__auto__,temp__5720__auto__){
return (function loom$alg_generic$bm_get_indicies_$_iter__19460_$_iter__19462(s__19463){
return (new cljs.core.LazySeq(null,((function (s__19461__$1,chunk,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__19463__$1 = s__19463;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__19463__$1);
if(temp__5720__auto____$1){
var s__19463__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__19463__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__19463__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__19465 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__19464 = (0);
while(true){
if((i__19464 < size__4522__auto__)){
var offset = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__19464);
var idx = ((chunk * loom.alg_generic.bits_per_long) + offset);
if(cljs.core.truth_(loom.alg_generic.bm_get(bitmap,idx))){
cljs.core.chunk_append(b__19465,idx);

var G__19466 = (i__19464 + (1));
i__19464 = G__19466;
continue;
} else {
var G__19467 = (i__19464 + (1));
i__19464 = G__19467;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19465),loom$alg_generic$bm_get_indicies_$_iter__19460_$_iter__19462(cljs.core.chunk_rest(s__19463__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19465),null);
}
} else {
var offset = cljs.core.first(s__19463__$2);
var idx = ((chunk * loom.alg_generic.bits_per_long) + offset);
if(cljs.core.truth_(loom.alg_generic.bm_get(bitmap,idx))){
return cljs.core.cons(idx,loom$alg_generic$bm_get_indicies_$_iter__19460_$_iter__19462(cljs.core.rest(s__19463__$2)));
} else {
var G__19468 = cljs.core.rest(s__19463__$2);
s__19463__$1 = G__19468;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__19461__$1,chunk,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__19461__$1,chunk,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(loom.alg_generic.bits_per_long)));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,loom$alg_generic$bm_get_indicies_$_iter__19460(cljs.core.rest(s__19461__$1)));
} else {
var G__19469 = cljs.core.rest(s__19461__$1);
s__19461__$1 = G__19469;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(bitmap)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
loom.alg_generic.Ancestry = (function (node__GT_idx,idx__GT_node,bitmaps,__meta,__extmap,__hash){
this.node__GT_idx = node__GT_idx;
this.idx__GT_node = idx__GT_node;
this.bitmaps = bitmaps;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
loom.alg_generic.Ancestry.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

loom.alg_generic.Ancestry.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k19471,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__19475 = k19471;
var G__19475__$1 = (((G__19475 instanceof cljs.core.Keyword))?G__19475.fqn:null);
switch (G__19475__$1) {
case "node->idx":
return self__.node__GT_idx;

break;
case "idx->node":
return self__.idx__GT_node;

break;
case "bitmaps":
return self__.bitmaps;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19471,else__4388__auto__);

}
});

loom.alg_generic.Ancestry.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__19476){
var vec__19477 = p__19476;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19477,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19477,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

loom.alg_generic.Ancestry.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#loom.alg-generic.Ancestry{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$node_DASH__GT_idx,self__.node__GT_idx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$idx_DASH__GT_node,self__.idx__GT_node],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$bitmaps,self__.bitmaps],null))], null),self__.__extmap));
});

loom.alg_generic.Ancestry.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19470){
var self__ = this;
var G__19470__$1 = this;
return (new cljs.core.RecordIter((0),G__19470__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$node_DASH__GT_idx,cljs.core.cst$kw$idx_DASH__GT_node,cljs.core.cst$kw$bitmaps], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

loom.alg_generic.Ancestry.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

loom.alg_generic.Ancestry.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,self__.__meta,self__.__extmap,self__.__hash));
});

loom.alg_generic.Ancestry.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

loom.alg_generic.Ancestry.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__19480 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1116202445 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__19480(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

loom.alg_generic.Ancestry.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this19472,other19473){
var self__ = this;
var this19472__$1 = this;
return (((!((other19473 == null)))) && ((this19472__$1.constructor === other19473.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19472__$1.node__GT_idx,other19473.node__GT_idx)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19472__$1.idx__GT_node,other19473.idx__GT_node)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19472__$1.bitmaps,other19473.bitmaps)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19472__$1.__extmap,other19473.__extmap)));
});

loom.alg_generic.Ancestry.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$idx_DASH__GT_node,null,cljs.core.cst$kw$node_DASH__GT_idx,null,cljs.core.cst$kw$bitmaps,null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

loom.alg_generic.Ancestry.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__19470){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__19481 = cljs.core.keyword_identical_QMARK_;
var expr__19482 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__19484 = cljs.core.cst$kw$node_DASH__GT_idx;
var G__19485 = expr__19482;
return (pred__19481.cljs$core$IFn$_invoke$arity$2 ? pred__19481.cljs$core$IFn$_invoke$arity$2(G__19484,G__19485) : pred__19481.call(null,G__19484,G__19485));
})())){
return (new loom.alg_generic.Ancestry(G__19470,self__.idx__GT_node,self__.bitmaps,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19486 = cljs.core.cst$kw$idx_DASH__GT_node;
var G__19487 = expr__19482;
return (pred__19481.cljs$core$IFn$_invoke$arity$2 ? pred__19481.cljs$core$IFn$_invoke$arity$2(G__19486,G__19487) : pred__19481.call(null,G__19486,G__19487));
})())){
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,G__19470,self__.bitmaps,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19488 = cljs.core.cst$kw$bitmaps;
var G__19489 = expr__19482;
return (pred__19481.cljs$core$IFn$_invoke$arity$2 ? pred__19481.cljs$core$IFn$_invoke$arity$2(G__19488,G__19489) : pred__19481.call(null,G__19488,G__19489));
})())){
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,G__19470,self__.__meta,self__.__extmap,null));
} else {
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__19470),null));
}
}
}
});

loom.alg_generic.Ancestry.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$node_DASH__GT_idx,self__.node__GT_idx,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$idx_DASH__GT_node,self__.idx__GT_node,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$bitmaps,self__.bitmaps,null))], null),self__.__extmap));
});

loom.alg_generic.Ancestry.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__19470){
var self__ = this;
var this__4384__auto____$1 = this;
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,G__19470,self__.__extmap,self__.__hash));
});

loom.alg_generic.Ancestry.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

loom.alg_generic.Ancestry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$node_DASH__GT_idx,cljs.core.cst$sym$idx_DASH__GT_node,cljs.core.cst$sym$bitmaps], null);
});

loom.alg_generic.Ancestry.cljs$lang$type = true;

loom.alg_generic.Ancestry.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"loom.alg-generic/Ancestry",null,(1),null));
});

loom.alg_generic.Ancestry.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"loom.alg-generic/Ancestry");
});

/**
 * Positional factory function for loom.alg-generic/Ancestry.
 */
loom.alg_generic.__GT_Ancestry = (function loom$alg_generic$__GT_Ancestry(node__GT_idx,idx__GT_node,bitmaps){
return (new loom.alg_generic.Ancestry(node__GT_idx,idx__GT_node,bitmaps,null,null,null));
});

/**
 * Factory function for loom.alg-generic/Ancestry, taking a map of keywords to field values.
 */
loom.alg_generic.map__GT_Ancestry = (function loom$alg_generic$map__GT_Ancestry(G__19474){
var extmap__4424__auto__ = (function (){var G__19490 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__19474,cljs.core.cst$kw$node_DASH__GT_idx,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$idx_DASH__GT_node,cljs.core.cst$kw$bitmaps], 0));
if(cljs.core.record_QMARK_(G__19474)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__19490);
} else {
return G__19490;
}
})();
return (new loom.alg_generic.Ancestry(cljs.core.cst$kw$node_DASH__GT_idx.cljs$core$IFn$_invoke$arity$1(G__19474),cljs.core.cst$kw$idx_DASH__GT_node.cljs$core$IFn$_invoke$arity$1(G__19474),cljs.core.cst$kw$bitmaps.cljs$core$IFn$_invoke$arity$1(G__19474),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

/**
 * Create a new, empty Ancestry cache.
 */
loom.alg_generic.ancestry_new = (function loom$alg_generic$ancestry_new(){
return loom.alg_generic.__GT_Ancestry(cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentVector.EMPTY);
});
/**
 * Finds if a 'node is contained in the 'ancestry cache.
 */
loom.alg_generic.ancestry_contains_QMARK_ = (function loom$alg_generic$ancestry_contains_QMARK_(ancestry,node){
return cljs.core.contains_QMARK_(cljs.core.cst$kw$node_DASH__GT_idx.cljs$core$IFn$_invoke$arity$1(ancestry),node);
});
/**
 * Adds a 'node and its 'parents associations to the 'ancestry cache.
 */
loom.alg_generic.ancestry_add = (function loom$alg_generic$ancestry_add(var_args){
var args__4736__auto__ = [];
var len__4730__auto___19497 = arguments.length;
var i__4731__auto___19498 = (0);
while(true){
if((i__4731__auto___19498 < len__4730__auto___19497)){
args__4736__auto__.push((arguments[i__4731__auto___19498]));

var G__19499 = (i__4731__auto___19498 + (1));
i__4731__auto___19498 = G__19499;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.ancestry_add.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.ancestry_add.cljs$core$IFn$_invoke$arity$variadic = (function (ancestry,node,parents){
if(loom.alg_generic.ancestry_contains_QMARK_(ancestry,node)){
return ancestry;
} else {
var map__19495 = ancestry;
var map__19495__$1 = (((((!((map__19495 == null))))?(((((map__19495.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19495.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19495):map__19495);
var node__GT_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19495__$1,cljs.core.cst$kw$node_DASH__GT_idx);
var idx__GT_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19495__$1,cljs.core.cst$kw$idx_DASH__GT_node);
var bitmaps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19495__$1,cljs.core.cst$kw$bitmaps);
var nid = cljs.core.count(node__GT_idx);
var node__GT_idx__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node__GT_idx,node,nid);
var idx__GT_node__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(idx__GT_node,nid,node);
var pidxs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(node__GT_idx__$1,parents);
var new_bitmap = ((cljs.core.empty_QMARK_(pidxs))?loom.alg_generic.bm_new():cljs.core.apply.cljs$core$IFn$_invoke$arity$2(loom.alg_generic.bm_or,cljs.core.map.cljs$core$IFn$_invoke$arity$2(bitmaps,pidxs)));
var new_bitmap__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(loom.alg_generic.bm_set,new_bitmap,pidxs);
var bitmaps__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(bitmaps,new_bitmap__$1);
return loom.alg_generic.__GT_Ancestry(node__GT_idx__$1,idx__GT_node__$1,bitmaps__$1);
}
});

loom.alg_generic.ancestry_add.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.ancestry_add.cljs$lang$applyTo = (function (seq19492){
var G__19493 = cljs.core.first(seq19492);
var seq19492__$1 = cljs.core.next(seq19492);
var G__19494 = cljs.core.first(seq19492__$1);
var seq19492__$2 = cljs.core.next(seq19492__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19493,G__19494,seq19492__$2);
});

/**
 * Finds if the 'parenter node is an ancestor of 'childer node for the given
 *   'ancestry cache.
 */
loom.alg_generic.ancestor_QMARK_ = (function loom$alg_generic$ancestor_QMARK_(ancestry,childer,parenter){
var map__19500 = ancestry;
var map__19500__$1 = (((((!((map__19500 == null))))?(((((map__19500.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19500.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19500):map__19500);
var node__GT_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19500__$1,cljs.core.cst$kw$node_DASH__GT_idx);
var bitmaps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19500__$1,cljs.core.cst$kw$bitmaps);
var cidx = (node__GT_idx.cljs$core$IFn$_invoke$arity$1 ? node__GT_idx.cljs$core$IFn$_invoke$arity$1(childer) : node__GT_idx.call(null,childer));
var pidx = (node__GT_idx.cljs$core$IFn$_invoke$arity$1 ? node__GT_idx.cljs$core$IFn$_invoke$arity$1(parenter) : node__GT_idx.call(null,parenter));
return cljs.core.boolean$((cljs.core.truth_((function (){var and__4120__auto__ = cidx;
if(cljs.core.truth_(and__4120__auto__)){
return pidx;
} else {
return and__4120__auto__;
}
})())?loom.alg_generic.bm_get(cljs.core.get.cljs$core$IFn$_invoke$arity$2(bitmaps,cidx),pidx):null));
});
/**
 * Returns all of the ancestors of 'child node.
 */
loom.alg_generic.ancestors = (function loom$alg_generic$ancestors(ancestry,child){
var map__19502 = ancestry;
var map__19502__$1 = (((((!((map__19502 == null))))?(((((map__19502.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19502.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19502):map__19502);
var node__GT_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19502__$1,cljs.core.cst$kw$node_DASH__GT_idx);
var idx__GT_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19502__$1,cljs.core.cst$kw$idx_DASH__GT_node);
var bitmaps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19502__$1,cljs.core.cst$kw$bitmaps);
var cidx = (node__GT_idx.cljs$core$IFn$_invoke$arity$1 ? node__GT_idx.cljs$core$IFn$_invoke$arity$1(child) : node__GT_idx.call(null,child));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(idx__GT_node,loom.alg_generic.bm_get_indicies(cljs.core.get.cljs$core$IFn$_invoke$arity$2(bitmaps,cidx)));
});
/**
 * Returns all of the nodes in an 'ancestry.
 */
loom.alg_generic.ancestry_nodes = (function loom$alg_generic$ancestry_nodes(ancestry){
return cljs.core.keys(cljs.core.cst$kw$node_DASH__GT_idx.cljs$core$IFn$_invoke$arity$1(ancestry));
});
