goog.provide('draw_graph.help');
goog.require('cljs.core');
goog.require('draw_graph.utils');
goog.require('lib_draw_graph.anneal');
goog.require('lib_draw_graph.geometry');
goog.require('reagent.core');
goog.require('reagent.ratom');
goog.require('cljs.core.async');
draw_graph.help.section_1 = "## How to use draw-graph\n\n\n\n### Introduction<div id=\u201Cintroduction\u201D />\n\ndraw-graph allows you to produce graph/ network diagrams from simple data descriptions. Network diagrams show how things connect - boxes and arrows diagrams.\n\ndraw-graph is powered by Graphviz, a very capable (and complex!) library for displaying graph/ network diagrams. Unfortunately for the non-technical user, the input format for Graphviz, dot, can be rather complex. Although it can be written by hand, for large graphs, it\u2019s often preferable to produce the dot format programmatically. draw-graph solves this problem by using a csv (comma separated values) input format that you would typically prepare in a spreadsheet before uploading or pasting into draw-graph.\ndraw-graph then gives you access to some of the key Graphviz settings (out of several hundred) for controlling the display in a simple way.\n\nIn addition to the graphviz functionality, draw-graph has both preprocessing and postprocessing stages.\n\nPreprocessing allows for facilities like filtering the graph or finding paths through it. Postprocessing tweaks the appearance of the image returned by draw-graph to improve it.\n\n\n### Local or Remote processing<div id=\u201Clocal-remote-processing\u201D />\n\nNext to the draw-graph banner, you'll see the word 'local'. Click on it and it will be toggle to 'remote'. Local means that all processing is peformed locally in the browser. In remote mode, data is sent to an Amazon AWS server for processing using https encryption.\nLocal mode is more suitable for if for example your company's policy forbids sending out of data and is actually a little bit faster in most cases.\n\n\n### Basic graph terms<div id=\u201Cbasic-graph-terms\u201D />\n\n**nodes** are nodes in your graph - the boxes on your diagram. Each node in draw-graph is just a map of keys and values which you define. In the data that you make describing the diagram you want, the keys are specified just once in the header row, and the values are specified for each node.\n\nNodes can be individually styled within the data you load into draw-graph. A node might participate in none, one or many..\n\n**edges** are connections between two nodes in a graph - the arrows on your diagram. Edges can be individually styled within the data you load into draw-graph.\n\n**clusters** are sections within the graph, best thought of as a collection of nodes. Clusters can be individually styled in the data you load into draw-graph.\n\nClusters are defined by your choosing the key (part of the definition of each node) that you want to cluster on. For example, imagine that there is a graph where part of the node definitions is its 'class'. If all the nodes have a value for 'class' which is always one of \u2018cygnets\u2019 \u2018bluebirds\u2019 and \u2018pelicans\u2019, the resulting graph display will have the nodes grouped into those three clusters.\n\nAs well as styling clusters, you can specify how they relate to each other to control the layout of the graph, whilst letting Graphviz get on with what its good at; the complex business of laying out nodes and edges. We'll get into how a little bit further down in the Input format section. Cluster relationships are useful in the `dot` layout - more below.\n\n\n### Input format<div id=\u201Cinput-format\u201D />\n\nPlease use the **'Examples'** drop down on the main page to see what is achievable with draw-graph and see how the data specification of the graph is used to do that.\n\n\nAs previously mentioned, nodes in draw-graph are each specified as a map of key value pairs, but to avoid you having to write down the keys over and over, keys are only specified once, in the header row. This works because, in draw-graph, *every node in a graph must have exactly the same keys* (even if for some nodes, a particular key doesn't have a value, so it's left blank).\n\n\n####Working up the data\n\nThe draw-graph web does provide a small text area for working with the data but an easier way to work up the data is in a spreadsheet. For example:\n\n![two trees facing one way](img/spreadsheet.png =600x350)\n\nThe data was typed in the columns to the left and then in the column marked as blue, a spreadsheet formula concatenates the contents of the previous columns together. When it was ready, the contents of that column were copied and paste into the draw-graph text area. \n\n\n####Special characters, including line breaks\n\ndraw-graph uses 3 special characters in its input format. Avoid these in the data that you supply. They are `|` `:` and `,`\n\ncommas `,` can be escaped in node meta data and edge meta data by putting a backslash in front of the character. For example:\n\n    ...:shar\\,har:...\n    \nAt the moment, the other two special characters `|` and `:` cannot be escaped.\n\nSometimes, you may have a node for which the label you want to use is much longer than its peers. In this case, it's useful to break it over two or more lines. This can be achieved by putting a `\\n` line break character in the node or edge meta data. For example:\n\n    ...:This is a very\\nlong label:...\n    \nWith both escaped characters and line breaks, please remember to use this consistently across the node when it appears across all the edges that it participates in. For example if a node is defined as\n\n    ...:shar\\,har:...\n    \nin one node, and\n\n    ...:sharhar:...\n    \nin another, draw-graph will assume that they are two different nodes.\n\n\nIn the header row (below), avoid the character `/` in the specified keys as this has a special meaning. See fallback labels below.\n\nThe special characters `|` and `:` cannot currently be escaped and should be avoided.\n\n\nThe data that you load into draw-graph can have five different types of rows.\n\n\n####1) The header row\n\nThe header row is a list of the keys in each node, separated by the colon character. It must always be started with `h,` For example:\n\n    h,class:name:id\n\nis a valid header row where the subsequent definition of each row should be a colon separated list of the values for `class`, `name` and `id`. The only character not allowed within each key itself is a comma.\n\nThe header row should always come first in the csv file you upload or data you type in to draw-graph's text entry box.\n\n####2) Edges rows\n\nEdge rows are used the specify the data that makes up the graph. Think of it as one node's connection to another.\n\n\nThe overall format of an edge row is:\n\n    e,<first node>|<first node styles>,<second node>|<second nodes styles>,<edge meta>|<edge styles>\n    \nAny/all of the following parts may be omitted:\n\n    |<first node styles>\n    |<second nodes styles>\n    ,<edge meta>\n    ,|<edge styles>\n\n\nAn edge row should always be started with `e,` to tell draw-graph what type of row it is.\n\n\n*Specifying nodes*\n\nSince the keys in each nodes have already been specified in the header row, only the values now need to be specified.\n\nFor example (assuming the header row above):\n\n    e,Bluebird-class:Simon:1434,Yellow-class:Anita:20345\n\nis a valid simple edge where the nodes are:\n\n    class=Bluebird-class:name=Simon:id=1434\n\nand\n\n    class=Yellow-class:name=Anita:id=20345\n\nWhen written out in key=value format.\n\nAs in the header row, a colon is used to separate the different values in the node.\n\nYou can also pack additional styling information into an edge row, both to style one or both of the nodes and the edge itself (i.e. the connector between nodes).\n\n\n*Styling nodes*\n\nStyling information for the nodes can be embedded in the node itself using the `|` character.\n\nFor example in the edge that we used previously:\n\n    Bluebird-class:Simon:1434,Yellow-class:Anita:20345\n\nadding\n\n    Bluebird-class:Simon:1434|shape:septagon:fillcolor:blue:,Yellow-class:Anita:20345\n\nwill style the Simon node according to those Graphviz attributes specified. Please see the links just above for a description of all available attributes and colours.\n\nOne node in your graph might occur many times in the data you load, as that node participates in multiple edges. Styling it once is sufficient in the data. If you style the same nodes appearing in different edges differently, then styles are merged with the repeated styling attributes in the last node winning over the previous.\n\nStyles set on a node will win out over global defaults specified by draw-graph's options. For example, if you specify `shape:rect` on a node, but `ellipse` in the 'node shape' option, then `rect` will win out for that node.\n\nThere\u2019s a complete description of all attributes [here](https://www.graphviz.org/doc/info/attrs.html) and the various colours (also from Graphviz) are specified [here](https://www.graphviz.org/doc/info/colors.html), although it's also fine to specify a color in hex format e.g. #4286f4 (please google for 'color picker').\n\n\nPlease see the same graphviz page as linked above for a comprehensive list of all the available attributes.\n\n\n*Edge meta data*\n\nEdge meta data is specified as a chain of key value pairs and can be anything you want, bearing in mind the limitations from the special characters section. It's form is:\n\n    key1:value1:key2:value2:key3... etc\n    \nEdge meta data is useful for display as labels on your edges. There's an option described below called 'edge labels' where you can specify one of the keys to be used across all edge labels. It's also useful for filtering down to a particular set of edges e.g. `volume>100` using the 'filter graph' option described below.\nIt's generally useful to have a standard set of edge meta data keys across all edges so that labels and filtering can be consistently applied. The example called 'Complex architecture diagram' is a good example use of edge meta data.\n\n\n*Styling edges*\n\nOptionally an edge row can have an additional comma after the data of the two nodes have been specified followed by a `|` character and then a list of keys and values that are used to specify how that particular edge is to be displayed. For example:\n\n    Bluebird-class:Simon:1434,Yellow-class:Anita:20345,|color:deeppink:thickness:2\n\nThe edge attributes used to specify display of the edges are actually Graphviz attributes.\n\n\nUseful common ones include `label` (a text label for the edge), `style` (e.g. set to `dashed` or don't set for an undashed line, or set to `invis` for no line at all), `penwidth` (the thickness of the edge, for example, try a value of 5 for a thick line).\nIf you specify any attributes here that can also be set globally by a draw-graph option, for example the label, the per-edge setting specified the data will win out over the default specified in the options.\n\n\n####3) Node rows\n\nNodes rows are entirely optional in draw-graph but are a convenience that allow you to specify edge rows (see below) a bit more concisely.\n\nThe overall format of a node row is:\n\n    n,<node synonym>,<node/ node meta data>|<node styles>\n\nThe `|<node styles>` part is optional.\n\nA node row should always be started with `n,` to tell draw-graph what type of row it is.\n\nThe node synonym is a short name for the node that is useful in specifying edges more concisely and readably.\nFor example, given two node rows of\n\n    n,node_max,pandas:max\n    n,node_sim,pandas:simone|fillcolor:blue\n    \nyou can specify an edge as\n\n    e,node_max,node_sim\n    \ninstead of\n\n    e,pandas:max,pandas:simone|fillcolor:blue\n\nA node synonym must always start with 'node' followed by any sequence of alphanumeric and underscore characters.\nAny of the following is a valid node synonym:\n\n    node_1\n    node1\n    node_A1\n    node_a_thing_that_bit_me_2\n\n\n####4) Cluster Style rows\n\nCluster Style rows are not used to specify if/ how nodes should be put into clusters in the graph, but they are used just for styling the clusters. A cluster style row is always started with a `cs,`.\n\nA cluster style row has the form:\n\n    cs,Yellow-class|bgcolor:cornsilk1:style:rounded\n\nIt always has to start with `cs` to indicate the type of row.\nBefore the `|` you put the value of the cluster that you are styling, and after, a colon separated list of Graphviz key value pairs. Please see the same links as before.\n\nIf you click through the **Examples** on the main page, you\u2019ll see how various effects can be achieved. There\u2019s a section on more advanced layout tricks, where you need to understand more about Graphviz, further down on this page.\n\nFor a comprehensive list of all graphviz attributes that can be applied to nodes, edges and clusters, here's the [link](https://www.graphviz.org/doc/info/attrs.html) again.\n\n\n####4) Cluster Edge rows and Cluster to parent rows\n\nThe final two types of rows are really only useful when the `dot` layout is selected in the options. Graphviz' dot layout is probably the most useful, and with it we can get the closest to using Graphviz and draw-graph are a diagramming tool. The key concept to understand with dot is *rank*.\n\nPlease go back to the main page and select the 'Friendship graph' example and hit the 'draw-graph' button. In that graph (which is laid out by `dot`), The node 'Cristolene' has an edge that points to 'Shahar'. Graphviz then says that 'Sharhar' has a lower **rank** than 'Cristolene', and so is laid out 'below' it. I put below in quotes because you can lay out the graph top to bottom, left to right etc using the `rankdir` option.\nIn the same graph, see how there's an edge from 'kacey' in the pandas cluster to 'cosmo' in the brownbears cluster? That causes 'cosmo' to have a lower rank than 'kacey' and so the brownbears cluster starts lower down than the pandas one.\nBut what if you wanted to brownbears to be below pandas?\n\nAdd this definition line somewhere in the data lines and hit 'draw-graph' again.\n\n    e,pandas:Bridget,brownbears:cosmo\n    \nWe chose 'Bridget' because that node in the lowest ranked in pandas.\n\ndraw-graph automates this for you. Rather than specifying relationships between nodes to control cluster layout, you can specify *cluster edge rows* directly. cluster edge rows always start with a `ce:`\n\nDelete the line you just added, and replace it with this one.\n\n    ce,pandas:brownbears\n    \nand hit 'draw-graph' again.\nbrownbears is placed below pandas and the edges that draw-graph creates to control that are styled as invisible, so they don't appear in the display. Actually, they're stripped out of the svg by Graphviz while its creating it, so are not even present if you decide to edit the svg in an editor program later.\nYou can specify multiple cluster edges on a single `ce,` line so\n\n    ce,pandas:brownbears:pandas:squirrels\n    \nwill bring the squirrels cluster below pandas also. It's also fine to specify `ce,` relationships on multiple lines, which, for clarify, is preferable.\n\nA note on the implementation of cluster edges. The Graphviz layout engine has no concept of the relative position of clusters. Rather they are just boxes draw around the nodes they contain.\nIn order to introduce relative positoning, draw-line creates a lot of invisible edges between nodesin the two clusters you specify an edge between in the graph just before it is rendered. These edges have `constraint:true` set - i.e. they participate in and influence the *rank*. If you ever want to see these edges, there's an option called 'show invisible constraints'.\nCluster edges only work in one direction. For example if you `dot` layout graph has a 'rankdir' (another option) set to `TB`, i.e. Top to Bottom, then cluster edges can be used to say that one cluster is 'below' another.. but there's no 'to the left of' instruction available at the same time.\n\ndraw-graph offers the option to control the number of inter-node edges used to implement each cluster edge. Low numbers might not be enough to push your clusters into the desired relative positions given all the other edges that you've specified in the graph that could also be influencing rank. Higher numbers lock the relative position of clusters very effectively but can cause graphviz to produce a wide graph (which can be countered by setting the 'concentrate' option to true).\n\nGenerally you want the lowest number of cluster edges that produce the desired cluster positioning.\n\n*Cluster->parent* rows are a bit different. They're for nesting clusters. Cluster->parent rows are started with a `cp,`.\nRemove all the `ce,` lines you added above and instead, add this line to the data:\n\n    cp,squirrels:pandas\n    \nwhich is used to denote that pandas is the parent cluster of squirrels. Hit 'draw-graph' again and you'll see the squirrels cluster moved inside the 'pandas' cluster at the position determined by the relative rank of the node within it to the other nodes inside pandas.\n\nNow let's add a virtual node. Keeping the line above in place, add another new line to the data:\n\n    cp,pandas:are they bears\n    \nThe new cluster you just added, `are they bears`, is not styled yet, so add another line, a cluster style line like so:\n\n    cs,are they bears|bgcolor:lightgray\n    \nAnother example in the drop down list - Friendship cluster layout - shows a more complicated example of what can be achieved with cluster edge rows and cluster->parent rows. draw-graph adds these in order to get the most out of Graphviz' dot layout and help you produce 'what connects to what' style diagrams which are pretty common in the work place.\n\n\n####Commenting out lines\n\nUse a semi-colon ';' or a double semi-colon ';;' at the beginning or any line in the input data, apart from the header line which must always be present, to have draw-graph ignore the line. This is often useful while you're working.\n\n\n####JSON support\n\ndraw-graph also supports json as an input format and there are a couple of examples in the drop down. For fuller details of the format please see the [github page](https://github.com/judepayne/draw-graph/tree/master/cmd-draw-graph) of the command line tool version of draw-graph. \n\n\n### Options<div id=\u201Coptions\u201D />\n\nWe\u2019ve already covered how the styling of nodes, edges and clusters is embedded in the data definition itself. Options is for globally controlling either styling aspects for the whole graph, or for performing operations (e.g. filtering) on the whole graph.\n\nDraw-graph splits the options into two sections, those provided by draw-graph itself and those which are pass throughs into graphviz settings.\n\n\n####draw-graph options\n\n\n`node label` is the key from your data to be used as the label on each node.\n\n*Fallback labels & Composite labels*\n\nSometimes in one of your nodes, one of the values might be missing and it's valid that it's missing e.g. \n\n    Bluebird-class::1434\n    \nIn this case, you can specify `node-label` with a fallback key to use, or multiple fallback keys for that matter. e.g. rather than just `name`, specify as `name/id` or even `name/id/class`\n\nComposite labels are a way of putting more information into each of the labels on your nodes. For example setting the 'node label' option to `name&id` would put the values for both those keys onto each node.\n\n\n`cluster on` clusters the graph on one of the keys from your data. For example, setting cluster-on \u2018class\u2019 will group the graph by \u2018class\u2019.\n\n\n`color on` controls how the color for a node is chosen. By default, draw-graph will generate a light random color for each node based on the setting for `cluster-on` unless you set `color-on` differently. Any node color specified directly in the input data will override this.\n\n\n`node-tooltips` In the output image, node tooltips will appear when hovering over each node. `node-tooltips` should be specified as one or more of the keys in the input data. For example:\n\n    name\n    \nor\n\n    name/animal\n\n`node-url` if one of the key - value pairs on your node data is a url. then that key can be selected here and in the output image, clicking on that node, will take you to the url (in a new browser tab page).\n\n\n`filter-graph` allows you to specify filtering terms which are applied in the preprocessing stage. For example, pick the 'Architecture diagram' example and press draw-graph. In the example, the keys for the nodes and `view`, `function` and `application`. Set `filter-graph` to:\n\n    function = Capture\n    \nand press draw-graph again.\n\nNow set `filter-graph` to:\n\n    function = Capture or function = Lifecycle\n    \nand hit draw-graph again. A filter-graph 'expression' is made up of a series of 'terms'. At present, logical 'or' is provided for joining the terms into an expression. logical 'and' may well be provided in futures.\nAn expression where several terms are over the same key as above can be written more concisely as:\n\n    function in (Capture, Lifecycle)\n        \nAsides from the equality operator (written as `=` or `:`), inequality operators (`<`, `<=`, `>` and `>=`) are also available. These will only be applied to numreic values.\n\nA filter expression needn't have each term over the same key.\n\n    function = Capture or application = hePikes\n    \nis valid and will pull in the application called 'hePikes' as well as all applications in the Caputre function in the Complex Architecture digram example.\n\nEach term in the filter expression is applied to every node and every edge is the graph, but when a node or edge does not contain the specified key with it, it automatically passes that particular term.\n\nFor example, say every node in your graph had the keys:\n\n    view:function:application:id:level\n   \nand every edge the keys:\n\n    volume:format:level\n   \nA filter term based on 'function' say would end up only being applied to nodes. A term based on 'volume' only to edges, but a term based on 'level' would be applied to both nodes and edges. You could use this to, for example, nest different levels of detail within a single graph description and effectively zoom in and out, as you zoomed out seeing summary level nodes and edges for example.\n\nThe functionality to take a sql-like statement is supplied by the library [clj-sql-pred](https://github.com/judepayne/clj-sql-pred). Please have a look there to understand the full syntax of the sql-like command language for filtering.\n\n`paths` is a slightly more complex way of effectively filtering the graph. Pick the 'Architecture diagram' again and enter:\n\n    function in (Capture, Lifecycle) | function = Reporting\n    \n`paths` is made up of two filter expressions separated with the pipe character '|'. The graph is filtered both for the first filter expression and the second. Each filter expression is this time run only over the nodes of the graph. Then a pathfinding algorithm is run between all combinations of the first set of nodes and the second. Any other nodes found on any of those paths (as well as the start and end nodes captured by the filter terms) are shown in the resulting graph.\n`paths` is useful for answering questions about how certain domains connect and what do those connections pass through.\n\n\n`elide lower levels` will hide the <n> lowest levels (the 'leaf' nodes) in the graph.\n\n\n`highlight roots?` :true/false - will highlight root nodes in the graph as stars symbols. Root nodes are nodes which don\u2019t have any edges going into them.\n\n\n\n**`post process`** set this true to have draw-graph postprocess the output image with the controls.\n\n**Simulated annealing**\n\nSimulated annealing is use in draw-graph to lay out clusters more optimally that Graphviz does. Here's a demo:\n\n";
draw_graph.help.section_2 = "\n\nSimulated annealing is an algorithm that is used to find an optimal solution for a system, given constraints.\nIn this case the system is a series of boxes (clusters) and they are subject to small random moves. Overall the system is trying to find the solution where the boxes cover the greatest possible area, given the constraints that no box can overlap another, or it's boundary or any obstacles in the system (which are represented by the darker boxes).\n\n\nPostprocessing is mainly for the graphviz 'dot' layout.\n\n\n`anneal expand clusters` controls the directions in which annealing can expand clusters.\n\n`anneal bias` In order to get a good result, in a 'dot' TB layout (the graph is laid out Top to Bottom) left and right random moves are on average n times bigger than up down, where n is the number than you set in the box. '3' seems to work well.\n\n`anneal cluster separation` is the gap in pixels which should be preserved between clusters during annealing. If this field is unset, then draw-graph picks up the gaps left by Graphviz and uses those.\n\n`font`. Type the name of a font that you want uses for all text in the image. 'sans-serif' and 'serif' are good choices as they are not tied to the particular machine you're working on and will look roughly the same to everyone.\n\n\n`number cluster edges` As described above, this is the number of edges between nodes in two clusters that are generated to force graphviz to position clusters relative to each other.\n\n\n####draw-graph options\n\n\n`layout` : this is a Graphviz setting that determines how the graph gets laid out. possible settings are 'dot' 'fdp' 'neato' \u2018circo\u2019 \u2018twopi\u2019. Please note, that of these, several layouts do not support clustering. It\u2019s worth experimenting with the layout options as these make dramatic differences to the look of the graph. More information is available [here.](https://www.graphviz.org) (under 'Roadmap'). Also, please click through the Examples and note the settings that are used for each. The dot layout is the default and will get you closer to the look and feel of a hand drawn diagram that other layouts which tend to be more specialist.\n\n\n**Please note** that for large graphs - more than a hundred edges - the \u2018dot\u2019 layout will be much faster than the other two.\n\n\n`rankdir` is a Graphviz setting that only applies to the dot layout. It controls whether the graph is laid out left to right, top to bottom, etc.\n\n\n`node shape` is a Graphviz setting which controls the style of node shape \n\n\n`node fixedsize` controls whether all nodes are the same size or adapted to their text content.\n\n\n`splines` is a Graphviz setting which controls the style of edges.\n\n\n`nodesep` is a Graphviz setting which specifies the gap (in inches) between nodes in the same rank.\n\n\n`ranksep` is a Graphviz setting which specifies the gap (in inches) between different ranks in the graph. See \u2019Two facing trees\u2019 in the Graphviz layout tricks section below.\n\n\n`concentrate` draws edges that have a common end point closer together. Useful in large graphs.\n\n\n`overlap` is a Graphviz setting which controls whether/ how nodes are allowed to overlap.\n\n\n`scale` is a Graphviz setting which scales the graph after layout.\n\n\n`edges constaints` is a key control, especially in dot layouts. When set to false the edges in your graphs don't contributes to the ranking algorithm (that ranks nodes top to bottom/ left to right etc) according to how they point to each other. There's an example on rank below. \n\n\nFor more information on any of the Graphviz settings, please see  [here](https://www.graphviz.org/doc/info/attrs.html)\n\n\n### Saving the graph image<a name=\u201Csaving\u201D></a>\n\nYou can save you image as an .svg file into the downloads folder that your browser uses.\n\n\n### Layout tricks<div id=\u201Clayout-tricks\u201D />\n\nHere are some tips on how to solve certain graph layout challenges.\n\n#### 1. Two facing trees\n\n*The importance of rank* in 'dot' layouts.\n\nSometimes you might want to show how the nodes in two tree-like clusters relate to each other, but can face a problem that both trees face the same way, when you would rather have them facing each other.\nHere\u2019s an example of the problem:\n![two trees facing one way](img/two-trees1.png)\n\nThe trick to fixing this problem is to understand Graphviz\u2019s concept of rank (in the dot layout).\nIn the image, prds:b2 points to grc:b1. That\u2019s why the whole grc cluster is shifted to the right of prds.\nWe can fix this and get the grc cluster over to the right and facing back towards prds by reversing the direction of all the edges *just inside the grc cluster/tree*. We\u2019ll also need to get the arrows inside the grc cluster to point the other way.\n\nSo for example the edge:\n\n    grc:a1,grc:b1\n\nNeeds to become\n\n    grc:b1,grc:a1,dir:back\n\nIf you do that for each of the internal edges of grc, the resulting image will look like so:\n![two trees facing each other](img/two-trees2.png)\n\nFinally, for larger trees when many connections between them, you might want to separate the two trees more. This can be accomplished by adding on an attribute to the edges *between the two trees* `minlen:5` - or any number for the \u2018minimum length\u2019 that you want.\n\nPlease see the \u2018two facing trees\u2019 example and its data for how this accomplished for two larger trees that need to face each other.\n\n\nIn different types of pictures using the dot layout, fine tuning the layout can usually be accomplished by playing around with the relative rank of nodes by for example turning `edge constraints` in the options to false and introducing 'invisible edges' with `constraint:true` in their attributes.\nDraw-graph itself makes extensive use of invisible edges*, such that it is recommended not to use them yourself (i.e. don't add `style:invis` to your edges). Instead, make the edges fully transparent in color. See for example the 'Complex cluster layout' example which has an edge with the color set as so: `color:#c731ed00`. Adding `00` on the end of any hex color code is the recommended way to make `constraint:true` edges invisible.\n\n*For expressing the layout of cluster edges.\n";
draw_graph.help.bounds = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(3),(580),(360)], null);
draw_graph.help.boundary = cljs.core.zipmap(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),draw_graph.help.bounds);
draw_graph.help.sep = (5);
draw_graph.help.inner_boundary = lib_draw_graph.geometry.inner_rect(draw_graph.help.sep,draw_graph.help.boundary);
draw_graph.help.rand_rect = (function draw_graph$help$rand_rect(bdry){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(bdry) + cljs.core.rand_int(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(bdry))),new cljs.core.Keyword(null,"y","y",-1757859776),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(bdry) + cljs.core.rand_int(new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(bdry))),new cljs.core.Keyword(null,"w","w",354169001),cljs.core.rand_int(((new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(bdry) / (5)) | (0))),new cljs.core.Keyword(null,"h","h",1109658740),cljs.core.rand_int(((new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(bdry) / (5)) | (0)))], null)]);
});
draw_graph.help.rand_rects_STAR_ = (function draw_graph$help$rand_rects_STAR_(bdry,sep){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons(draw_graph.help.rand_rect(bdry),(draw_graph.help.rand_rects_STAR_.cljs$core$IFn$_invoke$arity$1 ? draw_graph.help.rand_rects_STAR_.cljs$core$IFn$_invoke$arity$1(bdry) : draw_graph.help.rand_rects_STAR_.call(null,bdry)));
}),null,null));
});
draw_graph.help.rand_rects = (function draw_graph$help$rand_rects(n,bdry,sep){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (a,c){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(a),n)){
return cljs.core.reduced(a);
} else {
if(((cljs.core.not_any_QMARK_((function (p1__36381_SHARP_){
var fexpr__36389 = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(lib_draw_graph.geometry.overlaps_QMARK_,sep,cljs.core.first(cljs.core.vals(c)));
return (fexpr__36389.cljs$core$IFn$_invoke$arity$1 ? fexpr__36389.cljs$core$IFn$_invoke$arity$1(p1__36381_SHARP_) : fexpr__36389.call(null,p1__36381_SHARP_));
}),cljs.core.vals(a))) && (lib_draw_graph.geometry.inside_QMARK_(bdry,cljs.core.first(cljs.core.vals(c)))))){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,c], 0));
} else {
return a;
}
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.take.cljs$core$IFn$_invoke$arity$2((n + (30)),draw_graph.help.rand_rects_STAR_(bdry,sep)));
});
draw_graph.help.timeout = (function draw_graph$help$timeout(ms){
var c = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
setTimeout(((function (c){
return (function (){
return cljs.core.async.close_BANG_(c);
});})(c))
,ms);

return c;
});
draw_graph.help.state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"running","running",1554969103),false], null));
draw_graph.help.rect = (function draw_graph$help$rect(var_args){
var args__4736__auto__ = [];
var len__4730__auto___36521 = arguments.length;
var i__4731__auto___36523 = (0);
while(true){
if((i__4731__auto___36523 < len__4730__auto___36521)){
args__4736__auto__.push((arguments[i__4731__auto___36523]));

var G__36524 = (i__4731__auto___36523 + (1));
i__4731__auto___36523 = G__36524;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return draw_graph.help.rect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

draw_graph.help.rect.cljs$core$IFn$_invoke$arity$variadic = (function (r,p__36395){
var map__36397 = p__36395;
var map__36397__$1 = (((((!((map__36397 == null))))?(((((map__36397.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36397.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36397):map__36397);
var fill_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36397__$1,new cljs.core.Keyword(null,"fill?","fill?",-485702148),false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(r),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(r),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(r),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(r),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill","fill",883462889),(cljs.core.truth_(fill_QMARK_)?"#98b4c7":"#d7e5ee"),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#98b4c7",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(2)], null)], null)], null);
});

draw_graph.help.rect.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
draw_graph.help.rect.cljs$lang$applyTo = (function (seq36391){
var G__36392 = cljs.core.first(seq36391);
var seq36391__$1 = cljs.core.next(seq36391);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36392,seq36391__$1);
});

draw_graph.help.gen_rects = (function draw_graph$help$gen_rects(){
return draw_graph.help.rand_rects(((4) + cljs.core.rand_int((7))),draw_graph.help.inner_boundary,(5));
});
draw_graph.help.rects__GT_svg = (function draw_graph$help$rects__GT_svg(state,filled_QMARK_){
if(cljs.core.truth_(filled_QMARK_)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36401_SHARP_){
return draw_graph.help.rect.cljs$core$IFn$_invoke$arity$variadic(p1__36401_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"fill?","fill?",-485702148),filled_QMARK_], 0));
}),cljs.core.vals(state));
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36402_SHARP_){
return draw_graph.help.rect(p1__36402_SHARP_);
}),cljs.core.vals(state));
}
});
draw_graph.help.constraints = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"boundary","boundary",-2000996754),draw_graph.help.inner_boundary,new cljs.core.Keyword(null,"collision","collision",-201625508),draw_graph.help.sep,new cljs.core.Keyword(null,"grow","grow",-524118895),true], null);
draw_graph.help.log = console.log;
draw_graph.help.a = (function draw_graph$help$a(n){
if(cljs.core.truth_(new cljs.core.Keyword(null,"running","running",1554969103).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(draw_graph.help.state)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(draw_graph.help.state,cljs.core.assoc,new cljs.core.Keyword(null,"state","state",-1988618099),lib_draw_graph.anneal.annealing.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(draw_graph.help.state)),n,(0),new cljs.core.Keyword(null,"constraints","constraints",422775616).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(draw_graph.help.state)),lib_draw_graph.anneal.neighbor_fn,lib_draw_graph.anneal.cost_fn,lib_draw_graph.anneal.p_fn,lib_draw_graph.anneal.temp_fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dims","dims",-466522889),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null)], 0)));
} else {
return null;
}
});
draw_graph.help.anneal = (function draw_graph$help$anneal(){
var c__25132__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25132__auto__){
return (function (){
var f__25133__auto__ = (function (){var switch__25072__auto__ = ((function (c__25132__auto__){
return (function (state_36443){
var state_val_36445 = (state_36443[(1)]);
if((state_val_36445 === (1))){
var inst_36415 = (0);
var state_36443__$1 = (function (){var statearr_36471 = state_36443;
(statearr_36471[(7)] = inst_36415);

return statearr_36471;
})();
var statearr_36475_36539 = state_36443__$1;
(statearr_36475_36539[(2)] = null);

(statearr_36475_36539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36445 === (2))){
var inst_36415 = (state_36443[(7)]);
var inst_36419 = (inst_36415 < (72));
var state_36443__$1 = state_36443;
if(cljs.core.truth_(inst_36419)){
var statearr_36476_36544 = state_36443__$1;
(statearr_36476_36544[(1)] = (4));

} else {
var statearr_36477_36545 = state_36443__$1;
(statearr_36477_36545[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36445 === (3))){
var inst_36434 = (state_36443[(2)]);
var state_36443__$1 = state_36443;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36443__$1,inst_36434);
} else {
if((state_val_36445 === (4))){
var inst_36421 = draw_graph.help.a((100));
var inst_36422 = draw_graph.help.timeout((40));
var state_36443__$1 = (function (){var statearr_36478 = state_36443;
(statearr_36478[(8)] = inst_36421);

return statearr_36478;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36443__$1,(7),inst_36422);
} else {
if((state_val_36445 === (5))){
var state_36443__$1 = state_36443;
var statearr_36480_36546 = state_36443__$1;
(statearr_36480_36546[(2)] = null);

(statearr_36480_36546[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36445 === (6))){
var inst_36432 = (state_36443[(2)]);
var state_36443__$1 = state_36443;
var statearr_36483_36547 = state_36443__$1;
(statearr_36483_36547[(2)] = inst_36432);

(statearr_36483_36547[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36445 === (7))){
var inst_36415 = (state_36443[(7)]);
var inst_36424 = (state_36443[(2)]);
var inst_36427 = (inst_36415 + (1));
var inst_36415__$1 = inst_36427;
var state_36443__$1 = (function (){var statearr_36486 = state_36443;
(statearr_36486[(7)] = inst_36415__$1);

(statearr_36486[(9)] = inst_36424);

return statearr_36486;
})();
var statearr_36487_36549 = state_36443__$1;
(statearr_36487_36549[(2)] = null);

(statearr_36487_36549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__25132__auto__))
;
return ((function (switch__25072__auto__,c__25132__auto__){
return (function() {
var draw_graph$help$anneal_$_state_machine__25073__auto__ = null;
var draw_graph$help$anneal_$_state_machine__25073__auto____0 = (function (){
var statearr_36489 = [null,null,null,null,null,null,null,null,null,null];
(statearr_36489[(0)] = draw_graph$help$anneal_$_state_machine__25073__auto__);

(statearr_36489[(1)] = (1));

return statearr_36489;
});
var draw_graph$help$anneal_$_state_machine__25073__auto____1 = (function (state_36443){
while(true){
var ret_value__25074__auto__ = (function (){try{while(true){
var result__25075__auto__ = switch__25072__auto__(state_36443);
if(cljs.core.keyword_identical_QMARK_(result__25075__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25075__auto__;
}
break;
}
}catch (e36490){if((e36490 instanceof Object)){
var ex__25076__auto__ = e36490;
var statearr_36491_36553 = state_36443;
(statearr_36491_36553[(5)] = ex__25076__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36443);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36490;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25074__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36554 = state_36443;
state_36443 = G__36554;
continue;
} else {
return ret_value__25074__auto__;
}
break;
}
});
draw_graph$help$anneal_$_state_machine__25073__auto__ = function(state_36443){
switch(arguments.length){
case 0:
return draw_graph$help$anneal_$_state_machine__25073__auto____0.call(this);
case 1:
return draw_graph$help$anneal_$_state_machine__25073__auto____1.call(this,state_36443);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
draw_graph$help$anneal_$_state_machine__25073__auto__.cljs$core$IFn$_invoke$arity$0 = draw_graph$help$anneal_$_state_machine__25073__auto____0;
draw_graph$help$anneal_$_state_machine__25073__auto__.cljs$core$IFn$_invoke$arity$1 = draw_graph$help$anneal_$_state_machine__25073__auto____1;
return draw_graph$help$anneal_$_state_machine__25073__auto__;
})()
;})(switch__25072__auto__,c__25132__auto__))
})();
var state__25134__auto__ = (function (){var statearr_36492 = (f__25133__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25133__auto__.cljs$core$IFn$_invoke$arity$0() : f__25133__auto__.call(null));
(statearr_36492[(6)] = c__25132__auto__);

return statearr_36492;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25134__auto__);
});})(c__25132__auto__))
);

return c__25132__auto__;
});
draw_graph.help.generate = (function draw_graph$help$generate(){
var rects = draw_graph.help.gen_rects();
var ob_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.rand_int((2))))?false:true);
var st = ((ob_QMARK_)?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.rest(rects)):rects);
var obs = ((ob_QMARK_)?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(rects)], null)):cljs.core.PersistentVector.EMPTY);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(draw_graph.help.state,cljs.core.assoc,new cljs.core.Keyword(null,"state","state",-1988618099),st);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(draw_graph.help.state,cljs.core.assoc,new cljs.core.Keyword(null,"running","running",1554969103),false);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(draw_graph.help.state,cljs.core.assoc,new cljs.core.Keyword(null,"constraints","constraints",422775616),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(draw_graph.help.constraints,new cljs.core.Keyword(null,"obstacles","obstacles",1370670211),obs));
});
draw_graph.help.anneal_demo = (function draw_graph$help$anneal_demo(){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.anneal-demo","div.anneal-demo",-437253449),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),(600),new cljs.core.Keyword(null,"height","height",1025178622),(400)], null),draw_graph.help.rect(draw_graph.help.boundary),draw_graph.help.rects__GT_svg(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(draw_graph.help.state)),false),draw_graph.help.rects__GT_svg(new cljs.core.Keyword(null,"obstacles","obstacles",1370670211).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"constraints","constraints",422775616).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(draw_graph.help.state))),true)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Generate",new cljs.core.Keyword(null,"on-click","on-click",1632826543),draw_graph.help.generate], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Anneal!",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(draw_graph.help.state,cljs.core.assoc,new cljs.core.Keyword(null,"running","running",1554969103),true);

return draw_graph.help.anneal();
})], null)], null)], null);
});
});
draw_graph.help.help_page = (function draw_graph$help$help_page(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.block-text","div.block-text",1029445422),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),draw_graph.utils.md__GT_hiccup(draw_graph.help.section_1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"(slowed down ~50x. Obstacles shown as filled rectangles.)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.help.anneal_demo], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),draw_graph.utils.md__GT_hiccup(draw_graph.help.section_2)], null)], null);
});

//# sourceMappingURL=draw_graph.help.js.map
