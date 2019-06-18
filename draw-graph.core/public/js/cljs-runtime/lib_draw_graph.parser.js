goog.provide('lib_draw_graph.parser');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('lib_draw_graph.util');
goog.require('instaparse.core');
/**
 * Returns third element of coll, or nil.
 */
lib_draw_graph.parser.third = (function lib_draw_graph$parser$third(coll){
try{return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(coll,(2));
}catch (e36085){if((e36085 instanceof Error)){
var e = e36085;
return null;
} else {
throw e36085;

}
}});
lib_draw_graph.parser._STAR_part_sep_STAR_ = /:/;
lib_draw_graph.parser._STAR_part_sep_meta_STAR_ = /:(?!\/\/)/;
lib_draw_graph.parser.exp = /[^\\\\]:/;
lib_draw_graph.parser.split_parts = (function lib_draw_graph$parser$split_parts(s){
return clojure.string.split.cljs$core$IFn$_invoke$arity$3(s,lib_draw_graph.parser._STAR_part_sep_STAR_,(-1));
});
lib_draw_graph.parser.split_parts_meta = (function lib_draw_graph$parser$split_parts_meta(s){
return clojure.string.split.cljs$core$IFn$_invoke$arity$3(s,lib_draw_graph.parser._STAR_part_sep_meta_STAR_,(-1));
});
lib_draw_graph.parser.regex_number = "#'-?[0-9]\\d*(\\.\\d+)?'";
lib_draw_graph.parser.whitespace = instaparse.core.parser("whitespace = #'\\s+'");
lib_draw_graph.parser.regex_text = "#'[\\+\\w\\d\\s\\n\\.\\(\\)@&<>\\'#=/-]+'";
lib_draw_graph.parser.regex_kvs = "#'[\\+\\w\\d\\s\\n\\.\\(\\)@&:<>\\'#=/-]+'";
lib_draw_graph.parser.regex_kvs_esc = "#'([/\\+\\?\\w\\d\\s\\n\\.\\(\\)!@&:\\[\\]\\(\\)<>\\'#=/-]|(\\\\,)|(\\\\n))*'";
lib_draw_graph.parser.regex_all = "#'(.*)'";
lib_draw_graph.parser.unescapes = new cljs.core.PersistentArrayMap(null, 2, ["\\,",",","\\:",":"], null);
lib_draw_graph.parser.csv_grammar = ["S = <';'>  Cmt |\n        <'h,'> H   |\n        <'e,'> E   |\n        <'ce,'> Ce |\n        <'cp,'> Cp |\n        <'cs,'> Cs \n    <KVs-esc> = ",lib_draw_graph.parser.regex_kvs_esc,"\n    <KVs> = ",lib_draw_graph.parser.regex_kvs,"  \n    E = Node <','> Node (<','>)? Edge-meta? (<'|'>Edge-style)?\n    Edge-style = KVs\n    Edge-meta = KVs-esc\n    Node = KVs-esc (<'|'> Node-style)?\n    Node-style = KVs\n    H = ",lib_draw_graph.parser.regex_kvs,"\n    Ce = KVs\n    Cp = KVs\n    Cs = ",lib_draw_graph.parser.regex_text,"<'|'>",lib_draw_graph.parser.regex_kvs,"\n    Cmt = ",lib_draw_graph.parser.regex_all].join('');
lib_draw_graph.parser.csv_line_parser = instaparse.core.parser.cljs$core$IFn$_invoke$arity$variadic(lib_draw_graph.parser.csv_grammar,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"auto-whitespace","auto-whitespace",741152317),lib_draw_graph.parser.whitespace], 0));
lib_draw_graph.parser.parse_header = (function lib_draw_graph$parser$parse_header(state,s){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"header","header",119441134),(function (){var G__36093 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"H","H",-938148327),(function (args){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,lib_draw_graph.parser.split_parts(args));
}),new cljs.core.Keyword(null,"S","S",1267293308),(function (arg){
return arg;
})], null);
var G__36094 = s;
return (instaparse.core.transform.cljs$core$IFn$_invoke$arity$2 ? instaparse.core.transform.cljs$core$IFn$_invoke$arity$2(G__36093,G__36094) : instaparse.core.transform.call(null,G__36093,G__36094));
})()], null);
});
lib_draw_graph.parser.attribute_map = (function lib_draw_graph$parser$attribute_map(var_args){
var args__4736__auto__ = [];
var len__4730__auto___36225 = arguments.length;
var i__4731__auto___36226 = (0);
while(true){
if((i__4731__auto___36226 < len__4730__auto___36225)){
args__4736__auto__.push((arguments[i__4731__auto___36226]));

var G__36227 = (i__4731__auto___36226 + (1));
i__4731__auto___36226 = G__36227;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return lib_draw_graph.parser.attribute_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

lib_draw_graph.parser.attribute_map.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__36102){
var map__36103 = p__36102;
var map__36103__$1 = (((((!((map__36103 == null))))?(((((map__36103.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36103.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36103):map__36103);
var meta_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36103__$1,new cljs.core.Keyword(null,"meta?","meta?",1044243367),false);
var args = (cljs.core.truth_(meta_QMARK_)?lib_draw_graph.parser.split_parts_meta(s):lib_draw_graph.parser.split_parts(s));
var n = cljs.core.count(args);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",cljs.core.first(args))){
return null;
} else {
if(cljs.core.even_QMARK_(n)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (args,n,map__36103,map__36103__$1,meta_QMARK_){
return (function (acc,p__36115){
var vec__36116 = p__36115;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36116,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36116,(1),null);
var k_SINGLEQUOTE_ = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k);
var temp__5718__auto__ = (k_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$1 ? k_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$1(acc) : k_SINGLEQUOTE_.call(null,acc));
if(cljs.core.truth_(temp__5718__auto__)){
var old = temp__5718__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k_SINGLEQUOTE_,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(old),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k_SINGLEQUOTE_,v);
}
});})(args,n,map__36103,map__36103__$1,meta_QMARK_))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),args));
} else {
throw lib_draw_graph.util.err(["Error parsing: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)," > Must be an even number of parts"].join(''));

}
}
});

