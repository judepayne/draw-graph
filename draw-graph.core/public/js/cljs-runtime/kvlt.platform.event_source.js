goog.provide('kvlt.platform.event_source');
goog.require('cljs.core');
goog.require('kvlt.event_source');
goog.require('cljs.core.async');
goog.require('taoensso.timbre');
goog.require('kvlt.util');
kvlt.platform.event_source.EventSource = (((typeof EventSource !== 'undefined'))?EventSource:require("eventsource"));
kvlt.platform.event_source.event__GT_map = (function kvlt$platform$event_source$event__GT_map(e,format){
return kvlt.event_source.format_event.cljs$core$IFn$_invoke$arity$2(format,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.not_empty(e.lastEventId),new cljs.core.Keyword(null,"data","data",-232669377),e.data,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(e.type)], null));
});
kvlt.platform.event_source.add_listeners_BANG_ = (function kvlt$platform$event_source$add_listeners_BANG_(source,chan,types,format){
var seq__46136 = cljs.core.seq(types);
var chunk__46137 = null;
var count__46138 = (0);
var i__46139 = (0);
while(true){
if((i__46139 < count__46138)){
var t = chunk__46137.cljs$core$IIndexed$_nth$arity$2(null,i__46139);
source.addEventListener(cljs.core.name(t),((function (seq__46136,chunk__46137,count__46138,i__46139,t){
return (function (e){
if(cljs.core.truth_(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,kvlt.platform.event_source.event__GT_map(e,format)))){
return null;
} else {
return source.close();
}
});})(seq__46136,chunk__46137,count__46138,i__46139,t))
);


var G__46223 = seq__46136;
var G__46224 = chunk__46137;
var G__46225 = count__46138;
var G__46226 = (i__46139 + (1));
seq__46136 = G__46223;
chunk__46137 = G__46224;
count__46138 = G__46225;
i__46139 = G__46226;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46136);
if(temp__5735__auto__){
var seq__46136__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46136__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__46136__$1);
var G__46228 = cljs.core.chunk_rest(seq__46136__$1);
var G__46229 = c__4609__auto__;
var G__46230 = cljs.core.count(c__4609__auto__);
var G__46231 = (0);
seq__46136 = G__46228;
chunk__46137 = G__46229;
count__46138 = G__46230;
i__46139 = G__46231;
continue;
} else {
var t = cljs.core.first(seq__46136__$1);
source.addEventListener(cljs.core.name(t),((function (seq__46136,chunk__46137,count__46138,i__46139,t,seq__46136__$1,temp__5735__auto__){
return (function (e){
if(cljs.core.truth_(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,kvlt.platform.event_source.event__GT_map(e,format)))){
return null;
} else {
return source.close();
}
});})(seq__46136,chunk__46137,count__46138,i__46139,t,seq__46136__$1,temp__5735__auto__))
);


var G__46237 = cljs.core.next(seq__46136__$1);
var G__46238 = null;
var G__46239 = (0);
var G__46240 = (0);
seq__46136 = G__46237;
chunk__46137 = G__46238;
count__46138 = G__46239;
i__46139 = G__46240;
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
var args__4795__auto__ = [];
var len__4789__auto___46242 = arguments.length;
var i__4790__auto___46243 = (0);
while(true){
if((i__4790__auto___46243 < len__4789__auto___46242)){
args__4795__auto__.push((arguments[i__4790__auto___46243]));

var G__46245 = (i__4790__auto___46243 + (1));
i__4790__auto___46243 = G__46245;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return kvlt.platform.event_source.request_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(kvlt.platform.event_source.request_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__46186){
var vec__46188 = p__46186;
var map__46191 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46188,(0),null);
var map__46191__$1 = (((((!((map__46191 == null))))?(((((map__46191.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46191.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46191):map__46191);
var events = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__46191__$1,new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),null], null), null));
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__46191__$1,new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"string","string",-1989541586));
var chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46191__$1,new cljs.core.Keyword(null,"chan","chan",-2103021695));
var close_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__46191__$1,new cljs.core.Keyword(null,"close?","close?",1600185693),true);
var chan__$1 = (function (){var or__4185__auto__ = chan;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
}
})();
var source = (new kvlt.platform.event_source.EventSource(url));
kvlt.platform.event_source.add_listeners_BANG_(source,chan__$1,events,format);

(source.onerror = (function (_){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"kvlt.platform.event-source",null,36,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SSE error, closing source",url], null);
}),null)),null,-1269090316);

source.close();

if(cljs.core.truth_(close_QMARK_)){
return cljs.core.async.close_BANG_(chan__$1);
} else {
return null;
}
}));

return kvlt.util.read_proxy_chan.cljs$core$IFn$_invoke$arity$variadic(chan__$1,(function (){
return source.close();
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close?","close?",1600185693),close_QMARK_], null)], 0));
}));

(kvlt.platform.event_source.request_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(kvlt.platform.event_source.request_BANG_.cljs$lang$applyTo = (function (seq46175){
var G__46176 = cljs.core.first(seq46175);
var seq46175__$1 = cljs.core.next(seq46175);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46176,seq46175__$1);
}));


//# sourceMappingURL=kvlt.platform.event_source.js.map
