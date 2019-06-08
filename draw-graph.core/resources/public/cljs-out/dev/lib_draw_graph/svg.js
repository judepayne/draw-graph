// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('lib_draw_graph.svg');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.zip');
goog.require('clojure.data.zip.xml');
goog.require('clojure.data.xml');
goog.require('lib_draw_graph.util');
goog.require('instaparse.core');

/**
 * @interface
 */
lib_draw_graph.svg.Geom = function(){};

lib_draw_graph.svg.add = (function lib_draw_graph$svg$add(this$,that){
if((((!((this$ == null)))) && ((!((this$.lib_draw_graph$svg$Geom$add$arity$2 == null)))))){
return this$.lib_draw_graph$svg$Geom$add$arity$2(this$,that);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (lib_draw_graph.svg.add[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(this$,that) : m__4434__auto__.call(null,this$,that));
} else {
var m__4431__auto__ = (lib_draw_graph.svg.add["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(this$,that) : m__4431__auto__.call(null,this$,that));
} else {
throw cljs.core.missing_protocol("Geom.add",this$);
}
}
}
});


/**
* @constructor
 * @implements {lib_draw_graph.svg.Object}
 * @implements {lib_draw_graph.svg.Geom}
*/
lib_draw_graph.svg.xy = (function (x,y){
this.x = x;
this.y = y;
});
lib_draw_graph.svg.xy.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.x),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.y)].join('');
});

lib_draw_graph.svg.xy.prototype.lib_draw_graph$svg$Geom$ = cljs.core.PROTOCOL_SENTINEL;

lib_draw_graph.svg.xy.prototype.lib_draw_graph$svg$Geom$add$arity$2 = (function (this$,that){
var self__ = this;
var this$__$1 = this;
var x_sum = (self__.x + that.x);
var y_sum = (self__.y + that.y);
return (new lib_draw_graph.svg.xy(x_sum,y_sum));
});

lib_draw_graph.svg.xy.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$x,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$Long], null)),cljs.core.with_meta(cljs.core.cst$sym$y,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$Long], null))], null);
});

lib_draw_graph.svg.xy.cljs$lang$type = true;

lib_draw_graph.svg.xy.cljs$lang$ctorStr = "lib-draw-graph.svg/xy";

lib_draw_graph.svg.xy.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"lib-draw-graph.svg/xy");
});

/**
 * Positional factory function for lib-draw-graph.svg/xy.
 */
lib_draw_graph.svg.__GT_xy = (function lib_draw_graph$svg$__GT_xy(x,y){
return (new lib_draw_graph.svg.xy(x,y));
});

/**
 * Returns the x components of the xys
 */
lib_draw_graph.svg.xs = (function lib_draw_graph$svg$xs(var_args){
var args__4736__auto__ = [];
var len__4730__auto___23923 = arguments.length;
var i__4731__auto___23924 = (0);
while(true){
if((i__4731__auto___23924 < len__4730__auto___23923)){
args__4736__auto__.push((arguments[i__4731__auto___23924]));

var G__23925 = (i__4731__auto___23924 + (1));
i__4731__auto___23924 = G__23925;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return lib_draw_graph.svg.xs.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

lib_draw_graph.svg.xs.cljs$core$IFn$_invoke$arity$variadic = (function (xys){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__23921_SHARP_){
return p1__23921_SHARP_.x;
}),xys);
});

lib_draw_graph.svg.xs.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
lib_draw_graph.svg.xs.cljs$lang$applyTo = (function (seq23922){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq23922));
});

/**
 * Returns the y components of the xys
 */
lib_draw_graph.svg.ys = (function lib_draw_graph$svg$ys(var_args){
var args__4736__auto__ = [];
var len__4730__auto___23929 = arguments.length;
var i__4731__auto___23930 = (0);
while(true){
if((i__4731__auto___23930 < len__4730__auto___23929)){
args__4736__auto__.push((arguments[i__4731__auto___23930]));

var G__23931 = (i__4731__auto___23930 + (1));
i__4731__auto___23930 = G__23931;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return lib_draw_graph.svg.ys.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

lib_draw_graph.svg.ys.cljs$core$IFn$_invoke$arity$variadic = (function (xys){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__23927_SHARP_){
return p1__23927_SHARP_.y;
}),xys);
});

lib_draw_graph.svg.ys.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
lib_draw_graph.svg.ys.cljs$lang$applyTo = (function (seq23928){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq23928));
});

