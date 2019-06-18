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
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k);
}
});
lib_draw_graph.clustered.add_cluster_key = (function lib_draw_graph$clustered$add_cluster_key(g,cluster_on){
return cljs.core.assoc_in(g,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clusters","clusters",273881275),new cljs.core.Keyword(null,"key","key",-1516042587)], null),lib_draw_graph.clustered.__GT_keyword(cluster_on));
});
lib_draw_graph.clustered.cluster_key = (function lib_draw_graph$clustered$cluster_key(g){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clusters","clusters",273881275),new cljs.core.Keyword(null,"key","key",-1516042587)], null));
});
lib_draw_graph.clustered.clustered_QMARK_ = (function lib_draw_graph$clustered$clustered_QMARK_(g){
if(cljs.core.truth_(lib_draw_graph.clustered.cluster_key(g))){
return true;
} else {
return false;
}
});
lib_draw_graph.clustered.add_attr_to_cluster = (function lib_draw_graph$clustered$add_attr_to_cluster(g,cluster,attr_k,attr_v){
return cljs.core.assoc_in(g,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clusters","clusters",273881275),new cljs.core.Keyword(null,"attr","attr",-604132353),cluster,attr_k], null),attr_v);
});
lib_draw_graph.clustered.add_cluster_edge = (function lib_draw_graph$clustered$add_cluster_edge(g,src,tgt){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(g,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clusters","clusters",273881275),new cljs.core.Keyword(null,"edge-graph","edge-graph",936862687)], null),(function (old,tgt__$1){
var G__35627 = old;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__35627)){
return loom.graph.digraph.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [src,tgt__$1], null)], 0));
} else {
return loom.graph.add_edges.cljs$core$IFn$_invoke$arity$variadic(old,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [src,tgt__$1], null)], 0));

}
}),tgt);
});
lib_draw_graph.clustered.remove_clusters_from_edge_graph = (function lib_draw_graph$clustered$remove_clusters_from_edge_graph(g,clstrs){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(g,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clusters","clusters",273881275),new cljs.core.Keyword(null,"edge-graph","edge-graph",936862687)], null),(function (old,clstrs__$1){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(loom.graph.remove_nodes,old,clstrs__$1);
}),clstrs);
});
lib_draw_graph.clustered.delete_edge_graph = (function lib_draw_graph$clustered$delete_edge_graph(g){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(g,new cljs.core.Keyword(null,"clusters","clusters",273881275),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"clusters","clusters",273881275).cljs$core$IFn$_invoke$arity$1(g),new cljs.core.Keyword(null,"edge-graph","edge-graph",936862687)));
});
lib_draw_graph.clustered.edge_graph = (function lib_draw_graph$clustered$edge_graph(g){
return new cljs.core.Keyword(null,"edge-graph","edge-graph",936862687).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"clusters","clusters",273881275).cljs$core$IFn$_invoke$arity$1(g));
});
lib_draw_graph.clustered.add_cluster_parent = (function lib_draw_graph$clustered$add_cluster_parent(g,cluster,parent){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(g,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clusters","clusters",273881275),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),new cljs.core.Keyword(null,"->parent","->parent",1420662821),cluster], null),parent),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clusters","clusters",273881275),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),new cljs.core.Keyword(null,"->children","->children",-283207286),parent], null),(function (old){
if((!((old == null)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(old,cluster);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cluster);
}
}));
});
lib_draw_graph.clustered.cluster_parent = (function lib_draw_graph$clustered$cluster_parent(g,cluster){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clusters","clusters",273881275),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),new cljs.core.Keyword(null,"->parent","->parent",1420662821),cluster], null));
});
lib_draw_graph.clustered.cluster_children = (function lib_draw_graph$clustered$cluster_children(g,cluster){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clusters","clusters",273881275),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),new cljs.core.Keyword(null,"->children","->children",-283207286),cluster], null));
});
lib_draw_graph.clustered.cluster_graph = (function lib_draw_graph$clustered$cluster_graph(g){
return new cljs.core.Keyword(null,"->children","->children",-283207286).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"clusters","clusters",273881275).cljs$core$IFn$_invoke$arity$1(g)));
});
lib_draw_graph.clustered.cluster_siblings = (function lib_draw_graph$clustered$cluster_siblings(g,cluster){
var parent = lib_draw_graph.clustered.cluster_parent(g,cluster);
var chdrn = lib_draw_graph.clustered.cluster_children(g,parent);
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([cluster]),chdrn);
});
/**
 * Returns all clusters inside the cluster recursively.
 */
