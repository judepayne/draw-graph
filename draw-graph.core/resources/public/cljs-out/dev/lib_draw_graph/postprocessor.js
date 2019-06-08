// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('lib_draw_graph.postprocessor');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('lib_draw_graph.svg');
goog.require('lib_draw_graph.anneal');
goog.require('lib_draw_graph.clustered');
goog.require('lib_draw_graph.geometry');
goog.require('lib_draw_graph.util');
goog.require('clojure.set');
/**
 * Returns clusters that (a) contain clusters (b) contain no nodes directly.
 */
lib_draw_graph.postprocessor.free_clusters = (function lib_draw_graph$postprocessor$free_clusters(g){
var clstrs = lib_draw_graph.clustered.clusters(g);
var has_chdn = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (clstrs){
return (function (p1__24034_SHARP_){
return (!((lib_draw_graph.clustered.cluster_children(g,p1__24034_SHARP_) == null)));
});})(clstrs))
,clstrs);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,has_chdn);
});
/**
 * Returns set s with x removed.
 */
lib_draw_graph.postprocessor.without = (function lib_draw_graph$postprocessor$without(s,x){
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(s,cljs.core.PersistentHashSet.createAsIfByAssoc([x]));
});
/**
 * Returns the pair [element, s'] where s' is set s with element removed.
 */
lib_draw_graph.postprocessor.take_1 = (function lib_draw_graph$postprocessor$take_1(s){
if((!(cljs.core.empty_QMARK_(s)))){
} else {
throw (new Error("Assert failed: (not (empty? s))"));
}

var item = cljs.core.first(s);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,lib_draw_graph.postprocessor.without(s,item)], null);
});
/**
 * Returns the set of nodes in graph g for which there are no incoming
 *   edges, where g is a map of nodes to sets of nodes.
 */
lib_draw_graph.postprocessor.no_incoming = (function lib_draw_graph$postprocessor$no_incoming(g){
var nodes = cljs.core.set(cljs.core.keys(g));
var have_incoming = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.set.union,cljs.core.vals(g));
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(nodes,have_incoming);
});
/**
 * Returns g with empty outgoing edges added for nodes with incoming
 *   edges only.  Example: {:a #{:b}} => {:a #{:b}, :b #{}}
 */
lib_draw_graph.postprocessor.normalize = (function lib_draw_graph$postprocessor$normalize(g){
var have_incoming = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.set.union,cljs.core.vals(g));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (have_incoming){
return (function (p1__24035_SHARP_,p2__24036_SHARP_){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__24035_SHARP_,p2__24036_SHARP_))){
return p1__24035_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__24035_SHARP_,p2__24036_SHARP_,cljs.core.PersistentHashSet.EMPTY);
}
});})(have_incoming))
,g,have_incoming);
});
/**
 * Proposes a topological sort for directed graph g using Kahn's
 *   algorithm, where g is a map of nodes to sets of nodes. If g is
 *   cyclic, returns nil.
 */
lib_draw_graph.postprocessor.kahn_sort = (function lib_draw_graph$postprocessor$kahn_sort(var_args){
var G__24040 = arguments.length;
switch (G__24040) {
case 1:
return lib_draw_graph.postprocessor.kahn_sort.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return lib_draw_graph.postprocessor.kahn_sort.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

lib_draw_graph.postprocessor.kahn_sort.cljs$core$IFn$_invoke$arity$1 = (function (g){
return lib_draw_graph.postprocessor.kahn_sort.cljs$core$IFn$_invoke$arity$3(lib_draw_graph.postprocessor.normalize(g),cljs.core.PersistentVector.EMPTY,lib_draw_graph.postprocessor.no_incoming(g));
});

lib_draw_graph.postprocessor.kahn_sort.cljs$core$IFn$_invoke$arity$3 = (function (g,l,s){
while(true){
if(cljs.core.empty_QMARK_(s)){
if(cljs.core.every_QMARK_(cljs.core.empty_QMARK_,cljs.core.vals(g))){
return l;
} else {
return null;
}
} else {
var vec__24041 = lib_draw_graph.postprocessor.take_1(s);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24041,(0),null);
var s_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24041,(1),null);
var m = (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(n) : g.call(null,n));
var g_SINGLEQUOTE_ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (g,l,s,vec__24041,n,s_SINGLEQUOTE_,m){
return (function (p1__24037_SHARP_,p2__24038_SHARP_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(p1__24037_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [n], null),lib_draw_graph.postprocessor.without,p2__24038_SHARP_);
});})(g,l,s,vec__24041,n,s_SINGLEQUOTE_,m))
,g,m);
var G__24045 = g_SINGLEQUOTE_;
var G__24046 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(l,n);
var G__24047 = clojure.set.union.cljs$core$IFn$_invoke$arity$2(s_SINGLEQUOTE_,clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(lib_draw_graph.postprocessor.no_incoming(g_SINGLEQUOTE_),m));
g = G__24045;
l = G__24046;
s = G__24047;
continue;
}
break;
}
});

