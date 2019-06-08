// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('instaparse.line_col');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('instaparse.transform');
goog.require('instaparse.util');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
instaparse.line_col.Cursor = (function (index,line,column,__meta,__extmap,__hash){
this.index = index;
this.line = line;
this.column = column;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
instaparse.line_col.Cursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

instaparse.line_col.Cursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k22392,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__22396 = k22392;
var G__22396__$1 = (((G__22396 instanceof cljs.core.Keyword))?G__22396.fqn:null);
switch (G__22396__$1) {
case "index":
return self__.index;

break;
case "line":
return self__.line;

break;
case "column":
return self__.column;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k22392,else__4388__auto__);

}
});

instaparse.line_col.Cursor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__22397){
var vec__22398 = p__22397;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22398,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22398,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

instaparse.line_col.Cursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#instaparse.line-col.Cursor{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$index,self__.index],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$line,self__.line],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$column,self__.column],null))], null),self__.__extmap));
});

instaparse.line_col.Cursor.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22391){
var self__ = this;
var G__22391__$1 = this;
return (new cljs.core.RecordIter((0),G__22391__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$index,cljs.core.cst$kw$line,cljs.core.cst$kw$column], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

instaparse.line_col.Cursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

instaparse.line_col.Cursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new instaparse.line_col.Cursor(self__.index,self__.line,self__.column,self__.__meta,self__.__extmap,self__.__hash));
});

instaparse.line_col.Cursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

instaparse.line_col.Cursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__22401 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1036355234 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__22401(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

instaparse.line_col.Cursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this22393,other22394){
var self__ = this;
var this22393__$1 = this;
return (((!((other22394 == null)))) && ((this22393__$1.constructor === other22394.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22393__$1.index,other22394.index)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22393__$1.line,other22394.line)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22393__$1.column,other22394.column)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22393__$1.__extmap,other22394.__extmap)));
});

instaparse.line_col.Cursor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$index,null,cljs.core.cst$kw$column,null,cljs.core.cst$kw$line,null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new instaparse.line_col.Cursor(self__.index,self__.line,self__.column,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

instaparse.line_col.Cursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__22391){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__22402 = cljs.core.keyword_identical_QMARK_;
var expr__22403 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__22405 = cljs.core.cst$kw$index;
var G__22406 = expr__22403;
return (pred__22402.cljs$core$IFn$_invoke$arity$2 ? pred__22402.cljs$core$IFn$_invoke$arity$2(G__22405,G__22406) : pred__22402.call(null,G__22405,G__22406));
})())){
return (new instaparse.line_col.Cursor(G__22391,self__.line,self__.column,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22407 = cljs.core.cst$kw$line;
var G__22408 = expr__22403;
return (pred__22402.cljs$core$IFn$_invoke$arity$2 ? pred__22402.cljs$core$IFn$_invoke$arity$2(G__22407,G__22408) : pred__22402.call(null,G__22407,G__22408));
})())){
return (new instaparse.line_col.Cursor(self__.index,G__22391,self__.column,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__22409 = cljs.core.cst$kw$column;
var G__22410 = expr__22403;
return (pred__22402.cljs$core$IFn$_invoke$arity$2 ? pred__22402.cljs$core$IFn$_invoke$arity$2(G__22409,G__22410) : pred__22402.call(null,G__22409,G__22410));
})())){
return (new instaparse.line_col.Cursor(self__.index,self__.line,G__22391,self__.__meta,self__.__extmap,null));
} else {
return (new instaparse.line_col.Cursor(self__.index,self__.line,self__.column,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__22391),null));
}
}
}
});

instaparse.line_col.Cursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$index,self__.index,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$line,self__.line,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$column,self__.column,null))], null),self__.__extmap));
});

instaparse.line_col.Cursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__22391){
var self__ = this;
var this__4384__auto____$1 = this;
return (new instaparse.line_col.Cursor(self__.index,self__.line,self__.column,G__22391,self__.__extmap,self__.__hash));
});

instaparse.line_col.Cursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

instaparse.line_col.Cursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$index,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$int], null)),cljs.core.with_meta(cljs.core.cst$sym$line,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$long], null)),cljs.core.with_meta(cljs.core.cst$sym$column,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$long], null))], null);
});

instaparse.line_col.Cursor.cljs$lang$type = true;

instaparse.line_col.Cursor.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"instaparse.line-col/Cursor",null,(1),null));
});

