// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('tailrecursion.priority_map');
goog.require('cljs.core');
goog.require('cljs.core.constants');
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
return (function tailrecursion$priority_map$iter__42179(s__42180){
return (new cljs.core.LazySeq(null,((function (coll__$1){
return (function (){
var s__42180__$1 = s__42180;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__42180__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var vec__42185 = cljs.core.first(xs__6277__auto__);
var priority = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42185,(0),null);
var item_set = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42185,(1),null);
var iterys__4519__auto__ = ((function (s__42180__$1,vec__42185,priority,item_set,xs__6277__auto__,temp__5720__auto__,coll__$1){
return (function tailrecursion$priority_map$iter__42179_$_iter__42181(s__42182){
return (new cljs.core.LazySeq(null,((function (s__42180__$1,vec__42185,priority,item_set,xs__6277__auto__,temp__5720__auto__,coll__$1){
return (function (){
var s__42182__$1 = s__42182;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__42182__$1);
if(temp__5720__auto____$1){
var s__42182__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__42182__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__42182__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__42184 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__42183 = (0);
while(true){
if((i__42183 < size__4522__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__42183);
cljs.core.chunk_append(b__42184,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,(self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1 ? self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1(item) : self__.item__GT_priority.call(null,item))], null));

var G__42237 = (i__42183 + (1));
i__42183 = G__42237;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42184),tailrecursion$priority_map$iter__42179_$_iter__42181(cljs.core.chunk_rest(s__42182__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42184),null);
}
} else {
var item = cljs.core.first(s__42182__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,(self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1 ? self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1(item) : self__.item__GT_priority.call(null,item))], null),tailrecursion$priority_map$iter__42179_$_iter__42181(cljs.core.rest(s__42182__$2)));
}
} else {
return null;
}
break;
}
});})(s__42180__$1,vec__42185,priority,item_set,xs__6277__auto__,temp__5720__auto__,coll__$1))
,null,null));
});})(s__42180__$1,vec__42185,priority,item_set,xs__6277__auto__,temp__5720__auto__,coll__$1))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(item_set));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,tailrecursion$priority_map$iter__42179(cljs.core.rest(s__42180__$1)));
} else {
var G__42238 = cljs.core.rest(s__42180__$1);
s__42180__$1 = G__42238;
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
return (function tailrecursion$priority_map$iter__42188(s__42189){
return (new cljs.core.LazySeq(null,((function (coll__$1){
return (function (){
var s__42189__$1 = s__42189;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__42189__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var vec__42194 = cljs.core.first(xs__6277__auto__);
var priority = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42194,(0),null);
var item_set = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42194,(1),null);
var iterys__4519__auto__ = ((function (s__42189__$1,vec__42194,priority,item_set,xs__6277__auto__,temp__5720__auto__,coll__$1){
return (function tailrecursion$priority_map$iter__42188_$_iter__42190(s__42191){
return (new cljs.core.LazySeq(null,((function (s__42189__$1,vec__42194,priority,item_set,xs__6277__auto__,temp__5720__auto__,coll__$1){
return (function (){
var s__42191__$1 = s__42191;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__42191__$1);
if(temp__5720__auto____$1){
var s__42191__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__42191__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__42191__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__42193 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__42192 = (0);
while(true){
if((i__42192 < size__4522__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__42192);
cljs.core.chunk_append(b__42193,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__42239 = (i__42192 + (1));
i__42192 = G__42239;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42193),tailrecursion$priority_map$iter__42188_$_iter__42190(cljs.core.chunk_rest(s__42191__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42193),null);
}
} else {
var item = cljs.core.first(s__42191__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__42188_$_iter__42190(cljs.core.rest(s__42191__$2)));
}
} else {
return null;
}
break;
}
});})(s__42189__$1,vec__42194,priority,item_set,xs__6277__auto__,temp__5720__auto__,coll__$1))
,null,null));
});})(s__42189__$1,vec__42194,priority,item_set,xs__6277__auto__,temp__5720__auto__,coll__$1))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(item_set));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,tailrecursion$priority_map$iter__42188(cljs.core.rest(s__42189__$1)));
} else {
var G__42240 = cljs.core.rest(s__42189__$1);
s__42189__$1 = G__42240;
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
var priority = (function (){var G__42197 = item;
var G__42198 = cljs.core.cst$kw$tailrecursion$priority_DASH_map_SLASH_not_DASH_found;
return (self__.item__GT_priority.cljs$core$IFn$_invoke$arity$2 ? self__.item__GT_priority.cljs$core$IFn$_invoke$arity$2(G__42197,G__42198) : self__.item__GT_priority.call(null,G__42197,G__42198));
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(priority,cljs.core.cst$kw$tailrecursion$priority_DASH_map_SLASH_not_DASH_found)){
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
return (function tailrecursion$priority_map$iter__42199(s__42200){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__42200__$1 = s__42200;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__42200__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var vec__42205 = cljs.core.first(xs__6277__auto__);
var priority = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42205,(0),null);
var item_set = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42205,(1),null);
var iterys__4519__auto__ = ((function (s__42200__$1,vec__42205,priority,item_set,xs__6277__auto__,temp__5720__auto__,this$__$1){
return (function tailrecursion$priority_map$iter__42199_$_iter__42201(s__42202){
return (new cljs.core.LazySeq(null,((function (s__42200__$1,vec__42205,priority,item_set,xs__6277__auto__,temp__5720__auto__,this$__$1){
return (function (){
var s__42202__$1 = s__42202;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__42202__$1);
if(temp__5720__auto____$1){
var s__42202__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__42202__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__42202__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__42204 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__42203 = (0);
while(true){
if((i__42203 < size__4522__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__42203);
cljs.core.chunk_append(b__42204,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,(self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1 ? self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1(item) : self__.item__GT_priority.call(null,item))], null));

var G__42241 = (i__42203 + (1));
i__42203 = G__42241;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42204),tailrecursion$priority_map$iter__42199_$_iter__42201(cljs.core.chunk_rest(s__42202__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42204),null);
}
} else {
var item = cljs.core.first(s__42202__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,(self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1 ? self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1(item) : self__.item__GT_priority.call(null,item))], null),tailrecursion$priority_map$iter__42199_$_iter__42201(cljs.core.rest(s__42202__$2)));
}
} else {
return null;
}
break;
}
});})(s__42200__$1,vec__42205,priority,item_set,xs__6277__auto__,temp__5720__auto__,this$__$1))
,null,null));
});})(s__42200__$1,vec__42205,priority,item_set,xs__6277__auto__,temp__5720__auto__,this$__$1))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(item_set));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,tailrecursion$priority_map$iter__42199(cljs.core.rest(s__42200__$1)));
} else {
var G__42242 = cljs.core.rest(s__42200__$1);
s__42200__$1 = G__42242;
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
return (function tailrecursion$priority_map$iter__42208(s__42209){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__42209__$1 = s__42209;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__42209__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var vec__42214 = cljs.core.first(xs__6277__auto__);
var priority = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42214,(0),null);
var item_set = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42214,(1),null);
var iterys__4519__auto__ = ((function (s__42209__$1,vec__42214,priority,item_set,xs__6277__auto__,temp__5720__auto__,this$__$1){
return (function tailrecursion$priority_map$iter__42208_$_iter__42210(s__42211){
return (new cljs.core.LazySeq(null,((function (s__42209__$1,vec__42214,priority,item_set,xs__6277__auto__,temp__5720__auto__,this$__$1){
return (function (){
var s__42211__$1 = s__42211;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__42211__$1);
if(temp__5720__auto____$1){
var s__42211__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__42211__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__42211__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__42213 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__42212 = (0);
while(true){
if((i__42212 < size__4522__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__42212);
cljs.core.chunk_append(b__42213,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__42243 = (i__42212 + (1));
i__42212 = G__42243;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42213),tailrecursion$priority_map$iter__42208_$_iter__42210(cljs.core.chunk_rest(s__42211__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42213),null);
}
} else {
var item = cljs.core.first(s__42211__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__42208_$_iter__42210(cljs.core.rest(s__42211__$2)));
}
} else {
return null;
}
break;
}
});})(s__42209__$1,vec__42214,priority,item_set,xs__6277__auto__,temp__5720__auto__,this$__$1))
,null,null));
});})(s__42209__$1,vec__42214,priority,item_set,xs__6277__auto__,temp__5720__auto__,this$__$1))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(item_set));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,tailrecursion$priority_map$iter__42208(cljs.core.rest(s__42209__$1)));
} else {
var G__42244 = cljs.core.rest(s__42209__$1);
s__42209__$1 = G__42244;
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
var G__42245 = null;
var G__42245__2 = (function (self__,item){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$ILookup$_lookup$arity$2(null,item);
});
var G__42245__3 = (function (self__,item,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$ILookup$_lookup$arity$3(null,item,not_found);
});
G__42245 = function(self__,item,not_found){
switch(arguments.length){
case 2:
return G__42245__2.call(this,self__,item);
case 3:
return G__42245__3.call(this,self__,item,not_found);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__42245.cljs$core$IFn$_invoke$arity$2 = G__42245__2;
G__42245.cljs$core$IFn$_invoke$arity$3 = G__42245__3;
return G__42245;
})()
;

tailrecursion.priority_map.PersistentPriorityMap.prototype.apply = (function (self__,args42178){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args42178)));
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
var fexpr__42217 = (cljs.core.truth_(ascending_QMARK_)?cljs.core.seq:cljs.core.rseq);
return (fexpr__42217.cljs$core$IFn$_invoke$arity$1 ? fexpr__42217.cljs$core$IFn$_invoke$arity$1(this$__$1) : fexpr__42217.call(null,this$__$1));
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (this$,k,ascending_QMARK_){
var self__ = this;
var this$__$1 = this;
var sets = (cljs.core.truth_(ascending_QMARK_)?cljs.core.subseq.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,cljs.core._GT__EQ_,k):cljs.core.rsubseq.cljs$core$IFn$_invoke$arity$3(self__.priority__GT_set_of_items,cljs.core._LT__EQ_,k));
if(cljs.core.truth_(self__.keyfn)){
return cljs.core.seq((function (){var iter__4523__auto__ = ((function (sets,this$__$1){
return (function tailrecursion$priority_map$iter__42218(s__42219){
return (new cljs.core.LazySeq(null,((function (sets,this$__$1){
return (function (){
var s__42219__$1 = s__42219;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__42219__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var vec__42224 = cljs.core.first(xs__6277__auto__);
var priority = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42224,(0),null);
var item_set = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42224,(1),null);
var iterys__4519__auto__ = ((function (s__42219__$1,vec__42224,priority,item_set,xs__6277__auto__,temp__5720__auto__,sets,this$__$1){
return (function tailrecursion$priority_map$iter__42218_$_iter__42220(s__42221){
return (new cljs.core.LazySeq(null,((function (s__42219__$1,vec__42224,priority,item_set,xs__6277__auto__,temp__5720__auto__,sets,this$__$1){
return (function (){
var s__42221__$1 = s__42221;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__42221__$1);
if(temp__5720__auto____$1){
var s__42221__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__42221__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__42221__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__42223 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__42222 = (0);
while(true){
if((i__42222 < size__4522__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__42222);
cljs.core.chunk_append(b__42223,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,(self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1 ? self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1(item) : self__.item__GT_priority.call(null,item))], null));

var G__42246 = (i__42222 + (1));
i__42222 = G__42246;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42223),tailrecursion$priority_map$iter__42218_$_iter__42220(cljs.core.chunk_rest(s__42221__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42223),null);
}
} else {
var item = cljs.core.first(s__42221__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,(self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1 ? self__.item__GT_priority.cljs$core$IFn$_invoke$arity$1(item) : self__.item__GT_priority.call(null,item))], null),tailrecursion$priority_map$iter__42218_$_iter__42220(cljs.core.rest(s__42221__$2)));
}
} else {
return null;
}
break;
}
});})(s__42219__$1,vec__42224,priority,item_set,xs__6277__auto__,temp__5720__auto__,sets,this$__$1))
,null,null));
});})(s__42219__$1,vec__42224,priority,item_set,xs__6277__auto__,temp__5720__auto__,sets,this$__$1))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(item_set));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,tailrecursion$priority_map$iter__42218(cljs.core.rest(s__42219__$1)));
} else {
var G__42247 = cljs.core.rest(s__42219__$1);
s__42219__$1 = G__42247;
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
return (function tailrecursion$priority_map$iter__42227(s__42228){
return (new cljs.core.LazySeq(null,((function (sets,this$__$1){
return (function (){
var s__42228__$1 = s__42228;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__42228__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var vec__42233 = cljs.core.first(xs__6277__auto__);
var priority = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42233,(0),null);
var item_set = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42233,(1),null);
var iterys__4519__auto__ = ((function (s__42228__$1,vec__42233,priority,item_set,xs__6277__auto__,temp__5720__auto__,sets,this$__$1){
return (function tailrecursion$priority_map$iter__42227_$_iter__42229(s__42230){
return (new cljs.core.LazySeq(null,((function (s__42228__$1,vec__42233,priority,item_set,xs__6277__auto__,temp__5720__auto__,sets,this$__$1){
return (function (){
var s__42230__$1 = s__42230;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__42230__$1);
if(temp__5720__auto____$1){
var s__42230__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__42230__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__42230__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__42232 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__42231 = (0);
while(true){
if((i__42231 < size__4522__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__42231);
cljs.core.chunk_append(b__42232,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null));

var G__42248 = (i__42231 + (1));
i__42231 = G__42248;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42232),tailrecursion$priority_map$iter__42227_$_iter__42229(cljs.core.chunk_rest(s__42230__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42232),null);
}
} else {
var item = cljs.core.first(s__42230__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,priority], null),tailrecursion$priority_map$iter__42227_$_iter__42229(cljs.core.rest(s__42230__$2)));
}
} else {
return null;
}
break;
}
});})(s__42228__$1,vec__42233,priority,item_set,xs__6277__auto__,temp__5720__auto__,sets,this$__$1))
,null,null));
});})(s__42228__$1,vec__42233,priority,item_set,xs__6277__auto__,temp__5720__auto__,sets,this$__$1))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(item_set));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,tailrecursion$priority_map$iter__42227(cljs.core.rest(s__42228__$1)));
} else {
var G__42249 = cljs.core.rest(s__42228__$1);
s__42228__$1 = G__42249;
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
var G__42236 = cljs.core.val(entry);
return (self__.keyfn.cljs$core$IFn$_invoke$arity$1 ? self__.keyfn.cljs$core$IFn$_invoke$arity$1(G__42236) : self__.keyfn.call(null,G__42236));
});

tailrecursion.priority_map.PersistentPriorityMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.compare;
});

