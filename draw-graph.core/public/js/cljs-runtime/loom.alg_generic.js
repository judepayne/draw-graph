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
return (function (p1__34186_SHARP_){
var G__34187 = preds;
var G__34188 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,p1__34186_SHARP_);
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
var len__4730__auto___35157 = arguments.length;
var i__4731__auto___35158 = (0);
while(true){
if((i__4731__auto___35158 < len__4730__auto___35157)){
args__4736__auto__.push((arguments[i__4731__auto___35158]));

var G__35159 = (i__4731__auto___35158 + (1));
i__4731__auto___35158 = G__35159;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__34213){
var map__34214 = p__34213;
var map__34214__$1 = (((((!((map__34214 == null))))?(((((map__34214.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34214.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34214):map__34214);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34214__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var step = ((function (map__34214,map__34214__$1,seen){
return (function loom$alg_generic$step(stack,seen__$1){
var temp__5720__auto__ = cljs.core.peek(stack);
if(cljs.core.truth_(temp__5720__auto__)){
var node = temp__5720__auto__;
if(cljs.core.contains_QMARK_(seen__$1,node)){
return loom$alg_generic$step(cljs.core.pop(stack),seen__$1);
} else {
var seen__$2 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,node);
var nbrs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(seen__$2,(successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(node) : successors.call(null,node)));
return (new cljs.core.LazySeq(null,((function (seen__$2,nbrs,node,temp__5720__auto__,map__34214,map__34214__$1,seen){
return (function (){
return cljs.core.cons(node,loom$alg_generic$step(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(stack),nbrs),seen__$2));
});})(seen__$2,nbrs,node,temp__5720__auto__,map__34214,map__34214__$1,seen))
,null,null));
}
} else {
return null;
}
});})(map__34214,map__34214__$1,seen))
;
return step(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null),seen);
});

loom.alg_generic.pre_traverse.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.pre_traverse.cljs$lang$applyTo = (function (seq34204){
var G__34205 = cljs.core.first(seq34204);
var seq34204__$1 = cljs.core.next(seq34204);
var G__34206 = cljs.core.first(seq34204__$1);
var seq34204__$2 = cljs.core.next(seq34204__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34205,G__34206,seq34204__$2);
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
var len__4730__auto___35167 = arguments.length;
var i__4731__auto___35168 = (0);
while(true){
if((i__4731__auto___35168 < len__4730__auto___35167)){
args__4736__auto__.push((arguments[i__4731__auto___35168]));

var G__35169 = (i__4731__auto___35168 + (1));
i__4731__auto___35168 = G__35169;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__34286){
var map__34288 = p__34286;
var map__34288__$1 = (((((!((map__34288 == null))))?(((((map__34288.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34288.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34288):map__34288);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34288__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var step = ((function (map__34288,map__34288__$1,seen){
return (function loom$alg_generic$step(successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1){
while(true){
var temp__5718__auto__ = cljs.core.first(nbrs);
if(cljs.core.truth_(temp__5718__auto__)){
var nbr = temp__5718__auto__;
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null),(new cljs.core.LazySeq(null,((function (successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1,nbr,temp__5718__auto__,map__34288,map__34288__$1,seen){
return (function (){
var seen__$2 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,start__$1);
if(cljs.core.truth_((seen__$2.cljs$core$IFn$_invoke$arity$1 ? seen__$2.cljs$core$IFn$_invoke$arity$1(nbr) : seen__$2.call(null,nbr)))){
return loom$alg_generic$step(successors__$1,start__$1,cljs.core.next(nbrs),stack,nbrstack,seen__$2);
} else {
return loom$alg_generic$step(successors__$1,nbr,(successors__$1.cljs$core$IFn$_invoke$arity$1 ? successors__$1.cljs$core$IFn$_invoke$arity$1(nbr) : successors__$1.call(null,nbr)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,start__$1),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nbrstack,cljs.core.next(nbrs)),seen__$2);
}
});})(successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1,nbr,temp__5718__auto__,map__34288,map__34288__$1,seen))
,null,null)));
} else {
var temp__5720__auto__ = cljs.core.peek(stack);
if(cljs.core.truth_(temp__5720__auto__)){
var parent = temp__5720__auto__;
var G__35176 = successors__$1;
var G__35177 = parent;
var G__35178 = cljs.core.peek(nbrstack);
var G__35179 = cljs.core.pop(stack);
var G__35180 = cljs.core.pop(nbrstack);
var G__35181 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,start__$1);
successors__$1 = G__35176;
start__$1 = G__35177;
nbrs = G__35178;
stack = G__35179;
nbrstack = G__35180;
seen__$1 = G__35181;
continue;
} else {
return null;
}
}
break;
}
});})(map__34288,map__34288__$1,seen))
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
var len__4730__auto___35184 = arguments.length;
var i__4731__auto___35185 = (0);
while(true){
if((i__4731__auto___35185 < len__4730__auto___35184)){
args__4736__auto__.push((arguments[i__4731__auto___35185]));

var G__35186 = (i__4731__auto___35185 + (1));
i__4731__auto___35185 = G__35186;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__34323){
var map__34324 = p__34323;
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
var G__35191 = seen__$2;
var G__35192 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(preds,u,v);
var G__35193 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,u);
seen__$1 = G__35191;
preds = G__35192;
stack = G__35193;
continue;
} else {
var G__35195 = seen__$2;
var G__35196 = preds;
var G__35197 = cljs.core.pop(stack);
seen__$1 = G__35195;
preds = G__35196;
stack = G__35197;
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
var len__4730__auto___35199 = arguments.length;
var i__4731__auto___35200 = (0);
while(true){
if((i__4731__auto___35200 < len__4730__auto___35199)){
args__4736__auto__.push((arguments[i__4731__auto___35200]));

var G__35201 = (i__4731__auto___35200 + (1));
i__4731__auto___35200 = G__35201;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__34360){
var map__34361 = p__34360;
var map__34361__$1 = (((((!((map__34361 == null))))?(((((map__34361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34361.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34361):map__34361);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34361__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34361__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__35208 = seen__$2;
var G__35209 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,v);
var G__35210 = cljs.core.pop(stack);
seen__$1 = G__35208;
result = G__35209;
stack = G__35210;
continue;
} else {
var G__35211 = seen__$2;
var G__35212 = result;
var G__35213 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,cljs.core.first(nbrs));
seen__$1 = G__35211;
result = G__35212;
stack = G__35213;
continue;
}
}
break;
}
});

loom.alg_generic.post_traverse.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.post_traverse.cljs$lang$applyTo = (function (seq34355){
var G__34356 = cljs.core.first(seq34355);
var seq34355__$1 = cljs.core.next(seq34355);
var G__34357 = cljs.core.first(seq34355__$1);
var seq34355__$2 = cljs.core.next(seq34355__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34356,G__34357,seq34355__$2);
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
var len__4730__auto___35224 = arguments.length;
var i__4731__auto___35225 = (0);
while(true){
if((i__4731__auto___35225 < len__4730__auto___35224)){
args__4736__auto__.push((arguments[i__4731__auto___35225]));

var G__35226 = (i__4731__auto___35225 + (1));
i__4731__auto___35225 = G__35226;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__34378){
var map__34379 = p__34378;
var map__34379__$1 = (((((!((map__34379 == null))))?(((((map__34379.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34379.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34379):map__34379);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34379__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34379__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__35234 = start__$1;
var G__35235 = cljs.core.next(nbrs);
var G__35236 = stack;
var G__35237 = nbrstack;
var G__35238 = seen__$2;
var G__35239 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(edges,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null));
start__$1 = G__35234;
nbrs = G__35235;
stack = G__35236;
nbrstack = G__35237;
seen__$1 = G__35238;
edges = G__35239;
continue;
} else {
var G__35241 = nbr;
var G__35242 = (successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(nbr) : successors.call(null,nbr));
var G__35243 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,start__$1);
var G__35244 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nbrstack,cljs.core.next(nbrs));
var G__35245 = seen__$2;
var G__35246 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(edges,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null));
start__$1 = G__35241;
nbrs = G__35242;
stack = G__35243;
nbrstack = G__35244;
seen__$1 = G__35245;
edges = G__35246;
continue;
}
} else {
var temp__5718__auto____$1 = cljs.core.peek(stack);
if(cljs.core.truth_(temp__5718__auto____$1)){
var parent = temp__5718__auto____$1;
var G__35248 = parent;
var G__35249 = cljs.core.peek(nbrstack);
var G__35250 = cljs.core.pop(stack);
var G__35251 = cljs.core.pop(nbrstack);
var G__35252 = seen__$2;
var G__35253 = edges;
start__$1 = G__35248;
nbrs = G__35249;
stack = G__35250;
nbrstack = G__35251;
seen__$1 = G__35252;
edges = G__35253;
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
var G__34396 = arguments.length;
switch (G__34396) {
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
var G__35265 = seen__$2;
var G__35266 = explored__$1;
var G__35267 = result;
var G__35268 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,cljs.core.first(us));
seen__$1 = G__35265;
explored__$1 = G__35266;
result = G__35267;
stack = G__35268;
continue;
}
} else {
var G__35270 = seen__$2;
var G__35271 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(explored__$1,v);
var G__35272 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,v);
var G__35273 = cljs.core.pop(stack);
seen__$1 = G__35270;
explored__$1 = G__35271;
result = G__35272;
stack = G__35273;
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
var len__4730__auto___35275 = arguments.length;
var i__4731__auto___35276 = (0);
while(true){
if((i__4731__auto___35276 < len__4730__auto___35275)){
args__4736__auto__.push((arguments[i__4731__auto___35276]));

var G__35277 = (i__4731__auto___35276 + (1));
i__4731__auto___35276 = G__35277;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__34443){
var map__34444 = p__34443;
var map__34444__$1 = (((((!((map__34444 == null))))?(((((map__34444.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34444.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34444):map__34444);
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34444__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var when = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34444__$1,new cljs.core.Keyword(null,"when","when",-576417306));
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34444__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
var f__$1 = (function (){var or__4131__auto__ = f;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return ((function (or__4131__auto__,map__34444,map__34444__$1,f,when,seen){
return (function (n,p,d){
return n;
});
;})(or__4131__auto__,map__34444,map__34444__$1,f,when,seen))
}
})();
var nbr_pred = (function (){var or__4131__auto__ = when;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.constantly(true);
}
})();
var step = ((function (f__$1,nbr_pred,map__34444,map__34444__$1,f,when,seen){
return (function loom$alg_generic$step(queue,preds){
var temp__5720__auto__ = cljs.core.peek(queue);
if(cljs.core.truth_(temp__5720__auto__)){
var vec__34502 = temp__5720__auto__;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34502,(0),null);
var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34502,(1),null);
return cljs.core.cons((f__$1.cljs$core$IFn$_invoke$arity$3 ? f__$1.cljs$core$IFn$_invoke$arity$3(node,preds,depth) : f__$1.call(null,node,preds,depth)),(new cljs.core.LazySeq(null,((function (vec__34502,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34444,map__34444__$1,f,when,seen){
return (function (){
var nbrs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__34502,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34444,map__34444__$1,f,when,seen){
return (function (p1__34423_SHARP_){
var G__34505 = p1__34423_SHARP_;
var G__34506 = node;
var G__34507 = (depth + (1));
return (nbr_pred.cljs$core$IFn$_invoke$arity$3 ? nbr_pred.cljs$core$IFn$_invoke$arity$3(G__34505,G__34506,G__34507) : nbr_pred.call(null,G__34505,G__34506,G__34507));
});})(vec__34502,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34444,map__34444__$1,f,when,seen))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__34502,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34444,map__34444__$1,f,when,seen){
return (function (p1__34422_SHARP_){
return cljs.core.contains_QMARK_(preds,p1__34422_SHARP_);
});})(vec__34502,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34444,map__34444__$1,f,when,seen))
,(successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(node) : successors.call(null,node))));
return loom$alg_generic$step(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(queue),(function (){var iter__4523__auto__ = ((function (nbrs,vec__34502,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34444,map__34444__$1,f,when,seen){
return (function loom$alg_generic$step_$_iter__34512(s__34513){
return (new cljs.core.LazySeq(null,((function (nbrs,vec__34502,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34444,map__34444__$1,f,when,seen){
return (function (){
var s__34513__$1 = s__34513;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__34513__$1);
if(temp__5720__auto____$1){
var s__34513__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__34513__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__34513__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__34515 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__34514 = (0);
while(true){
if((i__34514 < size__4522__auto__)){
var nbr = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__34514);
cljs.core.chunk_append(b__34515,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,(depth + (1))], null));

var G__35285 = (i__34514 + (1));
i__34514 = G__35285;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34515),loom$alg_generic$step_$_iter__34512(cljs.core.chunk_rest(s__34513__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34515),null);
}
} else {
var nbr = cljs.core.first(s__34513__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,(depth + (1))], null),loom$alg_generic$step_$_iter__34512(cljs.core.rest(s__34513__$2)));
}
} else {
return null;
}
break;
}
});})(nbrs,vec__34502,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34444,map__34444__$1,f,when,seen))
,null,null));
});})(nbrs,vec__34502,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34444,map__34444__$1,f,when,seen))
;
return iter__4523__auto__(nbrs);
})()),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (nbrs,vec__34502,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34444,map__34444__$1,f,when,seen){
return (function (p1__34424_SHARP_,p2__34425_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__34424_SHARP_,p2__34425_SHARP_,node);
});})(nbrs,vec__34502,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34444,map__34444__$1,f,when,seen))
,preds,nbrs));
});})(vec__34502,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34444,map__34444__$1,f,when,seen))
,null,null)));
} else {
return null;
}
});})(f__$1,nbr_pred,map__34444,map__34444__$1,f,when,seen))
;
return step(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentQueue.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,(0)], null)),((cljs.core.map_QMARK_(seen))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(seen,start,null):cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.createAsIfByAssoc([start,null]),(function (){var iter__4523__auto__ = ((function (f__$1,nbr_pred,map__34444,map__34444__$1,f,when,seen){
return (function loom$alg_generic$iter__34524(s__34525){
return (new cljs.core.LazySeq(null,((function (f__$1,nbr_pred,map__34444,map__34444__$1,f,when,seen){
return (function (){
var s__34525__$1 = s__34525;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__34525__$1);
if(temp__5720__auto__){
var s__34525__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__34525__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__34525__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__34527 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__34526 = (0);
while(true){
if((i__34526 < size__4522__auto__)){
var s = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__34526);
cljs.core.chunk_append(b__34527,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,null], null));

var G__35292 = (i__34526 + (1));
i__34526 = G__35292;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34527),loom$alg_generic$iter__34524(cljs.core.chunk_rest(s__34525__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34527),null);
}
} else {
var s = cljs.core.first(s__34525__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,null], null),loom$alg_generic$iter__34524(cljs.core.rest(s__34525__$2)));
}
} else {
return null;
}
break;
}
});})(f__$1,nbr_pred,map__34444,map__34444__$1,f,when,seen))
,null,null));
});})(f__$1,nbr_pred,map__34444,map__34444__$1,f,when,seen))
;
return iter__4523__auto__(seen);
})())));
});

