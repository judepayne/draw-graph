// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('lib_draw_graph.processor');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('lib_draw_graph.graph');
goog.require('lib_draw_graph.parser');
goog.require('loom.graph');
goog.require('loom.attr');
goog.require('clojure.string');
goog.require('lib_draw_graph.clustered');
goog.require('lib_draw_graph.preprocessor');
goog.require('lib_draw_graph.postprocessor');
goog.require('lib_draw_graph.util');
lib_draw_graph.processor._STAR_data_STAR_ = cljs.core.cst$kw$data;
lib_draw_graph.processor._STAR_options_STAR_ = cljs.core.cst$kw$display_DASH_options;
lib_draw_graph.processor._STAR_list_sep_STAR_ = /,/;
lib_draw_graph.processor._STAR_definition_marker_STAR_ = /#/;
lib_draw_graph.processor.split_list = (function lib_draw_graph$processor$split_list(e){
return clojure.string.split.cljs$core$IFn$_invoke$arity$3(e,lib_draw_graph.processor._STAR_list_sep_STAR_,(3));
});
lib_draw_graph.processor.split_def = (function lib_draw_graph$processor$split_def(s){
return clojure.string.split.cljs$core$IFn$_invoke$arity$3(s,lib_draw_graph.processor._STAR_definition_marker_STAR_,(-1));
});
/**
 * Returns third element of coll, or nil.
 */
lib_draw_graph.processor.third = (function lib_draw_graph$processor$third(coll){
try{return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(coll,(2));
}catch (e43362){if((e43362 instanceof Object)){
var e = e43362;
return null;
} else {
throw e43362;

}
}});
/**
 * Returns true if some of the map entries are true
 */
