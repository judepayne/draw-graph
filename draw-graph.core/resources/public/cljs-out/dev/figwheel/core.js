// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.core');
goog.require('cljs.core');
goog.require('figwheel.tools.heads_up');
goog.require('goog.object');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('goog.log');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('goog.debug.Console');
goog.require('goog.async.Deferred');
goog.require('goog.Promise');
goog.require('goog.events.EventTarget');
goog.require('goog.events.Event');
figwheel.core.distinct_by = (function figwheel$core$distinct_by(f,coll){
var seen = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);
return cljs.core.filter.call(null,((function (seen){
return (function (p1__45399_SHARP_){
var k = f.call(null,p1__45399_SHARP_);
var res = cljs.core.not.call(null,cljs.core.deref.call(null,seen).call(null,k));
cljs.core._vreset_BANG_.call(null,seen,cljs.core.conj.call(null,cljs.core._deref.call(null,seen),k));

return res;
});})(seen))
,coll);
});
figwheel.core.map_keys = (function figwheel$core$map_keys(f,coll){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__45400){
var vec__45401 = p__45400;
var k = cljs.core.nth.call(null,vec__45401,(0),null);
var v = cljs.core.nth.call(null,vec__45401,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null,k),v], null);
})),coll);
});
figwheel.core._STAR_inline_code_message_max_column_STAR_ = (80);
figwheel.core.wrap_line = (function figwheel$core$wrap_line(text,size){
return cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,[".{1,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"}\\s|.{1,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"}"].join('')),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace.call(null,text,/\n/," "))," "].join(''));
});
figwheel.core.cross_format = (function figwheel$core$cross_format(var_args){
var args__4736__auto__ = [];
var len__4730__auto___45405 = arguments.length;
var i__4731__auto___45406 = (0);
while(true){
if((i__4731__auto___45406 < len__4730__auto___45405)){
args__4736__auto__.push((arguments[i__4731__auto___45406]));

var G__45407 = (i__4731__auto___45406 + (1));
i__4731__auto___45406 = G__45407;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.core.cross_format.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.core.cross_format.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,goog.string.format,args);
});

figwheel.core.cross_format.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.core.cross_format.cljs$lang$applyTo = (function (seq45404){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45404));
});

