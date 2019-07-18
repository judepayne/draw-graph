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
goog.require('sqlpred.core');
/**
 * Checks whether m contains all entries in sub.
 */
lib_draw_graph.preprocessor.submap_QMARK_ = (function lib_draw_graph$preprocessor$submap_QMARK_(sub,m){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sub,cljs.core.select_keys(m,cljs.core.keys(sub)));
});
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
var len__4730__auto___36319 = arguments.length;
var i__4731__auto___36320 = (0);
while(true){
if((i__4731__auto___36320 < len__4730__auto___36319)){
args__4736__auto__.push((arguments[i__4731__auto___36320]));

var G__36322 = (i__4731__auto___36320 + (1));
i__4731__auto___36320 = G__36322;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return lib_draw_graph.preprocessor.subgraph.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

lib_draw_graph.preprocessor.subgraph.cljs$core$IFn$_invoke$arity$variadic = (function (g,n,p__36100){
var map__36101 = p__36100;
var map__36101__$1 = (((((!((map__36101 == null))))?(((((map__36101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36101.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36101):map__36101);
var part_node_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36101__$1,new cljs.core.Keyword(null,"part-node?","part-node?",242747632),false);
var node = (cljs.core.truth_(part_node_QMARK_)?lib_draw_graph.preprocessor.find_node(g,n):n);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(loom.graph.digraph,loom.alg_generic.pre_edge_traverse(((function (node,map__36101,map__36101__$1,part_node_QMARK_){
return (function (p1__36096_SHARP_){
return loom.graph.successors_STAR_(g,p1__36096_SHARP_);
});})(node,map__36101,map__36101__$1,part_node_QMARK_))
,node));
});

lib_draw_graph.preprocessor.subgraph.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
lib_draw_graph.preprocessor.subgraph.cljs$lang$applyTo = (function (seq36097){
var G__36098 = cljs.core.first(seq36097);
var seq36097__$1 = cljs.core.next(seq36097);
var G__36099 = cljs.core.first(seq36097__$1);
var seq36097__$2 = cljs.core.next(seq36097__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36098,G__36099,seq36097__$2);
});

/**
 * Returns the leaves in the graph.
 */
lib_draw_graph.preprocessor.leaves = (function lib_draw_graph$preprocessor$leaves(g){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__36105_SHARP_){
return lib_draw_graph.graph.leaf_QMARK_(g,p1__36105_SHARP_);
}),loom.graph.nodes(g));
});
/**
 * Returns the nodes that are parents of nodes.
 */
lib_draw_graph.preprocessor.parents_of = (function lib_draw_graph$preprocessor$parents_of(g,nodes){
var visible_parents = (function lib_draw_graph$preprocessor$parents_of_$_visible_parents(g__$1,n){
var prnts = loom.graph.predecessors_STAR_(g__$1,n);
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (prnts){
return (function (p1__36108_SHARP_){
return cljs.core.not(lib_draw_graph.graph.edge_invisible_QMARK_(g__$1,p1__36108_SHARP_,n));
});})(prnts))
,prnts);
});
return cljs.core.dedupe.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__36109_SHARP_){
return visible_parents(g,p1__36109_SHARP_);
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
var grph_STAR_ = ((clustered_QMARK_)?new cljs.core.Keyword(null,"graph","graph",1558099509).cljs$core$IFn$_invoke$arity$1(lib_draw_graph.clustered.remove_nodes(grph,nds)):loom.graph.remove_nodes_STAR_(grph,nds));
var G__36326 = grph_STAR_;
var G__36327 = next_gen;
var G__36328 = (lvls - (1));
grph = G__36326;
nds = G__36327;
lvls = G__36328;
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
var G__36329 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vertices,v);
var G__36330 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(explored,neighbours);
var G__36331 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(frontier),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(explored,neighbours));
var G__36332 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vertices,explored,frontier,state,v,neighbours){
return (function (acc,cur){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,cur,(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(acc,v,cur) : f.call(null,acc,v,cur)));
});})(vertices,explored,frontier,state,v,neighbours))
,state,neighbours);
vertices = G__36329;
explored = G__36330;
frontier = G__36331;
state = G__36332;
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
 * Returns ranks for each node in g. 0-indexed.
 */
