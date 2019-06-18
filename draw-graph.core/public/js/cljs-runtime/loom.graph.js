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
var G__47869 = arguments.length;
switch (G__47869) {
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
var G__47918 = arguments.length;
switch (G__47918) {
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
return (function (p1__47916_SHARP_){
return loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g,p1__47916_SHARP_);
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
var G__47932 = arguments.length;
switch (G__47932) {
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
return (function (p1__47925_SHARP_){
return loom.graph.predecessors.cljs$core$IFn$_invoke$arity$2(g,p1__47925_SHARP_);
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
var G__47961 = arguments.length;
switch (G__47961) {
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
var len__4730__auto___49114 = arguments.length;
var i__4731__auto___49115 = (0);
while(true){
if((i__4731__auto___49115 < len__4730__auto___49114)){
args__4736__auto__.push((arguments[i__4731__auto___49115]));

var G__49116 = (i__4731__auto___49115 + (1));
i__4731__auto___49115 = G__49116;
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
loom.graph.add_nodes.cljs$lang$applyTo = (function (seq47991){
var G__47993 = cljs.core.first(seq47991);
var seq47991__$1 = cljs.core.next(seq47991);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47993,seq47991__$1);
});

/**
 * Adds edges to graph g. For unweighted graphs, edges take the form [n1 n2].
 *   For weighted graphs, edges take the form [n1 n2 weight] or [n1 n2], the
 *   latter defaulting to a weight of 1
 */
loom.graph.add_edges = (function loom$graph$add_edges(var_args){
var args__4736__auto__ = [];
var len__4730__auto___49119 = arguments.length;
var i__4731__auto___49120 = (0);
while(true){
if((i__4731__auto___49120 < len__4730__auto___49119)){
args__4736__auto__.push((arguments[i__4731__auto___49120]));

var G__49121 = (i__4731__auto___49120 + (1));
i__4731__auto___49120 = G__49121;
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
loom.graph.add_edges.cljs$lang$applyTo = (function (seq48028){
var G__48029 = cljs.core.first(seq48028);
var seq48028__$1 = cljs.core.next(seq48028);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48029,seq48028__$1);
});

/**
 * Removes nodes from graph g
 */
loom.graph.remove_nodes = (function loom$graph$remove_nodes(var_args){
var args__4736__auto__ = [];
var len__4730__auto___49124 = arguments.length;
var i__4731__auto___49125 = (0);
while(true){
if((i__4731__auto___49125 < len__4730__auto___49124)){
args__4736__auto__.push((arguments[i__4731__auto___49125]));

var G__49126 = (i__4731__auto___49125 + (1));
i__4731__auto___49125 = G__49126;
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
loom.graph.remove_nodes.cljs$lang$applyTo = (function (seq48039){
var G__48040 = cljs.core.first(seq48039);
var seq48039__$1 = cljs.core.next(seq48039);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48040,seq48039__$1);
});

/**
 * Removes edges from graph g. Do not include weights
 */
loom.graph.remove_edges = (function loom$graph$remove_edges(var_args){
var args__4736__auto__ = [];
var len__4730__auto___49128 = arguments.length;
var i__4731__auto___49129 = (0);
while(true){
if((i__4731__auto___49129 < len__4730__auto___49128)){
args__4736__auto__.push((arguments[i__4731__auto___49129]));

var G__49131 = (i__4731__auto___49129 + (1));
i__4731__auto___49129 = G__49131;
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
loom.graph.remove_edges.cljs$lang$applyTo = (function (seq48059){
var G__48060 = cljs.core.first(seq48059);
var seq48059__$1 = cljs.core.next(seq48059);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48060,seq48059__$1);
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

loom.graph.BasicEditableGraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k48068,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__48076 = k48068;
var G__48076__$1 = (((G__48076 instanceof cljs.core.Keyword))?G__48076.fqn:null);
switch (G__48076__$1) {
case "nodeset":
return self__.nodeset;

break;
case "adj":
return self__.adj;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k48068,else__4388__auto__);

}
});

loom.graph.BasicEditableGraph.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__48081){
var vec__48082 = p__48081;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48082,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48082,(1),null);
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
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#loom.graph.BasicEditableGraph{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj],null))], null),self__.__extmap));
});

loom.graph.BasicEditableGraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__48067){
var self__ = this;
var G__48067__$1 = this;
return (new cljs.core.RecordIter((0),G__48067__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4243__auto____$1 = (function (){var fexpr__48095 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (446662859 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__48095(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

loom.graph.BasicEditableGraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this48069,other48070){
var self__ = this;
var this48069__$1 = this;
return (((!((other48070 == null)))) && ((this48069__$1.constructor === other48070.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48069__$1.nodeset,other48070.nodeset)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48069__$1.adj,other48070.adj)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48069__$1.__extmap,other48070.__extmap)));
});

loom.graph.BasicEditableGraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),null,new cljs.core.Keyword(null,"adj","adj",-1344630196),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new loom.graph.BasicEditableGraph(self__.nodeset,self__.adj,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

loom.graph.BasicEditableGraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__48067){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__48098 = cljs.core.keyword_identical_QMARK_;
var expr__48099 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__48101 = new cljs.core.Keyword(null,"nodeset","nodeset",695991339);
var G__48102 = expr__48099;
return (pred__48098.cljs$core$IFn$_invoke$arity$2 ? pred__48098.cljs$core$IFn$_invoke$arity$2(G__48101,G__48102) : pred__48098.call(null,G__48101,G__48102));
})())){
return (new loom.graph.BasicEditableGraph(G__48067,self__.adj,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48103 = new cljs.core.Keyword(null,"adj","adj",-1344630196);
var G__48104 = expr__48099;
return (pred__48098.cljs$core$IFn$_invoke$arity$2 ? pred__48098.cljs$core$IFn$_invoke$arity$2(G__48103,G__48104) : pred__48098.call(null,G__48103,G__48104));
})())){
return (new loom.graph.BasicEditableGraph(self__.nodeset,G__48067,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.BasicEditableGraph(self__.nodeset,self__.adj,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__48067),null));
}
}
});

loom.graph.BasicEditableGraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj,null))], null),self__.__extmap));
});

loom.graph.BasicEditableGraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__48067){
var self__ = this;
var this__4384__auto____$1 = this;
return (new loom.graph.BasicEditableGraph(self__.nodeset,self__.adj,G__48067,self__.__extmap,self__.__hash));
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nodeset","nodeset",-1958444430,null),new cljs.core.Symbol(null,"adj","adj",295901331,null)], null);
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
loom.graph.map__GT_BasicEditableGraph = (function loom$graph$map__GT_BasicEditableGraph(G__48073){
var extmap__4424__auto__ = (function (){var G__48113 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__48073,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"adj","adj",-1344630196)], 0));
if(cljs.core.record_QMARK_(G__48073)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__48113);
} else {
return G__48113;
}
})();
return (new loom.graph.BasicEditableGraph(new cljs.core.Keyword(null,"nodeset","nodeset",695991339).cljs$core$IFn$_invoke$arity$1(G__48073),new cljs.core.Keyword(null,"adj","adj",-1344630196).cljs$core$IFn$_invoke$arity$1(G__48073),null,cljs.core.not_empty(extmap__4424__auto__),null));
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

loom.graph.BasicEditableDigraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k48115,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__48120 = k48115;
var G__48120__$1 = (((G__48120 instanceof cljs.core.Keyword))?G__48120.fqn:null);
switch (G__48120__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k48115,else__4388__auto__);

}
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__48121){
var vec__48122 = p__48121;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48122,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48122,(1),null);
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
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#loom.graph.BasicEditableDigraph{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$],null))], null),self__.__extmap));
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__48114){
var self__ = this;
var G__48114__$1 = this;
return (new cljs.core.RecordIter((0),G__48114__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196),new cljs.core.Keyword(null,"in","in",-1531184865)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4243__auto____$1 = (function (){var fexpr__48131 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (324724442 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__48131(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this48116,other48117){
var self__ = this;
var this48116__$1 = this;
return (((!((other48117 == null)))) && ((this48116__$1.constructor === other48117.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48116__$1.nodeset,other48117.nodeset)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48116__$1.adj,other48117.adj)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48116__$1.in,other48117.in)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48116__$1.__extmap,other48117.__extmap)));
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),null,new cljs.core.Keyword(null,"adj","adj",-1344630196),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new loom.graph.BasicEditableDigraph(self__.nodeset,self__.adj,self__.in$,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__48114){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__48137 = cljs.core.keyword_identical_QMARK_;
var expr__48138 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__48140 = new cljs.core.Keyword(null,"nodeset","nodeset",695991339);
var G__48141 = expr__48138;
return (pred__48137.cljs$core$IFn$_invoke$arity$2 ? pred__48137.cljs$core$IFn$_invoke$arity$2(G__48140,G__48141) : pred__48137.call(null,G__48140,G__48141));
})())){
return (new loom.graph.BasicEditableDigraph(G__48114,self__.adj,self__.in$,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48147 = new cljs.core.Keyword(null,"adj","adj",-1344630196);
var G__48148 = expr__48138;
return (pred__48137.cljs$core$IFn$_invoke$arity$2 ? pred__48137.cljs$core$IFn$_invoke$arity$2(G__48147,G__48148) : pred__48137.call(null,G__48147,G__48148));
})())){
return (new loom.graph.BasicEditableDigraph(self__.nodeset,G__48114,self__.in$,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48152 = new cljs.core.Keyword(null,"in","in",-1531184865);
var G__48153 = expr__48138;
return (pred__48137.cljs$core$IFn$_invoke$arity$2 ? pred__48137.cljs$core$IFn$_invoke$arity$2(G__48152,G__48153) : pred__48137.call(null,G__48152,G__48153));
})())){
return (new loom.graph.BasicEditableDigraph(self__.nodeset,self__.adj,G__48114,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.BasicEditableDigraph(self__.nodeset,self__.adj,self__.in$,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__48114),null));
}
}
}
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$,null))], null),self__.__extmap));
});

loom.graph.BasicEditableDigraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__48114){
var self__ = this;
var this__4384__auto____$1 = this;
return (new loom.graph.BasicEditableDigraph(self__.nodeset,self__.adj,self__.in$,G__48114,self__.__extmap,self__.__hash));
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nodeset","nodeset",-1958444430,null),new cljs.core.Symbol(null,"adj","adj",295901331,null),new cljs.core.Symbol(null,"in","in",109346662,null)], null);
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
loom.graph.map__GT_BasicEditableDigraph = (function loom$graph$map__GT_BasicEditableDigraph(G__48118){
var extmap__4424__auto__ = (function (){var G__48157 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__48118,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"adj","adj",-1344630196),new cljs.core.Keyword(null,"in","in",-1531184865)], 0));
if(cljs.core.record_QMARK_(G__48118)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__48157);
} else {
return G__48157;
}
})();
return (new loom.graph.BasicEditableDigraph(new cljs.core.Keyword(null,"nodeset","nodeset",695991339).cljs$core$IFn$_invoke$arity$1(G__48118),new cljs.core.Keyword(null,"adj","adj",-1344630196).cljs$core$IFn$_invoke$arity$1(G__48118),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(G__48118),null,cljs.core.not_empty(extmap__4424__auto__),null));
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

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k48159,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__48167 = k48159;
var G__48167__$1 = (((G__48167 instanceof cljs.core.Keyword))?G__48167.fqn:null);
switch (G__48167__$1) {
case "nodeset":
return self__.nodeset;

break;
case "adj":
return self__.adj;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k48159,else__4388__auto__);

}
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__48168){
var vec__48170 = p__48168;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48170,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48170,(1),null);
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
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#loom.graph.BasicEditableWeightedGraph{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj],null))], null),self__.__extmap));
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__48158){
var self__ = this;
var G__48158__$1 = this;
return (new cljs.core.RecordIter((0),G__48158__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4243__auto____$1 = (function (){var fexpr__48175 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-212297308 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__48175(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this48160,other48161){
var self__ = this;
var this48160__$1 = this;
return (((!((other48161 == null)))) && ((this48160__$1.constructor === other48161.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48160__$1.nodeset,other48161.nodeset)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48160__$1.adj,other48161.adj)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48160__$1.__extmap,other48161.__extmap)));
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),null,new cljs.core.Keyword(null,"adj","adj",-1344630196),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new loom.graph.BasicEditableWeightedGraph(self__.nodeset,self__.adj,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__48158){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__48185 = cljs.core.keyword_identical_QMARK_;
var expr__48186 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__48188 = new cljs.core.Keyword(null,"nodeset","nodeset",695991339);
var G__48189 = expr__48186;
return (pred__48185.cljs$core$IFn$_invoke$arity$2 ? pred__48185.cljs$core$IFn$_invoke$arity$2(G__48188,G__48189) : pred__48185.call(null,G__48188,G__48189));
})())){
return (new loom.graph.BasicEditableWeightedGraph(G__48158,self__.adj,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48190 = new cljs.core.Keyword(null,"adj","adj",-1344630196);
var G__48191 = expr__48186;
return (pred__48185.cljs$core$IFn$_invoke$arity$2 ? pred__48185.cljs$core$IFn$_invoke$arity$2(G__48190,G__48191) : pred__48185.call(null,G__48190,G__48191));
})())){
return (new loom.graph.BasicEditableWeightedGraph(self__.nodeset,G__48158,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.BasicEditableWeightedGraph(self__.nodeset,self__.adj,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__48158),null));
}
}
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj,null))], null),self__.__extmap));
});

loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__48158){
var self__ = this;
var this__4384__auto____$1 = this;
return (new loom.graph.BasicEditableWeightedGraph(self__.nodeset,self__.adj,G__48158,self__.__extmap,self__.__hash));
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nodeset","nodeset",-1958444430,null),new cljs.core.Symbol(null,"adj","adj",295901331,null)], null);
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
loom.graph.map__GT_BasicEditableWeightedGraph = (function loom$graph$map__GT_BasicEditableWeightedGraph(G__48162){
var extmap__4424__auto__ = (function (){var G__48206 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__48162,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"adj","adj",-1344630196)], 0));
if(cljs.core.record_QMARK_(G__48162)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__48206);
} else {
return G__48206;
}
})();
return (new loom.graph.BasicEditableWeightedGraph(new cljs.core.Keyword(null,"nodeset","nodeset",695991339).cljs$core$IFn$_invoke$arity$1(G__48162),new cljs.core.Keyword(null,"adj","adj",-1344630196).cljs$core$IFn$_invoke$arity$1(G__48162),null,cljs.core.not_empty(extmap__4424__auto__),null));
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

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k48211,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__48219 = k48211;
var G__48219__$1 = (((G__48219 instanceof cljs.core.Keyword))?G__48219.fqn:null);
switch (G__48219__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k48211,else__4388__auto__);

}
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__48221){
var vec__48222 = p__48221;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48222,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48222,(1),null);
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
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#loom.graph.BasicEditableWeightedDigraph{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$],null))], null),self__.__extmap));
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__48210){
var self__ = this;
var G__48210__$1 = this;
return (new cljs.core.RecordIter((0),G__48210__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196),new cljs.core.Keyword(null,"in","in",-1531184865)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4243__auto____$1 = (function (){var fexpr__48225 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1110931322 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__48225(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this48212,other48213){
var self__ = this;
var this48212__$1 = this;
return (((!((other48213 == null)))) && ((this48212__$1.constructor === other48213.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48212__$1.nodeset,other48213.nodeset)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48212__$1.adj,other48213.adj)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48212__$1.in,other48213.in)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48212__$1.__extmap,other48213.__extmap)));
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),null,new cljs.core.Keyword(null,"adj","adj",-1344630196),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new loom.graph.BasicEditableWeightedDigraph(self__.nodeset,self__.adj,self__.in$,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__48210){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__48228 = cljs.core.keyword_identical_QMARK_;
var expr__48229 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__48232 = new cljs.core.Keyword(null,"nodeset","nodeset",695991339);
var G__48233 = expr__48229;
return (pred__48228.cljs$core$IFn$_invoke$arity$2 ? pred__48228.cljs$core$IFn$_invoke$arity$2(G__48232,G__48233) : pred__48228.call(null,G__48232,G__48233));
})())){
return (new loom.graph.BasicEditableWeightedDigraph(G__48210,self__.adj,self__.in$,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48234 = new cljs.core.Keyword(null,"adj","adj",-1344630196);
var G__48235 = expr__48229;
return (pred__48228.cljs$core$IFn$_invoke$arity$2 ? pred__48228.cljs$core$IFn$_invoke$arity$2(G__48234,G__48235) : pred__48228.call(null,G__48234,G__48235));
})())){
return (new loom.graph.BasicEditableWeightedDigraph(self__.nodeset,G__48210,self__.in$,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48238 = new cljs.core.Keyword(null,"in","in",-1531184865);
var G__48239 = expr__48229;
return (pred__48228.cljs$core$IFn$_invoke$arity$2 ? pred__48228.cljs$core$IFn$_invoke$arity$2(G__48238,G__48239) : pred__48228.call(null,G__48238,G__48239));
})())){
return (new loom.graph.BasicEditableWeightedDigraph(self__.nodeset,self__.adj,G__48210,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.BasicEditableWeightedDigraph(self__.nodeset,self__.adj,self__.in$,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__48210),null));
}
}
}
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$,null))], null),self__.__extmap));
});

loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__48210){
var self__ = this;
var this__4384__auto____$1 = this;
return (new loom.graph.BasicEditableWeightedDigraph(self__.nodeset,self__.adj,self__.in$,G__48210,self__.__extmap,self__.__hash));
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nodeset","nodeset",-1958444430,null),new cljs.core.Symbol(null,"adj","adj",295901331,null),new cljs.core.Symbol(null,"in","in",109346662,null)], null);
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
loom.graph.map__GT_BasicEditableWeightedDigraph = (function loom$graph$map__GT_BasicEditableWeightedDigraph(G__48214){
var extmap__4424__auto__ = (function (){var G__48245 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__48214,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"adj","adj",-1344630196),new cljs.core.Keyword(null,"in","in",-1531184865)], 0));
if(cljs.core.record_QMARK_(G__48214)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__48245);
} else {
return G__48245;
}
})();
return (new loom.graph.BasicEditableWeightedDigraph(new cljs.core.Keyword(null,"nodeset","nodeset",695991339).cljs$core$IFn$_invoke$arity$1(G__48214),new cljs.core.Keyword(null,"adj","adj",-1344630196).cljs$core$IFn$_invoke$arity$1(G__48214),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(G__48214),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

/**
 * Weight used when none is given for edges in weighted graphs
 */
loom.graph._STAR_default_weight_STAR_ = (1);
loom.graph.remove_adj_nodes = (function loom$graph$remove_adj_nodes(m,nodes,adjacents,remove_fn){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m__$1,n){
if(cljs.core.truth_((m__$1.cljs$core$IFn$_invoke$arity$1 ? m__$1.cljs$core$IFn$_invoke$arity$1(n) : m__$1.call(null,n)))){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [n], null),(function (p1__48249_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(remove_fn,p1__48249_SHARP_,nodes);
}));
} else {
return m__$1;
}
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,m,nodes),adjacents);
});
loom.graph.BasicEditableGraph.prototype.loom$graph$Graph$ = cljs.core.PROTOCOL_SENTINEL;

loom.graph.BasicEditableGraph.prototype.loom$graph$Graph$nodes$arity$1 = (function (g){
var g__$1 = this;
return new cljs.core.Keyword(null,"nodeset","nodeset",695991339).cljs$core$IFn$_invoke$arity$1(g__$1);
});

loom.graph.BasicEditableGraph.prototype.loom$graph$Graph$edges$arity$1 = (function (g){
var g__$1 = this;
var iter__4523__auto__ = ((function (g__$1){
return (function loom$graph$iter__48256(s__48257){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__48257__$1 = s__48257;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__48257__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var n1 = cljs.core.first(xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__48257__$1,n1,xs__6277__auto__,temp__5720__auto__,g__$1){
return (function loom$graph$iter__48256_$_iter__48258(s__48259){
return (new cljs.core.LazySeq(null,((function (s__48257__$1,n1,xs__6277__auto__,temp__5720__auto__,g__$1){
return (function (){
var s__48259__$1 = s__48259;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__48259__$1);
if(temp__5720__auto____$1){
var s__48259__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__48259__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__48259__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__48261 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__48260 = (0);
while(true){
if((i__48260 < size__4522__auto__)){
var e = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__48260);
cljs.core.chunk_append(b__48261,e);

var G__49179 = (i__48260 + (1));
i__48260 = G__49179;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48261),loom$graph$iter__48256_$_iter__48258(cljs.core.chunk_rest(s__48259__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48261),null);
}
} else {
var e = cljs.core.first(s__48259__$2);
return cljs.core.cons(e,loom$graph$iter__48256_$_iter__48258(cljs.core.rest(s__48259__$2)));
}
} else {
return null;
}
break;
}
});})(s__48257__$1,n1,xs__6277__auto__,temp__5720__auto__,g__$1))
,null,null));
});})(s__48257__$1,n1,xs__6277__auto__,temp__5720__auto__,g__$1))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(loom.graph.out_edges(g__$1,n1)));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,loom$graph$iter__48256(cljs.core.rest(s__48257__$1)));
} else {
var G__49180 = cljs.core.rest(s__48257__$1);
s__48257__$1 = G__49180;
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
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"nodeset","nodeset",695991339).cljs$core$IFn$_invoke$arity$1(g__$1),node);
});

loom.graph.BasicEditableGraph.prototype.loom$graph$Graph$has_edge_QMARK_$arity$3 = (function (g,n1,n2){
var g__$1 = this;
return cljs.core.contains_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null)),n2);
});

loom.graph.BasicEditableGraph.prototype.loom$graph$Graph$out_degree$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.count(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),node], null)));
});

loom.graph.BasicEditableGraph.prototype.loom$graph$Graph$out_edges$arity$2 = (function (g,node){
var g__$1 = this;
var iter__4523__auto__ = ((function (g__$1){
return (function loom$graph$iter__48268(s__48269){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__48269__$1 = s__48269;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__48269__$1);
if(temp__5720__auto__){
var s__48269__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48269__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__48269__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__48271 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__48270 = (0);
while(true){
if((i__48270 < size__4522__auto__)){
var n2 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__48270);
cljs.core.chunk_append(b__48271,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__49182 = (i__48270 + (1));
i__48270 = G__49182;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48271),loom$graph$iter__48268(cljs.core.chunk_rest(s__48269__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48271),null);
}
} else {
var n2 = cljs.core.first(s__48269__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__48268(cljs.core.rest(s__48269__$2)));
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
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),node], null));
});

loom.graph.BasicEditableGraph.prototype.loom$graph$EditableGraph$ = cljs.core.PROTOCOL_SENTINEL;

loom.graph.BasicEditableGraph.prototype.loom$graph$EditableGraph$add_nodes_STAR_$arity$2 = (function (g,nodes){
var g__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (g__$1){
return (function (g__$2,node){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(g__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),cljs.core.conj,node);
});})(g__$1))
,g__$1,nodes);
});

loom.graph.BasicEditableGraph.prototype.loom$graph$EditableGraph$add_edges_STAR_$arity$2 = (function (g,edges){
var g__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (g__$1){
return (function (g__$2,p__48282){
var vec__48283 = p__48282;
var n1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48283,(0),null);
var n2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48283,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(g__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),cljs.core.conj,n1,n2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),n2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n2], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),n1);
});})(g__$1))
,g__$1,edges);
});

loom.graph.BasicEditableGraph.prototype.loom$graph$EditableGraph$remove_nodes_STAR_$arity$2 = (function (g,nodes){
var g__$1 = this;
var nbrs = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (g__$1){
return (function (p1__48252_SHARP_){
return loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g__$1,p1__48252_SHARP_);
});})(g__$1))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nodes], 0));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(g__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),((function (nbrs,g__$1){
return (function (p1__48253_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.disj,p1__48253_SHARP_,nodes);
});})(nbrs,g__$1))
),new cljs.core.Keyword(null,"adj","adj",-1344630196),loom.graph.remove_adj_nodes(new cljs.core.Keyword(null,"adj","adj",-1344630196).cljs$core$IFn$_invoke$arity$1(g__$1),nodes,nbrs,cljs.core.disj));
});

