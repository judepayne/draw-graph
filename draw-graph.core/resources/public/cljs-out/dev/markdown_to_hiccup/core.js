// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('markdown_to_hiccup.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('cljs.spec.alpha');
goog.require('markdown_to_hiccup.decode');
goog.require('hickory.core');
goog.require('markdown.core');
cljs.spec.alpha.def_impl(cljs.core.cst$kw$markdown_DASH_to_DASH_hiccup$core_SLASH_markdown,cljs.core.cst$sym$cljs$core_SLASH_string_QMARK_,cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$markdown_DASH_to_DASH_hiccup$core_SLASH_hiccup,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_,cljs.core.vector_QMARK_);
cljs.spec.alpha.def_impl(cljs.core.cst$kw$markdown_DASH_to_DASH_hiccup$core_SLASH_options,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_keys,cljs.core.cst$kw$opt_DASH_un,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$markdown_DASH_to_DASH_hiccup$core_SLASH_encode_QMARK_], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$req_DASH_un,cljs.core.cst$kw$opt_DASH_un,cljs.core.cst$kw$gfn,cljs.core.cst$kw$pred_DASH_exprs,cljs.core.cst$kw$keys_DASH_pred,cljs.core.cst$kw$opt_DASH_keys,cljs.core.cst$kw$req_DASH_specs,cljs.core.cst$kw$req,cljs.core.cst$kw$req_DASH_keys,cljs.core.cst$kw$opt_DASH_specs,cljs.core.cst$kw$pred_DASH_forms,cljs.core.cst$kw$opt],[null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$markdown_DASH_to_DASH_hiccup$core_SLASH_encode_QMARK_], null),null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__18309){
return cljs.core.map_QMARK_(G__18309);
})], null),(function (G__18309){
return cljs.core.map_QMARK_(G__18309);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$encode_QMARK_], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$markdown_DASH_to_DASH_hiccup$core_SLASH_encode_QMARK_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_,cljs.core.cst$sym$_PERCENT_))], null),null])));
cljs.spec.alpha.def_impl(cljs.core.cst$sym$markdown_DASH_to_DASH_hiccup$core_SLASH_md_DASH__GT_hiccup,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$md_DASH_str,cljs.core.cst$kw$markdown_DASH_to_DASH_hiccup$core_SLASH_markdown,cljs.core.cst$kw$params,cljs.core.cst$kw$markdown_DASH_to_DASH_hiccup$core_SLASH_options),cljs.core.cst$kw$ret,cljs.core.cst$kw$markdown_DASH_to_DASH_hiccup$core_SLASH_hiccup),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$md_DASH_str,cljs.core.cst$kw$markdown_DASH_to_DASH_hiccup$core_SLASH_markdown,cljs.core.cst$kw$params,cljs.core.cst$kw$markdown_DASH_to_DASH_hiccup$core_SLASH_options),cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$md_DASH_str,cljs.core.cst$kw$params], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$markdown_DASH_to_DASH_hiccup$core_SLASH_markdown,cljs.core.cst$kw$markdown_DASH_to_DASH_hiccup$core_SLASH_options], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$markdown_DASH_to_DASH_hiccup$core_SLASH_markdown,cljs.core.cst$kw$markdown_DASH_to_DASH_hiccup$core_SLASH_options], null)),null,null),cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_cat,cljs.core.cst$kw$md_DASH_str,cljs.core.cst$kw$markdown_DASH_to_DASH_hiccup$core_SLASH_markdown,cljs.core.cst$kw$params,cljs.core.cst$kw$markdown_DASH_to_DASH_hiccup$core_SLASH_options),cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$markdown_DASH_to_DASH_hiccup$core_SLASH_hiccup,cljs.core.cst$kw$markdown_DASH_to_DASH_hiccup$core_SLASH_hiccup,null,null),cljs.core.cst$kw$markdown_DASH_to_DASH_hiccup$core_SLASH_hiccup,null,null,null));
/**
 * Accepts a markdown string and returns a hiccup data structure converted from that markdown.
 *   Also accepts an optional params map. Use the :encode? boolean key to specify whether
 *   or not you want html escape characters to be encoded. Example:
 *  (md->hiccup "#Title" {:encode? true})
 */
