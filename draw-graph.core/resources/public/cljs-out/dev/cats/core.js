// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('cats.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cats.protocols');
goog.require('clojure.set');
goog.require('cats.context');
cats.core.mempty = (function cats$core$mempty(var_args){
var G__36396 = arguments.length;
switch (G__36396) {
case 0:
return cats.core.mempty.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cats.core.mempty.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cats.core.mempty.cljs$core$IFn$_invoke$arity$0 = (function (){
return cats.protocols._mempty(cats.context.infer.cljs$core$IFn$_invoke$arity$0());
});

cats.core.mempty.cljs$core$IFn$_invoke$arity$1 = (function (ctx){
return cats.protocols._mempty(ctx);
});

cats.core.mempty.cljs$lang$maxFixedArity = 1;

cats.core.mappend = (function cats$core$mappend(var_args){
var args__4736__auto__ = [];
var len__4730__auto___36399 = arguments.length;
var i__4731__auto___36400 = (0);
while(true){
if((i__4731__auto___36400 < len__4730__auto___36399)){
args__4736__auto__.push((arguments[i__4731__auto___36400]));

var G__36401 = (i__4731__auto___36400 + (1));
i__4731__auto___36400 = G__36401;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cats.core.mappend.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

cats.core.mappend.cljs$core$IFn$_invoke$arity$variadic = (function (svs){
if(cljs.core.seq(svs)){
} else {
throw (new Error("Assert failed: (seq svs)"));
}

var ctx = cats.context.infer.cljs$core$IFn$_invoke$arity$1(cljs.core.first(svs));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cats.protocols._mappend,ctx),svs);
});

cats.core.mappend.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cats.core.mappend.cljs$lang$applyTo = (function (seq36398){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq36398));
});

/**
 * Given any value `v`, return it wrapped in
 *   the default/effect-free context.
 * 
 *   This is a multi-arity function that with arity `pure/1`
 *   uses the dynamic scope to resolve the current
 *   context. With `pure/2`, you can force a specific context
 *   value.
 * 
 *   Example:
 * 
 *    (with-context either/context
 *      (pure 1))
 *    ;; => #<Right [1]>
 * 
 *    (pure either/context 1)
 *    ;; => #<Right [1]>
 *   
 */
cats.core.pure = (function cats$core$pure(var_args){
var G__36403 = arguments.length;
switch (G__36403) {
case 1:
return cats.core.pure.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cats.core.pure.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cats.core.pure.cljs$core$IFn$_invoke$arity$1 = (function (v){
return cats.core.pure.cljs$core$IFn$_invoke$arity$2(cats.context.infer.cljs$core$IFn$_invoke$arity$0(),v);
});

cats.core.pure.cljs$core$IFn$_invoke$arity$2 = (function (ctx,v){
return cats.protocols._pure(ctx,v);
});

cats.core.pure.cljs$lang$maxFixedArity = 2;

/**
 * This is a monad version of `pure` and works
 *   identically to it.
 */
cats.core.return$ = (function cats$core$return(var_args){
var G__36406 = arguments.length;
switch (G__36406) {
case 1:
return cats.core.return$.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cats.core.return$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cats.core.return$.cljs$core$IFn$_invoke$arity$1 = (function (v){
return cats.core.return$.cljs$core$IFn$_invoke$arity$2(cats.context.infer.cljs$core$IFn$_invoke$arity$0(),v);
});

cats.core.return$.cljs$core$IFn$_invoke$arity$2 = (function (ctx,v){
return cats.protocols._mreturn(ctx,v);
});

cats.core.return$.cljs$lang$maxFixedArity = 2;

/**
 * Given a monadic value `mv` and a function `f`,
 *   apply `f` to the unwrapped value of `mv`.
 * 
 *    (bind (either/right 1) (fn [v]
 *                             (return (inc v))))
 *    ;; => #<Right [2]>
 * 
 *   For convenience, you may prefer to use the `mlet` macro,
 *   which provides a beautiful, `let`-like syntax for
 *   composing operations with the `bind` function.
 */
cats.core.bind = (function cats$core$bind(mv,f){
var ctx = cats.context.infer.cljs$core$IFn$_invoke$arity$1(mv);
return cats.protocols._mbind(ctx,mv,((function (ctx){
return (function (v){
if(cats.context.context_QMARK_(ctx)){
} else {
cats.context.throw_illegal_argument("The provided context does not implements Context.");
}

var _STAR_context_STAR__orig_val__36408 = cats.context._STAR_context_STAR_;
var _STAR_context_STAR__temp_val__36409 = ctx;
cats.context._STAR_context_STAR_ = _STAR_context_STAR__temp_val__36409;

try{return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v));
}finally {cats.context._STAR_context_STAR_ = _STAR_context_STAR__orig_val__36408;
}});})(ctx))
);
});
cats.core.mzero = (function cats$core$mzero(var_args){
var G__36411 = arguments.length;
switch (G__36411) {
case 0:
return cats.core.mzero.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cats.core.mzero.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cats.core.mzero.cljs$core$IFn$_invoke$arity$0 = (function (){
return cats.protocols._mzero(cats.context.infer.cljs$core$IFn$_invoke$arity$0());
});

cats.core.mzero.cljs$core$IFn$_invoke$arity$1 = (function (ctx){
return cats.protocols._mzero(ctx);
});

cats.core.mzero.cljs$lang$maxFixedArity = 1;

cats.core.mplus = (function cats$core$mplus(var_args){
var args__4736__auto__ = [];
var len__4730__auto___36414 = arguments.length;
var i__4731__auto___36415 = (0);
while(true){
if((i__4731__auto___36415 < len__4730__auto___36414)){
args__4736__auto__.push((arguments[i__4731__auto___36415]));

var G__36416 = (i__4731__auto___36415 + (1));
i__4731__auto___36415 = G__36416;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cats.core.mplus.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

cats.core.mplus.cljs$core$IFn$_invoke$arity$variadic = (function (mvs){
if(cljs.core.seq(mvs)){
} else {
throw (new Error("Assert failed: (seq mvs)"));
}

var ctx = cats.context.infer.cljs$core$IFn$_invoke$arity$1(cljs.core.first(mvs));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cats.protocols._mplus,ctx),mvs);
});

cats.core.mplus.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cats.core.mplus.cljs$lang$applyTo = (function (seq36413){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq36413));
});

cats.core.guard = (function cats$core$guard(b){
if(cljs.core.truth_(b)){
return cats.core.return$.cljs$core$IFn$_invoke$arity$1(true);
} else {
return cats.core.mzero.cljs$core$IFn$_invoke$arity$0();
}
});
/**
 * Remove one level of monadic structure.
 *   This is the same as `(bind mv identity)`.
 */
cats.core.join = (function cats$core$join(mv){
return cats.core.bind(mv,cljs.core.identity);
});
/**
 * Apply a function `f` to the value wrapped in functor `fv`,
 *   preserving the context type.
 */
cats.core.fmap = (function cats$core$fmap(var_args){
var G__36418 = arguments.length;
switch (G__36418) {
case 1:
return cats.core.fmap.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cats.core.fmap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cats.core.fmap.cljs$core$IFn$_invoke$arity$1 = (function (f){
return (function (fv){
return cats.core.fmap.cljs$core$IFn$_invoke$arity$2(f,fv);
});
});

cats.core.fmap.cljs$core$IFn$_invoke$arity$2 = (function (f,fv){
var ctx = cats.context.infer.cljs$core$IFn$_invoke$arity$1(fv);
if(cats.context.context_QMARK_(ctx)){
} else {
cats.context.throw_illegal_argument("The provided context does not implements Context.");
}

var _STAR_context_STAR__orig_val__36419 = cats.context._STAR_context_STAR_;
var _STAR_context_STAR__temp_val__36420 = ctx;
cats.context._STAR_context_STAR_ = _STAR_context_STAR__temp_val__36420;

try{return cats.protocols._fmap(ctx,f,fv);
}finally {cats.context._STAR_context_STAR_ = _STAR_context_STAR__orig_val__36419;
}});

cats.core.fmap.cljs$lang$maxFixedArity = 2;

/**
 * Map over both arguments at the same time.
 * 
 *   Given functions `f` and `g` and a value wrapped in a bifunctor `bv`,
 *   apply `f` to a first argument or `g` to a second argument.
 * 
 *    (bimap dec inc (either/right 1)
 *    ;; => #<Right 2>
 * 
 *    (bimap dec inc (either/left 1)
 *    ;; => #<Left 0>
 */
cats.core.bimap = (function cats$core$bimap(var_args){
var G__36423 = arguments.length;
switch (G__36423) {
case 2:
return cats.core.bimap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cats.core.bimap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cats.core.bimap.cljs$core$IFn$_invoke$arity$2 = (function (f,g){
return (function (bv){
return cats.core.bimap.cljs$core$IFn$_invoke$arity$3(f,g,bv);
});
});

cats.core.bimap.cljs$core$IFn$_invoke$arity$3 = (function (f,g,bv){
var ctx = cats.context.infer.cljs$core$IFn$_invoke$arity$1(bv);
if(cats.context.context_QMARK_(ctx)){
} else {
cats.context.throw_illegal_argument("The provided context does not implements Context.");
}

var _STAR_context_STAR__orig_val__36424 = cats.context._STAR_context_STAR_;
var _STAR_context_STAR__temp_val__36425 = ctx;
cats.context._STAR_context_STAR_ = _STAR_context_STAR__temp_val__36425;

try{return cats.protocols._bimap(ctx,f,g,bv);
}finally {cats.context._STAR_context_STAR_ = _STAR_context_STAR__orig_val__36424;
}});

cats.core.bimap.cljs$lang$maxFixedArity = 3;

/**
 * Map covariantly over the first argument.
 * 
 *   Given a function `f` and a value wrapped in a bifunctor `bv`,
 *   apply `f` to the first argument, if present, otherwise leave `bv` unchanged.
 * 
 *    (left-map dec (either/right 1)
 *    ;; => #<Right 1>
 * 
 *    (left-map dec (either/left 1)
 *    ;; => #<Left 0>
 */
cats.core.left_map = (function cats$core$left_map(var_args){
var G__36428 = arguments.length;
switch (G__36428) {
case 1:
return cats.core.left_map.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cats.core.left_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cats.core.left_map.cljs$core$IFn$_invoke$arity$1 = (function (f){
return (function (bv){
return cats.core.left_map.cljs$core$IFn$_invoke$arity$2(f,bv);
});
});

cats.core.left_map.cljs$core$IFn$_invoke$arity$2 = (function (f,bv){
return cats.core.bimap.cljs$core$IFn$_invoke$arity$3(f,cljs.core.identity,bv);
});

cats.core.left_map.cljs$lang$maxFixedArity = 2;

/**
 * Map covariantly over the second argument.
 * 
 *   Given a function `g` and a value wrapped in a bifunctor `bv`,
 *   apply `g` to the second argument, if present, otherwise leave `bv` unchanged.
 * 
 *    (right-map inc (either/right 1)
 *    ;; => #<Right 2>
 * 
 *    (right-map inc (either/left 1)
 *    ;; => #<Left 1>
 */
cats.core.right_map = (function cats$core$right_map(var_args){
var G__36431 = arguments.length;
switch (G__36431) {
case 1:
return cats.core.right_map.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cats.core.right_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cats.core.right_map.cljs$core$IFn$_invoke$arity$1 = (function (g){
return (function (bv){
return cats.core.right_map.cljs$core$IFn$_invoke$arity$2(g,bv);
});
});

cats.core.right_map.cljs$core$IFn$_invoke$arity$2 = (function (g,bv){
return cats.core.bimap.cljs$core$IFn$_invoke$arity$3(cljs.core.identity,g,bv);
});

cats.core.right_map.cljs$lang$maxFixedArity = 2;

/**
 * Given a function wrapped in a monadic context `af`,
 *   and a value wrapped in a monadic context `av`,
 *   apply the unwrapped function to the unwrapped value
 *   and return the result, wrapped in the same context as `av`.
 * 
 *   This function is variadic, so it can be used like
 *   a Haskell-style left-associative fapply.
 */
cats.core.fapply = (function cats$core$fapply(var_args){
var args__4736__auto__ = [];
var len__4730__auto___36435 = arguments.length;
var i__4731__auto___36436 = (0);
while(true){
if((i__4731__auto___36436 < len__4730__auto___36435)){
args__4736__auto__.push((arguments[i__4731__auto___36436]));

var G__36437 = (i__4731__auto___36436 + (1));
i__4731__auto___36436 = G__36437;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cats.core.fapply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cats.core.fapply.cljs$core$IFn$_invoke$arity$variadic = (function (af,avs){
if(cljs.core.seq(avs)){
} else {
throw (new Error("Assert failed: (seq avs)"));
}

var ctx = cats.context.infer.cljs$core$IFn$_invoke$arity$1(af);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cats.protocols._fapply,ctx),af,avs);
});

cats.core.fapply.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cats.core.fapply.cljs$lang$applyTo = (function (seq36433){
var G__36434 = cljs.core.first(seq36433);
var seq36433__$1 = cljs.core.next(seq36433);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36434,seq36433__$1);
});

/**
 * Given an expression and a monadic value,
 *   if the expression is logical true, return the monadic value.
 *   Otherwise, return nil in a monadic context.
 */
cats.core.when = (function cats$core$when(var_args){
var G__36439 = arguments.length;
switch (G__36439) {
case 2:
return cats.core.when.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cats.core.when.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cats.core.when.cljs$core$IFn$_invoke$arity$2 = (function (b,mv){
return cats.core.when.cljs$core$IFn$_invoke$arity$3(cats.context.infer.cljs$core$IFn$_invoke$arity$1(mv),b,mv);
});

cats.core.when.cljs$core$IFn$_invoke$arity$3 = (function (ctx,b,mv){
if(cljs.core.truth_(b)){
return mv;
} else {
return cats.core.pure.cljs$core$IFn$_invoke$arity$2(ctx,null);
}
});

cats.core.when.cljs$lang$maxFixedArity = 3;

/**
 * Given an expression and a monadic value,
 *   if the expression is not logical true, return the monadic value.
 *   Otherwise, return nil in a monadic context.
 */
cats.core.unless = (function cats$core$unless(var_args){
var G__36442 = arguments.length;
switch (G__36442) {
case 2:
return cats.core.unless.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cats.core.unless.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cats.core.unless.cljs$core$IFn$_invoke$arity$2 = (function (b,mv){
return cats.core.when.cljs$core$IFn$_invoke$arity$2(cljs.core.not(b),mv);
});

cats.core.unless.cljs$core$IFn$_invoke$arity$3 = (function (ctx,b,mv){
return cats.core.when.cljs$core$IFn$_invoke$arity$3(ctx,cljs.core.not(b),mv);
});

cats.core.unless.cljs$lang$maxFixedArity = 3;

cats.core.deps = (function cats$core$deps(expr,syms){
if((((expr instanceof cljs.core.Symbol)) && (cljs.core.contains_QMARK_(syms,expr)))){
return (new cljs.core.List(null,expr,null,(1),null));
} else {
if(cljs.core.seq_QMARK_(expr)){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__36444_SHARP_){
return (cats.core.deps.cljs$core$IFn$_invoke$arity$2 ? cats.core.deps.cljs$core$IFn$_invoke$arity$2(p1__36444_SHARP_,syms) : cats.core.deps.call(null,p1__36444_SHARP_,syms));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expr], 0));
} else {
return cljs.core.List.EMPTY;

}
}
});
cats.core.rename_sym = (function cats$core$rename_sym(expr,renames){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(renames,expr,expr);
});
cats.core.rename = (function cats$core$rename(expr,renames){
if((expr instanceof cljs.core.Symbol)){
return cats.core.rename_sym(expr,renames);
} else {
if(cljs.core.seq_QMARK_(expr)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36445_SHARP_){
return (cats.core.rename.cljs$core$IFn$_invoke$arity$2 ? cats.core.rename.cljs$core$IFn$_invoke$arity$2(p1__36445_SHARP_,renames) : cats.core.rename.call(null,p1__36445_SHARP_,renames));
}),expr);
} else {
return expr;

}
}
});
cats.core.dedupe_symbols_STAR_ = (function cats$core$dedupe_symbols_STAR_(sym__GT_ap,body){
var renamer = (function cats$core$dedupe_symbols_STAR__$_renamer(p__36453,p__36454){
var map__36455 = p__36453;
var map__36455__$1 = (((((!((map__36455 == null))))?(((((map__36455.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36455.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36455):map__36455);
var summ = map__36455__$1;
var body__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36455__$1,cljs.core.cst$kw$body);
var syms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36455__$1,cljs.core.cst$kw$syms);
var aps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36455__$1,cljs.core.cst$kw$aps);
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36455__$1,cljs.core.cst$kw$seen);
var renames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36455__$1,cljs.core.cst$kw$renames);
var vec__36456 = p__36454;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36456,(0),null);
var ap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36456,(1),null);
var ap_SINGLEQUOTE_ = cats.core.rename(ap,renames);
var new_aps = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(aps,ap_SINGLEQUOTE_);
if(cljs.core.truth_((seen.cljs$core$IFn$_invoke$arity$1 ? seen.cljs$core$IFn$_invoke$arity$1(s) : seen.call(null,s)))){
var s_SINGLEQUOTE_ = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var new_syms = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(syms,s_SINGLEQUOTE_);
var new_seen = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,s_SINGLEQUOTE_);
var new_renames = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(renames,s,s_SINGLEQUOTE_);
var new_body = cats.core.rename(body__$1,new_renames);
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$syms,new_syms,cljs.core.cst$kw$aps,new_aps,cljs.core.cst$kw$seen,new_seen,cljs.core.cst$kw$renames,new_renames,cljs.core.cst$kw$body,new_body], null);
} else {
var new_syms = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(syms,s);
var new_seen = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,s);
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$syms,new_syms,cljs.core.cst$kw$aps,new_aps,cljs.core.cst$kw$seen,new_seen,cljs.core.cst$kw$renames,renames,cljs.core.cst$kw$body,body__$1], null);
}
});
var summ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(renamer,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$syms,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$aps,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$seen,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$renames,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$body,body], null),sym__GT_ap);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.cst$kw$syms.cljs$core$IFn$_invoke$arity$1(summ),cljs.core.cst$kw$aps.cljs$core$IFn$_invoke$arity$1(summ)),cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(summ)], null);
});
cats.core.dedupe_symbols = (function cats$core$dedupe_symbols(bindings,body){
var syms = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,bindings);
var aps = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,bindings);
var sym__GT_ap = cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,syms,aps);
return cats.core.dedupe_symbols_STAR_(sym__GT_ap,body);
});
cats.core.dependency_map = (function cats$core$dependency_map(sym__GT_ap){
var syms = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,sym__GT_ap);
var symset = cljs.core.set(syms);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4523__auto__ = ((function (syms,symset){
return (function cats$core$dependency_map_$_iter__36460(s__36461){
return (new cljs.core.LazySeq(null,((function (syms,symset){
return (function (){
var s__36461__$1 = s__36461;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__36461__$1);
if(temp__5720__auto__){
var s__36461__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36461__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__36461__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__36463 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__36462 = (0);
while(true){
if((i__36462 < size__4522__auto__)){
var vec__36464 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__36462);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36464,(0),null);
var ap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36464,(1),null);
var ds = cljs.core.set(cats.core.deps(ap,symset));
cljs.core.chunk_append(b__36463,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,ds], null));

var G__36470 = (i__36462 + (1));
i__36462 = G__36470;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36463),cats$core$dependency_map_$_iter__36460(cljs.core.chunk_rest(s__36461__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36463),null);
}
} else {
var vec__36467 = cljs.core.first(s__36461__$2);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36467,(0),null);
var ap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36467,(1),null);
var ds = cljs.core.set(cats.core.deps(ap,symset));
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,ds], null),cats$core$dependency_map_$_iter__36460(cljs.core.rest(s__36461__$2)));
}
} else {
return null;
}
break;
}
});})(syms,symset))
,null,null));
});})(syms,symset))
;
return iter__4523__auto__(sym__GT_ap);
})());
});
cats.core.remove_deps = (function cats$core$remove_deps(deps,symset){
var removed = (function (){var iter__4523__auto__ = (function cats$core$remove_deps_$_iter__36471(s__36472){
return (new cljs.core.LazySeq(null,(function (){
var s__36472__$1 = s__36472;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__36472__$1);
if(temp__5720__auto__){
var s__36472__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36472__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__36472__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__36474 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__36473 = (0);
while(true){
if((i__36473 < size__4522__auto__)){
var vec__36475 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__36473);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36475,(0),null);
var depset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36475,(1),null);
cljs.core.chunk_append(b__36474,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,clojure.set.difference.cljs$core$IFn$_invoke$arity$2(depset,symset)], null));

var G__36481 = (i__36473 + (1));
i__36473 = G__36481;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36474),cats$core$remove_deps_$_iter__36471(cljs.core.chunk_rest(s__36472__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36474),null);
}
} else {
var vec__36478 = cljs.core.first(s__36472__$2);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36478,(0),null);
var depset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36478,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,clojure.set.difference.cljs$core$IFn$_invoke$arity$2(depset,symset)], null),cats$core$remove_deps_$_iter__36471(cljs.core.rest(s__36472__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(deps);
})();
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(deps),removed);
});
cats.core.topo_sort_STAR_ = (function cats$core$topo_sort_STAR_(deps,seen,batches,current){
while(true){
if(cljs.core.empty_QMARK_(deps)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(batches,current);
} else {
var dep = cljs.core.first(deps);
var vec__36482 = dep;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36482,(0),null);
var dependencies = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36482,(1),null);
var dependant_QMARK_ = cljs.core.some(dependencies,seen);
if((dependant_QMARK_ == null)){
var G__36485 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(deps,(1));
var G__36486 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,s);
var G__36487 = batches;
var G__36488 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current,s);
deps = G__36485;
seen = G__36486;
batches = G__36487;
current = G__36488;
continue;
} else {
var G__36489 = cats.core.remove_deps(cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(deps,(1)),cljs.core.set(current));
var G__36490 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,s);
var G__36491 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(batches,current);
var G__36492 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null);
deps = G__36489;
seen = G__36490;
batches = G__36491;
current = G__36492;
continue;
}
}
break;
}
});
cats.core.topo_sort = (function cats$core$topo_sort(deps){
var syms = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,deps));
return cats.core.topo_sort_STAR_(deps,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
});
cats.core.bindings__GT_batches = (function cats$core$bindings__GT_batches(bindings){
var syms = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,bindings);
var aps = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,bindings);
var sym__GT_ap = cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,syms,aps);
var sorted_deps = cats.core.topo_sort(cats.core.dependency_map(sym__GT_ap));
return sorted_deps;
});
cats.core.alet_STAR_ = (function cats$core$alet_STAR_(batches,env,body){
var fb = cljs.core.first(batches);
var rb = cljs.core.rest(batches);
var fs = cljs.core.first(fb);
var fa = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,fs);
var code = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (fb,rb,fs,fa){
return (function (acc,syms){
var fs__$1 = cljs.core.first(syms);
var fa__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,fs__$1);
var rs = cljs.core.rest(syms);
var faps = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (fs__$1,fa__$1,rs,fb,rb,fs,fa){
return (function (p1__36493_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,p1__36493_SHARP_);
});})(fs__$1,fa__$1,rs,fb,rb,fs,fa))
,rs);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(syms),(1))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cats$core_SLASH_fmap,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_fn,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,fs__$1,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,acc,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,fa__$1,null,(1),null))], 0))));
} else {
var cf = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (fs__$1,fa__$1,rs,faps,fb,rb,fs,fa){
return (function (f,sym){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_fn,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,sym,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,f,null,(1),null))], 0))));
});})(fs__$1,fa__$1,rs,faps,fb,rb,fs,fa))
,acc,cljs.core.reverse(syms));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cats$core_SLASH_fapply,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cats$core_SLASH_fmap,null,(1),null)),(new cljs.core.List(null,cf,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,fa__$1,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([faps], 0))));
}
});})(fb,rb,fs,fa))
,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),body))),cljs.core.reverse(batches));
var join_count = (cljs.core.count(batches) - (1));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (fb,rb,fs,fa,code,join_count){
return (function (acc,_){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cats$core_SLASH_join,null,(1),null)),(new cljs.core.List(null,acc,null,(1),null)))));
});})(fb,rb,fs,fa,code,join_count))
,code,cljs.core.range.cljs$core$IFn$_invoke$arity$1(join_count));
});
var ret__4776__auto___36498 = (function (){
/**
 * Apply a pure function to applicative arguments, e.g.
 * 
 * (ap + (just 1) (just 2) (just 3))
 * ;; => #<Just [6]>
 * (ap str ["hi" "lo"] ["bye" "woah" "hey"])
 * ;; => ["hibye" "hiwoah" "hihey"
 *        "lobye" "lowoah" "lohey"]
 * 
 * `ap` is essentially sugar for `(apply fapply (pure f) args)`,
 * but for the common case where you have a pure, uncurried,
 * possibly variadic function.
 * 
 * `ap` actually desugars in `alet` form:
 * 
 * (macroexpand-1 `(ap + (just 1) (just2)))
 * ;; => (alet [a1 (just 1) a2 (just 2)] (+ a1 a2))
 * 
 * That way, variadic functions Just Work, without needing to specify
 * an arity separately.
 * 
 * If you're familiar with Haskell, this is closest to writing
 * "in Applicative style": you can straightforwardly convert
 * pure function application to effectful application by with
 * some light syntax (<$> and <*> in case of Haskell, and `ap` here).
 * 
 * See the original Applicative paper for more inspiration:
 * http://staff.city.ac.uk/~ross/papers/Applicative.pdf
 */
cats.core.ap = (function cats$core$ap(var_args){
var args__4736__auto__ = [];
var len__4730__auto___36499 = arguments.length;
var i__4731__auto___36500 = (0);
while(true){
if((i__4731__auto___36500 < len__4730__auto___36499)){
args__4736__auto__.push((arguments[i__4731__auto___36500]));

var G__36501 = (i__4731__auto___36500 + (1));
i__4731__auto___36500 = G__36501;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cats.core.ap.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cats.core.ap.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,f,args){
var syms = cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(cljs.core.count(args),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.gensym,"arg"));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cats$core_SLASH_alet,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(syms,args))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,f,null,(1),null)),syms))),null,(1),null))], 0))));
});

cats.core.ap.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cats.core.ap.cljs$lang$applyTo = (function (seq36494){
var G__36495 = cljs.core.first(seq36494);
var seq36494__$1 = cljs.core.next(seq36494);
var G__36496 = cljs.core.first(seq36494__$1);
var seq36494__$2 = cljs.core.next(seq36494__$1);
var G__36497 = cljs.core.first(seq36494__$2);
var seq36494__$3 = cljs.core.next(seq36494__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36495,G__36496,G__36497,seq36494__$3);
});

return null;
})()
;
cats.core.ap.cljs$lang$macro = true;

var ret__4776__auto___36506 = (function (){
/**
 * Thread like `->`, within an applicative idiom.
 * 
 *   Compare:
 * 
 *   (macroexpand-1 `(-> a b c (d e f)))
 *   => (d (c (b a) e f)
 * 
 *   with:
 * 
 *   (macroexpand-1 `(ap-> a b c (d e f))
 *   => (ap d (ap c (ap b a) e f))
 *   
 */
cats.core.ap__GT_ = (function cats$core$ap__GT_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___36507 = arguments.length;
var i__4731__auto___36508 = (0);
while(true){
if((i__4731__auto___36508 < len__4730__auto___36507)){
args__4736__auto__.push((arguments[i__4731__auto___36508]));

var G__36509 = (i__4731__auto___36508 + (1));
i__4731__auto___36508 = G__36509;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cats.core.ap__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cats.core.ap__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var x__$1 = x;
var forms__$1 = forms;
while(true){
if(cljs.core.truth_(forms__$1)){
var form = cljs.core.first(forms__$1);
var threaded = ((cljs.core.seq_QMARK_(form))?cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cats$core_SLASH_ap,null,(1),null)),(new cljs.core.List(null,cljs.core.first(form),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,x__$1,null,(1),null)),cljs.core.next(form)], 0)))),cljs.core.meta(form)):cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cats$core_SLASH_ap,null,(1),null)),(new cljs.core.List(null,form,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,x__$1,null,(1),null))], 0)))));
var G__36510 = threaded;
var G__36511 = cljs.core.next(forms__$1);
x__$1 = G__36510;
forms__$1 = G__36511;
continue;
} else {
return x__$1;
}
break;
}
});

