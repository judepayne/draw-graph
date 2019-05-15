## How to use draw-graph



### Introduction<div id=“introduction” />

draw-graph allows you to produce graph/ network diagrams from simple data descriptions. Network diagrams show how things connect - boxes and arrows diagrams.

draw-graph is powered by Graphviz, a very capable (and complex!) library for displaying graph/ network diagrams. Unfortunately for the non-technical user, the input format for Graphviz, dot, can be rather complex. Although it can be written by hand, for large graphs, it’s often preferable to produce the dot format programmatically. draw-graph solves this problem by using a csv (comma separated values) input format that you would typically prepare in a spreadsheet before uploading or pasting into draw-graph.
draw-graph then gives you access to some of the key Graphviz settings (out of several hundred) for controlling the display in a simple way.

In addition to the graphviz functionality, draw-graph has both preprocessing and postprocessing stages.

Preprocessing allows for facilities like filtering the graph or finding paths through it. Postprocessing tweaks the appearance of the image returned by draw-graph to improve it.


### Basic graph terms<div id=“basic-graph-terms” />

**nodes** are nodes in your graph - the boxes on your diagram. Each node in draw-graph is just a map of keys and values which you define. In the data that you make describing the diagram you want, the keys are specified just once in the header row, and the values are specified for each node.

Nodes can be individually styled within the data you load into draw-graph. A node might participate in none, one or many..

**edges** are connections between two nodes in a graph - the arrows on your diagram. Edges can be individually styled within the data you load into draw-graph.

**clusters** are sections within the graph, best thought of as a collection of nodes. Clusters can be individually styled in the data you load into draw-graph.

Clusters are defined by your choosing the key (part of the definition of each node) that you want to cluster on. For example, imagine that there is a graph where part of the node definitions is its 'class'. If all the nodes have a value for 'class' which is always one of ‘cygnets’ ‘bluebirds’ and ‘pelicans’, the resulting graph display will have the nodes grouped into those three clusters.

As well as styling clusters, you can specify how they relate to each other to control the layout of the graph, whilst letting Graphviz get on with what its good at; the complex business of laying out nodes and edges. We'll get into how a little bit further down in the Input format section. Cluster relationships are useful in the `dot` layout - more below.


### Input format<div id=“input-format” />

Please use the **'Examples'** drop down on the main page to see what is achievable with draw-graph and see how the data specification of the graph is used to do that.


As previousyly mentioned, Nodes in draw-graph are each specified as a map of key value pairs, but to avoid you having to write down the keys over and over, keys are only specified once, in the header row. This works because, in draw-graph, *every node in a graph must have exactly the same keys* (even if for some nodes, a particular key doesn't have a value, so it's left blank).


####Working up the data

The draw-graph web does provide a small text area for working with the data but an easier way to work up the data is in a spreadsheet. For example:

![two trees facing one way](img/spreadsheet.png =600x350)

The data was typed in the columns to the left and then in the column marked as blue, a spreadsheet formula concatenates the contents of the previous columns together. When it was ready, the contents of that column were copied and paste into the draw-graph text area. 


####Special characters to avoid

draw-graph uses 4 special characters in its input format. Avoid these in the data that you supply. They are `|` `:` `+` and `,`

In the header row (below), avoid the character `/` in the specified keys as this has a special meaning. See fallback labels below.

The data that you load into draw-graph can have five different types of rows.


####1) The header row

The header row is a list of the keys in each node, separated by the colon character. It must always be started with `h:` For example:

    h:class:name:id

is a valid header row where the subsequent definition of each row should be a colon separated list of the values for `class`, `name` and `id`. The only character not allowed within each key itself is a comma.

The header row should always come first in the csv file you upload or data you type in to draw-graph's text entry box.


####2) Edges rows

Edge rows are used the specify the data that makes up the graph. An edge is just two nodes separated by a comma. Since the keys in each nodes have already been specified in the header row, only the values now need to be specified. An edge row should always be started with `e:` to tell draw-graph what type of row it is.

For example (assuming the header row above):

    Bluebird-class:Simon:1434,Yellow-class:Anita:20345

is a valid edge where the nodes are:

    class=Bluebird-class:name=Simon:id=1434

and

    class=Yellow-class:name=Anita:id=20345

When written out in key=value format.

As in the header row, a colon is used to separate the different values in the node.

You can also pack additional styling information into an edge row, both to style one or both of the nodes and the edge itself (i.e. the connector between nodes).

