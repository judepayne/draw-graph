goog.provide('clojure.data.xml.name');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.data.xml.js.name');
goog.require('clojure.data.xml.protocols');
goog.require('goog.string.StringBuffer');
clojure.data.xml.name.parse_qname = clojure.data.xml.js.name.parse_qname;

cljs.core.alter_meta_BANG_(new cljs.core.Var(function(){return clojure.data.xml.name.parse_qname;},new cljs.core.Symbol("clojure.data.xml.name","parse-qname","clojure.data.xml.name/parse-qname",-631519353,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",-1269645878),"clojure/data/xml/name.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"clojure.data.xml.name","clojure.data.xml.name",1709632289,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),23,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"parse-qname","parse-qname",-503996965,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(clojure.data.xml.name.parse_qname)?clojure.data.xml.name.parse_qname.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY], null)),cljs.core.constantly(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(new cljs.core.Var(function(){return clojure.data.xml.js.name.parse_qname;},new cljs.core.Symbol("clojure.data.xml.js.name","parse-qname","clojure.data.xml.js.name/parse-qname",786468634,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"clojure.data.xml.js.name","clojure.data.xml.js.name",-527694126,null),new cljs.core.Symbol(null,"parse-qname","parse-qname",-503996965,null),"clojure/data/xml/js/name.cljs",17,1,5,5,cljs.core.List.EMPTY,null,(cljs.core.truth_(clojure.data.xml.js.name.parse_qname)?clojure.data.xml.js.name.parse_qname.cljs$lang$test:null)]))),new cljs.core.Keyword(null,"wrapped-by","wrapped-by",1051044074),new cljs.core.Var(function(){return clojure.data.xml.name.parse_qname;},new cljs.core.Symbol("clojure.data.xml.name","parse-qname","clojure.data.xml.name/parse-qname",-631519353,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",-1269645878),"clojure/data/xml/name.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"clojure.data.xml.name","clojure.data.xml.name",1709632289,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),23,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"parse-qname","parse-qname",-503996965,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(clojure.data.xml.name.parse_qname)?clojure.data.xml.name.parse_qname.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY], null)))));

clojure.data.xml.name.encode_uri = clojure.data.xml.js.name.encode_uri;

cljs.core.alter_meta_BANG_(new cljs.core.Var(function(){return clojure.data.xml.name.encode_uri;},new cljs.core.Symbol("clojure.data.xml.name","encode-uri","clojure.data.xml.name/encode-uri",-307671031,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",-1269645878),"clojure/data/xml/name.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"clojure.data.xml.name","clojure.data.xml.name",1709632289,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),23,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"encode-uri","encode-uri",-1221099955,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(clojure.data.xml.name.encode_uri)?clojure.data.xml.name.encode_uri.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY], null)),cljs.core.constantly(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(new cljs.core.Var(function(){return clojure.data.xml.js.name.encode_uri;},new cljs.core.Symbol("clojure.data.xml.js.name","encode-uri","clojure.data.xml.js.name/encode-uri",1914989452,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"clojure.data.xml.js.name","clojure.data.xml.js.name",-527694126,null),new cljs.core.Symbol(null,"encode-uri","encode-uri",-1221099955,null),"clojure/data/xml/js/name.cljs",17,1,11,11,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"uri","uri",865819680,null)], null)),null,(cljs.core.truth_(clojure.data.xml.js.name.encode_uri)?clojure.data.xml.js.name.encode_uri.cljs$lang$test:null)]))),new cljs.core.Keyword(null,"wrapped-by","wrapped-by",1051044074),new cljs.core.Var(function(){return clojure.data.xml.name.encode_uri;},new cljs.core.Symbol("clojure.data.xml.name","encode-uri","clojure.data.xml.name/encode-uri",-307671031,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",-1269645878),"clojure/data/xml/name.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"clojure.data.xml.name","clojure.data.xml.name",1709632289,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),23,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"encode-uri","encode-uri",-1221099955,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(clojure.data.xml.name.encode_uri)?clojure.data.xml.name.encode_uri.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY], null)))));

clojure.data.xml.name.decode_uri = clojure.data.xml.js.name.decode_uri;

