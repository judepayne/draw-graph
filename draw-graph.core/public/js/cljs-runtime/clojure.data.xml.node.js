goog.provide('clojure.data.xml.node');
goog.require('cljs.core');
goog.require('clojure.data.xml.name');

/**
* @constructor
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.IEmptyableCollection}
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
clojure.data.xml.node.Element = (function (tag,attrs,content,meta){
this.tag = tag;
this.attrs = attrs;
this.content = content;
this.meta = meta;
this.cljs$lang$protocol_mask$partition0$ = 2162558734;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(clojure.data.xml.node.Element.prototype.toString = (function (){
var self__ = this;
var _ = this;
var qname = clojure.data.xml.name.as_qname(self__.tag);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["<",qname], null),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__54873){
var vec__54874 = p__54873;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54874,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54874,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",clojure.data.xml.name.as_qname(n),"=",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0))], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.attrs], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core.seq(self__.content))?cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [">"], null),self__.content,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["</",qname,">"], null)], 0)):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/>"], null))], 0)));
}));

(clojure.data.xml.node.Element.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$ILookup$_lookup$arity$3(null,k,null);
}));

(clojure.data.xml.node.Element.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,nf){
var self__ = this;
var this$__$1 = this;
var G__54877 = k;
var G__54877__$1 = (((G__54877 instanceof cljs.core.Keyword))?G__54877.fqn:null);
switch (G__54877__$1) {
case "tag":
return self__.tag;

break;
case "attrs":
return self__.attrs;

break;
case "content":
return self__.content;

break;
default:
return nf;

}
}));

(clojure.data.xml.node.Element.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
cljs.core._write(writer,"#xml/element{:tag ");

cljs.core.pr_writer(self__.tag,writer,opts);

if(cljs.core.empty_QMARK_(self__.attrs)){
} else {
cljs.core._write(writer,", :attrs ");

cljs.core.pr_writer(self__.attrs,writer,opts);
}

if(cljs.core.empty_QMARK_(self__.content)){
} else {
cljs.core._write(writer,", :content ");

cljs.core.pr_sequential_writer(writer,cljs.core.pr_writer,"["," ","]",opts,self__.content);
}

return cljs.core._write(writer,"}");
}));

(clojure.data.xml.node.Element.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.RecordIter((0),this$__$1,(3),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"content","content",15833224)], null),cljs.core.nil_iter()));
}));

(clojure.data.xml.node.Element.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.meta;
}));

(clojure.data.xml.node.Element.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new clojure.data.xml.node.Element(self__.tag,self__.attrs,self__.content,self__.meta));
}));

(clojure.data.xml.node.Element.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (3);
}));

(clojure.data.xml.node.Element.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.hash_unordered_coll(this$__$1);
}));

(clojure.data.xml.node.Element.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return (((this$__$1 === other)) || (cljs.core.equiv_map(this$__$1,other)));
}));

(clojure.data.xml.node.Element.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new clojure.data.xml.node.Element(self__.tag,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY));
}));

(clojure.data.xml.node.Element.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core.with_meta((function (){var G__54892 = k;
var G__54892__$1 = (((G__54892 instanceof cljs.core.Keyword))?G__54892.fqn:null);
switch (G__54892__$1) {
case "tag":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),self__.attrs,new cljs.core.Keyword(null,"content","content",15833224),self__.content], null);

break;
case "attrs":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),self__.tag,new cljs.core.Keyword(null,"content","content",15833224),self__.content], null);

break;
case "content":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),self__.tag,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),self__.attrs], null);

break;
default:
return this$__$1;

}
})(),self__.meta);
}));

(clojure.data.xml.node.Element.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,k,v){
var self__ = this;
var this$__$1 = this;
var G__54897 = k;
var G__54897__$1 = (((G__54897 instanceof cljs.core.Keyword))?G__54897.fqn:null);
switch (G__54897__$1) {
case "tag":
return (new clojure.data.xml.node.Element(v,self__.attrs,self__.content,self__.meta));

break;
case "attrs":
return (new clojure.data.xml.node.Element(self__.tag,v,self__.content,self__.meta));

break;
case "content":
return (new clojure.data.xml.node.Element(self__.tag,self__.attrs,v,self__.meta));

break;
default:
return cljs.core.with_meta(cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"tag","tag",-1290361223),self__.tag,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),self__.attrs,new cljs.core.Keyword(null,"content","content",15833224),self__.content,k,v]),self__.meta);

}
}));

(clojure.data.xml.node.Element.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tag","tag",-1290361223),self__.tag], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),self__.attrs], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",15833224),self__.content], null)], null));
}));

(clojure.data.xml.node.Element.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,next_meta){
var self__ = this;
var this$__$1 = this;
return (new clojure.data.xml.node.Element(self__.tag,self__.attrs,self__.content,next_meta));
}));

(clojure.data.xml.node.Element.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,entry){
var self__ = this;
var this$__$1 = this;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),self__.tag,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),self__.attrs,new cljs.core.Keyword(null,"content","content",15833224),self__.content], null),self__.meta),entry);
}));

(clojure.data.xml.node.Element.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"content","content",1656364751,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null)], null);
}));

(clojure.data.xml.node.Element.cljs$lang$type = true);

(clojure.data.xml.node.Element.cljs$lang$ctorStr = "clojure.data.xml.node/Element");

(clojure.data.xml.node.Element.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"clojure.data.xml.node/Element");
}));

/**
 * Positional factory function for clojure.data.xml.node/Element.
 */
