// Compiled by ClojureScript 1.10.520 {}
goog.provide('loom.graph');
goog.require('cljs.core');
goog.require('loom.alg_generic');

/**
 * @interface
 */
loom.graph.Graph = function(){};

/**
 * Returns a collection of the nodes in graph g
 */
loom.graph.nodes = (function loom$graph$nodes(g){
if((((!((g == null)))) && ((!((g.loom$graph$Graph$nodes$arity$1 == null)))))){
return g.loom$graph$Graph$nodes$arity$1(g);
} else {
var x__4433__auto__ = (((g == null))?null:g);
var m__4434__auto__ = (loom.graph.nodes[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,g);
} else {
var m__4431__auto__ = (loom.graph.nodes["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,g);
} else {
throw cljs.core.missing_protocol.call(null,"Graph.nodes",g);
}
}
}
});

/**
 * Edges in g. May return each edge twice in an undirected graph
 */
loom.graph.edges = (function loom$graph$edges(g){
if((((!((g == null)))) && ((!((g.loom$graph$Graph$edges$arity$1 == null)))))){
return g.loom$graph$Graph$edges$arity$1(g);
} else {
var x__4433__auto__ = (((g == null))?null:g);
var m__4434__auto__ = (loom.graph.edges[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,g);
} else {
var m__4431__auto__ = (loom.graph.edges["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,g);
} else {
throw cljs.core.missing_protocol.call(null,"Graph.edges",g);
}
}
}
});

/**
 * Returns true when node is in g
 */
loom.graph.has_node_QMARK_ = (function loom$graph$has_node_QMARK_(g,node){
if((((!((g == null)))) && ((!((g.loom$graph$Graph$has_node_QMARK_$arity$2 == null)))))){
return g.loom$graph$Graph$has_node_QMARK_$arity$2(g,node);
} else {
var x__4433__auto__ = (((g == null))?null:g);
var m__4434__auto__ = (loom.graph.has_node_QMARK_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,g,node);
} else {
var m__4431__auto__ = (loom.graph.has_node_QMARK_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,g,node);
} else {
throw cljs.core.missing_protocol.call(null,"Graph.has-node?",g);
}
}
}
});

/**
 * Returns true when edge [n1 n2] is in g
 */
loom.graph.has_edge_QMARK_ = (function loom$graph$has_edge_QMARK_(g,n1,n2){
if((((!((g == null)))) && ((!((g.loom$graph$Graph$has_edge_QMARK_$arity$3 == null)))))){
return g.loom$graph$Graph$has_edge_QMARK_$arity$3(g,n1,n2);
} else {
var x__4433__auto__ = (((g == null))?null:g);
var m__4434__auto__ = (loom.graph.has_edge_QMARK_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,g,n1,n2);
} else {
var m__4431__auto__ = (loom.graph.has_edge_QMARK_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,g,n1,n2);
} else {
throw cljs.core.missing_protocol.call(null,"Graph.has-edge?",g);
}
}
}
});

/**
 * Returns direct successors of node
 */
loom.graph.successors_STAR_ = (function loom$graph$successors_STAR_(g,node){
if((((!((g == null)))) && ((!((g.loom$graph$Graph$successors_STAR_$arity$2 == null)))))){
return g.loom$graph$Graph$successors_STAR_$arity$2(g,node);
} else {
var x__4433__auto__ = (((g == null))?null:g);
var m__4434__auto__ = (loom.graph.successors_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,g,node);
} else {
var m__4431__auto__ = (loom.graph.successors_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,g,node);
} else {
throw cljs.core.missing_protocol.call(null,"Graph.successors*",g);
}
}
}
});

/**
 * Returns the number of outgoing edges of node
 */
loom.graph.out_degree = (function loom$graph$out_degree(g,node){
if((((!((g == null)))) && ((!((g.loom$graph$Graph$out_degree$arity$2 == null)))))){
return g.loom$graph$Graph$out_degree$arity$2(g,node);
} else {
var x__4433__auto__ = (((g == null))?null:g);
var m__4434__auto__ = (loom.graph.out_degree[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,g,node);
} else {
var m__4431__auto__ = (loom.graph.out_degree["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,g,node);
} else {
throw cljs.core.missing_protocol.call(null,"Graph.out-degree",g);
}
}
}
});

/**
 * Returns all the outgoing edges of node
 */
loom.graph.out_edges = (function loom$graph$out_edges(g,node){
if((((!((g == null)))) && ((!((g.loom$graph$Graph$out_edges$arity$2 == null)))))){
return g.loom$graph$Graph$out_edges$arity$2(g,node);
} else {
var x__4433__auto__ = (((g == null))?null:g);
var m__4434__auto__ = (loom.graph.out_edges[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,g,node);
} else {
var m__4431__auto__ = (loom.graph.out_edges["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,g,node);
} else {
throw cljs.core.missing_protocol.call(null,"Graph.out-edges",g);
}
}
}
});


/**
 * @interface
 */
loom.graph.Digraph = function(){};

/**
 * Returns direct predecessors of node
 */
loom.graph.predecessors_STAR_ = (function loom$graph$predecessors_STAR_(g,node){
if((((!((g == null)))) && ((!((g.loom$graph$Digraph$predecessors_STAR_$arity$2 == null)))))){
return g.loom$graph$Digraph$predecessors_STAR_$arity$2(g,node);
} else {
var x__4433__auto__ = (((g == null))?null:g);
var m__4434__auto__ = (loom.graph.predecessors_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,g,node);
} else {
var m__4431__auto__ = (loom.graph.predecessors_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,g,node);
} else {
throw cljs.core.missing_protocol.call(null,"Digraph.predecessors*",g);
}
}
}
});

/**
 * Returns the number of direct predecessors to node
 */
loom.graph.in_degree = (function loom$graph$in_degree(g,node){
if((((!((g == null)))) && ((!((g.loom$graph$Digraph$in_degree$arity$2 == null)))))){
return g.loom$graph$Digraph$in_degree$arity$2(g,node);
} else {
var x__4433__auto__ = (((g == null))?null:g);
var m__4434__auto__ = (loom.graph.in_degree[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,g,node);
} else {
var m__4431__auto__ = (loom.graph.in_degree["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,g,node);
} else {
throw cljs.core.missing_protocol.call(null,"Digraph.in-degree",g);
}
}
}
});

/**
 * Returns all the incoming edges of node
 */
loom.graph.in_edges = (function loom$graph$in_edges(g,node){
if((((!((g == null)))) && ((!((g.loom$graph$Digraph$in_edges$arity$2 == null)))))){
return g.loom$graph$Digraph$in_edges$arity$2(g,node);
} else {
var x__4433__auto__ = (((g == null))?null:g);
var m__4434__auto__ = (loom.graph.in_edges[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,g,node);
} else {
var m__4431__auto__ = (loom.graph.in_edges["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,g,node);
} else {
throw cljs.core.missing_protocol.call(null,"Digraph.in-edges",g);
}
}
}
});

/**
 * Returns a graph with all edges reversed
 */
loom.graph.transpose = (function loom$graph$transpose(g){
if((((!((g == null)))) && ((!((g.loom$graph$Digraph$transpose$arity$1 == null)))))){
return g.loom$graph$Digraph$transpose$arity$1(g);
} else {
var x__4433__auto__ = (((g == null))?null:g);
var m__4434__auto__ = (loom.graph.transpose[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,g);
} else {
var m__4431__auto__ = (loom.graph.transpose["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,g);
} else {
throw cljs.core.missing_protocol.call(null,"Digraph.transpose",g);
}
}
}
});


/**
 * @interface
 */
loom.graph.WeightedGraph = function(){};

/**
 * Returns the weight of edge e or edge [n1 n2]
 */
loom.graph.weight_STAR_ = (function loom$graph$weight_STAR_(var_args){
var G__16977 = arguments.length;
switch (G__16977) {
case 2:
return loom.graph.weight_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return loom.graph.weight_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

loom.graph.weight_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (g,e){
if((((!((g == null)))) && ((!((g.loom$graph$WeightedGraph$weight_STAR_$arity$2 == null)))))){
return g.loom$graph$WeightedGraph$weight_STAR_$arity$2(g,e);
} else {
var x__4433__auto__ = (((g == null))?null:g);
var m__4434__auto__ = (loom.graph.weight_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,g,e);
} else {
var m__4431__auto__ = (loom.graph.weight_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,g,e);
} else {
throw cljs.core.missing_protocol.call(null,"WeightedGraph.weight*",g);
}
}
}
});

loom.graph.weight_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (g,n1,n2){
if((((!((g == null)))) && ((!((g.loom$graph$WeightedGraph$weight_STAR_$arity$3 == null)))))){
return g.loom$graph$WeightedGraph$weight_STAR_$arity$3(g,n1,n2);
} else {
var x__4433__auto__ = (((g == null))?null:g);
var m__4434__auto__ = (loom.graph.weight_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,g,n1,n2);
} else {
var m__4431__auto__ = (loom.graph.weight_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,g,n1,n2);
} else {
throw cljs.core.missing_protocol.call(null,"WeightedGraph.weight*",g);
}
}
}
});

loom.graph.weight_STAR_.cljs$lang$maxFixedArity = 3;



/**
 * @interface
 */
loom.graph.EditableGraph = function(){};

/**
 * Add nodes to graph g. See add-nodes
 */
loom.graph.add_nodes_STAR_ = (function loom$graph$add_nodes_STAR_(g,nodes){
if((((!((g == null)))) && ((!((g.loom$graph$EditableGraph$add_nodes_STAR_$arity$2 == null)))))){
return g.loom$graph$EditableGraph$add_nodes_STAR_$arity$2(g,nodes);
} else {
var x__4433__auto__ = (((g == null))?null:g);
var m__4434__auto__ = (loom.graph.add_nodes_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,g,nodes);
} else {
var m__4431__auto__ = (loom.graph.add_nodes_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,g,nodes);
} else {
throw cljs.core.missing_protocol.call(null,"EditableGraph.add-nodes*",g);
}
}
}
});

/**
 * Add edges to graph g. See add-edges
 */
loom.graph.add_edges_STAR_ = (function loom$graph$add_edges_STAR_(g,edges){
if((((!((g == null)))) && ((!((g.loom$graph$EditableGraph$add_edges_STAR_$arity$2 == null)))))){
return g.loom$graph$EditableGraph$add_edges_STAR_$arity$2(g,edges);
} else {
var x__4433__auto__ = (((g == null))?null:g);
var m__4434__auto__ = (loom.graph.add_edges_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,g,edges);
} else {
var m__4431__auto__ = (loom.graph.add_edges_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,g,edges);
} else {
throw cljs.core.missing_protocol.call(null,"EditableGraph.add-edges*",g);
}
}
}
});

/**
 * Remove nodes from graph g. See remove-nodes
 */
loom.graph.remove_nodes_STAR_ = (function loom$graph$remove_nodes_STAR_(g,nodes){
if((((!((g == null)))) && ((!((g.loom$graph$EditableGraph$remove_nodes_STAR_$arity$2 == null)))))){
return g.loom$graph$EditableGraph$remove_nodes_STAR_$arity$2(g,nodes);
} else {
var x__4433__auto__ = (((g == null))?null:g);
var m__4434__auto__ = (loom.graph.remove_nodes_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,g,nodes);
} else {
var m__4431__auto__ = (loom.graph.remove_nodes_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,g,nodes);
} else {
throw cljs.core.missing_protocol.call(null,"EditableGraph.remove-nodes*",g);
}
}
}
});

/**
 * Removes edges from graph g. See remove-edges
 */
loom.graph.remove_edges_STAR_ = (function loom$graph$remove_edges_STAR_(g,edges){
if((((!((g == null)))) && ((!((g.loom$graph$EditableGraph$remove_edges_STAR_$arity$2 == null)))))){
return g.loom$graph$EditableGraph$remove_edges_STAR_$arity$2(g,edges);
} else {
var x__4433__auto__ = (((g == null))?null:g);
var m__4434__auto__ = (loom.graph.remove_edges_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,g,edges);
} else {
var m__4431__auto__ = (loom.graph.remove_edges_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,g,edges);
} else {
throw cljs.core.missing_protocol.call(null,"EditableGraph.remove-edges*",g);
}
}
}
});

/**
 * Removes all nodes and edges from graph g
 */
