// Compiled by ClojureScript 1.10.520 {}
goog.provide('draw_graph.utils');
goog.require('cljs.core');
goog.require('hickory.core');
goog.require('clojure.string');
goog.require('markdown_to_hiccup.core');
goog.require('cljs.reader');
draw_graph.utils.log = console.log;
draw_graph.utils.parse_html__GT_hiccup = (function draw_graph$utils$parse_html__GT_hiccup(val,snippet_QMARK_){
if(cljs.core.truth_(snippet_QMARK_)){
return cljs.core.map.call(null,hickory.core.as_hiccup,hickory.core.parse_fragment.call(null,val));
} else {
return hickory.core.as_hiccup.call(null,hickory.core.parse.call(null,val));
}
});
draw_graph.utils.html__GT_hiccup = (function draw_graph$utils$html__GT_hiccup(val){
return cljs.reader.read_string.call(null,clojure.string.replace_first.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace_first.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(draw_graph.utils.parse_html__GT_hiccup.call(null,val,true)),/^\((.*)\)/,"$1"),/\"(\s*\\n\s*(\w)*)*\"/,"$2"),/\"(\\n\s*)/,"\""),/(\\n\s*)\"/,"\""),/\[/,"\n["),/ \{\}/,""),/([\]\}])(\s*(\"\s*\"\s*)*)[\n]/,"$1\n"),/^\n/,""));
});
/**
 * Converts markdown to hiccup
 */
draw_graph.utils.md__GT_hiccup = (function draw_graph$utils$md__GT_hiccup(markdown__$1){
return markdown_to_hiccup.core.component.call(null,markdown_to_hiccup.core.md__GT_hiccup.call(null,markdown__$1));
});

//# sourceMappingURL=utils.js.map