instaparse.line_col.Cursor.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"instaparse.line-col/Cursor");
});

/**
 * Positional factory function for instaparse.line-col/Cursor.
 */
instaparse.line_col.__GT_Cursor = (function instaparse$line_col$__GT_Cursor(index,line,column){
return (new instaparse.line_col.Cursor(index,line,column,null,null,null));
});

/**
 * Factory function for instaparse.line-col/Cursor, taking a map of keywords to field values.
 */
instaparse.line_col.map__GT_Cursor = (function instaparse$line_col$map__GT_Cursor(G__22395){
var extmap__4424__auto__ = (function (){var G__22411 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__22395,cljs.core.cst$kw$index,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$line,cljs.core.cst$kw$column], 0));
if(cljs.core.record_QMARK_(G__22395)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__22411);
} else {
return G__22411;
}
})();
return (new instaparse.line_col.Cursor(cljs.core.cst$kw$index.cljs$core$IFn$_invoke$arity$1(G__22395),cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(G__22395),cljs.core.cst$kw$column.cljs$core$IFn$_invoke$arity$1(G__22395),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

instaparse.line_col.advance_cursor = (function instaparse$line_col$advance_cursor(cursor,text,new_index){
var new_index__$1 = (new_index | (0));
if((cursor.index <= new_index__$1)){
} else {
throw (new Error("Assert failed: (<= (.-index cursor) new-index)"));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cursor.index,new_index__$1)){
return cursor;
} else {
var index = cursor.index;
var line = cursor.line;
var column = cursor.column;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,new_index__$1)){
return (new instaparse.line_col.Cursor(index,line,column,null,null,null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(text.charAt(index),"\n")){
var G__22413 = (index + (1));
var G__22414 = (line + (1));
var G__22415 = (1);
index = G__22413;
line = G__22414;
column = G__22415;
continue;
} else {
var G__22416 = (index + (1));
var G__22417 = line;
var G__22418 = (column + (1));
index = G__22416;
line = G__22417;
column = G__22418;
continue;

}
}
break;
}
}
});
/**
 * Given a string `text`, returns a function that takes an index into the string,
 * and returns a cursor, including line and column information.  For efficiency,
 * inputs must be fed into the function in increasing order.
 */
