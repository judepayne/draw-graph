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
goog.require('clojure.set');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___39062 = arguments.length;
var i__4790__auto___39063 = (0);
while(true){
if((i__4790__auto___39063 < len__4789__auto___39062)){
args__4795__auto__.push((arguments[i__4790__auto___39063]));

var G__39064 = (i__4790__auto___39063 + (1));
i__4790__auto___39063 = G__39064;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%c\uD83E\uDC36 shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq38894){
var G__38895 = cljs.core.first(seq38894);
var seq38894__$1 = cljs.core.next(seq38894);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38895,seq38894__$1);
}));

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5733__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__38896 = cljs.core.seq(sources);
var chunk__38897 = null;
var count__38898 = (0);
var i__38899 = (0);
while(true){
if((i__38899 < count__38898)){
var map__38908 = chunk__38897.cljs$core$IIndexed$_nth$arity$2(null,i__38899);
var map__38908__$1 = (((((!((map__38908 == null))))?(((((map__38908.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38908.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38908):map__38908);
var src = map__38908__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38908__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38908__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38908__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38908__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e38911){var e_39072 = e38911;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_39072);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_39072.message)].join('')));
}

var G__39075 = seq__38896;
var G__39076 = chunk__38897;
var G__39077 = count__38898;
var G__39078 = (i__38899 + (1));
seq__38896 = G__39075;
chunk__38897 = G__39076;
count__38898 = G__39077;
i__38899 = G__39078;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38896);
if(temp__5735__auto__){
var seq__38896__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38896__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__38896__$1);
var G__39079 = cljs.core.chunk_rest(seq__38896__$1);
var G__39080 = c__4609__auto__;
var G__39081 = cljs.core.count(c__4609__auto__);
var G__39082 = (0);
seq__38896 = G__39079;
chunk__38897 = G__39080;
count__38898 = G__39081;
i__38899 = G__39082;
continue;
} else {
var map__38913 = cljs.core.first(seq__38896__$1);
var map__38913__$1 = (((((!((map__38913 == null))))?(((((map__38913.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38913.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38913):map__38913);
var src = map__38913__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38913__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38913__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38913__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38913__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e38916){var e_39086 = e38916;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_39086);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_39086.message)].join('')));
}

var G__39087 = cljs.core.next(seq__38896__$1);
var G__39088 = null;
var G__39089 = (0);
var G__39090 = (0);
seq__38896 = G__39087;
chunk__38897 = G__39088;
count__38898 = G__39089;
i__38899 = G__39090;
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
var seq__38918 = cljs.core.seq(js_requires);
var chunk__38919 = null;
var count__38920 = (0);
var i__38921 = (0);
while(true){
if((i__38921 < count__38920)){
var js_ns = chunk__38919.cljs$core$IIndexed$_nth$arity$2(null,i__38921);
var require_str_39092 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_39092);


var G__39093 = seq__38918;
var G__39094 = chunk__38919;
var G__39095 = count__38920;
var G__39096 = (i__38921 + (1));
seq__38918 = G__39093;
chunk__38919 = G__39094;
count__38920 = G__39095;
i__38921 = G__39096;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38918);
if(temp__5735__auto__){
var seq__38918__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38918__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__38918__$1);
var G__39097 = cljs.core.chunk_rest(seq__38918__$1);
var G__39098 = c__4609__auto__;
var G__39099 = cljs.core.count(c__4609__auto__);
var G__39100 = (0);
seq__38918 = G__39097;
chunk__38919 = G__39098;
count__38920 = G__39099;
i__38921 = G__39100;
continue;
} else {
var js_ns = cljs.core.first(seq__38918__$1);
var require_str_39102 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_39102);


