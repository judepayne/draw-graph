// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('lib_draw_graph.preprocessor');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('loom.graph');
goog.require('loom.alg_generic');
goog.require('loom.alg');
goog.require('loom.attr');
goog.require('lib_draw_graph.clustered');
goog.require('lib_draw_graph.graph');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('lib_draw_graph.util');
/**
 * Checks whether m contains all entries in sub.
 */
lib_draw_graph.preprocessor.submap_QMARK_ = (function lib_draw_graph$preprocessor$submap_QMARK_(sub,m){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sub,cljs.core.select_keys(m,cljs.core.keys(sub)));
});
lib_draw_graph.preprocessor.parse_num = (function lib_draw_graph$preprocessor$parse_num(s){
try{var n = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(s);
if(typeof n === 'number'){
return n;
} else {
throw lib_draw_graph.util.err("Both terms in an inequality filter must be numbers.");
}
}catch (e43205){if((e43205 instanceof Error)){
var e = e43205;
throw lib_draw_graph.util.err("Both terms in an inequality filter must be numbers.");
} else {
throw e43205;

}
}});
/**
 * Checks if part-node is part of one of the nodes in the graph. Both part-node
 *   and the nodes in the graph must be in map format. e.g. part-node {:id 12} and
 *   a node in the graph {:id 12 :name ....}. Returns the first node matched or nil.
 */
lib_draw_graph.preprocessor.find_node = (function lib_draw_graph$preprocessor$find_node(g,part_node){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (acc,cur){
if(lib_draw_graph.preprocessor.submap_QMARK_(part_node,cur)){
return cljs.core.reduced(cur);
} else {
return null;
}
}),loom.graph.nodes(g));
});
/**
 * Returns a sub(di)graph of g going depth first from the first occurrence of
 * the (part) node n.
 */
lib_draw_graph.preprocessor.subgraph = (function lib_draw_graph$preprocessor$subgraph(var_args){
var args__4736__auto__ = [];
var len__4730__auto___43213 = arguments.length;
var i__4731__auto___43214 = (0);
while(true){
if((i__4731__auto___43214 < len__4730__auto___43213)){
args__4736__auto__.push((arguments[i__4731__auto___43214]));

var G__43215 = (i__4731__auto___43214 + (1));
i__4731__auto___43214 = G__43215;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return lib_draw_graph.preprocessor.subgraph.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

lib_draw_graph.preprocessor.subgraph.cljs$core$IFn$_invoke$arity$variadic = (function (g,n,p__43210){
var map__43211 = p__43210;
var map__43211__$1 = (((((!((map__43211 == null))))?(((((map__43211.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43211.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43211):map__43211);
var part_node_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43211__$1,cljs.core.cst$kw$part_DASH_node_QMARK_,false);
var node = (cljs.core.truth_(part_node_QMARK_)?lib_draw_graph.preprocessor.find_node(g,n):n);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(loom.graph.digraph,loom.alg_generic.pre_edge_traverse(((function (node,map__43211,map__43211__$1,part_node_QMARK_){
return (function (p1__43206_SHARP_){
return loom.graph.successors_STAR_(g,p1__43206_SHARP_);
});})(node,map__43211,map__43211__$1,part_node_QMARK_))
,node));
});

lib_draw_graph.preprocessor.subgraph.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
lib_draw_graph.preprocessor.subgraph.cljs$lang$applyTo = (function (seq43207){
var G__43208 = cljs.core.first(seq43207);
var seq43207__$1 = cljs.core.next(seq43207);
var G__43209 = cljs.core.first(seq43207__$1);
var seq43207__$2 = cljs.core.next(seq43207__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43208,G__43209,seq43207__$2);
});

/**
 * Returns the leaves in the graph.
 */
lib_draw_graph.preprocessor.leaves = (function lib_draw_graph$preprocessor$leaves(g){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__43216_SHARP_){
return lib_draw_graph.graph.leaf_QMARK_(g,p1__43216_SHARP_);
}),loom.graph.nodes(g));
});
/**
 * Returns the nodes that are parents of nodes.
 */
lib_draw_graph.preprocessor.parents_of = (function lib_draw_graph$preprocessor$parents_of(g,nodes){
var visible_parents = (function lib_draw_graph$preprocessor$parents_of_$_visible_parents(g__$1,n){
var prnts = loom.graph.predecessors_STAR_(g__$1,n);
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (prnts){
return (function (p1__43217_SHARP_){
return cljs.core.not(lib_draw_graph.graph.edge_invisible_QMARK_(g__$1,p1__43217_SHARP_,n));
});})(prnts))
,prnts);
});
return cljs.core.dedupe.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__43218_SHARP_){
return visible_parents(g,p1__43218_SHARP_);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nodes], 0)));
});
/**
 * Removes the n lowest levels from the graph.
 */
