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
var G__50834 = arguments.length;
switch (G__50834) {
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
var el = clojure.data.xml.js.dom.element_STAR_.cljs$core$IFn$_invoke$arity$3(tag,attrs,content);
var x50839_51059 = el;
x50839_51059.cljs$core$IMeta$ = cljs.core.PROTOCOL_SENTINEL;

x50839_51059.cljs$core$IMeta$_meta$arity$1 = ((function (x50839_51059,el){
return (function (_){
var ___$1 = this;
return meta;
});})(x50839_51059,el))
;

x50839_51059.cljs$core$IWithMeta$ = cljs.core.PROTOCOL_SENTINEL;

x50839_51059.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (x50839_51059,el){
return (function (_,meta__$1){
var ___$1 = this;
var x50844 = cljs.core.clone(el);
x50844.cljs$core$IMeta$ = cljs.core.PROTOCOL_SENTINEL;

x50844.cljs$core$IMeta$_meta$arity$1 = ((function (x50844,___$1,x50839_51059,el){
return (function (___$2){
var ___$3 = this;
return meta__$1;
});})(x50844,___$1,x50839_51059,el))
;

x50844.cljs$core$IWithMeta$ = cljs.core.PROTOCOL_SENTINEL;

x50844.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (x50844,___$1,x50839_51059,el){
return (function (___$2,meta__$2){
var ___$3 = this;
return cljs.core._with_meta(el,meta__$2);
});})(x50844,___$1,x50839_51059,el))
;

return x50844;
});})(x50839_51059,el))
;


return el;
});

clojure.data.xml.js.dom.element_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (tag,attrs,content){
var el = clojure.data.xml.js.dom.doc.createElementNS(clojure.data.xml.name.qname_uri(tag),clojure.data.xml.name.qname_local(tag));
cljs.core.reduce_kv(((function (el){
return (function (_,k,v){
var uri = clojure.data.xml.name.qname_uri(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(uri,"http://www.w3.org/2000/xmlns/")){
return el.setAttribute(["xmlns:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.data.xml.name.qname_local(k))].join(''),v);
} else {
return el.setAttributeNS(uri,clojure.data.xml.name.qname_local(k),v);
}
});})(el))
,null,attrs);

cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (el){
return (function (_,n){
return el.appendChild(((typeof n === 'string')?clojure.data.xml.js.dom.text_node(n):n));
});})(el))
,null,content);

return el;
});

clojure.data.xml.js.dom.element_STAR_.cljs$lang$maxFixedArity = 4;

/**
 * Create an xml Element from content varargs
 */
clojure.data.xml.js.dom.element = (function clojure$data$xml$js$dom$element(var_args){
var G__50860 = arguments.length;
switch (G__50860) {
case 1:
return clojure.data.xml.js.dom.element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.data.xml.js.dom.element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___51066 = arguments.length;
var i__4731__auto___51067 = (0);
while(true){
if((i__4731__auto___51067 < len__4730__auto___51066)){
args_arr__4751__auto__.push((arguments[i__4731__auto___51067]));

var G__51068 = (i__4731__auto___51067 + (1));
i__4731__auto___51067 = G__51068;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((2)),(0),null));
return clojure.data.xml.js.dom.element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4752__auto__);

}
});

clojure.data.xml.js.dom.element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return clojure.data.xml.js.dom.element_STAR_.cljs$core$IFn$_invoke$arity$3(tag,null,null);
});

clojure.data.xml.js.dom.element.cljs$core$IFn$_invoke$arity$2 = (function (tag,attrs){
return clojure.data.xml.js.dom.element_STAR_.cljs$core$IFn$_invoke$arity$3(tag,attrs,null);
});

clojure.data.xml.js.dom.element.cljs$core$IFn$_invoke$arity$variadic = (function (tag,attrs,content){
return clojure.data.xml.js.dom.element_STAR_.cljs$core$IFn$_invoke$arity$3(tag,attrs,content);
});

