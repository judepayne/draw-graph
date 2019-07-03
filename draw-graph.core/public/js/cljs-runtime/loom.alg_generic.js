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
var len__4730__auto___35117 = arguments.length;
var i__4731__auto___35118 = (0);
while(true){
if((i__4731__auto___35118 < len__4730__auto___35117)){
args__4736__auto__.push((arguments[i__4731__auto___35118]));

var G__35120 = (i__4731__auto___35118 + (1));
i__4731__auto___35118 = G__35120;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__34205){
var map__34206 = p__34205;
var map__34206__$1 = (((((!((map__34206 == null))))?(((((map__34206.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34206.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34206):map__34206);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34206__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var step = ((function (map__34206,map__34206__$1,seen){
return (function loom$alg_generic$step(stack,seen__$1){
var temp__5720__auto__ = cljs.core.peek(stack);
if(cljs.core.truth_(temp__5720__auto__)){
var node = temp__5720__auto__;
if(cljs.core.contains_QMARK_(seen__$1,node)){
return loom$alg_generic$step(cljs.core.pop(stack),seen__$1);
} else {
var seen__$2 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,node);
var nbrs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(seen__$2,(successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(node) : successors.call(null,node)));
return (new cljs.core.LazySeq(null,((function (seen__$2,nbrs,node,temp__5720__auto__,map__34206,map__34206__$1,seen){
return (function (){
return cljs.core.cons(node,loom$alg_generic$step(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(stack),nbrs),seen__$2));
});})(seen__$2,nbrs,node,temp__5720__auto__,map__34206,map__34206__$1,seen))
,null,null));
}
} else {
return null;
}
});})(map__34206,map__34206__$1,seen))
;
return step(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null),seen);
});

loom.alg_generic.pre_traverse.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.pre_traverse.cljs$lang$applyTo = (function (seq34197){
var G__34198 = cljs.core.first(seq34197);
var seq34197__$1 = cljs.core.next(seq34197);
var G__34199 = cljs.core.first(seq34197__$1);
var seq34197__$2 = cljs.core.next(seq34197__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34198,G__34199,seq34197__$2);
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
var len__4730__auto___35135 = arguments.length;
var i__4731__auto___35136 = (0);
while(true){
if((i__4731__auto___35136 < len__4730__auto___35135)){
args__4736__auto__.push((arguments[i__4731__auto___35136]));

var G__35137 = (i__4731__auto___35136 + (1));
i__4731__auto___35136 = G__35137;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__34266){
var map__34269 = p__34266;
var map__34269__$1 = (((((!((map__34269 == null))))?(((((map__34269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34269.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34269):map__34269);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34269__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var step = ((function (map__34269,map__34269__$1,seen){
return (function loom$alg_generic$step(successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1){
while(true){
var temp__5718__auto__ = cljs.core.first(nbrs);
if(cljs.core.truth_(temp__5718__auto__)){
var nbr = temp__5718__auto__;
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null),(new cljs.core.LazySeq(null,((function (successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1,nbr,temp__5718__auto__,map__34269,map__34269__$1,seen){
return (function (){
var seen__$2 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,start__$1);
if(cljs.core.truth_((seen__$2.cljs$core$IFn$_invoke$arity$1 ? seen__$2.cljs$core$IFn$_invoke$arity$1(nbr) : seen__$2.call(null,nbr)))){
return loom$alg_generic$step(successors__$1,start__$1,cljs.core.next(nbrs),stack,nbrstack,seen__$2);
} else {
return loom$alg_generic$step(successors__$1,nbr,(successors__$1.cljs$core$IFn$_invoke$arity$1 ? successors__$1.cljs$core$IFn$_invoke$arity$1(nbr) : successors__$1.call(null,nbr)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,start__$1),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nbrstack,cljs.core.next(nbrs)),seen__$2);
}
});})(successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1,nbr,temp__5718__auto__,map__34269,map__34269__$1,seen))
,null,null)));
} else {
var temp__5720__auto__ = cljs.core.peek(stack);
if(cljs.core.truth_(temp__5720__auto__)){
var parent = temp__5720__auto__;
var G__35150 = successors__$1;
var G__35151 = parent;
var G__35152 = cljs.core.peek(nbrstack);
var G__35153 = cljs.core.pop(stack);
var G__35154 = cljs.core.pop(nbrstack);
var G__35155 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,start__$1);
successors__$1 = G__35150;
start__$1 = G__35151;
nbrs = G__35152;
stack = G__35153;
nbrstack = G__35154;
seen__$1 = G__35155;
continue;
} else {
return null;
}
}
break;
}
});})(map__34269,map__34269__$1,seen))
;
if(cljs.core.truth_((seen.cljs$core$IFn$_invoke$arity$1 ? seen.cljs$core$IFn$_invoke$arity$1(start) : seen.call(null,start)))){
return null;
} else {
return step(successors,start,(successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(start) : successors.call(null,start)),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,start));
}
});

loom.alg_generic.pre_edge_traverse.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.pre_edge_traverse.cljs$lang$applyTo = (function (seq34242){
var G__34243 = cljs.core.first(seq34242);
var seq34242__$1 = cljs.core.next(seq34242);
var G__34244 = cljs.core.first(seq34242__$1);
var seq34242__$2 = cljs.core.next(seq34242__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34243,G__34244,seq34242__$2);
});

/**
 * Returns a depth-first spanning tree of the form {node [successors]}
 */
loom.alg_generic.pre_span = (function loom$alg_generic$pre_span(var_args){
var args__4736__auto__ = [];
var len__4730__auto___35162 = arguments.length;
var i__4731__auto___35163 = (0);
while(true){
if((i__4731__auto___35163 < len__4730__auto___35162)){
args__4736__auto__.push((arguments[i__4731__auto___35163]));

var G__35164 = (i__4731__auto___35163 + (1));
i__4731__auto___35163 = G__35164;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__34301){
var map__34302 = p__34301;
var map__34302__$1 = (((((!((map__34302 == null))))?(((((map__34302.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34302.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34302):map__34302);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34302__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34302__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__35171 = seen__$2;
var G__35172 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(preds,u,v);
var G__35173 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,u);
seen__$1 = G__35171;
preds = G__35172;
stack = G__35173;
continue;
} else {
var G__35177 = seen__$2;
var G__35178 = preds;
var G__35179 = cljs.core.pop(stack);
seen__$1 = G__35177;
preds = G__35178;
stack = G__35179;
continue;
}
}
break;
}
});

loom.alg_generic.pre_span.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.pre_span.cljs$lang$applyTo = (function (seq34293){
var G__34294 = cljs.core.first(seq34293);
var seq34293__$1 = cljs.core.next(seq34293);
var G__34295 = cljs.core.first(seq34293__$1);
var seq34293__$2 = cljs.core.next(seq34293__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34294,G__34295,seq34293__$2);
});

/**
 * Traverses a graph depth-first postorder from start, successors
 *   being a function that returns adjacent nodes. Returns a vector
 */
loom.alg_generic.post_traverse = (function loom$alg_generic$post_traverse(var_args){
var args__4736__auto__ = [];
var len__4730__auto___35181 = arguments.length;
var i__4731__auto___35182 = (0);
while(true){
if((i__4731__auto___35182 < len__4730__auto___35181)){
args__4736__auto__.push((arguments[i__4731__auto___35182]));

var G__35183 = (i__4731__auto___35182 + (1));
i__4731__auto___35182 = G__35183;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__34330){
var map__34331 = p__34330;
var map__34331__$1 = (((((!((map__34331 == null))))?(((((map__34331.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34331.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34331):map__34331);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34331__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34331__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__35186 = seen__$2;
var G__35187 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,v);
var G__35188 = cljs.core.pop(stack);
seen__$1 = G__35186;
result = G__35187;
stack = G__35188;
continue;
} else {
var G__35189 = seen__$2;
var G__35190 = result;
var G__35191 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,cljs.core.first(nbrs));
seen__$1 = G__35189;
result = G__35190;
stack = G__35191;
continue;
}
}
break;
}
});

loom.alg_generic.post_traverse.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.post_traverse.cljs$lang$applyTo = (function (seq34325){
var G__34326 = cljs.core.first(seq34325);
var seq34325__$1 = cljs.core.next(seq34325);
var G__34327 = cljs.core.first(seq34325__$1);
var seq34325__$2 = cljs.core.next(seq34325__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34326,G__34327,seq34325__$2);
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
var len__4730__auto___35194 = arguments.length;
var i__4731__auto___35195 = (0);
while(true){
if((i__4731__auto___35195 < len__4730__auto___35194)){
args__4736__auto__.push((arguments[i__4731__auto___35195]));

var G__35196 = (i__4731__auto___35195 + (1));
i__4731__auto___35195 = G__35196;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__34346){
var map__34347 = p__34346;
var map__34347__$1 = (((((!((map__34347 == null))))?(((((map__34347.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34347.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34347):map__34347);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34347__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34347__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__35203 = start__$1;
var G__35204 = cljs.core.next(nbrs);
var G__35205 = stack;
var G__35206 = nbrstack;
var G__35207 = seen__$2;
var G__35208 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(edges,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null));
start__$1 = G__35203;
nbrs = G__35204;
stack = G__35205;
nbrstack = G__35206;
seen__$1 = G__35207;
edges = G__35208;
continue;
} else {
var G__35209 = nbr;
var G__35210 = (successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(nbr) : successors.call(null,nbr));
var G__35211 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,start__$1);
var G__35212 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nbrstack,cljs.core.next(nbrs));
var G__35213 = seen__$2;
var G__35214 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(edges,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null));
start__$1 = G__35209;
nbrs = G__35210;
stack = G__35211;
nbrstack = G__35212;
seen__$1 = G__35213;
edges = G__35214;
continue;
}
} else {
var temp__5718__auto____$1 = cljs.core.peek(stack);
if(cljs.core.truth_(temp__5718__auto____$1)){
var parent = temp__5718__auto____$1;
var G__35215 = parent;
var G__35216 = cljs.core.peek(nbrstack);
var G__35217 = cljs.core.pop(stack);
var G__35218 = cljs.core.pop(nbrstack);
var G__35219 = seen__$2;
var G__35220 = edges;
start__$1 = G__35215;
nbrs = G__35216;
stack = G__35217;
nbrstack = G__35218;
seen__$1 = G__35219;
edges = G__35220;
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
loom.alg_generic.post_edge_traverse.cljs$lang$applyTo = (function (seq34339){
var G__34340 = cljs.core.first(seq34339);
var seq34339__$1 = cljs.core.next(seq34339);
var G__34341 = cljs.core.first(seq34339__$1);
var seq34339__$2 = cljs.core.next(seq34339__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34340,G__34341,seq34339__$2);
});

/**
 * Topological sort of a component of a (presumably) directed graph.
 *   Returns nil if the graph contains any cycles. See loom.alg/topsort
 *   for a complete topological sort
 */
loom.alg_generic.topsort_component = (function loom$alg_generic$topsort_component(var_args){
var G__34378 = arguments.length;
switch (G__34378) {
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
var G__35227 = seen__$2;
var G__35228 = explored__$1;
var G__35229 = result;
var G__35230 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,cljs.core.first(us));
seen__$1 = G__35227;
explored__$1 = G__35228;
result = G__35229;
stack = G__35230;
continue;
}
} else {
var G__35231 = seen__$2;
var G__35232 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(explored__$1,v);
var G__35233 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,v);
var G__35234 = cljs.core.pop(stack);
seen__$1 = G__35231;
explored__$1 = G__35232;
result = G__35233;
stack = G__35234;
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
var len__4730__auto___35237 = arguments.length;
var i__4731__auto___35238 = (0);
while(true){
if((i__4731__auto___35238 < len__4730__auto___35237)){
args__4736__auto__.push((arguments[i__4731__auto___35238]));

var G__35240 = (i__4731__auto___35238 + (1));
i__4731__auto___35238 = G__35240;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__34415){
var map__34417 = p__34415;
var map__34417__$1 = (((((!((map__34417 == null))))?(((((map__34417.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34417.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34417):map__34417);
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34417__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var when = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34417__$1,new cljs.core.Keyword(null,"when","when",-576417306));
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34417__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
var f__$1 = (function (){var or__4131__auto__ = f;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return ((function (or__4131__auto__,map__34417,map__34417__$1,f,when,seen){
return (function (n,p,d){
return n;
});
;})(or__4131__auto__,map__34417,map__34417__$1,f,when,seen))
}
})();
var nbr_pred = (function (){var or__4131__auto__ = when;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.constantly(true);
}
})();
var step = ((function (f__$1,nbr_pred,map__34417,map__34417__$1,f,when,seen){
return (function loom$alg_generic$step(queue,preds){
var temp__5720__auto__ = cljs.core.peek(queue);
if(cljs.core.truth_(temp__5720__auto__)){
var vec__34456 = temp__5720__auto__;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34456,(0),null);
var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34456,(1),null);
return cljs.core.cons((f__$1.cljs$core$IFn$_invoke$arity$3 ? f__$1.cljs$core$IFn$_invoke$arity$3(node,preds,depth) : f__$1.call(null,node,preds,depth)),(new cljs.core.LazySeq(null,((function (vec__34456,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34417,map__34417__$1,f,when,seen){
return (function (){
var nbrs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__34456,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34417,map__34417__$1,f,when,seen){
return (function (p1__34403_SHARP_){
var G__34463 = p1__34403_SHARP_;
var G__34464 = node;
var G__34465 = (depth + (1));
return (nbr_pred.cljs$core$IFn$_invoke$arity$3 ? nbr_pred.cljs$core$IFn$_invoke$arity$3(G__34463,G__34464,G__34465) : nbr_pred.call(null,G__34463,G__34464,G__34465));
});})(vec__34456,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34417,map__34417__$1,f,when,seen))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__34456,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34417,map__34417__$1,f,when,seen){
return (function (p1__34401_SHARP_){
return cljs.core.contains_QMARK_(preds,p1__34401_SHARP_);
});})(vec__34456,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34417,map__34417__$1,f,when,seen))
,(successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(node) : successors.call(null,node))));
return loom$alg_generic$step(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(queue),(function (){var iter__4523__auto__ = ((function (nbrs,vec__34456,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34417,map__34417__$1,f,when,seen){
return (function loom$alg_generic$step_$_iter__34470(s__34471){
return (new cljs.core.LazySeq(null,((function (nbrs,vec__34456,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34417,map__34417__$1,f,when,seen){
return (function (){
var s__34471__$1 = s__34471;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__34471__$1);
if(temp__5720__auto____$1){
var s__34471__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__34471__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__34471__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__34473 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__34472 = (0);
while(true){
if((i__34472 < size__4522__auto__)){
var nbr = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__34472);
cljs.core.chunk_append(b__34473,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,(depth + (1))], null));

var G__35246 = (i__34472 + (1));
i__34472 = G__35246;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34473),loom$alg_generic$step_$_iter__34470(cljs.core.chunk_rest(s__34471__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34473),null);
}
} else {
var nbr = cljs.core.first(s__34471__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,(depth + (1))], null),loom$alg_generic$step_$_iter__34470(cljs.core.rest(s__34471__$2)));
}
} else {
return null;
}
break;
}
});})(nbrs,vec__34456,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34417,map__34417__$1,f,when,seen))
,null,null));
});})(nbrs,vec__34456,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34417,map__34417__$1,f,when,seen))
;
return iter__4523__auto__(nbrs);
})()),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (nbrs,vec__34456,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34417,map__34417__$1,f,when,seen){
return (function (p1__34404_SHARP_,p2__34405_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__34404_SHARP_,p2__34405_SHARP_,node);
});})(nbrs,vec__34456,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34417,map__34417__$1,f,when,seen))
,preds,nbrs));
});})(vec__34456,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34417,map__34417__$1,f,when,seen))
,null,null)));
} else {
return null;
}
});})(f__$1,nbr_pred,map__34417,map__34417__$1,f,when,seen))
;
return step(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentQueue.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,(0)], null)),((cljs.core.map_QMARK_(seen))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(seen,start,null):cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.createAsIfByAssoc([start,null]),(function (){var iter__4523__auto__ = ((function (f__$1,nbr_pred,map__34417,map__34417__$1,f,when,seen){
return (function loom$alg_generic$iter__34486(s__34487){
return (new cljs.core.LazySeq(null,((function (f__$1,nbr_pred,map__34417,map__34417__$1,f,when,seen){
return (function (){
var s__34487__$1 = s__34487;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__34487__$1);
if(temp__5720__auto__){
var s__34487__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__34487__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__34487__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__34489 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__34488 = (0);
while(true){
if((i__34488 < size__4522__auto__)){
var s = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__34488);
cljs.core.chunk_append(b__34489,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,null], null));

var G__35256 = (i__34488 + (1));
i__34488 = G__35256;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34489),loom$alg_generic$iter__34486(cljs.core.chunk_rest(s__34487__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34489),null);
}
} else {
var s = cljs.core.first(s__34487__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,null], null),loom$alg_generic$iter__34486(cljs.core.rest(s__34487__$2)));
}
} else {
return null;
}
break;
}
});})(f__$1,nbr_pred,map__34417,map__34417__$1,f,when,seen))
,null,null));
});})(f__$1,nbr_pred,map__34417,map__34417__$1,f,when,seen))
;
return iter__4523__auto__(seen);
})())));
});

