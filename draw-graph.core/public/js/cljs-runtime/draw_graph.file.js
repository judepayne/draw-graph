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
var c__30361__auto___51633 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30361__auto___51633){
return (function (){
var f__30362__auto__ = (function (){var switch__30100__auto__ = ((function (c__30361__auto___51633){
return (function (state_51513){
var state_val_51514 = (state_51513[(1)]);
if((state_val_51514 === (1))){
var state_51513__$1 = state_51513;
var statearr_51521_51634 = state_51513__$1;
(statearr_51521_51634[(2)] = null);

(statearr_51521_51634[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51514 === (2))){
var inst_51499 = (new FileReader());
var state_51513__$1 = (function (){var statearr_51525 = state_51513;
(statearr_51525[(7)] = inst_51499);

return statearr_51525;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51513__$1,(4),draw_graph.file.upload_reqs);
} else {
if((state_val_51514 === (3))){
var inst_51508 = (state_51513[(2)]);
var state_51513__$1 = state_51513;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51513__$1,inst_51508);
} else {
if((state_val_51514 === (4))){
var inst_51499 = (state_51513[(7)]);
var inst_51501 = (state_51513[(2)]);
var inst_51502 = (function (){var reader = inst_51499;
var file = inst_51501;
return ((function (reader,file,inst_51499,inst_51501,state_val_51514,c__30361__auto___51633){
return (function (p1__51492_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(draw_graph.file.file_reads,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),p1__51492_SHARP_,new cljs.core.Keyword(null,"data-filename","data-filename",1476355539),file.name], null));
});
;})(reader,file,inst_51499,inst_51501,state_val_51514,c__30361__auto___51633))
})();
var inst_51503 = inst_51499.onload = inst_51502;
var inst_51505 = inst_51499.readAsText(inst_51501);
var state_51513__$1 = (function (){var statearr_51528 = state_51513;
(statearr_51528[(8)] = inst_51505);

(statearr_51528[(9)] = inst_51503);

return statearr_51528;
})();
var statearr_51532_51635 = state_51513__$1;
(statearr_51532_51635[(2)] = null);

(statearr_51532_51635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__30361__auto___51633))
;
return ((function (switch__30100__auto__,c__30361__auto___51633){
return (function() {
var draw_graph$file$file_reader_listen_$_state_machine__30101__auto__ = null;
var draw_graph$file$file_reader_listen_$_state_machine__30101__auto____0 = (function (){
var statearr_51535 = [null,null,null,null,null,null,null,null,null,null];
(statearr_51535[(0)] = draw_graph$file$file_reader_listen_$_state_machine__30101__auto__);

(statearr_51535[(1)] = (1));

return statearr_51535;
});
var draw_graph$file$file_reader_listen_$_state_machine__30101__auto____1 = (function (state_51513){
while(true){
var ret_value__30102__auto__ = (function (){try{while(true){
var result__30103__auto__ = switch__30100__auto__(state_51513);
if(cljs.core.keyword_identical_QMARK_(result__30103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30103__auto__;
}
break;
}
}catch (e51536){if((e51536 instanceof Object)){
var ex__30104__auto__ = e51536;
var statearr_51539_51638 = state_51513;
(statearr_51539_51638[(5)] = ex__30104__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_51513);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51536;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51639 = state_51513;
state_51513 = G__51639;
continue;
} else {
return ret_value__30102__auto__;
}
break;
}
});
draw_graph$file$file_reader_listen_$_state_machine__30101__auto__ = function(state_51513){
switch(arguments.length){
case 0:
return draw_graph$file$file_reader_listen_$_state_machine__30101__auto____0.call(this);
case 1:
return draw_graph$file$file_reader_listen_$_state_machine__30101__auto____1.call(this,state_51513);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
draw_graph$file$file_reader_listen_$_state_machine__30101__auto__.cljs$core$IFn$_invoke$arity$0 = draw_graph$file$file_reader_listen_$_state_machine__30101__auto____0;
draw_graph$file$file_reader_listen_$_state_machine__30101__auto__.cljs$core$IFn$_invoke$arity$1 = draw_graph$file$file_reader_listen_$_state_machine__30101__auto____1;
return draw_graph$file$file_reader_listen_$_state_machine__30101__auto__;
})()
;})(switch__30100__auto__,c__30361__auto___51633))
})();
var state__30363__auto__ = (function (){var statearr_51546 = (f__30362__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30362__auto__.cljs$core$IFn$_invoke$arity$0() : f__30362__auto__.call(null));
(statearr_51546[(6)] = c__30361__auto___51633);

return statearr_51546;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30363__auto__);
});})(c__30361__auto___51633))
);


var c__30361__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30361__auto__){
return (function (){
var f__30362__auto__ = (function (){var switch__30100__auto__ = ((function (c__30361__auto__){
return (function (state_51556){
var state_val_51557 = (state_51556[(1)]);
if((state_val_51557 === (1))){
var state_51556__$1 = state_51556;
var statearr_51565_51640 = state_51556__$1;
(statearr_51565_51640[(2)] = null);

(statearr_51565_51640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51557 === (2))){
var state_51556__$1 = state_51556;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51556__$1,(4),draw_graph.file.file_reads);
} else {
if((state_val_51557 === (3))){
var inst_51554 = (state_51556[(2)]);
var state_51556__$1 = state_51556;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51556__$1,inst_51554);
} else {
if((state_val_51557 === (4))){
var inst_51550 = (state_51556[(2)]);
var inst_51551 = (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(inst_51550) : callback.call(null,inst_51550));
var state_51556__$1 = (function (){var statearr_51576 = state_51556;
(statearr_51576[(7)] = inst_51551);

return statearr_51576;
})();
var statearr_51578_51644 = state_51556__$1;
(statearr_51578_51644[(2)] = null);

(statearr_51578_51644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__30361__auto__))
;
return ((function (switch__30100__auto__,c__30361__auto__){
return (function() {
var draw_graph$file$file_reader_listen_$_state_machine__30101__auto__ = null;
var draw_graph$file$file_reader_listen_$_state_machine__30101__auto____0 = (function (){
var statearr_51580 = [null,null,null,null,null,null,null,null];
(statearr_51580[(0)] = draw_graph$file$file_reader_listen_$_state_machine__30101__auto__);

(statearr_51580[(1)] = (1));

return statearr_51580;
});
var draw_graph$file$file_reader_listen_$_state_machine__30101__auto____1 = (function (state_51556){
while(true){
var ret_value__30102__auto__ = (function (){try{while(true){
var result__30103__auto__ = switch__30100__auto__(state_51556);
if(cljs.core.keyword_identical_QMARK_(result__30103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30103__auto__;
}
break;
}
}catch (e51585){if((e51585 instanceof Object)){
var ex__30104__auto__ = e51585;
var statearr_51592_51645 = state_51556;
(statearr_51592_51645[(5)] = ex__30104__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_51556);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51585;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51646 = state_51556;
state_51556 = G__51646;
continue;
} else {
return ret_value__30102__auto__;
}
break;
}
});
draw_graph$file$file_reader_listen_$_state_machine__30101__auto__ = function(state_51556){
switch(arguments.length){
case 0:
return draw_graph$file$file_reader_listen_$_state_machine__30101__auto____0.call(this);
case 1:
return draw_graph$file$file_reader_listen_$_state_machine__30101__auto____1.call(this,state_51556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
draw_graph$file$file_reader_listen_$_state_machine__30101__auto__.cljs$core$IFn$_invoke$arity$0 = draw_graph$file$file_reader_listen_$_state_machine__30101__auto____0;
draw_graph$file$file_reader_listen_$_state_machine__30101__auto__.cljs$core$IFn$_invoke$arity$1 = draw_graph$file$file_reader_listen_$_state_machine__30101__auto____1;
return draw_graph$file$file_reader_listen_$_state_machine__30101__auto__;
})()
;})(switch__30100__auto__,c__30361__auto__))
})();
var state__30363__auto__ = (function (){var statearr_51594 = (f__30362__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30362__auto__.cljs$core$IFn$_invoke$arity$0() : f__30362__auto__.call(null));
(statearr_51594[(6)] = c__30361__auto__);

return statearr_51594;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30363__auto__);
});})(c__30361__auto__))
);

return c__30361__auto__;
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
var len__4730__auto___51649 = arguments.length;
var i__4731__auto___51650 = (0);
while(true){
if((i__4731__auto___51650 < len__4730__auto___51649)){
args__4736__auto__.push((arguments[i__4731__auto___51650]));

var G__51651 = (i__4731__auto___51650 + (1));
i__4731__auto___51650 = G__51651;
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
draw_graph.file.part_filename.cljs$lang$applyTo = (function (seq51608){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51608));
});

draw_graph.file.svg_filename = (function draw_graph$file$svg_filename(var_args){
var args__4736__auto__ = [];
var len__4730__auto___51652 = arguments.length;
var i__4731__auto___51653 = (0);
while(true){
if((i__4731__auto___51653 < len__4730__auto___51652)){
args__4736__auto__.push((arguments[i__4731__auto___51653]));

var G__51655 = (i__4731__auto___51653 + (1));
i__4731__auto___51653 = G__51655;
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
draw_graph.file.svg_filename.cljs$lang$applyTo = (function (seq51616){
var G__51617 = cljs.core.first(seq51616);
var seq51616__$1 = cljs.core.next(seq51616);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51617,seq51616__$1);
});

draw_graph.file.save_svg = (function draw_graph$file$save_svg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___51659 = arguments.length;
var i__4731__auto___51660 = (0);
while(true){
if((i__4731__auto___51660 < len__4730__auto___51659)){
args__4736__auto__.push((arguments[i__4731__auto___51660]));

var G__51661 = (i__4731__auto___51660 + (1));
i__4731__auto___51660 = G__51661;
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
draw_graph.file.save_svg.cljs$lang$applyTo = (function (seq51621){
var G__51622 = cljs.core.first(seq51621);
var seq51621__$1 = cljs.core.next(seq51621);
var G__51623 = cljs.core.first(seq51621__$1);
var seq51621__$2 = cljs.core.next(seq51621__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51622,G__51623,seq51621__$2);
});


//# sourceMappingURL=draw_graph.file.js.map
