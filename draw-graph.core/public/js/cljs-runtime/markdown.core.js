goog.provide('markdown.core');
goog.require('cljs.core');
goog.require('markdown.common');
goog.require('markdown.links');
goog.require('markdown.transformers');
markdown.core.init_transformer = (function markdown$core$init_transformer(p__36459){
var map__36460 = p__36459;
var map__36460__$1 = (((((!((map__36460 == null))))?(((((map__36460.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36460.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36460):map__36460);
var replacement_transformers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36460__$1,new cljs.core.Keyword(null,"replacement-transformers","replacement-transformers",-2028552897));
var custom_transformers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36460__$1,new cljs.core.Keyword(null,"custom-transformers","custom-transformers",1440601790));
var inhibit_separator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36460__$1,new cljs.core.Keyword(null,"inhibit-separator","inhibit-separator",1268116222));
return ((function (map__36460,map__36460__$1,replacement_transformers,custom_transformers,inhibit_separator){
return (function (html,line,next_line,state){
var _STAR_inhibit_separator_STAR__orig_val__36462 = markdown.common._STAR_inhibit_separator_STAR_;
var _STAR_inhibit_separator_STAR__temp_val__36463 = inhibit_separator;
markdown.common._STAR_inhibit_separator_STAR_ = _STAR_inhibit_separator_STAR__temp_val__36463;

try{var vec__36464 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (_STAR_inhibit_separator_STAR__orig_val__36462,_STAR_inhibit_separator_STAR__temp_val__36463,map__36460,map__36460__$1,replacement_transformers,custom_transformers,inhibit_separator){
return (function (p__36467,transformer){
var vec__36468 = p__36467;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36468,(0),null);
var state__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36468,(1),null);
var G__36471 = text;
var G__36472 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.Keyword(null,"next-line","next-line",-1187000287),next_line);
return (transformer.cljs$core$IFn$_invoke$arity$2 ? transformer.cljs$core$IFn$_invoke$arity$2(G__36471,G__36472) : transformer.call(null,G__36471,G__36472));
});})(_STAR_inhibit_separator_STAR__orig_val__36462,_STAR_inhibit_separator_STAR__temp_val__36463,map__36460,map__36460__$1,replacement_transformers,custom_transformers,inhibit_separator))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,state], null),(function (){var or__4131__auto__ = replacement_transformers;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(markdown.transformers.transformer_vector,custom_transformers);
}
})());
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36464,(0),null);
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36464,(1),null);
html.append(text);

return new_state;
}finally {markdown.common._STAR_inhibit_separator_STAR_ = _STAR_inhibit_separator_STAR__orig_val__36462;
}});
;})(map__36460,map__36460__$1,replacement_transformers,custom_transformers,inhibit_separator))
});
/**
 * Removed from cljs.core 0.0-1885, Ref. http://goo.gl/su7Xkj
 */