markdown_to_hiccup.core.md__GT_hiccup = (function markdown_to_hiccup$core$md__GT_hiccup(var_args){
var G__18311 = arguments.length;
switch (G__18311) {
case 2:
return markdown_to_hiccup.core.md__GT_hiccup.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return markdown_to_hiccup.core.md__GT_hiccup.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

markdown_to_hiccup.core.md__GT_hiccup.cljs$core$IFn$_invoke$arity$2 = (function (md_str,params){
var valid_md = ((cljs.spec.alpha._STAR_compile_asserts_STAR_)?(cljs.core.truth_(cljs.core.deref(new cljs.core.Var(function(){return cljs.spec.alpha._STAR_runtime_asserts_STAR_;},cljs.core.cst$sym$cljs$spec$alpha_SLASH__STAR_runtime_DASH_asserts_STAR_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$private,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$dynamic,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[true,cljs.core.cst$sym$cljs$spec$alpha,cljs.core.cst$sym$_STAR_runtime_DASH_asserts_STAR_,"resources/public/cljs-out/dev/cljs/spec/alpha.cljs",20,1,true,1477,1479,cljs.core.List.EMPTY,null,((cljs.spec.alpha._STAR_runtime_asserts_STAR_)?cljs.spec.alpha._STAR_runtime_asserts_STAR_.cljs$lang$test:null)]))))?cljs.spec.alpha.assert_STAR_(cljs.core.cst$kw$markdown_DASH_to_DASH_hiccup$core_SLASH_markdown,md_str):md_str):md_str);
var encode_QMARK_ = cljs.core.cst$kw$encode_QMARK_.cljs$core$IFn$_invoke$arity$1(((cljs.spec.alpha._STAR_compile_asserts_STAR_)?(cljs.core.truth_(cljs.core.deref(new cljs.core.Var(function(){return cljs.spec.alpha._STAR_runtime_asserts_STAR_;},cljs.core.cst$sym$cljs$spec$alpha_SLASH__STAR_runtime_DASH_asserts_STAR_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$private,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$dynamic,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[true,cljs.core.cst$sym$cljs$spec$alpha,cljs.core.cst$sym$_STAR_runtime_DASH_asserts_STAR_,"resources/public/cljs-out/dev/cljs/spec/alpha.cljs",20,1,true,1477,1479,cljs.core.List.EMPTY,null,((cljs.spec.alpha._STAR_runtime_asserts_STAR_)?cljs.spec.alpha._STAR_runtime_asserts_STAR_.cljs$lang$test:null)]))))?cljs.spec.alpha.assert_STAR_(cljs.core.cst$kw$markdown_DASH_to_DASH_hiccup$core_SLASH_options,params):params):params));
var html = markdown.core.md__GT_html(valid_md);
var dom = hickory.core.parse(html);
var hiccup = cljs.core.first(hickory.core.as_hiccup(dom));
if(cljs.core.truth_(encode_QMARK_)){
return hiccup;
} else {
return (markdown_to_hiccup.decode.decode.cljs$core$IFn$_invoke$arity$1 ? markdown_to_hiccup.decode.decode.cljs$core$IFn$_invoke$arity$1(hiccup) : markdown_to_hiccup.decode.decode.call(null,hiccup));
}
});

markdown_to_hiccup.core.md__GT_hiccup.cljs$core$IFn$_invoke$arity$1 = (function (md_str){
return markdown_to_hiccup.core.md__GT_hiccup.cljs$core$IFn$_invoke$arity$2(md_str,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$encode_QMARK_,false], null));
});

markdown_to_hiccup.core.md__GT_hiccup.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated. Please use hiccup-in for better access to nested hiccup.
 *   Accepts a hiccup data structure and a keyword representing
 *   an html element tag (e.g. :body) and returns the first nested
 *   hiccup vector identified by the keyword.
 */
