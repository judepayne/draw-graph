goog.provide('kvlt.platform.event_source');
goog.require('cljs.core');
goog.require('kvlt.event_source');
goog.require('cljs.core.async');
goog.require('taoensso.timbre');
goog.require('kvlt.util');
kvlt.platform.event_source.EventSource = (((typeof EventSource !== 'undefined'))?EventSource:require("eventsource"));
kvlt.platform.event_source.event__GT_map = (function kvlt$platform$event_source$event__GT_map(e,format){
var G__46921 = format;
var G__46922 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.not_empty(e.lastEventId),new cljs.core.Keyword(null,"data","data",-232669377),e.data,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(e.type)], null);
return (kvlt.event_source.format_event.cljs$core$IFn$_invoke$arity$2 ? kvlt.event_source.format_event.cljs$core$IFn$_invoke$arity$2(G__46921,G__46922) : kvlt.event_source.format_event.call(null,G__46921,G__46922));
});
kvlt.platform.event_source.add_listeners_BANG_ = (function kvlt$platform$event_source$add_listeners_BANG_(source,chan,types,format){
var seq__46931 = cljs.core.seq(types);
var chunk__46932 = null;
var count__46933 = (0);
var i__46934 = (0);
while(true){
if((i__46934 < count__46933)){
var t = chunk__46932.cljs$core$IIndexed$_nth$arity$2(null,i__46934);
source.addEventListener(cljs.core.name(t),((function (seq__46931,chunk__46932,count__46933,i__46934,t){
return (function (e){
if(cljs.core.truth_(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,kvlt.platform.event_source.event__GT_map(e,format)))){
return null;
} else {
return source.close();
}
});})(seq__46931,chunk__46932,count__46933,i__46934,t))
);


var G__46993 = seq__46931;
var G__46994 = chunk__46932;
var G__46995 = count__46933;
var G__46996 = (i__46934 + (1));
seq__46931 = G__46993;
chunk__46932 = G__46994;
count__46933 = G__46995;
i__46934 = G__46996;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__46931);
if(temp__5720__auto__){
var seq__46931__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46931__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__46931__$1);
var G__46998 = cljs.core.chunk_rest(seq__46931__$1);
var G__46999 = c__4550__auto__;
var G__47000 = cljs.core.count(c__4550__auto__);
var G__47001 = (0);
seq__46931 = G__46998;
chunk__46932 = G__46999;
count__46933 = G__47000;
i__46934 = G__47001;
continue;
} else {
var t = cljs.core.first(seq__46931__$1);
source.addEventListener(cljs.core.name(t),((function (seq__46931,chunk__46932,count__46933,i__46934,t,seq__46931__$1,temp__5720__auto__){
return (function (e){
if(cljs.core.truth_(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,kvlt.platform.event_source.event__GT_map(e,format)))){
return null;
} else {
return source.close();
}
});})(seq__46931,chunk__46932,count__46933,i__46934,t,seq__46931__$1,temp__5720__auto__))
);


var G__47004 = cljs.core.next(seq__46931__$1);
var G__47005 = null;
var G__47006 = (0);
var G__47007 = (0);
seq__46931 = G__47004;
chunk__46932 = G__47005;
count__46933 = G__47006;
i__46934 = G__47007;
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
var len__4730__auto___47012 = arguments.length;
var i__4731__auto___47013 = (0);
while(true){
if((i__4731__auto___47013 < len__4730__auto___47012)){
args__4736__auto__.push((arguments[i__4731__auto___47013]));

var G__47014 = (i__4731__auto___47013 + (1));
i__4731__auto___47013 = G__47014;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return kvlt.platform.event_source.request_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

kvlt.platform.event_source.request_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__46963){
var vec__46966 = p__46963;
var map__46969 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46966,(0),null);
var map__46969__$1 = (((((!((map__46969 == null))))?(((((map__46969.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46969.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46969):map__46969);
var events = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__46969__$1,new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),null], null), null));
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__46969__$1,new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"string","string",-1989541586));
var chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46969__$1,new cljs.core.Keyword(null,"chan","chan",-2103021695));
var close_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__46969__$1,new cljs.core.Keyword(null,"close?","close?",1600185693),true);
var chan__$1 = (function (){var or__4131__auto__ = chan;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
}
})();
var source = (new kvlt.platform.event_source.EventSource(url));
kvlt.platform.event_source.add_listeners_BANG_(source,chan__$1,events,format);

source.onerror = ((function (chan__$1,source,vec__46966,map__46969,map__46969__$1,events,format,chan,close_QMARK_){
return (function (_){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"kvlt.platform.event-source",null,36,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (chan__$1,source,vec__46966,map__46969,map__46969__$1,events,format,chan,close_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SSE error, closing source",url], null);
});})(chan__$1,source,vec__46966,map__46969,map__46969__$1,events,format,chan,close_QMARK_))
,null)),null,1639512618);

source.close();

if(cljs.core.truth_(close_QMARK_)){
return cljs.core.async.close_BANG_(chan__$1);
} else {
return null;
}
});})(chan__$1,source,vec__46966,map__46969,map__46969__$1,events,format,chan,close_QMARK_))
;

return kvlt.util.read_proxy_chan.cljs$core$IFn$_invoke$arity$variadic(chan__$1,((function (chan__$1,source,vec__46966,map__46969,map__46969__$1,events,format,chan,close_QMARK_){
return (function (){
return source.close();
});})(chan__$1,source,vec__46966,map__46969,map__46969__$1,events,format,chan,close_QMARK_))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close?","close?",1600185693),close_QMARK_], null)], 0));
});

kvlt.platform.event_source.request_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
kvlt.platform.event_source.request_BANG_.cljs$lang$applyTo = (function (seq46957){
var G__46958 = cljs.core.first(seq46957);
var seq46957__$1 = cljs.core.next(seq46957);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46958,seq46957__$1);
});


//# sourceMappingURL=kvlt.platform.event_source.js.map
