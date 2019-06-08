// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('kvlt.middleware.util');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('kvlt.platform.util');
goog.require('cats.labs.promise');
goog.require('clojure.string');
goog.require('cats.core');
goog.require('taoensso.timbre');
goog.require('goog.crypt.base64');
kvlt.middleware.util.__GT_content_type = (function kvlt$middleware$util$__GT_content_type(var_args){
var G__41486 = arguments.length;
switch (G__41486) {
case 1:
return kvlt.middleware.util.__GT_content_type.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return kvlt.middleware.util.__GT_content_type.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

kvlt.middleware.util.__GT_content_type.cljs$core$IFn$_invoke$arity$1 = (function (t){
if((t instanceof cljs.core.Keyword)){
var major = (function (){var or__4131__auto__ = cljs.core.namespace(t);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.cst$kw$application;
}
})();
return [cljs.core.name(major),"/",cljs.core.name(t)].join('');
} else {
return t;
}
});

kvlt.middleware.util.__GT_content_type.cljs$core$IFn$_invoke$arity$2 = (function (t,charset){
var G__41487 = kvlt.middleware.util.__GT_content_type.cljs$core$IFn$_invoke$arity$1(t);
if(cljs.core.truth_(charset)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41487),"; charset=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(charset)].join('');
} else {
return G__41487;
}
});

kvlt.middleware.util.__GT_content_type.cljs$lang$maxFixedArity = 2;

kvlt.middleware.util.spec__GT_fn = (function kvlt$middleware$util$spec__GT_fn(spec){
if((spec == null)){
return cljs.core.identity;
} else {
if(cljs.core.coll_QMARK_(spec)){
var vec__41490 = spec;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41490,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41490,(1),null);
return ((function (vec__41490,k,f){
return (function (p1__41489_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__41489_SHARP_,k,f);
});
;})(vec__41490,k,f))
} else {
return spec;

}
}
});
kvlt.middleware.util.clean_req = (function kvlt$middleware$util$clean_req(r){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(r,cljs.core.cst$kw$kvlt$middleware_SLASH_request,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$kvlt$middleware_SLASH_response,cljs.core.cst$kw$kvlt_SLASH_trace], 0));
});
kvlt.middleware.util.wrap_before = (function kvlt$middleware$util$wrap_before(f){
var map__41493 = cljs.core.meta(f);
var map__41493__$1 = (((((!((map__41493 == null))))?(((((map__41493.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41493.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41493):map__41493);
var has = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41493__$1,cljs.core.cst$kw$has);
var removing = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41493__$1,cljs.core.cst$kw$removing);
var f__$1 = (cljs.core.truth_(has)?((function (map__41493,map__41493__$1,has,removing){
return (function (p__41495){
var map__41496 = p__41495;
var map__41496__$1 = (((((!((map__41496 == null))))?(((((map__41496.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41496.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41496):map__41496);
var req = map__41496__$1;
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41496__$1,has);
var G__41498 = req;
if(cljs.core.truth_(v)){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__41498) : f.call(null,G__41498));
} else {
return G__41498;
}
});})(map__41493,map__41493__$1,has,removing))
:f);
if(cljs.core.truth_(removing)){
return ((function (map__41493,map__41493__$1,has,removing,f__$1){
return (function (req){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2((f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(req) : f__$1.call(null,req)),removing);
});
;})(map__41493,map__41493__$1,has,removing,f__$1))
} else {
return f__$1;
}
});
kvlt.middleware.util.__GT_mw = (function kvlt$middleware$util$__GT_mw(var_args){
var args__4736__auto__ = [];
var len__4730__auto___41512 = arguments.length;
var i__4731__auto___41513 = (0);
while(true){
if((i__4731__auto___41513 < len__4730__auto___41512)){
args__4736__auto__.push((arguments[i__4731__auto___41513]));

var G__41514 = (i__4731__auto___41513 + (1));
i__4731__auto___41513 = G__41514;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return kvlt.middleware.util.__GT_mw.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

kvlt.middleware.util.__GT_mw.cljs$core$IFn$_invoke$arity$variadic = (function (helpful_name,before,p__41503){
var vec__41504 = p__41503;
var after = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41504,(0),null);
var after__$1 = kvlt.middleware.util.spec__GT_fn(after);
var before__$1 = kvlt.middleware.util.wrap_before(kvlt.middleware.util.spec__GT_fn(before));
return ((function (after__$1,before__$1,vec__41504,after){
return (function (issue_BANG_){
return ((function (after__$1,before__$1,vec__41504,after){
return (function (p__41507){
var map__41508 = p__41507;
var map__41508__$1 = (((((!((map__41508 == null))))?(((((map__41508.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41508.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41508):map__41508);
var req = map__41508__$1;
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41508__$1,cljs.core.cst$kw$kvlt_SLASH_trace);
var req__$1 = (before__$1.cljs$core$IFn$_invoke$arity$1 ? before__$1.cljs$core$IFn$_invoke$arity$1(req) : before__$1.call(null,req));
var req__$2 = (function (){var G__41510 = req__$1;
if(cljs.core.truth_(trace)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__41510,cljs.core.cst$kw$kvlt$middleware_SLASH_request,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helpful_name,kvlt.middleware.util.clean_req(req__$1)], null));
} else {
return G__41510;
}
})();
return cats.core._GT__GT__EQ_.cljs$core$IFn$_invoke$arity$variadic((issue_BANG_.cljs$core$IFn$_invoke$arity$1 ? issue_BANG_.cljs$core$IFn$_invoke$arity$1(req__$2) : issue_BANG_.call(null,req__$2)),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cats.core.return$,after__$1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cats.core.return$,((function (req__$1,req__$2,map__41508,map__41508__$1,req,trace,after__$1,before__$1,vec__41504,after){
return (function (p1__41499_SHARP_){
var G__41511 = p1__41499_SHARP_;
if(cljs.core.truth_(trace)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__41511,cljs.core.cst$kw$kvlt$middleware_SLASH_response,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helpful_name,kvlt.middleware.util.clean_req(req__$2)], null));
} else {
return G__41511;
}
});})(req__$1,req__$2,map__41508,map__41508__$1,req,trace,after__$1,before__$1,vec__41504,after))
)], 0));
});
;})(after__$1,before__$1,vec__41504,after))
});
;})(after__$1,before__$1,vec__41504,after))
});

kvlt.middleware.util.__GT_mw.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
kvlt.middleware.util.__GT_mw.cljs$lang$applyTo = (function (seq41500){
var G__41501 = cljs.core.first(seq41500);
var seq41500__$1 = cljs.core.next(seq41500);
var G__41502 = cljs.core.first(seq41500__$1);
var seq41500__$2 = cljs.core.next(seq41500__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41501,G__41502,seq41500__$2);
});

kvlt.middleware.util.url_decode = (function kvlt$middleware$util$url_decode(var_args){
var args__4736__auto__ = [];
var len__4730__auto___41521 = arguments.length;
var i__4731__auto___41522 = (0);
while(true){
if((i__4731__auto___41522 < len__4730__auto___41521)){
args__4736__auto__.push((arguments[i__4731__auto___41522]));

var G__41523 = (i__4731__auto___41522 + (1));
i__4731__auto___41522 = G__41523;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return kvlt.middleware.util.url_decode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

kvlt.middleware.util.url_decode.cljs$core$IFn$_invoke$arity$variadic = (function (encoded,p__41517){
var vec__41518 = p__41517;
var encoding = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41518,(0),null);
var encoding__$1 = (function (){var or__4131__auto__ = encoding;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "UTF-8";
}
})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("UTF-8",encoding__$1)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"kvlt.middleware.util","/private/var/folders/t5/f3xh0rdx5ds8d5rn2wr52fh40000gn/T/form-init8747378136274606403.clj",82,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (encoding__$1,vec__41518,encoding){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["url-decode ignoring encoding",encoding__$1], null);
});})(encoding__$1,vec__41518,encoding))
,null)),null,-443834777);
} else {
}

return decodeURIComponent(encoded);
});