cats.core.ap__GT_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cats.core.ap__GT_.cljs$lang$applyTo = (function (seq36502){
var G__36503 = cljs.core.first(seq36502);
var seq36502__$1 = cljs.core.next(seq36502);
var G__36504 = cljs.core.first(seq36502__$1);
var seq36502__$2 = cljs.core.next(seq36502__$1);
var G__36505 = cljs.core.first(seq36502__$2);
var seq36502__$3 = cljs.core.next(seq36502__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36503,G__36504,G__36505,seq36502__$3);
});

return null;
})()
;
cats.core.ap__GT_.cljs$lang$macro = true;

var ret__4776__auto___36516 = (function (){
/**
 * Thread like `->>`, within an applicative idiom.
 * See `cats.labs.sugar/ap->` for more in-depth discussion.
 */
cats.core.ap__GT__GT_ = (function cats$core$ap__GT__GT_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___36517 = arguments.length;
var i__4731__auto___36518 = (0);
while(true){
if((i__4731__auto___36518 < len__4730__auto___36517)){
args__4736__auto__.push((arguments[i__4731__auto___36518]));

var G__36519 = (i__4731__auto___36518 + (1));
i__4731__auto___36518 = G__36519;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cats.core.ap__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cats.core.ap__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var x__$1 = x;
var forms__$1 = forms;
while(true){
if(cljs.core.truth_(forms__$1)){
var form = cljs.core.first(forms__$1);
var threaded = ((cljs.core.seq_QMARK_(form))?cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cats$core_SLASH_ap,null,(1),null)),(new cljs.core.List(null,cljs.core.first(form),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.next(form),(new cljs.core.List(null,x__$1,null,(1),null))], 0)))),cljs.core.meta(form)):cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cats$core_SLASH_ap,null,(1),null)),(new cljs.core.List(null,form,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,x__$1,null,(1),null))], 0)))));
var G__36520 = threaded;
var G__36521 = cljs.core.next(forms__$1);
x__$1 = G__36520;
forms__$1 = G__36521;
continue;
} else {
return x__$1;
}
break;
}
});

