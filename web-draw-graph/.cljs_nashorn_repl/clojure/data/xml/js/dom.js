// Compiled by ClojureScript 1.10.439 {:target :nashorn}
goog.provide('clojure.data.xml.js.dom');
goog.require('cljs.core');
goog.require('clojure.data.xml.name');
goog.require('clojure.data.xml.node');
clojure.data.xml.js.dom.doc = (new DOMParser()).parseFromString("<d />","text/xml");
/**
 * Create a Text node
 */
clojure.data.xml.js.dom.text_node = (function clojure$data$xml$js$dom$text_node(s){
return clojure.data.xml.js.dom.doc.createTextNode(s);
});
/**
 * Create an xml element from a content collection and optional metadata
 */
clojure.data.xml.js.dom.element_STAR_ = (function clojure$data$xml$js$dom$element_STAR_(var_args){
var G__30192 = arguments.length;
switch (G__30192) {
case 4:
return clojure.data.xml.js.dom.element_STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return clojure.data.xml.js.dom.element_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.xml.js.dom.element_STAR_.cljs$core$IFn$_invoke$arity$4 = (function (tag,attrs,content,meta){
var el = clojure.data.xml.js.dom.element_STAR_.call(null,tag,attrs,content);
var x30193_30196 = el;
x30193_30196.cljs$core$IMeta$ = cljs.core.PROTOCOL_SENTINEL;

x30193_30196.cljs$core$IMeta$_meta$arity$1 = ((function (x30193_30196,el){
return (function (_){
var ___$1 = this;
return meta;
});})(x30193_30196,el))
;

x30193_30196.cljs$core$IWithMeta$ = cljs.core.PROTOCOL_SENTINEL;

x30193_30196.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (x30193_30196,el){
return (function (_,meta__$1){
var ___$1 = this;
var x30194 = cljs.core.clone.call(null,el);
x30194.cljs$core$IMeta$ = cljs.core.PROTOCOL_SENTINEL;

x30194.cljs$core$IMeta$_meta$arity$1 = ((function (x30194,___$1,x30193_30196,el){
return (function (___$2){
var ___$3 = this;
return meta__$1;
});})(x30194,___$1,x30193_30196,el))
;

x30194.cljs$core$IWithMeta$ = cljs.core.PROTOCOL_SENTINEL;

x30194.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (x30194,___$1,x30193_30196,el){
return (function (___$2,meta__$2){
var ___$3 = this;
return cljs.core._with_meta.call(null,el,meta__$2);
});})(x30194,___$1,x30193_30196,el))
;

return x30194;
});})(x30193_30196,el))
;


return el;
});

clojure.data.xml.js.dom.element_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (tag,attrs,content){
var el = clojure.data.xml.js.dom.doc.createElementNS(clojure.data.xml.name.qname_uri.call(null,tag),clojure.data.xml.name.qname_local.call(null,tag));
cljs.core.reduce_kv.call(null,((function (el){
return (function (_,k,v){
var uri = clojure.data.xml.name.qname_uri.call(null,k);
if(cljs.core._EQ_.call(null,uri,"http://www.w3.org/2000/xmlns/")){
return el.setAttribute(["xmlns:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.data.xml.name.qname_local.call(null,k))].join(''),v);
} else {
return el.setAttributeNS(uri,clojure.data.xml.name.qname_local.call(null,k),v);
}
});})(el))
,null,attrs);

cljs.core.reduce.call(null,((function (el){
return (function (_,n){
return el.appendChild(((typeof n === 'string')?clojure.data.xml.js.dom.text_node.call(null,n):n));
});})(el))
,null,content);

return el;
});

clojure.data.xml.js.dom.element_STAR_.cljs$lang$maxFixedArity = 4;

/**
 * Create an xml Element from content varargs
 */
clojure.data.xml.js.dom.element = (function clojure$data$xml$js$dom$element(var_args){
var G__30201 = arguments.length;
switch (G__30201) {
case 1:
return clojure.data.xml.js.dom.element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.data.xml.js.dom.element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4662__auto__ = [];
var len__4641__auto___30203 = arguments.length;
var i__4642__auto___30204 = (0);
while(true){
if((i__4642__auto___30204 < len__4641__auto___30203)){
args_arr__4662__auto__.push((arguments[i__4642__auto___30204]));

var G__30205 = (i__4642__auto___30204 + (1));
i__4642__auto___30204 = G__30205;
continue;
} else {
}
break;
}

var argseq__4663__auto__ = (new cljs.core.IndexedSeq(args_arr__4662__auto__.slice((2)),(0),null));
return clojure.data.xml.js.dom.element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4663__auto__);

}
});