cljs.core.alter_meta_BANG_(new cljs.core.Var(function(){return clojure.data.xml.name.decode_uri;},new cljs.core.Symbol("clojure.data.xml.name","decode-uri","clojure.data.xml.name/decode-uri",-1422284784,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",-1269645878),"clojure/data/xml/name.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"clojure.data.xml.name","clojure.data.xml.name",1709632289,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),23,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"decode-uri","decode-uri",1921734364,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(clojure.data.xml.name.decode_uri)?clojure.data.xml.name.decode_uri.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY], null)),cljs.core.constantly(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(new cljs.core.Var(function(){return clojure.data.xml.js.name.decode_uri;},new cljs.core.Symbol("clojure.data.xml.js.name","decode-uri","clojure.data.xml.js.name/decode-uri",1069441439,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"clojure.data.xml.js.name","clojure.data.xml.js.name",-527694126,null),new cljs.core.Symbol(null,"decode-uri","decode-uri",1921734364,null),"clojure/data/xml/js/name.cljs",17,1,8,8,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ns","ns",2082130287,null)], null)),null,(cljs.core.truth_(clojure.data.xml.js.name.decode_uri)?clojure.data.xml.js.name.decode_uri.cljs$lang$test:null)]))),new cljs.core.Keyword(null,"wrapped-by","wrapped-by",1051044074),new cljs.core.Var(function(){return clojure.data.xml.name.decode_uri;},new cljs.core.Symbol("clojure.data.xml.name","decode-uri","clojure.data.xml.name/decode-uri",-1422284784,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"file","file",-1269645878),"clojure/data/xml/name.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"clojure.data.xml.name","clojure.data.xml.name",1709632289,null),new cljs.core.Keyword(null,"doc","doc",1913296891),null,new cljs.core.Keyword(null,"line","line",212345235),23,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"decode-uri","decode-uri",1921734364,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(clojure.data.xml.name.decode_uri)?clojure.data.xml.name.decode_uri.cljs$lang$test:null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY], null)))));
clojure.data.xml.name.uri_symbol = (function clojure$data$xml$name$uri_symbol(uri){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((function (){var G__50515 = ["xmlns.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri)].join('');
return (clojure.data.xml.name.encode_uri.cljs$core$IFn$_invoke$arity$1 ? clojure.data.xml.name.encode_uri.cljs$core$IFn$_invoke$arity$1(G__50515) : clojure.data.xml.name.encode_uri.call(null,G__50515));
})());
});
clojure.data.xml.name.symbol_uri = (function clojure$data$xml$name$symbol_uri(ss){
var du = (function (){var G__50516 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(ss);
return (clojure.data.xml.name.decode_uri.cljs$core$IFn$_invoke$arity$1 ? clojure.data.xml.name.decode_uri.cljs$core$IFn$_invoke$arity$1(G__50516) : clojure.data.xml.name.decode_uri.call(null,G__50516));
})();
if(cljs.core.truth_(du.startsWith("xmlns."))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(du,(6));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Uri symbol not valid",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sym","sym",-1444860305),ss], null));
}
});
/**
 * Get the namespace uri for this qname
 */
clojure.data.xml.name.qname_uri = (function clojure$data$xml$name$qname_uri(v){
return clojure.data.xml.protocols.qname_uri(v);
});
/**
 * Get the name for this qname
 */
