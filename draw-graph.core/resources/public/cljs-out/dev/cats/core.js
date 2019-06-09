// Compiled by ClojureScript 1.10.520 {}
goog.provide('cats.core');
goog.require('cljs.core');
goog.require('cats.protocols');
goog.require('clojure.set');
goog.require('cats.context');
cats.core.mempty = (function cats$core$mempty(var_args){
var G__32662 = arguments.length;
switch (G__32662) {
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
return cats.protocols._mempty.call(null,cats.context.infer.call(null));
});

cats.core.mempty.cljs$core$IFn$_invoke$arity$1 = (function (ctx){
return cats.protocols._mempty.call(null,ctx);
});

cats.core.mempty.cljs$lang$maxFixedArity = 1;

cats.core.mappend = (function cats$core$mappend(var_args){
var args__4736__auto__ = [];
var len__4730__auto___32665 = arguments.length;
var i__4731__auto___32666 = (0);
while(true){
if((i__4731__auto___32666 < len__4730__auto___32665)){
args__4736__auto__.push((arguments[i__4731__auto___32666]));

var G__32667 = (i__4731__auto___32666 + (1));
i__4731__auto___32666 = G__32667;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cats.core.mappend.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

cats.core.mappend.cljs$core$IFn$_invoke$arity$variadic = (function (svs){
if(cljs.core.seq.call(null,svs)){
} else {
throw (new Error("Assert failed: (seq svs)"));
}

var ctx = cats.context.infer.call(null,cljs.core.first.call(null,svs));
return cljs.core.reduce.call(null,cljs.core.partial.call(null,cats.protocols._mappend,ctx),svs);
});

cats.core.mappend.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cats.core.mappend.cljs$lang$applyTo = (function (seq32664){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32664));
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
var G__32669 = arguments.length;
switch (G__32669) {
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
return cats.core.pure.call(null,cats.context.infer.call(null),v);
});

cats.core.pure.cljs$core$IFn$_invoke$arity$2 = (function (ctx,v){
return cats.protocols._pure.call(null,ctx,v);
});

cats.core.pure.cljs$lang$maxFixedArity = 2;

/**
 * This is a monad version of `pure` and works
 *   identically to it.
 */
cats.core.return$ = (function cats$core$return(var_args){
var G__32672 = arguments.length;
switch (G__32672) {
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
return cats.core.return$.call(null,cats.context.infer.call(null),v);
});

cats.core.return$.cljs$core$IFn$_invoke$arity$2 = (function (ctx,v){
return cats.protocols._mreturn.call(null,ctx,v);
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
var ctx = cats.context.infer.call(null,mv);
return cats.protocols._mbind.call(null,ctx,mv,((function (ctx){
return (function (v){
if(cats.context.context_QMARK_.call(null,ctx)){
} else {
cats.context.throw_illegal_argument.call(null,"The provided context does not implements Context.");
}

var _STAR_context_STAR__orig_val__32674 = cats.context._STAR_context_STAR_;
var _STAR_context_STAR__temp_val__32675 = ctx;
cats.context._STAR_context_STAR_ = _STAR_context_STAR__temp_val__32675;

try{return f.call(null,v);
}finally {cats.context._STAR_context_STAR_ = _STAR_context_STAR__orig_val__32674;
}});})(ctx))
);
});
cats.core.mzero = (function cats$core$mzero(var_args){
var G__32677 = arguments.length;
switch (G__32677) {
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
return cats.protocols._mzero.call(null,cats.context.infer.call(null));
});

cats.core.mzero.cljs$core$IFn$_invoke$arity$1 = (function (ctx){
return cats.protocols._mzero.call(null,ctx);
});

cats.core.mzero.cljs$lang$maxFixedArity = 1;

cats.core.mplus = (function cats$core$mplus(var_args){
var args__4736__auto__ = [];
var len__4730__auto___32680 = arguments.length;
var i__4731__auto___32681 = (0);
while(true){
if((i__4731__auto___32681 < len__4730__auto___32680)){
args__4736__auto__.push((arguments[i__4731__auto___32681]));

var G__32682 = (i__4731__auto___32681 + (1));
i__4731__auto___32681 = G__32682;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return cats.core.mplus.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

cats.core.mplus.cljs$core$IFn$_invoke$arity$variadic = (function (mvs){
if(cljs.core.seq.call(null,mvs)){
} else {
throw (new Error("Assert failed: (seq mvs)"));
}

var ctx = cats.context.infer.call(null,cljs.core.first.call(null,mvs));
return cljs.core.reduce.call(null,cljs.core.partial.call(null,cats.protocols._mplus,ctx),mvs);
});

cats.core.mplus.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cats.core.mplus.cljs$lang$applyTo = (function (seq32679){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32679));
});

cats.core.guard = (function cats$core$guard(b){
if(cljs.core.truth_(b)){
return cats.core.return$.call(null,true);
} else {
return cats.core.mzero.call(null);
}
});
/**
 * Remove one level of monadic structure.
 *   This is the same as `(bind mv identity)`.
 */
cats.core.join = (function cats$core$join(mv){
return cats.core.bind.call(null,mv,cljs.core.identity);
});
/**
 * Apply a function `f` to the value wrapped in functor `fv`,
 *   preserving the context type.
 */
cats.core.fmap = (function cats$core$fmap(var_args){
var G__32684 = arguments.length;
switch (G__32684) {
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
return cats.core.fmap.call(null,f,fv);
});
});

cats.core.fmap.cljs$core$IFn$_invoke$arity$2 = (function (f,fv){
var ctx = cats.context.infer.call(null,fv);
if(cats.context.context_QMARK_.call(null,ctx)){
} else {
cats.context.throw_illegal_argument.call(null,"The provided context does not implements Context.");
}

var _STAR_context_STAR__orig_val__32685 = cats.context._STAR_context_STAR_;
var _STAR_context_STAR__temp_val__32686 = ctx;
cats.context._STAR_context_STAR_ = _STAR_context_STAR__temp_val__32686;

try{return cats.protocols._fmap.call(null,ctx,f,fv);
}finally {cats.context._STAR_context_STAR_ = _STAR_context_STAR__orig_val__32685;
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
var G__32689 = arguments.length;
switch (G__32689) {
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
return cats.core.bimap.call(null,f,g,bv);
});
});

cats.core.bimap.cljs$core$IFn$_invoke$arity$3 = (function (f,g,bv){
var ctx = cats.context.infer.call(null,bv);
if(cats.context.context_QMARK_.call(null,ctx)){
} else {
cats.context.throw_illegal_argument.call(null,"The provided context does not implements Context.");
}

var _STAR_context_STAR__orig_val__32690 = cats.context._STAR_context_STAR_;
var _STAR_context_STAR__temp_val__32691 = ctx;
cats.context._STAR_context_STAR_ = _STAR_context_STAR__temp_val__32691;

try{return cats.protocols._bimap.call(null,ctx,f,g,bv);
}finally {cats.context._STAR_context_STAR_ = _STAR_context_STAR__orig_val__32690;
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
var G__32694 = arguments.length;
switch (G__32694) {
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
return cats.core.left_map.call(null,f,bv);
});
});

cats.core.left_map.cljs$core$IFn$_invoke$arity$2 = (function (f,bv){
return cats.core.bimap.call(null,f,cljs.core.identity,bv);
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
var G__32697 = arguments.length;
switch (G__32697) {
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
return cats.core.right_map.call(null,g,bv);
});
});

cats.core.right_map.cljs$core$IFn$_invoke$arity$2 = (function (g,bv){
return cats.core.bimap.call(null,cljs.core.identity,g,bv);
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
var len__4730__auto___32701 = arguments.length;
var i__4731__auto___32702 = (0);
while(true){
if((i__4731__auto___32702 < len__4730__auto___32701)){
args__4736__auto__.push((arguments[i__4731__auto___32702]));

var G__32703 = (i__4731__auto___32702 + (1));
i__4731__auto___32702 = G__32703;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cats.core.fapply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cats.core.fapply.cljs$core$IFn$_invoke$arity$variadic = (function (af,avs){
if(cljs.core.seq.call(null,avs)){
} else {
throw (new Error("Assert failed: (seq avs)"));
}

var ctx = cats.context.infer.call(null,af);
return cljs.core.reduce.call(null,cljs.core.partial.call(null,cats.protocols._fapply,ctx),af,avs);
});

cats.core.fapply.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cats.core.fapply.cljs$lang$applyTo = (function (seq32699){
var G__32700 = cljs.core.first.call(null,seq32699);
var seq32699__$1 = cljs.core.next.call(null,seq32699);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32700,seq32699__$1);
});

/**
 * Given an expression and a monadic value,
 *   if the expression is logical true, return the monadic value.
 *   Otherwise, return nil in a monadic context.
 */
cats.core.when = (function cats$core$when(var_args){
var G__32705 = arguments.length;
switch (G__32705) {
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
return cats.core.when.call(null,cats.context.infer.call(null,mv),b,mv);
});

cats.core.when.cljs$core$IFn$_invoke$arity$3 = (function (ctx,b,mv){
if(cljs.core.truth_(b)){
return mv;
} else {
return cats.core.pure.call(null,ctx,null);
}
});

cats.core.when.cljs$lang$maxFixedArity = 3;

/**
 * Given an expression and a monadic value,
 *   if the expression is not logical true, return the monadic value.
 *   Otherwise, return nil in a monadic context.
 */
cats.core.unless = (function cats$core$unless(var_args){
var G__32708 = arguments.length;
switch (G__32708) {
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
return cats.core.when.call(null,cljs.core.not.call(null,b),mv);
});

cats.core.unless.cljs$core$IFn$_invoke$arity$3 = (function (ctx,b,mv){
return cats.core.when.call(null,ctx,cljs.core.not.call(null,b),mv);
});

cats.core.unless.cljs$lang$maxFixedArity = 3;

cats.core.deps = (function cats$core$deps(expr,syms){
if((((expr instanceof cljs.core.Symbol)) && (cljs.core.contains_QMARK_.call(null,syms,expr)))){
return (new cljs.core.List(null,expr,null,(1),null));
} else {
if(cljs.core.seq_QMARK_.call(null,expr)){
return cljs.core.mapcat.call(null,(function (p1__32710_SHARP_){
return cats.core.deps.call(null,p1__32710_SHARP_,syms);
}),expr);
} else {
return cljs.core.List.EMPTY;

}
}
});
cats.core.rename_sym = (function cats$core$rename_sym(expr,renames){
return cljs.core.get.call(null,renames,expr,expr);
});
cats.core.rename = (function cats$core$rename(expr,renames){
if((expr instanceof cljs.core.Symbol)){
return cats.core.rename_sym.call(null,expr,renames);
} else {
if(cljs.core.seq_QMARK_.call(null,expr)){
return cljs.core.map.call(null,(function (p1__32711_SHARP_){
return cats.core.rename.call(null,p1__32711_SHARP_,renames);
}),expr);
} else {
return expr;

}
}
});
cats.core.dedupe_symbols_STAR_ = (function cats$core$dedupe_symbols_STAR_(sym__GT_ap,body){
var renamer = (function cats$core$dedupe_symbols_STAR__$_renamer(p__32719,p__32720){
var map__32721 = p__32719;
var map__32721__$1 = (((((!((map__32721 == null))))?(((((map__32721.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32721.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32721):map__32721);
var summ = map__32721__$1;
var body__$1 = cljs.core.get.call(null,map__32721__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var syms = cljs.core.get.call(null,map__32721__$1,new cljs.core.Keyword(null,"syms","syms",-1575891762));
var aps = cljs.core.get.call(null,map__32721__$1,new cljs.core.Keyword(null,"aps","aps",265109554));
var seen = cljs.core.get.call(null,map__32721__$1,new cljs.core.Keyword(null,"seen","seen",-518999789));
var renames = cljs.core.get.call(null,map__32721__$1,new cljs.core.Keyword(null,"renames","renames",343278368));
var vec__32722 = p__32720;
var s = cljs.core.nth.call(null,vec__32722,(0),null);
var ap = cljs.core.nth.call(null,vec__32722,(1),null);
var ap_SINGLEQUOTE_ = cats.core.rename.call(null,ap,renames);
var new_aps = cljs.core.conj.call(null,aps,ap_SINGLEQUOTE_);
if(cljs.core.truth_(seen.call(null,s))){
var s_SINGLEQUOTE_ = cljs.core.gensym.call(null);
var new_syms = cljs.core.conj.call(null,syms,s_SINGLEQUOTE_);
var new_seen = cljs.core.conj.call(null,seen,s_SINGLEQUOTE_);
var new_renames = cljs.core.assoc.call(null,renames,s,s_SINGLEQUOTE_);
var new_body = cats.core.rename.call(null,body__$1,new_renames);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"syms","syms",-1575891762),new_syms,new cljs.core.Keyword(null,"aps","aps",265109554),new_aps,new cljs.core.Keyword(null,"seen","seen",-518999789),new_seen,new cljs.core.Keyword(null,"renames","renames",343278368),new_renames,new cljs.core.Keyword(null,"body","body",-2049205669),new_body], null);
} else {
var new_syms = cljs.core.conj.call(null,syms,s);
var new_seen = cljs.core.conj.call(null,seen,s);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"syms","syms",-1575891762),new_syms,new cljs.core.Keyword(null,"aps","aps",265109554),new_aps,new cljs.core.Keyword(null,"seen","seen",-518999789),new_seen,new cljs.core.Keyword(null,"renames","renames",343278368),renames,new cljs.core.Keyword(null,"body","body",-2049205669),body__$1], null);
}
});
var summ = cljs.core.reduce.call(null,renamer,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"syms","syms",-1575891762),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"aps","aps",265109554),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"renames","renames",343278368),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"body","body",-2049205669),body], null),sym__GT_ap);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mapv.call(null,cljs.core.vector,new cljs.core.Keyword(null,"syms","syms",-1575891762).cljs$core$IFn$_invoke$arity$1(summ),new cljs.core.Keyword(null,"aps","aps",265109554).cljs$core$IFn$_invoke$arity$1(summ)),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(summ)], null);
});
cats.core.dedupe_symbols = (function cats$core$dedupe_symbols(bindings,body){
var syms = cljs.core.map.call(null,cljs.core.first,bindings);
var aps = cljs.core.map.call(null,cljs.core.second,bindings);
var sym__GT_ap = cljs.core.mapv.call(null,cljs.core.vector,syms,aps);
return cats.core.dedupe_symbols_STAR_.call(null,sym__GT_ap,body);
});
cats.core.dependency_map = (function cats$core$dependency_map(sym__GT_ap){
var syms = cljs.core.map.call(null,cljs.core.first,sym__GT_ap);
var symset = cljs.core.set.call(null,syms);
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,(function (){var iter__4523__auto__ = ((function (syms,symset){
return (function cats$core$dependency_map_$_iter__32726(s__32727){
return (new cljs.core.LazySeq(null,((function (syms,symset){
return (function (){
var s__32727__$1 = s__32727;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__32727__$1);
if(temp__5720__auto__){
var s__32727__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32727__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__32727__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__32729 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__32728 = (0);
while(true){
if((i__32728 < size__4522__auto__)){
var vec__32730 = cljs.core._nth.call(null,c__4521__auto__,i__32728);
var s = cljs.core.nth.call(null,vec__32730,(0),null);
var ap = cljs.core.nth.call(null,vec__32730,(1),null);
var ds = cljs.core.set.call(null,cats.core.deps.call(null,ap,symset));
cljs.core.chunk_append.call(null,b__32729,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,ds], null));

var G__32736 = (i__32728 + (1));
i__32728 = G__32736;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32729),cats$core$dependency_map_$_iter__32726.call(null,cljs.core.chunk_rest.call(null,s__32727__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32729),null);
}
} else {
var vec__32733 = cljs.core.first.call(null,s__32727__$2);
var s = cljs.core.nth.call(null,vec__32733,(0),null);
var ap = cljs.core.nth.call(null,vec__32733,(1),null);
var ds = cljs.core.set.call(null,cats.core.deps.call(null,ap,symset));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,ds], null),cats$core$dependency_map_$_iter__32726.call(null,cljs.core.rest.call(null,s__32727__$2)));
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
return iter__4523__auto__.call(null,sym__GT_ap);
})());
});
cats.core.remove_deps = (function cats$core$remove_deps(deps,symset){
var removed = (function (){var iter__4523__auto__ = (function cats$core$remove_deps_$_iter__32737(s__32738){
return (new cljs.core.LazySeq(null,(function (){
var s__32738__$1 = s__32738;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__32738__$1);
if(temp__5720__auto__){
var s__32738__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32738__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__32738__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__32740 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__32739 = (0);
while(true){
if((i__32739 < size__4522__auto__)){
var vec__32741 = cljs.core._nth.call(null,c__4521__auto__,i__32739);
var s = cljs.core.nth.call(null,vec__32741,(0),null);
var depset = cljs.core.nth.call(null,vec__32741,(1),null);
cljs.core.chunk_append.call(null,b__32740,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,clojure.set.difference.call(null,depset,symset)], null));

var G__32747 = (i__32739 + (1));
i__32739 = G__32747;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32740),cats$core$remove_deps_$_iter__32737.call(null,cljs.core.chunk_rest.call(null,s__32738__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32740),null);
}
} else {
var vec__32744 = cljs.core.first.call(null,s__32738__$2);
var s = cljs.core.nth.call(null,vec__32744,(0),null);
var depset = cljs.core.nth.call(null,vec__32744,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,clojure.set.difference.call(null,depset,symset)], null),cats$core$remove_deps_$_iter__32737.call(null,cljs.core.rest.call(null,s__32738__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,deps);
})();
return cljs.core.into.call(null,cljs.core.empty.call(null,deps),removed);
});
cats.core.topo_sort_STAR_ = (function cats$core$topo_sort_STAR_(deps,seen,batches,current){
while(true){
if(cljs.core.empty_QMARK_.call(null,deps)){
return cljs.core.conj.call(null,batches,current);
} else {
var dep = cljs.core.first.call(null,deps);
var vec__32748 = dep;
var s = cljs.core.nth.call(null,vec__32748,(0),null);
var dependencies = cljs.core.nth.call(null,vec__32748,(1),null);
var dependant_QMARK_ = cljs.core.some.call(null,dependencies,seen);
if((dependant_QMARK_ == null)){
var G__32751 = cljs.core.subvec.call(null,deps,(1));
var G__32752 = cljs.core.conj.call(null,seen,s);
var G__32753 = batches;
var G__32754 = cljs.core.conj.call(null,current,s);
deps = G__32751;
seen = G__32752;
batches = G__32753;
current = G__32754;
continue;
} else {
var G__32755 = cats.core.remove_deps.call(null,cljs.core.subvec.call(null,deps,(1)),cljs.core.set.call(null,current));
var G__32756 = cljs.core.conj.call(null,seen,s);
var G__32757 = cljs.core.conj.call(null,batches,current);
var G__32758 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null);
deps = G__32755;
seen = G__32756;
batches = G__32757;
current = G__32758;
continue;
}
}
break;
}
});
cats.core.topo_sort = (function cats$core$topo_sort(deps){
var syms = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,cljs.core.first,deps));
return cats.core.topo_sort_STAR_.call(null,deps,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
});
cats.core.bindings__GT_batches = (function cats$core$bindings__GT_batches(bindings){
var syms = cljs.core.map.call(null,cljs.core.first,bindings);
var aps = cljs.core.map.call(null,cljs.core.second,bindings);
var sym__GT_ap = cljs.core.mapv.call(null,cljs.core.vector,syms,aps);
var sorted_deps = cats.core.topo_sort.call(null,cats.core.dependency_map.call(null,sym__GT_ap));
return sorted_deps;
});
cats.core.alet_STAR_ = (function cats$core$alet_STAR_(batches,env,body){
var fb = cljs.core.first.call(null,batches);
var rb = cljs.core.rest.call(null,batches);
var fs = cljs.core.first.call(null,fb);
var fa = cljs.core.get.call(null,env,fs);
var code = cljs.core.reduce.call(null,((function (fb,rb,fs,fa){
return (function (acc,syms){
var fs__$1 = cljs.core.first.call(null,syms);
var fa__$1 = cljs.core.get.call(null,env,fs__$1);
var rs = cljs.core.rest.call(null,syms);
var faps = cljs.core.map.call(null,((function (fs__$1,fa__$1,rs,fb,rb,fs,fa){
return (function (p1__32759_SHARP_){
return cljs.core.get.call(null,env,p1__32759_SHARP_);
});})(fs__$1,fa__$1,rs,fb,rb,fs,fa))
,rs);
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,syms),(1))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cats.core","fmap","cats.core/fmap",1968944844,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,fs__$1,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,acc,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,fa__$1,null,(1),null)))));
} else {
var cf = cljs.core.reduce.call(null,((function (fs__$1,fa__$1,rs,faps,fb,rb,fs,fa){
return (function (f,sym){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,sym,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,f,null,(1),null)))));
});})(fs__$1,fa__$1,rs,faps,fb,rb,fs,fa))
,acc,cljs.core.reverse.call(null,syms));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cats.core","fapply","cats.core/fapply",1894900497,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cats.core","fmap","cats.core/fmap",1968944844,null),null,(1),null)),(new cljs.core.List(null,cf,null,(1),null)),(new cljs.core.List(null,fa__$1,null,(1),null))))),null,(1),null)),faps)));
}
});})(fb,rb,fs,fa))
,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),cljs.core.reverse.call(null,batches));
var join_count = (cljs.core.count.call(null,batches) - (1));
return cljs.core.reduce.call(null,((function (fb,rb,fs,fa,code,join_count){
return (function (acc,_){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cats.core","join","cats.core/join",1184708213,null),null,(1),null)),(new cljs.core.List(null,acc,null,(1),null)))));
});})(fb,rb,fs,fa,code,join_count))
,code,cljs.core.range.call(null,join_count));
});
var ret__4776__auto___32764 = (function (){
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
var len__4730__auto___32765 = arguments.length;
var i__4731__auto___32766 = (0);
while(true){
if((i__4731__auto___32766 < len__4730__auto___32765)){
args__4736__auto__.push((arguments[i__4731__auto___32766]));

var G__32767 = (i__4731__auto___32766 + (1));
i__4731__auto___32766 = G__32767;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cats.core.ap.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cats.core.ap.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,f,args){
var syms = cljs.core.repeatedly.call(null,cljs.core.count.call(null,args),cljs.core.partial.call(null,cljs.core.gensym,"arg"));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cats.core","alet","cats.core/alet",1598913649,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.interleave.call(null,syms,args))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,f,null,(1),null)),syms))),null,(1),null)))));
});

cats.core.ap.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cats.core.ap.cljs$lang$applyTo = (function (seq32760){
var G__32761 = cljs.core.first.call(null,seq32760);
var seq32760__$1 = cljs.core.next.call(null,seq32760);
var G__32762 = cljs.core.first.call(null,seq32760__$1);
var seq32760__$2 = cljs.core.next.call(null,seq32760__$1);
var G__32763 = cljs.core.first.call(null,seq32760__$2);
var seq32760__$3 = cljs.core.next.call(null,seq32760__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32761,G__32762,G__32763,seq32760__$3);
});

return null;
})()
;
cats.core.ap.cljs$lang$macro = true;