lib_draw_graph.postprocessor.kahn_sort.cljs$lang$maxFixedArity = 3;

/**
 * Kahn sorted free clusters
 */
lib_draw_graph.postprocessor.sorted_free_clusters = (function lib_draw_graph$postprocessor$sorted_free_clusters(g){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(lib_draw_graph.postprocessor.free_clusters(g),lib_draw_graph.postprocessor.kahn_sort.cljs$core$IFn$_invoke$arity$1(lib_draw_graph.clustered.cluster_graph(g)));
});
/**
 * Returns a vec of clusters with their children.
 */
lib_draw_graph.postprocessor.with_chdn = (function lib_draw_graph$postprocessor$with_chdn(g,clstrs){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__24048_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__24048_SHARP_,lib_draw_graph.clustered.cluster_children(g,p1__24048_SHARP_)],null));
}),clstrs);
});
/**
 * Provides the targets for annealing in the graph.
 */
lib_draw_graph.postprocessor.free_clusters_with_children = (function lib_draw_graph$postprocessor$free_clusters_with_children(g){
return lib_draw_graph.postprocessor.with_chdn(g,lib_draw_graph.postprocessor.sorted_free_clusters(g));
});
lib_draw_graph.postprocessor.svg__GT_zipper = (function lib_draw_graph$postprocessor$svg__GT_zipper(svg){
return lib_draw_graph.svg.__GT_zipper(lib_draw_graph.svg.parse_svg(svg));
});
/**
 * Get the bounding boxes for the clusters from the zipper over the svg.
 */
lib_draw_graph.postprocessor.clusters__GT_boxes = (function lib_draw_graph$postprocessor$clusters__GT_boxes(z,clstrs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (a,c){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a,c,lib_draw_graph.svg.cluster__GT_rect(z,c));
}),cljs.core.PersistentArrayMap.EMPTY,clstrs);
});
/**
 * Converts anneal-tasks to a set of clusters
 */
lib_draw_graph.postprocessor.tasks__GT_clusters = (function lib_draw_graph$postprocessor$tasks__GT_clusters(tasks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (a,c){
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(a,cljs.core.first(c)),cljs.core.second(c));
}),cljs.core.PersistentHashSet.EMPTY,tasks);
});
/**
 * Returns the separation map between the bounding
 */
lib_draw_graph.postprocessor.sep = (function lib_draw_graph$postprocessor$sep(var_args){
var args__4736__auto__ = [];
var len__4730__auto___24051 = arguments.length;
var i__4731__auto___24052 = (0);
while(true){
if((i__4731__auto___24052 < len__4730__auto___24051)){
args__4736__auto__.push((arguments[i__4731__auto___24052]));

var G__24053 = (i__4731__auto___24052 + (1));
i__4731__auto___24052 = G__24053;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return lib_draw_graph.postprocessor.sep.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

lib_draw_graph.postprocessor.sep.cljs$core$IFn$_invoke$arity$variadic = (function (bounding,rects){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$l,(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$x,rects)) - cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(bounding)),cljs.core.cst$kw$t,(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$y,rects)) - cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(bounding)),cljs.core.cst$kw$r,((cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(bounding) + cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(bounding)) - cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (o){
return (cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(o) + cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(o));
}),rects))),cljs.core.cst$kw$b,((cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(bounding) + cljs.core.cst$kw$h.cljs$core$IFn$_invoke$arity$1(bounding)) - cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (o){
return (cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(o) + cljs.core.cst$kw$h.cljs$core$IFn$_invoke$arity$1(o));
}),rects)))], null);
});

