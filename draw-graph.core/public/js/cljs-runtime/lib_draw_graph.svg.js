goog.provide('lib_draw_graph.svg');
goog.require('cljs.core');
goog.require('clojure.zip');
goog.require('clojure.data.zip.xml');
goog.require('clojure.data.xml');
goog.require('lib_draw_graph.util');
goog.require('instaparse.core');

/**
* @constructor
*/
lib_draw_graph.svg.xy = (function (x,y){
this.x = x;
this.y = y;
});
lib_draw_graph.svg.xy.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.x),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.y)].join('');
});

lib_draw_graph.svg.xy.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"Long","Long",-1427240163,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"Long","Long",-1427240163,null)], null))], null);
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

lib_draw_graph.svg.xy.prototype.lib_draw_graph$svg$Geom$ = cljs.core.PROTOCOL_SENTINEL;

lib_draw_graph.svg.xy.prototype.lib_draw_graph$svg$Geom$add$arity$2 = (function (this$,that){
var this$__$1 = this;
var x_sum = (this$__$1.x + that.x);
var y_sum = (this$__$1.y + that.y);
return (new lib_draw_graph.svg.xy(x_sum,y_sum));
});
/**
 * Returns the x components of the xys
 */
lib_draw_graph.svg.xs = (function lib_draw_graph$svg$xs(var_args){
var args__4736__auto__ = [];
var len__4730__auto___36436 = arguments.length;
var i__4731__auto___36437 = (0);
while(true){
if((i__4731__auto___36437 < len__4730__auto___36436)){
args__4736__auto__.push((arguments[i__4731__auto___36437]));

var G__36438 = (i__4731__auto___36437 + (1));
i__4731__auto___36437 = G__36438;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return lib_draw_graph.svg.xs.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

lib_draw_graph.svg.xs.cljs$core$IFn$_invoke$arity$variadic = (function (xys){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36258_SHARP_){
return p1__36258_SHARP_.x;
}),xys);
});

lib_draw_graph.svg.xs.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
lib_draw_graph.svg.xs.cljs$lang$applyTo = (function (seq36261){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq36261));
});

/**
 * Returns the y components of the xys
 */
lib_draw_graph.svg.ys = (function lib_draw_graph$svg$ys(var_args){
var args__4736__auto__ = [];
var len__4730__auto___36441 = arguments.length;
var i__4731__auto___36442 = (0);
while(true){
if((i__4731__auto___36442 < len__4730__auto___36441)){
args__4736__auto__.push((arguments[i__4731__auto___36442]));

var G__36444 = (i__4731__auto___36442 + (1));
i__4731__auto___36442 = G__36444;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return lib_draw_graph.svg.ys.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

lib_draw_graph.svg.ys.cljs$core$IFn$_invoke$arity$variadic = (function (xys){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36269_SHARP_){
return p1__36269_SHARP_.y;
}),xys);
});

lib_draw_graph.svg.ys.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
lib_draw_graph.svg.ys.cljs$lang$applyTo = (function (seq36273){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq36273));
});

