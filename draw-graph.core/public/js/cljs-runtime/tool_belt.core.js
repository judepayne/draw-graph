goog.provide('tool_belt.core');
goog.require('cljs.core');
goog.require('clojure.walk');
/**
 * true if coll contains elm
 */
tool_belt.core.in_QMARK_ = (function tool_belt$core$in_QMARK_(coll,elm){
return cljs.core.some((function (p1__54032_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(elm,p1__54032_SHARP_);
}),coll);
});
/**
 * true if coll does not contains elm
 */
tool_belt.core.not_in_QMARK_ = cljs.core.complement(tool_belt.core.in_QMARK_);
tool_belt.core.apply_to_if = (function tool_belt$core$apply_to_if(var_args){
var args__4795__auto__ = [];
var len__4789__auto___54201 = arguments.length;
var i__4790__auto___54202 = (0);
while(true){
if((i__4790__auto___54202 < len__4789__auto___54201)){
args__4795__auto__.push((arguments[i__4790__auto___54202]));

var G__54203 = (i__4790__auto___54202 + (1));
i__4790__auto___54202 = G__54203;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return tool_belt.core.apply_to_if.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(tool_belt.core.apply_to_if.cljs$core$IFn$_invoke$arity$variadic = (function (m,test,f,args){

if(cljs.core.truth_(test)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,m,args);
} else {
return m;
}
}));

(tool_belt.core.apply_to_if.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(tool_belt.core.apply_to_if.cljs$lang$applyTo = (function (seq54037){
var G__54038 = cljs.core.first(seq54037);
var seq54037__$1 = cljs.core.next(seq54037);
var G__54039 = cljs.core.first(seq54037__$1);
var seq54037__$2 = cljs.core.next(seq54037__$1);
var G__54040 = cljs.core.first(seq54037__$2);
var seq54037__$3 = cljs.core.next(seq54037__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54038,G__54039,G__54040,seq54037__$3);
}));

/**
 * Concat a collection of colls.
 */
tool_belt.core.join = (function tool_belt$core$join(colls){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,colls);
});
/**
 * Merges maps recursively down.
 */
tool_belt.core.deep_merge = (function tool_belt$core$deep_merge(var_args){
var args__4795__auto__ = [];
var len__4789__auto___54207 = arguments.length;
var i__4790__auto___54208 = (0);
while(true){
if((i__4790__auto___54208 < len__4789__auto___54207)){
args__4795__auto__.push((arguments[i__4790__auto___54208]));

var G__54209 = (i__4790__auto___54208 + (1));
i__4790__auto___54208 = G__54209;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return tool_belt.core.deep_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(tool_belt.core.deep_merge.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function() { 
var tool_belt$core$m__delegate = function (maps__$1){
if(cljs.core.every_QMARK_(cljs.core.map_QMARK_,maps__$1)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,tool_belt$core$m,maps__$1);
} else {
if(cljs.core.every_QMARK_(cljs.core.sequential_QMARK_,maps__$1)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.concat,cljs.core.PersistentVector.EMPTY,maps__$1);
} else {
return maps__$1;

}
}
};
var tool_belt$core$m = function (var_args){
var maps__$1 = null;
if (arguments.length > 0) {
var G__54210__i = 0, G__54210__a = new Array(arguments.length -  0);
while (G__54210__i < G__54210__a.length) {G__54210__a[G__54210__i] = arguments[G__54210__i + 0]; ++G__54210__i;}
  maps__$1 = new cljs.core.IndexedSeq(G__54210__a,0,null);
} 
return tool_belt$core$m__delegate.call(this,maps__$1);};
tool_belt$core$m.cljs$lang$maxFixedArity = 0;
tool_belt$core$m.cljs$lang$applyTo = (function (arglist__54211){
var maps__$1 = cljs.core.seq(arglist__54211);
return tool_belt$core$m__delegate(maps__$1);
});
tool_belt$core$m.cljs$core$IFn$_invoke$arity$variadic = tool_belt$core$m__delegate;
return tool_belt$core$m;
})()
,maps);
}));

(tool_belt.core.deep_merge.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(tool_belt.core.deep_merge.cljs$lang$applyTo = (function (seq54048){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54048));
}));