*Styling edges*

Optionally an edge row can have an additional comma after the data of the two nodes have been specified followed by a `|` character and then a list of keys and values that are used to specify how that particular edge is to be displayed. For example:

    Bluebird-class:Simon:1434,Yellow-class:Anita:20345,|color:deeppink:thickness:2

Since commas and colons are part of the data format, you should be very careful to strip them out of the data itself.

The edge attributes used to specify display of the edges are actually Graphviz attributes.

There’s a complete description of all attributes [here](https://www.graphviz.org/doc/info/attrs.html) and the various colours (also from Graphviz) are specified [here](https://www.graphviz.org/doc/info/colors.html).

Useful common ones include `label` (a text label for the edge), `style` (e.g. set to `dashed` or don't set for an undashed line, or set to `invis` for no line at all), `penwidth` (the thickness of the edge, for example, try a value of 5 for a thick line).

*Styling nodes*

Styling information for the nodes can be embedded in the node itself using the `|` character.

For example in the edge that we used previously:

    Bluebird-class:Simon:1434,Yellow-class:Anita:20345

adding

    Bluebird-class:Simon:1434|shape:septagon:fillcolor:blue:,Yellow-class:Anita:20345

will style the Simon node according to those Graphviz attributes specified. Please see the links just above for a description of all available attributes and colours.

One node in your graph might occur many times in the data you load, as that node participates in multiple edges. Styling it once is sufficient in the data.

Please see the same graphviz page as linked above for a comprehensive list of all the available attributes.


####3) Cluster Style rows

Cluster Style rows are not used to specify if/ how nodes should be put into clusters in the graph, but they are used just for styling the clusters. A cluster style row is always started with a `cs:`.

A cluster style row has the form:

    cs:Yellow-class|bgcolor:cornsilk1:style:rounded

Before the `|` you put the value of the cluster that you are styling, and after, a colon separated list of Graphviz key value pairs. Please see the same links as before.

If you click through the **Examples** on the main page, you’ll see how various effects can be achieved. There’s a section on more advanced layout tricks, where you need to understand more about Graphviz, further down on this page.

For a comprehensive list of all graphviz attributes that can be applied to nodes, edges and clusters, here's the [link](https://www.graphviz.org/doc/info/attrs.html) again.


####4) Cluster Edge rows and (5) Cluster to parent rows

The final two types of rows are really only useful when the `dot` layout is selected in the options. Graphviz' dot layout is probably the most useful, and with it we can get the closest to using Graphviz and draw-graph are a diagramming tool. The key concept to understand with dot is *rank*.

Please go back to the main page and select the 'Friendship graph' example and hit the 'draw-graph' button. In that graph (which is laid out by `dot`), The node 'Cristolene' has an edge that points to 'Shahar'. Graphviz then says that 'Sharhar' has a lower **rank** than 'Cristolene', and so is laid out 'below' it. I put below in quotes because you can lay out the graph top to bottom, left to right etc using the `rankdir` option.
In the same graph, see how there's an edge from 'kacey' in the pandas cluster to 'cosmo' in the brownbears cluster? That causes 'cosmo' to have a lower rank than 'kacey' and so the brownbears cluster starts lower down than the pandas one.
But what if you wanted to brownbears to be below pandas?

Add this definition line somewhere in the data lines and hit 'draw-graph' again.

    e:pandas:Bridget,brownbears:cosmo
    
We chose 'Bridget' because that node in the lowest ranked in pandas.

draw-graph automates this for you. Rather than specifying relationships between nodes to control cluster layout, you can specify *cluster edge rows* directly. cluster edge rows always start with a `ce:`

Delete the line you just added, and replace it with this one.

    ce:pandas:brownbears
    
and hit 'draw-graph' again.
brownbears is placed below pandas and the edges that draw-graph creates to control that are styled as invisible, so they don't appear in the display. Actually, they're stripped out of the svg by Graphviz while its creating it, so are not even present if you decide to edit the svg in an editor program later.
You can specify multiple cluster edges on a single `ce:` line so

    ce:pandas:brownbears:pandas:squirrels
    
will bring the squirrels cluster below pandas also. It's also fine to specify `ce:` relationships on multiple lines.

*Cluster->parent* rows are a bit different. They're for nesting clusters. Cluster->parent rows are started with a `cp:`.
Remove all the `ce:` lines you added above and instead, add this line to the data:

    cp:squirrels:pandas
    
which is used to denote that pandas is the parent cluster of squirrels. Hit 'draw-graph' again and you'll see the squirrels cluster moved inside the 'pandas' cluster at the position determined by the relative rank of the node within it to the other nodes inside pandas.

Now let's add a virtual node. Keeping the line above in place, add another new line to the data:

    cp:pandas:are they bears
    
The new cluster you just added, `are they bears`, is not styled yet, so add another line, a cluster style line like so:

    cs:are they bears|bgcolor:lightgray
    
Another example in the drop down list - Friendship cluster layout - shows a more complicated example of what can be achieved with cluster edge rows and cluster->parent rows. draw-graph adds these in order to get the most out of Graphviz' dot layout and help you produce 'what connects to what' style diagrams which are pretty common in the work place.


####Commenting out lines

Use a semi-colon ';' or a double semi-colon ';;' at the beginning or any line in the input data, apart from the header line which must always be present, to have draw-graph ignore the line. This is often useful while you're working.



####Splitting text labels

Please pull up the 'Friendship graph' example again.
Notice how the text of the 'cristolene' node is too wide and slightly extends over the egdes. Find the (single) row that specifies the 'cristoline' node and replace it with this:

    e:pandas:crist-+olene,pandas:sharhar
    
The plus `+` symbol is used to split text in a node label. There's just one thing to be careful of and that is the definition of that node is now literally `pandas:crist-+lene`, so if you wish to overflow text for a node where is one more than one edge (i.e. present in more than one row in the data) be sure to change the definition of the node in both, or Graphviz will think that they are two different nodes.


### Options<div id=“options” />

We’ve already covered how the styling of nodes, edges and clusters is embedded in the data definition itself. Options is for globally controlling either styling aspects for the whole graph, or for performing operations (e.g. filtering) on the whole graph.

Draw-graph splits the options into two sections, those provided by draw-graph itself and those which are pass throughs into graphviz settings.


####draw-graph options


`node label` is the key from your data to be used as the label on each node.

*Fallback labels*

Sometimes in one of your nodes, one of the values might be missing and it's valid that it's missing e.g. 

    Bluebird-class::1434
    
In this case, you can specify `node-label` with a fallback key to use, or multiple fallback keys for that matter. e.g. rather than just `name`, specify as `name/id` or even `name/id/class`


`cluster on` clusters the graph on one of the keys from your data. For example, setting cluster-on ‘class’ will group the graph by ‘class’.


`color on` controls how the color for a node is chosen. By default, draw-graph will generate a light random color for each node based on the setting for `cluster-on` unless you set `color-on` differently. Any node color specified directly in the input data will override this.


`node-tooltips` In the output image, node tooltips will appear when hovering over each node. `node-tooltips` should be specified as one or more of the keys in the input data. For example:

    name
    
or

    name/animal

`node-url` if one of the key - value pairs on your node data is a url. then that key can be selected here and in the output image, clicking on that node, will take you to the url (in a new browser tab page).


`filter-graph` allows you to specify filtering terms which are applied in the preprocessing stage. For example, pick the 'Architecture diagram' example and press draw-graph. In the example, the keys for the nodes and `view`, `function` and `application`. Set `filter-graph` to:

    function:Capture
    
and press draw-graph again.

Now set `filter-graph` to:

    function:Captue,function:Lifecycle
    
(a series of filter terms don't need to be based on the same key) and hit draw-graph again.


`paths` is a slightly more complex way of effectively filtering the graph. Pick the 'Architecture diagram' again and enter:

    function:Capture,function:Lifecycle|function:Reporting
    
`paths` is made up of two filter terms separated with the pipe character '|'. The graph is filtered both for the first filter terms and the second. Then a pathfinding algorithm is run between all combinations of the first set of nodes and the second. Any other nodes found on any of those paths (as well as the start and end nodes captured by the filter terms) are shown in the resulting graph.
`paths` is useful for answering questions about how certain domains connect and what do those connections pass through.


`ellide lower levels` will hide the <n> lowest levels (the 'leaf' nodes) in the graph.


`highlight roots?` :true/false - will highlight root nodes in the graph as stars symbols. Root nodes are nodes which don’t have any edges going into them.



**`post process`** set this true to have draw-graph postprocess the output image with the controls.

**Simulated annealing**

Simulated annealing is use in draw-graph to lay out clusters more optimally that Graphviz does. Here's a demo:
