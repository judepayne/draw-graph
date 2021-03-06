goog.provide('lib_draw_graph.graph');
goog.require('cljs.core');
goog.require('rhizome.dot');
goog.require('loom.graph');
goog.require('extra_loom.multigraph');
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
var args__4795__auto__ = [];
var len__4789__auto___37203 = arguments.length;
var i__4790__auto___37205 = (0);
while(true){
if((i__4790__auto___37205 < len__4789__auto___37203)){
args__4795__auto__.push((arguments[i__4790__auto___37205]));

var G__37207 = (i__4790__auto___37205 + (1));
i__4790__auto___37205 = G__37207;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return lib_draw_graph.graph.str__GT_rgb.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(lib_draw_graph.graph.str__GT_rgb.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__37083){
var map__37084 = p__37083;
var map__37084__$1 = (((((!((map__37084 == null))))?(((((map__37084.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37084.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37084):map__37084);
var blend_with = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37084__$1,new cljs.core.Keyword(null,"blend-with","blend-with",343035248),(12320699));
var h = (cljs.core.hash(s) >> (8));
var rgb = lib_draw_graph.graph.color_channels(h);
var rgb_blend = lib_draw_graph.graph.color_channels(blend_with);
var red = ((new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(rgb) + new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(rgb_blend)) >> (1));
var green = ((new cljs.core.Keyword(null,"g","g",1738089905).cljs$core$IFn$_invoke$arity$1(rgb) + new cljs.core.Keyword(null,"g","g",1738089905).cljs$core$IFn$_invoke$arity$1(rgb_blend)) >> (1));
var blue = ((new cljs.core.Keyword(null,"b","b",1482224470).cljs$core$IFn$_invoke$arity$1(rgb) + new cljs.core.Keyword(null,"b","b",1482224470).cljs$core$IFn$_invoke$arity$1(rgb_blend)) >> (1));
return ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib_draw_graph.graph.hex(red)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib_draw_graph.graph.hex(green)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib_draw_graph.graph.hex(blue))].join('');
}));

(lib_draw_graph.graph.str__GT_rgb.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(lib_draw_graph.graph.str__GT_rgb.cljs$lang$applyTo = (function (seq37080){
var G__37081 = cljs.core.first(seq37080);
var seq37080__$1 = cljs.core.next(seq37080);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37081,seq37080__$1);
}));

lib_draw_graph.graph.edge_invisible_QMARK_ = (function lib_draw_graph$graph$edge_invisible_QMARK_(g,n1,n2){
var style = new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(loom.attr.attrs(g,n1,n2));
var and__4174__auto__ = style;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.some((function (p1__37096_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("invis",p1__37096_SHARP_);
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(style,/,/));
} else {
return and__4174__auto__;
}
});
lib_draw_graph.graph.leaf_QMARK_ = (function lib_draw_graph$graph$leaf_QMARK_(g,n){
var succs = loom.graph.successors_STAR_(g,n);
var visible_succs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__37103_SHARP_){
return cljs.core.not(lib_draw_graph.graph.edge_invisible_QMARK_(g,n,p1__37103_SHARP_));
}),succs);
return cljs.core.empty_QMARK_(visible_succs);
});
lib_draw_graph.graph.root_QMARK_ = (function lib_draw_graph$graph$root_QMARK_(g,opts,n){
var and__4174__auto__ = new cljs.core.Keyword(null,"show-roots?","show-roots?",-1350839449).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(opts));
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.empty_QMARK_(loom.graph.predecessors_STAR_(g,n));
} else {
return and__4174__auto__;
}
});
/**
 * Takes into account invisible edges
 */
lib_draw_graph.graph.successors = (function lib_draw_graph$graph$successors(g,n){
var succs = loom.graph.successors_STAR_(g,n);
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__37122_SHARP_){
return cljs.core.not(lib_draw_graph.graph.edge_invisible_QMARK_(g,n,p1__37122_SHARP_));
}),succs);
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
var args__4795__auto__ = [];
var len__4789__auto___37239 = arguments.length;
var i__4790__auto___37240 = (0);
while(true){
if((i__4790__auto___37240 < len__4789__auto___37239)){
args__4795__auto__.push((arguments[i__4790__auto___37240]));

var G__37241 = (i__4790__auto___37240 + (1));
i__4790__auto___37240 = G__37241;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return lib_draw_graph.graph.group_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(lib_draw_graph.graph.group_map.cljs$core$IFn$_invoke$arity$variadic = (function (m,grps){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,cur){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,cljs.core.first(cur),cljs.core.select_keys(m,cljs.core.rest(cur)));
}),cljs.core.PersistentArrayMap.EMPTY,grps);
}));

