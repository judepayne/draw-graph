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
return cljs.core.cons(path,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__35636_SHARP_){
var G__35638 = preds;
var G__35639 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,p1__35636_SHARP_);
return (loom.alg_generic.paths.cljs$core$IFn$_invoke$arity$2 ? loom.alg_generic.paths.cljs$core$IFn$_invoke$arity$2(G__35638,G__35639) : loom.alg_generic.paths.call(null,G__35638,G__35639));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__35635_SHARP_){
return cljs.core.not_any_QMARK_((function (edge){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(edge,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this_node,p1__35635_SHARP_], null));
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),path));
}),(preds.cljs$core$IFn$_invoke$arity$1 ? preds.cljs$core$IFn$_invoke$arity$1(this_node) : preds.call(null,this_node)))], 0)));
});
/**
 * Given a function and a starting node, returns all possible paths
 *   back to source. Cycles are not accounted for.
 */
loom.alg_generic.trace_paths = (function loom$alg_generic$trace_paths(preds,start){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__35645_SHARP_){
var G__35646 = cljs.core.peek(p1__35645_SHARP_);
return (preds.cljs$core$IFn$_invoke$arity$1 ? preds.cljs$core$IFn$_invoke$arity$1(G__35646) : preds.call(null,G__35646));
}),loom.alg_generic.paths(preds,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null)));
});
/**
 * Converts a map of the form {node predecessor} to a spanning tree of the
 *   form {node [successors]}
 */
