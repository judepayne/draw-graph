goog.provide('lib_draw_graph.postprocessor');
goog.require('cljs.core');
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
return (function (p1__36433_SHARP_){
return (!((lib_draw_graph.clustered.cluster_children(g,p1__36433_SHARP_) == null)));
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
return (function (p1__36447_SHARP_,p2__36448_SHARP_){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__36447_SHARP_,p2__36448_SHARP_))){
return p1__36447_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__36447_SHARP_,p2__36448_SHARP_,cljs.core.PersistentHashSet.EMPTY);
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
var G__36454 = arguments.length;
switch (G__36454) {
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
var vec__36455 = lib_draw_graph.postprocessor.take_1(s);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36455,(0),null);
var s_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36455,(1),null);
var m = (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(n) : g.call(null,n));
var g_SINGLEQUOTE_ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (g,l,s,vec__36455,n,s_SINGLEQUOTE_,m){
return (function (p1__36451_SHARP_,p2__36452_SHARP_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(p1__36451_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [n], null),lib_draw_graph.postprocessor.without,p2__36452_SHARP_);
});})(g,l,s,vec__36455,n,s_SINGLEQUOTE_,m))
,g,m);
var G__36499 = g_SINGLEQUOTE_;
var G__36500 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(l,n);
var G__36501 = clojure.set.union.cljs$core$IFn$_invoke$arity$2(s_SINGLEQUOTE_,clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(lib_draw_graph.postprocessor.no_incoming(g_SINGLEQUOTE_),m));
g = G__36499;
l = G__36500;
s = G__36501;
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
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__36458_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__36458_SHARP_,lib_draw_graph.clustered.cluster_children(g,p1__36458_SHARP_)],null));
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
var len__4730__auto___36502 = arguments.length;
var i__4731__auto___36503 = (0);
while(true){
if((i__4731__auto___36503 < len__4730__auto___36502)){
args__4736__auto__.push((arguments[i__4731__auto___36503]));

var G__36504 = (i__4731__auto___36503 + (1));
i__4731__auto___36503 = G__36504;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return lib_draw_graph.postprocessor.sep.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

lib_draw_graph.postprocessor.sep.cljs$core$IFn$_invoke$arity$variadic = (function (bounding,rects){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"l","l",1395893423),(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),rects)) - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(bounding)),new cljs.core.Keyword(null,"t","t",-1397832519),(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),rects)) - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(bounding)),new cljs.core.Keyword(null,"r","r",-471384190),((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(bounding) + new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(bounding)) - cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (o){
return (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(o) + new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(o));
}),rects))),new cljs.core.Keyword(null,"b","b",1482224470),((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(bounding) + new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(bounding)) - cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (o){
return (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(o) + new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(o));
}),rects)))], null);
});

lib_draw_graph.postprocessor.sep.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
lib_draw_graph.postprocessor.sep.cljs$lang$applyTo = (function (seq36459){
var G__36460 = cljs.core.first(seq36459);
var seq36459__$1 = cljs.core.next(seq36459);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36460,seq36459__$1);
});

lib_draw_graph.postprocessor.collision_sep = (8);
/**
 * takes a sep, preserves the top but adjusts other seps to minimum.
 */
