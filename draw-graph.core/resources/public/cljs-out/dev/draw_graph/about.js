// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('draw_graph.about');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('markdown_to_hiccup.core');
goog.require('draw_graph.utils');
draw_graph.about.page_content = "There are lots of graph/ networking diagramming tools online. This is one of them.\n\ndraw-graph came about because I\u2019ve found graph diagrams extremely useful in the past, but I\u2019ve found that the fully featured tools like Graphviz are not that accessible to the non-technical user or they make you use a gui to construct a graph visually, node by node, and that's laborious.\n\nThere are lots of Excel experts and a a lot of data lying around in spreadsheets or can be got into spreadsheets though. So draw-graph has a csv input format.\n\nThe backend of draw-graph runs on Amazon AWS Lambda.\n\nEnjoy!\n";
draw_graph.about.about_page = (function draw_graph$about$about_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$block_DASH_text,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,draw_graph.utils.md__GT_hiccup(draw_graph.about.page_content)], null)], null);
});