loom.alg_generic.preds__GT_span = (function loom$alg_generic$preds__GT_span(preds){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (span,p__35654){
var vec__35655 = p__35654;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35655,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35655,(1),null);
if(cljs.core.truth_(p)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(span,p,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var G__35658 = p;
var G__35659 = cljs.core.PersistentVector.EMPTY;
return (span.cljs$core$IFn$_invoke$arity$2 ? span.cljs$core$IFn$_invoke$arity$2(G__35658,G__35659) : span.call(null,G__35658,G__35659));
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
var args__4795__auto__ = [];
var len__4789__auto___36119 = arguments.length;
var i__4790__auto___36120 = (0);
while(true){
if((i__4790__auto___36120 < len__4789__auto___36119)){
args__4795__auto__.push((arguments[i__4790__auto___36120]));

var G__36121 = (i__4790__auto___36120 + (1));
i__4790__auto___36120 = G__36121;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__35669){
var map__35670 = p__35669;
var map__35670__$1 = (((((!((map__35670 == null))))?(((((map__35670.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35670.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35670):map__35670);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35670__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var step = (function loom$alg_generic$step(stack,seen__$1){
var temp__5735__auto__ = cljs.core.peek(stack);
if(cljs.core.truth_(temp__5735__auto__)){
var node = temp__5735__auto__;
if(cljs.core.contains_QMARK_(seen__$1,node)){
return loom$alg_generic$step(cljs.core.pop(stack),seen__$1);
} else {
var seen__$2 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,node);
var nbrs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(seen__$2,(successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(node) : successors.call(null,node)));
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons(node,loom$alg_generic$step(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(stack),nbrs),seen__$2));
}),null,null));
}
} else {
return null;
}
});
return step(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null),seen);
}));

(loom.alg_generic.pre_traverse.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(loom.alg_generic.pre_traverse.cljs$lang$applyTo = (function (seq35661){
var G__35662 = cljs.core.first(seq35661);
var seq35661__$1 = cljs.core.next(seq35661);
var G__35663 = cljs.core.first(seq35661__$1);
var seq35661__$2 = cljs.core.next(seq35661__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35662,G__35663,seq35661__$2);
}));

/**
 * Traverses a graph depth-first preorder from start, successors being
 *   a function that returns direct successors for the node. Returns a
 *   lazy seq of edges, each edge being a vector [source-node dest-node].
 *   Note that for undirected graphs each edge will be returned twice,
 *   once for each direction.
 */
loom.alg_generic.pre_edge_traverse = (function loom$alg_generic$pre_edge_traverse(var_args){
var args__4795__auto__ = [];
var len__4789__auto___36126 = arguments.length;
var i__4790__auto___36127 = (0);
while(true){
if((i__4790__auto___36127 < len__4789__auto___36126)){
args__4795__auto__.push((arguments[i__4790__auto___36127]));

var G__36128 = (i__4790__auto___36127 + (1));
i__4790__auto___36127 = G__36128;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__35695){
var map__35696 = p__35695;
var map__35696__$1 = (((((!((map__35696 == null))))?(((((map__35696.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35696.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35696):map__35696);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35696__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var step = (function loom$alg_generic$step(successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1){
while(true){
var temp__5733__auto__ = cljs.core.first(nbrs);
if(cljs.core.truth_(temp__5733__auto__)){
var nbr = temp__5733__auto__;
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null),(new cljs.core.LazySeq(null,((function (successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1,nbr,temp__5733__auto__,map__35696,map__35696__$1,seen){
return (function (){
var seen__$2 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,start__$1);
if(cljs.core.truth_((seen__$2.cljs$core$IFn$_invoke$arity$1 ? seen__$2.cljs$core$IFn$_invoke$arity$1(nbr) : seen__$2.call(null,nbr)))){
return loom$alg_generic$step(successors__$1,start__$1,cljs.core.next(nbrs),stack,nbrstack,seen__$2);
} else {
return loom$alg_generic$step(successors__$1,nbr,(successors__$1.cljs$core$IFn$_invoke$arity$1 ? successors__$1.cljs$core$IFn$_invoke$arity$1(nbr) : successors__$1.call(null,nbr)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,start__$1),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nbrstack,cljs.core.next(nbrs)),seen__$2);
}
});})(successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1,nbr,temp__5733__auto__,map__35696,map__35696__$1,seen))
,null,null)));
} else {
var temp__5735__auto__ = cljs.core.peek(stack);
if(cljs.core.truth_(temp__5735__auto__)){
var parent = temp__5735__auto__;
var G__36135 = successors__$1;
var G__36136 = parent;
var G__36137 = cljs.core.peek(nbrstack);
var G__36138 = cljs.core.pop(stack);
var G__36139 = cljs.core.pop(nbrstack);
var G__36140 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,start__$1);
successors__$1 = G__36135;
start__$1 = G__36136;
nbrs = G__36137;
stack = G__36138;
nbrstack = G__36139;
seen__$1 = G__36140;
continue;
} else {
return null;
}
}
break;
}
});
if(cljs.core.truth_((seen.cljs$core$IFn$_invoke$arity$1 ? seen.cljs$core$IFn$_invoke$arity$1(start) : seen.call(null,start)))){
return null;
} else {
return step(successors,start,(successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(start) : successors.call(null,start)),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,start));
}
}));

(loom.alg_generic.pre_edge_traverse.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(loom.alg_generic.pre_edge_traverse.cljs$lang$applyTo = (function (seq35686){
var G__35687 = cljs.core.first(seq35686);
var seq35686__$1 = cljs.core.next(seq35686);
var G__35688 = cljs.core.first(seq35686__$1);
var seq35686__$2 = cljs.core.next(seq35686__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35687,G__35688,seq35686__$2);
}));

/**
 * Returns a depth-first spanning tree of the form {node [successors]}
 */
loom.alg_generic.pre_span = (function loom$alg_generic$pre_span(var_args){
var args__4795__auto__ = [];
var len__4789__auto___36142 = arguments.length;
var i__4790__auto___36143 = (0);
while(true){
if((i__4790__auto___36143 < len__4789__auto___36142)){
args__4795__auto__.push((arguments[i__4790__auto___36143]));

var G__36144 = (i__4790__auto___36143 + (1));
i__4790__auto___36143 = G__36144;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__35712){
var map__35713 = p__35712;
var map__35713__$1 = (((((!((map__35713 == null))))?(((((map__35713.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35713.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35713):map__35713);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35713__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35713__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var temp__5733__auto__ = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(seen__$2,(successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(v) : successors.call(null,v))));
if(cljs.core.truth_(temp__5733__auto__)){
var u = temp__5733__auto__;
var G__36159 = seen__$2;
var G__36160 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(preds,u,v);
var G__36161 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,u);
seen__$1 = G__36159;
preds = G__36160;
stack = G__36161;
continue;
} else {
var G__36162 = seen__$2;
var G__36163 = preds;
var G__36164 = cljs.core.pop(stack);
seen__$1 = G__36162;
preds = G__36163;
stack = G__36164;
continue;
}
}
break;
}
}));

(loom.alg_generic.pre_span.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(loom.alg_generic.pre_span.cljs$lang$applyTo = (function (seq35705){
var G__35706 = cljs.core.first(seq35705);
var seq35705__$1 = cljs.core.next(seq35705);
var G__35707 = cljs.core.first(seq35705__$1);
var seq35705__$2 = cljs.core.next(seq35705__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35706,G__35707,seq35705__$2);
}));

/**
 * Traverses a graph depth-first postorder from start, successors
 *   being a function that returns adjacent nodes. Returns a vector
 */
loom.alg_generic.post_traverse = (function loom$alg_generic$post_traverse(var_args){
var args__4795__auto__ = [];
var len__4789__auto___36170 = arguments.length;
var i__4790__auto___36171 = (0);
while(true){
if((i__4790__auto___36171 < len__4789__auto___36170)){
args__4795__auto__.push((arguments[i__4790__auto___36171]));

var G__36174 = (i__4790__auto___36171 + (1));
i__4790__auto___36171 = G__36174;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__35730){
var map__35731 = p__35730;
var map__35731__$1 = (((((!((map__35731 == null))))?(((((map__35731.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35731.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35731):map__35731);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35731__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35731__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__36190 = seen__$2;
var G__36191 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,v);
var G__36192 = cljs.core.pop(stack);
seen__$1 = G__36190;
result = G__36191;
stack = G__36192;
continue;
} else {
var G__36194 = seen__$2;
var G__36195 = result;
var G__36196 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,cljs.core.first(nbrs));
seen__$1 = G__36194;
result = G__36195;
stack = G__36196;
continue;
}
}
break;
}
}));

(loom.alg_generic.post_traverse.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(loom.alg_generic.post_traverse.cljs$lang$applyTo = (function (seq35724){
var G__35725 = cljs.core.first(seq35724);
var seq35724__$1 = cljs.core.next(seq35724);
var G__35726 = cljs.core.first(seq35724__$1);
var seq35724__$2 = cljs.core.next(seq35724__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35725,G__35726,seq35724__$2);
}));

/**
 * Traverses a graph depth-first postorder from start, successors being
 *   a function that returns direct successors for the node. Returns a
 *   seq of edges, each edge being a vector [source-node dest-node].
 *   Note that for undirected graphs each edge will be returned twice,
 *   once for each direction.
 */
loom.alg_generic.post_edge_traverse = (function loom$alg_generic$post_edge_traverse(var_args){
var args__4795__auto__ = [];
var len__4789__auto___36201 = arguments.length;
var i__4790__auto___36202 = (0);
while(true){
if((i__4790__auto___36202 < len__4789__auto___36201)){
args__4795__auto__.push((arguments[i__4790__auto___36202]));

var G__36203 = (i__4790__auto___36202 + (1));
i__4790__auto___36202 = G__36203;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__35740){
var map__35741 = p__35740;
var map__35741__$1 = (((((!((map__35741 == null))))?(((((map__35741.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35741.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35741):map__35741);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35741__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35741__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var temp__5733__auto__ = cljs.core.first(nbrs);
if(cljs.core.truth_(temp__5733__auto__)){
var nbr = temp__5733__auto__;
if(cljs.core.truth_((seen__$2.cljs$core$IFn$_invoke$arity$1 ? seen__$2.cljs$core$IFn$_invoke$arity$1(nbr) : seen__$2.call(null,nbr)))){
var G__36204 = start__$1;
var G__36205 = cljs.core.next(nbrs);
var G__36206 = stack;
var G__36207 = nbrstack;
var G__36208 = seen__$2;
var G__36209 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(edges,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null));
start__$1 = G__36204;
nbrs = G__36205;
stack = G__36206;
nbrstack = G__36207;
seen__$1 = G__36208;
edges = G__36209;
continue;
} else {
var G__36210 = nbr;
var G__36211 = (successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(nbr) : successors.call(null,nbr));
var G__36212 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,start__$1);
var G__36213 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nbrstack,cljs.core.next(nbrs));
var G__36214 = seen__$2;
var G__36215 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(edges,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null));
start__$1 = G__36210;
nbrs = G__36211;
stack = G__36212;
nbrstack = G__36213;
seen__$1 = G__36214;
edges = G__36215;
continue;
}
} else {
var temp__5733__auto____$1 = cljs.core.peek(stack);
if(cljs.core.truth_(temp__5733__auto____$1)){
var parent = temp__5733__auto____$1;
var G__36216 = parent;
var G__36217 = cljs.core.peek(nbrstack);
var G__36218 = cljs.core.pop(stack);
var G__36219 = cljs.core.pop(nbrstack);
var G__36220 = seen__$2;
var G__36221 = edges;
start__$1 = G__36216;
nbrs = G__36217;
stack = G__36218;
nbrstack = G__36219;
seen__$1 = G__36220;
edges = G__36221;
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
}));

(loom.alg_generic.post_edge_traverse.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(loom.alg_generic.post_edge_traverse.cljs$lang$applyTo = (function (seq35737){
var G__35738 = cljs.core.first(seq35737);
var seq35737__$1 = cljs.core.next(seq35737);
var G__35739 = cljs.core.first(seq35737__$1);
var seq35737__$2 = cljs.core.next(seq35737__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35738,G__35739,seq35737__$2);
}));

/**
 * Topological sort of a component of a (presumably) directed graph.
 *   Returns nil if the graph contains any cycles. See loom.alg/topsort
 *   for a complete topological sort
 */
loom.alg_generic.topsort_component = (function loom$alg_generic$topsort_component(var_args){
var G__35750 = arguments.length;
switch (G__35750) {
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

(loom.alg_generic.topsort_component.cljs$core$IFn$_invoke$arity$2 = (function (successors,start){
return loom.alg_generic.topsort_component.cljs$core$IFn$_invoke$arity$4(successors,start,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentHashSet.EMPTY);
}));

(loom.alg_generic.topsort_component.cljs$core$IFn$_invoke$arity$4 = (function (successors,start,seen,explored){
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
var G__36223 = seen__$2;
var G__36224 = explored__$1;
var G__36225 = result;
var G__36226 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,cljs.core.first(us));
seen__$1 = G__36223;
explored__$1 = G__36224;
result = G__36225;
stack = G__36226;
continue;
}
} else {
var G__36227 = seen__$2;
var G__36228 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(explored__$1,v);
var G__36229 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,v);
var G__36230 = cljs.core.pop(stack);
seen__$1 = G__36227;
explored__$1 = G__36228;
result = G__36229;
stack = G__36230;
continue;
}
}
break;
}
}));

(loom.alg_generic.topsort_component.cljs$lang$maxFixedArity = 4);

/**
 * Traverses a graph breadth-first from start, successors being a
 *   function that returns adjacent nodes. When :f is provided, returns a
 *   lazy seq of (f node predecessor-map depth) for each node traversed.
 *   Otherwise, returns a lazy seq of the nodes. When :when is provided,
 *   filters successors with (f neighbor predecessor depth).
 */
loom.alg_generic.bf_traverse = (function loom$alg_generic$bf_traverse(var_args){
var args__4795__auto__ = [];
var len__4789__auto___36231 = arguments.length;
var i__4790__auto___36232 = (0);
while(true){
if((i__4790__auto___36232 < len__4789__auto___36231)){
args__4795__auto__.push((arguments[i__4790__auto___36232]));

var G__36233 = (i__4790__auto___36232 + (1));
i__4790__auto___36232 = G__36233;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__35781){
var map__35782 = p__35781;
var map__35782__$1 = (((((!((map__35782 == null))))?(((((map__35782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35782.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35782):map__35782);
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35782__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var when = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35782__$1,new cljs.core.Keyword(null,"when","when",-576417306));
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35782__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
var f__$1 = (function (){var or__4185__auto__ = f;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (function (n,p,d){
return n;
});
}
})();
var nbr_pred = (function (){var or__4185__auto__ = when;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.constantly(true);
}
})();
var step = (function loom$alg_generic$step(queue,preds){
var temp__5735__auto__ = cljs.core.peek(queue);
if(cljs.core.truth_(temp__5735__auto__)){
var vec__35817 = temp__5735__auto__;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35817,(0),null);
var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35817,(1),null);
return cljs.core.cons((f__$1.cljs$core$IFn$_invoke$arity$3 ? f__$1.cljs$core$IFn$_invoke$arity$3(node,preds,depth) : f__$1.call(null,node,preds,depth)),(new cljs.core.LazySeq(null,(function (){
var nbrs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__35769_SHARP_){
var G__35823 = p1__35769_SHARP_;
var G__35824 = node;
var G__35825 = (depth + (1));
return (nbr_pred.cljs$core$IFn$_invoke$arity$3 ? nbr_pred.cljs$core$IFn$_invoke$arity$3(G__35823,G__35824,G__35825) : nbr_pred.call(null,G__35823,G__35824,G__35825));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__35767_SHARP_){
return cljs.core.contains_QMARK_(preds,p1__35767_SHARP_);
}),(successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(node) : successors.call(null,node))));
return loom$alg_generic$step(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(queue),(function (){var iter__4582__auto__ = (function loom$alg_generic$step_$_iter__35828(s__35829){
return (new cljs.core.LazySeq(null,(function (){
var s__35829__$1 = s__35829;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__35829__$1);
if(temp__5735__auto____$1){
var s__35829__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35829__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__35829__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__35832 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__35831 = (0);
while(true){
if((i__35831 < size__4581__auto__)){
var nbr = cljs.core._nth(c__4580__auto__,i__35831);
cljs.core.chunk_append(b__35832,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,(depth + (1))], null));

var G__36234 = (i__35831 + (1));
i__35831 = G__36234;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35832),loom$alg_generic$step_$_iter__35828(cljs.core.chunk_rest(s__35829__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35832),null);
}
} else {
var nbr = cljs.core.first(s__35829__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,(depth + (1))], null),loom$alg_generic$step_$_iter__35828(cljs.core.rest(s__35829__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(nbrs);
})()),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__35771_SHARP_,p2__35772_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__35771_SHARP_,p2__35772_SHARP_,node);
}),preds,nbrs));
}),null,null)));
} else {
return null;
}
});
return step(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentQueue.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,(0)], null)),((cljs.core.map_QMARK_(seen))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(seen,start,null):cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.createAsIfByAssoc([start,null]),(function (){var iter__4582__auto__ = (function loom$alg_generic$iter__35840(s__35841){
return (new cljs.core.LazySeq(null,(function (){
var s__35841__$1 = s__35841;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__35841__$1);
if(temp__5735__auto__){
var s__35841__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35841__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__35841__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__35843 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__35842 = (0);
while(true){
if((i__35842 < size__4581__auto__)){
var s = cljs.core._nth(c__4580__auto__,i__35842);
cljs.core.chunk_append(b__35843,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,null], null));

var G__36235 = (i__35842 + (1));
i__35842 = G__36235;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35843),loom$alg_generic$iter__35840(cljs.core.chunk_rest(s__35841__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35843),null);
}
} else {
var s = cljs.core.first(s__35841__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,null], null),loom$alg_generic$iter__35840(cljs.core.rest(s__35841__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(seen);
})())));
}));

(loom.alg_generic.bf_traverse.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(loom.alg_generic.bf_traverse.cljs$lang$applyTo = (function (seq35774){
var G__35776 = cljs.core.first(seq35774);
var seq35774__$1 = cljs.core.next(seq35774);
var G__35777 = cljs.core.first(seq35774__$1);
var seq35774__$2 = cljs.core.next(seq35774__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35776,G__35777,seq35774__$2);
}));

/**
 * Return a breadth-first spanning tree of the form {node
 *   [successors]}
 */
loom.alg_generic.bf_span = (function loom$alg_generic$bf_span(var_args){
var args__4795__auto__ = [];
var len__4789__auto___36236 = arguments.length;
var i__4790__auto___36237 = (0);
while(true){
if((i__4790__auto___36237 < len__4789__auto___36236)){
args__4795__auto__.push((arguments[i__4790__auto___36237]));

var G__36238 = (i__4790__auto___36237 + (1));
i__4790__auto___36237 = G__36238;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__35866){
var map__35868 = p__35866;
var map__35868__$1 = (((((!((map__35868 == null))))?(((((map__35868.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35868.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35868):map__35868);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35868__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
return loom.alg_generic.preds__GT_span(cljs.core.last(loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic(successors,start,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"f","f",-1597136552),(function (_,pm,___$1){
return pm;
}),new cljs.core.Keyword(null,"seen","seen",-518999789),seen], 0))));
}));

(loom.alg_generic.bf_span.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(loom.alg_generic.bf_span.cljs$lang$applyTo = (function (seq35861){
var G__35862 = cljs.core.first(seq35861);
var seq35861__$1 = cljs.core.next(seq35861);
var G__35863 = cljs.core.first(seq35861__$1);
var seq35861__$2 = cljs.core.next(seq35861__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35862,G__35863,seq35861__$2);
}));

/**
 * Returns a path from start to end with the fewest hops (i.e. irrespective
 *   of edge weights), successors being a function that returns adjacent nodes
 */
loom.alg_generic.bf_path = (function loom$alg_generic$bf_path(var_args){
var args__4795__auto__ = [];
var len__4789__auto___36239 = arguments.length;
var i__4790__auto___36240 = (0);
while(true){
if((i__4790__auto___36240 < len__4789__auto___36239)){
args__4795__auto__.push((arguments[i__4790__auto___36240]));

var G__36241 = (i__4790__auto___36240 + (1));
i__4790__auto___36240 = G__36241;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,end,p__35879){
var map__35880 = p__35879;
var map__35880__$1 = (((((!((map__35880 == null))))?(((((map__35880.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35880.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35880):map__35880);
var opts = map__35880__$1;
var opts__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.vector], null)], 0));
var temp__5735__auto__ = cljs.core.some((function (p__35885){
var vec__35888 = p__35885;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35888,(0),null);
var pm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35888,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35888,(2),null);
if(cljs.core.truth_((pm.cljs$core$IFn$_invoke$arity$1 ? pm.cljs$core$IFn$_invoke$arity$1(end) : pm.call(null,end)))){
return pm;
} else {
return null;
}
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$4(loom.alg_generic.bf_traverse,successors,start,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,opts__$1)));
if(cljs.core.truth_(temp__5735__auto__)){
var preds = temp__5735__auto__;
return cljs.core.reverse(loom.alg_generic.trace_path(preds,end));
} else {
return null;
}
}));

(loom.alg_generic.bf_path.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(loom.alg_generic.bf_path.cljs$lang$applyTo = (function (seq35873){
var G__35874 = cljs.core.first(seq35873);
var seq35873__$1 = cljs.core.next(seq35873);
var G__35875 = cljs.core.first(seq35873__$1);
var seq35873__$2 = cljs.core.next(seq35873__$1);
var G__35876 = cljs.core.first(seq35873__$2);
var seq35873__$3 = cljs.core.next(seq35873__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35874,G__35875,G__35876,seq35873__$3);
}));

/**
 * Returns a lazy-seq of the keys that exist in both m1 and m2
 */
loom.alg_generic.shared_keys = (function loom$alg_generic$shared_keys(m1,m2){
while(true){
if((cljs.core.count(m2) < cljs.core.count(m1))){
var G__36242 = m2;
var G__36243 = m1;
m1 = G__36242;
m2 = G__36243;
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
var iter__4582__auto__ = (function loom$alg_generic$reverse_edges_$_iter__35898(s__35899){
return (new cljs.core.LazySeq(null,(function (){
var s__35899__$1 = s__35899;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__35899__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var node = cljs.core.first(xs__6292__auto__);
var iterys__4578__auto__ = ((function (s__35899__$1,node,xs__6292__auto__,temp__5735__auto__){
return (function loom$alg_generic$reverse_edges_$_iter__35898_$_iter__35900(s__35901){
return (new cljs.core.LazySeq(null,((function (s__35899__$1,node,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__35901__$1 = s__35901;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__35901__$1);
if(temp__5735__auto____$1){
var s__35901__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35901__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__35901__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__35903 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__35902 = (0);
while(true){
if((i__35902 < size__4581__auto__)){
var nbr = cljs.core._nth(c__4580__auto__,i__35902);
if((!(cljs.core.contains_QMARK_(coll,nbr)))){
cljs.core.chunk_append(b__35903,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,node], null));

var G__36244 = (i__35902 + (1));
i__35902 = G__36244;
continue;
} else {
var G__36245 = (i__35902 + (1));
i__35902 = G__36245;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35903),loom$alg_generic$reverse_edges_$_iter__35898_$_iter__35900(cljs.core.chunk_rest(s__35901__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35903),null);
}
} else {
var nbr = cljs.core.first(s__35901__$2);
if((!(cljs.core.contains_QMARK_(coll,nbr)))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,node], null),loom$alg_generic$reverse_edges_$_iter__35898_$_iter__35900(cljs.core.rest(s__35901__$2)));
} else {
var G__36246 = cljs.core.rest(s__35901__$2);
s__35901__$1 = G__36246;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__35899__$1,node,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__35899__$1,node,xs__6292__auto__,temp__5735__auto__))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__((successor_fn.cljs$core$IFn$_invoke$arity$1 ? successor_fn.cljs$core$IFn$_invoke$arity$1(node) : successor_fn.call(null,node))));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,loom$alg_generic$reverse_edges_$_iter__35898(cljs.core.rest(s__35899__$1)));
} else {
var G__36249 = cljs.core.rest(s__35899__$1);
s__35899__$1 = G__36249;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(nodes);
});
loom.alg_generic.conj_paths = (function loom$alg_generic$conj_paths(from_map,to_map,matches){
var iter__4582__auto__ = (function loom$alg_generic$conj_paths_$_iter__35911(s__35912){
return (new cljs.core.LazySeq(null,(function (){
var s__35912__$1 = s__35912;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__35912__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var n = cljs.core.first(xs__6292__auto__);
var iterys__4578__auto__ = ((function (s__35912__$1,n,xs__6292__auto__,temp__5735__auto__){
return (function loom$alg_generic$conj_paths_$_iter__35911_$_iter__35913(s__35914){
return (new cljs.core.LazySeq(null,((function (s__35912__$1,n,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__35914__$1 = s__35914;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__35914__$1);
if(temp__5735__auto____$1){
var xs__6292__auto____$1 = temp__5735__auto____$1;
var from = cljs.core.first(xs__6292__auto____$1);
var iterys__4578__auto__ = ((function (s__35914__$1,s__35912__$1,from,xs__6292__auto____$1,temp__5735__auto____$1,n,xs__6292__auto__,temp__5735__auto__){
return (function loom$alg_generic$conj_paths_$_iter__35911_$_iter__35913_$_iter__35915(s__35916){
return (new cljs.core.LazySeq(null,((function (s__35914__$1,s__35912__$1,from,xs__6292__auto____$1,temp__5735__auto____$1,n,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__35916__$1 = s__35916;
while(true){
var temp__5735__auto____$2 = cljs.core.seq(s__35916__$1);
if(temp__5735__auto____$2){
var s__35916__$2 = temp__5735__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__35916__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__35916__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__35918 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__35917 = (0);
while(true){
if((i__35917 < size__4581__auto__)){
var to = cljs.core._nth(c__4580__auto__,i__35917);
cljs.core.chunk_append(b__35918,cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(from,to)));

var G__36256 = (i__35917 + (1));
i__35917 = G__36256;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35918),loom$alg_generic$conj_paths_$_iter__35911_$_iter__35913_$_iter__35915(cljs.core.chunk_rest(s__35916__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35918),null);
}
} else {
var to = cljs.core.first(s__35916__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(from,to)),loom$alg_generic$conj_paths_$_iter__35911_$_iter__35913_$_iter__35915(cljs.core.rest(s__35916__$2)));
}
} else {
return null;
}
break;
}
});})(s__35914__$1,s__35912__$1,from,xs__6292__auto____$1,temp__5735__auto____$1,n,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__35914__$1,s__35912__$1,from,xs__6292__auto____$1,temp__5735__auto____$1,n,xs__6292__auto__,temp__5735__auto__))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,loom.alg_generic.trace_paths(to_map,n))));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,loom$alg_generic$conj_paths_$_iter__35911_$_iter__35913(cljs.core.rest(s__35914__$1)));
} else {
var G__36257 = cljs.core.rest(s__35914__$1);
s__35914__$1 = G__36257;
continue;
}
} else {
return null;
}
break;
}
});})(s__35912__$1,n,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__35912__$1,n,xs__6292__auto__,temp__5735__auto__))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.reverse,loom.alg_generic.trace_paths(from_map,n))));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,loom$alg_generic$conj_paths_$_iter__35911(cljs.core.rest(s__35912__$1)));
} else {
var G__36258 = cljs.core.rest(s__35912__$1);
s__35912__$1 = G__36258;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(matches);
});
/**
 * Using a bidirectional breadth-first search, returns all shortest
 *   paths from start to end; predecessors is called on end and each
 *   preceding node, successors is called on start, etc.
 */
loom.alg_generic.bf_paths_bi = (function loom$alg_generic$bf_paths_bi(successors,predecessors,start,end){
var find_succs = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(loom.alg_generic.reverse_edges,successors);
var find_preds = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(loom.alg_generic.reverse_edges,predecessors);
var overlaps = (function (coll,q){
return cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__35925_SHARP_){
return cljs.core.contains_QMARK_(coll,p1__35925_SHARP_);
}),q));
});
var map_set_pairs = (function (map,pairs){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (map__$1,p__35933){
var vec__35934 = p__35933;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35934,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35934,(1),null);
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(map__$1,key,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__$1,key,cljs.core.PersistentHashSet.EMPTY),val));
}),cljs.core.transient$(map),pairs));
});
var outgoing = cljs.core.PersistentArrayMap.createAsIfByAssoc([start,null]);
var incoming = cljs.core.PersistentArrayMap.createAsIfByAssoc([end,null]);
var q1 = (new cljs.core.List(null,start,null,(1),null));
var q2 = (new cljs.core.List(null,end,null,(1),null));
while(true){
if(((cljs.core.seq(q1)) && (cljs.core.seq(q2)))){
if((cljs.core.count(q1) <= cljs.core.count(q2))){
var pairs = find_succs(q1,outgoing);
var outgoing__$1 = map_set_pairs(outgoing,pairs);
var q1__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pairs);
var temp__5733__auto__ = overlaps(incoming,q1__$1);
if(temp__5733__auto__){
var all = temp__5733__auto__;
return loom.alg_generic.conj_paths(outgoing__$1,incoming,cljs.core.set(all));
} else {
var G__36265 = outgoing__$1;
var G__36266 = incoming;
var G__36267 = q1__$1;
var G__36268 = q2;
outgoing = G__36265;
incoming = G__36266;
q1 = G__36267;
q2 = G__36268;
continue;
}
} else {
var pairs = find_preds(q2,incoming);
var incoming__$1 = map_set_pairs(incoming,pairs);
var q2__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pairs);
var temp__5733__auto__ = overlaps(outgoing,q2__$1);
if(temp__5733__auto__){
var all = temp__5733__auto__;
return loom.alg_generic.conj_paths(outgoing,incoming__$1,cljs.core.set(all));
} else {
var G__36269 = outgoing;
var G__36270 = incoming__$1;
var G__36271 = q1;
var G__36272 = q2__$1;
outgoing = G__36269;
incoming = G__36270;
q1 = G__36271;
q2 = G__36272;
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
var G__35946 = arguments.length;
switch (G__35946) {
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

(loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$3 = (function (successors,dist,start){
return loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$4(successors,dist,start,cljs.core.vector);
}));

(loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$4 = (function (successors,dist,start,f){
var step = (function loom$alg_generic$step(p__35968){
var vec__35969 = p__35968;
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35969,(0),null);
var pq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35969,(1),null);
var temp__5735__auto__ = cljs.core.first(pq);
if(cljs.core.truth_(temp__5735__auto__)){
var vec__35973 = temp__5735__auto__;
var dist_su = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35973,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35973,(1),null);
var u = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35973,(2),null);
var fpq = vec__35973;
return cljs.core.cons((f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(u,state) : f.call(null,u,state)),(new cljs.core.LazySeq(null,(function (){
return loom$alg_generic$step(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__35976,v){
var vec__35977 = p__35976;
var state__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35977,(0),null);
var pq__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35977,(1),null);
var dist_suv = (dist_su + (dist.cljs$core$IFn$_invoke$arity$2 ? dist.cljs$core$IFn$_invoke$arity$2(u,v) : dist.call(null,u,v)));
var dist_sv = cljs.core.first((state__$1.cljs$core$IFn$_invoke$arity$1 ? state__$1.cljs$core$IFn$_invoke$arity$1(v) : state__$1.call(null,v)));
if(cljs.core.truth_((function (){var and__4174__auto__ = dist_sv;
if(cljs.core.truth_(and__4174__auto__)){
return (dist_suv >= dist_sv);
} else {
return and__4174__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__$1,pq__$1], null);
} else {
var pq__$2 = (cljs.core.truth_(dist_sv)?cljs.core.disj.cljs$core$IFn$_invoke$arity$2(pq__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dist_sv,cljs.core.hash(v),v], null)):pq__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,v,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dist_suv,u], null)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(pq__$2,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dist_suv,cljs.core.hash(v),v], null))], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(pq,fpq)], null),(successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(u) : successors.call(null,u))));
}),null,null)));
} else {
return null;
}
});
return step(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([start,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),null], null)]),cljs.core.sorted_set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.hash(start),start], null)], 0))], null));
}));

(loom.alg_generic.dijkstra_traverse.cljs$lang$maxFixedArity = 4);

/**
 * Finds all shortest distances from start, where successors and dist
 *   are functions called as (successors node) and (dist node1 node2).
 *   Returns a map in the format {node {successor distance}}
 */
loom.alg_generic.dijkstra_span = (function loom$alg_generic$dijkstra_span(successors,dist,start){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (span,p__35983){
var vec__35984 = p__35983;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35984,(0),null);
var vec__35987 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35984,(1),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35987,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35987,(1),null);
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
var temp__5733__auto__ = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__35990){
var vec__35991 = p__35990;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35991,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35991,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(end,node);
}),loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$3(successors,dist,start)));
if(cljs.core.truth_(temp__5733__auto__)){
var vec__35994 = temp__5733__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35994,(0),null);
var end_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35994,(1),null);
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
return cljs.core.long$(Math.ceil((bits / loom.alg_generic.bits_per_long)));
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
var size = (function (){var x__4273__auto__ = cljs.core.count(bitmap);
var y__4274__auto__ = loom.alg_generic.bm_longs((idx + (1)));
return ((x__4273__auto__ > y__4274__auto__) ? x__4273__auto__ : y__4274__auto__);
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
var args__4795__auto__ = [];
var len__4789__auto___36315 = arguments.length;
var i__4790__auto___36316 = (0);
while(true){
if((i__4790__auto___36316 < len__4789__auto___36315)){
args__4795__auto__.push((arguments[i__4790__auto___36316]));

var G__36317 = (i__4790__auto___36316 + (1));
i__4790__auto___36316 = G__36317;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return loom.alg_generic.bm_or.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(loom.alg_generic.bm_or.cljs$core$IFn$_invoke$arity$variadic = (function (bitmaps){
if(cljs.core.empty_QMARK_(bitmaps)){
return loom.alg_generic.bm_new();
} else {
var size = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,bitmaps));
var new_bitmap = loom.alg_generic.bm_copy(cljs.core.first(bitmaps),size);
var seq__36014_36320 = cljs.core.seq(cljs.core.rest(bitmaps));
var chunk__36021_36321 = null;
var count__36022_36322 = (0);
var i__36023_36323 = (0);
while(true){
if((i__36023_36323 < count__36022_36322)){
var bitmap_36324 = chunk__36021_36321.cljs$core$IIndexed$_nth$arity$2(null,i__36023_36323);
var seq__36024_36325 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.list,bitmap_36324));
var chunk__36026_36326 = null;
var count__36027_36327 = (0);
var i__36028_36328 = (0);
while(true){
if((i__36028_36328 < count__36027_36327)){
var vec__36072_36331 = chunk__36026_36326.cljs$core$IIndexed$_nth$arity$2(null,i__36028_36328);
var idx_36332 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36072_36331,(0),null);
var value_36333 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36072_36331,(1),null);
var masked_value_36334 = (value_36333 | (new_bitmap[idx_36332]));
(new_bitmap[idx_36332] = masked_value_36334);


var G__36335 = seq__36024_36325;
var G__36336 = chunk__36026_36326;
var G__36337 = count__36027_36327;
var G__36338 = (i__36028_36328 + (1));
seq__36024_36325 = G__36335;
chunk__36026_36326 = G__36336;
count__36027_36327 = G__36337;
i__36028_36328 = G__36338;
continue;
} else {
var temp__5735__auto___36339 = cljs.core.seq(seq__36024_36325);
if(temp__5735__auto___36339){
var seq__36024_36340__$1 = temp__5735__auto___36339;
if(cljs.core.chunked_seq_QMARK_(seq__36024_36340__$1)){
var c__4609__auto___36341 = cljs.core.chunk_first(seq__36024_36340__$1);
var G__36342 = cljs.core.chunk_rest(seq__36024_36340__$1);
var G__36344 = c__4609__auto___36341;
var G__36345 = cljs.core.count(c__4609__auto___36341);
var G__36346 = (0);
seq__36024_36325 = G__36342;
chunk__36026_36326 = G__36344;
count__36027_36327 = G__36345;
i__36028_36328 = G__36346;
continue;
} else {
var vec__36075_36347 = cljs.core.first(seq__36024_36340__$1);
var idx_36348 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36075_36347,(0),null);
var value_36349 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36075_36347,(1),null);
var masked_value_36350 = (value_36349 | (new_bitmap[idx_36348]));
(new_bitmap[idx_36348] = masked_value_36350);


var G__36351 = cljs.core.next(seq__36024_36340__$1);
var G__36352 = null;
var G__36353 = (0);
var G__36354 = (0);
seq__36024_36325 = G__36351;
chunk__36026_36326 = G__36352;
count__36027_36327 = G__36353;
i__36028_36328 = G__36354;
continue;
}
} else {
}
}
break;
}

var G__36357 = seq__36014_36320;
var G__36358 = chunk__36021_36321;
var G__36359 = count__36022_36322;
var G__36360 = (i__36023_36323 + (1));
seq__36014_36320 = G__36357;
chunk__36021_36321 = G__36358;
count__36022_36322 = G__36359;
i__36023_36323 = G__36360;
continue;
} else {
var temp__5735__auto___36361 = cljs.core.seq(seq__36014_36320);
if(temp__5735__auto___36361){
var seq__36014_36363__$1 = temp__5735__auto___36361;
if(cljs.core.chunked_seq_QMARK_(seq__36014_36363__$1)){
var c__4609__auto___36365 = cljs.core.chunk_first(seq__36014_36363__$1);
var G__36366 = cljs.core.chunk_rest(seq__36014_36363__$1);
var G__36367 = c__4609__auto___36365;
var G__36368 = cljs.core.count(c__4609__auto___36365);
var G__36369 = (0);
seq__36014_36320 = G__36366;
chunk__36021_36321 = G__36367;
count__36022_36322 = G__36368;
i__36023_36323 = G__36369;
continue;
} else {
var bitmap_36370 = cljs.core.first(seq__36014_36363__$1);
var seq__36015_36371 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.list,bitmap_36370));
var chunk__36017_36372 = null;
var count__36018_36373 = (0);
var i__36019_36374 = (0);
while(true){
if((i__36019_36374 < count__36018_36373)){
var vec__36084_36375 = chunk__36017_36372.cljs$core$IIndexed$_nth$arity$2(null,i__36019_36374);
var idx_36376 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36084_36375,(0),null);
var value_36377 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36084_36375,(1),null);
var masked_value_36379 = (value_36377 | (new_bitmap[idx_36376]));
(new_bitmap[idx_36376] = masked_value_36379);


var G__36380 = seq__36015_36371;
var G__36381 = chunk__36017_36372;
var G__36382 = count__36018_36373;
var G__36383 = (i__36019_36374 + (1));
seq__36015_36371 = G__36380;
chunk__36017_36372 = G__36381;
count__36018_36373 = G__36382;
i__36019_36374 = G__36383;
continue;
} else {
var temp__5735__auto___36384__$1 = cljs.core.seq(seq__36015_36371);
if(temp__5735__auto___36384__$1){
var seq__36015_36385__$1 = temp__5735__auto___36384__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36015_36385__$1)){
var c__4609__auto___36387 = cljs.core.chunk_first(seq__36015_36385__$1);
var G__36389 = cljs.core.chunk_rest(seq__36015_36385__$1);
var G__36390 = c__4609__auto___36387;
var G__36391 = cljs.core.count(c__4609__auto___36387);
var G__36392 = (0);
seq__36015_36371 = G__36389;
chunk__36017_36372 = G__36390;
count__36018_36373 = G__36391;
i__36019_36374 = G__36392;
continue;
} else {
var vec__36087_36393 = cljs.core.first(seq__36015_36385__$1);
var idx_36394 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36087_36393,(0),null);
var value_36395 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36087_36393,(1),null);
var masked_value_36398 = (value_36395 | (new_bitmap[idx_36394]));
(new_bitmap[idx_36394] = masked_value_36398);


var G__36399 = cljs.core.next(seq__36015_36385__$1);
var G__36400 = null;
var G__36401 = (0);
var G__36402 = (0);
seq__36015_36371 = G__36399;
chunk__36017_36372 = G__36400;
count__36018_36373 = G__36401;
i__36019_36374 = G__36402;
continue;
}
} else {
}
}
break;
}