lib_draw_graph.postprocessor.adjust_sep = (function lib_draw_graph$postprocessor$adjust_sep(var_args){
var args__4736__auto__ = [];
var len__4730__auto___36505 = arguments.length;
var i__4731__auto___36506 = (0);
while(true){
if((i__4731__auto___36506 < len__4730__auto___36505)){
args__4736__auto__.push((arguments[i__4731__auto___36506]));

var G__36507 = (i__4731__auto___36506 + (1));
i__4731__auto___36506 = G__36507;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return lib_draw_graph.postprocessor.adjust_sep.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

lib_draw_graph.postprocessor.adjust_sep.cljs$core$IFn$_invoke$arity$variadic = (function (sep,p__36464){
var map__36465 = p__36464;
var map__36465__$1 = (((((!((map__36465 == null))))?(((((map__36465.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36465.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36465):map__36465);
var cluster_sep = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36465__$1,new cljs.core.Keyword(null,"cluster-sep","cluster-sep",127315253),null);
var BT_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36465__$1,new cljs.core.Keyword(null,"BT?","BT?",664855515),false);
if(cljs.core.not(BT_QMARK_)){
if(cljs.core.truth_(cluster_sep)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(sep,new cljs.core.Keyword(null,"l","l",1395893423),cluster_sep,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"r","r",-471384190),cluster_sep,new cljs.core.Keyword(null,"b","b",1482224470),cluster_sep], 0));
} else {
var min_lrb = (function (){var x__4222__auto__ = (function (){var x__4222__auto__ = new cljs.core.Keyword(null,"l","l",1395893423).cljs$core$IFn$_invoke$arity$1(sep);
var y__4223__auto__ = new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(sep);
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
var y__4223__auto__ = new cljs.core.Keyword(null,"b","b",1482224470).cljs$core$IFn$_invoke$arity$1(sep);
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(sep,new cljs.core.Keyword(null,"l","l",1395893423),min_lrb,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"r","r",-471384190),min_lrb,new cljs.core.Keyword(null,"b","b",1482224470),min_lrb], 0));
}
} else {
if(cljs.core.truth_(cluster_sep)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(sep,new cljs.core.Keyword(null,"l","l",1395893423),cluster_sep,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"r","r",-471384190),cluster_sep,new cljs.core.Keyword(null,"t","t",-1397832519),cluster_sep], 0));
} else {
var min_lrt = (function (){var x__4222__auto__ = (function (){var x__4222__auto__ = new cljs.core.Keyword(null,"l","l",1395893423).cljs$core$IFn$_invoke$arity$1(sep);
var y__4223__auto__ = new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(sep);
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
var y__4223__auto__ = new cljs.core.Keyword(null,"t","t",-1397832519).cljs$core$IFn$_invoke$arity$1(sep);
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(sep,new cljs.core.Keyword(null,"l","l",1395893423),min_lrt,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"r","r",-471384190),min_lrt,new cljs.core.Keyword(null,"t","t",-1397832519),min_lrt], 0));
}
}
});

lib_draw_graph.postprocessor.adjust_sep.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
lib_draw_graph.postprocessor.adjust_sep.cljs$lang$applyTo = (function (seq36462){
var G__36463 = cljs.core.first(seq36462);
var seq36462__$1 = cljs.core.next(seq36462);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36463,seq36462__$1);
});

lib_draw_graph.postprocessor.parse_int = (function lib_draw_graph$postprocessor$parse_int(s){
return parseInt(s);
});
lib_draw_graph.postprocessor.str__GT_int = (function lib_draw_graph$postprocessor$str__GT_int(cs,error_msg){
if(cljs.core.integer_QMARK_(cs)){
return cs;
} else {
try{return lib_draw_graph.postprocessor.parse_int(cs);
}catch (e36472){if((e36472 instanceof Error)){
var e = e36472;
throw lib_draw_graph.util.err(error_msg);
} else {
throw e36472;

}
}}
});
/**
 * Constructs a nested map which parameters required for annealing
 * from a zipper, a graph and the key clustered on in the graph.
 */
lib_draw_graph.postprocessor.env = (function lib_draw_graph$postprocessor$env(z,g,opts,node_label_fn){
var cluster_sep = (cljs.core.truth_(new cljs.core.Keyword(null,"pp-cluster-sep","pp-cluster-sep",335802146).cljs$core$IFn$_invoke$arity$1(opts))?lib_draw_graph.postprocessor.str__GT_int(new cljs.core.Keyword(null,"pp-cluster-sep","pp-cluster-sep",335802146).cljs$core$IFn$_invoke$arity$1(opts),"cluster separation should be an integer"):null);
var BT_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rankdir","rankdir",-2029540135).cljs$core$IFn$_invoke$arity$1(opts),"BT");
var tasks = lib_draw_graph.postprocessor.free_clusters_with_children(g);
var clstrs = lib_draw_graph.postprocessor.tasks__GT_clusters(tasks);
var rects = lib_draw_graph.postprocessor.clusters__GT_boxes(z,clstrs);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (cluster_sep,BT_QMARK_,tasks,clstrs,rects){
return (function (a,p__36476){
var vec__36477 = p__36476;
var prnt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36477,(0),null);
var chdn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36477,(1),null);
var p_rect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(rects,prnt);
var c_rects = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (p_rect,vec__36477,prnt,chdn,cluster_sep,BT_QMARK_,tasks,clstrs,rects){
return (function (p1__36473_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(rects,p1__36473_SHARP_);
});})(p_rect,vec__36477,prnt,chdn,cluster_sep,BT_QMARK_,tasks,clstrs,rects))
,chdn);
var sep = (cljs.core.truth_(cluster_sep)?lib_draw_graph.postprocessor.adjust_sep.cljs$core$IFn$_invoke$arity$variadic(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(lib_draw_graph.postprocessor.sep,p_rect,c_rects),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"cluster-sep","cluster-sep",127315253),cluster_sep,new cljs.core.Keyword(null,"BT?","BT?",664855515),BT_QMARK_], 0)):lib_draw_graph.postprocessor.adjust_sep.cljs$core$IFn$_invoke$arity$variadic(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(lib_draw_graph.postprocessor.sep,p_rect,c_rects),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"BT?","BT?",664855515),BT_QMARK_], 0)));
var state = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (p_rect,c_rects,sep,vec__36477,prnt,chdn,cluster_sep,BT_QMARK_,tasks,clstrs,rects){
return (function (p1__36475_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__36475_SHARP_,cljs.core.get.cljs$core$IFn$_invoke$arity$2(rects,p1__36475_SHARP_)],null));
});})(p_rect,c_rects,sep,vec__36477,prnt,chdn,cluster_sep,BT_QMARK_,tasks,clstrs,rects))
,chdn));
var constr = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"boundary","boundary",-2000996754),lib_draw_graph.geometry.inner_rect(sep,p_rect),new cljs.core.Keyword(null,"grow","grow",-524118895),true,new cljs.core.Keyword(null,"collision","collision",-201625508),(cljs.core.truth_(cluster_sep)?cluster_sep:lib_draw_graph.postprocessor.collision_sep),new cljs.core.Keyword(null,"obstacles","obstacles",1370670211),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (p_rect,c_rects,sep,state,vec__36477,prnt,chdn,cluster_sep,BT_QMARK_,tasks,clstrs,rects){
return (function (acc,cur){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,(node_label_fn.cljs$core$IFn$_invoke$arity$1 ? node_label_fn.cljs$core$IFn$_invoke$arity$1(cur) : node_label_fn.call(null,cur)),lib_draw_graph.svg.node__GT_rect(z,(node_label_fn.cljs$core$IFn$_invoke$arity$1 ? node_label_fn.cljs$core$IFn$_invoke$arity$1(cur) : node_label_fn.call(null,cur))));
});})(p_rect,c_rects,sep,state,vec__36477,prnt,chdn,cluster_sep,BT_QMARK_,tasks,clstrs,rects))
,cljs.core.PersistentArrayMap.EMPTY,lib_draw_graph.clustered.cluster__GT_nodes.cljs$core$IFn$_invoke$arity$2(g,prnt))], null);
return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(a,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prnt,new cljs.core.Keyword(null,"constraints","constraints",422775616)], null),constr),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prnt,new cljs.core.Keyword(null,"state","state",-1988618099)], null),state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prnt,new cljs.core.Keyword(null,"boundary-sep","boundary-sep",959091714)], null),sep),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prnt,new cljs.core.Keyword(null,"rect","rect",-108902628)], null),p_rect);
});})(cluster_sep,BT_QMARK_,tasks,clstrs,rects))
,cljs.core.PersistentArrayMap.EMPTY,tasks);
});
/**
 * Flattens an environment back rectangles
 */
