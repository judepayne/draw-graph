// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('markdown.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('markdown.common');
goog.require('markdown.links');
goog.require('markdown.transformers');
markdown.core.init_transformer = (function markdown$core$init_transformer(p__12580){
var map__12581 = p__12580;
var map__12581__$1 = (((((!((map__12581 == null))))?(((((map__12581.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12581.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12581):map__12581);
var replacement_transformers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12581__$1,cljs.core.cst$kw$replacement_DASH_transformers);
var custom_transformers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12581__$1,cljs.core.cst$kw$custom_DASH_transformers);
var inhibit_separator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12581__$1,cljs.core.cst$kw$inhibit_DASH_separator);
return ((function (map__12581,map__12581__$1,replacement_transformers,custom_transformers,inhibit_separator){
return (function (html,line,next_line,state){
var _STAR_inhibit_separator_STAR__orig_val__12583 = markdown.common._STAR_inhibit_separator_STAR_;
var _STAR_inhibit_separator_STAR__temp_val__12584 = inhibit_separator;
markdown.common._STAR_inhibit_separator_STAR_ = _STAR_inhibit_separator_STAR__temp_val__12584;

try{var vec__12585 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (_STAR_inhibit_separator_STAR__orig_val__12583,_STAR_inhibit_separator_STAR__temp_val__12584,map__12581,map__12581__$1,replacement_transformers,custom_transformers,inhibit_separator){
return (function (p__12588,transformer){
var vec__12589 = p__12588;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12589,(0),null);
var state__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12589,(1),null);
var G__12592 = text;
var G__12593 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,cljs.core.cst$kw$next_DASH_line,next_line);
return (transformer.cljs$core$IFn$_invoke$arity$2 ? transformer.cljs$core$IFn$_invoke$arity$2(G__12592,G__12593) : transformer.call(null,G__12592,G__12593));
});})(_STAR_inhibit_separator_STAR__orig_val__12583,_STAR_inhibit_separator_STAR__temp_val__12584,map__12581,map__12581__$1,replacement_transformers,custom_transformers,inhibit_separator))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,state], null),(function (){var or__4131__auto__ = replacement_transformers;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(markdown.transformers.transformer_vector,custom_transformers);
}
})());
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12585,(0),null);
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12585,(1),null);
html.append(text);

return new_state;
}finally {markdown.common._STAR_inhibit_separator_STAR_ = _STAR_inhibit_separator_STAR__orig_val__12583;
}});
;})(map__12581,map__12581__$1,replacement_transformers,custom_transformers,inhibit_separator))
});
/**
 * Removed from cljs.core 0.0-1885, Ref. http://goo.gl/su7Xkj
 */
