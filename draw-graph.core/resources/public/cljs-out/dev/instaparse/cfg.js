// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('instaparse.cfg');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('instaparse.combinators_source');
goog.require('instaparse.reduction');
goog.require('instaparse.gll');
goog.require('instaparse.util');
goog.require('clojure.string');
goog.require('cljs.tools.reader');
goog.require('cljs.tools.reader.reader_types');
/**
 * Sets whether all string literal terminals in a built grammar
 *   will be treated as case insensitive.
 * 
 *   `true`: case-insensitive
 *   `false`: case-sensitive
 *   `:default`: case-sensitive for EBNF, case-insensitive for ABNF
 */
instaparse.cfg._STAR_case_insensitive_literals_STAR_ = cljs.core.cst$kw$default;
/**
 * Returns a string combinator that may be case-insensntive, based
 *   on (in priority order):
 * 
 *   1) the value of `*case-insensitive-literals*`, if it has been
 *   overridden to a boolean
 *   2) the supplied `ci-by-default?` parameter
 */
instaparse.cfg.string_PLUS_ = (function instaparse$cfg$string_PLUS_(s,ci_by_default_QMARK_){
var G__22503 = instaparse.cfg._STAR_case_insensitive_literals_STAR_;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,G__22503)){
return instaparse.combinators_source.string_ci(s);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__22503)){
return instaparse.combinators_source.string(s);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$default,G__22503)){
if(cljs.core.truth_(ci_by_default_QMARK_)){
return instaparse.combinators_source.string_ci(s);
} else {
return instaparse.combinators_source.string(s);
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22503)].join('')));

}
}
}
});
/**
 * Adds a comment to a Clojure regex, or no-op in ClojureScript
 */
