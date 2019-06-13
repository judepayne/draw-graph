// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('instaparse.abnf');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('instaparse.transform');
goog.require('instaparse.cfg');
goog.require('instaparse.gll');
goog.require('instaparse.reduction');
goog.require('instaparse.util');
goog.require('instaparse.combinators_source');
goog.require('goog.string.format');
goog.require('clojure.walk');
/**
 * This is normally set to false, in which case the non-terminals
 * are treated as case-sensitive, which is NOT the norm
 * for ABNF grammars. If you really want case-insensitivity,
 * bind this to true, in which case all non-terminals
 * will be converted to upper-case internally (which
 * you'll have to keep in mind when transforming).
 */
instaparse.abnf._STAR_case_insensitive_STAR_ = false;
instaparse.abnf.abnf_core = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$CRLF,cljs.core.cst$kw$HTAB,cljs.core.cst$kw$LWSP,cljs.core.cst$kw$LF,cljs.core.cst$kw$VCHAR,cljs.core.cst$kw$DIGIT,cljs.core.cst$kw$SP,cljs.core.cst$kw$HEXDIG,cljs.core.cst$kw$CTL,cljs.core.cst$kw$DQUOTE,cljs.core.cst$kw$WSP,cljs.core.cst$kw$CR,cljs.core.cst$kw$OCTET,cljs.core.cst$kw$ALPHA,cljs.core.cst$kw$CHAR,cljs.core.cst$kw$BIT],[instaparse.combinators_source.string("\r\n"),instaparse.combinators_source.string("\t"),instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.string(" "),instaparse.combinators_source.string("\t")], 0)),instaparse.combinators_source.star(instaparse.combinators_source.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.string("\r\n"),instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.string(" "),instaparse.combinators_source.string("\t")], 0))], 0)))], 0)),instaparse.combinators_source.string("\n"),instaparse.combinators_source.regexp("[\\u0021-\\u007E]"),instaparse.combinators_source.regexp("[0-9]"),instaparse.combinators_source.string(" "),instaparse.combinators_source.regexp("[0-9a-fA-F]"),instaparse.combinators_source.regexp("[\\u0000-\\u001F|\\u007F]"),instaparse.combinators_source.string("\""),instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.string(" "),instaparse.combinators_source.string("\t")], 0)),instaparse.combinators_source.string("\r"),instaparse.combinators_source.regexp("[\\u0000-\\u00FF]"),instaparse.combinators_source.regexp("[a-zA-Z]"),instaparse.combinators_source.regexp("[\\u0001-\\u007F]"),instaparse.combinators_source.regexp("[01]")]);
instaparse.abnf.abnf_grammar_common = "\n<rulelist> = <opt-whitespace> (rule | hide-tag-rule)+;\nrule = rulename-left <defined-as> alternation <opt-whitespace>;\nhide-tag-rule = hide-tag <defined-as> alternation <opt-whitespace>;\nrulename-left = rulename;\nrulename-right = rulename;\n<hide-tag> = <'<' opt-whitespace> rulename-left <opt-whitespace '>'>;\ndefined-as = <opt-whitespace> ('=' | '=/') <opt-whitespace>;\nalternation = concatenation (<opt-whitespace '/' opt-whitespace> concatenation)*;\nconcatenation = repetition (<whitespace> repetition)*;\nrepetition = [repeat] <opt-whitespace> element;\nrepeat = NUM | (NUM? '*' NUM?);\n<element> = rulename-right | group | hide | option | char-val | num-val\n          | look | neg | regexp;\nlook = <'&' opt-whitespace> element;\nneg = <'!' opt-whitespace> element;\n<group> = <'(' opt-whitespace> alternation <opt-whitespace ')'>;\noption = <'[' opt-whitespace> alternation <opt-whitespace ']'>;\nhide = <'<' opt-whitespace> alternation <opt-whitespace '>'>;\nchar-val = <'\\u0022'> #'[\\u0020-\\u0021\\u0023-\\u007E]'* <'\\u0022'> (* double-quoted strings *)\n         | <'\\u0027'> #'[\\u0020-\\u0026(-~]'* <'\\u0027'>;  (* single-quoted strings *)\n<num-val> = <'%'> (bin-val | dec-val | hex-val);\nbin-val = <'b'> bin-char\n          [ (<'.'> bin-char)+ | ('-' bin-char) ];\nbin-char = ('0' | '1')+;\ndec-val = <'d'> dec-char\n          [ (<'.'> dec-char)+ | ('-' dec-char) ];\ndec-char = DIGIT+;\nhex-val = <'x'> hex-char\n          [ (<'.'> hex-char)+ | ('-' hex-char) ];\nhex-char = HEXDIG+;\nNUM = DIGIT+;\n<DIGIT> = #'[0-9]';\n<HEXDIG> = #'[0-9a-fA-F]';\n\n\n(* extra entrypoint to be used by the abnf combinator *)\n<rules-or-parser> = rulelist | alternation;\n  ";
instaparse.abnf.abnf_grammar_clj_only = "\n<rulename> = #'[a-zA-Z][-a-zA-Z0-9]*(?x) #identifier';\nopt-whitespace = #'\\s*(?:;.*?(?:\\u000D?\\u000A\\s*|$))*(?x) # optional whitespace or comments';\nwhitespace = #'\\s+(?:;.*?\\u000D?\\u000A\\s*)*(?x) # whitespace or comments';\nregexp = #\"#'[^'\\\\]*(?:\\\\.[^'\\\\]*)*'(?x) #Single-quoted regexp\"\n       | #\"#\\\"[^\\\"\\\\]*(?:\\\\.[^\\\"\\\\]*)*\\\"(?x) #Double-quoted regexp\"\n";
instaparse.abnf.abnf_grammar_cljs_only = "\n<rulename> = #'[a-zA-Z][-a-zA-Z0-9]*';\nopt-whitespace = #'\\s*(?:;.*?(?:\\u000D?\\u000A\\s*|$))*';\nwhitespace = #'\\s+(?:;.*?\\u000D?\\u000A\\s*)*';\nregexp = #\"#'[^'\\\\]*(?:\\\\.[^'\\\\]*)*'\"\n       | #\"#\\\"[^\\\"\\\\]*(?:\\\\.[^\\\"\\\\]*)*\\\"\"\n";
instaparse.abnf.abnf_parser = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$neg,cljs.core.cst$kw$group,cljs.core.cst$kw$hide_DASH_tag,cljs.core.cst$kw$whitespace,cljs.core.cst$kw$element,cljs.core.cst$kw$hide_DASH_tag_DASH_rule,cljs.core.cst$kw$look,cljs.core.cst$kw$bin_DASH_char,cljs.core.cst$kw$rule,cljs.core.cst$kw$rulename_DASH_right,cljs.core.cst$kw$DIGIT,cljs.core.cst$kw$NUM,cljs.core.cst$kw$char_DASH_val,cljs.core.cst$kw$num_DASH_val,cljs.core.cst$kw$hide,cljs.core.cst$kw$defined_DASH_as,cljs.core.cst$kw$HEXDIG,cljs.core.cst$kw$option,cljs.core.cst$kw$hex_DASH_char,cljs.core.cst$kw$rulename,cljs.core.cst$kw$bin_DASH_val,cljs.core.cst$kw$dec_DASH_val,cljs.core.cst$kw$concatenation,cljs.core.cst$kw$alternation,cljs.core.cst$kw$regexp,cljs.core.cst$kw$repetition,cljs.core.cst$kw$rulename_DASH_left,cljs.core.cst$kw$rulelist,cljs.core.cst$kw$opt_DASH_whitespace,cljs.core.cst$kw$repeat,cljs.core.cst$kw$hex_DASH_val,cljs.core.cst$kw$dec_DASH_char,cljs.core.cst$kw$rules_DASH_or_DASH_parser],[new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$cat,cljs.core.cst$kw$parsers,(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$cat,cljs.core.cst$kw$parsers,(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$string,cljs.core.cst$kw$string,"!"], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$opt_DASH_whitespace], null),null,(1),null)),(2),null)),cljs.core.cst$kw$hide,true], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$element], null),null,(1),null)),(2),null)),cljs.core.cst$kw$red,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reduction_DASH_type,cljs.core.cst$kw$hiccup,cljs.core.cst$kw$key,cljs.core.cst$kw$neg], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$cat,cljs.core.cst$kw$parsers,(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$cat,cljs.core.cst$kw$parsers,(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$string,cljs.core.cst$kw$string,"("], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$opt_DASH_whitespace], null),null,(1),null)),(2),null)),cljs.core.cst$kw$hide,true], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$alternation], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$cat,cljs.core.cst$kw$parsers,(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$opt_DASH_whitespace], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$string,cljs.core.cst$kw$string,")"], null),null,(1),null)),(2),null)),cljs.core.cst$kw$hide,true], null),null,(1),null)),(2),null)),(3),null)),cljs.core.cst$kw$red,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$reduction_DASH_type,cljs.core.cst$kw$raw], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$cat,cljs.core.cst$kw$parsers,(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$cat,cljs.core.cst$kw$parsers,(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$string,cljs.core.cst$kw$string,"<"], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$opt_DASH_whitespace], null),null,(1),null)),(2),null)),cljs.core.cst$kw$hide,true], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$rulename_DASH_left], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$cat,cljs.core.cst$kw$parsers,(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$opt_DASH_whitespace], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$string,cljs.core.cst$kw$string,">"], null),null,(1),null)),(2),null)),cljs.core.cst$kw$hide,true], null),null,(1),null)),(2),null)),(3),null)),cljs.core.cst$kw$red,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$reduction_DASH_type,cljs.core.cst$kw$raw], null)], null),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.regexp("\\s+(?:;.*?\\u000D?\\u000A\\s*)*"),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$red,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reduction_DASH_type,cljs.core.cst$kw$hiccup,cljs.core.cst$kw$key,cljs.core.cst$kw$whitespace], null)], null)], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$alt,cljs.core.cst$kw$parsers,(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$rulename_DASH_right], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$group], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$hide], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$option], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$char_DASH_val], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$num_DASH_val], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$look], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$neg], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$regexp], null),null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null)),(6),null)),(7),null)),(8),null)),(9),null)),cljs.core.cst$kw$red,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$reduction_DASH_type,cljs.core.cst$kw$raw], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$cat,cljs.core.cst$kw$parsers,(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$hide_DASH_tag], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$defined_DASH_as,cljs.core.cst$kw$hide,true], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$alternation], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$opt_DASH_whitespace,cljs.core.cst$kw$hide,true], null),null,(1),null)),(2),null)),(3),null)),(4),null)),cljs.core.cst$kw$red,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reduction_DASH_type,cljs.core.cst$kw$hiccup,cljs.core.cst$kw$key,cljs.core.cst$kw$hide_DASH_tag_DASH_rule], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$cat,cljs.core.cst$kw$parsers,(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$cat,cljs.core.cst$kw$parsers,(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$string,cljs.core.cst$kw$string,"&"], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$opt_DASH_whitespace], null),null,(1),null)),(2),null)),cljs.core.cst$kw$hide,true], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$element], null),null,(1),null)),(2),null)),cljs.core.cst$kw$red,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reduction_DASH_type,cljs.core.cst$kw$hiccup,cljs.core.cst$kw$key,cljs.core.cst$kw$look], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$plus,cljs.core.cst$kw$parser,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$alt,cljs.core.cst$kw$parsers,(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$string,cljs.core.cst$kw$string,"0"], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$string,cljs.core.cst$kw$string,"1"], null),null,(1),null)),(2),null))], null),cljs.core.cst$kw$red,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reduction_DASH_type,cljs.core.cst$kw$hiccup,cljs.core.cst$kw$key,cljs.core.cst$kw$bin_DASH_char], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$cat,cljs.core.cst$kw$parsers,(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$rulename_DASH_left], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$defined_DASH_as,cljs.core.cst$kw$hide,true], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$alternation], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$opt_DASH_whitespace,cljs.core.cst$kw$hide,true], null),null,(1),null)),(2),null)),(3),null)),(4),null)),cljs.core.cst$kw$red,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reduction_DASH_type,cljs.core.cst$kw$hiccup,cljs.core.cst$kw$key,cljs.core.cst$kw$rule], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$rulename,cljs.core.cst$kw$red,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reduction_DASH_type,cljs.core.cst$kw$hiccup,cljs.core.cst$kw$key,cljs.core.cst$kw$rulename_DASH_right], null)], null),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.regexp("[0-9]"),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$red,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$reduction_DASH_type,cljs.core.cst$kw$raw], null)], null)], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$plus,cljs.core.cst$kw$parser,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$DIGIT], null),cljs.core.cst$kw$red,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reduction_DASH_type,cljs.core.cst$kw$hiccup,cljs.core.cst$kw$key,cljs.core.cst$kw$NUM], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$alt,cljs.core.cst$kw$parsers,(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$cat,cljs.core.cst$kw$parsers,(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$string,cljs.core.cst$kw$string,"\"",cljs.core.cst$kw$hide,true], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$star,cljs.core.cst$kw$parser,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.regexp("[\\u0020-\\u0021\\u0023-\\u007E]"),cljs.core.PersistentArrayMap.EMPTY], 0))], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$string,cljs.core.cst$kw$string,"\"",cljs.core.cst$kw$hide,true], null),null,(1),null)),(2),null)),(3),null))], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$cat,cljs.core.cst$kw$parsers,(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$string,cljs.core.cst$kw$string,"'",cljs.core.cst$kw$hide,true], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$star,cljs.core.cst$kw$parser,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.regexp("[\\u0020-\\u0026(-~]"),cljs.core.PersistentArrayMap.EMPTY], 0))], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$string,cljs.core.cst$kw$string,"'",cljs.core.cst$kw$hide,true], null),null,(1),null)),(2),null)),(3),null))], null),null,(1),null)),(2),null)),cljs.core.cst$kw$red,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reduction_DASH_type,cljs.core.cst$kw$hiccup,cljs.core.cst$kw$key,cljs.core.cst$kw$char_DASH_val], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$cat,cljs.core.cst$kw$parsers,(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$string,cljs.core.cst$kw$string,"%",cljs.core.cst$kw$hide,true], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$alt,cljs.core.cst$kw$parsers,(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$bin_DASH_val], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$dec_DASH_val], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$hex_DASH_val], null),null,(1),null)),(2),null)),(3),null))], null),null,(1),null)),(2),null)),cljs.core.cst$kw$red,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$reduction_DASH_type,cljs.core.cst$kw$raw], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$cat,cljs.core.cst$kw$parsers,(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$cat,cljs.core.cst$kw$parsers,(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$string,cljs.core.cst$kw$string,"<"], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$opt_DASH_whitespace], null),null,(1),null)),(2),null)),cljs.core.cst$kw$hide,true], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$alternation], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$cat,cljs.core.cst$kw$parsers,(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$opt_DASH_whitespace], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$string,cljs.core.cst$kw$string,">"], null),null,(1),null)),(2),null)),cljs.core.cst$kw$hide,true], null),null,(1),null)),(2),null)),(3),null)),cljs.core.cst$kw$red,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reduction_DASH_type,cljs.core.cst$kw$hiccup,cljs.core.cst$kw$key,cljs.core.cst$kw$hide], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$cat,cljs.core.cst$kw$parsers,(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$opt_DASH_whitespace,cljs.core.cst$kw$hide,true], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$alt,cljs.core.cst$kw$parsers,(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$string,cljs.core.cst$kw$string,"="], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$string,cljs.core.cst$kw$string,"=/"], null),null,(1),null)),(2),null))], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$opt_DASH_whitespace,cljs.core.cst$kw$hide,true], null),null,(1),null)),(2),null)),(3),null)),cljs.core.cst$kw$red,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reduction_DASH_type,cljs.core.cst$kw$hiccup,cljs.core.cst$kw$key,cljs.core.cst$kw$defined_DASH_as], null)], null),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.regexp("[0-9a-fA-F]"),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$red,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$reduction_DASH_type,cljs.core.cst$kw$raw], null)], null)], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$cat,cljs.core.cst$kw$parsers,(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$cat,cljs.core.cst$kw$parsers,(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$string,cljs.core.cst$kw$string,"["], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$opt_DASH_whitespace], null),null,(1),null)),(2),null)),cljs.core.cst$kw$hide,true], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$alternation], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$cat,cljs.core.cst$kw$parsers,(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$opt_DASH_whitespace], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$string,cljs.core.cst$kw$string,"]"], null),null,(1),null)),(2),null)),cljs.core.cst$kw$hide,true], null),null,(1),null)),(2),null)),(3),null)),cljs.core.cst$kw$red,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reduction_DASH_type,cljs.core.cst$kw$hiccup,cljs.core.cst$kw$key,cljs.core.cst$kw$option], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$plus,cljs.core.cst$kw$parser,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$HEXDIG], null),cljs.core.cst$kw$red,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reduction_DASH_type,cljs.core.cst$kw$hiccup,cljs.core.cst$kw$key,cljs.core.cst$kw$hex_DASH_char], null)], null),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.regexp("[a-zA-Z][-a-zA-Z0-9]*"),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$red,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$reduction_DASH_type,cljs.core.cst$kw$raw], null)], null)], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$cat,cljs.core.cst$kw$parsers,(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$string,cljs.core.cst$kw$string,"b",cljs.core.cst$kw$hide,true], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$bin_DASH_char], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$opt,cljs.core.cst$kw$parser,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$alt,cljs.core.cst$kw$parsers,(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$plus,cljs.core.cst$kw$parser,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$cat,cljs.core.cst$kw$parsers,(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$string,cljs.core.cst$kw$string,".",cljs.core.cst$kw$hide,true], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$bin_DASH_char], null),null,(1),null)),(2),null))], null)], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$cat,cljs.core.cst$kw$parsers,(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$string,cljs.core.cst$kw$string,"-"], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$bin_DASH_char], null),null,(1),null)),(2),null))], null),null,(1),null)),(2),null))], null)], null),null,(1),null)),(2),null)),(3),null)),cljs.core.cst$kw$red,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reduction_DASH_type,cljs.core.cst$kw$hiccup,cljs.core.cst$kw$key,cljs.core.cst$kw$bin_DASH_val], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$cat,cljs.core.cst$kw$parsers,(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$string,cljs.core.cst$kw$string,"d",cljs.core.cst$kw$hide,true], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$dec_DASH_char], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$opt,cljs.core.cst$kw$parser,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$alt,cljs.core.cst$kw$parsers,(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$plus,cljs.core.cst$kw$parser,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$cat,cljs.core.cst$kw$parsers,(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$string,cljs.core.cst$kw$string,".",cljs.core.cst$kw$hide,true], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$dec_DASH_char], null),null,(1),null)),(2),null))], null)], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$cat,cljs.core.cst$kw$parsers,(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$string,cljs.core.cst$kw$string,"-"], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$dec_DASH_char], null),null,(1),null)),(2),null))], null),null,(1),null)),(2),null))], null)], null),null,(1),null)),(2),null)),(3),null)),cljs.core.cst$kw$red,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reduction_DASH_type,cljs.core.cst$kw$hiccup,cljs.core.cst$kw$key,cljs.core.cst$kw$dec_DASH_val], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$cat,cljs.core.cst$kw$parsers,(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$repetition], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$star,cljs.core.cst$kw$parser,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$cat,cljs.core.cst$kw$parsers,(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$whitespace,cljs.core.cst$kw$hide,true], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$repetition], null),null,(1),null)),(2),null))], null)], null),null,(1),null)),(2),null)),cljs.core.cst$kw$red,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reduction_DASH_type,cljs.core.cst$kw$hiccup,cljs.core.cst$kw$key,cljs.core.cst$kw$concatenation], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$cat,cljs.core.cst$kw$parsers,(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$concatenation], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$star,cljs.core.cst$kw$parser,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$cat,cljs.core.cst$kw$parsers,(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$cat,cljs.core.cst$kw$parsers,(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$opt_DASH_whitespace], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$string,cljs.core.cst$kw$string,"/"], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$opt_DASH_whitespace], null),null,(1),null)),(2),null)),(3),null)),cljs.core.cst$kw$hide,true], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$concatenation], null),null,(1),null)),(2),null))], null)], null),null,(1),null)),(2),null)),cljs.core.cst$kw$red,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reduction_DASH_type,cljs.core.cst$kw$hiccup,cljs.core.cst$kw$key,cljs.core.cst$kw$alternation], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$alt,cljs.core.cst$kw$parsers,(new cljs.core.List(null,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.regexp("#'[^'\\\\]*(?:\\\\.[^'\\\\]*)*'"),cljs.core.PersistentArrayMap.EMPTY], 0)),(new cljs.core.List(null,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.regexp("#\\\"[^\\\"\\\\]*(?:\\\\.[^\\\"\\\\]*)*\\\""),cljs.core.PersistentArrayMap.EMPTY], 0)),null,(1),null)),(2),null)),cljs.core.cst$kw$red,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reduction_DASH_type,cljs.core.cst$kw$hiccup,cljs.core.cst$kw$key,cljs.core.cst$kw$regexp], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$cat,cljs.core.cst$kw$parsers,(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$opt,cljs.core.cst$kw$parser,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$repeat], null)], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$opt_DASH_whitespace,cljs.core.cst$kw$hide,true], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$element], null),null,(1),null)),(2),null)),(3),null)),cljs.core.cst$kw$red,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reduction_DASH_type,cljs.core.cst$kw$hiccup,cljs.core.cst$kw$key,cljs.core.cst$kw$repetition], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$rulename,cljs.core.cst$kw$red,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reduction_DASH_type,cljs.core.cst$kw$hiccup,cljs.core.cst$kw$key,cljs.core.cst$kw$rulename_DASH_left], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$cat,cljs.core.cst$kw$parsers,(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$opt_DASH_whitespace,cljs.core.cst$kw$hide,true], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$plus,cljs.core.cst$kw$parser,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$alt,cljs.core.cst$kw$parsers,(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$rule], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$hide_DASH_tag_DASH_rule], null),null,(1),null)),(2),null))], null)], null),null,(1),null)),(2),null)),cljs.core.cst$kw$red,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$reduction_DASH_type,cljs.core.cst$kw$raw], null)], null),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.combinators_source.regexp("\\s*(?:;.*?(?:\\u000D?\\u000A\\s*|$))*"),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$red,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reduction_DASH_type,cljs.core.cst$kw$hiccup,cljs.core.cst$kw$key,cljs.core.cst$kw$opt_DASH_whitespace], null)], null)], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$alt,cljs.core.cst$kw$parsers,(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$NUM], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$cat,cljs.core.cst$kw$parsers,(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$opt,cljs.core.cst$kw$parser,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$NUM], null)], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$string,cljs.core.cst$kw$string,"*"], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$opt,cljs.core.cst$kw$parser,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$NUM], null)], null),null,(1),null)),(2),null)),(3),null))], null),null,(1),null)),(2),null)),cljs.core.cst$kw$red,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reduction_DASH_type,cljs.core.cst$kw$hiccup,cljs.core.cst$kw$key,cljs.core.cst$kw$repeat], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$cat,cljs.core.cst$kw$parsers,(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$string,cljs.core.cst$kw$string,"x",cljs.core.cst$kw$hide,true], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$hex_DASH_char], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$opt,cljs.core.cst$kw$parser,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$alt,cljs.core.cst$kw$parsers,(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$plus,cljs.core.cst$kw$parser,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$cat,cljs.core.cst$kw$parsers,(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$string,cljs.core.cst$kw$string,".",cljs.core.cst$kw$hide,true], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$hex_DASH_char], null),null,(1),null)),(2),null))], null)], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$cat,cljs.core.cst$kw$parsers,(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$string,cljs.core.cst$kw$string,"-"], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$hex_DASH_char], null),null,(1),null)),(2),null))], null),null,(1),null)),(2),null))], null)], null),null,(1),null)),(2),null)),(3),null)),cljs.core.cst$kw$red,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reduction_DASH_type,cljs.core.cst$kw$hiccup,cljs.core.cst$kw$key,cljs.core.cst$kw$hex_DASH_val], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$plus,cljs.core.cst$kw$parser,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$DIGIT], null),cljs.core.cst$kw$red,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reduction_DASH_type,cljs.core.cst$kw$hiccup,cljs.core.cst$kw$key,cljs.core.cst$kw$dec_DASH_char], null)], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$tag,cljs.core.cst$kw$alt,cljs.core.cst$kw$parsers,(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$rulelist], null),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$nt,cljs.core.cst$kw$keyword,cljs.core.cst$kw$alternation], null),null,(1),null)),(2),null)),cljs.core.cst$kw$red,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$reduction_DASH_type,cljs.core.cst$kw$raw], null)], null)]);
instaparse.abnf.get_char_combinator = (function instaparse$abnf$get_char_combinator(var_args){
var args__4736__auto__ = [];
var len__4730__auto___22847 = arguments.length;
var i__4731__auto___22848 = (0);
while(true){
if((i__4731__auto___22848 < len__4730__auto___22847)){
args__4736__auto__.push((arguments[i__4731__auto___22848]));

var G__22849 = (i__4731__auto___22848 + (1));
i__4731__auto___22848 = G__22849;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return instaparse.abnf.get_char_combinator.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

instaparse.abnf.get_char_combinator.cljs$core$IFn$_invoke$arity$variadic = (function (nums){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("-",cljs.core.second(nums))){
var vec__22840 = nums;
var lo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22840,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22840,(1),null);
var hi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22840,(2),null);
return instaparse.combinators_source.unicode_char.cljs$core$IFn$_invoke$arity$2(lo,hi);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(instaparse.combinators_source.cat,(function (){var iter__4523__auto__ = (function instaparse$abnf$iter__22843(s__22844){
return (new cljs.core.LazySeq(null,(function (){
var s__22844__$1 = s__22844;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__22844__$1);
if(temp__5720__auto__){
var s__22844__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22844__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__22844__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__22846 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__22845 = (0);
while(true){
if((i__22845 < size__4522__auto__)){
var n = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__22845);
cljs.core.chunk_append(b__22846,instaparse.combinators_source.unicode_char.cljs$core$IFn$_invoke$arity$1(n));

var G__22850 = (i__22845 + (1));
i__22845 = G__22850;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22846),instaparse$abnf$iter__22843(cljs.core.chunk_rest(s__22844__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22846),null);
}
} else {
var n = cljs.core.first(s__22844__$2);
return cljs.core.cons(instaparse.combinators_source.unicode_char.cljs$core$IFn$_invoke$arity$1(n),instaparse$abnf$iter__22843(cljs.core.rest(s__22844__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(nums);
})());

}
});

instaparse.abnf.get_char_combinator.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
instaparse.abnf.get_char_combinator.cljs$lang$applyTo = (function (seq22839){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22839));
});

/**
 * Restricts map to certain keys
 */
instaparse.abnf.project = (function instaparse$abnf$project(m,ks){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4523__auto__ = (function instaparse$abnf$project_$_iter__22851(s__22852){
return (new cljs.core.LazySeq(null,(function (){
var s__22852__$1 = s__22852;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__22852__$1);
if(temp__5720__auto__){
var s__22852__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22852__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__22852__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__22854 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__22853 = (0);
while(true){
if((i__22853 < size__4522__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__22853);
if(cljs.core.contains_QMARK_(m,k)){
cljs.core.chunk_append(b__22854,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1(k) : m.call(null,k))], null));

var G__22855 = (i__22853 + (1));
i__22853 = G__22855;
continue;
} else {
var G__22856 = (i__22853 + (1));
i__22853 = G__22856;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22854),instaparse$abnf$project_$_iter__22851(cljs.core.chunk_rest(s__22852__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22854),null);
}
} else {
var k = cljs.core.first(s__22852__$2);
if(cljs.core.contains_QMARK_(m,k)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1(k) : m.call(null,k))], null),instaparse$abnf$project_$_iter__22851(cljs.core.rest(s__22852__$2)));
} else {
var G__22857 = cljs.core.rest(s__22852__$2);
s__22852__$1 = G__22857;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(ks);
})());
});
/**
 * Merges abnf-core map in with parsed grammar map
 */
instaparse.abnf.merge_core = (function instaparse$abnf$merge_core(grammar_map){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([instaparse.abnf.project(instaparse.abnf.abnf_core,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(instaparse.cfg.seq_nt,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.vals(grammar_map)], 0)))),grammar_map], 0));
});
/**
 * Tests whether parser was constructed with hide-tag
 */
instaparse.abnf.hide_tag_QMARK_ = (function instaparse$abnf$hide_tag_QMARK_(p){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$red.cljs$core$IFn$_invoke$arity$1(p),instaparse.reduction.raw_non_terminal_reduction);
});
instaparse.abnf.alt_preserving_hide_tag = (function instaparse$abnf$alt_preserving_hide_tag(p1,p2){
var hide_tag_p1_QMARK_ = instaparse.abnf.hide_tag_QMARK_(p1);
var hide_tag_p2_QMARK_ = instaparse.abnf.hide_tag_QMARK_(p2);
if(((hide_tag_p1_QMARK_) && (hide_tag_p2_QMARK_))){
return instaparse.combinators_source.hide_tag(instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1,cljs.core.cst$kw$red),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p2,cljs.core.cst$kw$red)], 0)));
} else {
if(hide_tag_p1_QMARK_){
return instaparse.combinators_source.hide_tag(instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1,cljs.core.cst$kw$red),p2], 0)));
} else {
if(hide_tag_p2_QMARK_){
return instaparse.combinators_source.hide_tag(instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p2,cljs.core.cst$kw$red)], 0)));
} else {
return instaparse.combinators_source.alt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1,p2], 0));

}
}
}
});
instaparse.abnf.parse_int = parseInt;
instaparse.abnf.abnf_transformer = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$neg,cljs.core.cst$kw$hide_DASH_tag_DASH_rule,cljs.core.cst$kw$look,cljs.core.cst$kw$bin_DASH_char,cljs.core.cst$kw$rule,cljs.core.cst$kw$rulename_DASH_right,cljs.core.cst$kw$NUM,cljs.core.cst$kw$char_DASH_val,cljs.core.cst$kw$hide,cljs.core.cst$kw$option,cljs.core.cst$kw$hex_DASH_char,cljs.core.cst$kw$bin_DASH_val,cljs.core.cst$kw$dec_DASH_val,cljs.core.cst$kw$concatenation,cljs.core.cst$kw$alternation,cljs.core.cst$kw$regexp,cljs.core.cst$kw$repetition,cljs.core.cst$kw$rulename_DASH_left,cljs.core.cst$kw$repeat,cljs.core.cst$kw$hex_DASH_val,cljs.core.cst$kw$dec_DASH_char],[instaparse.combinators_source.neg,(function (tag,rule){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([tag,instaparse.combinators_source.hide_tag(rule)]);
}),instaparse.combinators_source.look,(function() { 
var G__22868__delegate = function (cs){
var G__22861 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cs);
var G__22862 = (2);
return (instaparse.abnf.parse_int.cljs$core$IFn$_invoke$arity$2 ? instaparse.abnf.parse_int.cljs$core$IFn$_invoke$arity$2(G__22861,G__22862) : instaparse.abnf.parse_int.call(null,G__22861,G__22862));
};
var G__22868 = function (var_args){
var cs = null;
if (arguments.length > 0) {
var G__22869__i = 0, G__22869__a = new Array(arguments.length -  0);
while (G__22869__i < G__22869__a.length) {G__22869__a[G__22869__i] = arguments[G__22869__i + 0]; ++G__22869__i;}
  cs = new cljs.core.IndexedSeq(G__22869__a,0,null);
} 
return G__22868__delegate.call(this,cs);};
G__22868.cljs$lang$maxFixedArity = 0;
G__22868.cljs$lang$applyTo = (function (arglist__22870){
var cs = cljs.core.seq(arglist__22870);
return G__22868__delegate(cs);
});
G__22868.cljs$core$IFn$_invoke$arity$variadic = G__22868__delegate;
return G__22868;
})()
,cljs.core.hash_map,(function() { 
var G__22871__delegate = function (rest__22859_SHARP_){
if(instaparse.abnf._STAR_case_insensitive_STAR_){
return instaparse.combinators_source.nt(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,rest__22859_SHARP_))));
} else {
return instaparse.combinators_source.nt(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,rest__22859_SHARP_)));
}
};
var G__22871 = function (var_args){
var rest__22859_SHARP_ = null;
if (arguments.length > 0) {
var G__22872__i = 0, G__22872__a = new Array(arguments.length -  0);
while (G__22872__i < G__22872__a.length) {G__22872__a[G__22872__i] = arguments[G__22872__i + 0]; ++G__22872__i;}
  rest__22859_SHARP_ = new cljs.core.IndexedSeq(G__22872__a,0,null);
} 
return G__22871__delegate.call(this,rest__22859_SHARP_);};
G__22871.cljs$lang$maxFixedArity = 0;
G__22871.cljs$lang$applyTo = (function (arglist__22873){
var rest__22859_SHARP_ = cljs.core.seq(arglist__22873);
return G__22871__delegate(rest__22859_SHARP_);
});
G__22871.cljs$core$IFn$_invoke$arity$variadic = G__22871__delegate;
return G__22871;
})()
,(function() { 
var G__22874__delegate = function (rest__22860_SHARP_){
var G__22863 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,rest__22860_SHARP_);
return (instaparse.abnf.parse_int.cljs$core$IFn$_invoke$arity$1 ? instaparse.abnf.parse_int.cljs$core$IFn$_invoke$arity$1(G__22863) : instaparse.abnf.parse_int.call(null,G__22863));
};
var G__22874 = function (var_args){
var rest__22860_SHARP_ = null;
if (arguments.length > 0) {
var G__22875__i = 0, G__22875__a = new Array(arguments.length -  0);
while (G__22875__i < G__22875__a.length) {G__22875__a[G__22875__i] = arguments[G__22875__i + 0]; ++G__22875__i;}
  rest__22860_SHARP_ = new cljs.core.IndexedSeq(G__22875__a,0,null);
} 
return G__22874__delegate.call(this,rest__22860_SHARP_);};
G__22874.cljs$lang$maxFixedArity = 0;
G__22874.cljs$lang$applyTo = (function (arglist__22876){
var rest__22860_SHARP_ = cljs.core.seq(arglist__22876);
return G__22874__delegate(rest__22860_SHARP_);
});
G__22874.cljs$core$IFn$_invoke$arity$variadic = G__22874__delegate;
return G__22874;
})()
,(function() { 
var G__22877__delegate = function (cs){
return instaparse.cfg.string_PLUS_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cs),true);
};
var G__22877 = function (var_args){
var cs = null;
if (arguments.length > 0) {
var G__22878__i = 0, G__22878__a = new Array(arguments.length -  0);
while (G__22878__i < G__22878__a.length) {G__22878__a[G__22878__i] = arguments[G__22878__i + 0]; ++G__22878__i;}
  cs = new cljs.core.IndexedSeq(G__22878__a,0,null);
} 
return G__22877__delegate.call(this,cs);};
G__22877.cljs$lang$maxFixedArity = 0;
G__22877.cljs$lang$applyTo = (function (arglist__22879){
var cs = cljs.core.seq(arglist__22879);
return G__22877__delegate(cs);
});
G__22877.cljs$core$IFn$_invoke$arity$variadic = G__22877__delegate;
return G__22877;
})()
,instaparse.combinators_source.hide,instaparse.combinators_source.opt,(function() { 
var G__22880__delegate = function (cs){
var G__22864 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cs);
var G__22865 = (16);
return (instaparse.abnf.parse_int.cljs$core$IFn$_invoke$arity$2 ? instaparse.abnf.parse_int.cljs$core$IFn$_invoke$arity$2(G__22864,G__22865) : instaparse.abnf.parse_int.call(null,G__22864,G__22865));
};
var G__22880 = function (var_args){
var cs = null;
if (arguments.length > 0) {
var G__22881__i = 0, G__22881__a = new Array(arguments.length -  0);
while (G__22881__i < G__22881__a.length) {G__22881__a[G__22881__i] = arguments[G__22881__i + 0]; ++G__22881__i;}
  cs = new cljs.core.IndexedSeq(G__22881__a,0,null);
} 
return G__22880__delegate.call(this,cs);};
G__22880.cljs$lang$maxFixedArity = 0;
G__22880.cljs$lang$applyTo = (function (arglist__22882){
var cs = cljs.core.seq(arglist__22882);
return G__22880__delegate(cs);
});
G__22880.cljs$core$IFn$_invoke$arity$variadic = G__22880__delegate;
return G__22880;
})()
,instaparse.abnf.get_char_combinator,instaparse.abnf.get_char_combinator,instaparse.combinators_source.cat,instaparse.combinators_source.alt,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(instaparse.combinators_source.regexp,instaparse.cfg.process_regexp),(function() {
var G__22883 = null;
var G__22883__1 = (function (element){
return element;
});
var G__22883__2 = (function (repeat,element){
if(cljs.core.empty_QMARK_(repeat)){
return instaparse.combinators_source.star(element);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(repeat),(2))){
return instaparse.combinators_source.rep(cljs.core.cst$kw$low.cljs$core$IFn$_invoke$arity$1(repeat),cljs.core.cst$kw$high.cljs$core$IFn$_invoke$arity$1(repeat),element);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$low.cljs$core$IFn$_invoke$arity$1(repeat),(1))){
return instaparse.combinators_source.plus(element);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$high.cljs$core$IFn$_invoke$arity$1(repeat),(1))){
return instaparse.combinators_source.opt(element);
} else {
return instaparse.combinators_source.rep((function (){var or__4131__auto__ = cljs.core.cst$kw$low.cljs$core$IFn$_invoke$arity$1(repeat);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})(),(function (){var or__4131__auto__ = cljs.core.cst$kw$high.cljs$core$IFn$_invoke$arity$1(repeat);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return Infinity;
}
})(),element);

}
}
}
}
});
G__22883 = function(repeat,element){
switch(arguments.length){
case 1:
return G__22883__1.call(this,repeat);
case 2:
return G__22883__2.call(this,repeat,element);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__22883.cljs$core$IFn$_invoke$arity$1 = G__22883__1;
G__22883.cljs$core$IFn$_invoke$arity$2 = G__22883__2;
return G__22883;
})()
,(function() { 
var G__22884__delegate = function (rest__22858_SHARP_){
if(instaparse.abnf._STAR_case_insensitive_STAR_){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,rest__22858_SHARP_)));
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,rest__22858_SHARP_));
}
};
var G__22884 = function (var_args){
var rest__22858_SHARP_ = null;
if (arguments.length > 0) {
var G__22885__i = 0, G__22885__a = new Array(arguments.length -  0);
while (G__22885__i < G__22885__a.length) {G__22885__a[G__22885__i] = arguments[G__22885__i + 0]; ++G__22885__i;}
  rest__22858_SHARP_ = new cljs.core.IndexedSeq(G__22885__a,0,null);
} 
return G__22884__delegate.call(this,rest__22858_SHARP_);};
G__22884.cljs$lang$maxFixedArity = 0;
G__22884.cljs$lang$applyTo = (function (arglist__22886){
var rest__22858_SHARP_ = cljs.core.seq(arglist__22886);
return G__22884__delegate(rest__22858_SHARP_);
});
G__22884.cljs$core$IFn$_invoke$arity$variadic = G__22884__delegate;
return G__22884;
})()
,(function() { 
var G__22887__delegate = function (items){
var G__22866 = cljs.core.count(items);
switch (G__22866) {
case (1):
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(items),"*")){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$low,cljs.core.first(items),cljs.core.cst$kw$high,cljs.core.first(items)], null);

}

