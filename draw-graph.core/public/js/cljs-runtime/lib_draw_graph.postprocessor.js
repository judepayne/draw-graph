goog.provide('lib_draw_graph.postprocessor');
goog.require('cljs.core');
goog.require('lib_draw_graph.svg');
goog.require('lib_draw_graph.anneal');
goog.require('loom.graph');
goog.require('lib_draw_graph.clustered');
goog.require('lib_draw_graph.geometry');
goog.require('lib_draw_graph.util');
goog.require('clojure.set');
/**
 * Returns clusters that (a) contain clusters (b) contain no nodes directly.
 */
lib_draw_graph.postprocessor.free_clusters = (function lib_draw_graph$postprocessor$free_clusters(g){
var clstrs = lib_draw_graph.clustered.clusters(g);
var has_chdn = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__37505_SHARP_){
return (!((lib_draw_graph.clustered.cluster_children(g,p1__37505_SHARP_) == null)));
}),clstrs);
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__37515_SHARP_,p2__37516_SHARP_){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__37515_SHARP_,p2__37516_SHARP_))){
return p1__37515_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__37515_SHARP_,p2__37516_SHARP_,cljs.core.PersistentHashSet.EMPTY);
}
}),g,have_incoming);
});
/**
 * Proposes a topological sort for directed graph g using Kahn's
 *   algorithm, where g is a map of nodes to sets of nodes. If g is
 *   cyclic, returns nil.
 */
lib_draw_graph.postprocessor.kahn_sort = (function lib_draw_graph$postprocessor$kahn_sort(var_args){
var G__37520 = arguments.length;
switch (G__37520) {
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

(lib_draw_graph.postprocessor.kahn_sort.cljs$core$IFn$_invoke$arity$1 = (function (g){
return lib_draw_graph.postprocessor.kahn_sort.cljs$core$IFn$_invoke$arity$3(lib_draw_graph.postprocessor.normalize(g),cljs.core.PersistentVector.EMPTY,lib_draw_graph.postprocessor.no_incoming(g));
}));

(lib_draw_graph.postprocessor.kahn_sort.cljs$core$IFn$_invoke$arity$3 = (function (g,l,s){
while(true){
if(cljs.core.empty_QMARK_(s)){
if(cljs.core.every_QMARK_(cljs.core.empty_QMARK_,cljs.core.vals(g))){
return l;
} else {
return null;
}
} else {
var vec__37521 = lib_draw_graph.postprocessor.take_1(s);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37521,(0),null);
var s_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37521,(1),null);
var m = (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(n) : g.call(null,n));
var g_SINGLEQUOTE_ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (g,l,s,vec__37521,n,s_SINGLEQUOTE_,m){
return (function (p1__37517_SHARP_,p2__37518_SHARP_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(p1__37517_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [n], null),lib_draw_graph.postprocessor.without,p2__37518_SHARP_);
});})(g,l,s,vec__37521,n,s_SINGLEQUOTE_,m))
,g,m);
var G__37616 = g_SINGLEQUOTE_;
var G__37617 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(l,n);
var G__37618 = clojure.set.union.cljs$core$IFn$_invoke$arity$2(s_SINGLEQUOTE_,clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(lib_draw_graph.postprocessor.no_incoming(g_SINGLEQUOTE_),m));
g = G__37616;
l = G__37617;
s = G__37618;
continue;
}
break;
}
}));

(lib_draw_graph.postprocessor.kahn_sort.cljs$lang$maxFixedArity = 3);

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
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__37524_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__37524_SHARP_,lib_draw_graph.clustered.cluster_children(g,p1__37524_SHARP_)],null));
}),clstrs);
});
/**
 * Provides the targets for annealing in the graph.
 */
lib_draw_graph.postprocessor.free_clusters_with_children = (function lib_draw_graph$postprocessor$free_clusters_with_children(g){
return lib_draw_graph.postprocessor.with_chdn(g,lib_draw_graph.postprocessor.sorted_free_clusters(g));
});
/**
 * turns free clusters with children into a loom graph.
 */