instaparse.cfg.regex_doc = (function instaparse$cfg$regex_doc(pattern_str,comment){
return cljs.core.re_pattern(pattern_str);
});
instaparse.cfg.single_quoted_string = instaparse.cfg.regex_doc(/'[^'\\]*(?:\\.[^'\\]*)*'/,"Single-quoted string");
instaparse.cfg.single_quoted_regexp = instaparse.cfg.regex_doc(/#'[^'\\]*(?:\\.[^'\\]*)*'/,"Single-quoted regexp");
instaparse.cfg.double_quoted_string = instaparse.cfg.regex_doc(/\"[^\"\\]*(?:\\.[^\"\\]*)*\"/,"Double-quoted string");
instaparse.cfg.double_quoted_regexp = instaparse.cfg.regex_doc(/#\"[^\"\\]*(?:\\.[^\"\\]*)*\"/,"Double-quoted regexp");
instaparse.cfg.inside_comment = /(?:(?!(?:\(\*|\*\)))[\s\S])*/;
instaparse.cfg.ws = instaparse.cfg.regex_doc("[,\\s]*","optional whitespace");
instaparse.cfg.opt_whitespace = instaparse.combinators_source.hide(instaparse.combinators_source.nt(cljs.core.cst$kw$opt_DASH_whitespace));
instaparse.cfg.cfg = instaparse.reduction.apply_standard_reductions.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$hiccup,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$neg,cljs.core.cst$kw$cat,cljs.core.cst$kw$ord,cljs.core.cst$kw$rule_DASH_separator,cljs.core.cst$kw$alt,cljs.core.cst$kw$look,cljs.core.cst$kw$rule,cljs.core.cst$kw$nt,cljs.core.cst$kw$hide_DASH_nt,cljs.core.cst$kw$inside_DASH_comment,cljs.core.cst$kw$star,cljs.core.cst$kw$string,cljs.core.cst$kw$rules,cljs.core.cst$kw$hide,cljs.core.cst$kw$paren,cljs.core.cst$kw$alt_DASH_or_DASH_ord,cljs.core.cst$kw$regexp,cljs.core.cst$kw$factor,cljs.core.cst$kw$comment,cljs.core.cst$kw$plus,cljs.core.cst$kw$epsilon,cljs.core.cst$kw$opt_DASH_whitespace,cljs.core.cst$kw$rules_DASH_or_DASH_parser,cljs.core.cst$kw$opt],[instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.hide(instaparse.combinators_source.string("!")),instaparse.cfg.opt_whitespace,instaparse.combinators_source.nt(cljs.core.cst$kw$factor)], 0)),instaparse.combinators_source.plus(instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.cfg.opt_whitespace,instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.nt(cljs.core.cst$kw$factor),instaparse.combinators_source.nt(cljs.core.cst$kw$look),instaparse.combinators_source.nt(cljs.core.cst$kw$neg)], 0)),instaparse.cfg.opt_whitespace], 0))),instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.nt(cljs.core.cst$kw$cat),instaparse.combinators_source.plus(instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.cfg.opt_whitespace,instaparse.combinators_source.hide(instaparse.combinators_source.string("/")),instaparse.cfg.opt_whitespace,instaparse.combinators_source.nt(cljs.core.cst$kw$cat)], 0)))], 0)),instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.string(":"),instaparse.combinators_source.string(":="),instaparse.combinators_source.string("::="),instaparse.combinators_source.string("=")], 0)),instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.nt(cljs.core.cst$kw$cat),instaparse.combinators_source.star(instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.cfg.opt_whitespace,instaparse.combinators_source.hide(instaparse.combinators_source.string("|")),instaparse.cfg.opt_whitespace,instaparse.combinators_source.nt(cljs.core.cst$kw$cat)], 0)))], 0)),instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.hide(instaparse.combinators_source.string("&")),instaparse.cfg.opt_whitespace,instaparse.combinators_source.nt(cljs.core.cst$kw$factor)], 0)),instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.nt(cljs.core.cst$kw$nt),instaparse.combinators_source.nt(cljs.core.cst$kw$hide_DASH_nt)], 0)),instaparse.cfg.opt_whitespace,instaparse.combinators_source.hide(instaparse.combinators_source.nt(cljs.core.cst$kw$rule_DASH_separator)),instaparse.cfg.opt_whitespace,instaparse.combinators_source.nt(cljs.core.cst$kw$alt_DASH_or_DASH_ord),instaparse.combinators_source.hide(instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.nt(cljs.core.cst$kw$opt_DASH_whitespace),instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.nt(cljs.core.cst$kw$opt_DASH_whitespace),instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.string(";"),instaparse.combinators_source.string(".")], 0)),instaparse.combinators_source.nt(cljs.core.cst$kw$opt_DASH_whitespace)], 0))], 0)))], 0)),instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.neg(instaparse.combinators_source.nt(cljs.core.cst$kw$epsilon)),instaparse.combinators_source.regexp(instaparse.cfg.regex_doc("[^, \\r\\t\\n<>(){}\\[\\]+*?:=|'\"#&!;./]+","Non-terminal"))], 0)),instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.hide(instaparse.combinators_source.string("<")),instaparse.cfg.opt_whitespace,instaparse.combinators_source.nt(cljs.core.cst$kw$nt),instaparse.cfg.opt_whitespace,instaparse.combinators_source.hide(instaparse.combinators_source.string(">"))], 0)),instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.regexp(instaparse.cfg.inside_comment),instaparse.combinators_source.star(instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.nt(cljs.core.cst$kw$comment),instaparse.combinators_source.regexp(instaparse.cfg.inside_comment)], 0)))], 0)),instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.hide(instaparse.combinators_source.string("{")),instaparse.cfg.opt_whitespace,instaparse.combinators_source.nt(cljs.core.cst$kw$alt_DASH_or_DASH_ord),instaparse.cfg.opt_whitespace,instaparse.combinators_source.hide(instaparse.combinators_source.string("}"))], 0)),instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.nt(cljs.core.cst$kw$factor),instaparse.cfg.opt_whitespace,instaparse.combinators_source.hide(instaparse.combinators_source.string("*"))], 0))], 0)),instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.regexp(instaparse.cfg.single_quoted_string),instaparse.combinators_source.regexp(instaparse.cfg.double_quoted_string)], 0)),instaparse.combinators_source.hide_tag(instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.cfg.opt_whitespace,instaparse.combinators_source.plus(instaparse.combinators_source.nt(cljs.core.cst$kw$rule))], 0))),instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.hide(instaparse.combinators_source.string("<")),instaparse.cfg.opt_whitespace,instaparse.combinators_source.nt(cljs.core.cst$kw$alt_DASH_or_DASH_ord),instaparse.cfg.opt_whitespace,instaparse.combinators_source.hide(instaparse.combinators_source.string(">"))], 0)),instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.hide(instaparse.combinators_source.string("(")),instaparse.cfg.opt_whitespace,instaparse.combinators_source.nt(cljs.core.cst$kw$alt_DASH_or_DASH_ord),instaparse.cfg.opt_whitespace,instaparse.combinators_source.hide(instaparse.combinators_source.string(")"))], 0)),instaparse.combinators_source.hide_tag(instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.nt(cljs.core.cst$kw$alt),instaparse.combinators_source.nt(cljs.core.cst$kw$ord)], 0))),instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.regexp(instaparse.cfg.single_quoted_regexp),instaparse.combinators_source.regexp(instaparse.cfg.double_quoted_regexp)], 0)),instaparse.combinators_source.hide_tag(instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.nt(cljs.core.cst$kw$nt),instaparse.combinators_source.nt(cljs.core.cst$kw$string),instaparse.combinators_source.nt(cljs.core.cst$kw$regexp),instaparse.combinators_source.nt(cljs.core.cst$kw$opt),instaparse.combinators_source.nt(cljs.core.cst$kw$star),instaparse.combinators_source.nt(cljs.core.cst$kw$plus),instaparse.combinators_source.nt(cljs.core.cst$kw$paren),instaparse.combinators_source.nt(cljs.core.cst$kw$hide),instaparse.combinators_source.nt(cljs.core.cst$kw$epsilon)], 0))),instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.string("(*"),instaparse.combinators_source.nt(cljs.core.cst$kw$inside_DASH_comment),instaparse.combinators_source.string("*)")], 0)),instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.nt(cljs.core.cst$kw$factor),instaparse.cfg.opt_whitespace,instaparse.combinators_source.hide(instaparse.combinators_source.string("+"))], 0)),instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.string("Epsilon"),instaparse.combinators_source.string("epsilon"),instaparse.combinators_source.string("EPSILON"),instaparse.combinators_source.string("eps"),instaparse.combinators_source.string("\u03B5")], 0)),instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.regexp(instaparse.cfg.ws),instaparse.combinators_source.star(instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.nt(cljs.core.cst$kw$comment),instaparse.combinators_source.regexp(instaparse.cfg.ws)], 0)))], 0)),instaparse.combinators_source.hide_tag(instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.nt(cljs.core.cst$kw$rules),instaparse.combinators_source.nt(cljs.core.cst$kw$alt_DASH_or_DASH_ord)], 0))),instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.hide(instaparse.combinators_source.string("[")),instaparse.cfg.opt_whitespace,instaparse.combinators_source.nt(cljs.core.cst$kw$alt_DASH_or_DASH_ord),instaparse.cfg.opt_whitespace,instaparse.combinators_source.hide(instaparse.combinators_source.string("]"))], 0)),instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.nt(cljs.core.cst$kw$factor),instaparse.cfg.opt_whitespace,instaparse.combinators_source.hide(instaparse.combinators_source.string("?"))], 0))], 0))]));
instaparse.cfg.tag = cljs.core.first;
instaparse.cfg.contents = cljs.core.next;
instaparse.cfg.content = cljs.core.fnext;
/**
 * Converts escaped single-quotes to unescaped, and unescaped double-quotes to escaped
 */