lib_draw_graph.svg.str_pair__GT_xy = (function lib_draw_graph$svg$str_pair__GT_xy(pair){
return (new lib_draw_graph.svg.xy((function (){var G__23932 = cljs.core.first(pair);
return cljs.reader.read_string(G__23932);
})(),(function (){var G__23933 = cljs.core.second(pair);
return cljs.reader.read_string(G__23933);
})()));
});
lib_draw_graph.svg.regex_number = "#'-?[0-9]\\d*(\\.\\d+)?'";
lib_draw_graph.svg.whitespace = instaparse.core.parser("whitespace = #'\\s+'");
lib_draw_graph.svg.path_parser = instaparse.core.parser.cljs$core$IFn$_invoke$arity$variadic(["S = M? C?\n    M = <'M'>P\n    C = <'C'>Ns+\n    <Ns> = P P P\n    <P> = N Comma N\n    <Comma> = <','>\n    <N> = ",lib_draw_graph.svg.regex_number].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$auto_DASH_whitespace,lib_draw_graph.svg.whitespace], 0));
lib_draw_graph.svg.parse_path = (function lib_draw_graph$svg$parse_path(s){
var G__23934 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$M,(function() { 
var G__23936__delegate = function (args){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$M,lib_draw_graph.svg.str_pair__GT_xy(args)], null);
};
var G__23936 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23937__i = 0, G__23937__a = new Array(arguments.length -  0);
while (G__23937__i < G__23937__a.length) {G__23937__a[G__23937__i] = arguments[G__23937__i + 0]; ++G__23937__i;}
  args = new cljs.core.IndexedSeq(G__23937__a,0,null);
} 
return G__23936__delegate.call(this,args);};
G__23936.cljs$lang$maxFixedArity = 0;
G__23936.cljs$lang$applyTo = (function (arglist__23938){
var args = cljs.core.seq(arglist__23938);
return G__23936__delegate(args);
});
G__23936.cljs$core$IFn$_invoke$arity$variadic = G__23936__delegate;
return G__23936;
})()
,cljs.core.cst$kw$C,(function() { 
var G__23939__delegate = function (args){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (c){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$C,c], null);
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((3),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(lib_draw_graph.svg.str_pair__GT_xy,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),args))));
};
var G__23939 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23940__i = 0, G__23940__a = new Array(arguments.length -  0);
while (G__23940__i < G__23940__a.length) {G__23940__a[G__23940__i] = arguments[G__23940__i + 0]; ++G__23940__i;}
  args = new cljs.core.IndexedSeq(G__23940__a,0,null);
} 
return G__23939__delegate.call(this,args);};
G__23939.cljs$lang$maxFixedArity = 0;
G__23939.cljs$lang$applyTo = (function (arglist__23941){
var args = cljs.core.seq(arglist__23941);
return G__23939__delegate(args);
});
G__23939.cljs$core$IFn$_invoke$arity$variadic = G__23939__delegate;
return G__23939;
})()
,cljs.core.cst$kw$S,(function() { 
var G__23942__delegate = function (args){
return cljs.core.flatten(args);
};
var G__23942 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23943__i = 0, G__23943__a = new Array(arguments.length -  0);
while (G__23943__i < G__23943__a.length) {G__23943__a[G__23943__i] = arguments[G__23943__i + 0]; ++G__23943__i;}
  args = new cljs.core.IndexedSeq(G__23943__a,0,null);
} 
return G__23942__delegate.call(this,args);};
G__23942.cljs$lang$maxFixedArity = 0;
G__23942.cljs$lang$applyTo = (function (arglist__23944){
var args = cljs.core.seq(arglist__23944);
return G__23942__delegate(args);
});
G__23942.cljs$core$IFn$_invoke$arity$variadic = G__23942__delegate;
return G__23942;
})()
], null);
var G__23935 = (lib_draw_graph.svg.path_parser.cljs$core$IFn$_invoke$arity$1 ? lib_draw_graph.svg.path_parser.cljs$core$IFn$_invoke$arity$1(s) : lib_draw_graph.svg.path_parser.call(null,s));
return (instaparse.core.transform.cljs$core$IFn$_invoke$arity$2 ? instaparse.core.transform.cljs$core$IFn$_invoke$arity$2(G__23934,G__23935) : instaparse.core.transform.call(null,G__23934,G__23935));
});
lib_draw_graph.svg.points_parser = instaparse.core.parser.cljs$core$IFn$_invoke$arity$variadic(["S = P+\n    <P> = N Comma N\n    <Comma> = <','>\n    <N> = ",lib_draw_graph.svg.regex_number].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$auto_DASH_whitespace,lib_draw_graph.svg.whitespace], 0));
lib_draw_graph.svg.parse_polygon = (function lib_draw_graph$svg$parse_polygon(s){
var G__23945 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$S,(function() { 
var G__23947__delegate = function (args){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(lib_draw_graph.svg.str_pair__GT_xy,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),args));
};
var G__23947 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23948__i = 0, G__23948__a = new Array(arguments.length -  0);
while (G__23948__i < G__23948__a.length) {G__23948__a[G__23948__i] = arguments[G__23948__i + 0]; ++G__23948__i;}
  args = new cljs.core.IndexedSeq(G__23948__a,0,null);
} 
return G__23947__delegate.call(this,args);};
G__23947.cljs$lang$maxFixedArity = 0;
G__23947.cljs$lang$applyTo = (function (arglist__23949){
var args = cljs.core.seq(arglist__23949);
return G__23947__delegate(args);
});
G__23947.cljs$core$IFn$_invoke$arity$variadic = G__23947__delegate;
return G__23947;
})()
], null);
var G__23946 = (lib_draw_graph.svg.points_parser.cljs$core$IFn$_invoke$arity$1 ? lib_draw_graph.svg.points_parser.cljs$core$IFn$_invoke$arity$1(s) : lib_draw_graph.svg.points_parser.call(null,s));
return (instaparse.core.transform.cljs$core$IFn$_invoke$arity$2 ? instaparse.core.transform.cljs$core$IFn$_invoke$arity$2(G__23945,G__23946) : instaparse.core.transform.call(null,G__23945,G__23946));
});
/**
 * Returns the bounding box of the points.
 *   pts should be a collection of xy's
 */
