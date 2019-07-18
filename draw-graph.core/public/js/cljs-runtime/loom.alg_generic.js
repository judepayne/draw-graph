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
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(span,p,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var G__34194 = p;
var G__34195 = cljs.core.PersistentVector.EMPTY;
return (span.cljs$core$IFn$_invoke$arity$2 ? span.cljs$core$IFn$_invoke$arity$2(G__34194,G__34195) : span.call(null,G__34194,G__34195));
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
var len__4730__auto___35160 = arguments.length;
var i__4731__auto___35161 = (0);
while(true){
if((i__4731__auto___35161 < len__4730__auto___35160)){
args__4736__auto__.push((arguments[i__4731__auto___35161]));

var G__35162 = (i__4731__auto___35161 + (1));
i__4731__auto___35161 = G__35162;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__34217){
var map__34218 = p__34217;
var map__34218__$1 = (((((!((map__34218 == null))))?(((((map__34218.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34218.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34218):map__34218);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34218__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var step = ((function (map__34218,map__34218__$1,seen){
return (function loom$alg_generic$step(stack,seen__$1){
var temp__5720__auto__ = cljs.core.peek(stack);
if(cljs.core.truth_(temp__5720__auto__)){
var node = temp__5720__auto__;
if(cljs.core.contains_QMARK_(seen__$1,node)){
return loom$alg_generic$step(cljs.core.pop(stack),seen__$1);
} else {
var seen__$2 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,node);
var nbrs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(seen__$2,(successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(node) : successors.call(null,node)));
return (new cljs.core.LazySeq(null,((function (seen__$2,nbrs,node,temp__5720__auto__,map__34218,map__34218__$1,seen){
return (function (){
return cljs.core.cons(node,loom$alg_generic$step(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(stack),nbrs),seen__$2));
});})(seen__$2,nbrs,node,temp__5720__auto__,map__34218,map__34218__$1,seen))
,null,null));
}
} else {
return null;
}
});})(map__34218,map__34218__$1,seen))
;
return step(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null),seen);
});

loom.alg_generic.pre_traverse.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.pre_traverse.cljs$lang$applyTo = (function (seq34196){
var G__34197 = cljs.core.first(seq34196);
var seq34196__$1 = cljs.core.next(seq34196);
var G__34198 = cljs.core.first(seq34196__$1);
var seq34196__$2 = cljs.core.next(seq34196__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34197,G__34198,seq34196__$2);
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
var len__4730__auto___35170 = arguments.length;
var i__4731__auto___35172 = (0);
while(true){
if((i__4731__auto___35172 < len__4730__auto___35170)){
args__4736__auto__.push((arguments[i__4731__auto___35172]));

var G__35173 = (i__4731__auto___35172 + (1));
i__4731__auto___35172 = G__35173;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__34293){
var map__34294 = p__34293;
var map__34294__$1 = (((((!((map__34294 == null))))?(((((map__34294.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34294.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34294):map__34294);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34294__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var step = ((function (map__34294,map__34294__$1,seen){
return (function loom$alg_generic$step(successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1){
while(true){
var temp__5718__auto__ = cljs.core.first(nbrs);
if(cljs.core.truth_(temp__5718__auto__)){
var nbr = temp__5718__auto__;
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null),(new cljs.core.LazySeq(null,((function (successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1,nbr,temp__5718__auto__,map__34294,map__34294__$1,seen){
return (function (){
var seen__$2 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,start__$1);
if(cljs.core.truth_((seen__$2.cljs$core$IFn$_invoke$arity$1 ? seen__$2.cljs$core$IFn$_invoke$arity$1(nbr) : seen__$2.call(null,nbr)))){
return loom$alg_generic$step(successors__$1,start__$1,cljs.core.next(nbrs),stack,nbrstack,seen__$2);
} else {
return loom$alg_generic$step(successors__$1,nbr,(successors__$1.cljs$core$IFn$_invoke$arity$1 ? successors__$1.cljs$core$IFn$_invoke$arity$1(nbr) : successors__$1.call(null,nbr)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,start__$1),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nbrstack,cljs.core.next(nbrs)),seen__$2);
}
});})(successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1,nbr,temp__5718__auto__,map__34294,map__34294__$1,seen))
,null,null)));
} else {
var temp__5720__auto__ = cljs.core.peek(stack);
if(cljs.core.truth_(temp__5720__auto__)){
var parent = temp__5720__auto__;
var G__35180 = successors__$1;
var G__35181 = parent;
var G__35182 = cljs.core.peek(nbrstack);
var G__35183 = cljs.core.pop(stack);
var G__35184 = cljs.core.pop(nbrstack);
var G__35185 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,start__$1);
successors__$1 = G__35180;
start__$1 = G__35181;
nbrs = G__35182;
stack = G__35183;
nbrstack = G__35184;
seen__$1 = G__35185;
continue;
} else {
return null;
}
}
break;
}
});})(map__34294,map__34294__$1,seen))
;
if(cljs.core.truth_((seen.cljs$core$IFn$_invoke$arity$1 ? seen.cljs$core$IFn$_invoke$arity$1(start) : seen.call(null,start)))){
return null;
} else {
return step(successors,start,(successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(start) : successors.call(null,start)),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,start));
}
});

loom.alg_generic.pre_edge_traverse.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.pre_edge_traverse.cljs$lang$applyTo = (function (seq34284){
var G__34285 = cljs.core.first(seq34284);
var seq34284__$1 = cljs.core.next(seq34284);
var G__34286 = cljs.core.first(seq34284__$1);
var seq34284__$2 = cljs.core.next(seq34284__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34285,G__34286,seq34284__$2);
});

/**
 * Returns a depth-first spanning tree of the form {node [successors]}
 */
loom.alg_generic.pre_span = (function loom$alg_generic$pre_span(var_args){
var args__4736__auto__ = [];
var len__4730__auto___35188 = arguments.length;
var i__4731__auto___35189 = (0);
while(true){
if((i__4731__auto___35189 < len__4730__auto___35188)){
args__4736__auto__.push((arguments[i__4731__auto___35189]));

var G__35190 = (i__4731__auto___35189 + (1));
i__4731__auto___35189 = G__35190;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__34333){
var map__34334 = p__34333;
var map__34334__$1 = (((((!((map__34334 == null))))?(((((map__34334.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34334.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34334):map__34334);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34334__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34334__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__35208 = seen__$2;
var G__35209 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(preds,u,v);
var G__35210 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,u);
seen__$1 = G__35208;
preds = G__35209;
stack = G__35210;
continue;
} else {
var G__35211 = seen__$2;
var G__35212 = preds;
var G__35213 = cljs.core.pop(stack);
seen__$1 = G__35211;
preds = G__35212;
stack = G__35213;
continue;
}
}
break;
}
});

loom.alg_generic.pre_span.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.pre_span.cljs$lang$applyTo = (function (seq34320){
var G__34321 = cljs.core.first(seq34320);
var seq34320__$1 = cljs.core.next(seq34320);
var G__34322 = cljs.core.first(seq34320__$1);
var seq34320__$2 = cljs.core.next(seq34320__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34321,G__34322,seq34320__$2);
});

/**
 * Traverses a graph depth-first postorder from start, successors
 *   being a function that returns adjacent nodes. Returns a vector
 */
loom.alg_generic.post_traverse = (function loom$alg_generic$post_traverse(var_args){
var args__4736__auto__ = [];
var len__4730__auto___35217 = arguments.length;
var i__4731__auto___35218 = (0);
while(true){
if((i__4731__auto___35218 < len__4730__auto___35217)){
args__4736__auto__.push((arguments[i__4731__auto___35218]));

var G__35220 = (i__4731__auto___35218 + (1));
i__4731__auto___35218 = G__35220;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__34361){
var map__34362 = p__34361;
var map__34362__$1 = (((((!((map__34362 == null))))?(((((map__34362.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34362.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34362):map__34362);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34362__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34362__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__35223 = seen__$2;
var G__35224 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,v);
var G__35225 = cljs.core.pop(stack);
seen__$1 = G__35223;
result = G__35224;
stack = G__35225;
continue;
} else {
var G__35227 = seen__$2;
var G__35228 = result;
var G__35229 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,cljs.core.first(nbrs));
seen__$1 = G__35227;
result = G__35228;
stack = G__35229;
continue;
}
}
break;
}
});

loom.alg_generic.post_traverse.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.post_traverse.cljs$lang$applyTo = (function (seq34356){
var G__34357 = cljs.core.first(seq34356);
var seq34356__$1 = cljs.core.next(seq34356);
var G__34358 = cljs.core.first(seq34356__$1);
var seq34356__$2 = cljs.core.next(seq34356__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34357,G__34358,seq34356__$2);
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
var len__4730__auto___35232 = arguments.length;
var i__4731__auto___35233 = (0);
while(true){
if((i__4731__auto___35233 < len__4730__auto___35232)){
args__4736__auto__.push((arguments[i__4731__auto___35233]));

var G__35234 = (i__4731__auto___35233 + (1));
i__4731__auto___35233 = G__35234;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__34380){
var map__34382 = p__34380;
var map__34382__$1 = (((((!((map__34382 == null))))?(((((map__34382.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34382.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34382):map__34382);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34382__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34382__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__35244 = start__$1;
var G__35245 = cljs.core.next(nbrs);
var G__35246 = stack;
var G__35247 = nbrstack;
var G__35248 = seen__$2;
var G__35249 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(edges,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null));
start__$1 = G__35244;
nbrs = G__35245;
stack = G__35246;
nbrstack = G__35247;
seen__$1 = G__35248;
edges = G__35249;
continue;
} else {
var G__35250 = nbr;
var G__35251 = (successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(nbr) : successors.call(null,nbr));
var G__35252 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,start__$1);
var G__35253 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nbrstack,cljs.core.next(nbrs));
var G__35254 = seen__$2;
var G__35255 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(edges,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null));
start__$1 = G__35250;
nbrs = G__35251;
stack = G__35252;
nbrstack = G__35253;
seen__$1 = G__35254;
edges = G__35255;
continue;
}
} else {
var temp__5718__auto____$1 = cljs.core.peek(stack);
if(cljs.core.truth_(temp__5718__auto____$1)){
var parent = temp__5718__auto____$1;
var G__35257 = parent;
var G__35258 = cljs.core.peek(nbrstack);
var G__35259 = cljs.core.pop(stack);
var G__35260 = cljs.core.pop(nbrstack);
var G__35261 = seen__$2;
var G__35262 = edges;
start__$1 = G__35257;
nbrs = G__35258;
stack = G__35259;
nbrstack = G__35260;
seen__$1 = G__35261;
edges = G__35262;
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
loom.alg_generic.post_edge_traverse.cljs$lang$applyTo = (function (seq34375){
var G__34376 = cljs.core.first(seq34375);
var seq34375__$1 = cljs.core.next(seq34375);
var G__34377 = cljs.core.first(seq34375__$1);
var seq34375__$2 = cljs.core.next(seq34375__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34376,G__34377,seq34375__$2);
});

/**
 * Topological sort of a component of a (presumably) directed graph.
 *   Returns nil if the graph contains any cycles. See loom.alg/topsort
 *   for a complete topological sort
 */
loom.alg_generic.topsort_component = (function loom$alg_generic$topsort_component(var_args){
var G__34404 = arguments.length;
switch (G__34404) {
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
var G__35272 = seen__$2;
var G__35273 = explored__$1;
var G__35274 = result;
var G__35275 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,cljs.core.first(us));
seen__$1 = G__35272;
explored__$1 = G__35273;
result = G__35274;
stack = G__35275;
continue;
}
} else {
var G__35277 = seen__$2;
var G__35278 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(explored__$1,v);
var G__35279 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,v);
var G__35280 = cljs.core.pop(stack);
seen__$1 = G__35277;
explored__$1 = G__35278;
result = G__35279;
stack = G__35280;
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
var len__4730__auto___35282 = arguments.length;
var i__4731__auto___35283 = (0);
while(true){
if((i__4731__auto___35283 < len__4730__auto___35282)){
args__4736__auto__.push((arguments[i__4731__auto___35283]));

var G__35284 = (i__4731__auto___35283 + (1));
i__4731__auto___35283 = G__35284;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__34455){
var map__34457 = p__34455;
var map__34457__$1 = (((((!((map__34457 == null))))?(((((map__34457.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34457.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34457):map__34457);
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34457__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var when = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34457__$1,new cljs.core.Keyword(null,"when","when",-576417306));
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34457__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
var f__$1 = (function (){var or__4131__auto__ = f;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return ((function (or__4131__auto__,map__34457,map__34457__$1,f,when,seen){
return (function (n,p,d){
return n;
});
;})(or__4131__auto__,map__34457,map__34457__$1,f,when,seen))
}
})();
var nbr_pred = (function (){var or__4131__auto__ = when;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.constantly(true);
}
})();
var step = ((function (f__$1,nbr_pred,map__34457,map__34457__$1,f,when,seen){
return (function loom$alg_generic$step(queue,preds){
var temp__5720__auto__ = cljs.core.peek(queue);
if(cljs.core.truth_(temp__5720__auto__)){
var vec__34502 = temp__5720__auto__;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34502,(0),null);
var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34502,(1),null);
return cljs.core.cons((f__$1.cljs$core$IFn$_invoke$arity$3 ? f__$1.cljs$core$IFn$_invoke$arity$3(node,preds,depth) : f__$1.call(null,node,preds,depth)),(new cljs.core.LazySeq(null,((function (vec__34502,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34457,map__34457__$1,f,when,seen){
return (function (){
var nbrs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__34502,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34457,map__34457__$1,f,when,seen){
return (function (p1__34447_SHARP_){
var G__34505 = p1__34447_SHARP_;
var G__34506 = node;
var G__34507 = (depth + (1));
return (nbr_pred.cljs$core$IFn$_invoke$arity$3 ? nbr_pred.cljs$core$IFn$_invoke$arity$3(G__34505,G__34506,G__34507) : nbr_pred.call(null,G__34505,G__34506,G__34507));
});})(vec__34502,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34457,map__34457__$1,f,when,seen))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__34502,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34457,map__34457__$1,f,when,seen){
return (function (p1__34446_SHARP_){
return cljs.core.contains_QMARK_(preds,p1__34446_SHARP_);
});})(vec__34502,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34457,map__34457__$1,f,when,seen))
,(successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(node) : successors.call(null,node))));
return loom$alg_generic$step(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(queue),(function (){var iter__4523__auto__ = ((function (nbrs,vec__34502,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34457,map__34457__$1,f,when,seen){
return (function loom$alg_generic$step_$_iter__34509(s__34510){
return (new cljs.core.LazySeq(null,((function (nbrs,vec__34502,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34457,map__34457__$1,f,when,seen){
return (function (){
var s__34510__$1 = s__34510;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__34510__$1);
if(temp__5720__auto____$1){
var s__34510__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__34510__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__34510__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__34512 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__34511 = (0);
while(true){
if((i__34511 < size__4522__auto__)){
var nbr = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__34511);
cljs.core.chunk_append(b__34512,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,(depth + (1))], null));

var G__35299 = (i__34511 + (1));
i__34511 = G__35299;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34512),loom$alg_generic$step_$_iter__34509(cljs.core.chunk_rest(s__34510__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34512),null);
}
} else {
var nbr = cljs.core.first(s__34510__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,(depth + (1))], null),loom$alg_generic$step_$_iter__34509(cljs.core.rest(s__34510__$2)));
}
} else {
return null;
}
break;
}
});})(nbrs,vec__34502,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34457,map__34457__$1,f,when,seen))
,null,null));
});})(nbrs,vec__34502,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34457,map__34457__$1,f,when,seen))
;
return iter__4523__auto__(nbrs);
})()),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (nbrs,vec__34502,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34457,map__34457__$1,f,when,seen){
return (function (p1__34448_SHARP_,p2__34449_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__34448_SHARP_,p2__34449_SHARP_,node);
});})(nbrs,vec__34502,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34457,map__34457__$1,f,when,seen))
,preds,nbrs));
});})(vec__34502,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34457,map__34457__$1,f,when,seen))
,null,null)));
} else {
return null;
}
});})(f__$1,nbr_pred,map__34457,map__34457__$1,f,when,seen))
;
return step(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentQueue.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,(0)], null)),((cljs.core.map_QMARK_(seen))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(seen,start,null):cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.createAsIfByAssoc([start,null]),(function (){var iter__4523__auto__ = ((function (f__$1,nbr_pred,map__34457,map__34457__$1,f,when,seen){
return (function loom$alg_generic$iter__34527(s__34528){
return (new cljs.core.LazySeq(null,((function (f__$1,nbr_pred,map__34457,map__34457__$1,f,when,seen){
return (function (){
var s__34528__$1 = s__34528;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__34528__$1);
if(temp__5720__auto__){
var s__34528__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__34528__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__34528__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__34530 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__34529 = (0);
while(true){
if((i__34529 < size__4522__auto__)){
var s = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__34529);
cljs.core.chunk_append(b__34530,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,null], null));

var G__35321 = (i__34529 + (1));
i__34529 = G__35321;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34530),loom$alg_generic$iter__34527(cljs.core.chunk_rest(s__34528__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34530),null);
}
} else {
var s = cljs.core.first(s__34528__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,null], null),loom$alg_generic$iter__34527(cljs.core.rest(s__34528__$2)));
}
} else {
return null;
}
break;
}
});})(f__$1,nbr_pred,map__34457,map__34457__$1,f,when,seen))
,null,null));
});})(f__$1,nbr_pred,map__34457,map__34457__$1,f,when,seen))
;
return iter__4523__auto__(seen);
})())));
});

