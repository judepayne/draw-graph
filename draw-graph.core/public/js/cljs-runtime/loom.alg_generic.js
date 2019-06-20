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
var len__4730__auto___35105 = arguments.length;
var i__4731__auto___35106 = (0);
while(true){
if((i__4731__auto___35106 < len__4730__auto___35105)){
args__4736__auto__.push((arguments[i__4731__auto___35106]));

var G__35108 = (i__4731__auto___35106 + (1));
i__4731__auto___35106 = G__35108;
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
var len__4730__auto___35120 = arguments.length;
var i__4731__auto___35121 = (0);
while(true){
if((i__4731__auto___35121 < len__4730__auto___35120)){
args__4736__auto__.push((arguments[i__4731__auto___35121]));

var G__35125 = (i__4731__auto___35121 + (1));
i__4731__auto___35121 = G__35125;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__34271){
var map__34272 = p__34271;
var map__34272__$1 = (((((!((map__34272 == null))))?(((((map__34272.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34272.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34272):map__34272);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34272__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var step = ((function (map__34272,map__34272__$1,seen){
return (function loom$alg_generic$step(successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1){
while(true){
var temp__5718__auto__ = cljs.core.first(nbrs);
if(cljs.core.truth_(temp__5718__auto__)){
var nbr = temp__5718__auto__;
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null),(new cljs.core.LazySeq(null,((function (successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1,nbr,temp__5718__auto__,map__34272,map__34272__$1,seen){
return (function (){
var seen__$2 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,start__$1);
if(cljs.core.truth_((seen__$2.cljs$core$IFn$_invoke$arity$1 ? seen__$2.cljs$core$IFn$_invoke$arity$1(nbr) : seen__$2.call(null,nbr)))){
return loom$alg_generic$step(successors__$1,start__$1,cljs.core.next(nbrs),stack,nbrstack,seen__$2);
} else {
return loom$alg_generic$step(successors__$1,nbr,(successors__$1.cljs$core$IFn$_invoke$arity$1 ? successors__$1.cljs$core$IFn$_invoke$arity$1(nbr) : successors__$1.call(null,nbr)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,start__$1),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nbrstack,cljs.core.next(nbrs)),seen__$2);
}
});})(successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1,nbr,temp__5718__auto__,map__34272,map__34272__$1,seen))
,null,null)));
} else {
var temp__5720__auto__ = cljs.core.peek(stack);
if(cljs.core.truth_(temp__5720__auto__)){
var parent = temp__5720__auto__;
var G__35137 = successors__$1;
var G__35138 = parent;
var G__35139 = cljs.core.peek(nbrstack);
var G__35140 = cljs.core.pop(stack);
var G__35141 = cljs.core.pop(nbrstack);
var G__35142 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,start__$1);
successors__$1 = G__35137;
start__$1 = G__35138;
nbrs = G__35139;
stack = G__35140;
nbrstack = G__35141;
seen__$1 = G__35142;
continue;
} else {
return null;
}
}
break;
}
});})(map__34272,map__34272__$1,seen))
;
if(cljs.core.truth_((seen.cljs$core$IFn$_invoke$arity$1 ? seen.cljs$core$IFn$_invoke$arity$1(start) : seen.call(null,start)))){
return null;
} else {
return step(successors,start,(successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(start) : successors.call(null,start)),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,start));
}
});

loom.alg_generic.pre_edge_traverse.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.pre_edge_traverse.cljs$lang$applyTo = (function (seq34261){
var G__34262 = cljs.core.first(seq34261);
var seq34261__$1 = cljs.core.next(seq34261);
var G__34263 = cljs.core.first(seq34261__$1);
var seq34261__$2 = cljs.core.next(seq34261__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34262,G__34263,seq34261__$2);
});

/**
 * Returns a depth-first spanning tree of the form {node [successors]}
 */
loom.alg_generic.pre_span = (function loom$alg_generic$pre_span(var_args){
var args__4736__auto__ = [];
var len__4730__auto___35151 = arguments.length;
var i__4731__auto___35152 = (0);
while(true){
if((i__4731__auto___35152 < len__4730__auto___35151)){
args__4736__auto__.push((arguments[i__4731__auto___35152]));

var G__35153 = (i__4731__auto___35152 + (1));
i__4731__auto___35152 = G__35153;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__34303){
var map__34305 = p__34303;
var map__34305__$1 = (((((!((map__34305 == null))))?(((((map__34305.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34305.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34305):map__34305);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34305__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34305__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__35161 = seen__$2;
var G__35162 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(preds,u,v);
var G__35163 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,u);
seen__$1 = G__35161;
preds = G__35162;
stack = G__35163;
continue;
} else {
var G__35165 = seen__$2;
var G__35166 = preds;
var G__35167 = cljs.core.pop(stack);
seen__$1 = G__35165;
preds = G__35166;
stack = G__35167;
continue;
}
}
break;
}
});

loom.alg_generic.pre_span.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.pre_span.cljs$lang$applyTo = (function (seq34294){
var G__34295 = cljs.core.first(seq34294);
var seq34294__$1 = cljs.core.next(seq34294);
var G__34296 = cljs.core.first(seq34294__$1);
var seq34294__$2 = cljs.core.next(seq34294__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34295,G__34296,seq34294__$2);
});

/**
 * Traverses a graph depth-first postorder from start, successors
 *   being a function that returns adjacent nodes. Returns a vector
 */
loom.alg_generic.post_traverse = (function loom$alg_generic$post_traverse(var_args){
var args__4736__auto__ = [];
var len__4730__auto___35170 = arguments.length;
var i__4731__auto___35171 = (0);
while(true){
if((i__4731__auto___35171 < len__4730__auto___35170)){
args__4736__auto__.push((arguments[i__4731__auto___35171]));

var G__35172 = (i__4731__auto___35171 + (1));
i__4731__auto___35171 = G__35172;
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
var G__35179 = seen__$2;
var G__35180 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,v);
var G__35181 = cljs.core.pop(stack);
seen__$1 = G__35179;
result = G__35180;
stack = G__35181;
continue;
} else {
var G__35182 = seen__$2;
var G__35183 = result;
var G__35184 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,cljs.core.first(nbrs));
seen__$1 = G__35182;
result = G__35183;
stack = G__35184;
continue;
}
}
break;
}
});

loom.alg_generic.post_traverse.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.post_traverse.cljs$lang$applyTo = (function (seq34323){
var G__34324 = cljs.core.first(seq34323);
var seq34323__$1 = cljs.core.next(seq34323);
var G__34325 = cljs.core.first(seq34323__$1);
var seq34323__$2 = cljs.core.next(seq34323__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34324,G__34325,seq34323__$2);
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
var len__4730__auto___35187 = arguments.length;
var i__4731__auto___35188 = (0);
while(true){
if((i__4731__auto___35188 < len__4730__auto___35187)){
args__4736__auto__.push((arguments[i__4731__auto___35188]));

var G__35189 = (i__4731__auto___35188 + (1));
i__4731__auto___35188 = G__35189;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__34364){
var map__34367 = p__34364;
var map__34367__$1 = (((((!((map__34367 == null))))?(((((map__34367.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34367.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34367):map__34367);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34367__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34367__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__35192 = start__$1;
var G__35193 = cljs.core.next(nbrs);
var G__35194 = stack;
var G__35195 = nbrstack;
var G__35196 = seen__$2;
var G__35197 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(edges,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null));
start__$1 = G__35192;
nbrs = G__35193;
stack = G__35194;
nbrstack = G__35195;
seen__$1 = G__35196;
edges = G__35197;
continue;
} else {
var G__35200 = nbr;
var G__35201 = (successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(nbr) : successors.call(null,nbr));
var G__35202 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,start__$1);
var G__35203 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nbrstack,cljs.core.next(nbrs));
var G__35204 = seen__$2;
var G__35205 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(edges,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null));
start__$1 = G__35200;
nbrs = G__35201;
stack = G__35202;
nbrstack = G__35203;
seen__$1 = G__35204;
edges = G__35205;
continue;
}
} else {
var temp__5718__auto____$1 = cljs.core.peek(stack);
if(cljs.core.truth_(temp__5718__auto____$1)){
var parent = temp__5718__auto____$1;
var G__35207 = parent;
var G__35208 = cljs.core.peek(nbrstack);
var G__35209 = cljs.core.pop(stack);
var G__35210 = cljs.core.pop(nbrstack);
var G__35211 = seen__$2;
var G__35212 = edges;
start__$1 = G__35207;
nbrs = G__35208;
stack = G__35209;
nbrstack = G__35210;
seen__$1 = G__35211;
edges = G__35212;
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
loom.alg_generic.post_edge_traverse.cljs$lang$applyTo = (function (seq34349){
var G__34350 = cljs.core.first(seq34349);
var seq34349__$1 = cljs.core.next(seq34349);
var G__34351 = cljs.core.first(seq34349__$1);
var seq34349__$2 = cljs.core.next(seq34349__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34350,G__34351,seq34349__$2);
});

/**
 * Topological sort of a component of a (presumably) directed graph.
 *   Returns nil if the graph contains any cycles. See loom.alg/topsort
 *   for a complete topological sort
 */
loom.alg_generic.topsort_component = (function loom$alg_generic$topsort_component(var_args){
var G__34383 = arguments.length;
switch (G__34383) {
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
var G__35217 = seen__$2;
var G__35218 = explored__$1;
var G__35219 = result;
var G__35220 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,cljs.core.first(us));
seen__$1 = G__35217;
explored__$1 = G__35218;
result = G__35219;
stack = G__35220;
continue;
}
} else {
var G__35222 = seen__$2;
var G__35223 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(explored__$1,v);
var G__35224 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,v);
var G__35225 = cljs.core.pop(stack);
seen__$1 = G__35222;
explored__$1 = G__35223;
result = G__35224;
stack = G__35225;
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
var len__4730__auto___35228 = arguments.length;
var i__4731__auto___35229 = (0);
while(true){
if((i__4731__auto___35229 < len__4730__auto___35228)){
args__4736__auto__.push((arguments[i__4731__auto___35229]));

var G__35231 = (i__4731__auto___35229 + (1));
i__4731__auto___35229 = G__35231;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__34417){
var map__34419 = p__34417;
var map__34419__$1 = (((((!((map__34419 == null))))?(((((map__34419.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34419.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34419):map__34419);
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34419__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var when = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34419__$1,new cljs.core.Keyword(null,"when","when",-576417306));
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34419__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
var f__$1 = (function (){var or__4131__auto__ = f;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return ((function (or__4131__auto__,map__34419,map__34419__$1,f,when,seen){
return (function (n,p,d){
return n;
});
;})(or__4131__auto__,map__34419,map__34419__$1,f,when,seen))
}
})();
var nbr_pred = (function (){var or__4131__auto__ = when;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.constantly(true);
}
})();
var step = ((function (f__$1,nbr_pred,map__34419,map__34419__$1,f,when,seen){
return (function loom$alg_generic$step(queue,preds){
var temp__5720__auto__ = cljs.core.peek(queue);
if(cljs.core.truth_(temp__5720__auto__)){
var vec__34472 = temp__5720__auto__;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34472,(0),null);
var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34472,(1),null);
return cljs.core.cons((f__$1.cljs$core$IFn$_invoke$arity$3 ? f__$1.cljs$core$IFn$_invoke$arity$3(node,preds,depth) : f__$1.call(null,node,preds,depth)),(new cljs.core.LazySeq(null,((function (vec__34472,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34419,map__34419__$1,f,when,seen){
return (function (){
var nbrs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__34472,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34419,map__34419__$1,f,when,seen){
return (function (p1__34408_SHARP_){
var G__34476 = p1__34408_SHARP_;
var G__34477 = node;
var G__34478 = (depth + (1));
return (nbr_pred.cljs$core$IFn$_invoke$arity$3 ? nbr_pred.cljs$core$IFn$_invoke$arity$3(G__34476,G__34477,G__34478) : nbr_pred.call(null,G__34476,G__34477,G__34478));
});})(vec__34472,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34419,map__34419__$1,f,when,seen))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__34472,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34419,map__34419__$1,f,when,seen){
return (function (p1__34407_SHARP_){
return cljs.core.contains_QMARK_(preds,p1__34407_SHARP_);
});})(vec__34472,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34419,map__34419__$1,f,when,seen))
,(successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(node) : successors.call(null,node))));
return loom$alg_generic$step(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(queue),(function (){var iter__4523__auto__ = ((function (nbrs,vec__34472,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34419,map__34419__$1,f,when,seen){
return (function loom$alg_generic$step_$_iter__34480(s__34481){
return (new cljs.core.LazySeq(null,((function (nbrs,vec__34472,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34419,map__34419__$1,f,when,seen){
return (function (){
var s__34481__$1 = s__34481;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__34481__$1);
if(temp__5720__auto____$1){
var s__34481__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__34481__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__34481__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__34483 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__34482 = (0);
while(true){
if((i__34482 < size__4522__auto__)){
var nbr = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__34482);
cljs.core.chunk_append(b__34483,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,(depth + (1))], null));

var G__35237 = (i__34482 + (1));
i__34482 = G__35237;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34483),loom$alg_generic$step_$_iter__34480(cljs.core.chunk_rest(s__34481__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34483),null);
}
} else {
var nbr = cljs.core.first(s__34481__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,(depth + (1))], null),loom$alg_generic$step_$_iter__34480(cljs.core.rest(s__34481__$2)));
}
} else {
return null;
}
break;
}
});})(nbrs,vec__34472,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34419,map__34419__$1,f,when,seen))
,null,null));
});})(nbrs,vec__34472,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34419,map__34419__$1,f,when,seen))
;
return iter__4523__auto__(nbrs);
})()),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (nbrs,vec__34472,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34419,map__34419__$1,f,when,seen){
return (function (p1__34409_SHARP_,p2__34410_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__34409_SHARP_,p2__34410_SHARP_,node);
});})(nbrs,vec__34472,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34419,map__34419__$1,f,when,seen))
,preds,nbrs));
});})(vec__34472,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34419,map__34419__$1,f,when,seen))
,null,null)));
} else {
return null;
}
});})(f__$1,nbr_pred,map__34419,map__34419__$1,f,when,seen))
;
return step(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentQueue.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,(0)], null)),((cljs.core.map_QMARK_(seen))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(seen,start,null):cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.createAsIfByAssoc([start,null]),(function (){var iter__4523__auto__ = ((function (f__$1,nbr_pred,map__34419,map__34419__$1,f,when,seen){
return (function loom$alg_generic$iter__34491(s__34492){
return (new cljs.core.LazySeq(null,((function (f__$1,nbr_pred,map__34419,map__34419__$1,f,when,seen){
return (function (){
var s__34492__$1 = s__34492;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__34492__$1);
if(temp__5720__auto__){
var s__34492__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__34492__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__34492__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__34494 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__34493 = (0);
while(true){
if((i__34493 < size__4522__auto__)){
var s = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__34493);
cljs.core.chunk_append(b__34494,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,null], null));

var G__35241 = (i__34493 + (1));
i__34493 = G__35241;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34494),loom$alg_generic$iter__34491(cljs.core.chunk_rest(s__34492__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34494),null);
}
} else {
var s = cljs.core.first(s__34492__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,null], null),loom$alg_generic$iter__34491(cljs.core.rest(s__34492__$2)));
}
} else {
return null;
}
break;
}
});})(f__$1,nbr_pred,map__34419,map__34419__$1,f,when,seen))
,null,null));
});})(f__$1,nbr_pred,map__34419,map__34419__$1,f,when,seen))
;
return iter__4523__auto__(seen);
})())));
});

