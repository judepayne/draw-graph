goog.provide('kvlt.platform.websocket');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('kvlt.util');
goog.require('kvlt.websocket');
goog.require('taoensso.timbre');
goog.require('promesa.core');
kvlt.platform.websocket.WebSocket = (((typeof WebSocket !== 'undefined'))?WebSocket:require("websocket").w3cwebsocket);
kvlt.platform.websocket.ws__GT_chan_BANG_ = (function kvlt$platform$websocket$ws__GT_chan_BANG_(ws,chan,format){
return (ws.onmessage = (function (p1__30261_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,kvlt.websocket.format_incoming.cljs$core$IFn$_invoke$arity$2(format,p1__30261_SHARP_.data));
}));
});
kvlt.platform.websocket.chan__GT_ws_BANG_ = (function kvlt$platform$websocket$chan__GT_ws_BANG_(chan,ws,format){
var c__26250__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26251__auto__ = (function (){var switch__26190__auto__ = (function (state_30320){
var state_val_30321 = (state_30320[(1)]);
if((state_val_30321 === (1))){
var state_30320__$1 = state_30320;
var statearr_30322_30378 = state_30320__$1;
(statearr_30322_30378[(2)] = null);

(statearr_30322_30378[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30321 === (2))){
var state_30320__$1 = state_30320;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30320__$1,(4),chan);
} else {
if((state_val_30321 === (3))){
var inst_30299 = (state_30320[(2)]);
var state_30320__$1 = state_30320;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30320__$1,inst_30299);
} else {
if((state_val_30321 === (4))){
var inst_30283 = (state_30320[(7)]);
var inst_30283__$1 = (state_30320[(2)]);
var state_30320__$1 = (function (){var statearr_30324 = state_30320;
(statearr_30324[(7)] = inst_30283__$1);

return statearr_30324;
})();
if(cljs.core.truth_(inst_30283__$1)){
var statearr_30325_30384 = state_30320__$1;
(statearr_30325_30384[(1)] = (5));

} else {
var statearr_30326_30385 = state_30320__$1;
(statearr_30326_30385[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30321 === (5))){
var inst_30283 = (state_30320[(7)]);
var inst_30289 = kvlt.websocket.format_outgoing.cljs$core$IFn$_invoke$arity$2(format,inst_30283);
var inst_30290 = ws.send(inst_30289);
var state_30320__$1 = (function (){var statearr_30329 = state_30320;
(statearr_30329[(8)] = inst_30290);

return statearr_30329;
})();
var statearr_30332_30386 = state_30320__$1;
(statearr_30332_30386[(2)] = null);

(statearr_30332_30386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30321 === (6))){
var state_30320__$1 = state_30320;
var statearr_30337_30387 = state_30320__$1;
(statearr_30337_30387[(2)] = null);

(statearr_30337_30387[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30321 === (7))){
var inst_30297 = (state_30320[(2)]);
var state_30320__$1 = state_30320;
var statearr_30340_30389 = state_30320__$1;
(statearr_30340_30389[(2)] = inst_30297);

(statearr_30340_30389[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});
return (function() {
var kvlt$platform$websocket$chan__GT_ws_BANG__$_state_machine__26191__auto__ = null;
var kvlt$platform$websocket$chan__GT_ws_BANG__$_state_machine__26191__auto____0 = (function (){
var statearr_30342 = [null,null,null,null,null,null,null,null,null];
(statearr_30342[(0)] = kvlt$platform$websocket$chan__GT_ws_BANG__$_state_machine__26191__auto__);

(statearr_30342[(1)] = (1));

return statearr_30342;
});
var kvlt$platform$websocket$chan__GT_ws_BANG__$_state_machine__26191__auto____1 = (function (state_30320){
while(true){
var ret_value__26192__auto__ = (function (){try{while(true){
var result__26193__auto__ = switch__26190__auto__(state_30320);
if(cljs.core.keyword_identical_QMARK_(result__26193__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26193__auto__;
}
break;
}
}catch (e30344){if((e30344 instanceof Object)){
var ex__26194__auto__ = e30344;
var statearr_30345_30390 = state_30320;
(statearr_30345_30390[(5)] = ex__26194__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30320);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30344;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26192__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30394 = state_30320;
state_30320 = G__30394;
continue;
} else {
return ret_value__26192__auto__;
}
break;
}
});
kvlt$platform$websocket$chan__GT_ws_BANG__$_state_machine__26191__auto__ = function(state_30320){
switch(arguments.length){
case 0:
return kvlt$platform$websocket$chan__GT_ws_BANG__$_state_machine__26191__auto____0.call(this);
case 1:
return kvlt$platform$websocket$chan__GT_ws_BANG__$_state_machine__26191__auto____1.call(this,state_30320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
kvlt$platform$websocket$chan__GT_ws_BANG__$_state_machine__26191__auto__.cljs$core$IFn$_invoke$arity$0 = kvlt$platform$websocket$chan__GT_ws_BANG__$_state_machine__26191__auto____0;
kvlt$platform$websocket$chan__GT_ws_BANG__$_state_machine__26191__auto__.cljs$core$IFn$_invoke$arity$1 = kvlt$platform$websocket$chan__GT_ws_BANG__$_state_machine__26191__auto____1;
return kvlt$platform$websocket$chan__GT_ws_BANG__$_state_machine__26191__auto__;
})()
})();
var state__26252__auto__ = (function (){var statearr_30348 = f__26251__auto__();
(statearr_30348[(6)] = c__26250__auto__);

return statearr_30348;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26252__auto__);
}));

return c__26250__auto__;
});
kvlt.platform.websocket.close_event__GT_maybe_error = (function kvlt$platform$websocket$close_event__GT_maybe_error(ev){
if(cljs.core.truth_(ev.wasClean)){
return null;
} else {
var reason = ev.reason;
var code = ev.code;
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(reason,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"message","message",-406056002),reason,new cljs.core.Keyword(null,"error","error",-978969032),code,new cljs.core.Keyword(null,"type","type",1174270348),code,new cljs.core.Keyword(null,"status","status",-1997798413),(0)], null));
}
});
kvlt.platform.websocket.request_BANG_ = (function kvlt$platform$websocket$request_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___30399 = arguments.length;
var i__4790__auto___30400 = (0);
while(true){
if((i__4790__auto___30400 < len__4789__auto___30399)){
args__4795__auto__.push((arguments[i__4790__auto___30400]));

var G__30401 = (i__4790__auto___30400 + (1));
i__4790__auto___30400 = G__30401;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return kvlt.platform.websocket.request_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(kvlt.platform.websocket.request_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__30361){
var vec__30362 = p__30361;
var map__30365 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30362,(0),null);
var map__30365__$1 = (((((!((map__30365 == null))))?(((((map__30365.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30365.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30365):map__30365);
var read_chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30365__$1,new cljs.core.Keyword(null,"read-chan","read-chan",-311487928));
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30365__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var write_chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30365__$1,new cljs.core.Keyword(null,"write-chan","write-chan",-1022958832));
var close_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__30365__$1,new cljs.core.Keyword(null,"close?","close?",1600185693),true);
var ws = (new kvlt.platform.websocket.WebSocket(url));
var in$ = (function (){var or__4185__auto__ = read_chan;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
}
})();
var out = (function (){var or__4185__auto__ = write_chan;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
}
})();
var chan = kvlt.util.bidirectional_chan.cljs$core$IFn$_invoke$arity$variadic(in$,out,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-close","on-close",-761178394),(function (){
return ws.close();
}),new cljs.core.Keyword(null,"close?","close?",1600185693),close_QMARK_], null)], 0));
var resolved_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return promesa.core.promise((function (resolve,reject){
kvlt.platform.websocket.ws__GT_chan_BANG_(ws,in$,format);

kvlt.platform.websocket.chan__GT_ws_BANG_(out,ws,format);

(ws.onopen = (function (){
cljs.core.reset_BANG_(resolved_QMARK_,true);

return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(chan) : resolve.call(null,chan));
}));

return (ws.onclose = (function (event){
var temp__5735__auto__ = kvlt.platform.websocket.close_event__GT_maybe_error(event);
if(cljs.core.truth_(temp__5735__auto__)){
var error = temp__5735__auto__;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"kvlt.platform.websocket",null,49,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Websocket onclose error",error], null);
}),null)),null,809116666);

if(cljs.core.truth_(cljs.core.deref(resolved_QMARK_))){
} else {
(reject.cljs$core$IFn$_invoke$arity$1 ? reject.cljs$core$IFn$_invoke$arity$1(error) : reject.call(null,error));
}

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
}));
}));
}));

(kvlt.platform.websocket.request_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(kvlt.platform.websocket.request_BANG_.cljs$lang$applyTo = (function (seq30352){
var G__30353 = cljs.core.first(seq30352);
var seq30352__$1 = cljs.core.next(seq30352);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30353,seq30352__$1);
}));


//# sourceMappingURL=kvlt.platform.websocket.js.map
