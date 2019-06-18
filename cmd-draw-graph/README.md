# cmd-draw-graph

A command line version of draw-graph. Graphviz does not need to be installed locally as it's bundled as a transpiled-to-javascript version.

## Usage

Example usage:

    java -jar target/cmd-draw-graph-0.1.0-standalone.jar \
     -i     '{"data":"h,animal:person\ne,pandas:huxley,pandas:bridget\ne,pandas:bridget,pandas:max",
     "display-options" : {"layout" : "dot", "label" : "person"},
     "format-in" : "csv",
     "format-out" : "svg"}'

Download the 'standalone' .jar file (e.g. cmd-draw-graph-0.1.0-standalone.jar) in the target directory.

Run the -h option to see the options, e.g.:

    java -jar target/cmd-draw-graph-0.1.0-standalone.jar -h


## Options

In the -i the input data that you pass into this took, the format of the "data" part is well described on the draw-graph.com's help page.

Although the display options and what each does is also described on the help page, it's not an exhaustive list with the correct names required for programmatic usage of draw-graph (e.g. this tool).


Here is that list and draw-graph options:

| option | type | description |
|--------|------|-------------|
| `label` | string | the node label, a key from the header |
| `cluster-on`| string | the node key that the graph is clustered on ('dot' layout only) |
| `color-on` | string | the node key used to generate (different) node colors |
| `tooltip` | string | the node key used for node tooltips |
| `url` | string | the node key used for node urls |
| `edge-label` | string | the edge meta-data key used for edge labels |
| `filter-graph` | string | the filtering string used to filter a graph |
| `paths` | string | the paths string used to show only certains paths through the graph |
| `elide` | string | integer in string form. levels to elide from the graph |
| `show-root?` | boolean | highlight the roots of the graph |
| `show-constraints?` | boolean | show and highlight the constraint edges in the graph |
| `post-process?` | boolean | post-process the graph. toggle this value on a draw-graph example |
| `pp-clusters` | submap | e.g. {"x" : true, "h" : false, "y" : true, "w" : true} which directions to allow annealing to expand clusters in during post processing. x=left. w=right. y=up. h=down |
| `pp-anneal-bias` | string | integer as string. a number 1-12, used in annealing in post processing |
| `pp-cluster-sep` | string | integer as string. number of pixels to keep clusters separate by during annealing |
| `pp-font` | string | name of font on your system to use in the svg replacing graphviz's default monospace |
| num-cluster-edges | string | integer as string. number of inter-node edges between two clusters to try to establish in order to make cluster edges |

and of graphviz options that draw-graph also accepts (put these in the same map of options)

| option | type | description |
|--------|------|-------------|
| **layout** | string | **not optional** the graphviz layout algorithm to use |
| rankdir| string | the rank direction of the (dot) graph |
| shape | string | node shape. one of the graphviz permitted values. *not all shapes are guaranteed work with post-processing* stick to the list in the drop down on draw-graph.com for those guaranteed to work (although most should) |
| fixedsize | string/ boolean | boolean as string or just boolean. whether the node's size should remain fixed or expand to cover the node's label |
| splines | string | graphviz' edge line type |
| nodesep | string | graphviz node separation (inches!) |
| rankdir | string | graphviz rank separation (inches!) |
| concentrate | string/ boolean | boolean as string or just boolean. graphviz attribute to concentrate (edges). useful to reduce size of graphs |
| overlap | string/ boolean | boolean as string or just boolean. graphviz overlap attribute. usually doesn't do a lot |
| scale | string | graphviz scale attribute. usually doesn't do a lot |
| constraint | string/ boolean | an **important** option. controls whether edges you specify have an influence on rank in a dot layout graph |

(as ever, please see [this](https://www.graphviz.org/doc/info/attrs.html) for how this graphviz options work)

and a few additional options that are not exposed through the draw-graph.com gui

| option | type | description |
|--------|------|-------------|
| fix-ranks? | boolean | (draw-graph option) makes a dot graph rigorously lay out according to rank |
| dpi | integer | (graphviz) dpi. 72 is the default |
| ratio | string/ double | graphviz ratio attribute |


draw-graph is very tolerate of options being ommitted. Sensible defaults are used.

**layout** though must be specified.


### Node and Edge graphviz attributes

Although draw-graph only a few graph level options, as in the list above, it's open for node 'N' and edge 'E' attributes supplied in the data. e.g. in the set of key value pairs that goes after the '|' character on either a node or an edge. The [link](https://www.graphviz.org/doc/info/attrs.html) again.

## Caveats

This command line tool is not the quickest to start up (about a 1s on my system) being based on the JVM and having to load the Clojure language each time it's run.

## License

MIT