cats.core.ap__GT__GT_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cats.core.ap__GT__GT_.cljs$lang$applyTo = (function (seq36512){
var G__36513 = cljs.core.first(seq36512);
var seq36512__$1 = cljs.core.next(seq36512);
var G__36514 = cljs.core.first(seq36512__$1);
var seq36512__$2 = cljs.core.next(seq36512__$1);
var G__36515 = cljs.core.first(seq36512__$2);
var seq36512__$3 = cljs.core.next(seq36512__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36513,G__36514,G__36515,seq36512__$3);
});

return null;
})()
;
cats.core.ap__GT__GT_.cljs$lang$macro = true;

var ret__4776__auto___36531 = (function (){
/**
 * Thread like `as->`, within an applicative idiom.
 * See `cats.labs.sugar/ap->` for more in-depth discussion.
 */
cats.core.as_ap__GT_ = (function cats$core$as_ap__GT_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___36532 = arguments.length;
var i__4731__auto___36533 = (0);
while(true){
if((i__4731__auto___36533 < len__4730__auto___36532)){
args__4736__auto__.push((arguments[i__4731__auto___36533]));

var G__36534 = (i__4731__auto___36533 + (1));
i__4731__auto___36533 = G__36534;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((4) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((4)),(0),null)):null);
return cats.core.as_ap__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4737__auto__);
});