clojure.data.xml.js.dom.element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return clojure.data.xml.js.dom.element_STAR_.call(null,tag,null,null);
});

clojure.data.xml.js.dom.element.cljs$core$IFn$_invoke$arity$2 = (function (tag,attrs){
return clojure.data.xml.js.dom.element_STAR_.call(null,tag,attrs,null);
});

clojure.data.xml.js.dom.element.cljs$core$IFn$_invoke$arity$variadic = (function (tag,attrs,content){
return clojure.data.xml.js.dom.element_STAR_.call(null,tag,attrs,content);
});

/** @this {Function} */
clojure.data.xml.js.dom.element.cljs$lang$applyTo = (function (seq30198){
var G__30199 = cljs.core.first.call(null,seq30198);
var seq30198__$1 = cljs.core.next.call(null,seq30198);
var G__30200 = cljs.core.first.call(null,seq30198__$1);
var seq30198__$2 = cljs.core.next.call(null,seq30198__$1);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30199,G__30200,seq30198__$2);
});

clojure.data.xml.js.dom.element.cljs$lang$maxFixedArity = (2);

/**
 * Create a CData node
 */
clojure.data.xml.js.dom.cdata = (function clojure$data$xml$js$dom$cdata(content){
return clojure.data.xml.js.dom.doc.createCDATASection(content);
});
/**
 * Create a Comment node
 */
clojure.data.xml.js.dom.xml_comment = (function clojure$data$xml$js$dom$xml_comment(content){
return clojure.data.xml.js.dom.doc.createComment(content);
});
/**
 * Create a NodeList
 */
clojure.data.xml.js.dom.node_list = (function clojure$data$xml$js$dom$node_list(elements){
var f = clojure.data.xml.js.dom.doc.createDocumentFragment();
var seq__30206_30210 = cljs.core.seq.call(null,elements);
var chunk__30207_30211 = null;
var count__30208_30212 = (0);
var i__30209_30213 = (0);
while(true){
if((i__30209_30213 < count__30208_30212)){
var el_30214 = cljs.core._nth.call(null,chunk__30207_30211,i__30209_30213);
f.appendChild(clojure.data.xml.js.dom.element_node.call(null,el_30214));


var G__30215 = seq__30206_30210;
var G__30216 = chunk__30207_30211;
var G__30217 = count__30208_30212;
var G__30218 = (i__30209_30213 + (1));
seq__30206_30210 = G__30215;
chunk__30207_30211 = G__30216;
count__30208_30212 = G__30217;
i__30209_30213 = G__30218;
continue;
} else {
var temp__5720__auto___30219 = cljs.core.seq.call(null,seq__30206_30210);
if(temp__5720__auto___30219){
var seq__30206_30220__$1 = temp__5720__auto___30219;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30206_30220__$1)){
var c__4461__auto___30221 = cljs.core.chunk_first.call(null,seq__30206_30220__$1);
var G__30222 = cljs.core.chunk_rest.call(null,seq__30206_30220__$1);
var G__30223 = c__4461__auto___30221;
var G__30224 = cljs.core.count.call(null,c__4461__auto___30221);
var G__30225 = (0);
seq__30206_30210 = G__30222;
chunk__30207_30211 = G__30223;
count__30208_30212 = G__30224;
i__30209_30213 = G__30225;
continue;
} else {
var el_30226 = cljs.core.first.call(null,seq__30206_30220__$1);
f.appendChild(clojure.data.xml.js.dom.element_node.call(null,el_30226));


var G__30227 = cljs.core.next.call(null,seq__30206_30220__$1);
var G__30228 = null;
var G__30229 = (0);
var G__30230 = (0);
seq__30206_30210 = G__30227;
chunk__30207_30211 = G__30228;
count__30208_30212 = G__30229;
i__30209_30213 = G__30230;
continue;
}
} else {
}
}
break;
}

return f.childNodes;
});
clojure.data.xml.js.dom.Text = cljs.core.type.call(null,clojure.data.xml.js.dom.text_node.call(null,""));
clojure.data.xml.js.dom.Element = cljs.core.type.call(null,clojure.data.xml.js.dom.element.call(null,new cljs.core.Keyword(null,"e","e",1381269198)));
clojure.data.xml.js.dom.NamedNodeMap = cljs.core.type.call(null,clojure.data.xml.js.dom.element.call(null,new cljs.core.Keyword(null,"e","e",1381269198)).attributes);
clojure.data.xml.js.dom.NodeList = cljs.core.type.call(null,clojure.data.xml.js.dom.node_list.call(null,cljs.core.PersistentVector.EMPTY));
clojure.data.xml.js.dom.Attr = cljs.core.type.call(null,(clojure.data.xml.js.dom.element.call(null,new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),"1"], null)).attributes[(0)]));
clojure.data.xml.js.dom.CData = cljs.core.type.call(null,clojure.data.xml.js.dom.cdata.call(null,""));
clojure.data.xml.js.dom.Comment = cljs.core.type.call(null,clojure.data.xml.js.dom.xml_comment.call(null,""));
/**
 * Coerce xml elements to dom nodes
 */
clojure.data.xml.js.dom.element_node = (function clojure$data$xml$js$dom$element_node(el){
if(typeof el === 'string'){
return clojure.data.xml.js.dom.text_node.call(null,el);
} else {
if((el instanceof clojure.data.xml.node.CData)){
return clojure.data.xml.js.dom.cdata.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(el));
} else {
if((el instanceof clojure.data.xml.node.Comment)){
return clojure.data.xml.js.dom.xml_comment.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(el));
} else {
if((el instanceof clojure.data.xml.js.dom.Element)){
return el;
} else {
if((el instanceof clojure.data.xml.js.dom.CData)){
return el;
} else {
if((el instanceof clojure.data.xml.js.dom.Comment)){
return el;
} else {
if((!((el.item == null)))){
return el;
} else {
if((el instanceof clojure.data.xml.js.dom.Text)){
return el;
} else {
if((((!((el == null))))?(((((el.cljs$lang$protocol_mask$partition0$ & (256))) || ((cljs.core.PROTOCOL_SENTINEL === el.cljs$core$ILookup$))))?true:(((!el.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,el):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,el))){
return clojure.data.xml.js.dom.element_STAR_.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(el),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(el),cljs.core.map.call(null,clojure.data.xml.js.dom.element_node,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(el)));
} else {
if((((!((el == null))))?(((((el.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === el.cljs$core$ISequential$))))?true:(((!el.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISequential,el):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISequential,el))){
return clojure.data.xml.js.dom.node_list.call(null,el);
} else {
throw cljs.core.ex_info.call(null,"Cannot coerce",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),el], null));

}
}
}
}
}
}
}
}
}
}
});
clojure.data.xml.js.dom.dom_element_tag = (function clojure$data$xml$js$dom$dom_element_tag(el){
return clojure.data.xml.name.qname.call(null,el.namespaceURI,el.localName);
});
clojure.data.xml.js.dom.xmlns_attr_QMARK_ = (function clojure$data$xml$js$dom$xmlns_attr_QMARK_(a){
return (clojure.data.xml.name.xmlns_uri === a.namespaceURI);
});
clojure.data.xml.js.dom.remove_xmlns_attrs_xf = cljs.core.remove.call(null,clojure.data.xml.js.dom.xmlns_attr_QMARK_);
clojure.data.xml.js.dom.remove_xmlns_attrs = cljs.core.partial.call(null,cljs.core.into,cljs.core.PersistentArrayMap.EMPTY,clojure.data.xml.js.dom.remove_xmlns_attrs_xf);
clojure.data.xml.js.dom.filter_xmlns_attrs_xf = cljs.core.filter.call(null,clojure.data.xml.js.dom.xmlns_attr_QMARK_);
clojure.data.xml.js.dom.filter_xmlns_attrs = cljs.core.partial.call(null,cljs.core.into,cljs.core.PersistentArrayMap.EMPTY,clojure.data.xml.js.dom.filter_xmlns_attrs_xf);
clojure.data.xml.js.dom.dom_element_attrs = (function clojure$data$xml$js$dom$dom_element_attrs(var_args){
var G__30234 = arguments.length;
switch (G__30234) {
case 1:
return clojure.data.xml.js.dom.dom_element_attrs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.data.xml.js.dom.dom_element_attrs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.xml.js.dom.dom_element_attrs.cljs$core$IFn$_invoke$arity$1 = (function (el){
return clojure.data.xml.js.dom.dom_element_attrs.call(null,clojure.data.xml.js.dom.remove_xmlns_attrs_xf,el);
});

clojure.data.xml.js.dom.dom_element_attrs.cljs$core$IFn$_invoke$arity$2 = (function (xf,el){
return cljs.core.transduce.call(null,xf,cljs.core.completing.call(null,(function (ta,attr_node){
return cljs.core.assoc_BANG_.call(null,ta,clojure.data.xml.js.dom.dom_element_tag.call(null,attr_node),attr_node.value);
}),cljs.core.persistent_BANG_),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),cljs.core.array_seq.call(null,el));
});

clojure.data.xml.js.dom.dom_element_attrs.cljs$lang$maxFixedArity = 2;

clojure.data.xml.js.dom.node_list_vec = (function clojure$data$xml$js$dom$node_list_vec(nl){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,clojure.data.xml.js.dom.element_data),cljs.core.array_seq.call(null,nl));
});
clojure.data.xml.js.dom.as_node = (function clojure$data$xml$js$dom$as_node(n){
if((n instanceof clojure.data.xml.js.dom.Text)){
return n.nodeValue;
} else {
return n;
}
});
/**
 * Coerce xml elements to element maps / content vectors
 */
