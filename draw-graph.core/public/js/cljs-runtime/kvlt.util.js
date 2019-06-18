goog.provide('kvlt.util');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.pprint');
kvlt.util.map_keys = (function kvlt$util$map_keys(f,m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4523__auto__ = (function kvlt$util$map_keys_$_iter__37038(s__37039){
return (new cljs.core.LazySeq(null,(function (){
var s__37039__$1 = s__37039;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__37039__$1);
if(temp__5720__auto__){
var s__37039__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37039__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__37039__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__37041 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__37040 = (0);
while(true){
if((i__37040 < size__4522__auto__)){
var vec__37042 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__37040);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37042,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37042,(1),null);
cljs.core.chunk_append(b__37041,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k) : f.call(null,k)),v], null));

var G__37111 = (i__37040 + (1));
i__37040 = G__37111;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37041),kvlt$util$map_keys_$_iter__37038(cljs.core.chunk_rest(s__37039__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37041),null);
}
} else {
var vec__37045 = cljs.core.first(s__37039__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37045,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37045,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k) : f.call(null,k)),v], null),kvlt$util$map_keys_$_iter__37038(cljs.core.rest(s__37039__$2)));
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
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4523__auto__ = (function kvlt$util$map_vals_$_iter__37048(s__37049){
return (new cljs.core.LazySeq(null,(function (){
var s__37049__$1 = s__37049;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__37049__$1);
if(temp__5720__auto__){
var s__37049__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37049__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__37049__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__37051 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__37050 = (0);
while(true){
if((i__37050 < size__4522__auto__)){
var vec__37052 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__37050);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37052,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37052,(1),null);
cljs.core.chunk_append(b__37051,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v))], null));

var G__37116 = (i__37050 + (1));
i__37050 = G__37116;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37051),kvlt$util$map_vals_$_iter__37048(cljs.core.chunk_rest(s__37049__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37051),null);
}
} else {
var vec__37055 = cljs.core.first(s__37049__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37055,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37055,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v))], null),kvlt$util$map_vals_$_iter__37048(cljs.core.rest(s__37049__$2)));
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
var _PLUS_none_PLUS__37120 = new cljs.core.Keyword("kvlt.util","none","kvlt.util/none",1136838753);
kvlt.util.update_when = ((function (_PLUS_none_PLUS__37120){
return (function kvlt$util$update_when(var_args){
var args__4736__auto__ = [];
var len__4730__auto___37122 = arguments.length;
var i__4731__auto___37123 = (0);
while(true){
if((i__4731__auto___37123 < len__4730__auto___37122)){
args__4736__auto__.push((arguments[i__4731__auto___37123]));

var G__37124 = (i__4731__auto___37123 + (1));
i__4731__auto___37123 = G__37124;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return kvlt.util.update_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});})(_PLUS_none_PLUS__37120))
;

kvlt.util.update_when.cljs$core$IFn$_invoke$arity$variadic = ((function (_PLUS_none_PLUS__37120){
return (function (m,key,f,args){
var found = (m.cljs$core$IFn$_invoke$arity$2 ? m.cljs$core$IFn$_invoke$arity$2(key,_PLUS_none_PLUS__37120) : m.call(null,key,_PLUS_none_PLUS__37120));
if((!((_PLUS_none_PLUS__37120 === found)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,key,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,found,args));
} else {
return m;
}
});})(_PLUS_none_PLUS__37120))
;

kvlt.util.update_when.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
kvlt.util.update_when.cljs$lang$applyTo = ((function (_PLUS_none_PLUS__37120){
return (function (seq37058){
var G__37059 = cljs.core.first(seq37058);
var seq37058__$1 = cljs.core.next(seq37058);
var G__37060 = cljs.core.first(seq37058__$1);
var seq37058__$2 = cljs.core.next(seq37058__$1);
var G__37061 = cljs.core.first(seq37058__$2);
var seq37058__$3 = cljs.core.next(seq37058__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37059,G__37060,G__37061,seq37058__$3);
});})(_PLUS_none_PLUS__37120))
;

kvlt.util.bidirectional_chan = (function kvlt$util$bidirectional_chan(var_args){
var args__4736__auto__ = [];
var len__4730__auto___37126 = arguments.length;
var i__4731__auto___37128 = (0);
while(true){
if((i__4731__auto___37128 < len__4730__auto___37126)){
args__4736__auto__.push((arguments[i__4731__auto___37128]));

var G__37130 = (i__4731__auto___37128 + (1));
i__4731__auto___37128 = G__37130;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return kvlt.util.bidirectional_chan.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

kvlt.util.bidirectional_chan.cljs$core$IFn$_invoke$arity$variadic = (function (read_ch,write_ch,p__37065){
var vec__37066 = p__37065;
var map__37069 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37066,(0),null);
var map__37069__$1 = (((((!((map__37069 == null))))?(((((map__37069.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37069.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37069):map__37069);
var on_close = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37069__$1,new cljs.core.Keyword(null,"on-close","on-close",-761178394));
var close_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37069__$1,new cljs.core.Keyword(null,"close?","close?",1600185693),true);
if((typeof kvlt !== 'undefined') && (typeof kvlt.util !== 'undefined') && (typeof kvlt.util.t_kvlt$util37071 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
kvlt.util.t_kvlt$util37071 = (function (read_ch,write_ch,p__37065,vec__37066,map__37069,on_close,close_QMARK_,meta37072){
this.read_ch = read_ch;
this.write_ch = write_ch;
this.p__37065 = p__37065;
this.vec__37066 = vec__37066;
this.map__37069 = map__37069;
this.on_close = on_close;
this.close_QMARK_ = close_QMARK_;
this.meta37072 = meta37072;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
kvlt.util.t_kvlt$util37071.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__37066,map__37069,map__37069__$1,on_close,close_QMARK_){
return (function (_37073,meta37072__$1){
var self__ = this;
var _37073__$1 = this;
return (new kvlt.util.t_kvlt$util37071(self__.read_ch,self__.write_ch,self__.p__37065,self__.vec__37066,self__.map__37069,self__.on_close,self__.close_QMARK_,meta37072__$1));
});})(vec__37066,map__37069,map__37069__$1,on_close,close_QMARK_))
;

kvlt.util.t_kvlt$util37071.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__37066,map__37069,map__37069__$1,on_close,close_QMARK_){
return (function (_37073){
var self__ = this;
var _37073__$1 = this;
return self__.meta37072;
});})(vec__37066,map__37069,map__37069__$1,on_close,close_QMARK_))
;

kvlt.util.t_kvlt$util37071.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

kvlt.util.t_kvlt$util37071.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = ((function (vec__37066,map__37069,map__37069__$1,on_close,close_QMARK_){
return (function (_,handler){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.read_ch,handler);
});})(vec__37066,map__37069,map__37069__$1,on_close,close_QMARK_))
;

kvlt.util.t_kvlt$util37071.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

kvlt.util.t_kvlt$util37071.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = ((function (vec__37066,map__37069,map__37069__$1,on_close,close_QMARK_){
return (function (_,msg,handler){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.write_ch,msg,handler);
});})(vec__37066,map__37069,map__37069__$1,on_close,close_QMARK_))
;

kvlt.util.t_kvlt$util37071.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

kvlt.util.t_kvlt$util37071.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = ((function (vec__37066,map__37069,map__37069__$1,on_close,close_QMARK_){
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
});})(vec__37066,map__37069,map__37069__$1,on_close,close_QMARK_))
;

kvlt.util.t_kvlt$util37071.getBasis = ((function (vec__37066,map__37069,map__37069__$1,on_close,close_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"read-ch","read-ch",1602045113,null),new cljs.core.Symbol(null,"write-ch","write-ch",-126054072,null),new cljs.core.Symbol(null,"p__37065","p__37065",-238233080,null),new cljs.core.Symbol(null,"vec__37066","vec__37066",-1997353057,null),new cljs.core.Symbol(null,"map__37069","map__37069",94765933,null),new cljs.core.Symbol(null,"on-close","on-close",879353133,null),new cljs.core.Symbol(null,"close?","close?",-1054250076,null),new cljs.core.Symbol(null,"meta37072","meta37072",-1735814056,null)], null);
});})(vec__37066,map__37069,map__37069__$1,on_close,close_QMARK_))
;

