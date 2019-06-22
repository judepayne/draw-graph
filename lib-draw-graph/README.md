# lib-draw-graph

lib-draw-graph is a Clojure/ Clojurescript library which uses the Loom and Rhizome libraries to convert draw-graph's csv format and display options into Graphviz's dot format.

The processing chain is:

    data ---> parse ---> Loom graph ---> preprocess: graph ops ---> process: graphviz ---> postprocess: anneal etc
    
The various groups of options (see [draw-graph.com](https://draw-graph.com)) are used at the preprocessing, processing and postprocessing stages.

`graphviz` options are all applied in the beginning of the processing phase in the production of the dot format string which is fed into graphviz.

the `draw-graph` options are used either in the preprocessing or (the section started with `post process`) are used in post-processing the svg obtained from graphviz in order to prettify the clusters.
