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
goog.require('draw_graph.ip');
goog.require('goog.dom');
var module$node_modules$codemirror$lib$codemirror=shadow.js.require("module$node_modules$codemirror$lib$codemirror", {});
draw_graph.home.log = console.log;
draw_graph.home.default_svg_text = "<div/>";
draw_graph.home.local_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"options","options",99638489),draw_graph.examples.default_options,new cljs.core.Keyword(null,"processing","processing",-1576405467),false,new cljs.core.Keyword(null,"local-dot","local-dot",-2051990829),true,new cljs.core.Keyword(null,"error","error",-978969032),"",new cljs.core.Keyword(null,"warn","warn",-436710552),"",new cljs.core.Keyword(null,"svg","svg",856789142),draw_graph.home.default_svg_text,new cljs.core.Keyword(null,"data","data",-232669377),"",new cljs.core.Keyword(null,"region","region",270415120),null], null));
draw_graph.home.options = reagent.core.cursor(draw_graph.home.local_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489)], null));
draw_graph.home.svg = reagent.core.cursor(draw_graph.home.local_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142)], null));
draw_graph.home.processing = reagent.core.cursor(draw_graph.home.local_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"processing","processing",-1576405467)], null));
draw_graph.home.error = reagent.core.cursor(draw_graph.home.local_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null));
draw_graph.home.warn = reagent.core.cursor(draw_graph.home.local_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null));
draw_graph.home.local_dot = reagent.core.cursor(draw_graph.home.local_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"local-dot","local-dot",-2051990829)], null));
draw_graph.home.region = reagent.core.cursor(draw_graph.home.local_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"region","region",270415120)], null));
draw_graph.home.data = reagent.core.cursor(draw_graph.home.local_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null));
draw_graph.home.pan_zoom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
draw_graph.file.file_reader_listen((function (e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(draw_graph.home.local_state,cljs.core.merge,e);
}));
draw_graph.home._STAR_produce_dot_locally_STAR_ = true;
draw_graph.home.find_region = (function draw_graph$home$find_region(){
if((cljs.core.deref(draw_graph.home.region) == null)){
return draw_graph.ip.region((function (x){
return cljs.core.reset_BANG_(draw_graph.home.region,x);
}),(function (err){
return console.log(err);
}));
} else {
return null;
}
});
draw_graph.home.url_Europe = "https://0j6kjsk388.execute-api.eu-west-2.amazonaws.com/beta";
draw_graph.home.url_US = "https://u4jlt3tmhe.execute-api.us-east-1.amazonaws.com/beta";
draw_graph.home.lambda_url = (function draw_graph$home$lambda_url(){
var G__38895 = cljs.core.deref(draw_graph.home.region);
switch (G__38895) {
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
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-options","display-options",1066052168),draw_graph.home.remove_empty_strings(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(draw_graph.home.local_state))),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(draw_graph.home.local_state)),new cljs.core.Keyword(null,"format-in","format-in",1820661092),cljs.core.name(lib_draw_graph.processor.detect_format(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(draw_graph.home.local_state)))),new cljs.core.Keyword(null,"format-out","format-out",1283960670),"svg"], null);
});
draw_graph.home.__GT_dot = (function draw_graph$home$__GT_dot(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display-options","display-options",1066052168),draw_graph.home.remove_empty_strings(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(draw_graph.home.local_state))),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(draw_graph.home.local_state))], null);
});
draw_graph.home.dot__GT_svg = (function draw_graph$home$dot__GT_svg(data){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"format-in","format-in",1820661092),"dot",new cljs.core.Keyword(null,"format-out","format-out",1283960670),"svg"], null);
});
draw_graph.home.post = (function draw_graph$home$post(url,json_data){
return promesa.core.bind(promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(kvlt.core.request_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"body","body",-2049205669),json_data,new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"accept","accept",1874130431),new cljs.core.Keyword(null,"json","json",1279968570)], null)),(function (e){
var fexpr__38896 = cljs.core.ex_data(e);
return (fexpr__38896.cljs$core$IFn$_invoke$arity$1 ? fexpr__38896.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348)) : fexpr__38896.call(null,new cljs.core.Keyword(null,"type","type",1174270348)));
})),(function (p__38897){
var map__38898 = p__38897;
var map__38898__$1 = (((((!((map__38898 == null))))?(((((map__38898.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38898.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38898):map__38898);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38898__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38898__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
return promesa.core.promise(body);
}));
});
draw_graph.home.__GT_svg = (function draw_graph$home$__GT_svg(json_data){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(draw_graph.home.post,draw_graph.home.lambda_url())(json_data);
});
draw_graph.home.get_svg_element = (function draw_graph$home$get_svg_element(){
var svg = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__38900_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("svg",p1__38900_SHARP_.tagName);
}),document.getElementById("svg").childNodes);
if((cljs.core.count(svg) > (0))){
return cljs.core.first(svg);
} else {
return null;
}
});
draw_graph.home.reset_pan_zoom = (function draw_graph$home$reset_pan_zoom(){
cljs.core.reset_BANG_(draw_graph.home.pan_zoom,null);

var svg_element = draw_graph.home.get_svg_element();
if((!((svg_element == null)))){
return (new svgPanZoom(draw_graph.home.get_svg_element(),({"controlIconsEnabled": true})));
} else {
return null;
}
});
draw_graph.home.put_svg = (function draw_graph$home$put_svg(data){
var data_STAR__38944 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(data,"null"))?draw_graph.home.default_svg_text:data);

cljs.core.reset_BANG_(draw_graph.home.processing,false);

cljs.core.reset_BANG_(draw_graph.home.svg,data);

