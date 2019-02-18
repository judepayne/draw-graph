# draw-graph Converts CSV1 & JGF (Two Graph description formats) to Graphviz Dot format

This library uses Graphviz to actually draw the graphs and their are a few places where to get the graph looking as you want, you have to know something about some of the graphviz options that are useful. These place are marked with a [*].
Graphviz is infinitely flexible but only a small portion of options are exposed through this library. In general, edge formats are specified in the data you specify for the description of the graph itself (see Section 1. below), whereas node, cluster and layout options can only be specified by a smaller number of higher level options that are described in Section 2. below.

## 1. Input and Output format details

### A. INPUT FORMATS
CSV1 and JGF share the same structure but differ in description of their 
data payloads. The overall structure is:

    { \"data-format\" : *format name*: i.e. \"csv1\" or \"jgf\"
      \"options\" : *a map of processing options* to be used in subsequent processing
      \"data\" : *the data, in i.e. CSV1 data format or JGF format

### B. CSV1 data format
Rules for *csv1 description of graph* format:
- a string (presumed from slurping a csv)
- two columns*
- each row specifies two nodes that are joined as an edge
- the header row specifies the format of the nodes,
e.g. `hierarchy:node_id:node_name:additional_fact1:...`
- : (colon) is used as the separator in the header and subsequent rows.
- Note: the string should use as a line separator as multiline strings
are not allowed in Json.
- [*] it's ok to have a third column an any/all rows describing an edge (not the header row). The third part of an edge definition specifies a set of Graphviz attributes about the edge in K,V form, using : again as a separator e.g. `color:red:label:important!` For more information about Graphviz edge attributes, please see here: https://www.graphviz.org/doc/info/attrs.html
Common ones include: `color` (Graphviz has a wide range of color names here: https://www.graphviz.org/doc/info/colors.html), `label` (a text label for the edge), `style` (e.g. set to 'dashed' or don't set for an undashed line), `penwidth` (the thickness of the edge, for example, try a value of 5 for a thick line).

### C. JGF data format
example:

    [[{'tree':'CRM','id':'0','name':'CRM'},{'tree':'CRM','id':'A','name':'Above The Line'}],
     [{'tree':'CRM','id':'A','name':'Above The Line'},...
     [{'id':'4'}{'id':'5'}{'color':'red','thickness':'2'}]..
     
i.e. A vector of graph edges, where each edge is two nodes and each node is a map of Keys and Values. The third row above demonstrates that it's possible to have a third map inside an edge definition, after the two nodes, that holds attributes of that edge.

### D. OUTPUT FORMAT: DOT
The format used for input into the Graphviz program.
See https://en.wikipedia.org/wiki/DOT_(graph_description_language)
The final (dot format) out is Json, in the form `{\"dot\" : *dot string*}`

## 2.OPTIONS

The possible options are:
`hide-leaves?` :true/false - will suppress (show as point nodes) the leaves of the graph.
`show-roots?` :true/false - will highlight root nodes in the graph as stars symbols.
`from-node` : a map describing all of part of a node in the graph e.g. {'id':'A'} which is used to filter a graph and only show that node and child nodes (recursively). This is useful to filter large graphs and just show selected parts.
`cluster-on` : cluster the graph on one of the keys in the node definition. For example, setting cluster-on to 'hierarchy' (see section B above) will create a new cluster in the graph every time that changes.
[*] `layout` : this is a graphviz setting that determines how the graph gets laid out. possible
settings are 'dot' 'fdp' 'neato' 'circo' & 'twopi'. Please note, that some of these don't support clustering. Please experiment. More information is available here: https://www.graphviz.org (under 'Roadmap'). 'dot' and 'neato' are usually your two first choices. 'dot' is alot faster than 'neato' for large graphs.

