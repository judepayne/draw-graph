// Compiled by ClojureScript 1.10.520 {}
goog.provide('lib_draw_graph.clustered');
goog.require('cljs.core');
goog.require('loom.graph');
goog.require('loom.attr');
goog.require('loom.alg_generic');
goog.require('clojure.set');
/**
 * Converts to keyword if needed
 */
lib_draw_graph.clustered.__GT_keyword = (function lib_draw_graph$clustered$__GT_keyword(k){
if((k instanceof cljs.core.Keyword)){
return k;
} else {
return cljs.core.keyword.call(null,k);
}
});
lib_draw_graph.clustered.add_cluster_key = (function lib_draw_graph$clustered$add_cluster_key(g,cluster_on){
return cljs.core.assoc_in.call(null,g,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clusters","clusters",273881275),new cljs.core.Keyword(null,"key","key",-1516042587)], null),lib_draw_graph.clustered.__GT_keyword.call(null,cluster_on));
});
lib_draw_graph.clustered.cluster_key = (function lib_draw_graph$clustered$cluster_key(g){
return cljs.core.get_in.call(null,g,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clusters","clusters",273881275),new cljs.core.Keyword(null,"key","key",-1516042587)], null));
});
lib_draw_graph.clustered.clustered_QMARK_ = (function lib_draw_graph$clustered$clustered_QMARK_(g){
if(cljs.core.truth_(lib_draw_graph.clustered.cluster_key.call(null,g))){
return true;
} else {
return false;
}
});
lib_draw_graph.clustered.add_attr_to_cluster = (function lib_draw_graph$clustered$add_attr_to_cluster(g,cluster,attr_k,attr_v){
return cljs.core.assoc_in.call(null,g,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clusters","clusters",273881275),new cljs.core.Keyword(null,"attr","attr",-604132353),cluster,attr_k], null),attr_v);
});
lib_draw_graph.clustered.add_cluster_edge = (function lib_draw_graph$clustered$add_cluster_edge(g,src,tgt){
return cljs.core.update_in.call(null,g,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clusters","clusters",273881275),new cljs.core.Keyword(null,"edge-graph","edge-graph",936862687)], null),(function (old,tgt__$1){
var G__17532 = old;
if(cljs.core._EQ_.call(null,null,G__17532)){
return loom.graph.digraph.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [src,tgt__$1], null));
} else {
return loom.graph.add_edges.call(null,old,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [src,tgt__$1], null));

}
}),tgt);
});
lib_draw_graph.clustered.remove_clusters_from_edge_graph = (function lib_draw_graph$clustered$remove_clusters_from_edge_graph(g,clstrs){
return cljs.core.update_in.call(null,g,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clusters","clusters",273881275),new cljs.core.Keyword(null,"edge-graph","edge-graph",936862687)], null),(function (old,clstrs__$1){
return cljs.core.apply.call(null,loom.graph.remove_nodes,old,clstrs__$1);
}),clstrs);
});
lib_draw_graph.clustered.delete_edge_graph = (function lib_draw_graph$clustered$delete_edge_graph(g){
return cljs.core.assoc.call(null,g,new cljs.core.Keyword(null,"clusters","clusters",273881275),cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"clusters","clusters",273881275).cljs$core$IFn$_invoke$arity$1(g),new cljs.core.Keyword(null,"edge-graph","edge-graph",936862687)));
});
lib_draw_graph.clustered.edge_graph = (function lib_draw_graph$clustered$edge_graph(g){
return new cljs.core.Keyword(null,"edge-graph","edge-graph",936862687).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"clusters","clusters",273881275).cljs$core$IFn$_invoke$arity$1(g));
});
lib_draw_graph.clustered.add_cluster_parent = (function lib_draw_graph$clustered$add_cluster_parent(g,cluster,parent){
return cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,g,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clusters","clusters",273881275),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),new cljs.core.Keyword(null,"->parent","->parent",1420662821),cluster], null),parent),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clusters","clusters",273881275),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),new cljs.core.Keyword(null,"->children","->children",-283207286),parent], null),(function (old){
if((!((old == null)))){
return cljs.core.conj.call(null,old,cluster);
} else {
return cljs.core.conj.call(null,cljs.core.PersistentHashSet.EMPTY,cluster);
}
}));
});
lib_draw_graph.clustered.cluster_parent = (function lib_draw_graph$clustered$cluster_parent(g,cluster){
return cljs.core.get_in.call(null,g,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clusters","clusters",273881275),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),new cljs.core.Keyword(null,"->parent","->parent",1420662821),cluster], null));
});
lib_draw_graph.clustered.cluster_children = (function lib_draw_graph$clustered$cluster_children(g,cluster){
return cljs.core.get_in.call(null,g,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clusters","clusters",273881275),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),new cljs.core.Keyword(null,"->children","->children",-283207286),cluster], null));
});
lib_draw_graph.clustered.cluster_graph = (function lib_draw_graph$clustered$cluster_graph(g){
return new cljs.core.Keyword(null,"->children","->children",-283207286).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"clusters","clusters",273881275).cljs$core$IFn$_invoke$arity$1(g)));
});
lib_draw_graph.clustered.cluster_siblings = (function lib_draw_graph$clustered$cluster_siblings(g,cluster){
var parent = lib_draw_graph.clustered.cluster_parent.call(null,g,cluster);
var chdrn = lib_draw_graph.clustered.cluster_children.call(null,g,parent);
return cljs.core.remove.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([cluster]),chdrn);
});
/**
 * Returns all clusters inside the cluster recursively.
 */
