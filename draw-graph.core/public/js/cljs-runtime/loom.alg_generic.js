goog.provide('loom.alg_generic');
goog.require('cljs.core');
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
return (function (p1__28958_SHARP_){
var G__28966 = preds;
var G__28967 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,p1__28958_SHARP_);
return (loom.alg_generic.paths.cljs$core$IFn$_invoke$arity$2 ? loom.alg_generic.paths.cljs$core$IFn$_invoke$arity$2(G__28966,G__28967) : loom.alg_generic.paths.call(null,G__28966,G__28967));
});})(this_node))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (this_node){
return (function (p1__28957_SHARP_){
return cljs.core.not_any_QMARK_(((function (this_node){
return (function (edge){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(edge,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this_node,p1__28957_SHARP_], null));
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
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__28971_SHARP_){
var G__28974 = cljs.core.peek(p1__28971_SHARP_);
return (preds.cljs$core$IFn$_invoke$arity$1 ? preds.cljs$core$IFn$_invoke$arity$1(G__28974) : preds.call(null,G__28974));
}),loom.alg_generic.paths(preds,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null)));
});
/**
 * Converts a map of the form {node predecessor} to a spanning tree of the
 *   form {node [successors]}
 */
loom.alg_generic.preds__GT_span = (function loom$alg_generic$preds__GT_span(preds){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (span,p__28979){
var vec__28980 = p__28979;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28980,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28980,(1),null);
if(cljs.core.truth_(p)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(span,p,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var G__28988 = p;
var G__28989 = cljs.core.PersistentVector.EMPTY;
return (span.cljs$core$IFn$_invoke$arity$2 ? span.cljs$core$IFn$_invoke$arity$2(G__28988,G__28989) : span.call(null,G__28988,G__28989));
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
var len__4730__auto___30007 = arguments.length;
var i__4731__auto___30011 = (0);
while(true){
if((i__4731__auto___30011 < len__4730__auto___30007)){
args__4736__auto__.push((arguments[i__4731__auto___30011]));

var G__30017 = (i__4731__auto___30011 + (1));
i__4731__auto___30011 = G__30017;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__29021){
var map__29023 = p__29021;
var map__29023__$1 = (((((!((map__29023 == null))))?(((((map__29023.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29023.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29023):map__29023);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29023__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var step = ((function (map__29023,map__29023__$1,seen){
return (function loom$alg_generic$step(stack,seen__$1){
var temp__5720__auto__ = cljs.core.peek(stack);
if(cljs.core.truth_(temp__5720__auto__)){
var node = temp__5720__auto__;
if(cljs.core.contains_QMARK_(seen__$1,node)){
return loom$alg_generic$step(cljs.core.pop(stack),seen__$1);
} else {
var seen__$2 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,node);
var nbrs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(seen__$2,(successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(node) : successors.call(null,node)));
return (new cljs.core.LazySeq(null,((function (seen__$2,nbrs,node,temp__5720__auto__,map__29023,map__29023__$1,seen){
return (function (){
return cljs.core.cons(node,loom$alg_generic$step(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(stack),nbrs),seen__$2));
});})(seen__$2,nbrs,node,temp__5720__auto__,map__29023,map__29023__$1,seen))
,null,null));
}
} else {
return null;
}
});})(map__29023,map__29023__$1,seen))
;
return step(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null),seen);
});

loom.alg_generic.pre_traverse.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.pre_traverse.cljs$lang$applyTo = (function (seq28998){
var G__29000 = cljs.core.first(seq28998);
var seq28998__$1 = cljs.core.next(seq28998);
var G__29001 = cljs.core.first(seq28998__$1);
var seq28998__$2 = cljs.core.next(seq28998__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29000,G__29001,seq28998__$2);
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
var len__4730__auto___30040 = arguments.length;
var i__4731__auto___30041 = (0);
while(true){
if((i__4731__auto___30041 < len__4730__auto___30040)){
args__4736__auto__.push((arguments[i__4731__auto___30041]));

var G__30043 = (i__4731__auto___30041 + (1));
i__4731__auto___30041 = G__30043;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__29126){
var map__29128 = p__29126;
var map__29128__$1 = (((((!((map__29128 == null))))?(((((map__29128.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29128.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29128):map__29128);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29128__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var step = ((function (map__29128,map__29128__$1,seen){
return (function loom$alg_generic$step(successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1){
while(true){
var temp__5718__auto__ = cljs.core.first(nbrs);
if(cljs.core.truth_(temp__5718__auto__)){
var nbr = temp__5718__auto__;
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null),(new cljs.core.LazySeq(null,((function (successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1,nbr,temp__5718__auto__,map__29128,map__29128__$1,seen){
return (function (){
var seen__$2 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,start__$1);
if(cljs.core.truth_((seen__$2.cljs$core$IFn$_invoke$arity$1 ? seen__$2.cljs$core$IFn$_invoke$arity$1(nbr) : seen__$2.call(null,nbr)))){
return loom$alg_generic$step(successors__$1,start__$1,cljs.core.next(nbrs),stack,nbrstack,seen__$2);
} else {
return loom$alg_generic$step(successors__$1,nbr,(successors__$1.cljs$core$IFn$_invoke$arity$1 ? successors__$1.cljs$core$IFn$_invoke$arity$1(nbr) : successors__$1.call(null,nbr)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,start__$1),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nbrstack,cljs.core.next(nbrs)),seen__$2);
}
});})(successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1,nbr,temp__5718__auto__,map__29128,map__29128__$1,seen))
,null,null)));
} else {
var temp__5720__auto__ = cljs.core.peek(stack);
if(cljs.core.truth_(temp__5720__auto__)){
var parent = temp__5720__auto__;
var G__30061 = successors__$1;
var G__30062 = parent;
var G__30063 = cljs.core.peek(nbrstack);
var G__30064 = cljs.core.pop(stack);
var G__30065 = cljs.core.pop(nbrstack);
var G__30066 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,start__$1);
successors__$1 = G__30061;
start__$1 = G__30062;
nbrs = G__30063;
stack = G__30064;
nbrstack = G__30065;
seen__$1 = G__30066;
continue;
} else {
return null;
}
}
break;
}
});})(map__29128,map__29128__$1,seen))
;
if(cljs.core.truth_((seen.cljs$core$IFn$_invoke$arity$1 ? seen.cljs$core$IFn$_invoke$arity$1(start) : seen.call(null,start)))){
return null;
} else {
return step(successors,start,(successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(start) : successors.call(null,start)),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,start));
}
});

loom.alg_generic.pre_edge_traverse.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.pre_edge_traverse.cljs$lang$applyTo = (function (seq29117){
var G__29118 = cljs.core.first(seq29117);
var seq29117__$1 = cljs.core.next(seq29117);
var G__29119 = cljs.core.first(seq29117__$1);
var seq29117__$2 = cljs.core.next(seq29117__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29118,G__29119,seq29117__$2);
});

/**
 * Returns a depth-first spanning tree of the form {node [successors]}
 */
loom.alg_generic.pre_span = (function loom$alg_generic$pre_span(var_args){
var args__4736__auto__ = [];
var len__4730__auto___30078 = arguments.length;
var i__4731__auto___30079 = (0);
while(true){
if((i__4731__auto___30079 < len__4730__auto___30078)){
args__4736__auto__.push((arguments[i__4731__auto___30079]));

var G__30081 = (i__4731__auto___30079 + (1));
i__4731__auto___30079 = G__30081;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__29156){
var map__29157 = p__29156;
var map__29157__$1 = (((((!((map__29157 == null))))?(((((map__29157.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29157.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29157):map__29157);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29157__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29157__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__30091 = seen__$2;
var G__30092 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(preds,u,v);
var G__30093 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,u);
seen__$1 = G__30091;
preds = G__30092;
stack = G__30093;
continue;
} else {
var G__30096 = seen__$2;
var G__30097 = preds;
var G__30098 = cljs.core.pop(stack);
seen__$1 = G__30096;
preds = G__30097;
stack = G__30098;
continue;
}
}
break;
}
});

loom.alg_generic.pre_span.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.pre_span.cljs$lang$applyTo = (function (seq29145){
var G__29146 = cljs.core.first(seq29145);
var seq29145__$1 = cljs.core.next(seq29145);
var G__29147 = cljs.core.first(seq29145__$1);
var seq29145__$2 = cljs.core.next(seq29145__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29146,G__29147,seq29145__$2);
});

/**
 * Traverses a graph depth-first postorder from start, successors
 *   being a function that returns adjacent nodes. Returns a vector
 */
loom.alg_generic.post_traverse = (function loom$alg_generic$post_traverse(var_args){
var args__4736__auto__ = [];
var len__4730__auto___30103 = arguments.length;
var i__4731__auto___30104 = (0);
while(true){
if((i__4731__auto___30104 < len__4730__auto___30103)){
args__4736__auto__.push((arguments[i__4731__auto___30104]));

var G__30105 = (i__4731__auto___30104 + (1));
i__4731__auto___30104 = G__30105;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__29179){
var map__29180 = p__29179;
var map__29180__$1 = (((((!((map__29180 == null))))?(((((map__29180.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29180.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29180):map__29180);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29180__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29180__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__30109 = seen__$2;
var G__30110 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,v);
var G__30111 = cljs.core.pop(stack);
seen__$1 = G__30109;
result = G__30110;
stack = G__30111;
continue;
} else {
var G__30112 = seen__$2;
var G__30113 = result;
var G__30114 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,cljs.core.first(nbrs));
seen__$1 = G__30112;
result = G__30113;
stack = G__30114;
continue;
}
}
break;
}
});

loom.alg_generic.post_traverse.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.post_traverse.cljs$lang$applyTo = (function (seq29172){
var G__29173 = cljs.core.first(seq29172);
var seq29172__$1 = cljs.core.next(seq29172);
var G__29174 = cljs.core.first(seq29172__$1);
var seq29172__$2 = cljs.core.next(seq29172__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29173,G__29174,seq29172__$2);
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
var len__4730__auto___30118 = arguments.length;
var i__4731__auto___30119 = (0);
while(true){
if((i__4731__auto___30119 < len__4730__auto___30118)){
args__4736__auto__.push((arguments[i__4731__auto___30119]));

var G__30120 = (i__4731__auto___30119 + (1));
i__4731__auto___30119 = G__30120;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__29203){
var map__29204 = p__29203;
var map__29204__$1 = (((((!((map__29204 == null))))?(((((map__29204.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29204.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29204):map__29204);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29204__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29204__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__30124 = start__$1;
var G__30125 = cljs.core.next(nbrs);
var G__30126 = stack;
var G__30127 = nbrstack;
var G__30128 = seen__$2;
var G__30129 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(edges,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null));
start__$1 = G__30124;
nbrs = G__30125;
stack = G__30126;
nbrstack = G__30127;
seen__$1 = G__30128;
edges = G__30129;
continue;
} else {
var G__30131 = nbr;
var G__30132 = (successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(nbr) : successors.call(null,nbr));
var G__30133 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,start__$1);
var G__30134 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nbrstack,cljs.core.next(nbrs));
var G__30135 = seen__$2;
var G__30136 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(edges,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null));
start__$1 = G__30131;
nbrs = G__30132;
stack = G__30133;
nbrstack = G__30134;
seen__$1 = G__30135;
edges = G__30136;
continue;
}
} else {
var temp__5718__auto____$1 = cljs.core.peek(stack);
if(cljs.core.truth_(temp__5718__auto____$1)){
var parent = temp__5718__auto____$1;
var G__30140 = parent;
var G__30141 = cljs.core.peek(nbrstack);
var G__30142 = cljs.core.pop(stack);
var G__30143 = cljs.core.pop(nbrstack);
var G__30144 = seen__$2;
var G__30145 = edges;
start__$1 = G__30140;
nbrs = G__30141;
stack = G__30142;
nbrstack = G__30143;
seen__$1 = G__30144;
edges = G__30145;
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
loom.alg_generic.post_edge_traverse.cljs$lang$applyTo = (function (seq29194){
var G__29195 = cljs.core.first(seq29194);
var seq29194__$1 = cljs.core.next(seq29194);
var G__29196 = cljs.core.first(seq29194__$1);
var seq29194__$2 = cljs.core.next(seq29194__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29195,G__29196,seq29194__$2);
});

/**
 * Topological sort of a component of a (presumably) directed graph.
 *   Returns nil if the graph contains any cycles. See loom.alg/topsort
 *   for a complete topological sort
 */
loom.alg_generic.topsort_component = (function loom$alg_generic$topsort_component(var_args){
var G__29233 = arguments.length;
switch (G__29233) {
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
var G__30153 = seen__$2;
var G__30154 = explored__$1;
var G__30155 = result;
var G__30156 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,cljs.core.first(us));
seen__$1 = G__30153;
explored__$1 = G__30154;
result = G__30155;
stack = G__30156;
continue;
}
} else {
var G__30157 = seen__$2;
var G__30158 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(explored__$1,v);
var G__30159 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,v);
var G__30160 = cljs.core.pop(stack);
seen__$1 = G__30157;
explored__$1 = G__30158;
result = G__30159;
stack = G__30160;
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
var len__4730__auto___30161 = arguments.length;
var i__4731__auto___30162 = (0);
while(true){
if((i__4731__auto___30162 < len__4730__auto___30161)){
args__4736__auto__.push((arguments[i__4731__auto___30162]));

var G__30163 = (i__4731__auto___30162 + (1));
i__4731__auto___30162 = G__30163;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__29285){
var map__29286 = p__29285;
var map__29286__$1 = (((((!((map__29286 == null))))?(((((map__29286.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29286.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29286):map__29286);
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29286__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var when = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29286__$1,new cljs.core.Keyword(null,"when","when",-576417306));
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29286__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
var f__$1 = (function (){var or__4131__auto__ = f;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return ((function (or__4131__auto__,map__29286,map__29286__$1,f,when,seen){
return (function (n,p,d){
return n;
});
;})(or__4131__auto__,map__29286,map__29286__$1,f,when,seen))
}
})();
var nbr_pred = (function (){var or__4131__auto__ = when;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.constantly(true);
}
})();
var step = ((function (f__$1,nbr_pred,map__29286,map__29286__$1,f,when,seen){
return (function loom$alg_generic$step(queue,preds){
var temp__5720__auto__ = cljs.core.peek(queue);
if(cljs.core.truth_(temp__5720__auto__)){
var vec__29338 = temp__5720__auto__;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29338,(0),null);
var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29338,(1),null);
return cljs.core.cons((f__$1.cljs$core$IFn$_invoke$arity$3 ? f__$1.cljs$core$IFn$_invoke$arity$3(node,preds,depth) : f__$1.call(null,node,preds,depth)),(new cljs.core.LazySeq(null,((function (vec__29338,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__29286,map__29286__$1,f,when,seen){
return (function (){
var nbrs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__29338,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__29286,map__29286__$1,f,when,seen){
return (function (p1__29270_SHARP_){
var G__29342 = p1__29270_SHARP_;
var G__29343 = node;
var G__29344 = (depth + (1));
return (nbr_pred.cljs$core$IFn$_invoke$arity$3 ? nbr_pred.cljs$core$IFn$_invoke$arity$3(G__29342,G__29343,G__29344) : nbr_pred.call(null,G__29342,G__29343,G__29344));
});})(vec__29338,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__29286,map__29286__$1,f,when,seen))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__29338,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__29286,map__29286__$1,f,when,seen){
return (function (p1__29269_SHARP_){
return cljs.core.contains_QMARK_(preds,p1__29269_SHARP_);
});})(vec__29338,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__29286,map__29286__$1,f,when,seen))
,(successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(node) : successors.call(null,node))));
return loom$alg_generic$step(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(queue),(function (){var iter__4523__auto__ = ((function (nbrs,vec__29338,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__29286,map__29286__$1,f,when,seen){
return (function loom$alg_generic$step_$_iter__29349(s__29350){
return (new cljs.core.LazySeq(null,((function (nbrs,vec__29338,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__29286,map__29286__$1,f,when,seen){
return (function (){
var s__29350__$1 = s__29350;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__29350__$1);
if(temp__5720__auto____$1){
var s__29350__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__29350__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__29350__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__29352 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__29351 = (0);
while(true){
if((i__29351 < size__4522__auto__)){
var nbr = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__29351);
cljs.core.chunk_append(b__29352,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,(depth + (1))], null));

var G__30182 = (i__29351 + (1));
i__29351 = G__30182;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29352),loom$alg_generic$step_$_iter__29349(cljs.core.chunk_rest(s__29350__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29352),null);
}
} else {
var nbr = cljs.core.first(s__29350__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,(depth + (1))], null),loom$alg_generic$step_$_iter__29349(cljs.core.rest(s__29350__$2)));
}
} else {
return null;
}
break;
}
});})(nbrs,vec__29338,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__29286,map__29286__$1,f,when,seen))
,null,null));
});})(nbrs,vec__29338,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__29286,map__29286__$1,f,when,seen))
;
return iter__4523__auto__(nbrs);
})()),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (nbrs,vec__29338,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__29286,map__29286__$1,f,when,seen){
return (function (p1__29271_SHARP_,p2__29272_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__29271_SHARP_,p2__29272_SHARP_,node);
});})(nbrs,vec__29338,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__29286,map__29286__$1,f,when,seen))
,preds,nbrs));
});})(vec__29338,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__29286,map__29286__$1,f,when,seen))
,null,null)));
} else {
return null;
}
});})(f__$1,nbr_pred,map__29286,map__29286__$1,f,when,seen))
;
return step(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentQueue.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,(0)], null)),((cljs.core.map_QMARK_(seen))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(seen,start,null):cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.createAsIfByAssoc([start,null]),(function (){var iter__4523__auto__ = ((function (f__$1,nbr_pred,map__29286,map__29286__$1,f,when,seen){
return (function loom$alg_generic$iter__29354(s__29355){
return (new cljs.core.LazySeq(null,((function (f__$1,nbr_pred,map__29286,map__29286__$1,f,when,seen){
return (function (){
var s__29355__$1 = s__29355;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__29355__$1);
if(temp__5720__auto__){
var s__29355__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29355__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__29355__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__29357 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__29356 = (0);
while(true){
if((i__29356 < size__4522__auto__)){
var s = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__29356);
cljs.core.chunk_append(b__29357,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,null], null));

var G__30197 = (i__29356 + (1));
i__29356 = G__30197;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29357),loom$alg_generic$iter__29354(cljs.core.chunk_rest(s__29355__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29357),null);
}
} else {
var s = cljs.core.first(s__29355__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,null], null),loom$alg_generic$iter__29354(cljs.core.rest(s__29355__$2)));
}
} else {
return null;
}
break;
}
});})(f__$1,nbr_pred,map__29286,map__29286__$1,f,when,seen))
,null,null));
});})(f__$1,nbr_pred,map__29286,map__29286__$1,f,when,seen))
;
return iter__4523__auto__(seen);
})())));
});