lib_draw_graph.postprocessor.sep.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
lib_draw_graph.postprocessor.sep.cljs$lang$applyTo = (function (seq24049){
var G__24050 = cljs.core.first(seq24049);
var seq24049__$1 = cljs.core.next(seq24049);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24050,seq24049__$1);
});

lib_draw_graph.postprocessor.collision_sep = (8);
/**
 * takes a sep, preserves the top but adjusts other seps to minimum.
 */
lib_draw_graph.postprocessor.adjust_sep = (function lib_draw_graph$postprocessor$adjust_sep(var_args){
var args__4736__auto__ = [];
var len__4730__auto___24059 = arguments.length;
var i__4731__auto___24060 = (0);
while(true){
if((i__4731__auto___24060 < len__4730__auto___24059)){
args__4736__auto__.push((arguments[i__4731__auto___24060]));

var G__24061 = (i__4731__auto___24060 + (1));
i__4731__auto___24060 = G__24061;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return lib_draw_graph.postprocessor.adjust_sep.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

lib_draw_graph.postprocessor.adjust_sep.cljs$core$IFn$_invoke$arity$variadic = (function (sep,p__24056){
var map__24057 = p__24056;
var map__24057__$1 = (((((!((map__24057 == null))))?(((((map__24057.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24057.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24057):map__24057);
var cluster_sep = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__24057__$1,cljs.core.cst$kw$cluster_DASH_sep,null);
var BT_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__24057__$1,cljs.core.cst$kw$BT_QMARK_,false);
if(cljs.core.not(BT_QMARK_)){
if(cljs.core.truth_(cluster_sep)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(sep,cljs.core.cst$kw$l,cluster_sep,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$r,cluster_sep,cljs.core.cst$kw$b,cluster_sep], 0));
} else {
var min_lrb = (function (){var x__4222__auto__ = (function (){var x__4222__auto__ = cljs.core.cst$kw$l.cljs$core$IFn$_invoke$arity$1(sep);
var y__4223__auto__ = cljs.core.cst$kw$r.cljs$core$IFn$_invoke$arity$1(sep);
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
var y__4223__auto__ = cljs.core.cst$kw$b.cljs$core$IFn$_invoke$arity$1(sep);
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(sep,cljs.core.cst$kw$l,min_lrb,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$r,min_lrb,cljs.core.cst$kw$b,min_lrb], 0));
}
} else {
if(cljs.core.truth_(cluster_sep)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(sep,cljs.core.cst$kw$l,cluster_sep,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$r,cluster_sep,cljs.core.cst$kw$t,cluster_sep], 0));
} else {
var min_lrt = (function (){var x__4222__auto__ = (function (){var x__4222__auto__ = cljs.core.cst$kw$l.cljs$core$IFn$_invoke$arity$1(sep);
var y__4223__auto__ = cljs.core.cst$kw$r.cljs$core$IFn$_invoke$arity$1(sep);
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
var y__4223__auto__ = cljs.core.cst$kw$t.cljs$core$IFn$_invoke$arity$1(sep);
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(sep,cljs.core.cst$kw$l,min_lrt,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$r,min_lrt,cljs.core.cst$kw$t,min_lrt], 0));
}
}
});

lib_draw_graph.postprocessor.adjust_sep.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
lib_draw_graph.postprocessor.adjust_sep.cljs$lang$applyTo = (function (seq24054){
var G__24055 = cljs.core.first(seq24054);
var seq24054__$1 = cljs.core.next(seq24054);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24055,seq24054__$1);
});

lib_draw_graph.postprocessor.parse_int = (function lib_draw_graph$postprocessor$parse_int(s){
return parseInt(s);
});
lib_draw_graph.postprocessor.str__GT_int = (function lib_draw_graph$postprocessor$str__GT_int(cs,error_msg){
if(cljs.core.integer_QMARK_(cs)){
return cs;
} else {
try{return lib_draw_graph.postprocessor.parse_int(cs);
}catch (e24062){if((e24062 instanceof Error)){
var e = e24062;
throw lib_draw_graph.util.err(error_msg);
} else {
throw e24062;

}
}}
});
/**
 * Constructs a nested map which parameters required for annealing
 * from a zipper, a graph and the key clustered on in the graph.
 */
lib_draw_graph.postprocessor.env = (function lib_draw_graph$postprocessor$env(z,g,opts,node_label_fn){
var cluster_sep = (cljs.core.truth_(cljs.core.cst$kw$pp_DASH_cluster_DASH_sep.cljs$core$IFn$_invoke$arity$1(opts))?lib_draw_graph.postprocessor.str__GT_int(cljs.core.cst$kw$pp_DASH_cluster_DASH_sep.cljs$core$IFn$_invoke$arity$1(opts),"cluster separation should be an integer"):null);
var BT_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$rankdir.cljs$core$IFn$_invoke$arity$1(opts),"BT");
var tasks = lib_draw_graph.postprocessor.free_clusters_with_children(g);
var clstrs = lib_draw_graph.postprocessor.tasks__GT_clusters(tasks);
var rects = lib_draw_graph.postprocessor.clusters__GT_boxes(z,clstrs);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (cluster_sep,BT_QMARK_,tasks,clstrs,rects){
return (function (a,p__24065){
var vec__24066 = p__24065;
var prnt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24066,(0),null);
var chdn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24066,(1),null);
var p_rect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(rects,prnt);
var c_rects = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (p_rect,vec__24066,prnt,chdn,cluster_sep,BT_QMARK_,tasks,clstrs,rects){
return (function (p1__24063_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(rects,p1__24063_SHARP_);
});})(p_rect,vec__24066,prnt,chdn,cluster_sep,BT_QMARK_,tasks,clstrs,rects))
,chdn);
var sep = (cljs.core.truth_(cluster_sep)?lib_draw_graph.postprocessor.adjust_sep.cljs$core$IFn$_invoke$arity$variadic(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(lib_draw_graph.postprocessor.sep,p_rect,c_rects),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$cluster_DASH_sep,cluster_sep,cljs.core.cst$kw$BT_QMARK_,BT_QMARK_], 0)):lib_draw_graph.postprocessor.adjust_sep.cljs$core$IFn$_invoke$arity$variadic(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(lib_draw_graph.postprocessor.sep,p_rect,c_rects),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$BT_QMARK_,BT_QMARK_], 0)));
var state = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (p_rect,c_rects,sep,vec__24066,prnt,chdn,cluster_sep,BT_QMARK_,tasks,clstrs,rects){
return (function (p1__24064_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__24064_SHARP_,cljs.core.get.cljs$core$IFn$_invoke$arity$2(rects,p1__24064_SHARP_)],null));
});})(p_rect,c_rects,sep,vec__24066,prnt,chdn,cluster_sep,BT_QMARK_,tasks,clstrs,rects))
,chdn));
var constr = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$boundary,lib_draw_graph.geometry.inner_rect(sep,p_rect),cljs.core.cst$kw$grow,true,cljs.core.cst$kw$collision,(cljs.core.truth_(cluster_sep)?cluster_sep:lib_draw_graph.postprocessor.collision_sep),cljs.core.cst$kw$obstacles,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (p_rect,c_rects,sep,state,vec__24066,prnt,chdn,cluster_sep,BT_QMARK_,tasks,clstrs,rects){
return (function (acc,cur){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,(node_label_fn.cljs$core$IFn$_invoke$arity$1 ? node_label_fn.cljs$core$IFn$_invoke$arity$1(cur) : node_label_fn.call(null,cur)),lib_draw_graph.svg.node__GT_rect(z,(node_label_fn.cljs$core$IFn$_invoke$arity$1 ? node_label_fn.cljs$core$IFn$_invoke$arity$1(cur) : node_label_fn.call(null,cur))));
});})(p_rect,c_rects,sep,state,vec__24066,prnt,chdn,cluster_sep,BT_QMARK_,tasks,clstrs,rects))
,cljs.core.PersistentArrayMap.EMPTY,lib_draw_graph.clustered.cluster__GT_nodes.cljs$core$IFn$_invoke$arity$2(g,prnt))], null);
return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(a,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prnt,cljs.core.cst$kw$constraints], null),constr),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prnt,cljs.core.cst$kw$state], null),state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prnt,cljs.core.cst$kw$boundary_DASH_sep], null),sep),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prnt,cljs.core.cst$kw$rect], null),p_rect);
});})(cluster_sep,BT_QMARK_,tasks,clstrs,rects))
,cljs.core.PersistentArrayMap.EMPTY,tasks);
});
/**
 * Flattens an environment back rectangles
 */