loom.alg_generic.bf_traverse.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.bf_traverse.cljs$lang$applyTo = (function (seq34450){
var G__34451 = cljs.core.first(seq34450);
var seq34450__$1 = cljs.core.next(seq34450);
var G__34452 = cljs.core.first(seq34450__$1);
var seq34450__$2 = cljs.core.next(seq34450__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34451,G__34452,seq34450__$2);
});

/**
 * Return a breadth-first spanning tree of the form {node
 *   [successors]}
 */
loom.alg_generic.bf_span = (function loom$alg_generic$bf_span(var_args){
var args__4736__auto__ = [];
var len__4730__auto___35338 = arguments.length;
var i__4731__auto___35339 = (0);
while(true){
if((i__4731__auto___35339 < len__4730__auto___35338)){
args__4736__auto__.push((arguments[i__4731__auto___35339]));

var G__35340 = (i__4731__auto___35339 + (1));
i__4731__auto___35339 = G__35340;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__34560){
var map__34561 = p__34560;
var map__34561__$1 = (((((!((map__34561 == null))))?(((((map__34561.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34561.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34561):map__34561);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34561__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
return loom.alg_generic.preds__GT_span(cljs.core.last(loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic(successors,start,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"f","f",-1597136552),((function (map__34561,map__34561__$1,seen){
return (function (_,pm,___$1){
return pm;
});})(map__34561,map__34561__$1,seen))
,new cljs.core.Keyword(null,"seen","seen",-518999789),seen], 0))));
});

loom.alg_generic.bf_span.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.bf_span.cljs$lang$applyTo = (function (seq34553){
var G__34555 = cljs.core.first(seq34553);
var seq34553__$1 = cljs.core.next(seq34553);
var G__34557 = cljs.core.first(seq34553__$1);
var seq34553__$2 = cljs.core.next(seq34553__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34555,G__34557,seq34553__$2);
});

/**
 * Returns a path from start to end with the fewest hops (i.e. irrespective
 *   of edge weights), successors being a function that returns adjacent nodes
 */
loom.alg_generic.bf_path = (function loom$alg_generic$bf_path(var_args){
var args__4736__auto__ = [];
var len__4730__auto___35345 = arguments.length;
var i__4731__auto___35346 = (0);
while(true){
if((i__4731__auto___35346 < len__4730__auto___35345)){
args__4736__auto__.push((arguments[i__4731__auto___35346]));

var G__35347 = (i__4731__auto___35346 + (1));
i__4731__auto___35346 = G__35347;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,end,p__34576){
var map__34578 = p__34576;
var map__34578__$1 = (((((!((map__34578 == null))))?(((((map__34578.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34578.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34578):map__34578);
var opts = map__34578__$1;
var opts__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.vector], null)], 0));
var temp__5720__auto__ = cljs.core.some(((function (opts__$1,map__34578,map__34578__$1,opts){
return (function (p__34581){
var vec__34582 = p__34581;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34582,(0),null);
var pm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34582,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34582,(2),null);
if(cljs.core.truth_((pm.cljs$core$IFn$_invoke$arity$1 ? pm.cljs$core$IFn$_invoke$arity$1(end) : pm.call(null,end)))){
return pm;
} else {
return null;
}
});})(opts__$1,map__34578,map__34578__$1,opts))
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
loom.alg_generic.bf_path.cljs$lang$applyTo = (function (seq34569){
var G__34570 = cljs.core.first(seq34569);
var seq34569__$1 = cljs.core.next(seq34569);
var G__34571 = cljs.core.first(seq34569__$1);
var seq34569__$2 = cljs.core.next(seq34569__$1);
var G__34572 = cljs.core.first(seq34569__$2);
var seq34569__$3 = cljs.core.next(seq34569__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34570,G__34571,G__34572,seq34569__$3);
});

/**
 * Returns a lazy-seq of the keys that exist in both m1 and m2
 */
loom.alg_generic.shared_keys = (function loom$alg_generic$shared_keys(m1,m2){
while(true){
if((cljs.core.count(m2) < cljs.core.count(m1))){
var G__35356 = m2;
var G__35357 = m1;
m1 = G__35356;
m2 = G__35357;
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
var iter__4523__auto__ = (function loom$alg_generic$reverse_edges_$_iter__34595(s__34596){
return (new cljs.core.LazySeq(null,(function (){
var s__34596__$1 = s__34596;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__34596__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var node = cljs.core.first(xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__34596__$1,node,xs__6277__auto__,temp__5720__auto__){
return (function loom$alg_generic$reverse_edges_$_iter__34595_$_iter__34597(s__34598){
return (new cljs.core.LazySeq(null,((function (s__34596__$1,node,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__34598__$1 = s__34598;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__34598__$1);
if(temp__5720__auto____$1){
var s__34598__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__34598__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__34598__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__34600 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__34599 = (0);
while(true){
if((i__34599 < size__4522__auto__)){
var nbr = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__34599);
if((!(cljs.core.contains_QMARK_(coll,nbr)))){
cljs.core.chunk_append(b__34600,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,node], null));

var G__35363 = (i__34599 + (1));
i__34599 = G__35363;
continue;
} else {
var G__35365 = (i__34599 + (1));
i__34599 = G__35365;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34600),loom$alg_generic$reverse_edges_$_iter__34595_$_iter__34597(cljs.core.chunk_rest(s__34598__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34600),null);
}
} else {
var nbr = cljs.core.first(s__34598__$2);
if((!(cljs.core.contains_QMARK_(coll,nbr)))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,node], null),loom$alg_generic$reverse_edges_$_iter__34595_$_iter__34597(cljs.core.rest(s__34598__$2)));
} else {
var G__35368 = cljs.core.rest(s__34598__$2);
s__34598__$1 = G__35368;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__34596__$1,node,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__34596__$1,node,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__((successor_fn.cljs$core$IFn$_invoke$arity$1 ? successor_fn.cljs$core$IFn$_invoke$arity$1(node) : successor_fn.call(null,node))));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,loom$alg_generic$reverse_edges_$_iter__34595(cljs.core.rest(s__34596__$1)));
} else {
var G__35369 = cljs.core.rest(s__34596__$1);
s__34596__$1 = G__35369;
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
var iter__4523__auto__ = (function loom$alg_generic$conj_paths_$_iter__34607(s__34608){
return (new cljs.core.LazySeq(null,(function (){
var s__34608__$1 = s__34608;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__34608__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var n = cljs.core.first(xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__34608__$1,n,xs__6277__auto__,temp__5720__auto__){
return (function loom$alg_generic$conj_paths_$_iter__34607_$_iter__34609(s__34610){
return (new cljs.core.LazySeq(null,((function (s__34608__$1,n,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__34610__$1 = s__34610;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__34610__$1);
if(temp__5720__auto____$1){
var xs__6277__auto____$1 = temp__5720__auto____$1;
var from = cljs.core.first(xs__6277__auto____$1);
var iterys__4519__auto__ = ((function (s__34610__$1,s__34608__$1,from,xs__6277__auto____$1,temp__5720__auto____$1,n,xs__6277__auto__,temp__5720__auto__){
return (function loom$alg_generic$conj_paths_$_iter__34607_$_iter__34609_$_iter__34611(s__34612){
return (new cljs.core.LazySeq(null,((function (s__34610__$1,s__34608__$1,from,xs__6277__auto____$1,temp__5720__auto____$1,n,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__34612__$1 = s__34612;
while(true){
var temp__5720__auto____$2 = cljs.core.seq(s__34612__$1);
if(temp__5720__auto____$2){
var s__34612__$2 = temp__5720__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__34612__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__34612__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__34614 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__34613 = (0);
while(true){
if((i__34613 < size__4522__auto__)){
var to = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__34613);
cljs.core.chunk_append(b__34614,cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(from,to)));

var G__35377 = (i__34613 + (1));
i__34613 = G__35377;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34614),loom$alg_generic$conj_paths_$_iter__34607_$_iter__34609_$_iter__34611(cljs.core.chunk_rest(s__34612__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34614),null);
}
} else {
var to = cljs.core.first(s__34612__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(from,to)),loom$alg_generic$conj_paths_$_iter__34607_$_iter__34609_$_iter__34611(cljs.core.rest(s__34612__$2)));
}
} else {
return null;
}
break;
}
});})(s__34610__$1,s__34608__$1,from,xs__6277__auto____$1,temp__5720__auto____$1,n,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__34610__$1,s__34608__$1,from,xs__6277__auto____$1,temp__5720__auto____$1,n,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,loom.alg_generic.trace_paths(to_map,n))));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,loom$alg_generic$conj_paths_$_iter__34607_$_iter__34609(cljs.core.rest(s__34610__$1)));
} else {
var G__35381 = cljs.core.rest(s__34610__$1);
s__34610__$1 = G__35381;
continue;
}
} else {
return null;
}
break;
}
});})(s__34608__$1,n,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__34608__$1,n,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.reverse,loom.alg_generic.trace_paths(from_map,n))));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,loom$alg_generic$conj_paths_$_iter__34607(cljs.core.rest(s__34608__$1)));
} else {
var G__35385 = cljs.core.rest(s__34608__$1);
s__34608__$1 = G__35385;
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
return (function (p1__34646_SHARP_){
return cljs.core.contains_QMARK_(coll,p1__34646_SHARP_);
});})(find_succs,find_preds))
,q));
});})(find_succs,find_preds))
;
var map_set_pairs = ((function (find_succs,find_preds,overlaps){
return (function (map,pairs){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (find_succs,find_preds,overlaps){
return (function (map__$1,p__34668){
var vec__34670 = p__34668;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34670,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34670,(1),null);
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
var G__35394 = outgoing__$1;
var G__35395 = incoming;
var G__35396 = q1__$1;
var G__35397 = q2;
outgoing = G__35394;
incoming = G__35395;
q1 = G__35396;
q2 = G__35397;
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
var G__35402 = outgoing;
var G__35403 = incoming__$1;
var G__35404 = q1;
var G__35405 = q2__$1;
outgoing = G__35402;
incoming = G__35403;
q1 = G__35404;
q2 = G__35405;
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
var G__34723 = arguments.length;
switch (G__34723) {
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
var step = (function loom$alg_generic$step(p__34750){
var vec__34751 = p__34750;
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34751,(0),null);
var pq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34751,(1),null);
var temp__5720__auto__ = cljs.core.first(pq);
if(cljs.core.truth_(temp__5720__auto__)){
var vec__34759 = temp__5720__auto__;
var dist_su = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34759,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34759,(1),null);
var u = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34759,(2),null);
var fpq = vec__34759;
return cljs.core.cons((f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(u,state) : f.call(null,u,state)),(new cljs.core.LazySeq(null,((function (vec__34759,dist_su,_,u,fpq,temp__5720__auto__,vec__34751,state,pq){
return (function (){
return loom$alg_generic$step(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__34759,dist_su,_,u,fpq,temp__5720__auto__,vec__34751,state,pq){
return (function (p__34765,v){
var vec__34766 = p__34765;
var state__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34766,(0),null);
var pq__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34766,(1),null);
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
});})(vec__34759,dist_su,_,u,fpq,temp__5720__auto__,vec__34751,state,pq))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(pq,fpq)], null),(successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(u) : successors.call(null,u))));
});})(vec__34759,dist_su,_,u,fpq,temp__5720__auto__,vec__34751,state,pq))
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (span,p__34784){
var vec__34787 = p__34784;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34787,(0),null);
var vec__34790 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34787,(1),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34790,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34790,(1),null);
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
var temp__5718__auto__ = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__34798){
var vec__34799 = p__34798;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34799,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34799,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(end,node);
}),loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$3(successors,dist,start)));
if(cljs.core.truth_(temp__5718__auto__)){
var vec__34805 = temp__5718__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34805,(0),null);
var end_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34805,(1),null);
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
return cljs.core.long$((function (){var G__34817 = (bits / loom.alg_generic.bits_per_long);
return Math.ceil(G__34817);
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
var len__4730__auto___35431 = arguments.length;
var i__4731__auto___35432 = (0);
while(true){
if((i__4731__auto___35432 < len__4730__auto___35431)){
args__4736__auto__.push((arguments[i__4731__auto___35432]));

var G__35433 = (i__4731__auto___35432 + (1));
i__4731__auto___35432 = G__35433;
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
var seq__34843_35436 = cljs.core.seq(cljs.core.rest(bitmaps));
var chunk__34850_35437 = null;
var count__34851_35438 = (0);
var i__34852_35439 = (0);
while(true){
if((i__34852_35439 < count__34851_35438)){
var bitmap_35440 = chunk__34850_35437.cljs$core$IIndexed$_nth$arity$2(null,i__34852_35439);
var seq__34853_35441 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.list,bitmap_35440));
var chunk__34855_35442 = null;
var count__34856_35443 = (0);
var i__34857_35444 = (0);
while(true){
if((i__34857_35444 < count__34856_35443)){
var vec__34931_35445 = chunk__34855_35442.cljs$core$IIndexed$_nth$arity$2(null,i__34857_35444);
var idx_35446 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34931_35445,(0),null);
var value_35447 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34931_35445,(1),null);
var masked_value_35452 = (value_35447 | (new_bitmap[idx_35446]));
(new_bitmap[idx_35446] = masked_value_35452);


var G__35453 = seq__34853_35441;
var G__35454 = chunk__34855_35442;
var G__35455 = count__34856_35443;
var G__35456 = (i__34857_35444 + (1));
seq__34853_35441 = G__35453;
chunk__34855_35442 = G__35454;
count__34856_35443 = G__35455;
i__34857_35444 = G__35456;
continue;
} else {
var temp__5720__auto___35457 = cljs.core.seq(seq__34853_35441);
if(temp__5720__auto___35457){
var seq__34853_35459__$1 = temp__5720__auto___35457;
if(cljs.core.chunked_seq_QMARK_(seq__34853_35459__$1)){
var c__4550__auto___35460 = cljs.core.chunk_first(seq__34853_35459__$1);
var G__35463 = cljs.core.chunk_rest(seq__34853_35459__$1);
var G__35464 = c__4550__auto___35460;
var G__35465 = cljs.core.count(c__4550__auto___35460);
var G__35466 = (0);
seq__34853_35441 = G__35463;
chunk__34855_35442 = G__35464;
count__34856_35443 = G__35465;
i__34857_35444 = G__35466;
continue;
} else {
var vec__34955_35467 = cljs.core.first(seq__34853_35459__$1);
var idx_35468 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34955_35467,(0),null);
var value_35469 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34955_35467,(1),null);
var masked_value_35470 = (value_35469 | (new_bitmap[idx_35468]));
(new_bitmap[idx_35468] = masked_value_35470);


var G__35471 = cljs.core.next(seq__34853_35459__$1);
var G__35472 = null;
var G__35473 = (0);
var G__35474 = (0);
seq__34853_35441 = G__35471;
chunk__34855_35442 = G__35472;
count__34856_35443 = G__35473;
i__34857_35444 = G__35474;
continue;
}
} else {
}
}
break;
}

var G__35475 = seq__34843_35436;
var G__35476 = chunk__34850_35437;
var G__35477 = count__34851_35438;
var G__35478 = (i__34852_35439 + (1));
seq__34843_35436 = G__35475;
chunk__34850_35437 = G__35476;
count__34851_35438 = G__35477;
i__34852_35439 = G__35478;
continue;
} else {
var temp__5720__auto___35481 = cljs.core.seq(seq__34843_35436);
if(temp__5720__auto___35481){
var seq__34843_35482__$1 = temp__5720__auto___35481;
if(cljs.core.chunked_seq_QMARK_(seq__34843_35482__$1)){
var c__4550__auto___35485 = cljs.core.chunk_first(seq__34843_35482__$1);
var G__35486 = cljs.core.chunk_rest(seq__34843_35482__$1);
var G__35487 = c__4550__auto___35485;
var G__35488 = cljs.core.count(c__4550__auto___35485);
var G__35489 = (0);
seq__34843_35436 = G__35486;
chunk__34850_35437 = G__35487;
count__34851_35438 = G__35488;
i__34852_35439 = G__35489;
continue;
} else {
var bitmap_35490 = cljs.core.first(seq__34843_35482__$1);
var seq__34844_35491 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.list,bitmap_35490));
var chunk__34846_35492 = null;
var count__34847_35493 = (0);
var i__34848_35494 = (0);
while(true){
if((i__34848_35494 < count__34847_35493)){
var vec__34969_35496 = chunk__34846_35492.cljs$core$IIndexed$_nth$arity$2(null,i__34848_35494);
var idx_35497 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34969_35496,(0),null);
var value_35498 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34969_35496,(1),null);
var masked_value_35499 = (value_35498 | (new_bitmap[idx_35497]));
(new_bitmap[idx_35497] = masked_value_35499);


var G__35500 = seq__34844_35491;
var G__35501 = chunk__34846_35492;
var G__35502 = count__34847_35493;
var G__35503 = (i__34848_35494 + (1));
seq__34844_35491 = G__35500;
chunk__34846_35492 = G__35501;
count__34847_35493 = G__35502;
i__34848_35494 = G__35503;
continue;
} else {
var temp__5720__auto___35505__$1 = cljs.core.seq(seq__34844_35491);
if(temp__5720__auto___35505__$1){
var seq__34844_35507__$1 = temp__5720__auto___35505__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34844_35507__$1)){
var c__4550__auto___35508 = cljs.core.chunk_first(seq__34844_35507__$1);
var G__35509 = cljs.core.chunk_rest(seq__34844_35507__$1);
var G__35510 = c__4550__auto___35508;
var G__35511 = cljs.core.count(c__4550__auto___35508);
var G__35512 = (0);
seq__34844_35491 = G__35509;
chunk__34846_35492 = G__35510;
count__34847_35493 = G__35511;
i__34848_35494 = G__35512;
continue;
} else {
var vec__34972_35514 = cljs.core.first(seq__34844_35507__$1);
var idx_35515 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34972_35514,(0),null);
var value_35516 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34972_35514,(1),null);
var masked_value_35518 = (value_35516 | (new_bitmap[idx_35515]));
(new_bitmap[idx_35515] = masked_value_35518);


var G__35520 = cljs.core.next(seq__34844_35507__$1);
var G__35521 = null;
var G__35522 = (0);
var G__35523 = (0);
seq__34844_35491 = G__35520;
chunk__34846_35492 = G__35521;
count__34847_35493 = G__35522;
i__34848_35494 = G__35523;
continue;
}
} else {
}
}
break;
}

var G__35525 = cljs.core.next(seq__34843_35482__$1);
var G__35526 = null;
var G__35527 = (0);
var G__35528 = (0);
seq__34843_35436 = G__35525;
chunk__34850_35437 = G__35526;
count__34851_35438 = G__35527;
i__34852_35439 = G__35528;
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
loom.alg_generic.bm_or.cljs$lang$applyTo = (function (seq34830){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34830));
});

/**
 * Get the indicies of set bits in 'bitmap.
 */
loom.alg_generic.bm_get_indicies = (function loom$alg_generic$bm_get_indicies(bitmap){
var iter__4523__auto__ = (function loom$alg_generic$bm_get_indicies_$_iter__34976(s__34977){
return (new cljs.core.LazySeq(null,(function (){
var s__34977__$1 = s__34977;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__34977__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var chunk = cljs.core.first(xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__34977__$1,chunk,xs__6277__auto__,temp__5720__auto__){
return (function loom$alg_generic$bm_get_indicies_$_iter__34976_$_iter__34978(s__34979){
return (new cljs.core.LazySeq(null,((function (s__34977__$1,chunk,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__34979__$1 = s__34979;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__34979__$1);
if(temp__5720__auto____$1){
var s__34979__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__34979__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__34979__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__34981 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__34980 = (0);
while(true){
if((i__34980 < size__4522__auto__)){
var offset = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__34980);
var idx = ((chunk * loom.alg_generic.bits_per_long) + offset);
if(cljs.core.truth_(loom.alg_generic.bm_get(bitmap,idx))){
cljs.core.chunk_append(b__34981,idx);

var G__35533 = (i__34980 + (1));
i__34980 = G__35533;
continue;
} else {
var G__35534 = (i__34980 + (1));
i__34980 = G__35534;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34981),loom$alg_generic$bm_get_indicies_$_iter__34976_$_iter__34978(cljs.core.chunk_rest(s__34979__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34981),null);
}
} else {
var offset = cljs.core.first(s__34979__$2);
var idx = ((chunk * loom.alg_generic.bits_per_long) + offset);
if(cljs.core.truth_(loom.alg_generic.bm_get(bitmap,idx))){
return cljs.core.cons(idx,loom$alg_generic$bm_get_indicies_$_iter__34976_$_iter__34978(cljs.core.rest(s__34979__$2)));
} else {
var G__35537 = cljs.core.rest(s__34979__$2);
s__34979__$1 = G__35537;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__34977__$1,chunk,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__34977__$1,chunk,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(loom.alg_generic.bits_per_long)));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,loom$alg_generic$bm_get_indicies_$_iter__34976(cljs.core.rest(s__34977__$1)));
} else {
var G__35541 = cljs.core.rest(s__34977__$1);
s__34977__$1 = G__35541;
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

loom.alg_generic.Ancestry.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k34994,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__35026 = k34994;
var G__35026__$1 = (((G__35026 instanceof cljs.core.Keyword))?G__35026.fqn:null);
switch (G__35026__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34994,else__4388__auto__);

}
});

loom.alg_generic.Ancestry.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__35030){
var vec__35032 = p__35030;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35032,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35032,(1),null);
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

loom.alg_generic.Ancestry.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34993){
var self__ = this;
var G__34993__$1 = this;
return (new cljs.core.RecordIter((0),G__34993__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node->idx","node->idx",152705227),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4243__auto____$1 = (function (){var fexpr__35046 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1116202445 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__35046(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

loom.alg_generic.Ancestry.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34996,other34997){
var self__ = this;
var this34996__$1 = this;
return (((!((other34997 == null)))) && ((this34996__$1.constructor === other34997.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34996__$1.node__GT_idx,other34997.node__GT_idx)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34996__$1.idx__GT_node,other34997.idx__GT_node)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34996__$1.bitmaps,other34997.bitmaps)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34996__$1.__extmap,other34997.__extmap)));
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

loom.alg_generic.Ancestry.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__34993){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__35065 = cljs.core.keyword_identical_QMARK_;
var expr__35066 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__35075 = new cljs.core.Keyword(null,"node->idx","node->idx",152705227);
var G__35076 = expr__35066;
return (pred__35065.cljs$core$IFn$_invoke$arity$2 ? pred__35065.cljs$core$IFn$_invoke$arity$2(G__35075,G__35076) : pred__35065.call(null,G__35075,G__35076));
})())){
return (new loom.alg_generic.Ancestry(G__34993,self__.idx__GT_node,self__.bitmaps,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__35077 = new cljs.core.Keyword(null,"idx->node","idx->node",1811907175);
var G__35078 = expr__35066;
return (pred__35065.cljs$core$IFn$_invoke$arity$2 ? pred__35065.cljs$core$IFn$_invoke$arity$2(G__35077,G__35078) : pred__35065.call(null,G__35077,G__35078));
})())){
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,G__34993,self__.bitmaps,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__35079 = new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842);
var G__35080 = expr__35066;
return (pred__35065.cljs$core$IFn$_invoke$arity$2 ? pred__35065.cljs$core$IFn$_invoke$arity$2(G__35079,G__35080) : pred__35065.call(null,G__35079,G__35080));
})())){
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,G__34993,self__.__meta,self__.__extmap,null));
} else {
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__34993),null));
}
}
}
});