lib_draw_graph.postprocessor.env__GT_map = (function lib_draw_graph$postprocessor$env__GT_map(env){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (a,p__36480){
var vec__36481 = p__36480;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36481,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36481,(1),null);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a,k,new cljs.core.Keyword(null,"rect","rect",-108902628).cljs$core$IFn$_invoke$arity$1(v)),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(v)], 0));
}),cljs.core.PersistentArrayMap.EMPTY,env);
});
lib_draw_graph.postprocessor.max_move_factor = (50);
lib_draw_graph.postprocessor.do_annealing = (function lib_draw_graph$postprocessor$do_annealing(z,g,opts,label_fn){
var env = lib_draw_graph.postprocessor.env(z,g,opts,label_fn);
var rankdir = new cljs.core.Keyword(null,"rankdir","rankdir",-2029540135).cljs$core$IFn$_invoke$arity$1(opts);
var y_retard = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("TB",rankdir)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("BT",rankdir))))?lib_draw_graph.postprocessor.str__GT_int(new cljs.core.Keyword(null,"pp-anneal-bias","pp-anneal-bias",1268244973).cljs$core$IFn$_invoke$arity$1(opts),"anneal bias should be an integer"):null);
var x_retard = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("LR",rankdir)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("RL",rankdir))))?lib_draw_graph.postprocessor.str__GT_int(new cljs.core.Keyword(null,"pp-anneal-bias","pp-anneal-bias",1268244973).cljs$core$IFn$_invoke$arity$1(opts),"anneal bias should be an integer"):null);
var dims = (cljs.core.truth_(new cljs.core.Keyword(null,"pp-clusters","pp-clusters",478062894).cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.reduce_kv(((function (env,rankdir,y_retard,x_retard){
return (function (m,k,v){
if(cljs.core.truth_(v)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(m,k);
} else {
return m;
}
});})(env,rankdir,y_retard,x_retard))
,cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"pp-clusters","pp-clusters",478062894).cljs$core$IFn$_invoke$arity$1(opts)):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"h","h",1109658740)], null));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (env,rankdir,y_retard,x_retard,dims){
return (function (a,p__36485){
var vec__36486 = p__36485;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36486,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36486,(1),null);
var new_st = lib_draw_graph.anneal.annealing.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(v),(10000),(0),new cljs.core.Keyword(null,"constraints","constraints",422775616).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k)),lib_draw_graph.anneal.neighbor_fn,lib_draw_graph.anneal.cost_fn,lib_draw_graph.anneal.p_fn,lib_draw_graph.anneal.temp_fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"terminate-early?","terminate-early?",-74748151),true,new cljs.core.Keyword(null,"dims","dims",-466522889),dims,new cljs.core.Keyword(null,"x-retard","x-retard",1308817436),x_retard,new cljs.core.Keyword(null,"y-retard","y-retard",1549838503),y_retard,new cljs.core.Keyword(null,"max-move","max-move",-879805405),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("TB",rankdir)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("BT",rankdir))))?cljs.core.quot(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"boundary","boundary",-2000996754).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"constraints","constraints",422775616).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k)))),lib_draw_graph.postprocessor.max_move_factor):cljs.core.quot(new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"boundary","boundary",-2000996754).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"constraints","constraints",422775616).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k)))),lib_draw_graph.postprocessor.max_move_factor))], 0));
var adj_env = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (new_st,vec__36486,k,v,env,rankdir,y_retard,x_retard,dims){
return (function (acc,p__36489){
var vec__36490 = p__36489;
var k_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36490,(0),null);
var v_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36490,(1),null);
if((!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(acc,k_SINGLEQUOTE_) == null)))){
return cljs.core.assoc_in(cljs.core.assoc_in(acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_SINGLEQUOTE_,new cljs.core.Keyword(null,"rect","rect",-108902628)], null),v_SINGLEQUOTE_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_SINGLEQUOTE_,new cljs.core.Keyword(null,"constraints","constraints",422775616),new cljs.core.Keyword(null,"boundary","boundary",-2000996754)], null),lib_draw_graph.geometry.inner_rect(new cljs.core.Keyword(null,"boundary-sep","boundary-sep",959091714).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(acc,k_SINGLEQUOTE_)),v_SINGLEQUOTE_));
} else {
return acc;
}
});})(new_st,vec__36486,k,v,env,rankdir,y_retard,x_retard,dims))
,a,new_st);
return cljs.core.assoc_in(adj_env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Keyword(null,"state","state",-1988618099)], null),new_st);
});})(env,rankdir,y_retard,x_retard,dims))
,env,env);
});
lib_draw_graph.postprocessor.editor_rects = (function lib_draw_graph$postprocessor$editor_rects(env,clstr,node){
var temp__5718__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,clstr);
if(cljs.core.truth_(temp__5718__auto__)){
var edited = temp__5718__auto__;
var ps = (lib_draw_graph.svg.rect__GT_svg.cljs$core$IFn$_invoke$arity$1 ? lib_draw_graph.svg.rect__GT_svg.cljs$core$IFn$_invoke$arity$1(edited) : lib_draw_graph.svg.rect__GT_svg.call(null,edited));
return cljs.core.assoc_in(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.first(ps)], null),cljs.core.second(ps));
} else {
return node;
}
});
lib_draw_graph.postprocessor.edit_cluster_rects = (function lib_draw_graph$postprocessor$edit_cluster_rects(z,env){
return lib_draw_graph.svg.tree_edit.cljs$core$IFn$_invoke$arity$6(z,lib_draw_graph.svg.all_clusters,(7),(function (n){
return cljs.core.first(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(n));
}),(5),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(lib_draw_graph.postprocessor.editor_rects,env));
});
lib_draw_graph.postprocessor.x_label_spacer = (10);
lib_draw_graph.postprocessor.y_label_spacer = (18);
lib_draw_graph.postprocessor.y_label_spacer_BT = (10);
lib_draw_graph.postprocessor.editor_label_posn = (function lib_draw_graph$postprocessor$editor_label_posn(env,g,opts,clstr,node){
var BT_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("BT",new cljs.core.Keyword(null,"rankdir","rankdir",-2029540135).cljs$core$IFn$_invoke$arity$1(opts));
if((!(BT_QMARK_))){
var temp__5718__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,clstr);
if(cljs.core.truth_(temp__5718__auto__)){
var edited = temp__5718__auto__;
var G__36496 = new cljs.core.Keyword(null,"labeljust","labeljust",-370267851).cljs$core$IFn$_invoke$arity$1(lib_draw_graph.clustered.merged_cluster_attr(g,clstr,new cljs.core.Keyword(null,"style","style",-496642736)));
switch (G__36496) {
case "l":
return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"x","x",2099068185)], null),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(edited) + lib_draw_graph.postprocessor.x_label_spacer)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(edited) + lib_draw_graph.postprocessor.y_label_spacer)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696)], null),"start");

