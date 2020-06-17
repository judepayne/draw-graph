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
var x__4487__auto__ = (((g == null))?null:g);
var m__4488__auto__ = (loom.graph.nodes[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(g) : m__4488__auto__.call(null,g));
} else {
var m__4485__auto__ = (loom.graph.nodes["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(g) : m__4485__auto__.call(null,g));
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
var x__4487__auto__ = (((g == null))?null:g);
var m__4488__auto__ = (loom.graph.edges[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(g) : m__4488__auto__.call(null,g));
} else {
var m__4485__auto__ = (loom.graph.edges["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(g) : m__4485__auto__.call(null,g));
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
var x__4487__auto__ = (((g == null))?null:g);
var m__4488__auto__ = (loom.graph.has_node_QMARK_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(g,node) : m__4488__auto__.call(null,g,node));
} else {
var m__4485__auto__ = (loom.graph.has_node_QMARK_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(g,node) : m__4485__auto__.call(null,g,node));
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
var x__4487__auto__ = (((g == null))?null:g);
var m__4488__auto__ = (loom.graph.has_edge_QMARK_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(g,n1,n2) : m__4488__auto__.call(null,g,n1,n2));
} else {
var m__4485__auto__ = (loom.graph.has_edge_QMARK_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(g,n1,n2) : m__4485__auto__.call(null,g,n1,n2));
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
var x__4487__auto__ = (((g == null))?null:g);
var m__4488__auto__ = (loom.graph.successors_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(g,node) : m__4488__auto__.call(null,g,node));
} else {
var m__4485__auto__ = (loom.graph.successors_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(g,node) : m__4485__auto__.call(null,g,node));
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
var x__4487__auto__ = (((g == null))?null:g);
var m__4488__auto__ = (loom.graph.out_degree[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(g,node) : m__4488__auto__.call(null,g,node));
} else {
var m__4485__auto__ = (loom.graph.out_degree["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(g,node) : m__4485__auto__.call(null,g,node));
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
var x__4487__auto__ = (((g == null))?null:g);
var m__4488__auto__ = (loom.graph.out_edges[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(g,node) : m__4488__auto__.call(null,g,node));
} else {
var m__4485__auto__ = (loom.graph.out_edges["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(g,node) : m__4485__auto__.call(null,g,node));
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
var x__4487__auto__ = (((g == null))?null:g);
var m__4488__auto__ = (loom.graph.predecessors_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(g,node) : m__4488__auto__.call(null,g,node));
} else {
var m__4485__auto__ = (loom.graph.predecessors_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(g,node) : m__4485__auto__.call(null,g,node));
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
var x__4487__auto__ = (((g == null))?null:g);
var m__4488__auto__ = (loom.graph.in_degree[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(g,node) : m__4488__auto__.call(null,g,node));
} else {
var m__4485__auto__ = (loom.graph.in_degree["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(g,node) : m__4485__auto__.call(null,g,node));
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
var x__4487__auto__ = (((g == null))?null:g);
var m__4488__auto__ = (loom.graph.in_edges[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(g,node) : m__4488__auto__.call(null,g,node));
} else {
var m__4485__auto__ = (loom.graph.in_edges["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(g,node) : m__4485__auto__.call(null,g,node));
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
var x__4487__auto__ = (((g == null))?null:g);
var m__4488__auto__ = (loom.graph.transpose[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(g) : m__4488__auto__.call(null,g));
} else {
var m__4485__auto__ = (loom.graph.transpose["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(g) : m__4485__auto__.call(null,g));
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
var G__52214 = arguments.length;
switch (G__52214) {
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

(loom.graph.weight_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (g,e){
if((((!((g == null)))) && ((!((g.loom$graph$WeightedGraph$weight_STAR_$arity$2 == null)))))){
return g.loom$graph$WeightedGraph$weight_STAR_$arity$2(g,e);
} else {
var x__4487__auto__ = (((g == null))?null:g);
var m__4488__auto__ = (loom.graph.weight_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(g,e) : m__4488__auto__.call(null,g,e));
} else {
var m__4485__auto__ = (loom.graph.weight_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(g,e) : m__4485__auto__.call(null,g,e));
} else {
throw cljs.core.missing_protocol("WeightedGraph.weight*",g);
}
}
}
}));

(loom.graph.weight_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (g,n1,n2){
if((((!((g == null)))) && ((!((g.loom$graph$WeightedGraph$weight_STAR_$arity$3 == null)))))){
return g.loom$graph$WeightedGraph$weight_STAR_$arity$3(g,n1,n2);
} else {
var x__4487__auto__ = (((g == null))?null:g);
var m__4488__auto__ = (loom.graph.weight_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(g,n1,n2) : m__4488__auto__.call(null,g,n1,n2));
} else {
var m__4485__auto__ = (loom.graph.weight_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(g,n1,n2) : m__4485__auto__.call(null,g,n1,n2));
} else {
throw cljs.core.missing_protocol("WeightedGraph.weight*",g);
}
}
}
}));

(loom.graph.weight_STAR_.cljs$lang$maxFixedArity = 3);



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
var x__4487__auto__ = (((g == null))?null:g);
var m__4488__auto__ = (loom.graph.add_nodes_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(g,nodes) : m__4488__auto__.call(null,g,nodes));
} else {
var m__4485__auto__ = (loom.graph.add_nodes_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(g,nodes) : m__4485__auto__.call(null,g,nodes));
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
var x__4487__auto__ = (((g == null))?null:g);
var m__4488__auto__ = (loom.graph.add_edges_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(g,edges) : m__4488__auto__.call(null,g,edges));
} else {
var m__4485__auto__ = (loom.graph.add_edges_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(g,edges) : m__4485__auto__.call(null,g,edges));
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
var x__4487__auto__ = (((g == null))?null:g);
var m__4488__auto__ = (loom.graph.remove_nodes_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(g,nodes) : m__4488__auto__.call(null,g,nodes));
} else {
var m__4485__auto__ = (loom.graph.remove_nodes_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(g,nodes) : m__4485__auto__.call(null,g,nodes));
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
var x__4487__auto__ = (((g == null))?null:g);
var m__4488__auto__ = (loom.graph.remove_edges_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(g,edges) : m__4488__auto__.call(null,g,edges));
} else {
var m__4485__auto__ = (loom.graph.remove_edges_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(g,edges) : m__4485__auto__.call(null,g,edges));
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
var x__4487__auto__ = (((g == null))?null:g);
var m__4488__auto__ = (loom.graph.remove_all[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(g) : m__4488__auto__.call(null,g));
} else {
var m__4485__auto__ = (loom.graph.remove_all["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(g) : m__4485__auto__.call(null,g));
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
var x__4487__auto__ = (((edge == null))?null:edge);
var m__4488__auto__ = (loom.graph.src[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(edge) : m__4488__auto__.call(null,edge));
} else {
var m__4485__auto__ = (loom.graph.src["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(edge) : m__4485__auto__.call(null,edge));
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
var x__4487__auto__ = (((edge == null))?null:edge);
var m__4488__auto__ = (loom.graph.dest[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(edge) : m__4488__auto__.call(null,edge));
} else {
var m__4485__auto__ = (loom.graph.dest["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(edge) : m__4485__auto__.call(null,edge));
} else {
throw cljs.core.missing_protocol("Edge.dest",edge);
}
}
}
});

(cljs.core.PersistentVector.prototype.loom$graph$Edge$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.loom$graph$Edge$src$arity$1 = (function (edge){
var edge__$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(edge__$1,(0));
}));

(cljs.core.PersistentVector.prototype.loom$graph$Edge$dest$arity$1 = (function (edge){
var edge__$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(edge__$1,(1));
}));
(cljs.core.PersistentArrayMap.prototype.loom$graph$Edge$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.loom$graph$Edge$src$arity$1 = (function (edge){
var edge__$1 = this;
return new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(edge__$1);
}));

(cljs.core.PersistentArrayMap.prototype.loom$graph$Edge$dest$arity$1 = (function (edge){
var edge__$1 = this;
return new cljs.core.Keyword(null,"dest","dest",-34569477).cljs$core$IFn$_invoke$arity$1(edge__$1);
}));

(cljs.core.PersistentHashMap.prototype.loom$graph$Edge$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashMap.prototype.loom$graph$Edge$src$arity$1 = (function (edge){
var edge__$1 = this;
return new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(edge__$1);
}));

(cljs.core.PersistentHashMap.prototype.loom$graph$Edge$dest$arity$1 = (function (edge){
var edge__$1 = this;
return new cljs.core.Keyword(null,"dest","dest",-34569477).cljs$core$IFn$_invoke$arity$1(edge__$1);
}));

(cljs.core.PersistentTreeMap.prototype.loom$graph$Edge$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentTreeMap.prototype.loom$graph$Edge$src$arity$1 = (function (edge){
var edge__$1 = this;
return new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(edge__$1);
}));

(cljs.core.PersistentTreeMap.prototype.loom$graph$Edge$dest$arity$1 = (function (edge){
var edge__$1 = this;
return new cljs.core.Keyword(null,"dest","dest",-34569477).cljs$core$IFn$_invoke$arity$1(edge__$1);
}));
/**
 * Returns direct successors of node
 */
loom.graph.successors = (function loom$graph$successors(var_args){
var G__52282 = arguments.length;
switch (G__52282) {
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

(loom.graph.successors.cljs$core$IFn$_invoke$arity$1 = (function (g){
return (function (p1__52272_SHARP_){
return loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g,p1__52272_SHARP_);
});
}));

(loom.graph.successors.cljs$core$IFn$_invoke$arity$2 = (function (g,node){
return loom.graph.successors_STAR_(g,node);
}));

(loom.graph.successors.cljs$lang$maxFixedArity = 2);

/**
 * Returns direct predecessors of node
 */
loom.graph.predecessors = (function loom$graph$predecessors(var_args){
var G__52319 = arguments.length;
switch (G__52319) {
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

(loom.graph.predecessors.cljs$core$IFn$_invoke$arity$1 = (function (g){
return (function (p1__52312_SHARP_){
return loom.graph.predecessors.cljs$core$IFn$_invoke$arity$2(g,p1__52312_SHARP_);
});
}));

(loom.graph.predecessors.cljs$core$IFn$_invoke$arity$2 = (function (g,node){
return loom.graph.predecessors_STAR_(g,node);
}));

(loom.graph.predecessors.cljs$lang$maxFixedArity = 2);

/**
 * Returns the weight of edge e or edge [n1 n2]
 */
loom.graph.weight = (function loom$graph$weight(var_args){
var G__52340 = arguments.length;
switch (G__52340) {
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

(loom.graph.weight.cljs$core$IFn$_invoke$arity$1 = (function (g){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(loom.graph.weight,g);
}));

(loom.graph.weight.cljs$core$IFn$_invoke$arity$2 = (function (g,e){
return loom.graph.weight_STAR_(g,loom.graph.src(e),loom.graph.dest(e));
}));

(loom.graph.weight.cljs$core$IFn$_invoke$arity$3 = (function (g,n1,n2){
return loom.graph.weight_STAR_(g,n1,n2);
}));

(loom.graph.weight.cljs$lang$maxFixedArity = 3);

/**
 * Adds nodes to graph g. Nodes can be any type of object
 */
loom.graph.add_nodes = (function loom$graph$add_nodes(var_args){
var args__4795__auto__ = [];
var len__4789__auto___53295 = arguments.length;
var i__4790__auto___53296 = (0);
while(true){
if((i__4790__auto___53296 < len__4789__auto___53295)){
args__4795__auto__.push((arguments[i__4790__auto___53296]));

var G__53297 = (i__4790__auto___53296 + (1));
i__4790__auto___53296 = G__53297;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return loom.graph.add_nodes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(loom.graph.add_nodes.cljs$core$IFn$_invoke$arity$variadic = (function (g,nodes){
return loom.graph.add_nodes_STAR_(g,nodes);
}));

(loom.graph.add_nodes.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(loom.graph.add_nodes.cljs$lang$applyTo = (function (seq52366){
var G__52367 = cljs.core.first(seq52366);
var seq52366__$1 = cljs.core.next(seq52366);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52367,seq52366__$1);
}));

/**
 * Adds edges to graph g. For unweighted graphs, edges take the form [n1 n2].
 *   For weighted graphs, edges take the form [n1 n2 weight] or [n1 n2], the
 *   latter defaulting to a weight of 1
 */
loom.graph.add_edges = (function loom$graph$add_edges(var_args){
var args__4795__auto__ = [];
var len__4789__auto___53301 = arguments.length;
var i__4790__auto___53302 = (0);
while(true){
if((i__4790__auto___53302 < len__4789__auto___53301)){
args__4795__auto__.push((arguments[i__4790__auto___53302]));

var G__53303 = (i__4790__auto___53302 + (1));
i__4790__auto___53302 = G__53303;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return loom.graph.add_edges.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(loom.graph.add_edges.cljs$core$IFn$_invoke$arity$variadic = (function (g,edges){
return loom.graph.add_edges_STAR_(g,edges);
}));

(loom.graph.add_edges.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(loom.graph.add_edges.cljs$lang$applyTo = (function (seq52381){
var G__52382 = cljs.core.first(seq52381);
var seq52381__$1 = cljs.core.next(seq52381);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52382,seq52381__$1);
}));

/**
 * Removes nodes from graph g
 */
loom.graph.remove_nodes = (function loom$graph$remove_nodes(var_args){
var args__4795__auto__ = [];
var len__4789__auto___53308 = arguments.length;
var i__4790__auto___53309 = (0);
while(true){
if((i__4790__auto___53309 < len__4789__auto___53308)){
args__4795__auto__.push((arguments[i__4790__auto___53309]));

var G__53310 = (i__4790__auto___53309 + (1));
i__4790__auto___53309 = G__53310;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return loom.graph.remove_nodes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(loom.graph.remove_nodes.cljs$core$IFn$_invoke$arity$variadic = (function (g,nodes){
return loom.graph.remove_nodes_STAR_(g,nodes);
}));

(loom.graph.remove_nodes.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(loom.graph.remove_nodes.cljs$lang$applyTo = (function (seq52383){
var G__52384 = cljs.core.first(seq52383);
var seq52383__$1 = cljs.core.next(seq52383);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52384,seq52383__$1);
}));

/**
 * Removes edges from graph g. Do not include weights
 */
loom.graph.remove_edges = (function loom$graph$remove_edges(var_args){
var args__4795__auto__ = [];
var len__4789__auto___53316 = arguments.length;
var i__4790__auto___53317 = (0);
while(true){
if((i__4790__auto___53317 < len__4789__auto___53316)){
args__4795__auto__.push((arguments[i__4790__auto___53317]));

var G__53318 = (i__4790__auto___53317 + (1));
i__4790__auto___53317 = G__53318;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return loom.graph.remove_edges.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(loom.graph.remove_edges.cljs$core$IFn$_invoke$arity$variadic = (function (g,edges){
return loom.graph.remove_edges_STAR_(g,edges);
}));

(loom.graph.remove_edges.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(loom.graph.remove_edges.cljs$lang$applyTo = (function (seq52385){
var G__52386 = cljs.core.first(seq52385);
var seq52385__$1 = cljs.core.next(seq52385);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52386,seq52385__$1);
}));


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
(loom.graph.BasicEditableGraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(loom.graph.BasicEditableGraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k52388,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__52395 = k52388;
var G__52395__$1 = (((G__52395 instanceof cljs.core.Keyword))?G__52395.fqn:null);
switch (G__52395__$1) {
case "nodeset":
return self__.nodeset;

break;
case "adj":
return self__.adj;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k52388,else__4442__auto__);

}
}));

(loom.graph.BasicEditableGraph.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__52396){
var vec__52397 = p__52396;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52397,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52397,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(loom.graph.BasicEditableGraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#loom.graph.BasicEditableGraph{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj],null))], null),self__.__extmap));
}));

(loom.graph.BasicEditableGraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__52387){
var self__ = this;
var G__52387__$1 = this;
return (new cljs.core.RecordIter((0),G__52387__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(loom.graph.BasicEditableGraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(loom.graph.BasicEditableGraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new loom.graph.BasicEditableGraph(self__.nodeset,self__.adj,self__.__meta,self__.__extmap,self__.__hash));
}));

(loom.graph.BasicEditableGraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(loom.graph.BasicEditableGraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (coll__4436__auto__){
return (446662859 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
})(this__4435__auto____$1);
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(loom.graph.BasicEditableGraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this52389,other52390){
var self__ = this;
var this52389__$1 = this;
return (((!((other52390 == null)))) && ((this52389__$1.constructor === other52390.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52389__$1.nodeset,other52390.nodeset)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52389__$1.adj,other52390.adj)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52389__$1.__extmap,other52390.__extmap)));
}));

(loom.graph.BasicEditableGraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),null,new cljs.core.Keyword(null,"adj","adj",-1344630196),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new loom.graph.BasicEditableGraph(self__.nodeset,self__.adj,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(loom.graph.BasicEditableGraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__52387){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__52400 = cljs.core.keyword_identical_QMARK_;
var expr__52401 = k__4447__auto__;
if(cljs.core.truth_((pred__52400.cljs$core$IFn$_invoke$arity$2 ? pred__52400.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nodeset","nodeset",695991339),expr__52401) : pred__52400.call(null,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),expr__52401)))){
return (new loom.graph.BasicEditableGraph(G__52387,self__.adj,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52400.cljs$core$IFn$_invoke$arity$2 ? pred__52400.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"adj","adj",-1344630196),expr__52401) : pred__52400.call(null,new cljs.core.Keyword(null,"adj","adj",-1344630196),expr__52401)))){
return (new loom.graph.BasicEditableGraph(self__.nodeset,G__52387,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.BasicEditableGraph(self__.nodeset,self__.adj,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__52387),null));
}
}
}));

(loom.graph.BasicEditableGraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj,null))], null),self__.__extmap));
}));

(loom.graph.BasicEditableGraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__52387){
var self__ = this;
var this__4438__auto____$1 = this;
return (new loom.graph.BasicEditableGraph(self__.nodeset,self__.adj,G__52387,self__.__extmap,self__.__hash));
}));

(loom.graph.BasicEditableGraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4445__auto__,(0)),cljs.core._nth(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(loom.graph.BasicEditableGraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nodeset","nodeset",-1958444430,null),new cljs.core.Symbol(null,"adj","adj",295901331,null)], null);
}));

(loom.graph.BasicEditableGraph.cljs$lang$type = true);

(loom.graph.BasicEditableGraph.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"loom.graph/BasicEditableGraph",null,(1),null));
}));

(loom.graph.BasicEditableGraph.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"loom.graph/BasicEditableGraph");
}));

/**
 * Positional factory function for loom.graph/BasicEditableGraph.
 */
loom.graph.__GT_BasicEditableGraph = (function loom$graph$__GT_BasicEditableGraph(nodeset,adj){
return (new loom.graph.BasicEditableGraph(nodeset,adj,null,null,null));
});

/**
 * Factory function for loom.graph/BasicEditableGraph, taking a map of keywords to field values.
 */
loom.graph.map__GT_BasicEditableGraph = (function loom$graph$map__GT_BasicEditableGraph(G__52391){
var extmap__4478__auto__ = (function (){var G__52403 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__52391,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"adj","adj",-1344630196)], 0));
if(cljs.core.record_QMARK_(G__52391)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__52403);
} else {
return G__52403;
}
})();
return (new loom.graph.BasicEditableGraph(new cljs.core.Keyword(null,"nodeset","nodeset",695991339).cljs$core$IFn$_invoke$arity$1(G__52391),new cljs.core.Keyword(null,"adj","adj",-1344630196).cljs$core$IFn$_invoke$arity$1(G__52391),null,cljs.core.not_empty(extmap__4478__auto__),null));
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
(loom.graph.BasicEditableDigraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(loom.graph.BasicEditableDigraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k52405,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__52409 = k52405;
var G__52409__$1 = (((G__52409 instanceof cljs.core.Keyword))?G__52409.fqn:null);
switch (G__52409__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k52405,else__4442__auto__);

}
}));

(loom.graph.BasicEditableDigraph.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__52410){
var vec__52411 = p__52410;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52411,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52411,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(loom.graph.BasicEditableDigraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#loom.graph.BasicEditableDigraph{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$],null))], null),self__.__extmap));
}));

(loom.graph.BasicEditableDigraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__52404){
var self__ = this;
var G__52404__$1 = this;
return (new cljs.core.RecordIter((0),G__52404__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196),new cljs.core.Keyword(null,"in","in",-1531184865)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(loom.graph.BasicEditableDigraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(loom.graph.BasicEditableDigraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new loom.graph.BasicEditableDigraph(self__.nodeset,self__.adj,self__.in$,self__.__meta,self__.__extmap,self__.__hash));
}));

(loom.graph.BasicEditableDigraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(loom.graph.BasicEditableDigraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (coll__4436__auto__){
return (324724442 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
})(this__4435__auto____$1);
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(loom.graph.BasicEditableDigraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this52406,other52407){
var self__ = this;
var this52406__$1 = this;
return (((!((other52407 == null)))) && ((this52406__$1.constructor === other52407.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52406__$1.nodeset,other52407.nodeset)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52406__$1.adj,other52407.adj)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52406__$1.in,other52407.in)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52406__$1.__extmap,other52407.__extmap)));
}));

(loom.graph.BasicEditableDigraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),null,new cljs.core.Keyword(null,"adj","adj",-1344630196),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new loom.graph.BasicEditableDigraph(self__.nodeset,self__.adj,self__.in$,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(loom.graph.BasicEditableDigraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__52404){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__52417 = cljs.core.keyword_identical_QMARK_;
var expr__52418 = k__4447__auto__;
if(cljs.core.truth_((pred__52417.cljs$core$IFn$_invoke$arity$2 ? pred__52417.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nodeset","nodeset",695991339),expr__52418) : pred__52417.call(null,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),expr__52418)))){
return (new loom.graph.BasicEditableDigraph(G__52404,self__.adj,self__.in$,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52417.cljs$core$IFn$_invoke$arity$2 ? pred__52417.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"adj","adj",-1344630196),expr__52418) : pred__52417.call(null,new cljs.core.Keyword(null,"adj","adj",-1344630196),expr__52418)))){
return (new loom.graph.BasicEditableDigraph(self__.nodeset,G__52404,self__.in$,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52417.cljs$core$IFn$_invoke$arity$2 ? pred__52417.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"in","in",-1531184865),expr__52418) : pred__52417.call(null,new cljs.core.Keyword(null,"in","in",-1531184865),expr__52418)))){
return (new loom.graph.BasicEditableDigraph(self__.nodeset,self__.adj,G__52404,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.BasicEditableDigraph(self__.nodeset,self__.adj,self__.in$,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__52404),null));
}
}
}
}));

(loom.graph.BasicEditableDigraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$,null))], null),self__.__extmap));
}));

