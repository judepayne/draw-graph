// Compiled by ClojureScript 1.10.520 {}
goog.provide('rhizome.dot');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.set');
rhizome.dot.escapable_characters = "\\|{}\"";
/**
 * Escape characters that are significant for the dot format.
 */
rhizome.dot.escape_string = (function rhizome$dot$escape_string(s){
return cljs.core.reduce.call(null,(function (p1__38188_SHARP_,p2__38189_SHARP_){
return clojure.string.replace.call(null,p1__38188_SHARP_,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__38189_SHARP_),["\\",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__38189_SHARP_)].join(''));
}),s,rhizome.dot.escapable_characters);
});
rhizome.dot.default_options = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dpi","dpi",-986162832),(100)], null);
rhizome.dot.default_node_options = cljs.core.PersistentArrayMap.EMPTY;
rhizome.dot.default_edge_options = cljs.core.PersistentArrayMap.EMPTY;
rhizome.dot.option_translations = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rankdir","rankdir",-2029540135),new cljs.core.PersistentArrayMap(null, 2, [true,new cljs.core.Keyword(null,"TP","TP",163239233),false,new cljs.core.Keyword(null,"LR","LR",341359911)], null)], null)], null);
rhizome.dot.translate_options = (function rhizome$dot$translate_options(m){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,(function (p__38190){
var vec__38191 = p__38190;
var k = cljs.core.nth.call(null,vec__38191,(0),null);
var v = cljs.core.nth.call(null,vec__38191,(1),null);
var temp__5718__auto__ = rhizome.dot.option_translations.call(null,k);
if(cljs.core.truth_(temp__5718__auto__)){
var vec__38194 = temp__5718__auto__;
var k_STAR_ = cljs.core.nth.call(null,vec__38194,(0),null);
var f = cljs.core.nth.call(null,vec__38194,(1),null);
if(cljs.core.contains_QMARK_.call(null,m,k_STAR_)){
return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_STAR_,f.call(null,v)], null);
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
return new cljs.core.Keyword("rhizome.dot","literal","rhizome.dot/literal",-405662190).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,x));
});
rhizome.dot.unwrap_literal = (function rhizome$dot$unwrap_literal(x){
if(cljs.core.truth_(rhizome.dot.literal_QMARK_.call(null,x))){
return cljs.core.first.call(null,x);
} else {
return x;
}
});
rhizome.dot.format_options_value = (function rhizome$dot$format_options_value(v){
var v_str = cljs.core.str.cljs$core$IFn$_invoke$arity$1(v);
if(clojure.string.starts_with_QMARK_.call(null,v_str,"<<")){
return v_str;
} else {
if(typeof v === 'string'){
return ["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rhizome.dot.escape_string.call(null,v)),"\""].join('');
} else {
if((v instanceof cljs.core.Keyword)){
return cljs.core.name.call(null,v);
} else {
if(cljs.core.coll_QMARK_.call(null,v)){
if(cljs.core.truth_(rhizome.dot.literal_QMARK_.call(null,v))){
return ["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rhizome.dot.unwrap_literal.call(null,v)),"\""].join('');
} else {
return ["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",cljs.core.map.call(null,rhizome.dot.format_options_value,v)))),"\""].join('');
}
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(v);

}
}
}
}
});
rhizome.dot.format_label = (function rhizome$dot$format_label(label){
if(cljs.core.sequential_QMARK_.call(null,label)){
return rhizome.dot.__GT_literal.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," | ",cljs.core.map.call(null,(function (p1__38197_SHARP_){
return ["{ ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rhizome.dot.unwrap_literal.call(null,rhizome.dot.format_label.call(null,p1__38197_SHARP_)))," }"].join('');
}),label))));
} else {
if(typeof label === 'string'){
return label;
} else {
if((label == null)){
return "";
} else {
return cljs.core.pr_str.call(null,label);

}
}
}
});
rhizome.dot.format_options = (function rhizome$dot$format_options(m,separator){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,separator,cljs.core.map.call(null,(function (p__38199){
var vec__38200 = p__38199;
var k = cljs.core.nth.call(null,vec__38200,(0),null);
var v = cljs.core.nth.call(null,vec__38200,(1),null);
return [cljs.core.name.call(null,k),"=",rhizome.dot.format_options_value.call(null,v)].join('');
}),cljs.core.remove.call(null,cljs.core.comp.call(null,cljs.core.nil_QMARK_,cljs.core.second),cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804)], null),(function (p1__38198_SHARP_){
if(cljs.core.truth_(p1__38198_SHARP_)){
return rhizome.dot.format_label.call(null,p1__38198_SHARP_);
} else {
return null;
}
}))))));
});
rhizome.dot.format_edge = (function rhizome$dot$format_edge(src,dst,p__38204){
var map__38205 = p__38204;
var map__38205__$1 = (((((!((map__38205 == null))))?(((((map__38205.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38205.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38205):map__38205);
var options = map__38205__$1;
var directed_QMARK_ = cljs.core.get.call(null,map__38205__$1,new cljs.core.Keyword(null,"directed?","directed?",-323153830));
var options__$1 = cljs.core.update_in.call(null,options,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804)], null),((function (map__38205,map__38205__$1,options,directed_QMARK_){
return (function (p1__38203_SHARP_){
var or__4131__auto__ = p1__38203_SHARP_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
});})(map__38205,map__38205__$1,options,directed_QMARK_))
);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(src),(cljs.core.truth_(directed_QMARK_)?" -> ":" -- "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(dst),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rhizome.dot.format_options.call(null,cljs.core.dissoc.call(null,options__$1,new cljs.core.Keyword(null,"directed?","directed?",-323153830)),", ")),"]"].join('');
});
rhizome.dot.format_node = (function rhizome$dot$format_node(id,p__38207){
var map__38208 = p__38207;
var map__38208__$1 = (((((!((map__38208 == null))))?(((((map__38208.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38208.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38208):map__38208);
var options = map__38208__$1;
var label = cljs.core.get.call(null,map__38208__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var shape = cljs.core.get.call(null,map__38208__$1,new cljs.core.Keyword(null,"shape","shape",1190694006));
var shape__$1 = (function (){var or__4131__auto__ = shape;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.sequential_QMARK_.call(null,label)){
return new cljs.core.Keyword(null,"record","record",-779106859);
} else {
return null;
}
}
})();
var options__$1 = cljs.core.assoc.call(null,options,new cljs.core.Keyword(null,"label","label",1718410804),(function (){var or__4131__auto__ = label;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"shape","shape",1190694006),shape__$1);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rhizome.dot.format_options.call(null,options__$1,", ")),"]"].join('');
});
rhizome.dot.format_rank = (function rhizome$dot$format_rank(ids){
return cljs.core.apply.call(null,cljs.core.str,"{ rank=same; ",cljs.core.concat.call(null,cljs.core.interpose.call(null,", ",ids),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["}"], null)));
});
rhizome.dot._STAR_node__GT_id_STAR_ = null;
rhizome.dot._STAR_cluster__GT_id_STAR_ = null;
rhizome.dot.node__GT_id = (function rhizome$dot$node__GT_id(n){
return rhizome.dot._STAR_node__GT_id_STAR_.call(null,n);
});
rhizome.dot.cluster__GT_id = (function rhizome$dot$cluster__GT_id(s){
return rhizome.dot._STAR_cluster__GT_id_STAR_.call(null,s);
});
rhizome.dot.clust__GT_nds = (function rhizome$dot$clust__GT_nds(f,nodes){
return cljs.core.reduce_kv.call(null,(function (m,k,v){
var separated = cljs.core.zipmap.call(null,k,cljs.core.repeat.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v)));
return cljs.core.merge_with.call(null,clojure.set.union,separated,m);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.dissoc.call(null,cljs.core.group_by.call(null,f,nodes),null));
});
/**
 * Takes a description of a graph, and returns a string describing a GraphViz dot file.
 * 
 * Requires two fields: `nodes`, which is a list of the nodes in the graph, and `adjacent`, which
 * is a function that takes a node and returns a list of adjacent nodes.
 */
rhizome.dot.graph__GT_dot = (function rhizome$dot$graph__GT_dot(var_args){
var args__4736__auto__ = [];
var len__4730__auto___38236 = arguments.length;
var i__4731__auto___38237 = (0);
while(true){
if((i__4731__auto___38237 < len__4730__auto___38236)){
args__4736__auto__.push((arguments[i__4731__auto___38237]));

var G__38238 = (i__4731__auto___38237 + (1));
i__4731__auto___38237 = G__38238;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return rhizome.dot.graph__GT_dot.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

rhizome.dot.graph__GT_dot.cljs$core$IFn$_invoke$arity$variadic = (function (nodes,adjacent,p__38222){
var map__38223 = p__38222;
var map__38223__$1 = (((((!((map__38223 == null))))?(((((map__38223.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38223.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38223):map__38223);
var graph_descriptor = map__38223__$1;
var options = cljs.core.get.call(null,map__38223__$1,new cljs.core.Keyword(null,"options","options",99638489));
var directed_QMARK_ = cljs.core.get.call(null,map__38223__$1,new cljs.core.Keyword(null,"directed?","directed?",-323153830),true);
var cluster__GT_descriptor = cljs.core.get.call(null,map__38223__$1,new cljs.core.Keyword(null,"cluster->descriptor","cluster->descriptor",-1433685113),cljs.core.constantly.call(null,null));
var cluster__GT_ranks = cljs.core.get.call(null,map__38223__$1,new cljs.core.Keyword(null,"cluster->ranks","cluster->ranks",296694829),cljs.core.constantly.call(null,null));
var edge__GT_descriptor = cljs.core.get.call(null,map__38223__$1,new cljs.core.Keyword(null,"edge->descriptor","edge->descriptor",-2146285457),cljs.core.constantly.call(null,null));
var cluster__GT_parent = cljs.core.get.call(null,map__38223__$1,new cljs.core.Keyword(null,"cluster->parent","cluster->parent",1941927856),cljs.core.constantly.call(null,null));
var node__GT_descriptor = cljs.core.get.call(null,map__38223__$1,new cljs.core.Keyword(null,"node->descriptor","node->descriptor",-1696154479),cljs.core.constantly.call(null,null));
var vertical_QMARK_ = cljs.core.get.call(null,map__38223__$1,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444),true);
var node__GT_clusters = cljs.core.get.call(null,map__38223__$1,new cljs.core.Keyword(null,"node->clusters","node->clusters",-265377067),cljs.core.constantly.call(null,null));
var _STAR_node__GT_id_STAR__orig_val__38225 = rhizome.dot._STAR_node__GT_id_STAR_;
var _STAR_cluster__GT_id_STAR__orig_val__38226 = rhizome.dot._STAR_cluster__GT_id_STAR_;
var _STAR_node__GT_id_STAR__temp_val__38227 = (function (){var or__4131__auto__ = rhizome.dot._STAR_node__GT_id_STAR_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.memoize.call(null,((function (or__4131__auto__,_STAR_node__GT_id_STAR__orig_val__38225,_STAR_cluster__GT_id_STAR__orig_val__38226,map__38223,map__38223__$1,graph_descriptor,options,directed_QMARK_,cluster__GT_descriptor,cluster__GT_ranks,edge__GT_descriptor,cluster__GT_parent,node__GT_descriptor,vertical_QMARK_,node__GT_clusters){
return (function (_){
return cljs.core.gensym.call(null,"node");
});})(or__4131__auto__,_STAR_node__GT_id_STAR__orig_val__38225,_STAR_cluster__GT_id_STAR__orig_val__38226,map__38223,map__38223__$1,graph_descriptor,options,directed_QMARK_,cluster__GT_descriptor,cluster__GT_ranks,edge__GT_descriptor,cluster__GT_parent,node__GT_descriptor,vertical_QMARK_,node__GT_clusters))
);
}
})();
var _STAR_cluster__GT_id_STAR__temp_val__38228 = (function (){var or__4131__auto__ = rhizome.dot._STAR_cluster__GT_id_STAR_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.memoize.call(null,((function (or__4131__auto__,_STAR_node__GT_id_STAR__orig_val__38225,_STAR_cluster__GT_id_STAR__orig_val__38226,_STAR_node__GT_id_STAR__temp_val__38227,map__38223,map__38223__$1,graph_descriptor,options,directed_QMARK_,cluster__GT_descriptor,cluster__GT_ranks,edge__GT_descriptor,cluster__GT_parent,node__GT_descriptor,vertical_QMARK_,node__GT_clusters){
return (function (_){
return cljs.core.gensym.call(null,"cluster");
});})(or__4131__auto__,_STAR_node__GT_id_STAR__orig_val__38225,_STAR_cluster__GT_id_STAR__orig_val__38226,_STAR_node__GT_id_STAR__temp_val__38227,map__38223,map__38223__$1,graph_descriptor,options,directed_QMARK_,cluster__GT_descriptor,cluster__GT_ranks,edge__GT_descriptor,cluster__GT_parent,node__GT_descriptor,vertical_QMARK_,node__GT_clusters))
);
}
})();
rhizome.dot._STAR_node__GT_id_STAR_ = _STAR_node__GT_id_STAR__temp_val__38227;

rhizome.dot._STAR_cluster__GT_id_STAR_ = _STAR_cluster__GT_id_STAR__temp_val__38228;

try{var current_cluster = new cljs.core.Keyword("rhizome.dot","cluster","rhizome.dot/cluster",-748815582).cljs$core$IFn$_invoke$arity$1(graph_descriptor);
var subgraph_QMARK_ = cljs.core.boolean$.call(null,current_cluster);
var cluster__GT_nodes = (cljs.core.truth_(node__GT_clusters)?rhizome.dot.clust__GT_nds.call(null,node__GT_clusters,nodes):null);
var cluster_QMARK_ = (cljs.core.truth_(cluster__GT_nodes)?cljs.core.comp.call(null,cljs.core.boolean$,cluster__GT_nodes):cljs.core.constantly.call(null,false));
var node_QMARK_ = cljs.core.set.call(null,nodes);
var ranks = cluster__GT_ranks.call(null,current_cluster);
return cljs.core.apply.call(null,cljs.core.str,(cljs.core.truth_(current_cluster)?["subgraph ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rhizome.dot.cluster__GT_id.call(null,current_cluster))].join(''):(cljs.core.truth_(directed_QMARK_)?"digraph":"graph"))," {\n",(function (){var edge_options = new cljs.core.Keyword(null,"edge","edge",919909153).cljs$core$IFn$_invoke$arity$1(options);
var node_options = new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(options);
return ["graph[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rhizome.dot.format_options.call(null,rhizome.dot.translate_options.call(null,cljs.core.dissoc.call(null,cljs.core.assoc.call(null,cljs.core.update_in.call(null,cljs.core.merge.call(null,rhizome.dot.default_options,options),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fontname","fontname",-1891838675)], null),((function (edge_options,node_options,current_cluster,subgraph_QMARK_,cluster__GT_nodes,cluster_QMARK_,node_QMARK_,ranks,_STAR_node__GT_id_STAR__orig_val__38225,_STAR_cluster__GT_id_STAR__orig_val__38226,_STAR_node__GT_id_STAR__temp_val__38227,_STAR_cluster__GT_id_STAR__temp_val__38228,map__38223,map__38223__$1,graph_descriptor,options,directed_QMARK_,cluster__GT_descriptor,cluster__GT_ranks,edge__GT_descriptor,cluster__GT_parent,node__GT_descriptor,vertical_QMARK_,node__GT_clusters){
return (function (p1__38210_SHARP_){
var or__4131__auto__ = p1__38210_SHARP_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(subgraph_QMARK_){
return "Monospace";
} else {
return null;
}
}
});})(edge_options,node_options,current_cluster,subgraph_QMARK_,cluster__GT_nodes,cluster_QMARK_,node_QMARK_,ranks,_STAR_node__GT_id_STAR__orig_val__38225,_STAR_cluster__GT_id_STAR__orig_val__38226,_STAR_node__GT_id_STAR__temp_val__38227,_STAR_cluster__GT_id_STAR__temp_val__38228,map__38223,map__38223__$1,graph_descriptor,options,directed_QMARK_,cluster__GT_descriptor,cluster__GT_ranks,edge__GT_descriptor,cluster__GT_parent,node__GT_descriptor,vertical_QMARK_,node__GT_clusters))
),new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444),vertical_QMARK_),new cljs.core.Keyword(null,"edge","edge",919909153),new cljs.core.Keyword(null,"node","node",581201198))),", ")),"]\n","node[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rhizome.dot.format_options.call(null,rhizome.dot.translate_options.call(null,cljs.core.update_in.call(null,node_options,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fontname","fontname",-1891838675)], null),((function (edge_options,node_options,current_cluster,subgraph_QMARK_,cluster__GT_nodes,cluster_QMARK_,node_QMARK_,ranks,_STAR_node__GT_id_STAR__orig_val__38225,_STAR_cluster__GT_id_STAR__orig_val__38226,_STAR_node__GT_id_STAR__temp_val__38227,_STAR_cluster__GT_id_STAR__temp_val__38228,map__38223,map__38223__$1,graph_descriptor,options,directed_QMARK_,cluster__GT_descriptor,cluster__GT_ranks,edge__GT_descriptor,cluster__GT_parent,node__GT_descriptor,vertical_QMARK_,node__GT_clusters){
return (function (p1__38211_SHARP_){
var or__4131__auto__ = p1__38211_SHARP_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "Monospace";
}
});})(edge_options,node_options,current_cluster,subgraph_QMARK_,cluster__GT_nodes,cluster_QMARK_,node_QMARK_,ranks,_STAR_node__GT_id_STAR__orig_val__38225,_STAR_cluster__GT_id_STAR__orig_val__38226,_STAR_node__GT_id_STAR__temp_val__38227,_STAR_cluster__GT_id_STAR__temp_val__38228,map__38223,map__38223__$1,graph_descriptor,options,directed_QMARK_,cluster__GT_descriptor,cluster__GT_ranks,edge__GT_descriptor,cluster__GT_parent,node__GT_descriptor,vertical_QMARK_,node__GT_clusters))
)),", ")),"]\n","edge[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rhizome.dot.format_options.call(null,rhizome.dot.translate_options.call(null,cljs.core.update_in.call(null,edge_options,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fontname","fontname",-1891838675)], null),((function (edge_options,node_options,current_cluster,subgraph_QMARK_,cluster__GT_nodes,cluster_QMARK_,node_QMARK_,ranks,_STAR_node__GT_id_STAR__orig_val__38225,_STAR_cluster__GT_id_STAR__orig_val__38226,_STAR_node__GT_id_STAR__temp_val__38227,_STAR_cluster__GT_id_STAR__temp_val__38228,map__38223,map__38223__$1,graph_descriptor,options,directed_QMARK_,cluster__GT_descriptor,cluster__GT_ranks,edge__GT_descriptor,cluster__GT_parent,node__GT_descriptor,vertical_QMARK_,node__GT_clusters){
return (function (p1__38212_SHARP_){
var or__4131__auto__ = p1__38212_SHARP_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "Monospace";
}
});})(edge_options,node_options,current_cluster,subgraph_QMARK_,cluster__GT_nodes,cluster_QMARK_,node_QMARK_,ranks,_STAR_node__GT_id_STAR__orig_val__38225,_STAR_cluster__GT_id_STAR__orig_val__38226,_STAR_node__GT_id_STAR__temp_val__38227,_STAR_cluster__GT_id_STAR__temp_val__38228,map__38223,map__38223__$1,graph_descriptor,options,directed_QMARK_,cluster__GT_descriptor,cluster__GT_ranks,edge__GT_descriptor,cluster__GT_parent,node__GT_descriptor,vertical_QMARK_,node__GT_clusters))
)),", ")),"]\n\n"].join('');
})(),cljs.core.interpose.call(null,"\n",cljs.core.concat.call(null,cljs.core.map.call(null,((function (current_cluster,subgraph_QMARK_,cluster__GT_nodes,cluster_QMARK_,node_QMARK_,ranks,_STAR_node__GT_id_STAR__orig_val__38225,_STAR_cluster__GT_id_STAR__orig_val__38226,_STAR_node__GT_id_STAR__temp_val__38227,_STAR_cluster__GT_id_STAR__temp_val__38228,map__38223,map__38223__$1,graph_descriptor,options,directed_QMARK_,cluster__GT_descriptor,cluster__GT_ranks,edge__GT_descriptor,cluster__GT_parent,node__GT_descriptor,vertical_QMARK_,node__GT_clusters){
return (function (p1__38214_SHARP_){
return rhizome.dot.format_node.call(null,rhizome.dot.node__GT_id.call(null,p1__38214_SHARP_),cljs.core.merge.call(null,rhizome.dot.default_node_options,node__GT_descriptor.call(null,p1__38214_SHARP_)));
});})(current_cluster,subgraph_QMARK_,cluster__GT_nodes,cluster_QMARK_,node_QMARK_,ranks,_STAR_node__GT_id_STAR__orig_val__38225,_STAR_cluster__GT_id_STAR__orig_val__38226,_STAR_node__GT_id_STAR__temp_val__38227,_STAR_cluster__GT_id_STAR__temp_val__38228,map__38223,map__38223__$1,graph_descriptor,options,directed_QMARK_,cluster__GT_descriptor,cluster__GT_ranks,edge__GT_descriptor,cluster__GT_parent,node__GT_descriptor,vertical_QMARK_,node__GT_clusters))
,cljs.core.remove.call(null,((function (current_cluster,subgraph_QMARK_,cluster__GT_nodes,cluster_QMARK_,node_QMARK_,ranks,_STAR_node__GT_id_STAR__orig_val__38225,_STAR_cluster__GT_id_STAR__orig_val__38226,_STAR_node__GT_id_STAR__temp_val__38227,_STAR_cluster__GT_id_STAR__temp_val__38228,map__38223,map__38223__$1,graph_descriptor,options,directed_QMARK_,cluster__GT_descriptor,cluster__GT_ranks,edge__GT_descriptor,cluster__GT_parent,node__GT_descriptor,vertical_QMARK_,node__GT_clusters){
return (function (p1__38213_SHARP_){
if(cljs.core.truth_(current_cluster)){
return (!(cljs.core.contains_QMARK_.call(null,node__GT_clusters.call(null,p1__38213_SHARP_),current_cluster)));
} else {
return false;
}
});})(current_cluster,subgraph_QMARK_,cluster__GT_nodes,cluster_QMARK_,node_QMARK_,ranks,_STAR_node__GT_id_STAR__orig_val__38225,_STAR_cluster__GT_id_STAR__orig_val__38226,_STAR_node__GT_id_STAR__temp_val__38227,_STAR_cluster__GT_id_STAR__temp_val__38228,map__38223,map__38223__$1,graph_descriptor,options,directed_QMARK_,cluster__GT_descriptor,cluster__GT_ranks,edge__GT_descriptor,cluster__GT_parent,node__GT_descriptor,vertical_QMARK_,node__GT_clusters))
,nodes)),cljs.core.map.call(null,((function (current_cluster,subgraph_QMARK_,cluster__GT_nodes,cluster_QMARK_,node_QMARK_,ranks,_STAR_node__GT_id_STAR__orig_val__38225,_STAR_cluster__GT_id_STAR__orig_val__38226,_STAR_node__GT_id_STAR__temp_val__38227,_STAR_cluster__GT_id_STAR__temp_val__38228,map__38223,map__38223__$1,graph_descriptor,options,directed_QMARK_,cluster__GT_descriptor,cluster__GT_ranks,edge__GT_descriptor,cluster__GT_parent,node__GT_descriptor,vertical_QMARK_,node__GT_clusters){
return (function (r){
return rhizome.dot.format_rank.call(null,cljs.core.mapv.call(null,rhizome.dot._STAR_node__GT_id_STAR_,r));
});})(current_cluster,subgraph_QMARK_,cluster__GT_nodes,cluster_QMARK_,node_QMARK_,ranks,_STAR_node__GT_id_STAR__orig_val__38225,_STAR_cluster__GT_id_STAR__orig_val__38226,_STAR_node__GT_id_STAR__temp_val__38227,_STAR_cluster__GT_id_STAR__temp_val__38228,map__38223,map__38223__$1,graph_descriptor,options,directed_QMARK_,cluster__GT_descriptor,cluster__GT_ranks,edge__GT_descriptor,cluster__GT_parent,node__GT_descriptor,vertical_QMARK_,node__GT_clusters))
,ranks),cljs.core.map.call(null,((function (current_cluster,subgraph_QMARK_,cluster__GT_nodes,cluster_QMARK_,node_QMARK_,ranks,_STAR_node__GT_id_STAR__orig_val__38225,_STAR_cluster__GT_id_STAR__orig_val__38226,_STAR_node__GT_id_STAR__temp_val__38227,_STAR_cluster__GT_id_STAR__temp_val__38228,map__38223,map__38223__$1,graph_descriptor,options,directed_QMARK_,cluster__GT_descriptor,cluster__GT_ranks,edge__GT_descriptor,cluster__GT_parent,node__GT_descriptor,vertical_QMARK_,node__GT_clusters){
return (function (p1__38216_SHARP_){
return cljs.core.apply.call(null,rhizome.dot.graph__GT_dot,nodes,adjacent,cljs.core.apply.call(null,cljs.core.concat,cljs.core.assoc.call(null,graph_descriptor,new cljs.core.Keyword("rhizome.dot","cluster","rhizome.dot/cluster",-748815582),p1__38216_SHARP_,new cljs.core.Keyword(null,"options","options",99638489),cluster__GT_descriptor.call(null,p1__38216_SHARP_))));
});})(current_cluster,subgraph_QMARK_,cluster__GT_nodes,cluster_QMARK_,node_QMARK_,ranks,_STAR_node__GT_id_STAR__orig_val__38225,_STAR_cluster__GT_id_STAR__orig_val__38226,_STAR_node__GT_id_STAR__temp_val__38227,_STAR_cluster__GT_id_STAR__temp_val__38228,map__38223,map__38223__$1,graph_descriptor,options,directed_QMARK_,cluster__GT_descriptor,cluster__GT_ranks,edge__GT_descriptor,cluster__GT_parent,node__GT_descriptor,vertical_QMARK_,node__GT_clusters))
,cljs.core.remove.call(null,((function (current_cluster,subgraph_QMARK_,cluster__GT_nodes,cluster_QMARK_,node_QMARK_,ranks,_STAR_node__GT_id_STAR__orig_val__38225,_STAR_cluster__GT_id_STAR__orig_val__38226,_STAR_node__GT_id_STAR__temp_val__38227,_STAR_cluster__GT_id_STAR__temp_val__38228,map__38223,map__38223__$1,graph_descriptor,options,directed_QMARK_,cluster__GT_descriptor,cluster__GT_ranks,edge__GT_descriptor,cluster__GT_parent,node__GT_descriptor,vertical_QMARK_,node__GT_clusters){
return (function (p1__38215_SHARP_){
return cljs.core.not_EQ_.call(null,current_cluster,cluster__GT_parent.call(null,p1__38215_SHARP_));
});})(current_cluster,subgraph_QMARK_,cluster__GT_nodes,cluster_QMARK_,node_QMARK_,ranks,_STAR_node__GT_id_STAR__orig_val__38225,_STAR_cluster__GT_id_STAR__orig_val__38226,_STAR_node__GT_id_STAR__temp_val__38227,_STAR_cluster__GT_id_STAR__temp_val__38228,map__38223,map__38223__$1,graph_descriptor,options,directed_QMARK_,cluster__GT_descriptor,cluster__GT_ranks,edge__GT_descriptor,cluster__GT_parent,node__GT_descriptor,vertical_QMARK_,node__GT_clusters))
,cljs.core.keys.call(null,cluster__GT_nodes))),((subgraph_QMARK_)?null:cljs.core.map.call(null,((function (current_cluster,subgraph_QMARK_,cluster__GT_nodes,cluster_QMARK_,node_QMARK_,ranks,_STAR_node__GT_id_STAR__orig_val__38225,_STAR_cluster__GT_id_STAR__orig_val__38226,_STAR_node__GT_id_STAR__temp_val__38227,_STAR_cluster__GT_id_STAR__temp_val__38228,map__38223,map__38223__$1,graph_descriptor,options,directed_QMARK_,cluster__GT_descriptor,cluster__GT_ranks,edge__GT_descriptor,cluster__GT_parent,node__GT_descriptor,vertical_QMARK_,node__GT_clusters){
return (function (p__38229){
var vec__38230 = p__38229;
var a = cljs.core.nth.call(null,vec__38230,(0),null);
var vec__38233 = cljs.core.nth.call(null,vec__38230,(1),null);
var type = cljs.core.nth.call(null,vec__38233,(0),null);
var b = cljs.core.nth.call(null,vec__38233,(1),null);
var descriptor = edge__GT_descriptor.call(null,a,b);
var format = ((function (descriptor,vec__38230,a,vec__38233,type,b,current_cluster,subgraph_QMARK_,cluster__GT_nodes,cluster_QMARK_,node_QMARK_,ranks,_STAR_node__GT_id_STAR__orig_val__38225,_STAR_cluster__GT_id_STAR__orig_val__38226,_STAR_node__GT_id_STAR__temp_val__38227,_STAR_cluster__GT_id_STAR__temp_val__38228,map__38223,map__38223__$1,graph_descriptor,options,directed_QMARK_,cluster__GT_descriptor,cluster__GT_ranks,edge__GT_descriptor,cluster__GT_parent,node__GT_descriptor,vertical_QMARK_,node__GT_clusters){
return (function (p1__38218_SHARP_){
return rhizome.dot.format_edge.call(null,rhizome.dot.node__GT_id.call(null,a),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"node","node",581201198),type))?rhizome.dot.node__GT_id.call(null,b):rhizome.dot.cluster__GT_id.call(null,b)),cljs.core.merge.call(null,rhizome.dot.default_edge_options,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"directed?","directed?",-323153830),directed_QMARK_], null),p1__38218_SHARP_));
});})(descriptor,vec__38230,a,vec__38233,type,b,current_cluster,subgraph_QMARK_,cluster__GT_nodes,cluster_QMARK_,node_QMARK_,ranks,_STAR_node__GT_id_STAR__orig_val__38225,_STAR_cluster__GT_id_STAR__orig_val__38226,_STAR_node__GT_id_STAR__temp_val__38227,_STAR_cluster__GT_id_STAR__temp_val__38228,map__38223,map__38223__$1,graph_descriptor,options,directed_QMARK_,cluster__GT_descriptor,cluster__GT_ranks,edge__GT_descriptor,cluster__GT_parent,node__GT_descriptor,vertical_QMARK_,node__GT_clusters))
;
if(cljs.core.vector_QMARK_.call(null,descriptor)){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"\n",cljs.core.map.call(null,format,descriptor)));
} else {
return format.call(null,descriptor);
}
});})(current_cluster,subgraph_QMARK_,cluster__GT_nodes,cluster_QMARK_,node_QMARK_,ranks,_STAR_node__GT_id_STAR__orig_val__38225,_STAR_cluster__GT_id_STAR__orig_val__38226,_STAR_node__GT_id_STAR__temp_val__38227,_STAR_cluster__GT_id_STAR__temp_val__38228,map__38223,map__38223__$1,graph_descriptor,options,directed_QMARK_,cluster__GT_descriptor,cluster__GT_ranks,edge__GT_descriptor,cluster__GT_parent,node__GT_descriptor,vertical_QMARK_,node__GT_clusters))
,cljs.core.mapcat.call(null,((function (current_cluster,subgraph_QMARK_,cluster__GT_nodes,cluster_QMARK_,node_QMARK_,ranks,_STAR_node__GT_id_STAR__orig_val__38225,_STAR_cluster__GT_id_STAR__orig_val__38226,_STAR_node__GT_id_STAR__temp_val__38227,_STAR_cluster__GT_id_STAR__temp_val__38228,map__38223,map__38223__$1,graph_descriptor,options,directed_QMARK_,cluster__GT_descriptor,cluster__GT_ranks,edge__GT_descriptor,cluster__GT_parent,node__GT_descriptor,vertical_QMARK_,node__GT_clusters){
return (function (node){
return cljs.core.map.call(null,cljs.core.vector,cljs.core.repeat.call(null,node),cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,((function (current_cluster,subgraph_QMARK_,cluster__GT_nodes,cluster_QMARK_,node_QMARK_,ranks,_STAR_node__GT_id_STAR__orig_val__38225,_STAR_cluster__GT_id_STAR__orig_val__38226,_STAR_node__GT_id_STAR__temp_val__38227,_STAR_cluster__GT_id_STAR__temp_val__38228,map__38223,map__38223__$1,graph_descriptor,options,directed_QMARK_,cluster__GT_descriptor,cluster__GT_ranks,edge__GT_descriptor,cluster__GT_parent,node__GT_descriptor,vertical_QMARK_,node__GT_clusters){
return (function (p1__38217_SHARP_){
if(cljs.core.truth_(node_QMARK_.call(null,p1__38217_SHARP_))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node","node",581201198),p1__38217_SHARP_], null);
} else {
if(cljs.core.truth_(cluster_QMARK_.call(null,p1__38217_SHARP_))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cluster","cluster",535175621),p1__38217_SHARP_], null);
} else {
return null;

}
}
});})(current_cluster,subgraph_QMARK_,cluster__GT_nodes,cluster_QMARK_,node_QMARK_,ranks,_STAR_node__GT_id_STAR__orig_val__38225,_STAR_cluster__GT_id_STAR__orig_val__38226,_STAR_node__GT_id_STAR__temp_val__38227,_STAR_cluster__GT_id_STAR__temp_val__38228,map__38223,map__38223__$1,graph_descriptor,options,directed_QMARK_,cluster__GT_descriptor,cluster__GT_ranks,edge__GT_descriptor,cluster__GT_parent,node__GT_descriptor,vertical_QMARK_,node__GT_clusters))
,adjacent.call(null,node))));
});})(current_cluster,subgraph_QMARK_,cluster__GT_nodes,cluster_QMARK_,node_QMARK_,ranks,_STAR_node__GT_id_STAR__orig_val__38225,_STAR_cluster__GT_id_STAR__orig_val__38226,_STAR_node__GT_id_STAR__temp_val__38227,_STAR_cluster__GT_id_STAR__temp_val__38228,map__38223,map__38223__$1,graph_descriptor,options,directed_QMARK_,cluster__GT_descriptor,cluster__GT_ranks,edge__GT_descriptor,cluster__GT_parent,node__GT_descriptor,vertical_QMARK_,node__GT_clusters))
,nodes))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["}\n"], null))));
}finally {rhizome.dot._STAR_cluster__GT_id_STAR_ = _STAR_cluster__GT_id_STAR__orig_val__38226;

rhizome.dot._STAR_node__GT_id_STAR_ = _STAR_node__GT_id_STAR__orig_val__38225;
}});

rhizome.dot.graph__GT_dot.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
rhizome.dot.graph__GT_dot.cljs$lang$applyTo = (function (seq38219){
var G__38220 = cljs.core.first.call(null,seq38219);
var seq38219__$1 = cljs.core.next.call(null,seq38219);
var G__38221 = cljs.core.first.call(null,seq38219__$1);
var seq38219__$2 = cljs.core.next.call(null,seq38219__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38220,G__38221,seq38219__$2);
});


//# sourceMappingURL=dot.js.map
