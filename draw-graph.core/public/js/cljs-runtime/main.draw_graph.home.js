goog.provide('main.draw_graph.home');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.ratom');
goog.require('cljs.core.async');
goog.require('accountant.core');
goog.require('kvlt.core');
goog.require('promesa.core');
goog.require('promesa.async_cljs');
goog.require('clojure.string');
goog.require('main.draw_graph.utils');
goog.require('main.draw_graph.examples');
goog.require('lib_draw_graph.processor');
goog.require('lib_draw_graph.parser');
goog.require('lib_draw_graph.clustered');
goog.require('main.draw_graph.file');
goog.require('clojure.data.xml');
goog.require('lib_draw_graph.svg');
goog.require('main.draw_graph.ip');
main.draw_graph.home.log = console.log;
main.draw_graph.home.default_svg_text = "<div/>";
main.draw_graph.home.local_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"options","options",99638489),main.draw_graph.examples.default_options,new cljs.core.Keyword(null,"processing","processing",-1576405467),false,new cljs.core.Keyword(null,"local-dot","local-dot",-2051990829),true,new cljs.core.Keyword(null,"error","error",-978969032),"",new cljs.core.Keyword(null,"warn","warn",-436710552),"",new cljs.core.Keyword(null,"svg","svg",856789142),main.draw_graph.home.default_svg_text,new cljs.core.Keyword(null,"data","data",-232669377),"",new cljs.core.Keyword(null,"region","region",270415120),null], null));
main.draw_graph.home.options = reagent.core.cursor(main.draw_graph.home.local_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489)], null));
main.draw_graph.home.svg = reagent.core.cursor(main.draw_graph.home.local_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142)], null));
main.draw_graph.home.processing = reagent.core.cursor(main.draw_graph.home.local_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"processing","processing",-1576405467)], null));
main.draw_graph.home.error = reagent.core.cursor(main.draw_graph.home.local_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null));
main.draw_graph.home.warn = reagent.core.cursor(main.draw_graph.home.local_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null));
main.draw_graph.home.local_dot = reagent.core.cursor(main.draw_graph.home.local_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"local-dot","local-dot",-2051990829)], null));
main.draw_graph.home.region = reagent.core.cursor(main.draw_graph.home.local_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"region","region",270415120)], null));
main.draw_graph.home.pan_zoom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
main.draw_graph.file.file_reader_listen((function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(main.draw_graph.home.local_state,cljs.core.merge,e);

return (main.draw_graph.home.update_ace.cljs$core$IFn$_invoke$arity$0 ? main.draw_graph.home.update_ace.cljs$core$IFn$_invoke$arity$0() : main.draw_graph.home.update_ace.call(null));
}));
main.draw_graph.home._STAR_produce_dot_locally_STAR_ = true;
main.draw_graph.home.find_region = (function main$draw_graph$home$find_region(){
if((cljs.core.deref(main.draw_graph.home.region) == null)){
return main.draw_graph.ip.region((function (x){
return cljs.core.reset_BANG_(main.draw_graph.home.region,x);
}),(function (err){
return console.log(err);
}));
} else {
return null;
}
});
main.draw_graph.home.url_Europe = "https://0j6kjsk388.execute-api.eu-west-2.amazonaws.com/beta";
main.draw_graph.home.url_US = "https://u4jlt3tmhe.execute-api.us-east-1.amazonaws.com/beta";
main.draw_graph.home.lambda_url = (function main$draw_graph$home$lambda_url(){
var G__52413 = cljs.core.deref(main.draw_graph.home.region);
switch (G__52413) {
case "Europe":
return main.draw_graph.home.url_Europe;

break;
default:
return main.draw_graph.home.url_US;

}
});
/**
 * removes items from map where Value is an empty string
 */