loom.graph.BasicEditableGraph.prototype.loom$graph$EditableGraph$remove_edges_STAR_$arity$2 = (function (g,edges){
var g__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (g__$1){
return (function (g__$2,p__48290){
var vec__48291 = p__48290;
var n1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48291,(0),null);
var n2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48291,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(g__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null),cljs.core.disj,n2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n2], null),cljs.core.disj,n1);
});})(g__$1))
,g__$1,edges);
});

loom.graph.BasicEditableGraph.prototype.loom$graph$EditableGraph$remove_all$arity$1 = (function (g){
var g__$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(g__$1,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),cljs.core.PersistentHashSet.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"adj","adj",-1344630196),cljs.core.PersistentArrayMap.EMPTY], 0));
});
loom.graph.BasicEditableDigraph.prototype.loom$graph$Graph$ = cljs.core.PROTOCOL_SENTINEL;

loom.graph.BasicEditableDigraph.prototype.loom$graph$Graph$nodes$arity$1 = (function (g){
var g__$1 = this;
return new cljs.core.Keyword(null,"nodeset","nodeset",695991339).cljs$core$IFn$_invoke$arity$1(g__$1);
});

loom.graph.BasicEditableDigraph.prototype.loom$graph$Graph$edges$arity$1 = (function (g){
var g__$1 = this;
var iter__4523__auto__ = ((function (g__$1){
return (function loom$graph$iter__48303(s__48304){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__48304__$1 = s__48304;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__48304__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var n1 = cljs.core.first(xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__48304__$1,n1,xs__6277__auto__,temp__5720__auto__,g__$1){
return (function loom$graph$iter__48303_$_iter__48305(s__48306){
return (new cljs.core.LazySeq(null,((function (s__48304__$1,n1,xs__6277__auto__,temp__5720__auto__,g__$1){
return (function (){
var s__48306__$1 = s__48306;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__48306__$1);
if(temp__5720__auto____$1){
var s__48306__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__48306__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__48306__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__48308 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__48307 = (0);
while(true){
if((i__48307 < size__4522__auto__)){
var e = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__48307);
cljs.core.chunk_append(b__48308,e);

var G__49186 = (i__48307 + (1));
i__48307 = G__49186;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48308),loom$graph$iter__48303_$_iter__48305(cljs.core.chunk_rest(s__48306__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48308),null);
}
} else {
var e = cljs.core.first(s__48306__$2);
return cljs.core.cons(e,loom$graph$iter__48303_$_iter__48305(cljs.core.rest(s__48306__$2)));
}
} else {
return null;
}
break;
}
});})(s__48304__$1,n1,xs__6277__auto__,temp__5720__auto__,g__$1))
,null,null));
});})(s__48304__$1,n1,xs__6277__auto__,temp__5720__auto__,g__$1))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(loom.graph.out_edges(g__$1,n1)));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,loom$graph$iter__48303(cljs.core.rest(s__48304__$1)));
} else {
var G__49191 = cljs.core.rest(s__48304__$1);
s__48304__$1 = G__49191;
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
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"nodeset","nodeset",695991339).cljs$core$IFn$_invoke$arity$1(g__$1),node);
});

loom.graph.BasicEditableDigraph.prototype.loom$graph$Graph$has_edge_QMARK_$arity$3 = (function (g,n1,n2){
var g__$1 = this;
return cljs.core.contains_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null)),n2);
});

loom.graph.BasicEditableDigraph.prototype.loom$graph$Graph$out_degree$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.count(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),node], null)));
});

loom.graph.BasicEditableDigraph.prototype.loom$graph$Graph$out_edges$arity$2 = (function (g,node){
var g__$1 = this;
var iter__4523__auto__ = ((function (g__$1){
return (function loom$graph$iter__48314(s__48315){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__48315__$1 = s__48315;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__48315__$1);
if(temp__5720__auto__){
var s__48315__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48315__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__48315__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__48317 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__48316 = (0);
while(true){
if((i__48316 < size__4522__auto__)){
var n2 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__48316);
cljs.core.chunk_append(b__48317,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__49195 = (i__48316 + (1));
i__48316 = G__49195;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48317),loom$graph$iter__48314(cljs.core.chunk_rest(s__48315__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48317),null);
}
} else {
var n2 = cljs.core.first(s__48315__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__48314(cljs.core.rest(s__48315__$2)));
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
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),node], null));
});

loom.graph.BasicEditableDigraph.prototype.loom$graph$EditableGraph$ = cljs.core.PROTOCOL_SENTINEL;

loom.graph.BasicEditableDigraph.prototype.loom$graph$EditableGraph$add_nodes_STAR_$arity$2 = (function (g,nodes){
var g__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (g__$1){
return (function (g__$2,node){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(g__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),cljs.core.conj,node);
});})(g__$1))
,g__$1,nodes);
});

loom.graph.BasicEditableDigraph.prototype.loom$graph$EditableGraph$add_edges_STAR_$arity$2 = (function (g,edges){
var g__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (g__$1){
return (function (g__$2,p__48331){
var vec__48333 = p__48331;
var n1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48333,(0),null);
var n2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48333,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(g__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),cljs.core.conj,n1,n2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),n2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),n2], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),n1);
});})(g__$1))
,g__$1,edges);
});

loom.graph.BasicEditableDigraph.prototype.loom$graph$EditableGraph$remove_nodes_STAR_$arity$2 = (function (g,nodes){
var g__$1 = this;
var ins = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (g__$1){
return (function (p1__48295_SHARP_){
return loom.graph.predecessors.cljs$core$IFn$_invoke$arity$2(g__$1,p1__48295_SHARP_);
});})(g__$1))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nodes], 0));
var outs = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (ins,g__$1){
return (function (p1__48296_SHARP_){
return loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g__$1,p1__48296_SHARP_);
});})(ins,g__$1))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nodes], 0));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(g__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),((function (ins,outs,g__$1){
return (function (p1__48297_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.disj,p1__48297_SHARP_,nodes);
});})(ins,outs,g__$1))
),new cljs.core.Keyword(null,"adj","adj",-1344630196),loom.graph.remove_adj_nodes(new cljs.core.Keyword(null,"adj","adj",-1344630196).cljs$core$IFn$_invoke$arity$1(g__$1),nodes,ins,cljs.core.disj)),new cljs.core.Keyword(null,"in","in",-1531184865),loom.graph.remove_adj_nodes(new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(g__$1),nodes,outs,cljs.core.disj));
});

loom.graph.BasicEditableDigraph.prototype.loom$graph$EditableGraph$remove_edges_STAR_$arity$2 = (function (g,edges){
var g__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (g__$1){
return (function (g__$2,p__48346){
var vec__48348 = p__48346;
var n1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48348,(0),null);
var n2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48348,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(g__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null),cljs.core.disj,n2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),n2], null),cljs.core.disj,n1);
});})(g__$1))
,g__$1,edges);
});

loom.graph.BasicEditableDigraph.prototype.loom$graph$EditableGraph$remove_all$arity$1 = (function (g){
var g__$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(g__$1,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),cljs.core.PersistentHashSet.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"adj","adj",-1344630196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.PersistentArrayMap.EMPTY], 0));
});

loom.graph.BasicEditableDigraph.prototype.loom$graph$Digraph$ = cljs.core.PROTOCOL_SENTINEL;

loom.graph.BasicEditableDigraph.prototype.loom$graph$Digraph$predecessors_STAR_$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),node], null));
});

loom.graph.BasicEditableDigraph.prototype.loom$graph$Digraph$in_degree$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.count(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),node], null)));
});

loom.graph.BasicEditableDigraph.prototype.loom$graph$Digraph$in_edges$arity$2 = (function (g,node){
var g__$1 = this;
var iter__4523__auto__ = ((function (g__$1){
return (function loom$graph$iter__48354(s__48355){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__48355__$1 = s__48355;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__48355__$1);
if(temp__5720__auto__){
var s__48355__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48355__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__48355__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__48357 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__48356 = (0);
while(true){
if((i__48356 < size__4522__auto__)){
var n2 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__48356);
cljs.core.chunk_append(b__48357,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,node], null));

var G__49209 = (i__48356 + (1));
i__48356 = G__49209;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48357),loom$graph$iter__48354(cljs.core.chunk_rest(s__48355__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48357),null);
}
} else {
var n2 = cljs.core.first(s__48355__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,node], null),loom$graph$iter__48354(cljs.core.rest(s__48355__$2)));
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
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(g__$1,new cljs.core.Keyword(null,"adj","adj",-1344630196),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(g__$1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Keyword(null,"adj","adj",-1344630196).cljs$core$IFn$_invoke$arity$1(g__$1)], 0));
});
loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$Graph$ = cljs.core.PROTOCOL_SENTINEL;

loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$Graph$nodes$arity$1 = (function (g){
var g__$1 = this;
return new cljs.core.Keyword(null,"nodeset","nodeset",695991339).cljs$core$IFn$_invoke$arity$1(g__$1);
});

loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$Graph$edges$arity$1 = (function (g){
var g__$1 = this;
var iter__4523__auto__ = ((function (g__$1){
return (function loom$graph$iter__48363(s__48364){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__48364__$1 = s__48364;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__48364__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var n1 = cljs.core.first(xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__48364__$1,n1,xs__6277__auto__,temp__5720__auto__,g__$1){
return (function loom$graph$iter__48363_$_iter__48365(s__48366){
return (new cljs.core.LazySeq(null,((function (s__48364__$1,n1,xs__6277__auto__,temp__5720__auto__,g__$1){
return (function (){
var s__48366__$1 = s__48366;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__48366__$1);
if(temp__5720__auto____$1){
var s__48366__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__48366__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__48366__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__48368 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__48367 = (0);
while(true){
if((i__48367 < size__4522__auto__)){
var e = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__48367);
cljs.core.chunk_append(b__48368,e);

var G__49212 = (i__48367 + (1));
i__48367 = G__49212;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48368),loom$graph$iter__48363_$_iter__48365(cljs.core.chunk_rest(s__48366__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48368),null);
}
} else {
var e = cljs.core.first(s__48366__$2);
return cljs.core.cons(e,loom$graph$iter__48363_$_iter__48365(cljs.core.rest(s__48366__$2)));
}
} else {
return null;
}
break;
}
});})(s__48364__$1,n1,xs__6277__auto__,temp__5720__auto__,g__$1))
,null,null));
});})(s__48364__$1,n1,xs__6277__auto__,temp__5720__auto__,g__$1))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(loom.graph.out_edges(g__$1,n1)));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,loom$graph$iter__48363(cljs.core.rest(s__48364__$1)));
} else {
var G__49214 = cljs.core.rest(s__48364__$1);
s__48364__$1 = G__49214;
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
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"nodeset","nodeset",695991339).cljs$core$IFn$_invoke$arity$1(g__$1),node);
});

loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$Graph$has_edge_QMARK_$arity$3 = (function (g,n1,n2){
var g__$1 = this;
return cljs.core.contains_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null)),n2);
});

loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$Graph$out_degree$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.count(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),node], null)));
});

loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$Graph$out_edges$arity$2 = (function (g,node){
var g__$1 = this;
var iter__4523__auto__ = ((function (g__$1){
return (function loom$graph$iter__48371(s__48372){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__48372__$1 = s__48372;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__48372__$1);
if(temp__5720__auto__){
var s__48372__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48372__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__48372__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__48374 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__48373 = (0);
while(true){
if((i__48373 < size__4522__auto__)){
var n2 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__48373);
cljs.core.chunk_append(b__48374,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__49216 = (i__48373 + (1));
i__48373 = G__49216;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48374),loom$graph$iter__48371(cljs.core.chunk_rest(s__48372__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48374),null);
}
} else {
var n2 = cljs.core.first(s__48372__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__48371(cljs.core.rest(s__48372__$2)));
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
return cljs.core.keys(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),node], null)));
});

loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$EditableGraph$ = cljs.core.PROTOCOL_SENTINEL;

loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$EditableGraph$add_nodes_STAR_$arity$2 = (function (g,nodes){
var g__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (g__$1){
return (function (g__$2,node){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(g__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),cljs.core.conj,node);
});})(g__$1))
,g__$1,nodes);
});

loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$EditableGraph$add_edges_STAR_$arity$2 = (function (g,edges){
var g__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (g__$1){
return (function (g__$2,p__48392){
var vec__48394 = p__48392;
var seq__48395 = cljs.core.seq(vec__48394);
var first__48396 = cljs.core.first(seq__48395);
var seq__48395__$1 = cljs.core.next(seq__48395);
var n1 = first__48396;
var first__48396__$1 = cljs.core.first(seq__48395__$1);
var seq__48395__$2 = cljs.core.next(seq__48395__$1);
var n2 = first__48396__$1;
var vec__48397 = seq__48395__$2;
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48397,(0),null);
return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(g__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),cljs.core.conj,n1,n2),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1,n2], null),(function (){var or__4131__auto__ = w;
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
var nbrs = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (g__$1){
return (function (p1__48360_SHARP_){
return loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g__$1,p1__48360_SHARP_);
});})(g__$1))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nodes], 0));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(g__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),((function (nbrs,g__$1){
return (function (p1__48361_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.disj,p1__48361_SHARP_,nodes);
});})(nbrs,g__$1))
),new cljs.core.Keyword(null,"adj","adj",-1344630196),loom.graph.remove_adj_nodes(new cljs.core.Keyword(null,"adj","adj",-1344630196).cljs$core$IFn$_invoke$arity$1(g__$1),nodes,nbrs,cljs.core.dissoc));
});

loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$EditableGraph$remove_edges_STAR_$arity$2 = (function (g,edges){
var g__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (g__$1){
return (function (g__$2,p__48403){
var vec__48404 = p__48403;
var n1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48404,(0),null);
var n2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48404,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(g__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null),cljs.core.dissoc,n2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n2], null),cljs.core.dissoc,n1);
});})(g__$1))
,g__$1,edges);
});

loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$EditableGraph$remove_all$arity$1 = (function (g){
var g__$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(g__$1,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),cljs.core.PersistentHashSet.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"adj","adj",-1344630196),cljs.core.PersistentArrayMap.EMPTY], 0));
});

loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$WeightedGraph$ = cljs.core.PROTOCOL_SENTINEL;

loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$WeightedGraph$weight_STAR_$arity$2 = (function (g,e){
var g__$1 = this;
return loom.graph.weight.cljs$core$IFn$_invoke$arity$3(g__$1,loom.graph.src(e),loom.graph.dest(e));
});

loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$WeightedGraph$weight_STAR_$arity$3 = (function (g,n1,n2){
var g__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1,n2], null));
});
loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Graph$ = cljs.core.PROTOCOL_SENTINEL;

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Graph$nodes$arity$1 = (function (g){
var g__$1 = this;
return new cljs.core.Keyword(null,"nodeset","nodeset",695991339).cljs$core$IFn$_invoke$arity$1(g__$1);
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Graph$edges$arity$1 = (function (g){
var g__$1 = this;
var iter__4523__auto__ = ((function (g__$1){
return (function loom$graph$iter__48417(s__48418){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__48418__$1 = s__48418;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__48418__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var n1 = cljs.core.first(xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__48418__$1,n1,xs__6277__auto__,temp__5720__auto__,g__$1){
return (function loom$graph$iter__48417_$_iter__48419(s__48420){
return (new cljs.core.LazySeq(null,((function (s__48418__$1,n1,xs__6277__auto__,temp__5720__auto__,g__$1){
return (function (){
var s__48420__$1 = s__48420;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__48420__$1);
if(temp__5720__auto____$1){
var s__48420__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__48420__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__48420__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__48422 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__48421 = (0);
while(true){
if((i__48421 < size__4522__auto__)){
var e = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__48421);
cljs.core.chunk_append(b__48422,e);

var G__49227 = (i__48421 + (1));
i__48421 = G__49227;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48422),loom$graph$iter__48417_$_iter__48419(cljs.core.chunk_rest(s__48420__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48422),null);
}
} else {
var e = cljs.core.first(s__48420__$2);
return cljs.core.cons(e,loom$graph$iter__48417_$_iter__48419(cljs.core.rest(s__48420__$2)));
}
} else {
return null;
}
break;
}
});})(s__48418__$1,n1,xs__6277__auto__,temp__5720__auto__,g__$1))
,null,null));
});})(s__48418__$1,n1,xs__6277__auto__,temp__5720__auto__,g__$1))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(loom.graph.out_edges(g__$1,n1)));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,loom$graph$iter__48417(cljs.core.rest(s__48418__$1)));
} else {
var G__49229 = cljs.core.rest(s__48418__$1);
s__48418__$1 = G__49229;
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
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"nodeset","nodeset",695991339).cljs$core$IFn$_invoke$arity$1(g__$1),node);
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Graph$has_edge_QMARK_$arity$3 = (function (g,n1,n2){
var g__$1 = this;
return cljs.core.contains_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null)),n2);
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Graph$out_degree$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.count(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),node], null)));
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Graph$out_edges$arity$2 = (function (g,node){
var g__$1 = this;
var iter__4523__auto__ = ((function (g__$1){
return (function loom$graph$iter__48435(s__48436){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__48436__$1 = s__48436;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__48436__$1);
if(temp__5720__auto__){
var s__48436__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48436__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__48436__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__48438 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__48437 = (0);
while(true){
if((i__48437 < size__4522__auto__)){
var n2 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__48437);
cljs.core.chunk_append(b__48438,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__49231 = (i__48437 + (1));
i__48437 = G__49231;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48438),loom$graph$iter__48435(cljs.core.chunk_rest(s__48436__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48438),null);
}
} else {
var n2 = cljs.core.first(s__48436__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__48435(cljs.core.rest(s__48436__$2)));
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
return cljs.core.keys(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),node], null)));
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$EditableGraph$ = cljs.core.PROTOCOL_SENTINEL;

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$EditableGraph$add_nodes_STAR_$arity$2 = (function (g,nodes){
var g__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (g__$1){
return (function (g__$2,node){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(g__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),cljs.core.conj,node);
});})(g__$1))
,g__$1,nodes);
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$EditableGraph$add_edges_STAR_$arity$2 = (function (g,edges){
var g__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (g__$1){
return (function (g__$2,p__48446){
var vec__48447 = p__48446;
var seq__48448 = cljs.core.seq(vec__48447);
var first__48449 = cljs.core.first(seq__48448);
var seq__48448__$1 = cljs.core.next(seq__48448);
var n1 = first__48449;
var first__48449__$1 = cljs.core.first(seq__48448__$1);
var seq__48448__$2 = cljs.core.next(seq__48448__$1);
var n2 = first__48449__$1;
var vec__48450 = seq__48448__$2;
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48450,(0),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(g__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),cljs.core.conj,n1,n2),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1,n2], null),(function (){var or__4131__auto__ = w;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return loom.graph._STAR_default_weight_STAR_;
}
})()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),n2], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),n1);
});})(g__$1))
,g__$1,edges);
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$EditableGraph$remove_nodes_STAR_$arity$2 = (function (g,nodes){
var g__$1 = this;
var ins = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (g__$1){
return (function (p1__48413_SHARP_){
return loom.graph.predecessors.cljs$core$IFn$_invoke$arity$2(g__$1,p1__48413_SHARP_);
});})(g__$1))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nodes], 0));
var outs = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (ins,g__$1){
return (function (p1__48414_SHARP_){
return loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g__$1,p1__48414_SHARP_);
});})(ins,g__$1))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nodes], 0));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(g__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),((function (ins,outs,g__$1){
return (function (p1__48415_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.disj,p1__48415_SHARP_,nodes);
});})(ins,outs,g__$1))
),new cljs.core.Keyword(null,"adj","adj",-1344630196),loom.graph.remove_adj_nodes(new cljs.core.Keyword(null,"adj","adj",-1344630196).cljs$core$IFn$_invoke$arity$1(g__$1),nodes,ins,cljs.core.dissoc)),new cljs.core.Keyword(null,"in","in",-1531184865),loom.graph.remove_adj_nodes(new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(g__$1),nodes,outs,cljs.core.disj));
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$EditableGraph$remove_edges_STAR_$arity$2 = (function (g,edges){
var g__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (g__$1){
return (function (g__$2,p__48460){
var vec__48461 = p__48460;
var n1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48461,(0),null);
var n2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48461,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(g__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null),cljs.core.dissoc,n2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),n2], null),cljs.core.disj,n1);
});})(g__$1))
,g__$1,edges);
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$EditableGraph$remove_all$arity$1 = (function (g){
var g__$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(g__$1,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),cljs.core.PersistentHashSet.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"adj","adj",-1344630196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.PersistentArrayMap.EMPTY], 0));
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Digraph$ = cljs.core.PROTOCOL_SENTINEL;

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Digraph$predecessors_STAR_$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),node], null));
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Digraph$in_degree$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.count(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),node], null)));
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Digraph$in_edges$arity$2 = (function (g,node){
var g__$1 = this;
var iter__4523__auto__ = ((function (g__$1){
return (function loom$graph$iter__48476(s__48477){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__48477__$1 = s__48477;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__48477__$1);
if(temp__5720__auto__){
var s__48477__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48477__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__48477__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__48479 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__48478 = (0);
while(true){
if((i__48478 < size__4522__auto__)){
var n2 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__48478);
cljs.core.chunk_append(b__48479,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,node], null));

var G__49238 = (i__48478 + (1));
i__48478 = G__49238;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48479),loom$graph$iter__48476(cljs.core.chunk_rest(s__48477__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48479),null);
}
} else {
var n2 = cljs.core.first(s__48477__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,node], null),loom$graph$iter__48476(cljs.core.rest(s__48477__$2)));
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
return (function (tg,p__48484){
var vec__48487 = p__48484;
var n1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48487,(0),null);
var n2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48487,(1),null);
return loom.graph.add_edges_STAR_(tg,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,n1,loom.graph.weight.cljs$core$IFn$_invoke$arity$3(g__$1,n1,n2)], null)], null));
});})(g__$1))
,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(g__$1,new cljs.core.Keyword(null,"adj","adj",-1344630196),cljs.core.PersistentArrayMap.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.PersistentArrayMap.EMPTY], 0)),loom.graph.edges(g__$1));
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$WeightedGraph$ = cljs.core.PROTOCOL_SENTINEL;

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$WeightedGraph$weight_STAR_$arity$2 = (function (g,e){
var g__$1 = this;
return loom.graph.weight.cljs$core$IFn$_invoke$arity$3(g__$1,loom.graph.src(e),loom.graph.dest(e));
});

loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$WeightedGraph$weight_STAR_$arity$3 = (function (g,n1,n2){
var g__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1,n2], null));
});
loom.graph.call_or_return = (function loom$graph$call_or_return(var_args){
var args__4736__auto__ = [];
var len__4730__auto___49242 = arguments.length;
var i__4731__auto___49243 = (0);
while(true){
if((i__4731__auto___49243 < len__4730__auto___49242)){
args__4736__auto__.push((arguments[i__4731__auto___49243]));

var G__49244 = (i__4731__auto___49243 + (1));
i__4731__auto___49243 = G__49244;
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
loom.graph.call_or_return.cljs$lang$applyTo = (function (seq48494){
var G__48495 = cljs.core.first(seq48494);
var seq48494__$1 = cljs.core.next(seq48494);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48495,seq48494__$1);
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

loom.graph.FlyGraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k48499,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__48507 = k48499;
var G__48507__$1 = (((G__48507 instanceof cljs.core.Keyword))?G__48507.fqn:null);
switch (G__48507__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k48499,else__4388__auto__);

}
});

loom.graph.FlyGraph.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__48510){
var vec__48511 = p__48510;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48511,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48511,(1),null);
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
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#loom.graph.FlyGraph{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start","start",-355208981),self__.start],null))], null),self__.__extmap));
});