break;
case (2):
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(items),"*")){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$high,cljs.core.second(items)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$low,cljs.core.first(items)], null);

}

break;
case (3):
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$low,cljs.core.first(items),cljs.core.cst$kw$high,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(items,(2))], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22866)].join('')));

}
};
var G__22887 = function (var_args){
var items = null;
if (arguments.length > 0) {
var G__22889__i = 0, G__22889__a = new Array(arguments.length -  0);
while (G__22889__i < G__22889__a.length) {G__22889__a[G__22889__i] = arguments[G__22889__i + 0]; ++G__22889__i;}
  items = new cljs.core.IndexedSeq(G__22889__a,0,null);
} 
return G__22887__delegate.call(this,items);};
G__22887.cljs$lang$maxFixedArity = 0;
G__22887.cljs$lang$applyTo = (function (arglist__22890){
var items = cljs.core.seq(arglist__22890);
return G__22887__delegate(items);
});
G__22887.cljs$core$IFn$_invoke$arity$variadic = G__22887__delegate;
return G__22887;
})()
,instaparse.abnf.get_char_combinator,(function() { 
var G__22891__delegate = function (cs){
var G__22867 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cs);
return (instaparse.abnf.parse_int.cljs$core$IFn$_invoke$arity$1 ? instaparse.abnf.parse_int.cljs$core$IFn$_invoke$arity$1(G__22867) : instaparse.abnf.parse_int.call(null,G__22867));
};
var G__22891 = function (var_args){
var cs = null;
if (arguments.length > 0) {
var G__22892__i = 0, G__22892__a = new Array(arguments.length -  0);
while (G__22892__i < G__22892__a.length) {G__22892__a[G__22892__i] = arguments[G__22892__i + 0]; ++G__22892__i;}
  cs = new cljs.core.IndexedSeq(G__22892__a,0,null);
} 
return G__22891__delegate.call(this,cs);};
G__22891.cljs$lang$maxFixedArity = 0;
G__22891.cljs$lang$applyTo = (function (arglist__22893){
var cs = cljs.core.seq(arglist__22893);
return G__22891__delegate(cs);
});
G__22891.cljs$core$IFn$_invoke$arity$variadic = G__22891__delegate;
return G__22891;
})()
]);
instaparse.abnf.rules__GT_grammar_map = (function instaparse$abnf$rules__GT_grammar_map(rules){
return instaparse.abnf.merge_core(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,instaparse.abnf.alt_preserving_hide_tag,rules));
});
/**
 * Takes an ABNF grammar specification string and returns the combinator version.
 * If you give it the right-hand side of a rule, it will return the combinator equivalent.
 * If you give it a series of rules, it will give you back a grammar map.   
 * Useful for combining with other combinators.
 */
