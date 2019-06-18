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

var G__50183_50196 = clojure.data.xml.protocols.qname_local;
var G__50184_50197 = "string";
var G__50185_50198 = ((function (G__50183_50196,G__50184_50197){
return (function (s){
var vec__50187 = (clojure.data.xml.js.name.parse_qname.cljs$core$IFn$_invoke$arity$1 ? clojure.data.xml.js.name.parse_qname.cljs$core$IFn$_invoke$arity$1(s) : clojure.data.xml.js.name.parse_qname.call(null,s));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50187,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50187,(1),null);
var local = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50187,(2),null);
return local;
});})(G__50183_50196,G__50184_50197))
;
goog.object.set(G__50183_50196,G__50184_50197,G__50185_50198);

var G__50190_50203 = clojure.data.xml.protocols.qname_uri;
var G__50191_50204 = "string";
var G__50192_50205 = ((function (G__50190_50203,G__50191_50204){
return (function (s){
var vec__50193 = (clojure.data.xml.js.name.parse_qname.cljs$core$IFn$_invoke$arity$1 ? clojure.data.xml.js.name.parse_qname.cljs$core$IFn$_invoke$arity$1(s) : clojure.data.xml.js.name.parse_qname.call(null,s));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50193,(0),null);
var uri = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50193,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50193,(2),null);
return uri;
});})(G__50190_50203,G__50191_50204))
;
goog.object.set(G__50190_50203,G__50191_50204,G__50192_50205);

//# sourceMappingURL=clojure.data.xml.js.name.js.map