instaparse.cfg.escape = (function instaparse$cfg$escape(s){
var sq = cljs.core.seq(s);
var v = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__5718__auto__ = cljs.core.first(sq);
if(cljs.core.truth_(temp__5718__auto__)){
var c = temp__5718__auto__;
var G__22505 = c;
switch (G__22505) {
case "\\":
var temp__5718__auto____$1 = cljs.core.second(sq);
if(cljs.core.truth_(temp__5718__auto____$1)){
var c2 = temp__5718__auto____$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c2,"'")){
var G__22507 = cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),sq);
var G__22508 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,c2);
sq = G__22507;
v = G__22508;
continue;
} else {
var G__22509 = cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),sq);
var G__22510 = cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(v,c,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([c2], 0));
sq = G__22509;
v = G__22510;
continue;
}
} else {
return instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Encountered backslash character at end of string: ",s], 0));
}

break;
case "\"":
var G__22511 = cljs.core.next(sq);
var G__22512 = cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(v,"\\",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\""], 0));
sq = G__22511;
v = G__22512;
continue;

break;
default:
var G__22513 = cljs.core.next(sq);
var G__22514 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,c);
sq = G__22513;
v = G__22514;
continue;

}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,v);
}
break;
}
});
instaparse.cfg.safe_read_string = (function instaparse$cfg$safe_read_string(s){
return cljs.tools.reader.read_string_STAR_(cljs.tools.reader.reader_types.string_push_back_reader.cljs$core$IFn$_invoke$arity$1(s),null,null,null);
});
/**
 * Converts single quoted string to double-quoted
 */
