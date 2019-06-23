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
var G__34187 = preds;
var G__34188 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,p1__34185_SHARP_);
return (loom.alg_generic.paths.cljs$core$IFn$_invoke$arity$2 ? loom.alg_generic.paths.cljs$core$IFn$_invoke$arity$2(G__34187,G__34188) : loom.alg_generic.paths.call(null,G__34187,G__34188));
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
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__34189_SHARP_){
var G__34190 = cljs.core.peek(p1__34189_SHARP_);
return (preds.cljs$core$IFn$_invoke$arity$1 ? preds.cljs$core$IFn$_invoke$arity$1(G__34190) : preds.call(null,G__34190));
}),loom.alg_generic.paths(preds,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null)));
});
/**
 * Converts a map of the form {node predecessor} to a spanning tree of the
 *   form {node [successors]}
 */
loom.alg_generic.preds__GT_span = (function loom$alg_generic$preds__GT_span(preds){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (span,p__34191){
var vec__34192 = p__34191;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34192,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34192,(1),null);
if(cljs.core.truth_(p)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(span,p,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var G__34195 = p;
var G__34196 = cljs.core.PersistentVector.EMPTY;
return (span.cljs$core$IFn$_invoke$arity$2 ? span.cljs$core$IFn$_invoke$arity$2(G__34195,G__34196) : span.call(null,G__34195,G__34196));
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
var len__4730__auto___35141 = arguments.length;
var i__4731__auto___35143 = (0);
while(true){
if((i__4731__auto___35143 < len__4730__auto___35141)){
args__4736__auto__.push((arguments[i__4731__auto___35143]));

var G__35145 = (i__4731__auto___35143 + (1));
i__4731__auto___35143 = G__35145;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__34210){
var map__34211 = p__34210;
var map__34211__$1 = (((((!((map__34211 == null))))?(((((map__34211.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34211.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34211):map__34211);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34211__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var step = ((function (map__34211,map__34211__$1,seen){
return (function loom$alg_generic$step(stack,seen__$1){
var temp__5720__auto__ = cljs.core.peek(stack);
if(cljs.core.truth_(temp__5720__auto__)){
var node = temp__5720__auto__;
if(cljs.core.contains_QMARK_(seen__$1,node)){
return loom$alg_generic$step(cljs.core.pop(stack),seen__$1);
} else {
var seen__$2 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,node);
var nbrs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(seen__$2,(successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(node) : successors.call(null,node)));
return (new cljs.core.LazySeq(null,((function (seen__$2,nbrs,node,temp__5720__auto__,map__34211,map__34211__$1,seen){
return (function (){
return cljs.core.cons(node,loom$alg_generic$step(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(stack),nbrs),seen__$2));
});})(seen__$2,nbrs,node,temp__5720__auto__,map__34211,map__34211__$1,seen))
,null,null));
}
} else {
return null;
}
});})(map__34211,map__34211__$1,seen))
;
return step(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null),seen);
});

loom.alg_generic.pre_traverse.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.pre_traverse.cljs$lang$applyTo = (function (seq34199){
var G__34200 = cljs.core.first(seq34199);
var seq34199__$1 = cljs.core.next(seq34199);
var G__34201 = cljs.core.first(seq34199__$1);
var seq34199__$2 = cljs.core.next(seq34199__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34200,G__34201,seq34199__$2);
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
var len__4730__auto___35158 = arguments.length;
var i__4731__auto___35159 = (0);
while(true){
if((i__4731__auto___35159 < len__4730__auto___35158)){
args__4736__auto__.push((arguments[i__4731__auto___35159]));

var G__35160 = (i__4731__auto___35159 + (1));
i__4731__auto___35159 = G__35160;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__34286){
var map__34287 = p__34286;
var map__34287__$1 = (((((!((map__34287 == null))))?(((((map__34287.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34287.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34287):map__34287);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34287__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var step = ((function (map__34287,map__34287__$1,seen){
return (function loom$alg_generic$step(successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1){
while(true){
var temp__5718__auto__ = cljs.core.first(nbrs);
if(cljs.core.truth_(temp__5718__auto__)){
var nbr = temp__5718__auto__;
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null),(new cljs.core.LazySeq(null,((function (successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1,nbr,temp__5718__auto__,map__34287,map__34287__$1,seen){
return (function (){
var seen__$2 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,start__$1);
if(cljs.core.truth_((seen__$2.cljs$core$IFn$_invoke$arity$1 ? seen__$2.cljs$core$IFn$_invoke$arity$1(nbr) : seen__$2.call(null,nbr)))){
return loom$alg_generic$step(successors__$1,start__$1,cljs.core.next(nbrs),stack,nbrstack,seen__$2);
} else {
return loom$alg_generic$step(successors__$1,nbr,(successors__$1.cljs$core$IFn$_invoke$arity$1 ? successors__$1.cljs$core$IFn$_invoke$arity$1(nbr) : successors__$1.call(null,nbr)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,start__$1),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nbrstack,cljs.core.next(nbrs)),seen__$2);
}
});})(successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1,nbr,temp__5718__auto__,map__34287,map__34287__$1,seen))
,null,null)));
} else {
var temp__5720__auto__ = cljs.core.peek(stack);
if(cljs.core.truth_(temp__5720__auto__)){
var parent = temp__5720__auto__;
var G__35169 = successors__$1;
var G__35170 = parent;
var G__35171 = cljs.core.peek(nbrstack);
var G__35172 = cljs.core.pop(stack);
var G__35173 = cljs.core.pop(nbrstack);
var G__35174 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,start__$1);
successors__$1 = G__35169;
start__$1 = G__35170;
nbrs = G__35171;
stack = G__35172;
nbrstack = G__35173;
seen__$1 = G__35174;
continue;
} else {
return null;
}
}
break;
}
});})(map__34287,map__34287__$1,seen))
;
if(cljs.core.truth_((seen.cljs$core$IFn$_invoke$arity$1 ? seen.cljs$core$IFn$_invoke$arity$1(start) : seen.call(null,start)))){
return null;
} else {
return step(successors,start,(successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(start) : successors.call(null,start)),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,start));
}
});

loom.alg_generic.pre_edge_traverse.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.pre_edge_traverse.cljs$lang$applyTo = (function (seq34281){
var G__34282 = cljs.core.first(seq34281);
var seq34281__$1 = cljs.core.next(seq34281);
var G__34283 = cljs.core.first(seq34281__$1);
var seq34281__$2 = cljs.core.next(seq34281__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34282,G__34283,seq34281__$2);
});

/**
 * Returns a depth-first spanning tree of the form {node [successors]}
 */
loom.alg_generic.pre_span = (function loom$alg_generic$pre_span(var_args){
var args__4736__auto__ = [];
var len__4730__auto___35177 = arguments.length;
var i__4731__auto___35178 = (0);
while(true){
if((i__4731__auto___35178 < len__4730__auto___35177)){
args__4736__auto__.push((arguments[i__4731__auto___35178]));

var G__35179 = (i__4731__auto___35178 + (1));
i__4731__auto___35178 = G__35179;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__34320){
var map__34324 = p__34320;
var map__34324__$1 = (((((!((map__34324 == null))))?(((((map__34324.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34324.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34324):map__34324);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34324__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34324__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__35185 = seen__$2;
var G__35186 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(preds,u,v);
var G__35187 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,u);
seen__$1 = G__35185;
preds = G__35186;
stack = G__35187;
continue;
} else {
var G__35188 = seen__$2;
var G__35189 = preds;
var G__35190 = cljs.core.pop(stack);
seen__$1 = G__35188;
preds = G__35189;
stack = G__35190;
continue;
}
}
break;
}
});

loom.alg_generic.pre_span.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.pre_span.cljs$lang$applyTo = (function (seq34316){
var G__34317 = cljs.core.first(seq34316);
var seq34316__$1 = cljs.core.next(seq34316);
var G__34318 = cljs.core.first(seq34316__$1);
var seq34316__$2 = cljs.core.next(seq34316__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34317,G__34318,seq34316__$2);
});

/**
 * Traverses a graph depth-first postorder from start, successors
 *   being a function that returns adjacent nodes. Returns a vector
 */
loom.alg_generic.post_traverse = (function loom$alg_generic$post_traverse(var_args){
var args__4736__auto__ = [];
var len__4730__auto___35193 = arguments.length;
var i__4731__auto___35194 = (0);
while(true){
if((i__4731__auto___35194 < len__4730__auto___35193)){
args__4736__auto__.push((arguments[i__4731__auto___35194]));

var G__35196 = (i__4731__auto___35194 + (1));
i__4731__auto___35194 = G__35196;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__34346){
var map__34348 = p__34346;
var map__34348__$1 = (((((!((map__34348 == null))))?(((((map__34348.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34348.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34348):map__34348);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34348__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34348__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__35199 = seen__$2;
var G__35200 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,v);
var G__35201 = cljs.core.pop(stack);
seen__$1 = G__35199;
result = G__35200;
stack = G__35201;
continue;
} else {
var G__35202 = seen__$2;
var G__35203 = result;
var G__35204 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,cljs.core.first(nbrs));
seen__$1 = G__35202;
result = G__35203;
stack = G__35204;
continue;
}
}
break;
}
});

loom.alg_generic.post_traverse.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.post_traverse.cljs$lang$applyTo = (function (seq34339){
var G__34341 = cljs.core.first(seq34339);
var seq34339__$1 = cljs.core.next(seq34339);
var G__34342 = cljs.core.first(seq34339__$1);
var seq34339__$2 = cljs.core.next(seq34339__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34341,G__34342,seq34339__$2);
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
var len__4730__auto___35207 = arguments.length;
var i__4731__auto___35208 = (0);
while(true){
if((i__4731__auto___35208 < len__4730__auto___35207)){
args__4736__auto__.push((arguments[i__4731__auto___35208]));

var G__35209 = (i__4731__auto___35208 + (1));
i__4731__auto___35208 = G__35209;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__34371){
var map__34372 = p__34371;
var map__34372__$1 = (((((!((map__34372 == null))))?(((((map__34372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34372.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34372):map__34372);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34372__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34372__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__35213 = start__$1;
var G__35214 = cljs.core.next(nbrs);
var G__35215 = stack;
var G__35216 = nbrstack;
var G__35217 = seen__$2;
var G__35218 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(edges,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null));
start__$1 = G__35213;
nbrs = G__35214;
stack = G__35215;
nbrstack = G__35216;
seen__$1 = G__35217;
edges = G__35218;
continue;
} else {
var G__35223 = nbr;
var G__35224 = (successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(nbr) : successors.call(null,nbr));
var G__35225 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,start__$1);
var G__35226 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nbrstack,cljs.core.next(nbrs));
var G__35227 = seen__$2;
var G__35228 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(edges,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null));
start__$1 = G__35223;
nbrs = G__35224;
stack = G__35225;
nbrstack = G__35226;
seen__$1 = G__35227;
edges = G__35228;
continue;
}
} else {
var temp__5718__auto____$1 = cljs.core.peek(stack);
if(cljs.core.truth_(temp__5718__auto____$1)){
var parent = temp__5718__auto____$1;
var G__35232 = parent;
var G__35233 = cljs.core.peek(nbrstack);
var G__35234 = cljs.core.pop(stack);
var G__35235 = cljs.core.pop(nbrstack);
var G__35236 = seen__$2;
var G__35237 = edges;
start__$1 = G__35232;
nbrs = G__35233;
stack = G__35234;
nbrstack = G__35235;
seen__$1 = G__35236;
edges = G__35237;
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
loom.alg_generic.post_edge_traverse.cljs$lang$applyTo = (function (seq34366){
var G__34367 = cljs.core.first(seq34366);
var seq34366__$1 = cljs.core.next(seq34366);
var G__34368 = cljs.core.first(seq34366__$1);
var seq34366__$2 = cljs.core.next(seq34366__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34367,G__34368,seq34366__$2);
});

/**
 * Topological sort of a component of a (presumably) directed graph.
 *   Returns nil if the graph contains any cycles. See loom.alg/topsort
 *   for a complete topological sort
 */
loom.alg_generic.topsort_component = (function loom$alg_generic$topsort_component(var_args){
var G__34394 = arguments.length;
switch (G__34394) {
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
var G__35252 = seen__$2;
var G__35253 = explored__$1;
var G__35254 = result;
var G__35255 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,cljs.core.first(us));
seen__$1 = G__35252;
explored__$1 = G__35253;
result = G__35254;
stack = G__35255;
continue;
}
} else {
var G__35256 = seen__$2;
var G__35257 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(explored__$1,v);
var G__35258 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,v);
var G__35259 = cljs.core.pop(stack);
seen__$1 = G__35256;
explored__$1 = G__35257;
result = G__35258;
stack = G__35259;
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
var len__4730__auto___35260 = arguments.length;
var i__4731__auto___35261 = (0);
while(true){
if((i__4731__auto___35261 < len__4730__auto___35260)){
args__4736__auto__.push((arguments[i__4731__auto___35261]));

var G__35262 = (i__4731__auto___35261 + (1));
i__4731__auto___35261 = G__35262;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__34432){
var map__34437 = p__34432;
var map__34437__$1 = (((((!((map__34437 == null))))?(((((map__34437.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34437.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34437):map__34437);
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34437__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var when = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34437__$1,new cljs.core.Keyword(null,"when","when",-576417306));
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34437__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
var f__$1 = (function (){var or__4131__auto__ = f;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return ((function (or__4131__auto__,map__34437,map__34437__$1,f,when,seen){
return (function (n,p,d){
return n;
});
;})(or__4131__auto__,map__34437,map__34437__$1,f,when,seen))
}
})();
var nbr_pred = (function (){var or__4131__auto__ = when;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.constantly(true);
}
})();
var step = ((function (f__$1,nbr_pred,map__34437,map__34437__$1,f,when,seen){
return (function loom$alg_generic$step(queue,preds){
var temp__5720__auto__ = cljs.core.peek(queue);
if(cljs.core.truth_(temp__5720__auto__)){
var vec__34490 = temp__5720__auto__;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34490,(0),null);
var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34490,(1),null);
return cljs.core.cons((f__$1.cljs$core$IFn$_invoke$arity$3 ? f__$1.cljs$core$IFn$_invoke$arity$3(node,preds,depth) : f__$1.call(null,node,preds,depth)),(new cljs.core.LazySeq(null,((function (vec__34490,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34437,map__34437__$1,f,when,seen){
return (function (){
var nbrs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__34490,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34437,map__34437__$1,f,when,seen){
return (function (p1__34423_SHARP_){
var G__34493 = p1__34423_SHARP_;
var G__34494 = node;
var G__34495 = (depth + (1));
return (nbr_pred.cljs$core$IFn$_invoke$arity$3 ? nbr_pred.cljs$core$IFn$_invoke$arity$3(G__34493,G__34494,G__34495) : nbr_pred.call(null,G__34493,G__34494,G__34495));
});})(vec__34490,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34437,map__34437__$1,f,when,seen))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__34490,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34437,map__34437__$1,f,when,seen){
return (function (p1__34422_SHARP_){
return cljs.core.contains_QMARK_(preds,p1__34422_SHARP_);
});})(vec__34490,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34437,map__34437__$1,f,when,seen))
,(successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(node) : successors.call(null,node))));
return loom$alg_generic$step(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(queue),(function (){var iter__4523__auto__ = ((function (nbrs,vec__34490,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34437,map__34437__$1,f,when,seen){
return (function loom$alg_generic$step_$_iter__34496(s__34497){
return (new cljs.core.LazySeq(null,((function (nbrs,vec__34490,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34437,map__34437__$1,f,when,seen){
return (function (){
var s__34497__$1 = s__34497;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__34497__$1);
if(temp__5720__auto____$1){
var s__34497__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__34497__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__34497__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__34500 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__34499 = (0);
while(true){
if((i__34499 < size__4522__auto__)){
var nbr = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__34499);
cljs.core.chunk_append(b__34500,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,(depth + (1))], null));

var G__35271 = (i__34499 + (1));
i__34499 = G__35271;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34500),loom$alg_generic$step_$_iter__34496(cljs.core.chunk_rest(s__34497__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34500),null);
}
} else {
var nbr = cljs.core.first(s__34497__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,(depth + (1))], null),loom$alg_generic$step_$_iter__34496(cljs.core.rest(s__34497__$2)));
}
} else {
return null;
}
break;
}
});})(nbrs,vec__34490,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34437,map__34437__$1,f,when,seen))
,null,null));
});})(nbrs,vec__34490,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34437,map__34437__$1,f,when,seen))
;
return iter__4523__auto__(nbrs);
})()),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (nbrs,vec__34490,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34437,map__34437__$1,f,when,seen){
return (function (p1__34424_SHARP_,p2__34425_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__34424_SHARP_,p2__34425_SHARP_,node);
});})(nbrs,vec__34490,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34437,map__34437__$1,f,when,seen))
,preds,nbrs));
});})(vec__34490,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34437,map__34437__$1,f,when,seen))
,null,null)));
} else {
return null;
}
});})(f__$1,nbr_pred,map__34437,map__34437__$1,f,when,seen))
;
return step(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentQueue.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,(0)], null)),((cljs.core.map_QMARK_(seen))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(seen,start,null):cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.createAsIfByAssoc([start,null]),(function (){var iter__4523__auto__ = ((function (f__$1,nbr_pred,map__34437,map__34437__$1,f,when,seen){
return (function loom$alg_generic$iter__34513(s__34514){
return (new cljs.core.LazySeq(null,((function (f__$1,nbr_pred,map__34437,map__34437__$1,f,when,seen){
return (function (){
var s__34514__$1 = s__34514;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__34514__$1);
if(temp__5720__auto__){
var s__34514__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__34514__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__34514__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__34516 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__34515 = (0);
while(true){
if((i__34515 < size__4522__auto__)){
var s = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__34515);
cljs.core.chunk_append(b__34516,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,null], null));

var G__35279 = (i__34515 + (1));
i__34515 = G__35279;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34516),loom$alg_generic$iter__34513(cljs.core.chunk_rest(s__34514__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34516),null);
}
} else {
var s = cljs.core.first(s__34514__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,null], null),loom$alg_generic$iter__34513(cljs.core.rest(s__34514__$2)));
}
} else {
return null;
}
break;
}
});})(f__$1,nbr_pred,map__34437,map__34437__$1,f,when,seen))
,null,null));
});})(f__$1,nbr_pred,map__34437,map__34437__$1,f,when,seen))
;
return iter__4523__auto__(seen);
})())));
});