loom.alg_generic.bf_traverse.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.bf_traverse.cljs$lang$applyTo = (function (seq34427){
var G__34428 = cljs.core.first(seq34427);
var seq34427__$1 = cljs.core.next(seq34427);
var G__34429 = cljs.core.first(seq34427__$1);
var seq34427__$2 = cljs.core.next(seq34427__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34428,G__34429,seq34427__$2);
});

/**
 * Return a breadth-first spanning tree of the form {node
 *   [successors]}
 */
loom.alg_generic.bf_span = (function loom$alg_generic$bf_span(var_args){
var args__4736__auto__ = [];
var len__4730__auto___35294 = arguments.length;
var i__4731__auto___35295 = (0);
while(true){
if((i__4731__auto___35295 < len__4730__auto___35294)){
args__4736__auto__.push((arguments[i__4731__auto___35295]));

var G__35296 = (i__4731__auto___35295 + (1));
i__4731__auto___35295 = G__35296;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__34547){
var map__34548 = p__34547;
var map__34548__$1 = (((((!((map__34548 == null))))?(((((map__34548.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34548.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34548):map__34548);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34548__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
return loom.alg_generic.preds__GT_span(cljs.core.last(loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic(successors,start,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"f","f",-1597136552),((function (map__34548,map__34548__$1,seen){
return (function (_,pm,___$1){
return pm;
});})(map__34548,map__34548__$1,seen))
,new cljs.core.Keyword(null,"seen","seen",-518999789),seen], 0))));
});

loom.alg_generic.bf_span.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.bf_span.cljs$lang$applyTo = (function (seq34537){
var G__34538 = cljs.core.first(seq34537);
var seq34537__$1 = cljs.core.next(seq34537);
var G__34539 = cljs.core.first(seq34537__$1);
var seq34537__$2 = cljs.core.next(seq34537__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34538,G__34539,seq34537__$2);
});

/**
 * Returns a path from start to end with the fewest hops (i.e. irrespective
 *   of edge weights), successors being a function that returns adjacent nodes
 */
loom.alg_generic.bf_path = (function loom$alg_generic$bf_path(var_args){
var args__4736__auto__ = [];
var len__4730__auto___35307 = arguments.length;
var i__4731__auto___35308 = (0);
while(true){
if((i__4731__auto___35308 < len__4730__auto___35307)){
args__4736__auto__.push((arguments[i__4731__auto___35308]));

var G__35310 = (i__4731__auto___35308 + (1));
i__4731__auto___35308 = G__35310;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,end,p__34577){
var map__34578 = p__34577;
var map__34578__$1 = (((((!((map__34578 == null))))?(((((map__34578.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34578.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34578):map__34578);
var opts = map__34578__$1;
var opts__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.vector], null)], 0));
var temp__5720__auto__ = cljs.core.some(((function (opts__$1,map__34578,map__34578__$1,opts){
return (function (p__34583){
var vec__34585 = p__34583;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34585,(0),null);
var pm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34585,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34585,(2),null);
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
loom.alg_generic.bf_path.cljs$lang$applyTo = (function (seq34567){
var G__34568 = cljs.core.first(seq34567);
var seq34567__$1 = cljs.core.next(seq34567);
var G__34569 = cljs.core.first(seq34567__$1);
var seq34567__$2 = cljs.core.next(seq34567__$1);
var G__34570 = cljs.core.first(seq34567__$2);
var seq34567__$3 = cljs.core.next(seq34567__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34568,G__34569,G__34570,seq34567__$3);
});

/**
 * Returns a lazy-seq of the keys that exist in both m1 and m2
 */
loom.alg_generic.shared_keys = (function loom$alg_generic$shared_keys(m1,m2){
while(true){
if((cljs.core.count(m2) < cljs.core.count(m1))){
var G__35332 = m2;
var G__35333 = m1;
m1 = G__35332;
m2 = G__35333;
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

var G__35354 = (i__34599 + (1));
i__34599 = G__35354;
continue;
} else {
var G__35355 = (i__34599 + (1));
i__34599 = G__35355;
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
var G__35356 = cljs.core.rest(s__34598__$2);
s__34598__$1 = G__35356;
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
var G__35357 = cljs.core.rest(s__34596__$1);
s__34596__$1 = G__35357;
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
var iter__4523__auto__ = (function loom$alg_generic$conj_paths_$_iter__34609(s__34610){
return (new cljs.core.LazySeq(null,(function (){
var s__34610__$1 = s__34610;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__34610__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var n = cljs.core.first(xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__34610__$1,n,xs__6277__auto__,temp__5720__auto__){
return (function loom$alg_generic$conj_paths_$_iter__34609_$_iter__34611(s__34612){
return (new cljs.core.LazySeq(null,((function (s__34610__$1,n,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__34612__$1 = s__34612;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__34612__$1);
if(temp__5720__auto____$1){
var xs__6277__auto____$1 = temp__5720__auto____$1;
var from = cljs.core.first(xs__6277__auto____$1);
var iterys__4519__auto__ = ((function (s__34612__$1,s__34610__$1,from,xs__6277__auto____$1,temp__5720__auto____$1,n,xs__6277__auto__,temp__5720__auto__){
return (function loom$alg_generic$conj_paths_$_iter__34609_$_iter__34611_$_iter__34613(s__34614){
return (new cljs.core.LazySeq(null,((function (s__34612__$1,s__34610__$1,from,xs__6277__auto____$1,temp__5720__auto____$1,n,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__34614__$1 = s__34614;
while(true){
var temp__5720__auto____$2 = cljs.core.seq(s__34614__$1);
if(temp__5720__auto____$2){
var s__34614__$2 = temp__5720__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__34614__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__34614__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__34616 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__34615 = (0);
while(true){
if((i__34615 < size__4522__auto__)){
var to = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__34615);
cljs.core.chunk_append(b__34616,cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(from,to)));

var G__35362 = (i__34615 + (1));
i__34615 = G__35362;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34616),loom$alg_generic$conj_paths_$_iter__34609_$_iter__34611_$_iter__34613(cljs.core.chunk_rest(s__34614__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34616),null);
}
} else {
var to = cljs.core.first(s__34614__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(from,to)),loom$alg_generic$conj_paths_$_iter__34609_$_iter__34611_$_iter__34613(cljs.core.rest(s__34614__$2)));
}
} else {
return null;
}
break;
}
});})(s__34612__$1,s__34610__$1,from,xs__6277__auto____$1,temp__5720__auto____$1,n,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__34612__$1,s__34610__$1,from,xs__6277__auto____$1,temp__5720__auto____$1,n,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,loom.alg_generic.trace_paths(to_map,n))));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,loom$alg_generic$conj_paths_$_iter__34609_$_iter__34611(cljs.core.rest(s__34612__$1)));
} else {
var G__35367 = cljs.core.rest(s__34612__$1);
s__34612__$1 = G__35367;
continue;
}
} else {
return null;
}
break;
}
});})(s__34610__$1,n,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__34610__$1,n,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.reverse,loom.alg_generic.trace_paths(from_map,n))));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,loom$alg_generic$conj_paths_$_iter__34609(cljs.core.rest(s__34610__$1)));
} else {
var G__35368 = cljs.core.rest(s__34610__$1);
s__34610__$1 = G__35368;
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
return (function (p1__34640_SHARP_){
return cljs.core.contains_QMARK_(coll,p1__34640_SHARP_);
});})(find_succs,find_preds))
,q));
});})(find_succs,find_preds))
;
var map_set_pairs = ((function (find_succs,find_preds,overlaps){
return (function (map,pairs){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (find_succs,find_preds,overlaps){
return (function (map__$1,p__34659){
var vec__34663 = p__34659;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34663,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34663,(1),null);
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
var G__35377 = outgoing__$1;
var G__35378 = incoming;
var G__35379 = q1__$1;
var G__35380 = q2;
outgoing = G__35377;
incoming = G__35378;
q1 = G__35379;
q2 = G__35380;
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
var G__35382 = outgoing;
var G__35383 = incoming__$1;
var G__35384 = q1;
var G__35385 = q2__$1;
outgoing = G__35382;
incoming = G__35383;
q1 = G__35384;
q2 = G__35385;
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
var G__34717 = arguments.length;
switch (G__34717) {
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
var step = (function loom$alg_generic$step(p__34748){
var vec__34749 = p__34748;
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34749,(0),null);
var pq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34749,(1),null);
var temp__5720__auto__ = cljs.core.first(pq);
if(cljs.core.truth_(temp__5720__auto__)){
var vec__34754 = temp__5720__auto__;
var dist_su = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34754,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34754,(1),null);
var u = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34754,(2),null);
var fpq = vec__34754;
return cljs.core.cons((f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(u,state) : f.call(null,u,state)),(new cljs.core.LazySeq(null,((function (vec__34754,dist_su,_,u,fpq,temp__5720__auto__,vec__34749,state,pq){
return (function (){
return loom$alg_generic$step(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__34754,dist_su,_,u,fpq,temp__5720__auto__,vec__34749,state,pq){
return (function (p__34760,v){
var vec__34761 = p__34760;
var state__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34761,(0),null);
var pq__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34761,(1),null);
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
});})(vec__34754,dist_su,_,u,fpq,temp__5720__auto__,vec__34749,state,pq))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(pq,fpq)], null),(successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(u) : successors.call(null,u))));
});})(vec__34754,dist_su,_,u,fpq,temp__5720__auto__,vec__34749,state,pq))
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (span,p__34775){
var vec__34778 = p__34775;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34778,(0),null);
var vec__34781 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34778,(1),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34781,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34781,(1),null);
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
var temp__5718__auto__ = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__34792){
var vec__34793 = p__34792;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34793,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34793,(1),null);
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
var len__4730__auto___35407 = arguments.length;
var i__4731__auto___35408 = (0);
while(true){
if((i__4731__auto___35408 < len__4730__auto___35407)){
args__4736__auto__.push((arguments[i__4731__auto___35408]));

var G__35409 = (i__4731__auto___35408 + (1));
i__4731__auto___35408 = G__35409;
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
var seq__34832_35414 = cljs.core.seq(cljs.core.rest(bitmaps));
var chunk__34840_35415 = null;
var count__34841_35416 = (0);
var i__34842_35417 = (0);
while(true){
if((i__34842_35417 < count__34841_35416)){
var bitmap_35418 = chunk__34840_35415.cljs$core$IIndexed$_nth$arity$2(null,i__34842_35417);
var seq__34843_35419 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.list,bitmap_35418));
var chunk__34845_35420 = null;
var count__34846_35421 = (0);
var i__34847_35422 = (0);
while(true){
if((i__34847_35422 < count__34846_35421)){
var vec__34910_35423 = chunk__34845_35420.cljs$core$IIndexed$_nth$arity$2(null,i__34847_35422);
var idx_35424 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34910_35423,(0),null);
var value_35425 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34910_35423,(1),null);
var masked_value_35426 = (value_35425 | (new_bitmap[idx_35424]));
(new_bitmap[idx_35424] = masked_value_35426);


var G__35427 = seq__34843_35419;
var G__35428 = chunk__34845_35420;
var G__35429 = count__34846_35421;
var G__35430 = (i__34847_35422 + (1));
seq__34843_35419 = G__35427;
chunk__34845_35420 = G__35428;
count__34846_35421 = G__35429;
i__34847_35422 = G__35430;
continue;
} else {
var temp__5720__auto___35431 = cljs.core.seq(seq__34843_35419);
if(temp__5720__auto___35431){
var seq__34843_35432__$1 = temp__5720__auto___35431;
if(cljs.core.chunked_seq_QMARK_(seq__34843_35432__$1)){
var c__4550__auto___35433 = cljs.core.chunk_first(seq__34843_35432__$1);
var G__35434 = cljs.core.chunk_rest(seq__34843_35432__$1);
var G__35435 = c__4550__auto___35433;
var G__35436 = cljs.core.count(c__4550__auto___35433);
var G__35437 = (0);
seq__34843_35419 = G__35434;
chunk__34845_35420 = G__35435;
count__34846_35421 = G__35436;
i__34847_35422 = G__35437;
continue;
} else {
var vec__34921_35438 = cljs.core.first(seq__34843_35432__$1);
var idx_35439 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34921_35438,(0),null);
var value_35440 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34921_35438,(1),null);
var masked_value_35441 = (value_35440 | (new_bitmap[idx_35439]));
(new_bitmap[idx_35439] = masked_value_35441);


var G__35442 = cljs.core.next(seq__34843_35432__$1);
var G__35443 = null;
var G__35444 = (0);
var G__35445 = (0);
seq__34843_35419 = G__35442;
chunk__34845_35420 = G__35443;
count__34846_35421 = G__35444;
i__34847_35422 = G__35445;
continue;
}
} else {
}
}
break;
}

var G__35447 = seq__34832_35414;
var G__35448 = chunk__34840_35415;
var G__35449 = count__34841_35416;
var G__35450 = (i__34842_35417 + (1));
seq__34832_35414 = G__35447;
chunk__34840_35415 = G__35448;
count__34841_35416 = G__35449;
i__34842_35417 = G__35450;
continue;
} else {
var temp__5720__auto___35452 = cljs.core.seq(seq__34832_35414);
if(temp__5720__auto___35452){
var seq__34832_35453__$1 = temp__5720__auto___35452;
if(cljs.core.chunked_seq_QMARK_(seq__34832_35453__$1)){
var c__4550__auto___35454 = cljs.core.chunk_first(seq__34832_35453__$1);
var G__35455 = cljs.core.chunk_rest(seq__34832_35453__$1);
var G__35456 = c__4550__auto___35454;
var G__35457 = cljs.core.count(c__4550__auto___35454);
var G__35458 = (0);
seq__34832_35414 = G__35455;
chunk__34840_35415 = G__35456;
count__34841_35416 = G__35457;
i__34842_35417 = G__35458;
continue;
} else {
var bitmap_35459 = cljs.core.first(seq__34832_35453__$1);
var seq__34833_35460 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.list,bitmap_35459));
var chunk__34835_35461 = null;
var count__34836_35462 = (0);
var i__34837_35463 = (0);
while(true){
if((i__34837_35463 < count__34836_35462)){
var vec__34968_35465 = chunk__34835_35461.cljs$core$IIndexed$_nth$arity$2(null,i__34837_35463);
var idx_35466 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34968_35465,(0),null);
var value_35467 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34968_35465,(1),null);
var masked_value_35468 = (value_35467 | (new_bitmap[idx_35466]));
(new_bitmap[idx_35466] = masked_value_35468);


var G__35469 = seq__34833_35460;
var G__35470 = chunk__34835_35461;
var G__35471 = count__34836_35462;
var G__35472 = (i__34837_35463 + (1));
seq__34833_35460 = G__35469;
chunk__34835_35461 = G__35470;
count__34836_35462 = G__35471;
i__34837_35463 = G__35472;
continue;
} else {
var temp__5720__auto___35473__$1 = cljs.core.seq(seq__34833_35460);
if(temp__5720__auto___35473__$1){
var seq__34833_35474__$1 = temp__5720__auto___35473__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34833_35474__$1)){
var c__4550__auto___35475 = cljs.core.chunk_first(seq__34833_35474__$1);
var G__35476 = cljs.core.chunk_rest(seq__34833_35474__$1);
var G__35477 = c__4550__auto___35475;
var G__35478 = cljs.core.count(c__4550__auto___35475);
var G__35479 = (0);
seq__34833_35460 = G__35476;
chunk__34835_35461 = G__35477;
count__34836_35462 = G__35478;
i__34837_35463 = G__35479;
continue;
} else {
var vec__34972_35480 = cljs.core.first(seq__34833_35474__$1);
var idx_35481 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34972_35480,(0),null);
var value_35482 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34972_35480,(1),null);
var masked_value_35483 = (value_35482 | (new_bitmap[idx_35481]));
(new_bitmap[idx_35481] = masked_value_35483);


var G__35484 = cljs.core.next(seq__34833_35474__$1);
var G__35485 = null;
var G__35486 = (0);
var G__35487 = (0);
seq__34833_35460 = G__35484;
chunk__34835_35461 = G__35485;
count__34836_35462 = G__35486;
i__34837_35463 = G__35487;
continue;
}
} else {
}
}
break;
}

var G__35488 = cljs.core.next(seq__34832_35453__$1);
var G__35489 = null;
var G__35490 = (0);
var G__35491 = (0);
seq__34832_35414 = G__35488;
chunk__34840_35415 = G__35489;
count__34841_35416 = G__35490;
i__34842_35417 = G__35491;
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
loom.alg_generic.bm_or.cljs$lang$applyTo = (function (seq34826){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34826));
});

/**
 * Get the indicies of set bits in 'bitmap.
 */
loom.alg_generic.bm_get_indicies = (function loom$alg_generic$bm_get_indicies(bitmap){
var iter__4523__auto__ = (function loom$alg_generic$bm_get_indicies_$_iter__34979(s__34980){
return (new cljs.core.LazySeq(null,(function (){
var s__34980__$1 = s__34980;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__34980__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var chunk = cljs.core.first(xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__34980__$1,chunk,xs__6277__auto__,temp__5720__auto__){
return (function loom$alg_generic$bm_get_indicies_$_iter__34979_$_iter__34981(s__34982){
return (new cljs.core.LazySeq(null,((function (s__34980__$1,chunk,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__34982__$1 = s__34982;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__34982__$1);
if(temp__5720__auto____$1){
var s__34982__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__34982__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__34982__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__34984 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__34983 = (0);
while(true){
if((i__34983 < size__4522__auto__)){
var offset = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__34983);
var idx = ((chunk * loom.alg_generic.bits_per_long) + offset);
if(cljs.core.truth_(loom.alg_generic.bm_get(bitmap,idx))){
cljs.core.chunk_append(b__34984,idx);

var G__35497 = (i__34983 + (1));
i__34983 = G__35497;
continue;
} else {
var G__35498 = (i__34983 + (1));
i__34983 = G__35498;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34984),loom$alg_generic$bm_get_indicies_$_iter__34979_$_iter__34981(cljs.core.chunk_rest(s__34982__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34984),null);
}
} else {
var offset = cljs.core.first(s__34982__$2);
var idx = ((chunk * loom.alg_generic.bits_per_long) + offset);
if(cljs.core.truth_(loom.alg_generic.bm_get(bitmap,idx))){
return cljs.core.cons(idx,loom$alg_generic$bm_get_indicies_$_iter__34979_$_iter__34981(cljs.core.rest(s__34982__$2)));
} else {
var G__35503 = cljs.core.rest(s__34982__$2);
s__34982__$1 = G__35503;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__34980__$1,chunk,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__34980__$1,chunk,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(loom.alg_generic.bits_per_long)));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,loom$alg_generic$bm_get_indicies_$_iter__34979(cljs.core.rest(s__34980__$1)));
} else {
var G__35506 = cljs.core.rest(s__34980__$1);
s__34980__$1 = G__35506;
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

loom.alg_generic.Ancestry.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k34991,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__35025 = k34991;
var G__35025__$1 = (((G__35025 instanceof cljs.core.Keyword))?G__35025.fqn:null);
switch (G__35025__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34991,else__4388__auto__);

}
});

loom.alg_generic.Ancestry.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__35029){
var vec__35032 = p__35029;
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

loom.alg_generic.Ancestry.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34990){
var self__ = this;
var G__34990__$1 = this;
return (new cljs.core.RecordIter((0),G__34990__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node->idx","node->idx",152705227),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4243__auto____$1 = (function (){var fexpr__35045 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1116202445 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__35045(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

loom.alg_generic.Ancestry.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34992,other34993){
var self__ = this;
var this34992__$1 = this;
return (((!((other34993 == null)))) && ((this34992__$1.constructor === other34993.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34992__$1.node__GT_idx,other34993.node__GT_idx)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34992__$1.idx__GT_node,other34993.idx__GT_node)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34992__$1.bitmaps,other34993.bitmaps)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34992__$1.__extmap,other34993.__extmap)));
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

loom.alg_generic.Ancestry.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__34990){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__35061 = cljs.core.keyword_identical_QMARK_;
var expr__35062 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__35068 = new cljs.core.Keyword(null,"node->idx","node->idx",152705227);
var G__35069 = expr__35062;
return (pred__35061.cljs$core$IFn$_invoke$arity$2 ? pred__35061.cljs$core$IFn$_invoke$arity$2(G__35068,G__35069) : pred__35061.call(null,G__35068,G__35069));
})())){
return (new loom.alg_generic.Ancestry(G__34990,self__.idx__GT_node,self__.bitmaps,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__35074 = new cljs.core.Keyword(null,"idx->node","idx->node",1811907175);
var G__35075 = expr__35062;
return (pred__35061.cljs$core$IFn$_invoke$arity$2 ? pred__35061.cljs$core$IFn$_invoke$arity$2(G__35074,G__35075) : pred__35061.call(null,G__35074,G__35075));
})())){
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,G__34990,self__.bitmaps,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__35076 = new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842);
var G__35077 = expr__35062;
return (pred__35061.cljs$core$IFn$_invoke$arity$2 ? pred__35061.cljs$core$IFn$_invoke$arity$2(G__35076,G__35077) : pred__35061.call(null,G__35076,G__35077));
})())){
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,G__34990,self__.__meta,self__.__extmap,null));
} else {
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__34990),null));
}
}
}
});