return draw_graph.home.reset_pan_zoom();
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
if(cljs.core.truth_(new cljs.core.Keyword(null,"svg","svg",856789142).cljs$core$IFn$_invoke$arity$1(result))){
cljs.core.reset_BANG_(draw_graph.home.svg,new cljs.core.Keyword(null,"svg","svg",856789142).cljs$core$IFn$_invoke$arity$1(result));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(result))){
cljs.core.reset_BANG_(draw_graph.home.error,new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(result));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"warn","warn",-436710552).cljs$core$IFn$_invoke$arity$1(result))){
cljs.core.reset_BANG_(draw_graph.home.warn,new cljs.core.Keyword(null,"warn","warn",-436710552).cljs$core$IFn$_invoke$arity$1(result));
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
return promesa.core.bind(promesa.core.catch$.cljs$core$IFn$_invoke$arity$2(Viz(dot),(function (e){
var fexpr__38901 = cljs.core.ex_data(e);
return (fexpr__38901.cljs$core$IFn$_invoke$arity$1 ? fexpr__38901.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348)) : fexpr__38901.call(null,new cljs.core.Keyword(null,"type","type",1174270348)));
})),(function (result){
return promesa.core.promise(result);
}));
});
draw_graph.home.local_dot__GT_svg = (function draw_graph$home$local_dot__GT_svg(g,opts,dot){
var dot_SINGLEQUOTE_ = clojure.string.replace(dot,/\\\\n/,"\n");
return promesa.core.error.cljs$core$IFn$_invoke$arity$2((function (error){
return draw_graph.home.put_error(error.message);
}),promesa.core.map(draw_graph.home.put_svg,promesa.core.map(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(lib_draw_graph.processor.postprocess_svg,g,opts),draw_graph.home.prom_viz(dot_SINGLEQUOTE_))));
});
draw_graph.home.lambda_dot__GT_svg = (function draw_graph$home$lambda_dot__GT_svg(g,opts,dot){
return promesa.core.error.cljs$core$IFn$_invoke$arity$2((function (error){
return draw_graph.home.put_error(error.message);
}),promesa.core.map(draw_graph.home.put_svg,promesa.core.map(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(lib_draw_graph.processor.postprocess_svg,g,opts),promesa.core.map(new cljs.core.Keyword(null,"svg","svg",856789142),promesa.core.map(draw_graph.utils.json__GT_clj,draw_graph.home.__GT_svg(draw_graph.utils.clj__GT_json(draw_graph.home.dot__GT_svg(dot))))))));
});
draw_graph.home.process_locally = (function draw_graph$home$process_locally(){
cljs.core.reset_BANG_(draw_graph.home.processing,true);

cljs.core.reset_BANG_(draw_graph.home.error,"");

cljs.core.reset_BANG_(draw_graph.home.warn,"");

try{var in$ = draw_graph.home.__GT_csv1();
var opts = new cljs.core.Keyword(null,"display-options","display-options",1066052168).cljs$core$IFn$_invoke$arity$1(in$);
var g = lib_draw_graph.processor.in__GT_g(in$);
var g_SINGLEQUOTE_ = lib_draw_graph.processor.preprocess_graph(g,opts);
var dot = lib_draw_graph.processor.g__GT_dot(in$,g_SINGLEQUOTE_);
if(cljs.core.truth_(cljs.core.deref(draw_graph.home.local_dot))){
return draw_graph.home.local_dot__GT_svg(g_SINGLEQUOTE_,opts,dot);
} else {
return draw_graph.home.lambda_dot__GT_svg(g_SINGLEQUOTE_,opts,dot);
}
}catch (e38902){if((e38902 instanceof Error)){
var e = e38902;
cljs.core.reset_BANG_(draw_graph.home.svg,draw_graph.home.default_svg_text);

return draw_graph.home.put_error(cljs.core.str.cljs$core$IFn$_invoke$arity$1(e));
} else {
throw e38902;

}
}});
draw_graph.home.get_svg = (function draw_graph$home$get_svg(){
if(cljs.core.truth_(draw_graph.home._STAR_produce_dot_locally_STAR_)){
return draw_graph.home.process_locally();
} else {
return draw_graph.home.process_remotely();
}
});
draw_graph.home.__GT_js = (function draw_graph$home$__GT_js(var_name){
return clojure.string.replace(clojure.string.replace(var_name,/\//,"."),/-/,"_");
});
draw_graph.home.invoke = (function draw_graph$home$invoke(var_args){
var args__4795__auto__ = [];
var len__4789__auto___38945 = arguments.length;
var i__4790__auto___38946 = (0);
while(true){
if((i__4790__auto___38946 < len__4789__auto___38945)){
args__4795__auto__.push((arguments[i__4790__auto___38946]));

var G__38947 = (i__4790__auto___38946 + (1));
i__4790__auto___38946 = G__38947;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return draw_graph.home.invoke.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(draw_graph.home.invoke.cljs$core$IFn$_invoke$arity$variadic = (function (function_name,args){
var fun = eval(draw_graph.home.__GT_js(function_name));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(fun,args);
}));

(draw_graph.home.invoke.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(draw_graph.home.invoke.cljs$lang$applyTo = (function (seq38903){
var G__38904 = cljs.core.first(seq38903);
var seq38903__$1 = cljs.core.next(seq38903);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38904,seq38903__$1);
}));

draw_graph.home.set_value = (function draw_graph$home$set_value(id,val){
if((!((val == null)))){
return (document.getElementById(id).value = val);
} else {
return null;
}
});
draw_graph.home.fixed_select = (function draw_graph$home$fixed_select(var_args){
var args__4795__auto__ = [];
var len__4789__auto___38948 = arguments.length;
var i__4790__auto___38949 = (0);
while(true){
if((i__4790__auto___38949 < len__4789__auto___38948)){
args__4795__auto__.push((arguments[i__4790__auto___38949]));

var G__38950 = (i__4790__auto___38949 + (1));
i__4790__auto___38949 = G__38950;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return draw_graph.home.fixed_select.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(draw_graph.home.fixed_select.cljs$core$IFn$_invoke$arity$variadic = (function (path,a,tabIndex,options){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.last(path),new cljs.core.Keyword(null,"values","values",372645556),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(a),path),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(draw_graph.home.local_state),path),new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),tabIndex,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__38905_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(draw_graph.home.local_state,cljs.core.update_in,path,(function (e){
return p1__38905_SHARP_.target.value;
}));
})], null),(function (){var iter__4582__auto__ = (function draw_graph$home$iter__38910(s__38911){
return (new cljs.core.LazySeq(null,(function (){
var s__38911__$1 = s__38911;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__38911__$1);
if(temp__5735__auto__){
var s__38911__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38911__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__38911__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__38913 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__38912 = (0);
while(true){
if((i__38912 < size__4581__auto__)){
var x = cljs.core._nth(c__4580__auto__,i__38912);
cljs.core.chunk_append(b__38913,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),x], null),x], null));

var G__38951 = (i__38912 + (1));
i__38912 = G__38951;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38913),draw_graph$home$iter__38910(cljs.core.chunk_rest(s__38911__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38913),null);
}
} else {
var x = cljs.core.first(s__38911__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),x], null),x], null),draw_graph$home$iter__38910(cljs.core.rest(s__38911__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(options);
})()], null);
}));

