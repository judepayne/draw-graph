// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('markdown.lists');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('markdown.common');
markdown.lists.close_lists = (function markdown$lists$close_lists(lists){
return clojure.string.join.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = (function markdown$lists$close_lists_$_iter__12239(s__12240){
return (new cljs.core.LazySeq(null,(function (){
var s__12240__$1 = s__12240;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__12240__$1);
if(temp__5720__auto__){
var s__12240__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12240__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__12240__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__12242 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__12241 = (0);
while(true){
if((i__12241 < size__4522__auto__)){
var vec__12243 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__12241);
var list_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12243,(0),null);
cljs.core.chunk_append(b__12242,["</li></",cljs.core.name(list_type),">"].join(''));

var G__12249 = (i__12241 + (1));
i__12241 = G__12249;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12242),markdown$lists$close_lists_$_iter__12239(cljs.core.chunk_rest(s__12240__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12242),null);
}
} else {
var vec__12246 = cljs.core.first(s__12240__$2);
var list_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12246,(0),null);
return cljs.core.cons(["</li></",cljs.core.name(list_type),">"].join(''),markdown$lists$close_lists_$_iter__12239(cljs.core.rest(s__12240__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(lists);
})());
});
markdown.lists.add_row = (function markdown$lists$add_row(row_type,list_type,num_indents,indents,content,state){
if(cljs.core.truth_(list_type)){
if((num_indents < indents)){
var lists_to_close = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__12250_SHARP_){
return (cljs.core.second(p1__12250_SHARP_) > num_indents);
}),cljs.core.reverse(cljs.core.cst$kw$lists.cljs$core$IFn$_invoke$arity$1(state)));
var remaining_lists = cljs.core.vec(cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2(cljs.core.count(lists_to_close),cljs.core.cst$kw$lists.cljs$core$IFn$_invoke$arity$1(state)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.str,markdown.lists.close_lists(lists_to_close),"</li><li>",content),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$lists,(((num_indents > cljs.core.second(cljs.core.last(remaining_lists))))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(remaining_lists,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_type,num_indents], null)):remaining_lists))], null);
} else {
if((num_indents > indents)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["<",cljs.core.name(row_type),"><li>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(content)].join(''),cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lists], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_type,num_indents], null))], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(num_indents,indents)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["</li><li>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(content)].join(''),state], null);
} else {
return null;
}
}
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["<",cljs.core.name(row_type),"><li>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(content)].join(''),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$lists,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_type,num_indents], null)], null))], null);
}
});
markdown.lists.ul = (function markdown$lists$ul(text,state){
var vec__12251 = cljs.core.last(cljs.core.cst$kw$lists.cljs$core$IFn$_invoke$arity$1(state));
var list_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12251,(0),null);
var indents = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12251,(1),null);
var num_indents = cljs.core.count(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_," "),text));
var content = clojure.string.trim((function (){var G__12254 = text;
var G__12255 = (num_indents + (1));
return (markdown.common._STAR_substring_STAR_.cljs$core$IFn$_invoke$arity$2 ? markdown.common._STAR_substring_STAR_.cljs$core$IFn$_invoke$arity$2(G__12254,G__12255) : markdown.common._STAR_substring_STAR_.call(null,G__12254,G__12255));
})());
return markdown.lists.add_row(cljs.core.cst$kw$ul,list_type,num_indents,indents,(function (){var or__4131__auto__ = markdown.common.make_heading(content,false);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return content;
}
})(),state);
});
markdown.lists.ol = (function markdown$lists$ol(text,state){
var vec__12256 = cljs.core.last(cljs.core.cst$kw$lists.cljs$core$IFn$_invoke$arity$1(state));
var list_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12256,(0),null);
var indents = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12256,(1),null);
var num_indents = cljs.core.count(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_," "),text));
var content = clojure.string.trim(clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_," "),clojure.string.trim(text))));
return markdown.lists.add_row(cljs.core.cst$kw$ol,list_type,num_indents,indents,(function (){var or__4131__auto__ = markdown.common.make_heading(content,false);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return content;
}
})(),state);
});
markdown.lists.li = (function markdown$lists$li(text,p__12259){
var map__12260 = p__12259;
var map__12260__$1 = (((((!((map__12260 == null))))?(((((map__12260.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12260.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12260):map__12260);
var state = map__12260__$1;
var codeblock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12260__$1,cljs.core.cst$kw$codeblock);
var last_line_empty_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12260__$1,cljs.core.cst$kw$last_DASH_line_DASH_empty_QMARK_);
var eof = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12260__$1,cljs.core.cst$kw$eof);
var lists = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12260__$1,cljs.core.cst$kw$lists);
if(cljs.core.truth_((function (){var and__4120__auto__ = last_line_empty_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return clojure.string.blank_QMARK_(text);
} else {
return and__4120__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(markdown.lists.close_lists(cljs.core.reverse(lists))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(text)].join(''),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,cljs.core.cst$kw$lists),cljs.core.cst$kw$last_DASH_line_DASH_empty_QMARK_,false)], null);
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = lists;
if(cljs.core.truth_(and__4120__auto__)){
return codeblock;
} else {
return and__4120__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.not(eof);
if(and__4120__auto__){
var and__4120__auto____$1 = lists;
if(cljs.core.truth_(and__4120__auto____$1)){
return clojure.string.blank_QMARK_(text);
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$last_DASH_line_DASH_empty_QMARK_,false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$eof,false], 0))], null);
} else {
var indents = (cljs.core.truth_(last_line_empty_QMARK_)?(0):cljs.core.count(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_," "),text)));
var trimmed = clojure.string.trim(text);
var in_list_QMARK_ = cljs.core.cst$kw$lists.cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(cljs.core.re_find(/^[\*\+-] /,trimmed))){
return markdown.lists.ul((cljs.core.truth_(in_list_QMARK_)?text:trimmed),state);
} else {
if(cljs.core.truth_(cljs.core.re_find(/^[0-9]+\. /,trimmed))){
return markdown.lists.ol((cljs.core.truth_(in_list_QMARK_)?text:trimmed),state);
} else {
if((indents > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = (function (){var or__4131__auto__ = eof;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return last_line_empty_QMARK_;
}
})();
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not_empty(lists);
} else {
return and__4120__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.lists.close_lists(cljs.core.reverse(lists)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$lists,cljs.core.PersistentVector.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$buf,text], 0))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);

}
}
}
}

}
}
}
});
