// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('draw_graph.file');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async');
draw_graph.file.log = console.log;
draw_graph.file.first_file = cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (e){
var target = e.currentTarget;
var file = (target.files[(0)]);
target.value = "";

return file;
}));
draw_graph.file.extract_result = cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (n){
var contents = cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(n);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(n,cljs.core.cst$kw$data,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(contents.target.result));
}));
draw_graph.file.upload_reqs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((1),draw_graph.file.first_file);
draw_graph.file.file_reads = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((1),draw_graph.file.extract_result);
draw_graph.file.file_reader_put = (function draw_graph$file$file_reader_put(e){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(draw_graph.file.upload_reqs,e);
});
draw_graph.file.file_reader_listen = (function draw_graph$file$file_reader_listen(callback){
var c__25780__auto___29614 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25780__auto___29614){
return (function (){
var f__25781__auto__ = (function (){var switch__25589__auto__ = ((function (c__25780__auto___29614){
return (function (state_29587){
var state_val_29588 = (state_29587[(1)]);
if((state_val_29588 === (1))){
var state_29587__$1 = state_29587;
var statearr_29589_29615 = state_29587__$1;
(statearr_29589_29615[(2)] = null);

(statearr_29589_29615[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29588 === (2))){
var inst_29577 = (new FileReader());
var state_29587__$1 = (function (){var statearr_29590 = state_29587;
(statearr_29590[(7)] = inst_29577);

return statearr_29590;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29587__$1,(4),draw_graph.file.upload_reqs);
} else {
if((state_val_29588 === (3))){
var inst_29585 = (state_29587[(2)]);
var state_29587__$1 = state_29587;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29587__$1,inst_29585);
} else {
if((state_val_29588 === (4))){
var inst_29577 = (state_29587[(7)]);
var inst_29579 = (state_29587[(2)]);
var inst_29580 = (function (){var reader = inst_29577;
var file = inst_29579;
return ((function (reader,file,inst_29577,inst_29579,state_val_29588,c__25780__auto___29614){
return (function (p1__29575_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(draw_graph.file.file_reads,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$data,p1__29575_SHARP_,cljs.core.cst$kw$data_DASH_filename,file.name], null));
});
;})(reader,file,inst_29577,inst_29579,state_val_29588,c__25780__auto___29614))
})();
var inst_29581 = inst_29577.onload = inst_29580;
var inst_29582 = inst_29577.readAsText(inst_29579);
var state_29587__$1 = (function (){var statearr_29591 = state_29587;
(statearr_29591[(8)] = inst_29581);

(statearr_29591[(9)] = inst_29582);

return statearr_29591;
})();
var statearr_29592_29616 = state_29587__$1;
(statearr_29592_29616[(2)] = null);

(statearr_29592_29616[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
});})(c__25780__auto___29614))
;
return ((function (switch__25589__auto__,c__25780__auto___29614){
return (function() {
var draw_graph$file$file_reader_listen_$_state_machine__25590__auto__ = null;
var draw_graph$file$file_reader_listen_$_state_machine__25590__auto____0 = (function (){
var statearr_29593 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29593[(0)] = draw_graph$file$file_reader_listen_$_state_machine__25590__auto__);

(statearr_29593[(1)] = (1));

return statearr_29593;
});
var draw_graph$file$file_reader_listen_$_state_machine__25590__auto____1 = (function (state_29587){
while(true){
var ret_value__25591__auto__ = (function (){try{while(true){
var result__25592__auto__ = switch__25589__auto__(state_29587);
if(cljs.core.keyword_identical_QMARK_(result__25592__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__25592__auto__;
}
break;
}
}catch (e29594){if((e29594 instanceof Object)){
var ex__25593__auto__ = e29594;
var statearr_29595_29617 = state_29587;
(statearr_29595_29617[(5)] = ex__25593__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29587);

return cljs.core.cst$kw$recur;
} else {
throw e29594;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25591__auto__,cljs.core.cst$kw$recur)){
var G__29618 = state_29587;
state_29587 = G__29618;
continue;
} else {
return ret_value__25591__auto__;
}
break;
}
});
draw_graph$file$file_reader_listen_$_state_machine__25590__auto__ = function(state_29587){
switch(arguments.length){
case 0:
return draw_graph$file$file_reader_listen_$_state_machine__25590__auto____0.call(this);
case 1:
return draw_graph$file$file_reader_listen_$_state_machine__25590__auto____1.call(this,state_29587);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
draw_graph$file$file_reader_listen_$_state_machine__25590__auto__.cljs$core$IFn$_invoke$arity$0 = draw_graph$file$file_reader_listen_$_state_machine__25590__auto____0;
draw_graph$file$file_reader_listen_$_state_machine__25590__auto__.cljs$core$IFn$_invoke$arity$1 = draw_graph$file$file_reader_listen_$_state_machine__25590__auto____1;
return draw_graph$file$file_reader_listen_$_state_machine__25590__auto__;
})()
;})(switch__25589__auto__,c__25780__auto___29614))
})();
var state__25782__auto__ = (function (){var statearr_29596 = (f__25781__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25781__auto__.cljs$core$IFn$_invoke$arity$0() : f__25781__auto__.call(null));
(statearr_29596[(6)] = c__25780__auto___29614);

return statearr_29596;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25782__auto__);
});})(c__25780__auto___29614))
);


var c__25780__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25780__auto__){
return (function (){
var f__25781__auto__ = (function (){var switch__25589__auto__ = ((function (c__25780__auto__){
return (function (state_29605){
var state_val_29606 = (state_29605[(1)]);
if((state_val_29606 === (1))){
var state_29605__$1 = state_29605;
var statearr_29607_29619 = state_29605__$1;
(statearr_29607_29619[(2)] = null);

(statearr_29607_29619[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29606 === (2))){
var state_29605__$1 = state_29605;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29605__$1,(4),draw_graph.file.file_reads);
} else {
if((state_val_29606 === (3))){
var inst_29603 = (state_29605[(2)]);
var state_29605__$1 = state_29605;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29605__$1,inst_29603);
} else {
if((state_val_29606 === (4))){
var inst_29599 = (state_29605[(2)]);
var inst_29600 = (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(inst_29599) : callback.call(null,inst_29599));
var state_29605__$1 = (function (){var statearr_29608 = state_29605;
(statearr_29608[(7)] = inst_29600);

return statearr_29608;
})();
var statearr_29609_29620 = state_29605__$1;
(statearr_29609_29620[(2)] = null);

(statearr_29609_29620[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
});})(c__25780__auto__))
;
return ((function (switch__25589__auto__,c__25780__auto__){
return (function() {
var draw_graph$file$file_reader_listen_$_state_machine__25590__auto__ = null;
var draw_graph$file$file_reader_listen_$_state_machine__25590__auto____0 = (function (){
var statearr_29610 = [null,null,null,null,null,null,null,null];
(statearr_29610[(0)] = draw_graph$file$file_reader_listen_$_state_machine__25590__auto__);

(statearr_29610[(1)] = (1));

return statearr_29610;
});
var draw_graph$file$file_reader_listen_$_state_machine__25590__auto____1 = (function (state_29605){
while(true){
var ret_value__25591__auto__ = (function (){try{while(true){
var result__25592__auto__ = switch__25589__auto__(state_29605);
if(cljs.core.keyword_identical_QMARK_(result__25592__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__25592__auto__;
}
break;
}
}catch (e29611){if((e29611 instanceof Object)){
var ex__25593__auto__ = e29611;
var statearr_29612_29621 = state_29605;
(statearr_29612_29621[(5)] = ex__25593__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29605);

return cljs.core.cst$kw$recur;
} else {
throw e29611;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25591__auto__,cljs.core.cst$kw$recur)){
var G__29622 = state_29605;
state_29605 = G__29622;
continue;
} else {
return ret_value__25591__auto__;
}
break;
}
});
draw_graph$file$file_reader_listen_$_state_machine__25590__auto__ = function(state_29605){
switch(arguments.length){
case 0:
return draw_graph$file$file_reader_listen_$_state_machine__25590__auto____0.call(this);
case 1:
return draw_graph$file$file_reader_listen_$_state_machine__25590__auto____1.call(this,state_29605);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
draw_graph$file$file_reader_listen_$_state_machine__25590__auto__.cljs$core$IFn$_invoke$arity$0 = draw_graph$file$file_reader_listen_$_state_machine__25590__auto____0;
draw_graph$file$file_reader_listen_$_state_machine__25590__auto__.cljs$core$IFn$_invoke$arity$1 = draw_graph$file$file_reader_listen_$_state_machine__25590__auto____1;
return draw_graph$file$file_reader_listen_$_state_machine__25590__auto__;
})()
;})(switch__25589__auto__,c__25780__auto__))
})();
var state__25782__auto__ = (function (){var statearr_29613 = (f__25781__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25781__auto__.cljs$core$IFn$_invoke$arity$0() : f__25781__auto__.call(null));
(statearr_29613[(6)] = c__25780__auto__);

return statearr_29613;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25782__auto__);
});})(c__25780__auto__))
);

return c__25780__auto__;
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
var len__4730__auto___29624 = arguments.length;
var i__4731__auto___29625 = (0);
while(true){
if((i__4731__auto___29625 < len__4730__auto___29624)){
args__4736__auto__.push((arguments[i__4731__auto___29625]));

var G__29626 = (i__4731__auto___29625 + (1));
i__4731__auto___29625 = G__29626;
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
draw_graph.file.part_filename.cljs$lang$applyTo = (function (seq29623){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29623));
});

draw_graph.file.svg_filename = (function draw_graph$file$svg_filename(var_args){
var args__4736__auto__ = [];
var len__4730__auto___29629 = arguments.length;
var i__4731__auto___29630 = (0);
while(true){
if((i__4731__auto___29630 < len__4730__auto___29629)){
args__4736__auto__.push((arguments[i__4731__auto___29630]));

var G__29631 = (i__4731__auto___29630 + (1));
i__4731__auto___29630 = G__29631;
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
draw_graph.file.svg_filename.cljs$lang$applyTo = (function (seq29627){
var G__29628 = cljs.core.first(seq29627);
var seq29627__$1 = cljs.core.next(seq29627);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29628,seq29627__$1);
});

draw_graph.file.save_svg = (function draw_graph$file$save_svg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___29635 = arguments.length;
var i__4731__auto___29636 = (0);
while(true){
if((i__4731__auto___29636 < len__4730__auto___29635)){
args__4736__auto__.push((arguments[i__4731__auto___29636]));

var G__29637 = (i__4731__auto___29636 + (1));
i__4731__auto___29636 = G__29637;
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
draw_graph.file.save_svg.cljs$lang$applyTo = (function (seq29632){
var G__29633 = cljs.core.first(seq29632);
var seq29632__$1 = cljs.core.next(seq29632);
var G__29634 = cljs.core.first(seq29632__$1);
var seq29632__$2 = cljs.core.next(seq29632__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29633,G__29634,seq29632__$2);
});