lib_draw_graph.preprocessor.remove_levels = (function lib_draw_graph$preprocessor$remove_levels(g,n){
var clustered_QMARK_ = lib_draw_graph.clustered.clustered_QMARK_(g);
var grph = g;
var nds = lib_draw_graph.preprocessor.leaves(g);
var lvls = n;
while(true){
if((lvls === (0))){
return grph;
} else {
var next_gen = lib_draw_graph.preprocessor.parents_of(grph,nds);
var grph_STAR_ = ((clustered_QMARK_)?cljs.core.cst$kw$graph.cljs$core$IFn$_invoke$arity$1(lib_draw_graph.clustered.remove_nodes(grph,nds)):loom.graph.remove_nodes_STAR_(grph,nds));
var G__43219 = grph_STAR_;
var G__43220 = next_gen;
var G__43221 = (lvls - (1));
grph = G__43219;
nds = G__43220;
lvls = G__43221;
continue;
}
break;
}
});
/**
 * Eager depth first search that collects state as it goes.
 * successors is a function of 1 arg that returns successors of node passed.
 * start is the starting node.
 * init is a map of initial state.
 * f is a function of 3 args: current state (map), current nodes and one of its children.
 */
lib_draw_graph.preprocessor.eager_stateful_dfs = (function lib_draw_graph$preprocessor$eager_stateful_dfs(successors,start,f,init){
var vertices = cljs.core.PersistentVector.EMPTY;
var explored = cljs.core.PersistentHashSet.createAsIfByAssoc([start]);
var frontier = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [start], null);
var state = init;
while(true){
if(cljs.core.empty_QMARK_(frontier)){
return state;
} else {
var v = cljs.core.peek(frontier);
var neighbours = (successors.cljs$core$IFn$_invoke$arity$1 ? successors.cljs$core$IFn$_invoke$arity$1(v) : successors.call(null,v));
var G__43222 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vertices,v);
var G__43223 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(explored,neighbours);
var G__43224 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(frontier),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(explored,neighbours));
var G__43225 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vertices,explored,frontier,state,v,neighbours){
return (function (acc,cur){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,cur,(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(acc,v,cur) : f.call(null,acc,v,cur)));
});})(vertices,explored,frontier,state,v,neighbours))
,state,neighbours);
vertices = G__43222;
explored = G__43223;
frontier = G__43224;
state = G__43225;
continue;
}
break;
}
});
/**
 * Returns rank for the next (node) given state map.
 */
lib_draw_graph.preprocessor.update_rank = (function lib_draw_graph$preprocessor$update_rank(state,node,next){
var mx = (function (x,y){
if((x == null)){
return y;
} else {
var x__4219__auto__ = x;
var y__4220__auto__ = y;
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
}
});
return mx(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,next),(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,node) + (1)));
});
/**
 * Returns predecessors not including self
 */
lib_draw_graph.preprocessor.predecessors_not_self = (function lib_draw_graph$preprocessor$predecessors_not_self(g,n){
var predec = loom.graph.predecessors_STAR_(g,n);
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (predec){
return (function (p1__43226_SHARP_){
return (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,p1__43226_SHARP_)));
});})(predec))
,predec);
});
/**
 * Returns successors not including self
 */
lib_draw_graph.preprocessor.successors_not_self = (function lib_draw_graph$preprocessor$successors_not_self(g,n){
var succs = loom.graph.successors_STAR_(g,n);
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (succs){
return (function (p1__43227_SHARP_){
return (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,p1__43227_SHARP_)));
});})(succs))
,succs);
});
/**
 * Returns ranks for each node in g. 0-indexed.
 */
lib_draw_graph.preprocessor.ranks = (function lib_draw_graph$preprocessor$ranks(g){
var root_QMARK_ = (function (p1__43228_SHARP_){
return cljs.core.empty_QMARK_(lib_draw_graph.preprocessor.predecessors_not_self(g,p1__43228_SHARP_));
});
var roots = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(root_QMARK_,loom.graph.nodes(g));
var init = cljs.core.zipmap(roots,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1((0)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (root_QMARK_,roots,init){
return (function (acc,cur){
return lib_draw_graph.preprocessor.eager_stateful_dfs(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(lib_draw_graph.preprocessor.successors_not_self,g),cur,lib_draw_graph.preprocessor.update_rank,acc);
});})(root_QMARK_,roots,init))
,init,roots);
});
lib_draw_graph.preprocessor.fmap = (function lib_draw_graph$preprocessor$fmap(f,m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(m),(function (){var iter__4523__auto__ = (function lib_draw_graph$preprocessor$fmap_$_iter__43229(s__43230){
return (new cljs.core.LazySeq(null,(function (){
var s__43230__$1 = s__43230;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__43230__$1);
if(temp__5720__auto__){
var s__43230__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__43230__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__43230__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__43232 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__43231 = (0);
while(true){
if((i__43231 < size__4522__auto__)){
var vec__43233 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__43231);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43233,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43233,(1),null);
cljs.core.chunk_append(b__43232,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v))], null));

var G__43239 = (i__43231 + (1));
i__43231 = G__43239;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43232),lib_draw_graph$preprocessor$fmap_$_iter__43229(cljs.core.chunk_rest(s__43230__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43232),null);
}
} else {
var vec__43236 = cljs.core.first(s__43230__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43236,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43236,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v))], null),lib_draw_graph$preprocessor$fmap_$_iter__43229(cljs.core.rest(s__43230__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(m);
})());
});
/**
 * Applies f to every value in nested map.
 */