loom.alg_generic.bf_traverse.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.bf_traverse.cljs$lang$applyTo = (function (seq34426){
var G__34427 = cljs.core.first(seq34426);
var seq34426__$1 = cljs.core.next(seq34426);
var G__34428 = cljs.core.first(seq34426__$1);
var seq34426__$2 = cljs.core.next(seq34426__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34427,G__34428,seq34426__$2);
});

/**
 * Return a breadth-first spanning tree of the form {node
 *   [successors]}
 */
loom.alg_generic.bf_span = (function loom$alg_generic$bf_span(var_args){
var args__4736__auto__ = [];
var len__4730__auto___35281 = arguments.length;
var i__4731__auto___35282 = (0);
while(true){
if((i__4731__auto___35282 < len__4730__auto___35281)){
args__4736__auto__.push((arguments[i__4731__auto___35282]));

var G__35283 = (i__4731__auto___35282 + (1));
i__4731__auto___35282 = G__35283;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__34536){
var map__34537 = p__34536;
var map__34537__$1 = (((((!((map__34537 == null))))?(((((map__34537.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34537.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34537):map__34537);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34537__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
return loom.alg_generic.preds__GT_span(cljs.core.last(loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic(successors,start,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"f","f",-1597136552),((function (map__34537,map__34537__$1,seen){
return (function (_,pm,___$1){
return pm;
});})(map__34537,map__34537__$1,seen))
,new cljs.core.Keyword(null,"seen","seen",-518999789),seen], 0))));
});

loom.alg_generic.bf_span.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.bf_span.cljs$lang$applyTo = (function (seq34528){
var G__34530 = cljs.core.first(seq34528);
var seq34528__$1 = cljs.core.next(seq34528);
var G__34531 = cljs.core.first(seq34528__$1);
var seq34528__$2 = cljs.core.next(seq34528__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34530,G__34531,seq34528__$2);
});

/**
 * Returns a path from start to end with the fewest hops (i.e. irrespective
 *   of edge weights), successors being a function that returns adjacent nodes
 */
loom.alg_generic.bf_path = (function loom$alg_generic$bf_path(var_args){
var args__4736__auto__ = [];
var len__4730__auto___35289 = arguments.length;
var i__4731__auto___35290 = (0);
while(true){
if((i__4731__auto___35290 < len__4730__auto___35289)){
args__4736__auto__.push((arguments[i__4731__auto___35290]));

var G__35291 = (i__4731__auto___35290 + (1));
i__4731__auto___35290 = G__35291;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,end,p__34569){
var map__34570 = p__34569;
var map__34570__$1 = (((((!((map__34570 == null))))?(((((map__34570.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34570.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34570):map__34570);
var opts = map__34570__$1;
var opts__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.vector], null)], 0));
var temp__5720__auto__ = cljs.core.some(((function (opts__$1,map__34570,map__34570__$1,opts){
return (function (p__34574){
var vec__34575 = p__34574;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34575,(0),null);
var pm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34575,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34575,(2),null);
if(cljs.core.truth_((pm.cljs$core$IFn$_invoke$arity$1 ? pm.cljs$core$IFn$_invoke$arity$1(end) : pm.call(null,end)))){
return pm;
} else {
return null;
}
});})(opts__$1,map__34570,map__34570__$1,opts))
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
loom.alg_generic.bf_path.cljs$lang$applyTo = (function (seq34548){
var G__34550 = cljs.core.first(seq34548);
var seq34548__$1 = cljs.core.next(seq34548);
var G__34551 = cljs.core.first(seq34548__$1);
var seq34548__$2 = cljs.core.next(seq34548__$1);
var G__34552 = cljs.core.first(seq34548__$2);
var seq34548__$3 = cljs.core.next(seq34548__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34550,G__34551,G__34552,seq34548__$3);
});

/**
 * Returns a lazy-seq of the keys that exist in both m1 and m2
 */
loom.alg_generic.shared_keys = (function loom$alg_generic$shared_keys(m1,m2){
while(true){
if((cljs.core.count(m2) < cljs.core.count(m1))){
var G__35296 = m2;
var G__35297 = m1;
m1 = G__35296;
m2 = G__35297;
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
var iter__4523__auto__ = (function loom$alg_generic$reverse_edges_$_iter__34593(s__34594){
return (new cljs.core.LazySeq(null,(function (){
var s__34594__$1 = s__34594;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__34594__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var node = cljs.core.first(xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__34594__$1,node,xs__6277__auto__,temp__5720__auto__){
return (function loom$alg_generic$reverse_edges_$_iter__34593_$_iter__34595(s__34596){
return (new cljs.core.LazySeq(null,((function (s__34594__$1,node,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__34596__$1 = s__34596;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__34596__$1);
if(temp__5720__auto____$1){
var s__34596__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__34596__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__34596__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__34598 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__34597 = (0);
while(true){
if((i__34597 < size__4522__auto__)){
var nbr = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__34597);
if((!(cljs.core.contains_QMARK_(coll,nbr)))){
cljs.core.chunk_append(b__34598,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,node], null));

var G__35302 = (i__34597 + (1));
i__34597 = G__35302;
continue;
} else {
var G__35303 = (i__34597 + (1));
i__34597 = G__35303;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34598),loom$alg_generic$reverse_edges_$_iter__34593_$_iter__34595(cljs.core.chunk_rest(s__34596__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34598),null);
}
} else {
var nbr = cljs.core.first(s__34596__$2);
if((!(cljs.core.contains_QMARK_(coll,nbr)))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,node], null),loom$alg_generic$reverse_edges_$_iter__34593_$_iter__34595(cljs.core.rest(s__34596__$2)));
} else {
var G__35308 = cljs.core.rest(s__34596__$2);
s__34596__$1 = G__35308;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__34594__$1,node,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__34594__$1,node,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__((successor_fn.cljs$core$IFn$_invoke$arity$1 ? successor_fn.cljs$core$IFn$_invoke$arity$1(node) : successor_fn.call(null,node))));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,loom$alg_generic$reverse_edges_$_iter__34593(cljs.core.rest(s__34594__$1)));
} else {
var G__35311 = cljs.core.rest(s__34594__$1);
s__34594__$1 = G__35311;
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
var iter__4523__auto__ = (function loom$alg_generic$conj_paths_$_iter__34605(s__34606){
return (new cljs.core.LazySeq(null,(function (){
var s__34606__$1 = s__34606;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__34606__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var n = cljs.core.first(xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__34606__$1,n,xs__6277__auto__,temp__5720__auto__){
return (function loom$alg_generic$conj_paths_$_iter__34605_$_iter__34607(s__34608){
return (new cljs.core.LazySeq(null,((function (s__34606__$1,n,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__34608__$1 = s__34608;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__34608__$1);
if(temp__5720__auto____$1){
var xs__6277__auto____$1 = temp__5720__auto____$1;
var from = cljs.core.first(xs__6277__auto____$1);
var iterys__4519__auto__ = ((function (s__34608__$1,s__34606__$1,from,xs__6277__auto____$1,temp__5720__auto____$1,n,xs__6277__auto__,temp__5720__auto__){
return (function loom$alg_generic$conj_paths_$_iter__34605_$_iter__34607_$_iter__34609(s__34610){
return (new cljs.core.LazySeq(null,((function (s__34608__$1,s__34606__$1,from,xs__6277__auto____$1,temp__5720__auto____$1,n,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__34610__$1 = s__34610;
while(true){
var temp__5720__auto____$2 = cljs.core.seq(s__34610__$1);
if(temp__5720__auto____$2){
var s__34610__$2 = temp__5720__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__34610__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__34610__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__34612 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__34611 = (0);
while(true){
if((i__34611 < size__4522__auto__)){
var to = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__34611);
cljs.core.chunk_append(b__34612,cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(from,to)));

var G__35317 = (i__34611 + (1));
i__34611 = G__35317;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34612),loom$alg_generic$conj_paths_$_iter__34605_$_iter__34607_$_iter__34609(cljs.core.chunk_rest(s__34610__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34612),null);
}
} else {
var to = cljs.core.first(s__34610__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(from,to)),loom$alg_generic$conj_paths_$_iter__34605_$_iter__34607_$_iter__34609(cljs.core.rest(s__34610__$2)));
}
} else {
return null;
}
break;
}
});})(s__34608__$1,s__34606__$1,from,xs__6277__auto____$1,temp__5720__auto____$1,n,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__34608__$1,s__34606__$1,from,xs__6277__auto____$1,temp__5720__auto____$1,n,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,loom.alg_generic.trace_paths(to_map,n))));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,loom$alg_generic$conj_paths_$_iter__34605_$_iter__34607(cljs.core.rest(s__34608__$1)));
} else {
var G__35328 = cljs.core.rest(s__34608__$1);
s__34608__$1 = G__35328;
continue;
}
} else {
return null;
}
break;
}
});})(s__34606__$1,n,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__34606__$1,n,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.reverse,loom.alg_generic.trace_paths(from_map,n))));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,loom$alg_generic$conj_paths_$_iter__34605(cljs.core.rest(s__34606__$1)));
} else {
var G__35331 = cljs.core.rest(s__34606__$1);
s__34606__$1 = G__35331;
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
return (function (p1__34620_SHARP_){
return cljs.core.contains_QMARK_(coll,p1__34620_SHARP_);
});})(find_succs,find_preds))
,q));
});})(find_succs,find_preds))
;
var map_set_pairs = ((function (find_succs,find_preds,overlaps){
return (function (map,pairs){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (find_succs,find_preds,overlaps){
return (function (map__$1,p__34623){
var vec__34624 = p__34623;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34624,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34624,(1),null);
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
var G__35361 = outgoing__$1;
var G__35362 = incoming;
var G__35363 = q1__$1;
var G__35364 = q2;
outgoing = G__35361;
incoming = G__35362;
q1 = G__35363;
q2 = G__35364;
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
var G__35365 = outgoing;
var G__35366 = incoming__$1;
var G__35367 = q1;
var G__35368 = q2__$1;
outgoing = G__35365;
incoming = G__35366;
q1 = G__35367;
q2 = G__35368;
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
var G__34696 = arguments.length;
switch (G__34696) {
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
var step = (function loom$alg_generic$step(p__34733){
var vec__34736 = p__34733;
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34736,(0),null);
var pq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34736,(1),null);
var temp__5720__auto__ = cljs.core.first(pq);
if(cljs.core.truth_(temp__5720__auto__)){
var vec__34739 = temp__5720__auto__;
var dist_su = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34739,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34739,(1),null);
var u = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34739,(2),null);
var fpq = vec__34739;
return cljs.core.cons((f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(u,state) : f.call(null,u,state)),(new cljs.core.LazySeq(null,((function (vec__34739,dist_su,_,u,fpq,temp__5720__auto__,vec__34736,state,pq){
return (function (){
return loom$alg_generic$step(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__34739,dist_su,_,u,fpq,temp__5720__auto__,vec__34736,state,pq){
return (function (p__34745,v){
var vec__34747 = p__34745;
var state__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34747,(0),null);
var pq__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34747,(1),null);
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
});})(vec__34739,dist_su,_,u,fpq,temp__5720__auto__,vec__34736,state,pq))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(pq,fpq)], null),(successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(u) : successors.call(null,u))));
});})(vec__34739,dist_su,_,u,fpq,temp__5720__auto__,vec__34736,state,pq))
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (span,p__34755){
var vec__34757 = p__34755;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34757,(0),null);
var vec__34760 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34757,(1),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34760,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34760,(1),null);
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
var temp__5718__auto__ = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__34771){
var vec__34772 = p__34771;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34772,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34772,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(end,node);
}),loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$3(successors,dist,start)));
if(cljs.core.truth_(temp__5718__auto__)){
var vec__34776 = temp__5718__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34776,(0),null);
var end_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34776,(1),null);
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
return cljs.core.long$((function (){var G__34797 = (bits / loom.alg_generic.bits_per_long);
return Math.ceil(G__34797);
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
var len__4730__auto___35382 = arguments.length;
var i__4731__auto___35383 = (0);
while(true){
if((i__4731__auto___35383 < len__4730__auto___35382)){
args__4736__auto__.push((arguments[i__4731__auto___35383]));

var G__35384 = (i__4731__auto___35383 + (1));
i__4731__auto___35383 = G__35384;
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
var seq__34827_35389 = cljs.core.seq(cljs.core.rest(bitmaps));
var chunk__34834_35390 = null;
var count__34835_35391 = (0);
var i__34836_35392 = (0);
while(true){
if((i__34836_35392 < count__34835_35391)){
var bitmap_35393 = chunk__34834_35390.cljs$core$IIndexed$_nth$arity$2(null,i__34836_35392);
var seq__34837_35394 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.list,bitmap_35393));
var chunk__34839_35395 = null;
var count__34840_35396 = (0);
var i__34841_35397 = (0);
while(true){
if((i__34841_35397 < count__34840_35396)){
var vec__34905_35399 = chunk__34839_35395.cljs$core$IIndexed$_nth$arity$2(null,i__34841_35397);
var idx_35400 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34905_35399,(0),null);
var value_35401 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34905_35399,(1),null);
var masked_value_35405 = (value_35401 | (new_bitmap[idx_35400]));
(new_bitmap[idx_35400] = masked_value_35405);


var G__35406 = seq__34837_35394;
var G__35407 = chunk__34839_35395;
var G__35408 = count__34840_35396;
var G__35409 = (i__34841_35397 + (1));
seq__34837_35394 = G__35406;
chunk__34839_35395 = G__35407;
count__34840_35396 = G__35408;
i__34841_35397 = G__35409;
continue;
} else {
var temp__5720__auto___35410 = cljs.core.seq(seq__34837_35394);
if(temp__5720__auto___35410){
var seq__34837_35411__$1 = temp__5720__auto___35410;
if(cljs.core.chunked_seq_QMARK_(seq__34837_35411__$1)){
var c__4550__auto___35412 = cljs.core.chunk_first(seq__34837_35411__$1);
var G__35413 = cljs.core.chunk_rest(seq__34837_35411__$1);
var G__35414 = c__4550__auto___35412;
var G__35415 = cljs.core.count(c__4550__auto___35412);
var G__35416 = (0);
seq__34837_35394 = G__35413;
chunk__34839_35395 = G__35414;
count__34840_35396 = G__35415;
i__34841_35397 = G__35416;
continue;
} else {
var vec__34909_35418 = cljs.core.first(seq__34837_35411__$1);
var idx_35419 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34909_35418,(0),null);
var value_35420 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34909_35418,(1),null);
var masked_value_35422 = (value_35420 | (new_bitmap[idx_35419]));
(new_bitmap[idx_35419] = masked_value_35422);


var G__35423 = cljs.core.next(seq__34837_35411__$1);
var G__35424 = null;
var G__35425 = (0);
var G__35426 = (0);
seq__34837_35394 = G__35423;
chunk__34839_35395 = G__35424;
count__34840_35396 = G__35425;
i__34841_35397 = G__35426;
continue;
}
} else {
}
}
break;
}

var G__35427 = seq__34827_35389;
var G__35428 = chunk__34834_35390;
var G__35429 = count__34835_35391;
var G__35430 = (i__34836_35392 + (1));
seq__34827_35389 = G__35427;
chunk__34834_35390 = G__35428;
count__34835_35391 = G__35429;
i__34836_35392 = G__35430;
continue;
} else {
var temp__5720__auto___35431 = cljs.core.seq(seq__34827_35389);
if(temp__5720__auto___35431){
var seq__34827_35432__$1 = temp__5720__auto___35431;
if(cljs.core.chunked_seq_QMARK_(seq__34827_35432__$1)){
var c__4550__auto___35433 = cljs.core.chunk_first(seq__34827_35432__$1);
var G__35434 = cljs.core.chunk_rest(seq__34827_35432__$1);
var G__35435 = c__4550__auto___35433;
var G__35436 = cljs.core.count(c__4550__auto___35433);
var G__35437 = (0);
seq__34827_35389 = G__35434;
chunk__34834_35390 = G__35435;
count__34835_35391 = G__35436;
i__34836_35392 = G__35437;
continue;
} else {
var bitmap_35438 = cljs.core.first(seq__34827_35432__$1);
var seq__34828_35439 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.list,bitmap_35438));
var chunk__34830_35440 = null;
var count__34831_35441 = (0);
var i__34832_35442 = (0);
while(true){
if((i__34832_35442 < count__34831_35441)){
var vec__34947_35443 = chunk__34830_35440.cljs$core$IIndexed$_nth$arity$2(null,i__34832_35442);
var idx_35444 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34947_35443,(0),null);
var value_35445 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34947_35443,(1),null);
var masked_value_35446 = (value_35445 | (new_bitmap[idx_35444]));
(new_bitmap[idx_35444] = masked_value_35446);


var G__35448 = seq__34828_35439;
var G__35449 = chunk__34830_35440;
var G__35450 = count__34831_35441;
var G__35451 = (i__34832_35442 + (1));
seq__34828_35439 = G__35448;
chunk__34830_35440 = G__35449;
count__34831_35441 = G__35450;
i__34832_35442 = G__35451;
continue;
} else {
var temp__5720__auto___35452__$1 = cljs.core.seq(seq__34828_35439);
if(temp__5720__auto___35452__$1){
var seq__34828_35453__$1 = temp__5720__auto___35452__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34828_35453__$1)){
var c__4550__auto___35454 = cljs.core.chunk_first(seq__34828_35453__$1);
var G__35455 = cljs.core.chunk_rest(seq__34828_35453__$1);
var G__35456 = c__4550__auto___35454;
var G__35457 = cljs.core.count(c__4550__auto___35454);
var G__35458 = (0);
seq__34828_35439 = G__35455;
chunk__34830_35440 = G__35456;
count__34831_35441 = G__35457;
i__34832_35442 = G__35458;
continue;
} else {
var vec__34951_35459 = cljs.core.first(seq__34828_35453__$1);
var idx_35460 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34951_35459,(0),null);
var value_35461 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34951_35459,(1),null);
var masked_value_35462 = (value_35461 | (new_bitmap[idx_35460]));
(new_bitmap[idx_35460] = masked_value_35462);


var G__35463 = cljs.core.next(seq__34828_35453__$1);
var G__35464 = null;
var G__35465 = (0);
var G__35466 = (0);
seq__34828_35439 = G__35463;
chunk__34830_35440 = G__35464;
count__34831_35441 = G__35465;
i__34832_35442 = G__35466;
continue;
}
} else {
}
}
break;
}

var G__35467 = cljs.core.next(seq__34827_35432__$1);
var G__35468 = null;
var G__35469 = (0);
var G__35470 = (0);
seq__34827_35389 = G__35467;
chunk__34834_35390 = G__35468;
count__34835_35391 = G__35469;
i__34836_35392 = G__35470;
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
loom.alg_generic.bm_or.cljs$lang$applyTo = (function (seq34822){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34822));
});

/**
 * Get the indicies of set bits in 'bitmap.
 */
loom.alg_generic.bm_get_indicies = (function loom$alg_generic$bm_get_indicies(bitmap){
var iter__4523__auto__ = (function loom$alg_generic$bm_get_indicies_$_iter__34974(s__34975){
return (new cljs.core.LazySeq(null,(function (){
var s__34975__$1 = s__34975;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__34975__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var chunk = cljs.core.first(xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__34975__$1,chunk,xs__6277__auto__,temp__5720__auto__){
return (function loom$alg_generic$bm_get_indicies_$_iter__34974_$_iter__34976(s__34977){
return (new cljs.core.LazySeq(null,((function (s__34975__$1,chunk,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__34977__$1 = s__34977;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__34977__$1);
if(temp__5720__auto____$1){
var s__34977__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__34977__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__34977__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__34979 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__34978 = (0);
while(true){
if((i__34978 < size__4522__auto__)){
var offset = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__34978);
var idx = ((chunk * loom.alg_generic.bits_per_long) + offset);
if(cljs.core.truth_(loom.alg_generic.bm_get(bitmap,idx))){
cljs.core.chunk_append(b__34979,idx);

var G__35480 = (i__34978 + (1));
i__34978 = G__35480;
continue;
} else {
var G__35482 = (i__34978 + (1));
i__34978 = G__35482;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34979),loom$alg_generic$bm_get_indicies_$_iter__34974_$_iter__34976(cljs.core.chunk_rest(s__34977__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34979),null);
}
} else {
var offset = cljs.core.first(s__34977__$2);
var idx = ((chunk * loom.alg_generic.bits_per_long) + offset);
if(cljs.core.truth_(loom.alg_generic.bm_get(bitmap,idx))){
return cljs.core.cons(idx,loom$alg_generic$bm_get_indicies_$_iter__34974_$_iter__34976(cljs.core.rest(s__34977__$2)));
} else {
var G__35487 = cljs.core.rest(s__34977__$2);
s__34977__$1 = G__35487;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__34975__$1,chunk,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__34975__$1,chunk,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(loom.alg_generic.bits_per_long)));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,loom$alg_generic$bm_get_indicies_$_iter__34974(cljs.core.rest(s__34975__$1)));
} else {
var G__35488 = cljs.core.rest(s__34975__$1);
s__34975__$1 = G__35488;
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

loom.alg_generic.Ancestry.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k34987,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__35022 = k34987;
var G__35022__$1 = (((G__35022 instanceof cljs.core.Keyword))?G__35022.fqn:null);
switch (G__35022__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34987,else__4388__auto__);

}
});

loom.alg_generic.Ancestry.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__35025){
var vec__35026 = p__35025;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35026,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35026,(1),null);
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

loom.alg_generic.Ancestry.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34986){
var self__ = this;
var G__34986__$1 = this;
return (new cljs.core.RecordIter((0),G__34986__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node->idx","node->idx",152705227),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4243__auto____$1 = (function (){var fexpr__35038 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1116202445 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__35038(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

loom.alg_generic.Ancestry.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34988,other34989){
var self__ = this;
var this34988__$1 = this;
return (((!((other34989 == null)))) && ((this34988__$1.constructor === other34989.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34988__$1.node__GT_idx,other34989.node__GT_idx)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34988__$1.idx__GT_node,other34989.idx__GT_node)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34988__$1.bitmaps,other34989.bitmaps)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34988__$1.__extmap,other34989.__extmap)));
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

loom.alg_generic.Ancestry.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__34986){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__35044 = cljs.core.keyword_identical_QMARK_;
var expr__35045 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__35049 = new cljs.core.Keyword(null,"node->idx","node->idx",152705227);
var G__35050 = expr__35045;
return (pred__35044.cljs$core$IFn$_invoke$arity$2 ? pred__35044.cljs$core$IFn$_invoke$arity$2(G__35049,G__35050) : pred__35044.call(null,G__35049,G__35050));
})())){
return (new loom.alg_generic.Ancestry(G__34986,self__.idx__GT_node,self__.bitmaps,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__35052 = new cljs.core.Keyword(null,"idx->node","idx->node",1811907175);
var G__35053 = expr__35045;
return (pred__35044.cljs$core$IFn$_invoke$arity$2 ? pred__35044.cljs$core$IFn$_invoke$arity$2(G__35052,G__35053) : pred__35044.call(null,G__35052,G__35053));
})())){
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,G__34986,self__.bitmaps,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__35054 = new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842);
var G__35055 = expr__35045;
return (pred__35044.cljs$core$IFn$_invoke$arity$2 ? pred__35044.cljs$core$IFn$_invoke$arity$2(G__35054,G__35055) : pred__35044.call(null,G__35054,G__35055));
})())){
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,G__34986,self__.__meta,self__.__extmap,null));
} else {
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__34986),null));
}
}
}
});