(lib_draw_graph.graph.group_map.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(lib_draw_graph.graph.group_map.cljs$lang$applyTo = (function (seq37130){
var G__37131 = cljs.core.first(seq37130);
var seq37130__$1 = cljs.core.next(seq37130);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37131,seq37130__$1);
}));

lib_draw_graph.graph.default_options = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"graph","graph",1558099509),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"dpi","dpi",-986162832),(72),new cljs.core.Keyword(null,"layout","layout",-2120940921),"dot",new cljs.core.Keyword(null,"splines","splines",1787583529),"lines",new cljs.core.Keyword(null,"overlap","overlap",-1673335644),"prism",new cljs.core.Keyword(null,"pad","pad",-36734541),0.2,new cljs.core.Keyword(null,"rankdir","rankdir",-2029540135),"LR"], null),new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"style","style",-496642736),"filled",new cljs.core.Keyword(null,"fontsize","fontsize",368767350),(10),new cljs.core.Keyword(null,"fixedsize","fixedsize",1191363170),"true",new cljs.core.Keyword(null,"shape","shape",1190694006),"ellipse",new cljs.core.Keyword(null,"margin","margin",-995903681),"0.1"], null),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"show-roots?","show-roots?",-1350839449),false], null)], null);
/**
 * Returns the shape of node n in g given options
 */
lib_draw_graph.graph.shape = (function lib_draw_graph$graph$shape(g,opts,n){
if(cljs.core.truth_(lib_draw_graph.graph.root_QMARK_(g,opts,n))){
return "tripleoctagon";
} else {
return new cljs.core.Keyword(null,"shape","shape",1190694006).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(opts));

}
});
/**
 * Return the fillcolor for node n in g given an options
 */
lib_draw_graph.graph.fillcolor = (function lib_draw_graph$graph$fillcolor(g,opts,n){
var color_key = (function (){var temp__5733__auto__ = new cljs.core.Keyword(null,"color-on","color-on",-1658319802).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(opts));
if(cljs.core.truth_(temp__5733__auto__)){
var ck = temp__5733__auto__;
return ck;
} else {
var temp__5733__auto____$1 = lib_draw_graph.clustered.cluster_key(g);
if(cljs.core.truth_(temp__5733__auto____$1)){
var cl = temp__5733__auto____$1;
return cl;
} else {
return lib_draw_graph.graph.fff(loom.graph.nodes(g));
}
}
})();
return lib_draw_graph.graph.str__GT_rgb((function (){var fexpr__37146 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(color_key);
return (fexpr__37146.cljs$core$IFn$_invoke$arity$1 ? fexpr__37146.cljs$core$IFn$_invoke$arity$1(n) : fexpr__37146.call(null,n));
})());
});
/**
 * True is label is or starts with an html like label.
 */
lib_draw_graph.graph.html_like_label_QMARK_ = (function lib_draw_graph$graph$html_like_label_QMARK_(s){
if(cljs.core.truth_((function (){var and__4174__auto__ = s;
if(cljs.core.truth_(and__4174__auto__)){
return (cljs.core.count(s) > (1));
} else {
return and__4174__auto__;
}
})())){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("<<",cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(2)));
} else {
return null;
}
});
/**
 * Gets the first valid label from the metadata, which can be a node or edge metadata.
 */
lib_draw_graph.graph.first_label = (function lib_draw_graph$graph$first_label(lbls,metadata){
var lbls__$1 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(lbls,/\//);
var lbl = cljs.core.some((function (p1__37148_SHARP_){
var v = (function (){var fexpr__37153 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__37148_SHARP_);
return (fexpr__37153.cljs$core$IFn$_invoke$arity$1 ? fexpr__37153.cljs$core$IFn$_invoke$arity$1(metadata) : fexpr__37153.call(null,metadata));
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",v)){
return false;
} else {
return v;
}
}),lbls__$1);
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
var flbl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(metadata,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.first(lbls__$1)));
var lbl = (cljs.core.truth_(lib_draw_graph.graph.html_like_label_QMARK_(flbl))?flbl:cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.str,flbl,"\n",cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
var l = cljs.core.get.cljs$core$IFn$_invoke$arity$2(metadata,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(x));
if(cljs.core.truth_(lib_draw_graph.graph.html_like_label_QMARK_(l))){
return "";
} else {
return l;
}
}),cljs.core.rest(lbls__$1)))));
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
if(cljs.core.truth_(((lib_draw_graph.graph.leaf_QMARK_(g,n))?new cljs.core.Keyword(null,"hide-leaves?","hide-leaves?",1203529343).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(opts)):false))){
return "";
} else {
var temp__5733__auto__ = new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(opts));
if(cljs.core.truth_(temp__5733__auto__)){
var lbls = temp__5733__auto__;
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
var temp__5735__auto__ = new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(opts));
if(cljs.core.truth_(temp__5735__auto__)){
var tt = temp__5735__auto__;
var ks = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,clojure.string.split.cljs$core$IFn$_invoke$arity$2(tt,/&/));
var tt__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (a,c){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(a,[cljs.core.name(c),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(n,c))].join(''));
}),cljs.core.PersistentVector.EMPTY,ks)));
return tt__$1;
} else {
return null;
}
});
/**
 * Returns the url for the node n in g given options.
 */