lib_draw_graph.postprocessor.__GT_graph = (function lib_draw_graph$postprocessor$__GT_graph(free_clusters){
var edges = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (a,p__37526){
var vec__37527 = p__37526;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37527,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37527,(1),null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,a,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37525_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[k,p1__37525_SHARP_],null));
}),v));
}),cljs.core.PersistentVector.EMPTY,free_clusters);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(loom.graph.digraph,edges);
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (a,p__37536){
var vec__37537 = p__37536;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37537,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37537,(1),null);
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(a,k),v);
}),cljs.core.PersistentHashSet.EMPTY,tasks);
});
/**
 * Returns the separation map between the bounding
 */
lib_draw_graph.postprocessor.sep = (function lib_draw_graph$postprocessor$sep(var_args){
var args__4795__auto__ = [];
var len__4789__auto___37619 = arguments.length;
var i__4790__auto___37620 = (0);
while(true){
if((i__4790__auto___37620 < len__4789__auto___37619)){
args__4795__auto__.push((arguments[i__4790__auto___37620]));

var G__37622 = (i__4790__auto___37620 + (1));
i__4790__auto___37620 = G__37622;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return lib_draw_graph.postprocessor.sep.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(lib_draw_graph.postprocessor.sep.cljs$core$IFn$_invoke$arity$variadic = (function (bounding,rects){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"l","l",1395893423),(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),rects)) - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(bounding)),new cljs.core.Keyword(null,"t","t",-1397832519),(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),rects)) - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(bounding)),new cljs.core.Keyword(null,"r","r",-471384190),((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(bounding) + new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(bounding)) - cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (o){
return (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(o) + new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(o));
}),rects))),new cljs.core.Keyword(null,"b","b",1482224470),((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(bounding) + new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(bounding)) - cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (o){
return (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(o) + new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(o));
}),rects)))], null);
}));

(lib_draw_graph.postprocessor.sep.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(lib_draw_graph.postprocessor.sep.cljs$lang$applyTo = (function (seq37542){
var G__37543 = cljs.core.first(seq37542);
var seq37542__$1 = cljs.core.next(seq37542);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37543,seq37542__$1);
}));

lib_draw_graph.postprocessor.collision_sep = (8);
/**
 * takes a sep, preserves the top but adjusts other seps to minimum.
 */
lib_draw_graph.postprocessor.adjust_sep = (function lib_draw_graph$postprocessor$adjust_sep(var_args){
var args__4795__auto__ = [];
var len__4789__auto___37630 = arguments.length;
var i__4790__auto___37631 = (0);
while(true){
if((i__4790__auto___37631 < len__4789__auto___37630)){
args__4795__auto__.push((arguments[i__4790__auto___37631]));

var G__37635 = (i__4790__auto___37631 + (1));
i__4790__auto___37631 = G__37635;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return lib_draw_graph.postprocessor.adjust_sep.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(lib_draw_graph.postprocessor.adjust_sep.cljs$core$IFn$_invoke$arity$variadic = (function (sep,p__37553){
var map__37554 = p__37553;
var map__37554__$1 = (((((!((map__37554 == null))))?(((((map__37554.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37554.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37554):map__37554);
var cluster_sep = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37554__$1,new cljs.core.Keyword(null,"cluster-sep","cluster-sep",127315253),null);
var BT_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37554__$1,new cljs.core.Keyword(null,"BT?","BT?",664855515),false);
if(cljs.core.not(BT_QMARK_)){
if(cljs.core.truth_(cluster_sep)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(sep,new cljs.core.Keyword(null,"l","l",1395893423),cluster_sep,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"r","r",-471384190),cluster_sep,new cljs.core.Keyword(null,"b","b",1482224470),cluster_sep], 0));
} else {
var min_lrb = (function (){var x__4276__auto__ = (function (){var x__4276__auto__ = new cljs.core.Keyword(null,"l","l",1395893423).cljs$core$IFn$_invoke$arity$1(sep);
var y__4277__auto__ = new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(sep);
return ((x__4276__auto__ < y__4277__auto__) ? x__4276__auto__ : y__4277__auto__);
})();
var y__4277__auto__ = new cljs.core.Keyword(null,"b","b",1482224470).cljs$core$IFn$_invoke$arity$1(sep);
return ((x__4276__auto__ < y__4277__auto__) ? x__4276__auto__ : y__4277__auto__);
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(sep,new cljs.core.Keyword(null,"l","l",1395893423),min_lrb,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"r","r",-471384190),min_lrb,new cljs.core.Keyword(null,"b","b",1482224470),min_lrb], 0));
}
} else {
if(cljs.core.truth_(cluster_sep)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(sep,new cljs.core.Keyword(null,"l","l",1395893423),cluster_sep,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"r","r",-471384190),cluster_sep,new cljs.core.Keyword(null,"t","t",-1397832519),cluster_sep], 0));
} else {
var min_lrt = (function (){var x__4276__auto__ = (function (){var x__4276__auto__ = new cljs.core.Keyword(null,"l","l",1395893423).cljs$core$IFn$_invoke$arity$1(sep);
var y__4277__auto__ = new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(sep);
return ((x__4276__auto__ < y__4277__auto__) ? x__4276__auto__ : y__4277__auto__);
})();
var y__4277__auto__ = new cljs.core.Keyword(null,"t","t",-1397832519).cljs$core$IFn$_invoke$arity$1(sep);
return ((x__4276__auto__ < y__4277__auto__) ? x__4276__auto__ : y__4277__auto__);
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(sep,new cljs.core.Keyword(null,"l","l",1395893423),min_lrt,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"r","r",-471384190),min_lrt,new cljs.core.Keyword(null,"t","t",-1397832519),min_lrt], 0));
}
}
}));

