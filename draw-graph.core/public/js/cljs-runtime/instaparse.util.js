goog.provide('instaparse.util');
goog.require('cljs.core');
instaparse.util.throw_runtime_exception = (function instaparse$util$throw_runtime_exception(var_args){
var args__4736__auto__ = [];
var len__4730__auto___47592 = arguments.length;
var i__4731__auto___47593 = (0);
while(true){
if((i__4731__auto___47593 < len__4730__auto___47592)){
args__4736__auto__.push((arguments[i__4731__auto___47593]));

var G__47594 = (i__4731__auto___47593 + (1));
i__4731__auto___47593 = G__47594;
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
instaparse.util.throw_runtime_exception.cljs$lang$applyTo = (function (seq47566){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47566));
});

instaparse.util.throw_illegal_argument_exception = (function instaparse$util$throw_illegal_argument_exception(var_args){
var args__4736__auto__ = [];
var len__4730__auto___47599 = arguments.length;
var i__4731__auto___47601 = (0);
while(true){
if((i__4731__auto___47601 < len__4730__auto___47599)){
args__4736__auto__.push((arguments[i__4731__auto___47601]));

var G__47602 = (i__4731__auto___47601 + (1));
i__4731__auto___47601 = G__47602;
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
instaparse.util.throw_illegal_argument_exception.cljs$lang$applyTo = (function (seq47574){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47574));
});

instaparse.util.regexp_flags = (function instaparse$util$regexp_flags(re){
var G__47584 = "";
var G__47584__$1 = (cljs.core.truth_(re.ignoreCase)?[G__47584,"i"].join(''):G__47584);
var G__47584__$2 = (cljs.core.truth_(re.multiline)?[G__47584__$1,"m"].join(''):G__47584__$1);
if(cljs.core.truth_(re.unicode)){
return [G__47584__$2,"u"].join('');
} else {
return G__47584__$2;
}
});

//# sourceMappingURL=instaparse.util.js.map