lib_draw_graph.preprocessor.fmap_STAR_ = (function lib_draw_graph$preprocessor$fmap_STAR_(f,m){
return lib_draw_graph.preprocessor.fmap((function (p1__43240_SHARP_){
if(cljs.core.map_QMARK_(p1__43240_SHARP_)){
return (lib_draw_graph.preprocessor.fmap_STAR_.cljs$core$IFn$_invoke$arity$2 ? lib_draw_graph.preprocessor.fmap_STAR_.cljs$core$IFn$_invoke$arity$2(f,p1__43240_SHARP_) : lib_draw_graph.preprocessor.fmap_STAR_.call(null,f,p1__43240_SHARP_));
} else {
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__43240_SHARP_) : f.call(null,p1__43240_SHARP_));
}
}),m);
});
/**
 * Organizes ranks by k. k is usually a cluster.
 */
lib_draw_graph.preprocessor.rank_info = (function lib_draw_graph$preprocessor$rank_info(ranks,k){
var r = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__43242){
var vec__43243 = p__43242;
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43243,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43243,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__$1,cljs.core.group_by(cljs.core.second,v)], null);
})),cljs.core.group_by((function (n){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.first(n),k);
}),ranks));
return lib_draw_graph.preprocessor.fmap_STAR_(((function (r){
return (function (p1__43241_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,p1__43241_SHARP_);
});})(r))
,r);
});
/**
 * Returns seq of nodes at the max rank for the k. k is usually a cluster.
 */
lib_draw_graph.preprocessor.max_ranked_nodes = (function lib_draw_graph$preprocessor$max_ranked_nodes(info,k,n){
var m = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map_by(cljs.core._GT_),cljs.core.get.cljs$core$IFn$_invoke$arity$2(info,k));
var m_SINGLEQUOTE_ = cljs.core.flatten(cljs.core.vals(m));
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,m_SINGLEQUOTE_);
});
/**
 * Returns seq of nodes at the min rank for the k. k is usually a cluster.
 */
lib_draw_graph.preprocessor.min_ranked_nodes = (function lib_draw_graph$preprocessor$min_ranked_nodes(info,k,n){
var m = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map(),cljs.core.get.cljs$core$IFn$_invoke$arity$2(info,k));
var m_SINGLEQUOTE_ = cljs.core.flatten(cljs.core.vals(m));
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,m_SINGLEQUOTE_);
});
lib_draw_graph.preprocessor.cluster_edges = new cljs.core.PersistentArrayMap(null, 7, [(16),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(4)], null),(12),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(3)], null),(9),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(3)], null),(6),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(2)], null),(4),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null),(2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1)], null),(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)], null);
/**
 * Returns a set of edges between all of the min ranked nodes of clstr1
 * and one of the max ranked nodes in clstr2. edges already in the graph
 * are returned marked with :constraint
 */