loom.alg_generic.bf_traverse.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.bf_traverse.cljs$lang$applyTo = (function (seq34411){
var G__34412 = cljs.core.first(seq34411);
var seq34411__$1 = cljs.core.next(seq34411);
var G__34413 = cljs.core.first(seq34411__$1);
var seq34411__$2 = cljs.core.next(seq34411__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34412,G__34413,seq34411__$2);
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

loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__34515){
var map__34516 = p__34515;
var map__34516__$1 = (((((!((map__34516 == null))))?(((((map__34516.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34516.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34516):map__34516);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34516__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
return loom.alg_generic.preds__GT_span(cljs.core.last(loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic(successors,start,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"f","f",-1597136552),((function (map__34516,map__34516__$1,seen){
return (function (_,pm,___$1){
return pm;
});})(map__34516,map__34516__$1,seen))
,new cljs.core.Keyword(null,"seen","seen",-518999789),seen], 0))));
});

loom.alg_generic.bf_span.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.bf_span.cljs$lang$applyTo = (function (seq34510){
var G__34511 = cljs.core.first(seq34510);
var seq34510__$1 = cljs.core.next(seq34510);
var G__34512 = cljs.core.first(seq34510__$1);
var seq34510__$2 = cljs.core.next(seq34510__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34511,G__34512,seq34510__$2);
});

/**
 * Returns a path from start to end with the fewest hops (i.e. irrespective
 *   of edge weights), successors being a function that returns adjacent nodes
 */
loom.alg_generic.bf_path = (function loom$alg_generic$bf_path(var_args){
var args__4736__auto__ = [];
var len__4730__auto___35264 = arguments.length;
var i__4731__auto___35265 = (0);
while(true){
if((i__4731__auto___35265 < len__4730__auto___35264)){
args__4736__auto__.push((arguments[i__4731__auto___35265]));

var G__35267 = (i__4731__auto___35265 + (1));
i__4731__auto___35265 = G__35267;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,end,p__34531){
var map__34532 = p__34531;
var map__34532__$1 = (((((!((map__34532 == null))))?(((((map__34532.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34532.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34532):map__34532);
var opts = map__34532__$1;
var opts__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.vector], null)], 0));
var temp__5720__auto__ = cljs.core.some(((function (opts__$1,map__34532,map__34532__$1,opts){
return (function (p__34535){
var vec__34536 = p__34535;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34536,(0),null);
var pm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34536,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34536,(2),null);
if(cljs.core.truth_((pm.cljs$core$IFn$_invoke$arity$1 ? pm.cljs$core$IFn$_invoke$arity$1(end) : pm.call(null,end)))){
return pm;
} else {
return null;
}
});})(opts__$1,map__34532,map__34532__$1,opts))
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
loom.alg_generic.bf_path.cljs$lang$applyTo = (function (seq34523){
var G__34524 = cljs.core.first(seq34523);
var seq34523__$1 = cljs.core.next(seq34523);
var G__34525 = cljs.core.first(seq34523__$1);
var seq34523__$2 = cljs.core.next(seq34523__$1);
var G__34526 = cljs.core.first(seq34523__$2);
var seq34523__$3 = cljs.core.next(seq34523__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34524,G__34525,G__34526,seq34523__$3);
});

/**
 * Returns a lazy-seq of the keys that exist in both m1 and m2
 */
loom.alg_generic.shared_keys = (function loom$alg_generic$shared_keys(m1,m2){
while(true){
if((cljs.core.count(m2) < cljs.core.count(m1))){
var G__35275 = m2;
var G__35276 = m1;
m1 = G__35275;
m2 = G__35276;
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
var iter__4523__auto__ = (function loom$alg_generic$reverse_edges_$_iter__34555(s__34556){
return (new cljs.core.LazySeq(null,(function (){
var s__34556__$1 = s__34556;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__34556__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var node = cljs.core.first(xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__34556__$1,node,xs__6277__auto__,temp__5720__auto__){
return (function loom$alg_generic$reverse_edges_$_iter__34555_$_iter__34557(s__34558){
return (new cljs.core.LazySeq(null,((function (s__34556__$1,node,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__34558__$1 = s__34558;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__34558__$1);
if(temp__5720__auto____$1){
var s__34558__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__34558__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__34558__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__34560 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__34559 = (0);
while(true){
if((i__34559 < size__4522__auto__)){
var nbr = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__34559);
if((!(cljs.core.contains_QMARK_(coll,nbr)))){
cljs.core.chunk_append(b__34560,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,node], null));

var G__35282 = (i__34559 + (1));
i__34559 = G__35282;
continue;
} else {
var G__35284 = (i__34559 + (1));
i__34559 = G__35284;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34560),loom$alg_generic$reverse_edges_$_iter__34555_$_iter__34557(cljs.core.chunk_rest(s__34558__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34560),null);
}
} else {
var nbr = cljs.core.first(s__34558__$2);
if((!(cljs.core.contains_QMARK_(coll,nbr)))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,node], null),loom$alg_generic$reverse_edges_$_iter__34555_$_iter__34557(cljs.core.rest(s__34558__$2)));
} else {
var G__35288 = cljs.core.rest(s__34558__$2);
s__34558__$1 = G__35288;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__34556__$1,node,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__34556__$1,node,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__((successor_fn.cljs$core$IFn$_invoke$arity$1 ? successor_fn.cljs$core$IFn$_invoke$arity$1(node) : successor_fn.call(null,node))));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,loom$alg_generic$reverse_edges_$_iter__34555(cljs.core.rest(s__34556__$1)));
} else {
var G__35290 = cljs.core.rest(s__34556__$1);
s__34556__$1 = G__35290;
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
var iter__4523__auto__ = (function loom$alg_generic$conj_paths_$_iter__34591(s__34592){
return (new cljs.core.LazySeq(null,(function (){
var s__34592__$1 = s__34592;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__34592__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var n = cljs.core.first(xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__34592__$1,n,xs__6277__auto__,temp__5720__auto__){
return (function loom$alg_generic$conj_paths_$_iter__34591_$_iter__34593(s__34594){
return (new cljs.core.LazySeq(null,((function (s__34592__$1,n,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__34594__$1 = s__34594;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__34594__$1);
if(temp__5720__auto____$1){
var xs__6277__auto____$1 = temp__5720__auto____$1;
var from = cljs.core.first(xs__6277__auto____$1);
var iterys__4519__auto__ = ((function (s__34594__$1,s__34592__$1,from,xs__6277__auto____$1,temp__5720__auto____$1,n,xs__6277__auto__,temp__5720__auto__){
return (function loom$alg_generic$conj_paths_$_iter__34591_$_iter__34593_$_iter__34595(s__34596){
return (new cljs.core.LazySeq(null,((function (s__34594__$1,s__34592__$1,from,xs__6277__auto____$1,temp__5720__auto____$1,n,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__34596__$1 = s__34596;
while(true){
var temp__5720__auto____$2 = cljs.core.seq(s__34596__$1);
if(temp__5720__auto____$2){
var s__34596__$2 = temp__5720__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__34596__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__34596__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__34598 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__34597 = (0);
while(true){
if((i__34597 < size__4522__auto__)){
var to = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__34597);
cljs.core.chunk_append(b__34598,cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(from,to)));

var G__35295 = (i__34597 + (1));
i__34597 = G__35295;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34598),loom$alg_generic$conj_paths_$_iter__34591_$_iter__34593_$_iter__34595(cljs.core.chunk_rest(s__34596__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34598),null);
}
} else {
var to = cljs.core.first(s__34596__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(from,to)),loom$alg_generic$conj_paths_$_iter__34591_$_iter__34593_$_iter__34595(cljs.core.rest(s__34596__$2)));
}
} else {
return null;
}
break;
}
});})(s__34594__$1,s__34592__$1,from,xs__6277__auto____$1,temp__5720__auto____$1,n,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__34594__$1,s__34592__$1,from,xs__6277__auto____$1,temp__5720__auto____$1,n,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,loom.alg_generic.trace_paths(to_map,n))));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,loom$alg_generic$conj_paths_$_iter__34591_$_iter__34593(cljs.core.rest(s__34594__$1)));
} else {
var G__35299 = cljs.core.rest(s__34594__$1);
s__34594__$1 = G__35299;
continue;
}
} else {
return null;
}
break;
}
});})(s__34592__$1,n,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__34592__$1,n,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.reverse,loom.alg_generic.trace_paths(from_map,n))));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,loom$alg_generic$conj_paths_$_iter__34591(cljs.core.rest(s__34592__$1)));
} else {
var G__35300 = cljs.core.rest(s__34592__$1);
s__34592__$1 = G__35300;
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
return (function (p1__34609_SHARP_){
return cljs.core.contains_QMARK_(coll,p1__34609_SHARP_);
});})(find_succs,find_preds))
,q));
});})(find_succs,find_preds))
;
var map_set_pairs = ((function (find_succs,find_preds,overlaps){
return (function (map,pairs){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (find_succs,find_preds,overlaps){
return (function (map__$1,p__34612){
var vec__34613 = p__34612;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34613,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34613,(1),null);
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
var G__35306 = outgoing__$1;
var G__35307 = incoming;
var G__35308 = q1__$1;
var G__35309 = q2;
outgoing = G__35306;
incoming = G__35307;
q1 = G__35308;
q2 = G__35309;
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
var G__35312 = outgoing;
var G__35313 = incoming__$1;
var G__35314 = q1;
var G__35315 = q2__$1;
outgoing = G__35312;
incoming = G__35313;
q1 = G__35314;
q2 = G__35315;
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
var G__34630 = arguments.length;
switch (G__34630) {
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
var step = (function loom$alg_generic$step(p__34685){
var vec__34686 = p__34685;
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34686,(0),null);
var pq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34686,(1),null);
var temp__5720__auto__ = cljs.core.first(pq);
if(cljs.core.truth_(temp__5720__auto__)){
var vec__34695 = temp__5720__auto__;
var dist_su = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34695,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34695,(1),null);
var u = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34695,(2),null);
var fpq = vec__34695;
return cljs.core.cons((f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(u,state) : f.call(null,u,state)),(new cljs.core.LazySeq(null,((function (vec__34695,dist_su,_,u,fpq,temp__5720__auto__,vec__34686,state,pq){
return (function (){
return loom$alg_generic$step(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__34695,dist_su,_,u,fpq,temp__5720__auto__,vec__34686,state,pq){
return (function (p__34703,v){
var vec__34704 = p__34703;
var state__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34704,(0),null);
var pq__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34704,(1),null);
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
});})(vec__34695,dist_su,_,u,fpq,temp__5720__auto__,vec__34686,state,pq))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(pq,fpq)], null),(successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(u) : successors.call(null,u))));
});})(vec__34695,dist_su,_,u,fpq,temp__5720__auto__,vec__34686,state,pq))
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (span,p__34725){
var vec__34726 = p__34725;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34726,(0),null);
var vec__34729 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34726,(1),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34729,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34729,(1),null);
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
var temp__5718__auto__ = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__34743){
var vec__34744 = p__34743;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34744,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34744,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(end,node);
}),loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$3(successors,dist,start)));
if(cljs.core.truth_(temp__5718__auto__)){
var vec__34751 = temp__5718__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34751,(0),null);
var end_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34751,(1),null);
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
return cljs.core.long$((function (){var G__34768 = (bits / loom.alg_generic.bits_per_long);
return Math.ceil(G__34768);
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
var len__4730__auto___35364 = arguments.length;
var i__4731__auto___35365 = (0);
while(true){
if((i__4731__auto___35365 < len__4730__auto___35364)){
args__4736__auto__.push((arguments[i__4731__auto___35365]));

var G__35367 = (i__4731__auto___35365 + (1));
i__4731__auto___35365 = G__35367;
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
var seq__34810_35373 = cljs.core.seq(cljs.core.rest(bitmaps));
var chunk__34817_35374 = null;
var count__34818_35375 = (0);
var i__34819_35376 = (0);
while(true){
if((i__34819_35376 < count__34818_35375)){
var bitmap_35377 = chunk__34817_35374.cljs$core$IIndexed$_nth$arity$2(null,i__34819_35376);
var seq__34820_35378 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.list,bitmap_35377));
var chunk__34822_35379 = null;
var count__34823_35380 = (0);
var i__34824_35381 = (0);
while(true){
if((i__34824_35381 < count__34823_35380)){
var vec__34875_35382 = chunk__34822_35379.cljs$core$IIndexed$_nth$arity$2(null,i__34824_35381);
var idx_35383 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34875_35382,(0),null);
var value_35384 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34875_35382,(1),null);
var masked_value_35385 = (value_35384 | (new_bitmap[idx_35383]));
(new_bitmap[idx_35383] = masked_value_35385);


var G__35386 = seq__34820_35378;
var G__35387 = chunk__34822_35379;
var G__35388 = count__34823_35380;
var G__35389 = (i__34824_35381 + (1));
seq__34820_35378 = G__35386;
chunk__34822_35379 = G__35387;
count__34823_35380 = G__35388;
i__34824_35381 = G__35389;
continue;
} else {
var temp__5720__auto___35390 = cljs.core.seq(seq__34820_35378);
if(temp__5720__auto___35390){
var seq__34820_35391__$1 = temp__5720__auto___35390;
if(cljs.core.chunked_seq_QMARK_(seq__34820_35391__$1)){
var c__4550__auto___35392 = cljs.core.chunk_first(seq__34820_35391__$1);
var G__35393 = cljs.core.chunk_rest(seq__34820_35391__$1);
var G__35394 = c__4550__auto___35392;
var G__35395 = cljs.core.count(c__4550__auto___35392);
var G__35396 = (0);
seq__34820_35378 = G__35393;
chunk__34822_35379 = G__35394;
count__34823_35380 = G__35395;
i__34824_35381 = G__35396;
continue;
} else {
var vec__34878_35397 = cljs.core.first(seq__34820_35391__$1);
var idx_35398 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34878_35397,(0),null);
var value_35399 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34878_35397,(1),null);
var masked_value_35400 = (value_35399 | (new_bitmap[idx_35398]));
(new_bitmap[idx_35398] = masked_value_35400);


var G__35401 = cljs.core.next(seq__34820_35391__$1);
var G__35402 = null;
var G__35403 = (0);
var G__35404 = (0);
seq__34820_35378 = G__35401;
chunk__34822_35379 = G__35402;
count__34823_35380 = G__35403;
i__34824_35381 = G__35404;
continue;
}
} else {
}
}
break;
}

var G__35405 = seq__34810_35373;
var G__35406 = chunk__34817_35374;
var G__35407 = count__34818_35375;
var G__35408 = (i__34819_35376 + (1));
seq__34810_35373 = G__35405;
chunk__34817_35374 = G__35406;
count__34818_35375 = G__35407;
i__34819_35376 = G__35408;
continue;
} else {
var temp__5720__auto___35409 = cljs.core.seq(seq__34810_35373);
if(temp__5720__auto___35409){
var seq__34810_35411__$1 = temp__5720__auto___35409;
if(cljs.core.chunked_seq_QMARK_(seq__34810_35411__$1)){
var c__4550__auto___35413 = cljs.core.chunk_first(seq__34810_35411__$1);
var G__35414 = cljs.core.chunk_rest(seq__34810_35411__$1);
var G__35415 = c__4550__auto___35413;
var G__35416 = cljs.core.count(c__4550__auto___35413);
var G__35417 = (0);
seq__34810_35373 = G__35414;
chunk__34817_35374 = G__35415;
count__34818_35375 = G__35416;
i__34819_35376 = G__35417;
continue;
} else {
var bitmap_35418 = cljs.core.first(seq__34810_35411__$1);
var seq__34811_35419 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.list,bitmap_35418));
var chunk__34813_35420 = null;
var count__34814_35421 = (0);
var i__34815_35422 = (0);
while(true){
if((i__34815_35422 < count__34814_35421)){
var vec__34904_35425 = chunk__34813_35420.cljs$core$IIndexed$_nth$arity$2(null,i__34815_35422);
var idx_35426 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34904_35425,(0),null);
var value_35427 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34904_35425,(1),null);
var masked_value_35430 = (value_35427 | (new_bitmap[idx_35426]));
(new_bitmap[idx_35426] = masked_value_35430);


var G__35432 = seq__34811_35419;
var G__35433 = chunk__34813_35420;
var G__35434 = count__34814_35421;
var G__35435 = (i__34815_35422 + (1));
seq__34811_35419 = G__35432;
chunk__34813_35420 = G__35433;
count__34814_35421 = G__35434;
i__34815_35422 = G__35435;
continue;
} else {
var temp__5720__auto___35437__$1 = cljs.core.seq(seq__34811_35419);
if(temp__5720__auto___35437__$1){
var seq__34811_35438__$1 = temp__5720__auto___35437__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34811_35438__$1)){
var c__4550__auto___35439 = cljs.core.chunk_first(seq__34811_35438__$1);
var G__35440 = cljs.core.chunk_rest(seq__34811_35438__$1);
var G__35441 = c__4550__auto___35439;
var G__35442 = cljs.core.count(c__4550__auto___35439);
var G__35443 = (0);
seq__34811_35419 = G__35440;
chunk__34813_35420 = G__35441;
count__34814_35421 = G__35442;
i__34815_35422 = G__35443;
continue;
} else {
var vec__34910_35444 = cljs.core.first(seq__34811_35438__$1);
var idx_35445 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34910_35444,(0),null);
var value_35446 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34910_35444,(1),null);
var masked_value_35447 = (value_35446 | (new_bitmap[idx_35445]));
(new_bitmap[idx_35445] = masked_value_35447);


var G__35448 = cljs.core.next(seq__34811_35438__$1);
var G__35449 = null;
var G__35450 = (0);
var G__35451 = (0);
seq__34811_35419 = G__35448;
chunk__34813_35420 = G__35449;
count__34814_35421 = G__35450;
i__34815_35422 = G__35451;
continue;
}
} else {
}
}
break;
}

var G__35452 = cljs.core.next(seq__34810_35411__$1);
var G__35453 = null;
var G__35454 = (0);
var G__35455 = (0);
seq__34810_35373 = G__35452;
chunk__34817_35374 = G__35453;
count__34818_35375 = G__35454;
i__34819_35376 = G__35455;
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
loom.alg_generic.bm_or.cljs$lang$applyTo = (function (seq34798){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34798));
});

/**
 * Get the indicies of set bits in 'bitmap.
 */
loom.alg_generic.bm_get_indicies = (function loom$alg_generic$bm_get_indicies(bitmap){
var iter__4523__auto__ = (function loom$alg_generic$bm_get_indicies_$_iter__34918(s__34919){
return (new cljs.core.LazySeq(null,(function (){
var s__34919__$1 = s__34919;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__34919__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var chunk = cljs.core.first(xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__34919__$1,chunk,xs__6277__auto__,temp__5720__auto__){
return (function loom$alg_generic$bm_get_indicies_$_iter__34918_$_iter__34920(s__34921){
return (new cljs.core.LazySeq(null,((function (s__34919__$1,chunk,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__34921__$1 = s__34921;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__34921__$1);
if(temp__5720__auto____$1){
var s__34921__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__34921__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__34921__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__34923 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__34922 = (0);
while(true){
if((i__34922 < size__4522__auto__)){
var offset = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__34922);
var idx = ((chunk * loom.alg_generic.bits_per_long) + offset);
if(cljs.core.truth_(loom.alg_generic.bm_get(bitmap,idx))){
cljs.core.chunk_append(b__34923,idx);

var G__35463 = (i__34922 + (1));
i__34922 = G__35463;
continue;
} else {
var G__35464 = (i__34922 + (1));
i__34922 = G__35464;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34923),loom$alg_generic$bm_get_indicies_$_iter__34918_$_iter__34920(cljs.core.chunk_rest(s__34921__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34923),null);
}
} else {
var offset = cljs.core.first(s__34921__$2);
var idx = ((chunk * loom.alg_generic.bits_per_long) + offset);
if(cljs.core.truth_(loom.alg_generic.bm_get(bitmap,idx))){
return cljs.core.cons(idx,loom$alg_generic$bm_get_indicies_$_iter__34918_$_iter__34920(cljs.core.rest(s__34921__$2)));
} else {
var G__35466 = cljs.core.rest(s__34921__$2);
s__34921__$1 = G__35466;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__34919__$1,chunk,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__34919__$1,chunk,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(loom.alg_generic.bits_per_long)));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,loom$alg_generic$bm_get_indicies_$_iter__34918(cljs.core.rest(s__34919__$1)));
} else {
var G__35469 = cljs.core.rest(s__34919__$1);
s__34919__$1 = G__35469;
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

loom.alg_generic.Ancestry.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k34930,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__34965 = k34930;
var G__34965__$1 = (((G__34965 instanceof cljs.core.Keyword))?G__34965.fqn:null);
switch (G__34965__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34930,else__4388__auto__);

}
});

loom.alg_generic.Ancestry.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__34986){
var vec__34987 = p__34986;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34987,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34987,(1),null);
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

loom.alg_generic.Ancestry.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34929){
var self__ = this;
var G__34929__$1 = this;
return (new cljs.core.RecordIter((0),G__34929__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node->idx","node->idx",152705227),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4243__auto____$1 = (function (){var fexpr__34997 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1116202445 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__34997(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

loom.alg_generic.Ancestry.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34931,other34932){
var self__ = this;
var this34931__$1 = this;
return (((!((other34932 == null)))) && ((this34931__$1.constructor === other34932.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34931__$1.node__GT_idx,other34932.node__GT_idx)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34931__$1.idx__GT_node,other34932.idx__GT_node)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34931__$1.bitmaps,other34932.bitmaps)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34931__$1.__extmap,other34932.__extmap)));
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

loom.alg_generic.Ancestry.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__34929){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__35003 = cljs.core.keyword_identical_QMARK_;
var expr__35004 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__35006 = new cljs.core.Keyword(null,"node->idx","node->idx",152705227);
var G__35007 = expr__35004;
return (pred__35003.cljs$core$IFn$_invoke$arity$2 ? pred__35003.cljs$core$IFn$_invoke$arity$2(G__35006,G__35007) : pred__35003.call(null,G__35006,G__35007));
})())){
return (new loom.alg_generic.Ancestry(G__34929,self__.idx__GT_node,self__.bitmaps,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__35008 = new cljs.core.Keyword(null,"idx->node","idx->node",1811907175);
var G__35009 = expr__35004;
return (pred__35003.cljs$core$IFn$_invoke$arity$2 ? pred__35003.cljs$core$IFn$_invoke$arity$2(G__35008,G__35009) : pred__35003.call(null,G__35008,G__35009));
})())){
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,G__34929,self__.bitmaps,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__35011 = new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842);
var G__35012 = expr__35004;
return (pred__35003.cljs$core$IFn$_invoke$arity$2 ? pred__35003.cljs$core$IFn$_invoke$arity$2(G__35011,G__35012) : pred__35003.call(null,G__35011,G__35012));
})())){
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,G__34929,self__.__meta,self__.__extmap,null));
} else {
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__34929),null));
}
}
}
});

