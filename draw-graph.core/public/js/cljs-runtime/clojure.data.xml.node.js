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
clojure.data.xml.node.Element.prototype.toString = (function (){
var self__ = this;
var _ = this;
var qname = clojure.data.xml.name.as_qname(self__.tag);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["<",qname], null),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (qname,_){
return (function (p__50603){
var vec__50604 = p__50603;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50604,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50604,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",clojure.data.xml.name.as_qname(n),"=",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0))], null);
});})(qname,_))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.attrs], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core.seq(self__.content))?cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [">"], null),self__.content,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["</",qname,">"], null)], 0)):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/>"], null))], 0)));
});

clojure.data.xml.node.Element.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$ILookup$_lookup$arity$3(null,k,null);
});

clojure.data.xml.node.Element.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,nf){
var self__ = this;
var this$__$1 = this;
var G__50612 = k;
var G__50612__$1 = (((G__50612 instanceof cljs.core.Keyword))?G__50612.fqn:null);
switch (G__50612__$1) {
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
});

clojure.data.xml.node.Element.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
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
});

clojure.data.xml.node.Element.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.RecordIter((0),this$__$1,(3),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"content","content",15833224)], null),cljs.core.nil_iter()));
});

clojure.data.xml.node.Element.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.meta;
});

clojure.data.xml.node.Element.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new clojure.data.xml.node.Element(self__.tag,self__.attrs,self__.content,self__.meta));
});

clojure.data.xml.node.Element.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (3);
});

clojure.data.xml.node.Element.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.hash_unordered_coll(this$__$1);
});

clojure.data.xml.node.Element.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return (((this$__$1 === other)) || (cljs.core.equiv_map(this$__$1,other)));
});

clojure.data.xml.node.Element.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new clojure.data.xml.node.Element(self__.tag,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY));
});

clojure.data.xml.node.Element.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core.with_meta((function (){var G__50642 = k;
var G__50642__$1 = (((G__50642 instanceof cljs.core.Keyword))?G__50642.fqn:null);
switch (G__50642__$1) {
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
});

clojure.data.xml.node.Element.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,k,v){
var self__ = this;
var this$__$1 = this;
var G__50643 = k;
var G__50643__$1 = (((G__50643 instanceof cljs.core.Keyword))?G__50643.fqn:null);
switch (G__50643__$1) {
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
});

clojure.data.xml.node.Element.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tag","tag",-1290361223),self__.tag], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),self__.attrs], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",15833224),self__.content], null)], null));
});

clojure.data.xml.node.Element.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,next_meta){
var self__ = this;
var this$__$1 = this;
return (new clojure.data.xml.node.Element(self__.tag,self__.attrs,self__.content,next_meta));
});

clojure.data.xml.node.Element.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,entry){
var self__ = this;
var this$__$1 = this;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),self__.tag,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),self__.attrs,new cljs.core.Keyword(null,"content","content",15833224),self__.content], null),self__.meta),entry);
});

clojure.data.xml.node.Element.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"content","content",1656364751,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null)], null);
});

clojure.data.xml.node.Element.cljs$lang$type = true;

clojure.data.xml.node.Element.cljs$lang$ctorStr = "clojure.data.xml.node/Element";

clojure.data.xml.node.Element.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"clojure.data.xml.node/Element");
});

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
clojure.data.xml.node.CData.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

clojure.data.xml.node.CData.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k50657,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__50664 = k50657;
var G__50664__$1 = (((G__50664 instanceof cljs.core.Keyword))?G__50664.fqn:null);
switch (G__50664__$1) {
case "content":
return self__.content;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k50657,else__4388__auto__);

}
});

clojure.data.xml.node.CData.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__50670){
var vec__50671 = p__50670;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50671,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50671,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

clojure.data.xml.node.CData.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#clojure.data.xml.node.CData{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"content","content",15833224),self__.content],null))], null),self__.__extmap));
});

clojure.data.xml.node.CData.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50656){
var self__ = this;
var G__50656__$1 = this;
return (new cljs.core.RecordIter((0),G__50656__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",15833224)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

clojure.data.xml.node.CData.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

clojure.data.xml.node.CData.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new clojure.data.xml.node.CData(self__.content,self__.__meta,self__.__extmap,self__.__hash));
});

clojure.data.xml.node.CData.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

clojure.data.xml.node.CData.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__50686 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1970047562 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__50686(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

clojure.data.xml.node.CData.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50658,other50659){
var self__ = this;
var this50658__$1 = this;
return (((!((other50659 == null)))) && ((this50658__$1.constructor === other50659.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50658__$1.content,other50659.content)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50658__$1.__extmap,other50659.__extmap)));
});

