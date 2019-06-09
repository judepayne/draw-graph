// Compiled by ClojureScript 1.10.520 {}
goog.provide('kvlt.platform.http');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('taoensso.timbre');
goog.require('clojure.string');
goog.require('kvlt.util');
goog.require('promesa.core');
goog.require('kvlt.platform.xhr');
goog.require('kvlt.middleware.util');
kvlt.platform.http.__GT_response = (function kvlt$platform$http$__GT_response(req,m){
return cljs.core.vary_meta.call(null,m,cljs.core.assoc,new cljs.core.Keyword("kvlt","request","kvlt/request",1769844894),req);
});
kvlt.platform.http.error__GT_map = (function kvlt$platform$http$error__GT_map(e){
var code = (function (){var or__4131__auto__ = cljs.core.keyword.call(null,e.code);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"unknown","unknown",-935977881);
}
})();
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),code,new cljs.core.Keyword(null,"error","error",-978969032),code,new cljs.core.Keyword(null,"message","message",-406056002),e.message,new cljs.core.Keyword(null,"status","status",-1997798413),(0)], null);
});
kvlt.platform.http.compose_url = (function kvlt$platform$http$compose_url(p__37834){
var map__37835 = p__37834;
var map__37835__$1 = (((((!((map__37835 == null))))?(((((map__37835.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37835.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37835):map__37835);
var req = map__37835__$1;
var query_string = cljs.core.get.call(null,map__37835__$1,new cljs.core.Keyword(null,"query-string","query-string",-1018845061));
var server_port = cljs.core.get.call(null,map__37835__$1,new cljs.core.Keyword(null,"server-port","server-port",663745648));
return [cljs.core.name.call(null,req.call(null,new cljs.core.Keyword(null,"scheme","scheme",90199613))),"://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(req.call(null,new cljs.core.Keyword(null,"server-name","server-name",-1012104295))),(cljs.core.truth_(server_port)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(server_port)].join(''):null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(req.call(null,new cljs.core.Keyword(null,"uri","uri",-774711847))),(cljs.core.truth_(query_string)?["?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_string)].join(''):null)].join('');
});
kvlt.platform.http.req__GT_node = (function kvlt$platform$http$req__GT_node(p__37837){
var map__37838 = p__37837;
var map__37838__$1 = (((((!((map__37838 == null))))?(((((map__37838.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37838.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37838):map__37838);
var req = map__37838__$1;
var body = cljs.core.get.call(null,map__37838__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var timeout = cljs.core.get.call(null,map__37838__$1,new cljs.core.Keyword("kvlt.platform","timeout","kvlt.platform/timeout",-642501720));
var insecure_QMARK_ = cljs.core.get.call(null,map__37838__$1,new cljs.core.Keyword("kvlt.platform","insecure?","kvlt.platform/insecure?",-167892337));
var G__37840 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"uri","uri",-774711847),kvlt.platform.http.compose_url.call(null,req),new cljs.core.Keyword(null,"method","method",55703592),clojure.string.upper_case.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(req))),new cljs.core.Keyword(null,"headers","headers",-835030129),req.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129)),new cljs.core.Keyword(null,"encoding","encoding",1728578272),null,new cljs.core.Keyword(null,"gzip","gzip",1373113296),true], null);
var G__37840__$1 = (cljs.core.truth_(body)?cljs.core.assoc.call(null,G__37840,new cljs.core.Keyword(null,"body","body",-2049205669),body):G__37840);
var G__37840__$2 = (cljs.core.truth_(timeout)?cljs.core.assoc.call(null,G__37840__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout):G__37840__$1);
if(cljs.core.truth_(insecure_QMARK_)){
return cljs.core.assoc.call(null,G__37840__$2,new cljs.core.Keyword(null,"rejectUnauthorized","rejectUnauthorized",-358838576),false);
} else {
return G__37840__$2;
}
});
kvlt.platform.http.maybe_encode = (function kvlt$platform$http$maybe_encode(buffer,as,headers){
if(cljs.core._EQ_.call(null,as,new cljs.core.Keyword(null,"byte-array","byte-array",369158537))){
return buffer;
} else {
var cs = kvlt.middleware.util.charset.call(null,new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(headers));
return buffer.toString(cs);
}
});
if(cljs.core._EQ_.call(null,cljs.core._STAR_target_STAR_,"nodejs")){
var request_BANG__37842 = require("request");
kvlt.platform.http.request_node_BANG_ = ((function (request_BANG__37842){
return (function kvlt$platform$http$request_node_BANG_(req){
return promesa.core.promise.call(null,((function (request_BANG__37842){
return (function (resolve,_){
var respond = cljs.core.comp.call(null,resolve,((function (request_BANG__37842){
return (function (p1__37841_SHARP_){
return kvlt.platform.http.__GT_response.call(null,req,p1__37841_SHARP_);
});})(request_BANG__37842))
);
return request_BANG__37842.call(null,cljs.core.clj__GT_js.call(null,kvlt.platform.http.req__GT_node.call(null,req)),((function (respond,request_BANG__37842){
return (function (error,node_resp,buffer){
if(cljs.core.truth_(error)){
return respond.call(null,kvlt.platform.http.error__GT_map.call(null,error));
} else {
var headers = cljs.core.js__GT_clj.call(null,node_resp.headers,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var resp = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"headers","headers",-835030129),headers,new cljs.core.Keyword(null,"status","status",-1997798413),node_resp.statusCode,new cljs.core.Keyword(null,"body","body",-2049205669),kvlt.platform.http.maybe_encode.call(null,buffer,req.call(null,new cljs.core.Keyword(null,"as","as",1148689641)),headers)], null);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"kvlt.platform.http","/private/var/folders/t5/f3xh0rdx5ds8d5rn2wr52fh40000gn/T/form-init4657202228440285352.clj",61,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (headers,resp,respond,request_BANG__37842){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Received response\n",kvlt.util.pprint_str.call(null,resp)], null);
});})(headers,resp,respond,request_BANG__37842))
,null)),null,1515755297);

return respond.call(null,resp);
}
});})(respond,request_BANG__37842))
);
});})(request_BANG__37842))
);
});})(request_BANG__37842))
;
} else {
}
kvlt.platform.http.request_BANG_ = (function kvlt$platform$http$request_BANG_(req){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"kvlt.platform.http","/private/var/folders/t5/f3xh0rdx5ds8d5rn2wr52fh40000gn/T/form-init4657202228440285352.clj",65,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Issuing request\n",kvlt.util.pprint_str.call(null,req)], null);
}),null)),null,1145415632);

if(cljs.core._EQ_.call(null,cljs.core._STAR_target_STAR_,"nodejs")){
return kvlt.platform.http.request_node_BANG_.call(null,req);
} else {
return kvlt.platform.xhr.request_BANG_.call(null,req);
}
});

//# sourceMappingURL=http.js.map