loom.graph.FlyGraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__48498){
var self__ = this;
var G__48498__$1 = this;
return (new cljs.core.RecordIter((0),G__48498__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"start","start",-355208981)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4243__auto____$1 = (function (){var fexpr__48516 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1546683162 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__48516(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

loom.graph.FlyGraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this48500,other48501){
var self__ = this;
var this48500__$1 = this;
return (((!((other48501 == null)))) && ((this48500__$1.constructor === other48501.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48500__$1.fnodes,other48501.fnodes)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48500__$1.fedges,other48501.fedges)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48500__$1.fsuccessors,other48501.fsuccessors)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48500__$1.start,other48501.start)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48500__$1.__extmap,other48501.__extmap)));
});

loom.graph.FlyGraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fedges","fedges",499673923),null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),null,new cljs.core.Keyword(null,"start","start",-355208981),null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new loom.graph.FlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.start,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

loom.graph.FlyGraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__48498){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__48520 = cljs.core.keyword_identical_QMARK_;
var expr__48521 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__48523 = new cljs.core.Keyword(null,"fnodes","fnodes",-635833493);
var G__48524 = expr__48521;
return (pred__48520.cljs$core$IFn$_invoke$arity$2 ? pred__48520.cljs$core$IFn$_invoke$arity$2(G__48523,G__48524) : pred__48520.call(null,G__48523,G__48524));
})())){
return (new loom.graph.FlyGraph(G__48498,self__.fedges,self__.fsuccessors,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48525 = new cljs.core.Keyword(null,"fedges","fedges",499673923);
var G__48526 = expr__48521;
return (pred__48520.cljs$core$IFn$_invoke$arity$2 ? pred__48520.cljs$core$IFn$_invoke$arity$2(G__48525,G__48526) : pred__48520.call(null,G__48525,G__48526));
})())){
return (new loom.graph.FlyGraph(self__.fnodes,G__48498,self__.fsuccessors,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48527 = new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207);
var G__48528 = expr__48521;
return (pred__48520.cljs$core$IFn$_invoke$arity$2 ? pred__48520.cljs$core$IFn$_invoke$arity$2(G__48527,G__48528) : pred__48520.call(null,G__48527,G__48528));
})())){
return (new loom.graph.FlyGraph(self__.fnodes,self__.fedges,G__48498,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48529 = new cljs.core.Keyword(null,"start","start",-355208981);
var G__48530 = expr__48521;
return (pred__48520.cljs$core$IFn$_invoke$arity$2 ? pred__48520.cljs$core$IFn$_invoke$arity$2(G__48529,G__48530) : pred__48520.call(null,G__48529,G__48530));
})())){
return (new loom.graph.FlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,G__48498,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.FlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.start,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__48498),null));
}
}
}
}
});

loom.graph.FlyGraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start","start",-355208981),self__.start,null))], null),self__.__extmap));
});

loom.graph.FlyGraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__48498){
var self__ = this;
var this__4384__auto____$1 = this;
return (new loom.graph.FlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.start,G__48498,self__.__extmap,self__.__hash));
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
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fnodes","fnodes",1004698034,null),new cljs.core.Symbol(null,"fedges","fedges",2140205450,null),new cljs.core.Symbol(null,"fsuccessors","fsuccessors",-826676562,null),new cljs.core.Symbol(null,"start","start",1285322546,null)], null);
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
loom.graph.map__GT_FlyGraph = (function loom$graph$map__GT_FlyGraph(G__48503){
var extmap__4424__auto__ = (function (){var G__48534 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__48503,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"start","start",-355208981)], 0));
if(cljs.core.record_QMARK_(G__48503)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__48534);
} else {
return G__48534;
}
})();
return (new loom.graph.FlyGraph(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(G__48503),new cljs.core.Keyword(null,"fedges","fedges",499673923).cljs$core$IFn$_invoke$arity$1(G__48503),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207).cljs$core$IFn$_invoke$arity$1(G__48503),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(G__48503),null,cljs.core.not_empty(extmap__4424__auto__),null));
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

loom.graph.FlyDigraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k48536,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__48541 = k48536;
var G__48541__$1 = (((G__48541 instanceof cljs.core.Keyword))?G__48541.fqn:null);
switch (G__48541__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k48536,else__4388__auto__);

}
});

loom.graph.FlyDigraph.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__48543){
var vec__48544 = p__48543;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48544,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48544,(1),null);
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
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#loom.graph.FlyDigraph{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),self__.fpredecessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start","start",-355208981),self__.start],null))], null),self__.__extmap));
});

loom.graph.FlyDigraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__48535){
var self__ = this;
var G__48535__$1 = this;
return (new cljs.core.RecordIter((0),G__48535__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),new cljs.core.Keyword(null,"start","start",-355208981)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4243__auto____$1 = (function (){var fexpr__48551 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (1981361804 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__48551(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

loom.graph.FlyDigraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this48537,other48538){
var self__ = this;
var this48537__$1 = this;
return (((!((other48538 == null)))) && ((this48537__$1.constructor === other48538.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48537__$1.fnodes,other48538.fnodes)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48537__$1.fedges,other48538.fedges)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48537__$1.fsuccessors,other48538.fsuccessors)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48537__$1.fpredecessors,other48538.fpredecessors)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48537__$1.start,other48538.start)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48537__$1.__extmap,other48538.__extmap)));
});

loom.graph.FlyDigraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fedges","fedges",499673923),null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),null,new cljs.core.Keyword(null,"start","start",-355208981),null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),null,new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.start,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

loom.graph.FlyDigraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__48535){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__48552 = cljs.core.keyword_identical_QMARK_;
var expr__48553 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__48555 = new cljs.core.Keyword(null,"fnodes","fnodes",-635833493);
var G__48556 = expr__48553;
return (pred__48552.cljs$core$IFn$_invoke$arity$2 ? pred__48552.cljs$core$IFn$_invoke$arity$2(G__48555,G__48556) : pred__48552.call(null,G__48555,G__48556));
})())){
return (new loom.graph.FlyDigraph(G__48535,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48557 = new cljs.core.Keyword(null,"fedges","fedges",499673923);
var G__48558 = expr__48553;
return (pred__48552.cljs$core$IFn$_invoke$arity$2 ? pred__48552.cljs$core$IFn$_invoke$arity$2(G__48557,G__48558) : pred__48552.call(null,G__48557,G__48558));
})())){
return (new loom.graph.FlyDigraph(self__.fnodes,G__48535,self__.fsuccessors,self__.fpredecessors,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48559 = new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207);
var G__48560 = expr__48553;
return (pred__48552.cljs$core$IFn$_invoke$arity$2 ? pred__48552.cljs$core$IFn$_invoke$arity$2(G__48559,G__48560) : pred__48552.call(null,G__48559,G__48560));
})())){
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,G__48535,self__.fpredecessors,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48561 = new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934);
var G__48562 = expr__48553;
return (pred__48552.cljs$core$IFn$_invoke$arity$2 ? pred__48552.cljs$core$IFn$_invoke$arity$2(G__48561,G__48562) : pred__48552.call(null,G__48561,G__48562));
})())){
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,G__48535,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48564 = new cljs.core.Keyword(null,"start","start",-355208981);
var G__48565 = expr__48553;
return (pred__48552.cljs$core$IFn$_invoke$arity$2 ? pred__48552.cljs$core$IFn$_invoke$arity$2(G__48564,G__48565) : pred__48552.call(null,G__48564,G__48565));
})())){
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,G__48535,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.start,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__48535),null));
}
}
}
}
}
});

loom.graph.FlyDigraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),self__.fpredecessors,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start","start",-355208981),self__.start,null))], null),self__.__extmap));
});

loom.graph.FlyDigraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__48535){
var self__ = this;
var this__4384__auto____$1 = this;
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.start,G__48535,self__.__extmap,self__.__hash));
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
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fnodes","fnodes",1004698034,null),new cljs.core.Symbol(null,"fedges","fedges",2140205450,null),new cljs.core.Symbol(null,"fsuccessors","fsuccessors",-826676562,null),new cljs.core.Symbol(null,"fpredecessors","fpredecessors",227702593,null),new cljs.core.Symbol(null,"start","start",1285322546,null)], null);
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
loom.graph.map__GT_FlyDigraph = (function loom$graph$map__GT_FlyDigraph(G__48539){
var extmap__4424__auto__ = (function (){var G__48568 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__48539,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),new cljs.core.Keyword(null,"start","start",-355208981)], 0));
if(cljs.core.record_QMARK_(G__48539)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__48568);
} else {
return G__48568;
}
})();
return (new loom.graph.FlyDigraph(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(G__48539),new cljs.core.Keyword(null,"fedges","fedges",499673923).cljs$core$IFn$_invoke$arity$1(G__48539),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207).cljs$core$IFn$_invoke$arity$1(G__48539),new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934).cljs$core$IFn$_invoke$arity$1(G__48539),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(G__48539),null,cljs.core.not_empty(extmap__4424__auto__),null));
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

loom.graph.WeightedFlyGraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k48570,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__48584 = k48570;
var G__48584__$1 = (((G__48584 instanceof cljs.core.Keyword))?G__48584.fqn:null);
switch (G__48584__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k48570,else__4388__auto__);

}
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__48589){
var vec__48591 = p__48589;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48591,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48591,(1),null);
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
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#loom.graph.WeightedFlyGraph{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fweight","fweight",1299924141),self__.fweight],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start","start",-355208981),self__.start],null))], null),self__.__extmap));
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__48569){
var self__ = this;
var G__48569__$1 = this;
return (new cljs.core.RecordIter((0),G__48569__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"fweight","fweight",1299924141),new cljs.core.Keyword(null,"start","start",-355208981)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4243__auto____$1 = (function (){var fexpr__48615 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1357917791 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__48615(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this48571,other48572){
var self__ = this;
var this48571__$1 = this;
return (((!((other48572 == null)))) && ((this48571__$1.constructor === other48572.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48571__$1.fnodes,other48572.fnodes)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48571__$1.fedges,other48572.fedges)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48571__$1.fsuccessors,other48572.fsuccessors)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48571__$1.fweight,other48572.fweight)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48571__$1.start,other48572.start)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48571__$1.__extmap,other48572.__extmap)));
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fedges","fedges",499673923),null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),null,new cljs.core.Keyword(null,"start","start",-355208981),null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),null,new cljs.core.Keyword(null,"fweight","fweight",1299924141),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fweight,self__.start,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__48569){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__48634 = cljs.core.keyword_identical_QMARK_;
var expr__48635 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__48637 = new cljs.core.Keyword(null,"fnodes","fnodes",-635833493);
var G__48638 = expr__48635;
return (pred__48634.cljs$core$IFn$_invoke$arity$2 ? pred__48634.cljs$core$IFn$_invoke$arity$2(G__48637,G__48638) : pred__48634.call(null,G__48637,G__48638));
})())){
return (new loom.graph.WeightedFlyGraph(G__48569,self__.fedges,self__.fsuccessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48639 = new cljs.core.Keyword(null,"fedges","fedges",499673923);
var G__48640 = expr__48635;
return (pred__48634.cljs$core$IFn$_invoke$arity$2 ? pred__48634.cljs$core$IFn$_invoke$arity$2(G__48639,G__48640) : pred__48634.call(null,G__48639,G__48640));
})())){
return (new loom.graph.WeightedFlyGraph(self__.fnodes,G__48569,self__.fsuccessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48647 = new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207);
var G__48648 = expr__48635;
return (pred__48634.cljs$core$IFn$_invoke$arity$2 ? pred__48634.cljs$core$IFn$_invoke$arity$2(G__48647,G__48648) : pred__48634.call(null,G__48647,G__48648));
})())){
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,G__48569,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48651 = new cljs.core.Keyword(null,"fweight","fweight",1299924141);
var G__48652 = expr__48635;
return (pred__48634.cljs$core$IFn$_invoke$arity$2 ? pred__48634.cljs$core$IFn$_invoke$arity$2(G__48651,G__48652) : pred__48634.call(null,G__48651,G__48652));
})())){
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,G__48569,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48656 = new cljs.core.Keyword(null,"start","start",-355208981);
var G__48657 = expr__48635;
return (pred__48634.cljs$core$IFn$_invoke$arity$2 ? pred__48634.cljs$core$IFn$_invoke$arity$2(G__48656,G__48657) : pred__48634.call(null,G__48656,G__48657));
})())){
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fweight,G__48569,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fweight,self__.start,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__48569),null));
}
}
}
}
}
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fweight","fweight",1299924141),self__.fweight,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start","start",-355208981),self__.start,null))], null),self__.__extmap));
});

