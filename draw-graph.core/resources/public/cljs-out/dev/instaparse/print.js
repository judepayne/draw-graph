// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('instaparse.print');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
instaparse.print.paren_for_tags = (function instaparse$print$paren_for_tags(tag_set,hidden_QMARK_,parser){
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.not(hidden_QMARK_);
if(and__4120__auto__){
var G__20795 = (function (){var G__20796 = cljs.core.cst$kw$tag;
return (parser.cljs$core$IFn$_invoke$arity$1 ? parser.cljs$core$IFn$_invoke$arity$1(G__20796) : parser.call(null,G__20796));
})();
return (tag_set.cljs$core$IFn$_invoke$arity$1 ? tag_set.cljs$core$IFn$_invoke$arity$1(G__20795) : tag_set.call(null,G__20795));
} else {
return and__4120__auto__;
}
})())){
return ["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1((instaparse.print.combinators__GT_str.cljs$core$IFn$_invoke$arity$2 ? instaparse.print.combinators__GT_str.cljs$core$IFn$_invoke$arity$2(parser,false) : instaparse.print.combinators__GT_str.call(null,parser,false))),")"].join('');
} else {
return (instaparse.print.combinators__GT_str.cljs$core$IFn$_invoke$arity$2 ? instaparse.print.combinators__GT_str.cljs$core$IFn$_invoke$arity$2(parser,false) : instaparse.print.combinators__GT_str.call(null,parser,false));
}
});
instaparse.print.paren_for_compound = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(instaparse.print.paren_for_tags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$cat,null,cljs.core.cst$kw$ord,null,cljs.core.cst$kw$alt,null], null), null));
/**
 * Replaces whitespace characters with escape sequences for better printing
 */
instaparse.print.regexp_replace = (function instaparse$print$regexp_replace(s){
var G__20797 = s;
switch (G__20797) {
case "\n":
return "\\n";

break;
case "\b":
return "\\b";

break;
case "\f":
return "\\f";

break;
case "\r":
return "\\r";

break;
case "\t":
return "\\t";

break;
default:
return s;

}
});
instaparse.print.regexp__GT_str = (function instaparse$print$regexp__GT_str(r){
return clojure.string.replace(["#\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(r.source,(1))),"\""].join(''),/[\s]/,instaparse.print.regexp_replace);
});
instaparse.print.number__GT_hex_padded = (function instaparse$print$number__GT_hex_padded(n){
if((n <= (4095))){
return ["0000",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n.toString((16)))].join('').substr((-4));
} else {
return n.toString((16));
}
});