clojure.data.xml.js.dom.element_data = (function clojure$data$xml$js$dom$element_data(el){
if((el instanceof clojure.data.xml.js.dom.Comment)){
return clojure.data.xml.node.xml_comment.call(null,el.data);
} else {
if((el instanceof clojure.data.xml.js.dom.CData)){
return clojure.data.xml.node.cdata.call(null,el.data);
} else {
if((el instanceof clojure.data.xml.js.dom.Text)){
return el.nodeValue;
} else {
if((el instanceof clojure.data.xml.js.dom.Element)){
return clojure.data.xml.node.element_STAR_.call(null,clojure.data.xml.js.dom.dom_element_tag.call(null,el),clojure.data.xml.js.dom.dom_element_attrs.call(null,el.attributes),clojure.data.xml.js.dom.node_list_vec.call(null,el.childNodes),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.data.xml","nss","clojure.data.xml/nss",-1153428346),clojure.data.xml.js.dom.dom_element_attrs.call(null,clojure.data.xml.js.dom.filter_xmlns_attrs_xf,el.attributes)], null));
} else {
if(cljs.core.truth_(el.getNamedItemNS)){
return clojure.data.xml.js.dom.dom_element_attrs.call(null,el);
} else {
if((el instanceof clojure.data.xml.js.dom.NodeList)){
return clojure.data.xml.js.dom.node_list_vec.call(null,el);
} else {
if(typeof el === 'string'){
return el;
} else {
if((((!((el == null))))?(((((el.cljs$lang$protocol_mask$partition0$ & (256))) || ((cljs.core.PROTOCOL_SENTINEL === el.cljs$core$ILookup$))))?true:(((!el.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,el):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,el))){
return el;
} else {
if((((!((el == null))))?(((((el.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === el.cljs$core$ISequential$))))?true:(((!el.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISequential,el):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISequential,el))){
return el;
} else {
throw cljs.core.ex_info.call(null,"Element cannot be converted to data",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"element","element",1974019749),el], null));

}
}
}
}
}
}
}
}
}
});
clojure.data.xml.js.dom.extend_dom_as_data_BANG_ = (function clojure$data$xml$js$dom$extend_dom_as_data_BANG_(){
clojure.data.xml.js.dom.Element.prototype.cljs$core$IMap$ = cljs.core.PROTOCOL_SENTINEL;

clojure.data.xml.js.dom.Element.prototype.cljs$core$IMeta$ = cljs.core.PROTOCOL_SENTINEL;

clojure.data.xml.js.dom.Element.prototype.cljs$core$IMeta$_meta$arity$1 = (function (el){
var el__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.data.xml","nss","clojure.data.xml/nss",-1153428346),clojure.data.xml.js.dom.filter_xmlns_attrs.call(null,el__$1.attributes)], null);
});

clojure.data.xml.js.dom.Element.prototype.cljs$core$ILookup$ = cljs.core.PROTOCOL_SENTINEL;

clojure.data.xml.js.dom.Element.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (el,k){
var el__$1 = this;
var G__30238 = k;
var G__30238__$1 = (((G__30238 instanceof cljs.core.Keyword))?G__30238.fqn:null);
switch (G__30238__$1) {
case "tag":
return clojure.data.xml.js.dom.dom_element_tag.call(null,el__$1);

break;
case "attrs":
return el__$1.attributes;

break;
case "content":
return el__$1.childNodes;

break;
default:
throw cljs.core.ex_info.call(null,"XML tag has no key",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),k,new cljs.core.Keyword(null,"el","el",-1618201118),el__$1], null));

}
});