loom.graph.WeightedFlyGraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__48569){
var self__ = this;
var this__4384__auto____$1 = this;
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fweight,self__.start,G__48569,self__.__extmap,self__.__hash));
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
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fnodes","fnodes",1004698034,null),new cljs.core.Symbol(null,"fedges","fedges",2140205450,null),new cljs.core.Symbol(null,"fsuccessors","fsuccessors",-826676562,null),new cljs.core.Symbol(null,"fweight","fweight",-1354511628,null),new cljs.core.Symbol(null,"start","start",1285322546,null)], null);
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
loom.graph.map__GT_WeightedFlyGraph = (function loom$graph$map__GT_WeightedFlyGraph(G__48577){
var extmap__4424__auto__ = (function (){var G__48665 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__48577,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"fweight","fweight",1299924141),new cljs.core.Keyword(null,"start","start",-355208981)], 0));
if(cljs.core.record_QMARK_(G__48577)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__48665);
} else {
return G__48665;
}
})();
return (new loom.graph.WeightedFlyGraph(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(G__48577),new cljs.core.Keyword(null,"fedges","fedges",499673923).cljs$core$IFn$_invoke$arity$1(G__48577),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207).cljs$core$IFn$_invoke$arity$1(G__48577),new cljs.core.Keyword(null,"fweight","fweight",1299924141).cljs$core$IFn$_invoke$arity$1(G__48577),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(G__48577),null,cljs.core.not_empty(extmap__4424__auto__),null));
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

loom.graph.WeightedFlyDigraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k48673,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__48689 = k48673;
var G__48689__$1 = (((G__48689 instanceof cljs.core.Keyword))?G__48689.fqn:null);
switch (G__48689__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k48673,else__4388__auto__);

}
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__48693){
var vec__48694 = p__48693;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48694,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48694,(1),null);
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
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#loom.graph.WeightedFlyDigraph{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),self__.fpredecessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fweight","fweight",1299924141),self__.fweight],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start","start",-355208981),self__.start],null))], null),self__.__extmap));
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__48672){
var self__ = this;
var G__48672__$1 = this;
return (new cljs.core.RecordIter((0),G__48672__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),new cljs.core.Keyword(null,"fweight","fweight",1299924141),new cljs.core.Keyword(null,"start","start",-355208981)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4243__auto____$1 = (function (){var fexpr__48704 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (788097524 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__48704(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this48674,other48675){
var self__ = this;
var this48674__$1 = this;
return (((!((other48675 == null)))) && ((this48674__$1.constructor === other48675.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48674__$1.fnodes,other48675.fnodes)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48674__$1.fedges,other48675.fedges)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48674__$1.fsuccessors,other48675.fsuccessors)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48674__$1.fpredecessors,other48675.fpredecessors)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48674__$1.fweight,other48675.fweight)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48674__$1.start,other48675.start)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48674__$1.__extmap,other48675.__extmap)));
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"fedges","fedges",499673923),null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),null,new cljs.core.Keyword(null,"start","start",-355208981),null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),null,new cljs.core.Keyword(null,"fweight","fweight",1299924141),null,new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.fweight,self__.start,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__48672){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__48711 = cljs.core.keyword_identical_QMARK_;
var expr__48712 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__48714 = new cljs.core.Keyword(null,"fnodes","fnodes",-635833493);
var G__48715 = expr__48712;
return (pred__48711.cljs$core$IFn$_invoke$arity$2 ? pred__48711.cljs$core$IFn$_invoke$arity$2(G__48714,G__48715) : pred__48711.call(null,G__48714,G__48715));
})())){
return (new loom.graph.WeightedFlyDigraph(G__48672,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48716 = new cljs.core.Keyword(null,"fedges","fedges",499673923);
var G__48717 = expr__48712;
return (pred__48711.cljs$core$IFn$_invoke$arity$2 ? pred__48711.cljs$core$IFn$_invoke$arity$2(G__48716,G__48717) : pred__48711.call(null,G__48716,G__48717));
})())){
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,G__48672,self__.fsuccessors,self__.fpredecessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48718 = new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207);
var G__48719 = expr__48712;
return (pred__48711.cljs$core$IFn$_invoke$arity$2 ? pred__48711.cljs$core$IFn$_invoke$arity$2(G__48718,G__48719) : pred__48711.call(null,G__48718,G__48719));
})())){
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,G__48672,self__.fpredecessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48720 = new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934);
var G__48721 = expr__48712;
return (pred__48711.cljs$core$IFn$_invoke$arity$2 ? pred__48711.cljs$core$IFn$_invoke$arity$2(G__48720,G__48721) : pred__48711.call(null,G__48720,G__48721));
})())){
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,G__48672,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48722 = new cljs.core.Keyword(null,"fweight","fweight",1299924141);
var G__48723 = expr__48712;
return (pred__48711.cljs$core$IFn$_invoke$arity$2 ? pred__48711.cljs$core$IFn$_invoke$arity$2(G__48722,G__48723) : pred__48711.call(null,G__48722,G__48723));
})())){
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,G__48672,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48724 = new cljs.core.Keyword(null,"start","start",-355208981);
var G__48725 = expr__48712;
return (pred__48711.cljs$core$IFn$_invoke$arity$2 ? pred__48711.cljs$core$IFn$_invoke$arity$2(G__48724,G__48725) : pred__48711.call(null,G__48724,G__48725));
})())){
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.fweight,G__48672,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.fweight,self__.start,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__48672),null));
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
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),self__.fpredecessors,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fweight","fweight",1299924141),self__.fweight,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start","start",-355208981),self__.start,null))], null),self__.__extmap));
});

loom.graph.WeightedFlyDigraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__48672){
var self__ = this;
var this__4384__auto____$1 = this;
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.fweight,self__.start,G__48672,self__.__extmap,self__.__hash));
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
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fnodes","fnodes",1004698034,null),new cljs.core.Symbol(null,"fedges","fedges",2140205450,null),new cljs.core.Symbol(null,"fsuccessors","fsuccessors",-826676562,null),new cljs.core.Symbol(null,"fpredecessors","fpredecessors",227702593,null),new cljs.core.Symbol(null,"fweight","fweight",-1354511628,null),new cljs.core.Symbol(null,"start","start",1285322546,null)], null);
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
loom.graph.map__GT_WeightedFlyDigraph = (function loom$graph$map__GT_WeightedFlyDigraph(G__48680){
var extmap__4424__auto__ = (function (){var G__48731 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__48680,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),new cljs.core.Keyword(null,"fweight","fweight",1299924141),new cljs.core.Keyword(null,"start","start",-355208981)], 0));
if(cljs.core.record_QMARK_(G__48680)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__48731);
} else {
return G__48731;
}
})();
return (new loom.graph.WeightedFlyDigraph(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(G__48680),new cljs.core.Keyword(null,"fedges","fedges",499673923).cljs$core$IFn$_invoke$arity$1(G__48680),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207).cljs$core$IFn$_invoke$arity$1(G__48680),new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934).cljs$core$IFn$_invoke$arity$1(G__48680),new cljs.core.Keyword(null,"fweight","fweight",1299924141).cljs$core$IFn$_invoke$arity$1(G__48680),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(G__48680),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

loom.graph.FlyGraph.prototype.loom$graph$Graph$ = cljs.core.PROTOCOL_SENTINEL;

loom.graph.FlyGraph.prototype.loom$graph$Graph$nodes$arity$1 = (function (g){
var g__$1 = this;
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(g__$1);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.not(new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(g__$1));
}
})())){
return loom.graph.call_or_return(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(g__$1));
} else {
return loom.alg_generic.bf_traverse(loom.graph.successors.cljs$core$IFn$_invoke$arity$1(g__$1),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(g__$1));
}
});

loom.graph.FlyGraph.prototype.loom$graph$Graph$edges$arity$1 = (function (g){
var g__$1 = this;
if(cljs.core.truth_(new cljs.core.Keyword(null,"fedges","fedges",499673923).cljs$core$IFn$_invoke$arity$1(g__$1))){
return loom.graph.call_or_return(new cljs.core.Keyword(null,"fedges","fedges",499673923).cljs$core$IFn$_invoke$arity$1(g__$1));
} else {
var iter__4523__auto__ = ((function (g__$1){
return (function loom$graph$iter__48735(s__48736){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__48736__$1 = s__48736;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__48736__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var n = cljs.core.first(xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__48736__$1,n,xs__6277__auto__,temp__5720__auto__,g__$1){
return (function loom$graph$iter__48735_$_iter__48737(s__48738){
return (new cljs.core.LazySeq(null,((function (s__48736__$1,n,xs__6277__auto__,temp__5720__auto__,g__$1){
return (function (){
var s__48738__$1 = s__48738;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__48738__$1);
if(temp__5720__auto____$1){
var s__48738__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__48738__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__48738__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__48740 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__48739 = (0);
while(true){
if((i__48739 < size__4522__auto__)){
var nbr = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__48739);
cljs.core.chunk_append(b__48740,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null));

var G__49297 = (i__48739 + (1));
i__48739 = G__49297;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48740),loom$graph$iter__48735_$_iter__48737(cljs.core.chunk_rest(s__48738__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48740),null);
}
} else {
var nbr = cljs.core.first(s__48738__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null),loom$graph$iter__48735_$_iter__48737(cljs.core.rest(s__48738__$2)));
}
} else {
return null;
}
break;
}
});})(s__48736__$1,n,xs__6277__auto__,temp__5720__auto__,g__$1))
,null,null));
});})(s__48736__$1,n,xs__6277__auto__,temp__5720__auto__,g__$1))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g__$1,n)));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,loom$graph$iter__48735(cljs.core.rest(s__48736__$1)));
} else {
var G__49298 = cljs.core.rest(s__48736__$1);
s__48736__$1 = G__49298;
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
return loom.graph.call_or_return.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207).cljs$core$IFn$_invoke$arity$1(g__$1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([node], 0));
});

loom.graph.FlyGraph.prototype.loom$graph$Graph$out_degree$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.count(loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g__$1,node));
});

loom.graph.FlyGraph.prototype.loom$graph$Graph$out_edges$arity$2 = (function (g,node){
var g__$1 = this;
var iter__4523__auto__ = ((function (g__$1){
return (function loom$graph$iter__48754(s__48755){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__48755__$1 = s__48755;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__48755__$1);
if(temp__5720__auto__){
var s__48755__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48755__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__48755__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__48757 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__48756 = (0);
while(true){
if((i__48756 < size__4522__auto__)){
var n2 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__48756);
cljs.core.chunk_append(b__48757,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__49312 = (i__48756 + (1));
i__48756 = G__49312;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48757),loom$graph$iter__48754(cljs.core.chunk_rest(s__48755__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48757),null);
}
} else {
var n2 = cljs.core.first(s__48755__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__48754(cljs.core.rest(s__48755__$2)));
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
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(g__$1);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.not(new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(g__$1));
}
})())){
return loom.graph.call_or_return(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(g__$1));
} else {
return loom.alg_generic.bf_traverse(loom.graph.successors.cljs$core$IFn$_invoke$arity$1(g__$1),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(g__$1));
}
});