var ret__4776__auto___32772 = (function (){
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
var len__4730__auto___32773 = arguments.length;
var i__4731__auto___32774 = (0);
while(true){
if((i__4731__auto___32774 < len__4730__auto___32773)){
args__4736__auto__.push((arguments[i__4731__auto___32774]));

var G__32775 = (i__4731__auto___32774 + (1));
i__4731__auto___32774 = G__32775;
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
var form = cljs.core.first.call(null,forms__$1);
var threaded = ((cljs.core.seq_QMARK_.call(null,form))?cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cats.core","ap","cats.core/ap",-1280946002,null),null,(1),null)),(new cljs.core.List(null,cljs.core.first.call(null,form),null,(1),null)),(new cljs.core.List(null,x__$1,null,(1),null)),cljs.core.next.call(null,form)))),cljs.core.meta.call(null,form)):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cats.core","ap","cats.core/ap",-1280946002,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null)),(new cljs.core.List(null,x__$1,null,(1),null))))));
var G__32776 = threaded;
var G__32777 = cljs.core.next.call(null,forms__$1);
x__$1 = G__32776;
forms__$1 = G__32777;
continue;
} else {
return x__$1;
}
break;
}
});

cats.core.ap__GT_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cats.core.ap__GT_.cljs$lang$applyTo = (function (seq32768){
var G__32769 = cljs.core.first.call(null,seq32768);
var seq32768__$1 = cljs.core.next.call(null,seq32768);
var G__32770 = cljs.core.first.call(null,seq32768__$1);
var seq32768__$2 = cljs.core.next.call(null,seq32768__$1);
var G__32771 = cljs.core.first.call(null,seq32768__$2);
var seq32768__$3 = cljs.core.next.call(null,seq32768__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32769,G__32770,G__32771,seq32768__$3);
});

