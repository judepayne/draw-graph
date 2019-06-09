// Compiled by ClojureScript 1.10.520 {}
goog.provide('loom.attr');
goog.require('cljs.core');
goog.require('loom.graph');

/**
 * @interface
 */
loom.attr.AttrGraph = function(){};

/**
 * Add an attribute to node or edge
 */
loom.attr.add_attr = (function loom$attr$add_attr(var_args){
var G__17465 = arguments.length;
switch (G__17465) {
case 4:
return loom.attr.add_attr.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return loom.attr.add_attr.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

loom.attr.add_attr.cljs$core$IFn$_invoke$arity$4 = (function (g,node_or_edge,k,v){
if((((!((g == null)))) && ((!((g.loom$attr$AttrGraph$add_attr$arity$4 == null)))))){
return g.loom$attr$AttrGraph$add_attr$arity$4(g,node_or_edge,k,v);
} else {
var x__4433__auto__ = (((g == null))?null:g);
var m__4434__auto__ = (loom.attr.add_attr[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,g,node_or_edge,k,v);
} else {
var m__4431__auto__ = (loom.attr.add_attr["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,g,node_or_edge,k,v);
} else {
throw cljs.core.missing_protocol.call(null,"AttrGraph.add-attr",g);
}
}
}
});

loom.attr.add_attr.cljs$core$IFn$_invoke$arity$5 = (function (g,n1,n2,k,v){
if((((!((g == null)))) && ((!((g.loom$attr$AttrGraph$add_attr$arity$5 == null)))))){
return g.loom$attr$AttrGraph$add_attr$arity$5(g,n1,n2,k,v);
} else {
var x__4433__auto__ = (((g == null))?null:g);
var m__4434__auto__ = (loom.attr.add_attr[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,g,n1,n2,k,v);
} else {
var m__4431__auto__ = (loom.attr.add_attr["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,g,n1,n2,k,v);
} else {
throw cljs.core.missing_protocol.call(null,"AttrGraph.add-attr",g);
}
}
}
});

loom.attr.add_attr.cljs$lang$maxFixedArity = 5;


/**
 * Remove an attribute from a node or edge
 */
loom.attr.remove_attr = (function loom$attr$remove_attr(var_args){
var G__17467 = arguments.length;
switch (G__17467) {
case 3:
return loom.attr.remove_attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return loom.attr.remove_attr.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

loom.attr.remove_attr.cljs$core$IFn$_invoke$arity$3 = (function (g,node_or_edge,k){
if((((!((g == null)))) && ((!((g.loom$attr$AttrGraph$remove_attr$arity$3 == null)))))){
return g.loom$attr$AttrGraph$remove_attr$arity$3(g,node_or_edge,k);
} else {
var x__4433__auto__ = (((g == null))?null:g);
var m__4434__auto__ = (loom.attr.remove_attr[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,g,node_or_edge,k);
} else {
var m__4431__auto__ = (loom.attr.remove_attr["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,g,node_or_edge,k);
} else {
throw cljs.core.missing_protocol.call(null,"AttrGraph.remove-attr",g);
}
}
}
});

loom.attr.remove_attr.cljs$core$IFn$_invoke$arity$4 = (function (g,n1,n2,k){
if((((!((g == null)))) && ((!((g.loom$attr$AttrGraph$remove_attr$arity$4 == null)))))){
return g.loom$attr$AttrGraph$remove_attr$arity$4(g,n1,n2,k);
} else {
var x__4433__auto__ = (((g == null))?null:g);
var m__4434__auto__ = (loom.attr.remove_attr[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,g,n1,n2,k);
} else {
var m__4431__auto__ = (loom.attr.remove_attr["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,g,n1,n2,k);
} else {
throw cljs.core.missing_protocol.call(null,"AttrGraph.remove-attr",g);
}
}
}
});

loom.attr.remove_attr.cljs$lang$maxFixedArity = 4;


/**
 * Return the attribute on a node or edge
 */
loom.attr.attr = (function loom$attr$attr(var_args){
var G__17469 = arguments.length;
switch (G__17469) {
case 3:
return loom.attr.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return loom.attr.attr.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

loom.attr.attr.cljs$core$IFn$_invoke$arity$3 = (function (g,node_or_edge,k){
if((((!((g == null)))) && ((!((g.loom$attr$AttrGraph$attr$arity$3 == null)))))){
return g.loom$attr$AttrGraph$attr$arity$3(g,node_or_edge,k);
} else {
var x__4433__auto__ = (((g == null))?null:g);
var m__4434__auto__ = (loom.attr.attr[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,g,node_or_edge,k);
} else {
var m__4431__auto__ = (loom.attr.attr["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,g,node_or_edge,k);
} else {
throw cljs.core.missing_protocol.call(null,"AttrGraph.attr",g);
}
}
}
});

loom.attr.attr.cljs$core$IFn$_invoke$arity$4 = (function (g,n1,n2,k){
if((((!((g == null)))) && ((!((g.loom$attr$AttrGraph$attr$arity$4 == null)))))){
return g.loom$attr$AttrGraph$attr$arity$4(g,n1,n2,k);
} else {
var x__4433__auto__ = (((g == null))?null:g);
var m__4434__auto__ = (loom.attr.attr[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,g,n1,n2,k);
} else {
var m__4431__auto__ = (loom.attr.attr["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,g,n1,n2,k);
} else {
throw cljs.core.missing_protocol.call(null,"AttrGraph.attr",g);
}
}
}
});

loom.attr.attr.cljs$lang$maxFixedArity = 4;


/**
 * Return all attributes on a node or edge
 */
loom.attr.attrs = (function loom$attr$attrs(var_args){
var G__17471 = arguments.length;
switch (G__17471) {
case 2:
return loom.attr.attrs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return loom.attr.attrs.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

loom.attr.attrs.cljs$core$IFn$_invoke$arity$2 = (function (g,node_or_edge){
if((((!((g == null)))) && ((!((g.loom$attr$AttrGraph$attrs$arity$2 == null)))))){
return g.loom$attr$AttrGraph$attrs$arity$2(g,node_or_edge);
} else {
var x__4433__auto__ = (((g == null))?null:g);
var m__4434__auto__ = (loom.attr.attrs[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,g,node_or_edge);
} else {
var m__4431__auto__ = (loom.attr.attrs["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,g,node_or_edge);
} else {
throw cljs.core.missing_protocol.call(null,"AttrGraph.attrs",g);
}
}
}
});

loom.attr.attrs.cljs$core$IFn$_invoke$arity$3 = (function (g,n1,n2){
if((((!((g == null)))) && ((!((g.loom$attr$AttrGraph$attrs$arity$3 == null)))))){
return g.loom$attr$AttrGraph$attrs$arity$3(g,n1,n2);
} else {
var x__4433__auto__ = (((g == null))?null:g);
var m__4434__auto__ = (loom.attr.attrs[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,g,n1,n2);
} else {
var m__4431__auto__ = (loom.attr.attrs["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,g,n1,n2);
} else {
throw cljs.core.missing_protocol.call(null,"AttrGraph.attrs",g);
}
}
}
});

loom.attr.attrs.cljs$lang$maxFixedArity = 3;


loom.graph.BasicEditableGraph.prototype.loom$attr$AttrGraph$ = cljs.core.PROTOCOL_SENTINEL;

loom.graph.BasicEditableGraph.prototype.loom$attr$AttrGraph$add_attr$arity$4 = (function (g,node_or_edge,k,v){
var g__$1 = this;
if(cljs.core.truth_(loom.graph.has_node_QMARK_.call(null,g__$1,node_or_edge))){
return cljs.core.assoc_in.call(null,g__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),node_or_edge,k], null),v);
} else {
return loom.attr.add_attr.call(null,g__$1,loom.graph.src.call(null,node_or_edge),loom.graph.dest.call(null,node_or_edge),k,v);
}
});

loom.graph.BasicEditableGraph.prototype.loom$attr$AttrGraph$add_attr$arity$5 = (function (g,n1,n2,k,v){
var g__$1 = this;
var g__$2 = cljs.core.assoc_in.call(null,g__$1,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),n1,new cljs.core.Keyword("loom.attr","edge-attrs","loom.attr/edge-attrs",1842958026),n2,k], null),v);
var g__$3 = ((loom.graph.directed_QMARK_.call(null,g__$2))?g__$2:cljs.core.assoc_in.call(null,g__$2,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),n2,new cljs.core.Keyword("loom.attr","edge-attrs","loom.attr/edge-attrs",1842958026),n1,k], null),v));
return g__$3;
});

loom.graph.BasicEditableGraph.prototype.loom$attr$AttrGraph$remove_attr$arity$3 = (function (g,node_or_edge,k){
var g__$1 = this;
if(cljs.core.truth_(loom.graph.has_node_QMARK_.call(null,g__$1,node_or_edge))){
return cljs.core.update_in.call(null,g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),node_or_edge], null),cljs.core.dissoc,k);
} else {
return loom.attr.remove_attr.call(null,g__$1,loom.graph.src.call(null,node_or_edge),loom.graph.dest.call(null,node_or_edge),k);
}
});

loom.graph.BasicEditableGraph.prototype.loom$attr$AttrGraph$remove_attr$arity$4 = (function (g,n1,n2,k){
var g__$1 = this;
return cljs.core.update_in.call(null,g__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),n1,new cljs.core.Keyword("loom.attr","edge-attrs","loom.attr/edge-attrs",1842958026),n2], null),cljs.core.dissoc,k);
});

loom.graph.BasicEditableGraph.prototype.loom$attr$AttrGraph$attr$arity$3 = (function (g,node_or_edge,k){
var g__$1 = this;
if(cljs.core.truth_(loom.graph.has_node_QMARK_.call(null,g__$1,node_or_edge))){
return cljs.core.get_in.call(null,g__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),node_or_edge,k], null));
} else {
return loom.attr.attr.call(null,g__$1,loom.graph.src.call(null,node_or_edge),loom.graph.dest.call(null,node_or_edge),k);
}
});

loom.graph.BasicEditableGraph.prototype.loom$attr$AttrGraph$attr$arity$4 = (function (g,n1,n2,k){
var g__$1 = this;
return cljs.core.get_in.call(null,g__$1,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),n1,new cljs.core.Keyword("loom.attr","edge-attrs","loom.attr/edge-attrs",1842958026),n2,k], null));
});

