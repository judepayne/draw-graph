goog.provide('cats.core');
goog.require('cljs.core');
goog.require('cats.protocols');
goog.require('clojure.set');
goog.require('cats.context');
cats.core.mempty = (function cats$core$mempty(var_args){
var G__44599 = arguments.length;
switch (G__44599) {
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

(cats.core.mempty.cljs$core$IFn$_invoke$arity$0 = (function (){
return cats.protocols._mempty(cats.context.infer.cljs$core$IFn$_invoke$arity$0());
}));

(cats.core.mempty.cljs$core$IFn$_invoke$arity$1 = (function (ctx){
return cats.protocols._mempty(ctx);
}));

(cats.core.mempty.cljs$lang$maxFixedArity = 1);

cats.core.mappend = (function cats$core$mappend(var_args){
var args__4795__auto__ = [];
var len__4789__auto___44811 = arguments.length;
var i__4790__auto___44812 = (0);
while(true){
if((i__4790__auto___44812 < len__4789__auto___44811)){
args__4795__auto__.push((arguments[i__4790__auto___44812]));

var G__44813 = (i__4790__auto___44812 + (1));
i__4790__auto___44812 = G__44813;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return cats.core.mappend.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(cats.core.mappend.cljs$core$IFn$_invoke$arity$variadic = (function (svs){
if(cljs.core.seq(svs)){
} else {
throw (new Error("Assert failed: (seq svs)"));
}

var ctx = cats.context.infer.cljs$core$IFn$_invoke$arity$1(cljs.core.first(svs));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cats.protocols._mappend,ctx),svs);
}));

(cats.core.mappend.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cats.core.mappend.cljs$lang$applyTo = (function (seq44601){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq44601));
}));

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
var G__44605 = arguments.length;
switch (G__44605) {
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

(cats.core.pure.cljs$core$IFn$_invoke$arity$1 = (function (v){
return cats.core.pure.cljs$core$IFn$_invoke$arity$2(cats.context.infer.cljs$core$IFn$_invoke$arity$0(),v);
}));

(cats.core.pure.cljs$core$IFn$_invoke$arity$2 = (function (ctx,v){
return cats.protocols._pure(ctx,v);
}));

(cats.core.pure.cljs$lang$maxFixedArity = 2);

/**
 * This is a monad version of `pure` and works
 *   identically to it.
 */
cats.core.return$ = (function cats$core$return(var_args){
var G__44607 = arguments.length;
switch (G__44607) {
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

(cats.core.return$.cljs$core$IFn$_invoke$arity$1 = (function (v){
return cats.core.return$.cljs$core$IFn$_invoke$arity$2(cats.context.infer.cljs$core$IFn$_invoke$arity$0(),v);
}));

(cats.core.return$.cljs$core$IFn$_invoke$arity$2 = (function (ctx,v){
return cats.protocols._mreturn(ctx,v);
}));

(cats.core.return$.cljs$lang$maxFixedArity = 2);

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
return cats.protocols._mbind(ctx,mv,(function (v){
if(cats.context.context_QMARK_(ctx)){
} else {
cats.context.throw_illegal_argument("The provided context does not implements Context.");
}

var _STAR_context_STAR__orig_val__44609 = cats.context._STAR_context_STAR_;
var _STAR_context_STAR__temp_val__44610 = ctx;
(cats.context._STAR_context_STAR_ = _STAR_context_STAR__temp_val__44610);

try{return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v));
}finally {(cats.context._STAR_context_STAR_ = _STAR_context_STAR__orig_val__44609);
}}));
});
cats.core.mzero = (function cats$core$mzero(var_args){
var G__44612 = arguments.length;
switch (G__44612) {
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

(cats.core.mzero.cljs$core$IFn$_invoke$arity$0 = (function (){
return cats.protocols._mzero(cats.context.infer.cljs$core$IFn$_invoke$arity$0());
}));

(cats.core.mzero.cljs$core$IFn$_invoke$arity$1 = (function (ctx){
return cats.protocols._mzero(ctx);
}));

(cats.core.mzero.cljs$lang$maxFixedArity = 1);

cats.core.mplus = (function cats$core$mplus(var_args){
var args__4795__auto__ = [];
var len__4789__auto___44821 = arguments.length;
var i__4790__auto___44822 = (0);
while(true){
if((i__4790__auto___44822 < len__4789__auto___44821)){
args__4795__auto__.push((arguments[i__4790__auto___44822]));

var G__44823 = (i__4790__auto___44822 + (1));
i__4790__auto___44822 = G__44823;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return cats.core.mplus.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(cats.core.mplus.cljs$core$IFn$_invoke$arity$variadic = (function (mvs){
if(cljs.core.seq(mvs)){
} else {
throw (new Error("Assert failed: (seq mvs)"));
}

var ctx = cats.context.infer.cljs$core$IFn$_invoke$arity$1(cljs.core.first(mvs));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cats.protocols._mplus,ctx),mvs);
}));

(cats.core.mplus.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cats.core.mplus.cljs$lang$applyTo = (function (seq44613){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq44613));
}));

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
var G__44621 = arguments.length;
switch (G__44621) {
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

(cats.core.fmap.cljs$core$IFn$_invoke$arity$1 = (function (f){
return (function (fv){
return cats.core.fmap.cljs$core$IFn$_invoke$arity$2(f,fv);
});
}));

(cats.core.fmap.cljs$core$IFn$_invoke$arity$2 = (function (f,fv){
var ctx = cats.context.infer.cljs$core$IFn$_invoke$arity$1(fv);
if(cats.context.context_QMARK_(ctx)){
} else {
cats.context.throw_illegal_argument("The provided context does not implements Context.");
}

var _STAR_context_STAR__orig_val__44622 = cats.context._STAR_context_STAR_;
var _STAR_context_STAR__temp_val__44623 = ctx;
(cats.context._STAR_context_STAR_ = _STAR_context_STAR__temp_val__44623);

try{return cats.protocols._fmap(ctx,f,fv);
}finally {(cats.context._STAR_context_STAR_ = _STAR_context_STAR__orig_val__44622);
}}));

(cats.core.fmap.cljs$lang$maxFixedArity = 2);

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
var G__44625 = arguments.length;
switch (G__44625) {
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

(cats.core.bimap.cljs$core$IFn$_invoke$arity$2 = (function (f,g){
return (function (bv){
return cats.core.bimap.cljs$core$IFn$_invoke$arity$3(f,g,bv);
});
}));

(cats.core.bimap.cljs$core$IFn$_invoke$arity$3 = (function (f,g,bv){
var ctx = cats.context.infer.cljs$core$IFn$_invoke$arity$1(bv);
if(cats.context.context_QMARK_(ctx)){
} else {
cats.context.throw_illegal_argument("The provided context does not implements Context.");
}

var _STAR_context_STAR__orig_val__44632 = cats.context._STAR_context_STAR_;
var _STAR_context_STAR__temp_val__44633 = ctx;
(cats.context._STAR_context_STAR_ = _STAR_context_STAR__temp_val__44633);

try{return cats.protocols._bimap(ctx,f,g,bv);
}finally {(cats.context._STAR_context_STAR_ = _STAR_context_STAR__orig_val__44632);
}}));

(cats.core.bimap.cljs$lang$maxFixedArity = 3);

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
var G__44639 = arguments.length;
switch (G__44639) {
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

(cats.core.left_map.cljs$core$IFn$_invoke$arity$1 = (function (f){
return (function (bv){
return cats.core.left_map.cljs$core$IFn$_invoke$arity$2(f,bv);
});
}));

(cats.core.left_map.cljs$core$IFn$_invoke$arity$2 = (function (f,bv){
return cats.core.bimap.cljs$core$IFn$_invoke$arity$3(f,cljs.core.identity,bv);
}));

(cats.core.left_map.cljs$lang$maxFixedArity = 2);

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
var G__44644 = arguments.length;
switch (G__44644) {
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

(cats.core.right_map.cljs$core$IFn$_invoke$arity$1 = (function (g){
return (function (bv){
return cats.core.right_map.cljs$core$IFn$_invoke$arity$2(g,bv);
});
}));

(cats.core.right_map.cljs$core$IFn$_invoke$arity$2 = (function (g,bv){
return cats.core.bimap.cljs$core$IFn$_invoke$arity$3(cljs.core.identity,g,bv);
}));

(cats.core.right_map.cljs$lang$maxFixedArity = 2);

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
var args__4795__auto__ = [];
var len__4789__auto___44831 = arguments.length;
var i__4790__auto___44832 = (0);
while(true){
if((i__4790__auto___44832 < len__4789__auto___44831)){
args__4795__auto__.push((arguments[i__4790__auto___44832]));

var G__44833 = (i__4790__auto___44832 + (1));
i__4790__auto___44832 = G__44833;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cats.core.fapply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cats.core.fapply.cljs$core$IFn$_invoke$arity$variadic = (function (af,avs){
if(cljs.core.seq(avs)){
} else {
throw (new Error("Assert failed: (seq avs)"));
}

var ctx = cats.context.infer.cljs$core$IFn$_invoke$arity$1(af);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cats.protocols._fapply,ctx),af,avs);
}));

(cats.core.fapply.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cats.core.fapply.cljs$lang$applyTo = (function (seq44648){
var G__44649 = cljs.core.first(seq44648);
var seq44648__$1 = cljs.core.next(seq44648);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44649,seq44648__$1);
}));

/**
 * Given an expression and a monadic value,
 *   if the expression is logical true, return the monadic value.
 *   Otherwise, return nil in a monadic context.
 */
cats.core.when = (function cats$core$when(var_args){
var G__44654 = arguments.length;
switch (G__44654) {
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

(cats.core.when.cljs$core$IFn$_invoke$arity$2 = (function (b,mv){
return cats.core.when.cljs$core$IFn$_invoke$arity$3(cats.context.infer.cljs$core$IFn$_invoke$arity$1(mv),b,mv);
}));

(cats.core.when.cljs$core$IFn$_invoke$arity$3 = (function (ctx,b,mv){
if(cljs.core.truth_(b)){
return mv;
} else {
return cats.core.pure.cljs$core$IFn$_invoke$arity$2(ctx,null);
}
}));

(cats.core.when.cljs$lang$maxFixedArity = 3);

/**
 * Given an expression and a monadic value,
 *   if the expression is not logical true, return the monadic value.
 *   Otherwise, return nil in a monadic context.
 */
cats.core.unless = (function cats$core$unless(var_args){
var G__44658 = arguments.length;
switch (G__44658) {
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

(cats.core.unless.cljs$core$IFn$_invoke$arity$2 = (function (b,mv){
return cats.core.when.cljs$core$IFn$_invoke$arity$2(cljs.core.not(b),mv);
}));

(cats.core.unless.cljs$core$IFn$_invoke$arity$3 = (function (ctx,b,mv){
return cats.core.when.cljs$core$IFn$_invoke$arity$3(ctx,cljs.core.not(b),mv);
}));

(cats.core.unless.cljs$lang$maxFixedArity = 3);

cats.core.deps = (function cats$core$deps(expr,syms){
if((((expr instanceof cljs.core.Symbol)) && (cljs.core.contains_QMARK_(syms,expr)))){
return (new cljs.core.List(null,expr,null,(1),null));
} else {
if(cljs.core.seq_QMARK_(expr)){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__44660_SHARP_){
return (cats.core.deps.cljs$core$IFn$_invoke$arity$2 ? cats.core.deps.cljs$core$IFn$_invoke$arity$2(p1__44660_SHARP_,syms) : cats.core.deps.call(null,p1__44660_SHARP_,syms));
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
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__44662_SHARP_){
return (cats.core.rename.cljs$core$IFn$_invoke$arity$2 ? cats.core.rename.cljs$core$IFn$_invoke$arity$2(p1__44662_SHARP_,renames) : cats.core.rename.call(null,p1__44662_SHARP_,renames));
}),expr);
} else {
return expr;

}
}
});
cats.core.dedupe_symbols_STAR_ = (function cats$core$dedupe_symbols_STAR_(sym__GT_ap,body){
var renamer = (function cats$core$dedupe_symbols_STAR__$_renamer(p__44674,p__44675){
var map__44676 = p__44674;
var map__44676__$1 = (((((!((map__44676 == null))))?(((((map__44676.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44676.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44676):map__44676);
var summ = map__44676__$1;
var body__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44676__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var syms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44676__$1,new cljs.core.Keyword(null,"syms","syms",-1575891762));
var aps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44676__$1,new cljs.core.Keyword(null,"aps","aps",265109554));
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44676__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
var renames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44676__$1,new cljs.core.Keyword(null,"renames","renames",343278368));
var vec__44677 = p__44675;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44677,(0),null);
var ap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44677,(1),null);
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__4582__auto__ = (function cats$core$dependency_map_$_iter__44681(s__44682){
return (new cljs.core.LazySeq(null,(function (){
var s__44682__$1 = s__44682;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__44682__$1);
if(temp__5735__auto__){
var s__44682__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__44682__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__44682__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__44684 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__44683 = (0);
while(true){
if((i__44683 < size__4581__auto__)){
var vec__44692 = cljs.core._nth(c__4580__auto__,i__44683);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44692,(0),null);
var ap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44692,(1),null);
var ds = cljs.core.set(cats.core.deps(ap,symset));
cljs.core.chunk_append(b__44684,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,ds], null));

var G__44850 = (i__44683 + (1));
i__44683 = G__44850;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__44684),cats$core$dependency_map_$_iter__44681(cljs.core.chunk_rest(s__44682__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__44684),null);
}
} else {
var vec__44695 = cljs.core.first(s__44682__$2);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44695,(0),null);
var ap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44695,(1),null);
var ds = cljs.core.set(cats.core.deps(ap,symset));
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,ds], null),cats$core$dependency_map_$_iter__44681(cljs.core.rest(s__44682__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(sym__GT_ap);
})());
});
cats.core.remove_deps = (function cats$core$remove_deps(deps,symset){
var removed = (function (){var iter__4582__auto__ = (function cats$core$remove_deps_$_iter__44704(s__44705){
return (new cljs.core.LazySeq(null,(function (){
var s__44705__$1 = s__44705;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__44705__$1);
if(temp__5735__auto__){
var s__44705__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__44705__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__44705__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__44707 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__44706 = (0);
while(true){
if((i__44706 < size__4581__auto__)){
var vec__44711 = cljs.core._nth(c__4580__auto__,i__44706);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44711,(0),null);
var depset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44711,(1),null);
cljs.core.chunk_append(b__44707,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,clojure.set.difference.cljs$core$IFn$_invoke$arity$2(depset,symset)], null));

var G__44853 = (i__44706 + (1));
i__44706 = G__44853;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__44707),cats$core$remove_deps_$_iter__44704(cljs.core.chunk_rest(s__44705__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__44707),null);
}
} else {
var vec__44714 = cljs.core.first(s__44705__$2);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44714,(0),null);
var depset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44714,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,clojure.set.difference.cljs$core$IFn$_invoke$arity$2(depset,symset)], null),cats$core$remove_deps_$_iter__44704(cljs.core.rest(s__44705__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(deps);
})();
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(deps),removed);
});
cats.core.topo_sort_STAR_ = (function cats$core$topo_sort_STAR_(deps,seen,batches,current){
while(true){
if(cljs.core.empty_QMARK_(deps)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(batches,current);
} else {
var dep = cljs.core.first(deps);
var vec__44718 = dep;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44718,(0),null);
var dependencies = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44718,(1),null);
var dependant_QMARK_ = cljs.core.some(dependencies,seen);
if((dependant_QMARK_ == null)){
var G__44854 = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(deps,(1));
var G__44855 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,s);
var G__44856 = batches;
var G__44857 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current,s);
deps = G__44854;
seen = G__44855;
batches = G__44856;
current = G__44857;
continue;
} else {
var G__44858 = cats.core.remove_deps(cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(deps,(1)),cljs.core.set(current));
var G__44859 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,s);
var G__44860 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(batches,current);
var G__44861 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null);
deps = G__44858;
seen = G__44859;
batches = G__44860;
current = G__44861;
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
var code = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,syms){
var fs__$1 = cljs.core.first(syms);
var fa__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,fs__$1);
var rs = cljs.core.rest(syms);
var faps = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__44725_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,p1__44725_SHARP_);
}),rs);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(syms),(1))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cats.core","fmap","cats.core/fmap",1968944844,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,fs__$1,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,acc,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,fa__$1,null,(1),null))], 0))));
} else {
var cf = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (f,sym){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,sym,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,f,null,(1),null))], 0))));
}),acc,cljs.core.reverse(syms));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cats.core","fapply","cats.core/fapply",1894900497,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cats.core","fmap","cats.core/fmap",1968944844,null),null,(1),null)),(new cljs.core.List(null,cf,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,fa__$1,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([faps], 0))));
}
}),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),cljs.core.reverse(batches));
var join_count = (cljs.core.count(batches) - (1));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,_){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cats.core","join","cats.core/join",1184708213,null),null,(1),null)),(new cljs.core.List(null,acc,null,(1),null)))));
}),code,cljs.core.range.cljs$core$IFn$_invoke$arity$1(join_count));
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