loom.alg_generic.bf_traverse.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.bf_traverse.cljs$lang$applyTo = (function (seq29277){
var G__29278 = cljs.core.first(seq29277);
var seq29277__$1 = cljs.core.next(seq29277);
var G__29279 = cljs.core.first(seq29277__$1);
var seq29277__$2 = cljs.core.next(seq29277__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29278,G__29279,seq29277__$2);
});

/**
 * Return a breadth-first spanning tree of the form {node
 *   [successors]}
 */
loom.alg_generic.bf_span = (function loom$alg_generic$bf_span(var_args){
var args__4736__auto__ = [];
var len__4730__auto___30202 = arguments.length;
var i__4731__auto___30203 = (0);
while(true){
if((i__4731__auto___30203 < len__4730__auto___30202)){
args__4736__auto__.push((arguments[i__4731__auto___30203]));

var G__30204 = (i__4731__auto___30203 + (1));
i__4731__auto___30203 = G__30204;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__29379){
var map__29380 = p__29379;
var map__29380__$1 = (((((!((map__29380 == null))))?(((((map__29380.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29380.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29380):map__29380);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29380__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
return loom.alg_generic.preds__GT_span(cljs.core.last(loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic(successors,start,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"f","f",-1597136552),((function (map__29380,map__29380__$1,seen){
return (function (_,pm,___$1){
return pm;
});})(map__29380,map__29380__$1,seen))
,new cljs.core.Keyword(null,"seen","seen",-518999789),seen], 0))));
});

loom.alg_generic.bf_span.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.bf_span.cljs$lang$applyTo = (function (seq29373){
var G__29374 = cljs.core.first(seq29373);
var seq29373__$1 = cljs.core.next(seq29373);
var G__29375 = cljs.core.first(seq29373__$1);
var seq29373__$2 = cljs.core.next(seq29373__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29374,G__29375,seq29373__$2);
});

/**
 * Returns a path from start to end with the fewest hops (i.e. irrespective
 *   of edge weights), successors being a function that returns adjacent nodes
 */
loom.alg_generic.bf_path = (function loom$alg_generic$bf_path(var_args){
var args__4736__auto__ = [];
var len__4730__auto___30214 = arguments.length;
var i__4731__auto___30215 = (0);
while(true){
if((i__4731__auto___30215 < len__4730__auto___30214)){
args__4736__auto__.push((arguments[i__4731__auto___30215]));

var G__30216 = (i__4731__auto___30215 + (1));
i__4731__auto___30215 = G__30216;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,end,p__29396){
var map__29397 = p__29396;
var map__29397__$1 = (((((!((map__29397 == null))))?(((((map__29397.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29397.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29397):map__29397);
var opts = map__29397__$1;
var opts__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.vector], null)], 0));
var temp__5720__auto__ = cljs.core.some(((function (opts__$1,map__29397,map__29397__$1,opts){
return (function (p__29399){
var vec__29400 = p__29399;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29400,(0),null);
var pm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29400,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29400,(2),null);
if(cljs.core.truth_((pm.cljs$core$IFn$_invoke$arity$1 ? pm.cljs$core$IFn$_invoke$arity$1(end) : pm.call(null,end)))){
return pm;
} else {
return null;
}
});})(opts__$1,map__29397,map__29397__$1,opts))
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
loom.alg_generic.bf_path.cljs$lang$applyTo = (function (seq29388){
var G__29389 = cljs.core.first(seq29388);
var seq29388__$1 = cljs.core.next(seq29388);
var G__29390 = cljs.core.first(seq29388__$1);
var seq29388__$2 = cljs.core.next(seq29388__$1);
var G__29391 = cljs.core.first(seq29388__$2);
var seq29388__$3 = cljs.core.next(seq29388__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29389,G__29390,G__29391,seq29388__$3);
});

/**
 * Returns a lazy-seq of the keys that exist in both m1 and m2
 */
loom.alg_generic.shared_keys = (function loom$alg_generic$shared_keys(m1,m2){
while(true){
if((cljs.core.count(m2) < cljs.core.count(m1))){
var G__30232 = m2;
var G__30233 = m1;
m1 = G__30232;
m2 = G__30233;
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
var iter__4523__auto__ = (function loom$alg_generic$reverse_edges_$_iter__29416(s__29417){
return (new cljs.core.LazySeq(null,(function (){
var s__29417__$1 = s__29417;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__29417__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var node = cljs.core.first(xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__29417__$1,node,xs__6277__auto__,temp__5720__auto__){
return (function loom$alg_generic$reverse_edges_$_iter__29416_$_iter__29418(s__29419){
return (new cljs.core.LazySeq(null,((function (s__29417__$1,node,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__29419__$1 = s__29419;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__29419__$1);
if(temp__5720__auto____$1){
var s__29419__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__29419__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__29419__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__29421 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__29420 = (0);
while(true){
if((i__29420 < size__4522__auto__)){
var nbr = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__29420);
if((!(cljs.core.contains_QMARK_(coll,nbr)))){
cljs.core.chunk_append(b__29421,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,node], null));

var G__30241 = (i__29420 + (1));
i__29420 = G__30241;
continue;
} else {
var G__30244 = (i__29420 + (1));
i__29420 = G__30244;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29421),loom$alg_generic$reverse_edges_$_iter__29416_$_iter__29418(cljs.core.chunk_rest(s__29419__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29421),null);
}
} else {
var nbr = cljs.core.first(s__29419__$2);
if((!(cljs.core.contains_QMARK_(coll,nbr)))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,node], null),loom$alg_generic$reverse_edges_$_iter__29416_$_iter__29418(cljs.core.rest(s__29419__$2)));
} else {
var G__30246 = cljs.core.rest(s__29419__$2);
s__29419__$1 = G__30246;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__29417__$1,node,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__29417__$1,node,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__((successor_fn.cljs$core$IFn$_invoke$arity$1 ? successor_fn.cljs$core$IFn$_invoke$arity$1(node) : successor_fn.call(null,node))));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,loom$alg_generic$reverse_edges_$_iter__29416(cljs.core.rest(s__29417__$1)));
} else {
var G__30248 = cljs.core.rest(s__29417__$1);
s__29417__$1 = G__30248;
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
var iter__4523__auto__ = (function loom$alg_generic$conj_paths_$_iter__29439(s__29440){
return (new cljs.core.LazySeq(null,(function (){
var s__29440__$1 = s__29440;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__29440__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var n = cljs.core.first(xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__29440__$1,n,xs__6277__auto__,temp__5720__auto__){
return (function loom$alg_generic$conj_paths_$_iter__29439_$_iter__29441(s__29442){
return (new cljs.core.LazySeq(null,((function (s__29440__$1,n,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__29442__$1 = s__29442;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__29442__$1);
if(temp__5720__auto____$1){
var xs__6277__auto____$1 = temp__5720__auto____$1;
var from = cljs.core.first(xs__6277__auto____$1);
var iterys__4519__auto__ = ((function (s__29442__$1,s__29440__$1,from,xs__6277__auto____$1,temp__5720__auto____$1,n,xs__6277__auto__,temp__5720__auto__){
return (function loom$alg_generic$conj_paths_$_iter__29439_$_iter__29441_$_iter__29443(s__29444){
return (new cljs.core.LazySeq(null,((function (s__29442__$1,s__29440__$1,from,xs__6277__auto____$1,temp__5720__auto____$1,n,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__29444__$1 = s__29444;
while(true){
var temp__5720__auto____$2 = cljs.core.seq(s__29444__$1);
if(temp__5720__auto____$2){
var s__29444__$2 = temp__5720__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__29444__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__29444__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__29446 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__29445 = (0);
while(true){
if((i__29445 < size__4522__auto__)){
var to = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__29445);
cljs.core.chunk_append(b__29446,cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(from,to)));

var G__30261 = (i__29445 + (1));
i__29445 = G__30261;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29446),loom$alg_generic$conj_paths_$_iter__29439_$_iter__29441_$_iter__29443(cljs.core.chunk_rest(s__29444__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29446),null);
}
} else {
var to = cljs.core.first(s__29444__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(from,to)),loom$alg_generic$conj_paths_$_iter__29439_$_iter__29441_$_iter__29443(cljs.core.rest(s__29444__$2)));
}
} else {
return null;
}
break;
}
});})(s__29442__$1,s__29440__$1,from,xs__6277__auto____$1,temp__5720__auto____$1,n,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__29442__$1,s__29440__$1,from,xs__6277__auto____$1,temp__5720__auto____$1,n,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,loom.alg_generic.trace_paths(to_map,n))));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,loom$alg_generic$conj_paths_$_iter__29439_$_iter__29441(cljs.core.rest(s__29442__$1)));
} else {
var G__30265 = cljs.core.rest(s__29442__$1);
s__29442__$1 = G__30265;
continue;
}
} else {
return null;
}
break;
}
});})(s__29440__$1,n,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__29440__$1,n,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.reverse,loom.alg_generic.trace_paths(from_map,n))));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,loom$alg_generic$conj_paths_$_iter__29439(cljs.core.rest(s__29440__$1)));
} else {
var G__30268 = cljs.core.rest(s__29440__$1);
s__29440__$1 = G__30268;
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
return (function (p1__29465_SHARP_){
return cljs.core.contains_QMARK_(coll,p1__29465_SHARP_);
});})(find_succs,find_preds))
,q));
});})(find_succs,find_preds))
;
var map_set_pairs = ((function (find_succs,find_preds,overlaps){
return (function (map,pairs){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (find_succs,find_preds,overlaps){
return (function (map__$1,p__29472){
var vec__29474 = p__29472;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29474,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29474,(1),null);
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
var G__30280 = outgoing__$1;
var G__30281 = incoming;
var G__30282 = q1__$1;
var G__30283 = q2;
outgoing = G__30280;
incoming = G__30281;
q1 = G__30282;
q2 = G__30283;
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
var G__30289 = outgoing;
var G__30290 = incoming__$1;
var G__30291 = q1;
var G__30292 = q2__$1;
outgoing = G__30289;
incoming = G__30290;
q1 = G__30291;
q2 = G__30292;
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
var G__29529 = arguments.length;
switch (G__29529) {
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
var step = (function loom$alg_generic$step(p__29570){
var vec__29571 = p__29570;
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29571,(0),null);
var pq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29571,(1),null);
var temp__5720__auto__ = cljs.core.first(pq);
if(cljs.core.truth_(temp__5720__auto__)){
var vec__29576 = temp__5720__auto__;
var dist_su = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29576,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29576,(1),null);
var u = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29576,(2),null);
var fpq = vec__29576;
return cljs.core.cons((f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(u,state) : f.call(null,u,state)),(new cljs.core.LazySeq(null,((function (vec__29576,dist_su,_,u,fpq,temp__5720__auto__,vec__29571,state,pq){
return (function (){
return loom$alg_generic$step(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__29576,dist_su,_,u,fpq,temp__5720__auto__,vec__29571,state,pq){
return (function (p__29587,v){
var vec__29588 = p__29587;
var state__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29588,(0),null);
var pq__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29588,(1),null);
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
});})(vec__29576,dist_su,_,u,fpq,temp__5720__auto__,vec__29571,state,pq))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(pq,fpq)], null),(successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(u) : successors.call(null,u))));
});})(vec__29576,dist_su,_,u,fpq,temp__5720__auto__,vec__29571,state,pq))
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (span,p__29603){
var vec__29606 = p__29603;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29606,(0),null);
var vec__29610 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29606,(1),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29610,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29610,(1),null);
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
var temp__5718__auto__ = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__29622){
var vec__29625 = p__29622;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29625,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29625,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(end,node);
}),loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$3(successors,dist,start)));
if(cljs.core.truth_(temp__5718__auto__)){
var vec__29628 = temp__5718__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29628,(0),null);
var end_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29628,(1),null);
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
return cljs.core.long$((function (){var G__29640 = (bits / loom.alg_generic.bits_per_long);
return Math.ceil(G__29640);
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
var len__4730__auto___30322 = arguments.length;
var i__4731__auto___30323 = (0);
while(true){
if((i__4731__auto___30323 < len__4730__auto___30322)){
args__4736__auto__.push((arguments[i__4731__auto___30323]));

var G__30324 = (i__4731__auto___30323 + (1));
i__4731__auto___30323 = G__30324;
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
var seq__29665_30326 = cljs.core.seq(cljs.core.rest(bitmaps));
var chunk__29673_30327 = null;
var count__29674_30328 = (0);
var i__29675_30329 = (0);
while(true){
if((i__29675_30329 < count__29674_30328)){
var bitmap_30331 = chunk__29673_30327.cljs$core$IIndexed$_nth$arity$2(null,i__29675_30329);
var seq__29676_30332 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.list,bitmap_30331));
var chunk__29678_30333 = null;
var count__29679_30334 = (0);
var i__29680_30335 = (0);
while(true){
if((i__29680_30335 < count__29679_30334)){
var vec__29757_30337 = chunk__29678_30333.cljs$core$IIndexed$_nth$arity$2(null,i__29680_30335);
var idx_30338 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29757_30337,(0),null);
var value_30339 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29757_30337,(1),null);
var masked_value_30340 = (value_30339 | (new_bitmap[idx_30338]));
(new_bitmap[idx_30338] = masked_value_30340);


var G__30342 = seq__29676_30332;
var G__30343 = chunk__29678_30333;
var G__30344 = count__29679_30334;
var G__30345 = (i__29680_30335 + (1));
seq__29676_30332 = G__30342;
chunk__29678_30333 = G__30343;
count__29679_30334 = G__30344;
i__29680_30335 = G__30345;
continue;
} else {
var temp__5720__auto___30346 = cljs.core.seq(seq__29676_30332);
if(temp__5720__auto___30346){
var seq__29676_30347__$1 = temp__5720__auto___30346;
if(cljs.core.chunked_seq_QMARK_(seq__29676_30347__$1)){
var c__4550__auto___30349 = cljs.core.chunk_first(seq__29676_30347__$1);
var G__30351 = cljs.core.chunk_rest(seq__29676_30347__$1);
var G__30352 = c__4550__auto___30349;
var G__30353 = cljs.core.count(c__4550__auto___30349);
var G__30354 = (0);
seq__29676_30332 = G__30351;
chunk__29678_30333 = G__30352;
count__29679_30334 = G__30353;
i__29680_30335 = G__30354;
continue;
} else {
var vec__29761_30355 = cljs.core.first(seq__29676_30347__$1);
var idx_30356 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29761_30355,(0),null);
var value_30357 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29761_30355,(1),null);
var masked_value_30358 = (value_30357 | (new_bitmap[idx_30356]));
(new_bitmap[idx_30356] = masked_value_30358);


var G__30359 = cljs.core.next(seq__29676_30347__$1);
var G__30360 = null;
var G__30361 = (0);
var G__30362 = (0);
seq__29676_30332 = G__30359;
chunk__29678_30333 = G__30360;
count__29679_30334 = G__30361;
i__29680_30335 = G__30362;
continue;
}
} else {
}
}
break;
}

var G__30363 = seq__29665_30326;
var G__30364 = chunk__29673_30327;
var G__30365 = count__29674_30328;
var G__30366 = (i__29675_30329 + (1));
seq__29665_30326 = G__30363;
chunk__29673_30327 = G__30364;
count__29674_30328 = G__30365;
i__29675_30329 = G__30366;
continue;
} else {
var temp__5720__auto___30367 = cljs.core.seq(seq__29665_30326);
if(temp__5720__auto___30367){
var seq__29665_30368__$1 = temp__5720__auto___30367;
if(cljs.core.chunked_seq_QMARK_(seq__29665_30368__$1)){
var c__4550__auto___30369 = cljs.core.chunk_first(seq__29665_30368__$1);
var G__30370 = cljs.core.chunk_rest(seq__29665_30368__$1);
var G__30371 = c__4550__auto___30369;
var G__30372 = cljs.core.count(c__4550__auto___30369);
var G__30373 = (0);
seq__29665_30326 = G__30370;
chunk__29673_30327 = G__30371;
count__29674_30328 = G__30372;
i__29675_30329 = G__30373;
continue;
} else {
var bitmap_30375 = cljs.core.first(seq__29665_30368__$1);
var seq__29666_30376 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.list,bitmap_30375));
var chunk__29668_30377 = null;
var count__29669_30378 = (0);
var i__29670_30379 = (0);
while(true){
if((i__29670_30379 < count__29669_30378)){
var vec__29785_30380 = chunk__29668_30377.cljs$core$IIndexed$_nth$arity$2(null,i__29670_30379);
var idx_30381 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29785_30380,(0),null);
var value_30382 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29785_30380,(1),null);
var masked_value_30383 = (value_30382 | (new_bitmap[idx_30381]));
(new_bitmap[idx_30381] = masked_value_30383);


var G__30384 = seq__29666_30376;
var G__30385 = chunk__29668_30377;
var G__30386 = count__29669_30378;
var G__30387 = (i__29670_30379 + (1));
seq__29666_30376 = G__30384;
chunk__29668_30377 = G__30385;
count__29669_30378 = G__30386;
i__29670_30379 = G__30387;
continue;
} else {
var temp__5720__auto___30388__$1 = cljs.core.seq(seq__29666_30376);
if(temp__5720__auto___30388__$1){
var seq__29666_30389__$1 = temp__5720__auto___30388__$1;
if(cljs.core.chunked_seq_QMARK_(seq__29666_30389__$1)){
var c__4550__auto___30390 = cljs.core.chunk_first(seq__29666_30389__$1);
var G__30391 = cljs.core.chunk_rest(seq__29666_30389__$1);
var G__30392 = c__4550__auto___30390;
var G__30393 = cljs.core.count(c__4550__auto___30390);
var G__30394 = (0);
seq__29666_30376 = G__30391;
chunk__29668_30377 = G__30392;
count__29669_30378 = G__30393;
i__29670_30379 = G__30394;
continue;
} else {
var vec__29790_30397 = cljs.core.first(seq__29666_30389__$1);
var idx_30398 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29790_30397,(0),null);
var value_30399 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29790_30397,(1),null);
var masked_value_30402 = (value_30399 | (new_bitmap[idx_30398]));
(new_bitmap[idx_30398] = masked_value_30402);


var G__30403 = cljs.core.next(seq__29666_30389__$1);
var G__30404 = null;
var G__30405 = (0);
var G__30406 = (0);
seq__29666_30376 = G__30403;
chunk__29668_30377 = G__30404;
count__29669_30378 = G__30405;
i__29670_30379 = G__30406;
continue;
}
} else {
}
}
break;
}

var G__30407 = cljs.core.next(seq__29665_30368__$1);
var G__30408 = null;
var G__30409 = (0);
var G__30410 = (0);
seq__29665_30326 = G__30407;
chunk__29673_30327 = G__30408;
count__29674_30328 = G__30409;
i__29675_30329 = G__30410;
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
loom.alg_generic.bm_or.cljs$lang$applyTo = (function (seq29651){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29651));
});

/**
 * Get the indicies of set bits in 'bitmap.
 */
loom.alg_generic.bm_get_indicies = (function loom$alg_generic$bm_get_indicies(bitmap){
var iter__4523__auto__ = (function loom$alg_generic$bm_get_indicies_$_iter__29802(s__29803){
return (new cljs.core.LazySeq(null,(function (){
var s__29803__$1 = s__29803;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__29803__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var chunk = cljs.core.first(xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__29803__$1,chunk,xs__6277__auto__,temp__5720__auto__){
return (function loom$alg_generic$bm_get_indicies_$_iter__29802_$_iter__29804(s__29805){
return (new cljs.core.LazySeq(null,((function (s__29803__$1,chunk,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__29805__$1 = s__29805;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__29805__$1);
if(temp__5720__auto____$1){
var s__29805__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__29805__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__29805__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__29807 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__29806 = (0);
while(true){
if((i__29806 < size__4522__auto__)){
var offset = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__29806);
var idx = ((chunk * loom.alg_generic.bits_per_long) + offset);
if(cljs.core.truth_(loom.alg_generic.bm_get(bitmap,idx))){
cljs.core.chunk_append(b__29807,idx);

var G__30415 = (i__29806 + (1));
i__29806 = G__30415;
continue;
} else {
var G__30416 = (i__29806 + (1));
i__29806 = G__30416;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29807),loom$alg_generic$bm_get_indicies_$_iter__29802_$_iter__29804(cljs.core.chunk_rest(s__29805__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29807),null);
}
} else {
var offset = cljs.core.first(s__29805__$2);
var idx = ((chunk * loom.alg_generic.bits_per_long) + offset);
if(cljs.core.truth_(loom.alg_generic.bm_get(bitmap,idx))){
return cljs.core.cons(idx,loom$alg_generic$bm_get_indicies_$_iter__29802_$_iter__29804(cljs.core.rest(s__29805__$2)));
} else {
var G__30417 = cljs.core.rest(s__29805__$2);
s__29805__$1 = G__30417;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__29803__$1,chunk,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__29803__$1,chunk,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(loom.alg_generic.bits_per_long)));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,loom$alg_generic$bm_get_indicies_$_iter__29802(cljs.core.rest(s__29803__$1)));
} else {
var G__30420 = cljs.core.rest(s__29803__$1);
s__29803__$1 = G__30420;
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

loom.alg_generic.Ancestry.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k29835,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__29849 = k29835;
var G__29849__$1 = (((G__29849 instanceof cljs.core.Keyword))?G__29849.fqn:null);
switch (G__29849__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k29835,else__4388__auto__);

}
});

loom.alg_generic.Ancestry.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__29857){
var vec__29858 = p__29857;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29858,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29858,(1),null);
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
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#loom.alg-generic.Ancestry{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"node->idx","node->idx",152705227),self__.node__GT_idx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),self__.idx__GT_node],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),self__.bitmaps],null))], null),self__.__extmap));
});

loom.alg_generic.Ancestry.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29834){
var self__ = this;
var G__29834__$1 = this;
return (new cljs.core.RecordIter((0),G__29834__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node->idx","node->idx",152705227),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4243__auto____$1 = (function (){var fexpr__29879 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1116202445 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__29879(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

loom.alg_generic.Ancestry.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this29836,other29837){
var self__ = this;
var this29836__$1 = this;
return (((!((other29837 == null)))) && ((this29836__$1.constructor === other29837.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29836__$1.node__GT_idx,other29837.node__GT_idx)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29836__$1.idx__GT_node,other29837.idx__GT_node)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29836__$1.bitmaps,other29837.bitmaps)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29836__$1.__extmap,other29837.__extmap)));
});

loom.alg_generic.Ancestry.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),null,new cljs.core.Keyword(null,"node->idx","node->idx",152705227),null,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

loom.alg_generic.Ancestry.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__29834){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__29893 = cljs.core.keyword_identical_QMARK_;
var expr__29894 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__29898 = new cljs.core.Keyword(null,"node->idx","node->idx",152705227);
var G__29899 = expr__29894;
return (pred__29893.cljs$core$IFn$_invoke$arity$2 ? pred__29893.cljs$core$IFn$_invoke$arity$2(G__29898,G__29899) : pred__29893.call(null,G__29898,G__29899));
})())){
return (new loom.alg_generic.Ancestry(G__29834,self__.idx__GT_node,self__.bitmaps,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__29901 = new cljs.core.Keyword(null,"idx->node","idx->node",1811907175);
var G__29902 = expr__29894;
return (pred__29893.cljs$core$IFn$_invoke$arity$2 ? pred__29893.cljs$core$IFn$_invoke$arity$2(G__29901,G__29902) : pred__29893.call(null,G__29901,G__29902));
})())){
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,G__29834,self__.bitmaps,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__29905 = new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842);
var G__29906 = expr__29894;
return (pred__29893.cljs$core$IFn$_invoke$arity$2 ? pred__29893.cljs$core$IFn$_invoke$arity$2(G__29905,G__29906) : pred__29893.call(null,G__29905,G__29906));
})())){
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,G__29834,self__.__meta,self__.__extmap,null));
} else {
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__29834),null));
}
}
}
});

