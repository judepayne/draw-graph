// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('kvlt.middleware');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.reader');
goog.require('kvlt.middleware.util');
goog.require('kvlt.util');
goog.require('kvlt.platform.util');
goog.require('clojure.set');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('cats.core');
kvlt.middleware.header = (function kvlt$middleware$header(var_args){
var G__41694 = arguments.length;
switch (G__41694) {
case 2:
return kvlt.middleware.header.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return kvlt.middleware.header.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

kvlt.middleware.header.cljs$core$IFn$_invoke$arity$2 = (function (p__41695,k){
var map__41696 = p__41695;
var map__41696__$1 = (((((!((map__41696 == null))))?(((((map__41696.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41696.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41696):map__41696);
var resp = map__41696__$1;
var hs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41696__$1,cljs.core.cst$kw$headers);
var and__4120__auto__ = hs;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.some(hs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.name(k)], null));
} else {
return and__4120__auto__;
}
});

kvlt.middleware.header.cljs$core$IFn$_invoke$arity$3 = (function (m,k,v){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(m,cljs.core.cst$kw$headers,(function (h){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(h,k,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.name(k)], 0)),cljs.core.name(k),v);
}));
});

kvlt.middleware.header.cljs$lang$maxFixedArity = 3;

kvlt.middleware.body__GT_string = (function kvlt$middleware$body__GT_string(p__41699){
var map__41700 = p__41699;
var map__41700__$1 = (((((!((map__41700 == null))))?(((((map__41700.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41700.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41700):map__41700);
var resp = map__41700__$1;
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41700__$1,cljs.core.cst$kw$body);
return kvlt.platform.util.byte_array__GT_str(body,kvlt.middleware.util.charset(kvlt.middleware.header.cljs$core$IFn$_invoke$arity$2(resp,cljs.core.cst$kw$content_DASH_type)));
});
if((typeof kvlt !== 'undefined') && (typeof kvlt.middleware !== 'undefined') && (typeof kvlt.middleware.from_content_type !== 'undefined')){
} else {
/**
 * Used by [[as]] to transform an incoming response.  Dispatches on
 *   `:content-type`' header, as a namespace-qualified
 *   keyword (e.g. `:application/edn`).  The input and output are the
 *   top-level response map, not only the response body.
 * 
 *   The default implementation (i.e. unrecognized content-type) returns
 *   the response map unmodified.
 */
kvlt.middleware.from_content_type = (function (){var method_table__4613__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__41702 = cljs.core.get_global_hierarchy;
return (fexpr__41702.cljs$core$IFn$_invoke$arity$0 ? fexpr__41702.cljs$core$IFn$_invoke$arity$0() : fexpr__41702.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("kvlt.middleware","from-content-type"),((function (method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__){
return (function (resp){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kvlt.middleware.util.__GT_content_type.cljs$core$IFn$_invoke$arity$1(kvlt.middleware.header.cljs$core$IFn$_invoke$arity$2(resp,cljs.core.cst$kw$content_DASH_type)));
});})(method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__))
,cljs.core.cst$kw$default,hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
kvlt.middleware.from_content_type.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (resp){
return resp;
}));
kvlt.middleware.from_content_type.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$application_SLASH_edn,(function (resp){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(resp,cljs.core.cst$kw$body,cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(kvlt.middleware.body__GT_string(resp)));
}));
kvlt.middleware.from_content_type.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$application_SLASH_json,(function (p__41703){
var map__41704 = p__41703;
var map__41704__$1 = (((((!((map__41704 == null))))?(((((map__41704.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41704.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41704):map__41704);
var resp = map__41704__$1;
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41704__$1,cljs.core.cst$kw$body);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(resp,cljs.core.cst$kw$body,kvlt.platform.util.parse_json(kvlt.middleware.body__GT_string(resp)));
}));
kvlt.middleware.hint__GT_body_type = (function kvlt$middleware$hint__GT_body_type(x){
if((((x instanceof cljs.core.Keyword)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("kvlt.body",cljs.core.namespace(x))))){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(x));
} else {
return null;
}
});
/**
 * Look for a body with a `:kvlt.body/`-prefixed metadata key, setting
 *   the request's `:type` and `:form-params` keys
 *   accordingly (e.g. `:body ^:kvlt/edn {:x 1}`)
 */
kvlt.middleware.body_type_hint = kvlt.middleware.util.__GT_mw.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$body_DASH_type_DASH_hint,cljs.core.with_meta((function (p__41706){
var map__41707 = p__41706;
var map__41707__$1 = (((((!((map__41707 == null))))?(((((map__41707.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41707.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41707):map__41707);
var req = map__41707__$1;
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41707__$1,cljs.core.cst$kw$body);
var temp__5718__auto__ = cljs.core.some(kvlt.middleware.hint__GT_body_type,cljs.core.keys(cljs.core.meta(body)));
if(cljs.core.truth_(temp__5718__auto__)){
var t = temp__5718__auto__;
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(req,cljs.core.cst$kw$type,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(t),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$form_DASH_params,body], 0)),cljs.core.cst$kw$body);
} else {
return req;
}
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$has,cljs.core.cst$kw$body], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
kvlt.util.doc_examples_BANG_(new cljs.core.Var(function(){return kvlt.middleware.body_type_hint;},cljs.core.cst$sym$kvlt$middleware_SLASH_body_DASH_type_DASH_hint,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$kvlt$middleware,cljs.core.cst$sym$body_DASH_type_DASH_hint,"resources/public/cljs-out/dev/kvlt/middleware.cljc",22,1,48,48,cljs.core.List.EMPTY,"Look for a body with a `:kvlt.body/`-prefixed metadata key, setting\n  the request's `:type` and `:form-params` keys\n  accordingly (e.g. `:body ^:kvlt/edn {:x 1}`)",(cljs.core.truth_(kvlt.middleware.body_type_hint)?kvlt.middleware.body_type_hint.cljs$lang$test:null)])),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$post,cljs.core.cst$kw$body,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$kvlt$body_SLASH_edn,true], null))], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$method,cljs.core.cst$kw$post,cljs.core.cst$kw$form_DASH_params,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null),cljs.core.cst$kw$type,cljs.core.cst$kw$edn], null)], null)));
/**
 * Turn request's `:content-type` (or `:type`), if any, and
 * `:character-encoding`, if any, into a "content-type" header & leave
 * top-level `:content-type` key in place. 
 */
kvlt.middleware.content_type = kvlt.middleware.util.__GT_mw.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$content_DASH_type,(function (p__41709){
var map__41710 = p__41709;
var map__41710__$1 = (((((!((map__41710 == null))))?(((((map__41710.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41710.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41710):map__41710);
var req = map__41710__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41710__$1,cljs.core.cst$kw$type);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41710__$1,cljs.core.cst$kw$body);
var character_encoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41710__$1,cljs.core.cst$kw$character_DASH_encoding);
var map__41712 = (function (){var G__41713 = req;
if(cljs.core.truth_(type)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41713,cljs.core.cst$kw$content_DASH_type,type);
} else {
return G__41713;
}
})();
var map__41712__$1 = (((((!((map__41712 == null))))?(((((map__41712.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41712.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41712):map__41712);
var req__$1 = map__41712__$1;
var content_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41712__$1,cljs.core.cst$kw$content_DASH_type);
var G__41715 = req__$1;
if(cljs.core.truth_(content_type)){
return kvlt.middleware.header.cljs$core$IFn$_invoke$arity$3(G__41715,cljs.core.cst$kw$content_DASH_type,kvlt.middleware.util.__GT_content_type.cljs$core$IFn$_invoke$arity$2(content_type,character_encoding));
} else {
return G__41715;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
kvlt.util.doc_examples_BANG_(new cljs.core.Var(function(){return kvlt.middleware.content_type;},cljs.core.cst$sym$kvlt$middleware_SLASH_content_DASH_type,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$kvlt$middleware,cljs.core.cst$sym$content_DASH_type,"resources/public/cljs-out/dev/kvlt/middleware.cljc",20,1,67,67,cljs.core.List.EMPTY,"Turn request's `:content-type` (or `:type`), if any, and\n   `:character-encoding`, if any, into a \"content-type\" header & leave\n   top-level `:content-type` key in place. ",(cljs.core.truth_(kvlt.middleware.content_type)?kvlt.middleware.content_type.cljs$lang$test:null)])),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$content_DASH_type,"text/html",cljs.core.cst$kw$character_DASH_encoding,"US-ASCII"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$headers,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$content_DASH_type,"text/html; charset=US-ASCII"], null),cljs.core.cst$kw$content_DASH_type,"text/html"], null)], null)));
/**
 * Turn request's `:accept` value, if any, into an "accept" header &
 *   remove the top-level key.
 */
kvlt.middleware.accept = kvlt.middleware.util.__GT_mw.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$accept,cljs.core.with_meta((function (p__41716){
var map__41717 = p__41716;
var map__41717__$1 = (((((!((map__41717 == null))))?(((((map__41717.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41717.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41717):map__41717);
var req = map__41717__$1;
var accept = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41717__$1,cljs.core.cst$kw$accept);
return kvlt.middleware.header.cljs$core$IFn$_invoke$arity$3(req,cljs.core.cst$kw$accept,kvlt.middleware.util.__GT_content_type.cljs$core$IFn$_invoke$arity$1(accept));
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$has,cljs.core.cst$kw$accept,cljs.core.cst$kw$removing,cljs.core.cst$kw$accept], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
kvlt.util.doc_examples_BANG_(new cljs.core.Var(function(){return kvlt.middleware.accept;},cljs.core.cst$sym$kvlt$middleware_SLASH_accept,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$kvlt$middleware,cljs.core.cst$sym$accept,"resources/public/cljs-out/dev/kvlt/middleware.cljc",14,1,86,86,cljs.core.List.EMPTY,"Turn request's `:accept` value, if any, into an \"accept\" header &\n  remove the top-level key.",(cljs.core.truth_(kvlt.middleware.accept)?kvlt.middleware.accept.cljs$lang$test:null)])),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$accept,cljs.core.cst$kw$edn], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$headers,new cljs.core.PersistentArrayMap(null, 1, ["accept","application/edn"], null)], null)], null)));
kvlt.middleware.as_key = (function kvlt$middleware$as_key(resp){
return cljs.core.cst$kw$as.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$kvlt_SLASH_request.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(resp)));
});
if((typeof kvlt !== 'undefined') && (typeof kvlt.middleware !== 'undefined') && (typeof kvlt.middleware.as_type !== 'undefined')){
} else {
kvlt.middleware.as_type = (function (){var method_table__4613__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__41719 = cljs.core.get_global_hierarchy;
return (fexpr__41719.cljs$core$IFn$_invoke$arity$0 ? fexpr__41719.cljs$core$IFn$_invoke$arity$0() : fexpr__41719.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("kvlt.middleware","as-type"),kvlt.middleware.as_key,cljs.core.cst$kw$default,hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
kvlt.middleware.as_type.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$string,(function (p__41720){
var map__41721 = p__41720;
var map__41721__$1 = (((((!((map__41721 == null))))?(((((map__41721.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41721.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41721):map__41721);
var resp = map__41721__$1;
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41721__$1,cljs.core.cst$kw$body);
return resp;
}));
kvlt.middleware.as_type.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$byte_DASH_array,(function (p__41723){
var map__41724 = p__41723;
var map__41724__$1 = (((((!((map__41724 == null))))?(((((map__41724.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41724.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41724):map__41724);
var resp = map__41724__$1;
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41724__$1,cljs.core.cst$kw$body);
if(kvlt.platform.util.byte_array_QMARK_(body)){
} else {
throw (new Error(["Assert failed: ","For platform-specific reasons, :as :byte-array is special-cased in\n  kvlt.platform.http/request","\n","(platform.util/byte-array? body)"].join('')));
}

return resp;
}));
kvlt.middleware.as_type.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$auto,(function (resp){
return (kvlt.middleware.from_content_type.cljs$core$IFn$_invoke$arity$1 ? kvlt.middleware.from_content_type.cljs$core$IFn$_invoke$arity$1(resp) : kvlt.middleware.from_content_type.call(null,resp));
}));
kvlt.middleware.as_type.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (p__41726){
var map__41727 = p__41726;
var map__41727__$1 = (((((!((map__41727 == null))))?(((((map__41727.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41727.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41727):map__41727);
var resp = map__41727__$1;
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41727__$1,cljs.core.cst$kw$headers);
var t = kvlt.middleware.header.cljs$core$IFn$_invoke$arity$2(resp,cljs.core.cst$kw$content_DASH_type);
var resp__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(resp,cljs.core.cst$kw$orig_DASH_content_DASH_type,t);
var G__41729 = kvlt.middleware.header.cljs$core$IFn$_invoke$arity$3(resp__$1,cljs.core.cst$kw$content_DASH_type,kvlt.middleware.util.__GT_content_type.cljs$core$IFn$_invoke$arity$1(kvlt.middleware.as_key(resp__$1)));
return (kvlt.middleware.from_content_type.cljs$core$IFn$_invoke$arity$1 ? kvlt.middleware.from_content_type.cljs$core$IFn$_invoke$arity$1(G__41729) : kvlt.middleware.from_content_type.call(null,G__41729));
}));
kvlt.middleware.parsing_error = (function kvlt$middleware$parsing_error(resp,e){
var error = kvlt.platform.util.exception__GT_map.cljs$core$IFn$_invoke$arity$variadic(e,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$middleware_DASH_error,cljs.core.cst$kw$type,cljs.core.cst$kw$middleware_DASH_error], null)], 0));
var G__41730 = resp;
if(cljs.core.not((function (){var G__41731 = cljs.core.cst$kw$error;
return (resp.cljs$core$IFn$_invoke$arity$1 ? resp.cljs$core$IFn$_invoke$arity$1(G__41731) : resp.call(null,G__41731));
})())){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__41730,error], 0));
} else {
return G__41730;
}
});
/**
 * Response body type conversion --- `:string` `:byte-array` `:auto` `:json` `:edn` etc..
 * 
 *   See [[from-content-type]] for custom conversions.
 */
kvlt.middleware.as = kvlt.middleware.util.__GT_mw.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$as,(function (p1__41732_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$as,cljs.core.cst$kw$string], null),p1__41732_SHARP_], 0));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (resp){
try{return (kvlt.middleware.as_type.cljs$core$IFn$_invoke$arity$1 ? kvlt.middleware.as_type.cljs$core$IFn$_invoke$arity$1(resp) : kvlt.middleware.as_type.call(null,resp));
}catch (e41733){if((e41733 instanceof Error)){
var e = e41733;
return kvlt.middleware.parsing_error(resp,e);
} else {
throw e41733;

}
}})], 0));
/**
 * Convert the `:accept-encoding` option (keyword/str, or collection of) to an
 *   acceptable `Accept-Encoding` header.
 * 
 *   This middleware is not likely to have any effect in a browser
 *   environment.
 */