var _STAR_context_STAR__orig_val__44746 = cats.context._STAR_context_STAR_;
var _STAR_context_STAR__temp_val__44747 = ctx;
(cats.context._STAR_context_STAR_ = _STAR_context_STAR__temp_val__44747);

try{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (mvs__$1,mv){
return cats.core.bind(mv,(function (v){
return cats.core.bind(mvs__$1,(function (vs){
return cats.core.return$.cljs$core$IFn$_invoke$arity$1(cljs.core.cons(v,vs));
}));
}));
}),cats.core.return$.cljs$core$IFn$_invoke$arity$1(cljs.core.List.EMPTY),cljs.core.reverse(mvs));
}finally {(cats.context._STAR_context_STAR_ = _STAR_context_STAR__orig_val__44746);
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
return cats.core.bind(cats.core.guard((p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(v) : p.call(null,v))),(function (G__44752){
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
var G__44761 = arguments.length;
switch (G__44761) {
case 2:
return cats.core._GT__GT__EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___44871 = arguments.length;
var i__4790__auto___44872 = (0);
while(true){
if((i__4790__auto___44872 < len__4789__auto___44871)){
args_arr__4810__auto__.push((arguments[i__4790__auto___44872]));

var G__44873 = (i__4790__auto___44872 + (1));
i__4790__auto___44872 = G__44873;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return cats.core._GT__GT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(cats.core._GT__GT__EQ_.cljs$core$IFn$_invoke$arity$2 = (function (mv,f){
return cats.core.bind(mv,f);
}));

(cats.core._GT__GT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (mv,f,fs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cats.core.bind,mv,cljs.core.cons(f,fs));
}));

/** @this {Function} */
(cats.core._GT__GT__EQ_.cljs$lang$applyTo = (function (seq44758){
var G__44759 = cljs.core.first(seq44758);
var seq44758__$1 = cljs.core.next(seq44758);
var G__44760 = cljs.core.first(seq44758__$1);
var seq44758__$2 = cljs.core.next(seq44758__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44759,G__44760,seq44758__$2);
}));

(cats.core._GT__GT__EQ_.cljs$lang$maxFixedArity = (2));

/**
 * Perform a Haskell-style left-associative bind,
 *   ignoring the values produced by the monadic computations.
 */
cats.core._GT__GT_ = (function cats$core$_GT__GT_(var_args){
var G__44772 = arguments.length;
switch (G__44772) {
case 2:
return cats.core._GT__GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___44875 = arguments.length;
var i__4790__auto___44876 = (0);
while(true){
if((i__4790__auto___44876 < len__4789__auto___44875)){
args_arr__4810__auto__.push((arguments[i__4790__auto___44876]));

var G__44877 = (i__4790__auto___44876 + (1));
i__4790__auto___44876 = G__44877;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return cats.core._GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(cats.core._GT__GT_.cljs$core$IFn$_invoke$arity$2 = (function (mv,mv_SINGLEQUOTE_){
return cats.core.bind(mv,(function (_){
return mv_SINGLEQUOTE_;
}));
}));

(cats.core._GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (mv,mv_SINGLEQUOTE_,mvs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cats.core._GT__GT_,mv,cljs.core.cons(mv_SINGLEQUOTE_,mvs));
}));

/** @this {Function} */
(cats.core._GT__GT_.cljs$lang$applyTo = (function (seq44769){
var G__44770 = cljs.core.first(seq44769);
var seq44769__$1 = cljs.core.next(seq44769);
var G__44771 = cljs.core.first(seq44769__$1);
var seq44769__$2 = cljs.core.next(seq44769__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44770,G__44771,seq44769__$2);
}));

(cats.core._GT__GT_.cljs$lang$maxFixedArity = (2));

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

var _STAR_context_STAR__orig_val__44779 = cats.context._STAR_context_STAR_;
var _STAR_context_STAR__temp_val__44780 = cats.context.infer.cljs$core$IFn$_invoke$arity$1(mf);
(cats.context._STAR_context_STAR_ = _STAR_context_STAR__temp_val__44780);

try{return cats.core.bind((mf.cljs$core$IFn$_invoke$arity$1 ? mf.cljs$core$IFn$_invoke$arity$1(x) : mf.call(null,x)),(function (a){
return cats.core.bind((mg.cljs$core$IFn$_invoke$arity$1 ? mg.cljs$core$IFn$_invoke$arity$1(a) : mg.call(null,a)),(function (b){
return cats.core.return$.cljs$core$IFn$_invoke$arity$1(b);
}));
}));
}finally {(cats.context._STAR_context_STAR_ = _STAR_context_STAR__orig_val__44779);
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

var _STAR_context_STAR__orig_val__44784 = cats.context._STAR_context_STAR_;
var _STAR_context_STAR__temp_val__44785 = cats.context.infer.cljs$core$IFn$_invoke$arity$1(mf);
(cats.context._STAR_context_STAR_ = _STAR_context_STAR__temp_val__44785);

try{return cats.core.bind((mf.cljs$core$IFn$_invoke$arity$1 ? mf.cljs$core$IFn$_invoke$arity$1(x) : mf.call(null,x)),(function (a){
return cats.core.bind((mg.cljs$core$IFn$_invoke$arity$1 ? mg.cljs$core$IFn$_invoke$arity$1(a) : mg.call(null,a)),(function (b){
return cats.core.return$.cljs$core$IFn$_invoke$arity$1(b);
}));
}));
}finally {(cats.context._STAR_context_STAR_ = _STAR_context_STAR__orig_val__44784);
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

var _STAR_context_STAR__orig_val__44789 = cats.context._STAR_context_STAR_;
var _STAR_context_STAR__temp_val__44790 = ctx;
(cats.context._STAR_context_STAR_ = _STAR_context_STAR__temp_val__44790);

try{return cats.protocols._foldr(ctx,f,z,xs);
}finally {(cats.context._STAR_context_STAR_ = _STAR_context_STAR__orig_val__44789);
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

var _STAR_context_STAR__orig_val__44791 = cats.context._STAR_context_STAR_;
var _STAR_context_STAR__temp_val__44792 = ctx;
(cats.context._STAR_context_STAR_ = _STAR_context_STAR__temp_val__44792);

try{return cats.protocols._foldl(ctx,f,z,xs);
}finally {(cats.context._STAR_context_STAR_ = _STAR_context_STAR__orig_val__44791);
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
var G__44796 = arguments.length;
switch (G__44796) {
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

(cats.core.foldm.cljs$core$IFn$_invoke$arity$3 = (function (f,z,xs){
if(cljs.core.empty_QMARK_(xs)){
return cats.core.return$.cljs$core$IFn$_invoke$arity$1(z);
} else {
var vec__44797 = xs;
var seq__44798 = cljs.core.seq(vec__44797);
var first__44799 = cljs.core.first(seq__44798);
var seq__44798__$1 = cljs.core.next(seq__44798);
var h = first__44799;
var t = seq__44798__$1;
return cats.core.bind((f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(z,h) : f.call(null,z,h)),(function (z_SINGLEQUOTE_){
if(cljs.core.empty_QMARK_(t)){
return cats.core.return$.cljs$core$IFn$_invoke$arity$1(z_SINGLEQUOTE_);
} else {
return cats.core.foldm.cljs$core$IFn$_invoke$arity$3(f,z_SINGLEQUOTE_,t);
}
}));
}
}));

(cats.core.foldm.cljs$core$IFn$_invoke$arity$4 = (function (ctx,f,z,xs){
if(cljs.core.empty_QMARK_(xs)){
return cats.core.return$.cljs$core$IFn$_invoke$arity$2(ctx,z);
} else {
return cats.core.foldm.cljs$core$IFn$_invoke$arity$3(f,z,xs);
}
}));

(cats.core.foldm.cljs$lang$maxFixedArity = 4);

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
var G__44804 = arguments.length;
switch (G__44804) {
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

(cats.core.traverse.cljs$core$IFn$_invoke$arity$2 = (function (f,tv){
return cats.protocols._traverse(cats.protocols._get_context(tv),f,tv);
}));

(cats.core.traverse.cljs$core$IFn$_invoke$arity$3 = (function (ctx,f,tv){
if(cats.context.context_QMARK_(ctx)){
} else {
cats.context.throw_illegal_argument("The provided context does not implements Context.");
}

var _STAR_context_STAR__orig_val__44808 = cats.context._STAR_context_STAR_;
var _STAR_context_STAR__temp_val__44809 = ctx;
(cats.context._STAR_context_STAR_ = _STAR_context_STAR__temp_val__44809);

try{return cats.protocols._traverse(cats.protocols._get_context(tv),f,tv);
}finally {(cats.context._STAR_context_STAR_ = _STAR_context_STAR__orig_val__44808);
}}));

(cats.core.traverse.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cats.core.js.map
