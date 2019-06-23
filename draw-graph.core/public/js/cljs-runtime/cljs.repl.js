goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__27816){
var map__27818 = p__27816;
var map__27818__$1 = (((((!((map__27818 == null))))?(((((map__27818.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27818.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27818):map__27818);
var m = map__27818__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27818__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27818__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__27825_28020 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27826_28021 = null;
var count__27827_28022 = (0);
var i__27828_28023 = (0);
while(true){
if((i__27828_28023 < count__27827_28022)){
var f_28024 = chunk__27826_28021.cljs$core$IIndexed$_nth$arity$2(null,i__27828_28023);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_28024], 0));


var G__28025 = seq__27825_28020;
var G__28026 = chunk__27826_28021;
var G__28027 = count__27827_28022;
var G__28028 = (i__27828_28023 + (1));
seq__27825_28020 = G__28025;
chunk__27826_28021 = G__28026;
count__27827_28022 = G__28027;
i__27828_28023 = G__28028;
continue;
} else {
var temp__5720__auto___28029 = cljs.core.seq(seq__27825_28020);
if(temp__5720__auto___28029){
var seq__27825_28030__$1 = temp__5720__auto___28029;
if(cljs.core.chunked_seq_QMARK_(seq__27825_28030__$1)){
var c__4550__auto___28031 = cljs.core.chunk_first(seq__27825_28030__$1);
var G__28032 = cljs.core.chunk_rest(seq__27825_28030__$1);
var G__28033 = c__4550__auto___28031;
var G__28034 = cljs.core.count(c__4550__auto___28031);
var G__28035 = (0);
seq__27825_28020 = G__28032;
chunk__27826_28021 = G__28033;
count__27827_28022 = G__28034;
i__27828_28023 = G__28035;
continue;
} else {
var f_28036 = cljs.core.first(seq__27825_28030__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_28036], 0));


var G__28037 = cljs.core.next(seq__27825_28030__$1);
var G__28038 = null;
var G__28039 = (0);
var G__28040 = (0);
seq__27825_28020 = G__28037;
chunk__27826_28021 = G__28038;
count__27827_28022 = G__28039;
i__27828_28023 = G__28040;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_28041 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_28041], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_28041)))?cljs.core.second(arglists_28041):arglists_28041)], 0));
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
var seq__27842_28045 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27843_28046 = null;
var count__27844_28047 = (0);
var i__27845_28048 = (0);
while(true){
if((i__27845_28048 < count__27844_28047)){
var vec__27861_28049 = chunk__27843_28046.cljs$core$IIndexed$_nth$arity$2(null,i__27845_28048);
var name_28050 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27861_28049,(0),null);
var map__27864_28051 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27861_28049,(1),null);
var map__27864_28052__$1 = (((((!((map__27864_28051 == null))))?(((((map__27864_28051.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27864_28051.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27864_28051):map__27864_28051);
var doc_28053 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27864_28052__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_28054 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27864_28052__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_28050], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_28054], 0));

if(cljs.core.truth_(doc_28053)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_28053], 0));
} else {
}


var G__28057 = seq__27842_28045;
var G__28058 = chunk__27843_28046;
var G__28059 = count__27844_28047;
var G__28060 = (i__27845_28048 + (1));
seq__27842_28045 = G__28057;
chunk__27843_28046 = G__28058;
count__27844_28047 = G__28059;
i__27845_28048 = G__28060;
continue;
} else {
var temp__5720__auto___28061 = cljs.core.seq(seq__27842_28045);
if(temp__5720__auto___28061){
var seq__27842_28062__$1 = temp__5720__auto___28061;
if(cljs.core.chunked_seq_QMARK_(seq__27842_28062__$1)){
var c__4550__auto___28063 = cljs.core.chunk_first(seq__27842_28062__$1);
var G__28064 = cljs.core.chunk_rest(seq__27842_28062__$1);
var G__28065 = c__4550__auto___28063;
var G__28066 = cljs.core.count(c__4550__auto___28063);
var G__28067 = (0);
seq__27842_28045 = G__28064;
chunk__27843_28046 = G__28065;
count__27844_28047 = G__28066;
i__27845_28048 = G__28067;
continue;
} else {
var vec__27871_28069 = cljs.core.first(seq__27842_28062__$1);
var name_28070 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27871_28069,(0),null);
var map__27874_28071 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27871_28069,(1),null);
var map__27874_28072__$1 = (((((!((map__27874_28071 == null))))?(((((map__27874_28071.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27874_28071.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27874_28071):map__27874_28071);
var doc_28073 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27874_28072__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_28074 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27874_28072__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_28070], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_28074], 0));

if(cljs.core.truth_(doc_28073)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_28073], 0));
} else {
}


