goog.provide('kvlt.middleware');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('kvlt.middleware.util');
goog.require('kvlt.util');
goog.require('kvlt.platform.util');
goog.require('clojure.set');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('cats.core');
kvlt.middleware.header = (function kvlt$middleware$header(var_args){
var G__47053 = arguments.length;
switch (G__47053) {
case 2:
return kvlt.middleware.header.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return kvlt.middleware.header.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

kvlt.middleware.header.cljs$core$IFn$_invoke$arity$2 = (function (p__47054,k){
var map__47057 = p__47054;
var map__47057__$1 = (((((!((map__47057 == null))))?(((((map__47057.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47057.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47057):map__47057);
var resp = map__47057__$1;
var hs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47057__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var and__4120__auto__ = hs;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.some(hs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.name(k)], null));
} else {
return and__4120__auto__;
}
});

kvlt.middleware.header.cljs$core$IFn$_invoke$arity$3 = (function (m,k,v){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"headers","headers",-835030129),(function (h){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(h,k,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.name(k)], 0)),cljs.core.name(k),v);
}));
});

kvlt.middleware.header.cljs$lang$maxFixedArity = 3;

kvlt.middleware.body__GT_string = (function kvlt$middleware$body__GT_string(p__47072){
var map__47073 = p__47072;
var map__47073__$1 = (((((!((map__47073 == null))))?(((((map__47073.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47073.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47073):map__47073);
var resp = map__47073__$1;
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47073__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
return kvlt.platform.util.byte_array__GT_str(body,kvlt.middleware.util.charset(kvlt.middleware.header.cljs$core$IFn$_invoke$arity$2(resp,new cljs.core.Keyword(null,"content-type","content-type",-508222634))));
});
if((typeof kvlt !== 'undefined') && (typeof kvlt.middleware !== 'undefined') && (typeof kvlt.middleware.from_content_type !== 'undefined')){
} else {
/**
 * Used by [[as]] to transform an incoming response.  Dispatches on
 *   `:content-type`' header, as a namespace-qualified
 *   keyword (e.g. `:application/edn`).  The input and output are the
 *   top-level response map, not only the response body.
 * 
 *   The default implementation (i.e. unrecognized content-type) returns
 *   the response map unmodified.
 */
kvlt.middleware.from_content_type = (function (){var method_table__4613__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__47082 = cljs.core.get_global_hierarchy;
return (fexpr__47082.cljs$core$IFn$_invoke$arity$0 ? fexpr__47082.cljs$core$IFn$_invoke$arity$0() : fexpr__47082.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("kvlt.middleware","from-content-type"),((function (method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__){
return (function (resp){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kvlt.middleware.util.__GT_content_type.cljs$core$IFn$_invoke$arity$1(kvlt.middleware.header.cljs$core$IFn$_invoke$arity$2(resp,new cljs.core.Keyword(null,"content-type","content-type",-508222634))));
});})(method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
kvlt.middleware.from_content_type.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (resp){
return resp;
}));
kvlt.middleware.from_content_type.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("application","edn","application/edn",-63927515),(function (resp){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(resp,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(kvlt.middleware.body__GT_string(resp)));
}));
kvlt.middleware.from_content_type.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("application","json","application/json",1747896298),(function (p__47092){
var map__47093 = p__47092;
var map__47093__$1 = (((((!((map__47093 == null))))?(((((map__47093.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47093.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47093):map__47093);
var resp = map__47093__$1;
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47093__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(resp,new cljs.core.Keyword(null,"body","body",-2049205669),kvlt.platform.util.parse_json(kvlt.middleware.body__GT_string(resp)));
}));
kvlt.middleware.hint__GT_body_type = (function kvlt$middleware$hint__GT_body_type(x){
if((((x instanceof cljs.core.Keyword)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("kvlt.body",cljs.core.namespace(x))))){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(x));
} else {
return null;
}
});
/**
 * Look for a body with a `:kvlt.body/`-prefixed metadata key, setting
 *   the request's `:type` and `:form-params` keys
 *   accordingly (e.g. `:body ^:kvlt/edn {:x 1}`)
 */
kvlt.middleware.body_type_hint = kvlt.middleware.util.__GT_mw.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"body-type-hint","body-type-hint",-939145957),cljs.core.with_meta((function (p__47099){
var map__47100 = p__47099;
var map__47100__$1 = (((((!((map__47100 == null))))?(((((map__47100.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47100.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47100):map__47100);
var req = map__47100__$1;
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47100__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var temp__5718__auto__ = cljs.core.some(kvlt.middleware.hint__GT_body_type,cljs.core.keys(cljs.core.meta(body)));
if(cljs.core.truth_(temp__5718__auto__)){
var t = temp__5718__auto__;
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(req,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(t),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"form-params","form-params",1884296467),body], 0)),new cljs.core.Keyword(null,"body","body",-2049205669));
} else {
return req;
}
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"has","has",1466247447),new cljs.core.Keyword(null,"body","body",-2049205669)], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
kvlt.util.doc_examples_BANG_(new cljs.core.Var(function(){return kvlt.middleware.body_type_hint;},new cljs.core.Symbol("kvlt.middleware","body-type-hint","kvlt.middleware/body-type-hint",-789443311,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"kvlt.middleware","kvlt.middleware",-1330994476,null),new cljs.core.Symbol(null,"body-type-hint","body-type-hint",701385570,null),"kvlt/middleware.cljc",22,1,48,48,cljs.core.List.EMPTY,"Look for a body with a `:kvlt.body/`-prefixed metadata key, setting\n  the request's `:type` and `:form-params` keys\n  accordingly (e.g. `:body ^:kvlt/edn {:x 1}`)",(cljs.core.truth_(kvlt.middleware.body_type_hint)?kvlt.middleware.body_type_hint.cljs$lang$test:null)])),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("kvlt.body","edn","kvlt.body/edn",1136261434),true], null))], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"form-params","form-params",1884296467),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"edn","edn",1317840885)], null)], null)));
/**
 * Turn request's `:content-type` (or `:type`), if any, and
 * `:character-encoding`, if any, into a "content-type" header & leave
 * top-level `:content-type` key in place. 
 */
kvlt.middleware.content_type = kvlt.middleware.util.__GT_mw.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"content-type","content-type",-508222634),(function (p__47111){
var map__47112 = p__47111;
var map__47112__$1 = (((((!((map__47112 == null))))?(((((map__47112.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47112.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47112):map__47112);
var req = map__47112__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47112__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47112__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var character_encoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47112__$1,new cljs.core.Keyword(null,"character-encoding","character-encoding",-1946080777));
var map__47144 = (function (){var G__47145 = req;
if(cljs.core.truth_(type)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47145,new cljs.core.Keyword(null,"content-type","content-type",-508222634),type);
} else {
return G__47145;
}
})();
var map__47144__$1 = (((((!((map__47144 == null))))?(((((map__47144.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47144.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47144):map__47144);
var req__$1 = map__47144__$1;
var content_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47144__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var G__47152 = req__$1;
if(cljs.core.truth_(content_type)){
return kvlt.middleware.header.cljs$core$IFn$_invoke$arity$3(G__47152,new cljs.core.Keyword(null,"content-type","content-type",-508222634),kvlt.middleware.util.__GT_content_type.cljs$core$IFn$_invoke$arity$2(content_type,character_encoding));
} else {
return G__47152;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
kvlt.util.doc_examples_BANG_(new cljs.core.Var(function(){return kvlt.middleware.content_type;},new cljs.core.Symbol("kvlt.middleware","content-type","kvlt.middleware/content-type",-400988246,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"kvlt.middleware","kvlt.middleware",-1330994476,null),new cljs.core.Symbol(null,"content-type","content-type",1132308893,null),"kvlt/middleware.cljc",20,1,67,67,cljs.core.List.EMPTY,"Turn request's `:content-type` (or `:type`), if any, and\n   `:character-encoding`, if any, into a \"content-type\" header & leave\n   top-level `:content-type` key in place. ",(cljs.core.truth_(kvlt.middleware.content_type)?kvlt.middleware.content_type.cljs$lang$test:null)])),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"content-type","content-type",-508222634),"text/html",new cljs.core.Keyword(null,"character-encoding","character-encoding",-1946080777),"US-ASCII"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content-type","content-type",-508222634),"text/html; charset=US-ASCII"], null),new cljs.core.Keyword(null,"content-type","content-type",-508222634),"text/html"], null)], null)));
/**
 * Turn request's `:accept` value, if any, into an "accept" header &
 *   remove the top-level key.
 */
kvlt.middleware.accept = kvlt.middleware.util.__GT_mw.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"accept","accept",1874130431),cljs.core.with_meta((function (p__47162){
var map__47163 = p__47162;
var map__47163__$1 = (((((!((map__47163 == null))))?(((((map__47163.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47163.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47163):map__47163);
var req = map__47163__$1;
var accept = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47163__$1,new cljs.core.Keyword(null,"accept","accept",1874130431));
return kvlt.middleware.header.cljs$core$IFn$_invoke$arity$3(req,new cljs.core.Keyword(null,"accept","accept",1874130431),kvlt.middleware.util.__GT_content_type.cljs$core$IFn$_invoke$arity$1(accept));
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"has","has",1466247447),new cljs.core.Keyword(null,"accept","accept",1874130431),new cljs.core.Keyword(null,"removing","removing",1104822312),new cljs.core.Keyword(null,"accept","accept",1874130431)], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
kvlt.util.doc_examples_BANG_(new cljs.core.Var(function(){return kvlt.middleware.accept;},new cljs.core.Symbol("kvlt.middleware","accept","kvlt.middleware/accept",2047916971,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"kvlt.middleware","kvlt.middleware",-1330994476,null),new cljs.core.Symbol(null,"accept","accept",-780305338,null),"kvlt/middleware.cljc",14,1,86,86,cljs.core.List.EMPTY,"Turn request's `:accept` value, if any, into an \"accept\" header &\n  remove the top-level key.",(cljs.core.truth_(kvlt.middleware.accept)?kvlt.middleware.accept.cljs$lang$test:null)])),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"accept","accept",1874130431),new cljs.core.Keyword(null,"edn","edn",1317840885)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["accept","application/edn"], null)], null)], null)));
kvlt.middleware.as_key = (function kvlt$middleware$as_key(resp){
return new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("kvlt","request","kvlt/request",1769844894).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(resp)));
});
if((typeof kvlt !== 'undefined') && (typeof kvlt.middleware !== 'undefined') && (typeof kvlt.middleware.as_type !== 'undefined')){
} else {
kvlt.middleware.as_type = (function (){var method_table__4613__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__47168 = cljs.core.get_global_hierarchy;
return (fexpr__47168.cljs$core$IFn$_invoke$arity$0 ? fexpr__47168.cljs$core$IFn$_invoke$arity$0() : fexpr__47168.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("kvlt.middleware","as-type"),kvlt.middleware.as_key,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
kvlt.middleware.as_type.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"string","string",-1989541586),(function (p__47169){
var map__47170 = p__47169;
var map__47170__$1 = (((((!((map__47170 == null))))?(((((map__47170.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47170.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47170):map__47170);
var resp = map__47170__$1;
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47170__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
return resp;
}));
kvlt.middleware.as_type.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"byte-array","byte-array",369158537),(function (p__47173){
var map__47174 = p__47173;
var map__47174__$1 = (((((!((map__47174 == null))))?(((((map__47174.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47174.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47174):map__47174);
var resp = map__47174__$1;
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47174__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
if(kvlt.platform.util.byte_array_QMARK_(body)){
} else {
throw (new Error(["Assert failed: ","For platform-specific reasons, :as :byte-array is special-cased in\n  kvlt.platform.http/request","\n","(platform.util/byte-array? body)"].join('')));
}

return resp;
}));
kvlt.middleware.as_type.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"auto","auto",-566279492),(function (resp){
return (kvlt.middleware.from_content_type.cljs$core$IFn$_invoke$arity$1 ? kvlt.middleware.from_content_type.cljs$core$IFn$_invoke$arity$1(resp) : kvlt.middleware.from_content_type.call(null,resp));
}));
kvlt.middleware.as_type.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__47181){
var map__47182 = p__47181;
var map__47182__$1 = (((((!((map__47182 == null))))?(((((map__47182.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47182.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47182):map__47182);
var resp = map__47182__$1;
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47182__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var t = kvlt.middleware.header.cljs$core$IFn$_invoke$arity$2(resp,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var resp__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(resp,new cljs.core.Keyword(null,"orig-content-type","orig-content-type",-995245643),t);
var G__47187 = kvlt.middleware.header.cljs$core$IFn$_invoke$arity$3(resp__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634),kvlt.middleware.util.__GT_content_type.cljs$core$IFn$_invoke$arity$1(kvlt.middleware.as_key(resp__$1)));
return (kvlt.middleware.from_content_type.cljs$core$IFn$_invoke$arity$1 ? kvlt.middleware.from_content_type.cljs$core$IFn$_invoke$arity$1(G__47187) : kvlt.middleware.from_content_type.call(null,G__47187));
}));
kvlt.middleware.parsing_error = (function kvlt$middleware$parsing_error(resp,e){
var error = kvlt.platform.util.exception__GT_map.cljs$core$IFn$_invoke$arity$variadic(e,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"middleware-error","middleware-error",873820682),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"middleware-error","middleware-error",873820682)], null)], 0));
var G__47188 = resp;
if(cljs.core.not((function (){var G__47189 = new cljs.core.Keyword(null,"error","error",-978969032);
return (resp.cljs$core$IFn$_invoke$arity$1 ? resp.cljs$core$IFn$_invoke$arity$1(G__47189) : resp.call(null,G__47189));
})())){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__47188,error], 0));
} else {
return G__47188;
}
});
/**
 * Response body type conversion --- `:string` `:byte-array` `:auto` `:json` `:edn` etc..
 * 
 *   See [[from-content-type]] for custom conversions.
 */
kvlt.middleware.as = kvlt.middleware.util.__GT_mw.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"as","as",1148689641),(function (p1__47190_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Keyword(null,"string","string",-1989541586)], null),p1__47190_SHARP_], 0));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (resp){
try{return (kvlt.middleware.as_type.cljs$core$IFn$_invoke$arity$1 ? kvlt.middleware.as_type.cljs$core$IFn$_invoke$arity$1(resp) : kvlt.middleware.as_type.call(null,resp));
}catch (e47191){if((e47191 instanceof Error)){
var e = e47191;
return kvlt.middleware.parsing_error(resp,e);
} else {
throw e47191;

}
}})], 0));
/**
 * Convert the `:accept-encoding` option (keyword/str, or collection of) to an
 *   acceptable `Accept-Encoding` header.
 * 
 *   This middleware is not likely to have any effect in a browser
 *   environment.
 */
kvlt.middleware.accept_encoding = kvlt.middleware.util.__GT_mw.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"accept-encoding","accept-encoding",-317924396),cljs.core.with_meta((function (p__47195){
var map__47196 = p__47195;
var map__47196__$1 = (((((!((map__47196 == null))))?(((((map__47196.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47196.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47196):map__47196);
var req = map__47196__$1;
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47196__$1,new cljs.core.Keyword(null,"accept-encoding","accept-encoding",-317924396));
return kvlt.middleware.header.cljs$core$IFn$_invoke$arity$3(req,new cljs.core.Keyword(null,"accept-encoding","accept-encoding",-317924396),((cljs.core.coll_QMARK_(v))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,v)):cljs.core.name(v)));
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"has","has",1466247447),new cljs.core.Keyword(null,"accept-encoding","accept-encoding",-317924396),new cljs.core.Keyword(null,"removing","removing",1104822312),new cljs.core.Keyword(null,"accept-encoding","accept-encoding",-317924396)], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
kvlt.util.doc_examples_BANG_(new cljs.core.Var(function(){return kvlt.middleware.accept_encoding;},new cljs.core.Symbol("kvlt.middleware","accept-encoding","kvlt.middleware/accept-encoding",-504291282,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"kvlt.middleware","kvlt.middleware",-1330994476,null),new cljs.core.Symbol(null,"accept-encoding","accept-encoding",1322607131,null),"kvlt/middleware.cljc",23,1,137,137,cljs.core.List.EMPTY,"Convert the `:accept-encoding` option (keyword/str, or collection of) to an\n  acceptable `Accept-Encoding` header.\n\n  This middleware is not likely to have any effect in a browser\n  environment.",(cljs.core.truth_(kvlt.middleware.accept_encoding)?kvlt.middleware.accept_encoding.cljs$lang$test:null)])),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"accept-encoding","accept-encoding",-317924396),new cljs.core.Keyword(null,"origami","origami",1780950841)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"accept-encoding","accept-encoding",-317924396),"origami"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"accept-encoding","accept-encoding",-317924396),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"accept-encoding","accept-encoding",-317924396),"a, b"], null)], null)], null)));
/**
 * Rename request's `:method` key to `:request-method`
 */
