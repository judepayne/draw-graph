// Compiled by ClojureScript 1.10.520 {}
goog.provide('promesa.async_cljs');
goog.require('cljs.core');
goog.require('promesa.core');
goog.require('promesa.impl.promise');
goog.require('promesa.impl.proto');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
promesa.async_cljs.PROMISE_IDX = (6);
promesa.async_cljs.run_state_machine_wrapped = (function promesa$async_cljs$run_state_machine_wrapped(state){
try{return cljs.core.async.impl.ioc_helpers.run_state_machine.call(null,state);
}catch (e26866){if((e26866 instanceof Error)){
var ex = e26866;
var vec__26867 = cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,promesa.async_cljs.PROMISE_IDX);
var resolve = cljs.core.nth.call(null,vec__26867,(0),null);
var reject = cljs.core.nth.call(null,vec__26867,(1),null);
reject.call(null,ex);

throw ex;
} else {
throw e26866;

}
}});
promesa.async_cljs.do_take = (function promesa$async_cljs$do_take(state,blk,p){
promesa.impl.proto._bind.call(null,p,(function (v){
var statearr_26870_26871 = state;
(statearr_26870_26871[(2)] = v);

(statearr_26870_26871[(1)] = blk);


promesa.async_cljs.run_state_machine_wrapped.call(null,state);

return v;
}));

return null;
});
promesa.async_cljs.do_return = (function promesa$async_cljs$do_return(state,value){
var vec__26872 = cljs.core.async.impl.ioc_helpers.aget_object.call(null,state,promesa.async_cljs.PROMISE_IDX);
var resolve = cljs.core.nth.call(null,vec__26872,(0),null);
var reject = cljs.core.nth.call(null,vec__26872,(1),null);
return resolve.call(null,value);
});

//# sourceMappingURL=async_cljs.js.map