clojure.data.xml.js.dom.Element.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (el,k,nf){
var el__$1 = this;
var G__30239 = k;
var G__30239__$1 = (((G__30239 instanceof cljs.core.Keyword))?G__30239.fqn:null);
switch (G__30239__$1) {
case "tag":
return clojure.data.xml.js.dom.dom_element_tag.call(null,el__$1);

break;
case "attrs":
return clojure.data.xml.js.dom.remove_xmlns_attrs.call(null,el__$1.attributes);

break;
case "content":
return el__$1.childNodes;

break;
default:
return nf;

}
});

clojure.data.xml.js.dom.Element.prototype.cljs$core$ICounted$ = cljs.core.PROTOCOL_SENTINEL;

clojure.data.xml.js.dom.Element.prototype.cljs$core$ICounted$_count$arity$1 = (function (nm){
var nm__$1 = this;
return (3);
});

clojure.data.xml.js.dom.Element.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

clojure.data.xml.js.dom.Element.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (el0,el1){
var el0__$1 = this;
return ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(el0__$1),new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(el1))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(el0__$1),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(el1))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(el0__$1),new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(el1))));

});

clojure.data.xml.js.dom.NamedNodeMap.prototype.cljs$core$IMap$ = cljs.core.PROTOCOL_SENTINEL;

clojure.data.xml.js.dom.NamedNodeMap.prototype.cljs$core$ISeqable$ = cljs.core.PROTOCOL_SENTINEL;

clojure.data.xml.js.dom.NamedNodeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nm){
var nm__$1 = this;
return cljs.core.array_seq.call(null,nm__$1);
});

clojure.data.xml.js.dom.NamedNodeMap.prototype.cljs$core$ILookup$ = cljs.core.PROTOCOL_SENTINEL;

clojure.data.xml.js.dom.NamedNodeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (attrs,attr){
var attrs__$1 = this;
var temp__5718__auto__ = attrs__$1.getNamedItemNS(clojure.data.xml.name.qname_uri.call(null,attr),clojure.data.xml.name.qname_local.call(null,attr));
if(cljs.core.truth_(temp__5718__auto__)){
var i = temp__5718__auto__;
return i.value;
} else {
return null;
}
});

