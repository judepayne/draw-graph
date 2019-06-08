// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('loom.graph');
goog.require('cljs.core');
goog.require('cljs.core.constants');
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(g) : m__4434__auto__.call(null,g));
} else {
var m__4431__auto__ = (loom.graph.nodes["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(g) : m__4431__auto__.call(null,g));
} else {
throw cljs.core.missing_protocol("Graph.nodes",g);
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(g) : m__4434__auto__.call(null,g));
} else {
var m__4431__auto__ = (loom.graph.edges["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(g) : m__4431__auto__.call(null,g));
} else {
throw cljs.core.missing_protocol("Graph.edges",g);
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(g,node) : m__4434__auto__.call(null,g,node));
} else {
var m__4431__auto__ = (loom.graph.has_node_QMARK_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(g,node) : m__4431__auto__.call(null,g,node));
} else {
throw cljs.core.missing_protocol("Graph.has-node?",g);
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(g,n1,n2) : m__4434__auto__.call(null,g,n1,n2));
} else {
var m__4431__auto__ = (loom.graph.has_edge_QMARK_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(g,n1,n2) : m__4431__auto__.call(null,g,n1,n2));
} else {
throw cljs.core.missing_protocol("Graph.has-edge?",g);
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(g,node) : m__4434__auto__.call(null,g,node));
} else {
var m__4431__auto__ = (loom.graph.successors_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(g,node) : m__4431__auto__.call(null,g,node));
} else {
throw cljs.core.missing_protocol("Graph.successors*",g);
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(g,node) : m__4434__auto__.call(null,g,node));
} else {
var m__4431__auto__ = (loom.graph.out_degree["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(g,node) : m__4431__auto__.call(null,g,node));
} else {
throw cljs.core.missing_protocol("Graph.out-degree",g);
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(g,node) : m__4434__auto__.call(null,g,node));
} else {
var m__4431__auto__ = (loom.graph.out_edges["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(g,node) : m__4431__auto__.call(null,g,node));
} else {
throw cljs.core.missing_protocol("Graph.out-edges",g);
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(g,node) : m__4434__auto__.call(null,g,node));
} else {
var m__4431__auto__ = (loom.graph.predecessors_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(g,node) : m__4431__auto__.call(null,g,node));
} else {
throw cljs.core.missing_protocol("Digraph.predecessors*",g);
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(g,node) : m__4434__auto__.call(null,g,node));
} else {
var m__4431__auto__ = (loom.graph.in_degree["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(g,node) : m__4431__auto__.call(null,g,node));
} else {
throw cljs.core.missing_protocol("Digraph.in-degree",g);
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(g,node) : m__4434__auto__.call(null,g,node));
} else {
var m__4431__auto__ = (loom.graph.in_edges["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(g,node) : m__4431__auto__.call(null,g,node));
} else {
throw cljs.core.missing_protocol("Digraph.in-edges",g);
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(g) : m__4434__auto__.call(null,g));
} else {
var m__4431__auto__ = (loom.graph.transpose["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(g) : m__4431__auto__.call(null,g));
} else {
throw cljs.core.missing_protocol("Digraph.transpose",g);
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
var G__20080 = arguments.length;
switch (G__20080) {
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(g,e) : m__4434__auto__.call(null,g,e));
} else {
var m__4431__auto__ = (loom.graph.weight_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(g,e) : m__4431__auto__.call(null,g,e));
} else {
throw cljs.core.missing_protocol("WeightedGraph.weight*",g);
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(g,n1,n2) : m__4434__auto__.call(null,g,n1,n2));
} else {
var m__4431__auto__ = (loom.graph.weight_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(g,n1,n2) : m__4431__auto__.call(null,g,n1,n2));
} else {
throw cljs.core.missing_protocol("WeightedGraph.weight*",g);
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(g,nodes) : m__4434__auto__.call(null,g,nodes));
} else {
var m__4431__auto__ = (loom.graph.add_nodes_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(g,nodes) : m__4431__auto__.call(null,g,nodes));
} else {
throw cljs.core.missing_protocol("EditableGraph.add-nodes*",g);
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(g,edges) : m__4434__auto__.call(null,g,edges));
} else {
var m__4431__auto__ = (loom.graph.add_edges_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(g,edges) : m__4431__auto__.call(null,g,edges));
} else {
throw cljs.core.missing_protocol("EditableGraph.add-edges*",g);
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(g,nodes) : m__4434__auto__.call(null,g,nodes));
} else {
var m__4431__auto__ = (loom.graph.remove_nodes_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(g,nodes) : m__4431__auto__.call(null,g,nodes));
} else {
throw cljs.core.missing_protocol("EditableGraph.remove-nodes*",g);
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(g,edges) : m__4434__auto__.call(null,g,edges));
} else {
var m__4431__auto__ = (loom.graph.remove_edges_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(g,edges) : m__4431__auto__.call(null,g,edges));
} else {
throw cljs.core.missing_protocol("EditableGraph.remove-edges*",g);
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(g) : m__4434__auto__.call(null,g));
} else {
var m__4431__auto__ = (loom.graph.remove_all["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(g) : m__4431__auto__.call(null,g));
} else {
throw cljs.core.missing_protocol("EditableGraph.remove-all",g);
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(edge) : m__4434__auto__.call(null,edge));
} else {
var m__4431__auto__ = (loom.graph.src["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(edge) : m__4431__auto__.call(null,edge));
} else {
throw cljs.core.missing_protocol("Edge.src",edge);
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(edge) : m__4434__auto__.call(null,edge));
} else {
var m__4431__auto__ = (loom.graph.dest["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(edge) : m__4431__auto__.call(null,edge));
} else {
throw cljs.core.missing_protocol("Edge.dest",edge);
}
}
}
});

cljs.core.PersistentVector.prototype.loom$graph$Edge$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.loom$graph$Edge$src$arity$1 = (function (edge){
var edge__$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(edge__$1,(0));
});

cljs.core.PersistentVector.prototype.loom$graph$Edge$dest$arity$1 = (function (edge){
var edge__$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(edge__$1,(1));
});
cljs.core.PersistentArrayMap.prototype.loom$graph$Edge$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMap.prototype.loom$graph$Edge$src$arity$1 = (function (edge){
var edge__$1 = this;
return cljs.core.cst$kw$src.cljs$core$IFn$_invoke$arity$1(edge__$1);
});

cljs.core.PersistentArrayMap.prototype.loom$graph$Edge$dest$arity$1 = (function (edge){
var edge__$1 = this;
return cljs.core.cst$kw$dest.cljs$core$IFn$_invoke$arity$1(edge__$1);
});

cljs.core.PersistentHashMap.prototype.loom$graph$Edge$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentHashMap.prototype.loom$graph$Edge$src$arity$1 = (function (edge){
var edge__$1 = this;
return cljs.core.cst$kw$src.cljs$core$IFn$_invoke$arity$1(edge__$1);
});

cljs.core.PersistentHashMap.prototype.loom$graph$Edge$dest$arity$1 = (function (edge){
var edge__$1 = this;
return cljs.core.cst$kw$dest.cljs$core$IFn$_invoke$arity$1(edge__$1);
});

cljs.core.PersistentTreeMap.prototype.loom$graph$Edge$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentTreeMap.prototype.loom$graph$Edge$src$arity$1 = (function (edge){
var edge__$1 = this;
return cljs.core.cst$kw$src.cljs$core$IFn$_invoke$arity$1(edge__$1);
});

cljs.core.PersistentTreeMap.prototype.loom$graph$Edge$dest$arity$1 = (function (edge){
var edge__$1 = this;
return cljs.core.cst$kw$dest.cljs$core$IFn$_invoke$arity$1(edge__$1);
});
/**
 * Returns direct successors of node
 */
loom.graph.successors = (function loom$graph$successors(var_args){
var G__20084 = arguments.length;
switch (G__20084) {
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
return (function (p1__20082_SHARP_){
return loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g,p1__20082_SHARP_);
});
});

loom.graph.successors.cljs$core$IFn$_invoke$arity$2 = (function (g,node){
return loom.graph.successors_STAR_(g,node);
});

loom.graph.successors.cljs$lang$maxFixedArity = 2;

/**
 * Returns direct predecessors of node
 */
loom.graph.predecessors = (function loom$graph$predecessors(var_args){
var G__20088 = arguments.length;
switch (G__20088) {
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
return (function (p1__20086_SHARP_){
return loom.graph.predecessors.cljs$core$IFn$_invoke$arity$2(g,p1__20086_SHARP_);
});
});

loom.graph.predecessors.cljs$core$IFn$_invoke$arity$2 = (function (g,node){
return loom.graph.predecessors_STAR_(g,node);
});

loom.graph.predecessors.cljs$lang$maxFixedArity = 2;

/**
 * Returns the weight of edge e or edge [n1 n2]
 */
loom.graph.weight = (function loom$graph$weight(var_args){
var G__20091 = arguments.length;
switch (G__20091) {
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
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(loom.graph.weight,g);
});

loom.graph.weight.cljs$core$IFn$_invoke$arity$2 = (function (g,e){
return loom.graph.weight_STAR_.cljs$core$IFn$_invoke$arity$3(g,loom.graph.src(e),loom.graph.dest(e));
});

loom.graph.weight.cljs$core$IFn$_invoke$arity$3 = (function (g,n1,n2){
return loom.graph.weight_STAR_.cljs$core$IFn$_invoke$arity$3(g,n1,n2);
});

loom.graph.weight.cljs$lang$maxFixedArity = 3;

/**
 * Adds nodes to graph g. Nodes can be any type of object
 */
loom.graph.add_nodes = (function loom$graph$add_nodes(var_args){
var args__4736__auto__ = [];
var len__4730__auto___20095 = arguments.length;
var i__4731__auto___20096 = (0);
while(true){
if((i__4731__auto___20096 < len__4730__auto___20095)){
args__4736__auto__.push((arguments[i__4731__auto___20096]));

var G__20097 = (i__4731__auto___20096 + (1));
i__4731__auto___20096 = G__20097;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return loom.graph.add_nodes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

loom.graph.add_nodes.cljs$core$IFn$_invoke$arity$variadic = (function (g,nodes){
return loom.graph.add_nodes_STAR_(g,nodes);
});

loom.graph.add_nodes.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
loom.graph.add_nodes.cljs$lang$applyTo = (function (seq20093){
var G__20094 = cljs.core.first(seq20093);
var seq20093__$1 = cljs.core.next(seq20093);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20094,seq20093__$1);
});

/**
 * Adds edges to graph g. For unweighted graphs, edges take the form [n1 n2].
 *   For weighted graphs, edges take the form [n1 n2 weight] or [n1 n2], the
 *   latter defaulting to a weight of 1
 */
loom.graph.add_edges = (function loom$graph$add_edges(var_args){
var args__4736__auto__ = [];
var len__4730__auto___20100 = arguments.length;
var i__4731__auto___20101 = (0);
while(true){
if((i__4731__auto___20101 < len__4730__auto___20100)){
args__4736__auto__.push((arguments[i__4731__auto___20101]));

var G__20102 = (i__4731__auto___20101 + (1));
i__4731__auto___20101 = G__20102;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return loom.graph.add_edges.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

loom.graph.add_edges.cljs$core$IFn$_invoke$arity$variadic = (function (g,edges){
return loom.graph.add_edges_STAR_(g,edges);
});

loom.graph.add_edges.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
loom.graph.add_edges.cljs$lang$applyTo = (function (seq20098){
var G__20099 = cljs.core.first(seq20098);
var seq20098__$1 = cljs.core.next(seq20098);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20099,seq20098__$1);
});

/**
 * Removes nodes from graph g
 */
loom.graph.remove_nodes = (function loom$graph$remove_nodes(var_args){
var args__4736__auto__ = [];
var len__4730__auto___20105 = arguments.length;
var i__4731__auto___20106 = (0);
while(true){
if((i__4731__auto___20106 < len__4730__auto___20105)){
args__4736__auto__.push((arguments[i__4731__auto___20106]));

var G__20107 = (i__4731__auto___20106 + (1));
i__4731__auto___20106 = G__20107;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return loom.graph.remove_nodes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

loom.graph.remove_nodes.cljs$core$IFn$_invoke$arity$variadic = (function (g,nodes){
return loom.graph.remove_nodes_STAR_(g,nodes);
});

loom.graph.remove_nodes.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
loom.graph.remove_nodes.cljs$lang$applyTo = (function (seq20103){
var G__20104 = cljs.core.first(seq20103);
var seq20103__$1 = cljs.core.next(seq20103);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20104,seq20103__$1);
});

/**
 * Removes edges from graph g. Do not include weights
 */
loom.graph.remove_edges = (function loom$graph$remove_edges(var_args){
var args__4736__auto__ = [];
var len__4730__auto___20110 = arguments.length;
var i__4731__auto___20111 = (0);
while(true){
if((i__4731__auto___20111 < len__4730__auto___20110)){
args__4736__auto__.push((arguments[i__4731__auto___20111]));

var G__20112 = (i__4731__auto___20111 + (1));
i__4731__auto___20111 = G__20112;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return loom.graph.remove_edges.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

loom.graph.remove_edges.cljs$core$IFn$_invoke$arity$variadic = (function (g,edges){
return loom.graph.remove_edges_STAR_(g,edges);
});

loom.graph.remove_edges.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
loom.graph.remove_edges.cljs$lang$applyTo = (function (seq20108){
var G__20109 = cljs.core.first(seq20108);
var seq20108__$1 = cljs.core.next(seq20108);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20109,seq20108__$1);
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

loom.graph.BasicEditableGraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k20114,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__20118 = k20114;
var G__20118__$1 = (((G__20118 instanceof cljs.core.Keyword))?G__20118.fqn:null);
switch (G__20118__$1) {
case "nodeset":
return self__.nodeset;

break;
case "adj":
return self__.adj;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20114,else__4388__auto__);

}
});

loom.graph.BasicEditableGraph.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__20119){
var vec__20120 = p__20119;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20120,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20120,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

loom.graph.BasicEditableGraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#loom.graph.BasicEditableGraph{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$nodeset,self__.nodeset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$adj,self__.adj],null))], null),self__.__extmap));
});

loom.graph.BasicEditableGraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20113){
var self__ = this;
var G__20113__$1 = this;
return (new cljs.core.RecordIter((0),G__20113__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nodeset,cljs.core.cst$kw$adj], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
return (2 + cljs.core.count(self__.__extmap));
});

loom.graph.BasicEditableGraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__20123 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (446662859 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__20123(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

loom.graph.BasicEditableGraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this20115,other20116){
var self__ = this;
var this20115__$1 = this;
return (((!((other20116 == null)))) && ((this20115__$1.constructor === other20116.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20115__$1.nodeset,other20116.nodeset)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20115__$1.adj,other20116.adj)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20115__$1.__extmap,other20116.__extmap)));
});

loom.graph.BasicEditableGraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$nodeset,null,cljs.core.cst$kw$adj,null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new loom.graph.BasicEditableGraph(self__.nodeset,self__.adj,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

loom.graph.BasicEditableGraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__20113){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__20124 = cljs.core.keyword_identical_QMARK_;
var expr__20125 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__20127 = cljs.core.cst$kw$nodeset;
var G__20128 = expr__20125;
return (pred__20124.cljs$core$IFn$_invoke$arity$2 ? pred__20124.cljs$core$IFn$_invoke$arity$2(G__20127,G__20128) : pred__20124.call(null,G__20127,G__20128));
})())){
return (new loom.graph.BasicEditableGraph(G__20113,self__.adj,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__20129 = cljs.core.cst$kw$adj;
var G__20130 = expr__20125;
return (pred__20124.cljs$core$IFn$_invoke$arity$2 ? pred__20124.cljs$core$IFn$_invoke$arity$2(G__20129,G__20130) : pred__20124.call(null,G__20129,G__20130));
})())){
return (new loom.graph.BasicEditableGraph(self__.nodeset,G__20113,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.BasicEditableGraph(self__.nodeset,self__.adj,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__20113),null));
}
}
});

loom.graph.BasicEditableGraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$nodeset,self__.nodeset,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$adj,self__.adj,null))], null),self__.__extmap));
});

