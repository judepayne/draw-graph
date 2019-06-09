// Compiled by ClojureScript 1.10.520 {}
goog.provide('loom.alg_generic');
goog.require('cljs.core');
/**
 * Using a map of nodes-to-preds, traces a node's family tree back to the
 *   source. Cycles are not accounted for.
 */
loom.alg_generic.trace_path = (function loom$alg_generic$trace_path(preds,node){
return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,preds,node));
});
/**
 * Returns a lazy seq of all non-looping path vectors starting with
 *   [<start-node>]
 */
loom.alg_generic.paths = (function loom$alg_generic$paths(preds,path){
var this_node = cljs.core.peek.call(null,path);
return cljs.core.cons.call(null,path,cljs.core.mapcat.call(null,((function (this_node){
return (function (p1__16054_SHARP_){
return loom.alg_generic.paths.call(null,preds,cljs.core.conj.call(null,path,p1__16054_SHARP_));
});})(this_node))
,cljs.core.filter.call(null,((function (this_node){
return (function (p1__16053_SHARP_){
return cljs.core.not_any_QMARK_.call(null,((function (this_node){
return (function (edge){
return cljs.core._EQ_.call(null,edge,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this_node,p1__16053_SHARP_], null));
});})(this_node))
,cljs.core.partition.call(null,(2),(1),path));
});})(this_node))
,preds.call(null,this_node))));
});
/**
 * Given a function and a starting node, returns all possible paths
 *   back to source. Cycles are not accounted for.
 */
loom.alg_generic.trace_paths = (function loom$alg_generic$trace_paths(preds,start){
return cljs.core.remove.call(null,(function (p1__16055_SHARP_){
return preds.call(null,cljs.core.peek.call(null,p1__16055_SHARP_));
}),loom.alg_generic.paths.call(null,preds,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null)));
});
/**
 * Converts a map of the form {node predecessor} to a spanning tree of the
 *   form {node [successors]}
 */
