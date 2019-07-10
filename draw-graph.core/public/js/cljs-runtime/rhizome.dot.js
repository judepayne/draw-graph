goog.provide('rhizome.dot');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.set');
rhizome.dot.escapable_characters = "\\|{}\"";
/**
 * Escape characters that are significant for the dot format.
 */
rhizome.dot.escape_string = (function rhizome$dot$escape_string(s){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__34184_SHARP_,p2__34185_SHARP_){
return clojure.string.replace(p1__34184_SHARP_,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__34185_SHARP_),["\\",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__34185_SHARP_)].join(''));
}),s,rhizome.dot.escapable_characters);
});
rhizome.dot.default_options = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dpi","dpi",-986162832),(100)], null);
rhizome.dot.default_node_options = cljs.core.PersistentArrayMap.EMPTY;
rhizome.dot.default_edge_options = cljs.core.PersistentArrayMap.EMPTY;
rhizome.dot.option_translations = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rankdir","rankdir",-2029540135),new cljs.core.PersistentArrayMap(null, 2, [true,new cljs.core.Keyword(null,"TP","TP",163239233),false,new cljs.core.Keyword(null,"LR","LR",341359911)], null)], null)], null);
rhizome.dot.translate_options = (function rhizome$dot$translate_options(m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34192){
var vec__34194 = p__34192;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34194,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34194,(1),null);
var temp__5718__auto__ = (rhizome.dot.option_translations.cljs$core$IFn$_invoke$arity$1 ? rhizome.dot.option_translations.cljs$core$IFn$_invoke$arity$1(k) : rhizome.dot.option_translations.call(null,k));
if(cljs.core.truth_(temp__5718__auto__)){
var vec__34200 = temp__5718__auto__;
var k_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34200,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34200,(1),null);
if(cljs.core.contains_QMARK_(m,k_STAR_)){
return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_STAR_,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v))], null);
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);
}
}),m)));
});
rhizome.dot.__GT_literal = (function rhizome$dot$__GT_literal(s){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rhizome.dot","literal","rhizome.dot/literal",-405662190),true], null));
});
rhizome.dot.literal_QMARK_ = (function rhizome$dot$literal_QMARK_(x){
return new cljs.core.Keyword("rhizome.dot","literal","rhizome.dot/literal",-405662190).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(x));
});
rhizome.dot.unwrap_literal = (function rhizome$dot$unwrap_literal(x){
if(cljs.core.truth_(rhizome.dot.literal_QMARK_(x))){
return cljs.core.first(x);
} else {
return x;
}
});
rhizome.dot.format_options_value = (function rhizome$dot$format_options_value(v){
var v_str = cljs.core.str.cljs$core$IFn$_invoke$arity$1(v);
if(clojure.string.starts_with_QMARK_(v_str,"<<")){
return v_str;
} else {
if(typeof v === 'string'){
return ["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rhizome.dot.escape_string(v)),"\""].join('');
} else {
if((v instanceof cljs.core.Keyword)){
return cljs.core.name(v);
} else {
if(cljs.core.coll_QMARK_(v)){
if(cljs.core.truth_(rhizome.dot.literal_QMARK_(v))){
return ["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rhizome.dot.unwrap_literal(v)),"\""].join('');
} else {
return ["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",cljs.core.map.cljs$core$IFn$_invoke$arity$2(rhizome.dot.format_options_value,v)))),"\""].join('');
}
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(v);

}
}
}
}
});
rhizome.dot.format_label = (function rhizome$dot$format_label(label){
if(cljs.core.sequential_QMARK_(label)){
return rhizome.dot.__GT_literal(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" | ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34208_SHARP_){
return ["{ ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rhizome.dot.unwrap_literal((rhizome.dot.format_label.cljs$core$IFn$_invoke$arity$1 ? rhizome.dot.format_label.cljs$core$IFn$_invoke$arity$1(p1__34208_SHARP_) : rhizome.dot.format_label.call(null,p1__34208_SHARP_))))," }"].join('');
}),label))));
} else {
if(typeof label === 'string'){
return label;
} else {
if((label == null)){
return "";
} else {
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([label], 0));

}
}
}
});
rhizome.dot.format_options = (function rhizome$dot$format_options(m,separator){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(separator,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34210){
var vec__34211 = p__34210;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34211,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34211,(1),null);
return [cljs.core.name(k),"=",rhizome.dot.format_options_value(v)].join('');
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.second),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804)], null),(function (p1__34209_SHARP_){
if(cljs.core.truth_(p1__34209_SHARP_)){
return rhizome.dot.format_label(p1__34209_SHARP_);
} else {
return null;
}
}))))));
});
rhizome.dot.format_edge = (function rhizome$dot$format_edge(src,dst,p__34220){
var map__34221 = p__34220;
var map__34221__$1 = (((((!((map__34221 == null))))?(((((map__34221.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34221.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34221):map__34221);
var options = map__34221__$1;
var directed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34221__$1,new cljs.core.Keyword(null,"directed?","directed?",-323153830));
var options__$1 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804)], null),((function (map__34221,map__34221__$1,options,directed_QMARK_){
return (function (p1__34216_SHARP_){
var or__4131__auto__ = p1__34216_SHARP_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
});})(map__34221,map__34221__$1,options,directed_QMARK_))
);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(src),(cljs.core.truth_(directed_QMARK_)?" -> ":" -- "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(dst),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rhizome.dot.format_options(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(options__$1,new cljs.core.Keyword(null,"directed?","directed?",-323153830)),", ")),"]"].join('');
});
rhizome.dot.format_node = (function rhizome$dot$format_node(id,p__34235){
var map__34236 = p__34235;
var map__34236__$1 = (((((!((map__34236 == null))))?(((((map__34236.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34236.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34236):map__34236);
var options = map__34236__$1;
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34236__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34236__$1,new cljs.core.Keyword(null,"shape","shape",1190694006));
var shape__$1 = (function (){var or__4131__auto__ = shape;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.sequential_QMARK_(label)){
return new cljs.core.Keyword(null,"record","record",-779106859);
} else {
return null;
}
}
})();
var options__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(options,new cljs.core.Keyword(null,"label","label",1718410804),(function (){var or__4131__auto__ = label;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"shape","shape",1190694006),shape__$1], 0));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rhizome.dot.format_options(options__$1,", ")),"]"].join('');
});
rhizome.dot.format_rank = (function rhizome$dot$format_rank(ids){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,"{ rank=same; ",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(", ",ids),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["}"], null)));
});
rhizome.dot._STAR_node__GT_id_STAR_ = null;
rhizome.dot._STAR_cluster__GT_id_STAR_ = null;
rhizome.dot.node__GT_id = (function rhizome$dot$node__GT_id(n){
return (rhizome.dot._STAR_node__GT_id_STAR_.cljs$core$IFn$_invoke$arity$1 ? rhizome.dot._STAR_node__GT_id_STAR_.cljs$core$IFn$_invoke$arity$1(n) : rhizome.dot._STAR_node__GT_id_STAR_.call(null,n));
});
rhizome.dot.cluster__GT_id = (function rhizome$dot$cluster__GT_id(s){
return (rhizome.dot._STAR_cluster__GT_id_STAR_.cljs$core$IFn$_invoke$arity$1 ? rhizome.dot._STAR_cluster__GT_id_STAR_.cljs$core$IFn$_invoke$arity$1(s) : rhizome.dot._STAR_cluster__GT_id_STAR_.call(null,s));
});
rhizome.dot.clust__GT_nds = (function rhizome$dot$clust__GT_nds(f,nodes){
return cljs.core.reduce_kv((function (m,k,v){
var separated = cljs.core.zipmap(k,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,v)));
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(clojure.set.union,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([separated,m], 0));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.group_by(f,nodes),null));
});
/**
 * Takes a description of a graph, and returns a string describing a GraphViz dot file.
 * 
 * Requires two fields: `nodes`, which is a list of the nodes in the graph, and `adjacent`, which
 * is a function that takes a node and returns a list of adjacent nodes.
 */
