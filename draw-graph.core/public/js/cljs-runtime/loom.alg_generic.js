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
var len__4730__auto___35120 = arguments.length;
var i__4731__auto___35121 = (0);
while(true){
if((i__4731__auto___35121 < len__4730__auto___35120)){
args__4736__auto__.push((arguments[i__4731__auto___35121]));

var G__35122 = (i__4731__auto___35121 + (1));
i__4731__auto___35121 = G__35122;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__34200){
var map__34201 = p__34200;
var map__34201__$1 = (((((!((map__34201 == null))))?(((((map__34201.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34201.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34201):map__34201);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34201__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var step = ((function (map__34201,map__34201__$1,seen){
return (function loom$alg_generic$step(stack,seen__$1){
var temp__5720__auto__ = cljs.core.peek(stack);
if(cljs.core.truth_(temp__5720__auto__)){
var node = temp__5720__auto__;
if(cljs.core.contains_QMARK_(seen__$1,node)){
return loom$alg_generic$step(cljs.core.pop(stack),seen__$1);
} else {
var seen__$2 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,node);
var nbrs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(seen__$2,(successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(node) : successors.call(null,node)));
return (new cljs.core.LazySeq(null,((function (seen__$2,nbrs,node,temp__5720__auto__,map__34201,map__34201__$1,seen){
return (function (){
return cljs.core.cons(node,loom$alg_generic$step(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(stack),nbrs),seen__$2));
});})(seen__$2,nbrs,node,temp__5720__auto__,map__34201,map__34201__$1,seen))
,null,null));
}
} else {
return null;
}
});})(map__34201,map__34201__$1,seen))
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
return loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__34276){
var map__34277 = p__34276;
var map__34277__$1 = (((((!((map__34277 == null))))?(((((map__34277.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34277.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34277):map__34277);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34277__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var step = ((function (map__34277,map__34277__$1,seen){
return (function loom$alg_generic$step(successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1){
while(true){
var temp__5718__auto__ = cljs.core.first(nbrs);
if(cljs.core.truth_(temp__5718__auto__)){
var nbr = temp__5718__auto__;
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null),(new cljs.core.LazySeq(null,((function (successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1,nbr,temp__5718__auto__,map__34277,map__34277__$1,seen){
return (function (){
var seen__$2 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,start__$1);
if(cljs.core.truth_((seen__$2.cljs$core$IFn$_invoke$arity$1 ? seen__$2.cljs$core$IFn$_invoke$arity$1(nbr) : seen__$2.call(null,nbr)))){
return loom$alg_generic$step(successors__$1,start__$1,cljs.core.next(nbrs),stack,nbrstack,seen__$2);
} else {
return loom$alg_generic$step(successors__$1,nbr,(successors__$1.cljs$core$IFn$_invoke$arity$1 ? successors__$1.cljs$core$IFn$_invoke$arity$1(nbr) : successors__$1.call(null,nbr)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,start__$1),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nbrstack,cljs.core.next(nbrs)),seen__$2);
}
});})(successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1,nbr,temp__5718__auto__,map__34277,map__34277__$1,seen))
,null,null)));
} else {
var temp__5720__auto__ = cljs.core.peek(stack);
if(cljs.core.truth_(temp__5720__auto__)){
var parent = temp__5720__auto__;
var G__35156 = successors__$1;
var G__35157 = parent;
var G__35158 = cljs.core.peek(nbrstack);
var G__35159 = cljs.core.pop(stack);
var G__35160 = cljs.core.pop(nbrstack);
var G__35161 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,start__$1);
successors__$1 = G__35156;
start__$1 = G__35157;
nbrs = G__35158;
stack = G__35159;
nbrstack = G__35160;
seen__$1 = G__35161;
continue;
} else {
return null;
}
}
break;
}
});})(map__34277,map__34277__$1,seen))
;
if(cljs.core.truth_((seen.cljs$core$IFn$_invoke$arity$1 ? seen.cljs$core$IFn$_invoke$arity$1(start) : seen.call(null,start)))){
return null;
} else {
return step(successors,start,(successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(start) : successors.call(null,start)),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,start));
}
});

loom.alg_generic.pre_edge_traverse.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.pre_edge_traverse.cljs$lang$applyTo = (function (seq34268){
var G__34269 = cljs.core.first(seq34268);
var seq34268__$1 = cljs.core.next(seq34268);
var G__34270 = cljs.core.first(seq34268__$1);
var seq34268__$2 = cljs.core.next(seq34268__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34269,G__34270,seq34268__$2);
});

/**
 * Returns a depth-first spanning tree of the form {node [successors]}
 */
loom.alg_generic.pre_span = (function loom$alg_generic$pre_span(var_args){
var args__4736__auto__ = [];
var len__4730__auto___35164 = arguments.length;
var i__4731__auto___35165 = (0);
while(true){
if((i__4731__auto___35165 < len__4730__auto___35164)){
args__4736__auto__.push((arguments[i__4731__auto___35165]));

var G__35166 = (i__4731__auto___35165 + (1));
i__4731__auto___35165 = G__35166;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__34302){
var map__34303 = p__34302;
var map__34303__$1 = (((((!((map__34303 == null))))?(((((map__34303.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34303.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34303):map__34303);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34303__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34303__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__35174 = seen__$2;
var G__35175 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(preds,u,v);
var G__35176 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,u);
seen__$1 = G__35174;
preds = G__35175;
stack = G__35176;
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
loom.alg_generic.pre_span.cljs$lang$applyTo = (function (seq34299){
var G__34300 = cljs.core.first(seq34299);
var seq34299__$1 = cljs.core.next(seq34299);
var G__34301 = cljs.core.first(seq34299__$1);
var seq34299__$2 = cljs.core.next(seq34299__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34300,G__34301,seq34299__$2);
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

loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__34336){
var map__34337 = p__34336;
var map__34337__$1 = (((((!((map__34337 == null))))?(((((map__34337.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34337.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34337):map__34337);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34337__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34337__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__35188 = seen__$2;
var G__35189 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,v);
var G__35190 = cljs.core.pop(stack);
seen__$1 = G__35188;
result = G__35189;
stack = G__35190;
continue;
} else {
var G__35191 = seen__$2;
var G__35192 = result;
var G__35193 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,cljs.core.first(nbrs));
seen__$1 = G__35191;
result = G__35192;
stack = G__35193;
continue;
}
}
break;
}
});

loom.alg_generic.post_traverse.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.post_traverse.cljs$lang$applyTo = (function (seq34331){
var G__34332 = cljs.core.first(seq34331);
var seq34331__$1 = cljs.core.next(seq34331);
var G__34333 = cljs.core.first(seq34331__$1);
var seq34331__$2 = cljs.core.next(seq34331__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34332,G__34333,seq34331__$2);
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
var len__4730__auto___35196 = arguments.length;
var i__4731__auto___35197 = (0);
while(true){
if((i__4731__auto___35197 < len__4730__auto___35196)){
args__4736__auto__.push((arguments[i__4731__auto___35197]));

var G__35198 = (i__4731__auto___35197 + (1));
i__4731__auto___35197 = G__35198;
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
var G__35202 = start__$1;
var G__35203 = cljs.core.next(nbrs);
var G__35204 = stack;
var G__35205 = nbrstack;
var G__35206 = seen__$2;
var G__35207 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(edges,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null));
start__$1 = G__35202;
nbrs = G__35203;
stack = G__35204;
nbrstack = G__35205;
seen__$1 = G__35206;
edges = G__35207;
continue;
} else {
var G__35208 = nbr;
var G__35209 = (successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(nbr) : successors.call(null,nbr));
var G__35210 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,start__$1);
var G__35211 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nbrstack,cljs.core.next(nbrs));
var G__35212 = seen__$2;
var G__35213 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(edges,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null));
start__$1 = G__35208;
nbrs = G__35209;
stack = G__35210;
nbrstack = G__35211;
seen__$1 = G__35212;
edges = G__35213;
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
loom.alg_generic.post_edge_traverse.cljs$lang$applyTo = (function (seq34358){
var G__34359 = cljs.core.first(seq34358);
var seq34358__$1 = cljs.core.next(seq34358);
var G__34360 = cljs.core.first(seq34358__$1);
var seq34358__$2 = cljs.core.next(seq34358__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34359,G__34360,seq34358__$2);
});

/**
 * Topological sort of a component of a (presumably) directed graph.
 *   Returns nil if the graph contains any cycles. See loom.alg/topsort
 *   for a complete topological sort
 */
loom.alg_generic.topsort_component = (function loom$alg_generic$topsort_component(var_args){
var G__34390 = arguments.length;
switch (G__34390) {
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
var G__35225 = seen__$2;
var G__35226 = explored__$1;
var G__35227 = result;
var G__35228 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,cljs.core.first(us));
seen__$1 = G__35225;
explored__$1 = G__35226;
result = G__35227;
stack = G__35228;
continue;
}
} else {
var G__35229 = seen__$2;
var G__35230 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(explored__$1,v);
var G__35231 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,v);
var G__35232 = cljs.core.pop(stack);
seen__$1 = G__35229;
explored__$1 = G__35230;
result = G__35231;
stack = G__35232;
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
var len__4730__auto___35234 = arguments.length;
var i__4731__auto___35235 = (0);
while(true){
if((i__4731__auto___35235 < len__4730__auto___35234)){
args__4736__auto__.push((arguments[i__4731__auto___35235]));

var G__35236 = (i__4731__auto___35235 + (1));
i__4731__auto___35235 = G__35236;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__34426){
var map__34428 = p__34426;
var map__34428__$1 = (((((!((map__34428 == null))))?(((((map__34428.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34428.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34428):map__34428);
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34428__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var when = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34428__$1,new cljs.core.Keyword(null,"when","when",-576417306));
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34428__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
var f__$1 = (function (){var or__4131__auto__ = f;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return ((function (or__4131__auto__,map__34428,map__34428__$1,f,when,seen){
return (function (n,p,d){
return n;
});
;})(or__4131__auto__,map__34428,map__34428__$1,f,when,seen))
}
})();
var nbr_pred = (function (){var or__4131__auto__ = when;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.constantly(true);
}
})();
var step = ((function (f__$1,nbr_pred,map__34428,map__34428__$1,f,when,seen){
return (function loom$alg_generic$step(queue,preds){
var temp__5720__auto__ = cljs.core.peek(queue);
if(cljs.core.truth_(temp__5720__auto__)){
var vec__34478 = temp__5720__auto__;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34478,(0),null);
var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34478,(1),null);
return cljs.core.cons((f__$1.cljs$core$IFn$_invoke$arity$3 ? f__$1.cljs$core$IFn$_invoke$arity$3(node,preds,depth) : f__$1.call(null,node,preds,depth)),(new cljs.core.LazySeq(null,((function (vec__34478,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34428,map__34428__$1,f,when,seen){
return (function (){
var nbrs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__34478,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34428,map__34428__$1,f,when,seen){
return (function (p1__34415_SHARP_){
var G__34481 = p1__34415_SHARP_;
var G__34482 = node;
var G__34483 = (depth + (1));
return (nbr_pred.cljs$core$IFn$_invoke$arity$3 ? nbr_pred.cljs$core$IFn$_invoke$arity$3(G__34481,G__34482,G__34483) : nbr_pred.call(null,G__34481,G__34482,G__34483));
});})(vec__34478,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34428,map__34428__$1,f,when,seen))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__34478,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34428,map__34428__$1,f,when,seen){
return (function (p1__34413_SHARP_){
return cljs.core.contains_QMARK_(preds,p1__34413_SHARP_);
});})(vec__34478,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34428,map__34428__$1,f,when,seen))
,(successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(node) : successors.call(null,node))));
return loom$alg_generic$step(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(queue),(function (){var iter__4523__auto__ = ((function (nbrs,vec__34478,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34428,map__34428__$1,f,when,seen){
return (function loom$alg_generic$step_$_iter__34485(s__34486){
return (new cljs.core.LazySeq(null,((function (nbrs,vec__34478,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34428,map__34428__$1,f,when,seen){
return (function (){
var s__34486__$1 = s__34486;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__34486__$1);
if(temp__5720__auto____$1){
var s__34486__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__34486__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__34486__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__34488 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__34487 = (0);
while(true){
if((i__34487 < size__4522__auto__)){
var nbr = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__34487);
cljs.core.chunk_append(b__34488,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,(depth + (1))], null));

var G__35244 = (i__34487 + (1));
i__34487 = G__35244;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34488),loom$alg_generic$step_$_iter__34485(cljs.core.chunk_rest(s__34486__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34488),null);
}
} else {
var nbr = cljs.core.first(s__34486__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,(depth + (1))], null),loom$alg_generic$step_$_iter__34485(cljs.core.rest(s__34486__$2)));
}
} else {
return null;
}
break;
}
});})(nbrs,vec__34478,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34428,map__34428__$1,f,when,seen))
,null,null));
});})(nbrs,vec__34478,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34428,map__34428__$1,f,when,seen))
;
return iter__4523__auto__(nbrs);
})()),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (nbrs,vec__34478,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34428,map__34428__$1,f,when,seen){
return (function (p1__34416_SHARP_,p2__34417_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__34416_SHARP_,p2__34417_SHARP_,node);
});})(nbrs,vec__34478,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34428,map__34428__$1,f,when,seen))
,preds,nbrs));
});})(vec__34478,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34428,map__34428__$1,f,when,seen))
,null,null)));
} else {
return null;
}
});})(f__$1,nbr_pred,map__34428,map__34428__$1,f,when,seen))
;
return step(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentQueue.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,(0)], null)),((cljs.core.map_QMARK_(seen))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(seen,start,null):cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.createAsIfByAssoc([start,null]),(function (){var iter__4523__auto__ = ((function (f__$1,nbr_pred,map__34428,map__34428__$1,f,when,seen){
return (function loom$alg_generic$iter__34505(s__34506){
return (new cljs.core.LazySeq(null,((function (f__$1,nbr_pred,map__34428,map__34428__$1,f,when,seen){
return (function (){
var s__34506__$1 = s__34506;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__34506__$1);
if(temp__5720__auto__){
var s__34506__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__34506__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__34506__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__34508 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__34507 = (0);
while(true){
if((i__34507 < size__4522__auto__)){
var s = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__34507);
cljs.core.chunk_append(b__34508,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,null], null));

var G__35248 = (i__34507 + (1));
i__34507 = G__35248;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34508),loom$alg_generic$iter__34505(cljs.core.chunk_rest(s__34506__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34508),null);
}
} else {
var s = cljs.core.first(s__34506__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,null], null),loom$alg_generic$iter__34505(cljs.core.rest(s__34506__$2)));
}
} else {
return null;
}
break;
}
});})(f__$1,nbr_pred,map__34428,map__34428__$1,f,when,seen))
,null,null));
});})(f__$1,nbr_pred,map__34428,map__34428__$1,f,when,seen))
;
return iter__4523__auto__(seen);
})())));
});

