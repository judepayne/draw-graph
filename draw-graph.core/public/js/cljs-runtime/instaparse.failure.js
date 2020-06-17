goog.provide('instaparse.failure');
goog.require('cljs.core');
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
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),col], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.get.cljs$core$IFn$_invoke$arity$2(text,counter))){
var G__52287 = (line + (1));
var G__52288 = (1);
var G__52289 = (counter + (1));
line = G__52287;
col = G__52288;
counter = G__52289;
continue;
} else {
var G__52290 = line;
var G__52291 = (col + (1));
var G__52292 = (counter + (1));
line = G__52290;
col = G__52291;
counter = G__52292;
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
var G__52305 = cljs.core.next(chars);
var G__52306 = (n__$1 - (1));
chars = G__52305;
n__$1 = G__52306;
continue;
} else {
var G__52310 = cljs.core.next(chars);
var G__52311 = n__$1;
chars = G__52310;
n__$1 = G__52311;
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
var lc = instaparse.failure.index__GT_line_column(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(failure),text);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([failure,lc,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),instaparse.failure.get_line(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(lc),text)], null)], 0));
});
/**
 * Provides special case for printing negative lookahead reasons
 */
instaparse.failure.print_reason = (function instaparse$failure$print_reason(r){
if(cljs.core.truth_(new cljs.core.Keyword(null,"NOT","NOT",-1689245341).cljs$core$IFn$_invoke$arity$1(r))){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["NOT "], 0));

return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"NOT","NOT",-1689245341).cljs$core$IFn$_invoke$arity$1(r)], 0));
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"char-range","char-range",1443391389).cljs$core$IFn$_invoke$arity$1(r))){
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
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__52234){
var map__52235 = p__52234;
var map__52235__$1 = (((((!((map__52235 == null))))?(((((map__52235.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52235.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52235):map__52235);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52235__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52235__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52235__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52235__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Parse error at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column),":"].join('')], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([text], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.failure.marker(column)], 0));

var full_reasons = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expecting","expecting",-57706705),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"full","full",436801220),reason)));
var partial_reasons = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expecting","expecting",-57706705),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(new cljs.core.Keyword(null,"full","full",436801220)),reason)));
var total = (cljs.core.count(full_reasons) + cljs.core.count(partial_reasons));
if((total === (0))){
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),total)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Expected:"], 0));
} else {
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Expected one of:"], 0));

}
}

var seq__52237_52341 = cljs.core.seq(full_reasons);
var chunk__52238_52342 = null;
var count__52239_52343 = (0);
var i__52240_52344 = (0);
while(true){
if((i__52240_52344 < count__52239_52343)){
var r_52345 = chunk__52238_52342.cljs$core$IIndexed$_nth$arity$2(null,i__52240_52344);
instaparse.failure.print_reason(r_52345);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__52347 = seq__52237_52341;
var G__52348 = chunk__52238_52342;
var G__52349 = count__52239_52343;
var G__52350 = (i__52240_52344 + (1));
seq__52237_52341 = G__52347;
chunk__52238_52342 = G__52348;
count__52239_52343 = G__52349;
i__52240_52344 = G__52350;
continue;
} else {
var temp__5735__auto___52352 = cljs.core.seq(seq__52237_52341);
if(temp__5735__auto___52352){
var seq__52237_52353__$1 = temp__5735__auto___52352;
if(cljs.core.chunked_seq_QMARK_(seq__52237_52353__$1)){
var c__4609__auto___52354 = cljs.core.chunk_first(seq__52237_52353__$1);
var G__52355 = cljs.core.chunk_rest(seq__52237_52353__$1);
var G__52356 = c__4609__auto___52354;
var G__52357 = cljs.core.count(c__4609__auto___52354);
var G__52358 = (0);
seq__52237_52341 = G__52355;
chunk__52238_52342 = G__52356;
count__52239_52343 = G__52357;
i__52240_52344 = G__52358;
continue;
} else {
var r_52359 = cljs.core.first(seq__52237_52353__$1);
instaparse.failure.print_reason(r_52359);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__52361 = cljs.core.next(seq__52237_52353__$1);
var G__52362 = null;
var G__52363 = (0);
var G__52364 = (0);
seq__52237_52341 = G__52361;
chunk__52238_52342 = G__52362;
count__52239_52343 = G__52363;
i__52240_52344 = G__52364;
continue;
}
} else {
}
}
break;
}

var seq__52243 = cljs.core.seq(partial_reasons);
var chunk__52244 = null;
var count__52245 = (0);
var i__52246 = (0);
while(true){
if((i__52246 < count__52245)){
var r = chunk__52244.cljs$core$IIndexed$_nth$arity$2(null,i__52246);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__52368 = seq__52243;
var G__52369 = chunk__52244;
var G__52370 = count__52245;
var G__52371 = (i__52246 + (1));
seq__52243 = G__52368;
chunk__52244 = G__52369;
count__52245 = G__52370;
i__52246 = G__52371;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52243);
if(temp__5735__auto__){
var seq__52243__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52243__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52243__$1);
var G__52372 = cljs.core.chunk_rest(seq__52243__$1);
var G__52373 = c__4609__auto__;
var G__52374 = cljs.core.count(c__4609__auto__);
var G__52375 = (0);
seq__52243 = G__52372;
chunk__52244 = G__52373;
count__52245 = G__52374;
i__52246 = G__52375;
continue;
} else {
var r = cljs.core.first(seq__52243__$1);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__52376 = cljs.core.next(seq__52243__$1);
var G__52377 = null;
var G__52378 = (0);
var G__52379 = (0);
seq__52243 = G__52376;
chunk__52244 = G__52377;
count__52245 = G__52378;
i__52246 = G__52379;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=instaparse.failure.js.map
