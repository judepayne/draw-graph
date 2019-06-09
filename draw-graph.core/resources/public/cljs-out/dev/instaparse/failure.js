// Compiled by ClojureScript 1.10.520 {}
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
if(cljs.core._EQ_.call(null,index,counter)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),col], null);
} else {
if(cljs.core._EQ_.call(null,"\n",cljs.core.get.call(null,text,counter))){
var G__17715 = (line + (1));
var G__17716 = (1);
var G__17717 = (counter + (1));
line = G__17715;
col = G__17716;
counter = G__17717;
continue;
} else {
var G__17718 = line;
var G__17719 = (col + (1));
var G__17720 = (counter + (1));
line = G__17718;
col = G__17719;
counter = G__17720;
continue;

}
}
break;
}
});
instaparse.failure.get_line = (function instaparse$failure$get_line(n,text){
var chars = cljs.core.seq.call(null,clojure.string.replace.call(null,text,"\r\n","\n"));
var n__$1 = n;
while(true){
if(cljs.core.empty_QMARK_.call(null,chars)){
return "";
} else {
if(cljs.core._EQ_.call(null,n__$1,(1))){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.take_while.call(null,cljs.core.complement.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["\n",null], null), null)),chars));
} else {
if(cljs.core._EQ_.call(null,"\n",cljs.core.first.call(null,chars))){
var G__17721 = cljs.core.next.call(null,chars);
var G__17722 = (n__$1 - (1));
chars = G__17721;
n__$1 = G__17722;
continue;
} else {
var G__17723 = cljs.core.next.call(null,chars);
var G__17724 = n__$1;
chars = G__17723;
n__$1 = G__17724;
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
if(cljs.core.integer_QMARK_.call(null,n)){
if((n <= (1))){
return "^";
} else {
return cljs.core.apply.call(null,cljs.core.str,cljs.core.concat.call(null,cljs.core.repeat.call(null,(n - (1))," "),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["^"], null)));
}
} else {
return null;
}
});
/**
 * Adds text, line, and column info to failure object.
 */
instaparse.failure.augment_failure = (function instaparse$failure$augment_failure(failure,text){
var lc = instaparse.failure.index__GT_line_column.call(null,new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(failure),text);
return cljs.core.merge.call(null,failure,lc,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),instaparse.failure.get_line.call(null,new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(lc),text)], null));
});
/**
 * Provides special case for printing negative lookahead reasons
 */
