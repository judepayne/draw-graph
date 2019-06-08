// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('kvlt.util');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.pprint');
kvlt.util.map_keys = (function kvlt$util$map_keys(f,m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4523__auto__ = (function kvlt$util$map_keys_$_iter__16029(s__16030){
return (new cljs.core.LazySeq(null,(function (){
var s__16030__$1 = s__16030;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__16030__$1);
if(temp__5720__auto__){
var s__16030__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16030__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__16030__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__16032 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__16031 = (0);
while(true){
if((i__16031 < size__4522__auto__)){
var vec__16033 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__16031);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16033,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16033,(1),null);
cljs.core.chunk_append(b__16032,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k) : f.call(null,k)),v], null));

var G__16039 = (i__16031 + (1));
i__16031 = G__16039;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16032),kvlt$util$map_keys_$_iter__16029(cljs.core.chunk_rest(s__16030__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16032),null);
}
} else {
var vec__16036 = cljs.core.first(s__16030__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16036,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16036,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k) : f.call(null,k)),v], null),kvlt$util$map_keys_$_iter__16029(cljs.core.rest(s__16030__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(m);
})());
});
kvlt.util.map_vals = (function kvlt$util$map_vals(f,m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4523__auto__ = (function kvlt$util$map_vals_$_iter__16040(s__16041){
return (new cljs.core.LazySeq(null,(function (){
var s__16041__$1 = s__16041;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__16041__$1);
if(temp__5720__auto__){
var s__16041__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16041__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__16041__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__16043 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__16042 = (0);
while(true){
if((i__16042 < size__4522__auto__)){
var vec__16044 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__16042);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16044,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16044,(1),null);
cljs.core.chunk_append(b__16043,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v))], null));

var G__16050 = (i__16042 + (1));
i__16042 = G__16050;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16043),kvlt$util$map_vals_$_iter__16040(cljs.core.chunk_rest(s__16041__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16043),null);
}
} else {
var vec__16047 = cljs.core.first(s__16041__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16047,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16047,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v))], null),kvlt$util$map_vals_$_iter__16040(cljs.core.rest(s__16041__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(m);
})());
});
var _PLUS_none_PLUS__16055 = cljs.core.cst$kw$kvlt$util_SLASH_none;
kvlt.util.update_when = ((function (_PLUS_none_PLUS__16055){
return (function kvlt$util$update_when(var_args){
var args__4736__auto__ = [];
var len__4730__auto___16056 = arguments.length;
var i__4731__auto___16057 = (0);
while(true){
if((i__4731__auto___16057 < len__4730__auto___16056)){
args__4736__auto__.push((arguments[i__4731__auto___16057]));

var G__16058 = (i__4731__auto___16057 + (1));
i__4731__auto___16057 = G__16058;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return kvlt.util.update_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});})(_PLUS_none_PLUS__16055))
;

kvlt.util.update_when.cljs$core$IFn$_invoke$arity$variadic = ((function (_PLUS_none_PLUS__16055){
return (function (m,key,f,args){
var found = (m.cljs$core$IFn$_invoke$arity$2 ? m.cljs$core$IFn$_invoke$arity$2(key,_PLUS_none_PLUS__16055) : m.call(null,key,_PLUS_none_PLUS__16055));
if((!((_PLUS_none_PLUS__16055 === found)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,key,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,found,args));
} else {
return m;
}
});})(_PLUS_none_PLUS__16055))
;

kvlt.util.update_when.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
kvlt.util.update_when.cljs$lang$applyTo = ((function (_PLUS_none_PLUS__16055){
return (function (seq16051){
var G__16052 = cljs.core.first(seq16051);
var seq16051__$1 = cljs.core.next(seq16051);
var G__16053 = cljs.core.first(seq16051__$1);
var seq16051__$2 = cljs.core.next(seq16051__$1);
var G__16054 = cljs.core.first(seq16051__$2);
var seq16051__$3 = cljs.core.next(seq16051__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16052,G__16053,G__16054,seq16051__$3);
});})(_PLUS_none_PLUS__16055))
;

kvlt.util.bidirectional_chan = (function kvlt$util$bidirectional_chan(var_args){
var args__4736__auto__ = [];
var len__4730__auto___16071 = arguments.length;
var i__4731__auto___16072 = (0);
while(true){
if((i__4731__auto___16072 < len__4730__auto___16071)){
args__4736__auto__.push((arguments[i__4731__auto___16072]));

var G__16073 = (i__4731__auto___16072 + (1));
i__4731__auto___16072 = G__16073;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return kvlt.util.bidirectional_chan.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

kvlt.util.bidirectional_chan.cljs$core$IFn$_invoke$arity$variadic = (function (read_ch,write_ch,p__16062){
var vec__16063 = p__16062;
var map__16066 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16063,(0),null);
var map__16066__$1 = (((((!((map__16066 == null))))?(((((map__16066.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16066.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16066):map__16066);
var on_close = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16066__$1,cljs.core.cst$kw$on_DASH_close);
var close_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16066__$1,cljs.core.cst$kw$close_QMARK_,true);
if((typeof kvlt !== 'undefined') && (typeof kvlt.util !== 'undefined') && (typeof kvlt.util.t_kvlt$util16068 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
kvlt.util.t_kvlt$util16068 = (function (read_ch,write_ch,p__16062,vec__16063,map__16066,on_close,close_QMARK_,meta16069){
this.read_ch = read_ch;
this.write_ch = write_ch;
this.p__16062 = p__16062;
this.vec__16063 = vec__16063;
this.map__16066 = map__16066;
this.on_close = on_close;
this.close_QMARK_ = close_QMARK_;
this.meta16069 = meta16069;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
kvlt.util.t_kvlt$util16068.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__16063,map__16066,map__16066__$1,on_close,close_QMARK_){
return (function (_16070,meta16069__$1){
var self__ = this;
var _16070__$1 = this;
return (new kvlt.util.t_kvlt$util16068(self__.read_ch,self__.write_ch,self__.p__16062,self__.vec__16063,self__.map__16066,self__.on_close,self__.close_QMARK_,meta16069__$1));
});})(vec__16063,map__16066,map__16066__$1,on_close,close_QMARK_))
;

kvlt.util.t_kvlt$util16068.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__16063,map__16066,map__16066__$1,on_close,close_QMARK_){
return (function (_16070){
var self__ = this;
var _16070__$1 = this;
return self__.meta16069;
});})(vec__16063,map__16066,map__16066__$1,on_close,close_QMARK_))
;

kvlt.util.t_kvlt$util16068.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

kvlt.util.t_kvlt$util16068.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = ((function (vec__16063,map__16066,map__16066__$1,on_close,close_QMARK_){
return (function (_,handler){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.read_ch,handler);
});})(vec__16063,map__16066,map__16066__$1,on_close,close_QMARK_))
;

kvlt.util.t_kvlt$util16068.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

kvlt.util.t_kvlt$util16068.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = ((function (vec__16063,map__16066,map__16066__$1,on_close,close_QMARK_){
return (function (_,msg,handler){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.write_ch,msg,handler);
});})(vec__16063,map__16066,map__16066__$1,on_close,close_QMARK_))
;

kvlt.util.t_kvlt$util16068.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

kvlt.util.t_kvlt$util16068.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = ((function (vec__16063,map__16066,map__16066__$1,on_close,close_QMARK_){
return (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.close_QMARK_)){
cljs.core.async.impl.protocols.close_BANG_(self__.read_ch);

cljs.core.async.impl.protocols.close_BANG_(self__.write_ch);
} else {
}

if(cljs.core.truth_(self__.on_close)){
return (self__.on_close.cljs$core$IFn$_invoke$arity$0 ? self__.on_close.cljs$core$IFn$_invoke$arity$0() : self__.on_close.call(null));
} else {
return null;
}
});})(vec__16063,map__16066,map__16066__$1,on_close,close_QMARK_))
;

kvlt.util.t_kvlt$util16068.getBasis = ((function (vec__16063,map__16066,map__16066__$1,on_close,close_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$read_DASH_ch,cljs.core.cst$sym$write_DASH_ch,cljs.core.cst$sym$p__16062,cljs.core.cst$sym$vec__16063,cljs.core.cst$sym$map__16066,cljs.core.cst$sym$on_DASH_close,cljs.core.cst$sym$close_QMARK_,cljs.core.cst$sym$meta16069], null);
});})(vec__16063,map__16066,map__16066__$1,on_close,close_QMARK_))
;

