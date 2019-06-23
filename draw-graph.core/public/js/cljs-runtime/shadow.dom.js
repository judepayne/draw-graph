goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__33196 = coll;
var G__33197 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__33196,G__33197) : shadow.dom.lazy_native_coll_seq.call(null,G__33196,G__33197));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4131__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return not_found;
}
});

shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
});

shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
});

shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
});

shadow.dom.NativeColl.cljs$lang$type = true;

shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl";

shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"shadow.dom/NativeColl");
});

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__33230 = arguments.length;
switch (G__33230) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
});

shadow.dom.query_one.cljs$lang$maxFixedArity = 2;

shadow.dom.query = (function shadow$dom$query(var_args){
var G__33235 = arguments.length;
switch (G__33235) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
});

shadow.dom.query.cljs$lang$maxFixedArity = 2;

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__33243 = arguments.length;
switch (G__33243) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
});

shadow.dom.by_id.cljs$lang$maxFixedArity = 2;

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__33247 = arguments.length;
switch (G__33247) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
e.cancelBubble = true;

e.returnValue = false;
}

return e;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4;

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__33262 = arguments.length;
switch (G__33262) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__33265 = document;
var G__33266 = shadow.dom.dom_node(el);
return goog.dom.contains(G__33265,G__33266);
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__33267 = shadow.dom.dom_node(parent);
var G__33268 = shadow.dom.dom_node(el);
return goog.dom.contains(G__33267,G__33268);
});

shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2;

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__33270 = shadow.dom.dom_node(el);
var G__33271 = cls;
return goog.dom.classlist.add(G__33270,G__33271);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__33272 = shadow.dom.dom_node(el);
var G__33273 = cls;
return goog.dom.classlist.remove(G__33272,G__33273);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__33275 = arguments.length;
switch (G__33275) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__33276 = shadow.dom.dom_node(el);
var G__33277 = cls;
return goog.dom.classlist.toggle(G__33276,G__33277);
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
});

shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3;

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4131__auto__ = (!((typeof document !== 'undefined')));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e33278){if((e33278 instanceof Object)){
var e = e33278;
return console.log("didnt support attachEvent",el,e);
} else {
throw e33278;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4131__auto__ = (!((typeof document !== 'undefined')));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__33284 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__33285 = null;
var count__33286 = (0);
var i__33287 = (0);
while(true){
if((i__33287 < count__33286)){
var el = chunk__33285.cljs$core$IIndexed$_nth$arity$2(null,i__33287);
var handler_33912__$1 = ((function (seq__33284,chunk__33285,count__33286,i__33287,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33284,chunk__33285,count__33286,i__33287,el))
;
var G__33296_33913 = el;
var G__33297_33914 = cljs.core.name(ev);
var G__33298_33915 = handler_33912__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__33296_33913,G__33297_33914,G__33298_33915) : shadow.dom.dom_listen.call(null,G__33296_33913,G__33297_33914,G__33298_33915));


var G__33917 = seq__33284;
var G__33918 = chunk__33285;
var G__33919 = count__33286;
var G__33920 = (i__33287 + (1));
seq__33284 = G__33917;
chunk__33285 = G__33918;
count__33286 = G__33919;
i__33287 = G__33920;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__33284);
if(temp__5720__auto__){
var seq__33284__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33284__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__33284__$1);
var G__33922 = cljs.core.chunk_rest(seq__33284__$1);
var G__33923 = c__4550__auto__;
var G__33924 = cljs.core.count(c__4550__auto__);
var G__33925 = (0);
seq__33284 = G__33922;
chunk__33285 = G__33923;
count__33286 = G__33924;
i__33287 = G__33925;
continue;
} else {
var el = cljs.core.first(seq__33284__$1);
var handler_33926__$1 = ((function (seq__33284,chunk__33285,count__33286,i__33287,el,seq__33284__$1,temp__5720__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33284,chunk__33285,count__33286,i__33287,el,seq__33284__$1,temp__5720__auto__))
;
var G__33302_33927 = el;
var G__33303_33928 = cljs.core.name(ev);
var G__33304_33929 = handler_33926__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__33302_33927,G__33303_33928,G__33304_33929) : shadow.dom.dom_listen.call(null,G__33302_33927,G__33303_33928,G__33304_33929));


var G__33931 = cljs.core.next(seq__33284__$1);
var G__33932 = null;
var G__33933 = (0);
var G__33934 = (0);
seq__33284 = G__33931;
chunk__33285 = G__33932;
count__33286 = G__33933;
i__33287 = G__33934;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__33308 = arguments.length;
switch (G__33308) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__33311 = shadow.dom.dom_node(el);
var G__33312 = cljs.core.name(ev);
var G__33313 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__33311,G__33312,G__33313) : shadow.dom.dom_listen.call(null,G__33311,G__33312,G__33313));
}
});