(loom.graph.BasicEditableDigraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__52404){
var self__ = this;
var this__4438__auto____$1 = this;
return (new loom.graph.BasicEditableDigraph(self__.nodeset,self__.adj,self__.in$,G__52404,self__.__extmap,self__.__hash));
}));

(loom.graph.BasicEditableDigraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4445__auto__,(0)),cljs.core._nth(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(loom.graph.BasicEditableDigraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nodeset","nodeset",-1958444430,null),new cljs.core.Symbol(null,"adj","adj",295901331,null),new cljs.core.Symbol(null,"in","in",109346662,null)], null);
}));

(loom.graph.BasicEditableDigraph.cljs$lang$type = true);

(loom.graph.BasicEditableDigraph.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"loom.graph/BasicEditableDigraph",null,(1),null));
}));

(loom.graph.BasicEditableDigraph.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"loom.graph/BasicEditableDigraph");
}));

/**
 * Positional factory function for loom.graph/BasicEditableDigraph.
 */
loom.graph.__GT_BasicEditableDigraph = (function loom$graph$__GT_BasicEditableDigraph(nodeset,adj,in$){
return (new loom.graph.BasicEditableDigraph(nodeset,adj,in$,null,null,null));
});

/**
 * Factory function for loom.graph/BasicEditableDigraph, taking a map of keywords to field values.
 */
loom.graph.map__GT_BasicEditableDigraph = (function loom$graph$map__GT_BasicEditableDigraph(G__52408){
var extmap__4478__auto__ = (function (){var G__52426 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__52408,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"adj","adj",-1344630196),new cljs.core.Keyword(null,"in","in",-1531184865)], 0));
if(cljs.core.record_QMARK_(G__52408)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__52426);
} else {
return G__52426;
}
})();
return (new loom.graph.BasicEditableDigraph(new cljs.core.Keyword(null,"nodeset","nodeset",695991339).cljs$core$IFn$_invoke$arity$1(G__52408),new cljs.core.Keyword(null,"adj","adj",-1344630196).cljs$core$IFn$_invoke$arity$1(G__52408),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(G__52408),null,cljs.core.not_empty(extmap__4478__auto__),null));
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
(loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k52428,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__52432 = k52428;
var G__52432__$1 = (((G__52432 instanceof cljs.core.Keyword))?G__52432.fqn:null);
switch (G__52432__$1) {
case "nodeset":
return self__.nodeset;

break;
case "adj":
return self__.adj;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k52428,else__4442__auto__);

}
}));

(loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__52433){
var vec__52434 = p__52433;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52434,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52434,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#loom.graph.BasicEditableWeightedGraph{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj],null))], null),self__.__extmap));
}));

(loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__52427){
var self__ = this;
var G__52427__$1 = this;
return (new cljs.core.RecordIter((0),G__52427__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new loom.graph.BasicEditableWeightedGraph(self__.nodeset,self__.adj,self__.__meta,self__.__extmap,self__.__hash));
}));

(loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (coll__4436__auto__){
return (-212297308 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
})(this__4435__auto____$1);
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this52429,other52430){
var self__ = this;
var this52429__$1 = this;
return (((!((other52430 == null)))) && ((this52429__$1.constructor === other52430.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52429__$1.nodeset,other52430.nodeset)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52429__$1.adj,other52430.adj)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52429__$1.__extmap,other52430.__extmap)));
}));

(loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),null,new cljs.core.Keyword(null,"adj","adj",-1344630196),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new loom.graph.BasicEditableWeightedGraph(self__.nodeset,self__.adj,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__52427){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__52444 = cljs.core.keyword_identical_QMARK_;
var expr__52445 = k__4447__auto__;
if(cljs.core.truth_((pred__52444.cljs$core$IFn$_invoke$arity$2 ? pred__52444.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nodeset","nodeset",695991339),expr__52445) : pred__52444.call(null,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),expr__52445)))){
return (new loom.graph.BasicEditableWeightedGraph(G__52427,self__.adj,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52444.cljs$core$IFn$_invoke$arity$2 ? pred__52444.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"adj","adj",-1344630196),expr__52445) : pred__52444.call(null,new cljs.core.Keyword(null,"adj","adj",-1344630196),expr__52445)))){
return (new loom.graph.BasicEditableWeightedGraph(self__.nodeset,G__52427,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.BasicEditableWeightedGraph(self__.nodeset,self__.adj,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__52427),null));
}
}
}));

(loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj,null))], null),self__.__extmap));
}));

(loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__52427){
var self__ = this;
var this__4438__auto____$1 = this;
return (new loom.graph.BasicEditableWeightedGraph(self__.nodeset,self__.adj,G__52427,self__.__extmap,self__.__hash));
}));

(loom.graph.BasicEditableWeightedGraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4445__auto__,(0)),cljs.core._nth(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(loom.graph.BasicEditableWeightedGraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nodeset","nodeset",-1958444430,null),new cljs.core.Symbol(null,"adj","adj",295901331,null)], null);
}));

(loom.graph.BasicEditableWeightedGraph.cljs$lang$type = true);

(loom.graph.BasicEditableWeightedGraph.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"loom.graph/BasicEditableWeightedGraph",null,(1),null));
}));

(loom.graph.BasicEditableWeightedGraph.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"loom.graph/BasicEditableWeightedGraph");
}));

/**
 * Positional factory function for loom.graph/BasicEditableWeightedGraph.
 */
loom.graph.__GT_BasicEditableWeightedGraph = (function loom$graph$__GT_BasicEditableWeightedGraph(nodeset,adj){
return (new loom.graph.BasicEditableWeightedGraph(nodeset,adj,null,null,null));
});

/**
 * Factory function for loom.graph/BasicEditableWeightedGraph, taking a map of keywords to field values.
 */
loom.graph.map__GT_BasicEditableWeightedGraph = (function loom$graph$map__GT_BasicEditableWeightedGraph(G__52431){
var extmap__4478__auto__ = (function (){var G__52453 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__52431,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"adj","adj",-1344630196)], 0));
if(cljs.core.record_QMARK_(G__52431)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__52453);
} else {
return G__52453;
}
})();
return (new loom.graph.BasicEditableWeightedGraph(new cljs.core.Keyword(null,"nodeset","nodeset",695991339).cljs$core$IFn$_invoke$arity$1(G__52431),new cljs.core.Keyword(null,"adj","adj",-1344630196).cljs$core$IFn$_invoke$arity$1(G__52431),null,cljs.core.not_empty(extmap__4478__auto__),null));
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
(loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k52455,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__52461 = k52455;
var G__52461__$1 = (((G__52461 instanceof cljs.core.Keyword))?G__52461.fqn:null);
switch (G__52461__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k52455,else__4442__auto__);

}
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__52462){
var vec__52463 = p__52462;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52463,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52463,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#loom.graph.BasicEditableWeightedDigraph{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$],null))], null),self__.__extmap));
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__52454){
var self__ = this;
var G__52454__$1 = this;
return (new cljs.core.RecordIter((0),G__52454__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),new cljs.core.Keyword(null,"adj","adj",-1344630196),new cljs.core.Keyword(null,"in","in",-1531184865)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new loom.graph.BasicEditableWeightedDigraph(self__.nodeset,self__.adj,self__.in$,self__.__meta,self__.__extmap,self__.__hash));
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (coll__4436__auto__){
return (-1110931322 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
})(this__4435__auto____$1);
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this52456,other52457){
var self__ = this;
var this52456__$1 = this;
return (((!((other52457 == null)))) && ((this52456__$1.constructor === other52457.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52456__$1.nodeset,other52457.nodeset)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52456__$1.adj,other52457.adj)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52456__$1.in,other52457.in)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52456__$1.__extmap,other52457.__extmap)));
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339),null,new cljs.core.Keyword(null,"adj","adj",-1344630196),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new loom.graph.BasicEditableWeightedDigraph(self__.nodeset,self__.adj,self__.in$,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__52454){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__52467 = cljs.core.keyword_identical_QMARK_;
var expr__52468 = k__4447__auto__;
if(cljs.core.truth_((pred__52467.cljs$core$IFn$_invoke$arity$2 ? pred__52467.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nodeset","nodeset",695991339),expr__52468) : pred__52467.call(null,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),expr__52468)))){
return (new loom.graph.BasicEditableWeightedDigraph(G__52454,self__.adj,self__.in$,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52467.cljs$core$IFn$_invoke$arity$2 ? pred__52467.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"adj","adj",-1344630196),expr__52468) : pred__52467.call(null,new cljs.core.Keyword(null,"adj","adj",-1344630196),expr__52468)))){
return (new loom.graph.BasicEditableWeightedDigraph(self__.nodeset,G__52454,self__.in$,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52467.cljs$core$IFn$_invoke$arity$2 ? pred__52467.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"in","in",-1531184865),expr__52468) : pred__52467.call(null,new cljs.core.Keyword(null,"in","in",-1531184865),expr__52468)))){
return (new loom.graph.BasicEditableWeightedDigraph(self__.nodeset,self__.adj,G__52454,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.BasicEditableWeightedDigraph(self__.nodeset,self__.adj,self__.in$,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__52454),null));
}
}
}
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"nodeset","nodeset",695991339),self__.nodeset,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"adj","adj",-1344630196),self__.adj,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$,null))], null),self__.__extmap));
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__52454){
var self__ = this;
var this__4438__auto____$1 = this;
return (new loom.graph.BasicEditableWeightedDigraph(self__.nodeset,self__.adj,self__.in$,G__52454,self__.__extmap,self__.__hash));
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4445__auto__,(0)),cljs.core._nth(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(loom.graph.BasicEditableWeightedDigraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nodeset","nodeset",-1958444430,null),new cljs.core.Symbol(null,"adj","adj",295901331,null),new cljs.core.Symbol(null,"in","in",109346662,null)], null);
}));