cats.core.as_ap__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,name,forms){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(name),(function (){var iter__4523__auto__ = (function cats$core$iter__36527(s__36528){
return (new cljs.core.LazySeq(null,(function (){
var s__36528__$1 = s__36528;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__36528__$1);
if(temp__5720__auto__){
var s__36528__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36528__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__36528__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__36530 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__36529 = (0);
while(true){
if((i__36529 < size__4522__auto__)){
var form = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__36529);
cljs.core.chunk_append(b__36530,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cats$core_SLASH_ap,null,(1),null)),form))));

var G__36535 = (i__36529 + (1));
i__36529 = G__36535;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36530),cats$core$iter__36527(cljs.core.chunk_rest(s__36528__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36530),null);
}
} else {
var form = cljs.core.first(s__36528__$2);
return cljs.core.cons(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cats$core_SLASH_ap,null,(1),null)),form))),cats$core$iter__36527(cljs.core.rest(s__36528__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(forms);
})())], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,name,null,(1),null))], 0))));
});

cats.core.as_ap__GT_.cljs$lang$maxFixedArity = (4);

/** @this {Function} */
cats.core.as_ap__GT_.cljs$lang$applyTo = (function (seq36522){
var G__36523 = cljs.core.first(seq36522);
var seq36522__$1 = cljs.core.next(seq36522);
var G__36524 = cljs.core.first(seq36522__$1);
var seq36522__$2 = cljs.core.next(seq36522__$1);
var G__36525 = cljs.core.first(seq36522__$2);
var seq36522__$3 = cljs.core.next(seq36522__$2);
var G__36526 = cljs.core.first(seq36522__$3);
var seq36522__$4 = cljs.core.next(seq36522__$3);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36523,G__36524,G__36525,G__36526,seq36522__$4);
});

return null;
})()
;
cats.core.as_ap__GT_.cljs$lang$macro = true;

var ret__4776__auto___36540 = (function (){
/**
 * Like `->`, but with monadic binding instead of pure application.
 * A mnemonic for the name is a pun on `>>=`, the monadic bind operator,
 * and clojure's regular arrow macros.
 * 
 * You can think of it as generalizing the `some->` thread macro
 * to all Monads instead of just Maybe.
 * 
 * Alternatively, if you think of the regular thread macro as
 * sugar for `let`:
 * 
 * (-> :a b (c (other args)) d)
 * =>
 * (let [res (b :a)
 *       res (c res (other args))
 *       res (d res)]
 *   res)
 * 
 * Then `->=` is sugar for cats.core/mlet:
 * 
 * (->= m-a b (c (other args)) d)
 * (mlet [res m-a
 *        res (c res (other args))
 *        res (d res)]
 *   (return res))
 * 
 * Note that extra args in this context are assumed pure, and will
 * be evaluated along with the function itself; this also matches
 * the behavior of `some->` wrt extra args.
 * 
 * Threading through pure functions is somewhat awkward, but can be done:
 * 
 * (->= m-a
 *      monadic-fn
 *      (-> pure-fn
 *          other-pure-fn
 *          m/return)
 *      other-monadic-fn)
 */
cats.core.__GT__EQ_ = (function cats$core$__GT__EQ_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___36541 = arguments.length;
var i__4731__auto___36542 = (0);
while(true){
if((i__4731__auto___36542 < len__4730__auto___36541)){
args__4736__auto__.push((arguments[i__4731__auto___36542]));

var G__36543 = (i__4731__auto___36542 + (1));
i__4731__auto___36542 = G__36543;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cats.core.__GT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cats.core.__GT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,forms){
var g = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var pstep = ((function (g){
return (function (step){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH__DASH__GT_,null,(1),null)),(new cljs.core.List(null,g,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,step,null,(1),null))], 0))));
});})(g))
;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cats$core_SLASH_mlet,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,g,null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(g),cljs.core.map.cljs$core$IFn$_invoke$arity$2(pstep,forms))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cats$core_SLASH_return,null,(1),null)),(new cljs.core.List(null,g,null,(1),null))))),null,(1),null))], 0))));
});

cats.core.__GT__EQ_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cats.core.__GT__EQ_.cljs$lang$applyTo = (function (seq36536){
var G__36537 = cljs.core.first(seq36536);
var seq36536__$1 = cljs.core.next(seq36536);
var G__36538 = cljs.core.first(seq36536__$1);
var seq36536__$2 = cljs.core.next(seq36536__$1);
var G__36539 = cljs.core.first(seq36536__$2);
var seq36536__$3 = cljs.core.next(seq36536__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36537,G__36538,G__36539,seq36536__$3);
});

return null;
})()
;
cats.core.__GT__EQ_.cljs$lang$macro = true;

