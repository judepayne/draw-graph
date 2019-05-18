// Compiled by ClojureScript 1.10.439 {:target :nashorn}
goog.provide('lib_draw_graph.svg');
goog.require('cljs.core');
goog.require('clojure.zip');
goog.require('clojure.data.zip.xml');
goog.require('clojure.data.xml');
goog.require('instaparse.core');

/**
 * @interface
 */
lib_draw_graph.svg.Geom = function(){};

lib_draw_graph.svg.add = (function lib_draw_graph$svg$add(this$,that){
if((((!((this$ == null)))) && ((!((this$.lib_draw_graph$svg$Geom$add$arity$2 == null)))))){
return this$.lib_draw_graph$svg$Geom$add$arity$2(this$,that);
} else {
var x__4347__auto__ = (((this$ == null))?null:this$);
var m__4348__auto__ = (lib_draw_graph.svg.add[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,this$,that);
} else {
var m__4348__auto____$1 = (lib_draw_graph.svg.add["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,this$,that);
} else {
throw cljs.core.missing_protocol.call(null,"Geom.add",this$);
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"Long","Long",-1427240163,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"y","y",-117328249,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"Long","Long",-1427240163,null)], null))], null);
});

lib_draw_graph.svg.xy.cljs$lang$type = true;

lib_draw_graph.svg.xy.cljs$lang$ctorStr = "lib-draw-graph.svg/xy";

lib_draw_graph.svg.xy.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"lib-draw-graph.svg/xy");
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
var args__4647__auto__ = [];
var len__4641__auto___30287 = arguments.length;
var i__4642__auto___30288 = (0);
while(true){
if((i__4642__auto___30288 < len__4641__auto___30287)){
args__4647__auto__.push((arguments[i__4642__auto___30288]));

var G__30289 = (i__4642__auto___30288 + (1));
i__4642__auto___30288 = G__30289;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return lib_draw_graph.svg.xs.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

lib_draw_graph.svg.xs.cljs$core$IFn$_invoke$arity$variadic = (function (xys){
return cljs.core.map.call(null,(function (p1__30285_SHARP_){
return p1__30285_SHARP_.x;
}),xys);
});

lib_draw_graph.svg.xs.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
lib_draw_graph.svg.xs.cljs$lang$applyTo = (function (seq30286){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30286));
});

/**
 * Returns the y components of the xys
 */
