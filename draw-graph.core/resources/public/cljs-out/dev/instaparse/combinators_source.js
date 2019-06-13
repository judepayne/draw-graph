// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('instaparse.combinators_source');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('instaparse.reduction');
goog.require('instaparse.util');
instaparse.combinators_source.Epsilon = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$kw$epsilon], null);
/**
 * Optional, i.e., parser?
 */
instaparse.combinators_source.opt = (function instaparse$combinators_source$opt(parser){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(parser,instaparse.combinators_source.Epsilon)){
return instaparse.combinators_source.Epsilon;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$opt,cljs.core.cst$kw$parser,parser], null);
}
});
/**
 * One or more, i.e., parser+
 */
instaparse.combinators_source.plus = (function instaparse$combinators_source$plus(parser){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(parser,instaparse.combinators_source.Epsilon)){
return instaparse.combinators_source.Epsilon;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$plus,cljs.core.cst$kw$parser,parser], null);
}
});
/**
 * Zero or more, i.e., parser*
 */
instaparse.combinators_source.star = (function instaparse$combinators_source$star(parser){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(parser,instaparse.combinators_source.Epsilon)){
return instaparse.combinators_source.Epsilon;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$star,cljs.core.cst$kw$parser,parser], null);
}
});
/**
 * Between m and n repetitions
 */
instaparse.combinators_source.rep = (function instaparse$combinators_source$rep(m,n,parser){
if((m <= n)){
} else {
throw (new Error("Assert failed: (<= m n)"));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(parser,instaparse.combinators_source.Epsilon)){
return instaparse.combinators_source.Epsilon;
} else {
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$tag,cljs.core.cst$kw$rep,cljs.core.cst$kw$parser,parser,cljs.core.cst$kw$min,m,cljs.core.cst$kw$max,n], null);
}
});
/**
 * Alternation, i.e., parser1 | parser2 | parser3 | ...
 */
instaparse.combinators_source.alt = (function instaparse$combinators_source$alt(var_args){
var args__4736__auto__ = [];
var len__4730__auto___11500 = arguments.length;
var i__4731__auto___11501 = (0);
while(true){
if((i__4731__auto___11501 < len__4730__auto___11500)){
args__4736__auto__.push((arguments[i__4731__auto___11501]));

var G__11502 = (i__4731__auto___11501 + (1));
i__4731__auto___11501 = G__11502;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic = (function (parsers){
if(cljs.core.every_QMARK_(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,instaparse.combinators_source.Epsilon),parsers)){
return instaparse.combinators_source.Epsilon;
} else {
if(instaparse.reduction.singleton_QMARK_(parsers)){
return cljs.core.first(parsers);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$alt,cljs.core.cst$kw$parsers,parsers], null);

}
}
});

instaparse.combinators_source.alt.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
instaparse.combinators_source.alt.cljs$lang$applyTo = (function (seq11499){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq11499));
});

instaparse.combinators_source.ord2 = (function instaparse$combinators_source$ord2(parser1,parser2){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$ord,cljs.core.cst$kw$parser1,parser1,cljs.core.cst$kw$parser2,parser2], null);
});
/**
 * Ordered choice, i.e., parser1 / parser2
 */
instaparse.combinators_source.ord = (function instaparse$combinators_source$ord(var_args){
var G__11506 = arguments.length;
switch (G__11506) {
case 0:
return instaparse.combinators_source.ord.cljs$core$IFn$_invoke$arity$0();

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___11508 = arguments.length;
var i__4731__auto___11509 = (0);
while(true){
if((i__4731__auto___11509 < len__4730__auto___11508)){
args_arr__4751__auto__.push((arguments[i__4731__auto___11509]));

var G__11510 = (i__4731__auto___11509 + (1));
i__4731__auto___11509 = G__11510;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((1)),(0),null));
return instaparse.combinators_source.ord.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4752__auto__);

}
});

instaparse.combinators_source.ord.cljs$core$IFn$_invoke$arity$0 = (function (){
return instaparse.combinators_source.Epsilon;
});