return null;
})()
;
cats.core.ap__GT_.cljs$lang$macro = true;

var ret__4776__auto___32782 = (function (){
/**
 * Thread like `->>`, within an applicative idiom.
 * See `cats.labs.sugar/ap->` for more in-depth discussion.
 */
cats.core.ap__GT__GT_ = (function cats$core$ap__GT__GT_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___32783 = arguments.length;
var i__4731__auto___32784 = (0);
while(true){
if((i__4731__auto___32784 < len__4730__auto___32783)){
args__4736__auto__.push((arguments[i__4731__auto___32784]));

var G__32785 = (i__4731__auto___32784 + (1));
i__4731__auto___32784 = G__32785;
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
var form = cljs.core.first.call(null,forms__$1);
var threaded = ((cljs.core.seq_QMARK_.call(null,form))?cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cats.core","ap","cats.core/ap",-1280946002,null),null,(1),null)),(new cljs.core.List(null,cljs.core.first.call(null,form),null,(1),null)),cljs.core.next.call(null,form),(new cljs.core.List(null,x__$1,null,(1),null))))),cljs.core.meta.call(null,form)):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cats.core","ap","cats.core/ap",-1280946002,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null)),(new cljs.core.List(null,x__$1,null,(1),null))))));
var G__32786 = threaded;
var G__32787 = cljs.core.next.call(null,forms__$1);
x__$1 = G__32786;
forms__$1 = G__32787;
continue;
} else {
return x__$1;
}
break;
}
});