loom.alg_generic.Ancestry.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"node->idx","node->idx",152705227),self__.node__GT_idx,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),self__.idx__GT_node,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),self__.bitmaps,null))], null),self__.__extmap));
});

loom.alg_generic.Ancestry.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__34993){
var self__ = this;
var this__4384__auto____$1 = this;
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,G__34993,self__.__extmap,self__.__hash));
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
loom.alg_generic.map__GT_Ancestry = (function loom$alg_generic$map__GT_Ancestry(G__35016){
var extmap__4424__auto__ = (function (){var G__35096 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35016,new cljs.core.Keyword(null,"node->idx","node->idx",152705227),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842)], 0));
if(cljs.core.record_QMARK_(G__35016)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35096);
} else {
return G__35096;
}
})();
return (new loom.alg_generic.Ancestry(new cljs.core.Keyword(null,"node->idx","node->idx",152705227).cljs$core$IFn$_invoke$arity$1(G__35016),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175).cljs$core$IFn$_invoke$arity$1(G__35016),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842).cljs$core$IFn$_invoke$arity$1(G__35016),null,cljs.core.not_empty(extmap__4424__auto__),null));
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
var map__35111 = ancestry;
var map__35111__$1 = (((((!((map__35111 == null))))?(((((map__35111.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35111.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35111):map__35111);
var node__GT_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35111__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var idx__GT_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35111__$1,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175));
var bitmaps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35111__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
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
loom.alg_generic.ancestry_add.cljs$lang$applyTo = (function (seq35102){
var G__35103 = cljs.core.first(seq35102);
var seq35102__$1 = cljs.core.next(seq35102);
var G__35104 = cljs.core.first(seq35102__$1);
var seq35102__$2 = cljs.core.next(seq35102__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35103,G__35104,seq35102__$2);
});

/**
 * Finds if the 'parenter node is an ancestor of 'childer node for the given
 *   'ancestry cache.
 */
loom.alg_generic.ancestor_QMARK_ = (function loom$alg_generic$ancestor_QMARK_(ancestry,childer,parenter){
var map__35120 = ancestry;
var map__35120__$1 = (((((!((map__35120 == null))))?(((((map__35120.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35120.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35120):map__35120);
var node__GT_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35120__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var bitmaps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35120__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
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
var map__35129 = ancestry;
var map__35129__$1 = (((((!((map__35129 == null))))?(((((map__35129.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35129.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35129):map__35129);
var node__GT_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35129__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var idx__GT_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35129__$1,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175));
var bitmaps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35129__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
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