loom.alg_generic.Ancestry.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"node->idx","node->idx",152705227),self__.node__GT_idx,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),self__.idx__GT_node,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),self__.bitmaps,null))], null),self__.__extmap));
});

loom.alg_generic.Ancestry.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__34990){
var self__ = this;
var this__4384__auto____$1 = this;
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,G__34990,self__.__extmap,self__.__hash));
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
loom.alg_generic.map__GT_Ancestry = (function loom$alg_generic$map__GT_Ancestry(G__35006){
var extmap__4424__auto__ = (function (){var G__35095 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35006,new cljs.core.Keyword(null,"node->idx","node->idx",152705227),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842)], 0));
if(cljs.core.record_QMARK_(G__35006)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35095);
} else {
return G__35095;
}
})();
return (new loom.alg_generic.Ancestry(new cljs.core.Keyword(null,"node->idx","node->idx",152705227).cljs$core$IFn$_invoke$arity$1(G__35006),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175).cljs$core$IFn$_invoke$arity$1(G__35006),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842).cljs$core$IFn$_invoke$arity$1(G__35006),null,cljs.core.not_empty(extmap__4424__auto__),null));
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
var len__4730__auto___35542 = arguments.length;
var i__4731__auto___35543 = (0);
while(true){
if((i__4731__auto___35543 < len__4730__auto___35542)){
args__4736__auto__.push((arguments[i__4731__auto___35543]));

var G__35544 = (i__4731__auto___35543 + (1));
i__4731__auto___35543 = G__35544;
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
var map__35115 = ancestry;
var map__35115__$1 = (((((!((map__35115 == null))))?(((((map__35115.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35115.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35115):map__35115);
var node__GT_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35115__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var idx__GT_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35115__$1,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175));
var bitmaps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35115__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
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
loom.alg_generic.ancestry_add.cljs$lang$applyTo = (function (seq35105){
var G__35106 = cljs.core.first(seq35105);
var seq35105__$1 = cljs.core.next(seq35105);
var G__35107 = cljs.core.first(seq35105__$1);
var seq35105__$2 = cljs.core.next(seq35105__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35106,G__35107,seq35105__$2);
});

/**
 * Finds if the 'parenter node is an ancestor of 'childer node for the given
 *   'ancestry cache.
 */
loom.alg_generic.ancestor_QMARK_ = (function loom$alg_generic$ancestor_QMARK_(ancestry,childer,parenter){
var map__35126 = ancestry;
var map__35126__$1 = (((((!((map__35126 == null))))?(((((map__35126.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35126.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35126):map__35126);
var node__GT_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35126__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var bitmaps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35126__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
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
var map__35135 = ancestry;
var map__35135__$1 = (((((!((map__35135 == null))))?(((((map__35135.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35135.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35135):map__35135);
var node__GT_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35135__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var idx__GT_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35135__$1,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175));
var bitmaps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35135__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
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