loom.alg_generic.bf_traverse.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.bf_traverse.cljs$lang$applyTo = (function (seq34408){
var G__34409 = cljs.core.first(seq34408);
var seq34408__$1 = cljs.core.next(seq34408);
var G__34410 = cljs.core.first(seq34408__$1);
var seq34408__$2 = cljs.core.next(seq34408__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34409,G__34410,seq34408__$2);
});

/**
 * Return a breadth-first spanning tree of the form {node
 *   [successors]}
 */
loom.alg_generic.bf_span = (function loom$alg_generic$bf_span(var_args){
var args__4736__auto__ = [];
var len__4730__auto___35266 = arguments.length;
var i__4731__auto___35267 = (0);
while(true){
if((i__4731__auto___35267 < len__4730__auto___35266)){
args__4736__auto__.push((arguments[i__4731__auto___35267]));

var G__35269 = (i__4731__auto___35267 + (1));
i__4731__auto___35267 = G__35269;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__34512){
var map__34513 = p__34512;
var map__34513__$1 = (((((!((map__34513 == null))))?(((((map__34513.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34513.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34513):map__34513);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34513__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
return loom.alg_generic.preds__GT_span(cljs.core.last(loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic(successors,start,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"f","f",-1597136552),((function (map__34513,map__34513__$1,seen){
return (function (_,pm,___$1){
return pm;
});})(map__34513,map__34513__$1,seen))
,new cljs.core.Keyword(null,"seen","seen",-518999789),seen], 0))));
});

loom.alg_generic.bf_span.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.bf_span.cljs$lang$applyTo = (function (seq34495){
var G__34496 = cljs.core.first(seq34495);
var seq34495__$1 = cljs.core.next(seq34495);
var G__34497 = cljs.core.first(seq34495__$1);
var seq34495__$2 = cljs.core.next(seq34495__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34496,G__34497,seq34495__$2);
});

/**
 * Returns a path from start to end with the fewest hops (i.e. irrespective
 *   of edge weights), successors being a function that returns adjacent nodes
 */
loom.alg_generic.bf_path = (function loom$alg_generic$bf_path(var_args){
var args__4736__auto__ = [];
var len__4730__auto___35274 = arguments.length;
var i__4731__auto___35275 = (0);
while(true){
if((i__4731__auto___35275 < len__4730__auto___35274)){
args__4736__auto__.push((arguments[i__4731__auto___35275]));

var G__35276 = (i__4731__auto___35275 + (1));
i__4731__auto___35275 = G__35276;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,end,p__34529){
var map__34531 = p__34529;
var map__34531__$1 = (((((!((map__34531 == null))))?(((((map__34531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34531.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34531):map__34531);
var opts = map__34531__$1;
var opts__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.vector], null)], 0));
var temp__5720__auto__ = cljs.core.some(((function (opts__$1,map__34531,map__34531__$1,opts){
return (function (p__34536){
var vec__34538 = p__34536;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34538,(0),null);
var pm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34538,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34538,(2),null);
if(cljs.core.truth_((pm.cljs$core$IFn$_invoke$arity$1 ? pm.cljs$core$IFn$_invoke$arity$1(end) : pm.call(null,end)))){
return pm;
} else {
return null;
}
});})(opts__$1,map__34531,map__34531__$1,opts))
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
loom.alg_generic.bf_path.cljs$lang$applyTo = (function (seq34521){
var G__34522 = cljs.core.first(seq34521);
var seq34521__$1 = cljs.core.next(seq34521);
var G__34523 = cljs.core.first(seq34521__$1);
var seq34521__$2 = cljs.core.next(seq34521__$1);
var G__34524 = cljs.core.first(seq34521__$2);
var seq34521__$3 = cljs.core.next(seq34521__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34522,G__34523,G__34524,seq34521__$3);
});

/**
 * Returns a lazy-seq of the keys that exist in both m1 and m2
 */
loom.alg_generic.shared_keys = (function loom$alg_generic$shared_keys(m1,m2){
while(true){
if((cljs.core.count(m2) < cljs.core.count(m1))){
var G__35282 = m2;
var G__35283 = m1;
m1 = G__35282;
m2 = G__35283;
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
var iter__4523__auto__ = (function loom$alg_generic$reverse_edges_$_iter__34558(s__34559){
return (new cljs.core.LazySeq(null,(function (){
var s__34559__$1 = s__34559;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__34559__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var node = cljs.core.first(xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__34559__$1,node,xs__6277__auto__,temp__5720__auto__){
return (function loom$alg_generic$reverse_edges_$_iter__34558_$_iter__34560(s__34561){
return (new cljs.core.LazySeq(null,((function (s__34559__$1,node,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__34561__$1 = s__34561;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__34561__$1);
if(temp__5720__auto____$1){
var s__34561__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__34561__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__34561__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__34563 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__34562 = (0);
while(true){
if((i__34562 < size__4522__auto__)){
var nbr = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__34562);
if((!(cljs.core.contains_QMARK_(coll,nbr)))){
cljs.core.chunk_append(b__34563,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,node], null));

var G__35292 = (i__34562 + (1));
i__34562 = G__35292;
continue;
} else {
var G__35293 = (i__34562 + (1));
i__34562 = G__35293;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34563),loom$alg_generic$reverse_edges_$_iter__34558_$_iter__34560(cljs.core.chunk_rest(s__34561__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34563),null);
}
} else {
var nbr = cljs.core.first(s__34561__$2);
if((!(cljs.core.contains_QMARK_(coll,nbr)))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,node], null),loom$alg_generic$reverse_edges_$_iter__34558_$_iter__34560(cljs.core.rest(s__34561__$2)));
} else {
var G__35295 = cljs.core.rest(s__34561__$2);
s__34561__$1 = G__35295;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__34559__$1,node,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__34559__$1,node,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__((successor_fn.cljs$core$IFn$_invoke$arity$1 ? successor_fn.cljs$core$IFn$_invoke$arity$1(node) : successor_fn.call(null,node))));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,loom$alg_generic$reverse_edges_$_iter__34558(cljs.core.rest(s__34559__$1)));
} else {
var G__35297 = cljs.core.rest(s__34559__$1);
s__34559__$1 = G__35297;
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
var iter__4523__auto__ = (function loom$alg_generic$conj_paths_$_iter__34590(s__34591){
return (new cljs.core.LazySeq(null,(function (){
var s__34591__$1 = s__34591;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__34591__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var n = cljs.core.first(xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__34591__$1,n,xs__6277__auto__,temp__5720__auto__){
return (function loom$alg_generic$conj_paths_$_iter__34590_$_iter__34592(s__34593){
return (new cljs.core.LazySeq(null,((function (s__34591__$1,n,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__34593__$1 = s__34593;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__34593__$1);
if(temp__5720__auto____$1){
var xs__6277__auto____$1 = temp__5720__auto____$1;
var from = cljs.core.first(xs__6277__auto____$1);
var iterys__4519__auto__ = ((function (s__34593__$1,s__34591__$1,from,xs__6277__auto____$1,temp__5720__auto____$1,n,xs__6277__auto__,temp__5720__auto__){
return (function loom$alg_generic$conj_paths_$_iter__34590_$_iter__34592_$_iter__34594(s__34595){
return (new cljs.core.LazySeq(null,((function (s__34593__$1,s__34591__$1,from,xs__6277__auto____$1,temp__5720__auto____$1,n,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__34595__$1 = s__34595;
while(true){
var temp__5720__auto____$2 = cljs.core.seq(s__34595__$1);
if(temp__5720__auto____$2){
var s__34595__$2 = temp__5720__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__34595__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__34595__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__34597 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__34596 = (0);
while(true){
if((i__34596 < size__4522__auto__)){
var to = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__34596);
cljs.core.chunk_append(b__34597,cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(from,to)));

var G__35306 = (i__34596 + (1));
i__34596 = G__35306;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34597),loom$alg_generic$conj_paths_$_iter__34590_$_iter__34592_$_iter__34594(cljs.core.chunk_rest(s__34595__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34597),null);
}
} else {
var to = cljs.core.first(s__34595__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(from,to)),loom$alg_generic$conj_paths_$_iter__34590_$_iter__34592_$_iter__34594(cljs.core.rest(s__34595__$2)));
}
} else {
return null;
}
break;
}
});})(s__34593__$1,s__34591__$1,from,xs__6277__auto____$1,temp__5720__auto____$1,n,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__34593__$1,s__34591__$1,from,xs__6277__auto____$1,temp__5720__auto____$1,n,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,loom.alg_generic.trace_paths(to_map,n))));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,loom$alg_generic$conj_paths_$_iter__34590_$_iter__34592(cljs.core.rest(s__34593__$1)));
} else {
var G__35309 = cljs.core.rest(s__34593__$1);
s__34593__$1 = G__35309;
continue;
}
} else {
return null;
}
break;
}
});})(s__34591__$1,n,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__34591__$1,n,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.reverse,loom.alg_generic.trace_paths(from_map,n))));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,loom$alg_generic$conj_paths_$_iter__34590(cljs.core.rest(s__34591__$1)));
} else {
var G__35310 = cljs.core.rest(s__34591__$1);
s__34591__$1 = G__35310;
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
return (function (p1__34611_SHARP_){
return cljs.core.contains_QMARK_(coll,p1__34611_SHARP_);
});})(find_succs,find_preds))
,q));
});})(find_succs,find_preds))
;
var map_set_pairs = ((function (find_succs,find_preds,overlaps){
return (function (map,pairs){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (find_succs,find_preds,overlaps){
return (function (map__$1,p__34615){
var vec__34616 = p__34615;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34616,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34616,(1),null);
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
var G__35320 = outgoing__$1;
var G__35321 = incoming;
var G__35322 = q1__$1;
var G__35323 = q2;
outgoing = G__35320;
incoming = G__35321;
q1 = G__35322;
q2 = G__35323;
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
var G__35328 = outgoing;
var G__35329 = incoming__$1;
var G__35330 = q1;
var G__35331 = q2__$1;
outgoing = G__35328;
incoming = G__35329;
q1 = G__35330;
q2 = G__35331;
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
var G__34634 = arguments.length;
switch (G__34634) {
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
var step = (function loom$alg_generic$step(p__34683){
var vec__34688 = p__34683;
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34688,(0),null);
var pq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34688,(1),null);
var temp__5720__auto__ = cljs.core.first(pq);
if(cljs.core.truth_(temp__5720__auto__)){
var vec__34700 = temp__5720__auto__;
var dist_su = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34700,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34700,(1),null);
var u = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34700,(2),null);
var fpq = vec__34700;
return cljs.core.cons((f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(u,state) : f.call(null,u,state)),(new cljs.core.LazySeq(null,((function (vec__34700,dist_su,_,u,fpq,temp__5720__auto__,vec__34688,state,pq){
return (function (){
return loom$alg_generic$step(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__34700,dist_su,_,u,fpq,temp__5720__auto__,vec__34688,state,pq){
return (function (p__34708,v){
var vec__34712 = p__34708;
var state__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34712,(0),null);
var pq__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34712,(1),null);
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
});})(vec__34700,dist_su,_,u,fpq,temp__5720__auto__,vec__34688,state,pq))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(pq,fpq)], null),(successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(u) : successors.call(null,u))));
});})(vec__34700,dist_su,_,u,fpq,temp__5720__auto__,vec__34688,state,pq))
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (span,p__34730){
var vec__34731 = p__34730;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34731,(0),null);
var vec__34734 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34731,(1),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34734,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34734,(1),null);
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
var temp__5718__auto__ = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__34747){
var vec__34749 = p__34747;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34749,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34749,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(end,node);
}),loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$3(successors,dist,start)));
if(cljs.core.truth_(temp__5718__auto__)){
var vec__34755 = temp__5718__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34755,(0),null);
var end_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34755,(1),null);
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
return cljs.core.long$((function (){var G__34772 = (bits / loom.alg_generic.bits_per_long);
return Math.ceil(G__34772);
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
var len__4730__auto___35375 = arguments.length;
var i__4731__auto___35376 = (0);
while(true){
if((i__4731__auto___35376 < len__4730__auto___35375)){
args__4736__auto__.push((arguments[i__4731__auto___35376]));

var G__35377 = (i__4731__auto___35376 + (1));
i__4731__auto___35376 = G__35377;
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
var seq__34815_35378 = cljs.core.seq(cljs.core.rest(bitmaps));
var chunk__34822_35379 = null;
var count__34823_35380 = (0);
var i__34824_35381 = (0);
while(true){
if((i__34824_35381 < count__34823_35380)){
var bitmap_35382 = chunk__34822_35379.cljs$core$IIndexed$_nth$arity$2(null,i__34824_35381);
var seq__34825_35383 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.list,bitmap_35382));
var chunk__34827_35384 = null;
var count__34828_35385 = (0);
var i__34829_35386 = (0);
while(true){
if((i__34829_35386 < count__34828_35385)){
var vec__34895_35387 = chunk__34827_35384.cljs$core$IIndexed$_nth$arity$2(null,i__34829_35386);
var idx_35388 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34895_35387,(0),null);
var value_35389 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34895_35387,(1),null);
var masked_value_35390 = (value_35389 | (new_bitmap[idx_35388]));
(new_bitmap[idx_35388] = masked_value_35390);


var G__35391 = seq__34825_35383;
var G__35392 = chunk__34827_35384;
var G__35393 = count__34828_35385;
var G__35394 = (i__34829_35386 + (1));
seq__34825_35383 = G__35391;
chunk__34827_35384 = G__35392;
count__34828_35385 = G__35393;
i__34829_35386 = G__35394;
continue;
} else {
var temp__5720__auto___35395 = cljs.core.seq(seq__34825_35383);
if(temp__5720__auto___35395){
var seq__34825_35396__$1 = temp__5720__auto___35395;
if(cljs.core.chunked_seq_QMARK_(seq__34825_35396__$1)){
var c__4550__auto___35397 = cljs.core.chunk_first(seq__34825_35396__$1);
var G__35400 = cljs.core.chunk_rest(seq__34825_35396__$1);
var G__35401 = c__4550__auto___35397;
var G__35402 = cljs.core.count(c__4550__auto___35397);
var G__35403 = (0);
seq__34825_35383 = G__35400;
chunk__34827_35384 = G__35401;
count__34828_35385 = G__35402;
i__34829_35386 = G__35403;
continue;
} else {
var vec__34899_35404 = cljs.core.first(seq__34825_35396__$1);
var idx_35405 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34899_35404,(0),null);
var value_35406 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34899_35404,(1),null);
var masked_value_35407 = (value_35406 | (new_bitmap[idx_35405]));
(new_bitmap[idx_35405] = masked_value_35407);


var G__35410 = cljs.core.next(seq__34825_35396__$1);
var G__35411 = null;
var G__35412 = (0);
var G__35413 = (0);
seq__34825_35383 = G__35410;
chunk__34827_35384 = G__35411;
count__34828_35385 = G__35412;
i__34829_35386 = G__35413;
continue;
}
} else {
}
}
break;
}

var G__35414 = seq__34815_35378;
var G__35415 = chunk__34822_35379;
var G__35416 = count__34823_35380;
var G__35417 = (i__34824_35381 + (1));
seq__34815_35378 = G__35414;
chunk__34822_35379 = G__35415;
count__34823_35380 = G__35416;
i__34824_35381 = G__35417;
continue;
} else {
var temp__5720__auto___35418 = cljs.core.seq(seq__34815_35378);
if(temp__5720__auto___35418){
var seq__34815_35419__$1 = temp__5720__auto___35418;
if(cljs.core.chunked_seq_QMARK_(seq__34815_35419__$1)){
var c__4550__auto___35421 = cljs.core.chunk_first(seq__34815_35419__$1);
var G__35423 = cljs.core.chunk_rest(seq__34815_35419__$1);
var G__35424 = c__4550__auto___35421;
var G__35425 = cljs.core.count(c__4550__auto___35421);
var G__35426 = (0);
seq__34815_35378 = G__35423;
chunk__34822_35379 = G__35424;
count__34823_35380 = G__35425;
i__34824_35381 = G__35426;
continue;
} else {
var bitmap_35428 = cljs.core.first(seq__34815_35419__$1);
var seq__34816_35429 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.list,bitmap_35428));
var chunk__34818_35430 = null;
var count__34819_35431 = (0);
var i__34820_35432 = (0);
while(true){
if((i__34820_35432 < count__34819_35431)){
var vec__34916_35434 = chunk__34818_35430.cljs$core$IIndexed$_nth$arity$2(null,i__34820_35432);
var idx_35435 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34916_35434,(0),null);
var value_35436 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34916_35434,(1),null);
var masked_value_35437 = (value_35436 | (new_bitmap[idx_35435]));
(new_bitmap[idx_35435] = masked_value_35437);


var G__35438 = seq__34816_35429;
var G__35439 = chunk__34818_35430;
var G__35440 = count__34819_35431;
var G__35441 = (i__34820_35432 + (1));
seq__34816_35429 = G__35438;
chunk__34818_35430 = G__35439;
count__34819_35431 = G__35440;
i__34820_35432 = G__35441;
continue;
} else {
var temp__5720__auto___35442__$1 = cljs.core.seq(seq__34816_35429);
if(temp__5720__auto___35442__$1){
var seq__34816_35443__$1 = temp__5720__auto___35442__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34816_35443__$1)){
var c__4550__auto___35444 = cljs.core.chunk_first(seq__34816_35443__$1);
var G__35445 = cljs.core.chunk_rest(seq__34816_35443__$1);
var G__35446 = c__4550__auto___35444;
var G__35447 = cljs.core.count(c__4550__auto___35444);
var G__35448 = (0);
seq__34816_35429 = G__35445;
chunk__34818_35430 = G__35446;
count__34819_35431 = G__35447;
i__34820_35432 = G__35448;
continue;
} else {
var vec__34920_35449 = cljs.core.first(seq__34816_35443__$1);
var idx_35450 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34920_35449,(0),null);
var value_35451 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34920_35449,(1),null);
var masked_value_35454 = (value_35451 | (new_bitmap[idx_35450]));
(new_bitmap[idx_35450] = masked_value_35454);


var G__35455 = cljs.core.next(seq__34816_35443__$1);
var G__35456 = null;
var G__35457 = (0);
var G__35458 = (0);
seq__34816_35429 = G__35455;
chunk__34818_35430 = G__35456;
count__34819_35431 = G__35457;
i__34820_35432 = G__35458;
continue;
}
} else {
}
}
break;
}

var G__35459 = cljs.core.next(seq__34815_35419__$1);
var G__35460 = null;
var G__35461 = (0);
var G__35462 = (0);
seq__34815_35378 = G__35459;
chunk__34822_35379 = G__35460;
count__34823_35380 = G__35461;
i__34824_35381 = G__35462;
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
loom.alg_generic.bm_or.cljs$lang$applyTo = (function (seq34803){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34803));
});

/**
 * Get the indicies of set bits in 'bitmap.
 */
loom.alg_generic.bm_get_indicies = (function loom$alg_generic$bm_get_indicies(bitmap){
var iter__4523__auto__ = (function loom$alg_generic$bm_get_indicies_$_iter__34926(s__34927){
return (new cljs.core.LazySeq(null,(function (){
var s__34927__$1 = s__34927;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__34927__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var chunk = cljs.core.first(xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__34927__$1,chunk,xs__6277__auto__,temp__5720__auto__){
return (function loom$alg_generic$bm_get_indicies_$_iter__34926_$_iter__34928(s__34929){
return (new cljs.core.LazySeq(null,((function (s__34927__$1,chunk,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__34929__$1 = s__34929;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__34929__$1);
if(temp__5720__auto____$1){
var s__34929__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__34929__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__34929__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__34931 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__34930 = (0);
while(true){
if((i__34930 < size__4522__auto__)){
var offset = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__34930);
var idx = ((chunk * loom.alg_generic.bits_per_long) + offset);
if(cljs.core.truth_(loom.alg_generic.bm_get(bitmap,idx))){
cljs.core.chunk_append(b__34931,idx);

var G__35471 = (i__34930 + (1));
i__34930 = G__35471;
continue;
} else {
var G__35473 = (i__34930 + (1));
i__34930 = G__35473;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34931),loom$alg_generic$bm_get_indicies_$_iter__34926_$_iter__34928(cljs.core.chunk_rest(s__34929__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34931),null);
}
} else {
var offset = cljs.core.first(s__34929__$2);
var idx = ((chunk * loom.alg_generic.bits_per_long) + offset);
if(cljs.core.truth_(loom.alg_generic.bm_get(bitmap,idx))){
return cljs.core.cons(idx,loom$alg_generic$bm_get_indicies_$_iter__34926_$_iter__34928(cljs.core.rest(s__34929__$2)));
} else {
var G__35475 = cljs.core.rest(s__34929__$2);
s__34929__$1 = G__35475;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__34927__$1,chunk,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__34927__$1,chunk,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(loom.alg_generic.bits_per_long)));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,loom$alg_generic$bm_get_indicies_$_iter__34926(cljs.core.rest(s__34927__$1)));
} else {
var G__35477 = cljs.core.rest(s__34927__$1);
s__34927__$1 = G__35477;
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

loom.alg_generic.Ancestry.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k34942,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__34995 = k34942;
var G__34995__$1 = (((G__34995 instanceof cljs.core.Keyword))?G__34995.fqn:null);
switch (G__34995__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34942,else__4388__auto__);

}
});

loom.alg_generic.Ancestry.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__34997){
var vec__34998 = p__34997;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34998,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34998,(1),null);
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

loom.alg_generic.Ancestry.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34941){
var self__ = this;
var G__34941__$1 = this;
return (new cljs.core.RecordIter((0),G__34941__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node->idx","node->idx",152705227),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4243__auto____$1 = (function (){var fexpr__35007 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1116202445 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__35007(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

loom.alg_generic.Ancestry.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34944,other34945){
var self__ = this;
var this34944__$1 = this;
return (((!((other34945 == null)))) && ((this34944__$1.constructor === other34945.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34944__$1.node__GT_idx,other34945.node__GT_idx)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34944__$1.idx__GT_node,other34945.idx__GT_node)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34944__$1.bitmaps,other34945.bitmaps)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34944__$1.__extmap,other34945.__extmap)));
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

loom.alg_generic.Ancestry.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__34941){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__35029 = cljs.core.keyword_identical_QMARK_;
var expr__35030 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__35033 = new cljs.core.Keyword(null,"node->idx","node->idx",152705227);
var G__35034 = expr__35030;
return (pred__35029.cljs$core$IFn$_invoke$arity$2 ? pred__35029.cljs$core$IFn$_invoke$arity$2(G__35033,G__35034) : pred__35029.call(null,G__35033,G__35034));
})())){
return (new loom.alg_generic.Ancestry(G__34941,self__.idx__GT_node,self__.bitmaps,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__35036 = new cljs.core.Keyword(null,"idx->node","idx->node",1811907175);
var G__35037 = expr__35030;
return (pred__35029.cljs$core$IFn$_invoke$arity$2 ? pred__35029.cljs$core$IFn$_invoke$arity$2(G__35036,G__35037) : pred__35029.call(null,G__35036,G__35037));
})())){
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,G__34941,self__.bitmaps,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__35038 = new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842);
var G__35039 = expr__35030;
return (pred__35029.cljs$core$IFn$_invoke$arity$2 ? pred__35029.cljs$core$IFn$_invoke$arity$2(G__35038,G__35039) : pred__35029.call(null,G__35038,G__35039));
})())){
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,G__34941,self__.__meta,self__.__extmap,null));
} else {
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__34941),null));
}
}
}
});