/** @this {Function} */
clojure.data.xml.js.dom.element.cljs$lang$applyTo = (function (seq50857){
var G__50858 = cljs.core.first(seq50857);
var seq50857__$1 = cljs.core.next(seq50857);
var G__50859 = cljs.core.first(seq50857__$1);
var seq50857__$2 = cljs.core.next(seq50857__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50858,G__50859,seq50857__$2);
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
var seq__50868_51074 = cljs.core.seq(elements);
var chunk__50869_51075 = null;
var count__50870_51076 = (0);
var i__50871_51077 = (0);
while(true){
if((i__50871_51077 < count__50870_51076)){
var el_51079 = chunk__50869_51075.cljs$core$IIndexed$_nth$arity$2(null,i__50871_51077);
f.appendChild((clojure.data.xml.js.dom.element_node.cljs$core$IFn$_invoke$arity$1 ? clojure.data.xml.js.dom.element_node.cljs$core$IFn$_invoke$arity$1(el_51079) : clojure.data.xml.js.dom.element_node.call(null,el_51079)));


var G__51081 = seq__50868_51074;
var G__51082 = chunk__50869_51075;
var G__51083 = count__50870_51076;
var G__51084 = (i__50871_51077 + (1));
seq__50868_51074 = G__51081;
chunk__50869_51075 = G__51082;
count__50870_51076 = G__51083;
i__50871_51077 = G__51084;
continue;
} else {
var temp__5720__auto___51085 = cljs.core.seq(seq__50868_51074);
if(temp__5720__auto___51085){
var seq__50868_51086__$1 = temp__5720__auto___51085;
if(cljs.core.chunked_seq_QMARK_(seq__50868_51086__$1)){
var c__4550__auto___51087 = cljs.core.chunk_first(seq__50868_51086__$1);
var G__51088 = cljs.core.chunk_rest(seq__50868_51086__$1);
var G__51089 = c__4550__auto___51087;
var G__51090 = cljs.core.count(c__4550__auto___51087);
var G__51091 = (0);
seq__50868_51074 = G__51088;
chunk__50869_51075 = G__51089;
count__50870_51076 = G__51090;
i__50871_51077 = G__51091;
continue;
} else {
var el_51092 = cljs.core.first(seq__50868_51086__$1);
f.appendChild((clojure.data.xml.js.dom.element_node.cljs$core$IFn$_invoke$arity$1 ? clojure.data.xml.js.dom.element_node.cljs$core$IFn$_invoke$arity$1(el_51092) : clojure.data.xml.js.dom.element_node.call(null,el_51092)));


var G__51094 = cljs.core.next(seq__50868_51086__$1);
var G__51095 = null;
var G__51096 = (0);
var G__51097 = (0);
seq__50868_51074 = G__51094;
chunk__50869_51075 = G__51095;
count__50870_51076 = G__51096;
i__50871_51077 = G__51097;
continue;
}
} else {
}
}
break;
}

return f.childNodes;
});
clojure.data.xml.js.dom.Text = cljs.core.type(clojure.data.xml.js.dom.text_node(""));
clojure.data.xml.js.dom.Element = cljs.core.type(clojure.data.xml.js.dom.element.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"e","e",1381269198)));
clojure.data.xml.js.dom.NamedNodeMap = cljs.core.type(clojure.data.xml.js.dom.element.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"e","e",1381269198)).attributes);
clojure.data.xml.js.dom.NodeList = cljs.core.type(clojure.data.xml.js.dom.node_list(cljs.core.PersistentVector.EMPTY));
clojure.data.xml.js.dom.Attr = cljs.core.type((clojure.data.xml.js.dom.element.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),"1"], null)).attributes[(0)]));
clojure.data.xml.js.dom.CData = cljs.core.type(clojure.data.xml.js.dom.cdata(""));
clojure.data.xml.js.dom.Comment = cljs.core.type(clojure.data.xml.js.dom.xml_comment(""));
/**
 * Coerce xml elements to dom nodes
 */
