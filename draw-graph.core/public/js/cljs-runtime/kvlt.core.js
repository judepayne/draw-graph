goog.provide('kvlt.core');
goog.require('cljs.core');
goog.require('kvlt.platform.http');
goog.require('kvlt.platform.websocket');
goog.require('kvlt.platform.event_source');
goog.require('kvlt.middleware');
goog.require('kvlt.middleware.params');
goog.require('taoensso.timbre');
kvlt.core.default_middleware = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [kvlt.middleware.decompress,kvlt.middleware.as,kvlt.middleware.params.form,kvlt.middleware.params.short_form,kvlt.middleware.params.query,kvlt.middleware.params.short_query,kvlt.middleware.port,kvlt.middleware.method,kvlt.middleware.default_method,kvlt.middleware.accept,kvlt.middleware.accept_encoding,kvlt.middleware.keyword_headers,kvlt.middleware.lower_case_headers,kvlt.middleware.content_type,kvlt.middleware.default_content_type,kvlt.middleware.body_type_hint,kvlt.middleware.basic_auth,kvlt.middleware.oauth_token,kvlt.middleware.url,kvlt.middleware.error], null);
kvlt.core.request_STAR_ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__47311_SHARP_,p2__47310_SHARP_){
return (p2__47310_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p2__47310_SHARP_.cljs$core$IFn$_invoke$arity$1(p1__47311_SHARP_) : p2__47310_SHARP_.call(null,p1__47311_SHARP_));
}),kvlt.platform.http.request_BANG_,kvlt.core.default_middleware);
/**
 * Disable request/response logging
 */
kvlt.core.quiet_BANG_ = (function kvlt$core$quiet_BANG_(){
return taoensso.timbre.merge_config_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns-blacklist","ns-blacklist",1957763142),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["kvlt.*"], null)], null));
});
/**
 * Issues the HTTP request described by the given map, returning a
 *   promise resolving to a map describing the response, or rejected with
 *   an `ExceptionInfo` instance having a similar map associated with it.
 *   See [[kvlt.middleware/error]] for more details of the error
 *   conditions & behaviour.
 * 
 *   This function applies a variety of middleware to
 *   `kvlt.platform.http/request!`, in order to transform the input map
 *   into something Ring-like - and to perform similar transformations to
 *   the response.
 */
kvlt.core.request_BANG_ = (function kvlt$core$request_BANG_(req){
return (kvlt.core.request_STAR_.cljs$core$IFn$_invoke$arity$1 ? kvlt.core.request_STAR_.cljs$core$IFn$_invoke$arity$1(req) : kvlt.core.request_STAR_.call(null,req));
});
/**
 * Initiates a websocket connection with the given "ws:" or "wss:"
 *   URL and returns a promise resolving to a `core.async` channel.  If a
 *   connection cannot be established, the promise'll be rejected with an
 *   `ExceptionInfo` instance.
 * 
 *   Reads and writes on the resulting channel are delegated to distinct
 *   read/write channels - the "read" side being by default an
 *   unbuffered channel populated with messages from the websocket, and
 *   the "write" side, also unbuffered, being drained into the
 *   websocket itself.  The `read-chan` and `write-chan` options can be
 *   specified to e.g. apply a transducer to incoming/outgoing values.
 * 
 *   Closing the returned channel terminates the websocket connection,
 *   and will close the underlying read & write channels (unless `close?`
 *   is false, in which event it'll close neither).  The channel will be
 *   closed (and the same `close?` behaviour applied) if a transport
 *   error occurs after the connection has been established.
 */
kvlt.core.websocket_BANG_ = (function kvlt$core$websocket_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___47347 = arguments.length;
var i__4731__auto___47348 = (0);
while(true){
if((i__4731__auto___47348 < len__4730__auto___47347)){
args__4736__auto__.push((arguments[i__4731__auto___47348]));

var G__47349 = (i__4731__auto___47348 + (1));
i__4731__auto___47348 = G__47349;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return kvlt.core.websocket_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

kvlt.core.websocket_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__47315){
var vec__47318 = p__47315;
var map__47321 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47318,(0),null);
var map__47321__$1 = (((((!((map__47321 == null))))?(((((map__47321.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47321.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47321):map__47321);
var opts = map__47321__$1;
var read_chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47321__$1,new cljs.core.Keyword(null,"read-chan","read-chan",-311487928));
var write_chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47321__$1,new cljs.core.Keyword(null,"write-chan","write-chan",-1022958832));
var close_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47321__$1,new cljs.core.Keyword(null,"close?","close?",1600185693));
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47321__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
return kvlt.platform.websocket.request_BANG_.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts], 0));
});

kvlt.core.websocket_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
kvlt.core.websocket_BANG_.cljs$lang$applyTo = (function (seq47312){
var G__47313 = cljs.core.first(seq47312);
var seq47312__$1 = cljs.core.next(seq47312);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47313,seq47312__$1);
});

/**
 * [Server-sent Events](https://html.spec.whatwg.org/multipage/comms.html#server-sent-events) client.
 * 
 *   Initiates a long-lived HTTP connection with `url`, placing maps
 *   representing incoming events onto a `core.async` channel.
 * 
 *   By default, only events of type `:message` will be considered (per
 *   spec).  To listen to a set of specific event types, `events` (a set
 *   of keywords) may be specified.
 * 
 *   The returned channel, when closed, will terminate the underlying SSE
 *   connection.  By default, the channel is unbuffered - though an
 *   arbitrary channel can be passed in via `chan` - and will be closed
 *   when the connection channel closes (or on error), unless `close?` is
 *   false.  On error, the connection will not be automatically
 *   re-established.
 * 
 *   `as` is some symbolic value (defaulting to `:string` - no-op) which
 *   is used as [[kvlt.event-source/format-event]]'s dispatch value.  ```
 *   
 */
kvlt.core.event_source_BANG_ = (function kvlt$core$event_source_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___47350 = arguments.length;
var i__4731__auto___47351 = (0);
while(true){
if((i__4731__auto___47351 < len__4730__auto___47350)){
args__4736__auto__.push((arguments[i__4731__auto___47351]));

var G__47352 = (i__4731__auto___47351 + (1));
i__4731__auto___47351 = G__47352;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return kvlt.core.event_source_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

kvlt.core.event_source_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__47335){
var vec__47336 = p__47335;
var map__47339 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47336,(0),null);
var map__47339__$1 = (((((!((map__47339 == null))))?(((((map__47339.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47339.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47339):map__47339);
var events = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47339__$1,new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),null], null), null));
var as = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47339__$1,new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Keyword(null,"string","string",-1989541586));
var chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47339__$1,new cljs.core.Keyword(null,"chan","chan",-2103021695));
var close_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47339__$1,new cljs.core.Keyword(null,"close?","close?",1600185693),true);
return kvlt.platform.event_source.request_BANG_.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"events","events",1792552201),events,new cljs.core.Keyword(null,"format","format",-1306924766),as,new cljs.core.Keyword(null,"chan","chan",-2103021695),chan,new cljs.core.Keyword(null,"close?","close?",1600185693),close_QMARK_], null)], 0));
});

kvlt.core.event_source_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
kvlt.core.event_source_BANG_.cljs$lang$applyTo = (function (seq47326){
var G__47327 = cljs.core.first(seq47326);
var seq47326__$1 = cljs.core.next(seq47326);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47327,seq47326__$1);
});


//# sourceMappingURL=kvlt.core.js.map