/**
 * Like merge-with, but merges maps recursively, applying the given fn
 *   only when there's a non-map at a particular level.
 */
tool_belt.core.deep_merge_with = (function tool_belt$core$deep_merge_with(var_args){
var args__4795__auto__ = [];
var len__4789__auto___54214 = arguments.length;
var i__4790__auto___54215 = (0);
while(true){
if((i__4790__auto___54215 < len__4789__auto___54214)){
args__4795__auto__.push((arguments[i__4790__auto___54215]));

var G__54216 = (i__4790__auto___54215 + (1));
i__4790__auto___54215 = G__54216;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return tool_belt.core.deep_merge_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(tool_belt.core.deep_merge_with.cljs$core$IFn$_invoke$arity$variadic = (function (f,maps){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function() { 
var tool_belt$core$m__delegate = function (maps__$1){
if(cljs.core.every_QMARK_(cljs.core.map_QMARK_,maps__$1)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,tool_belt$core$m,maps__$1);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,maps__$1);
}
};
var tool_belt$core$m = function (var_args){
var maps__$1 = null;
if (arguments.length > 0) {
var G__54220__i = 0, G__54220__a = new Array(arguments.length -  0);
while (G__54220__i < G__54220__a.length) {G__54220__a[G__54220__i] = arguments[G__54220__i + 0]; ++G__54220__i;}
  maps__$1 = new cljs.core.IndexedSeq(G__54220__a,0,null);
} 
return tool_belt$core$m__delegate.call(this,maps__$1);};
tool_belt$core$m.cljs$lang$maxFixedArity = 0;
tool_belt$core$m.cljs$lang$applyTo = (function (arglist__54221){
var maps__$1 = cljs.core.seq(arglist__54221);
return tool_belt$core$m__delegate(maps__$1);
});
tool_belt$core$m.cljs$core$IFn$_invoke$arity$variadic = tool_belt$core$m__delegate;
return tool_belt$core$m;
})()
,maps);
}));

(tool_belt.core.deep_merge_with.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(tool_belt.core.deep_merge_with.cljs$lang$applyTo = (function (seq54050){
var G__54051 = cljs.core.first(seq54050);
var seq54050__$1 = cljs.core.next(seq54050);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54051,seq54050__$1);
}));

/**
 * Like update-in but when special key :all is supplied in the ks vector,
 *   all map-entries at that level will be accepted.
 */
tool_belt.core.update_in_all = (function tool_belt$core$update_in_all(var_args){
var args__4795__auto__ = [];
var len__4789__auto___54224 = arguments.length;
var i__4790__auto___54226 = (0);
while(true){
if((i__4790__auto___54226 < len__4789__auto___54224)){
args__4795__auto__.push((arguments[i__4790__auto___54226]));

var G__54227 = (i__4790__auto___54226 + (1));
i__4790__auto___54226 = G__54227;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return tool_belt.core.update_in_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(tool_belt.core.update_in_all.cljs$core$IFn$_invoke$arity$variadic = (function (m,ks,f,args){
var up = (function tool_belt$core$up(m__$1,ks__$1,f__$1,args__$1){
var vec__54064 = ks__$1;
var seq__54065 = cljs.core.seq(vec__54064);
var first__54066 = cljs.core.first(seq__54065);
var seq__54065__$1 = cljs.core.next(seq__54065);
var k = first__54066;
var ks__$2 = seq__54065__$1;
if(ks__$2){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"all","all",892129742))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__54067){
var vec__54069 = p__54067;
var kz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54069,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54069,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,kz,tool_belt$core$up(v,ks__$2,f__$1,args__$1));
}),cljs.core.PersistentArrayMap.EMPTY,m__$1);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k,tool_belt$core$up(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m__$1,k),ks__$2,f__$1,args__$1));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"all","all",892129742))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__54072){
var vec__54073 = p__54072;
var kz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54073,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54073,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,kz,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f__$1,v,args__$1));
}),cljs.core.PersistentArrayMap.EMPTY,m__$1);
} else {
var temp__5733__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m__$1,k);
if(cljs.core.truth_(temp__5733__auto__)){
var v = temp__5733__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f__$1,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m__$1,k),args__$1));
} else {
return m__$1;
}
}
}
});
return up(m,ks,f,args);
}));