clojure.data.xml.js.dom.element_node = (function clojure$data$xml$js$dom$element_node(el){
if(typeof el === 'string'){
return clojure.data.xml.js.dom.text_node(el);
} else {
if((el instanceof clojure.data.xml.node.CData)){
return clojure.data.xml.js.dom.cdata(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(el));
} else {
if((el instanceof clojure.data.xml.node.Comment)){
return clojure.data.xml.js.dom.xml_comment(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(el));
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
if((((!((el == null))))?(((((el.cljs$lang$protocol_mask$partition0$ & (256))) || ((cljs.core.PROTOCOL_SENTINEL === el.cljs$core$ILookup$))))?true:(((!el.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,el):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,el))){
return clojure.data.xml.js.dom.element_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(el),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(el),cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.xml.js.dom.element_node,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(el)));
} else {
if((((!((el == null))))?(((((el.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === el.cljs$core$ISequential$))))?true:(((!el.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,el):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,el))){
return clojure.data.xml.js.dom.node_list(el);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot coerce",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),el], null));

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
return clojure.data.xml.name.qname.cljs$core$IFn$_invoke$arity$2(el.namespaceURI,el.localName);
});
clojure.data.xml.js.dom.xmlns_attr_QMARK_ = (function clojure$data$xml$js$dom$xmlns_attr_QMARK_(a){
return (clojure.data.xml.name.xmlns_uri === a.namespaceURI);
});
clojure.data.xml.js.dom.remove_xmlns_attrs_xf = cljs.core.remove.cljs$core$IFn$_invoke$arity$1(clojure.data.xml.js.dom.xmlns_attr_QMARK_);
clojure.data.xml.js.dom.remove_xmlns_attrs = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs.core.into,cljs.core.PersistentArrayMap.EMPTY,clojure.data.xml.js.dom.remove_xmlns_attrs_xf);
clojure.data.xml.js.dom.filter_xmlns_attrs_xf = cljs.core.filter.cljs$core$IFn$_invoke$arity$1(clojure.data.xml.js.dom.xmlns_attr_QMARK_);
clojure.data.xml.js.dom.filter_xmlns_attrs = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs.core.into,cljs.core.PersistentArrayMap.EMPTY,clojure.data.xml.js.dom.filter_xmlns_attrs_xf);
clojure.data.xml.js.dom.dom_element_attrs = (function clojure$data$xml$js$dom$dom_element_attrs(var_args){
var G__50909 = arguments.length;
switch (G__50909) {
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
return clojure.data.xml.js.dom.dom_element_attrs.cljs$core$IFn$_invoke$arity$2(clojure.data.xml.js.dom.remove_xmlns_attrs_xf,el);
});

clojure.data.xml.js.dom.dom_element_attrs.cljs$core$IFn$_invoke$arity$2 = (function (xf,el){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(xf,cljs.core.completing.cljs$core$IFn$_invoke$arity$2((function (ta,attr_node){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ta,clojure.data.xml.js.dom.dom_element_tag(attr_node),attr_node.value);
}),cljs.core.persistent_BANG_),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(el));
});

clojure.data.xml.js.dom.dom_element_attrs.cljs$lang$maxFixedArity = 2;

clojure.data.xml.js.dom.node_list_vec = (function clojure$data$xml$js$dom$node_list_vec(nl){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(clojure.data.xml.js.dom.element_data),cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(nl));
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
return clojure.data.xml.node.xml_comment(el.data);
} else {
if((el instanceof clojure.data.xml.js.dom.CData)){
return clojure.data.xml.node.cdata(el.data);
} else {
if((el instanceof clojure.data.xml.js.dom.Text)){
return el.nodeValue;
} else {
if((el instanceof clojure.data.xml.js.dom.Element)){
return clojure.data.xml.node.element_STAR_.cljs$core$IFn$_invoke$arity$4(clojure.data.xml.js.dom.dom_element_tag(el),clojure.data.xml.js.dom.dom_element_attrs.cljs$core$IFn$_invoke$arity$1(el.attributes),clojure.data.xml.js.dom.node_list_vec(el.childNodes),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.data.xml","nss","clojure.data.xml/nss",-1153428346),clojure.data.xml.js.dom.dom_element_attrs.cljs$core$IFn$_invoke$arity$2(clojure.data.xml.js.dom.filter_xmlns_attrs_xf,el.attributes)], null));
} else {
if(cljs.core.truth_(el.getNamedItemNS)){
return clojure.data.xml.js.dom.dom_element_attrs.cljs$core$IFn$_invoke$arity$1(el);
} else {
if((el instanceof clojure.data.xml.js.dom.NodeList)){
return clojure.data.xml.js.dom.node_list_vec(el);
} else {
if(typeof el === 'string'){
return el;
} else {
if((((!((el == null))))?(((((el.cljs$lang$protocol_mask$partition0$ & (256))) || ((cljs.core.PROTOCOL_SENTINEL === el.cljs$core$ILookup$))))?true:(((!el.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,el):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,el))){
return el;
} else {
if((((!((el == null))))?(((((el.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === el.cljs$core$ISequential$))))?true:(((!el.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,el):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,el))){
return el;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Element cannot be converted to data",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"element","element",1974019749),el], null));

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
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.data.xml","nss","clojure.data.xml/nss",-1153428346),(function (){var G__50937 = el__$1.attributes;
return (clojure.data.xml.js.dom.filter_xmlns_attrs.cljs$core$IFn$_invoke$arity$1 ? clojure.data.xml.js.dom.filter_xmlns_attrs.cljs$core$IFn$_invoke$arity$1(G__50937) : clojure.data.xml.js.dom.filter_xmlns_attrs.call(null,G__50937));
})()], null);
});

clojure.data.xml.js.dom.Element.prototype.cljs$core$ILookup$ = cljs.core.PROTOCOL_SENTINEL;

clojure.data.xml.js.dom.Element.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (el,k){
var el__$1 = this;
var G__50940 = k;
var G__50940__$1 = (((G__50940 instanceof cljs.core.Keyword))?G__50940.fqn:null);
switch (G__50940__$1) {
case "tag":
return clojure.data.xml.js.dom.dom_element_tag(el__$1);

break;
case "attrs":
return el__$1.attributes;

break;
case "content":
return el__$1.childNodes;

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("XML tag has no key",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),k,new cljs.core.Keyword(null,"el","el",-1618201118),el__$1], null));

}
});

clojure.data.xml.js.dom.Element.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (el,k,nf){
var el__$1 = this;
var G__50944 = k;
var G__50944__$1 = (((G__50944 instanceof cljs.core.Keyword))?G__50944.fqn:null);
switch (G__50944__$1) {
case "tag":
return clojure.data.xml.js.dom.dom_element_tag(el__$1);

break;
case "attrs":
var G__50949 = el__$1.attributes;
return (clojure.data.xml.js.dom.remove_xmlns_attrs.cljs$core$IFn$_invoke$arity$1 ? clojure.data.xml.js.dom.remove_xmlns_attrs.cljs$core$IFn$_invoke$arity$1(G__50949) : clojure.data.xml.js.dom.remove_xmlns_attrs.call(null,G__50949));

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
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(el0__$1),new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(el1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(el0__$1),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(el1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(el0__$1),new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(el1))));

});

clojure.data.xml.js.dom.NamedNodeMap.prototype.cljs$core$IMap$ = cljs.core.PROTOCOL_SENTINEL;

clojure.data.xml.js.dom.NamedNodeMap.prototype.cljs$core$ISeqable$ = cljs.core.PROTOCOL_SENTINEL;

clojure.data.xml.js.dom.NamedNodeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nm){
var nm__$1 = this;
return cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(nm__$1);
});

clojure.data.xml.js.dom.NamedNodeMap.prototype.cljs$core$ILookup$ = cljs.core.PROTOCOL_SENTINEL;

clojure.data.xml.js.dom.NamedNodeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (attrs,attr){
var attrs__$1 = this;
var temp__5718__auto__ = attrs__$1.getNamedItemNS(clojure.data.xml.name.qname_uri(attr),clojure.data.xml.name.qname_local(attr));
if(cljs.core.truth_(temp__5718__auto__)){
var i = temp__5718__auto__;
return i.value;
} else {
return null;
}
});

clojure.data.xml.js.dom.NamedNodeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (attrs,attr,not_found){
var attrs__$1 = this;
var temp__5718__auto__ = attrs__$1.getNamedItemNS(clojure.data.xml.name.qname_uri(attr),clojure.data.xml.name.qname_local(attr));
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (nm__$1){
return (function (acc,attr){
if(clojure.data.xml.js.dom.xmlns_attr_QMARK_(attr)){
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (nm__$1){
return (function (acc,attr){
if(clojure.data.xml.js.dom.xmlns_attr_QMARK_(attr)){
return acc;
} else {
var G__50981 = acc;
var G__50982 = clojure.data.xml.js.dom.dom_element_tag(attr);
var G__50983 = attr.value;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__50981,G__50982,G__50983) : f.call(null,G__50981,G__50982,G__50983));
}
});})(nm__$1))
,init,nm__$1);
});

clojure.data.xml.js.dom.NamedNodeMap.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

clojure.data.xml.js.dom.NamedNodeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (nm0,nm1){
var nm0__$1 = this;
var or__4131__auto__ = (nm0__$1 === nm1);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var and__4120__auto__ = (cljs.core.count(nm0__$1) === cljs.core.count(nm1));
if(and__4120__auto__){
return cljs.core.reduce_kv(((function (and__4120__auto__,or__4131__auto__,nm0__$1){
return (function (_,qn,v){
var or__4131__auto____$1 = (v === cljs.core.get.cljs$core$IFn$_invoke$arity$3(nm1,qn,""));
if(or__4131__auto____$1){
return or__4131__auto____$1;
} else {
return cljs.core.reduced(false);
}
});})(and__4120__auto__,or__4131__auto__,nm0__$1))
,true,nm0__$1);
} else {
return and__4120__auto__;
}
}
});

clojure.data.xml.js.dom.NodeList.prototype.cljs$core$ISeqable$ = cljs.core.PROTOCOL_SENTINEL;

clojure.data.xml.js.dom.NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nl){
var nl__$1 = this;
return cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.xml.js.dom.as_node,cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(nl__$1)));
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
return clojure.data.xml.js.dom.as_node((nl__$1[n]));
});

