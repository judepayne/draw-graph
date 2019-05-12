(ns draw-graph.help
  (:refer-clojure :exclude [atom flush])
  (:require
     [draw-graph.utils         :as utils]
     [lib-draw-graph.anneal    :as a]
     [lib-draw-graph.geometry  :as g]
     [reagent.core             :as r]
     [reagent.ratom            :as ratom]
     [cljs.core.async :refer [<! chan close!]])
  (:require-macros
   [cljs.core.async.macros :as m :refer [go]]))

(def section-1
  "## How to use draw-graph\n\n\n\n### Introduction<div id=“introduction” />\n\ndraw-graph allows you to produce graph/ network diagrams from simple data descriptions. Network diagrams show how things connect - boxes and arrows diagrams.\n\ndraw-graph is powered by Graphviz, a very capable (and complex!) library for displaying graph/ network diagrams. Unfortunately for the non-technical user, the input format for Graphviz, dot, can be rather complex. Although it can be written by hand, for large graphs, it’s often preferable to produce the dot format programmatically. draw-graph solves this problem by using a csv (comma separated values) input format that you would typically prepare in a spreadsheet before uploading or pasting into draw-graph.\ndraw-graph then gives you access to some of the key Graphviz settings (out of several hundred) for controlling the display in a simple way.\n\nIn addition to the graphviz functionality, draw-graph has both preprocessing and postprocessing stages.\n\nPreprocessing allows for facilities like filtering the graph or finding paths through it. Postprocessing tweaks the appearance of the image returned by draw-graph to improve it.\n\n\n### Basic graph terms<div id=“basic-graph-terms” />\n\n**nodes** are nodes in your graph - the boxes on your diagram. Each node in draw-graph is just a map of keys and values which you define. In the data that you make describing the diagram you want, the keys are specified just once in the header row, and the values are specified for each node.\n\nNodes can be individually styled within the data you load into draw-graph. A node might participate in none, one or many..\n\n**edges** are connections between two nodes in a graph - the arrows on your diagram. Edges can be individually styled within the data you load into draw-graph.\n\n**clusters** are sections within the graph, best thought of as a collection of nodes. Clusters can be individually styled in the data you load into draw-graph.\n\nClusters are defined by your choosing the key (part of the definition of each node) that you want to cluster on. For example, imagine that there is a graph where part of the node definitions is its 'class'. If all the nodes have a value for 'class' which is always one of ‘cygnets’ ‘bluebirds’ and ‘pelicans’, the resulting graph display will have the nodes grouped into those three clusters.\n\nAs well as styling clusters, you can specify how they relate to each other to control the layout of the graph, whilst letting Graphviz get on with what its good at; the complex business of laying out nodes and edges. We'll get into how a little bit further down in the Input format section. Cluster relationships are useful in the `dot` layout - more below.\n\n\n### Input format<div id=“input-format” />\n\nPlease use the **'Examples'** drop down on the main page to see what is achievable with draw-graph and see how the data specification of the graph is used to do that.\n\n\nAs previousyly mentioned, Nodes in draw-graph are each specified as a map of key value pairs, but to avoid you having to write down the keys over and over, keys are only specified once, in the header row. This works because, in draw-graph, *every node in a graph must have exactly the same keys* (even if for some nodes, a particular key doesn't have a value, so it's left blank).\n\n\n####Working up the data\n\nThe draw-graph web does provide a small text area for working with the data but an easier way to work up the data is in a spreadsheet. For example:\n\n![two trees facing one way](img/spreadsheet.png =600x350)\n\nThe data was typed in the columns to the left and then in the column marked as blue, a spreadsheet formula concatenates the contents of the previous columns together. When it was ready, the contents of that column were copied and paste into the draw-graph text area. \n\n\n####Special characters to avoid\n\ndraw-graph uses 4 special characters in its input format. Avoid these in the data that you supply. They are `|` `:` `+` and `,`\n\nIn the header row (below), avoid the character `/` in the specified keys as this has a special meaning. See fallback labels below.\n\nThe data that you load into draw-graph can have five different types of rows.\n\n\n####1) The header row\n\nThe header row is a list of the keys in each node, separated by the colon character. It must always be started with `h:` For example:\n\n    h:class:name:id\n\nis a valid header row where the subsequent definition of each row should be a colon separated list of the values for `class`, `name` and `id`. The only character not allowed within each key itself is a comma.\n\nThe header row should always come first in the csv file you upload or data you type in to draw-graph's text entry box.\n\n\n####2) Edges rows\n\nEdge rows are used the specify the data that makes up the graph. An edge is just two nodes separated by a comma. Since the keys in each nodes have already been specified in the header row, only the values now need to be specified. An edge row should always be started with `e:` to tell draw-graph what type of row it is.\n\nFor example (assuming the header row above):\n\n    Bluebird-class:Simon:1434,Yellow-class:Anita:20345\n\nis a valid edge where the nodes are:\n\n    class=Bluebird-class:name=Simon:id=1434\n\nand\n\n    class=Yellow-class:name=Anita:id=20345\n\nWhen written out in key=value format.\n\nAs in the header row, a colon is used to separate the different values in the node.\n\nYou can also pack additional styling information into an edge row, both to style one or both of the nodes and the edge itself (i.e. the connector between nodes).\n\n*Styling edges*\n\nOptionally an edge row can have an additional comma after the data of the two nodes have been specified followed by a `|` character and then a list of keys and values that are used to specify how that particular edge is to be displayed. For example:\n\n    Bluebird-class:Simon:1434,Yellow-class:Anita:20345,|color:deeppink:thickness:2\n\nSince commas and colons are part of the data format, you should be very careful to strip them out of the data itself.\n\nThe edge attributes used to specify display of the edges are actually Graphviz attributes.\n\nThere’s a complete description of all attributes [here](https://www.graphviz.org/doc/info/attrs.html) and the various colours (also from Graphviz) are specified [here](https://www.graphviz.org/doc/info/colors.html).\n\nUseful common ones include `label` (a text label for the edge), `style` (e.g. set to `dashed` or don't set for an undashed line, or set to `invis` for no line at all), `penwidth` (the thickness of the edge, for example, try a value of 5 for a thick line).\n\n*Styling nodes*\n\nStyling information for the nodes can be embedded in the node itself using the `|` character.\n\nFor example in the edge that we used previously:\n\n    Bluebird-class:Simon:1434,Yellow-class:Anita:20345\n\nadding\n\n    Bluebird-class:Simon:1434|shape:septagon:fillcolor:blue:,Yellow-class:Anita:20345\n\nwill style the Simon node according to those Graphviz attributes specified. Please see the links just above for a description of all available attributes and colours.\n\nOne node in your graph might occur many times in the data you load, as that node participates in multiple edges. Styling it once is sufficient in the data.\n\nPlease see the same graphviz page as linked above for a comprehensive list of all the available attributes.\n\n\n####3) Cluster Style rows\n\nCluster Style rows are not used to specify if/ how nodes should be put into clusters in the graph, but they are used just for styling the clusters. A cluster style row is always started with a `cs:`.\n\nA cluster style row has the form:\n\n    cs:Yellow-class|bgcolor:cornsilk1:style:rounded\n\nBefore the `|` you put the value of the cluster that you are styling, and after, a colon separated list of Graphviz key value pairs. Please see the same links as before.\n\nIf you click through the **Examples** on the main page, you’ll see how various effects can be achieved. There’s a section on more advanced layout tricks, where you need to understand more about Graphviz, further down on this page.\n\nFor a comprehensive list of all graphviz attributes that can be applied to nodes, edges and clusters, here's the [link](https://www.graphviz.org/doc/info/attrs.html) again.\n\n\n####4) Cluster Edge rows and (5) Cluster to parent rows\n\nThe final two types of rows are really only useful when the `dot` layout is selected in the options. Graphviz' dot layout is probably the most useful, and with it we can get the closest to using Graphviz and draw-graph are a diagramming tool. The key concept to understand with dot is *rank*.\n\nPlease go back to the main page and select the 'Friendship graph' example and hit the 'draw-graph' button. In that graph (which is laid out by `dot`), The node 'Cristolene' has an edge that points to 'Shahar'. Graphviz then says that 'Sharhar' has a lower **rank** than 'Cristolene', and so is laid out 'below' it. I put below in quotes because you can lay out the graph top to bottom, left to right etc using the `rankdir` option.\nIn the same graph, see how there's an edge from 'kacey' in the pandas cluster to 'cosmo' in the brownbears cluster? That causes 'cosmo' to have a lower rank than 'kacey' and so the brownbears cluster starts lower down than the pandas one.\nBut what if you wanted to brownbears to be below pandas?\n\nAdd this definition line somewhere in the data lines and hit 'draw-graph' again.\n\n    e:pandas:Bridget,brownbears:cosmo\n    \nWe chose 'Bridget' because that node in the lowest ranked in pandas.\n\ndraw-graph automates this for you. Rather than specifying relationships between nodes to control cluster layout, you can specify *cluster edge rows* directly. cluster edge rows always start with a `ce:`\n\nDelete the line you just added, and replace it with this one.\n\n    ce:pandas:brownbears\n    \nand hit 'draw-graph' again.\nbrownbears is placed below pandas and the edges that draw-graph creates to control that are styled as invisible, so they don't appear in the display. Actually, they're stripped out of the svg by Graphviz while its creating it, so are not even present if you decide to edit the svg in an editor program later.\nYou can specify multiple cluster edges on a single `ce:` line so\n\n    ce:pandas:brownbears:pandas:squirrels\n    \nwill bring the squirrels cluster below pandas also. It's also fine to specify `ce:` relationships on multiple lines.\n\n*Cluster->parent* rows are a bit different. They're for nesting clusters. Cluster->parent rows are started with a `cp:`.\nRemove all the `ce:` lines you added above and instead, add this line to the data:\n\n    cp:squirrels:pandas\n    \nwhich is used to denote that pandas is the parent cluster of squirrels. Hit 'draw-graph' again and you'll see the squirrels cluster moved inside the 'pandas' cluster at the position determined by the relative rank of the node within it to the other nodes inside pandas.\n\nNow let's add a virtual node. Keeping the line above in place, add another new line to the data:\n\n    cp:pandas:are they bears\n    \nThe new cluster you just added, `are they bears`, is not styled yet, so add another line, a cluster style line like so:\n\n    cs:are they bears|bgcolor:lightgray\n    \nAnother example in the drop down list - Friendship cluster layout - shows a more complicated example of what can be achieved with cluster edge rows and cluster->parent rows. draw-graph adds these in order to get the most out of Graphviz' dot layout and help you produce 'what connects to what' style diagrams which are pretty common in the work place.\n\n\n####Commenting out lines\n\nUse a semi-colon ';' or a double semi-colon ';;' at the beginning or any line in the input data, apart from the header line which must always be present, to have draw-graph ignore the line. This is often useful while you're working.\n\n\n\n####Splitting text labels\n\nPlease pull up the 'Friendship graph' example again.\nNotice how the text of the 'cristolene' node is too wide and slightly extends over the egdes. Find the (single) row that specifies the 'cristoline' node and replace it with this:\n\n    e:pandas:crist-+olene,pandas:sharhar\n    \nThe plus `+` symbol is used to split text in a node label. There's just one thing to be careful of and that is the definition of that node is now literally `pandas:crist-+lene`, so if you wish to overflow text for a node where is one more than one edge (i.e. present in more than one row in the data) be sure to change the definition of the node in both, or Graphviz will think that they are two different nodes.\n\n\n### Options<div id=“options” />\n\nWe’ve already covered how the styling of nodes, edges and clusters is embedded in the data definition itself. Options is for globally controlling either styling aspects for the whole graph, or for performing operations (e.g. filtering) on the whole graph.\n\nDraw-graph splits the options into two sections, those provided by draw-graph itself and those which are pass throughs into graphviz settings.\n\n\n####draw-graph options\n\n\n`node label` is the key from your data to be used as the label on each node.\n\n*Fallback labels*\n\nSometimes in one of your nodes, one of the values might be missing and it's valid that it's missing e.g. \n\n    Bluebird-class::1434\n    \nIn this case, you can specify `node-label` with a fallback key to use, or multiple fallback keys for that matter. e.g. rather than just `name`, specify as `name/id` or even `name/id/class`\n\n\n`cluster on` clusters the graph on one of the keys from your data. For example, setting cluster-on ‘class’ will group the graph by ‘class’.\n\n\n`color on` controls how the color for a node is chosen. By default, draw-graph will generate a light random color for each node based on the setting for `cluster-on` unless you set `color-on` differently. Any node color specified directly in the input data will override this.\n\n\n`node-tooltips` In the output image, node tooltips will appear when hovering over each node. `node-tooltips` should be specified as one or more of the keys in the input data. For example:\n\n    name\n    \nor\n\n    name/animal\n\n`node-url` if one of the key - value pairs on your node data is a url. then that key can be selected here and in the output image, clicking on that node, will take you to the url (in a new browser tab page).\n\n\n`filter-graph` allows you to specify filtering terms which are applied in the preprocessing stage. For example, pick the 'Architecture diagram' example and press draw-graph. In the example, the keys for the nodes and `view`, `function` and `application`. Set `filter-graph` to:\n\n    function:Capture\n    \nand press draw-graph again.\n\nNow set `filter-graph` to:\n\n    function:Captue,function:Lifecycle\n    \n(a series of filter terms don't need to be based on the same key) and hit draw-graph again.\n\n\n`paths` is a slightly more complex way of effectively filtering the graph. Pick the 'Architecture diagram' again and enter:\n\n    function:Capture,function:Lifecycle|function:Reporting\n    \n`paths` is made up of two filter terms separated with the pipe character '|'. The graph is filtered both for the first filter terms and the second. Then a pathfinding algorithm is run between all combinations of the first set of nodes and the second. Any other nodes found on any of those paths (as well as the start and end nodes captured by the filter terms) are shown in the resulting graph.\n`paths` is useful for answering questions about how certain domains connect and what do those connections pass through.\n\n\n`ellide lower levels` will hide the <n> lowest levels (the 'leaf' nodes) in the graph.\n\n\n`highlight roots?` :true/false - will highlight root nodes in the graph as stars symbols. Root nodes are nodes which don’t have any edges going into them.\n\n\n\n**`post process`** set this true to have draw-graph postprocess the output image with the controls.\n\n**Simulated annealing**\n\nSimulated annealing is use in draw-graph to lay out clusters more optimally that Graphviz does. Here's a demo:\n\n")


