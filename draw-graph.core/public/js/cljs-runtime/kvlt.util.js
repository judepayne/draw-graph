goog.provide('kvlt.util');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.pprint');
kvlt.util.map_keys = (function kvlt$util$map_keys(f,m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4582__auto__ = (function kvlt$util$map_keys_$_iter__41740(s__41741){
return (new cljs.core.LazySeq(null,(function (){
var s__41741__$1 = s__41741;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__41741__$1);
if(temp__5735__auto__){
var s__41741__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41741__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__41741__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__41743 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__41742 = (0);
while(true){
if((i__41742 < size__4581__auto__)){
var vec__41746 = cljs.core._nth(c__4580__auto__,i__41742);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41746,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41746,(1),null);
cljs.core.chunk_append(b__41743,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k) : f.call(null,k)),v], null));

var G__41845 = (i__41742 + (1));
i__41742 = G__41845;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41743),kvlt$util$map_keys_$_iter__41740(cljs.core.chunk_rest(s__41741__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41743),null);
}
} else {
var vec__41749 = cljs.core.first(s__41741__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41749,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41749,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k) : f.call(null,k)),v], null),kvlt$util$map_keys_$_iter__41740(cljs.core.rest(s__41741__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(m);
})());
});
kvlt.util.map_vals = (function kvlt$util$map_vals(f,m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4582__auto__ = (function kvlt$util$map_vals_$_iter__41756(s__41757){
return (new cljs.core.LazySeq(null,(function (){
var s__41757__$1 = s__41757;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__41757__$1);
if(temp__5735__auto__){
var s__41757__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41757__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__41757__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__41759 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__41758 = (0);
while(true){
if((i__41758 < size__4581__auto__)){
var vec__41761 = cljs.core._nth(c__4580__auto__,i__41758);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41761,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41761,(1),null);
cljs.core.chunk_append(b__41759,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v))], null));

var G__41851 = (i__41758 + (1));
i__41758 = G__41851;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41759),kvlt$util$map_vals_$_iter__41756(cljs.core.chunk_rest(s__41757__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41759),null);
}
} else {
var vec__41765 = cljs.core.first(s__41757__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41765,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41765,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v))], null),kvlt$util$map_vals_$_iter__41756(cljs.core.rest(s__41757__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(m);
})());
});
var _PLUS_none_PLUS__41852 = new cljs.core.Keyword("kvlt.util","none","kvlt.util/none",1136838753);
kvlt.util.update_when = (function kvlt$util$update_when(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41853 = arguments.length;
var i__4790__auto___41854 = (0);
while(true){
if((i__4790__auto___41854 < len__4789__auto___41853)){
args__4795__auto__.push((arguments[i__4790__auto___41854]));

var G__41858 = (i__4790__auto___41854 + (1));
i__4790__auto___41854 = G__41858;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return kvlt.util.update_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(kvlt.util.update_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,key,f,args){
var found = (m.cljs$core$IFn$_invoke$arity$2 ? m.cljs$core$IFn$_invoke$arity$2(key,_PLUS_none_PLUS__41852) : m.call(null,key,_PLUS_none_PLUS__41852));
if((!((_PLUS_none_PLUS__41852 === found)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,key,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,found,args));
} else {
return m;
}
}));

(kvlt.util.update_when.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(kvlt.util.update_when.cljs$lang$applyTo = (function (seq41768){
var G__41769 = cljs.core.first(seq41768);
var seq41768__$1 = cljs.core.next(seq41768);
var G__41770 = cljs.core.first(seq41768__$1);
var seq41768__$2 = cljs.core.next(seq41768__$1);
var G__41771 = cljs.core.first(seq41768__$2);
var seq41768__$3 = cljs.core.next(seq41768__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41769,G__41770,G__41771,seq41768__$3);
}));

kvlt.util.bidirectional_chan = (function kvlt$util$bidirectional_chan(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41863 = arguments.length;
var i__4790__auto___41864 = (0);
while(true){
if((i__4790__auto___41864 < len__4789__auto___41863)){
args__4795__auto__.push((arguments[i__4790__auto___41864]));

var G__41866 = (i__4790__auto___41864 + (1));
i__4790__auto___41864 = G__41866;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return kvlt.util.bidirectional_chan.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(kvlt.util.bidirectional_chan.cljs$core$IFn$_invoke$arity$variadic = (function (read_ch,write_ch,p__41780){
var vec__41782 = p__41780;
var map__41785 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41782,(0),null);
var map__41785__$1 = (((((!((map__41785 == null))))?(((((map__41785.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41785.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41785):map__41785);
var on_close = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41785__$1,new cljs.core.Keyword(null,"on-close","on-close",-761178394));
var close_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41785__$1,new cljs.core.Keyword(null,"close?","close?",1600185693),true);
if((typeof kvlt !== 'undefined') && (typeof kvlt.util !== 'undefined') && (typeof kvlt.util.t_kvlt$util41789 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
kvlt.util.t_kvlt$util41789 = (function (read_ch,write_ch,p__41780,vec__41782,map__41785,on_close,close_QMARK_,meta41790){
this.read_ch = read_ch;
this.write_ch = write_ch;
this.p__41780 = p__41780;
this.vec__41782 = vec__41782;
this.map__41785 = map__41785;
this.on_close = on_close;
this.close_QMARK_ = close_QMARK_;
this.meta41790 = meta41790;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(kvlt.util.t_kvlt$util41789.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41791,meta41790__$1){
var self__ = this;
var _41791__$1 = this;
return (new kvlt.util.t_kvlt$util41789(self__.read_ch,self__.write_ch,self__.p__41780,self__.vec__41782,self__.map__41785,self__.on_close,self__.close_QMARK_,meta41790__$1));
}));

(kvlt.util.t_kvlt$util41789.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41791){
var self__ = this;
var _41791__$1 = this;
return self__.meta41790;
}));

(kvlt.util.t_kvlt$util41789.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(kvlt.util.t_kvlt$util41789.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,handler){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.read_ch,handler);
}));

(kvlt.util.t_kvlt$util41789.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(kvlt.util.t_kvlt$util41789.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,msg,handler){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.write_ch,msg,handler);
}));

(kvlt.util.t_kvlt$util41789.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(kvlt.util.t_kvlt$util41789.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
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
}));

(kvlt.util.t_kvlt$util41789.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"read-ch","read-ch",1602045113,null),new cljs.core.Symbol(null,"write-ch","write-ch",-126054072,null),new cljs.core.Symbol(null,"p__41780","p__41780",-1011090006,null),new cljs.core.Symbol(null,"vec__41782","vec__41782",1374434523,null),new cljs.core.Symbol(null,"map__41785","map__41785",1742544173,null),new cljs.core.Symbol(null,"on-close","on-close",879353133,null),new cljs.core.Symbol(null,"close?","close?",-1054250076,null),new cljs.core.Symbol(null,"meta41790","meta41790",-211127660,null)], null);
}));

(kvlt.util.t_kvlt$util41789.cljs$lang$type = true);

(kvlt.util.t_kvlt$util41789.cljs$lang$ctorStr = "kvlt.util/t_kvlt$util41789");

(kvlt.util.t_kvlt$util41789.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"kvlt.util/t_kvlt$util41789");
}));

