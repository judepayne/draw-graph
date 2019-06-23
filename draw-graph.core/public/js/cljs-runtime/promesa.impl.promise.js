goog.provide('promesa.impl.promise');
goog.require('cljs.core');
goog.require('org.bluebird');
goog.require('promesa.impl.proto');
promesa.impl.promise.Promise = Promise.noConflict();
promesa.impl.promise.Promise.config(({"cancellation": true, "warnings": false}));
promesa.impl.promise.Promise.prototype.promesa$impl$proto$ICancellable$ = cljs.core.PROTOCOL_SENTINEL;

promesa.impl.promise.Promise.prototype.promesa$impl$proto$ICancellable$_cancel$arity$1 = (function (it){
var it__$1 = this;
return it__$1.cancel();
});

promesa.impl.promise.Promise.prototype.promesa$impl$proto$ICancellable$_cancelled_QMARK_$arity$1 = (function (it){
var it__$1 = this;
return it__$1.isCancelled();
});

promesa.impl.promise.Promise.prototype.promesa$impl$proto$IPromise$ = cljs.core.PROTOCOL_SENTINEL;

promesa.impl.promise.Promise.prototype.promesa$impl$proto$IPromise$_map$arity$2 = (function (it,cb){
var it__$1 = this;
return it__$1.then(((function (it__$1){
return (function (p1__38855_SHARP_){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(p1__38855_SHARP_) : cb.call(null,p1__38855_SHARP_));
});})(it__$1))
);
});

promesa.impl.promise.Promise.prototype.promesa$impl$proto$IPromise$_bind$arity$2 = (function (it,cb){
var it__$1 = this;
return it__$1.then(((function (it__$1){
return (function (p1__38856_SHARP_){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(p1__38856_SHARP_) : cb.call(null,p1__38856_SHARP_));
});})(it__$1))
);
});

promesa.impl.promise.Promise.prototype.promesa$impl$proto$IPromise$_catch$arity$2 = (function (it,cb){
var it__$1 = this;
return it__$1.catch(((function (it__$1){
return (function (p1__38857_SHARP_){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(p1__38857_SHARP_) : cb.call(null,p1__38857_SHARP_));
});})(it__$1))
);
});

promesa.impl.promise.Promise.prototype.promesa$impl$proto$IState$ = cljs.core.PROTOCOL_SENTINEL;

promesa.impl.promise.Promise.prototype.promesa$impl$proto$IState$_extract$arity$1 = (function (it){
var it__$1 = this;
if(cljs.core.truth_(it__$1.isRejected())){
return it__$1.reason();
} else {
return it__$1.value();
}
});

promesa.impl.promise.Promise.prototype.promesa$impl$proto$IState$_resolved_QMARK_$arity$1 = (function (it){
var it__$1 = this;
return it__$1.isFulfilled();
});

promesa.impl.promise.Promise.prototype.promesa$impl$proto$IState$_rejected_QMARK_$arity$1 = (function (it){
var it__$1 = this;
return it__$1.isRejected();
});

promesa.impl.promise.Promise.prototype.promesa$impl$proto$IState$_pending_QMARK_$arity$1 = (function (it){
var it__$1 = this;
return it__$1.isPending();
});
goog.object.set(promesa.impl.proto.IPromise,"_",true);

var G__38875_38918 = promesa.impl.proto._map;
var G__38876_38919 = "_";
var G__38877_38920 = ((function (G__38875_38918,G__38876_38919){
return (function (it,cb){
return promesa.impl.proto._map((promesa.impl.promise.resolved.cljs$core$IFn$_invoke$arity$1 ? promesa.impl.promise.resolved.cljs$core$IFn$_invoke$arity$1(it) : promesa.impl.promise.resolved.call(null,it)),cb);
});})(G__38875_38918,G__38876_38919))
;
goog.object.set(G__38875_38918,G__38876_38919,G__38877_38920);

var G__38878_38921 = promesa.impl.proto._bind;
var G__38879_38922 = "_";
var G__38880_38923 = ((function (G__38878_38921,G__38879_38922){
return (function (it,cb){
return promesa.impl.proto._bind((promesa.impl.promise.resolved.cljs$core$IFn$_invoke$arity$1 ? promesa.impl.promise.resolved.cljs$core$IFn$_invoke$arity$1(it) : promesa.impl.promise.resolved.call(null,it)),cb);
});})(G__38878_38921,G__38879_38922))
;
goog.object.set(G__38878_38921,G__38879_38922,G__38880_38923);

