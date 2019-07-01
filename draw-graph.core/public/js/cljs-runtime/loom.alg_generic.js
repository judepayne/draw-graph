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
var vec__34196 = p__34191;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34196,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34196,(1),null);
if(cljs.core.truth_(p)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(span,p,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var G__34202 = p;
var G__34203 = cljs.core.PersistentVector.EMPTY;
return (span.cljs$core$IFn$_invoke$arity$2 ? span.cljs$core$IFn$_invoke$arity$2(G__34202,G__34203) : span.call(null,G__34202,G__34203));
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
var len__4730__auto___35173 = arguments.length;
var i__4731__auto___35174 = (0);
while(true){
if((i__4731__auto___35174 < len__4730__auto___35173)){
args__4736__auto__.push((arguments[i__4731__auto___35174]));

var G__35177 = (i__4731__auto___35174 + (1));
i__4731__auto___35174 = G__35177;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__34229){
var map__34230 = p__34229;
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
loom.alg_generic.pre_traverse.cljs$lang$applyTo = (function (seq34215){
var G__34216 = cljs.core.first(seq34215);
var seq34215__$1 = cljs.core.next(seq34215);
var G__34217 = cljs.core.first(seq34215__$1);
var seq34215__$2 = cljs.core.next(seq34215__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34216,G__34217,seq34215__$2);
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
var len__4730__auto___35185 = arguments.length;
var i__4731__auto___35186 = (0);
while(true){
if((i__4731__auto___35186 < len__4730__auto___35185)){
args__4736__auto__.push((arguments[i__4731__auto___35186]));

var G__35188 = (i__4731__auto___35186 + (1));
i__4731__auto___35186 = G__35188;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__34305){
var map__34306 = p__34305;
var map__34306__$1 = (((((!((map__34306 == null))))?(((((map__34306.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34306.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34306):map__34306);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34306__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var step = ((function (map__34306,map__34306__$1,seen){
return (function loom$alg_generic$step(successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1){
while(true){
var temp__5718__auto__ = cljs.core.first(nbrs);
if(cljs.core.truth_(temp__5718__auto__)){
var nbr = temp__5718__auto__;
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null),(new cljs.core.LazySeq(null,((function (successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1,nbr,temp__5718__auto__,map__34306,map__34306__$1,seen){
return (function (){
var seen__$2 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,start__$1);
if(cljs.core.truth_((seen__$2.cljs$core$IFn$_invoke$arity$1 ? seen__$2.cljs$core$IFn$_invoke$arity$1(nbr) : seen__$2.call(null,nbr)))){
return loom$alg_generic$step(successors__$1,start__$1,cljs.core.next(nbrs),stack,nbrstack,seen__$2);
} else {
return loom$alg_generic$step(successors__$1,nbr,(successors__$1.cljs$core$IFn$_invoke$arity$1 ? successors__$1.cljs$core$IFn$_invoke$arity$1(nbr) : successors__$1.call(null,nbr)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,start__$1),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nbrstack,cljs.core.next(nbrs)),seen__$2);
}
});})(successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1,nbr,temp__5718__auto__,map__34306,map__34306__$1,seen))
,null,null)));
} else {
var temp__5720__auto__ = cljs.core.peek(stack);
if(cljs.core.truth_(temp__5720__auto__)){
var parent = temp__5720__auto__;
var G__35193 = successors__$1;
var G__35194 = parent;
var G__35195 = cljs.core.peek(nbrstack);
var G__35196 = cljs.core.pop(stack);
var G__35197 = cljs.core.pop(nbrstack);
var G__35198 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,start__$1);
successors__$1 = G__35193;
start__$1 = G__35194;
nbrs = G__35195;
stack = G__35196;
nbrstack = G__35197;
seen__$1 = G__35198;
continue;
} else {
return null;
}
}
break;
}
});})(map__34306,map__34306__$1,seen))
;
if(cljs.core.truth_((seen.cljs$core$IFn$_invoke$arity$1 ? seen.cljs$core$IFn$_invoke$arity$1(start) : seen.call(null,start)))){
return null;
} else {
return step(successors,start,(successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(start) : successors.call(null,start)),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,start));
}
});

loom.alg_generic.pre_edge_traverse.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.pre_edge_traverse.cljs$lang$applyTo = (function (seq34302){
var G__34303 = cljs.core.first(seq34302);
var seq34302__$1 = cljs.core.next(seq34302);
var G__34304 = cljs.core.first(seq34302__$1);
var seq34302__$2 = cljs.core.next(seq34302__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34303,G__34304,seq34302__$2);
});

/**
 * Returns a depth-first spanning tree of the form {node [successors]}
 */
loom.alg_generic.pre_span = (function loom$alg_generic$pre_span(var_args){
var args__4736__auto__ = [];
var len__4730__auto___35201 = arguments.length;
var i__4731__auto___35202 = (0);
while(true){
if((i__4731__auto___35202 < len__4730__auto___35201)){
args__4736__auto__.push((arguments[i__4731__auto___35202]));

var G__35204 = (i__4731__auto___35202 + (1));
i__4731__auto___35202 = G__35204;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__34340){
var map__34341 = p__34340;
var map__34341__$1 = (((((!((map__34341 == null))))?(((((map__34341.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34341.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34341):map__34341);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34341__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34341__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
loom.alg_generic.pre_span.cljs$lang$applyTo = (function (seq34335){
var G__34336 = cljs.core.first(seq34335);
var seq34335__$1 = cljs.core.next(seq34335);
var G__34337 = cljs.core.first(seq34335__$1);
var seq34335__$2 = cljs.core.next(seq34335__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34336,G__34337,seq34335__$2);
});

/**
 * Traverses a graph depth-first postorder from start, successors
 *   being a function that returns adjacent nodes. Returns a vector
 */
loom.alg_generic.post_traverse = (function loom$alg_generic$post_traverse(var_args){
var args__4736__auto__ = [];
var len__4730__auto___35219 = arguments.length;
var i__4731__auto___35220 = (0);
while(true){
if((i__4731__auto___35220 < len__4730__auto___35219)){
args__4736__auto__.push((arguments[i__4731__auto___35220]));

var G__35221 = (i__4731__auto___35220 + (1));
i__4731__auto___35220 = G__35221;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__34377){
var map__34378 = p__34377;
var map__34378__$1 = (((((!((map__34378 == null))))?(((((map__34378.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34378.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34378):map__34378);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34378__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34378__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__35235 = seen__$2;
var G__35236 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,v);
var G__35237 = cljs.core.pop(stack);
seen__$1 = G__35235;
result = G__35236;
stack = G__35237;
continue;
} else {
var G__35238 = seen__$2;
var G__35239 = result;
var G__35240 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,cljs.core.first(nbrs));
seen__$1 = G__35238;
result = G__35239;
stack = G__35240;
continue;
}
}
break;
}
});

loom.alg_generic.post_traverse.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.post_traverse.cljs$lang$applyTo = (function (seq34373){
var G__34374 = cljs.core.first(seq34373);
var seq34373__$1 = cljs.core.next(seq34373);
var G__34375 = cljs.core.first(seq34373__$1);
var seq34373__$2 = cljs.core.next(seq34373__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34374,G__34375,seq34373__$2);
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
var len__4730__auto___35245 = arguments.length;
var i__4731__auto___35246 = (0);
while(true){
if((i__4731__auto___35246 < len__4730__auto___35245)){
args__4736__auto__.push((arguments[i__4731__auto___35246]));

var G__35247 = (i__4731__auto___35246 + (1));
i__4731__auto___35246 = G__35247;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__34396){
var map__34397 = p__34396;
var map__34397__$1 = (((((!((map__34397 == null))))?(((((map__34397.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34397.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34397):map__34397);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34397__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34397__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__35251 = start__$1;
var G__35252 = cljs.core.next(nbrs);
var G__35253 = stack;
var G__35254 = nbrstack;
var G__35255 = seen__$2;
var G__35256 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(edges,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null));
start__$1 = G__35251;
nbrs = G__35252;
stack = G__35253;
nbrstack = G__35254;
seen__$1 = G__35255;
edges = G__35256;
continue;
} else {
var G__35257 = nbr;
var G__35258 = (successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(nbr) : successors.call(null,nbr));
var G__35259 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,start__$1);
var G__35260 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nbrstack,cljs.core.next(nbrs));
var G__35261 = seen__$2;
var G__35262 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(edges,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null));
start__$1 = G__35257;
nbrs = G__35258;
stack = G__35259;
nbrstack = G__35260;
seen__$1 = G__35261;
edges = G__35262;
continue;
}
} else {
var temp__5718__auto____$1 = cljs.core.peek(stack);
if(cljs.core.truth_(temp__5718__auto____$1)){
var parent = temp__5718__auto____$1;
var G__35264 = parent;
var G__35265 = cljs.core.peek(nbrstack);
var G__35266 = cljs.core.pop(stack);
var G__35267 = cljs.core.pop(nbrstack);
var G__35268 = seen__$2;
var G__35269 = edges;
start__$1 = G__35264;
nbrs = G__35265;
stack = G__35266;
nbrstack = G__35267;
seen__$1 = G__35268;
edges = G__35269;
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
loom.alg_generic.post_edge_traverse.cljs$lang$applyTo = (function (seq34390){
var G__34391 = cljs.core.first(seq34390);
var seq34390__$1 = cljs.core.next(seq34390);
var G__34392 = cljs.core.first(seq34390__$1);
var seq34390__$2 = cljs.core.next(seq34390__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34391,G__34392,seq34390__$2);
});

/**
 * Topological sort of a component of a (presumably) directed graph.
 *   Returns nil if the graph contains any cycles. See loom.alg/topsort
 *   for a complete topological sort
 */
loom.alg_generic.topsort_component = (function loom$alg_generic$topsort_component(var_args){
var G__34424 = arguments.length;
switch (G__34424) {
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
var G__35279 = seen__$2;
var G__35280 = explored__$1;
var G__35281 = result;
var G__35282 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,cljs.core.first(us));
seen__$1 = G__35279;
explored__$1 = G__35280;
result = G__35281;
stack = G__35282;
continue;
}
} else {
var G__35283 = seen__$2;
var G__35284 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(explored__$1,v);
var G__35285 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,v);
var G__35286 = cljs.core.pop(stack);
seen__$1 = G__35283;
explored__$1 = G__35284;
result = G__35285;
stack = G__35286;
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
var len__4730__auto___35288 = arguments.length;
var i__4731__auto___35289 = (0);
while(true){
if((i__4731__auto___35289 < len__4730__auto___35288)){
args__4736__auto__.push((arguments[i__4731__auto___35289]));

var G__35290 = (i__4731__auto___35289 + (1));
i__4731__auto___35289 = G__35290;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__34473){
var map__34474 = p__34473;
var map__34474__$1 = (((((!((map__34474 == null))))?(((((map__34474.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34474.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34474):map__34474);
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34474__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var when = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34474__$1,new cljs.core.Keyword(null,"when","when",-576417306));
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34474__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
var f__$1 = (function (){var or__4131__auto__ = f;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return ((function (or__4131__auto__,map__34474,map__34474__$1,f,when,seen){
return (function (n,p,d){
return n;
});
;})(or__4131__auto__,map__34474,map__34474__$1,f,when,seen))
}
})();
var nbr_pred = (function (){var or__4131__auto__ = when;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.constantly(true);
}
})();
var step = ((function (f__$1,nbr_pred,map__34474,map__34474__$1,f,when,seen){
return (function loom$alg_generic$step(queue,preds){
var temp__5720__auto__ = cljs.core.peek(queue);
if(cljs.core.truth_(temp__5720__auto__)){
var vec__34520 = temp__5720__auto__;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34520,(0),null);
var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34520,(1),null);
return cljs.core.cons((f__$1.cljs$core$IFn$_invoke$arity$3 ? f__$1.cljs$core$IFn$_invoke$arity$3(node,preds,depth) : f__$1.call(null,node,preds,depth)),(new cljs.core.LazySeq(null,((function (vec__34520,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34474,map__34474__$1,f,when,seen){
return (function (){
var nbrs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__34520,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34474,map__34474__$1,f,when,seen){
return (function (p1__34465_SHARP_){
var G__34524 = p1__34465_SHARP_;
var G__34525 = node;
var G__34526 = (depth + (1));
return (nbr_pred.cljs$core$IFn$_invoke$arity$3 ? nbr_pred.cljs$core$IFn$_invoke$arity$3(G__34524,G__34525,G__34526) : nbr_pred.call(null,G__34524,G__34525,G__34526));
});})(vec__34520,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34474,map__34474__$1,f,when,seen))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__34520,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34474,map__34474__$1,f,when,seen){
return (function (p1__34464_SHARP_){
return cljs.core.contains_QMARK_(preds,p1__34464_SHARP_);
});})(vec__34520,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34474,map__34474__$1,f,when,seen))
,(successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(node) : successors.call(null,node))));
return loom$alg_generic$step(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(queue),(function (){var iter__4523__auto__ = ((function (nbrs,vec__34520,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34474,map__34474__$1,f,when,seen){
return (function loom$alg_generic$step_$_iter__34528(s__34529){
return (new cljs.core.LazySeq(null,((function (nbrs,vec__34520,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34474,map__34474__$1,f,when,seen){
return (function (){
var s__34529__$1 = s__34529;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__34529__$1);
if(temp__5720__auto____$1){
var s__34529__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__34529__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__34529__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__34531 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__34530 = (0);
while(true){
if((i__34530 < size__4522__auto__)){
var nbr = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__34530);
cljs.core.chunk_append(b__34531,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,(depth + (1))], null));

var G__35295 = (i__34530 + (1));
i__34530 = G__35295;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34531),loom$alg_generic$step_$_iter__34528(cljs.core.chunk_rest(s__34529__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34531),null);
}
} else {
var nbr = cljs.core.first(s__34529__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,(depth + (1))], null),loom$alg_generic$step_$_iter__34528(cljs.core.rest(s__34529__$2)));
}
} else {
return null;
}
break;
}
});})(nbrs,vec__34520,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34474,map__34474__$1,f,when,seen))
,null,null));
});})(nbrs,vec__34520,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34474,map__34474__$1,f,when,seen))
;
return iter__4523__auto__(nbrs);
})()),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (nbrs,vec__34520,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34474,map__34474__$1,f,when,seen){
return (function (p1__34466_SHARP_,p2__34467_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__34466_SHARP_,p2__34467_SHARP_,node);
});})(nbrs,vec__34520,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34474,map__34474__$1,f,when,seen))
,preds,nbrs));
});})(vec__34520,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__34474,map__34474__$1,f,when,seen))
,null,null)));
} else {
return null;
}
});})(f__$1,nbr_pred,map__34474,map__34474__$1,f,when,seen))
;
return step(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentQueue.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,(0)], null)),((cljs.core.map_QMARK_(seen))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(seen,start,null):cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.createAsIfByAssoc([start,null]),(function (){var iter__4523__auto__ = ((function (f__$1,nbr_pred,map__34474,map__34474__$1,f,when,seen){
return (function loom$alg_generic$iter__34541(s__34542){
return (new cljs.core.LazySeq(null,((function (f__$1,nbr_pred,map__34474,map__34474__$1,f,when,seen){
return (function (){
var s__34542__$1 = s__34542;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__34542__$1);
if(temp__5720__auto__){
var s__34542__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__34542__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__34542__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__34544 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__34543 = (0);
while(true){
if((i__34543 < size__4522__auto__)){
var s = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__34543);
cljs.core.chunk_append(b__34544,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,null], null));

var G__35302 = (i__34543 + (1));
i__34543 = G__35302;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34544),loom$alg_generic$iter__34541(cljs.core.chunk_rest(s__34542__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34544),null);
}
} else {
var s = cljs.core.first(s__34542__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,null], null),loom$alg_generic$iter__34541(cljs.core.rest(s__34542__$2)));
}
} else {
return null;
}
break;
}
});})(f__$1,nbr_pred,map__34474,map__34474__$1,f,when,seen))
,null,null));
});})(f__$1,nbr_pred,map__34474,map__34474__$1,f,when,seen))
;
return iter__4523__auto__(seen);
})())));
});

