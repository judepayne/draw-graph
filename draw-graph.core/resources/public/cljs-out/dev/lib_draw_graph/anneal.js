// Compiled by ClojureScript 1.10.520 {}
goog.provide('lib_draw_graph.anneal');
goog.require('cljs.core');
goog.require('lib_draw_graph.geometry');
goog.require('lib_draw_graph.util');
lib_draw_graph.anneal.max_move_default = (14);
lib_draw_graph.anneal.PEN = (1000000);
lib_draw_graph.anneal.annealing = (function lib_draw_graph$anneal$annealing(var_args){
var args__4736__auto__ = [];
var len__4730__auto___9346 = arguments.length;
var i__4731__auto___9347 = (0);
while(true){
if((i__4731__auto___9347 < len__4730__auto___9346)){
args__4736__auto__.push((arguments[i__4731__auto___9347]));

var G__9348 = (i__4731__auto___9347 + (1));
i__4731__auto___9347 = G__9348;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((8) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((8)),(0),null)):null);
return lib_draw_graph.anneal.annealing.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),argseq__4737__auto__);
});

lib_draw_graph.anneal.annealing.cljs$core$IFn$_invoke$arity$variadic = (function (initial,max_iter,min_cost,constraints,neighbor_fn,cost_fn,p_fn,temp_fn,p__9343){
var map__9344 = p__9343;
var map__9344__$1 = (((((!((map__9344 == null))))?(((((map__9344.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9344.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9344):map__9344);
var dims = cljs.core.get.call(null,map__9344__$1,new cljs.core.Keyword(null,"dims","dims",-466522889),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null));
var terminate_early_QMARK_ = cljs.core.get.call(null,map__9344__$1,new cljs.core.Keyword(null,"terminate-early?","terminate-early?",-74748151),false);
var x_retard = cljs.core.get.call(null,map__9344__$1,new cljs.core.Keyword(null,"x-retard","x-retard",1308817436),null);
var y_retard = cljs.core.get.call(null,map__9344__$1,new cljs.core.Keyword(null,"y-retard","y-retard",1549838503),null);
var max_move = cljs.core.get.call(null,map__9344__$1,new cljs.core.Keyword(null,"max-move","max-move",-879805405),(14));
var cost = cost_fn.call(null,constraints,initial);
var last_cost = cljs.core.atom.call(null,cost);
var state = initial;
var cost__$1 = cost;
var k = (1);
while(true){
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core._EQ_.call(null,(0),cljs.core.rem.call(null,k,(500)));
if(and__4120__auto__){
var and__4120__auto____$1 = terminate_early_QMARK_;
if(cljs.core.truth_(and__4120__auto____$1)){
return (1.0E-4 > (function (){var lc = cljs.core.deref.call(null,last_cost);
var del_cost = ((lc - cost__$1) / cost__$1);
cljs.core.reset_BANG_.call(null,last_cost,cost__$1);

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
var t = temp_fn.call(null,(k / max_iter));
var next_state = neighbor_fn.call(null,state,dims,x_retard,y_retard,max_move);
var next_cost = cost_fn.call(null,constraints,state,cljs.core.second.call(null,next_state),cljs.core.first.call(null,next_state));
if((p_fn.call(null,cost__$1,next_cost,t) > cljs.core.rand.call(null))){
var G__9349 = cljs.core.second.call(null,next_state);
var G__9350 = next_cost;
var G__9351 = (k + (1));
state = G__9349;
cost__$1 = G__9350;
k = G__9351;
continue;
} else {
var G__9352 = state;
var G__9353 = cost__$1;
var G__9354 = (k + (1));
state = G__9352;
cost__$1 = G__9353;
k = G__9354;
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
lib_draw_graph.anneal.annealing.cljs$lang$applyTo = (function (seq9334){
var G__9335 = cljs.core.first.call(null,seq9334);
var seq9334__$1 = cljs.core.next.call(null,seq9334);
var G__9336 = cljs.core.first.call(null,seq9334__$1);
var seq9334__$2 = cljs.core.next.call(null,seq9334__$1);
var G__9337 = cljs.core.first.call(null,seq9334__$2);
var seq9334__$3 = cljs.core.next.call(null,seq9334__$2);
var G__9338 = cljs.core.first.call(null,seq9334__$3);
var seq9334__$4 = cljs.core.next.call(null,seq9334__$3);
var G__9339 = cljs.core.first.call(null,seq9334__$4);
var seq9334__$5 = cljs.core.next.call(null,seq9334__$4);
var G__9340 = cljs.core.first.call(null,seq9334__$5);
var seq9334__$6 = cljs.core.next.call(null,seq9334__$5);
var G__9341 = cljs.core.first.call(null,seq9334__$6);
var seq9334__$7 = cljs.core.next.call(null,seq9334__$6);
var G__9342 = cljs.core.first.call(null,seq9334__$7);
var seq9334__$8 = cljs.core.next.call(null,seq9334__$7);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9335,G__9336,G__9337,G__9338,G__9339,G__9340,G__9341,G__9342,seq9334__$8);
});

lib_draw_graph.anneal.random_move = (function lib_draw_graph$anneal$random_move(max_move){

var small_move_prob = (3);
var small_move = (5);
var mm = ((((cljs.core.rand_int.call(null,small_move_prob) + (1)) > (small_move_prob - (1))))?small_move:max_move);
return (cljs.core.rand_int.call(null,((2) * mm)) - mm);
});
/**
 * When a rectangle/ polygon is defined with a point, width and height
 *   (as opposed to two points), when varying the x or y of the point, it
 *   is necessary to adjust the width or height as well to be consistent
 *   with a rectangle/ polygon specified as two x,y points.
 */
lib_draw_graph.anneal.vary_rect = (function lib_draw_graph$anneal$vary_rect(rect,dims,x_retard,y_retard,max_move){
var dim = cljs.core.rand_nth.call(null,dims);
var delta = lib_draw_graph.anneal.random_move.call(null,max_move);
var G__9355 = dim;
var G__9355__$1 = (((G__9355 instanceof cljs.core.Keyword))?G__9355.fqn:null);
switch (G__9355__$1) {
case "x":
if(cljs.core.truth_((function (){var and__4120__auto__ = x_retard;
if(cljs.core.truth_(and__4120__auto__)){
return (!((x_retard === (0))));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,rect,new cljs.core.Keyword(null,"x","x",2099068185),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(rect) + cljs.core.quot.call(null,delta,x_retard))),new cljs.core.Keyword(null,"w","w",354169001),(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(rect) - cljs.core.quot.call(null,delta,x_retard)));
} else {
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,rect,new cljs.core.Keyword(null,"x","x",2099068185),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(rect) + delta)),new cljs.core.Keyword(null,"w","w",354169001),(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(rect) - delta));
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
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,rect,new cljs.core.Keyword(null,"y","y",-1757859776),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(rect) + cljs.core.quot.call(null,delta,y_retard))),new cljs.core.Keyword(null,"h","h",1109658740),(new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(rect) - cljs.core.quot.call(null,delta,y_retard)));
} else {
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,rect,new cljs.core.Keyword(null,"y","y",-1757859776),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(rect) + delta)),new cljs.core.Keyword(null,"h","h",1109658740),(new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(rect) - delta));
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
return cljs.core.assoc.call(null,rect,new cljs.core.Keyword(null,"w","w",354169001),(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(rect) + cljs.core.quot.call(null,delta,x_retard)));
} else {
return cljs.core.assoc.call(null,rect,new cljs.core.Keyword(null,"w","w",354169001),(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(rect) + delta));
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
return cljs.core.assoc.call(null,rect,new cljs.core.Keyword(null,"h","h",1109658740),(new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(rect) + cljs.core.quot.call(null,delta,y_retard)));
} else {
return cljs.core.assoc.call(null,rect,new cljs.core.Keyword(null,"h","h",1109658740),(new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(rect) + delta));
}

}
});
/**
 * Varies a random item from state and returns the new state
 *   after checking that the new state passes constraints.
 */
lib_draw_graph.anneal.neighbor_fn = (function lib_draw_graph$anneal$neighbor_fn(state,dims,x_retard,y_retard,max_move){
var k = cljs.core.rand_nth.call(null,cljs.core.keys.call(null,state));
var next = lib_draw_graph.anneal.vary_rect.call(null,cljs.core.get.call(null,state,k),dims,x_retard,y_retard,max_move);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.assoc.call(null,state,k,next)], null);
});
/**
 * Checks that the new (proposed) state item satisfies constraints.
 */
lib_draw_graph.anneal.passes_constraints_QMARK_ = (function lib_draw_graph$anneal$passes_constraints_QMARK_(constraints,state,next_state,varied){
var prev_item = cljs.core.get.call(null,state,varied);
var item = cljs.core.get.call(null,next_state,varied);
var others = cljs.core.vals.call(null,cljs.core.dissoc.call(null,next_state,varied));
var sep = new cljs.core.Keyword(null,"collision","collision",-201625508).cljs$core$IFn$_invoke$arity$1(constraints);
return cljs.core.reduce.call(null,((function (prev_item,item,others,sep){
return (function (a,p__9359){
var vec__9360 = p__9359;
var k = cljs.core.nth.call(null,vec__9360,(0),null);
var v = cljs.core.nth.call(null,vec__9360,(1),null);
var and__4120__auto__ = a;
if(cljs.core.truth_(and__4120__auto__)){
var G__9363 = k;
var G__9363__$1 = (((G__9363 instanceof cljs.core.Keyword))?G__9363.fqn:null);
switch (G__9363__$1) {
case "grow":
if(cljs.core.truth_(v)){
return lib_draw_graph.geometry.bigger_QMARK_.call(null,prev_item,item);
} else {
return true;
}

break;
case "boundary":
return lib_draw_graph.geometry.inside_QMARK_.call(null,v,item);

break;
case "collision":
if(cljs.core.truth_(sep)){
return cljs.core.not_any_QMARK_.call(null,((function (G__9363,G__9363__$1,and__4120__auto__,vec__9360,k,v,prev_item,item,others,sep){
return (function (p1__9357_SHARP_){
return lib_draw_graph.geometry.overlaps_QMARK_.call(null,sep,item,p1__9357_SHARP_);
});})(G__9363,G__9363__$1,and__4120__auto__,vec__9360,k,v,prev_item,item,others,sep))
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
return cljs.core.not_any_QMARK_.call(null,((function (G__9363,G__9363__$1,and__4120__auto__,vec__9360,k,v,prev_item,item,others,sep){
return (function (p1__9358_SHARP_){
return lib_draw_graph.geometry.overlaps_QMARK_.call(null,sep,item,p1__9358_SHARP_);
});})(G__9363,G__9363__$1,and__4120__auto__,vec__9360,k,v,prev_item,item,others,sep))
,cljs.core.vals.call(null,v));
} else {
return true;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__9363__$1)].join('')));

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
var G__9366 = arguments.length;
switch (G__9366) {
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
var boundary = new cljs.core.Keyword(null,"boundary","boundary",-2000996754).cljs$core$IFn$_invoke$arity$1(constraints);
if(cljs.core.empty_QMARK_.call(null,boundary)){
throw lib_draw_graph.util.err.call(null,"no boundary condition!");
} else {
var bounded_area = lib_draw_graph.geometry.area.call(null,boundary);
return (bounded_area - cljs.core.reduce.call(null,((function (bounded_area,boundary){
return (function (a,c){
return (a + lib_draw_graph.geometry.area.call(null,c));
});})(bounded_area,boundary))
,(0),cljs.core.vals.call(null,state)));
}
});

lib_draw_graph.anneal.cost_fn.cljs$core$IFn$_invoke$arity$4 = (function (constraints,state,next_state,k){
var bounded_area = lib_draw_graph.geometry.area.call(null,new cljs.core.Keyword(null,"boundary","boundary",-2000996754).cljs$core$IFn$_invoke$arity$1(constraints));
var cost = (bounded_area - cljs.core.reduce.call(null,((function (bounded_area){
return (function (a,c){
return (a + lib_draw_graph.geometry.area.call(null,c));
});})(bounded_area))
,(0),cljs.core.vals.call(null,next_state)));
var penalty = (cljs.core.truth_(lib_draw_graph.anneal.passes_constraints_QMARK_.call(null,constraints,state,next_state,k))?(0):(1000000));
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
return Math.exp(((-1) * (diff / t)));
}
});

//# sourceMappingURL=anneal.js.map