shadow.dom.on.cljs$lang$maxFixedArity = 4;

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__33316 = shadow.dom.dom_node(el);
var G__33317 = cljs.core.name(ev);
var G__33318 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__33316,G__33317,G__33318) : shadow.dom.dom_listen_remove.call(null,G__33316,G__33317,G__33318));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__33320 = cljs.core.seq(events);
var chunk__33321 = null;
var count__33322 = (0);
var i__33323 = (0);
while(true){
if((i__33323 < count__33322)){
var vec__33336 = chunk__33321.cljs$core$IIndexed$_nth$arity$2(null,i__33323);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33336,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33336,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33939 = seq__33320;
var G__33940 = chunk__33321;
var G__33941 = count__33322;
var G__33942 = (i__33323 + (1));
seq__33320 = G__33939;
chunk__33321 = G__33940;
count__33322 = G__33941;
i__33323 = G__33942;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__33320);
if(temp__5720__auto__){
var seq__33320__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33320__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__33320__$1);
var G__33943 = cljs.core.chunk_rest(seq__33320__$1);
var G__33944 = c__4550__auto__;
var G__33945 = cljs.core.count(c__4550__auto__);
var G__33946 = (0);
seq__33320 = G__33943;
chunk__33321 = G__33944;
count__33322 = G__33945;
i__33323 = G__33946;
continue;
} else {
var vec__33342 = cljs.core.first(seq__33320__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33342,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33342,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33947 = cljs.core.next(seq__33320__$1);
var G__33948 = null;
var G__33949 = (0);
var G__33950 = (0);
seq__33320 = G__33947;
chunk__33321 = G__33948;
count__33322 = G__33949;
i__33323 = G__33950;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__33346 = cljs.core.seq(styles);
var chunk__33347 = null;
var count__33348 = (0);
var i__33349 = (0);
while(true){
if((i__33349 < count__33348)){
var vec__33365 = chunk__33347.cljs$core$IIndexed$_nth$arity$2(null,i__33349);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33365,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33365,(1),null);
var G__33368_33952 = dom;
var G__33369_33953 = cljs.core.name(k);
var G__33370_33954 = (((v == null))?"":v);
goog.style.setStyle(G__33368_33952,G__33369_33953,G__33370_33954);


var G__33957 = seq__33346;
var G__33958 = chunk__33347;
var G__33959 = count__33348;
var G__33960 = (i__33349 + (1));
seq__33346 = G__33957;
chunk__33347 = G__33958;
count__33348 = G__33959;
i__33349 = G__33960;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__33346);
if(temp__5720__auto__){
var seq__33346__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33346__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__33346__$1);
var G__33961 = cljs.core.chunk_rest(seq__33346__$1);
var G__33962 = c__4550__auto__;
var G__33963 = cljs.core.count(c__4550__auto__);
var G__33964 = (0);
seq__33346 = G__33961;
chunk__33347 = G__33962;
count__33348 = G__33963;
i__33349 = G__33964;
continue;
} else {
var vec__33372 = cljs.core.first(seq__33346__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33372,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33372,(1),null);
var G__33375_33967 = dom;
var G__33376_33968 = cljs.core.name(k);
var G__33377_33969 = (((v == null))?"":v);
goog.style.setStyle(G__33375_33967,G__33376_33968,G__33377_33969);


var G__33971 = cljs.core.next(seq__33346__$1);
var G__33972 = null;
var G__33973 = (0);
var G__33974 = (0);
seq__33346 = G__33971;
chunk__33347 = G__33972;
count__33348 = G__33973;
i__33349 = G__33974;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__33379_33976 = key;
var G__33379_33977__$1 = (((G__33379_33976 instanceof cljs.core.Keyword))?G__33379_33976.fqn:null);
switch (G__33379_33977__$1) {
case "id":
el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "class":
el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "for":
el.htmlFor = value;

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_33990 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4131__auto__ = goog.string.startsWith(ks_33990,"data-");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.string.startsWith(ks_33990,"aria-");
}
})())){
el.setAttribute(ks_33990,value);
} else {
(el[ks_33990] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__33390 = shadow.dom.dom_node(el);
var G__33391 = cls;
return goog.dom.classlist.contains(G__33390,G__33391);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__33399){
var map__33400 = p__33399;
var map__33400__$1 = (((((!((map__33400 == null))))?(((((map__33400.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33400.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33400):map__33400);
var props = map__33400__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33400__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__33404 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33404,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33404,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33404,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__33409 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__33409,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__33409;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__33413 = arguments.length;
switch (G__33413) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5720__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5720__auto__)){
var n = temp__5720__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5720__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5720__auto__)){
var n = temp__5720__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$lang$maxFixedArity = 2;

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__33420){
var vec__33421 = p__33420;
var seq__33422 = cljs.core.seq(vec__33421);
var first__33423 = cljs.core.first(seq__33422);
var seq__33422__$1 = cljs.core.next(seq__33422);
var nn = first__33423;
var first__33423__$1 = cljs.core.first(seq__33422__$1);
var seq__33422__$2 = cljs.core.next(seq__33422__$1);
var np = first__33423__$1;
var nc = seq__33422__$2;
var node = vec__33421;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33424 = nn;
var G__33425 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33424,G__33425) : create_fn.call(null,G__33424,G__33425));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33426 = nn;
var G__33427 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33426,G__33427) : create_fn.call(null,G__33426,G__33427));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__33430 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33430,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33430,(1),null);
var seq__33433_34006 = cljs.core.seq(node_children);
var chunk__33434_34007 = null;
var count__33435_34008 = (0);
var i__33436_34009 = (0);
while(true){
if((i__33436_34009 < count__33435_34008)){
var child_struct_34014 = chunk__33434_34007.cljs$core$IIndexed$_nth$arity$2(null,i__33436_34009);
var children_34015 = shadow.dom.dom_node(child_struct_34014);
if(cljs.core.seq_QMARK_(children_34015)){
var seq__33466_34016 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34015));
var chunk__33468_34017 = null;
var count__33469_34018 = (0);
var i__33470_34019 = (0);
while(true){
if((i__33470_34019 < count__33469_34018)){
var child_34021 = chunk__33468_34017.cljs$core$IIndexed$_nth$arity$2(null,i__33470_34019);
if(cljs.core.truth_(child_34021)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34021);


var G__34022 = seq__33466_34016;
var G__34023 = chunk__33468_34017;
var G__34024 = count__33469_34018;
var G__34025 = (i__33470_34019 + (1));
seq__33466_34016 = G__34022;
chunk__33468_34017 = G__34023;
count__33469_34018 = G__34024;
i__33470_34019 = G__34025;
continue;
} else {
var G__34026 = seq__33466_34016;
var G__34027 = chunk__33468_34017;
var G__34028 = count__33469_34018;
var G__34029 = (i__33470_34019 + (1));
seq__33466_34016 = G__34026;
chunk__33468_34017 = G__34027;
count__33469_34018 = G__34028;
i__33470_34019 = G__34029;
continue;
}
} else {
var temp__5720__auto___34030 = cljs.core.seq(seq__33466_34016);
if(temp__5720__auto___34030){
var seq__33466_34032__$1 = temp__5720__auto___34030;
if(cljs.core.chunked_seq_QMARK_(seq__33466_34032__$1)){
var c__4550__auto___34033 = cljs.core.chunk_first(seq__33466_34032__$1);
var G__34034 = cljs.core.chunk_rest(seq__33466_34032__$1);
var G__34035 = c__4550__auto___34033;
var G__34036 = cljs.core.count(c__4550__auto___34033);
var G__34037 = (0);
seq__33466_34016 = G__34034;
chunk__33468_34017 = G__34035;
count__33469_34018 = G__34036;
i__33470_34019 = G__34037;
continue;
} else {
var child_34039 = cljs.core.first(seq__33466_34032__$1);
if(cljs.core.truth_(child_34039)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34039);


var G__34043 = cljs.core.next(seq__33466_34032__$1);
var G__34044 = null;
var G__34045 = (0);
var G__34046 = (0);
seq__33466_34016 = G__34043;
chunk__33468_34017 = G__34044;
count__33469_34018 = G__34045;
i__33470_34019 = G__34046;
continue;
} else {
var G__34047 = cljs.core.next(seq__33466_34032__$1);
var G__34048 = null;
var G__34049 = (0);
var G__34050 = (0);
seq__33466_34016 = G__34047;
chunk__33468_34017 = G__34048;
count__33469_34018 = G__34049;
i__33470_34019 = G__34050;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34015);
}


var G__34053 = seq__33433_34006;
var G__34054 = chunk__33434_34007;
var G__34055 = count__33435_34008;
var G__34056 = (i__33436_34009 + (1));
seq__33433_34006 = G__34053;
chunk__33434_34007 = G__34054;
count__33435_34008 = G__34055;
i__33436_34009 = G__34056;
continue;
} else {
var temp__5720__auto___34058 = cljs.core.seq(seq__33433_34006);
if(temp__5720__auto___34058){
var seq__33433_34059__$1 = temp__5720__auto___34058;
if(cljs.core.chunked_seq_QMARK_(seq__33433_34059__$1)){
var c__4550__auto___34060 = cljs.core.chunk_first(seq__33433_34059__$1);
var G__34062 = cljs.core.chunk_rest(seq__33433_34059__$1);
var G__34063 = c__4550__auto___34060;
var G__34064 = cljs.core.count(c__4550__auto___34060);
var G__34065 = (0);
seq__33433_34006 = G__34062;
chunk__33434_34007 = G__34063;
count__33435_34008 = G__34064;
i__33436_34009 = G__34065;
continue;
} else {
var child_struct_34066 = cljs.core.first(seq__33433_34059__$1);
var children_34067 = shadow.dom.dom_node(child_struct_34066);
if(cljs.core.seq_QMARK_(children_34067)){
var seq__33472_34068 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34067));
var chunk__33474_34069 = null;
var count__33475_34070 = (0);
var i__33476_34071 = (0);
while(true){
if((i__33476_34071 < count__33475_34070)){
var child_34072 = chunk__33474_34069.cljs$core$IIndexed$_nth$arity$2(null,i__33476_34071);
if(cljs.core.truth_(child_34072)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34072);


var G__34073 = seq__33472_34068;
var G__34074 = chunk__33474_34069;
var G__34075 = count__33475_34070;
var G__34076 = (i__33476_34071 + (1));
seq__33472_34068 = G__34073;
chunk__33474_34069 = G__34074;
count__33475_34070 = G__34075;
i__33476_34071 = G__34076;
continue;
} else {
var G__34077 = seq__33472_34068;
var G__34078 = chunk__33474_34069;
var G__34079 = count__33475_34070;
var G__34080 = (i__33476_34071 + (1));
seq__33472_34068 = G__34077;
chunk__33474_34069 = G__34078;
count__33475_34070 = G__34079;
i__33476_34071 = G__34080;
continue;
}
} else {
var temp__5720__auto___34082__$1 = cljs.core.seq(seq__33472_34068);
if(temp__5720__auto___34082__$1){
var seq__33472_34084__$1 = temp__5720__auto___34082__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33472_34084__$1)){
var c__4550__auto___34085 = cljs.core.chunk_first(seq__33472_34084__$1);
var G__34086 = cljs.core.chunk_rest(seq__33472_34084__$1);
var G__34087 = c__4550__auto___34085;
var G__34088 = cljs.core.count(c__4550__auto___34085);
var G__34089 = (0);
seq__33472_34068 = G__34086;
chunk__33474_34069 = G__34087;
count__33475_34070 = G__34088;
i__33476_34071 = G__34089;
continue;
} else {
var child_34093 = cljs.core.first(seq__33472_34084__$1);
if(cljs.core.truth_(child_34093)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34093);


var G__34094 = cljs.core.next(seq__33472_34084__$1);
var G__34095 = null;
var G__34096 = (0);
var G__34097 = (0);
seq__33472_34068 = G__34094;
chunk__33474_34069 = G__34095;
count__33475_34070 = G__34096;
i__33476_34071 = G__34097;
continue;
} else {
var G__34098 = cljs.core.next(seq__33472_34084__$1);
var G__34099 = null;
var G__34100 = (0);
var G__34101 = (0);
seq__33472_34068 = G__34098;
chunk__33474_34069 = G__34099;
count__33475_34070 = G__34100;
i__33476_34071 = G__34101;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34067);
}


var G__34103 = cljs.core.next(seq__33433_34059__$1);
var G__34104 = null;
var G__34105 = (0);
var G__34106 = (0);
seq__33433_34006 = G__34103;
chunk__33434_34007 = G__34104;
count__33435_34008 = G__34105;
i__33436_34009 = G__34106;
continue;
}
} else {
}
}
break;
}

