// Compiled by ClojureScript 1.10.520 {}
goog.provide('lib_draw_graph.preprocessor');
goog.require('cljs.core');
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
return cljs.core._EQ_.call(null,sub,cljs.core.select_keys.call(null,m,cljs.core.keys.call(null,sub)));
});
lib_draw_graph.preprocessor.parse_num = (function lib_draw_graph$preprocessor$parse_num(s){
try{var n = cljs.reader.read_string.call(null,s);
if(typeof n === 'number'){
return n;
} else {
throw lib_draw_graph.util.err.call(null,"Both terms in an inequality filter must be numbers.");
}
}catch (e39375){if((e39375 instanceof Error)){
var e = e39375;
throw lib_draw_graph.util.err.call(null,"Both terms in an inequality filter must be numbers.");
} else {
throw e39375;

}
}});
/**
 * Checks if part-node is part of one of the nodes in the graph. Both part-node
 *   and the nodes in the graph must be in map format. e.g. part-node {:id 12} and
 *   a node in the graph {:id 12 :name ....}. Returns the first node matched or nil.
 */
lib_draw_graph.preprocessor.find_node = (function lib_draw_graph$preprocessor$find_node(g,part_node){
return cljs.core.reduce.call(null,(function (acc,cur){
if(lib_draw_graph.preprocessor.submap_QMARK_.call(null,part_node,cur)){
return cljs.core.reduced.call(null,cur);
} else {
return null;
}
}),loom.graph.nodes.call(null,g));
});
/**
 * Returns a sub(di)graph of g going depth first from the first occurrence of
 * the (part) node n.
 */