var G__28077 = cljs.core.next(seq__27842_28062__$1);
var G__28078 = null;
var G__28079 = (0);
var G__28080 = (0);
seq__27842_28045 = G__28077;
chunk__27843_28046 = G__28078;
count__27844_28047 = G__28079;
i__27845_28048 = G__28080;
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

var seq__27876 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__27877 = null;
var count__27878 = (0);
var i__27879 = (0);
while(true){
if((i__27879 < count__27878)){
var role = chunk__27877.cljs$core$IIndexed$_nth$arity$2(null,i__27879);
var temp__5720__auto___28082__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5720__auto___28082__$1)){
var spec_28087 = temp__5720__auto___28082__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_28087)], 0));
} else {
}


var G__28088 = seq__27876;
var G__28089 = chunk__27877;
var G__28090 = count__27878;
var G__28091 = (i__27879 + (1));
seq__27876 = G__28088;
chunk__27877 = G__28089;
count__27878 = G__28090;
i__27879 = G__28091;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq(seq__27876);
if(temp__5720__auto____$1){
var seq__27876__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__27876__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__27876__$1);
var G__28092 = cljs.core.chunk_rest(seq__27876__$1);
var G__28093 = c__4550__auto__;
var G__28094 = cljs.core.count(c__4550__auto__);
var G__28095 = (0);
seq__27876 = G__28092;
chunk__27877 = G__28093;
count__27878 = G__28094;
i__27879 = G__28095;
continue;
} else {
var role = cljs.core.first(seq__27876__$1);
var temp__5720__auto___28096__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5720__auto___28096__$2)){
var spec_28097 = temp__5720__auto___28096__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_28097)], 0));
} else {
}