(draw_graph.home.fixed_select.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(draw_graph.home.fixed_select.cljs$lang$applyTo = (function (seq38906){
var G__38907 = cljs.core.first(seq38906);
var seq38906__$1 = cljs.core.next(seq38906);
var G__38908 = cljs.core.first(seq38906__$1);
var seq38906__$2 = cljs.core.next(seq38906__$1);
var G__38909 = cljs.core.first(seq38906__$2);
var seq38906__$3 = cljs.core.next(seq38906__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38907,G__38908,G__38909,seq38906__$3);
}));

draw_graph.home.text_input = (function draw_graph$home$text_input(path,a,tabIndex){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.last(path),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(a),path),new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),tabIndex,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__38914_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(draw_graph.home.local_state,cljs.core.update_in,path,(function (e){
return p1__38914_SHARP_.target.value;
}));
})], null)], null);
});
draw_graph.home.wide_text_input = (function draw_graph$home$wide_text_input(path,a,tabIndex){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.wide","input.wide",1879372921),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.last(path),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(a),path),new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),tabIndex,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__38915_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(draw_graph.home.local_state,cljs.core.update_in,path,(function (e){
return p1__38915_SHARP_.target.value;
}));
})], null)], null);
});
/**
 * Create a code-mirror editor. The parameters:
 *   value-atom (reagent atom)
 *  when this changes, the editor will update to reflect it.
 *   options
 *   :style (reagent style map)
 *  will be applied to the container element
 *   :js-cm-opts
 *  options passed into the CodeMirror constructor
 *   :on-cm-init (fn [cm] -> nil)
 *  called with the CodeMirror instance, for whatever extra fiddling you want to do.
 */
draw_graph.home.code_mirror = (function draw_graph$home$code_mirror(value_atom,p__38916){
var map__38917 = p__38916;
var map__38917__$1 = (((((!((map__38917 == null))))?(((((map__38917.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38917.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38917):map__38917);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38917__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var js_cm_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38917__$1,new cljs.core.Keyword(null,"js-cm-opts","js-cm-opts",1231776640));
var on_cm_init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38917__$1,new cljs.core.Keyword(null,"on-cm-init","on-cm-init",105207782));
var cm = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
var el = reagent.core.dom_node(this$);
var inst = (new CodeMirror(el,cljs.core.clj__GT_js(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"lineNumbers","lineNumbers",1374890941),true,new cljs.core.Keyword(null,"viewportMargin","viewportMargin",948056881),Infinity,new cljs.core.Keyword(null,"matchBrackets","matchBrackets",1256448936),true,new cljs.core.Keyword(null,"autofocus","autofocus",-712814732),true,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(value_atom),new cljs.core.Keyword(null,"autoCloseBrackets","autoCloseBrackets",1157493311),false,new cljs.core.Keyword(null,"mode","mode",654403691),"drawgraph"], null),js_cm_opts], 0)))));
cljs.core.reset_BANG_(cm,inst);

inst.on("change",(function (){
var value = inst.getValue();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,cljs.core.deref(value_atom))){
return null;
} else {
return cljs.core.reset_BANG_(value_atom,value);
}
}));

