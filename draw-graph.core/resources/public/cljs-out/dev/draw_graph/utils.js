// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('draw_graph.utils');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hickory.core');
goog.require('clojure.string');
goog.require('markdown_to_hiccup.core');
goog.require('cljs.reader');
draw_graph.utils.log = console.log;
draw_graph.utils.parse_html__GT_hiccup = (function draw_graph$utils$parse_html__GT_hiccup(val,snippet_QMARK_){
if(cljs.core.truth_(snippet_QMARK_)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(hickory.core.as_hiccup,hickory.core.parse_fragment(val));
} else {
return hickory.core.as_hiccup(hickory.core.parse(val));
}
});
draw_graph.utils.html__GT_hiccup = (function draw_graph$utils$html__GT_hiccup(val){
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(clojure.string.replace_first(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace_first(cljs.core.str.cljs$core$IFn$_invoke$arity$1(draw_graph.utils.parse_html__GT_hiccup(val,true)),/^\((.*)\)/,"$1"),/\"(\s*\\n\s*(\w)*)*\"/,"$2"),/\"(\\n\s*)/,"\""),/(\\n\s*)\"/,"\""),/\[/,"\n["),/ \{\}/,""),/([\]\}])(\s*(\"\s*\"\s*)*)[\n]/,"$1\n"),/^\n/,""));
});
/**
 * Converts markdown to hiccup
 */
draw_graph.utils.md__GT_hiccup = (function draw_graph$utils$md__GT_hiccup(markdown__$1){
return markdown_to_hiccup.core.component(markdown_to_hiccup.core.md__GT_hiccup.cljs$core$IFn$_invoke$arity$1(markdown__$1));
});
draw_graph.utils.clj__GT_json = (function draw_graph$utils$clj__GT_json(ds){
return JSON.stringify(cljs.core.clj__GT_js(ds));
});
draw_graph.utils.json__GT_clj = (function draw_graph$utils$json__GT_clj(ds){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(JSON.parse(ds),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$keywordize_DASH_keys,true], 0));
});
