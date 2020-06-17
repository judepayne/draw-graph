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
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
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
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__36639 = coll;
var G__36640 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__36639,G__36640) : shadow.dom.lazy_native_coll_seq.call(null,G__36639,G__36640));
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
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4185__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/NativeColl");
}));

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
var G__36704 = arguments.length;
switch (G__36704) {
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

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__36722 = arguments.length;
switch (G__36722) {
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

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__36738 = arguments.length;
switch (G__36738) {
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

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__36759 = arguments.length;
switch (G__36759) {
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

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__36782 = arguments.length;
switch (G__36782) {
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

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__36802 = arguments.length;
switch (G__36802) {
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

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e36806){if((e36806 instanceof Object)){
var e = e36806;
return console.log("didnt support attachEvent",el,e);
} else {
throw e36806;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__36812 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__36813 = null;
var count__36814 = (0);
var i__36815 = (0);
while(true){
if((i__36815 < count__36814)){
var el = chunk__36813.cljs$core$IIndexed$_nth$arity$2(null,i__36815);
var handler_37589__$1 = ((function (seq__36812,chunk__36813,count__36814,i__36815,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__36812,chunk__36813,count__36814,i__36815,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_37589__$1);


var G__37595 = seq__36812;
var G__37596 = chunk__36813;
var G__37597 = count__36814;
var G__37598 = (i__36815 + (1));
seq__36812 = G__37595;
chunk__36813 = G__37596;
count__36814 = G__37597;
i__36815 = G__37598;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36812);
if(temp__5735__auto__){
var seq__36812__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36812__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__36812__$1);
var G__37602 = cljs.core.chunk_rest(seq__36812__$1);
var G__37603 = c__4609__auto__;
var G__37604 = cljs.core.count(c__4609__auto__);
var G__37605 = (0);
seq__36812 = G__37602;
chunk__36813 = G__37603;
count__36814 = G__37604;
i__36815 = G__37605;
continue;
} else {
var el = cljs.core.first(seq__36812__$1);
var handler_37608__$1 = ((function (seq__36812,chunk__36813,count__36814,i__36815,el,seq__36812__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__36812,chunk__36813,count__36814,i__36815,el,seq__36812__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_37608__$1);


var G__37611 = cljs.core.next(seq__36812__$1);
var G__37612 = null;
var G__37613 = (0);
var G__37614 = (0);
seq__36812 = G__37611;
chunk__36813 = G__37612;
count__36814 = G__37613;
i__36815 = G__37614;
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
var G__36840 = arguments.length;
switch (G__36840) {
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

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__36854 = cljs.core.seq(events);
var chunk__36855 = null;
var count__36856 = (0);
var i__36857 = (0);
while(true){
if((i__36857 < count__36856)){
var vec__36876 = chunk__36855.cljs$core$IIndexed$_nth$arity$2(null,i__36857);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36876,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36876,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__37642 = seq__36854;
var G__37643 = chunk__36855;
var G__37644 = count__36856;
var G__37645 = (i__36857 + (1));
seq__36854 = G__37642;
chunk__36855 = G__37643;
count__36856 = G__37644;
i__36857 = G__37645;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36854);
if(temp__5735__auto__){
var seq__36854__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36854__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__36854__$1);
var G__37647 = cljs.core.chunk_rest(seq__36854__$1);
var G__37648 = c__4609__auto__;
var G__37649 = cljs.core.count(c__4609__auto__);
var G__37650 = (0);
seq__36854 = G__37647;
chunk__36855 = G__37648;
count__36856 = G__37649;
i__36857 = G__37650;
continue;
} else {
var vec__36888 = cljs.core.first(seq__36854__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36888,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36888,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__37651 = cljs.core.next(seq__36854__$1);
var G__37652 = null;
var G__37653 = (0);
var G__37654 = (0);
seq__36854 = G__37651;
chunk__36855 = G__37652;
count__36856 = G__37653;
i__36857 = G__37654;
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
var seq__36895 = cljs.core.seq(styles);
var chunk__36896 = null;
var count__36897 = (0);
var i__36898 = (0);
while(true){
if((i__36898 < count__36897)){
var vec__36907 = chunk__36896.cljs$core$IIndexed$_nth$arity$2(null,i__36898);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36907,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36907,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__37661 = seq__36895;
var G__37662 = chunk__36896;
var G__37663 = count__36897;
var G__37664 = (i__36898 + (1));
seq__36895 = G__37661;
chunk__36896 = G__37662;
count__36897 = G__37663;
i__36898 = G__37664;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36895);
if(temp__5735__auto__){
var seq__36895__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36895__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__36895__$1);
var G__37666 = cljs.core.chunk_rest(seq__36895__$1);
var G__37667 = c__4609__auto__;
var G__37668 = cljs.core.count(c__4609__auto__);
var G__37669 = (0);
seq__36895 = G__37666;
chunk__36896 = G__37667;
count__36897 = G__37668;
i__36898 = G__37669;
continue;
} else {
var vec__36911 = cljs.core.first(seq__36895__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36911,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36911,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__37671 = cljs.core.next(seq__36895__$1);
var G__37672 = null;
var G__37673 = (0);
var G__37674 = (0);
seq__36895 = G__37671;
chunk__36896 = G__37672;
count__36897 = G__37673;
i__36898 = G__37674;
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
var G__36917_37676 = key;
var G__36917_37677__$1 = (((G__36917_37676 instanceof cljs.core.Keyword))?G__36917_37676.fqn:null);
switch (G__36917_37677__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

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
var ks_37701 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4185__auto__ = goog.string.startsWith(ks_37701,"data-");
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return goog.string.startsWith(ks_37701,"aria-");
}
})())){
el.setAttribute(ks_37701,value);
} else {
(el[ks_37701] = value);
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
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__36946){
var map__36948 = p__36946;
var map__36948__$1 = (((((!((map__36948 == null))))?(((((map__36948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36948.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36948):map__36948);
var props = map__36948__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36948__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__36950 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36950,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36950,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36950,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__36953 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__36953,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__36953;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__36957 = arguments.length;
switch (G__36957) {
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

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__36960){
var vec__36961 = p__36960;
var seq__36962 = cljs.core.seq(vec__36961);
var first__36963 = cljs.core.first(seq__36962);
var seq__36962__$1 = cljs.core.next(seq__36962);
var nn = first__36963;
var first__36963__$1 = cljs.core.first(seq__36962__$1);
var seq__36962__$2 = cljs.core.next(seq__36962__$1);
var np = first__36963__$1;
var nc = seq__36962__$2;
var node = vec__36961;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__36967 = nn;
var G__36968 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__36967,G__36968) : create_fn.call(null,G__36967,G__36968));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__36970 = nn;
var G__36971 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__36970,G__36971) : create_fn.call(null,G__36970,G__36971));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__36973 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36973,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36973,(1),null);
var seq__36977_37747 = cljs.core.seq(node_children);
var chunk__36978_37748 = null;
var count__36979_37749 = (0);
var i__36980_37750 = (0);
while(true){
if((i__36980_37750 < count__36979_37749)){
var child_struct_37751 = chunk__36978_37748.cljs$core$IIndexed$_nth$arity$2(null,i__36980_37750);
var children_37752 = shadow.dom.dom_node(child_struct_37751);
if(cljs.core.seq_QMARK_(children_37752)){
var seq__37011_37753 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_37752));
var chunk__37013_37754 = null;
var count__37014_37755 = (0);
var i__37015_37756 = (0);
while(true){
if((i__37015_37756 < count__37014_37755)){
var child_37757 = chunk__37013_37754.cljs$core$IIndexed$_nth$arity$2(null,i__37015_37756);
if(cljs.core.truth_(child_37757)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37757);


var G__37758 = seq__37011_37753;
var G__37759 = chunk__37013_37754;
var G__37760 = count__37014_37755;
var G__37761 = (i__37015_37756 + (1));
seq__37011_37753 = G__37758;
chunk__37013_37754 = G__37759;
count__37014_37755 = G__37760;
i__37015_37756 = G__37761;
continue;
} else {
var G__37763 = seq__37011_37753;
var G__37764 = chunk__37013_37754;
var G__37765 = count__37014_37755;
var G__37766 = (i__37015_37756 + (1));
seq__37011_37753 = G__37763;
chunk__37013_37754 = G__37764;
count__37014_37755 = G__37765;
i__37015_37756 = G__37766;
continue;
}
} else {
var temp__5735__auto___37767 = cljs.core.seq(seq__37011_37753);
if(temp__5735__auto___37767){
var seq__37011_37768__$1 = temp__5735__auto___37767;
if(cljs.core.chunked_seq_QMARK_(seq__37011_37768__$1)){
var c__4609__auto___37769 = cljs.core.chunk_first(seq__37011_37768__$1);
var G__37770 = cljs.core.chunk_rest(seq__37011_37768__$1);
var G__37771 = c__4609__auto___37769;
var G__37772 = cljs.core.count(c__4609__auto___37769);
var G__37773 = (0);
seq__37011_37753 = G__37770;
chunk__37013_37754 = G__37771;
count__37014_37755 = G__37772;
i__37015_37756 = G__37773;
continue;
} else {
var child_37778 = cljs.core.first(seq__37011_37768__$1);
if(cljs.core.truth_(child_37778)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37778);


var G__37779 = cljs.core.next(seq__37011_37768__$1);
var G__37780 = null;
var G__37781 = (0);
var G__37782 = (0);
seq__37011_37753 = G__37779;
chunk__37013_37754 = G__37780;
count__37014_37755 = G__37781;
i__37015_37756 = G__37782;
continue;
} else {
var G__37787 = cljs.core.next(seq__37011_37768__$1);
var G__37788 = null;
var G__37789 = (0);
var G__37790 = (0);
seq__37011_37753 = G__37787;
chunk__37013_37754 = G__37788;
count__37014_37755 = G__37789;
i__37015_37756 = G__37790;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_37752);
}


var G__37791 = seq__36977_37747;
var G__37792 = chunk__36978_37748;
var G__37793 = count__36979_37749;
var G__37794 = (i__36980_37750 + (1));
seq__36977_37747 = G__37791;
chunk__36978_37748 = G__37792;
count__36979_37749 = G__37793;
i__36980_37750 = G__37794;
continue;
} else {
var temp__5735__auto___37795 = cljs.core.seq(seq__36977_37747);
if(temp__5735__auto___37795){
var seq__36977_37799__$1 = temp__5735__auto___37795;
if(cljs.core.chunked_seq_QMARK_(seq__36977_37799__$1)){
var c__4609__auto___37800 = cljs.core.chunk_first(seq__36977_37799__$1);
var G__37801 = cljs.core.chunk_rest(seq__36977_37799__$1);
var G__37802 = c__4609__auto___37800;
var G__37803 = cljs.core.count(c__4609__auto___37800);
var G__37804 = (0);
seq__36977_37747 = G__37801;
chunk__36978_37748 = G__37802;
count__36979_37749 = G__37803;
i__36980_37750 = G__37804;
continue;
} else {
var child_struct_37805 = cljs.core.first(seq__36977_37799__$1);
var children_37806 = shadow.dom.dom_node(child_struct_37805);
if(cljs.core.seq_QMARK_(children_37806)){
var seq__37021_37807 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_37806));
var chunk__37023_37808 = null;
var count__37024_37809 = (0);
var i__37025_37810 = (0);
while(true){
if((i__37025_37810 < count__37024_37809)){
var child_37811 = chunk__37023_37808.cljs$core$IIndexed$_nth$arity$2(null,i__37025_37810);
if(cljs.core.truth_(child_37811)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37811);


var G__37815 = seq__37021_37807;
var G__37816 = chunk__37023_37808;
var G__37817 = count__37024_37809;
var G__37818 = (i__37025_37810 + (1));
seq__37021_37807 = G__37815;
chunk__37023_37808 = G__37816;
count__37024_37809 = G__37817;
i__37025_37810 = G__37818;
continue;
} else {
var G__37819 = seq__37021_37807;
var G__37820 = chunk__37023_37808;
var G__37821 = count__37024_37809;
var G__37822 = (i__37025_37810 + (1));
seq__37021_37807 = G__37819;
chunk__37023_37808 = G__37820;
count__37024_37809 = G__37821;
i__37025_37810 = G__37822;
continue;
}
} else {
var temp__5735__auto___37823__$1 = cljs.core.seq(seq__37021_37807);
if(temp__5735__auto___37823__$1){
var seq__37021_37824__$1 = temp__5735__auto___37823__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37021_37824__$1)){
var c__4609__auto___37825 = cljs.core.chunk_first(seq__37021_37824__$1);
var G__37826 = cljs.core.chunk_rest(seq__37021_37824__$1);
var G__37827 = c__4609__auto___37825;
var G__37828 = cljs.core.count(c__4609__auto___37825);
var G__37829 = (0);
seq__37021_37807 = G__37826;
chunk__37023_37808 = G__37827;
count__37024_37809 = G__37828;
i__37025_37810 = G__37829;
continue;
} else {
var child_37830 = cljs.core.first(seq__37021_37824__$1);
if(cljs.core.truth_(child_37830)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37830);


var G__37831 = cljs.core.next(seq__37021_37824__$1);
var G__37832 = null;
var G__37833 = (0);
var G__37834 = (0);
seq__37021_37807 = G__37831;
chunk__37023_37808 = G__37832;
count__37024_37809 = G__37833;
i__37025_37810 = G__37834;
continue;
} else {
var G__37835 = cljs.core.next(seq__37021_37824__$1);
var G__37836 = null;
var G__37837 = (0);
var G__37838 = (0);
seq__37021_37807 = G__37835;
chunk__37023_37808 = G__37836;
count__37024_37809 = G__37837;
i__37025_37810 = G__37838;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_37806);
}


var G__37839 = cljs.core.next(seq__36977_37799__$1);
var G__37840 = null;
var G__37841 = (0);
var G__37842 = (0);
seq__36977_37747 = G__37839;
chunk__36978_37748 = G__37840;
count__36979_37749 = G__37841;
i__36980_37750 = G__37842;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__37042 = cljs.core.seq(node);
var chunk__37043 = null;
var count__37044 = (0);
var i__37045 = (0);
while(true){
if((i__37045 < count__37044)){
var n = chunk__37043.cljs$core$IIndexed$_nth$arity$2(null,i__37045);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__37847 = seq__37042;
var G__37848 = chunk__37043;
var G__37849 = count__37044;
var G__37850 = (i__37045 + (1));
seq__37042 = G__37847;
chunk__37043 = G__37848;
count__37044 = G__37849;
i__37045 = G__37850;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37042);
if(temp__5735__auto__){
var seq__37042__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37042__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__37042__$1);
var G__37851 = cljs.core.chunk_rest(seq__37042__$1);
var G__37852 = c__4609__auto__;
var G__37853 = cljs.core.count(c__4609__auto__);
var G__37854 = (0);
seq__37042 = G__37851;
chunk__37043 = G__37852;
count__37044 = G__37853;
i__37045 = G__37854;
continue;
} else {
var n = cljs.core.first(seq__37042__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__37855 = cljs.core.next(seq__37042__$1);
var G__37856 = null;
var G__37857 = (0);
var G__37858 = (0);
seq__37042 = G__37855;
chunk__37043 = G__37856;
count__37044 = G__37857;
i__37045 = G__37858;
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
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__37052 = arguments.length;
switch (G__37052) {
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

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__37058 = arguments.length;
switch (G__37058) {
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

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

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
var G__37067 = arguments.length;
switch (G__37067) {
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

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4185__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

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
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4795__auto__ = [];
var len__4789__auto___37870 = arguments.length;
var i__4790__auto___37871 = (0);
while(true){
if((i__4790__auto___37871 < len__4789__auto___37870)){
args__4795__auto__.push((arguments[i__4790__auto___37871]));

var G__37872 = (i__4790__auto___37871 + (1));
i__4790__auto___37871 = G__37872;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__37087_37873 = cljs.core.seq(nodes);
var chunk__37088_37874 = null;
var count__37089_37875 = (0);
var i__37090_37876 = (0);
while(true){
if((i__37090_37876 < count__37089_37875)){
var node_37877 = chunk__37088_37874.cljs$core$IIndexed$_nth$arity$2(null,i__37090_37876);
fragment.appendChild(shadow.dom._to_dom(node_37877));


var G__37878 = seq__37087_37873;
var G__37879 = chunk__37088_37874;
var G__37880 = count__37089_37875;
var G__37881 = (i__37090_37876 + (1));
seq__37087_37873 = G__37878;
chunk__37088_37874 = G__37879;
count__37089_37875 = G__37880;
i__37090_37876 = G__37881;
continue;
} else {
var temp__5735__auto___37882 = cljs.core.seq(seq__37087_37873);
if(temp__5735__auto___37882){
var seq__37087_37883__$1 = temp__5735__auto___37882;
if(cljs.core.chunked_seq_QMARK_(seq__37087_37883__$1)){
var c__4609__auto___37884 = cljs.core.chunk_first(seq__37087_37883__$1);
var G__37885 = cljs.core.chunk_rest(seq__37087_37883__$1);
var G__37886 = c__4609__auto___37884;
var G__37887 = cljs.core.count(c__4609__auto___37884);
var G__37888 = (0);
seq__37087_37873 = G__37885;
chunk__37088_37874 = G__37886;
count__37089_37875 = G__37887;
i__37090_37876 = G__37888;
continue;
} else {
var node_37889 = cljs.core.first(seq__37087_37883__$1);
fragment.appendChild(shadow.dom._to_dom(node_37889));


var G__37890 = cljs.core.next(seq__37087_37883__$1);
var G__37891 = null;
var G__37892 = (0);
var G__37893 = (0);
seq__37087_37873 = G__37890;
chunk__37088_37874 = G__37891;
count__37089_37875 = G__37892;
i__37090_37876 = G__37893;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq37080){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37080));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__37094_37895 = cljs.core.seq(scripts);
var chunk__37095_37896 = null;
var count__37096_37897 = (0);
var i__37097_37898 = (0);
while(true){
if((i__37097_37898 < count__37096_37897)){
var vec__37104_37899 = chunk__37095_37896.cljs$core$IIndexed$_nth$arity$2(null,i__37097_37898);
var script_tag_37900 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37104_37899,(0),null);
var script_body_37901 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37104_37899,(1),null);
eval(script_body_37901);


var G__37902 = seq__37094_37895;
var G__37903 = chunk__37095_37896;
var G__37904 = count__37096_37897;
var G__37905 = (i__37097_37898 + (1));
seq__37094_37895 = G__37902;
chunk__37095_37896 = G__37903;
count__37096_37897 = G__37904;
i__37097_37898 = G__37905;
continue;
} else {
var temp__5735__auto___37906 = cljs.core.seq(seq__37094_37895);
if(temp__5735__auto___37906){
var seq__37094_37907__$1 = temp__5735__auto___37906;
if(cljs.core.chunked_seq_QMARK_(seq__37094_37907__$1)){
var c__4609__auto___37908 = cljs.core.chunk_first(seq__37094_37907__$1);
var G__37909 = cljs.core.chunk_rest(seq__37094_37907__$1);
var G__37910 = c__4609__auto___37908;
var G__37911 = cljs.core.count(c__4609__auto___37908);
var G__37912 = (0);
seq__37094_37895 = G__37909;
chunk__37095_37896 = G__37910;
count__37096_37897 = G__37911;
i__37097_37898 = G__37912;
continue;
} else {
var vec__37107_37913 = cljs.core.first(seq__37094_37907__$1);
var script_tag_37914 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37107_37913,(0),null);
var script_body_37915 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37107_37913,(1),null);
eval(script_body_37915);


var G__37916 = cljs.core.next(seq__37094_37907__$1);
var G__37917 = null;
var G__37918 = (0);
var G__37919 = (0);
seq__37094_37895 = G__37916;
chunk__37095_37896 = G__37917;
count__37096_37897 = G__37918;
i__37097_37898 = G__37919;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__37110){
var vec__37111 = p__37110;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37111,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37111,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__37115 = arguments.length;
switch (G__37115) {
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

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
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
var seq__37119 = cljs.core.seq(style_keys);
var chunk__37120 = null;
var count__37121 = (0);
var i__37122 = (0);
while(true){
if((i__37122 < count__37121)){
var it = chunk__37120.cljs$core$IIndexed$_nth$arity$2(null,i__37122);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__37930 = seq__37119;
var G__37931 = chunk__37120;
var G__37932 = count__37121;
var G__37933 = (i__37122 + (1));
seq__37119 = G__37930;
chunk__37120 = G__37931;
count__37121 = G__37932;
i__37122 = G__37933;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37119);
if(temp__5735__auto__){
var seq__37119__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37119__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__37119__$1);
var G__37934 = cljs.core.chunk_rest(seq__37119__$1);
var G__37935 = c__4609__auto__;
var G__37936 = cljs.core.count(c__4609__auto__);
var G__37937 = (0);
seq__37119 = G__37934;
chunk__37120 = G__37935;
count__37121 = G__37936;
i__37122 = G__37937;
continue;
} else {
var it = cljs.core.first(seq__37119__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__37938 = cljs.core.next(seq__37119__$1);
var G__37939 = null;
var G__37940 = (0);
var G__37941 = (0);
seq__37119 = G__37938;
chunk__37120 = G__37939;
count__37121 = G__37940;
i__37122 = G__37941;
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
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k37128,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__37132 = k37128;
var G__37132__$1 = (((G__37132 instanceof cljs.core.Keyword))?G__37132.fqn:null);
switch (G__37132__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k37128,else__4442__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__37134){
var vec__37135 = p__37134;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37135,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37135,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37127){
var self__ = this;
var G__37127__$1 = this;
return (new cljs.core.RecordIter((0),G__37127__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (coll__4436__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
})(this__4435__auto____$1);
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this37129,other37130){
var self__ = this;
var this37129__$1 = this;
return (((!((other37130 == null)))) && ((this37129__$1.constructor === other37130.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37129__$1.x,other37130.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37129__$1.y,other37130.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37129__$1.__extmap,other37130.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__37127){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__37144 = cljs.core.keyword_identical_QMARK_;
var expr__37145 = k__4447__auto__;
if(cljs.core.truth_((pred__37144.cljs$core$IFn$_invoke$arity$2 ? pred__37144.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__37145) : pred__37144.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__37145)))){
return (new shadow.dom.Coordinate(G__37127,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__37144.cljs$core$IFn$_invoke$arity$2 ? pred__37144.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__37145) : pred__37144.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__37145)))){
return (new shadow.dom.Coordinate(self__.x,G__37127,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__37127),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__37127){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__37127,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4445__auto__,(0)),cljs.core._nth(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__37131){
var extmap__4478__auto__ = (function (){var G__37147 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__37131,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__37131)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__37147);
} else {
return G__37147;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__37131),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__37131),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
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
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k37193,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__37204 = k37193;
var G__37204__$1 = (((G__37204 instanceof cljs.core.Keyword))?G__37204.fqn:null);
switch (G__37204__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k37193,else__4442__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__37220){
var vec__37221 = p__37220;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37221,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37221,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Size{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37192){
var self__ = this;
var G__37192__$1 = this;
return (new cljs.core.RecordIter((0),G__37192__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (coll__4436__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
})(this__4435__auto____$1);
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this37194,other37195){
var self__ = this;
var this37194__$1 = this;
return (((!((other37195 == null)))) && ((this37194__$1.constructor === other37195.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37194__$1.w,other37195.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37194__$1.h,other37195.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37194__$1.__extmap,other37195.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__37192){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__37241 = cljs.core.keyword_identical_QMARK_;
var expr__37242 = k__4447__auto__;
if(cljs.core.truth_((pred__37241.cljs$core$IFn$_invoke$arity$2 ? pred__37241.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__37242) : pred__37241.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__37242)))){
return (new shadow.dom.Size(G__37192,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__37241.cljs$core$IFn$_invoke$arity$2 ? pred__37241.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__37242) : pred__37241.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__37242)))){
return (new shadow.dom.Size(self__.w,G__37192,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__37192),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__37192){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__37192,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4445__auto__,(0)),cljs.core._nth(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__37197){
var extmap__4478__auto__ = (function (){var G__37258 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__37197,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__37197)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__37258);
} else {
return G__37258;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__37197),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__37197),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
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
var a__4663__auto__ = opts;
var l__4664__auto__ = a__4663__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4664__auto__)){
var G__37966 = (i + (1));
var G__37967 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__37966;
ret = G__37967;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37295){
var vec__37296 = p__37295;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37296,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37296,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__37302 = arguments.length;
switch (G__37302) {
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

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
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
var G__37973 = ps;
var G__37974 = (i + (1));
el__$1 = G__37973;
i = G__37974;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__37349 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37349,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37349,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37349,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__37353_37977 = cljs.core.seq(props);
var chunk__37354_37978 = null;
var count__37355_37979 = (0);
var i__37356_37980 = (0);
while(true){
if((i__37356_37980 < count__37355_37979)){
var vec__37379_37981 = chunk__37354_37978.cljs$core$IIndexed$_nth$arity$2(null,i__37356_37980);
var k_37982 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37379_37981,(0),null);
var v_37983 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37379_37981,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_37982);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_37982),v_37983);


var G__37984 = seq__37353_37977;
var G__37985 = chunk__37354_37978;
var G__37986 = count__37355_37979;
var G__37987 = (i__37356_37980 + (1));
seq__37353_37977 = G__37984;
chunk__37354_37978 = G__37985;
count__37355_37979 = G__37986;
i__37356_37980 = G__37987;
continue;
} else {
var temp__5735__auto___37988 = cljs.core.seq(seq__37353_37977);
if(temp__5735__auto___37988){
var seq__37353_37989__$1 = temp__5735__auto___37988;
if(cljs.core.chunked_seq_QMARK_(seq__37353_37989__$1)){
var c__4609__auto___37990 = cljs.core.chunk_first(seq__37353_37989__$1);
var G__37992 = cljs.core.chunk_rest(seq__37353_37989__$1);
var G__37993 = c__4609__auto___37990;
var G__37994 = cljs.core.count(c__4609__auto___37990);
var G__37995 = (0);
seq__37353_37977 = G__37992;
chunk__37354_37978 = G__37993;
count__37355_37979 = G__37994;
i__37356_37980 = G__37995;
continue;
} else {
var vec__37393_37996 = cljs.core.first(seq__37353_37989__$1);
var k_37997 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37393_37996,(0),null);
var v_37998 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37393_37996,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_37997);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_37997),v_37998);


var G__38000 = cljs.core.next(seq__37353_37989__$1);
var G__38001 = null;
var G__38002 = (0);
var G__38003 = (0);
seq__37353_37977 = G__38000;
chunk__37354_37978 = G__38001;
count__37355_37979 = G__38002;
i__37356_37980 = G__38003;
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
var vec__37404 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37404,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37404,(1),null);
var seq__37407_38005 = cljs.core.seq(node_children);
var chunk__37409_38006 = null;
var count__37410_38007 = (0);
var i__37411_38008 = (0);
while(true){
if((i__37411_38008 < count__37410_38007)){
var child_struct_38009 = chunk__37409_38006.cljs$core$IIndexed$_nth$arity$2(null,i__37411_38008);
if((!((child_struct_38009 == null)))){
if(typeof child_struct_38009 === 'string'){
var text_38010 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_38010),child_struct_38009].join(''));
} else {
var children_38011 = shadow.dom.svg_node(child_struct_38009);
if(cljs.core.seq_QMARK_(children_38011)){
var seq__37437_38012 = cljs.core.seq(children_38011);
var chunk__37439_38013 = null;
var count__37440_38014 = (0);
var i__37441_38015 = (0);
while(true){
if((i__37441_38015 < count__37440_38014)){
var child_38016 = chunk__37439_38013.cljs$core$IIndexed$_nth$arity$2(null,i__37441_38015);
if(cljs.core.truth_(child_38016)){
node.appendChild(child_38016);


var G__38017 = seq__37437_38012;
var G__38018 = chunk__37439_38013;
var G__38019 = count__37440_38014;
var G__38020 = (i__37441_38015 + (1));
seq__37437_38012 = G__38017;
chunk__37439_38013 = G__38018;
count__37440_38014 = G__38019;
i__37441_38015 = G__38020;
continue;
} else {
var G__38021 = seq__37437_38012;
var G__38022 = chunk__37439_38013;
var G__38023 = count__37440_38014;
var G__38024 = (i__37441_38015 + (1));
seq__37437_38012 = G__38021;
chunk__37439_38013 = G__38022;
count__37440_38014 = G__38023;
i__37441_38015 = G__38024;
continue;
}
} else {
var temp__5735__auto___38025 = cljs.core.seq(seq__37437_38012);
if(temp__5735__auto___38025){
var seq__37437_38026__$1 = temp__5735__auto___38025;
if(cljs.core.chunked_seq_QMARK_(seq__37437_38026__$1)){
var c__4609__auto___38027 = cljs.core.chunk_first(seq__37437_38026__$1);
var G__38028 = cljs.core.chunk_rest(seq__37437_38026__$1);
var G__38029 = c__4609__auto___38027;
var G__38030 = cljs.core.count(c__4609__auto___38027);
var G__38031 = (0);
seq__37437_38012 = G__38028;
chunk__37439_38013 = G__38029;
count__37440_38014 = G__38030;
i__37441_38015 = G__38031;
continue;
} else {
var child_38032 = cljs.core.first(seq__37437_38026__$1);
if(cljs.core.truth_(child_38032)){
node.appendChild(child_38032);


var G__38033 = cljs.core.next(seq__37437_38026__$1);
var G__38034 = null;
var G__38035 = (0);
var G__38036 = (0);
seq__37437_38012 = G__38033;
chunk__37439_38013 = G__38034;
count__37440_38014 = G__38035;
i__37441_38015 = G__38036;
continue;
} else {
var G__38037 = cljs.core.next(seq__37437_38026__$1);
var G__38038 = null;
var G__38039 = (0);
var G__38040 = (0);
seq__37437_38012 = G__38037;
chunk__37439_38013 = G__38038;
count__37440_38014 = G__38039;
i__37441_38015 = G__38040;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_38011);
}
}


var G__38041 = seq__37407_38005;
var G__38042 = chunk__37409_38006;
var G__38043 = count__37410_38007;
var G__38044 = (i__37411_38008 + (1));
seq__37407_38005 = G__38041;
chunk__37409_38006 = G__38042;
count__37410_38007 = G__38043;
i__37411_38008 = G__38044;
continue;
} else {
var G__38045 = seq__37407_38005;
var G__38046 = chunk__37409_38006;
var G__38047 = count__37410_38007;
var G__38048 = (i__37411_38008 + (1));
seq__37407_38005 = G__38045;
chunk__37409_38006 = G__38046;
count__37410_38007 = G__38047;
i__37411_38008 = G__38048;
continue;
}
} else {
var temp__5735__auto___38049 = cljs.core.seq(seq__37407_38005);
if(temp__5735__auto___38049){
var seq__37407_38050__$1 = temp__5735__auto___38049;
if(cljs.core.chunked_seq_QMARK_(seq__37407_38050__$1)){
var c__4609__auto___38051 = cljs.core.chunk_first(seq__37407_38050__$1);
var G__38052 = cljs.core.chunk_rest(seq__37407_38050__$1);
var G__38053 = c__4609__auto___38051;
var G__38054 = cljs.core.count(c__4609__auto___38051);
var G__38055 = (0);
seq__37407_38005 = G__38052;
chunk__37409_38006 = G__38053;
count__37410_38007 = G__38054;
i__37411_38008 = G__38055;
continue;
} else {
var child_struct_38059 = cljs.core.first(seq__37407_38050__$1);
if((!((child_struct_38059 == null)))){
if(typeof child_struct_38059 === 'string'){
var text_38060 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_38060),child_struct_38059].join(''));
} else {
var children_38061 = shadow.dom.svg_node(child_struct_38059);
if(cljs.core.seq_QMARK_(children_38061)){
var seq__37452_38062 = cljs.core.seq(children_38061);
var chunk__37454_38063 = null;
var count__37455_38064 = (0);
var i__37456_38065 = (0);
while(true){
if((i__37456_38065 < count__37455_38064)){
var child_38066 = chunk__37454_38063.cljs$core$IIndexed$_nth$arity$2(null,i__37456_38065);
if(cljs.core.truth_(child_38066)){
node.appendChild(child_38066);


var G__38067 = seq__37452_38062;
var G__38068 = chunk__37454_38063;
var G__38069 = count__37455_38064;
var G__38070 = (i__37456_38065 + (1));
seq__37452_38062 = G__38067;
chunk__37454_38063 = G__38068;
count__37455_38064 = G__38069;
i__37456_38065 = G__38070;
continue;
} else {
var G__38071 = seq__37452_38062;
var G__38072 = chunk__37454_38063;
var G__38073 = count__37455_38064;
var G__38074 = (i__37456_38065 + (1));
seq__37452_38062 = G__38071;
chunk__37454_38063 = G__38072;
count__37455_38064 = G__38073;
i__37456_38065 = G__38074;
continue;
}
} else {
var temp__5735__auto___38075__$1 = cljs.core.seq(seq__37452_38062);
if(temp__5735__auto___38075__$1){
var seq__37452_38076__$1 = temp__5735__auto___38075__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37452_38076__$1)){
var c__4609__auto___38077 = cljs.core.chunk_first(seq__37452_38076__$1);
var G__38078 = cljs.core.chunk_rest(seq__37452_38076__$1);
var G__38079 = c__4609__auto___38077;
var G__38080 = cljs.core.count(c__4609__auto___38077);
var G__38081 = (0);
seq__37452_38062 = G__38078;
chunk__37454_38063 = G__38079;
count__37455_38064 = G__38080;
i__37456_38065 = G__38081;
continue;
} else {
var child_38082 = cljs.core.first(seq__37452_38076__$1);
if(cljs.core.truth_(child_38082)){
node.appendChild(child_38082);


var G__38083 = cljs.core.next(seq__37452_38076__$1);
var G__38084 = null;
var G__38085 = (0);
var G__38086 = (0);
seq__37452_38062 = G__38083;
chunk__37454_38063 = G__38084;
count__37455_38064 = G__38085;
i__37456_38065 = G__38086;
continue;
} else {
var G__38087 = cljs.core.next(seq__37452_38076__$1);
var G__38088 = null;
var G__38089 = (0);
var G__38090 = (0);
seq__37452_38062 = G__38087;
chunk__37454_38063 = G__38088;
count__37455_38064 = G__38089;
i__37456_38065 = G__38090;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_38061);
}
}


var G__38091 = cljs.core.next(seq__37407_38050__$1);
var G__38092 = null;
var G__38093 = (0);
var G__38094 = (0);
seq__37407_38005 = G__38091;
chunk__37409_38006 = G__38092;
count__37410_38007 = G__38093;
i__37411_38008 = G__38094;
continue;
} else {
var G__38095 = cljs.core.next(seq__37407_38050__$1);
var G__38096 = null;
var G__38097 = (0);
var G__38098 = (0);
seq__37407_38005 = G__38095;
chunk__37409_38006 = G__38096;
count__37410_38007 = G__38097;
i__37411_38008 = G__38098;
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

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___38100 = arguments.length;
var i__4790__auto___38101 = (0);
while(true){
if((i__4790__auto___38101 < len__4789__auto___38100)){
args__4795__auto__.push((arguments[i__4790__auto___38101]));

var G__38102 = (i__4790__auto___38101 + (1));
i__4790__auto___38101 = G__38102;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq37466){
var G__37467 = cljs.core.first(seq37466);
var seq37466__$1 = cljs.core.next(seq37466);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37467,seq37466__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__37470 = arguments.length;
switch (G__37470) {
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

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4174__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4174__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4174__auto__;
}
})())){
var c__33891__auto___38117 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33892__auto__ = (function (){var switch__33701__auto__ = (function (state_37479){
var state_val_37480 = (state_37479[(1)]);
if((state_val_37480 === (1))){
var state_37479__$1 = state_37479;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37479__$1,(2),once_or_cleanup);
} else {
if((state_val_37480 === (2))){
var inst_37476 = (state_37479[(2)]);
var inst_37477 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_37479__$1 = (function (){var statearr_37487 = state_37479;
(statearr_37487[(7)] = inst_37476);

return statearr_37487;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_37479__$1,inst_37477);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__33702__auto__ = null;
var shadow$dom$state_machine__33702__auto____0 = (function (){
var statearr_37491 = [null,null,null,null,null,null,null,null];
(statearr_37491[(0)] = shadow$dom$state_machine__33702__auto__);

(statearr_37491[(1)] = (1));

return statearr_37491;
});
var shadow$dom$state_machine__33702__auto____1 = (function (state_37479){
while(true){
var ret_value__33703__auto__ = (function (){try{while(true){
var result__33704__auto__ = switch__33701__auto__(state_37479);
if(cljs.core.keyword_identical_QMARK_(result__33704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33704__auto__;
}
break;
}
}catch (e37492){if((e37492 instanceof Object)){
var ex__33705__auto__ = e37492;
var statearr_37493_38123 = state_37479;
(statearr_37493_38123[(5)] = ex__33705__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37479);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37492;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38125 = state_37479;
state_37479 = G__38125;
continue;
} else {
return ret_value__33703__auto__;
}
break;
}
});
shadow$dom$state_machine__33702__auto__ = function(state_37479){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__33702__auto____0.call(this);
case 1:
return shadow$dom$state_machine__33702__auto____1.call(this,state_37479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__33702__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__33702__auto____0;
shadow$dom$state_machine__33702__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__33702__auto____1;
return shadow$dom$state_machine__33702__auto__;
})()
})();
var state__33893__auto__ = (function (){var statearr_37495 = f__33892__auto__();
(statearr_37495[(6)] = c__33891__auto___38117);

return statearr_37495;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33893__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
