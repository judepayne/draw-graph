// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('lib_draw_graph.geometry');
goog.require('cljs.core');
goog.require('cljs.core.constants');
/**
 * Returns true if m1 and m2 are in collision with each other.
 * sep is a single distance to be taken into consideration.
 */
lib_draw_graph.geometry.overlaps_QMARK_ = (function lib_draw_graph$geometry$overlaps_QMARK_(sep,m1,m2){
return (((cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(m1) < ((cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(m2) + cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(m2)) + sep))) && ((((cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(m1) + cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(m1)) + sep) > cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(m2))) && ((cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(m1) < ((cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(m2) + cljs.core.cst$kw$h.cljs$core$IFn$_invoke$arity$1(m2)) + sep))) && ((((cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(m1) + cljs.core.cst$kw$h.cljs$core$IFn$_invoke$arity$1(m1)) + sep) > cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(m2))));
});
/**
 * Returns true if m is completely inside m1.
 */
lib_draw_graph.geometry.inside_QMARK_ = (function lib_draw_graph$geometry$inside_QMARK_(m1,m){
return (((cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(m) >= cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(m1))) && ((cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(m) >= cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(m1))) && (((cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(m) + cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(m)) <= (cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(m1) + cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(m1)))) && (((cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(m) + cljs.core.cst$kw$h.cljs$core$IFn$_invoke$arity$1(m)) <= (cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(m1) + cljs.core.cst$kw$h.cljs$core$IFn$_invoke$arity$1(m1)))));
});
/**
 * Returns rect where the boundary is shifted inwards by the sep (separation).
 * sep is either a single integer or is a map of individual :l :r :t :b
 * (left right top bottom) separation distances that should used in the shift.
 */
lib_draw_graph.geometry.inner_rect = (function lib_draw_graph$geometry$inner_rect(sep,rect){
if(typeof sep === 'number'){
var G__11142 = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$l,sep,cljs.core.cst$kw$r,sep,cljs.core.cst$kw$t,sep,cljs.core.cst$kw$b,sep], null);
var G__11143 = rect;
return (lib_draw_graph.geometry.inner_rect.cljs$core$IFn$_invoke$arity$2 ? lib_draw_graph.geometry.inner_rect.cljs$core$IFn$_invoke$arity$2(G__11142,G__11143) : lib_draw_graph.geometry.inner_rect.call(null,G__11142,G__11143));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(rect,cljs.core.cst$kw$x,(cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(rect) + cljs.core.cst$kw$l.cljs$core$IFn$_invoke$arity$1(sep)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$y,(cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(rect) + cljs.core.cst$kw$t.cljs$core$IFn$_invoke$arity$1(sep)),cljs.core.cst$kw$w,((cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(rect) - cljs.core.cst$kw$r.cljs$core$IFn$_invoke$arity$1(sep)) - cljs.core.cst$kw$l.cljs$core$IFn$_invoke$arity$1(sep)),cljs.core.cst$kw$h,((cljs.core.cst$kw$h.cljs$core$IFn$_invoke$arity$1(rect) - cljs.core.cst$kw$b.cljs$core$IFn$_invoke$arity$1(sep)) - cljs.core.cst$kw$t.cljs$core$IFn$_invoke$arity$1(sep))], 0));
}
});
/**
 * Returns true if m2 has grown from m1
 */
lib_draw_graph.geometry.bigger_QMARK_ = (function lib_draw_graph$geometry$bigger_QMARK_(m1,m2){
return (((cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(m2) < cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(m1))) || ((cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(m2) < cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(m1))) || ((cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(m2) > cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(m1))) || ((cljs.core.cst$kw$h.cljs$core$IFn$_invoke$arity$1(m2) > cljs.core.cst$kw$h.cljs$core$IFn$_invoke$arity$1(m1))));
});
lib_draw_graph.geometry.area = (function lib_draw_graph$geometry$area(m){
return (cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(m) * cljs.core.cst$kw$h.cljs$core$IFn$_invoke$arity$1(m));
});