instaparse.combinators_source.ord.cljs$core$IFn$_invoke$arity$variadic = (function (parser1,parsers){
var parsers__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(parser1,instaparse.combinators_source.Epsilon))?cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([instaparse.combinators_source.Epsilon]),parsers):parsers);
if(cljs.core.seq(parsers__$1)){
return instaparse.combinators_source.ord2(parser1,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(instaparse.combinators_source.ord,parsers__$1));
} else {
return parser1;
}
});

/** @this {Function} */
instaparse.combinators_source.ord.cljs$lang$applyTo = (function (seq11504){
var G__11505 = cljs.core.first(seq11504);
var seq11504__$1 = cljs.core.next(seq11504);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11505,seq11504__$1);
});

instaparse.combinators_source.ord.cljs$lang$maxFixedArity = (1);

/**
 * Concatenation, i.e., parser1 parser2 ...
 */
instaparse.combinators_source.cat = (function instaparse$combinators_source$cat(var_args){
var args__4736__auto__ = [];
var len__4730__auto___11512 = arguments.length;
var i__4731__auto___11513 = (0);
while(true){
if((i__4731__auto___11513 < len__4730__auto___11512)){
args__4736__auto__.push((arguments[i__4731__auto___11513]));

var G__11514 = (i__4731__auto___11513 + (1));
i__4731__auto___11513 = G__11514;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic = (function (parsers){
if(cljs.core.every_QMARK_(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,instaparse.combinators_source.Epsilon),parsers)){
return instaparse.combinators_source.Epsilon;
} else {
var parsers__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([instaparse.combinators_source.Epsilon]),parsers);
if(instaparse.reduction.singleton_QMARK_(parsers__$1)){
return cljs.core.first(parsers__$1);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$cat,cljs.core.cst$kw$parsers,parsers__$1], null);
}
}
});

instaparse.combinators_source.cat.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
instaparse.combinators_source.cat.cljs$lang$applyTo = (function (seq11511){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq11511));
});

/**
 * Create a string terminal out of s
 */
instaparse.combinators_source.string = (function instaparse$combinators_source$string(s){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,"")){
return instaparse.combinators_source.Epsilon;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$string,cljs.core.cst$kw$string,s], null);
}
});
/**
 * Create a case-insensitive string terminal out of s
 */
instaparse.combinators_source.string_ci = (function instaparse$combinators_source$string_ci(s){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,"")){
return instaparse.combinators_source.Epsilon;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$string_DASH_ci,cljs.core.cst$kw$string,s], null);
}
});
/**
 * Matches a Unicode code point or a range of code points
 */
instaparse.combinators_source.unicode_char = (function instaparse$combinators_source$unicode_char(var_args){
var G__11516 = arguments.length;
switch (G__11516) {
case 1:
return instaparse.combinators_source.unicode_char.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return instaparse.combinators_source.unicode_char.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

instaparse.combinators_source.unicode_char.cljs$core$IFn$_invoke$arity$1 = (function (code_point){
return instaparse.combinators_source.unicode_char.cljs$core$IFn$_invoke$arity$2(code_point,code_point);
});

instaparse.combinators_source.unicode_char.cljs$core$IFn$_invoke$arity$2 = (function (lo,hi){
if((lo <= hi)){
} else {
throw (new Error(["Assert failed: ","Character range minimum must be less than or equal the maximum","\n","(<= lo hi)"].join('')));
}

return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$char,cljs.core.cst$kw$lo,lo,cljs.core.cst$kw$hi,hi], null);
});

instaparse.combinators_source.unicode_char.cljs$lang$maxFixedArity = 2;

/**
 * JavaScript regexes have no .lookingAt method, so in cljs we just
 *   add a '^' character to the front of the regex.
 */
instaparse.combinators_source.add_beginning_constraint = (function instaparse$combinators_source$add_beginning_constraint(r){
if(cljs.core.regexp_QMARK_(r)){
return (new RegExp(["^",cljs.core.str.cljs$core$IFn$_invoke$arity$1(r.source)].join(''),instaparse.util.regexp_flags(r)));
} else {
return r;
}
});
/**
 * Create a regexp terminal out of regular expression r
 */
instaparse.combinators_source.regexp = (function instaparse$combinators_source$regexp(r){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(r,"")){
return instaparse.combinators_source.Epsilon;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$regexp,cljs.core.cst$kw$regexp,instaparse.combinators_source.add_beginning_constraint(cljs.core.re_pattern(r))], null);
}
});
/**
 * Refers to a non-terminal defined by the grammar map
 */