loom.alg_generic.bf_traverse.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.bf_traverse.cljs$lang$applyTo = (function (seq34418){
var G__34419 = cljs.core.first(seq34418);
var seq34418__$1 = cljs.core.next(seq34418);
var G__34420 = cljs.core.first(seq34418__$1);
var seq34418__$2 = cljs.core.next(seq34418__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34419,G__34420,seq34418__$2);
});

/**
 * Return a breadth-first spanning tree of the form {node
 *   [successors]}
 */
loom.alg_generic.bf_span = (function loom$alg_generic$bf_span(var_args){
var args__4736__auto__ = [];
var len__4730__auto___35249 = arguments.length;
var i__4731__auto___35250 = (0);
while(true){
if((i__4731__auto___35250 < len__4730__auto___35249)){
args__4736__auto__.push((arguments[i__4731__auto___35250]));

var G__35251 = (i__4731__auto___35250 + (1));
i__4731__auto___35250 = G__35251;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__34524){
var map__34526 = p__34524;
var map__34526__$1 = (((((!((map__34526 == null))))?(((((map__34526.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34526.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34526):map__34526);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34526__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
return loom.alg_generic.preds__GT_span(cljs.core.last(loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic(successors,start,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"f","f",-1597136552),((function (map__34526,map__34526__$1,seen){
return (function (_,pm,___$1){
return pm;
});})(map__34526,map__34526__$1,seen))
,new cljs.core.Keyword(null,"seen","seen",-518999789),seen], 0))));
});

loom.alg_generic.bf_span.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.bf_span.cljs$lang$applyTo = (function (seq34517){
var G__34518 = cljs.core.first(seq34517);
var seq34517__$1 = cljs.core.next(seq34517);
var G__34519 = cljs.core.first(seq34517__$1);
var seq34517__$2 = cljs.core.next(seq34517__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34518,G__34519,seq34517__$2);
});

/**
 * Returns a path from start to end with the fewest hops (i.e. irrespective
 *   of edge weights), successors being a function that returns adjacent nodes
 */
loom.alg_generic.bf_path = (function loom$alg_generic$bf_path(var_args){
var args__4736__auto__ = [];
var len__4730__auto___35257 = arguments.length;
var i__4731__auto___35258 = (0);
while(true){
if((i__4731__auto___35258 < len__4730__auto___35257)){
args__4736__auto__.push((arguments[i__4731__auto___35258]));

var G__35259 = (i__4731__auto___35258 + (1));
i__4731__auto___35258 = G__35259;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,end,p__34541){
var map__34542 = p__34541;
var map__34542__$1 = (((((!((map__34542 == null))))?(((((map__34542.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34542.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34542):map__34542);
var opts = map__34542__$1;
var opts__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.vector], null)], 0));
var temp__5720__auto__ = cljs.core.some(((function (opts__$1,map__34542,map__34542__$1,opts){
return (function (p__34548){
var vec__34549 = p__34548;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34549,(0),null);
var pm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34549,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34549,(2),null);
if(cljs.core.truth_((pm.cljs$core$IFn$_invoke$arity$1 ? pm.cljs$core$IFn$_invoke$arity$1(end) : pm.call(null,end)))){
return pm;
} else {
return null;
}
});})(opts__$1,map__34542,map__34542__$1,opts))
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
loom.alg_generic.bf_path.cljs$lang$applyTo = (function (seq34533){
var G__34534 = cljs.core.first(seq34533);
var seq34533__$1 = cljs.core.next(seq34533);
var G__34535 = cljs.core.first(seq34533__$1);
var seq34533__$2 = cljs.core.next(seq34533__$1);
var G__34536 = cljs.core.first(seq34533__$2);
var seq34533__$3 = cljs.core.next(seq34533__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34534,G__34535,G__34536,seq34533__$3);
});

/**
 * Returns a lazy-seq of the keys that exist in both m1 and m2
 */
loom.alg_generic.shared_keys = (function loom$alg_generic$shared_keys(m1,m2){
while(true){
if((cljs.core.count(m2) < cljs.core.count(m1))){
var G__35263 = m2;
var G__35264 = m1;
m1 = G__35263;
m2 = G__35264;
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
var iter__4523__auto__ = (function loom$alg_generic$reverse_edges_$_iter__34582(s__34583){
return (new cljs.core.LazySeq(null,(function (){
var s__34583__$1 = s__34583;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__34583__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var node = cljs.core.first(xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__34583__$1,node,xs__6277__auto__,temp__5720__auto__){
return (function loom$alg_generic$reverse_edges_$_iter__34582_$_iter__34584(s__34585){
return (new cljs.core.LazySeq(null,((function (s__34583__$1,node,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__34585__$1 = s__34585;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__34585__$1);
if(temp__5720__auto____$1){
var s__34585__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__34585__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__34585__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__34587 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__34586 = (0);
while(true){
if((i__34586 < size__4522__auto__)){
var nbr = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__34586);
if((!(cljs.core.contains_QMARK_(coll,nbr)))){
cljs.core.chunk_append(b__34587,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,node], null));

var G__35271 = (i__34586 + (1));
i__34586 = G__35271;
continue;
} else {
var G__35273 = (i__34586 + (1));
i__34586 = G__35273;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34587),loom$alg_generic$reverse_edges_$_iter__34582_$_iter__34584(cljs.core.chunk_rest(s__34585__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34587),null);
}
} else {
var nbr = cljs.core.first(s__34585__$2);
if((!(cljs.core.contains_QMARK_(coll,nbr)))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,node], null),loom$alg_generic$reverse_edges_$_iter__34582_$_iter__34584(cljs.core.rest(s__34585__$2)));
} else {
var G__35277 = cljs.core.rest(s__34585__$2);
s__34585__$1 = G__35277;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__34583__$1,node,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__34583__$1,node,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__((successor_fn.cljs$core$IFn$_invoke$arity$1 ? successor_fn.cljs$core$IFn$_invoke$arity$1(node) : successor_fn.call(null,node))));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,loom$alg_generic$reverse_edges_$_iter__34582(cljs.core.rest(s__34583__$1)));
} else {
var G__35278 = cljs.core.rest(s__34583__$1);
s__34583__$1 = G__35278;
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
var iter__4523__auto__ = (function loom$alg_generic$conj_paths_$_iter__34600(s__34601){
return (new cljs.core.LazySeq(null,(function (){
var s__34601__$1 = s__34601;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__34601__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var n = cljs.core.first(xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__34601__$1,n,xs__6277__auto__,temp__5720__auto__){
return (function loom$alg_generic$conj_paths_$_iter__34600_$_iter__34602(s__34603){
return (new cljs.core.LazySeq(null,((function (s__34601__$1,n,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__34603__$1 = s__34603;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__34603__$1);
if(temp__5720__auto____$1){
var xs__6277__auto____$1 = temp__5720__auto____$1;
var from = cljs.core.first(xs__6277__auto____$1);
var iterys__4519__auto__ = ((function (s__34603__$1,s__34601__$1,from,xs__6277__auto____$1,temp__5720__auto____$1,n,xs__6277__auto__,temp__5720__auto__){
return (function loom$alg_generic$conj_paths_$_iter__34600_$_iter__34602_$_iter__34604(s__34605){
return (new cljs.core.LazySeq(null,((function (s__34603__$1,s__34601__$1,from,xs__6277__auto____$1,temp__5720__auto____$1,n,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__34605__$1 = s__34605;
while(true){
var temp__5720__auto____$2 = cljs.core.seq(s__34605__$1);
if(temp__5720__auto____$2){
var s__34605__$2 = temp__5720__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__34605__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__34605__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__34607 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__34606 = (0);
while(true){
if((i__34606 < size__4522__auto__)){
var to = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__34606);
cljs.core.chunk_append(b__34607,cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(from,to)));

var G__35283 = (i__34606 + (1));
i__34606 = G__35283;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34607),loom$alg_generic$conj_paths_$_iter__34600_$_iter__34602_$_iter__34604(cljs.core.chunk_rest(s__34605__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34607),null);
}
} else {
var to = cljs.core.first(s__34605__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(from,to)),loom$alg_generic$conj_paths_$_iter__34600_$_iter__34602_$_iter__34604(cljs.core.rest(s__34605__$2)));
}
} else {
return null;
}
break;
}
});})(s__34603__$1,s__34601__$1,from,xs__6277__auto____$1,temp__5720__auto____$1,n,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__34603__$1,s__34601__$1,from,xs__6277__auto____$1,temp__5720__auto____$1,n,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,loom.alg_generic.trace_paths(to_map,n))));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,loom$alg_generic$conj_paths_$_iter__34600_$_iter__34602(cljs.core.rest(s__34603__$1)));
} else {
var G__35286 = cljs.core.rest(s__34603__$1);
s__34603__$1 = G__35286;
continue;
}
} else {
return null;
}
break;
}
});})(s__34601__$1,n,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__34601__$1,n,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.reverse,loom.alg_generic.trace_paths(from_map,n))));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,loom$alg_generic$conj_paths_$_iter__34600(cljs.core.rest(s__34601__$1)));
} else {
var G__35287 = cljs.core.rest(s__34601__$1);
s__34601__$1 = G__35287;
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
return (function (p1__34616_SHARP_){
return cljs.core.contains_QMARK_(coll,p1__34616_SHARP_);
});})(find_succs,find_preds))
,q));
});})(find_succs,find_preds))
;
var map_set_pairs = ((function (find_succs,find_preds,overlaps){
return (function (map,pairs){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (find_succs,find_preds,overlaps){
return (function (map__$1,p__34620){
var vec__34621 = p__34620;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34621,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34621,(1),null);
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
var G__35293 = outgoing__$1;
var G__35294 = incoming;
var G__35295 = q1__$1;
var G__35296 = q2;
outgoing = G__35293;
incoming = G__35294;
q1 = G__35295;
q2 = G__35296;
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
var G__35302 = outgoing;
var G__35303 = incoming__$1;
var G__35304 = q1;
var G__35305 = q2__$1;
outgoing = G__35302;
incoming = G__35303;
q1 = G__35304;
q2 = G__35305;
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
var G__34660 = arguments.length;
switch (G__34660) {
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
var step = (function loom$alg_generic$step(p__34714){
var vec__34717 = p__34714;
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34717,(0),null);
var pq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34717,(1),null);
var temp__5720__auto__ = cljs.core.first(pq);
if(cljs.core.truth_(temp__5720__auto__)){
var vec__34723 = temp__5720__auto__;
var dist_su = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34723,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34723,(1),null);
var u = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34723,(2),null);
var fpq = vec__34723;
return cljs.core.cons((f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(u,state) : f.call(null,u,state)),(new cljs.core.LazySeq(null,((function (vec__34723,dist_su,_,u,fpq,temp__5720__auto__,vec__34717,state,pq){
return (function (){
return loom$alg_generic$step(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__34723,dist_su,_,u,fpq,temp__5720__auto__,vec__34717,state,pq){
return (function (p__34726,v){
var vec__34727 = p__34726;
var state__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34727,(0),null);
var pq__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34727,(1),null);
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
});})(vec__34723,dist_su,_,u,fpq,temp__5720__auto__,vec__34717,state,pq))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(pq,fpq)], null),(successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(u) : successors.call(null,u))));
});})(vec__34723,dist_su,_,u,fpq,temp__5720__auto__,vec__34717,state,pq))
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (span,p__34758){
var vec__34759 = p__34758;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34759,(0),null);
var vec__34762 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34759,(1),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34762,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34762,(1),null);
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
return cljs.core.long$((function (){var G__34791 = (bits / loom.alg_generic.bits_per_long);
return Math.ceil(G__34791);
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
var len__4730__auto___35320 = arguments.length;
var i__4731__auto___35321 = (0);
while(true){
if((i__4731__auto___35321 < len__4730__auto___35320)){
args__4736__auto__.push((arguments[i__4731__auto___35321]));

var G__35322 = (i__4731__auto___35321 + (1));
i__4731__auto___35321 = G__35322;
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
var seq__34828_35325 = cljs.core.seq(cljs.core.rest(bitmaps));
var chunk__34835_35326 = null;
var count__34836_35327 = (0);
var i__34837_35328 = (0);
while(true){
if((i__34837_35328 < count__34836_35327)){
var bitmap_35329 = chunk__34835_35326.cljs$core$IIndexed$_nth$arity$2(null,i__34837_35328);
var seq__34838_35330 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.list,bitmap_35329));
var chunk__34840_35331 = null;
var count__34841_35332 = (0);
var i__34842_35333 = (0);
while(true){
if((i__34842_35333 < count__34841_35332)){
var vec__34906_35334 = chunk__34840_35331.cljs$core$IIndexed$_nth$arity$2(null,i__34842_35333);
var idx_35335 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34906_35334,(0),null);
var value_35336 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34906_35334,(1),null);
var masked_value_35338 = (value_35336 | (new_bitmap[idx_35335]));
(new_bitmap[idx_35335] = masked_value_35338);


var G__35339 = seq__34838_35330;
var G__35340 = chunk__34840_35331;
var G__35341 = count__34841_35332;
var G__35342 = (i__34842_35333 + (1));
seq__34838_35330 = G__35339;
chunk__34840_35331 = G__35340;
count__34841_35332 = G__35341;
i__34842_35333 = G__35342;
continue;
} else {
var temp__5720__auto___35343 = cljs.core.seq(seq__34838_35330);
if(temp__5720__auto___35343){
var seq__34838_35344__$1 = temp__5720__auto___35343;
if(cljs.core.chunked_seq_QMARK_(seq__34838_35344__$1)){
var c__4550__auto___35345 = cljs.core.chunk_first(seq__34838_35344__$1);
var G__35346 = cljs.core.chunk_rest(seq__34838_35344__$1);
var G__35347 = c__4550__auto___35345;
var G__35348 = cljs.core.count(c__4550__auto___35345);
var G__35349 = (0);
seq__34838_35330 = G__35346;
chunk__34840_35331 = G__35347;
count__34841_35332 = G__35348;
i__34842_35333 = G__35349;
continue;
} else {
var vec__34911_35350 = cljs.core.first(seq__34838_35344__$1);
var idx_35351 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34911_35350,(0),null);
var value_35352 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34911_35350,(1),null);
var masked_value_35355 = (value_35352 | (new_bitmap[idx_35351]));
(new_bitmap[idx_35351] = masked_value_35355);


var G__35356 = cljs.core.next(seq__34838_35344__$1);
var G__35357 = null;
var G__35358 = (0);
var G__35359 = (0);
seq__34838_35330 = G__35356;
chunk__34840_35331 = G__35357;
count__34841_35332 = G__35358;
i__34842_35333 = G__35359;
continue;
}
} else {
}
}
break;
}

var G__35362 = seq__34828_35325;
var G__35363 = chunk__34835_35326;
var G__35364 = count__34836_35327;
var G__35365 = (i__34837_35328 + (1));
seq__34828_35325 = G__35362;
chunk__34835_35326 = G__35363;
count__34836_35327 = G__35364;
i__34837_35328 = G__35365;
continue;
} else {
var temp__5720__auto___35367 = cljs.core.seq(seq__34828_35325);
if(temp__5720__auto___35367){
var seq__34828_35368__$1 = temp__5720__auto___35367;
if(cljs.core.chunked_seq_QMARK_(seq__34828_35368__$1)){
var c__4550__auto___35370 = cljs.core.chunk_first(seq__34828_35368__$1);
var G__35371 = cljs.core.chunk_rest(seq__34828_35368__$1);
var G__35372 = c__4550__auto___35370;
var G__35373 = cljs.core.count(c__4550__auto___35370);
var G__35374 = (0);
seq__34828_35325 = G__35371;
chunk__34835_35326 = G__35372;
count__34836_35327 = G__35373;
i__34837_35328 = G__35374;
continue;
} else {
var bitmap_35375 = cljs.core.first(seq__34828_35368__$1);
var seq__34829_35376 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.list,bitmap_35375));
var chunk__34831_35377 = null;
var count__34832_35378 = (0);
var i__34833_35379 = (0);
while(true){
if((i__34833_35379 < count__34832_35378)){
var vec__34923_35380 = chunk__34831_35377.cljs$core$IIndexed$_nth$arity$2(null,i__34833_35379);
var idx_35381 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34923_35380,(0),null);
var value_35382 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34923_35380,(1),null);
var masked_value_35383 = (value_35382 | (new_bitmap[idx_35381]));
(new_bitmap[idx_35381] = masked_value_35383);


var G__35384 = seq__34829_35376;
var G__35385 = chunk__34831_35377;
var G__35386 = count__34832_35378;
var G__35387 = (i__34833_35379 + (1));
seq__34829_35376 = G__35384;
chunk__34831_35377 = G__35385;
count__34832_35378 = G__35386;
i__34833_35379 = G__35387;
continue;
} else {
var temp__5720__auto___35388__$1 = cljs.core.seq(seq__34829_35376);
if(temp__5720__auto___35388__$1){
var seq__34829_35389__$1 = temp__5720__auto___35388__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34829_35389__$1)){
var c__4550__auto___35391 = cljs.core.chunk_first(seq__34829_35389__$1);
var G__35392 = cljs.core.chunk_rest(seq__34829_35389__$1);
var G__35393 = c__4550__auto___35391;
var G__35394 = cljs.core.count(c__4550__auto___35391);
var G__35395 = (0);
seq__34829_35376 = G__35392;
chunk__34831_35377 = G__35393;
count__34832_35378 = G__35394;
i__34833_35379 = G__35395;
continue;
} else {
var vec__34931_35398 = cljs.core.first(seq__34829_35389__$1);
var idx_35399 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34931_35398,(0),null);
var value_35400 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34931_35398,(1),null);
var masked_value_35402 = (value_35400 | (new_bitmap[idx_35399]));
(new_bitmap[idx_35399] = masked_value_35402);


var G__35403 = cljs.core.next(seq__34829_35389__$1);
var G__35404 = null;
var G__35405 = (0);
var G__35406 = (0);
seq__34829_35376 = G__35403;
chunk__34831_35377 = G__35404;
count__34832_35378 = G__35405;
i__34833_35379 = G__35406;
continue;
}
} else {
}
}
break;
}

var G__35407 = cljs.core.next(seq__34828_35368__$1);
var G__35408 = null;
var G__35409 = (0);
var G__35410 = (0);
seq__34828_35325 = G__35407;
chunk__34835_35326 = G__35408;
count__34836_35327 = G__35409;
i__34837_35328 = G__35410;
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
loom.alg_generic.bm_or.cljs$lang$applyTo = (function (seq34821){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34821));
});

/**
 * Get the indicies of set bits in 'bitmap.
 */
loom.alg_generic.bm_get_indicies = (function loom$alg_generic$bm_get_indicies(bitmap){
var iter__4523__auto__ = (function loom$alg_generic$bm_get_indicies_$_iter__34950(s__34951){
return (new cljs.core.LazySeq(null,(function (){
var s__34951__$1 = s__34951;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__34951__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var chunk = cljs.core.first(xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__34951__$1,chunk,xs__6277__auto__,temp__5720__auto__){
return (function loom$alg_generic$bm_get_indicies_$_iter__34950_$_iter__34952(s__34953){
return (new cljs.core.LazySeq(null,((function (s__34951__$1,chunk,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__34953__$1 = s__34953;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__34953__$1);
if(temp__5720__auto____$1){
var s__34953__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__34953__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__34953__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__34955 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__34954 = (0);
while(true){
if((i__34954 < size__4522__auto__)){
var offset = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__34954);
var idx = ((chunk * loom.alg_generic.bits_per_long) + offset);
if(cljs.core.truth_(loom.alg_generic.bm_get(bitmap,idx))){
cljs.core.chunk_append(b__34955,idx);

var G__35421 = (i__34954 + (1));
i__34954 = G__35421;
continue;
} else {
var G__35425 = (i__34954 + (1));
i__34954 = G__35425;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34955),loom$alg_generic$bm_get_indicies_$_iter__34950_$_iter__34952(cljs.core.chunk_rest(s__34953__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34955),null);
}
} else {
var offset = cljs.core.first(s__34953__$2);
var idx = ((chunk * loom.alg_generic.bits_per_long) + offset);
if(cljs.core.truth_(loom.alg_generic.bm_get(bitmap,idx))){
return cljs.core.cons(idx,loom$alg_generic$bm_get_indicies_$_iter__34950_$_iter__34952(cljs.core.rest(s__34953__$2)));
} else {
var G__35431 = cljs.core.rest(s__34953__$2);
s__34953__$1 = G__35431;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__34951__$1,chunk,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__34951__$1,chunk,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(loom.alg_generic.bits_per_long)));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,loom$alg_generic$bm_get_indicies_$_iter__34950(cljs.core.rest(s__34951__$1)));
} else {
var G__35434 = cljs.core.rest(s__34951__$1);
s__34951__$1 = G__35434;
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

loom.alg_generic.Ancestry.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k34965,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__34997 = k34965;
var G__34997__$1 = (((G__34997 instanceof cljs.core.Keyword))?G__34997.fqn:null);
switch (G__34997__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34965,else__4388__auto__);

}
});

loom.alg_generic.Ancestry.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__35001){
var vec__35002 = p__35001;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35002,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35002,(1),null);
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

loom.alg_generic.Ancestry.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34964){
var self__ = this;
var G__34964__$1 = this;
return (new cljs.core.RecordIter((0),G__34964__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node->idx","node->idx",152705227),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4243__auto____$1 = (function (){var fexpr__35013 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1116202445 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__35013(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

loom.alg_generic.Ancestry.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34967,other34968){
var self__ = this;
var this34967__$1 = this;
return (((!((other34968 == null)))) && ((this34967__$1.constructor === other34968.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34967__$1.node__GT_idx,other34968.node__GT_idx)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34967__$1.idx__GT_node,other34968.idx__GT_node)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34967__$1.bitmaps,other34968.bitmaps)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34967__$1.__extmap,other34968.__extmap)));
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

loom.alg_generic.Ancestry.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__34964){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__35030 = cljs.core.keyword_identical_QMARK_;
var expr__35031 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__35037 = new cljs.core.Keyword(null,"node->idx","node->idx",152705227);
var G__35038 = expr__35031;
return (pred__35030.cljs$core$IFn$_invoke$arity$2 ? pred__35030.cljs$core$IFn$_invoke$arity$2(G__35037,G__35038) : pred__35030.call(null,G__35037,G__35038));
})())){
return (new loom.alg_generic.Ancestry(G__34964,self__.idx__GT_node,self__.bitmaps,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__35039 = new cljs.core.Keyword(null,"idx->node","idx->node",1811907175);
var G__35040 = expr__35031;
return (pred__35030.cljs$core$IFn$_invoke$arity$2 ? pred__35030.cljs$core$IFn$_invoke$arity$2(G__35039,G__35040) : pred__35030.call(null,G__35039,G__35040));
})())){
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,G__34964,self__.bitmaps,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__35041 = new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842);
var G__35042 = expr__35031;
return (pred__35030.cljs$core$IFn$_invoke$arity$2 ? pred__35030.cljs$core$IFn$_invoke$arity$2(G__35041,G__35042) : pred__35030.call(null,G__35041,G__35042));
})())){
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,G__34964,self__.__meta,self__.__extmap,null));
} else {
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__34964),null));
}
}
}
});

