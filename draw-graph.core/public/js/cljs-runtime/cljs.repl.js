goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__27979){
var map__27980 = p__27979;
var map__27980__$1 = (((((!((map__27980 == null))))?(((((map__27980.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27980.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27980):map__27980);
var m = map__27980__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27980__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27980__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__27989_28218 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27990_28219 = null;
var count__27991_28220 = (0);
var i__27992_28221 = (0);
while(true){
if((i__27992_28221 < count__27991_28220)){
var f_28223 = chunk__27990_28219.cljs$core$IIndexed$_nth$arity$2(null,i__27992_28221);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_28223], 0));


var G__28225 = seq__27989_28218;
var G__28226 = chunk__27990_28219;
var G__28227 = count__27991_28220;
var G__28228 = (i__27992_28221 + (1));
seq__27989_28218 = G__28225;
chunk__27990_28219 = G__28226;
count__27991_28220 = G__28227;
i__27992_28221 = G__28228;
continue;
} else {
var temp__5720__auto___28230 = cljs.core.seq(seq__27989_28218);
if(temp__5720__auto___28230){
var seq__27989_28231__$1 = temp__5720__auto___28230;
if(cljs.core.chunked_seq_QMARK_(seq__27989_28231__$1)){
var c__4550__auto___28232 = cljs.core.chunk_first(seq__27989_28231__$1);
var G__28233 = cljs.core.chunk_rest(seq__27989_28231__$1);
var G__28234 = c__4550__auto___28232;
var G__28235 = cljs.core.count(c__4550__auto___28232);
var G__28236 = (0);
seq__27989_28218 = G__28233;
chunk__27990_28219 = G__28234;
count__27991_28220 = G__28235;
i__27992_28221 = G__28236;
continue;
} else {
var f_28237 = cljs.core.first(seq__27989_28231__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_28237], 0));


var G__28240 = cljs.core.next(seq__27989_28231__$1);
var G__28241 = null;
var G__28242 = (0);
var G__28243 = (0);
seq__27989_28218 = G__28240;
chunk__27990_28219 = G__28241;
count__27991_28220 = G__28242;
i__27992_28221 = G__28243;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_28250 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_28250], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_28250)))?cljs.core.second(arglists_28250):arglists_28250)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__28005_28251 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28006_28252 = null;
var count__28007_28253 = (0);
var i__28008_28254 = (0);
while(true){
if((i__28008_28254 < count__28007_28253)){
var vec__28042_28256 = chunk__28006_28252.cljs$core$IIndexed$_nth$arity$2(null,i__28008_28254);
var name_28257 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28042_28256,(0),null);
var map__28045_28258 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28042_28256,(1),null);
var map__28045_28259__$1 = (((((!((map__28045_28258 == null))))?(((((map__28045_28258.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28045_28258.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28045_28258):map__28045_28258);
var doc_28260 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28045_28259__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_28261 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28045_28259__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_28257], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_28261], 0));

if(cljs.core.truth_(doc_28260)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_28260], 0));
} else {
}


var G__28262 = seq__28005_28251;
var G__28263 = chunk__28006_28252;
var G__28264 = count__28007_28253;
var G__28265 = (i__28008_28254 + (1));
seq__28005_28251 = G__28262;
chunk__28006_28252 = G__28263;
count__28007_28253 = G__28264;
i__28008_28254 = G__28265;
continue;
} else {
var temp__5720__auto___28266 = cljs.core.seq(seq__28005_28251);
if(temp__5720__auto___28266){
var seq__28005_28267__$1 = temp__5720__auto___28266;
if(cljs.core.chunked_seq_QMARK_(seq__28005_28267__$1)){
var c__4550__auto___28268 = cljs.core.chunk_first(seq__28005_28267__$1);
var G__28269 = cljs.core.chunk_rest(seq__28005_28267__$1);
var G__28270 = c__4550__auto___28268;
var G__28271 = cljs.core.count(c__4550__auto___28268);
var G__28272 = (0);
seq__28005_28251 = G__28269;
chunk__28006_28252 = G__28270;
count__28007_28253 = G__28271;
i__28008_28254 = G__28272;
continue;
} else {
var vec__28051_28273 = cljs.core.first(seq__28005_28267__$1);
var name_28274 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28051_28273,(0),null);
var map__28054_28275 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28051_28273,(1),null);
var map__28054_28276__$1 = (((((!((map__28054_28275 == null))))?(((((map__28054_28275.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28054_28275.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28054_28275):map__28054_28275);
var doc_28277 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28054_28276__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_28278 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28054_28276__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_28274], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_28278], 0));

if(cljs.core.truth_(doc_28277)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_28277], 0));
} else {
}


