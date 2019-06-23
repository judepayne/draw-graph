goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('clojure.set');
/**
 * Internal helper for diff.
 */
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
 * Convert an associative-by-numeric-index collection into
 * an equivalent vector, with nil for any missing keys
 */
clojure.data.vectorize = (function clojure$data$vectorize(m){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__30454){
var vec__30455 = p__30454;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30455,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30455,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
});
/**
 * Diff associative things a and b, comparing only the key k.
 */
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__30465 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30465,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30465,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30465,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && ((((!((ab == null)))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && ((((!((a_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && ((((!((b_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__30469 = arguments.length;
switch (G__30469) {
case 2:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
});

clojure.data.diff_associative.cljs$lang$maxFixedArity = 3;

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__4219__auto__ = cljs.core.count(a);
var y__4220__auto__ = cljs.core.count(b);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})()))));
});
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});

/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.EqualityPartition = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if((((!((x == null)))) && ((!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null)))))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__4433__auto__ = (((x == null))?null:x);
var m__4434__auto__ = (clojure.data.equality_partition[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4434__auto__.call(null,x));
} else {
var m__4431__auto__ = (clojure.data.equality_partition["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4431__auto__.call(null,x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if((((!((a == null)))) && ((!((a.clojure$data$Diff$diff_similar$arity$2 == null)))))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__4433__auto__ = (((a == null))?null:a);
var m__4434__auto__ = (clojure.data.diff_similar[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4434__auto__.call(null,a,b));
} else {
var m__4431__auto__ = (clojure.data.diff_similar["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4431__auto__.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__30496_30620 = clojure.data.equality_partition;
var G__30497_30621 = "null";
var G__30498_30622 = ((function (G__30496_30620,G__30497_30621){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__30496_30620,G__30497_30621))
;
goog.object.set(G__30496_30620,G__30497_30621,G__30498_30622);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__30499_30624 = clojure.data.equality_partition;
var G__30500_30625 = "string";
var G__30501_30626 = ((function (G__30499_30624,G__30500_30625){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__30499_30624,G__30500_30625))
;
goog.object.set(G__30499_30624,G__30500_30625,G__30501_30626);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__30504_30628 = clojure.data.equality_partition;
var G__30505_30629 = "number";
var G__30506_30630 = ((function (G__30504_30628,G__30505_30629){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__30504_30628,G__30505_30629))
;
goog.object.set(G__30504_30628,G__30505_30629,G__30506_30630);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__30508_30634 = clojure.data.equality_partition;
var G__30509_30635 = "array";
var G__30510_30636 = ((function (G__30508_30634,G__30509_30635){
return (function (x){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
});})(G__30508_30634,G__30509_30635))
;
goog.object.set(G__30508_30634,G__30509_30635,G__30510_30636);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__30511_30639 = clojure.data.equality_partition;
var G__30512_30640 = "function";
var G__30513_30641 = ((function (G__30511_30639,G__30512_30640){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__30511_30639,G__30512_30640))
;
goog.object.set(G__30511_30639,G__30512_30640,G__30513_30641);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__30514_30642 = clojure.data.equality_partition;
var G__30515_30643 = "boolean";
var G__30516_30644 = ((function (G__30514_30642,G__30515_30643){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__30514_30642,G__30515_30643))
;
goog.object.set(G__30514_30642,G__30515_30643,G__30516_30644);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__30522_30645 = clojure.data.equality_partition;
var G__30523_30646 = "_";
var G__30524_30647 = ((function (G__30522_30645,G__30523_30646){
return (function (x){
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return new cljs.core.Keyword(null,"set","set",304602554);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
} else {
return new cljs.core.Keyword(null,"atom","atom",-397043653);

}
}
}
});})(G__30522_30645,G__30523_30646))
;
goog.object.set(G__30522_30645,G__30523_30646,G__30524_30647);
goog.object.set(clojure.data.Diff,"null",true);

var G__30532_30655 = clojure.data.diff_similar;
var G__30533_30656 = "null";
var G__30534_30657 = ((function (G__30532_30655,G__30533_30656){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__30532_30655,G__30533_30656))
;
goog.object.set(G__30532_30655,G__30533_30656,G__30534_30657);

goog.object.set(clojure.data.Diff,"string",true);

var G__30539_30661 = clojure.data.diff_similar;
var G__30540_30662 = "string";
var G__30541_30663 = ((function (G__30539_30661,G__30540_30662){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__30539_30661,G__30540_30662))
;
goog.object.set(G__30539_30661,G__30540_30662,G__30541_30663);

goog.object.set(clojure.data.Diff,"number",true);

var G__30544_30664 = clojure.data.diff_similar;
var G__30545_30665 = "number";
var G__30546_30666 = ((function (G__30544_30664,G__30545_30665){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__30544_30664,G__30545_30665))
;
goog.object.set(G__30544_30664,G__30545_30665,G__30546_30666);

goog.object.set(clojure.data.Diff,"array",true);

var G__30547_30669 = clojure.data.diff_similar;
var G__30548_30670 = "array";
var G__30549_30671 = ((function (G__30547_30669,G__30548_30670){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__30547_30669,G__30548_30670))
;
goog.object.set(G__30547_30669,G__30548_30670,G__30549_30671);

goog.object.set(clojure.data.Diff,"function",true);

var G__30550_30672 = clojure.data.diff_similar;
var G__30551_30673 = "function";
var G__30552_30674 = ((function (G__30550_30672,G__30551_30673){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__30550_30672,G__30551_30673))
;
goog.object.set(G__30550_30672,G__30551_30673,G__30552_30674);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__30557_30675 = clojure.data.diff_similar;
var G__30558_30676 = "boolean";
var G__30559_30677 = ((function (G__30557_30675,G__30558_30676){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__30557_30675,G__30558_30676))
;
goog.object.set(G__30557_30675,G__30558_30676,G__30559_30677);

goog.object.set(clojure.data.Diff,"_",true);

var G__30563_30679 = clojure.data.diff_similar;
var G__30564_30680 = "_";
var G__30565_30681 = ((function (G__30563_30679,G__30564_30680){
return (function (a,b){
var fexpr__30567 = (function (){var G__30568 = clojure.data.equality_partition(a);
var G__30568__$1 = (((G__30568 instanceof cljs.core.Keyword))?G__30568.fqn:null);
switch (G__30568__$1) {
case "atom":
return clojure.data.atom_diff;

break;
case "set":
return clojure.data.diff_set;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "map":
return clojure.data.diff_associative;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30568__$1)].join('')));

}
})();
return (fexpr__30567.cljs$core$IFn$_invoke$arity$2 ? fexpr__30567.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__30567.call(null,a,b));
});})(G__30563_30679,G__30564_30680))
;
goog.object.set(G__30563_30679,G__30564_30680,G__30565_30681);
/**
 * Recursively compares a and b, returning a tuple of
 *   [things-only-in-a things-only-in-b things-in-both].
 *   Comparison rules:
 * 
 *   * For equal a and b, return [nil nil a].
 *   * Maps are subdiffed where keys match and values differ.
 *   * Sets are never subdiffed.
 *   * All sequential things are treated as associative collections
 *  by their indexes, with results returned as vectors.
 *   * Everything else (including strings!) is treated as
 *  an atom and compared for equality.
 */
clojure.data.diff = (function clojure$data$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
});

//# sourceMappingURL=clojure.data.js.map