lib_draw_graph.clustered.cluster_descendants = (function lib_draw_graph$clustered$cluster_descendants(g,cluster){
var descend = (function lib_draw_graph$clustered$cluster_descendants_$_descend(clstr,acc){
var children = lib_draw_graph.clustered.cluster_children(g,clstr);
if((children == null)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,clstr);
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (children){
return (function (p1__35639_SHARP_){
return lib_draw_graph$clustered$cluster_descendants_$_descend(p1__35639_SHARP_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,clstr));
});})(children))
,children);
}
});
return cljs.core.flatten(descend(cluster,cljs.core.PersistentVector.EMPTY));
});
/**
 * Gets sub-key attrs for the cluster, or if none, it's parent's attrs
 * and so on.
 */
lib_draw_graph.clustered.first_cluster_attr = (function lib_draw_graph$clustered$first_cluster_attr(g,cluster,sub_key){
var attr = (function (){var G__35647 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"attr","attr",-604132353).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"clusters","clusters",273881275).cljs$core$IFn$_invoke$arity$1(g)),cluster);
return (sub_key.cljs$core$IFn$_invoke$arity$1 ? sub_key.cljs$core$IFn$_invoke$arity$1(G__35647) : sub_key.call(null,G__35647));
})();
if(cljs.core.truth_(attr)){
return attr;
} else {
var temp__5718__auto__ = lib_draw_graph.clustered.cluster_parent(g,cluster);
if(cljs.core.truth_(temp__5718__auto__)){
var parent = temp__5718__auto__;
return (lib_draw_graph.clustered.first_cluster_attr.cljs$core$IFn$_invoke$arity$3 ? lib_draw_graph.clustered.first_cluster_attr.cljs$core$IFn$_invoke$arity$3(g,parent,sub_key) : lib_draw_graph.clustered.first_cluster_attr.call(null,g,parent,sub_key));
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
var temp__5718__auto__ = lib_draw_graph.clustered.cluster_parent(g,cluster);
if(cljs.core.truth_(temp__5718__auto__)){
var parent = temp__5718__auto__;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(lib_draw_graph.clustered.merged_cluster_attr.cljs$core$IFn$_invoke$arity$3 ? lib_draw_graph.clustered.merged_cluster_attr.cljs$core$IFn$_invoke$arity$3(g,parent,sub_key) : lib_draw_graph.clustered.merged_cluster_attr.call(null,g,parent,sub_key)),(function (){var G__35654 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"attr","attr",-604132353).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"clusters","clusters",273881275).cljs$core$IFn$_invoke$arity$1(g)),cluster);
return (sub_key.cljs$core$IFn$_invoke$arity$1 ? sub_key.cljs$core$IFn$_invoke$arity$1(G__35654) : sub_key.call(null,G__35654));
})()], 0));
} else {
var G__35657 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"attr","attr",-604132353).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"clusters","clusters",273881275).cljs$core$IFn$_invoke$arity$1(g)),cluster);
return (sub_key.cljs$core$IFn$_invoke$arity$1 ? sub_key.cljs$core$IFn$_invoke$arity$1(G__35657) : sub_key.call(null,G__35657));
}
});
/**
 * Returns the nodes in the current cluster but not in children
 * of the current cluster.
 */