(loom.graph.BasicEditableWeightedDigraph.cljs$lang$type = true);

(loom.graph.BasicEditableWeightedDigraph.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"loom.graph/BasicEditableWeightedDigraph",null,(1),null));
}));

(loom.graph.BasicEditableWeightedDigraph.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"loom.graph/BasicEditableWeightedDigraph");
}));

/**
 * Positional factory function for loom.graph/BasicEditableWeightedDigraph.
 */
loom.graph.__GT_BasicEditableWeightedDigraph = (function loom$graph$__GT_BasicEditableWeightedDigraph(nodeset,adj,in$){
return (new loom.graph.BasicEditableWeightedDigraph(nodeset,adj,in$,null,null,null));
});

/**
 * Factory function for loom.graph/BasicEditableWeightedDigraph, taking a map of keywords to field values.
 */
loom.graph.map__GT_BasicEditableWeightedDigraph = (function loom$graph$map__GT_BasicEditableWeightedDigraph(G__52458){
var extmap__4478__auto__ = (function (){var G__52471 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__52458,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"adj","adj",-1344630196),new cljs.core.Keyword(null,"in","in",-1531184865)], 0));
if(cljs.core.record_QMARK_(G__52458)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__52471);
} else {
return G__52471;
}
})();
return (new loom.graph.BasicEditableWeightedDigraph(new cljs.core.Keyword(null,"nodeset","nodeset",695991339).cljs$core$IFn$_invoke$arity$1(G__52458),new cljs.core.Keyword(null,"adj","adj",-1344630196).cljs$core$IFn$_invoke$arity$1(G__52458),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(G__52458),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

/**
 * Weight used when none is given for edges in weighted graphs
 */
loom.graph._STAR_default_weight_STAR_ = (1);
loom.graph.remove_adj_nodes = (function loom$graph$remove_adj_nodes(m,nodes,adjacents,remove_fn){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m__$1,n){
if(cljs.core.truth_((m__$1.cljs$core$IFn$_invoke$arity$1 ? m__$1.cljs$core$IFn$_invoke$arity$1(n) : m__$1.call(null,n)))){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [n], null),(function (p1__52476_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(remove_fn,p1__52476_SHARP_,nodes);
}));
} else {
return m__$1;
}
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,m,nodes),adjacents);
});
(loom.graph.BasicEditableGraph.prototype.loom$graph$Graph$ = cljs.core.PROTOCOL_SENTINEL);

(loom.graph.BasicEditableGraph.prototype.loom$graph$Graph$nodes$arity$1 = (function (g){
var g__$1 = this;
return g__$1.nodeset;
}));

(loom.graph.BasicEditableGraph.prototype.loom$graph$Graph$edges$arity$1 = (function (g){
var g__$1 = this;
var iter__4582__auto__ = (function loom$graph$iter__52480(s__52481){
return (new cljs.core.LazySeq(null,(function (){
var s__52481__$1 = s__52481;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__52481__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var n1 = cljs.core.first(xs__6292__auto__);
var iterys__4578__auto__ = ((function (s__52481__$1,n1,xs__6292__auto__,temp__5735__auto__,g__$1){
return (function loom$graph$iter__52480_$_iter__52482(s__52483){
return (new cljs.core.LazySeq(null,((function (s__52481__$1,n1,xs__6292__auto__,temp__5735__auto__,g__$1){
return (function (){
var s__52483__$1 = s__52483;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__52483__$1);
if(temp__5735__auto____$1){
var s__52483__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__52483__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__52483__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__52485 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__52484 = (0);
while(true){
if((i__52484 < size__4581__auto__)){
var e = cljs.core._nth(c__4580__auto__,i__52484);
cljs.core.chunk_append(b__52485,e);

var G__53403 = (i__52484 + (1));
i__52484 = G__53403;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52485),loom$graph$iter__52480_$_iter__52482(cljs.core.chunk_rest(s__52483__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52485),null);
}
} else {
var e = cljs.core.first(s__52483__$2);
return cljs.core.cons(e,loom$graph$iter__52480_$_iter__52482(cljs.core.rest(s__52483__$2)));
}
} else {
return null;
}
break;
}
});})(s__52481__$1,n1,xs__6292__auto__,temp__5735__auto__,g__$1))
,null,null));
});})(s__52481__$1,n1,xs__6292__auto__,temp__5735__auto__,g__$1))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(loom.graph.out_edges(g__$1,n1)));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,loom$graph$iter__52480(cljs.core.rest(s__52481__$1)));
} else {
var G__53420 = cljs.core.rest(s__52481__$1);
s__52481__$1 = G__53420;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(loom.graph.nodes(g__$1));
}));

(loom.graph.BasicEditableGraph.prototype.loom$graph$Graph$has_node_QMARK_$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.contains_QMARK_(g__$1.nodeset,node);
}));

(loom.graph.BasicEditableGraph.prototype.loom$graph$Graph$has_edge_QMARK_$arity$3 = (function (g,n1,n2){
var g__$1 = this;
return cljs.core.contains_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null)),n2);
}));

(loom.graph.BasicEditableGraph.prototype.loom$graph$Graph$out_degree$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.count(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),node], null)));
}));

(loom.graph.BasicEditableGraph.prototype.loom$graph$Graph$out_edges$arity$2 = (function (g,node){
var g__$1 = this;
var iter__4582__auto__ = (function loom$graph$iter__52488(s__52489){
return (new cljs.core.LazySeq(null,(function (){
var s__52489__$1 = s__52489;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__52489__$1);
if(temp__5735__auto__){
var s__52489__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__52489__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__52489__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__52491 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__52490 = (0);
while(true){
if((i__52490 < size__4581__auto__)){
var n2 = cljs.core._nth(c__4580__auto__,i__52490);
cljs.core.chunk_append(b__52491,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__53422 = (i__52490 + (1));
i__52490 = G__53422;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52491),loom$graph$iter__52488(cljs.core.chunk_rest(s__52489__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52491),null);
}
} else {
var n2 = cljs.core.first(s__52489__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__52488(cljs.core.rest(s__52489__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g__$1,node));
}));

(loom.graph.BasicEditableGraph.prototype.loom$graph$Graph$successors_STAR_$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),node], null));
}));

(loom.graph.BasicEditableGraph.prototype.loom$graph$EditableGraph$ = cljs.core.PROTOCOL_SENTINEL);

(loom.graph.BasicEditableGraph.prototype.loom$graph$EditableGraph$add_nodes_STAR_$arity$2 = (function (g,nodes){
var g__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (g__$2,node){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(g__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),cljs.core.conj,node);
}),g__$1,nodes);
}));

(loom.graph.BasicEditableGraph.prototype.loom$graph$EditableGraph$add_edges_STAR_$arity$2 = (function (g,edges){
var g__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (g__$2,p__52493){
var vec__52494 = p__52493;
var n1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52494,(0),null);
var n2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52494,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(g__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),cljs.core.conj,n1,n2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),n2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n2], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),n1);
}),g__$1,edges);
}));

(loom.graph.BasicEditableGraph.prototype.loom$graph$EditableGraph$remove_nodes_STAR_$arity$2 = (function (g,nodes){
var g__$1 = this;
var nbrs = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__52478_SHARP_){
return loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g__$1,p1__52478_SHARP_);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nodes], 0));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(g__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),(function (p1__52479_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.disj,p1__52479_SHARP_,nodes);
})),new cljs.core.Keyword(null,"adj","adj",-1344630196),loom.graph.remove_adj_nodes(g__$1.adj,nodes,nbrs,cljs.core.disj));
}));

(loom.graph.BasicEditableGraph.prototype.loom$graph$EditableGraph$remove_edges_STAR_$arity$2 = (function (g,edges){
var g__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (g__$2,p__52503){
var vec__52504 = p__52503;
var n1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52504,(0),null);
var n2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52504,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(g__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null),cljs.core.disj,n2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n2], null),cljs.core.disj,n1);
}),g__$1,edges);
}));

(loom.graph.BasicEditableGraph.prototype.loom$graph$EditableGraph$remove_all$arity$1 = (function (g){
var g__$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(g__$1,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),cljs.core.PersistentHashSet.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"adj","adj",-1344630196),cljs.core.PersistentArrayMap.EMPTY], 0));
}));
(loom.graph.BasicEditableDigraph.prototype.loom$graph$Graph$ = cljs.core.PROTOCOL_SENTINEL);

(loom.graph.BasicEditableDigraph.prototype.loom$graph$Graph$nodes$arity$1 = (function (g){
var g__$1 = this;
return g__$1.nodeset;
}));

(loom.graph.BasicEditableDigraph.prototype.loom$graph$Graph$edges$arity$1 = (function (g){
var g__$1 = this;
var iter__4582__auto__ = (function loom$graph$iter__52520(s__52521){
return (new cljs.core.LazySeq(null,(function (){
var s__52521__$1 = s__52521;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__52521__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var n1 = cljs.core.first(xs__6292__auto__);
var iterys__4578__auto__ = ((function (s__52521__$1,n1,xs__6292__auto__,temp__5735__auto__,g__$1){
return (function loom$graph$iter__52520_$_iter__52522(s__52523){
return (new cljs.core.LazySeq(null,((function (s__52521__$1,n1,xs__6292__auto__,temp__5735__auto__,g__$1){
return (function (){
var s__52523__$1 = s__52523;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__52523__$1);
if(temp__5735__auto____$1){
var s__52523__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__52523__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__52523__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__52525 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__52524 = (0);
while(true){
if((i__52524 < size__4581__auto__)){
var e = cljs.core._nth(c__4580__auto__,i__52524);
cljs.core.chunk_append(b__52525,e);

var G__53428 = (i__52524 + (1));
i__52524 = G__53428;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52525),loom$graph$iter__52520_$_iter__52522(cljs.core.chunk_rest(s__52523__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52525),null);
}
} else {
var e = cljs.core.first(s__52523__$2);
return cljs.core.cons(e,loom$graph$iter__52520_$_iter__52522(cljs.core.rest(s__52523__$2)));
}
} else {
return null;
}
break;
}
});})(s__52521__$1,n1,xs__6292__auto__,temp__5735__auto__,g__$1))
,null,null));
});})(s__52521__$1,n1,xs__6292__auto__,temp__5735__auto__,g__$1))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(loom.graph.out_edges(g__$1,n1)));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,loom$graph$iter__52520(cljs.core.rest(s__52521__$1)));
} else {
var G__53429 = cljs.core.rest(s__52521__$1);
s__52521__$1 = G__53429;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(loom.graph.nodes(g__$1));
}));

(loom.graph.BasicEditableDigraph.prototype.loom$graph$Graph$has_node_QMARK_$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.contains_QMARK_(g__$1.nodeset,node);
}));

(loom.graph.BasicEditableDigraph.prototype.loom$graph$Graph$has_edge_QMARK_$arity$3 = (function (g,n1,n2){
var g__$1 = this;
return cljs.core.contains_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null)),n2);
}));

(loom.graph.BasicEditableDigraph.prototype.loom$graph$Graph$out_degree$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.count(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),node], null)));
}));

(loom.graph.BasicEditableDigraph.prototype.loom$graph$Graph$out_edges$arity$2 = (function (g,node){
var g__$1 = this;
var iter__4582__auto__ = (function loom$graph$iter__52539(s__52540){
return (new cljs.core.LazySeq(null,(function (){
var s__52540__$1 = s__52540;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__52540__$1);
if(temp__5735__auto__){
var s__52540__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__52540__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__52540__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__52542 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__52541 = (0);
while(true){
if((i__52541 < size__4581__auto__)){
var n2 = cljs.core._nth(c__4580__auto__,i__52541);
cljs.core.chunk_append(b__52542,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__53431 = (i__52541 + (1));
i__52541 = G__53431;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52542),loom$graph$iter__52539(cljs.core.chunk_rest(s__52540__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52542),null);
}
} else {
var n2 = cljs.core.first(s__52540__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__52539(cljs.core.rest(s__52540__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g__$1,node));
}));

(loom.graph.BasicEditableDigraph.prototype.loom$graph$Graph$successors_STAR_$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),node], null));
}));

(loom.graph.BasicEditableDigraph.prototype.loom$graph$EditableGraph$ = cljs.core.PROTOCOL_SENTINEL);

(loom.graph.BasicEditableDigraph.prototype.loom$graph$EditableGraph$add_nodes_STAR_$arity$2 = (function (g,nodes){
var g__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (g__$2,node){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(g__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),cljs.core.conj,node);
}),g__$1,nodes);
}));

(loom.graph.BasicEditableDigraph.prototype.loom$graph$EditableGraph$add_edges_STAR_$arity$2 = (function (g,edges){
var g__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (g__$2,p__52552){
var vec__52553 = p__52552;
var n1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52553,(0),null);
var n2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52553,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(g__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),cljs.core.conj,n1,n2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),n2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),n2], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),n1);
}),g__$1,edges);
}));

(loom.graph.BasicEditableDigraph.prototype.loom$graph$EditableGraph$remove_nodes_STAR_$arity$2 = (function (g,nodes){
var g__$1 = this;
var ins = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__52513_SHARP_){
return loom.graph.predecessors.cljs$core$IFn$_invoke$arity$2(g__$1,p1__52513_SHARP_);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nodes], 0));
var outs = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__52514_SHARP_){
return loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g__$1,p1__52514_SHARP_);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nodes], 0));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(g__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),(function (p1__52515_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.disj,p1__52515_SHARP_,nodes);
})),new cljs.core.Keyword(null,"adj","adj",-1344630196),loom.graph.remove_adj_nodes(g__$1.adj,nodes,ins,cljs.core.disj)),new cljs.core.Keyword(null,"in","in",-1531184865),loom.graph.remove_adj_nodes(g__$1.in,nodes,outs,cljs.core.disj));
}));

(loom.graph.BasicEditableDigraph.prototype.loom$graph$EditableGraph$remove_edges_STAR_$arity$2 = (function (g,edges){
var g__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (g__$2,p__52560){
var vec__52561 = p__52560;
var n1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52561,(0),null);
var n2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52561,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(g__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null),cljs.core.disj,n2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),n2], null),cljs.core.disj,n1);
}),g__$1,edges);
}));

