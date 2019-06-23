goog.provide('markdown.core');
goog.require('cljs.core');
goog.require('markdown.common');
goog.require('markdown.links');
goog.require('markdown.transformers');
markdown.core.init_transformer = (function markdown$core$init_transformer(p__36475){
var map__36476 = p__36475;
var map__36476__$1 = (((((!((map__36476 == null))))?(((((map__36476.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36476.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36476):map__36476);
var replacement_transformers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36476__$1,new cljs.core.Keyword(null,"replacement-transformers","replacement-transformers",-2028552897));
var custom_transformers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36476__$1,new cljs.core.Keyword(null,"custom-transformers","custom-transformers",1440601790));
var inhibit_separator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36476__$1,new cljs.core.Keyword(null,"inhibit-separator","inhibit-separator",1268116222));
return ((function (map__36476,map__36476__$1,replacement_transformers,custom_transformers,inhibit_separator){
return (function (html,line,next_line,state){
var _STAR_inhibit_separator_STAR__orig_val__36478 = markdown.common._STAR_inhibit_separator_STAR_;
var _STAR_inhibit_separator_STAR__temp_val__36479 = inhibit_separator;
markdown.common._STAR_inhibit_separator_STAR_ = _STAR_inhibit_separator_STAR__temp_val__36479;

try{var vec__36480 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (_STAR_inhibit_separator_STAR__orig_val__36478,_STAR_inhibit_separator_STAR__temp_val__36479,map__36476,map__36476__$1,replacement_transformers,custom_transformers,inhibit_separator){
return (function (p__36483,transformer){
var vec__36485 = p__36483;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36485,(0),null);
var state__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36485,(1),null);
var G__36488 = text;
var G__36489 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.Keyword(null,"next-line","next-line",-1187000287),next_line);
return (transformer.cljs$core$IFn$_invoke$arity$2 ? transformer.cljs$core$IFn$_invoke$arity$2(G__36488,G__36489) : transformer.call(null,G__36488,G__36489));
});})(_STAR_inhibit_separator_STAR__orig_val__36478,_STAR_inhibit_separator_STAR__temp_val__36479,map__36476,map__36476__$1,replacement_transformers,custom_transformers,inhibit_separator))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,state], null),(function (){var or__4131__auto__ = replacement_transformers;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(markdown.transformers.transformer_vector,custom_transformers);
}
})());
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36480,(0),null);
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36480,(1),null);
html.append(text);

return new_state;
}finally {markdown.common._STAR_inhibit_separator_STAR_ = _STAR_inhibit_separator_STAR__orig_val__36478;
}});
;})(map__36476,map__36476__$1,replacement_transformers,custom_transformers,inhibit_separator))
});
/**
 * Removed from cljs.core 0.0-1885, Ref. http://goo.gl/su7Xkj
 */
markdown.core.format = (function markdown$core$format(var_args){
var args__4736__auto__ = [];
var len__4730__auto___36563 = arguments.length;
var i__4731__auto___36564 = (0);
while(true){
if((i__4731__auto___36564 < len__4730__auto___36563)){
args__4736__auto__.push((arguments[i__4731__auto___36564]));

var G__36565 = (i__4731__auto___36564 + (1));
i__4731__auto___36564 = G__36565;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

markdown.core.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt,args);
});

markdown.core.format.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
markdown.core.format.cljs$lang$applyTo = (function (seq36491){
var G__36493 = cljs.core.first(seq36491);
var seq36491__$1 = cljs.core.next(seq36491);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36493,seq36491__$1);
});

