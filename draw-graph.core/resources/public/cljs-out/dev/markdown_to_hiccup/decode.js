// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('markdown_to_hiccup.decode');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.string');
markdown_to_hiccup.decode.decode_string = (function markdown_to_hiccup$decode$decode_string(var_args){
var G__16115 = arguments.length;
switch (G__16115) {
case 1:
return markdown_to_hiccup.decode.decode_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return markdown_to_hiccup.decode.decode_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

markdown_to_hiccup.decode.decode_string.cljs$core$IFn$_invoke$arity$1 = (function (s){
return goog.string.unescapeEntities(s);
});

markdown_to_hiccup.decode.decode_string.cljs$core$IFn$_invoke$arity$2 = (function (s,transform_fn){
var decoded = markdown_to_hiccup.decode.decode_string.cljs$core$IFn$_invoke$arity$1(s);
return (transform_fn.cljs$core$IFn$_invoke$arity$1 ? transform_fn.cljs$core$IFn$_invoke$arity$1(decoded) : transform_fn.call(null,decoded));
});

markdown_to_hiccup.decode.decode_string.cljs$lang$maxFixedArity = 2;

markdown_to_hiccup.decode.encode_string = (function markdown_to_hiccup$decode$encode_string(s){
throw "No yet implemented.".Exception();
});
markdown_to_hiccup.decode.decode_iseq = (function markdown_to_hiccup$decode$decode_iseq(var_args){
var G__16119 = arguments.length;
switch (G__16119) {
case 1:
return markdown_to_hiccup.decode.decode_iseq.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return markdown_to_hiccup.decode.decode_iseq.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

markdown_to_hiccup.decode.decode_iseq.cljs$core$IFn$_invoke$arity$1 = (function (iseq){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(markdown_to_hiccup.decode.decode,cljs.core.seq(iseq));
});

markdown_to_hiccup.decode.decode_iseq.cljs$core$IFn$_invoke$arity$2 = (function (iseq,transform_str_fn){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16117_SHARP_){
return (markdown_to_hiccup.decode.decode.cljs$core$IFn$_invoke$arity$2 ? markdown_to_hiccup.decode.decode.cljs$core$IFn$_invoke$arity$2(p1__16117_SHARP_,transform_str_fn) : markdown_to_hiccup.decode.decode.call(null,p1__16117_SHARP_,transform_str_fn));
}),cljs.core.seq(iseq));
});

markdown_to_hiccup.decode.decode_iseq.cljs$lang$maxFixedArity = 2;

markdown_to_hiccup.decode.dispatch = (function markdown_to_hiccup$decode$dispatch(var_args){
var args__4736__auto__ = [];
var len__4730__auto___16123 = arguments.length;
var i__4731__auto___16124 = (0);
while(true){
if((i__4731__auto___16124 < len__4730__auto___16123)){
args__4736__auto__.push((arguments[i__4731__auto___16124]));

var G__16125 = (i__4731__auto___16124 + (1));
i__4731__auto___16124 = G__16125;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return markdown_to_hiccup.decode.dispatch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

markdown_to_hiccup.decode.dispatch.cljs$core$IFn$_invoke$arity$variadic = (function (x,rest){

if(cljs.core.map_QMARK_(x)){
var or__4131__auto__ = cljs.core.cst$kw$decode_DASH_type.cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.cst$kw$markdown_DASH_to_DASH_hiccup$decode_SLASH_map;
}
} else {
if(cljs.core.vector_QMARK_(x)){
return cljs.core.cst$kw$markdown_DASH_to_DASH_hiccup$decode_SLASH_vector;
} else {
if(typeof x === 'string'){
return cljs.core.cst$kw$markdown_DASH_to_DASH_hiccup$decode_SLASH_string;
} else {
return cljs.core.cst$kw$markdown_DASH_to_DASH_hiccup$decode_SLASH_pass;

}
}
}
});

markdown_to_hiccup.decode.dispatch.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
markdown_to_hiccup.decode.dispatch.cljs$lang$applyTo = (function (seq16121){
var G__16122 = cljs.core.first(seq16121);
var seq16121__$1 = cljs.core.next(seq16121);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16122,seq16121__$1);
});

if((typeof markdown_to_hiccup !== 'undefined') && (typeof markdown_to_hiccup.decode !== 'undefined') && (typeof markdown_to_hiccup.decode.decode !== 'undefined')){
} else {
markdown_to_hiccup.decode.decode = (function (){var method_table__4613__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__16126 = cljs.core.get_global_hierarchy;
return (fexpr__16126.cljs$core$IFn$_invoke$arity$0 ? fexpr__16126.cljs$core$IFn$_invoke$arity$0() : fexpr__16126.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("markdown-to-hiccup.decode","decode"),markdown_to_hiccup.decode.dispatch,cljs.core.cst$kw$default,hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
markdown_to_hiccup.decode.decode.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$markdown_DASH_to_DASH_hiccup$decode_SLASH_string,(function() {
var G__16127 = null;
var G__16127__1 = (function (s){
return markdown_to_hiccup.decode.decode_string.cljs$core$IFn$_invoke$arity$1(s);
});
var G__16127__2 = (function (s,transform){
return markdown_to_hiccup.decode.decode_string.cljs$core$IFn$_invoke$arity$2(s,transform);
});
G__16127 = function(s,transform){
switch(arguments.length){
case 1:
return G__16127__1.call(this,s);
case 2:
return G__16127__2.call(this,s,transform);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__16127.cljs$core$IFn$_invoke$arity$1 = G__16127__1;
G__16127.cljs$core$IFn$_invoke$arity$2 = G__16127__2;
return G__16127;
})()
);
markdown_to_hiccup.decode.decode.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$markdown_DASH_to_DASH_hiccup$decode_SLASH_map,(function() {
var G__16128 = null;
var G__16128__1 = (function (m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map(),markdown_to_hiccup.decode.decode_iseq.cljs$core$IFn$_invoke$arity$1(m));
});
var G__16128__2 = (function (m,transform){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map(),markdown_to_hiccup.decode.decode_iseq.cljs$core$IFn$_invoke$arity$2(m,transform));
});
G__16128 = function(m,transform){
switch(arguments.length){
case 1:
return G__16128__1.call(this,m);
case 2:
return G__16128__2.call(this,m,transform);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__16128.cljs$core$IFn$_invoke$arity$1 = G__16128__1;
G__16128.cljs$core$IFn$_invoke$arity$2 = G__16128__2;
return G__16128;
})()
);
markdown_to_hiccup.decode.decode.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$markdown_DASH_to_DASH_hiccup$decode_SLASH_vector,(function() {
var G__16129 = null;
var G__16129__1 = (function (v){
return cljs.core.vec(markdown_to_hiccup.decode.decode_iseq.cljs$core$IFn$_invoke$arity$1(v));
});
var G__16129__2 = (function (v,transform){
return cljs.core.vec(markdown_to_hiccup.decode.decode_iseq.cljs$core$IFn$_invoke$arity$2(v,transform));
});
G__16129 = function(v,transform){
switch(arguments.length){
case 1:
return G__16129__1.call(this,v);
case 2:
return G__16129__2.call(this,v,transform);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__16129.cljs$core$IFn$_invoke$arity$1 = G__16129__1;
G__16129.cljs$core$IFn$_invoke$arity$2 = G__16129__2;
return G__16129;
})()
);
markdown_to_hiccup.decode.decode.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$markdown_DASH_to_DASH_hiccup$decode_SLASH_pass,(function() {
var G__16130 = null;
var G__16130__1 = (function (x){
return cljs.core.identity(x);
});
var G__16130__2 = (function (x,f){
return cljs.core.identity(x);
});
G__16130 = function(x,f){
switch(arguments.length){
case 1:
return G__16130__1.call(this,x);
case 2:
return G__16130__2.call(this,x,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__16130.cljs$core$IFn$_invoke$arity$1 = G__16130__1;
G__16130.cljs$core$IFn$_invoke$arity$2 = G__16130__2;
return G__16130;
})()
);