loom.graph.BasicEditableGraph.prototype.loom$attr$AttrGraph$attrs$arity$2 = (function (g,node_or_edge){
var g__$1 = this;
if(cljs.core.truth_(loom.graph.has_node_QMARK_.call(null,g__$1,node_or_edge))){
return cljs.core.dissoc.call(null,cljs.core.get_in.call(null,g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),node_or_edge], null)),new cljs.core.Keyword("loom.attr","edge-attrs","loom.attr/edge-attrs",1842958026));
} else {
return loom.attr.attrs.call(null,g__$1,loom.graph.src.call(null,node_or_edge),loom.graph.dest.call(null,node_or_edge));
}
});

loom.graph.BasicEditableGraph.prototype.loom$attr$AttrGraph$attrs$arity$3 = (function (g,n1,n2){
var g__$1 = this;
var attributes = cljs.core.get_in.call(null,g__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),n1,new cljs.core.Keyword("loom.attr","edge-attrs","loom.attr/edge-attrs",1842958026),n2], null));
if(cljs.core.seq.call(null,attributes)){
return attributes;
} else {
return null;
}
});
loom.graph.BasicEditableDigraph.prototype.loom$attr$AttrGraph$ = cljs.core.PROTOCOL_SENTINEL;

loom.graph.BasicEditableDigraph.prototype.loom$attr$AttrGraph$add_attr$arity$4 = (function (g,node_or_edge,k,v){
var g__$1 = this;
if(cljs.core.truth_(loom.graph.has_node_QMARK_.call(null,g__$1,node_or_edge))){
return cljs.core.assoc_in.call(null,g__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),node_or_edge,k], null),v);
} else {
return loom.attr.add_attr.call(null,g__$1,loom.graph.src.call(null,node_or_edge),loom.graph.dest.call(null,node_or_edge),k,v);
}
});

