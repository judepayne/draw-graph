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
return (function (p1__28974_SHARP_){
var G__28980 = preds;
var G__28981 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,p1__28974_SHARP_);
return (loom.alg_generic.paths.cljs$core$IFn$_invoke$arity$2 ? loom.alg_generic.paths.cljs$core$IFn$_invoke$arity$2(G__28980,G__28981) : loom.alg_generic.paths.call(null,G__28980,G__28981));
});})(this_node))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (this_node){
return (function (p1__28973_SHARP_){
return cljs.core.not_any_QMARK_(((function (this_node){
return (function (edge){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(edge,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this_node,p1__28973_SHARP_], null));
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
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__28983_SHARP_){
var G__28984 = cljs.core.peek(p1__28983_SHARP_);
return (preds.cljs$core$IFn$_invoke$arity$1 ? preds.cljs$core$IFn$_invoke$arity$1(G__28984) : preds.call(null,G__28984));
}),loom.alg_generic.paths(preds,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null)));
});
/**
 * Converts a map of the form {node predecessor} to a spanning tree of the
 *   form {node [successors]}
 */
loom.alg_generic.preds__GT_span = (function loom$alg_generic$preds__GT_span(preds){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (span,p__28989){
var vec__28994 = p__28989;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28994,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28994,(1),null);
if(cljs.core.truth_(p)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(span,p,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var G__28997 = p;
var G__28998 = cljs.core.PersistentVector.EMPTY;
return (span.cljs$core$IFn$_invoke$arity$2 ? span.cljs$core$IFn$_invoke$arity$2(G__28997,G__28998) : span.call(null,G__28997,G__28998));
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
var len__4730__auto___30083 = arguments.length;
var i__4731__auto___30084 = (0);
while(true){
if((i__4731__auto___30084 < len__4730__auto___30083)){
args__4736__auto__.push((arguments[i__4731__auto___30084]));

var G__30085 = (i__4731__auto___30084 + (1));
i__4731__auto___30084 = G__30085;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__29056){
var map__29062 = p__29056;
var map__29062__$1 = (((((!((map__29062 == null))))?(((((map__29062.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29062.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29062):map__29062);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29062__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var step = ((function (map__29062,map__29062__$1,seen){
return (function loom$alg_generic$step(stack,seen__$1){
var temp__5720__auto__ = cljs.core.peek(stack);
if(cljs.core.truth_(temp__5720__auto__)){
var node = temp__5720__auto__;
if(cljs.core.contains_QMARK_(seen__$1,node)){
return loom$alg_generic$step(cljs.core.pop(stack),seen__$1);
} else {
var seen__$2 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,node);
var nbrs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(seen__$2,(successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(node) : successors.call(null,node)));
return (new cljs.core.LazySeq(null,((function (seen__$2,nbrs,node,temp__5720__auto__,map__29062,map__29062__$1,seen){
return (function (){
return cljs.core.cons(node,loom$alg_generic$step(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(stack),nbrs),seen__$2));
});})(seen__$2,nbrs,node,temp__5720__auto__,map__29062,map__29062__$1,seen))
,null,null));
}
} else {
return null;
}
});})(map__29062,map__29062__$1,seen))
;
return step(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null),seen);
});

loom.alg_generic.pre_traverse.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.pre_traverse.cljs$lang$applyTo = (function (seq29007){
var G__29014 = cljs.core.first(seq29007);
var seq29007__$1 = cljs.core.next(seq29007);
var G__29015 = cljs.core.first(seq29007__$1);
var seq29007__$2 = cljs.core.next(seq29007__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29014,G__29015,seq29007__$2);
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
var len__4730__auto___30099 = arguments.length;
var i__4731__auto___30100 = (0);
while(true){
if((i__4731__auto___30100 < len__4730__auto___30099)){
args__4736__auto__.push((arguments[i__4731__auto___30100]));

var G__30104 = (i__4731__auto___30100 + (1));
i__4731__auto___30100 = G__30104;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__29142){
var map__29143 = p__29142;
var map__29143__$1 = (((((!((map__29143 == null))))?(((((map__29143.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29143.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29143):map__29143);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29143__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var step = ((function (map__29143,map__29143__$1,seen){
return (function loom$alg_generic$step(successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1){
while(true){
var temp__5718__auto__ = cljs.core.first(nbrs);
if(cljs.core.truth_(temp__5718__auto__)){
var nbr = temp__5718__auto__;
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null),(new cljs.core.LazySeq(null,((function (successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1,nbr,temp__5718__auto__,map__29143,map__29143__$1,seen){
return (function (){
var seen__$2 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,start__$1);
if(cljs.core.truth_((seen__$2.cljs$core$IFn$_invoke$arity$1 ? seen__$2.cljs$core$IFn$_invoke$arity$1(nbr) : seen__$2.call(null,nbr)))){
return loom$alg_generic$step(successors__$1,start__$1,cljs.core.next(nbrs),stack,nbrstack,seen__$2);
} else {
return loom$alg_generic$step(successors__$1,nbr,(successors__$1.cljs$core$IFn$_invoke$arity$1 ? successors__$1.cljs$core$IFn$_invoke$arity$1(nbr) : successors__$1.call(null,nbr)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,start__$1),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nbrstack,cljs.core.next(nbrs)),seen__$2);
}
});})(successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1,nbr,temp__5718__auto__,map__29143,map__29143__$1,seen))
,null,null)));
} else {
var temp__5720__auto__ = cljs.core.peek(stack);
if(cljs.core.truth_(temp__5720__auto__)){
var parent = temp__5720__auto__;
var G__30120 = successors__$1;
var G__30121 = parent;
var G__30122 = cljs.core.peek(nbrstack);
var G__30123 = cljs.core.pop(stack);
var G__30124 = cljs.core.pop(nbrstack);
var G__30125 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,start__$1);
successors__$1 = G__30120;
start__$1 = G__30121;
nbrs = G__30122;
stack = G__30123;
nbrstack = G__30124;
seen__$1 = G__30125;
continue;
} else {
return null;
}
}
break;
}
});})(map__29143,map__29143__$1,seen))
;
if(cljs.core.truth_((seen.cljs$core$IFn$_invoke$arity$1 ? seen.cljs$core$IFn$_invoke$arity$1(start) : seen.call(null,start)))){
return null;
} else {
return step(successors,start,(successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(start) : successors.call(null,start)),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,start));
}
});

loom.alg_generic.pre_edge_traverse.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.pre_edge_traverse.cljs$lang$applyTo = (function (seq29138){
var G__29139 = cljs.core.first(seq29138);
var seq29138__$1 = cljs.core.next(seq29138);
var G__29140 = cljs.core.first(seq29138__$1);
var seq29138__$2 = cljs.core.next(seq29138__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29139,G__29140,seq29138__$2);
});

/**
 * Returns a depth-first spanning tree of the form {node [successors]}
 */
loom.alg_generic.pre_span = (function loom$alg_generic$pre_span(var_args){
var args__4736__auto__ = [];
var len__4730__auto___30142 = arguments.length;
var i__4731__auto___30144 = (0);
while(true){
if((i__4731__auto___30144 < len__4730__auto___30142)){
args__4736__auto__.push((arguments[i__4731__auto___30144]));

var G__30145 = (i__4731__auto___30144 + (1));
i__4731__auto___30144 = G__30145;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__29177){
var map__29178 = p__29177;
var map__29178__$1 = (((((!((map__29178 == null))))?(((((map__29178.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29178.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29178):map__29178);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29178__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29178__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__30157 = seen__$2;
var G__30158 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(preds,u,v);
var G__30159 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,u);
seen__$1 = G__30157;
preds = G__30158;
stack = G__30159;
continue;
} else {
var G__30164 = seen__$2;
var G__30165 = preds;
var G__30166 = cljs.core.pop(stack);
seen__$1 = G__30164;
preds = G__30165;
stack = G__30166;
continue;
}
}
break;
}
});

loom.alg_generic.pre_span.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.pre_span.cljs$lang$applyTo = (function (seq29170){
var G__29171 = cljs.core.first(seq29170);
var seq29170__$1 = cljs.core.next(seq29170);
var G__29172 = cljs.core.first(seq29170__$1);
var seq29170__$2 = cljs.core.next(seq29170__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29171,G__29172,seq29170__$2);
});

/**
 * Traverses a graph depth-first postorder from start, successors
 *   being a function that returns adjacent nodes. Returns a vector
 */
loom.alg_generic.post_traverse = (function loom$alg_generic$post_traverse(var_args){
var args__4736__auto__ = [];
var len__4730__auto___30173 = arguments.length;
var i__4731__auto___30174 = (0);
while(true){
if((i__4731__auto___30174 < len__4730__auto___30173)){
args__4736__auto__.push((arguments[i__4731__auto___30174]));

var G__30176 = (i__4731__auto___30174 + (1));
i__4731__auto___30174 = G__30176;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__29201){
var map__29202 = p__29201;
var map__29202__$1 = (((((!((map__29202 == null))))?(((((map__29202.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29202.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29202):map__29202);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29202__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29202__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__30188 = seen__$2;
var G__30189 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,v);
var G__30190 = cljs.core.pop(stack);
seen__$1 = G__30188;
result = G__30189;
stack = G__30190;
continue;
} else {
var G__30194 = seen__$2;
var G__30195 = result;
var G__30196 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,cljs.core.first(nbrs));
seen__$1 = G__30194;
result = G__30195;
stack = G__30196;
continue;
}
}
break;
}
});

loom.alg_generic.post_traverse.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.post_traverse.cljs$lang$applyTo = (function (seq29192){
var G__29193 = cljs.core.first(seq29192);
var seq29192__$1 = cljs.core.next(seq29192);
var G__29194 = cljs.core.first(seq29192__$1);
var seq29192__$2 = cljs.core.next(seq29192__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29193,G__29194,seq29192__$2);
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
var len__4730__auto___30201 = arguments.length;
var i__4731__auto___30202 = (0);
while(true){
if((i__4731__auto___30202 < len__4730__auto___30201)){
args__4736__auto__.push((arguments[i__4731__auto___30202]));

var G__30204 = (i__4731__auto___30202 + (1));
i__4731__auto___30202 = G__30204;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__29229){
var map__29230 = p__29229;
var map__29230__$1 = (((((!((map__29230 == null))))?(((((map__29230.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29230.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29230):map__29230);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29230__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29230__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
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
var G__30214 = start__$1;
var G__30215 = cljs.core.next(nbrs);
var G__30216 = stack;
var G__30217 = nbrstack;
var G__30218 = seen__$2;
var G__30219 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(edges,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null));
start__$1 = G__30214;
nbrs = G__30215;
stack = G__30216;
nbrstack = G__30217;
seen__$1 = G__30218;
edges = G__30219;
continue;
} else {
var G__30222 = nbr;
var G__30223 = (successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(nbr) : successors.call(null,nbr));
var G__30224 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,start__$1);
var G__30225 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nbrstack,cljs.core.next(nbrs));
var G__30226 = seen__$2;
var G__30227 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(edges,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null));
start__$1 = G__30222;
nbrs = G__30223;
stack = G__30224;
nbrstack = G__30225;
seen__$1 = G__30226;
edges = G__30227;
continue;
}
} else {
var temp__5718__auto____$1 = cljs.core.peek(stack);
if(cljs.core.truth_(temp__5718__auto____$1)){
var parent = temp__5718__auto____$1;
var G__30234 = parent;
var G__30235 = cljs.core.peek(nbrstack);
var G__30236 = cljs.core.pop(stack);
var G__30237 = cljs.core.pop(nbrstack);
var G__30238 = seen__$2;
var G__30239 = edges;
start__$1 = G__30234;
nbrs = G__30235;
stack = G__30236;
nbrstack = G__30237;
seen__$1 = G__30238;
edges = G__30239;
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
loom.alg_generic.post_edge_traverse.cljs$lang$applyTo = (function (seq29221){
var G__29222 = cljs.core.first(seq29221);
var seq29221__$1 = cljs.core.next(seq29221);
var G__29223 = cljs.core.first(seq29221__$1);
var seq29221__$2 = cljs.core.next(seq29221__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29222,G__29223,seq29221__$2);
});

/**
 * Topological sort of a component of a (presumably) directed graph.
 *   Returns nil if the graph contains any cycles. See loom.alg/topsort
 *   for a complete topological sort
 */
loom.alg_generic.topsort_component = (function loom$alg_generic$topsort_component(var_args){
var G__29263 = arguments.length;
switch (G__29263) {
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
var G__30257 = seen__$2;
var G__30258 = explored__$1;
var G__30259 = result;
var G__30260 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,cljs.core.first(us));
seen__$1 = G__30257;
explored__$1 = G__30258;
result = G__30259;
stack = G__30260;
continue;
}
} else {
var G__30261 = seen__$2;
var G__30262 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(explored__$1,v);
var G__30263 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,v);
var G__30264 = cljs.core.pop(stack);
seen__$1 = G__30261;
explored__$1 = G__30262;
result = G__30263;
stack = G__30264;
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
var len__4730__auto___30269 = arguments.length;
var i__4731__auto___30273 = (0);
while(true){
if((i__4731__auto___30273 < len__4730__auto___30269)){
args__4736__auto__.push((arguments[i__4731__auto___30273]));

var G__30275 = (i__4731__auto___30273 + (1));
i__4731__auto___30273 = G__30275;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__29321){
var map__29322 = p__29321;
var map__29322__$1 = (((((!((map__29322 == null))))?(((((map__29322.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29322.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29322):map__29322);
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29322__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var when = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29322__$1,new cljs.core.Keyword(null,"when","when",-576417306));
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29322__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
var f__$1 = (function (){var or__4131__auto__ = f;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return ((function (or__4131__auto__,map__29322,map__29322__$1,f,when,seen){
return (function (n,p,d){
return n;
});
;})(or__4131__auto__,map__29322,map__29322__$1,f,when,seen))
}
})();
var nbr_pred = (function (){var or__4131__auto__ = when;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.constantly(true);
}
})();
var step = ((function (f__$1,nbr_pred,map__29322,map__29322__$1,f,when,seen){
return (function loom$alg_generic$step(queue,preds){
var temp__5720__auto__ = cljs.core.peek(queue);
if(cljs.core.truth_(temp__5720__auto__)){
var vec__29367 = temp__5720__auto__;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29367,(0),null);
var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29367,(1),null);
return cljs.core.cons((f__$1.cljs$core$IFn$_invoke$arity$3 ? f__$1.cljs$core$IFn$_invoke$arity$3(node,preds,depth) : f__$1.call(null,node,preds,depth)),(new cljs.core.LazySeq(null,((function (vec__29367,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__29322,map__29322__$1,f,when,seen){
return (function (){
var nbrs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__29367,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__29322,map__29322__$1,f,when,seen){
return (function (p1__29304_SHARP_){
var G__29371 = p1__29304_SHARP_;
var G__29372 = node;
var G__29373 = (depth + (1));
return (nbr_pred.cljs$core$IFn$_invoke$arity$3 ? nbr_pred.cljs$core$IFn$_invoke$arity$3(G__29371,G__29372,G__29373) : nbr_pred.call(null,G__29371,G__29372,G__29373));
});})(vec__29367,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__29322,map__29322__$1,f,when,seen))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__29367,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__29322,map__29322__$1,f,when,seen){
return (function (p1__29303_SHARP_){
return cljs.core.contains_QMARK_(preds,p1__29303_SHARP_);
});})(vec__29367,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__29322,map__29322__$1,f,when,seen))
,(successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(node) : successors.call(null,node))));
return loom$alg_generic$step(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(queue),(function (){var iter__4523__auto__ = ((function (nbrs,vec__29367,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__29322,map__29322__$1,f,when,seen){
return (function loom$alg_generic$step_$_iter__29374(s__29375){
return (new cljs.core.LazySeq(null,((function (nbrs,vec__29367,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__29322,map__29322__$1,f,when,seen){
return (function (){
var s__29375__$1 = s__29375;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__29375__$1);
if(temp__5720__auto____$1){
var s__29375__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__29375__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__29375__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__29377 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__29376 = (0);
while(true){
if((i__29376 < size__4522__auto__)){
var nbr = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__29376);
cljs.core.chunk_append(b__29377,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,(depth + (1))], null));

var G__30292 = (i__29376 + (1));
i__29376 = G__30292;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29377),loom$alg_generic$step_$_iter__29374(cljs.core.chunk_rest(s__29375__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29377),null);
}
} else {
var nbr = cljs.core.first(s__29375__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,(depth + (1))], null),loom$alg_generic$step_$_iter__29374(cljs.core.rest(s__29375__$2)));
}
} else {
return null;
}
break;
}
});})(nbrs,vec__29367,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__29322,map__29322__$1,f,when,seen))
,null,null));
});})(nbrs,vec__29367,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__29322,map__29322__$1,f,when,seen))
;
return iter__4523__auto__(nbrs);
})()),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (nbrs,vec__29367,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__29322,map__29322__$1,f,when,seen){
return (function (p1__29306_SHARP_,p2__29307_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__29306_SHARP_,p2__29307_SHARP_,node);
});})(nbrs,vec__29367,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__29322,map__29322__$1,f,when,seen))
,preds,nbrs));
});})(vec__29367,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__29322,map__29322__$1,f,when,seen))
,null,null)));
} else {
return null;
}
});})(f__$1,nbr_pred,map__29322,map__29322__$1,f,when,seen))
;
return step(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentQueue.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,(0)], null)),((cljs.core.map_QMARK_(seen))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(seen,start,null):cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.createAsIfByAssoc([start,null]),(function (){var iter__4523__auto__ = ((function (f__$1,nbr_pred,map__29322,map__29322__$1,f,when,seen){
return (function loom$alg_generic$iter__29382(s__29383){
return (new cljs.core.LazySeq(null,((function (f__$1,nbr_pred,map__29322,map__29322__$1,f,when,seen){
return (function (){
var s__29383__$1 = s__29383;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__29383__$1);
if(temp__5720__auto__){
var s__29383__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29383__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__29383__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__29385 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__29384 = (0);
while(true){
if((i__29384 < size__4522__auto__)){
var s = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__29384);
cljs.core.chunk_append(b__29385,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,null], null));

var G__30301 = (i__29384 + (1));
i__29384 = G__30301;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29385),loom$alg_generic$iter__29382(cljs.core.chunk_rest(s__29383__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29385),null);
}
} else {
var s = cljs.core.first(s__29383__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,null], null),loom$alg_generic$iter__29382(cljs.core.rest(s__29383__$2)));
}
} else {
return null;
}
break;
}
});})(f__$1,nbr_pred,map__29322,map__29322__$1,f,when,seen))
,null,null));
});})(f__$1,nbr_pred,map__29322,map__29322__$1,f,when,seen))
;
return iter__4523__auto__(seen);
})())));
});

