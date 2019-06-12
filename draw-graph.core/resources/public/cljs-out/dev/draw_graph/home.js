// Compiled by ClojureScript 1.10.520 {}
goog.provide('draw_graph.home');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.ratom');
goog.require('cljs.core.async');
goog.require('accountant.core');
goog.require('kvlt.core');
goog.require('promesa.core');
goog.require('promesa.async_cljs');
goog.require('clojure.string');
goog.require('draw_graph.utils');
goog.require('draw_graph.examples');
goog.require('lib_draw_graph.processor');
goog.require('lib_draw_graph.parser');
goog.require('lib_draw_graph.clustered');
goog.require('draw_graph.file');
goog.require('clojure.data.xml');
goog.require('lib_draw_graph.svg');
goog.require('viz.core');
draw_graph.home.log = console.log;
draw_graph.home.default_svg_text = "<div/>";
draw_graph.home.local_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"options","options",99638489),draw_graph.examples.default_options,new cljs.core.Keyword(null,"processing","processing",-1576405467),false,new cljs.core.Keyword(null,"local-dot","local-dot",-2051990829),true,new cljs.core.Keyword(null,"error","error",-978969032),"",new cljs.core.Keyword(null,"warn","warn",-436710552),"",new cljs.core.Keyword(null,"svg","svg",856789142),draw_graph.home.default_svg_text,new cljs.core.Keyword(null,"data","data",-232669377),""], null));
draw_graph.home.options = reagent.core.cursor.call(null,draw_graph.home.local_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489)], null));
draw_graph.home.svg = reagent.core.cursor.call(null,draw_graph.home.local_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142)], null));
draw_graph.home.processing = reagent.core.cursor.call(null,draw_graph.home.local_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"processing","processing",-1576405467)], null));
draw_graph.home.error = reagent.core.cursor.call(null,draw_graph.home.local_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null));
draw_graph.home.warn = reagent.core.cursor.call(null,draw_graph.home.local_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null));
draw_graph.home.local_dot = reagent.core.cursor.call(null,draw_graph.home.local_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"local-dot","local-dot",-2051990829)], null));
draw_graph.file.file_reader_listen.call(null,(function (e){
cljs.core.swap_BANG_.call(null,draw_graph.home.local_state,cljs.core.merge,e);

return draw_graph.home.update_ace.call(null);
}));
draw_graph.home._STAR_produce_dot_locally_STAR_ = true;
draw_graph.home.clj__GT_json = (function draw_graph$home$clj__GT_json(ds){
return JSON.stringify(cljs.core.clj__GT_js.call(null,ds));
});
draw_graph.home.json__GT_clj = (function draw_graph$home$json__GT_clj(ds){
return cljs.core.js__GT_clj.call(null,JSON.parse(ds),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
});
draw_graph.home.url_lambda_draw_graph = "https://u4jlt3tmhe.execute-api.us-east-1.amazonaws.com/beta";
/**
 * removes items from map where Value is an empty string
 */
draw_graph.home.remove_empty_strings = (function draw_graph$home$remove_empty_strings(m){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.comp.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["",null], null), null),cljs.core.last)),m));
});
draw_graph.home.__GT_csv1 = (function draw_graph$home$__GT_csv1(){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-options","display-options",1066052168),draw_graph.home.remove_empty_strings.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,draw_graph.home.local_state))),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,draw_graph.home.local_state)),new cljs.core.Keyword(null,"format-in","format-in",1820661092),"csv",new cljs.core.Keyword(null,"format-out","format-out",1283960670),"svg"], null);
});
draw_graph.home.__GT_dot = (function draw_graph$home$__GT_dot(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display-options","display-options",1066052168),draw_graph.home.remove_empty_strings.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,draw_graph.home.local_state))),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,draw_graph.home.local_state))], null);
});
draw_graph.home.dot__GT_svg = (function draw_graph$home$dot__GT_svg(data){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"format-in","format-in",1820661092),"dot",new cljs.core.Keyword(null,"format-out","format-out",1283960670),"svg"], null);
});
draw_graph.home.post = (function draw_graph$home$post(url,json_data){
return promesa.core.bind.call(null,promesa.core.catch$.call(null,kvlt.core.request_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"body","body",-2049205669),json_data,new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"accept","accept",1874130431),new cljs.core.Keyword(null,"json","json",1279968570)], null)),(function (e){
return cljs.core.ex_data.call(null,e).call(null,new cljs.core.Keyword(null,"type","type",1174270348));
})),(function (p__25687){
var map__25688 = p__25687;
var map__25688__$1 = (((((!((map__25688 == null))))?(((((map__25688.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25688.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25688):map__25688);
var status = cljs.core.get.call(null,map__25688__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var body = cljs.core.get.call(null,map__25688__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
return promesa.core.promise.call(null,body);
}));
});
draw_graph.home.__GT_svg = (function draw_graph$home$__GT_svg(json_data){
return cljs.core.partial.call(null,draw_graph.home.post,draw_graph.home.url_lambda_draw_graph).call(null,json_data);
});
draw_graph.home.put_svg = (function draw_graph$home$put_svg(data){
var data_STAR__25690 = ((cljs.core._EQ_.call(null,data,"null"))?draw_graph.home.default_svg_text:data);

cljs.core.reset_BANG_.call(null,draw_graph.home.processing,false);

return cljs.core.reset_BANG_.call(null,draw_graph.home.svg,data);
});
draw_graph.home.put_error = (function draw_graph$home$put_error(message){
cljs.core.reset_BANG_.call(null,draw_graph.home.processing,false);

cljs.core.reset_BANG_.call(null,draw_graph.home.svg,"");

return cljs.core.reset_BANG_.call(null,draw_graph.home.error,message);
});
draw_graph.home.put_warn = (function draw_graph$home$put_warn(message){
cljs.core.reset_BANG_.call(null,draw_graph.home.processing,false);

return cljs.core.reset_BANG_.call(null,draw_graph.home.warn,message);
});
draw_graph.home.put_result = (function draw_graph$home$put_result(result){
if(cljs.core.truth_(new cljs.core.Keyword(null,"svg","svg",856789142).cljs$core$IFn$_invoke$arity$1(result))){
cljs.core.reset_BANG_.call(null,draw_graph.home.svg,new cljs.core.Keyword(null,"svg","svg",856789142).cljs$core$IFn$_invoke$arity$1(result));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(result))){
cljs.core.reset_BANG_.call(null,draw_graph.home.error,new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(result));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"warn","warn",-436710552).cljs$core$IFn$_invoke$arity$1(result))){
cljs.core.reset_BANG_.call(null,draw_graph.home.warn,new cljs.core.Keyword(null,"warn","warn",-436710552).cljs$core$IFn$_invoke$arity$1(result));
} else {
}

return cljs.core.reset_BANG_.call(null,draw_graph.home.processing,false);
});
draw_graph.home.process_remotely = (function draw_graph$home$process_remotely(){
return promesa.core.error.call(null,(function (error){
return draw_graph.home.put_error.call(null,error.message);
}),promesa.core.map.call(null,draw_graph.home.put_result,promesa.core.map.call(null,draw_graph.home.json__GT_clj,draw_graph.home.__GT_svg.call(null,draw_graph.home.clj__GT_json.call(null,draw_graph.home.__GT_csv1.call(null))))));
});
draw_graph.home.prom_viz = (function draw_graph$home$prom_viz(dot){
return promesa.core.bind.call(null,promesa.core.catch$.call(null,viz.core.image.call(null,dot),(function (e){
return cljs.core.ex_data.call(null,e).call(null,new cljs.core.Keyword(null,"type","type",1174270348));
})),(function (result){
return promesa.core.promise.call(null,result);
}));
});
draw_graph.home.local_dot__GT_svg = (function draw_graph$home$local_dot__GT_svg(g,opts,dot){
var dot_SINGLEQUOTE_ = clojure.string.replace.call(null,dot,/\\\\n/,"\n");
return promesa.core.error.call(null,((function (dot_SINGLEQUOTE_){
return (function (error){
return draw_graph.home.put_error.call(null,error.message);
});})(dot_SINGLEQUOTE_))
,promesa.core.map.call(null,draw_graph.home.put_svg,promesa.core.map.call(null,cljs.core.partial.call(null,lib_draw_graph.processor.postprocess_svg,g,opts),draw_graph.home.prom_viz.call(null,dot_SINGLEQUOTE_))));
});
draw_graph.home.lambda_dot__GT_svg = (function draw_graph$home$lambda_dot__GT_svg(g,opts,dot){
return promesa.core.error.call(null,(function (error){
return draw_graph.home.put_error.call(null,error.message);
}),promesa.core.map.call(null,draw_graph.home.put_svg,promesa.core.map.call(null,cljs.core.partial.call(null,lib_draw_graph.processor.postprocess_svg,g,opts),promesa.core.map.call(null,new cljs.core.Keyword(null,"svg","svg",856789142),promesa.core.map.call(null,draw_graph.home.json__GT_clj,draw_graph.home.__GT_svg.call(null,draw_graph.home.clj__GT_json.call(null,draw_graph.home.dot__GT_svg.call(null,dot))))))));
});
draw_graph.home.process_locally = (function draw_graph$home$process_locally(){
cljs.core.reset_BANG_.call(null,draw_graph.home.processing,true);

cljs.core.reset_BANG_.call(null,draw_graph.home.error,"");

cljs.core.reset_BANG_.call(null,draw_graph.home.warn,"");

var in$ = draw_graph.home.__GT_csv1.call(null);
var opts = new cljs.core.Keyword(null,"display-options","display-options",1066052168).cljs$core$IFn$_invoke$arity$1(in$);
var g = (function (){try{return lib_draw_graph.processor.csv__GT_g.call(null,in$);
}catch (e25691){if((e25691 instanceof Error)){
var e = e25691;
cljs.core.reset_BANG_.call(null,draw_graph.home.svg,"");

return draw_graph.home.put_error.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(e));
} else {
throw e25691;

}
}})();
var g_SINGLEQUOTE_ = (function (){try{return lib_draw_graph.processor.preprocess_graph.call(null,g,opts);
}catch (e25692){if((e25692 instanceof Error)){
var e = e25692;
cljs.core.reset_BANG_.call(null,draw_graph.home.svg,"");

return draw_graph.home.put_error.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(e));
} else {
throw e25692;

}
}})();
var dot = lib_draw_graph.processor.g__GT_dot.call(null,in$,g_SINGLEQUOTE_);
if(cljs.core.truth_(cljs.core.deref.call(null,draw_graph.home.local_dot))){
return draw_graph.home.local_dot__GT_svg.call(null,g_SINGLEQUOTE_,opts,dot);
} else {
return draw_graph.home.lambda_dot__GT_svg.call(null,g_SINGLEQUOTE_,opts,dot);
}
});
draw_graph.home.get_svg = (function draw_graph$home$get_svg(){
if(draw_graph.home._STAR_produce_dot_locally_STAR_){
return draw_graph.home.process_locally.call(null);
} else {
return draw_graph.home.process_remotely.call(null);
}
});
draw_graph.home.__GT_js = (function draw_graph$home$__GT_js(var_name){
return clojure.string.replace.call(null,clojure.string.replace.call(null,var_name,/\//,"."),/-/,"_");
});
draw_graph.home.invoke = (function draw_graph$home$invoke(var_args){
var args__4736__auto__ = [];
var len__4730__auto___25695 = arguments.length;
var i__4731__auto___25696 = (0);
while(true){
if((i__4731__auto___25696 < len__4730__auto___25695)){
args__4736__auto__.push((arguments[i__4731__auto___25696]));

var G__25697 = (i__4731__auto___25696 + (1));
i__4731__auto___25696 = G__25697;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return draw_graph.home.invoke.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

draw_graph.home.invoke.cljs$core$IFn$_invoke$arity$variadic = (function (function_name,args){
var fun = eval(draw_graph.home.__GT_js.call(null,function_name));
return cljs.core.apply.call(null,fun,args);
});

draw_graph.home.invoke.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
draw_graph.home.invoke.cljs$lang$applyTo = (function (seq25693){
var G__25694 = cljs.core.first.call(null,seq25693);
var seq25693__$1 = cljs.core.next.call(null,seq25693);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25694,seq25693__$1);
});

draw_graph.home.set_value = (function draw_graph$home$set_value(id,val){
if((!((val == null)))){
return document.getElementById(id).value = val;
} else {
return null;
}
});
draw_graph.home.fixed_select = (function draw_graph$home$fixed_select(var_args){
var args__4736__auto__ = [];
var len__4730__auto___25707 = arguments.length;
var i__4731__auto___25708 = (0);
while(true){
if((i__4731__auto___25708 < len__4730__auto___25707)){
args__4736__auto__.push((arguments[i__4731__auto___25708]));

var G__25709 = (i__4731__auto___25708 + (1));
i__4731__auto___25708 = G__25709;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return draw_graph.home.fixed_select.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

draw_graph.home.fixed_select.cljs$core$IFn$_invoke$arity$variadic = (function (path,a,tabIndex,options){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.last.call(null,path),new cljs.core.Keyword(null,"values","values",372645556),cljs.core.get_in.call(null,cljs.core.deref.call(null,a),path),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.call(null,cljs.core.deref.call(null,draw_graph.home.local_state),path),new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),tabIndex,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__25698_SHARP_){
return cljs.core.swap_BANG_.call(null,draw_graph.home.local_state,cljs.core.update_in,path,(function (e){
return p1__25698_SHARP_.target.value;
}));
})], null),(function (){var iter__4523__auto__ = (function draw_graph$home$iter__25703(s__25704){
return (new cljs.core.LazySeq(null,(function (){
var s__25704__$1 = s__25704;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__25704__$1);
if(temp__5720__auto__){
var s__25704__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25704__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__25704__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__25706 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__25705 = (0);
while(true){
if((i__25705 < size__4522__auto__)){
var x = cljs.core._nth.call(null,c__4521__auto__,i__25705);
cljs.core.chunk_append.call(null,b__25706,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),x], null),x], null));

var G__25710 = (i__25705 + (1));
i__25705 = G__25710;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25706),draw_graph$home$iter__25703.call(null,cljs.core.chunk_rest.call(null,s__25704__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25706),null);
}
} else {
var x = cljs.core.first.call(null,s__25704__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),x], null),x], null),draw_graph$home$iter__25703.call(null,cljs.core.rest.call(null,s__25704__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,options);
})()], null);
});

