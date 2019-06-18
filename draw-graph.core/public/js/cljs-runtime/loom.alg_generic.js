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
return (function (p1__34185_SHARP_){
var G__34186 = preds;
var G__34187 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,p1__34185_SHARP_);
return (loom.alg_generic.paths.cljs$core$IFn$_invoke$arity$2 ? loom.alg_generic.paths.cljs$core$IFn$_invoke$arity$2(G__34186,G__34187) : loom.alg_generic.paths.call(null,G__34186,G__34187));
});})(this_node))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (this_node){
return (function (p1__34184_SHARP_){
return cljs.core.not_any_QMARK_(((function (this_node){
return (function (edge){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(edge,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this_node,p1__34184_SHARP_], null));
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
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__34188_SHARP_){
var G__34189 = cljs.core.peek(p1__34188_SHARP_);
return (preds.cljs$core$IFn$_invoke$arity$1 ? preds.cljs$core$IFn$_invoke$arity$1(G__34189) : preds.call(null,G__34189));
}),loom.alg_generic.paths(preds,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null)));
});
/**
 * Converts a map of the form {node predecessor} to a spanning tree of the
 *   form {node [successors]}
 */
loom.alg_generic.preds__GT_span = (function loom$alg_generic$preds__GT_span(preds){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (span,p__34190){
var vec__34191 = p__34190;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34191,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34191,(1),null);
if(cljs.core.truth_(p)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(span,p,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var G__34196 = p;
var G__34197 = cljs.core.PersistentVector.EMPTY;
return (span.cljs$core$IFn$_invoke$arity$2 ? span.cljs$core$IFn$_invoke$arity$2(G__34196,G__34197) : span.call(null,G__34196,G__34197));
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
var len__4730__auto___35174 = arguments.length;
var i__4731__auto___35176 = (0);
while(true){
if((i__4731__auto___35176 < len__4730__auto___35174)){
args__4736__auto__.push((arguments[i__4731__auto___35176]));

var G__35177 = (i__4731__auto___35176 + (1));
i__4731__auto___35176 = G__35177;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__34264){
var map__34265 = p__34264;
var map__34265__$1 = (((((!((map__34265 == null))))?(((((map__34265.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34265.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34265):map__34265);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34265__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var step = ((function (map__34265,map__34265__$1,seen){
return (function loom$alg_generic$step(stack,seen__$1){
var temp__5720__auto__ = cljs.core.peek(stack);
if(cljs.core.truth_(temp__5720__auto__)){
var node = temp__5720__auto__;
if(cljs.core.contains_QMARK_(seen__$1,node)){
return loom$alg_generic$step(cljs.core.pop(stack),seen__$1);
} else {
var seen__$2 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,node);
var nbrs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(seen__$2,(successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(node) : successors.call(null,node)));
return (new cljs.core.LazySeq(null,((function (seen__$2,nbrs,node,temp__5720__auto__,map__34265,map__34265__$1,seen){
return (function (){
return cljs.core.cons(node,loom$alg_generic$step(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(stack),nbrs),seen__$2));
});})(seen__$2,nbrs,node,temp__5720__auto__,map__34265,map__34265__$1,seen))
,null,null));
}
} else {
return null;
}
});})(map__34265,map__34265__$1,seen))
;
return step(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null),seen);
});

loom.alg_generic.pre_traverse.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.pre_traverse.cljs$lang$applyTo = (function (seq34210){
var G__34215 = cljs.core.first(seq34210);
var seq34210__$1 = cljs.core.next(seq34210);
var G__34216 = cljs.core.first(seq34210__$1);
var seq34210__$2 = cljs.core.next(seq34210__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34215,G__34216,seq34210__$2);
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
var len__4730__auto___35198 = arguments.length;
var i__4731__auto___35199 = (0);
while(true){
if((i__4731__auto___35199 < len__4730__auto___35198)){
args__4736__auto__.push((arguments[i__4731__auto___35199]));

var G__35201 = (i__4731__auto___35199 + (1));
i__4731__auto___35199 = G__35201;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__34314){
var map__34315 = p__34314;
var map__34315__$1 = (((((!((map__34315 == null))))?(((((map__34315.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34315.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34315):map__34315);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34315__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var step = ((function (map__34315,map__34315__$1,seen){
return (function loom$alg_generic$step(successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1){
while(true){
var temp__5718__auto__ = cljs.core.first(nbrs);
if(cljs.core.truth_(temp__5718__auto__)){
var nbr = temp__5718__auto__;
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null),(new cljs.core.LazySeq(null,((function (successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1,nbr,temp__5718__auto__,map__34315,map__34315__$1,seen){
return (function (){
var seen__$2 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,start__$1);
if(cljs.core.truth_((seen__$2.cljs$core$IFn$_invoke$arity$1 ? seen__$2.cljs$core$IFn$_invoke$arity$1(nbr) : seen__$2.call(null,nbr)))){
return loom$alg_generic$step(successors__$1,start__$1,cljs.core.next(nbrs),stack,nbrstack,seen__$2);
} else {
return loom$alg_generic$step(successors__$1,nbr,(successors__$1.cljs$core$IFn$_invoke$arity$1 ? successors__$1.cljs$core$IFn$_invoke$arity$1(nbr) : successors__$1.call(null,nbr)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,start__$1),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nbrstack,cljs.core.next(nbrs)),seen__$2);
}
});})(successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1,nbr,temp__5718__auto__,map__34315,map__34315__$1,seen))
,null,null)));
} else {
var temp__5720__auto__ = cljs.core.peek(stack);
if(cljs.core.truth_(temp__5720__auto__)){
var parent = temp__5720__auto__;
var G__35207 = successors__$1;
var G__35208 = parent;
var G__35209 = cljs.core.peek(nbrstack);
var G__35210 = cljs.core.pop(stack);
var G__35211 = cljs.core.pop(nbrstack);
var G__35212 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,start__$1);
successors__$1 = G__35207;
start__$1 = G__35208;
nbrs = G__35209;
stack = G__35210;
nbrstack = G__35211;
seen__$1 = G__35212;
continue;
} else {
return null;
}
}
break;
}
});})(map__34315,map__34315__$1,seen))
;
if(cljs.core.truth_((seen.cljs$core$IFn$_invoke$arity$1 ? seen.cljs$core$IFn$_invoke$arity$1(start) : seen.call(null,start)))){
return null;
} else {
return step(successors,start,(successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(start) : successors.call(null,start)),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,start));
}
});

loom.alg_generic.pre_edge_traverse.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.pre_edge_traverse.cljs$lang$applyTo = (function (seq34307){
var G__34308 = cljs.core.first(seq34307);
var seq34307__$1 = cljs.core.next(seq34307);
var G__34309 = cljs.core.first(seq34307__$1);
var seq34307__$2 = cljs.core.next(seq34307__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34308,G__34309,seq34307__$2);
});

/**
 * Returns a depth-first spanning tree of the form {node [successors]}
 */
loom.alg_generic.pre_span = (function loom$alg_generic$pre_span(var_args){
var args__4736__auto__ = [];
var len__4730__auto___35220 = arguments.length;
var i__4731__auto___35221 = (0);
while(true){
if((i__4731__auto___35221 < len__4730__auto___35220)){
args__4736__auto__.push((arguments[i__4731__auto___35221]));

var G__35223 = (i__4731__auto___35221 + (1));
i__4731__auto___35221 = G__35223;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__34355){
var map__34356 = p__34355;
var map__34356__$1 = (((((!((map__34356 == null))))?(((((map__34356.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34356.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34356):map__34356);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34356__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34356__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__35229 = seen__$2;
var G__35230 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(preds,u,v);
var G__35231 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,u);
seen__$1 = G__35229;
preds = G__35230;
stack = G__35231;
continue;
} else {
var G__35232 = seen__$2;
var G__35233 = preds;
var G__35234 = cljs.core.pop(stack);
seen__$1 = G__35232;
preds = G__35233;
stack = G__35234;
continue;
}
}
break;
}
});

loom.alg_generic.pre_span.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.pre_span.cljs$lang$applyTo = (function (seq34350){
var G__34351 = cljs.core.first(seq34350);
var seq34350__$1 = cljs.core.next(seq34350);
var G__34352 = cljs.core.first(seq34350__$1);
var seq34350__$2 = cljs.core.next(seq34350__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34351,G__34352,seq34350__$2);
});

/**
 * Traverses a graph depth-first postorder from start, successors
 *   being a function that returns adjacent nodes. Returns a vector
 */
loom.alg_generic.post_traverse = (function loom$alg_generic$post_traverse(var_args){
var args__4736__auto__ = [];
var len__4730__auto___35237 = arguments.length;
var i__4731__auto___35238 = (0);
while(true){
if((i__4731__auto___35238 < len__4730__auto___35237)){
args__4736__auto__.push((arguments[i__4731__auto___35238]));

var G__35239 = (i__4731__auto___35238 + (1));
i__4731__auto___35238 = G__35239;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__34380){
var map__34381 = p__34380;
var map__34381__$1 = (((((!((map__34381 == null))))?(((((map__34381.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34381.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34381):map__34381);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34381__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34381__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__35242 = seen__$2;
var G__35243 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,v);
var G__35244 = cljs.core.pop(stack);
seen__$1 = G__35242;
result = G__35243;
stack = G__35244;
continue;
} else {
var G__35247 = seen__$2;
var G__35248 = result;
var G__35249 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,cljs.core.first(nbrs));
seen__$1 = G__35247;
result = G__35248;
stack = G__35249;
continue;
}
}
break;
}
});

loom.alg_generic.post_traverse.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.post_traverse.cljs$lang$applyTo = (function (seq34369){
var G__34370 = cljs.core.first(seq34369);
var seq34369__$1 = cljs.core.next(seq34369);
var G__34371 = cljs.core.first(seq34369__$1);
var seq34369__$2 = cljs.core.next(seq34369__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34370,G__34371,seq34369__$2);
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
var len__4730__auto___35251 = arguments.length;
var i__4731__auto___35252 = (0);
while(true){
if((i__4731__auto___35252 < len__4730__auto___35251)){
args__4736__auto__.push((arguments[i__4731__auto___35252]));

var G__35254 = (i__4731__auto___35252 + (1));
i__4731__auto___35252 = G__35254;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__34400){
var map__34401 = p__34400;
var map__34401__$1 = (((((!((map__34401 == null))))?(((((map__34401.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34401.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34401):map__34401);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34401__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34401__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__35258 = start__$1;
var G__35259 = cljs.core.next(nbrs);
var G__35260 = stack;
var G__35261 = nbrstack;
var G__35262 = seen__$2;
var G__35263 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(edges,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null));
start__$1 = G__35258;
nbrs = G__35259;
stack = G__35260;
nbrstack = G__35261;
seen__$1 = G__35262;
edges = G__35263;
continue;
} else {
var G__35264 = nbr;
var G__35265 = (successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(nbr) : successors.call(null,nbr));
var G__35266 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,start__$1);
var G__35267 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nbrstack,cljs.core.next(nbrs));
var G__35268 = seen__$2;
var G__35269 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(edges,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null));
start__$1 = G__35264;
nbrs = G__35265;
stack = G__35266;
nbrstack = G__35267;
seen__$1 = G__35268;
edges = G__35269;
continue;
}
} else {
var temp__5718__auto____$1 = cljs.core.peek(stack);
if(cljs.core.truth_(temp__5718__auto____$1)){
var parent = temp__5718__auto____$1;
var G__35273 = parent;
var G__35274 = cljs.core.peek(nbrstack);
var G__35275 = cljs.core.pop(stack);
var G__35276 = cljs.core.pop(nbrstack);
var G__35277 = seen__$2;
var G__35278 = edges;
start__$1 = G__35273;
nbrs = G__35274;
stack = G__35275;
nbrstack = G__35276;
seen__$1 = G__35277;
edges = G__35278;
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
loom.alg_generic.post_edge_traverse.cljs$lang$applyTo = (function (seq34395){
var G__34396 = cljs.core.first(seq34395);
var seq34395__$1 = cljs.core.next(seq34395);
var G__34397 = cljs.core.first(seq34395__$1);
var seq34395__$2 = cljs.core.next(seq34395__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34396,G__34397,seq34395__$2);
});

/**
 * Topological sort of a component of a (presumably) directed graph.
 *   Returns nil if the graph contains any cycles. See loom.alg/topsort
 *   for a complete topological sort
 */
loom.alg_generic.topsort_component = (function loom$alg_generic$topsort_component(var_args){
var G__34438 = arguments.length;
switch (G__34438) {
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
var G__35294 = seen__$2;
var G__35295 = explored__$1;
var G__35296 = result;
var G__35297 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,cljs.core.first(us));
seen__$1 = G__35294;
explored__$1 = G__35295;
result = G__35296;
stack = G__35297;
continue;
}
} else {
var G__35302 = seen__$2;
var G__35303 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(explored__$1,v);
var G__35304 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,v);
var G__35305 = cljs.core.pop(stack);
seen__$1 = G__35302;
explored__$1 = G__35303;
result = G__35304;
stack = G__35305;
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
var len__4730__auto___35308 = arguments.length;
var i__4731__auto___35309 = (0);
while(true){
if((i__4731__auto___35309 < len__4730__auto___35308)){
args__4736__auto__.push((arguments[i__4731__auto___35309]));

var G__35312 = (i__4731__auto___35309 + (1));
i__4731__auto___35309 = G__35312;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__34477){
var map__34479 = p__34477;
var map__34479__$1 = (((((!((map__34479 == null))))?(((((map__34479.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34479.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34479):map__34479);
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34479__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var when = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34479__$1,new cljs.core.Keyword(null,"when","when",-576417306));
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34479__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
var f__$1 = (function (){var or__4131__auto__ = f;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return ((function (or__4131__auto__,map__34479,map__34479__$1,f,when,seen){
return (function (n,p,d){
return n;
});
;})(or__4131__auto__,map__34479,map__34479__$1,f,when,seen))
}
})();
var nbr_pred = (function (){var or__4131__auto__ = when;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.constantly(true);
}
})();
var step = ((function (f__$1,nbr_pred,map__34479,map__34479__$1,f,when,seen){
return (function loom$alg_generic$step(queue,preds){
var temp__5720__auto__ = cljs.core.peek(queue);
if(cljs.core.truth_(temp__5720__auto__)){
var vec__34523 = temp__5720__auto__;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34523,(0),null);
var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34523,(1),null);
return cljs.core.cons((f__$1.cljs$core$IFn$_invoke$arity$3 ? f__$1.cljs$core$IFn$_invoke$arity$3(node,preds,depth) : f__$1.call(null,node,preds,depth)),(new cljs.core.LazySeq(null,((function (vec__34523,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34479,map__34479__$1,f,when,seen){
return (function (){
var nbrs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__34523,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34479,map__34479__$1,f,when,seen){
return (function (p1__34462_SHARP_){
var G__34532 = p1__34462_SHARP_;
var G__34533 = node;
var G__34534 = (depth + (1));
return (nbr_pred.cljs$core$IFn$_invoke$arity$3 ? nbr_pred.cljs$core$IFn$_invoke$arity$3(G__34532,G__34533,G__34534) : nbr_pred.call(null,G__34532,G__34533,G__34534));
});})(vec__34523,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34479,map__34479__$1,f,when,seen))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__34523,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34479,map__34479__$1,f,when,seen){
return (function (p1__34461_SHARP_){
return cljs.core.contains_QMARK_(preds,p1__34461_SHARP_);
});})(vec__34523,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34479,map__34479__$1,f,when,seen))
,(successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(node) : successors.call(null,node))));
return loom$alg_generic$step(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(queue),(function (){var iter__4523__auto__ = ((function (nbrs,vec__34523,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34479,map__34479__$1,f,when,seen){
return (function loom$alg_generic$step_$_iter__34543(s__34544){
return (new cljs.core.LazySeq(null,((function (nbrs,vec__34523,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34479,map__34479__$1,f,when,seen){
return (function (){
var s__34544__$1 = s__34544;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__34544__$1);
if(temp__5720__auto____$1){
var s__34544__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__34544__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__34544__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__34546 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__34545 = (0);
while(true){
if((i__34545 < size__4522__auto__)){
var nbr = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__34545);
cljs.core.chunk_append(b__34546,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,(depth + (1))], null));

var G__35340 = (i__34545 + (1));
i__34545 = G__35340;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34546),loom$alg_generic$step_$_iter__34543(cljs.core.chunk_rest(s__34544__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34546),null);
}
} else {
var nbr = cljs.core.first(s__34544__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,(depth + (1))], null),loom$alg_generic$step_$_iter__34543(cljs.core.rest(s__34544__$2)));
}
} else {
return null;
}
break;
}
});})(nbrs,vec__34523,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34479,map__34479__$1,f,when,seen))
,null,null));
});})(nbrs,vec__34523,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34479,map__34479__$1,f,when,seen))
;
return iter__4523__auto__(nbrs);
})()),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (nbrs,vec__34523,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34479,map__34479__$1,f,when,seen){
return (function (p1__34464_SHARP_,p2__34465_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__34464_SHARP_,p2__34465_SHARP_,node);
});})(nbrs,vec__34523,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34479,map__34479__$1,f,when,seen))
,preds,nbrs));
});})(vec__34523,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34479,map__34479__$1,f,when,seen))
,null,null)));
} else {
return null;
}
});})(f__$1,nbr_pred,map__34479,map__34479__$1,f,when,seen))
;
return step(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentQueue.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,(0)], null)),((cljs.core.map_QMARK_(seen))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(seen,start,null):cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.createAsIfByAssoc([start,null]),(function (){var iter__4523__auto__ = ((function (f__$1,nbr_pred,map__34479,map__34479__$1,f,when,seen){
return (function loom$alg_generic$iter__34560(s__34561){
return (new cljs.core.LazySeq(null,((function (f__$1,nbr_pred,map__34479,map__34479__$1,f,when,seen){
return (function (){
var s__34561__$1 = s__34561;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__34561__$1);
if(temp__5720__auto__){
var s__34561__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__34561__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__34561__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__34563 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__34562 = (0);
while(true){
if((i__34562 < size__4522__auto__)){
var s = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__34562);
cljs.core.chunk_append(b__34563,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,null], null));

var G__35343 = (i__34562 + (1));
i__34562 = G__35343;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34563),loom$alg_generic$iter__34560(cljs.core.chunk_rest(s__34561__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34563),null);
}
} else {
var s = cljs.core.first(s__34561__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,null], null),loom$alg_generic$iter__34560(cljs.core.rest(s__34561__$2)));
}
} else {
return null;
}
break;
}
});})(f__$1,nbr_pred,map__34479,map__34479__$1,f,when,seen))
,null,null));
});})(f__$1,nbr_pred,map__34479,map__34479__$1,f,when,seen))
;
return iter__4523__auto__(seen);
})())));
});