figwheel.core.pointer_message_lines = (function figwheel$core$pointer_message_lines(p__45410){
var map__45411 = p__45410;
var map__45411__$1 = (((((!((map__45411 == null))))?(((((map__45411.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45411.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45411):map__45411);
var message = cljs.core.get.call(null,map__45411__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var column = cljs.core.get.call(null,map__45411__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(((column + cljs.core.count.call(null,message)) > figwheel.core._STAR_inline_code_message_max_column_STAR_)){
return cljs.core.mapv.call(null,((function (map__45411,map__45411__$1,message,column){
return (function (p1__45409_SHARP_){
return cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-message","error-message",1756021561),null], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__45409_SHARP_], null)));
});})(map__45411,map__45411__$1,message,column))
,cljs.core.cons.call(null,figwheel.core.cross_format.call(null,(function (){var col = (column - (1));
return ["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((col === (0)))?null:col)),"s%s"].join('');
})(),"","^---"),cljs.core.map.call(null,((function (map__45411,map__45411__$1,message,column){
return (function (p1__45408_SHARP_){
return figwheel.core.cross_format.call(null,["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.core._STAR_inline_code_message_max_column_STAR_),"s"].join(''),p1__45408_SHARP_);
});})(map__45411,map__45411__$1,message,column))
,figwheel.core.wrap_line.call(null,message,(figwheel.core._STAR_inline_code_message_max_column_STAR_ - (10))))));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-message","error-message",1756021561),null,figwheel.core.cross_format.call(null,(function (){var col = (column - (1));
return ["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((col === (0)))?null:col)),"s%s %s"].join('');
})(),"","^---",message)], null)], null);
}
});
figwheel.core.inline_message_display_data = (function figwheel$core$inline_message_display_data(p__45414){
var map__45415 = p__45414;
var map__45415__$1 = (((((!((map__45415 == null))))?(((((map__45415.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45415.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45415):map__45415);
var message_data = map__45415__$1;
var message = cljs.core.get.call(null,map__45415__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var line = cljs.core.get.call(null,map__45415__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__45415__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var file_excerpt = cljs.core.get.call(null,map__45415__$1,new cljs.core.Keyword(null,"file-excerpt","file-excerpt",-1132330744));
if(cljs.core.truth_(file_excerpt)){
var map__45417 = file_excerpt;
var map__45417__$1 = (((((!((map__45417 == null))))?(((((map__45417.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45417.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45417):map__45417);
var start_line = cljs.core.get.call(null,map__45417__$1,new cljs.core.Keyword(null,"start-line","start-line",-41746654));
var path = cljs.core.get.call(null,map__45417__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var excerpt = cljs.core.get.call(null,map__45417__$1,new cljs.core.Keyword(null,"excerpt","excerpt",219850763));
var lines = cljs.core.map_indexed.call(null,((function (map__45417,map__45417__$1,start_line,path,excerpt,map__45415,map__45415__$1,message_data,message,line,column,file_excerpt){
return (function (i,l){
var ln = (i + start_line);
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[((cljs.core._EQ_.call(null,line,ln))?new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357):new cljs.core.Keyword(null,"code-line","code-line",-2138627853)),ln,l],null));
});})(map__45417,map__45417__$1,start_line,path,excerpt,map__45415,map__45415__$1,message_data,message,line,column,file_excerpt))
,clojure.string.split_lines.call(null,excerpt));
var vec__45418 = cljs.core.split_with.call(null,((function (map__45417,map__45417__$1,start_line,path,excerpt,lines,map__45415,map__45415__$1,message_data,message,line,column,file_excerpt){
return (function (p1__45413_SHARP_){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357),cljs.core.first.call(null,p1__45413_SHARP_));
});})(map__45417,map__45417__$1,start_line,path,excerpt,lines,map__45415,map__45415__$1,message_data,message,line,column,file_excerpt))
,lines);
var begin = cljs.core.nth.call(null,vec__45418,(0),null);
var end = cljs.core.nth.call(null,vec__45418,(1),null);
return cljs.core.concat.call(null,cljs.core.take_last.call(null,(5),begin),cljs.core.take.call(null,(1),end),figwheel.core.pointer_message_lines.call(null,message_data),cljs.core.take.call(null,(5),cljs.core.rest.call(null,end)));
} else {
return null;
}
});
figwheel.core.file_line_column = (function figwheel$core$file_line_column(p__45422){
var map__45423 = p__45422;
var map__45423__$1 = (((((!((map__45423 == null))))?(((((map__45423.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45423.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45423):map__45423);
var file = cljs.core.get.call(null,map__45423__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__45423__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__45423__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__45425 = "";
var G__45425__$1 = (cljs.core.truth_(file)?[G__45425,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__45425);
var G__45425__$2 = (cljs.core.truth_(line)?[G__45425__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__45425__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = line;
if(cljs.core.truth_(and__4120__auto__)){
return column;
} else {
return and__4120__auto__;
}
})())){
return [G__45425__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__45425__$2;
}
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.logger !== 'undefined')){
} else {
figwheel.core.logger = goog.log.getLogger("Figwheel");
}

figwheel.core.console_logging = (function figwheel$core$console_logging(){
if(cljs.core.truth_(goog.object.get(goog.debug.Console,"instance"))){
} else {
var c_45480 = (new goog.debug.Console());
var G__45432_45481 = c_45480.getFormatter();
goog.object.set(G__45432_45481,"showAbsoluteTime",false);

goog.object.set(G__45432_45481,"showRelativeTime",false);


goog.object.set(goog.debug.Console,"instance",c_45480);

}

var temp__5720__auto__ = goog.object.get(goog.debug.Console,"instance");
if(cljs.core.truth_(temp__5720__auto__)){
var console_instance = temp__5720__auto__;
console_instance.setCapturing(true);

return true;
} else {
return null;
}
});
goog.exportSymbol('figwheel.core.console_logging', figwheel.core.console_logging);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.log_console !== 'undefined')){
} else {
figwheel.core.log_console = figwheel.core.console_logging.call(null);
}

figwheel.core.event_target = (((typeof document !== 'undefined'))?document:(new goog.events.EventTarget()));
goog.exportSymbol('figwheel.core.event_target', figwheel.core.event_target);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.listener_key_map !== 'undefined')){
} else {
figwheel.core.listener_key_map = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}

figwheel.core.unlisten = (function figwheel$core$unlisten(ky,event_name){
var temp__5720__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.core.listener_key_map),ky);
if(cljs.core.truth_(temp__5720__auto__)){
var f = temp__5720__auto__;
return figwheel.core.event_target.removeEventListener(cljs.core.name.call(null,event_name),f);
} else {
return null;
}
});

figwheel.core.listen = (function figwheel$core$listen(ky,event_name,f){
figwheel.core.unlisten.call(null,ky,event_name);

figwheel.core.event_target.addEventListener(cljs.core.name.call(null,event_name),f);

return cljs.core.swap_BANG_.call(null,figwheel.core.listener_key_map,cljs.core.assoc,ky,f);
});

figwheel.core.dispatch_event = (function figwheel$core$dispatch_event(event_name,data){
return figwheel.core.event_target.dispatchEvent((function (){var G__45433 = (((figwheel.core.event_target instanceof goog.events.EventTarget))?(new goog.events.Event(cljs.core.name.call(null,event_name),figwheel.core.event_target)):(new Event(cljs.core.name.call(null,event_name),figwheel.core.event_target)));
goog.object.add(G__45433,"data",(function (){var or__4131__auto__ = data;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());

return G__45433;
})());
});

figwheel.core.event_data = (function figwheel$core$event_data(e){
return goog.object.get((function (){var temp__5718__auto__ = e.event_;
if(cljs.core.truth_(temp__5718__auto__)){
var e__$1 = temp__5718__auto__;
return e__$1;
} else {
return e;
}
})(),"data");
});


/** @define {boolean} */
goog.define("figwheel.core.load_warninged_code",false);


/** @define {boolean} */
goog.define("figwheel.core.heads_up_display",true);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.state !== 'undefined')){
} else {
figwheel.core.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),cljs.core.PersistentArrayMap.EMPTY], null));
}

figwheel.core.heads_up_display_QMARK_ = (function figwheel$core$heads_up_display_QMARK_(){
return ((figwheel.core.heads_up_display) && ((!((goog.global.document == null)))));
});

var last_reload_timestamp_45482 = cljs.core.atom.call(null,(0));
var promise_chain_45483 = (new goog.Promise(((function (last_reload_timestamp_45482){
return (function (r,_){
return r.call(null,true);
});})(last_reload_timestamp_45482))
));
figwheel.core.render_watcher = ((function (last_reload_timestamp_45482,promise_chain_45483){
return (function figwheel$core$render_watcher(_,___$1,o,n){
if(figwheel.core.heads_up_display_QMARK_.call(null)){
var temp__5718__auto__ = (function (){var temp__5720__auto__ = cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null));
if(cljs.core.truth_(temp__5720__auto__)){
var ts = temp__5720__auto__;
var and__4120__auto__ = (cljs.core.deref.call(null,last_reload_timestamp_45482) < ts);
if(and__4120__auto__){
return ts;
} else {
return and__4120__auto__;
}
} else {
return null;
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var ts = temp__5718__auto__;
var warnings = cljs.core.not_empty.call(null,cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null)));
var exception = cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"exception","exception",-335277064)], null));
cljs.core.reset_BANG_.call(null,last_reload_timestamp_45482,ts);

if(cljs.core.truth_(warnings)){
return promise_chain_45483.then(((function (warnings,exception,ts,temp__5718__auto__,last_reload_timestamp_45482,promise_chain_45483){
return (function (){
var warn = cljs.core.first.call(null,warnings);
var _STAR_inline_code_message_max_column_STAR__orig_val__45434 = figwheel.core._STAR_inline_code_message_max_column_STAR_;
var _STAR_inline_code_message_max_column_STAR__temp_val__45435 = (132);
figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__temp_val__45435;

try{return figwheel.tools.heads_up.display_warning.call(null,cljs.core.assoc.call(null,warn,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185),figwheel.core.inline_message_display_data.call(null,warn))).then(((function (_STAR_inline_code_message_max_column_STAR__orig_val__45434,_STAR_inline_code_message_max_column_STAR__temp_val__45435,warn,warnings,exception,ts,temp__5718__auto__,last_reload_timestamp_45482,promise_chain_45483){
return (function (){
var seq__45436 = cljs.core.seq.call(null,cljs.core.rest.call(null,warnings));
var chunk__45437 = null;
var count__45438 = (0);
var i__45439 = (0);
while(true){
if((i__45439 < count__45438)){
var w = cljs.core._nth.call(null,chunk__45437,i__45439);
figwheel.tools.heads_up.append_warning_message.call(null,w);


var G__45484 = seq__45436;
var G__45485 = chunk__45437;
var G__45486 = count__45438;
var G__45487 = (i__45439 + (1));
seq__45436 = G__45484;
chunk__45437 = G__45485;
count__45438 = G__45486;
i__45439 = G__45487;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__45436);
if(temp__5720__auto__){
var seq__45436__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45436__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__45436__$1);
var G__45488 = cljs.core.chunk_rest.call(null,seq__45436__$1);
var G__45489 = c__4550__auto__;
var G__45490 = cljs.core.count.call(null,c__4550__auto__);
var G__45491 = (0);
seq__45436 = G__45488;
chunk__45437 = G__45489;
count__45438 = G__45490;
i__45439 = G__45491;
continue;
} else {
var w = cljs.core.first.call(null,seq__45436__$1);
figwheel.tools.heads_up.append_warning_message.call(null,w);


var G__45492 = cljs.core.next.call(null,seq__45436__$1);
var G__45493 = null;
var G__45494 = (0);
var G__45495 = (0);
seq__45436 = G__45492;
chunk__45437 = G__45493;
count__45438 = G__45494;
i__45439 = G__45495;
continue;
}
} else {
return null;
}
}
break;
}
});})(_STAR_inline_code_message_max_column_STAR__orig_val__45434,_STAR_inline_code_message_max_column_STAR__temp_val__45435,warn,warnings,exception,ts,temp__5718__auto__,last_reload_timestamp_45482,promise_chain_45483))
);
}finally {figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__orig_val__45434;
}});})(warnings,exception,ts,temp__5718__auto__,last_reload_timestamp_45482,promise_chain_45483))
);
} else {
if(cljs.core.truth_(exception)){
return promise_chain_45483.then(((function (warnings,exception,ts,temp__5718__auto__,last_reload_timestamp_45482,promise_chain_45483){
return (function (){
var _STAR_inline_code_message_max_column_STAR__orig_val__45440 = figwheel.core._STAR_inline_code_message_max_column_STAR_;
var _STAR_inline_code_message_max_column_STAR__temp_val__45441 = (132);
figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__temp_val__45441;

try{return figwheel.tools.heads_up.display_exception.call(null,cljs.core.assoc.call(null,exception,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185),figwheel.core.inline_message_display_data.call(null,exception)));
}finally {figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__orig_val__45440;
}});})(warnings,exception,ts,temp__5718__auto__,last_reload_timestamp_45482,promise_chain_45483))
);
} else {
return promise_chain_45483.then(((function (warnings,exception,ts,temp__5718__auto__,last_reload_timestamp_45482,promise_chain_45483){
return (function (){
return figwheel.tools.heads_up.flash_loaded.call(null);
});})(warnings,exception,ts,temp__5718__auto__,last_reload_timestamp_45482,promise_chain_45483))
);

}
}
} else {
return null;
}
} else {
return null;
}
});})(last_reload_timestamp_45482,promise_chain_45483))
;

cljs.core.add_watch.call(null,figwheel.core.state,new cljs.core.Keyword("figwheel.core","render-watcher","figwheel.core/render-watcher",2046135910),figwheel.core.render_watcher);

figwheel.core.immutable_ns_QMARK_ = (function figwheel$core$immutable_ns_QMARK_(ns){
var ns__$1 = cljs.core.name.call(null,ns);
var or__4131__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, ["cljs.nodejs",null,"goog",null,"figwheel.connect",null,"cljs.core",null,"figwheel.preload",null], null), null).call(null,ns__$1);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = goog.string.startsWith("clojure.",ns__$1);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return goog.string.startsWith("goog.",ns__$1);
}
}
});