lib_draw_graph.graph.node_url = (function lib_draw_graph$graph$node_url(g,opts,n){
var temp__5735__auto__ = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(opts));
if(cljs.core.truth_(temp__5735__auto__)){
var url = temp__5735__auto__;
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
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(opts),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"shape","shape",1190694006),lib_draw_graph.graph.shape(g,opts,n)),new cljs.core.Keyword(null,"label","label",1718410804),lib_draw_graph.graph.doub_slash_n(lib_draw_graph.graph.node_label(g,opts,n))),new cljs.core.Keyword(null,"fillcolor","fillcolor",-151540217),lib_draw_graph.graph.fillcolor(g,opts,n)),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),lib_draw_graph.graph.node_tooltip(g,opts,n)),new cljs.core.Keyword(null,"URL","URL",-1378863845),lib_draw_graph.graph.node_url(g,opts,n),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"target","target",253001721),"_blank"], 0)),(cljs.core.truth_((function (){var and__4174__auto__ = lib_draw_graph.graph.root_QMARK_(g,opts,n);
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.map_QMARK_(loom.attr.attrs(g,n));
} else {
return and__4174__auto__;
}
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(loom.attr.attrs(g,n),new cljs.core.Keyword(null,"shape","shape",1190694006)):loom.attr.attrs(g,n))], 0));
});
lib_draw_graph.graph.maybe_show_constraint = (function lib_draw_graph$graph$maybe_show_constraint(opts,edge_attr_map){
var show = new cljs.core.Keyword(null,"show-constraints?","show-constraints?",1802138993).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(opts));
if(cljs.core.truth_((function (){var and__4174__auto__ = show;
if(cljs.core.truth_(and__4174__auto__)){
return new cljs.core.Keyword(null,"constraint","constraint",1725147424).cljs$core$IFn$_invoke$arity$1(edge_attr_map);
} else {
return and__4174__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),"",new cljs.core.Keyword(null,"color","color",1011675173),"deeppink3",new cljs.core.Keyword(null,"penwidth","penwidth",494666799),(4)], null);
} else {
return null;
}
});
/**
 * Returns the label for the edge n1 n2 in g given options.
 */
lib_draw_graph.graph.edge_label = (function lib_draw_graph$graph$edge_label(opts,metadata){
var temp__5735__auto__ = new cljs.core.Keyword(null,"edge-label","edge-label",1582257813).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"edge","edge",919909153).cljs$core$IFn$_invoke$arity$1(opts));
if(cljs.core.truth_(temp__5735__auto__)){
var lbls = temp__5735__auto__;
if(clojure.string.includes_QMARK_(lbls,"/")){
return lib_draw_graph.graph.first_label(lbls,metadata);
} else {
return lib_draw_graph.graph.composite_label(lbls,metadata);
}
} else {
return null;
}
});
lib_draw_graph.graph.constraints = (function lib_draw_graph$graph$constraints(opts){
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
var description = (function (attr_map){
var metadata = new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(attr_map);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(new cljs.core.Keyword(null,"edge-label","edge-label",1582257813).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"edge","edge",919909153).cljs$core$IFn$_invoke$arity$1(opts)))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xlabel","xlabel",-113430839),lib_draw_graph.graph.doub_slash_n(lib_draw_graph.graph.edge_label(opts,metadata)),new cljs.core.Keyword(null,"forcelabels","forcelabels",-1606198583),true], null):null),lib_draw_graph.graph.constraints(opts),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(attr_map,new cljs.core.Keyword(null,"meta","meta",1499536964)),lib_draw_graph.graph.maybe_show_constraint(opts,attr_map)], 0));
});
var desc = ((extra_loom.multigraph.extra_loom_graph_QMARK_(g))?(function (){var edges = extra_loom.multigraph.edges_between(g,n1,n2);
var attr_fn = (function (es){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,cur){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,description(loom.attr.attrs(g,cur)));
}),cljs.core.PersistentVector.EMPTY,es);
});
return attr_fn(edges);
})():description(loom.attr.attrs(g,n1,n2)));
return desc;
});
/**
 * structures the incoming opts map the same as default-options
 */
