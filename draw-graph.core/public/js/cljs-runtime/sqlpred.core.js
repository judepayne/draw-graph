goog.provide('sqlpred.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('loom.graph');
goog.require('instaparse.core');
/**
 * Creates an exception object with error-string.
 */
sqlpred.core.err = (function sqlpred$core$err(error_string){
return (new Error(error_string));
});
sqlpred.core.whitespace = instaparse.core.parser("whitespace = #'\\s+'");
sqlpred.core.filter_grammar = "S = Clause (Conjunction Clause)*\n   Conjunction = ' and ' | ' or '\n   Clause = term Op-S value | term Op-M list\n   term = Word\n   Op-S = '='|'not ='|'>'|'>='|'<'|'<='\n   Op-M = ' in ' | ' not in '\n   value = Word | QuotedWord\n   list = <'('> value (<','> value)* <')'>\n   <Word> = #'([a-zA-Z0-9]*)'\n   QuotedWord = #\"'([^']*?)'\"";
sqlpred.core.filter_parser = instaparse.core.parser.cljs$core$IFn$_invoke$arity$variadic(sqlpred.core.filter_grammar,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"auto-whitespace","auto-whitespace",741152317),sqlpred.core.whitespace], 0));
sqlpred.core.drop_first_last = (function sqlpred$core$drop_first_last(s){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.rest(cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(s)));
});
sqlpred.core.filter_transform = (function sqlpred$core$filter_transform(parsed,keywordize_keys_QMARK_){
var G__35964 = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"Op-M","Op-M",-77546812),new cljs.core.Keyword(null,"Clause","Clause",335462276),new cljs.core.Keyword(null,"Op-S","Op-S",-1683394200),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"term","term",-1817390416),new cljs.core.Keyword(null,"Conjunction","Conjunction",-842062255),new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.Keyword(null,"S","S",1267293308),new cljs.core.Keyword(null,"QuotedWord","QuotedWord",16590428)],[(function (arg){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"op","op",-1882987955),clojure.string.trim(arg)], null);
}),(function() { 
var G__36034__delegate = function (args){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,args);
};
var G__36034 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36035__i = 0, G__36035__a = new Array(arguments.length -  0);
while (G__36035__i < G__36035__a.length) {G__36035__a[G__36035__i] = arguments[G__36035__i + 0]; ++G__36035__i;}
  args = new cljs.core.IndexedSeq(G__36035__a,0,null);
} 
return G__36034__delegate.call(this,args);};
G__36034.cljs$lang$maxFixedArity = 0;
G__36034.cljs$lang$applyTo = (function (arglist__36036){
var args = cljs.core.seq(arglist__36036);
return G__36034__delegate(args);
});
G__36034.cljs$core$IFn$_invoke$arity$variadic = G__36034__delegate;
return G__36034;
})()
,(function (arg){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"op","op",-1882987955),clojure.string.trim(arg)], null);
}),(function (arg){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),clojure.string.trim(arg)], null);
}),(function (arg){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"term","term",-1817390416),(cljs.core.truth_(keywordize_keys_QMARK_)?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(arg):arg)], null);
}),clojure.string.trim,(function() { 
var G__36038__delegate = function (args){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,args)], null);
};
var G__36038 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36039__i = 0, G__36039__a = new Array(arguments.length -  0);
while (G__36039__i < G__36039__a.length) {G__36039__a[G__36039__i] = arguments[G__36039__i + 0]; ++G__36039__i;}
  args = new cljs.core.IndexedSeq(G__36039__a,0,null);
} 
return G__36038__delegate.call(this,args);};
G__36038.cljs$lang$maxFixedArity = 0;
G__36038.cljs$lang$applyTo = (function (arglist__36040){
var args = cljs.core.seq(arglist__36040);
return G__36038__delegate(args);
});
G__36038.cljs$core$IFn$_invoke$arity$variadic = G__36038__delegate;
return G__36038;
})()
,(function() { 
var G__36041__delegate = function (args){
return args;
};
var G__36041 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36042__i = 0, G__36042__a = new Array(arguments.length -  0);
while (G__36042__i < G__36042__a.length) {G__36042__a[G__36042__i] = arguments[G__36042__i + 0]; ++G__36042__i;}
  args = new cljs.core.IndexedSeq(G__36042__a,0,null);
} 
return G__36041__delegate.call(this,args);};
G__36041.cljs$lang$maxFixedArity = 0;
G__36041.cljs$lang$applyTo = (function (arglist__36043){
var args = cljs.core.seq(arglist__36043);
return G__36041__delegate(args);
});
G__36041.cljs$core$IFn$_invoke$arity$variadic = G__36041__delegate;
return G__36041;
})()
,(function (arg){
return sqlpred.core.drop_first_last(arg);
})]);
var G__35965 = parsed;
return (instaparse.core.transform.cljs$core$IFn$_invoke$arity$2 ? instaparse.core.transform.cljs$core$IFn$_invoke$arity$2(G__35964,G__35965) : instaparse.core.transform.call(null,G__35964,G__35965));
});
sqlpred.core.filter_group = (function sqlpred$core$filter_group(transformed){
var t1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__35974_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.list("or"),p1__35974_SHARP_);
}),cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2((function (p1__35973_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("or",p1__35973_SHARP_);
}),transformed));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (t1){
return (function (s){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (t1){
return (function (p1__35976_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("and",p1__35976_SHARP_);
});})(t1))
,s);
});})(t1))
,t1);
});
/**
 * Checks whether m contains all entries in sub.
 */
