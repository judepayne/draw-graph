goog.provide('main.draw_graph.file');
goog.require('cljs.core');
goog.require('cljs.core.async');
main.draw_graph.file.log = console.log;
main.draw_graph.file.first_file = cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (e){
var target = e.currentTarget;
var file = (target.files[(0)]);
target.value = "";

return file;
}));
main.draw_graph.file.extract_result = cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (n){
var contents = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(n);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(n,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(contents.target.result));
}));
main.draw_graph.file.upload_reqs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((1),main.draw_graph.file.first_file);
main.draw_graph.file.file_reads = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((1),main.draw_graph.file.extract_result);
main.draw_graph.file.file_reader_put = (function main$draw_graph$file$file_reader_put(e){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(main.draw_graph.file.upload_reqs,e);
});
main.draw_graph.file.file_reader_listen = (function main$draw_graph$file$file_reader_listen(callback){
var c__25132__auto___52103 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25132__auto___52103){
return (function (){
var f__25133__auto__ = (function (){var switch__25087__auto__ = ((function (c__25132__auto___52103){
return (function (state_52019){
var state_val_52020 = (state_52019[(1)]);
if((state_val_52020 === (1))){
var state_52019__$1 = state_52019;
var statearr_52036_52104 = state_52019__$1;
(statearr_52036_52104[(2)] = null);

(statearr_52036_52104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52020 === (2))){
var inst_52004 = (new FileReader());
var state_52019__$1 = (function (){var statearr_52037 = state_52019;
(statearr_52037[(7)] = inst_52004);

return statearr_52037;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52019__$1,(4),main.draw_graph.file.upload_reqs);
} else {
if((state_val_52020 === (3))){
var inst_52012 = (state_52019[(2)]);
var state_52019__$1 = state_52019;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52019__$1,inst_52012);
} else {
if((state_val_52020 === (4))){
var inst_52004 = (state_52019[(7)]);
var inst_52006 = (state_52019[(2)]);
var inst_52007 = (function (){var reader = inst_52004;
var file = inst_52006;
return ((function (reader,file,inst_52004,inst_52006,state_val_52020,c__25132__auto___52103){
return (function (p1__51998_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(main.draw_graph.file.file_reads,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),p1__51998_SHARP_,new cljs.core.Keyword(null,"data-filename","data-filename",1476355539),file.name], null));
});
;})(reader,file,inst_52004,inst_52006,state_val_52020,c__25132__auto___52103))
})();
var inst_52008 = inst_52004.onload = inst_52007;
var inst_52009 = inst_52004.readAsText(inst_52006);
var state_52019__$1 = (function (){var statearr_52038 = state_52019;
(statearr_52038[(8)] = inst_52008);

(statearr_52038[(9)] = inst_52009);

return statearr_52038;
})();
var statearr_52039_52108 = state_52019__$1;
(statearr_52039_52108[(2)] = null);

(statearr_52039_52108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__25132__auto___52103))
;
return ((function (switch__25087__auto__,c__25132__auto___52103){
return (function() {
var main$draw_graph$file$file_reader_listen_$_state_machine__25088__auto__ = null;
var main$draw_graph$file$file_reader_listen_$_state_machine__25088__auto____0 = (function (){
var statearr_52040 = [null,null,null,null,null,null,null,null,null,null];
(statearr_52040[(0)] = main$draw_graph$file$file_reader_listen_$_state_machine__25088__auto__);

(statearr_52040[(1)] = (1));

return statearr_52040;
});
var main$draw_graph$file$file_reader_listen_$_state_machine__25088__auto____1 = (function (state_52019){
while(true){
var ret_value__25089__auto__ = (function (){try{while(true){
var result__25090__auto__ = switch__25087__auto__(state_52019);
if(cljs.core.keyword_identical_QMARK_(result__25090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25090__auto__;
}
break;
}
}catch (e52041){if((e52041 instanceof Object)){
var ex__25091__auto__ = e52041;
var statearr_52042_52113 = state_52019;
(statearr_52042_52113[(5)] = ex__25091__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52019);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52041;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52114 = state_52019;
state_52019 = G__52114;
continue;
} else {
return ret_value__25089__auto__;
}
break;
}
});
main$draw_graph$file$file_reader_listen_$_state_machine__25088__auto__ = function(state_52019){
switch(arguments.length){
case 0:
return main$draw_graph$file$file_reader_listen_$_state_machine__25088__auto____0.call(this);
case 1:
return main$draw_graph$file$file_reader_listen_$_state_machine__25088__auto____1.call(this,state_52019);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
main$draw_graph$file$file_reader_listen_$_state_machine__25088__auto__.cljs$core$IFn$_invoke$arity$0 = main$draw_graph$file$file_reader_listen_$_state_machine__25088__auto____0;
main$draw_graph$file$file_reader_listen_$_state_machine__25088__auto__.cljs$core$IFn$_invoke$arity$1 = main$draw_graph$file$file_reader_listen_$_state_machine__25088__auto____1;
return main$draw_graph$file$file_reader_listen_$_state_machine__25088__auto__;
})()
;})(switch__25087__auto__,c__25132__auto___52103))
})();
var state__25134__auto__ = (function (){var statearr_52043 = (f__25133__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25133__auto__.cljs$core$IFn$_invoke$arity$0() : f__25133__auto__.call(null));
(statearr_52043[(6)] = c__25132__auto___52103);

return statearr_52043;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25134__auto__);
});})(c__25132__auto___52103))
);


var c__25132__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25132__auto__){
return (function (){
var f__25133__auto__ = (function (){var switch__25087__auto__ = ((function (c__25132__auto__){
return (function (state_52052){
var state_val_52053 = (state_52052[(1)]);
if((state_val_52053 === (1))){
var state_52052__$1 = state_52052;
var statearr_52055_52115 = state_52052__$1;
(statearr_52055_52115[(2)] = null);

(statearr_52055_52115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52053 === (2))){
var state_52052__$1 = state_52052;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52052__$1,(4),main.draw_graph.file.file_reads);
} else {
if((state_val_52053 === (3))){
var inst_52050 = (state_52052[(2)]);
var state_52052__$1 = state_52052;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52052__$1,inst_52050);
} else {
if((state_val_52053 === (4))){
var inst_52046 = (state_52052[(2)]);
var inst_52047 = (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(inst_52046) : callback.call(null,inst_52046));
var state_52052__$1 = (function (){var statearr_52057 = state_52052;
(statearr_52057[(7)] = inst_52047);

return statearr_52057;
})();
var statearr_52058_52116 = state_52052__$1;
(statearr_52058_52116[(2)] = null);

(statearr_52058_52116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__25132__auto__))
;
return ((function (switch__25087__auto__,c__25132__auto__){
return (function() {
var main$draw_graph$file$file_reader_listen_$_state_machine__25088__auto__ = null;
var main$draw_graph$file$file_reader_listen_$_state_machine__25088__auto____0 = (function (){
var statearr_52060 = [null,null,null,null,null,null,null,null];
(statearr_52060[(0)] = main$draw_graph$file$file_reader_listen_$_state_machine__25088__auto__);

(statearr_52060[(1)] = (1));

return statearr_52060;
});
var main$draw_graph$file$file_reader_listen_$_state_machine__25088__auto____1 = (function (state_52052){
while(true){
var ret_value__25089__auto__ = (function (){try{while(true){
var result__25090__auto__ = switch__25087__auto__(state_52052);
if(cljs.core.keyword_identical_QMARK_(result__25090__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25090__auto__;
}
break;
}
}catch (e52061){if((e52061 instanceof Object)){
var ex__25091__auto__ = e52061;
var statearr_52063_52117 = state_52052;
(statearr_52063_52117[(5)] = ex__25091__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_52052);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52061;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25089__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52118 = state_52052;
state_52052 = G__52118;
continue;
} else {
return ret_value__25089__auto__;
}
break;
}
});
main$draw_graph$file$file_reader_listen_$_state_machine__25088__auto__ = function(state_52052){
switch(arguments.length){
case 0:
return main$draw_graph$file$file_reader_listen_$_state_machine__25088__auto____0.call(this);
case 1:
return main$draw_graph$file$file_reader_listen_$_state_machine__25088__auto____1.call(this,state_52052);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
main$draw_graph$file$file_reader_listen_$_state_machine__25088__auto__.cljs$core$IFn$_invoke$arity$0 = main$draw_graph$file$file_reader_listen_$_state_machine__25088__auto____0;
main$draw_graph$file$file_reader_listen_$_state_machine__25088__auto__.cljs$core$IFn$_invoke$arity$1 = main$draw_graph$file$file_reader_listen_$_state_machine__25088__auto____1;
return main$draw_graph$file$file_reader_listen_$_state_machine__25088__auto__;
})()
;})(switch__25087__auto__,c__25132__auto__))
})();
var state__25134__auto__ = (function (){var statearr_52064 = (f__25133__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25133__auto__.cljs$core$IFn$_invoke$arity$0() : f__25133__auto__.call(null));
(statearr_52064[(6)] = c__25132__auto__);

return statearr_52064;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25134__auto__);
});})(c__25132__auto__))
);

return c__25132__auto__;
});
main.draw_graph.file.save_file = (function main$draw_graph$file$save_file(filename,t,s){
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
return (function main$draw_graph$file$save_file_$_destroy_clicked(e){
return document.body.removeChild(e.target);
});})(link,b))
);

(link["style"]["display"] = "none");

document.body.appendChild(link);
}

return link.click();
}
} else {
return (main.draw_graph.file.log.cljs$core$IFn$_invoke$arity$1 ? main.draw_graph.file.log.cljs$core$IFn$_invoke$arity$1("Browser does not support Blob") : main.draw_graph.file.log.call(null,"Browser does not support Blob"));
}
});
main.draw_graph.file.part_filename = (function main$draw_graph$file$part_filename(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52125 = arguments.length;
var i__4731__auto___52126 = (0);
while(true){
if((i__4731__auto___52126 < len__4730__auto___52125)){
args__4736__auto__.push((arguments[i__4731__auto___52126]));

var G__52127 = (i__4731__auto___52126 + (1));
i__4731__auto___52126 = G__52127;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return main.draw_graph.file.part_filename.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

main.draw_graph.file.part_filename.cljs$core$IFn$_invoke$arity$variadic = (function (prefixes){
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

main.draw_graph.file.part_filename.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
main.draw_graph.file.part_filename.cljs$lang$applyTo = (function (seq52065){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52065));
});

main.draw_graph.file.svg_filename = (function main$draw_graph$file$svg_filename(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52130 = arguments.length;
var i__4731__auto___52131 = (0);
while(true){
if((i__4731__auto___52131 < len__4730__auto___52130)){
args__4736__auto__.push((arguments[i__4731__auto___52131]));

var G__52132 = (i__4731__auto___52131 + (1));
i__4731__auto___52131 = G__52132;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return main.draw_graph.file.svg_filename.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

main.draw_graph.file.svg_filename.cljs$core$IFn$_invoke$arity$variadic = (function (filename,prefixes){
if((((filename == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",filename)))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(main.draw_graph.file.part_filename,prefixes)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),(0),(4)))].join('');
} else {
var l = filename.length;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(main.draw_graph.file.part_filename,prefixes)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(filename,(0),(l - (4))))].join('');
}
});

main.draw_graph.file.svg_filename.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
main.draw_graph.file.svg_filename.cljs$lang$applyTo = (function (seq52066){
var G__52067 = cljs.core.first(seq52066);
var seq52066__$1 = cljs.core.next(seq52066);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52067,seq52066__$1);
});

main.draw_graph.file.save_svg = (function main$draw_graph$file$save_svg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52135 = arguments.length;
var i__4731__auto___52136 = (0);
while(true){
if((i__4731__auto___52136 < len__4730__auto___52135)){
args__4736__auto__.push((arguments[i__4731__auto___52136]));

var G__52141 = (i__4731__auto___52136 + (1));
i__4731__auto___52136 = G__52141;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return main.draw_graph.file.save_svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

main.draw_graph.file.save_svg.cljs$core$IFn$_invoke$arity$variadic = (function (contents,filename,prefixes){
var fs = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(main.draw_graph.file.svg_filename,filename,prefixes);
return main.draw_graph.file.save_file(fs,"image/svg+xml",cljs.core.deref(contents));
});

main.draw_graph.file.save_svg.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
main.draw_graph.file.save_svg.cljs$lang$applyTo = (function (seq52094){
var G__52095 = cljs.core.first(seq52094);
var seq52094__$1 = cljs.core.next(seq52094);
var G__52096 = cljs.core.first(seq52094__$1);
var seq52094__$2 = cljs.core.next(seq52094__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52095,G__52096,seq52094__$2);
});


//# sourceMappingURL=main.draw_graph.file.js.map
