// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('clojure.data.xml.js.name');
goog.require('cljs.core');
goog.require('cljs.core.constants');
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

var G__11258_11270 = clojure.data.xml.protocols.qname_local;
var G__11259_11271 = "string";
var G__11260_11272 = ((function (G__11258_11270,G__11259_11271){
return (function (s){
var vec__11261 = (clojure.data.xml.js.name.parse_qname.cljs$core$IFn$_invoke$arity$1 ? clojure.data.xml.js.name.parse_qname.cljs$core$IFn$_invoke$arity$1(s) : clojure.data.xml.js.name.parse_qname.call(null,s));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11261,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11261,(1),null);
var local = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11261,(2),null);
return local;
});})(G__11258_11270,G__11259_11271))
;
goog.object.set(G__11258_11270,G__11259_11271,G__11260_11272);

var G__11264_11273 = clojure.data.xml.protocols.qname_uri;
var G__11265_11274 = "string";
var G__11266_11275 = ((function (G__11264_11273,G__11265_11274){
return (function (s){
var vec__11267 = (clojure.data.xml.js.name.parse_qname.cljs$core$IFn$_invoke$arity$1 ? clojure.data.xml.js.name.parse_qname.cljs$core$IFn$_invoke$arity$1(s) : clojure.data.xml.js.name.parse_qname.call(null,s));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11267,(0),null);
var uri = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11267,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11267,(2),null);
return uri;
});})(G__11264_11273,G__11265_11274))
;
goog.object.set(G__11264_11273,G__11265_11274,G__11266_11275);