kvlt.util.t_kvlt$util16068.cljs$lang$type = true;

kvlt.util.t_kvlt$util16068.cljs$lang$ctorStr = "kvlt.util/t_kvlt$util16068";

kvlt.util.t_kvlt$util16068.cljs$lang$ctorPrWriter = ((function (vec__16063,map__16066,map__16066__$1,on_close,close_QMARK_){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"kvlt.util/t_kvlt$util16068");
});})(vec__16063,map__16066,map__16066__$1,on_close,close_QMARK_))
;

/**
 * Positional factory function for kvlt.util/t_kvlt$util16068.
 */
kvlt.util.__GT_t_kvlt$util16068 = ((function (vec__16063,map__16066,map__16066__$1,on_close,close_QMARK_){
return (function kvlt$util$__GT_t_kvlt$util16068(read_ch__$1,write_ch__$1,p__16062__$1,vec__16063__$1,map__16066__$2,on_close__$1,close_QMARK___$1,meta16069){
return (new kvlt.util.t_kvlt$util16068(read_ch__$1,write_ch__$1,p__16062__$1,vec__16063__$1,map__16066__$2,on_close__$1,close_QMARK___$1,meta16069));
});})(vec__16063,map__16066,map__16066__$1,on_close,close_QMARK_))
;

}