kvlt.middleware.util.url_decode.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
kvlt.middleware.util.url_decode.cljs$lang$applyTo = (function (seq41515){
var G__41516 = cljs.core.first(seq41515);
var seq41515__$1 = cljs.core.next(seq41515);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41516,seq41515__$1);
});

kvlt.middleware.util.url_encode = (function kvlt$middleware$util$url_encode(var_args){
var args__4736__auto__ = [];
var len__4730__auto___41530 = arguments.length;
var i__4731__auto___41531 = (0);
while(true){
if((i__4731__auto___41531 < len__4730__auto___41530)){
args__4736__auto__.push((arguments[i__4731__auto___41531]));

var G__41532 = (i__4731__auto___41531 + (1));
i__4731__auto___41531 = G__41532;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return kvlt.middleware.util.url_encode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

kvlt.middleware.util.url_encode.cljs$core$IFn$_invoke$arity$variadic = (function (unencoded,p__41526){
var vec__41527 = p__41526;
var encoding = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41527,(0),null);
var encoding__$1 = (function (){var or__4131__auto__ = encoding;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "UTF-8";
}
})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("UTF-8",encoding__$1)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"kvlt.middleware.util","/private/var/folders/t5/f3xh0rdx5ds8d5rn2wr52fh40000gn/T/form-init8747378136274606403.clj",92,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay(((function (encoding__$1,vec__41527,encoding){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["url-encode ignoring encoding",encoding__$1], null);
});})(encoding__$1,vec__41527,encoding))
,null)),null,322851176);
} else {
}

