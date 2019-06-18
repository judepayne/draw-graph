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
return cljs.core.cons((coll[idx]),(function (){var G__33262 = coll;
var G__33263 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__33262,G__33263) : shadow.dom.lazy_native_coll_seq.call(null,G__33262,G__33263));
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
var G__33291 = arguments.length;
switch (G__33291) {
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
var G__33296 = arguments.length;
switch (G__33296) {
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
var G__33302 = arguments.length;
switch (G__33302) {
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
var G__33308 = arguments.length;
switch (G__33308) {
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
var G__33312 = arguments.length;
switch (G__33312) {
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
var G__33315 = document;
var G__33316 = shadow.dom.dom_node(el);
return goog.dom.contains(G__33315,G__33316);
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__33317 = shadow.dom.dom_node(parent);
var G__33318 = shadow.dom.dom_node(el);
return goog.dom.contains(G__33317,G__33318);
});

shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2;

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__33320 = shadow.dom.dom_node(el);
var G__33321 = cls;
return goog.dom.classlist.add(G__33320,G__33321);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__33324 = shadow.dom.dom_node(el);
var G__33325 = cls;
return goog.dom.classlist.remove(G__33324,G__33325);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__33330 = arguments.length;
switch (G__33330) {
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
var G__33333 = shadow.dom.dom_node(el);
var G__33334 = cls;
return goog.dom.classlist.toggle(G__33333,G__33334);
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
}catch (e33340){if((e33340 instanceof Object)){
var e = e33340;
return console.log("didnt support attachEvent",el,e);
} else {
throw e33340;

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
var seq__33346 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__33347 = null;
var count__33348 = (0);
var i__33349 = (0);
while(true){
if((i__33349 < count__33348)){
var el = chunk__33347.cljs$core$IIndexed$_nth$arity$2(null,i__33349);
var handler_33924__$1 = ((function (seq__33346,chunk__33347,count__33348,i__33349,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33346,chunk__33347,count__33348,i__33349,el))
;
var G__33356_33925 = el;
var G__33357_33926 = cljs.core.name(ev);
var G__33358_33927 = handler_33924__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__33356_33925,G__33357_33926,G__33358_33927) : shadow.dom.dom_listen.call(null,G__33356_33925,G__33357_33926,G__33358_33927));


var G__33928 = seq__33346;
var G__33929 = chunk__33347;
var G__33930 = count__33348;
var G__33931 = (i__33349 + (1));
seq__33346 = G__33928;
chunk__33347 = G__33929;
count__33348 = G__33930;
i__33349 = G__33931;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__33346);
if(temp__5720__auto__){
var seq__33346__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33346__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__33346__$1);
var G__33933 = cljs.core.chunk_rest(seq__33346__$1);
var G__33934 = c__4550__auto__;
var G__33935 = cljs.core.count(c__4550__auto__);
var G__33936 = (0);
seq__33346 = G__33933;
chunk__33347 = G__33934;
count__33348 = G__33935;
i__33349 = G__33936;
continue;
} else {
var el = cljs.core.first(seq__33346__$1);
var handler_33938__$1 = ((function (seq__33346,chunk__33347,count__33348,i__33349,el,seq__33346__$1,temp__5720__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33346,chunk__33347,count__33348,i__33349,el,seq__33346__$1,temp__5720__auto__))
;
var G__33360_33939 = el;
var G__33361_33940 = cljs.core.name(ev);
var G__33362_33941 = handler_33938__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__33360_33939,G__33361_33940,G__33362_33941) : shadow.dom.dom_listen.call(null,G__33360_33939,G__33361_33940,G__33362_33941));


var G__33942 = cljs.core.next(seq__33346__$1);
var G__33943 = null;
var G__33944 = (0);
var G__33945 = (0);
seq__33346 = G__33942;
chunk__33347 = G__33943;
count__33348 = G__33944;
i__33349 = G__33945;
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
var G__33365 = arguments.length;
switch (G__33365) {
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
var G__33370 = shadow.dom.dom_node(el);
var G__33371 = cljs.core.name(ev);
var G__33372 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__33370,G__33371,G__33372) : shadow.dom.dom_listen.call(null,G__33370,G__33371,G__33372));
}
});

shadow.dom.on.cljs$lang$maxFixedArity = 4;

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__33373 = shadow.dom.dom_node(el);
var G__33374 = cljs.core.name(ev);
var G__33375 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__33373,G__33374,G__33375) : shadow.dom.dom_listen_remove.call(null,G__33373,G__33374,G__33375));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__33377 = cljs.core.seq(events);
var chunk__33378 = null;
var count__33379 = (0);
var i__33380 = (0);
while(true){
if((i__33380 < count__33379)){
var vec__33390 = chunk__33378.cljs$core$IIndexed$_nth$arity$2(null,i__33380);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33390,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33390,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33950 = seq__33377;
var G__33951 = chunk__33378;
var G__33952 = count__33379;
var G__33953 = (i__33380 + (1));
seq__33377 = G__33950;
chunk__33378 = G__33951;
count__33379 = G__33952;
i__33380 = G__33953;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__33377);
if(temp__5720__auto__){
var seq__33377__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33377__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__33377__$1);
var G__33958 = cljs.core.chunk_rest(seq__33377__$1);
var G__33959 = c__4550__auto__;
var G__33960 = cljs.core.count(c__4550__auto__);
var G__33961 = (0);
seq__33377 = G__33958;
chunk__33378 = G__33959;
count__33379 = G__33960;
i__33380 = G__33961;
continue;
} else {
var vec__33396 = cljs.core.first(seq__33377__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33396,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33396,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33962 = cljs.core.next(seq__33377__$1);
var G__33963 = null;
var G__33964 = (0);
var G__33965 = (0);
seq__33377 = G__33962;
chunk__33378 = G__33963;
count__33379 = G__33964;
i__33380 = G__33965;
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
var seq__33402 = cljs.core.seq(styles);
var chunk__33403 = null;
var count__33404 = (0);
var i__33405 = (0);
while(true){
if((i__33405 < count__33404)){
var vec__33424 = chunk__33403.cljs$core$IIndexed$_nth$arity$2(null,i__33405);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33424,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33424,(1),null);
var G__33428_33966 = dom;
var G__33429_33967 = cljs.core.name(k);
var G__33430_33968 = (((v == null))?"":v);
goog.style.setStyle(G__33428_33966,G__33429_33967,G__33430_33968);


var G__33969 = seq__33402;
var G__33970 = chunk__33403;
var G__33971 = count__33404;
var G__33972 = (i__33405 + (1));
seq__33402 = G__33969;
chunk__33403 = G__33970;
count__33404 = G__33971;
i__33405 = G__33972;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__33402);
if(temp__5720__auto__){
var seq__33402__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33402__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__33402__$1);
var G__33974 = cljs.core.chunk_rest(seq__33402__$1);
var G__33975 = c__4550__auto__;
var G__33976 = cljs.core.count(c__4550__auto__);
var G__33977 = (0);
seq__33402 = G__33974;
chunk__33403 = G__33975;
count__33404 = G__33976;
i__33405 = G__33977;
continue;
} else {
var vec__33432 = cljs.core.first(seq__33402__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33432,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33432,(1),null);
var G__33435_33978 = dom;
var G__33436_33979 = cljs.core.name(k);
var G__33437_33980 = (((v == null))?"":v);
goog.style.setStyle(G__33435_33978,G__33436_33979,G__33437_33980);


var G__33981 = cljs.core.next(seq__33402__$1);
var G__33982 = null;
var G__33983 = (0);
var G__33984 = (0);
seq__33402 = G__33981;
chunk__33403 = G__33982;
count__33404 = G__33983;
i__33405 = G__33984;
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
var G__33442_33987 = key;
var G__33442_33988__$1 = (((G__33442_33987 instanceof cljs.core.Keyword))?G__33442_33987.fqn:null);
switch (G__33442_33988__$1) {
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
var ks_34004 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4131__auto__ = goog.string.startsWith(ks_34004,"data-");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.string.startsWith(ks_34004,"aria-");
}
})())){
el.setAttribute(ks_34004,value);
} else {
(el[ks_34004] = value);
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
var G__33451 = shadow.dom.dom_node(el);
var G__33452 = cls;
return goog.dom.classlist.contains(G__33451,G__33452);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__33456){
var map__33457 = p__33456;
var map__33457__$1 = (((((!((map__33457 == null))))?(((((map__33457.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33457.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33457):map__33457);
var props = map__33457__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33457__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__33461 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33461,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33461,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33461,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__33465 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__33465,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__33465;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__33472 = arguments.length;
switch (G__33472) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__33481){
var vec__33482 = p__33481;
var seq__33483 = cljs.core.seq(vec__33482);
var first__33484 = cljs.core.first(seq__33483);
var seq__33483__$1 = cljs.core.next(seq__33483);
var nn = first__33484;
var first__33484__$1 = cljs.core.first(seq__33483__$1);
var seq__33483__$2 = cljs.core.next(seq__33483__$1);
var np = first__33484__$1;
var nc = seq__33483__$2;
var node = vec__33482;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33485 = nn;
var G__33486 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33485,G__33486) : create_fn.call(null,G__33485,G__33486));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33487 = nn;
var G__33488 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33487,G__33488) : create_fn.call(null,G__33487,G__33488));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__33489 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33489,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33489,(1),null);
var seq__33492_34040 = cljs.core.seq(node_children);
var chunk__33493_34041 = null;
var count__33494_34042 = (0);
var i__33495_34043 = (0);
while(true){
if((i__33495_34043 < count__33494_34042)){
var child_struct_34045 = chunk__33493_34041.cljs$core$IIndexed$_nth$arity$2(null,i__33495_34043);
var children_34046 = shadow.dom.dom_node(child_struct_34045);
if(cljs.core.seq_QMARK_(children_34046)){
var seq__33515_34048 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34046));
var chunk__33517_34049 = null;
var count__33518_34050 = (0);
var i__33519_34051 = (0);
while(true){
if((i__33519_34051 < count__33518_34050)){
var child_34052 = chunk__33517_34049.cljs$core$IIndexed$_nth$arity$2(null,i__33519_34051);
if(cljs.core.truth_(child_34052)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34052);


var G__34053 = seq__33515_34048;
var G__34054 = chunk__33517_34049;
var G__34055 = count__33518_34050;
var G__34056 = (i__33519_34051 + (1));
seq__33515_34048 = G__34053;
chunk__33517_34049 = G__34054;
count__33518_34050 = G__34055;
i__33519_34051 = G__34056;
continue;
} else {
var G__34058 = seq__33515_34048;
var G__34059 = chunk__33517_34049;
var G__34060 = count__33518_34050;
var G__34061 = (i__33519_34051 + (1));
seq__33515_34048 = G__34058;
chunk__33517_34049 = G__34059;
count__33518_34050 = G__34060;
i__33519_34051 = G__34061;
continue;
}
} else {
var temp__5720__auto___34063 = cljs.core.seq(seq__33515_34048);
if(temp__5720__auto___34063){
var seq__33515_34066__$1 = temp__5720__auto___34063;
if(cljs.core.chunked_seq_QMARK_(seq__33515_34066__$1)){
var c__4550__auto___34071 = cljs.core.chunk_first(seq__33515_34066__$1);
var G__34072 = cljs.core.chunk_rest(seq__33515_34066__$1);
var G__34073 = c__4550__auto___34071;
var G__34074 = cljs.core.count(c__4550__auto___34071);
var G__34075 = (0);
seq__33515_34048 = G__34072;
chunk__33517_34049 = G__34073;
count__33518_34050 = G__34074;
i__33519_34051 = G__34075;
continue;
} else {
var child_34077 = cljs.core.first(seq__33515_34066__$1);
if(cljs.core.truth_(child_34077)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34077);


var G__34078 = cljs.core.next(seq__33515_34066__$1);
var G__34079 = null;
var G__34080 = (0);
var G__34081 = (0);
seq__33515_34048 = G__34078;
chunk__33517_34049 = G__34079;
count__33518_34050 = G__34080;
i__33519_34051 = G__34081;
continue;
} else {
var G__34082 = cljs.core.next(seq__33515_34066__$1);
var G__34083 = null;
var G__34084 = (0);
var G__34085 = (0);
seq__33515_34048 = G__34082;
chunk__33517_34049 = G__34083;
count__33518_34050 = G__34084;
i__33519_34051 = G__34085;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34046);
}


var G__34086 = seq__33492_34040;
var G__34087 = chunk__33493_34041;
var G__34088 = count__33494_34042;
var G__34089 = (i__33495_34043 + (1));
seq__33492_34040 = G__34086;
chunk__33493_34041 = G__34087;
count__33494_34042 = G__34088;
i__33495_34043 = G__34089;
continue;
} else {
var temp__5720__auto___34092 = cljs.core.seq(seq__33492_34040);
if(temp__5720__auto___34092){
var seq__33492_34093__$1 = temp__5720__auto___34092;
if(cljs.core.chunked_seq_QMARK_(seq__33492_34093__$1)){
var c__4550__auto___34094 = cljs.core.chunk_first(seq__33492_34093__$1);
var G__34095 = cljs.core.chunk_rest(seq__33492_34093__$1);
var G__34096 = c__4550__auto___34094;
var G__34097 = cljs.core.count(c__4550__auto___34094);
var G__34098 = (0);
seq__33492_34040 = G__34095;
chunk__33493_34041 = G__34096;
count__33494_34042 = G__34097;
i__33495_34043 = G__34098;
continue;
} else {
var child_struct_34099 = cljs.core.first(seq__33492_34093__$1);
var children_34100 = shadow.dom.dom_node(child_struct_34099);
if(cljs.core.seq_QMARK_(children_34100)){
var seq__33528_34102 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34100));
var chunk__33530_34103 = null;
var count__33531_34104 = (0);
var i__33532_34105 = (0);
while(true){
if((i__33532_34105 < count__33531_34104)){
var child_34107 = chunk__33530_34103.cljs$core$IIndexed$_nth$arity$2(null,i__33532_34105);
if(cljs.core.truth_(child_34107)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34107);


var G__34108 = seq__33528_34102;
var G__34109 = chunk__33530_34103;
var G__34110 = count__33531_34104;
var G__34111 = (i__33532_34105 + (1));
seq__33528_34102 = G__34108;
chunk__33530_34103 = G__34109;
count__33531_34104 = G__34110;
i__33532_34105 = G__34111;
continue;
} else {
var G__34112 = seq__33528_34102;
var G__34113 = chunk__33530_34103;
var G__34114 = count__33531_34104;
var G__34115 = (i__33532_34105 + (1));
seq__33528_34102 = G__34112;
chunk__33530_34103 = G__34113;
count__33531_34104 = G__34114;
i__33532_34105 = G__34115;
continue;
}
} else {
var temp__5720__auto___34116__$1 = cljs.core.seq(seq__33528_34102);
if(temp__5720__auto___34116__$1){
var seq__33528_34117__$1 = temp__5720__auto___34116__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33528_34117__$1)){
var c__4550__auto___34118 = cljs.core.chunk_first(seq__33528_34117__$1);
var G__34119 = cljs.core.chunk_rest(seq__33528_34117__$1);
var G__34120 = c__4550__auto___34118;
var G__34121 = cljs.core.count(c__4550__auto___34118);
var G__34122 = (0);
seq__33528_34102 = G__34119;
chunk__33530_34103 = G__34120;
count__33531_34104 = G__34121;
i__33532_34105 = G__34122;
continue;
} else {
var child_34123 = cljs.core.first(seq__33528_34117__$1);
if(cljs.core.truth_(child_34123)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34123);


var G__34126 = cljs.core.next(seq__33528_34117__$1);
var G__34127 = null;
var G__34128 = (0);
var G__34129 = (0);
seq__33528_34102 = G__34126;
chunk__33530_34103 = G__34127;
count__33531_34104 = G__34128;
i__33532_34105 = G__34129;
continue;
} else {
var G__34130 = cljs.core.next(seq__33528_34117__$1);
var G__34131 = null;
var G__34132 = (0);
var G__34133 = (0);
seq__33528_34102 = G__34130;
chunk__33530_34103 = G__34131;
count__33531_34104 = G__34132;
i__33532_34105 = G__34133;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34100);
}


var G__34135 = cljs.core.next(seq__33492_34093__$1);
var G__34136 = null;
var G__34137 = (0);
var G__34138 = (0);
seq__33492_34040 = G__34135;
chunk__33493_34041 = G__34136;
count__33494_34042 = G__34137;
i__33495_34043 = G__34138;
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
var G__33546 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__33546);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__33553 = cljs.core.seq(node);
var chunk__33554 = null;
var count__33555 = (0);
var i__33556 = (0);
while(true){
if((i__33556 < count__33555)){
var n = chunk__33554.cljs$core$IIndexed$_nth$arity$2(null,i__33556);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34148 = seq__33553;
var G__34149 = chunk__33554;
var G__34150 = count__33555;
var G__34151 = (i__33556 + (1));
seq__33553 = G__34148;
chunk__33554 = G__34149;
count__33555 = G__34150;
i__33556 = G__34151;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__33553);
if(temp__5720__auto__){
var seq__33553__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33553__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__33553__$1);
var G__34163 = cljs.core.chunk_rest(seq__33553__$1);
var G__34164 = c__4550__auto__;
var G__34165 = cljs.core.count(c__4550__auto__);
var G__34166 = (0);
seq__33553 = G__34163;
chunk__33554 = G__34164;
count__33555 = G__34165;
i__33556 = G__34166;
continue;
} else {
var n = cljs.core.first(seq__33553__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34167 = cljs.core.next(seq__33553__$1);
var G__34168 = null;
var G__34169 = (0);
var G__34170 = (0);
seq__33553 = G__34167;
chunk__33554 = G__34168;
count__33555 = G__34169;
i__33556 = G__34170;
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
var G__33565 = shadow.dom.dom_node(new$);
var G__33566 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__33565,G__33566);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__33570 = arguments.length;
switch (G__33570) {
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
var G__33579 = arguments.length;
switch (G__33579) {
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
var G__33589 = arguments.length;
switch (G__33589) {
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
var len__4730__auto___34185 = arguments.length;
var i__4731__auto___34187 = (0);
while(true){
if((i__4731__auto___34187 < len__4730__auto___34185)){
args__4736__auto__.push((arguments[i__4731__auto___34187]));

var G__34189 = (i__4731__auto___34187 + (1));
i__4731__auto___34187 = G__34189;
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
var seq__33593_34190 = cljs.core.seq(nodes);
var chunk__33594_34191 = null;
var count__33595_34192 = (0);
var i__33596_34193 = (0);
while(true){
if((i__33596_34193 < count__33595_34192)){
var node_34194 = chunk__33594_34191.cljs$core$IIndexed$_nth$arity$2(null,i__33596_34193);
fragment.appendChild(shadow.dom._to_dom(node_34194));


var G__34196 = seq__33593_34190;
var G__34197 = chunk__33594_34191;
var G__34198 = count__33595_34192;
var G__34199 = (i__33596_34193 + (1));
seq__33593_34190 = G__34196;
chunk__33594_34191 = G__34197;
count__33595_34192 = G__34198;
i__33596_34193 = G__34199;
continue;
} else {
var temp__5720__auto___34200 = cljs.core.seq(seq__33593_34190);
if(temp__5720__auto___34200){
var seq__33593_34201__$1 = temp__5720__auto___34200;
if(cljs.core.chunked_seq_QMARK_(seq__33593_34201__$1)){
var c__4550__auto___34202 = cljs.core.chunk_first(seq__33593_34201__$1);
var G__34203 = cljs.core.chunk_rest(seq__33593_34201__$1);
var G__34204 = c__4550__auto___34202;
var G__34205 = cljs.core.count(c__4550__auto___34202);
var G__34206 = (0);
seq__33593_34190 = G__34203;
chunk__33594_34191 = G__34204;
count__33595_34192 = G__34205;
i__33596_34193 = G__34206;
continue;
} else {
var node_34209 = cljs.core.first(seq__33593_34201__$1);
fragment.appendChild(shadow.dom._to_dom(node_34209));


var G__34210 = cljs.core.next(seq__33593_34201__$1);
var G__34211 = null;
var G__34212 = (0);
var G__34213 = (0);
seq__33593_34190 = G__34210;
chunk__33594_34191 = G__34211;
count__33595_34192 = G__34212;
i__33596_34193 = G__34213;
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
shadow.dom.fragment.cljs$lang$applyTo = (function (seq33592){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33592));
});

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__33603_34216 = cljs.core.seq(scripts);
var chunk__33604_34217 = null;
var count__33605_34218 = (0);
var i__33606_34219 = (0);
while(true){
if((i__33606_34219 < count__33605_34218)){
var vec__33613_34222 = chunk__33604_34217.cljs$core$IIndexed$_nth$arity$2(null,i__33606_34219);
var script_tag_34223 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33613_34222,(0),null);
var script_body_34224 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33613_34222,(1),null);
eval(script_body_34224);


var G__34225 = seq__33603_34216;
var G__34226 = chunk__33604_34217;
var G__34227 = count__33605_34218;
var G__34228 = (i__33606_34219 + (1));
seq__33603_34216 = G__34225;
chunk__33604_34217 = G__34226;
count__33605_34218 = G__34227;
i__33606_34219 = G__34228;
continue;
} else {
var temp__5720__auto___34230 = cljs.core.seq(seq__33603_34216);
if(temp__5720__auto___34230){
var seq__33603_34231__$1 = temp__5720__auto___34230;
if(cljs.core.chunked_seq_QMARK_(seq__33603_34231__$1)){
var c__4550__auto___34232 = cljs.core.chunk_first(seq__33603_34231__$1);
var G__34234 = cljs.core.chunk_rest(seq__33603_34231__$1);
var G__34235 = c__4550__auto___34232;
var G__34236 = cljs.core.count(c__4550__auto___34232);
var G__34237 = (0);
seq__33603_34216 = G__34234;
chunk__33604_34217 = G__34235;
count__33605_34218 = G__34236;
i__33606_34219 = G__34237;
continue;
} else {
var vec__33616_34238 = cljs.core.first(seq__33603_34231__$1);
var script_tag_34239 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33616_34238,(0),null);
var script_body_34240 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33616_34238,(1),null);
eval(script_body_34240);


var G__34242 = cljs.core.next(seq__33603_34231__$1);
var G__34243 = null;
var G__34244 = (0);
var G__34245 = (0);
seq__33603_34216 = G__34242;
chunk__33604_34217 = G__34243;
count__33605_34218 = G__34244;
i__33606_34219 = G__34245;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (scripts){
return (function (s__$1,p__33619){
var vec__33620 = p__33619;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33620,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33620,(1),null);
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
var G__33623 = shadow.dom.dom_node(el);
var G__33624 = cls;
return goog.dom.getAncestorByClass(G__33623,G__33624);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__33626 = arguments.length;
switch (G__33626) {
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
var G__33627 = shadow.dom.dom_node(el);
var G__33628 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__33627,G__33628);
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__33629 = shadow.dom.dom_node(el);
var G__33630 = cljs.core.name(tag);
var G__33631 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__33629,G__33630,G__33631);
});

shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3;

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__33632 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__33632);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__33634 = shadow.dom.dom_node(dom);
var G__33635 = value;
return goog.dom.forms.setValue(G__33634,G__33635);
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
var seq__33647 = cljs.core.seq(style_keys);
var chunk__33648 = null;
var count__33649 = (0);
var i__33650 = (0);
while(true){
if((i__33650 < count__33649)){
var it = chunk__33648.cljs$core$IIndexed$_nth$arity$2(null,i__33650);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34269 = seq__33647;
var G__34270 = chunk__33648;
var G__34271 = count__33649;
var G__34272 = (i__33650 + (1));
seq__33647 = G__34269;
chunk__33648 = G__34270;
count__33649 = G__34271;
i__33650 = G__34272;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__33647);
if(temp__5720__auto__){
var seq__33647__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33647__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__33647__$1);
var G__34273 = cljs.core.chunk_rest(seq__33647__$1);
var G__34274 = c__4550__auto__;
var G__34275 = cljs.core.count(c__4550__auto__);
var G__34276 = (0);
seq__33647 = G__34273;
chunk__33648 = G__34274;
count__33649 = G__34275;
i__33650 = G__34276;
continue;
} else {
var it = cljs.core.first(seq__33647__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34279 = cljs.core.next(seq__33647__$1);
var G__34280 = null;
var G__34281 = (0);
var G__34282 = (0);
seq__33647 = G__34279;
chunk__33648 = G__34280;
count__33649 = G__34281;
i__33650 = G__34282;
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

shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k33657,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__33666 = k33657;
var G__33666__$1 = (((G__33666 instanceof cljs.core.Keyword))?G__33666.fqn:null);
switch (G__33666__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33657,else__4388__auto__);

}
});

shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__33671){
var vec__33673 = p__33671;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33673,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33673,(1),null);
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

shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33656){
var self__ = this;
var G__33656__$1 = this;
return (new cljs.core.RecordIter((0),G__33656__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4243__auto____$1 = (function (){var fexpr__33687 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__33687(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33658,other33659){
var self__ = this;
var this33658__$1 = this;
return (((!((other33659 == null)))) && ((this33658__$1.constructor === other33659.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33658__$1.x,other33659.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33658__$1.y,other33659.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33658__$1.__extmap,other33659.__extmap)));
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

shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__33656){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__33693 = cljs.core.keyword_identical_QMARK_;
var expr__33694 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__33697 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__33698 = expr__33694;
return (pred__33693.cljs$core$IFn$_invoke$arity$2 ? pred__33693.cljs$core$IFn$_invoke$arity$2(G__33697,G__33698) : pred__33693.call(null,G__33697,G__33698));
})())){
return (new shadow.dom.Coordinate(G__33656,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__33700 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__33701 = expr__33694;
return (pred__33693.cljs$core$IFn$_invoke$arity$2 ? pred__33693.cljs$core$IFn$_invoke$arity$2(G__33700,G__33701) : pred__33693.call(null,G__33700,G__33701));
})())){
return (new shadow.dom.Coordinate(self__.x,G__33656,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__33656),null));
}
}
});

shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__33656){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__33656,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__33660){
var extmap__4424__auto__ = (function (){var G__33706 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33660,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__33660)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33706);
} else {
return G__33706;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__33660),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__33660),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__33707 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__33707);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__33708 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__33708);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__33710 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__33710);
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

shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k33712,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__33717 = k33712;
var G__33717__$1 = (((G__33717 instanceof cljs.core.Keyword))?G__33717.fqn:null);
switch (G__33717__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33712,else__4388__auto__);

}
});

shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__33718){
var vec__33719 = p__33718;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33719,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33719,(1),null);
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

shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33711){
var self__ = this;
var G__33711__$1 = this;
return (new cljs.core.RecordIter((0),G__33711__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4243__auto____$1 = (function (){var fexpr__33722 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__33722(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33713,other33714){
var self__ = this;
var this33713__$1 = this;
return (((!((other33714 == null)))) && ((this33713__$1.constructor === other33714.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33713__$1.w,other33714.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33713__$1.h,other33714.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33713__$1.__extmap,other33714.__extmap)));
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

shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__33711){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__33723 = cljs.core.keyword_identical_QMARK_;
var expr__33724 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__33726 = new cljs.core.Keyword(null,"w","w",354169001);
var G__33727 = expr__33724;
return (pred__33723.cljs$core$IFn$_invoke$arity$2 ? pred__33723.cljs$core$IFn$_invoke$arity$2(G__33726,G__33727) : pred__33723.call(null,G__33726,G__33727));
})())){
return (new shadow.dom.Size(G__33711,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__33728 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__33729 = expr__33724;
return (pred__33723.cljs$core$IFn$_invoke$arity$2 ? pred__33723.cljs$core$IFn$_invoke$arity$2(G__33728,G__33729) : pred__33723.call(null,G__33728,G__33729));
})())){
return (new shadow.dom.Size(self__.w,G__33711,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__33711),null));
}
}
});

shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__33711){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__33711,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__33715){
var extmap__4424__auto__ = (function (){var G__33741 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33715,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__33715)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33741);
} else {
return G__33741;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__33715),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__33715),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__33747 = shadow.dom.dom_node(el);
return goog.style.getSize(G__33747);
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
var G__34325 = (i + (1));
var G__34326 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__34325;
ret = G__34326;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33760){
var vec__33762 = p__33760;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33762,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33762,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params)))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__33766 = arguments.length;
switch (G__33766) {
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
var G__33773_34330 = new_node;
var G__33774_34331 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__33773_34330,G__33774_34331);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__33776_34332 = new_node;
var G__33777_34333 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__33776_34332,G__33777_34333);

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
var G__34335 = ps;
var G__34336 = (i + (1));
el__$1 = G__34335;
i = G__34336;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__33780 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__33780);
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
var G__33784 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__33784);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__33788 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__33788);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__33791 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33791,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33791,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33791,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__33795_34340 = cljs.core.seq(props);
var chunk__33796_34341 = null;
var count__33797_34342 = (0);
var i__33798_34343 = (0);
while(true){
if((i__33798_34343 < count__33797_34342)){
var vec__33809_34344 = chunk__33796_34341.cljs$core$IIndexed$_nth$arity$2(null,i__33798_34343);
var k_34345 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33809_34344,(0),null);
var v_34346 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33809_34344,(1),null);
el.setAttributeNS((function (){var temp__5720__auto__ = cljs.core.namespace(k_34345);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34345),v_34346);


var G__34347 = seq__33795_34340;
var G__34348 = chunk__33796_34341;
var G__34349 = count__33797_34342;
var G__34350 = (i__33798_34343 + (1));
seq__33795_34340 = G__34347;
chunk__33796_34341 = G__34348;
count__33797_34342 = G__34349;
i__33798_34343 = G__34350;
continue;
} else {
var temp__5720__auto___34351 = cljs.core.seq(seq__33795_34340);
if(temp__5720__auto___34351){
var seq__33795_34352__$1 = temp__5720__auto___34351;
if(cljs.core.chunked_seq_QMARK_(seq__33795_34352__$1)){
var c__4550__auto___34353 = cljs.core.chunk_first(seq__33795_34352__$1);
var G__34354 = cljs.core.chunk_rest(seq__33795_34352__$1);
var G__34355 = c__4550__auto___34353;
var G__34356 = cljs.core.count(c__4550__auto___34353);
var G__34357 = (0);
seq__33795_34340 = G__34354;
chunk__33796_34341 = G__34355;
count__33797_34342 = G__34356;
i__33798_34343 = G__34357;
continue;
} else {
var vec__33813_34358 = cljs.core.first(seq__33795_34352__$1);
var k_34359 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33813_34358,(0),null);
var v_34360 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33813_34358,(1),null);
el.setAttributeNS((function (){var temp__5720__auto____$1 = cljs.core.namespace(k_34359);
if(cljs.core.truth_(temp__5720__auto____$1)){
var ns = temp__5720__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34359),v_34360);


var G__34361 = cljs.core.next(seq__33795_34352__$1);
var G__34362 = null;
var G__34363 = (0);
var G__34364 = (0);
seq__33795_34340 = G__34361;
chunk__33796_34341 = G__34362;
count__33797_34342 = G__34363;
i__33798_34343 = G__34364;
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
var vec__33821 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33821,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33821,(1),null);
var seq__33824_34366 = cljs.core.seq(node_children);
var chunk__33826_34367 = null;
var count__33827_34368 = (0);
var i__33828_34369 = (0);
while(true){
if((i__33828_34369 < count__33827_34368)){
var child_struct_34370 = chunk__33826_34367.cljs$core$IIndexed$_nth$arity$2(null,i__33828_34369);
if((!((child_struct_34370 == null)))){
if(typeof child_struct_34370 === 'string'){
var text_34371 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34371),child_struct_34370].join(''));
} else {
var children_34376 = shadow.dom.svg_node(child_struct_34370);
if(cljs.core.seq_QMARK_(children_34376)){
var seq__33854_34377 = cljs.core.seq(children_34376);
var chunk__33856_34394 = null;
var count__33857_34395 = (0);
var i__33858_34396 = (0);
while(true){
if((i__33858_34396 < count__33857_34395)){
var child_34397 = chunk__33856_34394.cljs$core$IIndexed$_nth$arity$2(null,i__33858_34396);
if(cljs.core.truth_(child_34397)){
node.appendChild(child_34397);


var G__34398 = seq__33854_34377;
var G__34399 = chunk__33856_34394;
var G__34400 = count__33857_34395;
var G__34401 = (i__33858_34396 + (1));
seq__33854_34377 = G__34398;
chunk__33856_34394 = G__34399;
count__33857_34395 = G__34400;
i__33858_34396 = G__34401;
continue;
} else {
var G__34402 = seq__33854_34377;
var G__34403 = chunk__33856_34394;
var G__34404 = count__33857_34395;
var G__34405 = (i__33858_34396 + (1));
seq__33854_34377 = G__34402;
chunk__33856_34394 = G__34403;
count__33857_34395 = G__34404;
i__33858_34396 = G__34405;
continue;
}
} else {
var temp__5720__auto___34408 = cljs.core.seq(seq__33854_34377);
if(temp__5720__auto___34408){
var seq__33854_34409__$1 = temp__5720__auto___34408;
if(cljs.core.chunked_seq_QMARK_(seq__33854_34409__$1)){
var c__4550__auto___34410 = cljs.core.chunk_first(seq__33854_34409__$1);
var G__34411 = cljs.core.chunk_rest(seq__33854_34409__$1);
var G__34412 = c__4550__auto___34410;
var G__34413 = cljs.core.count(c__4550__auto___34410);
var G__34414 = (0);
seq__33854_34377 = G__34411;
chunk__33856_34394 = G__34412;
count__33857_34395 = G__34413;
i__33858_34396 = G__34414;
continue;
} else {
var child_34415 = cljs.core.first(seq__33854_34409__$1);
if(cljs.core.truth_(child_34415)){
node.appendChild(child_34415);


var G__34416 = cljs.core.next(seq__33854_34409__$1);
var G__34417 = null;
var G__34418 = (0);
var G__34419 = (0);
seq__33854_34377 = G__34416;
chunk__33856_34394 = G__34417;
count__33857_34395 = G__34418;
i__33858_34396 = G__34419;
continue;
} else {
var G__34420 = cljs.core.next(seq__33854_34409__$1);
var G__34421 = null;
var G__34422 = (0);
var G__34423 = (0);
seq__33854_34377 = G__34420;
chunk__33856_34394 = G__34421;
count__33857_34395 = G__34422;
i__33858_34396 = G__34423;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34376);
}
}


var G__34424 = seq__33824_34366;
var G__34425 = chunk__33826_34367;
var G__34426 = count__33827_34368;
var G__34427 = (i__33828_34369 + (1));
seq__33824_34366 = G__34424;
chunk__33826_34367 = G__34425;
count__33827_34368 = G__34426;
i__33828_34369 = G__34427;
continue;
} else {
var G__34428 = seq__33824_34366;
var G__34429 = chunk__33826_34367;
var G__34430 = count__33827_34368;
var G__34431 = (i__33828_34369 + (1));
seq__33824_34366 = G__34428;
chunk__33826_34367 = G__34429;
count__33827_34368 = G__34430;
i__33828_34369 = G__34431;
continue;
}
} else {
var temp__5720__auto___34432 = cljs.core.seq(seq__33824_34366);
if(temp__5720__auto___34432){
var seq__33824_34433__$1 = temp__5720__auto___34432;
if(cljs.core.chunked_seq_QMARK_(seq__33824_34433__$1)){
var c__4550__auto___34434 = cljs.core.chunk_first(seq__33824_34433__$1);
var G__34435 = cljs.core.chunk_rest(seq__33824_34433__$1);
var G__34436 = c__4550__auto___34434;
var G__34437 = cljs.core.count(c__4550__auto___34434);
var G__34438 = (0);
seq__33824_34366 = G__34435;
chunk__33826_34367 = G__34436;
count__33827_34368 = G__34437;
i__33828_34369 = G__34438;
continue;
} else {
var child_struct_34439 = cljs.core.first(seq__33824_34433__$1);
if((!((child_struct_34439 == null)))){
if(typeof child_struct_34439 === 'string'){
var text_34440 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34440),child_struct_34439].join(''));
} else {
var children_34441 = shadow.dom.svg_node(child_struct_34439);
if(cljs.core.seq_QMARK_(children_34441)){
var seq__33866_34442 = cljs.core.seq(children_34441);
var chunk__33868_34443 = null;
var count__33869_34444 = (0);
var i__33870_34445 = (0);
while(true){
if((i__33870_34445 < count__33869_34444)){
var child_34450 = chunk__33868_34443.cljs$core$IIndexed$_nth$arity$2(null,i__33870_34445);
if(cljs.core.truth_(child_34450)){
node.appendChild(child_34450);


var G__34451 = seq__33866_34442;
var G__34452 = chunk__33868_34443;
var G__34453 = count__33869_34444;
var G__34454 = (i__33870_34445 + (1));
seq__33866_34442 = G__34451;
chunk__33868_34443 = G__34452;
count__33869_34444 = G__34453;
i__33870_34445 = G__34454;
continue;
} else {
var G__34455 = seq__33866_34442;
var G__34456 = chunk__33868_34443;
var G__34457 = count__33869_34444;
var G__34458 = (i__33870_34445 + (1));
seq__33866_34442 = G__34455;
chunk__33868_34443 = G__34456;
count__33869_34444 = G__34457;
i__33870_34445 = G__34458;
continue;
}
} else {
var temp__5720__auto___34459__$1 = cljs.core.seq(seq__33866_34442);
if(temp__5720__auto___34459__$1){
var seq__33866_34460__$1 = temp__5720__auto___34459__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33866_34460__$1)){
var c__4550__auto___34461 = cljs.core.chunk_first(seq__33866_34460__$1);
var G__34462 = cljs.core.chunk_rest(seq__33866_34460__$1);
var G__34463 = c__4550__auto___34461;
var G__34464 = cljs.core.count(c__4550__auto___34461);
var G__34465 = (0);
seq__33866_34442 = G__34462;
chunk__33868_34443 = G__34463;
count__33869_34444 = G__34464;
i__33870_34445 = G__34465;
continue;
} else {
var child_34466 = cljs.core.first(seq__33866_34460__$1);
if(cljs.core.truth_(child_34466)){
node.appendChild(child_34466);


var G__34467 = cljs.core.next(seq__33866_34460__$1);
var G__34468 = null;
var G__34469 = (0);
var G__34470 = (0);
seq__33866_34442 = G__34467;
chunk__33868_34443 = G__34468;
count__33869_34444 = G__34469;
i__33870_34445 = G__34470;
continue;
} else {
var G__34471 = cljs.core.next(seq__33866_34460__$1);
var G__34472 = null;
var G__34473 = (0);
var G__34474 = (0);
seq__33866_34442 = G__34471;
chunk__33868_34443 = G__34472;
count__33869_34444 = G__34473;
i__33870_34445 = G__34474;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34441);
}
}


var G__34475 = cljs.core.next(seq__33824_34433__$1);
var G__34476 = null;
var G__34477 = (0);
var G__34478 = (0);
seq__33824_34366 = G__34475;
chunk__33826_34367 = G__34476;
count__33827_34368 = G__34477;
i__33828_34369 = G__34478;
continue;
} else {
var G__34479 = cljs.core.next(seq__33824_34433__$1);
var G__34480 = null;
var G__34481 = (0);
var G__34482 = (0);
seq__33824_34366 = G__34479;
chunk__33826_34367 = G__34480;
count__33827_34368 = G__34481;
i__33828_34369 = G__34482;
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

var G__33879_34483 = shadow.dom._to_svg;
var G__33880_34484 = "string";
var G__33881_34485 = ((function (G__33879_34483,G__33880_34484){
return (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});})(G__33879_34483,G__33880_34484))
;
goog.object.set(G__33879_34483,G__33880_34484,G__33881_34485);

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

var G__33883_34489 = shadow.dom._to_svg;
var G__33884_34490 = "null";
var G__33885_34491 = ((function (G__33883_34489,G__33884_34490){
return (function (_){
return null;
});})(G__33883_34489,G__33884_34490))
;
goog.object.set(G__33883_34489,G__33884_34490,G__33885_34491);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___34492 = arguments.length;
var i__4731__auto___34493 = (0);
while(true){
if((i__4731__auto___34493 < len__4730__auto___34492)){
args__4736__auto__.push((arguments[i__4731__auto___34493]));

var G__34494 = (i__4731__auto___34493 + (1));
i__4731__auto___34493 = G__34494;
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
shadow.dom.svg.cljs$lang$applyTo = (function (seq33886){
var G__33887 = cljs.core.first(seq33886);
var seq33886__$1 = cljs.core.next(seq33886);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33887,seq33886__$1);
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
var G__33891 = arguments.length;
switch (G__33891) {
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
var G__33892_34496 = shadow.dom.dom_node(el);
var G__33893_34497 = cljs.core.name(event);
var G__33894_34498 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__33892_34496,G__33893_34497,G__33894_34498) : shadow.dom.dom_listen.call(null,G__33892_34496,G__33893_34497,G__33894_34498));

if(cljs.core.truth_((function (){var and__4120__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4120__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4120__auto__;
}
})())){
var c__30662__auto___34499 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30662__auto___34499,buf,chan,event_fn){
return (function (){
var f__30663__auto__ = (function (){var switch__30351__auto__ = ((function (c__30662__auto___34499,buf,chan,event_fn){
return (function (state_33899){
var state_val_33900 = (state_33899[(1)]);
if((state_val_33900 === (1))){
var state_33899__$1 = state_33899;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33899__$1,(2),once_or_cleanup);
} else {
if((state_val_33900 === (2))){
var inst_33896 = (state_33899[(2)]);
var inst_33897 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_33899__$1 = (function (){var statearr_33901 = state_33899;
(statearr_33901[(7)] = inst_33896);

return statearr_33901;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33899__$1,inst_33897);
} else {
return null;
}
}
});})(c__30662__auto___34499,buf,chan,event_fn))
;
return ((function (switch__30351__auto__,c__30662__auto___34499,buf,chan,event_fn){
return (function() {
var shadow$dom$state_machine__30352__auto__ = null;
var shadow$dom$state_machine__30352__auto____0 = (function (){
var statearr_33902 = [null,null,null,null,null,null,null,null];
(statearr_33902[(0)] = shadow$dom$state_machine__30352__auto__);

(statearr_33902[(1)] = (1));

return statearr_33902;
});
var shadow$dom$state_machine__30352__auto____1 = (function (state_33899){
while(true){
var ret_value__30353__auto__ = (function (){try{while(true){
var result__30354__auto__ = switch__30351__auto__(state_33899);
if(cljs.core.keyword_identical_QMARK_(result__30354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30354__auto__;
}
break;
}
}catch (e33903){if((e33903 instanceof Object)){
var ex__30355__auto__ = e33903;
var statearr_33904_34504 = state_33899;
(statearr_33904_34504[(5)] = ex__30355__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33899);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33903;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34505 = state_33899;
state_33899 = G__34505;
continue;
} else {
return ret_value__30353__auto__;
}
break;
}
});
shadow$dom$state_machine__30352__auto__ = function(state_33899){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__30352__auto____0.call(this);
case 1:
return shadow$dom$state_machine__30352__auto____1.call(this,state_33899);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__30352__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__30352__auto____0;
shadow$dom$state_machine__30352__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__30352__auto____1;
return shadow$dom$state_machine__30352__auto__;
})()
;})(switch__30351__auto__,c__30662__auto___34499,buf,chan,event_fn))
})();
var state__30664__auto__ = (function (){var statearr_33905 = (f__30663__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30663__auto__.cljs$core$IFn$_invoke$arity$0() : f__30663__auto__.call(null));
(statearr_33905[(6)] = c__30662__auto___34499);

return statearr_33905;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30664__auto__);
});})(c__30662__auto___34499,buf,chan,event_fn))
);

} else {
}

return chan;
});

shadow.dom.event_chan.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.dom.js.map