kvlt.middleware.method = kvlt.middleware.util.__GT_mw.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"method","method",55703592),cljs.core.with_meta((function (p__47201){
var map__47202 = p__47201;
var map__47202__$1 = (((((!((map__47202 == null))))?(((((map__47202.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47202.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47202):map__47202);
var req = map__47202__$1;
var m = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47202__$1,new cljs.core.Keyword(null,"method","method",55703592));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(req,new cljs.core.Keyword(null,"request-method","request-method",1764796830),m);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"has","has",1466247447),new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"removing","removing",1104822312),new cljs.core.Keyword(null,"method","method",55703592)], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
/**
 * Rename request's `:port` key to `:server-port`
 */
kvlt.middleware.port = kvlt.middleware.util.__GT_mw.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"port","port",1534937262),cljs.core.with_meta((function (p__47204){
var map__47205 = p__47204;
var map__47205__$1 = (((((!((map__47205 == null))))?(((((map__47205.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47205.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47205):map__47205);
var req = map__47205__$1;
var port = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47205__$1,new cljs.core.Keyword(null,"port","port",1534937262));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(req,new cljs.core.Keyword(null,"server-port","server-port",663745648),port);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"has","has",1466247447),new cljs.core.Keyword(null,"port","port",1534937262),new cljs.core.Keyword(null,"removing","removing",1104822312),new cljs.core.Keyword(null,"port","port",1534937262)], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
kvlt.util.doc_examples_BANG_(new cljs.core.Var(function(){return kvlt.middleware.method;},new cljs.core.Symbol("kvlt.middleware","method","kvlt.middleware/method",-635028478,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"kvlt.middleware","kvlt.middleware",-1330994476,null),new cljs.core.Symbol(null,"method","method",1696235119,null),"kvlt/middleware.cljc",14,1,158,158,cljs.core.List.EMPTY,"Rename request's `:method` key to `:request-method`",(cljs.core.truth_(kvlt.middleware.method)?kvlt.middleware.method.cljs$lang$test:null)])),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-method","request-method",1764796830),new cljs.core.Keyword(null,"get","get",1683182755)], null)], null)));
/**
 * Turn request's `:url` value, if any, into top-level `:scheme`,
 *   `:server-name`, `:server-port`, `:uri`, `:query-string`, and
 *   `:user-info` keys
 */
kvlt.middleware.url = kvlt.middleware.util.__GT_mw.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"url","url",276297046),cljs.core.with_meta((function (p__47210){
var map__47211 = p__47210;
var map__47211__$1 = (((((!((map__47211 == null))))?(((((map__47211.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47211.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47211):map__47211);
var req = map__47211__$1;
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47211__$1,new cljs.core.Keyword(null,"url","url",276297046));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([req,kvlt.middleware.util.parse_url(url)], 0));
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"has","has",1466247447),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"removing","removing",1104822312),new cljs.core.Keyword(null,"url","url",276297046)], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
kvlt.util.doc_examples_BANG_(new cljs.core.Var(function(){return kvlt.middleware.url;},new cljs.core.Symbol("kvlt.middleware","url","kvlt.middleware/url",-847267414,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"kvlt.middleware","kvlt.middleware",-1330994476,null),new cljs.core.Symbol(null,"url","url",1916828573,null),"kvlt/middleware.cljc",11,1,173,173,cljs.core.List.EMPTY,"Turn request's `:url` value, if any, into top-level `:scheme`,\n  `:server-name`, `:server-port`, `:uri`, `:query-string`, and\n  `:user-info` keys",(cljs.core.truth_(kvlt.middleware.url)?kvlt.middleware.url.cljs$lang$test:null)])),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),"ftp://localhost:9/x?x=1"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"scheme","scheme",90199613),new cljs.core.Keyword(null,"ftp","ftp",911215182),new cljs.core.Keyword(null,"server-name","server-name",-1012104295),"localhost",new cljs.core.Keyword(null,"server-port","server-port",663745648),(9),new cljs.core.Keyword(null,"uri","uri",-774711847),"/x",new cljs.core.Keyword(null,"user-info","user-info",-1061909920),null,new cljs.core.Keyword(null,"query-string","query-string",-1018845061),"x=1"], null)], null)));
/**
 * Add `:content-type` key having value `:text/plain`, if no `:content-type` present.
 * 
 *   Assumes placement before [[content-type]].
 */
kvlt.middleware.default_content_type = kvlt.middleware.util.__GT_mw.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"default-content-type","default-content-type",28331753),(function (req){
if(cljs.core.truth_((function (){var and__4120__auto__ = (function (){var G__47236 = new cljs.core.Keyword(null,"body","body",-2049205669);
return (req.cljs$core$IFn$_invoke$arity$1 ? req.cljs$core$IFn$_invoke$arity$1(G__47236) : req.call(null,G__47236));
})();
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not((function (){var or__4131__auto__ = (function (){var G__47238 = new cljs.core.Keyword(null,"content-type","content-type",-508222634);
return (req.cljs$core$IFn$_invoke$arity$1 ? req.cljs$core$IFn$_invoke$arity$1(G__47238) : req.call(null,G__47238));
})();
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return kvlt.middleware.header.cljs$core$IFn$_invoke$arity$2(req,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
}
})());
} else {
return and__4120__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(req,new cljs.core.Keyword(null,"content-type","content-type",-508222634),new cljs.core.Keyword("text","plain","text/plain",1363827258));
} else {
return req;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
/**
 * Convert keys within request's `:headers` value to strings, and
 * response's `:headers` values to keywords. 
 */
kvlt.middleware.keyword_headers = kvlt.middleware.util.__GT_mw.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"keyword-headers","keyword-headers",1310589326),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),clojure.walk.stringify_keys], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),clojure.walk.keywordize_keys], null)], 0));
kvlt.middleware.lower_case = (function kvlt$middleware$lower_case(p1__47239_SHARP_){
var G__47240 = clojure.string.lower_case(cljs.core.name(p1__47239_SHARP_));
if((p1__47239_SHARP_ instanceof cljs.core.Keyword)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(G__47240);
} else {
return G__47240;
}
});
/**
 * Convert keys within request & response's `:headers` value to lower
 *   case.
 */
