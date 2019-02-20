# lib-draw-graph

lib-draw-graph is a Clojure/ Clojurescript library which uses the Loom and Rhizome libraries to convert draw-graph's csv format and display options into Graphviz's dot format.

`clustered-graph.cljc` adds a protocol to Loom to support clusters in graphs.

`spec.cljc` checks that data is properly in the csv format.

`processor.cljc` converts draw-graph's csv based format to a Loom graph and provides a few other whole graph processing functions, e.g. subgraph, filter-graph and elide lower levels.

`graph.cljc` takes in a Loom graph and a map of display options and uses Zachery Tellman's Rhizome library to convert to dot.

`dot.cljc` is a port of part of the Rhizome library to cljc, so that it can be used to produce dot either on the server side or in the browser.

The reason is going from draw-graph's csv format for describing a graph to Loom and then finally on to dot is to gain the facility to leverage Loom to apply various graph algorithms in a preprocessing stage.
If you look at [draw-graph.com](https://draw-graph.com) and expand the options that are used to control the display of the graph, the majority of options there are pass throughs to Graphviz settings, but some are not. To filter the graph, elide levels etc, I used Loom to provide the various graph algorithms.