var G__28098 = cljs.core.next(seq__27876__$1);
var G__28099 = null;
var G__28100 = (0);
var G__28101 = (0);
seq__27876 = G__28098;
chunk__27877 = G__28099;
count__27878 = G__28100;
i__27879 = G__28101;
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
var G__28112 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__28113 = cljs.core.ex_cause(t);
via = G__28112;
t = G__28113;
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
var map__27909 = datafied_throwable;
var map__27909__$1 = (((((!((map__27909 == null))))?(((((map__27909.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27909.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27909):map__27909);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27909__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27909__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27909__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__27910 = cljs.core.last(via);
var map__27910__$1 = (((((!((map__27910 == null))))?(((((map__27910.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27910.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27910):map__27910);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27910__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27910__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27910__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__27911 = data;
var map__27911__$1 = (((((!((map__27911 == null))))?(((((map__27911.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27911.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27911):map__27911);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27911__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27911__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27911__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__27915 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__27915__$1 = (((((!((map__27915 == null))))?(((((map__27915.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27915.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27915):map__27915);
var top_data = map__27915__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27915__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__27932 = phase;
var G__27932__$1 = (((G__27932 instanceof cljs.core.Keyword))?G__27932.fqn:null);
switch (G__27932__$1) {
case "read-source":
var map__27934 = data;
var map__27934__$1 = (((((!((map__27934 == null))))?(((((map__27934.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27934.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27934):map__27934);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27934__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27934__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__27938 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__27938__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27938,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__27938);
var G__27938__$2 = (cljs.core.truth_((function (){var fexpr__27941 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__27941.cljs$core$IFn$_invoke$arity$1 ? fexpr__27941.cljs$core$IFn$_invoke$arity$1(source) : fexpr__27941.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__27938__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__27938__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27938__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__27938__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__27943 = top_data;
var G__27943__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27943,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__27943);
var G__27943__$2 = (cljs.core.truth_((function (){var fexpr__27944 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__27944.cljs$core$IFn$_invoke$arity$1 ? fexpr__27944.cljs$core$IFn$_invoke$arity$1(source) : fexpr__27944.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__27943__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__27943__$1);
var G__27943__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27943__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__27943__$2);
var G__27943__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27943__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__27943__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27943__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__27943__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__27945 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27945,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27945,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27945,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27945,(3),null);
var G__27948 = top_data;
var G__27948__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27948,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__27948);
var G__27948__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27948__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__27948__$1);
var G__27948__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27948__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__27948__$2);
var G__27948__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27948__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__27948__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27948__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__27948__$4;
}

break;
case "execution":
var vec__27952 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27952,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27952,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27952,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27952,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__27952,source__$1,method,file,line,G__27932,G__27932__$1,map__27909,map__27909__$1,via,trace,phase,map__27910,map__27910__$1,type,message,data,map__27911,map__27911__$1,problems,fn,caller,map__27915,map__27915__$1,top_data,source){
return (function (p1__27907_SHARP_){
var or__4131__auto__ = (p1__27907_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var fexpr__27956 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__27956.cljs$core$IFn$_invoke$arity$1 ? fexpr__27956.cljs$core$IFn$_invoke$arity$1(p1__27907_SHARP_) : fexpr__27956.call(null,p1__27907_SHARP_));
}
});})(vec__27952,source__$1,method,file,line,G__27932,G__27932__$1,map__27909,map__27909__$1,via,trace,phase,map__27910,map__27910__$1,type,message,data,map__27911,map__27911__$1,problems,fn,caller,map__27915,map__27915__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__27957 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__27957__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27957,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__27957);
var G__27957__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27957__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__27957__$1);
var G__27957__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27957__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__27957__$2);
var G__27957__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27957__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__27957__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27957__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__27957__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27932__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__27963){
var map__27964 = p__27963;
var map__27964__$1 = (((((!((map__27964 == null))))?(((((map__27964.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27964.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27964):map__27964);
var triage_data = map__27964__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27964__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27964__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27964__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27964__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27964__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27964__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27964__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27964__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__27969 = phase;
var G__27969__$1 = (((G__27969 instanceof cljs.core.Keyword))?G__27969.fqn:null);
switch (G__27969__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__27970 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__27971 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__27972 = loc;
var G__27973 = (cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__27975_28218 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__27976_28219 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__27977_28220 = true;
var _STAR_print_fn_STAR__temp_val__27978_28221 = ((function (_STAR_print_newline_STAR__orig_val__27975_28218,_STAR_print_fn_STAR__orig_val__27976_28219,_STAR_print_newline_STAR__temp_val__27977_28220,sb__4661__auto__,G__27970,G__27971,G__27972,G__27969,G__27969__$1,loc,class_name,simple_class,cause_type,format,map__27964,map__27964__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__27975_28218,_STAR_print_fn_STAR__orig_val__27976_28219,_STAR_print_newline_STAR__temp_val__27977_28220,sb__4661__auto__,G__27970,G__27971,G__27972,G__27969,G__27969__$1,loc,class_name,simple_class,cause_type,format,map__27964,map__27964__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__27977_28220;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__27978_28221;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__27975_28218,_STAR_print_fn_STAR__orig_val__27976_28219,_STAR_print_newline_STAR__temp_val__27977_28220,_STAR_print_fn_STAR__temp_val__27978_28221,sb__4661__auto__,G__27970,G__27971,G__27972,G__27969,G__27969__$1,loc,class_name,simple_class,cause_type,format,map__27964,map__27964__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__27975_28218,_STAR_print_fn_STAR__orig_val__27976_28219,_STAR_print_newline_STAR__temp_val__27977_28220,_STAR_print_fn_STAR__temp_val__27978_28221,sb__4661__auto__,G__27970,G__27971,G__27972,G__27969,G__27969__$1,loc,class_name,simple_class,cause_type,format,map__27964,map__27964__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__27960_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__27960_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__27975_28218,_STAR_print_fn_STAR__orig_val__27976_28219,_STAR_print_newline_STAR__temp_val__27977_28220,_STAR_print_fn_STAR__temp_val__27978_28221,sb__4661__auto__,G__27970,G__27971,G__27972,G__27969,G__27969__$1,loc,class_name,simple_class,cause_type,format,map__27964,map__27964__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__27975_28218,_STAR_print_fn_STAR__orig_val__27976_28219,_STAR_print_newline_STAR__temp_val__27977_28220,_STAR_print_fn_STAR__temp_val__27978_28221,sb__4661__auto__,G__27970,G__27971,G__27972,G__27969,G__27969__$1,loc,class_name,simple_class,cause_type,format,map__27964,map__27964__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__27976_28219;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__27975_28218;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__27970,G__27971,G__27972,G__27973) : format.call(null,G__27970,G__27971,G__27972,G__27973));

break;
case "macroexpansion":
var G__27979 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__27980 = cause_type;
var G__27981 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__27982 = loc;
var G__27983 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__27979,G__27980,G__27981,G__27982,G__27983) : format.call(null,G__27979,G__27980,G__27981,G__27982,G__27983));

break;
case "compile-syntax-check":
var G__27984 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__27985 = cause_type;
var G__27986 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__27987 = loc;
var G__27988 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__27984,G__27985,G__27986,G__27987,G__27988) : format.call(null,G__27984,G__27985,G__27986,G__27987,G__27988));

break;
case "compilation":
var G__27994 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__27995 = cause_type;
var G__27996 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__27997 = loc;
var G__27998 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__27994,G__27995,G__27996,G__27997,G__27998) : format.call(null,G__27994,G__27995,G__27996,G__27997,G__27998));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__28003 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__28004 = symbol;
var G__28005 = loc;
var G__28006 = (function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__28007_28251 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__28008_28252 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__28009_28253 = true;
var _STAR_print_fn_STAR__temp_val__28010_28254 = ((function (_STAR_print_newline_STAR__orig_val__28007_28251,_STAR_print_fn_STAR__orig_val__28008_28252,_STAR_print_newline_STAR__temp_val__28009_28253,sb__4661__auto__,G__28003,G__28004,G__28005,G__27969,G__27969__$1,loc,class_name,simple_class,cause_type,format,map__27964,map__27964__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__28007_28251,_STAR_print_fn_STAR__orig_val__28008_28252,_STAR_print_newline_STAR__temp_val__28009_28253,sb__4661__auto__,G__28003,G__28004,G__28005,G__27969,G__27969__$1,loc,class_name,simple_class,cause_type,format,map__27964,map__27964__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__28009_28253;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__28010_28254;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__28007_28251,_STAR_print_fn_STAR__orig_val__28008_28252,_STAR_print_newline_STAR__temp_val__28009_28253,_STAR_print_fn_STAR__temp_val__28010_28254,sb__4661__auto__,G__28003,G__28004,G__28005,G__27969,G__27969__$1,loc,class_name,simple_class,cause_type,format,map__27964,map__27964__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__28007_28251,_STAR_print_fn_STAR__orig_val__28008_28252,_STAR_print_newline_STAR__temp_val__28009_28253,_STAR_print_fn_STAR__temp_val__28010_28254,sb__4661__auto__,G__28003,G__28004,G__28005,G__27969,G__27969__$1,loc,class_name,simple_class,cause_type,format,map__27964,map__27964__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__27962_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__27962_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__28007_28251,_STAR_print_fn_STAR__orig_val__28008_28252,_STAR_print_newline_STAR__temp_val__28009_28253,_STAR_print_fn_STAR__temp_val__28010_28254,sb__4661__auto__,G__28003,G__28004,G__28005,G__27969,G__27969__$1,loc,class_name,simple_class,cause_type,format,map__27964,map__27964__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__28007_28251,_STAR_print_fn_STAR__orig_val__28008_28252,_STAR_print_newline_STAR__temp_val__28009_28253,_STAR_print_fn_STAR__temp_val__28010_28254,sb__4661__auto__,G__28003,G__28004,G__28005,G__27969,G__27969__$1,loc,class_name,simple_class,cause_type,format,map__27964,map__27964__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__28008_28252;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__28007_28251;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__28003,G__28004,G__28005,G__28006) : format.call(null,G__28003,G__28004,G__28005,G__28006));
} else {
var G__28015 = "Execution error%s at %s(%s).\n%s\n";
var G__28016 = cause_type;
var G__28017 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__28018 = loc;
var G__28019 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__28015,G__28016,G__28017,G__28018,G__28019) : format.call(null,G__28015,G__28016,G__28017,G__28018,G__28019));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27969__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
