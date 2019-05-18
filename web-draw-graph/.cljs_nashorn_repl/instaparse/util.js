// Compiled by ClojureScript 1.10.439 {:target :nashorn}
goog.provide('instaparse.util');
goog.require('cljs.core');
instaparse.util.throw_runtime_exception = (function instaparse$util$throw_runtime_exception(var_args){
var args__4647__auto__ = [];
var len__4641__auto___29079 = arguments.length;
var i__4642__auto___29080 = (0);
while(true){
if((i__4642__auto___29080 < len__4641__auto___29079)){
args__4647__auto__.push((arguments[i__4642__auto___29080]));

var G__29081 = (i__4642__auto___29080 + (1));
i__4642__auto___29080 = G__29081;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

instaparse.util.throw_runtime_exception.cljs$core$IFn$_invoke$arity$variadic = (function (message){
throw cljs.core.apply.call(null,cljs.core.str,message);
});

instaparse.util.throw_runtime_exception.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
instaparse.util.throw_runtime_exception.cljs$lang$applyTo = (function (seq29078){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29078));
});

instaparse.util.throw_illegal_argument_exception = (function instaparse$util$throw_illegal_argument_exception(var_args){
var args__4647__auto__ = [];
var len__4641__auto___29083 = arguments.length;
var i__4642__auto___29084 = (0);
while(true){
if((i__4642__auto___29084 < len__4641__auto___29083)){
args__4647__auto__.push((arguments[i__4642__auto___29084]));

var G__29085 = (i__4642__auto___29084 + (1));
i__4642__auto___29084 = G__29085;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic = (function (message){
throw cljs.core.apply.call(null,cljs.core.str,message);
});

instaparse.util.throw_illegal_argument_exception.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
instaparse.util.throw_illegal_argument_exception.cljs$lang$applyTo = (function (seq29082){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29082));
});

instaparse.util.regexp_flags = (function instaparse$util$regexp_flags(re){
var G__29086 = "";
var G__29086__$1 = (cljs.core.truth_(re.ignoreCase)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29086),"i"].join(''):G__29086);
var G__29086__$2 = (cljs.core.truth_(re.multiline)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29086__$1),"m"].join(''):G__29086__$1);
if(cljs.core.truth_(re.unicode)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29086__$2),"u"].join('');
} else {
return G__29086__$2;
}
});

//# sourceMappingURL=util.js.map