var ret__4776__auto___36548 = (function (){
/**
 * Like ->>, but with monadic binding instead of pure application.
 * See `cats.labs.sugar/->=` for more in-depth discussion.
 */
cats.core.__GT__GT__EQ_ = (function cats$core$__GT__GT__EQ_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___36549 = arguments.length;
var i__4731__auto___36550 = (0);
while(true){
if((i__4731__auto___36550 < len__4730__auto___36549)){
args__4736__auto__.push((arguments[i__4731__auto___36550]));

var G__36551 = (i__4731__auto___36550 + (1));
i__4731__auto___36550 = G__36551;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cats.core.__GT__GT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cats.core.__GT__GT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,forms){
var g = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var pstep = ((function (g){
return (function (step){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH__DASH__GT__GT_,null,(1),null)),(new cljs.core.List(null,g,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,step,null,(1),null))], 0))));
});})(g))
;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cats$core_SLASH_mlet,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,g,null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(g),cljs.core.map.cljs$core$IFn$_invoke$arity$2(pstep,forms))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cats$core_SLASH_return,null,(1),null)),(new cljs.core.List(null,g,null,(1),null))))),null,(1),null))], 0))));
});

cats.core.__GT__GT__EQ_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cats.core.__GT__GT__EQ_.cljs$lang$applyTo = (function (seq36544){
var G__36545 = cljs.core.first(seq36544);
var seq36544__$1 = cljs.core.next(seq36544);
var G__36546 = cljs.core.first(seq36544__$1);
var seq36544__$2 = cljs.core.next(seq36544__$1);
var G__36547 = cljs.core.first(seq36544__$2);
var seq36544__$3 = cljs.core.next(seq36544__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36545,G__36546,G__36547,seq36544__$3);
});

return null;
})()
;
cats.core.__GT__GT__EQ_.cljs$lang$macro = true;

var ret__4776__auto___36557 = (function (){
/**
 * Like `as->`, but with monadic binding instead of pure application.
 * See `cats.labs.sugar/->=` for more in-depth discussion.
 */
cats.core.as__GT__EQ_ = (function cats$core$as__GT__EQ_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___36558 = arguments.length;
var i__4731__auto___36559 = (0);
while(true){
if((i__4731__auto___36559 < len__4730__auto___36558)){
args__4736__auto__.push((arguments[i__4731__auto___36559]));

var G__36560 = (i__4731__auto___36559 + (1));
i__4731__auto___36559 = G__36560;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((4) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((4)),(0),null)):null);
return cats.core.as__GT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4737__auto__);
});

cats.core.as__GT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,name,forms){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cats$core_SLASH_mlet,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(name),forms)], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cats$core_SLASH_return,null,(1),null)),(new cljs.core.List(null,name,null,(1),null))))),null,(1),null))], 0))));
});

cats.core.as__GT__EQ_.cljs$lang$maxFixedArity = (4);

/** @this {Function} */
cats.core.as__GT__EQ_.cljs$lang$applyTo = (function (seq36552){
var G__36553 = cljs.core.first(seq36552);
var seq36552__$1 = cljs.core.next(seq36552);
var G__36554 = cljs.core.first(seq36552__$1);
var seq36552__$2 = cljs.core.next(seq36552__$1);
var G__36555 = cljs.core.first(seq36552__$2);
var seq36552__$3 = cljs.core.next(seq36552__$2);
var G__36556 = cljs.core.first(seq36552__$3);
var seq36552__$4 = cljs.core.next(seq36552__$3);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36553,G__36554,G__36555,G__36556,seq36552__$4);
});

return null;
})()
;
cats.core.as__GT__EQ_.cljs$lang$macro = true;

cats.core.arglists = (function cats$core$arglists(var$){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(var$),cljs.core.cst$kw$arglists);
});
cats.core.single_arity_QMARK_ = (function cats$core$single_arity_QMARK_(var$){
var args = cats.core.arglists(var$);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(args),(1))) && (cljs.core.not(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$_AMPERSAND_,null], null), null),cljs.core.first(args)))));
});
cats.core.arity = (function cats$core$arity(var$){
if(cats.core.single_arity_QMARK_(var$)){
} else {
throw (new Error("Assert failed: (single-arity? var)"));
}

return cljs.core.count(cljs.core.first(cats.core.arglists(var$)));
});
/**
 * Given a collection of monadic values, collect
 *   their values in a seq returned in the monadic context.
 * 
 *    (require '[cats.context :as ctx]
 *             '[cats.monad.maybe :as maybe]
 *             '[cats.core :as m])
 * 
 *    (m/sequence [(maybe/just 2) (maybe/just 3)])
 *    ;; => #<Just [[2, 3]]>
 * 
 *    (m/sequence [(maybe/nothing) (maybe/just 3)])
 *    ;; => #<Nothing>
 * 
 *    (ctx/with-context maybe/context
 *      (m/sequence []))
 *    ;; => #<Just [()]>
 *   
 */
cats.core.sequence = (function cats$core$sequence(mvs){
if(cljs.core.empty_QMARK_(mvs)){
return cats.core.return$.cljs$core$IFn$_invoke$arity$1(cljs.core.List.EMPTY);
} else {
var ctx = cats.context.infer.cljs$core$IFn$_invoke$arity$1(cljs.core.first(mvs));
if(cats.context.context_QMARK_(ctx)){
} else {
cats.context.throw_illegal_argument("The provided context does not implements Context.");
}

var _STAR_context_STAR__orig_val__36564 = cats.context._STAR_context_STAR_;
var _STAR_context_STAR__temp_val__36565 = ctx;
cats.context._STAR_context_STAR_ = _STAR_context_STAR__temp_val__36565;

try{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (_STAR_context_STAR__orig_val__36564,_STAR_context_STAR__temp_val__36565,ctx){
return (function (mvs__$1,mv){
return cats.core.bind(mv,((function (_STAR_context_STAR__orig_val__36564,_STAR_context_STAR__temp_val__36565,ctx){
return (function (v){
return cats.core.bind(mvs__$1,((function (_STAR_context_STAR__orig_val__36564,_STAR_context_STAR__temp_val__36565,ctx){
return (function (vs){
return cats.core.return$.cljs$core$IFn$_invoke$arity$1(cljs.core.cons(v,vs));
});})(_STAR_context_STAR__orig_val__36564,_STAR_context_STAR__temp_val__36565,ctx))
);
});})(_STAR_context_STAR__orig_val__36564,_STAR_context_STAR__temp_val__36565,ctx))
);
});})(_STAR_context_STAR__orig_val__36564,_STAR_context_STAR__temp_val__36565,ctx))
,cats.core.return$.cljs$core$IFn$_invoke$arity$1(cljs.core.List.EMPTY),cljs.core.reverse(mvs));
}finally {cats.context._STAR_context_STAR_ = _STAR_context_STAR__orig_val__36564;
}}
});
/**
 * Given a function `mf` that takes a value and puts it into a
 *   monadic context, and a collection, map `mf` over the collection,
 *   calling `sequence` on the results.
 * 
 *    (require '[cats.context :as ctx]
 *             '[cats.monad.maybe :as maybe]
 *             '[cats.core :as m])
 * 
 *    (m/mapseq maybe/just [2 3])
 *    ;=> <Just [[2 3]]>
 * 
 *    (m/mapseq (fn [v]
 *                (if (odd? v)
 *                  (maybe/just v)
 *                  (maybe/nothing)))
 *              [1 2])
 *    ;; => #<Nothing>
 * 
 *    (ctx/with-context maybe/context
 *      (mapseq #(maybe/just (* % 2)) []))
 *    ;; => #<Just [()]>
 *   
 */