clojure.data.xml.js.dom.NamedNodeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (attrs,attr,not_found){
var attrs__$1 = this;
var temp__5718__auto__ = attrs__$1.getNamedItemNS(clojure.data.xml.name.qname_uri.call(null,attr),clojure.data.xml.name.qname_local.call(null,attr));
if(cljs.core.truth_(temp__5718__auto__)){
var i = temp__5718__auto__;
return i.value;
} else {
return not_found;
}
});

clojure.data.xml.js.dom.NamedNodeMap.prototype.cljs$core$ICounted$ = cljs.core.PROTOCOL_SENTINEL;

clojure.data.xml.js.dom.NamedNodeMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (nm){
var nm__$1 = this;
return cljs.core.reduce.call(null,((function (nm__$1){
return (function (acc,attr){
if(clojure.data.xml.js.dom.xmlns_attr_QMARK_.call(null,attr)){
return acc;
} else {
return (acc + (1));
}
});})(nm__$1))
,(0),nm__$1);
});

clojure.data.xml.js.dom.NamedNodeMap.prototype.cljs$core$IKVReduce$ = cljs.core.PROTOCOL_SENTINEL;

clojure.data.xml.js.dom.NamedNodeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (nm,f,init){
var nm__$1 = this;
return cljs.core.reduce.call(null,((function (nm__$1){
return (function (acc,attr){
if(clojure.data.xml.js.dom.xmlns_attr_QMARK_.call(null,attr)){
return acc;
} else {
return f.call(null,acc,clojure.data.xml.js.dom.dom_element_tag.call(null,attr),attr.value);
}
});})(nm__$1))
,init,nm__$1);
});

clojure.data.xml.js.dom.NamedNodeMap.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

clojure.data.xml.js.dom.NamedNodeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (nm0,nm1){
var nm0__$1 = this;
var or__4047__auto__ = (nm0__$1 === nm1);
if(or__4047__auto__){
return or__4047__auto__;
} else {
var and__4036__auto__ = (cljs.core.count.call(null,nm0__$1) === cljs.core.count.call(null,nm1));
if(and__4036__auto__){
return cljs.core.reduce_kv.call(null,((function (and__4036__auto__,or__4047__auto__,nm0__$1){
return (function (_,qn,v){
var or__4047__auto____$1 = (v === cljs.core.get.call(null,nm1,qn,""));
if(or__4047__auto____$1){
return or__4047__auto____$1;
} else {
return cljs.core.reduced.call(null,false);
}
});})(and__4036__auto__,or__4047__auto__,nm0__$1))
,true,nm0__$1);
} else {
return and__4036__auto__;
}
}
});

clojure.data.xml.js.dom.NodeList.prototype.cljs$core$ISeqable$ = cljs.core.PROTOCOL_SENTINEL;

clojure.data.xml.js.dom.NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nl){
var nl__$1 = this;
return cljs.core.seq.call(null,cljs.core.map.call(null,clojure.data.xml.js.dom.as_node,cljs.core.array_seq.call(null,nl__$1)));
});

clojure.data.xml.js.dom.NodeList.prototype.cljs$core$ISequential$ = cljs.core.PROTOCOL_SENTINEL;

clojure.data.xml.js.dom.NodeList.prototype.cljs$core$ICounted$ = cljs.core.PROTOCOL_SENTINEL;

clojure.data.xml.js.dom.NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nl){
var nl__$1 = this;
return nl__$1.length;
});

clojure.data.xml.js.dom.NodeList.prototype.cljs$core$IIndexed$ = cljs.core.PROTOCOL_SENTINEL;

clojure.data.xml.js.dom.NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nl,n){
var nl__$1 = this;
return clojure.data.xml.js.dom.as_node.call(null,(nl__$1[n]));
});

clojure.data.xml.js.dom.NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nl,n,nf){
var nl__$1 = this;
if(((((0) <= n)) && ((n < nl__$1.length)))){
return clojure.data.xml.js.dom.as_node.call(null,(nl__$1[n]));
} else {
return nf;
}
});