instaparse.cfg.process_string = (function instaparse$cfg$process_string(s){
var stripped = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(1),(cljs.core.count(s) - (1)));
var remove_escaped_single_quotes = instaparse.cfg.escape(stripped);
var final_string = instaparse.cfg.safe_read_string([cljs.core.str.cljs$core$IFn$_invoke$arity$1(remove_escaped_single_quotes),"\""].join(''));
return final_string;
});
/**
 * Converts single quoted regexp to double-quoted
 */
instaparse.cfg.process_regexp = (function instaparse$cfg$process_regexp(s){
var stripped = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(2),(cljs.core.count(s) - (1)));
var remove_escaped_single_quotes = instaparse.cfg.escape(stripped);
var final_string = cljs.core.re_pattern(remove_escaped_single_quotes);
return final_string;
});
/**
 * Convert one parsed rule from the grammar into combinators
 */
instaparse.cfg.build_rule = (function instaparse$cfg$build_rule(tree){
while(true){
var G__22515 = (instaparse.cfg.tag.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.tag.cljs$core$IFn$_invoke$arity$1(tree) : instaparse.cfg.tag.call(null,tree));
var G__22515__$1 = (((G__22515 instanceof cljs.core.Keyword))?G__22515.fqn:null);
switch (G__22515__$1) {
case "rule":
var vec__22516 = (instaparse.cfg.contents.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.contents.cljs$core$IFn$_invoke$arity$1(tree) : instaparse.cfg.contents.call(null,tree));
var nt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22516,(0),null);
var alt_or_ord = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22516,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((instaparse.cfg.tag.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.tag.cljs$core$IFn$_invoke$arity$1(nt) : instaparse.cfg.tag.call(null,nt)),cljs.core.cst$kw$hide_DASH_nt)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((function (){var G__22519 = (instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1(nt) : instaparse.cfg.content.call(null,nt));
return (instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1(G__22519) : instaparse.cfg.content.call(null,G__22519));
})()),instaparse.combinators_source.hide_tag((instaparse.cfg.build_rule.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.build_rule.cljs$core$IFn$_invoke$arity$1(alt_or_ord) : instaparse.cfg.build_rule.call(null,alt_or_ord)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1(nt) : instaparse.cfg.content.call(null,nt))),(instaparse.cfg.build_rule.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.build_rule.cljs$core$IFn$_invoke$arity$1(alt_or_ord) : instaparse.cfg.build_rule.call(null,alt_or_ord))], null);
}

break;
case "nt":
return instaparse.combinators_source.nt(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1(tree) : instaparse.cfg.content.call(null,tree))));

break;
case "alt":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(instaparse.combinators_source.alt,cljs.core.map.cljs$core$IFn$_invoke$arity$2(instaparse.cfg.build_rule,(instaparse.cfg.contents.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.contents.cljs$core$IFn$_invoke$arity$1(tree) : instaparse.cfg.contents.call(null,tree))));

break;
case "ord":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(instaparse.combinators_source.ord,cljs.core.map.cljs$core$IFn$_invoke$arity$2(instaparse.cfg.build_rule,(instaparse.cfg.contents.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.contents.cljs$core$IFn$_invoke$arity$1(tree) : instaparse.cfg.contents.call(null,tree))));

break;
case "paren":
var G__22527 = (instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1(tree) : instaparse.cfg.content.call(null,tree));
tree = G__22527;
continue;