kvlt.middleware.accept_encoding = kvlt.middleware.util.__GT_mw.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$accept_DASH_encoding,cljs.core.with_meta((function (p__41734){
var map__41735 = p__41734;
var map__41735__$1 = (((((!((map__41735 == null))))?(((((map__41735.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41735.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41735):map__41735);
var req = map__41735__$1;
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41735__$1,cljs.core.cst$kw$accept_DASH_encoding);
return kvlt.middleware.header.cljs$core$IFn$_invoke$arity$3(req,cljs.core.cst$kw$accept_DASH_encoding,((cljs.core.coll_QMARK_(v))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,v)):cljs.core.name(v)));
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$has,cljs.core.cst$kw$accept_DASH_encoding,cljs.core.cst$kw$removing,cljs.core.cst$kw$accept_DASH_encoding], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
kvlt.util.doc_examples_BANG_(new cljs.core.Var(function(){return kvlt.middleware.accept_encoding;},cljs.core.cst$sym$kvlt$middleware_SLASH_accept_DASH_encoding,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$kvlt$middleware,cljs.core.cst$sym$accept_DASH_encoding,"resources/public/cljs-out/dev/kvlt/middleware.cljc",23,1,137,137,cljs.core.List.EMPTY,"Convert the `:accept-encoding` option (keyword/str, or collection of) to an\n  acceptable `Accept-Encoding` header.\n\n  This middleware is not likely to have any effect in a browser\n  environment.",(cljs.core.truth_(kvlt.middleware.accept_encoding)?kvlt.middleware.accept_encoding.cljs$lang$test:null)])),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$accept_DASH_encoding,cljs.core.cst$kw$origami], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$headers,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$accept_DASH_encoding,"origami"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$accept_DASH_encoding,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,cljs.core.cst$kw$b], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$headers,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$accept_DASH_encoding,"a, b"], null)], null)], null)));
/**
 * Rename request's `:method` key to `:request-method`
 */