clojure.data.xml.js.dom.NodeList.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

clojure.data.xml.js.dom.NodeList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (nl0,nl1){
var nl0__$1 = this;
var or__4047__auto__ = (nl0__$1 === nl1);
if(or__4047__auto__){
return or__4047__auto__;
} else {
var and__4036__auto__ = (cljs.core.count.call(null,nl0__$1) === cljs.core.count.call(null,nl1));
if(and__4036__auto__){
return cljs.core.reduce.call(null,((function (and__4036__auto__,or__4047__auto__,nl0__$1){
return (function (_,n){
var or__4047__auto____$1 = cljs.core._EQ_.call(null,cljs.core.nth.call(null,nl0__$1,n),cljs.core.nth.call(null,nl1,n));
if(or__4047__auto____$1){
return or__4047__auto____$1;
} else {
return cljs.core.reduced.call(null,false);
}
});})(and__4036__auto__,or__4047__auto__,nl0__$1))
,true,cljs.core.range.call(null,cljs.core.count.call(null,nl0__$1)));
} else {
return and__4036__auto__;
}
}
});

clojure.data.xml.js.dom.Text.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

clojure.data.xml.js.dom.Text.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (t0,t1){
var t0__$1 = this;
return (t0__$1.nodeValue === (((t1 instanceof clojure.data.xml.js.dom.Text))?t1.nodeValue:t1));
});

clojure.data.xml.js.dom.Attr.prototype.cljs$core$ISeqable$ = cljs.core.PROTOCOL_SENTINEL;

clojure.data.xml.js.dom.Attr.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (attr){
var attr__$1 = this;
return cljs.core.array_seq.call(null,[cljs.core.key.call(null,attr__$1),cljs.core.key.call(null,attr__$1)]);
});

clojure.data.xml.js.dom.Attr.prototype.cljs$core$IMapEntry$ = cljs.core.PROTOCOL_SENTINEL;

clojure.data.xml.js.dom.Attr.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (attr){
var attr__$1 = this;
return clojure.data.xml.js.dom.dom_element_tag.call(null,attr__$1);
});

clojure.data.xml.js.dom.Attr.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (attr){
var attr__$1 = this;
return attr__$1.value;
});

clojure.data.xml.js.dom.Attr.prototype.cljs$core$ISequential$ = cljs.core.PROTOCOL_SENTINEL;

clojure.data.xml.js.dom.Attr.prototype.cljs$core$ICounted$ = cljs.core.PROTOCOL_SENTINEL;

clojure.data.xml.js.dom.Attr.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var ___$1 = this;
return (2);
});

clojure.data.xml.js.dom.Attr.prototype.cljs$core$IIndexed$ = cljs.core.PROTOCOL_SENTINEL;

clojure.data.xml.js.dom.Attr.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (attr,n){
var attr__$1 = this;
var G__30240 = n;
switch (G__30240) {
case (0):
return cljs.core.key.call(null,attr__$1);

break;
case (1):
return cljs.core.val.call(null,attr__$1);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30240)].join('')));

}
});

clojure.data.xml.js.dom.Attr.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (attr,n,nf){
var attr__$1 = this;
var G__30241 = n;
switch (G__30241) {
case (0):
return clojure.data.xml.js.dom.dom_element_tag.call(null,attr__$1);

break;
case (1):
return attr__$1.value;

break;
default:
return nf;

}
});

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol(null,"Text","Text",-2054460644,null),clojure.data.xml.js.dom.Text,new cljs.core.Symbol(null,"Element","Element",1498489072,null),clojure.data.xml.js.dom.Element,new cljs.core.Symbol(null,"NamedNodeMap","NamedNodeMap",1757390858,null),clojure.data.xml.js.dom.NamedNodeMap,new cljs.core.Symbol(null,"NodeList","NodeList",-2117955024,null),clojure.data.xml.js.dom.NodeList], null);
});

//# sourceMappingURL=dom.js.map
