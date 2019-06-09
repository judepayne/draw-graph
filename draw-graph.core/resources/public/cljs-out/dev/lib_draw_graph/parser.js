// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('lib_draw_graph.parser');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('lib_draw_graph.util');
goog.require('instaparse.core');
/**
 * Returns third element of coll, or nil.
 */
lib_draw_graph.parser.third = (function lib_draw_graph$parser$third(coll){
try{return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(coll,(2));
}catch (e29700){if((e29700 instanceof Error)){
var e = e29700;
return null;
} else {
throw e29700;

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
lib_draw_graph.parser.regex_kvs_esc = "#'([/\\+\\w\\d\\s\\n\\.\\(\\)@&:<>\\'#=/-]|(\\\\,)|(\\\\n))*'";
lib_draw_graph.parser.regex_all = "#'(.*)'";
lib_draw_graph.parser.unescapes = new cljs.core.PersistentArrayMap(null, 2, ["\\,",",","\\:",":"], null);
lib_draw_graph.parser.csv_grammar = ["S = <';'>  Cmt |\n        <'h,'> H   |\n        <'e,'> E   |\n        <'ce,'> Ce |\n        <'cp,'> Cp |\n        <'cs,'> Cs \n    <KVs-esc> = ",lib_draw_graph.parser.regex_kvs_esc,"\n    <KVs> = ",lib_draw_graph.parser.regex_kvs,"  \n    E = Node <','> Node (<','> Edge-meta? <'|'>Edge-style)?\n    Edge-style = KVs\n    Edge-meta = KVs-esc\n    Node = KVs-esc (<'|'> Node-style)?\n    Node-style = KVs\n    H = ",lib_draw_graph.parser.regex_kvs,"\n    Ce = KVs\n    Cp = KVs\n    Cs = ",lib_draw_graph.parser.regex_text,"<'|'>",lib_draw_graph.parser.regex_kvs,"\n    Cmt = ",lib_draw_graph.parser.regex_all].join('');
lib_draw_graph.parser.csv_line_parser = instaparse.core.parser.cljs$core$IFn$_invoke$arity$variadic(lib_draw_graph.parser.csv_grammar,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$auto_DASH_whitespace,lib_draw_graph.parser.whitespace], 0));
lib_draw_graph.parser.parse_header = (function lib_draw_graph$parser$parse_header(state,s){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$header,(function (){var G__29701 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$H,(function (args){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,lib_draw_graph.parser.split_parts(args));
}),cljs.core.cst$kw$S,(function (arg){
return arg;
})], null);
var G__29702 = s;
return (instaparse.core.transform.cljs$core$IFn$_invoke$arity$2 ? instaparse.core.transform.cljs$core$IFn$_invoke$arity$2(G__29701,G__29702) : instaparse.core.transform.call(null,G__29701,G__29702));
})()], null);
});
lib_draw_graph.parser.attribute_map = (function lib_draw_graph$parser$attribute_map(var_args){
var args__4736__auto__ = [];
var len__4730__auto___29712 = arguments.length;
var i__4731__auto___29713 = (0);
while(true){
if((i__4731__auto___29713 < len__4730__auto___29712)){
args__4736__auto__.push((arguments[i__4731__auto___29713]));

var G__29714 = (i__4731__auto___29713 + (1));
i__4731__auto___29713 = G__29714;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return lib_draw_graph.parser.attribute_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

lib_draw_graph.parser.attribute_map.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__29705){
var map__29706 = p__29705;
var map__29706__$1 = (((((!((map__29706 == null))))?(((((map__29706.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29706.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29706):map__29706);
var meta_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29706__$1,cljs.core.cst$kw$meta_QMARK_,false);
var args = (cljs.core.truth_(meta_QMARK_)?lib_draw_graph.parser.split_parts_meta(s):lib_draw_graph.parser.split_parts(s));
var n = cljs.core.count(args);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",cljs.core.first(args))){
return null;
} else {
if(cljs.core.even_QMARK_(n)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (args,n,map__29706,map__29706__$1,meta_QMARK_){
return (function (acc,p__29708){
var vec__29709 = p__29708;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29709,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29709,(1),null);
var k_SINGLEQUOTE_ = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k);
var temp__5718__auto__ = (k_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$1 ? k_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$1(acc) : k_SINGLEQUOTE_.call(null,acc));
if(cljs.core.truth_(temp__5718__auto__)){
var old = temp__5718__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k_SINGLEQUOTE_,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(old),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k_SINGLEQUOTE_,v);
}
});})(args,n,map__29706,map__29706__$1,meta_QMARK_))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),args));
} else {
throw lib_draw_graph.util.err(["Error parsing: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)," > Must be an even number of parts"].join(''));

}
}
});

