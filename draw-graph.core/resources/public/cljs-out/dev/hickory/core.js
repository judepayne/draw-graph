// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('hickory.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hickory.utils');
goog.require('clojure.zip');
goog.require('goog.string');

/**
 * Objects that can be represented as Hiccup nodes implement this protocol in
 * order to make the conversion.
 * @interface
 */
hickory.core.HiccupRepresentable = function(){};

/**
 * Converts the node given into a hiccup-format data structure. The
 *   node must have an implementation of the HiccupRepresentable
 *   protocol; nodes created by parse or parse-fragment already do.
 */
hickory.core.as_hiccup = (function hickory$core$as_hiccup(this$){
if((((!((this$ == null)))) && ((!((this$.hickory$core$HiccupRepresentable$as_hiccup$arity$1 == null)))))){
return this$.hickory$core$HiccupRepresentable$as_hiccup$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (hickory.core.as_hiccup[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (hickory.core.as_hiccup["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("HiccupRepresentable.as-hiccup",this$);
}
}
}
});


/**
 * Objects that can be represented as HTML DOM node maps, similar to
 * clojure.xml, implement this protocol to make the conversion.
 * 
 * Each DOM node will be a map or string (for Text/CDATASections). Nodes that
 * are maps have the appropriate subset of the keys
 * 
 *   :type     - [:comment, :document, :document-type, :element]
 *   :tag      - node's tag, check :type to see if applicable
 *   :attrs    - node's attributes as a map, check :type to see if applicable
 *   :content  - node's child nodes, in a vector, check :type to see if
 *               applicable
 * @interface
 */
hickory.core.HickoryRepresentable = function(){};

/**
 * Converts the node given into a hickory-format data structure. The
 *   node must have an implementation of the HickoryRepresentable protocol;
 *   nodes created by parse or parse-fragment already do.
 */
hickory.core.as_hickory = (function hickory$core$as_hickory(this$){
if((((!((this$ == null)))) && ((!((this$.hickory$core$HickoryRepresentable$as_hickory$arity$1 == null)))))){
return this$.hickory$core$HickoryRepresentable$as_hickory$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (hickory.core.as_hickory[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (hickory.core.as_hickory["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("HickoryRepresentable.as-hickory",this$);
}
}
}
});

hickory.core.node_type = (function hickory$core$node_type(type){
return (Node[[cljs.core.str.cljs$core$IFn$_invoke$arity$1(type),"_NODE"].join('')]);
});
hickory.core.Attribute = hickory.core.node_type("ATTRIBUTE");
hickory.core.Comment = hickory.core.node_type("COMMENT");
hickory.core.Document = hickory.core.node_type("DOCUMENT");
hickory.core.DocumentType = hickory.core.node_type("DOCUMENT_TYPE");
hickory.core.Element = hickory.core.node_type("ELEMENT");
hickory.core.Text = hickory.core.node_type("TEXT");
hickory.core.extend_type_with_seqable = (function hickory$core$extend_type_with_seqable(t){
t.prototype.cljs$core$ISeqable$ = cljs.core.PROTOCOL_SENTINEL;

return t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (array){
var array__$1 = this;
return cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(array__$1);
});
});
hickory.core.extend_type_with_seqable(NodeList);
if((typeof NamedNodeMap !== 'undefined')){
hickory.core.extend_type_with_seqable(NamedNodeMap);
} else {
}
if((typeof MozNamedAttrMap !== 'undefined')){
hickory.core.extend_type_with_seqable(MozNamedAttrMap);
} else {
}
hickory.core.format_doctype = (function hickory$core$format_doctype(dt){
var name = (dt["name"]);
var publicId = (dt["publicId"]);
var systemId = (dt["systemId"]);
if((!(cljs.core.empty_QMARK_(publicId)))){
return goog.string.format("<!DOCTYPE %s PUBLIC \"%s\" \"%s\">",name,publicId,systemId);
} else {
return ["<!DOCTYPE ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),">"].join('');
}
});
goog.object.set(hickory.core.HiccupRepresentable,"object",true);

var G__16230_16236 = hickory.core.as_hiccup;
var G__16231_16237 = "object";
var G__16232_16238 = ((function (G__16230_16236,G__16231_16237){
return (function (this$){
var pred__16233 = cljs.core._EQ_;
var expr__16234 = (this$["nodeType"]);
if(cljs.core.truth_((pred__16233.cljs$core$IFn$_invoke$arity$2 ? pred__16233.cljs$core$IFn$_invoke$arity$2(hickory.core.Attribute,expr__16234) : pred__16233.call(null,hickory.core.Attribute,expr__16234)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hickory.utils.lower_case_keyword((this$["name"])),(this$["value"])], null);
} else {
if(cljs.core.truth_((pred__16233.cljs$core$IFn$_invoke$arity$2 ? pred__16233.cljs$core$IFn$_invoke$arity$2(hickory.core.Comment,expr__16234) : pred__16233.call(null,hickory.core.Comment,expr__16234)))){
return ["<!--",cljs.core.str.cljs$core$IFn$_invoke$arity$1((this$["data"])),"-->"].join('');
} else {
if(cljs.core.truth_((pred__16233.cljs$core$IFn$_invoke$arity$2 ? pred__16233.cljs$core$IFn$_invoke$arity$2(hickory.core.Document,expr__16234) : pred__16233.call(null,hickory.core.Document,expr__16234)))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(hickory.core.as_hiccup,(this$["childNodes"]));
} else {
if(cljs.core.truth_((pred__16233.cljs$core$IFn$_invoke$arity$2 ? pred__16233.cljs$core$IFn$_invoke$arity$2(hickory.core.DocumentType,expr__16234) : pred__16233.call(null,hickory.core.DocumentType,expr__16234)))){
return hickory.core.format_doctype(this$);
} else {
if(cljs.core.truth_((pred__16233.cljs$core$IFn$_invoke$arity$2 ? pred__16233.cljs$core$IFn$_invoke$arity$2(hickory.core.Element,expr__16234) : pred__16233.call(null,hickory.core.Element,expr__16234)))){
var tag = hickory.utils.lower_case_keyword((this$["tagName"]));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(hickory.core.as_hiccup,(this$["attributes"])))], null),(cljs.core.truth_((hickory.utils.unescapable_content.cljs$core$IFn$_invoke$arity$1 ? hickory.utils.unescapable_content.cljs$core$IFn$_invoke$arity$1(tag) : hickory.utils.unescapable_content.call(null,tag)))?cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (tag,pred__16233,expr__16234,G__16230_16236,G__16231_16237){
return (function (p1__16229_SHARP_){
return (p1__16229_SHARP_["wholeText"]);
});})(tag,pred__16233,expr__16234,G__16230_16236,G__16231_16237))
,(this$["childNodes"])):cljs.core.map.cljs$core$IFn$_invoke$arity$2(hickory.core.as_hiccup,(this$["childNodes"])))));
} else {
if(cljs.core.truth_((pred__16233.cljs$core$IFn$_invoke$arity$2 ? pred__16233.cljs$core$IFn$_invoke$arity$2(hickory.core.Text,expr__16234) : pred__16233.call(null,hickory.core.Text,expr__16234)))){
return hickory.utils.html_escape((this$["wholeText"]));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__16234)].join('')));
}
}
}
}
}
}
});})(G__16230_16236,G__16231_16237))
;
goog.object.set(G__16230_16236,G__16231_16237,G__16232_16238);
goog.object.set(hickory.core.HickoryRepresentable,"object",true);

