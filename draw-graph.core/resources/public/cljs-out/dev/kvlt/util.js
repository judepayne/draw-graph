// Compiled by ClojureScript 1.10.520 {}
goog.provide('kvlt.util');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.pprint');
kvlt.util.map_keys = (function kvlt$util$map_keys(f,m){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4523__auto__ = (function kvlt$util$map_keys_$_iter__13625(s__13626){
return (new cljs.core.LazySeq(null,(function (){
var s__13626__$1 = s__13626;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__13626__$1);
if(temp__5720__auto__){
var s__13626__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13626__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__13626__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__13628 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__13627 = (0);
while(true){
if((i__13627 < size__4522__auto__)){
var vec__13629 = cljs.core._nth.call(null,c__4521__auto__,i__13627);
var k = cljs.core.nth.call(null,vec__13629,(0),null);
var v = cljs.core.nth.call(null,vec__13629,(1),null);
cljs.core.chunk_append.call(null,b__13628,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null,k),v], null));

var G__13635 = (i__13627 + (1));
i__13627 = G__13635;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13628),kvlt$util$map_keys_$_iter__13625.call(null,cljs.core.chunk_rest.call(null,s__13626__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13628),null);
}
} else {
var vec__13632 = cljs.core.first.call(null,s__13626__$2);
var k = cljs.core.nth.call(null,vec__13632,(0),null);
var v = cljs.core.nth.call(null,vec__13632,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null,k),v], null),kvlt$util$map_keys_$_iter__13625.call(null,cljs.core.rest.call(null,s__13626__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,m);
})());
});
kvlt.util.map_vals = (function kvlt$util$map_vals(f,m){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4523__auto__ = (function kvlt$util$map_vals_$_iter__13636(s__13637){
return (new cljs.core.LazySeq(null,(function (){
var s__13637__$1 = s__13637;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__13637__$1);
if(temp__5720__auto__){
var s__13637__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13637__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__13637__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__13639 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__13638 = (0);
while(true){
if((i__13638 < size__4522__auto__)){
var vec__13640 = cljs.core._nth.call(null,c__4521__auto__,i__13638);
var k = cljs.core.nth.call(null,vec__13640,(0),null);
var v = cljs.core.nth.call(null,vec__13640,(1),null);
cljs.core.chunk_append.call(null,b__13639,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,v)], null));

var G__13646 = (i__13638 + (1));
i__13638 = G__13646;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13639),kvlt$util$map_vals_$_iter__13636.call(null,cljs.core.chunk_rest.call(null,s__13637__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13639),null);
}
} else {
var vec__13643 = cljs.core.first.call(null,s__13637__$2);
var k = cljs.core.nth.call(null,vec__13643,(0),null);
var v = cljs.core.nth.call(null,vec__13643,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,v)], null),kvlt$util$map_vals_$_iter__13636.call(null,cljs.core.rest.call(null,s__13637__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,m);
})());
});
var _PLUS_none_PLUS__13651 = new cljs.core.Keyword("kvlt.util","none","kvlt.util/none",1136838753);
kvlt.util.update_when = ((function (_PLUS_none_PLUS__13651){
return (function kvlt$util$update_when(var_args){
var args__4736__auto__ = [];
var len__4730__auto___13652 = arguments.length;
var i__4731__auto___13653 = (0);
while(true){
if((i__4731__auto___13653 < len__4730__auto___13652)){
args__4736__auto__.push((arguments[i__4731__auto___13653]));

var G__13654 = (i__4731__auto___13653 + (1));
i__4731__auto___13653 = G__13654;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return kvlt.util.update_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});})(_PLUS_none_PLUS__13651))
;

kvlt.util.update_when.cljs$core$IFn$_invoke$arity$variadic = ((function (_PLUS_none_PLUS__13651){
return (function (m,key,f,args){
var found = m.call(null,key,_PLUS_none_PLUS__13651);
if((!((_PLUS_none_PLUS__13651 === found)))){
return cljs.core.assoc.call(null,m,key,cljs.core.apply.call(null,f,found,args));
} else {
return m;
}
});})(_PLUS_none_PLUS__13651))
;

kvlt.util.update_when.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
kvlt.util.update_when.cljs$lang$applyTo = ((function (_PLUS_none_PLUS__13651){
return (function (seq13647){
var G__13648 = cljs.core.first.call(null,seq13647);
var seq13647__$1 = cljs.core.next.call(null,seq13647);
var G__13649 = cljs.core.first.call(null,seq13647__$1);
var seq13647__$2 = cljs.core.next.call(null,seq13647__$1);
var G__13650 = cljs.core.first.call(null,seq13647__$2);
var seq13647__$3 = cljs.core.next.call(null,seq13647__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13648,G__13649,G__13650,seq13647__$3);
});})(_PLUS_none_PLUS__13651))
;

kvlt.util.bidirectional_chan = (function kvlt$util$bidirectional_chan(var_args){
var args__4736__auto__ = [];
var len__4730__auto___13667 = arguments.length;
var i__4731__auto___13668 = (0);
while(true){
if((i__4731__auto___13668 < len__4730__auto___13667)){
args__4736__auto__.push((arguments[i__4731__auto___13668]));

var G__13669 = (i__4731__auto___13668 + (1));
i__4731__auto___13668 = G__13669;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return kvlt.util.bidirectional_chan.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

kvlt.util.bidirectional_chan.cljs$core$IFn$_invoke$arity$variadic = (function (read_ch,write_ch,p__13658){
var vec__13659 = p__13658;
var map__13662 = cljs.core.nth.call(null,vec__13659,(0),null);
var map__13662__$1 = (((((!((map__13662 == null))))?(((((map__13662.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13662.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13662):map__13662);
var on_close = cljs.core.get.call(null,map__13662__$1,new cljs.core.Keyword(null,"on-close","on-close",-761178394));
var close_QMARK_ = cljs.core.get.call(null,map__13662__$1,new cljs.core.Keyword(null,"close?","close?",1600185693),true);
if((typeof kvlt !== 'undefined') && (typeof kvlt.util !== 'undefined') && (typeof kvlt.util.t_kvlt$util13664 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
kvlt.util.t_kvlt$util13664 = (function (read_ch,write_ch,p__13658,vec__13659,map__13662,on_close,close_QMARK_,meta13665){
this.read_ch = read_ch;
this.write_ch = write_ch;
this.p__13658 = p__13658;
this.vec__13659 = vec__13659;
this.map__13662 = map__13662;
this.on_close = on_close;
this.close_QMARK_ = close_QMARK_;
this.meta13665 = meta13665;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
kvlt.util.t_kvlt$util13664.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__13659,map__13662,map__13662__$1,on_close,close_QMARK_){
return (function (_13666,meta13665__$1){
var self__ = this;
var _13666__$1 = this;
return (new kvlt.util.t_kvlt$util13664(self__.read_ch,self__.write_ch,self__.p__13658,self__.vec__13659,self__.map__13662,self__.on_close,self__.close_QMARK_,meta13665__$1));
});})(vec__13659,map__13662,map__13662__$1,on_close,close_QMARK_))
;

kvlt.util.t_kvlt$util13664.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__13659,map__13662,map__13662__$1,on_close,close_QMARK_){
return (function (_13666){
var self__ = this;
var _13666__$1 = this;
return self__.meta13665;
});})(vec__13659,map__13662,map__13662__$1,on_close,close_QMARK_))
;

kvlt.util.t_kvlt$util13664.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

kvlt.util.t_kvlt$util13664.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = ((function (vec__13659,map__13662,map__13662__$1,on_close,close_QMARK_){
return (function (_,handler){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.read_ch,handler);
});})(vec__13659,map__13662,map__13662__$1,on_close,close_QMARK_))
;

kvlt.util.t_kvlt$util13664.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

kvlt.util.t_kvlt$util13664.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = ((function (vec__13659,map__13662,map__13662__$1,on_close,close_QMARK_){
return (function (_,msg,handler){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.write_ch,msg,handler);
});})(vec__13659,map__13662,map__13662__$1,on_close,close_QMARK_))
;

kvlt.util.t_kvlt$util13664.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

kvlt.util.t_kvlt$util13664.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = ((function (vec__13659,map__13662,map__13662__$1,on_close,close_QMARK_){
return (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.close_QMARK_)){
cljs.core.async.impl.protocols.close_BANG_.call(null,self__.read_ch);

cljs.core.async.impl.protocols.close_BANG_.call(null,self__.write_ch);
} else {
}

if(cljs.core.truth_(self__.on_close)){
return self__.on_close.call(null);
} else {
return null;
}
});})(vec__13659,map__13662,map__13662__$1,on_close,close_QMARK_))
;

kvlt.util.t_kvlt$util13664.getBasis = ((function (vec__13659,map__13662,map__13662__$1,on_close,close_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"read-ch","read-ch",1602045113,null),new cljs.core.Symbol(null,"write-ch","write-ch",-126054072,null),new cljs.core.Symbol(null,"p__13658","p__13658",461464088,null),new cljs.core.Symbol(null,"vec__13659","vec__13659",1597964385,null),new cljs.core.Symbol(null,"map__13662","map__13662",85802669,null),new cljs.core.Symbol(null,"on-close","on-close",879353133,null),new cljs.core.Symbol(null,"close?","close?",-1054250076,null),new cljs.core.Symbol(null,"meta13665","meta13665",272380798,null)], null);
});})(vec__13659,map__13662,map__13662__$1,on_close,close_QMARK_))
;

kvlt.util.t_kvlt$util13664.cljs$lang$type = true;

kvlt.util.t_kvlt$util13664.cljs$lang$ctorStr = "kvlt.util/t_kvlt$util13664";

kvlt.util.t_kvlt$util13664.cljs$lang$ctorPrWriter = ((function (vec__13659,map__13662,map__13662__$1,on_close,close_QMARK_){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"kvlt.util/t_kvlt$util13664");
});})(vec__13659,map__13662,map__13662__$1,on_close,close_QMARK_))
;

/**
 * Positional factory function for kvlt.util/t_kvlt$util13664.
 */
kvlt.util.__GT_t_kvlt$util13664 = ((function (vec__13659,map__13662,map__13662__$1,on_close,close_QMARK_){
return (function kvlt$util$__GT_t_kvlt$util13664(read_ch__$1,write_ch__$1,p__13658__$1,vec__13659__$1,map__13662__$2,on_close__$1,close_QMARK___$1,meta13665){
return (new kvlt.util.t_kvlt$util13664(read_ch__$1,write_ch__$1,p__13658__$1,vec__13659__$1,map__13662__$2,on_close__$1,close_QMARK___$1,meta13665));
});})(vec__13659,map__13662,map__13662__$1,on_close,close_QMARK_))
;

}

return (new kvlt.util.t_kvlt$util13664(read_ch,write_ch,p__13658,vec__13659,map__13662__$1,on_close,close_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
});

kvlt.util.bidirectional_chan.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
kvlt.util.bidirectional_chan.cljs$lang$applyTo = (function (seq13655){
var G__13656 = cljs.core.first.call(null,seq13655);
var seq13655__$1 = cljs.core.next.call(null,seq13655);
var G__13657 = cljs.core.first.call(null,seq13655__$1);
var seq13655__$2 = cljs.core.next.call(null,seq13655__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13656,G__13657,seq13655__$2);
});

