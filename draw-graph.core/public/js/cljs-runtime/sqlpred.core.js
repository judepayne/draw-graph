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
sqlpred.core.filter_grammar = "S = Clause (Conjunction Clause)*\n   Conjunction = ' and ' | ' or '\n   Clause = term Op-S value | term Op-M list\n   term = Word\n   Op-S = '='|'not ='|'>'|'>='|'<'|'<='\n   Op-M = ' in ' | ' not in '\n   value = Word | QuotedWord\n   list = <'('> value (<','> value)* <')'>\n   <Word> = #'(^(?!\\()[a-zA-Z0-9-\\.]*)'\n   QuotedWord = #\"'([^']*?)'\"";
sqlpred.core.filter_parser = instaparse.core.parser.cljs$core$IFn$_invoke$arity$variadic(sqlpred.core.filter_grammar,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"auto-whitespace","auto-whitespace",741152317),sqlpred.core.whitespace], 0));
sqlpred.core.drop_first_last = (function sqlpred$core$drop_first_last(s){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.rest(cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(s)));
});
sqlpred.core.filter_transform = (function sqlpred$core$filter_transform(parsed,keywordize_keys_QMARK_){
var G__55417 = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"Op-M","Op-M",-77546812),new cljs.core.Keyword(null,"Clause","Clause",335462276),new cljs.core.Keyword(null,"Op-S","Op-S",-1683394200),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"term","term",-1817390416),new cljs.core.Keyword(null,"Conjunction","Conjunction",-842062255),new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.Keyword(null,"S","S",1267293308),new cljs.core.Keyword(null,"QuotedWord","QuotedWord",16590428)],[(function (arg){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"op","op",-1882987955),clojure.string.trim(arg)], null);
}),(function() { 
var G__55488__delegate = function (args){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,args);
};
var G__55488 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__55489__i = 0, G__55489__a = new Array(arguments.length -  0);
while (G__55489__i < G__55489__a.length) {G__55489__a[G__55489__i] = arguments[G__55489__i + 0]; ++G__55489__i;}
  args = new cljs.core.IndexedSeq(G__55489__a,0,null);
} 
return G__55488__delegate.call(this,args);};
G__55488.cljs$lang$maxFixedArity = 0;
G__55488.cljs$lang$applyTo = (function (arglist__55490){
var args = cljs.core.seq(arglist__55490);
return G__55488__delegate(args);
});
G__55488.cljs$core$IFn$_invoke$arity$variadic = G__55488__delegate;
return G__55488;
})()
,(function (arg){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"op","op",-1882987955),clojure.string.trim(arg)], null);
}),(function (arg){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),clojure.string.trim(arg)], null);
}),(function (arg){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"term","term",-1817390416),(cljs.core.truth_(keywordize_keys_QMARK_)?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(arg):arg)], null);
}),clojure.string.trim,(function() { 
var G__55494__delegate = function (args){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,args)], null);
};
var G__55494 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__55495__i = 0, G__55495__a = new Array(arguments.length -  0);
while (G__55495__i < G__55495__a.length) {G__55495__a[G__55495__i] = arguments[G__55495__i + 0]; ++G__55495__i;}
  args = new cljs.core.IndexedSeq(G__55495__a,0,null);
} 
return G__55494__delegate.call(this,args);};
G__55494.cljs$lang$maxFixedArity = 0;
G__55494.cljs$lang$applyTo = (function (arglist__55496){
var args = cljs.core.seq(arglist__55496);
return G__55494__delegate(args);
});
G__55494.cljs$core$IFn$_invoke$arity$variadic = G__55494__delegate;
return G__55494;
})()
,(function() { 
var G__55497__delegate = function (args){
return args;
};
var G__55497 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__55498__i = 0, G__55498__a = new Array(arguments.length -  0);
while (G__55498__i < G__55498__a.length) {G__55498__a[G__55498__i] = arguments[G__55498__i + 0]; ++G__55498__i;}
  args = new cljs.core.IndexedSeq(G__55498__a,0,null);
} 
return G__55497__delegate.call(this,args);};
G__55497.cljs$lang$maxFixedArity = 0;
G__55497.cljs$lang$applyTo = (function (arglist__55499){
var args = cljs.core.seq(arglist__55499);
return G__55497__delegate(args);
});
G__55497.cljs$core$IFn$_invoke$arity$variadic = G__55497__delegate;
return G__55497;
})()
,(function (arg){
return sqlpred.core.drop_first_last(arg);
})]);
var G__55418 = parsed;
return (instaparse.core.transform.cljs$core$IFn$_invoke$arity$2 ? instaparse.core.transform.cljs$core$IFn$_invoke$arity$2(G__55417,G__55418) : instaparse.core.transform.call(null,G__55417,G__55418));
});
sqlpred.core.filter_group = (function sqlpred$core$filter_group(transformed){
var t1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__55425_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.list("or"),p1__55425_SHARP_);
}),cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2((function (p1__55423_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("or",p1__55423_SHARP_);
}),transformed));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (s){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__55427_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("and",p1__55427_SHARP_);
}),s);
}),t1);
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
}catch (e55437){if((e55437 instanceof Error)){
var e = e55437;
throw sqlpred.core.err(["Could not convert ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)," to a number."].join(''));
} else {
throw e55437;

}
}}
});
/**
 * takes a term key and term value and assesses whether the key and value
 * is a submap of item.
 */