kvlt.middleware.lower_case_headers = kvlt.middleware.util.__GT_mw.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"lower-case-headers","lower-case-headers",541852280),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),(function (p1__47241_SHARP_){
return kvlt.util.map_keys(kvlt.middleware.lower_case,p1__47241_SHARP_);
})], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),(function (p1__47242_SHARP_){
return kvlt.util.map_keys(kvlt.middleware.lower_case,p1__47242_SHARP_);
})], null)], 0));
/**
 * Convert `:basic-auth` values (vector or map) into an
 *  `:authorization` header.
 */
kvlt.middleware.basic_auth = kvlt.middleware.util.__GT_mw.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332),cljs.core.with_meta((function (p__47243){
var map__47244 = p__47243;
var map__47244__$1 = (((((!((map__47244 == null))))?(((((map__47244.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47244.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47244):map__47244);
var req = map__47244__$1;
var basic_auth = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47244__$1,new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332));
return kvlt.middleware.header.cljs$core$IFn$_invoke$arity$3(req,new cljs.core.Keyword(null,"authorization","authorization",-166302136),kvlt.middleware.util.basic_auth(basic_auth));
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"has","has",1466247447),new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332),new cljs.core.Keyword(null,"removing","removing",1104822312),new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332)], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
kvlt.util.doc_examples_BANG_(new cljs.core.Var(function(){return kvlt.middleware.basic_auth;},new cljs.core.Symbol("kvlt.middleware","basic-auth","kvlt.middleware/basic-auth",-1836285898,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"kvlt.middleware","kvlt.middleware",-1330994476,null),new cljs.core.Symbol(null,"basic-auth","basic-auth",967368195,null),"kvlt/middleware.cljc",18,1,214,214,cljs.core.List.EMPTY,"Convert `:basic-auth` values (vector or map) into an\n `:authorization` header.",(cljs.core.truth_(kvlt.middleware.basic_auth)?kvlt.middleware.basic_auth.cljs$lang$test:null)])),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["user","pass"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"authorization","authorization",-166302136),"Basic ..."], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"username","username",1605666410),"user",new cljs.core.Keyword(null,"password","password",417022471),"pass"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"authorization","authorization",-166302136),"Basic ..."], null)], null)], null)));
/**
 * Convert `:oauth-token` value into an `:authorization` header
 */
