goog.provide('cats.core');
goog.require('cljs.core');
goog.require('cats.protocols');
goog.require('clojure.set');
goog.require('cats.context');
cats.core.mempty = (function cats$core$mempty(var_args){
var G__39950 = arguments.length;
switch (G__39950) {
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
var len__4730__auto___40123 = arguments.length;
var i__4731__auto___40124 = (0);
while(true){
if((i__4731__auto___40124 < len__4730__auto___40123)){
args__4736__auto__.push((arguments[i__4731__auto___40124]));

var G__40125 = (i__4731__auto___40124 + (1));
i__4731__auto___40124 = G__40125;
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
cats.core.mappend.cljs$lang$applyTo = (function (seq39953){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq39953));
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
var G__39960 = arguments.length;
switch (G__39960) {
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
var G__39964 = arguments.length;
switch (G__39964) {
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

var _STAR_context_STAR__orig_val__39970 = cats.context._STAR_context_STAR_;
var _STAR_context_STAR__temp_val__39971 = ctx;
cats.context._STAR_context_STAR_ = _STAR_context_STAR__temp_val__39971;

try{return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v));
}finally {cats.context._STAR_context_STAR_ = _STAR_context_STAR__orig_val__39970;
}});})(ctx))
);
});
cats.core.mzero = (function cats$core$mzero(var_args){
var G__39974 = arguments.length;
switch (G__39974) {
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
var len__4730__auto___40140 = arguments.length;
var i__4731__auto___40141 = (0);
while(true){
if((i__4731__auto___40141 < len__4730__auto___40140)){
args__4736__auto__.push((arguments[i__4731__auto___40141]));

var G__40142 = (i__4731__auto___40141 + (1));
i__4731__auto___40141 = G__40142;
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
cats.core.mplus.cljs$lang$applyTo = (function (seq39979){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq39979));
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
var G__39986 = arguments.length;
switch (G__39986) {
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

var _STAR_context_STAR__orig_val__39987 = cats.context._STAR_context_STAR_;
var _STAR_context_STAR__temp_val__39988 = ctx;
cats.context._STAR_context_STAR_ = _STAR_context_STAR__temp_val__39988;

try{return cats.protocols._fmap(ctx,f,fv);
}finally {cats.context._STAR_context_STAR_ = _STAR_context_STAR__orig_val__39987;
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
var G__39990 = arguments.length;
switch (G__39990) {
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

var _STAR_context_STAR__orig_val__39991 = cats.context._STAR_context_STAR_;
var _STAR_context_STAR__temp_val__39992 = ctx;
cats.context._STAR_context_STAR_ = _STAR_context_STAR__temp_val__39992;

try{return cats.protocols._bimap(ctx,f,g,bv);
}finally {cats.context._STAR_context_STAR_ = _STAR_context_STAR__orig_val__39991;
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
var G__39994 = arguments.length;
switch (G__39994) {
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
var G__39996 = arguments.length;
switch (G__39996) {
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
var len__4730__auto___40158 = arguments.length;
var i__4731__auto___40159 = (0);
while(true){
if((i__4731__auto___40159 < len__4730__auto___40158)){
args__4736__auto__.push((arguments[i__4731__auto___40159]));

var G__40160 = (i__4731__auto___40159 + (1));
i__4731__auto___40159 = G__40160;
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
cats.core.fapply.cljs$lang$applyTo = (function (seq39999){
var G__40000 = cljs.core.first(seq39999);
var seq39999__$1 = cljs.core.next(seq39999);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40000,seq39999__$1);
});

/**
 * Given an expression and a monadic value,
 *   if the expression is logical true, return the monadic value.
 *   Otherwise, return nil in a monadic context.
 */
cats.core.when = (function cats$core$when(var_args){
var G__40012 = arguments.length;
switch (G__40012) {
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
var G__40014 = arguments.length;
switch (G__40014) {
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
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__40015_SHARP_){
return (cats.core.deps.cljs$core$IFn$_invoke$arity$2 ? cats.core.deps.cljs$core$IFn$_invoke$arity$2(p1__40015_SHARP_,syms) : cats.core.deps.call(null,p1__40015_SHARP_,syms));
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
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__40016_SHARP_){
return (cats.core.rename.cljs$core$IFn$_invoke$arity$2 ? cats.core.rename.cljs$core$IFn$_invoke$arity$2(p1__40016_SHARP_,renames) : cats.core.rename.call(null,p1__40016_SHARP_,renames));
}),expr);
} else {
return expr;

}
}
});
cats.core.dedupe_symbols_STAR_ = (function cats$core$dedupe_symbols_STAR_(sym__GT_ap,body){
var renamer = (function cats$core$dedupe_symbols_STAR__$_renamer(p__40030,p__40031){
var map__40036 = p__40030;
var map__40036__$1 = (((((!((map__40036 == null))))?(((((map__40036.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40036.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40036):map__40036);
var summ = map__40036__$1;
var body__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40036__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var syms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40036__$1,new cljs.core.Keyword(null,"syms","syms",-1575891762));
var aps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40036__$1,new cljs.core.Keyword(null,"aps","aps",265109554));
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40036__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
var renames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40036__$1,new cljs.core.Keyword(null,"renames","renames",343278368));
var vec__40037 = p__40031;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40037,(0),null);
var ap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40037,(1),null);
var ap_SINGLEQUOTE_ = cats.core.rename(ap,renames);
var new_aps = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(aps,ap_SINGLEQUOTE_);
if(cljs.core.truth_((seen.cljs$core$IFn$_invoke$arity$1 ? seen.cljs$core$IFn$_invoke$arity$1(s) : seen.call(null,s)))){
var s_SINGLEQUOTE_ = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var new_syms = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(syms,s_SINGLEQUOTE_);
var new_seen = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,s_SINGLEQUOTE_);
var new_renames = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(renames,s,s_SINGLEQUOTE_);
var new_body = cats.core.rename(body__$1,new_renames);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"syms","syms",-1575891762),new_syms,new cljs.core.Keyword(null,"aps","aps",265109554),new_aps,new cljs.core.Keyword(null,"seen","seen",-518999789),new_seen,new cljs.core.Keyword(null,"renames","renames",343278368),new_renames,new cljs.core.Keyword(null,"body","body",-2049205669),new_body], null);
} else {
var new_syms = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(syms,s);
var new_seen = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,s);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"syms","syms",-1575891762),new_syms,new cljs.core.Keyword(null,"aps","aps",265109554),new_aps,new cljs.core.Keyword(null,"seen","seen",-518999789),new_seen,new cljs.core.Keyword(null,"renames","renames",343278368),renames,new cljs.core.Keyword(null,"body","body",-2049205669),body__$1], null);
}
});
var summ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(renamer,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"syms","syms",-1575891762),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"aps","aps",265109554),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"renames","renames",343278368),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"body","body",-2049205669),body], null),sym__GT_ap);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,new cljs.core.Keyword(null,"syms","syms",-1575891762).cljs$core$IFn$_invoke$arity$1(summ),new cljs.core.Keyword(null,"aps","aps",265109554).cljs$core$IFn$_invoke$arity$1(summ)),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(summ)], null);
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
return (function cats$core$dependency_map_$_iter__40042(s__40043){
return (new cljs.core.LazySeq(null,((function (syms,symset){
return (function (){
var s__40043__$1 = s__40043;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__40043__$1);
if(temp__5720__auto__){
var s__40043__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__40043__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__40043__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__40045 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__40044 = (0);
while(true){
if((i__40044 < size__4522__auto__)){
var vec__40048 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__40044);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40048,(0),null);
var ap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40048,(1),null);
var ds = cljs.core.set(cats.core.deps(ap,symset));
cljs.core.chunk_append(b__40045,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,ds], null));

var G__40179 = (i__40044 + (1));
i__40044 = G__40179;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40045),cats$core$dependency_map_$_iter__40042(cljs.core.chunk_rest(s__40043__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40045),null);
}
} else {
var vec__40051 = cljs.core.first(s__40043__$2);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40051,(0),null);
var ap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40051,(1),null);
var ds = cljs.core.set(cats.core.deps(ap,symset));
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,ds], null),cats$core$dependency_map_$_iter__40042(cljs.core.rest(s__40043__$2)));
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
var removed = (function (){var iter__4523__auto__ = (function cats$core$remove_deps_$_iter__40054(s__40055){
return (new cljs.core.LazySeq(null,(function (){
var s__40055__$1 = s__40055;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__40055__$1);
if(temp__5720__auto__){
var s__40055__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__40055__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__40055__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__40057 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__40056 = (0);
while(true){
if((i__40056 < size__4522__auto__)){
var vec__40058 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__40056);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40058,(0),null);
var depset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40058,(1),null);
cljs.core.chunk_append(b__40057,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,clojure.set.difference.cljs$core$IFn$_invoke$arity$2(depset,symset)], null));

var G__40180 = (i__40056 + (1));
i__40056 = G__40180;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40057),cats$core$remove_deps_$_iter__40054(cljs.core.chunk_rest(s__40055__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40057),null);
}
} else {
var vec__40061 = cljs.core.first(s__40055__$2);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40061,(0),null);
var depset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40061,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,clojure.set.difference.cljs$core$IFn$_invoke$arity$2(depset,symset)], null),cats$core$remove_deps_$_iter__40054(cljs.core.rest(s__40055__$2)));
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
var vec__40064 = dep;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40064,(0),null);
var dependencies = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40064,(1),null);
var dependant_QMARK_ = cljs.core.some(dependencies,seen);
if((dependant_QMARK_ == null)){
var G__40181 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(deps,(1));
var G__40182 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,s);
var G__40183 = batches;
var G__40184 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current,s);
deps = G__40181;
seen = G__40182;
batches = G__40183;
current = G__40184;
continue;
} else {
var G__40185 = cats.core.remove_deps(cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(deps,(1)),cljs.core.set(current));
var G__40186 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,s);
var G__40187 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(batches,current);
var G__40188 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null);
deps = G__40185;
seen = G__40186;
batches = G__40187;
current = G__40188;
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
return (function (p1__40069_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,p1__40069_SHARP_);
});})(fs__$1,fa__$1,rs,fb,rb,fs,fa))
,rs);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(syms),(1))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cats.core","fmap","cats.core/fmap",1968944844,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,fs__$1,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,acc,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,fa__$1,null,(1),null))], 0))));
} else {
var cf = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (fs__$1,fa__$1,rs,faps,fb,rb,fs,fa){
return (function (f,sym){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,sym,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,f,null,(1),null))], 0))));
});})(fs__$1,fa__$1,rs,faps,fb,rb,fs,fa))
,acc,cljs.core.reverse(syms));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cats.core","fapply","cats.core/fapply",1894900497,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cats.core","fmap","cats.core/fmap",1968944844,null),null,(1),null)),(new cljs.core.List(null,cf,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,fa__$1,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([faps], 0))));
}
});})(fb,rb,fs,fa))
,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),cljs.core.reverse(batches));
var join_count = (cljs.core.count(batches) - (1));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (fb,rb,fs,fa,code,join_count){
return (function (acc,_){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cats.core","join","cats.core/join",1184708213,null),null,(1),null)),(new cljs.core.List(null,acc,null,(1),null)))));
});})(fb,rb,fs,fa,code,join_count))
,code,cljs.core.range.cljs$core$IFn$_invoke$arity$1(join_count));
});
cats.core.arglists = (function cats$core$arglists(var$){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(var$),new cljs.core.Keyword(null,"arglists","arglists",1661989754));
});
cats.core.single_arity_QMARK_ = (function cats$core$single_arity_QMARK_(var$){
var args = cats.core.arglists(var$);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(args),(1))) && (cljs.core.not(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),cljs.core.first(args)))));
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