loom.graph.BasicEditableGraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__20113){
var self__ = this;
var this__4384__auto____$1 = this;
return (new loom.graph.BasicEditableGraph(self__.nodeset,self__.adj,G__20113,self__.__extmap,self__.__hash));
});

loom.graph.BasicEditableGraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

loom.graph.BasicEditableGraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$nodeset,cljs.core.cst$sym$adj], null);
});

loom.graph.BasicEditableGraph.cljs$lang$type = true;

loom.graph.BasicEditableGraph.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"loom.graph/BasicEditableGraph",null,(1),null));
});

loom.graph.BasicEditableGraph.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"loom.graph/BasicEditableGraph");
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
loom.graph.map__GT_BasicEditableGraph = (function loom$graph$map__GT_BasicEditableGraph(G__20117){
var extmap__4424__auto__ = (function (){var G__20131 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__20117,cljs.core.cst$kw$nodeset,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$adj], 0));
if(cljs.core.record_QMARK_(G__20117)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__20131);
} else {
return G__20131;
}
})();
return (new loom.graph.BasicEditableGraph(cljs.core.cst$kw$nodeset.cljs$core$IFn$_invoke$arity$1(G__20117),cljs.core.cst$kw$adj.cljs$core$IFn$_invoke$arity$1(G__20117),null,cljs.core.not_empty(extmap__4424__auto__),null));
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

loom.graph.BasicEditableDigraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k20134,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__20138 = k20134;
var G__20138__$1 = (((G__20138 instanceof cljs.core.Keyword))?G__20138.fqn:null);
switch (G__20138__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20134,else__4388__auto__);

}
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__20139){
var vec__20140 = p__20139;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20140,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20140,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#loom.graph.BasicEditableDigraph{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$nodeset,self__.nodeset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$adj,self__.adj],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$in,self__.in$],null))], null),self__.__extmap));
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20133){
var self__ = this;
var G__20133__$1 = this;
return (new cljs.core.RecordIter((0),G__20133__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nodeset,cljs.core.cst$kw$adj,cljs.core.cst$kw$in], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
return (3 + cljs.core.count(self__.__extmap));
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__20143 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (324724442 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__20143(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this20135,other20136){
var self__ = this;
var this20135__$1 = this;
return (((!((other20136 == null)))) && ((this20135__$1.constructor === other20136.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20135__$1.nodeset,other20136.nodeset)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20135__$1.adj,other20136.adj)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20135__$1.in,other20136.in)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20135__$1.__extmap,other20136.__extmap)));
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$nodeset,null,cljs.core.cst$kw$adj,null,cljs.core.cst$kw$in,null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new loom.graph.BasicEditableDigraph(self__.nodeset,self__.adj,self__.in$,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__20133){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__20144 = cljs.core.keyword_identical_QMARK_;
var expr__20145 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__20147 = cljs.core.cst$kw$nodeset;
var G__20148 = expr__20145;
return (pred__20144.cljs$core$IFn$_invoke$arity$2 ? pred__20144.cljs$core$IFn$_invoke$arity$2(G__20147,G__20148) : pred__20144.call(null,G__20147,G__20148));
})())){
return (new loom.graph.BasicEditableDigraph(G__20133,self__.adj,self__.in$,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__20149 = cljs.core.cst$kw$adj;
var G__20150 = expr__20145;
return (pred__20144.cljs$core$IFn$_invoke$arity$2 ? pred__20144.cljs$core$IFn$_invoke$arity$2(G__20149,G__20150) : pred__20144.call(null,G__20149,G__20150));
})())){
return (new loom.graph.BasicEditableDigraph(self__.nodeset,G__20133,self__.in$,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__20151 = cljs.core.cst$kw$in;
var G__20152 = expr__20145;
return (pred__20144.cljs$core$IFn$_invoke$arity$2 ? pred__20144.cljs$core$IFn$_invoke$arity$2(G__20151,G__20152) : pred__20144.call(null,G__20151,G__20152));
})())){
return (new loom.graph.BasicEditableDigraph(self__.nodeset,self__.adj,G__20133,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.BasicEditableDigraph(self__.nodeset,self__.adj,self__.in$,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__20133),null));
}
}
}
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$nodeset,self__.nodeset,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$adj,self__.adj,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$in,self__.in$,null))], null),self__.__extmap));
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__20133){
var self__ = this;
var this__4384__auto____$1 = this;
return (new loom.graph.BasicEditableDigraph(self__.nodeset,self__.adj,self__.in$,G__20133,self__.__extmap,self__.__hash));
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

loom.graph.BasicEditableDigraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$nodeset,cljs.core.cst$sym$adj,cljs.core.cst$sym$in], null);
});

loom.graph.BasicEditableDigraph.cljs$lang$type = true;

loom.graph.BasicEditableDigraph.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"loom.graph/BasicEditableDigraph",null,(1),null));
});

loom.graph.BasicEditableDigraph.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"loom.graph/BasicEditableDigraph");
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
loom.graph.map__GT_BasicEditableDigraph = (function loom$graph$map__GT_BasicEditableDigraph(G__20137){
var extmap__4424__auto__ = (function (){var G__20153 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__20137,cljs.core.cst$kw$nodeset,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$adj,cljs.core.cst$kw$in], 0));
if(cljs.core.record_QMARK_(G__20137)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__20153);
} else {
return G__20153;
}
})();
return (new loom.graph.BasicEditableDigraph(cljs.core.cst$kw$nodeset.cljs$core$IFn$_invoke$arity$1(G__20137),cljs.core.cst$kw$adj.cljs$core$IFn$_invoke$arity$1(G__20137),cljs.core.cst$kw$in.cljs$core$IFn$_invoke$arity$1(G__20137),null,cljs.core.not_empty(extmap__4424__auto__),null));
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

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k20156,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__20160 = k20156;
var G__20160__$1 = (((G__20160 instanceof cljs.core.Keyword))?G__20160.fqn:null);
switch (G__20160__$1) {
case "nodeset":
return self__.nodeset;

break;
case "adj":
return self__.adj;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20156,else__4388__auto__);

}
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__20161){
var vec__20162 = p__20161;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20162,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20162,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#loom.graph.BasicEditableWeightedGraph{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$nodeset,self__.nodeset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$adj,self__.adj],null))], null),self__.__extmap));
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20155){
var self__ = this;
var G__20155__$1 = this;
return (new cljs.core.RecordIter((0),G__20155__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nodeset,cljs.core.cst$kw$adj], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
return (2 + cljs.core.count(self__.__extmap));
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__20165 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-212297308 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__20165(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this20157,other20158){
var self__ = this;
var this20157__$1 = this;
return (((!((other20158 == null)))) && ((this20157__$1.constructor === other20158.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20157__$1.nodeset,other20158.nodeset)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20157__$1.adj,other20158.adj)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20157__$1.__extmap,other20158.__extmap)));
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$nodeset,null,cljs.core.cst$kw$adj,null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new loom.graph.BasicEditableWeightedGraph(self__.nodeset,self__.adj,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__20155){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__20166 = cljs.core.keyword_identical_QMARK_;
var expr__20167 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__20169 = cljs.core.cst$kw$nodeset;
var G__20170 = expr__20167;
return (pred__20166.cljs$core$IFn$_invoke$arity$2 ? pred__20166.cljs$core$IFn$_invoke$arity$2(G__20169,G__20170) : pred__20166.call(null,G__20169,G__20170));
})())){
return (new loom.graph.BasicEditableWeightedGraph(G__20155,self__.adj,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__20171 = cljs.core.cst$kw$adj;
var G__20172 = expr__20167;
return (pred__20166.cljs$core$IFn$_invoke$arity$2 ? pred__20166.cljs$core$IFn$_invoke$arity$2(G__20171,G__20172) : pred__20166.call(null,G__20171,G__20172));
})())){
return (new loom.graph.BasicEditableWeightedGraph(self__.nodeset,G__20155,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.BasicEditableWeightedGraph(self__.nodeset,self__.adj,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__20155),null));
}
}
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$nodeset,self__.nodeset,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$adj,self__.adj,null))], null),self__.__extmap));
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__20155){
var self__ = this;
var this__4384__auto____$1 = this;
return (new loom.graph.BasicEditableWeightedGraph(self__.nodeset,self__.adj,G__20155,self__.__extmap,self__.__hash));
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

loom.graph.BasicEditableWeightedGraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$nodeset,cljs.core.cst$sym$adj], null);
});

loom.graph.BasicEditableWeightedGraph.cljs$lang$type = true;

loom.graph.BasicEditableWeightedGraph.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"loom.graph/BasicEditableWeightedGraph",null,(1),null));
});

loom.graph.BasicEditableWeightedGraph.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"loom.graph/BasicEditableWeightedGraph");
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
loom.graph.map__GT_BasicEditableWeightedGraph = (function loom$graph$map__GT_BasicEditableWeightedGraph(G__20159){
var extmap__4424__auto__ = (function (){var G__20173 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__20159,cljs.core.cst$kw$nodeset,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$adj], 0));
if(cljs.core.record_QMARK_(G__20159)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__20173);
} else {
return G__20173;
}
})();
return (new loom.graph.BasicEditableWeightedGraph(cljs.core.cst$kw$nodeset.cljs$core$IFn$_invoke$arity$1(G__20159),cljs.core.cst$kw$adj.cljs$core$IFn$_invoke$arity$1(G__20159),null,cljs.core.not_empty(extmap__4424__auto__),null));
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

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k20176,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__20180 = k20176;
var G__20180__$1 = (((G__20180 instanceof cljs.core.Keyword))?G__20180.fqn:null);
switch (G__20180__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20176,else__4388__auto__);

}
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__20181){
var vec__20182 = p__20181;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20182,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20182,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#loom.graph.BasicEditableWeightedDigraph{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$nodeset,self__.nodeset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$adj,self__.adj],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$in,self__.in$],null))], null),self__.__extmap));
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20175){
var self__ = this;
var G__20175__$1 = this;
return (new cljs.core.RecordIter((0),G__20175__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nodeset,cljs.core.cst$kw$adj,cljs.core.cst$kw$in], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
return (3 + cljs.core.count(self__.__extmap));
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__20185 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1110931322 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__20185(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this20177,other20178){
var self__ = this;
var this20177__$1 = this;
return (((!((other20178 == null)))) && ((this20177__$1.constructor === other20178.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20177__$1.nodeset,other20178.nodeset)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20177__$1.adj,other20178.adj)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20177__$1.in,other20178.in)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20177__$1.__extmap,other20178.__extmap)));
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$nodeset,null,cljs.core.cst$kw$adj,null,cljs.core.cst$kw$in,null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new loom.graph.BasicEditableWeightedDigraph(self__.nodeset,self__.adj,self__.in$,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__20175){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__20186 = cljs.core.keyword_identical_QMARK_;
var expr__20187 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__20189 = cljs.core.cst$kw$nodeset;
var G__20190 = expr__20187;
return (pred__20186.cljs$core$IFn$_invoke$arity$2 ? pred__20186.cljs$core$IFn$_invoke$arity$2(G__20189,G__20190) : pred__20186.call(null,G__20189,G__20190));
})())){
return (new loom.graph.BasicEditableWeightedDigraph(G__20175,self__.adj,self__.in$,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__20191 = cljs.core.cst$kw$adj;
var G__20192 = expr__20187;
return (pred__20186.cljs$core$IFn$_invoke$arity$2 ? pred__20186.cljs$core$IFn$_invoke$arity$2(G__20191,G__20192) : pred__20186.call(null,G__20191,G__20192));
})())){
return (new loom.graph.BasicEditableWeightedDigraph(self__.nodeset,G__20175,self__.in$,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__20193 = cljs.core.cst$kw$in;
var G__20194 = expr__20187;
return (pred__20186.cljs$core$IFn$_invoke$arity$2 ? pred__20186.cljs$core$IFn$_invoke$arity$2(G__20193,G__20194) : pred__20186.call(null,G__20193,G__20194));
})())){
return (new loom.graph.BasicEditableWeightedDigraph(self__.nodeset,self__.adj,G__20175,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.BasicEditableWeightedDigraph(self__.nodeset,self__.adj,self__.in$,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__20175),null));
}
}
}
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$nodeset,self__.nodeset,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$adj,self__.adj,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$in,self__.in$,null))], null),self__.__extmap));
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__20175){
var self__ = this;
var this__4384__auto____$1 = this;
return (new loom.graph.BasicEditableWeightedDigraph(self__.nodeset,self__.adj,self__.in$,G__20175,self__.__extmap,self__.__hash));
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

loom.graph.BasicEditableWeightedDigraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$nodeset,cljs.core.cst$sym$adj,cljs.core.cst$sym$in], null);
});

loom.graph.BasicEditableWeightedDigraph.cljs$lang$type = true;

loom.graph.BasicEditableWeightedDigraph.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"loom.graph/BasicEditableWeightedDigraph",null,(1),null));
});

loom.graph.BasicEditableWeightedDigraph.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"loom.graph/BasicEditableWeightedDigraph");
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
loom.graph.map__GT_BasicEditableWeightedDigraph = (function loom$graph$map__GT_BasicEditableWeightedDigraph(G__20179){
var extmap__4424__auto__ = (function (){var G__20195 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__20179,cljs.core.cst$kw$nodeset,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$adj,cljs.core.cst$kw$in], 0));
if(cljs.core.record_QMARK_(G__20179)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__20195);
} else {
return G__20195;
}
})();
return (new loom.graph.BasicEditableWeightedDigraph(cljs.core.cst$kw$nodeset.cljs$core$IFn$_invoke$arity$1(G__20179),cljs.core.cst$kw$adj.cljs$core$IFn$_invoke$arity$1(G__20179),cljs.core.cst$kw$in.cljs$core$IFn$_invoke$arity$1(G__20179),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

/**
 * Weight used when none is given for edges in weighted graphs
 */
loom.graph._STAR_default_weight_STAR_ = (1);
loom.graph.remove_adj_nodes = (function loom$graph$remove_adj_nodes(m,nodes,adjacents,remove_fn){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m__$1,n){
if(cljs.core.truth_((m__$1.cljs$core$IFn$_invoke$arity$1 ? m__$1.cljs$core$IFn$_invoke$arity$1(n) : m__$1.call(null,n)))){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [n], null),(function (p1__20197_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(remove_fn,p1__20197_SHARP_,nodes);
}));
} else {
return m__$1;
}
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,m,nodes),adjacents);
});
loom.graph.BasicEditableGraph.prototype.loom$graph$Graph$ = cljs.core.PROTOCOL_SENTINEL;

