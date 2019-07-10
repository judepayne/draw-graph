goog.provide('lib_draw_graph.anneal');
goog.require('cljs.core');
goog.require('lib_draw_graph.geometry');
goog.require('lib_draw_graph.util');
lib_draw_graph.anneal.max_move_default = (14);
lib_draw_graph.anneal.PEN = (1000000);
lib_draw_graph.anneal.job_env = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
lib_draw_graph.anneal.annealing = (function lib_draw_graph$anneal$annealing(var_args){
var args__4736__auto__ = [];
var len__4730__auto___36193 = arguments.length;
var i__4731__auto___36194 = (0);
while(true){
if((i__4731__auto___36194 < len__4730__auto___36193)){
args__4736__auto__.push((arguments[i__4731__auto___36194]));

var G__36195 = (i__4731__auto___36194 + (1));
i__4731__auto___36194 = G__36195;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((8) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((8)),(0),null)):null);
return lib_draw_graph.anneal.annealing.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),argseq__4737__auto__);
});

lib_draw_graph.anneal.annealing.cljs$core$IFn$_invoke$arity$variadic = (function (initial,max_iter,min_cost,constraints,neighbor_fn,cost_fn,p_fn,temp_fn,p__36112){
var map__36113 = p__36112;
var map__36113__$1 = (((((!((map__36113 == null))))?(((((map__36113.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36113.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36113):map__36113);
var dims = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36113__$1,new cljs.core.Keyword(null,"dims","dims",-466522889),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null));
var terminate_early_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36113__$1,new cljs.core.Keyword(null,"terminate-early?","terminate-early?",-74748151),false);
var x_retard = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36113__$1,new cljs.core.Keyword(null,"x-retard","x-retard",1308817436),null);
var y_retard = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36113__$1,new cljs.core.Keyword(null,"y-retard","y-retard",1549838503),null);
var max_move = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36113__$1,new cljs.core.Keyword(null,"max-move","max-move",-879805405),(14));
var cost = (cost_fn.cljs$core$IFn$_invoke$arity$2 ? cost_fn.cljs$core$IFn$_invoke$arity$2(constraints,initial) : cost_fn.call(null,constraints,initial));
var last_cost = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cost);
cljs.core.reset_BANG_(lib_draw_graph.anneal.job_env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj-count","obj-count",-2111129988),cljs.core.count(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(initial))], null));

var state = initial;
var cost__$1 = cost;
var k = (1);
while(true){
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.rem(k,(500)));
if(and__4120__auto__){
var and__4120__auto____$1 = terminate_early_QMARK_;
if(cljs.core.truth_(and__4120__auto____$1)){
return (5.0E-5 > (function (){var lc = cljs.core.deref(last_cost);
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
var t = (function (){var G__36115 = (k / max_iter);
return (temp_fn.cljs$core$IFn$_invoke$arity$1 ? temp_fn.cljs$core$IFn$_invoke$arity$1(G__36115) : temp_fn.call(null,G__36115));
})();
var next_state = (neighbor_fn.cljs$core$IFn$_invoke$arity$5 ? neighbor_fn.cljs$core$IFn$_invoke$arity$5(state,dims,x_retard,y_retard,max_move) : neighbor_fn.call(null,state,dims,x_retard,y_retard,max_move));
var next_cost = (cost_fn.cljs$core$IFn$_invoke$arity$3 ? cost_fn.cljs$core$IFn$_invoke$arity$3(constraints,state,next_state) : cost_fn.call(null,constraints,state,next_state));
if(((p_fn.cljs$core$IFn$_invoke$arity$3 ? p_fn.cljs$core$IFn$_invoke$arity$3(cost__$1,next_cost,t) : p_fn.call(null,cost__$1,next_cost,t)) > cljs.core.rand.cljs$core$IFn$_invoke$arity$0())){
var G__36219 = new cljs.core.Keyword(null,"next-state","next-state",-1428728252).cljs$core$IFn$_invoke$arity$1(next_state);
var G__36220 = next_cost;
var G__36221 = (k + (1));
state = G__36219;
cost__$1 = G__36220;
k = G__36221;
continue;
} else {
var G__36223 = state;
var G__36224 = cost__$1;
var G__36225 = (k + (1));
state = G__36223;
cost__$1 = G__36224;
k = G__36225;
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
lib_draw_graph.anneal.annealing.cljs$lang$applyTo = (function (seq36099){
var G__36100 = cljs.core.first(seq36099);
var seq36099__$1 = cljs.core.next(seq36099);
var G__36101 = cljs.core.first(seq36099__$1);
var seq36099__$2 = cljs.core.next(seq36099__$1);
var G__36102 = cljs.core.first(seq36099__$2);
var seq36099__$3 = cljs.core.next(seq36099__$2);
var G__36103 = cljs.core.first(seq36099__$3);
var seq36099__$4 = cljs.core.next(seq36099__$3);
var G__36104 = cljs.core.first(seq36099__$4);
var seq36099__$5 = cljs.core.next(seq36099__$4);
var G__36105 = cljs.core.first(seq36099__$5);
var seq36099__$6 = cljs.core.next(seq36099__$5);
var G__36106 = cljs.core.first(seq36099__$6);
var seq36099__$7 = cljs.core.next(seq36099__$6);
var G__36107 = cljs.core.first(seq36099__$7);
var seq36099__$8 = cljs.core.next(seq36099__$7);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36100,G__36101,G__36102,G__36103,G__36104,G__36105,G__36106,G__36107,seq36099__$8);
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
var G__36126 = dim;
var G__36126__$1 = (((G__36126 instanceof cljs.core.Keyword))?G__36126.fqn:null);
switch (G__36126__$1) {
case "x":
if(cljs.core.truth_((function (){var and__4120__auto__ = x_retard;
if(cljs.core.truth_(and__4120__auto__)){
return (!((x_retard === (0))));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(rect,new cljs.core.Keyword(null,"x","x",2099068185),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(rect) + cljs.core.quot(delta,x_retard))),new cljs.core.Keyword(null,"w","w",354169001),(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(rect) - cljs.core.quot(delta,x_retard)));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(rect,new cljs.core.Keyword(null,"x","x",2099068185),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(rect) + delta)),new cljs.core.Keyword(null,"w","w",354169001),(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(rect) - delta));
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
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(rect,new cljs.core.Keyword(null,"y","y",-1757859776),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(rect) + cljs.core.quot(delta,y_retard))),new cljs.core.Keyword(null,"h","h",1109658740),(new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(rect) - cljs.core.quot(delta,y_retard)));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(rect,new cljs.core.Keyword(null,"y","y",-1757859776),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(rect) + delta)),new cljs.core.Keyword(null,"h","h",1109658740),(new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(rect) - delta));
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
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(rect,new cljs.core.Keyword(null,"w","w",354169001),(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(rect) + cljs.core.quot(delta,x_retard)));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(rect,new cljs.core.Keyword(null,"w","w",354169001),(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(rect) + delta));
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
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(rect,new cljs.core.Keyword(null,"h","h",1109658740),(new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(rect) + cljs.core.quot(delta,y_retard)));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(rect,new cljs.core.Keyword(null,"h","h",1109658740),(new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(rect) + delta));
}

}
});
lib_draw_graph.anneal.state__GT_boundary = (function lib_draw_graph$anneal$state__GT_boundary(state){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (item){
return new cljs.core.Keyword(null,"boundary","boundary",-2000996754).cljs$core$IFn$_invoke$arity$1(item);
}),state));
});
lib_draw_graph.anneal.state__GT_objects = (function lib_draw_graph$anneal$state__GT_objects(state){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (item){
return cljs.core.not(new cljs.core.Keyword(null,"boundary","boundary",-2000996754).cljs$core$IFn$_invoke$arity$1(item));
}),state);
});
/**
 * Varies a random item from state and returns the new state
 *   after checking that the new state passes constraints.
 */