(tool_belt.core.update_in_all.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(tool_belt.core.update_in_all.cljs$lang$applyTo = (function (seq54060){
var G__54061 = cljs.core.first(seq54060);
var seq54060__$1 = cljs.core.next(seq54060);
var G__54062 = cljs.core.first(seq54060__$1);
var seq54060__$2 = cljs.core.next(seq54060__$1);
var G__54063 = cljs.core.first(seq54060__$2);
var seq54060__$3 = cljs.core.next(seq54060__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54061,G__54062,G__54063,seq54060__$3);
}));

/**
 * Like update-in-all but only if test is true.
 */
tool_belt.core.update_in_all_if = (function tool_belt$core$update_in_all_if(var_args){
var args__4795__auto__ = [];
var len__4789__auto___54232 = arguments.length;
var i__4790__auto___54233 = (0);
while(true){
if((i__4790__auto___54233 < len__4789__auto___54232)){
args__4795__auto__.push((arguments[i__4790__auto___54233]));

var G__54235 = (i__4790__auto___54233 + (1));
i__4790__auto___54233 = G__54235;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((4) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((4)),(0),null)):null);
return tool_belt.core.update_in_all_if.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4796__auto__);
});

(tool_belt.core.update_in_all_if.cljs$core$IFn$_invoke$arity$variadic = (function (m,test,ks,f,args){
if(cljs.core.truth_(test)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(tool_belt.core.update_in_all,m,ks,f,args);
} else {
return m;
}
}));

(tool_belt.core.update_in_all_if.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(tool_belt.core.update_in_all_if.cljs$lang$applyTo = (function (seq54086){
var G__54087 = cljs.core.first(seq54086);
var seq54086__$1 = cljs.core.next(seq54086);
var G__54088 = cljs.core.first(seq54086__$1);
var seq54086__$2 = cljs.core.next(seq54086__$1);
var G__54089 = cljs.core.first(seq54086__$2);
var seq54086__$3 = cljs.core.next(seq54086__$2);
var G__54090 = cljs.core.first(seq54086__$3);
var seq54086__$4 = cljs.core.next(seq54086__$3);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54087,G__54088,G__54089,G__54090,seq54086__$4);
}));

/**
 * Dissocs at the ks vector in a nested map.
 *   Supplying special key :all in the last position in ks will dissoc all entries.
 *   Supplying :all in another possible will cause all map-entries at that level to be recursed into.
 */
tool_belt.core.dissoc_in = (function tool_belt$core$dissoc_in(m,ks){
var up = (function tool_belt$core$dissoc_in_$_up(m__$1,ks__$1){
var vec__54102 = ks__$1;
var seq__54103 = cljs.core.seq(vec__54102);
var first__54104 = cljs.core.first(seq__54103);
var seq__54103__$1 = cljs.core.next(seq__54103);
var k = first__54104;
var ks__$2 = seq__54103__$1;
if(ks__$2){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"all","all",892129742))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__54106){
var vec__54107 = p__54106;
var kz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54107,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54107,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,kz,tool_belt$core$dissoc_in_$_up(v,ks__$2));
}),cljs.core.PersistentArrayMap.EMPTY,m__$1);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k,tool_belt$core$dissoc_in_$_up(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m__$1,k),ks__$2));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"all","all",892129742))){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__54115){
var vec__54117 = p__54115;
var kz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54117,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54117,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,kz)){
return acc;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,kz,v);
}
}),cljs.core.PersistentArrayMap.EMPTY,m__$1);
}
}
});
return up(m,ks);
});
/**
 * Like dissoc-in, but items are dissoc'd only when (pred value-of-entry) is true.
 */
