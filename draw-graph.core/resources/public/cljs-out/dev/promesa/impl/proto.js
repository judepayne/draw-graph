// Compiled by ClojureScript 1.10.520 {}
goog.provide('promesa.impl.proto');
goog.require('cljs.core');

/**
 * A basic future abstraction.
 * @interface
 */
promesa.impl.proto.IPromise = function(){};

/**
 * Chain a promise.
 */
promesa.impl.proto._map = (function promesa$impl$proto$_map(_,callback){
if((((!((_ == null)))) && ((!((_.promesa$impl$proto$IPromise$_map$arity$2 == null)))))){
return _.promesa$impl$proto$IPromise$_map$arity$2(_,callback);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (promesa.impl.proto._map[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_,callback);
} else {
var m__4431__auto__ = (promesa.impl.proto._map["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_,callback);
} else {
throw cljs.core.missing_protocol.call(null,"IPromise.-map",_);
}
}
}
});

/**
 * Chain a promise.
 */
promesa.impl.proto._bind = (function promesa$impl$proto$_bind(_,callback){
if((((!((_ == null)))) && ((!((_.promesa$impl$proto$IPromise$_bind$arity$2 == null)))))){
return _.promesa$impl$proto$IPromise$_bind$arity$2(_,callback);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (promesa.impl.proto._bind[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_,callback);
} else {
var m__4431__auto__ = (promesa.impl.proto._bind["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_,callback);
} else {
throw cljs.core.missing_protocol.call(null,"IPromise.-bind",_);
}
}
}
});

/**
 * Catch a error in a promise.
 */
promesa.impl.proto._catch = (function promesa$impl$proto$_catch(_,callback){
if((((!((_ == null)))) && ((!((_.promesa$impl$proto$IPromise$_catch$arity$2 == null)))))){
return _.promesa$impl$proto$IPromise$_catch$arity$2(_,callback);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (promesa.impl.proto._catch[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_,callback);
} else {
var m__4431__auto__ = (promesa.impl.proto._catch["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_,callback);
} else {
throw cljs.core.missing_protocol.call(null,"IPromise.-catch",_);
}
}
}
});


/**
 * Additional state/introspection abstraction.
 * @interface
 */
promesa.impl.proto.IState = function(){};

/**
 * Extract the current value.
 */
promesa.impl.proto._extract = (function promesa$impl$proto$_extract(_){
if((((!((_ == null)))) && ((!((_.promesa$impl$proto$IState$_extract$arity$1 == null)))))){
return _.promesa$impl$proto$IState$_extract$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (promesa.impl.proto._extract[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (promesa.impl.proto._extract["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IState.-extract",_);
}
}
}
});

/**
 * Returns true if a promise is resolved.
 */
promesa.impl.proto._resolved_QMARK_ = (function promesa$impl$proto$_resolved_QMARK_(_){
if((((!((_ == null)))) && ((!((_.promesa$impl$proto$IState$_resolved_QMARK_$arity$1 == null)))))){
return _.promesa$impl$proto$IState$_resolved_QMARK_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (promesa.impl.proto._resolved_QMARK_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (promesa.impl.proto._resolved_QMARK_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IState.-resolved?",_);
}
}
}
});

/**
 * Returns true if a promise is rejected.
 */
promesa.impl.proto._rejected_QMARK_ = (function promesa$impl$proto$_rejected_QMARK_(_){
if((((!((_ == null)))) && ((!((_.promesa$impl$proto$IState$_rejected_QMARK_$arity$1 == null)))))){
return _.promesa$impl$proto$IState$_rejected_QMARK_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (promesa.impl.proto._rejected_QMARK_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (promesa.impl.proto._rejected_QMARK_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IState.-rejected?",_);
}
}
}
});

/**
 * Retutns true if a promise is pending.
 */
promesa.impl.proto._pending_QMARK_ = (function promesa$impl$proto$_pending_QMARK_(_){
if((((!((_ == null)))) && ((!((_.promesa$impl$proto$IState$_pending_QMARK_$arity$1 == null)))))){
return _.promesa$impl$proto$IState$_pending_QMARK_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (promesa.impl.proto._pending_QMARK_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (promesa.impl.proto._pending_QMARK_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IState.-pending?",_);
}
}
}
});


/**
 * A promise constructor abstraction.
 * @interface
 */
promesa.impl.proto.IPromiseFactory = function(){};

/**
 * Create a promise instance.
 */
promesa.impl.proto._promise = (function promesa$impl$proto$_promise(_){
if((((!((_ == null)))) && ((!((_.promesa$impl$proto$IPromiseFactory$_promise$arity$1 == null)))))){
return _.promesa$impl$proto$IPromiseFactory$_promise$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (promesa.impl.proto._promise[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (promesa.impl.proto._promise["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"IPromiseFactory.-promise",_);
}
}
}
});


/**
 * A cancellation abstraction.
 * @interface
 */
promesa.impl.proto.ICancellable = function(){};

promesa.impl.proto._cancel = (function promesa$impl$proto$_cancel(_){
if((((!((_ == null)))) && ((!((_.promesa$impl$proto$ICancellable$_cancel$arity$1 == null)))))){
return _.promesa$impl$proto$ICancellable$_cancel$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (promesa.impl.proto._cancel[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (promesa.impl.proto._cancel["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"ICancellable.-cancel",_);
}
}
}
});

promesa.impl.proto._cancelled_QMARK_ = (function promesa$impl$proto$_cancelled_QMARK_(_){
if((((!((_ == null)))) && ((!((_.promesa$impl$proto$ICancellable$_cancelled_QMARK_$arity$1 == null)))))){
return _.promesa$impl$proto$ICancellable$_cancelled_QMARK_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (promesa.impl.proto._cancelled_QMARK_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (promesa.impl.proto._cancelled_QMARK_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"ICancellable.-cancelled?",_);
}
}
}
});


/**
 * A generic abstraction for scheduler facilities.
 * @interface
 */
promesa.impl.proto.IScheduler = function(){};

/**
 * Schedule a function to be executed in future.
 */
promesa.impl.proto._schedule = (function promesa$impl$proto$_schedule(_,ms,func){
if((((!((_ == null)))) && ((!((_.promesa$impl$proto$IScheduler$_schedule$arity$3 == null)))))){
return _.promesa$impl$proto$IScheduler$_schedule$arity$3(_,ms,func);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (promesa.impl.proto._schedule[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_,ms,func);
} else {
var m__4431__auto__ = (promesa.impl.proto._schedule["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_,ms,func);
} else {
throw cljs.core.missing_protocol.call(null,"IScheduler.-schedule",_);
}
}
}
});


//# sourceMappingURL=proto.js.map