instaparse.print.char_range__GT_str = (function instaparse$print$char_range__GT_str(p__20799){
var map__20800 = p__20799;
var map__20800__$1 = (((((!((map__20800 == null))))?(((((map__20800.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20800.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20800):map__20800);
var lo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20800__$1,cljs.core.cst$kw$lo);
var hi = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20800__$1,cljs.core.cst$kw$hi);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lo,hi)){
return ["%x",cljs.core.str.cljs$core$IFn$_invoke$arity$1(instaparse.print.number__GT_hex_padded(lo))].join('');
} else {
return ["%x",cljs.core.str.cljs$core$IFn$_invoke$arity$1(instaparse.print.number__GT_hex_padded(lo)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(instaparse.print.number__GT_hex_padded(hi))].join('');
}
});
/**
 * Stringifies a parser built from combinators
 */
instaparse.print.combinators__GT_str = (function instaparse$print$combinators__GT_str(var_args){
var G__20803 = arguments.length;
switch (G__20803) {
case 1:
return instaparse.print.combinators__GT_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return instaparse.print.combinators__GT_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

instaparse.print.combinators__GT_str.cljs$core$IFn$_invoke$arity$1 = (function (p){
return instaparse.print.combinators__GT_str.cljs$core$IFn$_invoke$arity$2(p,false);
});

instaparse.print.combinators__GT_str.cljs$core$IFn$_invoke$arity$2 = (function (p__20804,hidden_QMARK_){
var map__20805 = p__20804;
var map__20805__$1 = (((((!((map__20805 == null))))?(((((map__20805.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20805.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20805):map__20805);
var p = map__20805__$1;
var parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20805__$1,cljs.core.cst$kw$parser);
var parser1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20805__$1,cljs.core.cst$kw$parser1);
var parser2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20805__$1,cljs.core.cst$kw$parser2);
var parsers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20805__$1,cljs.core.cst$kw$parsers);
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20805__$1,cljs.core.cst$kw$tag);
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.not(hidden_QMARK_);
if(and__4120__auto__){
return cljs.core.cst$kw$hide.cljs$core$IFn$_invoke$arity$1(p);
} else {
return and__4120__auto__;
}
})())){
return ["<",cljs.core.str.cljs$core$IFn$_invoke$arity$1(instaparse.print.combinators__GT_str.cljs$core$IFn$_invoke$arity$2(p,true)),">"].join('');
} else {
var G__20807 = tag;
var G__20807__$1 = (((G__20807 instanceof cljs.core.Keyword))?G__20807.fqn:null);
switch (G__20807__$1) {
case "epsilon":
return "\u03B5";

break;
case "opt":
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((instaparse.print.paren_for_compound.cljs$core$IFn$_invoke$arity$2 ? instaparse.print.paren_for_compound.cljs$core$IFn$_invoke$arity$2(hidden_QMARK_,parser) : instaparse.print.paren_for_compound.call(null,hidden_QMARK_,parser))),"?"].join('');

break;
case "plus":
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((instaparse.print.paren_for_compound.cljs$core$IFn$_invoke$arity$2 ? instaparse.print.paren_for_compound.cljs$core$IFn$_invoke$arity$2(hidden_QMARK_,parser) : instaparse.print.paren_for_compound.call(null,hidden_QMARK_,parser))),"+"].join('');

break;
case "star":
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((instaparse.print.paren_for_compound.cljs$core$IFn$_invoke$arity$2 ? instaparse.print.paren_for_compound.cljs$core$IFn$_invoke$arity$2(hidden_QMARK_,parser) : instaparse.print.paren_for_compound.call(null,hidden_QMARK_,parser))),"*"].join('');

break;
case "rep":
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$min.cljs$core$IFn$_invoke$arity$1(p),cljs.core.cst$kw$max.cljs$core$IFn$_invoke$arity$1(p))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((instaparse.print.paren_for_compound.cljs$core$IFn$_invoke$arity$2 ? instaparse.print.paren_for_compound.cljs$core$IFn$_invoke$arity$2(hidden_QMARK_,parser) : instaparse.print.paren_for_compound.call(null,hidden_QMARK_,parser))),"{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$min.cljs$core$IFn$_invoke$arity$1(p)),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$max.cljs$core$IFn$_invoke$arity$1(p)),"}"].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((instaparse.print.paren_for_compound.cljs$core$IFn$_invoke$arity$2 ? instaparse.print.paren_for_compound.cljs$core$IFn$_invoke$arity$2(hidden_QMARK_,parser) : instaparse.print.paren_for_compound.call(null,hidden_QMARK_,parser))),"{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$min.cljs$core$IFn$_invoke$arity$1(p)),"}"].join('');
}

break;
case "alt":
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" | ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(instaparse.print.paren_for_tags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ord,null], null), null),hidden_QMARK_),parsers));

break;
case "ord":
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(instaparse.print.paren_for_tags(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$alt,null], null), null),hidden_QMARK_,parser1))," / ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(instaparse.print.paren_for_tags(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$alt,null], null), null),hidden_QMARK_,parser2))].join('');

break;
case "cat":
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(instaparse.print.paren_for_tags,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ord,null,cljs.core.cst$kw$alt,null], null), null),hidden_QMARK_),parsers));

break;
case "string":
var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__20808_20818 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__20809_20819 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__20810_20820 = true;
var _STAR_print_fn_STAR__temp_val__20811_20821 = ((function (_STAR_print_newline_STAR__orig_val__20808_20818,_STAR_print_fn_STAR__orig_val__20809_20819,_STAR_print_newline_STAR__temp_val__20810_20820,sb__4661__auto__,G__20807,G__20807__$1,map__20805,map__20805__$1,p,parser,parser1,parser2,parsers,tag){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__20808_20818,_STAR_print_fn_STAR__orig_val__20809_20819,_STAR_print_newline_STAR__temp_val__20810_20820,sb__4661__auto__,G__20807,G__20807__$1,map__20805,map__20805__$1,p,parser,parser1,parser2,parsers,tag))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__20810_20820;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__20811_20821;

try{cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$string.cljs$core$IFn$_invoke$arity$1(p)], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__20809_20819;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__20808_20818;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);

break;
case "string-ci":
var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__20812_20822 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__20813_20823 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__20814_20824 = true;
var _STAR_print_fn_STAR__temp_val__20815_20825 = ((function (_STAR_print_newline_STAR__orig_val__20812_20822,_STAR_print_fn_STAR__orig_val__20813_20823,_STAR_print_newline_STAR__temp_val__20814_20824,sb__4661__auto__,G__20807,G__20807__$1,map__20805,map__20805__$1,p,parser,parser1,parser2,parsers,tag){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__20812_20822,_STAR_print_fn_STAR__orig_val__20813_20823,_STAR_print_newline_STAR__temp_val__20814_20824,sb__4661__auto__,G__20807,G__20807__$1,map__20805,map__20805__$1,p,parser,parser1,parser2,parsers,tag))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__20814_20824;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__20815_20825;

try{cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$string.cljs$core$IFn$_invoke$arity$1(p)], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__20813_20823;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__20812_20822;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);

