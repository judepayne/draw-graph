// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('kvlt.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('kvlt.platform.http');
goog.require('kvlt.platform.websocket');
goog.require('kvlt.platform.event_source');
goog.require('kvlt.middleware');
goog.require('kvlt.middleware.params');
goog.require('taoensso.timbre');
kvlt.core.default_middleware = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [kvlt.middleware.decompress,kvlt.middleware.as,kvlt.middleware.params.form,kvlt.middleware.params.short_form,kvlt.middleware.params.query,kvlt.middleware.params.short_query,kvlt.middleware.port,kvlt.middleware.method,kvlt.middleware.default_method,kvlt.middleware.accept,kvlt.middleware.accept_encoding,kvlt.middleware.keyword_headers,kvlt.middleware.lower_case_headers,kvlt.middleware.content_type,kvlt.middleware.default_content_type,kvlt.middleware.body_type_hint,kvlt.middleware.basic_auth,kvlt.middleware.oauth_token,kvlt.middleware.url,kvlt.middleware.error], null);
kvlt.core.request_STAR_ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__41896_SHARP_,p2__41895_SHARP_){
return (p2__41895_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p2__41895_SHARP_.cljs$core$IFn$_invoke$arity$1(p1__41896_SHARP_) : p2__41895_SHARP_.call(null,p1__41896_SHARP_));
}),kvlt.platform.http.request_BANG_,kvlt.core.default_middleware);
/**
 * Disable request/response logging
 */
kvlt.core.quiet_BANG_ = (function kvlt$core$quiet_BANG_(){
return taoensso.timbre.merge_config_BANG_(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ns_DASH_blacklist,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["kvlt.*"], null)], null));
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
var len__4730__auto___41905 = arguments.length;
var i__4731__auto___41906 = (0);
while(true){
if((i__4731__auto___41906 < len__4730__auto___41905)){
args__4736__auto__.push((arguments[i__4731__auto___41906]));

var G__41907 = (i__4731__auto___41906 + (1));
i__4731__auto___41906 = G__41907;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return kvlt.core.websocket_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

kvlt.core.websocket_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__41899){
var vec__41900 = p__41899;
var map__41903 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41900,(0),null);
var map__41903__$1 = (((((!((map__41903 == null))))?(((((map__41903.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41903.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41903):map__41903);
var opts = map__41903__$1;
var read_chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41903__$1,cljs.core.cst$kw$read_DASH_chan);
var write_chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41903__$1,cljs.core.cst$kw$write_DASH_chan);
var close_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41903__$1,cljs.core.cst$kw$close_QMARK_);
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41903__$1,cljs.core.cst$kw$format);
return kvlt.platform.websocket.request_BANG_.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts], 0));
});

kvlt.core.websocket_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
kvlt.core.websocket_BANG_.cljs$lang$applyTo = (function (seq41897){
var G__41898 = cljs.core.first(seq41897);
var seq41897__$1 = cljs.core.next(seq41897);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41898,seq41897__$1);
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
var len__4730__auto___41916 = arguments.length;
var i__4731__auto___41917 = (0);
while(true){
if((i__4731__auto___41917 < len__4730__auto___41916)){
args__4736__auto__.push((arguments[i__4731__auto___41917]));

var G__41918 = (i__4731__auto___41917 + (1));
i__4731__auto___41917 = G__41918;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return kvlt.core.event_source_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

kvlt.core.event_source_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__41910){
var vec__41911 = p__41910;
var map__41914 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41911,(0),null);
var map__41914__$1 = (((((!((map__41914 == null))))?(((((map__41914.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41914.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41914):map__41914);
var events = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41914__$1,cljs.core.cst$kw$events,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$message,null], null), null));
var as = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41914__$1,cljs.core.cst$kw$as,cljs.core.cst$kw$string);
var chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41914__$1,cljs.core.cst$kw$chan);
var close_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41914__$1,cljs.core.cst$kw$close_QMARK_,true);
return kvlt.platform.event_source.request_BANG_.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$events,events,cljs.core.cst$kw$format,as,cljs.core.cst$kw$chan,chan,cljs.core.cst$kw$close_QMARK_,close_QMARK_], null)], 0));
});

kvlt.core.event_source_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
kvlt.core.event_source_BANG_.cljs$lang$applyTo = (function (seq41908){
var G__41909 = cljs.core.first(seq41908);
var seq41908__$1 = cljs.core.next(seq41908);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41909,seq41908__$1);
});