lib_draw_graph.anneal.neighbor_fn = (function lib_draw_graph$anneal$neighbor_fn(state,dims,x_retard,y_retard,max_move){
var state_SINGLEQUOTE_ = new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(state);
var item = cljs.core.rand_nth(state_SINGLEQUOTE_);
var next = lib_draw_graph.anneal.vary_rect(item,dims,x_retard,y_retard,max_move);
var next_state = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"objects","objects",2099713734),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (state_SINGLEQUOTE_,item,next){
return (function (p1__36145_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(item,p1__36145_SHARP_);
});})(state_SINGLEQUOTE_,item,next))
,state_SINGLEQUOTE_),next));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next-state","next-state",-1428728252),new cljs.core.Keyword(null,"objects","objects",2099713734)], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(next),new cljs.core.Keyword(null,"next-state","next-state",-1428728252),next_state], null);
});
lib_draw_graph.anneal.find_first = (function lib_draw_graph$anneal$find_first(pred,coll){
return cljs.core.some((function (p1__36152_SHARP_){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(p1__36152_SHARP_) : pred.call(null,p1__36152_SHARP_)))){
return p1__36152_SHARP_;
} else {
return null;
}
}),coll);
});
/**
 * returns the varied item when passed a neighbor-fn output map
 */
lib_draw_graph.anneal.__GT_varied = (function lib_draw_graph$anneal$__GT_varied(m){
var temp__5718__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5718__auto__)){
var nm = temp__5718__auto__;
return lib_draw_graph.anneal.find_first(((function (nm,temp__5718__auto__){
return (function (n){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nm,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(n));
});})(nm,temp__5718__auto__))
,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(m)));
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(m));
}
});
/**
 * Checks that the new (proposed) state item satisfies constraints.
 */
