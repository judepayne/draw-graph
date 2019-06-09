// Compiled by ClojureScript 1.10.520 {}
goog.provide('lib_draw_graph.graph');
goog.require('cljs.core');
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
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"r","r",-471384190),((rgb & (16711680)) >> (16)),new cljs.core.Keyword(null,"g","g",1738089905),((rgb & (65280)) >> (8)),new cljs.core.Keyword(null,"b","b",1482224470),(rgb & (255))], null);
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
var len__4730__auto___38266 = arguments.length;
var i__4731__auto___38267 = (0);
while(true){
if((i__4731__auto___38267 < len__4730__auto___38266)){
args__4736__auto__.push((arguments[i__4731__auto___38267]));

var G__38268 = (i__4731__auto___38267 + (1));
i__4731__auto___38267 = G__38268;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return lib_draw_graph.graph.str__GT_rgb.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

lib_draw_graph.graph.str__GT_rgb.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__38263){
var map__38264 = p__38263;
var map__38264__$1 = (((((!((map__38264 == null))))?(((((map__38264.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38264.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38264):map__38264);
var blend_with = cljs.core.get.call(null,map__38264__$1,new cljs.core.Keyword(null,"blend-with","blend-with",343035248),(12320699));
var h = (cljs.core.hash.call(null,s) >> (8));
var rgb = lib_draw_graph.graph.color_channels.call(null,h);
var rgb_blend = lib_draw_graph.graph.color_channels.call(null,blend_with);
var red = ((new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(rgb) + new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(rgb_blend)) >> (1));
var green = ((new cljs.core.Keyword(null,"g","g",1738089905).cljs$core$IFn$_invoke$arity$1(rgb) + new cljs.core.Keyword(null,"g","g",1738089905).cljs$core$IFn$_invoke$arity$1(rgb_blend)) >> (1));
var blue = ((new cljs.core.Keyword(null,"b","b",1482224470).cljs$core$IFn$_invoke$arity$1(rgb) + new cljs.core.Keyword(null,"b","b",1482224470).cljs$core$IFn$_invoke$arity$1(rgb_blend)) >> (1));
return ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib_draw_graph.graph.hex.call(null,red)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib_draw_graph.graph.hex.call(null,green)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib_draw_graph.graph.hex.call(null,blue))].join('');
});

lib_draw_graph.graph.str__GT_rgb.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
lib_draw_graph.graph.str__GT_rgb.cljs$lang$applyTo = (function (seq38261){
var G__38262 = cljs.core.first.call(null,seq38261);
var seq38261__$1 = cljs.core.next.call(null,seq38261);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38262,seq38261__$1);
});

lib_draw_graph.graph.edge_invisible_QMARK_ = (function lib_draw_graph$graph$edge_invisible_QMARK_(g,n1,n2){
var style = new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(loom.attr.attrs.call(null,g,n1,n2));
var and__4120__auto__ = style;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.some.call(null,((function (and__4120__auto__,style){
return (function (p1__38269_SHARP_){
return cljs.core._EQ_.call(null,"invis",p1__38269_SHARP_);
});})(and__4120__auto__,style))
,clojure.string.split.call(null,style,/,/));
} else {
return and__4120__auto__;
}
});
lib_draw_graph.graph.leaf_QMARK_ = (function lib_draw_graph$graph$leaf_QMARK_(g,n){
var succs = loom.graph.successors_STAR_.call(null,g,n);
var visible_succs = cljs.core.filter.call(null,((function (succs){
return (function (p1__38270_SHARP_){
return cljs.core.not.call(null,lib_draw_graph.graph.edge_invisible_QMARK_.call(null,g,n,p1__38270_SHARP_));
});})(succs))
,succs);
return cljs.core.empty_QMARK_.call(null,visible_succs);
});
lib_draw_graph.graph.root_QMARK_ = (function lib_draw_graph$graph$root_QMARK_(g,opts,n){
var and__4120__auto__ = new cljs.core.Keyword(null,"show-roots?","show-roots?",-1350839449).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(opts));
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.empty_QMARK_.call(null,loom.graph.predecessors_STAR_.call(null,g,n));
} else {
return and__4120__auto__;
}
});
/**
 * Takes into account invisible edges
 */
