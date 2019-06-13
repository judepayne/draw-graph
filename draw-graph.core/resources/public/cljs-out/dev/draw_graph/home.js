// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('draw_graph.home');
goog.require('cljs.core');
goog.require('cljs.core.constants');
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
goog.require('draw_graph.ip');
draw_graph.home.log = console.log;
draw_graph.home.default_svg_text = "<div/>";
draw_graph.home.local_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$options,draw_graph.examples.default_options,cljs.core.cst$kw$processing,false,cljs.core.cst$kw$local_DASH_dot,true,cljs.core.cst$kw$error,"",cljs.core.cst$kw$warn,"",cljs.core.cst$kw$svg,draw_graph.home.default_svg_text,cljs.core.cst$kw$data,"",cljs.core.cst$kw$region,null], null));
draw_graph.home.options = reagent.core.cursor(draw_graph.home.local_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options], null));
draw_graph.home.svg = reagent.core.cursor(draw_graph.home.local_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg], null));
draw_graph.home.processing = reagent.core.cursor(draw_graph.home.local_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$processing], null));
draw_graph.home.error = reagent.core.cursor(draw_graph.home.local_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null));
draw_graph.home.warn = reagent.core.cursor(draw_graph.home.local_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null));
draw_graph.home.local_dot = reagent.core.cursor(draw_graph.home.local_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$local_DASH_dot], null));
draw_graph.home.region = reagent.core.cursor(draw_graph.home.local_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$region], null));
draw_graph.file.file_reader_listen((function (e){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(draw_graph.home.local_state,cljs.core.merge,e);

return (draw_graph.home.update_ace.cljs$core$IFn$_invoke$arity$0 ? draw_graph.home.update_ace.cljs$core$IFn$_invoke$arity$0() : draw_graph.home.update_ace.call(null));
}));
draw_graph.home._STAR_produce_dot_locally_STAR_ = true;
draw_graph.home.find_region = (function draw_graph$home$find_region(){
return draw_graph.ip.region((function (x){
return cljs.core.reset_BANG_(draw_graph.home.region,x);
}),(function (err){
return console.log(err);
}));
});
draw_graph.home.url_Europe = "https://0j6kjsk388.execute-api.eu-west-2.amazonaws.com/beta";
draw_graph.home.url_US = "https://u4jlt3tmhe.execute-api.us-east-1.amazonaws.com/beta";
draw_graph.home.lambda_url = (function draw_graph$home$lambda_url(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(draw_graph.home.region)], 0));

var G__43425 = cljs.core.deref(draw_graph.home.region);
switch (G__43425) {
case "Europe":
return draw_graph.home.url_Europe;

break;
default:
return draw_graph.home.url_US;

}
});
/**
 * removes items from map where Value is an empty string
 */
draw_graph.home.remove_empty_strings = (function draw_graph$home$remove_empty_strings(m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["",null], null), null),cljs.core.last)),m));
});
draw_graph.home.__GT_csv1 = (function draw_graph$home$__GT_csv1(){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$display_DASH_options,draw_graph.home.remove_empty_strings(cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(draw_graph.home.local_state))),cljs.core.cst$kw$data,cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(draw_graph.home.local_state)),cljs.core.cst$kw$format_DASH_in,"csv",cljs.core.cst$kw$format_DASH_out,"svg"], null);
});
draw_graph.home.__GT_dot = (function draw_graph$home$__GT_dot(){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$display_DASH_options,draw_graph.home.remove_empty_strings(cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(draw_graph.home.local_state))),cljs.core.cst$kw$data,cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(draw_graph.home.local_state))], null);
});
draw_graph.home.dot__GT_svg = (function draw_graph$home$dot__GT_svg(data){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$data,data,cljs.core.cst$kw$format_DASH_in,"dot",cljs.core.cst$kw$format_DASH_out,"svg"], null);
});
draw_graph.home.post = (function draw_graph$home$post(url,json_data){
return promesa.core.bind(promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(kvlt.core.request_BANG_(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$url,url,cljs.core.cst$kw$method,cljs.core.cst$kw$post,cljs.core.cst$kw$body,json_data,cljs.core.cst$kw$content_DASH_type,cljs.core.cst$kw$json,cljs.core.cst$kw$accept,cljs.core.cst$kw$json], null)),(function (e){
var G__43428 = cljs.core.cst$kw$type;
var fexpr__43427 = cljs.core.ex_data(e);
return (fexpr__43427.cljs$core$IFn$_invoke$arity$1 ? fexpr__43427.cljs$core$IFn$_invoke$arity$1(G__43428) : fexpr__43427.call(null,G__43428));
})),(function (p__43429){
var map__43430 = p__43429;
var map__43430__$1 = (((((!((map__43430 == null))))?(((((map__43430.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43430.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43430):map__43430);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43430__$1,cljs.core.cst$kw$status);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43430__$1,cljs.core.cst$kw$body);
return promesa.core.promise(body);
}));
});
draw_graph.home.__GT_svg = (function draw_graph$home$__GT_svg(json_data){
var fexpr__43432 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(draw_graph.home.post,draw_graph.home.lambda_url());
return (fexpr__43432.cljs$core$IFn$_invoke$arity$1 ? fexpr__43432.cljs$core$IFn$_invoke$arity$1(json_data) : fexpr__43432.call(null,json_data));
});
draw_graph.home.put_svg = (function draw_graph$home$put_svg(data){
var data_STAR__43433 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(data,"null"))?draw_graph.home.default_svg_text:data);

cljs.core.reset_BANG_(draw_graph.home.processing,false);

return cljs.core.reset_BANG_(draw_graph.home.svg,data);
});
draw_graph.home.put_error = (function draw_graph$home$put_error(message){
cljs.core.reset_BANG_(draw_graph.home.processing,false);

cljs.core.reset_BANG_(draw_graph.home.svg,"");

return cljs.core.reset_BANG_(draw_graph.home.error,message);
});
draw_graph.home.put_warn = (function draw_graph$home$put_warn(message){
cljs.core.reset_BANG_(draw_graph.home.processing,false);

return cljs.core.reset_BANG_(draw_graph.home.warn,message);
});
draw_graph.home.put_result = (function draw_graph$home$put_result(result){
if(cljs.core.truth_(cljs.core.cst$kw$svg.cljs$core$IFn$_invoke$arity$1(result))){
cljs.core.reset_BANG_(draw_graph.home.svg,cljs.core.cst$kw$svg.cljs$core$IFn$_invoke$arity$1(result));
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(result))){
cljs.core.reset_BANG_(draw_graph.home.error,cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(result));
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$warn.cljs$core$IFn$_invoke$arity$1(result))){
cljs.core.reset_BANG_(draw_graph.home.warn,cljs.core.cst$kw$warn.cljs$core$IFn$_invoke$arity$1(result));
} else {
}