loom.graph.remove_all = (function loom$graph$remove_all(g){
if((((!((g == null)))) && ((!((g.loom$graph$EditableGraph$remove_all$arity$1 == null)))))){
return g.loom$graph$EditableGraph$remove_all$arity$1(g);
} else {
var x__4433__auto__ = (((g == null))?null:g);
var m__4434__auto__ = (loom.graph.remove_all[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,g);
} else {
var m__4431__auto__ = (loom.graph.remove_all["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,g);
} else {
throw cljs.core.missing_protocol.call(null,"EditableGraph.remove-all",g);
}
}
}
});


/**
 * @interface
 */
loom.graph.Edge = function(){};

/**
 * Returns the source node of the edge
 */
loom.graph.src = (function loom$graph$src(edge){
if((((!((edge == null)))) && ((!((edge.loom$graph$Edge$src$arity$1 == null)))))){
return edge.loom$graph$Edge$src$arity$1(edge);
} else {
var x__4433__auto__ = (((edge == null))?null:edge);
var m__4434__auto__ = (loom.graph.src[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,edge);
} else {
var m__4431__auto__ = (loom.graph.src["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,edge);
} else {
throw cljs.core.missing_protocol.call(null,"Edge.src",edge);
}
}
}
});

/**
 * Returns the dest node of the edge
 */
loom.graph.dest = (function loom$graph$dest(edge){
if((((!((edge == null)))) && ((!((edge.loom$graph$Edge$dest$arity$1 == null)))))){
return edge.loom$graph$Edge$dest$arity$1(edge);
} else {
var x__4433__auto__ = (((edge == null))?null:edge);
var m__4434__auto__ = (loom.graph.dest[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,edge);
} else {
var m__4431__auto__ = (loom.graph.dest["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,edge);
} else {
throw cljs.core.missing_protocol.call(null,"Edge.dest",edge);
}
}
}
});

cljs.core.PersistentVector.prototype.loom$graph$Edge$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.loom$graph$Edge$src$arity$1 = (function (edge){
var edge__$1 = this;
return cljs.core.get.call(null,edge__$1,(0));
});

cljs.core.PersistentVector.prototype.loom$graph$Edge$dest$arity$1 = (function (edge){
var edge__$1 = this;
return cljs.core.get.call(null,edge__$1,(1));
});
cljs.core.PersistentArrayMap.prototype.loom$graph$Edge$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMap.prototype.loom$graph$Edge$src$arity$1 = (function (edge){
var edge__$1 = this;
return new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(edge__$1);
});

cljs.core.PersistentArrayMap.prototype.loom$graph$Edge$dest$arity$1 = (function (edge){
var edge__$1 = this;
return new cljs.core.Keyword(null,"dest","dest",-34569477).cljs$core$IFn$_invoke$arity$1(edge__$1);
});

cljs.core.PersistentHashMap.prototype.loom$graph$Edge$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentHashMap.prototype.loom$graph$Edge$src$arity$1 = (function (edge){
var edge__$1 = this;
return new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(edge__$1);
});

cljs.core.PersistentHashMap.prototype.loom$graph$Edge$dest$arity$1 = (function (edge){
var edge__$1 = this;
return new cljs.core.Keyword(null,"dest","dest",-34569477).cljs$core$IFn$_invoke$arity$1(edge__$1);
});

cljs.core.PersistentTreeMap.prototype.loom$graph$Edge$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentTreeMap.prototype.loom$graph$Edge$src$arity$1 = (function (edge){
var edge__$1 = this;
return new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(edge__$1);
});

cljs.core.PersistentTreeMap.prototype.loom$graph$Edge$dest$arity$1 = (function (edge){
var edge__$1 = this;
return new cljs.core.Keyword(null,"dest","dest",-34569477).cljs$core$IFn$_invoke$arity$1(edge__$1);
});
/**
 * Returns direct successors of node
 */
loom.graph.successors = (function loom$graph$successors(var_args){
var G__16981 = arguments.length;
switch (G__16981) {
case 1:
return loom.graph.successors.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return loom.graph.successors.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

loom.graph.successors.cljs$core$IFn$_invoke$arity$1 = (function (g){
return (function (p1__16979_SHARP_){
return loom.graph.successors.call(null,g,p1__16979_SHARP_);
});
});

loom.graph.successors.cljs$core$IFn$_invoke$arity$2 = (function (g,node){
return loom.graph.successors_STAR_.call(null,g,node);
});

loom.graph.successors.cljs$lang$maxFixedArity = 2;

/**
 * Returns direct predecessors of node
 */
loom.graph.predecessors = (function loom$graph$predecessors(var_args){
var G__16985 = arguments.length;
switch (G__16985) {
case 1:
return loom.graph.predecessors.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return loom.graph.predecessors.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

loom.graph.predecessors.cljs$core$IFn$_invoke$arity$1 = (function (g){
return (function (p1__16983_SHARP_){
return loom.graph.predecessors.call(null,g,p1__16983_SHARP_);
});
});

loom.graph.predecessors.cljs$core$IFn$_invoke$arity$2 = (function (g,node){
return loom.graph.predecessors_STAR_.call(null,g,node);
});

loom.graph.predecessors.cljs$lang$maxFixedArity = 2;

/**
 * Returns the weight of edge e or edge [n1 n2]
 */
loom.graph.weight = (function loom$graph$weight(var_args){
var G__16988 = arguments.length;
switch (G__16988) {
case 1:
return loom.graph.weight.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return loom.graph.weight.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return loom.graph.weight.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

loom.graph.weight.cljs$core$IFn$_invoke$arity$1 = (function (g){
return cljs.core.partial.call(null,loom.graph.weight,g);
});

loom.graph.weight.cljs$core$IFn$_invoke$arity$2 = (function (g,e){
return loom.graph.weight_STAR_.call(null,g,loom.graph.src.call(null,e),loom.graph.dest.call(null,e));
});

loom.graph.weight.cljs$core$IFn$_invoke$arity$3 = (function (g,n1,n2){
return loom.graph.weight_STAR_.call(null,g,n1,n2);
});

loom.graph.weight.cljs$lang$maxFixedArity = 3;

/**
 * Adds nodes to graph g. Nodes can be any type of object
 */
loom.graph.add_nodes = (function loom$graph$add_nodes(var_args){
var args__4736__auto__ = [];
var len__4730__auto___16992 = arguments.length;
var i__4731__auto___16993 = (0);
while(true){
if((i__4731__auto___16993 < len__4730__auto___16992)){
args__4736__auto__.push((arguments[i__4731__auto___16993]));

var G__16994 = (i__4731__auto___16993 + (1));
i__4731__auto___16993 = G__16994;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return loom.graph.add_nodes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

loom.graph.add_nodes.cljs$core$IFn$_invoke$arity$variadic = (function (g,nodes){
return loom.graph.add_nodes_STAR_.call(null,g,nodes);
});

loom.graph.add_nodes.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
loom.graph.add_nodes.cljs$lang$applyTo = (function (seq16990){
var G__16991 = cljs.core.first.call(null,seq16990);
var seq16990__$1 = cljs.core.next.call(null,seq16990);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16991,seq16990__$1);
});

/**
 * Adds edges to graph g. For unweighted graphs, edges take the form [n1 n2].
 *   For weighted graphs, edges take the form [n1 n2 weight] or [n1 n2], the
 *   latter defaulting to a weight of 1
 */
loom.graph.add_edges = (function loom$graph$add_edges(var_args){
var args__4736__auto__ = [];
var len__4730__auto___16997 = arguments.length;
var i__4731__auto___16998 = (0);
while(true){
if((i__4731__auto___16998 < len__4730__auto___16997)){
args__4736__auto__.push((arguments[i__4731__auto___16998]));

var G__16999 = (i__4731__auto___16998 + (1));
i__4731__auto___16998 = G__16999;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return loom.graph.add_edges.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

loom.graph.add_edges.cljs$core$IFn$_invoke$arity$variadic = (function (g,edges){
return loom.graph.add_edges_STAR_.call(null,g,edges);
});

loom.graph.add_edges.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
loom.graph.add_edges.cljs$lang$applyTo = (function (seq16995){
var G__16996 = cljs.core.first.call(null,seq16995);
var seq16995__$1 = cljs.core.next.call(null,seq16995);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16996,seq16995__$1);
});

/**
 * Removes nodes from graph g
 */
loom.graph.remove_nodes = (function loom$graph$remove_nodes(var_args){
var args__4736__auto__ = [];
var len__4730__auto___17002 = arguments.length;
var i__4731__auto___17003 = (0);
while(true){
if((i__4731__auto___17003 < len__4730__auto___17002)){
args__4736__auto__.push((arguments[i__4731__auto___17003]));

var G__17004 = (i__4731__auto___17003 + (1));
i__4731__auto___17003 = G__17004;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return loom.graph.remove_nodes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

loom.graph.remove_nodes.cljs$core$IFn$_invoke$arity$variadic = (function (g,nodes){
return loom.graph.remove_nodes_STAR_.call(null,g,nodes);
});

loom.graph.remove_nodes.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
loom.graph.remove_nodes.cljs$lang$applyTo = (function (seq17000){
var G__17001 = cljs.core.first.call(null,seq17000);
var seq17000__$1 = cljs.core.next.call(null,seq17000);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17001,seq17000__$1);
});

/**
 * Removes edges from graph g. Do not include weights
 */
loom.graph.remove_edges = (function loom$graph$remove_edges(var_args){
var args__4736__auto__ = [];
var len__4730__auto___17007 = arguments.length;
var i__4731__auto___17008 = (0);
while(true){
if((i__4731__auto___17008 < len__4730__auto___17007)){
args__4736__auto__.push((arguments[i__4731__auto___17008]));

var G__17009 = (i__4731__auto___17008 + (1));
i__4731__auto___17008 = G__17009;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return loom.graph.remove_edges.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

loom.graph.remove_edges.cljs$core$IFn$_invoke$arity$variadic = (function (g,edges){
return loom.graph.remove_edges_STAR_.call(null,g,edges);
});

loom.graph.remove_edges.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
loom.graph.remove_edges.cljs$lang$applyTo = (function (seq17005){
var G__17006 = cljs.core.first.call(null,seq17005);
var seq17005__$1 = cljs.core.next.call(null,seq17005);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17006,seq17005__$1);
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
loom.graph.BasicEditableGraph = (function (nodeset,adj,__meta,__extmap,__hash){
this.nodeset = nodeset;
this.adj = adj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
loom.graph.BasicEditableGraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

loom.graph.BasicEditableGraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k17011,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__17015 = k17011;
var G__17015__$1 = (((G__17015 instanceof cljs.core.Keyword))?G__17015.fqn:null);
switch (G__17015__$1) {
case "nodeset":
return self__.nodeset;

break;
case "adj":
return self__.adj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k17011,else__4388__auto__);

}
});

loom.graph.BasicEditableGraph.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__17016){
var vec__17017 = p__17016;
var k__4408__auto__ = cljs.core.nth.call(null,vec__17017,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__17017,(1),null);
return f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__);
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

loom.graph.BasicEditableGraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,pr_pair__4402__auto__,"#loom.graph.BasicEditableGraph{",", ","}",opts__4401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj],null))], null),self__.__extmap));
});

loom.graph.BasicEditableGraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__17010){
var self__ = this;
var G__17010__$1 = this;
return (new cljs.core.RecordIter((0),G__17010__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

loom.graph.BasicEditableGraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

loom.graph.BasicEditableGraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new loom.graph.BasicEditableGraph(self__.nodeset,self__.adj,self__.__meta,self__.__extmap,self__.__hash));
});

loom.graph.BasicEditableGraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

loom.graph.BasicEditableGraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (446662859 ^ cljs.core.hash_unordered_coll.call(null,coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
.call(null,this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

loom.graph.BasicEditableGraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this17012,other17013){
var self__ = this;
var this17012__$1 = this;
return (((!((other17013 == null)))) && ((this17012__$1.constructor === other17013.constructor)) && (cljs.core._EQ_.call(null,this17012__$1.nodeset,other17013.nodeset)) && (cljs.core._EQ_.call(null,this17012__$1.adj,other17013.adj)) && (cljs.core._EQ_.call(null,this17012__$1.__extmap,other17013.__extmap)));
});

loom.graph.BasicEditableGraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),null,new cljs.core.Keyword(null,"adj","adj",-1344630196),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new loom.graph.BasicEditableGraph(self__.nodeset,self__.adj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4395__auto__)),null));
}
});

loom.graph.BasicEditableGraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__17010){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__17020 = cljs.core.keyword_identical_QMARK_;
var expr__17021 = k__4393__auto__;
if(cljs.core.truth_(pred__17020.call(null,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),expr__17021))){
return (new loom.graph.BasicEditableGraph(G__17010,self__.adj,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__17020.call(null,new cljs.core.Keyword(null,"adj","adj",-1344630196),expr__17021))){
return (new loom.graph.BasicEditableGraph(self__.nodeset,G__17010,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.BasicEditableGraph(self__.nodeset,self__.adj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__17010),null));
}
}
});

loom.graph.BasicEditableGraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj,null))], null),self__.__extmap));
});

loom.graph.BasicEditableGraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__17010){
var self__ = this;
var this__4384__auto____$1 = this;
return (new loom.graph.BasicEditableGraph(self__.nodeset,self__.adj,G__17010,self__.__extmap,self__.__hash));
});

loom.graph.BasicEditableGraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4391__auto__,(0)),cljs.core._nth.call(null,entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

loom.graph.BasicEditableGraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nodeset","nodeset",-1958444430,null),new cljs.core.Symbol(null,"adj","adj",295901331,null)], null);
});

loom.graph.BasicEditableGraph.cljs$lang$type = true;

loom.graph.BasicEditableGraph.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"loom.graph/BasicEditableGraph",null,(1),null));
});

loom.graph.BasicEditableGraph.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"loom.graph/BasicEditableGraph");
});

/**
 * Positional factory function for loom.graph/BasicEditableGraph.
 */
loom.graph.__GT_BasicEditableGraph = (function loom$graph$__GT_BasicEditableGraph(nodeset,adj){
return (new loom.graph.BasicEditableGraph(nodeset,adj,null,null,null));
});

/**
 * Factory function for loom.graph/BasicEditableGraph, taking a map of keywords to field values.
 */
loom.graph.map__GT_BasicEditableGraph = (function loom$graph$map__GT_BasicEditableGraph(G__17014){
var extmap__4424__auto__ = (function (){var G__17023 = cljs.core.dissoc.call(null,G__17014,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196));
if(cljs.core.record_QMARK_.call(null,G__17014)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__17023);
} else {
return G__17023;
}
})();
return (new loom.graph.BasicEditableGraph(new cljs.core.Keyword(null,"nodeset","nodeset",695991339).cljs$core$IFn$_invoke$arity$1(G__17014),new cljs.core.Keyword(null,"adj","adj",-1344630196).cljs$core$IFn$_invoke$arity$1(G__17014),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
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
loom.graph.BasicEditableDigraph = (function (nodeset,adj,in$,__meta,__extmap,__hash){
this.nodeset = nodeset;
this.adj = adj;
this.in$ = in$;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
loom.graph.BasicEditableDigraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k17026,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__17030 = k17026;
var G__17030__$1 = (((G__17030 instanceof cljs.core.Keyword))?G__17030.fqn:null);
switch (G__17030__$1) {
case "nodeset":
return self__.nodeset;

break;
case "adj":
return self__.adj;

break;
case "in":
return self__.in$;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k17026,else__4388__auto__);

}
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__17031){
var vec__17032 = p__17031;
var k__4408__auto__ = cljs.core.nth.call(null,vec__17032,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__17032,(1),null);
return f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__);
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,pr_pair__4402__auto__,"#loom.graph.BasicEditableDigraph{",", ","}",opts__4401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$],null))], null),self__.__extmap));
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__17025){
var self__ = this;
var G__17025__$1 = this;
return (new cljs.core.RecordIter((0),G__17025__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196),new cljs.core.Keyword(null,"in","in",-1531184865)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new loom.graph.BasicEditableDigraph(self__.nodeset,self__.adj,self__.in$,self__.__meta,self__.__extmap,self__.__hash));
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (324724442 ^ cljs.core.hash_unordered_coll.call(null,coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
.call(null,this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this17027,other17028){
var self__ = this;
var this17027__$1 = this;
return (((!((other17028 == null)))) && ((this17027__$1.constructor === other17028.constructor)) && (cljs.core._EQ_.call(null,this17027__$1.nodeset,other17028.nodeset)) && (cljs.core._EQ_.call(null,this17027__$1.adj,other17028.adj)) && (cljs.core._EQ_.call(null,this17027__$1.in,other17028.in)) && (cljs.core._EQ_.call(null,this17027__$1.__extmap,other17028.__extmap)));
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),null,new cljs.core.Keyword(null,"adj","adj",-1344630196),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new loom.graph.BasicEditableDigraph(self__.nodeset,self__.adj,self__.in$,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4395__auto__)),null));
}
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__17025){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__17035 = cljs.core.keyword_identical_QMARK_;
var expr__17036 = k__4393__auto__;
if(cljs.core.truth_(pred__17035.call(null,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),expr__17036))){
return (new loom.graph.BasicEditableDigraph(G__17025,self__.adj,self__.in$,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__17035.call(null,new cljs.core.Keyword(null,"adj","adj",-1344630196),expr__17036))){
return (new loom.graph.BasicEditableDigraph(self__.nodeset,G__17025,self__.in$,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__17035.call(null,new cljs.core.Keyword(null,"in","in",-1531184865),expr__17036))){
return (new loom.graph.BasicEditableDigraph(self__.nodeset,self__.adj,G__17025,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.BasicEditableDigraph(self__.nodeset,self__.adj,self__.in$,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__17025),null));
}
}
}
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$,null))], null),self__.__extmap));
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__17025){
var self__ = this;
var this__4384__auto____$1 = this;
return (new loom.graph.BasicEditableDigraph(self__.nodeset,self__.adj,self__.in$,G__17025,self__.__extmap,self__.__hash));
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4391__auto__,(0)),cljs.core._nth.call(null,entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

loom.graph.BasicEditableDigraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nodeset","nodeset",-1958444430,null),new cljs.core.Symbol(null,"adj","adj",295901331,null),new cljs.core.Symbol(null,"in","in",109346662,null)], null);
});

loom.graph.BasicEditableDigraph.cljs$lang$type = true;

loom.graph.BasicEditableDigraph.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"loom.graph/BasicEditableDigraph",null,(1),null));
});

loom.graph.BasicEditableDigraph.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"loom.graph/BasicEditableDigraph");
});

/**
 * Positional factory function for loom.graph/BasicEditableDigraph.
 */
loom.graph.__GT_BasicEditableDigraph = (function loom$graph$__GT_BasicEditableDigraph(nodeset,adj,in$){
return (new loom.graph.BasicEditableDigraph(nodeset,adj,in$,null,null,null));
});

/**
 * Factory function for loom.graph/BasicEditableDigraph, taking a map of keywords to field values.
 */
loom.graph.map__GT_BasicEditableDigraph = (function loom$graph$map__GT_BasicEditableDigraph(G__17029){
var extmap__4424__auto__ = (function (){var G__17038 = cljs.core.dissoc.call(null,G__17029,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196),new cljs.core.Keyword(null,"in","in",-1531184865));
if(cljs.core.record_QMARK_.call(null,G__17029)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__17038);
} else {
return G__17038;
}
})();
return (new loom.graph.BasicEditableDigraph(new cljs.core.Keyword(null,"nodeset","nodeset",695991339).cljs$core$IFn$_invoke$arity$1(G__17029),new cljs.core.Keyword(null,"adj","adj",-1344630196).cljs$core$IFn$_invoke$arity$1(G__17029),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(G__17029),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
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
loom.graph.BasicEditableWeightedGraph = (function (nodeset,adj,__meta,__extmap,__hash){
this.nodeset = nodeset;
this.adj = adj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k17041,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__17045 = k17041;
var G__17045__$1 = (((G__17045 instanceof cljs.core.Keyword))?G__17045.fqn:null);
switch (G__17045__$1) {
case "nodeset":
return self__.nodeset;

break;
case "adj":
return self__.adj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k17041,else__4388__auto__);

}
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__17046){
var vec__17047 = p__17046;
var k__4408__auto__ = cljs.core.nth.call(null,vec__17047,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__17047,(1),null);
return f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__);
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,pr_pair__4402__auto__,"#loom.graph.BasicEditableWeightedGraph{",", ","}",opts__4401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj],null))], null),self__.__extmap));
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__17040){
var self__ = this;
var G__17040__$1 = this;
return (new cljs.core.RecordIter((0),G__17040__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new loom.graph.BasicEditableWeightedGraph(self__.nodeset,self__.adj,self__.__meta,self__.__extmap,self__.__hash));
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-212297308 ^ cljs.core.hash_unordered_coll.call(null,coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
.call(null,this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this17042,other17043){
var self__ = this;
var this17042__$1 = this;
return (((!((other17043 == null)))) && ((this17042__$1.constructor === other17043.constructor)) && (cljs.core._EQ_.call(null,this17042__$1.nodeset,other17043.nodeset)) && (cljs.core._EQ_.call(null,this17042__$1.adj,other17043.adj)) && (cljs.core._EQ_.call(null,this17042__$1.__extmap,other17043.__extmap)));
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),null,new cljs.core.Keyword(null,"adj","adj",-1344630196),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new loom.graph.BasicEditableWeightedGraph(self__.nodeset,self__.adj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4395__auto__)),null));
}
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__17040){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__17050 = cljs.core.keyword_identical_QMARK_;
var expr__17051 = k__4393__auto__;
if(cljs.core.truth_(pred__17050.call(null,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),expr__17051))){
return (new loom.graph.BasicEditableWeightedGraph(G__17040,self__.adj,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__17050.call(null,new cljs.core.Keyword(null,"adj","adj",-1344630196),expr__17051))){
return (new loom.graph.BasicEditableWeightedGraph(self__.nodeset,G__17040,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.BasicEditableWeightedGraph(self__.nodeset,self__.adj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__17040),null));
}
}
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj,null))], null),self__.__extmap));
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__17040){
var self__ = this;
var this__4384__auto____$1 = this;
return (new loom.graph.BasicEditableWeightedGraph(self__.nodeset,self__.adj,G__17040,self__.__extmap,self__.__hash));
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4391__auto__,(0)),cljs.core._nth.call(null,entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

loom.graph.BasicEditableWeightedGraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nodeset","nodeset",-1958444430,null),new cljs.core.Symbol(null,"adj","adj",295901331,null)], null);
});

loom.graph.BasicEditableWeightedGraph.cljs$lang$type = true;

loom.graph.BasicEditableWeightedGraph.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"loom.graph/BasicEditableWeightedGraph",null,(1),null));
});

loom.graph.BasicEditableWeightedGraph.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"loom.graph/BasicEditableWeightedGraph");
});

/**
 * Positional factory function for loom.graph/BasicEditableWeightedGraph.
 */
loom.graph.__GT_BasicEditableWeightedGraph = (function loom$graph$__GT_BasicEditableWeightedGraph(nodeset,adj){
return (new loom.graph.BasicEditableWeightedGraph(nodeset,adj,null,null,null));
});

/**
 * Factory function for loom.graph/BasicEditableWeightedGraph, taking a map of keywords to field values.
 */