lib_draw_graph.graph.successors = (function lib_draw_graph$graph$successors(g,n){
var succs = loom.graph.successors_STAR_.call(null,g,n);
return cljs.core.filter.call(null,((function (succs){
return (function (p1__38271_SHARP_){
return cljs.core.not.call(null,lib_draw_graph.graph.edge_invisible_QMARK_.call(null,g,n,p1__38271_SHARP_));
});})(succs))
,succs);
});
lib_draw_graph.graph.fff = (function lib_draw_graph$graph$fff(nested){
return cljs.core.first.call(null,cljs.core.ffirst.call(null,nested));
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
var len__4730__auto___38274 = arguments.length;
var i__4731__auto___38275 = (0);
while(true){
if((i__4731__auto___38275 < len__4730__auto___38274)){
args__4736__auto__.push((arguments[i__4731__auto___38275]));

var G__38276 = (i__4731__auto___38275 + (1));
i__4731__auto___38275 = G__38276;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return lib_draw_graph.graph.group_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

lib_draw_graph.graph.group_map.cljs$core$IFn$_invoke$arity$variadic = (function (m,grps){
return cljs.core.reduce.call(null,(function (acc,cur){
return cljs.core.assoc.call(null,acc,cljs.core.first.call(null,cur),cljs.core.select_keys.call(null,m,cljs.core.rest.call(null,cur)));
}),cljs.core.PersistentArrayMap.EMPTY,grps);
});

lib_draw_graph.graph.group_map.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
lib_draw_graph.graph.group_map.cljs$lang$applyTo = (function (seq38272){
var G__38273 = cljs.core.first.call(null,seq38272);
var seq38272__$1 = cljs.core.next.call(null,seq38272);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38273,seq38272__$1);
});

lib_draw_graph.graph.default_options = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"graph","graph",1558099509),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"dpi","dpi",-986162832),(72),new cljs.core.Keyword(null,"layout","layout",-2120940921),"dot",new cljs.core.Keyword(null,"splines","splines",1787583529),"lines",new cljs.core.Keyword(null,"overlap","overlap",-1673335644),"prism",new cljs.core.Keyword(null,"pad","pad",-36734541),0.2,new cljs.core.Keyword(null,"rankdir","rankdir",-2029540135),"LR"], null),new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"style","style",-496642736),"filled",new cljs.core.Keyword(null,"fontsize","fontsize",368767350),(10),new cljs.core.Keyword(null,"fixedsize","fixedsize",1191363170),"true",new cljs.core.Keyword(null,"shape","shape",1190694006),"ellipse",new cljs.core.Keyword(null,"margin","margin",-995903681),"0.1"], null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"show-roots?","show-roots?",-1350839449),false], null)], null);
/**
 * Returns the shape of node n in g given options
 */
lib_draw_graph.graph.shape = (function lib_draw_graph$graph$shape(g,opts,n){
if(cljs.core.truth_(lib_draw_graph.graph.root_QMARK_.call(null,g,opts,n))){
return "tripleoctagon";
} else {
return new cljs.core.Keyword(null,"shape","shape",1190694006).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(opts));

}
});
/**
 * Return the fillcolor for node n in g given an options
 */
lib_draw_graph.graph.fillcolor = (function lib_draw_graph$graph$fillcolor(g,opts,n){
var color_key = (function (){var temp__5718__auto__ = new cljs.core.Keyword(null,"color-on","color-on",-1658319802).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(opts));
if(cljs.core.truth_(temp__5718__auto__)){
var ck = temp__5718__auto__;
return ck;
} else {
var temp__5718__auto____$1 = lib_draw_graph.clustered.cluster_key.call(null,g);
if(cljs.core.truth_(temp__5718__auto____$1)){
var cl = temp__5718__auto____$1;
return cl;
} else {
return lib_draw_graph.graph.fff.call(null,loom.graph.nodes.call(null,g));
}
}
})();
return lib_draw_graph.graph.str__GT_rgb.call(null,cljs.core.keyword.call(null,color_key).call(null,n));
});
/**
 * Gets the first valid label for the node.
 */