(def section-2
  "\n\nSimulated annealing is an algorithm that is used to find an optimal solution for a system, given constraints.\nIn this case the system is a series of boxes (clusters) and they are subject to small random moves. Overall the system is trying to find the solution where the boxes cover the greatest possible area, given the constraints that no box can overlap another, or it's boundary or any obstacles in the system (which are represented by the darker boxes).\n\n\nPostprocessing is mainly for the graphviz 'dot' layout.\n\n\n`anneal expand clusters` controls the directions in which annealing can expand clusters.\n\n`anneal bias` In order to get a good result, in a 'dot' TB layout (the graph is laid out Top to Bottom) left and right random moves are on average n times bigger than up down, where n is the number than you set in the box. '3' seems to work well.\n\n`anneal cluster separation` is the gap in pixels which should be preserved between clusters during annealing. If this field is unset, then draw-graph picks up the gaps left by Graphviz and uses those.\n\n`font`. Type the name of a font that you want uses for all text in the image. 'sans-serif' and 'serif' are good choices as they are not tied to the particular machine you're working on and will look roughly the same to everyone.\n\n\n\n####draw-graph options\n\n\n`layout` : this is a Graphviz setting that determines how the graph gets laid out. possible settings are 'dot' 'fdp' 'neato' ‘circo’ ‘twopi’. Please note, that of these, several layouts do not support clustering. It’s worth experimenting with the layout options as these make dramatic differences to the look of the graph. More information is available [here.](https://www.graphviz.org) (under 'Roadmap'). Also, please click through the Examples and note the settings that are used for each. The dot layout is the default and will get you closer to the look and feel of a hand drawn diagram that other layouts which tend to be more specialist.\n\n\n**Please note** that for large graphs - more than a hundred edges - the ‘dot’ layout will be much faster than the other two.\n\n\n`rankdir` is a Graphviz setting that only applies to the dot layout. It controls whether the graph is laid out left to right, top to bottom, etc.\n\n\n`node shape` is a Graphviz setting which controls the style of node shape \n\n\n`node fixedsize` controls whether all nodes are the same size or adapted to their text content.\n\n\n`splines` is a Graphviz setting which controls the style of edges.\n\n\n`nodesep` is a Graphviz setting which specifies the gap (in inches) between nodes in the same rank.\n\n\n`ranksep` is a Graphviz setting which specifies the gap (in inches) between different ranks in the graph. See ’Two facing trees’ in the Graphviz layout tricks section below.\n\n\n`concentrate` draws edges that have a common end point closer together. Useful in large graphs.\n\n\n`overlap` is a Graphviz setting which controls whether/ how nodes are allowed to overlap.\n\n\n`scale` is a Graphviz setting which scales the graph after layout.\n\n\n`edges constaints` is a key control, especially in dot layouts. When set to false the edges in your graphs don't contributes to the ranking algorithm (that ranks nodes top to bottom/ left to right etc) according to how they point to each other. There's an example on rank below. \n\n\nFor more information on any of the Graphviz settings, please see  [here](https://www.graphviz.org/doc/info/attrs.html)\n\n\n### Saving the graph image<a name=“saving”></a>\n\nYou can save you image as an .svg file into the downloads folder that your browser uses.\n\n\n### Layout tricks<div id=“layout-tricks” />\n\nHere are some tips on how to solve certain graph layout challenges.\n\n#### 1. Two facing trees\n\n*The importance of rank* in 'dot' layouts.\n\nSometimes you might want to show how the nodes in two tree-like clusters relate to each other, but can face a problem that both trees face the same way, when you would rather have them facing each other.\nHere’s an example of the problem:\n![two trees facing one way](img/two-trees1.png)\n\nThe trick to fixing this problem is to understand Graphviz’s concept of rank (in the dot layout).\nIn the image, prds:b2 points to grc:b1. That’s why the whole grc cluster is shifted to the right of prds.\nWe can fix this and get the grc cluster over to the right and facing back towards prds by reversing the direction of all the edges *just inside the grc cluster/tree*. We’ll also need to get the arrows inside the grc cluster to point the other way.\n\nSo for example the edge:\n\n    grc:a1,grc:b1\n\nNeeds to become\n\n    grc:b1,grc:a1,dir:back\n\nIf you do that for each of the internal edges of grc, the resulting image will look like so:\n![two trees facing each other](img/two-trees2.png)\n\nFinally, for larger trees when many connections between them, you might want to separate the two trees more. This can be accomplished by adding on an attribute to the edges *between the two trees* `minlen:5` - or any number for the ‘minimum length’ that you want.\n\nPlease see the ‘two facing trees’ example and its data for how this accomplished for two larger trees that need to face each other.\n\n\nIn different types of pictures using the dot layout, fine tuning the layout can usually be accomplished by playing around with the relative rank of nodes by for example turning `edge constraints` in the options to false and introducing 'invisible edges' with `constraint:true` in their attributes.\nDraw-graph itself makes extensive use of invisible edges*, such that it is recommended not to use them yourself (i.e. don't add `style:invis` to your edges). Instead, make the edges fully transparent in color. See for example the 'Complex cluster layout' example which has an edge with the color set as so: `color:#c731ed00`. Adding `00` on the end of any hex color code is the recommended way to make `constraint:true` edges invisible.\n\n*For expressing the layout of cluster edges.\n")