kvlt.middleware.method = kvlt.middleware.util.__GT_mw.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$method,cljs.core.with_meta((function (p__41737){
var map__41738 = p__41737;
var map__41738__$1 = (((((!((map__41738 == null))))?(((((map__41738.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41738.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41738):map__41738);
var req = map__41738__$1;
var m = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41738__$1,cljs.core.cst$kw$method);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(req,cljs.core.cst$kw$request_DASH_method,m);
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$has,cljs.core.cst$kw$method,cljs.core.cst$kw$removing,cljs.core.cst$kw$method], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
/**
 * Rename request's `:port` key to `:server-port`
 */
kvlt.middleware.port = kvlt.middleware.util.__GT_mw.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$port,cljs.core.with_meta((function (p__41740){
var map__41741 = p__41740;
var map__41741__$1 = (((((!((map__41741 == null))))?(((((map__41741.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41741.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41741):map__41741);
var req = map__41741__$1;
var port = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41741__$1,cljs.core.cst$kw$port);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(req,cljs.core.cst$kw$server_DASH_port,port);
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$has,cljs.core.cst$kw$port,cljs.core.cst$kw$removing,cljs.core.cst$kw$port], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
kvlt.util.doc_examples_BANG_(new cljs.core.Var(function(){return kvlt.middleware.method;},cljs.core.cst$sym$kvlt$middleware_SLASH_method,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$kvlt$middleware,cljs.core.cst$sym$method,"resources/public/cljs-out/dev/kvlt/middleware.cljc",14,1,158,158,cljs.core.List.EMPTY,"Rename request's `:method` key to `:request-method`",(cljs.core.truth_(kvlt.middleware.method)?kvlt.middleware.method.cljs$lang$test:null)])),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$method,cljs.core.cst$kw$get], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$request_DASH_method,cljs.core.cst$kw$get], null)], null)));
/**
 * Turn request's `:url` value, if any, into top-level `:scheme`,
 *   `:server-name`, `:server-port`, `:uri`, `:query-string`, and
 *   `:user-info` keys
 */
kvlt.middleware.url = kvlt.middleware.util.__GT_mw.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$url,cljs.core.with_meta((function (p__41743){
var map__41744 = p__41743;
var map__41744__$1 = (((((!((map__41744 == null))))?(((((map__41744.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41744.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41744):map__41744);
var req = map__41744__$1;
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41744__$1,cljs.core.cst$kw$url);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,kvlt.middleware.util.parse_url(url)], 0));
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$has,cljs.core.cst$kw$url,cljs.core.cst$kw$removing,cljs.core.cst$kw$url], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
kvlt.util.doc_examples_BANG_(new cljs.core.Var(function(){return kvlt.middleware.url;},cljs.core.cst$sym$kvlt$middleware_SLASH_url,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$kvlt$middleware,cljs.core.cst$sym$url,"resources/public/cljs-out/dev/kvlt/middleware.cljc",11,1,173,173,cljs.core.List.EMPTY,"Turn request's `:url` value, if any, into top-level `:scheme`,\n  `:server-name`, `:server-port`, `:uri`, `:query-string`, and\n  `:user-info` keys",(cljs.core.truth_(kvlt.middleware.url)?kvlt.middleware.url.cljs$lang$test:null)])),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$url,"ftp://localhost:9/x?x=1"], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$scheme,cljs.core.cst$kw$ftp,cljs.core.cst$kw$server_DASH_name,"localhost",cljs.core.cst$kw$server_DASH_port,(9),cljs.core.cst$kw$uri,"/x",cljs.core.cst$kw$user_DASH_info,null,cljs.core.cst$kw$query_DASH_string,"x=1"], null)], null)));
/**
 * Add `:content-type` key having value `:text/plain`, if no `:content-type` present.
 * 
 *   Assumes placement before [[content-type]].
 */
kvlt.middleware.default_content_type = kvlt.middleware.util.__GT_mw.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$default_DASH_content_DASH_type,(function (req){
if(cljs.core.truth_((function (){var and__4120__auto__ = (function (){var G__41747 = cljs.core.cst$kw$body;
return (req.cljs$core$IFn$_invoke$arity$1 ? req.cljs$core$IFn$_invoke$arity$1(G__41747) : req.call(null,G__41747));
})();
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not((function (){var or__4131__auto__ = (function (){var G__41749 = cljs.core.cst$kw$content_DASH_type;
return (req.cljs$core$IFn$_invoke$arity$1 ? req.cljs$core$IFn$_invoke$arity$1(G__41749) : req.call(null,G__41749));
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return kvlt.middleware.header.cljs$core$IFn$_invoke$arity$2(req,cljs.core.cst$kw$content_DASH_type);
}
})());
} else {
return and__4120__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(req,cljs.core.cst$kw$content_DASH_type,cljs.core.cst$kw$text_SLASH_plain);
} else {
return req;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
/**
 * Convert keys within request's `:headers` value to strings, and
 * response's `:headers` values to keywords. 
 */
kvlt.middleware.keyword_headers = kvlt.middleware.util.__GT_mw.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$keyword_DASH_headers,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$headers,clojure.walk.stringify_keys], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$headers,clojure.walk.keywordize_keys], null)], 0));
kvlt.middleware.lower_case = (function kvlt$middleware$lower_case(p1__41750_SHARP_){
var G__41751 = clojure.string.lower_case(cljs.core.name(p1__41750_SHARP_));
if((p1__41750_SHARP_ instanceof cljs.core.Keyword)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(G__41751);
} else {
return G__41751;
}
});
/**
 * Convert keys within request & response's `:headers` value to lower
 *   case.
 */
kvlt.middleware.lower_case_headers = kvlt.middleware.util.__GT_mw.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$lower_DASH_case_DASH_headers,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$headers,(function (p1__41752_SHARP_){
return kvlt.util.map_keys(kvlt.middleware.lower_case,p1__41752_SHARP_);
})], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$headers,(function (p1__41753_SHARP_){
return kvlt.util.map_keys(kvlt.middleware.lower_case,p1__41753_SHARP_);
})], null)], 0));
/**
 * Convert `:basic-auth` values (vector or map) into an
 *  `:authorization` header.
 */
