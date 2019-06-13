// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('lib_draw_graph.graph');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('rhizome.dot');
goog.require('loom.graph');
goog.require('loom.attr');
goog.require('clojure.string');
goog.require('lib_draw_graph.clustered');
goog.require('lib_draw_graph.util');
goog.require('goog.string');
goog.require('goog.string.format');
/**
 * Returns a map of rgb values from a 24-bit number.
 */
lib_draw_graph.graph.color_channels = (function lib_draw_graph$graph$color_channels(rgb){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$r,((rgb & (16711680)) >> (16)),cljs.core.cst$kw$g,((rgb & (65280)) >> (8)),cljs.core.cst$kw$b,(rgb & (255))], null);
});
/**
 * Convert an unsigned integer to a hex string representation.
 */
lib_draw_graph.graph.hex = (function lib_draw_graph$graph$hex(n){
return n.toString((16));
});
/**
 * Converts a string to an rgb color value, blending with blend-with.
 */
lib_draw_graph.graph.str__GT_rgb = (function lib_draw_graph$graph$str__GT_rgb(var_args){
var args__4736__auto__ = [];
var len__4730__auto___42055 = arguments.length;
var i__4731__auto___42056 = (0);
while(true){
if((i__4731__auto___42056 < len__4730__auto___42055)){
args__4736__auto__.push((arguments[i__4731__auto___42056]));

var G__42057 = (i__4731__auto___42056 + (1));
i__4731__auto___42056 = G__42057;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return lib_draw_graph.graph.str__GT_rgb.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

lib_draw_graph.graph.str__GT_rgb.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__42052){
var map__42053 = p__42052;
var map__42053__$1 = (((((!((map__42053 == null))))?(((((map__42053.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42053.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42053):map__42053);
var blend_with = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42053__$1,cljs.core.cst$kw$blend_DASH_with,(12320699));
var h = (cljs.core.hash(s) >> (8));
var rgb = lib_draw_graph.graph.color_channels(h);
var rgb_blend = lib_draw_graph.graph.color_channels(blend_with);
var red = ((cljs.core.cst$kw$r.cljs$core$IFn$_invoke$arity$1(rgb) + cljs.core.cst$kw$r.cljs$core$IFn$_invoke$arity$1(rgb_blend)) >> (1));
var green = ((cljs.core.cst$kw$g.cljs$core$IFn$_invoke$arity$1(rgb) + cljs.core.cst$kw$g.cljs$core$IFn$_invoke$arity$1(rgb_blend)) >> (1));
var blue = ((cljs.core.cst$kw$b.cljs$core$IFn$_invoke$arity$1(rgb) + cljs.core.cst$kw$b.cljs$core$IFn$_invoke$arity$1(rgb_blend)) >> (1));
return ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib_draw_graph.graph.hex(red)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib_draw_graph.graph.hex(green)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib_draw_graph.graph.hex(blue))].join('');
});

lib_draw_graph.graph.str__GT_rgb.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
lib_draw_graph.graph.str__GT_rgb.cljs$lang$applyTo = (function (seq42050){
var G__42051 = cljs.core.first(seq42050);
var seq42050__$1 = cljs.core.next(seq42050);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42051,seq42050__$1);
});

lib_draw_graph.graph.edge_invisible_QMARK_ = (function lib_draw_graph$graph$edge_invisible_QMARK_(g,n1,n2){
var style = cljs.core.cst$kw$style.cljs$core$IFn$_invoke$arity$1(loom.attr.attrs.cljs$core$IFn$_invoke$arity$3(g,n1,n2));
var and__4120__auto__ = style;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.some(((function (and__4120__auto__,style){
return (function (p1__42058_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("invis",p1__42058_SHARP_);
});})(and__4120__auto__,style))
,clojure.string.split.cljs$core$IFn$_invoke$arity$2(style,/,/));
} else {
return and__4120__auto__;
}
});
lib_draw_graph.graph.leaf_QMARK_ = (function lib_draw_graph$graph$leaf_QMARK_(g,n){
var succs = loom.graph.successors_STAR_(g,n);
var visible_succs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (succs){
return (function (p1__42059_SHARP_){
return cljs.core.not(lib_draw_graph.graph.edge_invisible_QMARK_(g,n,p1__42059_SHARP_));
});})(succs))
,succs);
return cljs.core.empty_QMARK_(visible_succs);
});
lib_draw_graph.graph.root_QMARK_ = (function lib_draw_graph$graph$root_QMARK_(g,opts,n){
var and__4120__auto__ = cljs.core.cst$kw$show_DASH_roots_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$env.cljs$core$IFn$_invoke$arity$1(opts));
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.empty_QMARK_(loom.graph.predecessors_STAR_(g,n));
} else {
return and__4120__auto__;
}
});
/**
 * Takes into account invisible edges
 */
