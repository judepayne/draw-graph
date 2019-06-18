goog.provide('draw_graph.file');
goog.require('cljs.core');
goog.require('cljs.core.async');
draw_graph.file.log = console.log;
draw_graph.file.first_file = cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (e){
var target = e.currentTarget;
var file = (target.files[(0)]);
target.value = "";

return file;
}));
draw_graph.file.extract_result = cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (n){
var contents = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(n);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(n,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(contents.target.result));
}));
draw_graph.file.upload_reqs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((1),draw_graph.file.first_file);
draw_graph.file.file_reads = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((1),draw_graph.file.extract_result);
draw_graph.file.file_reader_put = (function draw_graph$file$file_reader_put(e){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(draw_graph.file.upload_reqs,e);
});
draw_graph.file.file_reader_listen = (function draw_graph$file$file_reader_listen(callback){
var c__30662__auto___51621 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30662__auto___51621){
return (function (){
var f__30663__auto__ = (function (){var switch__30351__auto__ = ((function (c__30662__auto___51621){
return (function (state_51431){
var state_val_51432 = (state_51431[(1)]);
if((state_val_51432 === (1))){
var state_51431__$1 = state_51431;
var statearr_51444_51623 = state_51431__$1;
(statearr_51444_51623[(2)] = null);

(statearr_51444_51623[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51432 === (2))){
var inst_51419 = (new FileReader());
var state_51431__$1 = (function (){var statearr_51454 = state_51431;
(statearr_51454[(7)] = inst_51419);

return statearr_51454;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51431__$1,(4),draw_graph.file.upload_reqs);
} else {
if((state_val_51432 === (3))){
var inst_51427 = (state_51431[(2)]);
var state_51431__$1 = state_51431;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51431__$1,inst_51427);
} else {
if((state_val_51432 === (4))){
var inst_51419 = (state_51431[(7)]);
var inst_51421 = (state_51431[(2)]);
var inst_51422 = (function (){var reader = inst_51419;
var file = inst_51421;
return ((function (reader,file,inst_51419,inst_51421,state_val_51432,c__30662__auto___51621){
return (function (p1__51417_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(draw_graph.file.file_reads,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),p1__51417_SHARP_,new cljs.core.Keyword(null,"data-filename","data-filename",1476355539),file.name], null));
});
;})(reader,file,inst_51419,inst_51421,state_val_51432,c__30662__auto___51621))
})();
var inst_51423 = inst_51419.onload = inst_51422;
var inst_51424 = inst_51419.readAsText(inst_51421);
var state_51431__$1 = (function (){var statearr_51458 = state_51431;
(statearr_51458[(8)] = inst_51424);

(statearr_51458[(9)] = inst_51423);

return statearr_51458;
})();
var statearr_51464_51625 = state_51431__$1;
(statearr_51464_51625[(2)] = null);

(statearr_51464_51625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__30662__auto___51621))
;
return ((function (switch__30351__auto__,c__30662__auto___51621){
return (function() {
var draw_graph$file$file_reader_listen_$_state_machine__30352__auto__ = null;
var draw_graph$file$file_reader_listen_$_state_machine__30352__auto____0 = (function (){
var statearr_51471 = [null,null,null,null,null,null,null,null,null,null];
(statearr_51471[(0)] = draw_graph$file$file_reader_listen_$_state_machine__30352__auto__);

(statearr_51471[(1)] = (1));

return statearr_51471;
});
var draw_graph$file$file_reader_listen_$_state_machine__30352__auto____1 = (function (state_51431){
while(true){
var ret_value__30353__auto__ = (function (){try{while(true){
var result__30354__auto__ = switch__30351__auto__(state_51431);
if(cljs.core.keyword_identical_QMARK_(result__30354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30354__auto__;
}
break;
}
}catch (e51476){if((e51476 instanceof Object)){
var ex__30355__auto__ = e51476;
var statearr_51477_51627 = state_51431;
(statearr_51477_51627[(5)] = ex__30355__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_51431);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51476;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51629 = state_51431;
state_51431 = G__51629;
continue;
} else {
return ret_value__30353__auto__;
}
break;
}
});
draw_graph$file$file_reader_listen_$_state_machine__30352__auto__ = function(state_51431){
switch(arguments.length){
case 0:
return draw_graph$file$file_reader_listen_$_state_machine__30352__auto____0.call(this);
case 1:
return draw_graph$file$file_reader_listen_$_state_machine__30352__auto____1.call(this,state_51431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
draw_graph$file$file_reader_listen_$_state_machine__30352__auto__.cljs$core$IFn$_invoke$arity$0 = draw_graph$file$file_reader_listen_$_state_machine__30352__auto____0;
draw_graph$file$file_reader_listen_$_state_machine__30352__auto__.cljs$core$IFn$_invoke$arity$1 = draw_graph$file$file_reader_listen_$_state_machine__30352__auto____1;
return draw_graph$file$file_reader_listen_$_state_machine__30352__auto__;
})()
;})(switch__30351__auto__,c__30662__auto___51621))
})();
var state__30664__auto__ = (function (){var statearr_51478 = (f__30663__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30663__auto__.cljs$core$IFn$_invoke$arity$0() : f__30663__auto__.call(null));
(statearr_51478[(6)] = c__30662__auto___51621);

return statearr_51478;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30664__auto__);
});})(c__30662__auto___51621))
);


var c__30662__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30662__auto__){
return (function (){
var f__30663__auto__ = (function (){var switch__30351__auto__ = ((function (c__30662__auto__){
return (function (state_51490){
var state_val_51491 = (state_51490[(1)]);
if((state_val_51491 === (1))){
var state_51490__$1 = state_51490;
var statearr_51492_51630 = state_51490__$1;
(statearr_51492_51630[(2)] = null);

(statearr_51492_51630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51491 === (2))){
var state_51490__$1 = state_51490;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51490__$1,(4),draw_graph.file.file_reads);
} else {
if((state_val_51491 === (3))){
var inst_51488 = (state_51490[(2)]);
var state_51490__$1 = state_51490;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51490__$1,inst_51488);
} else {
if((state_val_51491 === (4))){
var inst_51484 = (state_51490[(2)]);
var inst_51485 = (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(inst_51484) : callback.call(null,inst_51484));
var state_51490__$1 = (function (){var statearr_51499 = state_51490;
(statearr_51499[(7)] = inst_51485);

return statearr_51499;
})();
var statearr_51503_51632 = state_51490__$1;
(statearr_51503_51632[(2)] = null);

(statearr_51503_51632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__30662__auto__))
;
return ((function (switch__30351__auto__,c__30662__auto__){
return (function() {
var draw_graph$file$file_reader_listen_$_state_machine__30352__auto__ = null;
var draw_graph$file$file_reader_listen_$_state_machine__30352__auto____0 = (function (){
var statearr_51506 = [null,null,null,null,null,null,null,null];
(statearr_51506[(0)] = draw_graph$file$file_reader_listen_$_state_machine__30352__auto__);

(statearr_51506[(1)] = (1));

return statearr_51506;
});
var draw_graph$file$file_reader_listen_$_state_machine__30352__auto____1 = (function (state_51490){
while(true){
var ret_value__30353__auto__ = (function (){try{while(true){
var result__30354__auto__ = switch__30351__auto__(state_51490);
if(cljs.core.keyword_identical_QMARK_(result__30354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30354__auto__;
}
break;
}
}catch (e51508){if((e51508 instanceof Object)){
var ex__30355__auto__ = e51508;
var statearr_51509_51634 = state_51490;
(statearr_51509_51634[(5)] = ex__30355__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_51490);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51508;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51635 = state_51490;
state_51490 = G__51635;
continue;
} else {
return ret_value__30353__auto__;
}
break;
}
});
draw_graph$file$file_reader_listen_$_state_machine__30352__auto__ = function(state_51490){
switch(arguments.length){
case 0:
return draw_graph$file$file_reader_listen_$_state_machine__30352__auto____0.call(this);
case 1:
return draw_graph$file$file_reader_listen_$_state_machine__30352__auto____1.call(this,state_51490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
draw_graph$file$file_reader_listen_$_state_machine__30352__auto__.cljs$core$IFn$_invoke$arity$0 = draw_graph$file$file_reader_listen_$_state_machine__30352__auto____0;
draw_graph$file$file_reader_listen_$_state_machine__30352__auto__.cljs$core$IFn$_invoke$arity$1 = draw_graph$file$file_reader_listen_$_state_machine__30352__auto____1;
return draw_graph$file$file_reader_listen_$_state_machine__30352__auto__;
})()
;})(switch__30351__auto__,c__30662__auto__))
})();
var state__30664__auto__ = (function (){var statearr_51510 = (f__30663__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30663__auto__.cljs$core$IFn$_invoke$arity$0() : f__30663__auto__.call(null));
(statearr_51510[(6)] = c__30662__auto__);

return statearr_51510;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30664__auto__);
});})(c__30662__auto__))
);

return c__30662__auto__;
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
return (draw_graph.file.log.cljs$core$IFn$_invoke$arity$1 ? draw_graph.file.log.cljs$core$IFn$_invoke$arity$1("Browser does not support Blob") : draw_graph.file.log.call(null,"Browser does not support Blob"));
}
});
draw_graph.file.part_filename = (function draw_graph$file$part_filename(var_args){
var args__4736__auto__ = [];
var len__4730__auto___51638 = arguments.length;
var i__4731__auto___51639 = (0);
while(true){
if((i__4731__auto___51639 < len__4730__auto___51638)){
args__4736__auto__.push((arguments[i__4731__auto___51639]));

var G__51640 = (i__4731__auto___51639 + (1));
i__4731__auto___51639 = G__51640;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return draw_graph.file.part_filename.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

draw_graph.file.part_filename.cljs$core$IFn$_invoke$arity$variadic = (function (prefixes){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,cur){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",cur)){
return acc;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(acc,"")){
return cur;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(acc),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cur)].join('');
}
}
}),"",prefixes);
});

draw_graph.file.part_filename.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
draw_graph.file.part_filename.cljs$lang$applyTo = (function (seq51517){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51517));
});

draw_graph.file.svg_filename = (function draw_graph$file$svg_filename(var_args){
var args__4736__auto__ = [];
var len__4730__auto___51641 = arguments.length;
var i__4731__auto___51642 = (0);
while(true){
if((i__4731__auto___51642 < len__4730__auto___51641)){
args__4736__auto__.push((arguments[i__4731__auto___51642]));

var G__51643 = (i__4731__auto___51642 + (1));
i__4731__auto___51642 = G__51643;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return draw_graph.file.svg_filename.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

draw_graph.file.svg_filename.cljs$core$IFn$_invoke$arity$variadic = (function (filename,prefixes){
if((((filename == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",filename)))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(draw_graph.file.part_filename,prefixes)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),(0),(4)))].join('');
} else {
var l = filename.length;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(draw_graph.file.part_filename,prefixes)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(filename,(0),(l - (4))))].join('');
}
});

draw_graph.file.svg_filename.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
draw_graph.file.svg_filename.cljs$lang$applyTo = (function (seq51611){
var G__51612 = cljs.core.first(seq51611);
var seq51611__$1 = cljs.core.next(seq51611);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51612,seq51611__$1);
});

draw_graph.file.save_svg = (function draw_graph$file$save_svg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___51646 = arguments.length;
var i__4731__auto___51647 = (0);
while(true){
if((i__4731__auto___51647 < len__4730__auto___51646)){
args__4736__auto__.push((arguments[i__4731__auto___51647]));

var G__51648 = (i__4731__auto___51647 + (1));
i__4731__auto___51647 = G__51648;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return draw_graph.file.save_svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

draw_graph.file.save_svg.cljs$core$IFn$_invoke$arity$variadic = (function (contents,filename,prefixes){
var fs = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(draw_graph.file.svg_filename,filename,prefixes);
return draw_graph.file.save_file(fs,"image/svg+xml",cljs.core.deref(contents));
});

draw_graph.file.save_svg.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
draw_graph.file.save_svg.cljs$lang$applyTo = (function (seq51614){
var G__51615 = cljs.core.first(seq51614);
var seq51614__$1 = cljs.core.next(seq51614);
var G__51616 = cljs.core.first(seq51614__$1);
var seq51614__$2 = cljs.core.next(seq51614__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51615,G__51616,seq51614__$2);
});


//# sourceMappingURL=draw_graph.file.js.map