loom.graph.BasicEditableGraph.prototype.loom$graph$Graph$nodes$arity$1 = (function (g){
var g__$1 = this;
return cljs.core.cst$kw$nodeset.cljs$core$IFn$_invoke$arity$1(g__$1);
});

loom.graph.BasicEditableGraph.prototype.loom$graph$Graph$edges$arity$1 = (function (g){
var g__$1 = this;
var iter__4523__auto__ = ((function (g__$1){
return (function loom$graph$iter__20200(s__20201){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__20201__$1 = s__20201;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__20201__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var n1 = cljs.core.first(xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__20201__$1,n1,xs__6277__auto__,temp__5720__auto__,g__$1){
return (function loom$graph$iter__20200_$_iter__20202(s__20203){
return (new cljs.core.LazySeq(null,((function (s__20201__$1,n1,xs__6277__auto__,temp__5720__auto__,g__$1){
return (function (){
var s__20203__$1 = s__20203;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__20203__$1);
if(temp__5720__auto____$1){
var s__20203__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__20203__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__20203__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__20205 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__20204 = (0);
while(true){
if((i__20204 < size__4522__auto__)){
var e = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__20204);
cljs.core.chunk_append(b__20205,e);

var G__20218 = (i__20204 + (1));
i__20204 = G__20218;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20205),loom$graph$iter__20200_$_iter__20202(cljs.core.chunk_rest(s__20203__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20205),null);
}
} else {
var e = cljs.core.first(s__20203__$2);
return cljs.core.cons(e,loom$graph$iter__20200_$_iter__20202(cljs.core.rest(s__20203__$2)));
}
} else {
return null;
}
break;
}
});})(s__20201__$1,n1,xs__6277__auto__,temp__5720__auto__,g__$1))
,null,null));
});})(s__20201__$1,n1,xs__6277__auto__,temp__5720__auto__,g__$1))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(loom.graph.out_edges(g__$1,n1)));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,loom$graph$iter__20200(cljs.core.rest(s__20201__$1)));
} else {
var G__20219 = cljs.core.rest(s__20201__$1);
s__20201__$1 = G__20219;
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
return iter__4523__auto__(loom.graph.nodes(g__$1));
});

loom.graph.BasicEditableGraph.prototype.loom$graph$Graph$has_node_QMARK_$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.contains_QMARK_(cljs.core.cst$kw$nodeset.cljs$core$IFn$_invoke$arity$1(g__$1),node);
});

loom.graph.BasicEditableGraph.prototype.loom$graph$Graph$has_edge_QMARK_$arity$3 = (function (g,n1,n2){
var g__$1 = this;
return cljs.core.contains_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$adj,n1], null)),n2);
});

loom.graph.BasicEditableGraph.prototype.loom$graph$Graph$out_degree$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.count(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$adj,node], null)));
});

loom.graph.BasicEditableGraph.prototype.loom$graph$Graph$out_edges$arity$2 = (function (g,node){
var g__$1 = this;
var iter__4523__auto__ = ((function (g__$1){
return (function loom$graph$iter__20206(s__20207){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__20207__$1 = s__20207;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__20207__$1);
if(temp__5720__auto__){
var s__20207__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20207__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__20207__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__20209 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__20208 = (0);
while(true){
if((i__20208 < size__4522__auto__)){
var n2 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__20208);
cljs.core.chunk_append(b__20209,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__20220 = (i__20208 + (1));
i__20208 = G__20220;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20209),loom$graph$iter__20206(cljs.core.chunk_rest(s__20207__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20209),null);
}
} else {
var n2 = cljs.core.first(s__20207__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__20206(cljs.core.rest(s__20207__$2)));
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
return iter__4523__auto__(loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g__$1,node));
});

loom.graph.BasicEditableGraph.prototype.loom$graph$Graph$successors_STAR_$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$adj,node], null));
});

loom.graph.BasicEditableGraph.prototype.loom$graph$EditableGraph$ = cljs.core.PROTOCOL_SENTINEL;

loom.graph.BasicEditableGraph.prototype.loom$graph$EditableGraph$add_nodes_STAR_$arity$2 = (function (g,nodes){
var g__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (g__$1){
return (function (g__$2,node){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(g__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nodeset], null),cljs.core.conj,node);
});})(g__$1))
,g__$1,nodes);
});

loom.graph.BasicEditableGraph.prototype.loom$graph$EditableGraph$add_edges_STAR_$arity$2 = (function (g,edges){
var g__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (g__$1){
return (function (g__$2,p__20210){
var vec__20211 = p__20210;
var n1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20211,(0),null);
var n2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20211,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(g__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nodeset], null),cljs.core.conj,n1,n2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$adj,n1], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),n2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$adj,n2], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),n1);
});})(g__$1))
,g__$1,edges);
});

loom.graph.BasicEditableGraph.prototype.loom$graph$EditableGraph$remove_nodes_STAR_$arity$2 = (function (g,nodes){
var g__$1 = this;
var nbrs = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (g__$1){
return (function (p1__20198_SHARP_){
return loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g__$1,p1__20198_SHARP_);
});})(g__$1))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nodes], 0));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(g__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nodeset], null),((function (nbrs,g__$1){
return (function (p1__20199_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.disj,p1__20199_SHARP_,nodes);
});})(nbrs,g__$1))
),cljs.core.cst$kw$adj,loom.graph.remove_adj_nodes(cljs.core.cst$kw$adj.cljs$core$IFn$_invoke$arity$1(g__$1),nodes,nbrs,cljs.core.disj));
});

loom.graph.BasicEditableGraph.prototype.loom$graph$EditableGraph$remove_edges_STAR_$arity$2 = (function (g,edges){
var g__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (g__$1){
return (function (g__$2,p__20214){
var vec__20215 = p__20214;
var n1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20215,(0),null);
var n2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20215,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(g__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$adj,n1], null),cljs.core.disj,n2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$adj,n2], null),cljs.core.disj,n1);
});})(g__$1))
,g__$1,edges);
});

loom.graph.BasicEditableGraph.prototype.loom$graph$EditableGraph$remove_all$arity$1 = (function (g){
var g__$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(g__$1,cljs.core.cst$kw$nodeset,cljs.core.PersistentHashSet.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$adj,cljs.core.PersistentArrayMap.EMPTY], 0));
});
loom.graph.BasicEditableDigraph.prototype.loom$graph$Graph$ = cljs.core.PROTOCOL_SENTINEL;

loom.graph.BasicEditableDigraph.prototype.loom$graph$Graph$nodes$arity$1 = (function (g){
var g__$1 = this;
return cljs.core.cst$kw$nodeset.cljs$core$IFn$_invoke$arity$1(g__$1);
});

loom.graph.BasicEditableDigraph.prototype.loom$graph$Graph$edges$arity$1 = (function (g){
var g__$1 = this;
var iter__4523__auto__ = ((function (g__$1){
return (function loom$graph$iter__20224(s__20225){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__20225__$1 = s__20225;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__20225__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var n1 = cljs.core.first(xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__20225__$1,n1,xs__6277__auto__,temp__5720__auto__,g__$1){
return (function loom$graph$iter__20224_$_iter__20226(s__20227){
return (new cljs.core.LazySeq(null,((function (s__20225__$1,n1,xs__6277__auto__,temp__5720__auto__,g__$1){
return (function (){
var s__20227__$1 = s__20227;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__20227__$1);
if(temp__5720__auto____$1){
var s__20227__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__20227__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__20227__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__20229 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__20228 = (0);
while(true){
if((i__20228 < size__4522__auto__)){
var e = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__20228);
cljs.core.chunk_append(b__20229,e);

var G__20246 = (i__20228 + (1));
i__20228 = G__20246;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20229),loom$graph$iter__20224_$_iter__20226(cljs.core.chunk_rest(s__20227__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20229),null);
}
} else {
var e = cljs.core.first(s__20227__$2);
return cljs.core.cons(e,loom$graph$iter__20224_$_iter__20226(cljs.core.rest(s__20227__$2)));
}
} else {
return null;
}
break;
}
});})(s__20225__$1,n1,xs__6277__auto__,temp__5720__auto__,g__$1))
,null,null));
});})(s__20225__$1,n1,xs__6277__auto__,temp__5720__auto__,g__$1))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(loom.graph.out_edges(g__$1,n1)));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,loom$graph$iter__20224(cljs.core.rest(s__20225__$1)));
} else {
var G__20247 = cljs.core.rest(s__20225__$1);
s__20225__$1 = G__20247;
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
return iter__4523__auto__(loom.graph.nodes(g__$1));
});

loom.graph.BasicEditableDigraph.prototype.loom$graph$Graph$has_node_QMARK_$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.contains_QMARK_(cljs.core.cst$kw$nodeset.cljs$core$IFn$_invoke$arity$1(g__$1),node);
});

loom.graph.BasicEditableDigraph.prototype.loom$graph$Graph$has_edge_QMARK_$arity$3 = (function (g,n1,n2){
var g__$1 = this;
return cljs.core.contains_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$adj,n1], null)),n2);
});

loom.graph.BasicEditableDigraph.prototype.loom$graph$Graph$out_degree$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.count(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$adj,node], null)));
});

loom.graph.BasicEditableDigraph.prototype.loom$graph$Graph$out_edges$arity$2 = (function (g,node){
var g__$1 = this;
var iter__4523__auto__ = ((function (g__$1){
return (function loom$graph$iter__20230(s__20231){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__20231__$1 = s__20231;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__20231__$1);
if(temp__5720__auto__){
var s__20231__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20231__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__20231__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__20233 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__20232 = (0);
while(true){
if((i__20232 < size__4522__auto__)){
var n2 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__20232);
cljs.core.chunk_append(b__20233,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__20248 = (i__20232 + (1));
i__20232 = G__20248;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20233),loom$graph$iter__20230(cljs.core.chunk_rest(s__20231__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20233),null);
}
} else {
var n2 = cljs.core.first(s__20231__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__20230(cljs.core.rest(s__20231__$2)));
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
return iter__4523__auto__(loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g__$1,node));
});

loom.graph.BasicEditableDigraph.prototype.loom$graph$Graph$successors_STAR_$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$adj,node], null));
});

loom.graph.BasicEditableDigraph.prototype.loom$graph$EditableGraph$ = cljs.core.PROTOCOL_SENTINEL;

loom.graph.BasicEditableDigraph.prototype.loom$graph$EditableGraph$add_nodes_STAR_$arity$2 = (function (g,nodes){
var g__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (g__$1){
return (function (g__$2,node){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(g__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nodeset], null),cljs.core.conj,node);
});})(g__$1))
,g__$1,nodes);
});

loom.graph.BasicEditableDigraph.prototype.loom$graph$EditableGraph$add_edges_STAR_$arity$2 = (function (g,edges){
var g__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (g__$1){
return (function (g__$2,p__20234){
var vec__20235 = p__20234;
var n1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20235,(0),null);
var n2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20235,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(g__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nodeset], null),cljs.core.conj,n1,n2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$adj,n1], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),n2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$in,n2], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),n1);
});})(g__$1))
,g__$1,edges);
});

loom.graph.BasicEditableDigraph.prototype.loom$graph$EditableGraph$remove_nodes_STAR_$arity$2 = (function (g,nodes){
var g__$1 = this;
var ins = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (g__$1){
return (function (p1__20221_SHARP_){
return loom.graph.predecessors.cljs$core$IFn$_invoke$arity$2(g__$1,p1__20221_SHARP_);
});})(g__$1))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nodes], 0));
var outs = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (ins,g__$1){
return (function (p1__20222_SHARP_){
return loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g__$1,p1__20222_SHARP_);
});})(ins,g__$1))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nodes], 0));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(g__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nodeset], null),((function (ins,outs,g__$1){
return (function (p1__20223_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.disj,p1__20223_SHARP_,nodes);
});})(ins,outs,g__$1))
),cljs.core.cst$kw$adj,loom.graph.remove_adj_nodes(cljs.core.cst$kw$adj.cljs$core$IFn$_invoke$arity$1(g__$1),nodes,ins,cljs.core.disj)),cljs.core.cst$kw$in,loom.graph.remove_adj_nodes(cljs.core.cst$kw$in.cljs$core$IFn$_invoke$arity$1(g__$1),nodes,outs,cljs.core.disj));
});

loom.graph.BasicEditableDigraph.prototype.loom$graph$EditableGraph$remove_edges_STAR_$arity$2 = (function (g,edges){
var g__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (g__$1){
return (function (g__$2,p__20238){
var vec__20239 = p__20238;
var n1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20239,(0),null);
var n2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20239,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(g__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$adj,n1], null),cljs.core.disj,n2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$in,n2], null),cljs.core.disj,n1);
});})(g__$1))
,g__$1,edges);
});

loom.graph.BasicEditableDigraph.prototype.loom$graph$EditableGraph$remove_all$arity$1 = (function (g){
var g__$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(g__$1,cljs.core.cst$kw$nodeset,cljs.core.PersistentHashSet.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$adj,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$in,cljs.core.PersistentArrayMap.EMPTY], 0));
});

loom.graph.BasicEditableDigraph.prototype.loom$graph$Digraph$ = cljs.core.PROTOCOL_SENTINEL;

loom.graph.BasicEditableDigraph.prototype.loom$graph$Digraph$predecessors_STAR_$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$in,node], null));
});

loom.graph.BasicEditableDigraph.prototype.loom$graph$Digraph$in_degree$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.count(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$in,node], null)));
});

loom.graph.BasicEditableDigraph.prototype.loom$graph$Digraph$in_edges$arity$2 = (function (g,node){
var g__$1 = this;
var iter__4523__auto__ = ((function (g__$1){
return (function loom$graph$iter__20242(s__20243){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__20243__$1 = s__20243;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__20243__$1);
if(temp__5720__auto__){
var s__20243__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20243__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__20243__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__20245 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__20244 = (0);
while(true){
if((i__20244 < size__4522__auto__)){
var n2 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__20244);
cljs.core.chunk_append(b__20245,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,node], null));

var G__20249 = (i__20244 + (1));
i__20244 = G__20249;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20245),loom$graph$iter__20242(cljs.core.chunk_rest(s__20243__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20245),null);
}
} else {
var n2 = cljs.core.first(s__20243__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,node], null),loom$graph$iter__20242(cljs.core.rest(s__20243__$2)));
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
return iter__4523__auto__(loom.graph.predecessors.cljs$core$IFn$_invoke$arity$2(g__$1,node));
});

loom.graph.BasicEditableDigraph.prototype.loom$graph$Digraph$transpose$arity$1 = (function (g){
var g__$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(g__$1,cljs.core.cst$kw$adj,cljs.core.cst$kw$in.cljs$core$IFn$_invoke$arity$1(g__$1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$in,cljs.core.cst$kw$adj.cljs$core$IFn$_invoke$arity$1(g__$1)], 0));
});
loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$Graph$ = cljs.core.PROTOCOL_SENTINEL;

loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$Graph$nodes$arity$1 = (function (g){
var g__$1 = this;
return cljs.core.cst$kw$nodeset.cljs$core$IFn$_invoke$arity$1(g__$1);
});

loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$Graph$edges$arity$1 = (function (g){
var g__$1 = this;
var iter__4523__auto__ = ((function (g__$1){
return (function loom$graph$iter__20252(s__20253){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__20253__$1 = s__20253;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__20253__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var n1 = cljs.core.first(xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__20253__$1,n1,xs__6277__auto__,temp__5720__auto__,g__$1){
return (function loom$graph$iter__20252_$_iter__20254(s__20255){
return (new cljs.core.LazySeq(null,((function (s__20253__$1,n1,xs__6277__auto__,temp__5720__auto__,g__$1){
return (function (){
var s__20255__$1 = s__20255;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__20255__$1);
if(temp__5720__auto____$1){
var s__20255__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__20255__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__20255__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__20257 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__20256 = (0);
while(true){
if((i__20256 < size__4522__auto__)){
var e = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__20256);
cljs.core.chunk_append(b__20257,e);

var G__20273 = (i__20256 + (1));
i__20256 = G__20273;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20257),loom$graph$iter__20252_$_iter__20254(cljs.core.chunk_rest(s__20255__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20257),null);
}
} else {
var e = cljs.core.first(s__20255__$2);
return cljs.core.cons(e,loom$graph$iter__20252_$_iter__20254(cljs.core.rest(s__20255__$2)));
}
} else {
return null;
}
break;
}
});})(s__20253__$1,n1,xs__6277__auto__,temp__5720__auto__,g__$1))
,null,null));
});})(s__20253__$1,n1,xs__6277__auto__,temp__5720__auto__,g__$1))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(loom.graph.out_edges(g__$1,n1)));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,loom$graph$iter__20252(cljs.core.rest(s__20253__$1)));
} else {
var G__20274 = cljs.core.rest(s__20253__$1);
s__20253__$1 = G__20274;
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
return iter__4523__auto__(loom.graph.nodes(g__$1));
});

loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$Graph$has_node_QMARK_$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.contains_QMARK_(cljs.core.cst$kw$nodeset.cljs$core$IFn$_invoke$arity$1(g__$1),node);
});

loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$Graph$has_edge_QMARK_$arity$3 = (function (g,n1,n2){
var g__$1 = this;
return cljs.core.contains_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$adj,n1], null)),n2);
});

loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$Graph$out_degree$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.count(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$adj,node], null)));
});

loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$Graph$out_edges$arity$2 = (function (g,node){
var g__$1 = this;
var iter__4523__auto__ = ((function (g__$1){
return (function loom$graph$iter__20258(s__20259){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__20259__$1 = s__20259;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__20259__$1);
if(temp__5720__auto__){
var s__20259__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20259__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__20259__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__20261 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__20260 = (0);
while(true){
if((i__20260 < size__4522__auto__)){
var n2 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__20260);
cljs.core.chunk_append(b__20261,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__20275 = (i__20260 + (1));
i__20260 = G__20275;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20261),loom$graph$iter__20258(cljs.core.chunk_rest(s__20259__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20261),null);
}
} else {
var n2 = cljs.core.first(s__20259__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__20258(cljs.core.rest(s__20259__$2)));
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
return iter__4523__auto__(loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g__$1,node));
});

loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$Graph$successors_STAR_$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.keys(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$adj,node], null)));
});

loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$EditableGraph$ = cljs.core.PROTOCOL_SENTINEL;

loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$EditableGraph$add_nodes_STAR_$arity$2 = (function (g,nodes){
var g__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (g__$1){
return (function (g__$2,node){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(g__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nodeset], null),cljs.core.conj,node);
});})(g__$1))
,g__$1,nodes);
});

loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$EditableGraph$add_edges_STAR_$arity$2 = (function (g,edges){
var g__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (g__$1){
return (function (g__$2,p__20262){
var vec__20263 = p__20262;
var seq__20264 = cljs.core.seq(vec__20263);
var first__20265 = cljs.core.first(seq__20264);
var seq__20264__$1 = cljs.core.next(seq__20264);
var n1 = first__20265;
var first__20265__$1 = cljs.core.first(seq__20264__$1);
var seq__20264__$2 = cljs.core.next(seq__20264__$1);
var n2 = first__20265__$1;
var vec__20266 = seq__20264__$2;
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20266,(0),null);
return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(g__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nodeset], null),cljs.core.conj,n1,n2),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$adj,n1,n2], null),(function (){var or__4131__auto__ = w;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return loom.graph._STAR_default_weight_STAR_;
}
})()),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$adj,n2,n1], null),(function (){var or__4131__auto__ = w;
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
var nbrs = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (g__$1){
return (function (p1__20250_SHARP_){
return loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g__$1,p1__20250_SHARP_);
});})(g__$1))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nodes], 0));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(g__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nodeset], null),((function (nbrs,g__$1){
return (function (p1__20251_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.disj,p1__20251_SHARP_,nodes);
});})(nbrs,g__$1))
),cljs.core.cst$kw$adj,loom.graph.remove_adj_nodes(cljs.core.cst$kw$adj.cljs$core$IFn$_invoke$arity$1(g__$1),nodes,nbrs,cljs.core.dissoc));
});

loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$EditableGraph$remove_edges_STAR_$arity$2 = (function (g,edges){
var g__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (g__$1){
return (function (g__$2,p__20269){
var vec__20270 = p__20269;
var n1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20270,(0),null);
var n2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20270,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(g__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$adj,n1], null),cljs.core.dissoc,n2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$adj,n2], null),cljs.core.dissoc,n1);
});})(g__$1))
,g__$1,edges);
});

loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$EditableGraph$remove_all$arity$1 = (function (g){
var g__$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(g__$1,cljs.core.cst$kw$nodeset,cljs.core.PersistentHashSet.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$adj,cljs.core.PersistentArrayMap.EMPTY], 0));
});

loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$WeightedGraph$ = cljs.core.PROTOCOL_SENTINEL;

loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$WeightedGraph$weight_STAR_$arity$2 = (function (g,e){
var g__$1 = this;
return loom.graph.weight.cljs$core$IFn$_invoke$arity$3(g__$1,loom.graph.src(e),loom.graph.dest(e));
});

loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$WeightedGraph$weight_STAR_$arity$3 = (function (g,n1,n2){
var g__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$adj,n1,n2], null));
});
loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Graph$ = cljs.core.PROTOCOL_SENTINEL;

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Graph$nodes$arity$1 = (function (g){
var g__$1 = this;
return cljs.core.cst$kw$nodeset.cljs$core$IFn$_invoke$arity$1(g__$1);
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Graph$edges$arity$1 = (function (g){
var g__$1 = this;
var iter__4523__auto__ = ((function (g__$1){
return (function loom$graph$iter__20279(s__20280){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__20280__$1 = s__20280;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__20280__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var n1 = cljs.core.first(xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__20280__$1,n1,xs__6277__auto__,temp__5720__auto__,g__$1){
return (function loom$graph$iter__20279_$_iter__20281(s__20282){
return (new cljs.core.LazySeq(null,((function (s__20280__$1,n1,xs__6277__auto__,temp__5720__auto__,g__$1){
return (function (){
var s__20282__$1 = s__20282;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__20282__$1);
if(temp__5720__auto____$1){
var s__20282__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__20282__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__20282__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__20284 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__20283 = (0);
while(true){
if((i__20283 < size__4522__auto__)){
var e = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__20283);
cljs.core.chunk_append(b__20284,e);

var G__20308 = (i__20283 + (1));
i__20283 = G__20308;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20284),loom$graph$iter__20279_$_iter__20281(cljs.core.chunk_rest(s__20282__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20284),null);
}
} else {
var e = cljs.core.first(s__20282__$2);
return cljs.core.cons(e,loom$graph$iter__20279_$_iter__20281(cljs.core.rest(s__20282__$2)));
}
} else {
return null;
}
break;
}
});})(s__20280__$1,n1,xs__6277__auto__,temp__5720__auto__,g__$1))
,null,null));
});})(s__20280__$1,n1,xs__6277__auto__,temp__5720__auto__,g__$1))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(loom.graph.out_edges(g__$1,n1)));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,loom$graph$iter__20279(cljs.core.rest(s__20280__$1)));
} else {
var G__20309 = cljs.core.rest(s__20280__$1);
s__20280__$1 = G__20309;
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
return iter__4523__auto__(loom.graph.nodes(g__$1));
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Graph$has_node_QMARK_$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.contains_QMARK_(cljs.core.cst$kw$nodeset.cljs$core$IFn$_invoke$arity$1(g__$1),node);
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Graph$has_edge_QMARK_$arity$3 = (function (g,n1,n2){
var g__$1 = this;
return cljs.core.contains_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$adj,n1], null)),n2);
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Graph$out_degree$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.count(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$adj,node], null)));
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Graph$out_edges$arity$2 = (function (g,node){
var g__$1 = this;
var iter__4523__auto__ = ((function (g__$1){
return (function loom$graph$iter__20285(s__20286){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__20286__$1 = s__20286;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__20286__$1);
if(temp__5720__auto__){
var s__20286__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20286__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__20286__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__20288 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__20287 = (0);
while(true){
if((i__20287 < size__4522__auto__)){
var n2 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__20287);
cljs.core.chunk_append(b__20288,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__20310 = (i__20287 + (1));
i__20287 = G__20310;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20288),loom$graph$iter__20285(cljs.core.chunk_rest(s__20286__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20288),null);
}
} else {
var n2 = cljs.core.first(s__20286__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__20285(cljs.core.rest(s__20286__$2)));
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
return iter__4523__auto__(loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g__$1,node));
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Graph$successors_STAR_$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.keys(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$adj,node], null)));
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$EditableGraph$ = cljs.core.PROTOCOL_SENTINEL;

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$EditableGraph$add_nodes_STAR_$arity$2 = (function (g,nodes){
var g__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (g__$1){
return (function (g__$2,node){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(g__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nodeset], null),cljs.core.conj,node);
});})(g__$1))
,g__$1,nodes);
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$EditableGraph$add_edges_STAR_$arity$2 = (function (g,edges){
var g__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (g__$1){
return (function (g__$2,p__20289){
var vec__20290 = p__20289;
var seq__20291 = cljs.core.seq(vec__20290);
var first__20292 = cljs.core.first(seq__20291);
var seq__20291__$1 = cljs.core.next(seq__20291);
var n1 = first__20292;
var first__20292__$1 = cljs.core.first(seq__20291__$1);
var seq__20291__$2 = cljs.core.next(seq__20291__$1);
var n2 = first__20292__$1;
var vec__20293 = seq__20291__$2;
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20293,(0),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(g__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nodeset], null),cljs.core.conj,n1,n2),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$adj,n1,n2], null),(function (){var or__4131__auto__ = w;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return loom.graph._STAR_default_weight_STAR_;
}
})()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$in,n2], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),n1);
});})(g__$1))
,g__$1,edges);
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$EditableGraph$remove_nodes_STAR_$arity$2 = (function (g,nodes){
var g__$1 = this;
var ins = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (g__$1){
return (function (p1__20276_SHARP_){
return loom.graph.predecessors.cljs$core$IFn$_invoke$arity$2(g__$1,p1__20276_SHARP_);
});})(g__$1))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nodes], 0));
var outs = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (ins,g__$1){
return (function (p1__20277_SHARP_){
return loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g__$1,p1__20277_SHARP_);
});})(ins,g__$1))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nodes], 0));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(g__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$nodeset], null),((function (ins,outs,g__$1){
return (function (p1__20278_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.disj,p1__20278_SHARP_,nodes);
});})(ins,outs,g__$1))
),cljs.core.cst$kw$adj,loom.graph.remove_adj_nodes(cljs.core.cst$kw$adj.cljs$core$IFn$_invoke$arity$1(g__$1),nodes,ins,cljs.core.dissoc)),cljs.core.cst$kw$in,loom.graph.remove_adj_nodes(cljs.core.cst$kw$in.cljs$core$IFn$_invoke$arity$1(g__$1),nodes,outs,cljs.core.disj));
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$EditableGraph$remove_edges_STAR_$arity$2 = (function (g,edges){
var g__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (g__$1){
return (function (g__$2,p__20296){
var vec__20297 = p__20296;
var n1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20297,(0),null);
var n2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20297,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(g__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$adj,n1], null),cljs.core.dissoc,n2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$in,n2], null),cljs.core.disj,n1);
});})(g__$1))
,g__$1,edges);
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$EditableGraph$remove_all$arity$1 = (function (g){
var g__$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(g__$1,cljs.core.cst$kw$nodeset,cljs.core.PersistentHashSet.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$adj,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$in,cljs.core.PersistentArrayMap.EMPTY], 0));
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Digraph$ = cljs.core.PROTOCOL_SENTINEL;

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Digraph$predecessors_STAR_$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$in,node], null));
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Digraph$in_degree$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.count(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$in,node], null)));
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Digraph$in_edges$arity$2 = (function (g,node){
var g__$1 = this;
var iter__4523__auto__ = ((function (g__$1){
return (function loom$graph$iter__20300(s__20301){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__20301__$1 = s__20301;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__20301__$1);
if(temp__5720__auto__){
var s__20301__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20301__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__20301__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__20303 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__20302 = (0);
while(true){
if((i__20302 < size__4522__auto__)){
var n2 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__20302);
cljs.core.chunk_append(b__20303,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,node], null));

var G__20311 = (i__20302 + (1));
i__20302 = G__20311;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20303),loom$graph$iter__20300(cljs.core.chunk_rest(s__20301__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20303),null);
}
} else {
var n2 = cljs.core.first(s__20301__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,node], null),loom$graph$iter__20300(cljs.core.rest(s__20301__$2)));
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
return iter__4523__auto__(loom.graph.predecessors.cljs$core$IFn$_invoke$arity$2(g__$1,node));
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Digraph$transpose$arity$1 = (function (g){
var g__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (g__$1){
return (function (tg,p__20304){
var vec__20305 = p__20304;
var n1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20305,(0),null);
var n2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20305,(1),null);
return loom.graph.add_edges_STAR_(tg,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,n1,loom.graph.weight.cljs$core$IFn$_invoke$arity$3(g__$1,n1,n2)], null)], null));
});})(g__$1))
,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(g__$1,cljs.core.cst$kw$adj,cljs.core.PersistentArrayMap.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$in,cljs.core.PersistentArrayMap.EMPTY], 0)),loom.graph.edges(g__$1));
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$WeightedGraph$ = cljs.core.PROTOCOL_SENTINEL;

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$WeightedGraph$weight_STAR_$arity$2 = (function (g,e){
var g__$1 = this;
return loom.graph.weight.cljs$core$IFn$_invoke$arity$3(g__$1,loom.graph.src(e),loom.graph.dest(e));
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$WeightedGraph$weight_STAR_$arity$3 = (function (g,n1,n2){
var g__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$adj,n1,n2], null));
});
loom.graph.call_or_return = (function loom$graph$call_or_return(var_args){
var args__4736__auto__ = [];
var len__4730__auto___20314 = arguments.length;
var i__4731__auto___20315 = (0);
while(true){
if((i__4731__auto___20315 < len__4730__auto___20314)){
args__4736__auto__.push((arguments[i__4731__auto___20315]));

var G__20316 = (i__4731__auto___20315 + (1));
i__4731__auto___20315 = G__20316;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return loom.graph.call_or_return.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

loom.graph.call_or_return.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(cljs.core.fn_QMARK_(f)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
} else {
return f;
}
});

loom.graph.call_or_return.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
loom.graph.call_or_return.cljs$lang$applyTo = (function (seq20312){
var G__20313 = cljs.core.first(seq20312);
var seq20312__$1 = cljs.core.next(seq20312);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20313,seq20312__$1);
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

loom.graph.FlyGraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k20318,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__20322 = k20318;
var G__20322__$1 = (((G__20322 instanceof cljs.core.Keyword))?G__20322.fqn:null);
switch (G__20322__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20318,else__4388__auto__);

}
});