loom.graph.BasicEditableDigraph.prototype.loom$attr$AttrGraph$add_attr$arity$5 = (function (g,n1,n2,k,v){
var g__$1 = this;
var g__$2 = cljs.core.assoc_in.call(null,g__$1,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),n1,new cljs.core.Keyword("loom.attr","edge-attrs","loom.attr/edge-attrs",1842958026),n2,k], null),v);
var g__$3 = ((loom.graph.directed_QMARK_.call(null,g__$2))?g__$2:cljs.core.assoc_in.call(null,g__$2,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),n2,new cljs.core.Keyword("loom.attr","edge-attrs","loom.attr/edge-attrs",1842958026),n1,k], null),v));
return g__$3;
});

loom.graph.BasicEditableDigraph.prototype.loom$attr$AttrGraph$remove_attr$arity$3 = (function (g,node_or_edge,k){
var g__$1 = this;
if(cljs.core.truth_(loom.graph.has_node_QMARK_.call(null,g__$1,node_or_edge))){
return cljs.core.update_in.call(null,g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),node_or_edge], null),cljs.core.dissoc,k);
} else {
return loom.attr.remove_attr.call(null,g__$1,loom.graph.src.call(null,node_or_edge),loom.graph.dest.call(null,node_or_edge),k);
}
});

loom.graph.BasicEditableDigraph.prototype.loom$attr$AttrGraph$remove_attr$arity$4 = (function (g,n1,n2,k){
var g__$1 = this;
return cljs.core.update_in.call(null,g__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),n1,new cljs.core.Keyword("loom.attr","edge-attrs","loom.attr/edge-attrs",1842958026),n2], null),cljs.core.dissoc,k);
});

loom.graph.BasicEditableDigraph.prototype.loom$attr$AttrGraph$attr$arity$3 = (function (g,node_or_edge,k){
var g__$1 = this;
if(cljs.core.truth_(loom.graph.has_node_QMARK_.call(null,g__$1,node_or_edge))){
return cljs.core.get_in.call(null,g__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),node_or_edge,k], null));
} else {
return loom.attr.attr.call(null,g__$1,loom.graph.src.call(null,node_or_edge),loom.graph.dest.call(null,node_or_edge),k);
}
});

loom.graph.BasicEditableDigraph.prototype.loom$attr$AttrGraph$attr$arity$4 = (function (g,n1,n2,k){
var g__$1 = this;
return cljs.core.get_in.call(null,g__$1,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),n1,new cljs.core.Keyword("loom.attr","edge-attrs","loom.attr/edge-attrs",1842958026),n2,k], null));
});

loom.graph.BasicEditableDigraph.prototype.loom$attr$AttrGraph$attrs$arity$2 = (function (g,node_or_edge){
var g__$1 = this;
if(cljs.core.truth_(loom.graph.has_node_QMARK_.call(null,g__$1,node_or_edge))){
return cljs.core.dissoc.call(null,cljs.core.get_in.call(null,g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),node_or_edge], null)),new cljs.core.Keyword("loom.attr","edge-attrs","loom.attr/edge-attrs",1842958026));
} else {
return loom.attr.attrs.call(null,g__$1,loom.graph.src.call(null,node_or_edge),loom.graph.dest.call(null,node_or_edge));
}
});

loom.graph.BasicEditableDigraph.prototype.loom$attr$AttrGraph$attrs$arity$3 = (function (g,n1,n2){
var g__$1 = this;
var attributes = cljs.core.get_in.call(null,g__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),n1,new cljs.core.Keyword("loom.attr","edge-attrs","loom.attr/edge-attrs",1842958026),n2], null));
if(cljs.core.seq.call(null,attributes)){
return attributes;
} else {
return null;
}
});
loom.graph.BasicEditableWeightedGraph.prototype.loom$attr$AttrGraph$ = cljs.core.PROTOCOL_SENTINEL;

loom.graph.BasicEditableWeightedGraph.prototype.loom$attr$AttrGraph$add_attr$arity$4 = (function (g,node_or_edge,k,v){
var g__$1 = this;
if(cljs.core.truth_(loom.graph.has_node_QMARK_.call(null,g__$1,node_or_edge))){
return cljs.core.assoc_in.call(null,g__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),node_or_edge,k], null),v);
} else {
return loom.attr.add_attr.call(null,g__$1,loom.graph.src.call(null,node_or_edge),loom.graph.dest.call(null,node_or_edge),k,v);
}
});

loom.graph.BasicEditableWeightedGraph.prototype.loom$attr$AttrGraph$add_attr$arity$5 = (function (g,n1,n2,k,v){
var g__$1 = this;
var g__$2 = cljs.core.assoc_in.call(null,g__$1,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),n1,new cljs.core.Keyword("loom.attr","edge-attrs","loom.attr/edge-attrs",1842958026),n2,k], null),v);
var g__$3 = ((loom.graph.directed_QMARK_.call(null,g__$2))?g__$2:cljs.core.assoc_in.call(null,g__$2,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),n2,new cljs.core.Keyword("loom.attr","edge-attrs","loom.attr/edge-attrs",1842958026),n1,k], null),v));
return g__$3;
});

