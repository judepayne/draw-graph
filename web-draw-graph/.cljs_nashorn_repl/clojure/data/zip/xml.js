// Compiled by ClojureScript 1.10.439 {:target :nashorn}
goog.provide('clojure.data.zip.xml');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.data.zip');
goog.require('clojure.zip');
/**
 * Returns the xml attribute named attrname, of the xml node at location loc.
 */
clojure.data.zip.xml.attr = (function clojure$data$zip$xml$attr(var_args){
var G__30268 = arguments.length;
switch (G__30268) {
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
var or__4047__auto__ = cljs.core._EQ_.call(null,tagname,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(clojure.zip.node.call(null,loc)));
if(or__4047__auto__){
return or__4047__auto__;
} else {
return cljs.core.filter.call(null,((function (or__4047__auto__){
return (function (p1__30270_SHARP_){
var and__4036__auto__ = clojure.zip.branch_QMARK_.call(null,p1__30270_SHARP_);
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core._EQ_.call(null,tagname,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(clojure.zip.node.call(null,p1__30270_SHARP_)));
} else {
return and__4036__auto__;
}
});})(or__4047__auto__))
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
var and__4036__auto__ = cljs.core.seq.call(null,cljs.core.apply.call(null,clojure.data.zip.xml.xml__GT_,loc,preds));
if(and__4036__auto__){
return (new cljs.core.List(null,loc,null,(1),null));
} else {
return and__4036__auto__;
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
var args__4647__auto__ = [];
var len__4641__auto___30274 = arguments.length;
var i__4642__auto___30275 = (0);
while(true){
if((i__4642__auto___30275 < len__4641__auto___30274)){
args__4647__auto__.push((arguments[i__4642__auto___30275]));

var G__30276 = (i__4642__auto___30275 + (1));
i__4642__auto___30275 = G__30276;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return clojure.data.zip.xml.xml__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

clojure.data.zip.xml.xml__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (loc,preds){
return clojure.data.zip.mapcat_chain.call(null,loc,preds,(function (p1__30271_SHARP_){
if((p1__30271_SHARP_ instanceof cljs.core.Keyword)){
return clojure.data.zip.xml.tag_EQ_.call(null,p1__30271_SHARP_);
} else {
if(typeof p1__30271_SHARP_ === 'string'){
return clojure.data.zip.xml.text_EQ_.call(null,p1__30271_SHARP_);
} else {
if(cljs.core.vector_QMARK_.call(null,p1__30271_SHARP_)){
return clojure.data.zip.xml.seq_test.call(null,p1__30271_SHARP_);
} else {
return null;
}
}
}
}));
});

clojure.data.zip.xml.xml__GT_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
clojure.data.zip.xml.xml__GT_.cljs$lang$applyTo = (function (seq30272){
var G__30273 = cljs.core.first.call(null,seq30272);
var seq30272__$1 = cljs.core.next.call(null,seq30272);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30273,seq30272__$1);
});

/**
 * Returns the first item from loc based on the query predicates
 *   given.  See xml->
 */
clojure.data.zip.xml.xml1__GT_ = (function clojure$data$zip$xml$xml1__GT_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___30279 = arguments.length;
var i__4642__auto___30280 = (0);
while(true){
if((i__4642__auto___30280 < len__4641__auto___30279)){
args__4647__auto__.push((arguments[i__4642__auto___30280]));

var G__30281 = (i__4642__auto___30280 + (1));
i__4642__auto___30280 = G__30281;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return clojure.data.zip.xml.xml1__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

clojure.data.zip.xml.xml1__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (loc,preds){
return cljs.core.first.call(null,cljs.core.apply.call(null,clojure.data.zip.xml.xml__GT_,loc,preds));
});

clojure.data.zip.xml.xml1__GT_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
clojure.data.zip.xml.xml1__GT_.cljs$lang$applyTo = (function (seq30277){
var G__30278 = cljs.core.first.call(null,seq30277);
var seq30277__$1 = cljs.core.next.call(null,seq30277);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30278,seq30277__$1);
});


//# sourceMappingURL=xml.js.map
