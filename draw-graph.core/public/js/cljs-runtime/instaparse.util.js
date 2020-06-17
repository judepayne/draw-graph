goog.provide('instaparse.util');
goog.require('cljs.core');
instaparse.util.throw_runtime_exception = (function instaparse$util$throw_runtime_exception(var_args){
var args__4795__auto__ = [];
var len__4789__auto___52420 = arguments.length;
var i__4790__auto___52421 = (0);
while(true){
if((i__4790__auto___52421 < len__4789__auto___52420)){
args__4795__auto__.push((arguments[i__4790__auto___52421]));

var G__52422 = (i__4790__auto___52421 + (1));
i__4790__auto___52421 = G__52422;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic = (function (message){
throw cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,message);
}));

(instaparse.util.throw_runtime_exception.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(instaparse.util.throw_runtime_exception.cljs$lang$applyTo = (function (seq52414){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52414));
}));

instaparse.util.throw_illegal_argument_exception = (function instaparse$util$throw_illegal_argument_exception(var_args){
var args__4795__auto__ = [];
var len__4789__auto___52423 = arguments.length;
var i__4790__auto___52424 = (0);
while(true){
if((i__4790__auto___52424 < len__4789__auto___52423)){
args__4795__auto__.push((arguments[i__4790__auto___52424]));

var G__52425 = (i__4790__auto___52424 + (1));
i__4790__auto___52424 = G__52425;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic = (function (message){
throw cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,message);
}));

(instaparse.util.throw_illegal_argument_exception.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(instaparse.util.throw_illegal_argument_exception.cljs$lang$applyTo = (function (seq52415){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52415));
}));

instaparse.util.regexp_flags = (function instaparse$util$regexp_flags(re){
var G__52416 = "";
var G__52416__$1 = (cljs.core.truth_(re.ignoreCase)?[G__52416,"i"].join(''):G__52416);
var G__52416__$2 = (cljs.core.truth_(re.multiline)?[G__52416__$1,"m"].join(''):G__52416__$1);
if(cljs.core.truth_(re.unicode)){
return [G__52416__$2,"u"].join('');
} else {
return G__52416__$2;
}
});

//# sourceMappingURL=instaparse.util.js.map
