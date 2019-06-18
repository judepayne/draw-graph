goog.provide('main.draw_graph.about');
goog.require('cljs.core');
goog.require('markdown_to_hiccup.core');
goog.require('main.draw_graph.utils');
main.draw_graph.about.page_content = "There are lots of graph/ networking diagramming tools online. This is one of them.\n\ndraw-graph came about because I\u2019ve found graph diagrams extremely useful in the past, but I\u2019ve found that the fully featured tools like Graphviz are not that accessible to the non-technical user or they make you use a gui to construct a graph visually, node by node, and that's laborious.\n\nThere are lots of Excel experts and a a lot of data lying around in spreadsheets or can be got into spreadsheets though. So draw-graph has a csv input format.\n\nThe backend of draw-graph runs on Amazon AWS Lambda.\n\nEnjoy!\n";
main.draw_graph.about.about_page = (function main$draw_graph$about$about_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.block-text","div.block-text",1029445422),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),main.draw_graph.utils.md__GT_hiccup(main.draw_graph.about.page_content)], null)], null);
});

//# sourceMappingURL=main.draw_graph.about.js.map