cats.core.ap__GT__GT_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cats.core.ap__GT__GT_.cljs$lang$applyTo = (function (seq32778){
var G__32779 = cljs.core.first.call(null,seq32778);
var seq32778__$1 = cljs.core.next.call(null,seq32778);
var G__32780 = cljs.core.first.call(null,seq32778__$1);
var seq32778__$2 = cljs.core.next.call(null,seq32778__$1);
var G__32781 = cljs.core.first.call(null,seq32778__$2);
var seq32778__$3 = cljs.core.next.call(null,seq32778__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32779,G__32780,G__32781,seq32778__$3);
});

return null;
})()
;
cats.core.ap__GT__GT_.cljs$lang$macro = true;

var ret__4776__auto___32797 = (function (){
/**
 * Thread like `as->`, within an applicative idiom.
 * See `cats.labs.sugar/ap->` for more in-depth discussion.
 */
cats.core.as_ap__GT_ = (function cats$core$as_ap__GT_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___32798 = arguments.length;
var i__4731__auto___32799 = (0);
while(true){
if((i__4731__auto___32799 < len__4730__auto___32798)){
args__4736__auto__.push((arguments[i__4731__auto___32799]));

var G__32800 = (i__4731__auto___32799 + (1));
i__4731__auto___32799 = G__32800;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((4) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((4)),(0),null)):null);
return cats.core.as_ap__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4737__auto__);
});