sqlpred.core.submap_QMARK_ = (function sqlpred$core$submap_QMARK_(sub,m){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sub,cljs.core.select_keys(m,cljs.core.keys(sub)));
});
sqlpred.core.not_submap_QMARK_ = cljs.core.complement(sqlpred.core.submap_QMARK_);
sqlpred.core.parse_num = (function sqlpred$core$parse_num(s){
if(typeof s === 'number'){
return s;
} else {
try{var n = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(s);
if(typeof n === 'number'){
return n;
} else {
throw sqlpred.core.err(["Could not convert ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)," to a number."].join(''));
}
}catch (e36008){if((e36008 instanceof Error)){
var e = e36008;
throw sqlpred.core.err(["Could not convert ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)," to a number."].join(''));
} else {
throw e36008;

}
}}
});
/**
 * takes a term key and term value and assesses whether the key and value
 * is a submap of item.
 */
sqlpred.core.equality_match_QMARK_ = (function sqlpred$core$equality_match_QMARK_(k,v,not_QMARK_,skip_QMARK_,item){
if(cljs.core.truth_((function (){var and__4120__auto__ = skip_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return (!(cljs.core.contains_QMARK_(item,k)));
} else {
return and__4120__auto__;
}
})())){
return true;
} else {
var v__$1 = ((typeof cljs.core.get.cljs$core$IFn$_invoke$arity$2(item,k) === 'number')?sqlpred.core.parse_num(v):v);
if(cljs.core.truth_(not_QMARK_)){
var G__36011 = cljs.core.PersistentArrayMap.createAsIfByAssoc([k,v__$1]);
var G__36012 = item;
return (sqlpred.core.not_submap_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sqlpred.core.not_submap_QMARK_.cljs$core$IFn$_invoke$arity$2(G__36011,G__36012) : sqlpred.core.not_submap_QMARK_.call(null,G__36011,G__36012));
} else {
return sqlpred.core.submap_QMARK_(cljs.core.PersistentArrayMap.createAsIfByAssoc([k,v__$1]),item);
}
}
});
/**
 * takes a term key, an op and term value and assessing whether the value of the
 * key in the item matches the condition.
 */
sqlpred.core.inequality_match_QMARK_ = (function sqlpred$core$inequality_match_QMARK_(k,op,v,skip_QMARK_,item){
if(cljs.core.truth_((function (){var and__4120__auto__ = skip_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return (!(cljs.core.contains_QMARK_(item,k)));
} else {
return and__4120__auto__;
}
})())){
return true;
} else {
var v__$1 = sqlpred.core.parse_num(v);
var v_item = sqlpred.core.parse_num(cljs.core.get.cljs$core$IFn$_invoke$arity$2(item,k));
if((!(typeof v_item === 'number'))){
throw sqlpred.core.err("internal oops!");
} else {
}

var G__36017 = op;
switch (G__36017) {
case ">":
return (v_item > v__$1);

break;
case "<":
return (v_item < v__$1);

break;
case ">=":
return (v_item >= v__$1);

break;
case "<=":
return (v_item <= v__$1);

break;
default:
throw sqlpred.core.err([cljs.core.str.cljs$core$IFn$_invoke$arity$1(op)," is not a valid comparison operator."].join(''));

}
}
});
sqlpred.core.multi_equality_QMARK_ = (function sqlpred$core$multi_equality_QMARK_(k,vs,not_QMARK_,skip_QMARK_,item){
if(cljs.core.truth_((function (){var and__4120__auto__ = skip_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return (!(cljs.core.contains_QMARK_(item,k)));
} else {
return and__4120__auto__;
}
})())){
return true;
} else {
if(cljs.core.truth_(not_QMARK_)){
return cljs.core.every_QMARK_(cljs.core.true_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36019_SHARP_){
return sqlpred.core.equality_match_QMARK_(k,p1__36019_SHARP_,true,skip_QMARK_,item);
}),vs));
} else {
return (!((cljs.core.some(cljs.core.true_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36020_SHARP_){
return sqlpred.core.equality_match_QMARK_(k,p1__36020_SHARP_,false,skip_QMARK_,item);
}),vs)) == null)));
}
}
});
sqlpred.core.match_anything_QMARK_ = (function sqlpred$core$match_anything_QMARK_(clause,item){

return cljs.core.some((function (p1__36021_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(item,new cljs.core.Keyword(null,"term","term",-1817390416).cljs$core$IFn$_invoke$arity$1(clause)),p1__36021_SHARP_);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["<all>"], null));
});
sqlpred.core.clause_matches_QMARK_ = (function sqlpred$core$clause_matches_QMARK_(clause,skip_QMARK_,item){
var op = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(clause);
var term = new cljs.core.Keyword(null,"term","term",-1817390416).cljs$core$IFn$_invoke$arity$1(clause);
var val = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(clause);
if(cljs.core.truth_(sqlpred.core.match_anything_QMARK_(clause,item))){
return true;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("=",op)){
return sqlpred.core.equality_match_QMARK_(term,val,false,skip_QMARK_,item);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("not =",op)){
return sqlpred.core.equality_match_QMARK_(term,val,true,skip_QMARK_,item);
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(">",op)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("<",op)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(">=",op)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("<=",op)))){
return sqlpred.core.inequality_match_QMARK_(term,op,val,skip_QMARK_,item);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("in",op)){
return sqlpred.core.multi_equality_QMARK_(term,val,false,skip_QMARK_,item);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("not in",op)){
return sqlpred.core.multi_equality_QMARK_(term,val,true,skip_QMARK_,item);
} else {
throw sqlpred.core.err([cljs.core.str.cljs$core$IFn$_invoke$arity$1(op)," is not a valid comparison operator."].join(''));

}
}
}
}
}
}
});
sqlpred.core.and_statements_QMARK_ = (function sqlpred$core$and_statements_QMARK_(ands,skip_QMARK_,item){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (a,c){
if(cljs.core.not(a)){
return cljs.core.reduced(false);
} else {
return sqlpred.core.clause_matches_QMARK_(c,skip_QMARK_,item);
}
}),true,ands);
});
sqlpred.core.or_statements_QMARK_ = (function sqlpred$core$or_statements_QMARK_(ors,skip_QMARK_,item){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (a,c){
if(cljs.core.truth_(a)){
return cljs.core.reduced(true);
} else {
return sqlpred.core.and_statements_QMARK_(c,skip_QMARK_,item);
}
}),false,ors);
});
sqlpred.core.sql_pred = (function sqlpred$core$sql_pred(var_args){
var args__4736__auto__ = [];
var len__4730__auto___36063 = arguments.length;
var i__4731__auto___36064 = (0);
while(true){
if((i__4731__auto___36064 < len__4730__auto___36063)){
args__4736__auto__.push((arguments[i__4731__auto___36064]));

var G__36065 = (i__4731__auto___36064 + (1));
i__4731__auto___36064 = G__36065;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return sqlpred.core.sql_pred.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

sqlpred.core.sql_pred.cljs$core$IFn$_invoke$arity$variadic = (function (statement,p__36028){
var map__36029 = p__36028;
var map__36029__$1 = (((((!((map__36029 == null))))?(((((map__36029.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36029.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36029):map__36029);
var keywordize_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36029__$1,new cljs.core.Keyword(null,"keywordize-keys?","keywordize-keys?",-254545987),false);
var skip_missing_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36029__$1,new cljs.core.Keyword(null,"skip-missing?","skip-missing?",554944425),false);
var terms = sqlpred.core.filter_group(sqlpred.core.filter_transform((sqlpred.core.filter_parser.cljs$core$IFn$_invoke$arity$1 ? sqlpred.core.filter_parser.cljs$core$IFn$_invoke$arity$1(statement) : sqlpred.core.filter_parser.call(null,statement)),keywordize_keys_QMARK_));
return cljs.core.partial.cljs$core$IFn$_invoke$arity$3(sqlpred.core.or_statements_QMARK_,terms,skip_missing_QMARK_);
});

sqlpred.core.sql_pred.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sqlpred.core.sql_pred.cljs$lang$applyTo = (function (seq36025){
var G__36026 = cljs.core.first(seq36025);
var seq36025__$1 = cljs.core.next(seq36025);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36026,seq36025__$1);
});


//# sourceMappingURL=sqlpred.core.js.map