var G__36403 = cljs.core.next(seq__36014_36363__$1);
var G__36404 = null;
var G__36405 = (0);
var G__36406 = (0);
seq__36014_36320 = G__36403;
chunk__36021_36321 = G__36404;
count__36022_36322 = G__36405;
i__36023_36323 = G__36406;
continue;
}
} else {
}
}
break;
}

return new_bitmap;
}
}));

(loom.alg_generic.bm_or.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(loom.alg_generic.bm_or.cljs$lang$applyTo = (function (seq36011){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq36011));
}));

/**
 * Get the indicies of set bits in 'bitmap.
 */
loom.alg_generic.bm_get_indicies = (function loom$alg_generic$bm_get_indicies(bitmap){
var iter__4582__auto__ = (function loom$alg_generic$bm_get_indicies_$_iter__36090(s__36091){
return (new cljs.core.LazySeq(null,(function (){
var s__36091__$1 = s__36091;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__36091__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var chunk = cljs.core.first(xs__6292__auto__);
var iterys__4578__auto__ = ((function (s__36091__$1,chunk,xs__6292__auto__,temp__5735__auto__){
return (function loom$alg_generic$bm_get_indicies_$_iter__36090_$_iter__36092(s__36093){
return (new cljs.core.LazySeq(null,((function (s__36091__$1,chunk,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__36093__$1 = s__36093;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__36093__$1);
if(temp__5735__auto____$1){
var s__36093__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__36093__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__36093__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__36095 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__36094 = (0);
while(true){
if((i__36094 < size__4581__auto__)){
var offset = cljs.core._nth(c__4580__auto__,i__36094);
var idx = ((chunk * loom.alg_generic.bits_per_long) + offset);
if(cljs.core.truth_(loom.alg_generic.bm_get(bitmap,idx))){
cljs.core.chunk_append(b__36095,idx);

var G__36412 = (i__36094 + (1));
i__36094 = G__36412;
continue;
} else {
var G__36413 = (i__36094 + (1));
i__36094 = G__36413;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36095),loom$alg_generic$bm_get_indicies_$_iter__36090_$_iter__36092(cljs.core.chunk_rest(s__36093__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36095),null);
}
} else {
var offset = cljs.core.first(s__36093__$2);
var idx = ((chunk * loom.alg_generic.bits_per_long) + offset);
if(cljs.core.truth_(loom.alg_generic.bm_get(bitmap,idx))){
return cljs.core.cons(idx,loom$alg_generic$bm_get_indicies_$_iter__36090_$_iter__36092(cljs.core.rest(s__36093__$2)));
} else {
var G__36414 = cljs.core.rest(s__36093__$2);
s__36093__$1 = G__36414;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__36091__$1,chunk,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__36091__$1,chunk,xs__6292__auto__,temp__5735__auto__))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(loom.alg_generic.bits_per_long)));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,loom$alg_generic$bm_get_indicies_$_iter__36090(cljs.core.rest(s__36091__$1)));
} else {
var G__36415 = cljs.core.rest(s__36091__$1);
s__36091__$1 = G__36415;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(bitmap)));
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
(loom.alg_generic.Ancestry.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(loom.alg_generic.Ancestry.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k36097,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__36101 = k36097;
var G__36101__$1 = (((G__36101 instanceof cljs.core.Keyword))?G__36101.fqn:null);
switch (G__36101__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k36097,else__4442__auto__);

}
}));

(loom.alg_generic.Ancestry.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__36102){
var vec__36103 = p__36102;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36103,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36103,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(loom.alg_generic.Ancestry.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#loom.alg-generic.Ancestry{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"node->idx","node->idx",152705227),self__.node__GT_idx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),self__.idx__GT_node],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),self__.bitmaps],null))], null),self__.__extmap));
}));

(loom.alg_generic.Ancestry.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36096){
var self__ = this;
var G__36096__$1 = this;
return (new cljs.core.RecordIter((0),G__36096__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node->idx","node->idx",152705227),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(loom.alg_generic.Ancestry.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(loom.alg_generic.Ancestry.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,self__.__meta,self__.__extmap,self__.__hash));
}));

(loom.alg_generic.Ancestry.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(loom.alg_generic.Ancestry.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (coll__4436__auto__){
return (-1116202445 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
})(this__4435__auto____$1);
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(loom.alg_generic.Ancestry.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36098,other36099){
var self__ = this;
var this36098__$1 = this;
return (((!((other36099 == null)))) && ((this36098__$1.constructor === other36099.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36098__$1.node__GT_idx,other36099.node__GT_idx)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36098__$1.idx__GT_node,other36099.idx__GT_node)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36098__$1.bitmaps,other36099.bitmaps)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36098__$1.__extmap,other36099.__extmap)));
}));

(loom.alg_generic.Ancestry.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),null,new cljs.core.Keyword(null,"node->idx","node->idx",152705227),null,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(loom.alg_generic.Ancestry.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__36096){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__36106 = cljs.core.keyword_identical_QMARK_;
var expr__36107 = k__4447__auto__;
if(cljs.core.truth_((pred__36106.cljs$core$IFn$_invoke$arity$2 ? pred__36106.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"node->idx","node->idx",152705227),expr__36107) : pred__36106.call(null,new cljs.core.Keyword(null,"node->idx","node->idx",152705227),expr__36107)))){
return (new loom.alg_generic.Ancestry(G__36096,self__.idx__GT_node,self__.bitmaps,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__36106.cljs$core$IFn$_invoke$arity$2 ? pred__36106.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),expr__36107) : pred__36106.call(null,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),expr__36107)))){
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,G__36096,self__.bitmaps,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__36106.cljs$core$IFn$_invoke$arity$2 ? pred__36106.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),expr__36107) : pred__36106.call(null,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),expr__36107)))){
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,G__36096,self__.__meta,self__.__extmap,null));
} else {
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__36096),null));
}
}
}
}));

