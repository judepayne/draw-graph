// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('instaparse.failure');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('instaparse.print');
/**
 * Takes an index into text, and determines the line and column info
 */
instaparse.failure.index__GT_line_column = (function instaparse$failure$index__GT_line_column(index,text){
var line = (1);
var col = (1);
var counter = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,counter)){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$line,line,cljs.core.cst$kw$column,col], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.get.cljs$core$IFn$_invoke$arity$2(text,counter))){
var G__20900 = (line + (1));
var G__20901 = (1);
var G__20902 = (counter + (1));
line = G__20900;
col = G__20901;
counter = G__20902;
continue;
} else {
var G__20903 = line;
var G__20904 = (col + (1));
var G__20905 = (counter + (1));
line = G__20903;
col = G__20904;
counter = G__20905;
continue;

}
}
break;
}
});
instaparse.failure.get_line = (function instaparse$failure$get_line(n,text){
var chars = cljs.core.seq(clojure.string.replace(text,"\r\n","\n"));
var n__$1 = n;
while(true){
if(cljs.core.empty_QMARK_(chars)){
return "";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n__$1,(1))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["\n",null], null), null)),chars));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.first(chars))){
var G__20906 = cljs.core.next(chars);
var G__20907 = (n__$1 - (1));
chars = G__20906;
n__$1 = G__20907;
continue;
} else {
var G__20908 = cljs.core.next(chars);
var G__20909 = n__$1;
chars = G__20908;
n__$1 = G__20909;
continue;

}
}
}
break;
}
});
/**
 * Creates string with caret at nth position, 1-based
 */
instaparse.failure.marker = (function instaparse$failure$marker(n){
if(cljs.core.integer_QMARK_(n)){
if((n <= (1))){
return "^";
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((n - (1))," "),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["^"], null)));
}
} else {
return null;
}
});
/**
 * Adds text, line, and column info to failure object.
 */
instaparse.failure.augment_failure = (function instaparse$failure$augment_failure(failure,text){
var lc = instaparse.failure.index__GT_line_column(cljs.core.cst$kw$index.cljs$core$IFn$_invoke$arity$1(failure),text);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([failure,lc,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text,instaparse.failure.get_line(cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(lc),text)], null)], 0));
});
/**
 * Provides special case for printing negative lookahead reasons
 */
instaparse.failure.print_reason = (function instaparse$failure$print_reason(r){
if(cljs.core.truth_(cljs.core.cst$kw$NOT.cljs$core$IFn$_invoke$arity$1(r))){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["NOT "], 0));

return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$NOT.cljs$core$IFn$_invoke$arity$1(r)], 0));
} else {
if(cljs.core.truth_(cljs.core.cst$kw$char_DASH_range.cljs$core$IFn$_invoke$arity$1(r))){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.print.char_range__GT_str(r)], 0));
} else {
if((r instanceof RegExp)){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.print.regexp__GT_str(r)], 0));
} else {
return cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r], 0));

}
}
}
});
/**
 * Takes an augmented failure object and prints the error message
 */
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__20910){
var map__20911 = p__20910;
var map__20911__$1 = (((((!((map__20911 == null))))?(((((map__20911.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20911.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20911):map__20911);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20911__$1,cljs.core.cst$kw$line);
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20911__$1,cljs.core.cst$kw$column);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20911__$1,cljs.core.cst$kw$text);
var reason = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20911__$1,cljs.core.cst$kw$reason);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Parse error at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column),":"].join('')], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([text], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.failure.marker(column)], 0));

var full_reasons = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expecting,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$full,reason)));
var partial_reasons = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expecting,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.cst$kw$full),reason)));
var total = (cljs.core.count(full_reasons) + cljs.core.count(partial_reasons));
if((total === (0))){
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),total)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Expected:"], 0));
} else {
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Expected one of:"], 0));

}
}

var seq__20913_20921 = cljs.core.seq(full_reasons);
var chunk__20914_20922 = null;
var count__20915_20923 = (0);
var i__20916_20924 = (0);
while(true){
if((i__20916_20924 < count__20915_20923)){
var r_20925 = chunk__20914_20922.cljs$core$IIndexed$_nth$arity$2(null,i__20916_20924);
instaparse.failure.print_reason(r_20925);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__20926 = seq__20913_20921;
var G__20927 = chunk__20914_20922;
var G__20928 = count__20915_20923;
var G__20929 = (i__20916_20924 + (1));
seq__20913_20921 = G__20926;
chunk__20914_20922 = G__20927;
count__20915_20923 = G__20928;
i__20916_20924 = G__20929;
continue;
} else {
var temp__5720__auto___20930 = cljs.core.seq(seq__20913_20921);
if(temp__5720__auto___20930){
var seq__20913_20931__$1 = temp__5720__auto___20930;
if(cljs.core.chunked_seq_QMARK_(seq__20913_20931__$1)){
var c__4550__auto___20932 = cljs.core.chunk_first(seq__20913_20931__$1);
var G__20933 = cljs.core.chunk_rest(seq__20913_20931__$1);
var G__20934 = c__4550__auto___20932;
var G__20935 = cljs.core.count(c__4550__auto___20932);
var G__20936 = (0);
seq__20913_20921 = G__20933;
chunk__20914_20922 = G__20934;
count__20915_20923 = G__20935;
i__20916_20924 = G__20936;
continue;
} else {
var r_20937 = cljs.core.first(seq__20913_20931__$1);
instaparse.failure.print_reason(r_20937);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__20938 = cljs.core.next(seq__20913_20931__$1);
var G__20939 = null;
var G__20940 = (0);
var G__20941 = (0);
seq__20913_20921 = G__20938;
chunk__20914_20922 = G__20939;
count__20915_20923 = G__20940;
i__20916_20924 = G__20941;
continue;
}
} else {
}
}
break;
}

var seq__20917 = cljs.core.seq(partial_reasons);
var chunk__20918 = null;
var count__20919 = (0);
var i__20920 = (0);
while(true){
if((i__20920 < count__20919)){
var r = chunk__20918.cljs$core$IIndexed$_nth$arity$2(null,i__20920);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__20942 = seq__20917;
var G__20943 = chunk__20918;
var G__20944 = count__20919;
var G__20945 = (i__20920 + (1));
seq__20917 = G__20942;
chunk__20918 = G__20943;
count__20919 = G__20944;
i__20920 = G__20945;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__20917);
if(temp__5720__auto__){
var seq__20917__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20917__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__20917__$1);
var G__20946 = cljs.core.chunk_rest(seq__20917__$1);
var G__20947 = c__4550__auto__;
var G__20948 = cljs.core.count(c__4550__auto__);
var G__20949 = (0);
seq__20917 = G__20946;
chunk__20918 = G__20947;
count__20919 = G__20948;
i__20920 = G__20949;
continue;
} else {
var r = cljs.core.first(seq__20917__$1);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__20950 = cljs.core.next(seq__20917__$1);
var G__20951 = null;
var G__20952 = (0);
var G__20953 = (0);
seq__20917 = G__20950;
chunk__20918 = G__20951;
count__20919 = G__20952;
i__20920 = G__20953;
continue;
}
} else {
return null;
}
}
break;
}
});
