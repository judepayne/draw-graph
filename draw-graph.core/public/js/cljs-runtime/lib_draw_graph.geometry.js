goog.provide('lib_draw_graph.geometry');
goog.require('cljs.core');
/**
 * Returns true if m1 and m2 are in collision with each other.
 * sep is a single distance to be taken into consideration.
 */
lib_draw_graph.geometry.overlaps_QMARK_ = (function lib_draw_graph$geometry$overlaps_QMARK_(sep,m1,m2){
return (((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(m1) < ((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(m2) + new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(m2)) + sep))) && ((((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(m1) + new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(m1)) + sep) > new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(m2))) && ((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(m1) < ((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(m2) + new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(m2)) + sep))) && ((((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(m1) + new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(m1)) + sep) > new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(m2))));
});
/**
 * Returns true if m is completely inside m1.
 */
lib_draw_graph.geometry.inside_QMARK_ = (function lib_draw_graph$geometry$inside_QMARK_(m1,m){
return (((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(m) >= new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(m1))) && ((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(m) >= new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(m1))) && (((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(m) + new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(m)) <= (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(m1) + new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(m1)))) && (((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(m) + new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(m)) <= (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(m1) + new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(m1)))));
});
/**
 * Returns rect where the boundary is shifted inwards by the sep (separation).
 * sep is either a single integer or is a map of individual :l :r :t :b
 * (left right top bottom) separation distances that should used in the shift.
 */
lib_draw_graph.geometry.inner_rect = (function lib_draw_graph$geometry$inner_rect(sep,rect){
if(typeof sep === 'number'){
var G__36087 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"l","l",1395893423),sep,new cljs.core.Keyword(null,"r","r",-471384190),sep,new cljs.core.Keyword(null,"t","t",-1397832519),sep,new cljs.core.Keyword(null,"b","b",1482224470),sep], null);
var G__36088 = rect;
return (lib_draw_graph.geometry.inner_rect.cljs$core$IFn$_invoke$arity$2 ? lib_draw_graph.geometry.inner_rect.cljs$core$IFn$_invoke$arity$2(G__36087,G__36088) : lib_draw_graph.geometry.inner_rect.call(null,G__36087,G__36088));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(rect,new cljs.core.Keyword(null,"x","x",2099068185),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(rect) + new cljs.core.Keyword(null,"l","l",1395893423).cljs$core$IFn$_invoke$arity$1(sep)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(rect) + new cljs.core.Keyword(null,"t","t",-1397832519).cljs$core$IFn$_invoke$arity$1(sep)),new cljs.core.Keyword(null,"w","w",354169001),((new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(rect) - new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(sep)) - new cljs.core.Keyword(null,"l","l",1395893423).cljs$core$IFn$_invoke$arity$1(sep)),new cljs.core.Keyword(null,"h","h",1109658740),((new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(rect) - new cljs.core.Keyword(null,"b","b",1482224470).cljs$core$IFn$_invoke$arity$1(sep)) - new cljs.core.Keyword(null,"t","t",-1397832519).cljs$core$IFn$_invoke$arity$1(sep))], 0));
}
});
/**
 * Returns true if m2 has grown from m1
 */
lib_draw_graph.geometry.bigger_QMARK_ = (function lib_draw_graph$geometry$bigger_QMARK_(m1,m2){
return (((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(m2) < new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(m1))) || ((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(m2) < new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(m1))) || ((new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(m2) > new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(m1))) || ((new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(m2) > new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(m1))));
});
lib_draw_graph.geometry.area = (function lib_draw_graph$geometry$area(m){
return (new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(m) * new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(m));
});

//# sourceMappingURL=lib_draw_graph.geometry.js.map