(loom.alg_generic.Ancestry.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"node->idx","node->idx",152705227),self__.node__GT_idx,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),self__.idx__GT_node,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),self__.bitmaps,null))], null),self__.__extmap));
}));

(loom.alg_generic.Ancestry.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__36096){
var self__ = this;
var this__4438__auto____$1 = this;
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,G__36096,self__.__extmap,self__.__hash));
}));

(loom.alg_generic.Ancestry.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4445__auto__,(0)),cljs.core._nth(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(loom.alg_generic.Ancestry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"node->idx","node->idx",1793236754,null),new cljs.core.Symbol(null,"idx->node","idx->node",-842528594,null),new cljs.core.Symbol(null,"bitmaps","bitmaps",-1506736927,null)], null);
}));

(loom.alg_generic.Ancestry.cljs$lang$type = true);

(loom.alg_generic.Ancestry.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"loom.alg-generic/Ancestry",null,(1),null));
}));

(loom.alg_generic.Ancestry.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"loom.alg-generic/Ancestry");
}));

/**
 * Positional factory function for loom.alg-generic/Ancestry.
 */
loom.alg_generic.__GT_Ancestry = (function loom$alg_generic$__GT_Ancestry(node__GT_idx,idx__GT_node,bitmaps){
return (new loom.alg_generic.Ancestry(node__GT_idx,idx__GT_node,bitmaps,null,null,null));
});