loom.alg_generic.Ancestry.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"node->idx","node->idx",152705227),self__.node__GT_idx,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),self__.idx__GT_node,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),self__.bitmaps,null))], null),self__.__extmap));
});

loom.alg_generic.Ancestry.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__34986){
var self__ = this;
var this__4384__auto____$1 = this;
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,G__34986,self__.__extmap,self__.__hash));
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
loom.alg_generic.map__GT_Ancestry = (function loom$alg_generic$map__GT_Ancestry(G__34996){
var extmap__4424__auto__ = (function (){var G__35074 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34996,new cljs.core.Keyword(null,"node->idx","node->idx",152705227),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842)], 0));
if(cljs.core.record_QMARK_(G__34996)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35074);
} else {
return G__35074;
}
})();
return (new loom.alg_generic.Ancestry(new cljs.core.Keyword(null,"node->idx","node->idx",152705227).cljs$core$IFn$_invoke$arity$1(G__34996),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175).cljs$core$IFn$_invoke$arity$1(G__34996),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842).cljs$core$IFn$_invoke$arity$1(G__34996),null,cljs.core.not_empty(extmap__4424__auto__),null));
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
var len__4730__auto___35511 = arguments.length;
var i__4731__auto___35512 = (0);
while(true){
if((i__4731__auto___35512 < len__4730__auto___35511)){
args__4736__auto__.push((arguments[i__4731__auto___35512]));

var G__35513 = (i__4731__auto___35512 + (1));
i__4731__auto___35512 = G__35513;
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
var map__35098 = ancestry;
var map__35098__$1 = (((((!((map__35098 == null))))?(((((map__35098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35098.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35098):map__35098);
var node__GT_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35098__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var idx__GT_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35098__$1,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175));
var bitmaps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35098__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
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
loom.alg_generic.ancestry_add.cljs$lang$applyTo = (function (seq35090){
var G__35091 = cljs.core.first(seq35090);
var seq35090__$1 = cljs.core.next(seq35090);
var G__35092 = cljs.core.first(seq35090__$1);
var seq35090__$2 = cljs.core.next(seq35090__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35091,G__35092,seq35090__$2);
});

/**
 * Finds if the 'parenter node is an ancestor of 'childer node for the given
 *   'ancestry cache.
 */
loom.alg_generic.ancestor_QMARK_ = (function loom$alg_generic$ancestor_QMARK_(ancestry,childer,parenter){
var map__35107 = ancestry;
var map__35107__$1 = (((((!((map__35107 == null))))?(((((map__35107.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35107.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35107):map__35107);
var node__GT_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35107__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var bitmaps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35107__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
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
var map__35113 = ancestry;
var map__35113__$1 = (((((!((map__35113 == null))))?(((((map__35113.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35113.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35113):map__35113);
var node__GT_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35113__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var idx__GT_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35113__$1,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175));
var bitmaps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35113__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
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