instaparse.combinators_source.nt = (function instaparse$combinators_source$nt(s){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,s], null);
});
/**
 * Lookahead, i.e., &parser
 */
instaparse.combinators_source.look = (function instaparse$combinators_source$look(parser){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$look,cljs.core.cst$kw$parser,parser], null);
});
/**
 * Negative lookahead, i.e., !parser
 */
instaparse.combinators_source.neg = (function instaparse$combinators_source$neg(parser){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$neg,cljs.core.cst$kw$parser,parser], null);
});
/**
 * Hide the result of parser, i.e., <parser>
 */
instaparse.combinators_source.hide = (function instaparse$combinators_source$hide(parser){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parser,cljs.core.cst$kw$hide,true);
});
/**
 * Hide the tag associated with this rule.  
 *   Wrap this combinator around the entire right-hand side.
 */
instaparse.combinators_source.hide_tag = (function instaparse$combinators_source$hide_tag(parser){
return instaparse.reduction.red(parser,instaparse.reduction.raw_non_terminal_reduction);
});
/**
 * Tests whether parser was created with hide-tag combinator
 */
instaparse.combinators_source.hidden_tag_QMARK_ = (function instaparse$combinators_source$hidden_tag_QMARK_(parser){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$red.cljs$core$IFn$_invoke$arity$1(parser),instaparse.reduction.raw_non_terminal_reduction);
});
/**
 * Recursively undoes the effect of hide on one parser
 */
