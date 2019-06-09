// Compiled by ClojureScript 1.10.520 {}
goog.provide('markdown.core');
goog.require('cljs.core');
goog.require('markdown.common');
goog.require('markdown.links');
goog.require('markdown.transformers');
markdown.core.init_transformer = (function markdown$core$init_transformer(p__10572){
var map__10573 = p__10572;
var map__10573__$1 = (((((!((map__10573 == null))))?(((((map__10573.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10573.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10573):map__10573);
var replacement_transformers = cljs.core.get.call(null,map__10573__$1,new cljs.core.Keyword(null,"replacement-transformers","replacement-transformers",-2028552897));
var custom_transformers = cljs.core.get.call(null,map__10573__$1,new cljs.core.Keyword(null,"custom-transformers","custom-transformers",1440601790));
var inhibit_separator = cljs.core.get.call(null,map__10573__$1,new cljs.core.Keyword(null,"inhibit-separator","inhibit-separator",1268116222));
return ((function (map__10573,map__10573__$1,replacement_transformers,custom_transformers,inhibit_separator){
return (function (html,line,next_line,state){
var _STAR_inhibit_separator_STAR__orig_val__10575 = markdown.common._STAR_inhibit_separator_STAR_;
var _STAR_inhibit_separator_STAR__temp_val__10576 = inhibit_separator;
markdown.common._STAR_inhibit_separator_STAR_ = _STAR_inhibit_separator_STAR__temp_val__10576;

try{var vec__10577 = cljs.core.reduce.call(null,((function (_STAR_inhibit_separator_STAR__orig_val__10575,_STAR_inhibit_separator_STAR__temp_val__10576,map__10573,map__10573__$1,replacement_transformers,custom_transformers,inhibit_separator){
return (function (p__10580,transformer){
var vec__10581 = p__10580;
var text = cljs.core.nth.call(null,vec__10581,(0),null);
var state__$1 = cljs.core.nth.call(null,vec__10581,(1),null);
return transformer.call(null,text,cljs.core.assoc.call(null,state__$1,new cljs.core.Keyword(null,"next-line","next-line",-1187000287),next_line));
});})(_STAR_inhibit_separator_STAR__orig_val__10575,_STAR_inhibit_separator_STAR__temp_val__10576,map__10573,map__10573__$1,replacement_transformers,custom_transformers,inhibit_separator))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,state], null),(function (){var or__4131__auto__ = replacement_transformers;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.into.call(null,markdown.transformers.transformer_vector,custom_transformers);
}
})());
var text = cljs.core.nth.call(null,vec__10577,(0),null);
var new_state = cljs.core.nth.call(null,vec__10577,(1),null);
html.append(text);

return new_state;
}finally {markdown.common._STAR_inhibit_separator_STAR_ = _STAR_inhibit_separator_STAR__orig_val__10575;
}});
;})(map__10573,map__10573__$1,replacement_transformers,custom_transformers,inhibit_separator))
});
/**
 * Removed from cljs.core 0.0-1885, Ref. http://goo.gl/su7Xkj
 */
markdown.core.format = (function markdown$core$format(var_args){
var args__4736__auto__ = [];
var len__4730__auto___10586 = arguments.length;
var i__4731__auto___10587 = (0);
while(true){
if((i__4731__auto___10587 < len__4730__auto___10586)){
args__4736__auto__.push((arguments[i__4731__auto___10587]));

var G__10588 = (i__4731__auto___10587 + (1));
i__4731__auto___10587 = G__10588;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

markdown.core.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
});

markdown.core.format.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
markdown.core.format.cljs$lang$applyTo = (function (seq10584){
var G__10585 = cljs.core.first.call(null,seq10584);
var seq10584__$1 = cljs.core.next.call(null,seq10584);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10585,seq10584__$1);
});

markdown.core.parse_references = (function markdown$core$parse_references(lines){
var references = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var seq__10589_10593 = cljs.core.seq.call(null,lines);
var chunk__10590_10594 = null;
var count__10591_10595 = (0);
var i__10592_10596 = (0);
while(true){
if((i__10592_10596 < count__10591_10595)){
var line_10597 = cljs.core._nth.call(null,chunk__10590_10594,i__10592_10596);
markdown.links.parse_reference_link.call(null,line_10597,references);


var G__10598 = seq__10589_10593;
var G__10599 = chunk__10590_10594;
var G__10600 = count__10591_10595;
var G__10601 = (i__10592_10596 + (1));
seq__10589_10593 = G__10598;
chunk__10590_10594 = G__10599;
count__10591_10595 = G__10600;
i__10592_10596 = G__10601;
continue;
} else {
var temp__5720__auto___10602 = cljs.core.seq.call(null,seq__10589_10593);
if(temp__5720__auto___10602){
var seq__10589_10603__$1 = temp__5720__auto___10602;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10589_10603__$1)){
var c__4550__auto___10604 = cljs.core.chunk_first.call(null,seq__10589_10603__$1);
var G__10605 = cljs.core.chunk_rest.call(null,seq__10589_10603__$1);
var G__10606 = c__4550__auto___10604;
var G__10607 = cljs.core.count.call(null,c__4550__auto___10604);
var G__10608 = (0);
seq__10589_10593 = G__10605;
chunk__10590_10594 = G__10606;
count__10591_10595 = G__10607;
i__10592_10596 = G__10608;
continue;
} else {
var line_10609 = cljs.core.first.call(null,seq__10589_10603__$1);
markdown.links.parse_reference_link.call(null,line_10609,references);


var G__10610 = cljs.core.next.call(null,seq__10589_10603__$1);
var G__10611 = null;
var G__10612 = (0);
var G__10613 = (0);
seq__10589_10593 = G__10610;
chunk__10590_10594 = G__10611;
count__10591_10595 = G__10612;
i__10592_10596 = G__10613;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,references);
});
markdown.core.parse_footnotes = (function markdown$core$parse_footnotes(lines){
var footnotes = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"next-fn-id","next-fn-id",738579636),(1),new cljs.core.Keyword(null,"processed","processed",800622264),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"unprocessed","unprocessed",766771972),cljs.core.PersistentArrayMap.EMPTY], null));
var seq__10614_10618 = cljs.core.seq.call(null,lines);
var chunk__10615_10619 = null;
var count__10616_10620 = (0);
var i__10617_10621 = (0);
while(true){
if((i__10617_10621 < count__10616_10620)){
var line_10622 = cljs.core._nth.call(null,chunk__10615_10619,i__10617_10621);
markdown.links.parse_footnote_link.call(null,line_10622,footnotes);


var G__10623 = seq__10614_10618;
var G__10624 = chunk__10615_10619;
var G__10625 = count__10616_10620;
var G__10626 = (i__10617_10621 + (1));
seq__10614_10618 = G__10623;
chunk__10615_10619 = G__10624;
count__10616_10620 = G__10625;
i__10617_10621 = G__10626;
continue;
} else {
var temp__5720__auto___10627 = cljs.core.seq.call(null,seq__10614_10618);
if(temp__5720__auto___10627){
var seq__10614_10628__$1 = temp__5720__auto___10627;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10614_10628__$1)){
var c__4550__auto___10629 = cljs.core.chunk_first.call(null,seq__10614_10628__$1);
var G__10630 = cljs.core.chunk_rest.call(null,seq__10614_10628__$1);
var G__10631 = c__4550__auto___10629;
var G__10632 = cljs.core.count.call(null,c__4550__auto___10629);
var G__10633 = (0);
seq__10614_10618 = G__10630;
chunk__10615_10619 = G__10631;
count__10616_10620 = G__10632;
i__10617_10621 = G__10633;
continue;
} else {
var line_10634 = cljs.core.first.call(null,seq__10614_10628__$1);
markdown.links.parse_footnote_link.call(null,line_10634,footnotes);


var G__10635 = cljs.core.next.call(null,seq__10614_10628__$1);
var G__10636 = null;
var G__10637 = (0);
var G__10638 = (0);
seq__10614_10618 = G__10635;
chunk__10615_10619 = G__10636;
count__10616_10620 = G__10637;
i__10617_10621 = G__10638;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,footnotes);
});
markdown.core.parse_metadata = (function markdown$core$parse_metadata(lines){
var vec__10640 = cljs.core.split_with.call(null,(function (p1__10639_SHARP_){
return cljs.core.not_empty.call(null,p1__10639_SHARP_.trim());
}),lines);
var metadata = cljs.core.nth.call(null,vec__10640,(0),null);
var lines__$1 = cljs.core.nth.call(null,vec__10640,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.transformers.parse_metadata_headers.call(null,metadata),lines__$1], null);
});
/**
 * processes input text line by line and outputs an HTML string
 */