kvlt.util.t_kvlt$util37071.cljs$lang$type = true;

kvlt.util.t_kvlt$util37071.cljs$lang$ctorStr = "kvlt.util/t_kvlt$util37071";

kvlt.util.t_kvlt$util37071.cljs$lang$ctorPrWriter = ((function (vec__37066,map__37069,map__37069__$1,on_close,close_QMARK_){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"kvlt.util/t_kvlt$util37071");
});})(vec__37066,map__37069,map__37069__$1,on_close,close_QMARK_))
;

/**
 * Positional factory function for kvlt.util/t_kvlt$util37071.
 */
kvlt.util.__GT_t_kvlt$util37071 = ((function (vec__37066,map__37069,map__37069__$1,on_close,close_QMARK_){
return (function kvlt$util$__GT_t_kvlt$util37071(read_ch__$1,write_ch__$1,p__37065__$1,vec__37066__$1,map__37069__$2,on_close__$1,close_QMARK___$1,meta37072){
return (new kvlt.util.t_kvlt$util37071(read_ch__$1,write_ch__$1,p__37065__$1,vec__37066__$1,map__37069__$2,on_close__$1,close_QMARK___$1,meta37072));
});})(vec__37066,map__37069,map__37069__$1,on_close,close_QMARK_))
;

}

