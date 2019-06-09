// Compiled by ClojureScript 1.10.520 {}
goog.provide('lib_draw_graph.processor');
goog.require('cljs.core');
goog.require('lib_draw_graph.graph');
goog.require('lib_draw_graph.parser');
goog.require('loom.graph');
goog.require('loom.attr');
goog.require('clojure.string');
goog.require('lib_draw_graph.clustered');
goog.require('lib_draw_graph.preprocessor');
goog.require('lib_draw_graph.postprocessor');
goog.require('lib_draw_graph.util');
lib_draw_graph.processor._STAR_data_STAR_ = new cljs.core.Keyword(null,"data","data",-232669377);
lib_draw_graph.processor._STAR_options_STAR_ = new cljs.core.Keyword(null,"display-options","display-options",1066052168);
lib_draw_graph.processor._STAR_list_sep_STAR_ = /,/;
lib_draw_graph.processor._STAR_definition_marker_STAR_ = /#/;
lib_draw_graph.processor.split_list = (function lib_draw_graph$processor$split_list(e){
return clojure.string.split.call(null,e,lib_draw_graph.processor._STAR_list_sep_STAR_,(3));
});
lib_draw_graph.processor.split_def = (function lib_draw_graph$processor$split_def(s){
return clojure.string.split.call(null,s,lib_draw_graph.processor._STAR_definition_marker_STAR_,(-1));
});
/**
 * Returns third element of coll, or nil.
 */
lib_draw_graph.processor.third = (function lib_draw_graph$processor$third(coll){
try{return cljs.core.nth.call(null,coll,(2));
}catch (e39531){if((e39531 instanceof Object)){
var e = e39531;
return null;
} else {
throw e39531;

}
}});
/**
 * Returns true if some of the map entries are true
 */