break;
case "r":
return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"x","x",2099068185)], null),((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(edited) + new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(edited)) - lib_draw_graph.postprocessor.x_label_spacer)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(edited) + lib_draw_graph.postprocessor.y_label_spacer)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696)], null),"end");

break;
default:
return cljs.core.assoc_in(cljs.core.assoc_in(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"x","x",2099068185)], null),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(edited) + (new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(edited) / (2)))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(edited) + lib_draw_graph.postprocessor.y_label_spacer));

}
} else {
return node;
}
} else {
var temp__5718__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,clstr);
if(cljs.core.truth_(temp__5718__auto__)){
var edited = temp__5718__auto__;
var G__36497 = new cljs.core.Keyword(null,"labeljust","labeljust",-370267851).cljs$core$IFn$_invoke$arity$1(lib_draw_graph.clustered.merged_cluster_attr(g,clstr,new cljs.core.Keyword(null,"style","style",-496642736)));
switch (G__36497) {
case "l":
return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"x","x",2099068185)], null),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(edited) + lib_draw_graph.postprocessor.x_label_spacer)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"y","y",-1757859776)], null),((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(edited) + new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(edited)) - lib_draw_graph.postprocessor.y_label_spacer_BT)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696)], null),"start");

break;
case "r":
return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"x","x",2099068185)], null),((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(edited) + new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(edited)) - lib_draw_graph.postprocessor.x_label_spacer)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"y","y",-1757859776)], null),((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(edited) + new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(edited)) - lib_draw_graph.postprocessor.y_label_spacer_BT)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696)], null),"end");

break;
default:
return cljs.core.assoc_in(cljs.core.assoc_in(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"x","x",2099068185)], null),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(edited) + (new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(edited) / (2)))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"y","y",-1757859776)], null),((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(edited) + new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(edited)) - lib_draw_graph.postprocessor.y_label_spacer_BT));

}
} else {
return node;
}
}
});
lib_draw_graph.postprocessor.edit_cluster_labels = (function lib_draw_graph$postprocessor$edit_cluster_labels(z,g,opts,env){
return lib_draw_graph.svg.tree_edit.cljs$core$IFn$_invoke$arity$6(z,lib_draw_graph.svg.all_clusters,(7),(function (n){
return cljs.core.first(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(n));
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

//# sourceMappingURL=lib_draw_graph.postprocessor.js.map