var G__28282 = cljs.core.next(seq__28005_28267__$1);
var G__28283 = null;
var G__28284 = (0);
var G__28285 = (0);
seq__28005_28251 = G__28282;
chunk__28006_28252 = G__28283;
count__28007_28253 = G__28284;
i__28008_28254 = G__28285;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5720__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__28065 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__28066 = null;
var count__28067 = (0);
var i__28068 = (0);
while(true){
if((i__28068 < count__28067)){
var role = chunk__28066.cljs$core$IIndexed$_nth$arity$2(null,i__28068);
var temp__5720__auto___28288__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5720__auto___28288__$1)){
var spec_28297 = temp__5720__auto___28288__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_28297)], 0));
} else {
}


var G__28301 = seq__28065;
var G__28302 = chunk__28066;
var G__28303 = count__28067;
var G__28304 = (i__28068 + (1));
seq__28065 = G__28301;
chunk__28066 = G__28302;
count__28067 = G__28303;
i__28068 = G__28304;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq(seq__28065);
if(temp__5720__auto____$1){
var seq__28065__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__28065__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__28065__$1);
var G__28305 = cljs.core.chunk_rest(seq__28065__$1);
var G__28306 = c__4550__auto__;
var G__28307 = cljs.core.count(c__4550__auto__);
var G__28308 = (0);
seq__28065 = G__28305;
chunk__28066 = G__28306;
count__28067 = G__28307;
i__28068 = G__28308;
continue;
} else {
var role = cljs.core.first(seq__28065__$1);
var temp__5720__auto___28309__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5720__auto___28309__$2)){
var spec_28310 = temp__5720__auto___28309__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_28310)], 0));
} else {
}


