goog.provide('clojure.data.zip');
goog.require('cljs.core');
goog.require('clojure.zip');
clojure.data.zip.auto = (function clojure$data$zip$auto(v,x){
return cljs.core.with_meta(x,(function (){var G__54496 = cljs.core.meta(x);
var G__54497 = new cljs.core.Keyword("zip-filter","no-auto?","zip-filter/no-auto?",1861656504);
var G__54498 = true;
var fexpr__54495 = (cljs.core.truth_(v)?cljs.core.dissoc:cljs.core.assoc);
return (fexpr__54495.cljs$core$IFn$_invoke$arity$3 ? fexpr__54495.cljs$core$IFn$_invoke$arity$3(G__54496,G__54497,G__54498) : fexpr__54495.call(null,G__54496,G__54497,G__54498));
})());
});
clojure.data.zip.auto_QMARK_ = (function clojure$data$zip$auto_QMARK_(x){
return cljs.core.not(new cljs.core.Keyword("zip-filter","no-auto?","zip-filter/no-auto?",1861656504).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(x)));
});
/**
 * Returns a lazy sequence of locations to the right of loc, starting with loc.
 */
clojure.data.zip.right_locs = (function clojure$data$zip$right_locs(loc){
return (new cljs.core.LazySeq(null,(function (){
if(cljs.core.truth_(loc)){
return cljs.core.cons(clojure.data.zip.auto(false,loc),(function (){var G__54499 = clojure.zip.right(loc);
return (clojure.data.zip.right_locs.cljs$core$IFn$_invoke$arity$1 ? clojure.data.zip.right_locs.cljs$core$IFn$_invoke$arity$1(G__54499) : clojure.data.zip.right_locs.call(null,G__54499));
})());
} else {
return null;
}
}),null,null));
});
/**
 * Returns a lazy sequence of locations to the left of loc, starting with loc.
 */
clojure.data.zip.left_locs = (function clojure$data$zip$left_locs(loc){
return (new cljs.core.LazySeq(null,(function (){
if(cljs.core.truth_(loc)){
return cljs.core.cons(clojure.data.zip.auto(false,loc),(function (){var G__54505 = clojure.zip.left(loc);
return (clojure.data.zip.left_locs.cljs$core$IFn$_invoke$arity$1 ? clojure.data.zip.left_locs.cljs$core$IFn$_invoke$arity$1(G__54505) : clojure.data.zip.left_locs.call(null,G__54505));
})());
} else {
return null;
}
}),null,null));
});
/**
 * Returns true if there are no more nodes to the left of location loc.
 */
clojure.data.zip.leftmost_QMARK_ = (function clojure$data$zip$leftmost_QMARK_(loc){
return (clojure.zip.left(loc) == null);
});
/**
 * Returns true if there are no more nodes to the right of location loc.
 */
clojure.data.zip.rightmost_QMARK_ = (function clojure$data$zip$rightmost_QMARK_(loc){
return (clojure.zip.right(loc) == null);
});
/**
 * Returns a lazy sequence of all immediate children of location loc,
 *   left-to-right.
 */
clojure.data.zip.children = (function clojure$data$zip$children(loc){
if(cljs.core.truth_(clojure.zip.branch_QMARK_(loc))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__54507_SHARP_){
return clojure.data.zip.auto(false,p1__54507_SHARP_);
}),clojure.data.zip.right_locs(clojure.zip.down(loc)));
} else {
return null;
}
});
/**
 * Returns a lazy sequence of all immediate children of location loc,
 *   left-to-right, marked so that a following tag= predicate will auto-descend.
 */
clojure.data.zip.children_auto = (function clojure$data$zip$children_auto(loc){
if(cljs.core.truth_(clojure.zip.branch_QMARK_(loc))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__54508_SHARP_){
return clojure.data.zip.auto(true,p1__54508_SHARP_);
}),clojure.data.zip.right_locs(clojure.zip.down(loc)));
} else {
return null;
}
});
/**
 * Returns a lazy sequence of all descendants of location loc, in
 *   depth-first order, left-to-right, starting with loc.
 */
clojure.data.zip.descendants = (function clojure$data$zip$descendants(loc){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons(clojure.data.zip.auto(false,loc),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(clojure.data.zip.descendants,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.data.zip.children(loc)], 0)));
}),null,null));
});
/**
 * Returns a lazy sequence of all ancestors of location loc, starting
 *   with loc and proceeding to loc's parent node and on through to the
 *   root of the tree.
 */
clojure.data.zip.ancestors = (function clojure$data$zip$ancestors(loc){
return (new cljs.core.LazySeq(null,(function (){
if(cljs.core.truth_(loc)){
return cljs.core.cons(clojure.data.zip.auto(false,loc),(function (){var G__54513 = clojure.zip.up(loc);
return (clojure.data.zip.ancestors.cljs$core$IFn$_invoke$arity$1 ? clojure.data.zip.ancestors.cljs$core$IFn$_invoke$arity$1(G__54513) : clojure.data.zip.ancestors.call(null,G__54513));
})());
} else {
return null;
}
}),null,null));
});
/**
 * Calls (pred loc), and then converts the result to the 'appropriate'
 *   sequence.
 */
clojure.data.zip.fixup_apply = (function clojure$data$zip$fixup_apply(pred,loc){
var rtn = (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(loc) : pred.call(null,loc));
if(cljs.core.truth_(((cljs.core.map_QMARK_(cljs.core.meta(rtn)))?new cljs.core.Keyword("zip-filter","is-node?","zip-filter/is-node?",-1966970687).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(rtn)):false))){
return (new cljs.core.List(null,rtn,null,(1),null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rtn,true)){
return (new cljs.core.List(null,loc,null,(1),null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rtn,false)){
return null;
} else {
if((rtn == null)){
return null;
} else {
if(cljs.core.sequential_QMARK_(rtn)){
return rtn;
} else {
return (new cljs.core.List(null,rtn,null,(1),null));

}
}
}
}
}
});
clojure.data.zip.mapcat_chain = (function clojure$data$zip$mapcat_chain(loc,preds,mkpred){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (prevseq,expr){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__54514_SHARP_){
return clojure.data.zip.fixup_apply((function (){var or__4185__auto__ = (mkpred.cljs$core$IFn$_invoke$arity$1 ? mkpred.cljs$core$IFn$_invoke$arity$1(expr) : mkpred.call(null,expr));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return expr;
}
})(),p1__54514_SHARP_);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prevseq], 0));
}),(new cljs.core.List(null,cljs.core.with_meta(loc,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(loc),new cljs.core.Keyword("zip-filter","is-node?","zip-filter/is-node?",-1966970687),true)),null,(1),null)),preds);
});

//# sourceMappingURL=clojure.data.zip.js.map