loom.graph.BasicEditableWeightedGraph.prototype.loom$attr$AttrGraph$remove_attr$arity$3 = (function (g,node_or_edge,k){
var g__$1 = this;
if(cljs.core.truth_(loom.graph.has_node_QMARK_.call(null,g__$1,node_or_edge))){
return cljs.core.update_in.call(null,g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),node_or_edge], null),cljs.core.dissoc,k);
} else {
return loom.attr.remove_attr.call(null,g__$1,loom.graph.src.call(null,node_or_edge),loom.graph.dest.call(null,node_or_edge),k);
}
});

loom.graph.BasicEditableWeightedGraph.prototype.loom$attr$AttrGraph$remove_attr$arity$4 = (function (g,n1,n2,k){
var g__$1 = this;
return cljs.core.update_in.call(null,g__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),n1,new cljs.core.Keyword("loom.attr","edge-attrs","loom.attr/edge-attrs",1842958026),n2], null),cljs.core.dissoc,k);
});

loom.graph.BasicEditableWeightedGraph.prototype.loom$attr$AttrGraph$attr$arity$3 = (function (g,node_or_edge,k){
var g__$1 = this;
if(cljs.core.truth_(loom.graph.has_node_QMARK_.call(null,g__$1,node_or_edge))){
return cljs.core.get_in.call(null,g__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),node_or_edge,k], null));
} else {
return loom.attr.attr.call(null,g__$1,loom.graph.src.call(null,node_or_edge),loom.graph.dest.call(null,node_or_edge),k);
}
});

loom.graph.BasicEditableWeightedGraph.prototype.loom$attr$AttrGraph$attr$arity$4 = (function (g,n1,n2,k){
var g__$1 = this;
return cljs.core.get_in.call(null,g__$1,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),n1,new cljs.core.Keyword("loom.attr","edge-attrs","loom.attr/edge-attrs",1842958026),n2,k], null));
});

loom.graph.BasicEditableWeightedGraph.prototype.loom$attr$AttrGraph$attrs$arity$2 = (function (g,node_or_edge){
var g__$1 = this;
if(cljs.core.truth_(loom.graph.has_node_QMARK_.call(null,g__$1,node_or_edge))){
return cljs.core.dissoc.call(null,cljs.core.get_in.call(null,g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),node_or_edge], null)),new cljs.core.Keyword("loom.attr","edge-attrs","loom.attr/edge-attrs",1842958026));
} else {
return loom.attr.attrs.call(null,g__$1,loom.graph.src.call(null,node_or_edge),loom.graph.dest.call(null,node_or_edge));
}
});

loom.graph.BasicEditableWeightedGraph.prototype.loom$attr$AttrGraph$attrs$arity$3 = (function (g,n1,n2){
var g__$1 = this;
var attributes = cljs.core.get_in.call(null,g__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),n1,new cljs.core.Keyword("loom.attr","edge-attrs","loom.attr/edge-attrs",1842958026),n2], null));
if(cljs.core.seq.call(null,attributes)){
return attributes;
} else {
return null;
}
});
loom.graph.BasicEditableWeightedDigraph.prototype.loom$attr$AttrGraph$ = cljs.core.PROTOCOL_SENTINEL;

loom.graph.BasicEditableWeightedDigraph.prototype.loom$attr$AttrGraph$add_attr$arity$4 = (function (g,node_or_edge,k,v){
var g__$1 = this;
if(cljs.core.truth_(loom.graph.has_node_QMARK_.call(null,g__$1,node_or_edge))){
return cljs.core.assoc_in.call(null,g__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),node_or_edge,k], null),v);
} else {
return loom.attr.add_attr.call(null,g__$1,loom.graph.src.call(null,node_or_edge),loom.graph.dest.call(null,node_or_edge),k,v);
}
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$attr$AttrGraph$add_attr$arity$5 = (function (g,n1,n2,k,v){
var g__$1 = this;
var g__$2 = cljs.core.assoc_in.call(null,g__$1,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),n1,new cljs.core.Keyword("loom.attr","edge-attrs","loom.attr/edge-attrs",1842958026),n2,k], null),v);
var g__$3 = ((loom.graph.directed_QMARK_.call(null,g__$2))?g__$2:cljs.core.assoc_in.call(null,g__$2,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),n2,new cljs.core.Keyword("loom.attr","edge-attrs","loom.attr/edge-attrs",1842958026),n1,k], null),v));
return g__$3;
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$attr$AttrGraph$remove_attr$arity$3 = (function (g,node_or_edge,k){
var g__$1 = this;
if(cljs.core.truth_(loom.graph.has_node_QMARK_.call(null,g__$1,node_or_edge))){
return cljs.core.update_in.call(null,g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),node_or_edge], null),cljs.core.dissoc,k);
} else {
return loom.attr.remove_attr.call(null,g__$1,loom.graph.src.call(null,node_or_edge),loom.graph.dest.call(null,node_or_edge),k);
}
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$attr$AttrGraph$remove_attr$arity$4 = (function (g,n1,n2,k){
var g__$1 = this;
return cljs.core.update_in.call(null,g__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),n1,new cljs.core.Keyword("loom.attr","edge-attrs","loom.attr/edge-attrs",1842958026),n2], null),cljs.core.dissoc,k);
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$attr$AttrGraph$attr$arity$3 = (function (g,node_or_edge,k){
var g__$1 = this;
if(cljs.core.truth_(loom.graph.has_node_QMARK_.call(null,g__$1,node_or_edge))){
return cljs.core.get_in.call(null,g__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),node_or_edge,k], null));
} else {
return loom.attr.attr.call(null,g__$1,loom.graph.src.call(null,node_or_edge),loom.graph.dest.call(null,node_or_edge),k);
}
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$attr$AttrGraph$attr$arity$4 = (function (g,n1,n2,k){
var g__$1 = this;
return cljs.core.get_in.call(null,g__$1,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),n1,new cljs.core.Keyword("loom.attr","edge-attrs","loom.attr/edge-attrs",1842958026),n2,k], null));
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$attr$AttrGraph$attrs$arity$2 = (function (g,node_or_edge){
var g__$1 = this;
if(cljs.core.truth_(loom.graph.has_node_QMARK_.call(null,g__$1,node_or_edge))){
return cljs.core.dissoc.call(null,cljs.core.get_in.call(null,g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),node_or_edge], null)),new cljs.core.Keyword("loom.attr","edge-attrs","loom.attr/edge-attrs",1842958026));
} else {
return loom.attr.attrs.call(null,g__$1,loom.graph.src.call(null,node_or_edge),loom.graph.dest.call(null,node_or_edge));
}
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$attr$AttrGraph$attrs$arity$3 = (function (g,n1,n2){
var g__$1 = this;
var attributes = cljs.core.get_in.call(null,g__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),n1,new cljs.core.Keyword("loom.attr","edge-attrs","loom.attr/edge-attrs",1842958026),n2], null));
if(cljs.core.seq.call(null,attributes)){
return attributes;
} else {
return null;
}
});
loom.graph.FlyGraph.prototype.loom$attr$AttrGraph$ = cljs.core.PROTOCOL_SENTINEL;