lib_draw_graph.graph.successors = (function lib_draw_graph$graph$successors(g,n){
var succs = loom.graph.successors_STAR_(g,n);
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (succs){
return (function (p1__42060_SHARP_){
return cljs.core.not(lib_draw_graph.graph.edge_invisible_QMARK_(g,n,p1__42060_SHARP_));
});})(succs))
,succs);
});
lib_draw_graph.graph.fff = (function lib_draw_graph$graph$fff(nested){
return cljs.core.first(cljs.core.ffirst(nested));
});
/**
 * Groups m by the first in each of grps, selects the rest keys into
 *   the new submap and continues through the rest of the groups.
 *   e.g. (group-map {:graph-a 1 :graph-b 2 :node-c 4 :edge-a 5}
 *                 [:graph :graph-a :graph-b] [:node :node-c])
 *   => {:graph {:graph-a 1, :graph-b 2}, :node {:edge-a 5}}
 */
lib_draw_graph.graph.group_map = (function lib_draw_graph$graph$group_map(var_args){
var args__4736__auto__ = [];
var len__4730__auto___42063 = arguments.length;
var i__4731__auto___42064 = (0);
while(true){
if((i__4731__auto___42064 < len__4730__auto___42063)){
args__4736__auto__.push((arguments[i__4731__auto___42064]));

var G__42065 = (i__4731__auto___42064 + (1));
i__4731__auto___42064 = G__42065;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return lib_draw_graph.graph.group_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

lib_draw_graph.graph.group_map.cljs$core$IFn$_invoke$arity$variadic = (function (m,grps){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,cur){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,cljs.core.first(cur),cljs.core.select_keys(m,cljs.core.rest(cur)));
}),cljs.core.PersistentArrayMap.EMPTY,grps);
});

lib_draw_graph.graph.group_map.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
lib_draw_graph.graph.group_map.cljs$lang$applyTo = (function (seq42061){
var G__42062 = cljs.core.first(seq42061);
var seq42061__$1 = cljs.core.next(seq42061);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42062,seq42061__$1);
});

lib_draw_graph.graph.default_options = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$graph,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$dpi,(72),cljs.core.cst$kw$layout,"dot",cljs.core.cst$kw$splines,"lines",cljs.core.cst$kw$overlap,"prism",cljs.core.cst$kw$pad,0.2,cljs.core.cst$kw$rankdir,"LR"], null),cljs.core.cst$kw$node,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$style,"filled",cljs.core.cst$kw$fontsize,(10),cljs.core.cst$kw$fixedsize,"true",cljs.core.cst$kw$shape,"ellipse",cljs.core.cst$kw$margin,"0.1"], null),cljs.core.cst$kw$env,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$show_DASH_roots_QMARK_,false], null)], null);
/**
 * Returns the shape of node n in g given options
 */
lib_draw_graph.graph.shape = (function lib_draw_graph$graph$shape(g,opts,n){
if(cljs.core.truth_(lib_draw_graph.graph.root_QMARK_(g,opts,n))){
return "tripleoctagon";
} else {
return cljs.core.cst$kw$shape.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$node.cljs$core$IFn$_invoke$arity$1(opts));

}
});
/**
 * Return the fillcolor for node n in g given an options
 */
lib_draw_graph.graph.fillcolor = (function lib_draw_graph$graph$fillcolor(g,opts,n){
var color_key = (function (){var temp__5718__auto__ = cljs.core.cst$kw$color_DASH_on.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$env.cljs$core$IFn$_invoke$arity$1(opts));
if(cljs.core.truth_(temp__5718__auto__)){
var ck = temp__5718__auto__;
return ck;
} else {
var temp__5718__auto____$1 = lib_draw_graph.clustered.cluster_key(g);
if(cljs.core.truth_(temp__5718__auto____$1)){
var cl = temp__5718__auto____$1;
return cl;
} else {
return lib_draw_graph.graph.fff(loom.graph.nodes(g));
}
}
})();
return lib_draw_graph.graph.str__GT_rgb((function (){var fexpr__42066 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(color_key);
return (fexpr__42066.cljs$core$IFn$_invoke$arity$1 ? fexpr__42066.cljs$core$IFn$_invoke$arity$1(n) : fexpr__42066.call(null,n));
})());
});
/**
 * Gets the first valid label from the metadata, which can be a node or edge metadata.
 */