loom.graph.map__GT_BasicEditableWeightedGraph = (function loom$graph$map__GT_BasicEditableWeightedGraph(G__17044){
var extmap__4424__auto__ = (function (){var G__17053 = cljs.core.dissoc.call(null,G__17044,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196));
if(cljs.core.record_QMARK_.call(null,G__17044)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__17053);
} else {
return G__17053;
}
})();
return (new loom.graph.BasicEditableWeightedGraph(new cljs.core.Keyword(null,"nodeset","nodeset",695991339).cljs$core$IFn$_invoke$arity$1(G__17044),new cljs.core.Keyword(null,"adj","adj",-1344630196).cljs$core$IFn$_invoke$arity$1(G__17044),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
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
loom.graph.BasicEditableWeightedDigraph = (function (nodeset,adj,in$,__meta,__extmap,__hash){
this.nodeset = nodeset;
this.adj = adj;
this.in$ = in$;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k17056,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__17060 = k17056;
var G__17060__$1 = (((G__17060 instanceof cljs.core.Keyword))?G__17060.fqn:null);
switch (G__17060__$1) {
case "nodeset":
return self__.nodeset;

break;
case "adj":
return self__.adj;

break;
case "in":
return self__.in$;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k17056,else__4388__auto__);

}
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__17061){
var vec__17062 = p__17061;
var k__4408__auto__ = cljs.core.nth.call(null,vec__17062,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__17062,(1),null);
return f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__);
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,pr_pair__4402__auto__,"#loom.graph.BasicEditableWeightedDigraph{",", ","}",opts__4401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$],null))], null),self__.__extmap));
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__17055){
var self__ = this;
var G__17055__$1 = this;
return (new cljs.core.RecordIter((0),G__17055__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196),new cljs.core.Keyword(null,"in","in",-1531184865)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new loom.graph.BasicEditableWeightedDigraph(self__.nodeset,self__.adj,self__.in$,self__.__meta,self__.__extmap,self__.__hash));
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1110931322 ^ cljs.core.hash_unordered_coll.call(null,coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
.call(null,this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this17057,other17058){
var self__ = this;
var this17057__$1 = this;
return (((!((other17058 == null)))) && ((this17057__$1.constructor === other17058.constructor)) && (cljs.core._EQ_.call(null,this17057__$1.nodeset,other17058.nodeset)) && (cljs.core._EQ_.call(null,this17057__$1.adj,other17058.adj)) && (cljs.core._EQ_.call(null,this17057__$1.in,other17058.in)) && (cljs.core._EQ_.call(null,this17057__$1.__extmap,other17058.__extmap)));
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),null,new cljs.core.Keyword(null,"adj","adj",-1344630196),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new loom.graph.BasicEditableWeightedDigraph(self__.nodeset,self__.adj,self__.in$,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4395__auto__)),null));
}
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__17055){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__17065 = cljs.core.keyword_identical_QMARK_;
var expr__17066 = k__4393__auto__;
if(cljs.core.truth_(pred__17065.call(null,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),expr__17066))){
return (new loom.graph.BasicEditableWeightedDigraph(G__17055,self__.adj,self__.in$,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__17065.call(null,new cljs.core.Keyword(null,"adj","adj",-1344630196),expr__17066))){
return (new loom.graph.BasicEditableWeightedDigraph(self__.nodeset,G__17055,self__.in$,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__17065.call(null,new cljs.core.Keyword(null,"in","in",-1531184865),expr__17066))){
return (new loom.graph.BasicEditableWeightedDigraph(self__.nodeset,self__.adj,G__17055,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.BasicEditableWeightedDigraph(self__.nodeset,self__.adj,self__.in$,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__17055),null));
}
}
}
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$,null))], null),self__.__extmap));
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__17055){
var self__ = this;
var this__4384__auto____$1 = this;
return (new loom.graph.BasicEditableWeightedDigraph(self__.nodeset,self__.adj,self__.in$,G__17055,self__.__extmap,self__.__hash));
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4391__auto__,(0)),cljs.core._nth.call(null,entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

loom.graph.BasicEditableWeightedDigraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nodeset","nodeset",-1958444430,null),new cljs.core.Symbol(null,"adj","adj",295901331,null),new cljs.core.Symbol(null,"in","in",109346662,null)], null);
});

loom.graph.BasicEditableWeightedDigraph.cljs$lang$type = true;

loom.graph.BasicEditableWeightedDigraph.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"loom.graph/BasicEditableWeightedDigraph",null,(1),null));
});

loom.graph.BasicEditableWeightedDigraph.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"loom.graph/BasicEditableWeightedDigraph");
});

/**
 * Positional factory function for loom.graph/BasicEditableWeightedDigraph.
 */
loom.graph.__GT_BasicEditableWeightedDigraph = (function loom$graph$__GT_BasicEditableWeightedDigraph(nodeset,adj,in$){
return (new loom.graph.BasicEditableWeightedDigraph(nodeset,adj,in$,null,null,null));
});

/**
 * Factory function for loom.graph/BasicEditableWeightedDigraph, taking a map of keywords to field values.
 */
loom.graph.map__GT_BasicEditableWeightedDigraph = (function loom$graph$map__GT_BasicEditableWeightedDigraph(G__17059){
var extmap__4424__auto__ = (function (){var G__17068 = cljs.core.dissoc.call(null,G__17059,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196),new cljs.core.Keyword(null,"in","in",-1531184865));
if(cljs.core.record_QMARK_.call(null,G__17059)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__17068);
} else {
return G__17068;
}
})();
return (new loom.graph.BasicEditableWeightedDigraph(new cljs.core.Keyword(null,"nodeset","nodeset",695991339).cljs$core$IFn$_invoke$arity$1(G__17059),new cljs.core.Keyword(null,"adj","adj",-1344630196).cljs$core$IFn$_invoke$arity$1(G__17059),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(G__17059),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
});

/**
 * Weight used when none is given for edges in weighted graphs
 */
loom.graph._STAR_default_weight_STAR_ = (1);
loom.graph.remove_adj_nodes = (function loom$graph$remove_adj_nodes(m,nodes,adjacents,remove_fn){
return cljs.core.reduce.call(null,(function (m__$1,n){
if(cljs.core.truth_(m__$1.call(null,n))){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [n], null),(function (p1__17070_SHARP_){
return cljs.core.apply.call(null,remove_fn,p1__17070_SHARP_,nodes);
}));
} else {
return m__$1;
}
}),cljs.core.apply.call(null,cljs.core.dissoc,m,nodes),adjacents);
});
loom.graph.BasicEditableGraph.prototype.loom$graph$Graph$ = cljs.core.PROTOCOL_SENTINEL;

loom.graph.BasicEditableGraph.prototype.loom$graph$Graph$nodes$arity$1 = (function (g){
var g__$1 = this;
return new cljs.core.Keyword(null,"nodeset","nodeset",695991339).cljs$core$IFn$_invoke$arity$1(g__$1);
});

loom.graph.BasicEditableGraph.prototype.loom$graph$Graph$edges$arity$1 = (function (g){
var g__$1 = this;
var iter__4523__auto__ = ((function (g__$1){
return (function loom$graph$iter__17073(s__17074){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__17074__$1 = s__17074;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__17074__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var n1 = cljs.core.first.call(null,xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__17074__$1,n1,xs__6277__auto__,temp__5720__auto__,g__$1){
return (function loom$graph$iter__17073_$_iter__17075(s__17076){
return (new cljs.core.LazySeq(null,((function (s__17074__$1,n1,xs__6277__auto__,temp__5720__auto__,g__$1){
return (function (){
var s__17076__$1 = s__17076;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__17076__$1);
if(temp__5720__auto____$1){
var s__17076__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17076__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__17076__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__17078 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__17077 = (0);
while(true){
if((i__17077 < size__4522__auto__)){
var e = cljs.core._nth.call(null,c__4521__auto__,i__17077);
cljs.core.chunk_append.call(null,b__17078,e);

var G__17091 = (i__17077 + (1));
i__17077 = G__17091;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17078),loom$graph$iter__17073_$_iter__17075.call(null,cljs.core.chunk_rest.call(null,s__17076__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17078),null);
}
} else {
var e = cljs.core.first.call(null,s__17076__$2);
return cljs.core.cons.call(null,e,loom$graph$iter__17073_$_iter__17075.call(null,cljs.core.rest.call(null,s__17076__$2)));
}
} else {
return null;
}
break;
}
});})(s__17074__$1,n1,xs__6277__auto__,temp__5720__auto__,g__$1))
,null,null));
});})(s__17074__$1,n1,xs__6277__auto__,temp__5720__auto__,g__$1))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,loom.graph.out_edges.call(null,g__$1,n1)));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,loom$graph$iter__17073.call(null,cljs.core.rest.call(null,s__17074__$1)));
} else {
var G__17092 = cljs.core.rest.call(null,s__17074__$1);
s__17074__$1 = G__17092;
continue;
}
} else {
return null;
}
break;
}
});})(g__$1))
,null,null));
});})(g__$1))
;
return iter__4523__auto__.call(null,loom.graph.nodes.call(null,g__$1));
});

loom.graph.BasicEditableGraph.prototype.loom$graph$Graph$has_node_QMARK_$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"nodeset","nodeset",695991339).cljs$core$IFn$_invoke$arity$1(g__$1),node);
});

loom.graph.BasicEditableGraph.prototype.loom$graph$Graph$has_edge_QMARK_$arity$3 = (function (g,n1,n2){
var g__$1 = this;
return cljs.core.contains_QMARK_.call(null,cljs.core.get_in.call(null,g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null)),n2);
});

loom.graph.BasicEditableGraph.prototype.loom$graph$Graph$out_degree$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.count.call(null,cljs.core.get_in.call(null,g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),node], null)));
});

loom.graph.BasicEditableGraph.prototype.loom$graph$Graph$out_edges$arity$2 = (function (g,node){
var g__$1 = this;
var iter__4523__auto__ = ((function (g__$1){
return (function loom$graph$iter__17079(s__17080){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__17080__$1 = s__17080;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__17080__$1);
if(temp__5720__auto__){
var s__17080__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17080__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__17080__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__17082 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__17081 = (0);
while(true){
if((i__17081 < size__4522__auto__)){
var n2 = cljs.core._nth.call(null,c__4521__auto__,i__17081);
cljs.core.chunk_append.call(null,b__17082,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__17093 = (i__17081 + (1));
i__17081 = G__17093;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17082),loom$graph$iter__17079.call(null,cljs.core.chunk_rest.call(null,s__17080__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17082),null);
}
} else {
var n2 = cljs.core.first.call(null,s__17080__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__17079.call(null,cljs.core.rest.call(null,s__17080__$2)));
}
} else {
return null;
}
break;
}
});})(g__$1))
,null,null));
});})(g__$1))
;
return iter__4523__auto__.call(null,loom.graph.successors.call(null,g__$1,node));
});

loom.graph.BasicEditableGraph.prototype.loom$graph$Graph$successors_STAR_$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.get_in.call(null,g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),node], null));
});

loom.graph.BasicEditableGraph.prototype.loom$graph$EditableGraph$ = cljs.core.PROTOCOL_SENTINEL;

loom.graph.BasicEditableGraph.prototype.loom$graph$EditableGraph$add_nodes_STAR_$arity$2 = (function (g,nodes){
var g__$1 = this;
return cljs.core.reduce.call(null,((function (g__$1){
return (function (g__$2,node){
return cljs.core.update_in.call(null,g__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),cljs.core.conj,node);
});})(g__$1))
,g__$1,nodes);
});

loom.graph.BasicEditableGraph.prototype.loom$graph$EditableGraph$add_edges_STAR_$arity$2 = (function (g,edges){
var g__$1 = this;
return cljs.core.reduce.call(null,((function (g__$1){
return (function (g__$2,p__17083){
var vec__17084 = p__17083;
var n1 = cljs.core.nth.call(null,vec__17084,(0),null);
var n2 = cljs.core.nth.call(null,vec__17084,(1),null);
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,g__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),cljs.core.conj,n1,n2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),n2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n2], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),n1);
});})(g__$1))
,g__$1,edges);
});

loom.graph.BasicEditableGraph.prototype.loom$graph$EditableGraph$remove_nodes_STAR_$arity$2 = (function (g,nodes){
var g__$1 = this;
var nbrs = cljs.core.mapcat.call(null,((function (g__$1){
return (function (p1__17071_SHARP_){
return loom.graph.successors.call(null,g__$1,p1__17071_SHARP_);
});})(g__$1))
,nodes);
return cljs.core.assoc.call(null,cljs.core.update_in.call(null,g__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),((function (nbrs,g__$1){
return (function (p1__17072_SHARP_){
return cljs.core.apply.call(null,cljs.core.disj,p1__17072_SHARP_,nodes);
});})(nbrs,g__$1))
),new cljs.core.Keyword(null,"adj","adj",-1344630196),loom.graph.remove_adj_nodes.call(null,new cljs.core.Keyword(null,"adj","adj",-1344630196).cljs$core$IFn$_invoke$arity$1(g__$1),nodes,nbrs,cljs.core.disj));
});

loom.graph.BasicEditableGraph.prototype.loom$graph$EditableGraph$remove_edges_STAR_$arity$2 = (function (g,edges){
var g__$1 = this;
return cljs.core.reduce.call(null,((function (g__$1){
return (function (g__$2,p__17087){
var vec__17088 = p__17087;
var n1 = cljs.core.nth.call(null,vec__17088,(0),null);
var n2 = cljs.core.nth.call(null,vec__17088,(1),null);
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,g__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null),cljs.core.disj,n2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n2], null),cljs.core.disj,n1);
});})(g__$1))
,g__$1,edges);
});

loom.graph.BasicEditableGraph.prototype.loom$graph$EditableGraph$remove_all$arity$1 = (function (g){
var g__$1 = this;
return cljs.core.assoc.call(null,g__$1,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"adj","adj",-1344630196),cljs.core.PersistentArrayMap.EMPTY);
});
loom.graph.BasicEditableDigraph.prototype.loom$graph$Graph$ = cljs.core.PROTOCOL_SENTINEL;

loom.graph.BasicEditableDigraph.prototype.loom$graph$Graph$nodes$arity$1 = (function (g){
var g__$1 = this;
return new cljs.core.Keyword(null,"nodeset","nodeset",695991339).cljs$core$IFn$_invoke$arity$1(g__$1);
});

loom.graph.BasicEditableDigraph.prototype.loom$graph$Graph$edges$arity$1 = (function (g){
var g__$1 = this;
var iter__4523__auto__ = ((function (g__$1){
return (function loom$graph$iter__17097(s__17098){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__17098__$1 = s__17098;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__17098__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var n1 = cljs.core.first.call(null,xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__17098__$1,n1,xs__6277__auto__,temp__5720__auto__,g__$1){
return (function loom$graph$iter__17097_$_iter__17099(s__17100){
return (new cljs.core.LazySeq(null,((function (s__17098__$1,n1,xs__6277__auto__,temp__5720__auto__,g__$1){
return (function (){
var s__17100__$1 = s__17100;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__17100__$1);
if(temp__5720__auto____$1){
var s__17100__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17100__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__17100__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__17102 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__17101 = (0);
while(true){
if((i__17101 < size__4522__auto__)){
var e = cljs.core._nth.call(null,c__4521__auto__,i__17101);
cljs.core.chunk_append.call(null,b__17102,e);

var G__17119 = (i__17101 + (1));
i__17101 = G__17119;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17102),loom$graph$iter__17097_$_iter__17099.call(null,cljs.core.chunk_rest.call(null,s__17100__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17102),null);
}
} else {
var e = cljs.core.first.call(null,s__17100__$2);
return cljs.core.cons.call(null,e,loom$graph$iter__17097_$_iter__17099.call(null,cljs.core.rest.call(null,s__17100__$2)));
}
} else {
return null;
}
break;
}
});})(s__17098__$1,n1,xs__6277__auto__,temp__5720__auto__,g__$1))
,null,null));
});})(s__17098__$1,n1,xs__6277__auto__,temp__5720__auto__,g__$1))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,loom.graph.out_edges.call(null,g__$1,n1)));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,loom$graph$iter__17097.call(null,cljs.core.rest.call(null,s__17098__$1)));
} else {
var G__17120 = cljs.core.rest.call(null,s__17098__$1);
s__17098__$1 = G__17120;
continue;
}
} else {
return null;
}
break;
}
});})(g__$1))
,null,null));
});})(g__$1))
;
return iter__4523__auto__.call(null,loom.graph.nodes.call(null,g__$1));
});

loom.graph.BasicEditableDigraph.prototype.loom$graph$Graph$has_node_QMARK_$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"nodeset","nodeset",695991339).cljs$core$IFn$_invoke$arity$1(g__$1),node);
});

loom.graph.BasicEditableDigraph.prototype.loom$graph$Graph$has_edge_QMARK_$arity$3 = (function (g,n1,n2){
var g__$1 = this;
return cljs.core.contains_QMARK_.call(null,cljs.core.get_in.call(null,g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null)),n2);
});

loom.graph.BasicEditableDigraph.prototype.loom$graph$Graph$out_degree$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.count.call(null,cljs.core.get_in.call(null,g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),node], null)));
});

loom.graph.BasicEditableDigraph.prototype.loom$graph$Graph$out_edges$arity$2 = (function (g,node){
var g__$1 = this;
var iter__4523__auto__ = ((function (g__$1){
return (function loom$graph$iter__17103(s__17104){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__17104__$1 = s__17104;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__17104__$1);
if(temp__5720__auto__){
var s__17104__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17104__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__17104__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__17106 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__17105 = (0);
while(true){
if((i__17105 < size__4522__auto__)){
var n2 = cljs.core._nth.call(null,c__4521__auto__,i__17105);
cljs.core.chunk_append.call(null,b__17106,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__17121 = (i__17105 + (1));
i__17105 = G__17121;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17106),loom$graph$iter__17103.call(null,cljs.core.chunk_rest.call(null,s__17104__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17106),null);
}
} else {
var n2 = cljs.core.first.call(null,s__17104__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__17103.call(null,cljs.core.rest.call(null,s__17104__$2)));
}
} else {
return null;
}
break;
}
});})(g__$1))
,null,null));
});})(g__$1))
;
return iter__4523__auto__.call(null,loom.graph.successors.call(null,g__$1,node));
});

loom.graph.BasicEditableDigraph.prototype.loom$graph$Graph$successors_STAR_$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.get_in.call(null,g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),node], null));
});

loom.graph.BasicEditableDigraph.prototype.loom$graph$EditableGraph$ = cljs.core.PROTOCOL_SENTINEL;

loom.graph.BasicEditableDigraph.prototype.loom$graph$EditableGraph$add_nodes_STAR_$arity$2 = (function (g,nodes){
var g__$1 = this;
return cljs.core.reduce.call(null,((function (g__$1){
return (function (g__$2,node){
return cljs.core.update_in.call(null,g__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),cljs.core.conj,node);
});})(g__$1))
,g__$1,nodes);
});