markdown.core.format = (function markdown$core$format(var_args){
var args__4736__auto__ = [];
var len__4730__auto___12596 = arguments.length;
var i__4731__auto___12597 = (0);
while(true){
if((i__4731__auto___12597 < len__4730__auto___12596)){
args__4736__auto__.push((arguments[i__4731__auto___12597]));

var G__12598 = (i__4731__auto___12597 + (1));
i__4731__auto___12597 = G__12598;
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
markdown.core.format.cljs$lang$applyTo = (function (seq12594){
var G__12595 = cljs.core.first(seq12594);
var seq12594__$1 = cljs.core.next(seq12594);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12595,seq12594__$1);
});

markdown.core.parse_references = (function markdown$core$parse_references(lines){
var references = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var seq__12599_12603 = cljs.core.seq(lines);
var chunk__12600_12604 = null;
var count__12601_12605 = (0);
var i__12602_12606 = (0);
while(true){
if((i__12602_12606 < count__12601_12605)){
var line_12607 = chunk__12600_12604.cljs$core$IIndexed$_nth$arity$2(null,i__12602_12606);
markdown.links.parse_reference_link(line_12607,references);


var G__12608 = seq__12599_12603;
var G__12609 = chunk__12600_12604;
var G__12610 = count__12601_12605;
var G__12611 = (i__12602_12606 + (1));
seq__12599_12603 = G__12608;
chunk__12600_12604 = G__12609;
count__12601_12605 = G__12610;
i__12602_12606 = G__12611;
continue;
} else {
var temp__5720__auto___12612 = cljs.core.seq(seq__12599_12603);
if(temp__5720__auto___12612){
var seq__12599_12613__$1 = temp__5720__auto___12612;
if(cljs.core.chunked_seq_QMARK_(seq__12599_12613__$1)){
var c__4550__auto___12614 = cljs.core.chunk_first(seq__12599_12613__$1);
var G__12615 = cljs.core.chunk_rest(seq__12599_12613__$1);
var G__12616 = c__4550__auto___12614;
var G__12617 = cljs.core.count(c__4550__auto___12614);
var G__12618 = (0);
seq__12599_12603 = G__12615;
chunk__12600_12604 = G__12616;
count__12601_12605 = G__12617;
i__12602_12606 = G__12618;
continue;
} else {
var line_12619 = cljs.core.first(seq__12599_12613__$1);
markdown.links.parse_reference_link(line_12619,references);


var G__12620 = cljs.core.next(seq__12599_12613__$1);
var G__12621 = null;
var G__12622 = (0);
var G__12623 = (0);
seq__12599_12603 = G__12620;
chunk__12600_12604 = G__12621;
count__12601_12605 = G__12622;
i__12602_12606 = G__12623;
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
var footnotes = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$next_DASH_fn_DASH_id,(1),cljs.core.cst$kw$processed,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$unprocessed,cljs.core.PersistentArrayMap.EMPTY], null));
var seq__12624_12628 = cljs.core.seq(lines);
var chunk__12625_12629 = null;
var count__12626_12630 = (0);
var i__12627_12631 = (0);
while(true){
if((i__12627_12631 < count__12626_12630)){
var line_12632 = chunk__12625_12629.cljs$core$IIndexed$_nth$arity$2(null,i__12627_12631);
markdown.links.parse_footnote_link(line_12632,footnotes);


var G__12633 = seq__12624_12628;
var G__12634 = chunk__12625_12629;
var G__12635 = count__12626_12630;
var G__12636 = (i__12627_12631 + (1));
seq__12624_12628 = G__12633;
chunk__12625_12629 = G__12634;
count__12626_12630 = G__12635;
i__12627_12631 = G__12636;
continue;
} else {
var temp__5720__auto___12637 = cljs.core.seq(seq__12624_12628);
if(temp__5720__auto___12637){
var seq__12624_12638__$1 = temp__5720__auto___12637;
if(cljs.core.chunked_seq_QMARK_(seq__12624_12638__$1)){
var c__4550__auto___12639 = cljs.core.chunk_first(seq__12624_12638__$1);
var G__12640 = cljs.core.chunk_rest(seq__12624_12638__$1);
var G__12641 = c__4550__auto___12639;
var G__12642 = cljs.core.count(c__4550__auto___12639);
var G__12643 = (0);
seq__12624_12628 = G__12640;
chunk__12625_12629 = G__12641;
count__12626_12630 = G__12642;
i__12627_12631 = G__12643;
continue;
} else {
var line_12644 = cljs.core.first(seq__12624_12638__$1);
markdown.links.parse_footnote_link(line_12644,footnotes);


var G__12645 = cljs.core.next(seq__12624_12638__$1);
var G__12646 = null;
var G__12647 = (0);
var G__12648 = (0);
seq__12624_12628 = G__12645;
chunk__12625_12629 = G__12646;
count__12626_12630 = G__12647;
i__12627_12631 = G__12648;
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
var vec__12650 = cljs.core.split_with((function (p1__12649_SHARP_){
return cljs.core.not_empty(p1__12649_SHARP_.trim());
}),lines);
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12650,(0),null);
var lines__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12650,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.transformers.parse_metadata_headers(metadata),lines__$1], null);
});
/**
 * processes input text line by line and outputs an HTML string
 */
markdown.core.md_to_html_string_STAR_ = (function markdown$core$md_to_html_string_STAR_(text,params){
var _STAR_substring_STAR__orig_val__12653 = markdown.common._STAR_substring_STAR_;
var _STAR_formatter_STAR__orig_val__12654 = markdown.transformers._STAR_formatter_STAR_;
var _STAR_substring_STAR__temp_val__12655 = ((function (_STAR_substring_STAR__orig_val__12653,_STAR_formatter_STAR__orig_val__12654){
return (function (s,n){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,s));
});})(_STAR_substring_STAR__orig_val__12653,_STAR_formatter_STAR__orig_val__12654))
;
var _STAR_formatter_STAR__temp_val__12656 = markdown.core.format;
markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR__temp_val__12655;

markdown.transformers._STAR_formatter_STAR_ = _STAR_formatter_STAR__temp_val__12656;

try{var params__$1 = (cljs.core.truth_(params)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc,cljs.core.PersistentArrayMap.EMPTY),params):null);
var lines = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"\n"].join('').split("\n");
var html = (new goog.string.StringBuffer(""));
var references = (cljs.core.truth_(cljs.core.cst$kw$reference_DASH_links_QMARK_.cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_references(lines):null);
var footnotes = (cljs.core.truth_(cljs.core.cst$kw$footnotes_QMARK_.cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_footnotes(lines):null);
var vec__12657 = (cljs.core.truth_(cljs.core.cst$kw$parse_DASH_meta_QMARK_.cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_metadata(lines):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,lines], null));
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12657,(0),null);
var lines__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12657,(1),null);
var transformer = markdown.core.init_transformer(params__$1);
var G__12663_12697 = lines__$1;
var vec__12664_12698 = G__12663_12697;
var seq__12665_12699 = cljs.core.seq(vec__12664_12698);
var first__12666_12700 = cljs.core.first(seq__12665_12699);
var seq__12665_12701__$1 = cljs.core.next(seq__12665_12699);
var line_12702 = first__12666_12700;
var more_12703 = seq__12665_12701__$1;
var state_12704 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$clojurescript,true,cljs.core.cst$kw$references,references,cljs.core.cst$kw$footnotes,footnotes,cljs.core.cst$kw$last_DASH_line_DASH_empty_QMARK_,true], null),params__$1], 0));
var G__12663_12705__$1 = G__12663_12697;
var state_12706__$1 = state_12704;
while(true){
var vec__12682_12707 = G__12663_12705__$1;
var seq__12683_12708 = cljs.core.seq(vec__12682_12707);
var first__12684_12709 = cljs.core.first(seq__12683_12708);
var seq__12683_12710__$1 = cljs.core.next(seq__12683_12708);
var line_12711__$1 = first__12684_12709;
var more_12712__$1 = seq__12683_12710__$1;
var state_12713__$2 = state_12706__$1;
var line_12714__$2 = (cljs.core.truth_(cljs.core.cst$kw$skip_DASH_next_DASH_line_QMARK_.cljs$core$IFn$_invoke$arity$1(state_12713__$2))?"":line_12711__$1);
var state_12715__$3 = (cljs.core.truth_(cljs.core.cst$kw$buf.cljs$core$IFn$_invoke$arity$1(state_12713__$2))?(function (){var G__12685 = html;
var G__12686 = cljs.core.cst$kw$buf.cljs$core$IFn$_invoke$arity$1(state_12713__$2);
var G__12687 = cljs.core.cst$kw$next_DASH_line.cljs$core$IFn$_invoke$arity$1(state_12713__$2);
var G__12688 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state_12713__$2,cljs.core.cst$kw$buf,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$lists,cljs.core.cst$kw$next_DASH_line], 0)),cljs.core.cst$kw$last_DASH_line_DASH_empty_QMARK_,true);
return (transformer.cljs$core$IFn$_invoke$arity$4 ? transformer.cljs$core$IFn$_invoke$arity$4(G__12685,G__12686,G__12687,G__12688) : transformer.call(null,G__12685,G__12686,G__12687,G__12688));
})():state_12713__$2);
if(cljs.core.truth_(cljs.core.not_empty(more_12712__$1))){
var G__12716 = more_12712__$1;
var G__12717 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__12689 = html;
var G__12690 = line_12714__$2;
var G__12691 = cljs.core.first(more_12712__$1);
var G__12692 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state_12715__$3,cljs.core.cst$kw$skip_DASH_next_DASH_line_QMARK_);
return (transformer.cljs$core$IFn$_invoke$arity$4 ? transformer.cljs$core$IFn$_invoke$arity$4(G__12689,G__12690,G__12691,G__12692) : transformer.call(null,G__12689,G__12690,G__12691,G__12692));
})(),cljs.core.cst$kw$last_DASH_line_DASH_empty_QMARK_,cljs.core.empty_QMARK_(line_12714__$2));
G__12663_12705__$1 = G__12716;
state_12706__$1 = G__12717;
continue;
} else {
var G__12693_12718 = html.append(markdown.transformers.footer(cljs.core.cst$kw$footnotes.cljs$core$IFn$_invoke$arity$1(state_12715__$3)));
var G__12694_12719 = line_12714__$2;
var G__12695_12720 = "";
var G__12696_12721 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state_12715__$3,cljs.core.cst$kw$eof,true);
(transformer.cljs$core$IFn$_invoke$arity$4 ? transformer.cljs$core$IFn$_invoke$arity$4(G__12693_12718,G__12694_12719,G__12695_12720,G__12696_12721) : transformer.call(null,G__12693_12718,G__12694_12719,G__12695_12720,G__12696_12721));
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$metadata,metadata,cljs.core.cst$kw$html,html.toString()], null);
}finally {markdown.transformers._STAR_formatter_STAR_ = _STAR_formatter_STAR__orig_val__12654;

markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR__orig_val__12653;
}});
markdown.core.md__GT_html = (function markdown$core$md__GT_html(var_args){
var args__4736__auto__ = [];
var len__4730__auto___12724 = arguments.length;
var i__4731__auto___12725 = (0);
while(true){
if((i__4731__auto___12725 < len__4730__auto___12724)){
args__4736__auto__.push((arguments[i__4731__auto___12725]));

var G__12726 = (i__4731__auto___12725 + (1));
i__4731__auto___12725 = G__12726;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return cljs.core.cst$kw$html.cljs$core$IFn$_invoke$arity$1(markdown.core.md_to_html_string_STAR_(text,params));
});

markdown.core.md__GT_html.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
markdown.core.md__GT_html.cljs$lang$applyTo = (function (seq12722){
var G__12723 = cljs.core.first(seq12722);
var seq12722__$1 = cljs.core.next(seq12722);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12723,seq12722__$1);
});

markdown.core.md__GT_html_with_meta = (function markdown$core$md__GT_html_with_meta(var_args){
var args__4736__auto__ = [];
var len__4730__auto___12729 = arguments.length;
var i__4731__auto___12730 = (0);
while(true){
if((i__4731__auto___12730 < len__4730__auto___12729)){
args__4736__auto__.push((arguments[i__4731__auto___12730]));

var G__12731 = (i__4731__auto___12730 + (1));
i__4731__auto___12730 = G__12731;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return markdown.core.md_to_html_string_STAR_(text,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$parse_DASH_meta_QMARK_,true], null),params));
});