var G__16239_16245 = hickory.core.as_hickory;
var G__16240_16246 = "object";
var G__16241_16247 = ((function (G__16239_16245,G__16240_16246){
return (function (this$){
var pred__16242 = cljs.core._EQ_;
var expr__16243 = (this$["nodeType"]);
if(cljs.core.truth_((pred__16242.cljs$core$IFn$_invoke$arity$2 ? pred__16242.cljs$core$IFn$_invoke$arity$2(hickory.core.Attribute,expr__16243) : pred__16242.call(null,hickory.core.Attribute,expr__16243)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hickory.utils.lower_case_keyword((this$["name"])),(this$["value"])], null);
} else {
if(cljs.core.truth_((pred__16242.cljs$core$IFn$_invoke$arity$2 ? pred__16242.cljs$core$IFn$_invoke$arity$2(hickory.core.Comment,expr__16243) : pred__16242.call(null,hickory.core.Comment,expr__16243)))){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$comment,cljs.core.cst$kw$content,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(this$["data"])], null)], null);
} else {
if(cljs.core.truth_((pred__16242.cljs$core$IFn$_invoke$arity$2 ? pred__16242.cljs$core$IFn$_invoke$arity$2(hickory.core.Document,expr__16243) : pred__16242.call(null,hickory.core.Document,expr__16243)))){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$document,cljs.core.cst$kw$content,cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(hickory.core.as_hickory,(this$["childNodes"]))))], null);
} else {
if(cljs.core.truth_((pred__16242.cljs$core$IFn$_invoke$arity$2 ? pred__16242.cljs$core$IFn$_invoke$arity$2(hickory.core.DocumentType,expr__16243) : pred__16242.call(null,hickory.core.DocumentType,expr__16243)))){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$document_DASH_type,cljs.core.cst$kw$attrs,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,(this$["name"]),cljs.core.cst$kw$publicid,(this$["publicId"]),cljs.core.cst$kw$systemid,(this$["systemId"])], null)], null);
} else {
if(cljs.core.truth_((pred__16242.cljs$core$IFn$_invoke$arity$2 ? pred__16242.cljs$core$IFn$_invoke$arity$2(hickory.core.Element,expr__16243) : pred__16242.call(null,hickory.core.Element,expr__16243)))){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$element,cljs.core.cst$kw$attrs,cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(hickory.core.as_hickory,(this$["attributes"])))),cljs.core.cst$kw$tag,hickory.utils.lower_case_keyword((this$["tagName"])),cljs.core.cst$kw$content,cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(hickory.core.as_hickory,(this$["childNodes"]))))], null);
} else {
if(cljs.core.truth_((pred__16242.cljs$core$IFn$_invoke$arity$2 ? pred__16242.cljs$core$IFn$_invoke$arity$2(hickory.core.Text,expr__16243) : pred__16242.call(null,hickory.core.Text,expr__16243)))){
return (this$["wholeText"]);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__16243)].join('')));
}
}
}
}
}
}
});})(G__16239_16245,G__16240_16246))
;
goog.object.set(G__16239_16245,G__16240_16246,G__16241_16247);
hickory.core.extract_doctype = (function hickory$core$extract_doctype(s){
var temp__5720__auto__ = cljs.core.second((function (){var or__4131__auto__ = cljs.core.re_find(/<!DOCTYPE ([^>]*)>/,s);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.re_find(/<!doctype ([^>]*)>/,s);
}
})());
if(cljs.core.truth_(temp__5720__auto__)){
var doctype = temp__5720__auto__;
return cljs.core.re_find(/([^\s]*)(\s+PUBLIC\s+[\"]?([^\"]*)[\"]?\s+[\"]?([^\"]*)[\"]?)?/,doctype);
} else {
return null;
}
});
hickory.core.remove_el = (function hickory$core$remove_el(el){
return (el["parentNode"]).removeChild(el);
});
hickory.core.parse_dom_with_domparser = (function hickory$core$parse_dom_with_domparser(s){
if((typeof DOMParser !== 'undefined')){
return (new DOMParser()).parseFromString(s,"text/html");
} else {
return null;
}
});
/**
 * Parse an HTML document (or fragment) as a DOM using document.implementation.createHTMLDocument and document.write.
 */
hickory.core.parse_dom_with_write = (function hickory$core$parse_dom_with_write(s){
var doc = document.implementation.createHTMLDocument("");
var doctype_el = (doc["doctype"]);
if(cljs.core.truth_(hickory.core.extract_doctype(s))){
} else {
hickory.core.remove_el(doctype_el);
}

var temp__5720__auto___16248 = cljs.core.first((doc["head"]["childNodes"]));
if(cljs.core.truth_(temp__5720__auto___16248)){
var title_el_16249 = temp__5720__auto___16248;
if(cljs.core.empty_QMARK_((title_el_16249["text"]))){
hickory.core.remove_el(title_el_16249);
} else {
}
} else {
}

doc.write(s);

return doc;
});
/**
 * Parse an entire HTML document into a DOM structure that can be
 * used as input to as-hiccup or as-hickory.
 * 
 * ```klipse
 *   (-> (parse "<a style=\"visibility:hidden\">foo</a><div style=\"color:green\"><p>Hello</p></div>")
 *  as-hiccup)
 * ```
 * 
 * ```klipse
 *   (-> (parse "<a style=\"visibility:hidden\">foo</a><div style=\"color:green\"><p>Hello</p></div>")
 *  as-hickory)
 * ```
 * 
 * 
 *   
 */
hickory.core.parse = (function hickory$core$parse(s){
var or__4131__auto__ = hickory.core.parse_dom_with_domparser(s);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return hickory.core.parse_dom_with_write(s);
}
});
/**
 * Parse an HTML fragment (some group of tags that might be at home somewhere
 * in the tag hierarchy under <body>) into a list of DOM elements that can
 * each be passed as input to as-hiccup or as-hickory.
 */
hickory.core.parse_fragment = (function hickory$core$parse_fragment(s){
return (hickory.core.parse(s)["body"]["childNodes"]);
});
