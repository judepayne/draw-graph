goog.provide('main.draw_graph.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('reagent.core');
goog.require('main.draw_graph.about');
goog.require('main.draw_graph.home');
goog.require('main.draw_graph.help');
goog.require('secretary.core');
goog.require('accountant.core');
main.draw_graph.core.current_page = (function main$draw_graph$core$current_page(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.core","div.core",-2132500478),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$1("/");
})], null),"Home"], null)," | ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$1("/help");
})], null),"help"], null)," | ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$1("/about");
})], null),"about"], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.draw_graph.core.page], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer","footer",1606445390),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.site","span.site",302812633),"draw-graph"], null)," is a free utility by ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/judepayne",new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),"0"], null),"Jude Payne"], null),"."], null)], null)], null);
});
main.draw_graph.core.selected_page = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(main.draw_graph.home.home_page);
main.draw_graph.core.page = (function main$draw_graph$core$page(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(main.draw_graph.core.selected_page)], null);
});
var action__36037__auto___52546 = (function (params__36038__auto__){
if(cljs.core.map_QMARK_(params__36038__auto__)){
var map__52526 = params__36038__auto__;
var map__52526__$1 = (((((!((map__52526 == null))))?(((((map__52526.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52526.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52526):map__52526);
return cljs.core.reset_BANG_(main.draw_graph.core.selected_page,main.draw_graph.home.home_page);
} else {
if(cljs.core.vector_QMARK_(params__36038__auto__)){
var vec__52528 = params__36038__auto__;
return cljs.core.reset_BANG_(main.draw_graph.core.selected_page,main.draw_graph.home.home_page);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__36037__auto___52546);

var action__36037__auto___52547 = (function (params__36038__auto__){
if(cljs.core.map_QMARK_(params__36038__auto__)){
var map__52531 = params__36038__auto__;
var map__52531__$1 = (((((!((map__52531 == null))))?(((((map__52531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52531.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52531):map__52531);
return cljs.core.reset_BANG_(main.draw_graph.core.selected_page,main.draw_graph.about.about_page);
} else {
if(cljs.core.vector_QMARK_(params__36038__auto__)){
var vec__52534 = params__36038__auto__;
return cljs.core.reset_BANG_(main.draw_graph.core.selected_page,main.draw_graph.about.about_page);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/about",action__36037__auto___52547);

var action__36037__auto___52548 = (function (params__36038__auto__){
if(cljs.core.map_QMARK_(params__36038__auto__)){
var map__52537 = params__36038__auto__;
var map__52537__$1 = (((((!((map__52537 == null))))?(((((map__52537.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52537.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52537):map__52537);
return cljs.core.reset_BANG_(main.draw_graph.core.selected_page,main.draw_graph.help.help_page);
} else {
if(cljs.core.vector_QMARK_(params__36038__auto__)){
var vec__52539 = params__36038__auto__;
return cljs.core.reset_BANG_(main.draw_graph.core.selected_page,main.draw_graph.help.help_page);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/help",action__36037__auto___52548);

main.draw_graph.core.get_app_element = (function main$draw_graph$core$get_app_element(){
return goog.dom.getElement("app");
});
main.draw_graph.core.mount = (function main$draw_graph$core$mount(el){
var G__52543 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.draw_graph.core.current_page], null);
var G__52544 = el;
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__52543,G__52544) : reagent.core.render_component.call(null,G__52543,G__52544));
});
main.draw_graph.core.mount_app_element = (function main$draw_graph$core$mount_app_element(){
var temp__5720__auto__ = main.draw_graph.core.get_app_element();
if(cljs.core.truth_(temp__5720__auto__)){
var el = temp__5720__auto__;
return main.draw_graph.core.mount(el);
} else {
return null;
}
});
main.draw_graph.core.init_BANG_ = (function main$draw_graph$core$init_BANG_(){
accountant.core.configure_navigation_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nav-handler","nav-handler",2039495484),(function (path){
return secretary.core.dispatch_BANG_(path);
}),new cljs.core.Keyword(null,"path-exists?","path-exists?",1473384514),(function (path){
return secretary.core.locate_route(path);
})], null));

accountant.core.dispatch_current_BANG_();

return main.draw_graph.core.mount_app_element();
});
main.draw_graph.core.init_BANG_();
main.draw_graph.core.on_reload = (function main$draw_graph$core$on_reload(){
return main.draw_graph.core.mount_app_element();
});

//# sourceMappingURL=main.draw_graph.core.js.map