lib_draw_graph.svg.polygon__GT_bounding_box = (function lib_draw_graph$svg$polygon__GT_bounding_box(pts){
var xs = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(lib_draw_graph.svg.xs,pts);
var ys = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(lib_draw_graph.svg.ys,pts);
var min_x = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,xs);
var min_y = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,ys);
var max_x = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,xs);
var max_y = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,ys);
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$left,min_x,cljs.core.cst$kw$bottom,max_y,cljs.core.cst$kw$right,max_x,cljs.core.cst$kw$top,min_y], null);
});
lib_draw_graph.svg.path__GT_bounding_box = (function lib_draw_graph$svg$path__GT_bounding_box(path){
var points = (function lib_draw_graph$svg$path__GT_bounding_box_$_points(collected,item){
if(cljs.core.map_QMARK_(item)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__23950_SHARP_){
return lib_draw_graph$svg$path__GT_bounding_box_$_points(collected,p1__23950_SHARP_);
}),cljs.core.vals(item));
} else {
if((item instanceof lib_draw_graph.svg.xy)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(collected,item);
} else {
if(cljs.core.sequential_QMARK_(item)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__23951_SHARP_){
return lib_draw_graph$svg$path__GT_bounding_box_$_points(collected,p1__23951_SHARP_);
}),item);
} else {
return null;
}
}
}
});
var abs = (function lib_draw_graph$svg$path__GT_bounding_box_$_abs(n){
var x__4219__auto__ = n;
var y__4220__auto__ = (- n);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
});
var pts = cljs.core.flatten(points(cljs.core.PersistentVector.EMPTY,path));
var xs = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(lib_draw_graph.svg.xs,pts);
var ys = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(lib_draw_graph.svg.ys,pts);
var bdg = lib_draw_graph.svg.polygon__GT_bounding_box(pts);
var radius = abs((cljs.core.cst$kw$left.cljs$core$IFn$_invoke$arity$1(bdg) - cljs.core.first(pts).x));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(bdg,cljs.core.cst$kw$radius,radius);
});
lib_draw_graph.svg.g = cljs.core.cst$kw$xmlns$http_PERCENT_3A_PERCENT_2F_PERCENT_2Fwww$w3$org_PERCENT_2F2000_PERCENT_2Fsvg_SLASH_g;
lib_draw_graph.svg.title = cljs.core.cst$kw$xmlns$http_PERCENT_3A_PERCENT_2F_PERCENT_2Fwww$w3$org_PERCENT_2F2000_PERCENT_2Fsvg_SLASH_title;
lib_draw_graph.svg.polygon = cljs.core.cst$kw$xmlns$http_PERCENT_3A_PERCENT_2F_PERCENT_2Fwww$w3$org_PERCENT_2F2000_PERCENT_2Fsvg_SLASH_polygon;
lib_draw_graph.svg.path = cljs.core.cst$kw$xmlns$http_PERCENT_3A_PERCENT_2F_PERCENT_2Fwww$w3$org_PERCENT_2F2000_PERCENT_2Fsvg_SLASH_path;
lib_draw_graph.svg.text = cljs.core.cst$kw$xmlns$http_PERCENT_3A_PERCENT_2F_PERCENT_2Fwww$w3$org_PERCENT_2F2000_PERCENT_2Fsvg_SLASH_text;
lib_draw_graph.svg.ellipse = cljs.core.cst$kw$xmlns$http_PERCENT_3A_PERCENT_2F_PERCENT_2Fwww$w3$org_PERCENT_2F2000_PERCENT_2Fsvg_SLASH_ellipse;
lib_draw_graph.svg.circle = cljs.core.cst$kw$xmlns$http_PERCENT_3A_PERCENT_2F_PERCENT_2Fwww$w3$org_PERCENT_2F2000_PERCENT_2Fsvg_SLASH_circle;
if((typeof lib_draw_graph !== 'undefined') && (typeof lib_draw_graph.svg !== 'undefined') && (typeof lib_draw_graph.svg.bounding_box !== 'undefined')){
} else {
/**
 * Takes in a chunk of svg and returns a map specifying the bounding rectangle.
 */
lib_draw_graph.svg.bounding_box = (function (){var method_table__4613__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__23952 = cljs.core.get_global_hierarchy;
return (fexpr__23952.cljs$core$IFn$_invoke$arity$0 ? fexpr__23952.cljs$core$IFn$_invoke$arity$0() : fexpr__23952.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("lib-draw-graph.svg","bounding-box"),((function (method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__){
return (function (svg){
return cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(svg);
});})(method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__))
,cljs.core.cst$kw$default,hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
lib_draw_graph.svg.bounding_box.cljs$core$IMultiFn$_add_method$arity$3(null,lib_draw_graph.svg.polygon,(function (svg){
return lib_draw_graph.svg.polygon__GT_bounding_box(lib_draw_graph.svg.parse_polygon(cljs.core.cst$kw$points.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(svg))));
}));
lib_draw_graph.svg.bounding_box.cljs$core$IMultiFn$_add_method$arity$3(null,lib_draw_graph.svg.path,(function (svg){
return lib_draw_graph.svg.path__GT_bounding_box(lib_draw_graph.svg.parse_path(cljs.core.cst$kw$d.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(svg))));
}));
lib_draw_graph.svg.bounding_box.cljs$core$IMultiFn$_add_method$arity$3(null,lib_draw_graph.svg.ellipse,(function (svg){
var attrs = cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(svg);
var flo = ((function (attrs){
return (function (s){
return parseFloat(s);
});})(attrs))
;
var cx = flo(cljs.core.cst$kw$cx.cljs$core$IFn$_invoke$arity$1(attrs));
var cy = flo(cljs.core.cst$kw$cy.cljs$core$IFn$_invoke$arity$1(attrs));
var rx = flo(cljs.core.cst$kw$rx.cljs$core$IFn$_invoke$arity$1(attrs));
var ry = flo(cljs.core.cst$kw$ry.cljs$core$IFn$_invoke$arity$1(attrs));
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$left,(cx - rx),cljs.core.cst$kw$right,(cx + rx),cljs.core.cst$kw$top,(cy - ry),cljs.core.cst$kw$bottom,(cy + ry)], null);
}));
lib_draw_graph.svg.bounding_box.cljs$core$IMultiFn$_add_method$arity$3(null,lib_draw_graph.svg.circle,(function (svg){
var attrs = cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(svg);
var flo = ((function (attrs){
return (function (s){
return parseFloat(s);
});})(attrs))
;
var cx = flo(cljs.core.cst$kw$cx.cljs$core$IFn$_invoke$arity$1(attrs));
var cy = flo(cljs.core.cst$kw$cy.cljs$core$IFn$_invoke$arity$1(attrs));
var r = flo(cljs.core.cst$kw$r.cljs$core$IFn$_invoke$arity$1(attrs));
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$left,(cx - r),cljs.core.cst$kw$right,(cx + r),cljs.core.cst$kw$top,(cy - r),cljs.core.cst$kw$bottom,(cy + r)], null);
}));
/**
 * Converts a bounding box map produced into :x :y :w :h form.
 */
