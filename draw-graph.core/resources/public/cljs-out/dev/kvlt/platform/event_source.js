// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('kvlt.platform.event_source');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('kvlt.event_source');
goog.require('cljs.core.async');
goog.require('taoensso.timbre');
goog.require('kvlt.util');
kvlt.platform.event_source.EventSource = (((typeof EventSource !== 'undefined'))?EventSource:require("eventsource"));
kvlt.platform.event_source.event__GT_map = (function kvlt$platform$event_source$event__GT_map(e,format){
var G__35288 = format;
var G__35289 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,cljs.core.not_empty(e.lastEventId),cljs.core.cst$kw$data,e.data,cljs.core.cst$kw$type,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(e.type)], null);
return (kvlt.event_source.format_event.cljs$core$IFn$_invoke$arity$2 ? kvlt.event_source.format_event.cljs$core$IFn$_invoke$arity$2(G__35288,G__35289) : kvlt.event_source.format_event.call(null,G__35288,G__35289));
});
kvlt.platform.event_source.add_listeners_BANG_ = (function kvlt$platform$event_source$add_listeners_BANG_(source,chan,types,format){
var seq__35290 = cljs.core.seq(types);
var chunk__35291 = null;
var count__35292 = (0);
var i__35293 = (0);
while(true){
if((i__35293 < count__35292)){
var t = chunk__35291.cljs$core$IIndexed$_nth$arity$2(null,i__35293);
source.addEventListener(cljs.core.name(t),((function (seq__35290,chunk__35291,count__35292,i__35293,t){
return (function (e){
if(cljs.core.truth_(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,kvlt.platform.event_source.event__GT_map(e,format)))){
return null;
} else {
return source.close();
}
});})(seq__35290,chunk__35291,count__35292,i__35293,t))
);


var G__35294 = seq__35290;
var G__35295 = chunk__35291;
var G__35296 = count__35292;
var G__35297 = (i__35293 + (1));
seq__35290 = G__35294;
chunk__35291 = G__35295;
count__35292 = G__35296;
i__35293 = G__35297;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__35290);
if(temp__5720__auto__){
var seq__35290__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35290__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35290__$1);
var G__35298 = cljs.core.chunk_rest(seq__35290__$1);
var G__35299 = c__4550__auto__;
var G__35300 = cljs.core.count(c__4550__auto__);
var G__35301 = (0);
seq__35290 = G__35298;
chunk__35291 = G__35299;
count__35292 = G__35300;
i__35293 = G__35301;
continue;
} else {
var t = cljs.core.first(seq__35290__$1);
source.addEventListener(cljs.core.name(t),((function (seq__35290,chunk__35291,count__35292,i__35293,t,seq__35290__$1,temp__5720__auto__){
return (function (e){
if(cljs.core.truth_(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,kvlt.platform.event_source.event__GT_map(e,format)))){
return null;
} else {
return source.close();
}
});})(seq__35290,chunk__35291,count__35292,i__35293,t,seq__35290__$1,temp__5720__auto__))
);


var G__35302 = cljs.core.next(seq__35290__$1);
var G__35303 = null;
var G__35304 = (0);
var G__35305 = (0);
seq__35290 = G__35302;
chunk__35291 = G__35303;
count__35292 = G__35304;
i__35293 = G__35305;
continue;
}
} else {
return null;
}
}
break;
}
});
kvlt.platform.event_source.request_BANG_ = (function kvlt$platform$event_source$request_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___35314 = arguments.length;
var i__4731__auto___35315 = (0);
while(true){
if((i__4731__auto___35315 < len__4730__auto___35314)){
args__4736__auto__.push((arguments[i__4731__auto___35315]));

var G__35316 = (i__4731__auto___35315 + (1));
i__4731__auto___35315 = G__35316;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return kvlt.platform.event_source.request_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

kvlt.platform.event_source.request_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__35308){
var vec__35309 = p__35308;
var map__35312 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35309,(0),null);
var map__35312__$1 = (((((!((map__35312 == null))))?(((((map__35312.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35312.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35312):map__35312);
var events = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35312__$1,cljs.core.cst$kw$events,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$message,null], null), null));
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35312__$1,cljs.core.cst$kw$format,cljs.core.cst$kw$string);
var chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35312__$1,cljs.core.cst$kw$chan);
var close_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35312__$1,cljs.core.cst$kw$close_QMARK_,true);
var chan__$1 = (function (){var or__4131__auto__ = chan;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
}
})();
var source = (new kvlt.platform.event_source.EventSource(url));
kvlt.platform.event_source.add_listeners_BANG_(source,chan__$1,events,format);

source.onerror = ((function (chan__$1,source,vec__35309,map__35312,map__35312__$1,events,format,chan,close_QMARK_){
return (function (_){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"kvlt.platform.event-source","/private/var/folders/t5/f3xh0rdx5ds8d5rn2wr52fh40000gn/T/form-init8747378136274606403.clj",36,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (chan__$1,source,vec__35309,map__35312,map__35312__$1,events,format,chan,close_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SSE error, closing source",url], null);
});})(chan__$1,source,vec__35309,map__35312,map__35312__$1,events,format,chan,close_QMARK_))
,null)),null,-78438845);

source.close();

if(cljs.core.truth_(close_QMARK_)){
return cljs.core.async.close_BANG_(chan__$1);
} else {
return null;
}
});})(chan__$1,source,vec__35309,map__35312,map__35312__$1,events,format,chan,close_QMARK_))
;

return kvlt.util.read_proxy_chan.cljs$core$IFn$_invoke$arity$variadic(chan__$1,((function (chan__$1,source,vec__35309,map__35312,map__35312__$1,events,format,chan,close_QMARK_){
return (function (){
return source.close();
});})(chan__$1,source,vec__35309,map__35312,map__35312__$1,events,format,chan,close_QMARK_))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$close_QMARK_,close_QMARK_], null)], 0));
});

kvlt.platform.event_source.request_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
kvlt.platform.event_source.request_BANG_.cljs$lang$applyTo = (function (seq35306){
var G__35307 = cljs.core.first(seq35306);
var seq35306__$1 = cljs.core.next(seq35306);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35307,seq35306__$1);
});

