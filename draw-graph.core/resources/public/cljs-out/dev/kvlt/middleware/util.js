// Compiled by ClojureScript 1.10.520 {}
goog.provide('kvlt.middleware.util');
goog.require('cljs.core');
goog.require('kvlt.platform.util');
goog.require('cats.labs.promise');
goog.require('clojure.string');
goog.require('cats.core');
goog.require('taoensso.timbre');
goog.require('goog.crypt.base64');
kvlt.middleware.util.__GT_content_type = (function kvlt$middleware$util$__GT_content_type(var_args){
var G__37750 = arguments.length;
switch (G__37750) {
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
var major = (function (){var or__4131__auto__ = cljs.core.namespace.call(null,t);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"application","application",551185447);
}
})();
return [cljs.core.name.call(null,major),"/",cljs.core.name.call(null,t)].join('');
} else {
return t;
}
});

kvlt.middleware.util.__GT_content_type.cljs$core$IFn$_invoke$arity$2 = (function (t,charset){
var G__37751 = kvlt.middleware.util.__GT_content_type.call(null,t);
if(cljs.core.truth_(charset)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37751),"; charset=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(charset)].join('');
} else {
return G__37751;
}
});

kvlt.middleware.util.__GT_content_type.cljs$lang$maxFixedArity = 2;