cats.core.mapseq = (function cats$core$mapseq(mf,coll){
return cats.core.sequence(cljs.core.map.cljs$core$IFn$_invoke$arity$2(mf,coll));
});
/**
 * Same as `mapseq` but with the arguments flipped.
 * 
 *   Let's see a little example:
 * 
 *    (m/forseq [2 3] maybe/just)
 *    ;; => <Just [[2 3]]>
 * 
 *   Yet an other example that fails:
 * 
 *    (m/forseq [1 2]
 *              (fn [v]
 *                (if (odd? v)
 *                  (maybe/just v)
 *                  (maybe/nothing))))
 *    ;; => <Nothing>
 *   
 */
cats.core.forseq = (function cats$core$forseq(vs,mf){
return cats.core.mapseq(mf,vs);
});
/**
 * Apply a predicate to a value in a `MonadZero` instance,
 *   returning the identity element when the predicate does not hold.
 * 
 *   Otherwise, return the instance unchanged.
 * 
 *    (require '[cats.monad.maybe :as maybe])
 *    (require '[cats.core :as m])
 * 
 *    (m/filter (partial < 2) (maybe/just 3))
 *    ;=> <Just [3]>
 * 
 *    (m/filter (partial < 4) (maybe/just 3))
 *    ;=> <Nothing>
 *   
 */
cats.core.filter = (function cats$core$filter(p,mv){
return cats.core.bind(mv,(function (v){
return cats.core.bind(cats.core.guard((p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(v) : p.call(null,v))),(function (G__36566){
return cats.core.return$.cljs$core$IFn$_invoke$arity$1(v);
}));
}));
});
/**
 * A Haskell-style `fmap` alias.
 */
cats.core._LT_$_GT_ = cats.core.fmap;
/**
 * A Haskell-style `fapply` alias.
 */
cats.core._LT__STAR__GT_ = cats.core.fapply;
/**
 * Perform a Haskell-style left-associative bind.
 * 
 *   Let's see it in action:
 * 
 *    (>>= (just 1) (comp just inc) (comp just inc))
 *    ;; => #<Just [3]>
 *   
 */
cats.core._GT__GT__EQ_ = (function cats$core$_GT__GT__EQ_(var_args){
var G__36571 = arguments.length;
switch (G__36571) {
case 2:
return cats.core._GT__GT__EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___36573 = arguments.length;
var i__4731__auto___36574 = (0);
while(true){
if((i__4731__auto___36574 < len__4730__auto___36573)){
args_arr__4751__auto__.push((arguments[i__4731__auto___36574]));

var G__36575 = (i__4731__auto___36574 + (1));
i__4731__auto___36574 = G__36575;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((2)),(0),null));
return cats.core._GT__GT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4752__auto__);

}
});

cats.core._GT__GT__EQ_.cljs$core$IFn$_invoke$arity$2 = (function (mv,f){
return cats.core.bind(mv,f);
});

cats.core._GT__GT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (mv,f,fs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cats.core.bind,mv,cljs.core.cons(f,fs));
});

/** @this {Function} */
cats.core._GT__GT__EQ_.cljs$lang$applyTo = (function (seq36568){
var G__36569 = cljs.core.first(seq36568);
var seq36568__$1 = cljs.core.next(seq36568);
var G__36570 = cljs.core.first(seq36568__$1);
var seq36568__$2 = cljs.core.next(seq36568__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36569,G__36570,seq36568__$2);
});

cats.core._GT__GT__EQ_.cljs$lang$maxFixedArity = (2);

/**
 * Perform a Haskell-style left-associative bind,
 *   ignoring the values produced by the monadic computations.
 */
cats.core._GT__GT_ = (function cats$core$_GT__GT_(var_args){
var G__36580 = arguments.length;
switch (G__36580) {
case 2:
return cats.core._GT__GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___36582 = arguments.length;
var i__4731__auto___36583 = (0);
while(true){
if((i__4731__auto___36583 < len__4730__auto___36582)){
args_arr__4751__auto__.push((arguments[i__4731__auto___36583]));

var G__36584 = (i__4731__auto___36583 + (1));
i__4731__auto___36583 = G__36584;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((2)),(0),null));
return cats.core._GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4752__auto__);

}
});

cats.core._GT__GT_.cljs$core$IFn$_invoke$arity$2 = (function (mv,mv_SINGLEQUOTE_){
return cats.core.bind(mv,(function (_){
return mv_SINGLEQUOTE_;
}));
});

cats.core._GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (mv,mv_SINGLEQUOTE_,mvs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cats.core._GT__GT_,mv,cljs.core.cons(mv_SINGLEQUOTE_,mvs));
});

/** @this {Function} */
cats.core._GT__GT_.cljs$lang$applyTo = (function (seq36577){
var G__36578 = cljs.core.first(seq36577);
var seq36577__$1 = cljs.core.next(seq36577);
var G__36579 = cljs.core.first(seq36577__$1);
var seq36577__$2 = cljs.core.next(seq36577__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36578,G__36579,seq36577__$2);
});

cats.core._GT__GT_.cljs$lang$maxFixedArity = (2);

/**
 * Same as the two argument version of `>>=` but with the
 *   arguments flipped.
 */
cats.core._EQ__LT__LT_ = (function cats$core$_EQ__LT__LT_(f,mv){
return cats.core._GT__GT__EQ_.cljs$core$IFn$_invoke$arity$2(mv,f);
});
/**
 * Left-to-right composition of monads.
 */
cats.core._GT__EQ__GT_ = (function cats$core$_GT__EQ__GT_(mf,mg,x){
if(cats.context.context_QMARK_(cats.context.infer.cljs$core$IFn$_invoke$arity$1(mf))){
} else {
cats.context.throw_illegal_argument("The provided context does not implements Context.");
}

var _STAR_context_STAR__orig_val__36585 = cats.context._STAR_context_STAR_;
var _STAR_context_STAR__temp_val__36586 = cats.context.infer.cljs$core$IFn$_invoke$arity$1(mf);
cats.context._STAR_context_STAR_ = _STAR_context_STAR__temp_val__36586;

try{return cats.core.bind((mf.cljs$core$IFn$_invoke$arity$1 ? mf.cljs$core$IFn$_invoke$arity$1(x) : mf.call(null,x)),((function (_STAR_context_STAR__orig_val__36585,_STAR_context_STAR__temp_val__36586){
return (function (a){
return cats.core.bind((mg.cljs$core$IFn$_invoke$arity$1 ? mg.cljs$core$IFn$_invoke$arity$1(a) : mg.call(null,a)),((function (_STAR_context_STAR__orig_val__36585,_STAR_context_STAR__temp_val__36586){
return (function (b){
return cats.core.return$.cljs$core$IFn$_invoke$arity$1(b);
});})(_STAR_context_STAR__orig_val__36585,_STAR_context_STAR__temp_val__36586))
);
});})(_STAR_context_STAR__orig_val__36585,_STAR_context_STAR__temp_val__36586))
);
}finally {cats.context._STAR_context_STAR_ = _STAR_context_STAR__orig_val__36585;
}});
/**
 * Right-to-left composition of monads.
 *   Same as `>=>` with its first two arguments flipped.
 */