tailrecursion.priority_map.PersistentPriorityMap.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$priority_DASH__GT_set_DASH_of_DASH_items,cljs.core.cst$sym$item_DASH__GT_priority,cljs.core.cst$sym$meta,cljs.core.cst$sym$keyfn,cljs.core.with_meta(cljs.core.cst$sym$__hash,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null))], null);
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
var G__42251 = arguments.length;
switch (G__42251) {
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
var len__4730__auto___42254 = arguments.length;
var i__4731__auto___42255 = (0);
while(true){
if((i__4731__auto___42255 < len__4730__auto___42254)){
args__4736__auto__.push((arguments[i__4731__auto___42255]));

var G__42256 = (i__4731__auto___42255 + (1));
i__4731__auto___42255 = G__42256;
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
var G__42257 = cljs.core.nnext(in$);
var G__42258 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__42257;
out = G__42258;
continue;
} else {
return out;
}
break;
}
});

tailrecursion.priority_map.priority_map.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
tailrecursion.priority_map.priority_map.cljs$lang$applyTo = (function (seq42253){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42253));
});

/**
 * keyval => key val
 *   Returns a new priority map with supplied
 *   mappings, using the supplied comparator.
 */
tailrecursion.priority_map.priority_map_by = (function tailrecursion$priority_map$priority_map_by(var_args){
var args__4736__auto__ = [];
var len__4730__auto___42261 = arguments.length;
var i__4731__auto___42262 = (0);
while(true){
if((i__4731__auto___42262 < len__4730__auto___42261)){
args__4736__auto__.push((arguments[i__4731__auto___42262]));

var G__42263 = (i__4731__auto___42262 + (1));
i__4731__auto___42262 = G__42263;
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
var G__42264 = cljs.core.nnext(in$);
var G__42265 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__42264;
out = G__42265;
continue;
} else {
return out;
}
break;
}
});