lib_draw_graph.preprocessor.subgraph = (function lib_draw_graph$preprocessor$subgraph(var_args){
var args__4736__auto__ = [];
var len__4730__auto___39383 = arguments.length;
var i__4731__auto___39384 = (0);
while(true){
if((i__4731__auto___39384 < len__4730__auto___39383)){
args__4736__auto__.push((arguments[i__4731__auto___39384]));

var G__39385 = (i__4731__auto___39384 + (1));
i__4731__auto___39384 = G__39385;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return lib_draw_graph.preprocessor.subgraph.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

lib_draw_graph.preprocessor.subgraph.cljs$core$IFn$_invoke$arity$variadic = (function (g,n,p__39380){
var map__39381 = p__39380;
var map__39381__$1 = (((((!((map__39381 == null))))?(((((map__39381.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39381.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39381):map__39381);
var part_node_QMARK_ = cljs.core.get.call(null,map__39381__$1,new cljs.core.Keyword(null,"part-node?","part-node?",242747632),false);
var node = (cljs.core.truth_(part_node_QMARK_)?lib_draw_graph.preprocessor.find_node.call(null,g,n):n);
return cljs.core.apply.call(null,loom.graph.digraph,loom.alg_generic.pre_edge_traverse.call(null,((function (node,map__39381,map__39381__$1,part_node_QMARK_){
return (function (p1__39376_SHARP_){
return loom.graph.successors_STAR_.call(null,g,p1__39376_SHARP_);
});})(node,map__39381,map__39381__$1,part_node_QMARK_))
,node));
});

lib_draw_graph.preprocessor.subgraph.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
lib_draw_graph.preprocessor.subgraph.cljs$lang$applyTo = (function (seq39377){
var G__39378 = cljs.core.first.call(null,seq39377);
var seq39377__$1 = cljs.core.next.call(null,seq39377);
var G__39379 = cljs.core.first.call(null,seq39377__$1);
var seq39377__$2 = cljs.core.next.call(null,seq39377__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39378,G__39379,seq39377__$2);
});

/**
 * Returns the leaves in the graph.
 */
lib_draw_graph.preprocessor.leaves = (function lib_draw_graph$preprocessor$leaves(g){
return cljs.core.filter.call(null,(function (p1__39386_SHARP_){
return lib_draw_graph.graph.leaf_QMARK_.call(null,g,p1__39386_SHARP_);
}),loom.graph.nodes.call(null,g));
});
/**
 * Returns the nodes that are parents of nodes.
 */
lib_draw_graph.preprocessor.parents_of = (function lib_draw_graph$preprocessor$parents_of(g,nodes){
var visible_parents = (function lib_draw_graph$preprocessor$parents_of_$_visible_parents(g__$1,n){
var prnts = loom.graph.predecessors_STAR_.call(null,g__$1,n);
return cljs.core.filter.call(null,((function (prnts){
return (function (p1__39387_SHARP_){
return cljs.core.not.call(null,lib_draw_graph.graph.edge_invisible_QMARK_.call(null,g__$1,p1__39387_SHARP_,n));
});})(prnts))
,prnts);
});
return cljs.core.dedupe.call(null,cljs.core.mapcat.call(null,(function (p1__39388_SHARP_){
return visible_parents.call(null,g,p1__39388_SHARP_);
}),nodes));
});
/**
 * Removes the n lowest levels from the graph.
 */
lib_draw_graph.preprocessor.remove_levels = (function lib_draw_graph$preprocessor$remove_levels(g,n){
var clustered_QMARK_ = lib_draw_graph.clustered.clustered_QMARK_.call(null,g);
var grph = g;
var nds = lib_draw_graph.preprocessor.leaves.call(null,g);
var lvls = n;
while(true){
if((lvls === (0))){
return grph;
} else {
var next_gen = lib_draw_graph.preprocessor.parents_of.call(null,grph,nds);
var grph_STAR_ = ((clustered_QMARK_)?new cljs.core.Keyword(null,"graph","graph",1558099509).cljs$core$IFn$_invoke$arity$1(lib_draw_graph.clustered.remove_nodes.call(null,grph,nds)):loom.graph.remove_nodes_STAR_.call(null,grph,nds));
var G__39389 = grph_STAR_;
var G__39390 = next_gen;
var G__39391 = (lvls - (1));
grph = G__39389;
nds = G__39390;
lvls = G__39391;
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
if(cljs.core.empty_QMARK_.call(null,frontier)){
return state;
} else {
var v = cljs.core.peek.call(null,frontier);
var neighbours = successors.call(null,v);
var G__39392 = cljs.core.conj.call(null,vertices,v);
var G__39393 = cljs.core.into.call(null,explored,neighbours);
var G__39394 = cljs.core.into.call(null,cljs.core.pop.call(null,frontier),cljs.core.remove.call(null,explored,neighbours));
var G__39395 = cljs.core.reduce.call(null,((function (vertices,explored,frontier,state,v,neighbours){
return (function (acc,cur){
return cljs.core.assoc.call(null,acc,cur,f.call(null,acc,v,cur));
});})(vertices,explored,frontier,state,v,neighbours))
,state,neighbours);
vertices = G__39392;
explored = G__39393;
frontier = G__39394;
state = G__39395;
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
return mx.call(null,cljs.core.get.call(null,state,next),(cljs.core.get.call(null,state,node) + (1)));
});
/**
 * Returns predecessors not including self
 */
lib_draw_graph.preprocessor.predecessors_not_self = (function lib_draw_graph$preprocessor$predecessors_not_self(g,n){
var predec = loom.graph.predecessors_STAR_.call(null,g,n);
return cljs.core.filter.call(null,((function (predec){
return (function (p1__39396_SHARP_){
return (!(cljs.core._EQ_.call(null,n,p1__39396_SHARP_)));
});})(predec))
,predec);
});
/**
 * Returns successors not including self
 */
lib_draw_graph.preprocessor.successors_not_self = (function lib_draw_graph$preprocessor$successors_not_self(g,n){
var succs = loom.graph.successors_STAR_.call(null,g,n);
return cljs.core.filter.call(null,((function (succs){
return (function (p1__39397_SHARP_){
return (!(cljs.core._EQ_.call(null,n,p1__39397_SHARP_)));
});})(succs))
,succs);
});
/**
 * Returns ranks for each node in g. 0-indexed.
 */
lib_draw_graph.preprocessor.ranks = (function lib_draw_graph$preprocessor$ranks(g){
var root_QMARK_ = (function (p1__39398_SHARP_){
return cljs.core.empty_QMARK_.call(null,lib_draw_graph.preprocessor.predecessors_not_self.call(null,g,p1__39398_SHARP_));
});
var roots = cljs.core.filter.call(null,root_QMARK_,loom.graph.nodes.call(null,g));
var init = cljs.core.zipmap.call(null,roots,cljs.core.repeat.call(null,(0)));
return cljs.core.reduce.call(null,((function (root_QMARK_,roots,init){
return (function (acc,cur){
return lib_draw_graph.preprocessor.eager_stateful_dfs.call(null,cljs.core.partial.call(null,lib_draw_graph.preprocessor.successors_not_self,g),cur,lib_draw_graph.preprocessor.update_rank,acc);
});})(root_QMARK_,roots,init))
,init,roots);
});
lib_draw_graph.preprocessor.fmap = (function lib_draw_graph$preprocessor$fmap(f,m){
return cljs.core.into.call(null,cljs.core.empty.call(null,m),(function (){var iter__4523__auto__ = (function lib_draw_graph$preprocessor$fmap_$_iter__39399(s__39400){
return (new cljs.core.LazySeq(null,(function (){
var s__39400__$1 = s__39400;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__39400__$1);
if(temp__5720__auto__){
var s__39400__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__39400__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__39400__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__39402 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__39401 = (0);
while(true){
if((i__39401 < size__4522__auto__)){
var vec__39403 = cljs.core._nth.call(null,c__4521__auto__,i__39401);
var k = cljs.core.nth.call(null,vec__39403,(0),null);
var v = cljs.core.nth.call(null,vec__39403,(1),null);
cljs.core.chunk_append.call(null,b__39402,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,v)], null));

var G__39409 = (i__39401 + (1));
i__39401 = G__39409;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39402),lib_draw_graph$preprocessor$fmap_$_iter__39399.call(null,cljs.core.chunk_rest.call(null,s__39400__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39402),null);
}
} else {
var vec__39406 = cljs.core.first.call(null,s__39400__$2);
var k = cljs.core.nth.call(null,vec__39406,(0),null);
var v = cljs.core.nth.call(null,vec__39406,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,v)], null),lib_draw_graph$preprocessor$fmap_$_iter__39399.call(null,cljs.core.rest.call(null,s__39400__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,m);
})());
});
/**
 * Applies f to every value in nested map.
 */
lib_draw_graph.preprocessor.fmap_STAR_ = (function lib_draw_graph$preprocessor$fmap_STAR_(f,m){
return lib_draw_graph.preprocessor.fmap.call(null,(function (p1__39410_SHARP_){
if(cljs.core.map_QMARK_.call(null,p1__39410_SHARP_)){
return lib_draw_graph.preprocessor.fmap_STAR_.call(null,f,p1__39410_SHARP_);
} else {
return f.call(null,p1__39410_SHARP_);
}
}),m);
});
/**
 * Organizes ranks by k. k is usually a cluster.
 */
lib_draw_graph.preprocessor.rank_info = (function lib_draw_graph$preprocessor$rank_info(ranks,k){
var r = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__39412){
var vec__39413 = p__39412;
var k__$1 = cljs.core.nth.call(null,vec__39413,(0),null);
var v = cljs.core.nth.call(null,vec__39413,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__$1,cljs.core.group_by.call(null,cljs.core.second,v)], null);
})),cljs.core.group_by.call(null,(function (n){
return cljs.core.get.call(null,cljs.core.first.call(null,n),k);
}),ranks));
return lib_draw_graph.preprocessor.fmap_STAR_.call(null,((function (r){
return (function (p1__39411_SHARP_){
return cljs.core.map.call(null,cljs.core.first,p1__39411_SHARP_);
});})(r))
,r);
});
/**
 * Returns seq of nodes at the max rank for the k. k is usually a cluster.
 */
lib_draw_graph.preprocessor.max_ranked_nodes = (function lib_draw_graph$preprocessor$max_ranked_nodes(info,k,n){
var m = cljs.core.into.call(null,cljs.core.sorted_map_by.call(null,cljs.core._GT_),cljs.core.get.call(null,info,k));
var m_SINGLEQUOTE_ = cljs.core.flatten.call(null,cljs.core.vals.call(null,m));
return cljs.core.take.call(null,n,m_SINGLEQUOTE_);
});
/**
 * Returns seq of nodes at the min rank for the k. k is usually a cluster.
 */
lib_draw_graph.preprocessor.min_ranked_nodes = (function lib_draw_graph$preprocessor$min_ranked_nodes(info,k,n){
var m = cljs.core.into.call(null,cljs.core.sorted_map.call(null),cljs.core.get.call(null,info,k));
var m_SINGLEQUOTE_ = cljs.core.flatten.call(null,cljs.core.vals.call(null,m));
return cljs.core.take.call(null,n,m_SINGLEQUOTE_);
});
lib_draw_graph.preprocessor.cluster_edges = new cljs.core.PersistentArrayMap(null, 7, [(16),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(4)], null),(12),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(3)], null),(9),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(3)], null),(6),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(2)], null),(4),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null),(2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1)], null),(1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)], null);
/**
 * Returns a set of edges between all of the min ranked nodes of clstr1
 * and one of the max ranked nodes in clstr2. edges already in the graph
 * are returned marked with :constraint
 */