cats.core._LT__EQ__LT_ = (function cats$core$_LT__EQ__LT_(mg,mf,x){
if(cats.context.context_QMARK_(cats.context.infer.cljs$core$IFn$_invoke$arity$1(mf))){
} else {
cats.context.throw_illegal_argument("The provided context does not implements Context.");
}

var _STAR_context_STAR__orig_val__36587 = cats.context._STAR_context_STAR_;
var _STAR_context_STAR__temp_val__36588 = cats.context.infer.cljs$core$IFn$_invoke$arity$1(mf);
cats.context._STAR_context_STAR_ = _STAR_context_STAR__temp_val__36588;

try{return cats.core.bind((mf.cljs$core$IFn$_invoke$arity$1 ? mf.cljs$core$IFn$_invoke$arity$1(x) : mf.call(null,x)),((function (_STAR_context_STAR__orig_val__36587,_STAR_context_STAR__temp_val__36588){
return (function (a){
return cats.core.bind((mg.cljs$core$IFn$_invoke$arity$1 ? mg.cljs$core$IFn$_invoke$arity$1(a) : mg.call(null,a)),((function (_STAR_context_STAR__orig_val__36587,_STAR_context_STAR__temp_val__36588){
return (function (b){
return cats.core.return$.cljs$core$IFn$_invoke$arity$1(b);
});})(_STAR_context_STAR__orig_val__36587,_STAR_context_STAR__temp_val__36588))
);
});})(_STAR_context_STAR__orig_val__36587,_STAR_context_STAR__temp_val__36588))
);
}finally {cats.context._STAR_context_STAR_ = _STAR_context_STAR__orig_val__36587;
}});
/**
 * Generic function to unwrap/extract
 *   the inner value of a container.
 */
cats.core.extract = (function cats$core$extract(v){
return cats.protocols._extract(v);
});
cats.core._LT__GT_ = cats.core.mappend;
/**
 * Perform a right-associative fold on the data structure.
 */
cats.core.foldr = (function cats$core$foldr(f,z,xs){
var ctx = cats.protocols._get_context(xs);
if(cats.context.context_QMARK_(ctx)){
} else {
cats.context.throw_illegal_argument("The provided context does not implements Context.");
}

var _STAR_context_STAR__orig_val__36589 = cats.context._STAR_context_STAR_;
var _STAR_context_STAR__temp_val__36590 = ctx;
cats.context._STAR_context_STAR_ = _STAR_context_STAR__temp_val__36590;

try{return cats.protocols._foldr(ctx,f,z,xs);
}finally {cats.context._STAR_context_STAR_ = _STAR_context_STAR__orig_val__36589;
}});
/**
 * Perform a left-associative fold on the data structure.
 */
cats.core.foldl = (function cats$core$foldl(f,z,xs){
var ctx = cats.protocols._get_context(xs);
if(cats.context.context_QMARK_(ctx)){
} else {
cats.context.throw_illegal_argument("The provided context does not implements Context.");
}

var _STAR_context_STAR__orig_val__36591 = cats.context._STAR_context_STAR_;
var _STAR_context_STAR__temp_val__36592 = ctx;
cats.context._STAR_context_STAR_ = _STAR_context_STAR__temp_val__36592;

try{return cats.protocols._foldl(ctx,f,z,xs);
}finally {cats.context._STAR_context_STAR_ = _STAR_context_STAR__orig_val__36591;
}});
/**
 * Given an optional monadic context, a function that takes two non-monadic
 *   arguments and returns a value inside the given monadic context, an initial
 *   value, and a collection of values, perform a left-associative fold.
 * 
 *    (require '[cats.context :as ctx]
 *             '[cats.core :as m]
 *             '[cats.monad.maybe :as maybe])
 * 
 *    (defn m-div [x y]
 *      (if (zero? y)
 *        (maybe/nothing)
 *        (maybe/just (/ x y))))
 * 
 *    (m/foldm m-div 1 [1 2 3])
 *    (m/foldm maybe/context m-div 1 [1 2 3])
 *    ;; => #<Just 1/6>
 * 
 *    (m/foldm maybe/context m-div 1 [1 0 3])
 *    ;; => #<Nothing>
 * 
 *    (foldm m-div 1 [])
 *    ;; => Exception
 * 
 *    (m/foldm maybe/context m-div 1 [])
 *    (ctx/with-context maybe/context
 *      (foldm m-div 1 []))
 *    ;; => #<Just 1>
 *   
 */
cats.core.foldm = (function cats$core$foldm(var_args){
var G__36594 = arguments.length;
switch (G__36594) {
case 3:
return cats.core.foldm.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cats.core.foldm.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cats.core.foldm.cljs$core$IFn$_invoke$arity$3 = (function (f,z,xs){
if(cljs.core.empty_QMARK_(xs)){
return cats.core.return$.cljs$core$IFn$_invoke$arity$1(z);
} else {
var vec__36595 = xs;
var seq__36596 = cljs.core.seq(vec__36595);
var first__36597 = cljs.core.first(seq__36596);
var seq__36596__$1 = cljs.core.next(seq__36596);
var h = first__36597;
var t = seq__36596__$1;
return cats.core.bind((f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(z,h) : f.call(null,z,h)),((function (vec__36595,seq__36596,first__36597,seq__36596__$1,h,t){
return (function (z_SINGLEQUOTE_){
if(cljs.core.empty_QMARK_(t)){
return cats.core.return$.cljs$core$IFn$_invoke$arity$1(z_SINGLEQUOTE_);
} else {
return cats.core.foldm.cljs$core$IFn$_invoke$arity$3(f,z_SINGLEQUOTE_,t);
}
});})(vec__36595,seq__36596,first__36597,seq__36596__$1,h,t))
);
}
});

cats.core.foldm.cljs$core$IFn$_invoke$arity$4 = (function (ctx,f,z,xs){
if(cljs.core.empty_QMARK_(xs)){
return cats.core.return$.cljs$core$IFn$_invoke$arity$2(ctx,z);
} else {
return cats.core.foldm.cljs$core$IFn$_invoke$arity$3(f,z,xs);
}
});

cats.core.foldm.cljs$lang$maxFixedArity = 4;

/**
 * Map each element of a structure to an action, evaluate these
 *   actions from left to right, and collect the results.
 * 
 *    (defn inc-if-even
 *      [n]
 *      (if (even? n)
 *        (maybe/just (inc n))
 *        (maybe/nothing)))
 * 
 *    (ctx/with-context maybe/context
 *      (m/traverse inc-if-even [2 4]))
 *    ;; => #<Just [3 4]>
 *   
 */
cats.core.traverse = (function cats$core$traverse(var_args){
var G__36600 = arguments.length;
switch (G__36600) {
case 2:
return cats.core.traverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cats.core.traverse.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cats.core.traverse.cljs$core$IFn$_invoke$arity$2 = (function (f,tv){
return cats.protocols._traverse(cats.protocols._get_context(tv),f,tv);
});

cats.core.traverse.cljs$core$IFn$_invoke$arity$3 = (function (ctx,f,tv){
if(cats.context.context_QMARK_(ctx)){
} else {
cats.context.throw_illegal_argument("The provided context does not implements Context.");
}

var _STAR_context_STAR__orig_val__36601 = cats.context._STAR_context_STAR_;
var _STAR_context_STAR__temp_val__36602 = ctx;
cats.context._STAR_context_STAR_ = _STAR_context_STAR__temp_val__36602;

try{return cats.protocols._traverse(cats.protocols._get_context(tv),f,tv);
}finally {cats.context._STAR_context_STAR_ = _STAR_context_STAR__orig_val__36601;
}});

cats.core.traverse.cljs$lang$maxFixedArity = 3;

