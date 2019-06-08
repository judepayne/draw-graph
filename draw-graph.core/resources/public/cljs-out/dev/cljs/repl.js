// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__18946){
var map__18947 = p__18946;
var map__18947__$1 = (((((!((map__18947 == null))))?(((((map__18947.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18947.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18947):map__18947);
var m = map__18947__$1;
var n = cljs.core.get.call(null,map__18947__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__18947__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
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
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18949_18981 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18950_18982 = null;
var count__18951_18983 = (0);
var i__18952_18984 = (0);
while(true){
if((i__18952_18984 < count__18951_18983)){
var f_18985 = cljs.core._nth.call(null,chunk__18950_18982,i__18952_18984);
cljs.core.println.call(null,"  ",f_18985);


var G__18986 = seq__18949_18981;
var G__18987 = chunk__18950_18982;
var G__18988 = count__18951_18983;
var G__18989 = (i__18952_18984 + (1));
seq__18949_18981 = G__18986;
chunk__18950_18982 = G__18987;
count__18951_18983 = G__18988;
i__18952_18984 = G__18989;
continue;
} else {
var temp__5720__auto___18990 = cljs.core.seq.call(null,seq__18949_18981);
if(temp__5720__auto___18990){
var seq__18949_18991__$1 = temp__5720__auto___18990;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18949_18991__$1)){
var c__4550__auto___18992 = cljs.core.chunk_first.call(null,seq__18949_18991__$1);
var G__18993 = cljs.core.chunk_rest.call(null,seq__18949_18991__$1);
var G__18994 = c__4550__auto___18992;
var G__18995 = cljs.core.count.call(null,c__4550__auto___18992);
var G__18996 = (0);
seq__18949_18981 = G__18993;
chunk__18950_18982 = G__18994;
count__18951_18983 = G__18995;
i__18952_18984 = G__18996;
continue;
} else {
var f_18997 = cljs.core.first.call(null,seq__18949_18991__$1);
cljs.core.println.call(null,"  ",f_18997);


var G__18998 = cljs.core.next.call(null,seq__18949_18991__$1);
var G__18999 = null;
var G__19000 = (0);
var G__19001 = (0);
seq__18949_18981 = G__18998;
chunk__18950_18982 = G__18999;
count__18951_18983 = G__19000;
i__18952_18984 = G__19001;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_19002 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_19002);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_19002)))?cljs.core.second.call(null,arglists_19002):arglists_19002));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18953_19003 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18954_19004 = null;
var count__18955_19005 = (0);
var i__18956_19006 = (0);
while(true){
if((i__18956_19006 < count__18955_19005)){
var vec__18967_19007 = cljs.core._nth.call(null,chunk__18954_19004,i__18956_19006);
var name_19008 = cljs.core.nth.call(null,vec__18967_19007,(0),null);
var map__18970_19009 = cljs.core.nth.call(null,vec__18967_19007,(1),null);
var map__18970_19010__$1 = (((((!((map__18970_19009 == null))))?(((((map__18970_19009.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18970_19009.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18970_19009):map__18970_19009);
var doc_19011 = cljs.core.get.call(null,map__18970_19010__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19012 = cljs.core.get.call(null,map__18970_19010__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_19008);

cljs.core.println.call(null," ",arglists_19012);

if(cljs.core.truth_(doc_19011)){
cljs.core.println.call(null," ",doc_19011);
} else {
}


var G__19013 = seq__18953_19003;
var G__19014 = chunk__18954_19004;
var G__19015 = count__18955_19005;
var G__19016 = (i__18956_19006 + (1));
seq__18953_19003 = G__19013;
chunk__18954_19004 = G__19014;
count__18955_19005 = G__19015;
i__18956_19006 = G__19016;
continue;
} else {
var temp__5720__auto___19017 = cljs.core.seq.call(null,seq__18953_19003);
if(temp__5720__auto___19017){
var seq__18953_19018__$1 = temp__5720__auto___19017;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18953_19018__$1)){
var c__4550__auto___19019 = cljs.core.chunk_first.call(null,seq__18953_19018__$1);
var G__19020 = cljs.core.chunk_rest.call(null,seq__18953_19018__$1);
var G__19021 = c__4550__auto___19019;
var G__19022 = cljs.core.count.call(null,c__4550__auto___19019);
var G__19023 = (0);
seq__18953_19003 = G__19020;
chunk__18954_19004 = G__19021;
count__18955_19005 = G__19022;
i__18956_19006 = G__19023;
continue;
} else {
var vec__18972_19024 = cljs.core.first.call(null,seq__18953_19018__$1);
var name_19025 = cljs.core.nth.call(null,vec__18972_19024,(0),null);
var map__18975_19026 = cljs.core.nth.call(null,vec__18972_19024,(1),null);
var map__18975_19027__$1 = (((((!((map__18975_19026 == null))))?(((((map__18975_19026.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18975_19026.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18975_19026):map__18975_19026);
var doc_19028 = cljs.core.get.call(null,map__18975_19027__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19029 = cljs.core.get.call(null,map__18975_19027__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_19025);

cljs.core.println.call(null," ",arglists_19029);

if(cljs.core.truth_(doc_19028)){
cljs.core.println.call(null," ",doc_19028);
} else {
}


var G__19030 = cljs.core.next.call(null,seq__18953_19018__$1);
var G__19031 = null;
var G__19032 = (0);
var G__19033 = (0);
seq__18953_19003 = G__19030;
chunk__18954_19004 = G__19031;
count__18955_19005 = G__19032;
i__18956_19006 = G__19033;
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
var temp__5720__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.call(null,"Spec");

var seq__18977 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__18978 = null;
var count__18979 = (0);
var i__18980 = (0);
while(true){
if((i__18980 < count__18979)){
var role = cljs.core._nth.call(null,chunk__18978,i__18980);
var temp__5720__auto___19034__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___19034__$1)){
var spec_19035 = temp__5720__auto___19034__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_19035));
} else {
}


var G__19036 = seq__18977;
var G__19037 = chunk__18978;
var G__19038 = count__18979;
var G__19039 = (i__18980 + (1));
seq__18977 = G__19036;
chunk__18978 = G__19037;
count__18979 = G__19038;
i__18980 = G__19039;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__18977);
if(temp__5720__auto____$1){
var seq__18977__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18977__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__18977__$1);
var G__19040 = cljs.core.chunk_rest.call(null,seq__18977__$1);
var G__19041 = c__4550__auto__;
var G__19042 = cljs.core.count.call(null,c__4550__auto__);
var G__19043 = (0);
seq__18977 = G__19040;
chunk__18978 = G__19041;
count__18979 = G__19042;
i__18980 = G__19043;
continue;
} else {
var role = cljs.core.first.call(null,seq__18977__$1);
var temp__5720__auto___19044__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___19044__$2)){
var spec_19045 = temp__5720__auto___19044__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_19045));
} else {
}


var G__19046 = cljs.core.next.call(null,seq__18977__$1);
var G__19047 = null;
var G__19048 = (0);
var G__19049 = (0);
seq__18977 = G__19046;
chunk__18978 = G__19047;
count__18979 = G__19048;
i__18980 = G__19049;
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
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var ed = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__19050 = cljs.core.conj.call(null,via,t);
var G__19051 = cljs.core.ex_cause.call(null,t);
via = G__19050;
t = G__19051;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var root_msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var data = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5720__auto__)){
var phase = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
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
var map__19054 = datafied_throwable;
var map__19054__$1 = (((((!((map__19054 == null))))?(((((map__19054.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19054.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19054):map__19054);
var via = cljs.core.get.call(null,map__19054__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__19054__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__19054__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__19055 = cljs.core.last.call(null,via);
var map__19055__$1 = (((((!((map__19055 == null))))?(((((map__19055.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19055.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19055):map__19055);
var type = cljs.core.get.call(null,map__19055__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__19055__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__19055__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__19056 = data;
var map__19056__$1 = (((((!((map__19056 == null))))?(((((map__19056.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19056.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19056):map__19056);
var problems = cljs.core.get.call(null,map__19056__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__19056__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__19056__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__19057 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__19057__$1 = (((((!((map__19057 == null))))?(((((map__19057.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19057.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19057):map__19057);
var top_data = map__19057__$1;
var source = cljs.core.get.call(null,map__19057__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__19062 = phase;
var G__19062__$1 = (((G__19062 instanceof cljs.core.Keyword))?G__19062.fqn:null);
switch (G__19062__$1) {
case "read-source":
var map__19063 = data;
var map__19063__$1 = (((((!((map__19063 == null))))?(((((map__19063.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19063.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19063):map__19063);
var line = cljs.core.get.call(null,map__19063__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__19063__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__19065 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__19065__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__19065,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19065);
var G__19065__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__19065__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19065__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__19065__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19065__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__19066 = top_data;
var G__19066__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__19066,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19066);
var G__19066__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__19066__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19066__$1);
var G__19066__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__19066__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19066__$2);
var G__19066__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__19066__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19066__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__19066__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19066__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__19067 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__19067,(0),null);
var method = cljs.core.nth.call(null,vec__19067,(1),null);
var file = cljs.core.nth.call(null,vec__19067,(2),null);
var line = cljs.core.nth.call(null,vec__19067,(3),null);
var G__19070 = top_data;
var G__19070__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__19070,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__19070);
var G__19070__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__19070__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__19070__$1);
var G__19070__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__19070__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__19070__$2);
var G__19070__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__19070__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19070__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__19070__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19070__$4;
}

break;
case "execution":
var vec__19071 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__19071,(0),null);
var method = cljs.core.nth.call(null,vec__19071,(1),null);
var file = cljs.core.nth.call(null,vec__19071,(2),null);
var line = cljs.core.nth.call(null,vec__19071,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__19071,source__$1,method,file,line,G__19062,G__19062__$1,map__19054,map__19054__$1,via,trace,phase,map__19055,map__19055__$1,type,message,data,map__19056,map__19056__$1,problems,fn,caller,map__19057,map__19057__$1,top_data,source){
return (function (p1__19053_SHARP_){
var or__4131__auto__ = (p1__19053_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__19053_SHARP_);
}
});})(vec__19071,source__$1,method,file,line,G__19062,G__19062__$1,map__19054,map__19054__$1,via,trace,phase,map__19055,map__19055__$1,type,message,data,map__19056,map__19056__$1,problems,fn,caller,map__19057,map__19057__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__19074 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__19074__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__19074,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__19074);
var G__19074__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__19074__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19074__$1);
var G__19074__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
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
})())?cljs.core.assoc.call(null,G__19074__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__19074__$2);
var G__19074__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__19074__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__19074__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__19074__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19074__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19062__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__19078){
var map__19079 = p__19078;
var map__19079__$1 = (((((!((map__19079 == null))))?(((((map__19079.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19079.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19079):map__19079);
var triage_data = map__19079__$1;
var phase = cljs.core.get.call(null,map__19079__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__19079__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__19079__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__19079__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__19079__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__19079__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__19079__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__19079__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var class_name = cljs.core.name.call(null,(function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__19081 = phase;
var G__19081__$1 = (((G__19081 instanceof cljs.core.Keyword))?G__19081.fqn:null);
switch (G__19081__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19082_19091 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19083_19092 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19084_19093 = true;
var _STAR_print_fn_STAR__temp_val__19085_19094 = ((function (_STAR_print_newline_STAR__orig_val__19082_19091,_STAR_print_fn_STAR__orig_val__19083_19092,_STAR_print_newline_STAR__temp_val__19084_19093,sb__4661__auto__,G__19081,G__19081__$1,loc,class_name,simple_class,cause_type,format,map__19079,map__19079__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__19082_19091,_STAR_print_fn_STAR__orig_val__19083_19092,_STAR_print_newline_STAR__temp_val__19084_19093,sb__4661__auto__,G__19081,G__19081__$1,loc,class_name,simple_class,cause_type,format,map__19079,map__19079__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19084_19093;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19085_19094;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__19082_19091,_STAR_print_fn_STAR__orig_val__19083_19092,_STAR_print_newline_STAR__temp_val__19084_19093,_STAR_print_fn_STAR__temp_val__19085_19094,sb__4661__auto__,G__19081,G__19081__$1,loc,class_name,simple_class,cause_type,format,map__19079,map__19079__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__19082_19091,_STAR_print_fn_STAR__orig_val__19083_19092,_STAR_print_newline_STAR__temp_val__19084_19093,_STAR_print_fn_STAR__temp_val__19085_19094,sb__4661__auto__,G__19081,G__19081__$1,loc,class_name,simple_class,cause_type,format,map__19079,map__19079__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__19076_SHARP_){
return cljs.core.dissoc.call(null,p1__19076_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__19082_19091,_STAR_print_fn_STAR__orig_val__19083_19092,_STAR_print_newline_STAR__temp_val__19084_19093,_STAR_print_fn_STAR__temp_val__19085_19094,sb__4661__auto__,G__19081,G__19081__$1,loc,class_name,simple_class,cause_type,format,map__19079,map__19079__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__19082_19091,_STAR_print_fn_STAR__orig_val__19083_19092,_STAR_print_newline_STAR__temp_val__19084_19093,_STAR_print_fn_STAR__temp_val__19085_19094,sb__4661__auto__,G__19081,G__19081__$1,loc,class_name,simple_class,cause_type,format,map__19079,map__19079__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19083_19092;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19082_19091;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19086_19095 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19087_19096 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19088_19097 = true;
var _STAR_print_fn_STAR__temp_val__19089_19098 = ((function (_STAR_print_newline_STAR__orig_val__19086_19095,_STAR_print_fn_STAR__orig_val__19087_19096,_STAR_print_newline_STAR__temp_val__19088_19097,sb__4661__auto__,G__19081,G__19081__$1,loc,class_name,simple_class,cause_type,format,map__19079,map__19079__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__19086_19095,_STAR_print_fn_STAR__orig_val__19087_19096,_STAR_print_newline_STAR__temp_val__19088_19097,sb__4661__auto__,G__19081,G__19081__$1,loc,class_name,simple_class,cause_type,format,map__19079,map__19079__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19088_19097;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19089_19098;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__19086_19095,_STAR_print_fn_STAR__orig_val__19087_19096,_STAR_print_newline_STAR__temp_val__19088_19097,_STAR_print_fn_STAR__temp_val__19089_19098,sb__4661__auto__,G__19081,G__19081__$1,loc,class_name,simple_class,cause_type,format,map__19079,map__19079__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__19086_19095,_STAR_print_fn_STAR__orig_val__19087_19096,_STAR_print_newline_STAR__temp_val__19088_19097,_STAR_print_fn_STAR__temp_val__19089_19098,sb__4661__auto__,G__19081,G__19081__$1,loc,class_name,simple_class,cause_type,format,map__19079,map__19079__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__19077_SHARP_){
return cljs.core.dissoc.call(null,p1__19077_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__19086_19095,_STAR_print_fn_STAR__orig_val__19087_19096,_STAR_print_newline_STAR__temp_val__19088_19097,_STAR_print_fn_STAR__temp_val__19089_19098,sb__4661__auto__,G__19081,G__19081__$1,loc,class_name,simple_class,cause_type,format,map__19079,map__19079__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__19086_19095,_STAR_print_fn_STAR__orig_val__19087_19096,_STAR_print_newline_STAR__temp_val__19088_19097,_STAR_print_fn_STAR__temp_val__19089_19098,sb__4661__auto__,G__19081,G__19081__$1,loc,class_name,simple_class,cause_type,format,map__19079,map__19079__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19087_19096;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19086_19095;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19081__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