kvlt.middleware.basic_auth = kvlt.middleware.util.__GT_mw.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$basic_DASH_auth,cljs.core.with_meta((function (p__41754){
var map__41755 = p__41754;
var map__41755__$1 = (((((!((map__41755 == null))))?(((((map__41755.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41755.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41755):map__41755);
var req = map__41755__$1;
var basic_auth = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41755__$1,cljs.core.cst$kw$basic_DASH_auth);
return kvlt.middleware.header.cljs$core$IFn$_invoke$arity$3(req,cljs.core.cst$kw$authorization,kvlt.middleware.util.basic_auth(basic_auth));
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$has,cljs.core.cst$kw$basic_DASH_auth,cljs.core.cst$kw$removing,cljs.core.cst$kw$basic_DASH_auth], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
kvlt.util.doc_examples_BANG_(new cljs.core.Var(function(){return kvlt.middleware.basic_auth;},cljs.core.cst$sym$kvlt$middleware_SLASH_basic_DASH_auth,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$kvlt$middleware,cljs.core.cst$sym$basic_DASH_auth,"resources/public/cljs-out/dev/kvlt/middleware.cljc",18,1,214,214,cljs.core.List.EMPTY,"Convert `:basic-auth` values (vector or map) into an\n `:authorization` header.",(cljs.core.truth_(kvlt.middleware.basic_auth)?kvlt.middleware.basic_auth.cljs$lang$test:null)])),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$basic_DASH_auth,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["user","pass"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$headers,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$authorization,"Basic ..."], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$basic_DASH_auth,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$username,"user",cljs.core.cst$kw$password,"pass"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$headers,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$authorization,"Basic ..."], null)], null)], null)));
/**
 * Convert `:oauth-token` value into an `:authorization` header
 */