cats.core.as_ap__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,name,forms){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)),cljs.core.interleave.call(null,cljs.core.repeat.call(null,name),(function (){var iter__4523__auto__ = (function cats$core$iter__32793(s__32794){
return (new cljs.core.LazySeq(null,(function (){
var s__32794__$1 = s__32794;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__32794__$1);
if(temp__5720__auto__){
var s__32794__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32794__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__32794__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__32796 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__32795 = (0);
while(true){
if((i__32795 < size__4522__auto__)){
var form = cljs.core._nth.call(null,c__4521__auto__,i__32795);
cljs.core.chunk_append.call(null,b__32796,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cats.core","ap","cats.core/ap",-1280946002,null),null,(1),null)),form))));

var G__32801 = (i__32795 + (1));
i__32795 = G__32801;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32796),cats$core$iter__32793.call(null,cljs.core.chunk_rest.call(null,s__32794__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32796),null);
}
} else {
var form = cljs.core.first.call(null,s__32794__$2);
return cljs.core.cons.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cats.core","ap","cats.core/ap",-1280946002,null),null,(1),null)),form))),cats$core$iter__32793.call(null,cljs.core.rest.call(null,s__32794__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,forms);
})()))))),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)))));
});

cats.core.as_ap__GT_.cljs$lang$maxFixedArity = (4);

/** @this {Function} */
cats.core.as_ap__GT_.cljs$lang$applyTo = (function (seq32788){
var G__32789 = cljs.core.first.call(null,seq32788);
var seq32788__$1 = cljs.core.next.call(null,seq32788);
var G__32790 = cljs.core.first.call(null,seq32788__$1);
var seq32788__$2 = cljs.core.next.call(null,seq32788__$1);
var G__32791 = cljs.core.first.call(null,seq32788__$2);
var seq32788__$3 = cljs.core.next.call(null,seq32788__$2);
var G__32792 = cljs.core.first.call(null,seq32788__$3);
var seq32788__$4 = cljs.core.next.call(null,seq32788__$3);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32789,G__32790,G__32791,G__32792,seq32788__$4);
});

return null;
})()
;
cats.core.as_ap__GT_.cljs$lang$macro = true;

