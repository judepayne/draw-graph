goog.provide('instaparse.combinators_source');
goog.require('cljs.core');
goog.require('instaparse.reduction');
goog.require('instaparse.util');
instaparse.combinators_source.Epsilon = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"epsilon","epsilon",-730158570)], null);
/**
 * Optional, i.e., parser?
 */
instaparse.combinators_source.opt = (function instaparse$combinators_source$opt(parser){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(parser,instaparse.combinators_source.Epsilon)){
return instaparse.combinators_source.Epsilon;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.Keyword(null,"parser","parser",-1543495310),parser], null);
}
});
/**
 * One or more, i.e., parser+
 */
instaparse.combinators_source.plus = (function instaparse$combinators_source$plus(parser){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(parser,instaparse.combinators_source.Epsilon)){
return instaparse.combinators_source.Epsilon;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"plus","plus",211540661),new cljs.core.Keyword(null,"parser","parser",-1543495310),parser], null);
}
});
/**
 * Zero or more, i.e., parser*
 */
instaparse.combinators_source.star = (function instaparse$combinators_source$star(parser){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(parser,instaparse.combinators_source.Epsilon)){
return instaparse.combinators_source.Epsilon;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"star","star",279424429),new cljs.core.Keyword(null,"parser","parser",-1543495310),parser], null);
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
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"rep","rep",-1226820564),new cljs.core.Keyword(null,"parser","parser",-1543495310),parser,new cljs.core.Keyword(null,"min","min",444991522),m,new cljs.core.Keyword(null,"max","max",61366548),n], null);
}
});
/**
 * Alternation, i.e., parser1 | parser2 | parser3 | ...
 */
instaparse.combinators_source.alt = (function instaparse$combinators_source$alt(var_args){
var args__4736__auto__ = [];
var len__4730__auto___47882 = arguments.length;
var i__4731__auto___47883 = (0);
while(true){
if((i__4731__auto___47883 < len__4730__auto___47882)){
args__4736__auto__.push((arguments[i__4731__auto___47883]));

var G__47884 = (i__4731__auto___47883 + (1));
i__4731__auto___47883 = G__47884;
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
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"alt","alt",-3214426),new cljs.core.Keyword(null,"parsers","parsers",-804353827),parsers], null);

}
}
});

instaparse.combinators_source.alt.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
instaparse.combinators_source.alt.cljs$lang$applyTo = (function (seq47702){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47702));
});

instaparse.combinators_source.ord2 = (function instaparse$combinators_source$ord2(parser1,parser2){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"ord","ord",1142548323),new cljs.core.Keyword(null,"parser1","parser1",-439601422),parser1,new cljs.core.Keyword(null,"parser2","parser2",1013754688),parser2], null);
});
/**
 * Ordered choice, i.e., parser1 / parser2
 */
instaparse.combinators_source.ord = (function instaparse$combinators_source$ord(var_args){
var G__47709 = arguments.length;
switch (G__47709) {
case 0:
return instaparse.combinators_source.ord.cljs$core$IFn$_invoke$arity$0();

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___47888 = arguments.length;
var i__4731__auto___47889 = (0);
while(true){
if((i__4731__auto___47889 < len__4730__auto___47888)){
args_arr__4751__auto__.push((arguments[i__4731__auto___47889]));

var G__47890 = (i__4731__auto___47889 + (1));
i__4731__auto___47889 = G__47890;
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
instaparse.combinators_source.ord.cljs$lang$applyTo = (function (seq47706){
var G__47707 = cljs.core.first(seq47706);
var seq47706__$1 = cljs.core.next(seq47706);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47707,seq47706__$1);
});

instaparse.combinators_source.ord.cljs$lang$maxFixedArity = (1);

/**
 * Concatenation, i.e., parser1 parser2 ...
 */
instaparse.combinators_source.cat = (function instaparse$combinators_source$cat(var_args){
var args__4736__auto__ = [];
var len__4730__auto___47895 = arguments.length;
var i__4731__auto___47896 = (0);
while(true){
if((i__4731__auto___47896 < len__4730__auto___47895)){
args__4736__auto__.push((arguments[i__4731__auto___47896]));

var G__47898 = (i__4731__auto___47896 + (1));
i__4731__auto___47896 = G__47898;
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
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"cat","cat",-1457810207),new cljs.core.Keyword(null,"parsers","parsers",-804353827),parsers__$1], null);
}
}
});

instaparse.combinators_source.cat.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
instaparse.combinators_source.cat.cljs$lang$applyTo = (function (seq47710){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47710));
});

/**
 * Create a string terminal out of s
 */