/**
 * Positional factory function for kvlt.util/t_kvlt$util41789.
 */
kvlt.util.__GT_t_kvlt$util41789 = (function kvlt$util$__GT_t_kvlt$util41789(read_ch__$1,write_ch__$1,p__41780__$1,vec__41782__$1,map__41785__$2,on_close__$1,close_QMARK___$1,meta41790){
return (new kvlt.util.t_kvlt$util41789(read_ch__$1,write_ch__$1,p__41780__$1,vec__41782__$1,map__41785__$2,on_close__$1,close_QMARK___$1,meta41790));
});

}

return (new kvlt.util.t_kvlt$util41789(read_ch,write_ch,p__41780,vec__41782,map__41785__$1,on_close,close_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
}));

(kvlt.util.bidirectional_chan.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(kvlt.util.bidirectional_chan.cljs$lang$applyTo = (function (seq41776){
var G__41777 = cljs.core.first(seq41776);
var seq41776__$1 = cljs.core.next(seq41776);
var G__41778 = cljs.core.first(seq41776__$1);
var seq41776__$2 = cljs.core.next(seq41776__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41777,G__41778,seq41776__$2);
}));

kvlt.util.read_proxy_chan = (function kvlt$util$read_proxy_chan(var_args){
var args__4795__auto__ = [];
var len__4789__auto___41879 = arguments.length;
var i__4790__auto___41880 = (0);
while(true){
if((i__4790__auto___41880 < len__4789__auto___41879)){
args__4795__auto__.push((arguments[i__4790__auto___41880]));

var G__41881 = (i__4790__auto___41880 + (1));
i__4790__auto___41880 = G__41881;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return kvlt.util.read_proxy_chan.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(kvlt.util.read_proxy_chan.cljs$core$IFn$_invoke$arity$variadic = (function (read_ch,on_close,p__41806){
var vec__41807 = p__41806;
var map__41810 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41807,(0),null);
var map__41810__$1 = (((((!((map__41810 == null))))?(((((map__41810.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41810.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41810):map__41810);
var close_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41810__$1,new cljs.core.Keyword(null,"close?","close?",1600185693),true);
if((typeof kvlt !== 'undefined') && (typeof kvlt.util !== 'undefined') && (typeof kvlt.util.t_kvlt$util41813 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
kvlt.util.t_kvlt$util41813 = (function (read_ch,on_close,p__41806,vec__41807,map__41810,close_QMARK_,meta41814){
this.read_ch = read_ch;
this.on_close = on_close;
this.p__41806 = p__41806;
this.vec__41807 = vec__41807;
this.map__41810 = map__41810;
this.close_QMARK_ = close_QMARK_;
this.meta41814 = meta41814;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(kvlt.util.t_kvlt$util41813.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41815,meta41814__$1){
var self__ = this;
var _41815__$1 = this;
return (new kvlt.util.t_kvlt$util41813(self__.read_ch,self__.on_close,self__.p__41806,self__.vec__41807,self__.map__41810,self__.close_QMARK_,meta41814__$1));
}));

(kvlt.util.t_kvlt$util41813.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41815){
var self__ = this;
var _41815__$1 = this;
return self__.meta41814;
}));

(kvlt.util.t_kvlt$util41813.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(kvlt.util.t_kvlt$util41813.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,handler){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.read_ch,handler);
}));

(kvlt.util.t_kvlt$util41813.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(kvlt.util.t_kvlt$util41813.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
(self__.on_close.cljs$core$IFn$_invoke$arity$0 ? self__.on_close.cljs$core$IFn$_invoke$arity$0() : self__.on_close.call(null));

if(cljs.core.truth_(self__.close_QMARK_)){
return cljs.core.async.impl.protocols.close_BANG_(self__.read_ch);
} else {
return null;
}
}));

(kvlt.util.t_kvlt$util41813.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"read-ch","read-ch",1602045113,null),new cljs.core.Symbol(null,"on-close","on-close",879353133,null),new cljs.core.Symbol(null,"p__41806","p__41806",700696382,null),new cljs.core.Symbol(null,"vec__41807","vec__41807",-1356746983,null),new cljs.core.Symbol(null,"map__41810","map__41810",-2025476032,null),new cljs.core.Symbol(null,"close?","close?",-1054250076,null),new cljs.core.Symbol(null,"meta41814","meta41814",634948331,null)], null);
}));

(kvlt.util.t_kvlt$util41813.cljs$lang$type = true);

(kvlt.util.t_kvlt$util41813.cljs$lang$ctorStr = "kvlt.util/t_kvlt$util41813");

(kvlt.util.t_kvlt$util41813.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"kvlt.util/t_kvlt$util41813");
}));

/**
 * Positional factory function for kvlt.util/t_kvlt$util41813.
 */
kvlt.util.__GT_t_kvlt$util41813 = (function kvlt$util$__GT_t_kvlt$util41813(read_ch__$1,on_close__$1,p__41806__$1,vec__41807__$1,map__41810__$2,close_QMARK___$1,meta41814){
return (new kvlt.util.t_kvlt$util41813(read_ch__$1,on_close__$1,p__41806__$1,vec__41807__$1,map__41810__$2,close_QMARK___$1,meta41814));
});

}