lib_draw_graph.svg.str_pair__GT_xy = (function lib_draw_graph$svg$str_pair__GT_xy(pair){
return (new lib_draw_graph.svg.xy(cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(cljs.core.first(pair)),cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(cljs.core.second(pair))));
});
lib_draw_graph.svg.regex_number = "#'-?[0-9]\\d*(\\.\\d+)?'";
lib_draw_graph.svg.whitespace = instaparse.core.parser("whitespace = #'\\s+'");
lib_draw_graph.svg.path_parser = instaparse.core.parser.cljs$core$IFn$_invoke$arity$variadic(["S = M? C?\n    M = <'M'>P\n    C = <'C'>Ns+\n    <Ns> = P P P\n    <P> = N Comma N\n    <Comma> = <','>\n    <N> = ",lib_draw_graph.svg.regex_number].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"auto-whitespace","auto-whitespace",741152317),lib_draw_graph.svg.whitespace], 0));
lib_draw_graph.svg.parse_path = (function lib_draw_graph$svg$parse_path(s){
var G__36299 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"M","M",-1755742206),(function() { 
var G__36446__delegate = function (args){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"M","M",-1755742206),lib_draw_graph.svg.str_pair__GT_xy(args)], null);
};
var G__36446 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36447__i = 0, G__36447__a = new Array(arguments.length -  0);
while (G__36447__i < G__36447__a.length) {G__36447__a[G__36447__i] = arguments[G__36447__i + 0]; ++G__36447__i;}
  args = new cljs.core.IndexedSeq(G__36447__a,0,null);
} 
return G__36446__delegate.call(this,args);};
G__36446.cljs$lang$maxFixedArity = 0;
G__36446.cljs$lang$applyTo = (function (arglist__36448){
var args = cljs.core.seq(arglist__36448);
return G__36446__delegate(args);
});
G__36446.cljs$core$IFn$_invoke$arity$variadic = G__36446__delegate;
return G__36446;
})()
,new cljs.core.Keyword(null,"C","C",-173629587),(function() { 
var G__36450__delegate = function (args){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (c){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"C","C",-173629587),c], null);
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((3),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(lib_draw_graph.svg.str_pair__GT_xy,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),args))));
};
var G__36450 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36453__i = 0, G__36453__a = new Array(arguments.length -  0);
while (G__36453__i < G__36453__a.length) {G__36453__a[G__36453__i] = arguments[G__36453__i + 0]; ++G__36453__i;}
  args = new cljs.core.IndexedSeq(G__36453__a,0,null);
} 
return G__36450__delegate.call(this,args);};
G__36450.cljs$lang$maxFixedArity = 0;
G__36450.cljs$lang$applyTo = (function (arglist__36454){
var args = cljs.core.seq(arglist__36454);
return G__36450__delegate(args);
});
G__36450.cljs$core$IFn$_invoke$arity$variadic = G__36450__delegate;
return G__36450;
})()
,new cljs.core.Keyword(null,"S","S",1267293308),(function() { 
var G__36455__delegate = function (args){
return cljs.core.flatten(args);
};
var G__36455 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36457__i = 0, G__36457__a = new Array(arguments.length -  0);
while (G__36457__i < G__36457__a.length) {G__36457__a[G__36457__i] = arguments[G__36457__i + 0]; ++G__36457__i;}
  args = new cljs.core.IndexedSeq(G__36457__a,0,null);
} 
return G__36455__delegate.call(this,args);};
G__36455.cljs$lang$maxFixedArity = 0;
G__36455.cljs$lang$applyTo = (function (arglist__36458){
var args = cljs.core.seq(arglist__36458);
return G__36455__delegate(args);
});
G__36455.cljs$core$IFn$_invoke$arity$variadic = G__36455__delegate;
return G__36455;
})()
], null);
var G__36300 = (lib_draw_graph.svg.path_parser.cljs$core$IFn$_invoke$arity$1 ? lib_draw_graph.svg.path_parser.cljs$core$IFn$_invoke$arity$1(s) : lib_draw_graph.svg.path_parser.call(null,s));
return (instaparse.core.transform.cljs$core$IFn$_invoke$arity$2 ? instaparse.core.transform.cljs$core$IFn$_invoke$arity$2(G__36299,G__36300) : instaparse.core.transform.call(null,G__36299,G__36300));
});
lib_draw_graph.svg.points_parser = instaparse.core.parser.cljs$core$IFn$_invoke$arity$variadic(["S = P+\n    <P> = N Comma N\n    <Comma> = <','>\n    <N> = ",lib_draw_graph.svg.regex_number].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"auto-whitespace","auto-whitespace",741152317),lib_draw_graph.svg.whitespace], 0));
lib_draw_graph.svg.parse_polygon = (function lib_draw_graph$svg$parse_polygon(s){
var G__36315 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"S","S",1267293308),(function() { 
var G__36460__delegate = function (args){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(lib_draw_graph.svg.str_pair__GT_xy,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),args));
};
var G__36460 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36461__i = 0, G__36461__a = new Array(arguments.length -  0);
while (G__36461__i < G__36461__a.length) {G__36461__a[G__36461__i] = arguments[G__36461__i + 0]; ++G__36461__i;}
  args = new cljs.core.IndexedSeq(G__36461__a,0,null);
} 
return G__36460__delegate.call(this,args);};
G__36460.cljs$lang$maxFixedArity = 0;
G__36460.cljs$lang$applyTo = (function (arglist__36462){
var args = cljs.core.seq(arglist__36462);
return G__36460__delegate(args);
});
G__36460.cljs$core$IFn$_invoke$arity$variadic = G__36460__delegate;
return G__36460;
})()
], null);
var G__36316 = (lib_draw_graph.svg.points_parser.cljs$core$IFn$_invoke$arity$1 ? lib_draw_graph.svg.points_parser.cljs$core$IFn$_invoke$arity$1(s) : lib_draw_graph.svg.points_parser.call(null,s));
return (instaparse.core.transform.cljs$core$IFn$_invoke$arity$2 ? instaparse.core.transform.cljs$core$IFn$_invoke$arity$2(G__36315,G__36316) : instaparse.core.transform.call(null,G__36315,G__36316));
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
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"left","left",-399115937),min_x,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),max_y,new cljs.core.Keyword(null,"right","right",-452581833),max_x,new cljs.core.Keyword(null,"top","top",-1856271961),min_y], null);
});
lib_draw_graph.svg.path__GT_bounding_box = (function lib_draw_graph$svg$path__GT_bounding_box(path){
var points = (function lib_draw_graph$svg$path__GT_bounding_box_$_points(collected,item){
if(cljs.core.map_QMARK_(item)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36317_SHARP_){
return lib_draw_graph$svg$path__GT_bounding_box_$_points(collected,p1__36317_SHARP_);
}),cljs.core.vals(item));
} else {
if((item instanceof lib_draw_graph.svg.xy)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(collected,item);
} else {
if(cljs.core.sequential_QMARK_(item)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36318_SHARP_){
return lib_draw_graph$svg$path__GT_bounding_box_$_points(collected,p1__36318_SHARP_);
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
var radius = abs((new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(bdg) - cljs.core.first(pts).x));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(bdg,new cljs.core.Keyword(null,"radius","radius",-2073122258),radius);
});
lib_draw_graph.svg.g = new cljs.core.Keyword("xmlns.http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg","g","xmlns.http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg/g",-1134886191);
lib_draw_graph.svg.title = new cljs.core.Keyword("xmlns.http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg","title","xmlns.http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg/title",-382816241);
lib_draw_graph.svg.polygon = new cljs.core.Keyword("xmlns.http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg","polygon","xmlns.http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg/polygon",-1029403809);
lib_draw_graph.svg.path = new cljs.core.Keyword("xmlns.http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg","path","xmlns.http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg/path",738872416);
lib_draw_graph.svg.text = new cljs.core.Keyword("xmlns.http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg","text","xmlns.http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg/text",1527010303);
lib_draw_graph.svg.ellipse = new cljs.core.Keyword("xmlns.http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg","ellipse","xmlns.http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg/ellipse",385248982);
lib_draw_graph.svg.circle = new cljs.core.Keyword("xmlns.http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg","circle","xmlns.http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg/circle",649288042);
if((typeof lib_draw_graph !== 'undefined') && (typeof lib_draw_graph.svg !== 'undefined') && (typeof lib_draw_graph.svg.bounding_box !== 'undefined')){
} else {
/**
 * Takes in a chunk of svg and returns a map specifying the bounding rectangle.
 */
lib_draw_graph.svg.bounding_box = (function (){var method_table__4613__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__36349 = cljs.core.get_global_hierarchy;
return (fexpr__36349.cljs$core$IFn$_invoke$arity$0 ? fexpr__36349.cljs$core$IFn$_invoke$arity$0() : fexpr__36349.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("lib-draw-graph.svg","bounding-box"),((function (method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__){
return (function (svg){
return new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(svg);
});})(method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
lib_draw_graph.svg.bounding_box.cljs$core$IMultiFn$_add_method$arity$3(null,lib_draw_graph.svg.polygon,(function (svg){
return lib_draw_graph.svg.polygon__GT_bounding_box(lib_draw_graph.svg.parse_polygon(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(svg))));
}));
lib_draw_graph.svg.bounding_box.cljs$core$IMultiFn$_add_method$arity$3(null,lib_draw_graph.svg.path,(function (svg){
return lib_draw_graph.svg.path__GT_bounding_box(lib_draw_graph.svg.parse_path(new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(svg))));
}));
lib_draw_graph.svg.bounding_box.cljs$core$IMultiFn$_add_method$arity$3(null,lib_draw_graph.svg.ellipse,(function (svg){
var attrs = new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(svg);
var flo = ((function (attrs){
return (function (s){
return parseFloat(s);
});})(attrs))
;
var cx = flo(new cljs.core.Keyword(null,"cx","cx",1272694324).cljs$core$IFn$_invoke$arity$1(attrs));
var cy = flo(new cljs.core.Keyword(null,"cy","cy",755331060).cljs$core$IFn$_invoke$arity$1(attrs));
var rx = flo(new cljs.core.Keyword(null,"rx","rx",1627208482).cljs$core$IFn$_invoke$arity$1(attrs));
var ry = flo(new cljs.core.Keyword(null,"ry","ry",-334598563).cljs$core$IFn$_invoke$arity$1(attrs));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"left","left",-399115937),(cx - rx),new cljs.core.Keyword(null,"right","right",-452581833),(cx + rx),new cljs.core.Keyword(null,"top","top",-1856271961),(cy - ry),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(cy + ry)], null);
}));
lib_draw_graph.svg.bounding_box.cljs$core$IMultiFn$_add_method$arity$3(null,lib_draw_graph.svg.circle,(function (svg){
var attrs = new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(svg);
var flo = ((function (attrs){
return (function (s){
return parseFloat(s);
});})(attrs))
;
var cx = flo(new cljs.core.Keyword(null,"cx","cx",1272694324).cljs$core$IFn$_invoke$arity$1(attrs));
var cy = flo(new cljs.core.Keyword(null,"cy","cy",755331060).cljs$core$IFn$_invoke$arity$1(attrs));
var r = flo(new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(attrs));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"left","left",-399115937),(cx - r),new cljs.core.Keyword(null,"right","right",-452581833),(cx + r),new cljs.core.Keyword(null,"top","top",-1856271961),(cy - r),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(cy + r)], null);
}));
/**
 * Converts a bounding box map produced into :x :y :w :h form.
 */