markdown.core.md_to_html_string_STAR_ = (function markdown$core$md_to_html_string_STAR_(text,params){
var _STAR_substring_STAR__orig_val__10643 = markdown.common._STAR_substring_STAR_;
var _STAR_formatter_STAR__orig_val__10644 = markdown.transformers._STAR_formatter_STAR_;
var _STAR_substring_STAR__temp_val__10645 = ((function (_STAR_substring_STAR__orig_val__10643,_STAR_formatter_STAR__orig_val__10644){
return (function (s,n){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.drop.call(null,n,s));
});})(_STAR_substring_STAR__orig_val__10643,_STAR_formatter_STAR__orig_val__10644))
;
var _STAR_formatter_STAR__temp_val__10646 = markdown.core.format;
markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR__temp_val__10645;

markdown.transformers._STAR_formatter_STAR_ = _STAR_formatter_STAR__temp_val__10646;

try{var params__$1 = (cljs.core.truth_(params)?cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.assoc,cljs.core.PersistentArrayMap.EMPTY),params):null);
var lines = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"\n"].join('').split("\n");
var html = (new goog.string.StringBuffer(""));
var references = (cljs.core.truth_(new cljs.core.Keyword(null,"reference-links?","reference-links?",-2003778981).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_references.call(null,lines):null);
var footnotes = (cljs.core.truth_(new cljs.core.Keyword(null,"footnotes?","footnotes?",-1590157845).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_footnotes.call(null,lines):null);
var vec__10647 = (cljs.core.truth_(new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_metadata.call(null,lines):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,lines], null));
var metadata = cljs.core.nth.call(null,vec__10647,(0),null);
var lines__$1 = cljs.core.nth.call(null,vec__10647,(1),null);
var transformer = markdown.core.init_transformer.call(null,params__$1);
var G__10653_10663 = lines__$1;
var vec__10654_10664 = G__10653_10663;
var seq__10655_10665 = cljs.core.seq.call(null,vec__10654_10664);
var first__10656_10666 = cljs.core.first.call(null,seq__10655_10665);
var seq__10655_10667__$1 = cljs.core.next.call(null,seq__10655_10665);
var line_10668 = first__10656_10666;
var more_10669 = seq__10655_10667__$1;
var state_10670 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"clojurescript","clojurescript",-299769403),true,new cljs.core.Keyword(null,"references","references",882562509),references,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),footnotes,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true], null),params__$1);
var G__10653_10671__$1 = G__10653_10663;
var state_10672__$1 = state_10670;
while(true){
var vec__10660_10673 = G__10653_10671__$1;
var seq__10661_10674 = cljs.core.seq.call(null,vec__10660_10673);
var first__10662_10675 = cljs.core.first.call(null,seq__10661_10674);
var seq__10661_10676__$1 = cljs.core.next.call(null,seq__10661_10674);
var line_10677__$1 = first__10662_10675;
var more_10678__$1 = seq__10661_10676__$1;
var state_10679__$2 = state_10672__$1;
var line_10680__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749).cljs$core$IFn$_invoke$arity$1(state_10679__$2))?"":line_10677__$1);
var state_10681__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_10679__$2))?transformer.call(null,html,new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_10679__$2),new cljs.core.Keyword(null,"next-line","next-line",-1187000287).cljs$core$IFn$_invoke$arity$1(state_10679__$2),cljs.core.assoc.call(null,cljs.core.dissoc.call(null,state_10679__$2,new cljs.core.Keyword(null,"buf","buf",-213913340),new cljs.core.Keyword(null,"lists","lists",-884730684),new cljs.core.Keyword(null,"next-line","next-line",-1187000287)),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true)):state_10679__$2);
if(cljs.core.truth_(cljs.core.not_empty.call(null,more_10678__$1))){
var G__10682 = more_10678__$1;
var G__10683 = cljs.core.assoc.call(null,transformer.call(null,html,line_10680__$2,cljs.core.first.call(null,more_10678__$1),cljs.core.dissoc.call(null,state_10681__$3,new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749))),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),cljs.core.empty_QMARK_.call(null,line_10680__$2));
G__10653_10671__$1 = G__10682;
state_10672__$1 = G__10683;
continue;
} else {
transformer.call(null,html.append(markdown.transformers.footer.call(null,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205).cljs$core$IFn$_invoke$arity$1(state_10681__$3))),line_10680__$2,"",cljs.core.assoc.call(null,state_10681__$3,new cljs.core.Keyword(null,"eof","eof",-489063237),true));
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"metadata","metadata",1799301597),metadata,new cljs.core.Keyword(null,"html","html",-998796897),html.toString()], null);
}finally {markdown.transformers._STAR_formatter_STAR_ = _STAR_formatter_STAR__orig_val__10644;

markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR__orig_val__10643;
}});
markdown.core.md__GT_html = (function markdown$core$md__GT_html(var_args){
var args__4736__auto__ = [];
var len__4730__auto___10686 = arguments.length;
var i__4731__auto___10687 = (0);
while(true){
if((i__4731__auto___10687 < len__4730__auto___10686)){
args__4736__auto__.push((arguments[i__4731__auto___10687]));

var G__10688 = (i__4731__auto___10687 + (1));
i__4731__auto___10687 = G__10688;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return new cljs.core.Keyword(null,"html","html",-998796897).cljs$core$IFn$_invoke$arity$1(markdown.core.md_to_html_string_STAR_.call(null,text,params));
});

markdown.core.md__GT_html.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
markdown.core.md__GT_html.cljs$lang$applyTo = (function (seq10684){
var G__10685 = cljs.core.first.call(null,seq10684);
var seq10684__$1 = cljs.core.next.call(null,seq10684);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10685,seq10684__$1);
});

markdown.core.md__GT_html_with_meta = (function markdown$core$md__GT_html_with_meta(var_args){
var args__4736__auto__ = [];
var len__4730__auto___10691 = arguments.length;
var i__4731__auto___10692 = (0);
while(true){
if((i__4731__auto___10692 < len__4730__auto___10691)){
args__4736__auto__.push((arguments[i__4731__auto___10692]));

var G__10693 = (i__4731__auto___10692 + (1));
i__4731__auto___10692 = G__10693;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return markdown.core.md_to_html_string_STAR_.call(null,text,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742),true], null),params));
});