loom.graph.FlyDigraph.prototype.loom$graph$Graph$edges$arity$1 = (function (g){
var g__$1 = this;
if(cljs.core.truth_(new cljs.core.Keyword(null,"fedges","fedges",499673923).cljs$core$IFn$_invoke$arity$1(g__$1))){
return loom.graph.call_or_return(new cljs.core.Keyword(null,"fedges","fedges",499673923).cljs$core$IFn$_invoke$arity$1(g__$1));
} else {
var iter__4523__auto__ = ((function (g__$1){
return (function loom$graph$iter__48768(s__48769){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__48769__$1 = s__48769;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__48769__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var n = cljs.core.first(xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__48769__$1,n,xs__6277__auto__,temp__5720__auto__,g__$1){
return (function loom$graph$iter__48768_$_iter__48770(s__48771){
return (new cljs.core.LazySeq(null,((function (s__48769__$1,n,xs__6277__auto__,temp__5720__auto__,g__$1){
return (function (){
var s__48771__$1 = s__48771;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__48771__$1);
if(temp__5720__auto____$1){
var s__48771__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__48771__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__48771__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__48773 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__48772 = (0);
while(true){
if((i__48772 < size__4522__auto__)){
var nbr = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__48772);
cljs.core.chunk_append(b__48773,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null));

var G__49331 = (i__48772 + (1));
i__48772 = G__49331;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48773),loom$graph$iter__48768_$_iter__48770(cljs.core.chunk_rest(s__48771__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48773),null);
}
} else {
var nbr = cljs.core.first(s__48771__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null),loom$graph$iter__48768_$_iter__48770(cljs.core.rest(s__48771__$2)));
}
} else {
return null;
}
break;
}
});})(s__48769__$1,n,xs__6277__auto__,temp__5720__auto__,g__$1))
,null,null));
});})(s__48769__$1,n,xs__6277__auto__,temp__5720__auto__,g__$1))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g__$1,n)));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,loom$graph$iter__48768(cljs.core.rest(s__48769__$1)));
} else {
var G__49332 = cljs.core.rest(s__48769__$1);
s__48769__$1 = G__49332;
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
return loom.graph.call_or_return.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207).cljs$core$IFn$_invoke$arity$1(g__$1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([node], 0));
});

loom.graph.FlyDigraph.prototype.loom$graph$Graph$out_degree$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.count(loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g__$1,node));
});

loom.graph.FlyDigraph.prototype.loom$graph$Graph$out_edges$arity$2 = (function (g,node){
var g__$1 = this;
var iter__4523__auto__ = ((function (g__$1){
return (function loom$graph$iter__48784(s__48785){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__48785__$1 = s__48785;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__48785__$1);
if(temp__5720__auto__){
var s__48785__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48785__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__48785__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__48787 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__48786 = (0);
while(true){
if((i__48786 < size__4522__auto__)){
var n2 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__48786);
cljs.core.chunk_append(b__48787,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__49333 = (i__48786 + (1));
i__48786 = G__49333;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48787),loom$graph$iter__48784(cljs.core.chunk_rest(s__48785__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48787),null);
}
} else {
var n2 = cljs.core.first(s__48785__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__48784(cljs.core.rest(s__48785__$2)));
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
return loom.graph.call_or_return.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934).cljs$core$IFn$_invoke$arity$1(g__$1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([node], 0));
});

loom.graph.FlyDigraph.prototype.loom$graph$Digraph$in_degree$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.count(loom.graph.predecessors.cljs$core$IFn$_invoke$arity$2(g__$1,node));
});

loom.graph.FlyDigraph.prototype.loom$graph$Digraph$in_edges$arity$2 = (function (g,node){
var g__$1 = this;
var iter__4523__auto__ = ((function (g__$1){
return (function loom$graph$iter__48791(s__48792){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__48792__$1 = s__48792;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__48792__$1);
if(temp__5720__auto__){
var s__48792__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48792__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__48792__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__48794 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__48793 = (0);
while(true){
if((i__48793 < size__4522__auto__)){
var n2 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__48793);
cljs.core.chunk_append(b__48794,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,node], null));

var G__49338 = (i__48793 + (1));
i__48793 = G__49338;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48794),loom$graph$iter__48791(cljs.core.chunk_rest(s__48792__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48794),null);
}
} else {
var n2 = cljs.core.first(s__48792__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,node], null),loom$graph$iter__48791(cljs.core.rest(s__48792__$2)));
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
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(g__$1);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.not(new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(g__$1));
}
})())){
return loom.graph.call_or_return(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(g__$1));
} else {
return loom.alg_generic.bf_traverse(loom.graph.successors.cljs$core$IFn$_invoke$arity$1(g__$1),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(g__$1));
}
});

loom.graph.WeightedFlyGraph.prototype.loom$graph$Graph$edges$arity$1 = (function (g){
var g__$1 = this;
if(cljs.core.truth_(new cljs.core.Keyword(null,"fedges","fedges",499673923).cljs$core$IFn$_invoke$arity$1(g__$1))){
return loom.graph.call_or_return(new cljs.core.Keyword(null,"fedges","fedges",499673923).cljs$core$IFn$_invoke$arity$1(g__$1));
} else {
var iter__4523__auto__ = ((function (g__$1){
return (function loom$graph$iter__48797(s__48798){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__48798__$1 = s__48798;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__48798__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var n = cljs.core.first(xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__48798__$1,n,xs__6277__auto__,temp__5720__auto__,g__$1){
return (function loom$graph$iter__48797_$_iter__48799(s__48800){
return (new cljs.core.LazySeq(null,((function (s__48798__$1,n,xs__6277__auto__,temp__5720__auto__,g__$1){
return (function (){
var s__48800__$1 = s__48800;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__48800__$1);
if(temp__5720__auto____$1){
var s__48800__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__48800__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__48800__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__48802 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__48801 = (0);
while(true){
if((i__48801 < size__4522__auto__)){
var nbr = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__48801);
cljs.core.chunk_append(b__48802,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null));

var G__49345 = (i__48801 + (1));
i__48801 = G__49345;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48802),loom$graph$iter__48797_$_iter__48799(cljs.core.chunk_rest(s__48800__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48802),null);
}
} else {
var nbr = cljs.core.first(s__48800__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null),loom$graph$iter__48797_$_iter__48799(cljs.core.rest(s__48800__$2)));
}
} else {
return null;
}
break;
}
});})(s__48798__$1,n,xs__6277__auto__,temp__5720__auto__,g__$1))
,null,null));
});})(s__48798__$1,n,xs__6277__auto__,temp__5720__auto__,g__$1))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g__$1,n)));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,loom$graph$iter__48797(cljs.core.rest(s__48798__$1)));
} else {
var G__49346 = cljs.core.rest(s__48798__$1);
s__48798__$1 = G__49346;
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
return loom.graph.call_or_return.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207).cljs$core$IFn$_invoke$arity$1(g__$1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([node], 0));
});

loom.graph.WeightedFlyGraph.prototype.loom$graph$Graph$out_degree$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.count(loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g__$1,node));
});

loom.graph.WeightedFlyGraph.prototype.loom$graph$Graph$out_edges$arity$2 = (function (g,node){
var g__$1 = this;
var iter__4523__auto__ = ((function (g__$1){
return (function loom$graph$iter__48808(s__48809){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__48809__$1 = s__48809;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__48809__$1);
if(temp__5720__auto__){
var s__48809__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48809__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__48809__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__48811 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__48810 = (0);
while(true){
if((i__48810 < size__4522__auto__)){
var n2 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__48810);
cljs.core.chunk_append(b__48811,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__49356 = (i__48810 + (1));
i__48810 = G__49356;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48811),loom$graph$iter__48808(cljs.core.chunk_rest(s__48809__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48811),null);
}
} else {
var n2 = cljs.core.first(s__48809__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__48808(cljs.core.rest(s__48809__$2)));
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
return loom.graph.call_or_return.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"fweight","fweight",1299924141).cljs$core$IFn$_invoke$arity$1(g__$1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([n1,n2], 0));
});
loom.graph.WeightedFlyDigraph.prototype.loom$graph$Graph$ = cljs.core.PROTOCOL_SENTINEL;

loom.graph.WeightedFlyDigraph.prototype.loom$graph$Graph$nodes$arity$1 = (function (g){
var g__$1 = this;
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(g__$1);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.not(new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(g__$1));
}
})())){
return loom.graph.call_or_return(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(g__$1));
} else {
return loom.alg_generic.bf_traverse(loom.graph.successors.cljs$core$IFn$_invoke$arity$1(g__$1),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(g__$1));
}
});

loom.graph.WeightedFlyDigraph.prototype.loom$graph$Graph$edges$arity$1 = (function (g){
var g__$1 = this;
if(cljs.core.truth_(new cljs.core.Keyword(null,"fedges","fedges",499673923).cljs$core$IFn$_invoke$arity$1(g__$1))){
return loom.graph.call_or_return(new cljs.core.Keyword(null,"fedges","fedges",499673923).cljs$core$IFn$_invoke$arity$1(g__$1));
} else {
var iter__4523__auto__ = ((function (g__$1){
return (function loom$graph$iter__48830(s__48831){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__48831__$1 = s__48831;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__48831__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var n = cljs.core.first(xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__48831__$1,n,xs__6277__auto__,temp__5720__auto__,g__$1){
return (function loom$graph$iter__48830_$_iter__48832(s__48833){
return (new cljs.core.LazySeq(null,((function (s__48831__$1,n,xs__6277__auto__,temp__5720__auto__,g__$1){
return (function (){
var s__48833__$1 = s__48833;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__48833__$1);
if(temp__5720__auto____$1){
var s__48833__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__48833__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__48833__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__48835 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__48834 = (0);
while(true){
if((i__48834 < size__4522__auto__)){
var nbr = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__48834);
cljs.core.chunk_append(b__48835,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null));

var G__49369 = (i__48834 + (1));
i__48834 = G__49369;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48835),loom$graph$iter__48830_$_iter__48832(cljs.core.chunk_rest(s__48833__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48835),null);
}
} else {
var nbr = cljs.core.first(s__48833__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null),loom$graph$iter__48830_$_iter__48832(cljs.core.rest(s__48833__$2)));
}
} else {
return null;
}
break;
}
});})(s__48831__$1,n,xs__6277__auto__,temp__5720__auto__,g__$1))
,null,null));
});})(s__48831__$1,n,xs__6277__auto__,temp__5720__auto__,g__$1))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g__$1,n)));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,loom$graph$iter__48830(cljs.core.rest(s__48831__$1)));
} else {
var G__49370 = cljs.core.rest(s__48831__$1);
s__48831__$1 = G__49370;
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
return loom.graph.call_or_return.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207).cljs$core$IFn$_invoke$arity$1(g__$1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([node], 0));
});

loom.graph.WeightedFlyDigraph.prototype.loom$graph$Graph$out_degree$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.count(loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g__$1,node));
});

