// Compiled by ClojureScript 1.10.520 {}
goog.provide('kvlt.websocket');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('kvlt.platform.util');
if((typeof kvlt !== 'undefined') && (typeof kvlt.websocket !== 'undefined') && (typeof kvlt.websocket.format_outgoing !== 'undefined')){
} else {
/**
 * Transform outgoing websocket messages.
 * 
 *   Symbolic format name + arbitrary message -> String
 */
kvlt.websocket.format_outgoing = (function (){var method_table__4613__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"kvlt.websocket","format-outgoing"),((function (method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__){
return (function (format,msg){
return format;
});})(method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
cljs.core._add_method.call(null,kvlt.websocket.format_outgoing,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,x){
return x;
}));
cljs.core._add_method.call(null,kvlt.websocket.format_outgoing,new cljs.core.Keyword(null,"edn","edn",1317840885),(function (_,x){
return cljs.core.pr_str.call(null,x);
}));
cljs.core._add_method.call(null,kvlt.websocket.format_outgoing,new cljs.core.Keyword(null,"json","json",1279968570),(function (_,x){
return kvlt.platform.util.encode_json.call(null,x);
}));
if((typeof kvlt !== 'undefined') && (typeof kvlt.websocket !== 'undefined') && (typeof kvlt.websocket.format_incoming !== 'undefined')){
} else {
/**
 * Transform incoming websocket messages.
 * 
 *   Symbolic format name + string -> arbitrary message
 */
kvlt.websocket.format_incoming = (function (){var method_table__4613__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"kvlt.websocket","format-incoming"),((function (method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__){
return (function (format,msg){
return format;
});})(method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
cljs.core._add_method.call(null,kvlt.websocket.format_incoming,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,x){
return x;
}));
cljs.core._add_method.call(null,kvlt.websocket.format_incoming,new cljs.core.Keyword(null,"edn","edn",1317840885),(function (_,x){
return cljs.reader.read_string.call(null,x);
}));
cljs.core._add_method.call(null,kvlt.websocket.format_incoming,new cljs.core.Keyword(null,"json","json",1279968570),(function (_,x){
return kvlt.platform.util.parse_json.call(null,x);
}));

//# sourceMappingURL=websocket.js.map