lib_draw_graph.svg.box__GT_rect = (function lib_draw_graph$svg$box__GT_rect(m){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(m,cljs.core.cst$kw$bottom,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$top,cljs.core.cst$kw$right,cljs.core.cst$kw$left], 0)),cljs.core.cst$kw$x,(cljs.core.cst$kw$left.cljs$core$IFn$_invoke$arity$1(m) | (0))),cljs.core.cst$kw$y,(cljs.core.cst$kw$top.cljs$core$IFn$_invoke$arity$1(m) | (0))),cljs.core.cst$kw$w,((cljs.core.cst$kw$right.cljs$core$IFn$_invoke$arity$1(m) - cljs.core.cst$kw$left.cljs$core$IFn$_invoke$arity$1(m)) | (0))),cljs.core.cst$kw$h,((cljs.core.cst$kw$bottom.cljs$core$IFn$_invoke$arity$1(m) - cljs.core.cst$kw$top.cljs$core$IFn$_invoke$arity$1(m)) | (0)));
});
lib_draw_graph.svg.all_clusters = (function lib_draw_graph$svg$all_clusters(loc){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("cluster",cljs.core.cst$kw$class.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(clojure.zip.node(loc))));
});
lib_draw_graph.svg.cluster = (function lib_draw_graph$svg$cluster(cluster,loc){
var content = cljs.core.cst$kw$content.cljs$core$IFn$_invoke$arity$1(clojure.zip.node(loc));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(content,(new cljs.core.List(null,cluster,null,(1),null)));
});
lib_draw_graph.svg.all_nodes = (function lib_draw_graph$svg$all_nodes(loc){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("node",cljs.core.cst$kw$class.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(clojure.zip.node(loc))));
});
/**
 * For moving to prev for next locations in a zipper. num-locs
 * should be positive for next and negative for previous.
 */
