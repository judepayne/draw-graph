// Compiled by ClojureScript 1.10.520 {}
goog.provide('kvlt.platform.websocket');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('kvlt.util');
goog.require('kvlt.websocket');
goog.require('taoensso.timbre');
goog.require('promesa.core');
kvlt.platform.websocket.WebSocket = (((typeof WebSocket !== 'undefined'))?WebSocket:require("websocket").w3cwebsocket);
kvlt.platform.websocket.ws__GT_chan_BANG_ = (function kvlt$platform$websocket$ws__GT_chan_BANG_(ws,chan,format){
return ws.onmessage = (function (p1__31482_SHARP_){
return cljs.core.async.put_BANG_.call(null,chan,kvlt.websocket.format_incoming.call(null,format,p1__31482_SHARP_.data));
});
});
kvlt.platform.websocket.chan__GT_ws_BANG_ = (function kvlt$platform$websocket$chan__GT_ws_BANG_(chan,ws,format){
var c__22181__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22181__auto__){
return (function (){
var f__22182__auto__ = (function (){var switch__22014__auto__ = ((function (c__22181__auto__){
return (function (state_31496){
var state_val_31497 = (state_31496[(1)]);
if((state_val_31497 === (1))){
var state_31496__$1 = state_31496;
var statearr_31498_31510 = state_31496__$1;
(statearr_31498_31510[(2)] = null);

(statearr_31498_31510[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31497 === (2))){
var state_31496__$1 = state_31496;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31496__$1,(4),chan);
} else {
if((state_val_31497 === (3))){
var inst_31494 = (state_31496[(2)]);
var state_31496__$1 = state_31496;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31496__$1,inst_31494);
} else {
if((state_val_31497 === (4))){
var inst_31485 = (state_31496[(7)]);
var inst_31485__$1 = (state_31496[(2)]);
var state_31496__$1 = (function (){var statearr_31499 = state_31496;
(statearr_31499[(7)] = inst_31485__$1);

return statearr_31499;
})();
if(cljs.core.truth_(inst_31485__$1)){
var statearr_31500_31511 = state_31496__$1;
(statearr_31500_31511[(1)] = (5));

} else {
var statearr_31501_31512 = state_31496__$1;
(statearr_31501_31512[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31497 === (5))){
var inst_31485 = (state_31496[(7)]);
var inst_31487 = kvlt.websocket.format_outgoing.call(null,format,inst_31485);
var inst_31488 = ws.send(inst_31487);
var state_31496__$1 = (function (){var statearr_31502 = state_31496;
(statearr_31502[(8)] = inst_31488);

return statearr_31502;
})();
var statearr_31503_31513 = state_31496__$1;
(statearr_31503_31513[(2)] = null);

(statearr_31503_31513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31497 === (6))){
var state_31496__$1 = state_31496;
var statearr_31504_31514 = state_31496__$1;
(statearr_31504_31514[(2)] = null);

(statearr_31504_31514[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31497 === (7))){
var inst_31492 = (state_31496[(2)]);
var state_31496__$1 = state_31496;
var statearr_31505_31515 = state_31496__$1;
(statearr_31505_31515[(2)] = inst_31492);

(statearr_31505_31515[(1)] = (3));


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
});})(c__22181__auto__))
;
return ((function (switch__22014__auto__,c__22181__auto__){
return (function() {
var kvlt$platform$websocket$chan__GT_ws_BANG__$_state_machine__22015__auto__ = null;
var kvlt$platform$websocket$chan__GT_ws_BANG__$_state_machine__22015__auto____0 = (function (){
var statearr_31506 = [null,null,null,null,null,null,null,null,null];
(statearr_31506[(0)] = kvlt$platform$websocket$chan__GT_ws_BANG__$_state_machine__22015__auto__);

(statearr_31506[(1)] = (1));

return statearr_31506;
});
var kvlt$platform$websocket$chan__GT_ws_BANG__$_state_machine__22015__auto____1 = (function (state_31496){
while(true){
var ret_value__22016__auto__ = (function (){try{while(true){
var result__22017__auto__ = switch__22014__auto__.call(null,state_31496);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22017__auto__;
}
break;
}
}catch (e31507){if((e31507 instanceof Object)){
var ex__22018__auto__ = e31507;
var statearr_31508_31516 = state_31496;
(statearr_31508_31516[(5)] = ex__22018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31496);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31507;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31517 = state_31496;
state_31496 = G__31517;
continue;
} else {
return ret_value__22016__auto__;
}
break;
}
});
kvlt$platform$websocket$chan__GT_ws_BANG__$_state_machine__22015__auto__ = function(state_31496){
switch(arguments.length){
case 0:
return kvlt$platform$websocket$chan__GT_ws_BANG__$_state_machine__22015__auto____0.call(this);
case 1:
return kvlt$platform$websocket$chan__GT_ws_BANG__$_state_machine__22015__auto____1.call(this,state_31496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
kvlt$platform$websocket$chan__GT_ws_BANG__$_state_machine__22015__auto__.cljs$core$IFn$_invoke$arity$0 = kvlt$platform$websocket$chan__GT_ws_BANG__$_state_machine__22015__auto____0;
kvlt$platform$websocket$chan__GT_ws_BANG__$_state_machine__22015__auto__.cljs$core$IFn$_invoke$arity$1 = kvlt$platform$websocket$chan__GT_ws_BANG__$_state_machine__22015__auto____1;
return kvlt$platform$websocket$chan__GT_ws_BANG__$_state_machine__22015__auto__;
})()
;})(switch__22014__auto__,c__22181__auto__))
})();
var state__22183__auto__ = (function (){var statearr_31509 = f__22182__auto__.call(null);
(statearr_31509[(6)] = c__22181__auto__);

return statearr_31509;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22183__auto__);
});})(c__22181__auto__))
);

return c__22181__auto__;
});
kvlt.platform.websocket.close_event__GT_maybe_error = (function kvlt$platform$websocket$close_event__GT_maybe_error(ev){
if(cljs.core.truth_(ev.wasClean)){
return null;
} else {
var reason = ev.reason;
var code = ev.code;
return cljs.core.ex_info.call(null,reason,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"message","message",-406056002),reason,new cljs.core.Keyword(null,"error","error",-978969032),code,new cljs.core.Keyword(null,"type","type",1174270348),code,new cljs.core.Keyword(null,"status","status",-1997798413),(0)], null));
}
});
kvlt.platform.websocket.request_BANG_ = (function kvlt$platform$websocket$request_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___31526 = arguments.length;
var i__4731__auto___31527 = (0);
while(true){
if((i__4731__auto___31527 < len__4730__auto___31526)){
args__4736__auto__.push((arguments[i__4731__auto___31527]));

var G__31528 = (i__4731__auto___31527 + (1));
i__4731__auto___31527 = G__31528;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return kvlt.platform.websocket.request_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

kvlt.platform.websocket.request_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__31520){
var vec__31521 = p__31520;
var map__31524 = cljs.core.nth.call(null,vec__31521,(0),null);
var map__31524__$1 = (((((!((map__31524 == null))))?(((((map__31524.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31524.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31524):map__31524);
var read_chan = cljs.core.get.call(null,map__31524__$1,new cljs.core.Keyword(null,"read-chan","read-chan",-311487928));
var format = cljs.core.get.call(null,map__31524__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var write_chan = cljs.core.get.call(null,map__31524__$1,new cljs.core.Keyword(null,"write-chan","write-chan",-1022958832));
var close_QMARK_ = cljs.core.get.call(null,map__31524__$1,new cljs.core.Keyword(null,"close?","close?",1600185693),true);
var ws = (new kvlt.platform.websocket.WebSocket(url));
var in$ = (function (){var or__4131__auto__ = read_chan;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.async.chan.call(null);
}
})();
var out = (function (){var or__4131__auto__ = write_chan;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.async.chan.call(null);
}
})();
var chan = kvlt.util.bidirectional_chan.call(null,in$,out,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-close","on-close",-761178394),((function (ws,in$,out,vec__31521,map__31524,map__31524__$1,read_chan,format,write_chan,close_QMARK_){
return (function (){
return ws.close();
});})(ws,in$,out,vec__31521,map__31524,map__31524__$1,read_chan,format,write_chan,close_QMARK_))
,new cljs.core.Keyword(null,"close?","close?",1600185693),close_QMARK_], null));
var resolved_QMARK_ = cljs.core.atom.call(null,false);
return promesa.core.promise.call(null,((function (ws,in$,out,chan,resolved_QMARK_,vec__31521,map__31524,map__31524__$1,read_chan,format,write_chan,close_QMARK_){
return (function (resolve,reject){
kvlt.platform.websocket.ws__GT_chan_BANG_.call(null,ws,in$,format);

kvlt.platform.websocket.chan__GT_ws_BANG_.call(null,out,ws,format);

ws.onopen = ((function (ws,in$,out,chan,resolved_QMARK_,vec__31521,map__31524,map__31524__$1,read_chan,format,write_chan,close_QMARK_){
return (function (){
cljs.core.reset_BANG_.call(null,resolved_QMARK_,true);

return resolve.call(null,chan);
});})(ws,in$,out,chan,resolved_QMARK_,vec__31521,map__31524,map__31524__$1,read_chan,format,write_chan,close_QMARK_))
;

return ws.onclose = ((function (ws,in$,out,chan,resolved_QMARK_,vec__31521,map__31524,map__31524__$1,read_chan,format,write_chan,close_QMARK_){
return (function (event){
var temp__5720__auto__ = kvlt.platform.websocket.close_event__GT_maybe_error.call(null,event);
if(cljs.core.truth_(temp__5720__auto__)){
var error = temp__5720__auto__;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"kvlt.platform.websocket","/private/var/folders/t5/f3xh0rdx5ds8d5rn2wr52fh40000gn/T/form-init4657202228440285352.clj",49,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (error,temp__5720__auto__,ws,in$,out,chan,resolved_QMARK_,vec__31521,map__31524,map__31524__$1,read_chan,format,write_chan,close_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Websocket onclose error",error], null);
});})(error,temp__5720__auto__,ws,in$,out,chan,resolved_QMARK_,vec__31521,map__31524,map__31524__$1,read_chan,format,write_chan,close_QMARK_))
,null)),null,1787950787);

if(cljs.core.truth_(cljs.core.deref.call(null,resolved_QMARK_))){
} else {
reject.call(null,error);
}

return cljs.core.async.close_BANG_.call(null,chan);
} else {
return null;
}
});})(ws,in$,out,chan,resolved_QMARK_,vec__31521,map__31524,map__31524__$1,read_chan,format,write_chan,close_QMARK_))
;
});})(ws,in$,out,chan,resolved_QMARK_,vec__31521,map__31524,map__31524__$1,read_chan,format,write_chan,close_QMARK_))
);
});

kvlt.platform.websocket.request_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
kvlt.platform.websocket.request_BANG_.cljs$lang$applyTo = (function (seq31518){
var G__31519 = cljs.core.first.call(null,seq31518);
var seq31518__$1 = cljs.core.next.call(null,seq31518);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31519,seq31518__$1);
});


//# sourceMappingURL=websocket.js.map
