goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__40595){
var map__40596 = p__40595;
var map__40596__$1 = (((((!((map__40596 == null))))?(((((map__40596.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40596.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40596):map__40596);
var m = map__40596__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40596__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40596__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4185__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
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
var seq__40598_40775 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__40599_40776 = null;
var count__40600_40777 = (0);
var i__40601_40778 = (0);
while(true){
if((i__40601_40778 < count__40600_40777)){
var f_40779 = chunk__40599_40776.cljs$core$IIndexed$_nth$arity$2(null,i__40601_40778);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_40779], 0));


var G__40780 = seq__40598_40775;
var G__40781 = chunk__40599_40776;
var G__40782 = count__40600_40777;
var G__40783 = (i__40601_40778 + (1));
seq__40598_40775 = G__40780;
chunk__40599_40776 = G__40781;
count__40600_40777 = G__40782;
i__40601_40778 = G__40783;
continue;
} else {
var temp__5735__auto___40799 = cljs.core.seq(seq__40598_40775);
if(temp__5735__auto___40799){
var seq__40598_40800__$1 = temp__5735__auto___40799;
if(cljs.core.chunked_seq_QMARK_(seq__40598_40800__$1)){
var c__4609__auto___40801 = cljs.core.chunk_first(seq__40598_40800__$1);
var G__40802 = cljs.core.chunk_rest(seq__40598_40800__$1);
var G__40803 = c__4609__auto___40801;
var G__40804 = cljs.core.count(c__4609__auto___40801);
var G__40805 = (0);
seq__40598_40775 = G__40802;
chunk__40599_40776 = G__40803;
count__40600_40777 = G__40804;
i__40601_40778 = G__40805;
continue;
} else {
var f_40806 = cljs.core.first(seq__40598_40800__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_40806], 0));


var G__40807 = cljs.core.next(seq__40598_40800__$1);
var G__40808 = null;
var G__40809 = (0);
var G__40810 = (0);
seq__40598_40775 = G__40807;
chunk__40599_40776 = G__40808;
count__40600_40777 = G__40809;
i__40601_40778 = G__40810;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_40811 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_40811], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_40811)))?cljs.core.second(arglists_40811):arglists_40811)], 0));
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
var seq__40605_40812 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__40606_40813 = null;
var count__40607_40814 = (0);
var i__40608_40815 = (0);
while(true){
if((i__40608_40815 < count__40607_40814)){
var vec__40621_40816 = chunk__40606_40813.cljs$core$IIndexed$_nth$arity$2(null,i__40608_40815);
var name_40817 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40621_40816,(0),null);
var map__40624_40818 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40621_40816,(1),null);
var map__40624_40819__$1 = (((((!((map__40624_40818 == null))))?(((((map__40624_40818.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40624_40818.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40624_40818):map__40624_40818);
var doc_40820 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40624_40819__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_40821 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40624_40819__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_40817], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_40821], 0));

if(cljs.core.truth_(doc_40820)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_40820], 0));
} else {
}


var G__40822 = seq__40605_40812;
var G__40823 = chunk__40606_40813;
var G__40824 = count__40607_40814;
var G__40825 = (i__40608_40815 + (1));
seq__40605_40812 = G__40822;
chunk__40606_40813 = G__40823;
count__40607_40814 = G__40824;
i__40608_40815 = G__40825;
continue;
} else {
var temp__5735__auto___40826 = cljs.core.seq(seq__40605_40812);
if(temp__5735__auto___40826){
var seq__40605_40827__$1 = temp__5735__auto___40826;
if(cljs.core.chunked_seq_QMARK_(seq__40605_40827__$1)){
var c__4609__auto___40828 = cljs.core.chunk_first(seq__40605_40827__$1);
var G__40829 = cljs.core.chunk_rest(seq__40605_40827__$1);
var G__40830 = c__4609__auto___40828;
var G__40831 = cljs.core.count(c__4609__auto___40828);
var G__40832 = (0);
seq__40605_40812 = G__40829;
chunk__40606_40813 = G__40830;
count__40607_40814 = G__40831;
i__40608_40815 = G__40832;
continue;
} else {
var vec__40626_40833 = cljs.core.first(seq__40605_40827__$1);
var name_40834 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40626_40833,(0),null);
var map__40629_40835 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40626_40833,(1),null);
var map__40629_40836__$1 = (((((!((map__40629_40835 == null))))?(((((map__40629_40835.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40629_40835.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40629_40835):map__40629_40835);
var doc_40837 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40629_40836__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_40838 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40629_40836__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_40834], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_40838], 0));

if(cljs.core.truth_(doc_40837)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_40837], 0));
} else {
}