lib_draw_graph.preprocessor.edges_between = (function lib_draw_graph$preprocessor$edges_between(g,info,ce_uppers,ce_lowers,clstr1,clstr2){
var edges = loom.graph.edges.call(null,g);
var clstr1s = lib_draw_graph.clustered.cluster_descendants.call(null,g,clstr1);
var clstr2s = lib_draw_graph.clustered.cluster_descendants.call(null,g,clstr2);
var clstr1s_mins = cljs.core.mapcat.call(null,((function (edges,clstr1s,clstr2s){
return (function (p1__39416_SHARP_){
return lib_draw_graph.preprocessor.max_ranked_nodes.call(null,info,p1__39416_SHARP_,ce_uppers);
});})(edges,clstr1s,clstr2s))
,clstr1s);
var clstr2s_maxs = cljs.core.mapcat.call(null,((function (edges,clstr1s,clstr2s,clstr1s_mins){
return (function (p1__39417_SHARP_){
return lib_draw_graph.preprocessor.min_ranked_nodes.call(null,info,p1__39417_SHARP_,ce_lowers);
});})(edges,clstr1s,clstr2s,clstr1s_mins))
,clstr2s);
var iter__4523__auto__ = ((function (edges,clstr1s,clstr2s,clstr1s_mins,clstr2s_maxs){
return (function lib_draw_graph$preprocessor$edges_between_$_iter__39418(s__39419){
return (new cljs.core.LazySeq(null,((function (edges,clstr1s,clstr2s,clstr1s_mins,clstr2s_maxs){
return (function (){
var s__39419__$1 = s__39419;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__39419__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var x = cljs.core.first.call(null,xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__39419__$1,x,xs__6277__auto__,temp__5720__auto__,edges,clstr1s,clstr2s,clstr1s_mins,clstr2s_maxs){
return (function lib_draw_graph$preprocessor$edges_between_$_iter__39418_$_iter__39420(s__39421){
return (new cljs.core.LazySeq(null,((function (s__39419__$1,x,xs__6277__auto__,temp__5720__auto__,edges,clstr1s,clstr2s,clstr1s_mins,clstr2s_maxs){
return (function (){
var s__39421__$1 = s__39421;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__39421__$1);
if(temp__5720__auto____$1){
var s__39421__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__39421__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__39421__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__39423 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__39422 = (0);
while(true){
if((i__39422 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__39422);
cljs.core.chunk_append.call(null,b__39423,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)]),edges))?new cljs.core.Keyword(null,"constraint","constraint",1725147424):null)], null));

var G__39424 = (i__39422 + (1));
i__39422 = G__39424;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39423),lib_draw_graph$preprocessor$edges_between_$_iter__39418_$_iter__39420.call(null,cljs.core.chunk_rest.call(null,s__39421__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39423),null);
}
} else {
var y = cljs.core.first.call(null,s__39421__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)]),edges))?new cljs.core.Keyword(null,"constraint","constraint",1725147424):null)], null),lib_draw_graph$preprocessor$edges_between_$_iter__39418_$_iter__39420.call(null,cljs.core.rest.call(null,s__39421__$2)));
}
} else {
return null;
}
break;
}
});})(s__39419__$1,x,xs__6277__auto__,temp__5720__auto__,edges,clstr1s,clstr2s,clstr1s_mins,clstr2s_maxs))
,null,null));
});})(s__39419__$1,x,xs__6277__auto__,temp__5720__auto__,edges,clstr1s,clstr2s,clstr1s_mins,clstr2s_maxs))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,clstr2s_maxs));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,lib_draw_graph$preprocessor$edges_between_$_iter__39418.call(null,cljs.core.rest.call(null,s__39419__$1)));
} else {
var G__39425 = cljs.core.rest.call(null,s__39419__$1);
s__39419__$1 = G__39425;
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
return iter__4523__auto__.call(null,clstr1s_mins);
});
lib_draw_graph.preprocessor.get_rank_info = (function lib_draw_graph$preprocessor$get_rank_info(g,cluster_on){
var rks = lib_draw_graph.preprocessor.ranks.call(null,g);
var ri = lib_draw_graph.preprocessor.rank_info.call(null,rks,cluster_on);
return ri;
});
/**
 * Adds a stack of clusters to the graph. cluster-edge-nums is a 2-vector where
 * the first is the number of nodes in the upper cluster and the second the lower.
 */