instaparse.combinators_source.string = (function instaparse$combinators_source$string(s){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,"")){
return instaparse.combinators_source.Epsilon;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"string","string",-1989541586),s], null);
}
});
/**
 * Create a case-insensitive string terminal out of s
 */
instaparse.combinators_source.string_ci = (function instaparse$combinators_source$string_ci(s){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,"")){
return instaparse.combinators_source.Epsilon;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"string-ci","string-ci",374631805),new cljs.core.Keyword(null,"string","string",-1989541586),s], null);
}
});
/**
 * Matches a Unicode code point or a range of code points
 */
instaparse.combinators_source.unicode_char = (function instaparse$combinators_source$unicode_char(var_args){
var G__47727 = arguments.length;
switch (G__47727) {
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

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"char","char",-641587586),new cljs.core.Keyword(null,"lo","lo",-931799889),lo,new cljs.core.Keyword(null,"hi","hi",-1821422114),hi], null);
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
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"regexp","regexp",-541372782),new cljs.core.Keyword(null,"regexp","regexp",-541372782),instaparse.combinators_source.add_beginning_constraint(cljs.core.re_pattern(r))], null);
}
});
/**
 * Refers to a non-terminal defined by the grammar map
 */
instaparse.combinators_source.nt = (function instaparse$combinators_source$nt(s){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"nt","nt",-835425781),new cljs.core.Keyword(null,"keyword","keyword",811389747),s], null);
});
/**
 * Lookahead, i.e., &parser
 */
instaparse.combinators_source.look = (function instaparse$combinators_source$look(parser){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"look","look",-539441433),new cljs.core.Keyword(null,"parser","parser",-1543495310),parser], null);
});
/**
 * Negative lookahead, i.e., !parser
 */
instaparse.combinators_source.neg = (function instaparse$combinators_source$neg(parser){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"neg","neg",1800032960),new cljs.core.Keyword(null,"parser","parser",-1543495310),parser], null);
});
/**
 * Hide the result of parser, i.e., <parser>
 */
instaparse.combinators_source.hide = (function instaparse$combinators_source$hide(parser){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parser,new cljs.core.Keyword(null,"hide","hide",-596913169),true);
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
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"red","red",-969428204).cljs$core$IFn$_invoke$arity$1(parser),instaparse.reduction.raw_non_terminal_reduction);
});
/**
 * Recursively undoes the effect of hide on one parser
 */
