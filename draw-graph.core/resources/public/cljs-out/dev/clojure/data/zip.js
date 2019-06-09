// Compiled by ClojureScript 1.10.520 {}
goog.provide('clojure.data.zip');
goog.require('cljs.core');
goog.require('clojure.zip');
clojure.data.zip.auto = (function clojure$data$zip$auto(v,x){
return cljs.core.with_meta.call(null,x,(cljs.core.truth_(v)?cljs.core.dissoc:cljs.core.assoc).call(null,cljs.core.meta.call(null,x),new cljs.core.Keyword("zip-filter","no-auto?","zip-filter/no-auto?",1861656504),true));
});
clojure.data.zip.auto_QMARK_ = (function clojure$data$zip$auto_QMARK_(x){
return cljs.core.not.call(null,new cljs.core.Keyword("zip-filter","no-auto?","zip-filter/no-auto?",1861656504).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,x)));
});
/**
 * Returns a lazy sequence of locations to the right of loc, starting with loc.
 */
clojure.data.zip.right_locs = (function clojure$data$zip$right_locs(loc){
return (new cljs.core.LazySeq(null,(function (){
if(cljs.core.truth_(loc)){
return cljs.core.cons.call(null,clojure.data.zip.auto.call(null,false,loc),clojure.data.zip.right_locs.call(null,clojure.zip.right.call(null,loc)));
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
return cljs.core.cons.call(null,clojure.data.zip.auto.call(null,false,loc),clojure.data.zip.left_locs.call(null,clojure.zip.left.call(null,loc)));
} else {
return null;
}
}),null,null));
});
/**
 * Returns true if there are no more nodes to the left of location loc.
 */
clojure.data.zip.leftmost_QMARK_ = (function clojure$data$zip$leftmost_QMARK_(loc){
return (clojure.zip.left.call(null,loc) == null);
});
/**
 * Returns true if there are no more nodes to the right of location loc.
 */
clojure.data.zip.rightmost_QMARK_ = (function clojure$data$zip$rightmost_QMARK_(loc){
return (clojure.zip.right.call(null,loc) == null);
});
/**
 * Returns a lazy sequence of all immediate children of location loc,
 *   left-to-right.
 */
clojure.data.zip.children = (function clojure$data$zip$children(loc){
if(cljs.core.truth_(clojure.zip.branch_QMARK_.call(null,loc))){
return cljs.core.map.call(null,(function (p1__20104_SHARP_){
return clojure.data.zip.auto.call(null,false,p1__20104_SHARP_);
}),clojure.data.zip.right_locs.call(null,clojure.zip.down.call(null,loc)));
} else {
return null;
}
});
/**
 * Returns a lazy sequence of all immediate children of location loc,
 *   left-to-right, marked so that a following tag= predicate will auto-descend.
 */
clojure.data.zip.children_auto = (function clojure$data$zip$children_auto(loc){
if(cljs.core.truth_(clojure.zip.branch_QMARK_.call(null,loc))){
return cljs.core.map.call(null,(function (p1__20105_SHARP_){
return clojure.data.zip.auto.call(null,true,p1__20105_SHARP_);
}),clojure.data.zip.right_locs.call(null,clojure.zip.down.call(null,loc)));
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
return cljs.core.cons.call(null,clojure.data.zip.auto.call(null,false,loc),cljs.core.mapcat.call(null,clojure.data.zip.descendants,clojure.data.zip.children.call(null,loc)));
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
return cljs.core.cons.call(null,clojure.data.zip.auto.call(null,false,loc),clojure.data.zip.ancestors.call(null,clojure.zip.up.call(null,loc)));
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
var rtn = pred.call(null,loc);
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.map_QMARK_.call(null,cljs.core.meta.call(null,rtn));
if(and__4120__auto__){
return new cljs.core.Keyword("zip-filter","is-node?","zip-filter/is-node?",-1966970687).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,rtn));
} else {
return and__4120__auto__;
}
})())){
return (new cljs.core.List(null,rtn,null,(1),null));
} else {
if(cljs.core._EQ_.call(null,rtn,true)){
return (new cljs.core.List(null,loc,null,(1),null));
} else {
if(cljs.core._EQ_.call(null,rtn,false)){
return null;
} else {
if((rtn == null)){
return null;
} else {
if(cljs.core.sequential_QMARK_.call(null,rtn)){
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
return cljs.core.reduce.call(null,(function (prevseq,expr){
return cljs.core.mapcat.call(null,(function (p1__20106_SHARP_){
return clojure.data.zip.fixup_apply.call(null,(function (){var or__4131__auto__ = mkpred.call(null,expr);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return expr;
}
})(),p1__20106_SHARP_);
}),prevseq);
}),(new cljs.core.List(null,cljs.core.with_meta.call(null,loc,cljs.core.assoc.call(null,cljs.core.meta.call(null,loc),new cljs.core.Keyword("zip-filter","is-node?","zip-filter/is-node?",-1966970687),true)),null,(1),null)),preds);
});

//# sourceMappingURL=zip.js.map