lib_draw_graph.postprocessor.env__GT_map = (function lib_draw_graph$postprocessor$env__GT_map(env){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (a,p__24069){
var vec__24070 = p__24069;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24070,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24070,(1),null);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a,k,cljs.core.cst$kw$rect.cljs$core$IFn$_invoke$arity$1(v)),cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(v)], 0));
}),cljs.core.PersistentArrayMap.EMPTY,env);
});
lib_draw_graph.postprocessor.max_move_factor = (50);
lib_draw_graph.postprocessor.do_annealing = (function lib_draw_graph$postprocessor$do_annealing(z,g,opts,label_fn){
var env = lib_draw_graph.postprocessor.env(z,g,opts,label_fn);
var rankdir = cljs.core.cst$kw$rankdir.cljs$core$IFn$_invoke$arity$1(opts);
var y_retard = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("TB",rankdir)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("BT",rankdir))))?lib_draw_graph.postprocessor.str__GT_int(cljs.core.cst$kw$pp_DASH_anneal_DASH_bias.cljs$core$IFn$_invoke$arity$1(opts),"anneal bias should be an integer"):null);
var x_retard = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("LR",rankdir)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("RL",rankdir))))?lib_draw_graph.postprocessor.str__GT_int(cljs.core.cst$kw$pp_DASH_anneal_DASH_bias.cljs$core$IFn$_invoke$arity$1(opts),"anneal bias should be an integer"):null);
var dims = (cljs.core.truth_(cljs.core.cst$kw$pp_DASH_clusters.cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.reduce_kv(((function (env,rankdir,y_retard,x_retard){
return (function (m,k,v){
if(cljs.core.truth_(v)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(m,k);
} else {
return m;
}
});})(env,rankdir,y_retard,x_retard))
,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$pp_DASH_clusters.cljs$core$IFn$_invoke$arity$1(opts)):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$x,cljs.core.cst$kw$w,cljs.core.cst$kw$y,cljs.core.cst$kw$h], null));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (env,rankdir,y_retard,x_retard,dims){
return (function (a,p__24073){
var vec__24074 = p__24073;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24074,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24074,(1),null);
var new_st = lib_draw_graph.anneal.annealing.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(v),(10000),(0),cljs.core.cst$kw$constraints.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k)),lib_draw_graph.anneal.neighbor_fn,lib_draw_graph.anneal.cost_fn,lib_draw_graph.anneal.p_fn,lib_draw_graph.anneal.temp_fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$terminate_DASH_early_QMARK_,true,cljs.core.cst$kw$dims,dims,cljs.core.cst$kw$x_DASH_retard,x_retard,cljs.core.cst$kw$y_DASH_retard,y_retard,cljs.core.cst$kw$max_DASH_move,((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("TB",rankdir)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("BT",rankdir))))?cljs.core.quot(cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$boundary.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$constraints.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k)))),lib_draw_graph.postprocessor.max_move_factor):cljs.core.quot(cljs.core.cst$kw$h.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$boundary.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$constraints.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k)))),lib_draw_graph.postprocessor.max_move_factor))], 0));
var adj_env = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (new_st,vec__24074,k,v,env,rankdir,y_retard,x_retard,dims){
return (function (acc,p__24077){
var vec__24078 = p__24077;
var k_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24078,(0),null);
var v_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24078,(1),null);
if((!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(acc,k_SINGLEQUOTE_) == null)))){
return cljs.core.assoc_in(cljs.core.assoc_in(acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_SINGLEQUOTE_,cljs.core.cst$kw$rect], null),v_SINGLEQUOTE_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_SINGLEQUOTE_,cljs.core.cst$kw$constraints,cljs.core.cst$kw$boundary], null),lib_draw_graph.geometry.inner_rect(cljs.core.cst$kw$boundary_DASH_sep.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(acc,k_SINGLEQUOTE_)),v_SINGLEQUOTE_));
} else {
return acc;
}
});})(new_st,vec__24074,k,v,env,rankdir,y_retard,x_retard,dims))
,a,new_st);
return cljs.core.assoc_in(adj_env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.cst$kw$state], null),new_st);
});})(env,rankdir,y_retard,x_retard,dims))
,env,env);
});
lib_draw_graph.postprocessor.editor_rects = (function lib_draw_graph$postprocessor$editor_rects(env,clstr,node){
var temp__5718__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,clstr);
if(cljs.core.truth_(temp__5718__auto__)){
var edited = temp__5718__auto__;
var ps = (lib_draw_graph.svg.rect__GT_svg.cljs$core$IFn$_invoke$arity$1 ? lib_draw_graph.svg.rect__GT_svg.cljs$core$IFn$_invoke$arity$1(edited) : lib_draw_graph.svg.rect__GT_svg.call(null,edited));
return cljs.core.assoc_in(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$attrs,cljs.core.first(ps)], null),cljs.core.second(ps));
} else {
return node;
}
});
lib_draw_graph.postprocessor.edit_cluster_rects = (function lib_draw_graph$postprocessor$edit_cluster_rects(z,env){
return lib_draw_graph.svg.tree_edit.cljs$core$IFn$_invoke$arity$6(z,lib_draw_graph.svg.all_clusters,(7),(function (n){
return cljs.core.first(cljs.core.cst$kw$content.cljs$core$IFn$_invoke$arity$1(n));
}),(5),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(lib_draw_graph.postprocessor.editor_rects,env));
});
lib_draw_graph.postprocessor.x_label_spacer = (10);
lib_draw_graph.postprocessor.y_label_spacer = (18);
lib_draw_graph.postprocessor.y_label_spacer_BT = (10);
lib_draw_graph.postprocessor.editor_label_posn = (function lib_draw_graph$postprocessor$editor_label_posn(env,g,opts,clstr,node){
var BT_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("BT",cljs.core.cst$kw$rankdir.cljs$core$IFn$_invoke$arity$1(opts));
if((!(BT_QMARK_))){
var temp__5718__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,clstr);
if(cljs.core.truth_(temp__5718__auto__)){
var edited = temp__5718__auto__;
var G__24081 = cljs.core.cst$kw$labeljust.cljs$core$IFn$_invoke$arity$1(lib_draw_graph.clustered.merged_cluster_attr(g,clstr,cljs.core.cst$kw$style));
switch (G__24081) {
case "l":
return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$attrs,cljs.core.cst$kw$x], null),(cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(edited) + lib_draw_graph.postprocessor.x_label_spacer)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$attrs,cljs.core.cst$kw$y], null),(cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(edited) + lib_draw_graph.postprocessor.y_label_spacer)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$attrs,cljs.core.cst$kw$text_DASH_anchor], null),"start");