lib_draw_graph.preprocessor.add_stack = (function lib_draw_graph$preprocessor$add_stack(g,ri,stack,cluster_edge_nums){
var edges = cljs.core.mapcat.call(null,(function (p1__39426_SHARP_){
return cljs.core.apply.call(null,lib_draw_graph.preprocessor.edges_between,g,ri,cljs.core.first.call(null,cluster_edge_nums),cljs.core.second.call(null,cluster_edge_nums),p1__39426_SHARP_);
}),cljs.core.partition.call(null,(2),(1),stack));
var edges_SINGLEQUOTE_ = cljs.core.group_by.call(null,((function (edges){
return (function (p1__39427_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"constraint","constraint",1725147424),cljs.core.nth.call(null,p1__39427_SHARP_,(2)));
});})(edges))
,edges);
var edges_SINGLEQUOTE__f = cljs.core.get.call(null,edges_SINGLEQUOTE_,false);
var edges_SINGLEQUOTE__t = cljs.core.get.call(null,edges_SINGLEQUOTE_,true);
return loom.attr.add_attr_to_edges.call(null,loom.attr.add_attr_to_edges.call(null,cljs.core.apply.call(null,loom.graph.add_edges,g,edges_SINGLEQUOTE__f),new cljs.core.Keyword(null,"style","style",-496642736),"invis",edges_SINGLEQUOTE__f),new cljs.core.Keyword(null,"constraint","constraint",1725147424),true,edges_SINGLEQUOTE__f);
});
lib_draw_graph.preprocessor.add_invisible_cluster_edges = (function lib_draw_graph$preprocessor$add_invisible_cluster_edges(g,opts,edges){
var ri = lib_draw_graph.preprocessor.get_rank_info.call(null,g,lib_draw_graph.clustered.cluster_key.call(null,g));
var edge_nums = cljs.core.get.call(null,lib_draw_graph.preprocessor.cluster_edges,lib_draw_graph.preprocessor.parse_num.call(null,new cljs.core.Keyword(null,"num-cluster-edges","num-cluster-edges",1635811939).cljs$core$IFn$_invoke$arity$1(opts)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null));
var g_SINGLEQUOTE_ = cljs.core.reduce.call(null,((function (ri,edge_nums){
return (function (acc,p__39428){
var vec__39429 = p__39428;
var c1 = cljs.core.nth.call(null,vec__39429,(0),null);
var c2 = cljs.core.nth.call(null,vec__39429,(1),null);
return lib_draw_graph.preprocessor.add_stack.call(null,acc,ri,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2], null),edge_nums);
});})(ri,edge_nums))
,g,edges);
return g_SINGLEQUOTE_;
});
/**
 * Takes the ranks from an old graph and a subset of clusters and returns
 * the clusters in rank order.
 */