break;
case "hide":
return instaparse.combinators_source.hide((function (){var G__22520 = (instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1(tree) : instaparse.cfg.content.call(null,tree));
return (instaparse.cfg.build_rule.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.build_rule.cljs$core$IFn$_invoke$arity$1(G__22520) : instaparse.cfg.build_rule.call(null,G__22520));
})());

break;
case "cat":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(instaparse.combinators_source.cat,cljs.core.map.cljs$core$IFn$_invoke$arity$2(instaparse.cfg.build_rule,(instaparse.cfg.contents.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.contents.cljs$core$IFn$_invoke$arity$1(tree) : instaparse.cfg.contents.call(null,tree))));

break;
case "string":
return instaparse.cfg.string_PLUS_(instaparse.cfg.process_string((instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1(tree) : instaparse.cfg.content.call(null,tree))),false);

break;
case "regexp":
return instaparse.combinators_source.regexp(instaparse.cfg.process_regexp((instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1(tree) : instaparse.cfg.content.call(null,tree))));

break;
case "opt":
return instaparse.combinators_source.opt((function (){var G__22521 = (instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1(tree) : instaparse.cfg.content.call(null,tree));
return (instaparse.cfg.build_rule.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.build_rule.cljs$core$IFn$_invoke$arity$1(G__22521) : instaparse.cfg.build_rule.call(null,G__22521));
})());

break;
case "star":
return instaparse.combinators_source.star((function (){var G__22522 = (instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1(tree) : instaparse.cfg.content.call(null,tree));
return (instaparse.cfg.build_rule.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.build_rule.cljs$core$IFn$_invoke$arity$1(G__22522) : instaparse.cfg.build_rule.call(null,G__22522));
})());

break;
case "plus":
return instaparse.combinators_source.plus((function (){var G__22523 = (instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1(tree) : instaparse.cfg.content.call(null,tree));
return (instaparse.cfg.build_rule.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.build_rule.cljs$core$IFn$_invoke$arity$1(G__22523) : instaparse.cfg.build_rule.call(null,G__22523));
})());

break;
case "look":
return instaparse.combinators_source.look((function (){var G__22524 = (instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1(tree) : instaparse.cfg.content.call(null,tree));
return (instaparse.cfg.build_rule.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.build_rule.cljs$core$IFn$_invoke$arity$1(G__22524) : instaparse.cfg.build_rule.call(null,G__22524));
})());

break;
case "neg":
return instaparse.combinators_source.neg((function (){var G__22525 = (instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.content.cljs$core$IFn$_invoke$arity$1(tree) : instaparse.cfg.content.call(null,tree));
return (instaparse.cfg.build_rule.cljs$core$IFn$_invoke$arity$1 ? instaparse.cfg.build_rule.cljs$core$IFn$_invoke$arity$1(G__22525) : instaparse.cfg.build_rule.call(null,G__22525));
})());

break;
case "epsilon":
return instaparse.combinators_source.Epsilon;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22515__$1)].join('')));

}
break;
}
});
/**
 * Returns a sequence of all non-terminals in a parser built from combinators.
 */
instaparse.cfg.seq_nt = (function instaparse$cfg$seq_nt(parser){
while(true){
var G__22528 = cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(parser);
var G__22528__$1 = (((G__22528 instanceof cljs.core.Keyword))?G__22528.fqn:null);
switch (G__22528__$1) {
case "nt":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$keyword.cljs$core$IFn$_invoke$arity$1(parser)], null);

break;
case "string":
case "string-ci":
case "char":
case "regexp":
case "epsilon":
return cljs.core.PersistentVector.EMPTY;

break;
case "opt":
case "plus":
case "star":
case "look":
case "neg":
case "rep":
var G__22530 = cljs.core.cst$kw$parser.cljs$core$IFn$_invoke$arity$1(parser);
parser = G__22530;
continue;

break;
case "alt":
case "cat":
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(instaparse.cfg.seq_nt,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$parsers.cljs$core$IFn$_invoke$arity$1(parser)], 0));

break;
case "ord":
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(instaparse.cfg.seq_nt,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$parser1.cljs$core$IFn$_invoke$arity$1(parser),cljs.core.cst$kw$parser2.cljs$core$IFn$_invoke$arity$1(parser)], null)], 0));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22528__$1)].join('')));

}
break;
}
});
/**
 * Throw error if grammar uses any invalid non-terminals in its productions
 */