loom.alg_generic.bf_traverse.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.bf_traverse.cljs$lang$applyTo = (function (seq29310){
var G__29311 = cljs.core.first(seq29310);
var seq29310__$1 = cljs.core.next(seq29310);
var G__29312 = cljs.core.first(seq29310__$1);
var seq29310__$2 = cljs.core.next(seq29310__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29311,G__29312,seq29310__$2);
});

/**
 * Return a breadth-first spanning tree of the form {node
 *   [successors]}
 */
loom.alg_generic.bf_span = (function loom$alg_generic$bf_span(var_args){
var args__4736__auto__ = [];
var len__4730__auto___30305 = arguments.length;
var i__4731__auto___30306 = (0);
while(true){
if((i__4731__auto___30306 < len__4730__auto___30305)){
args__4736__auto__.push((arguments[i__4731__auto___30306]));

var G__30309 = (i__4731__auto___30306 + (1));
i__4731__auto___30306 = G__30309;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__29401){
var map__29404 = p__29401;
var map__29404__$1 = (((((!((map__29404 == null))))?(((((map__29404.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29404.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29404):map__29404);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29404__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
return loom.alg_generic.preds__GT_span(cljs.core.last(loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic(successors,start,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"f","f",-1597136552),((function (map__29404,map__29404__$1,seen){
return (function (_,pm,___$1){
return pm;
});})(map__29404,map__29404__$1,seen))
,new cljs.core.Keyword(null,"seen","seen",-518999789),seen], 0))));
});

loom.alg_generic.bf_span.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.bf_span.cljs$lang$applyTo = (function (seq29394){
var G__29395 = cljs.core.first(seq29394);
var seq29394__$1 = cljs.core.next(seq29394);
var G__29396 = cljs.core.first(seq29394__$1);
var seq29394__$2 = cljs.core.next(seq29394__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29395,G__29396,seq29394__$2);
});

/**
 * Returns a path from start to end with the fewest hops (i.e. irrespective
 *   of edge weights), successors being a function that returns adjacent nodes
 */
loom.alg_generic.bf_path = (function loom$alg_generic$bf_path(var_args){
var args__4736__auto__ = [];
var len__4730__auto___30320 = arguments.length;
var i__4731__auto___30323 = (0);
while(true){
if((i__4731__auto___30323 < len__4730__auto___30320)){
args__4736__auto__.push((arguments[i__4731__auto___30323]));

var G__30324 = (i__4731__auto___30323 + (1));
i__4731__auto___30323 = G__30324;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,end,p__29425){
var map__29426 = p__29425;
var map__29426__$1 = (((((!((map__29426 == null))))?(((((map__29426.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29426.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29426):map__29426);
var opts = map__29426__$1;
var opts__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.vector], null)], 0));
var temp__5720__auto__ = cljs.core.some(((function (opts__$1,map__29426,map__29426__$1,opts){
return (function (p__29435){
var vec__29436 = p__29435;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29436,(0),null);
var pm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29436,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29436,(2),null);
if(cljs.core.truth_((pm.cljs$core$IFn$_invoke$arity$1 ? pm.cljs$core$IFn$_invoke$arity$1(end) : pm.call(null,end)))){
return pm;
} else {
return null;
}
});})(opts__$1,map__29426,map__29426__$1,opts))
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
loom.alg_generic.bf_path.cljs$lang$applyTo = (function (seq29416){
var G__29417 = cljs.core.first(seq29416);
var seq29416__$1 = cljs.core.next(seq29416);
var G__29418 = cljs.core.first(seq29416__$1);
var seq29416__$2 = cljs.core.next(seq29416__$1);
var G__29419 = cljs.core.first(seq29416__$2);
var seq29416__$3 = cljs.core.next(seq29416__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29417,G__29418,G__29419,seq29416__$3);
});

/**
 * Returns a lazy-seq of the keys that exist in both m1 and m2
 */
loom.alg_generic.shared_keys = (function loom$alg_generic$shared_keys(m1,m2){
while(true){
if((cljs.core.count(m2) < cljs.core.count(m1))){
var G__30343 = m2;
var G__30344 = m1;
m1 = G__30343;
m2 = G__30344;
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
var iter__4523__auto__ = (function loom$alg_generic$reverse_edges_$_iter__29463(s__29464){
return (new cljs.core.LazySeq(null,(function (){
var s__29464__$1 = s__29464;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__29464__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var node = cljs.core.first(xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__29464__$1,node,xs__6277__auto__,temp__5720__auto__){
return (function loom$alg_generic$reverse_edges_$_iter__29463_$_iter__29465(s__29466){
return (new cljs.core.LazySeq(null,((function (s__29464__$1,node,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__29466__$1 = s__29466;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__29466__$1);
if(temp__5720__auto____$1){
var s__29466__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__29466__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__29466__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__29468 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__29467 = (0);
while(true){
if((i__29467 < size__4522__auto__)){
var nbr = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__29467);
if((!(cljs.core.contains_QMARK_(coll,nbr)))){
cljs.core.chunk_append(b__29468,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,node], null));

var G__30353 = (i__29467 + (1));
i__29467 = G__30353;
continue;
} else {
var G__30354 = (i__29467 + (1));
i__29467 = G__30354;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29468),loom$alg_generic$reverse_edges_$_iter__29463_$_iter__29465(cljs.core.chunk_rest(s__29466__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29468),null);
}
} else {
var nbr = cljs.core.first(s__29466__$2);
if((!(cljs.core.contains_QMARK_(coll,nbr)))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,node], null),loom$alg_generic$reverse_edges_$_iter__29463_$_iter__29465(cljs.core.rest(s__29466__$2)));
} else {
var G__30358 = cljs.core.rest(s__29466__$2);
s__29466__$1 = G__30358;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__29464__$1,node,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__29464__$1,node,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__((successor_fn.cljs$core$IFn$_invoke$arity$1 ? successor_fn.cljs$core$IFn$_invoke$arity$1(node) : successor_fn.call(null,node))));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,loom$alg_generic$reverse_edges_$_iter__29463(cljs.core.rest(s__29464__$1)));
} else {
var G__30364 = cljs.core.rest(s__29464__$1);
s__29464__$1 = G__30364;
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
var iter__4523__auto__ = (function loom$alg_generic$conj_paths_$_iter__29500(s__29501){
return (new cljs.core.LazySeq(null,(function (){
var s__29501__$1 = s__29501;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__29501__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var n = cljs.core.first(xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__29501__$1,n,xs__6277__auto__,temp__5720__auto__){
return (function loom$alg_generic$conj_paths_$_iter__29500_$_iter__29502(s__29503){
return (new cljs.core.LazySeq(null,((function (s__29501__$1,n,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__29503__$1 = s__29503;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__29503__$1);
if(temp__5720__auto____$1){
var xs__6277__auto____$1 = temp__5720__auto____$1;
var from = cljs.core.first(xs__6277__auto____$1);
var iterys__4519__auto__ = ((function (s__29503__$1,s__29501__$1,from,xs__6277__auto____$1,temp__5720__auto____$1,n,xs__6277__auto__,temp__5720__auto__){
return (function loom$alg_generic$conj_paths_$_iter__29500_$_iter__29502_$_iter__29504(s__29505){
return (new cljs.core.LazySeq(null,((function (s__29503__$1,s__29501__$1,from,xs__6277__auto____$1,temp__5720__auto____$1,n,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__29505__$1 = s__29505;
while(true){
var temp__5720__auto____$2 = cljs.core.seq(s__29505__$1);
if(temp__5720__auto____$2){
var s__29505__$2 = temp__5720__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__29505__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__29505__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__29507 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__29506 = (0);
while(true){
if((i__29506 < size__4522__auto__)){
var to = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__29506);
cljs.core.chunk_append(b__29507,cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(from,to)));

var G__30378 = (i__29506 + (1));
i__29506 = G__30378;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29507),loom$alg_generic$conj_paths_$_iter__29500_$_iter__29502_$_iter__29504(cljs.core.chunk_rest(s__29505__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29507),null);
}
} else {
var to = cljs.core.first(s__29505__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(from,to)),loom$alg_generic$conj_paths_$_iter__29500_$_iter__29502_$_iter__29504(cljs.core.rest(s__29505__$2)));
}
} else {
return null;
}
break;
}
});})(s__29503__$1,s__29501__$1,from,xs__6277__auto____$1,temp__5720__auto____$1,n,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__29503__$1,s__29501__$1,from,xs__6277__auto____$1,temp__5720__auto____$1,n,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,loom.alg_generic.trace_paths(to_map,n))));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,loom$alg_generic$conj_paths_$_iter__29500_$_iter__29502(cljs.core.rest(s__29503__$1)));
} else {
var G__30387 = cljs.core.rest(s__29503__$1);
s__29503__$1 = G__30387;
continue;
}
} else {
return null;
}
break;
}
});})(s__29501__$1,n,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__29501__$1,n,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.reverse,loom.alg_generic.trace_paths(from_map,n))));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,loom$alg_generic$conj_paths_$_iter__29500(cljs.core.rest(s__29501__$1)));
} else {
var G__30393 = cljs.core.rest(s__29501__$1);
s__29501__$1 = G__30393;
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
return (function (p1__29547_SHARP_){
return cljs.core.contains_QMARK_(coll,p1__29547_SHARP_);
});})(find_succs,find_preds))
,q));
});})(find_succs,find_preds))
;
var map_set_pairs = ((function (find_succs,find_preds,overlaps){
return (function (map,pairs){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (find_succs,find_preds,overlaps){
return (function (map__$1,p__29553){
var vec__29560 = p__29553;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29560,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29560,(1),null);
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
var G__30438 = outgoing__$1;
var G__30439 = incoming;
var G__30440 = q1__$1;
var G__30441 = q2;
outgoing = G__30438;
incoming = G__30439;
q1 = G__30440;
q2 = G__30441;
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
var G__30443 = outgoing;
var G__30444 = incoming__$1;
var G__30445 = q1;
var G__30446 = q2__$1;
outgoing = G__30443;
incoming = G__30444;
q1 = G__30445;
q2 = G__30446;
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
var G__29596 = arguments.length;
switch (G__29596) {
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
var step = (function loom$alg_generic$step(p__29618){
var vec__29619 = p__29618;
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29619,(0),null);
var pq = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29619,(1),null);
var temp__5720__auto__ = cljs.core.first(pq);
if(cljs.core.truth_(temp__5720__auto__)){
var vec__29625 = temp__5720__auto__;
var dist_su = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29625,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29625,(1),null);
var u = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29625,(2),null);
var fpq = vec__29625;
return cljs.core.cons((f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(u,state) : f.call(null,u,state)),(new cljs.core.LazySeq(null,((function (vec__29625,dist_su,_,u,fpq,temp__5720__auto__,vec__29619,state,pq){
return (function (){
return loom$alg_generic$step(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__29625,dist_su,_,u,fpq,temp__5720__auto__,vec__29619,state,pq){
return (function (p__29630,v){
var vec__29631 = p__29630;
var state__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29631,(0),null);
var pq__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29631,(1),null);
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
});})(vec__29625,dist_su,_,u,fpq,temp__5720__auto__,vec__29619,state,pq))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(pq,fpq)], null),(successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(u) : successors.call(null,u))));
});})(vec__29625,dist_su,_,u,fpq,temp__5720__auto__,vec__29619,state,pq))
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (span,p__29646){
var vec__29647 = p__29646;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29647,(0),null);
var vec__29650 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29647,(1),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29650,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29650,(1),null);
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
var temp__5718__auto__ = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__29657){
var vec__29659 = p__29657;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29659,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29659,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(end,node);
}),loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$3(successors,dist,start)));
if(cljs.core.truth_(temp__5718__auto__)){
var vec__29663 = temp__5718__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29663,(0),null);
var end_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29663,(1),null);
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
return cljs.core.long$((function (){var G__29694 = (bits / loom.alg_generic.bits_per_long);
return Math.ceil(G__29694);
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
var len__4730__auto___30539 = arguments.length;
var i__4731__auto___30540 = (0);
while(true){
if((i__4731__auto___30540 < len__4730__auto___30539)){
args__4736__auto__.push((arguments[i__4731__auto___30540]));

var G__30543 = (i__4731__auto___30540 + (1));
i__4731__auto___30540 = G__30543;
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
var seq__29723_30550 = cljs.core.seq(cljs.core.rest(bitmaps));
var chunk__29730_30551 = null;
var count__29731_30552 = (0);
var i__29732_30553 = (0);
while(true){
if((i__29732_30553 < count__29731_30552)){
var bitmap_30555 = chunk__29730_30551.cljs$core$IIndexed$_nth$arity$2(null,i__29732_30553);
var seq__29733_30556 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.list,bitmap_30555));
var chunk__29735_30557 = null;
var count__29736_30558 = (0);
var i__29737_30559 = (0);
while(true){
if((i__29737_30559 < count__29736_30558)){
var vec__29816_30561 = chunk__29735_30557.cljs$core$IIndexed$_nth$arity$2(null,i__29737_30559);
var idx_30562 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29816_30561,(0),null);
var value_30563 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29816_30561,(1),null);
var masked_value_30564 = (value_30563 | (new_bitmap[idx_30562]));
(new_bitmap[idx_30562] = masked_value_30564);


var G__30565 = seq__29733_30556;
var G__30566 = chunk__29735_30557;
var G__30567 = count__29736_30558;
var G__30568 = (i__29737_30559 + (1));
seq__29733_30556 = G__30565;
chunk__29735_30557 = G__30566;
count__29736_30558 = G__30567;
i__29737_30559 = G__30568;
continue;
} else {
var temp__5720__auto___30571 = cljs.core.seq(seq__29733_30556);
if(temp__5720__auto___30571){
var seq__29733_30573__$1 = temp__5720__auto___30571;
if(cljs.core.chunked_seq_QMARK_(seq__29733_30573__$1)){
var c__4550__auto___30578 = cljs.core.chunk_first(seq__29733_30573__$1);
var G__30579 = cljs.core.chunk_rest(seq__29733_30573__$1);
var G__30580 = c__4550__auto___30578;
var G__30581 = cljs.core.count(c__4550__auto___30578);
var G__30582 = (0);
seq__29733_30556 = G__30579;
chunk__29735_30557 = G__30580;
count__29736_30558 = G__30581;
i__29737_30559 = G__30582;
continue;
} else {
var vec__29819_30583 = cljs.core.first(seq__29733_30573__$1);
var idx_30584 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29819_30583,(0),null);
var value_30585 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29819_30583,(1),null);
var masked_value_30587 = (value_30585 | (new_bitmap[idx_30584]));
(new_bitmap[idx_30584] = masked_value_30587);


var G__30589 = cljs.core.next(seq__29733_30573__$1);
var G__30590 = null;
var G__30591 = (0);
var G__30592 = (0);
seq__29733_30556 = G__30589;
chunk__29735_30557 = G__30590;
count__29736_30558 = G__30591;
i__29737_30559 = G__30592;
continue;
}
} else {
}
}
break;
}

var G__30593 = seq__29723_30550;
var G__30594 = chunk__29730_30551;
var G__30595 = count__29731_30552;
var G__30596 = (i__29732_30553 + (1));
seq__29723_30550 = G__30593;
chunk__29730_30551 = G__30594;
count__29731_30552 = G__30595;
i__29732_30553 = G__30596;
continue;
} else {
var temp__5720__auto___30598 = cljs.core.seq(seq__29723_30550);
if(temp__5720__auto___30598){
var seq__29723_30599__$1 = temp__5720__auto___30598;
if(cljs.core.chunked_seq_QMARK_(seq__29723_30599__$1)){
var c__4550__auto___30600 = cljs.core.chunk_first(seq__29723_30599__$1);
var G__30601 = cljs.core.chunk_rest(seq__29723_30599__$1);
var G__30602 = c__4550__auto___30600;
var G__30603 = cljs.core.count(c__4550__auto___30600);
var G__30604 = (0);
seq__29723_30550 = G__30601;
chunk__29730_30551 = G__30602;
count__29731_30552 = G__30603;
i__29732_30553 = G__30604;
continue;
} else {
var bitmap_30605 = cljs.core.first(seq__29723_30599__$1);
var seq__29724_30606 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.list,bitmap_30605));
var chunk__29726_30607 = null;
var count__29727_30608 = (0);
var i__29728_30609 = (0);
while(true){
if((i__29728_30609 < count__29727_30608)){
var vec__29835_30611 = chunk__29726_30607.cljs$core$IIndexed$_nth$arity$2(null,i__29728_30609);
var idx_30612 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29835_30611,(0),null);
var value_30613 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29835_30611,(1),null);
var masked_value_30615 = (value_30613 | (new_bitmap[idx_30612]));
(new_bitmap[idx_30612] = masked_value_30615);


var G__30618 = seq__29724_30606;
var G__30619 = chunk__29726_30607;
var G__30620 = count__29727_30608;
var G__30621 = (i__29728_30609 + (1));
seq__29724_30606 = G__30618;
chunk__29726_30607 = G__30619;
count__29727_30608 = G__30620;
i__29728_30609 = G__30621;
continue;
} else {
var temp__5720__auto___30623__$1 = cljs.core.seq(seq__29724_30606);
if(temp__5720__auto___30623__$1){
var seq__29724_30624__$1 = temp__5720__auto___30623__$1;
if(cljs.core.chunked_seq_QMARK_(seq__29724_30624__$1)){
var c__4550__auto___30625 = cljs.core.chunk_first(seq__29724_30624__$1);
var G__30626 = cljs.core.chunk_rest(seq__29724_30624__$1);
var G__30627 = c__4550__auto___30625;
var G__30628 = cljs.core.count(c__4550__auto___30625);
var G__30629 = (0);
seq__29724_30606 = G__30626;
chunk__29726_30607 = G__30627;
count__29727_30608 = G__30628;
i__29728_30609 = G__30629;
continue;
} else {
var vec__29847_30630 = cljs.core.first(seq__29724_30624__$1);
var idx_30631 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29847_30630,(0),null);
var value_30632 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29847_30630,(1),null);
var masked_value_30633 = (value_30632 | (new_bitmap[idx_30631]));
(new_bitmap[idx_30631] = masked_value_30633);


var G__30634 = cljs.core.next(seq__29724_30624__$1);
var G__30635 = null;
var G__30636 = (0);
var G__30637 = (0);
seq__29724_30606 = G__30634;
chunk__29726_30607 = G__30635;
count__29727_30608 = G__30636;
i__29728_30609 = G__30637;
continue;
}
} else {
}
}
break;
}

var G__30640 = cljs.core.next(seq__29723_30599__$1);
var G__30641 = null;
var G__30642 = (0);
var G__30643 = (0);
seq__29723_30550 = G__30640;
chunk__29730_30551 = G__30641;
count__29731_30552 = G__30642;
i__29732_30553 = G__30643;
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
loom.alg_generic.bm_or.cljs$lang$applyTo = (function (seq29710){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29710));
});

/**
 * Get the indicies of set bits in 'bitmap.
 */
loom.alg_generic.bm_get_indicies = (function loom$alg_generic$bm_get_indicies(bitmap){
var iter__4523__auto__ = (function loom$alg_generic$bm_get_indicies_$_iter__29858(s__29859){
return (new cljs.core.LazySeq(null,(function (){
var s__29859__$1 = s__29859;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__29859__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var chunk = cljs.core.first(xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__29859__$1,chunk,xs__6277__auto__,temp__5720__auto__){
return (function loom$alg_generic$bm_get_indicies_$_iter__29858_$_iter__29860(s__29861){
return (new cljs.core.LazySeq(null,((function (s__29859__$1,chunk,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__29861__$1 = s__29861;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__29861__$1);
if(temp__5720__auto____$1){
var s__29861__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__29861__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__29861__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__29863 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__29862 = (0);
while(true){
if((i__29862 < size__4522__auto__)){
var offset = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__29862);
var idx = ((chunk * loom.alg_generic.bits_per_long) + offset);
if(cljs.core.truth_(loom.alg_generic.bm_get(bitmap,idx))){
cljs.core.chunk_append(b__29863,idx);

var G__30648 = (i__29862 + (1));
i__29862 = G__30648;
continue;
} else {
var G__30650 = (i__29862 + (1));
i__29862 = G__30650;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29863),loom$alg_generic$bm_get_indicies_$_iter__29858_$_iter__29860(cljs.core.chunk_rest(s__29861__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29863),null);
}
} else {
var offset = cljs.core.first(s__29861__$2);
var idx = ((chunk * loom.alg_generic.bits_per_long) + offset);
if(cljs.core.truth_(loom.alg_generic.bm_get(bitmap,idx))){
return cljs.core.cons(idx,loom$alg_generic$bm_get_indicies_$_iter__29858_$_iter__29860(cljs.core.rest(s__29861__$2)));
} else {
var G__30654 = cljs.core.rest(s__29861__$2);
s__29861__$1 = G__30654;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__29859__$1,chunk,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__29859__$1,chunk,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(loom.alg_generic.bits_per_long)));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,loom$alg_generic$bm_get_indicies_$_iter__29858(cljs.core.rest(s__29859__$1)));
} else {
var G__30659 = cljs.core.rest(s__29859__$1);
s__29859__$1 = G__30659;
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

loom.alg_generic.Ancestry.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k29879,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__29915 = k29879;
var G__29915__$1 = (((G__29915 instanceof cljs.core.Keyword))?G__29915.fqn:null);
switch (G__29915__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k29879,else__4388__auto__);

}
});

loom.alg_generic.Ancestry.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__29923){
var vec__29925 = p__29923;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29925,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29925,(1),null);
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

loom.alg_generic.Ancestry.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29878){
var self__ = this;
var G__29878__$1 = this;
return (new cljs.core.RecordIter((0),G__29878__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node->idx","node->idx",152705227),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4243__auto____$1 = (function (){var fexpr__29935 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1116202445 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__29935(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

loom.alg_generic.Ancestry.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this29880,other29881){
var self__ = this;
var this29880__$1 = this;
return (((!((other29881 == null)))) && ((this29880__$1.constructor === other29881.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29880__$1.node__GT_idx,other29881.node__GT_idx)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29880__$1.idx__GT_node,other29881.idx__GT_node)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29880__$1.bitmaps,other29881.bitmaps)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29880__$1.__extmap,other29881.__extmap)));
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

loom.alg_generic.Ancestry.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__29878){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__29948 = cljs.core.keyword_identical_QMARK_;
var expr__29949 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__29951 = new cljs.core.Keyword(null,"node->idx","node->idx",152705227);
var G__29952 = expr__29949;
return (pred__29948.cljs$core$IFn$_invoke$arity$2 ? pred__29948.cljs$core$IFn$_invoke$arity$2(G__29951,G__29952) : pred__29948.call(null,G__29951,G__29952));
})())){
return (new loom.alg_generic.Ancestry(G__29878,self__.idx__GT_node,self__.bitmaps,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__29954 = new cljs.core.Keyword(null,"idx->node","idx->node",1811907175);
var G__29955 = expr__29949;
return (pred__29948.cljs$core$IFn$_invoke$arity$2 ? pred__29948.cljs$core$IFn$_invoke$arity$2(G__29954,G__29955) : pred__29948.call(null,G__29954,G__29955));
})())){
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,G__29878,self__.bitmaps,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__29957 = new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842);
var G__29959 = expr__29949;
return (pred__29948.cljs$core$IFn$_invoke$arity$2 ? pred__29948.cljs$core$IFn$_invoke$arity$2(G__29957,G__29959) : pred__29948.call(null,G__29957,G__29959));
})())){
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,G__29878,self__.__meta,self__.__extmap,null));
} else {
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__29878),null));
}
}
}
});