rhizome.dot.graph__GT_dot = (function rhizome$dot$graph__GT_dot(var_args){
var args__4736__auto__ = [];
var len__4730__auto___34478 = arguments.length;
var i__4731__auto___34480 = (0);
while(true){
if((i__4731__auto___34480 < len__4730__auto___34478)){
args__4736__auto__.push((arguments[i__4731__auto___34480]));

var G__34481 = (i__4731__auto___34480 + (1));
i__4731__auto___34480 = G__34481;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return rhizome.dot.graph__GT_dot.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

rhizome.dot.graph__GT_dot.cljs$core$IFn$_invoke$arity$variadic = (function (nodes,adjacent,p__34312){
var map__34313 = p__34312;
var map__34313__$1 = (((((!((map__34313 == null))))?(((((map__34313.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34313.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34313):map__34313);
var graph_descriptor = map__34313__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34313__$1,new cljs.core.Keyword(null,"options","options",99638489));
var directed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34313__$1,new cljs.core.Keyword(null,"directed?","directed?",-323153830),true);
var cluster__GT_descriptor = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34313__$1,new cljs.core.Keyword(null,"cluster->descriptor","cluster->descriptor",-1433685113),cljs.core.constantly(null));
var cluster__GT_ranks = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34313__$1,new cljs.core.Keyword(null,"cluster->ranks","cluster->ranks",296694829),cljs.core.constantly(null));
var edge__GT_descriptor = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34313__$1,new cljs.core.Keyword(null,"edge->descriptor","edge->descriptor",-2146285457),cljs.core.constantly(null));
var cluster__GT_parent = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34313__$1,new cljs.core.Keyword(null,"cluster->parent","cluster->parent",1941927856),cljs.core.constantly(null));
var node__GT_descriptor = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34313__$1,new cljs.core.Keyword(null,"node->descriptor","node->descriptor",-1696154479),cljs.core.constantly(null));
var vertical_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34313__$1,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444),true);
var node__GT_clusters = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34313__$1,new cljs.core.Keyword(null,"node->clusters","node->clusters",-265377067),cljs.core.constantly(null));
var _STAR_node__GT_id_STAR__orig_val__34320 = rhizome.dot._STAR_node__GT_id_STAR_;
var _STAR_cluster__GT_id_STAR__orig_val__34321 = rhizome.dot._STAR_cluster__GT_id_STAR_;
var _STAR_node__GT_id_STAR__temp_val__34323 = (function (){var or__4131__auto__ = rhizome.dot._STAR_node__GT_id_STAR_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.memoize(((function (or__4131__auto__,_STAR_node__GT_id_STAR__orig_val__34320,_STAR_cluster__GT_id_STAR__orig_val__34321,map__34313,map__34313__$1,graph_descriptor,options,directed_QMARK_,cluster__GT_descriptor,cluster__GT_ranks,edge__GT_descriptor,cluster__GT_parent,node__GT_descriptor,vertical_QMARK_,node__GT_clusters){
return (function (_){
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("node");
});})(or__4131__auto__,_STAR_node__GT_id_STAR__orig_val__34320,_STAR_cluster__GT_id_STAR__orig_val__34321,map__34313,map__34313__$1,graph_descriptor,options,directed_QMARK_,cluster__GT_descriptor,cluster__GT_ranks,edge__GT_descriptor,cluster__GT_parent,node__GT_descriptor,vertical_QMARK_,node__GT_clusters))
);
}
})();
var _STAR_cluster__GT_id_STAR__temp_val__34324 = (function (){var or__4131__auto__ = rhizome.dot._STAR_cluster__GT_id_STAR_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.memoize(((function (or__4131__auto__,_STAR_node__GT_id_STAR__orig_val__34320,_STAR_cluster__GT_id_STAR__orig_val__34321,_STAR_node__GT_id_STAR__temp_val__34323,map__34313,map__34313__$1,graph_descriptor,options,directed_QMARK_,cluster__GT_descriptor,cluster__GT_ranks,edge__GT_descriptor,cluster__GT_parent,node__GT_descriptor,vertical_QMARK_,node__GT_clusters){
return (function (_){
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("cluster");
});})(or__4131__auto__,_STAR_node__GT_id_STAR__orig_val__34320,_STAR_cluster__GT_id_STAR__orig_val__34321,_STAR_node__GT_id_STAR__temp_val__34323,map__34313,map__34313__$1,graph_descriptor,options,directed_QMARK_,cluster__GT_descriptor,cluster__GT_ranks,edge__GT_descriptor,cluster__GT_parent,node__GT_descriptor,vertical_QMARK_,node__GT_clusters))
);
}
})();
rhizome.dot._STAR_node__GT_id_STAR_ = _STAR_node__GT_id_STAR__temp_val__34323;