lib_draw_graph.graph.first_label = (function lib_draw_graph$graph$first_label(lbls,n){
var lbls__$1 = clojure.string.split.call(null,lbls,/\//);
var lbl = cljs.core.some.call(null,((function (lbls__$1){
return (function (p1__38277_SHARP_){
var v = cljs.core.keyword.call(null,p1__38277_SHARP_).call(null,n);
if(cljs.core._EQ_.call(null,"",v)){
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
 * Gets the first valid label for the node.
 */
lib_draw_graph.graph.composite_label = (function lib_draw_graph$graph$composite_label(lbls,n){
var lbls__$1 = clojure.string.split.call(null,lbls,/&/);
var lbl = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"\n",cljs.core.map.call(null,((function (lbls__$1){
return (function (x){
return cljs.core.get.call(null,n,cljs.core.keyword.call(null,x));
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
if(cljs.core.truth_((function (){var and__4120__auto__ = lib_draw_graph.graph.leaf_QMARK_.call(null,g,n);
if(and__4120__auto__){
return new cljs.core.Keyword(null,"hide-leaves?","hide-leaves?",1203529343).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(opts));
} else {
return and__4120__auto__;
}
})())){
return "";
} else {
var temp__5718__auto__ = new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(opts));
if(cljs.core.truth_(temp__5718__auto__)){
var lbls = temp__5718__auto__;
if(clojure.string.includes_QMARK_.call(null,lbls,"/")){
return lib_draw_graph.graph.first_label.call(null,lbls,n);
} else {
return lib_draw_graph.graph.composite_label.call(null,lbls,n);
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
var temp__5720__auto__ = new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(opts));
if(cljs.core.truth_(temp__5720__auto__)){
var tt = temp__5720__auto__;
var ks = cljs.core.map.call(null,cljs.core.keyword,clojure.string.split.call(null,tt,/&/));
var tt__$1 = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"\n",cljs.core.reduce.call(null,((function (ks,tt,temp__5720__auto__){
return (function (a,c){
return cljs.core.conj.call(null,a,[cljs.core.name.call(null,c),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,n,c))].join(''));
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
var temp__5720__auto__ = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(opts));
if(cljs.core.truth_(temp__5720__auto__)){
var url = temp__5720__auto__;
return cljs.core.get.call(null,n,cljs.core.keyword.call(null,url));
} else {
return null;
}
});
lib_draw_graph.graph.doub_slash_n = (function lib_draw_graph$graph$doub_slash_n(s){
if((s == null)){
return null;
} else {
return clojure.string.replace.call(null,s,/\\\\n/,"\n");
}
});
/**
 * Returns map of attributes for the node from *display-conf*.
 */
lib_draw_graph.graph.node_descriptor = (function lib_draw_graph$graph$node_descriptor(g,opts,n){
return cljs.core.merge.call(null,new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(opts),cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"shape","shape",1190694006),lib_draw_graph.graph.shape.call(null,g,opts,n)),new cljs.core.Keyword(null,"label","label",1718410804),lib_draw_graph.graph.doub_slash_n.call(null,lib_draw_graph.graph.node_label.call(null,g,opts,n))),new cljs.core.Keyword(null,"fillcolor","fillcolor",-151540217),lib_draw_graph.graph.fillcolor.call(null,g,opts,n)),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),lib_draw_graph.graph.node_tooltip.call(null,g,opts,n)),new cljs.core.Keyword(null,"URL","URL",-1378863845),lib_draw_graph.graph.node_url.call(null,g,opts,n),new cljs.core.Keyword(null,"target","target",253001721),"_blank"),(cljs.core.truth_((function (){var and__4120__auto__ = lib_draw_graph.graph.root_QMARK_.call(null,g,opts,n);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.map_QMARK_.call(null,loom.attr.attrs.call(null,g,n));
} else {
return and__4120__auto__;
}
})())?cljs.core.dissoc.call(null,loom.attr.attrs.call(null,g,n),new cljs.core.Keyword(null,"shape","shape",1190694006)):loom.attr.attrs.call(null,g,n)));
});
lib_draw_graph.graph.constrained_QMARK_ = (function lib_draw_graph$graph$constrained_QMARK_(g,n1,n2){
return loom.attr.attr.call(null,g,n1,n2,new cljs.core.Keyword(null,"constraint","constraint",1725147424));
});
lib_draw_graph.graph.maybe_show_constraint = (function lib_draw_graph$graph$maybe_show_constraint(g,opts,n1,n2){
var show = new cljs.core.Keyword(null,"show-constraints?","show-constraints?",1802138993).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(opts));
if(cljs.core.truth_((function (){var and__4120__auto__ = show;
if(cljs.core.truth_(and__4120__auto__)){
return lib_draw_graph.graph.constrained_QMARK_.call(null,g,n1,n2);
} else {
return and__4120__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),"",new cljs.core.Keyword(null,"color","color",1011675173),"deeppink3",new cljs.core.Keyword(null,"penwidth","penwidth",494666799),(4)], null);
} else {
return null;
}
});
/**
 * Returns the label for the node n in g given options.
 */
lib_draw_graph.graph.edge_label = (function lib_draw_graph$graph$edge_label(g,opts,n1,n2){
if(cljs.core.truth_(new cljs.core.Keyword(null,"edge-label","edge-label",1582257813).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"edge","edge",919909153).cljs$core$IFn$_invoke$arity$1(opts)))){
return cljs.core.get.call(null,loom.attr.attr.call(null,g,n1,n2,new cljs.core.Keyword(null,"meta","meta",1499536964)),cljs.core.keyword.call(null,new cljs.core.Keyword(null,"edge-label","edge-label",1582257813).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"edge","edge",919909153).cljs$core$IFn$_invoke$arity$1(opts))));
} else {
return null;
}
});
lib_draw_graph.graph.constraints = (function lib_draw_graph$graph$constraints(g,opts,n1,n2){
if(cljs.core.truth_(new cljs.core.Keyword(null,"constraint","constraint",1725147424).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(opts)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"constraint","constraint",1725147424),true], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"constraint","constraint",1725147424),false], null);
}
});
/**
 * Return map of attributes for the edge from *display-conf*
 */
lib_draw_graph.graph.edge_descriptor = (function lib_draw_graph$graph$edge_descriptor(g,opts,n1,n2){
return cljs.core.merge.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"edge-label","edge-label",1582257813).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"edge","edge",919909153).cljs$core$IFn$_invoke$arity$1(opts)))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xlabel","xlabel",-113430839),lib_draw_graph.graph.doub_slash_n.call(null,lib_draw_graph.graph.edge_label.call(null,g,opts,n1,n2)),new cljs.core.Keyword(null,"forcelabels","forcelabels",-1606198583),true], null):null),lib_draw_graph.graph.constraints.call(null,g,opts,n1,n2),cljs.core.dissoc.call(null,loom.attr.attrs.call(null,g,n1,n2),new cljs.core.Keyword(null,"meta","meta",1499536964)),lib_draw_graph.graph.maybe_show_constraint.call(null,g,opts,n1,n2));
});
/**
 * structures the incoming opts map the same as default-options
 */