lib_draw_graph.svg.jump = (function lib_draw_graph$svg$jump(num_locs,loc){
if((num_locs > (0))){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.iterate(clojure.zip.next,loc),num_locs);
} else {
if((num_locs < (0))){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.iterate(clojure.zip.prev,loc),(- num_locs));
} else {
if(cljs.core.truth_((0))){
return loc;
} else {
return null;
}
}
}
});
/**
 * Matches the text of a node, including accomodating text split
 * with the special '+' characters.
 */
lib_draw_graph.svg.node = (function lib_draw_graph$svg$node(node,loc){
var parts = clojure.string.split.cljs$core$IFn$_invoke$arity$2(node,/\+/);
var raw_node = clojure.string.replace(node,/\+/,"");
var num_parts = cljs.core.count(parts);
var jumps = cljs.core.take.cljs$core$IFn$_invoke$arity$2((num_parts - (1)),cljs.core.iterate(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,(3)),(3)));
var get_part = ((function (parts,raw_node,num_parts,jumps){
return (function (loc__$1){
return cljs.core.first(cljs.core.cst$kw$content.cljs$core$IFn$_invoke$arity$1(clojure.zip.node(loc__$1)));
});})(parts,raw_node,num_parts,jumps))
;
var first_part = get_part(loc);
var contents = clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.cons(first_part,(function (){var iter__4523__auto__ = ((function (parts,raw_node,num_parts,jumps,get_part,first_part){
return (function lib_draw_graph$svg$node_$_iter__23953(s__23954){
return (new cljs.core.LazySeq(null,((function (parts,raw_node,num_parts,jumps,get_part,first_part){
return (function (){
var s__23954__$1 = s__23954;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__23954__$1);
if(temp__5720__auto__){
var s__23954__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23954__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__23954__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__23956 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__23955 = (0);
while(true){
if((i__23955 < size__4522__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__23955);
var y = get_part(lib_draw_graph.svg.jump(x,loc));
cljs.core.chunk_append(b__23956,y);

var G__23957 = (i__23955 + (1));
i__23955 = G__23957;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23956),lib_draw_graph$svg$node_$_iter__23953(cljs.core.chunk_rest(s__23954__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23956),null);
}
} else {
var x = cljs.core.first(s__23954__$2);
var y = get_part(lib_draw_graph.svg.jump(x,loc));
return cljs.core.cons(y,lib_draw_graph$svg$node_$_iter__23953(cljs.core.rest(s__23954__$2)));
}
} else {
return null;
}
break;
}
});})(parts,raw_node,num_parts,jumps,get_part,first_part))
,null,null));
});})(parts,raw_node,num_parts,jumps,get_part,first_part))
;
return iter__4523__auto__(jumps);
})()));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(raw_node,contents);
});
lib_draw_graph.svg.parse_svg = (function lib_draw_graph$svg$parse_svg(svg){
return clojure.data.xml.parse_str(svg);
});
lib_draw_graph.svg.__GT_zipper = (function lib_draw_graph$svg$__GT_zipper(xml){
return clojure.zip.xml_zip(xml);
});
lib_draw_graph.svg.wrong_svg_header = /xmlns=\"http:\/\/www.w3.org\/2000\/svg\"/;
lib_draw_graph.svg.right_svg_header = "xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"";
lib_draw_graph.svg.wrong_xlink = /xmlns:ns\d+=\"http:\/\/www.w3.org\/1999\/xlink\" ns\d+/;
lib_draw_graph.svg.relic_ns = /ns\d+:/;
lib_draw_graph.svg.__GT_xml = (function lib_draw_graph$svg$__GT_xml(parsed){
var raw = clojure.data.xml.emit_str(parsed);
var fixed = clojure.string.replace(raw,lib_draw_graph.svg.wrong_xlink,"xlink");
var fixed2 = clojure.string.replace(fixed,lib_draw_graph.svg.relic_ns,"xlink:");
var fixed3 = clojure.string.replace(fixed2,lib_draw_graph.svg.wrong_svg_header,lib_draw_graph.svg.right_svg_header);
return fixed3;
});
/**
 * Returns a vector of all matching nodes in the zipper.
 * match-pred is a predicate used to match each node. jump is
 * a function that takes a loc and returns another loc in the zipper.
 * i.e. a certain 'jump' away from each of the matched nodes.
 * 
 * Example usage:
 *   (tree-find z (partial cluster "pandas") -2)
 * will return all nodes in the zipper z which are two locs previous
 * to the nodes matched by the function (partial cluster "pandas")
 */
