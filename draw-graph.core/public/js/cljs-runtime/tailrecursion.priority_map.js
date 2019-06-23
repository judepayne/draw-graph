goog.provide('tailrecursion.priority_map');
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.item__GT_priority,item);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,item,not_found){
var self__ = this;
var coll__$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.item__GT_priority,item,not_found);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var self__ = this;
var coll__$1 = this;
var pr_pair = ((function (coll__$1){
return (function (keyval){
return cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,""," ","",opts,keyval);
});})(coll__$1))
;
return cljs.core.pr_sequential_writer(writer,pr_pair,"#tailrecursion.priority-map {",", ","}",opts,coll__$1);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.meta;
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.count(self__.item__GT_priority);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IStack$_peek$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count(self__.item__GT_priority) === (0))){
return null;
} else {
var f = cljs.core.first(self__.priority__GT_set_of_items);
var item = cljs.core.first(cljs.core.val(f));
if(cljs.core.truth_(self__.keyfn)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,(self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1 ? self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1(item) : self__.item__GT_priority.call(null,item))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,cljs.core.key(f)], null);
}
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IStack$_pop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count(self__.item__GT_priority) === (0))){
throw (new Error("Can't pop empty priority map"));
} else {
var f = cljs.core.first(self__.priority__GT_set_of_items);
var item_set = cljs.core.val(f);
var item = cljs.core.first(item_set);
var priority_key = cljs.core.key(f);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(item_set),(1))){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.priority__GT_set_of_items,priority_key),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.item__GT_priority,item),self__.meta,self__.keyfn,null));
} else {
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,priority_key,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(item_set,item)),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.item__GT_priority,item),self__.meta,self__.keyfn,null));
}
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
if(cljs.core.truth_(self__.keyfn)){
return cljs.core.seq((function (){var iter__4523__auto__ = ((function (coll__$1){
return (function tailrecursion$priority_map$iter__50066(s__50067){
return (new cljs.core.LazySeq(null,((function (coll__$1){
return (function (){
var s__50067__$1 = s__50067;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__50067__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var vec__50076 = cljs.core.first(xs__6277__auto__);
var priority = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50076,(0),null);
var item_set = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50076,(1),null);
var iterys__4519__auto__ = ((function (s__50067__$1,vec__50076,priority,item_set,xs__6277__auto__,temp__5720__auto__,coll__$1){
return (function tailrecursion$priority_map$iter__50066_$_iter__50068(s__50069){
return (new cljs.core.LazySeq(null,((function (s__50067__$1,vec__50076,priority,item_set,xs__6277__auto__,temp__5720__auto__,coll__$1){
return (function (){
var s__50069__$1 = s__50069;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__50069__$1);
if(temp__5720__auto____$1){
var s__50069__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__50069__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__50069__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__50071 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__50070 = (0);
while(true){
if((i__50070 < size__4522__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__50070);
cljs.core.chunk_append(b__50071,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,(self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1 ? self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1(item) : self__.item__GT_priority.call(null,item))], null));

var G__50170 = (i__50070 + (1));
i__50070 = G__50170;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50071),tailrecursion$priority_map$iter__50066_$_iter__50068(cljs.core.chunk_rest(s__50069__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50071),null);
}
} else {
var item = cljs.core.first(s__50069__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,(self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1 ? self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1(item) : self__.item__GT_priority.call(null,item))], null),tailrecursion$priority_map$iter__50066_$_iter__50068(cljs.core.rest(s__50069__$2)));
}
} else {
return null;
}
break;
}
});})(s__50067__$1,vec__50076,priority,item_set,xs__6277__auto__,temp__5720__auto__,coll__$1))
,null,null));
});})(s__50067__$1,vec__50076,priority,item_set,xs__6277__auto__,temp__5720__auto__,coll__$1))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(item_set));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,tailrecursion$priority_map$iter__50066(cljs.core.rest(s__50067__$1)));
} else {
var G__50178 = cljs.core.rest(s__50067__$1);
s__50067__$1 = G__50178;
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
return iter__4523__auto__(cljs.core.rseq(self__.priority__GT_set_of_items));
})());
} else {
return cljs.core.seq((function (){var iter__4523__auto__ = ((function (coll__$1){
return (function tailrecursion$priority_map$iter__50084(s__50085){
return (new cljs.core.LazySeq(null,((function (coll__$1){
return (function (){
var s__50085__$1 = s__50085;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__50085__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var vec__50091 = cljs.core.first(xs__6277__auto__);
var priority = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50091,(0),null);
var item_set = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50091,(1),null);
var iterys__4519__auto__ = ((function (s__50085__$1,vec__50091,priority,item_set,xs__6277__auto__,temp__5720__auto__,coll__$1){
return (function tailrecursion$priority_map$iter__50084_$_iter__50086(s__50087){
return (new cljs.core.LazySeq(null,((function (s__50085__$1,vec__50091,priority,item_set,xs__6277__auto__,temp__5720__auto__,coll__$1){
return (function (){
var s__50087__$1 = s__50087;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__50087__$1);
if(temp__5720__auto____$1){
var s__50087__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__50087__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__50087__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__50089 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__50088 = (0);
while(true){
if((i__50088 < size__4522__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__50088);
cljs.core.chunk_append(b__50089,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__50181 = (i__50088 + (1));
i__50088 = G__50181;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50089),tailrecursion$priority_map$iter__50084_$_iter__50086(cljs.core.chunk_rest(s__50087__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50089),null);
}
} else {
var item = cljs.core.first(s__50087__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__50084_$_iter__50086(cljs.core.rest(s__50087__$2)));
}
} else {
return null;
}
break;
}
});})(s__50085__$1,vec__50091,priority,item_set,xs__6277__auto__,temp__5720__auto__,coll__$1))
,null,null));
});})(s__50085__$1,vec__50091,priority,item_set,xs__6277__auto__,temp__5720__auto__,coll__$1))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(item_set));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,tailrecursion$priority_map$iter__50084(cljs.core.rest(s__50085__$1)));
} else {
var G__50184 = cljs.core.rest(s__50085__$1);
s__50085__$1 = G__50184;
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
return iter__4523__auto__(cljs.core.rseq(self__.priority__GT_set_of_items));
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
var h__4243__auto____$1 = cljs.core.hash_unordered_coll(this$__$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return cljs.core._equiv(self__.item__GT_priority,other);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.with_meta(tailrecursion.priority_map.PersistentPriorityMap.EMPTY,self__.meta);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this$,item){
var self__ = this;
var this$__$1 = this;
var priority = (function (){var G__50094 = item;
var G__50095 = new cljs.core.Keyword("tailrecursion.priority-map","not-found","tailrecursion.priority-map/not-found",-436727517);
return (self__.item__GT_priority.cljs$core$IFn$_invoke$arity$2 ? self__.item__GT_priority.cljs$core$IFn$_invoke$arity$2(G__50094,G__50095) : self__.item__GT_priority.call(null,G__50094,G__50095));
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(priority,new cljs.core.Keyword("tailrecursion.priority-map","not-found","tailrecursion.priority-map/not-found",-436727517))){
return this$__$1;
} else {
var priority_key = (self__.keyfn.cljs$core$IFn$_invoke$arity$1 ? self__.keyfn.cljs$core$IFn$_invoke$arity$1(priority) : self__.keyfn.call(null,priority));
var item_set = (self__.priority__GT_set_of_items.cljs$core$IFn$_invoke$arity$1 ? self__.priority__GT_set_of_items.cljs$core$IFn$_invoke$arity$1(priority_key) : self__.priority__GT_set_of_items.call(null,priority_key));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(item_set),(1))){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.priority__GT_set_of_items,priority_key),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.item__GT_priority,item),self__.meta,self__.keyfn,null));
} else {
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,priority_key,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(item_set,item)),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.item__GT_priority,item),self__.meta,self__.keyfn,null));
}
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,item,priority){
var self__ = this;
var this$__$1 = this;
var temp__5718__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.item__GT_priority,item,null);
if(cljs.core.truth_(temp__5718__auto__)){
var current_priority = temp__5718__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_priority,priority)){
return this$__$1;
} else {
var priority_key = (self__.keyfn.cljs$core$IFn$_invoke$arity$1 ? self__.keyfn.cljs$core$IFn$_invoke$arity$1(priority) : self__.keyfn.call(null,priority));
var current_priority_key = (self__.keyfn.cljs$core$IFn$_invoke$arity$1 ? self__.keyfn.cljs$core$IFn$_invoke$arity$1(current_priority) : self__.keyfn.call(null,current_priority));
var item_set = cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.priority__GT_set_of_items,current_priority_key);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(item_set),(1))){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.priority__GT_set_of_items,current_priority_key),priority_key,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,priority_key,cljs.core.PersistentHashSet.EMPTY),item)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.item__GT_priority,item,priority),self__.meta,self__.keyfn,null));
} else {
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(self__.priority__GT_set_of_items,current_priority_key,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.priority__GT_set_of_items,current_priority_key),item),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([priority_key,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,priority_key,cljs.core.PersistentHashSet.EMPTY),item)], 0)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.item__GT_priority,item,priority),self__.meta,self__.keyfn,null));
}
}
} else {
var priority_key = (self__.keyfn.cljs$core$IFn$_invoke$arity$1 ? self__.keyfn.cljs$core$IFn$_invoke$arity$1(priority) : self__.keyfn.call(null,priority));
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,priority_key,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,priority_key,cljs.core.PersistentHashSet.EMPTY),item)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.item__GT_priority,item,priority),self__.meta,self__.keyfn,null));
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this$,item){
var self__ = this;
var this$__$1 = this;
return cljs.core.contains_QMARK_(self__.item__GT_priority,item);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.keyfn)){
return cljs.core.seq((function (){var iter__4523__auto__ = ((function (this$__$1){
return (function tailrecursion$priority_map$iter__50098(s__50099){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__50099__$1 = s__50099;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__50099__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var vec__50104 = cljs.core.first(xs__6277__auto__);
var priority = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50104,(0),null);
var item_set = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50104,(1),null);
var iterys__4519__auto__ = ((function (s__50099__$1,vec__50104,priority,item_set,xs__6277__auto__,temp__5720__auto__,this$__$1){
return (function tailrecursion$priority_map$iter__50098_$_iter__50100(s__50101){
return (new cljs.core.LazySeq(null,((function (s__50099__$1,vec__50104,priority,item_set,xs__6277__auto__,temp__5720__auto__,this$__$1){
return (function (){
var s__50101__$1 = s__50101;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__50101__$1);
if(temp__5720__auto____$1){
var s__50101__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__50101__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__50101__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__50103 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__50102 = (0);
while(true){
if((i__50102 < size__4522__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__50102);
cljs.core.chunk_append(b__50103,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,(self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1 ? self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1(item) : self__.item__GT_priority.call(null,item))], null));

var G__50208 = (i__50102 + (1));
i__50102 = G__50208;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50103),tailrecursion$priority_map$iter__50098_$_iter__50100(cljs.core.chunk_rest(s__50101__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50103),null);
}
} else {
var item = cljs.core.first(s__50101__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,(self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1 ? self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1(item) : self__.item__GT_priority.call(null,item))], null),tailrecursion$priority_map$iter__50098_$_iter__50100(cljs.core.rest(s__50101__$2)));
}
} else {
return null;
}
break;
}
});})(s__50099__$1,vec__50104,priority,item_set,xs__6277__auto__,temp__5720__auto__,this$__$1))
,null,null));
});})(s__50099__$1,vec__50104,priority,item_set,xs__6277__auto__,temp__5720__auto__,this$__$1))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(item_set));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,tailrecursion$priority_map$iter__50098(cljs.core.rest(s__50099__$1)));
} else {
var G__50212 = cljs.core.rest(s__50099__$1);
s__50099__$1 = G__50212;
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
return iter__4523__auto__(self__.priority__GT_set_of_items);
})());
} else {
return cljs.core.seq((function (){var iter__4523__auto__ = ((function (this$__$1){
return (function tailrecursion$priority_map$iter__50110(s__50111){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__50111__$1 = s__50111;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__50111__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var vec__50116 = cljs.core.first(xs__6277__auto__);
var priority = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50116,(0),null);
var item_set = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50116,(1),null);
var iterys__4519__auto__ = ((function (s__50111__$1,vec__50116,priority,item_set,xs__6277__auto__,temp__5720__auto__,this$__$1){
return (function tailrecursion$priority_map$iter__50110_$_iter__50112(s__50113){
return (new cljs.core.LazySeq(null,((function (s__50111__$1,vec__50116,priority,item_set,xs__6277__auto__,temp__5720__auto__,this$__$1){
return (function (){
var s__50113__$1 = s__50113;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__50113__$1);
if(temp__5720__auto____$1){
var s__50113__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__50113__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__50113__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__50115 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__50114 = (0);
while(true){
if((i__50114 < size__4522__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__50114);
cljs.core.chunk_append(b__50115,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__50220 = (i__50114 + (1));
i__50114 = G__50220;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50115),tailrecursion$priority_map$iter__50110_$_iter__50112(cljs.core.chunk_rest(s__50113__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50115),null);
}
} else {
var item = cljs.core.first(s__50113__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__50110_$_iter__50112(cljs.core.rest(s__50113__$2)));
}
} else {
return null;
}
break;
}
});})(s__50111__$1,vec__50116,priority,item_set,xs__6277__auto__,temp__5720__auto__,this$__$1))
,null,null));
});})(s__50111__$1,vec__50116,priority,item_set,xs__6277__auto__,temp__5720__auto__,this$__$1))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(item_set));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,tailrecursion$priority_map$iter__50110(cljs.core.rest(s__50111__$1)));
} else {
var G__50224 = cljs.core.rest(s__50111__$1);
s__50111__$1 = G__50224;
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
return iter__4523__auto__(self__.priority__GT_set_of_items);
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
if(cljs.core.vector_QMARK_(entry)){
return this$__$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this$__$1,entry);
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.call = (function() {
var G__50226 = null;
var G__50226__2 = (function (self__,item){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$ILookup$_lookup$arity$2(null,item);
});
var G__50226__3 = (function (self__,item,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$ILookup$_lookup$arity$3(null,item,not_found);
});
G__50226 = function(self__,item,not_found){
switch(arguments.length){
case 2:
return G__50226__2.call(this,self__,item);
case 3:
return G__50226__3.call(this,self__,item,not_found);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__50226.cljs$core$IFn$_invoke$arity$2 = G__50226__2;
G__50226.cljs$core$IFn$_invoke$arity$3 = G__50226__3;
return G__50226;
})()
;

tailrecursion.priority_map.PersistentPriorityMap.prototype.apply = (function (self__,args50059){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args50059)));
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (item){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$2(null,item);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (item,not_found){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$3(null,item,not_found);
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (this$,ascending_QMARK_){
var self__ = this;
var this$__$1 = this;
var fexpr__50130 = (cljs.core.truth_(ascending_QMARK_)?cljs.core.seq:cljs.core.rseq);
return (fexpr__50130.cljs$core$IFn$_invoke$arity$1 ? fexpr__50130.cljs$core$IFn$_invoke$arity$1(this$__$1) : fexpr__50130.call(null,this$__$1));
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (this$,k,ascending_QMARK_){
var self__ = this;
var this$__$1 = this;
var sets = (cljs.core.truth_(ascending_QMARK_)?cljs.core.subseq.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,cljs.core._GT__EQ_,k):cljs.core.rsubseq.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,cljs.core._LT__EQ_,k));
if(cljs.core.truth_(self__.keyfn)){
return cljs.core.seq((function (){var iter__4523__auto__ = ((function (sets,this$__$1){
return (function tailrecursion$priority_map$iter__50131(s__50132){
return (new cljs.core.LazySeq(null,((function (sets,this$__$1){
return (function (){
var s__50132__$1 = s__50132;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__50132__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var vec__50137 = cljs.core.first(xs__6277__auto__);
var priority = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50137,(0),null);
var item_set = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50137,(1),null);
var iterys__4519__auto__ = ((function (s__50132__$1,vec__50137,priority,item_set,xs__6277__auto__,temp__5720__auto__,sets,this$__$1){
return (function tailrecursion$priority_map$iter__50131_$_iter__50133(s__50134){
return (new cljs.core.LazySeq(null,((function (s__50132__$1,vec__50137,priority,item_set,xs__6277__auto__,temp__5720__auto__,sets,this$__$1){
return (function (){
var s__50134__$1 = s__50134;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__50134__$1);
if(temp__5720__auto____$1){
var s__50134__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__50134__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__50134__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__50136 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__50135 = (0);
while(true){
if((i__50135 < size__4522__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__50135);
cljs.core.chunk_append(b__50136,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,(self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1 ? self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1(item) : self__.item__GT_priority.call(null,item))], null));

var G__50243 = (i__50135 + (1));
i__50135 = G__50243;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50136),tailrecursion$priority_map$iter__50131_$_iter__50133(cljs.core.chunk_rest(s__50134__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50136),null);
}
} else {
var item = cljs.core.first(s__50134__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,(self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1 ? self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1(item) : self__.item__GT_priority.call(null,item))], null),tailrecursion$priority_map$iter__50131_$_iter__50133(cljs.core.rest(s__50134__$2)));
}
} else {
return null;
}
break;
}
});})(s__50132__$1,vec__50137,priority,item_set,xs__6277__auto__,temp__5720__auto__,sets,this$__$1))
,null,null));
});})(s__50132__$1,vec__50137,priority,item_set,xs__6277__auto__,temp__5720__auto__,sets,this$__$1))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(item_set));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,tailrecursion$priority_map$iter__50131(cljs.core.rest(s__50132__$1)));
} else {
var G__50244 = cljs.core.rest(s__50132__$1);
s__50132__$1 = G__50244;
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
return iter__4523__auto__(sets);
})());
} else {
return cljs.core.seq((function (){var iter__4523__auto__ = ((function (sets,this$__$1){
return (function tailrecursion$priority_map$iter__50140(s__50141){
return (new cljs.core.LazySeq(null,((function (sets,this$__$1){
return (function (){
var s__50141__$1 = s__50141;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__50141__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var vec__50146 = cljs.core.first(xs__6277__auto__);
var priority = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50146,(0),null);
var item_set = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50146,(1),null);
var iterys__4519__auto__ = ((function (s__50141__$1,vec__50146,priority,item_set,xs__6277__auto__,temp__5720__auto__,sets,this$__$1){
return (function tailrecursion$priority_map$iter__50140_$_iter__50142(s__50143){
return (new cljs.core.LazySeq(null,((function (s__50141__$1,vec__50146,priority,item_set,xs__6277__auto__,temp__5720__auto__,sets,this$__$1){
return (function (){
var s__50143__$1 = s__50143;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__50143__$1);
if(temp__5720__auto____$1){
var s__50143__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__50143__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__50143__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__50145 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__50144 = (0);
while(true){
if((i__50144 < size__4522__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__50144);
cljs.core.chunk_append(b__50145,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__50251 = (i__50144 + (1));
i__50144 = G__50251;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50145),tailrecursion$priority_map$iter__50140_$_iter__50142(cljs.core.chunk_rest(s__50143__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50145),null);
}
} else {
var item = cljs.core.first(s__50143__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__50140_$_iter__50142(cljs.core.rest(s__50143__$2)));
}
} else {
return null;
}
break;
}
});})(s__50141__$1,vec__50146,priority,item_set,xs__6277__auto__,temp__5720__auto__,sets,this$__$1))
,null,null));
});})(s__50141__$1,vec__50146,priority,item_set,xs__6277__auto__,temp__5720__auto__,sets,this$__$1))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(item_set));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,tailrecursion$priority_map$iter__50140(cljs.core.rest(s__50141__$1)));
} else {
var G__50253 = cljs.core.rest(s__50141__$1);
s__50141__$1 = G__50253;
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
return iter__4523__auto__(sets);
})());
}
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (this$,entry){
var self__ = this;
var this$__$1 = this;
var G__50149 = cljs.core.val(entry);
return (self__.keyfn.cljs$core$IFn$_invoke$arity$1 ? self__.keyfn.cljs$core$IFn$_invoke$arity$1(G__50149) : self__.keyfn.call(null,G__50149));
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
return cljs.core._write(writer__4375__auto__,"tailrecursion.priority-map/PersistentPriorityMap");
});

/**
 * Positional factory function for tailrecursion.priority-map/PersistentPriorityMap.
 */
tailrecursion.priority_map.__GT_PersistentPriorityMap = (function tailrecursion$priority_map$__GT_PersistentPriorityMap(priority__GT_set_of_items,item__GT_priority,meta,keyfn,__hash){
return (new tailrecursion.priority_map.PersistentPriorityMap(priority__GT_set_of_items,item__GT_priority,meta,keyfn,__hash));
});

tailrecursion.priority_map.PersistentPriorityMap.EMPTY = (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map(),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.identity,null));
tailrecursion.priority_map.pm_empty_by = (function tailrecursion$priority_map$pm_empty_by(comparator){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map_by(comparator),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.identity,null));
});
tailrecursion.priority_map.pm_empty_keyfn = (function tailrecursion$priority_map$pm_empty_keyfn(var_args){
var G__50151 = arguments.length;
switch (G__50151) {
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
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map(),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,keyfn,null));
});

tailrecursion.priority_map.pm_empty_keyfn.cljs$core$IFn$_invoke$arity$2 = (function (keyfn,comparator){
return (new tailrecursion.priority_map.PersistentPriorityMap(cljs.core.sorted_map_by(comparator),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,keyfn,null));
});

tailrecursion.priority_map.pm_empty_keyfn.cljs$lang$maxFixedArity = 2;

tailrecursion.priority_map.read_priority_map = (function tailrecursion$priority_map$read_priority_map(elems){
if(cljs.core.map_QMARK_(elems)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(tailrecursion.priority_map.PersistentPriorityMap.EMPTY,elems);
} else {
throw Error("Priority map literal expects a map for its elements.");
}
});
cljs.reader.register_tag_parser_BANG_("tailrecursion.priority-map",tailrecursion.priority_map.read_priority_map);
/**
 * keyval => key val
 *   Returns a new priority map with supplied mappings.
 */
tailrecursion.priority_map.priority_map = (function tailrecursion$priority_map$priority_map(var_args){
var args__4736__auto__ = [];
var len__4730__auto___50260 = arguments.length;
var i__4731__auto___50261 = (0);
while(true){
if((i__4731__auto___50261 < len__4730__auto___50260)){
args__4736__auto__.push((arguments[i__4731__auto___50261]));

var G__50262 = (i__4731__auto___50261 + (1));
i__4731__auto___50261 = G__50262;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic = (function (keyvals){
var in$ = cljs.core.seq(keyvals);
var out = tailrecursion.priority_map.PersistentPriorityMap.EMPTY;
while(true){
if(in$){
var G__50264 = cljs.core.nnext(in$);
var G__50265 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__50264;
out = G__50265;
continue;
} else {
return out;
}
break;
}
});

tailrecursion.priority_map.priority_map.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
tailrecursion.priority_map.priority_map.cljs$lang$applyTo = (function (seq50156){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq50156));
});

/**
 * keyval => key val
 *   Returns a new priority map with supplied
 *   mappings, using the supplied comparator.
 */
tailrecursion.priority_map.priority_map_by = (function tailrecursion$priority_map$priority_map_by(var_args){
var args__4736__auto__ = [];
var len__4730__auto___50270 = arguments.length;
var i__4731__auto___50271 = (0);
while(true){
if((i__4731__auto___50271 < len__4730__auto___50270)){
args__4736__auto__.push((arguments[i__4731__auto___50271]));

var G__50272 = (i__4731__auto___50271 + (1));
i__4731__auto___50271 = G__50272;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return tailrecursion.priority_map.priority_map_by.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

tailrecursion.priority_map.priority_map_by.cljs$core$IFn$_invoke$arity$variadic = (function (comparator,keyvals){
var in$ = cljs.core.seq(keyvals);
var out = tailrecursion.priority_map.pm_empty_by(comparator);
while(true){
if(in$){
var G__50273 = cljs.core.nnext(in$);
var G__50274 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__50273;
out = G__50274;
continue;
} else {
return out;
}
break;
}
});

tailrecursion.priority_map.priority_map_by.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
tailrecursion.priority_map.priority_map_by.cljs$lang$applyTo = (function (seq50159){
var G__50160 = cljs.core.first(seq50159);
var seq50159__$1 = cljs.core.next(seq50159);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50160,seq50159__$1);
});

/**
 * keyval => key val
 *   Returns a new priority map with supplied
 *   mappings, using the supplied keyfn.
 */
tailrecursion.priority_map.priority_map_keyfn = (function tailrecursion$priority_map$priority_map_keyfn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___50275 = arguments.length;
var i__4731__auto___50276 = (0);
while(true){
if((i__4731__auto___50276 < len__4730__auto___50275)){
args__4736__auto__.push((arguments[i__4731__auto___50276]));

var G__50277 = (i__4731__auto___50276 + (1));
i__4731__auto___50276 = G__50277;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return tailrecursion.priority_map.priority_map_keyfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

tailrecursion.priority_map.priority_map_keyfn.cljs$core$IFn$_invoke$arity$variadic = (function (keyfn,keyvals){
var in$ = cljs.core.seq(keyvals);
var out = tailrecursion.priority_map.pm_empty_keyfn.cljs$core$IFn$_invoke$arity$1(keyfn);
while(true){
if(in$){
var G__50278 = cljs.core.nnext(in$);
var G__50279 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__50278;
out = G__50279;
continue;
} else {
return out;
}
break;
}
});

tailrecursion.priority_map.priority_map_keyfn.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
tailrecursion.priority_map.priority_map_keyfn.cljs$lang$applyTo = (function (seq50163){
var G__50164 = cljs.core.first(seq50163);
var seq50163__$1 = cljs.core.next(seq50163);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50164,seq50163__$1);
});

/**
 * keyval => key val
 *   Returns a new priority map with supplied
 *   mappings, using the supplied keyfn and comparator.
 */
tailrecursion.priority_map.priority_map_keyfn_by = (function tailrecursion$priority_map$priority_map_keyfn_by(var_args){
var args__4736__auto__ = [];
var len__4730__auto___50281 = arguments.length;
var i__4731__auto___50285 = (0);
while(true){
if((i__4731__auto___50285 < len__4730__auto___50281)){
args__4736__auto__.push((arguments[i__4731__auto___50285]));

var G__50286 = (i__4731__auto___50285 + (1));
i__4731__auto___50285 = G__50286;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return tailrecursion.priority_map.priority_map_keyfn_by.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

tailrecursion.priority_map.priority_map_keyfn_by.cljs$core$IFn$_invoke$arity$variadic = (function (keyfn,comparator,keyvals){
var in$ = cljs.core.seq(keyvals);
var out = tailrecursion.priority_map.pm_empty_keyfn.cljs$core$IFn$_invoke$arity$2(keyfn,comparator);
while(true){
if(in$){
var G__50287 = cljs.core.nnext(in$);
var G__50288 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__50287;
out = G__50288;
continue;
} else {
return out;
}
break;
}
});

tailrecursion.priority_map.priority_map_keyfn_by.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
tailrecursion.priority_map.priority_map_keyfn_by.cljs$lang$applyTo = (function (seq50166){
var G__50167 = cljs.core.first(seq50166);
var seq50166__$1 = cljs.core.next(seq50166);
var G__50168 = cljs.core.first(seq50166__$1);
var seq50166__$2 = cljs.core.next(seq50166__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50167,G__50168,seq50166__$2);
});


//# sourceMappingURL=tailrecursion.priority_map.js.map
