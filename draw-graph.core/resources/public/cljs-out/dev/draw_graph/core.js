// Compiled by ClojureScript 1.10.520 {}
goog.provide('draw_graph.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('reagent.core');
goog.require('draw_graph.about');
goog.require('draw_graph.home');
goog.require('draw_graph.help');
goog.require('secretary.core');
goog.require('accountant.core');
draw_graph.core.current_page = (function draw_graph$core$current_page(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return accountant.core.navigate_BANG_.call(null,"/");
})], null),"Home"], null)," | ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return accountant.core.navigate_BANG_.call(null,"/help");
})], null),"help"], null)," | ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return accountant.core.navigate_BANG_.call(null,"/about");
})], null),"about"], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.core.page], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer","footer",1606445390),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.site","span.site",302812633),"draw-graph"], null)," is a free utility by ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/judepayne",new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),"0"], null),"Jude Payne"], null),"."], null)], null)], null);
});
draw_graph.core.selected_page = reagent.core.atom.call(null,draw_graph.home.home_page);
draw_graph.core.page = (function draw_graph$core$page(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,draw_graph.core.selected_page)], null);
});
var action__39697__auto___50753 = (function (params__39698__auto__){
if(cljs.core.map_QMARK_.call(null,params__39698__auto__)){
var map__50748 = params__39698__auto__;
var map__50748__$1 = (((((!((map__50748 == null))))?(((((map__50748.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50748.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50748):map__50748);
return cljs.core.reset_BANG_.call(null,draw_graph.core.selected_page,draw_graph.home.home_page);
} else {
if(cljs.core.vector_QMARK_.call(null,params__39698__auto__)){
var vec__50750 = params__39698__auto__;
return cljs.core.reset_BANG_.call(null,draw_graph.core.selected_page,draw_graph.home.home_page);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__39697__auto___50753);

var action__39697__auto___50759 = (function (params__39698__auto__){
if(cljs.core.map_QMARK_.call(null,params__39698__auto__)){
var map__50754 = params__39698__auto__;
var map__50754__$1 = (((((!((map__50754 == null))))?(((((map__50754.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50754.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50754):map__50754);
return cljs.core.reset_BANG_.call(null,draw_graph.core.selected_page,draw_graph.about.about_page);
} else {
if(cljs.core.vector_QMARK_.call(null,params__39698__auto__)){
var vec__50756 = params__39698__auto__;
return cljs.core.reset_BANG_.call(null,draw_graph.core.selected_page,draw_graph.about.about_page);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/about",action__39697__auto___50759);

var action__39697__auto___50765 = (function (params__39698__auto__){
if(cljs.core.map_QMARK_.call(null,params__39698__auto__)){
var map__50760 = params__39698__auto__;
var map__50760__$1 = (((((!((map__50760 == null))))?(((((map__50760.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50760.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50760):map__50760);
return cljs.core.reset_BANG_.call(null,draw_graph.core.selected_page,draw_graph.help.help_page);
} else {
if(cljs.core.vector_QMARK_.call(null,params__39698__auto__)){
var vec__50762 = params__39698__auto__;
return cljs.core.reset_BANG_.call(null,draw_graph.core.selected_page,draw_graph.help.help_page);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/help",action__39697__auto___50765);

draw_graph.core.get_app_element = (function draw_graph$core$get_app_element(){
return goog.dom.getElement("app");
});
draw_graph.core.mount = (function draw_graph$core$mount(el){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.core.current_page], null),el);
});
draw_graph.core.mount_app_element = (function draw_graph$core$mount_app_element(){
var temp__5720__auto__ = draw_graph.core.get_app_element.call(null);
if(cljs.core.truth_(temp__5720__auto__)){
var el = temp__5720__auto__;
return draw_graph.core.mount.call(null,el);
} else {
return null;
}
});
draw_graph.core.init_BANG_ = (function draw_graph$core$init_BANG_(){
accountant.core.configure_navigation_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nav-handler","nav-handler",2039495484),(function (path){
return secretary.core.dispatch_BANG_.call(null,path);
}),new cljs.core.Keyword(null,"path-exists?","path-exists?",1473384514),(function (path){
return secretary.core.locate_route.call(null,path);
})], null));

accountant.core.dispatch_current_BANG_.call(null);

return draw_graph.core.mount_app_element.call(null);
});
draw_graph.core.init_BANG_.call(null);
draw_graph.core.on_reload = (function draw_graph$core$on_reload(){
return draw_graph.core.mount_app_element.call(null);
});

//# sourceMappingURL=core.js.map