loom.graph.FlyGraph.prototype.loom$attr$AttrGraph$add_attr$arity$4 = (function (g,node_or_edge,k,v){
var g__$1 = this;
if(cljs.core.truth_(loom.graph.has_node_QMARK_.call(null,g__$1,node_or_edge))){
return cljs.core.assoc_in.call(null,g__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),node_or_edge,k], null),v);
} else {
return loom.attr.add_attr.call(null,g__$1,loom.graph.src.call(null,node_or_edge),loom.graph.dest.call(null,node_or_edge),k,v);
}
});

loom.graph.FlyGraph.prototype.loom$attr$AttrGraph$add_attr$arity$5 = (function (g,n1,n2,k,v){
var g__$1 = this;
var g__$2 = cljs.core.assoc_in.call(null,g__$1,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),n1,new cljs.core.Keyword("loom.attr","edge-attrs","loom.attr/edge-attrs",1842958026),n2,k], null),v);
var g__$3 = ((loom.graph.directed_QMARK_.call(null,g__$2))?g__$2:cljs.core.assoc_in.call(null,g__$2,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),n2,new cljs.core.Keyword("loom.attr","edge-attrs","loom.attr/edge-attrs",1842958026),n1,k], null),v));
return g__$3;
});

loom.graph.FlyGraph.prototype.loom$attr$AttrGraph$remove_attr$arity$3 = (function (g,node_or_edge,k){
var g__$1 = this;
if(cljs.core.truth_(loom.graph.has_node_QMARK_.call(null,g__$1,node_or_edge))){
return cljs.core.update_in.call(null,g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),node_or_edge], null),cljs.core.dissoc,k);
} else {
return loom.attr.remove_attr.call(null,g__$1,loom.graph.src.call(null,node_or_edge),loom.graph.dest.call(null,node_or_edge),k);
}
});

loom.graph.FlyGraph.prototype.loom$attr$AttrGraph$remove_attr$arity$4 = (function (g,n1,n2,k){
var g__$1 = this;
return cljs.core.update_in.call(null,g__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),n1,new cljs.core.Keyword("loom.attr","edge-attrs","loom.attr/edge-attrs",1842958026),n2], null),cljs.core.dissoc,k);
});

loom.graph.FlyGraph.prototype.loom$attr$AttrGraph$attr$arity$3 = (function (g,node_or_edge,k){
var g__$1 = this;
if(cljs.core.truth_(loom.graph.has_node_QMARK_.call(null,g__$1,node_or_edge))){
return cljs.core.get_in.call(null,g__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),node_or_edge,k], null));
} else {
return loom.attr.attr.call(null,g__$1,loom.graph.src.call(null,node_or_edge),loom.graph.dest.call(null,node_or_edge),k);
}
});

loom.graph.FlyGraph.prototype.loom$attr$AttrGraph$attr$arity$4 = (function (g,n1,n2,k){
var g__$1 = this;
return cljs.core.get_in.call(null,g__$1,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),n1,new cljs.core.Keyword("loom.attr","edge-attrs","loom.attr/edge-attrs",1842958026),n2,k], null));
});

loom.graph.FlyGraph.prototype.loom$attr$AttrGraph$attrs$arity$2 = (function (g,node_or_edge){
var g__$1 = this;
if(cljs.core.truth_(loom.graph.has_node_QMARK_.call(null,g__$1,node_or_edge))){
return cljs.core.dissoc.call(null,cljs.core.get_in.call(null,g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),node_or_edge], null)),new cljs.core.Keyword("loom.attr","edge-attrs","loom.attr/edge-attrs",1842958026));
} else {
return loom.attr.attrs.call(null,g__$1,loom.graph.src.call(null,node_or_edge),loom.graph.dest.call(null,node_or_edge));
}
});

loom.graph.FlyGraph.prototype.loom$attr$AttrGraph$attrs$arity$3 = (function (g,n1,n2){
var g__$1 = this;
var attributes = cljs.core.get_in.call(null,g__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),n1,new cljs.core.Keyword("loom.attr","edge-attrs","loom.attr/edge-attrs",1842958026),n2], null));
if(cljs.core.seq.call(null,attributes)){
return attributes;
} else {
return null;
}
});
loom.graph.FlyDigraph.prototype.loom$attr$AttrGraph$ = cljs.core.PROTOCOL_SENTINEL;

loom.graph.FlyDigraph.prototype.loom$attr$AttrGraph$add_attr$arity$4 = (function (g,node_or_edge,k,v){
var g__$1 = this;
if(cljs.core.truth_(loom.graph.has_node_QMARK_.call(null,g__$1,node_or_edge))){
return cljs.core.assoc_in.call(null,g__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),node_or_edge,k], null),v);
} else {
return loom.attr.add_attr.call(null,g__$1,loom.graph.src.call(null,node_or_edge),loom.graph.dest.call(null,node_or_edge),k,v);
}
});

