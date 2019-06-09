// Compiled by ClojureScript 1.10.520 {}
goog.provide('kvlt.platform.event_source');
goog.require('cljs.core');
goog.require('kvlt.event_source');
goog.require('cljs.core.async');
goog.require('taoensso.timbre');
goog.require('kvlt.util');
kvlt.platform.event_source.EventSource = (((typeof EventSource !== 'undefined'))?EventSource:require("eventsource"));
kvlt.platform.event_source.event__GT_map = (function kvlt$platform$event_source$event__GT_map(e,format){
return kvlt.event_source.format_event.call(null,format,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.not_empty.call(null,e.lastEventId),new cljs.core.Keyword(null,"data","data",-232669377),e.data,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.keyword.call(null,e.type)], null));
});
kvlt.platform.event_source.add_listeners_BANG_ = (function kvlt$platform$event_source$add_listeners_BANG_(source,chan,types,format){
var seq__31564 = cljs.core.seq.call(null,types);
var chunk__31565 = null;
var count__31566 = (0);
var i__31567 = (0);
while(true){
if((i__31567 < count__31566)){
var t = cljs.core._nth.call(null,chunk__31565,i__31567);
source.addEventListener(cljs.core.name.call(null,t),((function (seq__31564,chunk__31565,count__31566,i__31567,t){
return (function (e){
if(cljs.core.truth_(cljs.core.async.put_BANG_.call(null,chan,kvlt.platform.event_source.event__GT_map.call(null,e,format)))){
return null;
} else {
return source.close();
}
});})(seq__31564,chunk__31565,count__31566,i__31567,t))
);


var G__31568 = seq__31564;
var G__31569 = chunk__31565;
var G__31570 = count__31566;
var G__31571 = (i__31567 + (1));
seq__31564 = G__31568;
chunk__31565 = G__31569;
count__31566 = G__31570;
i__31567 = G__31571;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__31564);
if(temp__5720__auto__){
var seq__31564__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31564__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__31564__$1);
var G__31572 = cljs.core.chunk_rest.call(null,seq__31564__$1);
var G__31573 = c__4550__auto__;
var G__31574 = cljs.core.count.call(null,c__4550__auto__);
var G__31575 = (0);
seq__31564 = G__31572;
chunk__31565 = G__31573;
count__31566 = G__31574;
i__31567 = G__31575;
continue;
} else {
var t = cljs.core.first.call(null,seq__31564__$1);
source.addEventListener(cljs.core.name.call(null,t),((function (seq__31564,chunk__31565,count__31566,i__31567,t,seq__31564__$1,temp__5720__auto__){
return (function (e){
if(cljs.core.truth_(cljs.core.async.put_BANG_.call(null,chan,kvlt.platform.event_source.event__GT_map.call(null,e,format)))){
return null;
} else {
return source.close();
}
});})(seq__31564,chunk__31565,count__31566,i__31567,t,seq__31564__$1,temp__5720__auto__))
);


var G__31576 = cljs.core.next.call(null,seq__31564__$1);
var G__31577 = null;
var G__31578 = (0);
var G__31579 = (0);
seq__31564 = G__31576;
chunk__31565 = G__31577;
count__31566 = G__31578;
i__31567 = G__31579;
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
var len__4730__auto___31588 = arguments.length;
var i__4731__auto___31589 = (0);
while(true){
if((i__4731__auto___31589 < len__4730__auto___31588)){
args__4736__auto__.push((arguments[i__4731__auto___31589]));

var G__31590 = (i__4731__auto___31589 + (1));
i__4731__auto___31589 = G__31590;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return kvlt.platform.event_source.request_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

kvlt.platform.event_source.request_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__31582){
var vec__31583 = p__31582;
var map__31586 = cljs.core.nth.call(null,vec__31583,(0),null);
var map__31586__$1 = (((((!((map__31586 == null))))?(((((map__31586.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31586.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31586):map__31586);
var events = cljs.core.get.call(null,map__31586__$1,new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),null], null), null));
var format = cljs.core.get.call(null,map__31586__$1,new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"string","string",-1989541586));
var chan = cljs.core.get.call(null,map__31586__$1,new cljs.core.Keyword(null,"chan","chan",-2103021695));
var close_QMARK_ = cljs.core.get.call(null,map__31586__$1,new cljs.core.Keyword(null,"close?","close?",1600185693),true);
var chan__$1 = (function (){var or__4131__auto__ = chan;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.async.chan.call(null);
}
})();
var source = (new kvlt.platform.event_source.EventSource(url));
kvlt.platform.event_source.add_listeners_BANG_.call(null,source,chan__$1,events,format);

source.onerror = ((function (chan__$1,source,vec__31583,map__31586,map__31586__$1,events,format,chan,close_QMARK_){
return (function (_){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"kvlt.platform.event-source","/private/var/folders/t5/f3xh0rdx5ds8d5rn2wr52fh40000gn/T/form-init4657202228440285352.clj",36,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (chan__$1,source,vec__31583,map__31586,map__31586__$1,events,format,chan,close_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SSE error, closing source",url], null);
});})(chan__$1,source,vec__31583,map__31586,map__31586__$1,events,format,chan,close_QMARK_))
,null)),null,-1547978254);

source.close();

if(cljs.core.truth_(close_QMARK_)){
return cljs.core.async.close_BANG_.call(null,chan__$1);
} else {
return null;
}
});})(chan__$1,source,vec__31583,map__31586,map__31586__$1,events,format,chan,close_QMARK_))
;

return kvlt.util.read_proxy_chan.call(null,chan__$1,((function (chan__$1,source,vec__31583,map__31586,map__31586__$1,events,format,chan,close_QMARK_){
return (function (){
return source.close();
});})(chan__$1,source,vec__31583,map__31586,map__31586__$1,events,format,chan,close_QMARK_))
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close?","close?",1600185693),close_QMARK_], null));
});

kvlt.platform.event_source.request_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
kvlt.platform.event_source.request_BANG_.cljs$lang$applyTo = (function (seq31580){
var G__31581 = cljs.core.first.call(null,seq31580);
var seq31580__$1 = cljs.core.next.call(null,seq31580);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31581,seq31580__$1);
});


//# sourceMappingURL=event_source.js.map
