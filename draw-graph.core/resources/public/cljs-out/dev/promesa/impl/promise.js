// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('promesa.impl.promise');
goog.require('cljs.core');
goog.require('cljs.core.constants');
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
return (function (p1__24150_SHARP_){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(p1__24150_SHARP_) : cb.call(null,p1__24150_SHARP_));
});})(it__$1))
);
});

promesa.impl.promise.Promise.prototype.promesa$impl$proto$IPromise$_bind$arity$2 = (function (it,cb){
var it__$1 = this;
return it__$1.then(((function (it__$1){
return (function (p1__24151_SHARP_){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(p1__24151_SHARP_) : cb.call(null,p1__24151_SHARP_));
});})(it__$1))
);
});

promesa.impl.promise.Promise.prototype.promesa$impl$proto$IPromise$_catch$arity$2 = (function (it,cb){
var it__$1 = this;
return it__$1.catch(((function (it__$1){
return (function (p1__24152_SHARP_){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(p1__24152_SHARP_) : cb.call(null,p1__24152_SHARP_));
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

var G__24153_24162 = promesa.impl.proto._map;
var G__24154_24163 = "_";
var G__24155_24164 = ((function (G__24153_24162,G__24154_24163){
return (function (it,cb){
return promesa.impl.proto._map((promesa.impl.promise.resolved.cljs$core$IFn$_invoke$arity$1 ? promesa.impl.promise.resolved.cljs$core$IFn$_invoke$arity$1(it) : promesa.impl.promise.resolved.call(null,it)),cb);
});})(G__24153_24162,G__24154_24163))
;
goog.object.set(G__24153_24162,G__24154_24163,G__24155_24164);

var G__24156_24165 = promesa.impl.proto._bind;
var G__24157_24166 = "_";
var G__24158_24167 = ((function (G__24156_24165,G__24157_24166){
return (function (it,cb){
return promesa.impl.proto._bind((promesa.impl.promise.resolved.cljs$core$IFn$_invoke$arity$1 ? promesa.impl.promise.resolved.cljs$core$IFn$_invoke$arity$1(it) : promesa.impl.promise.resolved.call(null,it)),cb);
});})(G__24156_24165,G__24157_24166))
;
goog.object.set(G__24156_24165,G__24157_24166,G__24158_24167);

var G__24159_24168 = promesa.impl.proto._catch;
var G__24160_24169 = "_";
var G__24161_24170 = ((function (G__24159_24168,G__24160_24169){
return (function (it,cb){
return promesa.impl.proto._catch((promesa.impl.promise.resolved.cljs$core$IFn$_invoke$arity$1 ? promesa.impl.promise.resolved.cljs$core$IFn$_invoke$arity$1(it) : promesa.impl.promise.resolved.call(null,it)),cb);
});})(G__24159_24168,G__24160_24169))
;
goog.object.set(G__24159_24168,G__24160_24169,G__24161_24170);
promesa.impl.promise.resolved = (function promesa$impl$promise$resolved(v){
return promesa.impl.promise.Promise.resolve(v);
});
promesa.impl.promise.rejected = (function promesa$impl$promise$rejected(v){
return promesa.impl.promise.Promise.reject(v);
});
goog.object.set(promesa.impl.proto.IPromiseFactory,"function",true);

var G__24173_24191 = promesa.impl.proto._promise;
var G__24174_24192 = "function";
var G__24175_24193 = ((function (G__24173_24191,G__24174_24192){
return (function (func){
return (new promesa.impl.promise.Promise(func));
});})(G__24173_24191,G__24174_24192))
;
goog.object.set(G__24173_24191,G__24174_24192,G__24175_24193);

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

var G__24176_24194 = promesa.impl.proto._promise;
var G__24177_24195 = "object";
var G__24178_24196 = ((function (G__24176_24194,G__24177_24195){
return (function (v){
return promesa.impl.promise.resolved(v);
});})(G__24176_24194,G__24177_24195))
;
goog.object.set(G__24176_24194,G__24177_24195,G__24178_24196);

goog.object.set(promesa.impl.proto.IPromiseFactory,"number",true);

var G__24179_24197 = promesa.impl.proto._promise;
var G__24180_24198 = "number";
var G__24181_24199 = ((function (G__24179_24197,G__24180_24198){
return (function (v){
return promesa.impl.promise.resolved(v);
});})(G__24179_24197,G__24180_24198))
;
goog.object.set(G__24179_24197,G__24180_24198,G__24181_24199);

goog.object.set(promesa.impl.proto.IPromiseFactory,"boolean",true);

var G__24182_24200 = promesa.impl.proto._promise;
var G__24183_24201 = "boolean";
var G__24184_24202 = ((function (G__24182_24200,G__24183_24201){
return (function (v){
return promesa.impl.promise.resolved(v);
});})(G__24182_24200,G__24183_24201))
;
goog.object.set(G__24182_24200,G__24183_24201,G__24184_24202);

goog.object.set(promesa.impl.proto.IPromiseFactory,"string",true);

var G__24185_24203 = promesa.impl.proto._promise;
var G__24186_24204 = "string";
var G__24187_24205 = ((function (G__24185_24203,G__24186_24204){
return (function (v){
return promesa.impl.promise.resolved(v);
});})(G__24185_24203,G__24186_24204))
;
goog.object.set(G__24185_24203,G__24186_24204,G__24187_24205);

goog.object.set(promesa.impl.proto.IPromiseFactory,"null",true);

var G__24188_24206 = promesa.impl.proto._promise;
var G__24189_24207 = "null";
var G__24190_24208 = ((function (G__24188_24206,G__24189_24207){
return (function (v){
return promesa.impl.promise.resolved(v);
});})(G__24188_24206,G__24189_24207))
;
goog.object.set(G__24188_24206,G__24189_24207,G__24190_24208);
promesa.impl.promise.promise__GT_str = (function promesa$impl$promise$promise__GT_str(p){
return ["#<Promise[",(cljs.core.truth_(promesa.impl.proto._pending_QMARK_(p))?"~":(cljs.core.truth_(promesa.impl.proto._rejected_QMARK_(p))?["error=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(promesa.impl.proto._extract(p))].join(''):["value=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(promesa.impl.proto._extract(p))].join('')
)),"]>"].join('');
});
promesa.impl.promise.Promise.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

promesa.impl.promise.Promise.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (p,writer,opts){
var p__$1 = this;
return cljs.core._write(writer,promesa.impl.promise.promise__GT_str(p__$1));
});