return (new kvlt.util.t_kvlt$util37071(read_ch,write_ch,p__37065,vec__37066,map__37069__$1,on_close,close_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
});

kvlt.util.bidirectional_chan.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
kvlt.util.bidirectional_chan.cljs$lang$applyTo = (function (seq37062){
var G__37063 = cljs.core.first(seq37062);
var seq37062__$1 = cljs.core.next(seq37062);
var G__37064 = cljs.core.first(seq37062__$1);
var seq37062__$2 = cljs.core.next(seq37062__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37063,G__37064,seq37062__$2);
});

kvlt.util.read_proxy_chan = (function kvlt$util$read_proxy_chan(var_args){
var args__4736__auto__ = [];
var len__4730__auto___37139 = arguments.length;
var i__4731__auto___37140 = (0);
while(true){
if((i__4731__auto___37140 < len__4730__auto___37139)){
args__4736__auto__.push((arguments[i__4731__auto___37140]));

var G__37141 = (i__4731__auto___37140 + (1));
i__4731__auto___37140 = G__37141;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return kvlt.util.read_proxy_chan.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

kvlt.util.read_proxy_chan.cljs$core$IFn$_invoke$arity$variadic = (function (read_ch,on_close,p__37077){
var vec__37078 = p__37077;
var map__37081 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37078,(0),null);
var map__37081__$1 = (((((!((map__37081 == null))))?(((((map__37081.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37081.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37081):map__37081);
var close_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37081__$1,new cljs.core.Keyword(null,"close?","close?",1600185693),true);
if((typeof kvlt !== 'undefined') && (typeof kvlt.util !== 'undefined') && (typeof kvlt.util.t_kvlt$util37083 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
kvlt.util.t_kvlt$util37083 = (function (read_ch,on_close,p__37077,vec__37078,map__37081,close_QMARK_,meta37084){
this.read_ch = read_ch;
this.on_close = on_close;
this.p__37077 = p__37077;
this.vec__37078 = vec__37078;
this.map__37081 = map__37081;
this.close_QMARK_ = close_QMARK_;
this.meta37084 = meta37084;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
kvlt.util.t_kvlt$util37083.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__37078,map__37081,map__37081__$1,close_QMARK_){
return (function (_37085,meta37084__$1){
var self__ = this;
var _37085__$1 = this;
return (new kvlt.util.t_kvlt$util37083(self__.read_ch,self__.on_close,self__.p__37077,self__.vec__37078,self__.map__37081,self__.close_QMARK_,meta37084__$1));
});})(vec__37078,map__37081,map__37081__$1,close_QMARK_))
;

kvlt.util.t_kvlt$util37083.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__37078,map__37081,map__37081__$1,close_QMARK_){
return (function (_37085){
var self__ = this;
var _37085__$1 = this;
return self__.meta37084;
});})(vec__37078,map__37081,map__37081__$1,close_QMARK_))
;

kvlt.util.t_kvlt$util37083.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

kvlt.util.t_kvlt$util37083.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = ((function (vec__37078,map__37081,map__37081__$1,close_QMARK_){
return (function (_,handler){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.read_ch,handler);
});})(vec__37078,map__37081,map__37081__$1,close_QMARK_))
;

kvlt.util.t_kvlt$util37083.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

kvlt.util.t_kvlt$util37083.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = ((function (vec__37078,map__37081,map__37081__$1,close_QMARK_){
return (function (_){
var self__ = this;
var ___$1 = this;
(self__.on_close.cljs$core$IFn$_invoke$arity$0 ? self__.on_close.cljs$core$IFn$_invoke$arity$0() : self__.on_close.call(null));

if(cljs.core.truth_(self__.close_QMARK_)){
return cljs.core.async.impl.protocols.close_BANG_(self__.read_ch);
} else {
return null;
}
});})(vec__37078,map__37081,map__37081__$1,close_QMARK_))
;

kvlt.util.t_kvlt$util37083.getBasis = ((function (vec__37078,map__37081,map__37081__$1,close_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"read-ch","read-ch",1602045113,null),new cljs.core.Symbol(null,"on-close","on-close",879353133,null),new cljs.core.Symbol(null,"p__37077","p__37077",-199150170,null),new cljs.core.Symbol(null,"vec__37078","vec__37078",770363121,null),new cljs.core.Symbol(null,"map__37081","map__37081",1430903993,null),new cljs.core.Symbol(null,"close?","close?",-1054250076,null),new cljs.core.Symbol(null,"meta37084","meta37084",183435057,null)], null);
});})(vec__37078,map__37081,map__37081__$1,close_QMARK_))
;

kvlt.util.t_kvlt$util37083.cljs$lang$type = true;

kvlt.util.t_kvlt$util37083.cljs$lang$ctorStr = "kvlt.util/t_kvlt$util37083";

kvlt.util.t_kvlt$util37083.cljs$lang$ctorPrWriter = ((function (vec__37078,map__37081,map__37081__$1,close_QMARK_){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"kvlt.util/t_kvlt$util37083");
});})(vec__37078,map__37081,map__37081__$1,close_QMARK_))
;

