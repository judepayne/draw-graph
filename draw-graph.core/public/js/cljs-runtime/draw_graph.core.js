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
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.core","div.core",-2132500478),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$1("/");
})], null),"Home"], null)," | ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$1("/help");
})], null),"help"], null)," | ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$1("/about");
})], null),"about"], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.core.page], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer","footer",1606445390),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.site","span.site",302812633),"draw-graph"], null)," is a free utility by ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/judepayne",new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),"0"], null),"Jude Payne"], null),"."], null)], null)], null);
});
draw_graph.core.selected_page = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(draw_graph.home.home_page);
draw_graph.core.page = (function draw_graph$core$page(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(draw_graph.core.selected_page)], null);
});
var action__36350__auto___41169 = (function (params__36351__auto__){
if(cljs.core.map_QMARK_(params__36351__auto__)){
var map__41145 = params__36351__auto__;
var map__41145__$1 = (((((!((map__41145 == null))))?(((((map__41145.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41145.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41145):map__41145);
return cljs.core.reset_BANG_(draw_graph.core.selected_page,draw_graph.home.home_page);
} else {
if(cljs.core.vector_QMARK_(params__36351__auto__)){
var vec__41147 = params__36351__auto__;
return cljs.core.reset_BANG_(draw_graph.core.selected_page,draw_graph.home.home_page);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__36350__auto___41169);

var action__36350__auto___41170 = (function (params__36351__auto__){
if(cljs.core.map_QMARK_(params__36351__auto__)){
var map__41150 = params__36351__auto__;
var map__41150__$1 = (((((!((map__41150 == null))))?(((((map__41150.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41150.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41150):map__41150);
return cljs.core.reset_BANG_(draw_graph.core.selected_page,draw_graph.about.about_page);
} else {
if(cljs.core.vector_QMARK_(params__36351__auto__)){
var vec__41152 = params__36351__auto__;
return cljs.core.reset_BANG_(draw_graph.core.selected_page,draw_graph.about.about_page);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/about",action__36350__auto___41170);

var action__36350__auto___41171 = (function (params__36351__auto__){
if(cljs.core.map_QMARK_(params__36351__auto__)){
var map__41158 = params__36351__auto__;
var map__41158__$1 = (((((!((map__41158 == null))))?(((((map__41158.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41158.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41158):map__41158);
return cljs.core.reset_BANG_(draw_graph.core.selected_page,draw_graph.help.help_page);
} else {
if(cljs.core.vector_QMARK_(params__36351__auto__)){
var vec__41160 = params__36351__auto__;
return cljs.core.reset_BANG_(draw_graph.core.selected_page,draw_graph.help.help_page);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/help",action__36350__auto___41171);

draw_graph.core.get_app_element = (function draw_graph$core$get_app_element(){
return goog.dom.getElement("app");
});
draw_graph.core.mount = (function draw_graph$core$mount(el){
var G__41166 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [draw_graph.core.current_page], null);
var G__41167 = el;
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__41166,G__41167) : reagent.core.render_component.call(null,G__41166,G__41167));
});
draw_graph.core.mount_app_element = (function draw_graph$core$mount_app_element(){
var temp__5720__auto__ = draw_graph.core.get_app_element();
if(cljs.core.truth_(temp__5720__auto__)){
var el = temp__5720__auto__;
return draw_graph.core.mount(el);
} else {
return null;
}
});
draw_graph.core.init_BANG_ = (function draw_graph$core$init_BANG_(){
accountant.core.configure_navigation_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nav-handler","nav-handler",2039495484),(function (path){
return secretary.core.dispatch_BANG_(path);
}),new cljs.core.Keyword(null,"path-exists?","path-exists?",1473384514),(function (path){
return secretary.core.locate_route(path);
})], null));

accountant.core.dispatch_current_BANG_();

return draw_graph.core.mount_app_element();
});
draw_graph.core.init_BANG_();
draw_graph.core.on_reload = (function draw_graph$core$on_reload(){
return draw_graph.core.mount_app_element();
});

//# sourceMappingURL=draw_graph.core.js.map