if(cljs.core.truth_(on_cm_init)){
return (on_cm_init.cljs$core$IFn$_invoke$arity$1 ? on_cm_init.cljs$core$IFn$_invoke$arity$1(inst) : on_cm_init.call(null,inst));
} else {
return null;
}
}),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (this$,old_argv){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(value_atom),cljs.core.deref(cm).getValue())){
return null;
} else {
return cljs.core.deref(cm).setValue(cljs.core.deref(value_atom));
}
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (_,___$1,___$2){
cljs.core.deref(value_atom);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.item5","div.item5",-884770574),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"editor",new cljs.core.Keyword(null,"style","style",-496642736),style], null)], null);
})], null));
});
draw_graph.home.url_encode = (function draw_graph$home$url_encode(string){
var G__38919 = string;
var G__38919__$1 = (((G__38919 == null))?null:cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38919));
var G__38919__$2 = (((G__38919__$1 == null))?null:encodeURIComponent(G__38919__$1));
if((G__38919__$2 == null)){
return null;
} else {
return G__38919__$2.replace("+","%20");
}
});
draw_graph.home.url_decode = (function draw_graph$home$url_decode(string){
var G__38920 = string;
var G__38920__$1 = (((G__38920 == null))?null:cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38920));
if((G__38920__$1 == null)){
return null;
} else {
return decodeURIComponent(G__38920__$1);
}
});
draw_graph.home.load_data_from_params = (function draw_graph$home$load_data_from_params(params_str){
try{var params = JSON.parse(draw_graph.home.url_decode(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(params_str,(1))));
var params__$1 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(params,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
if(cljs.core.truth_(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(params__$1))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(draw_graph.home.local_state,cljs.core.assoc,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(params__$1));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(params__$1))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(draw_graph.home.local_state,cljs.core.assoc,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(params__$1));
} else {
return null;
}
}catch (e38921){if((e38921 instanceof Error)){
var e = e38921;
return draw_graph.home.log("Error: Query string could not be converted to data!");
} else {
throw e38921;

}
}});
draw_graph.home.load_example_data = (function draw_graph$home$load_example_data(ex_fn){
var example = draw_graph.home.invoke(ex_fn);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(draw_graph.home.local_state,cljs.core.assoc,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(example));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(draw_graph.home.local_state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(example),new cljs.core.Keyword(null,"data-filename","data-filename",1476355539),""], null));
});
draw_graph.home.example_dropdown = (function draw_graph$home$example_dropdown(){
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),(1),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__38922_SHARP_){
return draw_graph.home.load_example_data(p1__38922_SHARP_.target.value);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null),"-"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"draw-graph.examples/example1"], null),"Friendship graph"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"draw-graph.examples/example1b"], null),"Friendship graph with synonyms"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"draw-graph.examples/example1c"], null),"Friendship graph with synonyms json"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"draw-graph.examples/example2"], null),"Two facing trees"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"draw-graph.examples/example3"], null),"Two trees"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"draw-graph.examples/example4"], null),"CERN email connections"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"draw-graph.examples/example5"], null),"Circular tree"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"draw-graph.examples/example6"], null),"cluster layout"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"draw-graph.examples/example7"], null),"complex cluster layout"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"draw-graph.examples/example8"], null),"Architecture diagram"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"draw-graph.examples/example9"], null),"Complex architecture diagram"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"draw-graph.examples/example9b"], null),"Complex architecture diagram json"], null)], null);
});
draw_graph.home.get_position = (function draw_graph$home$get_position(){
var geo = navigator.geolocation;
return geo.getCurrentPosition(cljs.core.identity);
});
draw_graph.home.click_upload_csv_hidden = (function draw_graph$home$click_upload_csv_hidden(e){
return document.getElementById("upload-csv-hidden").click();
});
draw_graph.home.load_button = (function draw_graph$home$load_button(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"upload-csv",new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),(2),new cljs.core.Keyword(null,"on-click","on-click",1632826543),draw_graph.home.click_upload_csv_hidden,new cljs.core.Keyword(null,"title","title",636505583),"Upload a csv in 'csv1' format. see help"], null),"Load csv"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"upload-csv-hidden",new cljs.core.Keyword(null,"type","type",1174270348),"file",new cljs.core.Keyword(null,"accept","accept",1874130431),".csv",new cljs.core.Keyword(null,"on-change","on-change",-732046149),draw_graph.file.file_reader_put], null)], null)], null);
});
draw_graph.home.data_input = (function draw_graph$home$data_input(value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"wrap","wrap",851669987),new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),new cljs.core.Keyword(null,"autoComplete","autoComplete",-219243415),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"spellCheck","spellCheck",331078550),new cljs.core.Keyword(null,"autoCorrect","autoCorrect",448626584),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"autoCapitalize","autoCapitalize",438011742)],["soft",(3),"on",new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(value)),(20),"tweak-box","false","off",(function (p1__38923_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(value,cljs.core.assoc,new cljs.core.Keyword(null,"data","data",-232669377),p1__38923_SHARP_.target.value);
}),"off"])], null)], null);
});
/**
 * detects the format of :data in the state atom.
 */