loom.graph.FlyGraph.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__20323){
var vec__20324 = p__20323;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20324,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20324,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

loom.graph.FlyGraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#loom.graph.FlyGraph{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fnodes,self__.fnodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fedges,self__.fedges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fsuccessors,self__.fsuccessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start,self__.start],null))], null),self__.__extmap));
});

loom.graph.FlyGraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20317){
var self__ = this;
var G__20317__$1 = this;
return (new cljs.core.RecordIter((0),G__20317__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fnodes,cljs.core.cst$kw$fedges,cljs.core.cst$kw$fsuccessors,cljs.core.cst$kw$start], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
return (4 + cljs.core.count(self__.__extmap));
});

loom.graph.FlyGraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__20327 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1546683162 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__20327(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

loom.graph.FlyGraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this20319,other20320){
var self__ = this;
var this20319__$1 = this;
return (((!((other20320 == null)))) && ((this20319__$1.constructor === other20320.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20319__$1.fnodes,other20320.fnodes)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20319__$1.fedges,other20320.fedges)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20319__$1.fsuccessors,other20320.fsuccessors)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20319__$1.start,other20320.start)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20319__$1.__extmap,other20320.__extmap)));
});

loom.graph.FlyGraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$fedges,null,cljs.core.cst$kw$fsuccessors,null,cljs.core.cst$kw$start,null,cljs.core.cst$kw$fnodes,null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new loom.graph.FlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.start,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

loom.graph.FlyGraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__20317){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__20328 = cljs.core.keyword_identical_QMARK_;
var expr__20329 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__20331 = cljs.core.cst$kw$fnodes;
var G__20332 = expr__20329;
return (pred__20328.cljs$core$IFn$_invoke$arity$2 ? pred__20328.cljs$core$IFn$_invoke$arity$2(G__20331,G__20332) : pred__20328.call(null,G__20331,G__20332));
})())){
return (new loom.graph.FlyGraph(G__20317,self__.fedges,self__.fsuccessors,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__20333 = cljs.core.cst$kw$fedges;
var G__20334 = expr__20329;
return (pred__20328.cljs$core$IFn$_invoke$arity$2 ? pred__20328.cljs$core$IFn$_invoke$arity$2(G__20333,G__20334) : pred__20328.call(null,G__20333,G__20334));
})())){
return (new loom.graph.FlyGraph(self__.fnodes,G__20317,self__.fsuccessors,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__20335 = cljs.core.cst$kw$fsuccessors;
var G__20336 = expr__20329;
return (pred__20328.cljs$core$IFn$_invoke$arity$2 ? pred__20328.cljs$core$IFn$_invoke$arity$2(G__20335,G__20336) : pred__20328.call(null,G__20335,G__20336));
})())){
return (new loom.graph.FlyGraph(self__.fnodes,self__.fedges,G__20317,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__20337 = cljs.core.cst$kw$start;
var G__20338 = expr__20329;
return (pred__20328.cljs$core$IFn$_invoke$arity$2 ? pred__20328.cljs$core$IFn$_invoke$arity$2(G__20337,G__20338) : pred__20328.call(null,G__20337,G__20338));
})())){
return (new loom.graph.FlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,G__20317,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.FlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.start,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__20317),null));
}
}
}
}
});

loom.graph.FlyGraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$fnodes,self__.fnodes,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$fedges,self__.fedges,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$fsuccessors,self__.fsuccessors,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$start,self__.start,null))], null),self__.__extmap));
});

loom.graph.FlyGraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__20317){
var self__ = this;
var this__4384__auto____$1 = this;
return (new loom.graph.FlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.start,G__20317,self__.__extmap,self__.__hash));
});

loom.graph.FlyGraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

loom.graph.FlyGraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$fnodes,cljs.core.cst$sym$fedges,cljs.core.cst$sym$fsuccessors,cljs.core.cst$sym$start], null);
});

loom.graph.FlyGraph.cljs$lang$type = true;

loom.graph.FlyGraph.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"loom.graph/FlyGraph",null,(1),null));
});

loom.graph.FlyGraph.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"loom.graph/FlyGraph");
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
loom.graph.map__GT_FlyGraph = (function loom$graph$map__GT_FlyGraph(G__20321){
var extmap__4424__auto__ = (function (){var G__20339 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__20321,cljs.core.cst$kw$fnodes,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$fedges,cljs.core.cst$kw$fsuccessors,cljs.core.cst$kw$start], 0));
if(cljs.core.record_QMARK_(G__20321)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__20339);
} else {
return G__20339;
}
})();
return (new loom.graph.FlyGraph(cljs.core.cst$kw$fnodes.cljs$core$IFn$_invoke$arity$1(G__20321),cljs.core.cst$kw$fedges.cljs$core$IFn$_invoke$arity$1(G__20321),cljs.core.cst$kw$fsuccessors.cljs$core$IFn$_invoke$arity$1(G__20321),cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(G__20321),null,cljs.core.not_empty(extmap__4424__auto__),null));
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

loom.graph.FlyDigraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k20342,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__20346 = k20342;
var G__20346__$1 = (((G__20346 instanceof cljs.core.Keyword))?G__20346.fqn:null);
switch (G__20346__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20342,else__4388__auto__);

}
});

loom.graph.FlyDigraph.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__20347){
var vec__20348 = p__20347;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20348,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20348,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

loom.graph.FlyDigraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#loom.graph.FlyDigraph{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fnodes,self__.fnodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fedges,self__.fedges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fsuccessors,self__.fsuccessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fpredecessors,self__.fpredecessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start,self__.start],null))], null),self__.__extmap));
});

loom.graph.FlyDigraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20341){
var self__ = this;
var G__20341__$1 = this;
return (new cljs.core.RecordIter((0),G__20341__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fnodes,cljs.core.cst$kw$fedges,cljs.core.cst$kw$fsuccessors,cljs.core.cst$kw$fpredecessors,cljs.core.cst$kw$start], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
return (5 + cljs.core.count(self__.__extmap));
});

loom.graph.FlyDigraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__20351 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (1981361804 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__20351(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

loom.graph.FlyDigraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this20343,other20344){
var self__ = this;
var this20343__$1 = this;
return (((!((other20344 == null)))) && ((this20343__$1.constructor === other20344.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20343__$1.fnodes,other20344.fnodes)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20343__$1.fedges,other20344.fedges)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20343__$1.fsuccessors,other20344.fsuccessors)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20343__$1.fpredecessors,other20344.fpredecessors)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20343__$1.start,other20344.start)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20343__$1.__extmap,other20344.__extmap)));
});

loom.graph.FlyDigraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$fedges,null,cljs.core.cst$kw$fsuccessors,null,cljs.core.cst$kw$start,null,cljs.core.cst$kw$fnodes,null,cljs.core.cst$kw$fpredecessors,null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.start,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

loom.graph.FlyDigraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__20341){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__20352 = cljs.core.keyword_identical_QMARK_;
var expr__20353 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__20355 = cljs.core.cst$kw$fnodes;
var G__20356 = expr__20353;
return (pred__20352.cljs$core$IFn$_invoke$arity$2 ? pred__20352.cljs$core$IFn$_invoke$arity$2(G__20355,G__20356) : pred__20352.call(null,G__20355,G__20356));
})())){
return (new loom.graph.FlyDigraph(G__20341,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__20357 = cljs.core.cst$kw$fedges;
var G__20358 = expr__20353;
return (pred__20352.cljs$core$IFn$_invoke$arity$2 ? pred__20352.cljs$core$IFn$_invoke$arity$2(G__20357,G__20358) : pred__20352.call(null,G__20357,G__20358));
})())){
return (new loom.graph.FlyDigraph(self__.fnodes,G__20341,self__.fsuccessors,self__.fpredecessors,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__20359 = cljs.core.cst$kw$fsuccessors;
var G__20360 = expr__20353;
return (pred__20352.cljs$core$IFn$_invoke$arity$2 ? pred__20352.cljs$core$IFn$_invoke$arity$2(G__20359,G__20360) : pred__20352.call(null,G__20359,G__20360));
})())){
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,G__20341,self__.fpredecessors,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__20361 = cljs.core.cst$kw$fpredecessors;
var G__20362 = expr__20353;
return (pred__20352.cljs$core$IFn$_invoke$arity$2 ? pred__20352.cljs$core$IFn$_invoke$arity$2(G__20361,G__20362) : pred__20352.call(null,G__20361,G__20362));
})())){
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,G__20341,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__20363 = cljs.core.cst$kw$start;
var G__20364 = expr__20353;
return (pred__20352.cljs$core$IFn$_invoke$arity$2 ? pred__20352.cljs$core$IFn$_invoke$arity$2(G__20363,G__20364) : pred__20352.call(null,G__20363,G__20364));
})())){
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,G__20341,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.start,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__20341),null));
}
}
}
}
}
});

loom.graph.FlyDigraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$fnodes,self__.fnodes,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$fedges,self__.fedges,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$fsuccessors,self__.fsuccessors,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$fpredecessors,self__.fpredecessors,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$start,self__.start,null))], null),self__.__extmap));
});

loom.graph.FlyDigraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__20341){
var self__ = this;
var this__4384__auto____$1 = this;
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.start,G__20341,self__.__extmap,self__.__hash));
});

loom.graph.FlyDigraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

loom.graph.FlyDigraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$fnodes,cljs.core.cst$sym$fedges,cljs.core.cst$sym$fsuccessors,cljs.core.cst$sym$fpredecessors,cljs.core.cst$sym$start], null);
});

loom.graph.FlyDigraph.cljs$lang$type = true;

loom.graph.FlyDigraph.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"loom.graph/FlyDigraph",null,(1),null));
});

loom.graph.FlyDigraph.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"loom.graph/FlyDigraph");
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
loom.graph.map__GT_FlyDigraph = (function loom$graph$map__GT_FlyDigraph(G__20345){
var extmap__4424__auto__ = (function (){var G__20365 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__20345,cljs.core.cst$kw$fnodes,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$fedges,cljs.core.cst$kw$fsuccessors,cljs.core.cst$kw$fpredecessors,cljs.core.cst$kw$start], 0));
if(cljs.core.record_QMARK_(G__20345)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__20365);
} else {
return G__20365;
}
})();
return (new loom.graph.FlyDigraph(cljs.core.cst$kw$fnodes.cljs$core$IFn$_invoke$arity$1(G__20345),cljs.core.cst$kw$fedges.cljs$core$IFn$_invoke$arity$1(G__20345),cljs.core.cst$kw$fsuccessors.cljs$core$IFn$_invoke$arity$1(G__20345),cljs.core.cst$kw$fpredecessors.cljs$core$IFn$_invoke$arity$1(G__20345),cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(G__20345),null,cljs.core.not_empty(extmap__4424__auto__),null));
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

loom.graph.WeightedFlyGraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k20368,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__20372 = k20368;
var G__20372__$1 = (((G__20372 instanceof cljs.core.Keyword))?G__20372.fqn:null);
switch (G__20372__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20368,else__4388__auto__);

}
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__20373){
var vec__20374 = p__20373;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20374,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20374,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#loom.graph.WeightedFlyGraph{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fnodes,self__.fnodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fedges,self__.fedges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fsuccessors,self__.fsuccessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fweight,self__.fweight],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start,self__.start],null))], null),self__.__extmap));
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20367){
var self__ = this;
var G__20367__$1 = this;
return (new cljs.core.RecordIter((0),G__20367__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fnodes,cljs.core.cst$kw$fedges,cljs.core.cst$kw$fsuccessors,cljs.core.cst$kw$fweight,cljs.core.cst$kw$start], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
return (5 + cljs.core.count(self__.__extmap));
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__20377 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1357917791 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__20377(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this20369,other20370){
var self__ = this;
var this20369__$1 = this;
return (((!((other20370 == null)))) && ((this20369__$1.constructor === other20370.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20369__$1.fnodes,other20370.fnodes)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20369__$1.fedges,other20370.fedges)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20369__$1.fsuccessors,other20370.fsuccessors)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20369__$1.fweight,other20370.fweight)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20369__$1.start,other20370.start)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20369__$1.__extmap,other20370.__extmap)));
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$fedges,null,cljs.core.cst$kw$fsuccessors,null,cljs.core.cst$kw$start,null,cljs.core.cst$kw$fnodes,null,cljs.core.cst$kw$fweight,null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fweight,self__.start,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__20367){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__20378 = cljs.core.keyword_identical_QMARK_;
var expr__20379 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__20381 = cljs.core.cst$kw$fnodes;
var G__20382 = expr__20379;
return (pred__20378.cljs$core$IFn$_invoke$arity$2 ? pred__20378.cljs$core$IFn$_invoke$arity$2(G__20381,G__20382) : pred__20378.call(null,G__20381,G__20382));
})())){
return (new loom.graph.WeightedFlyGraph(G__20367,self__.fedges,self__.fsuccessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__20383 = cljs.core.cst$kw$fedges;
var G__20384 = expr__20379;
return (pred__20378.cljs$core$IFn$_invoke$arity$2 ? pred__20378.cljs$core$IFn$_invoke$arity$2(G__20383,G__20384) : pred__20378.call(null,G__20383,G__20384));
})())){
return (new loom.graph.WeightedFlyGraph(self__.fnodes,G__20367,self__.fsuccessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__20385 = cljs.core.cst$kw$fsuccessors;
var G__20386 = expr__20379;
return (pred__20378.cljs$core$IFn$_invoke$arity$2 ? pred__20378.cljs$core$IFn$_invoke$arity$2(G__20385,G__20386) : pred__20378.call(null,G__20385,G__20386));
})())){
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,G__20367,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__20387 = cljs.core.cst$kw$fweight;
var G__20388 = expr__20379;
return (pred__20378.cljs$core$IFn$_invoke$arity$2 ? pred__20378.cljs$core$IFn$_invoke$arity$2(G__20387,G__20388) : pred__20378.call(null,G__20387,G__20388));
})())){
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,G__20367,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__20389 = cljs.core.cst$kw$start;
var G__20390 = expr__20379;
return (pred__20378.cljs$core$IFn$_invoke$arity$2 ? pred__20378.cljs$core$IFn$_invoke$arity$2(G__20389,G__20390) : pred__20378.call(null,G__20389,G__20390));
})())){
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fweight,G__20367,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fweight,self__.start,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__20367),null));
}
}
}
}
}
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$fnodes,self__.fnodes,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$fedges,self__.fedges,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$fsuccessors,self__.fsuccessors,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$fweight,self__.fweight,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$start,self__.start,null))], null),self__.__extmap));
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__20367){
var self__ = this;
var this__4384__auto____$1 = this;
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fweight,self__.start,G__20367,self__.__extmap,self__.__hash));
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

