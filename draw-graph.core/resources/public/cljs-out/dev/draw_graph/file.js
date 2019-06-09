// Compiled by ClojureScript 1.10.520 {}
goog.provide('draw_graph.file');
goog.require('cljs.core');
goog.require('cljs.core.async');
draw_graph.file.log = console.log;
draw_graph.file.first_file = cljs.core.map.call(null,(function (e){
var target = e.currentTarget;
var file = (target.files[(0)]);
target.value = "";

return file;
}));
draw_graph.file.extract_result = cljs.core.map.call(null,(function (n){
var contents = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(n);
return cljs.core.assoc.call(null,n,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.js__GT_clj.call(null,contents.target.result));
}));
draw_graph.file.upload_reqs = cljs.core.async.chan.call(null,(1),draw_graph.file.first_file);
draw_graph.file.file_reads = cljs.core.async.chan.call(null,(1),draw_graph.file.extract_result);
draw_graph.file.file_reader_put = (function draw_graph$file$file_reader_put(e){
return cljs.core.async.put_BANG_.call(null,draw_graph.file.upload_reqs,e);
});
draw_graph.file.file_reader_listen = (function draw_graph$file$file_reader_listen(callback){
var c__22181__auto___26007 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22181__auto___26007){
return (function (){
var f__22182__auto__ = (function (){var switch__22014__auto__ = ((function (c__22181__auto___26007){
return (function (state_25980){
var state_val_25981 = (state_25980[(1)]);
if((state_val_25981 === (1))){
var state_25980__$1 = state_25980;
var statearr_25982_26008 = state_25980__$1;
(statearr_25982_26008[(2)] = null);

(statearr_25982_26008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25981 === (2))){
var inst_25970 = (new FileReader());
var state_25980__$1 = (function (){var statearr_25983 = state_25980;
(statearr_25983[(7)] = inst_25970);

return statearr_25983;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25980__$1,(4),draw_graph.file.upload_reqs);
} else {
if((state_val_25981 === (3))){
var inst_25978 = (state_25980[(2)]);
var state_25980__$1 = state_25980;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25980__$1,inst_25978);
} else {
if((state_val_25981 === (4))){
var inst_25970 = (state_25980[(7)]);
var inst_25972 = (state_25980[(2)]);
var inst_25973 = (function (){var reader = inst_25970;
var file = inst_25972;
return ((function (reader,file,inst_25970,inst_25972,state_val_25981,c__22181__auto___26007){
return (function (p1__25968_SHARP_){
return cljs.core.async.put_BANG_.call(null,draw_graph.file.file_reads,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),p1__25968_SHARP_,new cljs.core.Keyword(null,"data-filename","data-filename",1476355539),file.name], null));
});
;})(reader,file,inst_25970,inst_25972,state_val_25981,c__22181__auto___26007))
})();
var inst_25974 = inst_25970.onload = inst_25973;
var inst_25975 = inst_25970.readAsText(inst_25972);
var state_25980__$1 = (function (){var statearr_25984 = state_25980;
(statearr_25984[(8)] = inst_25974);

(statearr_25984[(9)] = inst_25975);

return statearr_25984;
})();
var statearr_25985_26009 = state_25980__$1;
(statearr_25985_26009[(2)] = null);

(statearr_25985_26009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__22181__auto___26007))
;
return ((function (switch__22014__auto__,c__22181__auto___26007){
return (function() {
var draw_graph$file$file_reader_listen_$_state_machine__22015__auto__ = null;
var draw_graph$file$file_reader_listen_$_state_machine__22015__auto____0 = (function (){
var statearr_25986 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25986[(0)] = draw_graph$file$file_reader_listen_$_state_machine__22015__auto__);

(statearr_25986[(1)] = (1));

return statearr_25986;
});
var draw_graph$file$file_reader_listen_$_state_machine__22015__auto____1 = (function (state_25980){
while(true){
var ret_value__22016__auto__ = (function (){try{while(true){
var result__22017__auto__ = switch__22014__auto__.call(null,state_25980);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22017__auto__;
}
break;
}
}catch (e25987){if((e25987 instanceof Object)){
var ex__22018__auto__ = e25987;
var statearr_25988_26010 = state_25980;
(statearr_25988_26010[(5)] = ex__22018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25980);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25987;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26011 = state_25980;
state_25980 = G__26011;
continue;
} else {
return ret_value__22016__auto__;
}
break;
}
});
draw_graph$file$file_reader_listen_$_state_machine__22015__auto__ = function(state_25980){
switch(arguments.length){
case 0:
return draw_graph$file$file_reader_listen_$_state_machine__22015__auto____0.call(this);
case 1:
return draw_graph$file$file_reader_listen_$_state_machine__22015__auto____1.call(this,state_25980);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
draw_graph$file$file_reader_listen_$_state_machine__22015__auto__.cljs$core$IFn$_invoke$arity$0 = draw_graph$file$file_reader_listen_$_state_machine__22015__auto____0;
draw_graph$file$file_reader_listen_$_state_machine__22015__auto__.cljs$core$IFn$_invoke$arity$1 = draw_graph$file$file_reader_listen_$_state_machine__22015__auto____1;
return draw_graph$file$file_reader_listen_$_state_machine__22015__auto__;
})()
;})(switch__22014__auto__,c__22181__auto___26007))
})();
var state__22183__auto__ = (function (){var statearr_25989 = f__22182__auto__.call(null);
(statearr_25989[(6)] = c__22181__auto___26007);

return statearr_25989;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22183__auto__);
});})(c__22181__auto___26007))
);


var c__22181__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22181__auto__){
return (function (){
var f__22182__auto__ = (function (){var switch__22014__auto__ = ((function (c__22181__auto__){
return (function (state_25998){
var state_val_25999 = (state_25998[(1)]);
if((state_val_25999 === (1))){
var state_25998__$1 = state_25998;
var statearr_26000_26012 = state_25998__$1;
(statearr_26000_26012[(2)] = null);

(statearr_26000_26012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25999 === (2))){
var state_25998__$1 = state_25998;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25998__$1,(4),draw_graph.file.file_reads);
} else {
if((state_val_25999 === (3))){
var inst_25996 = (state_25998[(2)]);
var state_25998__$1 = state_25998;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25998__$1,inst_25996);
} else {
if((state_val_25999 === (4))){
var inst_25992 = (state_25998[(2)]);
var inst_25993 = callback.call(null,inst_25992);
var state_25998__$1 = (function (){var statearr_26001 = state_25998;
(statearr_26001[(7)] = inst_25993);

return statearr_26001;
})();
var statearr_26002_26013 = state_25998__$1;
(statearr_26002_26013[(2)] = null);

(statearr_26002_26013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__22181__auto__))
;
return ((function (switch__22014__auto__,c__22181__auto__){
return (function() {
var draw_graph$file$file_reader_listen_$_state_machine__22015__auto__ = null;
var draw_graph$file$file_reader_listen_$_state_machine__22015__auto____0 = (function (){
var statearr_26003 = [null,null,null,null,null,null,null,null];
(statearr_26003[(0)] = draw_graph$file$file_reader_listen_$_state_machine__22015__auto__);

(statearr_26003[(1)] = (1));

return statearr_26003;
});
var draw_graph$file$file_reader_listen_$_state_machine__22015__auto____1 = (function (state_25998){
while(true){
var ret_value__22016__auto__ = (function (){try{while(true){
var result__22017__auto__ = switch__22014__auto__.call(null,state_25998);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22017__auto__;
}
break;
}
}catch (e26004){if((e26004 instanceof Object)){
var ex__22018__auto__ = e26004;
var statearr_26005_26014 = state_25998;
(statearr_26005_26014[(5)] = ex__22018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25998);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26004;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26015 = state_25998;
state_25998 = G__26015;
continue;
} else {
return ret_value__22016__auto__;
}
break;
}
});
draw_graph$file$file_reader_listen_$_state_machine__22015__auto__ = function(state_25998){
switch(arguments.length){
case 0:
return draw_graph$file$file_reader_listen_$_state_machine__22015__auto____0.call(this);
case 1:
return draw_graph$file$file_reader_listen_$_state_machine__22015__auto____1.call(this,state_25998);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
draw_graph$file$file_reader_listen_$_state_machine__22015__auto__.cljs$core$IFn$_invoke$arity$0 = draw_graph$file$file_reader_listen_$_state_machine__22015__auto____0;
draw_graph$file$file_reader_listen_$_state_machine__22015__auto__.cljs$core$IFn$_invoke$arity$1 = draw_graph$file$file_reader_listen_$_state_machine__22015__auto____1;
return draw_graph$file$file_reader_listen_$_state_machine__22015__auto__;
})()
;})(switch__22014__auto__,c__22181__auto__))
})();
var state__22183__auto__ = (function (){var statearr_26006 = f__22182__auto__.call(null);
(statearr_26006[(6)] = c__22181__auto__);

return statearr_26006;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22183__auto__);
});})(c__22181__auto__))
);

return c__22181__auto__;
});
draw_graph.file.save_file = (function draw_graph$file$save_file(filename,t,s){
if(cljs.core.truth_(Blob)){
var b = (new Blob([s],({"type": t})));
if(cljs.core.truth_(window.navigator.msSaveBlob)){
return window.navigator.msSaveBlob(b,filename);
} else {
var link = document.createElement("a");
(link["download"] = filename);

if(cljs.core.truth_(window.webkitURL)){
(link["href"] = window.webkitURL.createObjectURL(b));
} else {
(link["href"] = window.URL.createObjectURL(b));

(link["onclick"] = ((function (link,b){
return (function draw_graph$file$save_file_$_destroy_clicked(e){
return document.body.removeChild(e.target);
});})(link,b))
);

(link["style"]["display"] = "none");

document.body.appendChild(link);
}

return link.click();
}
} else {
return draw_graph.file.log.call(null,"Browser does not support Blob");
}
});
draw_graph.file.part_filename = (function draw_graph$file$part_filename(var_args){
var args__4736__auto__ = [];
var len__4730__auto___26017 = arguments.length;
var i__4731__auto___26018 = (0);
while(true){
if((i__4731__auto___26018 < len__4730__auto___26017)){
args__4736__auto__.push((arguments[i__4731__auto___26018]));

var G__26019 = (i__4731__auto___26018 + (1));
i__4731__auto___26018 = G__26019;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return draw_graph.file.part_filename.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

draw_graph.file.part_filename.cljs$core$IFn$_invoke$arity$variadic = (function (prefixes){
return cljs.core.reduce.call(null,(function (acc,cur){
if(cljs.core._EQ_.call(null,"",cur)){
return acc;
} else {
if(cljs.core._EQ_.call(null,acc,"")){
return cur;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(acc),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cur)].join('');
}
}
}),"",prefixes);
});

draw_graph.file.part_filename.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
draw_graph.file.part_filename.cljs$lang$applyTo = (function (seq26016){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26016));
});

draw_graph.file.svg_filename = (function draw_graph$file$svg_filename(var_args){
var args__4736__auto__ = [];
var len__4730__auto___26022 = arguments.length;
var i__4731__auto___26023 = (0);
while(true){
if((i__4731__auto___26023 < len__4730__auto___26022)){
args__4736__auto__.push((arguments[i__4731__auto___26023]));

var G__26024 = (i__4731__auto___26023 + (1));
i__4731__auto___26023 = G__26024;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return draw_graph.file.svg_filename.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

draw_graph.file.svg_filename.cljs$core$IFn$_invoke$arity$variadic = (function (filename,prefixes){
if((((filename == null)) || (cljs.core._EQ_.call(null,"",filename)))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,draw_graph.file.part_filename,prefixes)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid.call(null)),(0),(4)))].join('');
} else {
var l = filename.length;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,draw_graph.file.part_filename,prefixes)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,filename,(0),(l - (4))))].join('');
}
});

draw_graph.file.svg_filename.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
draw_graph.file.svg_filename.cljs$lang$applyTo = (function (seq26020){
var G__26021 = cljs.core.first.call(null,seq26020);
var seq26020__$1 = cljs.core.next.call(null,seq26020);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26021,seq26020__$1);
});

draw_graph.file.save_svg = (function draw_graph$file$save_svg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___26028 = arguments.length;
var i__4731__auto___26029 = (0);
while(true){
if((i__4731__auto___26029 < len__4730__auto___26028)){
args__4736__auto__.push((arguments[i__4731__auto___26029]));

var G__26030 = (i__4731__auto___26029 + (1));
i__4731__auto___26029 = G__26030;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return draw_graph.file.save_svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

draw_graph.file.save_svg.cljs$core$IFn$_invoke$arity$variadic = (function (contents,filename,prefixes){
var fs = cljs.core.apply.call(null,draw_graph.file.svg_filename,filename,prefixes);
return draw_graph.file.save_file.call(null,fs,"image/svg+xml",cljs.core.deref.call(null,contents));
});

draw_graph.file.save_svg.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
draw_graph.file.save_svg.cljs$lang$applyTo = (function (seq26025){
var G__26026 = cljs.core.first.call(null,seq26025);
var seq26025__$1 = cljs.core.next.call(null,seq26025);
var G__26027 = cljs.core.first.call(null,seq26025__$1);
var seq26025__$2 = cljs.core.next.call(null,seq26025__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26026,G__26027,seq26025__$2);
});


//# sourceMappingURL=file.js.map
