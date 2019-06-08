// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('instaparse.reduction');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('instaparse.auto_flatten_seq');
goog.require('instaparse.util');
instaparse.reduction.singleton_QMARK_ = (function instaparse$reduction$singleton_QMARK_(s){
return ((cljs.core.seq(s)) && (cljs.core.not(cljs.core.next(s))));
});
instaparse.reduction.red = (function instaparse$reduction$red(parser,f){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parser,cljs.core.cst$kw$red,f);
});
instaparse.reduction.raw_non_terminal_reduction = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$reduction_DASH_type,cljs.core.cst$kw$raw], null);
instaparse.reduction.HiccupNonTerminalReduction = (function instaparse$reduction$HiccupNonTerminalReduction(key){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reduction_DASH_type,cljs.core.cst$kw$hiccup,cljs.core.cst$kw$key,key], null);
});
instaparse.reduction.EnliveNonTerminalReduction = (function instaparse$reduction$EnliveNonTerminalReduction(key){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reduction_DASH_type,cljs.core.cst$kw$enlive,cljs.core.cst$kw$key,key], null);
});
instaparse.reduction.reduction_types = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$hiccup,instaparse.reduction.HiccupNonTerminalReduction,cljs.core.cst$kw$enlive,instaparse.reduction.EnliveNonTerminalReduction], null);
instaparse.reduction.node_builders = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$enlive,(function (tag,item){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,tag,cljs.core.cst$kw$content,(new cljs.core.List(null,item,null,(1),null))], null);
}),cljs.core.cst$kw$hiccup,(function (tag,item){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,item], null);
})], null);
instaparse.reduction.standard_non_terminal_reduction = cljs.core.cst$kw$hiccup;
instaparse.reduction.apply_reduction = (function instaparse$reduction$apply_reduction(f,result){
var G__11406 = cljs.core.cst$kw$reduction_DASH_type.cljs$core$IFn$_invoke$arity$1(f);
var G__11406__$1 = (((G__11406 instanceof cljs.core.Keyword))?G__11406.fqn:null);
switch (G__11406__$1) {
case "raw":
return instaparse.auto_flatten_seq.EMPTY.instaparse$auto_flatten_seq$ConjFlat$conj_flat$arity$2(null,result);

break;
case "hiccup":
return instaparse.auto_flatten_seq.convert_afs_to_vec(instaparse.auto_flatten_seq.auto_flatten_seq(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(f)], null)).instaparse$auto_flatten_seq$ConjFlat$conj_flat$arity$2(null,result));

break;
case "enlive":
var content = instaparse.auto_flatten_seq.EMPTY.instaparse$auto_flatten_seq$ConjFlat$conj_flat$arity$2(null,result);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(f),cljs.core.cst$kw$content,(((cljs.core.count(content) === (0)))?null:content)], null);

break;
default:
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(result) : f.call(null,result));

}
});
instaparse.reduction.apply_standard_reductions = (function instaparse$reduction$apply_standard_reductions(var_args){
var G__11409 = arguments.length;
switch (G__11409) {
case 1:
return instaparse.reduction.apply_standard_reductions.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return instaparse.reduction.apply_standard_reductions.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

instaparse.reduction.apply_standard_reductions.cljs$core$IFn$_invoke$arity$1 = (function (grammar){
return instaparse.reduction.apply_standard_reductions.cljs$core$IFn$_invoke$arity$2(instaparse.reduction.standard_non_terminal_reduction,grammar);
});

instaparse.reduction.apply_standard_reductions.cljs$core$IFn$_invoke$arity$2 = (function (reduction_type,grammar){
var temp__5718__auto__ = (instaparse.reduction.reduction_types.cljs$core$IFn$_invoke$arity$1 ? instaparse.reduction.reduction_types.cljs$core$IFn$_invoke$arity$1(reduction_type) : instaparse.reduction.reduction_types.call(null,reduction_type));
if(cljs.core.truth_(temp__5718__auto__)){
var reduction = temp__5718__auto__;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4523__auto__ = ((function (reduction,temp__5718__auto__){
return (function instaparse$reduction$iter__11410(s__11411){
return (new cljs.core.LazySeq(null,((function (reduction,temp__5718__auto__){
return (function (){
var s__11411__$1 = s__11411;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__11411__$1);
if(temp__5720__auto__){
var s__11411__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__11411__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__11411__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__11413 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__11412 = (0);
while(true){
if((i__11412 < size__4522__auto__)){
var vec__11414 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__11412);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11414,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11414,(1),null);
cljs.core.chunk_append(b__11413,(cljs.core.truth_(cljs.core.cst$kw$red.cljs$core$IFn$_invoke$arity$1(v))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v,cljs.core.cst$kw$red,(reduction.cljs$core$IFn$_invoke$arity$1 ? reduction.cljs$core$IFn$_invoke$arity$1(k) : reduction.call(null,k)))], null)));

var G__11421 = (i__11412 + (1));
i__11412 = G__11421;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__11413),instaparse$reduction$iter__11410(cljs.core.chunk_rest(s__11411__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__11413),null);
}
} else {
var vec__11417 = cljs.core.first(s__11411__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11417,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11417,(1),null);
return cljs.core.cons((cljs.core.truth_(cljs.core.cst$kw$red.cljs$core$IFn$_invoke$arity$1(v))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v,cljs.core.cst$kw$red,(reduction.cljs$core$IFn$_invoke$arity$1 ? reduction.cljs$core$IFn$_invoke$arity$1(k) : reduction.call(null,k)))], null)),instaparse$reduction$iter__11410(cljs.core.rest(s__11411__$2)));
}
} else {
return null;
}
break;
}
});})(reduction,temp__5718__auto__))
,null,null));
});})(reduction,temp__5718__auto__))
;
return iter__4523__auto__(grammar);
})());
} else {
return instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid output format ",reduction_type,". Use :enlive or :hiccup."], 0));
}
});

instaparse.reduction.apply_standard_reductions.cljs$lang$maxFixedArity = 2;