instaparse.combinators_source.unhide_content = (function instaparse$combinators_source$unhide_content(parser){
var parser__$1 = (cljs.core.truth_(cljs.core.cst$kw$hide.cljs$core$IFn$_invoke$arity$1(parser))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(parser,cljs.core.cst$kw$hide):parser);
if(cljs.core.truth_(cljs.core.cst$kw$parser.cljs$core$IFn$_invoke$arity$1(parser__$1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parser__$1,cljs.core.cst$kw$parser,(function (){var G__11518 = cljs.core.cst$kw$parser.cljs$core$IFn$_invoke$arity$1(parser__$1);
return (instaparse.combinators_source.unhide_content.cljs$core$IFn$_invoke$arity$1 ? instaparse.combinators_source.unhide_content.cljs$core$IFn$_invoke$arity$1(G__11518) : instaparse.combinators_source.unhide_content.call(null,G__11518));
})());
} else {
if(cljs.core.truth_(cljs.core.cst$kw$parsers.cljs$core$IFn$_invoke$arity$1(parser__$1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parser__$1,cljs.core.cst$kw$parsers,cljs.core.map.cljs$core$IFn$_invoke$arity$2(instaparse.combinators_source.unhide_content,cljs.core.cst$kw$parsers.cljs$core$IFn$_invoke$arity$1(parser__$1)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(parser__$1),cljs.core.cst$kw$ord)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(parser__$1,cljs.core.cst$kw$parser1,(function (){var G__11519 = cljs.core.cst$kw$parser1.cljs$core$IFn$_invoke$arity$1(parser__$1);
return (instaparse.combinators_source.unhide_content.cljs$core$IFn$_invoke$arity$1 ? instaparse.combinators_source.unhide_content.cljs$core$IFn$_invoke$arity$1(G__11519) : instaparse.combinators_source.unhide_content.call(null,G__11519));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$parser2,(function (){var G__11520 = cljs.core.cst$kw$parser2.cljs$core$IFn$_invoke$arity$1(parser__$1);
return (instaparse.combinators_source.unhide_content.cljs$core$IFn$_invoke$arity$1 ? instaparse.combinators_source.unhide_content.cljs$core$IFn$_invoke$arity$1(G__11520) : instaparse.combinators_source.unhide_content.call(null,G__11520));
})()], 0));
} else {
return parser__$1;

}
}
}
});
/**
 * Recursively undoes the effect of hide on all parsers in the grammar
 */
instaparse.combinators_source.unhide_all_content = (function instaparse$combinators_source$unhide_all_content(grammar){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4523__auto__ = (function instaparse$combinators_source$unhide_all_content_$_iter__11521(s__11522){
return (new cljs.core.LazySeq(null,(function (){
var s__11522__$1 = s__11522;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__11522__$1);
if(temp__5720__auto__){
var s__11522__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__11522__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__11522__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__11524 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__11523 = (0);
while(true){
if((i__11523 < size__4522__auto__)){
var vec__11525 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__11523);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11525,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11525,(1),null);
cljs.core.chunk_append(b__11524,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,instaparse.combinators_source.unhide_content(v)], null));

var G__11531 = (i__11523 + (1));
i__11523 = G__11531;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__11524),instaparse$combinators_source$unhide_all_content_$_iter__11521(cljs.core.chunk_rest(s__11522__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__11524),null);
}
} else {
var vec__11528 = cljs.core.first(s__11522__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11528,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11528,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,instaparse.combinators_source.unhide_content(v)], null),instaparse$combinators_source$unhide_all_content_$_iter__11521(cljs.core.rest(s__11522__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(grammar);
})());
});
/**
 * Recursively undoes the effect of hide-tag
 */
instaparse.combinators_source.unhide_tags = (function instaparse$combinators_source$unhide_tags(reduction_type,grammar){
var temp__5718__auto__ = (instaparse.reduction.reduction_types.cljs$core$IFn$_invoke$arity$1 ? instaparse.reduction.reduction_types.cljs$core$IFn$_invoke$arity$1(reduction_type) : instaparse.reduction.reduction_types.call(null,reduction_type));
if(cljs.core.truth_(temp__5718__auto__)){
var reduction = temp__5718__auto__;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4523__auto__ = ((function (reduction,temp__5718__auto__){
return (function instaparse$combinators_source$unhide_tags_$_iter__11532(s__11533){
return (new cljs.core.LazySeq(null,((function (reduction,temp__5718__auto__){
return (function (){
var s__11533__$1 = s__11533;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__11533__$1);
if(temp__5720__auto__){
var s__11533__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__11533__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__11533__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__11535 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__11534 = (0);
while(true){
if((i__11534 < size__4522__auto__)){
var vec__11536 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__11534);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11536,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11536,(1),null);
cljs.core.chunk_append(b__11535,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v,cljs.core.cst$kw$red,(reduction.cljs$core$IFn$_invoke$arity$1 ? reduction.cljs$core$IFn$_invoke$arity$1(k) : reduction.call(null,k)))], null));

var G__11542 = (i__11534 + (1));
i__11534 = G__11542;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__11535),instaparse$combinators_source$unhide_tags_$_iter__11532(cljs.core.chunk_rest(s__11533__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__11535),null);
}
} else {
var vec__11539 = cljs.core.first(s__11533__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11539,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11539,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v,cljs.core.cst$kw$red,(reduction.cljs$core$IFn$_invoke$arity$1 ? reduction.cljs$core$IFn$_invoke$arity$1(k) : reduction.call(null,k)))], null),instaparse$combinators_source$unhide_tags_$_iter__11532(cljs.core.rest(s__11533__$2)));
}
} else {
return null;
}
break;
}
});})(reduction,temp__5718__auto__))
,null,null));
});})(reduction,temp__5718__auto__))
;
return iter__4523__auto__(grammar);
})());
} else {
return instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid output format ",reduction_type,". Use :enlive or :hiccup."], 0));
}
});
/**
 * Recursively undoes the effect of both hide and hide-tag
 */