lib_draw_graph.parser.attribute_map.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
lib_draw_graph.parser.attribute_map.cljs$lang$applyTo = (function (seq29703){
var G__29704 = cljs.core.first(seq29703);
var seq29703__$1 = cljs.core.next(seq29703);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29704,seq29703__$1);
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4523__auto__ = (function lib_draw_graph$parser$map_vals_$_iter__29715(s__29716){
return (new cljs.core.LazySeq(null,(function (){
var s__29716__$1 = s__29716;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__29716__$1);
if(temp__5720__auto__){
var s__29716__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29716__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__29716__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__29718 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__29717 = (0);
while(true){
if((i__29717 < size__4522__auto__)){
var vec__29719 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__29717);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29719,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29719,(1),null);
cljs.core.chunk_append(b__29718,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v))], null));

var G__29725 = (i__29717 + (1));
i__29717 = G__29725;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29718),lib_draw_graph$parser$map_vals_$_iter__29715(cljs.core.chunk_rest(s__29716__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29718),null);
}
} else {
var vec__29722 = cljs.core.first(s__29716__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29722,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29722,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v))], null),lib_draw_graph$parser$map_vals_$_iter__29715(cljs.core.rest(s__29716__$2)));
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__29726){
var vec__29727 = p__29726;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29727,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29727,(1),null);
return clojure.string.replace(acc,k,v);
}),s,smap);
});
lib_draw_graph.parser.unesc = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(lib_draw_graph.parser.unescape,lib_draw_graph.parser.unescapes);
lib_draw_graph.parser.unescape_edge = (function lib_draw_graph$parser$unescape_edge(e){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,cur){
if((cur == null)){
return null;
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$edges,cur], null),lib_draw_graph.parser.map_vals,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(lib_draw_graph.parser.unescape,lib_draw_graph.parser.unescapes));
}
}),e,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$src,cljs.core.cst$kw$dst,cljs.core.cst$kw$meta], null));
});
lib_draw_graph.parser.parse_edge = (function lib_draw_graph$parser$parse_edge(state,s){
var nk = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("node"));
var sk = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("style"));
var edge = (function (){var G__29730 = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$Node_DASH_style,lib_draw_graph.parser.attribute_map,cljs.core.cst$kw$Node,((function (nk,sk){
return (function() { 
var G__29735__delegate = function (args){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([nk,cljs.core.zipmap(cljs.core.cst$kw$header.cljs$core$IFn$_invoke$arity$1(state),lib_draw_graph.parser.split_parts_meta((function (){var G__29732 = cljs.core.first(args);
return (lib_draw_graph.parser.unesc.cljs$core$IFn$_invoke$arity$1 ? lib_draw_graph.parser.unesc.cljs$core$IFn$_invoke$arity$1(G__29732) : lib_draw_graph.parser.unesc.call(null,G__29732));
})())),sk,(((!((cljs.core.second(args) == null))))?cljs.core.second(args):null)]);
};
var G__29735 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29736__i = 0, G__29736__a = new Array(arguments.length -  0);
while (G__29736__i < G__29736__a.length) {G__29736__a[G__29736__i] = arguments[G__29736__i + 0]; ++G__29736__i;}
  args = new cljs.core.IndexedSeq(G__29736__a,0,null);
} 
return G__29735__delegate.call(this,args);};
G__29735.cljs$lang$maxFixedArity = 0;
G__29735.cljs$lang$applyTo = (function (arglist__29737){
var args = cljs.core.seq(arglist__29737);
return G__29735__delegate(args);
});
G__29735.cljs$core$IFn$_invoke$arity$variadic = G__29735__delegate;
return G__29735;
})()
;})(nk,sk))
,cljs.core.cst$kw$Edge_DASH_meta,((function (nk,sk){
return (function() { 
var G__29738__delegate = function (args){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$edge_DASH_meta,lib_draw_graph.parser.attribute_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.first(args),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$meta_QMARK_,true], 0))], null);
};
var G__29738 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29739__i = 0, G__29739__a = new Array(arguments.length -  0);
while (G__29739__i < G__29739__a.length) {G__29739__a[G__29739__i] = arguments[G__29739__i + 0]; ++G__29739__i;}
  args = new cljs.core.IndexedSeq(G__29739__a,0,null);
} 
return G__29738__delegate.call(this,args);};
G__29738.cljs$lang$maxFixedArity = 0;
G__29738.cljs$lang$applyTo = (function (arglist__29740){
var args = cljs.core.seq(arglist__29740);
return G__29738__delegate(args);
});
G__29738.cljs$core$IFn$_invoke$arity$variadic = G__29738__delegate;
return G__29738;
})()
;})(nk,sk))
,cljs.core.cst$kw$Edge_DASH_style,((function (nk,sk){
return (function() { 
var G__29741__delegate = function (args){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$edge_DASH_style,lib_draw_graph.parser.attribute_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.first(args),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$meta_QMARK_,true], 0))], null);
};
var G__29741 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29742__i = 0, G__29742__a = new Array(arguments.length -  0);
while (G__29742__i < G__29742__a.length) {G__29742__a[G__29742__i] = arguments[G__29742__i + 0]; ++G__29742__i;}
  args = new cljs.core.IndexedSeq(G__29742__a,0,null);
} 
return G__29741__delegate.call(this,args);};
G__29741.cljs$lang$maxFixedArity = 0;
G__29741.cljs$lang$applyTo = (function (arglist__29743){
var args = cljs.core.seq(arglist__29743);
return G__29741__delegate(args);
});
G__29741.cljs$core$IFn$_invoke$arity$variadic = G__29741__delegate;
return G__29741;
})()
;})(nk,sk))
,cljs.core.cst$kw$E,((function (nk,sk){
return (function() { 
var G__29744__delegate = function (args){
return args;
};
var G__29744 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29745__i = 0, G__29745__a = new Array(arguments.length -  0);
while (G__29745__i < G__29745__a.length) {G__29745__a[G__29745__i] = arguments[G__29745__i + 0]; ++G__29745__i;}
  args = new cljs.core.IndexedSeq(G__29745__a,0,null);
} 
return G__29744__delegate.call(this,args);};
G__29744.cljs$lang$maxFixedArity = 0;
G__29744.cljs$lang$applyTo = (function (arglist__29746){
var args = cljs.core.seq(arglist__29746);
return G__29744__delegate(args);
});
G__29744.cljs$core$IFn$_invoke$arity$variadic = G__29744__delegate;
return G__29744;
})()
;})(nk,sk))
], null);
var G__29731 = s;
return (instaparse.core.transform.cljs$core$IFn$_invoke$arity$2 ? instaparse.core.transform.cljs$core$IFn$_invoke$arity$2(G__29730,G__29731) : instaparse.core.transform.call(null,G__29730,G__29731));
})();
var edge_SINGLEQUOTE_ = edge;
var edge__$1 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$edges,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$src,(function (){var G__29733 = cljs.core.first(edge_SINGLEQUOTE_);
return (nk.cljs$core$IFn$_invoke$arity$1 ? nk.cljs$core$IFn$_invoke$arity$1(G__29733) : nk.call(null,G__29733));
})(),cljs.core.cst$kw$dst,(function (){var G__29734 = cljs.core.second(edge_SINGLEQUOTE_);
return (nk.cljs$core$IFn$_invoke$arity$1 ? nk.cljs$core$IFn$_invoke$arity$1(G__29734) : nk.call(null,G__29734));
})(),cljs.core.cst$kw$meta,lib_draw_graph.parser.extract(cljs.core.cst$kw$edge_DASH_meta,cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),edge_SINGLEQUOTE_)),cljs.core.cst$kw$style,lib_draw_graph.parser.extract(cljs.core.cst$kw$edge_DASH_style,cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),edge_SINGLEQUOTE_))], null)], null);
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
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([edge__$1,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$node_DASH_styles,styles], null)], 0));
} else {
return edge__$1;
}
})();
if((cljs.core.cst$kw$edges.cljs$core$IFn$_invoke$arity$1(state) == null)){
var s1 = cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$edges], null),(new cljs.core.List(null,cljs.core.cst$kw$edges.cljs$core$IFn$_invoke$arity$1(with_styles),null,(1),null)));
if(cljs.core.truth_(cljs.core.cst$kw$node_DASH_styles.cljs$core$IFn$_invoke$arity$1(with_styles))){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s1,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(with_styles,cljs.core.cst$kw$edges)], 0));
} else {
return s1;
}
} else {
var s1 = cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$edges,cljs.core.cst$kw$edges.cljs$core$IFn$_invoke$arity$1(edge__$1)], null)], 0));
if(cljs.core.truth_(cljs.core.cst$kw$node_DASH_styles.cljs$core$IFn$_invoke$arity$1(with_styles))){
return lib_draw_graph.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s1,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(with_styles,cljs.core.cst$kw$edges)], 0));
} else {
return s1;
}
}
});
lib_draw_graph.parser.parse_cluster_style = (function lib_draw_graph$parser$parse_cluster_style(state,s){
var cluster = (function (){var G__29747 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$Cs,(function() { 
var G__29749__delegate = function (args){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(args),lib_draw_graph.parser.attribute_map(cljs.core.second(args))]);
};
var G__29749 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29750__i = 0, G__29750__a = new Array(arguments.length -  0);
while (G__29750__i < G__29750__a.length) {G__29750__a[G__29750__i] = arguments[G__29750__i + 0]; ++G__29750__i;}
  args = new cljs.core.IndexedSeq(G__29750__a,0,null);
} 
return G__29749__delegate.call(this,args);};
G__29749.cljs$lang$maxFixedArity = 0;
G__29749.cljs$lang$applyTo = (function (arglist__29751){
var args = cljs.core.seq(arglist__29751);
return G__29749__delegate(args);
});
G__29749.cljs$core$IFn$_invoke$arity$variadic = G__29749__delegate;
return G__29749;
})()
], null);
var G__29748 = s;
return (instaparse.core.transform.cljs$core$IFn$_invoke$arity$2 ? instaparse.core.transform.cljs$core$IFn$_invoke$arity$2(G__29747,G__29748) : instaparse.core.transform.call(null,G__29747,G__29748));
})();
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cluster_DASH_styles,cluster], null)], 0));
});
lib_draw_graph.parser.parse_cluster_parent = (function lib_draw_graph$parser$parse_cluster_parent(state,s){
var relns = (function (){var G__29752 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$Cp,lib_draw_graph.parser.pairs], null);
var G__29753 = s;
return (instaparse.core.transform.cljs$core$IFn$_invoke$arity$2 ? instaparse.core.transform.cljs$core$IFn$_invoke$arity$2(G__29752,G__29753) : instaparse.core.transform.call(null,G__29752,G__29753));
})();
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(lib_draw_graph.parser.conjcat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cluster_DASH_parents,relns], null)], 0));
});
lib_draw_graph.parser.parse_cluster_edge = (function lib_draw_graph$parser$parse_cluster_edge(state,s){
var relns = (function (){var G__29754 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$Ce,lib_draw_graph.parser.pairs], null);
var G__29755 = s;
return (instaparse.core.transform.cljs$core$IFn$_invoke$arity$2 ? instaparse.core.transform.cljs$core$IFn$_invoke$arity$2(G__29754,G__29755) : instaparse.core.transform.call(null,G__29754,G__29755));
})();
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(lib_draw_graph.parser.conjcat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cluster_DASH_edges,relns], null)], 0));
});
lib_draw_graph.parser.parse_comments = (function lib_draw_graph$parser$parse_comments(state,s){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(lib_draw_graph.parser.conjcat,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$commented_DASH_out,s], null)], 0));
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
var G__29756 = cljs.core.first(line);
var G__29756__$1 = (((G__29756 instanceof cljs.core.Keyword))?G__29756.fqn:null);
switch (G__29756__$1) {
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