return (new kvlt.util.t_kvlt$util16068(read_ch,write_ch,p__16062,vec__16063,map__16066__$1,on_close,close_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
});

kvlt.util.bidirectional_chan.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
kvlt.util.bidirectional_chan.cljs$lang$applyTo = (function (seq16059){
var G__16060 = cljs.core.first(seq16059);
var seq16059__$1 = cljs.core.next(seq16059);
var G__16061 = cljs.core.first(seq16059__$1);
var seq16059__$2 = cljs.core.next(seq16059__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16060,G__16061,seq16059__$2);
});

kvlt.util.read_proxy_chan = (function kvlt$util$read_proxy_chan(var_args){
var args__4736__auto__ = [];
var len__4730__auto___16086 = arguments.length;
var i__4731__auto___16087 = (0);
while(true){
if((i__4731__auto___16087 < len__4730__auto___16086)){
args__4736__auto__.push((arguments[i__4731__auto___16087]));

var G__16088 = (i__4731__auto___16087 + (1));
i__4731__auto___16087 = G__16088;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return kvlt.util.read_proxy_chan.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

kvlt.util.read_proxy_chan.cljs$core$IFn$_invoke$arity$variadic = (function (read_ch,on_close,p__16077){
var vec__16078 = p__16077;
var map__16081 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16078,(0),null);
var map__16081__$1 = (((((!((map__16081 == null))))?(((((map__16081.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16081.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16081):map__16081);
var close_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16081__$1,cljs.core.cst$kw$close_QMARK_,true);
if((typeof kvlt !== 'undefined') && (typeof kvlt.util !== 'undefined') && (typeof kvlt.util.t_kvlt$util16083 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
kvlt.util.t_kvlt$util16083 = (function (read_ch,on_close,p__16077,vec__16078,map__16081,close_QMARK_,meta16084){
this.read_ch = read_ch;
this.on_close = on_close;
this.p__16077 = p__16077;
this.vec__16078 = vec__16078;
this.map__16081 = map__16081;
this.close_QMARK_ = close_QMARK_;
this.meta16084 = meta16084;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
kvlt.util.t_kvlt$util16083.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__16078,map__16081,map__16081__$1,close_QMARK_){
return (function (_16085,meta16084__$1){
var self__ = this;
var _16085__$1 = this;
return (new kvlt.util.t_kvlt$util16083(self__.read_ch,self__.on_close,self__.p__16077,self__.vec__16078,self__.map__16081,self__.close_QMARK_,meta16084__$1));
});})(vec__16078,map__16081,map__16081__$1,close_QMARK_))
;

kvlt.util.t_kvlt$util16083.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__16078,map__16081,map__16081__$1,close_QMARK_){
return (function (_16085){
var self__ = this;
var _16085__$1 = this;
return self__.meta16084;
});})(vec__16078,map__16081,map__16081__$1,close_QMARK_))
;

kvlt.util.t_kvlt$util16083.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

kvlt.util.t_kvlt$util16083.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = ((function (vec__16078,map__16081,map__16081__$1,close_QMARK_){
return (function (_,handler){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.read_ch,handler);
});})(vec__16078,map__16081,map__16081__$1,close_QMARK_))
;

kvlt.util.t_kvlt$util16083.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

kvlt.util.t_kvlt$util16083.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = ((function (vec__16078,map__16081,map__16081__$1,close_QMARK_){
return (function (_){
var self__ = this;
var ___$1 = this;
(self__.on_close.cljs$core$IFn$_invoke$arity$0 ? self__.on_close.cljs$core$IFn$_invoke$arity$0() : self__.on_close.call(null));

if(cljs.core.truth_(self__.close_QMARK_)){
return cljs.core.async.impl.protocols.close_BANG_(self__.read_ch);
} else {
return null;
}
});})(vec__16078,map__16081,map__16081__$1,close_QMARK_))
;

kvlt.util.t_kvlt$util16083.getBasis = ((function (vec__16078,map__16081,map__16081__$1,close_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$read_DASH_ch,cljs.core.cst$sym$on_DASH_close,cljs.core.cst$sym$p__16077,cljs.core.cst$sym$vec__16078,cljs.core.cst$sym$map__16081,cljs.core.cst$sym$close_QMARK_,cljs.core.cst$sym$meta16084], null);
});})(vec__16078,map__16081,map__16081__$1,close_QMARK_))
;

kvlt.util.t_kvlt$util16083.cljs$lang$type = true;

kvlt.util.t_kvlt$util16083.cljs$lang$ctorStr = "kvlt.util/t_kvlt$util16083";

kvlt.util.t_kvlt$util16083.cljs$lang$ctorPrWriter = ((function (vec__16078,map__16081,map__16081__$1,close_QMARK_){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"kvlt.util/t_kvlt$util16083");
});})(vec__16078,map__16081,map__16081__$1,close_QMARK_))
;