loom.alg_generic.bf_traverse.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.bf_traverse.cljs$lang$applyTo = (function (seq34469){
var G__34470 = cljs.core.first(seq34469);
var seq34469__$1 = cljs.core.next(seq34469);
var G__34471 = cljs.core.first(seq34469__$1);
var seq34469__$2 = cljs.core.next(seq34469__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34470,G__34471,seq34469__$2);
});

/**
 * Return a breadth-first spanning tree of the form {node
 *   [successors]}
 */
loom.alg_generic.bf_span = (function loom$alg_generic$bf_span(var_args){
var args__4736__auto__ = [];
var len__4730__auto___35307 = arguments.length;
var i__4731__auto___35308 = (0);
while(true){
if((i__4731__auto___35308 < len__4730__auto___35307)){
args__4736__auto__.push((arguments[i__4731__auto___35308]));

var G__35309 = (i__4731__auto___35308 + (1));
i__4731__auto___35308 = G__35309;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__34576){
var map__34577 = p__34576;
var map__34577__$1 = (((((!((map__34577 == null))))?(((((map__34577.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34577.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34577):map__34577);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34577__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
return loom.alg_generic.preds__GT_span(cljs.core.last(loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic(successors,start,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"f","f",-1597136552),((function (map__34577,map__34577__$1,seen){
return (function (_,pm,___$1){
return pm;
});})(map__34577,map__34577__$1,seen))
,new cljs.core.Keyword(null,"seen","seen",-518999789),seen], 0))));
});

loom.alg_generic.bf_span.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.bf_span.cljs$lang$applyTo = (function (seq34561){
var G__34562 = cljs.core.first(seq34561);
var seq34561__$1 = cljs.core.next(seq34561);
var G__34563 = cljs.core.first(seq34561__$1);
var seq34561__$2 = cljs.core.next(seq34561__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34562,G__34563,seq34561__$2);
});

/**
 * Returns a path from start to end with the fewest hops (i.e. irrespective
 *   of edge weights), successors being a function that returns adjacent nodes
 */
loom.alg_generic.bf_path = (function loom$alg_generic$bf_path(var_args){
var args__4736__auto__ = [];
var len__4730__auto___35316 = arguments.length;
var i__4731__auto___35317 = (0);
while(true){
if((i__4731__auto___35317 < len__4730__auto___35316)){
args__4736__auto__.push((arguments[i__4731__auto___35317]));

var G__35319 = (i__4731__auto___35317 + (1));
i__4731__auto___35317 = G__35319;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,end,p__34595){
var map__34596 = p__34595;
var map__34596__$1 = (((((!((map__34596 == null))))?(((((map__34596.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34596.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34596):map__34596);
var opts = map__34596__$1;
var opts__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.vector], null)], 0));
var temp__5720__auto__ = cljs.core.some(((function (opts__$1,map__34596,map__34596__$1,opts){
return (function (p__34600){
var vec__34601 = p__34600;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34601,(0),null);
var pm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34601,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34601,(2),null);
if(cljs.core.truth_((pm.cljs$core$IFn$_invoke$arity$1 ? pm.cljs$core$IFn$_invoke$arity$1(end) : pm.call(null,end)))){
return pm;
} else {
return null;
}
});})(opts__$1,map__34596,map__34596__$1,opts))
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
loom.alg_generic.bf_path.cljs$lang$applyTo = (function (seq34587){
var G__34588 = cljs.core.first(seq34587);
var seq34587__$1 = cljs.core.next(seq34587);
var G__34589 = cljs.core.first(seq34587__$1);
var seq34587__$2 = cljs.core.next(seq34587__$1);
var G__34590 = cljs.core.first(seq34587__$2);
var seq34587__$3 = cljs.core.next(seq34587__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34588,G__34589,G__34590,seq34587__$3);
});

/**
 * Returns a lazy-seq of the keys that exist in both m1 and m2
 */
loom.alg_generic.shared_keys = (function loom$alg_generic$shared_keys(m1,m2){
while(true){
if((cljs.core.count(m2) < cljs.core.count(m1))){
var G__35337 = m2;
var G__35338 = m1;
m1 = G__35337;
m2 = G__35338;
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
var iter__4523__auto__ = (function loom$alg_generic$reverse_edges_$_iter__34612(s__34613){
return (new cljs.core.LazySeq(null,(function (){
var s__34613__$1 = s__34613;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__34613__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var node = cljs.core.first(xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__34613__$1,node,xs__6277__auto__,temp__5720__auto__){
return (function loom$alg_generic$reverse_edges_$_iter__34612_$_iter__34614(s__34615){
return (new cljs.core.LazySeq(null,((function (s__34613__$1,node,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__34615__$1 = s__34615;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__34615__$1);
if(temp__5720__auto____$1){
var s__34615__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__34615__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__34615__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__34617 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__34616 = (0);
while(true){
if((i__34616 < size__4522__auto__)){
var nbr = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__34616);
if((!(cljs.core.contains_QMARK_(coll,nbr)))){
cljs.core.chunk_append(b__34617,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,node], null));

var G__35353 = (i__34616 + (1));
i__34616 = G__35353;
continue;
} else {
var G__35354 = (i__34616 + (1));
i__34616 = G__35354;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34617),loom$alg_generic$reverse_edges_$_iter__34612_$_iter__34614(cljs.core.chunk_rest(s__34615__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34617),null);
}
} else {
var nbr = cljs.core.first(s__34615__$2);
if((!(cljs.core.contains_QMARK_(coll,nbr)))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,node], null),loom$alg_generic$reverse_edges_$_iter__34612_$_iter__34614(cljs.core.rest(s__34615__$2)));
} else {
var G__35366 = cljs.core.rest(s__34615__$2);
s__34615__$1 = G__35366;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__34613__$1,node,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__34613__$1,node,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__((successor_fn.cljs$core$IFn$_invoke$arity$1 ? successor_fn.cljs$core$IFn$_invoke$arity$1(node) : successor_fn.call(null,node))));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,loom$alg_generic$reverse_edges_$_iter__34612(cljs.core.rest(s__34613__$1)));
} else {
var G__35371 = cljs.core.rest(s__34613__$1);
s__34613__$1 = G__35371;
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
var iter__4523__auto__ = (function loom$alg_generic$conj_paths_$_iter__34626(s__34627){
return (new cljs.core.LazySeq(null,(function (){
var s__34627__$1 = s__34627;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__34627__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var n = cljs.core.first(xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__34627__$1,n,xs__6277__auto__,temp__5720__auto__){
return (function loom$alg_generic$conj_paths_$_iter__34626_$_iter__34628(s__34629){
return (new cljs.core.LazySeq(null,((function (s__34627__$1,n,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__34629__$1 = s__34629;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__34629__$1);
if(temp__5720__auto____$1){
var xs__6277__auto____$1 = temp__5720__auto____$1;
var from = cljs.core.first(xs__6277__auto____$1);
var iterys__4519__auto__ = ((function (s__34629__$1,s__34627__$1,from,xs__6277__auto____$1,temp__5720__auto____$1,n,xs__6277__auto__,temp__5720__auto__){
return (function loom$alg_generic$conj_paths_$_iter__34626_$_iter__34628_$_iter__34630(s__34631){
return (new cljs.core.LazySeq(null,((function (s__34629__$1,s__34627__$1,from,xs__6277__auto____$1,temp__5720__auto____$1,n,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__34631__$1 = s__34631;
while(true){
var temp__5720__auto____$2 = cljs.core.seq(s__34631__$1);
if(temp__5720__auto____$2){
var s__34631__$2 = temp__5720__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__34631__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__34631__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__34633 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__34632 = (0);
while(true){
if((i__34632 < size__4522__auto__)){
var to = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__34632);
cljs.core.chunk_append(b__34633,cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(from,to)));

var G__35372 = (i__34632 + (1));
i__34632 = G__35372;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__34633),loom$alg_generic$conj_paths_$_iter__34626_$_iter__34628_$_iter__34630(cljs.core.chunk_rest(s__34631__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__34633),null);
}
} else {
var to = cljs.core.first(s__34631__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(from,to)),loom$alg_generic$conj_paths_$_iter__34626_$_iter__34628_$_iter__34630(cljs.core.rest(s__34631__$2)));
}
} else {
return null;
}
break;
}
});})(s__34629__$1,s__34627__$1,from,xs__6277__auto____$1,temp__5720__auto____$1,n,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__34629__$1,s__34627__$1,from,xs__6277__auto____$1,temp__5720__auto____$1,n,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,loom.alg_generic.trace_paths(to_map,n))));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,loom$alg_generic$conj_paths_$_iter__34626_$_iter__34628(cljs.core.rest(s__34629__$1)));
} else {
var G__35373 = cljs.core.rest(s__34629__$1);
s__34629__$1 = G__35373;
continue;
}
} else {
return null;
}
break;
}
});})(s__34627__$1,n,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__34627__$1,n,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.reverse,loom.alg_generic.trace_paths(from_map,n))));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,loom$alg_generic$conj_paths_$_iter__34626(cljs.core.rest(s__34627__$1)));
} else {
var G__35374 = cljs.core.rest(s__34627__$1);
s__34627__$1 = G__35374;
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
return (function (p1__34671_SHARP_){
return cljs.core.contains_QMARK_(coll,p1__34671_SHARP_);
});})(find_succs,find_preds))
,q));
});})(find_succs,find_preds))
;
var map_set_pairs = ((function (find_succs,find_preds,overlaps){
return (function (map,pairs){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (find_succs,find_preds,overlaps){
return (function (map__$1,p__34691){
var vec__34692 = p__34691;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34692,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34692,(1),null);
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
var G__35383 = outgoing__$1;
var G__35384 = incoming;
var G__35385 = q1__$1;
var G__35386 = q2;
outgoing = G__35383;
incoming = G__35384;
q1 = G__35385;
q2 = G__35386;
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
var G__35389 = outgoing;
var G__35390 = incoming__$1;
var G__35391 = q1;
var G__35392 = q2__$1;
outgoing = G__35389;
incoming = G__35390;
q1 = G__35391;
q2 = G__35392;
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
var G__34737 = arguments.length;
switch (G__34737) {
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
var step = (function loom$alg_generic$step(p__34763){
var vec__34766 = p__34763;
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34766,(0),null);
var pq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34766,(1),null);
var temp__5720__auto__ = cljs.core.first(pq);
if(cljs.core.truth_(temp__5720__auto__)){
var vec__34771 = temp__5720__auto__;
var dist_su = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34771,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34771,(1),null);
var u = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34771,(2),null);
var fpq = vec__34771;
return cljs.core.cons((f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(u,state) : f.call(null,u,state)),(new cljs.core.LazySeq(null,((function (vec__34771,dist_su,_,u,fpq,temp__5720__auto__,vec__34766,state,pq){
return (function (){
return loom$alg_generic$step(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__34771,dist_su,_,u,fpq,temp__5720__auto__,vec__34766,state,pq){
return (function (p__34777,v){
var vec__34780 = p__34777;
var state__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34780,(0),null);
var pq__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34780,(1),null);
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
});})(vec__34771,dist_su,_,u,fpq,temp__5720__auto__,vec__34766,state,pq))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(pq,fpq)], null),(successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(u) : successors.call(null,u))));
});})(vec__34771,dist_su,_,u,fpq,temp__5720__auto__,vec__34766,state,pq))
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (span,p__34794){
var vec__34795 = p__34794;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34795,(0),null);
var vec__34798 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34795,(1),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34798,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34798,(1),null);
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
var temp__5718__auto__ = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__34807){
var vec__34809 = p__34807;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34809,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34809,(1),null);
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
return cljs.core.long$((function (){var G__34832 = (bits / loom.alg_generic.bits_per_long);
return Math.ceil(G__34832);
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
var seq__34863_35410 = cljs.core.seq(cljs.core.rest(bitmaps));
var chunk__34870_35411 = null;
var count__34871_35412 = (0);
var i__34872_35413 = (0);
while(true){
if((i__34872_35413 < count__34871_35412)){
var bitmap_35417 = chunk__34870_35411.cljs$core$IIndexed$_nth$arity$2(null,i__34872_35413);
var seq__34873_35418 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.list,bitmap_35417));
var chunk__34875_35419 = null;
var count__34876_35420 = (0);
var i__34877_35421 = (0);
while(true){
if((i__34877_35421 < count__34876_35420)){
var vec__34970_35422 = chunk__34875_35419.cljs$core$IIndexed$_nth$arity$2(null,i__34877_35421);
var idx_35423 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34970_35422,(0),null);
var value_35424 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34970_35422,(1),null);
var masked_value_35425 = (value_35424 | (new_bitmap[idx_35423]));
(new_bitmap[idx_35423] = masked_value_35425);


var G__35426 = seq__34873_35418;
var G__35427 = chunk__34875_35419;
var G__35428 = count__34876_35420;
var G__35429 = (i__34877_35421 + (1));
seq__34873_35418 = G__35426;
chunk__34875_35419 = G__35427;
count__34876_35420 = G__35428;
i__34877_35421 = G__35429;
continue;
} else {
var temp__5720__auto___35430 = cljs.core.seq(seq__34873_35418);
if(temp__5720__auto___35430){
var seq__34873_35432__$1 = temp__5720__auto___35430;
if(cljs.core.chunked_seq_QMARK_(seq__34873_35432__$1)){
var c__4550__auto___35435 = cljs.core.chunk_first(seq__34873_35432__$1);
var G__35436 = cljs.core.chunk_rest(seq__34873_35432__$1);
var G__35437 = c__4550__auto___35435;
var G__35438 = cljs.core.count(c__4550__auto___35435);
var G__35439 = (0);
seq__34873_35418 = G__35436;
chunk__34875_35419 = G__35437;
count__34876_35420 = G__35438;
i__34877_35421 = G__35439;
continue;
} else {
var vec__34974_35440 = cljs.core.first(seq__34873_35432__$1);
var idx_35441 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34974_35440,(0),null);
var value_35442 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34974_35440,(1),null);
var masked_value_35443 = (value_35442 | (new_bitmap[idx_35441]));
(new_bitmap[idx_35441] = masked_value_35443);


var G__35444 = cljs.core.next(seq__34873_35432__$1);
var G__35445 = null;
var G__35446 = (0);
var G__35447 = (0);
seq__34873_35418 = G__35444;
chunk__34875_35419 = G__35445;
count__34876_35420 = G__35446;
i__34877_35421 = G__35447;
continue;
}
} else {
}
}
break;
}

var G__35448 = seq__34863_35410;
var G__35449 = chunk__34870_35411;
var G__35450 = count__34871_35412;
var G__35451 = (i__34872_35413 + (1));
seq__34863_35410 = G__35448;
chunk__34870_35411 = G__35449;
count__34871_35412 = G__35450;
i__34872_35413 = G__35451;
continue;
} else {
var temp__5720__auto___35452 = cljs.core.seq(seq__34863_35410);
if(temp__5720__auto___35452){
var seq__34863_35454__$1 = temp__5720__auto___35452;
if(cljs.core.chunked_seq_QMARK_(seq__34863_35454__$1)){
var c__4550__auto___35456 = cljs.core.chunk_first(seq__34863_35454__$1);
var G__35457 = cljs.core.chunk_rest(seq__34863_35454__$1);
var G__35458 = c__4550__auto___35456;
var G__35459 = cljs.core.count(c__4550__auto___35456);
var G__35460 = (0);
seq__34863_35410 = G__35457;
chunk__34870_35411 = G__35458;
count__34871_35412 = G__35459;
i__34872_35413 = G__35460;
continue;
} else {
var bitmap_35462 = cljs.core.first(seq__34863_35454__$1);
var seq__34864_35464 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.list,bitmap_35462));
var chunk__34866_35465 = null;
var count__34867_35466 = (0);
var i__34868_35467 = (0);
while(true){
if((i__34868_35467 < count__34867_35466)){
var vec__34988_35469 = chunk__34866_35465.cljs$core$IIndexed$_nth$arity$2(null,i__34868_35467);
var idx_35470 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34988_35469,(0),null);
var value_35471 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34988_35469,(1),null);
var masked_value_35474 = (value_35471 | (new_bitmap[idx_35470]));
(new_bitmap[idx_35470] = masked_value_35474);


var G__35476 = seq__34864_35464;
var G__35477 = chunk__34866_35465;
var G__35478 = count__34867_35466;
var G__35479 = (i__34868_35467 + (1));
seq__34864_35464 = G__35476;
chunk__34866_35465 = G__35477;
count__34867_35466 = G__35478;
i__34868_35467 = G__35479;
continue;
} else {
var temp__5720__auto___35480__$1 = cljs.core.seq(seq__34864_35464);
if(temp__5720__auto___35480__$1){
var seq__34864_35481__$1 = temp__5720__auto___35480__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34864_35481__$1)){
var c__4550__auto___35482 = cljs.core.chunk_first(seq__34864_35481__$1);
var G__35483 = cljs.core.chunk_rest(seq__34864_35481__$1);
var G__35484 = c__4550__auto___35482;
var G__35485 = cljs.core.count(c__4550__auto___35482);
var G__35486 = (0);
seq__34864_35464 = G__35483;
chunk__34866_35465 = G__35484;
count__34867_35466 = G__35485;
i__34868_35467 = G__35486;
continue;
} else {
var vec__34992_35487 = cljs.core.first(seq__34864_35481__$1);
var idx_35488 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34992_35487,(0),null);
var value_35489 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34992_35487,(1),null);
var masked_value_35491 = (value_35489 | (new_bitmap[idx_35488]));
(new_bitmap[idx_35488] = masked_value_35491);


var G__35494 = cljs.core.next(seq__34864_35481__$1);
var G__35495 = null;
var G__35496 = (0);
var G__35497 = (0);
seq__34864_35464 = G__35494;
chunk__34866_35465 = G__35495;
count__34867_35466 = G__35496;
i__34868_35467 = G__35497;
continue;
}
} else {
}
}
break;
}

var G__35499 = cljs.core.next(seq__34863_35454__$1);
var G__35500 = null;
var G__35501 = (0);
var G__35502 = (0);
seq__34863_35410 = G__35499;
chunk__34870_35411 = G__35500;
count__34871_35412 = G__35501;
i__34872_35413 = G__35502;
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
loom.alg_generic.bm_or.cljs$lang$applyTo = (function (seq34845){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34845));
});

/**
 * Get the indicies of set bits in 'bitmap.
 */
loom.alg_generic.bm_get_indicies = (function loom$alg_generic$bm_get_indicies(bitmap){
var iter__4523__auto__ = (function loom$alg_generic$bm_get_indicies_$_iter__34998(s__34999){
return (new cljs.core.LazySeq(null,(function (){
var s__34999__$1 = s__34999;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__34999__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var chunk = cljs.core.first(xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__34999__$1,chunk,xs__6277__auto__,temp__5720__auto__){
return (function loom$alg_generic$bm_get_indicies_$_iter__34998_$_iter__35000(s__35001){
return (new cljs.core.LazySeq(null,((function (s__34999__$1,chunk,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__35001__$1 = s__35001;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__35001__$1);
if(temp__5720__auto____$1){
var s__35001__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35001__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__35001__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__35003 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__35002 = (0);
while(true){
if((i__35002 < size__4522__auto__)){
var offset = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__35002);
var idx = ((chunk * loom.alg_generic.bits_per_long) + offset);
if(cljs.core.truth_(loom.alg_generic.bm_get(bitmap,idx))){
cljs.core.chunk_append(b__35003,idx);

var G__35506 = (i__35002 + (1));
i__35002 = G__35506;
continue;
} else {
var G__35507 = (i__35002 + (1));
i__35002 = G__35507;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35003),loom$alg_generic$bm_get_indicies_$_iter__34998_$_iter__35000(cljs.core.chunk_rest(s__35001__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35003),null);
}
} else {
var offset = cljs.core.first(s__35001__$2);
var idx = ((chunk * loom.alg_generic.bits_per_long) + offset);
if(cljs.core.truth_(loom.alg_generic.bm_get(bitmap,idx))){
return cljs.core.cons(idx,loom$alg_generic$bm_get_indicies_$_iter__34998_$_iter__35000(cljs.core.rest(s__35001__$2)));
} else {
var G__35508 = cljs.core.rest(s__35001__$2);
s__35001__$1 = G__35508;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__34999__$1,chunk,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__34999__$1,chunk,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(loom.alg_generic.bits_per_long)));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,loom$alg_generic$bm_get_indicies_$_iter__34998(cljs.core.rest(s__34999__$1)));
} else {
var G__35509 = cljs.core.rest(s__34999__$1);
s__34999__$1 = G__35509;
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

loom.alg_generic.Ancestry.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k35030,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__35050 = k35030;
var G__35050__$1 = (((G__35050 instanceof cljs.core.Keyword))?G__35050.fqn:null);
switch (G__35050__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35030,else__4388__auto__);

}
});

loom.alg_generic.Ancestry.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__35055){
var vec__35057 = p__35055;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35057,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35057,(1),null);
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

loom.alg_generic.Ancestry.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35029){
var self__ = this;
var G__35029__$1 = this;
return (new cljs.core.RecordIter((0),G__35029__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node->idx","node->idx",152705227),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4243__auto____$1 = (function (){var fexpr__35085 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1116202445 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__35085(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

loom.alg_generic.Ancestry.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35031,other35032){
var self__ = this;
var this35031__$1 = this;
return (((!((other35032 == null)))) && ((this35031__$1.constructor === other35032.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35031__$1.node__GT_idx,other35032.node__GT_idx)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35031__$1.idx__GT_node,other35032.idx__GT_node)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35031__$1.bitmaps,other35032.bitmaps)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35031__$1.__extmap,other35032.__extmap)));
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

loom.alg_generic.Ancestry.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__35029){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__35100 = cljs.core.keyword_identical_QMARK_;
var expr__35101 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__35104 = new cljs.core.Keyword(null,"node->idx","node->idx",152705227);
var G__35105 = expr__35101;
return (pred__35100.cljs$core$IFn$_invoke$arity$2 ? pred__35100.cljs$core$IFn$_invoke$arity$2(G__35104,G__35105) : pred__35100.call(null,G__35104,G__35105));
})())){
return (new loom.alg_generic.Ancestry(G__35029,self__.idx__GT_node,self__.bitmaps,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__35108 = new cljs.core.Keyword(null,"idx->node","idx->node",1811907175);
var G__35109 = expr__35101;
return (pred__35100.cljs$core$IFn$_invoke$arity$2 ? pred__35100.cljs$core$IFn$_invoke$arity$2(G__35108,G__35109) : pred__35100.call(null,G__35108,G__35109));
})())){
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,G__35029,self__.bitmaps,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__35112 = new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842);
var G__35113 = expr__35101;
return (pred__35100.cljs$core$IFn$_invoke$arity$2 ? pred__35100.cljs$core$IFn$_invoke$arity$2(G__35112,G__35113) : pred__35100.call(null,G__35112,G__35113));
})())){
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,G__35029,self__.__meta,self__.__extmap,null));
} else {
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__35029),null));
}
}
}
});