kvlt.middleware.oauth_token = kvlt.middleware.util.__GT_mw.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191),cljs.core.with_meta((function (p__47246){
var map__47247 = p__47246;
var map__47247__$1 = (((((!((map__47247 == null))))?(((((map__47247.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47247.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47247):map__47247);
var req = map__47247__$1;
var oauth_token = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47247__$1,new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191));
return kvlt.middleware.header.cljs$core$IFn$_invoke$arity$3(req,new cljs.core.Keyword(null,"authorization","authorization",-166302136),["Bearer ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(oauth_token)].join(''));
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"has","has",1466247447),new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191),new cljs.core.Keyword(null,"removing","removing",1104822312),new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191)], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
kvlt.util.doc_examples_BANG_(new cljs.core.Var(function(){return kvlt.middleware.oauth_token;},new cljs.core.Symbol("kvlt.middleware","oauth-token","kvlt.middleware/oauth-token",-1556344573,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"kvlt.middleware","kvlt.middleware",-1330994476,null),new cljs.core.Symbol(null,"oauth-token","oauth-token",1951946718,null),"kvlt/middleware.cljc",19,1,226,226,cljs.core.List.EMPTY,"Convert `:oauth-token` value into an `:authorization` header",(cljs.core.truth_(kvlt.middleware.oauth_token)?kvlt.middleware.oauth_token.cljs$lang$test:null)])),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191),"xyz"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"authorization","authorization",-166302136),"Bearer xyz"], null)], null)], null)));
/**
 * Merge request map with `{:method :get}`.
 * 
 *   Assumes placement before [[method]].
 */