clojure.data.xml.js.dom.NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nl,n,nf){
var nl__$1 = this;
if(((((0) <= n)) && ((n < nl__$1.length)))){
return clojure.data.xml.js.dom.as_node((nl__$1[n]));
} else {
return nf;
}
});

clojure.data.xml.js.dom.NodeList.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

clojure.data.xml.js.dom.NodeList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (nl0,nl1){
var nl0__$1 = this;
var or__4131__auto__ = (nl0__$1 === nl1);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var and__4120__auto__ = (cljs.core.count(nl0__$1) === cljs.core.count(nl1));
if(and__4120__auto__){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (and__4120__auto__,or__4131__auto__,nl0__$1){
return (function (_,n){
var or__4131__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(nl0__$1,n),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(nl1,n));
if(or__4131__auto____$1){
return or__4131__auto____$1;
} else {
return cljs.core.reduced(false);
}
});})(and__4120__auto__,or__4131__auto__,nl0__$1))
,true,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(nl0__$1)));
} else {
return and__4120__auto__;
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
return cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1([cljs.core.key(attr__$1),cljs.core.key(attr__$1)]);
});

clojure.data.xml.js.dom.Attr.prototype.cljs$core$IMapEntry$ = cljs.core.PROTOCOL_SENTINEL;

clojure.data.xml.js.dom.Attr.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (attr){
var attr__$1 = this;
return clojure.data.xml.js.dom.dom_element_tag(attr__$1);
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
var G__51050 = n;
switch (G__51050) {
case (0):
return cljs.core.key(attr__$1);

break;
case (1):
return cljs.core.val(attr__$1);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51050)].join('')));

}
});

clojure.data.xml.js.dom.Attr.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (attr,n,nf){
var attr__$1 = this;
var G__51054 = n;
switch (G__51054) {
case (0):
return clojure.data.xml.js.dom.dom_element_tag(attr__$1);

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

//# sourceMappingURL=clojure.data.xml.js.dom.js.map