loom.graph.WeightedFlyDigraph.prototype.loom$graph$Graph$out_edges$arity$2 = (function (g,node){
var g__$1 = this;
var iter__4523__auto__ = ((function (g__$1){
return (function loom$graph$iter__48842(s__48843){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__48843__$1 = s__48843;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__48843__$1);
if(temp__5720__auto__){
var s__48843__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48843__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__48843__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__48845 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__48844 = (0);
while(true){
if((i__48844 < size__4522__auto__)){
var n2 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__48844);
cljs.core.chunk_append(b__48845,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__49372 = (i__48844 + (1));
i__48844 = G__49372;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48845),loom$graph$iter__48842(cljs.core.chunk_rest(s__48843__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48845),null);
}
} else {
var n2 = cljs.core.first(s__48843__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__48842(cljs.core.rest(s__48843__$2)));
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
return loom.graph.call_or_return.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934).cljs$core$IFn$_invoke$arity$1(g__$1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([node], 0));
});

loom.graph.WeightedFlyDigraph.prototype.loom$graph$Digraph$in_degree$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.count(loom.graph.predecessors.cljs$core$IFn$_invoke$arity$2(g__$1,node));
});

loom.graph.WeightedFlyDigraph.prototype.loom$graph$Digraph$in_edges$arity$2 = (function (g,node){
var g__$1 = this;
var iter__4523__auto__ = ((function (g__$1){
return (function loom$graph$iter__48852(s__48853){
return (new cljs.core.LazySeq(null,((function (g__$1){
return (function (){
var s__48853__$1 = s__48853;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__48853__$1);
if(temp__5720__auto__){
var s__48853__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48853__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__48853__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__48855 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__48854 = (0);
while(true){
if((i__48854 < size__4522__auto__)){
var n2 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__48854);
cljs.core.chunk_append(b__48855,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,node], null));

var G__49375 = (i__48854 + (1));
i__48854 = G__49375;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48855),loom$graph$iter__48852(cljs.core.chunk_rest(s__48853__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48855),null);
}
} else {
var n2 = cljs.core.first(s__48853__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,node], null),loom$graph$iter__48852(cljs.core.rest(s__48853__$2)));
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
return loom.graph.call_or_return.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"fweight","fweight",1299924141).cljs$core$IFn$_invoke$arity$1(g__$1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([n1,n2], 0));
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
var len__4730__auto___49382 = arguments.length;
var i__4731__auto___49383 = (0);
while(true){
if((i__4731__auto___49383 < len__4730__auto___49382)){
args__4736__auto__.push((arguments[i__4731__auto___49383]));

var G__49386 = (i__4731__auto___49383 + (1));
i__4731__auto___49383 = G__49386;
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
loom.graph.add_path.cljs$lang$applyTo = (function (seq48864){
var G__48865 = cljs.core.first(seq48864);
var seq48864__$1 = cljs.core.next(seq48864);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48865,seq48864__$1);
});

/**
 * Adds a cycle of edges connecting the given nodes in order
 */
loom.graph.add_cycle = (function loom$graph$add_cycle(var_args){
var args__4736__auto__ = [];
var len__4730__auto___49391 = arguments.length;
var i__4731__auto___49392 = (0);
while(true){
if((i__4731__auto___49392 < len__4730__auto___49391)){
args__4736__auto__.push((arguments[i__4731__auto___49392]));

var G__49393 = (i__4731__auto___49392 + (1));
i__4731__auto___49392 = G__49393;
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
loom.graph.add_cycle.cljs$lang$applyTo = (function (seq48888){
var G__48889 = cljs.core.first(seq48888);
var seq48888__$1 = cljs.core.next(seq48888);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48889,seq48888__$1);
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
var len__4730__auto___49395 = arguments.length;
var i__4731__auto___49396 = (0);
while(true){
if((i__4731__auto___49396 < len__4730__auto___49395)){
args__4736__auto__.push((arguments[i__4731__auto___49396]));

var G__49397 = (i__4731__auto___49396 + (1));
i__4731__auto___49396 = G__49397;
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
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(loom.graph.add_edges,loom.graph.add_nodes_STAR_(g__$1,loom.graph.nodes(init)),(function (){var iter__4523__auto__ = (function loom$graph$build_$_iter__48973(s__48974){
return (new cljs.core.LazySeq(null,(function (){
var s__48974__$1 = s__48974;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__48974__$1);
if(temp__5720__auto__){
var s__48974__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__48974__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__48974__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__48976 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__48975 = (0);
while(true){
if((i__48975 < size__4522__auto__)){
var vec__48982 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__48975);
var n1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48982,(0),null);
var n2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48982,(1),null);
cljs.core.chunk_append(b__48976,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [n1,n2,loom.graph.weight.cljs$core$IFn$_invoke$arity$3(init,n1,n2)], null));

var G__49399 = (i__48975 + (1));
i__48975 = G__49399;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__48976),loom$graph$build_$_iter__48973(cljs.core.chunk_rest(s__48974__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__48976),null);
}
} else {
var vec__48991 = cljs.core.first(s__48974__$2);
var n1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48991,(0),null);
var n2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48991,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [n1,n2,loom.graph.weight.cljs$core$IFn$_invoke$arity$3(init,n1,n2)], null),loom$graph$build_$_iter__48973(cljs.core.rest(s__48974__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(loom.graph.edges(init));
})()),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(g__$1),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(init)], 0)));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(loom.graph.add_edges_STAR_(loom.graph.add_nodes_STAR_(g__$1,loom.graph.nodes(init)),loom.graph.edges(init)),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(g__$1),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(init)], 0)));
}
} else {
if(cljs.core.map_QMARK_(init)){
var es = ((cljs.core.map_QMARK_(cljs.core.val(cljs.core.first(init))))?(function (){var iter__4523__auto__ = (function loom$graph$build_$_iter__48995(s__48996){
return (new cljs.core.LazySeq(null,(function (){
var s__48996__$1 = s__48996;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__48996__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var vec__49003 = cljs.core.first(xs__6277__auto__);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49003,(0),null);
var nbrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49003,(1),null);
var iterys__4519__auto__ = ((function (s__48996__$1,vec__49003,n,nbrs,xs__6277__auto__,temp__5720__auto__){
return (function loom$graph$build_$_iter__48995_$_iter__48997(s__48998){
return (new cljs.core.LazySeq(null,((function (s__48996__$1,vec__49003,n,nbrs,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__48998__$1 = s__48998;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__48998__$1);
if(temp__5720__auto____$1){
var s__48998__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__48998__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__48998__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__49000 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__48999 = (0);
while(true){
if((i__48999 < size__4522__auto__)){
var vec__49008 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__48999);
var nbr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49008,(0),null);
var wt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49008,(1),null);
cljs.core.chunk_append(b__49000,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr,wt], null));

var G__49401 = (i__48999 + (1));
i__48999 = G__49401;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49000),loom$graph$build_$_iter__48995_$_iter__48997(cljs.core.chunk_rest(s__48998__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49000),null);
}
} else {
var vec__49011 = cljs.core.first(s__48998__$2);
var nbr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49011,(0),null);
var wt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49011,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr,wt], null),loom$graph$build_$_iter__48995_$_iter__48997(cljs.core.rest(s__48998__$2)));
}
} else {
return null;
}
break;
}
});})(s__48996__$1,vec__49003,n,nbrs,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__48996__$1,vec__49003,n,nbrs,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(nbrs));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,loom$graph$build_$_iter__48995(cljs.core.rest(s__48996__$1)));
} else {
var G__49403 = cljs.core.rest(s__48996__$1);
s__48996__$1 = G__49403;
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
})():(function (){var iter__4523__auto__ = (function loom$graph$build_$_iter__49015(s__49016){
return (new cljs.core.LazySeq(null,(function (){
var s__49016__$1 = s__49016;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__49016__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var vec__49022 = cljs.core.first(xs__6277__auto__);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49022,(0),null);
var nbrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49022,(1),null);
var iterys__4519__auto__ = ((function (s__49016__$1,vec__49022,n,nbrs,xs__6277__auto__,temp__5720__auto__){
return (function loom$graph$build_$_iter__49015_$_iter__49017(s__49018){
return (new cljs.core.LazySeq(null,((function (s__49016__$1,vec__49022,n,nbrs,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__49018__$1 = s__49018;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__49018__$1);
if(temp__5720__auto____$1){
var s__49018__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__49018__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__49018__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__49020 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__49019 = (0);
while(true){
if((i__49019 < size__4522__auto__)){
var nbr = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__49019);
cljs.core.chunk_append(b__49020,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null));

var G__49407 = (i__49019 + (1));
i__49019 = G__49407;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49020),loom$graph$build_$_iter__49015_$_iter__49017(cljs.core.chunk_rest(s__49018__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49020),null);
}
} else {
var nbr = cljs.core.first(s__49018__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null),loom$graph$build_$_iter__49015_$_iter__49017(cljs.core.rest(s__49018__$2)));
}
} else {
return null;
}
break;
}
});})(s__49016__$1,vec__49022,n,nbrs,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__49016__$1,vec__49022,n,nbrs,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(nbrs));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,loom$graph$build_$_iter__49015(cljs.core.rest(s__49016__$1)));
} else {
var G__49412 = cljs.core.rest(s__49016__$1);
s__49016__$1 = G__49412;
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
loom.graph.build_graph.cljs$lang$applyTo = (function (seq48918){
var G__48920 = cljs.core.first(seq48918);
var seq48918__$1 = cljs.core.next(seq48918);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48920,seq48918__$1);
});

/**
 * Creates an unweighted, undirected graph. inits can be edges, adjacency maps,
 *   or graphs
 */
loom.graph.graph = (function loom$graph$graph(var_args){
var args__4736__auto__ = [];
var len__4730__auto___49413 = arguments.length;
var i__4731__auto___49414 = (0);
while(true){
if((i__4731__auto___49414 < len__4730__auto___49413)){
args__4736__auto__.push((arguments[i__4731__auto___49414]));

var G__49415 = (i__4731__auto___49414 + (1));
i__4731__auto___49414 = G__49415;
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
loom.graph.graph.cljs$lang$applyTo = (function (seq49028){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49028));
});

/**
 * Creates an unweighted, directed graph. inits can be edges, adjacency maps,
 *   or graphs
 */
loom.graph.digraph = (function loom$graph$digraph(var_args){
var args__4736__auto__ = [];
var len__4730__auto___49420 = arguments.length;
var i__4731__auto___49421 = (0);
while(true){
if((i__4731__auto___49421 < len__4730__auto___49420)){
args__4736__auto__.push((arguments[i__4731__auto___49421]));

var G__49422 = (i__4731__auto___49421 + (1));
i__4731__auto___49421 = G__49422;
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
loom.graph.digraph.cljs$lang$applyTo = (function (seq49034){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49034));
});

/**
 * Creates an weighted, undirected graph. inits can be edges, adjacency maps,
 *   or graphs
 */
loom.graph.weighted_graph = (function loom$graph$weighted_graph(var_args){
var args__4736__auto__ = [];
var len__4730__auto___49423 = arguments.length;
var i__4731__auto___49424 = (0);
while(true){
if((i__4731__auto___49424 < len__4730__auto___49423)){
args__4736__auto__.push((arguments[i__4731__auto___49424]));

var G__49425 = (i__4731__auto___49424 + (1));
i__4731__auto___49424 = G__49425;
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
loom.graph.weighted_graph.cljs$lang$applyTo = (function (seq49038){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49038));
});

/**
 * Creates an weighted, directed graph. inits can be edges, adjacency maps,
 *   or graphs
 */
loom.graph.weighted_digraph = (function loom$graph$weighted_digraph(var_args){
var args__4736__auto__ = [];
var len__4730__auto___49427 = arguments.length;
var i__4731__auto___49428 = (0);
while(true){
if((i__4731__auto___49428 < len__4730__auto___49427)){
args__4736__auto__.push((arguments[i__4731__auto___49428]));

var G__49429 = (i__4731__auto___49428 + (1));
i__4731__auto___49428 = G__49429;
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
loom.graph.weighted_digraph.cljs$lang$applyTo = (function (seq49041){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49041));
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
var len__4730__auto___49432 = arguments.length;
var i__4731__auto___49434 = (0);
while(true){
if((i__4731__auto___49434 < len__4730__auto___49432)){
args__4736__auto__.push((arguments[i__4731__auto___49434]));

var G__49435 = (i__4731__auto___49434 + (1));
i__4731__auto___49434 = G__49435;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return loom.graph.fly_graph.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

loom.graph.fly_graph.cljs$core$IFn$_invoke$arity$variadic = (function (p__49050){
var map__49051 = p__49050;
var map__49051__$1 = (((((!((map__49051 == null))))?(((((map__49051.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49051.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49051):map__49051);
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49051__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var edges = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49051__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
var successors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49051__$1,new cljs.core.Keyword(null,"successors","successors",-1239296414));
var predecessors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49051__$1,new cljs.core.Keyword(null,"predecessors","predecessors",229913357));
var weight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49051__$1,new cljs.core.Keyword(null,"weight","weight",-1262796205));
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49051__$1,new cljs.core.Keyword(null,"start","start",-355208981));
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
loom.graph.fly_graph.cljs$lang$applyTo = (function (seq49045){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49045));
});


//# sourceMappingURL=loom.graph.js.map
