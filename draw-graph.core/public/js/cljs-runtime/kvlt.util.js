goog.provide('kvlt.util');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.pprint');
kvlt.util.map_keys = (function kvlt$util$map_keys(f,m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4523__auto__ = (function kvlt$util$map_keys_$_iter__37037(s__37038){
return (new cljs.core.LazySeq(null,(function (){
var s__37038__$1 = s__37038;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__37038__$1);
if(temp__5720__auto__){
var s__37038__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37038__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__37038__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__37040 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__37039 = (0);
while(true){
if((i__37039 < size__4522__auto__)){
var vec__37041 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__37039);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37041,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37041,(1),null);
cljs.core.chunk_append(b__37040,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k) : f.call(null,k)),v], null));

var G__37135 = (i__37039 + (1));
i__37039 = G__37135;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37040),kvlt$util$map_keys_$_iter__37037(cljs.core.chunk_rest(s__37038__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37040),null);
}
} else {
var vec__37044 = cljs.core.first(s__37038__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37044,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37044,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k) : f.call(null,k)),v], null),kvlt$util$map_keys_$_iter__37037(cljs.core.rest(s__37038__$2)));
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

var G__37141 = (i__37050 + (1));
i__37050 = G__37141;
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
var _PLUS_none_PLUS__37143 = new cljs.core.Keyword("kvlt.util","none","kvlt.util/none",1136838753);
kvlt.util.update_when = ((function (_PLUS_none_PLUS__37143){
return (function kvlt$util$update_when(var_args){
var args__4736__auto__ = [];
var len__4730__auto___37144 = arguments.length;
var i__4731__auto___37145 = (0);
while(true){
if((i__4731__auto___37145 < len__4730__auto___37144)){
args__4736__auto__.push((arguments[i__4731__auto___37145]));

var G__37146 = (i__4731__auto___37145 + (1));
i__4731__auto___37145 = G__37146;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return kvlt.util.update_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});})(_PLUS_none_PLUS__37143))
;

kvlt.util.update_when.cljs$core$IFn$_invoke$arity$variadic = ((function (_PLUS_none_PLUS__37143){
return (function (m,key,f,args){
var found = (m.cljs$core$IFn$_invoke$arity$2 ? m.cljs$core$IFn$_invoke$arity$2(key,_PLUS_none_PLUS__37143) : m.call(null,key,_PLUS_none_PLUS__37143));
if((!((_PLUS_none_PLUS__37143 === found)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,key,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,found,args));
} else {
return m;
}
});})(_PLUS_none_PLUS__37143))
;

kvlt.util.update_when.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
kvlt.util.update_when.cljs$lang$applyTo = ((function (_PLUS_none_PLUS__37143){
return (function (seq37058){
var G__37059 = cljs.core.first(seq37058);
var seq37058__$1 = cljs.core.next(seq37058);
var G__37060 = cljs.core.first(seq37058__$1);
var seq37058__$2 = cljs.core.next(seq37058__$1);
var G__37061 = cljs.core.first(seq37058__$2);
var seq37058__$3 = cljs.core.next(seq37058__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37059,G__37060,G__37061,seq37058__$3);
});})(_PLUS_none_PLUS__37143))
;

kvlt.util.bidirectional_chan = (function kvlt$util$bidirectional_chan(var_args){
var args__4736__auto__ = [];
var len__4730__auto___37147 = arguments.length;
var i__4731__auto___37148 = (0);
while(true){
if((i__4731__auto___37148 < len__4730__auto___37147)){
args__4736__auto__.push((arguments[i__4731__auto___37148]));

var G__37149 = (i__4731__auto___37148 + (1));
i__4731__auto___37148 = G__37149;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return kvlt.util.bidirectional_chan.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

kvlt.util.bidirectional_chan.cljs$core$IFn$_invoke$arity$variadic = (function (read_ch,write_ch,p__37067){
var vec__37068 = p__37067;
var map__37071 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37068,(0),null);
var map__37071__$1 = (((((!((map__37071 == null))))?(((((map__37071.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37071.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37071):map__37071);
var on_close = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37071__$1,new cljs.core.Keyword(null,"on-close","on-close",-761178394));
var close_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37071__$1,new cljs.core.Keyword(null,"close?","close?",1600185693),true);
if((typeof kvlt !== 'undefined') && (typeof kvlt.util !== 'undefined') && (typeof kvlt.util.t_kvlt$util37073 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
kvlt.util.t_kvlt$util37073 = (function (read_ch,write_ch,p__37067,vec__37068,map__37071,on_close,close_QMARK_,meta37074){
this.read_ch = read_ch;
this.write_ch = write_ch;
this.p__37067 = p__37067;
this.vec__37068 = vec__37068;
this.map__37071 = map__37071;
this.on_close = on_close;
this.close_QMARK_ = close_QMARK_;
this.meta37074 = meta37074;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
kvlt.util.t_kvlt$util37073.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__37068,map__37071,map__37071__$1,on_close,close_QMARK_){
return (function (_37075,meta37074__$1){
var self__ = this;
var _37075__$1 = this;
return (new kvlt.util.t_kvlt$util37073(self__.read_ch,self__.write_ch,self__.p__37067,self__.vec__37068,self__.map__37071,self__.on_close,self__.close_QMARK_,meta37074__$1));
});})(vec__37068,map__37071,map__37071__$1,on_close,close_QMARK_))
;

kvlt.util.t_kvlt$util37073.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__37068,map__37071,map__37071__$1,on_close,close_QMARK_){
return (function (_37075){
var self__ = this;
var _37075__$1 = this;
return self__.meta37074;
});})(vec__37068,map__37071,map__37071__$1,on_close,close_QMARK_))
;

kvlt.util.t_kvlt$util37073.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

kvlt.util.t_kvlt$util37073.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = ((function (vec__37068,map__37071,map__37071__$1,on_close,close_QMARK_){
return (function (_,handler){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.read_ch,handler);
});})(vec__37068,map__37071,map__37071__$1,on_close,close_QMARK_))
;

kvlt.util.t_kvlt$util37073.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

kvlt.util.t_kvlt$util37073.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = ((function (vec__37068,map__37071,map__37071__$1,on_close,close_QMARK_){
return (function (_,msg,handler){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.write_ch,msg,handler);
});})(vec__37068,map__37071,map__37071__$1,on_close,close_QMARK_))
;

kvlt.util.t_kvlt$util37073.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

kvlt.util.t_kvlt$util37073.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = ((function (vec__37068,map__37071,map__37071__$1,on_close,close_QMARK_){
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
});})(vec__37068,map__37071,map__37071__$1,on_close,close_QMARK_))
;

kvlt.util.t_kvlt$util37073.getBasis = ((function (vec__37068,map__37071,map__37071__$1,on_close,close_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"read-ch","read-ch",1602045113,null),new cljs.core.Symbol(null,"write-ch","write-ch",-126054072,null),new cljs.core.Symbol(null,"p__37067","p__37067",-277212915,null),new cljs.core.Symbol(null,"vec__37068","vec__37068",-191955812,null),new cljs.core.Symbol(null,"map__37071","map__37071",-705881888,null),new cljs.core.Symbol(null,"on-close","on-close",879353133,null),new cljs.core.Symbol(null,"close?","close?",-1054250076,null),new cljs.core.Symbol(null,"meta37074","meta37074",-740261710,null)], null);
});})(vec__37068,map__37071,map__37071__$1,on_close,close_QMARK_))
;