return (new kvlt.util.t_kvlt$util41813(read_ch,on_close,p__41806,vec__41807,map__41810__$1,close_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
}));

(kvlt.util.read_proxy_chan.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(kvlt.util.read_proxy_chan.cljs$lang$applyTo = (function (seq41800){
var G__41801 = cljs.core.first(seq41800);
var seq41800__$1 = cljs.core.next(seq41800);
var G__41803 = cljs.core.first(seq41800__$1);
var seq41800__$2 = cljs.core.next(seq41800__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41801,G__41803,seq41800__$2);
}));

kvlt.util.pprint_str = (function kvlt$util$pprint_str(x){
return clojure.string.trimr((function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__41826_41891 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__41827_41892 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__41828_41893 = true;
var _STAR_print_fn_STAR__temp_val__41829_41894 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__41828_41893);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__41829_41894);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(x);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__41827_41892);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__41826_41891);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})());
});
kvlt.util.doc_examples_BANG_ = (function kvlt$util$doc_examples_BANG_(vvar,examples){
return cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(vvar,cljs.core.update,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"doc","doc",1913296891),cljs.core.str,"\n\n```clojure\n",clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n\n",(function (){var iter__4582__auto__ = (function kvlt$util$doc_examples_BANG__$_iter__41830(s__41831){
return (new cljs.core.LazySeq(null,(function (){
var s__41831__$1 = s__41831;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__41831__$1);
if(temp__5735__auto__){
var s__41831__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41831__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__41831__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__41833 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__41832 = (0);
while(true){
if((i__41832 < size__4581__auto__)){
var vec__41837 = cljs.core._nth(c__4580__auto__,i__41832);
var before = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41837,(0),null);
var after = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41837,(1),null);
cljs.core.chunk_append(b__41833,(function (){var G__41840 = kvlt.util.pprint_str(before);
if(cljs.core.truth_(after)){
return [G__41840,"\n  =>\n",kvlt.util.pprint_str(after)].join('');
} else {
return G__41840;
}
})());

var G__41897 = (i__41832 + (1));
i__41832 = G__41897;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41833),kvlt$util$doc_examples_BANG__$_iter__41830(cljs.core.chunk_rest(s__41831__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41833),null);
}
} else {
var vec__41841 = cljs.core.first(s__41831__$2);
var before = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41841,(0),null);
var after = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41841,(1),null);
return cljs.core.cons((function (){var G__41844 = kvlt.util.pprint_str(before);
if(cljs.core.truth_(after)){
return [G__41844,"\n  =>\n",kvlt.util.pprint_str(after)].join('');
} else {
return G__41844;
}
})(),kvlt$util$doc_examples_BANG__$_iter__41830(cljs.core.rest(s__41831__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(examples);
})()),"\n```"], 0));
});

//# sourceMappingURL=kvlt.util.js.map
