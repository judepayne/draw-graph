goog.provide('kvlt.platform.xhr');
goog.require('cljs.core');
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
kvlt.platform.xhr.tidy_http_error = (function kvlt$platform$xhr$tidy_http_error(p__46887){
var map__46889 = p__46887;
var map__46889__$1 = (((((!((map__46889 == null))))?(((((map__46889.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46889.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46889):map__46889);
var m = map__46889__$1;
var error_code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46889__$1,new cljs.core.Keyword(null,"error-code","error-code",180497232));
var error_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46889__$1,new cljs.core.Keyword(null,"error-text","error-text",2021893718));
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46889__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"error-text","error-text",2021893718),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"error-code","error-code",180497232)], 0)),new cljs.core.Keyword(null,"type","type",1174270348),error_code,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"error","error",-978969032),error_code,new cljs.core.Keyword(null,"message","message",-406056002),error_text], 0));
});
kvlt.platform.xhr.req__GT_url = (function kvlt$platform$xhr$req__GT_url(p__46897){
var map__46899 = p__46897;
var map__46899__$1 = (((((!((map__46899 == null))))?(((((map__46899.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46899.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46899):map__46899);
var scheme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46899__$1,new cljs.core.Keyword(null,"scheme","scheme",90199613));
var server_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46899__$1,new cljs.core.Keyword(null,"server-name","server-name",-1012104295));
var server_port = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46899__$1,new cljs.core.Keyword(null,"server-port","server-port",663745648));
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46899__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var query_string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46899__$1,new cljs.core.Keyword(null,"query-string","query-string",-1018845061));
return cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__46925 = (new goog.Uri());
G__46925.setScheme(cljs.core.name((function (){var or__4131__auto__ = scheme;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"http","http",382524695);
}
})()));

G__46925.setDomain(server_name);

G__46925.setPort(server_port);

G__46925.setPath(uri);

G__46925.setQuery(query_string,true);

return G__46925;
})());
});
kvlt.platform.xhr.req__GT_xhr = (function kvlt$platform$xhr$req__GT_xhr(p__46932){
var map__46934 = p__46932;
var map__46934__$1 = (((((!((map__46934 == null))))?(((((map__46934.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46934.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46934):map__46934);
var request = map__46934__$1;
var credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46934__$1,new cljs.core.Keyword("kvlt.platform","credentials?","kvlt.platform/credentials?",459671447));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__46934__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46934__$1,new cljs.core.Keyword(null,"as","as",1148689641));
var xhr = (function (){var G__46939 = (new goog.net.XhrIo());
G__46939.setTimeoutInterval(timeout);

G__46939.setWithCredentials(credentials_QMARK_);

return G__46939;
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(as,new cljs.core.Keyword(null,"byte-array","byte-array",369158537))){
xhr.setResponseType(goog.net.XhrIo.ResponseType.ARRAY_BUFFER);
} else {
}

return xhr;
});
kvlt.platform.xhr.code__GT_error = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
kvlt.platform.xhr.headers__GT_map = (function kvlt$platform$xhr$headers__GT_map(headers){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__46949_SHARP_,p2__46948_SHARP_){
var vec__46953 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(p2__46948_SHARP_,/:\s+/);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46953,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46953,(1),null);
if(((clojure.string.blank_QMARK_(k)) || (clojure.string.blank_QMARK_(v)))){
return p1__46949_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__46949_SHARP_,clojure.string.lower_case(k),v);
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
var map__46962 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"status","status",-1997798413),resp.getStatus(),new cljs.core.Keyword(null,"success","success",1890645906),resp.isSuccess(),new cljs.core.Keyword(null,"body","body",-2049205669),resp.getResponse(),new cljs.core.Keyword(null,"headers","headers",-835030129),kvlt.platform.xhr.headers__GT_map(resp.getAllResponseHeaders()),new cljs.core.Keyword(null,"error-code","error-code",180497232),(function (){var G__46967 = resp.getLastErrorCode();
return (kvlt.platform.xhr.code__GT_error.cljs$core$IFn$_invoke$arity$1 ? kvlt.platform.xhr.code__GT_error.cljs$core$IFn$_invoke$arity$1(G__46967) : kvlt.platform.xhr.code__GT_error.call(null,G__46967));
})(),new cljs.core.Keyword(null,"error-text","error-text",2021893718),resp.getLastError()], null);
var map__46962__$1 = (((((!((map__46962 == null))))?(((((map__46962.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46962.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46962):map__46962);
var m = map__46962__$1;
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46962__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var m__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4((function (){var G__46973 = m;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(status,(0))){
return kvlt.platform.xhr.tidy_http_error(G__46973);
} else {
return G__46973;
}
})(),cljs.core.assoc,new cljs.core.Keyword("kvlt","request","kvlt/request",1769844894),req);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"kvlt.platform.xhr",null,66,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (map__46962,map__46962__$1,m,status,m__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Received response\n",kvlt.util.pprint_str(m__$1)], null);
});})(map__46962,map__46962__$1,m,status,m__$1))
,null)),null,711427968);

return m__$1;
});
kvlt.platform.xhr.filter_headers = (function kvlt$platform$xhr$filter_headers(m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4523__auto__ = (function kvlt$platform$xhr$filter_headers_$_iter__46975(s__46976){
return (new cljs.core.LazySeq(null,(function (){
var s__46976__$1 = s__46976;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__46976__$1);
if(temp__5720__auto__){
var s__46976__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__46976__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__46976__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__46978 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__46977 = (0);
while(true){
if((i__46977 < size__4522__auto__)){
var vec__46987 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__46977);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46987,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46987,(1),null);
if(cljs.core.not((function (){var fexpr__46990 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"accept-encoding","accept-encoding",-317924396),null,"accept-encoding",null], null), null);
return (fexpr__46990.cljs$core$IFn$_invoke$arity$1 ? fexpr__46990.cljs$core$IFn$_invoke$arity$1(k) : fexpr__46990.call(null,k));
})())){
cljs.core.chunk_append(b__46978,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__47044 = (i__46977 + (1));
i__46977 = G__47044;
continue;
} else {
var G__47045 = (i__46977 + (1));
i__46977 = G__47045;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46978),kvlt$platform$xhr$filter_headers_$_iter__46975(cljs.core.chunk_rest(s__46976__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46978),null);
}
} else {
var vec__46991 = cljs.core.first(s__46976__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46991,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46991,(1),null);
if(cljs.core.not((function (){var fexpr__46994 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"accept-encoding","accept-encoding",-317924396),null,"accept-encoding",null], null), null);
return (fexpr__46994.cljs$core$IFn$_invoke$arity$1 ? fexpr__46994.cljs$core$IFn$_invoke$arity$1(k) : fexpr__46994.call(null,k));
})())){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),kvlt$platform$xhr$filter_headers_$_iter__46975(cljs.core.rest(s__46976__$2)));
} else {
var G__47047 = cljs.core.rest(s__46976__$2);
s__46976__$1 = G__47047;
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
kvlt.platform.xhr.request_BANG_ = (function kvlt$platform$xhr$request_BANG_(p__47003){
var map__47005 = p__47003;
var map__47005__$1 = (((((!((map__47005 == null))))?(((((map__47005.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47005.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47005):map__47005);
var req = map__47005__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47005__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47005__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47005__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47005__$1,new cljs.core.Keyword(null,"credentials?","credentials?",-371982519));
var url = kvlt.platform.xhr.req__GT_url(req);
var method = cljs.core.name((function (){var or__4131__auto__ = request_method;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var headers__$1 = cljs.core.clj__GT_js(kvlt.platform.xhr.filter_headers(headers));
var xhr = kvlt.platform.xhr.req__GT_xhr(req);
return promesa.core.promise(((function (url,method,headers__$1,xhr,map__47005,map__47005__$1,req,request_method,headers,body,credentials_QMARK_){
return (function (resolve,reject){
xhr.listen(goog.net.EventType.COMPLETE,((function (url,method,headers__$1,xhr,map__47005,map__47005__$1,req,request_method,headers,body,credentials_QMARK_){
return (function (p1__46997_SHARP_){
var G__47011 = kvlt.platform.xhr.response__GT_map(p1__46997_SHARP_.target,req);
return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(G__47011) : resolve.call(null,G__47011));
});})(url,method,headers__$1,xhr,map__47005,map__47005__$1,req,request_method,headers,body,credentials_QMARK_))
);

return xhr.send(url,method,body,headers__$1);
});})(url,method,headers__$1,xhr,map__47005,map__47005__$1,req,request_method,headers,body,credentials_QMARK_))
);
});

//# sourceMappingURL=kvlt.platform.xhr.js.map
