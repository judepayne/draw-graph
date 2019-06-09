// Compiled by ClojureScript 1.10.520 {}
goog.provide('clojure.data.zip.xml');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.data.zip');
goog.require('clojure.zip');
/**
 * Returns the xml attribute named attrname, of the xml node at location loc.
 */
clojure.data.zip.xml.attr = (function clojure$data$zip$xml$attr(var_args){
var G__20127 = arguments.length;
switch (G__20127) {
case 1:
return clojure.data.zip.xml.attr.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.data.zip.xml.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.zip.xml.attr.cljs$core$IFn$_invoke$arity$1 = (function (attrname){
return (function (loc){
return clojure.data.zip.xml.attr.call(null,loc,attrname);
});
});

clojure.data.zip.xml.attr.cljs$core$IFn$_invoke$arity$2 = (function (loc,attrname){
if(cljs.core.truth_(clojure.zip.branch_QMARK_.call(null,loc))){
return attrname.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(clojure.zip.node.call(null,loc)));
} else {
return null;
}
});

clojure.data.zip.xml.attr.cljs$lang$maxFixedArity = 2;

/**
 * Returns a query predicate that matches a node when it has an
 *   attribute named attrname whose value is attrval.
 */
clojure.data.zip.xml.attr_EQ_ = (function clojure$data$zip$xml$attr_EQ_(attrname,attrval){
return (function (loc){
return cljs.core._EQ_.call(null,attrval,clojure.data.zip.xml.attr.call(null,loc,attrname));
});
});
/**
 * Returns a query predicate that matches a node when its is a tag
 *   named tagname.
 */
clojure.data.zip.xml.tag_EQ_ = (function clojure$data$zip$xml$tag_EQ_(tagname){
return (function (loc){
var or__4131__auto__ = cljs.core._EQ_.call(null,tagname,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(clojure.zip.node.call(null,loc)));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return cljs.core.filter.call(null,((function (or__4131__auto__){
return (function (p1__20129_SHARP_){
var and__4120__auto__ = clojure.zip.branch_QMARK_.call(null,p1__20129_SHARP_);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.call(null,tagname,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(clojure.zip.node.call(null,p1__20129_SHARP_)));
} else {
return and__4120__auto__;
}
});})(or__4131__auto__))
,clojure.data.zip.children_auto.call(null,loc));
}
});
});
/**
 * Returns the textual contents of the given location, similar to
 *   xpaths's value-of
 */
clojure.data.zip.xml.text = (function clojure$data$zip$xml$text(loc){
return clojure.string.replace.call(null,cljs.core.apply.call(null,cljs.core.str,clojure.data.zip.xml.xml__GT_.call(null,loc,clojure.data.zip.descendants,clojure.zip.node,cljs.core.string_QMARK_)),cljs.core.re_pattern.call(null,["[\\s",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.char$.call(null,(160))),"]+"].join(''))," ");
});
/**
 * Returns a query predicate that matches a node when its textual
 *   content equals s.
 */
clojure.data.zip.xml.text_EQ_ = (function clojure$data$zip$xml$text_EQ_(s){
return (function (loc){
return cljs.core._EQ_.call(null,clojure.data.zip.xml.text.call(null,loc),s);
});
});
/**
 * Returns a query predicate that matches a node when its xml content
 *   matches the query expresions given.
 */
clojure.data.zip.xml.seq_test = (function clojure$data$zip$xml$seq_test(preds){
return (function (loc){
var and__4120__auto__ = cljs.core.seq.call(null,cljs.core.apply.call(null,clojure.data.zip.xml.xml__GT_,loc,preds));
if(and__4120__auto__){
return (new cljs.core.List(null,loc,null,(1),null));
} else {
return and__4120__auto__;
}
});
});
/**
 * The loc is passed to the first predicate.  If the predicate returns
 *   a collection, each value of the collection is passed to the next
 *   predicate.  If it returns a location, the location is passed to the
 *   next predicate.  If it returns true, the input location is passed to
 *   the next predicate.  If it returns false or nil, the next predicate
 *   is not called.
 * 
 *   This process is repeated, passing the processed results of each
 *   predicate to the next predicate.  xml-> returns the final sequence.
 *   The entire chain is evaluated lazily.
 * 
 *   There are also special predicates: keywords are converted to tag=,
 *   strings to text=, and vectors to sub-queries that return true if
 *   they match.
 * 
 *   See the footer of zip-query.clj for examples.
 */
clojure.data.zip.xml.xml__GT_ = (function clojure$data$zip$xml$xml__GT_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___20133 = arguments.length;
var i__4731__auto___20134 = (0);
while(true){
if((i__4731__auto___20134 < len__4730__auto___20133)){
args__4736__auto__.push((arguments[i__4731__auto___20134]));

var G__20135 = (i__4731__auto___20134 + (1));
i__4731__auto___20134 = G__20135;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return clojure.data.zip.xml.xml__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

clojure.data.zip.xml.xml__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (loc,preds){
return clojure.data.zip.mapcat_chain.call(null,loc,preds,(function (p1__20130_SHARP_){
if((p1__20130_SHARP_ instanceof cljs.core.Keyword)){
return clojure.data.zip.xml.tag_EQ_.call(null,p1__20130_SHARP_);
} else {
if(typeof p1__20130_SHARP_ === 'string'){
return clojure.data.zip.xml.text_EQ_.call(null,p1__20130_SHARP_);
} else {
if(cljs.core.vector_QMARK_.call(null,p1__20130_SHARP_)){
return clojure.data.zip.xml.seq_test.call(null,p1__20130_SHARP_);
} else {
return null;
}
}
}
}));
});

clojure.data.zip.xml.xml__GT_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
clojure.data.zip.xml.xml__GT_.cljs$lang$applyTo = (function (seq20131){
var G__20132 = cljs.core.first.call(null,seq20131);
var seq20131__$1 = cljs.core.next.call(null,seq20131);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20132,seq20131__$1);
});

/**
 * Returns the first item from loc based on the query predicates
 *   given.  See xml->
 */
clojure.data.zip.xml.xml1__GT_ = (function clojure$data$zip$xml$xml1__GT_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___20138 = arguments.length;
var i__4731__auto___20139 = (0);
while(true){
if((i__4731__auto___20139 < len__4730__auto___20138)){
args__4736__auto__.push((arguments[i__4731__auto___20139]));

var G__20140 = (i__4731__auto___20139 + (1));
i__4731__auto___20139 = G__20140;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return clojure.data.zip.xml.xml1__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

clojure.data.zip.xml.xml1__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (loc,preds){
return cljs.core.first.call(null,cljs.core.apply.call(null,clojure.data.zip.xml.xml__GT_,loc,preds));
});

clojure.data.zip.xml.xml1__GT_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
clojure.data.zip.xml.xml1__GT_.cljs$lang$applyTo = (function (seq20136){
var G__20137 = cljs.core.first.call(null,seq20136);
var seq20136__$1 = cljs.core.next.call(null,seq20136);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20137,seq20136__$1);
});


//# sourceMappingURL=xml.js.map
