// Compiled by ClojureScript 1.10.520 {}
goog.provide('kvlt.event_source');
goog.require('cljs.core');
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
kvlt.event_source.format_event = (function (){var method_table__4613__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"kvlt.event-source","format-event"),((function (method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__){
return (function (format,event){
return format;
});})(method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
cljs.core._add_method.call(null,kvlt.event_source.format_event,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,e){
return e;
}));
cljs.core._add_method.call(null,kvlt.event_source.format_event,new cljs.core.Keyword(null,"edn","edn",1317840885),(function (_,e){
return cljs.reader.read_string.call(null,e);
}));
cljs.core._add_method.call(null,kvlt.event_source.format_event,new cljs.core.Keyword(null,"json","json",1279968570),(function (_,e){
return kvlt.platform.util.parse_json.call(null,e);
}));

//# sourceMappingURL=event_source.js.map