loom.graph.BasicEditableDigraph.prototype.loom$graph$EditableGraph$add_edges_STAR_$arity$2 = (function (g,edges){
var g__$1 = this;
return cljs.core.reduce.call(null,((function (g__$1){
return (function (g__$2,p__17107){
var vec__17108 = p__17107;
var n1 = cljs.core.nth.call(null,vec__17108,(0),null);
var n2 = cljs.core.nth.call(null,vec__17108,(1),null);
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,g__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),cljs.core.conj,n1,n2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),n2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),n2], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),n1);
});})(g__$1))
,g__$1,edges);
});

loom.graph.BasicEditableDigraph.prototype.loom$graph$EditableGraph$remove_nodes_STAR_$arity$2 = (function (g,nodes){
var g__$1 = this;
var ins = cljs.core.mapcat.call(null,((function (g__$1){
return (function (p1__17094_SHARP_){
return loom.graph.predecessors.call(null,g__$1,p1__17094_SHARP_);
});})(g__$1))
,nodes);
var outs = cljs.core.mapcat.call(null,((function (ins,g__$1){
return (function (p1__17095_SHARP_){
return loom.graph.successors.call(null,g__$1,p1__17095_SHARP_);
});})(ins,g__$1))
,nodes);
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.update_in.call(null,g__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),((function (ins,outs,g__$1){
return (function (p1__17096_SHARP_){
return cljs.core.apply.call(null,cljs.core.disj,p1__17096_SHARP_,nodes);
});})(ins,outs,g__$1))
),new cljs.core.Keyword(null,"adj","adj",-1344630196),loom.graph.remove_adj_nodes.call(null,new cljs.core.Keyword(null,"adj","adj",-1344630196).cljs$core$IFn$_invoke$arity$1(g__$1),nodes,ins,cljs.core.disj)),new cljs.core.Keyword(null,"in","in",-1531184865),loom.graph.remove_adj_nodes.call(null,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(g__$1),nodes,outs,cljs.core.disj));
});

loom.graph.BasicEditableDigraph.prototype.loom$graph$EditableGraph$remove_edges_STAR_$arity$2 = (function (g,edges){
var g__$1 = this;
return cljs.core.reduce.call(null,((function (g__$1){
return (function (g__$2,p__17111){
var vec__17112 = p__17111;
var n1 = cljs.core.nth.call(null,vec__17112,(0),null);
var n2 = cljs.core.nth.call(null,vec__17112,(1),null);
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,g__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null),cljs.core.disj,n2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),n2], null),cljs.core.disj,n1);
});})(g__$1))
,g__$1,edges);
});

loom.graph.BasicEditableDigraph.prototype.loom$graph$EditableGraph$remove_all$arity$1 = (function (g){
var g__$1 = this;
return cljs.core.assoc.call(null,g__$1,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"adj","adj",-1344630196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.PersistentArrayMap.EMPTY);
});

loom.graph.BasicEditableDigraph.prototype.loom$graph$Digraph$ = cljs.core.PROTOCOL_SENTINEL;

loom.graph.BasicEditableDigraph.prototype.loom$graph$Digraph$predecessors_STAR_$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.get_in.call(null,g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),node], null));
});

loom.graph.BasicEditableDigraph.prototype.loom$graph$Digraph$in_degree$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.count.call(null,cljs.core.get_in.call(null,g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),node], null)));
});

loom.graph.BasicEditableDigraph.prototype.loom$graph$Digraph$in_edges$arity$2 = (function (g,node){
var g__$1 = this;
var iter__4523__auto__ = ((function (g__$1){
return (function loom$graph$iter__17115(s__17116){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__17116__$1 = s__17116;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__17116__$1);
if(temp__5720__auto__){
var s__17116__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17116__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__17116__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__17118 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__17117 = (0);
while(true){
if((i__17117 < size__4522__auto__)){
var n2 = cljs.core._nth.call(null,c__4521__auto__,i__17117);
cljs.core.chunk_append.call(null,b__17118,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,node], null));

var G__17122 = (i__17117 + (1));
i__17117 = G__17122;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17118),loom$graph$iter__17115.call(null,cljs.core.chunk_rest.call(null,s__17116__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17118),null);
}
} else {
var n2 = cljs.core.first.call(null,s__17116__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,node], null),loom$graph$iter__17115.call(null,cljs.core.rest.call(null,s__17116__$2)));
}
} else {
return null;
}
break;
}
});})(g__$1))
,null,null));
});})(g__$1))
;
return iter__4523__auto__.call(null,loom.graph.predecessors.call(null,g__$1,node));
});

loom.graph.BasicEditableDigraph.prototype.loom$graph$Digraph$transpose$arity$1 = (function (g){
var g__$1 = this;
return cljs.core.assoc.call(null,g__$1,new cljs.core.Keyword(null,"adj","adj",-1344630196),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(g__$1),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Keyword(null,"adj","adj",-1344630196).cljs$core$IFn$_invoke$arity$1(g__$1));
});
loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$Graph$ = cljs.core.PROTOCOL_SENTINEL;

loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$Graph$nodes$arity$1 = (function (g){
var g__$1 = this;
return new cljs.core.Keyword(null,"nodeset","nodeset",695991339).cljs$core$IFn$_invoke$arity$1(g__$1);
});

loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$Graph$edges$arity$1 = (function (g){
var g__$1 = this;
var iter__4523__auto__ = ((function (g__$1){
return (function loom$graph$iter__17125(s__17126){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__17126__$1 = s__17126;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__17126__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var n1 = cljs.core.first.call(null,xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__17126__$1,n1,xs__6277__auto__,temp__5720__auto__,g__$1){
return (function loom$graph$iter__17125_$_iter__17127(s__17128){
return (new cljs.core.LazySeq(null,((function (s__17126__$1,n1,xs__6277__auto__,temp__5720__auto__,g__$1){
return (function (){
var s__17128__$1 = s__17128;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__17128__$1);
if(temp__5720__auto____$1){
var s__17128__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17128__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__17128__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__17130 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__17129 = (0);
while(true){
if((i__17129 < size__4522__auto__)){
var e = cljs.core._nth.call(null,c__4521__auto__,i__17129);
cljs.core.chunk_append.call(null,b__17130,e);

var G__17146 = (i__17129 + (1));
i__17129 = G__17146;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17130),loom$graph$iter__17125_$_iter__17127.call(null,cljs.core.chunk_rest.call(null,s__17128__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17130),null);
}
} else {
var e = cljs.core.first.call(null,s__17128__$2);
return cljs.core.cons.call(null,e,loom$graph$iter__17125_$_iter__17127.call(null,cljs.core.rest.call(null,s__17128__$2)));
}
} else {
return null;
}
break;
}
});})(s__17126__$1,n1,xs__6277__auto__,temp__5720__auto__,g__$1))
,null,null));
});})(s__17126__$1,n1,xs__6277__auto__,temp__5720__auto__,g__$1))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,loom.graph.out_edges.call(null,g__$1,n1)));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,loom$graph$iter__17125.call(null,cljs.core.rest.call(null,s__17126__$1)));
} else {
var G__17147 = cljs.core.rest.call(null,s__17126__$1);
s__17126__$1 = G__17147;
continue;
}
} else {
return null;
}
break;
}
});})(g__$1))
,null,null));
});})(g__$1))
;
return iter__4523__auto__.call(null,loom.graph.nodes.call(null,g__$1));
});

loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$Graph$has_node_QMARK_$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"nodeset","nodeset",695991339).cljs$core$IFn$_invoke$arity$1(g__$1),node);
});

loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$Graph$has_edge_QMARK_$arity$3 = (function (g,n1,n2){
var g__$1 = this;
return cljs.core.contains_QMARK_.call(null,cljs.core.get_in.call(null,g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null)),n2);
});

loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$Graph$out_degree$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.count.call(null,cljs.core.get_in.call(null,g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),node], null)));
});

loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$Graph$out_edges$arity$2 = (function (g,node){
var g__$1 = this;
var iter__4523__auto__ = ((function (g__$1){
return (function loom$graph$iter__17131(s__17132){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__17132__$1 = s__17132;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__17132__$1);
if(temp__5720__auto__){
var s__17132__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17132__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__17132__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__17134 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__17133 = (0);
while(true){
if((i__17133 < size__4522__auto__)){
var n2 = cljs.core._nth.call(null,c__4521__auto__,i__17133);
cljs.core.chunk_append.call(null,b__17134,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__17148 = (i__17133 + (1));
i__17133 = G__17148;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17134),loom$graph$iter__17131.call(null,cljs.core.chunk_rest.call(null,s__17132__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17134),null);
}
} else {
var n2 = cljs.core.first.call(null,s__17132__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__17131.call(null,cljs.core.rest.call(null,s__17132__$2)));
}
} else {
return null;
}
break;
}
});})(g__$1))
,null,null));
});})(g__$1))
;
return iter__4523__auto__.call(null,loom.graph.successors.call(null,g__$1,node));
});

loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$Graph$successors_STAR_$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.keys.call(null,cljs.core.get_in.call(null,g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),node], null)));
});

loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$EditableGraph$ = cljs.core.PROTOCOL_SENTINEL;

loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$EditableGraph$add_nodes_STAR_$arity$2 = (function (g,nodes){
var g__$1 = this;
return cljs.core.reduce.call(null,((function (g__$1){
return (function (g__$2,node){
return cljs.core.update_in.call(null,g__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),cljs.core.conj,node);
});})(g__$1))
,g__$1,nodes);
});

loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$EditableGraph$add_edges_STAR_$arity$2 = (function (g,edges){
var g__$1 = this;
return cljs.core.reduce.call(null,((function (g__$1){
return (function (g__$2,p__17135){
var vec__17136 = p__17135;
var seq__17137 = cljs.core.seq.call(null,vec__17136);
var first__17138 = cljs.core.first.call(null,seq__17137);
var seq__17137__$1 = cljs.core.next.call(null,seq__17137);
var n1 = first__17138;
var first__17138__$1 = cljs.core.first.call(null,seq__17137__$1);
var seq__17137__$2 = cljs.core.next.call(null,seq__17137__$1);
var n2 = first__17138__$1;
var vec__17139 = seq__17137__$2;
var w = cljs.core.nth.call(null,vec__17139,(0),null);
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,g__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),cljs.core.conj,n1,n2),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1,n2], null),(function (){var or__4131__auto__ = w;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return loom.graph._STAR_default_weight_STAR_;
}
})()),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n2,n1], null),(function (){var or__4131__auto__ = w;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return loom.graph._STAR_default_weight_STAR_;
}
})());
});})(g__$1))
,g__$1,edges);
});

loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$EditableGraph$remove_nodes_STAR_$arity$2 = (function (g,nodes){
var g__$1 = this;
var nbrs = cljs.core.mapcat.call(null,((function (g__$1){
return (function (p1__17123_SHARP_){
return loom.graph.successors.call(null,g__$1,p1__17123_SHARP_);
});})(g__$1))
,nodes);
return cljs.core.assoc.call(null,cljs.core.update_in.call(null,g__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),((function (nbrs,g__$1){
return (function (p1__17124_SHARP_){
return cljs.core.apply.call(null,cljs.core.disj,p1__17124_SHARP_,nodes);
});})(nbrs,g__$1))
),new cljs.core.Keyword(null,"adj","adj",-1344630196),loom.graph.remove_adj_nodes.call(null,new cljs.core.Keyword(null,"adj","adj",-1344630196).cljs$core$IFn$_invoke$arity$1(g__$1),nodes,nbrs,cljs.core.dissoc));
});

loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$EditableGraph$remove_edges_STAR_$arity$2 = (function (g,edges){
var g__$1 = this;
return cljs.core.reduce.call(null,((function (g__$1){
return (function (g__$2,p__17142){
var vec__17143 = p__17142;
var n1 = cljs.core.nth.call(null,vec__17143,(0),null);
var n2 = cljs.core.nth.call(null,vec__17143,(1),null);
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,g__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null),cljs.core.dissoc,n2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n2], null),cljs.core.dissoc,n1);
});})(g__$1))
,g__$1,edges);
});

loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$EditableGraph$remove_all$arity$1 = (function (g){
var g__$1 = this;
return cljs.core.assoc.call(null,g__$1,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"adj","adj",-1344630196),cljs.core.PersistentArrayMap.EMPTY);
});

loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$WeightedGraph$ = cljs.core.PROTOCOL_SENTINEL;

loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$WeightedGraph$weight_STAR_$arity$2 = (function (g,e){
var g__$1 = this;
return loom.graph.weight.call(null,g__$1,loom.graph.src.call(null,e),loom.graph.dest.call(null,e));
});

loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$WeightedGraph$weight_STAR_$arity$3 = (function (g,n1,n2){
var g__$1 = this;
return cljs.core.get_in.call(null,g__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1,n2], null));
});
loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Graph$ = cljs.core.PROTOCOL_SENTINEL;

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Graph$nodes$arity$1 = (function (g){
var g__$1 = this;
return new cljs.core.Keyword(null,"nodeset","nodeset",695991339).cljs$core$IFn$_invoke$arity$1(g__$1);
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Graph$edges$arity$1 = (function (g){
var g__$1 = this;
var iter__4523__auto__ = ((function (g__$1){
return (function loom$graph$iter__17152(s__17153){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__17153__$1 = s__17153;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__17153__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var n1 = cljs.core.first.call(null,xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__17153__$1,n1,xs__6277__auto__,temp__5720__auto__,g__$1){
return (function loom$graph$iter__17152_$_iter__17154(s__17155){
return (new cljs.core.LazySeq(null,((function (s__17153__$1,n1,xs__6277__auto__,temp__5720__auto__,g__$1){
return (function (){
var s__17155__$1 = s__17155;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__17155__$1);
if(temp__5720__auto____$1){
var s__17155__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17155__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__17155__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__17157 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__17156 = (0);
while(true){
if((i__17156 < size__4522__auto__)){
var e = cljs.core._nth.call(null,c__4521__auto__,i__17156);
cljs.core.chunk_append.call(null,b__17157,e);

var G__17181 = (i__17156 + (1));
i__17156 = G__17181;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17157),loom$graph$iter__17152_$_iter__17154.call(null,cljs.core.chunk_rest.call(null,s__17155__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17157),null);
}
} else {
var e = cljs.core.first.call(null,s__17155__$2);
return cljs.core.cons.call(null,e,loom$graph$iter__17152_$_iter__17154.call(null,cljs.core.rest.call(null,s__17155__$2)));
}
} else {
return null;
}
break;
}
});})(s__17153__$1,n1,xs__6277__auto__,temp__5720__auto__,g__$1))
,null,null));
});})(s__17153__$1,n1,xs__6277__auto__,temp__5720__auto__,g__$1))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,loom.graph.out_edges.call(null,g__$1,n1)));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,loom$graph$iter__17152.call(null,cljs.core.rest.call(null,s__17153__$1)));
} else {
var G__17182 = cljs.core.rest.call(null,s__17153__$1);
s__17153__$1 = G__17182;
continue;
}
} else {
return null;
}
break;
}
});})(g__$1))
,null,null));
});})(g__$1))
;
return iter__4523__auto__.call(null,loom.graph.nodes.call(null,g__$1));
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Graph$has_node_QMARK_$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"nodeset","nodeset",695991339).cljs$core$IFn$_invoke$arity$1(g__$1),node);
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Graph$has_edge_QMARK_$arity$3 = (function (g,n1,n2){
var g__$1 = this;
return cljs.core.contains_QMARK_.call(null,cljs.core.get_in.call(null,g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null)),n2);
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Graph$out_degree$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.count.call(null,cljs.core.get_in.call(null,g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),node], null)));
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Graph$out_edges$arity$2 = (function (g,node){
var g__$1 = this;
var iter__4523__auto__ = ((function (g__$1){
return (function loom$graph$iter__17158(s__17159){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__17159__$1 = s__17159;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__17159__$1);
if(temp__5720__auto__){
var s__17159__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17159__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__17159__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__17161 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__17160 = (0);
while(true){
if((i__17160 < size__4522__auto__)){
var n2 = cljs.core._nth.call(null,c__4521__auto__,i__17160);
cljs.core.chunk_append.call(null,b__17161,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__17183 = (i__17160 + (1));
i__17160 = G__17183;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17161),loom$graph$iter__17158.call(null,cljs.core.chunk_rest.call(null,s__17159__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17161),null);
}
} else {
var n2 = cljs.core.first.call(null,s__17159__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__17158.call(null,cljs.core.rest.call(null,s__17159__$2)));
}
} else {
return null;
}
break;
}
});})(g__$1))
,null,null));
});})(g__$1))
;
return iter__4523__auto__.call(null,loom.graph.successors.call(null,g__$1,node));
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Graph$successors_STAR_$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.keys.call(null,cljs.core.get_in.call(null,g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),node], null)));
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$EditableGraph$ = cljs.core.PROTOCOL_SENTINEL;

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$EditableGraph$add_nodes_STAR_$arity$2 = (function (g,nodes){
var g__$1 = this;
return cljs.core.reduce.call(null,((function (g__$1){
return (function (g__$2,node){
return cljs.core.update_in.call(null,g__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),cljs.core.conj,node);
});})(g__$1))
,g__$1,nodes);
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$EditableGraph$add_edges_STAR_$arity$2 = (function (g,edges){
var g__$1 = this;
return cljs.core.reduce.call(null,((function (g__$1){
return (function (g__$2,p__17162){
var vec__17163 = p__17162;
var seq__17164 = cljs.core.seq.call(null,vec__17163);
var first__17165 = cljs.core.first.call(null,seq__17164);
var seq__17164__$1 = cljs.core.next.call(null,seq__17164);
var n1 = first__17165;
var first__17165__$1 = cljs.core.first.call(null,seq__17164__$1);
var seq__17164__$2 = cljs.core.next.call(null,seq__17164__$1);
var n2 = first__17165__$1;
var vec__17166 = seq__17164__$2;
var w = cljs.core.nth.call(null,vec__17166,(0),null);
return cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,g__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),cljs.core.conj,n1,n2),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1,n2], null),(function (){var or__4131__auto__ = w;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return loom.graph._STAR_default_weight_STAR_;
}
})()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),n2], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),n1);
});})(g__$1))
,g__$1,edges);
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$EditableGraph$remove_nodes_STAR_$arity$2 = (function (g,nodes){
var g__$1 = this;
var ins = cljs.core.mapcat.call(null,((function (g__$1){
return (function (p1__17149_SHARP_){
return loom.graph.predecessors.call(null,g__$1,p1__17149_SHARP_);
});})(g__$1))
,nodes);
var outs = cljs.core.mapcat.call(null,((function (ins,g__$1){
return (function (p1__17150_SHARP_){
return loom.graph.successors.call(null,g__$1,p1__17150_SHARP_);
});})(ins,g__$1))
,nodes);
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.update_in.call(null,g__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),((function (ins,outs,g__$1){
return (function (p1__17151_SHARP_){
return cljs.core.apply.call(null,cljs.core.disj,p1__17151_SHARP_,nodes);
});})(ins,outs,g__$1))
),new cljs.core.Keyword(null,"adj","adj",-1344630196),loom.graph.remove_adj_nodes.call(null,new cljs.core.Keyword(null,"adj","adj",-1344630196).cljs$core$IFn$_invoke$arity$1(g__$1),nodes,ins,cljs.core.dissoc)),new cljs.core.Keyword(null,"in","in",-1531184865),loom.graph.remove_adj_nodes.call(null,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(g__$1),nodes,outs,cljs.core.disj));
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$EditableGraph$remove_edges_STAR_$arity$2 = (function (g,edges){
var g__$1 = this;
return cljs.core.reduce.call(null,((function (g__$1){
return (function (g__$2,p__17169){
var vec__17170 = p__17169;
var n1 = cljs.core.nth.call(null,vec__17170,(0),null);
var n2 = cljs.core.nth.call(null,vec__17170,(1),null);
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,g__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null),cljs.core.dissoc,n2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),n2], null),cljs.core.disj,n1);
});})(g__$1))
,g__$1,edges);
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$EditableGraph$remove_all$arity$1 = (function (g){
var g__$1 = this;
return cljs.core.assoc.call(null,g__$1,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"adj","adj",-1344630196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.PersistentArrayMap.EMPTY);
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Digraph$ = cljs.core.PROTOCOL_SENTINEL;

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Digraph$predecessors_STAR_$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.get_in.call(null,g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),node], null));
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Digraph$in_degree$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.count.call(null,cljs.core.get_in.call(null,g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),node], null)));
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Digraph$in_edges$arity$2 = (function (g,node){
var g__$1 = this;
var iter__4523__auto__ = ((function (g__$1){
return (function loom$graph$iter__17173(s__17174){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__17174__$1 = s__17174;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__17174__$1);
if(temp__5720__auto__){
var s__17174__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17174__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__17174__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__17176 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__17175 = (0);
while(true){
if((i__17175 < size__4522__auto__)){
var n2 = cljs.core._nth.call(null,c__4521__auto__,i__17175);
cljs.core.chunk_append.call(null,b__17176,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,node], null));

var G__17184 = (i__17175 + (1));
i__17175 = G__17184;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17176),loom$graph$iter__17173.call(null,cljs.core.chunk_rest.call(null,s__17174__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17176),null);
}
} else {
var n2 = cljs.core.first.call(null,s__17174__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,node], null),loom$graph$iter__17173.call(null,cljs.core.rest.call(null,s__17174__$2)));
}
} else {
return null;
}
break;
}
});})(g__$1))
,null,null));
});})(g__$1))
;
return iter__4523__auto__.call(null,loom.graph.predecessors.call(null,g__$1,node));
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Digraph$transpose$arity$1 = (function (g){
var g__$1 = this;
return cljs.core.reduce.call(null,((function (g__$1){
return (function (tg,p__17177){
var vec__17178 = p__17177;
var n1 = cljs.core.nth.call(null,vec__17178,(0),null);
var n2 = cljs.core.nth.call(null,vec__17178,(1),null);
return loom.graph.add_edges_STAR_.call(null,tg,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,n1,loom.graph.weight.call(null,g__$1,n1,n2)], null)], null));
});})(g__$1))
,cljs.core.assoc.call(null,g__$1,new cljs.core.Keyword(null,"adj","adj",-1344630196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.PersistentArrayMap.EMPTY),loom.graph.edges.call(null,g__$1));
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$WeightedGraph$ = cljs.core.PROTOCOL_SENTINEL;

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$WeightedGraph$weight_STAR_$arity$2 = (function (g,e){
var g__$1 = this;
return loom.graph.weight.call(null,g__$1,loom.graph.src.call(null,e),loom.graph.dest.call(null,e));
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$WeightedGraph$weight_STAR_$arity$3 = (function (g,n1,n2){
var g__$1 = this;
return cljs.core.get_in.call(null,g__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1,n2], null));
});
loom.graph.call_or_return = (function loom$graph$call_or_return(var_args){
var args__4736__auto__ = [];
var len__4730__auto___17187 = arguments.length;
var i__4731__auto___17188 = (0);
while(true){
if((i__4731__auto___17188 < len__4730__auto___17187)){
args__4736__auto__.push((arguments[i__4731__auto___17188]));

var G__17189 = (i__4731__auto___17188 + (1));
i__4731__auto___17188 = G__17189;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return loom.graph.call_or_return.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

loom.graph.call_or_return.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(cljs.core.fn_QMARK_.call(null,f)){
return cljs.core.apply.call(null,f,args);
} else {
return f;
}
});

loom.graph.call_or_return.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
loom.graph.call_or_return.cljs$lang$applyTo = (function (seq17185){
var G__17186 = cljs.core.first.call(null,seq17185);
var seq17185__$1 = cljs.core.next.call(null,seq17185);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17186,seq17185__$1);
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
loom.graph.FlyGraph = (function (fnodes,fedges,fsuccessors,start,__meta,__extmap,__hash){
this.fnodes = fnodes;
this.fedges = fedges;
this.fsuccessors = fsuccessors;
this.start = start;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
loom.graph.FlyGraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

loom.graph.FlyGraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k17191,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__17195 = k17191;
var G__17195__$1 = (((G__17195 instanceof cljs.core.Keyword))?G__17195.fqn:null);
switch (G__17195__$1) {
case "fnodes":
return self__.fnodes;

break;
case "fedges":
return self__.fedges;

break;
case "fsuccessors":
return self__.fsuccessors;

break;
case "start":
return self__.start;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k17191,else__4388__auto__);

}
});

loom.graph.FlyGraph.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__17196){
var vec__17197 = p__17196;
var k__4408__auto__ = cljs.core.nth.call(null,vec__17197,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__17197,(1),null);
return f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__);
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

loom.graph.FlyGraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,pr_pair__4402__auto__,"#loom.graph.FlyGraph{",", ","}",opts__4401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start","start",-355208981),self__.start],null))], null),self__.__extmap));
});

loom.graph.FlyGraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__17190){
var self__ = this;
var G__17190__$1 = this;
return (new cljs.core.RecordIter((0),G__17190__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"start","start",-355208981)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

loom.graph.FlyGraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

loom.graph.FlyGraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new loom.graph.FlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.start,self__.__meta,self__.__extmap,self__.__hash));
});

loom.graph.FlyGraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

loom.graph.FlyGraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1546683162 ^ cljs.core.hash_unordered_coll.call(null,coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
.call(null,this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

loom.graph.FlyGraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this17192,other17193){
var self__ = this;
var this17192__$1 = this;
return (((!((other17193 == null)))) && ((this17192__$1.constructor === other17193.constructor)) && (cljs.core._EQ_.call(null,this17192__$1.fnodes,other17193.fnodes)) && (cljs.core._EQ_.call(null,this17192__$1.fedges,other17193.fedges)) && (cljs.core._EQ_.call(null,this17192__$1.fsuccessors,other17193.fsuccessors)) && (cljs.core._EQ_.call(null,this17192__$1.start,other17193.start)) && (cljs.core._EQ_.call(null,this17192__$1.__extmap,other17193.__extmap)));
});

loom.graph.FlyGraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fedges","fedges",499673923),null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),null,new cljs.core.Keyword(null,"start","start",-355208981),null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new loom.graph.FlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.start,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4395__auto__)),null));
}
});

loom.graph.FlyGraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__17190){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__17200 = cljs.core.keyword_identical_QMARK_;
var expr__17201 = k__4393__auto__;
if(cljs.core.truth_(pred__17200.call(null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),expr__17201))){
return (new loom.graph.FlyGraph(G__17190,self__.fedges,self__.fsuccessors,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__17200.call(null,new cljs.core.Keyword(null,"fedges","fedges",499673923),expr__17201))){
return (new loom.graph.FlyGraph(self__.fnodes,G__17190,self__.fsuccessors,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__17200.call(null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),expr__17201))){
return (new loom.graph.FlyGraph(self__.fnodes,self__.fedges,G__17190,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__17200.call(null,new cljs.core.Keyword(null,"start","start",-355208981),expr__17201))){
return (new loom.graph.FlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,G__17190,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.FlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.start,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__17190),null));
}
}
}
}
});

loom.graph.FlyGraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start","start",-355208981),self__.start,null))], null),self__.__extmap));
});

loom.graph.FlyGraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__17190){
var self__ = this;
var this__4384__auto____$1 = this;
return (new loom.graph.FlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.start,G__17190,self__.__extmap,self__.__hash));
});

loom.graph.FlyGraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4391__auto__,(0)),cljs.core._nth.call(null,entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

loom.graph.FlyGraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fnodes","fnodes",1004698034,null),new cljs.core.Symbol(null,"fedges","fedges",2140205450,null),new cljs.core.Symbol(null,"fsuccessors","fsuccessors",-826676562,null),new cljs.core.Symbol(null,"start","start",1285322546,null)], null);
});

loom.graph.FlyGraph.cljs$lang$type = true;

loom.graph.FlyGraph.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"loom.graph/FlyGraph",null,(1),null));
});

loom.graph.FlyGraph.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"loom.graph/FlyGraph");
});

/**
 * Positional factory function for loom.graph/FlyGraph.
 */
loom.graph.__GT_FlyGraph = (function loom$graph$__GT_FlyGraph(fnodes,fedges,fsuccessors,start){
return (new loom.graph.FlyGraph(fnodes,fedges,fsuccessors,start,null,null,null));
});

/**
 * Factory function for loom.graph/FlyGraph, taking a map of keywords to field values.
 */
loom.graph.map__GT_FlyGraph = (function loom$graph$map__GT_FlyGraph(G__17194){
var extmap__4424__auto__ = (function (){var G__17203 = cljs.core.dissoc.call(null,G__17194,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"start","start",-355208981));
if(cljs.core.record_QMARK_.call(null,G__17194)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__17203);
} else {
return G__17203;
}
})();
return (new loom.graph.FlyGraph(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(G__17194),new cljs.core.Keyword(null,"fedges","fedges",499673923).cljs$core$IFn$_invoke$arity$1(G__17194),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207).cljs$core$IFn$_invoke$arity$1(G__17194),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(G__17194),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
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
loom.graph.FlyDigraph = (function (fnodes,fedges,fsuccessors,fpredecessors,start,__meta,__extmap,__hash){
this.fnodes = fnodes;
this.fedges = fedges;
this.fsuccessors = fsuccessors;
this.fpredecessors = fpredecessors;
this.start = start;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
loom.graph.FlyDigraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

loom.graph.FlyDigraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k17206,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__17210 = k17206;
var G__17210__$1 = (((G__17210 instanceof cljs.core.Keyword))?G__17210.fqn:null);
switch (G__17210__$1) {
case "fnodes":
return self__.fnodes;

break;
case "fedges":
return self__.fedges;

break;
case "fsuccessors":
return self__.fsuccessors;

break;
case "fpredecessors":
return self__.fpredecessors;

break;
case "start":
return self__.start;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k17206,else__4388__auto__);

}
});

loom.graph.FlyDigraph.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__17211){
var vec__17212 = p__17211;
var k__4408__auto__ = cljs.core.nth.call(null,vec__17212,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__17212,(1),null);
return f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__);
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

loom.graph.FlyDigraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,pr_pair__4402__auto__,"#loom.graph.FlyDigraph{",", ","}",opts__4401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),self__.fpredecessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start","start",-355208981),self__.start],null))], null),self__.__extmap));
});

loom.graph.FlyDigraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__17205){
var self__ = this;
var G__17205__$1 = this;
return (new cljs.core.RecordIter((0),G__17205__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),new cljs.core.Keyword(null,"start","start",-355208981)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

loom.graph.FlyDigraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

loom.graph.FlyDigraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.start,self__.__meta,self__.__extmap,self__.__hash));
});

loom.graph.FlyDigraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

loom.graph.FlyDigraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (1981361804 ^ cljs.core.hash_unordered_coll.call(null,coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
.call(null,this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

loom.graph.FlyDigraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this17207,other17208){
var self__ = this;
var this17207__$1 = this;
return (((!((other17208 == null)))) && ((this17207__$1.constructor === other17208.constructor)) && (cljs.core._EQ_.call(null,this17207__$1.fnodes,other17208.fnodes)) && (cljs.core._EQ_.call(null,this17207__$1.fedges,other17208.fedges)) && (cljs.core._EQ_.call(null,this17207__$1.fsuccessors,other17208.fsuccessors)) && (cljs.core._EQ_.call(null,this17207__$1.fpredecessors,other17208.fpredecessors)) && (cljs.core._EQ_.call(null,this17207__$1.start,other17208.start)) && (cljs.core._EQ_.call(null,this17207__$1.__extmap,other17208.__extmap)));
});

loom.graph.FlyDigraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fedges","fedges",499673923),null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),null,new cljs.core.Keyword(null,"start","start",-355208981),null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),null,new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.start,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4395__auto__)),null));
}
});

loom.graph.FlyDigraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__17205){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__17215 = cljs.core.keyword_identical_QMARK_;
var expr__17216 = k__4393__auto__;
if(cljs.core.truth_(pred__17215.call(null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),expr__17216))){
return (new loom.graph.FlyDigraph(G__17205,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__17215.call(null,new cljs.core.Keyword(null,"fedges","fedges",499673923),expr__17216))){
return (new loom.graph.FlyDigraph(self__.fnodes,G__17205,self__.fsuccessors,self__.fpredecessors,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__17215.call(null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),expr__17216))){
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,G__17205,self__.fpredecessors,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__17215.call(null,new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),expr__17216))){
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,G__17205,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__17215.call(null,new cljs.core.Keyword(null,"start","start",-355208981),expr__17216))){
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,G__17205,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.start,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__17205),null));
}
}
}
}
}
});

loom.graph.FlyDigraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),self__.fpredecessors,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start","start",-355208981),self__.start,null))], null),self__.__extmap));
});

loom.graph.FlyDigraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__17205){
var self__ = this;
var this__4384__auto____$1 = this;
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.start,G__17205,self__.__extmap,self__.__hash));
});

loom.graph.FlyDigraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4391__auto__,(0)),cljs.core._nth.call(null,entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

loom.graph.FlyDigraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fnodes","fnodes",1004698034,null),new cljs.core.Symbol(null,"fedges","fedges",2140205450,null),new cljs.core.Symbol(null,"fsuccessors","fsuccessors",-826676562,null),new cljs.core.Symbol(null,"fpredecessors","fpredecessors",227702593,null),new cljs.core.Symbol(null,"start","start",1285322546,null)], null);
});

loom.graph.FlyDigraph.cljs$lang$type = true;

loom.graph.FlyDigraph.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"loom.graph/FlyDigraph",null,(1),null));
});

loom.graph.FlyDigraph.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"loom.graph/FlyDigraph");
});

/**
 * Positional factory function for loom.graph/FlyDigraph.
 */
loom.graph.__GT_FlyDigraph = (function loom$graph$__GT_FlyDigraph(fnodes,fedges,fsuccessors,fpredecessors,start){
return (new loom.graph.FlyDigraph(fnodes,fedges,fsuccessors,fpredecessors,start,null,null,null));
});

/**
 * Factory function for loom.graph/FlyDigraph, taking a map of keywords to field values.
 */
