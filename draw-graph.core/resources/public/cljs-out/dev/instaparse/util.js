// Compiled by ClojureScript 1.10.520 {}
goog.provide('instaparse.util');
goog.require('cljs.core');
instaparse.util.throw_runtime_exception = (function instaparse$util$throw_runtime_exception(var_args){
var args__4736__auto__ = [];
var len__4730__auto___9445 = arguments.length;
var i__4731__auto___9446 = (0);
while(true){
if((i__4731__auto___9446 < len__4730__auto___9445)){
args__4736__auto__.push((arguments[i__4731__auto___9446]));

var G__9447 = (i__4731__auto___9446 + (1));
i__4731__auto___9446 = G__9447;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic = (function (message){
throw cljs.core.apply.call(null,cljs.core.str,message);
});

instaparse.util.throw_runtime_exception.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
instaparse.util.throw_runtime_exception.cljs$lang$applyTo = (function (seq9444){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9444));
});

instaparse.util.throw_illegal_argument_exception = (function instaparse$util$throw_illegal_argument_exception(var_args){
var args__4736__auto__ = [];
var len__4730__auto___9449 = arguments.length;
var i__4731__auto___9450 = (0);
while(true){
if((i__4731__auto___9450 < len__4730__auto___9449)){
args__4736__auto__.push((arguments[i__4731__auto___9450]));

var G__9451 = (i__4731__auto___9450 + (1));
i__4731__auto___9450 = G__9451;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic = (function (message){
throw cljs.core.apply.call(null,cljs.core.str,message);
});

instaparse.util.throw_illegal_argument_exception.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
instaparse.util.throw_illegal_argument_exception.cljs$lang$applyTo = (function (seq9448){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9448));
});

instaparse.util.regexp_flags = (function instaparse$util$regexp_flags(re){
var G__9452 = "";
var G__9452__$1 = (cljs.core.truth_(re.ignoreCase)?[G__9452,"i"].join(''):G__9452);
var G__9452__$2 = (cljs.core.truth_(re.multiline)?[G__9452__$1,"m"].join(''):G__9452__$1);
if(cljs.core.truth_(re.unicode)){
return [G__9452__$2,"u"].join('');
} else {
return G__9452__$2;
}
});

//# sourceMappingURL=util.js.map
