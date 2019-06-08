// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('lib_draw_graph.anneal');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('lib_draw_graph.geometry');
goog.require('lib_draw_graph.util');
lib_draw_graph.anneal.max_move_default = (14);
lib_draw_graph.anneal.PEN = (1000000);
lib_draw_graph.anneal.annealing = (function lib_draw_graph$anneal$annealing(var_args){
var args__4736__auto__ = [];
var len__4730__auto___11211 = arguments.length;
var i__4731__auto___11212 = (0);
while(true){
if((i__4731__auto___11212 < len__4730__auto___11211)){
args__4736__auto__.push((arguments[i__4731__auto___11212]));

var G__11213 = (i__4731__auto___11212 + (1));
i__4731__auto___11212 = G__11213;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((8) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((8)),(0),null)):null);
return lib_draw_graph.anneal.annealing.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),argseq__4737__auto__);
});

lib_draw_graph.anneal.annealing.cljs$core$IFn$_invoke$arity$variadic = (function (initial,max_iter,min_cost,constraints,neighbor_fn,cost_fn,p_fn,temp_fn,p__11203){
var map__11204 = p__11203;
var map__11204__$1 = (((((!((map__11204 == null))))?(((((map__11204.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11204.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11204):map__11204);
var dims = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__11204__$1,cljs.core.cst$kw$dims,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$x,cljs.core.cst$kw$y,cljs.core.cst$kw$w,cljs.core.cst$kw$h], null));
var terminate_early_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__11204__$1,cljs.core.cst$kw$terminate_DASH_early_QMARK_,false);
var x_retard = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__11204__$1,cljs.core.cst$kw$x_DASH_retard,null);
var y_retard = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__11204__$1,cljs.core.cst$kw$y_DASH_retard,null);
var max_move = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__11204__$1,cljs.core.cst$kw$max_DASH_move,(14));
var cost = (cost_fn.cljs$core$IFn$_invoke$arity$2 ? cost_fn.cljs$core$IFn$_invoke$arity$2(constraints,initial) : cost_fn.call(null,constraints,initial));
var last_cost = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cost);
var state = initial;
var cost__$1 = cost;
var k = (1);
while(true){
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.rem(k,(500)));
if(and__4120__auto__){
var and__4120__auto____$1 = terminate_early_QMARK_;
if(cljs.core.truth_(and__4120__auto____$1)){
return (1.0E-4 > (function (){var lc = cljs.core.deref(last_cost);
var del_cost = ((lc - cost__$1) / cost__$1);
cljs.core.reset_BANG_(last_cost,cost__$1);

return del_cost;
})());
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())){
return state;
} else {
if((((k < max_iter)) && ((cost__$1 > min_cost)))){
var t = (function (){var G__11206 = (k / max_iter);
return (temp_fn.cljs$core$IFn$_invoke$arity$1 ? temp_fn.cljs$core$IFn$_invoke$arity$1(G__11206) : temp_fn.call(null,G__11206));
})();
var next_state = (neighbor_fn.cljs$core$IFn$_invoke$arity$5 ? neighbor_fn.cljs$core$IFn$_invoke$arity$5(state,dims,x_retard,y_retard,max_move) : neighbor_fn.call(null,state,dims,x_retard,y_retard,max_move));
var next_cost = (function (){var G__11207 = constraints;
var G__11208 = state;
var G__11209 = cljs.core.second(next_state);
var G__11210 = cljs.core.first(next_state);
return (cost_fn.cljs$core$IFn$_invoke$arity$4 ? cost_fn.cljs$core$IFn$_invoke$arity$4(G__11207,G__11208,G__11209,G__11210) : cost_fn.call(null,G__11207,G__11208,G__11209,G__11210));
})();
if(((p_fn.cljs$core$IFn$_invoke$arity$3 ? p_fn.cljs$core$IFn$_invoke$arity$3(cost__$1,next_cost,t) : p_fn.call(null,cost__$1,next_cost,t)) > cljs.core.rand.cljs$core$IFn$_invoke$arity$0())){
var G__11214 = cljs.core.second(next_state);
var G__11215 = next_cost;
var G__11216 = (k + (1));
state = G__11214;
cost__$1 = G__11215;
k = G__11216;
continue;
} else {
var G__11217 = state;
var G__11218 = cost__$1;
var G__11219 = (k + (1));
state = G__11217;
cost__$1 = G__11218;
k = G__11219;
continue;
}
} else {
return state;
}
}
break;
}
});

lib_draw_graph.anneal.annealing.cljs$lang$maxFixedArity = (8);

