goog.provide('clojure.data.xml.protocols');
goog.require('cljs.core');

/**
 * @interface
 */
clojure.data.xml.protocols.AsQName = function(){};

/**
 * Get the name for this qname
 */
clojure.data.xml.protocols.qname_local = (function clojure$data$xml$protocols$qname_local(qname){
if((((!((qname == null)))) && ((!((qname.clojure$data$xml$protocols$AsQName$qname_local$arity$1 == null)))))){
return qname.clojure$data$xml$protocols$AsQName$qname_local$arity$1(qname);
} else {
var x__4433__auto__ = (((qname == null))?null:qname);
var m__4434__auto__ = (clojure.data.xml.protocols.qname_local[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(qname) : m__4434__auto__.call(null,qname));
} else {
var m__4431__auto__ = (clojure.data.xml.protocols.qname_local["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(qname) : m__4431__auto__.call(null,qname));
} else {
throw cljs.core.missing_protocol("AsQName.qname-local",qname);
}
}
}
});

/**
 * Get the namespace uri for this qname
 */
clojure.data.xml.protocols.qname_uri = (function clojure$data$xml$protocols$qname_uri(qname){
if((((!((qname == null)))) && ((!((qname.clojure$data$xml$protocols$AsQName$qname_uri$arity$1 == null)))))){
return qname.clojure$data$xml$protocols$AsQName$qname_uri$arity$1(qname);
} else {
var x__4433__auto__ = (((qname == null))?null:qname);
var m__4434__auto__ = (clojure.data.xml.protocols.qname_uri[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(qname) : m__4434__auto__.call(null,qname));
} else {
var m__4431__auto__ = (clojure.data.xml.protocols.qname_uri["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(qname) : m__4431__auto__.call(null,qname));
} else {
throw cljs.core.missing_protocol("AsQName.qname-uri",qname);
}
}
}
});


/**
 * Protocol for generating new events based on element type
 * @interface
 */
clojure.data.xml.protocols.EventGeneration = function(){};

/**
 * Function to generate an event for e.
 */
clojure.data.xml.protocols.gen_event = (function clojure$data$xml$protocols$gen_event(item){
if((((!((item == null)))) && ((!((item.clojure$data$xml$protocols$EventGeneration$gen_event$arity$1 == null)))))){
return item.clojure$data$xml$protocols$EventGeneration$gen_event$arity$1(item);
} else {
var x__4433__auto__ = (((item == null))?null:item);
var m__4434__auto__ = (clojure.data.xml.protocols.gen_event[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(item) : m__4434__auto__.call(null,item));
} else {
var m__4431__auto__ = (clojure.data.xml.protocols.gen_event["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(item) : m__4431__auto__.call(null,item));
} else {
throw cljs.core.missing_protocol("EventGeneration.gen-event",item);
}
}
}
});

/**
 * Returns the next set of events that should occur after e.  next-events are the
 *   events that should be generated after this one is complete.
 */
clojure.data.xml.protocols.next_events = (function clojure$data$xml$protocols$next_events(item,next_items){
if((((!((item == null)))) && ((!((item.clojure$data$xml$protocols$EventGeneration$next_events$arity$2 == null)))))){
return item.clojure$data$xml$protocols$EventGeneration$next_events$arity$2(item,next_items);
} else {
var x__4433__auto__ = (((item == null))?null:item);
var m__4434__auto__ = (clojure.data.xml.protocols.next_events[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(item,next_items) : m__4434__auto__.call(null,item,next_items));
} else {
var m__4431__auto__ = (clojure.data.xml.protocols.next_events["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(item,next_items) : m__4431__auto__.call(null,item,next_items));
} else {
throw cljs.core.missing_protocol("EventGeneration.next-events",item);
}
}
}
});


/**
 * @interface
 */
clojure.data.xml.protocols.AsElements = function(){};

/**
 * Return a seq of elements represented by an expression.
 */
clojure.data.xml.protocols.as_elements = (function clojure$data$xml$protocols$as_elements(expr){
if((((!((expr == null)))) && ((!((expr.clojure$data$xml$protocols$AsElements$as_elements$arity$1 == null)))))){
return expr.clojure$data$xml$protocols$AsElements$as_elements$arity$1(expr);
} else {
var x__4433__auto__ = (((expr == null))?null:expr);
var m__4434__auto__ = (clojure.data.xml.protocols.as_elements[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(expr) : m__4434__auto__.call(null,expr));
} else {
var m__4431__auto__ = (clojure.data.xml.protocols.as_elements["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(expr) : m__4431__auto__.call(null,expr));
} else {
throw cljs.core.missing_protocol("AsElements.as-elements",expr);
}
}
}
});


/**
 * @interface
 */
clojure.data.xml.protocols.AsXmlString = function(){};

/**
 * Serialize atribute value or content node
 */
clojure.data.xml.protocols.xml_str = (function clojure$data$xml$protocols$xml_str(node){
if((((!((node == null)))) && ((!((node.clojure$data$xml$protocols$AsXmlString$xml_str$arity$1 == null)))))){
return node.clojure$data$xml$protocols$AsXmlString$xml_str$arity$1(node);
} else {
var x__4433__auto__ = (((node == null))?null:node);
var m__4434__auto__ = (clojure.data.xml.protocols.xml_str[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(node) : m__4434__auto__.call(null,node));
} else {
var m__4431__auto__ = (clojure.data.xml.protocols.xml_str["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(node) : m__4431__auto__.call(null,node));
} else {
throw cljs.core.missing_protocol("AsXmlString.xml-str",node);
}
}
}
});


//# sourceMappingURL=clojure.data.xml.protocols.js.map