main.draw_graph.home.remove_empty_strings = (function main$draw_graph$home$remove_empty_strings(m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["",null], null), null),cljs.core.last)),m));
});
main.draw_graph.home.__GT_csv1 = (function main$draw_graph$home$__GT_csv1(){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-options","display-options",1066052168),main.draw_graph.home.remove_empty_strings(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(main.draw_graph.home.local_state))),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(main.draw_graph.home.local_state)),new cljs.core.Keyword(null,"format-in","format-in",1820661092),"csv",new cljs.core.Keyword(null,"format-out","format-out",1283960670),"svg"], null);
});
main.draw_graph.home.__GT_dot = (function main$draw_graph$home$__GT_dot(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display-options","display-options",1066052168),main.draw_graph.home.remove_empty_strings(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(main.draw_graph.home.local_state))),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(main.draw_graph.home.local_state))], null);
});
main.draw_graph.home.dot__GT_svg = (function main$draw_graph$home$dot__GT_svg(data){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"format-in","format-in",1820661092),"dot",new cljs.core.Keyword(null,"format-out","format-out",1283960670),"svg"], null);
});
main.draw_graph.home.post = (function main$draw_graph$home$post(url,json_data){
return promesa.core.bind(promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(kvlt.core.request_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"body","body",-2049205669),json_data,new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"accept","accept",1874130431),new cljs.core.Keyword(null,"json","json",1279968570)], null)),(function (e){
var G__52415 = new cljs.core.Keyword(null,"type","type",1174270348);
var fexpr__52414 = cljs.core.ex_data(e);
return (fexpr__52414.cljs$core$IFn$_invoke$arity$1 ? fexpr__52414.cljs$core$IFn$_invoke$arity$1(G__52415) : fexpr__52414.call(null,G__52415));
})),(function (p__52416){
var map__52421 = p__52416;
var map__52421__$1 = (((((!((map__52421 == null))))?(((((map__52421.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52421.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52421):map__52421);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52421__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52421__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
return promesa.core.promise(body);
}));
});
main.draw_graph.home.__GT_svg = (function main$draw_graph$home$__GT_svg(json_data){
var fexpr__52424 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(main.draw_graph.home.post,main.draw_graph.home.lambda_url());
return (fexpr__52424.cljs$core$IFn$_invoke$arity$1 ? fexpr__52424.cljs$core$IFn$_invoke$arity$1(json_data) : fexpr__52424.call(null,json_data));
});
main.draw_graph.home.reset_pan_zoom = (function main$draw_graph$home$reset_pan_zoom(){
cljs.core.reset_BANG_(main.draw_graph.home.pan_zoom,null);

return cljs.core.reset_BANG_(main.draw_graph.home.pan_zoom,(new svgPanZoom("#item11")));
});
main.draw_graph.home.put_svg = (function main$draw_graph$home$put_svg(data){
var data_STAR__52518 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(data,"null"))?main.draw_graph.home.default_svg_text:data);

cljs.core.reset_BANG_(main.draw_graph.home.processing,false);

return cljs.core.reset_BANG_(main.draw_graph.home.svg,data);
});
main.draw_graph.home.put_error = (function main$draw_graph$home$put_error(message){
cljs.core.reset_BANG_(main.draw_graph.home.processing,false);

cljs.core.reset_BANG_(main.draw_graph.home.svg,"");

return cljs.core.reset_BANG_(main.draw_graph.home.error,message);
});
main.draw_graph.home.put_warn = (function main$draw_graph$home$put_warn(message){
cljs.core.reset_BANG_(main.draw_graph.home.processing,false);

return cljs.core.reset_BANG_(main.draw_graph.home.warn,message);
});
main.draw_graph.home.put_result = (function main$draw_graph$home$put_result(result){
if(cljs.core.truth_(new cljs.core.Keyword(null,"svg","svg",856789142).cljs$core$IFn$_invoke$arity$1(result))){
cljs.core.reset_BANG_(main.draw_graph.home.svg,new cljs.core.Keyword(null,"svg","svg",856789142).cljs$core$IFn$_invoke$arity$1(result));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(result))){
cljs.core.reset_BANG_(main.draw_graph.home.error,new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(result));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"warn","warn",-436710552).cljs$core$IFn$_invoke$arity$1(result))){
cljs.core.reset_BANG_(main.draw_graph.home.warn,new cljs.core.Keyword(null,"warn","warn",-436710552).cljs$core$IFn$_invoke$arity$1(result));
} else {
}