kvlt.middleware.default_method = kvlt.middleware.util.__GT_mw.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"default-method","default-method",-616461794),(function (p1__47255_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755)], null),p1__47255_SHARP_], 0));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0));
kvlt.util.doc_examples_BANG_(new cljs.core.Var(function(){return kvlt.middleware.default_method;},new cljs.core.Symbol("kvlt.middleware","default-method","kvlt.middleware/default-method",-2078157256,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"kvlt.middleware","kvlt.middleware",-1330994476,null),new cljs.core.Symbol(null,"default-method","default-method",1024069733,null),"kvlt/middleware.cljc",22,1,235,235,cljs.core.List.EMPTY,"Merge request map with `{:method :get}`.\n\n  Assumes placement before [[method]].",(cljs.core.truth_(kvlt.middleware.default_method)?kvlt.middleware.default_method.cljs$lang$test:null)])),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755)], null)], null)));
if((typeof kvlt !== 'undefined') && (typeof kvlt.middleware !== 'undefined') && (typeof kvlt.middleware.decompress_body !== 'undefined')){
} else {
/**
 * Dispatch on the response's `:content-encoding` header value.
 *   Clojure implementations exist for "gzip" and "deflate".
 */
kvlt.middleware.decompress_body = (function (){var method_table__4613__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__47256 = cljs.core.get_global_hierarchy;
return (fexpr__47256.cljs$core$IFn$_invoke$arity$0 ? fexpr__47256.cljs$core$IFn$_invoke$arity$0() : fexpr__47256.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("kvlt.middleware","decompress-body"),((function (method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__){
return (function (resp){
var and__4120__auto__ = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(resp);
if(cljs.core.truth_(and__4120__auto__)){
return kvlt.middleware.header.cljs$core$IFn$_invoke$arity$2(resp,new cljs.core.Keyword(null,"content-encoding","content-encoding",2011780217));
} else {
return and__4120__auto__;
}
});})(method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
kvlt.middleware.lift_content_encoding = (function kvlt$middleware$lift_content_encoding(p__47257){
var map__47258 = p__47257;
var map__47258__$1 = (((((!((map__47258 == null))))?(((((map__47258.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47258.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47258):map__47258);
var resp = map__47258__$1;
var map__47259 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47258__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var map__47259__$1 = (((((!((map__47259 == null))))?(((((map__47259.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47259.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47259):map__47259);
var content_encoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47259__$1,"content-encoding");
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(resp,new cljs.core.Keyword(null,"orig-content-encoding","orig-content-encoding",-1642988561),content_encoding),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.dissoc,"content-encoding");
});
kvlt.middleware.decompress_body.cljs$core$IMultiFn$_add_method$arity$3(null,"gzip",(function (p__47262){
var map__47263 = p__47262;
var map__47263__$1 = (((((!((map__47263 == null))))?(((((map__47263.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47263.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47263):map__47263);
var resp = map__47263__$1;
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47263__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var body__$1 = kvlt.platform.util.gunzip(body);
return kvlt.middleware.lift_content_encoding(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(resp,new cljs.core.Keyword(null,"body","body",-2049205669),body__$1));
}));
kvlt.middleware.decompress_body.cljs$core$IMultiFn$_add_method$arity$3(null,"deflate",(function (p__47272){
var map__47273 = p__47272;
var map__47273__$1 = (((((!((map__47273 == null))))?(((((map__47273.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47273.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47273):map__47273);
var resp = map__47273__$1;
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47273__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var body__$1 = kvlt.platform.util.inflate(body);
return kvlt.middleware.lift_content_encoding(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(resp,new cljs.core.Keyword(null,"body","body",-2049205669),body__$1));
}));
kvlt.middleware.decompress_body.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (resp){
return kvlt.middleware.lift_content_encoding(resp);
}));
/**
 * Response body decompression.  Defaults request's "Accept-Encoding" header.
 *   Can be disabled per-request via `:decompress-body? false'
 */
kvlt.middleware.decompress = kvlt.middleware.util.__GT_mw.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"decompress","decompress",1427568636),cljs.core.with_meta((function (req){
var G__47281 = req;
if((((!((function (){var G__47283 = new cljs.core.Keyword(null,"decompress-body?","decompress-body?",421693857);
return (req.cljs$core$IFn$_invoke$arity$1 ? req.cljs$core$IFn$_invoke$arity$1(G__47283) : req.call(null,G__47283));
})() === false))) && (cljs.core.not(kvlt.middleware.header.cljs$core$IFn$_invoke$arity$2(req,new cljs.core.Keyword(null,"accept-encoding","accept-encoding",-317924396)))))){
return kvlt.middleware.header.cljs$core$IFn$_invoke$arity$3(G__47281,new cljs.core.Keyword(null,"accept-encoding","accept-encoding",-317924396),"gzip, deflate");
} else {
return G__47281;
}
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"removing","removing",1104822312),new cljs.core.Keyword(null,"accept-encoding","accept-encoding",-317924396)], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (resp){
return resp;
})], 0));
kvlt.middleware.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 14, [(205),null,(206),null,(300),null,(204),null,(307),null,(304),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
kvlt.middleware.status__GT_reason = cljs.core.PersistentHashMap.fromArrays([(410),(205),(416),(101),(206),(415),(300),(204),(405),(504),(505),(502),(307),(402),(407),(305),(304),(401),(412),(417),(500),(501),(303),(100),(413),(301),(408),(411),(201),(302),(202),(200),(503),(414),(404),(203),(409),(400),(403),(406)],[new cljs.core.Keyword(null,"gone","gone",-1158371124),new cljs.core.Keyword(null,"reset-content","reset-content",-1325960994),new cljs.core.Keyword(null,"requested-range-not-satisfiable","requested-range-not-satisfiable",2110942027),new cljs.core.Keyword(null,"switching-protocols","switching-protocols",446359171),new cljs.core.Keyword(null,"partial-content","partial-content",1842744152),new cljs.core.Keyword(null,"unsupported-media-type","unsupported-media-type",-248081522),new cljs.core.Keyword(null,"multiple-choices","multiple-choices",1536362331),new cljs.core.Keyword(null,"no-content","no-content",-1860206018),new cljs.core.Keyword(null,"method-not-allowed","method-not-allowed",-108023673),new cljs.core.Keyword(null,"gateway-timeout","gateway-timeout",699666147),new cljs.core.Keyword(null,"http-version-not-supported","http-version-not-supported",-847851583),new cljs.core.Keyword(null,"bad-gateway","bad-gateway",1203629050),new cljs.core.Keyword(null,"temporary-redirect","temporary-redirect",1675904222),new cljs.core.Keyword(null,"payment-required","payment-required",-846532084),new cljs.core.Keyword(null,"proxy-authentication-required","proxy-authentication-required",1911666581),new cljs.core.Keyword(null,"use-proxy","use-proxy",-501370822),new cljs.core.Keyword(null,"not-modified","not-modified",597560057),new cljs.core.Keyword(null,"unauthorized","unauthorized",-2089027806),new cljs.core.Keyword(null,"precondition-failed","precondition-failed",-430047674),new cljs.core.Keyword(null,"expectation-failed","expectation-failed",-1685971474),new cljs.core.Keyword(null,"internal-server-error","internal-server-error",-795953713),new cljs.core.Keyword(null,"not-implemented","not-implemented",1918806714),new cljs.core.Keyword(null,"see-other","see-other",286531018),new cljs.core.Keyword(null,"continue","continue",-207346553),new cljs.core.Keyword(null,"request-entity-too-large","request-entity-too-large",1041677666),new cljs.core.Keyword(null,"moved-permanently","moved-permanently",590604284),new cljs.core.Keyword(null,"request-timeout","request-timeout",-2047539823),new cljs.core.Keyword(null,"length-required","length-required",-1380021768),new cljs.core.Keyword(null,"created","created",-704993748),new cljs.core.Keyword(null,"found","found",-584700170),new cljs.core.Keyword(null,"accepted","accepted",-1953464374),new cljs.core.Keyword(null,"ok","ok",967785236),new cljs.core.Keyword(null,"service-unavailable","service-unavailable",751643155),new cljs.core.Keyword(null,"request-uri-too-large","request-uri-too-large",254200757),new cljs.core.Keyword(null,"not-found","not-found",-629079980),new cljs.core.Keyword(null,"non-authoritative-information","non-authoritative-information",1990094789),new cljs.core.Keyword(null,"conflict","conflict",1978796605),new cljs.core.Keyword(null,"bad-request","bad-request",-1466249863),new cljs.core.Keyword(null,"forbidden","forbidden",-1979448146),new cljs.core.Keyword(null,"not-acceptable","not-acceptable",1151521504)]);
/**
 * Turn error responses into `ExceptionInfo` instances, with the full
 *   response map as the attached data.  Additionally, a `:reason`
 *   value (e.g. `:service-unavailable`) will be used to augment the
 *   `:status` key.
 * 
 *   For uniformity, `:type` is provided as an alias for `:reason`, e.g.
 */
kvlt.middleware.error = kvlt.middleware.util.__GT_mw.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p__47284){
var map__47285 = p__47284;
var map__47285__$1 = (((((!((map__47285 == null))))?(((((map__47285.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47285.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47285):map__47285);
var resp = map__47285__$1;
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47285__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47285__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47285__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47285__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var reason = (kvlt.middleware.status__GT_reason.cljs$core$IFn$_invoke$arity$2 ? kvlt.middleware.status__GT_reason.cljs$core$IFn$_invoke$arity$2(status,error) : kvlt.middleware.status__GT_reason.call(null,status,error));
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.not(error);
if(and__4120__auto__){
return (kvlt.middleware.unexceptional_status_QMARK_.cljs$core$IFn$_invoke$arity$1 ? kvlt.middleware.unexceptional_status_QMARK_.cljs$core$IFn$_invoke$arity$1(status) : kvlt.middleware.unexceptional_status_QMARK_.call(null,status));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(resp,new cljs.core.Keyword(null,"reason","reason",-2070751759),reason);
} else {
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(message,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(resp,new cljs.core.Keyword(null,"error","error",-978969032),(function (){var or__4131__auto__ = error;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return reason;
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"type","type",1174270348),reason,new cljs.core.Keyword(null,"reason","reason",-2070751759),reason], 0)),cause);
}
})], 0));
kvlt.util.doc_examples_BANG_(new cljs.core.Var(function(){return kvlt.middleware.error;},new cljs.core.Symbol("kvlt.middleware","error","kvlt.middleware/error",1309338120,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"kvlt.middleware","kvlt.middleware",-1330994476,null),new cljs.core.Symbol(null,"error","error",661562495,null),"kvlt/middleware.cljc",13,1,325,325,cljs.core.List.EMPTY,"Turn error responses into `ExceptionInfo` instances, with the full\n  response map as the attached data.  Additionally, a `:reason`\n  value (e.g. `:service-unavailable`) will be used to augment the\n  `:status` key.\n\n  For uniformity, `:type` is provided as an alias for `:reason`, e.g.",(cljs.core.truth_(kvlt.middleware.error)?kvlt.middleware.error.cljs$lang$test:null)])),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),(500),new cljs.core.Keyword(null,"reason","reason",-2070751759),new cljs.core.Keyword(null,"internal-server-error","internal-server-error",-795953713),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"internal-server-error","internal-server-error",-795953713),new cljs.core.Keyword(null,"cause","cause",231901252),new cljs.core.Symbol(null,"error?","error?",1179842368,null),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null)], null)));

//# sourceMappingURL=kvlt.middleware.js.map