loom.graph.map__GT_FlyDigraph = (function loom$graph$map__GT_FlyDigraph(G__17209){
var extmap__4424__auto__ = (function (){var G__17218 = cljs.core.dissoc.call(null,G__17209,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),new cljs.core.Keyword(null,"start","start",-355208981));
if(cljs.core.record_QMARK_.call(null,G__17209)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__17218);
} else {
return G__17218;
}
})();
return (new loom.graph.FlyDigraph(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(G__17209),new cljs.core.Keyword(null,"fedges","fedges",499673923).cljs$core$IFn$_invoke$arity$1(G__17209),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207).cljs$core$IFn$_invoke$arity$1(G__17209),new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934).cljs$core$IFn$_invoke$arity$1(G__17209),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(G__17209),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
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
loom.graph.WeightedFlyGraph = (function (fnodes,fedges,fsuccessors,fweight,start,__meta,__extmap,__hash){
this.fnodes = fnodes;
this.fedges = fedges;
this.fsuccessors = fsuccessors;
this.fweight = fweight;
this.start = start;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
loom.graph.WeightedFlyGraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k17221,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__17225 = k17221;
var G__17225__$1 = (((G__17225 instanceof cljs.core.Keyword))?G__17225.fqn:null);
switch (G__17225__$1) {
case "fnodes":
return self__.fnodes;

break;
case "fedges":
return self__.fedges;

break;
case "fsuccessors":
return self__.fsuccessors;

break;
case "fweight":
return self__.fweight;

break;
case "start":
return self__.start;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k17221,else__4388__auto__);

}
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__17226){
var vec__17227 = p__17226;
var k__4408__auto__ = cljs.core.nth.call(null,vec__17227,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__17227,(1),null);
return f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__);
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,pr_pair__4402__auto__,"#loom.graph.WeightedFlyGraph{",", ","}",opts__4401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fweight","fweight",1299924141),self__.fweight],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start","start",-355208981),self__.start],null))], null),self__.__extmap));
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__17220){
var self__ = this;
var G__17220__$1 = this;
return (new cljs.core.RecordIter((0),G__17220__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"fweight","fweight",1299924141),new cljs.core.Keyword(null,"start","start",-355208981)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,self__.__hash));
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1357917791 ^ cljs.core.hash_unordered_coll.call(null,coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
.call(null,this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this17222,other17223){
var self__ = this;
var this17222__$1 = this;
return (((!((other17223 == null)))) && ((this17222__$1.constructor === other17223.constructor)) && (cljs.core._EQ_.call(null,this17222__$1.fnodes,other17223.fnodes)) && (cljs.core._EQ_.call(null,this17222__$1.fedges,other17223.fedges)) && (cljs.core._EQ_.call(null,this17222__$1.fsuccessors,other17223.fsuccessors)) && (cljs.core._EQ_.call(null,this17222__$1.fweight,other17223.fweight)) && (cljs.core._EQ_.call(null,this17222__$1.start,other17223.start)) && (cljs.core._EQ_.call(null,this17222__$1.__extmap,other17223.__extmap)));
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fedges","fedges",499673923),null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),null,new cljs.core.Keyword(null,"start","start",-355208981),null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),null,new cljs.core.Keyword(null,"fweight","fweight",1299924141),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fweight,self__.start,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4395__auto__)),null));
}
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__17220){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__17230 = cljs.core.keyword_identical_QMARK_;
var expr__17231 = k__4393__auto__;
if(cljs.core.truth_(pred__17230.call(null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),expr__17231))){
return (new loom.graph.WeightedFlyGraph(G__17220,self__.fedges,self__.fsuccessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__17230.call(null,new cljs.core.Keyword(null,"fedges","fedges",499673923),expr__17231))){
return (new loom.graph.WeightedFlyGraph(self__.fnodes,G__17220,self__.fsuccessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__17230.call(null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),expr__17231))){
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,G__17220,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__17230.call(null,new cljs.core.Keyword(null,"fweight","fweight",1299924141),expr__17231))){
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,G__17220,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__17230.call(null,new cljs.core.Keyword(null,"start","start",-355208981),expr__17231))){
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fweight,G__17220,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fweight,self__.start,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__17220),null));
}
}
}
}
}
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fweight","fweight",1299924141),self__.fweight,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start","start",-355208981),self__.start,null))], null),self__.__extmap));
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__17220){
var self__ = this;
var this__4384__auto____$1 = this;
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fweight,self__.start,G__17220,self__.__extmap,self__.__hash));
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4391__auto__,(0)),cljs.core._nth.call(null,entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

loom.graph.WeightedFlyGraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fnodes","fnodes",1004698034,null),new cljs.core.Symbol(null,"fedges","fedges",2140205450,null),new cljs.core.Symbol(null,"fsuccessors","fsuccessors",-826676562,null),new cljs.core.Symbol(null,"fweight","fweight",-1354511628,null),new cljs.core.Symbol(null,"start","start",1285322546,null)], null);
});

loom.graph.WeightedFlyGraph.cljs$lang$type = true;

loom.graph.WeightedFlyGraph.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"loom.graph/WeightedFlyGraph",null,(1),null));
});

loom.graph.WeightedFlyGraph.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"loom.graph/WeightedFlyGraph");
});

/**
 * Positional factory function for loom.graph/WeightedFlyGraph.
 */
loom.graph.__GT_WeightedFlyGraph = (function loom$graph$__GT_WeightedFlyGraph(fnodes,fedges,fsuccessors,fweight,start){
return (new loom.graph.WeightedFlyGraph(fnodes,fedges,fsuccessors,fweight,start,null,null,null));
});

/**
 * Factory function for loom.graph/WeightedFlyGraph, taking a map of keywords to field values.
 */
loom.graph.map__GT_WeightedFlyGraph = (function loom$graph$map__GT_WeightedFlyGraph(G__17224){
var extmap__4424__auto__ = (function (){var G__17233 = cljs.core.dissoc.call(null,G__17224,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"fweight","fweight",1299924141),new cljs.core.Keyword(null,"start","start",-355208981));
if(cljs.core.record_QMARK_.call(null,G__17224)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__17233);
} else {
return G__17233;
}
})();
return (new loom.graph.WeightedFlyGraph(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(G__17224),new cljs.core.Keyword(null,"fedges","fedges",499673923).cljs$core$IFn$_invoke$arity$1(G__17224),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207).cljs$core$IFn$_invoke$arity$1(G__17224),new cljs.core.Keyword(null,"fweight","fweight",1299924141).cljs$core$IFn$_invoke$arity$1(G__17224),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(G__17224),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
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
loom.graph.WeightedFlyDigraph = (function (fnodes,fedges,fsuccessors,fpredecessors,fweight,start,__meta,__extmap,__hash){
this.fnodes = fnodes;
this.fedges = fedges;
this.fsuccessors = fsuccessors;
this.fpredecessors = fpredecessors;
this.fweight = fweight;
this.start = start;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
loom.graph.WeightedFlyDigraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k17236,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__17240 = k17236;
var G__17240__$1 = (((G__17240 instanceof cljs.core.Keyword))?G__17240.fqn:null);
switch (G__17240__$1) {
case "fnodes":
return self__.fnodes;

break;
case "fedges":
return self__.fedges;

break;
case "fsuccessors":
return self__.fsuccessors;

break;
case "fpredecessors":
return self__.fpredecessors;

break;
case "fweight":
return self__.fweight;

break;
case "start":
return self__.start;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k17236,else__4388__auto__);

}
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__17241){
var vec__17242 = p__17241;
var k__4408__auto__ = cljs.core.nth.call(null,vec__17242,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__17242,(1),null);
return f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__);
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,pr_pair__4402__auto__,"#loom.graph.WeightedFlyDigraph{",", ","}",opts__4401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),self__.fpredecessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fweight","fweight",1299924141),self__.fweight],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start","start",-355208981),self__.start],null))], null),self__.__extmap));
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__17235){
var self__ = this;
var G__17235__$1 = this;
return (new cljs.core.RecordIter((0),G__17235__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),new cljs.core.Keyword(null,"fweight","fweight",1299924141),new cljs.core.Keyword(null,"start","start",-355208981)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,self__.__hash));
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (6 + cljs.core.count.call(null,self__.__extmap));
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (788097524 ^ cljs.core.hash_unordered_coll.call(null,coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
.call(null,this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this17237,other17238){
var self__ = this;
var this17237__$1 = this;
return (((!((other17238 == null)))) && ((this17237__$1.constructor === other17238.constructor)) && (cljs.core._EQ_.call(null,this17237__$1.fnodes,other17238.fnodes)) && (cljs.core._EQ_.call(null,this17237__$1.fedges,other17238.fedges)) && (cljs.core._EQ_.call(null,this17237__$1.fsuccessors,other17238.fsuccessors)) && (cljs.core._EQ_.call(null,this17237__$1.fpredecessors,other17238.fpredecessors)) && (cljs.core._EQ_.call(null,this17237__$1.fweight,other17238.fweight)) && (cljs.core._EQ_.call(null,this17237__$1.start,other17238.start)) && (cljs.core._EQ_.call(null,this17237__$1.__extmap,other17238.__extmap)));
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"fedges","fedges",499673923),null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),null,new cljs.core.Keyword(null,"start","start",-355208981),null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),null,new cljs.core.Keyword(null,"fweight","fweight",1299924141),null,new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.fweight,self__.start,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4395__auto__)),null));
}
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__17235){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__17245 = cljs.core.keyword_identical_QMARK_;
var expr__17246 = k__4393__auto__;
if(cljs.core.truth_(pred__17245.call(null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),expr__17246))){
return (new loom.graph.WeightedFlyDigraph(G__17235,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__17245.call(null,new cljs.core.Keyword(null,"fedges","fedges",499673923),expr__17246))){
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,G__17235,self__.fsuccessors,self__.fpredecessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__17245.call(null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),expr__17246))){
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,G__17235,self__.fpredecessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__17245.call(null,new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),expr__17246))){
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,G__17235,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__17245.call(null,new cljs.core.Keyword(null,"fweight","fweight",1299924141),expr__17246))){
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,G__17235,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__17245.call(null,new cljs.core.Keyword(null,"start","start",-355208981),expr__17246))){
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.fweight,G__17235,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.fweight,self__.start,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__17235),null));
}
}
}
}
}
}
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),self__.fpredecessors,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fweight","fweight",1299924141),self__.fweight,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start","start",-355208981),self__.start,null))], null),self__.__extmap));
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__17235){
var self__ = this;
var this__4384__auto____$1 = this;
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.fweight,self__.start,G__17235,self__.__extmap,self__.__hash));
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4391__auto__,(0)),cljs.core._nth.call(null,entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

loom.graph.WeightedFlyDigraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fnodes","fnodes",1004698034,null),new cljs.core.Symbol(null,"fedges","fedges",2140205450,null),new cljs.core.Symbol(null,"fsuccessors","fsuccessors",-826676562,null),new cljs.core.Symbol(null,"fpredecessors","fpredecessors",227702593,null),new cljs.core.Symbol(null,"fweight","fweight",-1354511628,null),new cljs.core.Symbol(null,"start","start",1285322546,null)], null);
});

loom.graph.WeightedFlyDigraph.cljs$lang$type = true;

loom.graph.WeightedFlyDigraph.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"loom.graph/WeightedFlyDigraph",null,(1),null));
});

loom.graph.WeightedFlyDigraph.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"loom.graph/WeightedFlyDigraph");
});

/**
 * Positional factory function for loom.graph/WeightedFlyDigraph.
 */
loom.graph.__GT_WeightedFlyDigraph = (function loom$graph$__GT_WeightedFlyDigraph(fnodes,fedges,fsuccessors,fpredecessors,fweight,start){
return (new loom.graph.WeightedFlyDigraph(fnodes,fedges,fsuccessors,fpredecessors,fweight,start,null,null,null));
});

/**
 * Factory function for loom.graph/WeightedFlyDigraph, taking a map of keywords to field values.
 */
loom.graph.map__GT_WeightedFlyDigraph = (function loom$graph$map__GT_WeightedFlyDigraph(G__17239){
var extmap__4424__auto__ = (function (){var G__17248 = cljs.core.dissoc.call(null,G__17239,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),new cljs.core.Keyword(null,"fweight","fweight",1299924141),new cljs.core.Keyword(null,"start","start",-355208981));
if(cljs.core.record_QMARK_.call(null,G__17239)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__17248);
} else {
return G__17248;
}
})();
return (new loom.graph.WeightedFlyDigraph(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(G__17239),new cljs.core.Keyword(null,"fedges","fedges",499673923).cljs$core$IFn$_invoke$arity$1(G__17239),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207).cljs$core$IFn$_invoke$arity$1(G__17239),new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934).cljs$core$IFn$_invoke$arity$1(G__17239),new cljs.core.Keyword(null,"fweight","fweight",1299924141).cljs$core$IFn$_invoke$arity$1(G__17239),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(G__17239),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
});

loom.graph.FlyGraph.prototype.loom$graph$Graph$ = cljs.core.PROTOCOL_SENTINEL;

loom.graph.FlyGraph.prototype.loom$graph$Graph$nodes$arity$1 = (function (g){
var g__$1 = this;
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(g__$1);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.not.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(g__$1));
}
})())){
return loom.graph.call_or_return.call(null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(g__$1));
} else {
return loom.alg_generic.bf_traverse.call(null,loom.graph.successors.call(null,g__$1),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(g__$1));
}
});

loom.graph.FlyGraph.prototype.loom$graph$Graph$edges$arity$1 = (function (g){
var g__$1 = this;
if(cljs.core.truth_(new cljs.core.Keyword(null,"fedges","fedges",499673923).cljs$core$IFn$_invoke$arity$1(g__$1))){
return loom.graph.call_or_return.call(null,new cljs.core.Keyword(null,"fedges","fedges",499673923).cljs$core$IFn$_invoke$arity$1(g__$1));
} else {
var iter__4523__auto__ = ((function (g__$1){
return (function loom$graph$iter__17250(s__17251){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__17251__$1 = s__17251;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__17251__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var n = cljs.core.first.call(null,xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__17251__$1,n,xs__6277__auto__,temp__5720__auto__,g__$1){
return (function loom$graph$iter__17250_$_iter__17252(s__17253){
return (new cljs.core.LazySeq(null,((function (s__17251__$1,n,xs__6277__auto__,temp__5720__auto__,g__$1){
return (function (){
var s__17253__$1 = s__17253;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__17253__$1);
if(temp__5720__auto____$1){
var s__17253__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17253__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__17253__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__17255 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__17254 = (0);
while(true){
if((i__17254 < size__4522__auto__)){
var nbr = cljs.core._nth.call(null,c__4521__auto__,i__17254);
cljs.core.chunk_append.call(null,b__17255,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null));

var G__17260 = (i__17254 + (1));
i__17254 = G__17260;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17255),loom$graph$iter__17250_$_iter__17252.call(null,cljs.core.chunk_rest.call(null,s__17253__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17255),null);
}
} else {
var nbr = cljs.core.first.call(null,s__17253__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null),loom$graph$iter__17250_$_iter__17252.call(null,cljs.core.rest.call(null,s__17253__$2)));
}
} else {
return null;
}
break;
}
});})(s__17251__$1,n,xs__6277__auto__,temp__5720__auto__,g__$1))
,null,null));
});})(s__17251__$1,n,xs__6277__auto__,temp__5720__auto__,g__$1))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,loom.graph.successors.call(null,g__$1,n)));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,loom$graph$iter__17250.call(null,cljs.core.rest.call(null,s__17251__$1)));
} else {
var G__17261 = cljs.core.rest.call(null,s__17251__$1);
s__17251__$1 = G__17261;
continue;
}
} else {
return null;
}
break;
}
});})(g__$1))
,null,null));
});})(g__$1))
;
return iter__4523__auto__.call(null,loom.graph.nodes.call(null,g__$1));
}
});

loom.graph.FlyGraph.prototype.loom$graph$Graph$successors_STAR_$arity$2 = (function (g,node){
var g__$1 = this;
return loom.graph.call_or_return.call(null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207).cljs$core$IFn$_invoke$arity$1(g__$1),node);
});

loom.graph.FlyGraph.prototype.loom$graph$Graph$out_degree$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.count.call(null,loom.graph.successors.call(null,g__$1,node));
});

loom.graph.FlyGraph.prototype.loom$graph$Graph$out_edges$arity$2 = (function (g,node){
var g__$1 = this;
var iter__4523__auto__ = ((function (g__$1){
return (function loom$graph$iter__17256(s__17257){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__17257__$1 = s__17257;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__17257__$1);
if(temp__5720__auto__){
var s__17257__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17257__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__17257__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__17259 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__17258 = (0);
while(true){
if((i__17258 < size__4522__auto__)){
var n2 = cljs.core._nth.call(null,c__4521__auto__,i__17258);
cljs.core.chunk_append.call(null,b__17259,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__17262 = (i__17258 + (1));
i__17258 = G__17262;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17259),loom$graph$iter__17256.call(null,cljs.core.chunk_rest.call(null,s__17257__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17259),null);
}
} else {
var n2 = cljs.core.first.call(null,s__17257__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__17256.call(null,cljs.core.rest.call(null,s__17257__$2)));
}
} else {
return null;
}
break;
}
});})(g__$1))
,null,null));
});})(g__$1))
;
return iter__4523__auto__.call(null,loom.graph.successors.call(null,g__$1,node));
});

loom.graph.FlyGraph.prototype.loom$graph$Graph$has_node_QMARK_$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([node]),loom.graph.nodes.call(null,g__$1));
});

loom.graph.FlyGraph.prototype.loom$graph$Graph$has_edge_QMARK_$arity$3 = (function (g,n1,n2){
var g__$1 = this;
return cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n1,n2], null)]),loom.graph.edges.call(null,g__$1));
});
loom.graph.FlyDigraph.prototype.loom$graph$Graph$ = cljs.core.PROTOCOL_SENTINEL;

loom.graph.FlyDigraph.prototype.loom$graph$Graph$nodes$arity$1 = (function (g){
var g__$1 = this;
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(g__$1);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.not.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(g__$1));
}
})())){
return loom.graph.call_or_return.call(null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(g__$1));
} else {
return loom.alg_generic.bf_traverse.call(null,loom.graph.successors.call(null,g__$1),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(g__$1));
}
});

loom.graph.FlyDigraph.prototype.loom$graph$Graph$edges$arity$1 = (function (g){
var g__$1 = this;
if(cljs.core.truth_(new cljs.core.Keyword(null,"fedges","fedges",499673923).cljs$core$IFn$_invoke$arity$1(g__$1))){
return loom.graph.call_or_return.call(null,new cljs.core.Keyword(null,"fedges","fedges",499673923).cljs$core$IFn$_invoke$arity$1(g__$1));
} else {
var iter__4523__auto__ = ((function (g__$1){
return (function loom$graph$iter__17263(s__17264){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__17264__$1 = s__17264;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__17264__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var n = cljs.core.first.call(null,xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__17264__$1,n,xs__6277__auto__,temp__5720__auto__,g__$1){
return (function loom$graph$iter__17263_$_iter__17265(s__17266){
return (new cljs.core.LazySeq(null,((function (s__17264__$1,n,xs__6277__auto__,temp__5720__auto__,g__$1){
return (function (){
var s__17266__$1 = s__17266;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__17266__$1);
if(temp__5720__auto____$1){
var s__17266__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17266__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__17266__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__17268 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__17267 = (0);
while(true){
if((i__17267 < size__4522__auto__)){
var nbr = cljs.core._nth.call(null,c__4521__auto__,i__17267);
cljs.core.chunk_append.call(null,b__17268,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null));

var G__17277 = (i__17267 + (1));
i__17267 = G__17277;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17268),loom$graph$iter__17263_$_iter__17265.call(null,cljs.core.chunk_rest.call(null,s__17266__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17268),null);
}
} else {
var nbr = cljs.core.first.call(null,s__17266__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null),loom$graph$iter__17263_$_iter__17265.call(null,cljs.core.rest.call(null,s__17266__$2)));
}
} else {
return null;
}
break;
}
});})(s__17264__$1,n,xs__6277__auto__,temp__5720__auto__,g__$1))
,null,null));
});})(s__17264__$1,n,xs__6277__auto__,temp__5720__auto__,g__$1))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,loom.graph.successors.call(null,g__$1,n)));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,loom$graph$iter__17263.call(null,cljs.core.rest.call(null,s__17264__$1)));
} else {
var G__17278 = cljs.core.rest.call(null,s__17264__$1);
s__17264__$1 = G__17278;
continue;
}
} else {
return null;
}
break;
}
});})(g__$1))
,null,null));
});})(g__$1))
;
return iter__4523__auto__.call(null,loom.graph.nodes.call(null,g__$1));
}
});