lib_draw_graph.clustered.cluster_descendants = (function lib_draw_graph$clustered$cluster_descendants(g,cluster){
var descend = (function lib_draw_graph$clustered$cluster_descendants_$_descend(clstr,acc){
var children = lib_draw_graph.clustered.cluster_children.call(null,g,clstr);
if((children == null)){
return cljs.core.conj.call(null,acc,clstr);
} else {
return cljs.core.map.call(null,((function (children){
return (function (p1__17533_SHARP_){
return lib_draw_graph$clustered$cluster_descendants_$_descend.call(null,p1__17533_SHARP_,cljs.core.conj.call(null,acc,clstr));
});})(children))
,children);
}
});
return cljs.core.flatten.call(null,descend.call(null,cluster,cljs.core.PersistentVector.EMPTY));
});
/**
 * Gets sub-key attrs for the cluster, or if none, it's parent's attrs
 * and so on.
 */
lib_draw_graph.clustered.first_cluster_attr = (function lib_draw_graph$clustered$first_cluster_attr(g,cluster,sub_key){
var attr = sub_key.call(null,cljs.core.get.call(null,new cljs.core.Keyword(null,"attr","attr",-604132353).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"clusters","clusters",273881275).cljs$core$IFn$_invoke$arity$1(g)),cluster));
if(cljs.core.truth_(attr)){
return attr;
} else {
var temp__5718__auto__ = lib_draw_graph.clustered.cluster_parent.call(null,g,cluster);
if(cljs.core.truth_(temp__5718__auto__)){
var parent = temp__5718__auto__;
return lib_draw_graph.clustered.first_cluster_attr.call(null,g,parent,sub_key);
} else {
return null;
}
}
});
/**
 * Goes to the ultimate parent of the cluster and back down merging attributes
 *   such that the child's attributes overwrite the parent's.
 */