loom.alg_generic.Ancestry.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"node->idx","node->idx",152705227),self__.node__GT_idx,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),self__.idx__GT_node,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),self__.bitmaps,null))], null),self__.__extmap));
});

loom.alg_generic.Ancestry.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__34941){
var self__ = this;
var this__4384__auto____$1 = this;
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,G__34941,self__.__extmap,self__.__hash));
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
loom.alg_generic.map__GT_Ancestry = (function loom$alg_generic$map__GT_Ancestry(G__34973){
var extmap__4424__auto__ = (function (){var G__35048 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34973,new cljs.core.Keyword(null,"node->idx","node->idx",152705227),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842)], 0));
if(cljs.core.record_QMARK_(G__34973)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35048);
} else {
return G__35048;
}
})();
return (new loom.alg_generic.Ancestry(new cljs.core.Keyword(null,"node->idx","node->idx",152705227).cljs$core$IFn$_invoke$arity$1(G__34973),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175).cljs$core$IFn$_invoke$arity$1(G__34973),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842).cljs$core$IFn$_invoke$arity$1(G__34973),null,cljs.core.not_empty(extmap__4424__auto__),null));
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
var len__4730__auto___35502 = arguments.length;
var i__4731__auto___35503 = (0);
while(true){
if((i__4731__auto___35503 < len__4730__auto___35502)){
args__4736__auto__.push((arguments[i__4731__auto___35503]));

var G__35504 = (i__4731__auto___35503 + (1));
i__4731__auto___35503 = G__35504;
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
var map__35060 = ancestry;
var map__35060__$1 = (((((!((map__35060 == null))))?(((((map__35060.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35060.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35060):map__35060);
var node__GT_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35060__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var idx__GT_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35060__$1,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175));
var bitmaps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35060__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
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
loom.alg_generic.ancestry_add.cljs$lang$applyTo = (function (seq35052){
var G__35053 = cljs.core.first(seq35052);
var seq35052__$1 = cljs.core.next(seq35052);
var G__35054 = cljs.core.first(seq35052__$1);
var seq35052__$2 = cljs.core.next(seq35052__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35053,G__35054,seq35052__$2);
});

/**
 * Finds if the 'parenter node is an ancestor of 'childer node for the given
 *   'ancestry cache.
 */
loom.alg_generic.ancestor_QMARK_ = (function loom$alg_generic$ancestor_QMARK_(ancestry,childer,parenter){
var map__35067 = ancestry;
var map__35067__$1 = (((((!((map__35067 == null))))?(((((map__35067.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35067.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35067):map__35067);
var node__GT_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35067__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var bitmaps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35067__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
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
var map__35083 = ancestry;
var map__35083__$1 = (((((!((map__35083 == null))))?(((((map__35083.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35083.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35083):map__35083);
var node__GT_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35083__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var idx__GT_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35083__$1,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175));
var bitmaps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35083__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
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
