goog.provide('cats.protocols');
goog.require('cljs.core');

/**
 * A marker protocol for identifying the valid context types.
 * @interface
 */
cats.protocols.Context = function(){};


/**
 * Abstraction that establishes a concrete type as a member of a context.
 * 
 *   A great example is the Maybe monad type Just. It implements
 *   this abstraction to establish that Just is part of
 *   the Maybe monad.
 * @interface
 */
cats.protocols.Contextual = function(){};

/**
 * Get the context associated with the type.
 */
cats.protocols._get_context = (function cats$protocols$_get_context(_){
if((((!((_ == null)))) && ((!((_.cats$protocols$Contextual$_get_context$arity$1 == null)))))){
return _.cats$protocols$Contextual$_get_context$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (cats.protocols._get_context[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (cats.protocols._get_context["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Contextual.-get-context",_);
}
}
}
});


/**
 * An abstraction to make a type printable in a platform
 *   independent manner.
 * @interface
 */
cats.protocols.Printable = function(){};

/**
 * Get the repl ready representation of the object.
 */
cats.protocols._repr = (function cats$protocols$_repr(_){
if((((!((_ == null)))) && ((!((_.cats$protocols$Printable$_repr$arity$1 == null)))))){
return _.cats$protocols$Printable$_repr$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (cats.protocols._repr[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (cats.protocols._repr["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Printable.-repr",_);
}
}
}
});


/**
 * A structure with an associative binary operation.
 * @interface
 */
cats.protocols.Semigroup = function(){};

/**
 * An associative addition operation.
 */
cats.protocols._mappend = (function cats$protocols$_mappend(s,sv,sv_SINGLEQUOTE_){
if((((!((s == null)))) && ((!((s.cats$protocols$Semigroup$_mappend$arity$3 == null)))))){
return s.cats$protocols$Semigroup$_mappend$arity$3(s,sv,sv_SINGLEQUOTE_);
} else {
var x__4487__auto__ = (((s == null))?null:s);
var m__4488__auto__ = (cats.protocols._mappend[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(s,sv,sv_SINGLEQUOTE_) : m__4488__auto__.call(null,s,sv,sv_SINGLEQUOTE_));
} else {
var m__4485__auto__ = (cats.protocols._mappend["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(s,sv,sv_SINGLEQUOTE_) : m__4485__auto__.call(null,s,sv,sv_SINGLEQUOTE_));
} else {
throw cljs.core.missing_protocol("Semigroup.-mappend",s);
}
}
}
});


/**
 * A Semigroup which has an identity element with respect to an associative binary operation.
 * @interface
 */
cats.protocols.Monoid = function(){};

/**
 * The identity element for the given monoid.
 */
cats.protocols._mempty = (function cats$protocols$_mempty(s){
if((((!((s == null)))) && ((!((s.cats$protocols$Monoid$_mempty$arity$1 == null)))))){
return s.cats$protocols$Monoid$_mempty$arity$1(s);
} else {
var x__4487__auto__ = (((s == null))?null:s);
var m__4488__auto__ = (cats.protocols._mempty[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(s) : m__4488__auto__.call(null,s));
} else {
var m__4485__auto__ = (cats.protocols._mempty["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(s) : m__4485__auto__.call(null,s));
} else {
throw cljs.core.missing_protocol("Monoid.-mempty",s);
}
}
}
});


/**
 * A type class to extract the
 *   value from a monad context.
 * @interface
 */
cats.protocols.Extract = function(){};

/**
 * Extract the value from monad context.
 */
cats.protocols._extract = (function cats$protocols$_extract(mv){
if((((!((mv == null)))) && ((!((mv.cats$protocols$Extract$_extract$arity$1 == null)))))){
return mv.cats$protocols$Extract$_extract$arity$1(mv);
} else {
var x__4487__auto__ = (((mv == null))?null:mv);
var m__4488__auto__ = (cats.protocols._extract[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(mv) : m__4488__auto__.call(null,mv));
} else {
var m__4485__auto__ = (cats.protocols._extract["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(mv) : m__4485__auto__.call(null,mv));
} else {
throw cljs.core.missing_protocol("Extract.-extract",mv);
}
}
}
});


/**
 * A data type that can be mapped over without altering its context.
 * @interface
 */
cats.protocols.Functor = function(){};

/**
 * Applies function f to the value(s) inside the context of the functor fv.
 */
cats.protocols._fmap = (function cats$protocols$_fmap(ftor,f,fv){
if((((!((ftor == null)))) && ((!((ftor.cats$protocols$Functor$_fmap$arity$3 == null)))))){
return ftor.cats$protocols$Functor$_fmap$arity$3(ftor,f,fv);
} else {
var x__4487__auto__ = (((ftor == null))?null:ftor);
var m__4488__auto__ = (cats.protocols._fmap[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(ftor,f,fv) : m__4488__auto__.call(null,ftor,f,fv));
} else {
var m__4485__auto__ = (cats.protocols._fmap["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(ftor,f,fv) : m__4485__auto__.call(null,ftor,f,fv));
} else {
throw cljs.core.missing_protocol("Functor.-fmap",ftor);
}
}
}
});


/**
 * A 'Functor' of two arguments.
 * @interface
 */
cats.protocols.Bifunctor = function(){};

/**
 * Map over both arguments at the same time.
 */
cats.protocols._bimap = (function cats$protocols$_bimap(btor,f,g,bv){
if((((!((btor == null)))) && ((!((btor.cats$protocols$Bifunctor$_bimap$arity$4 == null)))))){
return btor.cats$protocols$Bifunctor$_bimap$arity$4(btor,f,g,bv);
} else {
var x__4487__auto__ = (((btor == null))?null:btor);
var m__4488__auto__ = (cats.protocols._bimap[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$4(btor,f,g,bv) : m__4488__auto__.call(null,btor,f,g,bv));
} else {
var m__4485__auto__ = (cats.protocols._bimap["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$4(btor,f,g,bv) : m__4485__auto__.call(null,btor,f,g,bv));
} else {
throw cljs.core.missing_protocol("Bifunctor.-bimap",btor);
}
}
}
});


/**
 * The Applicative abstraction.
 * @interface
 */
cats.protocols.Applicative = function(){};

/**
 * Applies the function(s) inside af's context to the value(s)
 *   inside av's context while preserving the context.
 */
cats.protocols._fapply = (function cats$protocols$_fapply(app,af,av){
if((((!((app == null)))) && ((!((app.cats$protocols$Applicative$_fapply$arity$3 == null)))))){
return app.cats$protocols$Applicative$_fapply$arity$3(app,af,av);
} else {
var x__4487__auto__ = (((app == null))?null:app);
var m__4488__auto__ = (cats.protocols._fapply[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(app,af,av) : m__4488__auto__.call(null,app,af,av));
} else {
var m__4485__auto__ = (cats.protocols._fapply["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(app,af,av) : m__4485__auto__.call(null,app,af,av));
} else {
throw cljs.core.missing_protocol("Applicative.-fapply",app);
}
}
}
});

/**
 * Takes any context or monadic value `app` and any value `v`, and puts
 *   the value `v` in the most minimal context (normally `mempty`) of same type of `app`
 */
cats.protocols._pure = (function cats$protocols$_pure(app,v){
if((((!((app == null)))) && ((!((app.cats$protocols$Applicative$_pure$arity$2 == null)))))){
return app.cats$protocols$Applicative$_pure$arity$2(app,v);
} else {
var x__4487__auto__ = (((app == null))?null:app);
var m__4488__auto__ = (cats.protocols._pure[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(app,v) : m__4488__auto__.call(null,app,v));
} else {
var m__4485__auto__ = (cats.protocols._pure["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(app,v) : m__4485__auto__.call(null,app,v));
} else {
throw cljs.core.missing_protocol("Applicative.-pure",app);
}
}
}
});


/**
 * Abstraction of data structures that can be folded to a summary value.
 * @interface
 */
cats.protocols.Foldable = function(){};

/**
 * Left-associative fold of a structure.
 */
cats.protocols._foldl = (function cats$protocols$_foldl(fctx,f,z,xs){
if((((!((fctx == null)))) && ((!((fctx.cats$protocols$Foldable$_foldl$arity$4 == null)))))){
return fctx.cats$protocols$Foldable$_foldl$arity$4(fctx,f,z,xs);
} else {
var x__4487__auto__ = (((fctx == null))?null:fctx);
var m__4488__auto__ = (cats.protocols._foldl[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$4(fctx,f,z,xs) : m__4488__auto__.call(null,fctx,f,z,xs));
} else {
var m__4485__auto__ = (cats.protocols._foldl["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$4(fctx,f,z,xs) : m__4485__auto__.call(null,fctx,f,z,xs));
} else {
throw cljs.core.missing_protocol("Foldable.-foldl",fctx);
}
}
}
});

/**
 * Right-associative fold of a structure.
 */
cats.protocols._foldr = (function cats$protocols$_foldr(fctx,f,z,xs){
if((((!((fctx == null)))) && ((!((fctx.cats$protocols$Foldable$_foldr$arity$4 == null)))))){
return fctx.cats$protocols$Foldable$_foldr$arity$4(fctx,f,z,xs);
} else {
var x__4487__auto__ = (((fctx == null))?null:fctx);
var m__4488__auto__ = (cats.protocols._foldr[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$4(fctx,f,z,xs) : m__4488__auto__.call(null,fctx,f,z,xs));
} else {
var m__4485__auto__ = (cats.protocols._foldr["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$4(fctx,f,z,xs) : m__4485__auto__.call(null,fctx,f,z,xs));
} else {
throw cljs.core.missing_protocol("Foldable.-foldr",fctx);
}
}
}
});


/**
 * Abstraction of data structures that can be traversed from left to right
 *   performing an action on every element.
 * @interface
 */
cats.protocols.Traversable = function(){};

/**
 * Map each element to an Applicative, evaluate the applicatives from left
 *   to right and collect the results.
 */
cats.protocols._traverse = (function cats$protocols$_traverse(tctx,f,tv){
if((((!((tctx == null)))) && ((!((tctx.cats$protocols$Traversable$_traverse$arity$3 == null)))))){
return tctx.cats$protocols$Traversable$_traverse$arity$3(tctx,f,tv);
} else {
var x__4487__auto__ = (((tctx == null))?null:tctx);
var m__4488__auto__ = (cats.protocols._traverse[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(tctx,f,tv) : m__4488__auto__.call(null,tctx,f,tv));
} else {
var m__4485__auto__ = (cats.protocols._traverse["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(tctx,f,tv) : m__4485__auto__.call(null,tctx,f,tv));
} else {
throw cljs.core.missing_protocol("Traversable.-traverse",tctx);
}
}
}
});


/**
 * The Monad abstraction.
 * @interface
 */
cats.protocols.Monad = function(){};

cats.protocols._mreturn = (function cats$protocols$_mreturn(m,v){
if((((!((m == null)))) && ((!((m.cats$protocols$Monad$_mreturn$arity$2 == null)))))){
return m.cats$protocols$Monad$_mreturn$arity$2(m,v);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cats.protocols._mreturn[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,v) : m__4488__auto__.call(null,m,v));
} else {
var m__4485__auto__ = (cats.protocols._mreturn["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,v) : m__4485__auto__.call(null,m,v));
} else {
throw cljs.core.missing_protocol("Monad.-mreturn",m);
}
}
}
});

cats.protocols._mbind = (function cats$protocols$_mbind(m,mv,f){
if((((!((m == null)))) && ((!((m.cats$protocols$Monad$_mbind$arity$3 == null)))))){
return m.cats$protocols$Monad$_mbind$arity$3(m,mv,f);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cats.protocols._mbind[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(m,mv,f) : m__4488__auto__.call(null,m,mv,f));
} else {
var m__4485__auto__ = (cats.protocols._mbind["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(m,mv,f) : m__4485__auto__.call(null,m,mv,f));
} else {
throw cljs.core.missing_protocol("Monad.-mbind",m);
}
}
}
});


/**
 * A complement abstraction for monad that
 *   supports the notion of an identity element.
 * @interface
 */
cats.protocols.MonadZero = function(){};

/**
 * The identity element for the given monadzero.
 */
cats.protocols._mzero = (function cats$protocols$_mzero(m){
if((((!((m == null)))) && ((!((m.cats$protocols$MonadZero$_mzero$arity$1 == null)))))){
return m.cats$protocols$MonadZero$_mzero$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cats.protocols._mzero[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cats.protocols._mzero["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("MonadZero.-mzero",m);
}
}
}
});


/**
 * A complement abstraction for Monad that
 *   supports the notion of addition.
 * @interface
 */
cats.protocols.MonadPlus = function(){};

/**
 * An associative addition operation.
 */
cats.protocols._mplus = (function cats$protocols$_mplus(m,mv,mv_SINGLEQUOTE_){
if((((!((m == null)))) && ((!((m.cats$protocols$MonadPlus$_mplus$arity$3 == null)))))){
return m.cats$protocols$MonadPlus$_mplus$arity$3(m,mv,mv_SINGLEQUOTE_);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cats.protocols._mplus[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(m,mv,mv_SINGLEQUOTE_) : m__4488__auto__.call(null,m,mv,mv_SINGLEQUOTE_));
} else {
var m__4485__auto__ = (cats.protocols._mplus["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(m,mv,mv_SINGLEQUOTE_) : m__4485__auto__.call(null,m,mv,mv_SINGLEQUOTE_));
} else {
throw cljs.core.missing_protocol("MonadPlus.-mplus",m);
}
}
}
});


//# sourceMappingURL=cats.protocols.js.map