kvlt.util.t_kvlt$util37073.cljs$lang$type = true;

kvlt.util.t_kvlt$util37073.cljs$lang$ctorStr = "kvlt.util/t_kvlt$util37073";

kvlt.util.t_kvlt$util37073.cljs$lang$ctorPrWriter = ((function (vec__37068,map__37071,map__37071__$1,on_close,close_QMARK_){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"kvlt.util/t_kvlt$util37073");
});})(vec__37068,map__37071,map__37071__$1,on_close,close_QMARK_))
;

/**
 * Positional factory function for kvlt.util/t_kvlt$util37073.
 */
kvlt.util.__GT_t_kvlt$util37073 = ((function (vec__37068,map__37071,map__37071__$1,on_close,close_QMARK_){
return (function kvlt$util$__GT_t_kvlt$util37073(read_ch__$1,write_ch__$1,p__37067__$1,vec__37068__$1,map__37071__$2,on_close__$1,close_QMARK___$1,meta37074){
return (new kvlt.util.t_kvlt$util37073(read_ch__$1,write_ch__$1,p__37067__$1,vec__37068__$1,map__37071__$2,on_close__$1,close_QMARK___$1,meta37074));
});})(vec__37068,map__37071,map__37071__$1,on_close,close_QMARK_))
;

}