return node;
});
cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
});

cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
});
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__33480 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__33480);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__33485 = cljs.core.seq(node);
var chunk__33487 = null;
var count__33488 = (0);
var i__33489 = (0);
while(true){
if((i__33489 < count__33488)){
var n = chunk__33487.cljs$core$IIndexed$_nth$arity$2(null,i__33489);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34114 = seq__33485;
var G__34115 = chunk__33487;
var G__34116 = count__33488;
var G__34117 = (i__33489 + (1));
seq__33485 = G__34114;
chunk__33487 = G__34115;
count__33488 = G__34116;
i__33489 = G__34117;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__33485);
if(temp__5720__auto__){
var seq__33485__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33485__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__33485__$1);
var G__34120 = cljs.core.chunk_rest(seq__33485__$1);
var G__34121 = c__4550__auto__;
var G__34122 = cljs.core.count(c__4550__auto__);
var G__34123 = (0);
seq__33485 = G__34120;
chunk__33487 = G__34121;
count__33488 = G__34122;
i__33489 = G__34123;
continue;
} else {
var n = cljs.core.first(seq__33485__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34126 = cljs.core.next(seq__33485__$1);
var G__34127 = null;
var G__34128 = (0);
var G__34129 = (0);
seq__33485 = G__34126;
chunk__33487 = G__34127;
count__33488 = G__34128;
i__33489 = G__34129;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__33496 = shadow.dom.dom_node(new$);
var G__33497 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__33496,G__33497);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__33499 = arguments.length;
switch (G__33499) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return shadow.dom.dom_node(el).innerText = new_text;
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
});

