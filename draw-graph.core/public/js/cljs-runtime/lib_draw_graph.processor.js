goog.provide('lib_draw_graph.processor');
goog.require('cljs.core');
goog.require('lib_draw_graph.graph');
goog.require('lib_draw_graph.parser');
goog.require('loom.graph');
goog.require('loom.attr');
goog.require('extra_loom.multigraph');
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
}catch (e37621){if((e37621 instanceof Object)){
var e = e37621;
return null;
} else {
throw e37621;

}
}});
/**
 * Returns true if some of the map entries are true
 */
lib_draw_graph.processor.some_dims_QMARK_ = (function lib_draw_graph$processor$some_dims_QMARK_(m){
return (!(cljs.core.empty_QMARK_(cljs.core.select_keys(m,(function (){var iter__4582__auto__ = (function lib_draw_graph$processor$some_dims_QMARK__$_iter__37623(s__37624){
return (new cljs.core.LazySeq(null,(function (){
var s__37624__$1 = s__37624;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37624__$1);
if(temp__5735__auto__){
var s__37624__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37624__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__37624__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__37626 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__37625 = (0);
while(true){
if((i__37625 < size__4581__auto__)){
var vec__37627 = cljs.core._nth(c__4580__auto__,i__37625);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37627,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37627,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append(b__37626,k);

var G__37656 = (i__37625 + (1));
i__37625 = G__37656;
continue;
} else {
var G__37657 = (i__37625 + (1));
i__37625 = G__37657;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37626),lib_draw_graph$processor$some_dims_QMARK__$_iter__37623(cljs.core.chunk_rest(s__37624__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37626),null);
}
} else {
var vec__37632 = cljs.core.first(s__37624__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37632,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37632,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons(k,lib_draw_graph$processor$some_dims_QMARK__$_iter__37623(cljs.core.rest(s__37624__$2)));
} else {
var G__37658 = cljs.core.rest(s__37624__$2);
s__37624__$1 = G__37658;
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
return iter__4582__auto__(m);
})()))));
});
lib_draw_graph.processor.maybe_paths = (function lib_draw_graph$processor$maybe_paths(g,opts){
if((((!((new cljs.core.Keyword(null,"paths","paths",-1807389588).cljs$core$IFn$_invoke$arity$1(opts) == null)))) && (typeof new cljs.core.Keyword(null,"paths","paths",-1807389588).cljs$core$IFn$_invoke$arity$1(opts) === 'string'))){
var subs = clojure.string.split.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"paths","paths",-1807389588).cljs$core$IFn$_invoke$arity$1(opts),/\|/);
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
if((!((new cljs.core.Keyword(null,"filter-graph","filter-graph",-1851101907).cljs$core$IFn$_invoke$arity$1(opts) == null)))){
var g_SINGLEQUOTE_ = lib_draw_graph.preprocessor.filter_graph(g,new cljs.core.Keyword(null,"filter-graph","filter-graph",-1851101907).cljs$core$IFn$_invoke$arity$1(opts));
return g_SINGLEQUOTE_;
} else {
return g;
}
});
lib_draw_graph.processor.maybe_fix_ranks = (function lib_draw_graph$processor$maybe_fix_ranks(g,opts){
if(cljs.core.truth_((((!((new cljs.core.Keyword(null,"cluster-on","cluster-on",-499953258).cljs$core$IFn$_invoke$arity$1(opts) == null))))?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"layout","layout",-2120940921).cljs$core$IFn$_invoke$arity$1(opts),"dot"))?new cljs.core.Keyword(null,"fix-ranks?","fix-ranks?",1667047508).cljs$core$IFn$_invoke$arity$1(opts):false):false))){
return lib_draw_graph.preprocessor.fix_ranks(g,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"cluster-on","cluster-on",-499953258).cljs$core$IFn$_invoke$arity$1(opts)));
} else {
return g;
}
});
lib_draw_graph.processor.maybe_elide = (function lib_draw_graph$processor$maybe_elide(g,opts){
if((!((new cljs.core.Keyword(null,"elide","elide",-1239101386).cljs$core$IFn$_invoke$arity$1(opts) == null)))){
return lib_draw_graph.preprocessor.remove_levels(g,parseInt(new cljs.core.Keyword(null,"elide","elide",-1239101386).cljs$core$IFn$_invoke$arity$1(opts)));
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
return loom.attr.add_attr_to_edges(g,new cljs.core.Keyword(null,"meta","meta",1499536964),m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [src,dst], null)], null));
});

