// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('draw_graph.ip');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('kvlt.core');
goog.require('promesa.core');
goog.require('promesa.async_cljs');
goog.require('draw_graph.utils');
draw_graph.ip.rest_get = (function draw_graph$ip$rest_get(url){
return promesa.core.bind(promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(kvlt.core.request_BANG_(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$url,url], null)),(function (e){
var G__43419 = cljs.core.cst$kw$type;
var fexpr__43418 = cljs.core.ex_data(e);
return (fexpr__43418.cljs$core$IFn$_invoke$arity$1 ? fexpr__43418.cljs$core$IFn$_invoke$arity$1(G__43419) : fexpr__43418.call(null,G__43419));
})),(function (p__43420){
var map__43421 = p__43420;
var map__43421__$1 = (((((!((map__43421 == null))))?(((((map__43421.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43421.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43421):map__43421);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43421__$1,cljs.core.cst$kw$status);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43421__$1,cljs.core.cst$kw$body);
return promesa.core.promise(body);
}));
});
draw_graph.ip.ip_api_url = "http://ip-api.com/json/";
draw_graph.ip.extract_region = (function draw_graph$ip$extract_region(s){
return cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,/\//));
});
draw_graph.ip.region = (function draw_graph$ip$region(handler,error_fn){
return promesa.core.error.cljs$core$IFn$_invoke$arity$2(error_fn,promesa.core.map(handler,promesa.core.map(draw_graph.ip.extract_region,promesa.core.map(cljs.core.cst$kw$timezone,promesa.core.map(draw_graph.utils.json__GT_clj,draw_graph.ip.rest_get(draw_graph.ip.ip_api_url))))));
});