sqlpred.core.equality_match_QMARK_ = (function sqlpred$core$equality_match_QMARK_(k,v,not_QMARK_,skip_QMARK_,item){
if(cljs.core.truth_((function (){var and__4174__auto__ = skip_QMARK_;
if(cljs.core.truth_(and__4174__auto__)){
return (!(cljs.core.contains_QMARK_(item,k)));
} else {
return and__4174__auto__;
}
})())){
return true;
} else {
var v__$1 = ((typeof cljs.core.get.cljs$core$IFn$_invoke$arity$2(item,k) === 'number')?sqlpred.core.parse_num(v):v);
if(cljs.core.truth_(not_QMARK_)){
return sqlpred.core.not_submap_QMARK_(cljs.core.PersistentArrayMap.createAsIfByAssoc([k,v__$1]),item);
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
if(cljs.core.truth_((function (){var and__4174__auto__ = skip_QMARK_;
if(cljs.core.truth_(and__4174__auto__)){
return (!(cljs.core.contains_QMARK_(item,k)));
} else {
return and__4174__auto__;
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

var G__55438 = op;
switch (G__55438) {
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
if(cljs.core.truth_((function (){var and__4174__auto__ = skip_QMARK_;
if(cljs.core.truth_(and__4174__auto__)){
return (!(cljs.core.contains_QMARK_(item,k)));
} else {
return and__4174__auto__;
}
})())){
return true;
} else {
if(cljs.core.truth_(not_QMARK_)){
return cljs.core.every_QMARK_(cljs.core.true_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__55443_SHARP_){
return sqlpred.core.equality_match_QMARK_(k,p1__55443_SHARP_,true,skip_QMARK_,item);
}),vs));
} else {
return (!((cljs.core.some(cljs.core.true_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__55444_SHARP_){
return sqlpred.core.equality_match_QMARK_(k,p1__55444_SHARP_,false,skip_QMARK_,item);
}),vs)) == null)));
}
}
});
sqlpred.core.match_anything_QMARK_ = (function sqlpred$core$match_anything_QMARK_(clause,item){

return cljs.core.some((function (p1__55451_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(item,new cljs.core.Keyword(null,"term","term",-1817390416).cljs$core$IFn$_invoke$arity$1(clause)),p1__55451_SHARP_);
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
var args__4795__auto__ = [];
var len__4789__auto___55510 = arguments.length;
var i__4790__auto___55511 = (0);
while(true){
if((i__4790__auto___55511 < len__4789__auto___55510)){
args__4795__auto__.push((arguments[i__4790__auto___55511]));

var G__55512 = (i__4790__auto___55511 + (1));
i__4790__auto___55511 = G__55512;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return sqlpred.core.sql_pred.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(sqlpred.core.sql_pred.cljs$core$IFn$_invoke$arity$variadic = (function (statement,p__55475){
var map__55476 = p__55475;
var map__55476__$1 = (((((!((map__55476 == null))))?(((((map__55476.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55476.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55476):map__55476);
var keywordize_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__55476__$1,new cljs.core.Keyword(null,"keywordize-keys?","keywordize-keys?",-254545987),false);
var skip_missing_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__55476__$1,new cljs.core.Keyword(null,"skip-missing?","skip-missing?",554944425),false);
var terms = sqlpred.core.filter_group(sqlpred.core.filter_transform((sqlpred.core.filter_parser.cljs$core$IFn$_invoke$arity$1 ? sqlpred.core.filter_parser.cljs$core$IFn$_invoke$arity$1(statement) : sqlpred.core.filter_parser.call(null,statement)),keywordize_keys_QMARK_));
return cljs.core.partial.cljs$core$IFn$_invoke$arity$3(sqlpred.core.or_statements_QMARK_,terms,skip_missing_QMARK_);
}));

(sqlpred.core.sql_pred.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sqlpred.core.sql_pred.cljs$lang$applyTo = (function (seq55470){
var G__55471 = cljs.core.first(seq55470);
var seq55470__$1 = cljs.core.next(seq55470);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55471,seq55470__$1);
}));


//# sourceMappingURL=sqlpred.core.js.map