;; Random generation of rectangles for anneal demo

(def bounds [3 3 580 360])


(def boundary (zipmap [:x :y :w :h] bounds)) ;; used to display the bounding rect


(def sep 5)


(def inner-boundary (g/inner-rect sep boundary)) ;; shifted in by 5. used for constraints


(defn rand-rect [bdry]
  {(gensym)
   {:x (+ (:x bdry) (rand-int (:w bdry)))
    :y (+ (:y bdry) (rand-int (:h bdry)))
    :w (rand-int (int (/ (:w bdry) 5)))
    :h (rand-int (int (/ (:h bdry) 5)))}})


(defn- rand-rects*
  [bdry sep]
  (lazy-seq (cons (rand-rect bdry) (rand-rects* bdry))))


(defn rand-rects
  [n bdry sep]
  (reduce
   (fn [a c]
     (if (= (count a) n)
       (reduced a)
       (if (and
            (not-any? #((partial g/overlaps? sep (first (vals c)))  %) (vals a))
            (g/inside? bdry (first (vals c))))
         (merge a c)
         a)))
   {}
   (take (+ n 30) (rand-rects* bdry sep))))


;; Simulating annealing demo

(defn timeout [ms]
  (let [c (chan)]
    (js/setTimeout (fn [] (close! c)) ms)
    c))


(def state (r/atom {:running false}))


(defn rect [r & {:keys [fill?] :or {fill? false}}]
  [:rect {:x (:x r) :y (:y r) :width  (:w r) :height (:h r)
          :style {:fill (if fill? "#98b4c7" "#d7e5ee")
                  :stroke "#98b4c7"
                  :stroke-width 2}}])


(defn gen-rects []
  (rand-rects (+ 4 (rand-int 7))
                inner-boundary 5))


(defn rects->svg [state filled?]
  (if filled?
    (map #(rect % :fill? filled?) (vals state))
    (map #(rect %) (vals state))))


(def constraints
  {:boundary inner-boundary
   :collision sep
   :grow true})


(def log (.-log js/console))


(defn a [n]
  (if (:running @state)
    (swap! state assoc :state
           (a/annealing (:state @state) n 0 (:constraints @state) a/neighbor-fn a/cost-fn a/p-fn a/temp-fn :dims [:x :y :w :h]))))


(defn anneal []
  (go
    (dotimes [n 72]
      (do
        (a 100)
        (<! (timeout 40))))))


(defn generate []
  (let [rects (gen-rects)
        ob? (if (= 0 (rand-int 2)) false true)
        st (if ob? (into {} (rest rects)) rects)
        obs (if ob? (into {} [(first rects)]) [])]
    (do (swap! state assoc :state st)
        (swap! state assoc :running false)
        (swap! state assoc :constraints
               (assoc constraints :obstacles obs)))))


(defn anneal-demo []
  (fn []
    [:div.anneal-demo
     [:div
      [:svg {:x 0 :y 0 :width 600 :height 400}
       (rect boundary)
       (rects->svg (:state @state) false)
       (rects->svg (-> @state :constraints :obstacles) true)]]
     [:input {:type "button" :value "Generate"
              :on-click generate}]
     [:input {:type "button" :value "Anneal!"
              :on-click #(do (swap! state assoc :running true) (anneal))}]]))

;; -------------------------
;; Page

(defn help-page []
  [:div.block-text
   [:p (utils/md->hiccup section-1)]
   [:p "(slowed down ~50x. Obstacles shown as filled rectangles.)"]
   [:div [anneal-demo]]
   [:p (utils/md->hiccup section-2)]
   ;@state
   ])