markdown.core.format = (function markdown$core$format(var_args){
var args__4736__auto__ = [];
var len__4730__auto___36573 = arguments.length;
var i__4731__auto___36574 = (0);
while(true){
if((i__4731__auto___36574 < len__4730__auto___36573)){
args__4736__auto__.push((arguments[i__4731__auto___36574]));

var G__36575 = (i__4731__auto___36574 + (1));
i__4731__auto___36574 = G__36575;
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
markdown.core.format.cljs$lang$applyTo = (function (seq36476){
var G__36477 = cljs.core.first(seq36476);
var seq36476__$1 = cljs.core.next(seq36476);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36477,seq36476__$1);
});

markdown.core.parse_references = (function markdown$core$parse_references(lines){
var references = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var seq__36480_36577 = cljs.core.seq(lines);
var chunk__36481_36578 = null;
var count__36482_36579 = (0);
var i__36483_36580 = (0);
while(true){
if((i__36483_36580 < count__36482_36579)){
var line_36581 = chunk__36481_36578.cljs$core$IIndexed$_nth$arity$2(null,i__36483_36580);
markdown.links.parse_reference_link(line_36581,references);


var G__36582 = seq__36480_36577;
var G__36583 = chunk__36481_36578;
var G__36584 = count__36482_36579;
var G__36585 = (i__36483_36580 + (1));
seq__36480_36577 = G__36582;
chunk__36481_36578 = G__36583;
count__36482_36579 = G__36584;
i__36483_36580 = G__36585;
continue;
} else {
var temp__5720__auto___36586 = cljs.core.seq(seq__36480_36577);
if(temp__5720__auto___36586){
var seq__36480_36587__$1 = temp__5720__auto___36586;
if(cljs.core.chunked_seq_QMARK_(seq__36480_36587__$1)){
var c__4550__auto___36588 = cljs.core.chunk_first(seq__36480_36587__$1);
var G__36589 = cljs.core.chunk_rest(seq__36480_36587__$1);
var G__36590 = c__4550__auto___36588;
var G__36591 = cljs.core.count(c__4550__auto___36588);
var G__36592 = (0);
seq__36480_36577 = G__36589;
chunk__36481_36578 = G__36590;
count__36482_36579 = G__36591;
i__36483_36580 = G__36592;
continue;
} else {
var line_36593 = cljs.core.first(seq__36480_36587__$1);
markdown.links.parse_reference_link(line_36593,references);


var G__36594 = cljs.core.next(seq__36480_36587__$1);
var G__36595 = null;
var G__36596 = (0);
var G__36597 = (0);
seq__36480_36577 = G__36594;
chunk__36481_36578 = G__36595;
count__36482_36579 = G__36596;
i__36483_36580 = G__36597;
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
var seq__36490_36599 = cljs.core.seq(lines);
var chunk__36491_36600 = null;
var count__36492_36601 = (0);
var i__36493_36602 = (0);
while(true){
if((i__36493_36602 < count__36492_36601)){
var line_36603 = chunk__36491_36600.cljs$core$IIndexed$_nth$arity$2(null,i__36493_36602);
markdown.links.parse_footnote_link(line_36603,footnotes);


var G__36604 = seq__36490_36599;
var G__36605 = chunk__36491_36600;
var G__36606 = count__36492_36601;
var G__36607 = (i__36493_36602 + (1));
seq__36490_36599 = G__36604;
chunk__36491_36600 = G__36605;
count__36492_36601 = G__36606;
i__36493_36602 = G__36607;
continue;
} else {
var temp__5720__auto___36608 = cljs.core.seq(seq__36490_36599);
if(temp__5720__auto___36608){
var seq__36490_36609__$1 = temp__5720__auto___36608;
if(cljs.core.chunked_seq_QMARK_(seq__36490_36609__$1)){
var c__4550__auto___36610 = cljs.core.chunk_first(seq__36490_36609__$1);
var G__36611 = cljs.core.chunk_rest(seq__36490_36609__$1);
var G__36612 = c__4550__auto___36610;
var G__36613 = cljs.core.count(c__4550__auto___36610);
var G__36614 = (0);
seq__36490_36599 = G__36611;
chunk__36491_36600 = G__36612;
count__36492_36601 = G__36613;
i__36493_36602 = G__36614;
continue;
} else {
var line_36615 = cljs.core.first(seq__36490_36609__$1);
markdown.links.parse_footnote_link(line_36615,footnotes);


var G__36616 = cljs.core.next(seq__36490_36609__$1);
var G__36617 = null;
var G__36618 = (0);
var G__36619 = (0);
seq__36490_36599 = G__36616;
chunk__36491_36600 = G__36617;
count__36492_36601 = G__36618;
i__36493_36602 = G__36619;
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
var vec__36500 = cljs.core.split_with((function (p1__36499_SHARP_){
return cljs.core.not_empty(p1__36499_SHARP_.trim());
}),lines);
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36500,(0),null);
var lines__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36500,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.transformers.parse_metadata_headers(metadata),lines__$1], null);
});
/**
 * processes input text line by line and outputs an HTML string
 */
markdown.core.md_to_html_string_STAR_ = (function markdown$core$md_to_html_string_STAR_(text,params){
var _STAR_substring_STAR__orig_val__36505 = markdown.common._STAR_substring_STAR_;
var _STAR_formatter_STAR__orig_val__36506 = markdown.transformers._STAR_formatter_STAR_;
var _STAR_substring_STAR__temp_val__36507 = ((function (_STAR_substring_STAR__orig_val__36505,_STAR_formatter_STAR__orig_val__36506){
return (function (s,n){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,s));
});})(_STAR_substring_STAR__orig_val__36505,_STAR_formatter_STAR__orig_val__36506))
;
var _STAR_formatter_STAR__temp_val__36508 = markdown.core.format;
markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR__temp_val__36507;

markdown.transformers._STAR_formatter_STAR_ = _STAR_formatter_STAR__temp_val__36508;

try{var params__$1 = (cljs.core.truth_(params)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc,cljs.core.PersistentArrayMap.EMPTY),params):null);
var lines = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"\n"].join('').split("\n");
var html = (new goog.string.StringBuffer(""));
var references = (cljs.core.truth_(new cljs.core.Keyword(null,"reference-links?","reference-links?",-2003778981).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_references(lines):null);
var footnotes = (cljs.core.truth_(new cljs.core.Keyword(null,"footnotes?","footnotes?",-1590157845).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_footnotes(lines):null);
var vec__36509 = (cljs.core.truth_(new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_metadata(lines):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,lines], null));
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36509,(0),null);
var lines__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36509,(1),null);
var transformer = markdown.core.init_transformer(params__$1);
var G__36515_36623 = lines__$1;
var vec__36516_36624 = G__36515_36623;
var seq__36517_36625 = cljs.core.seq(vec__36516_36624);
var first__36518_36626 = cljs.core.first(seq__36517_36625);
var seq__36517_36627__$1 = cljs.core.next(seq__36517_36625);
var line_36628 = first__36518_36626;
var more_36629 = seq__36517_36627__$1;
var state_36630 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"clojurescript","clojurescript",-299769403),true,new cljs.core.Keyword(null,"references","references",882562509),references,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),footnotes,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true], null),params__$1], 0));
var G__36515_36633__$1 = G__36515_36623;
var state_36634__$1 = state_36630;
while(true){
var vec__36536_36635 = G__36515_36633__$1;
var seq__36537_36636 = cljs.core.seq(vec__36536_36635);
var first__36538_36637 = cljs.core.first(seq__36537_36636);
var seq__36537_36638__$1 = cljs.core.next(seq__36537_36636);
var line_36639__$1 = first__36538_36637;
var more_36640__$1 = seq__36537_36638__$1;
var state_36641__$2 = state_36634__$1;
var line_36642__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749).cljs$core$IFn$_invoke$arity$1(state_36641__$2))?"":line_36639__$1);
var state_36643__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_36641__$2))?(function (){var G__36539 = html;
var G__36540 = new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_36641__$2);
var G__36541 = new cljs.core.Keyword(null,"next-line","next-line",-1187000287).cljs$core$IFn$_invoke$arity$1(state_36641__$2);
var G__36542 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state_36641__$2,new cljs.core.Keyword(null,"buf","buf",-213913340),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"lists","lists",-884730684),new cljs.core.Keyword(null,"next-line","next-line",-1187000287)], 0)),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true);
return (transformer.cljs$core$IFn$_invoke$arity$4 ? transformer.cljs$core$IFn$_invoke$arity$4(G__36539,G__36540,G__36541,G__36542) : transformer.call(null,G__36539,G__36540,G__36541,G__36542));
})():state_36641__$2);
if(cljs.core.truth_(cljs.core.not_empty(more_36640__$1))){
var G__36644 = more_36640__$1;
var G__36645 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__36543 = html;
var G__36544 = line_36642__$2;
var G__36545 = cljs.core.first(more_36640__$1);
var G__36546 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state_36643__$3,new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749));
return (transformer.cljs$core$IFn$_invoke$arity$4 ? transformer.cljs$core$IFn$_invoke$arity$4(G__36543,G__36544,G__36545,G__36546) : transformer.call(null,G__36543,G__36544,G__36545,G__36546));
})(),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),cljs.core.empty_QMARK_(line_36642__$2));
G__36515_36633__$1 = G__36644;
state_36634__$1 = G__36645;
continue;
} else {
var G__36547_36648 = html.append(markdown.transformers.footer(new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205).cljs$core$IFn$_invoke$arity$1(state_36643__$3)));
var G__36548_36649 = line_36642__$2;
var G__36549_36650 = "";
var G__36550_36651 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state_36643__$3,new cljs.core.Keyword(null,"eof","eof",-489063237),true);
(transformer.cljs$core$IFn$_invoke$arity$4 ? transformer.cljs$core$IFn$_invoke$arity$4(G__36547_36648,G__36548_36649,G__36549_36650,G__36550_36651) : transformer.call(null,G__36547_36648,G__36548_36649,G__36549_36650,G__36550_36651));
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"metadata","metadata",1799301597),metadata,new cljs.core.Keyword(null,"html","html",-998796897),html.toString()], null);
}finally {markdown.transformers._STAR_formatter_STAR_ = _STAR_formatter_STAR__orig_val__36506;

markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR__orig_val__36505;
}});
markdown.core.md__GT_html = (function markdown$core$md__GT_html(var_args){
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
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return new cljs.core.Keyword(null,"html","html",-998796897).cljs$core$IFn$_invoke$arity$1(markdown.core.md_to_html_string_STAR_(text,params));
});