loom.alg_generic.Ancestry.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"node->idx","node->idx",152705227),self__.node__GT_idx,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),self__.idx__GT_node,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),self__.bitmaps,null))], null),self__.__extmap));
});

loom.alg_generic.Ancestry.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__35029){
var self__ = this;
var this__4384__auto____$1 = this;
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,G__35029,self__.__extmap,self__.__hash));
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
loom.alg_generic.map__GT_Ancestry = (function loom$alg_generic$map__GT_Ancestry(G__35038){
var extmap__4424__auto__ = (function (){var G__35125 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35038,new cljs.core.Keyword(null,"node->idx","node->idx",152705227),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842)], 0));
if(cljs.core.record_QMARK_(G__35038)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35125);
} else {
return G__35125;
}
})();
return (new loom.alg_generic.Ancestry(new cljs.core.Keyword(null,"node->idx","node->idx",152705227).cljs$core$IFn$_invoke$arity$1(G__35038),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175).cljs$core$IFn$_invoke$arity$1(G__35038),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842).cljs$core$IFn$_invoke$arity$1(G__35038),null,cljs.core.not_empty(extmap__4424__auto__),null));
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
var len__4730__auto___35541 = arguments.length;
var i__4731__auto___35542 = (0);
while(true){
if((i__4731__auto___35542 < len__4730__auto___35541)){
args__4736__auto__.push((arguments[i__4731__auto___35542]));

var G__35543 = (i__4731__auto___35542 + (1));
i__4731__auto___35542 = G__35543;
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
var map__35139 = ancestry;
var map__35139__$1 = (((((!((map__35139 == null))))?(((((map__35139.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35139.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35139):map__35139);
var node__GT_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35139__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var idx__GT_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35139__$1,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175));
var bitmaps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35139__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
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
loom.alg_generic.ancestry_add.cljs$lang$applyTo = (function (seq35129){
var G__35130 = cljs.core.first(seq35129);
var seq35129__$1 = cljs.core.next(seq35129);
var G__35131 = cljs.core.first(seq35129__$1);
var seq35129__$2 = cljs.core.next(seq35129__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35130,G__35131,seq35129__$2);
});

/**
 * Finds if the 'parenter node is an ancestor of 'childer node for the given
 *   'ancestry cache.
 */
loom.alg_generic.ancestor_QMARK_ = (function loom$alg_generic$ancestor_QMARK_(ancestry,childer,parenter){
var map__35148 = ancestry;
var map__35148__$1 = (((((!((map__35148 == null))))?(((((map__35148.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35148.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35148):map__35148);
var node__GT_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35148__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var bitmaps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35148__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
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
var map__35156 = ancestry;
var map__35156__$1 = (((((!((map__35156 == null))))?(((((map__35156.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35156.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35156):map__35156);
var node__GT_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35156__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var idx__GT_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35156__$1,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175));
var bitmaps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35156__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
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
