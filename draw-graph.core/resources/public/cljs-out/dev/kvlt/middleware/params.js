// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('kvlt.middleware.params');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('kvlt.middleware.util');
goog.require('kvlt.platform.util');
kvlt.middleware.params.query_string_PLUS_encoding = (function kvlt$middleware$params$query_string_PLUS_encoding(params,encoding){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__41827){
var vec__41828 = p__41827;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41828,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41828,(1),null);
if(cljs.core.sequential_QMARK_(v)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (vec__41828,k,v){
return (function (p1__41825_SHARP_,p2__41826_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(kvlt.middleware.util.url_encode.cljs$core$IFn$_invoke$arity$variadic(cljs.core.name(p1__41825_SHARP_),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([encoding], 0))),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(kvlt.middleware.util.url_encode.cljs$core$IFn$_invoke$arity$variadic(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__41826_SHARP_),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([encoding], 0)))].join('');
});})(vec__41828,k,v))
,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(k),v);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(kvlt.middleware.util.url_encode.cljs$core$IFn$_invoke$arity$variadic(cljs.core.name(k),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([encoding], 0))),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(kvlt.middleware.util.url_encode.cljs$core$IFn$_invoke$arity$variadic(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([encoding], 0)))].join('')], null);
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([params], 0)));
});
kvlt.middleware.params.query_string = (function kvlt$middleware$params$query_string(var_args){
var args__4736__auto__ = [];
var len__4730__auto___41837 = arguments.length;
var i__4731__auto___41838 = (0);
while(true){
if((i__4731__auto___41838 < len__4730__auto___41837)){
args__4736__auto__.push((arguments[i__4731__auto___41838]));

var G__41839 = (i__4731__auto___41838 + (1));
i__4731__auto___41838 = G__41839;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return kvlt.middleware.params.query_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

kvlt.middleware.params.query_string.cljs$core$IFn$_invoke$arity$variadic = (function (params,p__41833){
var vec__41834 = p__41833;
var content_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41834,(0),null);
var encoding = kvlt.middleware.util.charset(content_type);
return kvlt.middleware.params.query_string_PLUS_encoding(params,encoding);
});

kvlt.middleware.params.query_string.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
kvlt.middleware.params.query_string.cljs$lang$applyTo = (function (seq41831){
var G__41832 = cljs.core.first(seq41831);
var seq41831__$1 = cljs.core.next(seq41831);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41832,seq41831__$1);
});

/**
 * Rename request's `:query` key to `:query-params`
 */
kvlt.middleware.params.short_query = kvlt.middleware.util.__GT_mw.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$short_DASH_query,cljs.core.with_meta((function (p__41840){
var map__41841 = p__41840;
var map__41841__$1 = (((((!((map__41841 == null))))?(((((map__41841.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41841.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41841):map__41841);
var m = map__41841__$1;
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41841__$1,cljs.core.cst$kw$query);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.cst$kw$query_DASH_params,query);
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$has,cljs.core.cst$kw$query,cljs.core.cst$kw$removing,cljs.core.cst$kw$query], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
/**
 * Given a request having a `:query-params` map, append to the URL's
 *   query (`:query-string`) its URL-encoded string representation. 
 */
kvlt.middleware.params.query = kvlt.middleware.util.__GT_mw.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$query,(function (p__41843){
var map__41844 = p__41843;
var map__41844__$1 = (((((!((map__41844 == null))))?(((((map__41844.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41844.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41844):map__41844);
var req = map__41844__$1;
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41844__$1,cljs.core.cst$kw$query_DASH_params);
var content_type = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41844__$1,cljs.core.cst$kw$content_DASH_type,cljs.core.cst$kw$x_DASH_www_DASH_form_DASH_urlencoded);
var G__41846 = req;
if(cljs.core.truth_(query_params)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__41846,cljs.core.cst$kw$query_DASH_params),cljs.core.cst$kw$query_DASH_string,((function (G__41846,map__41844,map__41844__$1,req,query_params,content_type){
return (function (old,new$){
if((!(cljs.core.empty_QMARK_(old)))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(old),"&",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new$)].join('');
} else {
return new$;
}
});})(G__41846,map__41844,map__41844__$1,req,query_params,content_type))
,kvlt.middleware.params.query_string.cljs$core$IFn$_invoke$arity$variadic(query_params,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([kvlt.middleware.util.__GT_content_type.cljs$core$IFn$_invoke$arity$1(content_type)], 0)));
} else {
return G__41846;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
if((typeof kvlt !== 'undefined') && (typeof kvlt.middleware !== 'undefined') && (typeof kvlt.middleware.params !== 'undefined') && (typeof kvlt.middleware.params.coerce_form_params !== 'undefined')){
} else {
/**
 * Turn a `:form-params` map into a string request body, dispatching
 *   on the qualified content type, as a namespaced
 *   keyword (e.g. `:application/edn`).
 * 
 *   The baseline implementation (for
 *   `:application/x-www-form-urlencoded`) looks at the request's
 *   `:form-param-encoding` to determine the character set of the output
 *   string, on platforms where this is supported.
 */
kvlt.middleware.params.coerce_form_params = (function (){var method_table__4613__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__41847 = cljs.core.get_global_hierarchy;
return (fexpr__41847.cljs$core$IFn$_invoke$arity$0 ? fexpr__41847.cljs$core$IFn$_invoke$arity$0() : fexpr__41847.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("kvlt.middleware.params","coerce-form-params"),((function (method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__){
return (function (p__41848){
var map__41849 = p__41848;
var map__41849__$1 = (((((!((map__41849 == null))))?(((((map__41849.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41849.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41849):map__41849);
var content_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41849__$1,cljs.core.cst$kw$content_DASH_type);
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kvlt.middleware.util.__GT_content_type.cljs$core$IFn$_invoke$arity$1(content_type));
});})(method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__))
,cljs.core.cst$kw$default,hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
kvlt.middleware.params.coerce_form_params.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$application_SLASH_x_DASH_www_DASH_form_DASH_urlencoded,(function (p__41851){
var map__41852 = p__41851;
var map__41852__$1 = (((((!((map__41852 == null))))?(((((map__41852.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41852.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41852):map__41852);
var content_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41852__$1,cljs.core.cst$kw$content_DASH_type);
var form_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41852__$1,cljs.core.cst$kw$form_DASH_params);
var form_param_encoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41852__$1,cljs.core.cst$kw$form_DASH_param_DASH_encoding);
if(cljs.core.truth_(form_param_encoding)){
return kvlt.middleware.params.query_string_PLUS_encoding(form_params,form_param_encoding);
} else {
return kvlt.middleware.params.query_string.cljs$core$IFn$_invoke$arity$variadic(form_params,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([kvlt.middleware.util.__GT_content_type.cljs$core$IFn$_invoke$arity$1(content_type)], 0));
}
}));
kvlt.middleware.params.coerce_form_params.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$application_SLASH_edn,(function (p__41854){
var map__41855 = p__41854;
var map__41855__$1 = (((((!((map__41855 == null))))?(((((map__41855.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41855.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41855):map__41855);
var form_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41855__$1,cljs.core.cst$kw$form_DASH_params);
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form_params], 0));
}));
kvlt.middleware.params.coerce_form_params.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$application_SLASH_json,(function (p__41857){
var map__41858 = p__41857;
var map__41858__$1 = (((((!((map__41858 == null))))?(((((map__41858.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41858.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41858):map__41858);
var form_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41858__$1,cljs.core.cst$kw$form_DASH_params);
return kvlt.platform.util.encode_json(form_params);
}));
/**
 * Rename request's `:form` key to `:form-params`
 */
kvlt.middleware.params.short_form = kvlt.middleware.util.__GT_mw.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$short_DASH_form,cljs.core.with_meta((function (p__41860){
var map__41861 = p__41860;
var map__41861__$1 = (((((!((map__41861 == null))))?(((((map__41861.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41861.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41861):map__41861);
var m = map__41861__$1;
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41861__$1,cljs.core.cst$kw$form);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.cst$kw$form_DASH_params,form);
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$has,cljs.core.cst$kw$form,cljs.core.cst$kw$removing,cljs.core.cst$kw$form], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
/**
 * Given a request having a `:form-params` map and a method of `POST`,
 *   `PUT` or `PATCH`, use [[coerce-form-params]] to generate a request
 *   body.  If no content type is supplied, a default of
 *   `application/x-www-form-urlencoded` is associated with the request,
 *   and passed to [[coerce-form-params]].
 * 
 *   Assumes placement after [[kvlt.middleware/method]]
 */
kvlt.middleware.params.form = kvlt.middleware.util.__GT_mw.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$form,(function (p__41863){
var map__41864 = p__41863;
var map__41864__$1 = (((((!((map__41864 == null))))?(((((map__41864.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41864.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41864):map__41864);
var req = map__41864__$1;
var form_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41864__$1,cljs.core.cst$kw$form_DASH_params);
var content_type = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41864__$1,cljs.core.cst$kw$content_DASH_type,cljs.core.cst$kw$x_DASH_www_DASH_form_DASH_urlencoded);
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41864__$1,cljs.core.cst$kw$request_DASH_method);
if(cljs.core.truth_((function (){var and__4120__auto__ = form_params;
if(cljs.core.truth_(and__4120__auto__)){
var fexpr__41866 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$patch,null,cljs.core.cst$kw$post,null,cljs.core.cst$kw$put,null], null), null);
return (fexpr__41866.cljs$core$IFn$_invoke$arity$1 ? fexpr__41866.cljs$core$IFn$_invoke$arity$1(request_method) : fexpr__41866.call(null,request_method));
} else {
return and__4120__auto__;
}
})())){
var content_type__$1 = kvlt.middleware.util.__GT_content_type.cljs$core$IFn$_invoke$arity$1(content_type);
var req__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(req,cljs.core.cst$kw$content_DASH_type,content_type__$1);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(req__$1,cljs.core.cst$kw$body,(kvlt.middleware.params.coerce_form_params.cljs$core$IFn$_invoke$arity$1 ? kvlt.middleware.params.coerce_form_params.cljs$core$IFn$_invoke$arity$1(req__$1) : kvlt.middleware.params.coerce_form_params.call(null,req__$1)));
} else {
return req;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