lib_draw_graph.anneal.passes_constraints_QMARK_ = (function lib_draw_graph$anneal$passes_constraints_QMARK_(constraints,state,next_state){
var nm = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(next_state);
var item = lib_draw_graph.anneal.__GT_varied(next_state);
var prev_item = lib_draw_graph.anneal.find_first(((function (nm,item){
return (function (p1__36158_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nm,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__36158_SHARP_));
});})(nm,item))
,new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(state));
var sep = new cljs.core.Keyword(null,"collision","collision",-201625508).cljs$core$IFn$_invoke$arity$1(constraints);
var bdry = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(next_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next-state","next-state",-1428728252),new cljs.core.Keyword(null,"boundary","boundary",-2000996754)], null));
var others = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (nm,item,prev_item,sep,bdry){
return (function (p1__36159_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__36159_SHARP_),nm);
});})(nm,item,prev_item,sep,bdry))
,new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(state));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (nm,item,prev_item,sep,bdry,others){
return (function (a,p__36169){
var vec__36170 = p__36169;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36170,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36170,(1),null);
var and__4120__auto__ = a;
if(cljs.core.truth_(and__4120__auto__)){
var G__36175 = k;
var G__36175__$1 = (((G__36175 instanceof cljs.core.Keyword))?G__36175.fqn:null);
switch (G__36175__$1) {
case "grow":
if(cljs.core.truth_(v)){
return lib_draw_graph.geometry.bigger_QMARK_(prev_item,item);
} else {
return true;
}

break;
case "boundary":
if(cljs.core.truth_(v)){
return lib_draw_graph.geometry.inside_QMARK_(bdry,item);
} else {
return true;
}

break;
case "collision":
if(cljs.core.truth_(sep)){
return cljs.core.not_any_QMARK_(((function (G__36175,G__36175__$1,and__4120__auto__,vec__36170,k,v,nm,item,prev_item,sep,bdry,others){
return (function (p1__36160_SHARP_){
return lib_draw_graph.geometry.overlaps_QMARK_(sep,item,p1__36160_SHARP_);
});})(G__36175,G__36175__$1,and__4120__auto__,vec__36170,k,v,nm,item,prev_item,sep,bdry,others))
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
return cljs.core.not_any_QMARK_(((function (G__36175,G__36175__$1,and__4120__auto__,vec__36170,k,v,nm,item,prev_item,sep,bdry,others){
return (function (p1__36161_SHARP_){
return lib_draw_graph.geometry.overlaps_QMARK_(sep,item,p1__36161_SHARP_);
});})(G__36175,G__36175__$1,and__4120__auto__,vec__36170,k,v,nm,item,prev_item,sep,bdry,others))
,v);
} else {
return true;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36175__$1)].join('')));

}
} else {
return and__4120__auto__;
}
});})(nm,item,prev_item,sep,bdry,others))
,true,constraints);
});
/**
 * Calculates cost, which is total bounded area minus sum of current areas.
 *   For the initial call to calculate the system's cost, requires only constraints and state.
 *   Subsequent calls require the state, next-state and k, the key of the entry that has
 *   changed between them.
 */
lib_draw_graph.anneal.cost_fn = (function lib_draw_graph$anneal$cost_fn(var_args){
var G__36186 = arguments.length;
switch (G__36186) {
case 2:
return lib_draw_graph.anneal.cost_fn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return lib_draw_graph.anneal.cost_fn.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

lib_draw_graph.anneal.cost_fn.cljs$core$IFn$_invoke$arity$2 = (function (constraints,state){
var boundary = new cljs.core.Keyword(null,"boundary","boundary",-2000996754).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.empty_QMARK_(boundary)){
throw lib_draw_graph.util.err("no boundary condition!");
} else {
var bounded_area = lib_draw_graph.geometry.area(boundary);
return (bounded_area - cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (bounded_area,boundary){
return (function (a,c){
return (a + lib_draw_graph.geometry.area(c));
});})(bounded_area,boundary))
,(0),new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(state)));
}
});

lib_draw_graph.anneal.cost_fn.cljs$core$IFn$_invoke$arity$3 = (function (constraints,state,next_state){
var bounded_area = lib_draw_graph.geometry.area(new cljs.core.Keyword(null,"boundary","boundary",-2000996754).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"next-state","next-state",-1428728252).cljs$core$IFn$_invoke$arity$1(next_state)));
var cost = (bounded_area - cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (bounded_area){
return (function (a,c){
return (a + lib_draw_graph.geometry.area(c));
});})(bounded_area))
,(0),new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"next-state","next-state",-1428728252).cljs$core$IFn$_invoke$arity$1(next_state))));
var valid_move_QMARK_ = lib_draw_graph.anneal.passes_constraints_QMARK_(constraints,state,next_state);
var penalty = (cljs.core.truth_(valid_move_QMARK_)?(0):(1000000));
return (cost + penalty);
});

lib_draw_graph.anneal.cost_fn.cljs$lang$maxFixedArity = 3;

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
var G__36190 = ((-1) * (diff / t));
return Math.exp(G__36190);
}
});

//# sourceMappingURL=lib_draw_graph.anneal.js.map