(loom.graph.BasicEditableDigraph.prototype.loom$graph$EditableGraph$remove_all$arity$1 = (function (g){
var g__$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(g__$1,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),cljs.core.PersistentHashSet.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"adj","adj",-1344630196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.PersistentArrayMap.EMPTY], 0));
}));

(loom.graph.BasicEditableDigraph.prototype.loom$graph$Digraph$ = cljs.core.PROTOCOL_SENTINEL);

(loom.graph.BasicEditableDigraph.prototype.loom$graph$Digraph$predecessors_STAR_$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),node], null));
}));

(loom.graph.BasicEditableDigraph.prototype.loom$graph$Digraph$in_degree$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.count(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),node], null)));
}));

(loom.graph.BasicEditableDigraph.prototype.loom$graph$Digraph$in_edges$arity$2 = (function (g,node){
var g__$1 = this;
var iter__4582__auto__ = (function loom$graph$iter__52570(s__52571){
return (new cljs.core.LazySeq(null,(function (){
var s__52571__$1 = s__52571;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__52571__$1);
if(temp__5735__auto__){
var s__52571__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__52571__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__52571__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__52573 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__52572 = (0);
while(true){
if((i__52572 < size__4581__auto__)){
var n2 = cljs.core._nth(c__4580__auto__,i__52572);
cljs.core.chunk_append(b__52573,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,node], null));

var G__53437 = (i__52572 + (1));
i__52572 = G__53437;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52573),loom$graph$iter__52570(cljs.core.chunk_rest(s__52571__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52573),null);
}
} else {
var n2 = cljs.core.first(s__52571__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,node], null),loom$graph$iter__52570(cljs.core.rest(s__52571__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(loom.graph.predecessors.cljs$core$IFn$_invoke$arity$2(g__$1,node));
}));

(loom.graph.BasicEditableDigraph.prototype.loom$graph$Digraph$transpose$arity$1 = (function (g){
var g__$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(g__$1,new cljs.core.Keyword(null,"adj","adj",-1344630196),g__$1.in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"in","in",-1531184865),g__$1.adj], 0));
}));
(loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$Graph$ = cljs.core.PROTOCOL_SENTINEL);

(loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$Graph$nodes$arity$1 = (function (g){
var g__$1 = this;
return g__$1.nodeset;
}));

(loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$Graph$edges$arity$1 = (function (g){
var g__$1 = this;
var iter__4582__auto__ = (function loom$graph$iter__52583(s__52584){
return (new cljs.core.LazySeq(null,(function (){
var s__52584__$1 = s__52584;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__52584__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var n1 = cljs.core.first(xs__6292__auto__);
var iterys__4578__auto__ = ((function (s__52584__$1,n1,xs__6292__auto__,temp__5735__auto__,g__$1){
return (function loom$graph$iter__52583_$_iter__52585(s__52586){
return (new cljs.core.LazySeq(null,((function (s__52584__$1,n1,xs__6292__auto__,temp__5735__auto__,g__$1){
return (function (){
var s__52586__$1 = s__52586;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__52586__$1);
if(temp__5735__auto____$1){
var s__52586__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__52586__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__52586__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__52588 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__52587 = (0);
while(true){
if((i__52587 < size__4581__auto__)){
var e = cljs.core._nth(c__4580__auto__,i__52587);
cljs.core.chunk_append(b__52588,e);

var G__53444 = (i__52587 + (1));
i__52587 = G__53444;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52588),loom$graph$iter__52583_$_iter__52585(cljs.core.chunk_rest(s__52586__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52588),null);
}
} else {
var e = cljs.core.first(s__52586__$2);
return cljs.core.cons(e,loom$graph$iter__52583_$_iter__52585(cljs.core.rest(s__52586__$2)));
}
} else {
return null;
}
break;
}
});})(s__52584__$1,n1,xs__6292__auto__,temp__5735__auto__,g__$1))
,null,null));
});})(s__52584__$1,n1,xs__6292__auto__,temp__5735__auto__,g__$1))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(loom.graph.out_edges(g__$1,n1)));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,loom$graph$iter__52583(cljs.core.rest(s__52584__$1)));
} else {
var G__53445 = cljs.core.rest(s__52584__$1);
s__52584__$1 = G__53445;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(loom.graph.nodes(g__$1));
}));

(loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$Graph$has_node_QMARK_$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.contains_QMARK_(g__$1.nodeset,node);
}));

(loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$Graph$has_edge_QMARK_$arity$3 = (function (g,n1,n2){
var g__$1 = this;
return cljs.core.contains_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null)),n2);
}));

(loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$Graph$out_degree$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.count(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),node], null)));
}));

(loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$Graph$out_edges$arity$2 = (function (g,node){
var g__$1 = this;
var iter__4582__auto__ = (function loom$graph$iter__52593(s__52594){
return (new cljs.core.LazySeq(null,(function (){
var s__52594__$1 = s__52594;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__52594__$1);
if(temp__5735__auto__){
var s__52594__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__52594__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__52594__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__52596 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__52595 = (0);
while(true){
if((i__52595 < size__4581__auto__)){
var n2 = cljs.core._nth(c__4580__auto__,i__52595);
cljs.core.chunk_append(b__52596,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__53449 = (i__52595 + (1));
i__52595 = G__53449;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52596),loom$graph$iter__52593(cljs.core.chunk_rest(s__52594__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52596),null);
}
} else {
var n2 = cljs.core.first(s__52594__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__52593(cljs.core.rest(s__52594__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g__$1,node));
}));

(loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$Graph$successors_STAR_$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.keys(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),node], null)));
}));

(loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$EditableGraph$ = cljs.core.PROTOCOL_SENTINEL);

(loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$EditableGraph$add_nodes_STAR_$arity$2 = (function (g,nodes){
var g__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (g__$2,node){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(g__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),cljs.core.conj,node);
}),g__$1,nodes);
}));

(loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$EditableGraph$add_edges_STAR_$arity$2 = (function (g,edges){
var g__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (g__$2,p__52597){
var vec__52600 = p__52597;
var seq__52601 = cljs.core.seq(vec__52600);
var first__52602 = cljs.core.first(seq__52601);
var seq__52601__$1 = cljs.core.next(seq__52601);
var n1 = first__52602;
var first__52602__$1 = cljs.core.first(seq__52601__$1);
var seq__52601__$2 = cljs.core.next(seq__52601__$1);
var n2 = first__52602__$1;
var vec__52603 = seq__52601__$2;
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52603,(0),null);
return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(g__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),cljs.core.conj,n1,n2),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1,n2], null),(function (){var or__4185__auto__ = w;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return loom.graph._STAR_default_weight_STAR_;
}
})()),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n2,n1], null),(function (){var or__4185__auto__ = w;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return loom.graph._STAR_default_weight_STAR_;
}
})());
}),g__$1,edges);
}));

(loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$EditableGraph$remove_nodes_STAR_$arity$2 = (function (g,nodes){
var g__$1 = this;
var nbrs = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__52577_SHARP_){
return loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g__$1,p1__52577_SHARP_);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nodes], 0));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(g__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),(function (p1__52578_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.disj,p1__52578_SHARP_,nodes);
})),new cljs.core.Keyword(null,"adj","adj",-1344630196),loom.graph.remove_adj_nodes(g__$1.adj,nodes,nbrs,cljs.core.dissoc));
}));

(loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$EditableGraph$remove_edges_STAR_$arity$2 = (function (g,edges){
var g__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (g__$2,p__52612){
var vec__52613 = p__52612;
var n1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52613,(0),null);
var n2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52613,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(g__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null),cljs.core.dissoc,n2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n2], null),cljs.core.dissoc,n1);
}),g__$1,edges);
}));

(loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$EditableGraph$remove_all$arity$1 = (function (g){
var g__$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(g__$1,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),cljs.core.PersistentHashSet.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"adj","adj",-1344630196),cljs.core.PersistentArrayMap.EMPTY], 0));
}));

(loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$WeightedGraph$ = cljs.core.PROTOCOL_SENTINEL);

(loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$WeightedGraph$weight_STAR_$arity$2 = (function (g,e){
var g__$1 = this;
return loom.graph.weight.cljs$core$IFn$_invoke$arity$3(g__$1,loom.graph.src(e),loom.graph.dest(e));
}));

(loom.graph.BasicEditableWeightedGraph.prototype.loom$graph$WeightedGraph$weight_STAR_$arity$3 = (function (g,n1,n2){
var g__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1,n2], null));
}));
(loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Graph$ = cljs.core.PROTOCOL_SENTINEL);

(loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Graph$nodes$arity$1 = (function (g){
var g__$1 = this;
return g__$1.nodeset;
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Graph$edges$arity$1 = (function (g){
var g__$1 = this;
var iter__4582__auto__ = (function loom$graph$iter__52624(s__52625){
return (new cljs.core.LazySeq(null,(function (){
var s__52625__$1 = s__52625;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__52625__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var n1 = cljs.core.first(xs__6292__auto__);
var iterys__4578__auto__ = ((function (s__52625__$1,n1,xs__6292__auto__,temp__5735__auto__,g__$1){
return (function loom$graph$iter__52624_$_iter__52626(s__52627){
return (new cljs.core.LazySeq(null,((function (s__52625__$1,n1,xs__6292__auto__,temp__5735__auto__,g__$1){
return (function (){
var s__52627__$1 = s__52627;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__52627__$1);
if(temp__5735__auto____$1){
var s__52627__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__52627__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__52627__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__52629 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__52628 = (0);
while(true){
if((i__52628 < size__4581__auto__)){
var e = cljs.core._nth(c__4580__auto__,i__52628);
cljs.core.chunk_append(b__52629,e);

var G__53467 = (i__52628 + (1));
i__52628 = G__53467;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52629),loom$graph$iter__52624_$_iter__52626(cljs.core.chunk_rest(s__52627__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52629),null);
}
} else {
var e = cljs.core.first(s__52627__$2);
return cljs.core.cons(e,loom$graph$iter__52624_$_iter__52626(cljs.core.rest(s__52627__$2)));
}
} else {
return null;
}
break;
}
});})(s__52625__$1,n1,xs__6292__auto__,temp__5735__auto__,g__$1))
,null,null));
});})(s__52625__$1,n1,xs__6292__auto__,temp__5735__auto__,g__$1))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(loom.graph.out_edges(g__$1,n1)));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,loom$graph$iter__52624(cljs.core.rest(s__52625__$1)));
} else {
var G__53468 = cljs.core.rest(s__52625__$1);
s__52625__$1 = G__53468;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(loom.graph.nodes(g__$1));
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Graph$has_node_QMARK_$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.contains_QMARK_(g__$1.nodeset,node);
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Graph$has_edge_QMARK_$arity$3 = (function (g,n1,n2){
var g__$1 = this;
return cljs.core.contains_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null)),n2);
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Graph$out_degree$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.count(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),node], null)));
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Graph$out_edges$arity$2 = (function (g,node){
var g__$1 = this;
var iter__4582__auto__ = (function loom$graph$iter__52647(s__52648){
return (new cljs.core.LazySeq(null,(function (){
var s__52648__$1 = s__52648;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__52648__$1);
if(temp__5735__auto__){
var s__52648__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__52648__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__52648__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__52650 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__52649 = (0);
while(true){
if((i__52649 < size__4581__auto__)){
var n2 = cljs.core._nth(c__4580__auto__,i__52649);
cljs.core.chunk_append(b__52650,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__53470 = (i__52649 + (1));
i__52649 = G__53470;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52650),loom$graph$iter__52647(cljs.core.chunk_rest(s__52648__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52650),null);
}
} else {
var n2 = cljs.core.first(s__52648__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__52647(cljs.core.rest(s__52648__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g__$1,node));
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Graph$successors_STAR_$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.keys(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),node], null)));
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$EditableGraph$ = cljs.core.PROTOCOL_SENTINEL);

(loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$EditableGraph$add_nodes_STAR_$arity$2 = (function (g,nodes){
var g__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (g__$2,node){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(g__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),cljs.core.conj,node);
}),g__$1,nodes);
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$EditableGraph$add_edges_STAR_$arity$2 = (function (g,edges){
var g__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (g__$2,p__52669){
var vec__52671 = p__52669;
var seq__52672 = cljs.core.seq(vec__52671);
var first__52673 = cljs.core.first(seq__52672);
var seq__52672__$1 = cljs.core.next(seq__52672);
var n1 = first__52673;
var first__52673__$1 = cljs.core.first(seq__52672__$1);
var seq__52672__$2 = cljs.core.next(seq__52672__$1);
var n2 = first__52673__$1;
var vec__52675 = seq__52672__$2;
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52675,(0),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(g__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),cljs.core.conj,n1,n2),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1,n2], null),(function (){var or__4185__auto__ = w;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return loom.graph._STAR_default_weight_STAR_;
}
})()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),n2], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),n1);
}),g__$1,edges);
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$EditableGraph$remove_nodes_STAR_$arity$2 = (function (g,nodes){
var g__$1 = this;
var ins = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__52618_SHARP_){
return loom.graph.predecessors.cljs$core$IFn$_invoke$arity$2(g__$1,p1__52618_SHARP_);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nodes], 0));
var outs = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__52619_SHARP_){
return loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g__$1,p1__52619_SHARP_);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([nodes], 0));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(g__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nodeset","nodeset",695991339)], null),(function (p1__52620_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.disj,p1__52620_SHARP_,nodes);
})),new cljs.core.Keyword(null,"adj","adj",-1344630196),loom.graph.remove_adj_nodes(g__$1.adj,nodes,ins,cljs.core.dissoc)),new cljs.core.Keyword(null,"in","in",-1531184865),loom.graph.remove_adj_nodes(g__$1.in,nodes,outs,cljs.core.disj));
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$EditableGraph$remove_edges_STAR_$arity$2 = (function (g,edges){
var g__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (g__$2,p__52688){
var vec__52689 = p__52688;
var n1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52689,(0),null);
var n2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52689,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(g__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1], null),cljs.core.dissoc,n2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),n2], null),cljs.core.disj,n1);
}),g__$1,edges);
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$EditableGraph$remove_all$arity$1 = (function (g){
var g__$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(g__$1,new cljs.core.Keyword(null,"nodeset","nodeset",695991339),cljs.core.PersistentHashSet.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"adj","adj",-1344630196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.PersistentArrayMap.EMPTY], 0));
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Digraph$ = cljs.core.PROTOCOL_SENTINEL);

(loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Digraph$predecessors_STAR_$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),node], null));
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Digraph$in_degree$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.count(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"in","in",-1531184865),node], null)));
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Digraph$in_edges$arity$2 = (function (g,node){
var g__$1 = this;
var iter__4582__auto__ = (function loom$graph$iter__52696(s__52697){
return (new cljs.core.LazySeq(null,(function (){
var s__52697__$1 = s__52697;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__52697__$1);
if(temp__5735__auto__){
var s__52697__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__52697__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__52697__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__52699 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__52698 = (0);
while(true){
if((i__52698 < size__4581__auto__)){
var n2 = cljs.core._nth(c__4580__auto__,i__52698);
cljs.core.chunk_append(b__52699,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,node], null));

var G__53477 = (i__52698 + (1));
i__52698 = G__53477;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52699),loom$graph$iter__52696(cljs.core.chunk_rest(s__52697__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52699),null);
}
} else {
var n2 = cljs.core.first(s__52697__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,node], null),loom$graph$iter__52696(cljs.core.rest(s__52697__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(loom.graph.predecessors.cljs$core$IFn$_invoke$arity$2(g__$1,node));
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$Digraph$transpose$arity$1 = (function (g){
var g__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (tg,p__52705){
var vec__52706 = p__52705;
var n1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52706,(0),null);
var n2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52706,(1),null);
return loom.graph.add_edges_STAR_(tg,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,n1,loom.graph.weight.cljs$core$IFn$_invoke$arity$3(g__$1,n1,n2)], null)], null));
}),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(g__$1,new cljs.core.Keyword(null,"adj","adj",-1344630196),cljs.core.PersistentArrayMap.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.PersistentArrayMap.EMPTY], 0)),loom.graph.edges(g__$1));
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$WeightedGraph$ = cljs.core.PROTOCOL_SENTINEL);

(loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$WeightedGraph$weight_STAR_$arity$2 = (function (g,e){
var g__$1 = this;
return loom.graph.weight.cljs$core$IFn$_invoke$arity$3(g__$1,loom.graph.src(e),loom.graph.dest(e));
}));

(loom.graph.BasicEditableWeightedDigraph.prototype.loom$graph$WeightedGraph$weight_STAR_$arity$3 = (function (g,n1,n2){
var g__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(g__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"adj","adj",-1344630196),n1,n2], null));
}));
loom.graph.call_or_return = (function loom$graph$call_or_return(var_args){
var args__4795__auto__ = [];
var len__4789__auto___53481 = arguments.length;
var i__4790__auto___53482 = (0);
while(true){
if((i__4790__auto___53482 < len__4789__auto___53481)){
args__4795__auto__.push((arguments[i__4790__auto___53482]));

var G__53483 = (i__4790__auto___53482 + (1));
i__4790__auto___53482 = G__53483;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return loom.graph.call_or_return.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(loom.graph.call_or_return.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(cljs.core.fn_QMARK_(f)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
} else {
return f;
}
}));

(loom.graph.call_or_return.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(loom.graph.call_or_return.cljs$lang$applyTo = (function (seq52714){
var G__52715 = cljs.core.first(seq52714);
var seq52714__$1 = cljs.core.next(seq52714);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52715,seq52714__$1);
}));


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
(loom.graph.FlyGraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(loom.graph.FlyGraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k52722,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__52728 = k52722;
var G__52728__$1 = (((G__52728 instanceof cljs.core.Keyword))?G__52728.fqn:null);
switch (G__52728__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k52722,else__4442__auto__);

}
}));

(loom.graph.FlyGraph.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__52729){
var vec__52730 = p__52729;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52730,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52730,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(loom.graph.FlyGraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#loom.graph.FlyGraph{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start","start",-355208981),self__.start],null))], null),self__.__extmap));
}));

(loom.graph.FlyGraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__52721){
var self__ = this;
var G__52721__$1 = this;
return (new cljs.core.RecordIter((0),G__52721__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"start","start",-355208981)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(loom.graph.FlyGraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(loom.graph.FlyGraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new loom.graph.FlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.start,self__.__meta,self__.__extmap,self__.__hash));
}));

(loom.graph.FlyGraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
}));

(loom.graph.FlyGraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (coll__4436__auto__){
return (-1546683162 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
})(this__4435__auto____$1);
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(loom.graph.FlyGraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this52723,other52724){
var self__ = this;
var this52723__$1 = this;
return (((!((other52724 == null)))) && ((this52723__$1.constructor === other52724.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52723__$1.fnodes,other52724.fnodes)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52723__$1.fedges,other52724.fedges)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52723__$1.fsuccessors,other52724.fsuccessors)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52723__$1.start,other52724.start)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52723__$1.__extmap,other52724.__extmap)));
}));

(loom.graph.FlyGraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fedges","fedges",499673923),null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),null,new cljs.core.Keyword(null,"start","start",-355208981),null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new loom.graph.FlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.start,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(loom.graph.FlyGraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__52721){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__52742 = cljs.core.keyword_identical_QMARK_;
var expr__52743 = k__4447__auto__;
if(cljs.core.truth_((pred__52742.cljs$core$IFn$_invoke$arity$2 ? pred__52742.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),expr__52743) : pred__52742.call(null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),expr__52743)))){
return (new loom.graph.FlyGraph(G__52721,self__.fedges,self__.fsuccessors,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52742.cljs$core$IFn$_invoke$arity$2 ? pred__52742.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fedges","fedges",499673923),expr__52743) : pred__52742.call(null,new cljs.core.Keyword(null,"fedges","fedges",499673923),expr__52743)))){
return (new loom.graph.FlyGraph(self__.fnodes,G__52721,self__.fsuccessors,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52742.cljs$core$IFn$_invoke$arity$2 ? pred__52742.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),expr__52743) : pred__52742.call(null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),expr__52743)))){
return (new loom.graph.FlyGraph(self__.fnodes,self__.fedges,G__52721,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52742.cljs$core$IFn$_invoke$arity$2 ? pred__52742.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"start","start",-355208981),expr__52743) : pred__52742.call(null,new cljs.core.Keyword(null,"start","start",-355208981),expr__52743)))){
return (new loom.graph.FlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,G__52721,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.FlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.start,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__52721),null));
}
}
}
}
}));

(loom.graph.FlyGraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start","start",-355208981),self__.start,null))], null),self__.__extmap));
}));

(loom.graph.FlyGraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__52721){
var self__ = this;
var this__4438__auto____$1 = this;
return (new loom.graph.FlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.start,G__52721,self__.__extmap,self__.__hash));
}));

(loom.graph.FlyGraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4445__auto__,(0)),cljs.core._nth(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(loom.graph.FlyGraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fnodes","fnodes",1004698034,null),new cljs.core.Symbol(null,"fedges","fedges",2140205450,null),new cljs.core.Symbol(null,"fsuccessors","fsuccessors",-826676562,null),new cljs.core.Symbol(null,"start","start",1285322546,null)], null);
}));

(loom.graph.FlyGraph.cljs$lang$type = true);

(loom.graph.FlyGraph.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"loom.graph/FlyGraph",null,(1),null));
}));

(loom.graph.FlyGraph.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"loom.graph/FlyGraph");
}));

/**
 * Positional factory function for loom.graph/FlyGraph.
 */
loom.graph.__GT_FlyGraph = (function loom$graph$__GT_FlyGraph(fnodes,fedges,fsuccessors,start){
return (new loom.graph.FlyGraph(fnodes,fedges,fsuccessors,start,null,null,null));
});

/**
 * Factory function for loom.graph/FlyGraph, taking a map of keywords to field values.
 */
loom.graph.map__GT_FlyGraph = (function loom$graph$map__GT_FlyGraph(G__52725){
var extmap__4478__auto__ = (function (){var G__52761 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__52725,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"start","start",-355208981)], 0));
if(cljs.core.record_QMARK_(G__52725)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__52761);
} else {
return G__52761;
}
})();
return (new loom.graph.FlyGraph(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(G__52725),new cljs.core.Keyword(null,"fedges","fedges",499673923).cljs$core$IFn$_invoke$arity$1(G__52725),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207).cljs$core$IFn$_invoke$arity$1(G__52725),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(G__52725),null,cljs.core.not_empty(extmap__4478__auto__),null));
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
(loom.graph.FlyDigraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(loom.graph.FlyDigraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k52763,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__52770 = k52763;
var G__52770__$1 = (((G__52770 instanceof cljs.core.Keyword))?G__52770.fqn:null);
switch (G__52770__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k52763,else__4442__auto__);

}
}));

(loom.graph.FlyDigraph.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__52771){
var vec__52772 = p__52771;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52772,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52772,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(loom.graph.FlyDigraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#loom.graph.FlyDigraph{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),self__.fpredecessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start","start",-355208981),self__.start],null))], null),self__.__extmap));
}));

(loom.graph.FlyDigraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__52762){
var self__ = this;
var G__52762__$1 = this;
return (new cljs.core.RecordIter((0),G__52762__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),new cljs.core.Keyword(null,"start","start",-355208981)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(loom.graph.FlyDigraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(loom.graph.FlyDigraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.start,self__.__meta,self__.__extmap,self__.__hash));
}));

(loom.graph.FlyDigraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
}));

(loom.graph.FlyDigraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (coll__4436__auto__){
return (1981361804 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
})(this__4435__auto____$1);
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(loom.graph.FlyDigraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this52764,other52765){
var self__ = this;
var this52764__$1 = this;
return (((!((other52765 == null)))) && ((this52764__$1.constructor === other52765.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52764__$1.fnodes,other52765.fnodes)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52764__$1.fedges,other52765.fedges)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52764__$1.fsuccessors,other52765.fsuccessors)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52764__$1.fpredecessors,other52765.fpredecessors)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52764__$1.start,other52765.start)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52764__$1.__extmap,other52765.__extmap)));
}));

(loom.graph.FlyDigraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fedges","fedges",499673923),null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),null,new cljs.core.Keyword(null,"start","start",-355208981),null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),null,new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.start,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(loom.graph.FlyDigraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__52762){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__52782 = cljs.core.keyword_identical_QMARK_;
var expr__52783 = k__4447__auto__;
if(cljs.core.truth_((pred__52782.cljs$core$IFn$_invoke$arity$2 ? pred__52782.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),expr__52783) : pred__52782.call(null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),expr__52783)))){
return (new loom.graph.FlyDigraph(G__52762,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52782.cljs$core$IFn$_invoke$arity$2 ? pred__52782.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fedges","fedges",499673923),expr__52783) : pred__52782.call(null,new cljs.core.Keyword(null,"fedges","fedges",499673923),expr__52783)))){
return (new loom.graph.FlyDigraph(self__.fnodes,G__52762,self__.fsuccessors,self__.fpredecessors,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52782.cljs$core$IFn$_invoke$arity$2 ? pred__52782.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),expr__52783) : pred__52782.call(null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),expr__52783)))){
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,G__52762,self__.fpredecessors,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52782.cljs$core$IFn$_invoke$arity$2 ? pred__52782.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),expr__52783) : pred__52782.call(null,new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),expr__52783)))){
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,G__52762,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52782.cljs$core$IFn$_invoke$arity$2 ? pred__52782.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"start","start",-355208981),expr__52783) : pred__52782.call(null,new cljs.core.Keyword(null,"start","start",-355208981),expr__52783)))){
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,G__52762,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.start,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__52762),null));
}
}
}
}
}
}));

(loom.graph.FlyDigraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),self__.fpredecessors,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start","start",-355208981),self__.start,null))], null),self__.__extmap));
}));

(loom.graph.FlyDigraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__52762){
var self__ = this;
var this__4438__auto____$1 = this;
return (new loom.graph.FlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.start,G__52762,self__.__extmap,self__.__hash));
}));

(loom.graph.FlyDigraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4445__auto__,(0)),cljs.core._nth(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(loom.graph.FlyDigraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fnodes","fnodes",1004698034,null),new cljs.core.Symbol(null,"fedges","fedges",2140205450,null),new cljs.core.Symbol(null,"fsuccessors","fsuccessors",-826676562,null),new cljs.core.Symbol(null,"fpredecessors","fpredecessors",227702593,null),new cljs.core.Symbol(null,"start","start",1285322546,null)], null);
}));

(loom.graph.FlyDigraph.cljs$lang$type = true);

(loom.graph.FlyDigraph.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"loom.graph/FlyDigraph",null,(1),null));
}));

(loom.graph.FlyDigraph.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"loom.graph/FlyDigraph");
}));

/**
 * Positional factory function for loom.graph/FlyDigraph.
 */
loom.graph.__GT_FlyDigraph = (function loom$graph$__GT_FlyDigraph(fnodes,fedges,fsuccessors,fpredecessors,start){
return (new loom.graph.FlyDigraph(fnodes,fedges,fsuccessors,fpredecessors,start,null,null,null));
});

/**
 * Factory function for loom.graph/FlyDigraph, taking a map of keywords to field values.
 */
loom.graph.map__GT_FlyDigraph = (function loom$graph$map__GT_FlyDigraph(G__52767){
var extmap__4478__auto__ = (function (){var G__52796 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__52767,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),new cljs.core.Keyword(null,"start","start",-355208981)], 0));
if(cljs.core.record_QMARK_(G__52767)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__52796);
} else {
return G__52796;
}
})();
return (new loom.graph.FlyDigraph(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(G__52767),new cljs.core.Keyword(null,"fedges","fedges",499673923).cljs$core$IFn$_invoke$arity$1(G__52767),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207).cljs$core$IFn$_invoke$arity$1(G__52767),new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934).cljs$core$IFn$_invoke$arity$1(G__52767),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(G__52767),null,cljs.core.not_empty(extmap__4478__auto__),null));
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
(loom.graph.WeightedFlyGraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(loom.graph.WeightedFlyGraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k52800,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__52814 = k52800;
var G__52814__$1 = (((G__52814 instanceof cljs.core.Keyword))?G__52814.fqn:null);
switch (G__52814__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k52800,else__4442__auto__);

}
}));

(loom.graph.WeightedFlyGraph.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__52818){
var vec__52819 = p__52818;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52819,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52819,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(loom.graph.WeightedFlyGraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#loom.graph.WeightedFlyGraph{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fweight","fweight",1299924141),self__.fweight],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start","start",-355208981),self__.start],null))], null),self__.__extmap));
}));

(loom.graph.WeightedFlyGraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__52799){
var self__ = this;
var G__52799__$1 = this;
return (new cljs.core.RecordIter((0),G__52799__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"fweight","fweight",1299924141),new cljs.core.Keyword(null,"start","start",-355208981)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(loom.graph.WeightedFlyGraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(loom.graph.WeightedFlyGraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,self__.__hash));
}));

(loom.graph.WeightedFlyGraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
}));

(loom.graph.WeightedFlyGraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (coll__4436__auto__){
return (-1357917791 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
})(this__4435__auto____$1);
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(loom.graph.WeightedFlyGraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this52801,other52802){
var self__ = this;
var this52801__$1 = this;
return (((!((other52802 == null)))) && ((this52801__$1.constructor === other52802.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52801__$1.fnodes,other52802.fnodes)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52801__$1.fedges,other52802.fedges)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52801__$1.fsuccessors,other52802.fsuccessors)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52801__$1.fweight,other52802.fweight)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52801__$1.start,other52802.start)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52801__$1.__extmap,other52802.__extmap)));
}));

(loom.graph.WeightedFlyGraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fedges","fedges",499673923),null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),null,new cljs.core.Keyword(null,"start","start",-355208981),null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),null,new cljs.core.Keyword(null,"fweight","fweight",1299924141),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fweight,self__.start,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(loom.graph.WeightedFlyGraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__52799){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__52827 = cljs.core.keyword_identical_QMARK_;
var expr__52828 = k__4447__auto__;
if(cljs.core.truth_((pred__52827.cljs$core$IFn$_invoke$arity$2 ? pred__52827.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),expr__52828) : pred__52827.call(null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),expr__52828)))){
return (new loom.graph.WeightedFlyGraph(G__52799,self__.fedges,self__.fsuccessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52827.cljs$core$IFn$_invoke$arity$2 ? pred__52827.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fedges","fedges",499673923),expr__52828) : pred__52827.call(null,new cljs.core.Keyword(null,"fedges","fedges",499673923),expr__52828)))){
return (new loom.graph.WeightedFlyGraph(self__.fnodes,G__52799,self__.fsuccessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52827.cljs$core$IFn$_invoke$arity$2 ? pred__52827.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),expr__52828) : pred__52827.call(null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),expr__52828)))){
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,G__52799,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52827.cljs$core$IFn$_invoke$arity$2 ? pred__52827.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fweight","fweight",1299924141),expr__52828) : pred__52827.call(null,new cljs.core.Keyword(null,"fweight","fweight",1299924141),expr__52828)))){
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,G__52799,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52827.cljs$core$IFn$_invoke$arity$2 ? pred__52827.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"start","start",-355208981),expr__52828) : pred__52827.call(null,new cljs.core.Keyword(null,"start","start",-355208981),expr__52828)))){
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fweight,G__52799,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fweight,self__.start,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__52799),null));
}
}
}
}
}
}));