tailrecursion.priority_map.priority_map_by.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
tailrecursion.priority_map.priority_map_by.cljs$lang$applyTo = (function (seq42259){
var G__42260 = cljs.core.first(seq42259);
var seq42259__$1 = cljs.core.next(seq42259);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42260,seq42259__$1);
});

/**
 * keyval => key val
 *   Returns a new priority map with supplied
 *   mappings, using the supplied keyfn.
 */
tailrecursion.priority_map.priority_map_keyfn = (function tailrecursion$priority_map$priority_map_keyfn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___42268 = arguments.length;
var i__4731__auto___42269 = (0);
while(true){
if((i__4731__auto___42269 < len__4730__auto___42268)){
args__4736__auto__.push((arguments[i__4731__auto___42269]));

var G__42270 = (i__4731__auto___42269 + (1));
i__4731__auto___42269 = G__42270;
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
var G__42271 = cljs.core.nnext(in$);
var G__42272 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__42271;
out = G__42272;
continue;
} else {
return out;
}
break;
}
});

tailrecursion.priority_map.priority_map_keyfn.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
tailrecursion.priority_map.priority_map_keyfn.cljs$lang$applyTo = (function (seq42266){
var G__42267 = cljs.core.first(seq42266);
var seq42266__$1 = cljs.core.next(seq42266);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42267,seq42266__$1);
});