break;
case "char":
return instaparse.print.char_range__GT_str(p);

break;
case "regexp":
return instaparse.print.regexp__GT_str(cljs.core.cst$kw$regexp.cljs$core$IFn$_invoke$arity$1(p));

break;
case "nt":
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$keyword.cljs$core$IFn$_invoke$arity$1(p)),(1));

break;
case "look":
return ["&",cljs.core.str.cljs$core$IFn$_invoke$arity$1((instaparse.print.paren_for_compound.cljs$core$IFn$_invoke$arity$2 ? instaparse.print.paren_for_compound.cljs$core$IFn$_invoke$arity$2(hidden_QMARK_,parser) : instaparse.print.paren_for_compound.call(null,hidden_QMARK_,parser)))].join('');

break;
case "neg":
return ["!",cljs.core.str.cljs$core$IFn$_invoke$arity$1((instaparse.print.paren_for_compound.cljs$core$IFn$_invoke$arity$2 ? instaparse.print.paren_for_compound.cljs$core$IFn$_invoke$arity$2(hidden_QMARK_,parser) : instaparse.print.paren_for_compound.call(null,hidden_QMARK_,parser)))].join('');

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20807__$1)].join('')));

}
}
});

instaparse.print.combinators__GT_str.cljs$lang$maxFixedArity = 2;

/**
 * Takes a non-terminal symbol and a parser built from combinators,
 * and returns a string for the rule.
 */
instaparse.print.rule__GT_str = (function instaparse$print$rule__GT_str(non_terminal,parser){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reduction_DASH_type.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$red.cljs$core$IFn$_invoke$arity$1(parser)),cljs.core.cst$kw$raw)){
return ["<",cljs.core.name(non_terminal),">"," = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(instaparse.print.combinators__GT_str.cljs$core$IFn$_invoke$arity$1(parser))].join('');
} else {
return [cljs.core.name(non_terminal)," = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(instaparse.print.combinators__GT_str.cljs$core$IFn$_invoke$arity$1(parser))].join('');
}
});
/**
 * Takes a Parser object, i.e., something with a grammar map and a start 
 * production keyword, and stringifies it.
 */
instaparse.print.Parser__GT_str = (function instaparse$print$Parser__GT_str(p__20826){
var map__20827 = p__20826;
var map__20827__$1 = (((((!((map__20827 == null))))?(((((map__20827.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20827.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20827):map__20827);
var grammar = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20827__$1,cljs.core.cst$kw$grammar);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20827__$1,cljs.core.cst$kw$start_DASH_production);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.cons(instaparse.print.rule__GT_str(start,(grammar.cljs$core$IFn$_invoke$arity$1 ? grammar.cljs$core$IFn$_invoke$arity$1(start) : grammar.call(null,start))),(function (){var iter__4523__auto__ = ((function (map__20827,map__20827__$1,grammar,start){
return (function instaparse$print$Parser__GT_str_$_iter__20829(s__20830){
return (new cljs.core.LazySeq(null,((function (map__20827,map__20827__$1,grammar,start){
return (function (){
var s__20830__$1 = s__20830;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__20830__$1);
if(temp__5720__auto__){
var s__20830__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20830__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__20830__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__20832 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__20831 = (0);
while(true){
if((i__20831 < size__4522__auto__)){
var vec__20833 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__20831);
var non_terminal = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20833,(0),null);
var parser = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20833,(1),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(non_terminal,start)){
cljs.core.chunk_append(b__20832,instaparse.print.rule__GT_str(non_terminal,parser));

var G__20839 = (i__20831 + (1));
i__20831 = G__20839;
continue;
} else {
var G__20840 = (i__20831 + (1));
i__20831 = G__20840;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20832),instaparse$print$Parser__GT_str_$_iter__20829(cljs.core.chunk_rest(s__20830__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20832),null);
}
} else {
var vec__20836 = cljs.core.first(s__20830__$2);
var non_terminal = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20836,(0),null);
var parser = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20836,(1),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(non_terminal,start)){
return cljs.core.cons(instaparse.print.rule__GT_str(non_terminal,parser),instaparse$print$Parser__GT_str_$_iter__20829(cljs.core.rest(s__20830__$2)));
} else {
var G__20841 = cljs.core.rest(s__20830__$2);
s__20830__$1 = G__20841;
continue;
}
}
} else {
return null;
}
break;
}
});})(map__20827,map__20827__$1,grammar,start))
,null,null));
});})(map__20827,map__20827__$1,grammar,start))
;
return iter__4523__auto__(grammar);
})()));
});