clojure.data.xml.node.CData.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",15833224),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new clojure.data.xml.node.CData(self__.content,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

clojure.data.xml.node.CData.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__50656){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__50691 = cljs.core.keyword_identical_QMARK_;
var expr__50692 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__50694 = new cljs.core.Keyword(null,"content","content",15833224);
var G__50695 = expr__50692;
return (pred__50691.cljs$core$IFn$_invoke$arity$2 ? pred__50691.cljs$core$IFn$_invoke$arity$2(G__50694,G__50695) : pred__50691.call(null,G__50694,G__50695));
})())){
return (new clojure.data.xml.node.CData(G__50656,self__.__meta,self__.__extmap,null));
} else {
return (new clojure.data.xml.node.CData(self__.content,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__50656),null));
}
});

clojure.data.xml.node.CData.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"content","content",15833224),self__.content,null))], null),self__.__extmap));
});

clojure.data.xml.node.CData.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__50656){
var self__ = this;
var this__4384__auto____$1 = this;
return (new clojure.data.xml.node.CData(self__.content,G__50656,self__.__extmap,self__.__hash));
});

clojure.data.xml.node.CData.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

clojure.data.xml.node.CData.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"content","content",1656364751,null)], null);
});

clojure.data.xml.node.CData.cljs$lang$type = true;

clojure.data.xml.node.CData.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"clojure.data.xml.node/CData",null,(1),null));
});

clojure.data.xml.node.CData.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"clojure.data.xml.node/CData");
});

/**
 * Positional factory function for clojure.data.xml.node/CData.
 */
clojure.data.xml.node.__GT_CData = (function clojure$data$xml$node$__GT_CData(content){
return (new clojure.data.xml.node.CData(content,null,null,null));
});

/**
 * Factory function for clojure.data.xml.node/CData, taking a map of keywords to field values.
 */
clojure.data.xml.node.map__GT_CData = (function clojure$data$xml$node$map__GT_CData(G__50660){
var extmap__4424__auto__ = (function (){var G__50704 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__50660,new cljs.core.Keyword(null,"content","content",15833224));
if(cljs.core.record_QMARK_(G__50660)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__50704);
} else {
return G__50704;
}
})();
return (new clojure.data.xml.node.CData(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(G__50660),null,cljs.core.not_empty(extmap__4424__auto__),null));
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
clojure.data.xml.node.Comment.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

clojure.data.xml.node.Comment.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k50706,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__50717 = k50706;
var G__50717__$1 = (((G__50717 instanceof cljs.core.Keyword))?G__50717.fqn:null);
switch (G__50717__$1) {
case "content":
return self__.content;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k50706,else__4388__auto__);

}
});

clojure.data.xml.node.Comment.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__50719){
var vec__50720 = p__50719;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50720,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50720,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

clojure.data.xml.node.Comment.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#clojure.data.xml.node.Comment{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"content","content",15833224),self__.content],null))], null),self__.__extmap));
});

clojure.data.xml.node.Comment.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50705){
var self__ = this;
var G__50705__$1 = this;
return (new cljs.core.RecordIter((0),G__50705__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",15833224)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

clojure.data.xml.node.Comment.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

clojure.data.xml.node.Comment.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new clojure.data.xml.node.Comment(self__.content,self__.__meta,self__.__extmap,self__.__hash));
});

clojure.data.xml.node.Comment.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

clojure.data.xml.node.Comment.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__50733 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (709226074 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__50733(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

clojure.data.xml.node.Comment.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50707,other50708){
var self__ = this;
var this50707__$1 = this;
return (((!((other50708 == null)))) && ((this50707__$1.constructor === other50708.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50707__$1.content,other50708.content)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50707__$1.__extmap,other50708.__extmap)));
});

clojure.data.xml.node.Comment.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",15833224),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new clojure.data.xml.node.Comment(self__.content,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

clojure.data.xml.node.Comment.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__50705){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__50749 = cljs.core.keyword_identical_QMARK_;
var expr__50750 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__50752 = new cljs.core.Keyword(null,"content","content",15833224);
var G__50753 = expr__50750;
return (pred__50749.cljs$core$IFn$_invoke$arity$2 ? pred__50749.cljs$core$IFn$_invoke$arity$2(G__50752,G__50753) : pred__50749.call(null,G__50752,G__50753));
})())){
return (new clojure.data.xml.node.Comment(G__50705,self__.__meta,self__.__extmap,null));
} else {
return (new clojure.data.xml.node.Comment(self__.content,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__50705),null));
}
});