/**
 * Positional factory function for kvlt.util/t_kvlt$util37083.
 */
kvlt.util.__GT_t_kvlt$util37083 = ((function (vec__37078,map__37081,map__37081__$1,close_QMARK_){
return (function kvlt$util$__GT_t_kvlt$util37083(read_ch__$1,on_close__$1,p__37077__$1,vec__37078__$1,map__37081__$2,close_QMARK___$1,meta37084){
return (new kvlt.util.t_kvlt$util37083(read_ch__$1,on_close__$1,p__37077__$1,vec__37078__$1,map__37081__$2,close_QMARK___$1,meta37084));
});})(vec__37078,map__37081,map__37081__$1,close_QMARK_))
;

}

return (new kvlt.util.t_kvlt$util37083(read_ch,on_close,p__37077,vec__37078,map__37081__$1,close_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
});

kvlt.util.read_proxy_chan.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
kvlt.util.read_proxy_chan.cljs$lang$applyTo = (function (seq37074){
var G__37075 = cljs.core.first(seq37074);
var seq37074__$1 = cljs.core.next(seq37074);
var G__37076 = cljs.core.first(seq37074__$1);
var seq37074__$2 = cljs.core.next(seq37074__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37075,G__37076,seq37074__$2);
});

kvlt.util.pprint_str = (function kvlt$util$pprint_str(x){
return clojure.string.trimr((function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__37087_37153 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__37088_37154 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__37089_37155 = true;
var _STAR_print_fn_STAR__temp_val__37090_37156 = ((function (_STAR_print_newline_STAR__orig_val__37087_37153,_STAR_print_fn_STAR__orig_val__37088_37154,_STAR_print_newline_STAR__temp_val__37089_37155,sb__4661__auto__){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__37087_37153,_STAR_print_fn_STAR__orig_val__37088_37154,_STAR_print_newline_STAR__temp_val__37089_37155,sb__4661__auto__))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__37089_37155;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__37090_37156;

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(x);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__37088_37154;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__37087_37153;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
});
kvlt.util.doc_examples_BANG_ = (function kvlt$util$doc_examples_BANG_(vvar,examples){
return cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(vvar,cljs.core.update,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"doc","doc",1913296891),cljs.core.str,"\n\n```clojure\n",clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n\n",(function (){var iter__4523__auto__ = (function kvlt$util$doc_examples_BANG__$_iter__37093(s__37094){
return (new cljs.core.LazySeq(null,(function (){
var s__37094__$1 = s__37094;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__37094__$1);
if(temp__5720__auto__){
var s__37094__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37094__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__37094__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__37096 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__37095 = (0);
while(true){
if((i__37095 < size__4522__auto__)){
var vec__37099 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__37095);
var before = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37099,(0),null);
var after = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37099,(1),null);
cljs.core.chunk_append(b__37096,(function (){var G__37102 = kvlt.util.pprint_str(before);
if(cljs.core.truth_(after)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37102),"\n  =>\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(kvlt.util.pprint_str(after))].join('');
} else {
return G__37102;
}
})());

var G__37157 = (i__37095 + (1));
i__37095 = G__37157;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37096),kvlt$util$doc_examples_BANG__$_iter__37093(cljs.core.chunk_rest(s__37094__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37096),null);
}
} else {
var vec__37106 = cljs.core.first(s__37094__$2);
var before = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37106,(0),null);
var after = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37106,(1),null);
return cljs.core.cons((function (){var G__37109 = kvlt.util.pprint_str(before);
if(cljs.core.truth_(after)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37109),"\n  =>\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(kvlt.util.pprint_str(after))].join('');
} else {
return G__37109;
}
})(),kvlt$util$doc_examples_BANG__$_iter__37093(cljs.core.rest(s__37094__$2)));
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

//# sourceMappingURL=kvlt.util.js.map