lib_draw_graph.processor.some_dims_QMARK_ = (function lib_draw_graph$processor$some_dims_QMARK_(m){
return (!(cljs.core.empty_QMARK_.call(null,cljs.core.select_keys.call(null,m,(function (){var iter__4523__auto__ = (function lib_draw_graph$processor$some_dims_QMARK__$_iter__39532(s__39533){
return (new cljs.core.LazySeq(null,(function (){
var s__39533__$1 = s__39533;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__39533__$1);
if(temp__5720__auto__){
var s__39533__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__39533__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__39533__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__39535 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__39534 = (0);
while(true){
if((i__39534 < size__4522__auto__)){
var vec__39536 = cljs.core._nth.call(null,c__4521__auto__,i__39534);
var k = cljs.core.nth.call(null,vec__39536,(0),null);
var v = cljs.core.nth.call(null,vec__39536,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append.call(null,b__39535,k);

var G__39542 = (i__39534 + (1));
i__39534 = G__39542;
continue;
} else {
var G__39543 = (i__39534 + (1));
i__39534 = G__39543;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39535),lib_draw_graph$processor$some_dims_QMARK__$_iter__39532.call(null,cljs.core.chunk_rest.call(null,s__39533__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39535),null);
}
} else {
var vec__39539 = cljs.core.first.call(null,s__39533__$2);
var k = cljs.core.nth.call(null,vec__39539,(0),null);
var v = cljs.core.nth.call(null,vec__39539,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons.call(null,k,lib_draw_graph$processor$some_dims_QMARK__$_iter__39532.call(null,cljs.core.rest.call(null,s__39533__$2)));
} else {
var G__39544 = cljs.core.rest.call(null,s__39533__$2);
s__39533__$1 = G__39544;
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
return iter__4523__auto__.call(null,m);
})()))));
});
lib_draw_graph.processor.maybe_paths = (function lib_draw_graph$processor$maybe_paths(g,opts){
if((((!((new cljs.core.Keyword(null,"paths","paths",-1807389588).cljs$core$IFn$_invoke$arity$1(opts) == null)))) && (typeof new cljs.core.Keyword(null,"paths","paths",-1807389588).cljs$core$IFn$_invoke$arity$1(opts) === 'string'))){
var subs = clojure.string.split.call(null,new cljs.core.Keyword(null,"paths","paths",-1807389588).cljs$core$IFn$_invoke$arity$1(opts),/\|/);
if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,subs))){
var start_sub = cljs.core.first.call(null,subs);
var end_sub = cljs.core.second.call(null,subs);
return lib_draw_graph.preprocessor.paths.call(null,g,start_sub,end_sub);
} else {
throw lib_draw_graph.util.err.call(null,"Error: Paths input cannot be parsed.");
}
} else {
return g;
}
});
lib_draw_graph.processor.maybe_filter = (function lib_draw_graph$processor$maybe_filter(g,opts){
if((!((new cljs.core.Keyword(null,"filter-graph","filter-graph",-1851101907).cljs$core$IFn$_invoke$arity$1(opts) == null)))){
var g_SINGLEQUOTE_ = lib_draw_graph.preprocessor.filter_graph.call(null,g,new cljs.core.Keyword(null,"filter-graph","filter-graph",-1851101907).cljs$core$IFn$_invoke$arity$1(opts));
return g_SINGLEQUOTE_;
} else {
return g;
}
});
lib_draw_graph.processor.maybe_fix_ranks = (function lib_draw_graph$processor$maybe_fix_ranks(g,opts){
if(cljs.core.truth_((function (){var and__4120__auto__ = (!((new cljs.core.Keyword(null,"cluster-on","cluster-on",-499953258).cljs$core$IFn$_invoke$arity$1(opts) == null)));
if(and__4120__auto__){
var and__4120__auto____$1 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"layout","layout",-2120940921).cljs$core$IFn$_invoke$arity$1(opts),"dot");
if(and__4120__auto____$1){
return new cljs.core.Keyword(null,"fix-ranks?","fix-ranks?",1667047508).cljs$core$IFn$_invoke$arity$1(opts);
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())){
return lib_draw_graph.preprocessor.fix_ranks.call(null,g,cljs.core.keyword.call(null,new cljs.core.Keyword(null,"cluster-on","cluster-on",-499953258).cljs$core$IFn$_invoke$arity$1(opts)));
} else {
return g;
}
});
lib_draw_graph.processor.maybe_elide = (function lib_draw_graph$processor$maybe_elide(g,opts){
if((!((new cljs.core.Keyword(null,"elide","elide",-1239101386).cljs$core$IFn$_invoke$arity$1(opts) == null)))){
return lib_draw_graph.preprocessor.remove_levels.call(null,g,parseInt(new cljs.core.Keyword(null,"elide","elide",-1239101386).cljs$core$IFn$_invoke$arity$1(opts)));
} else {
return g;
}
});
lib_draw_graph.processor.add_attr_map = (function lib_draw_graph$processor$add_attr_map(g,node_or_edge,m){
return cljs.core.reduce.call(null,(function (acc,cur){
return cljs.core.apply.call(null,loom.attr.add_attr,acc,node_or_edge,cur);
}),g,cljs.core.vec.call(null,m));
});
lib_draw_graph.processor.add_meta_map_to_edge = (function lib_draw_graph$processor$add_meta_map_to_edge(g,src,dst,m){
return loom.attr.add_attr_to_edges.call(null,g,new cljs.core.Keyword(null,"meta","meta",1499536964),m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [src,dst], null)], null));
});
lib_draw_graph.processor.loom_graph = (function lib_draw_graph$processor$loom_graph(var_args){
var G__39547 = arguments.length;
switch (G__39547) {
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
return lib_draw_graph.processor.loom_graph.call(null,s,null);
});

lib_draw_graph.processor.loom_graph.cljs$core$IFn$_invoke$arity$2 = (function (s,cluster_on){
var parsed = lib_draw_graph.parser.parse_lines.call(null,clojure.string.split_lines.call(null,s));
var gr0 = cljs.core.apply.call(null,loom.graph.digraph,cljs.core.map.call(null,((function (parsed){
return (function (p1__39545_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(p1__39545_SHARP_),new cljs.core.Keyword(null,"dst","dst",844682948).cljs$core$IFn$_invoke$arity$1(p1__39545_SHARP_)],null));
});})(parsed))
,new cljs.core.Keyword(null,"edges","edges",-694791395).cljs$core$IFn$_invoke$arity$1(parsed)));
var gr1 = cljs.core.reduce.call(null,((function (parsed,gr0){
return (function (acc,cur){
if(cljs.core.truth_(new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(cur))){
var g_SINGLEQUOTE_ = lib_draw_graph.processor.add_attr_map.call(null,acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(cur),new cljs.core.Keyword(null,"dst","dst",844682948).cljs$core$IFn$_invoke$arity$1(cur)], null),new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(cur));
if(cljs.core.truth_(new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(cur))){
return lib_draw_graph.processor.add_meta_map_to_edge.call(null,g_SINGLEQUOTE_,new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(cur),new cljs.core.Keyword(null,"dst","dst",844682948).cljs$core$IFn$_invoke$arity$1(cur),new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(cur));
} else {
return g_SINGLEQUOTE_;
}
} else {
return acc;
}
});})(parsed,gr0))
,gr0,new cljs.core.Keyword(null,"edges","edges",-694791395).cljs$core$IFn$_invoke$arity$1(parsed));
var gr2 = cljs.core.reduce.call(null,((function (parsed,gr0,gr1){
return (function (acc,p__39548){
var vec__39549 = p__39548;
var nd = cljs.core.nth.call(null,vec__39549,(0),null);
var attrs = cljs.core.nth.call(null,vec__39549,(1),null);
return lib_draw_graph.processor.add_attr_map.call(null,acc,nd,attrs);
});})(parsed,gr0,gr1))
,gr1,new cljs.core.Keyword(null,"node-styles","node-styles",663815244).cljs$core$IFn$_invoke$arity$1(parsed));
if(cljs.core.truth_((function (){var and__4120__auto__ = cluster_on;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.keyword.call(null,cluster_on)]),new cljs.core.Keyword(null,"header","header",119441134).cljs$core$IFn$_invoke$arity$1(parsed));
} else {
return and__4120__auto__;
}
})())){
var gr3 = cljs.core.reduce.call(null,((function (parsed,gr0,gr1,gr2){
return (function (acc,cur){
return lib_draw_graph.clustered.add_attr_to_cluster.call(null,acc,cljs.core.first.call(null,cur),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.second.call(null,cur));
});})(parsed,gr0,gr1,gr2))
,gr2,new cljs.core.Keyword(null,"cluster-styles","cluster-styles",413979703).cljs$core$IFn$_invoke$arity$1(parsed));
var gr4 = cljs.core.reduce.call(null,((function (gr3,parsed,gr0,gr1,gr2){
return (function (acc,p__39552){
var vec__39553 = p__39552;
var c = cljs.core.nth.call(null,vec__39553,(0),null);
var p = cljs.core.nth.call(null,vec__39553,(1),null);
return lib_draw_graph.clustered.add_cluster_parent.call(null,acc,c,p);
});})(gr3,parsed,gr0,gr1,gr2))
,gr3,new cljs.core.Keyword(null,"cluster-parents","cluster-parents",-1131098902).cljs$core$IFn$_invoke$arity$1(parsed));
var gr5 = cljs.core.reduce.call(null,((function (gr3,gr4,parsed,gr0,gr1,gr2){
return (function (acc,p__39556){
var vec__39557 = p__39556;
var c1 = cljs.core.nth.call(null,vec__39557,(0),null);
var c2 = cljs.core.nth.call(null,vec__39557,(1),null);
return lib_draw_graph.clustered.add_cluster_edge.call(null,acc,c1,c2);
});})(gr3,gr4,parsed,gr0,gr1,gr2))
,gr4,new cljs.core.Keyword(null,"cluster-edges","cluster-edges",-965552665).cljs$core$IFn$_invoke$arity$1(parsed));
return lib_draw_graph.clustered.add_cluster_key.call(null,gr5,cluster_on);
} else {
return gr2;
}
});