loom.alg_generic.Ancestry.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"node->idx","node->idx",152705227),self__.node__GT_idx,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),self__.idx__GT_node,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),self__.bitmaps,null))], null),self__.__extmap));
});

loom.alg_generic.Ancestry.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__34964){
var self__ = this;
var this__4384__auto____$1 = this;
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,G__34964,self__.__extmap,self__.__hash));
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
loom.alg_generic.map__GT_Ancestry = (function loom$alg_generic$map__GT_Ancestry(G__34990){
var extmap__4424__auto__ = (function (){var G__35048 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34990,new cljs.core.Keyword(null,"node->idx","node->idx",152705227),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842)], 0));
if(cljs.core.record_QMARK_(G__34990)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35048);
} else {
return G__35048;
}
})();
return (new loom.alg_generic.Ancestry(new cljs.core.Keyword(null,"node->idx","node->idx",152705227).cljs$core$IFn$_invoke$arity$1(G__34990),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175).cljs$core$IFn$_invoke$arity$1(G__34990),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842).cljs$core$IFn$_invoke$arity$1(G__34990),null,cljs.core.not_empty(extmap__4424__auto__),null));
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
var len__4730__auto___35478 = arguments.length;
var i__4731__auto___35479 = (0);
while(true){
if((i__4731__auto___35479 < len__4730__auto___35478)){
args__4736__auto__.push((arguments[i__4731__auto___35479]));

var G__35480 = (i__4731__auto___35479 + (1));
i__4731__auto___35479 = G__35480;
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
var map__35064 = ancestry;
var map__35064__$1 = (((((!((map__35064 == null))))?(((((map__35064.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35064.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35064):map__35064);
var node__GT_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35064__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var idx__GT_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35064__$1,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175));
var bitmaps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35064__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
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
loom.alg_generic.ancestry_add.cljs$lang$applyTo = (function (seq35057){
var G__35058 = cljs.core.first(seq35057);
var seq35057__$1 = cljs.core.next(seq35057);
var G__35059 = cljs.core.first(seq35057__$1);
var seq35057__$2 = cljs.core.next(seq35057__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35058,G__35059,seq35057__$2);
});

/**
 * Finds if the 'parenter node is an ancestor of 'childer node for the given
 *   'ancestry cache.
 */
loom.alg_generic.ancestor_QMARK_ = (function loom$alg_generic$ancestor_QMARK_(ancestry,childer,parenter){
var map__35075 = ancestry;
var map__35075__$1 = (((((!((map__35075 == null))))?(((((map__35075.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35075.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35075):map__35075);
var node__GT_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35075__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var bitmaps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35075__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
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
var map__35087 = ancestry;
var map__35087__$1 = (((((!((map__35087 == null))))?(((((map__35087.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35087.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35087):map__35087);
var node__GT_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35087__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var idx__GT_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35087__$1,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175));
var bitmaps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35087__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
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