lib_draw_graph.svg.ys = (function lib_draw_graph$svg$ys(var_args){
var args__4647__auto__ = [];
var len__4641__auto___30293 = arguments.length;
var i__4642__auto___30294 = (0);
while(true){
if((i__4642__auto___30294 < len__4641__auto___30293)){
args__4647__auto__.push((arguments[i__4642__auto___30294]));

var G__30295 = (i__4642__auto___30294 + (1));
i__4642__auto___30294 = G__30295;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return lib_draw_graph.svg.ys.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

lib_draw_graph.svg.ys.cljs$core$IFn$_invoke$arity$variadic = (function (xys){
return cljs.core.map.call(null,(function (p1__30291_SHARP_){
return p1__30291_SHARP_.y;
}),xys);
});

lib_draw_graph.svg.ys.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
lib_draw_graph.svg.ys.cljs$lang$applyTo = (function (seq30292){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30292));
});

lib_draw_graph.svg.str_pair__GT_xy = (function lib_draw_graph$svg$str_pair__GT_xy(pair){
return (new lib_draw_graph.svg.xy(cljs.reader.read_string(cljs.core.first.call(null,pair)),cljs.reader.read_string(cljs.core.second.call(null,pair))));
});
lib_draw_graph.svg.regex_number = "#'-?[0-9]\\d*(\\.\\d+)?'";
lib_draw_graph.svg.whitespace = instaparse.core.parser.call(null,"whitespace = #'\\s+'");
lib_draw_graph.svg.path_parser = instaparse.core.parser.call(null,["S = M? C?\n    M = <'M'>P\n    C = <'C'>Ns+\n    <Ns> = P P P\n    <P> = N Comma N\n    <Comma> = <','>\n    <N> = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib_draw_graph.svg.regex_number)].join(''),new cljs.core.Keyword(null,"auto-whitespace","auto-whitespace",741152317),lib_draw_graph.svg.whitespace);
lib_draw_graph.svg.parse_path = (function lib_draw_graph$svg$parse_path(s){
return instaparse.core.transform.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"M","M",-1755742206),(function() { 
var G__30296__delegate = function (args){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"M","M",-1755742206),lib_draw_graph.svg.str_pair__GT_xy.call(null,args)], null);
};
var G__30296 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30297__i = 0, G__30297__a = new Array(arguments.length -  0);
while (G__30297__i < G__30297__a.length) {G__30297__a[G__30297__i] = arguments[G__30297__i + 0]; ++G__30297__i;}
  args = new cljs.core.IndexedSeq(G__30297__a,0,null);
} 
return G__30296__delegate.call(this,args);};
G__30296.cljs$lang$maxFixedArity = 0;
G__30296.cljs$lang$applyTo = (function (arglist__30298){
var args = cljs.core.seq(arglist__30298);
return G__30296__delegate(args);
});
G__30296.cljs$core$IFn$_invoke$arity$variadic = G__30296__delegate;
return G__30296;
})()
,new cljs.core.Keyword(null,"C","C",-173629587),(function() { 
var G__30299__delegate = function (args){
return cljs.core.map.call(null,(function (c){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"C","C",-173629587),c], null);
}),cljs.core.partition.call(null,(3),cljs.core.mapv.call(null,lib_draw_graph.svg.str_pair__GT_xy,cljs.core.partition.call(null,(2),args))));
};
var G__30299 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30300__i = 0, G__30300__a = new Array(arguments.length -  0);
while (G__30300__i < G__30300__a.length) {G__30300__a[G__30300__i] = arguments[G__30300__i + 0]; ++G__30300__i;}
  args = new cljs.core.IndexedSeq(G__30300__a,0,null);
} 
return G__30299__delegate.call(this,args);};
G__30299.cljs$lang$maxFixedArity = 0;
G__30299.cljs$lang$applyTo = (function (arglist__30301){
var args = cljs.core.seq(arglist__30301);
return G__30299__delegate(args);
});
G__30299.cljs$core$IFn$_invoke$arity$variadic = G__30299__delegate;
return G__30299;
})()
,new cljs.core.Keyword(null,"S","S",1267293308),(function() { 
var G__30302__delegate = function (args){
return cljs.core.flatten.call(null,args);
};
var G__30302 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30303__i = 0, G__30303__a = new Array(arguments.length -  0);
while (G__30303__i < G__30303__a.length) {G__30303__a[G__30303__i] = arguments[G__30303__i + 0]; ++G__30303__i;}
  args = new cljs.core.IndexedSeq(G__30303__a,0,null);
} 
return G__30302__delegate.call(this,args);};
G__30302.cljs$lang$maxFixedArity = 0;
G__30302.cljs$lang$applyTo = (function (arglist__30304){
var args = cljs.core.seq(arglist__30304);
return G__30302__delegate(args);
});
G__30302.cljs$core$IFn$_invoke$arity$variadic = G__30302__delegate;
return G__30302;
})()
], null),lib_draw_graph.svg.path_parser.call(null,s));
});
lib_draw_graph.svg.points_parser = instaparse.core.parser.call(null,["S = P+\n    <P> = N Comma N\n    <Comma> = <','>\n    <N> = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib_draw_graph.svg.regex_number)].join(''),new cljs.core.Keyword(null,"auto-whitespace","auto-whitespace",741152317),lib_draw_graph.svg.whitespace);
lib_draw_graph.svg.parse_polygon = (function lib_draw_graph$svg$parse_polygon(s){
return instaparse.core.transform.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"S","S",1267293308),(function() { 
var G__30305__delegate = function (args){
return cljs.core.mapv.call(null,lib_draw_graph.svg.str_pair__GT_xy,cljs.core.partition.call(null,(2),args));
};
var G__30305 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30306__i = 0, G__30306__a = new Array(arguments.length -  0);
while (G__30306__i < G__30306__a.length) {G__30306__a[G__30306__i] = arguments[G__30306__i + 0]; ++G__30306__i;}
  args = new cljs.core.IndexedSeq(G__30306__a,0,null);
} 
return G__30305__delegate.call(this,args);};
G__30305.cljs$lang$maxFixedArity = 0;
G__30305.cljs$lang$applyTo = (function (arglist__30307){
var args = cljs.core.seq(arglist__30307);
return G__30305__delegate(args);
});
G__30305.cljs$core$IFn$_invoke$arity$variadic = G__30305__delegate;
return G__30305;
})()
], null),lib_draw_graph.svg.points_parser.call(null,s));
});
/**
 * Returns the bounding box of the points.
 *   pts should be a collection of xy's
 */
