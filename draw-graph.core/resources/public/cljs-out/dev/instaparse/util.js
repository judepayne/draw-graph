// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('instaparse.util');
goog.require('cljs.core');
goog.require('cljs.core.constants');
instaparse.util.throw_runtime_exception = (function instaparse$util$throw_runtime_exception(var_args){
var args__4736__auto__ = [];
var len__4730__auto___11351 = arguments.length;
var i__4731__auto___11352 = (0);
while(true){
if((i__4731__auto___11352 < len__4730__auto___11351)){
args__4736__auto__.push((arguments[i__4731__auto___11352]));

var G__11353 = (i__4731__auto___11352 + (1));
i__4731__auto___11352 = G__11353;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic = (function (message){
throw cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,message);
});

instaparse.util.throw_runtime_exception.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
instaparse.util.throw_runtime_exception.cljs$lang$applyTo = (function (seq11350){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq11350));
});

instaparse.util.throw_illegal_argument_exception = (function instaparse$util$throw_illegal_argument_exception(var_args){
var args__4736__auto__ = [];
var len__4730__auto___11355 = arguments.length;
var i__4731__auto___11356 = (0);
while(true){
if((i__4731__auto___11356 < len__4730__auto___11355)){
args__4736__auto__.push((arguments[i__4731__auto___11356]));

var G__11357 = (i__4731__auto___11356 + (1));
i__4731__auto___11356 = G__11357;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic = (function (message){
throw cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,message);
});

instaparse.util.throw_illegal_argument_exception.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
instaparse.util.throw_illegal_argument_exception.cljs$lang$applyTo = (function (seq11354){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq11354));
});

instaparse.util.regexp_flags = (function instaparse$util$regexp_flags(re){
var G__11358 = "";
var G__11358__$1 = (cljs.core.truth_(re.ignoreCase)?[G__11358,"i"].join(''):G__11358);
var G__11358__$2 = (cljs.core.truth_(re.multiline)?[G__11358__$1,"m"].join(''):G__11358__$1);
if(cljs.core.truth_(re.unicode)){
return [G__11358__$2,"u"].join('');
} else {
return G__11358__$2;
}
});