loom.graph.FlyDigraph.prototype.loom$attr$AttrGraph$add_attr$arity$5 = (function (g,n1,n2,k,v){
var g__$1 = this;
var g__$2 = cljs.core.assoc_in.call(null,g__$1,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),n1,new cljs.core.Keyword("loom.attr","edge-attrs","loom.attr/edge-attrs",1842958026),n2,k], null),v);
var g__$3 = ((loom.graph.directed_QMARK_.call(null,g__$2))?g__$2:cljs.core.assoc_in.call(null,g__$2,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),n2,new cljs.core.Keyword("loom.attr","edge-attrs","loom.attr/edge-attrs",1842958026),n1,k], null),v));
return g__$3;
});

loom.graph.FlyDigraph.prototype.loom$attr$AttrGraph$remove_attr$arity$3 = (function (g,node_or_edge,k){
var g__$1 = this;
if(cljs.core.truth_(loom.graph.has_node_QMARK_.call(null,g__$1,node_or_edge))){
return cljs.core.update_in.call(null,g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),node_or_edge], null),cljs.core.dissoc,k);
} else {
return loom.attr.remove_attr.call(null,g__$1,loom.graph.src.call(null,node_or_edge),loom.graph.dest.call(null,node_or_edge),k);
}
});

loom.graph.FlyDigraph.prototype.loom$attr$AttrGraph$remove_attr$arity$4 = (function (g,n1,n2,k){
var g__$1 = this;
return cljs.core.update_in.call(null,g__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),n1,new cljs.core.Keyword("loom.attr","edge-attrs","loom.attr/edge-attrs",1842958026),n2], null),cljs.core.dissoc,k);
});

loom.graph.FlyDigraph.prototype.loom$attr$AttrGraph$attr$arity$3 = (function (g,node_or_edge,k){
var g__$1 = this;
if(cljs.core.truth_(loom.graph.has_node_QMARK_.call(null,g__$1,node_or_edge))){
return cljs.core.get_in.call(null,g__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),node_or_edge,k], null));
} else {
return loom.attr.attr.call(null,g__$1,loom.graph.src.call(null,node_or_edge),loom.graph.dest.call(null,node_or_edge),k);
}
});

loom.graph.FlyDigraph.prototype.loom$attr$AttrGraph$attr$arity$4 = (function (g,n1,n2,k){
var g__$1 = this;
return cljs.core.get_in.call(null,g__$1,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),n1,new cljs.core.Keyword("loom.attr","edge-attrs","loom.attr/edge-attrs",1842958026),n2,k], null));
});

loom.graph.FlyDigraph.prototype.loom$attr$AttrGraph$attrs$arity$2 = (function (g,node_or_edge){
var g__$1 = this;
if(cljs.core.truth_(loom.graph.has_node_QMARK_.call(null,g__$1,node_or_edge))){
return cljs.core.dissoc.call(null,cljs.core.get_in.call(null,g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),node_or_edge], null)),new cljs.core.Keyword("loom.attr","edge-attrs","loom.attr/edge-attrs",1842958026));
} else {
return loom.attr.attrs.call(null,g__$1,loom.graph.src.call(null,node_or_edge),loom.graph.dest.call(null,node_or_edge));
}
});

loom.graph.FlyDigraph.prototype.loom$attr$AttrGraph$attrs$arity$3 = (function (g,n1,n2){
var g__$1 = this;
var attributes = cljs.core.get_in.call(null,g__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),n1,new cljs.core.Keyword("loom.attr","edge-attrs","loom.attr/edge-attrs",1842958026),n2], null));
if(cljs.core.seq.call(null,attributes)){
return attributes;
} else {
return null;
}
});
loom.graph.WeightedFlyGraph.prototype.loom$attr$AttrGraph$ = cljs.core.PROTOCOL_SENTINEL;

loom.graph.WeightedFlyGraph.prototype.loom$attr$AttrGraph$add_attr$arity$4 = (function (g,node_or_edge,k,v){
var g__$1 = this;
if(cljs.core.truth_(loom.graph.has_node_QMARK_.call(null,g__$1,node_or_edge))){
return cljs.core.assoc_in.call(null,g__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),node_or_edge,k], null),v);
} else {
return loom.attr.add_attr.call(null,g__$1,loom.graph.src.call(null,node_or_edge),loom.graph.dest.call(null,node_or_edge),k,v);
}
});

loom.graph.WeightedFlyGraph.prototype.loom$attr$AttrGraph$add_attr$arity$5 = (function (g,n1,n2,k,v){
var g__$1 = this;
var g__$2 = cljs.core.assoc_in.call(null,g__$1,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),n1,new cljs.core.Keyword("loom.attr","edge-attrs","loom.attr/edge-attrs",1842958026),n2,k], null),v);
var g__$3 = ((loom.graph.directed_QMARK_.call(null,g__$2))?g__$2:cljs.core.assoc_in.call(null,g__$2,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),n2,new cljs.core.Keyword("loom.attr","edge-attrs","loom.attr/edge-attrs",1842958026),n1,k], null),v));
return g__$3;
});

loom.graph.WeightedFlyGraph.prototype.loom$attr$AttrGraph$remove_attr$arity$3 = (function (g,node_or_edge,k){
var g__$1 = this;
if(cljs.core.truth_(loom.graph.has_node_QMARK_.call(null,g__$1,node_or_edge))){
return cljs.core.update_in.call(null,g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),node_or_edge], null),cljs.core.dissoc,k);
} else {
return loom.attr.remove_attr.call(null,g__$1,loom.graph.src.call(null,node_or_edge),loom.graph.dest.call(null,node_or_edge),k);
}
});

loom.graph.WeightedFlyGraph.prototype.loom$attr$AttrGraph$remove_attr$arity$4 = (function (g,n1,n2,k){
var g__$1 = this;
return cljs.core.update_in.call(null,g__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),n1,new cljs.core.Keyword("loom.attr","edge-attrs","loom.attr/edge-attrs",1842958026),n2], null),cljs.core.dissoc,k);
});