var _STAR_context_STAR__orig_val__40080 = cats.context._STAR_context_STAR_;
var _STAR_context_STAR__temp_val__40081 = ctx;
cats.context._STAR_context_STAR_ = _STAR_context_STAR__temp_val__40081;

try{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (_STAR_context_STAR__orig_val__40080,_STAR_context_STAR__temp_val__40081,ctx){
return (function (mvs__$1,mv){
return cats.core.bind(mv,((function (_STAR_context_STAR__orig_val__40080,_STAR_context_STAR__temp_val__40081,ctx){
return (function (v){
return cats.core.bind(mvs__$1,((function (_STAR_context_STAR__orig_val__40080,_STAR_context_STAR__temp_val__40081,ctx){
return (function (vs){
return cats.core.return$.cljs$core$IFn$_invoke$arity$1(cljs.core.cons(v,vs));
});})(_STAR_context_STAR__orig_val__40080,_STAR_context_STAR__temp_val__40081,ctx))
);
});})(_STAR_context_STAR__orig_val__40080,_STAR_context_STAR__temp_val__40081,ctx))
);
});})(_STAR_context_STAR__orig_val__40080,_STAR_context_STAR__temp_val__40081,ctx))
,cats.core.return$.cljs$core$IFn$_invoke$arity$1(cljs.core.List.EMPTY),cljs.core.reverse(mvs));
}finally {cats.context._STAR_context_STAR_ = _STAR_context_STAR__orig_val__40080;
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
return cats.core.bind(cats.core.guard((p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(v) : p.call(null,v))),(function (G__40082){
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
var G__40087 = arguments.length;
switch (G__40087) {
case 2:
return cats.core._GT__GT__EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___40216 = arguments.length;
var i__4731__auto___40217 = (0);
while(true){
if((i__4731__auto___40217 < len__4730__auto___40216)){
args_arr__4751__auto__.push((arguments[i__4731__auto___40217]));

var G__40218 = (i__4731__auto___40217 + (1));
i__4731__auto___40217 = G__40218;
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
cats.core._GT__GT__EQ_.cljs$lang$applyTo = (function (seq40084){
var G__40085 = cljs.core.first(seq40084);
var seq40084__$1 = cljs.core.next(seq40084);
var G__40086 = cljs.core.first(seq40084__$1);
var seq40084__$2 = cljs.core.next(seq40084__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40085,G__40086,seq40084__$2);
});

cats.core._GT__GT__EQ_.cljs$lang$maxFixedArity = (2);

/**
 * Perform a Haskell-style left-associative bind,
 *   ignoring the values produced by the monadic computations.
 */
cats.core._GT__GT_ = (function cats$core$_GT__GT_(var_args){
var G__40093 = arguments.length;
switch (G__40093) {
case 2:
return cats.core._GT__GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___40223 = arguments.length;
var i__4731__auto___40224 = (0);
while(true){
if((i__4731__auto___40224 < len__4730__auto___40223)){
args_arr__4751__auto__.push((arguments[i__4731__auto___40224]));

var G__40225 = (i__4731__auto___40224 + (1));
i__4731__auto___40224 = G__40225;
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
cats.core._GT__GT_.cljs$lang$applyTo = (function (seq40090){
var G__40091 = cljs.core.first(seq40090);
var seq40090__$1 = cljs.core.next(seq40090);
var G__40092 = cljs.core.first(seq40090__$1);
var seq40090__$2 = cljs.core.next(seq40090__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40091,G__40092,seq40090__$2);
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

var _STAR_context_STAR__orig_val__40097 = cats.context._STAR_context_STAR_;
var _STAR_context_STAR__temp_val__40098 = cats.context.infer.cljs$core$IFn$_invoke$arity$1(mf);
cats.context._STAR_context_STAR_ = _STAR_context_STAR__temp_val__40098;

try{return cats.core.bind((mf.cljs$core$IFn$_invoke$arity$1 ? mf.cljs$core$IFn$_invoke$arity$1(x) : mf.call(null,x)),((function (_STAR_context_STAR__orig_val__40097,_STAR_context_STAR__temp_val__40098){
return (function (a){
return cats.core.bind((mg.cljs$core$IFn$_invoke$arity$1 ? mg.cljs$core$IFn$_invoke$arity$1(a) : mg.call(null,a)),((function (_STAR_context_STAR__orig_val__40097,_STAR_context_STAR__temp_val__40098){
return (function (b){
return cats.core.return$.cljs$core$IFn$_invoke$arity$1(b);
});})(_STAR_context_STAR__orig_val__40097,_STAR_context_STAR__temp_val__40098))
);
});})(_STAR_context_STAR__orig_val__40097,_STAR_context_STAR__temp_val__40098))
);
}finally {cats.context._STAR_context_STAR_ = _STAR_context_STAR__orig_val__40097;
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

var _STAR_context_STAR__orig_val__40099 = cats.context._STAR_context_STAR_;
var _STAR_context_STAR__temp_val__40100 = cats.context.infer.cljs$core$IFn$_invoke$arity$1(mf);
cats.context._STAR_context_STAR_ = _STAR_context_STAR__temp_val__40100;

try{return cats.core.bind((mf.cljs$core$IFn$_invoke$arity$1 ? mf.cljs$core$IFn$_invoke$arity$1(x) : mf.call(null,x)),((function (_STAR_context_STAR__orig_val__40099,_STAR_context_STAR__temp_val__40100){
return (function (a){
return cats.core.bind((mg.cljs$core$IFn$_invoke$arity$1 ? mg.cljs$core$IFn$_invoke$arity$1(a) : mg.call(null,a)),((function (_STAR_context_STAR__orig_val__40099,_STAR_context_STAR__temp_val__40100){
return (function (b){
return cats.core.return$.cljs$core$IFn$_invoke$arity$1(b);
});})(_STAR_context_STAR__orig_val__40099,_STAR_context_STAR__temp_val__40100))
);
});})(_STAR_context_STAR__orig_val__40099,_STAR_context_STAR__temp_val__40100))
);
}finally {cats.context._STAR_context_STAR_ = _STAR_context_STAR__orig_val__40099;
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

var _STAR_context_STAR__orig_val__40103 = cats.context._STAR_context_STAR_;
var _STAR_context_STAR__temp_val__40104 = ctx;
cats.context._STAR_context_STAR_ = _STAR_context_STAR__temp_val__40104;

try{return cats.protocols._foldr(ctx,f,z,xs);
}finally {cats.context._STAR_context_STAR_ = _STAR_context_STAR__orig_val__40103;
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

var _STAR_context_STAR__orig_val__40107 = cats.context._STAR_context_STAR_;
var _STAR_context_STAR__temp_val__40108 = ctx;
cats.context._STAR_context_STAR_ = _STAR_context_STAR__temp_val__40108;

try{return cats.protocols._foldl(ctx,f,z,xs);
}finally {cats.context._STAR_context_STAR_ = _STAR_context_STAR__orig_val__40107;
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
var G__40110 = arguments.length;
switch (G__40110) {
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
var vec__40111 = xs;
var seq__40112 = cljs.core.seq(vec__40111);
var first__40113 = cljs.core.first(seq__40112);
var seq__40112__$1 = cljs.core.next(seq__40112);
var h = first__40113;
var t = seq__40112__$1;
return cats.core.bind((f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(z,h) : f.call(null,z,h)),((function (vec__40111,seq__40112,first__40113,seq__40112__$1,h,t){
return (function (z_SINGLEQUOTE_){
if(cljs.core.empty_QMARK_(t)){
return cats.core.return$.cljs$core$IFn$_invoke$arity$1(z_SINGLEQUOTE_);
} else {
return cats.core.foldm.cljs$core$IFn$_invoke$arity$3(f,z_SINGLEQUOTE_,t);
}
});})(vec__40111,seq__40112,first__40113,seq__40112__$1,h,t))
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
var G__40117 = arguments.length;
switch (G__40117) {
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

var _STAR_context_STAR__orig_val__40118 = cats.context._STAR_context_STAR_;
var _STAR_context_STAR__temp_val__40119 = ctx;
cats.context._STAR_context_STAR_ = _STAR_context_STAR__temp_val__40119;

try{return cats.protocols._traverse(cats.protocols._get_context(tv),f,tv);
}finally {cats.context._STAR_context_STAR_ = _STAR_context_STAR__orig_val__40118;
}});

cats.core.traverse.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=cats.core.js.map
