// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('kvlt.websocket');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.reader');
goog.require('kvlt.platform.util');
if((typeof kvlt !== 'undefined') && (typeof kvlt.websocket !== 'undefined') && (typeof kvlt.websocket.format_outgoing !== 'undefined')){
} else {
/**
 * Transform outgoing websocket messages.
 * 
 *   Symbolic format name + arbitrary message -> String
 */
kvlt.websocket.format_outgoing = (function (){var method_table__4613__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__30425 = cljs.core.get_global_hierarchy;
return (fexpr__30425.cljs$core$IFn$_invoke$arity$0 ? fexpr__30425.cljs$core$IFn$_invoke$arity$0() : fexpr__30425.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("kvlt.websocket","format-outgoing"),((function (method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__){
return (function (format,msg){
return format;
});})(method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__))
,cljs.core.cst$kw$default,hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
kvlt.websocket.format_outgoing.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (_,x){
return x;
}));
kvlt.websocket.format_outgoing.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$edn,(function (_,x){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
}));
kvlt.websocket.format_outgoing.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$json,(function (_,x){
return kvlt.platform.util.encode_json(x);
}));
if((typeof kvlt !== 'undefined') && (typeof kvlt.websocket !== 'undefined') && (typeof kvlt.websocket.format_incoming !== 'undefined')){
} else {
/**
 * Transform incoming websocket messages.
 * 
 *   Symbolic format name + string -> arbitrary message
 */
kvlt.websocket.format_incoming = (function (){var method_table__4613__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__30426 = cljs.core.get_global_hierarchy;
return (fexpr__30426.cljs$core$IFn$_invoke$arity$0 ? fexpr__30426.cljs$core$IFn$_invoke$arity$0() : fexpr__30426.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("kvlt.websocket","format-incoming"),((function (method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__){
return (function (format,msg){
return format;
});})(method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__))
,cljs.core.cst$kw$default,hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
kvlt.websocket.format_incoming.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (_,x){
return x;
}));
kvlt.websocket.format_incoming.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$edn,(function (_,x){
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(x);
}));
kvlt.websocket.format_incoming.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$json,(function (_,x){
return kvlt.platform.util.parse_json(x);
}));
