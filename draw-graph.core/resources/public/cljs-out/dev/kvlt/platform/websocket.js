// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('kvlt.platform.websocket');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async');
goog.require('kvlt.util');
goog.require('kvlt.websocket');
goog.require('taoensso.timbre');
goog.require('promesa.core');
kvlt.platform.websocket.WebSocket = (((typeof WebSocket !== 'undefined'))?WebSocket:require("websocket").w3cwebsocket);
kvlt.platform.websocket.ws__GT_chan_BANG_ = (function kvlt$platform$websocket$ws__GT_chan_BANG_(ws,chan,format){
return ws.onmessage = (function (p1__35200_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,(function (){var G__35201 = format;
var G__35202 = p1__35200_SHARP_.data;
return (kvlt.websocket.format_incoming.cljs$core$IFn$_invoke$arity$2 ? kvlt.websocket.format_incoming.cljs$core$IFn$_invoke$arity$2(G__35201,G__35202) : kvlt.websocket.format_incoming.call(null,G__35201,G__35202));
})());
});
});
kvlt.platform.websocket.chan__GT_ws_BANG_ = (function kvlt$platform$websocket$chan__GT_ws_BANG_(chan,ws,format){
var c__25780__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25780__auto__){
return (function (){
var f__25781__auto__ = (function (){var switch__25589__auto__ = ((function (c__25780__auto__){
return (function (state_35216){
var state_val_35217 = (state_35216[(1)]);
if((state_val_35217 === (1))){
var state_35216__$1 = state_35216;
var statearr_35218_35230 = state_35216__$1;
(statearr_35218_35230[(2)] = null);

(statearr_35218_35230[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35217 === (2))){
var state_35216__$1 = state_35216;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35216__$1,(4),chan);
} else {
if((state_val_35217 === (3))){
var inst_35214 = (state_35216[(2)]);
var state_35216__$1 = state_35216;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35216__$1,inst_35214);
} else {
if((state_val_35217 === (4))){
var inst_35205 = (state_35216[(7)]);
var inst_35205__$1 = (state_35216[(2)]);
var state_35216__$1 = (function (){var statearr_35219 = state_35216;
(statearr_35219[(7)] = inst_35205__$1);

return statearr_35219;
})();
if(cljs.core.truth_(inst_35205__$1)){
var statearr_35220_35231 = state_35216__$1;
(statearr_35220_35231[(1)] = (5));

} else {
var statearr_35221_35232 = state_35216__$1;
(statearr_35221_35232[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_35217 === (5))){
var inst_35205 = (state_35216[(7)]);
var inst_35207 = (kvlt.websocket.format_outgoing.cljs$core$IFn$_invoke$arity$2 ? kvlt.websocket.format_outgoing.cljs$core$IFn$_invoke$arity$2(format,inst_35205) : kvlt.websocket.format_outgoing.call(null,format,inst_35205));
var inst_35208 = ws.send(inst_35207);
var state_35216__$1 = (function (){var statearr_35222 = state_35216;
(statearr_35222[(8)] = inst_35208);

return statearr_35222;
})();
var statearr_35223_35233 = state_35216__$1;
(statearr_35223_35233[(2)] = null);

(statearr_35223_35233[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35217 === (6))){
var state_35216__$1 = state_35216;
var statearr_35224_35234 = state_35216__$1;
(statearr_35224_35234[(2)] = null);

(statearr_35224_35234[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_35217 === (7))){
var inst_35212 = (state_35216[(2)]);
var state_35216__$1 = state_35216;
var statearr_35225_35235 = state_35216__$1;
(statearr_35225_35235[(2)] = inst_35212);

(statearr_35225_35235[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(c__25780__auto__))
;
return ((function (switch__25589__auto__,c__25780__auto__){
return (function() {
var kvlt$platform$websocket$chan__GT_ws_BANG__$_state_machine__25590__auto__ = null;
var kvlt$platform$websocket$chan__GT_ws_BANG__$_state_machine__25590__auto____0 = (function (){
var statearr_35226 = [null,null,null,null,null,null,null,null,null];
(statearr_35226[(0)] = kvlt$platform$websocket$chan__GT_ws_BANG__$_state_machine__25590__auto__);

(statearr_35226[(1)] = (1));

return statearr_35226;
});
var kvlt$platform$websocket$chan__GT_ws_BANG__$_state_machine__25590__auto____1 = (function (state_35216){
while(true){
var ret_value__25591__auto__ = (function (){try{while(true){
var result__25592__auto__ = switch__25589__auto__(state_35216);
if(cljs.core.keyword_identical_QMARK_(result__25592__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__25592__auto__;
}
break;
}
}catch (e35227){if((e35227 instanceof Object)){
var ex__25593__auto__ = e35227;
var statearr_35228_35236 = state_35216;
(statearr_35228_35236[(5)] = ex__25593__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35216);

return cljs.core.cst$kw$recur;
} else {
throw e35227;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25591__auto__,cljs.core.cst$kw$recur)){
var G__35237 = state_35216;
state_35216 = G__35237;
continue;
} else {
return ret_value__25591__auto__;
}
break;
}
});
kvlt$platform$websocket$chan__GT_ws_BANG__$_state_machine__25590__auto__ = function(state_35216){
switch(arguments.length){
case 0:
return kvlt$platform$websocket$chan__GT_ws_BANG__$_state_machine__25590__auto____0.call(this);
case 1:
return kvlt$platform$websocket$chan__GT_ws_BANG__$_state_machine__25590__auto____1.call(this,state_35216);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
kvlt$platform$websocket$chan__GT_ws_BANG__$_state_machine__25590__auto__.cljs$core$IFn$_invoke$arity$0 = kvlt$platform$websocket$chan__GT_ws_BANG__$_state_machine__25590__auto____0;
kvlt$platform$websocket$chan__GT_ws_BANG__$_state_machine__25590__auto__.cljs$core$IFn$_invoke$arity$1 = kvlt$platform$websocket$chan__GT_ws_BANG__$_state_machine__25590__auto____1;
return kvlt$platform$websocket$chan__GT_ws_BANG__$_state_machine__25590__auto__;
})()
;})(switch__25589__auto__,c__25780__auto__))
})();
var state__25782__auto__ = (function (){var statearr_35229 = (f__25781__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25781__auto__.cljs$core$IFn$_invoke$arity$0() : f__25781__auto__.call(null));
(statearr_35229[(6)] = c__25780__auto__);

return statearr_35229;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25782__auto__);
});})(c__25780__auto__))
);

return c__25780__auto__;
});
kvlt.platform.websocket.close_event__GT_maybe_error = (function kvlt$platform$websocket$close_event__GT_maybe_error(ev){
if(cljs.core.truth_(ev.wasClean)){
return null;
} else {
var reason = ev.reason;
var code = ev.code;
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(reason,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$message,reason,cljs.core.cst$kw$error,code,cljs.core.cst$kw$type,code,cljs.core.cst$kw$status,(0)], null));
}
});
kvlt.platform.websocket.request_BANG_ = (function kvlt$platform$websocket$request_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___35246 = arguments.length;
var i__4731__auto___35247 = (0);
while(true){
if((i__4731__auto___35247 < len__4730__auto___35246)){
args__4736__auto__.push((arguments[i__4731__auto___35247]));

var G__35248 = (i__4731__auto___35247 + (1));
i__4731__auto___35247 = G__35248;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return kvlt.platform.websocket.request_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

kvlt.platform.websocket.request_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__35240){
var vec__35241 = p__35240;
var map__35244 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35241,(0),null);
var map__35244__$1 = (((((!((map__35244 == null))))?(((((map__35244.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35244.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35244):map__35244);
var read_chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35244__$1,cljs.core.cst$kw$read_DASH_chan);
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35244__$1,cljs.core.cst$kw$format);
var write_chan = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35244__$1,cljs.core.cst$kw$write_DASH_chan);
var close_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35244__$1,cljs.core.cst$kw$close_QMARK_,true);
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
var chan = kvlt.util.bidirectional_chan.cljs$core$IFn$_invoke$arity$variadic(in$,out,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_close,((function (ws,in$,out,vec__35241,map__35244,map__35244__$1,read_chan,format,write_chan,close_QMARK_){
return (function (){
return ws.close();
});})(ws,in$,out,vec__35241,map__35244,map__35244__$1,read_chan,format,write_chan,close_QMARK_))
,cljs.core.cst$kw$close_QMARK_,close_QMARK_], null)], 0));
var resolved_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return promesa.core.promise(((function (ws,in$,out,chan,resolved_QMARK_,vec__35241,map__35244,map__35244__$1,read_chan,format,write_chan,close_QMARK_){
return (function (resolve,reject){
kvlt.platform.websocket.ws__GT_chan_BANG_(ws,in$,format);

kvlt.platform.websocket.chan__GT_ws_BANG_(out,ws,format);

ws.onopen = ((function (ws,in$,out,chan,resolved_QMARK_,vec__35241,map__35244,map__35244__$1,read_chan,format,write_chan,close_QMARK_){
return (function (){
cljs.core.reset_BANG_(resolved_QMARK_,true);

return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(chan) : resolve.call(null,chan));
});})(ws,in$,out,chan,resolved_QMARK_,vec__35241,map__35244,map__35244__$1,read_chan,format,write_chan,close_QMARK_))
;

return ws.onclose = ((function (ws,in$,out,chan,resolved_QMARK_,vec__35241,map__35244,map__35244__$1,read_chan,format,write_chan,close_QMARK_){
return (function (event){
var temp__5720__auto__ = kvlt.platform.websocket.close_event__GT_maybe_error(event);
if(cljs.core.truth_(temp__5720__auto__)){
var error = temp__5720__auto__;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$error,"kvlt.platform.websocket","/private/var/folders/t5/f3xh0rdx5ds8d5rn2wr52fh40000gn/T/form-init606781200357277089.clj",49,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (error,temp__5720__auto__,ws,in$,out,chan,resolved_QMARK_,vec__35241,map__35244,map__35244__$1,read_chan,format,write_chan,close_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Websocket onclose error",error], null);
});})(error,temp__5720__auto__,ws,in$,out,chan,resolved_QMARK_,vec__35241,map__35244,map__35244__$1,read_chan,format,write_chan,close_QMARK_))
,null)),null,-932943489);

if(cljs.core.truth_(cljs.core.deref(resolved_QMARK_))){
} else {
(reject.cljs$core$IFn$_invoke$arity$1 ? reject.cljs$core$IFn$_invoke$arity$1(error) : reject.call(null,error));
}

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});})(ws,in$,out,chan,resolved_QMARK_,vec__35241,map__35244,map__35244__$1,read_chan,format,write_chan,close_QMARK_))
;
});})(ws,in$,out,chan,resolved_QMARK_,vec__35241,map__35244,map__35244__$1,read_chan,format,write_chan,close_QMARK_))
);
});

kvlt.platform.websocket.request_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
kvlt.platform.websocket.request_BANG_.cljs$lang$applyTo = (function (seq35238){
var G__35239 = cljs.core.first(seq35238);
var seq35238__$1 = cljs.core.next(seq35238);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35239,seq35238__$1);
});