lib_draw_graph.graph.first_label = (function lib_draw_graph$graph$first_label(lbls,metadata){
var lbls__$1 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(lbls,/\//);
var lbl = cljs.core.some(((function (lbls__$1){
return (function (p1__42067_SHARP_){
var v = (function (){var fexpr__42068 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__42067_SHARP_);
return (fexpr__42068.cljs$core$IFn$_invoke$arity$1 ? fexpr__42068.cljs$core$IFn$_invoke$arity$1(metadata) : fexpr__42068.call(null,metadata));
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",v)){
return false;
} else {
return v;
}
});})(lbls__$1))
,lbls__$1);
if((lbl == null)){
return "";
} else {
return lbl;
}
});
/**
 * Gets the composite label from the metadata, which can be a node or edge metadata.
 */
lib_draw_graph.graph.composite_label = (function lib_draw_graph$graph$composite_label(lbls,metadata){
var lbls__$1 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(lbls,/&/);
var lbl = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (lbls__$1){
return (function (x){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(metadata,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(x));
});})(lbls__$1))
,lbls__$1)));
if((lbl == null)){
return "";
} else {
return lbl;
}
});
/**
 * Returns the label for the node n in g given options.
 */
lib_draw_graph.graph.node_label = (function lib_draw_graph$graph$node_label(g,opts,n){
if(cljs.core.truth_((function (){var and__4120__auto__ = lib_draw_graph.graph.leaf_QMARK_(g,n);
if(and__4120__auto__){
return cljs.core.cst$kw$hide_DASH_leaves_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$env.cljs$core$IFn$_invoke$arity$1(opts));
} else {
return and__4120__auto__;
}
})())){
return "";
} else {
var temp__5718__auto__ = cljs.core.cst$kw$label.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$node.cljs$core$IFn$_invoke$arity$1(opts));
if(cljs.core.truth_(temp__5718__auto__)){
var lbls = temp__5718__auto__;
if(clojure.string.includes_QMARK_(lbls,"/")){
return lib_draw_graph.graph.first_label(lbls,n);
} else {
return lib_draw_graph.graph.composite_label(lbls,n);
}
} else {
return "";
}

}
});
/**
 * Returns the tooltip for the node n in g given options.
 */
lib_draw_graph.graph.node_tooltip = (function lib_draw_graph$graph$node_tooltip(g,opts,n){
var temp__5720__auto__ = cljs.core.cst$kw$tooltip.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$node.cljs$core$IFn$_invoke$arity$1(opts));
if(cljs.core.truth_(temp__5720__auto__)){
var tt = temp__5720__auto__;
var ks = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,clojure.string.split.cljs$core$IFn$_invoke$arity$2(tt,/&/));
var tt__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (ks,tt,temp__5720__auto__){
return (function (a,c){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(a,[cljs.core.name(c),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(n,c))].join(''));
});})(ks,tt,temp__5720__auto__))
,cljs.core.PersistentVector.EMPTY,ks)));
return tt__$1;
} else {
return null;
}
});
/**
 * Returns the url for the node n in g given options.
 */
lib_draw_graph.graph.node_url = (function lib_draw_graph$graph$node_url(g,opts,n){
var temp__5720__auto__ = cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$node.cljs$core$IFn$_invoke$arity$1(opts));
if(cljs.core.truth_(temp__5720__auto__)){
var url = temp__5720__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(n,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(url));
} else {
return null;
}
});
lib_draw_graph.graph.doub_slash_n = (function lib_draw_graph$graph$doub_slash_n(s){
if((s == null)){
return null;
} else {
return clojure.string.replace(s,/\\\\n/,"\n");
}
});
/**
 * Returns map of attributes for the node from *display-conf*.
 */