return cljs.core.reset_BANG_(main.draw_graph.home.processing,false);
});
main.draw_graph.home.process_remotely = (function main$draw_graph$home$process_remotely(){
return promesa.core.error.cljs$core$IFn$_invoke$arity$2((function (error){
return main.draw_graph.home.put_error(error.message);
}),promesa.core.map(main.draw_graph.home.put_result,promesa.core.map(main.draw_graph.utils.json__GT_clj,main.draw_graph.home.__GT_svg(main.draw_graph.utils.clj__GT_json(main.draw_graph.home.__GT_csv1())))));
});
main.draw_graph.home.prom_viz = (function main$draw_graph$home$prom_viz(dot){
return promesa.core.bind(promesa.core.catch$.cljs$core$IFn$_invoke$arity$2((1),(function (e){
var G__52433 = new cljs.core.Keyword(null,"type","type",1174270348);
var fexpr__52432 = cljs.core.ex_data(e);
return (fexpr__52432.cljs$core$IFn$_invoke$arity$1 ? fexpr__52432.cljs$core$IFn$_invoke$arity$1(G__52433) : fexpr__52432.call(null,G__52433));
})),(function (result){
return promesa.core.promise(result);
}));
});
main.draw_graph.home.local_dot__GT_svg = (function main$draw_graph$home$local_dot__GT_svg(g,opts,dot){
var dot_SINGLEQUOTE_ = clojure.string.replace(dot,/\\\\n/,"\n");
return promesa.core.error.cljs$core$IFn$_invoke$arity$2(((function (dot_SINGLEQUOTE_){
return (function (error){
return main.draw_graph.home.put_error(error.message);
});})(dot_SINGLEQUOTE_))
,promesa.core.map(main.draw_graph.home.put_svg,promesa.core.map(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(lib_draw_graph.processor.postprocess_svg,g,opts),main.draw_graph.home.prom_viz(dot_SINGLEQUOTE_))));
});
main.draw_graph.home.lambda_dot__GT_svg = (function main$draw_graph$home$lambda_dot__GT_svg(g,opts,dot){
return promesa.core.error.cljs$core$IFn$_invoke$arity$2((function (error){
return main.draw_graph.home.put_error(error.message);
}),promesa.core.map(main.draw_graph.home.put_svg,promesa.core.map(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(lib_draw_graph.processor.postprocess_svg,g,opts),promesa.core.map(new cljs.core.Keyword(null,"svg","svg",856789142),promesa.core.map(main.draw_graph.utils.json__GT_clj,main.draw_graph.home.__GT_svg(main.draw_graph.utils.clj__GT_json(main.draw_graph.home.dot__GT_svg(dot))))))));
});
main.draw_graph.home.process_locally = (function main$draw_graph$home$process_locally(){
cljs.core.reset_BANG_(main.draw_graph.home.processing,true);

cljs.core.reset_BANG_(main.draw_graph.home.error,"");

cljs.core.reset_BANG_(main.draw_graph.home.warn,"");

var in$ = main.draw_graph.home.__GT_csv1();
var opts = new cljs.core.Keyword(null,"display-options","display-options",1066052168).cljs$core$IFn$_invoke$arity$1(in$);
var g = (function (){try{return lib_draw_graph.processor.csv__GT_g(in$);
}catch (e52437){if((e52437 instanceof Error)){
var e = e52437;
cljs.core.reset_BANG_(main.draw_graph.home.svg,"");

return main.draw_graph.home.put_error(cljs.core.str.cljs$core$IFn$_invoke$arity$1(e));
} else {
throw e52437;

}
}})();
var g_SINGLEQUOTE_ = (function (){try{return lib_draw_graph.processor.preprocess_graph(g,opts);
}catch (e52438){if((e52438 instanceof Error)){
var e = e52438;
cljs.core.reset_BANG_(main.draw_graph.home.svg,"");

return main.draw_graph.home.put_error(cljs.core.str.cljs$core$IFn$_invoke$arity$1(e));
} else {
throw e52438;

}
}})();
var dot = lib_draw_graph.processor.g__GT_dot(in$,g_SINGLEQUOTE_);
if(cljs.core.truth_(cljs.core.deref(main.draw_graph.home.local_dot))){
return main.draw_graph.home.local_dot__GT_svg(g_SINGLEQUOTE_,opts,dot);
} else {
return main.draw_graph.home.lambda_dot__GT_svg(g_SINGLEQUOTE_,opts,dot);
}
});
main.draw_graph.home.get_svg = (function main$draw_graph$home$get_svg(){
if(main.draw_graph.home._STAR_produce_dot_locally_STAR_){
return main.draw_graph.home.process_locally();
} else {
return main.draw_graph.home.process_remotely();
}
});
main.draw_graph.home.__GT_js = (function main$draw_graph$home$__GT_js(var_name){
return clojure.string.replace(clojure.string.replace(var_name,/\//,"."),/-/,"_");
});
main.draw_graph.home.invoke = (function main$draw_graph$home$invoke(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52519 = arguments.length;
var i__4731__auto___52520 = (0);
while(true){
if((i__4731__auto___52520 < len__4730__auto___52519)){
args__4736__auto__.push((arguments[i__4731__auto___52520]));

var G__52521 = (i__4731__auto___52520 + (1));
i__4731__auto___52520 = G__52521;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return main.draw_graph.home.invoke.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

main.draw_graph.home.invoke.cljs$core$IFn$_invoke$arity$variadic = (function (function_name,args){
var fun = eval(main.draw_graph.home.__GT_js(function_name));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(fun,args);
});

main.draw_graph.home.invoke.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
main.draw_graph.home.invoke.cljs$lang$applyTo = (function (seq52439){
var G__52440 = cljs.core.first(seq52439);
var seq52439__$1 = cljs.core.next(seq52439);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52440,seq52439__$1);
});

main.draw_graph.home.set_value = (function main$draw_graph$home$set_value(id,val){
if((!((val == null)))){
return document.getElementById(id).value = val;
} else {
return null;
}
});
main.draw_graph.home.fixed_select = (function main$draw_graph$home$fixed_select(var_args){
var args__4736__auto__ = [];
var len__4730__auto___52522 = arguments.length;
var i__4731__auto___52523 = (0);
while(true){
if((i__4731__auto___52523 < len__4730__auto___52522)){
args__4736__auto__.push((arguments[i__4731__auto___52523]));

var G__52524 = (i__4731__auto___52523 + (1));
i__4731__auto___52523 = G__52524;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return main.draw_graph.home.fixed_select.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

main.draw_graph.home.fixed_select.cljs$core$IFn$_invoke$arity$variadic = (function (path,a,tabIndex,options){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.last(path),new cljs.core.Keyword(null,"values","values",372645556),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(a),path),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(main.draw_graph.home.local_state),path),new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),tabIndex,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__52451_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(main.draw_graph.home.local_state,cljs.core.update_in,path,(function (e){
return p1__52451_SHARP_.target.value;
}));
})], null),(function (){var iter__4523__auto__ = (function main$draw_graph$home$iter__52463(s__52464){
return (new cljs.core.LazySeq(null,(function (){
var s__52464__$1 = s__52464;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__52464__$1);
if(temp__5720__auto__){
var s__52464__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__52464__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__52464__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__52466 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__52465 = (0);
while(true){
if((i__52465 < size__4522__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__52465);
cljs.core.chunk_append(b__52466,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),x], null),x], null));

var G__52525 = (i__52465 + (1));
i__52465 = G__52525;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52466),main$draw_graph$home$iter__52463(cljs.core.chunk_rest(s__52464__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52466),null);
}
} else {
var x = cljs.core.first(s__52464__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),x], null),x], null),main$draw_graph$home$iter__52463(cljs.core.rest(s__52464__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(options);
})()], null);
});

main.draw_graph.home.fixed_select.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
main.draw_graph.home.fixed_select.cljs$lang$applyTo = (function (seq52452){
var G__52453 = cljs.core.first(seq52452);
var seq52452__$1 = cljs.core.next(seq52452);
var G__52454 = cljs.core.first(seq52452__$1);
var seq52452__$2 = cljs.core.next(seq52452__$1);
var G__52455 = cljs.core.first(seq52452__$2);
var seq52452__$3 = cljs.core.next(seq52452__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52453,G__52454,G__52455,seq52452__$3);
});