lib_draw_graph.preprocessor.edges_between = (function lib_draw_graph$preprocessor$edges_between(g,info,ce_uppers,ce_lowers,clstr1,clstr2){
var edges = loom.graph.edges(g);
var clstr1s = lib_draw_graph.clustered.cluster_descendants(g,clstr1);
var clstr2s = lib_draw_graph.clustered.cluster_descendants(g,clstr2);
var clstr1s_mins = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (edges,clstr1s,clstr2s){
return (function (p1__43246_SHARP_){
return lib_draw_graph.preprocessor.max_ranked_nodes(info,p1__43246_SHARP_,ce_uppers);
});})(edges,clstr1s,clstr2s))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clstr1s], 0));
var clstr2s_maxs = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (edges,clstr1s,clstr2s,clstr1s_mins){
return (function (p1__43247_SHARP_){
return lib_draw_graph.preprocessor.min_ranked_nodes(info,p1__43247_SHARP_,ce_lowers);
});})(edges,clstr1s,clstr2s,clstr1s_mins))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clstr2s], 0));
var iter__4523__auto__ = ((function (edges,clstr1s,clstr2s,clstr1s_mins,clstr2s_maxs){
return (function lib_draw_graph$preprocessor$edges_between_$_iter__43248(s__43249){
return (new cljs.core.LazySeq(null,((function (edges,clstr1s,clstr2s,clstr1s_mins,clstr2s_maxs){
return (function (){
var s__43249__$1 = s__43249;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__43249__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var x = cljs.core.first(xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__43249__$1,x,xs__6277__auto__,temp__5720__auto__,edges,clstr1s,clstr2s,clstr1s_mins,clstr2s_maxs){
return (function lib_draw_graph$preprocessor$edges_between_$_iter__43248_$_iter__43250(s__43251){
return (new cljs.core.LazySeq(null,((function (s__43249__$1,x,xs__6277__auto__,temp__5720__auto__,edges,clstr1s,clstr2s,clstr1s_mins,clstr2s_maxs){
return (function (){
var s__43251__$1 = s__43251;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__43251__$1);
if(temp__5720__auto____$1){
var s__43251__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__43251__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__43251__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__43253 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__43252 = (0);
while(true){
if((i__43252 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__43252);
cljs.core.chunk_append(b__43253,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)]),edges))?cljs.core.cst$kw$constraint:null)], null));

var G__43254 = (i__43252 + (1));
i__43252 = G__43254;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43253),lib_draw_graph$preprocessor$edges_between_$_iter__43248_$_iter__43250(cljs.core.chunk_rest(s__43251__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43253),null);
}
} else {
var y = cljs.core.first(s__43251__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)]),edges))?cljs.core.cst$kw$constraint:null)], null),lib_draw_graph$preprocessor$edges_between_$_iter__43248_$_iter__43250(cljs.core.rest(s__43251__$2)));
}
} else {
return null;
}
break;
}
});})(s__43249__$1,x,xs__6277__auto__,temp__5720__auto__,edges,clstr1s,clstr2s,clstr1s_mins,clstr2s_maxs))
,null,null));
});})(s__43249__$1,x,xs__6277__auto__,temp__5720__auto__,edges,clstr1s,clstr2s,clstr1s_mins,clstr2s_maxs))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(clstr2s_maxs));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,lib_draw_graph$preprocessor$edges_between_$_iter__43248(cljs.core.rest(s__43249__$1)));
} else {
var G__43255 = cljs.core.rest(s__43249__$1);
s__43249__$1 = G__43255;
continue;
}
} else {
return null;
}
break;
}
});})(edges,clstr1s,clstr2s,clstr1s_mins,clstr2s_maxs))
,null,null));
});})(edges,clstr1s,clstr2s,clstr1s_mins,clstr2s_maxs))
;
return iter__4523__auto__(clstr1s_mins);
});
lib_draw_graph.preprocessor.get_rank_info = (function lib_draw_graph$preprocessor$get_rank_info(g,cluster_on){
var rks = lib_draw_graph.preprocessor.ranks(g);
var ri = lib_draw_graph.preprocessor.rank_info(rks,cluster_on);
return ri;
});
/**
 * Adds a stack of clusters to the graph. cluster-edge-nums is a 2-vector where
 * the first is the number of nodes in the upper cluster and the second the lower.
 */
lib_draw_graph.preprocessor.add_stack = (function lib_draw_graph$preprocessor$add_stack(g,ri,stack,cluster_edge_nums){
var edges = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__43256_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(lib_draw_graph.preprocessor.edges_between,g,ri,cljs.core.first(cluster_edge_nums),cljs.core.second(cluster_edge_nums),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__43256_SHARP_], 0));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),stack)], 0));
var edges_SINGLEQUOTE_ = cljs.core.group_by(((function (edges){
return (function (p1__43257_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$constraint,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__43257_SHARP_,(2)));
});})(edges))
,edges);
var edges_SINGLEQUOTE__f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(edges_SINGLEQUOTE_,false);
var edges_SINGLEQUOTE__t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(edges_SINGLEQUOTE_,true);
return loom.attr.add_attr_to_edges(loom.attr.add_attr_to_edges(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(loom.graph.add_edges,g,edges_SINGLEQUOTE__f),cljs.core.cst$kw$style,"invis",edges_SINGLEQUOTE__f),cljs.core.cst$kw$constraint,true,edges_SINGLEQUOTE__f);
});
lib_draw_graph.preprocessor.add_invisible_cluster_edges = (function lib_draw_graph$preprocessor$add_invisible_cluster_edges(g,opts,edges){
var ri = lib_draw_graph.preprocessor.get_rank_info(g,lib_draw_graph.clustered.cluster_key(g));
var edge_nums = cljs.core.get.cljs$core$IFn$_invoke$arity$3(lib_draw_graph.preprocessor.cluster_edges,lib_draw_graph.preprocessor.parse_num(cljs.core.cst$kw$num_DASH_cluster_DASH_edges.cljs$core$IFn$_invoke$arity$1(opts)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null));
var g_SINGLEQUOTE_ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (ri,edge_nums){
return (function (acc,p__43258){
var vec__43259 = p__43258;
var c1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43259,(0),null);
var c2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43259,(1),null);
return lib_draw_graph.preprocessor.add_stack(acc,ri,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2], null),edge_nums);
});})(ri,edge_nums))
,g,edges);
return g_SINGLEQUOTE_;
});
/**
 * Takes the ranks from an old graph and a subset of clusters and returns
 * the clusters in rank order.
 */