loom.alg_generic.preds__GT_span = (function loom$alg_generic$preds__GT_span(preds){
return cljs.core.reduce.call(null,(function (span,p__16056){
var vec__16057 = p__16056;
var n = cljs.core.nth.call(null,vec__16057,(0),null);
var p = cljs.core.nth.call(null,vec__16057,(1),null);
if(cljs.core.truth_(p)){
return cljs.core.assoc.call(null,span,p,cljs.core.conj.call(null,span.call(null,p,cljs.core.PersistentVector.EMPTY),n));
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
var len__4730__auto___16066 = arguments.length;
var i__4731__auto___16067 = (0);
while(true){
if((i__4731__auto___16067 < len__4730__auto___16066)){
args__4736__auto__.push((arguments[i__4731__auto___16067]));

var G__16068 = (i__4731__auto___16067 + (1));
i__4731__auto___16067 = G__16068;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.pre_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__16063){
var map__16064 = p__16063;
var map__16064__$1 = (((((!((map__16064 == null))))?(((((map__16064.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16064.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16064):map__16064);
var seen = cljs.core.get.call(null,map__16064__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var step = ((function (map__16064,map__16064__$1,seen){
return (function loom$alg_generic$step(stack,seen__$1){
var temp__5720__auto__ = cljs.core.peek.call(null,stack);
if(cljs.core.truth_(temp__5720__auto__)){
var node = temp__5720__auto__;
if(cljs.core.contains_QMARK_.call(null,seen__$1,node)){
return loom$alg_generic$step.call(null,cljs.core.pop.call(null,stack),seen__$1);
} else {
var seen__$2 = cljs.core.conj.call(null,seen__$1,node);
var nbrs = cljs.core.remove.call(null,seen__$2,successors.call(null,node));
return (new cljs.core.LazySeq(null,((function (seen__$2,nbrs,node,temp__5720__auto__,map__16064,map__16064__$1,seen){
return (function (){
return cljs.core.cons.call(null,node,loom$alg_generic$step.call(null,cljs.core.into.call(null,cljs.core.pop.call(null,stack),nbrs),seen__$2));
});})(seen__$2,nbrs,node,temp__5720__auto__,map__16064,map__16064__$1,seen))
,null,null));
}
} else {
return null;
}
});})(map__16064,map__16064__$1,seen))
;
return step.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null),seen);
});

loom.alg_generic.pre_traverse.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.pre_traverse.cljs$lang$applyTo = (function (seq16060){
var G__16061 = cljs.core.first.call(null,seq16060);
var seq16060__$1 = cljs.core.next.call(null,seq16060);
var G__16062 = cljs.core.first.call(null,seq16060__$1);
var seq16060__$2 = cljs.core.next.call(null,seq16060__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16061,G__16062,seq16060__$2);
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
var len__4730__auto___16075 = arguments.length;
var i__4731__auto___16076 = (0);
while(true){
if((i__4731__auto___16076 < len__4730__auto___16075)){
args__4736__auto__.push((arguments[i__4731__auto___16076]));

var G__16077 = (i__4731__auto___16076 + (1));
i__4731__auto___16076 = G__16077;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.pre_edge_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__16072){
var map__16073 = p__16072;
var map__16073__$1 = (((((!((map__16073 == null))))?(((((map__16073.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16073.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16073):map__16073);
var seen = cljs.core.get.call(null,map__16073__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var step = ((function (map__16073,map__16073__$1,seen){
return (function loom$alg_generic$step(successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1){
while(true){
var temp__5718__auto__ = cljs.core.first.call(null,nbrs);
if(cljs.core.truth_(temp__5718__auto__)){
var nbr = temp__5718__auto__;
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null),(new cljs.core.LazySeq(null,((function (successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1,nbr,temp__5718__auto__,map__16073,map__16073__$1,seen){
return (function (){
var seen__$2 = cljs.core.conj.call(null,seen__$1,start__$1);
if(cljs.core.truth_(seen__$2.call(null,nbr))){
return loom$alg_generic$step.call(null,successors__$1,start__$1,cljs.core.next.call(null,nbrs),stack,nbrstack,seen__$2);
} else {
return loom$alg_generic$step.call(null,successors__$1,nbr,successors__$1.call(null,nbr),cljs.core.conj.call(null,stack,start__$1),cljs.core.conj.call(null,nbrstack,cljs.core.next.call(null,nbrs)),seen__$2);
}
});})(successors__$1,start__$1,nbrs,stack,nbrstack,seen__$1,nbr,temp__5718__auto__,map__16073,map__16073__$1,seen))
,null,null)));
} else {
var temp__5720__auto__ = cljs.core.peek.call(null,stack);
if(cljs.core.truth_(temp__5720__auto__)){
var parent = temp__5720__auto__;
var G__16078 = successors__$1;
var G__16079 = parent;
var G__16080 = cljs.core.peek.call(null,nbrstack);
var G__16081 = cljs.core.pop.call(null,stack);
var G__16082 = cljs.core.pop.call(null,nbrstack);
var G__16083 = cljs.core.conj.call(null,seen__$1,start__$1);
successors__$1 = G__16078;
start__$1 = G__16079;
nbrs = G__16080;
stack = G__16081;
nbrstack = G__16082;
seen__$1 = G__16083;
continue;
} else {
return null;
}
}
break;
}
});})(map__16073,map__16073__$1,seen))
;
if(cljs.core.truth_(seen.call(null,start))){
return null;
} else {
return step.call(null,successors,start,successors.call(null,start),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.conj.call(null,seen,start));
}
});

loom.alg_generic.pre_edge_traverse.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.pre_edge_traverse.cljs$lang$applyTo = (function (seq16069){
var G__16070 = cljs.core.first.call(null,seq16069);
var seq16069__$1 = cljs.core.next.call(null,seq16069);
var G__16071 = cljs.core.first.call(null,seq16069__$1);
var seq16069__$2 = cljs.core.next.call(null,seq16069__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16070,G__16071,seq16069__$2);
});

/**
 * Returns a depth-first spanning tree of the form {node [successors]}
 */
loom.alg_generic.pre_span = (function loom$alg_generic$pre_span(var_args){
var args__4736__auto__ = [];
var len__4730__auto___16090 = arguments.length;
var i__4731__auto___16091 = (0);
while(true){
if((i__4731__auto___16091 < len__4730__auto___16090)){
args__4736__auto__.push((arguments[i__4731__auto___16091]));

var G__16092 = (i__4731__auto___16091 + (1));
i__4731__auto___16091 = G__16092;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.pre_span.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__16087){
var map__16088 = p__16087;
var map__16088__$1 = (((((!((map__16088 == null))))?(((((map__16088.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16088.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16088):map__16088);
var seen = cljs.core.get.call(null,map__16088__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.call(null,map__16088__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
var seen__$1 = seen;
var preds = cljs.core.PersistentArrayMap.createAsIfByAssoc([start,null]);
var stack = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null);
while(true){
if(cljs.core.empty_QMARK_.call(null,stack)){
if(cljs.core.truth_(return_seen)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [loom.alg_generic.preds__GT_span.call(null,preds),seen__$1], null);
} else {
return loom.alg_generic.preds__GT_span.call(null,preds);
}
} else {
var v = cljs.core.peek.call(null,stack);
var seen__$2 = cljs.core.conj.call(null,seen__$1,v);
var temp__5718__auto__ = cljs.core.first.call(null,cljs.core.remove.call(null,seen__$2,successors.call(null,v)));
if(cljs.core.truth_(temp__5718__auto__)){
var u = temp__5718__auto__;
var G__16093 = seen__$2;
var G__16094 = cljs.core.assoc.call(null,preds,u,v);
var G__16095 = cljs.core.conj.call(null,stack,u);
seen__$1 = G__16093;
preds = G__16094;
stack = G__16095;
continue;
} else {
var G__16096 = seen__$2;
var G__16097 = preds;
var G__16098 = cljs.core.pop.call(null,stack);
seen__$1 = G__16096;
preds = G__16097;
stack = G__16098;
continue;
}
}
break;
}
});

loom.alg_generic.pre_span.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.pre_span.cljs$lang$applyTo = (function (seq16084){
var G__16085 = cljs.core.first.call(null,seq16084);
var seq16084__$1 = cljs.core.next.call(null,seq16084);
var G__16086 = cljs.core.first.call(null,seq16084__$1);
var seq16084__$2 = cljs.core.next.call(null,seq16084__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16085,G__16086,seq16084__$2);
});

/**
 * Traverses a graph depth-first postorder from start, successors
 *   being a function that returns adjacent nodes. Returns a vector
 */
loom.alg_generic.post_traverse = (function loom$alg_generic$post_traverse(var_args){
var args__4736__auto__ = [];
var len__4730__auto___16105 = arguments.length;
var i__4731__auto___16106 = (0);
while(true){
if((i__4731__auto___16106 < len__4730__auto___16105)){
args__4736__auto__.push((arguments[i__4731__auto___16106]));

var G__16107 = (i__4731__auto___16106 + (1));
i__4731__auto___16106 = G__16107;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.post_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__16102){
var map__16103 = p__16102;
var map__16103__$1 = (((((!((map__16103 == null))))?(((((map__16103.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16103.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16103):map__16103);
var seen = cljs.core.get.call(null,map__16103__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.call(null,map__16103__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
var seen__$1 = seen;
var result = cljs.core.PersistentVector.EMPTY;
var stack = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null);
while(true){
if(cljs.core.empty_QMARK_.call(null,stack)){
if(cljs.core.truth_(return_seen)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,seen__$1], null);
} else {
return result;
}
} else {
var v = cljs.core.peek.call(null,stack);
var seen__$2 = cljs.core.conj.call(null,seen__$1,v);
var nbrs = cljs.core.remove.call(null,seen__$2,successors.call(null,v));
if(cljs.core.empty_QMARK_.call(null,nbrs)){
var G__16108 = seen__$2;
var G__16109 = cljs.core.conj.call(null,result,v);
var G__16110 = cljs.core.pop.call(null,stack);
seen__$1 = G__16108;
result = G__16109;
stack = G__16110;
continue;
} else {
var G__16111 = seen__$2;
var G__16112 = result;
var G__16113 = cljs.core.conj.call(null,stack,cljs.core.first.call(null,nbrs));
seen__$1 = G__16111;
result = G__16112;
stack = G__16113;
continue;
}
}
break;
}
});

loom.alg_generic.post_traverse.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.post_traverse.cljs$lang$applyTo = (function (seq16099){
var G__16100 = cljs.core.first.call(null,seq16099);
var seq16099__$1 = cljs.core.next.call(null,seq16099);
var G__16101 = cljs.core.first.call(null,seq16099__$1);
var seq16099__$2 = cljs.core.next.call(null,seq16099__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16100,G__16101,seq16099__$2);
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
var len__4730__auto___16120 = arguments.length;
var i__4731__auto___16121 = (0);
while(true){
if((i__4731__auto___16121 < len__4730__auto___16120)){
args__4736__auto__.push((arguments[i__4731__auto___16121]));

var G__16122 = (i__4731__auto___16121 + (1));
i__4731__auto___16121 = G__16122;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.post_edge_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__16117){
var map__16118 = p__16117;
var map__16118__$1 = (((((!((map__16118 == null))))?(((((map__16118.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16118.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16118):map__16118);
var seen = cljs.core.get.call(null,map__16118__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var return_seen = cljs.core.get.call(null,map__16118__$1,new cljs.core.Keyword(null,"return-seen","return-seen",308792727));
if(cljs.core.truth_(seen.call(null,start))){
if(cljs.core.truth_(return_seen)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,seen], null);
} else {
return null;
}
} else {
var start__$1 = start;
var nbrs = successors.call(null,start__$1);
var stack = cljs.core.PersistentVector.EMPTY;
var nbrstack = cljs.core.PersistentVector.EMPTY;
var seen__$1 = seen;
var edges = cljs.core.List.EMPTY;
while(true){
var seen__$2 = cljs.core.conj.call(null,seen__$1,start__$1);
var temp__5718__auto__ = cljs.core.first.call(null,nbrs);
if(cljs.core.truth_(temp__5718__auto__)){
var nbr = temp__5718__auto__;
if(cljs.core.truth_(seen__$2.call(null,nbr))){
var G__16123 = start__$1;
var G__16124 = cljs.core.next.call(null,nbrs);
var G__16125 = stack;
var G__16126 = nbrstack;
var G__16127 = seen__$2;
var G__16128 = cljs.core.conj.call(null,edges,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null));
start__$1 = G__16123;
nbrs = G__16124;
stack = G__16125;
nbrstack = G__16126;
seen__$1 = G__16127;
edges = G__16128;
continue;
} else {
var G__16129 = nbr;
var G__16130 = successors.call(null,nbr);
var G__16131 = cljs.core.conj.call(null,stack,start__$1);
var G__16132 = cljs.core.conj.call(null,nbrstack,cljs.core.next.call(null,nbrs));
var G__16133 = seen__$2;
var G__16134 = cljs.core.conj.call(null,edges,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,nbr], null));
start__$1 = G__16129;
nbrs = G__16130;
stack = G__16131;
nbrstack = G__16132;
seen__$1 = G__16133;
edges = G__16134;
continue;
}
} else {
var temp__5718__auto____$1 = cljs.core.peek.call(null,stack);
if(cljs.core.truth_(temp__5718__auto____$1)){
var parent = temp__5718__auto____$1;
var G__16135 = parent;
var G__16136 = cljs.core.peek.call(null,nbrstack);
var G__16137 = cljs.core.pop.call(null,stack);
var G__16138 = cljs.core.pop.call(null,nbrstack);
var G__16139 = seen__$2;
var G__16140 = edges;
start__$1 = G__16135;
nbrs = G__16136;
stack = G__16137;
nbrstack = G__16138;
seen__$1 = G__16139;
edges = G__16140;
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
loom.alg_generic.post_edge_traverse.cljs$lang$applyTo = (function (seq16114){
var G__16115 = cljs.core.first.call(null,seq16114);
var seq16114__$1 = cljs.core.next.call(null,seq16114);
var G__16116 = cljs.core.first.call(null,seq16114__$1);
var seq16114__$2 = cljs.core.next.call(null,seq16114__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16115,G__16116,seq16114__$2);
});

/**
 * Topological sort of a component of a (presumably) directed graph.
 *   Returns nil if the graph contains any cycles. See loom.alg/topsort
 *   for a complete topological sort
 */
loom.alg_generic.topsort_component = (function loom$alg_generic$topsort_component(var_args){
var G__16142 = arguments.length;
switch (G__16142) {
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
return loom.alg_generic.topsort_component.call(null,successors,start,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentHashSet.EMPTY);
});

loom.alg_generic.topsort_component.cljs$core$IFn$_invoke$arity$4 = (function (successors,start,seen,explored){
var seen__$1 = seen;
var explored__$1 = explored;
var result = cljs.core.List.EMPTY;
var stack = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null);
while(true){
if(cljs.core.empty_QMARK_.call(null,stack)){
return result;
} else {
var v = cljs.core.peek.call(null,stack);
var seen__$2 = cljs.core.conj.call(null,seen__$1,v);
var us = cljs.core.remove.call(null,explored__$1,successors.call(null,v));
if(cljs.core.seq.call(null,us)){
if(cljs.core.truth_(cljs.core.some.call(null,seen__$2,us))){
return null;
} else {
var G__16144 = seen__$2;
var G__16145 = explored__$1;
var G__16146 = result;
var G__16147 = cljs.core.conj.call(null,stack,cljs.core.first.call(null,us));
seen__$1 = G__16144;
explored__$1 = G__16145;
result = G__16146;
stack = G__16147;
continue;
}
} else {
var G__16148 = seen__$2;
var G__16149 = cljs.core.conj.call(null,explored__$1,v);
var G__16150 = cljs.core.conj.call(null,result,v);
var G__16151 = cljs.core.pop.call(null,stack);
seen__$1 = G__16148;
explored__$1 = G__16149;
result = G__16150;
stack = G__16151;
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
var len__4730__auto___16180 = arguments.length;
var i__4731__auto___16181 = (0);
while(true){
if((i__4731__auto___16181 < len__4730__auto___16180)){
args__4736__auto__.push((arguments[i__4731__auto___16181]));

var G__16182 = (i__4731__auto___16181 + (1));
i__4731__auto___16181 = G__16182;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.bf_traverse.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__16159){
var map__16160 = p__16159;
var map__16160__$1 = (((((!((map__16160 == null))))?(((((map__16160.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16160.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16160):map__16160);
var f = cljs.core.get.call(null,map__16160__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var when = cljs.core.get.call(null,map__16160__$1,new cljs.core.Keyword(null,"when","when",-576417306));
var seen = cljs.core.get.call(null,map__16160__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
var f__$1 = (function (){var or__4131__auto__ = f;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return ((function (or__4131__auto__,map__16160,map__16160__$1,f,when,seen){
return (function (n,p,d){
return n;
});
;})(or__4131__auto__,map__16160,map__16160__$1,f,when,seen))
}
})();
var nbr_pred = (function (){var or__4131__auto__ = when;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.constantly.call(null,true);
}
})();
var step = ((function (f__$1,nbr_pred,map__16160,map__16160__$1,f,when,seen){
return (function loom$alg_generic$step(queue,preds){
var temp__5720__auto__ = cljs.core.peek.call(null,queue);
if(cljs.core.truth_(temp__5720__auto__)){
var vec__16169 = temp__5720__auto__;
var node = cljs.core.nth.call(null,vec__16169,(0),null);
var depth = cljs.core.nth.call(null,vec__16169,(1),null);
return cljs.core.cons.call(null,f__$1.call(null,node,preds,depth),(new cljs.core.LazySeq(null,((function (vec__16169,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__16160,map__16160__$1,f,when,seen){
return (function (){
var nbrs = cljs.core.filter.call(null,((function (vec__16169,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__16160,map__16160__$1,f,when,seen){
return (function (p1__16153_SHARP_){
return nbr_pred.call(null,p1__16153_SHARP_,node,(depth + (1)));
});})(vec__16169,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__16160,map__16160__$1,f,when,seen))
,cljs.core.remove.call(null,((function (vec__16169,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__16160,map__16160__$1,f,when,seen){
return (function (p1__16152_SHARP_){
return cljs.core.contains_QMARK_.call(null,preds,p1__16152_SHARP_);
});})(vec__16169,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__16160,map__16160__$1,f,when,seen))
,successors.call(null,node)));
return loom$alg_generic$step.call(null,cljs.core.into.call(null,cljs.core.pop.call(null,queue),(function (){var iter__4523__auto__ = ((function (nbrs,vec__16169,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__16160,map__16160__$1,f,when,seen){
return (function loom$alg_generic$step_$_iter__16172(s__16173){
return (new cljs.core.LazySeq(null,((function (nbrs,vec__16169,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__16160,map__16160__$1,f,when,seen){
return (function (){
var s__16173__$1 = s__16173;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__16173__$1);
if(temp__5720__auto____$1){
var s__16173__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16173__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__16173__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__16175 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__16174 = (0);
while(true){
if((i__16174 < size__4522__auto__)){
var nbr = cljs.core._nth.call(null,c__4521__auto__,i__16174);
cljs.core.chunk_append.call(null,b__16175,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,(depth + (1))], null));

var G__16183 = (i__16174 + (1));
i__16174 = G__16183;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16175),loom$alg_generic$step_$_iter__16172.call(null,cljs.core.chunk_rest.call(null,s__16173__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16175),null);
}
} else {
var nbr = cljs.core.first.call(null,s__16173__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,(depth + (1))], null),loom$alg_generic$step_$_iter__16172.call(null,cljs.core.rest.call(null,s__16173__$2)));
}
} else {
return null;
}
break;
}
});})(nbrs,vec__16169,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__16160,map__16160__$1,f,when,seen))
,null,null));
});})(nbrs,vec__16169,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__16160,map__16160__$1,f,when,seen))
;
return iter__4523__auto__.call(null,nbrs);
})()),cljs.core.reduce.call(null,((function (nbrs,vec__16169,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__16160,map__16160__$1,f,when,seen){
return (function (p1__16154_SHARP_,p2__16155_SHARP_){
return cljs.core.assoc.call(null,p1__16154_SHARP_,p2__16155_SHARP_,node);
});})(nbrs,vec__16169,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__16160,map__16160__$1,f,when,seen))
,preds,nbrs));
});})(vec__16169,node,depth,temp__5720__auto__,f__$1,nbr_pred,map__16160,map__16160__$1,f,when,seen))
,null,null)));
} else {
return null;
}
});})(f__$1,nbr_pred,map__16160,map__16160__$1,f,when,seen))
;
return step.call(null,cljs.core.conj.call(null,cljs.core.PersistentQueue.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,(0)], null)),((cljs.core.map_QMARK_.call(null,seen))?cljs.core.assoc.call(null,seen,start,null):cljs.core.into.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([start,null]),(function (){var iter__4523__auto__ = ((function (f__$1,nbr_pred,map__16160,map__16160__$1,f,when,seen){
return (function loom$alg_generic$iter__16176(s__16177){
return (new cljs.core.LazySeq(null,((function (f__$1,nbr_pred,map__16160,map__16160__$1,f,when,seen){
return (function (){
var s__16177__$1 = s__16177;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__16177__$1);
if(temp__5720__auto__){
var s__16177__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16177__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__16177__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__16179 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__16178 = (0);
while(true){
if((i__16178 < size__4522__auto__)){
var s = cljs.core._nth.call(null,c__4521__auto__,i__16178);
cljs.core.chunk_append.call(null,b__16179,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,null], null));

var G__16184 = (i__16178 + (1));
i__16178 = G__16184;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16179),loom$alg_generic$iter__16176.call(null,cljs.core.chunk_rest.call(null,s__16177__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16179),null);
}
} else {
var s = cljs.core.first.call(null,s__16177__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,null], null),loom$alg_generic$iter__16176.call(null,cljs.core.rest.call(null,s__16177__$2)));
}
} else {
return null;
}
break;
}
});})(f__$1,nbr_pred,map__16160,map__16160__$1,f,when,seen))
,null,null));
});})(f__$1,nbr_pred,map__16160,map__16160__$1,f,when,seen))
;
return iter__4523__auto__.call(null,seen);
})())));
});

loom.alg_generic.bf_traverse.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.bf_traverse.cljs$lang$applyTo = (function (seq16156){
var G__16157 = cljs.core.first.call(null,seq16156);
var seq16156__$1 = cljs.core.next.call(null,seq16156);
var G__16158 = cljs.core.first.call(null,seq16156__$1);
var seq16156__$2 = cljs.core.next.call(null,seq16156__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16157,G__16158,seq16156__$2);
});

/**
 * Return a breadth-first spanning tree of the form {node
 *   [successors]}
 */
loom.alg_generic.bf_span = (function loom$alg_generic$bf_span(var_args){
var args__4736__auto__ = [];
var len__4730__auto___16191 = arguments.length;
var i__4731__auto___16192 = (0);
while(true){
if((i__4731__auto___16192 < len__4730__auto___16191)){
args__4736__auto__.push((arguments[i__4731__auto___16192]));

var G__16193 = (i__4731__auto___16192 + (1));
i__4731__auto___16192 = G__16193;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.bf_span.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,p__16188){
var map__16189 = p__16188;
var map__16189__$1 = (((((!((map__16189 == null))))?(((((map__16189.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16189.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16189):map__16189);
var seen = cljs.core.get.call(null,map__16189__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
return loom.alg_generic.preds__GT_span.call(null,cljs.core.last.call(null,loom.alg_generic.bf_traverse.call(null,successors,start,new cljs.core.Keyword(null,"f","f",-1597136552),((function (map__16189,map__16189__$1,seen){
return (function (_,pm,___$1){
return pm;
});})(map__16189,map__16189__$1,seen))
,new cljs.core.Keyword(null,"seen","seen",-518999789),seen)));
});

loom.alg_generic.bf_span.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.bf_span.cljs$lang$applyTo = (function (seq16185){
var G__16186 = cljs.core.first.call(null,seq16185);
var seq16185__$1 = cljs.core.next.call(null,seq16185);
var G__16187 = cljs.core.first.call(null,seq16185__$1);
var seq16185__$2 = cljs.core.next.call(null,seq16185__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16186,G__16187,seq16185__$2);
});

/**
 * Returns a path from start to end with the fewest hops (i.e. irrespective
 *   of edge weights), successors being a function that returns adjacent nodes
 */
loom.alg_generic.bf_path = (function loom$alg_generic$bf_path(var_args){
var args__4736__auto__ = [];
var len__4730__auto___16205 = arguments.length;
var i__4731__auto___16206 = (0);
while(true){
if((i__4731__auto___16206 < len__4730__auto___16205)){
args__4736__auto__.push((arguments[i__4731__auto___16206]));

var G__16207 = (i__4731__auto___16206 + (1));
i__4731__auto___16206 = G__16207;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

loom.alg_generic.bf_path.cljs$core$IFn$_invoke$arity$variadic = (function (successors,start,end,p__16198){
var map__16199 = p__16198;
var map__16199__$1 = (((((!((map__16199 == null))))?(((((map__16199.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16199.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16199):map__16199);
var opts = map__16199__$1;
var opts__$1 = cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.vector], null));
var temp__5720__auto__ = cljs.core.some.call(null,((function (opts__$1,map__16199,map__16199__$1,opts){
return (function (p__16201){
var vec__16202 = p__16201;
var _ = cljs.core.nth.call(null,vec__16202,(0),null);
var pm = cljs.core.nth.call(null,vec__16202,(1),null);
var ___$1 = cljs.core.nth.call(null,vec__16202,(2),null);
if(cljs.core.truth_(pm.call(null,end))){
return pm;
} else {
return null;
}
});})(opts__$1,map__16199,map__16199__$1,opts))
,cljs.core.apply.call(null,loom.alg_generic.bf_traverse,successors,start,cljs.core.apply.call(null,cljs.core.concat,opts__$1)));
if(cljs.core.truth_(temp__5720__auto__)){
var preds = temp__5720__auto__;
return cljs.core.reverse.call(null,loom.alg_generic.trace_path.call(null,preds,end));
} else {
return null;
}
});

loom.alg_generic.bf_path.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
loom.alg_generic.bf_path.cljs$lang$applyTo = (function (seq16194){
var G__16195 = cljs.core.first.call(null,seq16194);
var seq16194__$1 = cljs.core.next.call(null,seq16194);
var G__16196 = cljs.core.first.call(null,seq16194__$1);
var seq16194__$2 = cljs.core.next.call(null,seq16194__$1);
var G__16197 = cljs.core.first.call(null,seq16194__$2);
var seq16194__$3 = cljs.core.next.call(null,seq16194__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16195,G__16196,G__16197,seq16194__$3);
});

/**
 * Returns a lazy-seq of the keys that exist in both m1 and m2
 */
loom.alg_generic.shared_keys = (function loom$alg_generic$shared_keys(m1,m2){
while(true){
if((cljs.core.count.call(null,m2) < cljs.core.count.call(null,m1))){
var G__16208 = m2;
var G__16209 = m1;
m1 = G__16208;
m2 = G__16209;
continue;
} else {
return cljs.core.filter.call(null,cljs.core.partial.call(null,cljs.core.contains_QMARK_,m2),cljs.core.keys.call(null,m1));
}
break;
}
});
loom.alg_generic.bf_path_bi = (function loom$alg_generic$bf_path_bi(outgoing,predecessors,start,end){
throw (new Error("Unsupported operation `bf-path-bi`"));
});
loom.alg_generic.reverse_edges = (function loom$alg_generic$reverse_edges(successor_fn,nodes,coll){
var iter__4523__auto__ = (function loom$alg_generic$reverse_edges_$_iter__16211(s__16212){
return (new cljs.core.LazySeq(null,(function (){
var s__16212__$1 = s__16212;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__16212__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var node = cljs.core.first.call(null,xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__16212__$1,node,xs__6277__auto__,temp__5720__auto__){
return (function loom$alg_generic$reverse_edges_$_iter__16211_$_iter__16213(s__16214){
return (new cljs.core.LazySeq(null,((function (s__16212__$1,node,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__16214__$1 = s__16214;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__16214__$1);
if(temp__5720__auto____$1){
var s__16214__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16214__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__16214__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__16216 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__16215 = (0);
while(true){
if((i__16215 < size__4522__auto__)){
var nbr = cljs.core._nth.call(null,c__4521__auto__,i__16215);
if((!(cljs.core.contains_QMARK_.call(null,coll,nbr)))){
cljs.core.chunk_append.call(null,b__16216,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,node], null));

var G__16217 = (i__16215 + (1));
i__16215 = G__16217;
continue;
} else {
var G__16218 = (i__16215 + (1));
i__16215 = G__16218;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16216),loom$alg_generic$reverse_edges_$_iter__16211_$_iter__16213.call(null,cljs.core.chunk_rest.call(null,s__16214__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16216),null);
}
} else {
var nbr = cljs.core.first.call(null,s__16214__$2);
if((!(cljs.core.contains_QMARK_.call(null,coll,nbr)))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nbr,node], null),loom$alg_generic$reverse_edges_$_iter__16211_$_iter__16213.call(null,cljs.core.rest.call(null,s__16214__$2)));
} else {
var G__16219 = cljs.core.rest.call(null,s__16214__$2);
s__16214__$1 = G__16219;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__16212__$1,node,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__16212__$1,node,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,successor_fn.call(null,node)));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,loom$alg_generic$reverse_edges_$_iter__16211.call(null,cljs.core.rest.call(null,s__16212__$1)));
} else {
var G__16220 = cljs.core.rest.call(null,s__16212__$1);
s__16212__$1 = G__16220;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,nodes);
});
loom.alg_generic.conj_paths = (function loom$alg_generic$conj_paths(from_map,to_map,matches){
var iter__4523__auto__ = (function loom$alg_generic$conj_paths_$_iter__16221(s__16222){
return (new cljs.core.LazySeq(null,(function (){
var s__16222__$1 = s__16222;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__16222__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var n = cljs.core.first.call(null,xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__16222__$1,n,xs__6277__auto__,temp__5720__auto__){
return (function loom$alg_generic$conj_paths_$_iter__16221_$_iter__16223(s__16224){
return (new cljs.core.LazySeq(null,((function (s__16222__$1,n,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__16224__$1 = s__16224;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__16224__$1);
if(temp__5720__auto____$1){
var xs__6277__auto____$1 = temp__5720__auto____$1;
var from = cljs.core.first.call(null,xs__6277__auto____$1);
var iterys__4519__auto__ = ((function (s__16224__$1,s__16222__$1,from,xs__6277__auto____$1,temp__5720__auto____$1,n,xs__6277__auto__,temp__5720__auto__){
return (function loom$alg_generic$conj_paths_$_iter__16221_$_iter__16223_$_iter__16225(s__16226){
return (new cljs.core.LazySeq(null,((function (s__16224__$1,s__16222__$1,from,xs__6277__auto____$1,temp__5720__auto____$1,n,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__16226__$1 = s__16226;
while(true){
var temp__5720__auto____$2 = cljs.core.seq.call(null,s__16226__$1);
if(temp__5720__auto____$2){
var s__16226__$2 = temp__5720__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16226__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__16226__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__16228 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__16227 = (0);
while(true){
if((i__16227 < size__4522__auto__)){
var to = cljs.core._nth.call(null,c__4521__auto__,i__16227);
cljs.core.chunk_append.call(null,b__16228,cljs.core.vec.call(null,cljs.core.concat.call(null,from,to)));

var G__16229 = (i__16227 + (1));
i__16227 = G__16229;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16228),loom$alg_generic$conj_paths_$_iter__16221_$_iter__16223_$_iter__16225.call(null,cljs.core.chunk_rest.call(null,s__16226__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16228),null);
}
} else {
var to = cljs.core.first.call(null,s__16226__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.concat.call(null,from,to)),loom$alg_generic$conj_paths_$_iter__16221_$_iter__16223_$_iter__16225.call(null,cljs.core.rest.call(null,s__16226__$2)));
}
} else {
return null;
}
break;
}
});})(s__16224__$1,s__16222__$1,from,xs__6277__auto____$1,temp__5720__auto____$1,n,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__16224__$1,s__16222__$1,from,xs__6277__auto____$1,temp__5720__auto____$1,n,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,cljs.core.map.call(null,cljs.core.rest,loom.alg_generic.trace_paths.call(null,to_map,n))));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,loom$alg_generic$conj_paths_$_iter__16221_$_iter__16223.call(null,cljs.core.rest.call(null,s__16224__$1)));
} else {
var G__16230 = cljs.core.rest.call(null,s__16224__$1);
s__16224__$1 = G__16230;
continue;
}
} else {
return null;
}
break;
}
});})(s__16222__$1,n,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__16222__$1,n,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,cljs.core.map.call(null,cljs.core.reverse,loom.alg_generic.trace_paths.call(null,from_map,n))));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,loom$alg_generic$conj_paths_$_iter__16221.call(null,cljs.core.rest.call(null,s__16222__$1)));
} else {
var G__16231 = cljs.core.rest.call(null,s__16222__$1);
s__16222__$1 = G__16231;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,matches);
});
/**
 * Using a bidirectional breadth-first search, returns all shortest
 *   paths from start to end; predecessors is called on end and each
 *   preceding node, successors is called on start, etc.
 */
loom.alg_generic.bf_paths_bi = (function loom$alg_generic$bf_paths_bi(successors,predecessors,start,end){
var find_succs = cljs.core.partial.call(null,loom.alg_generic.reverse_edges,successors);
var find_preds = cljs.core.partial.call(null,loom.alg_generic.reverse_edges,predecessors);
var overlaps = ((function (find_succs,find_preds){
return (function (coll,q){
return cljs.core.seq.call(null,cljs.core.filter.call(null,((function (find_succs,find_preds){
return (function (p1__16232_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__16232_SHARP_);
});})(find_succs,find_preds))
,q));
});})(find_succs,find_preds))
;
var map_set_pairs = ((function (find_succs,find_preds,overlaps){
return (function (map,pairs){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (find_succs,find_preds,overlaps){
return (function (map__$1,p__16233){
var vec__16234 = p__16233;
var key = cljs.core.nth.call(null,vec__16234,(0),null);
var val = cljs.core.nth.call(null,vec__16234,(1),null);
return cljs.core.assoc_BANG_.call(null,map__$1,key,cljs.core.conj.call(null,cljs.core.get.call(null,map__$1,key,cljs.core.PersistentHashSet.EMPTY),val));
});})(find_succs,find_preds,overlaps))
,cljs.core.transient$.call(null,map),pairs));
});})(find_succs,find_preds,overlaps))
;
var outgoing = cljs.core.PersistentArrayMap.createAsIfByAssoc([start,null]);
var incoming = cljs.core.PersistentArrayMap.createAsIfByAssoc([end,null]);
var q1 = (new cljs.core.List(null,start,null,(1),null));
var q2 = (new cljs.core.List(null,end,null,(1),null));
while(true){
if(((cljs.core.seq.call(null,q1)) && (cljs.core.seq.call(null,q2)))){
if((cljs.core.count.call(null,q1) <= cljs.core.count.call(null,q2))){
var pairs = find_succs.call(null,q1,outgoing);
var outgoing__$1 = map_set_pairs.call(null,outgoing,pairs);
var q1__$1 = cljs.core.map.call(null,cljs.core.first,pairs);
var temp__5718__auto__ = overlaps.call(null,incoming,q1__$1);
if(temp__5718__auto__){
var all = temp__5718__auto__;
return loom.alg_generic.conj_paths.call(null,outgoing__$1,incoming,cljs.core.set.call(null,all));
} else {
var G__16237 = outgoing__$1;
var G__16238 = incoming;
var G__16239 = q1__$1;
var G__16240 = q2;
outgoing = G__16237;
incoming = G__16238;
q1 = G__16239;
q2 = G__16240;
continue;
}
} else {
var pairs = find_preds.call(null,q2,incoming);
var incoming__$1 = map_set_pairs.call(null,incoming,pairs);
var q2__$1 = cljs.core.map.call(null,cljs.core.first,pairs);
var temp__5718__auto__ = overlaps.call(null,outgoing,q2__$1);
if(temp__5718__auto__){
var all = temp__5718__auto__;
return loom.alg_generic.conj_paths.call(null,outgoing,incoming__$1,cljs.core.set.call(null,all));
} else {
var G__16241 = outgoing;
var G__16242 = incoming__$1;
var G__16243 = q1;
var G__16244 = q2__$1;
outgoing = G__16241;
incoming = G__16242;
q1 = G__16243;
q2 = G__16244;
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
var G__16248 = arguments.length;
switch (G__16248) {
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
return loom.alg_generic.dijkstra_traverse.call(null,successors,dist,start,cljs.core.vector);
});

loom.alg_generic.dijkstra_traverse.cljs$core$IFn$_invoke$arity$4 = (function (successors,dist,start,f){
var step = (function loom$alg_generic$step(p__16260){
var vec__16261 = p__16260;
var state = cljs.core.nth.call(null,vec__16261,(0),null);
var pq = cljs.core.nth.call(null,vec__16261,(1),null);
var temp__5720__auto__ = cljs.core.first.call(null,pq);
if(cljs.core.truth_(temp__5720__auto__)){
var vec__16264 = temp__5720__auto__;
var dist_su = cljs.core.nth.call(null,vec__16264,(0),null);
var _ = cljs.core.nth.call(null,vec__16264,(1),null);
var u = cljs.core.nth.call(null,vec__16264,(2),null);
var fpq = vec__16264;
return cljs.core.cons.call(null,f.call(null,u,state),(new cljs.core.LazySeq(null,((function (vec__16264,dist_su,_,u,fpq,temp__5720__auto__,vec__16261,state,pq){
return (function (){
return loom$alg_generic$step.call(null,cljs.core.reduce.call(null,((function (vec__16264,dist_su,_,u,fpq,temp__5720__auto__,vec__16261,state,pq){
return (function (p__16267,v){
var vec__16268 = p__16267;
var state__$1 = cljs.core.nth.call(null,vec__16268,(0),null);
var pq__$1 = cljs.core.nth.call(null,vec__16268,(1),null);
var dist_suv = (dist_su + dist.call(null,u,v));
var dist_sv = cljs.core.first.call(null,state__$1.call(null,v));
if(cljs.core.truth_((function (){var and__4120__auto__ = dist_sv;
if(cljs.core.truth_(and__4120__auto__)){
return (dist_suv >= dist_sv);
} else {
return and__4120__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state__$1,pq__$1], null);
} else {
var pq__$2 = (cljs.core.truth_(dist_sv)?cljs.core.disj.call(null,pq__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dist_sv,cljs.core.hash.call(null,v),v], null)):pq__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,state__$1,v,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dist_suv,u], null)),cljs.core.conj.call(null,pq__$2,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dist_suv,cljs.core.hash.call(null,v),v], null))], null);
}
});})(vec__16264,dist_su,_,u,fpq,temp__5720__auto__,vec__16261,state,pq))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,cljs.core.disj.call(null,pq,fpq)], null),successors.call(null,u)));
});})(vec__16264,dist_su,_,u,fpq,temp__5720__auto__,vec__16261,state,pq))
,null,null)));
} else {
return null;
}
});
return step.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([start,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),null], null)]),cljs.core.sorted_set.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.hash.call(null,start),start], null))], null));
});

loom.alg_generic.dijkstra_traverse.cljs$lang$maxFixedArity = 4;

/**
 * Finds all shortest distances from start, where successors and dist
 *   are functions called as (successors node) and (dist node1 node2).
 *   Returns a map in the format {node {successor distance}}
 */
loom.alg_generic.dijkstra_span = (function loom$alg_generic$dijkstra_span(successors,dist,start){
return cljs.core.reduce.call(null,(function (span,p__16272){
var vec__16273 = p__16272;
var n = cljs.core.nth.call(null,vec__16273,(0),null);
var vec__16276 = cljs.core.nth.call(null,vec__16273,(1),null);
var d = cljs.core.nth.call(null,vec__16276,(0),null);
var p = cljs.core.nth.call(null,vec__16276,(1),null);
if(cljs.core.truth_(p)){
return cljs.core.assoc_in.call(null,span,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,n], null),d);
} else {
return span;
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.second.call(null,cljs.core.last.call(null,loom.alg_generic.dijkstra_traverse.call(null,successors,dist,start))));
});
/**
 * Finds the shortest path from start to end, where successors and dist
 *   are functions called as (successors node) and (dist node1 node2).
 *   Returns a vector: [path distance]
 */
loom.alg_generic.dijkstra_path_dist = (function loom$alg_generic$dijkstra_path_dist(successors,dist,start,end){
var temp__5718__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p__16279){
var vec__16280 = p__16279;
var node = cljs.core.nth.call(null,vec__16280,(0),null);
var _ = cljs.core.nth.call(null,vec__16280,(1),null);
return cljs.core._EQ_.call(null,end,node);
}),loom.alg_generic.dijkstra_traverse.call(null,successors,dist,start)));
if(cljs.core.truth_(temp__5718__auto__)){
var vec__16283 = temp__5718__auto__;
var _ = cljs.core.nth.call(null,vec__16283,(0),null);
var end_state = cljs.core.nth.call(null,vec__16283,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reverse.call(null,loom.alg_generic.trace_path.call(null,cljs.core.comp.call(null,cljs.core.second,end_state),end)),cljs.core.first.call(null,end_state.call(null,end))], null);
} else {
return null;
}
});
/**
 * Finds the shortest path from start to end, where successors and dist
 *   are functions called as (successors node) and (dist node1 node2)
 */
loom.alg_generic.dijkstra_path = (function loom$alg_generic$dijkstra_path(successors,dist,start,end){
return cljs.core.first.call(null,loom.alg_generic.dijkstra_path_dist.call(null,successors,dist,start,end));
});
loom.alg_generic.bits_per_long = cljs.core.long$.call(null,(32));
/**
 * Returns the number of longs required to store bits count bits in a bitmap.
 */
loom.alg_generic.bm_longs = (function loom$alg_generic$bm_longs(bits){
return cljs.core.long$.call(null,Math.ceil((bits / loom.alg_generic.bits_per_long)));
});
/**
 * Create new empty bitmap.
 */
loom.alg_generic.bm_new = (function loom$alg_generic$bm_new(){
return cljs.core.long_array.call(null,(1));
});
loom.alg_generic.bm_copy = (function loom$alg_generic$bm_copy(bm,size){
return bm.slice((0),size);
});
/**
 * Set boolean state of bit in 'bitmap at 'idx to true.
 */
loom.alg_generic.bm_set = (function loom$alg_generic$bm_set(bitmap,idx){
var size = (function (){var x__4219__auto__ = cljs.core.count.call(null,bitmap);
var y__4220__auto__ = loom.alg_generic.bm_longs.call(null,(idx + (1)));
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})();
var new_bitmap = loom.alg_generic.bm_copy.call(null,bitmap,size);
var chunk = cljs.core.quot.call(null,idx,loom.alg_generic.bits_per_long);
var offset = cljs.core.mod.call(null,idx,loom.alg_generic.bits_per_long);
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
if((loom.alg_generic.bm_longs.call(null,(idx + (1))) <= cljs.core.count.call(null,bitmap))){
var chunk = cljs.core.quot.call(null,idx,loom.alg_generic.bits_per_long);
var offset = cljs.core.mod.call(null,idx,loom.alg_generic.bits_per_long);
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
var len__4730__auto___16354 = arguments.length;
var i__4731__auto___16355 = (0);
while(true){
if((i__4731__auto___16355 < len__4730__auto___16354)){
args__4736__auto__.push((arguments[i__4731__auto___16355]));

var G__16356 = (i__4731__auto___16355 + (1));
i__4731__auto___16355 = G__16356;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return loom.alg_generic.bm_or.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

loom.alg_generic.bm_or.cljs$core$IFn$_invoke$arity$variadic = (function (bitmaps){
if(cljs.core.empty_QMARK_.call(null,bitmaps)){
return loom.alg_generic.bm_new.call(null);
} else {
var size = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.count,bitmaps));
var new_bitmap = loom.alg_generic.bm_copy.call(null,cljs.core.first.call(null,bitmaps),size);
var seq__16290_16357 = cljs.core.seq.call(null,cljs.core.rest.call(null,bitmaps));
var chunk__16297_16358 = null;
var count__16298_16359 = (0);
var i__16299_16360 = (0);
while(true){
if((i__16299_16360 < count__16298_16359)){
var bitmap_16361 = cljs.core._nth.call(null,chunk__16297_16358,i__16299_16360);
var seq__16300_16362 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.list,bitmap_16361));
var chunk__16302_16363 = null;
var count__16303_16364 = (0);
var i__16304_16365 = (0);
while(true){
if((i__16304_16365 < count__16303_16364)){
var vec__16336_16366 = cljs.core._nth.call(null,chunk__16302_16363,i__16304_16365);
var idx_16367 = cljs.core.nth.call(null,vec__16336_16366,(0),null);
var value_16368 = cljs.core.nth.call(null,vec__16336_16366,(1),null);
var masked_value_16369 = (value_16368 | (new_bitmap[idx_16367]));
(new_bitmap[idx_16367] = masked_value_16369);


var G__16370 = seq__16300_16362;
var G__16371 = chunk__16302_16363;
var G__16372 = count__16303_16364;
var G__16373 = (i__16304_16365 + (1));
seq__16300_16362 = G__16370;
chunk__16302_16363 = G__16371;
count__16303_16364 = G__16372;
i__16304_16365 = G__16373;
continue;
} else {
var temp__5720__auto___16374 = cljs.core.seq.call(null,seq__16300_16362);
if(temp__5720__auto___16374){
var seq__16300_16375__$1 = temp__5720__auto___16374;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16300_16375__$1)){
var c__4550__auto___16376 = cljs.core.chunk_first.call(null,seq__16300_16375__$1);
var G__16377 = cljs.core.chunk_rest.call(null,seq__16300_16375__$1);
var G__16378 = c__4550__auto___16376;
var G__16379 = cljs.core.count.call(null,c__4550__auto___16376);
var G__16380 = (0);
seq__16300_16362 = G__16377;
chunk__16302_16363 = G__16378;
count__16303_16364 = G__16379;
i__16304_16365 = G__16380;
continue;
} else {
var vec__16339_16381 = cljs.core.first.call(null,seq__16300_16375__$1);
var idx_16382 = cljs.core.nth.call(null,vec__16339_16381,(0),null);
var value_16383 = cljs.core.nth.call(null,vec__16339_16381,(1),null);
var masked_value_16384 = (value_16383 | (new_bitmap[idx_16382]));
(new_bitmap[idx_16382] = masked_value_16384);


var G__16385 = cljs.core.next.call(null,seq__16300_16375__$1);
var G__16386 = null;
var G__16387 = (0);
var G__16388 = (0);
seq__16300_16362 = G__16385;
chunk__16302_16363 = G__16386;
count__16303_16364 = G__16387;
i__16304_16365 = G__16388;
continue;
}
} else {
}
}
break;
}

var G__16389 = seq__16290_16357;
var G__16390 = chunk__16297_16358;
var G__16391 = count__16298_16359;
var G__16392 = (i__16299_16360 + (1));
seq__16290_16357 = G__16389;
chunk__16297_16358 = G__16390;
count__16298_16359 = G__16391;
i__16299_16360 = G__16392;
continue;
} else {
var temp__5720__auto___16393 = cljs.core.seq.call(null,seq__16290_16357);
if(temp__5720__auto___16393){
var seq__16290_16394__$1 = temp__5720__auto___16393;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16290_16394__$1)){
var c__4550__auto___16395 = cljs.core.chunk_first.call(null,seq__16290_16394__$1);
var G__16396 = cljs.core.chunk_rest.call(null,seq__16290_16394__$1);
var G__16397 = c__4550__auto___16395;
var G__16398 = cljs.core.count.call(null,c__4550__auto___16395);
var G__16399 = (0);
seq__16290_16357 = G__16396;
chunk__16297_16358 = G__16397;
count__16298_16359 = G__16398;
i__16299_16360 = G__16399;
continue;
} else {
var bitmap_16400 = cljs.core.first.call(null,seq__16290_16394__$1);
var seq__16291_16401 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.list,bitmap_16400));
var chunk__16293_16402 = null;
var count__16294_16403 = (0);
var i__16295_16404 = (0);
while(true){
if((i__16295_16404 < count__16294_16403)){
var vec__16348_16405 = cljs.core._nth.call(null,chunk__16293_16402,i__16295_16404);
var idx_16406 = cljs.core.nth.call(null,vec__16348_16405,(0),null);
var value_16407 = cljs.core.nth.call(null,vec__16348_16405,(1),null);
var masked_value_16408 = (value_16407 | (new_bitmap[idx_16406]));
(new_bitmap[idx_16406] = masked_value_16408);


var G__16409 = seq__16291_16401;
var G__16410 = chunk__16293_16402;
var G__16411 = count__16294_16403;
var G__16412 = (i__16295_16404 + (1));
seq__16291_16401 = G__16409;
chunk__16293_16402 = G__16410;
count__16294_16403 = G__16411;
i__16295_16404 = G__16412;
continue;
} else {
var temp__5720__auto___16413__$1 = cljs.core.seq.call(null,seq__16291_16401);
if(temp__5720__auto___16413__$1){
var seq__16291_16414__$1 = temp__5720__auto___16413__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16291_16414__$1)){
var c__4550__auto___16415 = cljs.core.chunk_first.call(null,seq__16291_16414__$1);
var G__16416 = cljs.core.chunk_rest.call(null,seq__16291_16414__$1);
var G__16417 = c__4550__auto___16415;
var G__16418 = cljs.core.count.call(null,c__4550__auto___16415);
var G__16419 = (0);
seq__16291_16401 = G__16416;
chunk__16293_16402 = G__16417;
count__16294_16403 = G__16418;
i__16295_16404 = G__16419;
continue;
} else {
var vec__16351_16420 = cljs.core.first.call(null,seq__16291_16414__$1);
var idx_16421 = cljs.core.nth.call(null,vec__16351_16420,(0),null);
var value_16422 = cljs.core.nth.call(null,vec__16351_16420,(1),null);
var masked_value_16423 = (value_16422 | (new_bitmap[idx_16421]));
(new_bitmap[idx_16421] = masked_value_16423);


var G__16424 = cljs.core.next.call(null,seq__16291_16414__$1);
var G__16425 = null;
var G__16426 = (0);
var G__16427 = (0);
seq__16291_16401 = G__16424;
chunk__16293_16402 = G__16425;
count__16294_16403 = G__16426;
i__16295_16404 = G__16427;
continue;
}
} else {
}
}
break;
}

var G__16428 = cljs.core.next.call(null,seq__16290_16394__$1);
var G__16429 = null;
var G__16430 = (0);
var G__16431 = (0);
seq__16290_16357 = G__16428;
chunk__16297_16358 = G__16429;
count__16298_16359 = G__16430;
i__16299_16360 = G__16431;
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
loom.alg_generic.bm_or.cljs$lang$applyTo = (function (seq16289){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16289));
});

/**
 * Get the indicies of set bits in 'bitmap.
 */
loom.alg_generic.bm_get_indicies = (function loom$alg_generic$bm_get_indicies(bitmap){
var iter__4523__auto__ = (function loom$alg_generic$bm_get_indicies_$_iter__16432(s__16433){
return (new cljs.core.LazySeq(null,(function (){
var s__16433__$1 = s__16433;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__16433__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var chunk = cljs.core.first.call(null,xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__16433__$1,chunk,xs__6277__auto__,temp__5720__auto__){
return (function loom$alg_generic$bm_get_indicies_$_iter__16432_$_iter__16434(s__16435){
return (new cljs.core.LazySeq(null,((function (s__16433__$1,chunk,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__16435__$1 = s__16435;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__16435__$1);
if(temp__5720__auto____$1){
var s__16435__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16435__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__16435__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__16437 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__16436 = (0);
while(true){
if((i__16436 < size__4522__auto__)){
var offset = cljs.core._nth.call(null,c__4521__auto__,i__16436);
var idx = ((chunk * loom.alg_generic.bits_per_long) + offset);
if(cljs.core.truth_(loom.alg_generic.bm_get.call(null,bitmap,idx))){
cljs.core.chunk_append.call(null,b__16437,idx);

var G__16438 = (i__16436 + (1));
i__16436 = G__16438;
continue;
} else {
var G__16439 = (i__16436 + (1));
i__16436 = G__16439;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16437),loom$alg_generic$bm_get_indicies_$_iter__16432_$_iter__16434.call(null,cljs.core.chunk_rest.call(null,s__16435__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16437),null);
}
} else {
var offset = cljs.core.first.call(null,s__16435__$2);
var idx = ((chunk * loom.alg_generic.bits_per_long) + offset);
if(cljs.core.truth_(loom.alg_generic.bm_get.call(null,bitmap,idx))){
return cljs.core.cons.call(null,idx,loom$alg_generic$bm_get_indicies_$_iter__16432_$_iter__16434.call(null,cljs.core.rest.call(null,s__16435__$2)));
} else {
var G__16440 = cljs.core.rest.call(null,s__16435__$2);
s__16435__$1 = G__16440;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__16433__$1,chunk,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__16433__$1,chunk,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,cljs.core.range.call(null,loom.alg_generic.bits_per_long)));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,loom$alg_generic$bm_get_indicies_$_iter__16432.call(null,cljs.core.rest.call(null,s__16433__$1)));
} else {
var G__16441 = cljs.core.rest.call(null,s__16433__$1);
s__16433__$1 = G__16441;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,bitmap)));
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

loom.alg_generic.Ancestry.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k16443,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__16447 = k16443;
var G__16447__$1 = (((G__16447 instanceof cljs.core.Keyword))?G__16447.fqn:null);
switch (G__16447__$1) {
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
return cljs.core.get.call(null,self__.__extmap,k16443,else__4388__auto__);

}
});

loom.alg_generic.Ancestry.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__16448){
var vec__16449 = p__16448;
var k__4408__auto__ = cljs.core.nth.call(null,vec__16449,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__16449,(1),null);
return f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__);
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

loom.alg_generic.Ancestry.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,pr_pair__4402__auto__,"#loom.alg-generic.Ancestry{",", ","}",opts__4401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"node->idx","node->idx",152705227),self__.node__GT_idx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),self__.idx__GT_node],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),self__.bitmaps],null))], null),self__.__extmap));
});

loom.alg_generic.Ancestry.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16442){
var self__ = this;
var G__16442__$1 = this;
return (new cljs.core.RecordIter((0),G__16442__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node->idx","node->idx",152705227),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
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
return (3 + cljs.core.count.call(null,self__.__extmap));
});

loom.alg_generic.Ancestry.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1116202445 ^ cljs.core.hash_unordered_coll.call(null,coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
.call(null,this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

loom.alg_generic.Ancestry.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this16444,other16445){
var self__ = this;
var this16444__$1 = this;
return (((!((other16445 == null)))) && ((this16444__$1.constructor === other16445.constructor)) && (cljs.core._EQ_.call(null,this16444__$1.node__GT_idx,other16445.node__GT_idx)) && (cljs.core._EQ_.call(null,this16444__$1.idx__GT_node,other16445.idx__GT_node)) && (cljs.core._EQ_.call(null,this16444__$1.bitmaps,other16445.bitmaps)) && (cljs.core._EQ_.call(null,this16444__$1.__extmap,other16445.__extmap)));
});

loom.alg_generic.Ancestry.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),null,new cljs.core.Keyword(null,"node->idx","node->idx",152705227),null,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4395__auto__)),null));
}
});

loom.alg_generic.Ancestry.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__16442){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__16452 = cljs.core.keyword_identical_QMARK_;
var expr__16453 = k__4393__auto__;
if(cljs.core.truth_(pred__16452.call(null,new cljs.core.Keyword(null,"node->idx","node->idx",152705227),expr__16453))){
return (new loom.alg_generic.Ancestry(G__16442,self__.idx__GT_node,self__.bitmaps,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__16452.call(null,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),expr__16453))){
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,G__16442,self__.bitmaps,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__16452.call(null,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),expr__16453))){
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,G__16442,self__.__meta,self__.__extmap,null));
} else {
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__16442),null));
}
}
}
});

loom.alg_generic.Ancestry.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"node->idx","node->idx",152705227),self__.node__GT_idx,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),self__.idx__GT_node,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842),self__.bitmaps,null))], null),self__.__extmap));
});

loom.alg_generic.Ancestry.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__16442){
var self__ = this;
var this__4384__auto____$1 = this;
return (new loom.alg_generic.Ancestry(self__.node__GT_idx,self__.idx__GT_node,self__.bitmaps,G__16442,self__.__extmap,self__.__hash));
});

loom.alg_generic.Ancestry.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4391__auto__,(0)),cljs.core._nth.call(null,entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
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
return cljs.core._write.call(null,writer__4429__auto__,"loom.alg-generic/Ancestry");
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
loom.alg_generic.map__GT_Ancestry = (function loom$alg_generic$map__GT_Ancestry(G__16446){
var extmap__4424__auto__ = (function (){var G__16455 = cljs.core.dissoc.call(null,G__16446,new cljs.core.Keyword(null,"node->idx","node->idx",152705227),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
if(cljs.core.record_QMARK_.call(null,G__16446)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__16455);
} else {
return G__16455;
}
})();
return (new loom.alg_generic.Ancestry(new cljs.core.Keyword(null,"node->idx","node->idx",152705227).cljs$core$IFn$_invoke$arity$1(G__16446),new cljs.core.Keyword(null,"idx->node","idx->node",1811907175).cljs$core$IFn$_invoke$arity$1(G__16446),new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842).cljs$core$IFn$_invoke$arity$1(G__16446),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
});

/**
 * Create a new, empty Ancestry cache.
 */
loom.alg_generic.ancestry_new = (function loom$alg_generic$ancestry_new(){
return loom.alg_generic.__GT_Ancestry.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentVector.EMPTY);
});
/**
 * Finds if a 'node is contained in the 'ancestry cache.
 */
loom.alg_generic.ancestry_contains_QMARK_ = (function loom$alg_generic$ancestry_contains_QMARK_(ancestry,node){
return cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"node->idx","node->idx",152705227).cljs$core$IFn$_invoke$arity$1(ancestry),node);
});
/**
 * Adds a 'node and its 'parents associations to the 'ancestry cache.
 */
loom.alg_generic.ancestry_add = (function loom$alg_generic$ancestry_add(var_args){
var args__4736__auto__ = [];
var len__4730__auto___16462 = arguments.length;
var i__4731__auto___16463 = (0);
while(true){
if((i__4731__auto___16463 < len__4730__auto___16462)){
args__4736__auto__.push((arguments[i__4731__auto___16463]));

var G__16464 = (i__4731__auto___16463 + (1));
i__4731__auto___16463 = G__16464;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return loom.alg_generic.ancestry_add.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

loom.alg_generic.ancestry_add.cljs$core$IFn$_invoke$arity$variadic = (function (ancestry,node,parents){
if(loom.alg_generic.ancestry_contains_QMARK_.call(null,ancestry,node)){
return ancestry;
} else {
var map__16460 = ancestry;
var map__16460__$1 = (((((!((map__16460 == null))))?(((((map__16460.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16460.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16460):map__16460);
var node__GT_idx = cljs.core.get.call(null,map__16460__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var idx__GT_node = cljs.core.get.call(null,map__16460__$1,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175));
var bitmaps = cljs.core.get.call(null,map__16460__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
var nid = cljs.core.count.call(null,node__GT_idx);
var node__GT_idx__$1 = cljs.core.assoc.call(null,node__GT_idx,node,nid);
var idx__GT_node__$1 = cljs.core.assoc.call(null,idx__GT_node,nid,node);
var pidxs = cljs.core.map.call(null,node__GT_idx__$1,parents);
var new_bitmap = ((cljs.core.empty_QMARK_.call(null,pidxs))?loom.alg_generic.bm_new.call(null):cljs.core.apply.call(null,loom.alg_generic.bm_or,cljs.core.map.call(null,bitmaps,pidxs)));
var new_bitmap__$1 = cljs.core.reduce.call(null,loom.alg_generic.bm_set,new_bitmap,pidxs);
var bitmaps__$1 = cljs.core.conj.call(null,bitmaps,new_bitmap__$1);
return loom.alg_generic.__GT_Ancestry.call(null,node__GT_idx__$1,idx__GT_node__$1,bitmaps__$1);
}
});

loom.alg_generic.ancestry_add.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
loom.alg_generic.ancestry_add.cljs$lang$applyTo = (function (seq16457){
var G__16458 = cljs.core.first.call(null,seq16457);
var seq16457__$1 = cljs.core.next.call(null,seq16457);
var G__16459 = cljs.core.first.call(null,seq16457__$1);
var seq16457__$2 = cljs.core.next.call(null,seq16457__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16458,G__16459,seq16457__$2);
});

/**
 * Finds if the 'parenter node is an ancestor of 'childer node for the given
 *   'ancestry cache.
 */
loom.alg_generic.ancestor_QMARK_ = (function loom$alg_generic$ancestor_QMARK_(ancestry,childer,parenter){
var map__16465 = ancestry;
var map__16465__$1 = (((((!((map__16465 == null))))?(((((map__16465.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16465.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16465):map__16465);
var node__GT_idx = cljs.core.get.call(null,map__16465__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var bitmaps = cljs.core.get.call(null,map__16465__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
var cidx = node__GT_idx.call(null,childer);
var pidx = node__GT_idx.call(null,parenter);
return cljs.core.boolean$.call(null,(cljs.core.truth_((function (){var and__4120__auto__ = cidx;
if(cljs.core.truth_(and__4120__auto__)){
return pidx;
} else {
return and__4120__auto__;
}
})())?loom.alg_generic.bm_get.call(null,cljs.core.get.call(null,bitmaps,cidx),pidx):null));
});
/**
 * Returns all of the ancestors of 'child node.
 */
loom.alg_generic.ancestors = (function loom$alg_generic$ancestors(ancestry,child){
var map__16467 = ancestry;
var map__16467__$1 = (((((!((map__16467 == null))))?(((((map__16467.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16467.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16467):map__16467);
var node__GT_idx = cljs.core.get.call(null,map__16467__$1,new cljs.core.Keyword(null,"node->idx","node->idx",152705227));
var idx__GT_node = cljs.core.get.call(null,map__16467__$1,new cljs.core.Keyword(null,"idx->node","idx->node",1811907175));
var bitmaps = cljs.core.get.call(null,map__16467__$1,new cljs.core.Keyword(null,"bitmaps","bitmaps",1147698842));
var cidx = node__GT_idx.call(null,child);
return cljs.core.map.call(null,idx__GT_node,loom.alg_generic.bm_get_indicies.call(null,cljs.core.get.call(null,bitmaps,cidx)));
});
/**
 * Returns all of the nodes in an 'ancestry.
 */
loom.alg_generic.ancestry_nodes = (function loom$alg_generic$ancestry_nodes(ancestry){
return cljs.core.keys.call(null,new cljs.core.Keyword(null,"node->idx","node->idx",152705227).cljs$core$IFn$_invoke$arity$1(ancestry));
});

//# sourceMappingURL=alg_generic.js.map
