goog.provide('kvlt.platform.event_source');
goog.require('cljs.core');
goog.require('kvlt.event_source');
goog.require('cljs.core.async');
goog.require('taoensso.timbre');
goog.require('kvlt.util');
kvlt.platform.event_source.EventSource = (((typeof EventSource !== 'undefined'))?EventSource:require("eventsource"));
kvlt.platform.event_source.event__GT_map = (function kvlt$platform$event_source$event__GT_map(e,format){
var G__41611 = format;
var G__41612 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.not_empty(e.lastEventId),new cljs.core.Keyword(null,"data","data",-232669377),e.data,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(e.type)], null);
return (kvlt.event_source.format_event.cljs$core$IFn$_invoke$arity$2 ? kvlt.event_source.format_event.cljs$core$IFn$_invoke$arity$2(G__41611,G__41612) : kvlt.event_source.format_event.call(null,G__41611,G__41612));
});
kvlt.platform.event_source.add_listeners_BANG_ = (function kvlt$platform$event_source$add_listeners_BANG_(source,chan,types,format){
var seq__41615 = cljs.core.seq(types);
var chunk__41616 = null;
var count__41617 = (0);
var i__41618 = (0);
while(true){
if((i__41618 < count__41617)){
var t = chunk__41616.cljs$core$IIndexed$_nth$arity$2(null,i__41618);
source.addEventListener(cljs.core.name(t),((function (seq__41615,chunk__41616,count__41617,i__41618,t){
return (function (e){
if(cljs.core.truth_(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,kvlt.platform.event_source.event__GT_map(e,format)))){
return null;
} else {
return source.close();
}
});})(seq__41615,chunk__41616,count__41617,i__41618,t))
);


var G__41645 = seq__41615;
var G__41646 = chunk__41616;
var G__41647 = count__41617;
var G__41648 = (i__41618 + (1));
seq__41615 = G__41645;
chunk__41616 = G__41646;
count__41617 = G__41647;
i__41618 = G__41648;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__41615);
if(temp__5720__auto__){
var seq__41615__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41615__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__41615__$1);
var G__41649 = cljs.core.chunk_rest(seq__41615__$1);
var G__41650 = c__4550__auto__;
var G__41651 = cljs.core.count(c__4550__auto__);
var G__41652 = (0);
seq__41615 = G__41649;
chunk__41616 = G__41650;
count__41617 = G__41651;
i__41618 = G__41652;
continue;
} else {
var t = cljs.core.first(seq__41615__$1);
source.addEventListener(cljs.core.name(t),((function (seq__41615,chunk__41616,count__41617,i__41618,t,seq__41615__$1,temp__5720__auto__){
return (function (e){
if(cljs.core.truth_(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,kvlt.platform.event_source.event__GT_map(e,format)))){
return null;
} else {
return source.close();
}
});})(seq__41615,chunk__41616,count__41617,i__41618,t,seq__41615__$1,temp__5720__auto__))
);


var G__41654 = cljs.core.next(seq__41615__$1);
var G__41655 = null;
var G__41656 = (0);
var G__41657 = (0);
seq__41615 = G__41654;
chunk__41616 = G__41655;
count__41617 = G__41656;
i__41618 = G__41657;
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
var len__4730__auto___41659 = arguments.length;
var i__4731__auto___41660 = (0);
while(true){
if((i__4731__auto___41660 < len__4730__auto___41659)){
args__4736__auto__.push((arguments[i__4731__auto___41660]));

var G__41661 = (i__4731__auto___41660 + (1));
i__4731__auto___41660 = G__41661;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return kvlt.platform.event_source.request_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

kvlt.platform.event_source.request_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__41630){
var vec__41631 = p__41630;
var map__41634 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41631,(0),null);
var map__41634__$1 = (((((!((map__41634 == null))))?(((((map__41634.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41634.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41634):map__41634);
var events = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41634__$1,new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),null], null), null));
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41634__$1,new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"string","string",-1989541586));
var chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41634__$1,new cljs.core.Keyword(null,"chan","chan",-2103021695));
var close_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41634__$1,new cljs.core.Keyword(null,"close?","close?",1600185693),true);
var chan__$1 = (function (){var or__4131__auto__ = chan;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
}
})();
var source = (new kvlt.platform.event_source.EventSource(url));
kvlt.platform.event_source.add_listeners_BANG_(source,chan__$1,events,format);

source.onerror = ((function (chan__$1,source,vec__41631,map__41634,map__41634__$1,events,format,chan,close_QMARK_){
return (function (_){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"kvlt.platform.event-source",null,36,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (chan__$1,source,vec__41631,map__41634,map__41634__$1,events,format,chan,close_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SSE error, closing source",url], null);
});})(chan__$1,source,vec__41631,map__41634,map__41634__$1,events,format,chan,close_QMARK_))
,null)),null,-293777890);

source.close();

if(cljs.core.truth_(close_QMARK_)){
return cljs.core.async.close_BANG_(chan__$1);
} else {
return null;
}
});})(chan__$1,source,vec__41631,map__41634,map__41634__$1,events,format,chan,close_QMARK_))
;

return kvlt.util.read_proxy_chan.cljs$core$IFn$_invoke$arity$variadic(chan__$1,((function (chan__$1,source,vec__41631,map__41634,map__41634__$1,events,format,chan,close_QMARK_){
return (function (){
return source.close();
});})(chan__$1,source,vec__41631,map__41634,map__41634__$1,events,format,chan,close_QMARK_))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close?","close?",1600185693),close_QMARK_], null)], 0));
});

kvlt.platform.event_source.request_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
kvlt.platform.event_source.request_BANG_.cljs$lang$applyTo = (function (seq41628){
var G__41629 = cljs.core.first(seq41628);
var seq41628__$1 = cljs.core.next(seq41628);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41629,seq41628__$1);
});


//# sourceMappingURL=kvlt.platform.event_source.js.map