tool_belt.core.dissoc_in_when = (function tool_belt$core$dissoc_in_when(m,ks,pred){
var up = (function tool_belt$core$dissoc_in_when_$_up(m__$1,ks__$1){
var vec__54145 = ks__$1;
var seq__54146 = cljs.core.seq(vec__54145);
var first__54147 = cljs.core.first(seq__54146);
var seq__54146__$1 = cljs.core.next(seq__54146);
var k = first__54147;
var ks__$2 = seq__54146__$1;
if(ks__$2){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"all","all",892129742))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__54153){
var vec__54155 = p__54153;
var kz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54155,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54155,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,kz,tool_belt$core$dissoc_in_when_$_up(v,ks__$2));
}),cljs.core.PersistentArrayMap.EMPTY,m__$1);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k,tool_belt$core$dissoc_in_when_$_up(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m__$1,k),ks__$2));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"all","all",892129742))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__54167){
var vec__54170 = p__54167;
var kz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54170,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54170,(1),null);
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(v) : pred.call(null,v)))){
return acc;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,kz,v);
}
}),cljs.core.PersistentArrayMap.EMPTY,m__$1);
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__54175){
var vec__54176 = p__54175;
var kz = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54176,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54176,(1),null);
if(cljs.core.truth_(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,kz))?(pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(v) : pred.call(null,v)):false))){
return acc;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,kz,v);
}
}),cljs.core.PersistentArrayMap.EMPTY,m__$1);
}
}
});
return up(m,ks);
});
/**
 * Likes dissoc-in but when the result of the dissoc leaves in empty collection in
 *   the nested map, removes that map-entry that it is in, so cleaning the map from
 *   empty nested collections like ..:b {:a #{} :b 1}...  [:a #{}] would be removed.
 */
tool_belt.core.dissoc_in_clean = (function tool_belt$core$dissoc_in_clean(m,ks){
var k = cljs.core.butlast(ks);
var tgt = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(m,k);
var res = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(tgt,cljs.core.last(ks));
if(cljs.core.empty_QMARK_(res)){
return tool_belt.core.dissoc_in(m,k);
} else {
return tool_belt.core.dissoc_in(m,ks);
}
});
/**
 * Like clojure.walk/prewalk but stateful.
 * parent is the parent of the form. state is recursed down through the form,
 * at each level updated by the state-fn (which must accept previous state, the
 * parent form and the current form. replace-fn accepts the current state and form.
 */
tool_belt.core.prewalk = (function tool_belt$core$prewalk(parent,state,state_fn,replace_fn,form){
var pw = (function tool_belt$core$prewalk_$_pw(parent__$1,state__$1,form__$1){
var nxt_s = (state_fn.cljs$core$IFn$_invoke$arity$3 ? state_fn.cljs$core$IFn$_invoke$arity$3(state__$1,parent__$1,form__$1) : state_fn.call(null,state__$1,parent__$1,form__$1));
var nxt_f = (replace_fn.cljs$core$IFn$_invoke$arity$2 ? replace_fn.cljs$core$IFn$_invoke$arity$2(nxt_s,form__$1) : replace_fn.call(null,nxt_s,form__$1));
return clojure.walk.walk(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(tool_belt$core$prewalk_$_pw,form__$1,nxt_s),cljs.core.identity,nxt_f);
});
return pw(parent,state,form);
});
tool_belt.core.vec_QMARK_ = (function tool_belt$core$vec_QMARK_(x){

return ((cljs.core.sequential_QMARK_(x)) && ((!(cljs.core.map_entry_QMARK_(x)))));
});
/**
 * Decorates every level of a nested form with it's path added in a :$path key.
 */
tool_belt.core.with_path = (function tool_belt$core$with_path(form){
return tool_belt.core.prewalk(null,cljs.core.PersistentVector.EMPTY,(function (state,parent,form__$1){
if(cljs.core.map_entry_QMARK_(form__$1)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(state,cljs.core.key(form__$1));
} else {
if(((((cljs.core.map_QMARK_(form__$1)) || (tool_belt.core.vec_QMARK_(form__$1)))) && (tool_belt.core.vec_QMARK_(parent)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(state,parent.indexOf(form__$1));
} else {
return state;

}
}
}),(function (state,form__$1){
if(cljs.core.map_QMARK_(form__$1)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"$path","$path",-532586267),state], null),form__$1], 0));
} else {
return form__$1;
}
}),form);
});

//# sourceMappingURL=tool_belt.core.js.map