loom.graph.WeightedFlyGraph.prototype.loom$attr$AttrGraph$attr$arity$3 = (function (g,node_or_edge,k){
var g__$1 = this;
if(cljs.core.truth_(loom.graph.has_node_QMARK_.call(null,g__$1,node_or_edge))){
return cljs.core.get_in.call(null,g__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),node_or_edge,k], null));
} else {
return loom.attr.attr.call(null,g__$1,loom.graph.src.call(null,node_or_edge),loom.graph.dest.call(null,node_or_edge),k);
}
});

loom.graph.WeightedFlyGraph.prototype.loom$attr$AttrGraph$attr$arity$4 = (function (g,n1,n2,k){
var g__$1 = this;
return cljs.core.get_in.call(null,g__$1,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),n1,new cljs.core.Keyword("loom.attr","edge-attrs","loom.attr/edge-attrs",1842958026),n2,k], null));
});

loom.graph.WeightedFlyGraph.prototype.loom$attr$AttrGraph$attrs$arity$2 = (function (g,node_or_edge){
var g__$1 = this;
if(cljs.core.truth_(loom.graph.has_node_QMARK_.call(null,g__$1,node_or_edge))){
return cljs.core.dissoc.call(null,cljs.core.get_in.call(null,g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),node_or_edge], null)),new cljs.core.Keyword("loom.attr","edge-attrs","loom.attr/edge-attrs",1842958026));
} else {
return loom.attr.attrs.call(null,g__$1,loom.graph.src.call(null,node_or_edge),loom.graph.dest.call(null,node_or_edge));
}
});

loom.graph.WeightedFlyGraph.prototype.loom$attr$AttrGraph$attrs$arity$3 = (function (g,n1,n2){
var g__$1 = this;
var attributes = cljs.core.get_in.call(null,g__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),n1,new cljs.core.Keyword("loom.attr","edge-attrs","loom.attr/edge-attrs",1842958026),n2], null));
if(cljs.core.seq.call(null,attributes)){
return attributes;
} else {
return null;
}
});
loom.graph.WeightedFlyDigraph.prototype.loom$attr$AttrGraph$ = cljs.core.PROTOCOL_SENTINEL;

loom.graph.WeightedFlyDigraph.prototype.loom$attr$AttrGraph$add_attr$arity$4 = (function (g,node_or_edge,k,v){
var g__$1 = this;
if(cljs.core.truth_(loom.graph.has_node_QMARK_.call(null,g__$1,node_or_edge))){
return cljs.core.assoc_in.call(null,g__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),node_or_edge,k], null),v);
} else {
return loom.attr.add_attr.call(null,g__$1,loom.graph.src.call(null,node_or_edge),loom.graph.dest.call(null,node_or_edge),k,v);
}
});

loom.graph.WeightedFlyDigraph.prototype.loom$attr$AttrGraph$add_attr$arity$5 = (function (g,n1,n2,k,v){
var g__$1 = this;
var g__$2 = cljs.core.assoc_in.call(null,g__$1,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),n1,new cljs.core.Keyword("loom.attr","edge-attrs","loom.attr/edge-attrs",1842958026),n2,k], null),v);
var g__$3 = ((loom.graph.directed_QMARK_.call(null,g__$2))?g__$2:cljs.core.assoc_in.call(null,g__$2,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),n2,new cljs.core.Keyword("loom.attr","edge-attrs","loom.attr/edge-attrs",1842958026),n1,k], null),v));
return g__$3;
});

loom.graph.WeightedFlyDigraph.prototype.loom$attr$AttrGraph$remove_attr$arity$3 = (function (g,node_or_edge,k){
var g__$1 = this;
if(cljs.core.truth_(loom.graph.has_node_QMARK_.call(null,g__$1,node_or_edge))){
return cljs.core.update_in.call(null,g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),node_or_edge], null),cljs.core.dissoc,k);
} else {
return loom.attr.remove_attr.call(null,g__$1,loom.graph.src.call(null,node_or_edge),loom.graph.dest.call(null,node_or_edge),k);
}
});

loom.graph.WeightedFlyDigraph.prototype.loom$attr$AttrGraph$remove_attr$arity$4 = (function (g,n1,n2,k){
var g__$1 = this;
return cljs.core.update_in.call(null,g__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),n1,new cljs.core.Keyword("loom.attr","edge-attrs","loom.attr/edge-attrs",1842958026),n2], null),cljs.core.dissoc,k);
});

loom.graph.WeightedFlyDigraph.prototype.loom$attr$AttrGraph$attr$arity$3 = (function (g,node_or_edge,k){
var g__$1 = this;
if(cljs.core.truth_(loom.graph.has_node_QMARK_.call(null,g__$1,node_or_edge))){
return cljs.core.get_in.call(null,g__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),node_or_edge,k], null));
} else {
return loom.attr.attr.call(null,g__$1,loom.graph.src.call(null,node_or_edge),loom.graph.dest.call(null,node_or_edge),k);
}
});

loom.graph.WeightedFlyDigraph.prototype.loom$attr$AttrGraph$attr$arity$4 = (function (g,n1,n2,k){
var g__$1 = this;
return cljs.core.get_in.call(null,g__$1,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),n1,new cljs.core.Keyword("loom.attr","edge-attrs","loom.attr/edge-attrs",1842958026),n2,k], null));
});

loom.graph.WeightedFlyDigraph.prototype.loom$attr$AttrGraph$attrs$arity$2 = (function (g,node_or_edge){
var g__$1 = this;
if(cljs.core.truth_(loom.graph.has_node_QMARK_.call(null,g__$1,node_or_edge))){
return cljs.core.dissoc.call(null,cljs.core.get_in.call(null,g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),node_or_edge], null)),new cljs.core.Keyword("loom.attr","edge-attrs","loom.attr/edge-attrs",1842958026));
} else {
return loom.attr.attrs.call(null,g__$1,loom.graph.src.call(null,node_or_edge),loom.graph.dest.call(null,node_or_edge));
}
});