lib_draw_graph.graph.structure_opts = (function lib_draw_graph$graph$structure_opts(opts){
return lib_draw_graph.graph.group_map.call(null,opts,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"graph","graph",1558099509),new cljs.core.Keyword(null,"dpi","dpi",-986162832),new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"pad","pad",-36734541),new cljs.core.Keyword(null,"splines","splines",1787583529),new cljs.core.Keyword(null,"sep","sep",1970430530),new cljs.core.Keyword(null,"ranksep","ranksep",-765843218),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.Keyword(null,"overlap","overlap",-1673335644),new cljs.core.Keyword(null,"nodesep","nodesep",-245901571),new cljs.core.Keyword(null,"rankdir","rankdir",-2029540135),new cljs.core.Keyword(null,"concentrate","concentrate",-1050197650),new cljs.core.Keyword(null,"ratio","ratio",-926560044)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"fontsize","fontsize",368767350),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"fixedsize","fixedsize",1191363170),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.Keyword(null,"url","url",276297046)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"hide-leaves?","hide-leaves?",1203529343),new cljs.core.Keyword(null,"show-roots?","show-roots?",-1350839449),new cljs.core.Keyword(null,"color-on","color-on",-1658319802),new cljs.core.Keyword(null,"constraint","constraint",1725147424),new cljs.core.Keyword(null,"show-constraints?","show-constraints?",1802138993)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edge","edge",919909153),new cljs.core.Keyword(null,"edge-label","edge-label",1582257813)], null));
});
lib_draw_graph.graph.cluster_args = (function lib_draw_graph$graph$cluster_args(g){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"node->clusters","node->clusters",-265377067),(function (n){
return cljs.core.partial.call(null,lib_draw_graph.clustered.node__GT_clusters,g,lib_draw_graph.clustered.cluster_key.call(null,g)).call(null,n);
}),new cljs.core.Keyword(null,"cluster->descriptor","cluster->descriptor",-1433685113),(function (n){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),n], null),lib_draw_graph.clustered.merged_cluster_attr.call(null,g,n,new cljs.core.Keyword(null,"style","style",-496642736)));
}),new cljs.core.Keyword(null,"cluster->ranks","cluster->ranks",296694829),(function (n){
return lib_draw_graph.clustered.first_cluster_attr.call(null,g,n,new cljs.core.Keyword(null,"fix-ranks","fix-ranks",452150575));
}),new cljs.core.Keyword(null,"cluster->parent","cluster->parent",1941927856),cljs.core.partial.call(null,lib_draw_graph.clustered.cluster_parent,g)], null);
});
/**
 * Returns the rhizome config (options) for a graph.
 */