instaparse.cfg.check_grammar = (function instaparse$cfg$check_grammar(grammar_map){
var valid_nts_22535 = cljs.core.set(cljs.core.keys(grammar_map));
var seq__22531_22536 = cljs.core.seq(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(instaparse.cfg.seq_nt,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.vals(grammar_map)], 0))));
var chunk__22532_22537 = null;
var count__22533_22538 = (0);
var i__22534_22539 = (0);
while(true){
if((i__22534_22539 < count__22533_22538)){
var nt_22540 = chunk__22532_22537.cljs$core$IIndexed$_nth$arity$2(null,i__22534_22539);
if(cljs.core.truth_((valid_nts_22535.cljs$core$IFn$_invoke$arity$1 ? valid_nts_22535.cljs$core$IFn$_invoke$arity$1(nt_22540) : valid_nts_22535.call(null,nt_22540)))){
} else {
instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(nt_22540),(1))," occurs on the right-hand side of your grammar, but not on the left"], 0));
}


var G__22541 = seq__22531_22536;
var G__22542 = chunk__22532_22537;
var G__22543 = count__22533_22538;
var G__22544 = (i__22534_22539 + (1));
seq__22531_22536 = G__22541;
chunk__22532_22537 = G__22542;
count__22533_22538 = G__22543;
i__22534_22539 = G__22544;
continue;
} else {
var temp__5720__auto___22545 = cljs.core.seq(seq__22531_22536);
if(temp__5720__auto___22545){
var seq__22531_22546__$1 = temp__5720__auto___22545;
if(cljs.core.chunked_seq_QMARK_(seq__22531_22546__$1)){
var c__4550__auto___22547 = cljs.core.chunk_first(seq__22531_22546__$1);
var G__22548 = cljs.core.chunk_rest(seq__22531_22546__$1);
var G__22549 = c__4550__auto___22547;
var G__22550 = cljs.core.count(c__4550__auto___22547);
var G__22551 = (0);
seq__22531_22536 = G__22548;
chunk__22532_22537 = G__22549;
count__22533_22538 = G__22550;
i__22534_22539 = G__22551;
continue;
} else {
var nt_22552 = cljs.core.first(seq__22531_22546__$1);
if(cljs.core.truth_((valid_nts_22535.cljs$core$IFn$_invoke$arity$1 ? valid_nts_22535.cljs$core$IFn$_invoke$arity$1(nt_22552) : valid_nts_22535.call(null,nt_22552)))){
} else {
instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(nt_22552),(1))," occurs on the right-hand side of your grammar, but not on the left"], 0));
}


var G__22553 = cljs.core.next(seq__22531_22546__$1);
var G__22554 = null;
var G__22555 = (0);
var G__22556 = (0);
seq__22531_22536 = G__22553;
chunk__22532_22537 = G__22554;
count__22533_22538 = G__22555;
i__22534_22539 = G__22556;
continue;
}
} else {
}
}
break;
}

return grammar_map;
});
instaparse.cfg.build_parser = (function instaparse$cfg$build_parser(spec,output_format){
var rules = instaparse.gll.parse(instaparse.cfg.cfg,cljs.core.cst$kw$rules,spec,false);
if((rules instanceof instaparse.gll.Failure)){
return instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error parsing grammar specification:\n",(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__22557_22561 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__22558_22562 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__22559_22563 = true;
var _STAR_print_fn_STAR__temp_val__22560_22564 = ((function (_STAR_print_newline_STAR__orig_val__22557_22561,_STAR_print_fn_STAR__orig_val__22558_22562,_STAR_print_newline_STAR__temp_val__22559_22563,sb__4661__auto__,rules){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__22557_22561,_STAR_print_fn_STAR__orig_val__22558_22562,_STAR_print_newline_STAR__temp_val__22559_22563,sb__4661__auto__,rules))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__22559_22563;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__22560_22564;

try{cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rules], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__22558_22562;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__22557_22561;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})()], 0));
} else {
var productions = cljs.core.map.cljs$core$IFn$_invoke$arity$2(instaparse.cfg.build_rule,rules);
var start_production = cljs.core.first(cljs.core.first(productions));
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$grammar,instaparse.cfg.check_grammar(instaparse.reduction.apply_standard_reductions.cljs$core$IFn$_invoke$arity$2(output_format,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,productions))),cljs.core.cst$kw$start_DASH_production,start_production,cljs.core.cst$kw$output_DASH_format,output_format], null);
}
});
instaparse.cfg.build_parser_from_combinators = (function instaparse$cfg$build_parser_from_combinators(grammar_map,output_format,start_production){
if((start_production == null)){
return instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["When you build a parser from a map of parser combinators, you must provide a start production using the :start keyword argument."], 0));
} else {
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$grammar,instaparse.cfg.check_grammar(instaparse.reduction.apply_standard_reductions.cljs$core$IFn$_invoke$arity$2(output_format,grammar_map)),cljs.core.cst$kw$start_DASH_production,start_production,cljs.core.cst$kw$output_DASH_format,output_format], null);
}
});
/**
 * Takes an EBNF grammar specification string and returns the combinator version.
 * If you give it the right-hand side of a rule, it will return the combinator equivalent.
 * If you give it a series of rules, it will give you back a grammar map.   
 * Useful for combining with other combinators.
 */
