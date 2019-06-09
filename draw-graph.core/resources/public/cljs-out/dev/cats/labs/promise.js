// Compiled by ClojureScript 1.10.520 {}
goog.provide('cats.labs.promise');
goog.require('cljs.core');
goog.require('cats.core');
goog.require('cats.context');
goog.require('cats.protocols');
goog.require('promesa.core');
goog.require('promesa.impl.proto');
promesa.core.Promise.prototype.cats$protocols$Contextual$ = cljs.core.PROTOCOL_SENTINEL;

promesa.core.Promise.prototype.cats$protocols$Contextual$_get_context$arity$1 = (function (_){
var ___$1 = this;
return cats.labs.promise.context;
});

promesa.core.Promise.prototype.cats$protocols$Extract$ = cljs.core.PROTOCOL_SENTINEL;

promesa.core.Promise.prototype.cats$protocols$Extract$_extract$arity$1 = (function (it){
var it__$1 = this;
return promesa.impl.proto._extract.call(null,it__$1);
});
cats.labs.promise.context = (function (){
if((typeof cats !== 'undefined') && (typeof cats.labs !== 'undefined') && (typeof cats.labs.promise !== 'undefined') && (typeof cats.labs.promise.t_cats$labs$promise32885 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cats.protocols.Semigroup}
 * @implements {cats.protocols.Monad}
 * @implements {cats.protocols.Functor}
 * @implements {cljs.core.IMeta}
 * @implements {cats.protocols.Bifunctor}
 * @implements {cats.protocols.Context}
 * @implements {cljs.core.IWithMeta}
 * @implements {cats.protocols.Applicative}
*/
cats.labs.promise.t_cats$labs$promise32885 = (function (meta32886){
this.meta32886 = meta32886;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cats.labs.promise.t_cats$labs$promise32885.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32887,meta32886__$1){
var self__ = this;
var _32887__$1 = this;
return (new cats.labs.promise.t_cats$labs$promise32885(meta32886__$1));
});

cats.labs.promise.t_cats$labs$promise32885.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32887){
var self__ = this;
var _32887__$1 = this;
return self__.meta32886;
});

cats.labs.promise.t_cats$labs$promise32885.prototype.cats$protocols$Context$ = cljs.core.PROTOCOL_SENTINEL;

cats.labs.promise.t_cats$labs$promise32885.prototype.cats$protocols$Functor$ = cljs.core.PROTOCOL_SENTINEL;

cats.labs.promise.t_cats$labs$promise32885.prototype.cats$protocols$Functor$_fmap$arity$3 = (function (mn,f,mv){
var self__ = this;
var mn__$1 = this;
return promesa.impl.proto._map.call(null,mv,f);
});

cats.labs.promise.t_cats$labs$promise32885.prototype.cats$protocols$Bifunctor$ = cljs.core.PROTOCOL_SENTINEL;

cats.labs.promise.t_cats$labs$promise32885.prototype.cats$protocols$Bifunctor$_bimap$arity$4 = (function (_,err,succ,mv){
var self__ = this;
var ___$1 = this;
return promesa.impl.proto._catch.call(null,promesa.impl.proto._map.call(null,mv,succ),err);
});

cats.labs.promise.t_cats$labs$promise32885.prototype.cats$protocols$Monad$ = cljs.core.PROTOCOL_SENTINEL;

cats.labs.promise.t_cats$labs$promise32885.prototype.cats$protocols$Monad$_mreturn$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return promesa.impl.proto._promise.call(null,v);
});

cats.labs.promise.t_cats$labs$promise32885.prototype.cats$protocols$Monad$_mbind$arity$3 = (function (mn,mv,f){
var self__ = this;
var mn__$1 = this;
return promesa.impl.proto._bind.call(null,mv,f);
});

cats.labs.promise.t_cats$labs$promise32885.prototype.cats$protocols$Applicative$ = cljs.core.PROTOCOL_SENTINEL;

cats.labs.promise.t_cats$labs$promise32885.prototype.cats$protocols$Applicative$_pure$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return promesa.impl.proto._promise.call(null,v);
});

cats.labs.promise.t_cats$labs$promise32885.prototype.cats$protocols$Applicative$_fapply$arity$3 = (function (_,pf,pv){
var self__ = this;
var ___$1 = this;
return promesa.impl.proto._map.call(null,promesa.core.all.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pf,pv], null)),((function (___$1){
return (function (p__32888){
var vec__32889 = p__32888;
var f = cljs.core.nth.call(null,vec__32889,(0),null);
var v = cljs.core.nth.call(null,vec__32889,(1),null);
return f.call(null,v);
});})(___$1))
);
});

cats.labs.promise.t_cats$labs$promise32885.prototype.cats$protocols$Semigroup$ = cljs.core.PROTOCOL_SENTINEL;

cats.labs.promise.t_cats$labs$promise32885.prototype.cats$protocols$Semigroup$_mappend$arity$3 = (function (_,mv,mv_SINGLEQUOTE_){
var self__ = this;
var ___$1 = this;
return promesa.impl.proto._map.call(null,cats.core.sequence.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mv,mv_SINGLEQUOTE_], null)),((function (___$1){
return (function (p__32892){
var vec__32893 = p__32892;
var mvv = cljs.core.nth.call(null,vec__32893,(0),null);
var mvv_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__32893,(1),null);
var ctx = cats.protocols._get_context.call(null,mvv);
return cats.protocols._mappend.call(null,ctx,mvv,mvv_SINGLEQUOTE_);
});})(___$1))
);
});

cats.labs.promise.t_cats$labs$promise32885.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta32886","meta32886",-585827044,null)], null);
});

cats.labs.promise.t_cats$labs$promise32885.cljs$lang$type = true;

cats.labs.promise.t_cats$labs$promise32885.cljs$lang$ctorStr = "cats.labs.promise/t_cats$labs$promise32885";

cats.labs.promise.t_cats$labs$promise32885.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cats.labs.promise/t_cats$labs$promise32885");
});

/**
 * Positional factory function for cats.labs.promise/t_cats$labs$promise32885.
 */
cats.labs.promise.__GT_t_cats$labs$promise32885 = (function cats$labs$promise$__GT_t_cats$labs$promise32885(meta32886){
return (new cats.labs.promise.t_cats$labs$promise32885(meta32886));
});

}

return (new cats.labs.promise.t_cats$labs$promise32885(cljs.core.PersistentArrayMap.EMPTY));
})()
;
/**
 * Deprecated alias for `context`.
 */
cats.labs.promise.promise_context = cats.labs.promise.context;

//# sourceMappingURL=promise.js.map