clojure.data.xml.node.Comment.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"content","content",15833224),self__.content,null))], null),self__.__extmap));
});

clojure.data.xml.node.Comment.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__50705){
var self__ = this;
var this__4384__auto____$1 = this;
return (new clojure.data.xml.node.Comment(self__.content,G__50705,self__.__extmap,self__.__hash));
});

clojure.data.xml.node.Comment.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

clojure.data.xml.node.Comment.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"content","content",1656364751,null)], null);
});

clojure.data.xml.node.Comment.cljs$lang$type = true;

clojure.data.xml.node.Comment.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"clojure.data.xml.node/Comment",null,(1),null));
});

clojure.data.xml.node.Comment.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"clojure.data.xml.node/Comment");
});

/**
 * Positional factory function for clojure.data.xml.node/Comment.
 */
clojure.data.xml.node.__GT_Comment = (function clojure$data$xml$node$__GT_Comment(content){
return (new clojure.data.xml.node.Comment(content,null,null,null));
});

/**
 * Factory function for clojure.data.xml.node/Comment, taking a map of keywords to field values.
 */
clojure.data.xml.node.map__GT_Comment = (function clojure$data$xml$node$map__GT_Comment(G__50709){
var extmap__4424__auto__ = (function (){var G__50761 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__50709,new cljs.core.Keyword(null,"content","content",15833224));
if(cljs.core.record_QMARK_(G__50709)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__50761);
} else {
return G__50761;
}
})();
return (new clojure.data.xml.node.Comment(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(G__50709),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

/**
 * Create an xml element from a content collection and optional metadata
 */
clojure.data.xml.node.element_STAR_ = (function clojure$data$xml$node$element_STAR_(var_args){
var G__50768 = arguments.length;
switch (G__50768) {
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

clojure.data.xml.node.element_STAR_.cljs$core$IFn$_invoke$arity$4 = (function (tag,attrs,content,meta){
return (new clojure.data.xml.node.Element(tag,(function (){var or__4131__auto__ = attrs;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,content),meta));
});

clojure.data.xml.node.element_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (tag,attrs,content){
return (new clojure.data.xml.node.Element(tag,(function (){var or__4131__auto__ = attrs;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,content),null));
});

clojure.data.xml.node.element_STAR_.cljs$lang$maxFixedArity = 4;

/**
 * Create an xml Element from content varargs
 */
clojure.data.xml.node.element = (function clojure$data$xml$node$element(var_args){
var G__50788 = arguments.length;
switch (G__50788) {
case 1:
return clojure.data.xml.node.element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.data.xml.node.element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___50894 = arguments.length;
var i__4731__auto___50895 = (0);
while(true){
if((i__4731__auto___50895 < len__4730__auto___50894)){
args_arr__4751__auto__.push((arguments[i__4731__auto___50895]));

var G__50897 = (i__4731__auto___50895 + (1));
i__4731__auto___50895 = G__50897;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((2)),(0),null));
return clojure.data.xml.node.element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4752__auto__);

}
});

clojure.data.xml.node.element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return clojure.data.xml.node.element_STAR_.cljs$core$IFn$_invoke$arity$3(tag,null,null);
});

clojure.data.xml.node.element.cljs$core$IFn$_invoke$arity$2 = (function (tag,attrs){
return clojure.data.xml.node.element_STAR_.cljs$core$IFn$_invoke$arity$3(tag,attrs,null);
});

clojure.data.xml.node.element.cljs$core$IFn$_invoke$arity$variadic = (function (tag,attrs,content){
return clojure.data.xml.node.element_STAR_.cljs$core$IFn$_invoke$arity$3(tag,attrs,content);
});

/** @this {Function} */
clojure.data.xml.node.element.cljs$lang$applyTo = (function (seq50784){
var G__50785 = cljs.core.first(seq50784);
var seq50784__$1 = cljs.core.next(seq50784);
var G__50786 = cljs.core.first(seq50784__$1);
var seq50784__$2 = cljs.core.next(seq50784__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50785,G__50786,seq50784__$2);
});

clojure.data.xml.node.element.cljs$lang$maxFixedArity = (2);

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
clojure.data.xml.node.map__GT_Element = (function clojure$data$xml$node$map__GT_Element(p__50796){
var map__50797 = p__50796;
var map__50797__$1 = (((((!((map__50797 == null))))?(((((map__50797.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50797.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50797):map__50797);
var el = map__50797__$1;
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50797__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50797__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50797__$1,new cljs.core.Keyword(null,"content","content",15833224));
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