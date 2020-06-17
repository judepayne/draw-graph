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
kvlt.websocket.format_outgoing = (function (){var method_table__4672__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4673__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4674__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4675__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4676__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__44897 = cljs.core.get_global_hierarchy;
return (fexpr__44897.cljs$core$IFn$_invoke$arity$0 ? fexpr__44897.cljs$core$IFn$_invoke$arity$0() : fexpr__44897.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("kvlt.websocket","format-outgoing"),(function (format,msg){
return format;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4676__auto__,method_table__4672__auto__,prefer_table__4673__auto__,method_cache__4674__auto__,cached_hierarchy__4675__auto__));
})();
}
kvlt.websocket.format_outgoing.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,x){
return x;
}));
kvlt.websocket.format_outgoing.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"edn","edn",1317840885),(function (_,x){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
}));
kvlt.websocket.format_outgoing.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"json","json",1279968570),(function (_,x){
return kvlt.platform.util.encode_json(x);
}));
if((typeof kvlt !== 'undefined') && (typeof kvlt.websocket !== 'undefined') && (typeof kvlt.websocket.format_incoming !== 'undefined')){
} else {
/**
 * Transform incoming websocket messages.
 * 
 *   Symbolic format name + string -> arbitrary message
 */
kvlt.websocket.format_incoming = (function (){var method_table__4672__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4673__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4674__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4675__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4676__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__44900 = cljs.core.get_global_hierarchy;
return (fexpr__44900.cljs$core$IFn$_invoke$arity$0 ? fexpr__44900.cljs$core$IFn$_invoke$arity$0() : fexpr__44900.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("kvlt.websocket","format-incoming"),(function (format,msg){
return format;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4676__auto__,method_table__4672__auto__,prefer_table__4673__auto__,method_cache__4674__auto__,cached_hierarchy__4675__auto__));
})();
}
kvlt.websocket.format_incoming.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,x){
return x;
}));
kvlt.websocket.format_incoming.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"edn","edn",1317840885),(function (_,x){
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(x);
}));
kvlt.websocket.format_incoming.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"json","json",1279968570),(function (_,x){
return kvlt.platform.util.parse_json(x);
}));

//# sourceMappingURL=kvlt.websocket.js.map
