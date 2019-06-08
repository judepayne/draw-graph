// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('reagent.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__10475__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__10475 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10476__i = 0, G__10476__a = new Array(arguments.length -  0);
while (G__10476__i < G__10476__a.length) {G__10476__a[G__10476__i] = arguments[G__10476__i + 0]; ++G__10476__i;}
  args = new cljs.core.IndexedSeq(G__10476__a,0,null);
} 
return G__10475__delegate.call(this,args);};
G__10475.cljs$lang$maxFixedArity = 0;
G__10475.cljs$lang$applyTo = (function (arglist__10477){
var args = cljs.core.seq(arglist__10477);
return G__10475__delegate(args);
});
G__10475.cljs$core$IFn$_invoke$arity$variadic = G__10475__delegate;
return G__10475;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__10478__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__10478 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10479__i = 0, G__10479__a = new Array(arguments.length -  0);
while (G__10479__i < G__10479__a.length) {G__10479__a[G__10479__i] = arguments[G__10479__i + 0]; ++G__10479__i;}
  args = new cljs.core.IndexedSeq(G__10479__a,0,null);
} 
return G__10478__delegate.call(this,args);};
G__10478.cljs$lang$maxFixedArity = 0;
G__10478.cljs$lang$applyTo = (function (arglist__10480){
var args = cljs.core.seq(arglist__10480);
return G__10478__delegate(args);
});
G__10478.cljs$core$IFn$_invoke$arity$variadic = G__10478__delegate;
return G__10478;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});