lib_draw_graph.graph.structure_opts = (function lib_draw_graph$graph$structure_opts(opts){
return lib_draw_graph.graph.group_map.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"graph","graph",1558099509),new cljs.core.Keyword(null,"dpi","dpi",-986162832),new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"pad","pad",-36734541),new cljs.core.Keyword(null,"splines","splines",1787583529),new cljs.core.Keyword(null,"sep","sep",1970430530),new cljs.core.Keyword(null,"ranksep","ranksep",-765843218),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.Keyword(null,"overlap","overlap",-1673335644),new cljs.core.Keyword(null,"nodesep","nodesep",-245901571),new cljs.core.Keyword(null,"rankdir","rankdir",-2029540135),new cljs.core.Keyword(null,"concentrate","concentrate",-1050197650),new cljs.core.Keyword(null,"ratio","ratio",-926560044)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"fontsize","fontsize",368767350),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"fixedsize","fixedsize",1191363170),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"area","area",472007256)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"hide-leaves?","hide-leaves?",1203529343),new cljs.core.Keyword(null,"show-roots?","show-roots?",-1350839449),new cljs.core.Keyword(null,"color-on","color-on",-1658319802),new cljs.core.Keyword(null,"constraint","constraint",1725147424),new cljs.core.Keyword(null,"show-constraints?","show-constraints?",1802138993)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edge","edge",919909153),new cljs.core.Keyword(null,"edge-label","edge-label",1582257813)], null)], 0));
});
lib_draw_graph.graph.cluster_args = (function lib_draw_graph$graph$cluster_args(g){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"node->clusters","node->clusters",-265377067),(function (n){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$3(lib_draw_graph.clustered.node__GT_clusters,g,lib_draw_graph.clustered.cluster_key(g))(n);
}),new cljs.core.Keyword(null,"cluster->descriptor","cluster->descriptor",-1433685113),(function (n){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),n], null),(function (){var x = lib_draw_graph.clustered.merged_cluster_attr(g,n,new cljs.core.Keyword(null,"style","style",-496642736));
var y = (((x == null))?cljs.core.PersistentArrayMap.EMPTY:x);
return y;
})()], 0));
}),new cljs.core.Keyword(null,"cluster->ranks","cluster->ranks",296694829),(function (n){
return lib_draw_graph.clustered.first_cluster_attr(g,n,new cljs.core.Keyword(null,"fix-ranks","fix-ranks",452150575));
}),new cljs.core.Keyword(null,"cluster->parent","cluster->parent",1941927856),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(lib_draw_graph.clustered.cluster_parent,g)], null);
});
/**
 * Returns the rhizome config (options) for a graph.
 */
lib_draw_graph.graph.get_rhizome_args = (function lib_draw_graph$graph$get_rhizome_args(g,opts){
var opts_STAR_ = lib_draw_graph.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lib_draw_graph.graph.default_options,lib_draw_graph.graph.structure_opts(opts)], 0));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"graph","graph",1558099509).cljs$core$IFn$_invoke$arity$1(opts_STAR_),new cljs.core.Keyword(null,"node->descriptor","node->descriptor",-1696154479),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(lib_draw_graph.graph.node_descriptor,g,opts_STAR_),new cljs.core.Keyword(null,"edge->descriptor","edge->descriptor",-2146285457),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(lib_draw_graph.graph.edge_descriptor,g,opts_STAR_)], null),(cljs.core.truth_(lib_draw_graph.clustered.cluster_key(g))?lib_draw_graph.graph.cluster_args(g):null)], 0));
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
var succs_fn = (function (p1__37187_SHARP_){
return loom.graph.successors_STAR_(g,p1__37187_SHARP_);
});
return lib_draw_graph.graph.graph__GT_dot(ks,succs_fn,rhi_args);
});
/**
 * Converts (Loom) graph to either a graph or an svg
 */
lib_draw_graph.graph.process_graph = (function lib_draw_graph$graph$process_graph(g,opts){
return lib_draw_graph.graph.loomgraph__GT_dot(g,lib_draw_graph.graph.get_rhizome_args(g,opts));
});

//# sourceMappingURL=lib_draw_graph.graph.js.map