loom.graph.WeightedFlyDigraph.prototype.loom$attr$AttrGraph$attrs$arity$3 = (function (g,n1,n2){
var g__$1 = this;
var attributes = cljs.core.get_in.call(null,g__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),n1,new cljs.core.Keyword("loom.attr","edge-attrs","loom.attr/edge-attrs",1842958026),n2], null));
if(cljs.core.seq.call(null,attributes)){
return attributes;
} else {
return null;
}
});
/**
 * Returns true if g satisfies AttrGraph
 */
loom.attr.attr_QMARK_ = (function loom$attr$attr_QMARK_(g){
if((!((g == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === g.loom$attr$AttrGraph$)))){
return true;
} else {
if((!g.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,loom.attr.AttrGraph,g);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,loom.attr.AttrGraph,g);
}
});
/**
 * Adds an attribute to the given nodes
 */
loom.attr.add_attr_to_nodes = (function loom$attr$add_attr_to_nodes(g,k,v,nodes){
return cljs.core.reduce.call(null,(function (g__$1,n){
return loom.attr.add_attr.call(null,g__$1,n,k,v);
}),g,nodes);
});
/**
 * Adds an attribute to the given edges
 */
loom.attr.add_attr_to_edges = (function loom$attr$add_attr_to_edges(g,k,v,edges){
return cljs.core.reduce.call(null,(function (g__$1,p__17477){
var vec__17478 = p__17477;
var n1 = cljs.core.nth.call(null,vec__17478,(0),null);
var n2 = cljs.core.nth.call(null,vec__17478,(1),null);
return loom.attr.add_attr.call(null,g__$1,n1,n2,k,v);
}),g,edges);
});
/**
 * Adds an attribute to all nodes and edges
 */
loom.attr.add_attr_to_all = (function loom$attr$add_attr_to_all(g,k,v){
return loom.attr.add_attr_to_edges.call(null,loom.attr.add_attr_to_nodes.call(null,g,k,v,loom.graph.nodes.call(null,g)),k,v,loom.graph.edges.call(null,g));
});
/**
 * Adds attributes to all nodes and edges
 */
loom.attr.add_attrs_to_all = (function loom$attr$add_attrs_to_all(var_args){
var args__4736__auto__ = [];
var len__4730__auto___17487 = arguments.length;
var i__4731__auto___17488 = (0);
while(true){
if((i__4731__auto___17488 < len__4730__auto___17487)){
args__4736__auto__.push((arguments[i__4731__auto___17488]));

var G__17489 = (i__4731__auto___17488 + (1));
i__4731__auto___17488 = G__17489;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return loom.attr.add_attrs_to_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

loom.attr.add_attrs_to_all.cljs$core$IFn$_invoke$arity$variadic = (function (g,kvs){
return cljs.core.reduce.call(null,(function (g__$1,p__17483){
var vec__17484 = p__17483;
var k = cljs.core.nth.call(null,vec__17484,(0),null);
var v = cljs.core.nth.call(null,vec__17484,(1),null);
return loom.attr.add_attr_to_edges.call(null,loom.attr.add_attr_to_nodes.call(null,g__$1,k,v,loom.graph.nodes.call(null,g__$1)),k,v,loom.graph.edges.call(null,g__$1));
}),g,cljs.core.partition.call(null,(2),(1),kvs));
});

loom.attr.add_attrs_to_all.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
loom.attr.add_attrs_to_all.cljs$lang$applyTo = (function (seq17481){
var G__17482 = cljs.core.first.call(null,seq17481);
var seq17481__$1 = cljs.core.next.call(null,seq17481);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17482,seq17481__$1);
});

/**
 * Adds a red :color attribute to a node or edge
 */
loom.attr.hilite = (function loom$attr$hilite(var_args){
var G__17491 = arguments.length;
switch (G__17491) {
case 2:
return loom.attr.hilite.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return loom.attr.hilite.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

loom.attr.hilite.cljs$core$IFn$_invoke$arity$2 = (function (g,node){
return loom.attr.add_attr.call(null,loom.attr.add_attr.call(null,loom.attr.add_attr.call(null,loom.attr.add_attr.call(null,g,node,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"red","red",-969428204)),node,new cljs.core.Keyword(null,"fontcolor","fontcolor",473176016),new cljs.core.Keyword(null,"red","red",-969428204)),node,new cljs.core.Keyword(null,"fillcolor","fillcolor",-151540217),"#ffeeee"),node,new cljs.core.Keyword(null,"style","style",-496642736),"filled,bold");
});

loom.attr.hilite.cljs$core$IFn$_invoke$arity$3 = (function (g,n1,n2){
return loom.attr.add_attr.call(null,loom.attr.add_attr.call(null,loom.attr.add_attr.call(null,g,n1,n2,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"red","red",-969428204)),n1,n2,new cljs.core.Keyword(null,"fontcolor","fontcolor",473176016),new cljs.core.Keyword(null,"red","red",-969428204)),n1,n2,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"bold","bold",-116809535));
});

loom.attr.hilite.cljs$lang$maxFixedArity = 3;

/**
 * Hilites nodes and edges along a path
 */
loom.attr.hilite_path = (function loom$attr$hilite_path(g,path){
return cljs.core.reduce.call(null,(function (g__$1,p__17493){
var vec__17494 = p__17493;
var n1 = cljs.core.nth.call(null,vec__17494,(0),null);
var n2 = cljs.core.nth.call(null,vec__17494,(1),null);
return loom.attr.hilite.call(null,loom.attr.hilite.call(null,loom.attr.hilite.call(null,g__$1,n1),n2),n1,n2);
}),g,cljs.core.partition.call(null,(2),(1),path));
});

//# sourceMappingURL=attr.js.map