lib_draw_graph.processor.some_dims_QMARK_ = (function lib_draw_graph$processor$some_dims_QMARK_(m){
return (!(cljs.core.empty_QMARK_(cljs.core.select_keys(m,(function (){var iter__4523__auto__ = (function lib_draw_graph$processor$some_dims_QMARK__$_iter__43363(s__43364){
return (new cljs.core.LazySeq(null,(function (){
var s__43364__$1 = s__43364;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__43364__$1);
if(temp__5720__auto__){
var s__43364__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__43364__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__43364__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__43366 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__43365 = (0);
while(true){
if((i__43365 < size__4522__auto__)){
var vec__43367 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__43365);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43367,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43367,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append(b__43366,k);

var G__43373 = (i__43365 + (1));
i__43365 = G__43373;
continue;
} else {
var G__43374 = (i__43365 + (1));
i__43365 = G__43374;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43366),lib_draw_graph$processor$some_dims_QMARK__$_iter__43363(cljs.core.chunk_rest(s__43364__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43366),null);
}
} else {
var vec__43370 = cljs.core.first(s__43364__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43370,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43370,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons(k,lib_draw_graph$processor$some_dims_QMARK__$_iter__43363(cljs.core.rest(s__43364__$2)));
} else {
var G__43375 = cljs.core.rest(s__43364__$2);
s__43364__$1 = G__43375;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(m);
})()))));
});
lib_draw_graph.processor.maybe_paths = (function lib_draw_graph$processor$maybe_paths(g,opts){
if((((!((cljs.core.cst$kw$paths.cljs$core$IFn$_invoke$arity$1(opts) == null)))) && (typeof cljs.core.cst$kw$paths.cljs$core$IFn$_invoke$arity$1(opts) === 'string'))){
var subs = clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$paths.cljs$core$IFn$_invoke$arity$1(opts),/\|/);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(subs))){
var start_sub = cljs.core.first(subs);
var end_sub = cljs.core.second(subs);
return lib_draw_graph.preprocessor.paths(g,start_sub,end_sub);
} else {
throw lib_draw_graph.util.err("Error: Paths input cannot be parsed.");
}
} else {
return g;
}
});
lib_draw_graph.processor.maybe_filter = (function lib_draw_graph$processor$maybe_filter(g,opts){
if((!((cljs.core.cst$kw$filter_DASH_graph.cljs$core$IFn$_invoke$arity$1(opts) == null)))){
var g_SINGLEQUOTE_ = lib_draw_graph.preprocessor.filter_graph(g,cljs.core.cst$kw$filter_DASH_graph.cljs$core$IFn$_invoke$arity$1(opts));
return g_SINGLEQUOTE_;
} else {
return g;
}
});
lib_draw_graph.processor.maybe_fix_ranks = (function lib_draw_graph$processor$maybe_fix_ranks(g,opts){
if(cljs.core.truth_((function (){var and__4120__auto__ = (!((cljs.core.cst$kw$cluster_DASH_on.cljs$core$IFn$_invoke$arity$1(opts) == null)));
if(and__4120__auto__){
var and__4120__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$layout.cljs$core$IFn$_invoke$arity$1(opts),"dot");
if(and__4120__auto____$1){
return cljs.core.cst$kw$fix_DASH_ranks_QMARK_.cljs$core$IFn$_invoke$arity$1(opts);
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())){
return lib_draw_graph.preprocessor.fix_ranks(g,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$cluster_DASH_on.cljs$core$IFn$_invoke$arity$1(opts)));
} else {
return g;
}
});
lib_draw_graph.processor.maybe_elide = (function lib_draw_graph$processor$maybe_elide(g,opts){
if((!((cljs.core.cst$kw$elide.cljs$core$IFn$_invoke$arity$1(opts) == null)))){
return lib_draw_graph.preprocessor.remove_levels(g,parseInt(cljs.core.cst$kw$elide.cljs$core$IFn$_invoke$arity$1(opts)));
} else {
return g;
}
});
lib_draw_graph.processor.add_attr_map = (function lib_draw_graph$processor$add_attr_map(g,node_or_edge,m){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,cur){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(loom.attr.add_attr,acc,node_or_edge,cur);
}),g,cljs.core.vec(m));
});
lib_draw_graph.processor.add_meta_map_to_edge = (function lib_draw_graph$processor$add_meta_map_to_edge(g,src,dst,m){
return loom.attr.add_attr_to_edges(g,cljs.core.cst$kw$meta,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [src,dst], null)], null));
});
lib_draw_graph.processor.loom_graph = (function lib_draw_graph$processor$loom_graph(var_args){
var G__43378 = arguments.length;
switch (G__43378) {
case 1:
return lib_draw_graph.processor.loom_graph.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return lib_draw_graph.processor.loom_graph.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

lib_draw_graph.processor.loom_graph.cljs$core$IFn$_invoke$arity$1 = (function (s){
return lib_draw_graph.processor.loom_graph.cljs$core$IFn$_invoke$arity$2(s,null);
});

lib_draw_graph.processor.loom_graph.cljs$core$IFn$_invoke$arity$2 = (function (s,cluster_on){
var parsed = lib_draw_graph.parser.parse_lines(clojure.string.split_lines(s));
var gr0 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(loom.graph.digraph,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (parsed){
return (function (p1__43376_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$src.cljs$core$IFn$_invoke$arity$1(p1__43376_SHARP_),cljs.core.cst$kw$dst.cljs$core$IFn$_invoke$arity$1(p1__43376_SHARP_)],null));
});})(parsed))
,cljs.core.cst$kw$edges.cljs$core$IFn$_invoke$arity$1(parsed)));
var gr1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (parsed,gr0){
return (function (acc,cur){
if(cljs.core.truth_(cljs.core.cst$kw$style.cljs$core$IFn$_invoke$arity$1(cur))){
var g_SINGLEQUOTE_ = lib_draw_graph.processor.add_attr_map(acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$src.cljs$core$IFn$_invoke$arity$1(cur),cljs.core.cst$kw$dst.cljs$core$IFn$_invoke$arity$1(cur)], null),cljs.core.cst$kw$style.cljs$core$IFn$_invoke$arity$1(cur));
if(cljs.core.truth_(cljs.core.cst$kw$meta.cljs$core$IFn$_invoke$arity$1(cur))){
return lib_draw_graph.processor.add_meta_map_to_edge(g_SINGLEQUOTE_,cljs.core.cst$kw$src.cljs$core$IFn$_invoke$arity$1(cur),cljs.core.cst$kw$dst.cljs$core$IFn$_invoke$arity$1(cur),cljs.core.cst$kw$meta.cljs$core$IFn$_invoke$arity$1(cur));
} else {
return g_SINGLEQUOTE_;
}
} else {
return acc;
}
});})(parsed,gr0))
,gr0,cljs.core.cst$kw$edges.cljs$core$IFn$_invoke$arity$1(parsed));
var gr2 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (parsed,gr0,gr1){
return (function (acc,p__43379){
var vec__43380 = p__43379;
var nd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43380,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43380,(1),null);
return lib_draw_graph.processor.add_attr_map(acc,nd,attrs);
});})(parsed,gr0,gr1))
,gr1,cljs.core.cst$kw$node_DASH_styles.cljs$core$IFn$_invoke$arity$1(parsed));
if(cljs.core.truth_((function (){var and__4120__auto__ = cluster_on;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cluster_on)]),cljs.core.cst$kw$header.cljs$core$IFn$_invoke$arity$1(parsed));
} else {
return and__4120__auto__;
}
})())){
var gr3 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (parsed,gr0,gr1,gr2){
return (function (acc,cur){
return lib_draw_graph.clustered.add_attr_to_cluster(acc,cljs.core.first(cur),cljs.core.cst$kw$style,cljs.core.second(cur));
});})(parsed,gr0,gr1,gr2))
,gr2,cljs.core.cst$kw$cluster_DASH_styles.cljs$core$IFn$_invoke$arity$1(parsed));
var gr4 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (gr3,parsed,gr0,gr1,gr2){
return (function (acc,p__43383){
var vec__43384 = p__43383;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43384,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43384,(1),null);
return lib_draw_graph.clustered.add_cluster_parent(acc,c,p);
});})(gr3,parsed,gr0,gr1,gr2))
,gr3,cljs.core.cst$kw$cluster_DASH_parents.cljs$core$IFn$_invoke$arity$1(parsed));
var gr5 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (gr3,gr4,parsed,gr0,gr1,gr2){
return (function (acc,p__43387){
var vec__43388 = p__43387;
var c1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43388,(0),null);
var c2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43388,(1),null);
return lib_draw_graph.clustered.add_cluster_edge(acc,c1,c2);
});})(gr3,gr4,parsed,gr0,gr1,gr2))
,gr4,cljs.core.cst$kw$cluster_DASH_edges.cljs$core$IFn$_invoke$arity$1(parsed));
return lib_draw_graph.clustered.add_cluster_key(gr5,cluster_on);
} else {
return gr2;
}
});

