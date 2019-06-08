// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('kvlt.platform.xhr');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async');
goog.require('taoensso.timbre');
goog.require('clojure.string');
goog.require('kvlt.util');
goog.require('promesa.core');
goog.require('goog.net.XmlHttp');
goog.require('goog.net.XmlHttpFactory');
goog.require('goog.net.EventType');
goog.require('goog.net.ErrorCode');
goog.require('goog.net.XhrIo');
kvlt.platform.xhr.tidy_http_error = (function kvlt$platform$xhr$tidy_http_error(p__35362){
var map__35363 = p__35362;
var map__35363__$1 = (((((!((map__35363 == null))))?(((((map__35363.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35363.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35363):map__35363);
var m = map__35363__$1;
var error_code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35363__$1,cljs.core.cst$kw$error_DASH_code);
var error_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35363__$1,cljs.core.cst$kw$error_DASH_text);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35363__$1,cljs.core.cst$kw$status);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(m,cljs.core.cst$kw$error_DASH_text,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$error_DASH_code], 0)),cljs.core.cst$kw$type,error_code,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$error,error_code,cljs.core.cst$kw$message,error_text], 0));
});
kvlt.platform.xhr.req__GT_url = (function kvlt$platform$xhr$req__GT_url(p__35365){
var map__35366 = p__35365;
var map__35366__$1 = (((((!((map__35366 == null))))?(((((map__35366.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35366.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35366):map__35366);
var scheme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35366__$1,cljs.core.cst$kw$scheme);
var server_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35366__$1,cljs.core.cst$kw$server_DASH_name);
var server_port = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35366__$1,cljs.core.cst$kw$server_DASH_port);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35366__$1,cljs.core.cst$kw$uri);
var query_string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35366__$1,cljs.core.cst$kw$query_DASH_string);
return cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__35369 = (new goog.Uri());
G__35369.setScheme(cljs.core.name((function (){var or__4131__auto__ = scheme;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.cst$kw$http;
}
})()));

G__35369.setDomain(server_name);

G__35369.setPort(server_port);

G__35369.setPath(uri);

G__35369.setQuery(query_string,true);

return G__35369;
})());
});
kvlt.platform.xhr.req__GT_xhr = (function kvlt$platform$xhr$req__GT_xhr(p__35370){
var map__35371 = p__35370;
var map__35371__$1 = (((((!((map__35371 == null))))?(((((map__35371.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35371.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35371):map__35371);
var request = map__35371__$1;
var credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35371__$1,cljs.core.cst$kw$kvlt$platform_SLASH_credentials_QMARK_);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35371__$1,cljs.core.cst$kw$timeout,(0));
var as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35371__$1,cljs.core.cst$kw$as);
var xhr = (function (){var G__35373 = (new goog.net.XhrIo());
G__35373.setTimeoutInterval(timeout);

G__35373.setWithCredentials(credentials_QMARK_);

return G__35373;
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(as,cljs.core.cst$kw$byte_DASH_array)){
xhr.setResponseType(goog.net.XhrIo.ResponseType.ARRAY_BUFFER);
} else {
}

return xhr;
});
kvlt.platform.xhr.code__GT_error = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[cljs.core.cst$kw$no_DASH_error,cljs.core.cst$kw$abort,cljs.core.cst$kw$access_DASH_denied,cljs.core.cst$kw$custom_DASH_error,cljs.core.cst$kw$http_DASH_error,cljs.core.cst$kw$ff_DASH_silent_DASH_error,cljs.core.cst$kw$file_DASH_not_DASH_found,cljs.core.cst$kw$offline,cljs.core.cst$kw$exception,cljs.core.cst$kw$timeout]);
kvlt.platform.xhr.headers__GT_map = (function kvlt$platform$xhr$headers__GT_map(headers){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__35375_SHARP_,p2__35374_SHARP_){
var vec__35376 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(p2__35374_SHARP_,/:\s+/);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35376,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35376,(1),null);
if(((clojure.string.blank_QMARK_(k)) || (clojure.string.blank_QMARK_(v)))){
return p1__35375_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__35375_SHARP_,clojure.string.lower_case(k),v);
}
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.cljs$core$IFn$_invoke$arity$2((function (){var or__4131__auto__ = headers;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})(),/(\n)|(\r)|(\r\n)|(\n\r)/));
});
kvlt.platform.xhr.response__GT_map = (function kvlt$platform$xhr$response__GT_map(resp,req){
var map__35379 = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$status,resp.getStatus(),cljs.core.cst$kw$success,resp.isSuccess(),cljs.core.cst$kw$body,resp.getResponse(),cljs.core.cst$kw$headers,kvlt.platform.xhr.headers__GT_map(resp.getAllResponseHeaders()),cljs.core.cst$kw$error_DASH_code,(function (){var G__35380 = resp.getLastErrorCode();
return (kvlt.platform.xhr.code__GT_error.cljs$core$IFn$_invoke$arity$1 ? kvlt.platform.xhr.code__GT_error.cljs$core$IFn$_invoke$arity$1(G__35380) : kvlt.platform.xhr.code__GT_error.call(null,G__35380));
})(),cljs.core.cst$kw$error_DASH_text,resp.getLastError()], null);
var map__35379__$1 = (((((!((map__35379 == null))))?(((((map__35379.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35379.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35379):map__35379);
var m = map__35379__$1;
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35379__$1,cljs.core.cst$kw$status);
var m__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4((function (){var G__35382 = m;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(status,(0))){
return kvlt.platform.xhr.tidy_http_error(G__35382);
} else {
return G__35382;
}
})(),cljs.core.assoc,cljs.core.cst$kw$kvlt_SLASH_request,req);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$debug,"kvlt.platform.xhr","/private/var/folders/t5/f3xh0rdx5ds8d5rn2wr52fh40000gn/T/form-init8747378136274606403.clj",66,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (map__35379,map__35379__$1,m,status,m__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Received response\n",kvlt.util.pprint_str(m__$1)], null);
});})(map__35379,map__35379__$1,m,status,m__$1))
,null)),null,1388755582);