markdown.core.parse_references = (function markdown$core$parse_references(lines){
var references = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var seq__36495_36567 = cljs.core.seq(lines);
var chunk__36496_36568 = null;
var count__36497_36569 = (0);
var i__36498_36570 = (0);
while(true){
if((i__36498_36570 < count__36497_36569)){
var line_36577 = chunk__36496_36568.cljs$core$IIndexed$_nth$arity$2(null,i__36498_36570);
markdown.links.parse_reference_link(line_36577,references);


var G__36578 = seq__36495_36567;
var G__36579 = chunk__36496_36568;
var G__36580 = count__36497_36569;
var G__36581 = (i__36498_36570 + (1));
seq__36495_36567 = G__36578;
chunk__36496_36568 = G__36579;
count__36497_36569 = G__36580;
i__36498_36570 = G__36581;
continue;
} else {
var temp__5720__auto___36582 = cljs.core.seq(seq__36495_36567);
if(temp__5720__auto___36582){
var seq__36495_36583__$1 = temp__5720__auto___36582;
if(cljs.core.chunked_seq_QMARK_(seq__36495_36583__$1)){
var c__4550__auto___36584 = cljs.core.chunk_first(seq__36495_36583__$1);
var G__36585 = cljs.core.chunk_rest(seq__36495_36583__$1);
var G__36586 = c__4550__auto___36584;
var G__36587 = cljs.core.count(c__4550__auto___36584);
var G__36588 = (0);
seq__36495_36567 = G__36585;
chunk__36496_36568 = G__36586;
count__36497_36569 = G__36587;
i__36498_36570 = G__36588;
continue;
} else {
var line_36589 = cljs.core.first(seq__36495_36583__$1);
markdown.links.parse_reference_link(line_36589,references);


var G__36591 = cljs.core.next(seq__36495_36583__$1);
var G__36592 = null;
var G__36593 = (0);
var G__36594 = (0);
seq__36495_36567 = G__36591;
chunk__36496_36568 = G__36592;
count__36497_36569 = G__36593;
i__36498_36570 = G__36594;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(references);
});
markdown.core.parse_footnotes = (function markdown$core$parse_footnotes(lines){
var footnotes = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"next-fn-id","next-fn-id",738579636),(1),new cljs.core.Keyword(null,"processed","processed",800622264),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"unprocessed","unprocessed",766771972),cljs.core.PersistentArrayMap.EMPTY], null));
var seq__36501_36595 = cljs.core.seq(lines);
var chunk__36502_36596 = null;
var count__36503_36597 = (0);
var i__36504_36598 = (0);
while(true){
if((i__36504_36598 < count__36503_36597)){
var line_36599 = chunk__36502_36596.cljs$core$IIndexed$_nth$arity$2(null,i__36504_36598);
markdown.links.parse_footnote_link(line_36599,footnotes);


var G__36600 = seq__36501_36595;
var G__36601 = chunk__36502_36596;
var G__36602 = count__36503_36597;
var G__36603 = (i__36504_36598 + (1));
seq__36501_36595 = G__36600;
chunk__36502_36596 = G__36601;
count__36503_36597 = G__36602;
i__36504_36598 = G__36603;
continue;
} else {
var temp__5720__auto___36604 = cljs.core.seq(seq__36501_36595);
if(temp__5720__auto___36604){
var seq__36501_36605__$1 = temp__5720__auto___36604;
if(cljs.core.chunked_seq_QMARK_(seq__36501_36605__$1)){
var c__4550__auto___36606 = cljs.core.chunk_first(seq__36501_36605__$1);
var G__36607 = cljs.core.chunk_rest(seq__36501_36605__$1);
var G__36608 = c__4550__auto___36606;
var G__36609 = cljs.core.count(c__4550__auto___36606);
var G__36610 = (0);
seq__36501_36595 = G__36607;
chunk__36502_36596 = G__36608;
count__36503_36597 = G__36609;
i__36504_36598 = G__36610;
continue;
} else {
var line_36612 = cljs.core.first(seq__36501_36605__$1);
markdown.links.parse_footnote_link(line_36612,footnotes);


var G__36613 = cljs.core.next(seq__36501_36605__$1);
var G__36614 = null;
var G__36615 = (0);
var G__36616 = (0);
seq__36501_36595 = G__36613;
chunk__36502_36596 = G__36614;
count__36503_36597 = G__36615;
i__36504_36598 = G__36616;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(footnotes);
});
markdown.core.parse_metadata = (function markdown$core$parse_metadata(lines){
var vec__36508 = cljs.core.split_with((function (p1__36507_SHARP_){
return cljs.core.not_empty(p1__36507_SHARP_.trim());
}),lines);
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36508,(0),null);
var lines__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36508,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.transformers.parse_metadata_headers(metadata),lines__$1], null);
});
/**
 * processes input text line by line and outputs an HTML string
 */