lib_draw_graph.graph.get_rhizome_args = (function lib_draw_graph$graph$get_rhizome_args(g,opts){
var opts_STAR_ = lib_draw_graph.util.deep_merge.call(null,lib_draw_graph.graph.default_options,lib_draw_graph.graph.structure_opts.call(null,opts));
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"graph","graph",1558099509).cljs$core$IFn$_invoke$arity$1(opts_STAR_),new cljs.core.Keyword(null,"node->descriptor","node->descriptor",-1696154479),cljs.core.partial.call(null,lib_draw_graph.graph.node_descriptor,g,opts_STAR_),new cljs.core.Keyword(null,"edge->descriptor","edge->descriptor",-2146285457),cljs.core.partial.call(null,lib_draw_graph.graph.edge_descriptor,g,opts_STAR_)], null),(cljs.core.truth_(lib_draw_graph.clustered.cluster_key.call(null,g))?lib_draw_graph.graph.cluster_args.call(null,g):null));
});
/**
 * Returns an dot representation of a graph.
 */
lib_draw_graph.graph.graph__GT_dot = (function lib_draw_graph$graph$graph__GT_dot(ks,succs_fn,rhi_args){
return cljs.core.apply.call(null,rhizome.dot.graph__GT_dot,ks,succs_fn,cljs.core.apply.call(null,cljs.core.concat,rhi_args));
});
/**
 * converts loom graph to dot using rhizome
 */
lib_draw_graph.graph.loomgraph__GT_dot = (function lib_draw_graph$graph$loomgraph__GT_dot(g,rhi_args){
var ks = loom.graph.nodes.call(null,g);
var succs_fn = ((function (ks){
return (function (p1__38278_SHARP_){
return loom.graph.successors_STAR_.call(null,g,p1__38278_SHARP_);
});})(ks))
;
return lib_draw_graph.graph.graph__GT_dot.call(null,ks,succs_fn,rhi_args);
});
/**
 * Converts (Loom) graph to either a graph or an svg
 */
lib_draw_graph.graph.process_graph = (function lib_draw_graph$graph$process_graph(g,opts){
return lib_draw_graph.graph.loomgraph__GT_dot.call(null,g,lib_draw_graph.graph.get_rhizome_args.call(null,g,opts));
});

//# sourceMappingURL=graph.js.map