lib_draw_graph.processor.loom_graph.cljs$lang$maxFixedArity = 2;

lib_draw_graph.processor.apply_filtering_operations = (function lib_draw_graph$processor$apply_filtering_operations(g,opts){
var g_SINGLEQUOTE_ = lib_draw_graph.processor.maybe_filter.call(null,lib_draw_graph.processor.maybe_paths.call(null,g,opts),opts);
if(cljs.core.truth_(lib_draw_graph.clustered.edge_graph.call(null,g_SINGLEQUOTE_))){
var g_SINGLEQUOTE__SINGLEQUOTE_ = (cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"filter-graph","filter-graph",-1851101907).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(opts);
}
})())?lib_draw_graph.preprocessor.filter_edge_graph.call(null,g_SINGLEQUOTE_,lib_draw_graph.clustered.clusters.call(null,g_SINGLEQUOTE_)):g_SINGLEQUOTE_);
if(cljs.core.truth_(lib_draw_graph.clustered.edge_graph.call(null,g_SINGLEQUOTE__SINGLEQUOTE_))){
return lib_draw_graph.preprocessor.add_invisible_cluster_edges.call(null,g_SINGLEQUOTE__SINGLEQUOTE_,opts,loom.graph.edges.call(null,lib_draw_graph.clustered.edge_graph.call(null,g_SINGLEQUOTE__SINGLEQUOTE_)));
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
return cljs.core.reduce.call(null,(function (acc,cur){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(acc),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cur.call(null,g))].join('');
}),"",cljs.core.PersistentVector.EMPTY);
});
lib_draw_graph.processor.not_blank = (function lib_draw_graph$processor$not_blank(s){
if(cljs.core.truth_((function (){var or__4131__auto__ = cljs.core._EQ_.call(null,"",s);
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
return lib_draw_graph.processor.maybe_fix_ranks.call(null,lib_draw_graph.processor.maybe_elide.call(null,lib_draw_graph.processor.apply_filtering_operations.call(null,graph,opts),opts),opts);
});
lib_draw_graph.processor.postprocess_svg = (function lib_draw_graph$processor$postprocess_svg(graph,opts,svg){
if(cljs.core.truth_(new cljs.core.Keyword(null,"post-process?","post-process?",-621728918).cljs$core$IFn$_invoke$arity$1(opts))){
var svg_SINGLEQUOTE_ = (cljs.core.truth_((function (){var and__4120__auto__ = lib_draw_graph.processor.not_blank.call(null,new cljs.core.Keyword(null,"cluster-on","cluster-on",-499953258).cljs$core$IFn$_invoke$arity$1(opts));
if(cljs.core.truth_(and__4120__auto__)){
return ((lib_draw_graph.processor.some_dims_QMARK_.call(null,new cljs.core.Keyword(null,"pp-clusters","pp-clusters",478062894).cljs$core$IFn$_invoke$arity$1(opts))) && (cljs.core._EQ_.call(null,"dot",new cljs.core.Keyword(null,"layout","layout",-2120940921).cljs$core$IFn$_invoke$arity$1(opts))));
} else {
return and__4120__auto__;
}
})())?lib_draw_graph.postprocessor.optimize_clusters.call(null,svg,graph,cljs.core.partial.call(null,lib_draw_graph.graph.first_label,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(opts)),opts):svg);
var svg_SINGLEQUOTE__SINGLEQUOTE_ = (function (){var font = new cljs.core.Keyword(null,"pp-font","pp-font",1885164896).cljs$core$IFn$_invoke$arity$1(opts);
if(((cljs.core.not_EQ_.call(null,font,"")) && ((!((font == null)))))){
return clojure.string.replace.call(null,(((svg_SINGLEQUOTE_ == null))?svg:svg_SINGLEQUOTE_),"Monospace",font);
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
var cluster_on = lib_draw_graph.processor.not_blank.call(null,new cljs.core.Keyword(null,"cluster-on","cluster-on",-499953258).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"display-options","display-options",1066052168).cljs$core$IFn$_invoke$arity$1(in$)));
var g = (cljs.core.truth_(cluster_on)?lib_draw_graph.processor.loom_graph.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(in$),cluster_on):lib_draw_graph.processor.loom_graph.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(in$)));
return lib_draw_graph.graph.process_graph.call(null,lib_draw_graph.processor.preprocess_graph.call(null,g,new cljs.core.Keyword(null,"display-options","display-options",1066052168).cljs$core$IFn$_invoke$arity$1(in$)),new cljs.core.Keyword(null,"display-options","display-options",1066052168).cljs$core$IFn$_invoke$arity$1(in$));
});
lib_draw_graph.processor.csv__GT_g = (function lib_draw_graph$processor$csv__GT_g(in$){
var cluster_on = lib_draw_graph.processor.not_blank.call(null,new cljs.core.Keyword(null,"cluster-on","cluster-on",-499953258).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"display-options","display-options",1066052168).cljs$core$IFn$_invoke$arity$1(in$)));
if(cljs.core.truth_(cluster_on)){
return lib_draw_graph.processor.loom_graph.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(in$),cluster_on);
} else {
return lib_draw_graph.processor.loom_graph.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(in$));
}
});
lib_draw_graph.processor.g__GT_dot = (function lib_draw_graph$processor$g__GT_dot(in$,g){
return lib_draw_graph.graph.process_graph.call(null,g,new cljs.core.Keyword(null,"display-options","display-options",1066052168).cljs$core$IFn$_invoke$arity$1(in$));
});
lib_draw_graph.processor.process_to_svg = (function lib_draw_graph$processor$process_to_svg(in$,dot__GT_svg){
var G__39561 = new cljs.core.Keyword(null,"format-in","format-in",1820661092).cljs$core$IFn$_invoke$arity$1(in$);
switch (G__39561) {
case "dot":
return dot__GT_svg.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(in$));

break;
case "csv":
var g = lib_draw_graph.processor.csv__GT_g.call(null,in$);
var opts = new cljs.core.Keyword(null,"display-options","display-options",1066052168).cljs$core$IFn$_invoke$arity$1(in$);
var preproc_g = lib_draw_graph.processor.preprocess_graph.call(null,g,opts);
var dot = lib_draw_graph.graph.process_graph.call(null,preproc_g,opts);
var svg = dot__GT_svg.call(null,dot);
return lib_draw_graph.processor.postprocess_svg.call(null,preproc_g,opts,svg);

break;
default:
throw lib_draw_graph.util.err.call(null,"Error: only 'csv' or 'dot' are allowed input formats.");

}
});

//# sourceMappingURL=processor.js.map