instaparse.combinators_source.unhide_content = (function instaparse$combinators_source$unhide_content(parser){
var parser__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"hide","hide",-596913169).cljs$core$IFn$_invoke$arity$1(parser))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(parser,new cljs.core.Keyword(null,"hide","hide",-596913169)):parser);
if(cljs.core.truth_(new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(parser__$1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parser__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310),(function (){var G__47764 = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(parser__$1);
return (instaparse.combinators_source.unhide_content.cljs$core$IFn$_invoke$arity$1 ? instaparse.combinators_source.unhide_content.cljs$core$IFn$_invoke$arity$1(G__47764) : instaparse.combinators_source.unhide_content.call(null,G__47764));
})());
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"parsers","parsers",-804353827).cljs$core$IFn$_invoke$arity$1(parser__$1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parser__$1,new cljs.core.Keyword(null,"parsers","parsers",-804353827),cljs.core.map.cljs$core$IFn$_invoke$arity$2(instaparse.combinators_source.unhide_content,new cljs.core.Keyword(null,"parsers","parsers",-804353827).cljs$core$IFn$_invoke$arity$1(parser__$1)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(parser__$1),new cljs.core.Keyword(null,"ord","ord",1142548323))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(parser__$1,new cljs.core.Keyword(null,"parser1","parser1",-439601422),(function (){var G__47766 = new cljs.core.Keyword(null,"parser1","parser1",-439601422).cljs$core$IFn$_invoke$arity$1(parser__$1);
return (instaparse.combinators_source.unhide_content.cljs$core$IFn$_invoke$arity$1 ? instaparse.combinators_source.unhide_content.cljs$core$IFn$_invoke$arity$1(G__47766) : instaparse.combinators_source.unhide_content.call(null,G__47766));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"parser2","parser2",1013754688),(function (){var G__47767 = new cljs.core.Keyword(null,"parser2","parser2",1013754688).cljs$core$IFn$_invoke$arity$1(parser__$1);
return (instaparse.combinators_source.unhide_content.cljs$core$IFn$_invoke$arity$1 ? instaparse.combinators_source.unhide_content.cljs$core$IFn$_invoke$arity$1(G__47767) : instaparse.combinators_source.unhide_content.call(null,G__47767));
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4523__auto__ = (function instaparse$combinators_source$unhide_all_content_$_iter__47784(s__47785){
return (new cljs.core.LazySeq(null,(function (){
var s__47785__$1 = s__47785;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__47785__$1);
if(temp__5720__auto__){
var s__47785__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47785__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__47785__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__47787 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__47786 = (0);
while(true){
if((i__47786 < size__4522__auto__)){
var vec__47814 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__47786);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47814,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47814,(1),null);
cljs.core.chunk_append(b__47787,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,instaparse.combinators_source.unhide_content(v)], null));

var G__47921 = (i__47786 + (1));
i__47786 = G__47921;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47787),instaparse$combinators_source$unhide_all_content_$_iter__47784(cljs.core.chunk_rest(s__47785__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47787),null);
}
} else {
var vec__47820 = cljs.core.first(s__47785__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47820,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47820,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,instaparse.combinators_source.unhide_content(v)], null),instaparse$combinators_source$unhide_all_content_$_iter__47784(cljs.core.rest(s__47785__$2)));
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
return (function instaparse$combinators_source$unhide_tags_$_iter__47827(s__47828){
return (new cljs.core.LazySeq(null,((function (reduction,temp__5718__auto__){
return (function (){
var s__47828__$1 = s__47828;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__47828__$1);
if(temp__5720__auto__){
var s__47828__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47828__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__47828__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__47830 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__47829 = (0);
while(true){
if((i__47829 < size__4522__auto__)){
var vec__47841 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__47829);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47841,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47841,(1),null);
cljs.core.chunk_append(b__47830,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v,new cljs.core.Keyword(null,"red","red",-969428204),(reduction.cljs$core$IFn$_invoke$arity$1 ? reduction.cljs$core$IFn$_invoke$arity$1(k) : reduction.call(null,k)))], null));

var G__47928 = (i__47829 + (1));
i__47829 = G__47928;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47830),instaparse$combinators_source$unhide_tags_$_iter__47827(cljs.core.chunk_rest(s__47828__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47830),null);
}
} else {
var vec__47845 = cljs.core.first(s__47828__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47845,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47845,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v,new cljs.core.Keyword(null,"red","red",-969428204),(reduction.cljs$core$IFn$_invoke$arity$1 ? reduction.cljs$core$IFn$_invoke$arity$1(k) : reduction.call(null,k)))], null),instaparse$combinators_source$unhide_tags_$_iter__47827(cljs.core.rest(s__47828__$2)));
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
return (function instaparse$combinators_source$unhide_all_$_iter__47848(s__47849){
return (new cljs.core.LazySeq(null,((function (reduction,temp__5718__auto__){
return (function (){
var s__47849__$1 = s__47849;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__47849__$1);
if(temp__5720__auto__){
var s__47849__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47849__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__47849__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__47851 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__47850 = (0);
while(true){
if((i__47850 < size__4522__auto__)){
var vec__47852 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__47850);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47852,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47852,(1),null);
cljs.core.chunk_append(b__47851,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(instaparse.combinators_source.unhide_content(v),new cljs.core.Keyword(null,"red","red",-969428204),(reduction.cljs$core$IFn$_invoke$arity$1 ? reduction.cljs$core$IFn$_invoke$arity$1(k) : reduction.call(null,k)))], null));

var G__47933 = (i__47850 + (1));
i__47850 = G__47933;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47851),instaparse$combinators_source$unhide_all_$_iter__47848(cljs.core.chunk_rest(s__47849__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47851),null);
}
} else {
var vec__47855 = cljs.core.first(s__47849__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47855,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47855,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(instaparse.combinators_source.unhide_content(v),new cljs.core.Keyword(null,"red","red",-969428204),(reduction.cljs$core$IFn$_invoke$arity$1 ? reduction.cljs$core$IFn$_invoke$arity$1(k) : reduction.call(null,k)))], null),instaparse$combinators_source$unhide_all_$_iter__47848(cljs.core.rest(s__47849__$2)));
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
var G__47860 = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(parser);
var G__47860__$1 = (((G__47860 instanceof cljs.core.Keyword))?G__47860.fqn:null);
switch (G__47860__$1) {
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
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(parser,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parser","parser",-1543495310)], null),instaparse.combinators_source.auto_whitespace_parser,ws_parser);

break;
case "alt":
case "cat":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parser,new cljs.core.Keyword(null,"parsers","parsers",-804353827),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__47860,G__47860__$1){
return (function (p1__47859_SHARP_){
return (instaparse.combinators_source.auto_whitespace_parser.cljs$core$IFn$_invoke$arity$2 ? instaparse.combinators_source.auto_whitespace_parser.cljs$core$IFn$_invoke$arity$2(p1__47859_SHARP_,ws_parser) : instaparse.combinators_source.auto_whitespace_parser.call(null,p1__47859_SHARP_,ws_parser));
});})(G__47860,G__47860__$1))
,new cljs.core.Keyword(null,"parsers","parsers",-804353827).cljs$core$IFn$_invoke$arity$1(parser)));

break;
case "ord":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(parser,new cljs.core.Keyword(null,"parser1","parser1",-439601422),(function (){var G__47861 = new cljs.core.Keyword(null,"parser1","parser1",-439601422).cljs$core$IFn$_invoke$arity$1(parser);
var G__47862 = ws_parser;
return (instaparse.combinators_source.auto_whitespace_parser.cljs$core$IFn$_invoke$arity$2 ? instaparse.combinators_source.auto_whitespace_parser.cljs$core$IFn$_invoke$arity$2(G__47861,G__47862) : instaparse.combinators_source.auto_whitespace_parser.call(null,G__47861,G__47862));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"parser2","parser2",1013754688),(function (){var G__47863 = new cljs.core.Keyword(null,"parser2","parser2",1013754688).cljs$core$IFn$_invoke$arity$1(parser);
var G__47864 = ws_parser;
return (instaparse.combinators_source.auto_whitespace_parser.cljs$core$IFn$_invoke$arity$2 ? instaparse.combinators_source.auto_whitespace_parser.cljs$core$IFn$_invoke$arity$2(G__47863,G__47864) : instaparse.combinators_source.auto_whitespace_parser.call(null,G__47863,G__47864));
})()], 0));

break;
case "string":
case "string-ci":
case "regexp":
if(cljs.core.truth_(new cljs.core.Keyword(null,"red","red",-969428204).cljs$core$IFn$_invoke$arity$1(parser))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ws_parser,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(parser,new cljs.core.Keyword(null,"red","red",-969428204))], 0)),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"red","red",-969428204).cljs$core$IFn$_invoke$arity$1(parser));
} else {
return instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ws_parser,parser], 0));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47860__$1)].join('')));

}
});
instaparse.combinators_source.auto_whitespace = (function instaparse$combinators_source$auto_whitespace(grammar,start,grammar_ws,start_ws){
var ws_parser = instaparse.combinators_source.hide(instaparse.combinators_source.opt(instaparse.combinators_source.nt(start_ws)));
var grammar_ws__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(grammar_ws,start_ws,instaparse.combinators_source.hide_tag((grammar_ws.cljs$core$IFn$_invoke$arity$1 ? grammar_ws.cljs$core$IFn$_invoke$arity$1(start_ws) : grammar_ws.call(null,start_ws))));
var modified_grammar = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4523__auto__ = ((function (ws_parser,grammar_ws__$1){
return (function instaparse$combinators_source$auto_whitespace_$_iter__47866(s__47867){
return (new cljs.core.LazySeq(null,((function (ws_parser,grammar_ws__$1){
return (function (){
var s__47867__$1 = s__47867;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__47867__$1);
if(temp__5720__auto__){
var s__47867__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47867__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__47867__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__47869 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__47868 = (0);
while(true){
if((i__47868 < size__4522__auto__)){
var vec__47873 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__47868);
var nt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47873,(0),null);
var parser = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47873,(1),null);
cljs.core.chunk_append(b__47869,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nt,instaparse.combinators_source.auto_whitespace_parser(parser,ws_parser)], null));

var G__47995 = (i__47868 + (1));
i__47868 = G__47995;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47869),instaparse$combinators_source$auto_whitespace_$_iter__47866(cljs.core.chunk_rest(s__47867__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47869),null);
}
} else {
var vec__47876 = cljs.core.first(s__47867__$2);
var nt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47876,(0),null);
var parser = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47876,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nt,instaparse.combinators_source.auto_whitespace_parser(parser,ws_parser)], null),instaparse$combinators_source$auto_whitespace_$_iter__47866(cljs.core.rest(s__47867__$2)));
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
var final_grammar = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(modified_grammar,start,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2((modified_grammar.cljs$core$IFn$_invoke$arity$1 ? modified_grammar.cljs$core$IFn$_invoke$arity$1(start) : modified_grammar.call(null,start)),new cljs.core.Keyword(null,"red","red",-969428204)),ws_parser], 0)),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"red","red",-969428204).cljs$core$IFn$_invoke$arity$1((modified_grammar.cljs$core$IFn$_invoke$arity$1 ? modified_grammar.cljs$core$IFn$_invoke$arity$1(start) : modified_grammar.call(null,start)))));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([final_grammar,grammar_ws__$1], 0));
});

//# sourceMappingURL=instaparse.combinators_source.js.map
