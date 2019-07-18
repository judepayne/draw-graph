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
var len__4730__auto___35155 = arguments.length;
var i__4731__auto___35157 = (0);
while(true){
if((i__4731__auto___35157 < len__4730__auto___35155)){
args__4736__auto__.push((arguments[i__4731__auto___35157]));

var G__35159 = (i__4731__auto___35157 + (1));
i__4731__auto___35157 = G__35159;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__34228){
var map__34230 = p__34228;
var map__34230__$1 = (((((!((map__34230 == null))))?(((((map__34230.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34230.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34230):map__34230);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34230__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var step = ((function (map__34230,map__34230__$1,seen){
return (function loom$alg_generic$step(stack,seen__$1){
var temp__5720__auto__ = cljs.core.peek(stack);
if(cljs.core.truth_(temp__5720__auto__)){
var node = temp__5720__auto__;
if(cljs.core.contains_QMARK_(seen__$1,node)){
return loom$alg_generic$step(cljs.core.pop(stack),seen__$1);
} else {
var seen__$2 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,node);
var nbrs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(seen__$2,(successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(node) : successors.call(null,node)));
return (new cljs.core.LazySeq(null,((function (seen__$2,nbrs,node,temp__5720__auto__,map__34230,map__34230__$1,seen){
return (function (){
return cljs.core.cons(node,loom$alg_generic$step(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(stack),nbrs),seen__$2));
});})(seen__$2,nbrs,node,temp__5720__auto__,map__34230,map__34230__$1,seen))
,null,null));
}
} else {
return null;
}
});})(map__34230,map__34230__$1,seen))
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
var len__4730__auto___35169 = arguments.length;
var i__4731__auto___35170 = (0);
while(true){
if((i__4731__auto___35170 < len__4730__auto___35169)){
args__4736__auto__.push((arguments[i__4731__auto___35170]));

var G__35171 = (i__4731__auto___35170 + (1));
i__4731__auto___35170 = G__35171;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__34306){
var map__34307 = p__34306;
var map__34307__$1 = (((((!((map__34307 == null))))?(((((map__34307.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34307.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34307):map__34307);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34307__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var step = ((function (map__34307,map__34307__$1,seen){
return (function loom$alg_generic$step(successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1){
while(true){
var temp__5718__auto__ = cljs.core.first(nbrs);
if(cljs.core.truth_(temp__5718__auto__)){
var nbr = temp__5718__auto__;
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null),(new cljs.core.LazySeq(null,((function (successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1,nbr,temp__5718__auto__,map__34307,map__34307__$1,seen){
return (function (){
var seen__$2 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,start__$1);
if(cljs.core.truth_((seen__$2.cljs$core$IFn$_invoke$arity$1 ? seen__$2.cljs$core$IFn$_invoke$arity$1(nbr) : seen__$2.call(null,nbr)))){
return loom$alg_generic$step(successors__$1,start__$1,cljs.core.next(nbrs),stack,nbrstack,seen__$2);
} else {
return loom$alg_generic$step(successors__$1,nbr,(successors__$1.cljs$core$IFn$_invoke$arity$1 ? successors__$1.cljs$core$IFn$_invoke$arity$1(nbr) : successors__$1.call(null,nbr)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,start__$1),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nbrstack,cljs.core.next(nbrs)),seen__$2);
}
});})(successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1,nbr,temp__5718__auto__,map__34307,map__34307__$1,seen))
,null,null)));
} else {
var temp__5720__auto__ = cljs.core.peek(stack);
if(cljs.core.truth_(temp__5720__auto__)){
var parent = temp__5720__auto__;
var G__35178 = successors__$1;
var G__35179 = parent;
var G__35180 = cljs.core.peek(nbrstack);
var G__35181 = cljs.core.pop(stack);
var G__35182 = cljs.core.pop(nbrstack);
var G__35183 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,start__$1);
successors__$1 = G__35178;
start__$1 = G__35179;
nbrs = G__35180;
stack = G__35181;
nbrstack = G__35182;
seen__$1 = G__35183;
continue;
} else {
return null;
}
}
break;
}
});})(map__34307,map__34307__$1,seen))
;
if(cljs.core.truth_((seen.cljs$core$IFn$_invoke$arity$1 ? seen.cljs$core$IFn$_invoke$arity$1(start) : seen.call(null,start)))){
return null;
} else {
return step(successors,start,(successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(start) : successors.call(null,start)),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,start));
}
});

loom.alg_generic.pre_edge_traverse.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.pre_edge_traverse.cljs$lang$applyTo = (function (seq34287){
var G__34288 = cljs.core.first(seq34287);
var seq34287__$1 = cljs.core.next(seq34287);
var G__34289 = cljs.core.first(seq34287__$1);
var seq34287__$2 = cljs.core.next(seq34287__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34288,G__34289,seq34287__$2);
});

/**
 * Returns a depth-first spanning tree of the form {node [successors]}
 */
loom.alg_generic.pre_span = (function loom$alg_generic$pre_span(var_args){
var args__4736__auto__ = [];
var len__4730__auto___35186 = arguments.length;
var i__4731__auto___35188 = (0);
while(true){
if((i__4731__auto___35188 < len__4730__auto___35186)){
args__4736__auto__.push((arguments[i__4731__auto___35188]));

var G__35189 = (i__4731__auto___35188 + (1));
i__4731__auto___35188 = G__35189;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__34348){
var map__34349 = p__34348;
var map__34349__$1 = (((((!((map__34349 == null))))?(((((map__34349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34349.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34349):map__34349);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34349__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34349__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__35202 = seen__$2;
var G__35203 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(preds,u,v);
var G__35204 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,u);
seen__$1 = G__35202;
preds = G__35203;
stack = G__35204;
continue;
} else {
var G__35206 = seen__$2;
var G__35207 = preds;
var G__35208 = cljs.core.pop(stack);
seen__$1 = G__35206;
preds = G__35207;
stack = G__35208;
continue;
}
}
break;
}
});

loom.alg_generic.pre_span.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.pre_span.cljs$lang$applyTo = (function (seq34330){
var G__34331 = cljs.core.first(seq34330);
var seq34330__$1 = cljs.core.next(seq34330);
var G__34332 = cljs.core.first(seq34330__$1);
var seq34330__$2 = cljs.core.next(seq34330__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34331,G__34332,seq34330__$2);
});

/**
 * Traverses a graph depth-first postorder from start, successors
 *   being a function that returns adjacent nodes. Returns a vector
 */
loom.alg_generic.post_traverse = (function loom$alg_generic$post_traverse(var_args){
var args__4736__auto__ = [];
var len__4730__auto___35214 = arguments.length;
var i__4731__auto___35215 = (0);
while(true){
if((i__4731__auto___35215 < len__4730__auto___35214)){
args__4736__auto__.push((arguments[i__4731__auto___35215]));

var G__35218 = (i__4731__auto___35215 + (1));
i__4731__auto___35215 = G__35218;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__34368){
var map__34370 = p__34368;
var map__34370__$1 = (((((!((map__34370 == null))))?(((((map__34370.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34370.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34370):map__34370);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34370__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34370__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
loom.alg_generic.post_traverse.cljs$lang$applyTo = (function (seq34358){
var G__34359 = cljs.core.first(seq34358);
var seq34358__$1 = cljs.core.next(seq34358);
var G__34360 = cljs.core.first(seq34358__$1);
var seq34358__$2 = cljs.core.next(seq34358__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34359,G__34360,seq34358__$2);
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

loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__34386){
var map__34387 = p__34386;
var map__34387__$1 = (((((!((map__34387 == null))))?(((((map__34387.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34387.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34387):map__34387);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34387__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34387__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__35251 = nbr;
var G__35252 = (successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(nbr) : successors.call(null,nbr));
var G__35253 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,start__$1);
var G__35254 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nbrstack,cljs.core.next(nbrs));
var G__35255 = seen__$2;
var G__35256 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(edges,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null));
start__$1 = G__35251;
nbrs = G__35252;
stack = G__35253;
nbrstack = G__35254;
seen__$1 = G__35255;
edges = G__35256;
continue;
}
} else {
var temp__5718__auto____$1 = cljs.core.peek(stack);
if(cljs.core.truth_(temp__5718__auto____$1)){
var parent = temp__5718__auto____$1;
var G__35259 = parent;
var G__35260 = cljs.core.peek(nbrstack);
var G__35261 = cljs.core.pop(stack);
var G__35262 = cljs.core.pop(nbrstack);
var G__35263 = seen__$2;
var G__35264 = edges;
start__$1 = G__35259;
nbrs = G__35260;
stack = G__35261;
nbrstack = G__35262;
seen__$1 = G__35263;
edges = G__35264;
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
loom.alg_generic.post_edge_traverse.cljs$lang$applyTo = (function (seq34379){
var G__34380 = cljs.core.first(seq34379);
var seq34379__$1 = cljs.core.next(seq34379);
var G__34381 = cljs.core.first(seq34379__$1);
var seq34379__$2 = cljs.core.next(seq34379__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34380,G__34381,seq34379__$2);
});

/**
 * Topological sort of a component of a (presumably) directed graph.
 *   Returns nil if the graph contains any cycles. See loom.alg/topsort
 *   for a complete topological sort
 */
loom.alg_generic.topsort_component = (function loom$alg_generic$topsort_component(var_args){
var G__34413 = arguments.length;
switch (G__34413) {
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

var G__35286 = (i__4731__auto___35283 + (1));
i__4731__auto___35283 = G__35286;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__34469){
var map__34471 = p__34469;
var map__34471__$1 = (((((!((map__34471 == null))))?(((((map__34471.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34471.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34471):map__34471);
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34471__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var when = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34471__$1,new cljs.core.Keyword(null,"when","when",-576417306));
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34471__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
var f__$1 = (function (){var or__4131__auto__ = f;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return ((function (or__4131__auto__,map__34471,map__34471__$1,f,when,seen){
return (function (n,p,d){
return n;
});
;})(or__4131__auto__,map__34471,map__34471__$1,f,when,seen))
}
})();
var nbr_pred = (function (){var or__4131__auto__ = when;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.constantly(true);
}
})();
var step = ((function (f__$1,nbr_pred,map__34471,map__34471__$1,f,when,seen){
return (function loom$alg_generic$step(queue,preds){
var temp__5720__auto__ = cljs.core.peek(queue);
if(cljs.core.truth_(temp__5720__auto__)){
var vec__34515 = temp__5720__auto__;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34515,(0),null);
var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34515,(1),null);
return cljs.core.cons((f__$1.cljs$core$IFn$_invoke$arity$3 ? f__$1.cljs$core$IFn$_invoke$arity$3(node,preds,depth) : f__$1.call(null,node,preds,depth)),(new cljs.core.LazySeq(null,((function (vec__34515,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34471,map__34471__$1,f,when,seen){
return (function (){
var nbrs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__34515,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34471,map__34471__$1,f,when,seen){
return (function (p1__34452_SHARP_){
var G__34520 = p1__34452_SHARP_;
var G__34521 = node;
var G__34522 = (depth + (1));
return (nbr_pred.cljs$core$IFn$_invoke$arity$3 ? nbr_pred.cljs$core$IFn$_invoke$arity$3(G__34520,G__34521,G__34522) : nbr_pred.call(null,G__34520,G__34521,G__34522));
});})(vec__34515,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34471,map__34471__$1,f,when,seen))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__34515,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34471,map__34471__$1,f,when,seen){
return (function (p1__34450_SHARP_){
return cljs.core.contains_QMARK_(preds,p1__34450_SHARP_);
});})(vec__34515,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34471,map__34471__$1,f,when,seen))
,(successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(node) : successors.call(null,node))));
return loom$alg_generic$step(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(queue),(function (){var iter__4523__auto__ = ((function (nbrs,vec__34515,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34471,map__34471__$1,f,when,seen){
return (function loom$alg_generic$step_$_iter__34525(s__34526){
return (new cljs.core.LazySeq(null,((function (nbrs,vec__34515,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34471,map__34471__$1,f,when,seen){
return (function (){
var s__34526__$1 = s__34526;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__34526__$1);
if(temp__5720__auto____$1){
var s__34526__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__34526__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__34526__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__34528 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__34527 = (0);
while(true){
if((i__34527 < size__4522__auto__)){
var nbr = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__34527);
cljs.core.chunk_append(b__34528,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,(depth + (1))], null));

var G__35299 = (i__34527 + (1));
i__34527 = G__35299;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34528),loom$alg_generic$step_$_iter__34525(cljs.core.chunk_rest(s__34526__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34528),null);
}
} else {
var nbr = cljs.core.first(s__34526__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,(depth + (1))], null),loom$alg_generic$step_$_iter__34525(cljs.core.rest(s__34526__$2)));
}
} else {
return null;
}
break;
}
});})(nbrs,vec__34515,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34471,map__34471__$1,f,when,seen))
,null,null));
});})(nbrs,vec__34515,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34471,map__34471__$1,f,when,seen))
;
return iter__4523__auto__(nbrs);
})()),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (nbrs,vec__34515,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34471,map__34471__$1,f,when,seen){
return (function (p1__34453_SHARP_,p2__34454_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__34453_SHARP_,p2__34454_SHARP_,node);
});})(nbrs,vec__34515,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34471,map__34471__$1,f,when,seen))
,preds,nbrs));
});})(vec__34515,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34471,map__34471__$1,f,when,seen))
,null,null)));
} else {
return null;
}
});})(f__$1,nbr_pred,map__34471,map__34471__$1,f,when,seen))
;
return step(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentQueue.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,(0)], null)),((cljs.core.map_QMARK_(seen))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(seen,start,null):cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.createAsIfByAssoc([start,null]),(function (){var iter__4523__auto__ = ((function (f__$1,nbr_pred,map__34471,map__34471__$1,f,when,seen){
return (function loom$alg_generic$iter__34551(s__34552){
return (new cljs.core.LazySeq(null,((function (f__$1,nbr_pred,map__34471,map__34471__$1,f,when,seen){
return (function (){
var s__34552__$1 = s__34552;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__34552__$1);
if(temp__5720__auto__){
var s__34552__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__34552__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__34552__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__34554 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__34553 = (0);
while(true){
if((i__34553 < size__4522__auto__)){
var s = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__34553);
cljs.core.chunk_append(b__34554,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,null], null));

var G__35317 = (i__34553 + (1));
i__34553 = G__35317;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34554),loom$alg_generic$iter__34551(cljs.core.chunk_rest(s__34552__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34554),null);
}
} else {
var s = cljs.core.first(s__34552__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,null], null),loom$alg_generic$iter__34551(cljs.core.rest(s__34552__$2)));
}
} else {
return null;
}
break;
}
});})(f__$1,nbr_pred,map__34471,map__34471__$1,f,when,seen))
,null,null));
});})(f__$1,nbr_pred,map__34471,map__34471__$1,f,when,seen))
;
return iter__4523__auto__(seen);
})())));
});