(loom.graph.WeightedFlyGraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fweight","fweight",1299924141),self__.fweight,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start","start",-355208981),self__.start,null))], null),self__.__extmap));
}));

(loom.graph.WeightedFlyGraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__52799){
var self__ = this;
var this__4438__auto____$1 = this;
return (new loom.graph.WeightedFlyGraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fweight,self__.start,G__52799,self__.__extmap,self__.__hash));
}));

(loom.graph.WeightedFlyGraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4445__auto__,(0)),cljs.core._nth(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(loom.graph.WeightedFlyGraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fnodes","fnodes",1004698034,null),new cljs.core.Symbol(null,"fedges","fedges",2140205450,null),new cljs.core.Symbol(null,"fsuccessors","fsuccessors",-826676562,null),new cljs.core.Symbol(null,"fweight","fweight",-1354511628,null),new cljs.core.Symbol(null,"start","start",1285322546,null)], null);
}));

(loom.graph.WeightedFlyGraph.cljs$lang$type = true);

(loom.graph.WeightedFlyGraph.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"loom.graph/WeightedFlyGraph",null,(1),null));
}));

(loom.graph.WeightedFlyGraph.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"loom.graph/WeightedFlyGraph");
}));

/**
 * Positional factory function for loom.graph/WeightedFlyGraph.
 */
loom.graph.__GT_WeightedFlyGraph = (function loom$graph$__GT_WeightedFlyGraph(fnodes,fedges,fsuccessors,fweight,start){
return (new loom.graph.WeightedFlyGraph(fnodes,fedges,fsuccessors,fweight,start,null,null,null));
});

/**
 * Factory function for loom.graph/WeightedFlyGraph, taking a map of keywords to field values.
 */
loom.graph.map__GT_WeightedFlyGraph = (function loom$graph$map__GT_WeightedFlyGraph(G__52803){
var extmap__4478__auto__ = (function (){var G__52833 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__52803,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"fweight","fweight",1299924141),new cljs.core.Keyword(null,"start","start",-355208981)], 0));
if(cljs.core.record_QMARK_(G__52803)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__52833);
} else {
return G__52833;
}
})();
return (new loom.graph.WeightedFlyGraph(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(G__52803),new cljs.core.Keyword(null,"fedges","fedges",499673923).cljs$core$IFn$_invoke$arity$1(G__52803),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207).cljs$core$IFn$_invoke$arity$1(G__52803),new cljs.core.Keyword(null,"fweight","fweight",1299924141).cljs$core$IFn$_invoke$arity$1(G__52803),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(G__52803),null,cljs.core.not_empty(extmap__4478__auto__),null));
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
(loom.graph.WeightedFlyDigraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(loom.graph.WeightedFlyDigraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k52841,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__52846 = k52841;
var G__52846__$1 = (((G__52846 instanceof cljs.core.Keyword))?G__52846.fqn:null);
switch (G__52846__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k52841,else__4442__auto__);

}
}));

(loom.graph.WeightedFlyDigraph.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__52847){
var vec__52848 = p__52847;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52848,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52848,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(loom.graph.WeightedFlyDigraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#loom.graph.WeightedFlyDigraph{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),self__.fpredecessors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fweight","fweight",1299924141),self__.fweight],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start","start",-355208981),self__.start],null))], null),self__.__extmap));
}));

(loom.graph.WeightedFlyDigraph.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__52840){
var self__ = this;
var G__52840__$1 = this;
return (new cljs.core.RecordIter((0),G__52840__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),new cljs.core.Keyword(null,"fweight","fweight",1299924141),new cljs.core.Keyword(null,"start","start",-355208981)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(loom.graph.WeightedFlyDigraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(loom.graph.WeightedFlyDigraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,self__.__hash));
}));

(loom.graph.WeightedFlyDigraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (6 + cljs.core.count(self__.__extmap));
}));

(loom.graph.WeightedFlyDigraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (coll__4436__auto__){
return (788097524 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
})(this__4435__auto____$1);
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(loom.graph.WeightedFlyDigraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this52842,other52843){
var self__ = this;
var this52842__$1 = this;
return (((!((other52843 == null)))) && ((this52842__$1.constructor === other52843.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52842__$1.fnodes,other52843.fnodes)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52842__$1.fedges,other52843.fedges)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52842__$1.fsuccessors,other52843.fsuccessors)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52842__$1.fpredecessors,other52843.fpredecessors)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52842__$1.fweight,other52843.fweight)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52842__$1.start,other52843.start)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52842__$1.__extmap,other52843.__extmap)));
}));

(loom.graph.WeightedFlyDigraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"fedges","fedges",499673923),null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),null,new cljs.core.Keyword(null,"start","start",-355208981),null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),null,new cljs.core.Keyword(null,"fweight","fweight",1299924141),null,new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.fweight,self__.start,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(loom.graph.WeightedFlyDigraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__52840){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__52862 = cljs.core.keyword_identical_QMARK_;
var expr__52863 = k__4447__auto__;
if(cljs.core.truth_((pred__52862.cljs$core$IFn$_invoke$arity$2 ? pred__52862.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),expr__52863) : pred__52862.call(null,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),expr__52863)))){
return (new loom.graph.WeightedFlyDigraph(G__52840,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52862.cljs$core$IFn$_invoke$arity$2 ? pred__52862.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fedges","fedges",499673923),expr__52863) : pred__52862.call(null,new cljs.core.Keyword(null,"fedges","fedges",499673923),expr__52863)))){
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,G__52840,self__.fsuccessors,self__.fpredecessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52862.cljs$core$IFn$_invoke$arity$2 ? pred__52862.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),expr__52863) : pred__52862.call(null,new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),expr__52863)))){
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,G__52840,self__.fpredecessors,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52862.cljs$core$IFn$_invoke$arity$2 ? pred__52862.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),expr__52863) : pred__52862.call(null,new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),expr__52863)))){
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,G__52840,self__.fweight,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52862.cljs$core$IFn$_invoke$arity$2 ? pred__52862.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fweight","fweight",1299924141),expr__52863) : pred__52862.call(null,new cljs.core.Keyword(null,"fweight","fweight",1299924141),expr__52863)))){
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,G__52840,self__.start,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52862.cljs$core$IFn$_invoke$arity$2 ? pred__52862.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"start","start",-355208981),expr__52863) : pred__52862.call(null,new cljs.core.Keyword(null,"start","start",-355208981),expr__52863)))){
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.fweight,G__52840,self__.__meta,self__.__extmap,null));
} else {
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.fweight,self__.start,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__52840),null));
}
}
}
}
}
}
}));

(loom.graph.WeightedFlyDigraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),self__.fnodes,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fedges","fedges",499673923),self__.fedges,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),self__.fsuccessors,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),self__.fpredecessors,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fweight","fweight",1299924141),self__.fweight,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start","start",-355208981),self__.start,null))], null),self__.__extmap));
}));

(loom.graph.WeightedFlyDigraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__52840){
var self__ = this;
var this__4438__auto____$1 = this;
return (new loom.graph.WeightedFlyDigraph(self__.fnodes,self__.fedges,self__.fsuccessors,self__.fpredecessors,self__.fweight,self__.start,G__52840,self__.__extmap,self__.__hash));
}));

(loom.graph.WeightedFlyDigraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4445__auto__,(0)),cljs.core._nth(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(loom.graph.WeightedFlyDigraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fnodes","fnodes",1004698034,null),new cljs.core.Symbol(null,"fedges","fedges",2140205450,null),new cljs.core.Symbol(null,"fsuccessors","fsuccessors",-826676562,null),new cljs.core.Symbol(null,"fpredecessors","fpredecessors",227702593,null),new cljs.core.Symbol(null,"fweight","fweight",-1354511628,null),new cljs.core.Symbol(null,"start","start",1285322546,null)], null);
}));

(loom.graph.WeightedFlyDigraph.cljs$lang$type = true);

(loom.graph.WeightedFlyDigraph.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"loom.graph/WeightedFlyDigraph",null,(1),null));
}));

(loom.graph.WeightedFlyDigraph.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"loom.graph/WeightedFlyDigraph");
}));

/**
 * Positional factory function for loom.graph/WeightedFlyDigraph.
 */
loom.graph.__GT_WeightedFlyDigraph = (function loom$graph$__GT_WeightedFlyDigraph(fnodes,fedges,fsuccessors,fpredecessors,fweight,start){
return (new loom.graph.WeightedFlyDigraph(fnodes,fedges,fsuccessors,fpredecessors,fweight,start,null,null,null));
});

/**
 * Factory function for loom.graph/WeightedFlyDigraph, taking a map of keywords to field values.
 */
loom.graph.map__GT_WeightedFlyDigraph = (function loom$graph$map__GT_WeightedFlyDigraph(G__52844){
var extmap__4478__auto__ = (function (){var G__52873 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__52844,new cljs.core.Keyword(null,"fnodes","fnodes",-635833493),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"fedges","fedges",499673923),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207),new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934),new cljs.core.Keyword(null,"fweight","fweight",1299924141),new cljs.core.Keyword(null,"start","start",-355208981)], 0));
if(cljs.core.record_QMARK_(G__52844)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__52873);
} else {
return G__52873;
}
})();
return (new loom.graph.WeightedFlyDigraph(new cljs.core.Keyword(null,"fnodes","fnodes",-635833493).cljs$core$IFn$_invoke$arity$1(G__52844),new cljs.core.Keyword(null,"fedges","fedges",499673923).cljs$core$IFn$_invoke$arity$1(G__52844),new cljs.core.Keyword(null,"fsuccessors","fsuccessors",1827759207).cljs$core$IFn$_invoke$arity$1(G__52844),new cljs.core.Keyword(null,"fpredecessors","fpredecessors",-1412828934).cljs$core$IFn$_invoke$arity$1(G__52844),new cljs.core.Keyword(null,"fweight","fweight",1299924141).cljs$core$IFn$_invoke$arity$1(G__52844),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(G__52844),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

(loom.graph.FlyGraph.prototype.loom$graph$Graph$ = cljs.core.PROTOCOL_SENTINEL);

(loom.graph.FlyGraph.prototype.loom$graph$Graph$nodes$arity$1 = (function (g){
var g__$1 = this;
if(cljs.core.truth_((function (){var or__4185__auto__ = g__$1.fnodes;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.not(g__$1.start);
}
})())){
return loom.graph.call_or_return(g__$1.fnodes);
} else {
return loom.alg_generic.bf_traverse(loom.graph.successors.cljs$core$IFn$_invoke$arity$1(g__$1),g__$1.start);
}
}));

(loom.graph.FlyGraph.prototype.loom$graph$Graph$edges$arity$1 = (function (g){
var g__$1 = this;
if(cljs.core.truth_(g__$1.fedges)){
return loom.graph.call_or_return(g__$1.fedges);
} else {
var iter__4582__auto__ = (function loom$graph$iter__52878(s__52879){
return (new cljs.core.LazySeq(null,(function (){
var s__52879__$1 = s__52879;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__52879__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var n = cljs.core.first(xs__6292__auto__);
var iterys__4578__auto__ = ((function (s__52879__$1,n,xs__6292__auto__,temp__5735__auto__,g__$1){
return (function loom$graph$iter__52878_$_iter__52880(s__52881){
return (new cljs.core.LazySeq(null,((function (s__52879__$1,n,xs__6292__auto__,temp__5735__auto__,g__$1){
return (function (){
var s__52881__$1 = s__52881;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__52881__$1);
if(temp__5735__auto____$1){
var s__52881__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__52881__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__52881__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__52883 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__52882 = (0);
while(true){
if((i__52882 < size__4581__auto__)){
var nbr = cljs.core._nth(c__4580__auto__,i__52882);
cljs.core.chunk_append(b__52883,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null));

var G__53585 = (i__52882 + (1));
i__52882 = G__53585;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52883),loom$graph$iter__52878_$_iter__52880(cljs.core.chunk_rest(s__52881__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52883),null);
}
} else {
var nbr = cljs.core.first(s__52881__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null),loom$graph$iter__52878_$_iter__52880(cljs.core.rest(s__52881__$2)));
}
} else {
return null;
}
break;
}
});})(s__52879__$1,n,xs__6292__auto__,temp__5735__auto__,g__$1))
,null,null));
});})(s__52879__$1,n,xs__6292__auto__,temp__5735__auto__,g__$1))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g__$1,n)));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,loom$graph$iter__52878(cljs.core.rest(s__52879__$1)));
} else {
var G__53588 = cljs.core.rest(s__52879__$1);
s__52879__$1 = G__53588;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(loom.graph.nodes(g__$1));
}
}));

(loom.graph.FlyGraph.prototype.loom$graph$Graph$successors_STAR_$arity$2 = (function (g,node){
var g__$1 = this;
return loom.graph.call_or_return.cljs$core$IFn$_invoke$arity$variadic(g__$1.fsuccessors,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([node], 0));
}));

(loom.graph.FlyGraph.prototype.loom$graph$Graph$out_degree$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.count(loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g__$1,node));
}));

(loom.graph.FlyGraph.prototype.loom$graph$Graph$out_edges$arity$2 = (function (g,node){
var g__$1 = this;
var iter__4582__auto__ = (function loom$graph$iter__52888(s__52889){
return (new cljs.core.LazySeq(null,(function (){
var s__52889__$1 = s__52889;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__52889__$1);
if(temp__5735__auto__){
var s__52889__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__52889__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__52889__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__52891 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__52890 = (0);
while(true){
if((i__52890 < size__4581__auto__)){
var n2 = cljs.core._nth(c__4580__auto__,i__52890);
cljs.core.chunk_append(b__52891,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__53591 = (i__52890 + (1));
i__52890 = G__53591;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52891),loom$graph$iter__52888(cljs.core.chunk_rest(s__52889__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52891),null);
}
} else {
var n2 = cljs.core.first(s__52889__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__52888(cljs.core.rest(s__52889__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g__$1,node));
}));

(loom.graph.FlyGraph.prototype.loom$graph$Graph$has_node_QMARK_$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([node]),loom.graph.nodes(g__$1));
}));

(loom.graph.FlyGraph.prototype.loom$graph$Graph$has_edge_QMARK_$arity$3 = (function (g,n1,n2){
var g__$1 = this;
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n1,n2], null)]),loom.graph.edges(g__$1));
}));
(loom.graph.FlyDigraph.prototype.loom$graph$Graph$ = cljs.core.PROTOCOL_SENTINEL);

(loom.graph.FlyDigraph.prototype.loom$graph$Graph$nodes$arity$1 = (function (g){
var g__$1 = this;
if(cljs.core.truth_((function (){var or__4185__auto__ = g__$1.fnodes;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.not(g__$1.start);
}
})())){
return loom.graph.call_or_return(g__$1.fnodes);
} else {
return loom.alg_generic.bf_traverse(loom.graph.successors.cljs$core$IFn$_invoke$arity$1(g__$1),g__$1.start);
}
}));