return encodeURIComponent(unencoded);
});

kvlt.middleware.util.url_encode.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
kvlt.middleware.util.url_encode.cljs$lang$applyTo = (function (seq41524){
var G__41525 = cljs.core.first(seq41524);
var seq41524__$1 = cljs.core.next(seq41524);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41525,seq41524__$1);
});

/**
 * Takes a raw url path or query and url-encodes any illegal characters.
 *   Minimizes ambiguity by encoding space to %20.
 */
kvlt.middleware.util.url_encode_illegal_characters = (function kvlt$middleware$util$url_encode_illegal_characters(path_or_query){
if(cljs.core.truth_(path_or_query)){
return clojure.string.replace(clojure.string.replace(path_or_query," ","%20"),/[^a-zA-Z0-9\.\-\_\~\!\$\&\'\(\)\*\+\,\;\=\:\@\\/\%\?]/,kvlt.middleware.util.url_encode);
} else {
return null;
}
});
/**
 * Parse `s` as an RFC 2616 media type.
 */
kvlt.middleware.util.parse_content_type = (function kvlt$middleware$util$parse_content_type(s){
var temp__5718__auto__ = cljs.core.re_matches(/\s*(([^\/]+)\/([^ ;]+))\s*(\s*;.*)?/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(s));
if(cljs.core.truth_(temp__5718__auto__)){
var m = temp__5718__auto__;
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$content_DASH_type,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m,(1))),cljs.core.cst$kw$content_DASH_type_DASH_params,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (m,temp__5718__auto__){
return (function (p__41534){
var vec__41535 = p__41534;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41535,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41535,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case(k)),clojure.string.trim(v)], null);
});})(m,temp__5718__auto__))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (m,temp__5718__auto__){
return (function (p1__41533_SHARP_){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__41533_SHARP_,/=/);
});})(m,temp__5718__auto__))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(clojure.string.blank_QMARK_,cljs.core.identity(clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m,(4))),/\s*;\s*/))))], 0)))], null);
} else {
return null;
}
});
var pattern_41547 = /charset\s*=\s*([^\s]+)/i;
kvlt.middleware.util.charset = ((function (pattern_41547){
return (function kvlt$middleware$util$charset(var_args){
var args__4736__auto__ = [];
var len__4730__auto___41548 = arguments.length;
var i__4731__auto___41549 = (0);
while(true){
if((i__4731__auto___41549 < len__4730__auto___41548)){
args__4736__auto__.push((arguments[i__4731__auto___41549]));

var G__41550 = (i__4731__auto___41549 + (1));
i__4731__auto___41549 = G__41550;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return kvlt.middleware.util.charset.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});})(pattern_41547))
;

kvlt.middleware.util.charset.cljs$core$IFn$_invoke$arity$variadic = ((function (pattern_41547){
return (function (content_type,p__41540){
var vec__41541 = p__41540;
var map__41544 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41541,(0),null);
var map__41544__$1 = (((((!((map__41544 == null))))?(((((map__41544.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41544.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41544):map__41544);
var fallback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41544__$1,cljs.core.cst$kw$fallback);
var charset = (function (){var G__41546 = content_type;
var G__41546__$1 = (((G__41546 == null))?null:cljs.core.name(G__41546));
var G__41546__$2 = (((G__41546__$1 == null))?null:cljs.core.re_find(pattern_41547,G__41546__$1));
if((G__41546__$2 == null)){
return null;
} else {
return cljs.core.second(G__41546__$2);
}
})();
var or__4131__auto__ = charset;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = fallback;
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return "UTF-8";
}
}
});})(pattern_41547))
;

kvlt.middleware.util.charset.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
kvlt.middleware.util.charset.cljs$lang$applyTo = ((function (pattern_41547){
return (function (seq41538){
var G__41539 = cljs.core.first(seq41538);
var seq41538__$1 = cljs.core.next(seq41538);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41539,seq41538__$1);
});})(pattern_41547))
;

kvlt.middleware.util.string__GT_base64 = (function kvlt$middleware$util$string__GT_base64(x){
return goog.crypt.base64.encodeString(x);
});
kvlt.middleware.util.basic_auth = (function kvlt$middleware$util$basic_auth(v){
var vec__41551 = ((cljs.core.map_QMARK_(v))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__41554 = cljs.core.cst$kw$username;
return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(G__41554) : v.call(null,G__41554));
})(),(function (){var G__41555 = cljs.core.cst$kw$password;
return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(G__41555) : v.call(null,G__41555));
})()], null):v);
var user = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41551,(0),null);
var pass = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41551,(1),null);
return ["Basic ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(kvlt.middleware.util.string__GT_base64([cljs.core.str.cljs$core$IFn$_invoke$arity$1(user),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pass)].join('')))].join('');
});
kvlt.middleware.util.parse_url = (function kvlt$middleware$util$parse_url(url){
var url__$1 = (new goog.Uri(url));
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$scheme,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(url__$1.getScheme()),cljs.core.cst$kw$server_DASH_name,url__$1.getDomain(),cljs.core.cst$kw$server_DASH_port,(function (){var temp__5720__auto__ = url__$1.getPort();
if(cljs.core.truth_(temp__5720__auto__)){
var port = temp__5720__auto__;
if((port > (0))){
return port;
} else {
return null;
}
} else {
return null;
}
})(),cljs.core.cst$kw$uri,(function (){var G__41556 = url__$1;
var G__41556__$1 = (((G__41556 == null))?null:G__41556.getPath());
if((G__41556__$1 == null)){
return null;
} else {
return kvlt.middleware.util.url_encode_illegal_characters(G__41556__$1);
}
})(),cljs.core.cst$kw$query_DASH_string,(function (){var G__41557 = url__$1;
var G__41557__$1 = (((G__41557 == null))?null:G__41557.getQuery());
var G__41557__$2 = (((G__41557__$1 == null))?null:cljs.core.not_empty(G__41557__$1));
if((G__41557__$2 == null)){
return null;
} else {
return kvlt.middleware.util.url_encode_illegal_characters(G__41557__$2);
}
})(),cljs.core.cst$kw$user_DASH_info,(function (){var G__41558 = url__$1;
var G__41558__$1 = (((G__41558 == null))?null:G__41558.getUserInfo());
var G__41558__$2 = (((G__41558__$1 == null))?null:cljs.core.not_empty(G__41558__$1));
if((G__41558__$2 == null)){
return null;
} else {
return kvlt.middleware.util.url_decode(G__41558__$2);
}
})()], null);
});
