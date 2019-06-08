// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('instaparse.viz');
goog.require('cljs.core');
goog.require('cljs.core.constants');
/**
 * Takes a subtree of the parse tree and returns a [start-index end-index] pair
 * indicating the span of text parsed by this subtree.
 * start-index is inclusive and end-index is exclusive, as is customary
 * with substrings.
 * Returns nil if no span metadata is attached.
 */
instaparse.viz.span = (function instaparse$viz$span(tree){
var m = cljs.core.meta(tree);
var s = cljs.core.cst$kw$instaparse$gll_SLASH_start_DASH_index.cljs$core$IFn$_invoke$arity$1(m);
var e = cljs.core.cst$kw$instaparse$gll_SLASH_end_DASH_index.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var and__4120__auto__ = s;
if(cljs.core.truth_(and__4120__auto__)){
return e;
} else {
return and__4120__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,e], null);
} else {
return null;
}
});