draw_graph.home.format = (function draw_graph$home$format(data){
try{return lib_draw_graph.processor.detect_format(data);
}catch (e38924){if((e38924 instanceof Error)){
var e = e38924;
return null;
} else {
throw e38924;

}
}});
draw_graph.home.first_line = (function draw_graph$home$first_line(s){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2((s.split("\n")[(0)]),(2)).split(":"));
});
draw_graph.home.get_headers = (function draw_graph$home$get_headers(data){
var fmt = draw_graph.home.format(data);
var G__38925 = fmt;
var G__38925__$1 = (((G__38925 instanceof cljs.core.Keyword))?G__38925.fqn:null);
switch (G__38925__$1) {
case "json":
try{return new cljs.core.Keyword(null,"header","header",119441134).cljs$core$IFn$_invoke$arity$1(lib_draw_graph.parser.parse_csv_or_json(data,new cljs.core.Keyword(null,"json","json",1279968570)));
}catch (e38926){if((e38926 instanceof Error)){
var e = e38926;
return null;
} else {
throw e38926;

}
}
break;
case "csv":
return draw_graph.home.first_line(data);

break;
default:
return null;

}
});
draw_graph.home.headers = reagent.ratom.make_reaction((function (){
return draw_graph.home.get_headers(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(draw_graph.home.local_state)));
}));
draw_graph.home.node_label = (function draw_graph$home$node_label(){
return draw_graph.home.text_input(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"label","label",1718410804)], null),draw_graph.home.local_state,(4));
});
draw_graph.home.cluster_on = (function draw_graph$home$cluster_on(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select.form-control","select.form-control",696610397),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"cluster-on","cluster-on",-499953258),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"cluster-on","cluster-on",-499953258).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(draw_graph.home.options)),new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),(5),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__38927_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(draw_graph.home.local_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"cluster-on","cluster-on",-499953258)], null),(function (e){
return p1__38927_SHARP_.target.value;
}));
})], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",cljs.core.first(cljs.core.deref(draw_graph.home.headers))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"none",new cljs.core.Keyword(null,"value","value",305978217),""], null),"-"], null):cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"none",new cljs.core.Keyword(null,"value","value",305978217),""], null),"-"], null),(function (){var iter__4582__auto__ = (function draw_graph$home$cluster_on_$_iter__38928(s__38929){
return (new cljs.core.LazySeq(null,(function (){
var s__38929__$1 = s__38929;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__38929__$1);
if(temp__5735__auto__){
var s__38929__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38929__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__38929__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__38931 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__38930 = (0);
while(true){
if((i__38930 < size__4581__auto__)){
var x = cljs.core._nth(c__4580__auto__,i__38930);
cljs.core.chunk_append(b__38931,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),x], null),x], null));

var G__38953 = (i__38930 + (1));
i__38930 = G__38953;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38931),draw_graph$home$cluster_on_$_iter__38928(cljs.core.chunk_rest(s__38929__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38931),null);
}
} else {
var x = cljs.core.first(s__38929__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),x], null),x], null),draw_graph$home$cluster_on_$_iter__38928(cljs.core.rest(s__38929__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.deref(draw_graph.home.headers));
})()))], null);
});
draw_graph.home.color_on = (function draw_graph$home$color_on(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select.form-control","select.form-control",696610397),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"color-on","color-on",-1658319802),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"color-on","color-on",-1658319802).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(draw_graph.home.options)),new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),(6),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__38932_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(draw_graph.home.local_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"color-on","color-on",-1658319802)], null),(function (e){
return p1__38932_SHARP_.target.value;
}));
})], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",cljs.core.first(cljs.core.deref(draw_graph.home.headers))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"none",new cljs.core.Keyword(null,"value","value",305978217),""], null),"-"], null):cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"none",new cljs.core.Keyword(null,"value","value",305978217),""], null),"-"], null),(function (){var iter__4582__auto__ = (function draw_graph$home$color_on_$_iter__38933(s__38934){
return (new cljs.core.LazySeq(null,(function (){
var s__38934__$1 = s__38934;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__38934__$1);
if(temp__5735__auto__){
var s__38934__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38934__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__38934__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__38936 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__38935 = (0);
while(true){
if((i__38935 < size__4581__auto__)){
var x = cljs.core._nth(c__4580__auto__,i__38935);
cljs.core.chunk_append(b__38936,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),x], null),x], null));

var G__38954 = (i__38935 + (1));
i__38935 = G__38954;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38936),draw_graph$home$color_on_$_iter__38933(cljs.core.chunk_rest(s__38934__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38936),null);
}
} else {
var x = cljs.core.first(s__38934__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),x], null),x], null),draw_graph$home$color_on_$_iter__38933(cljs.core.rest(s__38934__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.deref(draw_graph.home.headers));
})()))], null);
});
draw_graph.home.tooltip = (function draw_graph$home$tooltip(){
return draw_graph.home.text_input(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058)], null),draw_graph.home.local_state,(7));
});
draw_graph.home.url = (function draw_graph$home$url(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select.form-control","select.form-control",696610397),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(draw_graph.home.options)),new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),(8),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__38937_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(draw_graph.home.local_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046)], null),(function (e){
return p1__38937_SHARP_.target.value;
}));
})], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",cljs.core.first(cljs.core.deref(draw_graph.home.headers))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"none",new cljs.core.Keyword(null,"value","value",305978217),""], null),"-"], null):cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),"none",new cljs.core.Keyword(null,"value","value",305978217),""], null),"-"], null),(function (){var iter__4582__auto__ = (function draw_graph$home$url_$_iter__38938(s__38939){
return (new cljs.core.LazySeq(null,(function (){
var s__38939__$1 = s__38939;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__38939__$1);
if(temp__5735__auto__){
var s__38939__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38939__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__38939__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__38941 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__38940 = (0);
while(true){
if((i__38940 < size__4581__auto__)){
var x = cljs.core._nth(c__4580__auto__,i__38940);
cljs.core.chunk_append(b__38941,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),x], null),x], null));

var G__38955 = (i__38940 + (1));
i__38940 = G__38955;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38941),draw_graph$home$url_$_iter__38938(cljs.core.chunk_rest(s__38939__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38941),null);
}
} else {
var x = cljs.core.first(s__38939__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),x], null),x], null),draw_graph$home$url_$_iter__38938(cljs.core.rest(s__38939__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.deref(draw_graph.home.headers));
})()))], null);
});
draw_graph.home.edgelabels = (function draw_graph$home$edgelabels(){
return draw_graph.home.text_input(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"edge-label","edge-label",1582257813)], null),draw_graph.home.local_state,(9));
});
draw_graph.home.filtergraph = (function draw_graph$home$filtergraph(){
return draw_graph.home.text_input(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"filter-graph","filter-graph",-1851101907)], null),draw_graph.home.local_state,(10));
});
draw_graph.home.paths = (function draw_graph$home$paths(){
return draw_graph.home.wide_text_input(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"paths","paths",-1807389588)], null),draw_graph.home.local_state,(11));
});
draw_graph.home.elide_levels = (function draw_graph$home$elide_levels(){
return draw_graph.home.fixed_select.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"elide","elide",-1239101386)], null),draw_graph.home.local_state,(12),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["0","1","2","3","4"], 0));
});
draw_graph.home.show_roots = (function draw_graph$home$show_roots(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"show-roots?","show-roots?",-1350839449),new cljs.core.Keyword(null,"checked","checked",-50955819),new cljs.core.Keyword(null,"show-roots?","show-roots?",-1350839449).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(draw_graph.home.options)),new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),(13),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(draw_graph.home.local_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"show-roots?","show-roots?",-1350839449)], null),cljs.core.not);
})], null)], null);
});
draw_graph.home.show_constraints = (function draw_graph$home$show_constraints(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"show-constraints?","show-constraints?",1802138993),new cljs.core.Keyword(null,"checked","checked",-50955819),new cljs.core.Keyword(null,"show-constraints?","show-constraints?",1802138993).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(draw_graph.home.options)),new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),(14),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(draw_graph.home.local_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"show-constraints?","show-constraints?",1802138993)], null),cljs.core.not);
})], null)], null);
});
draw_graph.home.pp_QMARK_ = (function draw_graph$home$pp_QMARK_(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"pp?","pp?",-28451498),new cljs.core.Keyword(null,"checked","checked",-50955819),new cljs.core.Keyword(null,"post-process?","post-process?",-621728918).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(draw_graph.home.options)),new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),(15),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(draw_graph.home.local_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"post-process?","post-process?",-621728918)], null),cljs.core.not);
})], null)], null);
});
draw_graph.home.pp_clusters = (function draw_graph$home$pp_clusters(){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.lbl","a.lbl",2026297244),"\u2191"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"pp-clusters-top?","pp-clusters-top?",-1690443633),new cljs.core.Keyword(null,"checked","checked",-50955819),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pp-clusters","pp-clusters",478062894).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(draw_graph.home.options))),new cljs.core.Keyword(null,"tab-index","tab-index",895755393),(16),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(draw_graph.home.local_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"pp-clusters","pp-clusters",478062894),new cljs.core.Keyword(null,"y","y",-1757859776)], null),cljs.core.not);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.lbl","a.lbl",2026297244),["\u00A0","\u00A0","\u00A0","\u00A0","\u2193"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"pp-clusters-bottom?","pp-clusters-bottom?",-518365929),new cljs.core.Keyword(null,"checked","checked",-50955819),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pp-clusters","pp-clusters",478062894).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(draw_graph.home.options))),new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),(17),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(draw_graph.home.local_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"pp-clusters","pp-clusters",478062894),new cljs.core.Keyword(null,"h","h",1109658740)], null),cljs.core.not);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.lbl","a.lbl",2026297244),["\u00A0","\u00A0","\u2190"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"pp-clusters-left?","pp-clusters-left?",-897369103),new cljs.core.Keyword(null,"checked","checked",-50955819),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pp-clusters","pp-clusters",478062894).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(draw_graph.home.options))),new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),(18),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(draw_graph.home.local_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"pp-clusters","pp-clusters",478062894),new cljs.core.Keyword(null,"x","x",2099068185)], null),cljs.core.not);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.lbl","a.lbl",2026297244),["\u00A0","\u00A0","\u2192"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"pp-clusters-right?","pp-clusters-right?",809156819),new cljs.core.Keyword(null,"checked","checked",-50955819),new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pp-clusters","pp-clusters",478062894).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(draw_graph.home.options))),new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),(19),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(draw_graph.home.local_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"pp-clusters","pp-clusters",478062894),new cljs.core.Keyword(null,"w","w",354169001)], null),cljs.core.not);
})], null)], null)], null);
});
draw_graph.home.anneal_bias = (function draw_graph$home$anneal_bias(){
return draw_graph.home.fixed_select.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"pp-anneal-bias","pp-anneal-bias",1268244973)], null),draw_graph.home.local_state,(20),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["0","1","2","3","4","5","6","7","8","9","10","11","12"], 0));
});
draw_graph.home.pp_cluster_sep = (function draw_graph$home$pp_cluster_sep(){
return draw_graph.home.text_input(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"pp-cluster-sep","pp-cluster-sep",335802146)], null),draw_graph.home.local_state,(21));
});
draw_graph.home.pp_font = (function draw_graph$home$pp_font(){
return draw_graph.home.text_input(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"pp-font","pp-font",1885164896)], null),draw_graph.home.local_state,(22));
});
draw_graph.home.cluster_edges_num = (function draw_graph$home$cluster_edges_num(){
return draw_graph.home.fixed_select.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"num-cluster-edges","num-cluster-edges",1635811939)], null),draw_graph.home.local_state,(23),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["1","2","4","5","6","9","12","16"], 0));
});
draw_graph.home.layout = (function draw_graph$home$layout(){
return draw_graph.home.fixed_select.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"layout","layout",-2120940921)], null),draw_graph.home.local_state,(24),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dot","neato","fdp","circo","twopi","patchwork"], 0));
});
draw_graph.home.rankdir = (function draw_graph$home$rankdir(){
return draw_graph.home.fixed_select.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"rankdir","rankdir",-2029540135)], null),draw_graph.home.local_state,(25),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["LR","TB","RL","BT"], 0));
});
draw_graph.home.shape = (function draw_graph$home$shape(){
return draw_graph.home.fixed_select.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"shape","shape",1190694006)], null),draw_graph.home.local_state,(26),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["ellipse","rect","circle","egg","diamond","octagon","square","folder","cylinder","plaintext"], 0));
});
draw_graph.home.fixedsize = (function draw_graph$home$fixedsize(){
return draw_graph.home.fixed_select.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"fixedsize","fixedsize",1191363170)], null),draw_graph.home.local_state,(27),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["true","false","shape"], 0));
});
draw_graph.home.splines = (function draw_graph$home$splines(){
return draw_graph.home.fixed_select.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"splines","splines",1787583529)], null),draw_graph.home.local_state,(28),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["line","spline","none","polyline","ortho","curved"], 0));
});
draw_graph.home.nodesep = (function draw_graph$home$nodesep(){
return draw_graph.home.text_input(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"nodesep","nodesep",-245901571)], null),draw_graph.home.local_state,(29));
});
draw_graph.home.ranksep = (function draw_graph$home$ranksep(){
return draw_graph.home.text_input(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"ranksep","ranksep",-765843218)], null),draw_graph.home.local_state,(30));
});
draw_graph.home.concentrate = (function draw_graph$home$concentrate(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"concentrate","concentrate",-1050197650),new cljs.core.Keyword(null,"checked","checked",-50955819),new cljs.core.Keyword(null,"concentrate","concentrate",-1050197650).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(draw_graph.home.options)),new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),(31),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(draw_graph.home.local_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"concentrate","concentrate",-1050197650)], null),cljs.core.not);
})], null)], null);
});
draw_graph.home.overlap = (function draw_graph$home$overlap(){
return draw_graph.home.fixed_select.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"overlap","overlap",-1673335644)], null),draw_graph.home.local_state,(32),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["true","false","scale","scalexy","compress","vpsc","orthoxy","ipsep"], 0));
});
draw_graph.home.scale = (function draw_graph$home$scale(){
return draw_graph.home.text_input(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"scale","scale",-230427353)], null),draw_graph.home.local_state,(33));
});
draw_graph.home.constraint = (function draw_graph$home$constraint(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"constraint?","constraint?",-1149589639),new cljs.core.Keyword(null,"checked","checked",-50955819),new cljs.core.Keyword(null,"constraint","constraint",1725147424).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(draw_graph.home.options)),new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),(34),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(draw_graph.home.local_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"constraint","constraint",1725147424)], null),cljs.core.not);
})], null)], null);
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
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var fexpr__38942 = cljs.core.deref(a);
return (fexpr__38942.cljs$core$IFn$_invoke$arity$1 ? fexpr__38942.cljs$core$IFn$_invoke$arity$1(k) : fexpr__38942.call(null,k));
})(),v1)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(a,cljs.core.assoc,k,v2);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(a,cljs.core.assoc,k,v1);
}
});
draw_graph.home.disp_opts_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"local-class","local-class",1003799540),"hidden",new cljs.core.Keyword(null,"wrapper-class","wrapper-class",1300340883),"wrapper controls wrapper-collapsed",new cljs.core.Keyword(null,"lbl","lbl",-940407849),"show"], null));
draw_graph.home.disp_opts_hdr = (function draw_graph$home$disp_opts_hdr(state){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.item6","div.item6",2112051463),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.opts-hdr","div.opts-hdr",-1163202587),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
draw_graph.home.toggle(state,new cljs.core.Keyword(null,"lbl","lbl",-940407849),"show","hide");

draw_graph.home.toggle(state,new cljs.core.Keyword(null,"local-class","local-class",1003799540),"hidden","visible");

return draw_graph.home.toggle(state,new cljs.core.Keyword(null,"wrapper-class","wrapper-class",1300340883),"wrapper controls wrapper-collapsed","wrapper controls");
})], null),"Options",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.lbl.show-hide","a.lbl.show-hide",260798103),new cljs.core.Keyword(null,"lbl","lbl",-940407849).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))], null)], null)], null);
});
});
draw_graph.home.left_disp_opts1 = (function draw_graph$home$left_disp_opts1(state){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.controls1l","div.controls1l",-911306256),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"local-class","local-class",1003799540).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))], null),draw_graph.home.label_row("draw-graph"),draw_graph.home.row("node labels",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.node_label], null),"The header key to use for the node label"),draw_graph.home.row("node tooltips",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.tooltip], null),"The header key to use for tooltips embedded in the final svg"),draw_graph.home.row("filter graph",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.filtergraph], null),"Filters the graph - good for zooming in"),draw_graph.home.row("elide lower levels",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.elide_levels], null),"Hide <n> lowest levels in the graph"),draw_graph.home.row("post process",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.pp_QMARK_], null),"Post Procees the svg: anneal clusters and font replacement"),draw_graph.home.row("anneal cluster separation",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.pp_cluster_sep], null),"How close clusters are allowed to get in pixels during annealing")], null);
});
});
draw_graph.home.middle_disp_opts1 = (function draw_graph$home$middle_disp_opts1(state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.controls1m","div.controls1m",1059186765),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"local-class","local-class",1003799540).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))], null),draw_graph.home.empty_row(),draw_graph.home.row("cluster on",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.cluster_on], null),"The header key to cluster the graph on"),draw_graph.home.row("node URL",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.url], null),"The header key to use as an embedded link in the final svg"),draw_graph.home.row("paths",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.paths], null),"Filter the graph by paths through it. see help page."),draw_graph.home.row("highlight roots",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.show_roots], null),"Highlights the roots of the graph"),draw_graph.home.row("anneal expand clusters",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.pp_clusters], null),"Controls which dimensions of clusters are expanded in post processing"),draw_graph.home.row("font",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.pp_font], null),"The name of the replacement font to use in post processing"),draw_graph.home.empty_row(),draw_graph.home.empty_row()], null);
});
});
draw_graph.home.right_disp_opts1 = (function draw_graph$home$right_disp_opts1(state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.controls1r","div.controls1r",-903319148),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"local-class","local-class",1003799540).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))], null),draw_graph.home.empty_row(),draw_graph.home.row("color on",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.color_on], null),"The header key to vary node coloration by"),draw_graph.home.row("edges labels",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.edgelabels], null),"Edge meta key to use as an edge label"),draw_graph.home.empty_row(),draw_graph.home.empty_row(),draw_graph.home.row("highlight constraints",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.show_constraints], null),"Highlights all (rank) constraining edges, including ordinarily invisible generated cluster edges. For debugging layouts"),draw_graph.home.row("anneal bias",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.anneal_bias], null),"Favors left-right cluster expansion by this factor in TB/ BT layouts, ditto for top bottom in LR/ RL layouts"),draw_graph.home.row("cluster edges num",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.cluster_edges_num], null),"number of invisible edges to create between nodes in two clusters that have a cluster edge. See Help page for further information.")], null);
});
});
draw_graph.home.left_disp_opts2 = (function draw_graph$home$left_disp_opts2(state){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.controls2l","div.controls2l",1906600192),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"local-class","local-class",1003799540).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))], null),draw_graph.home.label_row("graphviz"),draw_graph.home.row("layout",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.layout], null),"The Graphviz layout algorithm"),draw_graph.home.row("(node) fixedsize",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.fixedsize], null),"Nodes fixed in size or varied according to contents"),draw_graph.home.row("nodesep",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.nodesep], null),"Separation between nodes in inches"),draw_graph.home.row("overlap",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.overlap], null),"Determines how Graphviz removes overlapping edges")], null);
});
});
draw_graph.home.middle_disp_opts2 = (function draw_graph$home$middle_disp_opts2(state){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.controls2m","div.controls2m",908518123),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"local-class","local-class",1003799540).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))], null),draw_graph.home.empty_row(),draw_graph.home.row("rankdir",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.rankdir], null),"The layout direction e.g. TB mean Top Bottom etc"),draw_graph.home.row("splines",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.splines], null),"Controls the form of the edges in the graph"),draw_graph.home.row("ranksep",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.ranksep], null),"Separation between ranks in inches"),draw_graph.home.row("scale",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.scale], null),"Scales the graph up by this factor")], null);
});
});
draw_graph.home.right_disp_opts2 = (function draw_graph$home$right_disp_opts2(state){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.controls2r","div.controls2r",-1439017299),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"local-class","local-class",1003799540).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))], null),draw_graph.home.empty_row(),draw_graph.home.row("node shape",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.shape], null),"The shape used for nodes"),draw_graph.home.empty_row(),draw_graph.home.empty_row(),draw_graph.home.row("concentrate (edges)",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.concentrate], null),"Merge edges with a common end point"),draw_graph.home.row("edge constraints",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.constraint], null),"Sets whether edges influence rank in dot layouts")], null);
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"save-button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(draw_graph.home.svg),draw_graph.home.default_svg_text)){
return draw_graph.file.save_svg.cljs$core$IFn$_invoke$arity$variadic(draw_graph.home.svg,new cljs.core.Keyword(null,"data-filename","data-filename",1476355539).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(draw_graph.home.local_state)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"layout","layout",-2120940921).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(draw_graph.home.options))], 0));
} else {
return new cljs.core.Keyword(null,"cluster-on","cluster-on",-499953258).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(draw_graph.home.options));
}
})], null),"Save image"], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"save-button-disabled"], null),"Save image"], null);
}
});
});
/**
 * 
 */