/**
 * @interface
 */
lib_draw_graph.processor.MultiStack = function(){};

/**
 * Pops the first item in the stack under key k.
 */
lib_draw_graph.processor.pop = (function lib_draw_graph$processor$pop(this$,k){
if((((!((this$ == null)))) && ((!((this$.lib_draw_graph$processor$MultiStack$pop$arity$2 == null)))))){
return this$.lib_draw_graph$processor$MultiStack$pop$arity$2(this$,k);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (lib_draw_graph.processor.pop[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(this$,k) : m__4488__auto__.call(null,this$,k));
} else {
var m__4485__auto__ = (lib_draw_graph.processor.pop["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(this$,k) : m__4485__auto__.call(null,this$,k));
} else {
throw cljs.core.missing_protocol("MultiStack.pop",this$);
}
}
}
});

/**
 * Peek at the first item in the stack under key k.
 */
lib_draw_graph.processor.peek = (function lib_draw_graph$processor$peek(this$,k){
if((((!((this$ == null)))) && ((!((this$.lib_draw_graph$processor$MultiStack$peek$arity$2 == null)))))){
return this$.lib_draw_graph$processor$MultiStack$peek$arity$2(this$,k);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (lib_draw_graph.processor.peek[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(this$,k) : m__4488__auto__.call(null,this$,k));
} else {
var m__4485__auto__ = (lib_draw_graph.processor.peek["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(this$,k) : m__4485__auto__.call(null,this$,k));
} else {
throw cljs.core.missing_protocol("MultiStack.peek",this$);
}
}
}
});

/**
 * Push the item onto the stack under key k.
 */
lib_draw_graph.processor.push = (function lib_draw_graph$processor$push(this$,k,item){
if((((!((this$ == null)))) && ((!((this$.lib_draw_graph$processor$MultiStack$push$arity$3 == null)))))){
return this$.lib_draw_graph$processor$MultiStack$push$arity$3(this$,k,item);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (lib_draw_graph.processor.push[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(this$,k,item) : m__4488__auto__.call(null,this$,k,item));
} else {
var m__4485__auto__ = (lib_draw_graph.processor.push["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(this$,k,item) : m__4485__auto__.call(null,this$,k,item));
} else {
throw cljs.core.missing_protocol("MultiStack.push",this$);
}
}
}
});

(cljs.core.Atom.prototype.lib_draw_graph$processor$MultiStack$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Atom.prototype.lib_draw_graph$processor$MultiStack$pop$arity$2 = (function (this$,k){
var this$__$1 = this;
var item = cljs.core.first(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(this$__$1),k));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(this$__$1,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),cljs.core.rest);

return item;
}));

(cljs.core.Atom.prototype.lib_draw_graph$processor$MultiStack$peek$arity$2 = (function (this$,k){
var this$__$1 = this;
return cljs.core.first(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(this$__$1),k));
}));

(cljs.core.Atom.prototype.lib_draw_graph$processor$MultiStack$push$arity$3 = (function (this$,k,item){
var this$__$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(this$__$1,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),(function (r){
return cljs.core.cons(item,r);
}));
}));
/**
 * Makes an attr map from a parsed edge
 */