loom.graph.FlyDigraph.prototype.loom$graph$Graph$successors_STAR_$arity$2 = (function (g,node){
var g__$1 = this;
return loom.graph.call_or_return.call(null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207).cljs$core$IFn$_invoke$arity$1(g__$1),node);
});

loom.graph.FlyDigraph.prototype.loom$graph$Graph$out_degree$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.count.call(null,loom.graph.successors.call(null,g__$1,node));
});

loom.graph.FlyDigraph.prototype.loom$graph$Graph$out_edges$arity$2 = (function (g,node){
var g__$1 = this;
var iter__4523__auto__ = ((function (g__$1){
return (function loom$graph$iter__17269(s__17270){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__17270__$1 = s__17270;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__17270__$1);
if(temp__5720__auto__){
var s__17270__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17270__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__17270__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__17272 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__17271 = (0);
while(true){
if((i__17271 < size__4522__auto__)){
var n2 = cljs.core._nth.call(null,c__4521__auto__,i__17271);
cljs.core.chunk_append.call(null,b__17272,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__17279 = (i__17271 + (1));
i__17271 = G__17279;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17272),loom$graph$iter__17269.call(null,cljs.core.chunk_rest.call(null,s__17270__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17272),null);
}
} else {
var n2 = cljs.core.first.call(null,s__17270__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__17269.call(null,cljs.core.rest.call(null,s__17270__$2)));
}
} else {
return null;
}
break;
}
});})(g__$1))
,null,null));
});})(g__$1))
;
return iter__4523__auto__.call(null,loom.graph.successors.call(null,g__$1,node));
});

loom.graph.FlyDigraph.prototype.loom$graph$Graph$has_node_QMARK_$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([node]),loom.graph.nodes.call(null,g__$1));
});

loom.graph.FlyDigraph.prototype.loom$graph$Graph$has_edge_QMARK_$arity$3 = (function (g,n1,n2){
var g__$1 = this;
return cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n1,n2], null)]),loom.graph.edges.call(null,g__$1));
});

loom.graph.FlyDigraph.prototype.loom$graph$Digraph$ = cljs.core.PROTOCOL_SENTINEL;

loom.graph.FlyDigraph.prototype.loom$graph$Digraph$predecessors_STAR_$arity$2 = (function (g,node){
var g__$1 = this;
return loom.graph.call_or_return.call(null,new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934).cljs$core$IFn$_invoke$arity$1(g__$1),node);
});

loom.graph.FlyDigraph.prototype.loom$graph$Digraph$in_degree$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.count.call(null,loom.graph.predecessors.call(null,g__$1,node));
});

loom.graph.FlyDigraph.prototype.loom$graph$Digraph$in_edges$arity$2 = (function (g,node){
var g__$1 = this;
var iter__4523__auto__ = ((function (g__$1){
return (function loom$graph$iter__17273(s__17274){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__17274__$1 = s__17274;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__17274__$1);
if(temp__5720__auto__){
var s__17274__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17274__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__17274__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__17276 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__17275 = (0);
while(true){
if((i__17275 < size__4522__auto__)){
var n2 = cljs.core._nth.call(null,c__4521__auto__,i__17275);
cljs.core.chunk_append.call(null,b__17276,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,node], null));

var G__17280 = (i__17275 + (1));
i__17275 = G__17280;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17276),loom$graph$iter__17273.call(null,cljs.core.chunk_rest.call(null,s__17274__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17276),null);
}
} else {
var n2 = cljs.core.first.call(null,s__17274__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,node], null),loom$graph$iter__17273.call(null,cljs.core.rest.call(null,s__17274__$2)));
}
} else {
return null;
}
break;
}
});})(g__$1))
,null,null));
});})(g__$1))
;
return iter__4523__auto__.call(null,loom.graph.predecessors.call(null,g__$1,node));
});
loom.graph.WeightedFlyGraph.prototype.loom$graph$Graph$ = cljs.core.PROTOCOL_SENTINEL;

loom.graph.WeightedFlyGraph.prototype.loom$graph$Graph$nodes$arity$1 = (function (g){
var g__$1 = this;
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(g__$1);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.not.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(g__$1));
}
})())){
return loom.graph.call_or_return.call(null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(g__$1));
} else {
return loom.alg_generic.bf_traverse.call(null,loom.graph.successors.call(null,g__$1),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(g__$1));
}
});

loom.graph.WeightedFlyGraph.prototype.loom$graph$Graph$edges$arity$1 = (function (g){
var g__$1 = this;
if(cljs.core.truth_(new cljs.core.Keyword(null,"fedges","fedges",499673923).cljs$core$IFn$_invoke$arity$1(g__$1))){
return loom.graph.call_or_return.call(null,new cljs.core.Keyword(null,"fedges","fedges",499673923).cljs$core$IFn$_invoke$arity$1(g__$1));
} else {
var iter__4523__auto__ = ((function (g__$1){
return (function loom$graph$iter__17281(s__17282){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__17282__$1 = s__17282;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__17282__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var n = cljs.core.first.call(null,xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__17282__$1,n,xs__6277__auto__,temp__5720__auto__,g__$1){
return (function loom$graph$iter__17281_$_iter__17283(s__17284){
return (new cljs.core.LazySeq(null,((function (s__17282__$1,n,xs__6277__auto__,temp__5720__auto__,g__$1){
return (function (){
var s__17284__$1 = s__17284;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__17284__$1);
if(temp__5720__auto____$1){
var s__17284__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17284__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__17284__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__17286 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__17285 = (0);
while(true){
if((i__17285 < size__4522__auto__)){
var nbr = cljs.core._nth.call(null,c__4521__auto__,i__17285);
cljs.core.chunk_append.call(null,b__17286,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null));

var G__17291 = (i__17285 + (1));
i__17285 = G__17291;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17286),loom$graph$iter__17281_$_iter__17283.call(null,cljs.core.chunk_rest.call(null,s__17284__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17286),null);
}
} else {
var nbr = cljs.core.first.call(null,s__17284__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null),loom$graph$iter__17281_$_iter__17283.call(null,cljs.core.rest.call(null,s__17284__$2)));
}
} else {
return null;
}
break;
}
});})(s__17282__$1,n,xs__6277__auto__,temp__5720__auto__,g__$1))
,null,null));
});})(s__17282__$1,n,xs__6277__auto__,temp__5720__auto__,g__$1))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,loom.graph.successors.call(null,g__$1,n)));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,loom$graph$iter__17281.call(null,cljs.core.rest.call(null,s__17282__$1)));
} else {
var G__17292 = cljs.core.rest.call(null,s__17282__$1);
s__17282__$1 = G__17292;
continue;
}
} else {
return null;
}
break;
}
});})(g__$1))
,null,null));
});})(g__$1))
;
return iter__4523__auto__.call(null,loom.graph.nodes.call(null,g__$1));
}
});

loom.graph.WeightedFlyGraph.prototype.loom$graph$Graph$successors_STAR_$arity$2 = (function (g,node){
var g__$1 = this;
return loom.graph.call_or_return.call(null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207).cljs$core$IFn$_invoke$arity$1(g__$1),node);
});

loom.graph.WeightedFlyGraph.prototype.loom$graph$Graph$out_degree$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.count.call(null,loom.graph.successors.call(null,g__$1,node));
});

loom.graph.WeightedFlyGraph.prototype.loom$graph$Graph$out_edges$arity$2 = (function (g,node){
var g__$1 = this;
var iter__4523__auto__ = ((function (g__$1){
return (function loom$graph$iter__17287(s__17288){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__17288__$1 = s__17288;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__17288__$1);
if(temp__5720__auto__){
var s__17288__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17288__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__17288__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__17290 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__17289 = (0);
while(true){
if((i__17289 < size__4522__auto__)){
var n2 = cljs.core._nth.call(null,c__4521__auto__,i__17289);
cljs.core.chunk_append.call(null,b__17290,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__17293 = (i__17289 + (1));
i__17289 = G__17293;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17290),loom$graph$iter__17287.call(null,cljs.core.chunk_rest.call(null,s__17288__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17290),null);
}
} else {
var n2 = cljs.core.first.call(null,s__17288__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__17287.call(null,cljs.core.rest.call(null,s__17288__$2)));
}
} else {
return null;
}
break;
}
});})(g__$1))
,null,null));
});})(g__$1))
;
return iter__4523__auto__.call(null,loom.graph.successors.call(null,g__$1,node));
});

loom.graph.WeightedFlyGraph.prototype.loom$graph$Graph$has_node_QMARK_$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([node]),loom.graph.nodes.call(null,g__$1));
});

loom.graph.WeightedFlyGraph.prototype.loom$graph$Graph$has_edge_QMARK_$arity$3 = (function (g,n1,n2){
var g__$1 = this;
return cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n1,n2], null)]),loom.graph.edges.call(null,g__$1));
});

loom.graph.WeightedFlyGraph.prototype.loom$graph$WeightedGraph$ = cljs.core.PROTOCOL_SENTINEL;

loom.graph.WeightedFlyGraph.prototype.loom$graph$WeightedGraph$weight_STAR_$arity$2 = (function (g,e){
var g__$1 = this;
return loom.graph.weight.call(null,g__$1,loom.graph.src.call(null,e),loom.graph.dest.call(null,e));
});

loom.graph.WeightedFlyGraph.prototype.loom$graph$WeightedGraph$weight_STAR_$arity$3 = (function (g,n1,n2){
var g__$1 = this;
return loom.graph.call_or_return.call(null,new cljs.core.Keyword(null,"fweight","fweight",1299924141).cljs$core$IFn$_invoke$arity$1(g__$1),n1,n2);
});
loom.graph.WeightedFlyDigraph.prototype.loom$graph$Graph$ = cljs.core.PROTOCOL_SENTINEL;

loom.graph.WeightedFlyDigraph.prototype.loom$graph$Graph$nodes$arity$1 = (function (g){
var g__$1 = this;
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(g__$1);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.not.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(g__$1));
}
})())){
return loom.graph.call_or_return.call(null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(g__$1));
} else {
return loom.alg_generic.bf_traverse.call(null,loom.graph.successors.call(null,g__$1),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(g__$1));
}
});

loom.graph.WeightedFlyDigraph.prototype.loom$graph$Graph$edges$arity$1 = (function (g){
var g__$1 = this;
if(cljs.core.truth_(new cljs.core.Keyword(null,"fedges","fedges",499673923).cljs$core$IFn$_invoke$arity$1(g__$1))){
return loom.graph.call_or_return.call(null,new cljs.core.Keyword(null,"fedges","fedges",499673923).cljs$core$IFn$_invoke$arity$1(g__$1));
} else {
var iter__4523__auto__ = ((function (g__$1){
return (function loom$graph$iter__17294(s__17295){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__17295__$1 = s__17295;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__17295__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var n = cljs.core.first.call(null,xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__17295__$1,n,xs__6277__auto__,temp__5720__auto__,g__$1){
return (function loom$graph$iter__17294_$_iter__17296(s__17297){
return (new cljs.core.LazySeq(null,((function (s__17295__$1,n,xs__6277__auto__,temp__5720__auto__,g__$1){
return (function (){
var s__17297__$1 = s__17297;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__17297__$1);
if(temp__5720__auto____$1){
var s__17297__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17297__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__17297__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__17299 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__17298 = (0);
while(true){
if((i__17298 < size__4522__auto__)){
var nbr = cljs.core._nth.call(null,c__4521__auto__,i__17298);
cljs.core.chunk_append.call(null,b__17299,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null));

var G__17308 = (i__17298 + (1));
i__17298 = G__17308;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17299),loom$graph$iter__17294_$_iter__17296.call(null,cljs.core.chunk_rest.call(null,s__17297__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17299),null);
}
} else {
var nbr = cljs.core.first.call(null,s__17297__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null),loom$graph$iter__17294_$_iter__17296.call(null,cljs.core.rest.call(null,s__17297__$2)));
}
} else {
return null;
}
break;
}
});})(s__17295__$1,n,xs__6277__auto__,temp__5720__auto__,g__$1))
,null,null));
});})(s__17295__$1,n,xs__6277__auto__,temp__5720__auto__,g__$1))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,loom.graph.successors.call(null,g__$1,n)));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,loom$graph$iter__17294.call(null,cljs.core.rest.call(null,s__17295__$1)));
} else {
var G__17309 = cljs.core.rest.call(null,s__17295__$1);
s__17295__$1 = G__17309;
continue;
}
} else {
return null;
}
break;
}
});})(g__$1))
,null,null));
});})(g__$1))
;
return iter__4523__auto__.call(null,loom.graph.nodes.call(null,g__$1));
}
});

loom.graph.WeightedFlyDigraph.prototype.loom$graph$Graph$successors_STAR_$arity$2 = (function (g,node){
var g__$1 = this;
return loom.graph.call_or_return.call(null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207).cljs$core$IFn$_invoke$arity$1(g__$1),node);
});

loom.graph.WeightedFlyDigraph.prototype.loom$graph$Graph$out_degree$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.count.call(null,loom.graph.successors.call(null,g__$1,node));
});

loom.graph.WeightedFlyDigraph.prototype.loom$graph$Graph$out_edges$arity$2 = (function (g,node){
var g__$1 = this;
var iter__4523__auto__ = ((function (g__$1){
return (function loom$graph$iter__17300(s__17301){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__17301__$1 = s__17301;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__17301__$1);
if(temp__5720__auto__){
var s__17301__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17301__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__17301__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__17303 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__17302 = (0);
while(true){
if((i__17302 < size__4522__auto__)){
var n2 = cljs.core._nth.call(null,c__4521__auto__,i__17302);
cljs.core.chunk_append.call(null,b__17303,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__17310 = (i__17302 + (1));
i__17302 = G__17310;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17303),loom$graph$iter__17300.call(null,cljs.core.chunk_rest.call(null,s__17301__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17303),null);
}
} else {
var n2 = cljs.core.first.call(null,s__17301__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__17300.call(null,cljs.core.rest.call(null,s__17301__$2)));
}
} else {
return null;
}
break;
}
});})(g__$1))
,null,null));
});})(g__$1))
;
return iter__4523__auto__.call(null,loom.graph.successors.call(null,g__$1,node));
});

loom.graph.WeightedFlyDigraph.prototype.loom$graph$Graph$has_node_QMARK_$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([node]),loom.graph.nodes.call(null,g__$1));
});

loom.graph.WeightedFlyDigraph.prototype.loom$graph$Graph$has_edge_QMARK_$arity$3 = (function (g,n1,n2){
var g__$1 = this;
return cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n1,n2], null)]),loom.graph.edges.call(null,g__$1));
});

loom.graph.WeightedFlyDigraph.prototype.loom$graph$Digraph$ = cljs.core.PROTOCOL_SENTINEL;

loom.graph.WeightedFlyDigraph.prototype.loom$graph$Digraph$predecessors_STAR_$arity$2 = (function (g,node){
var g__$1 = this;
return loom.graph.call_or_return.call(null,new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934).cljs$core$IFn$_invoke$arity$1(g__$1),node);
});

loom.graph.WeightedFlyDigraph.prototype.loom$graph$Digraph$in_degree$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.count.call(null,loom.graph.predecessors.call(null,g__$1,node));
});

loom.graph.WeightedFlyDigraph.prototype.loom$graph$Digraph$in_edges$arity$2 = (function (g,node){
var g__$1 = this;
var iter__4523__auto__ = ((function (g__$1){
return (function loom$graph$iter__17304(s__17305){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__17305__$1 = s__17305;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__17305__$1);
if(temp__5720__auto__){
var s__17305__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17305__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__17305__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__17307 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__17306 = (0);
while(true){
if((i__17306 < size__4522__auto__)){
var n2 = cljs.core._nth.call(null,c__4521__auto__,i__17306);
cljs.core.chunk_append.call(null,b__17307,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,node], null));

var G__17311 = (i__17306 + (1));
i__17306 = G__17311;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17307),loom$graph$iter__17304.call(null,cljs.core.chunk_rest.call(null,s__17305__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17307),null);
}
} else {
var n2 = cljs.core.first.call(null,s__17305__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,node], null),loom$graph$iter__17304.call(null,cljs.core.rest.call(null,s__17305__$2)));
}
} else {
return null;
}
break;
}
});})(g__$1))
,null,null));
});})(g__$1))
;
return iter__4523__auto__.call(null,loom.graph.predecessors.call(null,g__$1,node));
});

loom.graph.WeightedFlyDigraph.prototype.loom$graph$WeightedGraph$ = cljs.core.PROTOCOL_SENTINEL;

loom.graph.WeightedFlyDigraph.prototype.loom$graph$WeightedGraph$weight_STAR_$arity$2 = (function (g,e){
var g__$1 = this;
return loom.graph.weight.call(null,g__$1,loom.graph.src.call(null,e),loom.graph.dest.call(null,e));
});

loom.graph.WeightedFlyDigraph.prototype.loom$graph$WeightedGraph$weight_STAR_$arity$3 = (function (g,n1,n2){
var g__$1 = this;
return loom.graph.call_or_return.call(null,new cljs.core.Keyword(null,"fweight","fweight",1299924141).cljs$core$IFn$_invoke$arity$1(g__$1),n1,n2);
});
/**
 * Returns a graph with only the given nodes
 */