(loom.graph.FlyDigraph.prototype.loom$graph$Graph$edges$arity$1 = (function (g){
var g__$1 = this;
if(cljs.core.truth_(g__$1.fedges)){
return loom.graph.call_or_return(g__$1.fedges);
} else {
var iter__4582__auto__ = (function loom$graph$iter__52902(s__52903){
return (new cljs.core.LazySeq(null,(function (){
var s__52903__$1 = s__52903;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__52903__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var n = cljs.core.first(xs__6292__auto__);
var iterys__4578__auto__ = ((function (s__52903__$1,n,xs__6292__auto__,temp__5735__auto__,g__$1){
return (function loom$graph$iter__52902_$_iter__52904(s__52905){
return (new cljs.core.LazySeq(null,((function (s__52903__$1,n,xs__6292__auto__,temp__5735__auto__,g__$1){
return (function (){
var s__52905__$1 = s__52905;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__52905__$1);
if(temp__5735__auto____$1){
var s__52905__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__52905__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__52905__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__52907 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__52906 = (0);
while(true){
if((i__52906 < size__4581__auto__)){
var nbr = cljs.core._nth(c__4580__auto__,i__52906);
cljs.core.chunk_append(b__52907,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null));

var G__53595 = (i__52906 + (1));
i__52906 = G__53595;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52907),loom$graph$iter__52902_$_iter__52904(cljs.core.chunk_rest(s__52905__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52907),null);
}
} else {
var nbr = cljs.core.first(s__52905__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null),loom$graph$iter__52902_$_iter__52904(cljs.core.rest(s__52905__$2)));
}
} else {
return null;
}
break;
}
});})(s__52903__$1,n,xs__6292__auto__,temp__5735__auto__,g__$1))
,null,null));
});})(s__52903__$1,n,xs__6292__auto__,temp__5735__auto__,g__$1))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g__$1,n)));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,loom$graph$iter__52902(cljs.core.rest(s__52903__$1)));
} else {
var G__53598 = cljs.core.rest(s__52903__$1);
s__52903__$1 = G__53598;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(loom.graph.nodes(g__$1));
}
}));

(loom.graph.FlyDigraph.prototype.loom$graph$Graph$successors_STAR_$arity$2 = (function (g,node){
var g__$1 = this;
return loom.graph.call_or_return.cljs$core$IFn$_invoke$arity$variadic(g__$1.fsuccessors,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([node], 0));
}));

(loom.graph.FlyDigraph.prototype.loom$graph$Graph$out_degree$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.count(loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g__$1,node));
}));

(loom.graph.FlyDigraph.prototype.loom$graph$Graph$out_edges$arity$2 = (function (g,node){
var g__$1 = this;
var iter__4582__auto__ = (function loom$graph$iter__52912(s__52913){
return (new cljs.core.LazySeq(null,(function (){
var s__52913__$1 = s__52913;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__52913__$1);
if(temp__5735__auto__){
var s__52913__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__52913__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__52913__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__52915 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__52914 = (0);
while(true){
if((i__52914 < size__4581__auto__)){
var n2 = cljs.core._nth(c__4580__auto__,i__52914);
cljs.core.chunk_append(b__52915,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__53600 = (i__52914 + (1));
i__52914 = G__53600;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52915),loom$graph$iter__52912(cljs.core.chunk_rest(s__52913__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52915),null);
}
} else {
var n2 = cljs.core.first(s__52913__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__52912(cljs.core.rest(s__52913__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g__$1,node));
}));

(loom.graph.FlyDigraph.prototype.loom$graph$Graph$has_node_QMARK_$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([node]),loom.graph.nodes(g__$1));
}));

(loom.graph.FlyDigraph.prototype.loom$graph$Graph$has_edge_QMARK_$arity$3 = (function (g,n1,n2){
var g__$1 = this;
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n1,n2], null)]),loom.graph.edges(g__$1));
}));

(loom.graph.FlyDigraph.prototype.loom$graph$Digraph$ = cljs.core.PROTOCOL_SENTINEL);

(loom.graph.FlyDigraph.prototype.loom$graph$Digraph$predecessors_STAR_$arity$2 = (function (g,node){
var g__$1 = this;
return loom.graph.call_or_return.cljs$core$IFn$_invoke$arity$variadic(g__$1.fpredecessors,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([node], 0));
}));

(loom.graph.FlyDigraph.prototype.loom$graph$Digraph$in_degree$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.count(loom.graph.predecessors.cljs$core$IFn$_invoke$arity$2(g__$1,node));
}));

(loom.graph.FlyDigraph.prototype.loom$graph$Digraph$in_edges$arity$2 = (function (g,node){
var g__$1 = this;
var iter__4582__auto__ = (function loom$graph$iter__52941(s__52942){
return (new cljs.core.LazySeq(null,(function (){
var s__52942__$1 = s__52942;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__52942__$1);
if(temp__5735__auto__){
var s__52942__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__52942__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__52942__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__52944 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__52943 = (0);
while(true){
if((i__52943 < size__4581__auto__)){
var n2 = cljs.core._nth(c__4580__auto__,i__52943);
cljs.core.chunk_append(b__52944,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,node], null));

var G__53602 = (i__52943 + (1));
i__52943 = G__53602;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52944),loom$graph$iter__52941(cljs.core.chunk_rest(s__52942__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52944),null);
}
} else {
var n2 = cljs.core.first(s__52942__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,node], null),loom$graph$iter__52941(cljs.core.rest(s__52942__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(loom.graph.predecessors.cljs$core$IFn$_invoke$arity$2(g__$1,node));
}));
(loom.graph.WeightedFlyGraph.prototype.loom$graph$Graph$ = cljs.core.PROTOCOL_SENTINEL);

(loom.graph.WeightedFlyGraph.prototype.loom$graph$Graph$nodes$arity$1 = (function (g){
var g__$1 = this;
if(cljs.core.truth_((function (){var or__4185__auto__ = g__$1.fnodes;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.not(g__$1.start);
}
})())){
return loom.graph.call_or_return(g__$1.fnodes);
} else {
return loom.alg_generic.bf_traverse(loom.graph.successors.cljs$core$IFn$_invoke$arity$1(g__$1),g__$1.start);
}
}));

(loom.graph.WeightedFlyGraph.prototype.loom$graph$Graph$edges$arity$1 = (function (g){
var g__$1 = this;
if(cljs.core.truth_(g__$1.fedges)){
return loom.graph.call_or_return(g__$1.fedges);
} else {
var iter__4582__auto__ = (function loom$graph$iter__52947(s__52948){
return (new cljs.core.LazySeq(null,(function (){
var s__52948__$1 = s__52948;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__52948__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var n = cljs.core.first(xs__6292__auto__);
var iterys__4578__auto__ = ((function (s__52948__$1,n,xs__6292__auto__,temp__5735__auto__,g__$1){
return (function loom$graph$iter__52947_$_iter__52949(s__52950){
return (new cljs.core.LazySeq(null,((function (s__52948__$1,n,xs__6292__auto__,temp__5735__auto__,g__$1){
return (function (){
var s__52950__$1 = s__52950;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__52950__$1);
if(temp__5735__auto____$1){
var s__52950__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__52950__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__52950__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__52952 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__52951 = (0);
while(true){
if((i__52951 < size__4581__auto__)){
var nbr = cljs.core._nth(c__4580__auto__,i__52951);
cljs.core.chunk_append(b__52952,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null));

var G__53606 = (i__52951 + (1));
i__52951 = G__53606;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52952),loom$graph$iter__52947_$_iter__52949(cljs.core.chunk_rest(s__52950__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52952),null);
}
} else {
var nbr = cljs.core.first(s__52950__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null),loom$graph$iter__52947_$_iter__52949(cljs.core.rest(s__52950__$2)));
}
} else {
return null;
}
break;
}
});})(s__52948__$1,n,xs__6292__auto__,temp__5735__auto__,g__$1))
,null,null));
});})(s__52948__$1,n,xs__6292__auto__,temp__5735__auto__,g__$1))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g__$1,n)));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,loom$graph$iter__52947(cljs.core.rest(s__52948__$1)));
} else {
var G__53608 = cljs.core.rest(s__52948__$1);
s__52948__$1 = G__53608;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(loom.graph.nodes(g__$1));
}
}));

(loom.graph.WeightedFlyGraph.prototype.loom$graph$Graph$successors_STAR_$arity$2 = (function (g,node){
var g__$1 = this;
return loom.graph.call_or_return.cljs$core$IFn$_invoke$arity$variadic(g__$1.fsuccessors,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([node], 0));
}));

(loom.graph.WeightedFlyGraph.prototype.loom$graph$Graph$out_degree$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.count(loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g__$1,node));
}));

(loom.graph.WeightedFlyGraph.prototype.loom$graph$Graph$out_edges$arity$2 = (function (g,node){
var g__$1 = this;
var iter__4582__auto__ = (function loom$graph$iter__52958(s__52959){
return (new cljs.core.LazySeq(null,(function (){
var s__52959__$1 = s__52959;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__52959__$1);
if(temp__5735__auto__){
var s__52959__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__52959__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__52959__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__52961 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__52960 = (0);
while(true){
if((i__52960 < size__4581__auto__)){
var n2 = cljs.core._nth(c__4580__auto__,i__52960);
cljs.core.chunk_append(b__52961,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__53611 = (i__52960 + (1));
i__52960 = G__53611;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52961),loom$graph$iter__52958(cljs.core.chunk_rest(s__52959__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52961),null);
}
} else {
var n2 = cljs.core.first(s__52959__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__52958(cljs.core.rest(s__52959__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g__$1,node));
}));

(loom.graph.WeightedFlyGraph.prototype.loom$graph$Graph$has_node_QMARK_$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([node]),loom.graph.nodes(g__$1));
}));

(loom.graph.WeightedFlyGraph.prototype.loom$graph$Graph$has_edge_QMARK_$arity$3 = (function (g,n1,n2){
var g__$1 = this;
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n1,n2], null)]),loom.graph.edges(g__$1));
}));

(loom.graph.WeightedFlyGraph.prototype.loom$graph$WeightedGraph$ = cljs.core.PROTOCOL_SENTINEL);

(loom.graph.WeightedFlyGraph.prototype.loom$graph$WeightedGraph$weight_STAR_$arity$2 = (function (g,e){
var g__$1 = this;
return loom.graph.weight.cljs$core$IFn$_invoke$arity$3(g__$1,loom.graph.src(e),loom.graph.dest(e));
}));

(loom.graph.WeightedFlyGraph.prototype.loom$graph$WeightedGraph$weight_STAR_$arity$3 = (function (g,n1,n2){
var g__$1 = this;
return loom.graph.call_or_return.cljs$core$IFn$_invoke$arity$variadic(g__$1.fweight,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([n1,n2], 0));
}));
(loom.graph.WeightedFlyDigraph.prototype.loom$graph$Graph$ = cljs.core.PROTOCOL_SENTINEL);

(loom.graph.WeightedFlyDigraph.prototype.loom$graph$Graph$nodes$arity$1 = (function (g){
var g__$1 = this;
if(cljs.core.truth_((function (){var or__4185__auto__ = g__$1.fnodes;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.not(g__$1.start);
}
})())){
return loom.graph.call_or_return(g__$1.fnodes);
} else {
return loom.alg_generic.bf_traverse(loom.graph.successors.cljs$core$IFn$_invoke$arity$1(g__$1),g__$1.start);
}
}));

(loom.graph.WeightedFlyDigraph.prototype.loom$graph$Graph$edges$arity$1 = (function (g){
var g__$1 = this;
if(cljs.core.truth_(g__$1.fedges)){
return loom.graph.call_or_return(g__$1.fedges);
} else {
var iter__4582__auto__ = (function loom$graph$iter__52981(s__52982){
return (new cljs.core.LazySeq(null,(function (){
var s__52982__$1 = s__52982;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__52982__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var n = cljs.core.first(xs__6292__auto__);
var iterys__4578__auto__ = ((function (s__52982__$1,n,xs__6292__auto__,temp__5735__auto__,g__$1){
return (function loom$graph$iter__52981_$_iter__52983(s__52984){
return (new cljs.core.LazySeq(null,((function (s__52982__$1,n,xs__6292__auto__,temp__5735__auto__,g__$1){
return (function (){
var s__52984__$1 = s__52984;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__52984__$1);
if(temp__5735__auto____$1){
var s__52984__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__52984__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__52984__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__52986 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__52985 = (0);
while(true){
if((i__52985 < size__4581__auto__)){
var nbr = cljs.core._nth(c__4580__auto__,i__52985);
cljs.core.chunk_append(b__52986,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null));

var G__53615 = (i__52985 + (1));
i__52985 = G__53615;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52986),loom$graph$iter__52981_$_iter__52983(cljs.core.chunk_rest(s__52984__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52986),null);
}
} else {
var nbr = cljs.core.first(s__52984__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null),loom$graph$iter__52981_$_iter__52983(cljs.core.rest(s__52984__$2)));
}
} else {
return null;
}
break;
}
});})(s__52982__$1,n,xs__6292__auto__,temp__5735__auto__,g__$1))
,null,null));
});})(s__52982__$1,n,xs__6292__auto__,temp__5735__auto__,g__$1))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g__$1,n)));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,loom$graph$iter__52981(cljs.core.rest(s__52982__$1)));
} else {
var G__53617 = cljs.core.rest(s__52982__$1);
s__52982__$1 = G__53617;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(loom.graph.nodes(g__$1));
}
}));

(loom.graph.WeightedFlyDigraph.prototype.loom$graph$Graph$successors_STAR_$arity$2 = (function (g,node){
var g__$1 = this;
return loom.graph.call_or_return.cljs$core$IFn$_invoke$arity$variadic(g__$1.fsuccessors,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([node], 0));
}));

(loom.graph.WeightedFlyDigraph.prototype.loom$graph$Graph$out_degree$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.count(loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g__$1,node));
}));

(loom.graph.WeightedFlyDigraph.prototype.loom$graph$Graph$out_edges$arity$2 = (function (g,node){
var g__$1 = this;
var iter__4582__auto__ = (function loom$graph$iter__52993(s__52994){
return (new cljs.core.LazySeq(null,(function (){
var s__52994__$1 = s__52994;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__52994__$1);
if(temp__5735__auto__){
var s__52994__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__52994__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__52994__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__52996 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__52995 = (0);
while(true){
if((i__52995 < size__4581__auto__)){
var n2 = cljs.core._nth(c__4580__auto__,i__52995);
cljs.core.chunk_append(b__52996,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null));

var G__53619 = (i__52995 + (1));
i__52995 = G__53619;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52996),loom$graph$iter__52993(cljs.core.chunk_rest(s__52994__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52996),null);
}
} else {
var n2 = cljs.core.first(s__52994__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,n2], null),loom$graph$iter__52993(cljs.core.rest(s__52994__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(loom.graph.successors.cljs$core$IFn$_invoke$arity$2(g__$1,node));
}));

(loom.graph.WeightedFlyDigraph.prototype.loom$graph$Graph$has_node_QMARK_$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([node]),loom.graph.nodes(g__$1));
}));

(loom.graph.WeightedFlyDigraph.prototype.loom$graph$Graph$has_edge_QMARK_$arity$3 = (function (g,n1,n2){
var g__$1 = this;
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n1,n2], null)]),loom.graph.edges(g__$1));
}));

(loom.graph.WeightedFlyDigraph.prototype.loom$graph$Digraph$ = cljs.core.PROTOCOL_SENTINEL);

(loom.graph.WeightedFlyDigraph.prototype.loom$graph$Digraph$predecessors_STAR_$arity$2 = (function (g,node){
var g__$1 = this;
return loom.graph.call_or_return.cljs$core$IFn$_invoke$arity$variadic(g__$1.fpredecessors,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([node], 0));
}));

(loom.graph.WeightedFlyDigraph.prototype.loom$graph$Digraph$in_degree$arity$2 = (function (g,node){
var g__$1 = this;
return cljs.core.count(loom.graph.predecessors.cljs$core$IFn$_invoke$arity$2(g__$1,node));
}));

