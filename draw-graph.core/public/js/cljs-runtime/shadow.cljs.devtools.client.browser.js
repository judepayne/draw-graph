goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.active_modules_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.active_modules_ref = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
shadow.cljs.devtools.client.browser.module_loaded = (function shadow$cljs$devtools$client$browser$module_loaded(name){
return shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IDeref$_deref$arity$1(null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name)));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___35548 = arguments.length;
var i__4731__auto___35549 = (0);
while(true){
if((i__4731__auto___35549 < len__4730__auto___35548)){
args__4736__auto__.push((arguments[i__4731__auto___35549]));

var G__35550 = (i__4731__auto___35549 + (1));
i__4731__auto___35549 = G__35550;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
return console.log.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),"color: blue;"], null),args)));
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq35354){
var G__35355 = cljs.core.first(seq35354);
var seq35354__$1 = cljs.core.next(seq35354);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35355,seq35354__$1);
});

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5718__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5718__auto__)){
var s = temp__5718__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__35358){
var map__35359 = p__35358;
var map__35359__$1 = (((((!((map__35359 == null))))?(((((map__35359.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35359.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35359):map__35359);
var src = map__35359__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35359__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35359__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__4131__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.module_is_active_QMARK_ = (function shadow$cljs$devtools$client$browser$module_is_active_QMARK_(module){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.cljs.devtools.client.browser.active_modules_ref),module);
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__35361 = cljs.core.seq(sources);
var chunk__35362 = null;
var count__35363 = (0);
var i__35364 = (0);
while(true){
if((i__35364 < count__35363)){
var map__35369 = chunk__35362.cljs$core$IIndexed$_nth$arity$2(null,i__35364);
var map__35369__$1 = (((((!((map__35369 == null))))?(((((map__35369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35369.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35369):map__35369);
var src = map__35369__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35369__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35369__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35369__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35369__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__35553 = seq__35361;
var G__35554 = chunk__35362;
var G__35555 = count__35363;
var G__35556 = (i__35364 + (1));
seq__35361 = G__35553;
chunk__35362 = G__35554;
count__35363 = G__35555;
i__35364 = G__35556;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__35361);
if(temp__5720__auto__){
var seq__35361__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35361__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35361__$1);
var G__35557 = cljs.core.chunk_rest(seq__35361__$1);
var G__35558 = c__4550__auto__;
var G__35559 = cljs.core.count(c__4550__auto__);
var G__35560 = (0);
seq__35361 = G__35557;
chunk__35362 = G__35558;
count__35363 = G__35559;
i__35364 = G__35560;
continue;
} else {
var map__35371 = cljs.core.first(seq__35361__$1);
var map__35371__$1 = (((((!((map__35371 == null))))?(((((map__35371.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35371.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35371):map__35371);
var src = map__35371__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35371__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35371__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35371__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35371__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__35561 = cljs.core.next(seq__35361__$1);
var G__35562 = null;
var G__35563 = (0);
var G__35564 = (0);
seq__35361 = G__35561;
chunk__35362 = G__35562;
count__35363 = G__35563;
i__35364 = G__35564;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__35373 = cljs.core.seq(js_requires);
var chunk__35374 = null;
var count__35375 = (0);
var i__35376 = (0);
while(true){
if((i__35376 < count__35375)){
var js_ns = chunk__35374.cljs$core$IIndexed$_nth$arity$2(null,i__35376);
var require_str_35565 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35565);


var G__35568 = seq__35373;
var G__35569 = chunk__35374;
var G__35570 = count__35375;
var G__35571 = (i__35376 + (1));
seq__35373 = G__35568;
chunk__35374 = G__35569;
count__35375 = G__35570;
i__35376 = G__35571;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__35373);
if(temp__5720__auto__){
var seq__35373__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35373__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35373__$1);
var G__35573 = cljs.core.chunk_rest(seq__35373__$1);
var G__35574 = c__4550__auto__;
var G__35575 = cljs.core.count(c__4550__auto__);
var G__35576 = (0);
seq__35373 = G__35573;
chunk__35374 = G__35574;
count__35375 = G__35575;
i__35376 = G__35576;
continue;
} else {
var js_ns = cljs.core.first(seq__35373__$1);
var require_str_35577 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35577);


var G__35578 = cljs.core.next(seq__35373__$1);
var G__35579 = null;
var G__35580 = (0);
var G__35581 = (0);
seq__35373 = G__35578;
chunk__35374 = G__35579;
count__35375 = G__35580;
i__35376 = G__35581;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__35379 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__35379) : callback.call(null,G__35379));
} else {
var G__35380 = shadow.cljs.devtools.client.env.files_url();
var G__35381 = ((function (G__35380){
return (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});})(G__35380))
;
var G__35382 = "POST";
var G__35383 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__35384 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__35380,G__35381,G__35382,G__35383,G__35384);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__35386){
var map__35387 = p__35386;
var map__35387__$1 = (((((!((map__35387 == null))))?(((((map__35387.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35387.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35387):map__35387);
var msg = map__35387__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35387__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35387__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__35389 = info;
var map__35389__$1 = (((((!((map__35389 == null))))?(((((map__35389.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35389.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35389):map__35389);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35389__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35389__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = ((function (map__35389,map__35389__$1,sources,compiled,map__35387,map__35387__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35391(s__35392){
return (new cljs.core.LazySeq(null,((function (map__35389,map__35389__$1,sources,compiled,map__35387,map__35387__$1,msg,info,reload_info){
return (function (){
var s__35392__$1 = s__35392;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__35392__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var map__35397 = cljs.core.first(xs__6277__auto__);
var map__35397__$1 = (((((!((map__35397 == null))))?(((((map__35397.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35397.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35397):map__35397);
var src = map__35397__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35397__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35397__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4519__auto__ = ((function (s__35392__$1,map__35397,map__35397__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__35389,map__35389__$1,sources,compiled,map__35387,map__35387__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35391_$_iter__35393(s__35394){
return (new cljs.core.LazySeq(null,((function (s__35392__$1,map__35397,map__35397__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__35389,map__35389__$1,sources,compiled,map__35387,map__35387__$1,msg,info,reload_info){
return (function (){
var s__35394__$1 = s__35394;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__35394__$1);
if(temp__5720__auto____$1){
var s__35394__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35394__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__35394__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__35396 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__35395 = (0);
while(true){
if((i__35395 < size__4522__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__35395);
cljs.core.chunk_append(b__35396,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__35585 = (i__35395 + (1));
i__35395 = G__35585;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35396),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35391_$_iter__35393(cljs.core.chunk_rest(s__35394__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35396),null);
}
} else {
var warning = cljs.core.first(s__35394__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35391_$_iter__35393(cljs.core.rest(s__35394__$2)));
}
} else {
return null;
}
break;
}
});})(s__35392__$1,map__35397,map__35397__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__35389,map__35389__$1,sources,compiled,map__35387,map__35387__$1,msg,info,reload_info))
,null,null));
});})(s__35392__$1,map__35397,map__35397__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__35389,map__35389__$1,sources,compiled,map__35387,map__35387__$1,msg,info,reload_info))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(warnings));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35391(cljs.core.rest(s__35392__$1)));
} else {
var G__35586 = cljs.core.rest(s__35392__$1);
s__35392__$1 = G__35586;
continue;
}
} else {
var G__35587 = cljs.core.rest(s__35392__$1);
s__35392__$1 = G__35587;
continue;
}
} else {
return null;
}
break;
}
});})(map__35389,map__35389__$1,sources,compiled,map__35387,map__35387__$1,msg,info,reload_info))
,null,null));
});})(map__35389,map__35389__$1,sources,compiled,map__35387,map__35387__$1,msg,info,reload_info))
;
return iter__4523__auto__(sources);
})()));
var seq__35399_35588 = cljs.core.seq(warnings);
var chunk__35400_35589 = null;
var count__35401_35590 = (0);
var i__35402_35591 = (0);
while(true){
if((i__35402_35591 < count__35401_35590)){
var map__35407_35592 = chunk__35400_35589.cljs$core$IIndexed$_nth$arity$2(null,i__35402_35591);
var map__35407_35593__$1 = (((((!((map__35407_35592 == null))))?(((((map__35407_35592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35407_35592.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35407_35592):map__35407_35592);
var w_35594 = map__35407_35593__$1;
var msg_35595__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35407_35593__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35596 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35407_35593__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35597 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35407_35593__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35598 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35407_35593__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35598)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35596),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35597),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35595__$1)].join(''));


var G__35599 = seq__35399_35588;
var G__35600 = chunk__35400_35589;
var G__35601 = count__35401_35590;
var G__35602 = (i__35402_35591 + (1));
seq__35399_35588 = G__35599;
chunk__35400_35589 = G__35600;
count__35401_35590 = G__35601;
i__35402_35591 = G__35602;
continue;
} else {
var temp__5720__auto___35603 = cljs.core.seq(seq__35399_35588);
if(temp__5720__auto___35603){
var seq__35399_35604__$1 = temp__5720__auto___35603;
if(cljs.core.chunked_seq_QMARK_(seq__35399_35604__$1)){
var c__4550__auto___35605 = cljs.core.chunk_first(seq__35399_35604__$1);
var G__35606 = cljs.core.chunk_rest(seq__35399_35604__$1);
var G__35607 = c__4550__auto___35605;
var G__35608 = cljs.core.count(c__4550__auto___35605);
var G__35609 = (0);
seq__35399_35588 = G__35606;
chunk__35400_35589 = G__35607;
count__35401_35590 = G__35608;
i__35402_35591 = G__35609;
continue;
} else {
var map__35409_35610 = cljs.core.first(seq__35399_35604__$1);
var map__35409_35611__$1 = (((((!((map__35409_35610 == null))))?(((((map__35409_35610.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35409_35610.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35409_35610):map__35409_35610);
var w_35612 = map__35409_35611__$1;
var msg_35613__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35409_35611__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35614 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35409_35611__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35615 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35409_35611__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35616 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35409_35611__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35616)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35614),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35615),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35613__$1)].join(''));


var G__35617 = cljs.core.next(seq__35399_35604__$1);
var G__35618 = null;
var G__35619 = (0);
var G__35620 = (0);
seq__35399_35588 = G__35617;
chunk__35400_35589 = G__35618;
count__35401_35590 = G__35619;
i__35402_35591 = G__35620;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__35389,map__35389__$1,sources,compiled,warnings,map__35387,map__35387__$1,msg,info,reload_info){
return (function (p__35411){
var map__35412 = p__35411;
var map__35412__$1 = (((((!((map__35412 == null))))?(((((map__35412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35412.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35412):map__35412);
var src = map__35412__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35412__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35412__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
});})(map__35389,map__35389__$1,sources,compiled,warnings,map__35387,map__35387__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__35389,map__35389__$1,sources,compiled,warnings,map__35387,map__35387__$1,msg,info,reload_info){
return (function (p__35414){
var map__35415 = p__35414;
var map__35415__$1 = (((((!((map__35415 == null))))?(((((map__35415.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35415.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35415):map__35415);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35415__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__35389,map__35389__$1,sources,compiled,warnings,map__35387,map__35387__$1,msg,info,reload_info))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__35389,map__35389__$1,sources,compiled,warnings,map__35387,map__35387__$1,msg,info,reload_info){
return (function (p__35417){
var map__35418 = p__35417;
var map__35418__$1 = (((((!((map__35418 == null))))?(((((map__35418.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35418.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35418):map__35418);
var rc = map__35418__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35418__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.browser.module_is_active_QMARK_(module)));
});})(map__35389,map__35389__$1,sources,compiled,warnings,map__35387,map__35387__$1,msg,info,reload_info))
,sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,((function (sources_to_get,map__35389,map__35389__$1,sources,compiled,warnings,map__35387,map__35387__$1,msg,info,reload_info){
return (function (p1__35385_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__35385_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
});})(sources_to_get,map__35389,map__35389__$1,sources,compiled,warnings,map__35387,map__35387__$1,msg,info,reload_info))
);
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rel_new),"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4120__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4120__auto__){
var and__4120__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4120__auto____$1){
return new$;
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__35422){
var map__35423 = p__35422;
var map__35423__$1 = (((((!((map__35423 == null))))?(((((map__35423.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35423.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35423):map__35423);
var msg = map__35423__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35423__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__35425 = cljs.core.seq(updates);
var chunk__35427 = null;
var count__35428 = (0);
var i__35429 = (0);
while(true){
if((i__35429 < count__35428)){
var path = chunk__35427.cljs$core$IIndexed$_nth$arity$2(null,i__35429);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35457_35625 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35460_35626 = null;
var count__35461_35627 = (0);
var i__35462_35628 = (0);
while(true){
if((i__35462_35628 < count__35461_35627)){
var node_35629 = chunk__35460_35626.cljs$core$IIndexed$_nth$arity$2(null,i__35462_35628);
var path_match_35630 = shadow.cljs.devtools.client.browser.match_paths(node_35629.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35630)){
var new_link_35631 = (function (){var G__35468 = node_35629.cloneNode(true);
G__35468.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35630),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35468;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35630], 0));

goog.dom.insertSiblingAfter(new_link_35631,node_35629);

goog.dom.removeNode(node_35629);


var G__35633 = seq__35457_35625;
var G__35634 = chunk__35460_35626;
var G__35635 = count__35461_35627;
var G__35636 = (i__35462_35628 + (1));
seq__35457_35625 = G__35633;
chunk__35460_35626 = G__35634;
count__35461_35627 = G__35635;
i__35462_35628 = G__35636;
continue;
} else {
var G__35638 = seq__35457_35625;
var G__35639 = chunk__35460_35626;
var G__35640 = count__35461_35627;
var G__35641 = (i__35462_35628 + (1));
seq__35457_35625 = G__35638;
chunk__35460_35626 = G__35639;
count__35461_35627 = G__35640;
i__35462_35628 = G__35641;
continue;
}
} else {
var temp__5720__auto___35643 = cljs.core.seq(seq__35457_35625);
if(temp__5720__auto___35643){
var seq__35457_35644__$1 = temp__5720__auto___35643;
if(cljs.core.chunked_seq_QMARK_(seq__35457_35644__$1)){
var c__4550__auto___35645 = cljs.core.chunk_first(seq__35457_35644__$1);
var G__35646 = cljs.core.chunk_rest(seq__35457_35644__$1);
var G__35647 = c__4550__auto___35645;
var G__35648 = cljs.core.count(c__4550__auto___35645);
var G__35649 = (0);
seq__35457_35625 = G__35646;
chunk__35460_35626 = G__35647;
count__35461_35627 = G__35648;
i__35462_35628 = G__35649;
continue;
} else {
var node_35650 = cljs.core.first(seq__35457_35644__$1);
var path_match_35651 = shadow.cljs.devtools.client.browser.match_paths(node_35650.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35651)){
var new_link_35652 = (function (){var G__35469 = node_35650.cloneNode(true);
G__35469.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35651),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35469;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35651], 0));

goog.dom.insertSiblingAfter(new_link_35652,node_35650);

goog.dom.removeNode(node_35650);


var G__35653 = cljs.core.next(seq__35457_35644__$1);
var G__35654 = null;
var G__35655 = (0);
var G__35656 = (0);
seq__35457_35625 = G__35653;
chunk__35460_35626 = G__35654;
count__35461_35627 = G__35655;
i__35462_35628 = G__35656;
continue;
} else {
var G__35657 = cljs.core.next(seq__35457_35644__$1);
var G__35658 = null;
var G__35659 = (0);
var G__35660 = (0);
seq__35457_35625 = G__35657;
chunk__35460_35626 = G__35658;
count__35461_35627 = G__35659;
i__35462_35628 = G__35660;
continue;
}
}
} else {
}
}
break;
}


var G__35661 = seq__35425;
var G__35662 = chunk__35427;
var G__35663 = count__35428;
var G__35664 = (i__35429 + (1));
seq__35425 = G__35661;
chunk__35427 = G__35662;
count__35428 = G__35663;
i__35429 = G__35664;
continue;
} else {
var G__35665 = seq__35425;
var G__35666 = chunk__35427;
var G__35667 = count__35428;
var G__35668 = (i__35429 + (1));
seq__35425 = G__35665;
chunk__35427 = G__35666;
count__35428 = G__35667;
i__35429 = G__35668;
continue;
}
} else {
var temp__5720__auto__ = cljs.core.seq(seq__35425);
if(temp__5720__auto__){
var seq__35425__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35425__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35425__$1);
var G__35669 = cljs.core.chunk_rest(seq__35425__$1);
var G__35670 = c__4550__auto__;
var G__35671 = cljs.core.count(c__4550__auto__);
var G__35672 = (0);
seq__35425 = G__35669;
chunk__35427 = G__35670;
count__35428 = G__35671;
i__35429 = G__35672;
continue;
} else {
var path = cljs.core.first(seq__35425__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35470_35673 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35473_35674 = null;
var count__35474_35675 = (0);
var i__35475_35676 = (0);
while(true){
if((i__35475_35676 < count__35474_35675)){
var node_35680 = chunk__35473_35674.cljs$core$IIndexed$_nth$arity$2(null,i__35475_35676);
var path_match_35681 = shadow.cljs.devtools.client.browser.match_paths(node_35680.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35681)){
var new_link_35682 = (function (){var G__35480 = node_35680.cloneNode(true);
G__35480.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35681),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35480;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35681], 0));

goog.dom.insertSiblingAfter(new_link_35682,node_35680);

goog.dom.removeNode(node_35680);


var G__35683 = seq__35470_35673;
var G__35684 = chunk__35473_35674;
var G__35685 = count__35474_35675;
var G__35686 = (i__35475_35676 + (1));
seq__35470_35673 = G__35683;
chunk__35473_35674 = G__35684;
count__35474_35675 = G__35685;
i__35475_35676 = G__35686;
continue;
} else {
var G__35687 = seq__35470_35673;
var G__35688 = chunk__35473_35674;
var G__35689 = count__35474_35675;
var G__35690 = (i__35475_35676 + (1));
seq__35470_35673 = G__35687;
chunk__35473_35674 = G__35688;
count__35474_35675 = G__35689;
i__35475_35676 = G__35690;
continue;
}
} else {
var temp__5720__auto___35691__$1 = cljs.core.seq(seq__35470_35673);
if(temp__5720__auto___35691__$1){
var seq__35470_35692__$1 = temp__5720__auto___35691__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35470_35692__$1)){
var c__4550__auto___35693 = cljs.core.chunk_first(seq__35470_35692__$1);
var G__35694 = cljs.core.chunk_rest(seq__35470_35692__$1);
var G__35695 = c__4550__auto___35693;
var G__35696 = cljs.core.count(c__4550__auto___35693);
var G__35697 = (0);
seq__35470_35673 = G__35694;
chunk__35473_35674 = G__35695;
count__35474_35675 = G__35696;
i__35475_35676 = G__35697;
continue;
} else {
var node_35698 = cljs.core.first(seq__35470_35692__$1);
var path_match_35699 = shadow.cljs.devtools.client.browser.match_paths(node_35698.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35699)){
var new_link_35700 = (function (){var G__35487 = node_35698.cloneNode(true);
G__35487.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35699),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35487;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35699], 0));

goog.dom.insertSiblingAfter(new_link_35700,node_35698);

goog.dom.removeNode(node_35698);


var G__35701 = cljs.core.next(seq__35470_35692__$1);
var G__35702 = null;
var G__35703 = (0);
var G__35704 = (0);
seq__35470_35673 = G__35701;
chunk__35473_35674 = G__35702;
count__35474_35675 = G__35703;
i__35475_35676 = G__35704;
continue;
} else {
var G__35705 = cljs.core.next(seq__35470_35692__$1);
var G__35706 = null;
var G__35707 = (0);
var G__35708 = (0);
seq__35470_35673 = G__35705;
chunk__35473_35674 = G__35706;
count__35474_35675 = G__35707;
i__35475_35676 = G__35708;
continue;
}
}
} else {
}
}
break;
}


var G__35709 = cljs.core.next(seq__35425__$1);
var G__35710 = null;
var G__35711 = (0);
var G__35712 = (0);
seq__35425 = G__35709;
chunk__35427 = G__35710;
count__35428 = G__35711;
i__35429 = G__35712;
continue;
} else {
var G__35713 = cljs.core.next(seq__35425__$1);
var G__35714 = null;
var G__35715 = (0);
var G__35716 = (0);
seq__35425 = G__35713;
chunk__35427 = G__35714;
count__35428 = G__35715;
i__35429 = G__35716;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__35490){
var map__35491 = p__35490;
var map__35491__$1 = (((((!((map__35491 == null))))?(((((map__35491.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35491.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35491):map__35491);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35491__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35491__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call(((function (map__35491,map__35491__$1,id,js){
return (function (){
return eval(js);
});})(map__35491,map__35491__$1,id,js))
,shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__35497){
var map__35498 = p__35497;
var map__35498__$1 = (((((!((map__35498 == null))))?(((((map__35498.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35498.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35498):map__35498);
var msg = map__35498__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35498__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35498__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35498__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35498__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__35498,map__35498__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (p__35503){
var map__35504 = p__35503;
var map__35504__$1 = (((((!((map__35504 == null))))?(((((map__35504.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35504.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35504):map__35504);
var src = map__35504__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35504__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4120__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4120__auto__;
}
});})(map__35498,map__35498__$1,msg,id,sources,reload_namespaces,js_requires))
,sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,((function (sources_to_load,map__35498,map__35498__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (sources__$1){
shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
});})(sources_to_load,map__35498,map__35498__$1,msg,id,sources,reload_namespaces,js_requires))
);
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__35508){
var map__35509 = p__35508;
var map__35509__$1 = (((((!((map__35509 == null))))?(((((map__35509.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35509.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35509):map__35509);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35509__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35509__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),((function (map__35509,map__35509__$1,repl_state,id){
return (function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

return shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");
});})(map__35509,map__35509__$1,repl_state,id))
);
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__35516){
var map__35517 = p__35516;
var map__35517__$1 = (((((!((map__35517 == null))))?(((((map__35517.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35517.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35517):map__35517);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35517__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35517__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__35520){
var map__35523 = p__35520;
var map__35523__$1 = (((((!((map__35523 == null))))?(((((map__35523.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35523.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35523):map__35523);
var msg = map__35523__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35523__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__35527 = type;
var G__35527__$1 = (((G__35527 instanceof cljs.core.Keyword))?G__35527.fqn:null);
switch (G__35527__$1) {
case "asset-watch":
return shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
return shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
return shadow.cljs.devtools.client.browser.repl_require(msg);

break;
case "repl/set-ns":
return shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
return shadow.cljs.devtools.client.browser.repl_init(msg);

break;
case "repl/session-start":
return shadow.cljs.devtools.client.browser.repl_init(msg);

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

return shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

return shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
return shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

return shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":
return null;

break;
case "client/stale":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
return shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:
return new cljs.core.Keyword(null,"ignored","ignored",1227374526);

}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__35535 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__35536 = ((function (G__35535){
return (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});})(G__35535))
;
var G__35537 = "POST";
var G__35538 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__35539 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__35535,G__35536,G__35537,G__35538,G__35539);
});
shadow.cljs.devtools.client.browser.heartbeat_BANG_ = (function shadow$cljs$devtools$client$browser$heartbeat_BANG_(){
var temp__5720__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5720__auto__)){
var s = temp__5720__auto__;
s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ping","ping",-1670114784),new cljs.core.Keyword(null,"v","v",21465059),Date.now()], null)], 0)));

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

socket.onmessage = ((function (print_fn,ws_url,socket){
return (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
});})(print_fn,ws_url,socket))
;

socket.onopen = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
goog.provide = goog.constructNamespace_;
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
});})(print_fn,ws_url,socket))
;

socket.onclose = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4131__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

return shadow.cljs.devtools.client.env.reset_print_fns_BANG_();
});})(print_fn,ws_url,socket))
;

socket.onerror = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
});})(print_fn,ws_url,socket))
;

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
}catch (e35543){var e = e35543;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5720__auto___35735 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5720__auto___35735)){
var s_35736 = temp__5720__auto___35735;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

s_35736.onclose = ((function (s_35736,temp__5720__auto___35735){
return (function (e){
return null;
});})(s_35736,temp__5720__auto___35735))
;

s_35736.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5720__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5720__auto__)){
var s = temp__5720__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4120__auto__ = document;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4120__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