lib_draw_graph.svg.polygon__GT_bounding_box = (function lib_draw_graph$svg$polygon__GT_bounding_box(pts){
var xs = cljs.core.apply.call(null,lib_draw_graph.svg.xs,pts);
var ys = cljs.core.apply.call(null,lib_draw_graph.svg.ys,pts);
var min_x = cljs.core.apply.call(null,cljs.core.min,xs);
var min_y = cljs.core.apply.call(null,cljs.core.min,ys);
var max_x = cljs.core.apply.call(null,cljs.core.max,xs);
var max_y = cljs.core.apply.call(null,cljs.core.max,ys);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"left","left",-399115937),min_x,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),max_y,new cljs.core.Keyword(null,"right","right",-452581833),max_x,new cljs.core.Keyword(null,"top","top",-1856271961),min_y], null);
});
lib_draw_graph.svg.path__GT_bounding_box = (function lib_draw_graph$svg$path__GT_bounding_box(path){
var points = (function lib_draw_graph$svg$path__GT_bounding_box_$_points(collected,item){
if(cljs.core.map_QMARK_.call(null,item)){
return cljs.core.map.call(null,(function (p1__30308_SHARP_){
return lib_draw_graph$svg$path__GT_bounding_box_$_points.call(null,collected,p1__30308_SHARP_);
}),cljs.core.vals.call(null,item));
} else {
if((item instanceof lib_draw_graph.svg.xy)){
return cljs.core.conj.call(null,collected,item);
} else {
if(cljs.core.sequential_QMARK_.call(null,item)){
return cljs.core.map.call(null,(function (p1__30309_SHARP_){
return lib_draw_graph$svg$path__GT_bounding_box_$_points.call(null,collected,p1__30309_SHARP_);
}),item);
} else {
return null;
}
}
}
});
var abs = (function lib_draw_graph$svg$path__GT_bounding_box_$_abs(n){
var x__4135__auto__ = n;
var y__4136__auto__ = (- n);
return ((x__4135__auto__ > y__4136__auto__) ? x__4135__auto__ : y__4136__auto__);
});
var pts = cljs.core.flatten.call(null,points.call(null,cljs.core.PersistentVector.EMPTY,path));
var xs = cljs.core.apply.call(null,lib_draw_graph.svg.xs,pts);
var ys = cljs.core.apply.call(null,lib_draw_graph.svg.ys,pts);
var bdg = lib_draw_graph.svg.polygon__GT_bounding_box.call(null,pts);
var radius = abs.call(null,(new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(bdg) - cljs.core.first.call(null,pts).x));
return cljs.core.assoc.call(null,bdg,new cljs.core.Keyword(null,"radius","radius",-2073122258),radius);
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
lib_draw_graph.svg.bounding_box = (function (){var method_table__4524__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4525__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4526__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4527__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4528__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"lib-draw-graph.svg","bounding-box"),((function (method_table__4524__auto__,prefer_table__4525__auto__,method_cache__4526__auto__,cached_hierarchy__4527__auto__,hierarchy__4528__auto__){
return (function (svg){
return new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(svg);
});})(method_table__4524__auto__,prefer_table__4525__auto__,method_cache__4526__auto__,cached_hierarchy__4527__auto__,hierarchy__4528__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4528__auto__,method_table__4524__auto__,prefer_table__4525__auto__,method_cache__4526__auto__,cached_hierarchy__4527__auto__));
})();
}
cljs.core._add_method.call(null,lib_draw_graph.svg.bounding_box,lib_draw_graph.svg.polygon,(function (svg){
return lib_draw_graph.svg.polygon__GT_bounding_box.call(null,lib_draw_graph.svg.parse_polygon.call(null,new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(svg))));
}));
cljs.core._add_method.call(null,lib_draw_graph.svg.bounding_box,lib_draw_graph.svg.path,(function (svg){
return lib_draw_graph.svg.path__GT_bounding_box.call(null,lib_draw_graph.svg.parse_path.call(null,new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(svg))));
}));
cljs.core._add_method.call(null,lib_draw_graph.svg.bounding_box,lib_draw_graph.svg.ellipse,(function (svg){
var attrs = new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(svg);
var flo = ((function (attrs){
return (function (s){
return parseFloat(s);
});})(attrs))
;
var cx = flo.call(null,new cljs.core.Keyword(null,"cx","cx",1272694324).cljs$core$IFn$_invoke$arity$1(attrs));
var cy = flo.call(null,new cljs.core.Keyword(null,"cy","cy",755331060).cljs$core$IFn$_invoke$arity$1(attrs));
var rx = flo.call(null,new cljs.core.Keyword(null,"rx","rx",1627208482).cljs$core$IFn$_invoke$arity$1(attrs));
var ry = flo.call(null,new cljs.core.Keyword(null,"ry","ry",-334598563).cljs$core$IFn$_invoke$arity$1(attrs));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"left","left",-399115937),(cx - rx),new cljs.core.Keyword(null,"right","right",-452581833),(cx + rx),new cljs.core.Keyword(null,"top","top",-1856271961),(cy - ry),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(cy + ry)], null);
}));
cljs.core._add_method.call(null,lib_draw_graph.svg.bounding_box,lib_draw_graph.svg.circle,(function (svg){
var attrs = new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(svg);
var flo = ((function (attrs){
return (function (s){
return parseFloat(s);
});})(attrs))
;
var cx = flo.call(null,new cljs.core.Keyword(null,"cx","cx",1272694324).cljs$core$IFn$_invoke$arity$1(attrs));
var cy = flo.call(null,new cljs.core.Keyword(null,"cy","cy",755331060).cljs$core$IFn$_invoke$arity$1(attrs));
var r = flo.call(null,new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(attrs));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"left","left",-399115937),(cx - r),new cljs.core.Keyword(null,"right","right",-452581833),(cx + r),new cljs.core.Keyword(null,"top","top",-1856271961),(cy - r),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(cy + r)], null);
}));
/**
 * Converts a bounding box map produced into :x :y :w :h form.
 */