return (new kvlt.util.t_kvlt$util37073(read_ch,write_ch,p__37067,vec__37068,map__37071__$1,on_close,close_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
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
var len__4730__auto___37153 = arguments.length;
var i__4731__auto___37154 = (0);
while(true){
if((i__4731__auto___37154 < len__4730__auto___37153)){
args__4736__auto__.push((arguments[i__4731__auto___37154]));

var G__37155 = (i__4731__auto___37154 + (1));
i__4731__auto___37154 = G__37155;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return kvlt.util.read_proxy_chan.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

kvlt.util.read_proxy_chan.cljs$core$IFn$_invoke$arity$variadic = (function (read_ch,on_close,p__37090){
var vec__37092 = p__37090;
var map__37095 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37092,(0),null);
var map__37095__$1 = (((((!((map__37095 == null))))?(((((map__37095.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37095.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37095):map__37095);
var close_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37095__$1,new cljs.core.Keyword(null,"close?","close?",1600185693),true);
if((typeof kvlt !== 'undefined') && (typeof kvlt.util !== 'undefined') && (typeof kvlt.util.t_kvlt$util37098 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
kvlt.util.t_kvlt$util37098 = (function (read_ch,on_close,p__37090,vec__37092,map__37095,close_QMARK_,meta37099){
this.read_ch = read_ch;
this.on_close = on_close;
this.p__37090 = p__37090;
this.vec__37092 = vec__37092;
this.map__37095 = map__37095;
this.close_QMARK_ = close_QMARK_;
this.meta37099 = meta37099;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
kvlt.util.t_kvlt$util37098.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__37092,map__37095,map__37095__$1,close_QMARK_){
return (function (_37100,meta37099__$1){
var self__ = this;
var _37100__$1 = this;
return (new kvlt.util.t_kvlt$util37098(self__.read_ch,self__.on_close,self__.p__37090,self__.vec__37092,self__.map__37095,self__.close_QMARK_,meta37099__$1));
});})(vec__37092,map__37095,map__37095__$1,close_QMARK_))
;

kvlt.util.t_kvlt$util37098.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__37092,map__37095,map__37095__$1,close_QMARK_){
return (function (_37100){
var self__ = this;
var _37100__$1 = this;
return self__.meta37099;
});})(vec__37092,map__37095,map__37095__$1,close_QMARK_))
;

kvlt.util.t_kvlt$util37098.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

kvlt.util.t_kvlt$util37098.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = ((function (vec__37092,map__37095,map__37095__$1,close_QMARK_){
return (function (_,handler){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.read_ch,handler);
});})(vec__37092,map__37095,map__37095__$1,close_QMARK_))
;

kvlt.util.t_kvlt$util37098.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

kvlt.util.t_kvlt$util37098.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = ((function (vec__37092,map__37095,map__37095__$1,close_QMARK_){
return (function (_){
var self__ = this;
var ___$1 = this;
(self__.on_close.cljs$core$IFn$_invoke$arity$0 ? self__.on_close.cljs$core$IFn$_invoke$arity$0() : self__.on_close.call(null));

if(cljs.core.truth_(self__.close_QMARK_)){
return cljs.core.async.impl.protocols.close_BANG_(self__.read_ch);
} else {
return null;
}
});})(vec__37092,map__37095,map__37095__$1,close_QMARK_))
;

kvlt.util.t_kvlt$util37098.getBasis = ((function (vec__37092,map__37095,map__37095__$1,close_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"read-ch","read-ch",1602045113,null),new cljs.core.Symbol(null,"on-close","on-close",879353133,null),new cljs.core.Symbol(null,"p__37090","p__37090",1900461846,null),new cljs.core.Symbol(null,"vec__37092","vec__37092",250184977,null),new cljs.core.Symbol(null,"map__37095","map__37095",-1829419789,null),new cljs.core.Symbol(null,"close?","close?",-1054250076,null),new cljs.core.Symbol(null,"meta37099","meta37099",982760321,null)], null);
});})(vec__37092,map__37095,map__37095__$1,close_QMARK_))
;

kvlt.util.t_kvlt$util37098.cljs$lang$type = true;

kvlt.util.t_kvlt$util37098.cljs$lang$ctorStr = "kvlt.util/t_kvlt$util37098";

kvlt.util.t_kvlt$util37098.cljs$lang$ctorPrWriter = ((function (vec__37092,map__37095,map__37095__$1,close_QMARK_){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"kvlt.util/t_kvlt$util37098");
});})(vec__37092,map__37095,map__37095__$1,close_QMARK_))
;