var G__40843 = cljs.core.next(seq__40605_40827__$1);
var G__40844 = null;
var G__40845 = (0);
var G__40846 = (0);
seq__40605_40812 = G__40843;
chunk__40606_40813 = G__40844;
count__40607_40814 = G__40845;
i__40608_40815 = G__40846;
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
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__40632 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__40633 = null;
var count__40634 = (0);
var i__40635 = (0);
while(true){
if((i__40635 < count__40634)){
var role = chunk__40633.cljs$core$IIndexed$_nth$arity$2(null,i__40635);
var temp__5735__auto___40853__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___40853__$1)){
var spec_40854 = temp__5735__auto___40853__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_40854)], 0));
} else {
}


var G__40855 = seq__40632;
var G__40856 = chunk__40633;
var G__40857 = count__40634;
var G__40858 = (i__40635 + (1));
seq__40632 = G__40855;
chunk__40633 = G__40856;
count__40634 = G__40857;
i__40635 = G__40858;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__40632);
if(temp__5735__auto____$1){
var seq__40632__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__40632__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__40632__$1);
var G__40862 = cljs.core.chunk_rest(seq__40632__$1);
var G__40863 = c__4609__auto__;
var G__40864 = cljs.core.count(c__4609__auto__);
var G__40865 = (0);
seq__40632 = G__40862;
chunk__40633 = G__40863;
count__40634 = G__40864;
i__40635 = G__40865;
continue;
} else {
var role = cljs.core.first(seq__40632__$1);
var temp__5735__auto___40872__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___40872__$2)){
var spec_40873 = temp__5735__auto___40872__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_40873)], 0));
} else {
}