markdown_to_hiccup.core.hicc_in = (function markdown_to_hiccup$core$hicc_in(var_args){
var args__4736__auto__ = [];
var len__4730__auto___18315 = arguments.length;
var i__4731__auto___18316 = (0);
while(true){
if((i__4731__auto___18316 < len__4730__auto___18315)){
args__4736__auto__.push((arguments[i__4731__auto___18316]));

var G__18317 = (i__4731__auto___18316 + (1));
i__4731__auto___18316 = G__18317;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return markdown_to_hiccup.core.hicc_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

markdown_to_hiccup.core.hicc_in.cljs$core$IFn$_invoke$arity$variadic = (function (hiccup,kws){
while(true){
var kw = cljs.core.first(kws);
var root = cljs.core.first(hiccup);
if((kw == null)){
return hiccup;
} else {
if(cljs.core.empty_QMARK_(hiccup)){
return cljs.core.PersistentVector.EMPTY;
} else {
if(cljs.core.map_QMARK_(root)){
var G__18318 = cljs.core.rest(hiccup);
var G__18319 = kws;
hiccup = G__18318;
kws = G__18319;
continue;
} else {
if(cljs.core.vector_QMARK_(root)){
var branch_result = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(markdown_to_hiccup.core.hicc_in,root,kws);
if(cljs.core.empty_QMARK_(branch_result)){
var G__18320 = cljs.core.rest(hiccup);
var G__18321 = kws;
hiccup = G__18320;
kws = G__18321;
continue;
} else {
return branch_result;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(root,kw)){
var G__18322 = hiccup;
var G__18323 = cljs.core.rest(kws);
hiccup = G__18322;
kws = G__18323;
continue;
} else {
var G__18324 = cljs.core.rest(hiccup);
var G__18325 = kws;
hiccup = G__18324;
kws = G__18325;
continue;

}
}
}
}
}
break;
}
});

markdown_to_hiccup.core.hicc_in.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
markdown_to_hiccup.core.hicc_in.cljs$lang$applyTo = (function (seq18313){
var G__18314 = cljs.core.first(seq18313);
var seq18313__$1 = cljs.core.next(seq18313);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18314,seq18313__$1);
});

markdown_to_hiccup.core.keywords_QMARK_ = (function markdown_to_hiccup$core$keywords_QMARK_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___18327 = arguments.length;
var i__4731__auto___18328 = (0);
while(true){
if((i__4731__auto___18328 < len__4730__auto___18327)){
args__4736__auto__.push((arguments[i__4731__auto___18328]));

var G__18329 = (i__4731__auto___18328 + (1));
i__4731__auto___18328 = G__18329;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return markdown_to_hiccup.core.keywords_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

markdown_to_hiccup.core.keywords_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.every_QMARK_(cljs.core.keyword_QMARK_,args);
});

markdown_to_hiccup.core.keywords_QMARK_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
markdown_to_hiccup.core.keywords_QMARK_.cljs$lang$applyTo = (function (seq18326){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18326));
});

/**
 * Accepts a list of [keyword count] pairs, and subtracts the count
 * of the first pair. If that count becomes negative, dec-front returns
 * the rest of the list. Otherwise, it returns the list with the new
 * count value for the first pair.
 */
markdown_to_hiccup.core.dec_front = (function markdown_to_hiccup$core$dec_front(kw_pairs){
var vec__18330 = cljs.core.first(kw_pairs);
var kw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18330,(0),null);
var count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18330,(1),null);
var new_count = (count - (1));
var new_pair = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kw,new_count], null);
if((new_count < (0))){
return cljs.core.rest(kw_pairs);
} else {
return cljs.core.cons(new_pair,cljs.core.rest(kw_pairs));
}
});
/**
 * Accepts a list of keywords and numbers. Any place in which
 *   a number does not separate keywords, a zero will be inserted.
 *   Returns the arg list as a sequence of keyword -> number pairs
 *   nested as lists.
 */
markdown_to_hiccup.core.num_partition = (function markdown_to_hiccup$core$num_partition(args){
var arglist = args;
var ret_vec = cljs.core.PersistentVector.EMPTY;
while(true){
var curr_arg = cljs.core.first(arglist);
var prev_arg = cljs.core.peek(ret_vec);
if((curr_arg == null)){
if((prev_arg instanceof cljs.core.Keyword)){
return cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret_vec,(0)));
} else {
return cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),ret_vec);
}
} else {
if(markdown_to_hiccup.core.keywords_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([curr_arg,prev_arg], 0))){
var G__18333 = cljs.core.rest(arglist);
var G__18334 = cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(ret_vec,(0),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([curr_arg], 0));
arglist = G__18333;
ret_vec = G__18334;
continue;
} else {
var G__18335 = cljs.core.rest(arglist);
var G__18336 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret_vec,curr_arg);
arglist = G__18335;
ret_vec = G__18336;
continue;

}
}
break;
}
});
markdown_to_hiccup.core.same_length_QMARK_ = (function markdown_to_hiccup$core$same_length_QMARK_(coll_a,coll_b){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(coll_a),cljs.core.count(coll_b));
});
/**
 * Recursive helper function for hiccup-in.
 */
