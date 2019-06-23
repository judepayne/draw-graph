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
var G__47607 = (line + (1));
var G__47608 = (1);
var G__47609 = (counter + (1));
line = G__47607;
col = G__47608;
counter = G__47609;
continue;
} else {
var G__47610 = line;
var G__47611 = (col + (1));
var G__47612 = (counter + (1));
line = G__47610;
col = G__47611;
counter = G__47612;
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
var G__47616 = cljs.core.next(chars);
var G__47617 = (n__$1 - (1));
chars = G__47616;
n__$1 = G__47617;
continue;
} else {
var G__47618 = cljs.core.next(chars);
var G__47619 = n__$1;
chars = G__47618;
n__$1 = G__47619;
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
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__47561){
var map__47563 = p__47561;
var map__47563__$1 = (((((!((map__47563 == null))))?(((((map__47563.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47563.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47563):map__47563);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47563__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47563__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47563__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47563__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
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

var seq__47574_47626 = cljs.core.seq(full_reasons);
var chunk__47575_47627 = null;
var count__47576_47628 = (0);
var i__47577_47629 = (0);
while(true){
if((i__47577_47629 < count__47576_47628)){
var r_47630 = chunk__47575_47627.cljs$core$IIndexed$_nth$arity$2(null,i__47577_47629);
instaparse.failure.print_reason(r_47630);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__47631 = seq__47574_47626;
var G__47632 = chunk__47575_47627;
var G__47633 = count__47576_47628;
var G__47634 = (i__47577_47629 + (1));
seq__47574_47626 = G__47631;
chunk__47575_47627 = G__47632;
count__47576_47628 = G__47633;
i__47577_47629 = G__47634;
continue;
} else {
var temp__5720__auto___47635 = cljs.core.seq(seq__47574_47626);
if(temp__5720__auto___47635){
var seq__47574_47636__$1 = temp__5720__auto___47635;
if(cljs.core.chunked_seq_QMARK_(seq__47574_47636__$1)){
var c__4550__auto___47638 = cljs.core.chunk_first(seq__47574_47636__$1);
var G__47639 = cljs.core.chunk_rest(seq__47574_47636__$1);
var G__47640 = c__4550__auto___47638;
var G__47641 = cljs.core.count(c__4550__auto___47638);
var G__47642 = (0);
seq__47574_47626 = G__47639;
chunk__47575_47627 = G__47640;
count__47576_47628 = G__47641;
i__47577_47629 = G__47642;
continue;
} else {
var r_47644 = cljs.core.first(seq__47574_47636__$1);
instaparse.failure.print_reason(r_47644);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" (followed by end-of-string)"], 0));


var G__47646 = cljs.core.next(seq__47574_47636__$1);
var G__47647 = null;
var G__47648 = (0);
var G__47649 = (0);
seq__47574_47626 = G__47646;
chunk__47575_47627 = G__47647;
count__47576_47628 = G__47648;
i__47577_47629 = G__47649;
continue;
}
} else {
}
}
break;
}

var seq__47584 = cljs.core.seq(partial_reasons);
var chunk__47585 = null;
var count__47586 = (0);
var i__47587 = (0);
while(true){
if((i__47587 < count__47586)){
var r = chunk__47585.cljs$core$IIndexed$_nth$arity$2(null,i__47587);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__47650 = seq__47584;
var G__47651 = chunk__47585;
var G__47652 = count__47586;
var G__47653 = (i__47587 + (1));
seq__47584 = G__47650;
chunk__47585 = G__47651;
count__47586 = G__47652;
i__47587 = G__47653;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__47584);
if(temp__5720__auto__){
var seq__47584__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47584__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__47584__$1);
var G__47658 = cljs.core.chunk_rest(seq__47584__$1);
var G__47659 = c__4550__auto__;
var G__47660 = cljs.core.count(c__4550__auto__);
var G__47661 = (0);
seq__47584 = G__47658;
chunk__47585 = G__47659;
count__47586 = G__47660;
i__47587 = G__47661;
continue;
} else {
var r = cljs.core.first(seq__47584__$1);
instaparse.failure.print_reason(r);

cljs.core.println();


var G__47662 = cljs.core.next(seq__47584__$1);
var G__47663 = null;
var G__47664 = (0);
var G__47665 = (0);
seq__47584 = G__47662;
chunk__47585 = G__47663;
count__47586 = G__47664;
i__47587 = G__47665;
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