instaparse.combinators_source.unhide_all = (function instaparse$combinators_source$unhide_all(reduction_type,grammar){
var temp__5718__auto__ = (instaparse.reduction.reduction_types.cljs$core$IFn$_invoke$arity$1 ? instaparse.reduction.reduction_types.cljs$core$IFn$_invoke$arity$1(reduction_type) : instaparse.reduction.reduction_types.call(null,reduction_type));
if(cljs.core.truth_(temp__5718__auto__)){
var reduction = temp__5718__auto__;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4523__auto__ = ((function (reduction,temp__5718__auto__){
return (function instaparse$combinators_source$unhide_all_$_iter__11543(s__11544){
return (new cljs.core.LazySeq(null,((function (reduction,temp__5718__auto__){
return (function (){
var s__11544__$1 = s__11544;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__11544__$1);
if(temp__5720__auto__){
var s__11544__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__11544__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__11544__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__11546 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__11545 = (0);
while(true){
if((i__11545 < size__4522__auto__)){
var vec__11547 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__11545);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11547,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11547,(1),null);
cljs.core.chunk_append(b__11546,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(instaparse.combinators_source.unhide_content(v),cljs.core.cst$kw$red,(reduction.cljs$core$IFn$_invoke$arity$1 ? reduction.cljs$core$IFn$_invoke$arity$1(k) : reduction.call(null,k)))], null));

var G__11553 = (i__11545 + (1));
i__11545 = G__11553;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__11546),instaparse$combinators_source$unhide_all_$_iter__11543(cljs.core.chunk_rest(s__11544__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__11546),null);
}
} else {
var vec__11550 = cljs.core.first(s__11544__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11550,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11550,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(instaparse.combinators_source.unhide_content(v),cljs.core.cst$kw$red,(reduction.cljs$core$IFn$_invoke$arity$1 ? reduction.cljs$core$IFn$_invoke$arity$1(k) : reduction.call(null,k)))], null),instaparse$combinators_source$unhide_all_$_iter__11543(cljs.core.rest(s__11544__$2)));
}
} else {
return null;
}
break;
}
});})(reduction,temp__5718__auto__))
,null,null));
});})(reduction,temp__5718__auto__))
;
return iter__4523__auto__(grammar);
})());
} else {
return instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid output format ",reduction_type,". Use :enlive or :hiccup."], 0));
}
});
instaparse.combinators_source.auto_whitespace_parser = (function instaparse$combinators_source$auto_whitespace_parser(parser,ws_parser){
var G__11555 = cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(parser);
var G__11555__$1 = (((G__11555 instanceof cljs.core.Keyword))?G__11555.fqn:null);
switch (G__11555__$1) {
case "nt":
case "epsilon":
return parser;

break;
case "opt":
case "plus":
case "star":
case "rep":
case "look":
case "neg":
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(parser,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$parser], null),instaparse.combinators_source.auto_whitespace_parser,ws_parser);

break;
case "alt":
case "cat":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parser,cljs.core.cst$kw$parsers,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__11555,G__11555__$1){
return (function (p1__11554_SHARP_){
return (instaparse.combinators_source.auto_whitespace_parser.cljs$core$IFn$_invoke$arity$2 ? instaparse.combinators_source.auto_whitespace_parser.cljs$core$IFn$_invoke$arity$2(p1__11554_SHARP_,ws_parser) : instaparse.combinators_source.auto_whitespace_parser.call(null,p1__11554_SHARP_,ws_parser));
});})(G__11555,G__11555__$1))
,cljs.core.cst$kw$parsers.cljs$core$IFn$_invoke$arity$1(parser)));