markdown.core.md_to_html_string_STAR_ = (function markdown$core$md_to_html_string_STAR_(text,params){
var _STAR_substring_STAR__orig_val__36511 = markdown.common._STAR_substring_STAR_;
var _STAR_formatter_STAR__orig_val__36512 = markdown.transformers._STAR_formatter_STAR_;
var _STAR_substring_STAR__temp_val__36513 = ((function (_STAR_substring_STAR__orig_val__36511,_STAR_formatter_STAR__orig_val__36512){
return (function (s,n){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,s));
});})(_STAR_substring_STAR__orig_val__36511,_STAR_formatter_STAR__orig_val__36512))
;
var _STAR_formatter_STAR__temp_val__36514 = markdown.core.format;
markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR__temp_val__36513;

markdown.transformers._STAR_formatter_STAR_ = _STAR_formatter_STAR__temp_val__36514;

try{var params__$1 = (cljs.core.truth_(params)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc,cljs.core.PersistentArrayMap.EMPTY),params):null);
var lines = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"\n"].join('').split("\n");
var html = (new goog.string.StringBuffer(""));
var references = (cljs.core.truth_(new cljs.core.Keyword(null,"reference-links?","reference-links?",-2003778981).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_references(lines):null);
var footnotes = (cljs.core.truth_(new cljs.core.Keyword(null,"footnotes?","footnotes?",-1590157845).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_footnotes(lines):null);
var vec__36515 = (cljs.core.truth_(new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_metadata(lines):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,lines], null));
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36515,(0),null);
var lines__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36515,(1),null);
var transformer = markdown.core.init_transformer(params__$1);
var G__36521_36620 = lines__$1;
var vec__36522_36621 = G__36521_36620;
var seq__36523_36622 = cljs.core.seq(vec__36522_36621);
var first__36524_36623 = cljs.core.first(seq__36523_36622);
var seq__36523_36624__$1 = cljs.core.next(seq__36523_36622);
var line_36625 = first__36524_36623;
var more_36626 = seq__36523_36624__$1;
var state_36627 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"clojurescript","clojurescript",-299769403),true,new cljs.core.Keyword(null,"references","references",882562509),references,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),footnotes,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true], null),params__$1], 0));
var G__36521_36629__$1 = G__36521_36620;
var state_36630__$1 = state_36627;
while(true){
var vec__36540_36631 = G__36521_36629__$1;
var seq__36541_36632 = cljs.core.seq(vec__36540_36631);
var first__36542_36633 = cljs.core.first(seq__36541_36632);
var seq__36541_36634__$1 = cljs.core.next(seq__36541_36632);
var line_36635__$1 = first__36542_36633;
var more_36636__$1 = seq__36541_36634__$1;
var state_36637__$2 = state_36630__$1;
var line_36639__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749).cljs$core$IFn$_invoke$arity$1(state_36637__$2))?"":line_36635__$1);
var state_36640__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_36637__$2))?(function (){var G__36543 = html;
var G__36544 = new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_36637__$2);
var G__36545 = new cljs.core.Keyword(null,"next-line","next-line",-1187000287).cljs$core$IFn$_invoke$arity$1(state_36637__$2);
var G__36546 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state_36637__$2,new cljs.core.Keyword(null,"buf","buf",-213913340),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"lists","lists",-884730684),new cljs.core.Keyword(null,"next-line","next-line",-1187000287)], 0)),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true);
return (transformer.cljs$core$IFn$_invoke$arity$4 ? transformer.cljs$core$IFn$_invoke$arity$4(G__36543,G__36544,G__36545,G__36546) : transformer.call(null,G__36543,G__36544,G__36545,G__36546));
})():state_36637__$2);
if(cljs.core.truth_(cljs.core.not_empty(more_36636__$1))){
var G__36641 = more_36636__$1;
var G__36642 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__36547 = html;
var G__36548 = line_36639__$2;
var G__36549 = cljs.core.first(more_36636__$1);
var G__36550 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state_36640__$3,new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749));
return (transformer.cljs$core$IFn$_invoke$arity$4 ? transformer.cljs$core$IFn$_invoke$arity$4(G__36547,G__36548,G__36549,G__36550) : transformer.call(null,G__36547,G__36548,G__36549,G__36550));
})(),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),cljs.core.empty_QMARK_(line_36639__$2));
G__36521_36629__$1 = G__36641;
state_36630__$1 = G__36642;
continue;
} else {
var G__36551_36643 = html.append(markdown.transformers.footer(new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205).cljs$core$IFn$_invoke$arity$1(state_36640__$3)));
var G__36552_36644 = line_36639__$2;
var G__36553_36645 = "";
var G__36554_36646 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state_36640__$3,new cljs.core.Keyword(null,"eof","eof",-489063237),true);
(transformer.cljs$core$IFn$_invoke$arity$4 ? transformer.cljs$core$IFn$_invoke$arity$4(G__36551_36643,G__36552_36644,G__36553_36645,G__36554_36646) : transformer.call(null,G__36551_36643,G__36552_36644,G__36553_36645,G__36554_36646));
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"metadata","metadata",1799301597),metadata,new cljs.core.Keyword(null,"html","html",-998796897),html.toString()], null);
}finally {markdown.transformers._STAR_formatter_STAR_ = _STAR_formatter_STAR__orig_val__36512;

markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR__orig_val__36511;
}});
markdown.core.md__GT_html = (function markdown$core$md__GT_html(var_args){
var args__4736__auto__ = [];
var len__4730__auto___36649 = arguments.length;
var i__4731__auto___36650 = (0);
while(true){
if((i__4731__auto___36650 < len__4730__auto___36649)){
args__4736__auto__.push((arguments[i__4731__auto___36650]));

var G__36651 = (i__4731__auto___36650 + (1));
i__4731__auto___36650 = G__36651;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return new cljs.core.Keyword(null,"html","html",-998796897).cljs$core$IFn$_invoke$arity$1(markdown.core.md_to_html_string_STAR_(text,params));
});

markdown.core.md__GT_html.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
markdown.core.md__GT_html.cljs$lang$applyTo = (function (seq36555){
var G__36556 = cljs.core.first(seq36555);
var seq36555__$1 = cljs.core.next(seq36555);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36556,seq36555__$1);
});

markdown.core.md__GT_html_with_meta = (function markdown$core$md__GT_html_with_meta(var_args){
var args__4736__auto__ = [];
var len__4730__auto___36652 = arguments.length;
var i__4731__auto___36653 = (0);
while(true){
if((i__4731__auto___36653 < len__4730__auto___36652)){
args__4736__auto__.push((arguments[i__4731__auto___36653]));

var G__36654 = (i__4731__auto___36653 + (1));
i__4731__auto___36653 = G__36654;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return markdown.core.md_to_html_string_STAR_(text,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742),true], null),params));
});