lib_draw_graph.preprocessor.sort_clusters_by_rank = (function lib_draw_graph$preprocessor$sort_clusters_by_rank(ranks,clusters){
var r_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.vals(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__43262){
var vec__43263 = p__43262;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43263,(0),null);
var vs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43263,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,vs)));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.group_by(cljs.core.val,ranks))));
var old_ranks = r_SINGLEQUOTE_;
var acc = cljs.core.PersistentVector.EMPTY;
var clstrs = clusters;
while(true){
if(cljs.core.empty_QMARK_(old_ranks)){
return acc;
} else {
var items_at = cljs.core.first(old_ranks);
var matched = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(clstrs,items_at);
var unmatched = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(clstrs,items_at);
if(cljs.core.empty_QMARK_(matched)){
var G__43266 = cljs.core.rest(old_ranks);
var G__43267 = acc;
var G__43268 = clstrs;
old_ranks = G__43266;
acc = G__43267;
clstrs = G__43268;
continue;
} else {
var G__43269 = cljs.core.rest(old_ranks);
var G__43270 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,matched);
var G__43271 = unmatched;
old_ranks = G__43269;
acc = G__43270;
clstrs = G__43271;
continue;
}
}
break;
}
});
lib_draw_graph.preprocessor.rankseq__GT_edges = (function lib_draw_graph$preprocessor$rankseq__GT_edges(rankseq){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__43272){
var vec__43273 = p__43272;
var srcs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43273,(0),null);
var dests = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43273,(1),null);
var iter__4523__auto__ = ((function (vec__43273,srcs,dests){
return (function lib_draw_graph$preprocessor$rankseq__GT_edges_$_iter__43276(s__43277){
return (new cljs.core.LazySeq(null,((function (vec__43273,srcs,dests){
return (function (){
var s__43277__$1 = s__43277;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__43277__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var x = cljs.core.first(xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__43277__$1,x,xs__6277__auto__,temp__5720__auto__,vec__43273,srcs,dests){
return (function lib_draw_graph$preprocessor$rankseq__GT_edges_$_iter__43276_$_iter__43278(s__43279){
return (new cljs.core.LazySeq(null,((function (s__43277__$1,x,xs__6277__auto__,temp__5720__auto__,vec__43273,srcs,dests){
return (function (){
var s__43279__$1 = s__43279;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__43279__$1);
if(temp__5720__auto____$1){
var s__43279__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__43279__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__43279__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__43281 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__43280 = (0);
while(true){
if((i__43280 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__43280);
cljs.core.chunk_append(b__43281,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

var G__43282 = (i__43280 + (1));
i__43280 = G__43282;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43281),lib_draw_graph$preprocessor$rankseq__GT_edges_$_iter__43276_$_iter__43278(cljs.core.chunk_rest(s__43279__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43281),null);
}
} else {
var y = cljs.core.first(s__43279__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),lib_draw_graph$preprocessor$rankseq__GT_edges_$_iter__43276_$_iter__43278(cljs.core.rest(s__43279__$2)));
}
} else {
return null;
}
break;
}
});})(s__43277__$1,x,xs__6277__auto__,temp__5720__auto__,vec__43273,srcs,dests))
,null,null));
});})(s__43277__$1,x,xs__6277__auto__,temp__5720__auto__,vec__43273,srcs,dests))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(dests));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,lib_draw_graph$preprocessor$rankseq__GT_edges_$_iter__43276(cljs.core.rest(s__43277__$1)));
} else {
var G__43283 = cljs.core.rest(s__43277__$1);
s__43277__$1 = G__43283;
continue;
}
} else {
return null;
}
break;
}
});})(vec__43273,srcs,dests))
,null,null));
});})(vec__43273,srcs,dests))
;
return iter__4523__auto__(srcs);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),rankseq)], 0));
});
/**
 * Filter's the graph's edge-graph to just supplied clusters.
 */