lib_draw_graph.svg.box__GT_rect = (function lib_draw_graph$svg$box__GT_rect(m){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,m,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"left","left",-399115937)),new cljs.core.Keyword(null,"x","x",2099068185),(new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(m) | (0))),new cljs.core.Keyword(null,"y","y",-1757859776),(new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(m) | (0))),new cljs.core.Keyword(null,"w","w",354169001),((new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(m) - new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(m)) | (0))),new cljs.core.Keyword(null,"h","h",1109658740),((new cljs.core.Keyword(null,"bottom","bottom",-1550509018).cljs$core$IFn$_invoke$arity$1(m) - new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(m)) | (0)));
});
lib_draw_graph.svg.all_clusters = (function lib_draw_graph$svg$all_clusters(loc){
return cljs.core._EQ_.call(null,"cluster",new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(clojure.zip.node.call(null,loc))));
});
lib_draw_graph.svg.cluster = (function lib_draw_graph$svg$cluster(cluster,loc){
var content = new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(clojure.zip.node.call(null,loc));
return cljs.core._EQ_.call(null,content,(new cljs.core.List(null,cluster,null,(1),null)));
});
lib_draw_graph.svg.all_nodes = (function lib_draw_graph$svg$all_nodes(loc){
return cljs.core._EQ_.call(null,"node",new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(clojure.zip.node.call(null,loc))));
});
/**
 * For moving to prev for next locations in a zipper. num-locs
 * should be positive for next and negative for previous.
 */