(lib_draw_graph.postprocessor.adjust_sep.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(lib_draw_graph.postprocessor.adjust_sep.cljs$lang$applyTo = (function (seq37551){
var G__37552 = cljs.core.first(seq37551);
var seq37551__$1 = cljs.core.next(seq37551);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37552,seq37551__$1);
}));

lib_draw_graph.postprocessor.parse_integer = (function lib_draw_graph$postprocessor$parse_integer(s){
return parseInt(s);
});
lib_draw_graph.postprocessor.str__GT_int = (function lib_draw_graph$postprocessor$str__GT_int(cs,error_msg){
if(cljs.core.integer_QMARK_(cs)){
return cs;
} else {
try{return lib_draw_graph.postprocessor.parse_integer(cs);
}catch (e37556){if((e37556 instanceof Error)){
var e = e37556;
throw lib_draw_graph.util.err(error_msg);
} else {
throw e37556;

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
var tasks = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,lib_draw_graph.postprocessor.free_clusters_with_children(g));
var task_graph = lib_draw_graph.postprocessor.__GT_graph(tasks);
var clstrs = lib_draw_graph.postprocessor.tasks__GT_clusters(tasks);
var rects = lib_draw_graph.postprocessor.clusters__GT_boxes(z,clstrs);
var seps = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (a,p__37560){
var vec__37561 = p__37560;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37561,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37561,(1),null);
var s = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(lib_draw_graph.postprocessor.sep,cljs.core.get.cljs$core$IFn$_invoke$arity$2(rects,k),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37557_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(rects,p1__37557_SHARP_);
}),v));
var adj_s = (cljs.core.truth_(cluster_sep)?lib_draw_graph.postprocessor.adjust_sep.cljs$core$IFn$_invoke$arity$variadic(s,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"cluster-sep","cluster-sep",127315253),cluster_sep,new cljs.core.Keyword(null,"BT?","BT?",664855515),BT_QMARK_], 0)):lib_draw_graph.postprocessor.adjust_sep.cljs$core$IFn$_invoke$arity$variadic(s,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"BT?","BT?",664855515),BT_QMARK_], 0)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a,k,adj_s);
}),cljs.core.PersistentArrayMap.EMPTY,tasks);
var inner_rects = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (a,p__37564){
var vec__37565 = p__37564;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37565,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37565,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a,k,lib_draw_graph.geometry.inner_rect(v,cljs.core.get.cljs$core$IFn$_invoke$arity$2(rects,k)));
}),cljs.core.PersistentArrayMap.EMPTY,seps);
var e = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (a,p__37568){
var vec__37569 = p__37568;
var prnt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37569,(0),null);
var chdn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37569,(1),null);
var state = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"boundary","boundary",-2000996754),cljs.core.get.cljs$core$IFn$_invoke$arity$2(inner_rects,prnt),new cljs.core.Keyword(null,"objects","objects",2099713734),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__37558_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(rects,p1__37558_SHARP_);
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(tasks,prnt))], null);
var constr = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"boundary","boundary",-2000996754),true,new cljs.core.Keyword(null,"grow","grow",-524118895),true,new cljs.core.Keyword(null,"collision","collision",-201625508),(cljs.core.truth_(cluster_sep)?cluster_sep:lib_draw_graph.postprocessor.collision_sep),new cljs.core.Keyword(null,"obstacles","obstacles",1370670211),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__37559_SHARP_){
return lib_draw_graph.svg.node__GT_rect(z,(node_label_fn.cljs$core$IFn$_invoke$arity$1 ? node_label_fn.cljs$core$IFn$_invoke$arity$1(p1__37559_SHARP_) : node_label_fn.call(null,p1__37559_SHARP_)));
}),lib_draw_graph.clustered.cluster__GT_nodes.cljs$core$IFn$_invoke$arity$2(g,prnt))], null);
return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(a,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prnt,new cljs.core.Keyword(null,"constraints","constraints",422775616)], null),constr),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prnt,new cljs.core.Keyword(null,"state","state",-1988618099)], null),state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prnt,new cljs.core.Keyword(null,"boundary-sep","boundary-sep",959091714)], null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(seps,prnt)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prnt,new cljs.core.Keyword(null,"root?","root?",-2045639518)], null),lib_draw_graph.util.root_QMARK_(task_graph,prnt));
}),cljs.core.PersistentArrayMap.EMPTY,tasks);
return e;
});
/**
 * Flattens an environment back into rectangles.
 */