break;
case "ord":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(parser,cljs.core.cst$kw$parser1,(function (){var G__11556 = cljs.core.cst$kw$parser1.cljs$core$IFn$_invoke$arity$1(parser);
var G__11557 = ws_parser;
return (instaparse.combinators_source.auto_whitespace_parser.cljs$core$IFn$_invoke$arity$2 ? instaparse.combinators_source.auto_whitespace_parser.cljs$core$IFn$_invoke$arity$2(G__11556,G__11557) : instaparse.combinators_source.auto_whitespace_parser.call(null,G__11556,G__11557));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$parser2,(function (){var G__11558 = cljs.core.cst$kw$parser2.cljs$core$IFn$_invoke$arity$1(parser);
var G__11559 = ws_parser;
return (instaparse.combinators_source.auto_whitespace_parser.cljs$core$IFn$_invoke$arity$2 ? instaparse.combinators_source.auto_whitespace_parser.cljs$core$IFn$_invoke$arity$2(G__11558,G__11559) : instaparse.combinators_source.auto_whitespace_parser.call(null,G__11558,G__11559));
})()], 0));

break;
case "string":
case "string-ci":
case "regexp":
if(cljs.core.truth_(cljs.core.cst$kw$red.cljs$core$IFn$_invoke$arity$1(parser))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ws_parser,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(parser,cljs.core.cst$kw$red)], 0)),cljs.core.cst$kw$red,cljs.core.cst$kw$red.cljs$core$IFn$_invoke$arity$1(parser));
} else {
return instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ws_parser,parser], 0));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__11555__$1)].join('')));

}
});
instaparse.combinators_source.auto_whitespace = (function instaparse$combinators_source$auto_whitespace(grammar,start,grammar_ws,start_ws){
var ws_parser = instaparse.combinators_source.hide(instaparse.combinators_source.opt(instaparse.combinators_source.nt(start_ws)));
var grammar_ws__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(grammar_ws,start_ws,instaparse.combinators_source.hide_tag((grammar_ws.cljs$core$IFn$_invoke$arity$1 ? grammar_ws.cljs$core$IFn$_invoke$arity$1(start_ws) : grammar_ws.call(null,start_ws))));
var modified_grammar = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4523__auto__ = ((function (ws_parser,grammar_ws__$1){
return (function instaparse$combinators_source$auto_whitespace_$_iter__11561(s__11562){
return (new cljs.core.LazySeq(null,((function (ws_parser,grammar_ws__$1){
return (function (){
var s__11562__$1 = s__11562;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__11562__$1);
if(temp__5720__auto__){
var s__11562__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__11562__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__11562__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__11564 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__11563 = (0);
while(true){
if((i__11563 < size__4522__auto__)){
var vec__11565 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__11563);
var nt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11565,(0),null);
var parser = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11565,(1),null);
cljs.core.chunk_append(b__11564,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nt,instaparse.combinators_source.auto_whitespace_parser(parser,ws_parser)], null));

var G__11571 = (i__11563 + (1));
i__11563 = G__11571;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__11564),instaparse$combinators_source$auto_whitespace_$_iter__11561(cljs.core.chunk_rest(s__11562__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__11564),null);
}
} else {
var vec__11568 = cljs.core.first(s__11562__$2);
var nt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11568,(0),null);
var parser = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11568,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nt,instaparse.combinators_source.auto_whitespace_parser(parser,ws_parser)], null),instaparse$combinators_source$auto_whitespace_$_iter__11561(cljs.core.rest(s__11562__$2)));
}
} else {
return null;
}
break;
}
});})(ws_parser,grammar_ws__$1))
,null,null));
});})(ws_parser,grammar_ws__$1))
;
return iter__4523__auto__(grammar);
})());
var final_grammar = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(modified_grammar,start,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2((modified_grammar.cljs$core$IFn$_invoke$arity$1 ? modified_grammar.cljs$core$IFn$_invoke$arity$1(start) : modified_grammar.call(null,start)),cljs.core.cst$kw$red),ws_parser], 0)),cljs.core.cst$kw$red,cljs.core.cst$kw$red.cljs$core$IFn$_invoke$arity$1((modified_grammar.cljs$core$IFn$_invoke$arity$1 ? modified_grammar.cljs$core$IFn$_invoke$arity$1(start) : modified_grammar.call(null,start)))));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([final_grammar,grammar_ws__$1], 0));
});