var G__28311 = cljs.core.next(seq__28065__$1);
var G__28312 = null;
var G__28313 = (0);
var G__28314 = (0);
seq__28065 = G__28311;
chunk__28066 = G__28312;
count__28067 = G__28313;
i__28068 = G__28314;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5720__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5720__auto__)){
var msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5720__auto__)){
var ed = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__28315 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__28316 = cljs.core.ex_cause(t);
via = G__28315;
t = G__28316;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5720__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5720__auto__)){
var root_msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5720__auto__)){
var data = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5720__auto__)){
var phase = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__28104 = datafied_throwable;
var map__28104__$1 = (((((!((map__28104 == null))))?(((((map__28104.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28104.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28104):map__28104);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28104__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28104__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__28104__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__28105 = cljs.core.last(via);
var map__28105__$1 = (((((!((map__28105 == null))))?(((((map__28105.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28105.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28105):map__28105);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28105__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28105__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28105__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__28106 = data;
var map__28106__$1 = (((((!((map__28106 == null))))?(((((map__28106.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28106.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28106):map__28106);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28106__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28106__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28106__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__28107 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__28107__$1 = (((((!((map__28107 == null))))?(((((map__28107.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28107.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28107):map__28107);
var top_data = map__28107__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28107__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__28112 = phase;
var G__28112__$1 = (((G__28112 instanceof cljs.core.Keyword))?G__28112.fqn:null);
switch (G__28112__$1) {
case "read-source":
var map__28113 = data;
var map__28113__$1 = (((((!((map__28113 == null))))?(((((map__28113.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28113.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28113):map__28113);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28113__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28113__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__28116 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__28116__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28116,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__28116);
var G__28116__$2 = (cljs.core.truth_((function (){var fexpr__28120 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__28120.cljs$core$IFn$_invoke$arity$1 ? fexpr__28120.cljs$core$IFn$_invoke$arity$1(source) : fexpr__28120.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__28116__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__28116__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28116__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__28116__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__28121 = top_data;
var G__28121__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28121,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__28121);
var G__28121__$2 = (cljs.core.truth_((function (){var fexpr__28122 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__28122.cljs$core$IFn$_invoke$arity$1 ? fexpr__28122.cljs$core$IFn$_invoke$arity$1(source) : fexpr__28122.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__28121__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__28121__$1);
var G__28121__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28121__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__28121__$2);
var G__28121__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28121__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__28121__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28121__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__28121__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__28123 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28123,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28123,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28123,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28123,(3),null);
var G__28126 = top_data;
var G__28126__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28126,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__28126);
var G__28126__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28126__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__28126__$1);
var G__28126__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28126__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__28126__$2);
var G__28126__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28126__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__28126__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28126__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__28126__$4;
}

break;
case "execution":
var vec__28140 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28140,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28140,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28140,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28140,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__28140,source__$1,method,file,line,G__28112,G__28112__$1,map__28104,map__28104__$1,via,trace,phase,map__28105,map__28105__$1,type,message,data,map__28106,map__28106__$1,problems,fn,caller,map__28107,map__28107__$1,top_data,source){
return (function (p1__28100_SHARP_){
var or__4131__auto__ = (p1__28100_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var fexpr__28144 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__28144.cljs$core$IFn$_invoke$arity$1 ? fexpr__28144.cljs$core$IFn$_invoke$arity$1(p1__28100_SHARP_) : fexpr__28144.call(null,p1__28100_SHARP_));
}
});})(vec__28140,source__$1,method,file,line,G__28112,G__28112__$1,map__28104,map__28104__$1,via,trace,phase,map__28105,map__28105__$1,type,message,data,map__28106,map__28106__$1,problems,fn,caller,map__28107,map__28107__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__28146 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__28146__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28146,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__28146);
var G__28146__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28146__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__28146__$1);
var G__28146__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28146__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__28146__$2);
var G__28146__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28146__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__28146__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28146__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__28146__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28112__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__28152){
var map__28153 = p__28152;
var map__28153__$1 = (((((!((map__28153 == null))))?(((((map__28153.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28153.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28153):map__28153);
var triage_data = map__28153__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28153__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28153__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28153__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28153__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28153__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28153__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28153__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28153__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__28168 = phase;
var G__28168__$1 = (((G__28168 instanceof cljs.core.Keyword))?G__28168.fqn:null);
switch (G__28168__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__28169 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__28170 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__28171 = loc;
var G__28172 = (cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__28176_28351 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__28177_28352 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__28178_28353 = true;
var _STAR_print_fn_STAR__temp_val__28179_28354 = ((function (_STAR_print_newline_STAR__orig_val__28176_28351,_STAR_print_fn_STAR__orig_val__28177_28352,_STAR_print_newline_STAR__temp_val__28178_28353,sb__4661__auto__,G__28169,G__28170,G__28171,G__28168,G__28168__$1,loc,class_name,simple_class,cause_type,format,map__28153,map__28153__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__28176_28351,_STAR_print_fn_STAR__orig_val__28177_28352,_STAR_print_newline_STAR__temp_val__28178_28353,sb__4661__auto__,G__28169,G__28170,G__28171,G__28168,G__28168__$1,loc,class_name,simple_class,cause_type,format,map__28153,map__28153__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__28178_28353;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__28179_28354;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__28176_28351,_STAR_print_fn_STAR__orig_val__28177_28352,_STAR_print_newline_STAR__temp_val__28178_28353,_STAR_print_fn_STAR__temp_val__28179_28354,sb__4661__auto__,G__28169,G__28170,G__28171,G__28168,G__28168__$1,loc,class_name,simple_class,cause_type,format,map__28153,map__28153__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__28176_28351,_STAR_print_fn_STAR__orig_val__28177_28352,_STAR_print_newline_STAR__temp_val__28178_28353,_STAR_print_fn_STAR__temp_val__28179_28354,sb__4661__auto__,G__28169,G__28170,G__28171,G__28168,G__28168__$1,loc,class_name,simple_class,cause_type,format,map__28153,map__28153__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__28150_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__28150_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__28176_28351,_STAR_print_fn_STAR__orig_val__28177_28352,_STAR_print_newline_STAR__temp_val__28178_28353,_STAR_print_fn_STAR__temp_val__28179_28354,sb__4661__auto__,G__28169,G__28170,G__28171,G__28168,G__28168__$1,loc,class_name,simple_class,cause_type,format,map__28153,map__28153__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__28176_28351,_STAR_print_fn_STAR__orig_val__28177_28352,_STAR_print_newline_STAR__temp_val__28178_28353,_STAR_print_fn_STAR__temp_val__28179_28354,sb__4661__auto__,G__28169,G__28170,G__28171,G__28168,G__28168__$1,loc,class_name,simple_class,cause_type,format,map__28153,map__28153__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__28177_28352;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__28176_28351;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__28169,G__28170,G__28171,G__28172) : format.call(null,G__28169,G__28170,G__28171,G__28172));

break;
case "macroexpansion":
var G__28182 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__28183 = cause_type;
var G__28184 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__28185 = loc;
var G__28186 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__28182,G__28183,G__28184,G__28185,G__28186) : format.call(null,G__28182,G__28183,G__28184,G__28185,G__28186));

break;
case "compile-syntax-check":
var G__28187 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__28188 = cause_type;
var G__28189 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__28190 = loc;
var G__28191 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__28187,G__28188,G__28189,G__28190,G__28191) : format.call(null,G__28187,G__28188,G__28189,G__28190,G__28191));

break;
case "compilation":
var G__28192 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__28193 = cause_type;
var G__28194 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__28195 = loc;
var G__28196 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__28192,G__28193,G__28194,G__28195,G__28196) : format.call(null,G__28192,G__28193,G__28194,G__28195,G__28196));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__28197 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__28198 = symbol;
var G__28199 = loc;
var G__28200 = (function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__28204_28368 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__28205_28369 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__28206_28370 = true;
var _STAR_print_fn_STAR__temp_val__28207_28371 = ((function (_STAR_print_newline_STAR__orig_val__28204_28368,_STAR_print_fn_STAR__orig_val__28205_28369,_STAR_print_newline_STAR__temp_val__28206_28370,sb__4661__auto__,G__28197,G__28198,G__28199,G__28168,G__28168__$1,loc,class_name,simple_class,cause_type,format,map__28153,map__28153__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__28204_28368,_STAR_print_fn_STAR__orig_val__28205_28369,_STAR_print_newline_STAR__temp_val__28206_28370,sb__4661__auto__,G__28197,G__28198,G__28199,G__28168,G__28168__$1,loc,class_name,simple_class,cause_type,format,map__28153,map__28153__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__28206_28370;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__28207_28371;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__28204_28368,_STAR_print_fn_STAR__orig_val__28205_28369,_STAR_print_newline_STAR__temp_val__28206_28370,_STAR_print_fn_STAR__temp_val__28207_28371,sb__4661__auto__,G__28197,G__28198,G__28199,G__28168,G__28168__$1,loc,class_name,simple_class,cause_type,format,map__28153,map__28153__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__28204_28368,_STAR_print_fn_STAR__orig_val__28205_28369,_STAR_print_newline_STAR__temp_val__28206_28370,_STAR_print_fn_STAR__temp_val__28207_28371,sb__4661__auto__,G__28197,G__28198,G__28199,G__28168,G__28168__$1,loc,class_name,simple_class,cause_type,format,map__28153,map__28153__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__28151_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__28151_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__28204_28368,_STAR_print_fn_STAR__orig_val__28205_28369,_STAR_print_newline_STAR__temp_val__28206_28370,_STAR_print_fn_STAR__temp_val__28207_28371,sb__4661__auto__,G__28197,G__28198,G__28199,G__28168,G__28168__$1,loc,class_name,simple_class,cause_type,format,map__28153,map__28153__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__28204_28368,_STAR_print_fn_STAR__orig_val__28205_28369,_STAR_print_newline_STAR__temp_val__28206_28370,_STAR_print_fn_STAR__temp_val__28207_28371,sb__4661__auto__,G__28197,G__28198,G__28199,G__28168,G__28168__$1,loc,class_name,simple_class,cause_type,format,map__28153,map__28153__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__28205_28369;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__28204_28368;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__28197,G__28198,G__28199,G__28200) : format.call(null,G__28197,G__28198,G__28199,G__28200));
} else {
var G__28209 = "Execution error%s at %s(%s).\n%s\n";
var G__28210 = cause_type;
var G__28211 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__28212 = loc;
var G__28213 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__28209,G__28210,G__28211,G__28212,G__28213) : format.call(null,G__28209,G__28210,G__28211,G__28212,G__28213));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28168__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