lib_draw_graph.svg.tree_find = (function lib_draw_graph$svg$tree_find(var_args){
var G__23959 = arguments.length;
switch (G__23959) {
case 2:
return lib_draw_graph.svg.tree_find.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return lib_draw_graph.svg.tree_find.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

lib_draw_graph.svg.tree_find.cljs$core$IFn$_invoke$arity$2 = (function (zipper,match_pred){
return lib_draw_graph.svg.tree_find.cljs$core$IFn$_invoke$arity$3(zipper,match_pred,cljs.core.identity);
});

lib_draw_graph.svg.tree_find.cljs$core$IFn$_invoke$arity$3 = (function (zipper,match_pred,shift){
var loc = zipper;
var nodes = cljs.core.PersistentVector.EMPTY;
while(true){
if(clojure.zip.end_QMARK_(loc)){
return nodes;
} else {
var temp__5718__auto__ = (match_pred.cljs$core$IFn$_invoke$arity$1 ? match_pred.cljs$core$IFn$_invoke$arity$1(loc) : match_pred.call(null,loc));
if(cljs.core.truth_(temp__5718__auto__)){
var matcher_result = temp__5718__auto__;
var G__23961 = clojure.zip.next(loc);
var G__23962 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nodes,clojure.zip.node(lib_draw_graph.svg.jump(shift,loc)));
loc = G__23961;
nodes = G__23962;
continue;
} else {
var G__23963 = clojure.zip.next(loc);
var G__23964 = nodes;
loc = G__23963;
nodes = G__23964;
continue;
}
}
break;
}
});

lib_draw_graph.svg.tree_find.cljs$lang$maxFixedArity = 3;

lib_draw_graph.svg.cluster__GT_rect = (function lib_draw_graph$svg$cluster__GT_rect(zipper,clstr){
try{return lib_draw_graph.svg.box__GT_rect(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__23966 = cljs.core.first(lib_draw_graph.svg.tree_find.cljs$core$IFn$_invoke$arity$3(zipper,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(lib_draw_graph.svg.cluster,clstr),(-2)));
return (lib_draw_graph.svg.bounding_box.cljs$core$IFn$_invoke$arity$1 ? lib_draw_graph.svg.bounding_box.cljs$core$IFn$_invoke$arity$1(G__23966) : lib_draw_graph.svg.bounding_box.call(null,G__23966));
})(),cljs.core.cst$kw$name,clstr));
}catch (e23965){if((e23965 instanceof Error)){
var e = e23965;
throw lib_draw_graph.util.err(["Post-processing error: Could not find cluster ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clstr)," in the initial svg"].join(''));
} else {
throw e23965;

}
}});
lib_draw_graph.svg.node__GT_rect = (function lib_draw_graph$svg$node__GT_rect(zipper,nd){
try{return lib_draw_graph.svg.box__GT_rect(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__23968 = cljs.core.first(lib_draw_graph.svg.tree_find.cljs$core$IFn$_invoke$arity$3(zipper,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(lib_draw_graph.svg.node,nd),(-2)));
return (lib_draw_graph.svg.bounding_box.cljs$core$IFn$_invoke$arity$1 ? lib_draw_graph.svg.bounding_box.cljs$core$IFn$_invoke$arity$1(G__23968) : lib_draw_graph.svg.bounding_box.call(null,G__23968));
})(),cljs.core.cst$kw$name,nd));
}catch (e23967){if((e23967 instanceof Error)){
var e = e23967;
throw lib_draw_graph.util.err(["Post-processing error: Could not find node ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(nd)," in the initial svg"].join(''));
} else {
throw e23967;

}
}});
/**
 * Generates a bezier. assumes we are moving anti-clockwise.
 * This replicates the way Grpahviz generate a 90 deg bezier.
 */
