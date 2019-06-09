// Compiled by ClojureScript 1.10.520 {}
goog.provide('lib_draw_graph.parser');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('lib_draw_graph.util');
goog.require('instaparse.core');
/**
 * Returns third element of coll, or nil.
 */
lib_draw_graph.parser.third = (function lib_draw_graph$parser$third(coll){
try{return cljs.core.nth.call(null,coll,(2));
}catch (e26080){if((e26080 instanceof Error)){
var e = e26080;
return null;
} else {
throw e26080;

}
}});
lib_draw_graph.parser._STAR_part_sep_STAR_ = /:/;
lib_draw_graph.parser._STAR_part_sep_meta_STAR_ = /:(?!\/\/)/;
lib_draw_graph.parser.exp = /[^\\\\]:/;
lib_draw_graph.parser.split_parts = (function lib_draw_graph$parser$split_parts(s){
return clojure.string.split.call(null,s,lib_draw_graph.parser._STAR_part_sep_STAR_,(-1));
});
lib_draw_graph.parser.split_parts_meta = (function lib_draw_graph$parser$split_parts_meta(s){
return clojure.string.split.call(null,s,lib_draw_graph.parser._STAR_part_sep_meta_STAR_,(-1));
});
lib_draw_graph.parser.regex_number = "#'-?[0-9]\\d*(\\.\\d+)?'";
lib_draw_graph.parser.whitespace = instaparse.core.parser.call(null,"whitespace = #'\\s+'");
lib_draw_graph.parser.regex_text = "#'[\\+\\w\\d\\s\\n\\.\\(\\)@&<>\\'#=/-]+'";
lib_draw_graph.parser.regex_kvs = "#'[\\+\\w\\d\\s\\n\\.\\(\\)@&:<>\\'#=/-]+'";
lib_draw_graph.parser.regex_kvs_esc = "#'([/\\+\\w\\d\\s\\n\\.\\(\\)@&:<>\\'#=/-]|(\\\\,)|(\\\\n))*'";
lib_draw_graph.parser.regex_all = "#'(.*)'";
lib_draw_graph.parser.unescapes = new cljs.core.PersistentArrayMap(null, 2, ["\\,",",","\\:",":"], null);
lib_draw_graph.parser.csv_grammar = ["S = <';'>  Cmt |\n        <'h,'> H   |\n        <'e,'> E   |\n        <'ce,'> Ce |\n        <'cp,'> Cp |\n        <'cs,'> Cs \n    <KVs-esc> = ",lib_draw_graph.parser.regex_kvs_esc,"\n    <KVs> = ",lib_draw_graph.parser.regex_kvs,"  \n    E = Node <','> Node (<','> Edge-meta? <'|'>Edge-style)?\n    Edge-style = KVs\n    Edge-meta = KVs-esc\n    Node = KVs-esc (<'|'> Node-style)?\n    Node-style = KVs\n    H = ",lib_draw_graph.parser.regex_kvs,"\n    Ce = KVs\n    Cp = KVs\n    Cs = ",lib_draw_graph.parser.regex_text,"<'|'>",lib_draw_graph.parser.regex_kvs,"\n    Cmt = ",lib_draw_graph.parser.regex_all].join('');
lib_draw_graph.parser.csv_line_parser = instaparse.core.parser.call(null,lib_draw_graph.parser.csv_grammar,new cljs.core.Keyword(null,"auto-whitespace","auto-whitespace",741152317),lib_draw_graph.parser.whitespace);
lib_draw_graph.parser.parse_header = (function lib_draw_graph$parser$parse_header(state,s){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"header","header",119441134),instaparse.core.transform.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"H","H",-938148327),(function (args){
return cljs.core.map.call(null,cljs.core.keyword,lib_draw_graph.parser.split_parts.call(null,args));
}),new cljs.core.Keyword(null,"S","S",1267293308),(function (arg){
return arg;
})], null),s)], null);
});
lib_draw_graph.parser.attribute_map = (function lib_draw_graph$parser$attribute_map(var_args){
var args__4736__auto__ = [];
var len__4730__auto___26090 = arguments.length;
var i__4731__auto___26091 = (0);
while(true){
if((i__4731__auto___26091 < len__4730__auto___26090)){
args__4736__auto__.push((arguments[i__4731__auto___26091]));

var G__26092 = (i__4731__auto___26091 + (1));
i__4731__auto___26091 = G__26092;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return lib_draw_graph.parser.attribute_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

lib_draw_graph.parser.attribute_map.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__26083){
var map__26084 = p__26083;
var map__26084__$1 = (((((!((map__26084 == null))))?(((((map__26084.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26084.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26084):map__26084);
var meta_QMARK_ = cljs.core.get.call(null,map__26084__$1,new cljs.core.Keyword(null,"meta?","meta?",1044243367),false);
var args = (cljs.core.truth_(meta_QMARK_)?lib_draw_graph.parser.split_parts_meta.call(null,s):lib_draw_graph.parser.split_parts.call(null,s));
var n = cljs.core.count.call(null,args);
if(cljs.core._EQ_.call(null,"",cljs.core.first.call(null,args))){
return null;
} else {
if(cljs.core.even_QMARK_.call(null,n)){
return cljs.core.reduce.call(null,((function (args,n,map__26084,map__26084__$1,meta_QMARK_){
return (function (acc,p__26086){
var vec__26087 = p__26086;
var k = cljs.core.nth.call(null,vec__26087,(0),null);
var v = cljs.core.nth.call(null,vec__26087,(1),null);
var k_SINGLEQUOTE_ = cljs.core.keyword.call(null,k);
var temp__5718__auto__ = k_SINGLEQUOTE_.call(null,acc);
if(cljs.core.truth_(temp__5718__auto__)){
var old = temp__5718__auto__;
return cljs.core.assoc.call(null,acc,k_SINGLEQUOTE_,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(old),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));
} else {
return cljs.core.assoc.call(null,acc,k_SINGLEQUOTE_,v);
}
});})(args,n,map__26084,map__26084__$1,meta_QMARK_))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.partition.call(null,(2),args));
} else {
throw lib_draw_graph.util.err.call(null,["Error parsing: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)," > Must be an even number of parts"].join(''));

}
}
});

lib_draw_graph.parser.attribute_map.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
lib_draw_graph.parser.attribute_map.cljs$lang$applyTo = (function (seq26081){
var G__26082 = cljs.core.first.call(null,seq26081);
var seq26081__$1 = cljs.core.next.call(null,seq26081);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26082,seq26081__$1);
});

lib_draw_graph.parser.pairs = (function lib_draw_graph$parser$pairs(s){
var args = lib_draw_graph.parser.split_parts.call(null,s);
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,args))){
return cljs.core.partition.call(null,(2),args);
} else {
throw lib_draw_graph.util.err.call(null,["Error parsing: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)," > Must be an even number of parts"].join(''));
}
});
lib_draw_graph.parser.conjcat = (function lib_draw_graph$parser$conjcat(coll1,coll2){
if(cljs.core.empty_QMARK_.call(null,coll1)){
return coll1;
} else {
return cljs.core.concat.call(null,coll1,coll2);
}
});
lib_draw_graph.parser.extract = (function lib_draw_graph$parser$extract(k,coll){
return cljs.core.reduce.call(null,(function (acc,cur){
if(cljs.core.truth_(cljs.core.get.call(null,cur,k))){
return cljs.core.get.call(null,cur,k);
} else {
return acc;
}
}),null,coll);
});
lib_draw_graph.parser.map_vals = (function lib_draw_graph$parser$map_vals(m,f){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4523__auto__ = (function lib_draw_graph$parser$map_vals_$_iter__26093(s__26094){
return (new cljs.core.LazySeq(null,(function (){
var s__26094__$1 = s__26094;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__26094__$1);
if(temp__5720__auto__){
var s__26094__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26094__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__26094__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__26096 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__26095 = (0);
while(true){
if((i__26095 < size__4522__auto__)){
var vec__26097 = cljs.core._nth.call(null,c__4521__auto__,i__26095);
var k = cljs.core.nth.call(null,vec__26097,(0),null);
var v = cljs.core.nth.call(null,vec__26097,(1),null);
cljs.core.chunk_append.call(null,b__26096,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,v)], null));

var G__26103 = (i__26095 + (1));
i__26095 = G__26103;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26096),lib_draw_graph$parser$map_vals_$_iter__26093.call(null,cljs.core.chunk_rest.call(null,s__26094__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26096),null);
}
} else {
var vec__26100 = cljs.core.first.call(null,s__26094__$2);
var k = cljs.core.nth.call(null,vec__26100,(0),null);
var v = cljs.core.nth.call(null,vec__26100,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,v)], null),lib_draw_graph$parser$map_vals_$_iter__26093.call(null,cljs.core.rest.call(null,s__26094__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,m);
})());
});
lib_draw_graph.parser.unescape = (function lib_draw_graph$parser$unescape(smap,s){
return cljs.core.reduce.call(null,(function (acc,p__26104){
var vec__26105 = p__26104;
var k = cljs.core.nth.call(null,vec__26105,(0),null);
var v = cljs.core.nth.call(null,vec__26105,(1),null);
return clojure.string.replace.call(null,acc,k,v);
}),s,smap);
});
lib_draw_graph.parser.unesc = cljs.core.partial.call(null,lib_draw_graph.parser.unescape,lib_draw_graph.parser.unescapes);
lib_draw_graph.parser.unescape_edge = (function lib_draw_graph$parser$unescape_edge(e){
return cljs.core.reduce.call(null,(function (acc,cur){
if((cur == null)){
return null;
} else {
return cljs.core.update_in.call(null,acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edges","edges",-694791395),cur], null),lib_draw_graph.parser.map_vals,cljs.core.partial.call(null,lib_draw_graph.parser.unescape,lib_draw_graph.parser.unescapes));
}
}),e,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"dst","dst",844682948),new cljs.core.Keyword(null,"meta","meta",1499536964)], null));
});
lib_draw_graph.parser.parse_edge = (function lib_draw_graph$parser$parse_edge(state,s){
var nk = cljs.core.keyword.call(null,cljs.core.gensym.call(null,"node"));
var sk = cljs.core.keyword.call(null,cljs.core.gensym.call(null,"style"));
var edge = instaparse.core.transform.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"Node-style","Node-style",2061401402),lib_draw_graph.parser.attribute_map,new cljs.core.Keyword(null,"Node","Node",-1194498536),((function (nk,sk){
return (function() { 
var G__26108__delegate = function (args){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([nk,cljs.core.zipmap.call(null,new cljs.core.Keyword(null,"header","header",119441134).cljs$core$IFn$_invoke$arity$1(state),lib_draw_graph.parser.split_parts_meta.call(null,lib_draw_graph.parser.unesc.call(null,cljs.core.first.call(null,args)))),sk,(((!((cljs.core.second.call(null,args) == null))))?cljs.core.second.call(null,args):null)]);
};
var G__26108 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26109__i = 0, G__26109__a = new Array(arguments.length -  0);
while (G__26109__i < G__26109__a.length) {G__26109__a[G__26109__i] = arguments[G__26109__i + 0]; ++G__26109__i;}
  args = new cljs.core.IndexedSeq(G__26109__a,0,null);
} 
return G__26108__delegate.call(this,args);};
G__26108.cljs$lang$maxFixedArity = 0;
G__26108.cljs$lang$applyTo = (function (arglist__26110){
var args = cljs.core.seq(arglist__26110);
return G__26108__delegate(args);
});
G__26108.cljs$core$IFn$_invoke$arity$variadic = G__26108__delegate;
return G__26108;
})()
;})(nk,sk))
,new cljs.core.Keyword(null,"Edge-meta","Edge-meta",-81741903),((function (nk,sk){
return (function() { 
var G__26111__delegate = function (args){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"edge-meta","edge-meta",-194119775),lib_draw_graph.parser.attribute_map.call(null,cljs.core.first.call(null,args),new cljs.core.Keyword(null,"meta?","meta?",1044243367),true)], null);
};
var G__26111 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26112__i = 0, G__26112__a = new Array(arguments.length -  0);
while (G__26112__i < G__26112__a.length) {G__26112__a[G__26112__i] = arguments[G__26112__i + 0]; ++G__26112__i;}
  args = new cljs.core.IndexedSeq(G__26112__a,0,null);
} 
return G__26111__delegate.call(this,args);};
G__26111.cljs$lang$maxFixedArity = 0;
G__26111.cljs$lang$applyTo = (function (arglist__26113){
var args = cljs.core.seq(arglist__26113);
return G__26111__delegate(args);
});
G__26111.cljs$core$IFn$_invoke$arity$variadic = G__26111__delegate;
return G__26111;
})()
;})(nk,sk))
,new cljs.core.Keyword(null,"Edge-style","Edge-style",1384264712),((function (nk,sk){
return (function() { 
var G__26114__delegate = function (args){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"edge-style","edge-style",1285542514),lib_draw_graph.parser.attribute_map.call(null,cljs.core.first.call(null,args),new cljs.core.Keyword(null,"meta?","meta?",1044243367),true)], null);
};
var G__26114 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26115__i = 0, G__26115__a = new Array(arguments.length -  0);
while (G__26115__i < G__26115__a.length) {G__26115__a[G__26115__i] = arguments[G__26115__i + 0]; ++G__26115__i;}
  args = new cljs.core.IndexedSeq(G__26115__a,0,null);
} 
return G__26114__delegate.call(this,args);};
G__26114.cljs$lang$maxFixedArity = 0;
G__26114.cljs$lang$applyTo = (function (arglist__26116){
var args = cljs.core.seq(arglist__26116);
return G__26114__delegate(args);
});
G__26114.cljs$core$IFn$_invoke$arity$variadic = G__26114__delegate;
return G__26114;
})()
;})(nk,sk))
,new cljs.core.Keyword(null,"E","E",230849842),((function (nk,sk){
return (function() { 
var G__26117__delegate = function (args){
return args;
};
var G__26117 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26118__i = 0, G__26118__a = new Array(arguments.length -  0);
while (G__26118__i < G__26118__a.length) {G__26118__a[G__26118__i] = arguments[G__26118__i + 0]; ++G__26118__i;}
  args = new cljs.core.IndexedSeq(G__26118__a,0,null);
} 
return G__26117__delegate.call(this,args);};
G__26117.cljs$lang$maxFixedArity = 0;
G__26117.cljs$lang$applyTo = (function (arglist__26119){
var args = cljs.core.seq(arglist__26119);
return G__26117__delegate(args);
});
G__26117.cljs$core$IFn$_invoke$arity$variadic = G__26117__delegate;
return G__26117;
})()
;})(nk,sk))
], null),s);
var edge_SINGLEQUOTE_ = edge;
var edge__$1 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"edges","edges",-694791395),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"src","src",-1651076051),nk.call(null,cljs.core.first.call(null,edge_SINGLEQUOTE_)),new cljs.core.Keyword(null,"dst","dst",844682948),nk.call(null,cljs.core.second.call(null,edge_SINGLEQUOTE_)),new cljs.core.Keyword(null,"meta","meta",1499536964),lib_draw_graph.parser.extract.call(null,new cljs.core.Keyword(null,"edge-meta","edge-meta",-194119775),cljs.core.drop.call(null,(2),edge_SINGLEQUOTE_)),new cljs.core.Keyword(null,"style","style",-496642736),lib_draw_graph.parser.extract.call(null,new cljs.core.Keyword(null,"edge-style","edge-style",1285542514),cljs.core.drop.call(null,(2),edge_SINGLEQUOTE_))], null)], null);
var with_styles = (function (){var styles = cljs.core.reduce.call(null,((function (nk,sk,edge,edge_SINGLEQUOTE_,edge__$1){
return (function (a,c){
if(cljs.core.truth_(sk.call(null,c))){
return cljs.core.assoc.call(null,a,nk.call(null,c),sk.call(null,c));
} else {
return a;
}
});})(nk,sk,edge,edge_SINGLEQUOTE_,edge__$1))
,null,edge_SINGLEQUOTE_);
if(cljs.core.truth_(styles)){
return cljs.core.merge.call(null,edge__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node-styles","node-styles",663815244),styles], null));
} else {
return edge__$1;
}
})();
if((new cljs.core.Keyword(null,"edges","edges",-694791395).cljs$core$IFn$_invoke$arity$1(state) == null)){
var s1 = cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edges","edges",-694791395)], null),(new cljs.core.List(null,new cljs.core.Keyword(null,"edges","edges",-694791395).cljs$core$IFn$_invoke$arity$1(with_styles),null,(1),null)));
if(cljs.core.truth_(new cljs.core.Keyword(null,"node-styles","node-styles",663815244).cljs$core$IFn$_invoke$arity$1(with_styles))){
return cljs.core.merge_with.call(null,cljs.core.merge,s1,cljs.core.dissoc.call(null,with_styles,new cljs.core.Keyword(null,"edges","edges",-694791395)));
} else {
return s1;
}
} else {
var s1 = cljs.core.merge_with.call(null,cljs.core.conj,state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"edges","edges",-694791395),new cljs.core.Keyword(null,"edges","edges",-694791395).cljs$core$IFn$_invoke$arity$1(edge__$1)], null));
if(cljs.core.truth_(new cljs.core.Keyword(null,"node-styles","node-styles",663815244).cljs$core$IFn$_invoke$arity$1(with_styles))){
return lib_draw_graph.util.deep_merge.call(null,s1,cljs.core.dissoc.call(null,with_styles,new cljs.core.Keyword(null,"edges","edges",-694791395)));
} else {
return s1;
}
}
});
lib_draw_graph.parser.parse_cluster_style = (function lib_draw_graph$parser$parse_cluster_style(state,s){
var cluster = instaparse.core.transform.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"Cs","Cs",771253187),(function() { 
var G__26120__delegate = function (args){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first.call(null,args),lib_draw_graph.parser.attribute_map.call(null,cljs.core.second.call(null,args))]);
};
var G__26120 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26121__i = 0, G__26121__a = new Array(arguments.length -  0);
while (G__26121__i < G__26121__a.length) {G__26121__a[G__26121__i] = arguments[G__26121__i + 0]; ++G__26121__i;}
  args = new cljs.core.IndexedSeq(G__26121__a,0,null);
} 
return G__26120__delegate.call(this,args);};
G__26120.cljs$lang$maxFixedArity = 0;
G__26120.cljs$lang$applyTo = (function (arglist__26122){
var args = cljs.core.seq(arglist__26122);
return G__26120__delegate(args);
});
G__26120.cljs$core$IFn$_invoke$arity$variadic = G__26120__delegate;
return G__26120;
})()
], null),s);
return cljs.core.merge_with.call(null,cljs.core.merge,state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cluster-styles","cluster-styles",413979703),cluster], null));
});
lib_draw_graph.parser.parse_cluster_parent = (function lib_draw_graph$parser$parse_cluster_parent(state,s){
var relns = instaparse.core.transform.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"Cp","Cp",842325125),lib_draw_graph.parser.pairs], null),s);
return cljs.core.merge_with.call(null,lib_draw_graph.parser.conjcat,state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cluster-parents","cluster-parents",-1131098902),relns], null));
});
lib_draw_graph.parser.parse_cluster_edge = (function lib_draw_graph$parser$parse_cluster_edge(state,s){
var relns = instaparse.core.transform.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"Ce","Ce",-1152278075),lib_draw_graph.parser.pairs], null),s);
return cljs.core.merge_with.call(null,lib_draw_graph.parser.conjcat,state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cluster-edges","cluster-edges",-965552665),relns], null));
});
lib_draw_graph.parser.parse_comments = (function lib_draw_graph$parser$parse_comments(state,s){
return cljs.core.merge_with.call(null,lib_draw_graph.parser.conjcat,state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"commented-out","commented-out",1739249045),s], null));
});
lib_draw_graph.parser.parse_lines = (function lib_draw_graph$parser$parse_lines(lines){
var line_num = cljs.core.atom.call(null,(0));
return cljs.core.reduce.call(null,((function (line_num){
return (function (acc,cur){
cljs.core.swap_BANG_.call(null,line_num,cljs.core.inc);

var p = lib_draw_graph.parser.csv_line_parser.call(null,cur);
if(instaparse.core.failure_QMARK_.call(null,p)){
throw lib_draw_graph.util.err.call(null,["Parsing error with line number ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,line_num))," >> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cur)].join(''));
} else {
var line = cljs.core.second.call(null,p);
var G__26123 = cljs.core.first.call(null,line);
var G__26123__$1 = (((G__26123 instanceof cljs.core.Keyword))?G__26123.fqn:null);
switch (G__26123__$1) {
case "H":
return lib_draw_graph.parser.parse_header.call(null,acc,line);

break;
case "E":
return lib_draw_graph.parser.parse_edge.call(null,acc,line);

break;
case "Cs":
return lib_draw_graph.parser.parse_cluster_style.call(null,acc,line);

break;
case "Cp":
return lib_draw_graph.parser.parse_cluster_parent.call(null,acc,line);

break;
case "Ce":
return lib_draw_graph.parser.parse_cluster_edge.call(null,acc,line);

break;
case "Cmt":
return lib_draw_graph.parser.parse_comments.call(null,acc,line);

break;
default:
throw lib_draw_graph.util.err.call(null,["No parser for line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,line_num))," >> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cur)].join(''));

}
}
});})(line_num))
,cljs.core.PersistentArrayMap.EMPTY,lines);
});

//# sourceMappingURL=parser.js.map