kvlt.middleware.oauth_token = kvlt.middleware.util.__GT_mw.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$oauth_DASH_token,cljs.core.with_meta((function (p__41757){
var map__41758 = p__41757;
var map__41758__$1 = (((((!((map__41758 == null))))?(((((map__41758.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41758.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41758):map__41758);
var req = map__41758__$1;
var oauth_token = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41758__$1,cljs.core.cst$kw$oauth_DASH_token);
return kvlt.middleware.header.cljs$core$IFn$_invoke$arity$3(req,cljs.core.cst$kw$authorization,["Bearer ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(oauth_token)].join(''));
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$has,cljs.core.cst$kw$oauth_DASH_token,cljs.core.cst$kw$removing,cljs.core.cst$kw$oauth_DASH_token], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
kvlt.util.doc_examples_BANG_(new cljs.core.Var(function(){return kvlt.middleware.oauth_token;},cljs.core.cst$sym$kvlt$middleware_SLASH_oauth_DASH_token,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$kvlt$middleware,cljs.core.cst$sym$oauth_DASH_token,"resources/public/cljs-out/dev/kvlt/middleware.cljc",19,1,226,226,cljs.core.List.EMPTY,"Convert `:oauth-token` value into an `:authorization` header",(cljs.core.truth_(kvlt.middleware.oauth_token)?kvlt.middleware.oauth_token.cljs$lang$test:null)])),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$oauth_DASH_token,"xyz"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$headers,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$authorization,"Bearer xyz"], null)], null)], null)));
/**
 * Merge request map with `{:method :get}`.
 * 
 *   Assumes placement before [[method]].
 */