lib_draw_graph.clustered.merged_cluster_attr = (function lib_draw_graph$clustered$merged_cluster_attr(g,cluster,sub_key){
var temp__5718__auto__ = lib_draw_graph.clustered.cluster_parent.call(null,g,cluster);
if(cljs.core.truth_(temp__5718__auto__)){
var parent = temp__5718__auto__;
return cljs.core.conj.call(null,lib_draw_graph.clustered.merged_cluster_attr.call(null,g,parent,sub_key),sub_key.call(null,cljs.core.get.call(null,new cljs.core.Keyword(null,"attr","attr",-604132353).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"clusters","clusters",273881275).cljs$core$IFn$_invoke$arity$1(g)),cluster)));
} else {
return sub_key.call(null,cljs.core.get.call(null,new cljs.core.Keyword(null,"attr","attr",-604132353).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"clusters","clusters",273881275).cljs$core$IFn$_invoke$arity$1(g)),cluster));
}
});
/**
 * Returns the nodes in the current cluster but not in children
 * of the current cluster.
 */
lib_draw_graph.clustered.cluster__GT_nodes = (function lib_draw_graph$clustered$cluster__GT_nodes(var_args){
var G__17536 = arguments.length;
switch (G__17536) {
case 2:
return lib_draw_graph.clustered.cluster__GT_nodes.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return lib_draw_graph.clustered.cluster__GT_nodes.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

lib_draw_graph.clustered.cluster__GT_nodes.cljs$core$IFn$_invoke$arity$2 = (function (g,cluster){
return lib_draw_graph.clustered.cluster__GT_nodes.call(null,g,lib_draw_graph.clustered.cluster_key.call(null,g),cluster);
});

lib_draw_graph.clustered.cluster__GT_nodes.cljs$core$IFn$_invoke$arity$3 = (function (g,cluster_on,cluster){
return cljs.core.filter.call(null,(function (p1__17534_SHARP_){
return cljs.core._EQ_.call(null,cluster,cljs.core.get.call(null,p1__17534_SHARP_,lib_draw_graph.clustered.__GT_keyword.call(null,cluster_on)));
}),loom.graph.nodes.call(null,g));
});

lib_draw_graph.clustered.cluster__GT_nodes.cljs$lang$maxFixedArity = 3;

/**
 * Returns all nodes in a cluster, given the :cluster-on key
 */
lib_draw_graph.clustered.cluster__GT_all_nodes = (function lib_draw_graph$clustered$cluster__GT_all_nodes(var_args){
var G__17540 = arguments.length;
switch (G__17540) {
case 2:
return lib_draw_graph.clustered.cluster__GT_all_nodes.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return lib_draw_graph.clustered.cluster__GT_all_nodes.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

lib_draw_graph.clustered.cluster__GT_all_nodes.cljs$core$IFn$_invoke$arity$2 = (function (g,cluster){
return lib_draw_graph.clustered.cluster__GT_all_nodes.call(null,g,lib_draw_graph.clustered.cluster_key.call(null,g));
});

lib_draw_graph.clustered.cluster__GT_all_nodes.cljs$core$IFn$_invoke$arity$3 = (function (g,cluster_on,cluster){
var k = lib_draw_graph.clustered.__GT_keyword.call(null,cluster_on);
var children = ((function (k){
return (function lib_draw_graph$clustered$children(clstr,acc){
var chds = lib_draw_graph.clustered.cluster_children.call(null,g,clstr);
var cur_nodes = lib_draw_graph.clustered.cluster__GT_nodes.call(null,g,k,clstr);
var acc__$1 = cljs.core.conj.call(null,acc,cur_nodes);
if((!((chds == null)))){
return cljs.core.map.call(null,((function (chds,cur_nodes,acc__$1,k){
return (function (p1__17538_SHARP_){
return lib_draw_graph$clustered$children.call(null,p1__17538_SHARP_,acc__$1);
});})(chds,cur_nodes,acc__$1,k))
,chds);
} else {
return acc__$1;
}
});})(k))
;
var res = cljs.core.distinct.call(null,cljs.core.flatten.call(null,children.call(null,cluster,cljs.core.PersistentVector.EMPTY)));
if(cljs.core.empty_QMARK_.call(null,res)){
return null;
} else {
return res;
}
});

lib_draw_graph.clustered.cluster__GT_all_nodes.cljs$lang$maxFixedArity = 3;

/**
 * Returns nodes in the graph grouped by cluster.
 */
lib_draw_graph.clustered.nodes_by_cluster = (function lib_draw_graph$clustered$nodes_by_cluster(var_args){
var G__17543 = arguments.length;
switch (G__17543) {
case 1:
return lib_draw_graph.clustered.nodes_by_cluster.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return lib_draw_graph.clustered.nodes_by_cluster.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

lib_draw_graph.clustered.nodes_by_cluster.cljs$core$IFn$_invoke$arity$1 = (function (g){
return lib_draw_graph.clustered.nodes_by_cluster.call(null,g,lib_draw_graph.clustered.cluster_key.call(null,g));
});

lib_draw_graph.clustered.nodes_by_cluster.cljs$core$IFn$_invoke$arity$2 = (function (g,cluster_on){
return cljs.core.group_by.call(null,lib_draw_graph.clustered.__GT_keyword.call(null,cluster_on),loom.graph.nodes.call(null,g));
});

lib_draw_graph.clustered.nodes_by_cluster.cljs$lang$maxFixedArity = 2;

/**
 * Returns the set of clusters that the node is in.
 */
lib_draw_graph.clustered.node__GT_clusters = (function lib_draw_graph$clustered$node__GT_clusters(var_args){
var G__17546 = arguments.length;
switch (G__17546) {
case 2:
return lib_draw_graph.clustered.node__GT_clusters.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return lib_draw_graph.clustered.node__GT_clusters.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

lib_draw_graph.clustered.node__GT_clusters.cljs$core$IFn$_invoke$arity$2 = (function (g,n){
return lib_draw_graph.clustered.node__GT_clusters.call(null,g,lib_draw_graph.clustered.cluster_key.call(null,g),n);
});

lib_draw_graph.clustered.node__GT_clusters.cljs$core$IFn$_invoke$arity$3 = (function (g,cluster_on,n){
var ancestor = (function lib_draw_graph$clustered$ancestor(acc){
var temp__5718__auto__ = lib_draw_graph.clustered.cluster_parent.call(null,g,cljs.core.first.call(null,acc));
if(cljs.core.truth_(temp__5718__auto__)){
var new_ancestor = temp__5718__auto__;
return lib_draw_graph$clustered$ancestor.call(null,cljs.core.cons.call(null,new_ancestor,acc));
} else {
return acc;
}
});
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,ancestor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.call(null,n,lib_draw_graph.clustered.__GT_keyword.call(null,cluster_on))], null)));
});

lib_draw_graph.clustered.node__GT_clusters.cljs$lang$maxFixedArity = 3;

/**
 * Returns the set of clusters that the nodes are in.
 */
lib_draw_graph.clustered.nodes__GT_clusters = (function lib_draw_graph$clustered$nodes__GT_clusters(g,nds){
return cljs.core.apply.call(null,clojure.set.union,cljs.core.map.call(null,(function (p1__17548_SHARP_){
return lib_draw_graph.clustered.node__GT_clusters.call(null,g,p1__17548_SHARP_);
}),nds));
});
/**
 * Returns the set of all clusters in the graph.
 */
lib_draw_graph.clustered.clusters = (function lib_draw_graph$clustered$clusters(g){
return lib_draw_graph.clustered.nodes__GT_clusters.call(null,g,loom.graph.nodes.call(null,g));
});
lib_draw_graph.clustered.filter__GT_parent = (function lib_draw_graph$clustered$filter__GT_parent(m,set_to_remove){
return cljs.core.reduce.call(null,(function (a,p__17549){
var vec__17550 = p__17549;
var k = cljs.core.nth.call(null,vec__17550,(0),null);
var v = cljs.core.nth.call(null,vec__17550,(1),null);
if(cljs.core.truth_(cljs.core.some.call(null,set_to_remove,cljs.core.PersistentHashSet.createAsIfByAssoc([v,k])))){
return a;
} else {
return cljs.core.assoc.call(null,a,k,v);
}
}),cljs.core.PersistentArrayMap.EMPTY,m);
});
lib_draw_graph.clustered.filter__GT_children = (function lib_draw_graph$clustered$filter__GT_children(m,set_to_remove){
return cljs.core.reduce.call(null,(function (a,p__17553){
var vec__17554 = p__17553;
var k = cljs.core.nth.call(null,vec__17554,(0),null);
var v = cljs.core.nth.call(null,vec__17554,(1),null);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([k]),set_to_remove))){
return a;
} else {
var v_SINGLEQUOTE_ = clojure.set.difference.call(null,v,set_to_remove);
if(cljs.core.empty_QMARK_.call(null,v_SINGLEQUOTE_)){
return a;
} else {
return cljs.core.assoc.call(null,a,k,v_SINGLEQUOTE_);
}
}
}),cljs.core.PersistentArrayMap.EMPTY,m);
});
/**
 * Removes clusters from the graph.
 * Doesn't touch cluster edgess, so that those can be filtered down (once)
 * after multiple filtering operations.
 */
lib_draw_graph.clustered.remove_clusters = (function lib_draw_graph$clustered$remove_clusters(var_args){
var args__4736__auto__ = [];
var len__4730__auto___17560 = arguments.length;
var i__4731__auto___17561 = (0);
while(true){
if((i__4731__auto___17561 < len__4730__auto___17560)){
args__4736__auto__.push((arguments[i__4731__auto___17561]));

var G__17562 = (i__4731__auto___17561 + (1));
i__4731__auto___17561 = G__17562;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return lib_draw_graph.clustered.remove_clusters.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

lib_draw_graph.clustered.remove_clusters.cljs$core$IFn$_invoke$arity$variadic = (function (g,clstrs){
var clstrs_set = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,clstrs);
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,g,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clusters","clusters",273881275),new cljs.core.Keyword(null,"attr","attr",-604132353)], null),((function (clstrs_set){
return (function (p1__17557_SHARP_){
return cljs.core.apply.call(null,cljs.core.dissoc,p1__17557_SHARP_,clstrs);
});})(clstrs_set))
),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clusters","clusters",273881275),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),new cljs.core.Keyword(null,"->parent","->parent",1420662821)], null),lib_draw_graph.clustered.filter__GT_parent,clstrs_set),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clusters","clusters",273881275),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),new cljs.core.Keyword(null,"->children","->children",-283207286)], null),lib_draw_graph.clustered.filter__GT_children,clstrs_set);
});