lib_draw_graph.svg.box__GT_rect = (function lib_draw_graph$svg$box__GT_rect(m){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"left","left",-399115937)], 0)),new cljs.core.Keyword(null,"x","x",2099068185),(new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(m) | (0))),new cljs.core.Keyword(null,"y","y",-1757859776),(new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(m) | (0))),new cljs.core.Keyword(null,"w","w",354169001),((new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(m) - new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(m)) | (0))),new cljs.core.Keyword(null,"h","h",1109658740),((new cljs.core.Keyword(null,"bottom","bottom",-1550509018).cljs$core$IFn$_invoke$arity$1(m) - new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(m)) | (0)));
});
lib_draw_graph.svg.all_clusters = (function lib_draw_graph$svg$all_clusters(loc){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("cluster",new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(clojure.zip.node(loc))));
});
lib_draw_graph.svg.cluster = (function lib_draw_graph$svg$cluster(cluster,loc){
var content = new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(clojure.zip.node(loc));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(content,(new cljs.core.List(null,cluster,null,(1),null)));
});
lib_draw_graph.svg.all_nodes = (function lib_draw_graph$svg$all_nodes(loc){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("node",new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(clojure.zip.node(loc))));
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
return cljs.core.first(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(clojure.zip.node(loc__$1)));
});})(parts,raw_node,num_parts,jumps))
;
var first_part = get_part(loc);
var contents = clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.cons(first_part,(function (){var iter__4523__auto__ = ((function (parts,raw_node,num_parts,jumps,get_part,first_part){
return (function lib_draw_graph$svg$node_$_iter__36371(s__36372){
return (new cljs.core.LazySeq(null,((function (parts,raw_node,num_parts,jumps,get_part,first_part){
return (function (){
var s__36372__$1 = s__36372;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__36372__$1);
if(temp__5720__auto__){
var s__36372__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__36372__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__36372__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__36374 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__36373 = (0);
while(true){
if((i__36373 < size__4522__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__36373);
var y = get_part(lib_draw_graph.svg.jump(x,loc));
cljs.core.chunk_append(b__36374,y);

var G__36495 = (i__36373 + (1));
i__36373 = G__36495;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36374),lib_draw_graph$svg$node_$_iter__36371(cljs.core.chunk_rest(s__36372__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36374),null);
}
} else {
var x = cljs.core.first(s__36372__$2);
var y = get_part(lib_draw_graph.svg.jump(x,loc));
return cljs.core.cons(y,lib_draw_graph$svg$node_$_iter__36371(cljs.core.rest(s__36372__$2)));
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
var G__36388 = arguments.length;
switch (G__36388) {
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
var G__36504 = clojure.zip.next(loc);
var G__36505 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nodes,clojure.zip.node(lib_draw_graph.svg.jump(shift,loc)));
loc = G__36504;
nodes = G__36505;
continue;
} else {
var G__36506 = clojure.zip.next(loc);
var G__36507 = nodes;
loc = G__36506;
nodes = G__36507;
continue;
}
}
break;
}
});

lib_draw_graph.svg.tree_find.cljs$lang$maxFixedArity = 3;

lib_draw_graph.svg.cluster__GT_rect = (function lib_draw_graph$svg$cluster__GT_rect(zipper,clstr){
try{return lib_draw_graph.svg.box__GT_rect(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__36394 = cljs.core.first(lib_draw_graph.svg.tree_find.cljs$core$IFn$_invoke$arity$3(zipper,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(lib_draw_graph.svg.cluster,clstr),(-2)));
return (lib_draw_graph.svg.bounding_box.cljs$core$IFn$_invoke$arity$1 ? lib_draw_graph.svg.bounding_box.cljs$core$IFn$_invoke$arity$1(G__36394) : lib_draw_graph.svg.bounding_box.call(null,G__36394));
})(),new cljs.core.Keyword(null,"name","name",1843675177),clstr));
}catch (e36393){if((e36393 instanceof Error)){
var e = e36393;
throw lib_draw_graph.util.err(["Post-processing error: Could not find cluster ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clstr)," in the initial svg"].join(''));
} else {
throw e36393;

}
}});
lib_draw_graph.svg.node__GT_rect = (function lib_draw_graph$svg$node__GT_rect(zipper,nd){
try{return lib_draw_graph.svg.box__GT_rect(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__36399 = cljs.core.first(lib_draw_graph.svg.tree_find.cljs$core$IFn$_invoke$arity$3(zipper,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(lib_draw_graph.svg.node,nd),(-2)));
return (lib_draw_graph.svg.bounding_box.cljs$core$IFn$_invoke$arity$1 ? lib_draw_graph.svg.bounding_box.cljs$core$IFn$_invoke$arity$1(G__36399) : lib_draw_graph.svg.bounding_box.call(null,G__36399));
})(),new cljs.core.Keyword(null,"name","name",1843675177),nd));
}catch (e36396){if((e36396 instanceof Error)){
var e = e36396;
throw lib_draw_graph.util.err(["Post-processing error: Could not find node ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(nd)," in the initial svg"].join(''));
} else {
throw e36396;

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
var curve = (function (){var G__36400 = turn;
var G__36400__$1 = (((G__36400 instanceof cljs.core.Keyword))?G__36400.fqn:null);
switch (G__36400__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36400__$1)].join('')));

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
return lib_draw_graph.svg.rect_poly((new lib_draw_graph.svg.xy(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(r),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(r))),new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(r),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(r));
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
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M",lib_draw_graph.svg.add(start,(new lib_draw_graph.svg.xy(radius,height))),lib_draw_graph.svg.l(w,(0)),lib_draw_graph.svg.c(radius,new cljs.core.Keyword(null,"up","up",-269712113)),lib_draw_graph.svg.l((0),_h),lib_draw_graph.svg.c(radius,new cljs.core.Keyword(null,"left","left",-399115937)),lib_draw_graph.svg.l(_w,(0)),lib_draw_graph.svg.c(radius,new cljs.core.Keyword(null,"down","down",1565245570)),lib_draw_graph.svg.l((0),h),lib_draw_graph.svg.c(radius,new cljs.core.Keyword(null,"right","right",-452581833))], null)));
});
if((typeof lib_draw_graph !== 'undefined') && (typeof lib_draw_graph.svg !== 'undefined') && (typeof lib_draw_graph.svg.rect__GT_svg !== 'undefined')){
} else {
lib_draw_graph.svg.rect__GT_svg = (function (){var method_table__4613__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4614__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4615__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4616__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4617__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__36405 = cljs.core.get_global_hierarchy;
return (fexpr__36405.cljs$core$IFn$_invoke$arity$0 ? fexpr__36405.cljs$core$IFn$_invoke$arity$0() : fexpr__36405.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("lib-draw-graph.svg","rect->svg"),((function (method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__){
return (function (r){
return (!((new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(r) == null)));
});})(method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__,hierarchy__4617__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4617__auto__,method_table__4613__auto__,prefer_table__4614__auto__,method_cache__4615__auto__,cached_hierarchy__4616__auto__));
})();
}
lib_draw_graph.svg.rect__GT_svg.cljs$core$IMultiFn$_add_method$arity$3(null,false,(function (r){
var points = lib_draw_graph.svg.rect_poly((new lib_draw_graph.svg.xy(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(r),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(r))),new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(r),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(r));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883),points], null);
}));
lib_draw_graph.svg.rect__GT_svg.cljs$core$IMultiFn$_add_method$arity$3(null,true,(function (r){
var points = lib_draw_graph.svg.rounded_rect((new lib_draw_graph.svg.xy(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(r),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(r))),new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(r),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(r),new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(r));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"d","d",1972142424),points], null);
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
var G__36407 = arguments.length;
switch (G__36407) {
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
var k = (function (){var G__36411 = clojure.zip.node(lib_draw_graph.svg.jump(k_shift,loc));
return (get_k.cljs$core$IFn$_invoke$arity$1 ? get_k.cljs$core$IFn$_invoke$arity$1(G__36411) : get_k.call(null,G__36411));
})();
var new_loc = clojure.zip.edit(lib_draw_graph.svg.jump(d_shift,loc),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(editor,k));
var G__36525 = clojure.zip.next(lib_draw_graph.svg.jump((- d_shift),new_loc));
loc = G__36525;
continue;
} else {
var G__36526 = clojure.zip.next(loc);
loc = G__36526;
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
var G__36527 = p;
loc = G__36527;
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

//# sourceMappingURL=lib_draw_graph.svg.js.map