loom.graph.subgraph = (function loom$graph$subgraph(g,ns){
return loom.graph.remove_nodes_STAR_.call(null,g,cljs.core.remove.call(null,cljs.core.set.call(null,ns),loom.graph.nodes.call(null,g)));
});
/**
 * Adds a path of edges connecting the given nodes in order
 */
loom.graph.add_path = (function loom$graph$add_path(var_args){
var args__4736__auto__ = [];
var len__4730__auto___17314 = arguments.length;
var i__4731__auto___17315 = (0);
while(true){
if((i__4731__auto___17315 < len__4730__auto___17314)){
args__4736__auto__.push((arguments[i__4731__auto___17315]));

var G__17316 = (i__4731__auto___17315 + (1));
i__4731__auto___17315 = G__17316;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return loom.graph.add_path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

loom.graph.add_path.cljs$core$IFn$_invoke$arity$variadic = (function (g,nodes){
return loom.graph.add_edges_STAR_.call(null,g,cljs.core.partition.call(null,(2),(1),nodes));
});

loom.graph.add_path.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
loom.graph.add_path.cljs$lang$applyTo = (function (seq17312){
var G__17313 = cljs.core.first.call(null,seq17312);
var seq17312__$1 = cljs.core.next.call(null,seq17312);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17313,seq17312__$1);
});

/**
 * Adds a cycle of edges connecting the given nodes in order
 */
loom.graph.add_cycle = (function loom$graph$add_cycle(var_args){
var args__4736__auto__ = [];
var len__4730__auto___17319 = arguments.length;
var i__4731__auto___17320 = (0);
while(true){
if((i__4731__auto___17320 < len__4730__auto___17319)){
args__4736__auto__.push((arguments[i__4731__auto___17320]));

var G__17321 = (i__4731__auto___17320 + (1));
i__4731__auto___17320 = G__17321;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return loom.graph.add_cycle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

loom.graph.add_cycle.cljs$core$IFn$_invoke$arity$variadic = (function (g,nodes){
return loom.graph.add_edges_STAR_.call(null,g,cljs.core.partition.call(null,(2),(1),cljs.core.concat.call(null,nodes,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,nodes)], null))));
});

loom.graph.add_cycle.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
loom.graph.add_cycle.cljs$lang$applyTo = (function (seq17317){
var G__17318 = cljs.core.first.call(null,seq17317);
var seq17317__$1 = cljs.core.next.call(null,seq17317);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17318,seq17317__$1);
});

/**
 * Returns true if g satisfies the Graph protocol
 */
loom.graph.graph_QMARK_ = (function loom$graph$graph_QMARK_(g){
if((!((g == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === g.loom$graph$Graph$)))){
return true;
} else {
if((!g.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,loom.graph.Graph,g);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,loom.graph.Graph,g);
}
});
/**
 * Returns true if g satisfies the Digraph protocol
 */
loom.graph.directed_QMARK_ = (function loom$graph$directed_QMARK_(g){
if((!((g == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === g.loom$graph$Digraph$)))){
return true;
} else {
if((!g.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,loom.graph.Digraph,g);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,loom.graph.Digraph,g);
}
});
/**
 * Returns true if g satisfies the WeightedGraph protocol
 */
loom.graph.weighted_QMARK_ = (function loom$graph$weighted_QMARK_(g){
if((!((g == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === g.loom$graph$WeightedGraph$)))){
return true;
} else {
if((!g.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,loom.graph.WeightedGraph,g);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,loom.graph.WeightedGraph,g);
}
});
/**
 * Returns true if g satisfies the EditableGraph protocol
 */
loom.graph.editable_QMARK_ = (function loom$graph$editable_QMARK_(g){
if((!((g == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === g.loom$graph$EditableGraph$)))){
return true;
} else {
if((!g.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,loom.graph.EditableGraph,g);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,loom.graph.EditableGraph,g);
}
});
/**
 * Builds up a graph (i.e. adds edges and nodes) from any combination of
 *   other graphs, adjacency maps, edges, or nodes.
 */
loom.graph.build_graph = (function loom$graph$build_graph(var_args){
var args__4736__auto__ = [];
var len__4730__auto___17396 = arguments.length;
var i__4731__auto___17397 = (0);
while(true){
if((i__4731__auto___17397 < len__4730__auto___17396)){
args__4736__auto__.push((arguments[i__4731__auto___17397]));

var G__17398 = (i__4731__auto___17397 + (1));
i__4731__auto___17397 = G__17398;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return loom.graph.build_graph.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

loom.graph.build_graph.cljs$core$IFn$_invoke$arity$variadic = (function (g,inits){
var build = (function loom$graph$build(g__$1,init){
if(loom.graph.graph_QMARK_.call(null,init)){
if(((loom.graph.weighted_QMARK_.call(null,g__$1)) && (loom.graph.weighted_QMARK_.call(null,init)))){
return cljs.core.assoc.call(null,cljs.core.reduce.call(null,loom.graph.add_edges,loom.graph.add_nodes_STAR_.call(null,g__$1,loom.graph.nodes.call(null,init)),(function (){var iter__4523__auto__ = (function loom$graph$build_$_iter__17362(s__17363){
return (new cljs.core.LazySeq(null,(function (){
var s__17363__$1 = s__17363;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__17363__$1);
if(temp__5720__auto__){
var s__17363__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17363__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__17363__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__17365 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__17364 = (0);
while(true){
if((i__17364 < size__4522__auto__)){
var vec__17366 = cljs.core._nth.call(null,c__4521__auto__,i__17364);
var n1 = cljs.core.nth.call(null,vec__17366,(0),null);
var n2 = cljs.core.nth.call(null,vec__17366,(1),null);
cljs.core.chunk_append.call(null,b__17365,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [n1,n2,loom.graph.weight.call(null,init,n1,n2)], null));

var G__17399 = (i__17364 + (1));
i__17364 = G__17399;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17365),loom$graph$build_$_iter__17362.call(null,cljs.core.chunk_rest.call(null,s__17363__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17365),null);
}
} else {
var vec__17369 = cljs.core.first.call(null,s__17363__$2);
var n1 = cljs.core.nth.call(null,vec__17369,(0),null);
var n2 = cljs.core.nth.call(null,vec__17369,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [n1,n2,loom.graph.weight.call(null,init,n1,n2)], null),loom$graph$build_$_iter__17362.call(null,cljs.core.rest.call(null,s__17363__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,loom.graph.edges.call(null,init));
})()),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.merge.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(g__$1),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(init)));
} else {
return cljs.core.assoc.call(null,loom.graph.add_edges_STAR_.call(null,loom.graph.add_nodes_STAR_.call(null,g__$1,loom.graph.nodes.call(null,init)),loom.graph.edges.call(null,init)),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.merge.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(g__$1),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(init)));
}
} else {
if(cljs.core.map_QMARK_.call(null,init)){
var es = ((cljs.core.map_QMARK_.call(null,cljs.core.val.call(null,cljs.core.first.call(null,init))))?(function (){var iter__4523__auto__ = (function loom$graph$build_$_iter__17372(s__17373){
return (new cljs.core.LazySeq(null,(function (){
var s__17373__$1 = s__17373;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__17373__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var vec__17378 = cljs.core.first.call(null,xs__6277__auto__);
var n = cljs.core.nth.call(null,vec__17378,(0),null);
var nbrs = cljs.core.nth.call(null,vec__17378,(1),null);
var iterys__4519__auto__ = ((function (s__17373__$1,vec__17378,n,nbrs,xs__6277__auto__,temp__5720__auto__){
return (function loom$graph$build_$_iter__17372_$_iter__17374(s__17375){
return (new cljs.core.LazySeq(null,((function (s__17373__$1,vec__17378,n,nbrs,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__17375__$1 = s__17375;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__17375__$1);
if(temp__5720__auto____$1){
var s__17375__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17375__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__17375__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__17377 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__17376 = (0);
while(true){
if((i__17376 < size__4522__auto__)){
var vec__17381 = cljs.core._nth.call(null,c__4521__auto__,i__17376);
var nbr = cljs.core.nth.call(null,vec__17381,(0),null);
var wt = cljs.core.nth.call(null,vec__17381,(1),null);
cljs.core.chunk_append.call(null,b__17377,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr,wt], null));

var G__17400 = (i__17376 + (1));
i__17376 = G__17400;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17377),loom$graph$build_$_iter__17372_$_iter__17374.call(null,cljs.core.chunk_rest.call(null,s__17375__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17377),null);
}
} else {
var vec__17384 = cljs.core.first.call(null,s__17375__$2);
var nbr = cljs.core.nth.call(null,vec__17384,(0),null);
var wt = cljs.core.nth.call(null,vec__17384,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr,wt], null),loom$graph$build_$_iter__17372_$_iter__17374.call(null,cljs.core.rest.call(null,s__17375__$2)));
}
} else {
return null;
}
break;
}
});})(s__17373__$1,vec__17378,n,nbrs,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__17373__$1,vec__17378,n,nbrs,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,nbrs));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,loom$graph$build_$_iter__17372.call(null,cljs.core.rest.call(null,s__17373__$1)));
} else {
var G__17401 = cljs.core.rest.call(null,s__17373__$1);
s__17373__$1 = G__17401;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,init);
})():(function (){var iter__4523__auto__ = (function loom$graph$build_$_iter__17387(s__17388){
return (new cljs.core.LazySeq(null,(function (){
var s__17388__$1 = s__17388;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__17388__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var vec__17393 = cljs.core.first.call(null,xs__6277__auto__);
var n = cljs.core.nth.call(null,vec__17393,(0),null);
var nbrs = cljs.core.nth.call(null,vec__17393,(1),null);
var iterys__4519__auto__ = ((function (s__17388__$1,vec__17393,n,nbrs,xs__6277__auto__,temp__5720__auto__){
return (function loom$graph$build_$_iter__17387_$_iter__17389(s__17390){
return (new cljs.core.LazySeq(null,((function (s__17388__$1,vec__17393,n,nbrs,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__17390__$1 = s__17390;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__17390__$1);
if(temp__5720__auto____$1){
var s__17390__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17390__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__17390__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__17392 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__17391 = (0);
while(true){
if((i__17391 < size__4522__auto__)){
var nbr = cljs.core._nth.call(null,c__4521__auto__,i__17391);
cljs.core.chunk_append.call(null,b__17392,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null));

var G__17402 = (i__17391 + (1));
i__17391 = G__17402;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17392),loom$graph$build_$_iter__17387_$_iter__17389.call(null,cljs.core.chunk_rest.call(null,s__17390__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17392),null);
}
} else {
var nbr = cljs.core.first.call(null,s__17390__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null),loom$graph$build_$_iter__17387_$_iter__17389.call(null,cljs.core.rest.call(null,s__17390__$2)));
}
} else {
return null;
}
break;
}
});})(s__17388__$1,vec__17393,n,nbrs,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__17388__$1,vec__17393,n,nbrs,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,nbrs));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,loom$graph$build_$_iter__17387.call(null,cljs.core.rest.call(null,s__17388__$1)));
} else {
var G__17403 = cljs.core.rest.call(null,s__17388__$1);
s__17388__$1 = G__17403;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,init);
})());
return loom.graph.add_edges_STAR_.call(null,loom.graph.add_nodes_STAR_.call(null,g__$1,cljs.core.keys.call(null,init)),es);
} else {
if(cljs.core.sequential_QMARK_.call(null,init)){
return loom.graph.add_edges.call(null,g__$1,init);
} else {
return loom.graph.add_nodes.call(null,g__$1,init);

}
}
}
});
return cljs.core.reduce.call(null,build,g,inits);
});

loom.graph.build_graph.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
loom.graph.build_graph.cljs$lang$applyTo = (function (seq17326){
var G__17327 = cljs.core.first.call(null,seq17326);
var seq17326__$1 = cljs.core.next.call(null,seq17326);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17327,seq17326__$1);
});

/**
 * Creates an unweighted, undirected graph. inits can be edges, adjacency maps,
 *   or graphs
 */
loom.graph.graph = (function loom$graph$graph(var_args){
var args__4736__auto__ = [];
var len__4730__auto___17405 = arguments.length;
var i__4731__auto___17406 = (0);
while(true){
if((i__4731__auto___17406 < len__4730__auto___17405)){
args__4736__auto__.push((arguments[i__4731__auto___17406]));

var G__17407 = (i__4731__auto___17406 + (1));
i__4731__auto___17406 = G__17407;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return loom.graph.graph.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

loom.graph.graph.cljs$core$IFn$_invoke$arity$variadic = (function (inits){
return cljs.core.apply.call(null,loom.graph.build_graph,(new loom.graph.BasicEditableGraph(cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null)),inits);
});

loom.graph.graph.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
loom.graph.graph.cljs$lang$applyTo = (function (seq17404){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq17404));
});

/**
 * Creates an unweighted, directed graph. inits can be edges, adjacency maps,
 *   or graphs
 */
loom.graph.digraph = (function loom$graph$digraph(var_args){
var args__4736__auto__ = [];
var len__4730__auto___17409 = arguments.length;
var i__4731__auto___17410 = (0);
while(true){
if((i__4731__auto___17410 < len__4730__auto___17409)){
args__4736__auto__.push((arguments[i__4731__auto___17410]));

var G__17411 = (i__4731__auto___17410 + (1));
i__4731__auto___17410 = G__17411;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return loom.graph.digraph.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

loom.graph.digraph.cljs$core$IFn$_invoke$arity$variadic = (function (inits){
return cljs.core.apply.call(null,loom.graph.build_graph,(new loom.graph.BasicEditableDigraph(cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null)),inits);
});

loom.graph.digraph.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
loom.graph.digraph.cljs$lang$applyTo = (function (seq17408){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq17408));
});

/**
 * Creates an weighted, undirected graph. inits can be edges, adjacency maps,
 *   or graphs
 */
loom.graph.weighted_graph = (function loom$graph$weighted_graph(var_args){
var args__4736__auto__ = [];
var len__4730__auto___17413 = arguments.length;
var i__4731__auto___17414 = (0);
while(true){
if((i__4731__auto___17414 < len__4730__auto___17413)){
args__4736__auto__.push((arguments[i__4731__auto___17414]));

var G__17415 = (i__4731__auto___17414 + (1));
i__4731__auto___17414 = G__17415;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return loom.graph.weighted_graph.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

loom.graph.weighted_graph.cljs$core$IFn$_invoke$arity$variadic = (function (inits){
return cljs.core.apply.call(null,loom.graph.build_graph,(new loom.graph.BasicEditableWeightedGraph(cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null)),inits);
});

loom.graph.weighted_graph.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
loom.graph.weighted_graph.cljs$lang$applyTo = (function (seq17412){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq17412));
});

/**
 * Creates an weighted, directed graph. inits can be edges, adjacency maps,
 *   or graphs
 */
loom.graph.weighted_digraph = (function loom$graph$weighted_digraph(var_args){
var args__4736__auto__ = [];
var len__4730__auto___17417 = arguments.length;
var i__4731__auto___17418 = (0);
while(true){
if((i__4731__auto___17418 < len__4730__auto___17417)){
args__4736__auto__.push((arguments[i__4731__auto___17418]));

var G__17419 = (i__4731__auto___17418 + (1));
i__4731__auto___17418 = G__17419;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return loom.graph.weighted_digraph.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

loom.graph.weighted_digraph.cljs$core$IFn$_invoke$arity$variadic = (function (inits){
return cljs.core.apply.call(null,loom.graph.build_graph,(new loom.graph.BasicEditableWeightedDigraph(cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null)),inits);
});

loom.graph.weighted_digraph.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
loom.graph.weighted_digraph.cljs$lang$applyTo = (function (seq17416){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq17416));
});

/**
 * Creates a read-only, ad-hoc graph which uses the provided functions
 *   to return values for nodes, edges, etc. If any members are not functions,
 *   they will be returned as-is. Edges can be inferred if nodes and
 *   successors are provided. Nodes and edges can be inferred if successors and
 *   start are provided.
 */
loom.graph.fly_graph = (function loom$graph$fly_graph(var_args){
var args__4736__auto__ = [];
var len__4730__auto___17424 = arguments.length;
var i__4731__auto___17425 = (0);
while(true){
if((i__4731__auto___17425 < len__4730__auto___17424)){
args__4736__auto__.push((arguments[i__4731__auto___17425]));

var G__17426 = (i__4731__auto___17425 + (1));
i__4731__auto___17425 = G__17426;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return loom.graph.fly_graph.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

loom.graph.fly_graph.cljs$core$IFn$_invoke$arity$variadic = (function (p__17421){
var map__17422 = p__17421;
var map__17422__$1 = (((((!((map__17422 == null))))?(((((map__17422.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17422.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17422):map__17422);
var nodes = cljs.core.get.call(null,map__17422__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var edges = cljs.core.get.call(null,map__17422__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
var successors = cljs.core.get.call(null,map__17422__$1,new cljs.core.Keyword(null,"successors","successors",-1239296414));
var predecessors = cljs.core.get.call(null,map__17422__$1,new cljs.core.Keyword(null,"predecessors","predecessors",229913357));
var weight = cljs.core.get.call(null,map__17422__$1,new cljs.core.Keyword(null,"weight","weight",-1262796205));
var start = cljs.core.get.call(null,map__17422__$1,new cljs.core.Keyword(null,"start","start",-355208981));
if(cljs.core.truth_((function (){var and__4120__auto__ = predecessors;
if(cljs.core.truth_(and__4120__auto__)){
return weight;
} else {
return and__4120__auto__;
}
})())){
return (new loom.graph.WeightedFlyDigraph(nodes,edges,successors,predecessors,weight,start,null,null,null));
} else {
if(cljs.core.truth_(predecessors)){
return (new loom.graph.FlyDigraph(nodes,edges,successors,predecessors,start,null,null,null));
} else {
if(cljs.core.truth_(weight)){
return (new loom.graph.WeightedFlyGraph(nodes,edges,successors,weight,start,null,null,null));
} else {
return (new loom.graph.FlyGraph(nodes,edges,successors,start,null,null,null));

}
}
}
});

loom.graph.fly_graph.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
loom.graph.fly_graph.cljs$lang$applyTo = (function (seq17420){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq17420));
});


//# sourceMappingURL=graph.js.map
