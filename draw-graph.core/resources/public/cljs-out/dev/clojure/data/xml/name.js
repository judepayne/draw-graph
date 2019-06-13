// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('clojure.data.xml.name');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('clojure.data.xml.js.name');
goog.require('clojure.data.xml.protocols');
goog.require('goog.string.StringBuffer');
clojure.data.xml.name.parse_qname = clojure.data.xml.js.name.parse_qname;

cljs.core.alter_meta_BANG_(new cljs.core.Var(function(){return clojure.data.xml.name.parse_qname;},cljs.core.cst$sym$clojure$data$xml$name_SLASH_parse_DASH_qname,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$file,"resources/public/cljs-out/dev/clojure/data/xml/name.cljc",cljs.core.cst$kw$ns,cljs.core.cst$sym$clojure$data$xml$name,cljs.core.cst$kw$doc,null,cljs.core.cst$kw$line,23,cljs.core.cst$kw$column,1,cljs.core.cst$kw$name,cljs.core.cst$sym$parse_DASH_qname,cljs.core.cst$kw$test,(cljs.core.truth_(clojure.data.xml.name.parse_qname)?clojure.data.xml.name.parse_qname.cljs$lang$test:null),cljs.core.cst$kw$arglists,cljs.core.List.EMPTY], null)),cljs.core.constantly(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(new cljs.core.Var(function(){return clojure.data.xml.js.name.parse_qname;},cljs.core.cst$sym$clojure$data$xml$js$name_SLASH_parse_DASH_qname,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$clojure$data$xml$js$name,cljs.core.cst$sym$parse_DASH_qname,"resources/public/cljs-out/dev/clojure/data/xml/js/name.cljs",17,1,5,5,cljs.core.List.EMPTY,null,(cljs.core.truth_(clojure.data.xml.js.name.parse_qname)?clojure.data.xml.js.name.parse_qname.cljs$lang$test:null)]))),cljs.core.cst$kw$wrapped_DASH_by,new cljs.core.Var(function(){return clojure.data.xml.name.parse_qname;},cljs.core.cst$sym$clojure$data$xml$name_SLASH_parse_DASH_qname,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$file,"resources/public/cljs-out/dev/clojure/data/xml/name.cljc",cljs.core.cst$kw$ns,cljs.core.cst$sym$clojure$data$xml$name,cljs.core.cst$kw$doc,null,cljs.core.cst$kw$line,23,cljs.core.cst$kw$column,1,cljs.core.cst$kw$name,cljs.core.cst$sym$parse_DASH_qname,cljs.core.cst$kw$test,(cljs.core.truth_(clojure.data.xml.name.parse_qname)?clojure.data.xml.name.parse_qname.cljs$lang$test:null),cljs.core.cst$kw$arglists,cljs.core.List.EMPTY], null)))));

clojure.data.xml.name.encode_uri = clojure.data.xml.js.name.encode_uri;

cljs.core.alter_meta_BANG_(new cljs.core.Var(function(){return clojure.data.xml.name.encode_uri;},cljs.core.cst$sym$clojure$data$xml$name_SLASH_encode_DASH_uri,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$file,"resources/public/cljs-out/dev/clojure/data/xml/name.cljc",cljs.core.cst$kw$ns,cljs.core.cst$sym$clojure$data$xml$name,cljs.core.cst$kw$doc,null,cljs.core.cst$kw$line,23,cljs.core.cst$kw$column,1,cljs.core.cst$kw$name,cljs.core.cst$sym$encode_DASH_uri,cljs.core.cst$kw$test,(cljs.core.truth_(clojure.data.xml.name.encode_uri)?clojure.data.xml.name.encode_uri.cljs$lang$test:null),cljs.core.cst$kw$arglists,cljs.core.List.EMPTY], null)),cljs.core.constantly(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(new cljs.core.Var(function(){return clojure.data.xml.js.name.encode_uri;},cljs.core.cst$sym$clojure$data$xml$js$name_SLASH_encode_DASH_uri,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$clojure$data$xml$js$name,cljs.core.cst$sym$encode_DASH_uri,"resources/public/cljs-out/dev/clojure/data/xml/js/name.cljs",17,1,11,11,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$uri], null)),null,(cljs.core.truth_(clojure.data.xml.js.name.encode_uri)?clojure.data.xml.js.name.encode_uri.cljs$lang$test:null)]))),cljs.core.cst$kw$wrapped_DASH_by,new cljs.core.Var(function(){return clojure.data.xml.name.encode_uri;},cljs.core.cst$sym$clojure$data$xml$name_SLASH_encode_DASH_uri,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$file,"resources/public/cljs-out/dev/clojure/data/xml/name.cljc",cljs.core.cst$kw$ns,cljs.core.cst$sym$clojure$data$xml$name,cljs.core.cst$kw$doc,null,cljs.core.cst$kw$line,23,cljs.core.cst$kw$column,1,cljs.core.cst$kw$name,cljs.core.cst$sym$encode_DASH_uri,cljs.core.cst$kw$test,(cljs.core.truth_(clojure.data.xml.name.encode_uri)?clojure.data.xml.name.encode_uri.cljs$lang$test:null),cljs.core.cst$kw$arglists,cljs.core.List.EMPTY], null)))));