loom.graph.WeightedFlyGraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$fnodes,cljs.core.cst$sym$fedges,cljs.core.cst$sym$fsuccessors,cljs.core.cst$sym$fweight,cljs.core.cst$sym$start], null);
});

loom.graph.WeightedFlyGraph.cljs$lang$type = true;

loom.graph.WeightedFlyGraph.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"loom.graph/WeightedFlyGraph",null,(1),null));
});

loom.graph.WeightedFlyGraph.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"loom.graph/WeightedFlyGraph");
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
loom.graph.map__GT_WeightedFlyGraph = (function loom$graph$map__GT_WeightedFlyGraph(G__20371){
var extmap__4424__auto__ = (function (){var G__20391 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__20371,cljs.core.cst$kw$fnodes,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$fedges,cljs.core.cst$kw$fsuccessors,cljs.core.cst$kw$fweight,cljs.core.cst$kw$start], 0));
if(cljs.core.record_QMARK_(G__20371)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__20391);
} else {
return G__20391;
}
})();
return (new loom.graph.WeightedFlyGraph(cljs.core.cst$kw$fnodes.cljs$core$IFn$_invoke$arity$1(G__20371),cljs.core.cst$kw$fedges.cljs$core$IFn$_invoke$arity$1(G__20371),cljs.core.cst$kw$fsuccessors.cljs$core$IFn$_invoke$arity$1(G__20371),cljs.core.cst$kw$fweight.cljs$core$IFn$_invoke$arity$1(G__20371),cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(G__20371),null,cljs.core.not_empty(extmap__4424__auto__),null));
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

loom.graph.WeightedFlyDigraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k20394,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__20398 = k20394;
var G__20398__$1 = (((G__20398 instanceof cljs.core.Keyword))?G__20398.fqn:null);
switch (G__20398__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20394,else__4388__auto__);

}
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__20399){
var vec__20400 = p__20399;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20400,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20400,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#loom.graph.WeightedFlyDigraph{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fnodes,self__.fnodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fedges,self__.fedges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fsuccessors,self__.fsuccessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fpredecessors,self__.fpredecessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fweight,self__.fweight],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start,self__.start],null))], null),self__.__extmap));
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20393){
var self__ = this;
var G__20393__$1 = this;
return (new cljs.core.RecordIter((0),G__20393__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fnodes,cljs.core.cst$kw$fedges,cljs.core.cst$kw$fsuccessors,cljs.core.cst$kw$fpredecessors,cljs.core.cst$kw$fweight,cljs.core.cst$kw$start], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
return (6 + cljs.core.count(self__.__extmap));
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__20403 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (788097524 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__20403(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this20395,other20396){
var self__ = this;
var this20395__$1 = this;
return (((!((other20396 == null)))) && ((this20395__$1.constructor === other20396.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20395__$1.fnodes,other20396.fnodes)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20395__$1.fedges,other20396.fedges)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20395__$1.fsuccessors,other20396.fsuccessors)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20395__$1.fpredecessors,other20396.fpredecessors)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20395__$1.fweight,other20396.fweight)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20395__$1.start,other20396.start)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20395__$1.__extmap,other20396.__extmap)));
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$fedges,null,cljs.core.cst$kw$fsuccessors,null,cljs.core.cst$kw$start,null,cljs.core.cst$kw$fnodes,null,cljs.core.cst$kw$fweight,null,cljs.core.cst$kw$fpredecessors,null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.fweight,self__.start,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__20393){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__20404 = cljs.core.keyword_identical_QMARK_;
var expr__20405 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__20407 = cljs.core.cst$kw$fnodes;
var G__20408 = expr__20405;
return (pred__20404.cljs$core$IFn$_invoke$arity$2 ? pred__20404.cljs$core$IFn$_invoke$arity$2(G__20407,G__20408) : pred__20404.call(null,G__20407,G__20408));
})())){
return (new loom.graph.WeightedFlyDigraph(G__20393,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__20409 = cljs.core.cst$kw$fedges;
var G__20410 = expr__20405;
return (pred__20404.cljs$core$IFn$_invoke$arity$2 ? pred__20404.cljs$core$IFn$_invoke$arity$2(G__20409,G__20410) : pred__20404.call(null,G__20409,G__20410));
})())){
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,G__20393,self__.fsuccessors,self__.fpredecessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__20411 = cljs.core.cst$kw$fsuccessors;
var G__20412 = expr__20405;
return (pred__20404.cljs$core$IFn$_invoke$arity$2 ? pred__20404.cljs$core$IFn$_invoke$arity$2(G__20411,G__20412) : pred__20404.call(null,G__20411,G__20412));
})())){
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,G__20393,self__.fpredecessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__20413 = cljs.core.cst$kw$fpredecessors;
var G__20414 = expr__20405;
return (pred__20404.cljs$core$IFn$_invoke$arity$2 ? pred__20404.cljs$core$IFn$_invoke$arity$2(G__20413,G__20414) : pred__20404.call(null,G__20413,G__20414));
})())){
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,G__20393,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__20415 = cljs.core.cst$kw$fweight;
var G__20416 = expr__20405;
return (pred__20404.cljs$core$IFn$_invoke$arity$2 ? pred__20404.cljs$core$IFn$_invoke$arity$2(G__20415,G__20416) : pred__20404.call(null,G__20415,G__20416));
})())){
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,G__20393,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__20417 = cljs.core.cst$kw$start;
var G__20418 = expr__20405;
return (pred__20404.cljs$core$IFn$_invoke$arity$2 ? pred__20404.cljs$core$IFn$_invoke$arity$2(G__20417,G__20418) : pred__20404.call(null,G__20417,G__20418));
})())){
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.fweight,G__20393,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.fweight,self__.start,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__20393),null));
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
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$fnodes,self__.fnodes,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$fedges,self__.fedges,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$fsuccessors,self__.fsuccessors,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$fpredecessors,self__.fpredecessors,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$fweight,self__.fweight,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$start,self__.start,null))], null),self__.__extmap));
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__20393){
var self__ = this;
var this__4384__auto____$1 = this;
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.fweight,self__.start,G__20393,self__.__extmap,self__.__hash));
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

loom.graph.WeightedFlyDigraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$fnodes,cljs.core.cst$sym$fedges,cljs.core.cst$sym$fsuccessors,cljs.core.cst$sym$fpredecessors,cljs.core.cst$sym$fweight,cljs.core.cst$sym$start], null);
});

loom.graph.WeightedFlyDigraph.cljs$lang$type = true;

loom.graph.WeightedFlyDigraph.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"loom.graph/WeightedFlyDigraph",null,(1),null));
});

loom.graph.WeightedFlyDigraph.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"loom.graph/WeightedFlyDigraph");
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
loom.graph.map__GT_WeightedFlyDigraph = (function loom$graph$map__GT_WeightedFlyDigraph(G__20397){
var extmap__4424__auto__ = (function (){var G__20419 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__20397,cljs.core.cst$kw$fnodes,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$fedges,cljs.core.cst$kw$fsuccessors,cljs.core.cst$kw$fpredecessors,cljs.core.cst$kw$fweight,cljs.core.cst$kw$start], 0));
if(cljs.core.record_QMARK_(G__20397)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__20419);
} else {
return G__20419;
}
})();
return (new loom.graph.WeightedFlyDigraph(cljs.core.cst$kw$fnodes.cljs$core$IFn$_invoke$arity$1(G__20397),cljs.core.cst$kw$fedges.cljs$core$IFn$_invoke$arity$1(G__20397),cljs.core.cst$kw$fsuccessors.cljs$core$IFn$_invoke$arity$1(G__20397),cljs.core.cst$kw$fpredecessors.cljs$core$IFn$_invoke$arity$1(G__20397),cljs.core.cst$kw$fweight.cljs$core$IFn$_invoke$arity$1(G__20397),cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(G__20397),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

loom.graph.FlyGraph.prototype.loom$graph$Graph$ = cljs.core.PROTOCOL_SENTINEL;

loom.graph.FlyGraph.prototype.loom$graph$Graph$nodes$arity$1 = (function (g){
var g__$1 = this;
if(cljs.core.truth_((function (){var or__4131__auto__ = cljs.core.cst$kw$fnodes.cljs$core$IFn$_invoke$arity$1(g__$1);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.not(cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(g__$1));
}
})())){
return loom.graph.call_or_return(cljs.core.cst$kw$fnodes.cljs$core$IFn$_invoke$arity$1(g__$1));
} else {
return loom.alg_generic.bf_traverse(loom.graph.successors.cljs$core$IFn$_invoke$arity$1(g__$1),cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(g__$1));
}
});

loom.graph.FlyGraph.prototype.loom$graph$Graph$edges$arity$1 = (function (g){
var g__$1 = this;
if(cljs.core.truth_(cljs.core.cst$kw$fedges.cljs$core$IFn$_invoke$arity$1(g__$1))){
return loom.graph.call_or_return(cljs.core.cst$kw$fedges.cljs$core$IFn$_invoke$arity$1(g__$1));
} else {
var iter__4523__auto__ = ((function (g__$1){
return (function loom$graph$iter__20421(s__20422){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__20422__$1 = s__20422;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__20422__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var n = cljs.core.first(xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__20422__$1,n,xs__6277__auto__,temp__5720__auto__,g__$1){
return (function loom$graph$iter__20421_$_iter__20423(s__20424){
return (new cljs.core.LazySeq(null,((function (s__20422__$1,n,xs__6277__auto__,temp__5720__auto__,g__$1){
return (function (){
var s__20424__$1 = s__20424;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__20424__$1);
if(temp__5720__auto____$1){
var s__20424__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__20424__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__20424__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__20426 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__20425 = (0);
while(true){
if((i__20425 < size__4522__auto__)){
var nbr = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__20425);
cljs.core.chunk_append(b__20426,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null));

var G__20431 = (i__20425 + (1));
i__20425 = G__20431;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20426),loom$graph$iter__20421_$_iter__20423(cljs.core.chunk_rest(s__20424__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20426),null);
}
} else {
var nbr = cljs.core.first(s__20424__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null),loom$graph$iter__20421_$_iter__20423(cljs.core.rest(s__20424__$2)));
}
} else {
return null;
}
break;
}
});})(s__20422__$1,n,xs__6277__auto__,temp__5720__auto__,g__$1))
,null,null));
});})(s__20422__$1,n,xs__6277__auto__,temp__5720__auto__,g__$1))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g__$1,n)));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,loom$graph$iter__20421(cljs.core.rest(s__20422__$1)));
} else {
var G__20432 = cljs.core.rest(s__20422__$1);
s__20422__$1 = G__20432;
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
return iter__4523__auto__(loom.graph.nodes(g__$1));
}
});

loom.graph.FlyGraph.prototype.loom$graph$Graph$successors_STAR_$arity$2 = (function (g,node){
var g__$1 = this;
return loom.graph.call_or_return.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$fsuccessors.cljs$core$IFn$_invoke$arity$1(g__$1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([node], 0));
});

loom.graph.FlyGraph.prototype.loom$graph$Graph$out_degree$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.count(loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g__$1,node));
});

loom.graph.FlyGraph.prototype.loom$graph$Graph$out_edges$arity$2 = (function (g,node){
var g__$1 = this;
var iter__4523__auto__ = ((function (g__$1){
return (function loom$graph$iter__20427(s__20428){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__20428__$1 = s__20428;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__20428__$1);
if(temp__5720__auto__){
var s__20428__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20428__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__20428__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__20430 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__20429 = (0);
while(true){
if((i__20429 < size__4522__auto__)){
var n2 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__20429);
cljs.core.chunk_append(b__20430,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__20433 = (i__20429 + (1));
i__20429 = G__20433;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20430),loom$graph$iter__20427(cljs.core.chunk_rest(s__20428__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20430),null);
}
} else {
var n2 = cljs.core.first(s__20428__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__20427(cljs.core.rest(s__20428__$2)));
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
return iter__4523__auto__(loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g__$1,node));
});

loom.graph.FlyGraph.prototype.loom$graph$Graph$has_node_QMARK_$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([node]),loom.graph.nodes(g__$1));
});

loom.graph.FlyGraph.prototype.loom$graph$Graph$has_edge_QMARK_$arity$3 = (function (g,n1,n2){
var g__$1 = this;
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n1,n2], null)]),loom.graph.edges(g__$1));
});
loom.graph.FlyDigraph.prototype.loom$graph$Graph$ = cljs.core.PROTOCOL_SENTINEL;

loom.graph.FlyDigraph.prototype.loom$graph$Graph$nodes$arity$1 = (function (g){
var g__$1 = this;
if(cljs.core.truth_((function (){var or__4131__auto__ = cljs.core.cst$kw$fnodes.cljs$core$IFn$_invoke$arity$1(g__$1);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.not(cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(g__$1));
}
})())){
return loom.graph.call_or_return(cljs.core.cst$kw$fnodes.cljs$core$IFn$_invoke$arity$1(g__$1));
} else {
return loom.alg_generic.bf_traverse(loom.graph.successors.cljs$core$IFn$_invoke$arity$1(g__$1),cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(g__$1));
}
});

loom.graph.FlyDigraph.prototype.loom$graph$Graph$edges$arity$1 = (function (g){
var g__$1 = this;
if(cljs.core.truth_(cljs.core.cst$kw$fedges.cljs$core$IFn$_invoke$arity$1(g__$1))){
return loom.graph.call_or_return(cljs.core.cst$kw$fedges.cljs$core$IFn$_invoke$arity$1(g__$1));
} else {
var iter__4523__auto__ = ((function (g__$1){
return (function loom$graph$iter__20434(s__20435){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__20435__$1 = s__20435;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__20435__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var n = cljs.core.first(xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__20435__$1,n,xs__6277__auto__,temp__5720__auto__,g__$1){
return (function loom$graph$iter__20434_$_iter__20436(s__20437){
return (new cljs.core.LazySeq(null,((function (s__20435__$1,n,xs__6277__auto__,temp__5720__auto__,g__$1){
return (function (){
var s__20437__$1 = s__20437;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__20437__$1);
if(temp__5720__auto____$1){
var s__20437__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__20437__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__20437__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__20439 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__20438 = (0);
while(true){
if((i__20438 < size__4522__auto__)){
var nbr = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__20438);
cljs.core.chunk_append(b__20439,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null));

var G__20448 = (i__20438 + (1));
i__20438 = G__20448;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20439),loom$graph$iter__20434_$_iter__20436(cljs.core.chunk_rest(s__20437__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20439),null);
}
} else {
var nbr = cljs.core.first(s__20437__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null),loom$graph$iter__20434_$_iter__20436(cljs.core.rest(s__20437__$2)));
}
} else {
return null;
}
break;
}
});})(s__20435__$1,n,xs__6277__auto__,temp__5720__auto__,g__$1))
,null,null));
});})(s__20435__$1,n,xs__6277__auto__,temp__5720__auto__,g__$1))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g__$1,n)));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,loom$graph$iter__20434(cljs.core.rest(s__20435__$1)));
} else {
var G__20449 = cljs.core.rest(s__20435__$1);
s__20435__$1 = G__20449;
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
return iter__4523__auto__(loom.graph.nodes(g__$1));
}
});