lib_draw_graph.processor.edge_attr_map = (function lib_draw_graph$processor$edge_attr_map(pe){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(pe),(cljs.core.truth_(new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(pe))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(pe)], null):null)], 0));
});
lib_draw_graph.processor.loom_graph = (function lib_draw_graph$processor$loom_graph(var_args){
var G__37638 = arguments.length;
switch (G__37638) {
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

(lib_draw_graph.processor.loom_graph.cljs$core$IFn$_invoke$arity$1 = (function (parsed){
return lib_draw_graph.processor.loom_graph.cljs$core$IFn$_invoke$arity$2(parsed,null);
}));

(lib_draw_graph.processor.loom_graph.cljs$core$IFn$_invoke$arity$2 = (function (parsed,cluster_on){
var gr0 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(extra_loom.multigraph.multidigraph,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37636_SHARP_){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(p1__37636_SHARP_),new cljs.core.Keyword(null,"dst","dst",844682948).cljs$core$IFn$_invoke$arity$1(p1__37636_SHARP_),lib_draw_graph.processor.edge_attr_map(p1__37636_SHARP_)],null));
}),new cljs.core.Keyword(null,"edges","edges",-694791395).cljs$core$IFn$_invoke$arity$1(parsed)));
var gr1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__37640){
var vec__37641 = p__37640;
var nd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37641,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37641,(1),null);
return lib_draw_graph.processor.add_attr_map(acc,nd,attrs);
}),gr0,new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(parsed));
if(cljs.core.truth_((function (){var and__4174__auto__ = cluster_on;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cluster_on)]),new cljs.core.Keyword(null,"header","header",119441134).cljs$core$IFn$_invoke$arity$1(parsed));
} else {
return and__4174__auto__;
}
})())){
var gr2 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,cur){
return lib_draw_graph.clustered.add_attr_to_cluster(acc,cljs.core.first(cur),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.second(cur));
}),gr1,new cljs.core.Keyword(null,"cluster-styles","cluster-styles",413979703).cljs$core$IFn$_invoke$arity$1(parsed));
var gr3 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__37645){
var vec__37646 = p__37645;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37646,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37646,(1),null);
return lib_draw_graph.clustered.add_cluster_parent(acc,c,p);
}),gr2,new cljs.core.Keyword(null,"cluster-parents","cluster-parents",-1131098902).cljs$core$IFn$_invoke$arity$1(parsed));
var gr4 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__37649){
var vec__37650 = p__37649;
var c1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37650,(0),null);
var c2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37650,(1),null);
return lib_draw_graph.clustered.add_cluster_edge(acc,c1,c2);
}),gr3,new cljs.core.Keyword(null,"cluster-edges","cluster-edges",-965552665).cljs$core$IFn$_invoke$arity$1(parsed));
return lib_draw_graph.clustered.add_cluster_key(gr4,cluster_on);
} else {
return gr1;
}
}));

(lib_draw_graph.processor.loom_graph.cljs$lang$maxFixedArity = 2);