loom.alg_generic.bf_traverse.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.bf_traverse.cljs$lang$applyTo = (function (seq34455){
var G__34456 = cljs.core.first(seq34455);
var seq34455__$1 = cljs.core.next(seq34455);
var G__34457 = cljs.core.first(seq34455__$1);
var seq34455__$2 = cljs.core.next(seq34455__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34456,G__34457,seq34455__$2);
});

/**
 * Return a breadth-first spanning tree of the form {node
 *   [successors]}
 */
loom.alg_generic.bf_span = (function loom$alg_generic$bf_span(var_args){
var args__4736__auto__ = [];
var len__4730__auto___35327 = arguments.length;
var i__4731__auto___35328 = (0);
while(true){
if((i__4731__auto___35328 < len__4730__auto___35327)){
args__4736__auto__.push((arguments[i__4731__auto___35328]));

var G__35329 = (i__4731__auto___35328 + (1));
i__4731__auto___35328 = G__35329;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__34570){
var map__34571 = p__34570;
var map__34571__$1 = (((((!((map__34571 == null))))?(((((map__34571.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34571.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34571):map__34571);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34571__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
return loom.alg_generic.preds__GT_span(cljs.core.last(loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic(successors,start,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"f","f",-1597136552),((function (map__34571,map__34571__$1,seen){
return (function (_,pm,___$1){
return pm;
});})(map__34571,map__34571__$1,seen))
,new cljs.core.Keyword(null,"seen","seen",-518999789),seen], 0))));
});

loom.alg_generic.bf_span.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.bf_span.cljs$lang$applyTo = (function (seq34563){
var G__34564 = cljs.core.first(seq34563);
var seq34563__$1 = cljs.core.next(seq34563);
var G__34565 = cljs.core.first(seq34563__$1);
var seq34563__$2 = cljs.core.next(seq34563__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34564,G__34565,seq34563__$2);
});

/**
 * Returns a path from start to end with the fewest hops (i.e. irrespective
 *   of edge weights), successors being a function that returns adjacent nodes
 */
loom.alg_generic.bf_path = (function loom$alg_generic$bf_path(var_args){
var args__4736__auto__ = [];
var len__4730__auto___35344 = arguments.length;
var i__4731__auto___35346 = (0);
while(true){
if((i__4731__auto___35346 < len__4730__auto___35344)){
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

loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,end,p__34581){
var map__34583 = p__34581;
var map__34583__$1 = (((((!((map__34583 == null))))?(((((map__34583.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34583.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34583):map__34583);
var opts = map__34583__$1;
var opts__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.vector], null)], 0));
var temp__5720__auto__ = cljs.core.some(((function (opts__$1,map__34583,map__34583__$1,opts){
return (function (p__34586){
var vec__34587 = p__34586;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34587,(0),null);
var pm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34587,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34587,(2),null);
if(cljs.core.truth_((pm.cljs$core$IFn$_invoke$arity$1 ? pm.cljs$core$IFn$_invoke$arity$1(end) : pm.call(null,end)))){
return pm;
} else {
return null;
}
});})(opts__$1,map__34583,map__34583__$1,opts))
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
loom.alg_generic.bf_path.cljs$lang$applyTo = (function (seq34576){
var G__34577 = cljs.core.first(seq34576);
var seq34576__$1 = cljs.core.next(seq34576);
var G__34578 = cljs.core.first(seq34576__$1);
var seq34576__$2 = cljs.core.next(seq34576__$1);
var G__34579 = cljs.core.first(seq34576__$2);
var seq34576__$3 = cljs.core.next(seq34576__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34577,G__34578,G__34579,seq34576__$3);
});

/**
 * Returns a lazy-seq of the keys that exist in both m1 and m2
 */
loom.alg_generic.shared_keys = (function loom$alg_generic$shared_keys(m1,m2){
while(true){
if((cljs.core.count(m2) < cljs.core.count(m1))){
var G__35348 = m2;
var G__35349 = m1;
m1 = G__35348;
m2 = G__35349;
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
var iter__4523__auto__ = (function loom$alg_generic$reverse_edges_$_iter__34596(s__34597){
return (new cljs.core.LazySeq(null,(function (){
var s__34597__$1 = s__34597;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__34597__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var node = cljs.core.first(xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__34597__$1,node,xs__6277__auto__,temp__5720__auto__){
return (function loom$alg_generic$reverse_edges_$_iter__34596_$_iter__34598(s__34599){
return (new cljs.core.LazySeq(null,((function (s__34597__$1,node,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__34599__$1 = s__34599;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__34599__$1);
if(temp__5720__auto____$1){
var s__34599__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__34599__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__34599__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__34601 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__34600 = (0);
while(true){
if((i__34600 < size__4522__auto__)){
var nbr = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__34600);
if((!(cljs.core.contains_QMARK_(coll,nbr)))){
cljs.core.chunk_append(b__34601,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,node], null));

var G__35351 = (i__34600 + (1));
i__34600 = G__35351;
continue;
} else {
var G__35352 = (i__34600 + (1));
i__34600 = G__35352;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34601),loom$alg_generic$reverse_edges_$_iter__34596_$_iter__34598(cljs.core.chunk_rest(s__34599__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34601),null);
}
} else {
var nbr = cljs.core.first(s__34599__$2);
if((!(cljs.core.contains_QMARK_(coll,nbr)))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,node], null),loom$alg_generic$reverse_edges_$_iter__34596_$_iter__34598(cljs.core.rest(s__34599__$2)));
} else {
var G__35357 = cljs.core.rest(s__34599__$2);
s__34599__$1 = G__35357;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__34597__$1,node,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__34597__$1,node,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__((successor_fn.cljs$core$IFn$_invoke$arity$1 ? successor_fn.cljs$core$IFn$_invoke$arity$1(node) : successor_fn.call(null,node))));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,loom$alg_generic$reverse_edges_$_iter__34596(cljs.core.rest(s__34597__$1)));
} else {
var G__35360 = cljs.core.rest(s__34597__$1);
s__34597__$1 = G__35360;
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
var iter__4523__auto__ = (function loom$alg_generic$conj_paths_$_iter__34610(s__34611){
return (new cljs.core.LazySeq(null,(function (){
var s__34611__$1 = s__34611;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__34611__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var n = cljs.core.first(xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__34611__$1,n,xs__6277__auto__,temp__5720__auto__){
return (function loom$alg_generic$conj_paths_$_iter__34610_$_iter__34612(s__34613){
return (new cljs.core.LazySeq(null,((function (s__34611__$1,n,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__34613__$1 = s__34613;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__34613__$1);
if(temp__5720__auto____$1){
var xs__6277__auto____$1 = temp__5720__auto____$1;
var from = cljs.core.first(xs__6277__auto____$1);
var iterys__4519__auto__ = ((function (s__34613__$1,s__34611__$1,from,xs__6277__auto____$1,temp__5720__auto____$1,n,xs__6277__auto__,temp__5720__auto__){
return (function loom$alg_generic$conj_paths_$_iter__34610_$_iter__34612_$_iter__34614(s__34615){
return (new cljs.core.LazySeq(null,((function (s__34613__$1,s__34611__$1,from,xs__6277__auto____$1,temp__5720__auto____$1,n,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__34615__$1 = s__34615;
while(true){
var temp__5720__auto____$2 = cljs.core.seq(s__34615__$1);
if(temp__5720__auto____$2){
var s__34615__$2 = temp__5720__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__34615__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__34615__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__34617 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__34616 = (0);
while(true){
if((i__34616 < size__4522__auto__)){
var to = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__34616);
cljs.core.chunk_append(b__34617,cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(from,to)));

var G__35372 = (i__34616 + (1));
i__34616 = G__35372;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34617),loom$alg_generic$conj_paths_$_iter__34610_$_iter__34612_$_iter__34614(cljs.core.chunk_rest(s__34615__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34617),null);
}
} else {
var to = cljs.core.first(s__34615__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(from,to)),loom$alg_generic$conj_paths_$_iter__34610_$_iter__34612_$_iter__34614(cljs.core.rest(s__34615__$2)));
}
} else {
return null;
}
break;
}
});})(s__34613__$1,s__34611__$1,from,xs__6277__auto____$1,temp__5720__auto____$1,n,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__34613__$1,s__34611__$1,from,xs__6277__auto____$1,temp__5720__auto____$1,n,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,loom.alg_generic.trace_paths(to_map,n))));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,loom$alg_generic$conj_paths_$_iter__34610_$_iter__34612(cljs.core.rest(s__34613__$1)));
} else {
var G__35377 = cljs.core.rest(s__34613__$1);
s__34613__$1 = G__35377;
continue;
}
} else {
return null;
}
break;
}
});})(s__34611__$1,n,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__34611__$1,n,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.reverse,loom.alg_generic.trace_paths(from_map,n))));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,loom$alg_generic$conj_paths_$_iter__34610(cljs.core.rest(s__34611__$1)));
} else {
var G__35382 = cljs.core.rest(s__34611__$1);
s__34611__$1 = G__35382;
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
return (function (p1__34667_SHARP_){
return cljs.core.contains_QMARK_(coll,p1__34667_SHARP_);
});})(find_succs,find_preds))
,q));
});})(find_succs,find_preds))
;
var map_set_pairs = ((function (find_succs,find_preds,overlaps){
return (function (map,pairs){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (find_succs,find_preds,overlaps){
return (function (map__$1,p__34686){
var vec__34687 = p__34686;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34687,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34687,(1),null);
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
var G__35387 = outgoing__$1;
var G__35388 = incoming;
var G__35389 = q1__$1;
var G__35390 = q2;
outgoing = G__35387;
incoming = G__35388;
q1 = G__35389;
q2 = G__35390;
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
var G__35395 = outgoing;
var G__35396 = incoming__$1;
var G__35397 = q1;
var G__35398 = q2__$1;
outgoing = G__35395;
incoming = G__35396;
q1 = G__35397;
q2 = G__35398;
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
var G__34729 = arguments.length;
switch (G__34729) {
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
var step = (function loom$alg_generic$step(p__34755){
var vec__34758 = p__34755;
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34758,(0),null);
var pq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34758,(1),null);
var temp__5720__auto__ = cljs.core.first(pq);
if(cljs.core.truth_(temp__5720__auto__)){
var vec__34761 = temp__5720__auto__;
var dist_su = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34761,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34761,(1),null);
var u = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34761,(2),null);
var fpq = vec__34761;
return cljs.core.cons((f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(u,state) : f.call(null,u,state)),(new cljs.core.LazySeq(null,((function (vec__34761,dist_su,_,u,fpq,temp__5720__auto__,vec__34758,state,pq){
return (function (){
return loom$alg_generic$step(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__34761,dist_su,_,u,fpq,temp__5720__auto__,vec__34758,state,pq){
return (function (p__34765,v){
var vec__34768 = p__34765;
var state__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34768,(0),null);
var pq__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34768,(1),null);
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
});})(vec__34761,dist_su,_,u,fpq,temp__5720__auto__,vec__34758,state,pq))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(pq,fpq)], null),(successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(u) : successors.call(null,u))));
});})(vec__34761,dist_su,_,u,fpq,temp__5720__auto__,vec__34758,state,pq))
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (span,p__34779){
var vec__34780 = p__34779;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34780,(0),null);
var vec__34783 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34780,(1),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34783,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34783,(1),null);
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
var temp__5718__auto__ = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__34793){
var vec__34794 = p__34793;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34794,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34794,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(end,node);
}),loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$3(successors,dist,start)));
if(cljs.core.truth_(temp__5718__auto__)){
var vec__34797 = temp__5718__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34797,(0),null);
var end_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34797,(1),null);
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
return cljs.core.long$((function (){var G__34813 = (bits / loom.alg_generic.bits_per_long);
return Math.ceil(G__34813);
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
var len__4730__auto___35424 = arguments.length;
var i__4731__auto___35425 = (0);
while(true){
if((i__4731__auto___35425 < len__4730__auto___35424)){
args__4736__auto__.push((arguments[i__4731__auto___35425]));

var G__35426 = (i__4731__auto___35425 + (1));
i__4731__auto___35425 = G__35426;
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
var seq__34832_35427 = cljs.core.seq(cljs.core.rest(bitmaps));
var chunk__34843_35428 = null;
var count__34844_35429 = (0);
var i__34845_35430 = (0);
while(true){
if((i__34845_35430 < count__34844_35429)){
var bitmap_35432 = chunk__34843_35428.cljs$core$IIndexed$_nth$arity$2(null,i__34845_35430);
var seq__34846_35433 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.list,bitmap_35432));
var chunk__34848_35434 = null;
var count__34849_35435 = (0);
var i__34850_35436 = (0);
while(true){
if((i__34850_35436 < count__34849_35435)){
var vec__34919_35440 = chunk__34848_35434.cljs$core$IIndexed$_nth$arity$2(null,i__34850_35436);
var idx_35441 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34919_35440,(0),null);
var value_35442 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34919_35440,(1),null);
var masked_value_35443 = (value_35442 | (new_bitmap[idx_35441]));
(new_bitmap[idx_35441] = masked_value_35443);


var G__35445 = seq__34846_35433;
var G__35446 = chunk__34848_35434;
var G__35447 = count__34849_35435;
var G__35448 = (i__34850_35436 + (1));
seq__34846_35433 = G__35445;
chunk__34848_35434 = G__35446;
count__34849_35435 = G__35447;
i__34850_35436 = G__35448;
continue;
} else {
var temp__5720__auto___35449 = cljs.core.seq(seq__34846_35433);
if(temp__5720__auto___35449){
var seq__34846_35450__$1 = temp__5720__auto___35449;
if(cljs.core.chunked_seq_QMARK_(seq__34846_35450__$1)){
var c__4550__auto___35452 = cljs.core.chunk_first(seq__34846_35450__$1);
var G__35454 = cljs.core.chunk_rest(seq__34846_35450__$1);
var G__35455 = c__4550__auto___35452;
var G__35456 = cljs.core.count(c__4550__auto___35452);
var G__35457 = (0);
seq__34846_35433 = G__35454;
chunk__34848_35434 = G__35455;
count__34849_35435 = G__35456;
i__34850_35436 = G__35457;
continue;
} else {
var vec__34928_35459 = cljs.core.first(seq__34846_35450__$1);
var idx_35460 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34928_35459,(0),null);
var value_35461 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34928_35459,(1),null);
var masked_value_35463 = (value_35461 | (new_bitmap[idx_35460]));
(new_bitmap[idx_35460] = masked_value_35463);


var G__35464 = cljs.core.next(seq__34846_35450__$1);
var G__35465 = null;
var G__35466 = (0);
var G__35467 = (0);
seq__34846_35433 = G__35464;
chunk__34848_35434 = G__35465;
count__34849_35435 = G__35466;
i__34850_35436 = G__35467;
continue;
}
} else {
}
}
break;
}

var G__35468 = seq__34832_35427;
var G__35469 = chunk__34843_35428;
var G__35470 = count__34844_35429;
var G__35471 = (i__34845_35430 + (1));
seq__34832_35427 = G__35468;
chunk__34843_35428 = G__35469;
count__34844_35429 = G__35470;
i__34845_35430 = G__35471;
continue;
} else {
var temp__5720__auto___35473 = cljs.core.seq(seq__34832_35427);
if(temp__5720__auto___35473){
var seq__34832_35475__$1 = temp__5720__auto___35473;
if(cljs.core.chunked_seq_QMARK_(seq__34832_35475__$1)){
var c__4550__auto___35476 = cljs.core.chunk_first(seq__34832_35475__$1);
var G__35478 = cljs.core.chunk_rest(seq__34832_35475__$1);
var G__35479 = c__4550__auto___35476;
var G__35480 = cljs.core.count(c__4550__auto___35476);
var G__35481 = (0);
seq__34832_35427 = G__35478;
chunk__34843_35428 = G__35479;
count__34844_35429 = G__35480;
i__34845_35430 = G__35481;
continue;
} else {
var bitmap_35484 = cljs.core.first(seq__34832_35475__$1);
var seq__34833_35485 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.list,bitmap_35484));
var chunk__34837_35486 = null;
var count__34838_35487 = (0);
var i__34839_35488 = (0);
while(true){
if((i__34839_35488 < count__34838_35487)){
var vec__34965_35489 = chunk__34837_35486.cljs$core$IIndexed$_nth$arity$2(null,i__34839_35488);
var idx_35490 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34965_35489,(0),null);
var value_35491 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34965_35489,(1),null);
var masked_value_35492 = (value_35491 | (new_bitmap[idx_35490]));
(new_bitmap[idx_35490] = masked_value_35492);


var G__35493 = seq__34833_35485;
var G__35494 = chunk__34837_35486;
var G__35495 = count__34838_35487;
var G__35496 = (i__34839_35488 + (1));
seq__34833_35485 = G__35493;
chunk__34837_35486 = G__35494;
count__34838_35487 = G__35495;
i__34839_35488 = G__35496;
continue;
} else {
var temp__5720__auto___35498__$1 = cljs.core.seq(seq__34833_35485);
if(temp__5720__auto___35498__$1){
var seq__34833_35499__$1 = temp__5720__auto___35498__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34833_35499__$1)){
var c__4550__auto___35500 = cljs.core.chunk_first(seq__34833_35499__$1);
var G__35501 = cljs.core.chunk_rest(seq__34833_35499__$1);
var G__35502 = c__4550__auto___35500;
var G__35503 = cljs.core.count(c__4550__auto___35500);
var G__35504 = (0);
seq__34833_35485 = G__35501;
chunk__34837_35486 = G__35502;
count__34838_35487 = G__35503;
i__34839_35488 = G__35504;
continue;
} else {
var vec__34969_35506 = cljs.core.first(seq__34833_35499__$1);
var idx_35507 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34969_35506,(0),null);
var value_35508 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34969_35506,(1),null);
var masked_value_35509 = (value_35508 | (new_bitmap[idx_35507]));
(new_bitmap[idx_35507] = masked_value_35509);


var G__35511 = cljs.core.next(seq__34833_35499__$1);
var G__35512 = null;
var G__35513 = (0);
var G__35514 = (0);
seq__34833_35485 = G__35511;
chunk__34837_35486 = G__35512;
count__34838_35487 = G__35513;
i__34839_35488 = G__35514;
continue;
}
} else {
}
}
break;
}

var G__35515 = cljs.core.next(seq__34832_35475__$1);
var G__35516 = null;
var G__35517 = (0);
var G__35518 = (0);
seq__34832_35427 = G__35515;
chunk__34843_35428 = G__35516;
count__34844_35429 = G__35517;
i__34845_35430 = G__35518;
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
var iter__4523__auto__ = (function loom$alg_generic$bm_get_indicies_$_iter__34975(s__34976){
return (new cljs.core.LazySeq(null,(function (){
var s__34976__$1 = s__34976;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__34976__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var chunk = cljs.core.first(xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__34976__$1,chunk,xs__6277__auto__,temp__5720__auto__){
return (function loom$alg_generic$bm_get_indicies_$_iter__34975_$_iter__34977(s__34978){
return (new cljs.core.LazySeq(null,((function (s__34976__$1,chunk,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__34978__$1 = s__34978;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__34978__$1);
if(temp__5720__auto____$1){
var s__34978__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__34978__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__34978__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__34980 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__34979 = (0);
while(true){
if((i__34979 < size__4522__auto__)){
var offset = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__34979);
var idx = ((chunk * loom.alg_generic.bits_per_long) + offset);
if(cljs.core.truth_(loom.alg_generic.bm_get(bitmap,idx))){
cljs.core.chunk_append(b__34980,idx);

var G__35524 = (i__34979 + (1));
i__34979 = G__35524;
continue;
} else {
var G__35525 = (i__34979 + (1));
i__34979 = G__35525;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34980),loom$alg_generic$bm_get_indicies_$_iter__34975_$_iter__34977(cljs.core.chunk_rest(s__34978__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34980),null);
}
} else {
var offset = cljs.core.first(s__34978__$2);
var idx = ((chunk * loom.alg_generic.bits_per_long) + offset);
if(cljs.core.truth_(loom.alg_generic.bm_get(bitmap,idx))){
return cljs.core.cons(idx,loom$alg_generic$bm_get_indicies_$_iter__34975_$_iter__34977(cljs.core.rest(s__34978__$2)));
} else {
var G__35527 = cljs.core.rest(s__34978__$2);
s__34978__$1 = G__35527;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__34976__$1,chunk,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__34976__$1,chunk,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(loom.alg_generic.bits_per_long)));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,loom$alg_generic$bm_get_indicies_$_iter__34975(cljs.core.rest(s__34976__$1)));
} else {
var G__35528 = cljs.core.rest(s__34976__$1);
s__34976__$1 = G__35528;
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

loom.alg_generic.Ancestry.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k34989,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__35024 = k34989;
var G__35024__$1 = (((G__35024 instanceof cljs.core.Keyword))?G__35024.fqn:null);
switch (G__35024__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34989,else__4388__auto__);

}
});

loom.alg_generic.Ancestry.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__35030){
var vec__35031 = p__35030;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35031,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35031,(1),null);
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

loom.alg_generic.Ancestry.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34988){
var self__ = this;
var G__34988__$1 = this;
return (new cljs.core.RecordIter((0),G__34988__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node->idx","node->idx",152705227),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4243__auto____$1 = (function (){var fexpr__35042 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1116202445 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__35042(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

loom.alg_generic.Ancestry.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34991,other34992){
var self__ = this;
var this34991__$1 = this;
return (((!((other34992 == null)))) && ((this34991__$1.constructor === other34992.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34991__$1.node__GT_idx,other34992.node__GT_idx)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34991__$1.idx__GT_node,other34992.idx__GT_node)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34991__$1.bitmaps,other34992.bitmaps)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34991__$1.__extmap,other34992.__extmap)));
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

loom.alg_generic.Ancestry.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__34988){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__35057 = cljs.core.keyword_identical_QMARK_;
var expr__35058 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__35060 = new cljs.core.Keyword(null,"node->idx","node->idx",152705227);
var G__35061 = expr__35058;
return (pred__35057.cljs$core$IFn$_invoke$arity$2 ? pred__35057.cljs$core$IFn$_invoke$arity$2(G__35060,G__35061) : pred__35057.call(null,G__35060,G__35061));
})())){
return (new loom.alg_generic.Ancestry(G__34988,self__.idx__GT_node,self__.bitmaps,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__35066 = new cljs.core.Keyword(null,"idx->node","idx->node",1811907175);
var G__35067 = expr__35058;
return (pred__35057.cljs$core$IFn$_invoke$arity$2 ? pred__35057.cljs$core$IFn$_invoke$arity$2(G__35066,G__35067) : pred__35057.call(null,G__35066,G__35067));
})())){
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,G__34988,self__.bitmaps,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__35068 = new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842);
var G__35069 = expr__35058;
return (pred__35057.cljs$core$IFn$_invoke$arity$2 ? pred__35057.cljs$core$IFn$_invoke$arity$2(G__35068,G__35069) : pred__35057.call(null,G__35068,G__35069));
})())){
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,G__34988,self__.__meta,self__.__extmap,null));
} else {
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__34988),null));
}
}
}
});