rhizome.dot._STAR_cluster__GT_id_STAR_ = _STAR_cluster__GT_id_STAR__temp_val__34324;

try{var current_cluster = new cljs.core.Keyword("rhizome.dot","cluster","rhizome.dot/cluster",-748815582).cljs$core$IFn$_invoke$arity$1(graph_descriptor);
var subgraph_QMARK_ = cljs.core.boolean$(current_cluster);
var cluster__GT_nodes = (cljs.core.truth_(node__GT_clusters)?rhizome.dot.clust__GT_nds(node__GT_clusters,nodes):null);
var cluster_QMARK_ = (cljs.core.truth_(cluster__GT_nodes)?cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.boolean$,cluster__GT_nodes):cljs.core.constantly(false));
var node_QMARK_ = cljs.core.set(nodes);
var ranks = (cluster__GT_ranks.cljs$core$IFn$_invoke$arity$1 ? cluster__GT_ranks.cljs$core$IFn$_invoke$arity$1(current_cluster) : cluster__GT_ranks.call(null,current_cluster));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.str,(cljs.core.truth_(current_cluster)?["subgraph ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rhizome.dot.cluster__GT_id(current_cluster))].join(''):(cljs.core.truth_(directed_QMARK_)?"digraph":"graph"))," {\n",(function (){var edge_options = new cljs.core.Keyword(null,"edge","edge",919909153).cljs$core$IFn$_invoke$arity$1(options);
var node_options = new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(options);
return ["graph[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rhizome.dot.format_options(rhizome.dot.translate_options(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rhizome.dot.default_options,options], 0)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fontname","fontname",-1891838675)], null),((function (edge_options,node_options,current_cluster,subgraph_QMARK_,cluster__GT_nodes,cluster_QMARK_,node_QMARK_,ranks,_STAR_node__GT_id_STAR__orig_val__34320,_STAR_cluster__GT_id_STAR__orig_val__34321,_STAR_node__GT_id_STAR__temp_val__34323,_STAR_cluster__GT_id_STAR__temp_val__34324,map__34313,map__34313__$1,graph_descriptor,options,directed_QMARK_,cluster__GT_descriptor,cluster__GT_ranks,edge__GT_descriptor,cluster__GT_parent,node__GT_descriptor,vertical_QMARK_,node__GT_clusters){
return (function (p1__34284_SHARP_){
var or__4131__auto__ = p1__34284_SHARP_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(subgraph_QMARK_){
return "Monospace";
} else {
return null;
}
}
});})(edge_options,node_options,current_cluster,subgraph_QMARK_,cluster__GT_nodes,cluster_QMARK_,node_QMARK_,ranks,_STAR_node__GT_id_STAR__orig_val__34320,_STAR_cluster__GT_id_STAR__orig_val__34321,_STAR_node__GT_id_STAR__temp_val__34323,_STAR_cluster__GT_id_STAR__temp_val__34324,map__34313,map__34313__$1,graph_descriptor,options,directed_QMARK_,cluster__GT_descriptor,cluster__GT_ranks,edge__GT_descriptor,cluster__GT_parent,node__GT_descriptor,vertical_QMARK_,node__GT_clusters))
),new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444),vertical_QMARK_),new cljs.core.Keyword(null,"edge","edge",919909153),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"node","node",581201198)], 0))),", ")),"]\n","node[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rhizome.dot.format_options(rhizome.dot.translate_options(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(node_options,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fontname","fontname",-1891838675)], null),((function (edge_options,node_options,current_cluster,subgraph_QMARK_,cluster__GT_nodes,cluster_QMARK_,node_QMARK_,ranks,_STAR_node__GT_id_STAR__orig_val__34320,_STAR_cluster__GT_id_STAR__orig_val__34321,_STAR_node__GT_id_STAR__temp_val__34323,_STAR_cluster__GT_id_STAR__temp_val__34324,map__34313,map__34313__$1,graph_descriptor,options,directed_QMARK_,cluster__GT_descriptor,cluster__GT_ranks,edge__GT_descriptor,cluster__GT_parent,node__GT_descriptor,vertical_QMARK_,node__GT_clusters){
return (function (p1__34285_SHARP_){
var or__4131__auto__ = p1__34285_SHARP_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "Monospace";
}
});})(edge_options,node_options,current_cluster,subgraph_QMARK_,cluster__GT_nodes,cluster_QMARK_,node_QMARK_,ranks,_STAR_node__GT_id_STAR__orig_val__34320,_STAR_cluster__GT_id_STAR__orig_val__34321,_STAR_node__GT_id_STAR__temp_val__34323,_STAR_cluster__GT_id_STAR__temp_val__34324,map__34313,map__34313__$1,graph_descriptor,options,directed_QMARK_,cluster__GT_descriptor,cluster__GT_ranks,edge__GT_descriptor,cluster__GT_parent,node__GT_descriptor,vertical_QMARK_,node__GT_clusters))
)),", ")),"]\n","edge[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rhizome.dot.format_options(rhizome.dot.translate_options(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(edge_options,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fontname","fontname",-1891838675)], null),((function (edge_options,node_options,current_cluster,subgraph_QMARK_,cluster__GT_nodes,cluster_QMARK_,node_QMARK_,ranks,_STAR_node__GT_id_STAR__orig_val__34320,_STAR_cluster__GT_id_STAR__orig_val__34321,_STAR_node__GT_id_STAR__temp_val__34323,_STAR_cluster__GT_id_STAR__temp_val__34324,map__34313,map__34313__$1,graph_descriptor,options,directed_QMARK_,cluster__GT_descriptor,cluster__GT_ranks,edge__GT_descriptor,cluster__GT_parent,node__GT_descriptor,vertical_QMARK_,node__GT_clusters){
return (function (p1__34289_SHARP_){
var or__4131__auto__ = p1__34289_SHARP_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "Monospace";
}
});})(edge_options,node_options,current_cluster,subgraph_QMARK_,cluster__GT_nodes,cluster_QMARK_,node_QMARK_,ranks,_STAR_node__GT_id_STAR__orig_val__34320,_STAR_cluster__GT_id_STAR__orig_val__34321,_STAR_node__GT_id_STAR__temp_val__34323,_STAR_cluster__GT_id_STAR__temp_val__34324,map__34313,map__34313__$1,graph_descriptor,options,directed_QMARK_,cluster__GT_descriptor,cluster__GT_ranks,edge__GT_descriptor,cluster__GT_parent,node__GT_descriptor,vertical_QMARK_,node__GT_clusters))
)),", ")),"]\n\n"].join('');
})(),cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (current_cluster,subgraph_QMARK_,cluster__GT_nodes,cluster_QMARK_,node_QMARK_,ranks,_STAR_node__GT_id_STAR__orig_val__34320,_STAR_cluster__GT_id_STAR__orig_val__34321,_STAR_node__GT_id_STAR__temp_val__34323,_STAR_cluster__GT_id_STAR__temp_val__34324,map__34313,map__34313__$1,graph_descriptor,options,directed_QMARK_,cluster__GT_descriptor,cluster__GT_ranks,edge__GT_descriptor,cluster__GT_parent,node__GT_descriptor,vertical_QMARK_,node__GT_clusters){
return (function (p1__34293_SHARP_){
return rhizome.dot.format_node(rhizome.dot.node__GT_id(p1__34293_SHARP_),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rhizome.dot.default_node_options,(node__GT_descriptor.cljs$core$IFn$_invoke$arity$1 ? node__GT_descriptor.cljs$core$IFn$_invoke$arity$1(p1__34293_SHARP_) : node__GT_descriptor.call(null,p1__34293_SHARP_))], 0)));
});})(current_cluster,subgraph_QMARK_,cluster__GT_nodes,cluster_QMARK_,node_QMARK_,ranks,_STAR_node__GT_id_STAR__orig_val__34320,_STAR_cluster__GT_id_STAR__orig_val__34321,_STAR_node__GT_id_STAR__temp_val__34323,_STAR_cluster__GT_id_STAR__temp_val__34324,map__34313,map__34313__$1,graph_descriptor,options,directed_QMARK_,cluster__GT_descriptor,cluster__GT_ranks,edge__GT_descriptor,cluster__GT_parent,node__GT_descriptor,vertical_QMARK_,node__GT_clusters))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (current_cluster,subgraph_QMARK_,cluster__GT_nodes,cluster_QMARK_,node_QMARK_,ranks,_STAR_node__GT_id_STAR__orig_val__34320,_STAR_cluster__GT_id_STAR__orig_val__34321,_STAR_node__GT_id_STAR__temp_val__34323,_STAR_cluster__GT_id_STAR__temp_val__34324,map__34313,map__34313__$1,graph_descriptor,options,directed_QMARK_,cluster__GT_descriptor,cluster__GT_ranks,edge__GT_descriptor,cluster__GT_parent,node__GT_descriptor,vertical_QMARK_,node__GT_clusters){
return (function (p1__34291_SHARP_){
if(cljs.core.truth_(current_cluster)){
return (!(cljs.core.contains_QMARK_((node__GT_clusters.cljs$core$IFn$_invoke$arity$1 ? node__GT_clusters.cljs$core$IFn$_invoke$arity$1(p1__34291_SHARP_) : node__GT_clusters.call(null,p1__34291_SHARP_)),current_cluster)));
} else {
return false;
}
});})(current_cluster,subgraph_QMARK_,cluster__GT_nodes,cluster_QMARK_,node_QMARK_,ranks,_STAR_node__GT_id_STAR__orig_val__34320,_STAR_cluster__GT_id_STAR__orig_val__34321,_STAR_node__GT_id_STAR__temp_val__34323,_STAR_cluster__GT_id_STAR__temp_val__34324,map__34313,map__34313__$1,graph_descriptor,options,directed_QMARK_,cluster__GT_descriptor,cluster__GT_ranks,edge__GT_descriptor,cluster__GT_parent,node__GT_descriptor,vertical_QMARK_,node__GT_clusters))
,nodes)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (current_cluster,subgraph_QMARK_,cluster__GT_nodes,cluster_QMARK_,node_QMARK_,ranks,_STAR_node__GT_id_STAR__orig_val__34320,_STAR_cluster__GT_id_STAR__orig_val__34321,_STAR_node__GT_id_STAR__temp_val__34323,_STAR_cluster__GT_id_STAR__temp_val__34324,map__34313,map__34313__$1,graph_descriptor,options,directed_QMARK_,cluster__GT_descriptor,cluster__GT_ranks,edge__GT_descriptor,cluster__GT_parent,node__GT_descriptor,vertical_QMARK_,node__GT_clusters){
return (function (r){
return rhizome.dot.format_rank(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(rhizome.dot._STAR_node__GT_id_STAR_,r));
});})(current_cluster,subgraph_QMARK_,cluster__GT_nodes,cluster_QMARK_,node_QMARK_,ranks,_STAR_node__GT_id_STAR__orig_val__34320,_STAR_cluster__GT_id_STAR__orig_val__34321,_STAR_node__GT_id_STAR__temp_val__34323,_STAR_cluster__GT_id_STAR__temp_val__34324,map__34313,map__34313__$1,graph_descriptor,options,directed_QMARK_,cluster__GT_descriptor,cluster__GT_ranks,edge__GT_descriptor,cluster__GT_parent,node__GT_descriptor,vertical_QMARK_,node__GT_clusters))
,ranks),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (current_cluster,subgraph_QMARK_,cluster__GT_nodes,cluster_QMARK_,node_QMARK_,ranks,_STAR_node__GT_id_STAR__orig_val__34320,_STAR_cluster__GT_id_STAR__orig_val__34321,_STAR_node__GT_id_STAR__temp_val__34323,_STAR_cluster__GT_id_STAR__temp_val__34324,map__34313,map__34313__$1,graph_descriptor,options,directed_QMARK_,cluster__GT_descriptor,cluster__GT_ranks,edge__GT_descriptor,cluster__GT_parent,node__GT_descriptor,vertical_QMARK_,node__GT_clusters){
return (function (p1__34296_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(rhizome.dot.graph__GT_dot,nodes,adjacent,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(graph_descriptor,new cljs.core.Keyword("rhizome.dot","cluster","rhizome.dot/cluster",-748815582),p1__34296_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),(cluster__GT_descriptor.cljs$core$IFn$_invoke$arity$1 ? cluster__GT_descriptor.cljs$core$IFn$_invoke$arity$1(p1__34296_SHARP_) : cluster__GT_descriptor.call(null,p1__34296_SHARP_))], 0))));
});})(current_cluster,subgraph_QMARK_,cluster__GT_nodes,cluster_QMARK_,node_QMARK_,ranks,_STAR_node__GT_id_STAR__orig_val__34320,_STAR_cluster__GT_id_STAR__orig_val__34321,_STAR_node__GT_id_STAR__temp_val__34323,_STAR_cluster__GT_id_STAR__temp_val__34324,map__34313,map__34313__$1,graph_descriptor,options,directed_QMARK_,cluster__GT_descriptor,cluster__GT_ranks,edge__GT_descriptor,cluster__GT_parent,node__GT_descriptor,vertical_QMARK_,node__GT_clusters))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (current_cluster,subgraph_QMARK_,cluster__GT_nodes,cluster_QMARK_,node_QMARK_,ranks,_STAR_node__GT_id_STAR__orig_val__34320,_STAR_cluster__GT_id_STAR__orig_val__34321,_STAR_node__GT_id_STAR__temp_val__34323,_STAR_cluster__GT_id_STAR__temp_val__34324,map__34313,map__34313__$1,graph_descriptor,options,directed_QMARK_,cluster__GT_descriptor,cluster__GT_ranks,edge__GT_descriptor,cluster__GT_parent,node__GT_descriptor,vertical_QMARK_,node__GT_clusters){
return (function (p1__34294_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_cluster,(cluster__GT_parent.cljs$core$IFn$_invoke$arity$1 ? cluster__GT_parent.cljs$core$IFn$_invoke$arity$1(p1__34294_SHARP_) : cluster__GT_parent.call(null,p1__34294_SHARP_)));
});})(current_cluster,subgraph_QMARK_,cluster__GT_nodes,cluster_QMARK_,node_QMARK_,ranks,_STAR_node__GT_id_STAR__orig_val__34320,_STAR_cluster__GT_id_STAR__orig_val__34321,_STAR_node__GT_id_STAR__temp_val__34323,_STAR_cluster__GT_id_STAR__temp_val__34324,map__34313,map__34313__$1,graph_descriptor,options,directed_QMARK_,cluster__GT_descriptor,cluster__GT_ranks,edge__GT_descriptor,cluster__GT_parent,node__GT_descriptor,vertical_QMARK_,node__GT_clusters))
,cljs.core.keys(cluster__GT_nodes))),((subgraph_QMARK_)?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (current_cluster,subgraph_QMARK_,cluster__GT_nodes,cluster_QMARK_,node_QMARK_,ranks,_STAR_node__GT_id_STAR__orig_val__34320,_STAR_cluster__GT_id_STAR__orig_val__34321,_STAR_node__GT_id_STAR__temp_val__34323,_STAR_cluster__GT_id_STAR__temp_val__34324,map__34313,map__34313__$1,graph_descriptor,options,directed_QMARK_,cluster__GT_descriptor,cluster__GT_ranks,edge__GT_descriptor,cluster__GT_parent,node__GT_descriptor,vertical_QMARK_,node__GT_clusters){
return (function (p__34365){
var vec__34366 = p__34365;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34366,(0),null);
var vec__34369 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34366,(1),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34369,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34369,(1),null);
var descriptor = (edge__GT_descriptor.cljs$core$IFn$_invoke$arity$2 ? edge__GT_descriptor.cljs$core$IFn$_invoke$arity$2(a,b) : edge__GT_descriptor.call(null,a,b));
var format = ((function (descriptor,vec__34366,a,vec__34369,type,b,current_cluster,subgraph_QMARK_,cluster__GT_nodes,cluster_QMARK_,node_QMARK_,ranks,_STAR_node__GT_id_STAR__orig_val__34320,_STAR_cluster__GT_id_STAR__orig_val__34321,_STAR_node__GT_id_STAR__temp_val__34323,_STAR_cluster__GT_id_STAR__temp_val__34324,map__34313,map__34313__$1,graph_descriptor,options,directed_QMARK_,cluster__GT_descriptor,cluster__GT_ranks,edge__GT_descriptor,cluster__GT_parent,node__GT_descriptor,vertical_QMARK_,node__GT_clusters){
return (function (p1__34302_SHARP_){
return rhizome.dot.format_edge(rhizome.dot.node__GT_id(a),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"node","node",581201198),type))?rhizome.dot.node__GT_id(b):rhizome.dot.cluster__GT_id(b)),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rhizome.dot.default_edge_options,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"directed?","directed?",-323153830),directed_QMARK_], null),p1__34302_SHARP_], 0)));
});})(descriptor,vec__34366,a,vec__34369,type,b,current_cluster,subgraph_QMARK_,cluster__GT_nodes,cluster_QMARK_,node_QMARK_,ranks,_STAR_node__GT_id_STAR__orig_val__34320,_STAR_cluster__GT_id_STAR__orig_val__34321,_STAR_node__GT_id_STAR__temp_val__34323,_STAR_cluster__GT_id_STAR__temp_val__34324,map__34313,map__34313__$1,graph_descriptor,options,directed_QMARK_,cluster__GT_descriptor,cluster__GT_ranks,edge__GT_descriptor,cluster__GT_parent,node__GT_descriptor,vertical_QMARK_,node__GT_clusters))
;
if(cljs.core.vector_QMARK_(descriptor)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2(format,descriptor)));
} else {
return format(descriptor);
}
});})(current_cluster,subgraph_QMARK_,cluster__GT_nodes,cluster_QMARK_,node_QMARK_,ranks,_STAR_node__GT_id_STAR__orig_val__34320,_STAR_cluster__GT_id_STAR__orig_val__34321,_STAR_node__GT_id_STAR__temp_val__34323,_STAR_cluster__GT_id_STAR__temp_val__34324,map__34313,map__34313__$1,graph_descriptor,options,directed_QMARK_,cluster__GT_descriptor,cluster__GT_ranks,edge__GT_descriptor,cluster__GT_parent,node__GT_descriptor,vertical_QMARK_,node__GT_clusters))
,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (current_cluster,subgraph_QMARK_,cluster__GT_nodes,cluster_QMARK_,node_QMARK_,ranks,_STAR_node__GT_id_STAR__orig_val__34320,_STAR_cluster__GT_id_STAR__orig_val__34321,_STAR_node__GT_id_STAR__temp_val__34323,_STAR_cluster__GT_id_STAR__temp_val__34324,map__34313,map__34313__$1,graph_descriptor,options,directed_QMARK_,cluster__GT_descriptor,cluster__GT_ranks,edge__GT_descriptor,cluster__GT_parent,node__GT_descriptor,vertical_QMARK_,node__GT_clusters){
return (function (node){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(node),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (current_cluster,subgraph_QMARK_,cluster__GT_nodes,cluster_QMARK_,node_QMARK_,ranks,_STAR_node__GT_id_STAR__orig_val__34320,_STAR_cluster__GT_id_STAR__orig_val__34321,_STAR_node__GT_id_STAR__temp_val__34323,_STAR_cluster__GT_id_STAR__temp_val__34324,map__34313,map__34313__$1,graph_descriptor,options,directed_QMARK_,cluster__GT_descriptor,cluster__GT_ranks,edge__GT_descriptor,cluster__GT_parent,node__GT_descriptor,vertical_QMARK_,node__GT_clusters){
return (function (p1__34299_SHARP_){
if(cljs.core.truth_((node_QMARK_.cljs$core$IFn$_invoke$arity$1 ? node_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__34299_SHARP_) : node_QMARK_.call(null,p1__34299_SHARP_)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node","node",581201198),p1__34299_SHARP_], null);
} else {
if(cljs.core.truth_((cluster_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cluster_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__34299_SHARP_) : cluster_QMARK_.call(null,p1__34299_SHARP_)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cluster","cluster",535175621),p1__34299_SHARP_], null);
} else {
return null;

}
}
});})(current_cluster,subgraph_QMARK_,cluster__GT_nodes,cluster_QMARK_,node_QMARK_,ranks,_STAR_node__GT_id_STAR__orig_val__34320,_STAR_cluster__GT_id_STAR__orig_val__34321,_STAR_node__GT_id_STAR__temp_val__34323,_STAR_cluster__GT_id_STAR__temp_val__34324,map__34313,map__34313__$1,graph_descriptor,options,directed_QMARK_,cluster__GT_descriptor,cluster__GT_ranks,edge__GT_descriptor,cluster__GT_parent,node__GT_descriptor,vertical_QMARK_,node__GT_clusters))
,(adjacent.cljs$core$IFn$_invoke$arity$1 ? adjacent.cljs$core$IFn$_invoke$arity$1(node) : adjacent.call(null,node)))));
});})(current_cluster,subgraph_QMARK_,cluster__GT_nodes,cluster_QMARK_,node_QMARK_,ranks,_STAR_node__GT_id_STAR__orig_val__34320,_STAR_cluster__GT_id_STAR__orig_val__34321,_STAR_node__GT_id_STAR__temp_val__34323,_STAR_cluster__GT_id_STAR__temp_val__34324,map__34313,map__34313__$1,graph_descriptor,options,directed_QMARK_,cluster__GT_descriptor,cluster__GT_ranks,edge__GT_descriptor,cluster__GT_parent,node__GT_descriptor,vertical_QMARK_,node__GT_clusters))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nodes], 0)))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["}\n"], null)], 0))));
}finally {rhizome.dot._STAR_cluster__GT_id_STAR_ = _STAR_cluster__GT_id_STAR__orig_val__34321;

rhizome.dot._STAR_node__GT_id_STAR_ = _STAR_node__GT_id_STAR__orig_val__34320;
}});

rhizome.dot.graph__GT_dot.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
rhizome.dot.graph__GT_dot.cljs$lang$applyTo = (function (seq34304){
var G__34305 = cljs.core.first(seq34304);
var seq34304__$1 = cljs.core.next(seq34304);
var G__34306 = cljs.core.first(seq34304__$1);
var seq34304__$2 = cljs.core.next(seq34304__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34305,G__34306,seq34304__$2);
});


//# sourceMappingURL=rhizome.dot.js.map