break;
case "r":
return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$attrs,cljs.core.cst$kw$x], null),((cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(edited) + cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(edited)) - lib_draw_graph.postprocessor.x_label_spacer)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$attrs,cljs.core.cst$kw$y], null),(cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(edited) + lib_draw_graph.postprocessor.y_label_spacer)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$attrs,cljs.core.cst$kw$text_DASH_anchor], null),"end");

break;
default:
return cljs.core.assoc_in(cljs.core.assoc_in(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$attrs,cljs.core.cst$kw$x], null),(cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(edited) + (cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(edited) / (2)))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$attrs,cljs.core.cst$kw$y], null),(cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(edited) + lib_draw_graph.postprocessor.y_label_spacer));

}
} else {
return node;
}
} else {
var temp__5718__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,clstr);
if(cljs.core.truth_(temp__5718__auto__)){
var edited = temp__5718__auto__;
var G__24082 = cljs.core.cst$kw$labeljust.cljs$core$IFn$_invoke$arity$1(lib_draw_graph.clustered.merged_cluster_attr(g,clstr,cljs.core.cst$kw$style));
switch (G__24082) {
case "l":
return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$attrs,cljs.core.cst$kw$x], null),(cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(edited) + lib_draw_graph.postprocessor.x_label_spacer)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$attrs,cljs.core.cst$kw$y], null),((cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(edited) + cljs.core.cst$kw$h.cljs$core$IFn$_invoke$arity$1(edited)) - lib_draw_graph.postprocessor.y_label_spacer_BT)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$attrs,cljs.core.cst$kw$text_DASH_anchor], null),"start");