loom.alg_generic.bf_traverse.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.bf_traverse.cljs$lang$applyTo = (function (seq34470){
var G__34471 = cljs.core.first(seq34470);
var seq34470__$1 = cljs.core.next(seq34470);
var G__34472 = cljs.core.first(seq34470__$1);
var seq34470__$2 = cljs.core.next(seq34470__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34471,G__34472,seq34470__$2);
});

/**
 * Return a breadth-first spanning tree of the form {node
 *   [successors]}
 */
loom.alg_generic.bf_span = (function loom$alg_generic$bf_span(var_args){
var args__4736__auto__ = [];
var len__4730__auto___35350 = arguments.length;
var i__4731__auto___35351 = (0);
while(true){
if((i__4731__auto___35351 < len__4730__auto___35350)){
args__4736__auto__.push((arguments[i__4731__auto___35351]));

var G__35352 = (i__4731__auto___35351 + (1));
i__4731__auto___35351 = G__35352;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__34576){
var map__34578 = p__34576;
var map__34578__$1 = (((((!((map__34578 == null))))?(((((map__34578.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34578.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34578):map__34578);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34578__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
return loom.alg_generic.preds__GT_span(cljs.core.last(loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic(successors,start,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"f","f",-1597136552),((function (map__34578,map__34578__$1,seen){
return (function (_,pm,___$1){
return pm;
});})(map__34578,map__34578__$1,seen))
,new cljs.core.Keyword(null,"seen","seen",-518999789),seen], 0))));
});

loom.alg_generic.bf_span.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.bf_span.cljs$lang$applyTo = (function (seq34571){
var G__34572 = cljs.core.first(seq34571);
var seq34571__$1 = cljs.core.next(seq34571);
var G__34573 = cljs.core.first(seq34571__$1);
var seq34571__$2 = cljs.core.next(seq34571__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34572,G__34573,seq34571__$2);
});

/**
 * Returns a path from start to end with the fewest hops (i.e. irrespective
 *   of edge weights), successors being a function that returns adjacent nodes
 */
loom.alg_generic.bf_path = (function loom$alg_generic$bf_path(var_args){
var args__4736__auto__ = [];
var len__4730__auto___35361 = arguments.length;
var i__4731__auto___35362 = (0);
while(true){
if((i__4731__auto___35362 < len__4730__auto___35361)){
args__4736__auto__.push((arguments[i__4731__auto___35362]));

var G__35363 = (i__4731__auto___35362 + (1));
i__4731__auto___35362 = G__35363;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,end,p__34588){
var map__34590 = p__34588;
var map__34590__$1 = (((((!((map__34590 == null))))?(((((map__34590.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34590.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34590):map__34590);
var opts = map__34590__$1;
var opts__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.vector], null)], 0));
var temp__5720__auto__ = cljs.core.some(((function (opts__$1,map__34590,map__34590__$1,opts){
return (function (p__34594){
var vec__34595 = p__34594;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34595,(0),null);
var pm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34595,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34595,(2),null);
if(cljs.core.truth_((pm.cljs$core$IFn$_invoke$arity$1 ? pm.cljs$core$IFn$_invoke$arity$1(end) : pm.call(null,end)))){
return pm;
} else {
return null;
}
});})(opts__$1,map__34590,map__34590__$1,opts))
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
loom.alg_generic.bf_path.cljs$lang$applyTo = (function (seq34583){
var G__34584 = cljs.core.first(seq34583);
var seq34583__$1 = cljs.core.next(seq34583);
var G__34585 = cljs.core.first(seq34583__$1);
var seq34583__$2 = cljs.core.next(seq34583__$1);
var G__34586 = cljs.core.first(seq34583__$2);
var seq34583__$3 = cljs.core.next(seq34583__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34584,G__34585,G__34586,seq34583__$3);
});

/**
 * Returns a lazy-seq of the keys that exist in both m1 and m2
 */
loom.alg_generic.shared_keys = (function loom$alg_generic$shared_keys(m1,m2){
while(true){
if((cljs.core.count(m2) < cljs.core.count(m1))){
var G__35374 = m2;
var G__35375 = m1;
m1 = G__35374;
m2 = G__35375;
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
var iter__4523__auto__ = (function loom$alg_generic$reverse_edges_$_iter__34622(s__34623){
return (new cljs.core.LazySeq(null,(function (){
var s__34623__$1 = s__34623;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__34623__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var node = cljs.core.first(xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__34623__$1,node,xs__6277__auto__,temp__5720__auto__){
return (function loom$alg_generic$reverse_edges_$_iter__34622_$_iter__34624(s__34625){
return (new cljs.core.LazySeq(null,((function (s__34623__$1,node,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__34625__$1 = s__34625;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__34625__$1);
if(temp__5720__auto____$1){
var s__34625__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__34625__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__34625__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__34627 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__34626 = (0);
while(true){
if((i__34626 < size__4522__auto__)){
var nbr = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__34626);
if((!(cljs.core.contains_QMARK_(coll,nbr)))){
cljs.core.chunk_append(b__34627,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,node], null));

var G__35381 = (i__34626 + (1));
i__34626 = G__35381;
continue;
} else {
var G__35382 = (i__34626 + (1));
i__34626 = G__35382;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34627),loom$alg_generic$reverse_edges_$_iter__34622_$_iter__34624(cljs.core.chunk_rest(s__34625__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34627),null);
}
} else {
var nbr = cljs.core.first(s__34625__$2);
if((!(cljs.core.contains_QMARK_(coll,nbr)))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,node], null),loom$alg_generic$reverse_edges_$_iter__34622_$_iter__34624(cljs.core.rest(s__34625__$2)));
} else {
var G__35386 = cljs.core.rest(s__34625__$2);
s__34625__$1 = G__35386;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__34623__$1,node,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__34623__$1,node,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__((successor_fn.cljs$core$IFn$_invoke$arity$1 ? successor_fn.cljs$core$IFn$_invoke$arity$1(node) : successor_fn.call(null,node))));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,loom$alg_generic$reverse_edges_$_iter__34622(cljs.core.rest(s__34623__$1)));
} else {
var G__35389 = cljs.core.rest(s__34623__$1);
s__34623__$1 = G__35389;
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
var iter__4523__auto__ = (function loom$alg_generic$conj_paths_$_iter__34659(s__34660){
return (new cljs.core.LazySeq(null,(function (){
var s__34660__$1 = s__34660;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__34660__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var n = cljs.core.first(xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__34660__$1,n,xs__6277__auto__,temp__5720__auto__){
return (function loom$alg_generic$conj_paths_$_iter__34659_$_iter__34661(s__34662){
return (new cljs.core.LazySeq(null,((function (s__34660__$1,n,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__34662__$1 = s__34662;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__34662__$1);
if(temp__5720__auto____$1){
var xs__6277__auto____$1 = temp__5720__auto____$1;
var from = cljs.core.first(xs__6277__auto____$1);
var iterys__4519__auto__ = ((function (s__34662__$1,s__34660__$1,from,xs__6277__auto____$1,temp__5720__auto____$1,n,xs__6277__auto__,temp__5720__auto__){
return (function loom$alg_generic$conj_paths_$_iter__34659_$_iter__34661_$_iter__34663(s__34664){
return (new cljs.core.LazySeq(null,((function (s__34662__$1,s__34660__$1,from,xs__6277__auto____$1,temp__5720__auto____$1,n,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__34664__$1 = s__34664;
while(true){
var temp__5720__auto____$2 = cljs.core.seq(s__34664__$1);
if(temp__5720__auto____$2){
var s__34664__$2 = temp__5720__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__34664__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__34664__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__34666 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__34665 = (0);
while(true){
if((i__34665 < size__4522__auto__)){
var to = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__34665);
cljs.core.chunk_append(b__34666,cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(from,to)));

var G__35395 = (i__34665 + (1));
i__34665 = G__35395;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34666),loom$alg_generic$conj_paths_$_iter__34659_$_iter__34661_$_iter__34663(cljs.core.chunk_rest(s__34664__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34666),null);
}
} else {
var to = cljs.core.first(s__34664__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(from,to)),loom$alg_generic$conj_paths_$_iter__34659_$_iter__34661_$_iter__34663(cljs.core.rest(s__34664__$2)));
}
} else {
return null;
}
break;
}
});})(s__34662__$1,s__34660__$1,from,xs__6277__auto____$1,temp__5720__auto____$1,n,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__34662__$1,s__34660__$1,from,xs__6277__auto____$1,temp__5720__auto____$1,n,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,loom.alg_generic.trace_paths(to_map,n))));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,loom$alg_generic$conj_paths_$_iter__34659_$_iter__34661(cljs.core.rest(s__34662__$1)));
} else {
var G__35398 = cljs.core.rest(s__34662__$1);
s__34662__$1 = G__35398;
continue;
}
} else {
return null;
}
break;
}
});})(s__34660__$1,n,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__34660__$1,n,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.reverse,loom.alg_generic.trace_paths(from_map,n))));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,loom$alg_generic$conj_paths_$_iter__34659(cljs.core.rest(s__34660__$1)));
} else {
var G__35400 = cljs.core.rest(s__34660__$1);
s__34660__$1 = G__35400;
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
return (function (p1__34700_SHARP_){
return cljs.core.contains_QMARK_(coll,p1__34700_SHARP_);
});})(find_succs,find_preds))
,q));
});})(find_succs,find_preds))
;
var map_set_pairs = ((function (find_succs,find_preds,overlaps){
return (function (map,pairs){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (find_succs,find_preds,overlaps){
return (function (map__$1,p__34715){
var vec__34717 = p__34715;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34717,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34717,(1),null);
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
var G__35402 = outgoing__$1;
var G__35403 = incoming;
var G__35404 = q1__$1;
var G__35405 = q2;
outgoing = G__35402;
incoming = G__35403;
q1 = G__35404;
q2 = G__35405;
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
var G__35409 = outgoing;
var G__35410 = incoming__$1;
var G__35411 = q1;
var G__35412 = q2__$1;
outgoing = G__35409;
incoming = G__35410;
q1 = G__35411;
q2 = G__35412;
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
var G__34750 = arguments.length;
switch (G__34750) {
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
var step = (function loom$alg_generic$step(p__34785){
var vec__34786 = p__34785;
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34786,(0),null);
var pq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34786,(1),null);
var temp__5720__auto__ = cljs.core.first(pq);
if(cljs.core.truth_(temp__5720__auto__)){
var vec__34790 = temp__5720__auto__;
var dist_su = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34790,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34790,(1),null);
var u = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34790,(2),null);
var fpq = vec__34790;
return cljs.core.cons((f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(u,state) : f.call(null,u,state)),(new cljs.core.LazySeq(null,((function (vec__34790,dist_su,_,u,fpq,temp__5720__auto__,vec__34786,state,pq){
return (function (){
return loom$alg_generic$step(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__34790,dist_su,_,u,fpq,temp__5720__auto__,vec__34786,state,pq){
return (function (p__34793,v){
var vec__34795 = p__34793;
var state__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34795,(0),null);
var pq__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34795,(1),null);
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
});})(vec__34790,dist_su,_,u,fpq,temp__5720__auto__,vec__34786,state,pq))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(pq,fpq)], null),(successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(u) : successors.call(null,u))));
});})(vec__34790,dist_su,_,u,fpq,temp__5720__auto__,vec__34786,state,pq))
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (span,p__34801){
var vec__34802 = p__34801;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34802,(0),null);
var vec__34805 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34802,(1),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34805,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34805,(1),null);
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
var temp__5718__auto__ = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__34811){
var vec__34812 = p__34811;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34812,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34812,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(end,node);
}),loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$3(successors,dist,start)));
if(cljs.core.truth_(temp__5718__auto__)){
var vec__34815 = temp__5718__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34815,(0),null);
var end_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34815,(1),null);
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
return cljs.core.long$((function (){var G__34838 = (bits / loom.alg_generic.bits_per_long);
return Math.ceil(G__34838);
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
var len__4730__auto___35444 = arguments.length;
var i__4731__auto___35445 = (0);
while(true){
if((i__4731__auto___35445 < len__4730__auto___35444)){
args__4736__auto__.push((arguments[i__4731__auto___35445]));

var G__35446 = (i__4731__auto___35445 + (1));
i__4731__auto___35445 = G__35446;
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
var seq__34879_35448 = cljs.core.seq(cljs.core.rest(bitmaps));
var chunk__34887_35449 = null;
var count__34888_35450 = (0);
var i__34889_35451 = (0);
while(true){
if((i__34889_35451 < count__34888_35450)){
var bitmap_35454 = chunk__34887_35449.cljs$core$IIndexed$_nth$arity$2(null,i__34889_35451);
var seq__34890_35457 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.list,bitmap_35454));
var chunk__34892_35458 = null;
var count__34893_35459 = (0);
var i__34894_35460 = (0);
while(true){
if((i__34894_35460 < count__34893_35459)){
var vec__34964_35463 = chunk__34892_35458.cljs$core$IIndexed$_nth$arity$2(null,i__34894_35460);
var idx_35464 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34964_35463,(0),null);
var value_35465 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34964_35463,(1),null);
var masked_value_35467 = (value_35465 | (new_bitmap[idx_35464]));
(new_bitmap[idx_35464] = masked_value_35467);


var G__35470 = seq__34890_35457;
var G__35471 = chunk__34892_35458;
var G__35472 = count__34893_35459;
var G__35473 = (i__34894_35460 + (1));
seq__34890_35457 = G__35470;
chunk__34892_35458 = G__35471;
count__34893_35459 = G__35472;
i__34894_35460 = G__35473;
continue;
} else {
var temp__5720__auto___35475 = cljs.core.seq(seq__34890_35457);
if(temp__5720__auto___35475){
var seq__34890_35476__$1 = temp__5720__auto___35475;
if(cljs.core.chunked_seq_QMARK_(seq__34890_35476__$1)){
var c__4550__auto___35477 = cljs.core.chunk_first(seq__34890_35476__$1);
var G__35478 = cljs.core.chunk_rest(seq__34890_35476__$1);
var G__35479 = c__4550__auto___35477;
var G__35480 = cljs.core.count(c__4550__auto___35477);
var G__35481 = (0);
seq__34890_35457 = G__35478;
chunk__34892_35458 = G__35479;
count__34893_35459 = G__35480;
i__34894_35460 = G__35481;
continue;
} else {
var vec__34973_35482 = cljs.core.first(seq__34890_35476__$1);
var idx_35483 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34973_35482,(0),null);
var value_35484 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34973_35482,(1),null);
var masked_value_35485 = (value_35484 | (new_bitmap[idx_35483]));
(new_bitmap[idx_35483] = masked_value_35485);


var G__35486 = cljs.core.next(seq__34890_35476__$1);
var G__35487 = null;
var G__35488 = (0);
var G__35489 = (0);
seq__34890_35457 = G__35486;
chunk__34892_35458 = G__35487;
count__34893_35459 = G__35488;
i__34894_35460 = G__35489;
continue;
}
} else {
}
}
break;
}

var G__35490 = seq__34879_35448;
var G__35491 = chunk__34887_35449;
var G__35492 = count__34888_35450;
var G__35493 = (i__34889_35451 + (1));
seq__34879_35448 = G__35490;
chunk__34887_35449 = G__35491;
count__34888_35450 = G__35492;
i__34889_35451 = G__35493;
continue;
} else {
var temp__5720__auto___35494 = cljs.core.seq(seq__34879_35448);
if(temp__5720__auto___35494){
var seq__34879_35496__$1 = temp__5720__auto___35494;
if(cljs.core.chunked_seq_QMARK_(seq__34879_35496__$1)){
var c__4550__auto___35497 = cljs.core.chunk_first(seq__34879_35496__$1);
var G__35499 = cljs.core.chunk_rest(seq__34879_35496__$1);
var G__35500 = c__4550__auto___35497;
var G__35501 = cljs.core.count(c__4550__auto___35497);
var G__35502 = (0);
seq__34879_35448 = G__35499;
chunk__34887_35449 = G__35500;
count__34888_35450 = G__35501;
i__34889_35451 = G__35502;
continue;
} else {
var bitmap_35504 = cljs.core.first(seq__34879_35496__$1);
var seq__34880_35505 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.list,bitmap_35504));
var chunk__34882_35506 = null;
var count__34883_35507 = (0);
var i__34884_35508 = (0);
while(true){
if((i__34884_35508 < count__34883_35507)){
var vec__35001_35511 = chunk__34882_35506.cljs$core$IIndexed$_nth$arity$2(null,i__34884_35508);
var idx_35512 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35001_35511,(0),null);
var value_35513 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35001_35511,(1),null);
var masked_value_35516 = (value_35513 | (new_bitmap[idx_35512]));
(new_bitmap[idx_35512] = masked_value_35516);


var G__35517 = seq__34880_35505;
var G__35518 = chunk__34882_35506;
var G__35519 = count__34883_35507;
var G__35520 = (i__34884_35508 + (1));
seq__34880_35505 = G__35517;
chunk__34882_35506 = G__35518;
count__34883_35507 = G__35519;
i__34884_35508 = G__35520;
continue;
} else {
var temp__5720__auto___35521__$1 = cljs.core.seq(seq__34880_35505);
if(temp__5720__auto___35521__$1){
var seq__34880_35522__$1 = temp__5720__auto___35521__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34880_35522__$1)){
var c__4550__auto___35523 = cljs.core.chunk_first(seq__34880_35522__$1);
var G__35524 = cljs.core.chunk_rest(seq__34880_35522__$1);
var G__35525 = c__4550__auto___35523;
var G__35526 = cljs.core.count(c__4550__auto___35523);
var G__35527 = (0);
seq__34880_35505 = G__35524;
chunk__34882_35506 = G__35525;
count__34883_35507 = G__35526;
i__34884_35508 = G__35527;
continue;
} else {
var vec__35005_35528 = cljs.core.first(seq__34880_35522__$1);
var idx_35529 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35005_35528,(0),null);
var value_35530 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35005_35528,(1),null);
var masked_value_35531 = (value_35530 | (new_bitmap[idx_35529]));
(new_bitmap[idx_35529] = masked_value_35531);


var G__35532 = cljs.core.next(seq__34880_35522__$1);
var G__35533 = null;
var G__35534 = (0);
var G__35535 = (0);
seq__34880_35505 = G__35532;
chunk__34882_35506 = G__35533;
count__34883_35507 = G__35534;
i__34884_35508 = G__35535;
continue;
}
} else {
}
}
break;
}

var G__35536 = cljs.core.next(seq__34879_35496__$1);
var G__35537 = null;
var G__35538 = (0);
var G__35539 = (0);
seq__34879_35448 = G__35536;
chunk__34887_35449 = G__35537;
count__34888_35450 = G__35538;
i__34889_35451 = G__35539;
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
loom.alg_generic.bm_or.cljs$lang$applyTo = (function (seq34854){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34854));
});

/**
 * Get the indicies of set bits in 'bitmap.
 */
loom.alg_generic.bm_get_indicies = (function loom$alg_generic$bm_get_indicies(bitmap){
var iter__4523__auto__ = (function loom$alg_generic$bm_get_indicies_$_iter__35013(s__35014){
return (new cljs.core.LazySeq(null,(function (){
var s__35014__$1 = s__35014;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__35014__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var chunk = cljs.core.first(xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__35014__$1,chunk,xs__6277__auto__,temp__5720__auto__){
return (function loom$alg_generic$bm_get_indicies_$_iter__35013_$_iter__35015(s__35016){
return (new cljs.core.LazySeq(null,((function (s__35014__$1,chunk,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__35016__$1 = s__35016;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__35016__$1);
if(temp__5720__auto____$1){
var s__35016__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35016__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__35016__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__35018 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__35017 = (0);
while(true){
if((i__35017 < size__4522__auto__)){
var offset = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__35017);
var idx = ((chunk * loom.alg_generic.bits_per_long) + offset);
if(cljs.core.truth_(loom.alg_generic.bm_get(bitmap,idx))){
cljs.core.chunk_append(b__35018,idx);

var G__35540 = (i__35017 + (1));
i__35017 = G__35540;
continue;
} else {
var G__35541 = (i__35017 + (1));
i__35017 = G__35541;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35018),loom$alg_generic$bm_get_indicies_$_iter__35013_$_iter__35015(cljs.core.chunk_rest(s__35016__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35018),null);
}
} else {
var offset = cljs.core.first(s__35016__$2);
var idx = ((chunk * loom.alg_generic.bits_per_long) + offset);
if(cljs.core.truth_(loom.alg_generic.bm_get(bitmap,idx))){
return cljs.core.cons(idx,loom$alg_generic$bm_get_indicies_$_iter__35013_$_iter__35015(cljs.core.rest(s__35016__$2)));
} else {
var G__35542 = cljs.core.rest(s__35016__$2);
s__35016__$1 = G__35542;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__35014__$1,chunk,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__35014__$1,chunk,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(loom.alg_generic.bits_per_long)));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,loom$alg_generic$bm_get_indicies_$_iter__35013(cljs.core.rest(s__35014__$1)));
} else {
var G__35543 = cljs.core.rest(s__35014__$1);
s__35014__$1 = G__35543;
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

loom.alg_generic.Ancestry.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k35028,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__35066 = k35028;
var G__35066__$1 = (((G__35066 instanceof cljs.core.Keyword))?G__35066.fqn:null);
switch (G__35066__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35028,else__4388__auto__);

}
});

loom.alg_generic.Ancestry.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__35076){
var vec__35077 = p__35076;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35077,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35077,(1),null);
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

loom.alg_generic.Ancestry.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35027){
var self__ = this;
var G__35027__$1 = this;
return (new cljs.core.RecordIter((0),G__35027__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node->idx","node->idx",152705227),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4243__auto____$1 = (function (){var fexpr__35091 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1116202445 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__35091(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

loom.alg_generic.Ancestry.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35029,other35030){
var self__ = this;
var this35029__$1 = this;
return (((!((other35030 == null)))) && ((this35029__$1.constructor === other35030.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35029__$1.node__GT_idx,other35030.node__GT_idx)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35029__$1.idx__GT_node,other35030.idx__GT_node)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35029__$1.bitmaps,other35030.bitmaps)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35029__$1.__extmap,other35030.__extmap)));
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

loom.alg_generic.Ancestry.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__35027){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__35103 = cljs.core.keyword_identical_QMARK_;
var expr__35104 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__35108 = new cljs.core.Keyword(null,"node->idx","node->idx",152705227);
var G__35109 = expr__35104;
return (pred__35103.cljs$core$IFn$_invoke$arity$2 ? pred__35103.cljs$core$IFn$_invoke$arity$2(G__35108,G__35109) : pred__35103.call(null,G__35108,G__35109));
})())){
return (new loom.alg_generic.Ancestry(G__35027,self__.idx__GT_node,self__.bitmaps,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__35111 = new cljs.core.Keyword(null,"idx->node","idx->node",1811907175);
var G__35112 = expr__35104;
return (pred__35103.cljs$core$IFn$_invoke$arity$2 ? pred__35103.cljs$core$IFn$_invoke$arity$2(G__35111,G__35112) : pred__35103.call(null,G__35111,G__35112));
})())){
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,G__35027,self__.bitmaps,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__35114 = new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842);
var G__35115 = expr__35104;
return (pred__35103.cljs$core$IFn$_invoke$arity$2 ? pred__35103.cljs$core$IFn$_invoke$arity$2(G__35114,G__35115) : pred__35103.call(null,G__35114,G__35115));
})())){
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,G__35027,self__.__meta,self__.__extmap,null));
} else {
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__35027),null));
}
}
}
});