/**
 * Positional factory function for kvlt.util/t_kvlt$util16083.
 */
kvlt.util.__GT_t_kvlt$util16083 = ((function (vec__16078,map__16081,map__16081__$1,close_QMARK_){
return (function kvlt$util$__GT_t_kvlt$util16083(read_ch__$1,on_close__$1,p__16077__$1,vec__16078__$1,map__16081__$2,close_QMARK___$1,meta16084){
return (new kvlt.util.t_kvlt$util16083(read_ch__$1,on_close__$1,p__16077__$1,vec__16078__$1,map__16081__$2,close_QMARK___$1,meta16084));
});})(vec__16078,map__16081,map__16081__$1,close_QMARK_))
;

}

return (new kvlt.util.t_kvlt$util16083(read_ch,on_close,p__16077,vec__16078,map__16081__$1,close_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
});

kvlt.util.read_proxy_chan.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
kvlt.util.read_proxy_chan.cljs$lang$applyTo = (function (seq16074){
var G__16075 = cljs.core.first(seq16074);
var seq16074__$1 = cljs.core.next(seq16074);
var G__16076 = cljs.core.first(seq16074__$1);
var seq16074__$2 = cljs.core.next(seq16074__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16075,G__16076,seq16074__$2);
});

kvlt.util.pprint_str = (function kvlt$util$pprint_str(x){
return clojure.string.trimr((function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__16089_16093 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__16090_16094 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__16091_16095 = true;
var _STAR_print_fn_STAR__temp_val__16092_16096 = ((function (_STAR_print_newline_STAR__orig_val__16089_16093,_STAR_print_fn_STAR__orig_val__16090_16094,_STAR_print_newline_STAR__temp_val__16091_16095,sb__4661__auto__){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__16089_16093,_STAR_print_fn_STAR__orig_val__16090_16094,_STAR_print_newline_STAR__temp_val__16091_16095,sb__4661__auto__))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__16091_16095;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__16092_16096;

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(x);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__16090_16094;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__16089_16093;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
});
kvlt.util.doc_examples_BANG_ = (function kvlt$util$doc_examples_BANG_(vvar,examples){
return cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(vvar,cljs.core.update,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$doc,cljs.core.str,"\n\n```clojure\n",clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n\n",(function (){var iter__4523__auto__ = (function kvlt$util$doc_examples_BANG__$_iter__16097(s__16098){
return (new cljs.core.LazySeq(null,(function (){
var s__16098__$1 = s__16098;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__16098__$1);
if(temp__5720__auto__){
var s__16098__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16098__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__16098__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__16100 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__16099 = (0);
while(true){
if((i__16099 < size__4522__auto__)){
var vec__16101 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__16099);
var before = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16101,(0),null);
var after = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16101,(1),null);
cljs.core.chunk_append(b__16100,(function (){var G__16104 = kvlt.util.pprint_str(before);
if(cljs.core.truth_(after)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16104),"\n  =>\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(kvlt.util.pprint_str(after))].join('');
} else {
return G__16104;
}
})());

var G__16109 = (i__16099 + (1));
i__16099 = G__16109;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16100),kvlt$util$doc_examples_BANG__$_iter__16097(cljs.core.chunk_rest(s__16098__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16100),null);
}
} else {
var vec__16105 = cljs.core.first(s__16098__$2);
var before = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16105,(0),null);
var after = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16105,(1),null);
return cljs.core.cons((function (){var G__16108 = kvlt.util.pprint_str(before);
if(cljs.core.truth_(after)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16108),"\n  =>\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(kvlt.util.pprint_str(after))].join('');
} else {
return G__16108;
}
})(),kvlt$util$doc_examples_BANG__$_iter__16097(cljs.core.rest(s__16098__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(examples);
})()),"\n```"], 0));
});
