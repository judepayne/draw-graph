// Compiled by ClojureScript 1.10.520 {}
goog.provide('kvlt.middleware');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('kvlt.middleware.util');
goog.require('kvlt.util');
goog.require('kvlt.platform.util');
goog.require('clojure.set');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('cats.core');
kvlt.middleware.header = (function kvlt$middleware$header(var_args){
var G__37923 = arguments.length;
switch (G__37923) {
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

kvlt.middleware.header.cljs$core$IFn$_invoke$arity$2 = (function (p__37924,k){
var map__37925 = p__37924;
var map__37925__$1 = (((((!((map__37925 == null))))?(((((map__37925.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37925.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37925):map__37925);
var resp = map__37925__$1;
var hs = cljs.core.get.call(null,map__37925__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var and__4120__auto__ = hs;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.some.call(null,hs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.name.call(null,k)], null));
} else {
return and__4120__auto__;
}
});

kvlt.middleware.header.cljs$core$IFn$_invoke$arity$3 = (function (m,k,v){
return cljs.core.update.call(null,m,new cljs.core.Keyword(null,"headers","headers",-835030129),(function (h){
return cljs.core.assoc.call(null,cljs.core.dissoc.call(null,h,k,cljs.core.name.call(null,k)),cljs.core.name.call(null,k),v);
}));
});

kvlt.middleware.header.cljs$lang$maxFixedArity = 3;

kvlt.middleware.body__GT_string = (function kvlt$middleware$body__GT_string(p__37928){
var map__37929 = p__37928;
var map__37929__$1 = (((((!((map__37929 == null))))?(((((map__37929.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37929.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37929):map__37929);
var resp = map__37929__$1;
var body = cljs.core.get.call(null,map__37929__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
return kvlt.platform.util.byte_array__GT_str.call(null,body,kvlt.middleware.util.charset.call(null,kvlt.middleware.header.call(null,resp,new cljs.core.Keyword(null,"content-type","content-type",-508222634))));
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
kvlt.middleware.from_content_type = (function (){var method_table__4613__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"kvlt.middleware","from-content-type"),((function (method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__){
return (function (resp){
return cljs.core.keyword.call(null,kvlt.middleware.util.__GT_content_type.call(null,kvlt.middleware.header.call(null,resp,new cljs.core.Keyword(null,"content-type","content-type",-508222634))));
});})(method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
cljs.core._add_method.call(null,kvlt.middleware.from_content_type,new cljs.core.Keyword(null,"default","default",-1987822328),(function (resp){
return resp;
}));
cljs.core._add_method.call(null,kvlt.middleware.from_content_type,new cljs.core.Keyword("application","edn","application/edn",-63927515),(function (resp){
return cljs.core.assoc.call(null,resp,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.reader.read_string.call(null,kvlt.middleware.body__GT_string.call(null,resp)));
}));
cljs.core._add_method.call(null,kvlt.middleware.from_content_type,new cljs.core.Keyword("application","json","application/json",1747896298),(function (p__37931){
var map__37932 = p__37931;
var map__37932__$1 = (((((!((map__37932 == null))))?(((((map__37932.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37932.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37932):map__37932);
var resp = map__37932__$1;
var body = cljs.core.get.call(null,map__37932__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
return cljs.core.assoc.call(null,resp,new cljs.core.Keyword(null,"body","body",-2049205669),kvlt.platform.util.parse_json.call(null,kvlt.middleware.body__GT_string.call(null,resp)));
}));
kvlt.middleware.hint__GT_body_type = (function kvlt$middleware$hint__GT_body_type(x){
if((((x instanceof cljs.core.Keyword)) && (cljs.core._EQ_.call(null,"kvlt.body",cljs.core.namespace.call(null,x))))){
return cljs.core.keyword.call(null,cljs.core.name.call(null,x));
} else {
return null;
}
});
/**
 * Look for a body with a `:kvlt.body/`-prefixed metadata key, setting
 *   the request's `:type` and `:form-params` keys
 *   accordingly (e.g. `:body ^:kvlt/edn {:x 1}`)
 */
kvlt.middleware.body_type_hint = kvlt.middleware.util.__GT_mw.call(null,new cljs.core.Keyword(null,"body-type-hint","body-type-hint",-939145957),cljs.core.with_meta((function (p__37934){
var map__37935 = p__37934;
var map__37935__$1 = (((((!((map__37935 == null))))?(((((map__37935.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37935.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37935):map__37935);
var req = map__37935__$1;
var body = cljs.core.get.call(null,map__37935__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var temp__5718__auto__ = cljs.core.some.call(null,kvlt.middleware.hint__GT_body_type,cljs.core.keys.call(null,cljs.core.meta.call(null,body)));
if(cljs.core.truth_(temp__5718__auto__)){
var t = temp__5718__auto__;
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,req,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.keyword.call(null,t),new cljs.core.Keyword(null,"form-params","form-params",1884296467),body),new cljs.core.Keyword(null,"body","body",-2049205669));
} else {
return req;
}
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"has","has",1466247447),new cljs.core.Keyword(null,"body","body",-2049205669)], null)),null);
kvlt.util.doc_examples_BANG_.call(null,new cljs.core.Var(function(){return kvlt.middleware.body_type_hint;},new cljs.core.Symbol("kvlt.middleware","body-type-hint","kvlt.middleware/body-type-hint",-789443311,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"kvlt.middleware","kvlt.middleware",-1330994476,null),new cljs.core.Symbol(null,"body-type-hint","body-type-hint",701385570,null),"resources/public/cljs-out/dev/kvlt/middleware.cljc",22,1,48,48,cljs.core.List.EMPTY,"Look for a body with a `:kvlt.body/`-prefixed metadata key, setting\n  the request's `:type` and `:form-params` keys\n  accordingly (e.g. `:body ^:kvlt/edn {:x 1}`)",(cljs.core.truth_(kvlt.middleware.body_type_hint)?kvlt.middleware.body_type_hint.cljs$lang$test:null)])),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("kvlt.body","edn","kvlt.body/edn",1136261434),true], null))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"form-params","form-params",1884296467),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"edn","edn",1317840885)], null)], null)));
/**
 * Turn request's `:content-type` (or `:type`), if any, and
 * `:character-encoding`, if any, into a "content-type" header & leave
 * top-level `:content-type` key in place. 
 */
kvlt.middleware.content_type = kvlt.middleware.util.__GT_mw.call(null,new cljs.core.Keyword(null,"content-type","content-type",-508222634),(function (p__37937){
var map__37938 = p__37937;
var map__37938__$1 = (((((!((map__37938 == null))))?(((((map__37938.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37938.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37938):map__37938);
var req = map__37938__$1;
var type = cljs.core.get.call(null,map__37938__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var body = cljs.core.get.call(null,map__37938__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var character_encoding = cljs.core.get.call(null,map__37938__$1,new cljs.core.Keyword(null,"character-encoding","character-encoding",-1946080777));
var map__37940 = (function (){var G__37941 = req;
if(cljs.core.truth_(type)){
return cljs.core.assoc.call(null,G__37941,new cljs.core.Keyword(null,"content-type","content-type",-508222634),type);
} else {
return G__37941;
}
})();
var map__37940__$1 = (((((!((map__37940 == null))))?(((((map__37940.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37940.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37940):map__37940);
var req__$1 = map__37940__$1;
var content_type = cljs.core.get.call(null,map__37940__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var G__37943 = req__$1;
if(cljs.core.truth_(content_type)){
return kvlt.middleware.header.call(null,G__37943,new cljs.core.Keyword(null,"content-type","content-type",-508222634),kvlt.middleware.util.__GT_content_type.call(null,content_type,character_encoding));
} else {
return G__37943;
}
}),null);
kvlt.util.doc_examples_BANG_.call(null,new cljs.core.Var(function(){return kvlt.middleware.content_type;},new cljs.core.Symbol("kvlt.middleware","content-type","kvlt.middleware/content-type",-400988246,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"kvlt.middleware","kvlt.middleware",-1330994476,null),new cljs.core.Symbol(null,"content-type","content-type",1132308893,null),"resources/public/cljs-out/dev/kvlt/middleware.cljc",20,1,67,67,cljs.core.List.EMPTY,"Turn request's `:content-type` (or `:type`), if any, and\n   `:character-encoding`, if any, into a \"content-type\" header & leave\n   top-level `:content-type` key in place. ",(cljs.core.truth_(kvlt.middleware.content_type)?kvlt.middleware.content_type.cljs$lang$test:null)])),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"content-type","content-type",-508222634),"text/html",new cljs.core.Keyword(null,"character-encoding","character-encoding",-1946080777),"US-ASCII"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content-type","content-type",-508222634),"text/html; charset=US-ASCII"], null),new cljs.core.Keyword(null,"content-type","content-type",-508222634),"text/html"], null)], null)));
/**
 * Turn request's `:accept` value, if any, into an "accept" header &
 *   remove the top-level key.
 */
kvlt.middleware.accept = kvlt.middleware.util.__GT_mw.call(null,new cljs.core.Keyword(null,"accept","accept",1874130431),cljs.core.with_meta((function (p__37944){
var map__37945 = p__37944;
var map__37945__$1 = (((((!((map__37945 == null))))?(((((map__37945.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37945.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37945):map__37945);
var req = map__37945__$1;
var accept = cljs.core.get.call(null,map__37945__$1,new cljs.core.Keyword(null,"accept","accept",1874130431));
return kvlt.middleware.header.call(null,req,new cljs.core.Keyword(null,"accept","accept",1874130431),kvlt.middleware.util.__GT_content_type.call(null,accept));
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"has","has",1466247447),new cljs.core.Keyword(null,"accept","accept",1874130431),new cljs.core.Keyword(null,"removing","removing",1104822312),new cljs.core.Keyword(null,"accept","accept",1874130431)], null)),null);
kvlt.util.doc_examples_BANG_.call(null,new cljs.core.Var(function(){return kvlt.middleware.accept;},new cljs.core.Symbol("kvlt.middleware","accept","kvlt.middleware/accept",2047916971,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"kvlt.middleware","kvlt.middleware",-1330994476,null),new cljs.core.Symbol(null,"accept","accept",-780305338,null),"resources/public/cljs-out/dev/kvlt/middleware.cljc",14,1,86,86,cljs.core.List.EMPTY,"Turn request's `:accept` value, if any, into an \"accept\" header &\n  remove the top-level key.",(cljs.core.truth_(kvlt.middleware.accept)?kvlt.middleware.accept.cljs$lang$test:null)])),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"accept","accept",1874130431),new cljs.core.Keyword(null,"edn","edn",1317840885)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["accept","application/edn"], null)], null)], null)));
kvlt.middleware.as_key = (function kvlt$middleware$as_key(resp){
return new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("kvlt","request","kvlt/request",1769844894).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,resp)));
});
if((typeof kvlt !== 'undefined') && (typeof kvlt.middleware !== 'undefined') && (typeof kvlt.middleware.as_type !== 'undefined')){
} else {
kvlt.middleware.as_type = (function (){var method_table__4613__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"kvlt.middleware","as-type"),kvlt.middleware.as_key,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
cljs.core._add_method.call(null,kvlt.middleware.as_type,new cljs.core.Keyword(null,"string","string",-1989541586),(function (p__37947){
var map__37948 = p__37947;
var map__37948__$1 = (((((!((map__37948 == null))))?(((((map__37948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37948.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37948):map__37948);
var resp = map__37948__$1;
var body = cljs.core.get.call(null,map__37948__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
return resp;
}));
cljs.core._add_method.call(null,kvlt.middleware.as_type,new cljs.core.Keyword(null,"byte-array","byte-array",369158537),(function (p__37950){
var map__37951 = p__37950;
var map__37951__$1 = (((((!((map__37951 == null))))?(((((map__37951.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37951.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37951):map__37951);
var resp = map__37951__$1;
var body = cljs.core.get.call(null,map__37951__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
if(kvlt.platform.util.byte_array_QMARK_.call(null,body)){
} else {
throw (new Error(["Assert failed: ","For platform-specific reasons, :as :byte-array is special-cased in\n  kvlt.platform.http/request","\n","(platform.util/byte-array? body)"].join('')));
}

return resp;
}));
cljs.core._add_method.call(null,kvlt.middleware.as_type,new cljs.core.Keyword(null,"auto","auto",-566279492),(function (resp){
return kvlt.middleware.from_content_type.call(null,resp);
}));
cljs.core._add_method.call(null,kvlt.middleware.as_type,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__37953){
var map__37954 = p__37953;
var map__37954__$1 = (((((!((map__37954 == null))))?(((((map__37954.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37954.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37954):map__37954);
var resp = map__37954__$1;
var headers = cljs.core.get.call(null,map__37954__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var t = kvlt.middleware.header.call(null,resp,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var resp__$1 = cljs.core.assoc.call(null,resp,new cljs.core.Keyword(null,"orig-content-type","orig-content-type",-995245643),t);
return kvlt.middleware.from_content_type.call(null,kvlt.middleware.header.call(null,resp__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634),kvlt.middleware.util.__GT_content_type.call(null,kvlt.middleware.as_key.call(null,resp__$1))));
}));
kvlt.middleware.parsing_error = (function kvlt$middleware$parsing_error(resp,e){
var error = kvlt.platform.util.exception__GT_map.call(null,e,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"middleware-error","middleware-error",873820682),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"middleware-error","middleware-error",873820682)], null));
var G__37956 = resp;
if(cljs.core.not.call(null,resp.call(null,new cljs.core.Keyword(null,"error","error",-978969032)))){
return cljs.core.merge.call(null,G__37956,error);
} else {
return G__37956;
}
});
/**
 * Response body type conversion --- `:string` `:byte-array` `:auto` `:json` `:edn` etc..
 * 
 *   See [[from-content-type]] for custom conversions.
 */
kvlt.middleware.as = kvlt.middleware.util.__GT_mw.call(null,new cljs.core.Keyword(null,"as","as",1148689641),(function (p1__37957_SHARP_){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Keyword(null,"string","string",-1989541586)], null),p1__37957_SHARP_);
}),(function (resp){
try{return kvlt.middleware.as_type.call(null,resp);
}catch (e37958){if((e37958 instanceof Error)){
var e = e37958;
return kvlt.middleware.parsing_error.call(null,resp,e);
} else {
throw e37958;

}
}}));
/**
 * Convert the `:accept-encoding` option (keyword/str, or collection of) to an
 *   acceptable `Accept-Encoding` header.
 * 
 *   This middleware is not likely to have any effect in a browser
 *   environment.
 */
kvlt.middleware.accept_encoding = kvlt.middleware.util.__GT_mw.call(null,new cljs.core.Keyword(null,"accept-encoding","accept-encoding",-317924396),cljs.core.with_meta((function (p__37959){
var map__37960 = p__37959;
var map__37960__$1 = (((((!((map__37960 == null))))?(((((map__37960.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37960.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37960):map__37960);
var req = map__37960__$1;
var v = cljs.core.get.call(null,map__37960__$1,new cljs.core.Keyword(null,"accept-encoding","accept-encoding",-317924396));
return kvlt.middleware.header.call(null,req,new cljs.core.Keyword(null,"accept-encoding","accept-encoding",-317924396),((cljs.core.coll_QMARK_.call(null,v))?clojure.string.join.call(null,", ",cljs.core.map.call(null,cljs.core.name,v)):cljs.core.name.call(null,v)));
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"has","has",1466247447),new cljs.core.Keyword(null,"accept-encoding","accept-encoding",-317924396),new cljs.core.Keyword(null,"removing","removing",1104822312),new cljs.core.Keyword(null,"accept-encoding","accept-encoding",-317924396)], null)),null);
kvlt.util.doc_examples_BANG_.call(null,new cljs.core.Var(function(){return kvlt.middleware.accept_encoding;},new cljs.core.Symbol("kvlt.middleware","accept-encoding","kvlt.middleware/accept-encoding",-504291282,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"kvlt.middleware","kvlt.middleware",-1330994476,null),new cljs.core.Symbol(null,"accept-encoding","accept-encoding",1322607131,null),"resources/public/cljs-out/dev/kvlt/middleware.cljc",23,1,137,137,cljs.core.List.EMPTY,"Convert the `:accept-encoding` option (keyword/str, or collection of) to an\n  acceptable `Accept-Encoding` header.\n\n  This middleware is not likely to have any effect in a browser\n  environment.",(cljs.core.truth_(kvlt.middleware.accept_encoding)?kvlt.middleware.accept_encoding.cljs$lang$test:null)])),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"accept-encoding","accept-encoding",-317924396),new cljs.core.Keyword(null,"origami","origami",1780950841)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"accept-encoding","accept-encoding",-317924396),"origami"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"accept-encoding","accept-encoding",-317924396),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"accept-encoding","accept-encoding",-317924396),"a, b"], null)], null)], null)));
/**
 * Rename request's `:method` key to `:request-method`
 */
kvlt.middleware.method = kvlt.middleware.util.__GT_mw.call(null,new cljs.core.Keyword(null,"method","method",55703592),cljs.core.with_meta((function (p__37962){
var map__37963 = p__37962;
var map__37963__$1 = (((((!((map__37963 == null))))?(((((map__37963.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37963.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37963):map__37963);
var req = map__37963__$1;
var m = cljs.core.get.call(null,map__37963__$1,new cljs.core.Keyword(null,"method","method",55703592));
return cljs.core.assoc.call(null,req,new cljs.core.Keyword(null,"request-method","request-method",1764796830),m);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"has","has",1466247447),new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"removing","removing",1104822312),new cljs.core.Keyword(null,"method","method",55703592)], null)),null);
/**
 * Rename request's `:port` key to `:server-port`
 */
kvlt.middleware.port = kvlt.middleware.util.__GT_mw.call(null,new cljs.core.Keyword(null,"port","port",1534937262),cljs.core.with_meta((function (p__37965){
var map__37966 = p__37965;
var map__37966__$1 = (((((!((map__37966 == null))))?(((((map__37966.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37966.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37966):map__37966);
var req = map__37966__$1;
var port = cljs.core.get.call(null,map__37966__$1,new cljs.core.Keyword(null,"port","port",1534937262));
return cljs.core.assoc.call(null,req,new cljs.core.Keyword(null,"server-port","server-port",663745648),port);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"has","has",1466247447),new cljs.core.Keyword(null,"port","port",1534937262),new cljs.core.Keyword(null,"removing","removing",1104822312),new cljs.core.Keyword(null,"port","port",1534937262)], null)),null);
kvlt.util.doc_examples_BANG_.call(null,new cljs.core.Var(function(){return kvlt.middleware.method;},new cljs.core.Symbol("kvlt.middleware","method","kvlt.middleware/method",-635028478,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"kvlt.middleware","kvlt.middleware",-1330994476,null),new cljs.core.Symbol(null,"method","method",1696235119,null),"resources/public/cljs-out/dev/kvlt/middleware.cljc",14,1,158,158,cljs.core.List.EMPTY,"Rename request's `:method` key to `:request-method`",(cljs.core.truth_(kvlt.middleware.method)?kvlt.middleware.method.cljs$lang$test:null)])),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-method","request-method",1764796830),new cljs.core.Keyword(null,"get","get",1683182755)], null)], null)));
/**
 * Turn request's `:url` value, if any, into top-level `:scheme`,
 *   `:server-name`, `:server-port`, `:uri`, `:query-string`, and
 *   `:user-info` keys
 */
kvlt.middleware.url = kvlt.middleware.util.__GT_mw.call(null,new cljs.core.Keyword(null,"url","url",276297046),cljs.core.with_meta((function (p__37968){
var map__37969 = p__37968;
var map__37969__$1 = (((((!((map__37969 == null))))?(((((map__37969.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37969.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37969):map__37969);
var req = map__37969__$1;
var url = cljs.core.get.call(null,map__37969__$1,new cljs.core.Keyword(null,"url","url",276297046));
return cljs.core.merge.call(null,req,kvlt.middleware.util.parse_url.call(null,url));
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"has","has",1466247447),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"removing","removing",1104822312),new cljs.core.Keyword(null,"url","url",276297046)], null)),null);
kvlt.util.doc_examples_BANG_.call(null,new cljs.core.Var(function(){return kvlt.middleware.url;},new cljs.core.Symbol("kvlt.middleware","url","kvlt.middleware/url",-847267414,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"kvlt.middleware","kvlt.middleware",-1330994476,null),new cljs.core.Symbol(null,"url","url",1916828573,null),"resources/public/cljs-out/dev/kvlt/middleware.cljc",11,1,173,173,cljs.core.List.EMPTY,"Turn request's `:url` value, if any, into top-level `:scheme`,\n  `:server-name`, `:server-port`, `:uri`, `:query-string`, and\n  `:user-info` keys",(cljs.core.truth_(kvlt.middleware.url)?kvlt.middleware.url.cljs$lang$test:null)])),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),"ftp://localhost:9/x?x=1"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"scheme","scheme",90199613),new cljs.core.Keyword(null,"ftp","ftp",911215182),new cljs.core.Keyword(null,"server-name","server-name",-1012104295),"localhost",new cljs.core.Keyword(null,"server-port","server-port",663745648),(9),new cljs.core.Keyword(null,"uri","uri",-774711847),"/x",new cljs.core.Keyword(null,"user-info","user-info",-1061909920),null,new cljs.core.Keyword(null,"query-string","query-string",-1018845061),"x=1"], null)], null)));
/**
 * Add `:content-type` key having value `:text/plain`, if no `:content-type` present.
 * 
 *   Assumes placement before [[content-type]].
 */
kvlt.middleware.default_content_type = kvlt.middleware.util.__GT_mw.call(null,new cljs.core.Keyword(null,"default-content-type","default-content-type",28331753),(function (req){
if(cljs.core.truth_((function (){var and__4120__auto__ = req.call(null,new cljs.core.Keyword(null,"body","body",-2049205669));
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,(function (){var or__4131__auto__ = req.call(null,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return kvlt.middleware.header.call(null,req,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
}
})());
} else {
return and__4120__auto__;
}
})())){
return cljs.core.assoc.call(null,req,new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.Keyword("text","plain","text/plain",1363827258));
} else {
return req;
}
}),null);
/**
 * Convert keys within request's `:headers` value to strings, and
 * response's `:headers` values to keywords. 
 */
kvlt.middleware.keyword_headers = kvlt.middleware.util.__GT_mw.call(null,new cljs.core.Keyword(null,"keyword-headers","keyword-headers",1310589326),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),clojure.walk.stringify_keys], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),clojure.walk.keywordize_keys], null));
kvlt.middleware.lower_case = (function kvlt$middleware$lower_case(p1__37971_SHARP_){
var G__37972 = clojure.string.lower_case.call(null,cljs.core.name.call(null,p1__37971_SHARP_));
if((p1__37971_SHARP_ instanceof cljs.core.Keyword)){
return cljs.core.keyword.call(null,G__37972);
} else {
return G__37972;
}
});
/**
 * Convert keys within request & response's `:headers` value to lower
 *   case.
 */
kvlt.middleware.lower_case_headers = kvlt.middleware.util.__GT_mw.call(null,new cljs.core.Keyword(null,"lower-case-headers","lower-case-headers",541852280),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),(function (p1__37973_SHARP_){
return kvlt.util.map_keys.call(null,kvlt.middleware.lower_case,p1__37973_SHARP_);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),(function (p1__37974_SHARP_){
return kvlt.util.map_keys.call(null,kvlt.middleware.lower_case,p1__37974_SHARP_);
})], null));
/**
 * Convert `:basic-auth` values (vector or map) into an
 *  `:authorization` header.
 */
kvlt.middleware.basic_auth = kvlt.middleware.util.__GT_mw.call(null,new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332),cljs.core.with_meta((function (p__37975){
var map__37976 = p__37975;
var map__37976__$1 = (((((!((map__37976 == null))))?(((((map__37976.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37976.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37976):map__37976);
var req = map__37976__$1;
var basic_auth = cljs.core.get.call(null,map__37976__$1,new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332));
return kvlt.middleware.header.call(null,req,new cljs.core.Keyword(null,"authorization","authorization",-166302136),kvlt.middleware.util.basic_auth.call(null,basic_auth));
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"has","has",1466247447),new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332),new cljs.core.Keyword(null,"removing","removing",1104822312),new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332)], null)),null);
kvlt.util.doc_examples_BANG_.call(null,new cljs.core.Var(function(){return kvlt.middleware.basic_auth;},new cljs.core.Symbol("kvlt.middleware","basic-auth","kvlt.middleware/basic-auth",-1836285898,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"kvlt.middleware","kvlt.middleware",-1330994476,null),new cljs.core.Symbol(null,"basic-auth","basic-auth",967368195,null),"resources/public/cljs-out/dev/kvlt/middleware.cljc",18,1,214,214,cljs.core.List.EMPTY,"Convert `:basic-auth` values (vector or map) into an\n `:authorization` header.",(cljs.core.truth_(kvlt.middleware.basic_auth)?kvlt.middleware.basic_auth.cljs$lang$test:null)])),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["user","pass"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"authorization","authorization",-166302136),"Basic ..."], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"username","username",1605666410),"user",new cljs.core.Keyword(null,"password","password",417022471),"pass"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"authorization","authorization",-166302136),"Basic ..."], null)], null)], null)));
/**
 * Convert `:oauth-token` value into an `:authorization` header
 */
kvlt.middleware.oauth_token = kvlt.middleware.util.__GT_mw.call(null,new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191),cljs.core.with_meta((function (p__37978){
var map__37979 = p__37978;
var map__37979__$1 = (((((!((map__37979 == null))))?(((((map__37979.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37979.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37979):map__37979);
var req = map__37979__$1;
var oauth_token = cljs.core.get.call(null,map__37979__$1,new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191));
return kvlt.middleware.header.call(null,req,new cljs.core.Keyword(null,"authorization","authorization",-166302136),["Bearer ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(oauth_token)].join(''));
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"has","has",1466247447),new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191),new cljs.core.Keyword(null,"removing","removing",1104822312),new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191)], null)),null);
kvlt.util.doc_examples_BANG_.call(null,new cljs.core.Var(function(){return kvlt.middleware.oauth_token;},new cljs.core.Symbol("kvlt.middleware","oauth-token","kvlt.middleware/oauth-token",-1556344573,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"kvlt.middleware","kvlt.middleware",-1330994476,null),new cljs.core.Symbol(null,"oauth-token","oauth-token",1951946718,null),"resources/public/cljs-out/dev/kvlt/middleware.cljc",19,1,226,226,cljs.core.List.EMPTY,"Convert `:oauth-token` value into an `:authorization` header",(cljs.core.truth_(kvlt.middleware.oauth_token)?kvlt.middleware.oauth_token.cljs$lang$test:null)])),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191),"xyz"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"authorization","authorization",-166302136),"Bearer xyz"], null)], null)], null)));
/**
 * Merge request map with `{:method :get}`.
 * 
 *   Assumes placement before [[method]].
 */
kvlt.middleware.default_method = kvlt.middleware.util.__GT_mw.call(null,new cljs.core.Keyword(null,"default-method","default-method",-616461794),(function (p1__37981_SHARP_){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755)], null),p1__37981_SHARP_);
}),null);
kvlt.util.doc_examples_BANG_.call(null,new cljs.core.Var(function(){return kvlt.middleware.default_method;},new cljs.core.Symbol("kvlt.middleware","default-method","kvlt.middleware/default-method",-2078157256,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"kvlt.middleware","kvlt.middleware",-1330994476,null),new cljs.core.Symbol(null,"default-method","default-method",1024069733,null),"resources/public/cljs-out/dev/kvlt/middleware.cljc",22,1,235,235,cljs.core.List.EMPTY,"Merge request map with `{:method :get}`.\n\n  Assumes placement before [[method]].",(cljs.core.truth_(kvlt.middleware.default_method)?kvlt.middleware.default_method.cljs$lang$test:null)])),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755)], null)], null)));
if((typeof kvlt !== 'undefined') && (typeof kvlt.middleware !== 'undefined') && (typeof kvlt.middleware.decompress_body !== 'undefined')){
} else {
/**
 * Dispatch on the response's `:content-encoding` header value.
 *   Clojure implementations exist for "gzip" and "deflate".
 */
kvlt.middleware.decompress_body = (function (){var method_table__4613__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"kvlt.middleware","decompress-body"),((function (method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__){
return (function (resp){
var and__4120__auto__ = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(resp);
if(cljs.core.truth_(and__4120__auto__)){
return kvlt.middleware.header.call(null,resp,new cljs.core.Keyword(null,"content-encoding","content-encoding",2011780217));
} else {
return and__4120__auto__;
}
});})(method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
kvlt.middleware.lift_content_encoding = (function kvlt$middleware$lift_content_encoding(p__37982){
var map__37983 = p__37982;
var map__37983__$1 = (((((!((map__37983 == null))))?(((((map__37983.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37983.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37983):map__37983);
var resp = map__37983__$1;
var map__37984 = cljs.core.get.call(null,map__37983__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var map__37984__$1 = (((((!((map__37984 == null))))?(((((map__37984.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37984.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37984):map__37984);
var content_encoding = cljs.core.get.call(null,map__37984__$1,"content-encoding");
return cljs.core.update.call(null,cljs.core.assoc.call(null,resp,new cljs.core.Keyword(null,"orig-content-encoding","orig-content-encoding",-1642988561),content_encoding),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.dissoc,"content-encoding");
});
cljs.core._add_method.call(null,kvlt.middleware.decompress_body,"gzip",(function (p__37987){
var map__37988 = p__37987;
var map__37988__$1 = (((((!((map__37988 == null))))?(((((map__37988.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37988.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37988):map__37988);
var resp = map__37988__$1;
var body = cljs.core.get.call(null,map__37988__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var body__$1 = kvlt.platform.util.gunzip.call(null,body);
return kvlt.middleware.lift_content_encoding.call(null,cljs.core.assoc.call(null,resp,new cljs.core.Keyword(null,"body","body",-2049205669),body__$1));
}));
cljs.core._add_method.call(null,kvlt.middleware.decompress_body,"deflate",(function (p__37990){
var map__37991 = p__37990;
var map__37991__$1 = (((((!((map__37991 == null))))?(((((map__37991.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37991.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37991):map__37991);
var resp = map__37991__$1;
var body = cljs.core.get.call(null,map__37991__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var body__$1 = kvlt.platform.util.inflate.call(null,body);
return kvlt.middleware.lift_content_encoding.call(null,cljs.core.assoc.call(null,resp,new cljs.core.Keyword(null,"body","body",-2049205669),body__$1));
}));
cljs.core._add_method.call(null,kvlt.middleware.decompress_body,new cljs.core.Keyword(null,"default","default",-1987822328),(function (resp){
return kvlt.middleware.lift_content_encoding.call(null,resp);
}));
/**
 * Response body decompression.  Defaults request's "Accept-Encoding" header.
 *   Can be disabled per-request via `:decompress-body? false'
 */
kvlt.middleware.decompress = kvlt.middleware.util.__GT_mw.call(null,new cljs.core.Keyword(null,"decompress","decompress",1427568636),cljs.core.with_meta((function (req){
var G__37993 = req;
if((((!(req.call(null,new cljs.core.Keyword(null,"decompress-body?","decompress-body?",421693857)) === false))) && (cljs.core.not.call(null,kvlt.middleware.header.call(null,req,new cljs.core.Keyword(null,"accept-encoding","accept-encoding",-317924396)))))){
return kvlt.middleware.header.call(null,G__37993,new cljs.core.Keyword(null,"accept-encoding","accept-encoding",-317924396),"gzip, deflate");
} else {
return G__37993;
}
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"removing","removing",1104822312),new cljs.core.Keyword(null,"accept-encoding","accept-encoding",-317924396)], null)),(function (resp){
return resp;
}));
kvlt.middleware.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 14, [(205),null,(206),null,(300),null,(204),null,(307),null,(304),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
kvlt.middleware.status__GT_reason = cljs.core.PersistentHashMap.fromArrays([(410),(205),(416),(101),(206),(415),(300),(204),(405),(504),(505),(502),(307),(402),(407),(305),(304),(401),(412),(417),(500),(501),(303),(100),(413),(301),(408),(411),(201),(302),(202),(200),(503),(414),(404),(203),(409),(400),(403),(406)],[new cljs.core.Keyword(null,"gone","gone",-1158371124),new cljs.core.Keyword(null,"reset-content","reset-content",-1325960994),new cljs.core.Keyword(null,"requested-range-not-satisfiable","requested-range-not-satisfiable",2110942027),new cljs.core.Keyword(null,"switching-protocols","switching-protocols",446359171),new cljs.core.Keyword(null,"partial-content","partial-content",1842744152),new cljs.core.Keyword(null,"unsupported-media-type","unsupported-media-type",-248081522),new cljs.core.Keyword(null,"multiple-choices","multiple-choices",1536362331),new cljs.core.Keyword(null,"no-content","no-content",-1860206018),new cljs.core.Keyword(null,"method-not-allowed","method-not-allowed",-108023673),new cljs.core.Keyword(null,"gateway-timeout","gateway-timeout",699666147),new cljs.core.Keyword(null,"http-version-not-supported","http-version-not-supported",-847851583),new cljs.core.Keyword(null,"bad-gateway","bad-gateway",1203629050),new cljs.core.Keyword(null,"temporary-redirect","temporary-redirect",1675904222),new cljs.core.Keyword(null,"payment-required","payment-required",-846532084),new cljs.core.Keyword(null,"proxy-authentication-required","proxy-authentication-required",1911666581),new cljs.core.Keyword(null,"use-proxy","use-proxy",-501370822),new cljs.core.Keyword(null,"not-modified","not-modified",597560057),new cljs.core.Keyword(null,"unauthorized","unauthorized",-2089027806),new cljs.core.Keyword(null,"precondition-failed","precondition-failed",-430047674),new cljs.core.Keyword(null,"expectation-failed","expectation-failed",-1685971474),new cljs.core.Keyword(null,"internal-server-error","internal-server-error",-795953713),new cljs.core.Keyword(null,"not-implemented","not-implemented",1918806714),new cljs.core.Keyword(null,"see-other","see-other",286531018),new cljs.core.Keyword(null,"continue","continue",-207346553),new cljs.core.Keyword(null,"request-entity-too-large","request-entity-too-large",1041677666),new cljs.core.Keyword(null,"moved-permanently","moved-permanently",590604284),new cljs.core.Keyword(null,"request-timeout","request-timeout",-2047539823),new cljs.core.Keyword(null,"length-required","length-required",-1380021768),new cljs.core.Keyword(null,"created","created",-704993748),new cljs.core.Keyword(null,"found","found",-584700170),new cljs.core.Keyword(null,"accepted","accepted",-1953464374),new cljs.core.Keyword(null,"ok","ok",967785236),new cljs.core.Keyword(null,"service-unavailable","service-unavailable",751643155),new cljs.core.Keyword(null,"request-uri-too-large","request-uri-too-large",254200757),new cljs.core.Keyword(null,"not-found","not-found",-629079980),new cljs.core.Keyword(null,"non-authoritative-information","non-authoritative-information",1990094789),new cljs.core.Keyword(null,"conflict","conflict",1978796605),new cljs.core.Keyword(null,"bad-request","bad-request",-1466249863),new cljs.core.Keyword(null,"forbidden","forbidden",-1979448146),new cljs.core.Keyword(null,"not-acceptable","not-acceptable",1151521504)]);
/**
 * Turn error responses into `ExceptionInfo` instances, with the full
 *   response map as the attached data.  Additionally, a `:reason`
 *   value (e.g. `:service-unavailable`) will be used to augment the
 *   `:status` key.
 * 
 *   For uniformity, `:type` is provided as an alias for `:reason`, e.g.
 */
kvlt.middleware.error = kvlt.middleware.util.__GT_mw.call(null,new cljs.core.Keyword(null,"error","error",-978969032),null,(function (p__37994){
var map__37995 = p__37994;
var map__37995__$1 = (((((!((map__37995 == null))))?(((((map__37995.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37995.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37995):map__37995);
var resp = map__37995__$1;
var message = cljs.core.get.call(null,map__37995__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var status = cljs.core.get.call(null,map__37995__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var cause = cljs.core.get.call(null,map__37995__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var error = cljs.core.get.call(null,map__37995__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var reason = kvlt.middleware.status__GT_reason.call(null,status,error);
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.not.call(null,error);
if(and__4120__auto__){
return kvlt.middleware.unexceptional_status_QMARK_.call(null,status);
} else {
return and__4120__auto__;
}
})())){
return cljs.core.assoc.call(null,resp,new cljs.core.Keyword(null,"reason","reason",-2070751759),reason);
} else {
return cljs.core.ex_info.call(null,message,cljs.core.assoc.call(null,resp,new cljs.core.Keyword(null,"error","error",-978969032),(function (){var or__4131__auto__ = error;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return reason;
}
})(),new cljs.core.Keyword(null,"type","type",1174270348),reason,new cljs.core.Keyword(null,"reason","reason",-2070751759),reason),cause);
}
}));
kvlt.util.doc_examples_BANG_.call(null,new cljs.core.Var(function(){return kvlt.middleware.error;},new cljs.core.Symbol("kvlt.middleware","error","kvlt.middleware/error",1309338120,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"kvlt.middleware","kvlt.middleware",-1330994476,null),new cljs.core.Symbol(null,"error","error",661562495,null),"resources/public/cljs-out/dev/kvlt/middleware.cljc",13,1,325,325,cljs.core.List.EMPTY,"Turn error responses into `ExceptionInfo` instances, with the full\n  response map as the attached data.  Additionally, a `:reason`\n  value (e.g. `:service-unavailable`) will be used to augment the\n  `:status` key.\n\n  For uniformity, `:type` is provided as an alias for `:reason`, e.g.",(cljs.core.truth_(kvlt.middleware.error)?kvlt.middleware.error.cljs$lang$test:null)])),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),(500),new cljs.core.Keyword(null,"reason","reason",-2070751759),new cljs.core.Keyword(null,"internal-server-error","internal-server-error",-795953713),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"internal-server-error","internal-server-error",-795953713),new cljs.core.Keyword(null,"cause","cause",231901252),new cljs.core.Symbol(null,"error?","error?",1179842368,null),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null)], null)));

//# sourceMappingURL=middleware.js.map