lib_draw_graph.preprocessor.filter_edge_graph = (function lib_draw_graph$preprocessor$filter_edge_graph(g,clusters){
var old_edge_graph = cljs.core.cst$kw$edge_DASH_graph.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$clusters.cljs$core$IFn$_invoke$arity$1(g));
var old_ranks = lib_draw_graph.preprocessor.ranks(old_edge_graph);
var sorted_clusters = lib_draw_graph.preprocessor.sort_clusters_by_rank(old_ranks,clusters);
var new_edges = lib_draw_graph.preprocessor.rankseq__GT_edges(sorted_clusters);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (old_edge_graph,old_ranks,sorted_clusters,new_edges){
return (function (acc,p__43284){
var vec__43285 = p__43284;
var c1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43285,(0),null);
var c2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43285,(1),null);
return lib_draw_graph.clustered.add_cluster_edge(acc,c1,c2);
});})(old_edge_graph,old_ranks,sorted_clusters,new_edges))
,lib_draw_graph.clustered.delete_edge_graph(g),new_edges);
});
lib_draw_graph.preprocessor._STAR_part_sep_STAR_ = /[^=:<>(<=)(>=)]+|[=:<>(<=)(>=)]/;
lib_draw_graph.preprocessor.split_parts = (function lib_draw_graph$preprocessor$split_parts(s){
return clojure.string.split.cljs$core$IFn$_invoke$arity$3(s,lib_draw_graph.preprocessor._STAR_part_sep_STAR_,(-1));
});
lib_draw_graph.preprocessor._STAR_group_STAR_ = /\[.*\]/;
lib_draw_graph.preprocessor.remove_first_and_last = (function lib_draw_graph$preprocessor$remove_first_and_last(s){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(1),(cljs.core.count(s) - (1)));
});
/**
 * takes a term key and term value (which may represent a choice in the form
 * [a or b or c] and assesses whether the key and value (or one of the values) is a
 * submap of item.
 */
lib_draw_graph.preprocessor.equality_match_QMARK_ = (function lib_draw_graph$preprocessor$equality_match_QMARK_(term_k,term_v,item){
var choice_QMARK_ = (!((cljs.core.re_matches(lib_draw_graph.preprocessor._STAR_group_STAR_,term_v) == null)));
if((!(choice_QMARK_))){
return lib_draw_graph.preprocessor.submap_QMARK_(cljs.core.PersistentArrayMap.createAsIfByAssoc([term_k,term_v]),item);
} else {
var opts = clojure.string.split.cljs$core$IFn$_invoke$arity$2(lib_draw_graph.preprocessor.remove_first_and_last(term_v),/ or /);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (opts,choice_QMARK_){
return (function (acc,cur){
var or__4131__auto__ = acc;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return lib_draw_graph.preprocessor.submap_QMARK_(cljs.core.PersistentArrayMap.createAsIfByAssoc([term_k,cur]),item);
}
});})(opts,choice_QMARK_))
,false,opts);
}
});
/**
 * takes a term key, an op and term value and assessing whether the value of the
 * key in the item matches the condition.
 */
lib_draw_graph.preprocessor.inequality_match_QMARK_ = (function lib_draw_graph$preprocessor$inequality_match_QMARK_(term_k,op,term_v,item){
var v = lib_draw_graph.preprocessor.parse_num(term_v);
var v_item = lib_draw_graph.preprocessor.parse_num((term_k.cljs$core$IFn$_invoke$arity$1 ? term_k.cljs$core$IFn$_invoke$arity$1(item) : term_k.call(null,item)));
if((!(typeof v_item === 'number'))){
throw lib_draw_graph.util.err("internal oops!");
} else {
}

var G__43288 = op;
switch (G__43288) {
case ">":
return (v_item > v);

break;
case "<":
return (v_item < v);

break;
case ">=":
return (v_item >= v);

break;
case "<=":
return (v_item <= v);

break;
default:
throw lib_draw_graph.util.err([cljs.core.str.cljs$core$IFn$_invoke$arity$1(op)," is not a valid comparison operator."].join(''));

}
});
lib_draw_graph.preprocessor.sub_matches_QMARK_ = (function lib_draw_graph$preprocessor$sub_matches_QMARK_(term,item){
if((!(cljs.core.contains_QMARK_(item,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.first(term)))))){
return true;
} else {
var op = cljs.core.second(term);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("=",op)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(":",op)))){
return lib_draw_graph.preprocessor.equality_match_QMARK_(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.first(term)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(term,(2)),item);
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(">",op)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("<",op)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(">=",op)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("<=",op)))){
return lib_draw_graph.preprocessor.inequality_match_QMARK_(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.first(term)),cljs.core.second(term),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(term,(2)),item);
} else {
throw lib_draw_graph.util.err([cljs.core.str.cljs$core$IFn$_invoke$arity$1(op)," is not a valid comparison operator."].join(''));

}
}
}
});
/**
 * Returns a filtered graph where nodes where is not a submap are filtered out.
 */
