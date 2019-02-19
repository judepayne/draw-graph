### Contents

[Introduction](#introduction)

[Basic Graph terminology](#basic-graph-terms)

[Input Format](#input-format)

[Options](#options)

[Saving the image](#saving)

[Layout tricks](#layout-tricks)



### Introduction<a name=“introduction”></a>

draw-graph allows you to produce graph/ network diagrams from simple data descriptions.

draw-graph is powered by Graphviz, a very capable (and complex!) library for displaying graph/ network diagrams. Unfortunately for the non-technical user, the input format for Graphviz, dot, can be rather complex. Although it can be written by hand, for large graphs, it’s often preferable to produce the dot format programmatically. draw-graph solves this problem by using a csv (comma separated values) input format that you would typically prepare in a spreadsheet before uploading or pasting into draw-graph.
draw-graph then gives you access to some of the key Graphviz settings (out of several hundred) for controlling the display in a simple way.


### Basic graph terms<a name=“basic-graph-terms”></a>

**nodes** are nodes in your graph. Sometimes called vertices. Nodes can be individually styled within the data you load into draw-graph. A node might participate in none, one or many

**edges** are connections between two nodes in a graph. Edges can be individually styled within the data you load into draw-graph.

**clusters** are sections within the graph, best thought of as a collection of nodes. Clusters can be individually styled the data you load into draw-graph.

Also, you can choose to cluster-on one part of the node values that you’ve specified. For example choosing to cluster on the say ‘class’ part of your nodes’ definitions, where within all the nodes can the graph ‘class’ can take three distinct values, say ‘cygnets’ ‘bluebirds’ and ‘pelicans’, will produce three clusters in the display.


### Input format<a name=“input-format”></a>

The data that you load into draw-graph can have three different types of rows.

A graph is made up from nodes and edges. In draw-graph, each node is a series of keys and and their values.

Every node in a graph must have exactly the same keys.

**1) The header row**

The header row is a list of the keys in each node, separated by the colon character. For example:

    class:name:id

is a valid list of keys. The only character not allowed within each key itself is a comma.

draw-graph always requires a header row as the first row in the data loaded to work.

**2) Edges rows**

Edge rows are used the specify the data that makes up the graph. An edge is just two nodes separated by a comma. Since the keys in each nodes have already been specified in the header row, only the values now need to be specified. 

For example (assuming the header row above):

    Bluebird-class:Simon:1434,Yellow-class,Anita,20345

is a valid edge where the nodes are:

    class=Bluebird-class,name=Simon,id=1434

and

    class=Yellow-class,name=Anita,id=20345

As in the header row, a colon is used to separate the different values in the node.

*Styling edges*

Optionally an edge row can have an additional comma after the data of the two nodes have been specified followed by a list of keys and values that are used to specify how that particular edge is to be displayed. For example:

    Bluebird-class:Simon:1434,Yellow-class,Anita,20345,color:deeppink:thickness:2

Since commas and colons are part of the data format, you should be very careful to strip them out of the data itself.

The edge attributes used to specify display of the edges are actually Graphviz attributes.

There’s a complete description of all attributes [here](https://www.graphviz.org/doc/info/attrs.html) and the various colours (also from Graphviz) are specified [here](https://www.graphviz.org/doc/info/colors.html).

Useful common ones include `label` (a text label for the edge), `style` (e.g. set to 'dashed' or don't set for an undashed line), `penwidth` (the thickness of the edge, for example, try a value of 5 for a thick line).

*Styling nodes*

Styling information for the nodes can be embedded in the node itself using the `#` character.

For example in the edge that we used previously:

    Bluebird-class:Simon:1434,Yellow-class,Anita,20345

adding

    Bluebird-class:Simon:1434#shape:septagon:fillcolor:blue:,Yellow-class,Anita,20345

will style the Simon node according to those Graphviz attributes specified. Please see the links just above for a description of all available attributes and colours.

One node in your graph might occur many times in the data you load, as that node participates in multiple edges. Styling it once is sufficient in the data.

**3) Cluster rows**

Cluster rows are not used to specify if/ how nodes should be put into clusters in the graph, but they are used just for styling the clusters.

A cluster row has the form:

    Yellow-class#bgcolor:cornsilk1:style:rounded

Before the `#` you put the value of the cluster that you are styling, and after, a colon separated list of Graphviz key value pairs. Please see the same links as before.

If you click through the **Examples** on the main page, you’ll see how various effects can be achieved. There’s a section on more advanced layout tricks, where you need to understand more about Graphviz, further down on this page.


### Options<a name=“options”></a>

We’ve already covered how the styling of nodes, edges and clusters is embedded in the data definition itself. Options is for globally controlling either styling aspects for the whole graph, or for performing operations (e.g. filtering) on the whole graph.

Here are details of the various controls within the options panel:

`hide leaves?` :true/false - will suppress (show as point nodes) the leaves of the graph. Leaf nodes in graph speak are any nodes which don’t have any edge coming out of them.

`show roots?` :true/false - will highlight root nodes in the graph as stars symbols. Root nodes are nodes which don’t have any edges going into them.

`node label` is the key from your data to be used as the label on each node.

*Fallback labels*

Sometimes in one of your nodes, one of the values might be missing and it's valid that it's missing e.g. 

    Bluebird-class::1434
    
In this case, you can specify `node-label` with a fallback key to use, or multiple fallback keys for that matter. e.g. rather than just `name`, specify as `name:id` or even `name:id:class`

`node shape` is a Graphviz setting which controls the style of node shape 

`cluster on` clusters the graph on one of the keys from your data. For example, setting cluster-on ‘class’ will group the graph by ‘class’.

`layout` : this is a Graphviz setting that determines how the graph gets laid out. possible settings are 'dot' 'fdp' 'neato' ‘circo’ ‘twopi’. Please note, that of these, several layouts do not support clustering. It’s worth experimenting with the layout options as these make dramatic differences to the look of the graph. More information is available [here.](https://www.graphviz.org) (under 'Roadmap'). Also, please click through the Examples and note the settings that are used for each.

**Please note** that for large graphs - more than a hundred edges - the ‘dot’ layout will be much faster than the other two.

`rankdir` is a Graphviz setting that only applies to the dot layout. It controls whether the graph is laid out left to right, top to bottom, etc.

`elide lower levels` is a draw-graph setting which will remove from the display of the graph (but will not touch your data) the number specified of the lower levels in the graph.

I’ve found this useful for large, especially tree like graphs, with several hundreds or even thousands of nodes, when you might want to produce an image that shows the upper structure of the tree but hides the (details of) the lower levels/ leaf nodes. `elide lower levels` is like a more powerful version of `hide leaves`.

`splines` is a Graphviz setting which controls the style of edges.

`overlap` is a Graphviz setting which controls whether/ how nodes are allowed to overlap.

`ranksep` is a Graphviz setting which specifies the gap (in inches) between different ranks in the graph. See ’Two facing trees’ in the Graphviz layout tricks section below.

`nodesep` is a Graphviz setting which specifies the gap (in inches) between nodes in the same rank.

`scale` is a Graphviz setting which scales the graph after layout.

`filter graph` is a draw-graph setting which allows you to ‘zoom in’ on a particular section in a (large) graph. In the text box, specify the value like

    id:30

Where id is one of the keys in each of the nodes and 30 is a particular value, i.e. a particular node.
In case you have more than one node whether id is 30, you can be more specific and specify, for example:

    class:Bluebird-class:id:30

filter graph will filter down to just the nodes meeting this/ these criteria.

For more information on any of the Graphviz settings, please see  [here](https://www.graphviz.org/doc/info/attrs.html)


### Saving the graph image<a name=“saving”></a>

You can save you image as an .svg file into the downloads folder that your browser uses.


### Graphviz layout tricks<a name=“layout-tricks”></a>

Here are some tips on how to solve certain graph layout challenges.

#### 1. Two facing trees

Sometimes you might want to show how the nodes in two tree-like clusters relate to each other, but can face a problem that both trees face the same way, when you would rather have them facing each other.
Here’s an example of the problem:
![two trees facing one way](img/two-trees1.png)

The trick to fixing this problem is to understand Graphviz’s concept of rank (in the dot layout).
In the image, prds:b2 points to grc:b1. That’s why the whole grc cluster is shifted to the right of prds.
We can fix this and get the grc cluster over to the right and facing back towards prds by reversing the direction of all the edges *just inside the grc cluster/tree*. We’ll also need to get the arrows inside the grc cluster to point the other way.

So for example the edge:

    grc:a1,grc:b1

Needs to become

    grc:b1,grc:a1,dir:back

If you do that for each of the internal edges of grc, the resulting image will look like so:
![two trees facing each other](img/two-trees2.png)

Finally, for larger trees when many connections between them, you might want to separate the two trees more. This can be accomplished by adding on an attribute to the edges *between the two trees* `minlen:5` - or any number for the ‘minimum length’ that you want.

Please see the ‘two facing trees’ example and its data for how this accomplished for two larger trees that need to face each other.
