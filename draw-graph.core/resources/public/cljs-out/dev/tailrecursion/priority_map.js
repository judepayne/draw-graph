// Compiled by ClojureScript 1.10.520 {}
goog.provide('tailrecursion.priority_map');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('cljs.reader');

/**
* @constructor
 * @implements {cljs.core.IReversible}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISorted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IStack}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
tailrecursion.priority_map.PersistentPriorityMap = (function (priority__GT_set_of_items,item__GT_priority,meta,keyfn,__hash){
this.priority__GT_set_of_items = priority__GT_set_of_items;
this.item__GT_priority = item__GT_priority;
this.meta = meta;
this.keyfn = keyfn;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2565220111;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,item){
var self__ = this;
var this$__$1 = this;
return cljs.core.get.call(null,self__.item__GT_priority,item);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,item,not_found){
var self__ = this;
var coll__$1 = this;
return cljs.core.get.call(null,self__.item__GT_priority,item,not_found);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var self__ = this;
var coll__$1 = this;
var pr_pair = ((function (coll__$1){
return (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});})(coll__$1))
;
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair,"#tailrecursion.priority-map {",", ","}",opts,coll__$1);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.meta;
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.count.call(null,self__.item__GT_priority);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IStack$_peek$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count.call(null,self__.item__GT_priority) === (0))){
return null;
} else {
var f = cljs.core.first.call(null,self__.priority__GT_set_of_items);
var item = cljs.core.first.call(null,cljs.core.val.call(null,f));
if(cljs.core.truth_(self__.keyfn)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,cljs.core.key.call(null,f)], null);
}
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IStack$_pop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count.call(null,self__.item__GT_priority) === (0))){
throw (new Error("Can't pop empty priority map"));
} else {
var f = cljs.core.first.call(null,self__.priority__GT_set_of_items);
var item_set = cljs.core.val.call(null,f);
var item = cljs.core.first.call(null,item_set);
var priority_key = cljs.core.key.call(null,f);
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,item_set),(1))){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.dissoc.call(null,self__.priority__GT_set_of_items,priority_key),cljs.core.dissoc.call(null,self__.item__GT_priority,item),self__.meta,self__.keyfn,null));
} else {
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.call(null,self__.priority__GT_set_of_items,priority_key,cljs.core.disj.call(null,item_set,item)),cljs.core.dissoc.call(null,self__.item__GT_priority,item),self__.meta,self__.keyfn,null));
}
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if(cljs.core.truth_(self__.keyfn)){
return cljs.core.seq.call(null,(function (){var iter__4523__auto__ = ((function (coll__$1){
return (function tailrecursion$priority_map$iter__38383(s__38384){
return (new cljs.core.LazySeq(null,((function (coll__$1){
return (function (){
var s__38384__$1 = s__38384;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__38384__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var vec__38389 = cljs.core.first.call(null,xs__6277__auto__);
var priority = cljs.core.nth.call(null,vec__38389,(0),null);
var item_set = cljs.core.nth.call(null,vec__38389,(1),null);
var iterys__4519__auto__ = ((function (s__38384__$1,vec__38389,priority,item_set,xs__6277__auto__,temp__5720__auto__,coll__$1){
return (function tailrecursion$priority_map$iter__38383_$_iter__38385(s__38386){
return (new cljs.core.LazySeq(null,((function (s__38384__$1,vec__38389,priority,item_set,xs__6277__auto__,temp__5720__auto__,coll__$1){
return (function (){
var s__38386__$1 = s__38386;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__38386__$1);
if(temp__5720__auto____$1){
var s__38386__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38386__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__38386__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__38388 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__38387 = (0);
while(true){
if((i__38387 < size__4522__auto__)){
var item = cljs.core._nth.call(null,c__4521__auto__,i__38387);
cljs.core.chunk_append.call(null,b__38388,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null));

var G__38437 = (i__38387 + (1));
i__38387 = G__38437;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38388),tailrecursion$priority_map$iter__38383_$_iter__38385.call(null,cljs.core.chunk_rest.call(null,s__38386__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38388),null);
}
} else {
var item = cljs.core.first.call(null,s__38386__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null),tailrecursion$priority_map$iter__38383_$_iter__38385.call(null,cljs.core.rest.call(null,s__38386__$2)));
}
} else {
return null;
}
break;
}
});})(s__38384__$1,vec__38389,priority,item_set,xs__6277__auto__,temp__5720__auto__,coll__$1))
,null,null));
});})(s__38384__$1,vec__38389,priority,item_set,xs__6277__auto__,temp__5720__auto__,coll__$1))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,item_set));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,tailrecursion$priority_map$iter__38383.call(null,cljs.core.rest.call(null,s__38384__$1)));
} else {
var G__38438 = cljs.core.rest.call(null,s__38384__$1);
s__38384__$1 = G__38438;
continue;
}
} else {
return null;
}
break;
}
});})(coll__$1))
,null,null));
});})(coll__$1))
;
return iter__4523__auto__.call(null,cljs.core.rseq.call(null,self__.priority__GT_set_of_items));
})());
} else {
return cljs.core.seq.call(null,(function (){var iter__4523__auto__ = ((function (coll__$1){
return (function tailrecursion$priority_map$iter__38392(s__38393){
return (new cljs.core.LazySeq(null,((function (coll__$1){
return (function (){
var s__38393__$1 = s__38393;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__38393__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var vec__38398 = cljs.core.first.call(null,xs__6277__auto__);
var priority = cljs.core.nth.call(null,vec__38398,(0),null);
var item_set = cljs.core.nth.call(null,vec__38398,(1),null);
var iterys__4519__auto__ = ((function (s__38393__$1,vec__38398,priority,item_set,xs__6277__auto__,temp__5720__auto__,coll__$1){
return (function tailrecursion$priority_map$iter__38392_$_iter__38394(s__38395){
return (new cljs.core.LazySeq(null,((function (s__38393__$1,vec__38398,priority,item_set,xs__6277__auto__,temp__5720__auto__,coll__$1){
return (function (){
var s__38395__$1 = s__38395;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__38395__$1);
if(temp__5720__auto____$1){
var s__38395__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38395__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__38395__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__38397 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__38396 = (0);
while(true){
if((i__38396 < size__4522__auto__)){
var item = cljs.core._nth.call(null,c__4521__auto__,i__38396);
cljs.core.chunk_append.call(null,b__38397,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__38439 = (i__38396 + (1));
i__38396 = G__38439;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38397),tailrecursion$priority_map$iter__38392_$_iter__38394.call(null,cljs.core.chunk_rest.call(null,s__38395__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38397),null);
}
} else {
var item = cljs.core.first.call(null,s__38395__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__38392_$_iter__38394.call(null,cljs.core.rest.call(null,s__38395__$2)));
}
} else {
return null;
}
break;
}
});})(s__38393__$1,vec__38398,priority,item_set,xs__6277__auto__,temp__5720__auto__,coll__$1))
,null,null));
});})(s__38393__$1,vec__38398,priority,item_set,xs__6277__auto__,temp__5720__auto__,coll__$1))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,item_set));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,tailrecursion$priority_map$iter__38392.call(null,cljs.core.rest.call(null,s__38393__$1)));
} else {
var G__38440 = cljs.core.rest.call(null,s__38393__$1);
s__38393__$1 = G__38440;
continue;
}
} else {
return null;
}
break;
}
});})(coll__$1))
,null,null));
});})(coll__$1))
;
return iter__4523__auto__.call(null,cljs.core.rseq.call(null,self__.priority__GT_set_of_items));
})());
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = cljs.core.hash_unordered_coll.call(null,this$__$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return cljs.core._equiv.call(null,self__.item__GT_priority,other);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.with_meta.call(null,tailrecursion.priority_map.PersistentPriorityMap.EMPTY,self__.meta);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this$,item){
var self__ = this;
var this$__$1 = this;
var priority = self__.item__GT_priority.call(null,item,new cljs.core.Keyword("tailrecursion.priority-map","not-found","tailrecursion.priority-map/not-found",-436727517));
if(cljs.core._EQ_.call(null,priority,new cljs.core.Keyword("tailrecursion.priority-map","not-found","tailrecursion.priority-map/not-found",-436727517))){
return this$__$1;
} else {
var priority_key = self__.keyfn.call(null,priority);
var item_set = self__.priority__GT_set_of_items.call(null,priority_key);
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,item_set),(1))){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.dissoc.call(null,self__.priority__GT_set_of_items,priority_key),cljs.core.dissoc.call(null,self__.item__GT_priority,item),self__.meta,self__.keyfn,null));
} else {
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.call(null,self__.priority__GT_set_of_items,priority_key,cljs.core.disj.call(null,item_set,item)),cljs.core.dissoc.call(null,self__.item__GT_priority,item),self__.meta,self__.keyfn,null));
}
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,item,priority){
var self__ = this;
var this$__$1 = this;
var temp__5718__auto__ = cljs.core.get.call(null,self__.item__GT_priority,item,null);
if(cljs.core.truth_(temp__5718__auto__)){
var current_priority = temp__5718__auto__;
if(cljs.core._EQ_.call(null,current_priority,priority)){
return this$__$1;
} else {
var priority_key = self__.keyfn.call(null,priority);
var current_priority_key = self__.keyfn.call(null,current_priority);
var item_set = cljs.core.get.call(null,self__.priority__GT_set_of_items,current_priority_key);
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,item_set),(1))){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.call(null,cljs.core.dissoc.call(null,self__.priority__GT_set_of_items,current_priority_key),priority_key,cljs.core.conj.call(null,cljs.core.get.call(null,self__.priority__GT_set_of_items,priority_key,cljs.core.PersistentHashSet.EMPTY),item)),cljs.core.assoc.call(null,self__.item__GT_priority,item,priority),self__.meta,self__.keyfn,null));
} else {
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.call(null,self__.priority__GT_set_of_items,current_priority_key,cljs.core.disj.call(null,cljs.core.get.call(null,self__.priority__GT_set_of_items,current_priority_key),item),priority_key,cljs.core.conj.call(null,cljs.core.get.call(null,self__.priority__GT_set_of_items,priority_key,cljs.core.PersistentHashSet.EMPTY),item)),cljs.core.assoc.call(null,self__.item__GT_priority,item,priority),self__.meta,self__.keyfn,null));
}
}
} else {
var priority_key = self__.keyfn.call(null,priority);
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.call(null,self__.priority__GT_set_of_items,priority_key,cljs.core.conj.call(null,cljs.core.get.call(null,self__.priority__GT_set_of_items,priority_key,cljs.core.PersistentHashSet.EMPTY),item)),cljs.core.assoc.call(null,self__.item__GT_priority,item,priority),self__.meta,self__.keyfn,null));
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this$,item){
var self__ = this;
var this$__$1 = this;
return cljs.core.contains_QMARK_.call(null,self__.item__GT_priority,item);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.keyfn)){
return cljs.core.seq.call(null,(function (){var iter__4523__auto__ = ((function (this$__$1){
return (function tailrecursion$priority_map$iter__38401(s__38402){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__38402__$1 = s__38402;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__38402__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var vec__38407 = cljs.core.first.call(null,xs__6277__auto__);
var priority = cljs.core.nth.call(null,vec__38407,(0),null);
var item_set = cljs.core.nth.call(null,vec__38407,(1),null);
var iterys__4519__auto__ = ((function (s__38402__$1,vec__38407,priority,item_set,xs__6277__auto__,temp__5720__auto__,this$__$1){
return (function tailrecursion$priority_map$iter__38401_$_iter__38403(s__38404){
return (new cljs.core.LazySeq(null,((function (s__38402__$1,vec__38407,priority,item_set,xs__6277__auto__,temp__5720__auto__,this$__$1){
return (function (){
var s__38404__$1 = s__38404;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__38404__$1);
if(temp__5720__auto____$1){
var s__38404__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38404__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__38404__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__38406 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__38405 = (0);
while(true){
if((i__38405 < size__4522__auto__)){
var item = cljs.core._nth.call(null,c__4521__auto__,i__38405);
cljs.core.chunk_append.call(null,b__38406,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null));

var G__38441 = (i__38405 + (1));
i__38405 = G__38441;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38406),tailrecursion$priority_map$iter__38401_$_iter__38403.call(null,cljs.core.chunk_rest.call(null,s__38404__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38406),null);
}
} else {
var item = cljs.core.first.call(null,s__38404__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null),tailrecursion$priority_map$iter__38401_$_iter__38403.call(null,cljs.core.rest.call(null,s__38404__$2)));
}
} else {
return null;
}
break;
}
});})(s__38402__$1,vec__38407,priority,item_set,xs__6277__auto__,temp__5720__auto__,this$__$1))
,null,null));
});})(s__38402__$1,vec__38407,priority,item_set,xs__6277__auto__,temp__5720__auto__,this$__$1))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,item_set));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,tailrecursion$priority_map$iter__38401.call(null,cljs.core.rest.call(null,s__38402__$1)));
} else {
var G__38442 = cljs.core.rest.call(null,s__38402__$1);
s__38402__$1 = G__38442;
continue;
}
} else {
return null;
}
break;
}
});})(this$__$1))
,null,null));
});})(this$__$1))
;
return iter__4523__auto__.call(null,self__.priority__GT_set_of_items);
})());
} else {
return cljs.core.seq.call(null,(function (){var iter__4523__auto__ = ((function (this$__$1){
return (function tailrecursion$priority_map$iter__38410(s__38411){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__38411__$1 = s__38411;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__38411__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var vec__38416 = cljs.core.first.call(null,xs__6277__auto__);
var priority = cljs.core.nth.call(null,vec__38416,(0),null);
var item_set = cljs.core.nth.call(null,vec__38416,(1),null);
var iterys__4519__auto__ = ((function (s__38411__$1,vec__38416,priority,item_set,xs__6277__auto__,temp__5720__auto__,this$__$1){
return (function tailrecursion$priority_map$iter__38410_$_iter__38412(s__38413){
return (new cljs.core.LazySeq(null,((function (s__38411__$1,vec__38416,priority,item_set,xs__6277__auto__,temp__5720__auto__,this$__$1){
return (function (){
var s__38413__$1 = s__38413;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__38413__$1);
if(temp__5720__auto____$1){
var s__38413__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38413__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__38413__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__38415 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__38414 = (0);
while(true){
if((i__38414 < size__4522__auto__)){
var item = cljs.core._nth.call(null,c__4521__auto__,i__38414);
cljs.core.chunk_append.call(null,b__38415,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__38443 = (i__38414 + (1));
i__38414 = G__38443;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38415),tailrecursion$priority_map$iter__38410_$_iter__38412.call(null,cljs.core.chunk_rest.call(null,s__38413__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38415),null);
}
} else {
var item = cljs.core.first.call(null,s__38413__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__38410_$_iter__38412.call(null,cljs.core.rest.call(null,s__38413__$2)));
}
} else {
return null;
}
break;
}
});})(s__38411__$1,vec__38416,priority,item_set,xs__6277__auto__,temp__5720__auto__,this$__$1))
,null,null));
});})(s__38411__$1,vec__38416,priority,item_set,xs__6277__auto__,temp__5720__auto__,this$__$1))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,item_set));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,tailrecursion$priority_map$iter__38410.call(null,cljs.core.rest.call(null,s__38411__$1)));
} else {
var G__38444 = cljs.core.rest.call(null,s__38411__$1);
s__38411__$1 = G__38444;
continue;
}
} else {
return null;
}
break;
}
});})(this$__$1))
,null,null));
});})(this$__$1))
;
return iter__4523__auto__.call(null,self__.priority__GT_set_of_items);
})());
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,meta__$1){
var self__ = this;
var this$__$1 = this;
return (new tailrecursion.priority_map.PersistentPriorityMap(self__.priority__GT_set_of_items,self__.item__GT_priority,meta__$1,self__.keyfn,self__.__hash));
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,entry){
var self__ = this;
var this$__$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry)){
return cljs.core._assoc.call(null,this$__$1,cljs.core._nth.call(null,entry,(0)),cljs.core._nth.call(null,entry,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this$__$1,entry);
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.call = (function() {
var G__38445 = null;
var G__38445__2 = (function (self__,item){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,item);
});
var G__38445__3 = (function (self__,item,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,item,not_found);
});
G__38445 = function(self__,item,not_found){
switch(arguments.length){
case 2:
return G__38445__2.call(this,self__,item);
case 3:
return G__38445__3.call(this,self__,item,not_found);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__38445.cljs$core$IFn$_invoke$arity$2 = G__38445__2;
G__38445.cljs$core$IFn$_invoke$arity$3 = G__38445__3;
return G__38445;
})()
;

tailrecursion.priority_map.PersistentPriorityMap.prototype.apply = (function (self__,args38382){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args38382)));
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (item){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,item);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (item,not_found){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,item,not_found);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (this$,ascending_QMARK_){
var self__ = this;
var this$__$1 = this;
return (cljs.core.truth_(ascending_QMARK_)?cljs.core.seq:cljs.core.rseq).call(null,this$__$1);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (this$,k,ascending_QMARK_){
var self__ = this;
var this$__$1 = this;
var sets = (cljs.core.truth_(ascending_QMARK_)?cljs.core.subseq.call(null,self__.priority__GT_set_of_items,cljs.core._GT__EQ_,k):cljs.core.rsubseq.call(null,self__.priority__GT_set_of_items,cljs.core._LT__EQ_,k));
if(cljs.core.truth_(self__.keyfn)){
return cljs.core.seq.call(null,(function (){var iter__4523__auto__ = ((function (sets,this$__$1){
return (function tailrecursion$priority_map$iter__38419(s__38420){
return (new cljs.core.LazySeq(null,((function (sets,this$__$1){
return (function (){
var s__38420__$1 = s__38420;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__38420__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var vec__38425 = cljs.core.first.call(null,xs__6277__auto__);
var priority = cljs.core.nth.call(null,vec__38425,(0),null);
var item_set = cljs.core.nth.call(null,vec__38425,(1),null);
var iterys__4519__auto__ = ((function (s__38420__$1,vec__38425,priority,item_set,xs__6277__auto__,temp__5720__auto__,sets,this$__$1){
return (function tailrecursion$priority_map$iter__38419_$_iter__38421(s__38422){
return (new cljs.core.LazySeq(null,((function (s__38420__$1,vec__38425,priority,item_set,xs__6277__auto__,temp__5720__auto__,sets,this$__$1){
return (function (){
var s__38422__$1 = s__38422;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__38422__$1);
if(temp__5720__auto____$1){
var s__38422__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38422__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__38422__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__38424 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__38423 = (0);
while(true){
if((i__38423 < size__4522__auto__)){
var item = cljs.core._nth.call(null,c__4521__auto__,i__38423);
cljs.core.chunk_append.call(null,b__38424,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null));

var G__38446 = (i__38423 + (1));
i__38423 = G__38446;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38424),tailrecursion$priority_map$iter__38419_$_iter__38421.call(null,cljs.core.chunk_rest.call(null,s__38422__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38424),null);
}
} else {
var item = cljs.core.first.call(null,s__38422__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,self__.item__GT_priority.call(null,item)], null),tailrecursion$priority_map$iter__38419_$_iter__38421.call(null,cljs.core.rest.call(null,s__38422__$2)));
}
} else {
return null;
}
break;
}
});})(s__38420__$1,vec__38425,priority,item_set,xs__6277__auto__,temp__5720__auto__,sets,this$__$1))
,null,null));
});})(s__38420__$1,vec__38425,priority,item_set,xs__6277__auto__,temp__5720__auto__,sets,this$__$1))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,item_set));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,tailrecursion$priority_map$iter__38419.call(null,cljs.core.rest.call(null,s__38420__$1)));
} else {
var G__38447 = cljs.core.rest.call(null,s__38420__$1);
s__38420__$1 = G__38447;
continue;
}
} else {
return null;
}
break;
}
});})(sets,this$__$1))
,null,null));
});})(sets,this$__$1))
;
return iter__4523__auto__.call(null,sets);
})());
} else {
return cljs.core.seq.call(null,(function (){var iter__4523__auto__ = ((function (sets,this$__$1){
return (function tailrecursion$priority_map$iter__38428(s__38429){
return (new cljs.core.LazySeq(null,((function (sets,this$__$1){
return (function (){
var s__38429__$1 = s__38429;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__38429__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var vec__38434 = cljs.core.first.call(null,xs__6277__auto__);
var priority = cljs.core.nth.call(null,vec__38434,(0),null);
var item_set = cljs.core.nth.call(null,vec__38434,(1),null);
var iterys__4519__auto__ = ((function (s__38429__$1,vec__38434,priority,item_set,xs__6277__auto__,temp__5720__auto__,sets,this$__$1){
return (function tailrecursion$priority_map$iter__38428_$_iter__38430(s__38431){
return (new cljs.core.LazySeq(null,((function (s__38429__$1,vec__38434,priority,item_set,xs__6277__auto__,temp__5720__auto__,sets,this$__$1){
return (function (){
var s__38431__$1 = s__38431;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__38431__$1);
if(temp__5720__auto____$1){
var s__38431__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38431__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__38431__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__38433 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__38432 = (0);
while(true){
if((i__38432 < size__4522__auto__)){
var item = cljs.core._nth.call(null,c__4521__auto__,i__38432);
cljs.core.chunk_append.call(null,b__38433,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__38448 = (i__38432 + (1));
i__38432 = G__38448;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38433),tailrecursion$priority_map$iter__38428_$_iter__38430.call(null,cljs.core.chunk_rest.call(null,s__38431__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38433),null);
}
} else {
var item = cljs.core.first.call(null,s__38431__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__38428_$_iter__38430.call(null,cljs.core.rest.call(null,s__38431__$2)));
}
} else {
return null;
}
break;
}
});})(s__38429__$1,vec__38434,priority,item_set,xs__6277__auto__,temp__5720__auto__,sets,this$__$1))
,null,null));
});})(s__38429__$1,vec__38434,priority,item_set,xs__6277__auto__,temp__5720__auto__,sets,this$__$1))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,item_set));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,tailrecursion$priority_map$iter__38428.call(null,cljs.core.rest.call(null,s__38429__$1)));
} else {
var G__38449 = cljs.core.rest.call(null,s__38429__$1);
s__38429__$1 = G__38449;
continue;
}
} else {
return null;
}
break;
}
});})(sets,this$__$1))
,null,null));
});})(sets,this$__$1))
;
return iter__4523__auto__.call(null,sets);
})());
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (this$,entry){
var self__ = this;
var this$__$1 = this;
return self__.keyfn.call(null,cljs.core.val.call(null,entry));
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.compare;
});

tailrecursion.priority_map.PersistentPriorityMap.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"priority->set-of-items","priority->set-of-items",-1256537211,null),new cljs.core.Symbol(null,"item->priority","item->priority",-899999435,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null),new cljs.core.Symbol(null,"keyfn","keyfn",-1874375437,null),cljs.core.with_meta(new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

tailrecursion.priority_map.PersistentPriorityMap.cljs$lang$type = true;

tailrecursion.priority_map.PersistentPriorityMap.cljs$lang$ctorStr = "tailrecursion.priority-map/PersistentPriorityMap";

tailrecursion.priority_map.PersistentPriorityMap.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"tailrecursion.priority-map/PersistentPriorityMap");
});

/**
 * Positional factory function for tailrecursion.priority-map/PersistentPriorityMap.
 */
tailrecursion.priority_map.__GT_PersistentPriorityMap = (function tailrecursion$priority_map$__GT_PersistentPriorityMap(priority__GT_set_of_items,item__GT_priority,meta,keyfn,__hash){
return (new tailrecursion.priority_map.PersistentPriorityMap(priority__GT_set_of_items,item__GT_priority,meta,keyfn,__hash));
});

tailrecursion.priority_map.PersistentPriorityMap.EMPTY = (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map.call(null),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.identity,null));
tailrecursion.priority_map.pm_empty_by = (function tailrecursion$priority_map$pm_empty_by(comparator){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map_by.call(null,comparator),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.identity,null));
});
tailrecursion.priority_map.pm_empty_keyfn = (function tailrecursion$priority_map$pm_empty_keyfn(var_args){
var G__38451 = arguments.length;
switch (G__38451) {
case 1:
return tailrecursion.priority_map.pm_empty_keyfn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tailrecursion.priority_map.pm_empty_keyfn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

tailrecursion.priority_map.pm_empty_keyfn.cljs$core$IFn$_invoke$arity$1 = (function (keyfn){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map.call(null),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,keyfn,null));
});

tailrecursion.priority_map.pm_empty_keyfn.cljs$core$IFn$_invoke$arity$2 = (function (keyfn,comparator){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map_by.call(null,comparator),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,keyfn,null));
});

tailrecursion.priority_map.pm_empty_keyfn.cljs$lang$maxFixedArity = 2;

tailrecursion.priority_map.read_priority_map = (function tailrecursion$priority_map$read_priority_map(elems){
if(cljs.core.map_QMARK_.call(null,elems)){
return cljs.core.into.call(null,tailrecursion.priority_map.PersistentPriorityMap.EMPTY,elems);
} else {
throw Error("Priority map literal expects a map for its elements.");
}
});
cljs.reader.register_tag_parser_BANG_.call(null,"tailrecursion.priority-map",tailrecursion.priority_map.read_priority_map);
/**
 * keyval => key val
 *   Returns a new priority map with supplied mappings.
 */
tailrecursion.priority_map.priority_map = (function tailrecursion$priority_map$priority_map(var_args){
var args__4736__auto__ = [];
var len__4730__auto___38454 = arguments.length;
var i__4731__auto___38455 = (0);
while(true){
if((i__4731__auto___38455 < len__4730__auto___38454)){
args__4736__auto__.push((arguments[i__4731__auto___38455]));

var G__38456 = (i__4731__auto___38455 + (1));
i__4731__auto___38455 = G__38456;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic = (function (keyvals){
var in$ = cljs.core.seq.call(null,keyvals);
var out = tailrecursion.priority_map.PersistentPriorityMap.EMPTY;
while(true){
if(in$){
var G__38457 = cljs.core.nnext.call(null,in$);
var G__38458 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__38457;
out = G__38458;
continue;
} else {
return out;
}
break;
}
});

tailrecursion.priority_map.priority_map.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
tailrecursion.priority_map.priority_map.cljs$lang$applyTo = (function (seq38453){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38453));
});

/**
 * keyval => key val
 *   Returns a new priority map with supplied
 *   mappings, using the supplied comparator.
 */
tailrecursion.priority_map.priority_map_by = (function tailrecursion$priority_map$priority_map_by(var_args){
var args__4736__auto__ = [];
var len__4730__auto___38461 = arguments.length;
var i__4731__auto___38462 = (0);
while(true){
if((i__4731__auto___38462 < len__4730__auto___38461)){
args__4736__auto__.push((arguments[i__4731__auto___38462]));

var G__38463 = (i__4731__auto___38462 + (1));
i__4731__auto___38462 = G__38463;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return tailrecursion.priority_map.priority_map_by.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

tailrecursion.priority_map.priority_map_by.cljs$core$IFn$_invoke$arity$variadic = (function (comparator,keyvals){
var in$ = cljs.core.seq.call(null,keyvals);
var out = tailrecursion.priority_map.pm_empty_by.call(null,comparator);
while(true){
if(in$){
var G__38464 = cljs.core.nnext.call(null,in$);
var G__38465 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__38464;
out = G__38465;
continue;
} else {
return out;
}
break;
}
});

tailrecursion.priority_map.priority_map_by.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
tailrecursion.priority_map.priority_map_by.cljs$lang$applyTo = (function (seq38459){
var G__38460 = cljs.core.first.call(null,seq38459);
var seq38459__$1 = cljs.core.next.call(null,seq38459);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38460,seq38459__$1);
});

/**
 * keyval => key val
 *   Returns a new priority map with supplied
 *   mappings, using the supplied keyfn.
 */
tailrecursion.priority_map.priority_map_keyfn = (function tailrecursion$priority_map$priority_map_keyfn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___38468 = arguments.length;
var i__4731__auto___38469 = (0);
while(true){
if((i__4731__auto___38469 < len__4730__auto___38468)){
args__4736__auto__.push((arguments[i__4731__auto___38469]));

var G__38470 = (i__4731__auto___38469 + (1));
i__4731__auto___38469 = G__38470;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return tailrecursion.priority_map.priority_map_keyfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

tailrecursion.priority_map.priority_map_keyfn.cljs$core$IFn$_invoke$arity$variadic = (function (keyfn,keyvals){
var in$ = cljs.core.seq.call(null,keyvals);
var out = tailrecursion.priority_map.pm_empty_keyfn.call(null,keyfn);
while(true){
if(in$){
var G__38471 = cljs.core.nnext.call(null,in$);
var G__38472 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__38471;
out = G__38472;
continue;
} else {
return out;
}
break;
}
});

tailrecursion.priority_map.priority_map_keyfn.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
tailrecursion.priority_map.priority_map_keyfn.cljs$lang$applyTo = (function (seq38466){
var G__38467 = cljs.core.first.call(null,seq38466);
var seq38466__$1 = cljs.core.next.call(null,seq38466);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38467,seq38466__$1);
});

/**
 * keyval => key val
 *   Returns a new priority map with supplied
 *   mappings, using the supplied keyfn and comparator.
 */
tailrecursion.priority_map.priority_map_keyfn_by = (function tailrecursion$priority_map$priority_map_keyfn_by(var_args){
var args__4736__auto__ = [];
var len__4730__auto___38476 = arguments.length;
var i__4731__auto___38477 = (0);
while(true){
if((i__4731__auto___38477 < len__4730__auto___38476)){
args__4736__auto__.push((arguments[i__4731__auto___38477]));

var G__38478 = (i__4731__auto___38477 + (1));
i__4731__auto___38477 = G__38478;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return tailrecursion.priority_map.priority_map_keyfn_by.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

tailrecursion.priority_map.priority_map_keyfn_by.cljs$core$IFn$_invoke$arity$variadic = (function (keyfn,comparator,keyvals){
var in$ = cljs.core.seq.call(null,keyvals);
var out = tailrecursion.priority_map.pm_empty_keyfn.call(null,keyfn,comparator);
while(true){
if(in$){
var G__38479 = cljs.core.nnext.call(null,in$);
var G__38480 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__38479;
out = G__38480;
continue;
} else {
return out;
}
break;
}
});

tailrecursion.priority_map.priority_map_keyfn_by.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
tailrecursion.priority_map.priority_map_keyfn_by.cljs$lang$applyTo = (function (seq38473){
var G__38474 = cljs.core.first.call(null,seq38473);
var seq38473__$1 = cljs.core.next.call(null,seq38473);
var G__38475 = cljs.core.first.call(null,seq38473__$1);
var seq38473__$2 = cljs.core.next.call(null,seq38473__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38474,G__38475,seq38473__$2);
});


//# sourceMappingURL=priority_map.js.map