instaparse.line_col.make_line_col_fn = (function instaparse$line_col$make_line_col_fn(text){
var cursor_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((new instaparse.line_col.Cursor((0),(1),(1),null,null,null)));
return ((function (cursor_state){
return (function instaparse$line_col$make_line_col_fn_$_line_col(i){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cursor_state,instaparse.line_col.advance_cursor,text,i);

return cljs.core.deref(cursor_state);
});
;})(cursor_state))
});
instaparse.line_col.hiccup_add_line_col_spans = (function instaparse$line_col$hiccup_add_line_col_spans(line_col_fn,parse_tree){
var m = cljs.core.meta(parse_tree);
var start_index = cljs.core.cst$kw$instaparse$gll_SLASH_start_DASH_index.cljs$core$IFn$_invoke$arity$1(m);
var end_index = cljs.core.cst$kw$instaparse$gll_SLASH_end_DASH_index.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var and__4120__auto__ = start_index;
if(cljs.core.truth_(and__4120__auto__)){
return end_index;
} else {
return and__4120__auto__;
}
})())){
var start_cursor = (line_col_fn.cljs$core$IFn$_invoke$arity$1 ? line_col_fn.cljs$core$IFn$_invoke$arity$1(start_index) : line_col_fn.call(null,start_index));
var children = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(instaparse.line_col.hiccup_add_line_col_spans,line_col_fn),cljs.core.next(parse_tree)));
var end_cursor = (line_col_fn.cljs$core$IFn$_invoke$arity$1 ? line_col_fn.cljs$core$IFn$_invoke$arity$1(end_index) : line_col_fn.call(null,end_index));
return cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(parse_tree)], null),children),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.meta(parse_tree),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$instaparse$gll_SLASH_start_DASH_line,cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(start_cursor),cljs.core.cst$kw$instaparse$gll_SLASH_start_DASH_column,cljs.core.cst$kw$column.cljs$core$IFn$_invoke$arity$1(start_cursor),cljs.core.cst$kw$instaparse$gll_SLASH_end_DASH_line,cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(end_cursor),cljs.core.cst$kw$instaparse$gll_SLASH_end_DASH_column,cljs.core.cst$kw$column.cljs$core$IFn$_invoke$arity$1(end_cursor)], null)], 0)));
} else {
return parse_tree;
}
});
instaparse.line_col.enlive_add_line_col_spans = (function instaparse$line_col$enlive_add_line_col_spans(line_col_fn,parse_tree){
var m = cljs.core.meta(parse_tree);
var start_index = cljs.core.cst$kw$instaparse$gll_SLASH_start_DASH_index.cljs$core$IFn$_invoke$arity$1(m);
var end_index = cljs.core.cst$kw$instaparse$gll_SLASH_end_DASH_index.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var and__4120__auto__ = start_index;
if(cljs.core.truth_(and__4120__auto__)){
return end_index;
} else {
return and__4120__auto__;
}
})())){
var start_cursor = (line_col_fn.cljs$core$IFn$_invoke$arity$1 ? line_col_fn.cljs$core$IFn$_invoke$arity$1(start_index) : line_col_fn.call(null,start_index));
var children = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(instaparse.line_col.enlive_add_line_col_spans,line_col_fn),cljs.core.cst$kw$content.cljs$core$IFn$_invoke$arity$1(parse_tree)));
var end_cursor = (line_col_fn.cljs$core$IFn$_invoke$arity$1 ? line_col_fn.cljs$core$IFn$_invoke$arity$1(end_index) : line_col_fn.call(null,end_index));
return cljs.core.with_meta(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parse_tree,cljs.core.cst$kw$content,children),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.meta(parse_tree),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$instaparse$gll_SLASH_start_DASH_line,cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(start_cursor),cljs.core.cst$kw$instaparse$gll_SLASH_start_DASH_column,cljs.core.cst$kw$column.cljs$core$IFn$_invoke$arity$1(start_cursor),cljs.core.cst$kw$instaparse$gll_SLASH_end_DASH_line,cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(end_cursor),cljs.core.cst$kw$instaparse$gll_SLASH_end_DASH_column,cljs.core.cst$kw$column.cljs$core$IFn$_invoke$arity$1(end_cursor)], null)], 0)));
} else {
return parse_tree;
}
});
/**
 * Given a string `text` and a `parse-tree` for text, return parse tree
 * with its metadata annotated with line and column info. The info can
 * then be found in the metadata map under the keywords:
 *  
 * :instaparse.gll/start-line, :instaparse.gll/start-column,
 * :instaparse.gll/end-line, :instaparse.gll/end-column
 * 
 * The start is inclusive, the end is exclusive. Lines and columns are 1-based.
 */
instaparse.line_col.add_line_col_spans = (function instaparse$line_col$add_line_col_spans(text,parse_tree){
var line_col_fn = instaparse.line_col.make_line_col_fn(text);
if((parse_tree == null)){
return null;
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.map_QMARK_(parse_tree);
if(and__4120__auto__){
return cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(parse_tree);
} else {
return and__4120__auto__;
}
})())){
return instaparse.line_col.enlive_add_line_col_spans(line_col_fn,parse_tree);
} else {
if(((cljs.core.vector_QMARK_(parse_tree)) && ((cljs.core.first(parse_tree) instanceof cljs.core.Keyword)))){
return instaparse.line_col.hiccup_add_line_col_spans(line_col_fn,parse_tree);
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.sequential_QMARK_(parse_tree);
if(and__4120__auto__){
var and__4120__auto____$1 = cljs.core.map_QMARK_(cljs.core.first(parse_tree));
if(and__4120__auto____$1){
return cljs.core.cst$kw$tag.cljs$core$IFn$_invoke$arity$1(cljs.core.first(parse_tree));
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())){
return instaparse.transform.map_preserving_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(instaparse.line_col.enlive_add_line_col_spans,line_col_fn),parse_tree);
} else {
if(((cljs.core.sequential_QMARK_(parse_tree)) && (cljs.core.vector_QMARK_(cljs.core.first(parse_tree))) && ((cljs.core.first(cljs.core.first(parse_tree)) instanceof cljs.core.Keyword)))){
return instaparse.transform.map_preserving_meta(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(instaparse.line_col.hiccup_add_line_col_spans,line_col_fn),parse_tree);
} else {
if((parse_tree instanceof instaparse.gll.Failure)){
return parse_tree;
} else {
return instaparse.util.throw_illegal_argument_exception.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Invalid parse-tree, not recognized as either enlive or hiccup format."], 0));

}
}
}
}
}
}
});