clojure.data.xml.name.decode_uri = clojure.data.xml.js.name.decode_uri;

cljs.core.alter_meta_BANG_(new cljs.core.Var(function(){return clojure.data.xml.name.decode_uri;},cljs.core.cst$sym$clojure$data$xml$name_SLASH_decode_DASH_uri,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$file,"resources/public/cljs-out/dev/clojure/data/xml/name.cljc",cljs.core.cst$kw$ns,cljs.core.cst$sym$clojure$data$xml$name,cljs.core.cst$kw$doc,null,cljs.core.cst$kw$line,23,cljs.core.cst$kw$column,1,cljs.core.cst$kw$name,cljs.core.cst$sym$decode_DASH_uri,cljs.core.cst$kw$test,(cljs.core.truth_(clojure.data.xml.name.decode_uri)?clojure.data.xml.name.decode_uri.cljs$lang$test:null),cljs.core.cst$kw$arglists,cljs.core.List.EMPTY], null)),cljs.core.constantly(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(new cljs.core.Var(function(){return clojure.data.xml.js.name.decode_uri;},cljs.core.cst$sym$clojure$data$xml$js$name_SLASH_decode_DASH_uri,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$clojure$data$xml$js$name,cljs.core.cst$sym$decode_DASH_uri,"resources/public/cljs-out/dev/clojure/data/xml/js/name.cljs",17,1,8,8,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ns], null)),null,(cljs.core.truth_(clojure.data.xml.js.name.decode_uri)?clojure.data.xml.js.name.decode_uri.cljs$lang$test:null)]))),cljs.core.cst$kw$wrapped_DASH_by,new cljs.core.Var(function(){return clojure.data.xml.name.decode_uri;},cljs.core.cst$sym$clojure$data$xml$name_SLASH_decode_DASH_uri,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$file,"resources/public/cljs-out/dev/clojure/data/xml/name.cljc",cljs.core.cst$kw$ns,cljs.core.cst$sym$clojure$data$xml$name,cljs.core.cst$kw$doc,null,cljs.core.cst$kw$line,23,cljs.core.cst$kw$column,1,cljs.core.cst$kw$name,cljs.core.cst$sym$decode_DASH_uri,cljs.core.cst$kw$test,(cljs.core.truth_(clojure.data.xml.name.decode_uri)?clojure.data.xml.name.decode_uri.cljs$lang$test:null),cljs.core.cst$kw$arglists,cljs.core.List.EMPTY], null)))));
clojure.data.xml.name.uri_symbol = (function clojure$data$xml$name$uri_symbol(uri){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((function (){var G__11314 = ["xmlns.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri)].join('');
return (clojure.data.xml.name.encode_uri.cljs$core$IFn$_invoke$arity$1 ? clojure.data.xml.name.encode_uri.cljs$core$IFn$_invoke$arity$1(G__11314) : clojure.data.xml.name.encode_uri.call(null,G__11314));
})());
});
clojure.data.xml.name.symbol_uri = (function clojure$data$xml$name$symbol_uri(ss){
var du = (function (){var G__11315 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(ss);
return (clojure.data.xml.name.decode_uri.cljs$core$IFn$_invoke$arity$1 ? clojure.data.xml.name.decode_uri.cljs$core$IFn$_invoke$arity$1(G__11315) : clojure.data.xml.name.decode_uri.call(null,G__11315));
})();
if(cljs.core.truth_(du.startsWith("xmlns."))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(du,(6));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Uri symbol not valid",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$sym,ss], null));
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
var G__11317 = arguments.length;
switch (G__11317) {
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
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(((clojure.string.blank_QMARK_(uri))?null:(function (){var G__11318 = ["xmlns.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri)].join('');
return (clojure.data.xml.name.encode_uri.cljs$core$IFn$_invoke$arity$1 ? clojure.data.xml.name.encode_uri.cljs$core$IFn$_invoke$arity$1(G__11318) : clojure.data.xml.name.encode_uri.call(null,G__11318));
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
var G__11320 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(ns,(6));
return (clojure.data.xml.name.decode_uri.cljs$core$IFn$_invoke$arity$1 ? clojure.data.xml.name.decode_uri.cljs$core$IFn$_invoke$arity$1(G__11320) : clojure.data.xml.name.decode_uri.call(null,G__11320));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("xmlns",ns)){
return clojure.data.xml.name.xmlns_uri;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Keyword ns is not an xmlns. Needs to be in the form :xmlns.<encoded-uri>/<local>",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$kw,kw__$1], null));
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
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Not an xmlns-attr name",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$qname,qn], null));
}

return "";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.xml.name.xmlns_uri,uri)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Not an xmlns-attr name",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$qname,qn], null));
}

return clojure.data.xml.name.qname_local(qn);
}
});
clojure.data.xml.name.legal_xmlns_binding_BANG_ = (function clojure$data$xml$name$legal_xmlns_binding_BANG_(prefix,uri){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("xml",prefix),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.xml.name.xml_uri,uri))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["The xmlns binding for prefix `xml` is fixed to `",clojure.data.xml.name.xml_uri,"`"].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$attempted_DASH_mapping,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$prefix,prefix,cljs.core.cst$kw$uri,uri], null)], null));
} else {
}

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("xmlns",prefix),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.xml.name.xmlns_uri,uri))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["The xmlns binding for prefix `xmlns` is fixed to `",clojure.data.xml.name.xmlns_uri,"`"].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$attempted_DASH_mapping,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$prefix,prefix,cljs.core.cst$kw$uri,uri], null)], null));
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
var G__11324 = cljs.core.keys(attrs);
var vec__11325 = G__11324;
var qn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11325,(0),null);
var attrs_SINGLEQUOTE_ = vec__11325;
var attrs_STAR___$1 = attrs_STAR_;
var xmlns_STAR___$1 = xmlns_STAR_;
var G__11324__$1 = G__11324;
while(true){
var attrs_STAR___$2 = attrs_STAR___$1;
var xmlns_STAR___$2 = xmlns_STAR___$1;
var vec__11333 = G__11324__$1;
var qn__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11333,(0),null);
var attrs_SINGLEQUOTE___$1 = vec__11333;
if(cljs.core.seq(attrs_SINGLEQUOTE___$1)){
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(attrs,qn__$1);
if(clojure.data.xml.name.xmlns_attr_QMARK_(qn__$1)){
var prefix = clojure.data.xml.name.xmlns_attr_prefix(qn__$1);
clojure.data.xml.name.legal_xmlns_binding_BANG_(prefix,val);

var G__11338 = attrs_STAR___$2;
var G__11339 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(xmlns_STAR___$2,prefix,val);
var G__11340 = cljs.core.next(attrs_SINGLEQUOTE___$1);
attrs_STAR___$1 = G__11338;
xmlns_STAR___$1 = G__11339;
G__11324__$1 = G__11340;
continue;
} else {
var G__11341 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(attrs_STAR___$2,qn__$1,val);
var G__11342 = xmlns_STAR___$2;
var G__11343 = cljs.core.next(attrs_SINGLEQUOTE___$1);
attrs_STAR___$1 = G__11341;
xmlns_STAR___$1 = G__11342;
G__11324__$1 = G__11343;
continue;
}
} else {
var G__11336 = cljs.core.persistent_BANG_(attrs_STAR___$2);
var G__11337 = cljs.core.persistent_BANG_(xmlns_STAR___$2);
return (cont.cljs$core$IFn$_invoke$arity$2 ? cont.cljs$core$IFn$_invoke$arity$2(G__11336,G__11337) : cont.call(null,G__11336,G__11337));
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
var G__11345 = arguments.length;
switch (G__11345) {
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
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Not bound: *gen-prefix-counter*",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$v,new cljs.core.Var(function(){return clojure.data.xml.name._STAR_gen_prefix_counter_STAR_;},cljs.core.cst$sym$clojure$data$xml$name_SLASH__STAR_gen_DASH_prefix_DASH_counter_STAR_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$dynamic,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$clojure$data$xml$name,cljs.core.cst$sym$_STAR_gen_DASH_prefix_DASH_counter_STAR_,"resources/public/cljs-out/dev/clojure/data/xml/name.cljc",23,1,true,188,190,cljs.core.List.EMPTY,"Thread local counter for a single document",(cljs.core.truth_(clojure.data.xml.name._STAR_gen_prefix_counter_STAR_)?clojure.data.xml.name._STAR_gen_prefix_counter_STAR_.cljs$lang$test:null)]))], null));
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
var G__11347 = n_STAR__STAR_;
n_STAR_ = G__11347;
continue;
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb);
}
break;
}
});

clojure.data.xml.name.gen_prefix.cljs$lang$maxFixedArity = 1;