lib_draw_graph.preprocessor.filter_graph = (function lib_draw_graph$preprocessor$filter_graph(var_args){
var args__4736__auto__ = [];
var len__4730__auto___43302 = arguments.length;
var i__4731__auto___43303 = (0);
while(true){
if((i__4731__auto___43303 < len__4730__auto___43302)){
args__4736__auto__.push((arguments[i__4731__auto___43303]));

var G__43304 = (i__4731__auto___43303 + (1));
i__4731__auto___43303 = G__43304;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return lib_draw_graph.preprocessor.filter_graph.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

lib_draw_graph.preprocessor.filter_graph.cljs$core$IFn$_invoke$arity$variadic = (function (g,subs,p__43295){
var map__43296 = p__43295;
var map__43296__$1 = (((((!((map__43296 == null))))?(((((map__43296.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43296.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43296):map__43296);
var filter_edges_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__43296__$1,cljs.core.cst$kw$filter_DASH_edges_QMARK_,true);
var subs__$1 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(subs,/( or )(?![^\[]*\])/);
var subs__$2 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (subs__$1,map__43296,map__43296__$1,filter_edges_QMARK_){
return (function (p1__43290_SHARP_){
return cljs.core.re_seq(lib_draw_graph.preprocessor._STAR_part_sep_STAR_,p1__43290_SHARP_);
});})(subs__$1,map__43296,map__43296__$1,filter_edges_QMARK_))
,subs__$1);
var filtered_nodes = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (subs__$1,subs__$2,map__43296,map__43296__$1,filter_edges_QMARK_){
return (function (p1__43291_SHARP_){
return cljs.core.not(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (subs__$1,subs__$2,map__43296,map__43296__$1,filter_edges_QMARK_){
return (function (acc,term){
var or__4131__auto__ = acc;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return lib_draw_graph.preprocessor.sub_matches_QMARK_(term,p1__43291_SHARP_);
}
});})(subs__$1,subs__$2,map__43296,map__43296__$1,filter_edges_QMARK_))
,false,subs__$2));
});})(subs__$1,subs__$2,map__43296,map__43296__$1,filter_edges_QMARK_))
,loom.graph.nodes(g));
var g_SINGLEQUOTE_ = ((lib_draw_graph.clustered.clustered_QMARK_(g))?lib_draw_graph.clustered.remove_nodes(g,filtered_nodes):cljs.core.apply.cljs$core$IFn$_invoke$arity$3(loom.graph.remove_nodes,g,filtered_nodes));
if(cljs.core.truth_(filter_edges_QMARK_)){
var filtered_edges = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (subs__$1,subs__$2,filtered_nodes,g_SINGLEQUOTE_,map__43296,map__43296__$1,filter_edges_QMARK_){
return (function (p__43298){
var vec__43299 = p__43298;
var src = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43299,(0),null);
var dst = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43299,(1),null);
return cljs.core.not(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__43299,src,dst,subs__$1,subs__$2,filtered_nodes,g_SINGLEQUOTE_,map__43296,map__43296__$1,filter_edges_QMARK_){
return (function (acc,term){
var or__4131__auto__ = acc;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(loom.attr.attr.cljs$core$IFn$_invoke$arity$4(g_SINGLEQUOTE_,src,dst,cljs.core.cst$kw$style),"invis")){
return true;
} else {
return lib_draw_graph.preprocessor.sub_matches_QMARK_(term,loom.attr.attr.cljs$core$IFn$_invoke$arity$4(g_SINGLEQUOTE_,src,dst,cljs.core.cst$kw$meta));
}
}
});})(vec__43299,src,dst,subs__$1,subs__$2,filtered_nodes,g_SINGLEQUOTE_,map__43296,map__43296__$1,filter_edges_QMARK_))
,false,subs__$2));
});})(subs__$1,subs__$2,filtered_nodes,g_SINGLEQUOTE_,map__43296,map__43296__$1,filter_edges_QMARK_))
,loom.graph.edges(g_SINGLEQUOTE_));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(loom.graph.remove_edges,g_SINGLEQUOTE_,filtered_edges);
} else {
return g_SINGLEQUOTE_;
}
});

lib_draw_graph.preprocessor.filter_graph.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
lib_draw_graph.preprocessor.filter_graph.cljs$lang$applyTo = (function (seq43292){
var G__43293 = cljs.core.first(seq43292);
var seq43292__$1 = cljs.core.next(seq43292);
var G__43294 = cljs.core.first(seq43292__$1);
var seq43292__$2 = cljs.core.next(seq43292__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43293,G__43294,seq43292__$2);
});

