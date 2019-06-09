// Compiled by ClojureScript 1.10.520 {}
goog.provide('kvlt.middleware.params');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('kvlt.middleware.util');
goog.require('kvlt.platform.util');
kvlt.middleware.params.query_string_PLUS_encoding = (function kvlt$middleware$params$query_string_PLUS_encoding(params,encoding){
return clojure.string.join.call(null,"&",cljs.core.mapcat.call(null,(function (p__38043){
var vec__38044 = p__38043;
var k = cljs.core.nth.call(null,vec__38044,(0),null);
var v = cljs.core.nth.call(null,vec__38044,(1),null);
if(cljs.core.sequential_QMARK_.call(null,v)){
return cljs.core.map.call(null,((function (vec__38044,k,v){
return (function (p1__38041_SHARP_,p2__38042_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(kvlt.middleware.util.url_encode.call(null,cljs.core.name.call(null,p1__38041_SHARP_),encoding)),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(kvlt.middleware.util.url_encode.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__38042_SHARP_),encoding))].join('');
});})(vec__38044,k,v))
,cljs.core.repeat.call(null,k),v);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(kvlt.middleware.util.url_encode.call(null,cljs.core.name.call(null,k),encoding)),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(kvlt.middleware.util.url_encode.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),encoding))].join('')], null);
}
}),params));
});
kvlt.middleware.params.query_string = (function kvlt$middleware$params$query_string(var_args){
var args__4736__auto__ = [];
var len__4730__auto___38053 = arguments.length;
var i__4731__auto___38054 = (0);
while(true){
if((i__4731__auto___38054 < len__4730__auto___38053)){
args__4736__auto__.push((arguments[i__4731__auto___38054]));

var G__38055 = (i__4731__auto___38054 + (1));
i__4731__auto___38054 = G__38055;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return kvlt.middleware.params.query_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

kvlt.middleware.params.query_string.cljs$core$IFn$_invoke$arity$variadic = (function (params,p__38049){
var vec__38050 = p__38049;
var content_type = cljs.core.nth.call(null,vec__38050,(0),null);
var encoding = kvlt.middleware.util.charset.call(null,content_type);
return kvlt.middleware.params.query_string_PLUS_encoding.call(null,params,encoding);
});

kvlt.middleware.params.query_string.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
kvlt.middleware.params.query_string.cljs$lang$applyTo = (function (seq38047){
var G__38048 = cljs.core.first.call(null,seq38047);
var seq38047__$1 = cljs.core.next.call(null,seq38047);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38048,seq38047__$1);
});

/**
 * Rename request's `:query` key to `:query-params`
 */
kvlt.middleware.params.short_query = kvlt.middleware.util.__GT_mw.call(null,new cljs.core.Keyword(null,"short-query","short-query",1146323267),cljs.core.with_meta((function (p__38056){
var map__38057 = p__38056;
var map__38057__$1 = (((((!((map__38057 == null))))?(((((map__38057.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38057.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38057):map__38057);
var m = map__38057__$1;
var query = cljs.core.get.call(null,map__38057__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"query-params","query-params",900640534),query);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"has","has",1466247447),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"removing","removing",1104822312),new cljs.core.Keyword(null,"query","query",-1288509510)], null)),null);
/**
 * Given a request having a `:query-params` map, append to the URL's
 *   query (`:query-string`) its URL-encoded string representation. 
 */
kvlt.middleware.params.query = kvlt.middleware.util.__GT_mw.call(null,new cljs.core.Keyword(null,"query","query",-1288509510),(function (p__38059){
var map__38060 = p__38059;
var map__38060__$1 = (((((!((map__38060 == null))))?(((((map__38060.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38060.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38060):map__38060);
var req = map__38060__$1;
var query_params = cljs.core.get.call(null,map__38060__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var content_type = cljs.core.get.call(null,map__38060__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.Keyword(null,"x-www-form-urlencoded","x-www-form-urlencoded",-297860611));
var G__38062 = req;
if(cljs.core.truth_(query_params)){
return cljs.core.update.call(null,cljs.core.dissoc.call(null,G__38062,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),((function (G__38062,map__38060,map__38060__$1,req,query_params,content_type){
return (function (old,new$){
if((!(cljs.core.empty_QMARK_.call(null,old)))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(old),"&",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new$)].join('');
} else {
return new$;
}
});})(G__38062,map__38060,map__38060__$1,req,query_params,content_type))
,kvlt.middleware.params.query_string.call(null,query_params,kvlt.middleware.util.__GT_content_type.call(null,content_type)));
} else {
return G__38062;
}
}),null);
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
kvlt.middleware.params.coerce_form_params = (function (){var method_table__4613__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"kvlt.middleware.params","coerce-form-params"),((function (method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__){
return (function (p__38063){
var map__38064 = p__38063;
var map__38064__$1 = (((((!((map__38064 == null))))?(((((map__38064.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38064.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38064):map__38064);
var content_type = cljs.core.get.call(null,map__38064__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
return cljs.core.keyword.call(null,kvlt.middleware.util.__GT_content_type.call(null,content_type));
});})(method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
cljs.core._add_method.call(null,kvlt.middleware.params.coerce_form_params,new cljs.core.Keyword("application","x-www-form-urlencoded","application/x-www-form-urlencoded",-1692717907),(function (p__38066){
var map__38067 = p__38066;
var map__38067__$1 = (((((!((map__38067 == null))))?(((((map__38067.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38067.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38067):map__38067);
var content_type = cljs.core.get.call(null,map__38067__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var form_params = cljs.core.get.call(null,map__38067__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));
var form_param_encoding = cljs.core.get.call(null,map__38067__$1,new cljs.core.Keyword(null,"form-param-encoding","form-param-encoding",1350836033));
if(cljs.core.truth_(form_param_encoding)){
return kvlt.middleware.params.query_string_PLUS_encoding.call(null,form_params,form_param_encoding);
} else {
return kvlt.middleware.params.query_string.call(null,form_params,kvlt.middleware.util.__GT_content_type.call(null,content_type));
}
}));
cljs.core._add_method.call(null,kvlt.middleware.params.coerce_form_params,new cljs.core.Keyword("application","edn","application/edn",-63927515),(function (p__38069){
var map__38070 = p__38069;
var map__38070__$1 = (((((!((map__38070 == null))))?(((((map__38070.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38070.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38070):map__38070);
var form_params = cljs.core.get.call(null,map__38070__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));
return cljs.core.pr_str.call(null,form_params);
}));
cljs.core._add_method.call(null,kvlt.middleware.params.coerce_form_params,new cljs.core.Keyword("application","json","application/json",1747896298),(function (p__38072){
var map__38073 = p__38072;
var map__38073__$1 = (((((!((map__38073 == null))))?(((((map__38073.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38073.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38073):map__38073);
var form_params = cljs.core.get.call(null,map__38073__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));
return kvlt.platform.util.encode_json.call(null,form_params);
}));
/**
 * Rename request's `:form` key to `:form-params`
 */
kvlt.middleware.params.short_form = kvlt.middleware.util.__GT_mw.call(null,new cljs.core.Keyword(null,"short-form","short-form",-316565438),cljs.core.with_meta((function (p__38075){
var map__38076 = p__38075;
var map__38076__$1 = (((((!((map__38076 == null))))?(((((map__38076.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38076.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38076):map__38076);
var m = map__38076__$1;
var form = cljs.core.get.call(null,map__38076__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"form-params","form-params",1884296467),form);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"has","has",1466247447),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"removing","removing",1104822312),new cljs.core.Keyword(null,"form","form",-1624062471)], null)),null);
/**
 * Given a request having a `:form-params` map and a method of `POST`,
 *   `PUT` or `PATCH`, use [[coerce-form-params]] to generate a request
 *   body.  If no content type is supplied, a default of
 *   `application/x-www-form-urlencoded` is associated with the request,
 *   and passed to [[coerce-form-params]].
 * 
 *   Assumes placement after [[kvlt.middleware/method]]
 */
kvlt.middleware.params.form = kvlt.middleware.util.__GT_mw.call(null,new cljs.core.Keyword(null,"form","form",-1624062471),(function (p__38078){
var map__38079 = p__38078;
var map__38079__$1 = (((((!((map__38079 == null))))?(((((map__38079.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38079.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38079):map__38079);
var req = map__38079__$1;
var form_params = cljs.core.get.call(null,map__38079__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));
var content_type = cljs.core.get.call(null,map__38079__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.Keyword(null,"x-www-form-urlencoded","x-www-form-urlencoded",-297860611));
var request_method = cljs.core.get.call(null,map__38079__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core.truth_((function (){var and__4120__auto__ = form_params;
if(cljs.core.truth_(and__4120__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__4120__auto__;
}
})())){
var content_type__$1 = kvlt.middleware.util.__GT_content_type.call(null,content_type);
var req__$1 = cljs.core.assoc.call(null,req,new cljs.core.Keyword(null,"content-type","content-type",-508222634),content_type__$1);
return cljs.core.assoc.call(null,req__$1,new cljs.core.Keyword(null,"body","body",-2049205669),kvlt.middleware.params.coerce_form_params.call(null,req__$1));
} else {
return req;
}
}),null);

//# sourceMappingURL=params.js.map