instaparse.abnf.abnf = (function instaparse$abnf$abnf(var_args){
var args__4736__auto__ = [];
var len__4730__auto___22905 = arguments.length;
var i__4731__auto___22906 = (0);
while(true){
if((i__4731__auto___22906 < len__4730__auto___22905)){
args__4736__auto__.push((arguments[i__4731__auto___22906]));

var G__22907 = (i__4731__auto___22906 + (1));
i__4731__auto___22906 = G__22907;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return instaparse.abnf.abnf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

instaparse.abnf.abnf.cljs$core$IFn$_invoke$arity$variadic = (function (spec,p__22896){
var map__22897 = p__22896;
var map__22897__$1 = (((((!((map__22897 == null))))?(((((map__22897.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22897.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22897):map__22897);
var opts = map__22897__$1;
var _STAR_case_insensitive_literals_STAR__orig_val__22899 = instaparse.cfg._STAR_case_insensitive_literals_STAR_;
var _STAR_case_insensitive_literals_STAR__temp_val__22900 = cljs.core.cst$kw$string_DASH_ci.cljs$core$IFn$_invoke$arity$2(opts,cljs.core.cst$kw$default);
instaparse.cfg._STAR_case_insensitive_literals_STAR_ = _STAR_case_insensitive_literals_STAR__temp_val__22900;

try{var tree = instaparse.gll.parse(instaparse.abnf.abnf_parser,cljs.core.cst$kw$rules_DASH_or_DASH_parser,spec,false);
if((tree instanceof instaparse.gll.Failure)){
return instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error parsing grammar specification:\n",(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__22901_22908 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__22902_22909 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__22903_22910 = true;
var _STAR_print_fn_STAR__temp_val__22904_22911 = ((function (_STAR_print_newline_STAR__orig_val__22901_22908,_STAR_print_fn_STAR__orig_val__22902_22909,_STAR_print_newline_STAR__temp_val__22903_22910,sb__4661__auto__,tree,_STAR_case_insensitive_literals_STAR__orig_val__22899,_STAR_case_insensitive_literals_STAR__temp_val__22900,map__22897,map__22897__$1,opts){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__22901_22908,_STAR_print_fn_STAR__orig_val__22902_22909,_STAR_print_newline_STAR__temp_val__22903_22910,sb__4661__auto__,tree,_STAR_case_insensitive_literals_STAR__orig_val__22899,_STAR_case_insensitive_literals_STAR__temp_val__22900,map__22897,map__22897__$1,opts))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__22903_22910;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__22904_22911;

try{cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tree], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__22902_22909;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__22901_22908;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})()], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$alternation,cljs.core.ffirst(tree))){
return instaparse.transform.transform(instaparse.abnf.abnf_transformer,cljs.core.first(tree));
} else {
return instaparse.abnf.rules__GT_grammar_map(instaparse.transform.transform(instaparse.abnf.abnf_transformer,tree));

}
}
}finally {instaparse.cfg._STAR_case_insensitive_literals_STAR_ = _STAR_case_insensitive_literals_STAR__orig_val__22899;
}});

instaparse.abnf.abnf.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
instaparse.abnf.abnf.cljs$lang$applyTo = (function (seq22894){
var G__22895 = cljs.core.first(seq22894);
var seq22894__$1 = cljs.core.next(seq22894);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22895,seq22894__$1);
});

instaparse.abnf.build_parser = (function instaparse$abnf$build_parser(spec,output_format){
var rule_tree = instaparse.gll.parse(instaparse.abnf.abnf_parser,cljs.core.cst$kw$rulelist,spec,false);
if((rule_tree instanceof instaparse.gll.Failure)){
return instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error parsing grammar specification:\n",(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__22912_22916 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__22913_22917 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__22914_22918 = true;
var _STAR_print_fn_STAR__temp_val__22915_22919 = ((function (_STAR_print_newline_STAR__orig_val__22912_22916,_STAR_print_fn_STAR__orig_val__22913_22917,_STAR_print_newline_STAR__temp_val__22914_22918,sb__4661__auto__,rule_tree){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__22912_22916,_STAR_print_fn_STAR__orig_val__22913_22917,_STAR_print_newline_STAR__temp_val__22914_22918,sb__4661__auto__,rule_tree))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__22914_22918;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__22915_22919;

try{cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rule_tree], 0));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__22913_22917;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__22912_22916;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})()], 0));
} else {
var rules = instaparse.transform.transform(instaparse.abnf.abnf_transformer,rule_tree);
var grammar_map = instaparse.abnf.rules__GT_grammar_map(rules);
var start_production = cljs.core.first(cljs.core.first(cljs.core.first(rules)));
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$grammar,instaparse.cfg.check_grammar(instaparse.reduction.apply_standard_reductions.cljs$core$IFn$_invoke$arity$2(output_format,grammar_map)),cljs.core.cst$kw$start_DASH_production,start_production,cljs.core.cst$kw$output_DASH_format,output_format], null);
}
});