lib_draw_graph.clustered.cluster__GT_nodes = (function lib_draw_graph$clustered$cluster__GT_nodes(var_args){
var G__35662 = arguments.length;
switch (G__35662) {
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
return lib_draw_graph.clustered.cluster__GT_nodes.cljs$core$IFn$_invoke$arity$3(g,lib_draw_graph.clustered.cluster_key(g),cluster);
});

lib_draw_graph.clustered.cluster__GT_nodes.cljs$core$IFn$_invoke$arity$3 = (function (g,cluster_on,cluster){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__35660_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cluster,cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__35660_SHARP_,lib_draw_graph.clustered.__GT_keyword(cluster_on)));
}),loom.graph.nodes(g));
});

lib_draw_graph.clustered.cluster__GT_nodes.cljs$lang$maxFixedArity = 3;

/**
 * Returns all nodes in a cluster, given the :cluster-on key
 */
lib_draw_graph.clustered.cluster__GT_all_nodes = (function lib_draw_graph$clustered$cluster__GT_all_nodes(var_args){
var G__35673 = arguments.length;
switch (G__35673) {
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
return lib_draw_graph.clustered.cluster__GT_all_nodes.cljs$core$IFn$_invoke$arity$2(g,lib_draw_graph.clustered.cluster_key(g));
});

lib_draw_graph.clustered.cluster__GT_all_nodes.cljs$core$IFn$_invoke$arity$3 = (function (g,cluster_on,cluster){
var k = lib_draw_graph.clustered.__GT_keyword(cluster_on);
var children = ((function (k){
return (function lib_draw_graph$clustered$children(clstr,acc){
var chds = lib_draw_graph.clustered.cluster_children(g,clstr);
var cur_nodes = lib_draw_graph.clustered.cluster__GT_nodes.cljs$core$IFn$_invoke$arity$3(g,k,clstr);
var acc__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,cur_nodes);
if((!((chds == null)))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (chds,cur_nodes,acc__$1,k){
return (function (p1__35668_SHARP_){
return lib_draw_graph$clustered$children(p1__35668_SHARP_,acc__$1);
});})(chds,cur_nodes,acc__$1,k))
,chds);
} else {
return acc__$1;
}
});})(k))
;
var res = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.flatten(children(cluster,cljs.core.PersistentVector.EMPTY)));
if(cljs.core.empty_QMARK_(res)){
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
var G__35691 = arguments.length;
switch (G__35691) {
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
return lib_draw_graph.clustered.nodes_by_cluster.cljs$core$IFn$_invoke$arity$2(g,lib_draw_graph.clustered.cluster_key(g));
});

lib_draw_graph.clustered.nodes_by_cluster.cljs$core$IFn$_invoke$arity$2 = (function (g,cluster_on){
return cljs.core.group_by(lib_draw_graph.clustered.__GT_keyword(cluster_on),loom.graph.nodes(g));
});

lib_draw_graph.clustered.nodes_by_cluster.cljs$lang$maxFixedArity = 2;

/**
 * Returns the set of clusters that the node is in.
 */
lib_draw_graph.clustered.node__GT_clusters = (function lib_draw_graph$clustered$node__GT_clusters(var_args){
var G__35699 = arguments.length;
switch (G__35699) {
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
return lib_draw_graph.clustered.node__GT_clusters.cljs$core$IFn$_invoke$arity$3(g,lib_draw_graph.clustered.cluster_key(g),n);
});

lib_draw_graph.clustered.node__GT_clusters.cljs$core$IFn$_invoke$arity$3 = (function (g,cluster_on,n){
var ancestor = (function lib_draw_graph$clustered$ancestor(acc){
var temp__5718__auto__ = lib_draw_graph.clustered.cluster_parent(g,cljs.core.first(acc));
if(cljs.core.truth_(temp__5718__auto__)){
var new_ancestor = temp__5718__auto__;
return lib_draw_graph$clustered$ancestor(cljs.core.cons(new_ancestor,acc));
} else {
return acc;
}
});
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,ancestor(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.cljs$core$IFn$_invoke$arity$2(n,lib_draw_graph.clustered.__GT_keyword(cluster_on))], null)));
});

lib_draw_graph.clustered.node__GT_clusters.cljs$lang$maxFixedArity = 3;

/**
 * Returns the set of clusters that the nodes are in.
 */