markdown.core.md__GT_html.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
markdown.core.md__GT_html.cljs$lang$applyTo = (function (seq36553){
var G__36554 = cljs.core.first(seq36553);
var seq36553__$1 = cljs.core.next(seq36553);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36554,seq36553__$1);
});

markdown.core.md__GT_html_with_meta = (function markdown$core$md__GT_html_with_meta(var_args){
var args__4736__auto__ = [];
var len__4730__auto___36655 = arguments.length;
var i__4731__auto___36656 = (0);
while(true){
if((i__4731__auto___36656 < len__4730__auto___36655)){
args__4736__auto__.push((arguments[i__4731__auto___36656]));

var G__36657 = (i__4731__auto___36656 + (1));
i__4731__auto___36656 = G__36657;
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
markdown.core.md__GT_html_with_meta.cljs$lang$applyTo = (function (seq36556){
var G__36557 = cljs.core.first(seq36556);
var seq36556__$1 = cljs.core.next(seq36556);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36557,seq36556__$1);
});

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtml = (function markdown$core$mdToHtml(var_args){
var args__4736__auto__ = [];
var len__4730__auto___36658 = arguments.length;
var i__4731__auto___36659 = (0);
while(true){
if((i__4731__auto___36659 < len__4730__auto___36658)){
args__4736__auto__.push((arguments[i__4731__auto___36659]));

var G__36660 = (i__4731__auto___36659 + (1));
i__4731__auto___36659 = G__36660;
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
markdown.core.mdToHtml.cljs$lang$applyTo = (function (seq36558){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq36558));
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

var G__36664 = (i__4731__auto___36662 + (1));
i__4731__auto___36662 = G__36664;
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
markdown.core.mdToHtmlWithMeta.cljs$lang$applyTo = (function (seq36559){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq36559));
});


//# sourceMappingURL=markdown.core.js.map