lib_draw_graph.parser.attribute_map.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
lib_draw_graph.parser.attribute_map.cljs$lang$applyTo = (function (seq36098){
var G__36099 = cljs.core.first(seq36098);
var seq36098__$1 = cljs.core.next(seq36098);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36099,seq36098__$1);
});

lib_draw_graph.parser.pairs = (function lib_draw_graph$parser$pairs(s){
var args = lib_draw_graph.parser.split_parts(s);
if(cljs.core.even_QMARK_(cljs.core.count(args))){
return cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),args);
} else {
throw lib_draw_graph.util.err(["Error parsing: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)," > Must be an even number of parts"].join(''));
}
});
lib_draw_graph.parser.conjcat = (function lib_draw_graph$parser$conjcat(coll1,coll2){
if(cljs.core.empty_QMARK_(coll1)){
return coll1;
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(coll1,coll2);
}
});
lib_draw_graph.parser.extract = (function lib_draw_graph$parser$extract(k,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,cur){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cur,k))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cur,k);
} else {
return acc;
}
}),null,coll);
});
lib_draw_graph.parser.map_vals = (function lib_draw_graph$parser$map_vals(m,f){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4523__auto__ = (function lib_draw_graph$parser$map_vals_$_iter__36127(s__36128){
return (new cljs.core.LazySeq(null,(function (){
var s__36128__$1 = s__36128;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__36128__$1);
if(temp__5720__auto__){
var s__36128__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36128__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__36128__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__36130 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__36129 = (0);
while(true){
if((i__36129 < size__4522__auto__)){
var vec__36131 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__36129);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36131,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36131,(1),null);
cljs.core.chunk_append(b__36130,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v))], null));

var G__36248 = (i__36129 + (1));
i__36129 = G__36248;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36130),lib_draw_graph$parser$map_vals_$_iter__36127(cljs.core.chunk_rest(s__36128__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36130),null);
}
} else {
var vec__36134 = cljs.core.first(s__36128__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36134,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36134,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v))], null),lib_draw_graph$parser$map_vals_$_iter__36127(cljs.core.rest(s__36128__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(m);
})());
});
lib_draw_graph.parser.unescape = (function lib_draw_graph$parser$unescape(smap,s){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__36140){
var vec__36142 = p__36140;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36142,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36142,(1),null);
return clojure.string.replace(acc,k,v);
}),s,smap);
});
lib_draw_graph.parser.unesc = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(lib_draw_graph.parser.unescape,lib_draw_graph.parser.unescapes);
lib_draw_graph.parser.unescape_edge = (function lib_draw_graph$parser$unescape_edge(e){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,cur){
if((cur == null)){
return null;
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edges","edges",-694791395),cur], null),lib_draw_graph.parser.map_vals,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(lib_draw_graph.parser.unescape,lib_draw_graph.parser.unescapes));
}
}),e,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"dst","dst",844682948),new cljs.core.Keyword(null,"meta","meta",1499536964)], null));
});
lib_draw_graph.parser.parse_edge = (function lib_draw_graph$parser$parse_edge(state,s){
var nk = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("node"));
var sk = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("style"));
var edge = (function (){var G__36152 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"Node-style","Node-style",2061401402),lib_draw_graph.parser.attribute_map,new cljs.core.Keyword(null,"Node","Node",-1194498536),((function (nk,sk){
return (function() { 
var G__36260__delegate = function (args){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([nk,cljs.core.zipmap(new cljs.core.Keyword(null,"header","header",119441134).cljs$core$IFn$_invoke$arity$1(state),lib_draw_graph.parser.split_parts_meta((function (){var G__36155 = cljs.core.first(args);
return (lib_draw_graph.parser.unesc.cljs$core$IFn$_invoke$arity$1 ? lib_draw_graph.parser.unesc.cljs$core$IFn$_invoke$arity$1(G__36155) : lib_draw_graph.parser.unesc.call(null,G__36155));
})())),sk,(((!((cljs.core.second(args) == null))))?cljs.core.second(args):null)]);
};
var G__36260 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36263__i = 0, G__36263__a = new Array(arguments.length -  0);
while (G__36263__i < G__36263__a.length) {G__36263__a[G__36263__i] = arguments[G__36263__i + 0]; ++G__36263__i;}
  args = new cljs.core.IndexedSeq(G__36263__a,0,null);
} 
return G__36260__delegate.call(this,args);};
G__36260.cljs$lang$maxFixedArity = 0;
G__36260.cljs$lang$applyTo = (function (arglist__36265){
var args = cljs.core.seq(arglist__36265);
return G__36260__delegate(args);
});
G__36260.cljs$core$IFn$_invoke$arity$variadic = G__36260__delegate;
return G__36260;
})()
;})(nk,sk))
,new cljs.core.Keyword(null,"Edge-meta","Edge-meta",-81741903),((function (nk,sk){
return (function() { 
var G__36266__delegate = function (args){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"edge-meta","edge-meta",-194119775),lib_draw_graph.parser.attribute_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.first(args),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"meta?","meta?",1044243367),true], 0))], null);
};
var G__36266 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36267__i = 0, G__36267__a = new Array(arguments.length -  0);
while (G__36267__i < G__36267__a.length) {G__36267__a[G__36267__i] = arguments[G__36267__i + 0]; ++G__36267__i;}
  args = new cljs.core.IndexedSeq(G__36267__a,0,null);
} 
return G__36266__delegate.call(this,args);};
G__36266.cljs$lang$maxFixedArity = 0;
G__36266.cljs$lang$applyTo = (function (arglist__36268){
var args = cljs.core.seq(arglist__36268);
return G__36266__delegate(args);
});
G__36266.cljs$core$IFn$_invoke$arity$variadic = G__36266__delegate;
return G__36266;
})()
;})(nk,sk))
,new cljs.core.Keyword(null,"Edge-style","Edge-style",1384264712),((function (nk,sk){
return (function() { 
var G__36269__delegate = function (args){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"edge-style","edge-style",1285542514),lib_draw_graph.parser.attribute_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.first(args),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"meta?","meta?",1044243367),true], 0))], null);
};
var G__36269 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36270__i = 0, G__36270__a = new Array(arguments.length -  0);
while (G__36270__i < G__36270__a.length) {G__36270__a[G__36270__i] = arguments[G__36270__i + 0]; ++G__36270__i;}
  args = new cljs.core.IndexedSeq(G__36270__a,0,null);
} 
return G__36269__delegate.call(this,args);};
G__36269.cljs$lang$maxFixedArity = 0;
G__36269.cljs$lang$applyTo = (function (arglist__36271){
var args = cljs.core.seq(arglist__36271);
return G__36269__delegate(args);
});
G__36269.cljs$core$IFn$_invoke$arity$variadic = G__36269__delegate;
return G__36269;
})()
;})(nk,sk))
,new cljs.core.Keyword(null,"E","E",230849842),((function (nk,sk){
return (function() { 
var G__36272__delegate = function (args){
return args;
};
var G__36272 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36273__i = 0, G__36273__a = new Array(arguments.length -  0);
while (G__36273__i < G__36273__a.length) {G__36273__a[G__36273__i] = arguments[G__36273__i + 0]; ++G__36273__i;}
  args = new cljs.core.IndexedSeq(G__36273__a,0,null);
} 
return G__36272__delegate.call(this,args);};
G__36272.cljs$lang$maxFixedArity = 0;
G__36272.cljs$lang$applyTo = (function (arglist__36276){
var args = cljs.core.seq(arglist__36276);
return G__36272__delegate(args);
});
G__36272.cljs$core$IFn$_invoke$arity$variadic = G__36272__delegate;
return G__36272;
})()
;})(nk,sk))
], null);
var G__36153 = s;
return (instaparse.core.transform.cljs$core$IFn$_invoke$arity$2 ? instaparse.core.transform.cljs$core$IFn$_invoke$arity$2(G__36152,G__36153) : instaparse.core.transform.call(null,G__36152,G__36153));
})();
var edge_SINGLEQUOTE_ = edge;
var edge__$1 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"edges","edges",-694791395),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"src","src",-1651076051),(function (){var G__36166 = cljs.core.first(edge_SINGLEQUOTE_);
return (nk.cljs$core$IFn$_invoke$arity$1 ? nk.cljs$core$IFn$_invoke$arity$1(G__36166) : nk.call(null,G__36166));
})(),new cljs.core.Keyword(null,"dst","dst",844682948),(function (){var G__36167 = cljs.core.second(edge_SINGLEQUOTE_);
return (nk.cljs$core$IFn$_invoke$arity$1 ? nk.cljs$core$IFn$_invoke$arity$1(G__36167) : nk.call(null,G__36167));
})(),new cljs.core.Keyword(null,"meta","meta",1499536964),lib_draw_graph.parser.extract(new cljs.core.Keyword(null,"edge-meta","edge-meta",-194119775),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),edge_SINGLEQUOTE_)),new cljs.core.Keyword(null,"style","style",-496642736),lib_draw_graph.parser.extract(new cljs.core.Keyword(null,"edge-style","edge-style",1285542514),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),edge_SINGLEQUOTE_))], null)], null);
var with_styles = (function (){var styles = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (nk,sk,edge,edge_SINGLEQUOTE_,edge__$1){
return (function (a,c){
if(cljs.core.truth_((sk.cljs$core$IFn$_invoke$arity$1 ? sk.cljs$core$IFn$_invoke$arity$1(c) : sk.call(null,c)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a,(nk.cljs$core$IFn$_invoke$arity$1 ? nk.cljs$core$IFn$_invoke$arity$1(c) : nk.call(null,c)),(sk.cljs$core$IFn$_invoke$arity$1 ? sk.cljs$core$IFn$_invoke$arity$1(c) : sk.call(null,c)));
} else {
return a;
}
});})(nk,sk,edge,edge_SINGLEQUOTE_,edge__$1))
,null,edge_SINGLEQUOTE_);
if(cljs.core.truth_(styles)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([edge__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node-styles","node-styles",663815244),styles], null)], 0));
} else {
return edge__$1;
}
})();
if((new cljs.core.Keyword(null,"edges","edges",-694791395).cljs$core$IFn$_invoke$arity$1(state) == null)){
var s1 = cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edges","edges",-694791395)], null),(new cljs.core.List(null,new cljs.core.Keyword(null,"edges","edges",-694791395).cljs$core$IFn$_invoke$arity$1(with_styles),null,(1),null)));
if(cljs.core.truth_(new cljs.core.Keyword(null,"node-styles","node-styles",663815244).cljs$core$IFn$_invoke$arity$1(with_styles))){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s1,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(with_styles,new cljs.core.Keyword(null,"edges","edges",-694791395))], 0));
} else {
return s1;
}
} else {
var s1 = cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"edges","edges",-694791395),new cljs.core.Keyword(null,"edges","edges",-694791395).cljs$core$IFn$_invoke$arity$1(edge__$1)], null)], 0));
if(cljs.core.truth_(new cljs.core.Keyword(null,"node-styles","node-styles",663815244).cljs$core$IFn$_invoke$arity$1(with_styles))){
return lib_draw_graph.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s1,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(with_styles,new cljs.core.Keyword(null,"edges","edges",-694791395))], 0));
} else {
return s1;
}
}
});
lib_draw_graph.parser.parse_cluster_style = (function lib_draw_graph$parser$parse_cluster_style(state,s){
var cluster = (function (){var G__36189 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"Cs","Cs",771253187),(function() { 
var G__36291__delegate = function (args){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(args),lib_draw_graph.parser.attribute_map(cljs.core.second(args))]);
};
var G__36291 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36292__i = 0, G__36292__a = new Array(arguments.length -  0);
while (G__36292__i < G__36292__a.length) {G__36292__a[G__36292__i] = arguments[G__36292__i + 0]; ++G__36292__i;}
  args = new cljs.core.IndexedSeq(G__36292__a,0,null);
} 
return G__36291__delegate.call(this,args);};
G__36291.cljs$lang$maxFixedArity = 0;
G__36291.cljs$lang$applyTo = (function (arglist__36293){
var args = cljs.core.seq(arglist__36293);
return G__36291__delegate(args);
});
G__36291.cljs$core$IFn$_invoke$arity$variadic = G__36291__delegate;
return G__36291;
})()
], null);
var G__36190 = s;
return (instaparse.core.transform.cljs$core$IFn$_invoke$arity$2 ? instaparse.core.transform.cljs$core$IFn$_invoke$arity$2(G__36189,G__36190) : instaparse.core.transform.call(null,G__36189,G__36190));
})();
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cluster-styles","cluster-styles",413979703),cluster], null)], 0));
});
lib_draw_graph.parser.parse_cluster_parent = (function lib_draw_graph$parser$parse_cluster_parent(state,s){
var relns = (function (){var G__36201 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"Cp","Cp",842325125),lib_draw_graph.parser.pairs], null);
var G__36202 = s;
return (instaparse.core.transform.cljs$core$IFn$_invoke$arity$2 ? instaparse.core.transform.cljs$core$IFn$_invoke$arity$2(G__36201,G__36202) : instaparse.core.transform.call(null,G__36201,G__36202));
})();
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(lib_draw_graph.parser.conjcat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cluster-parents","cluster-parents",-1131098902),relns], null)], 0));
});
lib_draw_graph.parser.parse_cluster_edge = (function lib_draw_graph$parser$parse_cluster_edge(state,s){
var relns = (function (){var G__36203 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"Ce","Ce",-1152278075),lib_draw_graph.parser.pairs], null);
var G__36204 = s;
return (instaparse.core.transform.cljs$core$IFn$_invoke$arity$2 ? instaparse.core.transform.cljs$core$IFn$_invoke$arity$2(G__36203,G__36204) : instaparse.core.transform.call(null,G__36203,G__36204));
})();
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(lib_draw_graph.parser.conjcat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cluster-edges","cluster-edges",-965552665),relns], null)], 0));
});
lib_draw_graph.parser.parse_comments = (function lib_draw_graph$parser$parse_comments(state,s){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(lib_draw_graph.parser.conjcat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"commented-out","commented-out",1739249045),s], null)], 0));
});
lib_draw_graph.parser.parse_lines = (function lib_draw_graph$parser$parse_lines(lines){
var line_num = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (line_num){
return (function (acc,cur){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(line_num,cljs.core.inc);

var p = (lib_draw_graph.parser.csv_line_parser.cljs$core$IFn$_invoke$arity$1 ? lib_draw_graph.parser.csv_line_parser.cljs$core$IFn$_invoke$arity$1(cur) : lib_draw_graph.parser.csv_line_parser.call(null,cur));
if(instaparse.core.failure_QMARK_(p)){
throw lib_draw_graph.util.err(["Parsing error with line number ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(line_num))," >> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cur)].join(''));
} else {
var line = cljs.core.second(p);
var G__36208 = cljs.core.first(line);
var G__36208__$1 = (((G__36208 instanceof cljs.core.Keyword))?G__36208.fqn:null);
switch (G__36208__$1) {
case "H":
return lib_draw_graph.parser.parse_header(acc,line);

break;
case "E":
return lib_draw_graph.parser.parse_edge(acc,line);

break;
case "Cs":
return lib_draw_graph.parser.parse_cluster_style(acc,line);

break;
case "Cp":
return lib_draw_graph.parser.parse_cluster_parent(acc,line);

break;
case "Ce":
return lib_draw_graph.parser.parse_cluster_edge(acc,line);

break;
case "Cmt":
return lib_draw_graph.parser.parse_comments(acc,line);

break;
default:
throw lib_draw_graph.util.err(["No parser for line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(line_num))," >> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cur)].join(''));

}
}
});})(line_num))
,cljs.core.PersistentArrayMap.EMPTY,lines);
});

//# sourceMappingURL=lib_draw_graph.parser.js.map
