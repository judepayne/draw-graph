goog.provide('markdown_to_hiccup.decode');
goog.require('cljs.core');
goog.require('goog.string');
markdown_to_hiccup.decode.decode_string = (function markdown_to_hiccup$decode$decode_string(var_args){
var G__40388 = arguments.length;
switch (G__40388) {
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

(markdown_to_hiccup.decode.decode_string.cljs$core$IFn$_invoke$arity$1 = (function (s){
return goog.string.unescapeEntities(s);
}));

(markdown_to_hiccup.decode.decode_string.cljs$core$IFn$_invoke$arity$2 = (function (s,transform_fn){
var decoded = markdown_to_hiccup.decode.decode_string.cljs$core$IFn$_invoke$arity$1(s);
return (transform_fn.cljs$core$IFn$_invoke$arity$1 ? transform_fn.cljs$core$IFn$_invoke$arity$1(decoded) : transform_fn.call(null,decoded));
}));

(markdown_to_hiccup.decode.decode_string.cljs$lang$maxFixedArity = 2);

markdown_to_hiccup.decode.encode_string = (function markdown_to_hiccup$decode$encode_string(s){
throw "No yet implemented.".Exception();
});
markdown_to_hiccup.decode.decode_iseq = (function markdown_to_hiccup$decode$decode_iseq(var_args){
var G__40391 = arguments.length;
switch (G__40391) {
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

(markdown_to_hiccup.decode.decode_iseq.cljs$core$IFn$_invoke$arity$1 = (function (iseq){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(markdown_to_hiccup.decode.decode,cljs.core.seq(iseq));
}));

(markdown_to_hiccup.decode.decode_iseq.cljs$core$IFn$_invoke$arity$2 = (function (iseq,transform_str_fn){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__40389_SHARP_){
return (markdown_to_hiccup.decode.decode.cljs$core$IFn$_invoke$arity$2 ? markdown_to_hiccup.decode.decode.cljs$core$IFn$_invoke$arity$2(p1__40389_SHARP_,transform_str_fn) : markdown_to_hiccup.decode.decode.call(null,p1__40389_SHARP_,transform_str_fn));
}),cljs.core.seq(iseq));
}));

(markdown_to_hiccup.decode.decode_iseq.cljs$lang$maxFixedArity = 2);

markdown_to_hiccup.decode.dispatch = (function markdown_to_hiccup$decode$dispatch(var_args){
var args__4795__auto__ = [];
var len__4789__auto___40408 = arguments.length;
var i__4790__auto___40409 = (0);
while(true){
if((i__4790__auto___40409 < len__4789__auto___40408)){
args__4795__auto__.push((arguments[i__4790__auto___40409]));

var G__40410 = (i__4790__auto___40409 + (1));
i__4790__auto___40409 = G__40410;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return markdown_to_hiccup.decode.dispatch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(markdown_to_hiccup.decode.dispatch.cljs$core$IFn$_invoke$arity$variadic = (function (x,rest){

if(cljs.core.map_QMARK_(x)){
var or__4185__auto__ = new cljs.core.Keyword(null,"decode-type","decode-type",-1943601402).cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword("markdown-to-hiccup.decode","map","markdown-to-hiccup.decode/map",1547761649);
}
} else {
if(cljs.core.vector_QMARK_(x)){
return new cljs.core.Keyword("markdown-to-hiccup.decode","vector","markdown-to-hiccup.decode/vector",1979814818);
} else {
if(typeof x === 'string'){
return new cljs.core.Keyword("markdown-to-hiccup.decode","string","markdown-to-hiccup.decode/string",-2048172350);
} else {
return new cljs.core.Keyword("markdown-to-hiccup.decode","pass","markdown-to-hiccup.decode/pass",1096198285);

}
}
}
}));

(markdown_to_hiccup.decode.dispatch.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(markdown_to_hiccup.decode.dispatch.cljs$lang$applyTo = (function (seq40395){
var G__40396 = cljs.core.first(seq40395);
var seq40395__$1 = cljs.core.next(seq40395);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40396,seq40395__$1);
}));

if((typeof markdown_to_hiccup !== 'undefined') && (typeof markdown_to_hiccup.decode !== 'undefined') && (typeof markdown_to_hiccup.decode.decode !== 'undefined')){
} else {
markdown_to_hiccup.decode.decode = (function (){var method_table__4672__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4673__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4674__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4675__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4676__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__40399 = cljs.core.get_global_hierarchy;
return (fexpr__40399.cljs$core$IFn$_invoke$arity$0 ? fexpr__40399.cljs$core$IFn$_invoke$arity$0() : fexpr__40399.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("markdown-to-hiccup.decode","decode"),markdown_to_hiccup.decode.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4676__auto__,method_table__4672__auto__,prefer_table__4673__auto__,method_cache__4674__auto__,cached_hierarchy__4675__auto__));
})();
}
markdown_to_hiccup.decode.decode.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("markdown-to-hiccup.decode","string","markdown-to-hiccup.decode/string",-2048172350),(function() {
var G__40415 = null;
var G__40415__1 = (function (s){
return markdown_to_hiccup.decode.decode_string.cljs$core$IFn$_invoke$arity$1(s);
});
var G__40415__2 = (function (s,transform){
return markdown_to_hiccup.decode.decode_string.cljs$core$IFn$_invoke$arity$2(s,transform);
});
G__40415 = function(s,transform){
switch(arguments.length){
case 1:
return G__40415__1.call(this,s);
case 2:
return G__40415__2.call(this,s,transform);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__40415.cljs$core$IFn$_invoke$arity$1 = G__40415__1;
G__40415.cljs$core$IFn$_invoke$arity$2 = G__40415__2;
return G__40415;
})()
);
markdown_to_hiccup.decode.decode.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("markdown-to-hiccup.decode","map","markdown-to-hiccup.decode/map",1547761649),(function() {
var G__40416 = null;
var G__40416__1 = (function (m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map(),markdown_to_hiccup.decode.decode_iseq.cljs$core$IFn$_invoke$arity$1(m));
});
var G__40416__2 = (function (m,transform){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map(),markdown_to_hiccup.decode.decode_iseq.cljs$core$IFn$_invoke$arity$2(m,transform));
});
G__40416 = function(m,transform){
switch(arguments.length){
case 1:
return G__40416__1.call(this,m);
case 2:
return G__40416__2.call(this,m,transform);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__40416.cljs$core$IFn$_invoke$arity$1 = G__40416__1;
G__40416.cljs$core$IFn$_invoke$arity$2 = G__40416__2;
return G__40416;
})()
);
markdown_to_hiccup.decode.decode.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("markdown-to-hiccup.decode","vector","markdown-to-hiccup.decode/vector",1979814818),(function() {
var G__40417 = null;
var G__40417__1 = (function (v){
return cljs.core.vec(markdown_to_hiccup.decode.decode_iseq.cljs$core$IFn$_invoke$arity$1(v));
});
var G__40417__2 = (function (v,transform){
return cljs.core.vec(markdown_to_hiccup.decode.decode_iseq.cljs$core$IFn$_invoke$arity$2(v,transform));
});
G__40417 = function(v,transform){
switch(arguments.length){
case 1:
return G__40417__1.call(this,v);
case 2:
return G__40417__2.call(this,v,transform);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__40417.cljs$core$IFn$_invoke$arity$1 = G__40417__1;
G__40417.cljs$core$IFn$_invoke$arity$2 = G__40417__2;
return G__40417;
})()
);
markdown_to_hiccup.decode.decode.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("markdown-to-hiccup.decode","pass","markdown-to-hiccup.decode/pass",1096198285),(function() {
var G__40418 = null;
var G__40418__1 = (function (x){
return cljs.core.identity(x);
});
var G__40418__2 = (function (x,f){
return cljs.core.identity(x);
});
G__40418 = function(x,f){
switch(arguments.length){
case 1:
return G__40418__1.call(this,x);
case 2:
return G__40418__2.call(this,x,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__40418.cljs$core$IFn$_invoke$arity$1 = G__40418__1;
G__40418.cljs$core$IFn$_invoke$arity$2 = G__40418__2;
return G__40418;
})()
);

//# sourceMappingURL=markdown_to_hiccup.decode.js.map
