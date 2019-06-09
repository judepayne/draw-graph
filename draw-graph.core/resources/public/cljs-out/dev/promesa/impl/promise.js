// Compiled by ClojureScript 1.10.520 {}
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
return (function (p1__20631_SHARP_){
return cb.call(null,p1__20631_SHARP_);
});})(it__$1))
);
});

promesa.impl.promise.Promise.prototype.promesa$impl$proto$IPromise$_bind$arity$2 = (function (it,cb){
var it__$1 = this;
return it__$1.then(((function (it__$1){
return (function (p1__20632_SHARP_){
return cb.call(null,p1__20632_SHARP_);
});})(it__$1))
);
});

promesa.impl.promise.Promise.prototype.promesa$impl$proto$IPromise$_catch$arity$2 = (function (it,cb){
var it__$1 = this;
return it__$1.catch(((function (it__$1){
return (function (p1__20633_SHARP_){
return cb.call(null,p1__20633_SHARP_);
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

goog.object.set(promesa.impl.proto._map,"_",(function (it,cb){
return promesa.impl.proto._map.call(null,promesa.impl.promise.resolved.call(null,it),cb);
}));

goog.object.set(promesa.impl.proto._bind,"_",(function (it,cb){
return promesa.impl.proto._bind.call(null,promesa.impl.promise.resolved.call(null,it),cb);
}));

goog.object.set(promesa.impl.proto._catch,"_",(function (it,cb){
return promesa.impl.proto._catch.call(null,promesa.impl.promise.resolved.call(null,it),cb);
}));
promesa.impl.promise.resolved = (function promesa$impl$promise$resolved(v){
return promesa.impl.promise.Promise.resolve(v);
});
promesa.impl.promise.rejected = (function promesa$impl$promise$rejected(v){
return promesa.impl.promise.Promise.reject(v);
});
goog.object.set(promesa.impl.proto.IPromiseFactory,"function",true);

goog.object.set(promesa.impl.proto._promise,"function",(function (func){
return (new promesa.impl.promise.Promise(func));
}));

promesa.impl.promise.Promise.prototype.promesa$impl$proto$IPromiseFactory$ = cljs.core.PROTOCOL_SENTINEL;

promesa.impl.promise.Promise.prototype.promesa$impl$proto$IPromiseFactory$_promise$arity$1 = (function (p){
var p__$1 = this;
return p__$1;
});

Error.prototype.promesa$impl$proto$IPromiseFactory$ = cljs.core.PROTOCOL_SENTINEL;

Error.prototype.promesa$impl$proto$IPromiseFactory$_promise$arity$1 = (function (e){
var e__$1 = this;
return promesa.impl.promise.rejected.call(null,e__$1);
});

goog.object.set(promesa.impl.proto.IPromiseFactory,"object",true);

goog.object.set(promesa.impl.proto._promise,"object",(function (v){
return promesa.impl.promise.resolved.call(null,v);
}));

goog.object.set(promesa.impl.proto.IPromiseFactory,"number",true);

goog.object.set(promesa.impl.proto._promise,"number",(function (v){
return promesa.impl.promise.resolved.call(null,v);
}));

goog.object.set(promesa.impl.proto.IPromiseFactory,"boolean",true);

goog.object.set(promesa.impl.proto._promise,"boolean",(function (v){
return promesa.impl.promise.resolved.call(null,v);
}));

goog.object.set(promesa.impl.proto.IPromiseFactory,"string",true);

goog.object.set(promesa.impl.proto._promise,"string",(function (v){
return promesa.impl.promise.resolved.call(null,v);
}));

goog.object.set(promesa.impl.proto.IPromiseFactory,"null",true);

goog.object.set(promesa.impl.proto._promise,"null",(function (v){
return promesa.impl.promise.resolved.call(null,v);
}));
promesa.impl.promise.promise__GT_str = (function promesa$impl$promise$promise__GT_str(p){
return ["#<Promise[",(cljs.core.truth_(promesa.impl.proto._pending_QMARK_.call(null,p))?"~":(cljs.core.truth_(promesa.impl.proto._rejected_QMARK_.call(null,p))?["error=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(promesa.impl.proto._extract.call(null,p))].join(''):["value=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(promesa.impl.proto._extract.call(null,p))].join('')
)),"]>"].join('');
});
promesa.impl.promise.Promise.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

promesa.impl.promise.Promise.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (p,writer,opts){
var p__$1 = this;
return cljs.core._write.call(null,writer,promesa.impl.promise.promise__GT_str.call(null,p__$1));
});

//# sourceMappingURL=promise.js.map
