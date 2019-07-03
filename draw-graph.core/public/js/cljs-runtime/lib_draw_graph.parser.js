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
}catch (e36090){if((e36090 instanceof Error)){
var e = e36090;
return null;
} else {
throw e36090;

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
lib_draw_graph.parser.csv_grammar = ["S = <';'>  Cmt |\n        <'h,'> H   |\n        <'n,'> N   |\n        <'e,'> E   |\n        <'ce,'> Ce |\n        <'cp,'> Cp |\n        <'cs,'> Cs \n    <KVs-esc> = ",lib_draw_graph.parser.regex_kvs_esc,"\n    <KVs> = ",lib_draw_graph.parser.regex_kvs,"  \n    E = Node <','> Node (<','> Edge-meta? (<'|'> Edge-style)?)?\n    Edge-style = KVs\n    Edge-meta = KVs-esc\n    N = (Synonym <','>)? KVs-esc (<'|'> Node-style)?\n    Synonym = #'node[_0-9a-zA-Z]*'\n    Node = Synonym | KVs-esc (<'|'> Node-style)?\n    Node-style = KVs\n    H = ",lib_draw_graph.parser.regex_kvs,"\n    Ce = KVs\n    Cp = KVs\n    Cs = ",lib_draw_graph.parser.regex_text,"<'|'>",lib_draw_graph.parser.regex_kvs,"\n    Cmt = ",lib_draw_graph.parser.regex_all].join('');
lib_draw_graph.parser.csv_line_parser = instaparse.core.parser.cljs$core$IFn$_invoke$arity$variadic(lib_draw_graph.parser.csv_grammar,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"auto-whitespace","auto-whitespace",741152317),lib_draw_graph.parser.whitespace], 0));
lib_draw_graph.parser.parse_header = (function lib_draw_graph$parser$parse_header(state,s){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"header","header",119441134),(function (){var G__36101 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"H","H",-938148327),(function (args){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,lib_draw_graph.parser.split_parts(args));
}),new cljs.core.Keyword(null,"S","S",1267293308),(function (arg){
return arg;
})], null);
var G__36102 = s;
return (instaparse.core.transform.cljs$core$IFn$_invoke$arity$2 ? instaparse.core.transform.cljs$core$IFn$_invoke$arity$2(G__36101,G__36102) : instaparse.core.transform.call(null,G__36101,G__36102));
})()], null);
});
lib_draw_graph.parser.attribute_map = (function lib_draw_graph$parser$attribute_map(var_args){
var args__4736__auto__ = [];
var len__4730__auto___36288 = arguments.length;
var i__4731__auto___36289 = (0);
while(true){
if((i__4731__auto___36289 < len__4730__auto___36288)){
args__4736__auto__.push((arguments[i__4731__auto___36289]));

var G__36290 = (i__4731__auto___36289 + (1));
i__4731__auto___36289 = G__36290;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return lib_draw_graph.parser.attribute_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

lib_draw_graph.parser.attribute_map.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__36108){
var map__36109 = p__36108;
var map__36109__$1 = (((((!((map__36109 == null))))?(((((map__36109.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36109.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36109):map__36109);
var meta_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36109__$1,new cljs.core.Keyword(null,"meta?","meta?",1044243367),false);
var s_SINGLEQUOTE_ = clojure.string.trim(s);
var args = (cljs.core.truth_(meta_QMARK_)?lib_draw_graph.parser.split_parts_meta(s_SINGLEQUOTE_):lib_draw_graph.parser.split_parts(s_SINGLEQUOTE_));
var n = cljs.core.count(args);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",cljs.core.first(args))){
return null;
} else {
if(cljs.core.even_QMARK_(n)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (s_SINGLEQUOTE_,args,n,map__36109,map__36109__$1,meta_QMARK_){
return (function (acc,p__36111){
var vec__36112 = p__36111;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36112,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36112,(1),null);
var k_SINGLEQUOTE_ = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k);
var temp__5718__auto__ = (k_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$1 ? k_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$1(acc) : k_SINGLEQUOTE_.call(null,acc));
if(cljs.core.truth_(temp__5718__auto__)){
var old = temp__5718__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k_SINGLEQUOTE_,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(old),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k_SINGLEQUOTE_,v);
}
});})(s_SINGLEQUOTE_,args,n,map__36109,map__36109__$1,meta_QMARK_))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),args));
} else {
throw lib_draw_graph.util.err(["Error parsing: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)," > Must be an even number of parts"].join(''));

}
}
});