kvlt.util.read_proxy_chan = (function kvlt$util$read_proxy_chan(var_args){
var args__4736__auto__ = [];
var len__4730__auto___13682 = arguments.length;
var i__4731__auto___13683 = (0);
while(true){
if((i__4731__auto___13683 < len__4730__auto___13682)){
args__4736__auto__.push((arguments[i__4731__auto___13683]));

var G__13684 = (i__4731__auto___13683 + (1));
i__4731__auto___13683 = G__13684;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return kvlt.util.read_proxy_chan.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

kvlt.util.read_proxy_chan.cljs$core$IFn$_invoke$arity$variadic = (function (read_ch,on_close,p__13673){
var vec__13674 = p__13673;
var map__13677 = cljs.core.nth.call(null,vec__13674,(0),null);
var map__13677__$1 = (((((!((map__13677 == null))))?(((((map__13677.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13677.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13677):map__13677);
var close_QMARK_ = cljs.core.get.call(null,map__13677__$1,new cljs.core.Keyword(null,"close?","close?",1600185693),true);
if((typeof kvlt !== 'undefined') && (typeof kvlt.util !== 'undefined') && (typeof kvlt.util.t_kvlt$util13679 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
kvlt.util.t_kvlt$util13679 = (function (read_ch,on_close,p__13673,vec__13674,map__13677,close_QMARK_,meta13680){
this.read_ch = read_ch;
this.on_close = on_close;
this.p__13673 = p__13673;
this.vec__13674 = vec__13674;
this.map__13677 = map__13677;
this.close_QMARK_ = close_QMARK_;
this.meta13680 = meta13680;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
kvlt.util.t_kvlt$util13679.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__13674,map__13677,map__13677__$1,close_QMARK_){
return (function (_13681,meta13680__$1){
var self__ = this;
var _13681__$1 = this;
return (new kvlt.util.t_kvlt$util13679(self__.read_ch,self__.on_close,self__.p__13673,self__.vec__13674,self__.map__13677,self__.close_QMARK_,meta13680__$1));
});})(vec__13674,map__13677,map__13677__$1,close_QMARK_))
;

kvlt.util.t_kvlt$util13679.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__13674,map__13677,map__13677__$1,close_QMARK_){
return (function (_13681){
var self__ = this;
var _13681__$1 = this;
return self__.meta13680;
});})(vec__13674,map__13677,map__13677__$1,close_QMARK_))
;

kvlt.util.t_kvlt$util13679.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

kvlt.util.t_kvlt$util13679.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = ((function (vec__13674,map__13677,map__13677__$1,close_QMARK_){
return (function (_,handler){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.read_ch,handler);
});})(vec__13674,map__13677,map__13677__$1,close_QMARK_))
;

kvlt.util.t_kvlt$util13679.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

kvlt.util.t_kvlt$util13679.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = ((function (vec__13674,map__13677,map__13677__$1,close_QMARK_){
return (function (_){
var self__ = this;
var ___$1 = this;
self__.on_close.call(null);

if(cljs.core.truth_(self__.close_QMARK_)){
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.read_ch);
} else {
return null;
}
});})(vec__13674,map__13677,map__13677__$1,close_QMARK_))
;

kvlt.util.t_kvlt$util13679.getBasis = ((function (vec__13674,map__13677,map__13677__$1,close_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"read-ch","read-ch",1602045113,null),new cljs.core.Symbol(null,"on-close","on-close",879353133,null),new cljs.core.Symbol(null,"p__13673","p__13673",-1216984757,null),new cljs.core.Symbol(null,"vec__13674","vec__13674",1336834191,null),new cljs.core.Symbol(null,"map__13677","map__13677",721046193,null),new cljs.core.Symbol(null,"close?","close?",-1054250076,null),new cljs.core.Symbol(null,"meta13680","meta13680",742489042,null)], null);
});})(vec__13674,map__13677,map__13677__$1,close_QMARK_))
;

kvlt.util.t_kvlt$util13679.cljs$lang$type = true;

kvlt.util.t_kvlt$util13679.cljs$lang$ctorStr = "kvlt.util/t_kvlt$util13679";

kvlt.util.t_kvlt$util13679.cljs$lang$ctorPrWriter = ((function (vec__13674,map__13677,map__13677__$1,close_QMARK_){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"kvlt.util/t_kvlt$util13679");
});})(vec__13674,map__13677,map__13677__$1,close_QMARK_))
;

