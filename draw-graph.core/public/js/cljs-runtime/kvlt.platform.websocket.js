goog.provide('kvlt.platform.websocket');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('kvlt.util');
goog.require('kvlt.websocket');
goog.require('taoensso.timbre');
goog.require('promesa.core');
kvlt.platform.websocket.WebSocket = (((typeof WebSocket !== 'undefined'))?WebSocket:require("websocket").w3cwebsocket);
kvlt.platform.websocket.ws__GT_chan_BANG_ = (function kvlt$platform$websocket$ws__GT_chan_BANG_(ws,chan,format){
return ws.onmessage = (function (p1__46886_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,(function (){var G__46895 = format;
var G__46896 = p1__46886_SHARP_.data;
return (kvlt.websocket.format_incoming.cljs$core$IFn$_invoke$arity$2 ? kvlt.websocket.format_incoming.cljs$core$IFn$_invoke$arity$2(G__46895,G__46896) : kvlt.websocket.format_incoming.call(null,G__46895,G__46896));
})());
});
});
kvlt.platform.websocket.chan__GT_ws_BANG_ = (function kvlt$platform$websocket$chan__GT_ws_BANG_(chan,ws,format){
var c__30361__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30361__auto__){
return (function (){
var f__30362__auto__ = (function (){var switch__30100__auto__ = ((function (c__30361__auto__){
return (function (state_46923){
var state_val_46924 = (state_46923[(1)]);
if((state_val_46924 === (1))){
var state_46923__$1 = state_46923;
var statearr_46930_47013 = state_46923__$1;
(statearr_46930_47013[(2)] = null);

(statearr_46930_47013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46924 === (2))){
var state_46923__$1 = state_46923;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46923__$1,(4),chan);
} else {
if((state_val_46924 === (3))){
var inst_46921 = (state_46923[(2)]);
var state_46923__$1 = state_46923;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46923__$1,inst_46921);
} else {
if((state_val_46924 === (4))){
var inst_46909 = (state_46923[(7)]);
var inst_46909__$1 = (state_46923[(2)]);
var state_46923__$1 = (function (){var statearr_46936 = state_46923;
(statearr_46936[(7)] = inst_46909__$1);

return statearr_46936;
})();
if(cljs.core.truth_(inst_46909__$1)){
var statearr_46938_47020 = state_46923__$1;
(statearr_46938_47020[(1)] = (5));

} else {
var statearr_46941_47021 = state_46923__$1;
(statearr_46941_47021[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46924 === (5))){
var inst_46909 = (state_46923[(7)]);
var inst_46911 = (kvlt.websocket.format_outgoing.cljs$core$IFn$_invoke$arity$2 ? kvlt.websocket.format_outgoing.cljs$core$IFn$_invoke$arity$2(format,inst_46909) : kvlt.websocket.format_outgoing.call(null,format,inst_46909));
var inst_46912 = ws.send(inst_46911);
var state_46923__$1 = (function (){var statearr_46944 = state_46923;
(statearr_46944[(8)] = inst_46912);

return statearr_46944;
})();
var statearr_46946_47022 = state_46923__$1;
(statearr_46946_47022[(2)] = null);

(statearr_46946_47022[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46924 === (6))){
var state_46923__$1 = state_46923;
var statearr_46947_47028 = state_46923__$1;
(statearr_46947_47028[(2)] = null);

(statearr_46947_47028[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46924 === (7))){
var inst_46916 = (state_46923[(2)]);
var state_46923__$1 = state_46923;
var statearr_46950_47030 = state_46923__$1;
(statearr_46950_47030[(2)] = inst_46916);

(statearr_46950_47030[(1)] = (3));


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
});})(c__30361__auto__))
;
return ((function (switch__30100__auto__,c__30361__auto__){
return (function() {
var kvlt$platform$websocket$chan__GT_ws_BANG__$_state_machine__30101__auto__ = null;
var kvlt$platform$websocket$chan__GT_ws_BANG__$_state_machine__30101__auto____0 = (function (){
var statearr_46952 = [null,null,null,null,null,null,null,null,null];
(statearr_46952[(0)] = kvlt$platform$websocket$chan__GT_ws_BANG__$_state_machine__30101__auto__);

(statearr_46952[(1)] = (1));

return statearr_46952;
});
var kvlt$platform$websocket$chan__GT_ws_BANG__$_state_machine__30101__auto____1 = (function (state_46923){
while(true){
var ret_value__30102__auto__ = (function (){try{while(true){
var result__30103__auto__ = switch__30100__auto__(state_46923);
if(cljs.core.keyword_identical_QMARK_(result__30103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30103__auto__;
}
break;
}
}catch (e46959){if((e46959 instanceof Object)){
var ex__30104__auto__ = e46959;
var statearr_46960_47032 = state_46923;
(statearr_46960_47032[(5)] = ex__30104__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46923);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46959;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47033 = state_46923;
state_46923 = G__47033;
continue;
} else {
return ret_value__30102__auto__;
}
break;
}
});
kvlt$platform$websocket$chan__GT_ws_BANG__$_state_machine__30101__auto__ = function(state_46923){
switch(arguments.length){
case 0:
return kvlt$platform$websocket$chan__GT_ws_BANG__$_state_machine__30101__auto____0.call(this);
case 1:
return kvlt$platform$websocket$chan__GT_ws_BANG__$_state_machine__30101__auto____1.call(this,state_46923);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
kvlt$platform$websocket$chan__GT_ws_BANG__$_state_machine__30101__auto__.cljs$core$IFn$_invoke$arity$0 = kvlt$platform$websocket$chan__GT_ws_BANG__$_state_machine__30101__auto____0;
kvlt$platform$websocket$chan__GT_ws_BANG__$_state_machine__30101__auto__.cljs$core$IFn$_invoke$arity$1 = kvlt$platform$websocket$chan__GT_ws_BANG__$_state_machine__30101__auto____1;
return kvlt$platform$websocket$chan__GT_ws_BANG__$_state_machine__30101__auto__;
})()
;})(switch__30100__auto__,c__30361__auto__))
})();
var state__30363__auto__ = (function (){var statearr_46961 = (f__30362__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30362__auto__.cljs$core$IFn$_invoke$arity$0() : f__30362__auto__.call(null));
(statearr_46961[(6)] = c__30361__auto__);

return statearr_46961;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30363__auto__);
});})(c__30361__auto__))
);

return c__30361__auto__;
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
var args__4736__auto__ = [];
var len__4730__auto___47034 = arguments.length;
var i__4731__auto___47035 = (0);
while(true){
if((i__4731__auto___47035 < len__4730__auto___47034)){
args__4736__auto__.push((arguments[i__4731__auto___47035]));

var G__47036 = (i__4731__auto___47035 + (1));
i__4731__auto___47035 = G__47036;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return kvlt.platform.websocket.request_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

kvlt.platform.websocket.request_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__46998){
var vec__46999 = p__46998;
var map__47002 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46999,(0),null);
var map__47002__$1 = (((((!((map__47002 == null))))?(((((map__47002.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47002.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47002):map__47002);
var read_chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47002__$1,new cljs.core.Keyword(null,"read-chan","read-chan",-311487928));
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47002__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var write_chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47002__$1,new cljs.core.Keyword(null,"write-chan","write-chan",-1022958832));
var close_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47002__$1,new cljs.core.Keyword(null,"close?","close?",1600185693),true);
var ws = (new kvlt.platform.websocket.WebSocket(url));
var in$ = (function (){var or__4131__auto__ = read_chan;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
}
})();
var out = (function (){var or__4131__auto__ = write_chan;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
}
})();
var chan = kvlt.util.bidirectional_chan.cljs$core$IFn$_invoke$arity$variadic(in$,out,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-close","on-close",-761178394),((function (ws,in$,out,vec__46999,map__47002,map__47002__$1,read_chan,format,write_chan,close_QMARK_){
return (function (){
return ws.close();
});})(ws,in$,out,vec__46999,map__47002,map__47002__$1,read_chan,format,write_chan,close_QMARK_))
,new cljs.core.Keyword(null,"close?","close?",1600185693),close_QMARK_], null)], 0));
var resolved_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return promesa.core.promise(((function (ws,in$,out,chan,resolved_QMARK_,vec__46999,map__47002,map__47002__$1,read_chan,format,write_chan,close_QMARK_){
return (function (resolve,reject){
kvlt.platform.websocket.ws__GT_chan_BANG_(ws,in$,format);

kvlt.platform.websocket.chan__GT_ws_BANG_(out,ws,format);

ws.onopen = ((function (ws,in$,out,chan,resolved_QMARK_,vec__46999,map__47002,map__47002__$1,read_chan,format,write_chan,close_QMARK_){
return (function (){
cljs.core.reset_BANG_(resolved_QMARK_,true);

return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(chan) : resolve.call(null,chan));
});})(ws,in$,out,chan,resolved_QMARK_,vec__46999,map__47002,map__47002__$1,read_chan,format,write_chan,close_QMARK_))
;

return ws.onclose = ((function (ws,in$,out,chan,resolved_QMARK_,vec__46999,map__47002,map__47002__$1,read_chan,format,write_chan,close_QMARK_){
return (function (event){
var temp__5720__auto__ = kvlt.platform.websocket.close_event__GT_maybe_error(event);
if(cljs.core.truth_(temp__5720__auto__)){
var error = temp__5720__auto__;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"kvlt.platform.websocket",null,49,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (error,temp__5720__auto__,ws,in$,out,chan,resolved_QMARK_,vec__46999,map__47002,map__47002__$1,read_chan,format,write_chan,close_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Websocket onclose error",error], null);
});})(error,temp__5720__auto__,ws,in$,out,chan,resolved_QMARK_,vec__46999,map__47002,map__47002__$1,read_chan,format,write_chan,close_QMARK_))
,null)),null,908558415);

if(cljs.core.truth_(cljs.core.deref(resolved_QMARK_))){
} else {
(reject.cljs$core$IFn$_invoke$arity$1 ? reject.cljs$core$IFn$_invoke$arity$1(error) : reject.call(null,error));
}

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});})(ws,in$,out,chan,resolved_QMARK_,vec__46999,map__47002,map__47002__$1,read_chan,format,write_chan,close_QMARK_))
;
});})(ws,in$,out,chan,resolved_QMARK_,vec__46999,map__47002,map__47002__$1,read_chan,format,write_chan,close_QMARK_))
);
});

kvlt.platform.websocket.request_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
kvlt.platform.websocket.request_BANG_.cljs$lang$applyTo = (function (seq46981){
var G__46982 = cljs.core.first(seq46981);
var seq46981__$1 = cljs.core.next(seq46981);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46982,seq46981__$1);
});


//# sourceMappingURL=kvlt.platform.websocket.js.map