lib_draw_graph.svg.jump = (function lib_draw_graph$svg$jump(num_locs,loc){
if((num_locs > (0))){
return cljs.core.nth.call(null,cljs.core.iterate.call(null,clojure.zip.next,loc),num_locs);
} else {
if((num_locs < (0))){
return cljs.core.nth.call(null,cljs.core.iterate.call(null,clojure.zip.prev,loc),(- num_locs));
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
var parts = clojure.string.split.call(null,node,/\+/);
var raw_node = clojure.string.replace.call(null,node,/\+/,"");
var num_parts = cljs.core.count.call(null,parts);
var jumps = cljs.core.take.call(null,(num_parts - (1)),cljs.core.iterate.call(null,cljs.core.partial.call(null,cljs.core._PLUS_,(3)),(3)));
var get_part = ((function (parts,raw_node,num_parts,jumps){
return (function (loc__$1){
return cljs.core.first.call(null,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(clojure.zip.node.call(null,loc__$1)));
});})(parts,raw_node,num_parts,jumps))
;
var first_part = get_part.call(null,loc);
var contents = clojure.string.join.call(null,cljs.core.cons.call(null,first_part,(function (){var iter__4434__auto__ = ((function (parts,raw_node,num_parts,jumps,get_part,first_part){
return (function lib_draw_graph$svg$node_$_iter__30310(s__30311){
return (new cljs.core.LazySeq(null,((function (parts,raw_node,num_parts,jumps,get_part,first_part){
return (function (){
var s__30311__$1 = s__30311;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__30311__$1);
if(temp__5720__auto__){
var s__30311__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30311__$2)){
var c__4432__auto__ = cljs.core.chunk_first.call(null,s__30311__$2);
var size__4433__auto__ = cljs.core.count.call(null,c__4432__auto__);
var b__30313 = cljs.core.chunk_buffer.call(null,size__4433__auto__);
if((function (){var i__30312 = (0);
while(true){
if((i__30312 < size__4433__auto__)){
var x = cljs.core._nth.call(null,c__4432__auto__,i__30312);
var y = get_part.call(null,lib_draw_graph.svg.jump.call(null,x,loc));
cljs.core.chunk_append.call(null,b__30313,y);

var G__30314 = (i__30312 + (1));
i__30312 = G__30314;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30313),lib_draw_graph$svg$node_$_iter__30310.call(null,cljs.core.chunk_rest.call(null,s__30311__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30313),null);
}
} else {
var x = cljs.core.first.call(null,s__30311__$2);
var y = get_part.call(null,lib_draw_graph.svg.jump.call(null,x,loc));
return cljs.core.cons.call(null,y,lib_draw_graph$svg$node_$_iter__30310.call(null,cljs.core.rest.call(null,s__30311__$2)));
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
return iter__4434__auto__.call(null,jumps);
})()));
return cljs.core._EQ_.call(null,raw_node,contents);
});
lib_draw_graph.svg.parse_svg = (function lib_draw_graph$svg$parse_svg(svg){
return clojure.data.xml.parse_str.call(null,svg);
});
lib_draw_graph.svg.__GT_zipper = (function lib_draw_graph$svg$__GT_zipper(xml){
return clojure.zip.xml_zip.call(null,xml);
});
lib_draw_graph.svg.wrong_svg_header = /xmlns=\"http:\/\/www.w3.org\/2000\/svg\"/;
lib_draw_graph.svg.right_svg_header = "xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"";
lib_draw_graph.svg.wrong_xlink = /xmlns:ns\d+=\"http:\/\/www.w3.org\/1999\/xlink\" ns\d+/;
lib_draw_graph.svg.relic_ns = /ns\d+:/;
lib_draw_graph.svg.__GT_xml = (function lib_draw_graph$svg$__GT_xml(parsed){
var raw = clojure.data.xml.emit_str.call(null,parsed);
var header_fixed = clojure.string.replace_first.call(null,raw,lib_draw_graph.svg.wrong_svg_header,lib_draw_graph.svg.right_svg_header);
var xlink_fixed = clojure.string.replace.call(null,header_fixed,lib_draw_graph.svg.wrong_xlink,"xlink");
var relics_fixed = clojure.string.replace.call(null,xlink_fixed,lib_draw_graph.svg.relic_ns,"");
return relics_fixed;
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
var G__30316 = arguments.length;
switch (G__30316) {
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
return lib_draw_graph.svg.tree_find.call(null,zipper,match_pred,cljs.core.identity);
});

lib_draw_graph.svg.tree_find.cljs$core$IFn$_invoke$arity$3 = (function (zipper,match_pred,shift){
var loc = zipper;
var nodes = cljs.core.PersistentVector.EMPTY;
while(true){
if(clojure.zip.end_QMARK_.call(null,loc)){
return nodes;
} else {
var temp__5718__auto__ = match_pred.call(null,loc);
if(cljs.core.truth_(temp__5718__auto__)){
var matcher_result = temp__5718__auto__;
var G__30318 = clojure.zip.next.call(null,loc);
var G__30319 = cljs.core.conj.call(null,nodes,clojure.zip.node.call(null,lib_draw_graph.svg.jump.call(null,shift,loc)));
loc = G__30318;
nodes = G__30319;
continue;
} else {
var G__30320 = clojure.zip.next.call(null,loc);
var G__30321 = nodes;
loc = G__30320;
nodes = G__30321;
continue;
}
}
break;
}
});

lib_draw_graph.svg.tree_find.cljs$lang$maxFixedArity = 3;

lib_draw_graph.svg.cluster__GT_rect = (function lib_draw_graph$svg$cluster__GT_rect(zipper,clstr){
return lib_draw_graph.svg.box__GT_rect.call(null,cljs.core.assoc.call(null,lib_draw_graph.svg.bounding_box.call(null,cljs.core.first.call(null,lib_draw_graph.svg.tree_find.call(null,zipper,cljs.core.partial.call(null,lib_draw_graph.svg.cluster,clstr),(-2)))),new cljs.core.Keyword(null,"name","name",1843675177),clstr));
});
lib_draw_graph.svg.node__GT_rect = (function lib_draw_graph$svg$node__GT_rect(zipper,nd){
return lib_draw_graph.svg.box__GT_rect.call(null,cljs.core.assoc.call(null,lib_draw_graph.svg.bounding_box.call(null,cljs.core.first.call(null,lib_draw_graph.svg.tree_find.call(null,zipper,cljs.core.partial.call(null,lib_draw_graph.svg.node,nd),(-2)))),new cljs.core.Keyword(null,"name","name",1843675177),nd));
});
/**
 * Generates a bezier. assumes we are moving anti-clockwise.
 * This replicates the way Grpahviz generate a 90 deg bezier.
 */
lib_draw_graph.svg.c = (function lib_draw_graph$svg$c(radius,turn){
var _radius = ((-1) * radius);
var half_r = (radius / (2));
var _half_r = ((-1) * half_r);
var curve = (function (){var G__30322 = turn;
var G__30322__$1 = (((G__30322 instanceof cljs.core.Keyword))?G__30322.fqn:null);
switch (G__30322__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30322__$1)].join('')));

}
})();
return cljs.core.apply.call(null,cljs.core.str,"c ",cljs.core.interpose.call(null," ",curve));
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
return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,lib_draw_graph.svg.add.call(null,start,(new lib_draw_graph.svg.xy((0),height))),lib_draw_graph.svg.add.call(null,start,(new lib_draw_graph.svg.xy(width,height))),lib_draw_graph.svg.add.call(null,start,(new lib_draw_graph.svg.xy(width,(0)))),start], null)));
});
lib_draw_graph.svg.rect__GT_poly = (function lib_draw_graph$svg$rect__GT_poly(r){
return lib_draw_graph.svg.rect_poly.call(null,(new lib_draw_graph.svg.xy(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(r),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(r))),new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(r),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(r));
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
return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M",lib_draw_graph.svg.add.call(null,start,(new lib_draw_graph.svg.xy(radius,height))),lib_draw_graph.svg.l.call(null,w,(0)),lib_draw_graph.svg.c.call(null,radius,new cljs.core.Keyword(null,"up","up",-269712113)),lib_draw_graph.svg.l.call(null,(0),_h),lib_draw_graph.svg.c.call(null,radius,new cljs.core.Keyword(null,"left","left",-399115937)),lib_draw_graph.svg.l.call(null,_w,(0)),lib_draw_graph.svg.c.call(null,radius,new cljs.core.Keyword(null,"down","down",1565245570)),lib_draw_graph.svg.l.call(null,(0),h),lib_draw_graph.svg.c.call(null,radius,new cljs.core.Keyword(null,"right","right",-452581833))], null)));
});
if((typeof lib_draw_graph !== 'undefined') && (typeof lib_draw_graph.svg !== 'undefined') && (typeof lib_draw_graph.svg.rect__GT_svg !== 'undefined')){
} else {
lib_draw_graph.svg.rect__GT_svg = (function (){var method_table__4524__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4525__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4526__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4527__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4528__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"lib-draw-graph.svg","rect->svg"),((function (method_table__4524__auto__,prefer_table__4525__auto__,method_cache__4526__auto__,cached_hierarchy__4527__auto__,hierarchy__4528__auto__){
return (function (r){
return (!((new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(r) == null)));
});})(method_table__4524__auto__,prefer_table__4525__auto__,method_cache__4526__auto__,cached_hierarchy__4527__auto__,hierarchy__4528__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4528__auto__,method_table__4524__auto__,prefer_table__4525__auto__,method_cache__4526__auto__,cached_hierarchy__4527__auto__));
})();
}
cljs.core._add_method.call(null,lib_draw_graph.svg.rect__GT_svg,false,(function (r){
var points = lib_draw_graph.svg.rect_poly.call(null,(new lib_draw_graph.svg.xy(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(r),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(r))),new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(r),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(r));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"points","points",-1486596883),points], null);
}));
cljs.core._add_method.call(null,lib_draw_graph.svg.rect__GT_svg,true,(function (r){
var points = lib_draw_graph.svg.rounded_rect.call(null,(new lib_draw_graph.svg.xy(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(r),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(r))),new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(r),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(r),new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(r));
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
var G__30325 = arguments.length;
switch (G__30325) {
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
return lib_draw_graph.svg.tree_edit.call(null,zipper,matcher,(0),cljs.core.identity,(0),editor);
});

lib_draw_graph.svg.tree_edit.cljs$core$IFn$_invoke$arity$6 = (function (zipper,matcher,k_shift,get_k,d_shift,editor){
var loc = zipper;
while(true){
if(clojure.zip.end_QMARK_.call(null,loc)){
return clojure.zip.root.call(null,loc);
} else {
if(cljs.core.truth_(matcher.call(null,loc))){
var k = get_k.call(null,clojure.zip.node.call(null,lib_draw_graph.svg.jump.call(null,k_shift,loc)));
var new_loc = clojure.zip.edit.call(null,lib_draw_graph.svg.jump.call(null,d_shift,loc),cljs.core.partial.call(null,editor,k));
var G__30327 = clojure.zip.next.call(null,lib_draw_graph.svg.jump.call(null,(- d_shift),new_loc));
loc = G__30327;
continue;
} else {
var G__30328 = clojure.zip.next.call(null,loc);
loc = G__30328;
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
if(clojure.zip.end_QMARK_.call(null,loc)){
return loc;
} else {
var p = clojure.zip.up.call(null,loc);
if(cljs.core.truth_(p)){
var G__30329 = p;
loc = G__30329;
continue;
} else {
return loc;
}
}
break;
}
});
lib_draw_graph.svg.__GT_node = (function lib_draw_graph$svg$__GT_node(loc){
return clojure.zip.node.call(null,loc);
});

//# sourceMappingURL=svg.js.map