markdown.core.md__GT_html_with_meta.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
markdown.core.md__GT_html_with_meta.cljs$lang$applyTo = (function (seq10689){
var G__10690 = cljs.core.first.call(null,seq10689);
var seq10689__$1 = cljs.core.next.call(null,seq10689);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10690,seq10689__$1);
});

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtml = (function markdown$core$mdToHtml(var_args){
var args__4736__auto__ = [];
var len__4730__auto___10695 = arguments.length;
var i__4731__auto___10696 = (0);
while(true){
if((i__4731__auto___10696 < len__4730__auto___10695)){
args__4736__auto__.push((arguments[i__4731__auto___10696]));

var G__10697 = (i__4731__auto___10696 + (1));
i__4731__auto___10696 = G__10697;
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
return cljs.core.apply.call(null,markdown.core.md__GT_html,params);
});

markdown.core.mdToHtml.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
markdown.core.mdToHtml.cljs$lang$applyTo = (function (seq10694){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10694));
});

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtmlWithMeta = (function markdown$core$mdToHtmlWithMeta(var_args){
var args__4736__auto__ = [];
var len__4730__auto___10699 = arguments.length;
var i__4731__auto___10700 = (0);
while(true){
if((i__4731__auto___10700 < len__4730__auto___10699)){
args__4736__auto__.push((arguments[i__4731__auto___10700]));

var G__10701 = (i__4731__auto___10700 + (1));
i__4731__auto___10700 = G__10701;
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
return cljs.core.apply.call(null,markdown.core.md__GT_html_with_meta,params);
});

markdown.core.mdToHtmlWithMeta.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
markdown.core.mdToHtmlWithMeta.cljs$lang$applyTo = (function (seq10698){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10698));
});


//# sourceMappingURL=core.js.map
