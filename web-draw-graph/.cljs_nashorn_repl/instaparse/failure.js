// Compiled by ClojureScript 1.10.439 {:target :nashorn}
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
var G__29409 = (line + (1));
var G__29410 = (1);
var G__29411 = (counter + (1));
line = G__29409;
col = G__29410;
counter = G__29411;
continue;
} else {
var G__29412 = line;
var G__29413 = (col + (1));
var G__29414 = (counter + (1));
line = G__29412;
col = G__29413;
counter = G__29414;
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
var G__29415 = cljs.core.next.call(null,chars);
var G__29416 = (n__$1 - (1));
chars = G__29415;
n__$1 = G__29416;
continue;
} else {
var G__29417 = cljs.core.next.call(null,chars);
var G__29418 = n__$1;
chars = G__29417;
n__$1 = G__29418;
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
instaparse.failure.pprint_failure = (function instaparse$failure$pprint_failure(p__29419){
var map__29420 = p__29419;
var map__29420__$1 = (((((!((map__29420 == null))))?(((((map__29420.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29420.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29420):map__29420);
var line = cljs.core.get.call(null,map__29420__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__29420__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var text = cljs.core.get.call(null,map__29420__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var reason = cljs.core.get.call(null,map__29420__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
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

var seq__29422_29430 = cljs.core.seq.call(null,full_reasons);
var chunk__29423_29431 = null;
var count__29424_29432 = (0);
var i__29425_29433 = (0);
while(true){
if((i__29425_29433 < count__29424_29432)){
var r_29434 = cljs.core._nth.call(null,chunk__29423_29431,i__29425_29433);
instaparse.failure.print_reason.call(null,r_29434);

cljs.core.println.call(null," (followed by end-of-string)");


var G__29435 = seq__29422_29430;
var G__29436 = chunk__29423_29431;
var G__29437 = count__29424_29432;
var G__29438 = (i__29425_29433 + (1));
seq__29422_29430 = G__29435;
chunk__29423_29431 = G__29436;
count__29424_29432 = G__29437;
i__29425_29433 = G__29438;
continue;
} else {
var temp__5720__auto___29439 = cljs.core.seq.call(null,seq__29422_29430);
if(temp__5720__auto___29439){
var seq__29422_29440__$1 = temp__5720__auto___29439;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29422_29440__$1)){
var c__4461__auto___29441 = cljs.core.chunk_first.call(null,seq__29422_29440__$1);
var G__29442 = cljs.core.chunk_rest.call(null,seq__29422_29440__$1);
var G__29443 = c__4461__auto___29441;
var G__29444 = cljs.core.count.call(null,c__4461__auto___29441);
var G__29445 = (0);
seq__29422_29430 = G__29442;
chunk__29423_29431 = G__29443;
count__29424_29432 = G__29444;
i__29425_29433 = G__29445;
continue;
} else {
var r_29446 = cljs.core.first.call(null,seq__29422_29440__$1);
instaparse.failure.print_reason.call(null,r_29446);

cljs.core.println.call(null," (followed by end-of-string)");


var G__29447 = cljs.core.next.call(null,seq__29422_29440__$1);
var G__29448 = null;
var G__29449 = (0);
var G__29450 = (0);
seq__29422_29430 = G__29447;
chunk__29423_29431 = G__29448;
count__29424_29432 = G__29449;
i__29425_29433 = G__29450;
continue;
}
} else {
}
}
break;
}

var seq__29426 = cljs.core.seq.call(null,partial_reasons);
var chunk__29427 = null;
var count__29428 = (0);
var i__29429 = (0);
while(true){
if((i__29429 < count__29428)){
var r = cljs.core._nth.call(null,chunk__29427,i__29429);
instaparse.failure.print_reason.call(null,r);

cljs.core.println.call(null);


var G__29451 = seq__29426;
var G__29452 = chunk__29427;
var G__29453 = count__29428;
var G__29454 = (i__29429 + (1));
seq__29426 = G__29451;
chunk__29427 = G__29452;
count__29428 = G__29453;
i__29429 = G__29454;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__29426);
if(temp__5720__auto__){
var seq__29426__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29426__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__29426__$1);
var G__29455 = cljs.core.chunk_rest.call(null,seq__29426__$1);
var G__29456 = c__4461__auto__;
var G__29457 = cljs.core.count.call(null,c__4461__auto__);
var G__29458 = (0);
seq__29426 = G__29455;
chunk__29427 = G__29456;
count__29428 = G__29457;
i__29429 = G__29458;
continue;
} else {
var r = cljs.core.first.call(null,seq__29426__$1);
instaparse.failure.print_reason.call(null,r);

cljs.core.println.call(null);


var G__29459 = cljs.core.next.call(null,seq__29426__$1);
var G__29460 = null;
var G__29461 = (0);
var G__29462 = (0);
seq__29426 = G__29459;
chunk__29427 = G__29460;
count__29428 = G__29461;
i__29429 = G__29462;
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