instaparse.cfg.ebnf = (function instaparse$cfg$ebnf(var_args){
var args__4736__auto__ = [];
var len__4730__auto___22576 = arguments.length;
var i__4731__auto___22577 = (0);
while(true){
if((i__4731__auto___22577 < len__4730__auto___22576)){
args__4736__auto__.push((arguments[i__4731__auto___22577]));

var G__22578 = (i__4731__auto___22577 + (1));
i__4731__auto___22577 = G__22578;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return instaparse.cfg.ebnf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

instaparse.cfg.ebnf.cljs$core$IFn$_invoke$arity$variadic = (function (spec,p__22567){
var map__22568 = p__22567;
var map__22568__$1 = (((((!((map__22568 == null))))?(((((map__22568.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22568.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22568):map__22568);
var opts = map__22568__$1;
var _STAR_case_insensitive_literals_STAR__orig_val__22570 = instaparse.cfg._STAR_case_insensitive_literals_STAR_;
var _STAR_case_insensitive_literals_STAR__temp_val__22571 = cljs.core.cst$kw$string_DASH_ci.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.cst$kw$default);
instaparse.cfg._STAR_case_insensitive_literals_STAR_ = _STAR_case_insensitive_literals_STAR__temp_val__22571;

try{var rules = instaparse.gll.parse(instaparse.cfg.cfg,cljs.core.cst$kw$rules_DASH_or_DASH_parser,spec,false);
if((rules instanceof instaparse.gll.Failure)){
return instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error parsing grammar specification:\n",(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__22572_22579 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__22573_22580 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__22574_22581 = true;
var _STAR_print_fn_STAR__temp_val__22575_22582 = ((function (_STAR_print_newline_STAR__orig_val__22572_22579,_STAR_print_fn_STAR__orig_val__22573_22580,_STAR_print_newline_STAR__temp_val__22574_22581,sb__4661__auto__,rules,_STAR_case_insensitive_literals_STAR__orig_val__22570,_STAR_case_insensitive_literals_STAR__temp_val__22571,map__22568,map__22568__$1,opts){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__22572_22579,_STAR_print_fn_STAR__orig_val__22573_22580,_STAR_print_newline_STAR__temp_val__22574_22581,sb__4661__auto__,rules,_STAR_case_insensitive_literals_STAR__orig_val__22570,_STAR_case_insensitive_literals_STAR__temp_val__22571,map__22568,map__22568__$1,opts))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__22574_22581;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__22575_22582;

try{cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rules], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__22573_22580;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__22572_22579;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})()], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$rule,cljs.core.ffirst(rules))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(instaparse.cfg.build_rule,rules));
} else {
return instaparse.cfg.build_rule(cljs.core.first(rules));

}
}
}finally {instaparse.cfg._STAR_case_insensitive_literals_STAR_ = _STAR_case_insensitive_literals_STAR__orig_val__22570;
}});

instaparse.cfg.ebnf.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
instaparse.cfg.ebnf.cljs$lang$applyTo = (function (seq22565){
var G__22566 = cljs.core.first(seq22565);
var seq22565__$1 = cljs.core.next(seq22565);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22566,seq22565__$1);
});

