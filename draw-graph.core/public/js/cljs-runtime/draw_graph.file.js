goog.provide('draw_graph.file');
goog.require('cljs.core');
goog.require('cljs.core.async');
draw_graph.file.log = console.log;
draw_graph.file.first_file = cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (e){
var target = e.currentTarget;
var file = (target.files[(0)]);
(target.value = "");

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
var c__33891__auto___55823 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33892__auto__ = (function (){var switch__33701__auto__ = (function (state_55707){
var state_val_55708 = (state_55707[(1)]);
if((state_val_55708 === (1))){
var state_55707__$1 = state_55707;
var statearr_55709_55824 = state_55707__$1;
(statearr_55709_55824[(2)] = null);

(statearr_55709_55824[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55708 === (2))){
var inst_55693 = (new FileReader());
var state_55707__$1 = (function (){var statearr_55710 = state_55707;
(statearr_55710[(7)] = inst_55693);

return statearr_55710;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55707__$1,(4),draw_graph.file.upload_reqs);
} else {
if((state_val_55708 === (3))){
var inst_55703 = (state_55707[(2)]);
var state_55707__$1 = state_55707;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55707__$1,inst_55703);
} else {
if((state_val_55708 === (4))){
var inst_55693 = (state_55707[(7)]);
var inst_55695 = (state_55707[(2)]);
var inst_55697 = (function (){var reader = inst_55693;
var file = inst_55695;
return (function (p1__55686_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(draw_graph.file.file_reads,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),p1__55686_SHARP_,new cljs.core.Keyword(null,"data-filename","data-filename",1476355539),file.name], null));
});
})();
var inst_55698 = (inst_55693.onload = inst_55697);
var inst_55699 = inst_55693.readAsText(inst_55695);
var state_55707__$1 = (function (){var statearr_55718 = state_55707;
(statearr_55718[(8)] = inst_55698);

(statearr_55718[(9)] = inst_55699);

return statearr_55718;
})();
var statearr_55719_55828 = state_55707__$1;
(statearr_55719_55828[(2)] = null);

(statearr_55719_55828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});
return (function() {
var draw_graph$file$file_reader_listen_$_state_machine__33702__auto__ = null;
var draw_graph$file$file_reader_listen_$_state_machine__33702__auto____0 = (function (){
var statearr_55720 = [null,null,null,null,null,null,null,null,null,null];
(statearr_55720[(0)] = draw_graph$file$file_reader_listen_$_state_machine__33702__auto__);

(statearr_55720[(1)] = (1));

return statearr_55720;
});
var draw_graph$file$file_reader_listen_$_state_machine__33702__auto____1 = (function (state_55707){
while(true){
var ret_value__33703__auto__ = (function (){try{while(true){
var result__33704__auto__ = switch__33701__auto__(state_55707);
if(cljs.core.keyword_identical_QMARK_(result__33704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33704__auto__;
}
break;
}
}catch (e55721){if((e55721 instanceof Object)){
var ex__33705__auto__ = e55721;
var statearr_55722_55829 = state_55707;
(statearr_55722_55829[(5)] = ex__33705__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_55707);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55721;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55830 = state_55707;
state_55707 = G__55830;
continue;
} else {
return ret_value__33703__auto__;
}
break;
}
});
draw_graph$file$file_reader_listen_$_state_machine__33702__auto__ = function(state_55707){
switch(arguments.length){
case 0:
return draw_graph$file$file_reader_listen_$_state_machine__33702__auto____0.call(this);
case 1:
return draw_graph$file$file_reader_listen_$_state_machine__33702__auto____1.call(this,state_55707);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
draw_graph$file$file_reader_listen_$_state_machine__33702__auto__.cljs$core$IFn$_invoke$arity$0 = draw_graph$file$file_reader_listen_$_state_machine__33702__auto____0;
draw_graph$file$file_reader_listen_$_state_machine__33702__auto__.cljs$core$IFn$_invoke$arity$1 = draw_graph$file$file_reader_listen_$_state_machine__33702__auto____1;
return draw_graph$file$file_reader_listen_$_state_machine__33702__auto__;
})()
})();
var state__33893__auto__ = (function (){var statearr_55723 = f__33892__auto__();
(statearr_55723[(6)] = c__33891__auto___55823);

return statearr_55723;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33893__auto__);
}));


var c__33891__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33892__auto__ = (function (){var switch__33701__auto__ = (function (state_55732){
var state_val_55733 = (state_55732[(1)]);
if((state_val_55733 === (1))){
var state_55732__$1 = state_55732;
var statearr_55736_55832 = state_55732__$1;
(statearr_55736_55832[(2)] = null);

(statearr_55736_55832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55733 === (2))){
var state_55732__$1 = state_55732;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55732__$1,(4),draw_graph.file.file_reads);
} else {
if((state_val_55733 === (3))){
var inst_55730 = (state_55732[(2)]);
var state_55732__$1 = state_55732;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55732__$1,inst_55730);
} else {
if((state_val_55733 === (4))){
var inst_55726 = (state_55732[(2)]);
var inst_55727 = (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(inst_55726) : callback.call(null,inst_55726));
var state_55732__$1 = (function (){var statearr_55737 = state_55732;
(statearr_55737[(7)] = inst_55727);

return statearr_55737;
})();
var statearr_55738_55836 = state_55732__$1;
(statearr_55738_55836[(2)] = null);

(statearr_55738_55836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});
return (function() {
var draw_graph$file$file_reader_listen_$_state_machine__33702__auto__ = null;
var draw_graph$file$file_reader_listen_$_state_machine__33702__auto____0 = (function (){
var statearr_55740 = [null,null,null,null,null,null,null,null];
(statearr_55740[(0)] = draw_graph$file$file_reader_listen_$_state_machine__33702__auto__);

(statearr_55740[(1)] = (1));

return statearr_55740;
});
var draw_graph$file$file_reader_listen_$_state_machine__33702__auto____1 = (function (state_55732){
while(true){
var ret_value__33703__auto__ = (function (){try{while(true){
var result__33704__auto__ = switch__33701__auto__(state_55732);
if(cljs.core.keyword_identical_QMARK_(result__33704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33704__auto__;
}
break;
}
}catch (e55741){if((e55741 instanceof Object)){
var ex__33705__auto__ = e55741;
var statearr_55742_55838 = state_55732;
(statearr_55742_55838[(5)] = ex__33705__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_55732);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55741;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55842 = state_55732;
state_55732 = G__55842;
continue;
} else {
return ret_value__33703__auto__;
}
break;
}
});
draw_graph$file$file_reader_listen_$_state_machine__33702__auto__ = function(state_55732){
switch(arguments.length){
case 0:
return draw_graph$file$file_reader_listen_$_state_machine__33702__auto____0.call(this);
case 1:
return draw_graph$file$file_reader_listen_$_state_machine__33702__auto____1.call(this,state_55732);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
draw_graph$file$file_reader_listen_$_state_machine__33702__auto__.cljs$core$IFn$_invoke$arity$0 = draw_graph$file$file_reader_listen_$_state_machine__33702__auto____0;
draw_graph$file$file_reader_listen_$_state_machine__33702__auto__.cljs$core$IFn$_invoke$arity$1 = draw_graph$file$file_reader_listen_$_state_machine__33702__auto____1;
return draw_graph$file$file_reader_listen_$_state_machine__33702__auto__;
})()
})();
var state__33893__auto__ = (function (){var statearr_55744 = f__33892__auto__();
(statearr_55744[(6)] = c__33891__auto__);

return statearr_55744;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33893__auto__);
}));

return c__33891__auto__;
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

(link["onclick"] = (function draw_graph$file$save_file_$_destroy_clicked(e){
return document.body.removeChild(e.target);
}));

(link["style"]["display"] = "none");

document.body.appendChild(link);
}

return link.click();
}
} else {
return draw_graph.file.log("Browser does not support Blob");
}
});
draw_graph.file.part_filename = (function draw_graph$file$part_filename(var_args){
var args__4795__auto__ = [];
var len__4789__auto___55851 = arguments.length;
var i__4790__auto___55852 = (0);
while(true){
if((i__4790__auto___55852 < len__4789__auto___55851)){
args__4795__auto__.push((arguments[i__4790__auto___55852]));

var G__55853 = (i__4790__auto___55852 + (1));
i__4790__auto___55852 = G__55853;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return draw_graph.file.part_filename.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(draw_graph.file.part_filename.cljs$core$IFn$_invoke$arity$variadic = (function (prefixes){
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
}));

(draw_graph.file.part_filename.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(draw_graph.file.part_filename.cljs$lang$applyTo = (function (seq55767){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55767));
}));

draw_graph.file.svg_filename = (function draw_graph$file$svg_filename(var_args){
var args__4795__auto__ = [];
var len__4789__auto___55860 = arguments.length;
var i__4790__auto___55861 = (0);
while(true){
if((i__4790__auto___55861 < len__4789__auto___55860)){
args__4795__auto__.push((arguments[i__4790__auto___55861]));

var G__55862 = (i__4790__auto___55861 + (1));
i__4790__auto___55861 = G__55862;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return draw_graph.file.svg_filename.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(draw_graph.file.svg_filename.cljs$core$IFn$_invoke$arity$variadic = (function (filename,prefixes){
if((((filename == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",filename)))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(draw_graph.file.part_filename,prefixes)),"-",cljs.core.subs.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),(0),(4))].join('');
} else {
var l = filename.length;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(draw_graph.file.part_filename,prefixes)),"-",cljs.core.subs.cljs$core$IFn$_invoke$arity$3(filename,(0),(l - (4)))].join('');
}
}));

(draw_graph.file.svg_filename.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(draw_graph.file.svg_filename.cljs$lang$applyTo = (function (seq55779){
var G__55780 = cljs.core.first(seq55779);
var seq55779__$1 = cljs.core.next(seq55779);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55780,seq55779__$1);
}));

draw_graph.file.save_svg = (function draw_graph$file$save_svg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___55863 = arguments.length;
var i__4790__auto___55864 = (0);
while(true){
if((i__4790__auto___55864 < len__4789__auto___55863)){
args__4795__auto__.push((arguments[i__4790__auto___55864]));

var G__55865 = (i__4790__auto___55864 + (1));
i__4790__auto___55864 = G__55865;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return draw_graph.file.save_svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(draw_graph.file.save_svg.cljs$core$IFn$_invoke$arity$variadic = (function (contents,filename,prefixes){
var fs = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(draw_graph.file.svg_filename,filename,prefixes);
return draw_graph.file.save_file(fs,"image/svg+xml",cljs.core.deref(contents));
}));

(draw_graph.file.save_svg.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(draw_graph.file.save_svg.cljs$lang$applyTo = (function (seq55818){
var G__55819 = cljs.core.first(seq55818);
var seq55818__$1 = cljs.core.next(seq55818);
var G__55820 = cljs.core.first(seq55818__$1);
var seq55818__$2 = cljs.core.next(seq55818__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55819,G__55820,seq55818__$2);
}));


//# sourceMappingURL=draw_graph.file.js.map