loom.alg_generic.Ancestry.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"node->idx","node->idx",152705227),self__.node__GT_idx,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),self__.idx__GT_node,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),self__.bitmaps,null))], null),self__.__extmap));
});

loom.alg_generic.Ancestry.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__29834){
var self__ = this;
var this__4384__auto____$1 = this;
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,G__29834,self__.__extmap,self__.__hash));
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"node->idx","node->idx",1793236754,null),new cljs.core.Symbol(null,"idx->node","idx->node",-842528594,null),new cljs.core.Symbol(null,"bitmaps","bitmaps",-1506736927,null)], null);
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
loom.alg_generic.map__GT_Ancestry = (function loom$alg_generic$map__GT_Ancestry(G__29842){
var extmap__4424__auto__ = (function (){var G__29923 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__29842,new cljs.core.Keyword(null,"node->idx","node->idx",152705227),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842)], 0));
if(cljs.core.record_QMARK_(G__29842)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__29923);
} else {
return G__29923;
}
})();
return (new loom.alg_generic.Ancestry(new cljs.core.Keyword(null,"node->idx","node->idx",152705227).cljs$core$IFn$_invoke$arity$1(G__29842),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175).cljs$core$IFn$_invoke$arity$1(G__29842),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842).cljs$core$IFn$_invoke$arity$1(G__29842),null,cljs.core.not_empty(extmap__4424__auto__),null));
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
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"node->idx","node->idx",152705227).cljs$core$IFn$_invoke$arity$1(ancestry),node);
});
/**
 * Adds a 'node and its 'parents associations to the 'ancestry cache.
 */