lib_draw_graph.postprocessor.env__GT_map = (function lib_draw_graph$postprocessor$env__GT_map(env){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (a,p__37572){
var vec__37573 = p__37572;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37573,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37573,(1),null);
var sep = new cljs.core.Keyword(null,"boundary-sep","boundary-sep",959091714).cljs$core$IFn$_invoke$arity$1(v);
var bdry = new cljs.core.Keyword(null,"boundary","boundary",-2000996754).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(v));
var rect = (cljs.core.truth_(sep)?lib_draw_graph.geometry.outer_rect(sep,bdry):bdry);
var root_QMARK_ = new cljs.core.Keyword(null,"root?","root?",-2045639518).cljs$core$IFn$_invoke$arity$1(v);
var others = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (a_SINGLEQUOTE_,c_SINGLEQUOTE_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a_SINGLEQUOTE_,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(c_SINGLEQUOTE_),c_SINGLEQUOTE_);
}),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(v)));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a,k,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(rect,new cljs.core.Keyword(null,"root?","root?",-2045639518),root_QMARK_)),others], 0));
}),cljs.core.PersistentArrayMap.EMPTY,env);
});
lib_draw_graph.postprocessor.max_move_factor = (50);
/**
 * Defines a shrink bias on the basis of number of child clusters
 */
lib_draw_graph.postprocessor.shrink_bias = (function lib_draw_graph$postprocessor$shrink_bias(n){
if((n < (4))){
return (2);
} else {
if((n < (7))){
return (3);
} else {
if((n < (14))){
return (3);
} else {
return (4);

}
}
}
});
/**
 * updates environment with new state, for each <cluster, new-st> pair
 *   in new-st updating to the new rect and boundary.
 */