lib_draw_graph.clustered.remove_clusters.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
lib_draw_graph.clustered.remove_clusters.cljs$lang$applyTo = (function (seq17558){
var G__17559 = cljs.core.first.call(null,seq17558);
var seq17558__$1 = cljs.core.next.call(null,seq17558);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17559,seq17558__$1);
});

/**
 * Removes nodes from a clustered graph. Returns a map of {:graph <graph>
 * :clusters <the clusters which remain>}
 */
lib_draw_graph.clustered.remove_nodes = (function lib_draw_graph$clustered$remove_nodes(g,nodes){
var clstrs = lib_draw_graph.clustered.clusters.call(null,g);
var g_SINGLEQUOTE_ = cljs.core.apply.call(null,loom.graph.remove_nodes,g,nodes);
var clstrs_to_remove = clojure.set.difference.call(null,lib_draw_graph.clustered.clusters.call(null,g),lib_draw_graph.clustered.clusters.call(null,g_SINGLEQUOTE_));
var g_SINGLEQUOTE__SINGLEQUOTE_ = cljs.core.apply.call(null,lib_draw_graph.clustered.remove_clusters,g_SINGLEQUOTE_,clstrs_to_remove);
return g_SINGLEQUOTE__SINGLEQUOTE_;
});

//# sourceMappingURL=clustered.js.map