lib_draw_graph.processor.apply_filtering_operations = (function lib_draw_graph$processor$apply_filtering_operations(g,opts){
var g_SINGLEQUOTE_ = lib_draw_graph.processor.maybe_filter(lib_draw_graph.processor.maybe_paths(g,opts),opts);
if(cljs.core.truth_(lib_draw_graph.clustered.edge_graph(g_SINGLEQUOTE_))){
var g_SINGLEQUOTE__SINGLEQUOTE_ = (cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"filter-graph","filter-graph",-1851101907).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(opts);
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
if(cljs.core.truth_((function (){var or__4185__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",s);
if(or__4185__auto__){
return or__4185__auto__;
} else {
return null;
}
})())){
return null;
} else {
return s;
}
});
/**
 * detects the format of the data string.
 */
lib_draw_graph.processor.detect_format = (function lib_draw_graph$processor$detect_format(s){
try{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(1)),"{")){
return new cljs.core.Keyword(null,"json","json",1279968570);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(2)),"h,")){
return new cljs.core.Keyword(null,"csv","csv",-1164440893);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(5)),"graph")){
return new cljs.core.Keyword(null,"dot","dot",1442709401);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(7)),"digraph")){
return new cljs.core.Keyword(null,"dot","dot",1442709401);
} else {
return null;

}
}
}
}
}catch (e37653){if((e37653 instanceof Error)){
var e = e37653;
return null;
} else {
throw e37653;

}
}});
lib_draw_graph.processor.preprocess_graph = (function lib_draw_graph$processor$preprocess_graph(graph,opts){
return lib_draw_graph.processor.maybe_fix_ranks(lib_draw_graph.processor.maybe_elide(lib_draw_graph.processor.apply_filtering_operations(graph,opts),opts),opts);
});
lib_draw_graph.processor.postprocess_svg = (function lib_draw_graph$processor$postprocess_svg(graph,opts,svg){
if(cljs.core.truth_(new cljs.core.Keyword(null,"post-process?","post-process?",-621728918).cljs$core$IFn$_invoke$arity$1(opts))){
var svg_SINGLEQUOTE_ = (cljs.core.truth_((function (){var and__4174__auto__ = lib_draw_graph.processor.not_blank(new cljs.core.Keyword(null,"cluster-on","cluster-on",-499953258).cljs$core$IFn$_invoke$arity$1(opts));
if(cljs.core.truth_(and__4174__auto__)){
return ((lib_draw_graph.processor.some_dims_QMARK_(new cljs.core.Keyword(null,"pp-clusters","pp-clusters",478062894).cljs$core$IFn$_invoke$arity$1(opts))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("dot",new cljs.core.Keyword(null,"layout","layout",-2120940921).cljs$core$IFn$_invoke$arity$1(opts))));
} else {
return and__4174__auto__;
}
})())?lib_draw_graph.postprocessor.optimize_clusters(svg,graph,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(lib_draw_graph.graph.first_label,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(opts)),opts):svg);
var svg_SINGLEQUOTE__SINGLEQUOTE_ = (function (){var font = new cljs.core.Keyword(null,"pp-font","pp-font",1885164896).cljs$core$IFn$_invoke$arity$1(opts);
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
var cluster_on = lib_draw_graph.processor.not_blank(new cljs.core.Keyword(null,"cluster-on","cluster-on",-499953258).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"display-options","display-options",1066052168).cljs$core$IFn$_invoke$arity$1(in$)));
var g = (cljs.core.truth_(cluster_on)?lib_draw_graph.processor.loom_graph.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(in$),cluster_on):lib_draw_graph.processor.loom_graph.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(in$)));
return lib_draw_graph.graph.process_graph(lib_draw_graph.processor.preprocess_graph(g,new cljs.core.Keyword(null,"display-options","display-options",1066052168).cljs$core$IFn$_invoke$arity$1(in$)),new cljs.core.Keyword(null,"display-options","display-options",1066052168).cljs$core$IFn$_invoke$arity$1(in$));
});
lib_draw_graph.processor.in__GT_g = (function lib_draw_graph$processor$in__GT_g(in$){
var cluster_on = lib_draw_graph.processor.not_blank(new cljs.core.Keyword(null,"cluster-on","cluster-on",-499953258).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"display-options","display-options",1066052168).cljs$core$IFn$_invoke$arity$1(in$)));
var parsed = lib_draw_graph.parser.parse_csv_or_json(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(in$),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"format-in","format-in",1820661092).cljs$core$IFn$_invoke$arity$1(in$)));
if(cljs.core.truth_(cluster_on)){
return lib_draw_graph.processor.loom_graph.cljs$core$IFn$_invoke$arity$2(parsed,cluster_on);
} else {
return lib_draw_graph.processor.loom_graph.cljs$core$IFn$_invoke$arity$1(parsed);
}
});
lib_draw_graph.processor.g__GT_dot = (function lib_draw_graph$processor$g__GT_dot(in$,g){
return lib_draw_graph.graph.process_graph(g,new cljs.core.Keyword(null,"display-options","display-options",1066052168).cljs$core$IFn$_invoke$arity$1(in$));
});
lib_draw_graph.processor.process_to_svg = (function lib_draw_graph$processor$process_to_svg(in$,dot__GT_svg){
var G__37654 = new cljs.core.Keyword(null,"format-in","format-in",1820661092).cljs$core$IFn$_invoke$arity$1(in$);
switch (G__37654) {
case "dot":
var G__37655 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(in$);
return (dot__GT_svg.cljs$core$IFn$_invoke$arity$1 ? dot__GT_svg.cljs$core$IFn$_invoke$arity$1(G__37655) : dot__GT_svg.call(null,G__37655));

break;
case "csv":
case "json":
var g = lib_draw_graph.processor.in__GT_g(in$);
var opts = new cljs.core.Keyword(null,"display-options","display-options",1066052168).cljs$core$IFn$_invoke$arity$1(in$);
var preproc_g = lib_draw_graph.processor.preprocess_graph(g,opts);
var dot = lib_draw_graph.graph.process_graph(preproc_g,opts);
var svg = (dot__GT_svg.cljs$core$IFn$_invoke$arity$1 ? dot__GT_svg.cljs$core$IFn$_invoke$arity$1(dot) : dot__GT_svg.call(null,dot));
return lib_draw_graph.processor.postprocess_svg(preproc_g,opts,svg);

break;
default:
throw lib_draw_graph.util.err("Error: only 'csv' or 'dot' are allowed input formats.");

}
});

//# sourceMappingURL=lib_draw_graph.processor.js.map