break;
case "r":
return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$attrs,cljs.core.cst$kw$x], null),((cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(edited) + cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(edited)) - lib_draw_graph.postprocessor.x_label_spacer)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$attrs,cljs.core.cst$kw$y], null),((cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(edited) + cljs.core.cst$kw$h.cljs$core$IFn$_invoke$arity$1(edited)) - lib_draw_graph.postprocessor.y_label_spacer_BT)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$attrs,cljs.core.cst$kw$text_DASH_anchor], null),"end");

break;
default:
return cljs.core.assoc_in(cljs.core.assoc_in(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$attrs,cljs.core.cst$kw$x], null),(cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(edited) + (cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(edited) / (2)))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$attrs,cljs.core.cst$kw$y], null),((cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(edited) + cljs.core.cst$kw$h.cljs$core$IFn$_invoke$arity$1(edited)) - lib_draw_graph.postprocessor.y_label_spacer_BT));

}
} else {
return node;
}
}
});
lib_draw_graph.postprocessor.edit_cluster_labels = (function lib_draw_graph$postprocessor$edit_cluster_labels(z,g,opts,env){
return lib_draw_graph.svg.tree_edit.cljs$core$IFn$_invoke$arity$6(z,lib_draw_graph.svg.all_clusters,(7),(function (n){
return cljs.core.first(cljs.core.cst$kw$content.cljs$core$IFn$_invoke$arity$1(n));
}),(7),cljs.core.partial.cljs$core$IFn$_invoke$arity$4(lib_draw_graph.postprocessor.editor_label_posn,env,g,opts));
});
/**
 * Anneals free clusters in z & g.
 * z is a zipper over the svg and g the underlying graph.
 * Returns svg.
 */
lib_draw_graph.postprocessor.optimize_clusters = (function lib_draw_graph$postprocessor$optimize_clusters(svg,g,label_fn,opts){
var z = lib_draw_graph.postprocessor.svg__GT_zipper(svg);
var env_out = lib_draw_graph.postprocessor.env__GT_map(lib_draw_graph.postprocessor.do_annealing(z,g,opts,label_fn));
return lib_draw_graph.svg.__GT_xml(lib_draw_graph.postprocessor.edit_cluster_labels(lib_draw_graph.svg.__GT_zipper(lib_draw_graph.postprocessor.edit_cluster_rects(z,env_out)),g,opts,env_out));
});