loom.graph.FlyDigraph.prototype.loom$graph$Graph$successors_STAR_$arity$2 = (function (g,node){
var g__$1 = this;
return loom.graph.call_or_return.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$fsuccessors.cljs$core$IFn$_invoke$arity$1(g__$1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([node], 0));
});

loom.graph.FlyDigraph.prototype.loom$graph$Graph$out_degree$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.count(loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g__$1,node));
});

loom.graph.FlyDigraph.prototype.loom$graph$Graph$out_edges$arity$2 = (function (g,node){
var g__$1 = this;
var iter__4523__auto__ = ((function (g__$1){
return (function loom$graph$iter__20440(s__20441){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__20441__$1 = s__20441;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__20441__$1);
if(temp__5720__auto__){
var s__20441__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20441__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__20441__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__20443 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__20442 = (0);
while(true){
if((i__20442 < size__4522__auto__)){
var n2 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__20442);
cljs.core.chunk_append(b__20443,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__20450 = (i__20442 + (1));
i__20442 = G__20450;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20443),loom$graph$iter__20440(cljs.core.chunk_rest(s__20441__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20443),null);
}
} else {
var n2 = cljs.core.first(s__20441__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__20440(cljs.core.rest(s__20441__$2)));
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
return iter__4523__auto__(loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g__$1,node));
});

loom.graph.FlyDigraph.prototype.loom$graph$Graph$has_node_QMARK_$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([node]),loom.graph.nodes(g__$1));
});

loom.graph.FlyDigraph.prototype.loom$graph$Graph$has_edge_QMARK_$arity$3 = (function (g,n1,n2){
var g__$1 = this;
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n1,n2], null)]),loom.graph.edges(g__$1));
});

loom.graph.FlyDigraph.prototype.loom$graph$Digraph$ = cljs.core.PROTOCOL_SENTINEL;

loom.graph.FlyDigraph.prototype.loom$graph$Digraph$predecessors_STAR_$arity$2 = (function (g,node){
var g__$1 = this;
return loom.graph.call_or_return.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$fpredecessors.cljs$core$IFn$_invoke$arity$1(g__$1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([node], 0));
});

loom.graph.FlyDigraph.prototype.loom$graph$Digraph$in_degree$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.count(loom.graph.predecessors.cljs$core$IFn$_invoke$arity$2(g__$1,node));
});

loom.graph.FlyDigraph.prototype.loom$graph$Digraph$in_edges$arity$2 = (function (g,node){
var g__$1 = this;
var iter__4523__auto__ = ((function (g__$1){
return (function loom$graph$iter__20444(s__20445){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__20445__$1 = s__20445;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__20445__$1);
if(temp__5720__auto__){
var s__20445__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20445__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__20445__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__20447 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__20446 = (0);
while(true){
if((i__20446 < size__4522__auto__)){
var n2 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__20446);
cljs.core.chunk_append(b__20447,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,node], null));

var G__20451 = (i__20446 + (1));
i__20446 = G__20451;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20447),loom$graph$iter__20444(cljs.core.chunk_rest(s__20445__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20447),null);
}
} else {
var n2 = cljs.core.first(s__20445__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,node], null),loom$graph$iter__20444(cljs.core.rest(s__20445__$2)));
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
return iter__4523__auto__(loom.graph.predecessors.cljs$core$IFn$_invoke$arity$2(g__$1,node));
});
loom.graph.WeightedFlyGraph.prototype.loom$graph$Graph$ = cljs.core.PROTOCOL_SENTINEL;

loom.graph.WeightedFlyGraph.prototype.loom$graph$Graph$nodes$arity$1 = (function (g){
var g__$1 = this;
if(cljs.core.truth_((function (){var or__4131__auto__ = cljs.core.cst$kw$fnodes.cljs$core$IFn$_invoke$arity$1(g__$1);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.not(cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(g__$1));
}
})())){
return loom.graph.call_or_return(cljs.core.cst$kw$fnodes.cljs$core$IFn$_invoke$arity$1(g__$1));
} else {
return loom.alg_generic.bf_traverse(loom.graph.successors.cljs$core$IFn$_invoke$arity$1(g__$1),cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(g__$1));
}
});

loom.graph.WeightedFlyGraph.prototype.loom$graph$Graph$edges$arity$1 = (function (g){
var g__$1 = this;
if(cljs.core.truth_(cljs.core.cst$kw$fedges.cljs$core$IFn$_invoke$arity$1(g__$1))){
return loom.graph.call_or_return(cljs.core.cst$kw$fedges.cljs$core$IFn$_invoke$arity$1(g__$1));
} else {
var iter__4523__auto__ = ((function (g__$1){
return (function loom$graph$iter__20452(s__20453){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__20453__$1 = s__20453;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__20453__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var n = cljs.core.first(xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__20453__$1,n,xs__6277__auto__,temp__5720__auto__,g__$1){
return (function loom$graph$iter__20452_$_iter__20454(s__20455){
return (new cljs.core.LazySeq(null,((function (s__20453__$1,n,xs__6277__auto__,temp__5720__auto__,g__$1){
return (function (){
var s__20455__$1 = s__20455;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__20455__$1);
if(temp__5720__auto____$1){
var s__20455__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__20455__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__20455__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__20457 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__20456 = (0);
while(true){
if((i__20456 < size__4522__auto__)){
var nbr = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__20456);
cljs.core.chunk_append(b__20457,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null));

var G__20462 = (i__20456 + (1));
i__20456 = G__20462;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20457),loom$graph$iter__20452_$_iter__20454(cljs.core.chunk_rest(s__20455__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20457),null);
}
} else {
var nbr = cljs.core.first(s__20455__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null),loom$graph$iter__20452_$_iter__20454(cljs.core.rest(s__20455__$2)));
}
} else {
return null;
}
break;
}
});})(s__20453__$1,n,xs__6277__auto__,temp__5720__auto__,g__$1))
,null,null));
});})(s__20453__$1,n,xs__6277__auto__,temp__5720__auto__,g__$1))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g__$1,n)));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,loom$graph$iter__20452(cljs.core.rest(s__20453__$1)));
} else {
var G__20463 = cljs.core.rest(s__20453__$1);
s__20453__$1 = G__20463;
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
return iter__4523__auto__(loom.graph.nodes(g__$1));
}
});

loom.graph.WeightedFlyGraph.prototype.loom$graph$Graph$successors_STAR_$arity$2 = (function (g,node){
var g__$1 = this;
return loom.graph.call_or_return.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$fsuccessors.cljs$core$IFn$_invoke$arity$1(g__$1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([node], 0));
});

loom.graph.WeightedFlyGraph.prototype.loom$graph$Graph$out_degree$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.count(loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g__$1,node));
});

loom.graph.WeightedFlyGraph.prototype.loom$graph$Graph$out_edges$arity$2 = (function (g,node){
var g__$1 = this;
var iter__4523__auto__ = ((function (g__$1){
return (function loom$graph$iter__20458(s__20459){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__20459__$1 = s__20459;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__20459__$1);
if(temp__5720__auto__){
var s__20459__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20459__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__20459__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__20461 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__20460 = (0);
while(true){
if((i__20460 < size__4522__auto__)){
var n2 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__20460);
cljs.core.chunk_append(b__20461,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__20464 = (i__20460 + (1));
i__20460 = G__20464;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20461),loom$graph$iter__20458(cljs.core.chunk_rest(s__20459__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20461),null);
}
} else {
var n2 = cljs.core.first(s__20459__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__20458(cljs.core.rest(s__20459__$2)));
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
return iter__4523__auto__(loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g__$1,node));
});

loom.graph.WeightedFlyGraph.prototype.loom$graph$Graph$has_node_QMARK_$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([node]),loom.graph.nodes(g__$1));
});

loom.graph.WeightedFlyGraph.prototype.loom$graph$Graph$has_edge_QMARK_$arity$3 = (function (g,n1,n2){
var g__$1 = this;
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n1,n2], null)]),loom.graph.edges(g__$1));
});

loom.graph.WeightedFlyGraph.prototype.loom$graph$WeightedGraph$ = cljs.core.PROTOCOL_SENTINEL;

loom.graph.WeightedFlyGraph.prototype.loom$graph$WeightedGraph$weight_STAR_$arity$2 = (function (g,e){
var g__$1 = this;
return loom.graph.weight.cljs$core$IFn$_invoke$arity$3(g__$1,loom.graph.src(e),loom.graph.dest(e));
});

loom.graph.WeightedFlyGraph.prototype.loom$graph$WeightedGraph$weight_STAR_$arity$3 = (function (g,n1,n2){
var g__$1 = this;
return loom.graph.call_or_return.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$fweight.cljs$core$IFn$_invoke$arity$1(g__$1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([n1,n2], 0));
});
loom.graph.WeightedFlyDigraph.prototype.loom$graph$Graph$ = cljs.core.PROTOCOL_SENTINEL;

loom.graph.WeightedFlyDigraph.prototype.loom$graph$Graph$nodes$arity$1 = (function (g){
var g__$1 = this;
if(cljs.core.truth_((function (){var or__4131__auto__ = cljs.core.cst$kw$fnodes.cljs$core$IFn$_invoke$arity$1(g__$1);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.not(cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(g__$1));
}
})())){
return loom.graph.call_or_return(cljs.core.cst$kw$fnodes.cljs$core$IFn$_invoke$arity$1(g__$1));
} else {
return loom.alg_generic.bf_traverse(loom.graph.successors.cljs$core$IFn$_invoke$arity$1(g__$1),cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(g__$1));
}
});

loom.graph.WeightedFlyDigraph.prototype.loom$graph$Graph$edges$arity$1 = (function (g){
var g__$1 = this;
if(cljs.core.truth_(cljs.core.cst$kw$fedges.cljs$core$IFn$_invoke$arity$1(g__$1))){
return loom.graph.call_or_return(cljs.core.cst$kw$fedges.cljs$core$IFn$_invoke$arity$1(g__$1));
} else {
var iter__4523__auto__ = ((function (g__$1){
return (function loom$graph$iter__20465(s__20466){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__20466__$1 = s__20466;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__20466__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var n = cljs.core.first(xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__20466__$1,n,xs__6277__auto__,temp__5720__auto__,g__$1){
return (function loom$graph$iter__20465_$_iter__20467(s__20468){
return (new cljs.core.LazySeq(null,((function (s__20466__$1,n,xs__6277__auto__,temp__5720__auto__,g__$1){
return (function (){
var s__20468__$1 = s__20468;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__20468__$1);
if(temp__5720__auto____$1){
var s__20468__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__20468__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__20468__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__20470 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__20469 = (0);
while(true){
if((i__20469 < size__4522__auto__)){
var nbr = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__20469);
cljs.core.chunk_append(b__20470,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null));

var G__20479 = (i__20469 + (1));
i__20469 = G__20479;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20470),loom$graph$iter__20465_$_iter__20467(cljs.core.chunk_rest(s__20468__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20470),null);
}
} else {
var nbr = cljs.core.first(s__20468__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null),loom$graph$iter__20465_$_iter__20467(cljs.core.rest(s__20468__$2)));
}
} else {
return null;
}
break;
}
});})(s__20466__$1,n,xs__6277__auto__,temp__5720__auto__,g__$1))
,null,null));
});})(s__20466__$1,n,xs__6277__auto__,temp__5720__auto__,g__$1))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g__$1,n)));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,loom$graph$iter__20465(cljs.core.rest(s__20466__$1)));
} else {
var G__20480 = cljs.core.rest(s__20466__$1);
s__20466__$1 = G__20480;
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
return iter__4523__auto__(loom.graph.nodes(g__$1));
}
});

loom.graph.WeightedFlyDigraph.prototype.loom$graph$Graph$successors_STAR_$arity$2 = (function (g,node){
var g__$1 = this;
return loom.graph.call_or_return.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$fsuccessors.cljs$core$IFn$_invoke$arity$1(g__$1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([node], 0));
});

loom.graph.WeightedFlyDigraph.prototype.loom$graph$Graph$out_degree$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.count(loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g__$1,node));
});

loom.graph.WeightedFlyDigraph.prototype.loom$graph$Graph$out_edges$arity$2 = (function (g,node){
var g__$1 = this;
var iter__4523__auto__ = ((function (g__$1){
return (function loom$graph$iter__20471(s__20472){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__20472__$1 = s__20472;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__20472__$1);
if(temp__5720__auto__){
var s__20472__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20472__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__20472__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__20474 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__20473 = (0);
while(true){
if((i__20473 < size__4522__auto__)){
var n2 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__20473);
cljs.core.chunk_append(b__20474,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__20481 = (i__20473 + (1));
i__20473 = G__20481;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20474),loom$graph$iter__20471(cljs.core.chunk_rest(s__20472__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20474),null);
}
} else {
var n2 = cljs.core.first(s__20472__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__20471(cljs.core.rest(s__20472__$2)));
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
return iter__4523__auto__(loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g__$1,node));
});

loom.graph.WeightedFlyDigraph.prototype.loom$graph$Graph$has_node_QMARK_$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([node]),loom.graph.nodes(g__$1));
});

loom.graph.WeightedFlyDigraph.prototype.loom$graph$Graph$has_edge_QMARK_$arity$3 = (function (g,n1,n2){
var g__$1 = this;
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n1,n2], null)]),loom.graph.edges(g__$1));
});

loom.graph.WeightedFlyDigraph.prototype.loom$graph$Digraph$ = cljs.core.PROTOCOL_SENTINEL;

loom.graph.WeightedFlyDigraph.prototype.loom$graph$Digraph$predecessors_STAR_$arity$2 = (function (g,node){
var g__$1 = this;
return loom.graph.call_or_return.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$fpredecessors.cljs$core$IFn$_invoke$arity$1(g__$1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([node], 0));
});

loom.graph.WeightedFlyDigraph.prototype.loom$graph$Digraph$in_degree$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.count(loom.graph.predecessors.cljs$core$IFn$_invoke$arity$2(g__$1,node));
});

loom.graph.WeightedFlyDigraph.prototype.loom$graph$Digraph$in_edges$arity$2 = (function (g,node){
var g__$1 = this;
var iter__4523__auto__ = ((function (g__$1){
return (function loom$graph$iter__20475(s__20476){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__20476__$1 = s__20476;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__20476__$1);
if(temp__5720__auto__){
var s__20476__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20476__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__20476__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__20478 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__20477 = (0);
while(true){
if((i__20477 < size__4522__auto__)){
var n2 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__20477);
cljs.core.chunk_append(b__20478,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,node], null));

var G__20482 = (i__20477 + (1));
i__20477 = G__20482;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20478),loom$graph$iter__20475(cljs.core.chunk_rest(s__20476__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20478),null);
}
} else {
var n2 = cljs.core.first(s__20476__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,node], null),loom$graph$iter__20475(cljs.core.rest(s__20476__$2)));
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
return iter__4523__auto__(loom.graph.predecessors.cljs$core$IFn$_invoke$arity$2(g__$1,node));
});