loom.alg_generic.Ancestry.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"node->idx","node->idx",152705227),self__.node__GT_idx,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),self__.idx__GT_node,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),self__.bitmaps,null))], null),self__.__extmap));
});

loom.alg_generic.Ancestry.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__35027){
var self__ = this;
var this__4384__auto____$1 = this;
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,G__35027,self__.__extmap,self__.__hash));
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
loom.alg_generic.map__GT_Ancestry = (function loom$alg_generic$map__GT_Ancestry(G__35040){
var extmap__4424__auto__ = (function (){var G__35127 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35040,new cljs.core.Keyword(null,"node->idx","node->idx",152705227),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842)], 0));
if(cljs.core.record_QMARK_(G__35040)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35127);
} else {
return G__35127;
}
})();
return (new loom.alg_generic.Ancestry(new cljs.core.Keyword(null,"node->idx","node->idx",152705227).cljs$core$IFn$_invoke$arity$1(G__35040),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175).cljs$core$IFn$_invoke$arity$1(G__35040),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842).cljs$core$IFn$_invoke$arity$1(G__35040),null,cljs.core.not_empty(extmap__4424__auto__),null));
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
var len__4730__auto___35545 = arguments.length;
var i__4731__auto___35546 = (0);
while(true){
if((i__4731__auto___35546 < len__4730__auto___35545)){
args__4736__auto__.push((arguments[i__4731__auto___35546]));

var G__35547 = (i__4731__auto___35546 + (1));
i__4731__auto___35546 = G__35547;
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
var map__35141 = ancestry;
var map__35141__$1 = (((((!((map__35141 == null))))?(((((map__35141.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35141.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35141):map__35141);
var node__GT_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35141__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var idx__GT_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35141__$1,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175));
var bitmaps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35141__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
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
loom.alg_generic.ancestry_add.cljs$lang$applyTo = (function (seq35134){
var G__35135 = cljs.core.first(seq35134);
var seq35134__$1 = cljs.core.next(seq35134);
var G__35136 = cljs.core.first(seq35134__$1);
var seq35134__$2 = cljs.core.next(seq35134__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35135,G__35136,seq35134__$2);
});

/**
 * Finds if the 'parenter node is an ancestor of 'childer node for the given
 *   'ancestry cache.
 */
loom.alg_generic.ancestor_QMARK_ = (function loom$alg_generic$ancestor_QMARK_(ancestry,childer,parenter){
var map__35149 = ancestry;
var map__35149__$1 = (((((!((map__35149 == null))))?(((((map__35149.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35149.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35149):map__35149);
var node__GT_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35149__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var bitmaps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35149__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
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
var map__35153 = ancestry;
var map__35153__$1 = (((((!((map__35153 == null))))?(((((map__35153.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35153.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35153):map__35153);
var node__GT_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35153__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var idx__GT_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35153__$1,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175));
var bitmaps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35153__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
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
