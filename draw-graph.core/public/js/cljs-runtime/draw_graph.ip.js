goog.provide('draw_graph.ip');
goog.require('cljs.core');
goog.require('kvlt.core');
goog.require('promesa.core');
goog.require('promesa.async_cljs');
goog.require('draw_graph.utils');
draw_graph.ip.rest_get = (function draw_graph$ip$rest_get(url){
return promesa.core.bind(promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(kvlt.core.request_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),url], null)),(function (e){
var G__36278 = new cljs.core.Keyword(null,"type","type",1174270348);
var fexpr__36277 = cljs.core.ex_data(e);
return (fexpr__36277.cljs$core$IFn$_invoke$arity$1 ? fexpr__36277.cljs$core$IFn$_invoke$arity$1(G__36278) : fexpr__36277.call(null,G__36278));
})),(function (p__36279){
var map__36280 = p__36279;
var map__36280__$1 = (((((!((map__36280 == null))))?(((((map__36280.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36280.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36280):map__36280);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36280__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36280__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
return promesa.core.promise(body);
}));
});
draw_graph.ip.ip_api_url = "http://ip-api.com/json/";
draw_graph.ip.extract_region = (function draw_graph$ip$extract_region(s){
return cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,/\//));
});
draw_graph.ip.region = (function draw_graph$ip$region(handler,error_fn){
return promesa.core.error.cljs$core$IFn$_invoke$arity$2(error_fn,promesa.core.map(handler,promesa.core.map(draw_graph.ip.extract_region,promesa.core.map(new cljs.core.Keyword(null,"timezone","timezone",1831928099),promesa.core.map(draw_graph.utils.json__GT_clj,draw_graph.ip.rest_get(draw_graph.ip.ip_api_url))))));
});

//# sourceMappingURL=draw_graph.ip.js.map