var ret__4776__auto___32806 = (function (){
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
var len__4730__auto___32807 = arguments.length;
var i__4731__auto___32808 = (0);
while(true){
if((i__4731__auto___32808 < len__4730__auto___32807)){
args__4736__auto__.push((arguments[i__4731__auto___32808]));

var G__32809 = (i__4731__auto___32808 + (1));
i__4731__auto___32808 = G__32809;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cats.core.__GT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cats.core.__GT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,forms){
var g = cljs.core.gensym.call(null);
var pstep = ((function (g){
return (function (step){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","->","cljs.core/->",1488366311,null),null,(1),null)),(new cljs.core.List(null,g,null,(1),null)),(new cljs.core.List(null,step,null,(1),null)))));
});})(g))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cats.core","mlet","cats.core/mlet",-580686930,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,g,null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.map.call(null,pstep,forms)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cats.core","return","cats.core/return",1729789854,null),null,(1),null)),(new cljs.core.List(null,g,null,(1),null))))),null,(1),null)))));
});

cats.core.__GT__EQ_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cats.core.__GT__EQ_.cljs$lang$applyTo = (function (seq32802){
var G__32803 = cljs.core.first.call(null,seq32802);
var seq32802__$1 = cljs.core.next.call(null,seq32802);
var G__32804 = cljs.core.first.call(null,seq32802__$1);
var seq32802__$2 = cljs.core.next.call(null,seq32802__$1);
var G__32805 = cljs.core.first.call(null,seq32802__$2);
var seq32802__$3 = cljs.core.next.call(null,seq32802__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32803,G__32804,G__32805,seq32802__$3);
});

return null;
})()
;
cats.core.__GT__EQ_.cljs$lang$macro = true;

var ret__4776__auto___32814 = (function (){
/**
 * Like ->>, but with monadic binding instead of pure application.
 * See `cats.labs.sugar/->=` for more in-depth discussion.
 */
cats.core.__GT__GT__EQ_ = (function cats$core$__GT__GT__EQ_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___32815 = arguments.length;
var i__4731__auto___32816 = (0);
while(true){
if((i__4731__auto___32816 < len__4730__auto___32815)){
args__4736__auto__.push((arguments[i__4731__auto___32816]));

var G__32817 = (i__4731__auto___32816 + (1));
i__4731__auto___32816 = G__32817;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cats.core.__GT__GT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cats.core.__GT__GT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,forms){
var g = cljs.core.gensym.call(null);
var pstep = ((function (g){
return (function (step){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","->>","cljs.core/->>",-1207871206,null),null,(1),null)),(new cljs.core.List(null,g,null,(1),null)),(new cljs.core.List(null,step,null,(1),null)))));
});})(g))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cats.core","mlet","cats.core/mlet",-580686930,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,g,null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.map.call(null,pstep,forms)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cats.core","return","cats.core/return",1729789854,null),null,(1),null)),(new cljs.core.List(null,g,null,(1),null))))),null,(1),null)))));
});

cats.core.__GT__GT__EQ_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cats.core.__GT__GT__EQ_.cljs$lang$applyTo = (function (seq32810){
var G__32811 = cljs.core.first.call(null,seq32810);
var seq32810__$1 = cljs.core.next.call(null,seq32810);
var G__32812 = cljs.core.first.call(null,seq32810__$1);
var seq32810__$2 = cljs.core.next.call(null,seq32810__$1);
var G__32813 = cljs.core.first.call(null,seq32810__$2);
var seq32810__$3 = cljs.core.next.call(null,seq32810__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32811,G__32812,G__32813,seq32810__$3);
});

return null;
})()
;
cats.core.__GT__GT__EQ_.cljs$lang$macro = true;

var ret__4776__auto___32823 = (function (){
/**
 * Like `as->`, but with monadic binding instead of pure application.
 * See `cats.labs.sugar/->=` for more in-depth discussion.
 */
cats.core.as__GT__EQ_ = (function cats$core$as__GT__EQ_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___32824 = arguments.length;
var i__4731__auto___32825 = (0);
while(true){
if((i__4731__auto___32825 < len__4730__auto___32824)){
args__4736__auto__.push((arguments[i__4731__auto___32825]));

var G__32826 = (i__4731__auto___32825 + (1));
i__4731__auto___32825 = G__32826;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((4) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((4)),(0),null)):null);
return cats.core.as__GT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4737__auto__);
});

cats.core.as__GT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,name,forms){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cats.core","mlet","cats.core/mlet",-580686930,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)),cljs.core.interleave.call(null,cljs.core.repeat.call(null,name),forms))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cats.core","return","cats.core/return",1729789854,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null))))),null,(1),null)))));
});

cats.core.as__GT__EQ_.cljs$lang$maxFixedArity = (4);

/** @this {Function} */
cats.core.as__GT__EQ_.cljs$lang$applyTo = (function (seq32818){
var G__32819 = cljs.core.first.call(null,seq32818);
var seq32818__$1 = cljs.core.next.call(null,seq32818);
var G__32820 = cljs.core.first.call(null,seq32818__$1);
var seq32818__$2 = cljs.core.next.call(null,seq32818__$1);
var G__32821 = cljs.core.first.call(null,seq32818__$2);
var seq32818__$3 = cljs.core.next.call(null,seq32818__$2);
var G__32822 = cljs.core.first.call(null,seq32818__$3);
var seq32818__$4 = cljs.core.next.call(null,seq32818__$3);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32819,G__32820,G__32821,G__32822,seq32818__$4);
});

return null;
})()
;
cats.core.as__GT__EQ_.cljs$lang$macro = true;