return cljs.core.reset_BANG_(draw_graph.home.processing,false);
});
draw_graph.home.process_remotely = (function draw_graph$home$process_remotely(){
return promesa.core.error.cljs$core$IFn$_invoke$arity$2((function (error){
return draw_graph.home.put_error(error.message);
}),promesa.core.map(draw_graph.home.put_result,promesa.core.map(draw_graph.utils.json__GT_clj,draw_graph.home.__GT_svg(draw_graph.utils.clj__GT_json(draw_graph.home.__GT_csv1())))));
});
draw_graph.home.prom_viz = (function draw_graph$home$prom_viz(dot){
return promesa.core.bind(promesa.core.catch$.cljs$core$IFn$_invoke$arity$2((viz.core.image.cljs$core$IFn$_invoke$arity$1 ? viz.core.image.cljs$core$IFn$_invoke$arity$1(dot) : viz.core.image.call(null,dot)),(function (e){
var G__43435 = cljs.core.cst$kw$type;
var fexpr__43434 = cljs.core.ex_data(e);
return (fexpr__43434.cljs$core$IFn$_invoke$arity$1 ? fexpr__43434.cljs$core$IFn$_invoke$arity$1(G__43435) : fexpr__43434.call(null,G__43435));
})),(function (result){
return promesa.core.promise(result);
}));
});
draw_graph.home.local_dot__GT_svg = (function draw_graph$home$local_dot__GT_svg(g,opts,dot){
var dot_SINGLEQUOTE_ = clojure.string.replace(dot,/\\\\n/,"\n");
return promesa.core.error.cljs$core$IFn$_invoke$arity$2(((function (dot_SINGLEQUOTE_){
return (function (error){
return draw_graph.home.put_error(error.message);
});})(dot_SINGLEQUOTE_))
,promesa.core.map(draw_graph.home.put_svg,promesa.core.map(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(lib_draw_graph.processor.postprocess_svg,g,opts),draw_graph.home.prom_viz(dot_SINGLEQUOTE_))));
});
draw_graph.home.lambda_dot__GT_svg = (function draw_graph$home$lambda_dot__GT_svg(g,opts,dot){
return promesa.core.error.cljs$core$IFn$_invoke$arity$2((function (error){
return draw_graph.home.put_error(error.message);
}),promesa.core.map(draw_graph.home.put_svg,promesa.core.map(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(lib_draw_graph.processor.postprocess_svg,g,opts),promesa.core.map(cljs.core.cst$kw$svg,promesa.core.map(draw_graph.utils.json__GT_clj,draw_graph.home.__GT_svg(draw_graph.utils.clj__GT_json(draw_graph.home.dot__GT_svg(dot))))))));
});
draw_graph.home.process_locally = (function draw_graph$home$process_locally(){
cljs.core.reset_BANG_(draw_graph.home.processing,true);

cljs.core.reset_BANG_(draw_graph.home.error,"");

cljs.core.reset_BANG_(draw_graph.home.warn,"");

var in$ = draw_graph.home.__GT_csv1();
var opts = cljs.core.cst$kw$display_DASH_options.cljs$core$IFn$_invoke$arity$1(in$);
var g = (function (){try{return lib_draw_graph.processor.csv__GT_g(in$);
}catch (e43436){if((e43436 instanceof Error)){
var e = e43436;
cljs.core.reset_BANG_(draw_graph.home.svg,"");

return draw_graph.home.put_error(cljs.core.str.cljs$core$IFn$_invoke$arity$1(e));
} else {
throw e43436;

}
}})();
var g_SINGLEQUOTE_ = (function (){try{return lib_draw_graph.processor.preprocess_graph(g,opts);
}catch (e43437){if((e43437 instanceof Error)){
var e = e43437;
cljs.core.reset_BANG_(draw_graph.home.svg,"");

return draw_graph.home.put_error(cljs.core.str.cljs$core$IFn$_invoke$arity$1(e));
} else {
throw e43437;

}
}})();
var dot = lib_draw_graph.processor.g__GT_dot(in$,g_SINGLEQUOTE_);
if(cljs.core.truth_(cljs.core.deref(draw_graph.home.local_dot))){
return draw_graph.home.local_dot__GT_svg(g_SINGLEQUOTE_,opts,dot);
} else {
return draw_graph.home.lambda_dot__GT_svg(g_SINGLEQUOTE_,opts,dot);
}
});
draw_graph.home.get_svg = (function draw_graph$home$get_svg(){
if(draw_graph.home._STAR_produce_dot_locally_STAR_){
return draw_graph.home.process_locally();
} else {
return draw_graph.home.process_remotely();
}
});
draw_graph.home.__GT_js = (function draw_graph$home$__GT_js(var_name){
return clojure.string.replace(clojure.string.replace(var_name,/\//,"."),/-/,"_");
});
draw_graph.home.invoke = (function draw_graph$home$invoke(var_args){
var args__4736__auto__ = [];
var len__4730__auto___43440 = arguments.length;
var i__4731__auto___43441 = (0);
while(true){
if((i__4731__auto___43441 < len__4730__auto___43440)){
args__4736__auto__.push((arguments[i__4731__auto___43441]));

var G__43442 = (i__4731__auto___43441 + (1));
i__4731__auto___43441 = G__43442;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return draw_graph.home.invoke.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

draw_graph.home.invoke.cljs$core$IFn$_invoke$arity$variadic = (function (function_name,args){
var fun = eval(draw_graph.home.__GT_js(function_name));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(fun,args);
});

draw_graph.home.invoke.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
draw_graph.home.invoke.cljs$lang$applyTo = (function (seq43438){
var G__43439 = cljs.core.first(seq43438);
var seq43438__$1 = cljs.core.next(seq43438);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43439,seq43438__$1);
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
var len__4730__auto___43452 = arguments.length;
var i__4731__auto___43453 = (0);
while(true){
if((i__4731__auto___43453 < len__4730__auto___43452)){
args__4736__auto__.push((arguments[i__4731__auto___43453]));

var G__43454 = (i__4731__auto___43453 + (1));
i__4731__auto___43453 = G__43454;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return draw_graph.home.fixed_select.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

draw_graph.home.fixed_select.cljs$core$IFn$_invoke$arity$variadic = (function (path,a,tabIndex,options){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$field,cljs.core.cst$kw$list,cljs.core.cst$kw$id,cljs.core.last(path),cljs.core.cst$kw$values,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(a),path),cljs.core.cst$kw$value,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(draw_graph.home.local_state),path),cljs.core.cst$kw$tabIndex,tabIndex,cljs.core.cst$kw$on_DASH_change,(function (p1__43443_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(draw_graph.home.local_state,cljs.core.update_in,path,(function (e){
return p1__43443_SHARP_.target.value;
}));
})], null),(function (){var iter__4523__auto__ = (function draw_graph$home$iter__43448(s__43449){
return (new cljs.core.LazySeq(null,(function (){
var s__43449__$1 = s__43449;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__43449__$1);
if(temp__5720__auto__){
var s__43449__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__43449__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__43449__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__43451 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__43450 = (0);
while(true){
if((i__43450 < size__4522__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__43450);
cljs.core.chunk_append(b__43451,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,x], null),x], null));

var G__43455 = (i__43450 + (1));
i__43450 = G__43455;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43451),draw_graph$home$iter__43448(cljs.core.chunk_rest(s__43449__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43451),null);
}
} else {
var x = cljs.core.first(s__43449__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,x], null),x], null),draw_graph$home$iter__43448(cljs.core.rest(s__43449__$2)));
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

draw_graph.home.fixed_select.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
draw_graph.home.fixed_select.cljs$lang$applyTo = (function (seq43444){
var G__43445 = cljs.core.first(seq43444);
var seq43444__$1 = cljs.core.next(seq43444);
var G__43446 = cljs.core.first(seq43444__$1);
var seq43444__$2 = cljs.core.next(seq43444__$1);
var G__43447 = cljs.core.first(seq43444__$2);
var seq43444__$3 = cljs.core.next(seq43444__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43445,G__43446,G__43447,seq43444__$3);
});

draw_graph.home.text_input = (function draw_graph$home$text_input(path,a,tabIndex){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,cljs.core.cst$kw$text,cljs.core.cst$kw$id,cljs.core.last(path),cljs.core.cst$kw$value,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(a),path),cljs.core.cst$kw$tabIndex,tabIndex,cljs.core.cst$kw$on_DASH_change,(function (p1__43456_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(draw_graph.home.local_state,cljs.core.update_in,path,(function (e){
return p1__43456_SHARP_.target.value;
}));
})], null)], null);
});
draw_graph.home.wide_text_input = (function draw_graph$home$wide_text_input(path,a,tabIndex){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$wide,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,cljs.core.cst$kw$text,cljs.core.cst$kw$id,cljs.core.last(path),cljs.core.cst$kw$value,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(a),path),cljs.core.cst$kw$tabIndex,tabIndex,cljs.core.cst$kw$on_DASH_change,(function (p1__43457_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(draw_graph.home.local_state,cljs.core.update_in,path,(function (e){
return p1__43457_SHARP_.target.value;
}));
})], null)], null);
});
draw_graph.home.myace = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
draw_graph.home.ace_editor = (function draw_graph$home$ace_editor(value){
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$display_DASH_name,"ace editor",cljs.core.cst$kw$component_DASH_did_DASH_mount,(function (this$){
console.log("mounted");

var node = reagent.core.dom_node(this$);
var ace_instance = ace.edit("editor");
cljs.core.reset_BANG_(draw_graph.home.myace,ace_instance);

ace_instance.setTheme("ace/theme/textmate");

ace_instance.session.setMode("ace/mode/tcl");

return ace_instance.on("change",((function (node,ace_instance){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(value,cljs.core.assoc,cljs.core.cst$kw$data,ace_instance.getValue());
});})(node,ace_instance))
);
}),cljs.core.cst$kw$reagent_DASH_render,(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"editor"], null)], null);
})], null));
});
draw_graph.home.update_ace = (function draw_graph$home$update_ace(){
var ace_instance = cljs.core.deref(draw_graph.home.myace);
var cursor = ace_instance.getCursorPositionScreen();
return ace_instance.setValue(cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(draw_graph.home.local_state)),cursor);
});
draw_graph.home.load_example_data = (function draw_graph$home$load_example_data(ex_fn){
var example = draw_graph.home.invoke(ex_fn);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(draw_graph.home.local_state,cljs.core.assoc,cljs.core.cst$kw$options,cljs.core.cst$kw$options.cljs$core$IFn$_invoke$arity$1(example));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(draw_graph.home.local_state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$data,cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(example),cljs.core.cst$kw$data_DASH_filename,""], null));
});
draw_graph.home.example_dropdown = (function draw_graph$home$example_dropdown(){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tabIndex,(1),cljs.core.cst$kw$on_DASH_change,(function (p1__43458_SHARP_){
draw_graph.home.load_example_data(p1__43458_SHARP_.target.value);

return draw_graph.home.update_ace();
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,null], null),"-"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,"draw-graph.examples/example1"], null),"Friendship graph"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,"draw-graph.examples/example2"], null),"Two facing trees"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,"draw-graph.examples/example3"], null),"Two trees"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,"draw-graph.examples/example4"], null),"CERN email connections"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,"draw-graph.examples/example5"], null),"Circular tree"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,"draw-graph.examples/example6"], null),"cluster layout"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,"draw-graph.examples/example7"], null),"complex cluster layout"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,"draw-graph.examples/example8"], null),"Architecture diagram"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,"draw-graph.examples/example9"], null),"Complex architecture diagram"], null)], null);
});
draw_graph.home.click_upload_csv_hidden = (function draw_graph$home$click_upload_csv_hidden(e){
return document.getElementById("upload-csv-hidden").click();
});
draw_graph.home.load_button = (function draw_graph$home$load_button(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,"upload-csv",cljs.core.cst$kw$tabIndex,(2),cljs.core.cst$kw$on_DASH_click,draw_graph.home.click_upload_csv_hidden,cljs.core.cst$kw$title,"Upload a csv in 'csv1' format. see help"], null),"Load csv"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,"upload-csv-hidden",cljs.core.cst$kw$type,"file",cljs.core.cst$kw$accept,".csv",cljs.core.cst$kw$on_DASH_change,draw_graph.file.file_reader_put], null)], null)], null);
});
draw_graph.home.data_input = (function draw_graph$home$data_input(value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$wrap,cljs.core.cst$kw$tabIndex,cljs.core.cst$kw$autoComplete,cljs.core.cst$kw$value,cljs.core.cst$kw$rows,cljs.core.cst$kw$id,cljs.core.cst$kw$spellCheck,cljs.core.cst$kw$autoCorrect,cljs.core.cst$kw$on_DASH_change,cljs.core.cst$kw$autoCapitalize],["soft",(3),"on",cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(value)),(20),"tweak-box","false","off",(function (p1__43459_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(value,cljs.core.assoc,cljs.core.cst$kw$data,p1__43459_SHARP_.target.value);
}),"off"])], null)], null);
});
draw_graph.home.first_line = (function draw_graph$home$first_line(s){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2((s.split("\n")[(0)]),(2)).split(":"));
});
draw_graph.home.headers = reagent.ratom.make_reaction((function (){
return draw_graph.home.first_line(cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(draw_graph.home.local_state)));
}));
draw_graph.home.node_label = (function draw_graph$home$node_label(){
return draw_graph.home.text_input(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options,cljs.core.cst$kw$label], null),draw_graph.home.local_state,(4));
});
draw_graph.home.cluster_on = (function draw_graph$home$cluster_on(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select$form_DASH_control,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$field,cljs.core.cst$kw$list,cljs.core.cst$kw$id,cljs.core.cst$kw$cluster_DASH_on,cljs.core.cst$kw$value,cljs.core.cst$kw$cluster_DASH_on.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(draw_graph.home.options)),cljs.core.cst$kw$tabIndex,(5),cljs.core.cst$kw$on_DASH_change,(function (p1__43460_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(draw_graph.home.local_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options,cljs.core.cst$kw$cluster_DASH_on], null),(function (e){
return p1__43460_SHARP_.target.value;
}));
})], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",cljs.core.first(cljs.core.deref(draw_graph.home.headers))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,"none",cljs.core.cst$kw$value,""], null),"-"], null):cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,"none",cljs.core.cst$kw$value,""], null),"-"], null),(function (){var iter__4523__auto__ = (function draw_graph$home$cluster_on_$_iter__43461(s__43462){
return (new cljs.core.LazySeq(null,(function (){
var s__43462__$1 = s__43462;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__43462__$1);
if(temp__5720__auto__){
var s__43462__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__43462__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__43462__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__43464 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__43463 = (0);
while(true){
if((i__43463 < size__4522__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__43463);
cljs.core.chunk_append(b__43464,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,x], null),x], null));

var G__43465 = (i__43463 + (1));
i__43463 = G__43465;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43464),draw_graph$home$cluster_on_$_iter__43461(cljs.core.chunk_rest(s__43462__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43464),null);
}
} else {
var x = cljs.core.first(s__43462__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,x], null),x], null),draw_graph$home$cluster_on_$_iter__43461(cljs.core.rest(s__43462__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.deref(draw_graph.home.headers));
})()))], null);
});
draw_graph.home.color_on = (function draw_graph$home$color_on(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select$form_DASH_control,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$field,cljs.core.cst$kw$list,cljs.core.cst$kw$id,cljs.core.cst$kw$color_DASH_on,cljs.core.cst$kw$value,cljs.core.cst$kw$color_DASH_on.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(draw_graph.home.options)),cljs.core.cst$kw$tabIndex,(6),cljs.core.cst$kw$on_DASH_change,(function (p1__43466_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(draw_graph.home.local_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options,cljs.core.cst$kw$color_DASH_on], null),(function (e){
return p1__43466_SHARP_.target.value;
}));
})], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",cljs.core.first(cljs.core.deref(draw_graph.home.headers))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,"none",cljs.core.cst$kw$value,""], null),"-"], null):cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,"none",cljs.core.cst$kw$value,""], null),"-"], null),(function (){var iter__4523__auto__ = (function draw_graph$home$color_on_$_iter__43467(s__43468){
return (new cljs.core.LazySeq(null,(function (){
var s__43468__$1 = s__43468;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__43468__$1);
if(temp__5720__auto__){
var s__43468__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__43468__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__43468__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__43470 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__43469 = (0);
while(true){
if((i__43469 < size__4522__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__43469);
cljs.core.chunk_append(b__43470,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,x], null),x], null));

var G__43471 = (i__43469 + (1));
i__43469 = G__43471;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43470),draw_graph$home$color_on_$_iter__43467(cljs.core.chunk_rest(s__43468__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43470),null);
}
} else {
var x = cljs.core.first(s__43468__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,x], null),x], null),draw_graph$home$color_on_$_iter__43467(cljs.core.rest(s__43468__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.deref(draw_graph.home.headers));
})()))], null);
});
draw_graph.home.tooltip = (function draw_graph$home$tooltip(){
return draw_graph.home.text_input(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options,cljs.core.cst$kw$tooltip], null),draw_graph.home.local_state,(7));
});
draw_graph.home.url = (function draw_graph$home$url(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select$form_DASH_control,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$field,cljs.core.cst$kw$list,cljs.core.cst$kw$id,cljs.core.cst$kw$url,cljs.core.cst$kw$value,cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(draw_graph.home.options)),cljs.core.cst$kw$tabIndex,(8),cljs.core.cst$kw$on_DASH_change,(function (p1__43472_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(draw_graph.home.local_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options,cljs.core.cst$kw$url], null),(function (e){
return p1__43472_SHARP_.target.value;
}));
})], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",cljs.core.first(cljs.core.deref(draw_graph.home.headers))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,"none",cljs.core.cst$kw$value,""], null),"-"], null):cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,"none",cljs.core.cst$kw$value,""], null),"-"], null),(function (){var iter__4523__auto__ = (function draw_graph$home$url_$_iter__43473(s__43474){
return (new cljs.core.LazySeq(null,(function (){
var s__43474__$1 = s__43474;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__43474__$1);
if(temp__5720__auto__){
var s__43474__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__43474__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__43474__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__43476 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__43475 = (0);
while(true){
if((i__43475 < size__4522__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__43475);
cljs.core.chunk_append(b__43476,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,x], null),x], null));

var G__43477 = (i__43475 + (1));
i__43475 = G__43477;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43476),draw_graph$home$url_$_iter__43473(cljs.core.chunk_rest(s__43474__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43476),null);
}
} else {
var x = cljs.core.first(s__43474__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,x], null),x], null),draw_graph$home$url_$_iter__43473(cljs.core.rest(s__43474__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.deref(draw_graph.home.headers));
})()))], null);
});
draw_graph.home.edgelabels = (function draw_graph$home$edgelabels(){
return draw_graph.home.text_input(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options,cljs.core.cst$kw$edge_DASH_label], null),draw_graph.home.local_state,(9));
});
draw_graph.home.filtergraph = (function draw_graph$home$filtergraph(){
return draw_graph.home.text_input(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options,cljs.core.cst$kw$filter_DASH_graph], null),draw_graph.home.local_state,(10));
});
draw_graph.home.paths = (function draw_graph$home$paths(){
return draw_graph.home.wide_text_input(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options,cljs.core.cst$kw$paths], null),draw_graph.home.local_state,(11));
});
draw_graph.home.elide_levels = (function draw_graph$home$elide_levels(){
return draw_graph.home.fixed_select.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options,cljs.core.cst$kw$elide], null),draw_graph.home.local_state,(12),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["0","1","2","3","4"], 0));
});
draw_graph.home.show_roots = (function draw_graph$home$show_roots(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,cljs.core.cst$kw$checkbox,cljs.core.cst$kw$id,cljs.core.cst$kw$show_DASH_roots_QMARK_,cljs.core.cst$kw$checked,cljs.core.cst$kw$show_DASH_roots_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(draw_graph.home.options)),cljs.core.cst$kw$tabIndex,(13),cljs.core.cst$kw$on_DASH_change,(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(draw_graph.home.local_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options,cljs.core.cst$kw$show_DASH_roots_QMARK_], null),cljs.core.not);
})], null)], null);
});
draw_graph.home.show_constraints = (function draw_graph$home$show_constraints(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,cljs.core.cst$kw$checkbox,cljs.core.cst$kw$id,cljs.core.cst$kw$show_DASH_constraints_QMARK_,cljs.core.cst$kw$checked,cljs.core.cst$kw$show_DASH_constraints_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(draw_graph.home.options)),cljs.core.cst$kw$tabIndex,(14),cljs.core.cst$kw$on_DASH_change,(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(draw_graph.home.local_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options,cljs.core.cst$kw$show_DASH_constraints_QMARK_], null),cljs.core.not);
})], null)], null);
});
draw_graph.home.pp_QMARK_ = (function draw_graph$home$pp_QMARK_(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,cljs.core.cst$kw$checkbox,cljs.core.cst$kw$id,cljs.core.cst$kw$pp_QMARK_,cljs.core.cst$kw$checked,cljs.core.cst$kw$post_DASH_process_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(draw_graph.home.options)),cljs.core.cst$kw$tabIndex,(15),cljs.core.cst$kw$on_DASH_change,(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(draw_graph.home.local_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options,cljs.core.cst$kw$post_DASH_process_QMARK_], null),cljs.core.not);
})], null)], null);
});
draw_graph.home.pp_clusters = (function draw_graph$home$pp_clusters(){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$lbl,"\u2191"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,cljs.core.cst$kw$checkbox,cljs.core.cst$kw$id,cljs.core.cst$kw$pp_DASH_clusters_DASH_top_QMARK_,cljs.core.cst$kw$checked,cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$pp_DASH_clusters.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(draw_graph.home.options))),cljs.core.cst$kw$tab_DASH_index,(16),cljs.core.cst$kw$on_DASH_change,(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(draw_graph.home.local_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options,cljs.core.cst$kw$pp_DASH_clusters,cljs.core.cst$kw$y], null),cljs.core.not);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$lbl,["\u00A0","\u00A0","\u00A0","\u00A0","\u2193"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,cljs.core.cst$kw$checkbox,cljs.core.cst$kw$id,cljs.core.cst$kw$pp_DASH_clusters_DASH_bottom_QMARK_,cljs.core.cst$kw$checked,cljs.core.cst$kw$h.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$pp_DASH_clusters.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(draw_graph.home.options))),cljs.core.cst$kw$tabIndex,(17),cljs.core.cst$kw$on_DASH_change,(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(draw_graph.home.local_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options,cljs.core.cst$kw$pp_DASH_clusters,cljs.core.cst$kw$h], null),cljs.core.not);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$lbl,["\u00A0","\u00A0","\u2190"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,cljs.core.cst$kw$checkbox,cljs.core.cst$kw$id,cljs.core.cst$kw$pp_DASH_clusters_DASH_left_QMARK_,cljs.core.cst$kw$checked,cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$pp_DASH_clusters.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(draw_graph.home.options))),cljs.core.cst$kw$tabIndex,(18),cljs.core.cst$kw$on_DASH_change,(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(draw_graph.home.local_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options,cljs.core.cst$kw$pp_DASH_clusters,cljs.core.cst$kw$x], null),cljs.core.not);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$lbl,["\u00A0","\u00A0","\u2192"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,cljs.core.cst$kw$checkbox,cljs.core.cst$kw$id,cljs.core.cst$kw$pp_DASH_clusters_DASH_right_QMARK_,cljs.core.cst$kw$checked,cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$pp_DASH_clusters.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(draw_graph.home.options))),cljs.core.cst$kw$tabIndex,(19),cljs.core.cst$kw$on_DASH_change,(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(draw_graph.home.local_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options,cljs.core.cst$kw$pp_DASH_clusters,cljs.core.cst$kw$w], null),cljs.core.not);
})], null)], null)], null);
});
draw_graph.home.anneal_bias = (function draw_graph$home$anneal_bias(){
return draw_graph.home.fixed_select.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options,cljs.core.cst$kw$pp_DASH_anneal_DASH_bias], null),draw_graph.home.local_state,(20),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["0","1","2","3","4","5","6","7","8","9","10","11","12"], 0));
});
draw_graph.home.pp_cluster_sep = (function draw_graph$home$pp_cluster_sep(){
return draw_graph.home.text_input(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options,cljs.core.cst$kw$pp_DASH_cluster_DASH_sep], null),draw_graph.home.local_state,(21));
});
draw_graph.home.pp_font = (function draw_graph$home$pp_font(){
return draw_graph.home.text_input(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options,cljs.core.cst$kw$pp_DASH_font], null),draw_graph.home.local_state,(22));
});
draw_graph.home.cluster_edges_num = (function draw_graph$home$cluster_edges_num(){
return draw_graph.home.fixed_select.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options,cljs.core.cst$kw$num_DASH_cluster_DASH_edges], null),draw_graph.home.local_state,(23),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["1","2","4","5","6","9","12","16"], 0));
});
draw_graph.home.layout = (function draw_graph$home$layout(){
return draw_graph.home.fixed_select.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options,cljs.core.cst$kw$layout], null),draw_graph.home.local_state,(24),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dot","neato","fdp","circo","twopi"], 0));
});
draw_graph.home.rankdir = (function draw_graph$home$rankdir(){
return draw_graph.home.fixed_select.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options,cljs.core.cst$kw$rankdir], null),draw_graph.home.local_state,(25),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["LR","TB","RL","BT"], 0));
});
draw_graph.home.shape = (function draw_graph$home$shape(){
return draw_graph.home.fixed_select.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options,cljs.core.cst$kw$shape], null),draw_graph.home.local_state,(26),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["ellipse","rect","circle","egg","diamond","octagon","square","folder","cylinder","plaintext"], 0));
});
draw_graph.home.fixedsize = (function draw_graph$home$fixedsize(){
return draw_graph.home.fixed_select.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options,cljs.core.cst$kw$fixedsize], null),draw_graph.home.local_state,(27),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["true","false","shape"], 0));
});
draw_graph.home.splines = (function draw_graph$home$splines(){
return draw_graph.home.fixed_select.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options,cljs.core.cst$kw$splines], null),draw_graph.home.local_state,(28),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["line","spline","none","polyline","ortho","curved"], 0));
});
draw_graph.home.nodesep = (function draw_graph$home$nodesep(){
return draw_graph.home.text_input(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options,cljs.core.cst$kw$nodesep], null),draw_graph.home.local_state,(29));
});
draw_graph.home.ranksep = (function draw_graph$home$ranksep(){
return draw_graph.home.text_input(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options,cljs.core.cst$kw$ranksep], null),draw_graph.home.local_state,(30));
});
draw_graph.home.concentrate = (function draw_graph$home$concentrate(){
return draw_graph.home.fixed_select.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options,cljs.core.cst$kw$concentrate], null),draw_graph.home.local_state,(31),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["false","true"], 0));
});
draw_graph.home.overlap = (function draw_graph$home$overlap(){
return draw_graph.home.fixed_select.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options,cljs.core.cst$kw$overlap], null),draw_graph.home.local_state,(32),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["true","false","scale","scalexy","compress","vpsc","orthoxy","ipsep"], 0));
});
draw_graph.home.scale = (function draw_graph$home$scale(){
return draw_graph.home.text_input(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options,cljs.core.cst$kw$scale], null),draw_graph.home.local_state,(33));
});
draw_graph.home.constraint = (function draw_graph$home$constraint(){
return draw_graph.home.fixed_select.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$options,cljs.core.cst$kw$constraint], null),draw_graph.home.local_state,(34),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["true","false"], 0));
});
draw_graph.home.row = (function draw_graph$home$row(label,ctrl,tooltip){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$lbl,label], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"tooltip"], null),ctrl,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"tooltiptext"], null),tooltip], null)], null)], null);
});
draw_graph.home.label_row = (function draw_graph$home$label_row(label){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$lbl$row_DASH_sep,label], null)], null);
});
draw_graph.home.empty_row = (function draw_graph$home$empty_row(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$lbl$row_DASH_label,"\u00A0"], null)], null);
});
draw_graph.home.toggle = (function draw_graph$home$toggle(a,k,v1,v2){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__43478 = cljs.core.deref(a);
return (fexpr__43478.cljs$core$IFn$_invoke$arity$1 ? fexpr__43478.cljs$core$IFn$_invoke$arity$1(k) : fexpr__43478.call(null,k));
})(),v1)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(a,cljs.core.assoc,k,v2);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(a,cljs.core.assoc,k,v1);
}
});
draw_graph.home.disp_opts_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$local_DASH_class,"hidden",cljs.core.cst$kw$wrapper_DASH_class,"wrapper controls wrapper-collapsed",cljs.core.cst$kw$lbl,"show"], null));
draw_graph.home.disp_opts_hdr = (function draw_graph$home$disp_opts_hdr(state){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$item6,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$opts_DASH_hdr,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
draw_graph.home.toggle(state,cljs.core.cst$kw$lbl,"show","hide");

draw_graph.home.toggle(state,cljs.core.cst$kw$local_DASH_class,"hidden","visible");

draw_graph.home.toggle(state,cljs.core.cst$kw$wrapper_DASH_class,"wrapper controls wrapper-collapsed","wrapper controls");

return draw_graph.home.update_ace();
})], null),"Options",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$lbl$show_DASH_hide,cljs.core.cst$kw$lbl.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))], null)], null)], null);
});
});
draw_graph.home.left_disp_opts1 = (function draw_graph$home$left_disp_opts1(state){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$controls1l,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$local_DASH_class.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))], null),draw_graph.home.label_row("draw-graph"),draw_graph.home.row("node labels",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.node_label], null),"The header key to use for the node label"),draw_graph.home.row("node tooltips",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.tooltip], null),"The header key to use for tooltips embedded in the final svg"),draw_graph.home.row("filter graph",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.filtergraph], null),"Filters the graph - good for zooming in"),draw_graph.home.row("elide lower levels",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.elide_levels], null),"Hide <n> lowest levels in the graph"),draw_graph.home.row("post process",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.pp_QMARK_], null),"Post Procees the svg: anneal clusters and font replacement"),draw_graph.home.row("anneal cluster separation",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.pp_cluster_sep], null),"How close clusters are allowed to get in pixels during annealing")], null);
});
});
draw_graph.home.middle_disp_opts1 = (function draw_graph$home$middle_disp_opts1(state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$controls1m,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$local_DASH_class.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))], null),draw_graph.home.empty_row(),draw_graph.home.row("cluster on",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.cluster_on], null),"The header key to cluster the graph on"),draw_graph.home.row("node URL",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.url], null),"The header key to use as an embedded link in the final svg"),draw_graph.home.row("paths",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.paths], null),"Filter the graph by paths through it. see help page."),draw_graph.home.row("highlight roots",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.show_roots], null),"Highlights the roots of the graph"),draw_graph.home.row("anneal expand clusters",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.pp_clusters], null),"Controls which dimensions of clusters are expanded in post processing"),draw_graph.home.row("font",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.pp_font], null),"The name of the replacement font to use in post processing"),draw_graph.home.empty_row(),draw_graph.home.empty_row()], null);
});
});
draw_graph.home.right_disp_opts1 = (function draw_graph$home$right_disp_opts1(state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$controls1r,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$local_DASH_class.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))], null),draw_graph.home.empty_row(),draw_graph.home.row("color on",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.color_on], null),"The header key to vary node coloration by"),draw_graph.home.row("edges labels",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.edgelabels], null),"Edge meta key to use as an edge label"),draw_graph.home.empty_row(),draw_graph.home.empty_row(),draw_graph.home.row("highlight constraints",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.show_constraints], null),"Highlights all (rank) constraining edges, including ordinarily invisible generated cluster edges. For debugging layouts"),draw_graph.home.row("anneal bias",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.anneal_bias], null),"Favors left-right cluster expansion by this factor in TB/ BT layouts, ditto for top bottom in LR/ RL layouts"),draw_graph.home.row("cluster edges num",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.cluster_edges_num], null),"number of invisible edges to create between nodes in two clusters that have a cluster edge. See Help page for further information.")], null);
});
});
draw_graph.home.left_disp_opts2 = (function draw_graph$home$left_disp_opts2(state){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$controls2l,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$local_DASH_class.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))], null),draw_graph.home.label_row("graphviz"),draw_graph.home.row("layout",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.layout], null),"The Graphviz layout algorithm"),draw_graph.home.row("(node) fixedsize",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.fixedsize], null),"Nodes fixed in size or varied according to contents"),draw_graph.home.row("nodesep",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.nodesep], null),"Separation between nodes in inches"),draw_graph.home.row("overlap",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.overlap], null),"Determines how Graphviz removes overlapping edges")], null);
});
});
draw_graph.home.middle_disp_opts2 = (function draw_graph$home$middle_disp_opts2(state){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$controls2m,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$local_DASH_class.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))], null),draw_graph.home.empty_row(),draw_graph.home.row("rankdir",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.rankdir], null),"The layout direction e.g. TB mean Top Bottom etc"),draw_graph.home.row("splines",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.splines], null),"Controls the form of the edges in the graph"),draw_graph.home.row("ranksep",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.ranksep], null),"Separation between ranks in inches"),draw_graph.home.row("scale",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.scale], null),"Scales the graph up by this factor")], null);
});
});
draw_graph.home.right_disp_opts2 = (function draw_graph$home$right_disp_opts2(state){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$controls2r,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$local_DASH_class.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))], null),draw_graph.home.empty_row(),draw_graph.home.row("node shape",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.shape], null),"The shape used for nodes"),draw_graph.home.empty_row(),draw_graph.home.empty_row(),draw_graph.home.row("concentrate (edges)",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.concentrate], null),"Merge edges with a common end point"),draw_graph.home.row("edge constraints",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.constraint], null),"Sets whether edges influence rank in dot layouts")], null);
});
});
draw_graph.home.go_button = (function draw_graph$home$go_button(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,"go-button",cljs.core.cst$kw$on_DASH_click,draw_graph.home.get_svg], null),"draw-graph"], null);
});
draw_graph.home.go_button_loading = (function draw_graph$home$go_button_loading(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"go-button"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$fa$fa_DASH_circle_DASH_o_DASH_notch$fa_DASH_spin], null)," processing"], null);
});
draw_graph.home.process_button = (function draw_graph$home$process_button(){
return (function (){
if(cljs.core.truth_(cljs.core.deref(draw_graph.home.processing))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.go_button_loading], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.go_button], null);
}
});
});
draw_graph.home.save_button = (function draw_graph$home$save_button(){
return (function (){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(draw_graph.home.svg),draw_graph.home.default_svg_text)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,"save-button",cljs.core.cst$kw$on_DASH_click,(function (){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(draw_graph.home.svg),draw_graph.home.default_svg_text)){
return draw_graph.file.save_svg.cljs$core$IFn$_invoke$arity$variadic(draw_graph.home.svg,cljs.core.cst$kw$data_DASH_filename.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(draw_graph.home.local_state)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$layout.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(draw_graph.home.options))], 0));
} else {
return cljs.core.cst$kw$cluster_DASH_on.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(draw_graph.home.options));
}
})], null),"Save image"], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"save-button-disabled"], null),"Save image"], null);
}
});
});
draw_graph.home.controls = (function draw_graph$home$controls(state){
return (function (){
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$wrapper_DASH_class.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$item3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.load_button], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"or enter the data"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$item4,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"file-name"], null),cljs.core.cst$kw$data_DASH_filename.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(draw_graph.home.local_state))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$item5,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"editor"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.ace_editor,draw_graph.home.local_state], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.disp_opts_hdr,state], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.left_disp_opts1,state], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.middle_disp_opts1,state], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.right_disp_opts1,state], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.left_disp_opts2,state], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.middle_disp_opts2,state], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.right_disp_opts2,state], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$item9,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.process_button], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$item10,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.save_button], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$item11,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dangerouslySetInnerHTML,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$__html,cljs.core.deref(draw_graph.home.svg)], null)], null)], null)], null);
});
});
draw_graph.home.local_remote_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$lbl,"  local",cljs.core.cst$kw$class,"local"], null));
draw_graph.home.local_remote = (function draw_graph$home$local_remote(state){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a$local_DASH_remote,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
draw_graph.home.toggle(state,cljs.core.cst$kw$lbl,"  local","  remote");

draw_graph.home.toggle(state,cljs.core.cst$kw$class,"local","remote");

return draw_graph.home.toggle(draw_graph.home.local_state,cljs.core.cst$kw$local_DASH_dot,true,false);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,cljs.core.cst$kw$class.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))], null),cljs.core.cst$kw$lbl.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))], null)], null);
});
});
draw_graph.home.home_page = (function draw_graph$home$home_page(){
draw_graph.home.find_region();

return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$page,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",cljs.core.cst$kw$rel,"stylesheet"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$wrapper_DASH_banner,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$site_DASH_banner$banner1,"draw-graph",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.local_remote,draw_graph.home.local_remote_state], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$banner2$controls,"Examples  ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.example_dropdown], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$main,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.controls,draw_graph.home.disp_opts_state], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$warn,cljs.core.deref(draw_graph.home.warn)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$error,cljs.core.deref(draw_graph.home.error)], null)], null);
});
