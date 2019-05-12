

Simulated annealing is an algorithm that is used to find an optimal solution for a system, given constraints.
In this case the system is a series of boxes (clusters) and they are subject to small random moves. Overall the system is trying to find the solution where the boxes cover the greatest possible area, given the constraints that no box can overlap another, or it's boundary or any obstacles in the system (which are represented by the darker boxes).


Postprocessing is mainly for the graphviz 'dot' layout.


`anneal expand clusters` controls the directions in which annealing can expand clusters.

`anneal bias` In order to get a good result, in a 'dot' TB layout (the graph is laid out Top to Bottom) left and right random moves are on average n times bigger than up down, where n is the number than you set in the box. '3' seems to work well.

`anneal cluster separation` is the gap in pixels which should be preserved between clusters during annealing. If this field is unset, then draw-graph picks up the gaps left by Graphviz and uses those.

`font`. Type the name of a font that you want uses for all text in the image. 'sans-serif' and 'serif' are good choices as they are not tied to the particular machine you're working on and will look roughly the same to everyone.



####draw-graph options


`layout` : this is a Graphviz setting that determines how the graph gets laid out. possible settings are 'dot' 'fdp' 'neato' ‘circo’ ‘twopi’. Please note, that of these, several layouts do not support clustering. It’s worth experimenting with the layout options as these make dramatic differences to the look of the graph. More information is available [here.](https://www.graphviz.org) (under 'Roadmap'). Also, please click through the Examples and note the settings that are used for each. The dot layout is the default and will get you closer to the look and feel of a hand drawn diagram that other layouts which tend to be more specialist.


**Please note** that for large graphs - more than a hundred edges - the ‘dot’ layout will be much faster than the other two.


`rankdir` is a Graphviz setting that only applies to the dot layout. It controls whether the graph is laid out left to right, top to bottom, etc.


`node shape` is a Graphviz setting which controls the style of node shape 


`node fixedsize` controls whether all nodes are the same size or adapted to their text content.


`splines` is a Graphviz setting which controls the style of edges.


`nodesep` is a Graphviz setting which specifies the gap (in inches) between nodes in the same rank.


`ranksep` is a Graphviz setting which specifies the gap (in inches) between different ranks in the graph. See ’Two facing trees’ in the Graphviz layout tricks section below.


`concentrate` draws edges that have a common end point closer together. Useful in large graphs.


`overlap` is a Graphviz setting which controls whether/ how nodes are allowed to overlap.


`scale` is a Graphviz setting which scales the graph after layout.


`edges constaints` is a key control, especially in dot layouts. When set to false the edges in your graphs don't contributes to the ranking algorithm (that ranks nodes top to bottom/ left to right etc) according to how they point to each other. There's an example on rank below. 


For more information on any of the Graphviz settings, please see  [here](https://www.graphviz.org/doc/info/attrs.html)


### Saving the graph image<a name=“saving”></a>

You can save you image as an .svg file into the downloads folder that your browser uses.


### Layout tricks<div id=“layout-tricks” />

Here are some tips on how to solve certain graph layout challenges.

#### 1. Two facing trees

*The importance of rank* in 'dot' layouts.

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


In different types of pictures using the dot layout, fine tuning the layout can usually be accomplished by playing around with the relative rank of nodes by for example turning `edge constraints` in the options to false and introducing 'invisible edges' with `constraint:true` in their attributes.
Draw-graph itself makes extensive use of invisible edges*, such that it is recommended not to use them yourself (i.e. don't add `style:invis` to your edges). Instead, make the edges fully transparent in color. See for example the 'Complex cluster layout' example which has an edge with the color set as so: `color:#c731ed00`. Adding `00` on the end of any hex color code is the recommended way to make `constraint:true` edges invisible.

*For expressing the layout of cluster edges.