lib_draw_graph.parser.attribute_map.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
lib_draw_graph.parser.attribute_map.cljs$lang$applyTo = (function (seq36106){
var G__36107 = cljs.core.first(seq36106);
var seq36106__$1 = cljs.core.next(seq36106);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36107,seq36106__$1);
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4523__auto__ = (function lib_draw_graph$parser$map_vals_$_iter__36125(s__36126){
return (new cljs.core.LazySeq(null,(function (){
var s__36126__$1 = s__36126;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__36126__$1);
if(temp__5720__auto__){
var s__36126__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36126__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__36126__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__36128 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__36127 = (0);
while(true){
if((i__36127 < size__4522__auto__)){
var vec__36131 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__36127);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36131,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36131,(1),null);
cljs.core.chunk_append(b__36128,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v))], null));

var G__36311 = (i__36127 + (1));
i__36127 = G__36311;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36128),lib_draw_graph$parser$map_vals_$_iter__36125(cljs.core.chunk_rest(s__36126__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36128),null);
}
} else {
var vec__36135 = cljs.core.first(s__36126__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36135,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36135,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v))], null),lib_draw_graph$parser$map_vals_$_iter__36125(cljs.core.rest(s__36126__$2)));
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__36139){
var vec__36141 = p__36139;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36141,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36141,(1),null);
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
lib_draw_graph.parser.synonym_QMARK_ = (function lib_draw_graph$parser$synonym_QMARK_(s){
if(cljs.core.truth_((function (){var and__4120__auto__ = typeof s === 'string';
if(and__4120__auto__){
return cljs.core.re_matches(/node[_0-9a-zA-Z]*/,s);
} else {
return and__4120__auto__;
}
})())){
return true;
} else {
return false;
}
});
lib_draw_graph.parser.parse_node = (function lib_draw_graph$parser$parse_node(state,s){
var nd = (function (){var G__36159 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"Node-style","Node-style",2061401402),lib_draw_graph.parser.attribute_map,new cljs.core.Keyword(null,"Synonym","Synonym",-1939709262),(function (arg){
return arg;
}),new cljs.core.Keyword(null,"N","N",-640629860),(function() { 
var G__36324__delegate = function (args){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(args))) && (lib_draw_graph.parser.synonym_QMARK_(cljs.core.first(args))))){
var node = cljs.core.zipmap(new cljs.core.Keyword(null,"header","header",119441134).cljs$core$IFn$_invoke$arity$1(state),lib_draw_graph.parser.split_parts_meta((function (){var G__36162 = cljs.core.second(args);
return (lib_draw_graph.parser.unesc.cljs$core$IFn$_invoke$arity$1 ? lib_draw_graph.parser.unesc.cljs$core$IFn$_invoke$arity$1(G__36162) : lib_draw_graph.parser.unesc.call(null,G__36162));
})()));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"synonyms","synonyms",1693474381),cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(args),node])], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(args))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"node","node",581201198),cljs.core.zipmap(new cljs.core.Keyword(null,"header","header",119441134).cljs$core$IFn$_invoke$arity$1(state),lib_draw_graph.parser.split_parts_meta((function (){var G__36164 = cljs.core.first(args);
return (lib_draw_graph.parser.unesc.cljs$core$IFn$_invoke$arity$1 ? lib_draw_graph.parser.unesc.cljs$core$IFn$_invoke$arity$1(G__36164) : lib_draw_graph.parser.unesc.call(null,G__36164));
})())),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.second(args)], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),cljs.core.count(args))){
var node = cljs.core.zipmap(new cljs.core.Keyword(null,"header","header",119441134).cljs$core$IFn$_invoke$arity$1(state),lib_draw_graph.parser.split_parts_meta((function (){var G__36167 = cljs.core.second(args);
return (lib_draw_graph.parser.unesc.cljs$core$IFn$_invoke$arity$1 ? lib_draw_graph.parser.unesc.cljs$core$IFn$_invoke$arity$1(G__36167) : lib_draw_graph.parser.unesc.call(null,G__36167));
})()));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"synonyms","synonyms",1693474381),cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(args),node]),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),cljs.core.PersistentArrayMap.createAsIfByAssoc([node,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args,(2))])], null);
} else {
return null;
}
}
}
};
var G__36324 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36327__i = 0, G__36327__a = new Array(arguments.length -  0);
while (G__36327__i < G__36327__a.length) {G__36327__a[G__36327__i] = arguments[G__36327__i + 0]; ++G__36327__i;}
  args = new cljs.core.IndexedSeq(G__36327__a,0,null);
} 
return G__36324__delegate.call(this,args);};
G__36324.cljs$lang$maxFixedArity = 0;
G__36324.cljs$lang$applyTo = (function (arglist__36328){
var args = cljs.core.seq(arglist__36328);
return G__36324__delegate(args);
});
G__36324.cljs$core$IFn$_invoke$arity$variadic = G__36324__delegate;
return G__36324;
})()
], null);
var G__36160 = s;
return (instaparse.core.transform.cljs$core$IFn$_invoke$arity$2 ? instaparse.core.transform.cljs$core$IFn$_invoke$arity$2(G__36159,G__36160) : instaparse.core.transform.call(null,G__36159,G__36160));
})();
return lib_draw_graph.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([state,nd], 0));
});
lib_draw_graph.parser.parse_edge = (function lib_draw_graph$parser$parse_edge(state,s){
var nk = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("node"));
var sk = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("style"));
var edge = (function (){var G__36171 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"Node-style","Node-style",2061401402),lib_draw_graph.parser.attribute_map,new cljs.core.Keyword(null,"Node","Node",-1194498536),((function (nk,sk){
return (function() { 
var G__36333__delegate = function (args){
if(lib_draw_graph.parser.synonym_QMARK_(cljs.core.first(args))){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([nk,cljs.core.first(args),sk,(((!((cljs.core.second(args) == null))))?cljs.core.second(args):null)]);
} else {
return cljs.core.PersistentArrayMap.createAsIfByAssoc([nk,cljs.core.zipmap(new cljs.core.Keyword(null,"header","header",119441134).cljs$core$IFn$_invoke$arity$1(state),lib_draw_graph.parser.split_parts_meta((function (){var G__36173 = cljs.core.first(args);
return (lib_draw_graph.parser.unesc.cljs$core$IFn$_invoke$arity$1 ? lib_draw_graph.parser.unesc.cljs$core$IFn$_invoke$arity$1(G__36173) : lib_draw_graph.parser.unesc.call(null,G__36173));
})())),sk,(((!((cljs.core.second(args) == null))))?cljs.core.second(args):null)]);
}
};
var G__36333 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36335__i = 0, G__36335__a = new Array(arguments.length -  0);
while (G__36335__i < G__36335__a.length) {G__36335__a[G__36335__i] = arguments[G__36335__i + 0]; ++G__36335__i;}
  args = new cljs.core.IndexedSeq(G__36335__a,0,null);
} 
return G__36333__delegate.call(this,args);};
G__36333.cljs$lang$maxFixedArity = 0;
G__36333.cljs$lang$applyTo = (function (arglist__36336){
var args = cljs.core.seq(arglist__36336);
return G__36333__delegate(args);
});
G__36333.cljs$core$IFn$_invoke$arity$variadic = G__36333__delegate;
return G__36333;
})()
;})(nk,sk))
,new cljs.core.Keyword(null,"Edge-meta","Edge-meta",-81741903),((function (nk,sk){
return (function() { 
var G__36337__delegate = function (args){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"edge-meta","edge-meta",-194119775),lib_draw_graph.parser.attribute_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.first(args),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"meta?","meta?",1044243367),true], 0))], null);
};
var G__36337 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36342__i = 0, G__36342__a = new Array(arguments.length -  0);
while (G__36342__i < G__36342__a.length) {G__36342__a[G__36342__i] = arguments[G__36342__i + 0]; ++G__36342__i;}
  args = new cljs.core.IndexedSeq(G__36342__a,0,null);
} 
return G__36337__delegate.call(this,args);};
G__36337.cljs$lang$maxFixedArity = 0;
G__36337.cljs$lang$applyTo = (function (arglist__36344){
var args = cljs.core.seq(arglist__36344);
return G__36337__delegate(args);
});
G__36337.cljs$core$IFn$_invoke$arity$variadic = G__36337__delegate;
return G__36337;
})()
;})(nk,sk))
,new cljs.core.Keyword(null,"Edge-style","Edge-style",1384264712),((function (nk,sk){
return (function() { 
var G__36346__delegate = function (args){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"edge-style","edge-style",1285542514),lib_draw_graph.parser.attribute_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.first(args),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"meta?","meta?",1044243367),true], 0))], null);
};
var G__36346 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36347__i = 0, G__36347__a = new Array(arguments.length -  0);
while (G__36347__i < G__36347__a.length) {G__36347__a[G__36347__i] = arguments[G__36347__i + 0]; ++G__36347__i;}
  args = new cljs.core.IndexedSeq(G__36347__a,0,null);
} 
return G__36346__delegate.call(this,args);};
G__36346.cljs$lang$maxFixedArity = 0;
G__36346.cljs$lang$applyTo = (function (arglist__36348){
var args = cljs.core.seq(arglist__36348);
return G__36346__delegate(args);
});
G__36346.cljs$core$IFn$_invoke$arity$variadic = G__36346__delegate;
return G__36346;
})()
;})(nk,sk))
,new cljs.core.Keyword(null,"E","E",230849842),((function (nk,sk){
return (function() { 
var G__36349__delegate = function (args){
return args;
};
var G__36349 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36350__i = 0, G__36350__a = new Array(arguments.length -  0);
while (G__36350__i < G__36350__a.length) {G__36350__a[G__36350__i] = arguments[G__36350__i + 0]; ++G__36350__i;}
  args = new cljs.core.IndexedSeq(G__36350__a,0,null);
} 
return G__36349__delegate.call(this,args);};
G__36349.cljs$lang$maxFixedArity = 0;
G__36349.cljs$lang$applyTo = (function (arglist__36351){
var args = cljs.core.seq(arglist__36351);
return G__36349__delegate(args);
});
G__36349.cljs$core$IFn$_invoke$arity$variadic = G__36349__delegate;
return G__36349;
})()
;})(nk,sk))
], null);
var G__36172 = s;
return (instaparse.core.transform.cljs$core$IFn$_invoke$arity$2 ? instaparse.core.transform.cljs$core$IFn$_invoke$arity$2(G__36171,G__36172) : instaparse.core.transform.call(null,G__36171,G__36172));
})();
var edge_SINGLEQUOTE_ = edge;
var edge__$1 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"edges","edges",-694791395),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"src","src",-1651076051),(function (){var G__36178 = cljs.core.first(edge_SINGLEQUOTE_);
return (nk.cljs$core$IFn$_invoke$arity$1 ? nk.cljs$core$IFn$_invoke$arity$1(G__36178) : nk.call(null,G__36178));
})(),new cljs.core.Keyword(null,"dst","dst",844682948),(function (){var G__36179 = cljs.core.second(edge_SINGLEQUOTE_);
return (nk.cljs$core$IFn$_invoke$arity$1 ? nk.cljs$core$IFn$_invoke$arity$1(G__36179) : nk.call(null,G__36179));
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
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([edge__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805),styles], null)], 0));
} else {
return edge__$1;
}
})();
if((new cljs.core.Keyword(null,"edges","edges",-694791395).cljs$core$IFn$_invoke$arity$1(state) == null)){
var s1 = cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edges","edges",-694791395)], null),(new cljs.core.List(null,new cljs.core.Keyword(null,"edges","edges",-694791395).cljs$core$IFn$_invoke$arity$1(with_styles),null,(1),null)));
if(cljs.core.truth_(new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(with_styles))){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s1,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(with_styles,new cljs.core.Keyword(null,"edges","edges",-694791395))], 0));
} else {
return s1;
}
} else {
var s1 = cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"edges","edges",-694791395),new cljs.core.Keyword(null,"edges","edges",-694791395).cljs$core$IFn$_invoke$arity$1(edge__$1)], null)], 0));
if(cljs.core.truth_(new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(with_styles))){
return lib_draw_graph.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s1,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(with_styles,new cljs.core.Keyword(null,"edges","edges",-694791395))], 0));
} else {
return s1;
}
}
});
lib_draw_graph.parser.parse_cluster_style = (function lib_draw_graph$parser$parse_cluster_style(state,s){
var cluster = (function (){var G__36199 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"Cs","Cs",771253187),(function() { 
var G__36377__delegate = function (args){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(args),lib_draw_graph.parser.attribute_map(cljs.core.second(args))]);
};
var G__36377 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36378__i = 0, G__36378__a = new Array(arguments.length -  0);
while (G__36378__i < G__36378__a.length) {G__36378__a[G__36378__i] = arguments[G__36378__i + 0]; ++G__36378__i;}
  args = new cljs.core.IndexedSeq(G__36378__a,0,null);
} 
return G__36377__delegate.call(this,args);};
G__36377.cljs$lang$maxFixedArity = 0;
G__36377.cljs$lang$applyTo = (function (arglist__36383){
var args = cljs.core.seq(arglist__36383);
return G__36377__delegate(args);
});
G__36377.cljs$core$IFn$_invoke$arity$variadic = G__36377__delegate;
return G__36377;
})()
], null);
var G__36200 = s;
return (instaparse.core.transform.cljs$core$IFn$_invoke$arity$2 ? instaparse.core.transform.cljs$core$IFn$_invoke$arity$2(G__36199,G__36200) : instaparse.core.transform.call(null,G__36199,G__36200));
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
var relns = (function (){var G__36204 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"Ce","Ce",-1152278075),lib_draw_graph.parser.pairs], null);
var G__36205 = s;
return (instaparse.core.transform.cljs$core$IFn$_invoke$arity$2 ? instaparse.core.transform.cljs$core$IFn$_invoke$arity$2(G__36204,G__36205) : instaparse.core.transform.call(null,G__36204,G__36205));
})();
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(lib_draw_graph.parser.conjcat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cluster-edges","cluster-edges",-965552665),relns], null)], 0));
});
lib_draw_graph.parser.parse_comments = (function lib_draw_graph$parser$parse_comments(state,s){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(lib_draw_graph.parser.conjcat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"commented-out","commented-out",1739249045),s], null)], 0));
});
lib_draw_graph.parser.parse_lines = (function lib_draw_graph$parser$parse_lines(lines){
var line_num = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var m = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (line_num){
return (function (acc,cur){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(line_num,cljs.core.inc);

var p = (lib_draw_graph.parser.csv_line_parser.cljs$core$IFn$_invoke$arity$1 ? lib_draw_graph.parser.csv_line_parser.cljs$core$IFn$_invoke$arity$1(cur) : lib_draw_graph.parser.csv_line_parser.call(null,cur));
if(instaparse.core.failure_QMARK_(p)){
throw lib_draw_graph.util.err(["Parsing error with line number ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(line_num))," >> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cur)].join(''));
} else {
var line = cljs.core.second(p);
var G__36217 = cljs.core.first(line);
var G__36217__$1 = (((G__36217 instanceof cljs.core.Keyword))?G__36217.fqn:null);
switch (G__36217__$1) {
case "H":
return lib_draw_graph.parser.parse_header(acc,line);

break;
case "N":
return lib_draw_graph.parser.parse_node(acc,line);

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
return m;
});
/**
 * Parses a csv format string
 */
lib_draw_graph.parser.parse_csv = (function lib_draw_graph$parser$parse_csv(s){
return lib_draw_graph.parser.parse_lines(clojure.string.split_lines(s));
});
/**
 * Update the :nodes section as json doesn't allow maps as keys
 */
lib_draw_graph.parser.nodes__GT_seq = (function lib_draw_graph$parser$nodes__GT_seq(parsed){
var new_nodes = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__36232){
var vec__36233 = p__36232;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36233,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36233,(1),null);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"node","node",581201198),k,new cljs.core.Keyword(null,"style","style",-496642736),v], null));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(parsed));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parsed,new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new_nodes);
});
/**
 * Update the :nodes section as json doesn't allow maps as keys
 */