lib_draw_graph.preprocessor.ranks = (function lib_draw_graph$preprocessor$ranks(g){
var roots = lib_draw_graph.util.roots(g);
var init = cljs.core.zipmap(roots,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1((0)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (roots,init){
return (function (acc,cur){
return lib_draw_graph.preprocessor.eager_stateful_dfs(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(lib_draw_graph.util.successors_not_self,g),cur,lib_draw_graph.preprocessor.update_rank,acc);
});})(roots,init))
,init,roots);
});
lib_draw_graph.preprocessor.fmap = (function lib_draw_graph$preprocessor$fmap(f,m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(m),(function (){var iter__4523__auto__ = (function lib_draw_graph$preprocessor$fmap_$_iter__36125(s__36126){
return (new cljs.core.LazySeq(null,(function (){
var s__36126__$1 = s__36126;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__36126__$1);
if(temp__5720__auto__){
var s__36126__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36126__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__36126__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__36128 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__36127 = (0);
while(true){
if((i__36127 < size__4522__auto__)){
var vec__36135 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__36127);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36135,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36135,(1),null);
cljs.core.chunk_append(b__36128,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v))], null));

var G__36335 = (i__36127 + (1));
i__36127 = G__36335;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36128),lib_draw_graph$preprocessor$fmap_$_iter__36125(cljs.core.chunk_rest(s__36126__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36128),null);
}
} else {
var vec__36138 = cljs.core.first(s__36126__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36138,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36138,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v))], null),lib_draw_graph$preprocessor$fmap_$_iter__36125(cljs.core.rest(s__36126__$2)));
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
return lib_draw_graph.preprocessor.fmap((function (p1__36145_SHARP_){
if(cljs.core.map_QMARK_(p1__36145_SHARP_)){
return (lib_draw_graph.preprocessor.fmap_STAR_.cljs$core$IFn$_invoke$arity$2 ? lib_draw_graph.preprocessor.fmap_STAR_.cljs$core$IFn$_invoke$arity$2(f,p1__36145_SHARP_) : lib_draw_graph.preprocessor.fmap_STAR_.call(null,f,p1__36145_SHARP_));
} else {
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__36145_SHARP_) : f.call(null,p1__36145_SHARP_));
}
}),m);
});
/**
 * Organizes ranks by k. k is usually a cluster.
 */