markdown_to_hiccup.core.get_nested_hiccup = (function markdown_to_hiccup$core$get_nested_hiccup(hiccup,kw_pairs){
while(true){
var vec__18337 = cljs.core.first(kw_pairs);
var kw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18337,(0),null);
var nth_kw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18337,(1),null);
var front = cljs.core.first(hiccup);
var remaining = cljs.core.rest(hiccup);
if(cljs.core.empty_QMARK_(hiccup)){
return cljs.core.PersistentVector.EMPTY;
} else {
if((kw == null)){
return hiccup;
} else {
if(cljs.core.map_QMARK_(front)){
var G__18340 = remaining;
var G__18341 = kw_pairs;
hiccup = G__18340;
kw_pairs = G__18341;
continue;
} else {
if(cljs.core.vector_QMARK_(front)){
var branch_result = (markdown_to_hiccup.core.get_nested_hiccup.cljs$core$IFn$_invoke$arity$2 ? markdown_to_hiccup.core.get_nested_hiccup.cljs$core$IFn$_invoke$arity$2(front,kw_pairs) : markdown_to_hiccup.core.get_nested_hiccup.call(null,front,kw_pairs));
if(cljs.core.empty_QMARK_(branch_result)){
var nested_front = cljs.core.first(front);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nested_front,kw)){
var G__18342 = remaining;
var G__18343 = markdown_to_hiccup.core.dec_front(kw_pairs);
hiccup = G__18342;
kw_pairs = G__18343;
continue;
} else {
var G__18344 = remaining;
var G__18345 = kw_pairs;
hiccup = G__18344;
kw_pairs = G__18345;
continue;
}
} else {
return branch_result;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(front,kw)){
var new_pairs = markdown_to_hiccup.core.dec_front(kw_pairs);
if(cljs.core.empty_QMARK_(new_pairs)){
return hiccup;
} else {
var G__18346 = remaining;
var G__18347 = new_pairs;
hiccup = G__18346;
kw_pairs = G__18347;
continue;

}
} else {
var G__18348 = remaining;
var G__18349 = kw_pairs;
hiccup = G__18348;
kw_pairs = G__18349;
continue;

}
}
}
}
}
break;
}
});
/**
 * Accepts a hiccup data structure and any series of args in keyword, index order.
 * Each keyword represents a hiccup element, and the paired index is which element at that level hiccup-in will look in.
 * If no number proceeds a keyword, hiccup-in will find the first element with that keyword.
 * Returns the nested hiccup vector identified by the keywords.
 * Example: (hiccup-in hiccup :html :body :div 0 :h1 2 :p)
 */
markdown_to_hiccup.core.hiccup_in = (function markdown_to_hiccup$core$hiccup_in(var_args){
var args__4736__auto__ = [];
var len__4730__auto___18352 = arguments.length;
var i__4731__auto___18353 = (0);
while(true){
if((i__4731__auto___18353 < len__4730__auto___18352)){
args__4736__auto__.push((arguments[i__4731__auto___18353]));

var G__18354 = (i__4731__auto___18353 + (1));
i__4731__auto___18353 = G__18354;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return markdown_to_hiccup.core.hiccup_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

markdown_to_hiccup.core.hiccup_in.cljs$core$IFn$_invoke$arity$variadic = (function (hiccup,kw_pairs){
var pathway = markdown_to_hiccup.core.num_partition(kw_pairs);
return markdown_to_hiccup.core.get_nested_hiccup(hiccup,pathway);
});

markdown_to_hiccup.core.hiccup_in.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
markdown_to_hiccup.core.hiccup_in.cljs$lang$applyTo = (function (seq18350){
var G__18351 = cljs.core.first(seq18350);
var seq18350__$1 = cljs.core.next(seq18350);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18351,seq18350__$1);
});

/**
 * Accepts hiccup and returns the same hiccup only
 * without the :html, :head, and :body elements. Useful
 * if you want to nest your markdown hiccup in existing
 * hiccup data structures.
 */
markdown_to_hiccup.core.component = (function markdown_to_hiccup$core$component(hiccup){
var body = markdown_to_hiccup.core.hiccup_in.cljs$core$IFn$_invoke$arity$variadic(hiccup,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$body], 0));
return cljs.core.vec(cljs.core.cons(cljs.core.cst$kw$div,cljs.core.rest(body)));
});