kvlt.middleware.util.spec__GT_fn = (function kvlt$middleware$util$spec__GT_fn(spec){
if((spec == null)){
return cljs.core.identity;
} else {
if(cljs.core.coll_QMARK_.call(null,spec)){
var vec__37754 = spec;
var k = cljs.core.nth.call(null,vec__37754,(0),null);
var f = cljs.core.nth.call(null,vec__37754,(1),null);
return ((function (vec__37754,k,f){
return (function (p1__37753_SHARP_){
return cljs.core.update.call(null,p1__37753_SHARP_,k,f);
});
;})(vec__37754,k,f))
} else {
return spec;

}
}
});
kvlt.middleware.util.clean_req = (function kvlt$middleware$util$clean_req(r){
return cljs.core.dissoc.call(null,r,new cljs.core.Keyword("kvlt.middleware","request","kvlt.middleware/request",-1063165256),new cljs.core.Keyword("kvlt.middleware","response","kvlt.middleware/response",963961299),new cljs.core.Keyword("kvlt","trace","kvlt/trace",-1086193122));
});
kvlt.middleware.util.wrap_before = (function kvlt$middleware$util$wrap_before(f){
var map__37757 = cljs.core.meta.call(null,f);
var map__37757__$1 = (((((!((map__37757 == null))))?(((((map__37757.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37757.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37757):map__37757);
var has = cljs.core.get.call(null,map__37757__$1,new cljs.core.Keyword(null,"has","has",1466247447));
var removing = cljs.core.get.call(null,map__37757__$1,new cljs.core.Keyword(null,"removing","removing",1104822312));
var f__$1 = (cljs.core.truth_(has)?((function (map__37757,map__37757__$1,has,removing){
return (function (p__37759){
var map__37760 = p__37759;
var map__37760__$1 = (((((!((map__37760 == null))))?(((((map__37760.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37760.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37760):map__37760);
var req = map__37760__$1;
var v = cljs.core.get.call(null,map__37760__$1,has);
var G__37762 = req;
if(cljs.core.truth_(v)){
return f.call(null,G__37762);
} else {
return G__37762;
}
});})(map__37757,map__37757__$1,has,removing))
:f);
if(cljs.core.truth_(removing)){
return ((function (map__37757,map__37757__$1,has,removing,f__$1){
return (function (req){
return cljs.core.dissoc.call(null,f__$1.call(null,req),removing);
});
;})(map__37757,map__37757__$1,has,removing,f__$1))
} else {
return f__$1;
}
});
kvlt.middleware.util.__GT_mw = (function kvlt$middleware$util$__GT_mw(var_args){
var args__4736__auto__ = [];
var len__4730__auto___37776 = arguments.length;
var i__4731__auto___37777 = (0);
while(true){
if((i__4731__auto___37777 < len__4730__auto___37776)){
args__4736__auto__.push((arguments[i__4731__auto___37777]));

var G__37778 = (i__4731__auto___37777 + (1));
i__4731__auto___37777 = G__37778;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return kvlt.middleware.util.__GT_mw.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

kvlt.middleware.util.__GT_mw.cljs$core$IFn$_invoke$arity$variadic = (function (helpful_name,before,p__37767){
var vec__37768 = p__37767;
var after = cljs.core.nth.call(null,vec__37768,(0),null);
var after__$1 = kvlt.middleware.util.spec__GT_fn.call(null,after);
var before__$1 = kvlt.middleware.util.wrap_before.call(null,kvlt.middleware.util.spec__GT_fn.call(null,before));
return ((function (after__$1,before__$1,vec__37768,after){
return (function (issue_BANG_){
return ((function (after__$1,before__$1,vec__37768,after){
return (function (p__37771){
var map__37772 = p__37771;
var map__37772__$1 = (((((!((map__37772 == null))))?(((((map__37772.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37772.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37772):map__37772);
var req = map__37772__$1;
var trace = cljs.core.get.call(null,map__37772__$1,new cljs.core.Keyword("kvlt","trace","kvlt/trace",-1086193122));
var req__$1 = before__$1.call(null,req);
var req__$2 = (function (){var G__37774 = req__$1;
if(cljs.core.truth_(trace)){
return cljs.core.update.call(null,G__37774,new cljs.core.Keyword("kvlt.middleware","request","kvlt.middleware/request",-1063165256),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helpful_name,kvlt.middleware.util.clean_req.call(null,req__$1)], null));
} else {
return G__37774;
}
})();
return cats.core._GT__GT__EQ_.call(null,issue_BANG_.call(null,req__$2),cljs.core.comp.call(null,cats.core.return$,after__$1),cljs.core.comp.call(null,cats.core.return$,((function (req__$1,req__$2,map__37772,map__37772__$1,req,trace,after__$1,before__$1,vec__37768,after){
return (function (p1__37763_SHARP_){
var G__37775 = p1__37763_SHARP_;
if(cljs.core.truth_(trace)){
return cljs.core.update.call(null,G__37775,new cljs.core.Keyword("kvlt.middleware","response","kvlt.middleware/response",963961299),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helpful_name,kvlt.middleware.util.clean_req.call(null,req__$2)], null));
} else {
return G__37775;
}
});})(req__$1,req__$2,map__37772,map__37772__$1,req,trace,after__$1,before__$1,vec__37768,after))
));
});
;})(after__$1,before__$1,vec__37768,after))
});
;})(after__$1,before__$1,vec__37768,after))
});

kvlt.middleware.util.__GT_mw.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
kvlt.middleware.util.__GT_mw.cljs$lang$applyTo = (function (seq37764){
var G__37765 = cljs.core.first.call(null,seq37764);
var seq37764__$1 = cljs.core.next.call(null,seq37764);
var G__37766 = cljs.core.first.call(null,seq37764__$1);
var seq37764__$2 = cljs.core.next.call(null,seq37764__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37765,G__37766,seq37764__$2);
});

kvlt.middleware.util.url_decode = (function kvlt$middleware$util$url_decode(var_args){
var args__4736__auto__ = [];
var len__4730__auto___37785 = arguments.length;
var i__4731__auto___37786 = (0);
while(true){
if((i__4731__auto___37786 < len__4730__auto___37785)){
args__4736__auto__.push((arguments[i__4731__auto___37786]));

var G__37787 = (i__4731__auto___37786 + (1));
i__4731__auto___37786 = G__37787;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return kvlt.middleware.util.url_decode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

kvlt.middleware.util.url_decode.cljs$core$IFn$_invoke$arity$variadic = (function (encoded,p__37781){
var vec__37782 = p__37781;
var encoding = cljs.core.nth.call(null,vec__37782,(0),null);
var encoding__$1 = (function (){var or__4131__auto__ = encoding;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "UTF-8";
}
})();
if(cljs.core.not_EQ_.call(null,"UTF-8",encoding__$1)){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"kvlt.middleware.util","/private/var/folders/t5/f3xh0rdx5ds8d5rn2wr52fh40000gn/T/form-init4657202228440285352.clj",82,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (encoding__$1,vec__37782,encoding){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["url-decode ignoring encoding",encoding__$1], null);
});})(encoding__$1,vec__37782,encoding))
,null)),null,-1240257126);
} else {
}

return decodeURIComponent(encoded);
});

kvlt.middleware.util.url_decode.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
kvlt.middleware.util.url_decode.cljs$lang$applyTo = (function (seq37779){
var G__37780 = cljs.core.first.call(null,seq37779);
var seq37779__$1 = cljs.core.next.call(null,seq37779);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37780,seq37779__$1);
});

kvlt.middleware.util.url_encode = (function kvlt$middleware$util$url_encode(var_args){
var args__4736__auto__ = [];
var len__4730__auto___37794 = arguments.length;
var i__4731__auto___37795 = (0);
while(true){
if((i__4731__auto___37795 < len__4730__auto___37794)){
args__4736__auto__.push((arguments[i__4731__auto___37795]));

var G__37796 = (i__4731__auto___37795 + (1));
i__4731__auto___37795 = G__37796;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return kvlt.middleware.util.url_encode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

kvlt.middleware.util.url_encode.cljs$core$IFn$_invoke$arity$variadic = (function (unencoded,p__37790){
var vec__37791 = p__37790;
var encoding = cljs.core.nth.call(null,vec__37791,(0),null);
var encoding__$1 = (function (){var or__4131__auto__ = encoding;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "UTF-8";
}
})();
if(cljs.core.not_EQ_.call(null,"UTF-8",encoding__$1)){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"kvlt.middleware.util","/private/var/folders/t5/f3xh0rdx5ds8d5rn2wr52fh40000gn/T/form-init4657202228440285352.clj",92,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (encoding__$1,vec__37791,encoding){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["url-encode ignoring encoding",encoding__$1], null);
});})(encoding__$1,vec__37791,encoding))
,null)),null,1599527657);
} else {
}

return encodeURIComponent(unencoded);
});

kvlt.middleware.util.url_encode.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
kvlt.middleware.util.url_encode.cljs$lang$applyTo = (function (seq37788){
var G__37789 = cljs.core.first.call(null,seq37788);
var seq37788__$1 = cljs.core.next.call(null,seq37788);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37789,seq37788__$1);
});

/**
 * Takes a raw url path or query and url-encodes any illegal characters.
 *   Minimizes ambiguity by encoding space to %20.
 */
kvlt.middleware.util.url_encode_illegal_characters = (function kvlt$middleware$util$url_encode_illegal_characters(path_or_query){
if(cljs.core.truth_(path_or_query)){
return clojure.string.replace.call(null,clojure.string.replace.call(null,path_or_query," ","%20"),/[^a-zA-Z0-9\.\-\_\~\!\$\&\'\(\)\*\+\,\;\=\:\@\\/\%\?]/,kvlt.middleware.util.url_encode);
} else {
return null;
}
});
/**
 * Parse `s` as an RFC 2616 media type.
 */
kvlt.middleware.util.parse_content_type = (function kvlt$middleware$util$parse_content_type(s){
var temp__5718__auto__ = cljs.core.re_matches.call(null,/\s*(([^\/]+)\/([^ ;]+))\s*(\s*;.*)?/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(s));
if(cljs.core.truth_(temp__5718__auto__)){
var m = temp__5718__auto__;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"content-type","content-type",-508222634),cljs.core.keyword.call(null,cljs.core.nth.call(null,m,(1))),new cljs.core.Keyword(null,"content-type-params","content-type-params",-199252295),cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.mapcat.call(null,((function (m,temp__5718__auto__){
return (function (p__37798){
var vec__37799 = p__37798;
var k = cljs.core.nth.call(null,vec__37799,(0),null);
var v = cljs.core.nth.call(null,vec__37799,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,clojure.string.lower_case.call(null,k)),clojure.string.trim.call(null,v)], null);
});})(m,temp__5718__auto__))
,cljs.core.map.call(null,((function (m,temp__5718__auto__){
return (function (p1__37797_SHARP_){
return clojure.string.split.call(null,p1__37797_SHARP_,/=/);
});})(m,temp__5718__auto__))
,cljs.core.remove.call(null,clojure.string.blank_QMARK_,cljs.core.identity.call(null,clojure.string.split.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,m,(4))),/\s*;\s*/))))))], null);
} else {
return null;
}
});
var pattern_37811 = /charset\s*=\s*([^\s]+)/i;
kvlt.middleware.util.charset = ((function (pattern_37811){
return (function kvlt$middleware$util$charset(var_args){
var args__4736__auto__ = [];
var len__4730__auto___37812 = arguments.length;
var i__4731__auto___37813 = (0);
while(true){
if((i__4731__auto___37813 < len__4730__auto___37812)){
args__4736__auto__.push((arguments[i__4731__auto___37813]));

var G__37814 = (i__4731__auto___37813 + (1));
i__4731__auto___37813 = G__37814;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return kvlt.middleware.util.charset.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});})(pattern_37811))
;

kvlt.middleware.util.charset.cljs$core$IFn$_invoke$arity$variadic = ((function (pattern_37811){
return (function (content_type,p__37804){
var vec__37805 = p__37804;
var map__37808 = cljs.core.nth.call(null,vec__37805,(0),null);
var map__37808__$1 = (((((!((map__37808 == null))))?(((((map__37808.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37808.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37808):map__37808);
var fallback = cljs.core.get.call(null,map__37808__$1,new cljs.core.Keyword(null,"fallback","fallback",761637929));
var charset = (function (){var G__37810 = content_type;
var G__37810__$1 = (((G__37810 == null))?null:cljs.core.name.call(null,G__37810));
var G__37810__$2 = (((G__37810__$1 == null))?null:cljs.core.re_find.call(null,pattern_37811,G__37810__$1));
if((G__37810__$2 == null)){
return null;
} else {
return cljs.core.second.call(null,G__37810__$2);
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
});})(pattern_37811))
;

kvlt.middleware.util.charset.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
kvlt.middleware.util.charset.cljs$lang$applyTo = ((function (pattern_37811){
return (function (seq37802){
var G__37803 = cljs.core.first.call(null,seq37802);
var seq37802__$1 = cljs.core.next.call(null,seq37802);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37803,seq37802__$1);
});})(pattern_37811))
;

kvlt.middleware.util.string__GT_base64 = (function kvlt$middleware$util$string__GT_base64(x){
return goog.crypt.base64.encodeString(x);
});
kvlt.middleware.util.basic_auth = (function kvlt$middleware$util$basic_auth(v){
var vec__37815 = ((cljs.core.map_QMARK_.call(null,v))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v.call(null,new cljs.core.Keyword(null,"username","username",1605666410)),v.call(null,new cljs.core.Keyword(null,"password","password",417022471))], null):v);
var user = cljs.core.nth.call(null,vec__37815,(0),null);
var pass = cljs.core.nth.call(null,vec__37815,(1),null);
return ["Basic ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(kvlt.middleware.util.string__GT_base64.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(user),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pass)].join('')))].join('');
});
kvlt.middleware.util.parse_url = (function kvlt$middleware$util$parse_url(url){
var url__$1 = (new goog.Uri(url));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"scheme","scheme",90199613),cljs.core.keyword.call(null,url__$1.getScheme()),new cljs.core.Keyword(null,"server-name","server-name",-1012104295),url__$1.getDomain(),new cljs.core.Keyword(null,"server-port","server-port",663745648),(function (){var temp__5720__auto__ = url__$1.getPort();
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
})(),new cljs.core.Keyword(null,"uri","uri",-774711847),(function (){var G__37818 = url__$1;
var G__37818__$1 = (((G__37818 == null))?null:G__37818.getPath());
if((G__37818__$1 == null)){
return null;
} else {
return kvlt.middleware.util.url_encode_illegal_characters.call(null,G__37818__$1);
}
})(),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),(function (){var G__37819 = url__$1;
var G__37819__$1 = (((G__37819 == null))?null:G__37819.getQuery());
var G__37819__$2 = (((G__37819__$1 == null))?null:cljs.core.not_empty.call(null,G__37819__$1));
if((G__37819__$2 == null)){
return null;
} else {
return kvlt.middleware.util.url_encode_illegal_characters.call(null,G__37819__$2);
}
})(),new cljs.core.Keyword(null,"user-info","user-info",-1061909920),(function (){var G__37820 = url__$1;
var G__37820__$1 = (((G__37820 == null))?null:G__37820.getUserInfo());
var G__37820__$2 = (((G__37820__$1 == null))?null:cljs.core.not_empty.call(null,G__37820__$1));
if((G__37820__$2 == null)){
return null;
} else {
return kvlt.middleware.util.url_decode.call(null,G__37820__$2);
}
})()], null);
});

//# sourceMappingURL=util.js.map