lib_draw_graph.parser.nodes_from_seq = (function lib_draw_graph$parser$nodes_from_seq(js){
var new_nodes = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,cur){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cur,new cljs.core.Keyword(null,"node","node",581201198)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cur,new cljs.core.Keyword(null,"style","style",-496642736)));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.get.cljs$core$IFn$_invoke$arity$2(js,new cljs.core.Keyword(null,"nodes","nodes",-2099585805)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(js,new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new_nodes);
});
/**
 * Converts the keys in the parse map to string, ready to be 
 * transformed into json.
 */
lib_draw_graph.parser.stringify_keys = (function lib_draw_graph$parser$stringify_keys(m){
return lib_draw_graph.util.update_keys(m,(function (k,p){
return true;
}),cljs.core.name);
});
/**
 * Converts json into a parse map
 */
lib_draw_graph.parser.keywordize_keys = (function lib_draw_graph$parser$keywordize_keys(js){
return lib_draw_graph.util.update_keys(js,(function (k,p){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p,"cluster-styles")){
return false;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p,"synonyms")){
return false;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p,"cluster-parents")){
return false;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p,"cluster-edges")){
return false;
} else {
return true;

}
}
}
}
}),cljs.core.keyword);
});
/**
 * converts a json string into a clojure map
 */