/** @this {Function} */
lib_draw_graph.anneal.annealing.cljs$lang$applyTo = (function (seq11194){
var G__11195 = cljs.core.first(seq11194);
var seq11194__$1 = cljs.core.next(seq11194);
var G__11196 = cljs.core.first(seq11194__$1);
var seq11194__$2 = cljs.core.next(seq11194__$1);
var G__11197 = cljs.core.first(seq11194__$2);
var seq11194__$3 = cljs.core.next(seq11194__$2);
var G__11198 = cljs.core.first(seq11194__$3);
var seq11194__$4 = cljs.core.next(seq11194__$3);
var G__11199 = cljs.core.first(seq11194__$4);
var seq11194__$5 = cljs.core.next(seq11194__$4);
var G__11200 = cljs.core.first(seq11194__$5);
var seq11194__$6 = cljs.core.next(seq11194__$5);
var G__11201 = cljs.core.first(seq11194__$6);
var seq11194__$7 = cljs.core.next(seq11194__$6);
var G__11202 = cljs.core.first(seq11194__$7);
var seq11194__$8 = cljs.core.next(seq11194__$7);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11195,G__11196,G__11197,G__11198,G__11199,G__11200,G__11201,G__11202,seq11194__$8);
});

lib_draw_graph.anneal.random_move = (function lib_draw_graph$anneal$random_move(max_move){

var small_move_prob = (3);
var small_move = (5);
var mm = ((((cljs.core.rand_int(small_move_prob) + (1)) > (small_move_prob - (1))))?small_move:max_move);
return (cljs.core.rand_int(((2) * mm)) - mm);
});
/**
 * When a rectangle/ polygon is defined with a point, width and height
 *   (as opposed to two points), when varying the x or y of the point, it
 *   is necessary to adjust the width or height as well to be consistent
 *   with a rectangle/ polygon specified as two x,y points.
 */
lib_draw_graph.anneal.vary_rect = (function lib_draw_graph$anneal$vary_rect(rect,dims,x_retard,y_retard,max_move){
var dim = cljs.core.rand_nth(dims);
var delta = lib_draw_graph.anneal.random_move(max_move);
var G__11220 = dim;
var G__11220__$1 = (((G__11220 instanceof cljs.core.Keyword))?G__11220.fqn:null);
switch (G__11220__$1) {
case "x":
if(cljs.core.truth_((function (){var and__4120__auto__ = x_retard;
if(cljs.core.truth_(and__4120__auto__)){
return (!((x_retard === (0))));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(rect,cljs.core.cst$kw$x,(cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(rect) + cljs.core.quot(delta,x_retard))),cljs.core.cst$kw$w,(cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(rect) - cljs.core.quot(delta,x_retard)));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(rect,cljs.core.cst$kw$x,(cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(rect) + delta)),cljs.core.cst$kw$w,(cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(rect) - delta));
}

break;
case "y":
if(cljs.core.truth_((function (){var and__4120__auto__ = y_retard;
if(cljs.core.truth_(and__4120__auto__)){
return (!((y_retard === (0))));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(rect,cljs.core.cst$kw$y,(cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(rect) + cljs.core.quot(delta,y_retard))),cljs.core.cst$kw$h,(cljs.core.cst$kw$h.cljs$core$IFn$_invoke$arity$1(rect) - cljs.core.quot(delta,y_retard)));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(rect,cljs.core.cst$kw$y,(cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(rect) + delta)),cljs.core.cst$kw$h,(cljs.core.cst$kw$h.cljs$core$IFn$_invoke$arity$1(rect) - delta));
}

break;
case "w":
if(cljs.core.truth_((function (){var and__4120__auto__ = x_retard;
if(cljs.core.truth_(and__4120__auto__)){
return (!((x_retard === (0))));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(rect,cljs.core.cst$kw$w,(cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(rect) + cljs.core.quot(delta,x_retard)));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(rect,cljs.core.cst$kw$w,(cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(rect) + delta));
}

break;
default:
if(cljs.core.truth_((function (){var and__4120__auto__ = y_retard;
if(cljs.core.truth_(and__4120__auto__)){
return (!((y_retard === (0))));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(rect,cljs.core.cst$kw$h,(cljs.core.cst$kw$h.cljs$core$IFn$_invoke$arity$1(rect) + cljs.core.quot(delta,y_retard)));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(rect,cljs.core.cst$kw$h,(cljs.core.cst$kw$h.cljs$core$IFn$_invoke$arity$1(rect) + delta));
}

}
});
/**
 * Varies a random item from state and returns the new state
 *   after checking that the new state passes constraints.
 */
lib_draw_graph.anneal.neighbor_fn = (function lib_draw_graph$anneal$neighbor_fn(state,dims,x_retard,y_retard,max_move){
var k = cljs.core.rand_nth(cljs.core.keys(state));
var next = lib_draw_graph.anneal.vary_rect(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,k),dims,x_retard,y_retard,max_move);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,k,next)], null);
});
/**
 * Checks that the new (proposed) state item satisfies constraints.
 */
lib_draw_graph.anneal.passes_constraints_QMARK_ = (function lib_draw_graph$anneal$passes_constraints_QMARK_(constraints,state,next_state,varied){
var prev_item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,varied);
var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(next_state,varied);
var others = cljs.core.vals(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(next_state,varied));
var sep = cljs.core.cst$kw$collision.cljs$core$IFn$_invoke$arity$1(constraints);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (prev_item,item,others,sep){
return (function (a,p__11224){
var vec__11225 = p__11224;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11225,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11225,(1),null);
var and__4120__auto__ = a;
if(cljs.core.truth_(and__4120__auto__)){
var G__11228 = k;
var G__11228__$1 = (((G__11228 instanceof cljs.core.Keyword))?G__11228.fqn:null);
switch (G__11228__$1) {
case "grow":
if(cljs.core.truth_(v)){
return lib_draw_graph.geometry.bigger_QMARK_(prev_item,item);
} else {
return true;
}

break;
case "boundary":
return lib_draw_graph.geometry.inside_QMARK_(v,item);

break;
case "collision":
if(cljs.core.truth_(sep)){
return cljs.core.not_any_QMARK_(((function (G__11228,G__11228__$1,and__4120__auto__,vec__11225,k,v,prev_item,item,others,sep){
return (function (p1__11222_SHARP_){
return lib_draw_graph.geometry.overlaps_QMARK_(sep,item,p1__11222_SHARP_);
});})(G__11228,G__11228__$1,and__4120__auto__,vec__11225,k,v,prev_item,item,others,sep))
,others);
} else {
return true;
}

break;
case "obstacles":
if(cljs.core.truth_((function (){var and__4120__auto____$1 = v;
if(cljs.core.truth_(and__4120__auto____$1)){
return sep;
} else {
return and__4120__auto____$1;
}
})())){
return cljs.core.not_any_QMARK_(((function (G__11228,G__11228__$1,and__4120__auto__,vec__11225,k,v,prev_item,item,others,sep){
return (function (p1__11223_SHARP_){
return lib_draw_graph.geometry.overlaps_QMARK_(sep,item,p1__11223_SHARP_);
});})(G__11228,G__11228__$1,and__4120__auto__,vec__11225,k,v,prev_item,item,others,sep))
,cljs.core.vals(v));
} else {
return true;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__11228__$1)].join('')));

}
} else {
return and__4120__auto__;
}
});})(prev_item,item,others,sep))
,true,constraints);
});
/**
 * Calculates cost, which is total bounded area minus sum of current areas.
 *   For the initial call to calculate the system's cost, requires only constraints and state.
 *   Subsequent calls require the state, next-state and k, the key of the entry that has
 *   changed between them.
 */