/**
 * keyval => key val
 *   Returns a new priority map with supplied
 *   mappings, using the supplied keyfn and comparator.
 */
tailrecursion.priority_map.priority_map_keyfn_by = (function tailrecursion$priority_map$priority_map_keyfn_by(var_args){
var args__4736__auto__ = [];
var len__4730__auto___42276 = arguments.length;
var i__4731__auto___42277 = (0);
while(true){
if((i__4731__auto___42277 < len__4730__auto___42276)){
args__4736__auto__.push((arguments[i__4731__auto___42277]));

var G__42278 = (i__4731__auto___42277 + (1));
i__4731__auto___42277 = G__42278;
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
var G__42279 = cljs.core.nnext(in$);
var G__42280 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out,cljs.core.first(in$),cljs.core.second(in$));
in$ = G__42279;
out = G__42280;
continue;
} else {
return out;
}
break;
}
});

tailrecursion.priority_map.priority_map_keyfn_by.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
tailrecursion.priority_map.priority_map_keyfn_by.cljs$lang$applyTo = (function (seq42273){
var G__42274 = cljs.core.first(seq42273);
var seq42273__$1 = cljs.core.next(seq42273);
var G__42275 = cljs.core.first(seq42273__$1);
var seq42273__$2 = cljs.core.next(seq42273__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42274,G__42275,seq42273__$2);
});