clojure.data.xml.node.__GT_Element = (function clojure$data$xml$node$__GT_Element(tag,attrs,content,meta){
return (new clojure.data.xml.node.Element(tag,attrs,content,meta));
});


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
clojure.data.xml.node.CData = (function (content,__meta,__extmap,__hash){
this.content = content;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(clojure.data.xml.node.CData.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(clojure.data.xml.node.CData.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k54905,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__54915 = k54905;
var G__54915__$1 = (((G__54915 instanceof cljs.core.Keyword))?G__54915.fqn:null);
switch (G__54915__$1) {
case "content":
return self__.content;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k54905,else__4442__auto__);

}
}));

(clojure.data.xml.node.CData.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__54917){
var vec__54918 = p__54917;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54918,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54918,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(clojure.data.xml.node.CData.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#clojure.data.xml.node.CData{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"content","content",15833224),self__.content],null))], null),self__.__extmap));
}));

(clojure.data.xml.node.CData.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__54904){
var self__ = this;
var G__54904__$1 = this;
return (new cljs.core.RecordIter((0),G__54904__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",15833224)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(clojure.data.xml.node.CData.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(clojure.data.xml.node.CData.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new clojure.data.xml.node.CData(self__.content,self__.__meta,self__.__extmap,self__.__hash));
}));

(clojure.data.xml.node.CData.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(clojure.data.xml.node.CData.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (coll__4436__auto__){
return (-1970047562 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
})(this__4435__auto____$1);
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(clojure.data.xml.node.CData.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this54906,other54907){
var self__ = this;
var this54906__$1 = this;
return (((!((other54907 == null)))) && ((this54906__$1.constructor === other54907.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54906__$1.content,other54907.content)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54906__$1.__extmap,other54907.__extmap)));
}));

(clojure.data.xml.node.CData.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",15833224),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new clojure.data.xml.node.CData(self__.content,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(clojure.data.xml.node.CData.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__54904){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__54927 = cljs.core.keyword_identical_QMARK_;
var expr__54928 = k__4447__auto__;
if(cljs.core.truth_((pred__54927.cljs$core$IFn$_invoke$arity$2 ? pred__54927.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"content","content",15833224),expr__54928) : pred__54927.call(null,new cljs.core.Keyword(null,"content","content",15833224),expr__54928)))){
return (new clojure.data.xml.node.CData(G__54904,self__.__meta,self__.__extmap,null));
} else {
return (new clojure.data.xml.node.CData(self__.content,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__54904),null));
}
}));

(clojure.data.xml.node.CData.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"content","content",15833224),self__.content,null))], null),self__.__extmap));
}));

(clojure.data.xml.node.CData.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__54904){
var self__ = this;
var this__4438__auto____$1 = this;
return (new clojure.data.xml.node.CData(self__.content,G__54904,self__.__extmap,self__.__hash));
}));

(clojure.data.xml.node.CData.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4445__auto__,(0)),cljs.core._nth(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(clojure.data.xml.node.CData.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"content","content",1656364751,null)], null);
}));

(clojure.data.xml.node.CData.cljs$lang$type = true);

(clojure.data.xml.node.CData.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"clojure.data.xml.node/CData",null,(1),null));
}));

(clojure.data.xml.node.CData.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"clojure.data.xml.node/CData");
}));

/**
 * Positional factory function for clojure.data.xml.node/CData.
 */