loom.alg_generic.Ancestry.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"node->idx","node->idx",152705227),self__.node__GT_idx,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),self__.idx__GT_node,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),self__.bitmaps,null))], null),self__.__extmap));
});

loom.alg_generic.Ancestry.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__34929){
var self__ = this;
var this__4384__auto____$1 = this;
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,G__34929,self__.__extmap,self__.__hash));
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
loom.alg_generic.map__GT_Ancestry = (function loom$alg_generic$map__GT_Ancestry(G__34935){
var extmap__4424__auto__ = (function (){var G__35038 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34935,new cljs.core.Keyword(null,"node->idx","node->idx",152705227),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842)], 0));
if(cljs.core.record_QMARK_(G__34935)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35038);
} else {
return G__35038;
}
})();
return (new loom.alg_generic.Ancestry(new cljs.core.Keyword(null,"node->idx","node->idx",152705227).cljs$core$IFn$_invoke$arity$1(G__34935),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175).cljs$core$IFn$_invoke$arity$1(G__34935),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842).cljs$core$IFn$_invoke$arity$1(G__34935),null,cljs.core.not_empty(extmap__4424__auto__),null));
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
var i__4731__auto___35504 = (0);
while(true){
if((i__4731__auto___35504 < len__4730__auto___35502)){
args__4736__auto__.push((arguments[i__4731__auto___35504]));

var G__35507 = (i__4731__auto___35504 + (1));
i__4731__auto___35504 = G__35507;
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
var map__35049 = ancestry;
var map__35049__$1 = (((((!((map__35049 == null))))?(((((map__35049.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35049.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35049):map__35049);
var node__GT_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35049__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var idx__GT_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35049__$1,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175));
var bitmaps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35049__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
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
loom.alg_generic.ancestry_add.cljs$lang$applyTo = (function (seq35044){
var G__35045 = cljs.core.first(seq35044);
var seq35044__$1 = cljs.core.next(seq35044);
var G__35046 = cljs.core.first(seq35044__$1);
var seq35044__$2 = cljs.core.next(seq35044__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35045,G__35046,seq35044__$2);
});

/**
 * Finds if the 'parenter node is an ancestor of 'childer node for the given
 *   'ancestry cache.
 */
loom.alg_generic.ancestor_QMARK_ = (function loom$alg_generic$ancestor_QMARK_(ancestry,childer,parenter){
var map__35059 = ancestry;
var map__35059__$1 = (((((!((map__35059 == null))))?(((((map__35059.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35059.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35059):map__35059);
var node__GT_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35059__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var bitmaps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35059__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
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
var map__35068 = ancestry;
var map__35068__$1 = (((((!((map__35068 == null))))?(((((map__35068.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35068.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35068):map__35068);
var node__GT_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35068__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var idx__GT_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35068__$1,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175));
var bitmaps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35068__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
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