lib_draw_graph.anneal.cost_fn = (function lib_draw_graph$anneal$cost_fn(var_args){
var G__11231 = arguments.length;
switch (G__11231) {
case 2:
return lib_draw_graph.anneal.cost_fn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return lib_draw_graph.anneal.cost_fn.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

lib_draw_graph.anneal.cost_fn.cljs$core$IFn$_invoke$arity$2 = (function (constraints,state){
var boundary = cljs.core.cst$kw$boundary.cljs$core$IFn$_invoke$arity$1(constraints);
if(cljs.core.empty_QMARK_(boundary)){
throw lib_draw_graph.util.err("no boundary condition!");
} else {
var bounded_area = lib_draw_graph.geometry.area(boundary);
return (bounded_area - cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (bounded_area,boundary){
return (function (a,c){
return (a + lib_draw_graph.geometry.area(c));
});})(bounded_area,boundary))
,(0),cljs.core.vals(state)));
}
});

lib_draw_graph.anneal.cost_fn.cljs$core$IFn$_invoke$arity$4 = (function (constraints,state,next_state,k){
var bounded_area = lib_draw_graph.geometry.area(cljs.core.cst$kw$boundary.cljs$core$IFn$_invoke$arity$1(constraints));
var cost = (bounded_area - cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (bounded_area){
return (function (a,c){
return (a + lib_draw_graph.geometry.area(c));
});})(bounded_area))
,(0),cljs.core.vals(next_state)));
var penalty = (cljs.core.truth_(lib_draw_graph.anneal.passes_constraints_QMARK_(constraints,state,next_state,k))?(0):(1000000));
return (cost + penalty);
});

lib_draw_graph.anneal.cost_fn.cljs$lang$maxFixedArity = 4;

/**
 * the temperature. r should be between 0 and 1
 */
lib_draw_graph.anneal.temp_fn = (function lib_draw_graph$anneal$temp_fn(r){
return (1.0 - r);
});
/**
 * the probability of a move function, using Boltzmann
 */
lib_draw_graph.anneal.p_fn = (function lib_draw_graph$anneal$p_fn(c0,c1,t){
var diff = (c1 - c0);
if((c1 < c0)){
return (1);
} else {
var G__11233 = ((-1) * (diff / t));
return Math.exp(G__11233);
}
});
