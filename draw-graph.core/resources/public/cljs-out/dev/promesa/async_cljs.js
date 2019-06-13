// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('promesa.async_cljs');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('promesa.core');
goog.require('promesa.impl.promise');
goog.require('promesa.impl.proto');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
promesa.async_cljs.PROMISE_IDX = (6);
promesa.async_cljs.run_state_machine_wrapped = (function promesa$async_cljs$run_state_machine_wrapped(state){
try{return cljs.core.async.impl.ioc_helpers.run_state_machine(state);
}catch (e30102){if((e30102 instanceof Error)){
var ex = e30102;
var vec__30103 = cljs.core.async.impl.ioc_helpers.aget_object(state,promesa.async_cljs.PROMISE_IDX);
var resolve = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30103,(0),null);
var reject = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30103,(1),null);
(reject.cljs$core$IFn$_invoke$arity$1 ? reject.cljs$core$IFn$_invoke$arity$1(ex) : reject.call(null,ex));

throw ex;
} else {
throw e30102;

}
}});
promesa.async_cljs.do_take = (function promesa$async_cljs$do_take(state,blk,p){
promesa.impl.proto._bind(p,(function (v){
var statearr_30106_30107 = state;
(statearr_30106_30107[(2)] = v);

(statearr_30106_30107[(1)] = blk);


promesa.async_cljs.run_state_machine_wrapped(state);

return v;
}));

return null;
});
promesa.async_cljs.do_return = (function promesa$async_cljs$do_return(state,value){
var vec__30108 = cljs.core.async.impl.ioc_helpers.aget_object(state,promesa.async_cljs.PROMISE_IDX);
var resolve = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30108,(0),null);
var reject = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30108,(1),null);
return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(value) : resolve.call(null,value));
});
