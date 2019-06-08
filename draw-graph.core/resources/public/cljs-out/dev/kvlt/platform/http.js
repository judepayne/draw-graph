// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('kvlt.platform.http');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async');
goog.require('taoensso.timbre');
goog.require('clojure.string');
goog.require('kvlt.util');
goog.require('promesa.core');
goog.require('kvlt.platform.xhr');
goog.require('kvlt.middleware.util');
kvlt.platform.http.__GT_response = (function kvlt$platform$http$__GT_response(req,m){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(m,cljs.core.assoc,cljs.core.cst$kw$kvlt_SLASH_request,req);
});
kvlt.platform.http.error__GT_map = (function kvlt$platform$http$error__GT_map(e){
var code = (function (){var or__4131__auto__ = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(e.code);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.cst$kw$unknown;
}
})();
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,code,cljs.core.cst$kw$error,code,cljs.core.cst$kw$message,e.message,cljs.core.cst$kw$status,(0)], null);
});
kvlt.platform.http.compose_url = (function kvlt$platform$http$compose_url(p__41583){
var map__41584 = p__41583;
var map__41584__$1 = (((((!((map__41584 == null))))?(((((map__41584.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41584.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41584):map__41584);
var req = map__41584__$1;
var query_string = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41584__$1,cljs.core.cst$kw$query_DASH_string);
var server_port = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41584__$1,cljs.core.cst$kw$server_DASH_port);
return [cljs.core.name((function (){var G__41589 = cljs.core.cst$kw$scheme;
return (req.cljs$core$IFn$_invoke$arity$1 ? req.cljs$core$IFn$_invoke$arity$1(G__41589) : req.call(null,G__41589));
})()),"://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__41590 = cljs.core.cst$kw$server_DASH_name;
return (req.cljs$core$IFn$_invoke$arity$1 ? req.cljs$core$IFn$_invoke$arity$1(G__41590) : req.call(null,G__41590));
})()),(cljs.core.truth_(server_port)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(server_port)].join(''):null),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__41591 = cljs.core.cst$kw$uri;
return (req.cljs$core$IFn$_invoke$arity$1 ? req.cljs$core$IFn$_invoke$arity$1(G__41591) : req.call(null,G__41591));
})()),(cljs.core.truth_(query_string)?["?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_string)].join(''):null)].join('');
});
kvlt.platform.http.req__GT_node = (function kvlt$platform$http$req__GT_node(p__41592){
var map__41593 = p__41592;
var map__41593__$1 = (((((!((map__41593 == null))))?(((((map__41593.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41593.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41593):map__41593);
var req = map__41593__$1;
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41593__$1,cljs.core.cst$kw$body);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41593__$1,cljs.core.cst$kw$kvlt$platform_SLASH_timeout);
var insecure_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41593__$1,cljs.core.cst$kw$kvlt$platform_SLASH_insecure_QMARK_);
var G__41595 = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$uri,kvlt.platform.http.compose_url(req),cljs.core.cst$kw$method,clojure.string.upper_case(cljs.core.name(cljs.core.cst$kw$request_DASH_method.cljs$core$IFn$_invoke$arity$1(req))),cljs.core.cst$kw$headers,(function (){var G__41596 = cljs.core.cst$kw$headers;
return (req.cljs$core$IFn$_invoke$arity$1 ? req.cljs$core$IFn$_invoke$arity$1(G__41596) : req.call(null,G__41596));
})(),cljs.core.cst$kw$encoding,null,cljs.core.cst$kw$gzip,true], null);
var G__41595__$1 = (cljs.core.truth_(body)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41595,cljs.core.cst$kw$body,body):G__41595);
var G__41595__$2 = (cljs.core.truth_(timeout)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41595__$1,cljs.core.cst$kw$timeout,timeout):G__41595__$1);
if(cljs.core.truth_(insecure_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41595__$2,cljs.core.cst$kw$rejectUnauthorized,false);
} else {
return G__41595__$2;
}
});
kvlt.platform.http.maybe_encode = (function kvlt$platform$http$maybe_encode(buffer,as,headers){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(as,cljs.core.cst$kw$byte_DASH_array)){
return buffer;
} else {
var cs = kvlt.middleware.util.charset(cljs.core.cst$kw$content_DASH_type.cljs$core$IFn$_invoke$arity$1(headers));
return buffer.toString(cs);
}
});
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs")){
var request_BANG__41602 = require("request");
kvlt.platform.http.request_node_BANG_ = ((function (request_BANG__41602){
return (function kvlt$platform$http$request_node_BANG_(req){
return promesa.core.promise(((function (request_BANG__41602){
return (function (resolve,_){
var respond = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(resolve,((function (request_BANG__41602){
return (function (p1__41597_SHARP_){
return kvlt.platform.http.__GT_response(req,p1__41597_SHARP_);
});})(request_BANG__41602))
);
var G__41598 = cljs.core.clj__GT_js(kvlt.platform.http.req__GT_node(req));
var G__41599 = ((function (G__41598,respond,request_BANG__41602){
return (function (error,node_resp,buffer){
if(cljs.core.truth_(error)){
var G__41600 = kvlt.platform.http.error__GT_map(error);
return (respond.cljs$core$IFn$_invoke$arity$1 ? respond.cljs$core$IFn$_invoke$arity$1(G__41600) : respond.call(null,G__41600));
} else {
var headers = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(node_resp.headers,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$keywordize_DASH_keys,true], 0));
var resp = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$headers,headers,cljs.core.cst$kw$status,node_resp.statusCode,cljs.core.cst$kw$body,kvlt.platform.http.maybe_encode(buffer,(function (){var G__41601 = cljs.core.cst$kw$as;
return (req.cljs$core$IFn$_invoke$arity$1 ? req.cljs$core$IFn$_invoke$arity$1(G__41601) : req.call(null,G__41601));
})(),headers)], null);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$debug,"kvlt.platform.http","/private/var/folders/t5/f3xh0rdx5ds8d5rn2wr52fh40000gn/T/form-init8747378136274606403.clj",61,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (headers,resp,G__41598,respond,request_BANG__41602){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Received response\n",kvlt.util.pprint_str(resp)], null);
});})(headers,resp,G__41598,respond,request_BANG__41602))
,null)),null,99440026);

return (respond.cljs$core$IFn$_invoke$arity$1 ? respond.cljs$core$IFn$_invoke$arity$1(resp) : respond.call(null,resp));
}
});})(G__41598,respond,request_BANG__41602))
;
return (request_BANG__41602.cljs$core$IFn$_invoke$arity$2 ? request_BANG__41602.cljs$core$IFn$_invoke$arity$2(G__41598,G__41599) : request_BANG__41602.call(null,G__41598,G__41599));
});})(request_BANG__41602))
);
});})(request_BANG__41602))
;
} else {
}
kvlt.platform.http.request_BANG_ = (function kvlt$platform$http$request_BANG_(req){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$debug,"kvlt.platform.http","/private/var/folders/t5/f3xh0rdx5ds8d5rn2wr52fh40000gn/T/form-init8747378136274606403.clj",65,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Issuing request\n",kvlt.util.pprint_str(req)], null);
}),null)),null,-1420462580);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs")){
return kvlt.platform.http.request_node_BANG_(req);
} else {
return kvlt.platform.xhr.request_BANG_(req);
}
});