loom.alg_generic.Ancestry.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"node->idx","node->idx",152705227),self__.node__GT_idx,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),self__.idx__GT_node,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),self__.bitmaps,null))], null),self__.__extmap));
});

loom.alg_generic.Ancestry.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__34988){
var self__ = this;
var this__4384__auto____$1 = this;
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,G__34988,self__.__extmap,self__.__hash));
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
loom.alg_generic.map__GT_Ancestry = (function loom$alg_generic$map__GT_Ancestry(G__35013){
var extmap__4424__auto__ = (function (){var G__35090 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35013,new cljs.core.Keyword(null,"node->idx","node->idx",152705227),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842)], 0));
if(cljs.core.record_QMARK_(G__35013)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35090);
} else {
return G__35090;
}
})();
return (new loom.alg_generic.Ancestry(new cljs.core.Keyword(null,"node->idx","node->idx",152705227).cljs$core$IFn$_invoke$arity$1(G__35013),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175).cljs$core$IFn$_invoke$arity$1(G__35013),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842).cljs$core$IFn$_invoke$arity$1(G__35013),null,cljs.core.not_empty(extmap__4424__auto__),null));
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
var len__4730__auto___35559 = arguments.length;
var i__4731__auto___35560 = (0);
while(true){
if((i__4731__auto___35560 < len__4730__auto___35559)){
args__4736__auto__.push((arguments[i__4731__auto___35560]));

var G__35561 = (i__4731__auto___35560 + (1));
i__4731__auto___35560 = G__35561;
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
var map__35102 = ancestry;
var map__35102__$1 = (((((!((map__35102 == null))))?(((((map__35102.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35102.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35102):map__35102);
var node__GT_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35102__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var idx__GT_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35102__$1,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175));
var bitmaps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35102__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
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
loom.alg_generic.ancestry_add.cljs$lang$applyTo = (function (seq35093){
var G__35094 = cljs.core.first(seq35093);
var seq35093__$1 = cljs.core.next(seq35093);
var G__35096 = cljs.core.first(seq35093__$1);
var seq35093__$2 = cljs.core.next(seq35093__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35094,G__35096,seq35093__$2);
});

/**
 * Finds if the 'parenter node is an ancestor of 'childer node for the given
 *   'ancestry cache.
 */
loom.alg_generic.ancestor_QMARK_ = (function loom$alg_generic$ancestor_QMARK_(ancestry,childer,parenter){
var map__35112 = ancestry;
var map__35112__$1 = (((((!((map__35112 == null))))?(((((map__35112.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35112.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35112):map__35112);
var node__GT_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35112__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var bitmaps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35112__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
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
var map__35121 = ancestry;
var map__35121__$1 = (((((!((map__35121 == null))))?(((((map__35121.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35121.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35121):map__35121);
var node__GT_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35121__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var idx__GT_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35121__$1,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175));
var bitmaps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35121__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
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