figwheel.core.name__GT_path = (function figwheel$core$name__GT_path(ns){
return goog.object.get(goog.dependencies_.nameToPath,ns);
});

figwheel.core.provided_QMARK_ = (function figwheel$core$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.core.name__GT_path.call(null,cljs.core.name.call(null,ns)));
});

figwheel.core.ns_exists_QMARK_ = (function figwheel$core$ns_exists_QMARK_(ns){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,ns),".")) == null)));
});

figwheel.core.reload_ns_QMARK_ = (function figwheel$core$reload_ns_QMARK_(namespace){
var meta_data = cljs.core.meta.call(null,namespace);
var and__4120__auto__ = cljs.core.not.call(null,figwheel.core.immutable_ns_QMARK_.call(null,namespace));
if(and__4120__auto__){
var and__4120__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data));
if(and__4120__auto____$1){
var or__4131__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
var or__4131__auto____$2 = figwheel.core.provided_QMARK_.call(null,namespace);
if(cljs.core.truth_(or__4131__auto____$2)){
return or__4131__auto____$2;
} else {
return figwheel.core.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
});

figwheel.core.call_hooks = (function figwheel$core$call_hooks(var_args){
var args__4736__auto__ = [];
var len__4730__auto___45496 = arguments.length;
var i__4731__auto___45497 = (0);
while(true){
if((i__4731__auto___45497 < len__4730__auto___45496)){
args__4736__auto__.push((arguments[i__4731__auto___45497]));

var G__45498 = (i__4731__auto___45497 + (1));
i__4731__auto___45497 = G__45498;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return figwheel.core.call_hooks.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

figwheel.core.call_hooks.cljs$core$IFn$_invoke$arity$variadic = (function (hook_key,args){
var hooks = cljs.core.keep.call(null,(function (p__45444){
var vec__45445 = p__45444;
var n = cljs.core.nth.call(null,vec__45445,(0),null);
var mdata = cljs.core.nth.call(null,vec__45445,(1),null);
var temp__5720__auto__ = cljs.core.get_in.call(null,mdata,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),hook_key], null));
if(cljs.core.truth_(temp__5720__auto__)){
var f = temp__5720__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,f], null);
} else {
return null;
}
}),new cljs.core.Keyword("figwheel.core","metadata","figwheel.core/metadata",-720139885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,figwheel.core.state)));
var seq__45448 = cljs.core.seq.call(null,hooks);
var chunk__45449 = null;
var count__45450 = (0);
var i__45451 = (0);
while(true){
if((i__45451 < count__45450)){
var vec__45458 = cljs.core._nth.call(null,chunk__45449,i__45451);
var n = cljs.core.nth.call(null,vec__45458,(0),null);
var f = cljs.core.nth.call(null,vec__45458,(1),null);
var temp__5718__auto___45499 = cljs.core.reduce.call(null,((function (seq__45448,chunk__45449,count__45450,i__45451,vec__45458,n,f,hooks){
return (function (p1__45426_SHARP_,p2__45427_SHARP_){
if(cljs.core.truth_(p1__45426_SHARP_)){
return goog.object.get(p1__45426_SHARP_,p2__45427_SHARP_);
} else {
return null;
}
});})(seq__45448,chunk__45449,count__45450,i__45451,vec__45458,n,f,hooks))
,goog.global,cljs.core.map.call(null,cljs.core.str,cljs.core.concat.call(null,clojure.string.split.call(null,n,/\./),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null))));
if(cljs.core.truth_(temp__5718__auto___45499)){
var hook_45500 = temp__5718__auto___45499;
goog.log.info(figwheel.core.logger,["Calling ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));

cljs.core.apply.call(null,hook_45500,args);
} else {
goog.log.warning(figwheel.core.logger,["Unable to find ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
}


var G__45501 = seq__45448;
var G__45502 = chunk__45449;
var G__45503 = count__45450;
var G__45504 = (i__45451 + (1));
seq__45448 = G__45501;
chunk__45449 = G__45502;
count__45450 = G__45503;
i__45451 = G__45504;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__45448);
if(temp__5720__auto__){
var seq__45448__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45448__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__45448__$1);
var G__45505 = cljs.core.chunk_rest.call(null,seq__45448__$1);
var G__45506 = c__4550__auto__;
var G__45507 = cljs.core.count.call(null,c__4550__auto__);
var G__45508 = (0);
seq__45448 = G__45505;
chunk__45449 = G__45506;
count__45450 = G__45507;
i__45451 = G__45508;
continue;
} else {
var vec__45461 = cljs.core.first.call(null,seq__45448__$1);
var n = cljs.core.nth.call(null,vec__45461,(0),null);
var f = cljs.core.nth.call(null,vec__45461,(1),null);
var temp__5718__auto___45509 = cljs.core.reduce.call(null,((function (seq__45448,chunk__45449,count__45450,i__45451,vec__45461,n,f,seq__45448__$1,temp__5720__auto__,hooks){
return (function (p1__45426_SHARP_,p2__45427_SHARP_){
if(cljs.core.truth_(p1__45426_SHARP_)){
return goog.object.get(p1__45426_SHARP_,p2__45427_SHARP_);
} else {
return null;
}
});})(seq__45448,chunk__45449,count__45450,i__45451,vec__45461,n,f,seq__45448__$1,temp__5720__auto__,hooks))
,goog.global,cljs.core.map.call(null,cljs.core.str,cljs.core.concat.call(null,clojure.string.split.call(null,n,/\./),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null))));
if(cljs.core.truth_(temp__5718__auto___45509)){
var hook_45510 = temp__5718__auto___45509;
goog.log.info(figwheel.core.logger,["Calling ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));

cljs.core.apply.call(null,hook_45510,args);
} else {
goog.log.warning(figwheel.core.logger,["Unable to find ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
}


var G__45511 = cljs.core.next.call(null,seq__45448__$1);
var G__45512 = null;
var G__45513 = (0);
var G__45514 = (0);
seq__45448 = G__45511;
chunk__45449 = G__45512;
count__45450 = G__45513;
i__45451 = G__45514;
continue;
}
} else {
return null;
}
}
break;
}
});

figwheel.core.call_hooks.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
figwheel.core.call_hooks.cljs$lang$applyTo = (function (seq45442){
var G__45443 = cljs.core.first.call(null,seq45442);
var seq45442__$1 = cljs.core.next.call(null,seq45442);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45443,seq45442__$1);
});


figwheel.core.reload_namespaces = (function figwheel$core$reload_namespaces(namespaces,figwheel_meta){
var figwheel_meta__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__45464){
var vec__45465 = p__45464;
var k = cljs.core.nth.call(null,vec__45465,(0),null);
var v = cljs.core.nth.call(null,vec__45465,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,k),v], null);
})),cljs.core.js__GT_clj.call(null,figwheel_meta,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
var namespaces__$1 = cljs.core.map.call(null,((function (figwheel_meta__$1){
return (function (p1__45428_SHARP_){
return cljs.core.with_meta.call(null,cljs.core.symbol.call(null,p1__45428_SHARP_),cljs.core.get.call(null,figwheel_meta__$1,p1__45428_SHARP_));
});})(figwheel_meta__$1))
,namespaces);
cljs.core.swap_BANG_.call(null,figwheel.core.state,((function (figwheel_meta__$1,namespaces__$1){
return (function (p1__45429_SHARP_){
return cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,p1__45429_SHARP_,new cljs.core.Keyword("figwheel.core","metadata","figwheel.core/metadata",-720139885),figwheel_meta__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null),(new Date()).getTime());
});})(figwheel_meta__$1,namespaces__$1))
);