/**
 * Positional factory function for kvlt.util/t_kvlt$util13679.
 */
kvlt.util.__GT_t_kvlt$util13679 = ((function (vec__13674,map__13677,map__13677__$1,close_QMARK_){
return (function kvlt$util$__GT_t_kvlt$util13679(read_ch__$1,on_close__$1,p__13673__$1,vec__13674__$1,map__13677__$2,close_QMARK___$1,meta13680){
return (new kvlt.util.t_kvlt$util13679(read_ch__$1,on_close__$1,p__13673__$1,vec__13674__$1,map__13677__$2,close_QMARK___$1,meta13680));
});})(vec__13674,map__13677,map__13677__$1,close_QMARK_))
;

}

return (new kvlt.util.t_kvlt$util13679(read_ch,on_close,p__13673,vec__13674,map__13677__$1,close_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
});

kvlt.util.read_proxy_chan.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
kvlt.util.read_proxy_chan.cljs$lang$applyTo = (function (seq13670){
var G__13671 = cljs.core.first.call(null,seq13670);
var seq13670__$1 = cljs.core.next.call(null,seq13670);
var G__13672 = cljs.core.first.call(null,seq13670__$1);
var seq13670__$2 = cljs.core.next.call(null,seq13670__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13671,G__13672,seq13670__$2);
});