lib_draw_graph.preprocessor.sort_clusters_by_rank = (function lib_draw_graph$preprocessor$sort_clusters_by_rank(ranks,clusters){
var r_SINGLEQUOTE_ = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (acc,p__39432){
var vec__39433 = p__39432;
var k = cljs.core.nth.call(null,vec__39433,(0),null);
var vs = cljs.core.nth.call(null,vec__39433,(1),null);
return cljs.core.assoc.call(null,acc,k,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,cljs.core.first,vs)));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.group_by.call(null,cljs.core.val,ranks))));
var old_ranks = r_SINGLEQUOTE_;
var acc = cljs.core.PersistentVector.EMPTY;
var clstrs = clusters;
while(true){
if(cljs.core.empty_QMARK_.call(null,old_ranks)){
return acc;
} else {
var items_at = cljs.core.first.call(null,old_ranks);
var matched = clojure.set.intersection.call(null,clstrs,items_at);
var unmatched = clojure.set.difference.call(null,clstrs,items_at);
if(cljs.core.empty_QMARK_.call(null,matched)){
var G__39436 = cljs.core.rest.call(null,old_ranks);
var G__39437 = acc;
var G__39438 = clstrs;
old_ranks = G__39436;
acc = G__39437;
clstrs = G__39438;
continue;
} else {
var G__39439 = cljs.core.rest.call(null,old_ranks);
var G__39440 = cljs.core.conj.call(null,acc,matched);
var G__39441 = unmatched;
old_ranks = G__39439;
acc = G__39440;
clstrs = G__39441;
continue;
}
}
break;
}
});
lib_draw_graph.preprocessor.rankseq__GT_edges = (function lib_draw_graph$preprocessor$rankseq__GT_edges(rankseq){
return cljs.core.mapcat.call(null,(function (p__39442){
var vec__39443 = p__39442;
var srcs = cljs.core.nth.call(null,vec__39443,(0),null);
var dests = cljs.core.nth.call(null,vec__39443,(1),null);
var iter__4523__auto__ = ((function (vec__39443,srcs,dests){
return (function lib_draw_graph$preprocessor$rankseq__GT_edges_$_iter__39446(s__39447){
return (new cljs.core.LazySeq(null,((function (vec__39443,srcs,dests){
return (function (){
var s__39447__$1 = s__39447;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__39447__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var x = cljs.core.first.call(null,xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__39447__$1,x,xs__6277__auto__,temp__5720__auto__,vec__39443,srcs,dests){
return (function lib_draw_graph$preprocessor$rankseq__GT_edges_$_iter__39446_$_iter__39448(s__39449){
return (new cljs.core.LazySeq(null,((function (s__39447__$1,x,xs__6277__auto__,temp__5720__auto__,vec__39443,srcs,dests){
return (function (){
var s__39449__$1 = s__39449;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__39449__$1);
if(temp__5720__auto____$1){
var s__39449__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__39449__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__39449__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__39451 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__39450 = (0);
while(true){
if((i__39450 < size__4522__auto__)){
var y = cljs.core._nth.call(null,c__4521__auto__,i__39450);
cljs.core.chunk_append.call(null,b__39451,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

var G__39452 = (i__39450 + (1));
i__39450 = G__39452;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39451),lib_draw_graph$preprocessor$rankseq__GT_edges_$_iter__39446_$_iter__39448.call(null,cljs.core.chunk_rest.call(null,s__39449__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39451),null);
}
} else {
var y = cljs.core.first.call(null,s__39449__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),lib_draw_graph$preprocessor$rankseq__GT_edges_$_iter__39446_$_iter__39448.call(null,cljs.core.rest.call(null,s__39449__$2)));
}
} else {
return null;
}
break;
}
});})(s__39447__$1,x,xs__6277__auto__,temp__5720__auto__,vec__39443,srcs,dests))
,null,null));
});})(s__39447__$1,x,xs__6277__auto__,temp__5720__auto__,vec__39443,srcs,dests))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,dests));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,lib_draw_graph$preprocessor$rankseq__GT_edges_$_iter__39446.call(null,cljs.core.rest.call(null,s__39447__$1)));
} else {
var G__39453 = cljs.core.rest.call(null,s__39447__$1);
s__39447__$1 = G__39453;
continue;
}
} else {
return null;
}
break;
}
});})(vec__39443,srcs,dests))
,null,null));
});})(vec__39443,srcs,dests))
;
return iter__4523__auto__.call(null,srcs);
}),cljs.core.partition.call(null,(2),(1),rankseq));
});
/**
 * Filter's the graph's edge-graph to just supplied clusters.
 */