var to_reload = (cljs.core.truth_((function (){var and__4120__auto__ = (!(figwheel.core.load_warninged_code));
if(and__4120__auto__){
return cljs.core.not_empty.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.core.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null)));
} else {
return and__4120__auto__;
}
})())?null:cljs.core.filter.call(null,((function (figwheel_meta__$1,namespaces__$1){
return (function (p1__45430_SHARP_){
return figwheel.core.reload_ns_QMARK_.call(null,p1__45430_SHARP_);
});})(figwheel_meta__$1,namespaces__$1))
,namespaces__$1));
if(cljs.core.empty_QMARK_.call(null,to_reload)){
} else {
figwheel.core.call_hooks.call(null,new cljs.core.Keyword(null,"before-load","before-load",-2060117064),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespaces__$1], null));

setTimeout(((function (to_reload,figwheel_meta__$1,namespaces__$1){
return (function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.before-load","figwheel.before-load",58978771),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespaces__$1], null));
});})(to_reload,figwheel_meta__$1,namespaces__$1))
,(0));
}

var seq__45468_45515 = cljs.core.seq.call(null,to_reload);
var chunk__45469_45516 = null;
var count__45470_45517 = (0);
var i__45471_45518 = (0);
while(true){
if((i__45471_45518 < count__45470_45517)){
var ns_45519 = cljs.core._nth.call(null,chunk__45469_45516,i__45471_45518);
goog.require(cljs.core.name.call(null,ns_45519),true);


var G__45520 = seq__45468_45515;
var G__45521 = chunk__45469_45516;
var G__45522 = count__45470_45517;
var G__45523 = (i__45471_45518 + (1));
seq__45468_45515 = G__45520;
chunk__45469_45516 = G__45521;
count__45470_45517 = G__45522;
i__45471_45518 = G__45523;
continue;
} else {
var temp__5720__auto___45524 = cljs.core.seq.call(null,seq__45468_45515);
if(temp__5720__auto___45524){
var seq__45468_45525__$1 = temp__5720__auto___45524;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45468_45525__$1)){
var c__4550__auto___45526 = cljs.core.chunk_first.call(null,seq__45468_45525__$1);
var G__45527 = cljs.core.chunk_rest.call(null,seq__45468_45525__$1);
var G__45528 = c__4550__auto___45526;
var G__45529 = cljs.core.count.call(null,c__4550__auto___45526);
var G__45530 = (0);
seq__45468_45515 = G__45527;
chunk__45469_45516 = G__45528;
count__45470_45517 = G__45529;
i__45471_45518 = G__45530;
continue;
} else {
var ns_45531 = cljs.core.first.call(null,seq__45468_45525__$1);
goog.require(cljs.core.name.call(null,ns_45531),true);


var G__45532 = cljs.core.next.call(null,seq__45468_45525__$1);
var G__45533 = null;
var G__45534 = (0);
var G__45535 = (0);
seq__45468_45515 = G__45532;
chunk__45469_45516 = G__45533;
count__45470_45517 = G__45534;
i__45471_45518 = G__45535;
continue;
}
} else {
}
}
break;
}