clojure.data.xml.node.__GT_CData = (function clojure$data$xml$node$__GT_CData(content){
return (new clojure.data.xml.node.CData(content,null,null,null));
});

/**
 * Factory function for clojure.data.xml.node/CData, taking a map of keywords to field values.
 */
clojure.data.xml.node.map__GT_CData = (function clojure$data$xml$node$map__GT_CData(G__54908){
var extmap__4478__auto__ = (function (){var G__54933 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__54908,new cljs.core.Keyword(null,"content","content",15833224));
if(cljs.core.record_QMARK_(G__54908)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__54933);
} else {
return G__54933;
}
})();
return (new clojure.data.xml.node.CData(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(G__54908),null,cljs.core.not_empty(extmap__4478__auto__),null));
});


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
clojure.data.xml.node.Comment = (function (content,__meta,__extmap,__hash){
this.content = content;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(clojure.data.xml.node.Comment.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(clojure.data.xml.node.Comment.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k54936,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__54944 = k54936;
var G__54944__$1 = (((G__54944 instanceof cljs.core.Keyword))?G__54944.fqn:null);
switch (G__54944__$1) {
case "content":
return self__.content;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k54936,else__4442__auto__);

}
}));

(clojure.data.xml.node.Comment.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__54945){
var vec__54946 = p__54945;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54946,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54946,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(clojure.data.xml.node.Comment.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#clojure.data.xml.node.Comment{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"content","content",15833224),self__.content],null))], null),self__.__extmap));
}));

(clojure.data.xml.node.Comment.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__54935){
var self__ = this;
var G__54935__$1 = this;
return (new cljs.core.RecordIter((0),G__54935__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",15833224)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(clojure.data.xml.node.Comment.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(clojure.data.xml.node.Comment.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new clojure.data.xml.node.Comment(self__.content,self__.__meta,self__.__extmap,self__.__hash));
}));

(clojure.data.xml.node.Comment.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(clojure.data.xml.node.Comment.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (coll__4436__auto__){
return (709226074 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
})(this__4435__auto____$1);
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(clojure.data.xml.node.Comment.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this54937,other54938){
var self__ = this;
var this54937__$1 = this;
return (((!((other54938 == null)))) && ((this54937__$1.constructor === other54938.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54937__$1.content,other54938.content)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this54937__$1.__extmap,other54938.__extmap)));
}));

(clojure.data.xml.node.Comment.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",15833224),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new clojure.data.xml.node.Comment(self__.content,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(clojure.data.xml.node.Comment.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__54935){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__54964 = cljs.core.keyword_identical_QMARK_;
var expr__54965 = k__4447__auto__;
if(cljs.core.truth_((pred__54964.cljs$core$IFn$_invoke$arity$2 ? pred__54964.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"content","content",15833224),expr__54965) : pred__54964.call(null,new cljs.core.Keyword(null,"content","content",15833224),expr__54965)))){
return (new clojure.data.xml.node.Comment(G__54935,self__.__meta,self__.__extmap,null));
} else {
return (new clojure.data.xml.node.Comment(self__.content,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__54935),null));
}
}));

(clojure.data.xml.node.Comment.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"content","content",15833224),self__.content,null))], null),self__.__extmap));
}));

(clojure.data.xml.node.Comment.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__54935){
var self__ = this;
var this__4438__auto____$1 = this;
return (new clojure.data.xml.node.Comment(self__.content,G__54935,self__.__extmap,self__.__hash));
}));

(clojure.data.xml.node.Comment.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4445__auto__,(0)),cljs.core._nth(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(clojure.data.xml.node.Comment.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"content","content",1656364751,null)], null);
}));

(clojure.data.xml.node.Comment.cljs$lang$type = true);

(clojure.data.xml.node.Comment.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"clojure.data.xml.node/Comment",null,(1),null));
}));

(clojure.data.xml.node.Comment.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"clojure.data.xml.node/Comment");
}));

/**
 * Positional factory function for clojure.data.xml.node/Comment.
 */
clojure.data.xml.node.__GT_Comment = (function clojure$data$xml$node$__GT_Comment(content){
return (new clojure.data.xml.node.Comment(content,null,null,null));
});

/**
 * Factory function for clojure.data.xml.node/Comment, taking a map of keywords to field values.
 */