lib_draw_graph.preprocessor.filter_edge_graph = (function lib_draw_graph$preprocessor$filter_edge_graph(g,clusters){
var old_edge_graph = new cljs.core.Keyword(null,"edge-graph","edge-graph",936862687).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"clusters","clusters",273881275).cljs$core$IFn$_invoke$arity$1(g));
var old_ranks = lib_draw_graph.preprocessor.ranks.call(null,old_edge_graph);
var sorted_clusters = lib_draw_graph.preprocessor.sort_clusters_by_rank.call(null,old_ranks,clusters);
var new_edges = lib_draw_graph.preprocessor.rankseq__GT_edges.call(null,sorted_clusters);
return cljs.core.reduce.call(null,((function (old_edge_graph,old_ranks,sorted_clusters,new_edges){
return (function (acc,p__39454){
var vec__39455 = p__39454;
var c1 = cljs.core.nth.call(null,vec__39455,(0),null);
var c2 = cljs.core.nth.call(null,vec__39455,(1),null);
return lib_draw_graph.clustered.add_cluster_edge.call(null,acc,c1,c2);
});})(old_edge_graph,old_ranks,sorted_clusters,new_edges))
,lib_draw_graph.clustered.delete_edge_graph.call(null,g),new_edges);
});
lib_draw_graph.preprocessor._STAR_part_sep_STAR_ = /[^=:<>(<=)(>=)]+|[=:<>(<=)(>=)]/;
lib_draw_graph.preprocessor.split_parts = (function lib_draw_graph$preprocessor$split_parts(s){
return clojure.string.split.call(null,s,lib_draw_graph.preprocessor._STAR_part_sep_STAR_,(-1));
});
lib_draw_graph.preprocessor._STAR_group_STAR_ = /\[.*\]/;
lib_draw_graph.preprocessor.remove_first_and_last = (function lib_draw_graph$preprocessor$remove_first_and_last(s){
return cljs.core.subs.call(null,s,(1),(cljs.core.count.call(null,s) - (1)));
});
/**
 * takes a term key and term value (which may represent a choice in the form
 * [a or b or c] and assesses whether the key and value (or one of the values) is a
 * submap of item.
 */