/**
 * Positional factory function for kvlt.util/t_kvlt$util37098.
 */
kvlt.util.__GT_t_kvlt$util37098 = ((function (vec__37092,map__37095,map__37095__$1,close_QMARK_){
return (function kvlt$util$__GT_t_kvlt$util37098(read_ch__$1,on_close__$1,p__37090__$1,vec__37092__$1,map__37095__$2,close_QMARK___$1,meta37099){
return (new kvlt.util.t_kvlt$util37098(read_ch__$1,on_close__$1,p__37090__$1,vec__37092__$1,map__37095__$2,close_QMARK___$1,meta37099));
});})(vec__37092,map__37095,map__37095__$1,close_QMARK_))
;

}

return (new kvlt.util.t_kvlt$util37098(read_ch,on_close,p__37090,vec__37092,map__37095__$1,close_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
});

kvlt.util.read_proxy_chan.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
kvlt.util.read_proxy_chan.cljs$lang$applyTo = (function (seq37084){
var G__37085 = cljs.core.first(seq37084);
var seq37084__$1 = cljs.core.next(seq37084);
var G__37086 = cljs.core.first(seq37084__$1);
var seq37084__$2 = cljs.core.next(seq37084__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37085,G__37086,seq37084__$2);
});

kvlt.util.pprint_str = (function kvlt$util$pprint_str(x){
return clojure.string.trimr((function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__37111_37164 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__37112_37165 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__37113_37166 = true;
var _STAR_print_fn_STAR__temp_val__37114_37167 = ((function (_STAR_print_newline_STAR__orig_val__37111_37164,_STAR_print_fn_STAR__orig_val__37112_37165,_STAR_print_newline_STAR__temp_val__37113_37166,sb__4661__auto__){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__37111_37164,_STAR_print_fn_STAR__orig_val__37112_37165,_STAR_print_newline_STAR__temp_val__37113_37166,sb__4661__auto__))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__37113_37166;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__37114_37167;

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(x);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__37112_37165;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__37111_37164;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
});
kvlt.util.doc_examples_BANG_ = (function kvlt$util$doc_examples_BANG_(vvar,examples){
return cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(vvar,cljs.core.update,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"doc","doc",1913296891),cljs.core.str,"\n\n```clojure\n",clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n\n",(function (){var iter__4523__auto__ = (function kvlt$util$doc_examples_BANG__$_iter__37116(s__37117){
return (new cljs.core.LazySeq(null,(function (){
var s__37117__$1 = s__37117;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__37117__$1);
if(temp__5720__auto__){
var s__37117__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37117__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__37117__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__37119 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__37118 = (0);
while(true){
if((i__37118 < size__4522__auto__)){
var vec__37122 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__37118);
var before = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37122,(0),null);
var after = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37122,(1),null);
cljs.core.chunk_append(b__37119,(function (){var G__37125 = kvlt.util.pprint_str(before);
if(cljs.core.truth_(after)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37125),"\n  =>\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(kvlt.util.pprint_str(after))].join('');
} else {
return G__37125;
}
})());

var G__37171 = (i__37118 + (1));
i__37118 = G__37171;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37119),kvlt$util$doc_examples_BANG__$_iter__37116(cljs.core.chunk_rest(s__37117__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37119),null);
}
} else {
var vec__37126 = cljs.core.first(s__37117__$2);
var before = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37126,(0),null);
var after = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37126,(1),null);
return cljs.core.cons((function (){var G__37129 = kvlt.util.pprint_str(before);
if(cljs.core.truth_(after)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37129),"\n  =>\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(kvlt.util.pprint_str(after))].join('');
} else {
return G__37129;
}
})(),kvlt$util$doc_examples_BANG__$_iter__37116(cljs.core.rest(s__37117__$2)));
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