lib_draw_graph.preprocessor.rank_info = (function lib_draw_graph$preprocessor$rank_info(ranks,k){
var r = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__36156){
var vec__36157 = p__36156;
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36157,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36157,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__$1,cljs.core.group_by(cljs.core.second,v)], null);
})),cljs.core.group_by((function (n){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.first(n),k);
}),ranks));
return lib_draw_graph.preprocessor.fmap_STAR_(((function (r){
return (function (p1__36155_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,p1__36155_SHARP_);
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
var clstr1s = lib_draw_graph.clustered.cluster_descendants(g,clojure.string.trim(clstr1));
var clstr2s = lib_draw_graph.clustered.cluster_descendants(g,clojure.string.trim(clstr2));
var clstr1s_mins = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (edges,clstr1s,clstr2s){
return (function (p1__36163_SHARP_){
return lib_draw_graph.preprocessor.max_ranked_nodes(info,p1__36163_SHARP_,ce_uppers);
});})(edges,clstr1s,clstr2s))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clstr1s], 0));
var clstr2s_maxs = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (edges,clstr1s,clstr2s,clstr1s_mins){
return (function (p1__36166_SHARP_){
return lib_draw_graph.preprocessor.min_ranked_nodes(info,p1__36166_SHARP_,ce_lowers);
});})(edges,clstr1s,clstr2s,clstr1s_mins))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clstr2s], 0));
var clstr_edges = (function (){var iter__4523__auto__ = ((function (edges,clstr1s,clstr2s,clstr1s_mins,clstr2s_maxs){
return (function lib_draw_graph$preprocessor$edges_between_$_iter__36169(s__36170){
return (new cljs.core.LazySeq(null,((function (edges,clstr1s,clstr2s,clstr1s_mins,clstr2s_maxs){
return (function (){
var s__36170__$1 = s__36170;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__36170__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var x = cljs.core.first(xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__36170__$1,x,xs__6277__auto__,temp__5720__auto__,edges,clstr1s,clstr2s,clstr1s_mins,clstr2s_maxs){
return (function lib_draw_graph$preprocessor$edges_between_$_iter__36169_$_iter__36171(s__36172){
return (new cljs.core.LazySeq(null,((function (s__36170__$1,x,xs__6277__auto__,temp__5720__auto__,edges,clstr1s,clstr2s,clstr1s_mins,clstr2s_maxs){
return (function (){
var s__36172__$1 = s__36172;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__36172__$1);
if(temp__5720__auto____$1){
var s__36172__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__36172__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__36172__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__36174 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__36173 = (0);
while(true){
if((i__36173 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__36173);
cljs.core.chunk_append(b__36174,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)]),edges))?new cljs.core.Keyword(null,"constraint","constraint",1725147424):null)], null));

var G__36357 = (i__36173 + (1));
i__36173 = G__36357;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36174),lib_draw_graph$preprocessor$edges_between_$_iter__36169_$_iter__36171(cljs.core.chunk_rest(s__36172__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36174),null);
}
} else {
var y = cljs.core.first(s__36172__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)]),edges))?new cljs.core.Keyword(null,"constraint","constraint",1725147424):null)], null),lib_draw_graph$preprocessor$edges_between_$_iter__36169_$_iter__36171(cljs.core.rest(s__36172__$2)));
}
} else {
return null;
}
break;
}
});})(s__36170__$1,x,xs__6277__auto__,temp__5720__auto__,edges,clstr1s,clstr2s,clstr1s_mins,clstr2s_maxs))
,null,null));
});})(s__36170__$1,x,xs__6277__auto__,temp__5720__auto__,edges,clstr1s,clstr2s,clstr1s_mins,clstr2s_maxs))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(clstr2s_maxs));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,lib_draw_graph$preprocessor$edges_between_$_iter__36169(cljs.core.rest(s__36170__$1)));
} else {
var G__36364 = cljs.core.rest(s__36170__$1);
s__36170__$1 = G__36364;
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
})();
return clstr_edges;
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
var edges = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__36180_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(lib_draw_graph.preprocessor.edges_between,g,ri,cljs.core.first(cluster_edge_nums),cljs.core.second(cluster_edge_nums),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__36180_SHARP_], 0));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),stack)], 0));
var edges_SINGLEQUOTE_ = cljs.core.group_by(((function (edges){
return (function (p1__36181_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"constraint","constraint",1725147424),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__36181_SHARP_,(2)));
});})(edges))
,edges);
var edges_SINGLEQUOTE__f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(edges_SINGLEQUOTE_,false);
var edges_SINGLEQUOTE__t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(edges_SINGLEQUOTE_,true);
return loom.attr.add_attr_to_edges(loom.attr.add_attr_to_edges(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(loom.graph.add_edges,g,edges_SINGLEQUOTE__f),new cljs.core.Keyword(null,"style","style",-496642736),"invis",edges_SINGLEQUOTE__f),new cljs.core.Keyword(null,"constraint","constraint",1725147424),true,edges_SINGLEQUOTE__f);
});
lib_draw_graph.preprocessor.add_invisible_cluster_edges = (function lib_draw_graph$preprocessor$add_invisible_cluster_edges(g,opts,edges){
var ri = lib_draw_graph.preprocessor.get_rank_info(g,lib_draw_graph.clustered.cluster_key(g));
var edge_nums = cljs.core.get.cljs$core$IFn$_invoke$arity$3(lib_draw_graph.preprocessor.cluster_edges,lib_draw_graph.util.parse_int(new cljs.core.Keyword(null,"num-cluster-edges","num-cluster-edges",1635811939).cljs$core$IFn$_invoke$arity$1(opts)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null));
var g_SINGLEQUOTE_ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (ri,edge_nums){
return (function (acc,p__36185){
var vec__36186 = p__36185;
var c1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36186,(0),null);
var c2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36186,(1),null);
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
var r_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.vals(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__36192){
var vec__36193 = p__36192;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36193,(0),null);
var vs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36193,(1),null);
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
var G__36370 = cljs.core.rest(old_ranks);
var G__36371 = acc;
var G__36372 = clstrs;
old_ranks = G__36370;
acc = G__36371;
clstrs = G__36372;
continue;
} else {
var G__36373 = cljs.core.rest(old_ranks);
var G__36374 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,matched);
var G__36375 = unmatched;
old_ranks = G__36373;
acc = G__36374;
clstrs = G__36375;
continue;
}
}
break;
}
});
lib_draw_graph.preprocessor.rankseq__GT_edges = (function lib_draw_graph$preprocessor$rankseq__GT_edges(rankseq){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__36204){
var vec__36205 = p__36204;
var srcs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36205,(0),null);
var dests = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36205,(1),null);
var iter__4523__auto__ = ((function (vec__36205,srcs,dests){
return (function lib_draw_graph$preprocessor$rankseq__GT_edges_$_iter__36208(s__36209){
return (new cljs.core.LazySeq(null,((function (vec__36205,srcs,dests){
return (function (){
var s__36209__$1 = s__36209;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__36209__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var x = cljs.core.first(xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__36209__$1,x,xs__6277__auto__,temp__5720__auto__,vec__36205,srcs,dests){
return (function lib_draw_graph$preprocessor$rankseq__GT_edges_$_iter__36208_$_iter__36210(s__36211){
return (new cljs.core.LazySeq(null,((function (s__36209__$1,x,xs__6277__auto__,temp__5720__auto__,vec__36205,srcs,dests){
return (function (){
var s__36211__$1 = s__36211;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__36211__$1);
if(temp__5720__auto____$1){
var s__36211__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__36211__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__36211__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__36213 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__36212 = (0);
while(true){
if((i__36212 < size__4522__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__36212);
cljs.core.chunk_append(b__36213,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

var G__36379 = (i__36212 + (1));
i__36212 = G__36379;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36213),lib_draw_graph$preprocessor$rankseq__GT_edges_$_iter__36208_$_iter__36210(cljs.core.chunk_rest(s__36211__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36213),null);
}
} else {
var y = cljs.core.first(s__36211__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),lib_draw_graph$preprocessor$rankseq__GT_edges_$_iter__36208_$_iter__36210(cljs.core.rest(s__36211__$2)));
}
} else {
return null;
}
break;
}
});})(s__36209__$1,x,xs__6277__auto__,temp__5720__auto__,vec__36205,srcs,dests))
,null,null));
});})(s__36209__$1,x,xs__6277__auto__,temp__5720__auto__,vec__36205,srcs,dests))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(dests));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,lib_draw_graph$preprocessor$rankseq__GT_edges_$_iter__36208(cljs.core.rest(s__36209__$1)));
} else {
var G__36380 = cljs.core.rest(s__36209__$1);
s__36209__$1 = G__36380;
continue;
}
} else {
return null;
}
break;
}
});})(vec__36205,srcs,dests))
,null,null));
});})(vec__36205,srcs,dests))
;
return iter__4523__auto__(srcs);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),rankseq)], 0));
});
/**
 * Filter's the graph's edge-graph to just supplied clusters.
 */