var after_reload_fn_45536 = ((function (to_reload,figwheel_meta__$1,namespaces__$1){
return (function (){
try{if(cljs.core.truth_(cljs.core.not_empty.call(null,to_reload))){
goog.log.info(figwheel.core.logger,["loaded ",cljs.core.pr_str.call(null,to_reload)].join(''));

figwheel.core.call_hooks.call(null,new cljs.core.Keyword(null,"after-load","after-load",-1278503285),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reloaded-namespaces","reloaded-namespaces",1589557425),to_reload], null));

figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.after-load","figwheel.after-load",-1913099389),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reloaded-namespaces","reloaded-namespaces",1589557425),to_reload], null));
} else {
}

var temp__5720__auto__ = cljs.core.not_empty.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.set.call(null,to_reload)),namespaces__$1));
if(cljs.core.truth_(temp__5720__auto__)){
var not_loaded = temp__5720__auto__;
return goog.log.info(figwheel.core.logger,["did not load ",cljs.core.pr_str.call(null,not_loaded)].join(''));
} else {
return null;
}
}finally {cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.assoc,new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),cljs.core.PersistentArrayMap.EMPTY);
}});})(to_reload,figwheel_meta__$1,namespaces__$1))
;
if((((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined')) && ((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.after_reloads !== 'undefined')))){
figwheel.repl.after_reloads(after_reload_fn_45536);
} else {
setTimeout(after_reload_fn_45536,(100));
}

return null;
});
goog.exportSymbol('figwheel.core.reload_namespaces', figwheel.core.reload_namespaces);

figwheel.core.compile_warnings = (function figwheel$core$compile_warnings(warnings){
if(cljs.core.empty_QMARK_.call(null,warnings)){
} else {
setTimeout((function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.compile-warnings","figwheel.compile-warnings",-2015032448),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"warnings","warnings",-735437651),warnings], null));
}),(0));
}

cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null),cljs.core.concat,warnings);

