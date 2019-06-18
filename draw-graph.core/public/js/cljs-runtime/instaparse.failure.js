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
var G__47581 = (line + (1));
var G__47582 = (1);
var G__47583 = (counter + (1));
line = G__47581;
col = G__47582;
counter = G__47583;
continue;
} else {
var G__47585 = line;
var G__47586 = (col + (1));
var G__47587 = (counter + (1));
line = G__47585;
col = G__47586;
counter = G__47587;
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
var G__47588 = cljs.core.next(chars);
var G__47589 = (n__$1 - (1));
chars = G__47588;
n__$1 = G__47589;
continue;
} else {
var G__47590 = cljs.core.next(chars);
var G__47591 = n__$1;
chars = G__47590;
n__$1 = G__47591;
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
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__47550){
var map__47551 = p__47550;
var map__47551__$1 = (((((!((map__47551 == null))))?(((((map__47551.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47551.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47551):map__47551);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47551__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47551__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47551__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47551__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
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

var seq__47556_47604 = cljs.core.seq(full_reasons);
var chunk__47557_47605 = null;
var count__47558_47606 = (0);
var i__47559_47607 = (0);
while(true){
if((i__47559_47607 < count__47558_47606)){
var r_47608 = chunk__47557_47605.cljs$core$IIndexed$_nth$arity$2(null,i__47559_47607);
instaparse.failure.print_reason(r_47608);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__47613 = seq__47556_47604;
var G__47614 = chunk__47557_47605;
var G__47615 = count__47558_47606;
var G__47616 = (i__47559_47607 + (1));
seq__47556_47604 = G__47613;
chunk__47557_47605 = G__47614;
count__47558_47606 = G__47615;
i__47559_47607 = G__47616;
continue;
} else {
var temp__5720__auto___47617 = cljs.core.seq(seq__47556_47604);
if(temp__5720__auto___47617){
var seq__47556_47618__$1 = temp__5720__auto___47617;
if(cljs.core.chunked_seq_QMARK_(seq__47556_47618__$1)){
var c__4550__auto___47619 = cljs.core.chunk_first(seq__47556_47618__$1);
var G__47620 = cljs.core.chunk_rest(seq__47556_47618__$1);
var G__47621 = c__4550__auto___47619;
var G__47622 = cljs.core.count(c__4550__auto___47619);
var G__47623 = (0);
seq__47556_47604 = G__47620;
chunk__47557_47605 = G__47621;
count__47558_47606 = G__47622;
i__47559_47607 = G__47623;
continue;
} else {
var r_47624 = cljs.core.first(seq__47556_47618__$1);
instaparse.failure.print_reason(r_47624);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__47625 = cljs.core.next(seq__47556_47618__$1);
var G__47626 = null;
var G__47627 = (0);
var G__47628 = (0);
seq__47556_47604 = G__47625;
chunk__47557_47605 = G__47626;
count__47558_47606 = G__47627;
i__47559_47607 = G__47628;
continue;
}
} else {
}
}
break;
}

var seq__47567 = cljs.core.seq(partial_reasons);
var chunk__47568 = null;
var count__47569 = (0);
var i__47570 = (0);
while(true){
if((i__47570 < count__47569)){
var r = chunk__47568.cljs$core$IIndexed$_nth$arity$2(null,i__47570);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__47629 = seq__47567;
var G__47630 = chunk__47568;
var G__47631 = count__47569;
var G__47632 = (i__47570 + (1));
seq__47567 = G__47629;
chunk__47568 = G__47630;
count__47569 = G__47631;
i__47570 = G__47632;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__47567);
if(temp__5720__auto__){
var seq__47567__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47567__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__47567__$1);
var G__47633 = cljs.core.chunk_rest(seq__47567__$1);
var G__47634 = c__4550__auto__;
var G__47635 = cljs.core.count(c__4550__auto__);
var G__47636 = (0);
seq__47567 = G__47633;
chunk__47568 = G__47634;
count__47569 = G__47635;
i__47570 = G__47636;
continue;
} else {
var r = cljs.core.first(seq__47567__$1);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__47637 = cljs.core.next(seq__47567__$1);
var G__47638 = null;
var G__47639 = (0);
var G__47640 = (0);
seq__47567 = G__47637;
chunk__47568 = G__47638;
count__47569 = G__47639;
i__47570 = G__47640;
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