lib_draw_graph.postprocessor.update_env = (function lib_draw_graph$postprocessor$update_env(env,k,new_st){
var env1 = cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Keyword(null,"state","state",-1988618099)], null),new_st);
var objects = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,c){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(c),c);
}),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(new_st));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__37576){
var vec__37577 = p__37576;
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37577,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37577,(1),null);
if((!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(acc,k__$1) == null)))){
var sep = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__$1,new cljs.core.Keyword(null,"boundary-sep","boundary-sep",959091714)], null));
return cljs.core.assoc_in(acc,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__$1,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"boundary","boundary",-2000996754)], null),lib_draw_graph.geometry.inner_rect(sep,v));
} else {
return acc;
}
}),env1,objects);
});
lib_draw_graph.postprocessor.do_annealing = (function lib_draw_graph$postprocessor$do_annealing(z,g,opts,label_fn){
var env = lib_draw_graph.postprocessor.env(z,g,opts,label_fn);
var rankdir = new cljs.core.Keyword(null,"rankdir","rankdir",-2029540135).cljs$core$IFn$_invoke$arity$1(opts);
var y_retard = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("TB",rankdir)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("BT",rankdir))))?lib_draw_graph.postprocessor.str__GT_int(new cljs.core.Keyword(null,"pp-anneal-bias","pp-anneal-bias",1268244973).cljs$core$IFn$_invoke$arity$1(opts),"anneal bias should be an integer"):null);
var x_retard = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("LR",rankdir)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("RL",rankdir))))?lib_draw_graph.postprocessor.str__GT_int(new cljs.core.Keyword(null,"pp-anneal-bias","pp-anneal-bias",1268244973).cljs$core$IFn$_invoke$arity$1(opts),"anneal bias should be an integer"):null);
var dims = (cljs.core.truth_(new cljs.core.Keyword(null,"pp-clusters","pp-clusters",478062894).cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.reduce_kv((function (m,k,v){
if(cljs.core.truth_(v)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(m,k);
} else {
return m;
}
}),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"pp-clusters","pp-clusters",478062894).cljs$core$IFn$_invoke$arity$1(opts)):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"h","h",1109658740)], null));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (a,p__37582){
var vec__37583 = p__37582;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37583,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37583,(1),null);
var cur = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var new_st = lib_draw_graph.anneal.annealing.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cur),(25000),(0),new cljs.core.Keyword(null,"constraints","constraints",422775616).cljs$core$IFn$_invoke$arity$1(cur),lib_draw_graph.anneal.neighbor_fn,lib_draw_graph.anneal.cost_fn,lib_draw_graph.anneal.p_fn,lib_draw_graph.anneal.temp_fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"terminate-early?","terminate-early?",-74748151),true,new cljs.core.Keyword(null,"dims","dims",-466522889),dims,new cljs.core.Keyword(null,"x-retard","x-retard",1308817436),x_retard,new cljs.core.Keyword(null,"y-retard","y-retard",1549838503),y_retard,new cljs.core.Keyword(null,"max-move","max-move",-879805405),(function (){var bdry = new cljs.core.Keyword(null,"boundary","boundary",-2000996754).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cur));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("TB",rankdir)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("BT",rankdir)))){
return cljs.core.quot(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(bdry),lib_draw_graph.postprocessor.max_move_factor);
} else {
return cljs.core.quot(new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(bdry),lib_draw_graph.postprocessor.max_move_factor);
}
})(),new cljs.core.Keyword(null,"shrink-bias","shrink-bias",64558488),(cljs.core.truth_(new cljs.core.Keyword(null,"root?","root?",-2045639518).cljs$core$IFn$_invoke$arity$1(cur))?lib_draw_graph.postprocessor.shrink_bias(cljs.core.count(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cur)))):null)], 0));
return lib_draw_graph.postprocessor.update_env(a,k,new_st);
}),env,env);
});
lib_draw_graph.postprocessor.editor_rects = (function lib_draw_graph$postprocessor$editor_rects(env,clstr,node){
var temp__5733__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,clstr);
if(cljs.core.truth_(temp__5733__auto__)){
var edited = temp__5733__auto__;
var ps = lib_draw_graph.svg.rect__GT_svg.cljs$core$IFn$_invoke$arity$1(edited);
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
var temp__5733__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,clstr);
if(cljs.core.truth_(temp__5733__auto__)){
var edited = temp__5733__auto__;
var G__37591 = new cljs.core.Keyword(null,"labeljust","labeljust",-370267851).cljs$core$IFn$_invoke$arity$1(lib_draw_graph.clustered.merged_cluster_attr(g,clstr,new cljs.core.Keyword(null,"style","style",-496642736)));
switch (G__37591) {
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
var temp__5733__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,clstr);
if(cljs.core.truth_(temp__5733__auto__)){
var edited = temp__5733__auto__;
var G__37592 = new cljs.core.Keyword(null,"labeljust","labeljust",-370267851).cljs$core$IFn$_invoke$arity$1(lib_draw_graph.clustered.merged_cluster_attr(g,clstr,new cljs.core.Keyword(null,"style","style",-496642736)));
switch (G__37592) {
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
 * calculates the canvas size from seq of root clusters, svg translation and viewbox.
 *   The svg's upper left point is always at 0,0.
 *   translation is a 2 element vector in form [tx ty].
 *   viewbox is a 2 element vector in form [vbx vby].
 */
lib_draw_graph.postprocessor.viewbox_size = (function lib_draw_graph$postprocessor$viewbox_size(roots,p__37597,p__37598){
var vec__37599 = p__37597;
var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37599,(0),null);
var ty = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37599,(1),null);
var vec__37602 = p__37598;
var vbx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37602,(0),null);
var vby = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37602,(1),null);
var rects = cljs.core.vals(roots);
var min_x = (tx + cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),rects)));
var max_x = (tx + cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37594_SHARP_){
return (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p1__37594_SHARP_) + new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(p1__37594_SHARP_));
}),rects)));
var min_y = (ty + cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37595_SHARP_){
return new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p1__37595_SHARP_);
}),rects)));
var max_y = (ty + cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37596_SHARP_){
return (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p1__37596_SHARP_) + new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(p1__37596_SHARP_));
}),rects)));
var x_gap = (function (){var x__4276__auto__ = min_x;
var y__4277__auto__ = (vbx - max_x);
return ((x__4276__auto__ < y__4277__auto__) ? x__4276__auto__ : y__4277__auto__);
})();
var y_gap = (function (){var x__4276__auto__ = min_y;
var y__4277__auto__ = (vby - max_y);
return ((x__4276__auto__ < y__4277__auto__) ? x__4276__auto__ : y__4277__auto__);
})();
var x = (max_x + x_gap);
var y = (max_y + y_gap);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
});
/**
 * Anneals free clusters in z & g.
 * z is a zipper over the svg and g the underlying graph.
 * Returns svg.
 */