shadow.dom.text.cljs$lang$maxFixedArity = 2;

shadow.dom.check = (function shadow$dom$check(var_args){
var G__33505 = arguments.length;
switch (G__33505) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return shadow.dom.dom_node(el).checked = checked;
});

shadow.dom.check.cljs$lang$maxFixedArity = 2;

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__33521 = arguments.length;
switch (G__33521) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4131__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return default$;
}
});

shadow.dom.attr.cljs$lang$maxFixedArity = 3;

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return shadow.dom.dom_node(node).innerHTML = text;
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4736__auto__ = [];
var len__4730__auto___34154 = arguments.length;
var i__4731__auto___34155 = (0);
while(true){
if((i__4731__auto___34155 < len__4730__auto___34154)){
args__4736__auto__.push((arguments[i__4731__auto___34155]));

var G__34159 = (i__4731__auto___34155 + (1));
i__4731__auto___34155 = G__34159;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__33562_34160 = cljs.core.seq(nodes);
var chunk__33563_34161 = null;
var count__33564_34162 = (0);
var i__33565_34163 = (0);
while(true){
if((i__33565_34163 < count__33564_34162)){
var node_34164 = chunk__33563_34161.cljs$core$IIndexed$_nth$arity$2(null,i__33565_34163);
fragment.appendChild(shadow.dom._to_dom(node_34164));


var G__34166 = seq__33562_34160;
var G__34167 = chunk__33563_34161;
var G__34168 = count__33564_34162;
var G__34169 = (i__33565_34163 + (1));
seq__33562_34160 = G__34166;
chunk__33563_34161 = G__34167;
count__33564_34162 = G__34168;
i__33565_34163 = G__34169;
continue;
} else {
var temp__5720__auto___34170 = cljs.core.seq(seq__33562_34160);
if(temp__5720__auto___34170){
var seq__33562_34171__$1 = temp__5720__auto___34170;
if(cljs.core.chunked_seq_QMARK_(seq__33562_34171__$1)){
var c__4550__auto___34172 = cljs.core.chunk_first(seq__33562_34171__$1);
var G__34177 = cljs.core.chunk_rest(seq__33562_34171__$1);
var G__34178 = c__4550__auto___34172;
var G__34179 = cljs.core.count(c__4550__auto___34172);
var G__34180 = (0);
seq__33562_34160 = G__34177;
chunk__33563_34161 = G__34178;
count__33564_34162 = G__34179;
i__33565_34163 = G__34180;
continue;
} else {
var node_34181 = cljs.core.first(seq__33562_34171__$1);
fragment.appendChild(shadow.dom._to_dom(node_34181));


var G__34182 = cljs.core.next(seq__33562_34171__$1);
var G__34183 = null;
var G__34184 = (0);
var G__34185 = (0);
seq__33562_34160 = G__34182;
chunk__33563_34161 = G__34183;
count__33564_34162 = G__34184;
i__33565_34163 = G__34185;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
});

shadow.dom.fragment.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
shadow.dom.fragment.cljs$lang$applyTo = (function (seq33546){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33546));
});

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__33583_34188 = cljs.core.seq(scripts);
var chunk__33584_34189 = null;
var count__33585_34190 = (0);
var i__33586_34191 = (0);
while(true){
if((i__33586_34191 < count__33585_34190)){
var vec__33599_34192 = chunk__33584_34189.cljs$core$IIndexed$_nth$arity$2(null,i__33586_34191);
var script_tag_34193 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33599_34192,(0),null);
var script_body_34194 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33599_34192,(1),null);
eval(script_body_34194);


var G__34195 = seq__33583_34188;
var G__34196 = chunk__33584_34189;
var G__34197 = count__33585_34190;
var G__34198 = (i__33586_34191 + (1));
seq__33583_34188 = G__34195;
chunk__33584_34189 = G__34196;
count__33585_34190 = G__34197;
i__33586_34191 = G__34198;
continue;
} else {
var temp__5720__auto___34202 = cljs.core.seq(seq__33583_34188);
if(temp__5720__auto___34202){
var seq__33583_34203__$1 = temp__5720__auto___34202;
if(cljs.core.chunked_seq_QMARK_(seq__33583_34203__$1)){
var c__4550__auto___34204 = cljs.core.chunk_first(seq__33583_34203__$1);
var G__34205 = cljs.core.chunk_rest(seq__33583_34203__$1);
var G__34206 = c__4550__auto___34204;
var G__34207 = cljs.core.count(c__4550__auto___34204);
var G__34208 = (0);
seq__33583_34188 = G__34205;
chunk__33584_34189 = G__34206;
count__33585_34190 = G__34207;
i__33586_34191 = G__34208;
continue;
} else {
var vec__33606_34209 = cljs.core.first(seq__33583_34203__$1);
var script_tag_34210 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33606_34209,(0),null);
var script_body_34211 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33606_34209,(1),null);
eval(script_body_34211);


var G__34212 = cljs.core.next(seq__33583_34203__$1);
var G__34213 = null;
var G__34214 = (0);
var G__34215 = (0);
seq__33583_34188 = G__34212;
chunk__33584_34189 = G__34213;
count__33585_34190 = G__34214;
i__33586_34191 = G__34215;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (scripts){
return (function (s__$1,p__33609){
var vec__33610 = p__33609;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33610,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33610,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
});})(scripts))
,s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
el.innerHTML = s;

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__33617 = shadow.dom.dom_node(el);
var G__33618 = cls;
return goog.dom.getAncestorByClass(G__33617,G__33618);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__33620 = arguments.length;
switch (G__33620) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__33621 = shadow.dom.dom_node(el);
var G__33622 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__33621,G__33622);
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__33623 = shadow.dom.dom_node(el);
var G__33624 = cljs.core.name(tag);
var G__33625 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__33623,G__33624,G__33625);
});

shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3;

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__33626 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__33626);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__33627 = shadow.dom.dom_node(dom);
var G__33628 = value;
return goog.dom.forms.setValue(G__33627,G__33628);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__33635 = cljs.core.seq(style_keys);
var chunk__33636 = null;
var count__33637 = (0);
var i__33638 = (0);
while(true){
if((i__33638 < count__33637)){
var it = chunk__33636.cljs$core$IIndexed$_nth$arity$2(null,i__33638);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34235 = seq__33635;
var G__34236 = chunk__33636;
var G__34237 = count__33637;
var G__34238 = (i__33638 + (1));
seq__33635 = G__34235;
chunk__33636 = G__34236;
count__33637 = G__34237;
i__33638 = G__34238;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__33635);
if(temp__5720__auto__){
var seq__33635__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33635__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__33635__$1);
var G__34240 = cljs.core.chunk_rest(seq__33635__$1);
var G__34241 = c__4550__auto__;
var G__34242 = cljs.core.count(c__4550__auto__);
var G__34243 = (0);
seq__33635 = G__34240;
chunk__33636 = G__34241;
count__33637 = G__34242;
i__33638 = G__34243;
continue;
} else {
var it = cljs.core.first(seq__33635__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34244 = cljs.core.next(seq__33635__$1);
var G__34245 = null;
var G__34246 = (0);
var G__34247 = (0);
seq__33635 = G__34244;
chunk__33636 = G__34245;
count__33637 = G__34246;
i__33638 = G__34247;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k33640,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__33644 = k33640;
var G__33644__$1 = (((G__33644 instanceof cljs.core.Keyword))?G__33644.fqn:null);
switch (G__33644__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33640,else__4388__auto__);

}
});

shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__33645){
var vec__33646 = p__33645;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33646,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33646,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33639){
var self__ = this;
var G__33639__$1 = this;
return (new cljs.core.RecordIter((0),G__33639__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__33650 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__33650(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33641,other33642){
var self__ = this;
var this33641__$1 = this;
return (((!((other33642 == null)))) && ((this33641__$1.constructor === other33642.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33641__$1.x,other33642.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33641__$1.y,other33642.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33641__$1.__extmap,other33642.__extmap)));
});

shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__33639){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__33658 = cljs.core.keyword_identical_QMARK_;
var expr__33659 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__33661 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__33662 = expr__33659;
return (pred__33658.cljs$core$IFn$_invoke$arity$2 ? pred__33658.cljs$core$IFn$_invoke$arity$2(G__33661,G__33662) : pred__33658.call(null,G__33661,G__33662));
})())){
return (new shadow.dom.Coordinate(G__33639,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__33663 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__33664 = expr__33659;
return (pred__33658.cljs$core$IFn$_invoke$arity$2 ? pred__33658.cljs$core$IFn$_invoke$arity$2(G__33663,G__33664) : pred__33658.call(null,G__33663,G__33664));
})())){
return (new shadow.dom.Coordinate(self__.x,G__33639,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__33639),null));
}
}
});

shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__33639){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__33639,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
});

shadow.dom.Coordinate.cljs$lang$type = true;

shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
});

shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/Coordinate");
});

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__33643){
var extmap__4424__auto__ = (function (){var G__33671 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33643,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__33643)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33671);
} else {
return G__33671;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__33643),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__33643),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__33673 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__33673);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__33676 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__33676);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__33679 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__33679);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k33682,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__33693 = k33682;
var G__33693__$1 = (((G__33693 instanceof cljs.core.Keyword))?G__33693.fqn:null);
switch (G__33693__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33682,else__4388__auto__);

}
});

shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__33696){
var vec__33697 = p__33696;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33697,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33697,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.dom.Size{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33681){
var self__ = this;
var G__33681__$1 = this;
return (new cljs.core.RecordIter((0),G__33681__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__33713 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__33713(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33683,other33684){
var self__ = this;
var this33683__$1 = this;
return (((!((other33684 == null)))) && ((this33683__$1.constructor === other33684.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33683__$1.w,other33684.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33683__$1.h,other33684.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33683__$1.__extmap,other33684.__extmap)));
});

shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__33681){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__33719 = cljs.core.keyword_identical_QMARK_;
var expr__33720 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__33722 = new cljs.core.Keyword(null,"w","w",354169001);
var G__33723 = expr__33720;
return (pred__33719.cljs$core$IFn$_invoke$arity$2 ? pred__33719.cljs$core$IFn$_invoke$arity$2(G__33722,G__33723) : pred__33719.call(null,G__33722,G__33723));
})())){
return (new shadow.dom.Size(G__33681,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__33724 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__33725 = expr__33720;
return (pred__33719.cljs$core$IFn$_invoke$arity$2 ? pred__33719.cljs$core$IFn$_invoke$arity$2(G__33724,G__33725) : pred__33719.call(null,G__33724,G__33725));
})())){
return (new shadow.dom.Size(self__.w,G__33681,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__33681),null));
}
}
});

shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__33681){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__33681,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
});

shadow.dom.Size.cljs$lang$type = true;

shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
});

shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/Size");
});

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__33686){
var extmap__4424__auto__ = (function (){var G__33728 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33686,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__33686)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33728);
} else {
return G__33728;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__33686),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__33686),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__33730 = shadow.dom.dom_node(el);
return goog.style.getSize(G__33730);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(shadow.dom.get_size(el));
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4604__auto__ = opts;
var l__4605__auto__ = a__4604__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4605__auto__)){
var G__34307 = (i + (1));
var G__34308 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__34307;
ret = G__34308;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33736){
var vec__33737 = p__33736;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33737,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33737,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params)))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__33741 = arguments.length;
switch (G__33741) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
});

shadow.dom.redirect.cljs$lang$maxFixedArity = 2;

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return document.location.href = document.location.href;
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__33745_34316 = new_node;
var G__33746_34317 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__33745_34316,G__33746_34317);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__33749_34318 = new_node;
var G__33750_34319 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__33749_34318,G__33750_34319);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5718__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5718__auto__)){
var child = temp__5718__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__34322 = ps;
var G__34323 = (i + (1));
el__$1 = G__34322;
i = G__34323;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__33759 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__33759);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,((function (parent){
return (function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
});})(parent))
,null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__33764 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__33764);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__33766 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__33766);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__33767 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33767,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33767,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33767,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__33771_34328 = cljs.core.seq(props);
var chunk__33772_34329 = null;
var count__33773_34330 = (0);
var i__33774_34331 = (0);
while(true){
if((i__33774_34331 < count__33773_34330)){
var vec__33786_34332 = chunk__33772_34329.cljs$core$IIndexed$_nth$arity$2(null,i__33774_34331);
var k_34333 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33786_34332,(0),null);
var v_34334 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33786_34332,(1),null);
el.setAttributeNS((function (){var temp__5720__auto__ = cljs.core.namespace(k_34333);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34333),v_34334);


var G__34339 = seq__33771_34328;
var G__34340 = chunk__33772_34329;
var G__34341 = count__33773_34330;
var G__34342 = (i__33774_34331 + (1));
seq__33771_34328 = G__34339;
chunk__33772_34329 = G__34340;
count__33773_34330 = G__34341;
i__33774_34331 = G__34342;
continue;
} else {
var temp__5720__auto___34343 = cljs.core.seq(seq__33771_34328);
if(temp__5720__auto___34343){
var seq__33771_34344__$1 = temp__5720__auto___34343;
if(cljs.core.chunked_seq_QMARK_(seq__33771_34344__$1)){
var c__4550__auto___34345 = cljs.core.chunk_first(seq__33771_34344__$1);
var G__34346 = cljs.core.chunk_rest(seq__33771_34344__$1);
var G__34347 = c__4550__auto___34345;
var G__34348 = cljs.core.count(c__4550__auto___34345);
var G__34349 = (0);
seq__33771_34328 = G__34346;
chunk__33772_34329 = G__34347;
count__33773_34330 = G__34348;
i__33774_34331 = G__34349;
continue;
} else {
var vec__33790_34350 = cljs.core.first(seq__33771_34344__$1);
var k_34351 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33790_34350,(0),null);
var v_34352 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33790_34350,(1),null);
el.setAttributeNS((function (){var temp__5720__auto____$1 = cljs.core.namespace(k_34351);
if(cljs.core.truth_(temp__5720__auto____$1)){
var ns = temp__5720__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34351),v_34352);


var G__34353 = cljs.core.next(seq__33771_34344__$1);
var G__34354 = null;
var G__34355 = (0);
var G__34356 = (0);
seq__33771_34328 = G__34353;
chunk__33772_34329 = G__34354;
count__33773_34330 = G__34355;
i__33774_34331 = G__34356;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__33798 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33798,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33798,(1),null);
var seq__33801_34357 = cljs.core.seq(node_children);
var chunk__33803_34358 = null;
var count__33804_34359 = (0);
var i__33805_34360 = (0);
while(true){
if((i__33805_34360 < count__33804_34359)){
var child_struct_34361 = chunk__33803_34358.cljs$core$IIndexed$_nth$arity$2(null,i__33805_34360);
if((!((child_struct_34361 == null)))){
if(typeof child_struct_34361 === 'string'){
var text_34362 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34362),child_struct_34361].join(''));
} else {
var children_34363 = shadow.dom.svg_node(child_struct_34361);
if(cljs.core.seq_QMARK_(children_34363)){
var seq__33830_34364 = cljs.core.seq(children_34363);
var chunk__33832_34365 = null;
var count__33833_34366 = (0);
var i__33834_34367 = (0);
while(true){
if((i__33834_34367 < count__33833_34366)){
var child_34368 = chunk__33832_34365.cljs$core$IIndexed$_nth$arity$2(null,i__33834_34367);
if(cljs.core.truth_(child_34368)){
node.appendChild(child_34368);


var G__34369 = seq__33830_34364;
var G__34370 = chunk__33832_34365;
var G__34371 = count__33833_34366;
var G__34372 = (i__33834_34367 + (1));
seq__33830_34364 = G__34369;
chunk__33832_34365 = G__34370;
count__33833_34366 = G__34371;
i__33834_34367 = G__34372;
continue;
} else {
var G__34373 = seq__33830_34364;
var G__34374 = chunk__33832_34365;
var G__34375 = count__33833_34366;
var G__34376 = (i__33834_34367 + (1));
seq__33830_34364 = G__34373;
chunk__33832_34365 = G__34374;
count__33833_34366 = G__34375;
i__33834_34367 = G__34376;
continue;
}
} else {
var temp__5720__auto___34377 = cljs.core.seq(seq__33830_34364);
if(temp__5720__auto___34377){
var seq__33830_34378__$1 = temp__5720__auto___34377;
if(cljs.core.chunked_seq_QMARK_(seq__33830_34378__$1)){
var c__4550__auto___34379 = cljs.core.chunk_first(seq__33830_34378__$1);
var G__34380 = cljs.core.chunk_rest(seq__33830_34378__$1);
var G__34381 = c__4550__auto___34379;
var G__34382 = cljs.core.count(c__4550__auto___34379);
var G__34383 = (0);
seq__33830_34364 = G__34380;
chunk__33832_34365 = G__34381;
count__33833_34366 = G__34382;
i__33834_34367 = G__34383;
continue;
} else {
var child_34384 = cljs.core.first(seq__33830_34378__$1);
if(cljs.core.truth_(child_34384)){
node.appendChild(child_34384);


var G__34386 = cljs.core.next(seq__33830_34378__$1);
var G__34387 = null;
var G__34388 = (0);
var G__34389 = (0);
seq__33830_34364 = G__34386;
chunk__33832_34365 = G__34387;
count__33833_34366 = G__34388;
i__33834_34367 = G__34389;
continue;
} else {
var G__34391 = cljs.core.next(seq__33830_34378__$1);
var G__34392 = null;
var G__34393 = (0);
var G__34394 = (0);
seq__33830_34364 = G__34391;
chunk__33832_34365 = G__34392;
count__33833_34366 = G__34393;
i__33834_34367 = G__34394;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34363);
}
}


var G__34395 = seq__33801_34357;
var G__34396 = chunk__33803_34358;
var G__34397 = count__33804_34359;
var G__34398 = (i__33805_34360 + (1));
seq__33801_34357 = G__34395;
chunk__33803_34358 = G__34396;
count__33804_34359 = G__34397;
i__33805_34360 = G__34398;
continue;
} else {
var G__34399 = seq__33801_34357;
var G__34400 = chunk__33803_34358;
var G__34401 = count__33804_34359;
var G__34402 = (i__33805_34360 + (1));
seq__33801_34357 = G__34399;
chunk__33803_34358 = G__34400;
count__33804_34359 = G__34401;
i__33805_34360 = G__34402;
continue;
}
} else {
var temp__5720__auto___34403 = cljs.core.seq(seq__33801_34357);
if(temp__5720__auto___34403){
var seq__33801_34404__$1 = temp__5720__auto___34403;
if(cljs.core.chunked_seq_QMARK_(seq__33801_34404__$1)){
var c__4550__auto___34405 = cljs.core.chunk_first(seq__33801_34404__$1);
var G__34406 = cljs.core.chunk_rest(seq__33801_34404__$1);
var G__34407 = c__4550__auto___34405;
var G__34408 = cljs.core.count(c__4550__auto___34405);
var G__34409 = (0);
seq__33801_34357 = G__34406;
chunk__33803_34358 = G__34407;
count__33804_34359 = G__34408;
i__33805_34360 = G__34409;
continue;
} else {
var child_struct_34410 = cljs.core.first(seq__33801_34404__$1);
if((!((child_struct_34410 == null)))){
if(typeof child_struct_34410 === 'string'){
var text_34411 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34411),child_struct_34410].join(''));
} else {
var children_34412 = shadow.dom.svg_node(child_struct_34410);
if(cljs.core.seq_QMARK_(children_34412)){
var seq__33843_34413 = cljs.core.seq(children_34412);
var chunk__33845_34414 = null;
var count__33846_34415 = (0);
var i__33847_34416 = (0);
while(true){
if((i__33847_34416 < count__33846_34415)){
var child_34418 = chunk__33845_34414.cljs$core$IIndexed$_nth$arity$2(null,i__33847_34416);
if(cljs.core.truth_(child_34418)){
node.appendChild(child_34418);


var G__34420 = seq__33843_34413;
var G__34421 = chunk__33845_34414;
var G__34422 = count__33846_34415;
var G__34423 = (i__33847_34416 + (1));
seq__33843_34413 = G__34420;
chunk__33845_34414 = G__34421;
count__33846_34415 = G__34422;
i__33847_34416 = G__34423;
continue;
} else {
var G__34424 = seq__33843_34413;
var G__34425 = chunk__33845_34414;
var G__34426 = count__33846_34415;
var G__34427 = (i__33847_34416 + (1));
seq__33843_34413 = G__34424;
chunk__33845_34414 = G__34425;
count__33846_34415 = G__34426;
i__33847_34416 = G__34427;
continue;
}
} else {
var temp__5720__auto___34428__$1 = cljs.core.seq(seq__33843_34413);
if(temp__5720__auto___34428__$1){
var seq__33843_34429__$1 = temp__5720__auto___34428__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33843_34429__$1)){
var c__4550__auto___34430 = cljs.core.chunk_first(seq__33843_34429__$1);
var G__34431 = cljs.core.chunk_rest(seq__33843_34429__$1);
var G__34432 = c__4550__auto___34430;
var G__34433 = cljs.core.count(c__4550__auto___34430);
var G__34434 = (0);
seq__33843_34413 = G__34431;
chunk__33845_34414 = G__34432;
count__33846_34415 = G__34433;
i__33847_34416 = G__34434;
continue;
} else {
var child_34435 = cljs.core.first(seq__33843_34429__$1);
if(cljs.core.truth_(child_34435)){
node.appendChild(child_34435);


var G__34436 = cljs.core.next(seq__33843_34429__$1);
var G__34437 = null;
var G__34438 = (0);
var G__34439 = (0);
seq__33843_34413 = G__34436;
chunk__33845_34414 = G__34437;
count__33846_34415 = G__34438;
i__33847_34416 = G__34439;
continue;
} else {
var G__34441 = cljs.core.next(seq__33843_34429__$1);
var G__34442 = null;
var G__34443 = (0);
var G__34444 = (0);
seq__33843_34413 = G__34441;
chunk__33845_34414 = G__34442;
count__33846_34415 = G__34443;
i__33847_34416 = G__34444;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34412);
}
}


var G__34445 = cljs.core.next(seq__33801_34404__$1);
var G__34446 = null;
var G__34447 = (0);
var G__34448 = (0);
seq__33801_34357 = G__34445;
chunk__33803_34358 = G__34446;
count__33804_34359 = G__34447;
i__33805_34360 = G__34448;
continue;
} else {
var G__34449 = cljs.core.next(seq__33801_34404__$1);
var G__34450 = null;
var G__34451 = (0);
var G__34452 = (0);
seq__33801_34357 = G__34449;
chunk__33803_34358 = G__34450;
count__33804_34359 = G__34451;
i__33805_34360 = G__34452;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__33852_34453 = shadow.dom._to_svg;
var G__33853_34454 = "string";
var G__33854_34455 = ((function (G__33852_34453,G__33853_34454){
return (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});})(G__33852_34453,G__33853_34454))
;
goog.object.set(G__33852_34453,G__33853_34454,G__33854_34455);

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
});

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__33857_34456 = shadow.dom._to_svg;
var G__33858_34457 = "null";
var G__33859_34458 = ((function (G__33857_34456,G__33858_34457){
return (function (_){
return null;
});})(G__33857_34456,G__33858_34457))
;
goog.object.set(G__33857_34456,G__33858_34457,G__33859_34458);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___34459 = arguments.length;
var i__4731__auto___34460 = (0);
while(true){
if((i__4731__auto___34460 < len__4730__auto___34459)){
args__4736__auto__.push((arguments[i__4731__auto___34460]));

var G__34461 = (i__4731__auto___34460 + (1));
i__4731__auto___34460 = G__34461;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
});

shadow.dom.svg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.dom.svg.cljs$lang$applyTo = (function (seq33861){
var G__33863 = cljs.core.first(seq33861);
var seq33861__$1 = cljs.core.next(seq33861);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33863,seq33861__$1);
});

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__33870 = arguments.length;
switch (G__33870) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = ((function (buf,chan){
return (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});})(buf,chan))
;
var G__33875_34466 = shadow.dom.dom_node(el);
var G__33876_34467 = cljs.core.name(event);
var G__33877_34468 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__33875_34466,G__33876_34467,G__33877_34468) : shadow.dom.dom_listen.call(null,G__33875_34466,G__33876_34467,G__33877_34468));