lib_draw_graph.parser.json__GT_clj = (function lib_draw_graph$parser$json__GT_clj(s){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(JSON.parse(s));
});
/**
 * converts a clojure map to json
 */
lib_draw_graph.parser.clj__GT_json = (function lib_draw_graph$parser$clj__GT_json(m){
return JSON.stringify(cljs.core.clj__GT_js(m));
});
/**
 * takes a parse map and converts properly to a json string
 */
lib_draw_graph.parser.parsed__GT_json = (function lib_draw_graph$parser$parsed__GT_json(parsed){
return lib_draw_graph.parser.clj__GT_json(lib_draw_graph.parser.stringify_keys(lib_draw_graph.parser.nodes__GT_seq(parsed)));
});
/**
 * takes in json and outputs a parse map as produced by parse-lines.
 */
lib_draw_graph.parser.json__GT_parsed = (function lib_draw_graph$parser$json__GT_parsed(js){
return lib_draw_graph.parser.nodes_from_seq(lib_draw_graph.parser.keywordize_keys(lib_draw_graph.parser.json__GT_clj(js)));
});
/**
 * Replaces nodes synonyms in edges.
 */
lib_draw_graph.parser.replace_synonyms_edges = (function lib_draw_graph$parser$replace_synonyms_edges(parsed){
var synonyms = new cljs.core.Keyword(null,"synonyms","synonyms",1693474381).cljs$core$IFn$_invoke$arity$1(parsed);
var syn__GT_node = ((function (synonyms){
return (function (syn){
var temp__5718__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(synonyms,syn);
if(cljs.core.truth_(temp__5718__auto__)){
var node = temp__5718__auto__;
return node;
} else {
throw lib_draw_graph.util.err(["synonym ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(syn)," in edge can't be found."].join(''));
}
});})(synonyms))
;
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(parsed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edges","edges",-694791395)], null),((function (synonyms,syn__GT_node){
return (function (edges){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (synonyms,syn__GT_node){
return (function (p1__36268_SHARP_){
var edge = p1__36268_SHARP_;
var edge_SINGLEQUOTE_ = (function (){var src = new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(edge);
if(lib_draw_graph.parser.synonym_QMARK_(src)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(edge,new cljs.core.Keyword(null,"src","src",-1651076051),syn__GT_node(src));
} else {
return edge;
}
})();
var edge_SINGLEQUOTE__SINGLEQUOTE_ = (function (){var dst = new cljs.core.Keyword(null,"dst","dst",844682948).cljs$core$IFn$_invoke$arity$1(edge_SINGLEQUOTE_);
if(lib_draw_graph.parser.synonym_QMARK_(dst)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(edge_SINGLEQUOTE_,new cljs.core.Keyword(null,"dst","dst",844682948),syn__GT_node(dst));
} else {
return edge_SINGLEQUOTE_;
}
})();
return edge_SINGLEQUOTE__SINGLEQUOTE_;
});})(synonyms,syn__GT_node))
,edges);
});})(synonyms,syn__GT_node))
);
});
lib_draw_graph.parser.replace_synonyms_nodes = (function lib_draw_graph$parser$replace_synonyms_nodes(parsed){
var synonyms = new cljs.core.Keyword(null,"synonyms","synonyms",1693474381).cljs$core$IFn$_invoke$arity$1(parsed);
var syn__GT_node = ((function (synonyms){
return (function (syn){
var temp__5718__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(synonyms,syn);
if(cljs.core.truth_(temp__5718__auto__)){
var node = temp__5718__auto__;
return node;
} else {
throw lib_draw_graph.util.err(["synonym ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(syn)," in edge can't be found."].join(''));
}
});})(synonyms))
;
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(parsed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodes","nodes",-2099585805)], null),((function (synonyms,syn__GT_node){
return (function (nodes){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (synonyms,syn__GT_node){
return (function (m,p__36274){
var vec__36275 = p__36274;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36275,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36275,(1),null);
if(lib_draw_graph.parser.synonym_QMARK_(k)){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k),cljs.core.PersistentArrayMap.createAsIfByAssoc([syn__GT_node(k),v])], 0));
} else {
return m;
}
});})(synonyms,syn__GT_node))
,nodes,nodes);
});})(synonyms,syn__GT_node))
);
});
lib_draw_graph.parser.parse_csv_or_json = (function lib_draw_graph$parser$parse_csv_or_json(s,fmt){
var parsed0 = (function (){var G__36280 = fmt;
var G__36280__$1 = (((G__36280 instanceof cljs.core.Keyword))?G__36280.fqn:null);
switch (G__36280__$1) {
case "json":
return lib_draw_graph.parser.json__GT_parsed(s);

break;
case "csv":
return lib_draw_graph.parser.parse_csv(s);

break;
default:
throw lib_draw_graph.util.err("format should be either :json or :csv");

}
})();
var parsed1 = lib_draw_graph.parser.replace_synonyms_edges(parsed0);
var parsed = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(lib_draw_graph.parser.replace_synonyms_nodes(parsed1),new cljs.core.Keyword(null,"synonyms","synonyms",1693474381));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"cluster-parents","cluster-parents",-1131098902).cljs$core$IFn$_invoke$arity$1(parsed0)], 0));

return parsed;
});

//# sourceMappingURL=lib_draw_graph.parser.js.map