return m__$1;
});
kvlt.platform.xhr.filter_headers = (function kvlt$platform$xhr$filter_headers(m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4523__auto__ = (function kvlt$platform$xhr$filter_headers_$_iter__35383(s__35384){
return (new cljs.core.LazySeq(null,(function (){
var s__35384__$1 = s__35384;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__35384__$1);
if(temp__5720__auto__){
var s__35384__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35384__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__35384__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__35386 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__35385 = (0);
while(true){
if((i__35385 < size__4522__auto__)){
var vec__35387 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__35385);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35387,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35387,(1),null);
if(cljs.core.not((function (){var fexpr__35390 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$accept_DASH_encoding,null,"accept-encoding",null], null), null);
return (fexpr__35390.cljs$core$IFn$_invoke$arity$1 ? fexpr__35390.cljs$core$IFn$_invoke$arity$1(k) : fexpr__35390.call(null,k));
})())){
cljs.core.chunk_append(b__35386,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__35395 = (i__35385 + (1));
i__35385 = G__35395;
continue;
} else {
var G__35396 = (i__35385 + (1));
i__35385 = G__35396;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35386),kvlt$platform$xhr$filter_headers_$_iter__35383(cljs.core.chunk_rest(s__35384__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35386),null);
}
} else {
var vec__35391 = cljs.core.first(s__35384__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35391,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35391,(1),null);
if(cljs.core.not((function (){var fexpr__35394 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$accept_DASH_encoding,null,"accept-encoding",null], null), null);
return (fexpr__35394.cljs$core$IFn$_invoke$arity$1 ? fexpr__35394.cljs$core$IFn$_invoke$arity$1(k) : fexpr__35394.call(null,k));
})())){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),kvlt$platform$xhr$filter_headers_$_iter__35383(cljs.core.rest(s__35384__$2)));
} else {
var G__35397 = cljs.core.rest(s__35384__$2);
s__35384__$1 = G__35397;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(m);
})());
});
kvlt.platform.xhr.request_BANG_ = (function kvlt$platform$xhr$request_BANG_(p__35399){
var map__35400 = p__35399;
var map__35400__$1 = (((((!((map__35400 == null))))?(((((map__35400.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35400.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35400):map__35400);
var req = map__35400__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35400__$1,cljs.core.cst$kw$request_DASH_method);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35400__$1,cljs.core.cst$kw$headers);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35400__$1,cljs.core.cst$kw$body);
var credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35400__$1,cljs.core.cst$kw$credentials_QMARK_);
var url = kvlt.platform.xhr.req__GT_url(req);
var method = cljs.core.name((function (){var or__4131__auto__ = request_method;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.cst$kw$get;
}
})());
var headers__$1 = cljs.core.clj__GT_js(kvlt.platform.xhr.filter_headers(headers));
var xhr = kvlt.platform.xhr.req__GT_xhr(req);
return promesa.core.promise(((function (url,method,headers__$1,xhr,map__35400,map__35400__$1,req,request_method,headers,body,credentials_QMARK_){
return (function (resolve,reject){
xhr.listen(goog.net.EventType.COMPLETE,((function (url,method,headers__$1,xhr,map__35400,map__35400__$1,req,request_method,headers,body,credentials_QMARK_){
return (function (p1__35398_SHARP_){
var G__35402 = kvlt.platform.xhr.response__GT_map(p1__35398_SHARP_.target,req);
return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(G__35402) : resolve.call(null,G__35402));
});})(url,method,headers__$1,xhr,map__35400,map__35400__$1,req,request_method,headers,body,credentials_QMARK_))
);

return xhr.send(url,method,body,headers__$1);
});})(url,method,headers__$1,xhr,map__35400,map__35400__$1,req,request_method,headers,body,credentials_QMARK_))
);
});