/**
 * Factory function for loom.alg-generic/Ancestry, taking a map of keywords to field values.
 */
loom.alg_generic.map__GT_Ancestry = (function loom$alg_generic$map__GT_Ancestry(G__36100){
var extmap__4478__auto__ = (function (){var G__36109 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__36100,new cljs.core.Keyword(null,"node->idx","node->idx",152705227),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842)], 0));
if(cljs.core.record_QMARK_(G__36100)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__36109);
} else {
return G__36109;
}
})();
return (new loom.alg_generic.Ancestry(new cljs.core.Keyword(null,"node->idx","node->idx",152705227).cljs$core$IFn$_invoke$arity$1(G__36100),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175).cljs$core$IFn$_invoke$arity$1(G__36100),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842).cljs$core$IFn$_invoke$arity$1(G__36100),null,cljs.core.not_empty(extmap__4478__auto__),null));
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
var args__4795__auto__ = [];
var len__4789__auto___36435 = arguments.length;
var i__4790__auto___36436 = (0);
while(true){
if((i__4790__auto___36436 < len__4789__auto___36435)){
args__4795__auto__.push((arguments[i__4790__auto___36436]));

var G__36438 = (i__4790__auto___36436 + (1));
i__4790__auto___36436 = G__36438;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.ancestry_add.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(loom.alg_generic.ancestry_add.cljs$core$IFn$_invoke$arity$variadic = (function (ancestry,node,parents){
if(loom.alg_generic.ancestry_contains_QMARK_(ancestry,node)){
return ancestry;
} else {
var map__36113 = ancestry;
var map__36113__$1 = (((((!((map__36113 == null))))?(((((map__36113.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36113.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36113):map__36113);
var node__GT_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36113__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var idx__GT_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36113__$1,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175));
var bitmaps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36113__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
var nid = cljs.core.count(node__GT_idx);
var node__GT_idx__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node__GT_idx,node,nid);
var idx__GT_node__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(idx__GT_node,nid,node);
var pidxs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(node__GT_idx__$1,parents);
var new_bitmap = ((cljs.core.empty_QMARK_(pidxs))?loom.alg_generic.bm_new():cljs.core.apply.cljs$core$IFn$_invoke$arity$2(loom.alg_generic.bm_or,cljs.core.map.cljs$core$IFn$_invoke$arity$2(bitmaps,pidxs)));
var new_bitmap__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(loom.alg_generic.bm_set,new_bitmap,pidxs);
var bitmaps__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(bitmaps,new_bitmap__$1);
return loom.alg_generic.__GT_Ancestry(node__GT_idx__$1,idx__GT_node__$1,bitmaps__$1);
}
}));

(loom.alg_generic.ancestry_add.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(loom.alg_generic.ancestry_add.cljs$lang$applyTo = (function (seq36110){
var G__36111 = cljs.core.first(seq36110);
var seq36110__$1 = cljs.core.next(seq36110);
var G__36112 = cljs.core.first(seq36110__$1);
var seq36110__$2 = cljs.core.next(seq36110__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36111,G__36112,seq36110__$2);
}));

/**
 * Finds if the 'parenter node is an ancestor of 'childer node for the given
 *   'ancestry cache.
 */
loom.alg_generic.ancestor_QMARK_ = (function loom$alg_generic$ancestor_QMARK_(ancestry,childer,parenter){
var map__36115 = ancestry;
var map__36115__$1 = (((((!((map__36115 == null))))?(((((map__36115.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36115.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36115):map__36115);
var node__GT_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36115__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var bitmaps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36115__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
var cidx = (node__GT_idx.cljs$core$IFn$_invoke$arity$1 ? node__GT_idx.cljs$core$IFn$_invoke$arity$1(childer) : node__GT_idx.call(null,childer));
var pidx = (node__GT_idx.cljs$core$IFn$_invoke$arity$1 ? node__GT_idx.cljs$core$IFn$_invoke$arity$1(parenter) : node__GT_idx.call(null,parenter));
return cljs.core.boolean$((cljs.core.truth_((function (){var and__4174__auto__ = cidx;
if(cljs.core.truth_(and__4174__auto__)){
return pidx;
} else {
return and__4174__auto__;
}
})())?loom.alg_generic.bm_get(cljs.core.get.cljs$core$IFn$_invoke$arity$2(bitmaps,cidx),pidx):null));
});
/**
 * Returns all of the ancestors of 'child node.
 */
loom.alg_generic.ancestors = (function loom$alg_generic$ancestors(ancestry,child){
var map__36117 = ancestry;
var map__36117__$1 = (((((!((map__36117 == null))))?(((((map__36117.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36117.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36117):map__36117);
var node__GT_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36117__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var idx__GT_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36117__$1,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175));
var bitmaps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36117__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
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