lib_draw_graph.svg.c = (function lib_draw_graph$svg$c(radius,turn){
var _radius = ((-1) * radius);
var half_r = (radius / (2));
var _half_r = ((-1) * half_r);
var curve = (function (){var G__23969 = turn;
var G__23969__$1 = (((G__23969 instanceof cljs.core.Keyword))?G__23969.fqn:null);
switch (G__23969__$1) {
case "down":
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [_half_r,(0),_radius,half_r,_radius,radius], null);

break;
case "left":
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),_half_r,_half_r,_radius,_radius,_radius], null);

break;
case "up":
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [half_r,(0),radius,_half_r,radius,_radius], null);

break;
case "right":
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),half_r,half_r,radius,radius,radius], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23969__$1)].join('')));

}
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,"c ",cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",curve));
});
lib_draw_graph.svg.l = (function lib_draw_graph$svg$l(x,y){
return ["l ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new lib_draw_graph.svg.xy(x,y)))].join('');
});
/**
 * Generate the svg points string for a rectangular polygon.
 *   start is an xy (point) at the bottom left of the rectangle.
 */
lib_draw_graph.svg.rect_poly = (function lib_draw_graph$svg$rect_poly(start,width,height){
var _height = ((-1) * height);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,lib_draw_graph.svg.add(start,(new lib_draw_graph.svg.xy((0),height))),lib_draw_graph.svg.add(start,(new lib_draw_graph.svg.xy(width,height))),lib_draw_graph.svg.add(start,(new lib_draw_graph.svg.xy(width,(0)))),start], null)));
});
lib_draw_graph.svg.rect__GT_poly = (function lib_draw_graph$svg$rect__GT_poly(r){
return lib_draw_graph.svg.rect_poly((new lib_draw_graph.svg.xy(cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(r),cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(r))),cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(r),cljs.core.cst$kw$h.cljs$core$IFn$_invoke$arity$1(r));
});
/**
 * Start point is bottom left (right of the curve). We move anti-
 *   clockwise around the polygon.
 */