loom.alg_generic.Ancestry.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"node->idx","node->idx",152705227),self__.node__GT_idx,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),self__.idx__GT_node,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),self__.bitmaps,null))], null),self__.__extmap));
});

loom.alg_generic.Ancestry.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__29878){
var self__ = this;
var this__4384__auto____$1 = this;
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,G__29878,self__.__extmap,self__.__hash));
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
loom.alg_generic.map__GT_Ancestry = (function loom$alg_generic$map__GT_Ancestry(G__29894){
var extmap__4424__auto__ = (function (){var G__29974 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__29894,new cljs.core.Keyword(null,"node->idx","node->idx",152705227),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842)], 0));
if(cljs.core.record_QMARK_(G__29894)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__29974);
} else {
return G__29974;
}
})();
return (new loom.alg_generic.Ancestry(new cljs.core.Keyword(null,"node->idx","node->idx",152705227).cljs$core$IFn$_invoke$arity$1(G__29894),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175).cljs$core$IFn$_invoke$arity$1(G__29894),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842).cljs$core$IFn$_invoke$arity$1(G__29894),null,cljs.core.not_empty(extmap__4424__auto__),null));
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
var len__4730__auto___30756 = arguments.length;
var i__4731__auto___30757 = (0);
while(true){
if((i__4731__auto___30757 < len__4730__auto___30756)){
args__4736__auto__.push((arguments[i__4731__auto___30757]));

var G__30758 = (i__4731__auto___30757 + (1));
i__4731__auto___30757 = G__30758;
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
var map__29995 = ancestry;
var map__29995__$1 = (((((!((map__29995 == null))))?(((((map__29995.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29995.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29995):map__29995);
var node__GT_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29995__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var idx__GT_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29995__$1,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175));
var bitmaps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29995__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
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
loom.alg_generic.ancestry_add.cljs$lang$applyTo = (function (seq29980){
var G__29981 = cljs.core.first(seq29980);
var seq29980__$1 = cljs.core.next(seq29980);
var G__29982 = cljs.core.first(seq29980__$1);
var seq29980__$2 = cljs.core.next(seq29980__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29981,G__29982,seq29980__$2);
});

/**
 * Finds if the 'parenter node is an ancestor of 'childer node for the given
 *   'ancestry cache.
 */
loom.alg_generic.ancestor_QMARK_ = (function loom$alg_generic$ancestor_QMARK_(ancestry,childer,parenter){
var map__30023 = ancestry;
var map__30023__$1 = (((((!((map__30023 == null))))?(((((map__30023.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30023.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30023):map__30023);
var node__GT_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30023__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var bitmaps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30023__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
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
var map__30030 = ancestry;
var map__30030__$1 = (((((!((map__30030 == null))))?(((((map__30030.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30030.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30030):map__30030);
var node__GT_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30030__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var idx__GT_node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30030__$1,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175));
var bitmaps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30030__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
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