lib_draw_graph.processor.loom_graph.cljs$lang$maxFixedArity = 2;

lib_draw_graph.processor.apply_filtering_operations = (function lib_draw_graph$processor$apply_filtering_operations(g,opts){
var g_SINGLEQUOTE_ = lib_draw_graph.processor.maybe_filter(lib_draw_graph.processor.maybe_paths(g,opts),opts);
if(cljs.core.truth_(lib_draw_graph.clustered.edge_graph(g_SINGLEQUOTE_))){
var g_SINGLEQUOTE__SINGLEQUOTE_ = (cljs.core.truth_((function (){var or__4131__auto__ = cljs.core.cst$kw$filter_DASH_graph.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(opts);
}
})())?lib_draw_graph.preprocessor.filter_edge_graph(g_SINGLEQUOTE_,lib_draw_graph.clustered.clusters(g_SINGLEQUOTE_)):g_SINGLEQUOTE_);
if(cljs.core.truth_(lib_draw_graph.clustered.edge_graph(g_SINGLEQUOTE__SINGLEQUOTE_))){
return lib_draw_graph.preprocessor.add_invisible_cluster_edges(g_SINGLEQUOTE__SINGLEQUOTE_,opts,loom.graph.edges(lib_draw_graph.clustered.edge_graph(g_SINGLEQUOTE__SINGLEQUOTE_)));
} else {
return g_SINGLEQUOTE__SINGLEQUOTE_;
}
} else {
return g_SINGLEQUOTE_;
}
});
/**
 * Runs various tests over a clustered graph and outputs a warning message.
 */