loom.graph.WeightedFlyDigraph.prototype.loom$graph$WeightedGraph$ = cljs.core.PROTOCOL_SENTINEL;

loom.graph.WeightedFlyDigraph.prototype.loom$graph$WeightedGraph$weight_STAR_$arity$2 = (function (g,e){
var g__$1 = this;
return loom.graph.weight.cljs$core$IFn$_invoke$arity$3(g__$1,loom.graph.src(e),loom.graph.dest(e));
});

loom.graph.WeightedFlyDigraph.prototype.loom$graph$WeightedGraph$weight_STAR_$arity$3 = (function (g,n1,n2){
var g__$1 = this;
return loom.graph.call_or_return.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$fweight.cljs$core$IFn$_invoke$arity$1(g__$1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([n1,n2], 0));
});
/**
 * Returns a graph with only the given nodes
 */
loom.graph.subgraph = (function loom$graph$subgraph(g,ns){
return loom.graph.remove_nodes_STAR_(g,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(ns),loom.graph.nodes(g)));
});
/**
 * Adds a path of edges connecting the given nodes in order
 */
loom.graph.add_path = (function loom$graph$add_path(var_args){
var args__4736__auto__ = [];
var len__4730__auto___20485 = arguments.length;
var i__4731__auto___20486 = (0);
while(true){
if((i__4731__auto___20486 < len__4730__auto___20485)){
args__4736__auto__.push((arguments[i__4731__auto___20486]));

var G__20487 = (i__4731__auto___20486 + (1));
i__4731__auto___20486 = G__20487;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return loom.graph.add_path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

loom.graph.add_path.cljs$core$IFn$_invoke$arity$variadic = (function (g,nodes){
return loom.graph.add_edges_STAR_(g,cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),nodes));
});

loom.graph.add_path.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
loom.graph.add_path.cljs$lang$applyTo = (function (seq20483){
var G__20484 = cljs.core.first(seq20483);
var seq20483__$1 = cljs.core.next(seq20483);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20484,seq20483__$1);
});

/**
 * Adds a cycle of edges connecting the given nodes in order
 */
loom.graph.add_cycle = (function loom$graph$add_cycle(var_args){
var args__4736__auto__ = [];
var len__4730__auto___20490 = arguments.length;
var i__4731__auto___20491 = (0);
while(true){
if((i__4731__auto___20491 < len__4730__auto___20490)){
args__4736__auto__.push((arguments[i__4731__auto___20491]));

var G__20492 = (i__4731__auto___20491 + (1));
i__4731__auto___20491 = G__20492;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return loom.graph.add_cycle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

loom.graph.add_cycle.cljs$core$IFn$_invoke$arity$variadic = (function (g,nodes){
return loom.graph.add_edges_STAR_(g,cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(nodes,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(nodes)], null))));
});

loom.graph.add_cycle.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
loom.graph.add_cycle.cljs$lang$applyTo = (function (seq20488){
var G__20489 = cljs.core.first(seq20488);
var seq20488__$1 = cljs.core.next(seq20488);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20489,seq20488__$1);
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
return cljs.core.native_satisfies_QMARK_(loom.graph.Graph,g);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(loom.graph.Graph,g);
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
return cljs.core.native_satisfies_QMARK_(loom.graph.Digraph,g);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(loom.graph.Digraph,g);
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
return cljs.core.native_satisfies_QMARK_(loom.graph.WeightedGraph,g);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(loom.graph.WeightedGraph,g);
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
return cljs.core.native_satisfies_QMARK_(loom.graph.EditableGraph,g);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(loom.graph.EditableGraph,g);
}
});
/**
 * Builds up a graph (i.e. adds edges and nodes) from any combination of
 *   other graphs, adjacency maps, edges, or nodes.
 */
loom.graph.build_graph = (function loom$graph$build_graph(var_args){
var args__4736__auto__ = [];
var len__4730__auto___20567 = arguments.length;
var i__4731__auto___20568 = (0);
while(true){
if((i__4731__auto___20568 < len__4730__auto___20567)){
args__4736__auto__.push((arguments[i__4731__auto___20568]));

var G__20569 = (i__4731__auto___20568 + (1));
i__4731__auto___20568 = G__20569;
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
if(loom.graph.graph_QMARK_(init)){
if(((loom.graph.weighted_QMARK_(g__$1)) && (loom.graph.weighted_QMARK_(init)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(loom.graph.add_edges,loom.graph.add_nodes_STAR_(g__$1,loom.graph.nodes(init)),(function (){var iter__4523__auto__ = (function loom$graph$build_$_iter__20533(s__20534){
return (new cljs.core.LazySeq(null,(function (){
var s__20534__$1 = s__20534;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__20534__$1);
if(temp__5720__auto__){
var s__20534__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20534__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__20534__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__20536 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__20535 = (0);
while(true){
if((i__20535 < size__4522__auto__)){
var vec__20537 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__20535);
var n1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20537,(0),null);
var n2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20537,(1),null);
cljs.core.chunk_append(b__20536,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [n1,n2,loom.graph.weight.cljs$core$IFn$_invoke$arity$3(init,n1,n2)], null));

var G__20570 = (i__20535 + (1));
i__20535 = G__20570;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20536),loom$graph$build_$_iter__20533(cljs.core.chunk_rest(s__20534__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20536),null);
}
} else {
var vec__20540 = cljs.core.first(s__20534__$2);
var n1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20540,(0),null);
var n2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20540,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [n1,n2,loom.graph.weight.cljs$core$IFn$_invoke$arity$3(init,n1,n2)], null),loom$graph$build_$_iter__20533(cljs.core.rest(s__20534__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(loom.graph.edges(init));
})()),cljs.core.cst$kw$attrs,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(g__$1),cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(init)], 0)));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(loom.graph.add_edges_STAR_(loom.graph.add_nodes_STAR_(g__$1,loom.graph.nodes(init)),loom.graph.edges(init)),cljs.core.cst$kw$attrs,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(g__$1),cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(init)], 0)));
}
} else {
if(cljs.core.map_QMARK_(init)){
var es = ((cljs.core.map_QMARK_(cljs.core.val(cljs.core.first(init))))?(function (){var iter__4523__auto__ = (function loom$graph$build_$_iter__20543(s__20544){
return (new cljs.core.LazySeq(null,(function (){
var s__20544__$1 = s__20544;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__20544__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var vec__20549 = cljs.core.first(xs__6277__auto__);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20549,(0),null);
var nbrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20549,(1),null);
var iterys__4519__auto__ = ((function (s__20544__$1,vec__20549,n,nbrs,xs__6277__auto__,temp__5720__auto__){
return (function loom$graph$build_$_iter__20543_$_iter__20545(s__20546){
return (new cljs.core.LazySeq(null,((function (s__20544__$1,vec__20549,n,nbrs,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__20546__$1 = s__20546;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__20546__$1);
if(temp__5720__auto____$1){
var s__20546__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__20546__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__20546__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__20548 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__20547 = (0);
while(true){
if((i__20547 < size__4522__auto__)){
var vec__20552 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__20547);
var nbr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20552,(0),null);
var wt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20552,(1),null);
cljs.core.chunk_append(b__20548,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr,wt], null));

var G__20571 = (i__20547 + (1));
i__20547 = G__20571;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20548),loom$graph$build_$_iter__20543_$_iter__20545(cljs.core.chunk_rest(s__20546__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20548),null);
}
} else {
var vec__20555 = cljs.core.first(s__20546__$2);
var nbr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20555,(0),null);
var wt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20555,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr,wt], null),loom$graph$build_$_iter__20543_$_iter__20545(cljs.core.rest(s__20546__$2)));
}
} else {
return null;
}
break;
}
});})(s__20544__$1,vec__20549,n,nbrs,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__20544__$1,vec__20549,n,nbrs,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(nbrs));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,loom$graph$build_$_iter__20543(cljs.core.rest(s__20544__$1)));
} else {
var G__20572 = cljs.core.rest(s__20544__$1);
s__20544__$1 = G__20572;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(init);
})():(function (){var iter__4523__auto__ = (function loom$graph$build_$_iter__20558(s__20559){
return (new cljs.core.LazySeq(null,(function (){
var s__20559__$1 = s__20559;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__20559__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var vec__20564 = cljs.core.first(xs__6277__auto__);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20564,(0),null);
var nbrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20564,(1),null);
var iterys__4519__auto__ = ((function (s__20559__$1,vec__20564,n,nbrs,xs__6277__auto__,temp__5720__auto__){
return (function loom$graph$build_$_iter__20558_$_iter__20560(s__20561){
return (new cljs.core.LazySeq(null,((function (s__20559__$1,vec__20564,n,nbrs,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__20561__$1 = s__20561;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__20561__$1);
if(temp__5720__auto____$1){
var s__20561__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__20561__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__20561__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__20563 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__20562 = (0);
while(true){
if((i__20562 < size__4522__auto__)){
var nbr = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__20562);
cljs.core.chunk_append(b__20563,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null));

var G__20573 = (i__20562 + (1));
i__20562 = G__20573;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20563),loom$graph$build_$_iter__20558_$_iter__20560(cljs.core.chunk_rest(s__20561__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20563),null);
}
} else {
var nbr = cljs.core.first(s__20561__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null),loom$graph$build_$_iter__20558_$_iter__20560(cljs.core.rest(s__20561__$2)));
}
} else {
return null;
}
break;
}
});})(s__20559__$1,vec__20564,n,nbrs,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__20559__$1,vec__20564,n,nbrs,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(nbrs));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,loom$graph$build_$_iter__20558(cljs.core.rest(s__20559__$1)));
} else {
var G__20574 = cljs.core.rest(s__20559__$1);
s__20559__$1 = G__20574;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(init);
})());
return loom.graph.add_edges_STAR_(loom.graph.add_nodes_STAR_(g__$1,cljs.core.keys(init)),es);
} else {
if(cljs.core.sequential_QMARK_(init)){
return loom.graph.add_edges.cljs$core$IFn$_invoke$arity$variadic(g__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([init], 0));
} else {
return loom.graph.add_nodes.cljs$core$IFn$_invoke$arity$variadic(g__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([init], 0));

}
}
}
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(build,g,inits);
});

loom.graph.build_graph.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
loom.graph.build_graph.cljs$lang$applyTo = (function (seq20497){
var G__20498 = cljs.core.first(seq20497);
var seq20497__$1 = cljs.core.next(seq20497);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20498,seq20497__$1);
});

/**
 * Creates an unweighted, undirected graph. inits can be edges, adjacency maps,
 *   or graphs
 */
loom.graph.graph = (function loom$graph$graph(var_args){
var args__4736__auto__ = [];
var len__4730__auto___20576 = arguments.length;
var i__4731__auto___20577 = (0);
while(true){
if((i__4731__auto___20577 < len__4730__auto___20576)){
args__4736__auto__.push((arguments[i__4731__auto___20577]));

var G__20578 = (i__4731__auto___20577 + (1));
i__4731__auto___20577 = G__20578;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return loom.graph.graph.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

loom.graph.graph.cljs$core$IFn$_invoke$arity$variadic = (function (inits){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(loom.graph.build_graph,(new loom.graph.BasicEditableGraph(cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null)),inits);
});

loom.graph.graph.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
loom.graph.graph.cljs$lang$applyTo = (function (seq20575){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20575));
});

/**
 * Creates an unweighted, directed graph. inits can be edges, adjacency maps,
 *   or graphs
 */
loom.graph.digraph = (function loom$graph$digraph(var_args){
var args__4736__auto__ = [];
var len__4730__auto___20580 = arguments.length;
var i__4731__auto___20581 = (0);
while(true){
if((i__4731__auto___20581 < len__4730__auto___20580)){
args__4736__auto__.push((arguments[i__4731__auto___20581]));

var G__20582 = (i__4731__auto___20581 + (1));
i__4731__auto___20581 = G__20582;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return loom.graph.digraph.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

loom.graph.digraph.cljs$core$IFn$_invoke$arity$variadic = (function (inits){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(loom.graph.build_graph,(new loom.graph.BasicEditableDigraph(cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null)),inits);
});

loom.graph.digraph.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
loom.graph.digraph.cljs$lang$applyTo = (function (seq20579){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20579));
});

/**
 * Creates an weighted, undirected graph. inits can be edges, adjacency maps,
 *   or graphs
 */
loom.graph.weighted_graph = (function loom$graph$weighted_graph(var_args){
var args__4736__auto__ = [];
var len__4730__auto___20584 = arguments.length;
var i__4731__auto___20585 = (0);
while(true){
if((i__4731__auto___20585 < len__4730__auto___20584)){
args__4736__auto__.push((arguments[i__4731__auto___20585]));

var G__20586 = (i__4731__auto___20585 + (1));
i__4731__auto___20585 = G__20586;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return loom.graph.weighted_graph.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

loom.graph.weighted_graph.cljs$core$IFn$_invoke$arity$variadic = (function (inits){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(loom.graph.build_graph,(new loom.graph.BasicEditableWeightedGraph(cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null)),inits);
});

loom.graph.weighted_graph.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
loom.graph.weighted_graph.cljs$lang$applyTo = (function (seq20583){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20583));
});

/**
 * Creates an weighted, directed graph. inits can be edges, adjacency maps,
 *   or graphs
 */
loom.graph.weighted_digraph = (function loom$graph$weighted_digraph(var_args){
var args__4736__auto__ = [];
var len__4730__auto___20588 = arguments.length;
var i__4731__auto___20589 = (0);
while(true){
if((i__4731__auto___20589 < len__4730__auto___20588)){
args__4736__auto__.push((arguments[i__4731__auto___20589]));

var G__20590 = (i__4731__auto___20589 + (1));
i__4731__auto___20589 = G__20590;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return loom.graph.weighted_digraph.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

loom.graph.weighted_digraph.cljs$core$IFn$_invoke$arity$variadic = (function (inits){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(loom.graph.build_graph,(new loom.graph.BasicEditableWeightedDigraph(cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null)),inits);
});

loom.graph.weighted_digraph.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
loom.graph.weighted_digraph.cljs$lang$applyTo = (function (seq20587){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20587));
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
var len__4730__auto___20595 = arguments.length;
var i__4731__auto___20596 = (0);
while(true){
if((i__4731__auto___20596 < len__4730__auto___20595)){
args__4736__auto__.push((arguments[i__4731__auto___20596]));

var G__20597 = (i__4731__auto___20596 + (1));
i__4731__auto___20596 = G__20597;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return loom.graph.fly_graph.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

loom.graph.fly_graph.cljs$core$IFn$_invoke$arity$variadic = (function (p__20592){
var map__20593 = p__20592;
var map__20593__$1 = (((((!((map__20593 == null))))?(((((map__20593.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20593.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20593):map__20593);
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20593__$1,cljs.core.cst$kw$nodes);
var edges = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20593__$1,cljs.core.cst$kw$edges);
var successors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20593__$1,cljs.core.cst$kw$successors);
var predecessors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20593__$1,cljs.core.cst$kw$predecessors);
var weight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20593__$1,cljs.core.cst$kw$weight);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20593__$1,cljs.core.cst$kw$start);
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
loom.graph.fly_graph.cljs$lang$applyTo = (function (seq20591){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20591));
});

