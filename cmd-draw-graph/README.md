# cmd-draw-graph

A command line version of draw-graph. You'll need to have graphviz installed locally to run this.

## Usage

Example usage:

    java -jar target/cmd-draw-graph-0.1.0-standalone.jar \
     -p /usr/local/bin/dot \
     -i     '{"data":"h,animal:person\ne,pandas:huxley,pandas:bridget\ne,pandas:bridget,pandas:max",
     "display-options" : {"layout" : "dot", "label" : "person"},
     "format-in" : "csv",
     "format-out" : "svg"}'

Download the .jar file (e.g. cmd-draw-graph-0.1.0-standalong.jar) in the target directory.

Run the -h option to see the options, e.g.:

    java -jar target/cmd-draw-graph-0.1.0-standalone.jar -h

The -p option is to specify the path to the Graphviz executable installed on your system.

## License

MIT