markdown.core.md__GT_html_with_meta.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
markdown.core.md__GT_html_with_meta.cljs$lang$applyTo = (function (seq36558){
var G__36559 = cljs.core.first(seq36558);
var seq36558__$1 = cljs.core.next(seq36558);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36559,seq36558__$1);
});

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtml = (function markdown$core$mdToHtml(var_args){
var args__4736__auto__ = [];
var len__4730__auto___36657 = arguments.length;
var i__4731__auto___36658 = (0);
while(true){
if((i__4731__auto___36658 < len__4730__auto___36657)){
args__4736__auto__.push((arguments[i__4731__auto___36658]));

var G__36659 = (i__4731__auto___36658 + (1));
i__4731__auto___36658 = G__36659;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});
goog.exportSymbol('markdown.core.mdToHtml', markdown.core.mdToHtml);

markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(markdown.core.md__GT_html,params);
});

markdown.core.mdToHtml.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
markdown.core.mdToHtml.cljs$lang$applyTo = (function (seq36560){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq36560));
});

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtmlWithMeta = (function markdown$core$mdToHtmlWithMeta(var_args){
var args__4736__auto__ = [];
var len__4730__auto___36661 = arguments.length;
var i__4731__auto___36662 = (0);
while(true){
if((i__4731__auto___36662 < len__4730__auto___36661)){
args__4736__auto__.push((arguments[i__4731__auto___36662]));

var G__36663 = (i__4731__auto___36662 + (1));
i__4731__auto___36662 = G__36663;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});
goog.exportSymbol('markdown.core.mdToHtmlWithMeta', markdown.core.mdToHtmlWithMeta);

markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(markdown.core.md__GT_html_with_meta,params);
});

markdown.core.mdToHtmlWithMeta.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
markdown.core.mdToHtmlWithMeta.cljs$lang$applyTo = (function (seq36561){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq36561));
});


//# sourceMappingURL=markdown.core.js.map