instaparse.failure.print_reason = (function instaparse$failure$print_reason(r){
if(cljs.core.truth_(new cljs.core.Keyword(null,"NOT","NOT",-1689245341).cljs$core$IFn$_invoke$arity$1(r))){
cljs.core.print.call(null,"NOT ");

return cljs.core.print.call(null,new cljs.core.Keyword(null,"NOT","NOT",-1689245341).cljs$core$IFn$_invoke$arity$1(r));
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"char-range","char-range",1443391389).cljs$core$IFn$_invoke$arity$1(r))){
return cljs.core.print.call(null,instaparse.print.char_range__GT_str.call(null,r));
} else {
if((r instanceof RegExp)){
return cljs.core.print.call(null,instaparse.print.regexp__GT_str.call(null,r));
} else {
return cljs.core.pr.call(null,r);

}
}
}
});
/**
 * Takes an augmented failure object and prints the error message
 */
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__17725){
var map__17726 = p__17725;
var map__17726__$1 = (((((!((map__17726 == null))))?(((((map__17726.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17726.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17726):map__17726);
var line = cljs.core.get.call(null,map__17726__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__17726__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.call(null,map__17726__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.call(null,map__17726__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
cljs.core.println.call(null,["Parse error at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column),":"].join(''));

cljs.core.println.call(null,text);

cljs.core.println.call(null,instaparse.failure.marker.call(null,column));

var full_reasons = cljs.core.distinct.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"expecting","expecting",-57706705),cljs.core.filter.call(null,new cljs.core.Keyword(null,"full","full",436801220),reason)));
var partial_reasons = cljs.core.distinct.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"expecting","expecting",-57706705),cljs.core.filter.call(null,cljs.core.complement.call(null,new cljs.core.Keyword(null,"full","full",436801220)),reason)));
var total = (cljs.core.count.call(null,full_reasons) + cljs.core.count.call(null,partial_reasons));
if((total === (0))){
} else {
if(cljs.core._EQ_.call(null,(1),total)){
cljs.core.println.call(null,"Expected:");
} else {
cljs.core.println.call(null,"Expected one of:");

}
}

var seq__17728_17736 = cljs.core.seq.call(null,full_reasons);
var chunk__17729_17737 = null;
var count__17730_17738 = (0);
var i__17731_17739 = (0);
while(true){
if((i__17731_17739 < count__17730_17738)){
var r_17740 = cljs.core._nth.call(null,chunk__17729_17737,i__17731_17739);
instaparse.failure.print_reason.call(null,r_17740);

cljs.core.println.call(null," (followed by end-of-string)");


var G__17741 = seq__17728_17736;
var G__17742 = chunk__17729_17737;
var G__17743 = count__17730_17738;
var G__17744 = (i__17731_17739 + (1));
seq__17728_17736 = G__17741;
chunk__17729_17737 = G__17742;
count__17730_17738 = G__17743;
i__17731_17739 = G__17744;
continue;
} else {
var temp__5720__auto___17745 = cljs.core.seq.call(null,seq__17728_17736);
if(temp__5720__auto___17745){
var seq__17728_17746__$1 = temp__5720__auto___17745;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17728_17746__$1)){
var c__4550__auto___17747 = cljs.core.chunk_first.call(null,seq__17728_17746__$1);
var G__17748 = cljs.core.chunk_rest.call(null,seq__17728_17746__$1);
var G__17749 = c__4550__auto___17747;
var G__17750 = cljs.core.count.call(null,c__4550__auto___17747);
var G__17751 = (0);
seq__17728_17736 = G__17748;
chunk__17729_17737 = G__17749;
count__17730_17738 = G__17750;
i__17731_17739 = G__17751;
continue;
} else {
var r_17752 = cljs.core.first.call(null,seq__17728_17746__$1);
instaparse.failure.print_reason.call(null,r_17752);

cljs.core.println.call(null," (followed by end-of-string)");


var G__17753 = cljs.core.next.call(null,seq__17728_17746__$1);
var G__17754 = null;
var G__17755 = (0);
var G__17756 = (0);
seq__17728_17736 = G__17753;
chunk__17729_17737 = G__17754;
count__17730_17738 = G__17755;
i__17731_17739 = G__17756;
continue;
}
} else {
}
}
break;
}

var seq__17732 = cljs.core.seq.call(null,partial_reasons);
var chunk__17733 = null;
var count__17734 = (0);
var i__17735 = (0);
while(true){
if((i__17735 < count__17734)){
var r = cljs.core._nth.call(null,chunk__17733,i__17735);
instaparse.failure.print_reason.call(null,r);

cljs.core.println.call(null);


var G__17757 = seq__17732;
var G__17758 = chunk__17733;
var G__17759 = count__17734;
var G__17760 = (i__17735 + (1));
seq__17732 = G__17757;
chunk__17733 = G__17758;
count__17734 = G__17759;
i__17735 = G__17760;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__17732);
if(temp__5720__auto__){
var seq__17732__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17732__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__17732__$1);
var G__17761 = cljs.core.chunk_rest.call(null,seq__17732__$1);
var G__17762 = c__4550__auto__;
var G__17763 = cljs.core.count.call(null,c__4550__auto__);
var G__17764 = (0);
seq__17732 = G__17761;
chunk__17733 = G__17762;
count__17734 = G__17763;
i__17735 = G__17764;
continue;
} else {
var r = cljs.core.first.call(null,seq__17732__$1);
instaparse.failure.print_reason.call(null,r);

cljs.core.println.call(null);


var G__17765 = cljs.core.next.call(null,seq__17732__$1);
var G__17766 = null;
var G__17767 = (0);
var G__17768 = (0);
seq__17732 = G__17765;
chunk__17733 = G__17766;
count__17734 = G__17767;
i__17735 = G__17768;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=failure.js.map