if(cljs.core.truth_((function (){var and__4120__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4120__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4120__auto__;
}
})())){
var c__30361__auto___34470 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30361__auto___34470,buf,chan,event_fn){
return (function (){
var f__30362__auto__ = (function (){var switch__30100__auto__ = ((function (c__30361__auto___34470,buf,chan,event_fn){
return (function (state_33883){
var state_val_33884 = (state_33883[(1)]);
if((state_val_33884 === (1))){
var state_33883__$1 = state_33883;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33883__$1,(2),once_or_cleanup);
} else {
if((state_val_33884 === (2))){
var inst_33880 = (state_33883[(2)]);
var inst_33881 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_33883__$1 = (function (){var statearr_33887 = state_33883;
(statearr_33887[(7)] = inst_33880);

return statearr_33887;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33883__$1,inst_33881);
} else {
return null;
}
}
});})(c__30361__auto___34470,buf,chan,event_fn))
;
return ((function (switch__30100__auto__,c__30361__auto___34470,buf,chan,event_fn){
return (function() {
var shadow$dom$state_machine__30101__auto__ = null;
var shadow$dom$state_machine__30101__auto____0 = (function (){
var statearr_33888 = [null,null,null,null,null,null,null,null];
(statearr_33888[(0)] = shadow$dom$state_machine__30101__auto__);

(statearr_33888[(1)] = (1));

return statearr_33888;
});
var shadow$dom$state_machine__30101__auto____1 = (function (state_33883){
while(true){
var ret_value__30102__auto__ = (function (){try{while(true){
var result__30103__auto__ = switch__30100__auto__(state_33883);
if(cljs.core.keyword_identical_QMARK_(result__30103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30103__auto__;
}
break;
}
}catch (e33890){if((e33890 instanceof Object)){
var ex__30104__auto__ = e33890;
var statearr_33891_34481 = state_33883;
(statearr_33891_34481[(5)] = ex__30104__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33883);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33890;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30102__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34485 = state_33883;
state_33883 = G__34485;
continue;
} else {
return ret_value__30102__auto__;
}
break;
}
});
shadow$dom$state_machine__30101__auto__ = function(state_33883){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__30101__auto____0.call(this);
case 1:
return shadow$dom$state_machine__30101__auto____1.call(this,state_33883);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__30101__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__30101__auto____0;
shadow$dom$state_machine__30101__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__30101__auto____1;
return shadow$dom$state_machine__30101__auto__;
})()
;})(switch__30100__auto__,c__30361__auto___34470,buf,chan,event_fn))
})();
var state__30363__auto__ = (function (){var statearr_33893 = (f__30362__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30362__auto__.cljs$core$IFn$_invoke$arity$0() : f__30362__auto__.call(null));
(statearr_33893[(6)] = c__30361__auto___34470);

return statearr_33893;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30363__auto__);
});})(c__30361__auto___34470,buf,chan,event_fn))
);

} else {
}

return chan;
});

shadow.dom.event_chan.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.dom.js.map