lib_draw_graph.processor.check_graph = (function lib_draw_graph$processor$check_graph(g){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,cur){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(acc),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cur.cljs$core$IFn$_invoke$arity$1 ? cur.cljs$core$IFn$_invoke$arity$1(g) : cur.call(null,g)))].join('');
}),"",cljs.core.PersistentVector.EMPTY);
});
lib_draw_graph.processor.not_blank = (function lib_draw_graph$processor$not_blank(s){
if(cljs.core.truth_((function (){var or__4131__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",s);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return null;
}
})())){
return null;
} else {
return s;
}
});
lib_draw_graph.processor.preprocess_graph = (function lib_draw_graph$processor$preprocess_graph(graph,opts){
return lib_draw_graph.processor.maybe_fix_ranks(lib_draw_graph.processor.maybe_elide(lib_draw_graph.processor.apply_filtering_operations(graph,opts),opts),opts);
});
lib_draw_graph.processor.postprocess_svg = (function lib_draw_graph$processor$postprocess_svg(graph,opts,svg){
if(cljs.core.truth_(cljs.core.cst$kw$post_DASH_process_QMARK_.cljs$core$IFn$_invoke$arity$1(opts))){
var svg_SINGLEQUOTE_ = (cljs.core.truth_((function (){var and__4120__auto__ = lib_draw_graph.processor.not_blank(cljs.core.cst$kw$cluster_DASH_on.cljs$core$IFn$_invoke$arity$1(opts));
if(cljs.core.truth_(and__4120__auto__)){
return ((lib_draw_graph.processor.some_dims_QMARK_(cljs.core.cst$kw$pp_DASH_clusters.cljs$core$IFn$_invoke$arity$1(opts))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("dot",cljs.core.cst$kw$layout.cljs$core$IFn$_invoke$arity$1(opts))));
} else {
return and__4120__auto__;
}
})())?lib_draw_graph.postprocessor.optimize_clusters(svg,graph,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(lib_draw_graph.graph.first_label,cljs.core.cst$kw$label.cljs$core$IFn$_invoke$arity$1(opts)),opts):svg);
var svg_SINGLEQUOTE__SINGLEQUOTE_ = (function (){var font = cljs.core.cst$kw$pp_DASH_font.cljs$core$IFn$_invoke$arity$1(opts);
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(font,"")) && ((!((font == null)))))){
return clojure.string.replace((((svg_SINGLEQUOTE_ == null))?svg:svg_SINGLEQUOTE_),"Monospace",font);
} else {
return svg_SINGLEQUOTE_;
}
})();
return svg_SINGLEQUOTE__SINGLEQUOTE_;
} else {
return svg;
}
});
lib_draw_graph.processor.process_to_dot = (function lib_draw_graph$processor$process_to_dot(in$){
var cluster_on = lib_draw_graph.processor.not_blank(cljs.core.cst$kw$cluster_DASH_on.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$display_DASH_options.cljs$core$IFn$_invoke$arity$1(in$)));
var g = (cljs.core.truth_(cluster_on)?lib_draw_graph.processor.loom_graph.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(in$),cluster_on):lib_draw_graph.processor.loom_graph.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(in$)));
return lib_draw_graph.graph.process_graph(lib_draw_graph.processor.preprocess_graph(g,cljs.core.cst$kw$display_DASH_options.cljs$core$IFn$_invoke$arity$1(in$)),cljs.core.cst$kw$display_DASH_options.cljs$core$IFn$_invoke$arity$1(in$));
});
lib_draw_graph.processor.csv__GT_g = (function lib_draw_graph$processor$csv__GT_g(in$){
var cluster_on = lib_draw_graph.processor.not_blank(cljs.core.cst$kw$cluster_DASH_on.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$display_DASH_options.cljs$core$IFn$_invoke$arity$1(in$)));
if(cljs.core.truth_(cluster_on)){
return lib_draw_graph.processor.loom_graph.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(in$),cluster_on);
} else {
return lib_draw_graph.processor.loom_graph.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(in$));
}
});
lib_draw_graph.processor.g__GT_dot = (function lib_draw_graph$processor$g__GT_dot(in$,g){
return lib_draw_graph.graph.process_graph(g,cljs.core.cst$kw$display_DASH_options.cljs$core$IFn$_invoke$arity$1(in$));
});
lib_draw_graph.processor.process_to_svg = (function lib_draw_graph$processor$process_to_svg(in$,dot__GT_svg){
var G__43392 = cljs.core.cst$kw$format_DASH_in.cljs$core$IFn$_invoke$arity$1(in$);
switch (G__43392) {
case "dot":
var G__43393 = cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(in$);
return (dot__GT_svg.cljs$core$IFn$_invoke$arity$1 ? dot__GT_svg.cljs$core$IFn$_invoke$arity$1(G__43393) : dot__GT_svg.call(null,G__43393));

break;
case "csv":
var g = lib_draw_graph.processor.csv__GT_g(in$);
var opts = cljs.core.cst$kw$display_DASH_options.cljs$core$IFn$_invoke$arity$1(in$);
var preproc_g = lib_draw_graph.processor.preprocess_graph(g,opts);
var dot = lib_draw_graph.graph.process_graph(preproc_g,opts);
var svg = (dot__GT_svg.cljs$core$IFn$_invoke$arity$1 ? dot__GT_svg.cljs$core$IFn$_invoke$arity$1(dot) : dot__GT_svg.call(null,dot));
return lib_draw_graph.processor.postprocess_svg(preproc_g,opts,svg);

break;
default:
throw lib_draw_graph.util.err("Error: only 'csv' or 'dot' are allowed input formats.");

}
});