kvlt.middleware.default_method = kvlt.middleware.util.__GT_mw.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$default_DASH_method,(function (p1__41760_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$method,cljs.core.cst$kw$get], null),p1__41760_SHARP_], 0));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
kvlt.util.doc_examples_BANG_(new cljs.core.Var(function(){return kvlt.middleware.default_method;},cljs.core.cst$sym$kvlt$middleware_SLASH_default_DASH_method,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$kvlt$middleware,cljs.core.cst$sym$default_DASH_method,"resources/public/cljs-out/dev/kvlt/middleware.cljc",22,1,235,235,cljs.core.List.EMPTY,"Merge request map with `{:method :get}`.\n\n  Assumes placement before [[method]].",(cljs.core.truth_(kvlt.middleware.default_method)?kvlt.middleware.default_method.cljs$lang$test:null)])),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$method,cljs.core.cst$kw$get], null)], null)));
if((typeof kvlt !== 'undefined') && (typeof kvlt.middleware !== 'undefined') && (typeof kvlt.middleware.decompress_body !== 'undefined')){
} else {
/**
 * Dispatch on the response's `:content-encoding` header value.
 *   Clojure implementations exist for "gzip" and "deflate".
 */
kvlt.middleware.decompress_body = (function (){var method_table__4613__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__41761 = cljs.core.get_global_hierarchy;
return (fexpr__41761.cljs$core$IFn$_invoke$arity$0 ? fexpr__41761.cljs$core$IFn$_invoke$arity$0() : fexpr__41761.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("kvlt.middleware","decompress-body"),((function (method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__){
return (function (resp){
var and__4120__auto__ = cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(resp);
if(cljs.core.truth_(and__4120__auto__)){
return kvlt.middleware.header.cljs$core$IFn$_invoke$arity$2(resp,cljs.core.cst$kw$content_DASH_encoding);
} else {
return and__4120__auto__;
}
});})(method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__))
,cljs.core.cst$kw$default,hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
kvlt.middleware.lift_content_encoding = (function kvlt$middleware$lift_content_encoding(p__41762){
var map__41763 = p__41762;
var map__41763__$1 = (((((!((map__41763 == null))))?(((((map__41763.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41763.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41763):map__41763);
var resp = map__41763__$1;
var map__41764 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41763__$1,cljs.core.cst$kw$headers);
var map__41764__$1 = (((((!((map__41764 == null))))?(((((map__41764.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41764.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41764):map__41764);
var content_encoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41764__$1,"content-encoding");
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(resp,cljs.core.cst$kw$orig_DASH_content_DASH_encoding,content_encoding),cljs.core.cst$kw$headers,cljs.core.dissoc,"content-encoding");
});
kvlt.middleware.decompress_body.cljs$core$IMultiFn$_add_method$arity$3(null,"gzip",(function (p__41767){
var map__41768 = p__41767;
var map__41768__$1 = (((((!((map__41768 == null))))?(((((map__41768.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41768.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41768):map__41768);
var resp = map__41768__$1;
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41768__$1,cljs.core.cst$kw$body);
var body__$1 = kvlt.platform.util.gunzip(body);
return kvlt.middleware.lift_content_encoding(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(resp,cljs.core.cst$kw$body,body__$1));
}));
kvlt.middleware.decompress_body.cljs$core$IMultiFn$_add_method$arity$3(null,"deflate",(function (p__41770){
var map__41771 = p__41770;
var map__41771__$1 = (((((!((map__41771 == null))))?(((((map__41771.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41771.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41771):map__41771);
var resp = map__41771__$1;
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41771__$1,cljs.core.cst$kw$body);
var body__$1 = kvlt.platform.util.inflate(body);
return kvlt.middleware.lift_content_encoding(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(resp,cljs.core.cst$kw$body,body__$1));
}));
kvlt.middleware.decompress_body.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (resp){
return kvlt.middleware.lift_content_encoding(resp);
}));
/**
 * Response body decompression.  Defaults request's "Accept-Encoding" header.
 *   Can be disabled per-request via `:decompress-body? false'
 */
kvlt.middleware.decompress = kvlt.middleware.util.__GT_mw.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$decompress,cljs.core.with_meta((function (req){
var G__41773 = req;
if((((!((function (){var G__41775 = cljs.core.cst$kw$decompress_DASH_body_QMARK_;
return (req.cljs$core$IFn$_invoke$arity$1 ? req.cljs$core$IFn$_invoke$arity$1(G__41775) : req.call(null,G__41775));
})() === false))) && (cljs.core.not(kvlt.middleware.header.cljs$core$IFn$_invoke$arity$2(req,cljs.core.cst$kw$accept_DASH_encoding))))){
return kvlt.middleware.header.cljs$core$IFn$_invoke$arity$3(G__41773,cljs.core.cst$kw$accept_DASH_encoding,"gzip, deflate");
} else {
return G__41773;
}
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$removing,cljs.core.cst$kw$accept_DASH_encoding], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (resp){
return resp;
})], 0));
kvlt.middleware.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 14, [(205),null,(206),null,(300),null,(204),null,(307),null,(304),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
kvlt.middleware.status__GT_reason = cljs.core.PersistentHashMap.fromArrays([(410),(205),(416),(101),(206),(415),(300),(204),(405),(504),(505),(502),(307),(402),(407),(305),(304),(401),(412),(417),(500),(501),(303),(100),(413),(301),(408),(411),(201),(302),(202),(200),(503),(414),(404),(203),(409),(400),(403),(406)],[cljs.core.cst$kw$gone,cljs.core.cst$kw$reset_DASH_content,cljs.core.cst$kw$requested_DASH_range_DASH_not_DASH_satisfiable,cljs.core.cst$kw$switching_DASH_protocols,cljs.core.cst$kw$partial_DASH_content,cljs.core.cst$kw$unsupported_DASH_media_DASH_type,cljs.core.cst$kw$multiple_DASH_choices,cljs.core.cst$kw$no_DASH_content,cljs.core.cst$kw$method_DASH_not_DASH_allowed,cljs.core.cst$kw$gateway_DASH_timeout,cljs.core.cst$kw$http_DASH_version_DASH_not_DASH_supported,cljs.core.cst$kw$bad_DASH_gateway,cljs.core.cst$kw$temporary_DASH_redirect,cljs.core.cst$kw$payment_DASH_required,cljs.core.cst$kw$proxy_DASH_authentication_DASH_required,cljs.core.cst$kw$use_DASH_proxy,cljs.core.cst$kw$not_DASH_modified,cljs.core.cst$kw$unauthorized,cljs.core.cst$kw$precondition_DASH_failed,cljs.core.cst$kw$expectation_DASH_failed,cljs.core.cst$kw$internal_DASH_server_DASH_error,cljs.core.cst$kw$not_DASH_implemented,cljs.core.cst$kw$see_DASH_other,cljs.core.cst$kw$continue,cljs.core.cst$kw$request_DASH_entity_DASH_too_DASH_large,cljs.core.cst$kw$moved_DASH_permanently,cljs.core.cst$kw$request_DASH_timeout,cljs.core.cst$kw$length_DASH_required,cljs.core.cst$kw$created,cljs.core.cst$kw$found,cljs.core.cst$kw$accepted,cljs.core.cst$kw$ok,cljs.core.cst$kw$service_DASH_unavailable,cljs.core.cst$kw$request_DASH_uri_DASH_too_DASH_large,cljs.core.cst$kw$not_DASH_found,cljs.core.cst$kw$non_DASH_authoritative_DASH_information,cljs.core.cst$kw$conflict,cljs.core.cst$kw$bad_DASH_request,cljs.core.cst$kw$forbidden,cljs.core.cst$kw$not_DASH_acceptable]);
/**
 * Turn error responses into `ExceptionInfo` instances, with the full
 *   response map as the attached data.  Additionally, a `:reason`
 *   value (e.g. `:service-unavailable`) will be used to augment the
 *   `:status` key.
 * 
 *   For uniformity, `:type` is provided as an alias for `:reason`, e.g.
 */
kvlt.middleware.error = kvlt.middleware.util.__GT_mw.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p__41776){
var map__41777 = p__41776;
var map__41777__$1 = (((((!((map__41777 == null))))?(((((map__41777.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41777.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41777):map__41777);
var resp = map__41777__$1;
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41777__$1,cljs.core.cst$kw$message);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41777__$1,cljs.core.cst$kw$status);
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41777__$1,cljs.core.cst$kw$cause);
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41777__$1,cljs.core.cst$kw$error);
var reason = (kvlt.middleware.status__GT_reason.cljs$core$IFn$_invoke$arity$2 ? kvlt.middleware.status__GT_reason.cljs$core$IFn$_invoke$arity$2(status,error) : kvlt.middleware.status__GT_reason.call(null,status,error));
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.not(error);
if(and__4120__auto__){
return (kvlt.middleware.unexceptional_status_QMARK_.cljs$core$IFn$_invoke$arity$1 ? kvlt.middleware.unexceptional_status_QMARK_.cljs$core$IFn$_invoke$arity$1(status) : kvlt.middleware.unexceptional_status_QMARK_.call(null,status));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(resp,cljs.core.cst$kw$reason,reason);
} else {
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(message,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(resp,cljs.core.cst$kw$error,(function (){var or__4131__auto__ = error;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return reason;
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$type,reason,cljs.core.cst$kw$reason,reason], 0)),cause);
}
})], 0));
kvlt.util.doc_examples_BANG_(new cljs.core.Var(function(){return kvlt.middleware.error;},cljs.core.cst$sym$kvlt$middleware_SLASH_error,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$kvlt$middleware,cljs.core.cst$sym$error,"resources/public/cljs-out/dev/kvlt/middleware.cljc",13,1,325,325,cljs.core.List.EMPTY,"Turn error responses into `ExceptionInfo` instances, with the full\n  response map as the attached data.  Additionally, a `:reason`\n  value (e.g. `:service-unavailable`) will be used to augment the\n  `:status` key.\n\n  For uniformity, `:type` is provided as an alias for `:reason`, e.g.",(cljs.core.truth_(kvlt.middleware.error)?kvlt.middleware.error.cljs$lang$test:null)])),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$status,(500),cljs.core.cst$kw$reason,cljs.core.cst$kw$internal_DASH_server_DASH_error,cljs.core.cst$kw$type,cljs.core.cst$kw$internal_DASH_server_DASH_error,cljs.core.cst$kw$cause,cljs.core.cst$sym$error_QMARK_,cljs.core.cst$kw$headers,cljs.core.cst$sym$$$$], null)], null)));