clojure.data.xml.name.qname_local = (function clojure$data$xml$name$qname_local(v){
return clojure.data.xml.protocols.qname_local(v);
});
clojure.data.xml.name.qname = (function clojure$data$xml$name$qname(var_args){
var G__50527 = arguments.length;
switch (G__50527) {
case 1:
return clojure.data.xml.name.qname.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.data.xml.name.qname.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.xml.name.qname.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.xml.name.qname.cljs$core$IFn$_invoke$arity$1 = (function (local){
return clojure.data.xml.name.qname.cljs$core$IFn$_invoke$arity$2("",local);
});

clojure.data.xml.name.qname.cljs$core$IFn$_invoke$arity$2 = (function (uri,local){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(((clojure.string.blank_QMARK_(uri))?null:(function (){var G__50529 = ["xmlns.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri)].join('');
return (clojure.data.xml.name.encode_uri.cljs$core$IFn$_invoke$arity$1 ? clojure.data.xml.name.encode_uri.cljs$core$IFn$_invoke$arity$1(G__50529) : clojure.data.xml.name.encode_uri.call(null,G__50529));
})()),local);
});

clojure.data.xml.name.qname.cljs$core$IFn$_invoke$arity$3 = (function (uri,local,prefix){
return clojure.data.xml.name.qname.cljs$core$IFn$_invoke$arity$2(uri,local);
});

clojure.data.xml.name.qname.cljs$lang$maxFixedArity = 3;

clojure.data.xml.name.namespaced_QMARK_ = (function clojure$data$xml$name$namespaced_QMARK_(qn){
return (!(clojure.string.blank_QMARK_(clojure.data.xml.name.qname_uri(qn))));
});
clojure.data.xml.name.clj_ns_name = (function clojure$data$xml$name$clj_ns_name(ns){
if((ns instanceof cljs.core.Namespace)){
return cljs.core.ns_name(ns);
} else {
if((ns instanceof cljs.core.Keyword)){
return cljs.core.name(ns);
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns);

}
}
});
clojure.data.xml.name.xmlns_uri = "http://www.w3.org/2000/xmlns/";
clojure.data.xml.name.xml_uri = "http://www.w3.org/XML/1998/namespace";
cljs.core.Keyword.prototype.clojure$data$xml$protocols$AsQName$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.clojure$data$xml$protocols$AsQName$qname_local$arity$1 = (function (kw){
var kw__$1 = this;
return cljs.core.name(kw__$1);
});

cljs.core.Keyword.prototype.clojure$data$xml$protocols$AsQName$qname_uri$arity$1 = (function (kw){
var kw__$1 = this;
var temp__5718__auto__ = cljs.core.namespace(kw__$1);
if(cljs.core.truth_(temp__5718__auto__)){
var ns = temp__5718__auto__;
if(cljs.core.truth_(ns.startsWith("xmlns."))){
var G__50534 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(ns,(6));
return (clojure.data.xml.name.decode_uri.cljs$core$IFn$_invoke$arity$1 ? clojure.data.xml.name.decode_uri.cljs$core$IFn$_invoke$arity$1(G__50534) : clojure.data.xml.name.decode_uri.call(null,G__50534));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("xmlns",ns)){
return clojure.data.xml.name.xmlns_uri;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Keyword ns is not an xmlns. Needs to be in the form :xmlns.<encoded-uri>/<local>",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"kw","kw",1158308175),kw__$1], null));
}
}
} else {
return "";
}
});
clojure.data.xml.name.as_qname = (function clojure$data$xml$name$as_qname(n){
return clojure.data.xml.name.qname.cljs$core$IFn$_invoke$arity$2(clojure.data.xml.name.qname_uri(n),clojure.data.xml.name.qname_local(n));
});
/**
 * Dummy file name for :require'ing xmlns uri
 */
clojure.data.xml.name.uri_file = (function clojure$data$xml$name$uri_file(uri){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(cljs.core.name(clojure.data.xml.name.uri_symbol(uri)),".","/")),".cljc"].join('');
});
/**
 * Shell command to create a dummy file for xmlns. Execute from a source root.
 */
clojure.data.xml.name.print_uri_file_command_BANG_ = (function clojure$data$xml$name$print_uri_file_command_BANG_(uri){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["echo \"(ns",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.data.xml.name.uri_symbol(uri)),")\" >"].join(''),clojure.data.xml.name.uri_file(uri)], 0));
});
/**
 * Is this qname an xmlns declaration?
 */
clojure.data.xml.name.xmlns_attr_QMARK_ = (function clojure$data$xml$name$xmlns_attr_QMARK_(qn){
var uri = clojure.data.xml.name.qname_uri(qn);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.xml.name.xmlns_uri,uri)) || (((clojure.string.blank_QMARK_(uri)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("xmlns",clojure.data.xml.name.qname_local(qn))))));
});
clojure.data.xml.name.xmlns_attr_prefix = (function clojure$data$xml$name$xmlns_attr_prefix(qn){
var uri = clojure.data.xml.name.qname_uri(qn);
if(clojure.string.blank_QMARK_(uri)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("xmlns",clojure.data.xml.name.qname_local(qn))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Not an xmlns-attr name",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"qname","qname",-1983612179),qn], null));
}

return "";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.xml.name.xmlns_uri,uri)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Not an xmlns-attr name",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"qname","qname",-1983612179),qn], null));
}

return clojure.data.xml.name.qname_local(qn);
}
});
clojure.data.xml.name.legal_xmlns_binding_BANG_ = (function clojure$data$xml$name$legal_xmlns_binding_BANG_(prefix,uri){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("xml",prefix),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.xml.name.xml_uri,uri))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["The xmlns binding for prefix `xml` is fixed to `",clojure.data.xml.name.xml_uri,"`"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"attempted-mapping","attempted-mapping",1862354839),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"prefix","prefix",-265908465),prefix,new cljs.core.Keyword(null,"uri","uri",-774711847),uri], null)], null));
} else {
}

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("xmlns",prefix),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.xml.name.xmlns_uri,uri))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["The xmlns binding for prefix `xmlns` is fixed to `",clojure.data.xml.name.xmlns_uri,"`"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"attempted-mapping","attempted-mapping",1862354839),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"prefix","prefix",-265908465),prefix,new cljs.core.Keyword(null,"uri","uri",-774711847),uri], null)], null));
} else {
return null;
}
});
/**
 * Call cont with two args: attributes and xmlns attributes
 */