loom.alg_generic.ancestry_add = (function loom$alg_generic$ancestry_add(var_args){
var args__4736__auto__ = [];
var len__4730__auto___30528 = arguments.length;
var i__4731__auto___30529 = (0);
while(true){
if((i__4731__auto___30529 < len__4730__auto___30528)){
args__4736__auto__.push((arguments[i__4731__auto___30529]));

var G__30530 = (i__4731__auto___30529 + (1));
i__4731__auto___30529 = G__30530;
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
var map__29941 = ancestry;
var map__29941__$1 = (((((!((map__29941 == null))))?(((((map__29941.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29941.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29941):map__29941);
var node__GT_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29941__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var idx__GT_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29941__$1,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175));
var bitmaps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29941__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
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
loom.alg_generic.ancestry_add.cljs$lang$applyTo = (function (seq29933){
var G__29934 = cljs.core.first(seq29933);
var seq29933__$1 = cljs.core.next(seq29933);
var G__29935 = cljs.core.first(seq29933__$1);
var seq29933__$2 = cljs.core.next(seq29933__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29934,G__29935,seq29933__$2);
});

/**
 * Finds if the 'parenter node is an ancestor of 'childer node for the given
 *   'ancestry cache.
 */
loom.alg_generic.ancestor_QMARK_ = (function loom$alg_generic$ancestor_QMARK_(ancestry,childer,parenter){
var map__29948 = ancestry;
var map__29948__$1 = (((((!((map__29948 == null))))?(((((map__29948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29948.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29948):map__29948);
var node__GT_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29948__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var bitmaps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29948__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
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
var map__29953 = ancestry;
var map__29953__$1 = (((((!((map__29953 == null))))?(((((map__29953.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29953.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29953):map__29953);
var node__GT_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29953__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var idx__GT_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29953__$1,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175));
var bitmaps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29953__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
var cidx = (node__GT_idx.cljs$core$IFn$_invoke$arity$1 ? node__GT_idx.cljs$core$IFn$_invoke$arity$1(child) : node__GT_idx.call(null,child));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(idx__GT_node,loom.alg_generic.bm_get_indicies(cljs.core.get.cljs$core$IFn$_invoke$arity$2(bitmaps,cidx)));
});
/**
 * Returns all of the nodes in an 'ancestry.
 */
loom.alg_generic.ancestry_nodes = (function loom$alg_generic$ancestry_nodes(ancestry){
return cljs.core.keys(new cljs.core.Keyword(null,"node->idx","node->idx",152705227).cljs$core$IFn$_invoke$arity$1(ancestry));
});

//# sourceMappingURL=loom.alg_generic.js.map