cats.core.arglists = (function cats$core$arglists(var$){
return cljs.core.get.call(null,cljs.core.meta.call(null,var$),new cljs.core.Keyword(null,"arglists","arglists",1661989754));
});
cats.core.single_arity_QMARK_ = (function cats$core$single_arity_QMARK_(var$){
var args = cats.core.arglists.call(null,var$);
return ((cljs.core._EQ_.call(null,cljs.core.count.call(null,args),(1))) && (cljs.core.not.call(null,cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),cljs.core.first.call(null,args)))));
});
cats.core.arity = (function cats$core$arity(var$){
if(cats.core.single_arity_QMARK_.call(null,var$)){
} else {
throw (new Error("Assert failed: (single-arity? var)"));
}

return cljs.core.count.call(null,cljs.core.first.call(null,cats.core.arglists.call(null,var$)));
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
if(cljs.core.empty_QMARK_.call(null,mvs)){
return cats.core.return$.call(null,cljs.core.List.EMPTY);
} else {
var ctx = cats.context.infer.call(null,cljs.core.first.call(null,mvs));
if(cats.context.context_QMARK_.call(null,ctx)){
} else {
cats.context.throw_illegal_argument.call(null,"The provided context does not implements Context.");
}

var _STAR_context_STAR__orig_val__32830 = cats.context._STAR_context_STAR_;
var _STAR_context_STAR__temp_val__32831 = ctx;
cats.context._STAR_context_STAR_ = _STAR_context_STAR__temp_val__32831;

try{return cljs.core.reduce.call(null,((function (_STAR_context_STAR__orig_val__32830,_STAR_context_STAR__temp_val__32831,ctx){
return (function (mvs__$1,mv){
return cats.core.bind.call(null,mv,((function (_STAR_context_STAR__orig_val__32830,_STAR_context_STAR__temp_val__32831,ctx){
return (function (v){
return cats.core.bind.call(null,mvs__$1,((function (_STAR_context_STAR__orig_val__32830,_STAR_context_STAR__temp_val__32831,ctx){
return (function (vs){
return cats.core.return$.call(null,cljs.core.cons.call(null,v,vs));
});})(_STAR_context_STAR__orig_val__32830,_STAR_context_STAR__temp_val__32831,ctx))
);
});})(_STAR_context_STAR__orig_val__32830,_STAR_context_STAR__temp_val__32831,ctx))
);
});})(_STAR_context_STAR__orig_val__32830,_STAR_context_STAR__temp_val__32831,ctx))
,cats.core.return$.call(null,cljs.core.List.EMPTY),cljs.core.reverse.call(null,mvs));
}finally {cats.context._STAR_context_STAR_ = _STAR_context_STAR__orig_val__32830;
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
return cats.core.sequence.call(null,cljs.core.map.call(null,mf,coll));
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
return cats.core.mapseq.call(null,mf,vs);
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
return cats.core.bind.call(null,mv,(function (v){
return cats.core.bind.call(null,cats.core.guard.call(null,p.call(null,v)),(function (G__32832){
return cats.core.return$.call(null,v);
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
var G__32837 = arguments.length;
switch (G__32837) {
case 2:
return cats.core._GT__GT__EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___32839 = arguments.length;
var i__4731__auto___32840 = (0);
while(true){
if((i__4731__auto___32840 < len__4730__auto___32839)){
args_arr__4751__auto__.push((arguments[i__4731__auto___32840]));

var G__32841 = (i__4731__auto___32840 + (1));
i__4731__auto___32840 = G__32841;
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
return cats.core.bind.call(null,mv,f);
});

cats.core._GT__GT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (mv,f,fs){
return cljs.core.reduce.call(null,cats.core.bind,mv,cljs.core.cons.call(null,f,fs));
});

/** @this {Function} */
cats.core._GT__GT__EQ_.cljs$lang$applyTo = (function (seq32834){
var G__32835 = cljs.core.first.call(null,seq32834);
var seq32834__$1 = cljs.core.next.call(null,seq32834);
var G__32836 = cljs.core.first.call(null,seq32834__$1);
var seq32834__$2 = cljs.core.next.call(null,seq32834__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32835,G__32836,seq32834__$2);
});

cats.core._GT__GT__EQ_.cljs$lang$maxFixedArity = (2);

/**
 * Perform a Haskell-style left-associative bind,
 *   ignoring the values produced by the monadic computations.
 */
cats.core._GT__GT_ = (function cats$core$_GT__GT_(var_args){
var G__32846 = arguments.length;
switch (G__32846) {
case 2:
return cats.core._GT__GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___32848 = arguments.length;
var i__4731__auto___32849 = (0);
while(true){
if((i__4731__auto___32849 < len__4730__auto___32848)){
args_arr__4751__auto__.push((arguments[i__4731__auto___32849]));

var G__32850 = (i__4731__auto___32849 + (1));
i__4731__auto___32849 = G__32850;
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
return cats.core.bind.call(null,mv,(function (_){
return mv_SINGLEQUOTE_;
}));
});

cats.core._GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (mv,mv_SINGLEQUOTE_,mvs){
return cljs.core.reduce.call(null,cats.core._GT__GT_,mv,cljs.core.cons.call(null,mv_SINGLEQUOTE_,mvs));
});

/** @this {Function} */
cats.core._GT__GT_.cljs$lang$applyTo = (function (seq32843){
var G__32844 = cljs.core.first.call(null,seq32843);
var seq32843__$1 = cljs.core.next.call(null,seq32843);
var G__32845 = cljs.core.first.call(null,seq32843__$1);
var seq32843__$2 = cljs.core.next.call(null,seq32843__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32844,G__32845,seq32843__$2);
});

cats.core._GT__GT_.cljs$lang$maxFixedArity = (2);

/**
 * Same as the two argument version of `>>=` but with the
 *   arguments flipped.
 */
cats.core._EQ__LT__LT_ = (function cats$core$_EQ__LT__LT_(f,mv){
return cats.core._GT__GT__EQ_.call(null,mv,f);
});
/**
 * Left-to-right composition of monads.
 */
cats.core._GT__EQ__GT_ = (function cats$core$_GT__EQ__GT_(mf,mg,x){
if(cats.context.context_QMARK_.call(null,cats.context.infer.call(null,mf))){
} else {
cats.context.throw_illegal_argument.call(null,"The provided context does not implements Context.");
}

var _STAR_context_STAR__orig_val__32851 = cats.context._STAR_context_STAR_;
var _STAR_context_STAR__temp_val__32852 = cats.context.infer.call(null,mf);
cats.context._STAR_context_STAR_ = _STAR_context_STAR__temp_val__32852;

try{return cats.core.bind.call(null,mf.call(null,x),((function (_STAR_context_STAR__orig_val__32851,_STAR_context_STAR__temp_val__32852){
return (function (a){
return cats.core.bind.call(null,mg.call(null,a),((function (_STAR_context_STAR__orig_val__32851,_STAR_context_STAR__temp_val__32852){
return (function (b){
return cats.core.return$.call(null,b);
});})(_STAR_context_STAR__orig_val__32851,_STAR_context_STAR__temp_val__32852))
);
});})(_STAR_context_STAR__orig_val__32851,_STAR_context_STAR__temp_val__32852))
);
}finally {cats.context._STAR_context_STAR_ = _STAR_context_STAR__orig_val__32851;
}});
/**
 * Right-to-left composition of monads.
 *   Same as `>=>` with its first two arguments flipped.
 */
cats.core._LT__EQ__LT_ = (function cats$core$_LT__EQ__LT_(mg,mf,x){
if(cats.context.context_QMARK_.call(null,cats.context.infer.call(null,mf))){
} else {
cats.context.throw_illegal_argument.call(null,"The provided context does not implements Context.");
}

var _STAR_context_STAR__orig_val__32853 = cats.context._STAR_context_STAR_;
var _STAR_context_STAR__temp_val__32854 = cats.context.infer.call(null,mf);
cats.context._STAR_context_STAR_ = _STAR_context_STAR__temp_val__32854;

try{return cats.core.bind.call(null,mf.call(null,x),((function (_STAR_context_STAR__orig_val__32853,_STAR_context_STAR__temp_val__32854){
return (function (a){
return cats.core.bind.call(null,mg.call(null,a),((function (_STAR_context_STAR__orig_val__32853,_STAR_context_STAR__temp_val__32854){
return (function (b){
return cats.core.return$.call(null,b);
});})(_STAR_context_STAR__orig_val__32853,_STAR_context_STAR__temp_val__32854))
);
});})(_STAR_context_STAR__orig_val__32853,_STAR_context_STAR__temp_val__32854))
);
}finally {cats.context._STAR_context_STAR_ = _STAR_context_STAR__orig_val__32853;
}});
/**
 * Generic function to unwrap/extract
 *   the inner value of a container.
 */
cats.core.extract = (function cats$core$extract(v){
return cats.protocols._extract.call(null,v);
});
cats.core._LT__GT_ = cats.core.mappend;
/**
 * Perform a right-associative fold on the data structure.
 */
cats.core.foldr = (function cats$core$foldr(f,z,xs){
var ctx = cats.protocols._get_context.call(null,xs);
if(cats.context.context_QMARK_.call(null,ctx)){
} else {
cats.context.throw_illegal_argument.call(null,"The provided context does not implements Context.");
}

var _STAR_context_STAR__orig_val__32855 = cats.context._STAR_context_STAR_;
var _STAR_context_STAR__temp_val__32856 = ctx;
cats.context._STAR_context_STAR_ = _STAR_context_STAR__temp_val__32856;

try{return cats.protocols._foldr.call(null,ctx,f,z,xs);
}finally {cats.context._STAR_context_STAR_ = _STAR_context_STAR__orig_val__32855;
}});
/**
 * Perform a left-associative fold on the data structure.
 */
cats.core.foldl = (function cats$core$foldl(f,z,xs){
var ctx = cats.protocols._get_context.call(null,xs);
if(cats.context.context_QMARK_.call(null,ctx)){
} else {
cats.context.throw_illegal_argument.call(null,"The provided context does not implements Context.");
}

var _STAR_context_STAR__orig_val__32857 = cats.context._STAR_context_STAR_;
var _STAR_context_STAR__temp_val__32858 = ctx;
cats.context._STAR_context_STAR_ = _STAR_context_STAR__temp_val__32858;

try{return cats.protocols._foldl.call(null,ctx,f,z,xs);
}finally {cats.context._STAR_context_STAR_ = _STAR_context_STAR__orig_val__32857;
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
var G__32860 = arguments.length;
switch (G__32860) {
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
if(cljs.core.empty_QMARK_.call(null,xs)){
return cats.core.return$.call(null,z);
} else {
var vec__32861 = xs;
var seq__32862 = cljs.core.seq.call(null,vec__32861);
var first__32863 = cljs.core.first.call(null,seq__32862);
var seq__32862__$1 = cljs.core.next.call(null,seq__32862);
var h = first__32863;
var t = seq__32862__$1;
return cats.core.bind.call(null,f.call(null,z,h),((function (vec__32861,seq__32862,first__32863,seq__32862__$1,h,t){
return (function (z_SINGLEQUOTE_){
if(cljs.core.empty_QMARK_.call(null,t)){
return cats.core.return$.call(null,z_SINGLEQUOTE_);
} else {
return cats.core.foldm.call(null,f,z_SINGLEQUOTE_,t);
}
});})(vec__32861,seq__32862,first__32863,seq__32862__$1,h,t))
);
}
});

cats.core.foldm.cljs$core$IFn$_invoke$arity$4 = (function (ctx,f,z,xs){
if(cljs.core.empty_QMARK_.call(null,xs)){
return cats.core.return$.call(null,ctx,z);
} else {
return cats.core.foldm.call(null,f,z,xs);
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
var G__32866 = arguments.length;
switch (G__32866) {
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
return cats.protocols._traverse.call(null,cats.protocols._get_context.call(null,tv),f,tv);
});

cats.core.traverse.cljs$core$IFn$_invoke$arity$3 = (function (ctx,f,tv){
if(cats.context.context_QMARK_.call(null,ctx)){
} else {
cats.context.throw_illegal_argument.call(null,"The provided context does not implements Context.");
}

var _STAR_context_STAR__orig_val__32867 = cats.context._STAR_context_STAR_;
var _STAR_context_STAR__temp_val__32868 = ctx;
cats.context._STAR_context_STAR_ = _STAR_context_STAR__temp_val__32868;

try{return cats.protocols._traverse.call(null,cats.protocols._get_context.call(null,tv),f,tv);
}finally {cats.context._STAR_context_STAR_ = _STAR_context_STAR__orig_val__32867;
}});

cats.core.traverse.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=core.js.map