var G__38881_38925 = promesa.impl.proto._catch;
var G__38882_38926 = "_";
var G__38883_38927 = ((function (G__38881_38925,G__38882_38926){
return (function (it,cb){
return promesa.impl.proto._catch((promesa.impl.promise.resolved.cljs$core$IFn$_invoke$arity$1 ? promesa.impl.promise.resolved.cljs$core$IFn$_invoke$arity$1(it) : promesa.impl.promise.resolved.call(null,it)),cb);
});})(G__38881_38925,G__38882_38926))
;
goog.object.set(G__38881_38925,G__38882_38926,G__38883_38927);
promesa.impl.promise.resolved = (function promesa$impl$promise$resolved(v){
return promesa.impl.promise.Promise.resolve(v);
});
promesa.impl.promise.rejected = (function promesa$impl$promise$rejected(v){
return promesa.impl.promise.Promise.reject(v);
});
goog.object.set(promesa.impl.proto.IPromiseFactory,"function",true);

var G__38894_38929 = promesa.impl.proto._promise;
var G__38895_38930 = "function";
var G__38896_38931 = ((function (G__38894_38929,G__38895_38930){
return (function (func){
return (new promesa.impl.promise.Promise(func));
});})(G__38894_38929,G__38895_38930))
;
goog.object.set(G__38894_38929,G__38895_38930,G__38896_38931);

promesa.impl.promise.Promise.prototype.promesa$impl$proto$IPromiseFactory$ = cljs.core.PROTOCOL_SENTINEL;

promesa.impl.promise.Promise.prototype.promesa$impl$proto$IPromiseFactory$_promise$arity$1 = (function (p){
var p__$1 = this;
return p__$1;
});

Error.prototype.promesa$impl$proto$IPromiseFactory$ = cljs.core.PROTOCOL_SENTINEL;

Error.prototype.promesa$impl$proto$IPromiseFactory$_promise$arity$1 = (function (e){
var e__$1 = this;
return promesa.impl.promise.rejected(e__$1);
});

goog.object.set(promesa.impl.proto.IPromiseFactory,"object",true);

var G__38903_38932 = promesa.impl.proto._promise;
var G__38904_38933 = "object";
var G__38905_38934 = ((function (G__38903_38932,G__38904_38933){
return (function (v){
return promesa.impl.promise.resolved(v);
});})(G__38903_38932,G__38904_38933))
;
goog.object.set(G__38903_38932,G__38904_38933,G__38905_38934);

goog.object.set(promesa.impl.proto.IPromiseFactory,"number",true);

var G__38906_38935 = promesa.impl.proto._promise;
var G__38907_38936 = "number";
var G__38908_38937 = ((function (G__38906_38935,G__38907_38936){
return (function (v){
return promesa.impl.promise.resolved(v);
});})(G__38906_38935,G__38907_38936))
;
goog.object.set(G__38906_38935,G__38907_38936,G__38908_38937);

goog.object.set(promesa.impl.proto.IPromiseFactory,"boolean",true);

var G__38909_38938 = promesa.impl.proto._promise;
var G__38910_38939 = "boolean";
var G__38911_38940 = ((function (G__38909_38938,G__38910_38939){
return (function (v){
return promesa.impl.promise.resolved(v);
});})(G__38909_38938,G__38910_38939))
;
goog.object.set(G__38909_38938,G__38910_38939,G__38911_38940);

goog.object.set(promesa.impl.proto.IPromiseFactory,"string",true);

var G__38912_38941 = promesa.impl.proto._promise;
var G__38913_38942 = "string";
var G__38914_38943 = ((function (G__38912_38941,G__38913_38942){
return (function (v){
return promesa.impl.promise.resolved(v);
});})(G__38912_38941,G__38913_38942))
;
goog.object.set(G__38912_38941,G__38913_38942,G__38914_38943);

goog.object.set(promesa.impl.proto.IPromiseFactory,"null",true);

var G__38915_38946 = promesa.impl.proto._promise;
var G__38916_38947 = "null";
var G__38917_38948 = ((function (G__38915_38946,G__38916_38947){
return (function (v){
return promesa.impl.promise.resolved(v);
});})(G__38915_38946,G__38916_38947))
;
goog.object.set(G__38915_38946,G__38916_38947,G__38917_38948);
promesa.impl.promise.promise__GT_str = (function promesa$impl$promise$promise__GT_str(p){
return ["#<Promise[",(cljs.core.truth_(promesa.impl.proto._pending_QMARK_(p))?"~":(cljs.core.truth_(promesa.impl.proto._rejected_QMARK_(p))?["error=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(promesa.impl.proto._extract(p))].join(''):["value=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(promesa.impl.proto._extract(p))].join('')
)),"]>"].join('');
});
promesa.impl.promise.Promise.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

promesa.impl.promise.Promise.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (p,writer,opts){
var p__$1 = this;
return cljs.core._write(writer,promesa.impl.promise.promise__GT_str(p__$1));
});

//# sourceMappingURL=promesa.impl.promise.js.map