lib_draw_graph.postprocessor.optimize_clusters = (function lib_draw_graph$postprocessor$optimize_clusters(svg,g,label_fn,opts){
var z = lib_draw_graph.postprocessor.svg__GT_zipper(svg);
var env_out = lib_draw_graph.postprocessor.env__GT_map(lib_draw_graph.postprocessor.do_annealing(z,g,opts,label_fn));
var roots = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__37611){
var vec__37612 = p__37611;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37612,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37612,(1),null);
return new cljs.core.Keyword(null,"root?","root?",-2045639518).cljs$core$IFn$_invoke$arity$1(v);
}),env_out));
var canvas = lib_draw_graph.svg.canvas(z);
var translation = new cljs.core.Keyword(null,"translate","translate",1336199447).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"transform","transform",1381301764).cljs$core$IFn$_invoke$arity$1(canvas));
var viewbox = new cljs.core.Keyword(null,"viewbox","viewbox",-1545612500).cljs$core$IFn$_invoke$arity$1(canvas);
var vec__37608 = lib_draw_graph.postprocessor.viewbox_size(roots,translation,viewbox);
var vbx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37608,(0),null);
var vby = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37608,(1),null);
var z_SINGLEQUOTE_ = lib_draw_graph.svg.__GT_zipper(lib_draw_graph.svg.set_canvas(z,vbx,vby));
return lib_draw_graph.svg.__GT_xml(lib_draw_graph.postprocessor.edit_cluster_labels(lib_draw_graph.svg.__GT_zipper(lib_draw_graph.postprocessor.edit_cluster_rects(z_SINGLEQUOTE_,env_out)),g,opts,env_out));
});

//# sourceMappingURL=lib_draw_graph.postprocessor.js.map