main.draw_graph.home.text_input = (function main$draw_graph$home$text_input(path,a,tabIndex){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.last(path),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(a),path),new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),tabIndex,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__52472_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(main.draw_graph.home.local_state,cljs.core.update_in,path,(function (e){
return p1__52472_SHARP_.target.value;
}));
})], null)], null);
});
main.draw_graph.home.wide_text_input = (function main$draw_graph$home$wide_text_input(path,a,tabIndex){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.wide","input.wide",1879372921),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.last(path),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(a),path),new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),tabIndex,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__52473_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(main.draw_graph.home.local_state,cljs.core.update_in,path,(function (e){
return p1__52473_SHARP_.target.value;
}));
})], null)], null);
});
main.draw_graph.home.myace = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
main.draw_graph.home.ace_editor = (function main$draw_graph$home$ace_editor(value){
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"ace editor",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
console.log("mounted");

var node = reagent.core.dom_node(this$);
var ace_instance = ace.edit("editor");
cljs.core.reset_BANG_(main.draw_graph.home.myace,ace_instance);

ace_instance.setTheme("ace/theme/textmate");

ace_instance.session.setMode("ace/mode/tcl");

return ace_instance.on("change",((function (node,ace_instance){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(value,cljs.core.assoc,new cljs.core.Keyword(null,"data","data",-232669377),ace_instance.getValue());
});})(node,ace_instance))
);
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"editor"], null)], null);
})], null));
});
main.draw_graph.home.update_ace = (function main$draw_graph$home$update_ace(){
var ace_instance = cljs.core.deref(main.draw_graph.home.myace);
var cursor = ace_instance.getCursorPositionScreen();
return ace_instance.setValue(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(main.draw_graph.home.local_state)),cursor);
});
main.draw_graph.home.load_example_data = (function main$draw_graph$home$load_example_data(ex_fn){
var example = main.draw_graph.home.invoke(ex_fn);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(main.draw_graph.home.local_state,cljs.core.assoc,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(example));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(main.draw_graph.home.local_state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(example),new cljs.core.Keyword(null,"data-filename","data-filename",1476355539),""], null));
});
main.draw_graph.home.example_dropdown = (function main$draw_graph$home$example_dropdown(){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),(1),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__52482_SHARP_){
main.draw_graph.home.load_example_data(p1__52482_SHARP_.target.value);

return main.draw_graph.home.update_ace();
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null),"-"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"main.draw-graph.examples/example1"], null),"Friendship graph"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"main.draw-graph.examples/example2"], null),"Two facing trees"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"main.draw-graph.examples/example3"], null),"Two trees"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"main.draw-graph.examples/example4"], null),"CERN email connections"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"main.draw-graph.examples/example5"], null),"Circular tree"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"main.draw-graph.examples/example6"], null),"cluster layout"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"main.draw-graph.examples/example7"], null),"complex cluster layout"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"main.draw-graph.examples/example8"], null),"Architecture diagram"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"main.draw-graph.examples/example9"], null),"Complex architecture diagram"], null)], null);
});
main.draw_graph.home.click_upload_csv_hidden = (function main$draw_graph$home$click_upload_csv_hidden(e){
return document.getElementById("upload-csv-hidden").click();
});
main.draw_graph.home.load_button = (function main$draw_graph$home$load_button(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"upload-csv",new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),(2),new cljs.core.Keyword(null,"on-click","on-click",1632826543),main.draw_graph.home.click_upload_csv_hidden,new cljs.core.Keyword(null,"title","title",636505583),"Upload a csv in 'csv1' format. see help"], null),"Load csv"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"upload-csv-hidden",new cljs.core.Keyword(null,"type","type",1174270348),"file",new cljs.core.Keyword(null,"accept","accept",1874130431),".csv",new cljs.core.Keyword(null,"on-change","on-change",-732046149),main.draw_graph.file.file_reader_put], null)], null)], null);
});
main.draw_graph.home.data_input = (function main$draw_graph$home$data_input(value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"wrap","wrap",851669987),new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),new cljs.core.Keyword(null,"autoComplete","autoComplete",-219243415),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"spellCheck","spellCheck",331078550),new cljs.core.Keyword(null,"autoCorrect","autoCorrect",448626584),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"autoCapitalize","autoCapitalize",438011742)],["soft",(3),"on",new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(value)),(20),"tweak-box","false","off",(function (p1__52483_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(value,cljs.core.assoc,new cljs.core.Keyword(null,"data","data",-232669377),p1__52483_SHARP_.target.value);
}),"off"])], null)], null);
});
main.draw_graph.home.first_line = (function main$draw_graph$home$first_line(s){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2((s.split("\n")[(0)]),(2)).split(":"));
});
main.draw_graph.home.headers = reagent.ratom.make_reaction((function (){
return main.draw_graph.home.first_line(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(main.draw_graph.home.local_state)));
}));
main.draw_graph.home.node_label = (function main$draw_graph$home$node_label(){
return main.draw_graph.home.text_input(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"label","label",1718410804)], null),main.draw_graph.home.local_state,(4));
});
main.draw_graph.home.cluster_on = (function main$draw_graph$home$cluster_on(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select.form-control","select.form-control",696610397),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"cluster-on","cluster-on",-499953258),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"cluster-on","cluster-on",-499953258).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(main.draw_graph.home.options)),new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),(5),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__52485_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(main.draw_graph.home.local_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"cluster-on","cluster-on",-499953258)], null),(function (e){
return p1__52485_SHARP_.target.value;
}));
})], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",cljs.core.first(cljs.core.deref(main.draw_graph.home.headers))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"none",new cljs.core.Keyword(null,"value","value",305978217),""], null),"-"], null):cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"none",new cljs.core.Keyword(null,"value","value",305978217),""], null),"-"], null),(function (){var iter__4523__auto__ = (function main$draw_graph$home$cluster_on_$_iter__52486(s__52487){
return (new cljs.core.LazySeq(null,(function (){
var s__52487__$1 = s__52487;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__52487__$1);
if(temp__5720__auto__){
var s__52487__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__52487__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__52487__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__52489 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__52488 = (0);
while(true){
if((i__52488 < size__4522__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__52488);
cljs.core.chunk_append(b__52489,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),x], null),x], null));

var G__52533 = (i__52488 + (1));
i__52488 = G__52533;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52489),main$draw_graph$home$cluster_on_$_iter__52486(cljs.core.chunk_rest(s__52487__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52489),null);
}
} else {
var x = cljs.core.first(s__52487__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),x], null),x], null),main$draw_graph$home$cluster_on_$_iter__52486(cljs.core.rest(s__52487__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.deref(main.draw_graph.home.headers));
})()))], null);
});
main.draw_graph.home.color_on = (function main$draw_graph$home$color_on(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select.form-control","select.form-control",696610397),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"color-on","color-on",-1658319802),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"color-on","color-on",-1658319802).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(main.draw_graph.home.options)),new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),(6),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__52490_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(main.draw_graph.home.local_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"color-on","color-on",-1658319802)], null),(function (e){
return p1__52490_SHARP_.target.value;
}));
})], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",cljs.core.first(cljs.core.deref(main.draw_graph.home.headers))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"none",new cljs.core.Keyword(null,"value","value",305978217),""], null),"-"], null):cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"none",new cljs.core.Keyword(null,"value","value",305978217),""], null),"-"], null),(function (){var iter__4523__auto__ = (function main$draw_graph$home$color_on_$_iter__52491(s__52492){
return (new cljs.core.LazySeq(null,(function (){
var s__52492__$1 = s__52492;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__52492__$1);
if(temp__5720__auto__){
var s__52492__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__52492__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__52492__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__52494 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__52493 = (0);
while(true){
if((i__52493 < size__4522__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__52493);
cljs.core.chunk_append(b__52494,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),x], null),x], null));

var G__52542 = (i__52493 + (1));
i__52493 = G__52542;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52494),main$draw_graph$home$color_on_$_iter__52491(cljs.core.chunk_rest(s__52492__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52494),null);
}
} else {
var x = cljs.core.first(s__52492__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),x], null),x], null),main$draw_graph$home$color_on_$_iter__52491(cljs.core.rest(s__52492__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.deref(main.draw_graph.home.headers));
})()))], null);
});
main.draw_graph.home.tooltip = (function main$draw_graph$home$tooltip(){
return main.draw_graph.home.text_input(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058)], null),main.draw_graph.home.local_state,(7));
});
main.draw_graph.home.url = (function main$draw_graph$home$url(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select.form-control","select.form-control",696610397),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(main.draw_graph.home.options)),new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),(8),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__52495_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(main.draw_graph.home.local_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046)], null),(function (e){
return p1__52495_SHARP_.target.value;
}));
})], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",cljs.core.first(cljs.core.deref(main.draw_graph.home.headers))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"none",new cljs.core.Keyword(null,"value","value",305978217),""], null),"-"], null):cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"none",new cljs.core.Keyword(null,"value","value",305978217),""], null),"-"], null),(function (){var iter__4523__auto__ = (function main$draw_graph$home$url_$_iter__52496(s__52497){
return (new cljs.core.LazySeq(null,(function (){
var s__52497__$1 = s__52497;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__52497__$1);
if(temp__5720__auto__){
var s__52497__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__52497__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__52497__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__52499 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__52498 = (0);
while(true){
if((i__52498 < size__4522__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__52498);
cljs.core.chunk_append(b__52499,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),x], null),x], null));

var G__52545 = (i__52498 + (1));
i__52498 = G__52545;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52499),main$draw_graph$home$url_$_iter__52496(cljs.core.chunk_rest(s__52497__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52499),null);
}
} else {
var x = cljs.core.first(s__52497__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),x], null),x], null),main$draw_graph$home$url_$_iter__52496(cljs.core.rest(s__52497__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.deref(main.draw_graph.home.headers));
})()))], null);
});
main.draw_graph.home.edgelabels = (function main$draw_graph$home$edgelabels(){
return main.draw_graph.home.text_input(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"edge-label","edge-label",1582257813)], null),main.draw_graph.home.local_state,(9));
});
main.draw_graph.home.filtergraph = (function main$draw_graph$home$filtergraph(){
return main.draw_graph.home.text_input(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"filter-graph","filter-graph",-1851101907)], null),main.draw_graph.home.local_state,(10));
});
main.draw_graph.home.paths = (function main$draw_graph$home$paths(){
return main.draw_graph.home.wide_text_input(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"paths","paths",-1807389588)], null),main.draw_graph.home.local_state,(11));
});
main.draw_graph.home.elide_levels = (function main$draw_graph$home$elide_levels(){
return main.draw_graph.home.fixed_select.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"elide","elide",-1239101386)], null),main.draw_graph.home.local_state,(12),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["0","1","2","3","4"], 0));
});
main.draw_graph.home.show_roots = (function main$draw_graph$home$show_roots(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"show-roots?","show-roots?",-1350839449),new cljs.core.Keyword(null,"checked","checked",-50955819),new cljs.core.Keyword(null,"show-roots?","show-roots?",-1350839449).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(main.draw_graph.home.options)),new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),(13),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(main.draw_graph.home.local_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"show-roots?","show-roots?",-1350839449)], null),cljs.core.not);
})], null)], null);
});
main.draw_graph.home.show_constraints = (function main$draw_graph$home$show_constraints(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"show-constraints?","show-constraints?",1802138993),new cljs.core.Keyword(null,"checked","checked",-50955819),new cljs.core.Keyword(null,"show-constraints?","show-constraints?",1802138993).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(main.draw_graph.home.options)),new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),(14),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(main.draw_graph.home.local_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"show-constraints?","show-constraints?",1802138993)], null),cljs.core.not);
})], null)], null);
});
main.draw_graph.home.pp_QMARK_ = (function main$draw_graph$home$pp_QMARK_(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"pp?","pp?",-28451498),new cljs.core.Keyword(null,"checked","checked",-50955819),new cljs.core.Keyword(null,"post-process?","post-process?",-621728918).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(main.draw_graph.home.options)),new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),(15),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(main.draw_graph.home.local_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"post-process?","post-process?",-621728918)], null),cljs.core.not);
})], null)], null);
});
main.draw_graph.home.pp_clusters = (function main$draw_graph$home$pp_clusters(){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.lbl","a.lbl",2026297244),"\u2191"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"pp-clusters-top?","pp-clusters-top?",-1690443633),new cljs.core.Keyword(null,"checked","checked",-50955819),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pp-clusters","pp-clusters",478062894).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(main.draw_graph.home.options))),new cljs.core.Keyword(null,"tab-index","tab-index",895755393),(16),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(main.draw_graph.home.local_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"pp-clusters","pp-clusters",478062894),new cljs.core.Keyword(null,"y","y",-1757859776)], null),cljs.core.not);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.lbl","a.lbl",2026297244),["\u00A0","\u00A0","\u00A0","\u00A0","\u2193"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"pp-clusters-bottom?","pp-clusters-bottom?",-518365929),new cljs.core.Keyword(null,"checked","checked",-50955819),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pp-clusters","pp-clusters",478062894).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(main.draw_graph.home.options))),new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),(17),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(main.draw_graph.home.local_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"pp-clusters","pp-clusters",478062894),new cljs.core.Keyword(null,"h","h",1109658740)], null),cljs.core.not);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.lbl","a.lbl",2026297244),["\u00A0","\u00A0","\u2190"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"pp-clusters-left?","pp-clusters-left?",-897369103),new cljs.core.Keyword(null,"checked","checked",-50955819),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pp-clusters","pp-clusters",478062894).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(main.draw_graph.home.options))),new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),(18),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(main.draw_graph.home.local_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"pp-clusters","pp-clusters",478062894),new cljs.core.Keyword(null,"x","x",2099068185)], null),cljs.core.not);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.lbl","a.lbl",2026297244),["\u00A0","\u00A0","\u2192"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"pp-clusters-right?","pp-clusters-right?",809156819),new cljs.core.Keyword(null,"checked","checked",-50955819),new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pp-clusters","pp-clusters",478062894).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(main.draw_graph.home.options))),new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),(19),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(main.draw_graph.home.local_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"pp-clusters","pp-clusters",478062894),new cljs.core.Keyword(null,"w","w",354169001)], null),cljs.core.not);
})], null)], null)], null);
});
main.draw_graph.home.anneal_bias = (function main$draw_graph$home$anneal_bias(){
return main.draw_graph.home.fixed_select.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"pp-anneal-bias","pp-anneal-bias",1268244973)], null),main.draw_graph.home.local_state,(20),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["0","1","2","3","4","5","6","7","8","9","10","11","12"], 0));
});
main.draw_graph.home.pp_cluster_sep = (function main$draw_graph$home$pp_cluster_sep(){
return main.draw_graph.home.text_input(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"pp-cluster-sep","pp-cluster-sep",335802146)], null),main.draw_graph.home.local_state,(21));
});
main.draw_graph.home.pp_font = (function main$draw_graph$home$pp_font(){
return main.draw_graph.home.text_input(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"pp-font","pp-font",1885164896)], null),main.draw_graph.home.local_state,(22));
});
main.draw_graph.home.cluster_edges_num = (function main$draw_graph$home$cluster_edges_num(){
return main.draw_graph.home.fixed_select.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"num-cluster-edges","num-cluster-edges",1635811939)], null),main.draw_graph.home.local_state,(23),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["1","2","4","5","6","9","12","16"], 0));
});
main.draw_graph.home.layout = (function main$draw_graph$home$layout(){
return main.draw_graph.home.fixed_select.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"layout","layout",-2120940921)], null),main.draw_graph.home.local_state,(24),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dot","neato","fdp","circo","twopi"], 0));
});
main.draw_graph.home.rankdir = (function main$draw_graph$home$rankdir(){
return main.draw_graph.home.fixed_select.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"rankdir","rankdir",-2029540135)], null),main.draw_graph.home.local_state,(25),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["LR","TB","RL","BT"], 0));
});
main.draw_graph.home.shape = (function main$draw_graph$home$shape(){
return main.draw_graph.home.fixed_select.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"shape","shape",1190694006)], null),main.draw_graph.home.local_state,(26),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["ellipse","rect","circle","egg","diamond","octagon","square","folder","cylinder","plaintext"], 0));
});
main.draw_graph.home.fixedsize = (function main$draw_graph$home$fixedsize(){
return main.draw_graph.home.fixed_select.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"fixedsize","fixedsize",1191363170)], null),main.draw_graph.home.local_state,(27),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["true","false","shape"], 0));
});
main.draw_graph.home.splines = (function main$draw_graph$home$splines(){
return main.draw_graph.home.fixed_select.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"splines","splines",1787583529)], null),main.draw_graph.home.local_state,(28),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["line","spline","none","polyline","ortho","curved"], 0));
});
main.draw_graph.home.nodesep = (function main$draw_graph$home$nodesep(){
return main.draw_graph.home.text_input(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"nodesep","nodesep",-245901571)], null),main.draw_graph.home.local_state,(29));
});
main.draw_graph.home.ranksep = (function main$draw_graph$home$ranksep(){
return main.draw_graph.home.text_input(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"ranksep","ranksep",-765843218)], null),main.draw_graph.home.local_state,(30));
});
main.draw_graph.home.concentrate = (function main$draw_graph$home$concentrate(){
return main.draw_graph.home.fixed_select.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"concentrate","concentrate",-1050197650)], null),main.draw_graph.home.local_state,(31),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["false","true"], 0));
});
main.draw_graph.home.overlap = (function main$draw_graph$home$overlap(){
return main.draw_graph.home.fixed_select.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"overlap","overlap",-1673335644)], null),main.draw_graph.home.local_state,(32),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["true","false","scale","scalexy","compress","vpsc","orthoxy","ipsep"], 0));
});
main.draw_graph.home.scale = (function main$draw_graph$home$scale(){
return main.draw_graph.home.text_input(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"scale","scale",-230427353)], null),main.draw_graph.home.local_state,(33));
});
main.draw_graph.home.constraint = (function main$draw_graph$home$constraint(){
return main.draw_graph.home.fixed_select.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"constraint","constraint",1725147424)], null),main.draw_graph.home.local_state,(34),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["true","false"], 0));
});
main.draw_graph.home.row = (function main$draw_graph$home$row(label,ctrl,tooltip){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.lbl","div.lbl",-273351085),label], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"tooltip"], null),ctrl,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"tooltiptext"], null),tooltip], null)], null)], null);
});
main.draw_graph.home.label_row = (function main$draw_graph$home$label_row(label){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.lbl.row-sep","a.lbl.row-sep",-1771523159),label], null)], null);
});
main.draw_graph.home.empty_row = (function main$draw_graph$home$empty_row(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.lbl.row-label","a.lbl.row-label",-523668367),"\u00A0"], null)], null);
});
main.draw_graph.home.toggle = (function main$draw_graph$home$toggle(a,k,v1,v2){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__52516 = cljs.core.deref(a);
return (fexpr__52516.cljs$core$IFn$_invoke$arity$1 ? fexpr__52516.cljs$core$IFn$_invoke$arity$1(k) : fexpr__52516.call(null,k));
})(),v1)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(a,cljs.core.assoc,k,v2);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(a,cljs.core.assoc,k,v1);
}
});
main.draw_graph.home.disp_opts_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"local-class","local-class",1003799540),"hidden",new cljs.core.Keyword(null,"wrapper-class","wrapper-class",1300340883),"wrapper controls wrapper-collapsed",new cljs.core.Keyword(null,"lbl","lbl",-940407849),"show"], null));
main.draw_graph.home.disp_opts_hdr = (function main$draw_graph$home$disp_opts_hdr(state){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.item6","div.item6",2112051463),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.opts-hdr","div.opts-hdr",-1163202587),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
main.draw_graph.home.toggle(state,new cljs.core.Keyword(null,"lbl","lbl",-940407849),"show","hide");

main.draw_graph.home.toggle(state,new cljs.core.Keyword(null,"local-class","local-class",1003799540),"hidden","visible");

main.draw_graph.home.toggle(state,new cljs.core.Keyword(null,"wrapper-class","wrapper-class",1300340883),"wrapper controls wrapper-collapsed","wrapper controls");

return main.draw_graph.home.update_ace();
})], null),"Options",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.lbl.show-hide","a.lbl.show-hide",260798103),new cljs.core.Keyword(null,"lbl","lbl",-940407849).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))], null)], null)], null);
});
});
main.draw_graph.home.left_disp_opts1 = (function main$draw_graph$home$left_disp_opts1(state){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.controls1l","div.controls1l",-911306256),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"local-class","local-class",1003799540).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))], null),main.draw_graph.home.label_row("draw-graph"),main.draw_graph.home.row("node labels",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.draw_graph.home.node_label], null),"The header key to use for the node label"),main.draw_graph.home.row("node tooltips",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.draw_graph.home.tooltip], null),"The header key to use for tooltips embedded in the final svg"),main.draw_graph.home.row("filter graph",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.draw_graph.home.filtergraph], null),"Filters the graph - good for zooming in"),main.draw_graph.home.row("elide lower levels",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.draw_graph.home.elide_levels], null),"Hide <n> lowest levels in the graph"),main.draw_graph.home.row("post process",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.draw_graph.home.pp_QMARK_], null),"Post Procees the svg: anneal clusters and font replacement"),main.draw_graph.home.row("anneal cluster separation",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.draw_graph.home.pp_cluster_sep], null),"How close clusters are allowed to get in pixels during annealing")], null);
});
});
main.draw_graph.home.middle_disp_opts1 = (function main$draw_graph$home$middle_disp_opts1(state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.controls1m","div.controls1m",1059186765),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"local-class","local-class",1003799540).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))], null),main.draw_graph.home.empty_row(),main.draw_graph.home.row("cluster on",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.draw_graph.home.cluster_on], null),"The header key to cluster the graph on"),main.draw_graph.home.row("node URL",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.draw_graph.home.url], null),"The header key to use as an embedded link in the final svg"),main.draw_graph.home.row("paths",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.draw_graph.home.paths], null),"Filter the graph by paths through it. see help page."),main.draw_graph.home.row("highlight roots",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.draw_graph.home.show_roots], null),"Highlights the roots of the graph"),main.draw_graph.home.row("anneal expand clusters",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.draw_graph.home.pp_clusters], null),"Controls which dimensions of clusters are expanded in post processing"),main.draw_graph.home.row("font",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.draw_graph.home.pp_font], null),"The name of the replacement font to use in post processing"),main.draw_graph.home.empty_row(),main.draw_graph.home.empty_row()], null);
});
});
main.draw_graph.home.right_disp_opts1 = (function main$draw_graph$home$right_disp_opts1(state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.controls1r","div.controls1r",-903319148),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"local-class","local-class",1003799540).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))], null),main.draw_graph.home.empty_row(),main.draw_graph.home.row("color on",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.draw_graph.home.color_on], null),"The header key to vary node coloration by"),main.draw_graph.home.row("edges labels",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.draw_graph.home.edgelabels], null),"Edge meta key to use as an edge label"),main.draw_graph.home.empty_row(),main.draw_graph.home.empty_row(),main.draw_graph.home.row("highlight constraints",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.draw_graph.home.show_constraints], null),"Highlights all (rank) constraining edges, including ordinarily invisible generated cluster edges. For debugging layouts"),main.draw_graph.home.row("anneal bias",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.draw_graph.home.anneal_bias], null),"Favors left-right cluster expansion by this factor in TB/ BT layouts, ditto for top bottom in LR/ RL layouts"),main.draw_graph.home.row("cluster edges num",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.draw_graph.home.cluster_edges_num], null),"number of invisible edges to create between nodes in two clusters that have a cluster edge. See Help page for further information.")], null);
});
});
main.draw_graph.home.left_disp_opts2 = (function main$draw_graph$home$left_disp_opts2(state){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.controls2l","div.controls2l",1906600192),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"local-class","local-class",1003799540).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))], null),main.draw_graph.home.label_row("graphviz"),main.draw_graph.home.row("layout",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.draw_graph.home.layout], null),"The Graphviz layout algorithm"),main.draw_graph.home.row("(node) fixedsize",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.draw_graph.home.fixedsize], null),"Nodes fixed in size or varied according to contents"),main.draw_graph.home.row("nodesep",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.draw_graph.home.nodesep], null),"Separation between nodes in inches"),main.draw_graph.home.row("overlap",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.draw_graph.home.overlap], null),"Determines how Graphviz removes overlapping edges")], null);
});
});
main.draw_graph.home.middle_disp_opts2 = (function main$draw_graph$home$middle_disp_opts2(state){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.controls2m","div.controls2m",908518123),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"local-class","local-class",1003799540).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))], null),main.draw_graph.home.empty_row(),main.draw_graph.home.row("rankdir",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.draw_graph.home.rankdir], null),"The layout direction e.g. TB mean Top Bottom etc"),main.draw_graph.home.row("splines",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.draw_graph.home.splines], null),"Controls the form of the edges in the graph"),main.draw_graph.home.row("ranksep",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.draw_graph.home.ranksep], null),"Separation between ranks in inches"),main.draw_graph.home.row("scale",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.draw_graph.home.scale], null),"Scales the graph up by this factor")], null);
});
});
main.draw_graph.home.right_disp_opts2 = (function main$draw_graph$home$right_disp_opts2(state){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.controls2r","div.controls2r",-1439017299),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"local-class","local-class",1003799540).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))], null),main.draw_graph.home.empty_row(),main.draw_graph.home.row("node shape",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.draw_graph.home.shape], null),"The shape used for nodes"),main.draw_graph.home.empty_row(),main.draw_graph.home.empty_row(),main.draw_graph.home.row("concentrate (edges)",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.draw_graph.home.concentrate], null),"Merge edges with a common end point"),main.draw_graph.home.row("edge constraints",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.draw_graph.home.constraint], null),"Sets whether edges influence rank in dot layouts")], null);
});
});
main.draw_graph.home.go_button = (function main$draw_graph$home$go_button(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"go-button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),main.draw_graph.home.get_svg], null),"draw-graph"], null);
});
main.draw_graph.home.go_button_loading = (function main$draw_graph$home$go_button_loading(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"go-button"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-circle-o-notch.fa-spin","i.fa.fa-circle-o-notch.fa-spin",1521885375)], null)," processing"], null);
});
main.draw_graph.home.process_button = (function main$draw_graph$home$process_button(){
return (function (){
if(cljs.core.truth_(cljs.core.deref(main.draw_graph.home.processing))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.draw_graph.home.go_button_loading], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.draw_graph.home.go_button], null);
}
});
});
main.draw_graph.home.save_button = (function main$draw_graph$home$save_button(){
return (function (){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(main.draw_graph.home.svg),main.draw_graph.home.default_svg_text)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"save-button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(main.draw_graph.home.svg),main.draw_graph.home.default_svg_text)){
return main.draw_graph.file.save_svg.cljs$core$IFn$_invoke$arity$variadic(main.draw_graph.home.svg,new cljs.core.Keyword(null,"data-filename","data-filename",1476355539).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(main.draw_graph.home.local_state)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"layout","layout",-2120940921).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(main.draw_graph.home.options))], 0));
} else {
return new cljs.core.Keyword(null,"cluster-on","cluster-on",-499953258).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(main.draw_graph.home.options));
}
})], null),"Save image"], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"save-button-disabled"], null),"Save image"], null);
}
});
});
main.draw_graph.home.controls = (function main$draw_graph$home$controls(state){
return (function (){
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"wrapper-class","wrapper-class",1300340883).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.item3","div.item3",2106942238),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.draw_graph.home.load_button], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"or enter the data"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.item4","div.item4",-1279097434),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"file-name"], null),new cljs.core.Keyword(null,"data-filename","data-filename",1476355539).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(main.draw_graph.home.local_state))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.item5","div.item5",-884770574),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"editor"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.draw_graph.home.ace_editor,main.draw_graph.home.local_state], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.draw_graph.home.disp_opts_hdr,state], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.draw_graph.home.left_disp_opts1,state], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.draw_graph.home.middle_disp_opts1,state], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.draw_graph.home.right_disp_opts1,state], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.draw_graph.home.left_disp_opts2,state], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.draw_graph.home.middle_disp_opts2,state], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.draw_graph.home.right_disp_opts2,state], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.item9","div.item9",1400396919),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.draw_graph.home.process_button], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.item10","div.item10",-1541683635),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.draw_graph.home.save_button], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#item11","div#item11",-1452194083),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),cljs.core.deref(main.draw_graph.home.svg)], null)], null)], null)], null);
});
});
main.draw_graph.home.local_remote_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lbl","lbl",-940407849),"  local",new cljs.core.Keyword(null,"class","class",-2030961996),"local"], null));
main.draw_graph.home.local_remote = (function main$draw_graph$home$local_remote(state){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.local-remote","a.local-remote",-1881278711),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
main.draw_graph.home.toggle(state,new cljs.core.Keyword(null,"lbl","lbl",-940407849),"  local","  remote");

main.draw_graph.home.toggle(state,new cljs.core.Keyword(null,"class","class",-2030961996),"local","remote");

return main.draw_graph.home.toggle(main.draw_graph.home.local_state,new cljs.core.Keyword(null,"local-dot","local-dot",-2051990829),true,false);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))], null),new cljs.core.Keyword(null,"lbl","lbl",-940407849).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))], null)], null);
});
});
main.draw_graph.home.home_page = (function main$draw_graph$home$home_page(){
main.draw_graph.home.find_region();

return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.page","div.page",1917984906),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.wrapper-banner","div.wrapper-banner",355794091),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.site-banner.banner1","div.site-banner.banner1",-234066853),"draw-graph",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.draw_graph.home.local_remote,main.draw_graph.home.local_remote_state], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.banner2.controls","div.banner2.controls",1952181281),"Examples  ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.draw_graph.home.example_dropdown], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.main","div.main",-117780813),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.draw_graph.home.controls,main.draw_graph.home.disp_opts_state], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.warn","div.warn",-1554453780),cljs.core.deref(main.draw_graph.home.warn)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.error","div.error",314336058),cljs.core.deref(main.draw_graph.home.error)], null)], null);
});

//# sourceMappingURL=main.draw_graph.home.js.map