draw_graph.home.fixed_select.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
draw_graph.home.fixed_select.cljs$lang$applyTo = (function (seq25699){
var G__25700 = cljs.core.first.call(null,seq25699);
var seq25699__$1 = cljs.core.next.call(null,seq25699);
var G__25701 = cljs.core.first.call(null,seq25699__$1);
var seq25699__$2 = cljs.core.next.call(null,seq25699__$1);
var G__25702 = cljs.core.first.call(null,seq25699__$2);
var seq25699__$3 = cljs.core.next.call(null,seq25699__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25700,G__25701,G__25702,seq25699__$3);
});

draw_graph.home.text_input = (function draw_graph$home$text_input(path,a,tabIndex){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.last.call(null,path),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.call(null,cljs.core.deref.call(null,a),path),new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),tabIndex,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__25711_SHARP_){
return cljs.core.swap_BANG_.call(null,draw_graph.home.local_state,cljs.core.update_in,path,(function (e){
return p1__25711_SHARP_.target.value;
}));
})], null)], null);
});
draw_graph.home.wide_text_input = (function draw_graph$home$wide_text_input(path,a,tabIndex){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.wide","input.wide",1879372921),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.last.call(null,path),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.call(null,cljs.core.deref.call(null,a),path),new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),tabIndex,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__25712_SHARP_){
return cljs.core.swap_BANG_.call(null,draw_graph.home.local_state,cljs.core.update_in,path,(function (e){
return p1__25712_SHARP_.target.value;
}));
})], null)], null);
});
draw_graph.home.myace = reagent.core.atom.call(null,null);
draw_graph.home.ace_editor = (function draw_graph$home$ace_editor(value){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"ace editor",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
console.log("mounted");

var node = reagent.core.dom_node.call(null,this$);
var ace_instance = ace.edit("editor");
cljs.core.reset_BANG_.call(null,draw_graph.home.myace,ace_instance);

return ace_instance.on("change",((function (node,ace_instance){
return (function (){
return cljs.core.swap_BANG_.call(null,value,cljs.core.assoc,new cljs.core.Keyword(null,"data","data",-232669377),ace_instance.getValue());
});})(node,ace_instance))
);
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"editor"], null)], null);
})], null));
});
draw_graph.home.update_ace = (function draw_graph$home$update_ace(){
var ace_instance = cljs.core.deref.call(null,draw_graph.home.myace);
var cursor = ace_instance.getCursorPositionScreen();
return ace_instance.setValue(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,draw_graph.home.local_state)),cursor);
});
draw_graph.home.load_example_data = (function draw_graph$home$load_example_data(ex_fn){
var example = draw_graph.home.invoke.call(null,ex_fn);
cljs.core.swap_BANG_.call(null,draw_graph.home.local_state,cljs.core.assoc,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(example));

return cljs.core.swap_BANG_.call(null,draw_graph.home.local_state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(example),new cljs.core.Keyword(null,"data-filename","data-filename",1476355539),""], null));
});
draw_graph.home.example_dropdown = (function draw_graph$home$example_dropdown(){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),(1),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__25713_SHARP_){
draw_graph.home.load_example_data.call(null,p1__25713_SHARP_.target.value);

return draw_graph.home.update_ace.call(null);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null),"-"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"draw-graph.examples/example1"], null),"Friendship graph"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"draw-graph.examples/example2"], null),"Two facing trees"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"draw-graph.examples/example3"], null),"Two trees"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"draw-graph.examples/example4"], null),"CERN email connections"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"draw-graph.examples/example5"], null),"Circular tree"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"draw-graph.examples/example6"], null),"cluster layout"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"draw-graph.examples/example7"], null),"complex cluster layout"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"draw-graph.examples/example8"], null),"Architecture diagram"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"draw-graph.examples/example9"], null),"Complex architecture diagram"], null)], null);
});
draw_graph.home.click_upload_csv_hidden = (function draw_graph$home$click_upload_csv_hidden(e){
return document.getElementById("upload-csv-hidden").click();
});
draw_graph.home.load_button = (function draw_graph$home$load_button(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"upload-csv",new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),(2),new cljs.core.Keyword(null,"on-click","on-click",1632826543),draw_graph.home.click_upload_csv_hidden,new cljs.core.Keyword(null,"title","title",636505583),"Upload a csv in 'csv1' format. see help"], null),"Load csv"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"upload-csv-hidden",new cljs.core.Keyword(null,"type","type",1174270348),"file",new cljs.core.Keyword(null,"accept","accept",1874130431),".csv",new cljs.core.Keyword(null,"on-change","on-change",-732046149),draw_graph.file.file_reader_put], null)], null)], null);
});
draw_graph.home.data_input = (function draw_graph$home$data_input(value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"wrap","wrap",851669987),new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),new cljs.core.Keyword(null,"autoComplete","autoComplete",-219243415),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"spellCheck","spellCheck",331078550),new cljs.core.Keyword(null,"autoCorrect","autoCorrect",448626584),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"autoCapitalize","autoCapitalize",438011742)],["soft",(3),"on",new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,value)),(20),"tweak-box","false","off",(function (p1__25714_SHARP_){
return cljs.core.swap_BANG_.call(null,value,cljs.core.assoc,new cljs.core.Keyword(null,"data","data",-232669377),p1__25714_SHARP_.target.value);
}),"off"])], null)], null);
});
draw_graph.home.first_line = (function draw_graph$home$first_line(s){
return cljs.core.js__GT_clj.call(null,cljs.core.subs.call(null,(s.split("\n")[(0)]),(2)).split(":"));
});
draw_graph.home.headers = reagent.ratom.make_reaction.call(null,(function (){
return draw_graph.home.first_line.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,draw_graph.home.local_state)));
}));
draw_graph.home.node_label = (function draw_graph$home$node_label(){
return draw_graph.home.text_input.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"label","label",1718410804)], null),draw_graph.home.local_state,(4));
});
draw_graph.home.cluster_on = (function draw_graph$home$cluster_on(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select.form-control","select.form-control",696610397),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"cluster-on","cluster-on",-499953258),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"cluster-on","cluster-on",-499953258).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,draw_graph.home.options)),new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),(5),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__25715_SHARP_){
return cljs.core.swap_BANG_.call(null,draw_graph.home.local_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"cluster-on","cluster-on",-499953258)], null),(function (e){
return p1__25715_SHARP_.target.value;
}));
})], null),((cljs.core._EQ_.call(null,"",cljs.core.first.call(null,cljs.core.deref.call(null,draw_graph.home.headers))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"none",new cljs.core.Keyword(null,"value","value",305978217),""], null),"-"], null):cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"none",new cljs.core.Keyword(null,"value","value",305978217),""], null),"-"], null),(function (){var iter__4523__auto__ = (function draw_graph$home$cluster_on_$_iter__25716(s__25717){
return (new cljs.core.LazySeq(null,(function (){
var s__25717__$1 = s__25717;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__25717__$1);
if(temp__5720__auto__){
var s__25717__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25717__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__25717__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__25719 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__25718 = (0);
while(true){
if((i__25718 < size__4522__auto__)){
var x = cljs.core._nth.call(null,c__4521__auto__,i__25718);
cljs.core.chunk_append.call(null,b__25719,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),x], null),x], null));

var G__25720 = (i__25718 + (1));
i__25718 = G__25720;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25719),draw_graph$home$cluster_on_$_iter__25716.call(null,cljs.core.chunk_rest.call(null,s__25717__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25719),null);
}
} else {
var x = cljs.core.first.call(null,s__25717__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),x], null),x], null),draw_graph$home$cluster_on_$_iter__25716.call(null,cljs.core.rest.call(null,s__25717__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.deref.call(null,draw_graph.home.headers));
})()))], null);
});
draw_graph.home.color_on = (function draw_graph$home$color_on(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select.form-control","select.form-control",696610397),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"color-on","color-on",-1658319802),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"color-on","color-on",-1658319802).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,draw_graph.home.options)),new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),(6),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__25721_SHARP_){
return cljs.core.swap_BANG_.call(null,draw_graph.home.local_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"color-on","color-on",-1658319802)], null),(function (e){
return p1__25721_SHARP_.target.value;
}));
})], null),((cljs.core._EQ_.call(null,"",cljs.core.first.call(null,cljs.core.deref.call(null,draw_graph.home.headers))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"none",new cljs.core.Keyword(null,"value","value",305978217),""], null),"-"], null):cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"none",new cljs.core.Keyword(null,"value","value",305978217),""], null),"-"], null),(function (){var iter__4523__auto__ = (function draw_graph$home$color_on_$_iter__25722(s__25723){
return (new cljs.core.LazySeq(null,(function (){
var s__25723__$1 = s__25723;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__25723__$1);
if(temp__5720__auto__){
var s__25723__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25723__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__25723__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__25725 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__25724 = (0);
while(true){
if((i__25724 < size__4522__auto__)){
var x = cljs.core._nth.call(null,c__4521__auto__,i__25724);
cljs.core.chunk_append.call(null,b__25725,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),x], null),x], null));

var G__25726 = (i__25724 + (1));
i__25724 = G__25726;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25725),draw_graph$home$color_on_$_iter__25722.call(null,cljs.core.chunk_rest.call(null,s__25723__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25725),null);
}
} else {
var x = cljs.core.first.call(null,s__25723__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),x], null),x], null),draw_graph$home$color_on_$_iter__25722.call(null,cljs.core.rest.call(null,s__25723__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.deref.call(null,draw_graph.home.headers));
})()))], null);
});
draw_graph.home.tooltip = (function draw_graph$home$tooltip(){
return draw_graph.home.text_input.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058)], null),draw_graph.home.local_state,(7));
});
draw_graph.home.url = (function draw_graph$home$url(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select.form-control","select.form-control",696610397),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,draw_graph.home.options)),new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),(8),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__25727_SHARP_){
return cljs.core.swap_BANG_.call(null,draw_graph.home.local_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046)], null),(function (e){
return p1__25727_SHARP_.target.value;
}));
})], null),((cljs.core._EQ_.call(null,"",cljs.core.first.call(null,cljs.core.deref.call(null,draw_graph.home.headers))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"none",new cljs.core.Keyword(null,"value","value",305978217),""], null),"-"], null):cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"none",new cljs.core.Keyword(null,"value","value",305978217),""], null),"-"], null),(function (){var iter__4523__auto__ = (function draw_graph$home$url_$_iter__25728(s__25729){
return (new cljs.core.LazySeq(null,(function (){
var s__25729__$1 = s__25729;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__25729__$1);
if(temp__5720__auto__){
var s__25729__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25729__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__25729__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__25731 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__25730 = (0);
while(true){
if((i__25730 < size__4522__auto__)){
var x = cljs.core._nth.call(null,c__4521__auto__,i__25730);
cljs.core.chunk_append.call(null,b__25731,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),x], null),x], null));

var G__25732 = (i__25730 + (1));
i__25730 = G__25732;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25731),draw_graph$home$url_$_iter__25728.call(null,cljs.core.chunk_rest.call(null,s__25729__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25731),null);
}
} else {
var x = cljs.core.first.call(null,s__25729__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),x], null),x], null),draw_graph$home$url_$_iter__25728.call(null,cljs.core.rest.call(null,s__25729__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.deref.call(null,draw_graph.home.headers));
})()))], null);
});
draw_graph.home.edgelabels = (function draw_graph$home$edgelabels(){
return draw_graph.home.text_input.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"edge-label","edge-label",1582257813)], null),draw_graph.home.local_state,(9));
});
draw_graph.home.filtergraph = (function draw_graph$home$filtergraph(){
return draw_graph.home.text_input.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"filter-graph","filter-graph",-1851101907)], null),draw_graph.home.local_state,(10));
});
draw_graph.home.paths = (function draw_graph$home$paths(){
return draw_graph.home.wide_text_input.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"paths","paths",-1807389588)], null),draw_graph.home.local_state,(11));
});
draw_graph.home.elide_levels = (function draw_graph$home$elide_levels(){
return draw_graph.home.fixed_select.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"elide","elide",-1239101386)], null),draw_graph.home.local_state,(12),"0","1","2","3","4");
});
draw_graph.home.show_roots = (function draw_graph$home$show_roots(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"show-roots?","show-roots?",-1350839449),new cljs.core.Keyword(null,"checked","checked",-50955819),new cljs.core.Keyword(null,"show-roots?","show-roots?",-1350839449).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,draw_graph.home.options)),new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),(13),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return cljs.core.swap_BANG_.call(null,draw_graph.home.local_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"show-roots?","show-roots?",-1350839449)], null),cljs.core.not);
})], null)], null);
});
draw_graph.home.show_constraints = (function draw_graph$home$show_constraints(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"show-constraints?","show-constraints?",1802138993),new cljs.core.Keyword(null,"checked","checked",-50955819),new cljs.core.Keyword(null,"show-constraints?","show-constraints?",1802138993).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,draw_graph.home.options)),new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),(14),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return cljs.core.swap_BANG_.call(null,draw_graph.home.local_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"show-constraints?","show-constraints?",1802138993)], null),cljs.core.not);
})], null)], null);
});
draw_graph.home.pp_QMARK_ = (function draw_graph$home$pp_QMARK_(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"pp?","pp?",-28451498),new cljs.core.Keyword(null,"checked","checked",-50955819),new cljs.core.Keyword(null,"post-process?","post-process?",-621728918).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,draw_graph.home.options)),new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),(15),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return cljs.core.swap_BANG_.call(null,draw_graph.home.local_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"post-process?","post-process?",-621728918)], null),cljs.core.not);
})], null)], null);
});
draw_graph.home.pp_clusters = (function draw_graph$home$pp_clusters(){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.lbl","a.lbl",2026297244),"\u2191"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"pp-clusters-top?","pp-clusters-top?",-1690443633),new cljs.core.Keyword(null,"checked","checked",-50955819),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pp-clusters","pp-clusters",478062894).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,draw_graph.home.options))),new cljs.core.Keyword(null,"tab-index","tab-index",895755393),(16),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return cljs.core.swap_BANG_.call(null,draw_graph.home.local_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"pp-clusters","pp-clusters",478062894),new cljs.core.Keyword(null,"y","y",-1757859776)], null),cljs.core.not);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.lbl","a.lbl",2026297244),["\u00A0","\u00A0","\u00A0","\u00A0","\u2193"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"pp-clusters-bottom?","pp-clusters-bottom?",-518365929),new cljs.core.Keyword(null,"checked","checked",-50955819),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pp-clusters","pp-clusters",478062894).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,draw_graph.home.options))),new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),(17),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return cljs.core.swap_BANG_.call(null,draw_graph.home.local_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"pp-clusters","pp-clusters",478062894),new cljs.core.Keyword(null,"h","h",1109658740)], null),cljs.core.not);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.lbl","a.lbl",2026297244),["\u00A0","\u00A0","\u2190"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"pp-clusters-left?","pp-clusters-left?",-897369103),new cljs.core.Keyword(null,"checked","checked",-50955819),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pp-clusters","pp-clusters",478062894).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,draw_graph.home.options))),new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),(18),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return cljs.core.swap_BANG_.call(null,draw_graph.home.local_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"pp-clusters","pp-clusters",478062894),new cljs.core.Keyword(null,"x","x",2099068185)], null),cljs.core.not);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.lbl","a.lbl",2026297244),["\u00A0","\u00A0","\u2192"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"pp-clusters-right?","pp-clusters-right?",809156819),new cljs.core.Keyword(null,"checked","checked",-50955819),new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pp-clusters","pp-clusters",478062894).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,draw_graph.home.options))),new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),(19),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return cljs.core.swap_BANG_.call(null,draw_graph.home.local_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"pp-clusters","pp-clusters",478062894),new cljs.core.Keyword(null,"w","w",354169001)], null),cljs.core.not);
})], null)], null)], null);
});
draw_graph.home.anneal_bias = (function draw_graph$home$anneal_bias(){
return draw_graph.home.fixed_select.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"pp-anneal-bias","pp-anneal-bias",1268244973)], null),draw_graph.home.local_state,(20),"0","1","2","3","4","5","6","7","8","9","10","11","12");
});
draw_graph.home.pp_cluster_sep = (function draw_graph$home$pp_cluster_sep(){
return draw_graph.home.text_input.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"pp-cluster-sep","pp-cluster-sep",335802146)], null),draw_graph.home.local_state,(21));
});
draw_graph.home.pp_font = (function draw_graph$home$pp_font(){
return draw_graph.home.text_input.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"pp-font","pp-font",1885164896)], null),draw_graph.home.local_state,(22));
});
draw_graph.home.cluster_edges_num = (function draw_graph$home$cluster_edges_num(){
return draw_graph.home.fixed_select.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"num-cluster-edges","num-cluster-edges",1635811939)], null),draw_graph.home.local_state,(23),"1","2","4","5","6","9","12","16");
});
draw_graph.home.layout = (function draw_graph$home$layout(){
return draw_graph.home.fixed_select.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"layout","layout",-2120940921)], null),draw_graph.home.local_state,(24),"dot","neato","fdp","circo","twopi");
});
draw_graph.home.rankdir = (function draw_graph$home$rankdir(){
return draw_graph.home.fixed_select.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"rankdir","rankdir",-2029540135)], null),draw_graph.home.local_state,(25),"LR","TB","RL","BT");
});
draw_graph.home.shape = (function draw_graph$home$shape(){
return draw_graph.home.fixed_select.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"shape","shape",1190694006)], null),draw_graph.home.local_state,(26),"ellipse","rect","circle","egg","diamond","octagon","square","folder","cylinder","plaintext");
});
draw_graph.home.fixedsize = (function draw_graph$home$fixedsize(){
return draw_graph.home.fixed_select.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"fixedsize","fixedsize",1191363170)], null),draw_graph.home.local_state,(27),"true","false","shape");
});
draw_graph.home.splines = (function draw_graph$home$splines(){
return draw_graph.home.fixed_select.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"splines","splines",1787583529)], null),draw_graph.home.local_state,(28),"line","spline","none","polyline","ortho","curved");
});
draw_graph.home.nodesep = (function draw_graph$home$nodesep(){
return draw_graph.home.text_input.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"nodesep","nodesep",-245901571)], null),draw_graph.home.local_state,(29));
});
draw_graph.home.ranksep = (function draw_graph$home$ranksep(){
return draw_graph.home.text_input.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"ranksep","ranksep",-765843218)], null),draw_graph.home.local_state,(30));
});
draw_graph.home.concentrate = (function draw_graph$home$concentrate(){
return draw_graph.home.fixed_select.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"concentrate","concentrate",-1050197650)], null),draw_graph.home.local_state,(31),"false","true");
});
draw_graph.home.overlap = (function draw_graph$home$overlap(){
return draw_graph.home.fixed_select.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"overlap","overlap",-1673335644)], null),draw_graph.home.local_state,(32),"true","false","scale","scalexy","compress","vpsc","orthoxy","ipsep");
});
draw_graph.home.scale = (function draw_graph$home$scale(){
return draw_graph.home.text_input.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"scale","scale",-230427353)], null),draw_graph.home.local_state,(33));
});
draw_graph.home.constraint = (function draw_graph$home$constraint(){
return draw_graph.home.fixed_select.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"constraint","constraint",1725147424)], null),draw_graph.home.local_state,(34),"true","false");
});
draw_graph.home.row = (function draw_graph$home$row(label,ctrl,tooltip){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.lbl","div.lbl",-273351085),label], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"tooltip"], null),ctrl,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"tooltiptext"], null),tooltip], null)], null)], null);
});
draw_graph.home.label_row = (function draw_graph$home$label_row(label){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.lbl.row-sep","a.lbl.row-sep",-1771523159),label], null)], null);
});
draw_graph.home.empty_row = (function draw_graph$home$empty_row(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.lbl.row-label","a.lbl.row-label",-523668367),"\u00A0"], null)], null);
});
draw_graph.home.toggle = (function draw_graph$home$toggle(a,k,v1,v2){
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,a).call(null,k),v1)){
return cljs.core.swap_BANG_.call(null,a,cljs.core.assoc,k,v2);
} else {
return cljs.core.swap_BANG_.call(null,a,cljs.core.assoc,k,v1);
}
});
draw_graph.home.disp_opts_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"local-class","local-class",1003799540),"hidden",new cljs.core.Keyword(null,"wrapper-class","wrapper-class",1300340883),"wrapper controls wrapper-collapsed",new cljs.core.Keyword(null,"lbl","lbl",-940407849),"show"], null));
draw_graph.home.disp_opts_hdr = (function draw_graph$home$disp_opts_hdr(state){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.item6","div.item6",2112051463),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.opts-hdr","div.opts-hdr",-1163202587),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
draw_graph.home.toggle.call(null,state,new cljs.core.Keyword(null,"lbl","lbl",-940407849),"show","hide");

draw_graph.home.toggle.call(null,state,new cljs.core.Keyword(null,"local-class","local-class",1003799540),"hidden","visible");

draw_graph.home.toggle.call(null,state,new cljs.core.Keyword(null,"wrapper-class","wrapper-class",1300340883),"wrapper controls wrapper-collapsed","wrapper controls");

return draw_graph.home.update_ace.call(null);
})], null),"Options",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.lbl.show-hide","a.lbl.show-hide",260798103),new cljs.core.Keyword(null,"lbl","lbl",-940407849).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))], null)], null)], null);
});
});
draw_graph.home.left_disp_opts1 = (function draw_graph$home$left_disp_opts1(state){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.controls1l","div.controls1l",-911306256),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"local-class","local-class",1003799540).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))], null),draw_graph.home.label_row.call(null,"draw-graph"),draw_graph.home.row.call(null,"node labels",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.node_label], null),"The header key to use for the node label"),draw_graph.home.row.call(null,"node tooltips",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.tooltip], null),"The header key to use for tooltips embedded in the final svg"),draw_graph.home.row.call(null,"filter graph",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.filtergraph], null),"Filters the graph - good for zooming in"),draw_graph.home.row.call(null,"elide lower levels",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.elide_levels], null),"Hide <n> lowest levels in the graph"),draw_graph.home.row.call(null,"post process",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.pp_QMARK_], null),"Post Procees the svg: anneal clusters and font replacement"),draw_graph.home.row.call(null,"anneal cluster separation",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.pp_cluster_sep], null),"How close clusters are allowed to get in pixels during annealing")], null);
});
});
draw_graph.home.middle_disp_opts1 = (function draw_graph$home$middle_disp_opts1(state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.controls1m","div.controls1m",1059186765),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"local-class","local-class",1003799540).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))], null),draw_graph.home.empty_row.call(null),draw_graph.home.row.call(null,"cluster on",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.cluster_on], null),"The header key to cluster the graph on"),draw_graph.home.row.call(null,"node URL",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.url], null),"The header key to use as an embedded link in the final svg"),draw_graph.home.row.call(null,"paths",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.paths], null),"Filter the graph by paths through it. see help page."),draw_graph.home.row.call(null,"highlight roots",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.show_roots], null),"Highlights the roots of the graph"),draw_graph.home.row.call(null,"anneal expand clusters",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.pp_clusters], null),"Controls which dimensions of clusters are expanded in post processing"),draw_graph.home.row.call(null,"font",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.pp_font], null),"The name of the replacement font to use in post processing"),draw_graph.home.empty_row.call(null),draw_graph.home.empty_row.call(null)], null);
});
});
draw_graph.home.right_disp_opts1 = (function draw_graph$home$right_disp_opts1(state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.controls1r","div.controls1r",-903319148),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"local-class","local-class",1003799540).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))], null),draw_graph.home.empty_row.call(null),draw_graph.home.row.call(null,"color on",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.color_on], null),"The header key to vary node coloration by"),draw_graph.home.row.call(null,"edges labels",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.edgelabels], null),"Edge meta key to use as an edge label"),draw_graph.home.empty_row.call(null),draw_graph.home.empty_row.call(null),draw_graph.home.row.call(null,"highlight constraints",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.show_constraints], null),"Highlights all (rank) constraining edges, including ordinarily invisible generated cluster edges. For debugging layouts"),draw_graph.home.row.call(null,"anneal bias",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.anneal_bias], null),"Favors left-right cluster expansion by this factor in TB/ BT layouts, ditto for top bottom in LR/ RL layouts"),draw_graph.home.row.call(null,"cluster edges num",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.cluster_edges_num], null),"number of invisible edges to create between nodes in two clusters that have a cluster edge. See Help page for further information.")], null);
});
});
draw_graph.home.left_disp_opts2 = (function draw_graph$home$left_disp_opts2(state){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.controls2l","div.controls2l",1906600192),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"local-class","local-class",1003799540).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))], null),draw_graph.home.label_row.call(null,"graphviz"),draw_graph.home.row.call(null,"layout",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.layout], null),"The Graphviz layout algorithm"),draw_graph.home.row.call(null,"(node) fixedsize",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.fixedsize], null),"Nodes fixed in size or varied according to contents"),draw_graph.home.row.call(null,"nodesep",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.nodesep], null),"Separation between nodes in inches"),draw_graph.home.row.call(null,"overlap",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.overlap], null),"Determines how Graphviz removes overlapping edges")], null);
});
});
draw_graph.home.middle_disp_opts2 = (function draw_graph$home$middle_disp_opts2(state){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.controls2m","div.controls2m",908518123),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"local-class","local-class",1003799540).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))], null),draw_graph.home.empty_row.call(null),draw_graph.home.row.call(null,"rankdir",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.rankdir], null),"The layout direction e.g. TB mean Top Bottom etc"),draw_graph.home.row.call(null,"splines",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.splines], null),"Controls the form of the edges in the graph"),draw_graph.home.row.call(null,"ranksep",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.ranksep], null),"Separation between ranks in inches"),draw_graph.home.row.call(null,"scale",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.scale], null),"Scales the graph up by this factor")], null);
});
});
draw_graph.home.right_disp_opts2 = (function draw_graph$home$right_disp_opts2(state){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.controls2r","div.controls2r",-1439017299),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"local-class","local-class",1003799540).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))], null),draw_graph.home.empty_row.call(null),draw_graph.home.row.call(null,"node shape",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.shape], null),"The shape used for nodes"),draw_graph.home.empty_row.call(null),draw_graph.home.empty_row.call(null),draw_graph.home.row.call(null,"concentrate (edges)",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.concentrate], null),"Merge edges with a common end point"),draw_graph.home.row.call(null,"edge constraints",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.constraint], null),"Sets whether edges influence rank in dot layouts")], null);
});
});
draw_graph.home.go_button = (function draw_graph$home$go_button(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"go-button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),draw_graph.home.get_svg], null),"draw-graph"], null);
});
draw_graph.home.go_button_loading = (function draw_graph$home$go_button_loading(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"go-button"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-circle-o-notch.fa-spin","i.fa.fa-circle-o-notch.fa-spin",1521885375)], null)," processing"], null);
});
draw_graph.home.process_button = (function draw_graph$home$process_button(){
return (function (){
if(cljs.core.truth_(cljs.core.deref.call(null,draw_graph.home.processing))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.go_button_loading], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.go_button], null);
}
});
});
draw_graph.home.save_button = (function draw_graph$home$save_button(){
return (function (){
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,draw_graph.home.svg),draw_graph.home.default_svg_text)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"save-button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,draw_graph.home.svg),draw_graph.home.default_svg_text)){
return draw_graph.file.save_svg.call(null,draw_graph.home.svg,new cljs.core.Keyword(null,"data-filename","data-filename",1476355539).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,draw_graph.home.local_state)),new cljs.core.Keyword(null,"layout","layout",-2120940921).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,draw_graph.home.options)));
} else {
return new cljs.core.Keyword(null,"cluster-on","cluster-on",-499953258).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,draw_graph.home.options));
}
})], null),"Save image"], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"save-button-disabled"], null),"Save image"], null);
}
});
});
draw_graph.home.controls = (function draw_graph$home$controls(state){
return (function (){
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"wrapper-class","wrapper-class",1300340883).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.item3","div.item3",2106942238),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.load_button], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"or enter the data"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.item4","div.item4",-1279097434),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"file-name"], null),new cljs.core.Keyword(null,"data-filename","data-filename",1476355539).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,draw_graph.home.local_state))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.item5","div.item5",-884770574),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"editor"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.ace_editor,draw_graph.home.local_state], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.disp_opts_hdr,state], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.left_disp_opts1,state], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.middle_disp_opts1,state], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.right_disp_opts1,state], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.left_disp_opts2,state], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.middle_disp_opts2,state], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.right_disp_opts2,state], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.item9","div.item9",1400396919),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.process_button], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.item10","div.item10",-1541683635),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.save_button], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.item11","div.item11",1391160843),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),cljs.core.deref.call(null,draw_graph.home.svg)], null)], null)], null)], null);
});
});
draw_graph.home.local_remote_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lbl","lbl",-940407849),"  local",new cljs.core.Keyword(null,"class","class",-2030961996),"local"], null));
draw_graph.home.local_remote = (function draw_graph$home$local_remote(state){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.local-remote","a.local-remote",-1881278711),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
draw_graph.home.toggle.call(null,state,new cljs.core.Keyword(null,"lbl","lbl",-940407849),"  local","  remote");

draw_graph.home.toggle.call(null,state,new cljs.core.Keyword(null,"class","class",-2030961996),"local","remote");

return draw_graph.home.toggle.call(null,draw_graph.home.local_state,new cljs.core.Keyword(null,"local-dot","local-dot",-2051990829),true,false);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))], null),new cljs.core.Keyword(null,"lbl","lbl",-940407849).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state))], null)], null);
});
});
draw_graph.home.home_page = (function draw_graph$home$home_page(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.page","div.page",1917984906),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.wrapper-banner","div.wrapper-banner",355794091),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.site-banner.banner1","div.site-banner.banner1",-234066853),"draw-graph",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.local_remote,draw_graph.home.local_remote_state], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.banner2.controls","div.banner2.controls",1952181281),"Examples  ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.example_dropdown], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.main","div.main",-117780813),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.controls,draw_graph.home.disp_opts_state], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.warn","div.warn",-1554453780),cljs.core.deref.call(null,draw_graph.home.warn)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.error","div.error",314336058),cljs.core.deref.call(null,draw_graph.home.error)], null)], null);
});

//# sourceMappingURL=home.js.map
