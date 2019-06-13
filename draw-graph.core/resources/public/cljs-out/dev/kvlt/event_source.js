// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('kvlt.event_source');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.reader');
goog.require('kvlt.platform.util');
if((typeof kvlt !== 'undefined') && (typeof kvlt.event_source !== 'undefined') && (typeof kvlt.event_source.format_event !== 'undefined')){
} else {
/**
 * Dispatching on the (first) `format` param (corresponding
 *   to [[kvlt.core/event-source!]]'s `:format` param), transform an incoming event
 *   prior to placement on the source's channel.
 * 
 *   Implementations receive (and are expected to return the event map) not only
 *   its body.
 */
kvlt.event_source.format_event = (function (){var method_table__4613__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__35254 = cljs.core.get_global_hierarchy;
return (fexpr__35254.cljs$core$IFn$_invoke$arity$0 ? fexpr__35254.cljs$core$IFn$_invoke$arity$0() : fexpr__35254.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("kvlt.event-source","format-event"),((function (method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__){
return (function (format,event){
return format;
});})(method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__))
,cljs.core.cst$kw$default,hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
kvlt.event_source.format_event.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (_,e){
return e;
}));
kvlt.event_source.format_event.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$edn,(function (_,e){
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(e);
}));
kvlt.event_source.format_event.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$json,(function (_,e){
return kvlt.platform.util.parse_json(e);
}));