var G__39105 = cljs.core.next(seq__38918__$1);
var G__39106 = null;
var G__39107 = (0);
var G__39108 = (0);
seq__38918 = G__39105;
chunk__38919 = G__39106;
count__38920 = G__39107;
i__38921 = G__39108;
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
var G__38923 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__38923) : callback.call(null,G__38923));
} else {
return goog.net.XhrIo.send(shadow.cljs.devtools.client.env.files_url(),(function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
}),"POST",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0)),({"content-type": "application/edn; charset=utf-8"}));
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__38925){
var map__38926 = p__38925;
var map__38926__$1 = (((((!((map__38926 == null))))?(((((map__38926.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38926.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38926):map__38926);
var msg = map__38926__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38926__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38926__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38929(s__38930){
return (new cljs.core.LazySeq(null,(function (){
var s__38930__$1 = s__38930;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__38930__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__38935 = cljs.core.first(xs__6292__auto__);
var map__38935__$1 = (((((!((map__38935 == null))))?(((((map__38935.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38935.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38935):map__38935);
var src = map__38935__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38935__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38935__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4578__auto__ = ((function (s__38930__$1,map__38935,map__38935__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__38926,map__38926__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38929_$_iter__38931(s__38932){
return (new cljs.core.LazySeq(null,((function (s__38930__$1,map__38935,map__38935__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__38926,map__38926__$1,msg,info,reload_info){
return (function (){
var s__38932__$1 = s__38932;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__38932__$1);
if(temp__5735__auto____$1){
var s__38932__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__38932__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__38932__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__38934 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__38933 = (0);
while(true){
if((i__38933 < size__4581__auto__)){
var warning = cljs.core._nth(c__4580__auto__,i__38933);
cljs.core.chunk_append(b__38934,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__39117 = (i__38933 + (1));
i__38933 = G__39117;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38934),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38929_$_iter__38931(cljs.core.chunk_rest(s__38932__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38934),null);
}
} else {
var warning = cljs.core.first(s__38932__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38929_$_iter__38931(cljs.core.rest(s__38932__$2)));
}
} else {
return null;
}
break;
}
});})(s__38930__$1,map__38935,map__38935__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__38926,map__38926__$1,msg,info,reload_info))
,null,null));
});})(s__38930__$1,map__38935,map__38935__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__38926,map__38926__$1,msg,info,reload_info))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(warnings));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38929(cljs.core.rest(s__38930__$1)));
} else {
var G__39121 = cljs.core.rest(s__38930__$1);
s__38930__$1 = G__39121;
continue;
}
} else {
var G__39122 = cljs.core.rest(s__38930__$1);
s__38930__$1 = G__39122;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
var seq__38939_39124 = cljs.core.seq(warnings);
var chunk__38940_39125 = null;
var count__38941_39126 = (0);
var i__38942_39127 = (0);
while(true){
if((i__38942_39127 < count__38941_39126)){
var map__38948_39130 = chunk__38940_39125.cljs$core$IIndexed$_nth$arity$2(null,i__38942_39127);
var map__38948_39131__$1 = (((((!((map__38948_39130 == null))))?(((((map__38948_39130.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38948_39130.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38948_39130):map__38948_39130);
var w_39132 = map__38948_39131__$1;
var msg_39133__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38948_39131__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_39134 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38948_39131__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_39135 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38948_39131__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_39136 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38948_39131__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_39136)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_39134),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_39135),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_39133__$1)].join(''));


var G__39139 = seq__38939_39124;
var G__39140 = chunk__38940_39125;
var G__39141 = count__38941_39126;
var G__39142 = (i__38942_39127 + (1));
seq__38939_39124 = G__39139;
chunk__38940_39125 = G__39140;
count__38941_39126 = G__39141;
i__38942_39127 = G__39142;
continue;
} else {
var temp__5735__auto___39143 = cljs.core.seq(seq__38939_39124);
if(temp__5735__auto___39143){
var seq__38939_39144__$1 = temp__5735__auto___39143;
if(cljs.core.chunked_seq_QMARK_(seq__38939_39144__$1)){
var c__4609__auto___39145 = cljs.core.chunk_first(seq__38939_39144__$1);
var G__39146 = cljs.core.chunk_rest(seq__38939_39144__$1);
var G__39147 = c__4609__auto___39145;
var G__39148 = cljs.core.count(c__4609__auto___39145);
var G__39149 = (0);
seq__38939_39124 = G__39146;
chunk__38940_39125 = G__39147;
count__38941_39126 = G__39148;
i__38942_39127 = G__39149;
continue;
} else {
var map__38950_39150 = cljs.core.first(seq__38939_39144__$1);
var map__38950_39151__$1 = (((((!((map__38950_39150 == null))))?(((((map__38950_39150.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38950_39150.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38950_39150):map__38950_39150);
var w_39152 = map__38950_39151__$1;
var msg_39153__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38950_39151__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_39154 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38950_39151__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_39155 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38950_39151__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_39156 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38950_39151__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_39156)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_39154),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_39155),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_39153__$1)].join(''));


var G__39161 = cljs.core.next(seq__38939_39144__$1);
var G__39162 = null;
var G__39163 = (0);
var G__39164 = (0);
seq__38939_39124 = G__39161;
chunk__38940_39125 = G__39162;
count__38941_39126 = G__39163;
i__38942_39127 = G__39164;
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
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,(function (p1__38924_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__38924_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
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
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__38954){
var map__38955 = p__38954;
var map__38955__$1 = (((((!((map__38955 == null))))?(((((map__38955.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38955.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38955):map__38955);
var msg = map__38955__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38955__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__38958 = cljs.core.seq(updates);
var chunk__38960 = null;
var count__38961 = (0);
var i__38962 = (0);
while(true){
if((i__38962 < count__38961)){
var path = chunk__38960.cljs$core$IIndexed$_nth$arity$2(null,i__38962);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__38990_39178 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__38993_39179 = null;
var count__38994_39180 = (0);
var i__38995_39181 = (0);
while(true){
if((i__38995_39181 < count__38994_39180)){
var node_39182 = chunk__38993_39179.cljs$core$IIndexed$_nth$arity$2(null,i__38995_39181);
var path_match_39183 = shadow.cljs.devtools.client.browser.match_paths(node_39182.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39183)){
var new_link_39184 = (function (){var G__39001 = node_39182.cloneNode(true);
G__39001.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39183),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39001;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39183], 0));

goog.dom.insertSiblingAfter(new_link_39184,node_39182);

goog.dom.removeNode(node_39182);


var G__39186 = seq__38990_39178;
var G__39187 = chunk__38993_39179;
var G__39188 = count__38994_39180;
var G__39189 = (i__38995_39181 + (1));
seq__38990_39178 = G__39186;
chunk__38993_39179 = G__39187;
count__38994_39180 = G__39188;
i__38995_39181 = G__39189;
continue;
} else {
var G__39190 = seq__38990_39178;
var G__39191 = chunk__38993_39179;
var G__39192 = count__38994_39180;
var G__39193 = (i__38995_39181 + (1));
seq__38990_39178 = G__39190;
chunk__38993_39179 = G__39191;
count__38994_39180 = G__39192;
i__38995_39181 = G__39193;
continue;
}
} else {
var temp__5735__auto___39194 = cljs.core.seq(seq__38990_39178);
if(temp__5735__auto___39194){
var seq__38990_39196__$1 = temp__5735__auto___39194;
if(cljs.core.chunked_seq_QMARK_(seq__38990_39196__$1)){
var c__4609__auto___39197 = cljs.core.chunk_first(seq__38990_39196__$1);
var G__39199 = cljs.core.chunk_rest(seq__38990_39196__$1);
var G__39200 = c__4609__auto___39197;
var G__39201 = cljs.core.count(c__4609__auto___39197);
var G__39202 = (0);
seq__38990_39178 = G__39199;
chunk__38993_39179 = G__39200;
count__38994_39180 = G__39201;
i__38995_39181 = G__39202;
continue;
} else {
var node_39204 = cljs.core.first(seq__38990_39196__$1);
var path_match_39205 = shadow.cljs.devtools.client.browser.match_paths(node_39204.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39205)){
var new_link_39206 = (function (){var G__39002 = node_39204.cloneNode(true);
G__39002.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39205),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39002;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39205], 0));

goog.dom.insertSiblingAfter(new_link_39206,node_39204);

goog.dom.removeNode(node_39204);


var G__39209 = cljs.core.next(seq__38990_39196__$1);
var G__39210 = null;
var G__39211 = (0);
var G__39212 = (0);
seq__38990_39178 = G__39209;
chunk__38993_39179 = G__39210;
count__38994_39180 = G__39211;
i__38995_39181 = G__39212;
continue;
} else {
var G__39213 = cljs.core.next(seq__38990_39196__$1);
var G__39214 = null;
var G__39215 = (0);
var G__39216 = (0);
seq__38990_39178 = G__39213;
chunk__38993_39179 = G__39214;
count__38994_39180 = G__39215;
i__38995_39181 = G__39216;
continue;
}
}
} else {
}
}
break;
}


var G__39217 = seq__38958;
var G__39218 = chunk__38960;
var G__39219 = count__38961;
var G__39220 = (i__38962 + (1));
seq__38958 = G__39217;
chunk__38960 = G__39218;
count__38961 = G__39219;
i__38962 = G__39220;
continue;
} else {
var G__39221 = seq__38958;
var G__39222 = chunk__38960;
var G__39223 = count__38961;
var G__39224 = (i__38962 + (1));
seq__38958 = G__39221;
chunk__38960 = G__39222;
count__38961 = G__39223;
i__38962 = G__39224;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38958);
if(temp__5735__auto__){
var seq__38958__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38958__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__38958__$1);
var G__39226 = cljs.core.chunk_rest(seq__38958__$1);
var G__39227 = c__4609__auto__;
var G__39228 = cljs.core.count(c__4609__auto__);
var G__39229 = (0);
seq__38958 = G__39226;
chunk__38960 = G__39227;
count__38961 = G__39228;
i__38962 = G__39229;
continue;
} else {
var path = cljs.core.first(seq__38958__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__39004_39230 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__39007_39231 = null;
var count__39008_39232 = (0);
var i__39009_39233 = (0);
while(true){
if((i__39009_39233 < count__39008_39232)){
var node_39236 = chunk__39007_39231.cljs$core$IIndexed$_nth$arity$2(null,i__39009_39233);
var path_match_39237 = shadow.cljs.devtools.client.browser.match_paths(node_39236.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39237)){
var new_link_39239 = (function (){var G__39015 = node_39236.cloneNode(true);
G__39015.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39237),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39015;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39237], 0));

goog.dom.insertSiblingAfter(new_link_39239,node_39236);

goog.dom.removeNode(node_39236);


var G__39242 = seq__39004_39230;
var G__39243 = chunk__39007_39231;
var G__39244 = count__39008_39232;
var G__39245 = (i__39009_39233 + (1));
seq__39004_39230 = G__39242;
chunk__39007_39231 = G__39243;
count__39008_39232 = G__39244;
i__39009_39233 = G__39245;
continue;
} else {
var G__39246 = seq__39004_39230;
var G__39247 = chunk__39007_39231;
var G__39248 = count__39008_39232;
var G__39249 = (i__39009_39233 + (1));
seq__39004_39230 = G__39246;
chunk__39007_39231 = G__39247;
count__39008_39232 = G__39248;
i__39009_39233 = G__39249;
continue;
}
} else {
var temp__5735__auto___39250__$1 = cljs.core.seq(seq__39004_39230);
if(temp__5735__auto___39250__$1){
var seq__39004_39252__$1 = temp__5735__auto___39250__$1;
if(cljs.core.chunked_seq_QMARK_(seq__39004_39252__$1)){
var c__4609__auto___39253 = cljs.core.chunk_first(seq__39004_39252__$1);
var G__39254 = cljs.core.chunk_rest(seq__39004_39252__$1);
var G__39255 = c__4609__auto___39253;
var G__39256 = cljs.core.count(c__4609__auto___39253);
var G__39257 = (0);
seq__39004_39230 = G__39254;
chunk__39007_39231 = G__39255;
count__39008_39232 = G__39256;
i__39009_39233 = G__39257;
continue;
} else {
var node_39258 = cljs.core.first(seq__39004_39252__$1);
var path_match_39259 = shadow.cljs.devtools.client.browser.match_paths(node_39258.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39259)){
var new_link_39261 = (function (){var G__39017 = node_39258.cloneNode(true);
G__39017.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39259),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39017;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39259], 0));

goog.dom.insertSiblingAfter(new_link_39261,node_39258);

goog.dom.removeNode(node_39258);


var G__39263 = cljs.core.next(seq__39004_39252__$1);
var G__39264 = null;
var G__39265 = (0);
var G__39266 = (0);
seq__39004_39230 = G__39263;
chunk__39007_39231 = G__39264;
count__39008_39232 = G__39265;
i__39009_39233 = G__39266;
continue;
} else {
var G__39269 = cljs.core.next(seq__39004_39252__$1);
var G__39270 = null;
var G__39271 = (0);
var G__39272 = (0);
seq__39004_39230 = G__39269;
chunk__39007_39231 = G__39270;
count__39008_39232 = G__39271;
i__39009_39233 = G__39272;
continue;
}
}
} else {
}
}
break;
}


var G__39273 = cljs.core.next(seq__38958__$1);
var G__39274 = null;
var G__39275 = (0);
var G__39276 = (0);
seq__38958 = G__39273;
chunk__38960 = G__39274;
count__38961 = G__39275;
i__38962 = G__39276;
continue;
} else {
var G__39277 = cljs.core.next(seq__38958__$1);
var G__39278 = null;
var G__39279 = (0);
var G__39280 = (0);
seq__38958 = G__39277;
chunk__38960 = G__39278;
count__38961 = G__39279;
i__38962 = G__39280;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__39019){
var map__39020 = p__39019;
var map__39020__$1 = (((((!((map__39020 == null))))?(((((map__39020.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39020.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39020):map__39020);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39020__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39020__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call((function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
}),shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__39023,done){
var map__39024 = p__39023;
var map__39024__$1 = (((((!((map__39024 == null))))?(((((map__39024.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39024.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39024):map__39024);
var msg = map__39024__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39024__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39024__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39024__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39024__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__39026){
var map__39027 = p__39026;
var map__39027__$1 = (((((!((map__39027 == null))))?(((((map__39027.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39027.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39027):map__39027);
var src = map__39027__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39027__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4174__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4174__auto__;
}
}),sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,(function (sources__$1){
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e39030){var e = e39030;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}}));
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__39031,done){
var map__39032 = p__39031;
var map__39032__$1 = (((((!((map__39032 == null))))?(((((map__39032.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39032.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39032):map__39032);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39032__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39032__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__39034){
var map__39035 = p__39034;
var map__39035__$1 = (((((!((map__39035 == null))))?(((((map__39035.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39035.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39035):map__39035);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39035__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39035__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.stale_client_detected = cljs.core.volatile_BANG_(false);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__39037,done){
var map__39038 = p__39037;
var map__39038__$1 = (((((!((map__39038 == null))))?(((((map__39038.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39038.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39038):map__39038);
var msg = map__39038__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39038__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__39041_39299 = type;
var G__39041_39300__$1 = (((G__39041_39299 instanceof cljs.core.Keyword))?G__39041_39299.fqn:null);
switch (G__39041_39300__$1) {
case "asset-watch":
shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
shadow.cljs.devtools.client.browser.repl_require(msg,done);

break;
case "repl/set-ns":
shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/session-start":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/ping":
shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","pong","repl/pong",-166610159),new cljs.core.Keyword(null,"time-server","time-server",786726561),new cljs.core.Keyword(null,"time-server","time-server",786726561).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"time-runtime","time-runtime",-40294923),Date.now()], null));

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":

break;
case "client/stale":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:

}

if(cljs.core.contains_QMARK_(shadow.cljs.devtools.client.env.async_ops,type)){
return null;
} else {
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
return goog.net.XhrIo.send(["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join(''),(function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
}),"POST",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0)),({"content-type": "application/edn; charset=utf-8"}));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_status !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_status = cljs.core.volatile_BANG_(new cljs.core.Keyword(null,"init","init",-1875481434));
}
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1((function (){var fexpr__39042 = cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status);
return (fexpr__39042.cljs$core$IFn$_invoke$arity$1 ? fexpr__39042.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"init","init",-1875481434)) : fexpr__39042.call(null,new cljs.core.Keyword(null,"init","init",-1875481434)));
})())){
return (shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0 ? shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0() : shadow.cljs.devtools.client.browser.ws_connect_impl.call(null));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.maybe_reconnect = (function shadow$cljs$devtools$client$browser$maybe_reconnect(){
if(((cljs.core.not(cljs.core.deref(shadow.cljs.devtools.client.browser.stale_client_detected))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status),new cljs.core.Keyword(null,"init","init",-1875481434))))){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"init","init",-1875481434));

return setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(3000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect_impl = (function shadow$cljs$devtools$client$browser$ws_connect_impl(){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connecting","connecting",-1347943866));

try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

(socket.onmessage = (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
}));

(socket.onopen = (function (e){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connected","connected",-169833045));

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
(goog.provide = goog.constructNamespace_);
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
}));

(socket.onclose = (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4185__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

shadow.cljs.devtools.client.env.reset_print_fns_BANG_();

return shadow.cljs.devtools.client.browser.maybe_reconnect();
}));

return (socket.onerror = (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

shadow.cljs.devtools.client.browser.maybe_reconnect();

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}));
}catch (e39049){var e = e39049;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___39337 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___39337)){
var s_39338 = temp__5735__auto___39337;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

(s_39338.onclose = (function (e){
return null;
}));

s_39338.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4174__auto__ = document;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4174__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