lib_draw_graph.preprocessor.filter_edge_graph = (function lib_draw_graph$preprocessor$filter_edge_graph(g,clusters){
var old_edge_graph = new cljs.core.Keyword(null,"edge-graph","edge-graph",936862687).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"clusters","clusters",273881275).cljs$core$IFn$_invoke$arity$1(g));
var old_ranks = lib_draw_graph.preprocessor.ranks(old_edge_graph);
var sorted_clusters = lib_draw_graph.preprocessor.sort_clusters_by_rank(old_ranks,clusters);
var new_edges = lib_draw_graph.preprocessor.rankseq__GT_edges(sorted_clusters);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (old_edge_graph,old_ranks,sorted_clusters,new_edges){
return (function (acc,p__36241){
var vec__36244 = p__36241;
var c1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36244,(0),null);
var c2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36244,(1),null);
return lib_draw_graph.clustered.add_cluster_edge(acc,c1,c2);
});})(old_edge_graph,old_ranks,sorted_clusters,new_edges))
,lib_draw_graph.clustered.delete_edge_graph(g),new_edges);
});
/**
 * Returns a filtered graph where nodes where is not a submap are filtered out.
 */
lib_draw_graph.preprocessor.filter_graph = (function lib_draw_graph$preprocessor$filter_graph(var_args){
var args__4736__auto__ = [];
var len__4730__auto___36381 = arguments.length;
var i__4731__auto___36382 = (0);
while(true){
if((i__4731__auto___36382 < len__4730__auto___36381)){
args__4736__auto__.push((arguments[i__4731__auto___36382]));

var G__36383 = (i__4731__auto___36382 + (1));
i__4731__auto___36382 = G__36383;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return lib_draw_graph.preprocessor.filter_graph.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

lib_draw_graph.preprocessor.filter_graph.cljs$core$IFn$_invoke$arity$variadic = (function (g,sql,p__36260){
var map__36261 = p__36260;
var map__36261__$1 = (((((!((map__36261 == null))))?(((((map__36261.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36261.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36261):map__36261);
var filter_edges_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36261__$1,new cljs.core.Keyword(null,"filter-edges?","filter-edges?",1330813465),true);
var filter_fn = cljs.core.complement(sqlpred.core.sql_pred.cljs$core$IFn$_invoke$arity$variadic(sql,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys?","keywordize-keys?",-254545987),true,new cljs.core.Keyword(null,"skip-missing?","skip-missing?",554944425),true], 0)));
var filtered_nodes = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(filter_fn,loom.graph.nodes(g));
var g_SINGLEQUOTE_ = ((lib_draw_graph.clustered.clustered_QMARK_(g))?lib_draw_graph.clustered.remove_nodes(g,filtered_nodes):cljs.core.apply.cljs$core$IFn$_invoke$arity$3(loom.graph.remove_nodes,g,filtered_nodes));
if(cljs.core.truth_(filter_edges_QMARK_)){
var edges_to_check = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (filter_fn,filtered_nodes,g_SINGLEQUOTE_,map__36261,map__36261__$1,filter_edges_QMARK_){
return (function (p__36269){
var vec__36270 = p__36269;
var src = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36270,(0),null);
var dst = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36270,(1),null);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(loom.attr.attr.cljs$core$IFn$_invoke$arity$4(g_SINGLEQUOTE_,src,dst,new cljs.core.Keyword(null,"style","style",-496642736)),"invis");
});})(filter_fn,filtered_nodes,g_SINGLEQUOTE_,map__36261,map__36261__$1,filter_edges_QMARK_))
,loom.graph.edges(g_SINGLEQUOTE_));
var filtered_edges = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (edges_to_check,filter_fn,filtered_nodes,g_SINGLEQUOTE_,map__36261,map__36261__$1,filter_edges_QMARK_){
return (function (p__36273){
var vec__36274 = p__36273;
var src = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36274,(0),null);
var dst = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36274,(1),null);
var G__36279 = loom.attr.attr.cljs$core$IFn$_invoke$arity$4(g_SINGLEQUOTE_,src,dst,new cljs.core.Keyword(null,"meta","meta",1499536964));
return (filter_fn.cljs$core$IFn$_invoke$arity$1 ? filter_fn.cljs$core$IFn$_invoke$arity$1(G__36279) : filter_fn.call(null,G__36279));
});})(edges_to_check,filter_fn,filtered_nodes,g_SINGLEQUOTE_,map__36261,map__36261__$1,filter_edges_QMARK_))
,edges_to_check);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(loom.graph.remove_edges,g_SINGLEQUOTE_,filtered_edges);
} else {
return g_SINGLEQUOTE_;
}
});

lib_draw_graph.preprocessor.filter_graph.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
lib_draw_graph.preprocessor.filter_graph.cljs$lang$applyTo = (function (seq36248){
var G__36249 = cljs.core.first(seq36248);
var seq36248__$1 = cljs.core.next(seq36248);
var G__36250 = cljs.core.first(seq36248__$1);
var seq36248__$2 = cljs.core.next(seq36248__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36249,G__36250,seq36248__$2);
});

/**
 * Returns a graph with only nodes on paths between start filtering term and the end.
 */
lib_draw_graph.preprocessor.paths = (function lib_draw_graph$preprocessor$paths(g,start_subs,end_subs){
var start_nodes = loom.graph.nodes(lib_draw_graph.preprocessor.filter_graph.cljs$core$IFn$_invoke$arity$variadic(g,start_subs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"filter-edges?","filter-edges?",1330813465),false], 0)));
var end_nodes = loom.graph.nodes(lib_draw_graph.preprocessor.filter_graph.cljs$core$IFn$_invoke$arity$variadic(g,end_subs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"filter-edges?","filter-edges?",1330813465),false], 0)));
var combins = (function (){var iter__4523__auto__ = ((function (start_nodes,end_nodes){
return (function lib_draw_graph$preprocessor$paths_$_iter__36287(s__36288){
return (new cljs.core.LazySeq(null,((function (start_nodes,end_nodes){
return (function (){
var s__36288__$1 = s__36288;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__36288__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var s = cljs.core.first(xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__36288__$1,s,xs__6277__auto__,temp__5720__auto__,start_nodes,end_nodes){
return (function lib_draw_graph$preprocessor$paths_$_iter__36287_$_iter__36289(s__36290){
return (new cljs.core.LazySeq(null,((function (s__36288__$1,s,xs__6277__auto__,temp__5720__auto__,start_nodes,end_nodes){
return (function (){
var s__36290__$1 = s__36290;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__36290__$1);
if(temp__5720__auto____$1){
var s__36290__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__36290__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__36290__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__36292 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__36291 = (0);
while(true){
if((i__36291 < size__4522__auto__)){
var e = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__36291);
cljs.core.chunk_append(b__36292,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,e], null));

var G__36392 = (i__36291 + (1));
i__36291 = G__36392;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36292),lib_draw_graph$preprocessor$paths_$_iter__36287_$_iter__36289(cljs.core.chunk_rest(s__36290__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36292),null);
}
} else {
var e = cljs.core.first(s__36290__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,e], null),lib_draw_graph$preprocessor$paths_$_iter__36287_$_iter__36289(cljs.core.rest(s__36290__$2)));
}
} else {
return null;
}
break;
}
});})(s__36288__$1,s,xs__6277__auto__,temp__5720__auto__,start_nodes,end_nodes))
,null,null));
});})(s__36288__$1,s,xs__6277__auto__,temp__5720__auto__,start_nodes,end_nodes))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(end_nodes));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,lib_draw_graph$preprocessor$paths_$_iter__36287(cljs.core.rest(s__36288__$1)));
} else {
var G__36396 = cljs.core.rest(s__36288__$1);
s__36288__$1 = G__36396;
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
return (function (p1__36282_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(loom.alg_generic.bf_path,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(lib_draw_graph.graph.successors,g),p1__36282_SHARP_);
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

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__36301){
var vec__36302 = p__36301;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36302,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36302,(1),null);
var vec__36305 = cljs.core.vals(v);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36305,(0),null);
var inner = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36305,(1),null);
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
return (function (acc,p__36314){
var vec__36315 = p__36314;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36315,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36315,(1),null);
return lib_draw_graph.clustered.add_attr_to_cluster(acc,k,new cljs.core.Keyword(null,"fix-ranks","fix-ranks",452150575),v);
});})(same))
,g,same);
});

//# sourceMappingURL=lib_draw_graph.preprocessor.js.map