lib_draw_graph.svg.rounded_rect = (function lib_draw_graph$svg$rounded_rect(start,width,height,radius){
var h = (height - ((2) * radius));
var w = (width - ((2) * radius));
var _h = ((-1) * h);
var _w = ((-1) * w);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M",lib_draw_graph.svg.add(start,(new lib_draw_graph.svg.xy(radius,height))),lib_draw_graph.svg.l(w,(0)),lib_draw_graph.svg.c(radius,cljs.core.cst$kw$up),lib_draw_graph.svg.l((0),_h),lib_draw_graph.svg.c(radius,cljs.core.cst$kw$left),lib_draw_graph.svg.l(_w,(0)),lib_draw_graph.svg.c(radius,cljs.core.cst$kw$down),lib_draw_graph.svg.l((0),h),lib_draw_graph.svg.c(radius,cljs.core.cst$kw$right)], null)));
});
if((typeof lib_draw_graph !== 'undefined') && (typeof lib_draw_graph.svg !== 'undefined') && (typeof lib_draw_graph.svg.rect__GT_svg !== 'undefined')){
} else {
lib_draw_graph.svg.rect__GT_svg = (function (){var method_table__4613__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__23971 = cljs.core.get_global_hierarchy;
return (fexpr__23971.cljs$core$IFn$_invoke$arity$0 ? fexpr__23971.cljs$core$IFn$_invoke$arity$0() : fexpr__23971.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("lib-draw-graph.svg","rect->svg"),((function (method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__){
return (function (r){
return (!((cljs.core.cst$kw$radius.cljs$core$IFn$_invoke$arity$1(r) == null)));
});})(method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__))
,cljs.core.cst$kw$default,hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
lib_draw_graph.svg.rect__GT_svg.cljs$core$IMultiFn$_add_method$arity$3(null,false,(function (r){
var points = lib_draw_graph.svg.rect_poly((new lib_draw_graph.svg.xy(cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(r),cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(r))),cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(r),cljs.core.cst$kw$h.cljs$core$IFn$_invoke$arity$1(r));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$points,points], null);
}));
lib_draw_graph.svg.rect__GT_svg.cljs$core$IMultiFn$_add_method$arity$3(null,true,(function (r){
var points = lib_draw_graph.svg.rounded_rect((new lib_draw_graph.svg.xy(cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(r),cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(r))),cljs.core.cst$kw$w.cljs$core$IFn$_invoke$arity$1(r),cljs.core.cst$kw$h.cljs$core$IFn$_invoke$arity$1(r),cljs.core.cst$kw$radius.cljs$core$IFn$_invoke$arity$1(r));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$d,points], null);
}));
/**
 * Take a zipper, a function that matches a pattern in the tree,
 * and a function that edits the current location in the tree.  Examine the tree
 * nodes in depth-first order, determine whether the matcher matches, and if so
 * apply the editor.
 * k-shift is the jump (from match) to get to the loc where get-k is applied to
 * extract the key.
 * d-shift is the jump (from match) to get to the loc where the data to be edited sits.
 */
lib_draw_graph.svg.tree_edit = (function lib_draw_graph$svg$tree_edit(var_args){
var G__23973 = arguments.length;
switch (G__23973) {
case 3:
return lib_draw_graph.svg.tree_edit.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 6:
return lib_draw_graph.svg.tree_edit.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

lib_draw_graph.svg.tree_edit.cljs$core$IFn$_invoke$arity$3 = (function (zipper,matcher,editor){
return lib_draw_graph.svg.tree_edit.cljs$core$IFn$_invoke$arity$6(zipper,matcher,(0),cljs.core.identity,(0),editor);
});

lib_draw_graph.svg.tree_edit.cljs$core$IFn$_invoke$arity$6 = (function (zipper,matcher,k_shift,get_k,d_shift,editor){
var loc = zipper;
while(true){
if(clojure.zip.end_QMARK_(loc)){
return clojure.zip.root(loc);
} else {
if(cljs.core.truth_((matcher.cljs$core$IFn$_invoke$arity$1 ? matcher.cljs$core$IFn$_invoke$arity$1(loc) : matcher.call(null,loc)))){
var k = (function (){var G__23974 = clojure.zip.node(lib_draw_graph.svg.jump(k_shift,loc));
return (get_k.cljs$core$IFn$_invoke$arity$1 ? get_k.cljs$core$IFn$_invoke$arity$1(G__23974) : get_k.call(null,G__23974));
})();
var new_loc = clojure.zip.edit(lib_draw_graph.svg.jump(d_shift,loc),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(editor,k));
var G__23976 = clojure.zip.next(lib_draw_graph.svg.jump((- d_shift),new_loc));
loc = G__23976;
continue;
} else {
var G__23977 = clojure.zip.next(loc);
loc = G__23977;
continue;
}
}
break;
}
});

lib_draw_graph.svg.tree_edit.cljs$lang$maxFixedArity = 6;

/**
 * zips all the way up and returns the root node, reflecting any
 *  changes.
 */
lib_draw_graph.svg.__GT_root = (function lib_draw_graph$svg$__GT_root(loc){
while(true){
if(clojure.zip.end_QMARK_(loc)){
return loc;
} else {
var p = clojure.zip.up(loc);
if(cljs.core.truth_(p)){
var G__23978 = p;
loc = G__23978;
continue;
} else {
return loc;
}
}
break;
}
});
lib_draw_graph.svg.__GT_node = (function lib_draw_graph$svg$__GT_node(loc){
return clojure.zip.node(loc);
});