lib_draw_graph.graph.node_descriptor = (function lib_draw_graph$graph$node_descriptor(g,opts,n){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$node.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$shape,lib_draw_graph.graph.shape(g,opts,n)),cljs.core.cst$kw$label,lib_draw_graph.graph.doub_slash_n(lib_draw_graph.graph.node_label(g,opts,n))),cljs.core.cst$kw$fillcolor,lib_draw_graph.graph.fillcolor(g,opts,n)),cljs.core.cst$kw$tooltip,lib_draw_graph.graph.node_tooltip(g,opts,n)),cljs.core.cst$kw$URL,lib_draw_graph.graph.node_url(g,opts,n),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$target,"_blank"], 0)),(cljs.core.truth_((function (){var and__4120__auto__ = lib_draw_graph.graph.root_QMARK_(g,opts,n);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.map_QMARK_(loom.attr.attrs.cljs$core$IFn$_invoke$arity$2(g,n));
} else {
return and__4120__auto__;
}
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(loom.attr.attrs.cljs$core$IFn$_invoke$arity$2(g,n),cljs.core.cst$kw$shape):loom.attr.attrs.cljs$core$IFn$_invoke$arity$2(g,n))], 0));
});
lib_draw_graph.graph.constrained_QMARK_ = (function lib_draw_graph$graph$constrained_QMARK_(g,n1,n2){
return loom.attr.attr.cljs$core$IFn$_invoke$arity$4(g,n1,n2,cljs.core.cst$kw$constraint);
});
lib_draw_graph.graph.maybe_show_constraint = (function lib_draw_graph$graph$maybe_show_constraint(g,opts,n1,n2){
var show = cljs.core.cst$kw$show_DASH_constraints_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$env.cljs$core$IFn$_invoke$arity$1(opts));
if(cljs.core.truth_((function (){var and__4120__auto__ = show;
if(cljs.core.truth_(and__4120__auto__)){
return lib_draw_graph.graph.constrained_QMARK_(g,n1,n2);
} else {
return and__4120__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$style,"",cljs.core.cst$kw$color,"deeppink3",cljs.core.cst$kw$penwidth,(4)], null);
} else {
return null;
}
});
/**
 * Returns the label for the edge n1 n2 in g given options.
 */
lib_draw_graph.graph.edge_label = (function lib_draw_graph$graph$edge_label(g,opts,n1,n2){
var temp__5720__auto__ = cljs.core.cst$kw$edge_DASH_label.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$edge.cljs$core$IFn$_invoke$arity$1(opts));
if(cljs.core.truth_(temp__5720__auto__)){
var lbls = temp__5720__auto__;
var metadata = loom.attr.attr.cljs$core$IFn$_invoke$arity$4(g,n1,n2,cljs.core.cst$kw$meta);
if(clojure.string.includes_QMARK_(lbls,"/")){
return lib_draw_graph.graph.first_label(lbls,metadata);
} else {
return lib_draw_graph.graph.composite_label(lbls,metadata);
}
} else {
return null;
}
});
lib_draw_graph.graph.constraints = (function lib_draw_graph$graph$constraints(g,opts,n1,n2){
if(cljs.core.truth_(cljs.core.cst$kw$constraint.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$env.cljs$core$IFn$_invoke$arity$1(opts)))){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$constraint,true], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$constraint,false], null);
}
});
/**
 * Return map of attributes for the edge from *display-conf*
 */
lib_draw_graph.graph.edge_descriptor = (function lib_draw_graph$graph$edge_descriptor(g,opts,n1,n2){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.cst$kw$edge_DASH_label.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$edge.cljs$core$IFn$_invoke$arity$1(opts)))?new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$xlabel,lib_draw_graph.graph.doub_slash_n(lib_draw_graph.graph.edge_label(g,opts,n1,n2)),cljs.core.cst$kw$forcelabels,true], null):null),lib_draw_graph.graph.constraints(g,opts,n1,n2),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(loom.attr.attrs.cljs$core$IFn$_invoke$arity$3(g,n1,n2),cljs.core.cst$kw$meta),lib_draw_graph.graph.maybe_show_constraint(g,opts,n1,n2)], 0));
});
/**
 * structures the incoming opts map the same as default-options
 */