var G__40875 = cljs.core.next(seq__40632__$1);
var G__40876 = null;
var G__40877 = (0);
var G__40878 = (0);
seq__40632 = G__40875;
chunk__40633 = G__40876;
count__40634 = G__40877;
i__40635 = G__40878;
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
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
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
var G__40879 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__40880 = cljs.core.ex_cause(t);
via = G__40879;
t = G__40880;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
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
var map__40657 = datafied_throwable;
var map__40657__$1 = (((((!((map__40657 == null))))?(((((map__40657.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40657.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40657):map__40657);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40657__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40657__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__40657__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__40658 = cljs.core.last(via);
var map__40658__$1 = (((((!((map__40658 == null))))?(((((map__40658.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40658.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40658):map__40658);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40658__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40658__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40658__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__40659 = data;
var map__40659__$1 = (((((!((map__40659 == null))))?(((((map__40659.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40659.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40659):map__40659);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40659__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40659__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40659__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__40660 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__40660__$1 = (((((!((map__40660 == null))))?(((((map__40660.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40660.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40660):map__40660);
var top_data = map__40660__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40660__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__40673 = phase;
var G__40673__$1 = (((G__40673 instanceof cljs.core.Keyword))?G__40673.fqn:null);
switch (G__40673__$1) {
case "read-source":
var map__40674 = data;
var map__40674__$1 = (((((!((map__40674 == null))))?(((((map__40674.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40674.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40674):map__40674);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40674__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40674__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__40676 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__40676__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40676,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__40676);
var G__40676__$2 = (cljs.core.truth_((function (){var fexpr__40677 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__40677.cljs$core$IFn$_invoke$arity$1 ? fexpr__40677.cljs$core$IFn$_invoke$arity$1(source) : fexpr__40677.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__40676__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__40676__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40676__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__40676__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__40678 = top_data;
var G__40678__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40678,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__40678);
var G__40678__$2 = (cljs.core.truth_((function (){var fexpr__40679 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__40679.cljs$core$IFn$_invoke$arity$1 ? fexpr__40679.cljs$core$IFn$_invoke$arity$1(source) : fexpr__40679.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__40678__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__40678__$1);
var G__40678__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40678__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__40678__$2);
var G__40678__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40678__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__40678__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40678__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__40678__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__40680 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40680,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40680,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40680,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40680,(3),null);
var G__40683 = top_data;
var G__40683__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40683,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__40683);
var G__40683__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40683__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__40683__$1);
var G__40683__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40683__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__40683__$2);
var G__40683__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40683__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__40683__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40683__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__40683__$4;
}

break;
case "execution":
var vec__40684 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40684,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40684,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40684,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40684,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__40653_SHARP_){
var or__4185__auto__ = (p1__40653_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__40688 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__40688.cljs$core$IFn$_invoke$arity$1 ? fexpr__40688.cljs$core$IFn$_invoke$arity$1(p1__40653_SHARP_) : fexpr__40688.call(null,p1__40653_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__40701 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__40701__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40701,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__40701);
var G__40701__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40701__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__40701__$1);
var G__40701__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40701__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__40701__$2);
var G__40701__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40701__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__40701__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40701__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__40701__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40673__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__40706){
var map__40707 = p__40706;
var map__40707__$1 = (((((!((map__40707 == null))))?(((((map__40707.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40707.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40707):map__40707);
var triage_data = map__40707__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40707__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40707__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40707__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40707__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40707__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40707__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40707__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40707__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = source;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = line;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4185__auto__ = class$;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__40727 = phase;
var G__40727__$1 = (((G__40727 instanceof cljs.core.Keyword))?G__40727.fqn:null);
switch (G__40727__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__40728 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__40729 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40730 = loc;
var G__40731 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__40732_40918 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__40733_40919 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__40734_40920 = true;
var _STAR_print_fn_STAR__temp_val__40735_40921 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__40734_40920);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__40735_40921);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__40704_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40704_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__40733_40919);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__40732_40918);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__40728,G__40729,G__40730,G__40731) : format.call(null,G__40728,G__40729,G__40730,G__40731));

break;
case "macroexpansion":
var G__40737 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__40738 = cause_type;
var G__40739 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40740 = loc;
var G__40741 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__40737,G__40738,G__40739,G__40740,G__40741) : format.call(null,G__40737,G__40738,G__40739,G__40740,G__40741));

break;
case "compile-syntax-check":
var G__40742 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__40743 = cause_type;
var G__40744 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40745 = loc;
var G__40746 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__40742,G__40743,G__40744,G__40745,G__40746) : format.call(null,G__40742,G__40743,G__40744,G__40745,G__40746));

break;
case "compilation":
var G__40747 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__40748 = cause_type;
var G__40749 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40750 = loc;
var G__40751 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__40747,G__40748,G__40749,G__40750,G__40751) : format.call(null,G__40747,G__40748,G__40749,G__40750,G__40751));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__40752 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__40753 = symbol;
var G__40754 = loc;
var G__40755 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__40756_40929 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__40757_40930 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__40758_40931 = true;
var _STAR_print_fn_STAR__temp_val__40759_40932 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__40758_40931);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__40759_40932);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__40705_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40705_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__40757_40930);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__40756_40929);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__40752,G__40753,G__40754,G__40755) : format.call(null,G__40752,G__40753,G__40754,G__40755));
} else {
var G__40760 = "Execution error%s at %s(%s).\n%s\n";
var G__40761 = cause_type;
var G__40762 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40763 = loc;
var G__40764 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__40760,G__40761,G__40762,G__40763,G__40764) : format.call(null,G__40760,G__40761,G__40762,G__40763,G__40764));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40727__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
