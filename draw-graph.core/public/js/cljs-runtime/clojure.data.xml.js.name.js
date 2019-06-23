goog.provide('clojure.data.xml.js.name');
goog.require('cljs.core');
goog.require('clojure.data.xml.protocols');
goog.require('clojure.string');
clojure.data.xml.js.name.parse_qname = cljs.core.memoize(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.re_matches,/(?:\{([^}]+)\})?([^{]*)/));
clojure.data.xml.js.name.decode_uri = (function clojure$data$xml$js$name$decode_uri(ns){
return decodeURIComponent(ns);
});
clojure.data.xml.js.name.encode_uri = (function clojure$data$xml$js$name$encode_uri(uri){
return encodeURIComponent(uri);
});
goog.object.set(clojure.data.xml.protocols.AsQName,"string",true);

var G__50352_50369 = clojure.data.xml.protocols.qname_local;
var G__50353_50370 = "string";
var G__50354_50371 = ((function (G__50352_50369,G__50353_50370){
return (function (s){
var vec__50355 = (clojure.data.xml.js.name.parse_qname.cljs$core$IFn$_invoke$arity$1 ? clojure.data.xml.js.name.parse_qname.cljs$core$IFn$_invoke$arity$1(s) : clojure.data.xml.js.name.parse_qname.call(null,s));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50355,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50355,(1),null);
var local = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50355,(2),null);
return local;
});})(G__50352_50369,G__50353_50370))
;
goog.object.set(G__50352_50369,G__50353_50370,G__50354_50371);

var G__50360_50372 = clojure.data.xml.protocols.qname_uri;
var G__50361_50373 = "string";
var G__50362_50374 = ((function (G__50360_50372,G__50361_50373){
return (function (s){
var vec__50363 = (clojure.data.xml.js.name.parse_qname.cljs$core$IFn$_invoke$arity$1 ? clojure.data.xml.js.name.parse_qname.cljs$core$IFn$_invoke$arity$1(s) : clojure.data.xml.js.name.parse_qname.call(null,s));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50363,(0),null);
var uri = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50363,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50363,(2),null);
return uri;
});})(G__50360_50372,G__50361_50373))
;
goog.object.set(G__50360_50372,G__50361_50373,G__50362_50374);

//# sourceMappingURL=clojure.data.xml.js.name.js.map