lib_draw_graph.graph.structure_opts = (function lib_draw_graph$graph$structure_opts(opts){
return lib_draw_graph.graph.group_map.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$graph,cljs.core.cst$kw$dpi,cljs.core.cst$kw$layout,cljs.core.cst$kw$pad,cljs.core.cst$kw$splines,cljs.core.cst$kw$sep,cljs.core.cst$kw$ranksep,cljs.core.cst$kw$scale,cljs.core.cst$kw$overlap,cljs.core.cst$kw$nodesep,cljs.core.cst$kw$rankdir,cljs.core.cst$kw$concentrate,cljs.core.cst$kw$ratio], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$node,cljs.core.cst$kw$shape,cljs.core.cst$kw$label,cljs.core.cst$kw$fontsize,cljs.core.cst$kw$style,cljs.core.cst$kw$fixedsize,cljs.core.cst$kw$tooltip,cljs.core.cst$kw$url], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$env,cljs.core.cst$kw$hide_DASH_leaves_QMARK_,cljs.core.cst$kw$show_DASH_roots_QMARK_,cljs.core.cst$kw$color_DASH_on,cljs.core.cst$kw$constraint,cljs.core.cst$kw$show_DASH_constraints_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$edge,cljs.core.cst$kw$edge_DASH_label], null)], 0));
});
lib_draw_graph.graph.cluster_args = (function lib_draw_graph$graph$cluster_args(g){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$node_DASH__GT_clusters,(function (n){
var fexpr__42069 = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(lib_draw_graph.clustered.node__GT_clusters,g,lib_draw_graph.clustered.cluster_key(g));
return (fexpr__42069.cljs$core$IFn$_invoke$arity$1 ? fexpr__42069.cljs$core$IFn$_invoke$arity$1(n) : fexpr__42069.call(null,n));
}),cljs.core.cst$kw$cluster_DASH__GT_descriptor,(function (n){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$label,n], null),lib_draw_graph.clustered.merged_cluster_attr(g,n,cljs.core.cst$kw$style)], 0));
}),cljs.core.cst$kw$cluster_DASH__GT_ranks,(function (n){
return lib_draw_graph.clustered.first_cluster_attr(g,n,cljs.core.cst$kw$fix_DASH_ranks);
}),cljs.core.cst$kw$cluster_DASH__GT_parent,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(lib_draw_graph.clustered.cluster_parent,g)], null);
});
/**
 * Returns the rhizome config (options) for a graph.
 */
lib_draw_graph.graph.get_rhizome_args = (function lib_draw_graph$graph$get_rhizome_args(g,opts){
var opts_STAR_ = lib_draw_graph.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lib_draw_graph.graph.default_options,lib_draw_graph.graph.structure_opts(opts)], 0));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$options,cljs.core.cst$kw$graph.cljs$core$IFn$_invoke$arity$1(opts_STAR_),cljs.core.cst$kw$node_DASH__GT_descriptor,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(lib_draw_graph.graph.node_descriptor,g,opts_STAR_),cljs.core.cst$kw$edge_DASH__GT_descriptor,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(lib_draw_graph.graph.edge_descriptor,g,opts_STAR_)], null),(cljs.core.truth_(lib_draw_graph.clustered.cluster_key(g))?lib_draw_graph.graph.cluster_args(g):null)], 0));
});
/**
 * Returns an dot representation of a graph.
 */
lib_draw_graph.graph.graph__GT_dot = (function lib_draw_graph$graph$graph__GT_dot(ks,succs_fn,rhi_args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(rhizome.dot.graph__GT_dot,ks,succs_fn,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,rhi_args));
});
/**
 * converts loom graph to dot using rhizome
 */
lib_draw_graph.graph.loomgraph__GT_dot = (function lib_draw_graph$graph$loomgraph__GT_dot(g,rhi_args){
var ks = loom.graph.nodes(g);
var succs_fn = ((function (ks){
return (function (p1__42070_SHARP_){
return loom.graph.successors_STAR_(g,p1__42070_SHARP_);
});})(ks))
;
return lib_draw_graph.graph.graph__GT_dot(ks,succs_fn,rhi_args);
});
/**
 * Converts (Loom) graph to either a graph or an svg
 */
lib_draw_graph.graph.process_graph = (function lib_draw_graph$graph$process_graph(g,opts){
return lib_draw_graph.graph.loomgraph__GT_dot(g,lib_draw_graph.graph.get_rhizome_args(g,opts));
});