clojure.data.xml.name.separate_xmlns = (function clojure$data$xml$name$separate_xmlns(attrs,cont){
var attrs_STAR_ = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
var xmlns_STAR_ = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
var G__50549 = cljs.core.keys(attrs);
var vec__50550 = G__50549;
var qn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50550,(0),null);
var attrs_SINGLEQUOTE_ = vec__50550;
var attrs_STAR___$1 = attrs_STAR_;
var xmlns_STAR___$1 = xmlns_STAR_;
var G__50549__$1 = G__50549;
while(true){
var attrs_STAR___$2 = attrs_STAR___$1;
var xmlns_STAR___$2 = xmlns_STAR___$1;
var vec__50559 = G__50549__$1;
var qn__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50559,(0),null);
var attrs_SINGLEQUOTE___$1 = vec__50559;
if(cljs.core.seq(attrs_SINGLEQUOTE___$1)){
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(attrs,qn__$1);
if(clojure.data.xml.name.xmlns_attr_QMARK_(qn__$1)){
var prefix = clojure.data.xml.name.xmlns_attr_prefix(qn__$1);
clojure.data.xml.name.legal_xmlns_binding_BANG_(prefix,val);

var G__50630 = attrs_STAR___$2;
var G__50631 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(xmlns_STAR___$2,prefix,val);
var G__50632 = cljs.core.next(attrs_SINGLEQUOTE___$1);
attrs_STAR___$1 = G__50630;
xmlns_STAR___$1 = G__50631;
G__50549__$1 = G__50632;
continue;
} else {
var G__50633 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(attrs_STAR___$2,qn__$1,val);
var G__50634 = xmlns_STAR___$2;
var G__50635 = cljs.core.next(attrs_SINGLEQUOTE___$1);
attrs_STAR___$1 = G__50633;
xmlns_STAR___$1 = G__50634;
G__50549__$1 = G__50635;
continue;
}
} else {
var G__50562 = cljs.core.persistent_BANG_(attrs_STAR___$2);
var G__50563 = cljs.core.persistent_BANG_(xmlns_STAR___$2);
return (cont.cljs$core$IFn$_invoke$arity$2 ? cont.cljs$core$IFn$_invoke$arity$2(G__50562,G__50563) : cont.call(null,G__50562,G__50563));
}
break;
}
});
clojure.data.xml.name.prefix_alphabet = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(String.fromCharCode,cljs.core.range.cljs$core$IFn$_invoke$arity$2("a".charCodeAt((0)),("z".charCodeAt((0)) + (1)))));
/**
 * Generates an xml prefix.
 * Zero-arity can only be called, when *gen-prefix-counter* is bound and will increment it.
 */
clojure.data.xml.name.gen_prefix = (function clojure$data$xml$name$gen_prefix(var_args){
var G__50574 = arguments.length;
switch (G__50574) {
case 0:
return clojure.data.xml.name.gen_prefix.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.data.xml.name.gen_prefix.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.xml.name.gen_prefix.cljs$core$IFn$_invoke$arity$0 = (function (){
var c = clojure.data.xml.name._STAR_gen_prefix_counter_STAR_;
if((void 0 === c)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Not bound: *gen-prefix-counter*",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.Var(function(){return clojure.data.xml.name._STAR_gen_prefix_counter_STAR_;},new cljs.core.Symbol("clojure.data.xml.name","*gen-prefix-counter*","clojure.data.xml.name/*gen-prefix-counter*",499226926,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"clojure.data.xml.name","clojure.data.xml.name",1709632289,null),new cljs.core.Symbol(null,"*gen-prefix-counter*","*gen-prefix-counter*",1689494762,null),"clojure/data/xml/name.cljc",23,1,true,188,190,cljs.core.List.EMPTY,"Thread local counter for a single document",(cljs.core.truth_(clojure.data.xml.name._STAR_gen_prefix_counter_STAR_)?clojure.data.xml.name._STAR_gen_prefix_counter_STAR_.cljs$lang$test:null)]))], null));
} else {
}

clojure.data.xml.name._STAR_gen_prefix_counter_STAR_ = (c + (1));

return clojure.data.xml.name.gen_prefix.cljs$core$IFn$_invoke$arity$1(c);
});

clojure.data.xml.name.gen_prefix.cljs$core$IFn$_invoke$arity$1 = (function (n){
var cnt = clojure.data.xml.name.prefix_alphabet.length;
var sb = (new goog.string.StringBuffer());
var n_STAR_ = n;
while(true){
var ch = cljs.core.mod(n_STAR_,cnt);
var n_STAR__STAR_ = cljs.core.quot(n_STAR_,cnt);
sb.append((clojure.data.xml.name.prefix_alphabet[ch]));

if((n_STAR__STAR_ > (0))){
var G__50644 = n_STAR__STAR_;
n_STAR_ = G__50644;
continue;
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb);
}
break;
}
});

clojure.data.xml.name.gen_prefix.cljs$lang$maxFixedArity = 1;


//# sourceMappingURL=clojure.data.xml.name.js.map