/**
 * Returns a graph with only nodes on paths between start filtering term and the end.
 */
lib_draw_graph.preprocessor.paths = (function lib_draw_graph$preprocessor$paths(g,start_subs,end_subs){
var start_nodes = loom.graph.nodes(lib_draw_graph.preprocessor.filter_graph.cljs$core$IFn$_invoke$arity$variadic(g,start_subs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$filter_DASH_edges_QMARK_,false], 0)));
var end_nodes = loom.graph.nodes(lib_draw_graph.preprocessor.filter_graph.cljs$core$IFn$_invoke$arity$variadic(g,end_subs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$filter_DASH_edges_QMARK_,false], 0)));
var combins = (function (){var iter__4523__auto__ = ((function (start_nodes,end_nodes){
return (function lib_draw_graph$preprocessor$paths_$_iter__43306(s__43307){
return (new cljs.core.LazySeq(null,((function (start_nodes,end_nodes){
return (function (){
var s__43307__$1 = s__43307;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__43307__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var s = cljs.core.first(xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__43307__$1,s,xs__6277__auto__,temp__5720__auto__,start_nodes,end_nodes){
return (function lib_draw_graph$preprocessor$paths_$_iter__43306_$_iter__43308(s__43309){
return (new cljs.core.LazySeq(null,((function (s__43307__$1,s,xs__6277__auto__,temp__5720__auto__,start_nodes,end_nodes){
return (function (){
var s__43309__$1 = s__43309;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__43309__$1);
if(temp__5720__auto____$1){
var s__43309__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__43309__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__43309__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__43311 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__43310 = (0);
while(true){
if((i__43310 < size__4522__auto__)){
var e = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__43310);
cljs.core.chunk_append(b__43311,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,e], null));

var G__43312 = (i__43310 + (1));
i__43310 = G__43312;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43311),lib_draw_graph$preprocessor$paths_$_iter__43306_$_iter__43308(cljs.core.chunk_rest(s__43309__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43311),null);
}
} else {
var e = cljs.core.first(s__43309__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,e], null),lib_draw_graph$preprocessor$paths_$_iter__43306_$_iter__43308(cljs.core.rest(s__43309__$2)));
}
} else {
return null;
}
break;
}
});})(s__43307__$1,s,xs__6277__auto__,temp__5720__auto__,start_nodes,end_nodes))
,null,null));
});})(s__43307__$1,s,xs__6277__auto__,temp__5720__auto__,start_nodes,end_nodes))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(end_nodes));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,lib_draw_graph$preprocessor$paths_$_iter__43306(cljs.core.rest(s__43307__$1)));
} else {
var G__43313 = cljs.core.rest(s__43307__$1);
s__43307__$1 = G__43313;
continue;
}
} else {
return null;
}
break;
}
});})(start_nodes,end_nodes))
,null,null));
});})(start_nodes,end_nodes))
;
return iter__4523__auto__(start_nodes);
})();
var paths = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (start_nodes,end_nodes,combins){
return (function (p1__43305_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(loom.alg_generic.bf_path,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(lib_draw_graph.graph.successors,g),p1__43305_SHARP_);
});})(start_nodes,end_nodes,combins))
,combins);
var nds = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.flatten(paths)));
var nds_compl = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(loom.graph.nodes(g),nds);
if(lib_draw_graph.clustered.clustered_QMARK_(g)){
return lib_draw_graph.clustered.remove_nodes(g,nds_compl);
} else {
return loom.graph.remove_nodes.cljs$core$IFn$_invoke$arity$variadic(g,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nds_compl], 0));
}
});
lib_draw_graph.preprocessor.same_ranks = (function lib_draw_graph$preprocessor$same_ranks(info){

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__43314){
var vec__43315 = p__43314;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43315,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43315,(1),null);
var vec__43318 = cljs.core.vals(v);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43318,(0),null);
var inner = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43318,(1),null);
if((cljs.core.count(inner) > (1))){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([k,cljs.core.vals(v)]);
} else {
return null;
}
}),info));
});
lib_draw_graph.preprocessor.fix_ranks = (function lib_draw_graph$preprocessor$fix_ranks(g,cluster_on){
var same = lib_draw_graph.preprocessor.same_ranks(lib_draw_graph.preprocessor.get_rank_info(g,cluster_on));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (same){
return (function (acc,p__43321){
var vec__43322 = p__43321;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43322,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43322,(1),null);
return lib_draw_graph.clustered.add_attr_to_cluster(acc,k,cljs.core.cst$kw$fix_DASH_ranks,v);
});})(same))
,g,same);
});
