// Compiled by ClojureScript 1.10.520 {}
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
kvlt.platform.xhr.tidy_http_error = (function kvlt$platform$xhr$tidy_http_error(p__31632){
var map__31633 = p__31632;
var map__31633__$1 = (((((!((map__31633 == null))))?(((((map__31633.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31633.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31633):map__31633);
var m = map__31633__$1;
var error_code = cljs.core.get.call(null,map__31633__$1,new cljs.core.Keyword(null,"error-code","error-code",180497232));
var error_text = cljs.core.get.call(null,map__31633__$1,new cljs.core.Keyword(null,"error-text","error-text",2021893718));
var status = cljs.core.get.call(null,map__31633__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
return cljs.core.assoc.call(null,cljs.core.dissoc.call(null,m,new cljs.core.Keyword(null,"error-text","error-text",2021893718),new cljs.core.Keyword(null,"error-code","error-code",180497232)),new cljs.core.Keyword(null,"type","type",1174270348),error_code,new cljs.core.Keyword(null,"error","error",-978969032),error_code,new cljs.core.Keyword(null,"message","message",-406056002),error_text);
});
kvlt.platform.xhr.req__GT_url = (function kvlt$platform$xhr$req__GT_url(p__31635){
var map__31636 = p__31635;
var map__31636__$1 = (((((!((map__31636 == null))))?(((((map__31636.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31636.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31636):map__31636);
var scheme = cljs.core.get.call(null,map__31636__$1,new cljs.core.Keyword(null,"scheme","scheme",90199613));
var server_name = cljs.core.get.call(null,map__31636__$1,new cljs.core.Keyword(null,"server-name","server-name",-1012104295));
var server_port = cljs.core.get.call(null,map__31636__$1,new cljs.core.Keyword(null,"server-port","server-port",663745648));
var uri = cljs.core.get.call(null,map__31636__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var query_string = cljs.core.get.call(null,map__31636__$1,new cljs.core.Keyword(null,"query-string","query-string",-1018845061));
return cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__31639 = (new goog.Uri());
G__31639.setScheme(cljs.core.name.call(null,(function (){var or__4131__auto__ = scheme;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"http","http",382524695);
}
})()));

G__31639.setDomain(server_name);

G__31639.setPort(server_port);

G__31639.setPath(uri);

G__31639.setQuery(query_string,true);

return G__31639;
})());
});
kvlt.platform.xhr.req__GT_xhr = (function kvlt$platform$xhr$req__GT_xhr(p__31640){
var map__31641 = p__31640;
var map__31641__$1 = (((((!((map__31641 == null))))?(((((map__31641.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31641.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31641):map__31641);
var request = map__31641__$1;
var credentials_QMARK_ = cljs.core.get.call(null,map__31641__$1,new cljs.core.Keyword("kvlt.platform","credentials?","kvlt.platform/credentials?",459671447));
var timeout = cljs.core.get.call(null,map__31641__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var as = cljs.core.get.call(null,map__31641__$1,new cljs.core.Keyword(null,"as","as",1148689641));
var xhr = (function (){var G__31643 = (new goog.net.XhrIo());
G__31643.setTimeoutInterval(timeout);

G__31643.setWithCredentials(credentials_QMARK_);

return G__31643;
})();
if(cljs.core._EQ_.call(null,as,new cljs.core.Keyword(null,"byte-array","byte-array",369158537))){
xhr.setResponseType(goog.net.XhrIo.ResponseType.ARRAY_BUFFER);
} else {
}

return xhr;
});
kvlt.platform.xhr.code__GT_error = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
kvlt.platform.xhr.headers__GT_map = (function kvlt$platform$xhr$headers__GT_map(headers){
return cljs.core.reduce.call(null,(function (p1__31645_SHARP_,p2__31644_SHARP_){
var vec__31646 = clojure.string.split.call(null,p2__31644_SHARP_,/:\s+/);
var k = cljs.core.nth.call(null,vec__31646,(0),null);
var v = cljs.core.nth.call(null,vec__31646,(1),null);
if(((clojure.string.blank_QMARK_.call(null,k)) || (clojure.string.blank_QMARK_.call(null,v)))){
return p1__31645_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__31645_SHARP_,clojure.string.lower_case.call(null,k),v);
}
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,(function (){var or__4131__auto__ = headers;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})(),/(\n)|(\r)|(\r\n)|(\n\r)/));
});
kvlt.platform.xhr.response__GT_map = (function kvlt$platform$xhr$response__GT_map(resp,req){
var map__31649 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"status","status",-1997798413),resp.getStatus(),new cljs.core.Keyword(null,"success","success",1890645906),resp.isSuccess(),new cljs.core.Keyword(null,"body","body",-2049205669),resp.getResponse(),new cljs.core.Keyword(null,"headers","headers",-835030129),kvlt.platform.xhr.headers__GT_map.call(null,resp.getAllResponseHeaders()),new cljs.core.Keyword(null,"error-code","error-code",180497232),kvlt.platform.xhr.code__GT_error.call(null,resp.getLastErrorCode()),new cljs.core.Keyword(null,"error-text","error-text",2021893718),resp.getLastError()], null);
var map__31649__$1 = (((((!((map__31649 == null))))?(((((map__31649.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31649.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31649):map__31649);
var m = map__31649__$1;
var status = cljs.core.get.call(null,map__31649__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var m__$1 = cljs.core.vary_meta.call(null,(function (){var G__31651 = m;
if(cljs.core._EQ_.call(null,status,(0))){
return kvlt.platform.xhr.tidy_http_error.call(null,G__31651);
} else {
return G__31651;
}
})(),cljs.core.assoc,new cljs.core.Keyword("kvlt","request","kvlt/request",1769844894),req);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"kvlt.platform.xhr","/private/var/folders/t5/f3xh0rdx5ds8d5rn2wr52fh40000gn/T/form-init4657202228440285352.clj",66,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (map__31649,map__31649__$1,m,status,m__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Received response\n",kvlt.util.pprint_str.call(null,m__$1)], null);
});})(map__31649,map__31649__$1,m,status,m__$1))
,null)),null,-452311055);

return m__$1;
});
kvlt.platform.xhr.filter_headers = (function kvlt$platform$xhr$filter_headers(m){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4523__auto__ = (function kvlt$platform$xhr$filter_headers_$_iter__31652(s__31653){
return (new cljs.core.LazySeq(null,(function (){
var s__31653__$1 = s__31653;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__31653__$1);
if(temp__5720__auto__){
var s__31653__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31653__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__31653__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__31655 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__31654 = (0);
while(true){
if((i__31654 < size__4522__auto__)){
var vec__31656 = cljs.core._nth.call(null,c__4521__auto__,i__31654);
var k = cljs.core.nth.call(null,vec__31656,(0),null);
var v = cljs.core.nth.call(null,vec__31656,(1),null);
if(cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"accept-encoding","accept-encoding",-317924396),null,"accept-encoding",null], null), null).call(null,k))){
cljs.core.chunk_append.call(null,b__31655,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__31662 = (i__31654 + (1));
i__31654 = G__31662;
continue;
} else {
var G__31663 = (i__31654 + (1));
i__31654 = G__31663;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31655),kvlt$platform$xhr$filter_headers_$_iter__31652.call(null,cljs.core.chunk_rest.call(null,s__31653__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31655),null);
}
} else {
var vec__31659 = cljs.core.first.call(null,s__31653__$2);
var k = cljs.core.nth.call(null,vec__31659,(0),null);
var v = cljs.core.nth.call(null,vec__31659,(1),null);
if(cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"accept-encoding","accept-encoding",-317924396),null,"accept-encoding",null], null), null).call(null,k))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),kvlt$platform$xhr$filter_headers_$_iter__31652.call(null,cljs.core.rest.call(null,s__31653__$2)));
} else {
var G__31664 = cljs.core.rest.call(null,s__31653__$2);
s__31653__$1 = G__31664;
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
return iter__4523__auto__.call(null,m);
})());
});
kvlt.platform.xhr.request_BANG_ = (function kvlt$platform$xhr$request_BANG_(p__31666){
var map__31667 = p__31666;
var map__31667__$1 = (((((!((map__31667 == null))))?(((((map__31667.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31667.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31667):map__31667);
var req = map__31667__$1;
var request_method = cljs.core.get.call(null,map__31667__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__31667__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.call(null,map__31667__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var credentials_QMARK_ = cljs.core.get.call(null,map__31667__$1,new cljs.core.Keyword(null,"credentials?","credentials?",-371982519));
var url = kvlt.platform.xhr.req__GT_url.call(null,req);
var method = cljs.core.name.call(null,(function (){var or__4131__auto__ = request_method;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var headers__$1 = cljs.core.clj__GT_js.call(null,kvlt.platform.xhr.filter_headers.call(null,headers));
var xhr = kvlt.platform.xhr.req__GT_xhr.call(null,req);
return promesa.core.promise.call(null,((function (url,method,headers__$1,xhr,map__31667,map__31667__$1,req,request_method,headers,body,credentials_QMARK_){
return (function (resolve,reject){
xhr.listen(goog.net.EventType.COMPLETE,((function (url,method,headers__$1,xhr,map__31667,map__31667__$1,req,request_method,headers,body,credentials_QMARK_){
return (function (p1__31665_SHARP_){
return resolve.call(null,kvlt.platform.xhr.response__GT_map.call(null,p1__31665_SHARP_.target,req));
});})(url,method,headers__$1,xhr,map__31667,map__31667__$1,req,request_method,headers,body,credentials_QMARK_))
);

return xhr.send(url,method,body,headers__$1);
});})(url,method,headers__$1,xhr,map__31667,map__31667__$1,req,request_method,headers,body,credentials_QMARK_))
);
});

//# sourceMappingURL=xhr.js.map