markdown.core.md__GT_html_with_meta.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
markdown.core.md__GT_html_with_meta.cljs$lang$applyTo = (function (seq12727){
var G__12728 = cljs.core.first(seq12727);
var seq12727__$1 = cljs.core.next(seq12727);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12728,seq12727__$1);
});

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtml = (function markdown$core$mdToHtml(var_args){
var args__4736__auto__ = [];
var len__4730__auto___12733 = arguments.length;
var i__4731__auto___12734 = (0);
while(true){
if((i__4731__auto___12734 < len__4730__auto___12733)){
args__4736__auto__.push((arguments[i__4731__auto___12734]));

var G__12735 = (i__4731__auto___12734 + (1));
i__4731__auto___12734 = G__12735;
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
markdown.core.mdToHtml.cljs$lang$applyTo = (function (seq12732){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12732));
});

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtmlWithMeta = (function markdown$core$mdToHtmlWithMeta(var_args){
var args__4736__auto__ = [];
var len__4730__auto___12737 = arguments.length;
var i__4731__auto___12738 = (0);
while(true){
if((i__4731__auto___12738 < len__4730__auto___12737)){
args__4736__auto__.push((arguments[i__4731__auto___12738]));

var G__12739 = (i__4731__auto___12738 + (1));
i__4731__auto___12738 = G__12739;
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
markdown.core.mdToHtmlWithMeta.cljs$lang$applyTo = (function (seq12736){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12736));
});