lib_draw_graph.preprocessor.equality_match_QMARK_ = (function lib_draw_graph$preprocessor$equality_match_QMARK_(term_k,term_v,item){
var choice_QMARK_ = (!((cljs.core.re_matches.call(null,lib_draw_graph.preprocessor._STAR_group_STAR_,term_v) == null)));
if((!(choice_QMARK_))){
return lib_draw_graph.preprocessor.submap_QMARK_.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([term_k,term_v]),item);
} else {
var opts = clojure.string.split.call(null,lib_draw_graph.preprocessor.remove_first_and_last.call(null,term_v),/ or /);
return cljs.core.reduce.call(null,((function (opts,choice_QMARK_){
return (function (acc,cur){
var or__4131__auto__ = acc;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return lib_draw_graph.preprocessor.submap_QMARK_.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([term_k,cur]),item);
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
var v = lib_draw_graph.preprocessor.parse_num.call(null,term_v);
var v_item = lib_draw_graph.preprocessor.parse_num.call(null,term_k.call(null,item));
if((!(typeof v_item === 'number'))){
throw lib_draw_graph.util.err.call(null,"internal oops!");
} else {
}

var G__39458 = op;
switch (G__39458) {
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
throw lib_draw_graph.util.err.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(op)," is not a valid comparison operator."].join(''));

}
});
lib_draw_graph.preprocessor.sub_matches_QMARK_ = (function lib_draw_graph$preprocessor$sub_matches_QMARK_(term,item){
if((!(cljs.core.contains_QMARK_.call(null,item,cljs.core.keyword.call(null,cljs.core.first.call(null,term)))))){
return true;
} else {
var op = cljs.core.second.call(null,term);
if(((cljs.core._EQ_.call(null,"=",op)) || (cljs.core._EQ_.call(null,":",op)))){
return lib_draw_graph.preprocessor.equality_match_QMARK_.call(null,cljs.core.keyword.call(null,cljs.core.first.call(null,term)),cljs.core.nth.call(null,term,(2)),item);
} else {
if(((cljs.core._EQ_.call(null,">",op)) || (cljs.core._EQ_.call(null,"<",op)) || (cljs.core._EQ_.call(null,">=",op)) || (cljs.core._EQ_.call(null,"<=",op)))){
return lib_draw_graph.preprocessor.inequality_match_QMARK_.call(null,cljs.core.keyword.call(null,cljs.core.first.call(null,term)),cljs.core.second.call(null,term),cljs.core.nth.call(null,term,(2)),item);
} else {
throw lib_draw_graph.util.err.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(op)," is not a valid comparison operator."].join(''));

}
}
}
});
/**
 * Returns a filtered graph where nodes where is not a submap are filtered out.
 */
lib_draw_graph.preprocessor.filter_graph = (function lib_draw_graph$preprocessor$filter_graph(var_args){
var args__4736__auto__ = [];
var len__4730__auto___39472 = arguments.length;
var i__4731__auto___39473 = (0);
while(true){
if((i__4731__auto___39473 < len__4730__auto___39472)){
args__4736__auto__.push((arguments[i__4731__auto___39473]));

var G__39474 = (i__4731__auto___39473 + (1));
i__4731__auto___39473 = G__39474;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return lib_draw_graph.preprocessor.filter_graph.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

lib_draw_graph.preprocessor.filter_graph.cljs$core$IFn$_invoke$arity$variadic = (function (g,subs,p__39465){
var map__39466 = p__39465;
var map__39466__$1 = (((((!((map__39466 == null))))?(((((map__39466.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39466.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39466):map__39466);
var filter_edges_QMARK_ = cljs.core.get.call(null,map__39466__$1,new cljs.core.Keyword(null,"filter-edges?","filter-edges?",1330813465),true);
var subs__$1 = clojure.string.split.call(null,subs,/( or )(?![^\[]*\])/);
var subs__$2 = cljs.core.map.call(null,((function (subs__$1,map__39466,map__39466__$1,filter_edges_QMARK_){
return (function (p1__39460_SHARP_){
return cljs.core.re_seq.call(null,lib_draw_graph.preprocessor._STAR_part_sep_STAR_,p1__39460_SHARP_);
});})(subs__$1,map__39466,map__39466__$1,filter_edges_QMARK_))
,subs__$1);
var filtered_nodes = cljs.core.filter.call(null,((function (subs__$1,subs__$2,map__39466,map__39466__$1,filter_edges_QMARK_){
return (function (p1__39461_SHARP_){
return cljs.core.not.call(null,cljs.core.reduce.call(null,((function (subs__$1,subs__$2,map__39466,map__39466__$1,filter_edges_QMARK_){
return (function (acc,term){
var or__4131__auto__ = acc;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return lib_draw_graph.preprocessor.sub_matches_QMARK_.call(null,term,p1__39461_SHARP_);
}
});})(subs__$1,subs__$2,map__39466,map__39466__$1,filter_edges_QMARK_))
,false,subs__$2));
});})(subs__$1,subs__$2,map__39466,map__39466__$1,filter_edges_QMARK_))
,loom.graph.nodes.call(null,g));
var g_SINGLEQUOTE_ = ((lib_draw_graph.clustered.clustered_QMARK_.call(null,g))?lib_draw_graph.clustered.remove_nodes.call(null,g,filtered_nodes):cljs.core.apply.call(null,loom.graph.remove_nodes,g,filtered_nodes));
if(cljs.core.truth_(filter_edges_QMARK_)){
var filtered_edges = cljs.core.filter.call(null,((function (subs__$1,subs__$2,filtered_nodes,g_SINGLEQUOTE_,map__39466,map__39466__$1,filter_edges_QMARK_){
return (function (p__39468){
var vec__39469 = p__39468;
var src = cljs.core.nth.call(null,vec__39469,(0),null);
var dst = cljs.core.nth.call(null,vec__39469,(1),null);
return cljs.core.not.call(null,cljs.core.reduce.call(null,((function (vec__39469,src,dst,subs__$1,subs__$2,filtered_nodes,g_SINGLEQUOTE_,map__39466,map__39466__$1,filter_edges_QMARK_){
return (function (acc,term){
var or__4131__auto__ = acc;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core._EQ_.call(null,loom.attr.attr.call(null,g_SINGLEQUOTE_,src,dst,new cljs.core.Keyword(null,"style","style",-496642736)),"invis")){
return true;
} else {
return lib_draw_graph.preprocessor.sub_matches_QMARK_.call(null,term,loom.attr.attr.call(null,g_SINGLEQUOTE_,src,dst,new cljs.core.Keyword(null,"meta","meta",1499536964)));
}
}
});})(vec__39469,src,dst,subs__$1,subs__$2,filtered_nodes,g_SINGLEQUOTE_,map__39466,map__39466__$1,filter_edges_QMARK_))
,false,subs__$2));
});})(subs__$1,subs__$2,filtered_nodes,g_SINGLEQUOTE_,map__39466,map__39466__$1,filter_edges_QMARK_))
,loom.graph.edges.call(null,g_SINGLEQUOTE_));
return cljs.core.apply.call(null,loom.graph.remove_edges,g_SINGLEQUOTE_,filtered_edges);
} else {
return g_SINGLEQUOTE_;
}
});

lib_draw_graph.preprocessor.filter_graph.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
lib_draw_graph.preprocessor.filter_graph.cljs$lang$applyTo = (function (seq39462){
var G__39463 = cljs.core.first.call(null,seq39462);
var seq39462__$1 = cljs.core.next.call(null,seq39462);
var G__39464 = cljs.core.first.call(null,seq39462__$1);
var seq39462__$2 = cljs.core.next.call(null,seq39462__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39463,G__39464,seq39462__$2);
});

/**
 * Returns a graph with only nodes on paths between start filtering term and the end.
 */
lib_draw_graph.preprocessor.paths = (function lib_draw_graph$preprocessor$paths(g,start_subs,end_subs){
var start_nodes = loom.graph.nodes.call(null,lib_draw_graph.preprocessor.filter_graph.call(null,g,start_subs,new cljs.core.Keyword(null,"filter-edges?","filter-edges?",1330813465),false));
var end_nodes = loom.graph.nodes.call(null,lib_draw_graph.preprocessor.filter_graph.call(null,g,end_subs,new cljs.core.Keyword(null,"filter-edges?","filter-edges?",1330813465),false));
var combins = (function (){var iter__4523__auto__ = ((function (start_nodes,end_nodes){
return (function lib_draw_graph$preprocessor$paths_$_iter__39476(s__39477){
return (new cljs.core.LazySeq(null,((function (start_nodes,end_nodes){
return (function (){
var s__39477__$1 = s__39477;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__39477__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var s = cljs.core.first.call(null,xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__39477__$1,s,xs__6277__auto__,temp__5720__auto__,start_nodes,end_nodes){
return (function lib_draw_graph$preprocessor$paths_$_iter__39476_$_iter__39478(s__39479){
return (new cljs.core.LazySeq(null,((function (s__39477__$1,s,xs__6277__auto__,temp__5720__auto__,start_nodes,end_nodes){
return (function (){
var s__39479__$1 = s__39479;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__39479__$1);
if(temp__5720__auto____$1){
var s__39479__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__39479__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__39479__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__39481 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__39480 = (0);
while(true){
if((i__39480 < size__4522__auto__)){
var e = cljs.core._nth.call(null,c__4521__auto__,i__39480);
cljs.core.chunk_append.call(null,b__39481,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,e], null));

var G__39482 = (i__39480 + (1));
i__39480 = G__39482;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39481),lib_draw_graph$preprocessor$paths_$_iter__39476_$_iter__39478.call(null,cljs.core.chunk_rest.call(null,s__39479__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39481),null);
}
} else {
var e = cljs.core.first.call(null,s__39479__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,e], null),lib_draw_graph$preprocessor$paths_$_iter__39476_$_iter__39478.call(null,cljs.core.rest.call(null,s__39479__$2)));
}
} else {
return null;
}
break;
}
});})(s__39477__$1,s,xs__6277__auto__,temp__5720__auto__,start_nodes,end_nodes))
,null,null));
});})(s__39477__$1,s,xs__6277__auto__,temp__5720__auto__,start_nodes,end_nodes))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,end_nodes));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,lib_draw_graph$preprocessor$paths_$_iter__39476.call(null,cljs.core.rest.call(null,s__39477__$1)));
} else {
var G__39483 = cljs.core.rest.call(null,s__39477__$1);
s__39477__$1 = G__39483;
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
return iter__4523__auto__.call(null,start_nodes);
})();
var paths = cljs.core.map.call(null,((function (start_nodes,end_nodes,combins){
return (function (p1__39475_SHARP_){
return cljs.core.apply.call(null,loom.alg_generic.bf_path,cljs.core.partial.call(null,lib_draw_graph.graph.successors,g),p1__39475_SHARP_);
});})(start_nodes,end_nodes,combins))
,combins);
var nds = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.flatten.call(null,paths)));
var nds_compl = clojure.set.difference.call(null,loom.graph.nodes.call(null,g),nds);
if(lib_draw_graph.clustered.clustered_QMARK_.call(null,g)){
return lib_draw_graph.clustered.remove_nodes.call(null,g,nds_compl);
} else {
return loom.graph.remove_nodes.call(null,g,nds_compl);
}
});
lib_draw_graph.preprocessor.same_ranks = (function lib_draw_graph$preprocessor$same_ranks(info){

return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__39484){
var vec__39485 = p__39484;
var k = cljs.core.nth.call(null,vec__39485,(0),null);
var v = cljs.core.nth.call(null,vec__39485,(1),null);
var vec__39488 = cljs.core.vals.call(null,v);
var _ = cljs.core.nth.call(null,vec__39488,(0),null);
var inner = cljs.core.nth.call(null,vec__39488,(1),null);
if((cljs.core.count.call(null,inner) > (1))){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([k,cljs.core.vals.call(null,v)]);
} else {
return null;
}
}),info));
});
lib_draw_graph.preprocessor.fix_ranks = (function lib_draw_graph$preprocessor$fix_ranks(g,cluster_on){
var same = lib_draw_graph.preprocessor.same_ranks.call(null,lib_draw_graph.preprocessor.get_rank_info.call(null,g,cluster_on));
return cljs.core.reduce.call(null,((function (same){
return (function (acc,p__39491){
var vec__39492 = p__39491;
var k = cljs.core.nth.call(null,vec__39492,(0),null);
var v = cljs.core.nth.call(null,vec__39492,(1),null);
return lib_draw_graph.clustered.add_attr_to_cluster.call(null,acc,k,new cljs.core.Keyword(null,"fix-ranks","fix-ranks",452150575),v);
});})(same))
,g,same);
});

//# sourceMappingURL=preprocessor.js.map