clojure.data.xml.node.map__GT_Comment = (function clojure$data$xml$node$map__GT_Comment(G__54941){
var extmap__4478__auto__ = (function (){var G__54975 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__54941,new cljs.core.Keyword(null,"content","content",15833224));
if(cljs.core.record_QMARK_(G__54941)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__54975);
} else {
return G__54975;
}
})();
return (new clojure.data.xml.node.Comment(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(G__54941),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

/**
 * Create an xml element from a content collection and optional metadata
 */
clojure.data.xml.node.element_STAR_ = (function clojure$data$xml$node$element_STAR_(var_args){
var G__54981 = arguments.length;
switch (G__54981) {
case 4:
return clojure.data.xml.node.element_STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return clojure.data.xml.node.element_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.data.xml.node.element_STAR_.cljs$core$IFn$_invoke$arity$4 = (function (tag,attrs,content,meta){
return (new clojure.data.xml.node.Element(tag,(function (){var or__4185__auto__ = attrs;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,content),meta));
}));

(clojure.data.xml.node.element_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (tag,attrs,content){
return (new clojure.data.xml.node.Element(tag,(function (){var or__4185__auto__ = attrs;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,content),null));
}));

(clojure.data.xml.node.element_STAR_.cljs$lang$maxFixedArity = 4);

/**
 * Create an xml Element from content varargs
 */
clojure.data.xml.node.element = (function clojure$data$xml$node$element(var_args){
var G__55002 = arguments.length;
switch (G__55002) {
case 1:
return clojure.data.xml.node.element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.data.xml.node.element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___55104 = arguments.length;
var i__4790__auto___55106 = (0);
while(true){
if((i__4790__auto___55106 < len__4789__auto___55104)){
args_arr__4810__auto__.push((arguments[i__4790__auto___55106]));

var G__55107 = (i__4790__auto___55106 + (1));
i__4790__auto___55106 = G__55107;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return clojure.data.xml.node.element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(clojure.data.xml.node.element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return clojure.data.xml.node.element_STAR_.cljs$core$IFn$_invoke$arity$3(tag,null,null);
}));

(clojure.data.xml.node.element.cljs$core$IFn$_invoke$arity$2 = (function (tag,attrs){
return clojure.data.xml.node.element_STAR_.cljs$core$IFn$_invoke$arity$3(tag,attrs,null);
}));

(clojure.data.xml.node.element.cljs$core$IFn$_invoke$arity$variadic = (function (tag,attrs,content){
return clojure.data.xml.node.element_STAR_.cljs$core$IFn$_invoke$arity$3(tag,attrs,content);
}));

/** @this {Function} */
(clojure.data.xml.node.element.cljs$lang$applyTo = (function (seq54999){
var G__55000 = cljs.core.first(seq54999);
var seq54999__$1 = cljs.core.next(seq54999);
var G__55001 = cljs.core.first(seq54999__$1);
var seq54999__$2 = cljs.core.next(seq54999__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55000,G__55001,seq54999__$2);
}));

(clojure.data.xml.node.element.cljs$lang$maxFixedArity = (2));

/**
 * Create a CData node
 */
clojure.data.xml.node.cdata = (function clojure$data$xml$node$cdata(content){
return (new clojure.data.xml.node.CData(content,null,null,null));
});
/**
 * Create a Comment node
 */
clojure.data.xml.node.xml_comment = (function clojure$data$xml$node$xml_comment(content){
return (new clojure.data.xml.node.Comment(content,null,null,null));
});
clojure.data.xml.node.map__GT_Element = (function clojure$data$xml$node$map__GT_Element(p__55040){
var map__55041 = p__55040;
var map__55041__$1 = (((((!((map__55041 == null))))?(((((map__55041.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55041.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__55041):map__55041);
var el = map__55041__$1;
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55041__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55041__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55041__$1,new cljs.core.Keyword(null,"content","content",15833224));
return clojure.data.xml.node.element_STAR_.cljs$core$IFn$_invoke$arity$4(tag,attrs,content,cljs.core.meta(el));
});
clojure.data.xml.node.tagged_element = (function clojure$data$xml$node$tagged_element(el){
if(cljs.core.map_QMARK_(el)){
return clojure.data.xml.node.map__GT_Element(el);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unsupported element representation",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"element","element",1974019749),el], null));

}
});
clojure.data.xml.node.element_QMARK_ = (function clojure$data$xml$node$element_QMARK_(el){
return ((cljs.core.map_QMARK_(el)) && ((!((new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(el) == null)))));
});

//# sourceMappingURL=clojure.data.xml.node.js.map