kvlt.util.pprint_str = (function kvlt$util$pprint_str(x){
return clojure.string.trimr.call(null,(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__13685_13689 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__13686_13690 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__13687_13691 = true;
var _STAR_print_fn_STAR__temp_val__13688_13692 = ((function (_STAR_print_newline_STAR__orig_val__13685_13689,_STAR_print_fn_STAR__orig_val__13686_13690,_STAR_print_newline_STAR__temp_val__13687_13691,sb__4661__auto__){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__13685_13689,_STAR_print_fn_STAR__orig_val__13686_13690,_STAR_print_newline_STAR__temp_val__13687_13691,sb__4661__auto__))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__13687_13691;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__13688_13692;

try{cljs.pprint.pprint.call(null,x);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__13686_13690;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__13685_13689;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
});
kvlt.util.doc_examples_BANG_ = (function kvlt$util$doc_examples_BANG_(vvar,examples){
return cljs.core.alter_meta_BANG_.call(null,vvar,cljs.core.update,new cljs.core.Keyword(null,"doc","doc",1913296891),cljs.core.str,"\n\n```clojure\n",clojure.string.join.call(null,"\n\n",(function (){var iter__4523__auto__ = (function kvlt$util$doc_examples_BANG__$_iter__13693(s__13694){
return (new cljs.core.LazySeq(null,(function (){
var s__13694__$1 = s__13694;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__13694__$1);
if(temp__5720__auto__){
var s__13694__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13694__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__13694__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__13696 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__13695 = (0);
while(true){
if((i__13695 < size__4522__auto__)){
var vec__13697 = cljs.core._nth.call(null,c__4521__auto__,i__13695);
var before = cljs.core.nth.call(null,vec__13697,(0),null);
var after = cljs.core.nth.call(null,vec__13697,(1),null);
cljs.core.chunk_append.call(null,b__13696,(function (){var G__13700 = kvlt.util.pprint_str.call(null,before);
if(cljs.core.truth_(after)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13700),"\n  =>\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(kvlt.util.pprint_str.call(null,after))].join('');
} else {
return G__13700;
}
})());

var G__13705 = (i__13695 + (1));
i__13695 = G__13705;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13696),kvlt$util$doc_examples_BANG__$_iter__13693.call(null,cljs.core.chunk_rest.call(null,s__13694__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13696),null);
}
} else {
var vec__13701 = cljs.core.first.call(null,s__13694__$2);
var before = cljs.core.nth.call(null,vec__13701,(0),null);
var after = cljs.core.nth.call(null,vec__13701,(1),null);
return cljs.core.cons.call(null,(function (){var G__13704 = kvlt.util.pprint_str.call(null,before);
if(cljs.core.truth_(after)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__13704),"\n  =>\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(kvlt.util.pprint_str.call(null,after))].join('');
} else {
return G__13704;
}
})(),kvlt$util$doc_examples_BANG__$_iter__13693.call(null,cljs.core.rest.call(null,s__13694__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,examples);
})()),"\n```");
});

//# sourceMappingURL=util.js.map
