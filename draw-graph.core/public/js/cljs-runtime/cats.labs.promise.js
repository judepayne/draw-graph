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
return promesa.impl.proto._extract(it__$1);
});
cats.labs.promise.context = (function (){
if((typeof cats !== 'undefined') && (typeof cats.labs !== 'undefined') && (typeof cats.labs.promise !== 'undefined') && (typeof cats.labs.promise.t_cats$labs$promise40149 !== 'undefined')){
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
cats.labs.promise.t_cats$labs$promise40149 = (function (meta40150){
this.meta40150 = meta40150;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cats.labs.promise.t_cats$labs$promise40149.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40151,meta40150__$1){
var self__ = this;
var _40151__$1 = this;
return (new cats.labs.promise.t_cats$labs$promise40149(meta40150__$1));
});

cats.labs.promise.t_cats$labs$promise40149.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40151){
var self__ = this;
var _40151__$1 = this;
return self__.meta40150;
});

cats.labs.promise.t_cats$labs$promise40149.prototype.cats$protocols$Context$ = cljs.core.PROTOCOL_SENTINEL;

cats.labs.promise.t_cats$labs$promise40149.prototype.cats$protocols$Functor$ = cljs.core.PROTOCOL_SENTINEL;

cats.labs.promise.t_cats$labs$promise40149.prototype.cats$protocols$Functor$_fmap$arity$3 = (function (mn,f,mv){
var self__ = this;
var mn__$1 = this;
return promesa.impl.proto._map(mv,f);
});

cats.labs.promise.t_cats$labs$promise40149.prototype.cats$protocols$Bifunctor$ = cljs.core.PROTOCOL_SENTINEL;

cats.labs.promise.t_cats$labs$promise40149.prototype.cats$protocols$Bifunctor$_bimap$arity$4 = (function (_,err,succ,mv){
var self__ = this;
var ___$1 = this;
return promesa.impl.proto._catch(promesa.impl.proto._map(mv,succ),err);
});

cats.labs.promise.t_cats$labs$promise40149.prototype.cats$protocols$Monad$ = cljs.core.PROTOCOL_SENTINEL;

cats.labs.promise.t_cats$labs$promise40149.prototype.cats$protocols$Monad$_mreturn$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return promesa.impl.proto._promise(v);
});

cats.labs.promise.t_cats$labs$promise40149.prototype.cats$protocols$Monad$_mbind$arity$3 = (function (mn,mv,f){
var self__ = this;
var mn__$1 = this;
return promesa.impl.proto._bind(mv,f);
});

cats.labs.promise.t_cats$labs$promise40149.prototype.cats$protocols$Applicative$ = cljs.core.PROTOCOL_SENTINEL;

cats.labs.promise.t_cats$labs$promise40149.prototype.cats$protocols$Applicative$_pure$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return promesa.impl.proto._promise(v);
});

cats.labs.promise.t_cats$labs$promise40149.prototype.cats$protocols$Applicative$_fapply$arity$3 = (function (_,pf,pv){
var self__ = this;
var ___$1 = this;
return promesa.impl.proto._map(promesa.core.all(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pf,pv], null)),((function (___$1){
return (function (p__40162){
var vec__40164 = p__40162;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40164,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40164,(1),null);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v));
});})(___$1))
);
});

cats.labs.promise.t_cats$labs$promise40149.prototype.cats$protocols$Semigroup$ = cljs.core.PROTOCOL_SENTINEL;

cats.labs.promise.t_cats$labs$promise40149.prototype.cats$protocols$Semigroup$_mappend$arity$3 = (function (_,mv,mv_SINGLEQUOTE_){
var self__ = this;
var ___$1 = this;
return promesa.impl.proto._map(cats.core.sequence(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mv,mv_SINGLEQUOTE_], null)),((function (___$1){
return (function (p__40168){
var vec__40169 = p__40168;
var mvv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40169,(0),null);
var mvv_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40169,(1),null);
var ctx = cats.protocols._get_context(mvv);
return cats.protocols._mappend(ctx,mvv,mvv_SINGLEQUOTE_);
});})(___$1))
);
});

cats.labs.promise.t_cats$labs$promise40149.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta40150","meta40150",1778120038,null)], null);
});

cats.labs.promise.t_cats$labs$promise40149.cljs$lang$type = true;

cats.labs.promise.t_cats$labs$promise40149.cljs$lang$ctorStr = "cats.labs.promise/t_cats$labs$promise40149";

cats.labs.promise.t_cats$labs$promise40149.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cats.labs.promise/t_cats$labs$promise40149");
});

/**
 * Positional factory function for cats.labs.promise/t_cats$labs$promise40149.
 */
cats.labs.promise.__GT_t_cats$labs$promise40149 = (function cats$labs$promise$__GT_t_cats$labs$promise40149(meta40150){
return (new cats.labs.promise.t_cats$labs$promise40149(meta40150));
});

}

return (new cats.labs.promise.t_cats$labs$promise40149(cljs.core.PersistentArrayMap.EMPTY));
})()
;
/**
 * Deprecated alias for `context`.
 */
cats.labs.promise.promise_context = cats.labs.promise.context;

//# sourceMappingURL=cats.labs.promise.js.map