(loom.graph.WeightedFlyDigraph.prototype.loom$graph$Digraph$in_edges$arity$2 = (function (g,node){
var g__$1 = this;
var iter__4582__auto__ = (function loom$graph$iter__53007(s__53008){
return (new cljs.core.LazySeq(null,(function (){
var s__53008__$1 = s__53008;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__53008__$1);
if(temp__5735__auto__){
var s__53008__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__53008__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__53008__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__53010 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__53009 = (0);
while(true){
if((i__53009 < size__4581__auto__)){
var n2 = cljs.core._nth(c__4580__auto__,i__53009);
cljs.core.chunk_append(b__53010,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,node], null));

var G__53621 = (i__53009 + (1));
i__53009 = G__53621;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53010),loom$graph$iter__53007(cljs.core.chunk_rest(s__53008__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53010),null);
}
} else {
var n2 = cljs.core.first(s__53008__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n2,node], null),loom$graph$iter__53007(cljs.core.rest(s__53008__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(loom.graph.predecessors.cljs$core$IFn$_invoke$arity$2(g__$1,node));
}));

(loom.graph.WeightedFlyDigraph.prototype.loom$graph$WeightedGraph$ = cljs.core.PROTOCOL_SENTINEL);

(loom.graph.WeightedFlyDigraph.prototype.loom$graph$WeightedGraph$weight_STAR_$arity$2 = (function (g,e){
var g__$1 = this;
return loom.graph.weight.cljs$core$IFn$_invoke$arity$3(g__$1,loom.graph.src(e),loom.graph.dest(e));
}));

(loom.graph.WeightedFlyDigraph.prototype.loom$graph$WeightedGraph$weight_STAR_$arity$3 = (function (g,n1,n2){
var g__$1 = this;
return loom.graph.call_or_return.cljs$core$IFn$_invoke$arity$variadic(g__$1.fweight,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([n1,n2], 0));
}));
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
var args__4795__auto__ = [];
var len__4789__auto___53623 = arguments.length;
var i__4790__auto___53624 = (0);
while(true){
if((i__4790__auto___53624 < len__4789__auto___53623)){
args__4795__auto__.push((arguments[i__4790__auto___53624]));

var G__53625 = (i__4790__auto___53624 + (1));
i__4790__auto___53624 = G__53625;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return loom.graph.add_path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(loom.graph.add_path.cljs$core$IFn$_invoke$arity$variadic = (function (g,nodes){
return loom.graph.add_edges_STAR_(g,cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),nodes));
}));

(loom.graph.add_path.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(loom.graph.add_path.cljs$lang$applyTo = (function (seq53018){
var G__53019 = cljs.core.first(seq53018);
var seq53018__$1 = cljs.core.next(seq53018);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53019,seq53018__$1);
}));

/**
 * Adds a cycle of edges connecting the given nodes in order
 */
loom.graph.add_cycle = (function loom$graph$add_cycle(var_args){
var args__4795__auto__ = [];
var len__4789__auto___53627 = arguments.length;
var i__4790__auto___53628 = (0);
while(true){
if((i__4790__auto___53628 < len__4789__auto___53627)){
args__4795__auto__.push((arguments[i__4790__auto___53628]));

var G__53629 = (i__4790__auto___53628 + (1));
i__4790__auto___53628 = G__53629;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return loom.graph.add_cycle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(loom.graph.add_cycle.cljs$core$IFn$_invoke$arity$variadic = (function (g,nodes){
return loom.graph.add_edges_STAR_(g,cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(nodes,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(nodes)], null))));
}));

(loom.graph.add_cycle.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(loom.graph.add_cycle.cljs$lang$applyTo = (function (seq53024){
var G__53025 = cljs.core.first(seq53024);
var seq53024__$1 = cljs.core.next(seq53024);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53025,seq53024__$1);
}));

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
var args__4795__auto__ = [];
var len__4789__auto___53637 = arguments.length;
var i__4790__auto___53638 = (0);
while(true){
if((i__4790__auto___53638 < len__4789__auto___53637)){
args__4795__auto__.push((arguments[i__4790__auto___53638]));

var G__53643 = (i__4790__auto___53638 + (1));
i__4790__auto___53638 = G__53643;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return loom.graph.build_graph.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(loom.graph.build_graph.cljs$core$IFn$_invoke$arity$variadic = (function (g,inits){
var build = (function loom$graph$build(g__$1,init){
if(loom.graph.graph_QMARK_(init)){
if(((loom.graph.weighted_QMARK_(g__$1)) && (loom.graph.weighted_QMARK_(init)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(loom.graph.add_edges,loom.graph.add_nodes_STAR_(g__$1,loom.graph.nodes(init)),(function (){var iter__4582__auto__ = (function loom$graph$build_$_iter__53108(s__53109){
return (new cljs.core.LazySeq(null,(function (){
var s__53109__$1 = s__53109;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__53109__$1);
if(temp__5735__auto__){
var s__53109__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__53109__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__53109__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__53111 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__53110 = (0);
while(true){
if((i__53110 < size__4581__auto__)){
var vec__53114 = cljs.core._nth(c__4580__auto__,i__53110);
var n1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53114,(0),null);
var n2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53114,(1),null);
cljs.core.chunk_append(b__53111,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [n1,n2,loom.graph.weight.cljs$core$IFn$_invoke$arity$3(init,n1,n2)], null));

var G__53647 = (i__53110 + (1));
i__53110 = G__53647;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53111),loom$graph$build_$_iter__53108(cljs.core.chunk_rest(s__53109__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53111),null);
}
} else {
var vec__53117 = cljs.core.first(s__53109__$2);
var n1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53117,(0),null);
var n2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53117,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [n1,n2,loom.graph.weight.cljs$core$IFn$_invoke$arity$3(init,n1,n2)], null),loom$graph$build_$_iter__53108(cljs.core.rest(s__53109__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(loom.graph.edges(init));
})()),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(g__$1),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(init)], 0)));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(loom.graph.add_edges_STAR_(loom.graph.add_nodes_STAR_(g__$1,loom.graph.nodes(init)),loom.graph.edges(init)),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(g__$1),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(init)], 0)));
}
} else {
if(cljs.core.map_QMARK_(init)){
var es = ((cljs.core.map_QMARK_(cljs.core.val(cljs.core.first(init))))?(function (){var iter__4582__auto__ = (function loom$graph$build_$_iter__53121(s__53122){
return (new cljs.core.LazySeq(null,(function (){
var s__53122__$1 = s__53122;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__53122__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var vec__53127 = cljs.core.first(xs__6292__auto__);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53127,(0),null);
var nbrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53127,(1),null);
var iterys__4578__auto__ = ((function (s__53122__$1,vec__53127,n,nbrs,xs__6292__auto__,temp__5735__auto__){
return (function loom$graph$build_$_iter__53121_$_iter__53123(s__53124){
return (new cljs.core.LazySeq(null,((function (s__53122__$1,vec__53127,n,nbrs,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__53124__$1 = s__53124;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__53124__$1);
if(temp__5735__auto____$1){
var s__53124__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__53124__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__53124__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__53126 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__53125 = (0);
while(true){
if((i__53125 < size__4581__auto__)){
var vec__53132 = cljs.core._nth(c__4580__auto__,i__53125);
var nbr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53132,(0),null);
var wt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53132,(1),null);
cljs.core.chunk_append(b__53126,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr,wt], null));

var G__53654 = (i__53125 + (1));
i__53125 = G__53654;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53126),loom$graph$build_$_iter__53121_$_iter__53123(cljs.core.chunk_rest(s__53124__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53126),null);
}
} else {
var vec__53135 = cljs.core.first(s__53124__$2);
var nbr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53135,(0),null);
var wt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53135,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr,wt], null),loom$graph$build_$_iter__53121_$_iter__53123(cljs.core.rest(s__53124__$2)));
}
} else {
return null;
}
break;
}
});})(s__53122__$1,vec__53127,n,nbrs,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__53122__$1,vec__53127,n,nbrs,xs__6292__auto__,temp__5735__auto__))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(nbrs));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,loom$graph$build_$_iter__53121(cljs.core.rest(s__53122__$1)));
} else {
var G__53656 = cljs.core.rest(s__53122__$1);
s__53122__$1 = G__53656;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(init);
})():(function (){var iter__4582__auto__ = (function loom$graph$build_$_iter__53138(s__53139){
return (new cljs.core.LazySeq(null,(function (){
var s__53139__$1 = s__53139;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__53139__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var vec__53147 = cljs.core.first(xs__6292__auto__);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53147,(0),null);
var nbrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53147,(1),null);
var iterys__4578__auto__ = ((function (s__53139__$1,vec__53147,n,nbrs,xs__6292__auto__,temp__5735__auto__){
return (function loom$graph$build_$_iter__53138_$_iter__53140(s__53141){
return (new cljs.core.LazySeq(null,((function (s__53139__$1,vec__53147,n,nbrs,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__53141__$1 = s__53141;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__53141__$1);
if(temp__5735__auto____$1){
var s__53141__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__53141__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__53141__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__53143 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__53142 = (0);
while(true){
if((i__53142 < size__4581__auto__)){
var nbr = cljs.core._nth(c__4580__auto__,i__53142);
cljs.core.chunk_append(b__53143,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null));

var G__53658 = (i__53142 + (1));
i__53142 = G__53658;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53143),loom$graph$build_$_iter__53138_$_iter__53140(cljs.core.chunk_rest(s__53141__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53143),null);
}
} else {
var nbr = cljs.core.first(s__53141__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,nbr], null),loom$graph$build_$_iter__53138_$_iter__53140(cljs.core.rest(s__53141__$2)));
}
} else {
return null;
}
break;
}
});})(s__53139__$1,vec__53147,n,nbrs,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__53139__$1,vec__53147,n,nbrs,xs__6292__auto__,temp__5735__auto__))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(nbrs));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,loom$graph$build_$_iter__53138(cljs.core.rest(s__53139__$1)));
} else {
var G__53660 = cljs.core.rest(s__53139__$1);
s__53139__$1 = G__53660;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(init);
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
}));

(loom.graph.build_graph.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(loom.graph.build_graph.cljs$lang$applyTo = (function (seq53056){
var G__53057 = cljs.core.first(seq53056);
var seq53056__$1 = cljs.core.next(seq53056);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53057,seq53056__$1);
}));

/**
 * Creates an unweighted, undirected graph. inits can be edges, adjacency maps,
 *   or graphs
 */
loom.graph.graph = (function loom$graph$graph(var_args){
var args__4795__auto__ = [];
var len__4789__auto___53662 = arguments.length;
var i__4790__auto___53663 = (0);
while(true){
if((i__4790__auto___53663 < len__4789__auto___53662)){
args__4795__auto__.push((arguments[i__4790__auto___53663]));

var G__53664 = (i__4790__auto___53663 + (1));
i__4790__auto___53663 = G__53664;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return loom.graph.graph.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(loom.graph.graph.cljs$core$IFn$_invoke$arity$variadic = (function (inits){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(loom.graph.build_graph,(new loom.graph.BasicEditableGraph(cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null)),inits);
}));

(loom.graph.graph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(loom.graph.graph.cljs$lang$applyTo = (function (seq53159){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53159));
}));

/**
 * Creates an unweighted, directed graph. inits can be edges, adjacency maps,
 *   or graphs
 */
loom.graph.digraph = (function loom$graph$digraph(var_args){
var args__4795__auto__ = [];
var len__4789__auto___53666 = arguments.length;
var i__4790__auto___53667 = (0);
while(true){
if((i__4790__auto___53667 < len__4789__auto___53666)){
args__4795__auto__.push((arguments[i__4790__auto___53667]));

var G__53668 = (i__4790__auto___53667 + (1));
i__4790__auto___53667 = G__53668;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return loom.graph.digraph.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(loom.graph.digraph.cljs$core$IFn$_invoke$arity$variadic = (function (inits){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(loom.graph.build_graph,(new loom.graph.BasicEditableDigraph(cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null)),inits);
}));

(loom.graph.digraph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(loom.graph.digraph.cljs$lang$applyTo = (function (seq53175){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53175));
}));

/**
 * Creates an weighted, undirected graph. inits can be edges, adjacency maps,
 *   or graphs
 */
loom.graph.weighted_graph = (function loom$graph$weighted_graph(var_args){
var args__4795__auto__ = [];
var len__4789__auto___53670 = arguments.length;
var i__4790__auto___53671 = (0);
while(true){
if((i__4790__auto___53671 < len__4789__auto___53670)){
args__4795__auto__.push((arguments[i__4790__auto___53671]));

var G__53672 = (i__4790__auto___53671 + (1));
i__4790__auto___53671 = G__53672;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return loom.graph.weighted_graph.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(loom.graph.weighted_graph.cljs$core$IFn$_invoke$arity$variadic = (function (inits){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(loom.graph.build_graph,(new loom.graph.BasicEditableWeightedGraph(cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null)),inits);
}));

(loom.graph.weighted_graph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(loom.graph.weighted_graph.cljs$lang$applyTo = (function (seq53187){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53187));
}));

/**
 * Creates an weighted, directed graph. inits can be edges, adjacency maps,
 *   or graphs
 */
loom.graph.weighted_digraph = (function loom$graph$weighted_digraph(var_args){
var args__4795__auto__ = [];
var len__4789__auto___53677 = arguments.length;
var i__4790__auto___53679 = (0);
while(true){
if((i__4790__auto___53679 < len__4789__auto___53677)){
args__4795__auto__.push((arguments[i__4790__auto___53679]));

var G__53681 = (i__4790__auto___53679 + (1));
i__4790__auto___53679 = G__53681;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return loom.graph.weighted_digraph.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(loom.graph.weighted_digraph.cljs$core$IFn$_invoke$arity$variadic = (function (inits){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(loom.graph.build_graph,(new loom.graph.BasicEditableWeightedDigraph(cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null)),inits);
}));

(loom.graph.weighted_digraph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(loom.graph.weighted_digraph.cljs$lang$applyTo = (function (seq53199){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53199));
}));

/**
 * Creates a read-only, ad-hoc graph which uses the provided functions
 *   to return values for nodes, edges, etc. If any members are not functions,
 *   they will be returned as-is. Edges can be inferred if nodes and
 *   successors are provided. Nodes and edges can be inferred if successors and
 *   start are provided.
 */
loom.graph.fly_graph = (function loom$graph$fly_graph(var_args){
var args__4795__auto__ = [];
var len__4789__auto___53683 = arguments.length;
var i__4790__auto___53684 = (0);
while(true){
if((i__4790__auto___53684 < len__4789__auto___53683)){
args__4795__auto__.push((arguments[i__4790__auto___53684]));

var G__53685 = (i__4790__auto___53684 + (1));
i__4790__auto___53684 = G__53685;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return loom.graph.fly_graph.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(loom.graph.fly_graph.cljs$core$IFn$_invoke$arity$variadic = (function (p__53223){
var map__53224 = p__53223;
var map__53224__$1 = (((((!((map__53224 == null))))?(((((map__53224.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53224.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53224):map__53224);
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53224__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var edges = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53224__$1,new cljs.core.Keyword(null,"edges","edges",-694791395));
var successors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53224__$1,new cljs.core.Keyword(null,"successors","successors",-1239296414));
var predecessors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53224__$1,new cljs.core.Keyword(null,"predecessors","predecessors",229913357));
var weight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53224__$1,new cljs.core.Keyword(null,"weight","weight",-1262796205));
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53224__$1,new cljs.core.Keyword(null,"start","start",-355208981));
if(cljs.core.truth_((function (){var and__4174__auto__ = predecessors;
if(cljs.core.truth_(and__4174__auto__)){
return weight;
} else {
return and__4174__auto__;
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
}));

(loom.graph.fly_graph.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(loom.graph.fly_graph.cljs$lang$applyTo = (function (seq53211){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53211));
}));


//# sourceMappingURL=loom.graph.js.map