var seq__45472 = cljs.core.seq.call(null,warnings);
var chunk__45473 = null;
var count__45474 = (0);
var i__45475 = (0);
while(true){
if((i__45475 < count__45474)){
var warning = cljs.core._nth.call(null,chunk__45473,i__45475);
goog.log.warning(figwheel.core.logger,["Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(warning))," in ",figwheel.core.file_line_column.call(null,warning)].join(''));


var G__45537 = seq__45472;
var G__45538 = chunk__45473;
var G__45539 = count__45474;
var G__45540 = (i__45475 + (1));
seq__45472 = G__45537;
chunk__45473 = G__45538;
count__45474 = G__45539;
i__45475 = G__45540;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__45472);
if(temp__5720__auto__){
var seq__45472__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45472__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__45472__$1);
var G__45541 = cljs.core.chunk_rest.call(null,seq__45472__$1);
var G__45542 = c__4550__auto__;
var G__45543 = cljs.core.count.call(null,c__4550__auto__);
var G__45544 = (0);
seq__45472 = G__45541;
chunk__45473 = G__45542;
count__45474 = G__45543;
i__45475 = G__45544;
continue;
} else {
var warning = cljs.core.first.call(null,seq__45472__$1);
goog.log.warning(figwheel.core.logger,["Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(warning))," in ",figwheel.core.file_line_column.call(null,warning)].join(''));


var G__45545 = cljs.core.next.call(null,seq__45472__$1);
var G__45546 = null;
var G__45547 = (0);
var G__45548 = (0);
seq__45472 = G__45545;
chunk__45473 = G__45546;
count__45474 = G__45547;
i__45475 = G__45548;
continue;
}
} else {
return null;
}
}
break;
}
});
goog.exportSymbol('figwheel.core.compile_warnings', figwheel.core.compile_warnings);