lib_draw_graph.clustered.nodes__GT_clusters = (function lib_draw_graph$clustered$nodes__GT_clusters(g,nds){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.set.union,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35703_SHARP_){
return lib_draw_graph.clustered.node__GT_clusters.cljs$core$IFn$_invoke$arity$2(g,p1__35703_SHARP_);
}),nds));
});
/**
 * Returns the set of all clusters in the graph.
 */
lib_draw_graph.clustered.clusters = (function lib_draw_graph$clustered$clusters(g){
return lib_draw_graph.clustered.nodes__GT_clusters(g,loom.graph.nodes(g));
});
lib_draw_graph.clustered.filter__GT_parent = (function lib_draw_graph$clustered$filter__GT_parent(m,set_to_remove){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (a,p__35705){
var vec__35706 = p__35705;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35706,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35706,(1),null);
if(cljs.core.truth_(cljs.core.some(set_to_remove,cljs.core.PersistentHashSet.createAsIfByAssoc([v,k])))){
return a;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a,k,v);
}
}),cljs.core.PersistentArrayMap.EMPTY,m);
});
lib_draw_graph.clustered.filter__GT_children = (function lib_draw_graph$clustered$filter__GT_children(m,set_to_remove){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (a,p__35709){
var vec__35710 = p__35709;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35710,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35710,(1),null);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([k]),set_to_remove))){
return a;
} else {
var v_SINGLEQUOTE_ = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(v,set_to_remove);
if(cljs.core.empty_QMARK_(v_SINGLEQUOTE_)){
return a;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a,k,v_SINGLEQUOTE_);
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
var len__4730__auto___35742 = arguments.length;
var i__4731__auto___35745 = (0);
while(true){
if((i__4731__auto___35745 < len__4730__auto___35742)){
args__4736__auto__.push((arguments[i__4731__auto___35745]));

var G__35749 = (i__4731__auto___35745 + (1));
i__4731__auto___35745 = G__35749;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return lib_draw_graph.clustered.remove_clusters.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

lib_draw_graph.clustered.remove_clusters.cljs$core$IFn$_invoke$arity$variadic = (function (g,clstrs){
var clstrs_set = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,clstrs);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(g,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clusters","clusters",273881275),new cljs.core.Keyword(null,"attr","attr",-604132353)], null),((function (clstrs_set){
return (function (p1__35713_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,p1__35713_SHARP_,clstrs);
});})(clstrs_set))
),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clusters","clusters",273881275),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),new cljs.core.Keyword(null,"->parent","->parent",1420662821)], null),lib_draw_graph.clustered.filter__GT_parent,clstrs_set),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clusters","clusters",273881275),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),new cljs.core.Keyword(null,"->children","->children",-283207286)], null),lib_draw_graph.clustered.filter__GT_children,clstrs_set);
});

lib_draw_graph.clustered.remove_clusters.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
lib_draw_graph.clustered.remove_clusters.cljs$lang$applyTo = (function (seq35715){
var G__35716 = cljs.core.first(seq35715);
var seq35715__$1 = cljs.core.next(seq35715);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35716,seq35715__$1);
});

/**
 * Removes nodes from a clustered graph. Returns a map of {:graph <graph>
 * :clusters <the clusters which remain>}
 */
lib_draw_graph.clustered.remove_nodes = (function lib_draw_graph$clustered$remove_nodes(g,nodes){
var clstrs = lib_draw_graph.clustered.clusters(g);
var g_SINGLEQUOTE_ = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(loom.graph.remove_nodes,g,nodes);
var clstrs_to_remove = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(lib_draw_graph.clustered.clusters(g),lib_draw_graph.clustered.clusters(g_SINGLEQUOTE_));
var g_SINGLEQUOTE__SINGLEQUOTE_ = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(lib_draw_graph.clustered.remove_clusters,g_SINGLEQUOTE_,clstrs_to_remove);
return g_SINGLEQUOTE__SINGLEQUOTE_;
});

//# sourceMappingURL=lib_draw_graph.clustered.js.map