draw_graph.home.svg_div = (function draw_graph$home$svg_div(value_atom){
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
return null;
}),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (this$,old_argv){
var el = draw_graph.home.get_svg_element();
if(cljs.core.truth_(el)){
el.setAttribute("id","the-svg");
} else {
}

return draw_graph.home.reset_pan_zoom();
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (_,___$1,___$2){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#svg","div#svg",380276348),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),cljs.core.deref(draw_graph.home.svg)], null)], null)], null);
})], null));
});
draw_graph.home.local_remote_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lbl","lbl",-940407849),"  local",new cljs.core.Keyword(null,"class","class",-2030961996),"local"], null));
draw_graph.home.local_remote = (function draw_graph$home$local_remote(state){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.local-remote","a.local-remote",-1881278711),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
draw_graph.home.toggle(state,new cljs.core.Keyword(null,"lbl","lbl",-940407849),"  local","  remote");

draw_graph.home.toggle(state,new cljs.core.Keyword(null,"class","class",-2030961996),"local","remote");

return draw_graph.home.toggle(draw_graph.home.local_state,new cljs.core.Keyword(null,"local-dot","local-dot",-2051990829),true,false);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))], null),new cljs.core.Keyword(null,"lbl","lbl",-940407849).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))], null)], null);
});
});
draw_graph.home.controls = (function draw_graph$home$controls(state){
return (function (){
return new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"wrapper-class","wrapper-class",1300340883).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.site-banner.banner1","div.site-banner.banner1",-234066853),"draw-graph",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.local_remote,draw_graph.home.local_remote_state], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.banner2.controls","div.banner2.controls",1952181281),"Examples  ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.example_dropdown], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.item3","div.item3",2106942238),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.load_button], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"or enter the data"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.item4","div.item4",-1279097434),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"file-name"], null),new cljs.core.Keyword(null,"data-filename","data-filename",1476355539).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(draw_graph.home.local_state))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.code_mirror,draw_graph.home.data], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.disp_opts_hdr,state], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.left_disp_opts1,state], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.middle_disp_opts1,state], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.right_disp_opts1,state], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.left_disp_opts2,state], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.middle_disp_opts2,state], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.right_disp_opts2,state], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.item9","div.item9",1400396919),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.process_button], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.item10","div.item10",-1541683635),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.save_button], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.svg_div], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.warn","div.warn",-1554453780),cljs.core.deref(draw_graph.home.warn)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.error","div.error",314336058),cljs.core.deref(draw_graph.home.error)], null)], null);
});
});
draw_graph.home.get_params = (function draw_graph$home$get_params(){
var params = window.location.search;
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",params)))){
return draw_graph.home.load_data_from_params(window.location.search);
} else {
return null;
}
});
draw_graph.home.home_page = (function draw_graph$home$home_page(){
draw_graph.home.find_region();

draw_graph.home.get_params();

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.page","div.page",1917984906),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.main","div.main",-117780813),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.home.controls,draw_graph.home.disp_opts_state], null)], null)], null);
});

//# sourceMappingURL=draw_graph.home.js.map