figwheel.core.compile_warnings_remote = (function figwheel$core$compile_warnings_remote(warnings_json){
return figwheel.core.compile_warnings.call(null,cljs.core.js__GT_clj.call(null,warnings_json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});
goog.exportSymbol('figwheel.core.compile_warnings_remote', figwheel.core.compile_warnings_remote);

figwheel.core.handle_exception = (function figwheel$core$handle_exception(p__45476){
var map__45477 = p__45476;
var map__45477__$1 = (((((!((map__45477 == null))))?(((((map__45477.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45477.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45477):map__45477);
var exception_data = map__45477__$1;
var file = cljs.core.get.call(null,map__45477__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var type = cljs.core.get.call(null,map__45477__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__45477__$1,new cljs.core.Keyword(null,"message","message",-406056002));
try{setTimeout(((function (map__45477,map__45477__$1,exception_data,file,type,message){
return (function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.compile-exception","figwheel.compile-exception",1092880746),exception_data);
});})(map__45477,map__45477__$1,exception_data,file,type,message))
,(0));

cljs.core.swap_BANG_.call(null,figwheel.core.state,((function (map__45477,map__45477__$1,exception_data,file,type,message){
return (function (p1__45431_SHARP_){
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,p1__45431_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null),(new Date()).getTime()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"exception","exception",-335277064)], null),exception_data);
});})(map__45477,map__45477__$1,exception_data,file,type,message))
);

return goog.log.warning(figwheel.core.logger,(function (){var G__45479 = "Compile Exception - ";
var G__45479__$1 = (cljs.core.truth_((function (){var or__4131__auto__ = type;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return message;
}
})())?[G__45479,cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null," : ",cljs.core.filter.call(null,cljs.core.some_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,message], null))))].join(''):G__45479);
if(cljs.core.truth_(file)){
return [G__45479__$1," in ",figwheel.core.file_line_column.call(null,exception_data)].join('');
} else {
return G__45479__$1;
}
})());
}finally {cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715)], null),cljs.core.PersistentArrayMap.EMPTY);
}});
goog.exportSymbol('figwheel.core.handle_exception', figwheel.core.handle_exception);

figwheel.core.handle_exception_remote = (function figwheel$core$handle_exception_remote(exception_data){
return figwheel.core.handle_exception.call(null,cljs.core.js__GT_clj.call(null,exception_data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});
goog.exportSymbol('figwheel.core.handle_exception_remote', figwheel.core.handle_exception_remote);

//# sourceMappingURL=core.js.map
